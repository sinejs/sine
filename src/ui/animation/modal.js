import { Animation } from '../../animation/animation';
import { directive } from '../../decorator/directive';
import { Messenger } from '../../utility/message';

@directive({
    namespace: 'sine.ui',
    selector: 'animation-modal'
})
class ModalAnimation extends Animation {
    constructor() {
        super();
        this.backdrop = null;
        this.left = new Messenger();
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

    onInsert() {
        this.initialDisplay = this.$htmlElement.style.display;
        this.initialHeight = this.$htmlElement.style.height;
    }

    beforeEnter() {
        this.createBackdrop();
        this.$htmlElement.style.display = 'block';
        document.body.classList.add('modal-open');
        document.body.appendChild(this.backdrop);
    }

    enter() {
        var self = this;
        this.nextFrame(function () {
            self.$htmlElement.classList.add('show');
            self.backdrop.classList.add('show');
        });
    }


    beforeLeave() {
        this.$htmlElement.classList.remove('show');
        this.backdrop.classList.remove('show');
    }

    afterLeave() {
        this.removeModal();
        this.left.fire();
    }
}