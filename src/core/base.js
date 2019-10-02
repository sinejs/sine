
var VNodeType = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    entity: 6,
    processingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12,
    custom: 101
};

// virtual node
class VNode {
    constructor(type, name, value) {
        this.nodeType = type;
        this.nodeName = name;
        this.nodeValue = value;
        this.childNodes = [];
        this.parentNode = null;
        this.previousSibling = null;
        this.nextSibling = null;
        this.firstChild = null;
        this.lastChild = null;
        this.ownerVDocument = null;
        this.scope = null;
    }

    $pushChild(child) {
        child.parentNode = this;
        this.childNodes.push(child);
    }

    $buildSibling() {
        if (this.childNodes.length === 0) {
            return;
        }

        var self = this;

        if (this.childNodes.length === 1) {
            this.firstChild = this.childNodes[0];
            this.lastChild = this.childNodes[0];
        }
        else {
            this.firstChild = this.childNodes[0];
            this.lastChild = this.childNodes[this.childNodes.length - 1];

            this.childNodes.forEach(function (child, index) {
                if (index === 0) {
                    child.nextSibling = self.childNodes[index + 1];
                    return;
                }
                if (index === (self.childNodes.length - 1)) {
                    child.previousSibling = self.childNodes[index - 1];
                    return;
                }
                child.previousSibling = self.childNodes[index - 1];
                child.nextSibling = self.childNodes[index + 1];
            });
        }

        this.childNodes.forEach(function (child) {
            child.$buildSibling();
        });
    }

    $clearParentAndSibling() {
        this.parentNode = null;
        this.previousSibling = null;
        this.nextSibling = null;
    }

    $remove() {
        if (this.parentNode != null) {
            this.parentNode.removeChild(this);
        }
    }

    $destroy() {
        this.$remove();
        this.$clearParentAndSibling();
        this.childNodes.length = 0;
        this.firstChild = null;
        this.lastChild = null;
        this.ownerVDocument = null;
        this.scope = null;
    }

    hasChildNodes() {
        return this.childNodes.length !== 0;
    }

    clearChildNodes() {
        this.childNodes.forEach(function (child) {
            child.destroy();
        });
        this.childNodes.length = 0;
    }

    appendChild(child) {
        if (child.parentNode != null) {
            child.parentNode.removeChild(child);
        }

        child.parentNode = this;

        if (this.childNodes.length === 0) {
            this.firstChild = child;
        }
        else {
            this.lastChild.nextSibling = child;
            child.previousSibling = this.lastChild;
        }

        child.compile(this.compileOptions);
        this.lastChild = child;
        this.childNodes.push(child);
        return child;
    }

    insertBefore(refChild, newChild) {
        if (newChild.parentNode != null) {
            newChild.parentNode.removeChild(newChild);
        }
        var index = this.childNodes.indexOf(refChild);
        if (index === -1) {
            throw new Error('Ref node is not a child of specified node');
        }

        newChild.parentNode = this;

        if (refChild.previousSibling != null) {
            newChild.previousSibling = refChild.previousSibling;
            refChild.previousSibling.nextSibling = newChild;
        }

        newChild.nextSibling = refChild;
        refChild.previousSibling = newChild;

        if (index === 0) {
            this.firstChild = newChild;
        }

        newChild.compile(this.compileOptions);
        this.childNodes.splice(index, 0, newChild);
        return newChild;
    }

    insertAfter(refChild, newChild) {
        if (refChild.nextSibling == null) {
            return this.appendChild(newChild);
        }

        return this.insertBefore(refChild.nextSibling, newChild);
    }

    removeChild(child) {
        var index = this.childNodes.indexOf(child);
        if (index === -1) {
            throw new Error('Remove node is not a child of specified node');
        }

        if (child.previousSibling != null) {
            child.previousSibling.nextSibling = child.nextSibling;
        }

        if (child.nextSibling != null) {
            child.nextSibling.previousSibling = child.previousSibling;
        }

        if (index === 0) {
            this.firstChild = child.nextSibling;
        }

        if (index === (this.childNodes.length - 1)) {
            this.lastChild = child.previousSibling;
        }

        child.$clearParentAndSibling();
        this.childNodes.splice(index, 1);

        return child;
    }

    replaceChild(refChild, newChild) {
        if (newChild.parentNode != null) {
            newChild.parentNode.removeChild(newChild);
        }
        var index = this.childNodes.indexOf(refChild);
        if (index === -1) {
            throw new Error('Ref node is not a child of specified node');
        }

        newChild.parentNode = this;
        newChild.previousSibling = refChild.previousSibling;
        newChild.nextSibling = refChild.nextSibling;

        if (this.firstChild === refChild) {
            this.firstChild = newChild;
        }

        if (this.lastChild === refChild) {
            this.lastChild = newChild;
        }

        refChild.$clearParentAndSibling();
        newChild.compile(this.compileOptions);
        this.childNodes.splice(index, 1, newChild);
        return newChild;
    }

    cloneNode() {
        throw new Error('not implemented');
    }

    compile(options) {
        this.childNodes.forEach(function (child) {
            child.compile(options);
        });
    }

    directives() {
        var result = [];
        this.childNodes.map(function (child) {
            return child.directives();
        }).forEach(function (item) {
            result = result.concat(item);
        });
        return result;
    }

    getDirective() {
        return [];
    }

    link(scope) {
        this.scope = scope;
        return this.childNodes.map(function (child) {
            child.link(scope);
        });
    }

    afterLink() {
        this.childNodes.forEach(function (child) {
            child.afterLink();
        });
    }

    detect() {
        if (this.hasChange()) {
            this.update();
        }
    }

    hasChange() {
        return false;
    }

    update() {

    }

    destroy() {
        this.childNodes.map(function (child) {
            child.destroy();
        });
        this.$destroy();
    }
}

export { VNodeType, VNode };
