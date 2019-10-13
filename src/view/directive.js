import * as utils from '../utility/utils';
import * as eleUtils from '../utility/ele-utils';
import {injector} from './injector';

export class Directive {
    constructor() {
        Directive.construct.call(this);
    }

    static construct() {
        this.$$binding = null;
        this.$$vnode = null;
        this.$$disposers = [];
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
        var self = this;

        if (utils.isFunction(this.onInsert)) {
            this.onInsert.call(this, ele, this.$$binding, com);
        }

        if (utils.isFunction(this.onLoad)) {
            this.$$disposers.push(eleUtils.queryElementLoaded(ele, function () {
                self.onLoad.call(self, ele, self.$$binding, com);
            }));
        }

        if (utils.isFunction(this.onUnload)) {
            this.$$disposers.push(eleUtils.queryElementUnloaded(ele, function () {
                self.onUnload.call(self, ele, self.$$binding, com);
            }));
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
        var self = this;

        if (utils.isFunction(this.onDestroy)) {
            this.onDestroy.call(this);
        }

        if (isFromVNode) {
            this.$$vnode = null;
        }

        this.$$disposers.forEach(function (disposer) {
            disposer.call(self);
        });

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