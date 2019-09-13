import { directive, namespace, component } from '../view';
import {compute , compile} from '../parser';
import * as utils from '../utility';

var sine = 'sine';

function makeAttrSetter(attrName) {
    return function (ele, binding) {
        if (binding.compute()) {
            if (!ele.hasAttribute(attrName)) {
                ele.setAttribute(attrName, '');
            }
        }
        else {
            if (ele.hasAttribute(attrName)) {
                ele.removeAttribute(attrName);
            }
        }
    };
}

namespace(sine).directive('n-selected', makeAttrSetter('selected'));

namespace(sine).directive('n-disabled', makeAttrSetter('disabled'));

namespace(sine).directive('n-checked', makeAttrSetter('checked'));

namespace(sine).directive('n-readonly', makeAttrSetter('readonly'));

namespace(sine).directive('n-style', function (ele, binding) {
    var value = binding.compute();

    if (!value) {
        ele.removeAttribute('style');
    }

    if (utils.isString(value)) {
        ele.style = value;
    }
    else if (utils.isObject(value)) {
        utils.forEach(value, function (key, value) {
            ele.style[key] = value;
        });
        binding.scope.$watchProp(value, /\w+/i, function () {
            utils.forEach(value, function (key, value) {
                ele.style[key] = value;
            });
        });
    }
    else {
        throw new Error('Parameter of n-style should be string or object');
    }
});

namespace(sine).directive('n-show', function (ele, binding) {
    ele.style.display = binding.compute() ? 'initial' : 'none';
});

namespace(sine).directive('n-hide', function (el, binding) {
    el.style.display = binding.compute() ? 'none' : 'initial';
});

namespace(sine).directive('n-if', {
    props: {
        comment: null
    },
    onInsert: function (ele, binding) {
        this.comment = document.createComment('n-if');
        if (!binding.compute()) {
            utils.replaceNode(ele, this.comment);
        }
    },
    onUpdate: function (ele, binding) {
        if (binding.compute()) {
            if (ele.parentNode == null) {
                utils.replaceNode(this.comment, ele);
            }
        }
        else {
            if (ele.parentNode != null) {
                utils.replaceNode(ele, this.comment);
            }
        }
    },
    onDestroy: function () {
        this.comment = null;
    }
});

namespace(sine).directive('n-switch', {
    props: {
        value: null
    },
    onInsert: function (ele, binding) {
        this.value = binding.compute();
    },
    onUpdate: function (ele, binding) {
        this.value = binding.compute();
    }
});

namespace(sine).directive('n-switch-default', {
    props: {
        attrNode: null,
        comment: null
    },
    methods: {
        isMatch: function () {
            var match = true, vEle = this.attrNode.ownerVElement;

            while (vEle.previousSibling != null && match){
                var whenDir = vEle.previousSibling.getDirective('n-switch-when');

                vEle = vEle.previousSibling;

                if(!whenDir.length) {
                    continue;
                }

                match = !whenDir[0].isMatch;
            }

            return match;
        }
    },
    onCompile: function (attrNode, options) {
        this.attrNode = attrNode;
    },
    onInsert: function (ele, binding) {
        this.comment = document.createComment('n-switch-default');

        if (!this.isMatch()) {
            utils.replaceNode(ele, this.comment);
        }
    },
    onDetect: function (ele, binding) {
        if (this.isMatch()) {
            if (ele.parentNode == null) {
                utils.replaceNode(this.comment, ele);
            }
        }
        else {
            if (ele.parentNode != null) {
                utils.replaceNode(ele, this.comment);
            }
        }
    },
    onDestroy: function () {
        this.attrNode = null;
        this.comment = null;
    }
});

namespace(sine).directive('n-switch-when', {
    props: {
        isMatch: false,
        attrNode: null,
        comment: null
    },
    methods: {
        updateIsMatch: function (ele, binding) {
            var vEle = this.attrNode.ownerVElement;
            var switchDir = vEle.parentNode.getDirective('n-switch');

            if(!switchDir.length){
                throw new Error('Require n-switch directive');
            }

            this.isMatch = binding.compute() === switchDir[0].value;
        }
    },
    onCompile: function (attrNode, options) {
        this.attrNode = attrNode;
    },
    onInsert: function (ele, binding) {
        this.comment = document.createComment('n-switch-when');
        this.updateIsMatch(ele, binding);

        if (!this.isMatch) {
            utils.replaceNode(ele, this.comment);
        }
    },
    onDetect: function (ele, binding) {
        this.updateIsMatch(ele, binding);

        if (this.isMatch) {
            if (ele.parentNode == null) {
                utils.replaceNode(this.comment, ele);
            }
        }
        else {
            if (ele.parentNode != null) {
                utils.replaceNode(ele, this.comment);
            }
        }
    },
    onDestroy: function () {
        this.attrNode = null;
        this.comment = null;
    }
});

