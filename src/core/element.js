import * as utils from '../utility/utils';
import * as eleUtils from '../utility/ele-utils';
import { VNodeType, VNode } from './base';
import { CustomNode } from './custom';
import { AttrNode } from './attribute';
import { parse } from '../parser';

utils.inherit(ElementNode, VNode);
// element node
function ElementNode(name) {
    ElementNode.super.call(this, VNodeType.element, name);
    this.attributes = [];
    this.element = null;
    this.component = null;
    this.selfClosed = false;
    this.compileOptions = null;
    this.isComponent = false;
}

ElementNode.prototype.$pushAttribute = function (attr) {
    attr.ownerVElement = this;
    this.attributes.push(attr);
};

ElementNode.prototype.hasAttributes = function () {
    return this.attributes.length !== 0;
};

ElementNode.prototype.setAttribute = function (key, value) {
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

    this.attributes.push(attr);

    return target;
};

ElementNode.prototype.removeAttribute = function (key) {
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
};

ElementNode.prototype.appendAttribute = function (attr) {
    if (attr.ownerVElement != null) {
        throw new Error("Current attribute is not new!");
    }

    attr.ownerVElement = this;
    attr.compile(this.compileOptions);
    this.attributes.push(attr);
    return attr;
};

ElementNode.prototype.getOuterTpl = function () {
    var attrTpl = '', childTpl = '';

    this.attributes.forEach(function (attr) {
        attrTpl += ' ';
        attrTpl += attr.getOuterTpl();
    });

    this.childNodes.forEach(function (child) {
        childTpl += child.getOuterTpl();
    });

    var tpl = '<' + this.nodeName + attrTpl + '>' + childTpl;

    if(!this.selfClosed){
        tpl += ('</' + this.nodeName + '>');
    }

    return tpl;
};

ElementNode.prototype.getInnerTpl = function () {
    var childTpl = '';

    this.childNodes.forEach(function (child) {
        childTpl += child.getOuterTpl();
    });

    return childTpl;
};

ElementNode.prototype.setOuterTpl = function (tpl) {
    var self = this;
    parse(tpl).forEach(function (vnode) {
        vnode.parentNode = null;
        self.parentNode.insertBefore(self, vnode);
    });
    self.parentNode.removeChild(self);
};

ElementNode.prototype.setInnerTpl = function (tpl) {
    var self = this;
    this.clearChildNodes();
    parse(tpl).forEach(function (vnode) {
        vnode.parentNode = null;
        self.appendChild(vnode);
    });
};

ElementNode.prototype.getDirective = function (key) {
    var result = [];

    this.attributes.map(function (attr) {
        return attr.directives();
    }).forEach(function (item) {
        result = result.concat(item);
    });

    return result.filter(function (item) {
        return item.$$key === key;
    });
};

ElementNode.prototype.compile = function (options) {
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
};

ElementNode.prototype.directives = function () {
    var result = [];

    this.attributes.map(function (attr) {
        return attr.directives();
    }).forEach(function (item) {
        result = result.concat(item);
    });

    if(this.component == null){
        this.childNodes.map(function (child) {
            return child.directives();
        }).forEach(function (item) {
            result = result.concat(item);
        });
    }

    return result;
};

ElementNode.prototype.link = function (scope) {
    var self = this;

    self.scope = scope;
    self.element = document.createElement(self.nodeName);

    if (this.isComponent) {
        this.component = scope.$createComponent(this.nodeName);
        this.component.$bindVNode(this);
        self.attributes.forEach(function (attr) {
            attr.link(scope, self.element, self.component);
        });
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
};

ElementNode.prototype.afterLink = function () {
    this.attributes.forEach(function (attr) {
        attr.afterLink();
    });

    if (this.component == null) {
        this.childNodes.forEach(function (child) {
            child.afterLink();
        });
    }
};

ElementNode.prototype.detect = function () {
    this.attributes.forEach(function (attr) {
        attr.detect();
    });
    if (this.component == null) {
        this.childNodes.forEach(function (child) {
            child.detect();
        });
    }
};

ElementNode.prototype.dispose = function (isFromComponent) {
    if (this.component == null) {
        this.childNodes.forEach(function (child) {
            child.destroy();
        });
    }
    else if(isFromComponent){
        this.component = null;
    }

    this.attributes.forEach(function (attr) {
        attr.destroy();
    });

    this.attributes.length = 0;
    this.removeDomElement();
    this.compileOptions = null;
    this.$destroy();
};

ElementNode.prototype.destroy = function () {
    if(this.component != null) {
        this.component.$dispose(true);
        this.component = null;
    }

    this.dispose();
};

ElementNode.prototype.getDomElement = function () {
    return this.element;
};

ElementNode.prototype.removeDomElement = function () {
    if(this.element != null){
        eleUtils.removeNode(this.element);
    }
};

ElementNode.prototype.createElement = function(name){
    return new ElementNode(name);
};

ElementNode.prototype.createAttr = function (name) {
    return new AttrNode(name);
};

ElementNode.prototype.createCustom = function (name, linker) {
    return new CustomNode(name, linker);
};

export { ElementNode };