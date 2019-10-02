import * as utils from '../utility/utils';
import {injector} from './injector';

export class Service {
    constructor() {
        Service.construct.call(this);
    }

    static construct() {
        injector.injectServices(this);
    }

    $hooks() {
        return {
            onInit: '',
            onDestroy: ''
        };
    }

    $getMeta() {
        return this.$$meta || {};
    }

    $setMeta(value) {
        this.$$meta = value;
    }

    $destroy() {
        if (utils.isFunction(this.onDestroy)) {
            this.onDestroy.call(this);
        }
    }
}