namespace(sine).directive('n-bind', function(ele, binding){
    ele.innerText = binding.compute();
});

namespace(sine).directive('n-model', {
    methods: {
        update: function (ele, binding, com) {
            if (com == null) {
                ele.value = binding.compute();
            }
            else {
                com.value = binding.compute();
            }
        }
    },
    onInsert: function (ele, binding, com) {
        this.update(ele, binding, com);

        if (com == null) {
            ele.addEventListener('change', function (e) {
                binding.scope.$setAttr(binding.text, e.target.value);
            });
        }
        else {
            if (utils.isMessenger(com.change)) {
                com.change.on(function (e, args) {
                    binding.scope.$setAttr(binding.text, args.newvalue);
                });
            }
            throw new Error('Compoent ' + com.$$key + 'must define [change] event');
        }
    },
    onUpdate: function (ele, binding, com) {
        this.update(ele, binding, com);
    }
});

namespace(sine).directive('n-repeat', {
    onCompile: function (attrNode, options) {
        var arg = attrNode.nodeValue;
        var eleNode = attrNode.ownerVElement;
        var pattern = /^(\w+)\s+in\s+(\w+)$/i;
        var result = pattern.exec(arg);

        if (result == null) {
            throw new Error("n-repeat: parameter is not valid");
        }

        var itemExp = result[1];
        var itemsExp = result[2];

        eleNode.removeAttribute(attrNode);

        var currentScope, currentItems, start, end, ReeatItem, repeatItems = [];
        var tpl = eleNode.getOuterTpl();
        var custom = eleNode.createCustom('n-repeat', function (scope) {
            var fragment = document.createDocumentFragment();
            currentScope = scope;
            ReeatItem = createRepeatItem();
            setCurrentItems(compute(itemsExp, currentScope));
            start = document.createComment('start: n-repeat');
            end = document.createComment('end: n-repeat');
            fragment.appendChild(start);
            fragment.appendChild(end);
            return fragment;
        });

        eleNode.parentNode.replaceChild(eleNode, custom);
        eleNode.destroy();

        custom.onInsert = function () {
            build(currentItems);
        };

        custom.onDetect = function () {
            var items = compute(itemsExp, currentScope);

            if (currentItems !== items) {
                setCurrentItems(items);
                build(currentItems);
            }
            else {
                repeatItems.forEach(function (childScope) {
                    childScope.$detect();
                });
            }
        };

        custom.onDestroy = function () {
            repeatItems.forEach(function (childScope) {
                childScope.$destroy();
            });
            repeatItems = null;
            eleNode = null;
            currentScope = null;
            currentItems = null;
            start = null;
            end = null;
            custom = null;
        };

        function createRepeatItem(){
            var repeatItemConfig = {
                local: true,
                template: tpl,
                props: {},
                superInstance: currentScope
            };

            repeatItemConfig.props[itemExp] = null;

            return component('n-repeat-item', repeatItemConfig);
        }

        function setCurrentItems(value) {
            if (utils.isArray(value)) {
                currentItems = value;
            }
            else {
                currentItems = [];
            }

            currentScope.$watchProp(currentItems, 'length', function () {
                build(currentItems);
            });
        }

        function build(items) {
            var fragment = document.createDocumentFragment();
            var newRepeatItems = [];

            utils.forEach(items, function (key, item) {
                var repeatItem = getRepeatItem(item);

                if (repeatItem == null) {
                    repeatItem = currentScope.$createComponent(ReeatItem);
                    repeatItem[itemExp] = item;
                }

                fragment.appendChild(repeatItem.$render(true));
                newRepeatItems.push(repeatItem);
            });

            if (repeatItems.length > 0) {
                repeatItems.forEach(function (repeatItem) {
                    repeatItem.$destroy();
                });
            }

            repeatItems = newRepeatItems;
            utils.removeNodeBetween(start, end);
            end.parentNode.insertBefore(fragment, end);
        }

        function getRepeatItem(dataItem){
            var filters = repeatItems.filter(function(item){
                return item[itemExp] === dataItem;
            });

            if(filters.length === 0){
                return null;
            }

            var target = filters[0];

            repeatItems = repeatItems.filter(function (item) {
                return item[itemExp] !== dataItem;
            });

            return target;
        }
    }
});

namespace(sine).directive('n-embed', {
    onCompile: function (attrNode, options) {
        var embedTpl = options.getEmbedTpl();
        if(embedTpl){
            attrNode.ownerVElement.setInnerTpl(embedTpl);
        }
    }
});