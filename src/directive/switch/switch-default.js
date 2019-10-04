import { Directive } from '../../view/directive';
import { directive } from '../../decorator/directive';
import * as utils from '../../utility';

@directive({
    namespace: 'sine',
    selector: 'n-switch-default'
})
class SwitchDefaultDirective extends Directive {
    constructor() {
        super();
        this.isMatch = false;
        this.attrNode = null;
        this.comment = null;
        this.switchWhenDirs = [];
    }

    initSwitchWhenDirs() {
        var vEle = this.attrNode.ownerVElement;

        while (vEle.previousSibling != null) {
            var whenDirs = vEle.previousSibling.getDirective('n-switch-when');

            if (whenDirs.length) {
                this.switchWhenDirs.push(whenDirs[0]);
            }

            vEle = vEle.previousSibling;
        }
    }

    match() {
        return !this.switchWhenDirs.some(function (item) {
            return item.isMatch;
        });
    }

    onCompile(attrNode, options) {
        this.attrNode = attrNode;
    }

    onInsert(ele, binding) {
        var self = this;

        this.initSwitchWhenDirs();
        this.isMatch = this.match();
        this.comment = document.createComment('n-switch-default');

        if (!this.isMatch) {
            utils.replaceNode(ele, this.comment);
        }

        this.switchWhenDirs.forEach(function (item) {
            item.isMatchChanged.on(function () {
                self.update(ele, binding);
            })
        });
    }

    update(ele, binding) {
        var oldValue = this.isMatch, newValue = this.match();

        if (newValue !== oldValue) {
            this.isMatch = newValue;

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
        this.switchWhenDirs = null;
    }
}