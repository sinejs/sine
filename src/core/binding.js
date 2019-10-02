import { Messenger } from '../utility/message';
import { GetPropertyHandler } from '../utility/handler';
import { compute } from '../parser';

class ExpNode {
    constructor(text) {
        this.text = text;
        this.value = null;
        this.oldValue = null;
    }

    getProps(scope, options) {
        var objProps = [];
        compute(this.text, new Proxy(scope, new GetPropertyHandler(objProps, true)), options);
        return objProps;
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
        this.props = null;
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

    watchProps(action) {
        if (this.output) {
            return;
        }

        var self = this, objProps = [];

        this.segments.forEach(function (segment) {
            objProps = objProps.concat(segment.exp.getProps(self.scope));
        });

        objProps.forEach(function (objProp) {
            self.scope.$watch(objProp.obj, objProp.prop, function () {
                self.change.fire();
            });
        });

        if (action != null) {
            self.change.on(action);
        }
    }

    detect(options) {
        if (this.output) {
            return false;
        }
        var self = this;
        this.compute();
        return this.segments.some(function (segment) {
            return segment.exp.detect(self.scope, options);
        });
    }

    destroy() {
        this.segments.forEach(function (segment) {
            segment.exp.destroy();
        });
        this.scope = null;
    }
}

export { Binding };