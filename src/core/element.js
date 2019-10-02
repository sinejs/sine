import * as eleUtils from '../utility/ele-utils';
import { VNodeType, VNode } from './base';
import { CustomNode } from './custom';
import { AttrNode } from './attribute';
import { parse } from '../parser';

class ElementNode extends VNode {
    constructor() {
        super(VNodeType.element, name);
        this.attributes = [];
        this.element = null;
        this.component = null;
        this.selfClosed = false;
        this.compileOptions = null;
        this.isComponent = false;
    }

    $pushAttribute(attr) {
        attr.ownerVElement = this;
        this.attributes.push(attr);
    }

    hasAttributes() {
        return this.attributes.length !== 0;
    }

    setAttribute(key, value) {
        var target, matches = this.attributes.filter(function (attr) {
            return attr.belongTo(key);
        });

        if (matches.length > 0) {
            target = matches[0];
            target.setValue(value);
        }
        else {
            target = new AttrNode(key, value);
            target.ownerVElement = this;
            target.compile(this.compileOptions);
        }

        this.attributes.push(target);

        return target;
    }

    removeAttribute(key) {
        var target = [], self = this;

        if (key instanceof AttrNode) {
            var index = this.attributes.indexOf(key);
            if (index !== -1) {
                target = self.attributes.splice(index, 1);
            }
        }
        else {
            this.attributes.filter(function (attr) {
                return attr.belongTo(key);
            }).forEach(function (match) {
                var index = self.attributes.indexOf(match);
                match.destroy();
                target = self.attributes.splice(index, 1);
            });
        }

        return target.length > 0 ? target[0] : null;
    }

    appendAttribute(attr) {
        if (attr.ownerVElement != null) {
            throw new Error("Current attribute is not new!");
        }

        attr.ownerVElement = this;
        attr.compile(this.compileOptions);
        this.attributes.push(attr);
        return attr;
    }

    getOuterTpl() {
        var attrTpl = '', childTpl = '';

        this.attributes.forEach(function (attr) {
            attrTpl += ' ';
            attrTpl += attr.getOuterTpl();
        });

        this.childNodes.forEach(function (child) {
            childTpl += child.getOuterTpl();
        });

        var tpl = '<' + this.nodeName + attrTpl + '>' + childTpl;

        if (!this.selfClosed) {
            tpl += ('</' + this.nodeName + '>');
        }

        return tpl;
    }

    getInnerTpl() {
        var childTpl = '';

        this.childNodes.forEach(function (child) {
            childTpl += child.getOuterTpl();
        });

        return childTpl;
    }

    setOuterTpl(tpl) {
        var self = this;
        parse(tpl).forEach(function (vnode) {
            vnode.parentNode = null;
            self.parentNode.insertBefore(self, vnode);
        });
        self.parentNode.removeChild(self);
    }

    setInnerTpl(tpl) {
        var self = this;
        this.clearChildNodes();
        parse(tpl).forEach(function (vnode) {
            vnode.parentNode = null;
            self.appendChild(vnode);
        });
    }

    getDirective(key) {
        var result = [];

        this.attributes.map(function (attr) {
            return attr.directives();
        }).forEach(function (item) {
            result = result.concat(item);
        });

        return result.filter(function (item) {
            return item.$$meta.selector === key;
        });
    }

    compile(options) {
        this.compileOptions = options;
        this.attributes.forEach(function (attr) {
            attr.compile(options);
        });
        this.isComponent = options.containsComponent(this.nodeName);
        if (!this.isComponent) {
            this.childNodes.forEach(function (child) {
                child.compile(options);
            });
        }
    }

    directives() {
        var result = [];

        this.attributes.map(function (attr) {
            return attr.directives();
        }).forEach(function (item) {
            result = result.concat(item);
        });

        if (this.component == null) {
            this.childNodes.map(function (child) {
                return child.directives();
            }).forEach(function (item) {
                result = result.concat(item);
            });
        }

        return result;
    }

    link(scope) {
        var self = this;

        self.scope = scope;
        self.element = document.createElement(self.nodeName);

        if (this.isComponent) {
            this.component = scope.$createComponent(this.nodeName);
            this.component.$bindVNode(this);
            self.attributes.forEach(function (attr) {
                attr.link(scope, self.element, self.component);
            });
            self.component.$initAttrDone();
            self.component.$mount(self.element);
        }
        else {
            this.attributes.forEach(function (attr) {
                attr.link(scope, self.element);
            });
            self.childNodes.forEach(function (child) {
                self.element.appendChild(child.link(scope));
            });
        }

        return self.element;
    }

    afterLink() {
        this.attributes.forEach(function (attr) {
            attr.afterLink();
        });

        if (this.component == null) {
            this.childNodes.forEach(function (child) {
                child.afterLink();
            });
        }
    }

    detect() {
        this.attributes.forEach(function (attr) {
            attr.detect();
        });
        if (this.component == null) {
            this.childNodes.forEach(function (child) {
                child.detect();
            });
        }
    }

    dispose(isFromComponent) {
        if (this.component == null) {
            this.childNodes.forEach(function (child) {
                child.destroy();
            });
        }
        else if (isFromComponent) {
            this.component = null;
        }

        this.attributes.forEach(function (attr) {
            attr.destroy();
        });

        this.attributes.length = 0;
        this.removeDomElement();
        this.compileOptions = null;
        this.$destroy();
    }

    destroy() {
        if (this.component != null) {
            this.component.$dispose(true);
            this.component = null;
        }

        this.dispose();
    }

    getDomElement() {
        return this.element;
    }

    removeDomElement() {
        if (this.element != null) {
            eleUtils.removeNode(this.element);
        }
    }

    createElement(name) {
        return new ElementNode(name);
    }

    createAttr(name) {
        return new AttrNode(name);
    }

    createCustom(name, linker) {
        return new CustomNode(name, linker);
    }
}

export { ElementNode };