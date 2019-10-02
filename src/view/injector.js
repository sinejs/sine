import * as utils from '../utility/utils';
import { Messenger } from '../utility/message';

var typeConst = {
    filter: 'filter',
    service: 'service',
    component: 'component',
    directive: 'directive'
};

var namePattern = /^[a-z_\$][\w\$-]*/i;

class Injector {
    constructor() {
        this.container = {};
        this.waitingToExtends = {};
        this.insContainer = {};
    }

    getMapping(contractType) {
        if (!this.container[contractType]) {
            this.container[contractType] = {};
        }
        return this.container[contractType];
    }

    getInstances(contractType) {
        if (!this.insContainer[contractType]) {
            this.insContainer[contractType] = [];
        }
        return this.insContainer[contractType];
    }

    register(contractType, selector, constructor) {
        if (selector.indexOf('.') !== -1) {
            throw new Error('Illegal character "."');
        }

        var mapping = this.getMapping(contractType);

        if (mapping[selector] == null) {
            mapping[selector] = [];
        }
        else {
            var matches = mapping[selector].filter(function (item) {
                return item.prototype.$$meta.namespace === constructor.prototype.$$meta.namespace;
            });

            if (matches.length > 0) {
                throw new Error(selector + ' is exist under namespace ' + matches[0].prototype.$$meta.namespace);
            }
        }

        mapping[selector].push(constructor);
    }

    registerComponent(selector, constructor) {
        this.register(typeConst.component, selector, constructor);
    }

    registerDirective(selector, constructor) {
        this.register(typeConst.directive, selector, constructor);
    }

    contains(contractType, selector, ignoreCase) {
        var constructors, mapping = this.getMapping(contractType);
        var segments = selector.split('.');
        var namespace = '';

        if (segments.length > 1) {
            selector = segments.pop();
            namespace = segments.join('.');
        }

        if (ignoreCase) {
            constructors = utils.getProperty(mapping, selector, true);
        }
        else {
            constructors = mapping[selector];
        }

        if (constructors == null) {
            return false;
        }

        if (namespace && constructors.length > 0) {
            constructors = constructors.filter(function (item) {
                var meta = item.prototype.$$meta;
                return meta.namespace && utils.lowercase(meta.namespace) === utils.lowercase(namespace);
            });

            if (constructors.length === 0) {
                return false;
            }
        }

        return true;
    }

    containsComponent(selector) {
        return this.contains(typeConst.component, selector, true);
    }

    containsDirective(selector) {
        return this.contains(typeConst.directive, selector, true);
    }

    get(contractType, selector, ignoreCase) {
        var constructors, mapping = this.getMapping(contractType);
        var segments = selector.split('.');
        var namespace = '';

        if (segments.length > 1) {
            selector = segments.pop();
            namespace = segments.join('.');
        }

        if (ignoreCase) {
            constructors = utils.getProperty(mapping, selector, true);
        }
        else {
            constructors = mapping[selector];
        }

        if (constructors == null) {
            throw new Error(contractType + ' ' + selector + ' is not defined');
        }

        if (namespace && constructors.length > 0) {
            constructors = constructors.filter(function (item) {
                var meta = item.prototype.$$meta;
                return meta.namespace && utils.lowercase(meta.namespace) === utils.lowercase(namespace);
            });

            if (constructors.length === 0) {
                throw new Error(selector + ' is not exist under namespace ' + namespace);
            }
        }

        if (constructors.length > 1) {
            var namespaces = constructors.map(function (item) {
                return item.prototype.$$meta.namespace;
            });
            throw new Error('namespace ' + namespaces.join('|') + ' all have ' + selector);
        }

        return constructors[0];
    }

    getComponent(selector) {
        return this.get(typeConst.component, selector);
    }

    getDirective(selector) {
        return this.get(typeConst.directive, selector);
    }

    getFilter(selector) {
        return this.get(typeConst.filter, selector);
    }

    getService(selector) {
        return this.get(typeConst.service, selector);
    }

    create(contractType, selector) {
        var constructor = this.get(contractType, selector), instance;

        switch (contractType) {
            case typeConst.component:
                instance = this.createComponent(constructor);
                break;
            case typeConst.directive:
                instance = this.createDirective(constructor);
                break;
            case typeConst.filter:
                instance = this.createFilter(constructor);
                break;
            case typeConst.service:
                instance = this.createService(constructor);
                break;
            default:
                instance = new constructor();
                break;
        }

        return instance;
    }

    createComponent(constructor) {
        if (utils.isString(constructor)) {
            constructor = this.getComponent(constructor);
        }
        return new constructor();
    }

    createDirective(constructor) {
        if (utils.isString(constructor)) {
            constructor = this.getDirective(constructor);
        }
        return new constructor();
    }

    createFilter(constructor) {
        if (utils.isString(constructor)) {
            constructor = this.getFilter(constructor);
        }
        return new constructor();
    }

