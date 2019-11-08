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

    onInsert() {
        this.value = this.$binding.compute();
    }

    onUpdate() {
        var oldValue = this.value,
            newValue = this.$binding.compute();

        if (newValue !== oldValue) {
            this.value = newValue;
        }

        this.valueChanged.fire({
            oldValue: oldValue,
            newValue: newValue
        });
    }
}