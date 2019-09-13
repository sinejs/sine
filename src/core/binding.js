import { Messenger } from '../utility/message';
import { GetPropertyHandler } from '../utility/handler';
import { compute } from '../parser';

function ExpNode(text) {
    this.text = text;
    this.value = null;
    this.oldValue = null;
}

ExpNode.prototype.getProps = function(scope, options) {
    var props = [];
    compute(this.text, new Proxy(scope, new GetPropertyHandler(props, '', true)), options);
    return props;
};

ExpNode.prototype.compute = function (scope, options) {
    this.oldValue = this.value;
    this.value = compute(this.text, scope, options);
};

ExpNode.prototype.detect = function () {
    return this.value !== this.oldValue;
};

ExpNode.prototype.destroy = function(){
    this.value = null;
    this.oldValue = null;
    this.props = null;
};

function Binding() {
    this.scope = null;
    this.text = '';
    this.isExp = false;
    this.segments = [];
    this.rightStr = '';
    this.output = false;
    this.value = null;
    this.change = new Messenger();
}

Binding.prototype.setScope = function (value) {
    this.scope = value;
};

Binding.prototype.setOutput = function (value) {
    this.output = value;
};

Binding.prototype.bind = function (text, isExp) {
    if(text == null) {
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
};

Binding.prototype.compute = function (options) {
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
};

Binding.prototype.watchProps = function(action) {
    if (this.output) {
        return;
    }

    var self = this, props = [];

    this.segments.forEach(function (segment) {
        props = props.concat(segment.exp.getProps(self.scope));
    });

    props.forEach(function (prop) {
        self.scope.$watch(prop, function () {
            self.change.fire();
        });
    });

    if (action != null) {
        self.change.on(action);
    }
};

Binding.prototype.detect = function (options) {
    if (this.output) {
        return false;
    }
    var self = this;
    this.compute();
    return this.segments.some(function (segment) {
        return segment.exp.detect(self.scope, options);
    });
};

Binding.prototype.destroy = function () {
    this.segments.forEach(function(segment){
        segment.exp.destroy();
    });
    this.scope = null;
};

export { Binding };