import { Directive } from "../view";
import { directive } from "../decorator";

@directive({
    namespace: 'sine',
    selector: 'n-view-options'
})
class ViewOptionsDirective extends Directive {
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