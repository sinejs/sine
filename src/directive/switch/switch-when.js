import { Directive } from '../../view/directive';
import { directive } from '../../decorator/directive';
import * as utils from '../../utility';

class SwitchWhenDirective extends Directive {
    constructor() {
        super();
        this.isMatch = false;
        this.attrNode = null;
        this.comment = null;
    }

    updateIsMatch(ele, binding) {
        var vEle = this.attrNode.ownerVElement;
        var switchDir = vEle.parentNode.getDirective('n-switch');

        if (!switchDir.length) {
            throw new Error('Require n-switch directive');
        }

        this.isMatch = binding.compute() === switchDir[0].value;
    }

    onCompile(attrNode, options) {
        this.attrNode = attrNode;
    }

    onInsert(ele, binding) {
        this.comment = document.createComment('n-switch-when');
        this.updateIsMatch(ele, binding);

        if (!this.isMatch) {
            utils.replaceNode(ele, this.comment);
        }
    }

    onDetect(ele, binding) {
        this.updateIsMatch(ele, binding);

        if (this.isMatch) {
            if (ele.parentNode == null) {
                utils.replaceNode(this.comment, ele);
            }
        }
        else {
            if (ele.parentNode != null) {
                utils.replaceNode(ele, this.comment);
            }
        }
    }

    onDestroy() {
        this.attrNode = null;
        this.comment = null;
    }
}

directive({
    namespace: 'sine',
    selector: 'n-switch-when'
})(SwitchWhenDirective);