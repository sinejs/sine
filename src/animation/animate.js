import * as utils from '../utility';
import { Service } from '../view';
import { service } from '../decorator';
import { AnimateEnter } from './animate-enter';
import { AnimateLeave } from './animate-leave';
import * as animateUtils  from './animate-utils';

@service({
    namespace: 'sine',
    selector: '$animate'
})
class AnimateService extends Service {
    constructor() {
        super();
        this.activeAnimation = [];
        this.animationQueue = [];
        this.delayedAnimation = [];
        this.$$main();
    }

    $$main() {
        var self = this;

        animateUtils.raf(function () {
            while(self.delayedAnimation.length > 0) {
                self.animationQueue.push(self.delayedAnimation.shift());
            }

            while (self.animationQueue.length > 0) {
                var animation = self.animationQueue.shift();

                if (animation.destroyed) {
                    continue;
                }

                if (animateUtils.isInPage(animation.element)) {
                    var cancelled = animation.execute();
                    if (!cancelled) {
                        self.activeAnimation.push(animation);
                        animation.animationEnding.on(function () {
                            utils.remove(self.activeAnimation, this);
                        });
                    }
                }
                else {
                    self.delayedAnimation.push(animation);
                }
            }
        });
    }

    // by default, animation is disable while there is parent element animating
    disableAnimate(el) {
        return this.animationQueue.some(function (item) {
                return item.isLive() && item.element.contains(el) && !item.context.animateChildren;
            }) || this.activeAnimation.some(function (item) {
                return item.isLive() && item.element.contains(el) && !item.context.animateChildren;
            });
    }

    enter(vnode, doEnter, appear) {
        var self = this, el = vnode.htmlElement;

        // call leave callback now
        if (utils.isFunction(el._leaveCb)) {
            el._leaveCb.cancelled = true;
            el._leaveCb();
        }

        if (utils.isFunction(el._enterCb) || el.nodeType !== 1) {
            return;
        }

        var context = this.resolveAnimationContext(vnode);

        if (!context || (appear && !context.animateAppear)) {
            return doEnter();
        }

        var data = this.resolveAnimation(context);
        var animation = new AnimateEnter(el, context);

        animation.doEnter = doEnter;
        animation.type = data.type;
        animation.duration = data.duration;
        animation.enterClass = data.enterClass;
        animation.enterToClass = data.enterToClass;
        animation.enterActiveClass = data.enterActiveClass;

        if (context.delayEnter) {
            context.delayEnter(performEnter);
        }
        else {
            performEnter();
        }

        function performEnter() {
            if (self.disableAnimate(el)) {
                return doEnter();
            }

            animation._beforeEnterCb = animateUtils.once(function () {
                animateUtils.removeAnimationClass(el, animation.enterClass);
                context.enterCancelled && context.enterCancelled(el);
                animation._beforeEnterCb = null;
            });

            context.beforeEnter && context.beforeEnter(el);
            animateUtils.addAnimationClass(el, animation.enterClass);
            doEnter();

            self.animationQueue.push(animation);

            context.animationDestroyed.on(function () {
                animation.destroy();
            });
        }

        return animation;
    }

    leave(vnode, doLeave) {
        var self = this, el = vnode.htmlElement;

        // call enter callback now
        if (utils.isFunction(el._enterCb)) {
            el._enterCb.cancelled = true;
            el._enterCb();
        }

        var context = this.resolveAnimationContext(vnode);

        if (!context || el.nodeType !== 1) {
            return doLeave();
        }

        if (utils.isFunction(el._leaveCb)) {
            return;
        }

        var data = this.resolveAnimation(context);
        var animation = new AnimateLeave(el, context);

        animation.doLeave = doLeave;
        animation.type = data.type;
        animation.duration = data.duration;
        animation.leaveClass = data.leaveClass;
        animation.leaveToClass = data.leaveToClass;
        animation.leaveActiveClass = data.leaveActiveClass;

        if (context.delayLeave) {
            context.delayLeave(performLeave);
        }
        else {
            performLeave();
        }

        function performLeave() {
            if(self.disableAnimate(el)) {
                return doLeave();
            }

            animation._beforeLeaveCb = animateUtils.once(function () {
                animateUtils.removeAnimationClass(el, animation.leaveClass);
                context.leaveCancelled && context.leaveCancelled(el);
                animation._beforeLeaveCb = null;
            });

            context.beforeLeave && context.beforeLeave(el);
            animateUtils.addAnimationClass(el, animation.leaveClass);

            self.animationQueue.push(animation);

            context.animationDestroyed.on(function () {
                animation.destroy();
            });
        }

        return animation;
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
            appearClass: (name + "-appear"),
            appearToClass: (name + "-appear-to"),
            appearActiveClass: (name + "-appear-active"),
            enterClass: (name + "-enter"),
            enterToClass: (name + "-enter-to"),
            enterActiveClass: (name + "-enter-active"),
            leaveClass: (name + "-leave"),
            leaveToClass: (name + "-leave-to"),
            leaveActiveClass: (name + "-leave-active")
        };
    }

    resolveAnimationContext(element) {
        var animations = element.getDirectives().filter(function (dir) {
            return dir.animation;
        });

        if (animations.length) {
            return animations[0];
        }

        return null;
    }
}