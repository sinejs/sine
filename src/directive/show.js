import { Directive } from '../view/directive';
import { directive } from '../decorator/directive';

@directive({
    namespace: 'sine',
    selector: 'n-show'
})
class ShowDirective extends Directive {
    constructor() {
        super();
    }

    onInsert() {
        this.show();
    }

    onUpdate() {
        this.show();
    }

    show() {
        var value = this.$binding.compute();
        this.$htmlElement.style.display = value ? 'initial' : 'none';
    }
}