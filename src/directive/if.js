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
        this.comment = null;
    }

    onInsert(ele, binding) {
        this.comment = document.createComment('n-if');
        if (!binding.compute()) {
            utils.replaceNode(ele, this.comment);
        }
    }

    onUpdate(ele, binding) {
        if (binding.compute()) {
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
        this.comment = null;
    }
}