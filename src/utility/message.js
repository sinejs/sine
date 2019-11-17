import * as utils from './utils';

class Messenger {
    constructor() {
        this.handlers = [];
    }

    on(fn) {
        this.handlers.push(fn);
    }

    off(fn) {
        for (var i = 0; i < this.handlers.length; i++) {
            if (this.handlers[i] === fn) {
                this.handlers.splice(i, 1);
            }
        }
    }

    fire(args, scope) {
        var returnValue;
        scope = scope || this;
        for (var i = 0; i < this.handlers.length; i++) {
            if (utils.isFunction(this.handlers[i])) {
                returnValue = this.handlers[i].call(scope, args);
            }
        }
        return returnValue;
    }
}

class MessengerBus {
    constructor() {
        this.messengers = {};
    }

    get(e) {
        if (!this.messengers[e]) {
            this.messengers[e] = new Messenger();
        }
        return this.messengers[e];
    }

    on(e, fn) {
        this.get(e).on(fn);
    }

    off(e, fn) {
        this.get(e).off(fn);
    }

    fire(e, args, scope) {
        return this.get(e).fire(args, scope);
    }
}

function isMessenger(obj) {
    return obj instanceof Messenger;
}

export { Messenger, MessengerBus, isMessenger };