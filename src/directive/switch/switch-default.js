import { Directive } from '../../view/directive';
import { directive } from '../../decorator/directive';
import * as utils from '../../utility';

class SwitchDefaultDirective extends Directive {
    constructor() {
        super();
        this.attrNode = null;
        this.comment = null;
    }

    isMatch() {
        var match = true, vEle = this.attrNode.ownerVElement;

        while (vEle.previousSibling != null && match) {
            var whenDir = vEle.previousSibling.getDirective('n-switch-when');

            vEle = vEle.previousSibling;

            if (!whenDir.length) {
                continue;
            }

            match = !whenDir[0].isMatch;
        }

        return match;
    }

    onCompile(attrNode, options) {
        this.attrNode = attrNode;
    }

    onInsert(ele, binding) {
        this.comment = document.createComment('n-switch-default');

        if (!this.isMatch()) {
            utils.replaceNode(ele, this.comment);
        }
    }

    onDetect(ele, binding) {
        if (this.isMatch()) {
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
    selector: 'n-switch-default'
})(SwitchDefaultDirective);