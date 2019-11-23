import { Messenger } from '../utility';
import { compute, parseAssignment } from '../parser';

class ExpNode {
    constructor(text) {
        this.text = text;
        this.value = null;
        this.oldValue = null;
    }

    compute(scope, options) {
        this.oldValue = this.value;
        this.value = compute(this.text, scope, options);
    }

    detect() {
        return this.value !== this.oldValue;
    }

    destroy() {
        this.value = null;
        this.oldValue = null;
    }
}

class Binding {
    constructor() {
        this.scope = null;
        this.text = '';
        this.isExp = false;
        this.segments = [];
        this.rightStr = '';
        this.output = false;
        this.value = null;
        this.oldValue = null;
        this.unwatches = [];
        this.change = new Messenger();
    }

    setScope(value) {
        this.scope = value;
    }

    setOutput(value) {
        this.output = value;
    }

    bind(text, isExp) {
        if (text == null) {
            return;
        }

        this.text = text;
        this.isExp = isExp;

        if (isExp) {
            this.segments.push({
                exp: new ExpNode(text),
                leftStr: ''
            });
            return;
        }

        var pattern = /{{([^}]*)}}/g;
        var lastIndex = pattern.lastIndex;
        var match = pattern.exec(text);

        while (match != null) {
            this.segments.push({
                index: match.index,
                exp: new ExpNode(match[1]),
                leftStr: text.substring(lastIndex, match.index)
            });
            lastIndex = pattern.lastIndex;
            match = pattern.exec(text);
        }

        if (this.segments.length > 0 && lastIndex < text.length) {
            this.rightStr = text.substring(lastIndex);
        }
    }

    compute(options) {
        var self = this;

        options = options || {};

        this.oldValue = this.value;

        if (this.segments.length === 0) {
            this.value = this.text;
        }
        else {
            if (this.isExp && this.segments.length === 1) {
                this.segments[0].exp.compute(self.scope, options);
                this.value = this.segments[0].exp.value;
            }
            else {
                var text = '';
                this.segments.forEach(function (segment) {
                    segment.exp.compute(self.scope, options);
                    text += (segment.leftStr + segment.exp.value);
                });
                this.value = text + this.rightStr;
            }
        }

        return this.value;
    }

    assign(value) {
        var assignment = parseAssignment(this.text, this.scope);

        if (assignment.obj != null && assignment.prop != null) {
            assignment.obj.toProxy()[assignment.prop] = value;
        }
    }

    listen() {
        var self = this;
        this.unwatches = this.segments.map(function (segment) {
            return self.scope.$watch(segment.exp.text, function () {
                self.defer(function () {
                    if (self.detect()) {
                        self.change.fire();
                    }
                });
            });
        });
    }

    defer(action) {
        var self = this;

        this.cancelTimeout();

        this.timeoutId = setTimeout(function () {
            self.timeoutId = null;
            action.call(self);
        });
    }

    cancelTimeout() {
        if (this.timeoutId != null) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }

    observe(action) {
        if (this.output) {
            return;
        }

        this.listen();
        this.change.on(action);

        return function () {
            this.change.off(action);
        };
    }

    detect() {
        if (this.output) {
            return false;
        }
        this.compute();
        return this.value !== this.oldValue;
        // return this.segments.some(function (segment) {
        //     return segment.exp.detect();
        // });
    }

    destroy() {
        this.cancelTimeout();
        this.unwatches.forEach(function (unwatch) {
            unwatch.call();
        });
        this.segments.forEach(function (segment) {
            segment.exp.destroy();
        });
        this.segments = null;
        this.scope = null;
        this.value = null;
        this.oldValue = null;
    }
}

export { Binding };