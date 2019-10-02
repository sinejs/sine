import * as utils from '../utility/utils';
import {injector} from './injector';

export class Directive {
    constructor() {
        Directive.construct.call(this);
    }

    static construct() {
        this.$$binding = null;
        this.$$vnode = null;
        this.output = false;
        injector.injectServices(this);
    }

    $hooks() {
        return {
            onInit: '',
            onCompile: '',
            onInsert: '',
            onDetect: '',
            onUpdate: '',
            onDestroy: ''
        };
    }

    $getMeta() {
        return this.$$meta || {};
    }

    $setMeta(value) {
        this.$$meta = value;
    }

    $bindVNode(vnode) {
        this.$$vnode = vnode;
    }

    $setBinding(binding) {
        this.$$binding = binding;
    }

    $compile(options) {
        if (utils.isFunction(this.onCompile)) {
            this.onCompile.call(this, this.$$vnode, options);
        }
    }

    $insert(ele, com) {
        if (utils.isFunction(this.onInsert)) {
            this.onInsert.call(this, ele, this.$$binding, com);
        }
    }

    $detect(ele, com) {
        if (utils.isFunction(this.onDetect)) {
            return this.onDetect.call(this, ele, this.$$binding, com);
        }

        if (this.$$binding.detect()) {
            this.$update(ele, com);
        }
    }

    $update(ele, com) {
        if (utils.isFunction(this.onUpdate)) {
            this.onUpdate.call(this, ele, this.$$binding, com);
        }
    }

    $dispose(isFromVNode) {
        if (utils.isFunction(this.onDestroy)) {
            this.onDestroy.call(this);
        }

        if (isFromVNode) {
            this.$$vnode = null;
        }

        this.$$binding = null;
    }

    $destroy() {
        this.$dispose();

        if (this.$$vnode != null) {
            this.$$vnode.dispose(true);
            this.$$vnode = null;
        }
    }
}