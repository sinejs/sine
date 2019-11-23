import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'sine',
    selector: 'animation'
})
class Animation extends Directive {
    constructor() {
        super();
        // animation type, "transition" or "animation"
        this.animation = true;
        this.name = '';
        this.type = '';
        this.css = true;
        // this.enterClass = '';
        // this.enterToClass = '';
        // this.enterActiveClass = '';
        // this.leaveClass = '';
        // this.leaveToClass = '';
        // this.leaveActiveClass = '';
        this.$priority = -100;
    }

    nextFrame(fn) {
        requestAnimationFrame(function () {
            requestAnimationFrame(fn);
        });
    }

    // beforeEnter() {
    //
    // }
    //
    // enter() {
    //
    // }
    //
    // afterEnter() {
    //
    // }
    //
    // enterCancelled() {
    //
    // }
    //
    // beforeLeave() {
    //
    // }
    //
    // leave() {
    //
    // }
    //
    // afterLeave() {
    //
    // }
    //
    // leaveCancelled() {
    //
    // }
    //
    // delayLeave() {
    //
    // }
}

export { Animation }