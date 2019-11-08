import * as utils from '../utility/utils';
import * as eleUtils from '../utility/ele-utils';
import { VNodeType, VNode } from './base';
import { Binding } from './binding';

class TextNode extends VNode {
    constructor() {
        super(VNodeType.text, '#text');
        this.binding = new Binding();
        this.htmlElement = null;
    }

    compile() {
        this.binding.bind(this.nodeValue);
    }

    link(scope) {
        var self = this;

        this.binding.setScope(scope);

        this.binding.onchange(function () {
            self.update();
        });

        return this.render(this.binding.compute());
    }

    hasChange() {
        return this.binding.detect();
    }

    update() {
        eleUtils.replaceNode(this.htmlElement, this.render(this.binding.value));
    }

    render(value) {
        this.htmlElement = document.createTextNode(value);
        return this.htmlElement;
    }

    getOuterTpl() {
        return this.nodeValue;
    }

    getInnerTpl() {
        return this.nodeValue;
    }

    destroy() {
        this.binding.destroy();
        this.binding = null;
        this.htmlElement = null;
        this.$destroy();
    }
}

export { TextNode };