import { Directive } from '../../view/directive';
import { directive } from '../../decorator/directive';

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

directive({
    namespace: 'sine',
    selector: 'n-switch'
})(SwitchDirective);