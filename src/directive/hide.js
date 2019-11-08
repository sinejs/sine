import { Directive } from '../view/directive';
import { directive } from '../decorator/directive';

@directive({
    namespace: 'sine',
    selector: 'n-hide'
})
class HideDirective extends Directive {
    constructor() {
        super();
    }

    onInsert() {
        this.hide();
    }

    onUpdate() {
        this.hide();
    }

    hide() {
        var value = this.$binding.compute();
        this.$htmlElement.style.display = value ? 'none' : 'initial';
    }
}