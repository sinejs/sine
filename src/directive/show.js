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
    }

    onInsert() {
        this.toggle();
    }

    onUpdate() {
        this.toggle();
    }

    toggle() {
        var self = this;

        if (this.$binding.compute()) {
            this.$animate.enter(this.$element, function () {
                self.$htmlElement.style.display = 'initial';
            });
        }
        else {
            this.$animate.leave(this.$element, function () {
                self.$htmlElement.style.display = 'none';
            });
        }
    }
}