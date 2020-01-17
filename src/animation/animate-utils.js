import * as utils from '../utility';

var TRANSITION = 'transition';
var ANIMATION = 'animation';
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
var transformRE = /\b(transform|all)(,|$)/;

function once(fn) {
    var called = false;
    return function () {
        if (!called) {
            called = true;
            fn.apply(this, arguments);
        }
    };
}

function nextFrame(fn) {
    requestAnimationFrame(function () {
        requestAnimationFrame(fn);
    });
}

function addAnimationClass(el, cls) {
    var animationClasses = el._animationClasses || (el._animationClasses = []);
    if (animationClasses.indexOf(cls) < 0) {
        animationClasses.push(cls);
        utils.addClass(el, cls);
    }
}

function removeAnimationClass(el, cls) {
    if (el._animationClasses) {
        utils.remove(el._animationClasses, cls);
    }
    utils.removeClass(el, cls);
}

function whenAnimationEnds(el,
    expectedType,
    cb) {
    var ref = getAnimationInfo(el, expectedType);
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

function getAnimationInfo(el, expectedType) {
    var styles = window.getComputedStyle(el);
    var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
    var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = styles[animationProp + 'Delay'].split(', ');
    var animationDurations = styles[animationProp + 'Duration'].split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

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

function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
        return toMs(d) + toMs(delays[i]);
    }));
}

function toMs(s) {
    return Number(s.slice(0, -1)) * 1000;
}

function isValidDuration(value) {
    return typeof value === 'number' && !isNaN(value);
}

function raf(action, refNumber) {
    var cancelled = false;

    function cancel() {
        cancelled = true;
    }

    function isCanceled() {
        if (utils.isNumber(refNumber)) {
            if (refNumber > 0) {
                refNumber--;
            }
            else {
                cancelled = true;
            }
        }

        return cancelled;
    }

    function main() {
        if (isCanceled()) {
            return;
        }
        action(cancel);
        nextFrame(main);
    }

    nextFrame(main);

    return cancel;
}

function isInPage(node) {
    return (node === document.body) ? false : document.body.contains(node);
}

export {
    once,
    nextFrame,
    addAnimationClass,
    removeAnimationClass,
    whenAnimationEnds,
    getAnimationInfo,
    getTimeout,
    toMs,
    isValidDuration,
    raf,
    isInPage
}