import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'sine',
    selector: 'n-hide',
    inject: {
            $animate: '$animate'
    }
})
class HideDirective extends Directive {
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
            this.$animate.leave(this.$element, function () {
                self.$htmlElement.style.display = 'none';
            });
        }
        else {
            this.$animate.enter(this.$element, function () {
                self.$htmlElement.style.display = 'initial';
            });
        }
    }
}