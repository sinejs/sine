import { Animation } from '../animation';
import { directive } from '../decorator';

@directive({
    namespace: 'sine',
    selector: 'test2-animation'
})
class Test2Animation extends Animation {
    constructor() {
        super();
    }

    beforeEnter() {
        this.$htmlElement.style.opacity = 0;
    }

    enter() {
        this.$htmlElement.style.transition = 'all 0.5s ease';
    }

    enterTo() {
        this.$htmlElement.style.opacity = 1;
    }

    afterEnter() {
        this.$htmlElement.style.opacity = null;
        this.$htmlElement.style.transition = null;
        // this.$htmlElement.style.height = null;
    }

    enterCancelled() {
        this.$htmlElement.style.opacity = null;
        this.$htmlElement.style.transition = null;
    }

    beforeLeave(){
        this.$htmlElement.style.transition = 'all 0.5s ease';
    }

    leave(){
        this.$htmlElement.style.opacity = 0;
    }

    afterLeave(){
        this.$htmlElement.style.opacity = null;
        this.$htmlElement.style.transition = null;
    }

    leaveCancelled(){
        this.$htmlElement.style.opacity = null;
        this.$htmlElement.style.transition = null;
    }
}

@directive({
    namespace: 'sine',
    selector: 'test3-animation'
})
class Test3Animation extends Animation {
    constructor() {
        super();
    }

    beforeEnter() {
        this.$htmlElement.style.transform = 'translateX(-20px)';
    }

    enter() {
        this.$htmlElement.style.transition = 'all 1s ease';
    }

    enterTo() {
        this.$htmlElement.style.transform = 'translateX(0px)';
    }

    afterEnter() {
        this.$htmlElement.style.transform = null;
        this.$htmlElement.style.transition = null;
    }

    enterCancelled() {
        this.$htmlElement.style.transform = null;
        this.$htmlElement.style.transition = null;
    }

    beforeLeave(){
        this.$htmlElement.style.transform = 'translateX(0px)';
    }

    leave(){
        this.$htmlElement.style.transition = 'all 1s ease';
    }

    leaveTo() {
        this.$htmlElement.style.transform = 'translateX(20px)';
    }

    afterLeave(){
        this.$htmlElement.style.transform = null;
        this.$htmlElement.style.transition = null;
    }

    leaveCancelled(){
        this.$htmlElement.style.transform = null;
        this.$htmlElement.style.transition = null;
    }
}