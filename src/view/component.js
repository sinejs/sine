import * as utils from '../utility';
import { Observer } from '../core';
import { compile, compute } from '../parser';
import { injector } from './injector';

export class Component {

    constructor(meta) {
        Component.construct.call(this, meta);
    }

    static construct(meta) {
        this.$$element = null;
        this.$$childElements = null;
        this.$$parentComponent = null;
        this.$$childComponents = [];
        this.$$childDirectives = [];
        this.$$detectTimeout = null;
        this.$$observer = new Observer();
        this.$$disposers = [];

        if (meta != null) {
            this.$setMeta(meta);
        }

        injector.injectServices(this);
    }

    $hooks() {
        return {
            beforeAttrChange: '',
            afterAttrChange: '',
            onInit: '',
            beforeViewInit: '',
            afterViewMount: '',
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
        this.$$element = node;
    }

    $hasAttr(prop) {
        return utils.hasProperty(this, prop, true);
    }

    $initAttr(prop, value) {
        var oldValue = utils.getProperty(this, prop, true);

        if (utils.isFunction(this.beforeAttrChange)) {
            this.beforeAttrChange.call(this, prop, value, oldValue);
        }

        utils.setProperty(this, prop, value, true);

        if (utils.isFunction(this.afterAttrChange)) {
            this.afterAttrChange.call(this, prop, value, oldValue);
        }
    }

    $initAttrDone() {
        if (utils.isFunction(this.onInit)) {
            this.onInit.call(this);
        }
    }

    $setAttr(prop, value) {
        var oldValue = utils.getProperty(this, prop, true);

        if (utils.isFunction(this.beforeAttrChange)) {
            this.beforeAttrChange.call(this, prop, value, oldValue);
        }

        utils.setProperty(this.$, prop, value, true);

        if (utils.isFunction(this.afterAttrChange)) {
            this.afterAttrChange.call(this, prop, value, oldValue);
        }
    }

    $listen(e, fn) {
        var messenger = utils.getProperty(this, e, true);
        if (utils.isMessenger(messenger)) {
            messenger.on(fn);
            return;
        }
        throw new Error(e + ' is not a event');
    }

    $getTemplateById(id) {
        var element = document.querySelector('#' + id);
        return element ? element.innerText : '';
    }

    $getTemplate() {
        var meta = this.$getMeta();

        if (utils.isString(meta.templateId)) {
            meta.template = this.$getTemplateById(meta.templateId);
        }

        return meta.template || '';
    }

    $using(name) {
        var meta = this.$getMeta(),
            using = meta.using,
            segments = name.split('.'),
            className = segments.pop(),
            spaceName = segments.join('.');

        if (spaceName && utils.isObject(using)) {
            utils.some(using, function (key, value) {
                if (key === spaceName) {
                    name = value + '.' + className;
                    return true;
                }
            });
        }

        return name;
    }

    $makeCompileOptions() {
        var self = this;
        return {
            getEmbedTpl: function () {
                return self.$$element.getInnerTpl();
            },
            containsComponent: function (name) {
                return injector.containsComponent(self.$using(name));
            },
            createComponent: function (name) {
                return injector.createComponent(self.$using(name));
            },
            containsDirective: function (name) {
                return injector.containsDirective(self.$using(name));
            },
            createDirective: function (name) {
                return injector.createDirective(self.$using(name));
            }
        };
    }

    $hasView() {
        return utils.isArray(this.$$childElements);
    }

    $showView() {
        var fragment = document.createDocumentFragment();

        this.$$childElements.forEach(function (child) {
            fragment.appendChild(child.getHtmlElement());
        });

        return fragment;
    }

    $clearView() {
        if (!this.$hasView()) {
            return;
        }
        this.$$childElements.forEach(function (child) {
            child.destroy();
        });
        this.$$childElements = null;
    }

    $render() {
        var fragment = null;

        if (this.$hasView()) {
            fragment = this.$showView();
        }
        else {
            fragment = compile(this.$getTemplate(), this.$makeCompileOptions())(this);
        }

        return fragment;
    }

    $refresh() {
        this.$clearView();
        return this.$render();
    }

    $mount(selectorOrElement, options) {
        var element;

        options = options || {};

        if (utils.isString(selectorOrElement)) {
            element = document.querySelector(selectorOrElement);
        }
        else {
            element = selectorOrElement;
        }

        if (!options.append) {
            utils.clearChildNodes(element);
        }

        element.appendChild(this.$render());
        this.$afterViewMount();
    }

    $unmount() {
        if (this.$$element != null) {
            this.$$element.$remove();
            this.$$element.removeHtmlElement();
        }
        else if (this.$hasView()) {
            this.$$childElements.forEach(function (child) {
                child.removeHtmlElement();
            });
        }

        if (this.$$parentComponent != null) {
            this.$$parentComponent.$removeChildCmp(this);
            this.$$parentComponent = null;
        }
    }

    $afterViewMount() {
        if (utils.isFunction(this.afterViewMount)) {
            this.afterViewMount.call(this);
        }
    }

    $detect() {
        if (this.$$detectTimeout || !this.$$childElements) {
            return;
        }

        var self = this;
        self.$$detectTimeout = setTimeout(function () {
            self.$$detectTimeout = null;
            self.$$childElements.forEach(function (child) {
                child.detect();
            });
        });
    }

    $validate() {
        var obj, prop, action;

        if (arguments.length === 2) {
            obj = this;
            prop = arguments[0];
            action = arguments[1];
        }
        else if (arguments.length === 3) {
            obj = arguments[0];
            prop = arguments[1];
            action = arguments[2];
        }
        else {
            throw new Error('arguments error');
        }

        return this.$$observer.validate(obj, prop, action);
    }

    $watch() {
        var obj, prop, action;

        if (arguments.length === 2) {
            obj = this;
            prop = arguments[0];
            action = arguments[1];
        }
        else if (arguments.length === 3) {
            obj = arguments[0];
            prop = arguments[1];
            action = arguments[2];
        }
        else {
            throw new Error('arguments error');
        }

        return this.$$observer.watch(obj, prop, action);
    }

    $eval(exp) {
        return compute(exp, this);
    }

    $getParentCmp() {
        return this.$$parentComponent;
    }

    $removeChildCmp(childCmp) {
        var index = this.$$childComponents.indexOf(childCmp);

        if (index !== -1) {
            this.$$childComponents.splice(index, 1);
            childCmp.$$parentComponent = null;
        }
    }

    $createChildCmp(childCmp) {
        var component = injector.createComponent(childCmp);
        this.$$childComponents.push(component);
        component.$$parentComponent = this;
        return component;
    }

    $inheritCmp(parentCmp) {
        var self = this;

        Object.setPrototypeOf(self, utils.object(parentCmp));

        // todo - resolve issue calling parent component's lifecycle hooks
        utils.forEach(self.$hooks(), function (handler, hook) {
            if (self.hasOwnProperty(hook) == null) {
                self[hook] = function () {

                };
            }
        });

        this.$$disposers.push(parentCmp.$validate('*', function (prop, args) {
            self.$$observer.fireChanging(self, prop, args);
        }));

        this.$$disposers.push(parentCmp.$watch('*', function (prop, args) {
            self.$$observer.fireChanged(self, prop, args);
        }));
    }

    $dispose(destroyFromElement) {
        // remove virtual node first in case it triggers parent component destroy
        this.$unmount();

        if (utils.isFunction(this.onDestroy)) {
            this.onDestroy.call(this);
        }

        if (this.$$detectTimeout) {
            clearTimeout(this.$$detectTimeout);
        }

        this.$$disposers.forEach(function (disposer) {
            disposer.call();
        });

        this.$clearView();
        this.$$observer.destroy();

        if (destroyFromElement) {
            this.$$element = null;
        }

        this.$$childComponents = null;
        this.$$childDirectives = null;
    }

    $destroy() {
        this.$dispose();

        // destroy virtual node in the end because it may binds logic about destroy
        if (this.$$element != null) {
            this.$$element.dispose(true);
            this.$$element = null;
        }
    }
}