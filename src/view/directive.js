import * as utils from '../utility/utils';
import {injector} from './injector';

export class Directive {
    get $htmlElement() {
        if (this.$element != null) {
            return this.$element.htmlElement;
        }

        return null;
    }

    get $component() {
        if (this.$element != null) {
            return this.$element.ownerComponent;
        }

        return null;
    }

    get $scope() {
        if (this.$binding != null) {
            return this.$binding.scope;
        }

        return null;
    }

    constructor() {
        Directive.construct.call(this);
    }

    static construct() {
        // private properties
        this.$$disposers = [];
        this.$$cancelAnimationToken = false;
        // private properties

        // public properties
        this.$output = false;
        this.$binding = null;
        this.$attr = null;
        this.$element = null;
        this.$priority = 0;
        this.$elementloaded = false;
        // public properties

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

    $bindNode(node) {
        this.$attr = node;
        this.$element = node.ownerElement;
    }

    $setBinding(binding) {
        this.$binding = binding;
    }

    $compile(options) {
        if (utils.isFunction(this.onCompile)) {
            this.onCompile.call(this, options);
        }
    }

    $insert() {
        var self = this;

        if (utils.isFunction(this.onInsert)) {
            this.onInsert.call(this);
        }

        if (utils.isFunction(this.onEnter) || utils.isFunction(this.onLeave)) {
            this.$requestAnimation();
        }
    }

    $isLoaded() {
        return this.$htmlElement.clientWidth > 0 && this.$htmlElement.clientHeight > 0;
    }

    $requestAnimation() {
        var self = this;

        function query() {
            if (self.$$cancelAnimationToken) {
                return;
            }

            if (self.$isLoaded()) {
                if (!self.$elementloaded) {
                    self.$elementloaded = true;
                    if (self.onEnter != null) {
                        self.onEnter.call(self);
                    }
                }
            }
            else {
                if (self.$elementloaded) {
                    self.$elementloaded = false;
                    if (self.onLeave != null) {
                        self.onLeave.call(self);
                    }
                }
            }

            requestAnimationFrame(query);
        }

        requestAnimationFrame(query);
    }

    $cancelAnimation() {
        this.$$cancelAnimationToken = true;
    }

    $detect() {
        if (utils.isFunction(this.onDetect)) {
            return this.onDetect.call(this);
        }

        if (this.$binding.detect()) {
            this.$update();
        }
    }

    $update() {
        if (utils.isFunction(this.onUpdate)) {
            this.onUpdate.call(this);
        }
    }

    $getAttrValue(attrName) {
        var attrNode = this.$element.getAttribute(attrName);

        if (attrNode == null) {
            return '';
        }

        return attrNode.binding.value;
    }

    $dispose(destroyFromAttr) {
        var self = this;

        this.$cancelAnimation();

        if (utils.isFunction(this.onDestroy)) {
            this.onDestroy.call(this);
        }

        if (destroyFromAttr) {
            this.$attr = null;
            this.$element = null;
        }

        this.$$disposers.forEach(function (disposer) {
            disposer.call(self);
        });

        this.$binding = null;
    }

    $destroy() {
        this.$dispose();

        if (this.$attr != null) {
            this.$attr.dispose(true);
            this.$attr = null;
            this.$element = null;
        }
    }
}