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

class AttrNode extends VNode {
    constructor(name, value) {
        super(VNodeType.attribute, name, value);
        this.quote = '"';
        this.origin = name;
        this.isEvent = false;
        this.isBinding = false;
        this.isDomEvent = false;
        this.isDirective = false;
        this.directive = null;
        this.ownerElement = null;
        this.ownerComponent = null;
        this.htmlElement = null;
        this.binding = new Binding();
        this.priority = 0;
    }

    belongTo(key) {
        return this.origin === key;
    }

    setValue(value) {
        this.nodeValue = value;
        this.compile(this.options);
    }

    observe(action) {
        this.binding.observe(action);
    }

    compile(options) {
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
                this.directive.$bindNode(this);
                this.binding.setOutput(this.directive.$output);
                this.priority = this.directive.$priority;
            }
            else {
                throw new Error('directive ' + this.nodeName + ' is not defined');
            }
        }
    }

    notifyCompiled(options) {
        if (this.directive != null) {
            this.directive.$compile(options);
        }
    }

    link(scope, htmlElement, ownerComponent) {
        var self = this;

        this.scope = scope;
        this.htmlElement = htmlElement;
        this.ownerComponent = ownerComponent;
        this.binding.setScope(scope);

        if (this.isEvent) {
            if (this.isDomEvent) {
                this.htmlElement.addEventListener(this.nodeName, function (e) {
                    self.binding.compute({
                        locals: {
                            $event: e,
                            $args: null,
                            $element: self.htmlElement
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
                            $element: self.htmlElement
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
                ownerComponent.$initAttr(this.nodeName, this.binding.compute());
            }
            else {
                if (this.nodeName.startsWith('style')) {
                    utils.setProperty(this.htmlElement, this.nodeName, this.binding.compute());
                }
                else {
                    this.htmlElement.setAttribute(this.nodeName, this.binding.compute());
                }
            }

            this.observe(function () {
                self.update();
            });
        }
    }

    detect() {
        if (this.directive == null) {
            if (this.hasChange()) {
                this.update();
            }
        }
        else {
            this.directive.$detect();
        }
    }

    hasChange() {
        return this.binding.detect();
    }

    update() {
        if (this.directive != null) {
            this.directive.$update();
        }
        else {
            if (this.ownerComponent != null && this.ownerComponent.$hasAttr(this.nodeName)) {
                this.ownerComponent.$setAttr(this.nodeName, this.binding.value);
            }
            else {
                if (this.nodeName.startsWith('style')) {
                    utils.setProperty(this.htmlElement, this.nodeName, this.binding.value);
                }
                else {
                    this.htmlElement.setAttribute(this.nodeName, this.binding.value);
                    if (this.htmlElement.nodeName === 'INPUT' && this.nodeName === 'value') {
                        this.htmlElement.value = this.binding.value;
                    }
                }
            }
        }
    }

    notifyLinked() {
        if (this.directive) {
            this.directive.$insert();
        }
    }

    getDirective(key) {
        if (key == null) {
            return this.directive;
        }

        if (this.directive != null && this.directive.$$meta.selector === key) {
            return this.directive;
        }

        return null;
    }

    getOuterTpl() {
        return this.origin + (this.nodeValue == null ? '' : ('=' + this.quote + this.nodeValue + this.quote));
    }

    getInnerTpl() {
        return this.origin + (this.nodeValue == null ? '' : ('=' + this.quote + this.nodeValue + this.quote));
    }

    dispose(isFromDirective) {
        if (isFromDirective) {
            this.directive = null;
        }

        this.binding.destroy();
        this.binding = null;
        this.ownerElement = null;
        this.ownerComponent = null;
        this.htmlElement = null;
        this.$destroy();
    }

    destroy() {
        if (this.directive != null) {
            this.directive.$dispose(true);
            this.directive = null;
        }

        this.dispose();
    }
}

export { AttrNode };
