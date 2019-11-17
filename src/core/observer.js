import { compute, parseExp } from '../parser';
import { isRegExp, forEach } from '../utility';
import { propChangingMsg, propChangedMsg, GetPropertyHandler } from './handler';

class PropertyObserver {
    constructor() {
        this.plainMap = new Map();
        this.regexMap = new Map();
    }

    on(prop, action, options) {
        var self = this,
            map = isRegExp(prop) ? this.regexMap : this.plainMap;

        if (!map.has(prop)) {
            map.set(prop, []);
        }

        if (options) {
            action.beforeChanged = options.beforeChanged;
        }

        map.get(prop).push(action);

        return function () {
            self.off(prop, action);
        };
    }

    off(prop, action) {
        var map = isRegExp(prop) ? this.regexMap : this.plainMap;

        if (!map.has(prop)) {
            return;
        }

        var actions = map.get(prop);
        var index = actions.indexOf(action);

        if (index !== -1) {
            actions.splice(index, 1);
        }
    }

    fireChanged(prop, args) {
        var self = this;

        if (this.plainMap.has(prop)) {
            this.plainMap.get(prop).forEach(function (action) {
                if (!action.beforeChanged) {
                    action.call(self, prop, args);
                }
            });
        }

        this.regexMap.forEach(function (actions, pattern) {
            if (pattern.test(prop)) {
                actions.forEach(function (action) {
                    if (!action.beforeChanged) {
                        action.call(self, prop, args);
                    }
                });
            }
        });
    }

    fireChanging(prop, args) {
        var self = this;

        if (this.plainMap.has(prop)) {
            this.plainMap.get(prop).forEach(function (action) {
                if (action.beforeChanged) {
                    action.call(self, prop, args);
                }
            });
        }

        this.regexMap.forEach(function (actions, pattern) {
            if (pattern.test(prop)) {
                actions.forEach(function (action) {
                    if (action.beforeChanged) {
                        action.call(self, prop, args);
                    }
                });
            }
        });
    }

    destroy() {
        this.plainMap.clear();
        this.regexMap.clear();
    }
}

class ObjectObserver {
    constructor() {
        var self = this,
            onchanging = function (args) {
                var obj = args.target, prop = args.key;
                self.fireChanging(obj, prop, args.data);
            },
            onchanged = function (args) {
                var obj = args.target, prop = args.key;
                self.fireChanged(obj, prop, args.data);
            };

        propChangingMsg.on(onchanging);
        propChangedMsg.on(onchanged);

        this.offChange = function () {
            propChangingMsg.off(onchanging);
            propChangedMsg.off(onchanged);
        };
        this.objMap = new Map();
    }

    on(obj, prop, action, options) {
        var self = this;

        if (!this.objMap.has(obj)) {
            this.objMap.set(obj, new PropertyObserver());
        }

        return this.objMap.get(obj).on(prop, action, options);
    }

    off(obj, prop, action) {
        if (this.objMap.has(obj)) {
            this.objMap.get(obj).off(prop, action);
        }
    }

    fireChanged(obj, prop, args) {
        if (this.objMap.has(obj)) {
            this.objMap.get(obj).fireChanged(prop, args);
        }
    }

    fireChanging(obj, prop, args) {
        if (this.objMap.has(obj)) {
            this.objMap.get(obj).fireChanging(prop, args);
        }
    }

    destroy() {
        this.offChange.call(this);
        this.objMap.forEach(function (item) {
            item.destroy();
        });
        this.objMap = null;
    }
}

class MemberWatcher {
    constructor(scope, target, key, targetKey) {
        this.scope = scope;
        this.target = target;
        this.key = key;
        this.targetKey = targetKey;
        this.observer = null;
        this.action = null;
        this.unwatch = null;
        this.options = null;

        if (!targetKey) {
            this.id = key;
        }
        else {
            this.id = targetKey + '.' + key;
        }
    }

    start(observer, action, options) {
        this.observer = observer;
        this.action = action;
        this.options = options;
        this.unwatch = this.observer.on(this.target, this.key, this.action, this.options);
    }

    stop() {
        if (this.unwatch != null) {
            this.unwatch.call();
        }
    }

    update(changeKey) {
        if (this.targetKey != null && this.targetKey.startsWith(changeKey)) {
            var newTarget = compute(this.targetKey, this.scope);

            if (newTarget !== this.target) {
                this.stop();
                this.target = newTarget;
                this.unwatch = this.observer.on(this.target, this.key, this.action, this.options);
            }
        }
    }

    destroy() {
        this.stop();
        this.scope = null;
        this.target = null;
        this.observer = null;
        this.action = null;
        this.unwatch = null;
    }
}

class Detector {
    constructor() {
        var self = this;
        this.queue = [];
        this.timeoutId = null;
        this.digest = function () {
            self.defer(function () {
                self.queue.forEach(function (action) {
                    action.call(self);
                });
            });
        };
    }

    defer(action) {
        var self = this;
        this.clearDefer();
        this.timeoutId = setTimeout(function () {
            this.timeoutId = null;
            action.call(self);
        });
    }

