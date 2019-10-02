import * as utils from './utils';
import { propChangingMsg, propChangedMsg } from './handler';

class PropertyChangeSubject {
    constructor() {
        this.plainMap = new Map();
        this.regexMap = new Map();
    }

    on(prop, action, options) {
        var map = utils.isRegExp(prop) ? this.regexMap : this.plainMap;

        if (!map.has(prop)) {
            map.set(prop, []);
        }

        if (options) {
            action.beforeChanged = options.beforeChanged;
        }

        map.get(prop).push(action);
    }

    off(prop, action) {
        var map = utils.isRegExp(prop) ? this.regexMap : this.plainMap;

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

class ObjectPropertyChangeSubject {
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
        if (!this.objMap.has(obj)) {
            this.objMap.set(obj, new PropertyChangeSubject());
        }

        this.objMap.get(obj).on(prop, action, options);
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

export { PropertyChangeSubject, ObjectPropertyChangeSubject };