import { Animation } from '../animation';
import { directive } from '../decorator';

@directive({
    namespace: 'sine',
    selector: 'test-animation'
})
class TestAnimation extends Animation {
    constructor() {
        super();
        this.height = 0;
        this.animateChildren = true;
    }

    enter() {
        this.height = this.$htmlElement.clientHeight;
        this.$htmlElement.style.height = '1px';
        this.$htmlElement.style.transition = 'height 1.5s';
    }

    enterTo() {
        // this.$htmlElement.style.transition = 'height 1.5s';
        this.$htmlElement.style.height = this.height + 'px';
    }

    afterEnter() {
        this.$htmlElement.style.transition = null;
        // this.$htmlElement.style.height = null;
    }

    enterCancelled() {

    }
}