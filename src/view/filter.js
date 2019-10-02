import * as utils from '../utility/utils';
import {injector} from './injector';

export class Filter {
    constructor(){
        Filter.construct.call(this);
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

    $execute() {
        if (utils.isFunction(this.onExecute)) {
            return this.onExecute.apply(this, arguments);
        }
    }

    $destroy() {
        if (utils.isFunction(this.onDestroy)) {
            this.onDestroy.call(this);
        }
    }
}