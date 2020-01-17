import { SetPropertyHandler } from './handler';

Object.defineProperty(Object.prototype, '$', {
    get: function () {
        return new Proxy(this, new SetPropertyHandler());
    },
    configurable: false,
    enumerable: false
});