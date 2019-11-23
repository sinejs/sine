import { Directive } from '../view';
import { directive } from '../decorator';
import * as utils from '../utility';

@directive({
    namespace: 'sine',
    selector: 'n-if',
    inject: {
        $animate: '$animate'
    }
})
class IfDirective extends Directive {
    constructor() {
        super();
        this.htmlComment = null;
    }

    onInsert() {
        this.htmlComment = document.createComment('n-if');

        if (!this.$binding.compute()) {
            utils.replaceNode(this.$htmlElement, this.htmlComment);
        }
    }

    onUpdate() {
        var self = this;

        if (this.$binding.compute()) {
            if (this.$htmlElement.parentNode == null) {
                this.$animate.enter(this.$element, function () {
                    utils.replaceNode(self.htmlComment, self.$htmlElement);
                });
            }
        }
        else {
            if (this.$htmlElement.parentNode != null) {
                this.$animate.leave(this.$element, function () {
                    utils.replaceNode(self.$htmlElement, self.htmlComment);
                });
            }
        }
    }

    onDestroy() {
        this.htmlComment = null;
    }
}