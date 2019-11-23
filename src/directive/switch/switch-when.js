import { Directive } from '../../view';
import { directive } from '../../decorator';
import * as utils from '../../utility';
import { Messenger } from '../../utility';

@directive({
    namespace: 'sine',
    selector: 'n-switch-when'
})
class SwitchWhenDirective extends Directive {
    constructor() {
        super();
        this.isMatch = false;
        this.htmlComment = null;
        this.switchDir = null;
        this.isMatchChanged = new Messenger();
    }

    initSwitchDir() {
        var switchDir = this.$element.parentNode.getDirective('n-switch');

        if (switchDir == null) {
            throw new Error('Require n-switch directive');
        }

        this.switchDir = switchDir;
    }

    onInsert() {
        var self = this;

        this.initSwitchDir();
        this.htmlComment = document.createComment('n-switch-when');
        this.isMatch = (this.$binding.compute() === this.switchDir.value);

        if (!this.isMatch) {
            utils.replaceNode(this.$htmlElement, this.htmlComment);
        }

        this.switchDir.valueChanged.on(function () {
            self.update();
        });
    }

    update() {
        var oldValue = this.isMatch,
            newValue = (this.$binding.compute() === this.switchDir.value);

        if (newValue !== oldValue) {
            this.isMatch = newValue;
            this.isMatchChanged.fire();

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
        this.switchDir = null;
    }
}