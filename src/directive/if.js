import { Directive } from '../view/directive';
import { directive } from '../decorator/directive';
import * as utils from '../utility';

@directive({
    namespace: 'sine',
    selector: 'n-if'
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
        if (this.$binding.compute()) {
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

    onDestroy() {
        this.htmlComment = null;
    }
}