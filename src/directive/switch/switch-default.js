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
        this.htmlComment = null;
        this.switchWhenDirs = [];
    }

    initSwitchWhenDirs() {
        var vEle = this.$element;

        while (vEle.previousSibling != null) {
            var whenDir = vEle.previousSibling.getDirective('n-switch-when');

            if (whenDir != null) {
                this.switchWhenDirs.push(whenDir);
            }

            vEle = vEle.previousSibling;
        }
    }

    match() {
        return !this.switchWhenDirs.some(function (item) {
            return item.isMatch;
        });
    }

    onInsert() {
        var self = this;

        this.initSwitchWhenDirs();
        this.isMatch = this.match();
        this.htmlComment = document.createComment('n-switch-default');

        if (!this.isMatch) {
            utils.replaceNode(this.$htmlElement, this.htmlComment);
        }

        this.switchWhenDirs.forEach(function (item) {
            item.isMatchChanged.on(function () {
                self.update();
            })
        });
    }

    update() {
        var oldValue = this.isMatch, newValue = this.match();

        if (newValue !== oldValue) {
            this.isMatch = newValue;

            if (this.isMatch) {
                if (this.$htmlElement.parentNode == null) {
                    utils.replaceNode(this.htmlComment, this.$htmlElement);
                }
            }
            else {
                if (this.$htmlElement.parentNode != null) {
                    utils.replaceNode(this.$htmlElement, this.htmlComment);
                }
            }
        }
    }

    onDestroy() {
        this.htmlComment = null;
        this.switchWhenDirs = null;
    }
}