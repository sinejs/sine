import { Directive } from '../../view/directive';
import { directive } from '../../decorator/directive';
import * as utils from '../../utility';
import { Messenger } from '../../utility/message';

@directive({
    namespace: 'sine',
    selector: 'n-switch-when'
})
class SwitchWhenDirective extends Directive {
    constructor() {
        super();
        this.isMatch = false;
        this.attrNode = null;
        this.comment = null;
        this.switchDir = null;
        this.isMatchChanged = new Messenger();
    }

    initSwitchDir() {
        var vEle = this.attrNode.ownerVElement;
        var switchDirs = vEle.parentNode.getDirective('n-switch');

        if (!switchDirs.length) {
            throw new Error('Require n-switch directive');
        }

        this.switchDir = switchDirs[0];
    }

    onCompile(attrNode, options) {
        this.attrNode = attrNode;
    }

    onInsert(ele, binding) {
        var self = this;

        this.initSwitchDir();
        this.comment = document.createComment('n-switch-when');
        this.isMatch = (binding.compute() === this.switchDir.value);

        if (!this.isMatch) {
            utils.replaceNode(ele, this.comment);
        }

        this.switchDir.valueChanged.on(function () {
            self.update(ele, binding);
        });
    }

    update(ele, binding) {
        var oldValue = this.isMatch,
            newValue = (binding.compute() === this.switchDir.value);

        if (newValue !== oldValue) {
            this.isMatch = newValue;
            this.isMatchChanged.fire();

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
    }

    onDestroy() {
        this.attrNode = null;
        this.comment = null;
        this.switchDir = null;
    }
}