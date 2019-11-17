import * as utils from '../utility';
import { VNodeType, VNode } from './base';
import { ConnectionNode } from './connection';
import { AttrNode } from './attribute';
import { parse } from '../parser';

class ElementNode extends VNode {
    get parentElement() {
        return this.parentNode;
    }

    constructor() {
        super(VNodeType.element, name);
        this.attributes = [];
        this.htmlElement = null;
        this.component = null;
        this.selfClosed = false;
        this.compileOptions = null;
        this.isComponent = false;
    }

    $pushAttribute(attr) {
        attr.ownerElement = this;
        this.attributes.push(attr);
    }

    hasAttributes() {
        return this.attributes.length !== 0;
    }

    getAttribute(key) {
        var matches = this.attributes.filter(function (attr) {
            return attr.belongTo(key);
        });

        if (!matches.length) {
            return null;
        }

        return matches[0];
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
            target.ownerElement = this;
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
        if (attr.ownerElement != null) {
            throw new Error("Current attribute is not new!");
        }

        attr.ownerElement = this;
        attr.compile(this.compileOptions);
        this.attributes.push(attr);
        return attr;
    }

    observe(key, action) {
        var matches = this.attributes.filter(function (attr) {
            return attr.belongTo(key);
        });

        if (!matches.length) {
            return;
        }

        return matches[0].observe(action);
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
        var result = null;

        this.attributes.some(function (attr) {
            result = attr.getDirective(key);
            return result != null;
        });

        return result;
    }

    getDirectives() {
        return this.attributes.map(function (attr) {
            return attr.getDirective();
        }).filter(function (dir) {
            return dir != null;
        });
    }

    compile(options) {
        this.compileOptions = options;
        this.attributes.forEach(function (attr) {
            attr.compile(options);
        });
        // perform directive according to priority
        this.attributes = utils.orderBy(this.attributes, function (item) {
            return item.priority;
        });
        this.isComponent = options.containsComponent(this.nodeName);
        if (!this.isComponent) {
            this.childNodes.forEach(function (child) {
                child.compile(options);
            });
        }
    }

    notifyCompiled(options) {
        this.attributes.forEach(function (attr) {
            attr.notifyCompiled(options);
        });

        if (this.component == null) {
            this.childNodes.forEach(function (child) {
                child.notifyCompiled(options);
            });
        }
    }

    link(scope) {
        var self = this;

        self.scope = scope;
        self.htmlElement = document.createElement(self.nodeName);

        if (this.isComponent) {
            this.component = scope.$createChildCmp(this.nodeName);
            this.component.$bindNode(this);
            self.attributes.forEach(function (attr) {
                attr.link(scope, self.htmlElement, self.component);
            });
            self.component.$initAttrDone();
            self.component.$mount(self.htmlElement);
        }
        else {
            this.attributes.forEach(function (attr) {
                attr.link(scope, self.htmlElement);
            });
            self.childNodes.forEach(function (child) {
                self.htmlElement.appendChild(child.link(scope));
            });
        }

        return self.htmlElement;
    }

    notifyLinked() {
        this.attributes.forEach(function (attr) {
            attr.notifyLinked();
        });

        if (this.component == null) {
            this.childNodes.forEach(function (child) {
                child.notifyLinked();
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
        this.removeHtmlElement();
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

    getHtmlElement() {
        return this.htmlElement;
    }

    removeHtmlElement() {
        if (this.htmlElement != null) {
            utils.removeNode(this.htmlElement);
        }
    }

    createElement(name) {
        return new ElementNode(name);
    }

    createAttr(name) {
        return new AttrNode(name);
    }

    createConnection(name, linker) {
        return new ConnectionNode(name, linker);
    }
}

export { ElementNode };