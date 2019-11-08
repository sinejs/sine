import { Directive } from "../../view/directive";
import { directive } from "../../decorator/directive";

@directive({
    namespace: 'sine.ui',
    selector: 'n-collapse'
})
class CollapseDirective extends Directive {
    constructor() {
        super();
        this.duration = 400;
        this.height = '';
        this.display = '';
        this.timeoutId = null;
    }

    onInsert() {
        this.display = this.$htmlElement.style.display;
        this.height = this.$htmlElement.style.height;
        this.$htmlElement.style.overflow = 'hidden';
        this.toggle();
    }

    onUpdate() {
        this.toggle();
    }

    onLoad() {
        var self = this;

        if (!this.height) {
            this.height = this.$htmlElement.clientHeight + 'px';
        }

        this.$htmlElement.style.transition = null;
        this.$htmlElement.style.height = 1 + 'px';

        this.timeoutId = setTimeout(function () {
            self.timeoutId = null;
            self.$htmlElement.style.height = self.height;
            self.$htmlElement.style.transition = 'height ' + self.duration + 'ms';
        });
    }

    onUnload() {
        this.$htmlElement.style.display = 'none';
        this.$htmlElement.style.height = this.height;
    }

    onDestroy() {
        this.cancelTimeout();
    }

    toggle() {
        if (this.$binding.compute()) {
            this.hide();
        }
        else {
            this.show();
        }
    }

    hide() {
        this.cancelTimeout();
        this.$htmlElement.style.height = 0 + 'px';
    }

    show() {
        this.$htmlElement.style.display = this.display;
        this.$htmlElement.style.height = this.height;
    }

    cancelTimeout() {
        if (this.timeoutId != null) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }
}