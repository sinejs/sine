import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'sine',
    selector: 'n-bind'
})
class BindDirective extends Directive {
    constructor() {
        super();
    }

    onInsert() {
        this.bind();
    }

    onUpdate() {
        this.bind();
    }

    bind() {
        this.$htmlElement.innerText = this.$binding.compute();
    }
}