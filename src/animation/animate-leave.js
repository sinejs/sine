import * as utils from '../utility';
import * as animateUtils  from './animate-utils';
import { AnimateBase } from './animate-base';

export class AnimateLeave extends AnimateBase {
    constructor(element, context) {
        super(element, context);
        this.doLeave = null;
        this.leaveClass = '';
        this.leaveToClass = '';
        this.leaveActiveClass = '';
    }

    execute() {
        var self = this, el = self.element;

        // animation is cancelled
        if (el == null || self.destroyed) {
            if (utils.isFunction(this._beforeLeaveCb)) {
                this._beforeLeaveCb();
            }
            return true;
        }

        var explicitLeaveDuration = utils.toNumber(
            utils.isObject(self.duration)
                ? self.duration.leave
                : self.duration
        );

        var cb = el._leaveCb = animateUtils.once(function () {
            el._leaveCb = null;
            if (!self.destroyed) {
                animateUtils.removeAnimationClass(el, self.leaveToClass);
                animateUtils.removeAnimationClass(el, self.leaveActiveClass);
                if (cb.cancelled) {
                    animateUtils.removeAnimationClass(el, self.leaveClass);
                    self.context.leaveCancelled && self.context.leaveCancelled(el);
                } else {
                    self.doLeave();
                    self.context.afterLeave && self.context.afterLeave(el);
                }
            }
            self.end();
        });

        // the delayed leave may have already been cancelled
        if (cb.cancelled || self.destroyed) {
            if (utils.isFunction(this._beforeLeaveCb)) {
                this._beforeLeaveCb();
            }
            return true;
        }

        this._beforeLeaveCb = null;
        animateUtils.addAnimationClass(el, self.leaveActiveClass);
        self.context.leave && self.context.leave(el, cb);

        animateUtils.nextFrame(function () {
            if (!self.destroyed) {
                animateUtils.removeAnimationClass(el, self.leaveClass);
                if (!cb.cancelled) {
                    animateUtils.addAnimationClass(el, self.leaveToClass);
                    self.context.leaveTo && self.context.leaveTo(el, cb);
                    if (animateUtils.isValidDuration(explicitLeaveDuration)) {
                        setTimeout(cb, explicitLeaveDuration);
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

    onDestroy() {
        this.doLeave = null;

        if (utils.isFunction(this._beforeLeaveCb)) {
            this._beforeLeaveCb();
        }

        if (utils.isFunction(this.element._leaveCb)) {
            this.element._leaveCb.cancelled = true;
            this.element._leaveCb();
        }
    }
}