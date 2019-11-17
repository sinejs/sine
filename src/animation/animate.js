import * as utils from '../utility';
import { Service } from '../view/service';
import { service } from '../decorator/service';

var TRANSITION = 'transition';
var ANIMATION = 'animation';
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
var transformRE = /\b(transform|all)(,|$)/;

@service({
    namespace: 'sine',
    selector: '$animate'
})
class AnimateService extends Service {
    constructor() {
        super();
    }

    enter(vnode, doEnter) {
        var el = vnode.htmlElement;

        // call leave callback now
        if (utils.isFunction(el._leaveCb)) {
            el._leaveCb.cancelled = true;
            el._leaveCb();
        }

        if (utils.isFunction(el._enterCb) || el.nodeType !== 1) {
            return;
        }

        var animation = this.resolveAnimationContext(vnode);

        if(!animation) {
            return doEnter();
        }

        var data = this.resolveAnimation(animation);

        var self = this;
        var type = data.type;
        var enterClass = data.enterClass;
        var enterToClass = data.enterToClass;
        var enterActiveClass = data.enterActiveClass;
        var duration = data.duration;

        var explicitEnterDuration = utils.toNumber(
            utils.isObject(duration)
                ? duration.enter
                : duration
        );

        var cb = el._enterCb = self.once(function () {
            self.removeAnimationClass(el, enterToClass);
            self.removeAnimationClass(el, enterActiveClass);
            if (cb.cancelled) {
                self.removeAnimationClass(el, enterClass);
                animation.enterCancelled && animation.enterCancelled(el);
            } else {
                animation.afterEnter && animation.afterEnter(el);
            }
            el._enterCb = null;
        });

        // start enter animation
        animation.beforeEnter && animation.beforeEnter(el);
        self.addAnimationClass(el, enterClass);
        self.addAnimationClass(el, enterActiveClass);
        self.nextFrame(function () {
            self.removeAnimationClass(el, enterClass);
            if (!cb.cancelled) {
                self.addAnimationClass(el, enterToClass);
                if (self.isValidDuration(explicitEnterDuration)) {
                    setTimeout(cb, explicitEnterDuration);
                } else {
                    self.whenAnimationEnds(el, type, cb);
                }
            }
        });

        doEnter();
        animation.enter && animation.enter(el, cb);
    }

    leave(vnode, doLeave) {
        var el = vnode.htmlElement;

        // call enter callback now
        if (utils.isFunction(el._enterCb)) {
            el._enterCb.cancelled = true;
            el._enterCb();
        }

        var animation = this.resolveAnimationContext(vnode);

        if (!animation || el.nodeType !== 1) {
            return doLeave();
        }

        if (utils.isFunction(el._leaveCb)) {
            return;
        }

        var data = this.resolveAnimation(animation);

        var self = this;
        var type = data.type;
        var leaveClass = data.leaveClass;
        var leaveToClass = data.leaveToClass;
        var leaveActiveClass = data.leaveActiveClass;
        var duration = data.duration;

        var explicitLeaveDuration = utils.toNumber(
            utils.isObject(duration)
                ? duration.leave
                : duration
        );

        var cb = el._leaveCb = self.once(function () {
            self.removeAnimationClass(el, leaveToClass);
            self.removeAnimationClass(el, leaveActiveClass);
            if (cb.cancelled) {
                self.removeAnimationClass(el, leaveClass);
                animation.leaveCancelled && animation.leaveCancelled(el);
            } else {
                doLeave();
                animation.afterLeave && animation.afterLeave(el);
            }
            el._leaveCb = null;
        });

        if (animation.delayLeave) {
            animation.delayLeave(performLeave);
        } else {
            performLeave();
        }

        function performLeave() {
            // the delayed leave may have already been cancelled
            if (cb.cancelled) {
                return;
            }
            animation.beforeLeave && animation.beforeLeave(el);
            self.addAnimationClass(el, leaveClass);
            self.addAnimationClass(el, leaveActiveClass);
            self.nextFrame(function () {
                self.removeAnimationClass(el, leaveClass);
                if (!cb.cancelled) {
                    self.addAnimationClass(el, leaveToClass);
                    if (self.isValidDuration(explicitLeaveDuration)) {
                        setTimeout(cb, explicitLeaveDuration);
                    } else {
                        self.whenAnimationEnds(el, type, cb);
                    }
                }
            });
            animation.leave && animation.leave(el, cb);
        }
    }

