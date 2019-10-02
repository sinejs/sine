import { Directive } from '../../view/directive';
import { directive } from '../../decorator/directive';

@directive({
    namespace: 'sine',
    selector: 'n-switch'
})
class SwitchDirective extends Directive {
    constructor() {
        super();
        this.value = null;
    }

    onInsert(ele, binding) {
        this.value = binding.compute();
    }

    onUpdate(ele, binding) {
        this.value = binding.compute();
    }
}