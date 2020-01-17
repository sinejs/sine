import { Messenger, isFunction } from '../utility';

export class AnimateBase {
    constructor(element, context) {
        this.type = '';
        this.duration = null;
        this.ended = false;
        this.destroyed = false;
        this.element = element;
        this.context = context;
        this.animationEnding = new Messenger();
        this.animationEnd = new Messenger();
    }

    end() {
        if (!this.ended) {
            this.ended = true;
            this.animationEnding.fire(null, this);
            this.animationEnd.fire(null, this);
        }
    }

    isLive() {
        return !this.destroyed;
    }

    destroy() {
        if (!this.destroyed) {
            this.destroyed = true;
            this.onDestroy && this.onDestroy();
            this.element = null;
            this.context = null;
            this.animationEnding = null;
            this.animationEnd = null;
        }
    }
}