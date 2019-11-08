import { SetPropertyHandler } from './handler';

Object.prototype.toProxy = function () {
    return new Proxy(this, new SetPropertyHandler());
};