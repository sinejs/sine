import { isMessenger } from '../utility';
import * as utils from '../utility/utils';
import * as eleUtils from '../utility/ele-utils';
import { SetPropertyHandler } from '../utility/handler';
import { ObjectPropertyChangeSubject } from '../utility/subject';
import { injector } from './injector';
import { compile, compute } from '../parser';

export class Component {
    get proxy() {
        return new Proxy(this, new SetPropertyHandler(true));
    }

    constructor(meta) {
        Component.construct.call(this, meta);
    }

    static construct(meta) {
        this.$$vnodes = null;
        this.$$ownerVNode = null;
        this.$$parentComponent = null;
        this.$$childComponents = [];
        this.$$childDirectives = [];
        this.$$detectTimeout = null;
        this.$$propChanged = new ObjectPropertyChangeSubject();

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

    $bindVNode(vnode) {
        this.$$ownerVNode = vnode;
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

        utils.setProperty(this.proxy, prop, value, true);

        if (utils.isFunction(this.afterAttrChange)) {
            this.afterAttrChange.call(this, prop, value, oldValue);
        }
    }

    $listen(e, fn) {
        var messenger = utils.getProperty(this, e, true);
        if (isMessenger(messenger)) {
            messenger.on(fn);
            return;
        }
        throw new Error(e + ' is not a event');
    }

    $getTemplate(sync) {
        var meta = this.$getMeta();

        if (sync) {
            return meta.template || '';
        }

        return new Promise(function (resolve) {
            if (utils.isString(meta.template)) {
                resolve(meta.template);
            }
            else if (utils.isString(meta.templateUrl)) {
                injector.service('$templateCache').getTplByUrl(meta.templateUrl).then(function (tpl) {
                    resolve(tpl);
                });
            }
            else {
                resolve('');
            }
        });
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
                return this.$$ownerVNode.getInnerTpl();
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

    $hasVNodes() {
        return utils.isArray(this.$$vnodes);
    }

    $fromVNodes() {
        var fragment = document.createDocumentFragment();

        this.$$vnodes.forEach(function (vnode) {
            fragment.appendChild(vnode.getDomElement());
        });

        return fragment;
    }

    $clearVNodes() {
        if (!this.$hasVNodes()) {
            return;
        }
        this.$$vnodes.forEach(function (vnode) {
            vnode.destroy();
        });
        this.$$vnodes = null;
    }

    $render(sync) {
        var self = this, fragment = null;

        if (sync) {
            if (this.$hasVNodes()) {
                fragment = this.$fromVNodes();
            }
            else {
                fragment = compile(this.$getTemplate(sync), this.$makeCompileOptions())(this);
            }

            return fragment;
        }

        return new Promise(function (resolve) {
            if (self.$hasVNodes()) {
                resolve(self.$fromVNodes());
            }
            else {
                self.$getTemplate().then(function (html) {
                    fragment = compile(html, self.$makeCompileOptions())(self);
                    resolve(fragment);
                });
            }
        });
    }

    $refresh(sync) {
        this.$clearVNodes();
        return this.$render(sync);
    }

    $mount(selectorOrElement, sync) {
        var self = this, element;

        if (utils.isString(selectorOrElement)) {
            element = document.querySelector(selectorOrElement);
        }
        else {
            element = selectorOrElement;
        }

        eleUtils.clearChildNodes(element);

        if (sync) {
            element.appendChild(this.$render(sync));
            self.$afterViewMount();
        }
        else {
            this.$render(sync).then(function (ele) {
                element.appendChild(ele);
                self.$afterViewMount();
            });
        }
    }

    $afterViewMount() {
        if (utils.isFunction(this.afterViewMount)) {
            this.afterViewMount.call(this);
        }
    }

    $unmount() {
        if (this.$$ownerVNode != null) {
            this.$$ownerVNode.$remove();
            this.$$ownerVNode.removeDomElement();
        }
        else if (this.$hasVNodes()) {
            this.$$vnodes.forEach(function (vnode) {
                vnode.removeDomElement();
            });
        }

        if (this.$$parentComponent != null) {
            this.$$parentComponent.$removeChild(this);
            this.$$parentComponent = null;
        }
    }

    $detect() {
        if (this.$$detectTimeout || !this.$$vnodes) {
            return;
        }

        var self = this;
        self.$$detectTimeout = setTimeout(function () {
            self.$$detectTimeout = null;
            self.$$vnodes.forEach(function (vnode) {
                vnode.detect();
            });
        });
    }

    $validate() {
        var obj, prop, action, self = this;

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

        this.$$propChanged.on(obj, prop, action, {
            beforeChanged: true
        });

        return function () {
            self.$$propChanged.off(obj, prop, action);
        };
    }

    $watch() {
        var obj, prop, action, self = this;

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

        this.$$propChanged.on(obj, prop, action);

        return function () {
            self.$$propChanged.off(obj, prop, action);
        };
    }

    $removeChild(child) {
        var index = this.$$childComponents.indexOf(child);

        if (index !== -1) {
            this.$$childComponents.splice(index, 1);
            child.$$parentComponent = null;
        }
    }

    $dispose(isFromVNode) {
        // remove virtual node first in case it triggers parent component destroy
        this.$unmount();

        if (utils.isFunction(this.onDestroy)) {
            this.onDestroy.call(this);
        }

        if (this.$$detectTimeout) {
            clearTimeout(this.$$detectTimeout);
        }

        this.$clearVNodes();
        this.$$propChanged.destroy();

        if (isFromVNode) {
            this.$$ownerVNode = null;
        }

        this.$$childComponents = null;
        this.$$childDirectives = null;
    }

    $destroy() {
        this.$dispose();

        // destroy virtual node in the end because it may binds logic about destroy
        if (this.$$ownerVNode != null) {
            this.$$ownerVNode.dispose(true);
            this.$$ownerVNode = null;
        }
    }

    $getParent() {
        return this.$$parentComponent;
    }

    $createComponent(constructor) {
        var component = injector.createComponent(constructor);
        this.$$childComponents.push(component);
        component.$$parentComponent = this;
        return component;
    }

    $eval(exp) {
        return compute(exp, this);
    }

    $inherit(parentCmp) {
        var self = this;

        Object.setPrototypeOf(self, utils.object(parentCmp));

        // todo - resolve issue calling parent component's lifecycle hooks
        utils.forEach(self.$hooks(), function (hook) {
            if (self.hasOwnProperty(hook) == null) {
                self[hook] = function () {

                };
            }
        });
    }
}