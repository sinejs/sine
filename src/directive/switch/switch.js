import { Directive } from '../../view/directive';
import { directive } from '../../decorator/directive';
import { Messenger } from '../../utility/message';

@directive({
    namespace: 'sine',
    selector: 'n-switch'
})
class SwitchDirective extends Directive {
    constructor() {
        super();
        this.value = null;
        this.valueChanged = new Messenger();
    }

    onInsert(ele, binding) {
        this.value = binding.compute();
    }

    onUpdate(ele, binding) {
        var oldValue = this.value,
            newValue = binding.compute();

        if(newValue !== oldValue){
            this.value = newValue;
        }
        
        this.valueChanged.fire({
            oldValue: oldValue,
            newValue: newValue
        });
    }
}