    clearDefer() {
        if (this.timeoutId != null) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }

    execute() {
        propChangedMsg.on(this.digest);
    }

    apply(action) {
        this.queue.push(action);
    }

    remove(action) {
        var index = this.queue.indexOf(action);

        if (index !== -1) {
            this.queue.splice(index, 1);
        }
    }

    destroy() {
        propChangedMsg.off(this.digest);
        this.clearDefer();
        this.queue = [];
    }
}

var detector = new Detector();

detector.execute();

class ExpWatcher {
    constructor(scope, exp) {
        var self = this;
        this.scope = scope;
        this.exp = exp;
        this.value = null;
        this.unwatch = null;
        this.detect = function () {
            var oldValue = self.value,
                newValue = compute(self.exp, self.scope);

            if (newValue !== oldValue) {
                self.value = newValue;
                self.action.call(self, {
                    oldValue: oldValue,
                    newValue: newValue
                });
            }
        };
    }

    start(action) {
        var self = this;
        this.action = action;
        this.value = compute(this.exp, this.scope);
        detector.apply(self.detect);
        this.unwatch = function () {
            detector.remove(self.detect);
        };
    }

    stop() {
        if (this.unwatch != null) {
            this.unwatch.call();
            this.action = null;
        }
    }

    destroy() {
        this.stop();
        this.scope = null;
        this.unwatch = null;
    }
}

class Watcher {
    constructor(scope, exp) {
        this.scope = scope;
        this.exp = exp;
        this.observer = null;
        this.action = null;
        this.members = {};
        this.digests = [];
        this.options = null;
    }

    parse() {
        if (this.exp === '*') {
            this.exp = /.+/i;
        }

        if (isRegExp(this.exp)) {
            return [{
                target: this.scope,
                key: this.exp
            }];
        }

        var ast = parseExp(this.exp);

        if (ast.hasCC()) {
            return [{
                dirtyCheck: true,
                key: this.exp
            }];
        }

        // var items = [],
        //     handler = new GetPropertyHandler(true, items),
        //     proxy = new Proxy(this.scope, handler);
        //
        // compute(this.exp, proxy);
        //
        // return items;

        var options = {
            collectMembers: true
        };

        compute(this.exp, this.scope, options);

        return options.members;
    }

    start(observer, action, options) {
        this.observer = observer;
        this.action = action;
        this.options = options;
        this.updateMember();
    }

    updateMember() {
        var self = this;

        this.parse().forEach(function (item) {
            if (item.dirtyCheck) {
                var digest = new ExpWatcher(self.scope, item.key);
                self.digests.push(digest);
                self.startDigest(digest);
            }
            else {
                var member = new MemberWatcher(self.scope, item.target, item.key, item.targetKey);

                if (!self.members[member.id]) {
                    self.members[member.id] = member;
                    self.startMember(member);
                }
            }
        });
    }

    startDigest(digest) {
        var self = this;

        digest.start(function (args) {
            self.action.call(this, args);
        }, this.options);
    }

    startMember(member) {
        var self = this;

        member.start(self.observer, function (prop, args) {
            var changeKey = prop;

            if (member.targetKey != null) {
                changeKey = member.targetKey + '.' + prop;
            }

            forEach(self.members, function (memberWatcher, key) {
                memberWatcher.update(changeKey);
            });

            // self.updateMember();
            self.action.call(this, prop, args);
        }, this.options);
    }

    destroy() {
        forEach(this.members, function (member, key) {
            member.destroy();
        });
        this.digests.forEach(function (digest) {
            digest.destroy();
        });
        this.scope = null;
        this.observer = null;
        this.action = null;
        this.members = null;
        this.digests = null;
    }
}

class Observer {
    constructor() {
        this.observer = new ObjectObserver();
        this.watchers = [];
    }

    watch(obj, exp, action) {
        var self = this,
            watcher = this.createWatcher(obj, exp);

        watcher.start(this.observer, action);

        return function () {
            watcher.destroy();
            self.removeWatcher(watcher);
        };
    }

    validate(obj, exp, action) {
        var self = this,
            watcher = this.createWatcher(obj, exp);

        watcher.start(this.observer, action, {
            beforeChanged: true
        });

        return function () {
            watcher.destroy();
            self.removeWatcher(watcher);
        };
    }

    createWatcher(obj, exp) {
        var watcher = new Watcher(obj, exp);

        this.watchers.push(watcher);

        return watcher;
    }

    removeWatcher(watcher) {
        var index = this.watchers.indexOf(watcher);

        if (index !== -1) {
            this.watchers.splice(index, 1);
        }
    }

    fireChanged(obj, prop, args) {
        return this.observer.fireChanged(obj, prop, args);
    }

    fireChanging(obj, prop, args) {
        return this.observer.fireChanging(obj, prop, args);
    }

    destroy() {
        this.watchers.forEach(function (watcher) {
            watcher.destroy();
        });
        this.watchers = null;
        this.observer.destroy();
        this.observer = null;
    }
}

export { PropertyObserver, Observer };