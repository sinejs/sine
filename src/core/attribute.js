import * as utils from '../utility/utils';
import { VNodeType, VNode } from './base';
import { Binding } from './binding';

// // Window Events
// case 'on-load':
// case 'on-unload':
// // Form Element Events
// case 'on-change':
// case 'on-submit':
// case 'on-reset':
// case 'on-select':
// case 'on-blur':
// case 'on-focus':
// // Image Events
// case 'on-abort':
// // Keyboard Events
// case 'on-keydown':
// case 'on-keypress':
// case 'on-keyup':
// // Mouse Events
// case 'on-click':
// case 'on-dblclick':
// case 'on-mousedown':
// case 'on-mousemove':
// case 'on-mouseout':
// case 'on-mouseover':
// case 'on-mouseup':
var eventText = 'load unload change submit reset select blur focus abort keydown keypress keyup click dblclick mousedown mousemove mouseout mouseover mouseup';
var domEvents = eventText.split(' ');

utils.inherit(AttrNode, VNode);
// attribute node
function AttrNode(name, value) {
    AttrNode.super.call(this, VNodeType.attribute, name, value);
    this.quote = '"';
    this.orgNodeName = name;
    this.isEvent = false;
    this.isBinding = false;
    this.isDomEvent = false;
    this.isDirective = false;
    this.directive = null;
    this.ownerVElement = null;
    this.ownerElement = null;
    this.ownerComponent = null;
    this.binding = new Binding();
}

AttrNode.prototype.belongTo = function (key) {
    return this.orgNodeName === key;
};

AttrNode.prototype.setValue = function (value) {
    this.nodeValue = value;
    this.compile(this.options);
};

AttrNode.prototype.compile = function (options) {
    this.isEvent = this.nodeName.startsWith('@');
    this.isBinding = this.nodeName.startsWith(':');
    this.isDirective = this.nodeName.startsWith('*');
    if (this.isEvent || this.isBinding || this.isDirective) {
        this.nodeName = this.nodeName.substr(1);
    }
    this.isDomEvent = utils.contains(domEvents, this.nodeName);
    this.binding.setOutput(this.isEvent);
    this.binding.bind(this.nodeValue, this.isEvent || this.isBinding || this.isDirective);

    if (this.isDirective) {
        if (options.containsDirective(this.nodeName)) {
            this.directive = options.createDirective(this.nodeName);
            this.directive.$bindVNode(this);
            this.binding.setOutput(this.directive.output);
        }
        else {
            throw new Error('directive ' + this.nodeName + ' is not defined');
        }
    }
};

AttrNode.prototype.link = function (scope, ownerElement, ownerComponent) {
    var self = this;

    this.scope = scope;
    this.ownerElement = ownerElement;
    this.ownerComponent = ownerComponent;
    this.binding.setScope(scope);

    if (this.isEvent) {
        if (this.isDomEvent) {
            this.ownerElement.addEventListener(this.nodeName, function (e) {
                self.binding.compute({
                    locals: {
                        $event: e,
                        $args: null,
                        $element: self.ownerElement
                    }
                });
            });
        }
        else if (ownerComponent != null) {
            ownerComponent.$listen(this.nodeName, function (e, args) {
                self.binding.compute({
                    locals: {
                        $event: e,
                        $args: args,
                        $element: self.ownerElement
                    }
                });
            });
        }
    }
    else {
        if (this.directive) {
            scope.$$childDirectives.push(this.directive);
            this.directive.$setBinding(this.binding);
        }
        else if (ownerComponent != null && ownerComponent.$hasAttr(this.nodeName)) {
            ownerComponent.$setAttr(this.nodeName, this.binding.compute());
        }
        else {
            if (this.nodeName.startsWith('style')) {
                utils.setProperty(this.ownerElement, this.nodeName, this.binding.compute());
            }
            else {
                this.ownerElement.setAttribute(this.nodeName, this.binding.compute());
            }
        }

        this.binding.watchProps(function () {
            self.detect();
        });
    }
};

AttrNode.prototype.detect = function () {
    if (this.directive == null) {
        if (this.hasChange()) {
            this.update();
        }
    }
    else {
        this.directive.$detect(this.ownerElement, this.ownerComponent);
    }
};

AttrNode.prototype.hasChange = function () {
    return this.binding.detect();
};

AttrNode.prototype.update = function () {
    if (this.ownerComponent != null && this.ownerComponent.$hasAttr(this.nodeName)) {
        this.ownerComponent.$setAttr(this.nodeName, this.binding.value);
    }
    else {
        if (this.nodeName.startsWith('style')) {
            utils.setProperty(this.ownerElement, this.nodeName, this.binding.value);
        }
        else {
            this.ownerElement.setAttribute(this.nodeName, this.binding.value);
            if (this.ownerElement.nodeName === 'INPUT' && this.nodeName === 'value') {
                this.ownerElement.value = this.binding.value;
            }
        }
    }
};

AttrNode.prototype.afterLink = function () {
    if (this.directive) {
        this.directive.$insert(this.ownerElement, this.ownerComponent);
    }
};

AttrNode.prototype.directives = function () {
    return this.directive == null ? [] : [this.directive];
};

AttrNode.prototype.getOuterTpl = function () {
    return this.orgNodeName + (this.nodeValue == null ? '' : ('=' + this.quote + this.nodeValue + this.quote));
};

AttrNode.prototype.getInnerTpl = function () {
    return this.orgNodeName + (this.nodeValue == null ? '' : ('=' + this.quote + this.nodeValue + this.quote));
};

AttrNode.prototype.dispose = function (isFromDirective) {
    if(isFromDirective){
        this.directive = null;
    }

    this.binding.destroy();
    this.binding = null;
    this.ownerVElement = null;
    this.ownerElement = null;
    this.ownerComponent = null;
    this.$destroy();
};

AttrNode.prototype.destroy = function(){
    if(this.directive != null){
        this.directive.$dispose(true);
        this.directive = null;
    }

    this.dispose();
};

export { AttrNode };