    resolveAnimation(config) {
        var res = {};

        if (config.css !== false) {
            utils.extend(res, this.autoCssAnimation(config.name || 'n'));
        }

        utils.extend(res, config);

        return res;
    }

    autoCssAnimation(name) {
        return {
            enterClass: (name + "-enter"),
            enterToClass: (name + "-enter-to"),
            enterActiveClass: (name + "-enter-active"),
            leaveClass: (name + "-leave"),
            leaveToClass: (name + "-leave-to"),
            leaveActiveClass: (name + "-leave-active")
        };
    }

    once(fn) {
        var called = false;
        return function () {
            if (!called) {
                called = true;
                fn.apply(this, arguments);
            }
        }
    }

    nextFrame(fn) {
        requestAnimationFrame(function () {
            requestAnimationFrame(fn);
        });
    }

    addAnimationClass(el, cls) {
        var animationClasses = el._animationClasses || (el._animationClasses = []);
        if (animationClasses.indexOf(cls) < 0) {
            animationClasses.push(cls);
            utils.addClass(el, cls);
        }
    }

    removeAnimationClass(el, cls) {
        if (el._animationClasses) {
            utils.remove(el._animationClasses, cls);
        }
        utils.removeClass(el, cls);
    }

    whenAnimationEnds(el,
                      expectedType,
                      cb) {
        var ref = this.getAnimationInfo(el, expectedType);
        var type = ref.type;
        var timeout = ref.timeout;
        var propCount = ref.propCount;
        if (!type) {
            return cb();
        }
        var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
        var ended = 0;
        var end = function () {
            el.removeEventListener(event, onEnd);
            cb();
        };
        var onEnd = function (e) {
            if (e.target === el) {
                if (++ended >= propCount) {
                    end();
                }
            }
        };
        setTimeout(function () {
            if (ended < propCount) {
                end();
            }
        }, timeout + 1);
        el.addEventListener(event, onEnd);
    }

    getAnimationInfo(el, expectedType) {
        var styles = window.getComputedStyle(el);
        var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
        var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
        var transitionTimeout = this.getTimeout(transitionDelays, transitionDurations);
        var animationDelays = styles[animationProp + 'Delay'].split(', ');
        var animationDurations = styles[animationProp + 'Duration'].split(', ');
        var animationTimeout = this.getTimeout(animationDelays, animationDurations);

        var type;
        var timeout = 0;
        var propCount = 0;
        /* istanbul ignore if */
        if (expectedType === TRANSITION) {
            if (transitionTimeout > 0) {
                type = TRANSITION;
                timeout = transitionTimeout;
                propCount = transitionDurations.length;
            }
        } else if (expectedType === ANIMATION) {
            if (animationTimeout > 0) {
                type = ANIMATION;
                timeout = animationTimeout;
                propCount = animationDurations.length;
            }
        } else {
            timeout = Math.max(transitionTimeout, animationTimeout);
            type = timeout > 0
                ? transitionTimeout > animationTimeout
                ? TRANSITION
                : ANIMATION
                : null;
            propCount = type
                ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
                : 0;
        }
        var hasTransform =
            type === TRANSITION &&
            transformRE.test(styles[transitionProp + 'Property']);
        return {
            type: type,
            timeout: timeout,
            propCount: propCount,
            hasTransform: hasTransform
        };
    }

    getTimeout(delays, durations) {
        var self = this;

        while (delays.length < durations.length) {
            delays = delays.concat(delays);
        }

        return Math.max.apply(null, durations.map(function (d, i) {
            return self.toMs(d) + self.toMs(delays[i]);
        }));
    }

    toMs(s) {
        return Number(s.slice(0, -1)) * 1000;
    }

    isValidDuration(value) {
        return typeof value === 'number' && !isNaN(value);
    }

    resolveAnimationContext(element) {
        var animations = element.getDirectives().filter(function (dir) {
            return dir.animation = true;
        });

        if (animations.length) {
            return animations[0];
        }

        return null;
    }
}