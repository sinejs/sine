import * as utils from '../utility';
import * as animateUtils  from './animate-utils';
import { AnimateBase } from './animate-base';

export class AnimateEnter extends AnimateBase {
    constructor(element, context) {
        super(element, context);
        this.enterClass = '';
        this.enterToClass = '';
        this.enterActiveClass = '';
    }

    execute() {
        var self = this, el = self.element;

        // animation is cancelled
        if (el == null || self.destroyed) {
            if (utils.isFunction(this._beforeEnterCb)) {
                this._beforeEnterCb();
            }
            return true;
        }

        var explicitEnterDuration = utils.toNumber(
            utils.isObject(self.duration)
                ? self.duration.enter
                : self.duration
        );

        var cb = el._enterCb = animateUtils.once(function () {
            el._enterCb = null;
            if (!self.destroyed) {
                animateUtils.removeAnimationClass(el, self.enterToClass);
                animateUtils.removeAnimationClass(el, self.enterActiveClass);
                if (cb.cancelled) {
                    animateUtils.removeAnimationClass(el, self.enterClass);
                    self.context.enterCancelled && self.context.enterCancelled(el);
                } else {
                    self.context.afterEnter && self.context.afterEnter(el);
                }
            }
            self.end();
        });

        this._beforeEnterCb = null;
        // start enter animation
        animateUtils.addAnimationClass(el, self.enterActiveClass);
        self.context.enter && self.context.enter(el, cb);

        animateUtils.nextFrame(function () {
            if (!self.destroyed) {
                animateUtils.removeAnimationClass(el, self.enterClass);
                if (!cb.cancelled) {
                    animateUtils.addAnimationClass(el, self.enterToClass);
                    self.context.enterTo && self.context.enterTo(el, cb);
                    if (animateUtils.isValidDuration(explicitEnterDuration)) {
                        setTimeout(cb, explicitEnterDuration);
                    } else {
                        animateUtils.whenAnimationEnds(el, self.type, cb);
                    }
                }
                else {
                    self.end();
                }
            }
            else {
                self.end();
            }
        });
    }

    onDestroy(){
        if (utils.isFunction(this._beforeEnterCb)) {
            this._beforeEnterCb();
        }

        if (utils.isFunction(this.element._enterCb)) {
            this.element._enterCb.cancelled = true;
            this.element._enterCb();
        }
    }
}