    createService(constructor) {
        var instance, services = this.getInstances(typeConst.service);

        if (utils.isString(constructor)) {
            constructor = this.getService(constructor);
        }

        if (!constructor.prototype.$$meta.nonShared) {
            var result = services.filter(function (item) {
                return item instanceof constructor;
            });

            if (result.length) {
                instance = result[0];
            }
        }

        if (!instance) {
            instance = new constructor();
            services.push(instance);
        }

        return instance;
    }

    service(selector) {
        return this.createService(selector);
    }

    getWaitingToExtends(contractType) {
        if (!this.waitingToExtends[contractType]) {
            this.waitingToExtends[contractType] = [];
        }
        return this.waitingToExtends[contractType];
    }

    setWaitingToExtends(contractType, value) {
        this.waitingToExtends[contractType] = value;
    }

    checkSelector(selector, contractType) {
        if (namePattern.test(selector)) {
            var constructorName = '';
            var segments = selector.split('-');

            segments.forEach(function (segment) {
                constructorName += utils.uppercase(segment[0]) + segment.substring(1);
            });

            switch (contractType) {
                case typeConst.component:
                    constructorName += 'Component';
                    break;
                case typeConst.directive:
                    constructorName += 'Directive';
                    break;
                case typeConst.filter:
                    constructorName += 'Filter';
                    break;
                case typeConst.service:
                    constructorName += 'Service';
                    break;
            }

            return constructorName;
        }
        else {
            throw new Error(selector + 'is not a valid name');
        }
    }

    buildConstructor(selector, meta, options) {
        var self = this,
            constructor,
            constructorName = this.checkSelector(selector, options.contractType),
            waitingToExtends = self.getWaitingToExtends(options.contractType),
            onConstruct = function () {
                if (utils.isFunction(constructor.super)) {
                    constructor.super.call(this);
                }
                if (utils.isFunction(meta.construct)) {
                    meta.construct.call(this, Messenger);
                }
            };

        constructor = new Function('onConstruct', '"use strict";return function ' + constructorName + '(){onConstruct.call(this);};')(onConstruct);

        if (utils.isFunction(options.superClass)) {
            utils.inherit(constructor, options.superClass);
        }

        meta.selector = selector;

        // apply properties and methods
        if (utils.isString(meta.extends)) {
            if (injector.contains(options.contractType, meta.extends)) {
                var superOne = injector.get(options.contractType, meta.extends);
                remainConstructor(selector, meta, constructor, superOne);
            }
            else {
                waitingToExtends.push({
                    superName: meta.extends,
                    callback: function (superOne) {
                        remainConstructor(selector, meta, constructor, superOne);
                    }
                });
            }
        }
        else {
            remainConstructor(selector, meta, constructor);
        }

        function extendMeta(meta, superOne) {
            if (superOne.prototype.$$meta && superOne.prototype.$$meta.protected) {
                throw new Error(options.contractType + ': ' + meta.extends + ' is protected, it is not allowed to extend!');
            }

            var superMeta = superOne.prototype.$$meta;
            var copy = utils.copy(true, superMeta, function (obj, key) {
                return !(obj === superMeta && (key === 'construct' || key === 'methods'));
            });
            return utils.merge(true, copy, meta);
        }

        function remainConstructor(selector, meta, constructor, superOne) {
            if (superOne != null) {
                utils.inherit(constructor, superOne);
            }

            // create methods
            if (utils.isObject(meta.methods)) {
                utils.extend(constructor.prototype, meta.methods);
            }

            self.registerConstructor(options.contractType, selector, constructor, meta);

            // check if there is any component extends current component
            var waitingToExtends2 = [], fullSelector = meta.namespace + '.' + selector;
            waitingToExtends.forEach(function (item) {
                if (item.superName === fullSelector) {
                    item.callback.call(null, constructor);
                }
                else {
                    waitingToExtends2.push(item);
                }
            });
            self.setWaitingToExtends(options.contractType, waitingToExtends2);
        }

        return constructor;
    }

    registerConstructor(contractType, selector, constructor, meta) {
        var superMeta = constructor.prototype.$$meta;

        if (superMeta && superMeta.protected) {
            throw new Error(contractType + ': ' + meta.extends + ' is protected, it is not allowed to extend!');
        }

        var copy = utils.copy(true, superMeta, function (obj, key) {
            return !(obj === superMeta && (key === 'construct' || key === 'methods'));
        });

        meta = utils.merge(true, copy, meta);

        constructor.prototype.$$meta = meta;

        // register component if it is global
        if (!meta.local) {
            injector.register(contractType, selector, constructor);
        }
    }

    injectServices(instance) {
        var self = this, meta = instance.$getMeta();

        if (utils.isObject(meta.inject)) {
            utils.forEach(meta.inject, function (key, value) {
                Object.defineProperty(instance, key, {
                    enumerable: false,
                    configurable: false,
                    get: function () {
                        var privateKey = '$$' + key;

                        if (instance[privateKey] == null) {
                            instance[privateKey] = self.createService(value);
                        }

                        return instance[privateKey];
                    }
                });
            });
        }
    }
}

var injector = new Injector();

export { typeConst, Injector, injector };