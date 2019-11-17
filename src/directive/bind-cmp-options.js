import { Directive } from "../view/directive";
import { directive } from "../decorator/directive";

@directive({
    namespace: 'sine',
    selector: 'n-bind-cmp-options'
})
class BindCmpOptionsDirective extends Directive {
    constructor() {
        super();
        this.value = null;
    }

    onInsert() {
        this.updateOptions();
    }

    onUpdate() {
        this.clearOptions();
    }

    onDestroy() {
        this.clear();
    }

    updateOptions() {
        this.value = this.$binding.compute();
    }

    clearOptions() {
        this.value = null;
    }
}