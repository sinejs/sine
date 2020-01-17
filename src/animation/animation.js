import { Directive } from '../view';
import { directive } from '../decorator';
import { Messenger } from '../utility';

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
        this.animateAppear = false;
        this.animateChildren = false;
        this.animationDestroyed = new Messenger();
    }

    nextFrame(fn) {
        requestAnimationFrame(function () {
            requestAnimationFrame(fn);
        });
    }

    onDestroy() {
        this.animationDestroyed.fire();
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