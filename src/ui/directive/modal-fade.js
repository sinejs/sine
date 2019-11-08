import { Directive } from "../../view/directive";
import { directive } from "../../decorator/directive";
import { Messenger } from "../../utility/message";

@directive({
    namespace: 'sine.ui',
    selector: 'n-modal-fade'
})
class ModalFadeDirective extends Directive {
    constructor() {
        super();
        this.backdrop = null;
        this.timeoutId = null;
        this.unload = new Messenger();
    }

    onInsert() {
        this.createBackdrop();
        this.toggle();
    }

    onLoad() {
        var self = this;

        this.timeoutId = setTimeout(function () {
            self.timeoutId = null;
            self.$htmlElement.classList.add('show');
            self.backdrop.classList.add('show');
        });
    }

    onUnload() {
        this.removeModal();
        this.unload.fire();
    }

    onUpdate() {
        this.toggle();
    }

    onDestroy() {
        this.cancelTimeout();
        this.hide(true);
        this.removeModal();
        this.backdrop = null;
    }

    createBackdrop() {
        this.backdrop = document.createElement('div');
        this.backdrop.classList.add('modal-backdrop');
        this.backdrop.classList.add('fade');
    }

    removeModal() {
        document.body.classList.remove('modal-open');

        if (this.backdrop.parentNode != null) {
            document.body.removeChild(this.backdrop);
        }
    }

    toggle() {
        if (this.$binding.compute()) {
            this.show();
        }
        else {
            this.hide();
        }
    }

    show() {
        this.cancelTimeout();
        this.$htmlElement.style.display = 'block';
        document.body.classList.add('modal-open');
        document.body.appendChild(this.backdrop);
    }

    hide(destroy) {
        var self = this;

        this.cancelTimeout();
        this.$htmlElement.classList.remove('show');
        this.backdrop.classList.remove('show');

        if (!destroy) {
            this.timeoutId = setTimeout(function () {
                self.$htmlElement.style.display = null;
                this.timeoutId = null;
            }, 200);
        }
    }

    cancelTimeout() {
        if (this.timeoutId != null) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }
}