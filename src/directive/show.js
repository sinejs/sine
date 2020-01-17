import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'sine',
    selector: 'n-show',
    inject: {
        $animate: '$animate'
    }
})
class ShowDirective extends Directive {
    constructor() {
        super();
        this.initialDisplay = null;
    }

    onInsert() {
        this.initialDisplay = this.$htmlElement.style.display;
        this.toggle();
    }

    onUpdate() {
        this.toggle();
    }

    toggle() {
        var self = this;

        if (this.$binding.compute()) {
            this.$animate.enter(this.$element, function () {
                self.$htmlElement.style.display = self.initialDisplay;
            });
        }
        else {
            this.$animate.leave(this.$element, function () {
                self.$htmlElement.style.display = 'none';
            });
        }
    }
}