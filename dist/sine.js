(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"));
	else if(typeof define === 'function' && define.amd)
		define(["axios"], factory);
	else if(typeof exports === 'object')
		exports["sine"] = factory(require("axios"));
	else
		root["sine"] = factory(root["axios"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_axios__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/attribute.js":
/*!*******************************!*\
  !*** ./src/core/attribute.js ***!
  \*******************************/
/*! exports provided: AttrNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttrNode", function() { return AttrNode; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binding */ "./src/core/binding.js");




// // Window Events
// case 'on-load':
// case 'on-unload':
// // Form Element Events
// case 'on-change':
// case 'on-submit':
// case 'on-reset':
// case 'on-select':
// case 'on-blur':
// case 'on-focus':
// // Image Events
// case 'on-abort':
// // Keyboard Events
// case 'on-keydown':
// case 'on-keypress':
// case 'on-keyup':
// // Mouse Events
// case 'on-click':
// case 'on-dblclick':
// case 'on-mousedown':
// case 'on-mousemove':
// case 'on-mouseout':
// case 'on-mouseover':
// case 'on-mouseup':
var eventText = 'load unload change submit reset select blur focus abort keydown keypress keyup click dblclick mousedown mousemove mouseout mouseover mouseup';
var domEvents = eventText.split(' ');

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](AttrNode, _base__WEBPACK_IMPORTED_MODULE_1__["VNode"]);
// attribute node
function AttrNode(name, value) {
    AttrNode.super.call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].attribute, name, value);
    this.quote = '"';
    this.orgNodeName = name;
    this.isEvent = false;
    this.isBinding = false;
    this.isDomEvent = false;
    this.isDirective = false;
    this.directive = null;
    this.ownerVElement = null;
    this.ownerElement = null;
    this.ownerComponent = null;
    this.binding = new _binding__WEBPACK_IMPORTED_MODULE_2__["Binding"]();
}

AttrNode.prototype.belongTo = function (key) {
    return this.orgNodeName === key;
};

AttrNode.prototype.setValue = function (value) {
    this.nodeValue = value;
    this.compile(this.options);
};

AttrNode.prototype.compile = function (options) {
    this.isEvent = this.nodeName.startsWith('@');
    this.isBinding = this.nodeName.startsWith(':');
    this.isDirective = this.nodeName.startsWith('*');
    if (this.isEvent || this.isBinding || this.isDirective) {
        this.nodeName = this.nodeName.substr(1);
    }
    this.isDomEvent = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["contains"](domEvents, this.nodeName);
    this.binding.setOutput(this.isEvent);
    this.binding.bind(this.nodeValue, this.isEvent || this.isBinding || this.isDirective);

    if (this.isDirective) {
        if (options.containsDirective(this.nodeName)) {
            this.directive = options.createDirective(this.nodeName);
            this.directive.$bindVNode(this);
            this.binding.setOutput(this.directive.output);
        }
        else {
            throw new Error('directive ' + this.nodeName + ' is not defined');
        }
    }
};

AttrNode.prototype.link = function (scope, ownerElement, ownerComponent) {
    var self = this;

    this.scope = scope;
    this.ownerElement = ownerElement;
    this.ownerComponent = ownerComponent;
    this.binding.setScope(scope);

    if (this.isEvent) {
        if (this.isDomEvent) {
            this.ownerElement.addEventListener(this.nodeName, function (e) {
                self.binding.compute({
                    locals: {
                        $event: e,
                        $args: null,
                        $element: self.ownerElement
                    }
                });
            });
        }
        else if (ownerComponent != null) {
            ownerComponent.$listen(this.nodeName, function (e, args) {
                self.binding.compute({
                    locals: {
                        $event: e,
                        $args: args,
                        $element: self.ownerElement
                    }
                });
            });
        }
    }
    else {
        if (this.directive) {
            scope.$$childDirectives.push(this.directive);
            this.directive.$setBinding(this.binding);
        }
        else if (ownerComponent != null && ownerComponent.$hasAttr(this.nodeName)) {
            ownerComponent.$setAttr(this.nodeName, this.binding.compute());
        }
        else {
            if (this.nodeName.startsWith('style')) {
                _utility_utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.ownerElement, this.nodeName, this.binding.compute());
            }
            else {
                this.ownerElement.setAttribute(this.nodeName, this.binding.compute());
            }
        }

        this.binding.watchProps(function () {
            self.detect();
        });
    }
};

AttrNode.prototype.detect = function () {
    if (this.directive == null) {
        if (this.hasChange()) {
            this.update();
        }
    }
    else {
        this.directive.$detect(this.ownerElement, this.ownerComponent);
    }
};

AttrNode.prototype.hasChange = function () {
    return this.binding.detect();
};

AttrNode.prototype.update = function () {
    if (this.ownerComponent != null && this.ownerComponent.$hasAttr(this.nodeName)) {
        this.ownerComponent.$setAttr(this.nodeName, this.binding.value);
    }
    else {
        if (this.nodeName.startsWith('style')) {
            _utility_utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.ownerElement, this.nodeName, this.binding.value);
        }
        else {
            this.ownerElement.setAttribute(this.nodeName, this.binding.value);
            if (this.ownerElement.nodeName === 'INPUT' && this.nodeName === 'value') {
                this.ownerElement.value = this.binding.value;
            }
        }
    }
};

AttrNode.prototype.afterLink = function () {
    if (this.directive) {
        this.directive.$insert(this.ownerElement, this.ownerComponent);
    }
};

AttrNode.prototype.directives = function () {
    return this.directive == null ? [] : [this.directive];
};

AttrNode.prototype.getOuterTpl = function () {
    return this.orgNodeName + (this.nodeValue == null ? '' : ('=' + this.quote + this.nodeValue + this.quote));
};

AttrNode.prototype.getInnerTpl = function () {
    return this.orgNodeName + (this.nodeValue == null ? '' : ('=' + this.quote + this.nodeValue + this.quote));
};

AttrNode.prototype.dispose = function (isFromDirective) {
    if(isFromDirective){
        this.directive = null;
    }

    this.binding.destroy();
    this.binding = null;
    this.ownerVElement = null;
    this.ownerElement = null;
    this.ownerComponent = null;
    this.$destroy();
};

AttrNode.prototype.destroy = function(){
    if(this.directive != null){
        this.directive.$dispose(true);
        this.directive = null;
    }

    this.dispose();
};




/***/ }),

/***/ "./src/core/base.js":
/*!**************************!*\
  !*** ./src/core/base.js ***!
  \**************************/
/*! exports provided: VNodeType, VNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VNodeType", function() { return VNodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VNode", function() { return VNode; });

var VNodeType = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    entity: 6,
    processingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12,
    custom: 101
};

// basic node
function VNode(type, name, value) {
    this.nodeType = type;
    this.nodeName = name;
    this.nodeValue = value;
    this.childNodes = [];
    this.parentNode = null;
    this.previousSibling = null;
    this.nextSibling = null;
    this.firstChild = null;
    this.lastChild = null;
    this.ownerVDocument = null;
    this.scope = null;
}

VNode.prototype.$pushChild = function (child) {
    child.parentNode = this;
    this.childNodes.push(child);
};

VNode.prototype.$buildSibling = function () {
    if (this.childNodes.length === 0) {
        return;
    }

    var self = this;

    if (this.childNodes.length === 1) {
        this.firstChild = this.childNodes[0];
        this.lastChild = this.childNodes[0];
    }
    else {
        this.firstChild = this.childNodes[0];
        this.lastChild = this.childNodes[this.childNodes.length - 1];

        this.childNodes.forEach(function (child, index) {
            if (index === 0) {
                child.nextSibling = self.childNodes[index + 1];
                return;
            }
            if (index === (self.childNodes.length - 1)) {
                child.previousSibling = self.childNodes[index - 1];
                return;
            }
            child.previousSibling = self.childNodes[index - 1];
            child.nextSibling = self.childNodes[index + 1];
        });
    }

    this.childNodes.forEach(function (child) {
        child.$buildSibling();
    });
};

VNode.prototype.$clearParentAndSibling = function() {
    this.parentNode = null;
    this.previousSibling = null;
    this.nextSibling = null;
};

VNode.prototype.$remove = function () {
    if (this.parentNode != null) {
        this.parentNode.removeChild(this);
    }
};

VNode.prototype.$destroy = function () {
    this.$remove();
    this.$clearParentAndSibling();
    this.childNodes.length = 0;
    this.firstChild = null;
    this.lastChild = null;
    this.ownerVDocument = null;
    this.scope = null;
};

VNode.prototype.hasChildNodes = function () {
    return this.childNodes.length !== 0;
};

VNode.prototype.clearChildNodes = function () {
    this.childNodes.forEach(function (child) {
        child.destroy();
    });
    this.childNodes.length = 0;
};

VNode.prototype.appendChild = function (child) {
    if (child.parentNode != null) {
        child.parentNode.removeChild(child);
    }

    child.parentNode = this;

    if (this.childNodes.length === 0) {
        this.firstChild = child;
    }
    else {
        this.lastChild.nextSibling = child;
        child.previousSibling = this.lastChild;
    }

    child.compile(this.compileOptions);
    this.lastChild = child;
    this.childNodes.push(child);
    return child;
};

VNode.prototype.insertBefore = function (refChild, newChild) {
    if (newChild.parentNode != null) {
        newChild.parentNode.removeChild(newChild);
    }
    var index = this.childNodes.indexOf(refChild);
    if (index === -1) {
        throw new Error('Ref node is not a child of specified node');
    }

    newChild.parentNode = this;

    if(refChild.previousSibling != null) {
        newChild.previousSibling = refChild.previousSibling;
        refChild.previousSibling.nextSibling = newChild;
    }

    newChild.nextSibling = refChild;
    refChild.previousSibling = newChild;

    if (index === 0) {
        this.firstChild = newChild;
    }

    newChild.compile(this.compileOptions);
    this.childNodes.splice(index, 0, newChild);
    return newChild;
};

VNode.prototype.insertAfter = function (refChild, newChild) {
    if (refChild.nextSibling == null) {
        return this.appendChild(newChild);
    }

    return this.insertBefore(refChild.nextSibling, newChild);
};

VNode.prototype.removeChild = function (child) {
    var index = this.childNodes.indexOf(child);
    if (index === -1) {
        throw new Error('Remove node is not a child of specified node');
    }

    if(child.previousSibling != null){
        child.previousSibling.nextSibling = child.nextSibling;
    }

    if(child.nextSibling != null) {
        child.nextSibling.previousSibling = child.previousSibling;
    }

    if(index === 0) {
        this.firstChild = child.nextSibling;
    }

    if(index === (this.childNodes.length -1)){
        this.lastChild = child.previousSibling;
    }

    child.$clearParentAndSibling();
    this.childNodes.splice(index, 1);

    return child;
};

VNode.prototype.replaceChild = function (refChild, newChild) {
    if (newChild.parentNode != null) {
        newChild.parentNode.removeChild(newChild);
    }
    var index = this.childNodes.indexOf(refChild);
    if (index === -1) {
        throw new Error('Ref node is not a child of specified node');
    }

    newChild.parentNode = this;
    newChild.previousSibling = refChild.previousSibling;
    newChild.nextSibling = refChild.nextSibling;

    if (this.firstChild === refChild) {
        this.firstChild = newChild;
    }

    if (this.lastChild === refChild) {
        this.lastChild = newChild;
    }

    refChild.$clearParentAndSibling();
    newChild.compile(this.compileOptions);
    this.childNodes.splice(index, 1, newChild);
    return newChild;
};

VNode.prototype.cloneNode = function () {
    throw new Error('not implemented');
};

VNode.prototype.compile = function (options) {
    this.childNodes.forEach(function (child) {
        child.compile(options);
    });
};

VNode.prototype.directives = function () {
    var result = [];
    this.childNodes.map(function (child) {
        return child.directives();
    }).forEach(function (item) {
        result = result.concat(item);
    });
    return result;
};

VNode.prototype.getDirective = function () {
    return [];
};

VNode.prototype.link = function (scope) {
    this.scope = scope;
    return this.childNodes.map(function (child) {
        child.link(scope);
    });
};

VNode.prototype.afterLink = function () {
    this.childNodes.forEach(function (child) {
        child.afterLink();
    });
};

VNode.prototype.detect = function () {
    if (this.hasChange()) {
        this.update();
    }
};

VNode.prototype.hasChange = function () {
    return false;
};

VNode.prototype.update = function () {

};

VNode.prototype.destroy = function () {
    this.childNodes.map(function (child) {
        child.destroy();
    });
    this.$destroy();
};




/***/ }),

/***/ "./src/core/binding.js":
/*!*****************************!*\
  !*** ./src/core/binding.js ***!
  \*****************************/
/*! exports provided: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return Binding; });
/* harmony import */ var _utility_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/message */ "./src/utility/message.js");
/* harmony import */ var _utility_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/handler */ "./src/utility/handler.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");




function ExpNode(text) {
    this.text = text;
    this.value = null;
    this.oldValue = null;
}

ExpNode.prototype.getProps = function(scope, options) {
    var props = [];
    Object(_parser__WEBPACK_IMPORTED_MODULE_2__["compute"])(this.text, new Proxy(scope, new _utility_handler__WEBPACK_IMPORTED_MODULE_1__["GetPropertyHandler"](props, '', true)), options);
    return props;
};

ExpNode.prototype.compute = function (scope, options) {
    this.oldValue = this.value;
    this.value = Object(_parser__WEBPACK_IMPORTED_MODULE_2__["compute"])(this.text, scope, options);
};

ExpNode.prototype.detect = function () {
    return this.value !== this.oldValue;
};

ExpNode.prototype.destroy = function(){
    this.value = null;
    this.oldValue = null;
    this.props = null;
};

function Binding() {
    this.scope = null;
    this.text = '';
    this.isExp = false;
    this.segments = [];
    this.rightStr = '';
    this.output = false;
    this.value = null;
    this.change = new _utility_message__WEBPACK_IMPORTED_MODULE_0__["Messenger"]();
}

Binding.prototype.setScope = function (value) {
    this.scope = value;
};

Binding.prototype.setOutput = function (value) {
    this.output = value;
};

Binding.prototype.bind = function (text, isExp) {
    if(text == null) {
        return;
    }

    this.text = text;
    this.isExp = isExp;

    if (isExp) {
        this.segments.push({
            exp: new ExpNode(text),
            leftStr: ''
        });
        return;
    }

    var pattern = /{{([^}]*)}}/g;
    var lastIndex = pattern.lastIndex;
    var match = pattern.exec(text);

    while (match != null) {
        this.segments.push({
            index: match.index,
            exp: new ExpNode(match[1]),
            leftStr: text.substring(lastIndex, match.index)
        });
        lastIndex = pattern.lastIndex;
        match = pattern.exec(text);
    }

    if (this.segments.length > 0 && lastIndex < text.length) {
        this.rightStr = text.substring(lastIndex);
    }
};

Binding.prototype.compute = function (options) {
    var self = this;

    if (this.segments.length === 0) {
        this.value = this.text;
    }
    else {
        if (this.isExp && this.segments.length === 1) {
            this.segments[0].exp.compute(self.scope, options);
            this.value = this.segments[0].exp.value;
        }
        else {
            var text = '';
            this.segments.forEach(function (segment) {
                segment.exp.compute(self.scope, options);
                text += (segment.leftStr + segment.exp.value);
            });
            this.value = text + this.rightStr;
        }
    }

    return this.value;
};

Binding.prototype.watchProps = function(action) {
    if (this.output) {
        return;
    }

    var self = this, props = [];

    this.segments.forEach(function (segment) {
        props = props.concat(segment.exp.getProps(self.scope));
    });

    props.forEach(function (prop) {
        self.scope.$watch(prop, function () {
            self.change.fire();
        });
    });

    if (action != null) {
        self.change.on(action);
    }
};

Binding.prototype.detect = function (options) {
    if (this.output) {
        return false;
    }
    var self = this;
    this.compute();
    return this.segments.some(function (segment) {
        return segment.exp.detect(self.scope, options);
    });
};

Binding.prototype.destroy = function () {
    this.segments.forEach(function(segment){
        segment.exp.destroy();
    });
    this.scope = null;
};



/***/ }),

/***/ "./src/core/cdatasection.js":
/*!**********************************!*\
  !*** ./src/core/cdatasection.js ***!
  \**********************************/
/*! exports provided: CDataSectionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDataSectionNode", function() { return CDataSectionNode; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/core/base.js");



_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](CDataSectionNode, _base__WEBPACK_IMPORTED_MODULE_1__["VNode"]);
// CDataSection node
function CDataSectionNode() {
    CDataSectionNode.super.call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].cdataSection);
}



/***/ }),

/***/ "./src/core/comment.js":
/*!*****************************!*\
  !*** ./src/core/comment.js ***!
  \*****************************/
/*! exports provided: CommentNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentNode", function() { return CommentNode; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/core/base.js");



_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](CommentNode, _base__WEBPACK_IMPORTED_MODULE_1__["VNode"]);
// comment node
function CommentNode() {
    CommentNode.super.call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].comment, '#comment');
}

CommentNode.prototype.link = function () {
    return document.createComment(this.nodeValue);
};




/***/ }),

/***/ "./src/core/custom.js":
/*!****************************!*\
  !*** ./src/core/custom.js ***!
  \****************************/
/*! exports provided: CustomNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomNode", function() { return CustomNode; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/core/base.js");



_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](CustomNode, _base__WEBPACK_IMPORTED_MODULE_1__["VNode"]);
// custom node
function CustomNode(name, linker) {
    CustomNode.super.call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].custom, name);
    this.linker = linker;
}

CustomNode.prototype.link = function(scope) {
    this.scope = scope;
    return this.linker.call(this, scope);
};

CustomNode.prototype.afterLink = function() {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onInsert)) {
        return this.onInsert.call(this);
    }
};

CustomNode.prototype.detect = function() {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDetect)) {
        return this.onDetect.call(this);
    }
};

CustomNode.prototype.hasChange = function() {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onHasChange)) {
        return this.onHasChange.call(this);
    }
};

CustomNode.prototype.update = function() {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onUpdate)) {
        return this.onUpdate.call(this);
    }
};

CustomNode.prototype.destroy = function() {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
        return this.onDestroy.call(this);
    }
    this.$destroy();
};



/***/ }),

/***/ "./src/core/doctype.js":
/*!*****************************!*\
  !*** ./src/core/doctype.js ***!
  \*****************************/
/*! exports provided: DocumentTypeNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentTypeNode", function() { return DocumentTypeNode; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/core/base.js");



_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](DocumentTypeNode, _base__WEBPACK_IMPORTED_MODULE_1__["VNode"]);
// document type node
function DocumentTypeNode() {
    DocumentTypeNode.super.call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].documentType);
}




/***/ }),

/***/ "./src/core/document.js":
/*!******************************!*\
  !*** ./src/core/document.js ***!
  \******************************/
/*! exports provided: DocumentNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentNode", function() { return DocumentNode; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/core/base.js");



_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](DocumentNode, _base__WEBPACK_IMPORTED_MODULE_1__["VNode"]);
// document node
function DocumentNode() {
    DocumentNode.super.call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].document);
}



/***/ }),

/***/ "./src/core/element.js":
/*!*****************************!*\
  !*** ./src/core/element.js ***!
  \*****************************/
/*! exports provided: ElementNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementNode", function() { return ElementNode; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _utility_ele_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/ele-utils */ "./src/utility/ele-utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom */ "./src/core/custom.js");
/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attribute */ "./src/core/attribute.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");







_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ElementNode, _base__WEBPACK_IMPORTED_MODULE_2__["VNode"]);
// element node
function ElementNode(name) {
    ElementNode.super.call(this, _base__WEBPACK_IMPORTED_MODULE_2__["VNodeType"].element, name);
    this.attributes = [];
    this.element = null;
    this.component = null;
    this.selfClosed = false;
    this.compileOptions = null;
    this.isComponent = false;
}

ElementNode.prototype.$pushAttribute = function (attr) {
    attr.ownerVElement = this;
    this.attributes.push(attr);
};

ElementNode.prototype.hasAttributes = function () {
    return this.attributes.length !== 0;
};

ElementNode.prototype.setAttribute = function (key, value) {
    var target, matches = this.attributes.filter(function (attr) {
        return attr.belongTo(key);
    });

    if (matches.length > 0) {
        target = matches[0];
        target.setValue(value);
    }
    else {
        target = new _attribute__WEBPACK_IMPORTED_MODULE_4__["AttrNode"](key, value);
        target.ownerVElement = this;
        target.compile(this.compileOptions);
    }

    this.attributes.push(attr);

    return target;
};

ElementNode.prototype.removeAttribute = function (key) {
    var target = [], self = this;

    if (key instanceof _attribute__WEBPACK_IMPORTED_MODULE_4__["AttrNode"]) {
        var index = this.attributes.indexOf(key);
        if (index !== -1) {
            target = self.attributes.splice(index, 1);
        }
    }
    else {
        this.attributes.filter(function (attr) {
            return attr.belongTo(key);
        }).forEach(function (match) {
            var index = self.attributes.indexOf(match);
            match.destroy();
            target = self.attributes.splice(index, 1);
        });
    }

    return target.length > 0 ? target[0] : null;
};

ElementNode.prototype.appendAttribute = function (attr) {
    if (attr.ownerVElement != null) {
        throw new Error("Current attribute is not new!");
    }

    attr.ownerVElement = this;
    attr.compile(this.compileOptions);
    this.attributes.push(attr);
    return attr;
};

ElementNode.prototype.getOuterTpl = function () {
    var attrTpl = '', childTpl = '';

    this.attributes.forEach(function (attr) {
        attrTpl += ' ';
        attrTpl += attr.getOuterTpl();
    });

    this.childNodes.forEach(function (child) {
        childTpl += child.getOuterTpl();
    });

    var tpl = '<' + this.nodeName + attrTpl + '>' + childTpl;

    if(!this.selfClosed){
        tpl += ('</' + this.nodeName + '>');
    }

    return tpl;
};

ElementNode.prototype.getInnerTpl = function () {
    var childTpl = '';

    this.childNodes.forEach(function (child) {
        childTpl += child.getOuterTpl();
    });

    return childTpl;
};

ElementNode.prototype.setOuterTpl = function (tpl) {
    var self = this;
    Object(_parser__WEBPACK_IMPORTED_MODULE_5__["parse"])(tpl).forEach(function (vnode) {
        vnode.parentNode = null;
        self.parentNode.insertBefore(self, vnode);
    });
    self.parentNode.removeChild(self);
};

ElementNode.prototype.setInnerTpl = function (tpl) {
    var self = this;
    this.clearChildNodes();
    Object(_parser__WEBPACK_IMPORTED_MODULE_5__["parse"])(tpl).forEach(function (vnode) {
        vnode.parentNode = null;
        self.appendChild(vnode);
    });
};

ElementNode.prototype.getDirective = function (key) {
    var result = [];

    this.attributes.map(function (attr) {
        return attr.directives();
    }).forEach(function (item) {
        result = result.concat(item);
    });

    return result.filter(function (item) {
        return item.$$key === key;
    });
};

ElementNode.prototype.compile = function (options) {
    this.compileOptions = options;
    this.attributes.forEach(function (attr) {
        attr.compile(options);
    });
    this.isComponent = options.containsComponent(this.nodeName);
    if (!this.isComponent) {
        this.childNodes.forEach(function (child) {
            child.compile(options);
        });
    }
};

ElementNode.prototype.directives = function () {
    var result = [];

    this.attributes.map(function (attr) {
        return attr.directives();
    }).forEach(function (item) {
        result = result.concat(item);
    });

    if(this.component == null){
        this.childNodes.map(function (child) {
            return child.directives();
        }).forEach(function (item) {
            result = result.concat(item);
        });
    }

    return result;
};

ElementNode.prototype.link = function (scope) {
    var self = this;

    self.scope = scope;
    self.element = document.createElement(self.nodeName);

    if (this.isComponent) {
        this.component = scope.$createComponent(this.nodeName);
        this.component.$bindVNode(this);
        self.attributes.forEach(function (attr) {
            attr.link(scope, self.element, self.component);
        });
        self.component.$mount(self.element);
    }
    else {
        this.attributes.forEach(function (attr) {
            attr.link(scope, self.element);
        });
        self.childNodes.forEach(function (child) {
            self.element.appendChild(child.link(scope));
        });
    }

    return self.element;
};

ElementNode.prototype.afterLink = function () {
    this.attributes.forEach(function (attr) {
        attr.afterLink();
    });

    if (this.component == null) {
        this.childNodes.forEach(function (child) {
            child.afterLink();
        });
    }
};

ElementNode.prototype.detect = function () {
    this.attributes.forEach(function (attr) {
        attr.detect();
    });
    if (this.component == null) {
        this.childNodes.forEach(function (child) {
            child.detect();
        });
    }
};

ElementNode.prototype.dispose = function (isFromComponent) {
    if (this.component == null) {
        this.childNodes.forEach(function (child) {
            child.destroy();
        });
    }
    else if(isFromComponent){
        this.component = null;
    }

    this.attributes.forEach(function (attr) {
        attr.destroy();
    });

    this.attributes.length = 0;
    this.removeDomElement();
    this.compileOptions = null;
    this.$destroy();
};

ElementNode.prototype.destroy = function () {
    if(this.component != null) {
        this.component.$dispose(true);
        this.component = null;
    }

    this.dispose();
};

ElementNode.prototype.getDomElement = function () {
    return this.element;
};

ElementNode.prototype.removeDomElement = function () {
    if(this.element != null){
        _utility_ele_utils__WEBPACK_IMPORTED_MODULE_1__["removeNode"](this.element);
    }
};

ElementNode.prototype.createElement = function(name){
    return new ElementNode(name);
};

ElementNode.prototype.createAttr = function (name) {
    return new _attribute__WEBPACK_IMPORTED_MODULE_4__["AttrNode"](name);
};

ElementNode.prototype.createCustom = function (name, linker) {
    return new _custom__WEBPACK_IMPORTED_MODULE_3__["CustomNode"](name, linker);
};



/***/ }),

/***/ "./src/core/fragment.js":
/*!******************************!*\
  !*** ./src/core/fragment.js ***!
  \******************************/
/*! exports provided: DocumentFragmentNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFragmentNode", function() { return DocumentFragmentNode; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/core/base.js");



_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](DocumentFragmentNode, _base__WEBPACK_IMPORTED_MODULE_1__["VNode"]);
// document fragment node
function DocumentFragmentNode() {
    DocumentFragmentNode.super.call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].documentFragment, '#document-fragment');
}




/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! exports provided: VNodeType, VNode, AttrNode, CDataSectionNode, CommentNode, CustomNode, DocumentTypeNode, DocumentNode, ElementNode, DocumentFragmentNode, TextNode, Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VNodeType", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VNode", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["VNode"]; });

/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attribute */ "./src/core/attribute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttrNode", function() { return _attribute__WEBPACK_IMPORTED_MODULE_1__["AttrNode"]; });

/* harmony import */ var _cdatasection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cdatasection */ "./src/core/cdatasection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CDataSectionNode", function() { return _cdatasection__WEBPACK_IMPORTED_MODULE_2__["CDataSectionNode"]; });

/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment */ "./src/core/comment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentNode", function() { return _comment__WEBPACK_IMPORTED_MODULE_3__["CommentNode"]; });

/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom */ "./src/core/custom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomNode", function() { return _custom__WEBPACK_IMPORTED_MODULE_4__["CustomNode"]; });

/* harmony import */ var _doctype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doctype */ "./src/core/doctype.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentTypeNode", function() { return _doctype__WEBPACK_IMPORTED_MODULE_5__["DocumentTypeNode"]; });

/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./document */ "./src/core/document.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentNode", function() { return _document__WEBPACK_IMPORTED_MODULE_6__["DocumentNode"]; });

/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./element */ "./src/core/element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementNode", function() { return _element__WEBPACK_IMPORTED_MODULE_7__["ElementNode"]; });

/* harmony import */ var _fragment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fragment */ "./src/core/fragment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentFragmentNode", function() { return _fragment__WEBPACK_IMPORTED_MODULE_8__["DocumentFragmentNode"]; });

/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./text */ "./src/core/text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextNode", function() { return _text__WEBPACK_IMPORTED_MODULE_9__["TextNode"]; });

/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./binding */ "./src/core/binding.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return _binding__WEBPACK_IMPORTED_MODULE_10__["Binding"]; });














/***/ }),

/***/ "./src/core/text.js":
/*!**************************!*\
  !*** ./src/core/text.js ***!
  \**************************/
/*! exports provided: TextNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextNode", function() { return TextNode; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _utility_ele_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/ele-utils */ "./src/utility/ele-utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binding */ "./src/core/binding.js");





_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](TextNode, _base__WEBPACK_IMPORTED_MODULE_2__["VNode"]);
// text node
function TextNode() {
    TextNode.super.call(this, _base__WEBPACK_IMPORTED_MODULE_2__["VNodeType"].text, '#text');
    this.binding = new _binding__WEBPACK_IMPORTED_MODULE_3__["Binding"]();
    this.element = null;
}

TextNode.prototype.compile = function () {
    this.binding.bind(this.nodeValue);
};

TextNode.prototype.link = function (scope) {
    var self = this;

    this.binding.setScope(scope);

    this.binding.watchProps(function(){
        self.detect();
    });

    return this.render(this.binding.compute());
};

TextNode.prototype.hasChange = function () {
    return this.binding.detect();
};

TextNode.prototype.update = function () {
    _utility_ele_utils__WEBPACK_IMPORTED_MODULE_1__["replaceNode"](this.element, this.render(this.binding.value));
};

TextNode.prototype.render = function (value) {
    this.element = document.createTextNode(value);
    return this.element;
};

TextNode.prototype.getOuterTpl = function () {
    return this.nodeValue;
};

TextNode.prototype.getInnerTpl = function () {
    return this.nodeValue;
};

TextNode.prototype.destroy = function () {
    this.binding.destroy();
    this.binding = null;
    this.element = null;
    this.$destroy();
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: isMessenger, namespace, injector, component, directive, filter, service, isComponent, isDirective, isFilter, isService, bootstrap, compile, compute, parse, forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMessenger", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isMessenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["some"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["lowercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["uppercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBlankObject", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isBlankObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isSame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["containsStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["hasProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["getProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["setProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["getChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["clearChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["replaceNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["removeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["removeNodeBetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["insertNodeAfter"]; });

/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["namespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "service", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["service"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["isDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFilter", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["isFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isService", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["isService"]; });

/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser */ "./src/parser/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["bootstrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["compile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compute", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["compute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["parse"]; });

/* harmony import */ var _inner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inner */ "./src/inner/index.js");
/* empty/unused harmony star reexport */




/***/ }),

/***/ "./src/inner/directives.js":
/*!*********************************!*\
  !*** ./src/inner/directives.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");




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

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).directive('n-selected', makeAttrSetter('selected'));

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).directive('n-disabled', makeAttrSetter('disabled'));

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).directive('n-checked', makeAttrSetter('checked'));

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).directive('n-readonly', makeAttrSetter('readonly'));

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).directive('n-style', function (ele, binding) {
    var value = binding.compute();

    if (!value) {
        ele.removeAttribute('style');
    }

    if (_utility__WEBPACK_IMPORTED_MODULE_2__["isString"](value)) {
        ele.style = value;
    }
    else if (_utility__WEBPACK_IMPORTED_MODULE_2__["isObject"](value)) {
        _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](value, function (key, value) {
            ele.style[key] = value;
        });
        binding.scope.$watchProp(value, /\w+/i, function () {
            _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](value, function (key, value) {
                ele.style[key] = value;
            });
        });
    }
    else {
        throw new Error('Parameter of n-style should be string or object');
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).directive('n-show', function (ele, binding) {
    ele.style.display = binding.compute() ? 'initial' : 'none';
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).directive('n-hide', function (el, binding) {
    el.style.display = binding.compute() ? 'none' : 'initial';
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).directive('n-if', {
    props: {
        comment: null
    },
    onInsert: function (ele, binding) {
        this.comment = document.createComment('n-if');
        if (!binding.compute()) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
        }
    },
    onUpdate: function (ele, binding) {
        if (binding.compute()) {
            if (ele.parentNode == null) {
                _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.comment, ele);
            }
        }
        else {
            if (ele.parentNode != null) {
                _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
            }
        }
    },
    onDestroy: function () {
        this.comment = null;
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).directive('n-switch', {
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

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).directive('n-switch-default', {
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
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
        }
    },
    onDetect: function (ele, binding) {
        if (this.isMatch()) {
            if (ele.parentNode == null) {
                _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.comment, ele);
            }
        }
        else {
            if (ele.parentNode != null) {
                _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
            }
        }
    },
    onDestroy: function () {
        this.attrNode = null;
        this.comment = null;
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).directive('n-switch-when', {
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
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
        }
    },
    onDetect: function (ele, binding) {
        this.updateIsMatch(ele, binding);

        if (this.isMatch) {
            if (ele.parentNode == null) {
                _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.comment, ele);
            }
        }
        else {
            if (ele.parentNode != null) {
                _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
            }
        }
    },
    onDestroy: function () {
        this.attrNode = null;
        this.comment = null;
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).directive('n-bind', function(ele, binding){
    ele.innerText = binding.compute();
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).directive('n-model', {
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
            if (_utility__WEBPACK_IMPORTED_MODULE_2__["isMessenger"](com.change)) {
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

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).directive('n-repeat', {
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
            setCurrentItems(Object(_parser__WEBPACK_IMPORTED_MODULE_1__["compute"])(itemsExp, currentScope));
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
            var items = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["compute"])(itemsExp, currentScope);

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

            return Object(_view__WEBPACK_IMPORTED_MODULE_0__["component"])('n-repeat-item', repeatItemConfig);
        }

        function setCurrentItems(value) {
            if (_utility__WEBPACK_IMPORTED_MODULE_2__["isArray"](value)) {
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

            _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](items, function (key, item) {
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
            _utility__WEBPACK_IMPORTED_MODULE_2__["removeNodeBetween"](start, end);
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

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).directive('n-embed', {
    onCompile: function (attrNode, options) {
        var embedTpl = options.getEmbedTpl();
        if(embedTpl){
            attrNode.ownerVElement.setInnerTpl(embedTpl);
        }
    }
});

/***/ }),

/***/ "./src/inner/index.js":
/*!****************************!*\
  !*** ./src/inner/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/inner/services.js");
/* empty/unused harmony star reexport *//* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives */ "./src/inner/directives.js");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "./src/inner/services.js":
/*!*******************************!*\
  !*** ./src/inner/services.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



var sine = 'sine';

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(sine).service('$templateCache', {
    props: {
        tplCache: {},
        promiseCache: {}
    },
    methods: {
        getTplByUrl: function (url) {
            var self = this;

            if (this.tplCache[url]) {
                return new Promise(function (resolve) {
                    resolve(self.tplCache[url]);
                });
            }

            if (!this.promiseCache[url]) {
                this.promiseCache[url] = axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url).then(function (res) {
                    self.promiseCache[url] = null;
                    self.tplCache[url] = res.data || '';
                    return self.tplCache[url];
                });
            }

            return this.promiseCache[url];
        }
    }
});

/***/ }),

/***/ "./src/parser/html-lexer.js":
/*!**********************************!*\
  !*** ./src/parser/html-lexer.js ***!
  \**********************************/
/*! exports provided: HtmlLexer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlLexer", function() { return HtmlLexer; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lexer */ "./src/parser/lexer.js");



_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](HtmlLexer, _lexer__WEBPACK_IMPORTED_MODULE_1__["Lexer"]);
function HtmlLexer(options) {
    HtmlLexer.super.call(this, options);
}

HtmlLexer.prototype.isValidIdentifierStart = function (ch) {
    return ('a' <= ch && ch <= 'z' ||
        'A' <= ch && ch <= 'Z' ||
        '_' === ch || ch === '$' ||
        ch === '@' || ch === ':' || ch === '*');
};

HtmlLexer.prototype.isValidIdentifierContinue = function (ch, cp) {
    return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch) || ch === '-' || ch === '.';
};

HtmlLexer.prototype.expectString = function (str) {
    var num = str.length;
    return (this.index + num <= this.text.length) ? (str === this.text.substr(this.index, num)) : false;
};

// html comment "<!--comment-->"
HtmlLexer.prototype.readComment = function (begin, end) {
    var start = this.index;
    this.index += begin.length;
    var string = '';
    var rawString = begin;
    while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        rawString += ch;
        if (this.expectString(end)) {
            rawString += end;
            this.index += end.length;
            this.tokens.push({
                index: start,
                text: rawString,
                comment: true,
                value: string
            });
            return;
        } else {
            string += ch;
        }
        this.index++;
    }
    this.throwError('Unterminated comment', start);
};

// html text
HtmlLexer.prototype.readText = function () {
    var start = this.index;
    var string = '';
    while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        var ch2 = this.peek();
        if ((ch === '<' && (this.isIdentifierStart(ch2)) || ch2 === '/') || this.expectString('<!--')) {
            break;
        }
        string += ch;
        this.index++;
    }
    this.tokens.push({
        index: start,
        text: string,
        textTag: true
    });
};

// html tag
HtmlLexer.prototype.readTag = function (begin, end, closing, doctype) {
    this.tokens.push({ index: this.index, text: begin, tag: true, closing: closing, begin: true, doctype: doctype });
    this.index += begin.length;
    this.readIdent();

    while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);

        if (!closing) {
            var ch2 = this.peek();
            var str = ch + ch2;
            if (str === '/' + end) {
                this.tokens.push({ index: this.index, text: str, tag: true, closing: true, end: true });
                this.index += str.length;
                break;
            }
        }

        if (ch === end) {
            this.tokens.push({
                index: this.index,
                text: end,
                tag: true,
                closing: !!doctype ? true : closing,
                end: true
            });
            this.index += end.length;
            break;
        }

        if (this.isIdentifierStart(this.peekMultichar())) {
            this.readIdent();
        }
        else if (ch === '"' || ch === '\'') {
            this.readString(ch);
        }
        else if (this.isWhitespace(ch)) {
            this.index++;
        }
        else if (ch === '=') {
            this.tokens.push({ index: this.index, text: '=', equal: true });
            this.index++;
        }
        else {
            this.throwError('Unexpected next character ', this.index, this.index + 1);
        }
    }
};

HtmlLexer.prototype.lex = function (text) {
    this.text = text;
    this.index = 0;
    this.tokens = [];

    var allowDocType = !!this.options.allowDocType;
    while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        var ch2 = this.peek();
        var ch3 = this.peek(2);
        if (this.expectString('<!--')) {
            this.readComment('<!--', '-->');
        }
        else if (ch === '<' && this.isIdentifierStart(ch2)) {
            this.readTag('<', '>', false);
        }
        else if (this.expectString('</') && this.isIdentifierStart(ch3)) {
            this.readTag('</', '>', true);
        }
        else if (this.expectString('<!DOCTYPE')) {
            if (allowDocType) {
                this.readTag('<!', '>', true, true);
            }
            else {
                this.throwError('DOCTYPE is not allowed', this.index, this.index + 1);
            }
        }
        else {
            this.readText();
        }
    }
    return this.tokens;
};



/***/ }),

/***/ "./src/parser/html-parser.js":
/*!***********************************!*\
  !*** ./src/parser/html-parser.js ***!
  \***********************************/
/*! exports provided: HtmlParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlParser", function() { return HtmlParser; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./src/parser/parser.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/core/index.js");




_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](HtmlParser, _parser__WEBPACK_IMPORTED_MODULE_1__["Parser"]);
function HtmlParser(lexer, options) {
    HtmlParser.super.call(this, lexer, options);
}

HtmlParser.prototype.parse = function (text) {
    this.index = 0;
    this.text = text;
    this.tokens = this.lexer.lex(text);

    var fargment = new _core__WEBPACK_IMPORTED_MODULE_2__["DocumentFragmentNode"]();
    var doctype, allowDocType = !!this.options.allowDocType;
    while (this.index < this.tokens.length) {
        var token = this.current();

        if (token.doctype) {
            if (allowDocType) {
                if (!doctype) {
                    doctype = this.doctype();
                    fargment.$pushChild(doctype);
                }
                else {
                    this.throwError("DOCTYPE only allow one", token);
                }
            }
            else {
                this.throwError("DOCTYPE is not allowed", token);
            }
        }
        else if (token.comment) {
            var comment = new _core__WEBPACK_IMPORTED_MODULE_2__["CommentNode"]();
            comment.nodeValue = token.text;
            fargment.$pushChild(comment);
            this.next();
        }
        else if (token.textTag) {
            var text = new _core__WEBPACK_IMPORTED_MODULE_2__["TextNode"]();
            text.nodeValue = token.text;
            fargment.$pushChild(text);
            this.next();
        }
        else if (token.tag && token.begin) {
            fargment.$pushChild(this.element());
        }
        else {
            this.throwError("impossible", token);
        }
    }

    fargment.$buildSibling();

    return fargment.childNodes;
};

HtmlParser.prototype.doctype = function () {
    this.next();
    var docType = new _core__WEBPACK_IMPORTED_MODULE_2__["DocumentTypeNode"]();
    var token = this.current();

    if (token.identifier) {
        docType.nodeValue = token.text;
    }
    else {
        this.throwError(" Unexpected ", token);
    }

    this.attrs(docType).forEach(function (attr) {
        docType.childNodes.push(attr);
    });

    token = this.current();

    if (token.tag && token.end && token.closing) {
        this.next();
    }
    else {
        this.throwError(" Unexpected ", token);
    }

    return docType;
};

HtmlParser.prototype.element = function (p) {
    this.next();
    var ele = new _core__WEBPACK_IMPORTED_MODULE_2__["ElementNode"]();
    var token = this.current();

    if (token.identifier) {
        ele.nodeName = token.text;
        this.next();
    }
    else {
        this.throwError(" Unexpected ", token);
    }

    this.attrs(ele).forEach(function (attr) {
        ele.$pushAttribute(attr);
    });

    token = this.current();

    if (token.tag && token.end) {
        this.next();
        if (ele.nodeName === 'input') {
            return ele;
        }
        if (!token.closing) {
            this.childElements(ele).forEach(function (child) {
                ele.$pushChild(child);
            });
        }
    }
    else {
        this.throwError(" Unexpected ", token);
    }

    token = this.current();
    if (token.tag && token.begin && token.closing) {
        this.next();
        token = this.current();
        if (token.identifier) {
            if (ele.nodeName === token.text) {
                this.next();
                token = this.current();
                if (token.tag && token.end && token.closing) {
                    this.next();
                }
                else {
                    this.throwError(" Unexpected ", token);
                }
            }
            else {
                this.throwError(" Unexpected ", token);
            }
        }
        else {
            this.throwError(" Unexpected ", token);
        }
    }
    else {
        this.throwError(" Unexpected ", token);
    }

    return ele;
};

HtmlParser.prototype.childElements = function (p) {
    var eles = [];

    while (this.index < this.tokens.length) {
        var token = this.current();

        if (token.tag && token.closing) {
            break;
        }
        else if (token.comment) {
            var comment = new _core__WEBPACK_IMPORTED_MODULE_2__["CommentNode"]();
            comment.nodeValue = token.text;
            eles.push(comment);
            this.next();
        }
        else if (token.textTag) {
            var text = new _core__WEBPACK_IMPORTED_MODULE_2__["TextNode"]();
            text.nodeValue = token.text;
            eles.push(text);
            this.next();
        }
        else if (token.tag && token.begin) {
            eles.push(this.element(p));
        }
        else {
            this.throwError(" Unexpected ", token);
        }
    }

    return eles;
};

HtmlParser.prototype.attrs = function (p) {
    var attrs = [];

    while (this.index < this.tokens.length) {
        var token = this.current();

        if (token.tag && token.end) {
            break;
        }

        var attr = new _core__WEBPACK_IMPORTED_MODULE_2__["AttrNode"]();

        if (token.identifier) {
            attr.nodeName = token.text;
            attr.orgNodeName = token.text;
            this.next();
            token = this.current();
            if (token.equal) {
                this.next();
                token = this.current();
                if (token.constant) {
                    attr.nodeValue = token.value;
                    this.next();
                }
                else {
                    this.throwError(" Unexpected ", token);
                }
            }
        }

        attrs.push(attr);
    }

    return attrs;
};

HtmlParser.prototype.current = function () {
    if (this.index < this.tokens.length) {
        return this.tokens[this.index];
    }
    return {};
};

HtmlParser.prototype.next = function () {
    this.index++;
};



/***/ }),

/***/ "./src/parser/index.js":
/*!*****************************!*\
  !*** ./src/parser/index.js ***!
  \*****************************/
/*! exports provided: bootstrap, compile, compute, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compute", function() { return compute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lexer */ "./src/parser/lexer.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser */ "./src/parser/parser.js");
/* harmony import */ var _html_lexer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html-lexer */ "./src/parser/html-lexer.js");
/* harmony import */ var _html_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html-parser */ "./src/parser/html-parser.js");







var parseOptions = {
    isIdentifierContinue: false,
    isIdentifierStart: false,
    literals: {
        false: false,
        null: null,
        true: true,
        undefined: undefined
    }
};

function bootstrap(component, idOrElement) {
    var element, elementId;

    if (_view__WEBPACK_IMPORTED_MODULE_1__["injector"].containsComponent(component)) {
        _view__WEBPACK_IMPORTED_MODULE_1__["injector"].createComponent(component).$mount(idOrElement);
    }
    else {
        throw new Error('component' + component + 'is not defined');
    }
}

function parse(html) {
    var lexer = new _html_lexer__WEBPACK_IMPORTED_MODULE_4__["HtmlLexer"](parseOptions);
    var parser = new _html_parser__WEBPACK_IMPORTED_MODULE_5__["HtmlParser"](lexer, parseOptions);
    return parser.parse(html);
}

function compile(html, options) {
    var defaults = {
            getEmbedTpl: function () {
                return '';
            },
            containsComponent: function () {
                return false;
            },
            createComponent: function () {
                return null;
            },
            containsDirective: function () {
                return false;
            },
            createDirective: function () {
                return null;
            }
        },
        settings = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["merge"](defaults, options),
        astNodes = parse(html);

    astNodes.forEach(function (astNode) {
        astNode.compile(settings);
    });

    astNodes.forEach(function (astNode) {
        astNode.directives().forEach(function (directive) {
            directive.$compile(settings);
        });
    });

    return function (scope) {
        var fragment = document.createDocumentFragment();

        scope.$$vnodes = astNodes;

        if (!Object(_view__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(scope)) {
            scope.$$childDirectives = [];
            scope.$$childComponents = [];

            scope.$detect = function () {
                astNodes.forEach(function (astNode) {
                    astNode.detect();
                });
            };

            scope.$destroy = function () {
                astNodes.forEach(function (astNode) {
                    astNode.destroy();
                });
            };
        }

        astNodes.forEach(function (node) {
            fragment.appendChild(node.link(scope));
        });

        astNodes.forEach(function (item) {
            item.afterLink();
        });

        return fragment;
    };
}

function compute(exp, scope, options) {
    if (exp == null) {
        return;
    }
    exp = exp.trim();
    if (exp.length === 0) {
        return;
    }
    exp = exp.replace('&gt;', '>').replace('&lt;', '<');
    var lexer = new _lexer__WEBPACK_IMPORTED_MODULE_2__["Lexer"](parseOptions);
    var parser = new _parser__WEBPACK_IMPORTED_MODULE_3__["Parser"](lexer, parseOptions);
    options = options || {};
    options.createFilter = function (name) {
        return _view__WEBPACK_IMPORTED_MODULE_1__["injector"].createFilter(name);
    };
    return parser.parse(exp).compile(scope, options);
}



/***/ }),

/***/ "./src/parser/lexer.js":
/*!*****************************!*\
  !*** ./src/parser/lexer.js ***!
  \*****************************/
/*! exports provided: Lexer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lexer", function() { return Lexer; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");


var OPERATORS = {};
var operatorText = '+ - * / % === !== == != < > <= >= && || ! = |';
var ESCAPE = { 'n': '\n', 'f': '\f', 'r': '\r', 't': '\t', 'v': '\v', '\'': '\'', '"': '"' };

operatorText.split(' ').forEach(function (operator) {
    OPERATORS[operator] = true;
});

function Lexer(options) {
    this.options = options;
}

Lexer.prototype.lex = function (text) {
    this.text = text;
    this.index = 0;
    this.tokens = [];

    while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        if (ch === '"' || ch === '\'') {
            this.readString(ch);
        } else if (this.isNumber(ch) || ch === '.' && this.isNumber(this.peek())) {
            this.readNumber();
        } else if (this.isIdentifierStart(this.peekMultichar())) {
            this.readIdent();
        } else if (this.is(ch, '(){}[].,;:?')) {
            this.tokens.push({ index: this.index, text: ch });
            this.index++;
        } else if (this.isWhitespace(ch)) {
            this.index++;
        } else {
            var ch2 = ch + this.peek();
            var ch3 = ch2 + this.peek(2);
            var op1 = OPERATORS[ch];
            var op2 = OPERATORS[ch2];
            var op3 = OPERATORS[ch3];
            if (op1 || op2 || op3) {
                var token = op3 ? ch3 : (op2 ? ch2 : ch);
                this.tokens.push({ index: this.index, text: token, operator: true });
                this.index += token.length;
            } else {
                this.throwError('Unexpected next character ', this.index, this.index + 1);
            }
        }
    }
    return this.tokens;
};

Lexer.prototype.is = function (ch, chars) {
    return chars.indexOf(ch) !== -1;
};

Lexer.prototype.peek = function (i) {
    var num = i || 1;
    return (this.index + num < this.text.length) ? this.text.charAt(this.index + num) : false;
};

Lexer.prototype.isNumber = function (ch) {
    return ('0' <= ch && ch <= '9') && typeof ch === 'string';
};

Lexer.prototype.isWhitespace = function (ch) {
    // IE treats non-breaking space as \u00A0
    return (ch === ' ' || ch === '\r' || ch === '\t' ||
        ch === '\n' || ch === '\v' || ch === '\u00A0');
};

Lexer.prototype.isIdentifierStart = function (ch) {
    return this.options.isIdentifierStart ?
        this.options.isIdentifierStart(ch, this.codePointAt(ch)) :
        this.isValidIdentifierStart(ch);
};

Lexer.prototype.isValidIdentifierStart = function (ch) {
    return ('a' <= ch && ch <= 'z' ||
        'A' <= ch && ch <= 'Z' ||
        '_' === ch || ch === '$');
};

Lexer.prototype.isIdentifierContinue = function (ch) {
    return this.options.isIdentifierContinue ?
        this.options.isIdentifierContinue(ch, this.codePointAt(ch)) :
        this.isValidIdentifierContinue(ch);
};

Lexer.prototype.isValidIdentifierContinue = function (ch, cp) {
    return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch);
};

Lexer.prototype.codePointAt = function (ch) {
    if (ch.length === 1) {
        return ch.charCodeAt(0);
    }
    // eslint-disable-next-line no-bitwise
    return (ch.charCodeAt(0) << 10) + ch.charCodeAt(1) - 0x35FDC00;
};

Lexer.prototype.peekMultichar = function () {
    var ch = this.text.charAt(this.index);
    var peek = this.peek();
    if (!peek) {
        return ch;
    }
    var cp1 = ch.charCodeAt(0);
    var cp2 = peek.charCodeAt(0);
    if (cp1 >= 0xD800 && cp1 <= 0xDBFF && cp2 >= 0xDC00 && cp2 <= 0xDFFF) {
        return ch + peek;
    }
    return ch;
};

Lexer.prototype.isExpOperator = function (ch) {
    return (ch === '-' || ch === '+' || this.isNumber(ch));
};

Lexer.prototype.throwError = function (error, start, end) {
    end = end || this.index;
    var colStr = (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isDefined"](start) ? 's ' + start + '-' + this.index + ' [' + this.text.substring(start, end) + ']' : ' ' + end);
    throw new Error('Lexer Error: ' + error + ' at column' + colStr + ' in expression [' + this.text + '].');
};

Lexer.prototype.readNumber = function () {
    var number = '';
    var start = this.index;
    while (this.index < this.text.length) {
        var ch = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](this.text.charAt(this.index));
        if (ch === '.' || this.isNumber(ch)) {
            number += ch;
        } else {
            var peekCh = this.peek();
            if (ch === 'e' && this.isExpOperator(peekCh)) {
                number += ch;
            } else if (this.isExpOperator(ch) &&
                peekCh && this.isNumber(peekCh) &&
                number.charAt(number.length - 1) === 'e') {
                number += ch;
            } else if (this.isExpOperator(ch) &&
                (!peekCh || !this.isNumber(peekCh)) &&
                number.charAt(number.length - 1) === 'e') {
                this.throwError('Invalid exponent');
            } else {
                break;
            }
        }
        this.index++;
    }
    this.tokens.push({
        index: start,
        text: number,
        constant: true,
        value: Number(number)
    });
};

Lexer.prototype.readIdent = function () {
    var start = this.index;
    this.index += this.peekMultichar().length;
    while (this.index < this.text.length) {
        var ch = this.peekMultichar();
        if (!this.isIdentifierContinue(ch)) {
            break;
        }
        this.index += ch.length;
    }
    this.tokens.push({
        index: start,
        text: this.text.slice(start, this.index),
        identifier: true
    });
};

Lexer.prototype.readString = function (quote) {
    var start = this.index;
    this.index++;
    var string = '';
    var rawString = quote;
    var escape = false;
    while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        rawString += ch;
        if (escape) {
            if (ch === 'u') {
                var hex = this.text.substring(this.index + 1, this.index + 5);
                if (!hex.match(/[\da-f]{4}/i)) {
                    this.throwError('Invalid unicode escape [\\u' + hex + ']');
                }
                this.index += 4;
                string += String.fromCharCode(parseInt(hex, 16));
            } else {
                var rep = ESCAPE[ch];
                string = string + (rep || ch);
            }
            escape = false;
        } else if (ch === '\\') {
            escape = true;
        } else if (ch === quote) {
            this.index++;
            this.tokens.push({
                index: start,
                text: rawString,
                constant: true,
                value: string
            });
            return;
        } else {
            string += ch;
        }
        this.index++;
    }
    this.throwError('Unterminated quote', start);
};



/***/ }),

/***/ "./src/parser/parser.js":
/*!******************************!*\
  !*** ./src/parser/parser.js ***!
  \******************************/
/*! exports provided: Parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "./src/view/index.js");



var AST = {};
AST.Program = 'Program';
AST.ExpressionStatement = 'ExpressionStatement';
AST.AssignmentExpression = 'AssignmentExpression';
AST.ConditionalExpression = 'ConditionalExpression';
AST.LogicalExpression = 'LogicalExpression';
AST.BinaryExpression = 'BinaryExpression';
AST.UnaryExpression = 'UnaryExpression';
AST.CallExpression = 'CallExpression';
AST.MemberExpression = 'MemberExpression';
AST.Identifier = 'Identifier';
AST.Literal = 'Literal';
AST.ArrayExpression = 'ArrayExpression';
AST.Property = 'Property';
AST.ObjectExpression = 'ObjectExpression';

function AstNode(type) {
    this.type = type;
    this.childNodes = [];
}

AstNode.prototype.appendChild = function (child) {
    this.childNodes.push(child);
};

AstNode.prototype.compile = function (scope, options, internals) {
    return this.childNodes.map(function (child) {
        return child.compile(scope, options || {}, internals);
    });
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ProgramNode, AstNode);
function ProgramNode() {
    ProgramNode.super.call(this, AST.Program);
}

ProgramNode.prototype.compile = function (scope, options) {
    return this.childNodes[0].compile(scope, options || {});
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ExpressionStatementNode, AstNode);
function ExpressionStatementNode() {
    ExpressionStatementNode.super.call(this, AST.ExpressionStatement);
}

ExpressionStatementNode.prototype.compile = function (scope, options, internals) {
    return this.childNodes[0].compile(scope, options || {}, internals);
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](AssignmentExpressionNode, AstNode);
function AssignmentExpressionNode(left, right, operator) {
    AssignmentExpressionNode.super.call(this, AST.AssignmentExpression);
    this.left = left;
    this.right = right;
    this.operator = operator;
}

AssignmentExpressionNode.prototype.compile = function (scope, options) {
    var target = this.left.compile(scope, options, { assignmentLeft: true });
    var value = this.right.compile(scope, options);
    target.obj[target.prop] = value;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ConditionalExpressionNode, AstNode);
function ConditionalExpressionNode(test, alternate, consequent) {
    ConditionalExpressionNode.super.call(this, AST.ConditionalExpression);
    this.test = test;
    this.alternate = alternate;
    this.consequent = consequent;
}

ConditionalExpressionNode.prototype.compile = function (scope, options) {
    if (this.test.compile(scope)) {
        return this.alternate.compile(scope, options);
    }
    return this.consequent.compile(scope, options);
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](LogicalExpressionNode, AstNode);
function LogicalExpressionNode(operator, left, right) {
    LogicalExpressionNode.super.call(this, AST.LogicalExpression);
    this.operator = operator;
    this.left = left;
    this.right = right;
}

LogicalExpressionNode.prototype.compile = function (scope, options) {
    var result;
    var leftValue = this.left.compile(scope, options);
    var rightValue = this.right.compile(scope, options);

    switch (this.operator) {
        case '&&':
            result = leftValue && rightValue;
            break;
        case '||':
            result = leftValue && rightValue;
            break;
    }

    return result;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](BinaryExpressionNode, AstNode);
function BinaryExpressionNode(operator, left, right) {
    BinaryExpressionNode.super.call(this, AST.BinaryExpression);
    this.operator = operator;
    this.left = left;
    this.right = right;
}

BinaryExpressionNode.prototype.compile = function (scope, options) {
    var result;
    var leftValue = this.left.compile(scope, options);
    var rightValue = this.right.compile(scope, options);

    // '+', '-', '*', '/', '%', '<', '>', '<=', '>=', '==', '!=', '===', '!=='
    switch (this.operator) {
        case '+':
            result = leftValue + rightValue;
            break;
        case '-':
            result = leftValue - rightValue;
            break;
        case '*':
            result = leftValue * rightValue;
            break;
        case '/':
            result = leftValue / rightValue;
            break;
        case '%':
            result = leftValue % rightValue;
            break;
        case '<':
            result = leftValue < rightValue;
            break;
        case '>':
            result = leftValue > rightValue;
            break;
        case '<=':
            result = leftValue <= rightValue;
            break;
        case '>=':
            result = leftValue >= rightValue;
            break;
        case '==':
            result = leftValue == rightValue;
            break;
        case '!=':
            result = leftValue != rightValue;
            break;
        case '===':
            result = leftValue === rightValue;
            break;
        case '!==':
            result = leftValue !== rightValue;
            break;
    }

    return result;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](UnaryExpressionNode, AstNode);
function UnaryExpressionNode(operator, arg) {
    UnaryExpressionNode.super.call(this, AST.UnaryExpression);
    this.prefix = true;
    this.operator = operator;
    this.arg = arg;
}

UnaryExpressionNode.prototype.compile = function (scope, options) {
    var result, value = this.arg.compile(scope, options);

    switch (this.operator) {
        case '+':
            result = value;
            break;
        case '-':
            result = -value;
            break;
        case '!':
            result = !value;
            break;
    }

    return result;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](LiteralNode, AstNode);
function LiteralNode(value) {
    LiteralNode.super.call(this, AST.Literal);
    this.value = value;
}

LiteralNode.prototype.compile = function () {
    return this.value;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](CallExpressionNode, AstNode);
function CallExpressionNode(callee, args) {
    CallExpressionNode.super.call(this, AST.CallExpression);
    this.callee = callee;
    this.args = args;
    this.filter = false;
}

CallExpressionNode.prototype.compile = function (scope, options) {
    var context = this.callee.compile(scope, options, { callee: true });
    var argValues = this.args.map(function (arg) {
        return arg.compile(scope, options);
    });

    if (this.filter) {
        var filterIns = options.createFilter(context.prop);
        if (Object(_view__WEBPACK_IMPORTED_MODULE_1__["isFilter"])(filterIns)) {
            return filterIns.$execute.apply(filterIns, argValues);
        }
        throw new Error('Filter "' + context.prop + '" is not defined');
    }
    else {
        var fn = context.obj[context.prop];
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](fn)) {
            return fn.apply(context.obj, argValues);
        }
        throw new Error(context.prop + ' is not a function');
    }
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](MemberExpressionNode, AstNode);
function MemberExpressionNode(object, property, computed) {
    MemberExpressionNode.super.call(this, AST.MemberExpression);
    this.object = object;
    this.property = property;
    this.computed = computed;
}

MemberExpressionNode.prototype.compile = function (scope, options, internals) {
    var obj = this.object.compile(scope, options, internals);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"](obj)) {
        return obj[this.property.compile(obj, options, internals)];
    }

    return this.property.compile(obj, options, internals);
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](IdentifierNode, AstNode);
function IdentifierNode(name) {
    IdentifierNode.super.call(this, AST.Identifier);
    this.name = name;
}

IdentifierNode.prototype.compile = function (scope, options, internals) {
    if (internals) {
        if (internals.assignmentLeft || internals.callee) {
            return {
                obj: scope,
                prop: this.name
            };
        }
        else if (internals.propertyKey) {
            return this.name;
        }
    }
    var result = scope[this.name];
    if (result == null && options.locals) {
        result = options.locals[this.name];
    }
    return result;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ArrayExpressionNode, AstNode);
function ArrayExpressionNode() {
    ArrayExpressionNode.super.call(this, AST.ArrayExpression);
}

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](PropertyNode, AstNode);
function PropertyNode() {
    PropertyNode.super.call(this, AST.Property);
    this.kind = 'init';
    this.key = null;
    this.value = null;
    this.computed = false;
}

PropertyNode.prototype.compile = function (scope, options) {
    return {
        key: this.key.compile(scope, options, { propertyKey: true }),
        value: this.value.compile(scope, options)
    };
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ObjectExpressionNode, AstNode);
function ObjectExpressionNode(properties) {
    ObjectExpressionNode.super.call(this, AST.ObjectExpression);
    this.properties = properties;
}

ObjectExpressionNode.prototype.compile = function (scope, options) {
    var result = {};

    this.properties.forEach(function (item) {
        var def = item.compile(scope, options);
        result[def.key] = def.value;
    });

    return result;
};

function isAssignable(ast) {
    return ast.type === AST.Identifier || ast.type === AST.MemberExpression;
}

function Parser(lexer, options) {
    this.lexer = lexer;
    this.options = options;
}

Parser.prototype.throwError = function (msg, token) {
    throw new Error('Syntax Error: Token \'' + token.text + '\'' + msg + ' at column ' + (token.index + 1) +
        ' of the expression [' + this.text + '] starting at [' + this.text.substring(token.index) + '].');
};

Parser.prototype.parse = function (text) {
    this.text = text;
    this.tokens = this.lexer.lex(text);

    var value = this.program();

    if (this.tokens.length !== 0) {
        this.throwError('is an unexpected token', this.tokens[0]);
    }

    return value;
};

Parser.prototype.program = function () {
    var program = new ProgramNode();
    while (true) {
        if (this.tokens.length > 0 && !this.peek('}', ')', ';', ']')) {
            program.appendChild(this.expressionStatement());
        }
        if (!this.expect(';')) {
            return program;
        }
    }
};

Parser.prototype.expressionStatement = function () {
    var exp = new ExpressionStatementNode();
    exp.appendChild(this.filterChain());
    return exp;
};

Parser.prototype.filterChain = function () {
    var left = this.expression();
    while (this.expect('|')) {
        left = this.filter(left);
    }
    return left;
};

Parser.prototype.expression = function () {
    return this.assignment();
};

Parser.prototype.assignment = function () {
    var result = this.ternary();
    if (this.expect('=')) {
        if (!isAssignable(result)) {
            throw new Error('Trying to assign a value to a non l-value');
        }

        result = new AssignmentExpressionNode(result, this.assignment(), '=');
    }
    return result;
};

Parser.prototype.ternary = function () {
    var test = this.logicalOR();
    var alternate;
    var consequent;
    if (this.expect('?')) {
        alternate = this.expression();
        if (this.consume(':')) {
            consequent = this.expression();
            return new ConditionalExpressionNode(test, alternate, consequent);
        }
    }
    return test;
};

Parser.prototype.logicalOR = function () {
    var left = this.logicalAND();
    while (this.expect('||')) {
        left = new LogicalExpressionNode('||', left, this.logicalAND());
    }
    return left;
};

Parser.prototype.logicalAND = function () {
    var left = this.equality();
    while (this.expect('&&')) {
        left = new LogicalExpressionNode('&&', left, this.equality());
    }
    return left;
};

Parser.prototype.equality = function () {
    var left = this.relational();
    var token;
    while ((token = this.expect('==', '!=', '===', '!=='))) {
        left = new BinaryExpressionNode(token.text, left, this.relational());
    }
    return left;
};

Parser.prototype.relational = function () {
    var left = this.additive();
    var token;
    while ((token = this.expect('<', '>', '<=', '>='))) {
        left = new BinaryExpressionNode(token.text, left, this.additive());
    }
    return left;
};

Parser.prototype.additive = function () {
    var left = this.multiplicative();
    var token;
    while ((token = this.expect('+', '-'))) {
        left = new BinaryExpressionNode(token.text, left, this.multiplicative());
    }
    return left;
};

Parser.prototype.multiplicative = function () {
    var left = this.unary();
    var token;
    while ((token = this.expect('*', '/', '%'))) {
        left = new BinaryExpressionNode(token.text, left, this.unary());
    }
    return left;
};

Parser.prototype.unary = function () {
    var token;
    if ((token = this.expect('+', '-', '!'))) {
        return new UnaryExpressionNode(token.text, this.unary());
    } else {
        return this.primary();
    }
};

Parser.prototype.primary = function () {
    var primary;
    if (this.expect('(')) {
        primary = this.filterChain();
        this.consume(')');
    } else if (this.expect('[')) {
        primary = this.arrayDeclaration();
    } else if (this.expect('{')) {
        primary = this.object();
    } else if (this.options.literals.hasOwnProperty(this.peek().text)) {
        primary = new LiteralNode(this.options.literals[this.consume().text]);
    } else if (this.peek().identifier) {
        primary = this.identifier();
    } else if (this.peek().constant) {
        primary = this.constant();
    } else {
        this.throwError('not a primary expression', this.peek());
    }

    var next;
    while ((next = this.expect('(', '[', '.'))) {
        if (next.text === '(') {
            primary = new CallExpressionNode(primary, this.parseArguments());
            this.consume(')');
        } else if (next.text === '[') {
            primary = new MemberExpressionNode(primary, this.expression(), true);
            this.consume(']');
        } else if (next.text === '.') {
            primary = new MemberExpressionNode(primary, this.identifier(), false);
        } else {
            this.throwError('IMPOSSIBLE');
        }
    }
    return primary;
};

Parser.prototype.filter = function (baseExpression) {
    var args = [baseExpression], identifiers = [this.identifier()];

    while (this.expect('.')) {
        identifiers.push(this.identifier());
    }

    // plus namespace
    var entireName = identifiers.map(function (item) {
        return item.name;
    }).join('.');

    var result = new CallExpressionNode(new IdentifierNode(entireName), args);

    result.filter = true;

    while (this.expect(':')) {
        args.push(this.expression());
    }

    return result;
};

Parser.prototype.parseArguments = function () {
    var args = [];
    if (this.peekToken().text !== ')') {
        do {
            args.push(this.filterChain());
        } while (this.expect(','));
    }
    return args;
};

Parser.prototype.identifier = function () {
    var token = this.consume();
    if (!token.identifier) {
        this.throwError('is not a valid identifier', token);
    }
    return new IdentifierNode(token.text);
};

Parser.prototype.constant = function () {
    // TODO check that it is a constant
    return new LiteralNode(this.consume().value);
};

Parser.prototype.arrayDeclaration = function () {
    var arr = new ArrayExpressionNode();
    if (this.peekToken().text !== ']') {
        do {
            if (this.peek(']')) {
                // Support trailing commas per ES5.1.
                break;
            }
            arr.appendChild(this.expression());
        } while (this.expect(','));
    }
    this.consume(']');

    return arr;
};

Parser.prototype.object = function () {
    var properties = [], property;
    if (this.peekToken().text !== '}') {
        do {
            if (this.peek('}')) {
                // Support trailing commas per ES5.1.
                break;
            }
            property = new PropertyNode();
            if (this.peek().constant) {
                property.key = this.constant();
                property.computed = false;
                this.consume(':');
                property.value = this.expression();
            } else if (this.peek().identifier) {
                property.key = this.identifier();
                property.computed = false;
                if (this.peek(':')) {
                    this.consume(':');
                    property.value = this.expression();
                } else {
                    property.value = property.key;
                }
            } else if (this.peek('[')) {
                this.consume('[');
                property.key = this.expression();
                this.consume(']');
                property.computed = true;
                this.consume(':');
                property.value = this.expression();
            } else {
                this.throwError('invalid key', this.peek());
            }
            properties.push(property);
        } while (this.expect(','));
    }
    this.consume('}');

    return new ObjectExpressionNode(properties);
};

Parser.prototype.consume = function (e1) {
    if (this.tokens.length === 0) {
        throw new Error('Unexpected end of expression: ' + this.text);
    }

    var token = this.expect(e1);
    if (!token) {
        this.throwError('is unexpected, expecting [' + e1 + ']', this.peek());
    }
    return token;
};

Parser.prototype.peekToken = function () {
    if (this.tokens.length === 0) {
        throw new Error('Unexpected end of expression: ' + this.text);
    }
    return this.tokens[0];
};

Parser.prototype.peek = function (e1, e2, e3, e4) {
    return this.peekAhead(0, e1, e2, e3, e4);
};

Parser.prototype.peekAhead = function (i, e1, e2, e3, e4) {
    if (this.tokens.length > i) {
        var token = this.tokens[i];
        var t = token.text;
        if (t === e1 || t === e2 || t === e3 || t === e4 ||
            (!e1 && !e2 && !e3 && !e4)) {
            return token;
        }
    }
    return false;
};

Parser.prototype.expect = function (e1, e2, e3, e4) {
    var token = this.peek(e1, e2, e3, e4);
    if (token) {
        this.tokens.shift();
        return token;
    }
    return false;
};



/***/ }),

/***/ "./src/utility/ele-utils.js":
/*!**********************************!*\
  !*** ./src/utility/ele-utils.js ***!
  \**********************************/
/*! exports provided: getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return getChildNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return clearChildNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return replaceNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return removeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return removeNodeBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return insertNodeAfter; });

function getChildNodes(node) {
    return Array.prototype.slice.call(node.childNodes, 0);
}

function clearChildNodes(node) {
    getChildNodes(node).forEach(function (child) {
        node.removeChild(child);
    });
}

function replaceNode(refNode, newNode) {
    var parentNode = refNode.parentNode;
    if (parentNode != null) {
        parentNode.insertBefore(newNode, refNode);
        parentNode.removeChild(refNode);
    }
}

function removeNode(node) {
    var parentNode = node.parentNode;
    if (parentNode != null) {
        parentNode.removeChild(node);
    }
}

function removeNodeBetween(beginNode, endNode) {
    var parentNode = beginNode.parentNode;
    var childNodes = getChildNodes(parentNode);

    childNodes.forEach(function (child) {
        if (child.previousSibling === beginNode && child !== endNode) {
            parentNode.removeChild(child);
        }
        if (child.nextSibling === endNode && child !== beginNode) {
            parentNode.removeChild(child);
        }
    });
}

function insertNodeAfter(refNode, newNode) {
    var parentNode = refNode.parentNode;

    if (parentNode.lastChild === refNode) {
        parentNode.appendChild(newNode);
    } else {
        parentNode.insertBefore(newNode, refNode.nextSibling);
    }
}



/***/ }),

/***/ "./src/utility/handler.js":
/*!********************************!*\
  !*** ./src/utility/handler.js ***!
  \********************************/
/*! exports provided: SetPropertyHandler, GetPropertyHandler, propChangingMsg, propChangedMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPropertyHandler", function() { return SetPropertyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPropertyHandler", function() { return GetPropertyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propChangingMsg", function() { return propChangingMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propChangedMsg", function() { return propChangedMsg; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utility/utils.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./src/utility/message.js");



var propChangingMsg = new _message__WEBPACK_IMPORTED_MODULE_1__["Messenger"]();
var propChangedMsg = new _message__WEBPACK_IMPORTED_MODULE_1__["Messenger"]();

function SetPropertyHandler(onchange, parentKey, deepProxy) {
    this.selfKey = '__self__';
    this.onchange = onchange;
    this.parentKey = parentKey;
    this.deepProxy = deepProxy;
}

SetPropertyHandler.prototype.get = function (target, key) {
    if(this.selfKey === key){
        return target;
    }

    var value = target[key];

    if (this.deepProxy && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
        value = new Proxy(value, new SetPropertyHandler(this.onchange, this.parentKey + key + '.', this.deepProxy));
    }

    return value;
};

SetPropertyHandler.prototype.set = function (target, key, value) {
    if (this.deepProxy && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
        var self = value[this.selfKey];

        // value is a proxy return by this handler
        if (self != null) {
            value = self;
        }
    }

    var oldValue = target[key];

    if (oldValue !== value || (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target) && key === 'length')) {
        var validation = {
            isValid: true,
            oldValue: oldValue,
            newValue: value
        };

        this.onchange.fireVmChanging(this.parentKey + key, validation);
        propChangingMsg.fire({
            target: target,
            key: key,
            data: validation
        });

        if (validation.isValid) {
            target[key] = value;

            this.onchange.fireVmChanged(this.parentKey + key, {
                oldValue: oldValue,
                newValue: value
            });
            propChangedMsg.fire({
                target: target,
                key: key,
                data: {
                    oldValue: oldValue,
                    newValue: value
                }
            });
        }
    }

    return true;
};

function GetPropertyHandler(props, parentKey, deepProxy) {
    this.props = props;
    this.parentKey = parentKey;
    this.deepProxy = deepProxy;
}

GetPropertyHandler.prototype.get = function (target, key) {
    var value = target[key];
    var prop = this.parentKey + key;

    if (this.deepProxy && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
        value = new Proxy(value, new GetPropertyHandler(this.props, prop + '.', this.deepProxy));
    }

    if (this.props.indexOf(prop) === -1) {
        this.props.push(prop);
    }

    return value;
};



/***/ }),

/***/ "./src/utility/index.js":
/*!******************************!*\
  !*** ./src/utility/index.js ***!
  \******************************/
/*! exports provided: isMessenger, forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMessenger", function() { return isMessenger; });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/utility/message.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utility/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["some"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["lowercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["uppercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBlankObject", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isBlankObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isSame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["containsStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["hasProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["setProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["concat"]; });

/* harmony import */ var _ele_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ele-utils */ "./src/utility/ele-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["getChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["clearChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["replaceNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["removeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["removeNodeBetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["insertNodeAfter"]; });





function isMessenger(obj) {
    return obj instanceof _message__WEBPACK_IMPORTED_MODULE_0__["Messenger"];
}



/***/ }),

/***/ "./src/utility/message.js":
/*!********************************!*\
  !*** ./src/utility/message.js ***!
  \********************************/
/*! exports provided: Messenger, MessengerBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return Messenger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerBus", function() { return MessengerBus; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utility/utils.js");


function Messenger() {
    this.handlers = [];
}

Messenger.prototype.on = function (fn) {
    this.handlers.push(fn);
};

Messenger.prototype.off = function (fn) {
    for (var i = 0; i < this.handlers.length; i++) {
        if (this.handlers[i] === fn) {
            this.handlers.splice(i, 1);
        }
    }
};

Messenger.prototype.fire = function (args, scope) {
    var returnValue;
    scope = scope || this;
    for (var i = 0; i < this.handlers.length; i++) {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.handlers[i])) {
            returnValue = this.handlers[i].call(scope, args);
        }
    }
    return returnValue;
};

function MessengerBus() {
    this.messengers = {};
}

MessengerBus.prototype.getMessenger = function (e) {
    if (!this.messengers[e]) {
        this.messengers[e] = new Messenger();
    }
    return this.messengers[e];
};

MessengerBus.prototype.on = function (e, fn) {
    this.getMessenger(e).on(fn);
};

MessengerBus.prototype.off = function (e, fn) {
    this.getMessenger(e).off(fn);
};

MessengerBus.prototype.fire = function (e, args, scope) {
    return this.getMessenger(e).fire(args, scope);
};



/***/ }),

/***/ "./src/utility/subject.js":
/*!********************************!*\
  !*** ./src/utility/subject.js ***!
  \********************************/
/*! exports provided: PropertyChangeSubject, ObjectPropertyChangeSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyChangeSubject", function() { return PropertyChangeSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectPropertyChangeSubject", function() { return ObjectPropertyChangeSubject; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utility/utils.js");
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handler */ "./src/utility/handler.js");



function PropertyChangeSubject(parentSubject){
    this.plainMap = new Map();
    this.regexMap = new Map();
    this.parentSubject = parentSubject;
}

PropertyChangeSubject.prototype.on = function(prop, action, options) {
    var map = _utils__WEBPACK_IMPORTED_MODULE_0__["isRegExp"](prop) ? this.regexMap : this.plainMap;

    if (!map.has(prop)) {
        map.set(prop, []);
    }

    if (options) {
        action.beforeChanged = options.beforeChanged;
    }

    map.get(prop).push(action);
};

PropertyChangeSubject.prototype.off = function(prop, action) {
    var map = _utils__WEBPACK_IMPORTED_MODULE_0__["isRegExp"](prop) ? this.regexMap : this.plainMap;

    if (!map.has(prop)) {
        return;
    }

    var actions = map.get(prop);
    var index = actions.indexOf(action);

    if (index !== -1) {
        actions.splice(index, 1);
    }
};

PropertyChangeSubject.prototype.fireChanged = function(prop, args) {
    var self = this;

    if (this.plainMap.has(prop)) {
        this.plainMap.get(prop).forEach(function (action) {
            if(!action.beforeChanged){
                action.call(self, prop, args);
            }
        });
    }

    this.regexMap.forEach(function (actions, pattern) {
        if (pattern.test(prop)) {
            actions.forEach(function (action) {
                if(!action.beforeChanged){
                    action.call(self, prop, args);
                }
            });
        }
    });

    if (this.parentSubject != null) {
        this.parentSubject.fireChanged(prop, args);
    }
};

PropertyChangeSubject.prototype.fireChanging = function(prop, args) {
    var self = this;

    if (this.plainMap.has(prop)) {
        this.plainMap.get(prop).forEach(function (action) {
            if(action.beforeChanged){
                action.call(self, prop, args);
            }
        });
    }

    this.regexMap.forEach(function (actions, pattern) {
        if (pattern.test(prop)) {
            actions.forEach(function (action) {
                if(action.beforeChanged){
                    action.call(self, prop, args);
                }
            });
        }
    });

    if (this.parentSubject != null) {
        this.parentSubject.fireChanging(prop, args);
    }
};

PropertyChangeSubject.prototype.destroy =  function() {
    this.plainMap.clear();
    this.regexMap.clear();
    this.parentSubject = null;
};

function ObjectPropertyChangeSubject(parentVmPropertyChange) {
    this.vmPropertyChange = new PropertyChangeSubject(parentVmPropertyChange);
    this.objMap = new Map();

    var self = this,
        onchanging = function (args) {
            var obj = args.target, prop = args.key;
            self.fireChanging(obj, prop, args.data);
        },
        onchanged = function (args) {
            var obj = args.target, prop = args.key;
            self.fireChanged(obj, prop, args.data);
        };

    _handler__WEBPACK_IMPORTED_MODULE_1__["propChangingMsg"].on(onchanging);
    _handler__WEBPACK_IMPORTED_MODULE_1__["propChangedMsg"].on(onchanged);

    this.offChange = function () {
        _handler__WEBPACK_IMPORTED_MODULE_1__["propChangingMsg"].off(onchanging);
        _handler__WEBPACK_IMPORTED_MODULE_1__["propChangedMsg"].off(onchanged);
    };
}

ObjectPropertyChangeSubject.prototype.getVmPropertyChangeSubject = function () {
    return this.vmPropertyChange;
};

ObjectPropertyChangeSubject.prototype.setParentVmPropertyChangeSubject = function (value) {
    this.vmPropertyChange.parentSubject = value;
};

ObjectPropertyChangeSubject.prototype.on = function (obj, prop, action, options) {
    if (!this.objMap.has(obj)) {
        this.objMap.set(obj, new PropertyChangeSubject());
    }

    this.objMap.get(obj).on(prop, action, options);
};

ObjectPropertyChangeSubject.prototype.onVm = function (prop, action, options) {
    this.vmPropertyChange.on(prop, action, options);
};

ObjectPropertyChangeSubject.prototype.off = function (obj, prop, action) {
    if (this.objMap.has(obj)) {
        this.objMap.get(obj).off(prop, action);
    }
};

ObjectPropertyChangeSubject.prototype.offVm = function (prop, action) {
    this.vmPropertyChange.off(prop, action, options);
};

ObjectPropertyChangeSubject.prototype.fireChanged = function (obj, prop, args) {
    if (this.objMap.has(obj)) {
        this.objMap.get(obj).fireChanged(prop, args);
    }
};

ObjectPropertyChangeSubject.prototype.fireChanging = function(obj, prop, args) {
    if (this.objMap.has(obj)) {
        this.objMap.get(obj).fireChanging(prop, args);
    }
};

ObjectPropertyChangeSubject.prototype.fireVmChanged = function (prop, args) {
    this.vmPropertyChange.fireChanged(prop, args);
};

ObjectPropertyChangeSubject.prototype.fireVmChanging = function(prop, args) {
    this.vmPropertyChange.fireChanging(prop, args);
};

ObjectPropertyChangeSubject.prototype.destroy = function () {
    this.offChange.call(this);
    this.objMap.forEach(function (item) {
        item.destroy();
    });
    this.vmPropertyChange.destroy();
    this.objMap = null;
    this.vmPropertyChange = null;
};



/***/ }),

/***/ "./src/utility/utils.js":
/*!******************************!*\
  !*** ./src/utility/utils.js ***!
  \******************************/
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return lowercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return uppercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlankObject", function() { return isBlankObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return isSame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return containsStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return hasProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return setProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
var debugMode = true,
    toString = Object.prototype.toString,
    getPrototypeOf = Object.getPrototypeOf;

function forEach(obj, action, ignoreOwn) {
    if (isArray(obj)) {
        for (var index = 0; index < obj.length; index++) {
            if (action(index, obj[index])) {
                return;
            }
        }
    }
    else if (isObject(obj)) {
        for (var p in obj) {
            if (ignoreOwn || obj.hasOwnProperty(p)) {
                if (action(p, obj[p])) {
                    return;
                }
            }
        }
    }
    else {
        action(obj, obj);
    }
}

function some(obj, action) {
    if (isArray(obj)) {
        for (var index = 0; index < obj.length; index++) {
            if (action(index, obj[index])) {
                return true;
            }
        }
    }
    else if (isObject(obj)) {
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                if (action(p, obj[p])) {
                    return true;
                }
            }
        }
    }
    else {
        return action(obj, obj);
    }
}

function copy() {
    var deep = false, index = 0, obj = arguments[index];

    if (isBoolean(obj)) {
        deep = obj;
        obj = arguments[++index];
    }

    if (isArray(obj)) {
        return obj.map(function (item) {
            return deep ? copy(item) : item;
        });
    }

    if (isObject(obj)) {
        var newObj = object(obj);
        forEach(obj, function (key, value) {
            newObj[key] = deep ? copy(value) : value;
        });
        return newObj;
    }

    return obj;
}

function extend() {
    var deep = false, index = 0, target = arguments[index];

    if (isBoolean(target)) {
        deep = target;
        target = arguments[++index];
    }

    if (deep) {
        Array.prototype.slice.call(arguments, index + 1).forEach(function (item) {
            deepMerge(target, item);
        });
    }
    else {
        Array.prototype.slice.call(arguments, index + 1).forEach(function (item) {
            plainMerge(target, item);
        });
    }
}

function merge() {
    var deep = false, index = 0, target = {};

    if (isBoolean(arguments[index])) {
        deep = arguments[index];
        index++;
    }

    if (deep) {
        Array.prototype.slice.call(arguments, index).forEach(function (item) {
            deepMerge(target, item);
        });
    }
    else {
        Array.prototype.slice.call(arguments, index).forEach(function (item) {
            plainMerge(target, item);
        });
    }

    return target;
}

function plainMerge(target, source) {
    forEach(source, function (key, value) {
        target[key] = value;
    });
}

function deepMerge(target, source) {
    forEach(source, function (key, value) {
        if (target[key] == null) {
            target[key] = value;
        }
        else {
            if (isObject(target[key]) && isObject(value)) {
                deepMerge(target[key], value);
            }
            else {
                target[key] = value;
            }
        }
    });
}

function object(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}

function inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function inherit(subType, superType) {
    inheritPrototype(subType, superType);
    subType.super = function () {
        superType.apply(this, arguments);
    };
}

function lowercase(string) {
    return isString(string) ? string.toLowerCase() : string;
}

function uppercase(string) {
    return isString(string) ? string.toUpperCase() : string;
}

function isUndefined(value) {
    return typeof value === 'undefined';
}

function isDefined(value) {
    return typeof value !== 'undefined';
}

function isArray(obj) {
    return obj instanceof Array;
}

function isMap(obj) {
    return obj instanceof Map;
}

function isObject(value) {
    return value !== null && typeof value === 'object';
}

function isBlankObject(value) {
    return value !== null && typeof value === 'object' && !getPrototypeOf(value);
}

function isString(value) {
    return typeof value === 'string';
}

function isNumber(value) {
    return typeof value === 'number';
}

function isDate(value) {
    return toString.call(value) === '[object Date]';
}

function isFunction(value) {
    return typeof value === 'function';
}

function isRegExp(value) {
    return toString.call(value) === '[object RegExp]';
}

function isBoolean(value) {
    return typeof value === 'boolean';
}

function isSame(obj1, obj2) {
    var same = (obj1 === obj2);

    if (!same) {
        if (isArray(obj1) && isArray(obj2)) {
            if (obj1.length === obj2.length) {
                same = !some(obj1, function (index, value) {
                    return !isSame(value, obj2[index]);
                });
            }
        }
        else if (isObject(obj1) && isObject(obj2) && getPrototypeOf(obj1) === getPrototypeOf(obj2)) {
            same = !some(obj1, function (key, value) {
                return !isSame(value, obj2[key]);
            });
        }
    }

    return same;
}

function debug(log) {
    if (debugMode) {
        console.log(log);
    }
}

function contains(arr, obj) {
    return arr.some(function (item) {
        return item === obj;
    });
}

function containsStr(arr, str, ignoreCase) {
    return arr.some(function (item) {
        return item === str || (ignoreCase && lowercase(item) === lowercase(str));
    });
}

function hasProperty(obj, key, ignoreCase) {
    if (!obj) {
        return false;
    }

    var key2, hasProp = true, keys = key.split('.'), target = obj;

    while (hasProp && keys.length > 0) {
        key2 = keys.shift();
        hasProp = false;
        forEach(target, function (key3, value3) {
            hasProp = (key3 === key2 || (ignoreCase && lowercase(key3) === lowercase(key2)));
            if (hasProp) {
                target = value3;
            }
            return hasProp;
        }, true);
    }

    return hasProp;
}

function getProperty(obj, key, ignoreCase) {
    if (!obj) {
        return null;
    }

    var key2, hasProp = true, keys = key.split('.'), target = obj;

    while (hasProp && keys.length > 0) {
        key2 = keys.shift();
        hasProp = false;
        forEach(target, function (key3, value3) {
            hasProp = (key3 === key2 || (ignoreCase && lowercase(key3) === lowercase(key2)));
            if (hasProp) {
                target = value3;
            }
            return hasProp;
        }, true);
    }

    return hasProp ? target : null;
}

function setProperty(obj, key, value, ignoreCase) {
    if (!obj) {
        return;
    }

    var key2, hasProp = true, keys = key.split('.'), target = obj;

    while (hasProp && keys.length > 0) {
        key2 = keys.shift();
        if (keys.length === 0) {
            target[key2] = value;
        }
        else {
            hasProp = false;
            forEach(target, function (key3, value3) {
                hasProp = (key3 === key2 || (ignoreCase && lowercase(key3) === lowercase(key2)));
                if (hasProp) {
                    target = value3;
                }
                return hasProp;
            }, true);
        }
    }

    if (!hasProp) {
        throw new Error(key + ': Can not set property of undefined');
    }
}

function concat() {
    return Array.prototype.concat.apply([], arguments);
}



/***/ }),

/***/ "./src/view/component.js":
/*!*******************************!*\
  !*** ./src/view/component.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _utility_ele_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/ele-utils */ "./src/utility/ele-utils.js");
/* harmony import */ var _utility_subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/subject */ "./src/utility/subject.js");
/* harmony import */ var _utility_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/handler */ "./src/utility/handler.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");








function Component() {
    this.$$vnodes = null;
    this.$$ownerVNode = null;
    this.$$parentComponent = null;
    this.$$childComponents = [];
    this.$$childDirectives = [];
    this.$$detectTimeout = null;
    this.$$propChanged = new _utility_subject__WEBPACK_IMPORTED_MODULE_3__["ObjectPropertyChangeSubject"]();
}

Component.prototype.$onInit = function () {
    Object.defineProperty(this, 'proxy', {
        enumerable: false,
        configurable: false,
        get: function () {
            return new Proxy(this, new _utility_handler__WEBPACK_IMPORTED_MODULE_4__["SetPropertyHandler"](this.$$propChanged, '', true));
        }
    });

    _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].injectServices(this);

    if (this.$$def.superInstance != null) {
        this.$$propChanged.setParentVmPropertyChangeSubject(this.$$def.superInstance.$$propChanged.getVmPropertyChangeSubject());
    }

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$$def.onInit)) {
        this.$$def.onInit.call(this);
    }
};

Component.prototype.$bindVNode = function (vnode) {
    this.$$ownerVNode = vnode;
};

Component.prototype.$hasAttr = function (prop) {
    return _utility_utils__WEBPACK_IMPORTED_MODULE_1__["hasProperty"](this.$$def.props, prop, true);
};

Component.prototype.$setAttr = function (prop, value) {
    _utility_utils__WEBPACK_IMPORTED_MODULE_1__["setProperty"](this.proxy, prop, value, true);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$$def.onChanges)) {
        this.$$def.onChanges.call(this, prop, value);
    }
};

Component.prototype.$hasEvent = function (e) {
    return _utility_utils__WEBPACK_IMPORTED_MODULE_1__["containsStr"](this.$$def.events, e, true);
};

Component.prototype.$listen = function (e, fn) {
    var messenger = _utility_utils__WEBPACK_IMPORTED_MODULE_1__["getProperty"](this, e, true);
    if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isMessenger"])(messenger)) {
        messenger.on(fn);
        return;
    }
    throw new Error(e + ' is not a event');
};

Component.prototype.$getTemplate = function (sync) {
    var self = this;

    if(sync){
        return self.$$def.template || '';
    }

    return new Promise(function (resolve) {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](self.$$def.template)) {
            resolve(self.$$def.template);
        }
        else if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](self.$$def.templateUrl)) {
            _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].service('$templateCache').getTplByUrl(self.$$def.templateUrl).then(function (tpl) {
                resolve(tpl);
            });
        }
        else {
            resolve('');
        }
    });
};

Component.prototype.$using = function (name) {
    var using = this.$$def.using,
        segments = name.split('.'),
        className = segments.pop(),
        spaceName = segments.join('.');

    if (spaceName && _utility_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"](using)) {
        _utility_utils__WEBPACK_IMPORTED_MODULE_1__["some"](using, function (key, value) {
            if (key === spaceName) {
                name = value + '.' + className;
                return true;
            }
        });
    }

    return name;
};

Component.prototype.$makeCompileOptions = function () {
    var self = this;
    return {
        getEmbedTpl: function () {
            return this.$$ownerVNode.getInnerTpl();
        },
        containsComponent: function (name) {
            return _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].containsComponent(self.$using(name));
        },
        createComponent: function (name) {
            return _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].createComponent(self.$using(name));
        },
        containsDirective: function (name) {
            return _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].containsDirective(self.$using(name));
        },
        createDirective: function (name) {
            return _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].createDirective(self.$using(name));
        }
    };
};

Component.prototype.$hasVNodes = function () {
    return _utility_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"](this.$$vnodes);
};

Component.prototype.$fromVNodes = function () {
    var fragment = document.createDocumentFragment();

    this.$$vnodes.forEach(function (vnode) {
        fragment.appendChild(vnode.getDomElement());
    });

    return fragment;
};

Component.prototype.$clearVNodes = function () {
    if (!this.$hasVNodes()) {
        return;
    }
    this.$$vnodes.forEach(function (vnode) {
        vnode.destroy();
    });
    this.$$vnodes = null;
};

Component.prototype.$render = function (sync) {
    var self = this, fragment = null;

    if (sync) {
        if (this.$hasVNodes()) {
            fragment = this.$fromVNodes();
        }
        else {
            fragment = Object(_parser__WEBPACK_IMPORTED_MODULE_6__["compile"])(this.$getTemplate(sync), this.$makeCompileOptions())(this);
        }

        return fragment;
    }

    return new Promise(function (resolve) {
        if (self.$hasVNodes()) {
            resolve(self.$fromVNodes());
        }
        else {
            self.$getTemplate().then(function (html) {
                fragment = Object(_parser__WEBPACK_IMPORTED_MODULE_6__["compile"])(html, self.$makeCompileOptions())(self);
                resolve(fragment);
            });
        }
    });
};

Component.prototype.$refresh = function (sync) {
    this.$clearVNodes();
    return this.$render(sync);
};

Component.prototype.$mount = function (idOrElement, sync) {
    var self = this, element;

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](idOrElement)) {
        element = document.getElementById(idOrElement);
    }
    else {
        element = idOrElement;
    }

    _utility_ele_utils__WEBPACK_IMPORTED_MODULE_2__["clearChildNodes"](element);

    if (sync) {
        element.appendChild(this.$render(sync));
        self.$afterViewInit();
    }
    else {
        this.$render(sync).then(function (ele) {
            element.appendChild(ele);
            self.$afterViewInit();
        });
    }
};

Component.prototype.$afterViewInit = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$$def.afterViewInit)) {
        this.$$def.afterViewInit.call(this);
    }
};

Component.prototype.$unmount = function () {
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
};

Component.prototype.$detect = function () {
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
};

Component.prototype.$validate = function(prop, action) {
    var self = this;

    this.$$propChanged.onVm(prop, action, {
        beforeChanged: true
    });

    return function () {
        self.$$propChanged.offVm(prop, action);
    };
};

Component.prototype.$validateProp = function(obj, prop, action) {
    var self = this;

    this.$$propChanged.on(obj, prop, action, {
        beforeChanged: true
    });

    return function () {
        self.$$propChanged.off(obj, prop, action);
    };
};

Component.prototype.$watch = function(prop, action){
    var self = this;

    this.$$propChanged.onVm(prop, action);

    return function(){
        self.$$propChanged.offVm(prop, action);
    };
};

Component.prototype.$watchProp = function(obj, prop, action){
    var self = this;

    this.$$propChanged.on(obj, prop, action);

    return function(){
        self.$$propChanged.off(obj, prop, action);
    };
};

Component.prototype.$removeChild = function (child) {
    var index = this.$$childComponents.indexOf(child);

    if (index !== -1) {
        this.$$childComponents.splice(index, 1);
        child.$$parentComponent = null;
    }
};

Component.prototype.$dispose = function (isFromVNode) {
    // remove virtual node first in case it triggers parent component destroy
    this.$unmount();

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$$def.onDestroy)) {
        this.$$def.onDestroy.call(this);
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
};

Component.prototype.$destroy = function () {
    this.$dispose();

    // destroy virtual node in the end because it may binds logic about destroy
    if (this.$$ownerVNode != null) {
        this.$$ownerVNode.dispose(true);
        this.$$ownerVNode = null;
    }
};

Component.prototype.$getParent = function () {
    return this.$$parentComponent;
};

Component.prototype.$createComponent = function (constructor) {
    var component = _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].createComponent(constructor);
    this.$$childComponents.push(component);
    component.$$parentComponent = this;
    return component;
};

/***/ }),

/***/ "./src/view/directive.js":
/*!*******************************!*\
  !*** ./src/view/directive.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Directive; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");



function Directive() {
    this.$$binding = null;
    this.$$vnode = null;
    this.output = false;
}

Directive.prototype.$onInit = function () {
    var self = this;

    _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onInit)) {
        this.$$def.onInit.call(this);
    }
};

Directive.prototype.$bindVNode = function (vnode) {
    this.$$vnode = vnode;
};

Directive.prototype.$setBinding = function (binding) {
    this.$$binding = binding;
};

Directive.prototype.$compile = function (options) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onCompile)) {
        this.$$def.onCompile.call(this, this.$$vnode, options);
    }
};

Directive.prototype.$insert = function (ele, com) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onInsert)) {
        this.$$def.onInsert.call(this, ele, this.$$binding, com);
    }
};

Directive.prototype.$detect = function (ele, com) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onDetect)) {
        return this.$$def.onDetect.call(this, ele, this.$$binding, com);
    }

    if (this.$$binding.detect()) {
        this.$update(ele, com);
    }
};

Directive.prototype.$update = function (ele, com) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onUpdate)) {
        this.$$def.onUpdate.call(this, ele, this.$$binding, com);
    }
};

Directive.prototype.$dispose = function (isFromVNode) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onDestroy)) {
        this.$$def.onDestroy.call(this);
    }

    if(isFromVNode){
        this.$$vnode = null;
    }

    this.$$binding = null;
};

Directive.prototype.$destroy = function () {
    this.$dispose();

    if(this.$$vnode != null){
        this.$$vnode.dispose(true);
        this.$$vnode = null;
    }
};

/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");



function Filter() {

}

Filter.prototype.$onInit = function () {
    var self = this;

    _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onInit)) {
        this.$$def.onInit.call(this);
    }
};

Filter.prototype.$execute = function (ele) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onExecute)) {
        return this.$$def.onExecute.apply(this, arguments);
    }
};

Filter.prototype.$destroy = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onDestroy)) {
        this.$$def.onDestroy.call(this);
    }
};

/***/ }),

/***/ "./src/view/index.js":
/*!***************************!*\
  !*** ./src/view/index.js ***!
  \***************************/
/*! exports provided: namespace, injector, component, directive, filter, service, isComponent, isDirective, isFilter, isService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "service", function() { return service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilter", function() { return isFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isService", function() { return isService; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _utility_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/message */ "./src/utility/message.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return _injector__WEBPACK_IMPORTED_MODULE_2__["injector"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ "./src/view/component.js");
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive */ "./src/view/directive.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter */ "./src/view/filter.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service */ "./src/view/service.js");








function namespace(ns) {
    return {
        component: function (name, def) {
            def.namespace = ns;
            return component(name, def);
        },
        directive: function (name, def) {
            if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
                def = {
                    onInsert: def,
                    onUpdate: def
                };
            }
            def.namespace = ns;
            return directive(name, def);
        },
        service: function (name, def) {
            def.namespace = ns;
            return service(name, def);
        },
        filter: function (name, def) {
            if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
                def = {
                    onExecute: def
                };
            }
            def.namespace = ns;
            return filter(name, def);
        }
    };
}

function component(name, def) {
    return _injector__WEBPACK_IMPORTED_MODULE_2__["injector"].buildConstructor(name, def, {
        contractType: _injector__WEBPACK_IMPORTED_MODULE_2__["typeConst"].component,
        superClass: _component__WEBPACK_IMPORTED_MODULE_3__["default"]
    });
}

function directive(name, def) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
        def = {
            onInsert: def,
            onUpdate: def
        };
    }

    return _injector__WEBPACK_IMPORTED_MODULE_2__["injector"].buildConstructor(name, def, {
        contractType: _injector__WEBPACK_IMPORTED_MODULE_2__["typeConst"].directive,
        superClass: _directive__WEBPACK_IMPORTED_MODULE_4__["default"]
    });
}

function filter(name, def) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
        def = {
            onExecute: def
        };
    }

    return _injector__WEBPACK_IMPORTED_MODULE_2__["injector"].buildConstructor(name, def, {
        contractType: _injector__WEBPACK_IMPORTED_MODULE_2__["typeConst"].filter,
        superClass: _filter__WEBPACK_IMPORTED_MODULE_5__["default"]
    });
}

function service(name, def) {
    return _injector__WEBPACK_IMPORTED_MODULE_2__["injector"].buildConstructor(name, def, {
        contractType: _injector__WEBPACK_IMPORTED_MODULE_2__["typeConst"].service,
        superClass: _service__WEBPACK_IMPORTED_MODULE_6__["default"]
    });
}

function isComponent(obj) {
    return obj instanceof _component__WEBPACK_IMPORTED_MODULE_3__["default"];
}

function isDirective(obj) {
    return obj instanceof _directive__WEBPACK_IMPORTED_MODULE_4__["default"];
}

function isFilter(obj) {
    return obj instanceof _filter__WEBPACK_IMPORTED_MODULE_5__["default"];
}

function isService(obj) {
    return obj instanceof _service__WEBPACK_IMPORTED_MODULE_6__["default"];
}



/***/ }),

/***/ "./src/view/injector.js":
/*!******************************!*\
  !*** ./src/view/injector.js ***!
  \******************************/
/*! exports provided: typeConst, Injector, injector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeConst", function() { return typeConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return Injector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return injector; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _utility_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/message */ "./src/utility/message.js");



var typeConst = {
    filter: 'filter',
    service: 'service',
    component: 'component',
    directive: 'directive'
};

var injector = new Injector();
var namePattern = /^[a-z_\$][\w\$-]*/i;

function Injector() {
    this.container = {};
    this.waitingToExtends = {};
    this.insContainer = {};
}

Injector.prototype.getMapping = function (contractType) {
    if (!this.container[contractType]) {
        this.container[contractType] = {};
    }
    return this.container[contractType];
};

Injector.prototype.getInstances = function (contractType) {
    if (!this.insContainer[contractType]) {
        this.insContainer[contractType] = [];
    }
    return this.insContainer[contractType];
};

Injector.prototype.register = function (contractType, contractName, constructor) {
    if (contractName.indexOf('.') !== -1) {
        throw new Error('Illegal character "."');
    }

    var mapping = this.getMapping(contractType);

    if (mapping[contractName] == null) {
        mapping[contractName] = [];
    }
    else {
        var matches = mapping[contractName].filter(function (item) {
            return item.prototype.$$def.namespace === constructor.prototype.$$def.namespace;
        });

        if (matches.length > 0) {
            throw new Error(contractName + ' is exist under namespace ' + matches[0].prototype.$$def.namespace);
        }
    }

    mapping[contractName].push(constructor);
};

Injector.prototype.registerComponent = function (contractName, constructor) {
    this.register(typeConst.component, contractName, constructor);
};

Injector.prototype.registerDirective = function (contractName, constructor) {
    this.register(typeConst.directive, contractName, constructor);
};

Injector.prototype.contains = function (contractType, contractName, ignoreCase) {
    var constructors, mapping = this.getMapping(contractType);
    var segments = contractName.split('.');
    var namespace = '';

    if (segments.length > 1) {
        contractName = segments.pop();
        namespace = segments.join('.');
    }

    if (ignoreCase) {
        constructors = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](mapping, contractName, true);
    }
    else {
        constructors = mapping[contractName];
    }

    if (constructors == null) {
        return false;
    }

    if (namespace && constructors.length > 0) {
        constructors = constructors.filter(function (item) {
            var def = item.prototype.$$def;
            return def.namespace && _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](def.namespace) === _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](namespace);
        });

        if (constructors.length === 0) {
            return false;
        }
    }

    return true;
};

Injector.prototype.containsComponent = function (contractName) {
    return this.contains(typeConst.component, contractName, true);
};

Injector.prototype.containsDirective = function (contractName) {
    return this.contains(typeConst.directive, contractName, true);
};

Injector.prototype.get = function (contractType, contractName, ignoreCase) {
    var constructors, mapping = this.getMapping(contractType);
    var segments = contractName.split('.');
    var namespace = '';

    if (segments.length > 1) {
        contractName = segments.pop();
        namespace = segments.join('.');
    }

    if (ignoreCase) {
        constructors = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](mapping, contractName, true);
    }
    else {
        constructors = mapping[contractName];
    }

    if (constructors == null) {
        throw new Error(contractType + ' ' + contractName + ' is not defined');
    }

    if (namespace && constructors.length > 0) {
        constructors = constructors.filter(function (item) {
            var def = item.prototype.$$def;
            return def.namespace && _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](def.namespace) === _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](namespace);
        });

        if (constructors.length === 0) {
            throw new Error(contractName + ' is not exist under namespace ' + namespace);
        }
    }

    if (constructors.length > 1) {
        var namespaces = constructors.map(function (item) {
            return item.prototype.$$def.namespace;
        });
        throw new Error('namespace ' + namespaces.join('|') + ' all have ' + contractName);
    }

    return constructors[0];
};

Injector.prototype.getComponent = function (contractName) {
    return this.get(typeConst.component, contractName);
};

Injector.prototype.getDirective = function (contractName) {
    return this.get(typeConst.directive, contractName);
};

Injector.prototype.getFilter = function (contractName) {
    return this.get(typeConst.filter, contractName);
};

Injector.prototype.getService = function (contractName) {
    return this.get(typeConst.service, contractName);
};

Injector.prototype.create = function (contractType, contractName) {
    var constructor = this.get(contractType, contractName), instance;

    switch (contractType) {
        case typeConst.component:
            instance = this.createComponent(constructor); break;
        case typeConst.directive:
            instance = this.createDirective(constructor); break;
        case typeConst.filter:
            instance = this.createFilter(constructor); break;
        case typeConst.service:
            instance = this.createService(constructor); break;
        default:
            instance = new constructor(); break;
    }

    return instance;
};

Injector.prototype.createComponent = function (constructor) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getComponent(constructor);
    }
    var instance = new constructor();
    instance.$onInit();
    return instance;
};

Injector.prototype.createDirective = function (constructor) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getDirective(constructor);
    }
    var instance = new constructor();
    instance.$onInit();
    return instance;
};

Injector.prototype.createFilter = function (constructor) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getFilter(constructor);
    }
    var instance = new constructor();
    instance.$onInit();
    return instance;
};

Injector.prototype.createService = function (constructor) {
    var instance, services = this.getInstances(typeConst.service);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getService(constructor);
    }

    if (!constructor.prototype.$$def.nonShared) {
        var result = services.filter(function (item) {
            return item instanceof constructor;
        });

        if (result.length) {
            instance = result[0];
        }
    }

    if (!instance) {
        instance = new constructor();
        instance.$onInit();
        services.push(instance);
    }

    return instance;
};

Injector.prototype.service = function (contractName) {
    return this.createService(contractName);
};

Injector.prototype.getWaitingToExtends = function (contractType) {
    if (!this.waitingToExtends[contractType]) {
        this.waitingToExtends[contractType] = [];
    }
    return this.waitingToExtends[contractType];
};

Injector.prototype.setWaitingToExtends = function (contractType, value) {
    this.waitingToExtends[contractType] = value;
};

Injector.prototype.checkContractName = function (contractName, contractType) {
    if (namePattern.test(contractName)) {
        var constructorName = '';
        var segments = contractName.split('-');

        segments.forEach(function (segment) {
            constructorName += _utility_utils__WEBPACK_IMPORTED_MODULE_0__["uppercase"](segment[0]) + segment.substring(1);
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
        throw new Error(contractName + 'is not a valid name');
    }
};

Injector.prototype.buildConstructor = function makeConstructor(contractName, def, options) {
    var self = this,
        construct,
        constructorName = this.checkContractName(contractName, options.contractType),
        waitingToExtends = self.getWaitingToExtends(options.contractType);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](options.construct)) {
        construct = options.construct;
    }
    else {
        construct = function () {
            var self = this;
            if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](constructor.super)) {
                constructor.super.call(this);
            }
            if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](this.$$def.props)) {
                _utility_utils__WEBPACK_IMPORTED_MODULE_0__["extend"](true, this, _utility_utils__WEBPACK_IMPORTED_MODULE_0__["copy"](true, this.$$def.props));
            }
            if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"](this.$$def.events)) {
                this.$$def.events.forEach(function (e) {
                    self[e] = new _utility_message__WEBPACK_IMPORTED_MODULE_1__["Messenger"]();
                });
            }
        };
    }

    var constructor = new Function('construct', '"use strict";return function ' + constructorName + '(){construct.call(this);};')(construct);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](options.superClass)) {
        _utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](constructor, options.superClass);
    }

    if(_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](def.superInstance) && (def.superInstance instanceof options.superClass)) {
        constructor.prototype = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["object"](def.superInstance);
    }

    constructor.prototype.$$key = contractName;

    // apply properties and methods
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](def.extends)) {
        if (injector.contains(options.contractType, def.extends)) {
            var superOne = injector.get(options.contractType, def.extends);
            var def2 = extendDef(def, superOne);
            remainConstructor(contractName, def2, constructor);
        }
        else {
            waitingToExtends.push({
                superName: def.extends,
                callback: function (superOne) {
                    var def2 = extendDef(def, superOne);
                    remainConstructor(contractName, def2, constructor);
                }
            });
        }
    }
    else {
        remainConstructor(contractName, def, constructor);
    }

    function extendDef(def, superOne) {
        if (superOne.prototype.$$def && superOne.prototype.$$def.protected) {
            throw new Error(options.contractType + ': ' + def.extends + ' is protected, it is not allowed to extend!');
        }

        return _utility_utils__WEBPACK_IMPORTED_MODULE_0__["merge"](true, _utility_utils__WEBPACK_IMPORTED_MODULE_0__["copy"](true, superOne.prototype.$$def), def);
    }

    function remainConstructor(name, def, constructor) {
        constructor.prototype.$$def = def;

        // create methods
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](def.methods)) {
            _utility_utils__WEBPACK_IMPORTED_MODULE_0__["extend"](constructor.prototype, def.methods);
        }

        // register component
        if(!def.local){
            injector.register(options.contractType, name, constructor);
        }

        // check if there is any component extends current component
        var waitingToExtends2 = [];
        waitingToExtends.forEach(function (item) {
            if (item.superName === name) {
                item.callback.call(null, constructor);
            }
            else {
                waitingToExtends2.push(item);
            }
        });
        self.setWaitingToExtends(options.contractType, waitingToExtends2);
    }

    return constructor;
};

Injector.prototype.injectServices = function (instance) {
    var self = this;

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](instance.$$def.inject)) {
        _utility_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](instance.$$def.inject, function (key, value) {
            instance[key] = self.createService(value);
        });
    }
};



/***/ }),

/***/ "./src/view/service.js":
/*!*****************************!*\
  !*** ./src/view/service.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Service; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");



function Service() {

}

Service.prototype.$onInit = function () {
    var self = this;

    _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onInit)) {
        this.$$def.onInit.call(this);
    }
};

Service.prototype.$destroy = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onDestroy)) {
        this.$$def.onDestroy.call(this);
    }
};

/***/ }),

/***/ "axios":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"axios","commonjs2":"axios","amd":"axios","root":"axios"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_axios__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2NkYXRhc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY3VzdG9tLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9kb2N0eXBlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS90ZXh0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9pbm5lci9kaXJlY3RpdmVzLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvaW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9pbm5lci9zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9odG1sLWxleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2h0bWwtcGFyc2VyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2xleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL3BhcnNlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvZWxlLXV0aWxzLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9oYW5kbGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvc3ViamVjdC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9pbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zaW5lL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJheGlvc1wiLFwiY29tbW9uanMyXCI6XCJheGlvc1wiLFwiYW1kXCI6XCJheGlvc1wiLFwicm9vdFwiOlwiYXhpb3NcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFD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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUU0Qjs7Ozs7Ozs7Ozs7OztBQ2xSNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztB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cUIsbURBQVE7QUFDN0I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsbURBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkscURBQUs7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBSztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsNkRBQW1CO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxtREFBUTtBQUN2Qjs7QUFFQTtBQUNBLGVBQWUsa0RBQVU7QUFDekI7Ozs7Ozs7Ozs7Ozs7O0FDblJBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ0E7O0FBRTFDLHNEQUFhLHVCQUF1QiwyQ0FBSztBQUN6QztBQUNBO0FBQ0EsMENBQTBDLCtDQUFTO0FBQ25EOztBQUVnQzs7Ozs7Ozs7Ozs7OztBQ1RoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUI7QUFDSztBQUNHO0FBQ0w7QUFDRDtBQUNDO0FBQ0M7QUFDRDtBQUNDO0FBQ0o7QUFDRzs7Ozs7Ozs7Ozs7OztBQ1YxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDTztBQUNQO0FBQ047O0FBRXBDLHNEQUFhLFdBQVcsMkNBQUs7QUFDN0I7QUFDQTtBQUNBLDhCQUE4QiwrQ0FBUztBQUN2Qyx1QkFBdUIsZ0RBQU87QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksOERBQW9CO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUEwQjtBQUNIO0FBQ0U7Ozs7Ozs7Ozs7Ozs7QUNGekI7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDZDtBQUNSOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVEQUFTOztBQUVULHVEQUFTOztBQUVULHVEQUFTOztBQUVULHVEQUFTOztBQUVULHVEQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsaURBQWM7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LFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BOQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNUOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsS0FBSztBQUNMOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9ELHVCQUF1QjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCxlQUFlO0FBQ3RFO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxZQUFZLHNEQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseURBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxRQUFRLHNEQUFhO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0Msb0JBQW9CO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFVBQVU7QUFDN0Q7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUssd0JBQXdCO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVuQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFD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O0FBRUEsOERBQThELDBDQUEwQyx1QkFBdUI7O0FBRS9ILFFBQVEseURBQWdCO0FBQ3hCLFFBQVEsc0RBQWE7QUFDckI7O0FBRUEsT0FBTyx1REFBYztBQUNyQixnQ0FBZ0MscURBQVk7QUFDNUM7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLHVEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsb0RBQVcsT0FBTyxtREFBVTtBQUMzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1REFBYztBQUMxQixZQUFZLHFEQUFZO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxRQUFRLHVEQUFjO0FBQ3RCLFFBQVEsc0RBQWE7QUFDckI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuWUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDTjs7QUFFckI7O0FBRWY7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLGtEQUFROztBQUVaLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ3JCQSxtRCIsImZpbGUiOiJzaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYXhpb3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiYXhpb3NcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic2luZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImF4aW9zXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzaW5lXCJdID0gZmFjdG9yeShyb290W1wiYXhpb3NcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2F4aW9zX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gJy4vYmluZGluZyc7XHJcblxyXG4vLyAvLyBXaW5kb3cgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWxvYWQnOlxyXG4vLyBjYXNlICdvbi11bmxvYWQnOlxyXG4vLyAvLyBGb3JtIEVsZW1lbnQgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWNoYW5nZSc6XHJcbi8vIGNhc2UgJ29uLXN1Ym1pdCc6XHJcbi8vIGNhc2UgJ29uLXJlc2V0JzpcclxuLy8gY2FzZSAnb24tc2VsZWN0JzpcclxuLy8gY2FzZSAnb24tYmx1cic6XHJcbi8vIGNhc2UgJ29uLWZvY3VzJzpcclxuLy8gLy8gSW1hZ2UgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWFib3J0JzpcclxuLy8gLy8gS2V5Ym9hcmQgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWtleWRvd24nOlxyXG4vLyBjYXNlICdvbi1rZXlwcmVzcyc6XHJcbi8vIGNhc2UgJ29uLWtleXVwJzpcclxuLy8gLy8gTW91c2UgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWNsaWNrJzpcclxuLy8gY2FzZSAnb24tZGJsY2xpY2snOlxyXG4vLyBjYXNlICdvbi1tb3VzZWRvd24nOlxyXG4vLyBjYXNlICdvbi1tb3VzZW1vdmUnOlxyXG4vLyBjYXNlICdvbi1tb3VzZW91dCc6XHJcbi8vIGNhc2UgJ29uLW1vdXNlb3Zlcic6XHJcbi8vIGNhc2UgJ29uLW1vdXNldXAnOlxyXG52YXIgZXZlbnRUZXh0ID0gJ2xvYWQgdW5sb2FkIGNoYW5nZSBzdWJtaXQgcmVzZXQgc2VsZWN0IGJsdXIgZm9jdXMgYWJvcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwJztcclxudmFyIGRvbUV2ZW50cyA9IGV2ZW50VGV4dC5zcGxpdCgnICcpO1xyXG5cclxudXRpbHMuaW5oZXJpdChBdHRyTm9kZSwgVk5vZGUpO1xyXG4vLyBhdHRyaWJ1dGUgbm9kZVxyXG5mdW5jdGlvbiBBdHRyTm9kZShuYW1lLCB2YWx1ZSkge1xyXG4gICAgQXR0ck5vZGUuc3VwZXIuY2FsbCh0aGlzLCBWTm9kZVR5cGUuYXR0cmlidXRlLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICB0aGlzLnF1b3RlID0gJ1wiJztcclxuICAgIHRoaXMub3JnTm9kZU5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5pc0V2ZW50ID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQmluZGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0RvbUV2ZW50ID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRGlyZWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmRpcmVjdGl2ZSA9IG51bGw7XHJcbiAgICB0aGlzLm93bmVyVkVsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5vd25lckVsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5vd25lckNvbXBvbmVudCA9IG51bGw7XHJcbiAgICB0aGlzLmJpbmRpbmcgPSBuZXcgQmluZGluZygpO1xyXG59XHJcblxyXG5BdHRyTm9kZS5wcm90b3R5cGUuYmVsb25nVG8gPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcmdOb2RlTmFtZSA9PT0ga2V5O1xyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jb21waWxlKHRoaXMub3B0aW9ucyk7XHJcbn07XHJcblxyXG5BdHRyTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICB0aGlzLmlzRXZlbnQgPSB0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ0AnKTtcclxuICAgIHRoaXMuaXNCaW5kaW5nID0gdGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCc6Jyk7XHJcbiAgICB0aGlzLmlzRGlyZWN0aXZlID0gdGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCcqJyk7XHJcbiAgICBpZiAodGhpcy5pc0V2ZW50IHx8IHRoaXMuaXNCaW5kaW5nIHx8IHRoaXMuaXNEaXJlY3RpdmUpIHtcclxuICAgICAgICB0aGlzLm5vZGVOYW1lID0gdGhpcy5ub2RlTmFtZS5zdWJzdHIoMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzRG9tRXZlbnQgPSB1dGlscy5jb250YWlucyhkb21FdmVudHMsIHRoaXMubm9kZU5hbWUpO1xyXG4gICAgdGhpcy5iaW5kaW5nLnNldE91dHB1dCh0aGlzLmlzRXZlbnQpO1xyXG4gICAgdGhpcy5iaW5kaW5nLmJpbmQodGhpcy5ub2RlVmFsdWUsIHRoaXMuaXNFdmVudCB8fCB0aGlzLmlzQmluZGluZyB8fCB0aGlzLmlzRGlyZWN0aXZlKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0RpcmVjdGl2ZSkge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmNvbnRhaW5zRGlyZWN0aXZlKHRoaXMubm9kZU5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlID0gb3B0aW9ucy5jcmVhdGVEaXJlY3RpdmUodGhpcy5ub2RlTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRiaW5kVk5vZGUodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuYmluZGluZy5zZXRPdXRwdXQodGhpcy5kaXJlY3RpdmUub3V0cHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlyZWN0aXZlICcgKyB0aGlzLm5vZGVOYW1lICsgJyBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbkF0dHJOb2RlLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gKHNjb3BlLCBvd25lckVsZW1lbnQsIG93bmVyQ29tcG9uZW50KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgdGhpcy5vd25lckVsZW1lbnQgPSBvd25lckVsZW1lbnQ7XHJcbiAgICB0aGlzLm93bmVyQ29tcG9uZW50ID0gb3duZXJDb21wb25lbnQ7XHJcbiAgICB0aGlzLmJpbmRpbmcuc2V0U2NvcGUoc2NvcGUpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RvbUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ub2RlTmFtZSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuYmluZGluZy5jb21wdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50OiBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkYXJnczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6IHNlbGYub3duZXJFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvd25lckNvbXBvbmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG93bmVyQ29tcG9uZW50LiRsaXN0ZW4odGhpcy5ub2RlTmFtZSwgZnVuY3Rpb24gKGUsIGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuYmluZGluZy5jb21wdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50OiBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkYXJnczogYXJncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6IHNlbGYub3duZXJFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICBzY29wZS4kJGNoaWxkRGlyZWN0aXZlcy5wdXNoKHRoaXMuZGlyZWN0aXZlKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJHNldEJpbmRpbmcodGhpcy5iaW5kaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3duZXJDb21wb25lbnQgIT0gbnVsbCAmJiBvd25lckNvbXBvbmVudC4kaGFzQXR0cih0aGlzLm5vZGVOYW1lKSkge1xyXG4gICAgICAgICAgICBvd25lckNvbXBvbmVudC4kc2V0QXR0cih0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMub3duZXJFbGVtZW50LCB0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJFbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaW5kaW5nLndhdGNoUHJvcHMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmRldGVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLmRldGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmRpcmVjdGl2ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kZGV0ZWN0KHRoaXMub3duZXJFbGVtZW50LCB0aGlzLm93bmVyQ29tcG9uZW50KTtcclxuICAgIH1cclxufTtcclxuXHJcbkF0dHJOb2RlLnByb3RvdHlwZS5oYXNDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iaW5kaW5nLmRldGVjdCgpO1xyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLm93bmVyQ29tcG9uZW50ICE9IG51bGwgJiYgdGhpcy5vd25lckNvbXBvbmVudC4kaGFzQXR0cih0aGlzLm5vZGVOYW1lKSkge1xyXG4gICAgICAgIHRoaXMub3duZXJDb21wb25lbnQuJHNldEF0dHIodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5vd25lckVsZW1lbnQsIHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3duZXJFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnICYmIHRoaXMubm9kZU5hbWUgPT09ICd2YWx1ZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJFbGVtZW50LnZhbHVlID0gdGhpcy5iaW5kaW5nLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLmFmdGVyTGluayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmRpcmVjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlLiRpbnNlcnQodGhpcy5vd25lckVsZW1lbnQsIHRoaXMub3duZXJDb21wb25lbnQpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLmRpcmVjdGl2ZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUgPT0gbnVsbCA/IFtdIDogW3RoaXMuZGlyZWN0aXZlXTtcclxufTtcclxuXHJcbkF0dHJOb2RlLnByb3RvdHlwZS5nZXRPdXRlclRwbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLm9yZ05vZGVOYW1lICsgKHRoaXMubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB0aGlzLnF1b3RlICsgdGhpcy5ub2RlVmFsdWUgKyB0aGlzLnF1b3RlKSk7XHJcbn07XHJcblxyXG5BdHRyTm9kZS5wcm90b3R5cGUuZ2V0SW5uZXJUcGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcmdOb2RlTmFtZSArICh0aGlzLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdGhpcy5xdW90ZSArIHRoaXMubm9kZVZhbHVlICsgdGhpcy5xdW90ZSkpO1xyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoaXNGcm9tRGlyZWN0aXZlKSB7XHJcbiAgICBpZihpc0Zyb21EaXJlY3RpdmUpe1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJpbmRpbmcuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5iaW5kaW5nID0gbnVsbDtcclxuICAgIHRoaXMub3duZXJWRWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLm93bmVyRWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLm93bmVyQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHRoaXMuJGRlc3Ryb3koKTtcclxufTtcclxuXHJcbkF0dHJOb2RlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKXtcclxuICAgIGlmKHRoaXMuZGlyZWN0aXZlICE9IG51bGwpe1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlLiRkaXNwb3NlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRpc3Bvc2UoKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IEF0dHJOb2RlIH07XHJcbiIsIlxyXG52YXIgVk5vZGVUeXBlID0ge1xyXG4gICAgZWxlbWVudDogMSxcclxuICAgIGF0dHJpYnV0ZTogMixcclxuICAgIHRleHQ6IDMsXHJcbiAgICBjZGF0YVNlY3Rpb246IDQsXHJcbiAgICBlbnRpdHlSZWZlcmVuY2U6IDUsXHJcbiAgICBlbnRpdHk6IDYsXHJcbiAgICBwcm9jZXNzaW5nSW5zdHJ1Y3Rpb246IDcsXHJcbiAgICBjb21tZW50OiA4LFxyXG4gICAgZG9jdW1lbnQ6IDksXHJcbiAgICBkb2N1bWVudFR5cGU6IDEwLFxyXG4gICAgZG9jdW1lbnRGcmFnbWVudDogMTEsXHJcbiAgICBub3RhdGlvbjogMTIsXHJcbiAgICBjdXN0b206IDEwMVxyXG59O1xyXG5cclxuLy8gYmFzaWMgbm9kZVxyXG5mdW5jdGlvbiBWTm9kZSh0eXBlLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgdGhpcy5ub2RlVHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLm5vZGVOYW1lID0gbmFtZTtcclxuICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcclxuICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XHJcbiAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcclxuICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XHJcbiAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XHJcbiAgICB0aGlzLm93bmVyVkRvY3VtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG59XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuJHB1c2hDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuJGJ1aWxkU2libGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gKHNlbGYuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQuJGJ1aWxkU2libGluZygpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuJGNsZWFyUGFyZW50QW5kU2libGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcclxuICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLiRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLiRyZW1vdmUoKTtcclxuICAgIHRoaXMuJGNsZWFyUGFyZW50QW5kU2libGluZygpO1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xyXG4gICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xyXG4gICAgdGhpcy5vd25lclZEb2N1bWVudCA9IG51bGw7XHJcbiAgICB0aGlzLnNjb3BlID0gbnVsbDtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5oYXNDaGlsZE5vZGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggIT09IDA7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuY2xlYXJDaGlsZE5vZGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgaWYgKGNoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG5cclxuICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZC5uZXh0U2libGluZyA9IGNoaWxkO1xyXG4gICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHRoaXMubGFzdENoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkO1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZSA9IGZ1bmN0aW9uIChyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcclxuICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcclxuICAgIH1cclxuICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcblxyXG4gICAgaWYocmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcclxuICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZDtcclxuICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0NoaWxkO1xyXG5cclxuICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBuZXdDaGlsZCk7XHJcbiAgICByZXR1cm4gbmV3Q2hpbGQ7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbiAocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XHJcbiAgICBpZiAocmVmQ2hpbGQubmV4dFNpYmxpbmcgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUocmVmQ2hpbGQubmV4dFNpYmxpbmcsIG5ld0NoaWxkKTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3ZlIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihjaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCl7XHJcbiAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gY2hpbGQubmV4dFNpYmxpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoY2hpbGQubmV4dFNpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgIGNoaWxkLm5leHRTaWJsaW5nLnByZXZpb3VzU2libGluZyA9IGNoaWxkLnByZXZpb3VzU2libGluZztcclxuICAgIH1cclxuXHJcbiAgICBpZihpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGluZGV4ID09PSAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtMSkpe1xyXG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkLiRjbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgIHJldHVybiBjaGlsZDtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5yZXBsYWNlQ2hpbGQgPSBmdW5jdGlvbiAocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XHJcbiAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XHJcbiAgICB9XHJcbiAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG4gICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZC5uZXh0U2libGluZztcclxuXHJcbiAgICBpZiAodGhpcy5maXJzdENoaWxkID09PSByZWZDaGlsZCkge1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxhc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZkNoaWxkLiRjbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcclxuICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdDaGlsZCk7XHJcbiAgICByZXR1cm4gbmV3Q2hpbGQ7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLmNvbXBpbGUob3B0aW9ucyk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5kaXJlY3RpdmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGQuZGlyZWN0aXZlcygpO1xyXG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoaXRlbSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuZ2V0RGlyZWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLmxpbmsgPSBmdW5jdGlvbiAoc2NvcGUpIHtcclxuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLmxpbmsoc2NvcGUpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuYWZ0ZXJMaW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQuYWZ0ZXJMaW5rKCk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5kZXRlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5oYXNDaGFuZ2UoKSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuaGFzQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLiRkZXN0cm95KCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH07XHJcbiIsImltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHkvbWVzc2FnZSc7XHJcbmltcG9ydCB7IEdldFByb3BlcnR5SGFuZGxlciB9IGZyb20gJy4uL3V0aWxpdHkvaGFuZGxlcic7XHJcbmltcG9ydCB7IGNvbXB1dGUgfSBmcm9tICcuLi9wYXJzZXInO1xyXG5cclxuZnVuY3Rpb24gRXhwTm9kZSh0ZXh0KSB7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB0aGlzLm9sZFZhbHVlID0gbnVsbDtcclxufVxyXG5cclxuRXhwTm9kZS5wcm90b3R5cGUuZ2V0UHJvcHMgPSBmdW5jdGlvbihzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHByb3BzID0gW107XHJcbiAgICBjb21wdXRlKHRoaXMudGV4dCwgbmV3IFByb3h5KHNjb3BlLCBuZXcgR2V0UHJvcGVydHlIYW5kbGVyKHByb3BzLCAnJywgdHJ1ZSkpLCBvcHRpb25zKTtcclxuICAgIHJldHVybiBwcm9wcztcclxufTtcclxuXHJcbkV4cE5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHRoaXMub2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgdGhpcy52YWx1ZSA9IGNvbXB1dGUodGhpcy50ZXh0LCBzY29wZSwgb3B0aW9ucyk7XHJcbn07XHJcblxyXG5FeHBOb2RlLnByb3RvdHlwZS5kZXRlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZSAhPT0gdGhpcy5vbGRWYWx1ZTtcclxufTtcclxuXHJcbkV4cE5vZGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpe1xyXG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB0aGlzLm9sZFZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMucHJvcHMgPSBudWxsO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gQmluZGluZygpIHtcclxuICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgdGhpcy50ZXh0ID0gJyc7XHJcbiAgICB0aGlzLmlzRXhwID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlZ21lbnRzID0gW107XHJcbiAgICB0aGlzLnJpZ2h0U3RyID0gJyc7XHJcbiAgICB0aGlzLm91dHB1dCA9IGZhbHNlO1xyXG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB0aGlzLmNoYW5nZSA9IG5ldyBNZXNzZW5nZXIoKTtcclxufVxyXG5cclxuQmluZGluZy5wcm90b3R5cGUuc2V0U2NvcGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIHRoaXMuc2NvcGUgPSB2YWx1ZTtcclxufTtcclxuXHJcbkJpbmRpbmcucHJvdG90eXBlLnNldE91dHB1dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgdGhpcy5vdXRwdXQgPSB2YWx1ZTtcclxufTtcclxuXHJcbkJpbmRpbmcucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAodGV4dCwgaXNFeHApIHtcclxuICAgIGlmKHRleHQgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5pc0V4cCA9IGlzRXhwO1xyXG5cclxuICAgIGlmIChpc0V4cCkge1xyXG4gICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIGV4cDogbmV3IEV4cE5vZGUodGV4dCksXHJcbiAgICAgICAgICAgIGxlZnRTdHI6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwYXR0ZXJuID0gL3t7KFtefV0qKX19L2c7XHJcbiAgICB2YXIgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XHJcbiAgICB2YXIgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XHJcblxyXG4gICAgd2hpbGUgKG1hdGNoICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goe1xyXG4gICAgICAgICAgICBpbmRleDogbWF0Y2guaW5kZXgsXHJcbiAgICAgICAgICAgIGV4cDogbmV3IEV4cE5vZGUobWF0Y2hbMV0pLFxyXG4gICAgICAgICAgICBsZWZ0U3RyOiB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xyXG4gICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNlZ21lbnRzLmxlbmd0aCA+IDAgJiYgbGFzdEluZGV4IDwgdGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnJpZ2h0U3RyID0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcclxuICAgIH1cclxufTtcclxuXHJcbkJpbmRpbmcucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGlmICh0aGlzLnNlZ21lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnRleHQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5pc0V4cCAmJiB0aGlzLnNlZ21lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzWzBdLmV4cC5jb21wdXRlKHNlbGYuc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5zZWdtZW50c1swXS5leHAudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdGV4dCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgICAgIHNlZ21lbnQuZXhwLmNvbXB1dGUoc2VsZi5zY29wZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IChzZWdtZW50LmxlZnRTdHIgKyBzZWdtZW50LmV4cC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGV4dCArIHRoaXMucmlnaHRTdHI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG59O1xyXG5cclxuQmluZGluZy5wcm90b3R5cGUud2F0Y2hQcm9wcyA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgaWYgKHRoaXMub3V0cHV0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcywgcHJvcHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcclxuICAgICAgICBwcm9wcyA9IHByb3BzLmNvbmNhdChzZWdtZW50LmV4cC5nZXRQcm9wcyhzZWxmLnNjb3BlKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgc2VsZi5zY29wZS4kd2F0Y2gocHJvcCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmNoYW5nZS5maXJlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoYWN0aW9uICE9IG51bGwpIHtcclxuICAgICAgICBzZWxmLmNoYW5nZS5vbihhY3Rpb24pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQmluZGluZy5wcm90b3R5cGUuZGV0ZWN0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGlmICh0aGlzLm91dHB1dCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuY29tcHV0ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuc2VnbWVudHMuc29tZShmdW5jdGlvbiAoc2VnbWVudCkge1xyXG4gICAgICAgIHJldHVybiBzZWdtZW50LmV4cC5kZXRlY3Qoc2VsZi5zY29wZSwgb3B0aW9ucyk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbkJpbmRpbmcucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24oc2VnbWVudCl7XHJcbiAgICAgICAgc2VnbWVudC5leHAuZGVzdHJveSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNjb3BlID0gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCB7IEJpbmRpbmcgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcblxyXG51dGlscy5pbmhlcml0KENEYXRhU2VjdGlvbk5vZGUsIFZOb2RlKTtcclxuLy8gQ0RhdGFTZWN0aW9uIG5vZGVcclxuZnVuY3Rpb24gQ0RhdGFTZWN0aW9uTm9kZSgpIHtcclxuICAgIENEYXRhU2VjdGlvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBWTm9kZVR5cGUuY2RhdGFTZWN0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0IHsgQ0RhdGFTZWN0aW9uTm9kZSB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuXHJcbnV0aWxzLmluaGVyaXQoQ29tbWVudE5vZGUsIFZOb2RlKTtcclxuLy8gY29tbWVudCBub2RlXHJcbmZ1bmN0aW9uIENvbW1lbnROb2RlKCkge1xyXG4gICAgQ29tbWVudE5vZGUuc3VwZXIuY2FsbCh0aGlzLCBWTm9kZVR5cGUuY29tbWVudCwgJyNjb21tZW50Jyk7XHJcbn1cclxuXHJcbkNvbW1lbnROb2RlLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5ub2RlVmFsdWUpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgQ29tbWVudE5vZGUgfTtcclxuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xyXG5cclxudXRpbHMuaW5oZXJpdChDdXN0b21Ob2RlLCBWTm9kZSk7XHJcbi8vIGN1c3RvbSBub2RlXHJcbmZ1bmN0aW9uIEN1c3RvbU5vZGUobmFtZSwgbGlua2VyKSB7XHJcbiAgICBDdXN0b21Ob2RlLnN1cGVyLmNhbGwodGhpcywgVk5vZGVUeXBlLmN1c3RvbSwgbmFtZSk7XHJcbiAgICB0aGlzLmxpbmtlciA9IGxpbmtlcjtcclxufVxyXG5cclxuQ3VzdG9tTm9kZS5wcm90b3R5cGUubGluayA9IGZ1bmN0aW9uKHNjb3BlKSB7XHJcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICByZXR1cm4gdGhpcy5saW5rZXIuY2FsbCh0aGlzLCBzY29wZSk7XHJcbn07XHJcblxyXG5DdXN0b21Ob2RlLnByb3RvdHlwZS5hZnRlckxpbmsgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25JbnNlcnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25JbnNlcnQuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTtcclxuXHJcbkN1c3RvbU5vZGUucHJvdG90eXBlLmRldGVjdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRldGVjdCkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbkRldGVjdC5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQ3VzdG9tTm9kZS5wcm90b3R5cGUuaGFzQ2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uSGFzQ2hhbmdlKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uSGFzQ2hhbmdlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5DdXN0b21Ob2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25VcGRhdGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25VcGRhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTtcclxuXHJcbkN1c3RvbU5vZGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy4kZGVzdHJveSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgQ3VzdG9tTm9kZSB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuXHJcbnV0aWxzLmluaGVyaXQoRG9jdW1lbnRUeXBlTm9kZSwgVk5vZGUpO1xyXG4vLyBkb2N1bWVudCB0eXBlIG5vZGVcclxuZnVuY3Rpb24gRG9jdW1lbnRUeXBlTm9kZSgpIHtcclxuICAgIERvY3VtZW50VHlwZU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBWTm9kZVR5cGUuZG9jdW1lbnRUeXBlKTtcclxufVxyXG5cclxuZXhwb3J0IHsgRG9jdW1lbnRUeXBlTm9kZSB9O1xyXG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcblxyXG51dGlscy5pbmhlcml0KERvY3VtZW50Tm9kZSwgVk5vZGUpO1xyXG4vLyBkb2N1bWVudCBub2RlXHJcbmZ1bmN0aW9uIERvY3VtZW50Tm9kZSgpIHtcclxuICAgIERvY3VtZW50Tm9kZS5zdXBlci5jYWxsKHRoaXMsIFZOb2RlVHlwZS5kb2N1bWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IERvY3VtZW50Tm9kZSB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBlbGVVdGlscyBmcm9tICcuLi91dGlsaXR5L2VsZS11dGlscyc7XHJcbmltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgeyBDdXN0b21Ob2RlIH0gZnJvbSAnLi9jdXN0b20nO1xyXG5pbXBvcnQgeyBBdHRyTm9kZSB9IGZyb20gJy4vYXR0cmlidXRlJztcclxuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICcuLi9wYXJzZXInO1xyXG5cclxudXRpbHMuaW5oZXJpdChFbGVtZW50Tm9kZSwgVk5vZGUpO1xyXG4vLyBlbGVtZW50IG5vZGVcclxuZnVuY3Rpb24gRWxlbWVudE5vZGUobmFtZSkge1xyXG4gICAgRWxlbWVudE5vZGUuc3VwZXIuY2FsbCh0aGlzLCBWTm9kZVR5cGUuZWxlbWVudCwgbmFtZSk7XHJcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSBbXTtcclxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XHJcbiAgICB0aGlzLnNlbGZDbG9zZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY29tcGlsZU9wdGlvbnMgPSBudWxsO1xyXG4gICAgdGhpcy5pc0NvbXBvbmVudCA9IGZhbHNlO1xyXG59XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuJHB1c2hBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgYXR0ci5vd25lclZFbGVtZW50ID0gdGhpcztcclxuICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLmhhc0F0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aCAhPT0gMDtcclxufTtcclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgdmFyIHRhcmdldCwgbWF0Y2hlcyA9IHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRhcmdldCA9IG1hdGNoZXNbMF07XHJcbiAgICAgICAgdGFyZ2V0LnNldFZhbHVlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRhcmdldCA9IG5ldyBBdHRyTm9kZShrZXksIHZhbHVlKTtcclxuICAgICAgICB0YXJnZXQub3duZXJWRWxlbWVudCA9IHRoaXM7XHJcbiAgICAgICAgdGFyZ2V0LmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hdHRyaWJ1dGVzLnB1c2goYXR0cik7XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufTtcclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICB2YXIgdGFyZ2V0ID0gW10sIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGlmIChrZXkgaW5zdGFuY2VvZiBBdHRyTm9kZSkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYXR0cmlidXRlcy5pbmRleE9mKGtleSk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBzZWxmLmF0dHJpYnV0ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XHJcbiAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gc2VsZi5hdHRyaWJ1dGVzLmluZGV4T2YobWF0Y2gpO1xyXG4gICAgICAgICAgICBtYXRjaC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHNlbGYuYXR0cmlidXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0YXJnZXQubGVuZ3RoID4gMCA/IHRhcmdldFswXSA6IG51bGw7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuYXBwZW5kQXR0cmlidXRlID0gZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgIGlmIChhdHRyLm93bmVyVkVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkN1cnJlbnQgYXR0cmlidXRlIGlzIG5vdCBuZXchXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHIub3duZXJWRWxlbWVudCA9IHRoaXM7XHJcbiAgICBhdHRyLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaChhdHRyKTtcclxuICAgIHJldHVybiBhdHRyO1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLmdldE91dGVyVHBsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGF0dHJUcGwgPSAnJywgY2hpbGRUcGwgPSAnJztcclxuXHJcbiAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIGF0dHJUcGwgKz0gJyAnO1xyXG4gICAgICAgIGF0dHJUcGwgKz0gYXR0ci5nZXRPdXRlclRwbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGRUcGwgKz0gY2hpbGQuZ2V0T3V0ZXJUcGwoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciB0cGwgPSAnPCcgKyB0aGlzLm5vZGVOYW1lICsgYXR0clRwbCArICc+JyArIGNoaWxkVHBsO1xyXG5cclxuICAgIGlmKCF0aGlzLnNlbGZDbG9zZWQpe1xyXG4gICAgICAgIHRwbCArPSAoJzwvJyArIHRoaXMubm9kZU5hbWUgKyAnPicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cGw7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuZ2V0SW5uZXJUcGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2hpbGRUcGwgPSAnJztcclxuXHJcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZFRwbCArPSBjaGlsZC5nZXRPdXRlclRwbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkVHBsO1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLnNldE91dGVyVHBsID0gZnVuY3Rpb24gKHRwbCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcGFyc2UodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgIHNlbGYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZiwgdm5vZGUpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZik7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuc2V0SW5uZXJUcGwgPSBmdW5jdGlvbiAodHBsKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmNsZWFyQ2hpbGROb2RlcygpO1xyXG4gICAgcGFyc2UodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgIHNlbGYuYXBwZW5kQ2hpbGQodm5vZGUpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuZ2V0RGlyZWN0aXZlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG5cclxuICAgIHRoaXMuYXR0cmlidXRlcy5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gYXR0ci5kaXJlY3RpdmVzKCk7XHJcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChpdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uJCRrZXkgPT09IGtleTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgdGhpcy5jb21waWxlT3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIGF0dHIuY29tcGlsZShvcHRpb25zKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pc0NvbXBvbmVudCA9IG9wdGlvbnMuY29udGFpbnNDb21wb25lbnQodGhpcy5ub2RlTmFtZSk7XHJcbiAgICBpZiAoIXRoaXMuaXNDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuY29tcGlsZShvcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS5kaXJlY3RpdmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG5cclxuICAgIHRoaXMuYXR0cmlidXRlcy5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gYXR0ci5kaXJlY3RpdmVzKCk7XHJcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChpdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKHRoaXMuY29tcG9uZW50ID09IG51bGwpe1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGlsZC5kaXJlY3RpdmVzKCk7XHJcbiAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUubGluayA9IGZ1bmN0aW9uIChzY29wZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHNlbGYuc2NvcGUgPSBzY29wZTtcclxuICAgIHNlbGYuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2VsZi5ub2RlTmFtZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IHNjb3BlLiRjcmVhdGVDb21wb25lbnQodGhpcy5ub2RlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQuJGJpbmRWTm9kZSh0aGlzKTtcclxuICAgICAgICBzZWxmLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICBhdHRyLmxpbmsoc2NvcGUsIHNlbGYuZWxlbWVudCwgc2VsZi5jb21wb25lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGYuY29tcG9uZW50LiRtb3VudChzZWxmLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgYXR0ci5saW5rKHNjb3BlLCBzZWxmLmVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGYuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBzZWxmLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQubGluayhzY29wZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZWxmLmVsZW1lbnQ7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuYWZ0ZXJMaW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICBhdHRyLmFmdGVyTGluaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuYWZ0ZXJMaW5rKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuZGV0ZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICBhdHRyLmRldGVjdCgpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5kZXRlY3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKGlzRnJvbUNvbXBvbmVudCkge1xyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihpc0Zyb21Db21wb25lbnQpe1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIGF0dHIuZGVzdHJveSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnJlbW92ZURvbUVsZW1lbnQoKTtcclxuICAgIHRoaXMuY29tcGlsZU9wdGlvbnMgPSBudWxsO1xyXG4gICAgdGhpcy4kZGVzdHJveSgpO1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZih0aGlzLmNvbXBvbmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQuJGRpc3Bvc2UodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlzcG9zZSgpO1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLmdldERvbUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLnJlbW92ZURvbUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZih0aGlzLmVsZW1lbnQgIT0gbnVsbCl7XHJcbiAgICAgICAgZWxlVXRpbHMucmVtb3ZlTm9kZSh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbihuYW1lKXtcclxuICAgIHJldHVybiBuZXcgRWxlbWVudE5vZGUobmFtZSk7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuY3JlYXRlQXR0ciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IEF0dHJOb2RlKG5hbWUpO1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLmNyZWF0ZUN1c3RvbSA9IGZ1bmN0aW9uIChuYW1lLCBsaW5rZXIpIHtcclxuICAgIHJldHVybiBuZXcgQ3VzdG9tTm9kZShuYW1lLCBsaW5rZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgRWxlbWVudE5vZGUgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcblxyXG51dGlscy5pbmhlcml0KERvY3VtZW50RnJhZ21lbnROb2RlLCBWTm9kZSk7XHJcbi8vIGRvY3VtZW50IGZyYWdtZW50IG5vZGVcclxuZnVuY3Rpb24gRG9jdW1lbnRGcmFnbWVudE5vZGUoKSB7XHJcbiAgICBEb2N1bWVudEZyYWdtZW50Tm9kZS5zdXBlci5jYWxsKHRoaXMsIFZOb2RlVHlwZS5kb2N1bWVudEZyYWdtZW50LCAnI2RvY3VtZW50LWZyYWdtZW50Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IERvY3VtZW50RnJhZ21lbnROb2RlIH07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vYmFzZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYXR0cmlidXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9jZGF0YXNlY3Rpb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbW1lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2N1c3RvbSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZG9jdHlwZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZG9jdW1lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ZyYWdtZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi9iaW5kaW5nJztcclxuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCAqIGFzIGVsZVV0aWxzIGZyb20gJy4uL3V0aWxpdHkvZWxlLXV0aWxzJztcclxuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xyXG5cclxudXRpbHMuaW5oZXJpdChUZXh0Tm9kZSwgVk5vZGUpO1xyXG4vLyB0ZXh0IG5vZGVcclxuZnVuY3Rpb24gVGV4dE5vZGUoKSB7XHJcbiAgICBUZXh0Tm9kZS5zdXBlci5jYWxsKHRoaXMsIFZOb2RlVHlwZS50ZXh0LCAnI3RleHQnKTtcclxuICAgIHRoaXMuYmluZGluZyA9IG5ldyBCaW5kaW5nKCk7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG59XHJcblxyXG5UZXh0Tm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuYmluZGluZy5iaW5kKHRoaXMubm9kZVZhbHVlKTtcclxufTtcclxuXHJcblRleHROb2RlLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gKHNjb3BlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5iaW5kaW5nLnNldFNjb3BlKHNjb3BlKTtcclxuXHJcbiAgICB0aGlzLmJpbmRpbmcud2F0Y2hQcm9wcyhmdW5jdGlvbigpe1xyXG4gICAgICAgIHNlbGYuZGV0ZWN0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XHJcbn07XHJcblxyXG5UZXh0Tm9kZS5wcm90b3R5cGUuaGFzQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmluZGluZy5kZXRlY3QoKTtcclxufTtcclxuXHJcblRleHROb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBlbGVVdGlscy5yZXBsYWNlTm9kZSh0aGlzLmVsZW1lbnQsIHRoaXMucmVuZGVyKHRoaXMuYmluZGluZy52YWx1ZSkpO1xyXG59O1xyXG5cclxuVGV4dE5vZGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxufTtcclxuXHJcblRleHROb2RlLnByb3RvdHlwZS5nZXRPdXRlclRwbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcclxufTtcclxuXHJcblRleHROb2RlLnByb3RvdHlwZS5nZXRJbm5lclRwbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcclxufTtcclxuXHJcblRleHROb2RlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5iaW5kaW5nLmRlc3Ryb3koKTtcclxuICAgIHRoaXMuYmluZGluZyA9IG51bGw7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy4kZGVzdHJveSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgVGV4dE5vZGUgfTsiLCJleHBvcnQgKiBmcm9tICcuL3V0aWxpdHknO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZpZXcnO1xyXG5leHBvcnQgKiBmcm9tICcuL3BhcnNlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW5uZXInOyIsImltcG9ydCB7IGRpcmVjdGl2ZSwgbmFtZXNwYWNlLCBjb21wb25lbnQgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHtjb21wdXRlICwgY29tcGlsZX0gZnJvbSAnLi4vcGFyc2VyJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XHJcblxyXG52YXIgc2luZSA9ICdzaW5lJztcclxuXHJcbmZ1bmN0aW9uIG1ha2VBdHRyU2V0dGVyKGF0dHJOYW1lKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIGlmIChiaW5kaW5nLmNvbXB1dGUoKSkge1xyXG4gICAgICAgICAgICBpZiAoIWVsZS5oYXNBdHRyaWJ1dGUoYXR0ck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUuaGFzQXR0cmlidXRlKGF0dHJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5uYW1lc3BhY2Uoc2luZSkuZGlyZWN0aXZlKCduLXNlbGVjdGVkJywgbWFrZUF0dHJTZXR0ZXIoJ3NlbGVjdGVkJykpO1xyXG5cclxubmFtZXNwYWNlKHNpbmUpLmRpcmVjdGl2ZSgnbi1kaXNhYmxlZCcsIG1ha2VBdHRyU2V0dGVyKCdkaXNhYmxlZCcpKTtcclxuXHJcbm5hbWVzcGFjZShzaW5lKS5kaXJlY3RpdmUoJ24tY2hlY2tlZCcsIG1ha2VBdHRyU2V0dGVyKCdjaGVja2VkJykpO1xyXG5cclxubmFtZXNwYWNlKHNpbmUpLmRpcmVjdGl2ZSgnbi1yZWFkb25seScsIG1ha2VBdHRyU2V0dGVyKCdyZWFkb25seScpKTtcclxuXHJcbm5hbWVzcGFjZShzaW5lKS5kaXJlY3RpdmUoJ24tc3R5bGUnLCBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICB2YXIgdmFsdWUgPSBiaW5kaW5nLmNvbXB1dGUoKTtcclxuXHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgZWxlLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgZWxlLnN0eWxlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBlbGUuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJpbmRpbmcuc2NvcGUuJHdhdGNoUHJvcCh2YWx1ZSwgL1xcdysvaSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBvZiBuLXN0eWxlIHNob3VsZCBiZSBzdHJpbmcgb3Igb2JqZWN0Jyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubmFtZXNwYWNlKHNpbmUpLmRpcmVjdGl2ZSgnbi1zaG93JywgZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgZWxlLnN0eWxlLmRpc3BsYXkgPSBiaW5kaW5nLmNvbXB1dGUoKSA/ICdpbml0aWFsJyA6ICdub25lJztcclxufSk7XHJcblxyXG5uYW1lc3BhY2Uoc2luZSkuZGlyZWN0aXZlKCduLWhpZGUnLCBmdW5jdGlvbiAoZWwsIGJpbmRpbmcpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBiaW5kaW5nLmNvbXB1dGUoKSA/ICdub25lJyA6ICdpbml0aWFsJztcclxufSk7XHJcblxyXG5uYW1lc3BhY2Uoc2luZSkuZGlyZWN0aXZlKCduLWlmJywge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBjb21tZW50OiBudWxsXHJcbiAgICB9LFxyXG4gICAgb25JbnNlcnQ6IGZ1bmN0aW9uIChlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLWlmJyk7XHJcbiAgICAgICAgaWYgKCFiaW5kaW5nLmNvbXB1dGUoKSkge1xyXG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uVXBkYXRlOiBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgaWYgKGJpbmRpbmcuY29tcHV0ZSgpKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmNvbW1lbnQsIGVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gbnVsbDtcclxuICAgIH1cclxufSk7XHJcblxyXG5uYW1lc3BhY2Uoc2luZSkuZGlyZWN0aXZlKCduLXN3aXRjaCcsIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdmFsdWU6IG51bGxcclxuICAgIH0sXHJcbiAgICBvbkluc2VydDogZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBiaW5kaW5nLmNvbXB1dGUoKTtcclxuICAgIH0sXHJcbiAgICBvblVwZGF0ZTogZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBiaW5kaW5nLmNvbXB1dGUoKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5uYW1lc3BhY2Uoc2luZSkuZGlyZWN0aXZlKCduLXN3aXRjaC1kZWZhdWx0Jywge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBhdHRyTm9kZTogbnVsbCxcclxuICAgICAgICBjb21tZW50OiBudWxsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGlzTWF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gdHJ1ZSwgdkVsZSA9IHRoaXMuYXR0ck5vZGUub3duZXJWRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh2RWxlLnByZXZpb3VzU2libGluZyAhPSBudWxsICYmIG1hdGNoKXtcclxuICAgICAgICAgICAgICAgIHZhciB3aGVuRGlyID0gdkVsZS5wcmV2aW91c1NpYmxpbmcuZ2V0RGlyZWN0aXZlKCduLXN3aXRjaC13aGVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdkVsZSA9IHZFbGUucHJldmlvdXNTaWJsaW5nO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCF3aGVuRGlyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1hdGNoID0gIXdoZW5EaXJbMF0uaXNNYXRjaDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNvbXBpbGU6IGZ1bmN0aW9uIChhdHRyTm9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBhdHRyTm9kZTtcclxuICAgIH0sXHJcbiAgICBvbkluc2VydDogZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ24tc3dpdGNoLWRlZmF1bHQnKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTWF0Y2goKSkge1xyXG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRGV0ZWN0OiBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNYXRjaCgpKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmNvbW1lbnQsIGVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyTm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gbnVsbDtcclxuICAgIH1cclxufSk7XHJcblxyXG5uYW1lc3BhY2Uoc2luZSkuZGlyZWN0aXZlKCduLXN3aXRjaC13aGVuJywge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBpc01hdGNoOiBmYWxzZSxcclxuICAgICAgICBhdHRyTm9kZTogbnVsbCxcclxuICAgICAgICBjb21tZW50OiBudWxsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHVwZGF0ZUlzTWF0Y2g6IGZ1bmN0aW9uIChlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICAgICAgdmFyIHZFbGUgPSB0aGlzLmF0dHJOb2RlLm93bmVyVkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZhciBzd2l0Y2hEaXIgPSB2RWxlLnBhcmVudE5vZGUuZ2V0RGlyZWN0aXZlKCduLXN3aXRjaCcpO1xyXG5cclxuICAgICAgICAgICAgaWYoIXN3aXRjaERpci5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlIG4tc3dpdGNoIGRpcmVjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzTWF0Y2ggPSBiaW5kaW5nLmNvbXB1dGUoKSA9PT0gc3dpdGNoRGlyWzBdLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNvbXBpbGU6IGZ1bmN0aW9uIChhdHRyTm9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBhdHRyTm9kZTtcclxuICAgIH0sXHJcbiAgICBvbkluc2VydDogZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ24tc3dpdGNoLXdoZW4nKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUlzTWF0Y2goZWxlLCBiaW5kaW5nKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTWF0Y2gpIHtcclxuICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoZWxlLCB0aGlzLmNvbW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkRldGVjdDogZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXNNYXRjaChlbGUsIGJpbmRpbmcpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc01hdGNoKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmNvbW1lbnQsIGVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyTm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gbnVsbDtcclxuICAgIH1cclxufSk7XHJcblxyXG5uYW1lc3BhY2Uoc2luZSkuZGlyZWN0aXZlKCduLWJpbmQnLCBmdW5jdGlvbihlbGUsIGJpbmRpbmcpe1xyXG4gICAgZWxlLmlubmVyVGV4dCA9IGJpbmRpbmcuY29tcHV0ZSgpO1xyXG59KTtcclxuXHJcbm5hbWVzcGFjZShzaW5lKS5kaXJlY3RpdmUoJ24tbW9kZWwnLCB7XHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nLCBjb20pIHtcclxuICAgICAgICAgICAgaWYgKGNvbSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBlbGUudmFsdWUgPSBiaW5kaW5nLmNvbXB1dGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbS52YWx1ZSA9IGJpbmRpbmcuY29tcHV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uSW5zZXJ0OiBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nLCBjb20pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShlbGUsIGJpbmRpbmcsIGNvbSk7XHJcblxyXG4gICAgICAgIGlmIChjb20gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGJpbmRpbmcuc2NvcGUuJHNldEF0dHIoYmluZGluZy50ZXh0LCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzTWVzc2VuZ2VyKGNvbS5jaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICBjb20uY2hhbmdlLm9uKGZ1bmN0aW9uIChlLCBhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZy5zY29wZS4kc2V0QXR0cihiaW5kaW5nLnRleHQsIGFyZ3MubmV3dmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb2VudCAnICsgY29tLiQka2V5ICsgJ211c3QgZGVmaW5lIFtjaGFuZ2VdIGV2ZW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uVXBkYXRlOiBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nLCBjb20pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShlbGUsIGJpbmRpbmcsIGNvbSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubmFtZXNwYWNlKHNpbmUpLmRpcmVjdGl2ZSgnbi1yZXBlYXQnLCB7XHJcbiAgICBvbkNvbXBpbGU6IGZ1bmN0aW9uIChhdHRyTm9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBhcmcgPSBhdHRyTm9kZS5ub2RlVmFsdWU7XHJcbiAgICAgICAgdmFyIGVsZU5vZGUgPSBhdHRyTm9kZS5vd25lclZFbGVtZW50O1xyXG4gICAgICAgIHZhciBwYXR0ZXJuID0gL14oXFx3KylcXHMraW5cXHMrKFxcdyspJC9pO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBwYXR0ZXJuLmV4ZWMoYXJnKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm4tcmVwZWF0OiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGl0ZW1FeHAgPSByZXN1bHRbMV07XHJcbiAgICAgICAgdmFyIGl0ZW1zRXhwID0gcmVzdWx0WzJdO1xyXG5cclxuICAgICAgICBlbGVOb2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyTm9kZSk7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50U2NvcGUsIGN1cnJlbnRJdGVtcywgc3RhcnQsIGVuZCwgUmVlYXRJdGVtLCByZXBlYXRJdGVtcyA9IFtdO1xyXG4gICAgICAgIHZhciB0cGwgPSBlbGVOb2RlLmdldE91dGVyVHBsKCk7XHJcbiAgICAgICAgdmFyIGN1c3RvbSA9IGVsZU5vZGUuY3JlYXRlQ3VzdG9tKCduLXJlcGVhdCcsIGZ1bmN0aW9uIChzY29wZSkge1xyXG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTY29wZSA9IHNjb3BlO1xyXG4gICAgICAgICAgICBSZWVhdEl0ZW0gPSBjcmVhdGVSZXBlYXRJdGVtKCk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRJdGVtcyhjb21wdXRlKGl0ZW1zRXhwLCBjdXJyZW50U2NvcGUpKTtcclxuICAgICAgICAgICAgc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdzdGFydDogbi1yZXBlYXQnKTtcclxuICAgICAgICAgICAgZW5kID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZW5kOiBuLXJlcGVhdCcpO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdGFydCk7XHJcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGVuZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZWxlTm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbGVOb2RlLCBjdXN0b20pO1xyXG4gICAgICAgIGVsZU5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICBjdXN0b20ub25JbnNlcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJ1aWxkKGN1cnJlbnRJdGVtcyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY3VzdG9tLm9uRGV0ZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBjb21wdXRlKGl0ZW1zRXhwLCBjdXJyZW50U2NvcGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtcyAhPT0gaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBidWlsZChjdXJyZW50SXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVwZWF0SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRTY29wZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkU2NvcGUuJGRldGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjdXN0b20ub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXBlYXRJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZFNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZFNjb3BlLiRkZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXBlYXRJdGVtcyA9IG51bGw7XHJcbiAgICAgICAgICAgIGVsZU5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICBjdXJyZW50U2NvcGUgPSBudWxsO1xyXG4gICAgICAgICAgICBjdXJyZW50SXRlbXMgPSBudWxsO1xyXG4gICAgICAgICAgICBzdGFydCA9IG51bGw7XHJcbiAgICAgICAgICAgIGVuZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1c3RvbSA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUmVwZWF0SXRlbSgpe1xyXG4gICAgICAgICAgICB2YXIgcmVwZWF0SXRlbUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIGxvY2FsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRwbCxcclxuICAgICAgICAgICAgICAgIHByb3BzOiB7fSxcclxuICAgICAgICAgICAgICAgIHN1cGVySW5zdGFuY2U6IGN1cnJlbnRTY29wZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVwZWF0SXRlbUNvbmZpZy5wcm9wc1tpdGVtRXhwXSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50KCduLXJlcGVhdC1pdGVtJywgcmVwZWF0SXRlbUNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRDdXJyZW50SXRlbXModmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SXRlbXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50U2NvcGUuJHdhdGNoUHJvcChjdXJyZW50SXRlbXMsICdsZW5ndGgnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBidWlsZChjdXJyZW50SXRlbXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkKGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgICAgdmFyIG5ld1JlcGVhdEl0ZW1zID0gW107XHJcblxyXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKGl0ZW1zLCBmdW5jdGlvbiAoa2V5LCBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVwZWF0SXRlbSA9IGdldFJlcGVhdEl0ZW0oaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcGVhdEl0ZW0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdEl0ZW0gPSBjdXJyZW50U2NvcGUuJGNyZWF0ZUNvbXBvbmVudChSZWVhdEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdEl0ZW1baXRlbUV4cF0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHJlcGVhdEl0ZW0uJHJlbmRlcih0cnVlKSk7XHJcbiAgICAgICAgICAgICAgICBuZXdSZXBlYXRJdGVtcy5wdXNoKHJlcGVhdEl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXBlYXRJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXBlYXRJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXBlYXRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0SXRlbS4kZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcGVhdEl0ZW1zID0gbmV3UmVwZWF0SXRlbXM7XHJcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZU5vZGVCZXR3ZWVuKHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgICAgICBlbmQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIGVuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRSZXBlYXRJdGVtKGRhdGFJdGVtKXtcclxuICAgICAgICAgICAgdmFyIGZpbHRlcnMgPSByZXBlYXRJdGVtcy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVtpdGVtRXhwXSA9PT0gZGF0YUl0ZW07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYoZmlsdGVycy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBmaWx0ZXJzWzBdO1xyXG5cclxuICAgICAgICAgICAgcmVwZWF0SXRlbXMgPSByZXBlYXRJdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtW2l0ZW1FeHBdICE9PSBkYXRhSXRlbTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5uYW1lc3BhY2Uoc2luZSkuZGlyZWN0aXZlKCduLWVtYmVkJywge1xyXG4gICAgb25Db21waWxlOiBmdW5jdGlvbiAoYXR0ck5vZGUsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgZW1iZWRUcGwgPSBvcHRpb25zLmdldEVtYmVkVHBsKCk7XHJcbiAgICAgICAgaWYoZW1iZWRUcGwpe1xyXG4gICAgICAgICAgICBhdHRyTm9kZS5vd25lclZFbGVtZW50LnNldElubmVyVHBsKGVtYmVkVHBsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyIsImV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZXMnOyIsImltcG9ydCB7IHNlcnZpY2UsIG5hbWVzcGFjZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxudmFyIHNpbmUgPSAnc2luZSc7XHJcblxyXG5uYW1lc3BhY2Uoc2luZSkuc2VydmljZSgnJHRlbXBsYXRlQ2FjaGUnLCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHRwbENhY2hlOiB7fSxcclxuICAgICAgICBwcm9taXNlQ2FjaGU6IHt9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdldFRwbEJ5VXJsOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRwbENhY2hlW3VybF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc2VsZi50cGxDYWNoZVt1cmxdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvbWlzZUNhY2hlW3VybF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvbWlzZUNhY2hlW3VybF0gPSBheGlvcy5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb21pc2VDYWNoZVt1cmxdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRwbENhY2hlW3VybF0gPSByZXMuZGF0YSB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50cGxDYWNoZVt1cmxdO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21pc2VDYWNoZVt1cmxdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XHJcblxyXG51dGlscy5pbmhlcml0KEh0bWxMZXhlciwgTGV4ZXIpO1xyXG5mdW5jdGlvbiBIdG1sTGV4ZXIob3B0aW9ucykge1xyXG4gICAgSHRtbExleGVyLnN1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XHJcbn1cclxuXHJcbkh0bWxMZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XHJcbiAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxyXG4gICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyB8fFxyXG4gICAgICAgIGNoID09PSAnQCcgfHwgY2ggPT09ICc6JyB8fCBjaCA9PT0gJyonKTtcclxufTtcclxuXHJcbkh0bWxMZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCwgY3ApIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy0nIHx8IGNoID09PSAnLic7XHJcbn07XHJcblxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLmV4cGVjdFN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHZhciBudW0gPSBzdHIubGVuZ3RoO1xyXG4gICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDw9IHRoaXMudGV4dC5sZW5ndGgpID8gKHN0ciA9PT0gdGhpcy50ZXh0LnN1YnN0cih0aGlzLmluZGV4LCBudW0pKSA6IGZhbHNlO1xyXG59O1xyXG5cclxuLy8gaHRtbCBjb21tZW50IFwiPCEtLWNvbW1lbnQtLT5cIlxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRDb21tZW50ID0gZnVuY3Rpb24gKGJlZ2luLCBlbmQpIHtcclxuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcclxuICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgIHZhciByYXdTdHJpbmcgPSBiZWdpbjtcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZyhlbmQpKSB7XHJcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBlbmQ7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcsIHN0YXJ0KTtcclxufTtcclxuXHJcbi8vIGh0bWwgdGV4dFxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgIGlmICgoY2ggPT09ICc8JyAmJiAodGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB8fCBjaDIgPT09ICcvJykgfHwgdGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgIH1cclxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgdGV4dFRhZzogdHJ1ZVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBodG1sIHRhZ1xyXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRUYWcgPSBmdW5jdGlvbiAoYmVnaW4sIGVuZCwgY2xvc2luZywgZG9jdHlwZSkge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBiZWdpbiwgdGFnOiB0cnVlLCBjbG9zaW5nOiBjbG9zaW5nLCBiZWdpbjogdHJ1ZSwgZG9jdHlwZTogZG9jdHlwZSB9KTtcclxuICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xyXG4gICAgdGhpcy5yZWFkSWRlbnQoKTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG5cclxuICAgICAgICBpZiAoIWNsb3NpbmcpIHtcclxuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICB2YXIgc3RyID0gY2ggKyBjaDI7XHJcbiAgICAgICAgICAgIGlmIChzdHIgPT09ICcvJyArIGVuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBzdHIsIHRhZzogdHJ1ZSwgY2xvc2luZzogdHJ1ZSwgZW5kOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBzdHIubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaCA9PT0gZW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBlbmQsXHJcbiAgICAgICAgICAgICAgICB0YWc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjbG9zaW5nOiAhIWRvY3R5cGUgPyB0cnVlIDogY2xvc2luZyxcclxuICAgICAgICAgICAgICAgIGVuZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc9Jykge1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6ICc9JywgZXF1YWw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuSHRtbExleGVyLnByb3RvdHlwZS5sZXggPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgdGhpcy50b2tlbnMgPSBbXTtcclxuXHJcbiAgICB2YXIgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgdmFyIGNoMyA9IHRoaXMucGVlaygyKTtcclxuICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRDb21tZW50KCc8IS0tJywgJy0tPicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJzwnICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwnLCAnPicsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwvJykgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPC8nLCAnPicsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCFET0NUWVBFJykpIHtcclxuICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8IScsICc+JywgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0RPQ1RZUEUgaXMgbm90IGFsbG93ZWQnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbn07XHJcblxyXG5leHBvcnQgeyBIdG1sTGV4ZXIgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5pbXBvcnQgeyBEb2N1bWVudEZyYWdtZW50Tm9kZSwgQ29tbWVudE5vZGUsIFRleHROb2RlLCBEb2N1bWVudFR5cGVOb2RlLCBFbGVtZW50Tm9kZSwgQXR0ck5vZGUgfSBmcm9tICcuLi9jb3JlJztcclxuXHJcbnV0aWxzLmluaGVyaXQoSHRtbFBhcnNlciwgUGFyc2VyKTtcclxuZnVuY3Rpb24gSHRtbFBhcnNlcihsZXhlciwgb3B0aW9ucykge1xyXG4gICAgSHRtbFBhcnNlci5zdXBlci5jYWxsKHRoaXMsIGxleGVyLCBvcHRpb25zKTtcclxufVxyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcclxuXHJcbiAgICB2YXIgZmFyZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudE5vZGUoKTtcclxuICAgIHZhciBkb2N0eXBlLCBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4uZG9jdHlwZSkge1xyXG4gICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N0eXBlID0gdGhpcy5kb2N0eXBlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZChkb2N0eXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgb25seSBhbGxvdyBvbmVcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBpcyBub3QgYWxsb3dlZFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBDb21tZW50Tm9kZSgpO1xyXG4gICAgICAgICAgICBjb21tZW50Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgIGZhcmdtZW50LiRwdXNoQ2hpbGQoY29tbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFRleHROb2RlKCk7XHJcbiAgICAgICAgICAgIHRleHQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZCh0ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xyXG4gICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKHRoaXMuZWxlbWVudCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcImltcG9zc2libGVcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYXJnbWVudC4kYnVpbGRTaWJsaW5nKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhcmdtZW50LmNoaWxkTm9kZXM7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5kb2N0eXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgICB2YXIgZG9jVHlwZSA9IG5ldyBEb2N1bWVudFR5cGVOb2RlKCk7XHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgIGRvY1R5cGUubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hdHRycyhkb2NUeXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgZG9jVHlwZS5jaGlsZE5vZGVzLnB1c2goYXR0cik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRvY1R5cGU7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5lbGVtZW50ID0gZnVuY3Rpb24gKHApIHtcclxuICAgIHRoaXMubmV4dCgpO1xyXG4gICAgdmFyIGVsZSA9IG5ldyBFbGVtZW50Tm9kZSgpO1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICBlbGUubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dHJzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIGVsZS4kcHVzaEF0dHJpYnV0ZShhdHRyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSAnaW5wdXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudHMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlLiRwdXNoQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09IHRva2VuLnRleHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZTtcclxufTtcclxuXHJcbkh0bWxQYXJzZXIucHJvdG90eXBlLmNoaWxkRWxlbWVudHMgPSBmdW5jdGlvbiAocCkge1xyXG4gICAgdmFyIGVsZXMgPSBbXTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgQ29tbWVudE5vZGUoKTtcclxuICAgICAgICAgICAgY29tbWVudC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICBlbGVzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFRleHROb2RlKCk7XHJcbiAgICAgICAgICAgIHRleHQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgZWxlcy5wdXNoKHRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XHJcbiAgICAgICAgICAgIGVsZXMucHVzaCh0aGlzLmVsZW1lbnQocCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZXM7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5hdHRycyA9IGZ1bmN0aW9uIChwKSB7XHJcbiAgICB2YXIgYXR0cnMgPSBbXTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhdHRyID0gbmV3IEF0dHJOb2RlKCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIGF0dHIubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICBhdHRyLm9yZ05vZGVOYW1lID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5lcXVhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmNvbnN0YW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5ub2RlVmFsdWUgPSB0b2tlbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF0dHJzLnB1c2goYXR0cik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF0dHJzO1xyXG59O1xyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuaW5kZXgrKztcclxufTtcclxuXHJcbmV4cG9ydCB7IEh0bWxQYXJzZXIgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgaW5qZWN0b3IsIGlzQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XHJcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcclxuaW1wb3J0IHsgSHRtbExleGVyIH0gZnJvbSAnLi9odG1sLWxleGVyJztcclxuaW1wb3J0IHsgSHRtbFBhcnNlciB9IGZyb20gJy4vaHRtbC1wYXJzZXInO1xyXG5cclxudmFyIHBhcnNlT3B0aW9ucyA9IHtcclxuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlOiBmYWxzZSxcclxuICAgIGlzSWRlbnRpZmllclN0YXJ0OiBmYWxzZSxcclxuICAgIGxpdGVyYWxzOiB7XHJcbiAgICAgICAgZmFsc2U6IGZhbHNlLFxyXG4gICAgICAgIG51bGw6IG51bGwsXHJcbiAgICAgICAgdHJ1ZTogdHJ1ZSxcclxuICAgICAgICB1bmRlZmluZWQ6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gYm9vdHN0cmFwKGNvbXBvbmVudCwgaWRPckVsZW1lbnQpIHtcclxuICAgIHZhciBlbGVtZW50LCBlbGVtZW50SWQ7XHJcblxyXG4gICAgaWYgKGluamVjdG9yLmNvbnRhaW5zQ29tcG9uZW50KGNvbXBvbmVudCkpIHtcclxuICAgICAgICBpbmplY3Rvci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KS4kbW91bnQoaWRPckVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb21wb25lbnQnICsgY29tcG9uZW50ICsgJ2lzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlKGh0bWwpIHtcclxuICAgIHZhciBsZXhlciA9IG5ldyBIdG1sTGV4ZXIocGFyc2VPcHRpb25zKTtcclxuICAgIHZhciBwYXJzZXIgPSBuZXcgSHRtbFBhcnNlcihsZXhlciwgcGFyc2VPcHRpb25zKTtcclxuICAgIHJldHVybiBwYXJzZXIucGFyc2UoaHRtbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBpbGUoaHRtbCwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0ge1xyXG4gICAgICAgICAgICBnZXRFbWJlZFRwbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250YWluc0NvbXBvbmVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGVDb21wb25lbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250YWluc0RpcmVjdGl2ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGVEaXJlY3RpdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXR0aW5ncyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBvcHRpb25zKSxcclxuICAgICAgICBhc3ROb2RlcyA9IHBhcnNlKGh0bWwpO1xyXG5cclxuICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcclxuICAgICAgICBhc3ROb2RlLmNvbXBpbGUoc2V0dGluZ3MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoYXN0Tm9kZSkge1xyXG4gICAgICAgIGFzdE5vZGUuZGlyZWN0aXZlcygpLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICBkaXJlY3RpdmUuJGNvbXBpbGUoc2V0dGluZ3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzY29wZSkge1xyXG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICAgICAgc2NvcGUuJCR2bm9kZXMgPSBhc3ROb2RlcztcclxuXHJcbiAgICAgICAgaWYgKCFpc0NvbXBvbmVudChzY29wZSkpIHtcclxuICAgICAgICAgICAgc2NvcGUuJCRjaGlsZERpcmVjdGl2ZXMgPSBbXTtcclxuICAgICAgICAgICAgc2NvcGUuJCRjaGlsZENvbXBvbmVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLiRkZXRlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXN0Tm9kZS5kZXRlY3QoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXN0Tm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZS5saW5rKHNjb3BlKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5hZnRlckxpbmsoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZShleHAsIHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICBpZiAoZXhwID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBleHAgPSBleHAudHJpbSgpO1xyXG4gICAgaWYgKGV4cC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBleHAgPSBleHAucmVwbGFjZSgnJmd0OycsICc+JykucmVwbGFjZSgnJmx0OycsICc8Jyk7XHJcbiAgICB2YXIgbGV4ZXIgPSBuZXcgTGV4ZXIocGFyc2VPcHRpb25zKTtcclxuICAgIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKGxleGVyLCBwYXJzZU9wdGlvbnMpO1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBvcHRpb25zLmNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGluamVjdG9yLmNyZWF0ZUZpbHRlcihuYW1lKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGV4cCkuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGJvb3RzdHJhcCwgY29tcGlsZSwgY29tcHV0ZSwgcGFyc2UgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuXHJcbnZhciBPUEVSQVRPUlMgPSB7fTtcclxudmFyIG9wZXJhdG9yVGV4dCA9ICcrIC0gKiAvICUgPT09ICE9PSA9PSAhPSA8ID4gPD0gPj0gJiYgfHwgISA9IHwnO1xyXG52YXIgRVNDQVBFID0geyAnbic6ICdcXG4nLCAnZic6ICdcXGYnLCAncic6ICdcXHInLCAndCc6ICdcXHQnLCAndic6ICdcXHYnLCAnXFwnJzogJ1xcJycsICdcIic6ICdcIicgfTtcclxuXHJcbm9wZXJhdG9yVGV4dC5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKG9wZXJhdG9yKSB7XHJcbiAgICBPUEVSQVRPUlNbb3BlcmF0b3JdID0gdHJ1ZTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBMZXhlcihvcHRpb25zKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59XHJcblxyXG5MZXhlci5wcm90b3R5cGUubGV4ID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIHRoaXMudG9rZW5zID0gW107XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy4nICYmIHRoaXMuaXNOdW1iZXIodGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZE51bWJlcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXMoY2gsICcoKXt9W10uLDs6PycpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogY2ggfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGNoMiA9IGNoICsgdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgIHZhciBjaDMgPSBjaDIgKyB0aGlzLnBlZWsoMik7XHJcbiAgICAgICAgICAgIHZhciBvcDEgPSBPUEVSQVRPUlNbY2hdO1xyXG4gICAgICAgICAgICB2YXIgb3AyID0gT1BFUkFUT1JTW2NoMl07XHJcbiAgICAgICAgICAgIHZhciBvcDMgPSBPUEVSQVRPUlNbY2gzXTtcclxuICAgICAgICAgICAgaWYgKG9wMSB8fCBvcDIgfHwgb3AzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBvcDMgPyBjaDMgOiAob3AyID8gY2gyIDogY2gpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiB0b2tlbiwgb3BlcmF0b3I6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHRva2VuLmxlbmd0aDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXMgPSBmdW5jdGlvbiAoY2gsIGNoYXJzKSB7XHJcbiAgICByZXR1cm4gY2hhcnMuaW5kZXhPZihjaCkgIT09IC0xO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgdmFyIG51bSA9IGkgfHwgMTtcclxuICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8IHRoaXMudGV4dC5sZW5ndGgpID8gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4ICsgbnVtKSA6IGZhbHNlO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzTnVtYmVyID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICByZXR1cm4gKCcwJyA8PSBjaCAmJiBjaCA8PSAnOScpICYmIHR5cGVvZiBjaCA9PT0gJ3N0cmluZyc7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNXaGl0ZXNwYWNlID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICAvLyBJRSB0cmVhdHMgbm9uLWJyZWFraW5nIHNwYWNlIGFzIFxcdTAwQTBcclxuICAgIHJldHVybiAoY2ggPT09ICcgJyB8fCBjaCA9PT0gJ1xccicgfHwgY2ggPT09ICdcXHQnIHx8XHJcbiAgICAgICAgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnXFx2JyB8fCBjaCA9PT0gJ1xcdTAwQTAnKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5pc0lkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydCA/XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0KGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxyXG4gICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XHJcbiAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxyXG4gICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUgP1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZShjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcclxuICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gsIGNwKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuY29kZVBvaW50QXQgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIGlmIChjaC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gY2guY2hhckNvZGVBdCgwKTtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXHJcbiAgICByZXR1cm4gKGNoLmNoYXJDb2RlQXQoMCkgPDwgMTApICsgY2guY2hhckNvZGVBdCgxKSAtIDB4MzVGREMwMDtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5wZWVrTXVsdGljaGFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgIHZhciBwZWVrID0gdGhpcy5wZWVrKCk7XHJcbiAgICBpZiAoIXBlZWspIHtcclxuICAgICAgICByZXR1cm4gY2g7XHJcbiAgICB9XHJcbiAgICB2YXIgY3AxID0gY2guY2hhckNvZGVBdCgwKTtcclxuICAgIHZhciBjcDIgPSBwZWVrLmNoYXJDb2RlQXQoMCk7XHJcbiAgICBpZiAoY3AxID49IDB4RDgwMCAmJiBjcDEgPD0gMHhEQkZGICYmIGNwMiA+PSAweERDMDAgJiYgY3AyIDw9IDB4REZGRikge1xyXG4gICAgICAgIHJldHVybiBjaCArIHBlZWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2g7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNFeHBPcGVyYXRvciA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycgfHwgdGhpcy5pc051bWJlcihjaCkpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLnRocm93RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIHN0YXJ0LCBlbmQpIHtcclxuICAgIGVuZCA9IGVuZCB8fCB0aGlzLmluZGV4O1xyXG4gICAgdmFyIGNvbFN0ciA9ICh1dGlscy5pc0RlZmluZWQoc3RhcnQpID8gJ3MgJyArIHN0YXJ0ICsgJy0nICsgdGhpcy5pbmRleCArICcgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpICsgJ10nIDogJyAnICsgZW5kKTtcclxuICAgIHRocm93IG5ldyBFcnJvcignTGV4ZXIgRXJyb3I6ICcgKyBlcnJvciArICcgYXQgY29sdW1uJyArIGNvbFN0ciArICcgaW4gZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddLicpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLnJlYWROdW1iZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbnVtYmVyID0gJyc7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdXRpbHMubG93ZXJjYXNlKHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCkpO1xyXG4gICAgICAgIGlmIChjaCA9PT0gJy4nIHx8IHRoaXMuaXNOdW1iZXIoY2gpKSB7XHJcbiAgICAgICAgICAgIG51bWJlciArPSBjaDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcGVla0NoID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ2UnICYmIHRoaXMuaXNFeHBPcGVyYXRvcihwZWVrQ2gpKSB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxyXG4gICAgICAgICAgICAgICAgcGVla0NoICYmIHRoaXMuaXNOdW1iZXIocGVla0NoKSAmJlxyXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcclxuICAgICAgICAgICAgICAgICghcGVla0NoIHx8ICF0aGlzLmlzTnVtYmVyKHBlZWtDaCkpICYmXHJcbiAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgZXhwb25lbnQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgIH1cclxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICB0ZXh0OiBudW1iZXIsXHJcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgICAgICAgdmFsdWU6IE51bWJlcihudW1iZXIpXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5yZWFkSWRlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgdGhpcy5pbmRleCArPSB0aGlzLnBlZWtNdWx0aWNoYXIoKS5sZW5ndGg7XHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnBlZWtNdWx0aWNoYXIoKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNJZGVudGlmaWVyQ29udGludWUoY2gpKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4ICs9IGNoLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICB0ZXh0OiB0aGlzLnRleHQuc2xpY2Uoc3RhcnQsIHRoaXMuaW5kZXgpLFxyXG4gICAgICAgIGlkZW50aWZpZXI6IHRydWVcclxuICAgIH0pO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLnJlYWRTdHJpbmcgPSBmdW5jdGlvbiAocXVvdGUpIHtcclxuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB2YXIgc3RyaW5nID0gJyc7XHJcbiAgICB2YXIgcmF3U3RyaW5nID0gcXVvdGU7XHJcbiAgICB2YXIgZXNjYXBlID0gZmFsc2U7XHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIHJhd1N0cmluZyArPSBjaDtcclxuICAgICAgICBpZiAoZXNjYXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ3UnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGV4ID0gdGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoZXgubWF0Y2goL1tcXGRhLWZdezR9L2kpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIHVuaWNvZGUgZXNjYXBlIFtcXFxcdScgKyBoZXggKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSA0O1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4LCAxNikpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcCA9IEVTQ0FQRVtjaF07XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyAocmVwIHx8IGNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlc2NhcGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNoID09PSAnXFxcXCcpIHtcclxuICAgICAgICAgICAgZXNjYXBlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNoID09PSBxdW90ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBxdW90ZScsIHN0YXJ0KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IExleGVyIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aXNGaWx0ZXJ9IGZyb20gJy4uL3ZpZXcnO1xyXG5cclxudmFyIEFTVCA9IHt9O1xyXG5BU1QuUHJvZ3JhbSA9ICdQcm9ncmFtJztcclxuQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQgPSAnRXhwcmVzc2lvblN0YXRlbWVudCc7XHJcbkFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbiA9ICdBc3NpZ25tZW50RXhwcmVzc2lvbic7XHJcbkFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24gPSAnQ29uZGl0aW9uYWxFeHByZXNzaW9uJztcclxuQVNULkxvZ2ljYWxFeHByZXNzaW9uID0gJ0xvZ2ljYWxFeHByZXNzaW9uJztcclxuQVNULkJpbmFyeUV4cHJlc3Npb24gPSAnQmluYXJ5RXhwcmVzc2lvbic7XHJcbkFTVC5VbmFyeUV4cHJlc3Npb24gPSAnVW5hcnlFeHByZXNzaW9uJztcclxuQVNULkNhbGxFeHByZXNzaW9uID0gJ0NhbGxFeHByZXNzaW9uJztcclxuQVNULk1lbWJlckV4cHJlc3Npb24gPSAnTWVtYmVyRXhwcmVzc2lvbic7XHJcbkFTVC5JZGVudGlmaWVyID0gJ0lkZW50aWZpZXInO1xyXG5BU1QuTGl0ZXJhbCA9ICdMaXRlcmFsJztcclxuQVNULkFycmF5RXhwcmVzc2lvbiA9ICdBcnJheUV4cHJlc3Npb24nO1xyXG5BU1QuUHJvcGVydHkgPSAnUHJvcGVydHknO1xyXG5BU1QuT2JqZWN0RXhwcmVzc2lvbiA9ICdPYmplY3RFeHByZXNzaW9uJztcclxuXHJcbmZ1bmN0aW9uIEFzdE5vZGUodHlwZSkge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xyXG59XHJcblxyXG5Bc3ROb2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xyXG59O1xyXG5cclxuQXN0Tm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgaW50ZXJuYWxzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGQuY29tcGlsZShzY29wZSwgb3B0aW9ucyB8fCB7fSwgaW50ZXJuYWxzKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChQcm9ncmFtTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIFByb2dyYW1Ob2RlKCkge1xyXG4gICAgUHJvZ3JhbU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuUHJvZ3JhbSk7XHJcbn1cclxuXHJcblByb2dyYW1Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMgfHwge30pO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCkge1xyXG4gICAgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuRXhwcmVzc2lvblN0YXRlbWVudCk7XHJcbn1cclxuXHJcbkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBpbnRlcm5hbHMpIHtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0uY29tcGlsZShzY29wZSwgb3B0aW9ucyB8fCB7fSwgaW50ZXJuYWxzKTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKGxlZnQsIHJpZ2h0LCBvcGVyYXRvcikge1xyXG4gICAgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uKTtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbn1cclxuXHJcbkFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHRhcmdldCA9IHRoaXMubGVmdC5jb21waWxlKHNjb3BlLCBvcHRpb25zLCB7IGFzc2lnbm1lbnRMZWZ0OiB0cnVlIH0pO1xyXG4gICAgdmFyIHZhbHVlID0gdGhpcy5yaWdodC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuICAgIHRhcmdldC5vYmpbdGFyZ2V0LnByb3BdID0gdmFsdWU7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCkge1xyXG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcclxuICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xyXG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcclxufVxyXG5cclxuQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgaWYgKHRoaXMudGVzdC5jb21waWxlKHNjb3BlKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsdGVybmF0ZS5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KExvZ2ljYWxFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIExvZ2ljYWxFeHByZXNzaW9uTm9kZShvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcclxuICAgIExvZ2ljYWxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG59XHJcblxyXG5Mb2dpY2FsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciByZXN1bHQ7XHJcbiAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5sZWZ0LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLnJpZ2h0LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG5cclxuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xyXG4gICAgICAgIGNhc2UgJyYmJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3x8JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KEJpbmFyeUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQmluYXJ5RXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XHJcbiAgICBCaW5hcnlFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5CaW5hcnlFeHByZXNzaW9uKTtcclxuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbn1cclxuXHJcbkJpbmFyeUV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgcmVzdWx0O1xyXG4gICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMubGVmdC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5yaWdodC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuXHJcbiAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xyXG4gICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XHJcbiAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSArIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy0nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICcqJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICogcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAvIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyUnOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc8JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDwgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnPic6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJzw9JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDw9IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJz49JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID49IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJz09JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyE9JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJz09PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnIT09JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChVbmFyeUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gVW5hcnlFeHByZXNzaW9uTm9kZShvcGVyYXRvciwgYXJnKSB7XHJcbiAgICBVbmFyeUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlVuYXJ5RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLnByZWZpeCA9IHRydWU7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB0aGlzLmFyZyA9IGFyZztcclxufVxyXG5cclxuVW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHJlc3VsdCwgdmFsdWUgPSB0aGlzLmFyZy5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcclxuICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy0nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSAtdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyEnOlxyXG4gICAgICAgICAgICByZXN1bHQgPSAhdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KExpdGVyYWxOb2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gTGl0ZXJhbE5vZGUodmFsdWUpIHtcclxuICAgIExpdGVyYWxOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkxpdGVyYWwpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG59XHJcblxyXG5MaXRlcmFsTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChDYWxsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBDYWxsRXhwcmVzc2lvbk5vZGUoY2FsbGVlLCBhcmdzKSB7XHJcbiAgICBDYWxsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQ2FsbEV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XHJcbiAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgdGhpcy5maWx0ZXIgPSBmYWxzZTtcclxufVxyXG5cclxuQ2FsbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY2FsbGVlLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMsIHsgY2FsbGVlOiB0cnVlIH0pO1xyXG4gICAgdmFyIGFyZ1ZhbHVlcyA9IHRoaXMuYXJncy5tYXAoZnVuY3Rpb24gKGFyZykge1xyXG4gICAgICAgIHJldHVybiBhcmcuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5maWx0ZXIpIHtcclxuICAgICAgICB2YXIgZmlsdGVySW5zID0gb3B0aW9ucy5jcmVhdGVGaWx0ZXIoY29udGV4dC5wcm9wKTtcclxuICAgICAgICBpZiAoaXNGaWx0ZXIoZmlsdGVySW5zKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVySW5zLiRleGVjdXRlLmFwcGx5KGZpbHRlcklucywgYXJnVmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWx0ZXIgXCInICsgY29udGV4dC5wcm9wICsgJ1wiIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YXIgZm4gPSBjb250ZXh0Lm9ialtjb250ZXh0LnByb3BdO1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dC5vYmosIGFyZ1ZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihjb250ZXh0LnByb3AgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KE1lbWJlckV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gTWVtYmVyRXhwcmVzc2lvbk5vZGUob2JqZWN0LCBwcm9wZXJ0eSwgY29tcHV0ZWQpIHtcclxuICAgIE1lbWJlckV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk1lbWJlckV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XHJcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XHJcbiAgICB0aGlzLmNvbXB1dGVkID0gY29tcHV0ZWQ7XHJcbn1cclxuXHJcbk1lbWJlckV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBpbnRlcm5hbHMpIHtcclxuICAgIHZhciBvYmogPSB0aGlzLm9iamVjdC5jb21waWxlKHNjb3BlLCBvcHRpb25zLCBpbnRlcm5hbHMpO1xyXG5cclxuICAgIGlmICh1dGlscy5pc0FycmF5KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqW3RoaXMucHJvcGVydHkuY29tcGlsZShvYmosIG9wdGlvbnMsIGludGVybmFscyldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnByb3BlcnR5LmNvbXBpbGUob2JqLCBvcHRpb25zLCBpbnRlcm5hbHMpO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChJZGVudGlmaWVyTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIElkZW50aWZpZXJOb2RlKG5hbWUpIHtcclxuICAgIElkZW50aWZpZXJOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULklkZW50aWZpZXIpO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxufVxyXG5cclxuSWRlbnRpZmllck5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGludGVybmFscykge1xyXG4gICAgaWYgKGludGVybmFscykge1xyXG4gICAgICAgIGlmIChpbnRlcm5hbHMuYXNzaWdubWVudExlZnQgfHwgaW50ZXJuYWxzLmNhbGxlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgb2JqOiBzY29wZSxcclxuICAgICAgICAgICAgICAgIHByb3A6IHRoaXMubmFtZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpbnRlcm5hbHMucHJvcGVydHlLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzdWx0ID0gc2NvcGVbdGhpcy5uYW1lXTtcclxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBvcHRpb25zLmxvY2Fscykge1xyXG4gICAgICAgIHJlc3VsdCA9IG9wdGlvbnMubG9jYWxzW3RoaXMubmFtZV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChBcnJheUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQXJyYXlFeHByZXNzaW9uTm9kZSgpIHtcclxuICAgIEFycmF5RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQXJyYXlFeHByZXNzaW9uKTtcclxufVxyXG5cclxudXRpbHMuaW5oZXJpdChQcm9wZXJ0eU5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBQcm9wZXJ0eU5vZGUoKSB7XHJcbiAgICBQcm9wZXJ0eU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuUHJvcGVydHkpO1xyXG4gICAgdGhpcy5raW5kID0gJ2luaXQnO1xyXG4gICAgdGhpcy5rZXkgPSBudWxsO1xyXG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB0aGlzLmNvbXB1dGVkID0gZmFsc2U7XHJcbn1cclxuXHJcblByb3BlcnR5Tm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBrZXk6IHRoaXMua2V5LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMsIHsgcHJvcGVydHlLZXk6IHRydWUgfSksXHJcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUuY29tcGlsZShzY29wZSwgb3B0aW9ucylcclxuICAgIH07XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KE9iamVjdEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gT2JqZWN0RXhwcmVzc2lvbk5vZGUocHJvcGVydGllcykge1xyXG4gICAgT2JqZWN0RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuT2JqZWN0RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xyXG59XHJcblxyXG5PYmplY3RFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG5cclxuICAgIHRoaXMucHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgdmFyIGRlZiA9IGl0ZW0uY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgcmVzdWx0W2RlZi5rZXldID0gZGVmLnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGlzQXNzaWduYWJsZShhc3QpIHtcclxuICAgIHJldHVybiBhc3QudHlwZSA9PT0gQVNULklkZW50aWZpZXIgfHwgYXN0LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYXJzZXIobGV4ZXIsIG9wdGlvbnMpIHtcclxuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn1cclxuXHJcblBhcnNlci5wcm90b3R5cGUudGhyb3dFcnJvciA9IGZ1bmN0aW9uIChtc2csIHRva2VuKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N5bnRheCBFcnJvcjogVG9rZW4gXFwnJyArIHRva2VuLnRleHQgKyAnXFwnJyArIG1zZyArICcgYXQgY29sdW1uICcgKyAodG9rZW4uaW5kZXggKyAxKSArXHJcbiAgICAgICAgJyBvZiB0aGUgZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddIHN0YXJ0aW5nIGF0IFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyh0b2tlbi5pbmRleCkgKyAnXS4nKTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XHJcblxyXG4gICAgdmFyIHZhbHVlID0gdGhpcy5wcm9ncmFtKCk7XHJcblxyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgYW4gdW5leHBlY3RlZCB0b2tlbicsIHRoaXMudG9rZW5zWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnByb2dyYW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtTm9kZSgpO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gMCAmJiAhdGhpcy5wZWVrKCd9JywgJyknLCAnOycsICddJykpIHtcclxuICAgICAgICAgICAgcHJvZ3JhbS5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5leHBlY3QoJzsnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmV4cHJlc3Npb25TdGF0ZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCk7XHJcbiAgICBleHAuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJDaGFpbigpKTtcclxuICAgIHJldHVybiBleHA7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmZpbHRlckNoYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxlZnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XHJcbiAgICAgICAgbGVmdCA9IHRoaXMuZmlsdGVyKGxlZnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50KCk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmFzc2lnbm1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy50ZXJuYXJ5KCk7XHJcbiAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xyXG4gICAgICAgIGlmICghaXNBc3NpZ25hYmxlKHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYXNzaWduIGEgdmFsdWUgdG8gYSBub24gbC12YWx1ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0ID0gbmV3IEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShyZXN1bHQsIHRoaXMuYXNzaWdubWVudCgpLCAnPScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUudGVybmFyeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0ZXN0ID0gdGhpcy5sb2dpY2FsT1IoKTtcclxuICAgIHZhciBhbHRlcm5hdGU7XHJcbiAgICB2YXIgY29uc2VxdWVudDtcclxuICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XHJcbiAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uc3VtZSgnOicpKSB7XHJcbiAgICAgICAgICAgIGNvbnNlcXVlbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlc3Q7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmxvZ2ljYWxPUiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5sb2dpY2FsQU5EKCk7XHJcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3x8JykpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUubG9naWNhbEFORCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5lcXVhbGl0eSgpO1xyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcmJicpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJyYmJywgbGVmdCwgdGhpcy5lcXVhbGl0eSgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5lcXVhbGl0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5yZWxhdGlvbmFsKCk7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJz09JywgJyE9JywgJz09PScsICchPT0nKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMucmVsYXRpb25hbCgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5yZWxhdGlvbmFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxlZnQgPSB0aGlzLmFkZGl0aXZlKCk7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJzwnLCAnPicsICc8PScsICc+PScpKSkge1xyXG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5hZGRpdGl2ZSgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5hZGRpdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5tdWx0aXBsaWNhdGl2ZSgpO1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMubXVsdGlwbGljYXRpdmUoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUubXVsdGlwbGljYXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMudW5hcnkoKTtcclxuICAgIHZhciB0b2tlbjtcclxuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKicsICcvJywgJyUnKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMudW5hcnkoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUudW5hcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIHRoaXMudW5hcnkoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcclxuICAgIH1cclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucHJpbWFyeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwcmltYXJ5O1xyXG4gICAgaWYgKHRoaXMuZXhwZWN0KCcoJykpIHtcclxuICAgICAgICBwcmltYXJ5ID0gdGhpcy5maWx0ZXJDaGFpbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgnWycpKSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgneycpKSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMub2JqZWN0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5saXRlcmFscy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnBlZWsoKS50ZXh0KSkge1xyXG4gICAgICAgIHByaW1hcnkgPSBuZXcgTGl0ZXJhbE5vZGUodGhpcy5vcHRpb25zLmxpdGVyYWxzW3RoaXMuY29uc3VtZSgpLnRleHRdKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xyXG4gICAgICAgIHByaW1hcnkgPSB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcclxuICAgICAgICBwcmltYXJ5ID0gdGhpcy5jb25zdGFudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ25vdCBhIHByaW1hcnkgZXhwcmVzc2lvbicsIHRoaXMucGVlaygpKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmV4dDtcclxuICAgIHdoaWxlICgobmV4dCA9IHRoaXMuZXhwZWN0KCcoJywgJ1snLCAnLicpKSkge1xyXG4gICAgICAgIGlmIChuZXh0LnRleHQgPT09ICcoJykge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLnBhcnNlQXJndW1lbnRzKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJ1snKSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5leHByZXNzaW9uKCksIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJy4nKSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5pZGVudGlmaWVyKCksIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0lNUE9TU0lCTEUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpbWFyeTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGJhc2VFeHByZXNzaW9uKSB7XHJcbiAgICB2YXIgYXJncyA9IFtiYXNlRXhwcmVzc2lvbl0sIGlkZW50aWZpZXJzID0gW3RoaXMuaWRlbnRpZmllcigpXTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJy4nKSkge1xyXG4gICAgICAgIGlkZW50aWZpZXJzLnB1c2godGhpcy5pZGVudGlmaWVyKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBsdXMgbmFtZXNwYWNlXHJcbiAgICB2YXIgZW50aXJlTmFtZSA9IGlkZW50aWZpZXJzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLm5hbWU7XHJcbiAgICB9KS5qb2luKCcuJyk7XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUobmV3IElkZW50aWZpZXJOb2RlKGVudGlyZU5hbWUpLCBhcmdzKTtcclxuXHJcbiAgICByZXN1bHQuZmlsdGVyID0gdHJ1ZTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJzonKSkge1xyXG4gICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGFyc2VBcmd1bWVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJyknKSB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5maWx0ZXJDaGFpbigpKTtcclxuICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcmdzO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5pZGVudGlmaWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5jb25zdW1lKCk7XHJcbiAgICBpZiAoIXRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIG5vdCBhIHZhbGlkIGlkZW50aWZpZXInLCB0b2tlbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IElkZW50aWZpZXJOb2RlKHRva2VuLnRleHQpO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5jb25zdGFudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFRPRE8gY2hlY2sgdGhhdCBpdCBpcyBhIGNvbnN0YW50XHJcbiAgICByZXR1cm4gbmV3IExpdGVyYWxOb2RlKHRoaXMuY29uc3VtZSgpLnZhbHVlKTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuYXJyYXlEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhcnIgPSBuZXcgQXJyYXlFeHByZXNzaW9uTm9kZSgpO1xyXG4gICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ10nKSB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCddJykpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyci5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnN1bWUoJ10nKTtcclxuXHJcbiAgICByZXR1cm4gYXJyO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5vYmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJvcGVydGllcyA9IFtdLCBwcm9wZXJ0eTtcclxuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICd9Jykge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnfScpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eU5vZGUoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmNvbnN0YW50KCk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuaWRlbnRpZmllcigpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJzonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gcHJvcGVydHkua2V5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygnWycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ1snKTtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2ludmFsaWQga2V5JywgdGhpcy5wZWVrKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnN1bWUoJ30nKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5jb25zdW1lID0gZnVuY3Rpb24gKGUxKSB7XHJcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdChlMSk7XHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyB1bmV4cGVjdGVkLCBleHBlY3RpbmcgWycgKyBlMSArICddJywgdGhpcy5wZWVrKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRva2VuO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5wZWVrVG9rZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRva2Vuc1swXTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uIChlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGVla0FoZWFkKDAsIGUxLCBlMiwgZTMsIGU0KTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGVla0FoZWFkID0gZnVuY3Rpb24gKGksIGUxLCBlMiwgZTMsIGU0KSB7XHJcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gaSkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW5zW2ldO1xyXG4gICAgICAgIHZhciB0ID0gdG9rZW4udGV4dDtcclxuICAgICAgICBpZiAodCA9PT0gZTEgfHwgdCA9PT0gZTIgfHwgdCA9PT0gZTMgfHwgdCA9PT0gZTQgfHxcclxuICAgICAgICAgICAgKCFlMSAmJiAhZTIgJiYgIWUzICYmICFlNCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuZXhwZWN0ID0gZnVuY3Rpb24gKGUxLCBlMiwgZTMsIGU0KSB7XHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLnBlZWsoZTEsIGUyLCBlMywgZTQpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy50b2tlbnMuc2hpZnQoKTtcclxuICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgeyBQYXJzZXIgfTsiLCJcclxuZnVuY3Rpb24gZ2V0Q2hpbGROb2Rlcyhub2RlKSB7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZS5jaGlsZE5vZGVzLCAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJDaGlsZE5vZGVzKG5vZGUpIHtcclxuICAgIGdldENoaWxkTm9kZXMobm9kZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlTm9kZShyZWZOb2RlLCBuZXdOb2RlKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHJlZk5vZGUucGFyZW50Tm9kZTtcclxuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZOb2RlKTtcclxuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlZk5vZGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5vZGVCZXR3ZWVuKGJlZ2luTm9kZSwgZW5kTm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSBiZWdpbk5vZGUucGFyZW50Tm9kZTtcclxuICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhwYXJlbnROb2RlKTtcclxuXHJcbiAgICBjaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyA9PT0gYmVnaW5Ob2RlICYmIGNoaWxkICE9PSBlbmROb2RlKSB7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgPT09IGVuZE5vZGUgJiYgY2hpbGQgIT09IGJlZ2luTm9kZSkge1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0Tm9kZUFmdGVyKHJlZk5vZGUsIG5ld05vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xyXG5cclxuICAgIGlmIChwYXJlbnROb2RlLmxhc3RDaGlsZCA9PT0gcmVmTm9kZSkge1xyXG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBnZXRDaGlsZE5vZGVzLCBjbGVhckNoaWxkTm9kZXMsIHJlcGxhY2VOb2RlLCByZW1vdmVOb2RlLCByZW1vdmVOb2RlQmV0d2VlbiwgaW5zZXJ0Tm9kZUFmdGVyIH07IiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzQXJyYXkgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbnZhciBwcm9wQ2hhbmdpbmdNc2cgPSBuZXcgTWVzc2VuZ2VyKCk7XHJcbnZhciBwcm9wQ2hhbmdlZE1zZyA9IG5ldyBNZXNzZW5nZXIoKTtcclxuXHJcbmZ1bmN0aW9uIFNldFByb3BlcnR5SGFuZGxlcihvbmNoYW5nZSwgcGFyZW50S2V5LCBkZWVwUHJveHkpIHtcclxuICAgIHRoaXMuc2VsZktleSA9ICdfX3NlbGZfXyc7XHJcbiAgICB0aGlzLm9uY2hhbmdlID0gb25jaGFuZ2U7XHJcbiAgICB0aGlzLnBhcmVudEtleSA9IHBhcmVudEtleTtcclxuICAgIHRoaXMuZGVlcFByb3h5ID0gZGVlcFByb3h5O1xyXG59XHJcblxyXG5TZXRQcm9wZXJ0eUhhbmRsZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xyXG4gICAgaWYodGhpcy5zZWxmS2V5ID09PSBrZXkpe1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHZhbHVlID0gdGFyZ2V0W2tleV07XHJcblxyXG4gICAgaWYgKHRoaXMuZGVlcFByb3h5ICYmIGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgIHZhbHVlID0gbmV3IFByb3h5KHZhbHVlLCBuZXcgU2V0UHJvcGVydHlIYW5kbGVyKHRoaXMub25jaGFuZ2UsIHRoaXMucGFyZW50S2V5ICsga2V5ICsgJy4nLCB0aGlzLmRlZXBQcm94eSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxufTtcclxuXHJcblNldFByb3BlcnR5SGFuZGxlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5LCB2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuZGVlcFByb3h5ICYmIGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdmFsdWVbdGhpcy5zZWxmS2V5XTtcclxuXHJcbiAgICAgICAgLy8gdmFsdWUgaXMgYSBwcm94eSByZXR1cm4gYnkgdGhpcyBoYW5kbGVyXHJcbiAgICAgICAgaWYgKHNlbGYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHNlbGY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xyXG5cclxuICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUgfHwgKGlzQXJyYXkodGFyZ2V0KSAmJiBrZXkgPT09ICdsZW5ndGgnKSkge1xyXG4gICAgICAgIHZhciB2YWxpZGF0aW9uID0ge1xyXG4gICAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMub25jaGFuZ2UuZmlyZVZtQ2hhbmdpbmcodGhpcy5wYXJlbnRLZXkgKyBrZXksIHZhbGlkYXRpb24pO1xyXG4gICAgICAgIHByb3BDaGFuZ2luZ01zZy5maXJlKHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICBkYXRhOiB2YWxpZGF0aW9uXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh2YWxpZGF0aW9uLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub25jaGFuZ2UuZmlyZVZtQ2hhbmdlZCh0aGlzLnBhcmVudEtleSArIGtleSwge1xyXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwcm9wQ2hhbmdlZE1zZy5maXJlKHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBHZXRQcm9wZXJ0eUhhbmRsZXIocHJvcHMsIHBhcmVudEtleSwgZGVlcFByb3h5KSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLnBhcmVudEtleSA9IHBhcmVudEtleTtcclxuICAgIHRoaXMuZGVlcFByb3h5ID0gZGVlcFByb3h5O1xyXG59XHJcblxyXG5HZXRQcm9wZXJ0eUhhbmRsZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xyXG4gICAgdmFyIHZhbHVlID0gdGFyZ2V0W2tleV07XHJcbiAgICB2YXIgcHJvcCA9IHRoaXMucGFyZW50S2V5ICsga2V5O1xyXG5cclxuICAgIGlmICh0aGlzLmRlZXBQcm94eSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICB2YWx1ZSA9IG5ldyBQcm94eSh2YWx1ZSwgbmV3IEdldFByb3BlcnR5SGFuZGxlcih0aGlzLnByb3BzLCBwcm9wICsgJy4nLCB0aGlzLmRlZXBQcm94eSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnByb3BzLmluZGV4T2YocHJvcCkgPT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5wdXNoKHByb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFNldFByb3BlcnR5SGFuZGxlciwgR2V0UHJvcGVydHlIYW5kbGVyLCBwcm9wQ2hhbmdpbmdNc2csIHByb3BDaGFuZ2VkTXNnIH0iLCJpbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9lbGUtdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gaXNNZXNzZW5nZXIob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWVzc2VuZ2VyO1xyXG59XHJcblxyXG5leHBvcnQgeyBpc01lc3Nlbmdlcn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBNZXNzZW5nZXIoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XHJcbn1cclxuXHJcbk1lc3Nlbmdlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZm4pIHtcclxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChmbik7XHJcbn07XHJcblxyXG5NZXNzZW5nZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChmbikge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlcnNbaV0gPT09IGZuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbk1lc3Nlbmdlci5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uIChhcmdzLCBzY29wZSkge1xyXG4gICAgdmFyIHJldHVyblZhbHVlO1xyXG4gICAgc2NvcGUgPSBzY29wZSB8fCB0aGlzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5oYW5kbGVyc1tpXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB0aGlzLmhhbmRsZXJzW2ldLmNhbGwoc2NvcGUsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIE1lc3NlbmdlckJ1cygpIHtcclxuICAgIHRoaXMubWVzc2VuZ2VycyA9IHt9O1xyXG59XHJcblxyXG5NZXNzZW5nZXJCdXMucHJvdG90eXBlLmdldE1lc3NlbmdlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoIXRoaXMubWVzc2VuZ2Vyc1tlXSkge1xyXG4gICAgICAgIHRoaXMubWVzc2VuZ2Vyc1tlXSA9IG5ldyBNZXNzZW5nZXIoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLm1lc3NlbmdlcnNbZV07XHJcbn07XHJcblxyXG5NZXNzZW5nZXJCdXMucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGUsIGZuKSB7XHJcbiAgICB0aGlzLmdldE1lc3NlbmdlcihlKS5vbihmbik7XHJcbn07XHJcblxyXG5NZXNzZW5nZXJCdXMucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChlLCBmbikge1xyXG4gICAgdGhpcy5nZXRNZXNzZW5nZXIoZSkub2ZmKGZuKTtcclxufTtcclxuXHJcbk1lc3NlbmdlckJ1cy5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uIChlLCBhcmdzLCBzY29wZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0TWVzc2VuZ2VyKGUpLmZpcmUoYXJncywgc2NvcGUpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgTWVzc2VuZ2VyLCBNZXNzZW5nZXJCdXMgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgcHJvcENoYW5naW5nTXNnLCBwcm9wQ2hhbmdlZE1zZyB9IGZyb20gJy4vaGFuZGxlcic7XHJcblxyXG5mdW5jdGlvbiBQcm9wZXJ0eUNoYW5nZVN1YmplY3QocGFyZW50U3ViamVjdCl7XHJcbiAgICB0aGlzLnBsYWluTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgdGhpcy5yZWdleE1hcCA9IG5ldyBNYXAoKTtcclxuICAgIHRoaXMucGFyZW50U3ViamVjdCA9IHBhcmVudFN1YmplY3Q7XHJcbn1cclxuXHJcblByb3BlcnR5Q2hhbmdlU3ViamVjdC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihwcm9wLCBhY3Rpb24sIG9wdGlvbnMpIHtcclxuICAgIHZhciBtYXAgPSB1dGlscy5pc1JlZ0V4cChwcm9wKSA/IHRoaXMucmVnZXhNYXAgOiB0aGlzLnBsYWluTWFwO1xyXG5cclxuICAgIGlmICghbWFwLmhhcyhwcm9wKSkge1xyXG4gICAgICAgIG1hcC5zZXQocHJvcCwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgYWN0aW9uLmJlZm9yZUNoYW5nZWQgPSBvcHRpb25zLmJlZm9yZUNoYW5nZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbWFwLmdldChwcm9wKS5wdXNoKGFjdGlvbik7XHJcbn07XHJcblxyXG5Qcm9wZXJ0eUNoYW5nZVN1YmplY3QucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKHByb3AsIGFjdGlvbikge1xyXG4gICAgdmFyIG1hcCA9IHV0aWxzLmlzUmVnRXhwKHByb3ApID8gdGhpcy5yZWdleE1hcCA6IHRoaXMucGxhaW5NYXA7XHJcblxyXG4gICAgaWYgKCFtYXAuaGFzKHByb3ApKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhY3Rpb25zID0gbWFwLmdldChwcm9wKTtcclxuICAgIHZhciBpbmRleCA9IGFjdGlvbnMuaW5kZXhPZihhY3Rpb24pO1xyXG5cclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBhY3Rpb25zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Qcm9wZXJ0eUNoYW5nZVN1YmplY3QucHJvdG90eXBlLmZpcmVDaGFuZ2VkID0gZnVuY3Rpb24ocHJvcCwgYXJncykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGlmICh0aGlzLnBsYWluTWFwLmhhcyhwcm9wKSkge1xyXG4gICAgICAgIHRoaXMucGxhaW5NYXAuZ2V0KHByb3ApLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICBpZighYWN0aW9uLmJlZm9yZUNoYW5nZWQpe1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlZ2V4TWFwLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbnMsIHBhdHRlcm4pIHtcclxuICAgICAgICBpZiAocGF0dGVybi50ZXN0KHByb3ApKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZighYWN0aW9uLmJlZm9yZUNoYW5nZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYsIHByb3AsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJlbnRTdWJqZWN0ICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnBhcmVudFN1YmplY3QuZmlyZUNoYW5nZWQocHJvcCwgYXJncyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Qcm9wZXJ0eUNoYW5nZVN1YmplY3QucHJvdG90eXBlLmZpcmVDaGFuZ2luZyA9IGZ1bmN0aW9uKHByb3AsIGFyZ3MpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBpZiAodGhpcy5wbGFpbk1hcC5oYXMocHJvcCkpIHtcclxuICAgICAgICB0aGlzLnBsYWluTWFwLmdldChwcm9wKS5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgaWYoYWN0aW9uLmJlZm9yZUNoYW5nZWQpe1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlZ2V4TWFwLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbnMsIHBhdHRlcm4pIHtcclxuICAgICAgICBpZiAocGF0dGVybi50ZXN0KHByb3ApKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZihhY3Rpb24uYmVmb3JlQ2hhbmdlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLnBhcmVudFN1YmplY3QgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50U3ViamVjdC5maXJlQ2hhbmdpbmcocHJvcCwgYXJncyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Qcm9wZXJ0eUNoYW5nZVN1YmplY3QucHJvdG90eXBlLmRlc3Ryb3kgPSAgZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLnBsYWluTWFwLmNsZWFyKCk7XHJcbiAgICB0aGlzLnJlZ2V4TWFwLmNsZWFyKCk7XHJcbiAgICB0aGlzLnBhcmVudFN1YmplY3QgPSBudWxsO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gT2JqZWN0UHJvcGVydHlDaGFuZ2VTdWJqZWN0KHBhcmVudFZtUHJvcGVydHlDaGFuZ2UpIHtcclxuICAgIHRoaXMudm1Qcm9wZXJ0eUNoYW5nZSA9IG5ldyBQcm9wZXJ0eUNoYW5nZVN1YmplY3QocGFyZW50Vm1Qcm9wZXJ0eUNoYW5nZSk7XHJcbiAgICB0aGlzLm9iak1hcCA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgb25jaGFuZ2luZyA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBhcmdzLnRhcmdldCwgcHJvcCA9IGFyZ3Mua2V5O1xyXG4gICAgICAgICAgICBzZWxmLmZpcmVDaGFuZ2luZyhvYmosIHByb3AsIGFyZ3MuZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbmNoYW5nZWQgPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gYXJncy50YXJnZXQsIHByb3AgPSBhcmdzLmtleTtcclxuICAgICAgICAgICAgc2VsZi5maXJlQ2hhbmdlZChvYmosIHByb3AsIGFyZ3MuZGF0YSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICBwcm9wQ2hhbmdpbmdNc2cub24ob25jaGFuZ2luZyk7XHJcbiAgICBwcm9wQ2hhbmdlZE1zZy5vbihvbmNoYW5nZWQpO1xyXG5cclxuICAgIHRoaXMub2ZmQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHByb3BDaGFuZ2luZ01zZy5vZmYob25jaGFuZ2luZyk7XHJcbiAgICAgICAgcHJvcENoYW5nZWRNc2cub2ZmKG9uY2hhbmdlZCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5PYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3QucHJvdG90eXBlLmdldFZtUHJvcGVydHlDaGFuZ2VTdWJqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudm1Qcm9wZXJ0eUNoYW5nZTtcclxufTtcclxuXHJcbk9iamVjdFByb3BlcnR5Q2hhbmdlU3ViamVjdC5wcm90b3R5cGUuc2V0UGFyZW50Vm1Qcm9wZXJ0eUNoYW5nZVN1YmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIHRoaXMudm1Qcm9wZXJ0eUNoYW5nZS5wYXJlbnRTdWJqZWN0ID0gdmFsdWU7XHJcbn07XHJcblxyXG5PYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3QucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKG9iaiwgcHJvcCwgYWN0aW9uLCBvcHRpb25zKSB7XHJcbiAgICBpZiAoIXRoaXMub2JqTWFwLmhhcyhvYmopKSB7XHJcbiAgICAgICAgdGhpcy5vYmpNYXAuc2V0KG9iaiwgbmV3IFByb3BlcnR5Q2hhbmdlU3ViamVjdCgpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9iak1hcC5nZXQob2JqKS5vbihwcm9wLCBhY3Rpb24sIG9wdGlvbnMpO1xyXG59O1xyXG5cclxuT2JqZWN0UHJvcGVydHlDaGFuZ2VTdWJqZWN0LnByb3RvdHlwZS5vblZtID0gZnVuY3Rpb24gKHByb3AsIGFjdGlvbiwgb3B0aW9ucykge1xyXG4gICAgdGhpcy52bVByb3BlcnR5Q2hhbmdlLm9uKHByb3AsIGFjdGlvbiwgb3B0aW9ucyk7XHJcbn07XHJcblxyXG5PYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3QucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChvYmosIHByb3AsIGFjdGlvbikge1xyXG4gICAgaWYgKHRoaXMub2JqTWFwLmhhcyhvYmopKSB7XHJcbiAgICAgICAgdGhpcy5vYmpNYXAuZ2V0KG9iaikub2ZmKHByb3AsIGFjdGlvbik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5PYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3QucHJvdG90eXBlLm9mZlZtID0gZnVuY3Rpb24gKHByb3AsIGFjdGlvbikge1xyXG4gICAgdGhpcy52bVByb3BlcnR5Q2hhbmdlLm9mZihwcm9wLCBhY3Rpb24sIG9wdGlvbnMpO1xyXG59O1xyXG5cclxuT2JqZWN0UHJvcGVydHlDaGFuZ2VTdWJqZWN0LnByb3RvdHlwZS5maXJlQ2hhbmdlZCA9IGZ1bmN0aW9uIChvYmosIHByb3AsIGFyZ3MpIHtcclxuICAgIGlmICh0aGlzLm9iak1hcC5oYXMob2JqKSkge1xyXG4gICAgICAgIHRoaXMub2JqTWFwLmdldChvYmopLmZpcmVDaGFuZ2VkKHByb3AsIGFyZ3MpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuT2JqZWN0UHJvcGVydHlDaGFuZ2VTdWJqZWN0LnByb3RvdHlwZS5maXJlQ2hhbmdpbmcgPSBmdW5jdGlvbihvYmosIHByb3AsIGFyZ3MpIHtcclxuICAgIGlmICh0aGlzLm9iak1hcC5oYXMob2JqKSkge1xyXG4gICAgICAgIHRoaXMub2JqTWFwLmdldChvYmopLmZpcmVDaGFuZ2luZyhwcm9wLCBhcmdzKTtcclxuICAgIH1cclxufTtcclxuXHJcbk9iamVjdFByb3BlcnR5Q2hhbmdlU3ViamVjdC5wcm90b3R5cGUuZmlyZVZtQ2hhbmdlZCA9IGZ1bmN0aW9uIChwcm9wLCBhcmdzKSB7XHJcbiAgICB0aGlzLnZtUHJvcGVydHlDaGFuZ2UuZmlyZUNoYW5nZWQocHJvcCwgYXJncyk7XHJcbn07XHJcblxyXG5PYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3QucHJvdG90eXBlLmZpcmVWbUNoYW5naW5nID0gZnVuY3Rpb24ocHJvcCwgYXJncykge1xyXG4gICAgdGhpcy52bVByb3BlcnR5Q2hhbmdlLmZpcmVDaGFuZ2luZyhwcm9wLCBhcmdzKTtcclxufTtcclxuXHJcbk9iamVjdFByb3BlcnR5Q2hhbmdlU3ViamVjdC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMub2ZmQ2hhbmdlLmNhbGwodGhpcyk7XHJcbiAgICB0aGlzLm9iak1hcC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5kZXN0cm95KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMudm1Qcm9wZXJ0eUNoYW5nZS5kZXN0cm95KCk7XHJcbiAgICB0aGlzLm9iak1hcCA9IG51bGw7XHJcbiAgICB0aGlzLnZtUHJvcGVydHlDaGFuZ2UgPSBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgUHJvcGVydHlDaGFuZ2VTdWJqZWN0LCBPYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3QgfTsiLCJ2YXIgZGVidWdNb2RlID0gdHJ1ZSxcclxuICAgIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcclxuICAgIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xyXG5cclxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGFjdGlvbiwgaWdub3JlT3duKSB7XHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbihpbmRleCwgb2JqW2luZGV4XSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAoaWdub3JlT3duIHx8IG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbihwLCBvYmpbcF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWN0aW9uKG9iaiwgb2JqKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc29tZShvYmosIGFjdGlvbikge1xyXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24oaW5kZXgsIG9ialtpbmRleF0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKHAsIG9ialtwXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBhY3Rpb24ob2JqLCBvYmopO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5KCkge1xyXG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCBvYmogPSBhcmd1bWVudHNbaW5kZXhdO1xyXG5cclxuICAgIGlmIChpc0Jvb2xlYW4ob2JqKSkge1xyXG4gICAgICAgIGRlZXAgPSBvYmo7XHJcbiAgICAgICAgb2JqID0gYXJndW1lbnRzWysraW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVlcCA/IGNvcHkoaXRlbSkgOiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc09iamVjdChvYmopKSB7XHJcbiAgICAgICAgdmFyIG5ld09iaiA9IG9iamVjdChvYmopO1xyXG4gICAgICAgIGZvckVhY2gob2JqLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBuZXdPYmpba2V5XSA9IGRlZXAgPyBjb3B5KHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBuZXdPYmo7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gZXh0ZW5kKCkge1xyXG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSBhcmd1bWVudHNbaW5kZXhdO1xyXG5cclxuICAgIGlmIChpc0Jvb2xlYW4odGFyZ2V0KSkge1xyXG4gICAgICAgIGRlZXAgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWysraW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZWVwKSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlKCkge1xyXG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSB7fTtcclxuXHJcbiAgICBpZiAoaXNCb29sZWFuKGFyZ3VtZW50c1tpbmRleF0pKSB7XHJcbiAgICAgICAgZGVlcCA9IGFyZ3VtZW50c1tpbmRleF07XHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGVlcCkge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFpbk1lcmdlKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xyXG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpc09iamVjdCh0YXJnZXRba2V5XSkgJiYgaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0W2tleV0sIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb2JqZWN0KG8pIHtcclxuICAgIGZ1bmN0aW9uIEYoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgRi5wcm90b3R5cGUgPSBvO1xyXG4gICAgcmV0dXJuIG5ldyBGKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XHJcbiAgICB2YXIgcHJvdG90eXBlID0gb2JqZWN0KHN1cGVyVHlwZS5wcm90b3R5cGUpO1xyXG4gICAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViVHlwZTtcclxuICAgIHN1YlR5cGUucHJvdG90eXBlID0gcHJvdG90eXBlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmhlcml0KHN1YlR5cGUsIHN1cGVyVHlwZSkge1xyXG4gICAgaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpO1xyXG4gICAgc3ViVHlwZS5zdXBlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzdXBlclR5cGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvd2VyY2FzZShzdHJpbmcpIHtcclxuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvTG93ZXJDYXNlKCkgOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwcGVyY2FzZShzdHJpbmcpIHtcclxuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvVXBwZXJDYXNlKCkgOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBBcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNNYXAob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWFwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQmxhbmtPYmplY3QodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFnZXRQcm90b3R5cGVPZih2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1JlZ0V4cCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU2FtZShvYmoxLCBvYmoyKSB7XHJcbiAgICB2YXIgc2FtZSA9IChvYmoxID09PSBvYmoyKTtcclxuXHJcbiAgICBpZiAoIXNhbWUpIHtcclxuICAgICAgICBpZiAoaXNBcnJheShvYmoxKSAmJiBpc0FycmF5KG9iajIpKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmoxLmxlbmd0aCA9PT0gb2JqMi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpc1NhbWUodmFsdWUsIG9iajJbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iajEpICYmIGlzT2JqZWN0KG9iajIpICYmIGdldFByb3RvdHlwZU9mKG9iajEpID09PSBnZXRQcm90b3R5cGVPZihvYmoyKSkge1xyXG4gICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2tleV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNhbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYnVnKGxvZykge1xyXG4gICAgaWYgKGRlYnVnTW9kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhaW5zKGFyciwgb2JqKSB7XHJcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbSA9PT0gb2JqO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhaW5zU3RyKGFyciwgc3RyLCBpZ25vcmVDYXNlKSB7XHJcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbSA9PT0gc3RyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShpdGVtKSA9PT0gbG93ZXJjYXNlKHN0cikpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaiwga2V5LCBpZ25vcmVDYXNlKSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xyXG5cclxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XHJcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAoa2V5MywgdmFsdWUzKSB7XHJcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xyXG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xyXG4gICAgICAgIH0sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoYXNQcm9wO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIGtleSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xyXG5cclxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XHJcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAoa2V5MywgdmFsdWUzKSB7XHJcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xyXG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xyXG4gICAgICAgIH0sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoYXNQcm9wID8gdGFyZ2V0IDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UHJvcGVydHkob2JqLCBrZXksIHZhbHVlLCBpZ25vcmVDYXNlKSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xyXG5cclxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXkyXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKGtleTMsIHZhbHVlMykge1xyXG4gICAgICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xyXG4gICAgICAgICAgICB9LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFoYXNQcm9wKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICc6IENhbiBub3Qgc2V0IHByb3BlcnR5IG9mIHVuZGVmaW5lZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb25jYXQoKSB7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGZvckVhY2gsXHJcbiAgICBzb21lLFxyXG4gICAgY29weSxcclxuICAgIGV4dGVuZCxcclxuICAgIG1lcmdlLFxyXG4gICAgb2JqZWN0LFxyXG4gICAgaW5oZXJpdCxcclxuICAgIGxvd2VyY2FzZSxcclxuICAgIHVwcGVyY2FzZSxcclxuICAgIGlzVW5kZWZpbmVkLFxyXG4gICAgaXNEZWZpbmVkLFxyXG4gICAgaXNPYmplY3QsXHJcbiAgICBpc0JsYW5rT2JqZWN0LFxyXG4gICAgaXNOdW1iZXIsXHJcbiAgICBpc0RhdGUsXHJcbiAgICBpc0Z1bmN0aW9uLFxyXG4gICAgaXNSZWdFeHAsXHJcbiAgICBpc0Jvb2xlYW4sXHJcbiAgICBpc0FycmF5LFxyXG4gICAgaXNTdHJpbmcsXHJcbiAgICBpc1NhbWUsXHJcbiAgICBkZWJ1ZyxcclxuICAgIGNvbnRhaW5zLFxyXG4gICAgY29udGFpbnNTdHIsXHJcbiAgICBoYXNQcm9wZXJ0eSxcclxuICAgIGdldFByb3BlcnR5LFxyXG4gICAgc2V0UHJvcGVydHksXHJcbiAgICBjb25jYXRcclxufTsiLCJpbXBvcnQgeyBpc01lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHknO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0ICogYXMgZWxlVXRpbHMgZnJvbSAnLi4vdXRpbGl0eS9lbGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3QgfSBmcm9tICcuLi91dGlsaXR5L3N1YmplY3QnO1xyXG5pbXBvcnQgeyBTZXRQcm9wZXJ0eUhhbmRsZXIgfSBmcm9tICcuLi91dGlsaXR5L2hhbmRsZXInO1xyXG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5pbXBvcnQgeyBjb21waWxlIH0gZnJvbSAnLi4vcGFyc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBvbmVudCgpIHtcclxuICAgIHRoaXMuJCR2bm9kZXMgPSBudWxsO1xyXG4gICAgdGhpcy4kJG93bmVyVk5vZGUgPSBudWxsO1xyXG4gICAgdGhpcy4kJHBhcmVudENvbXBvbmVudCA9IG51bGw7XHJcbiAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzID0gW107XHJcbiAgICB0aGlzLiQkY2hpbGREaXJlY3RpdmVzID0gW107XHJcbiAgICB0aGlzLiQkZGV0ZWN0VGltZW91dCA9IG51bGw7XHJcbiAgICB0aGlzLiQkcHJvcENoYW5nZWQgPSBuZXcgT2JqZWN0UHJvcGVydHlDaGFuZ2VTdWJqZWN0KCk7XHJcbn1cclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJG9uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncHJveHknLCB7XHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh0aGlzLCBuZXcgU2V0UHJvcGVydHlIYW5kbGVyKHRoaXMuJCRwcm9wQ2hhbmdlZCwgJycsIHRydWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcclxuXHJcbiAgICBpZiAodGhpcy4kJGRlZi5zdXBlckluc3RhbmNlICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLiQkcHJvcENoYW5nZWQuc2V0UGFyZW50Vm1Qcm9wZXJ0eUNoYW5nZVN1YmplY3QodGhpcy4kJGRlZi5zdXBlckluc3RhbmNlLiQkcHJvcENoYW5nZWQuZ2V0Vm1Qcm9wZXJ0eUNoYW5nZVN1YmplY3QoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kJGRlZi5vbkluaXQpKSB7XHJcbiAgICAgICAgdGhpcy4kJGRlZi5vbkluaXQuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJGJpbmRWTm9kZSA9IGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgdGhpcy4kJG93bmVyVk5vZGUgPSB2bm9kZTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJGhhc0F0dHIgPSBmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMuJCRkZWYucHJvcHMsIHByb3AsIHRydWUpO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kc2V0QXR0ciA9IGZ1bmN0aW9uIChwcm9wLCB2YWx1ZSkge1xyXG4gICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5wcm94eSwgcHJvcCwgdmFsdWUsIHRydWUpO1xyXG5cclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJCRkZWYub25DaGFuZ2VzKSkge1xyXG4gICAgICAgIHRoaXMuJCRkZWYub25DaGFuZ2VzLmNhbGwodGhpcywgcHJvcCwgdmFsdWUpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kaGFzRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmNvbnRhaW5zU3RyKHRoaXMuJCRkZWYuZXZlbnRzLCBlLCB0cnVlKTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJGxpc3RlbiA9IGZ1bmN0aW9uIChlLCBmbikge1xyXG4gICAgdmFyIG1lc3NlbmdlciA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMsIGUsIHRydWUpO1xyXG4gICAgaWYgKGlzTWVzc2VuZ2VyKG1lc3NlbmdlcikpIHtcclxuICAgICAgICBtZXNzZW5nZXIub24oZm4pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihlICsgJyBpcyBub3QgYSBldmVudCcpO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kZ2V0VGVtcGxhdGUgPSBmdW5jdGlvbiAoc3luYykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGlmKHN5bmMpe1xyXG4gICAgICAgIHJldHVybiBzZWxmLiQkZGVmLnRlbXBsYXRlIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzZWxmLiQkZGVmLnRlbXBsYXRlKSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuJCRkZWYudGVtcGxhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh1dGlscy5pc1N0cmluZyhzZWxmLiQkZGVmLnRlbXBsYXRlVXJsKSkge1xyXG4gICAgICAgICAgICBpbmplY3Rvci5zZXJ2aWNlKCckdGVtcGxhdGVDYWNoZScpLmdldFRwbEJ5VXJsKHNlbGYuJCRkZWYudGVtcGxhdGVVcmwpLnRoZW4oZnVuY3Rpb24gKHRwbCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kdXNpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgdmFyIHVzaW5nID0gdGhpcy4kJGRlZi51c2luZyxcclxuICAgICAgICBzZWdtZW50cyA9IG5hbWUuc3BsaXQoJy4nKSxcclxuICAgICAgICBjbGFzc05hbWUgPSBzZWdtZW50cy5wb3AoKSxcclxuICAgICAgICBzcGFjZU5hbWUgPSBzZWdtZW50cy5qb2luKCcuJyk7XHJcblxyXG4gICAgaWYgKHNwYWNlTmFtZSAmJiB1dGlscy5pc09iamVjdCh1c2luZykpIHtcclxuICAgICAgICB1dGlscy5zb21lKHVzaW5nLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBzcGFjZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIG5hbWUgPSB2YWx1ZSArICcuJyArIGNsYXNzTmFtZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5hbWU7XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRtYWtlQ29tcGlsZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEVtYmVkVHBsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiQkb3duZXJWTm9kZS5nZXRJbm5lclRwbCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGFpbnNDb21wb25lbnQ6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jb250YWluc0NvbXBvbmVudChzZWxmLiR1c2luZyhuYW1lKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVDb21wb25lbnQ6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVDb21wb25lbnQoc2VsZi4kdXNpbmcobmFtZSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGFpbnNEaXJlY3RpdmU6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jb250YWluc0RpcmVjdGl2ZShzZWxmLiR1c2luZyhuYW1lKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVEaXJlY3RpdmU6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVEaXJlY3RpdmUoc2VsZi4kdXNpbmcobmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRoYXNWTm9kZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaXNBcnJheSh0aGlzLiQkdm5vZGVzKTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJGZyb21WTm9kZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblxyXG4gICAgdGhpcy4kJHZub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHZub2RlLmdldERvbUVsZW1lbnQoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRjbGVhclZOb2RlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghdGhpcy4kaGFzVk5vZGVzKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLiQkdm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgdm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLiQkdm5vZGVzID0gbnVsbDtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJHJlbmRlciA9IGZ1bmN0aW9uIChzeW5jKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsIGZyYWdtZW50ID0gbnVsbDtcclxuXHJcbiAgICBpZiAoc3luYykge1xyXG4gICAgICAgIGlmICh0aGlzLiRoYXNWTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBmcmFnbWVudCA9IHRoaXMuJGZyb21WTm9kZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZyYWdtZW50ID0gY29tcGlsZSh0aGlzLiRnZXRUZW1wbGF0ZShzeW5jKSwgdGhpcy4kbWFrZUNvbXBpbGVPcHRpb25zKCkpKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgIGlmIChzZWxmLiRoYXNWTm9kZXMoKSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuJGZyb21WTm9kZXMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLiRnZXRUZW1wbGF0ZSgpLnRoZW4oZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gY29tcGlsZShodG1sLCBzZWxmLiRtYWtlQ29tcGlsZU9wdGlvbnMoKSkoc2VsZik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZyYWdtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRyZWZyZXNoID0gZnVuY3Rpb24gKHN5bmMpIHtcclxuICAgIHRoaXMuJGNsZWFyVk5vZGVzKCk7XHJcbiAgICByZXR1cm4gdGhpcy4kcmVuZGVyKHN5bmMpO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kbW91bnQgPSBmdW5jdGlvbiAoaWRPckVsZW1lbnQsIHN5bmMpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcywgZWxlbWVudDtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcoaWRPckVsZW1lbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkT3JFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQgPSBpZE9yRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBlbGVVdGlscy5jbGVhckNoaWxkTm9kZXMoZWxlbWVudCk7XHJcblxyXG4gICAgaWYgKHN5bmMpIHtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJHJlbmRlcihzeW5jKSk7XHJcbiAgICAgICAgc2VsZi4kYWZ0ZXJWaWV3SW5pdCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kcmVuZGVyKHN5bmMpLnRoZW4oZnVuY3Rpb24gKGVsZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZSk7XHJcbiAgICAgICAgICAgIHNlbGYuJGFmdGVyVmlld0luaXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJGFmdGVyVmlld0luaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiQkZGVmLmFmdGVyVmlld0luaXQpKSB7XHJcbiAgICAgICAgdGhpcy4kJGRlZi5hZnRlclZpZXdJbml0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiR1bm1vdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuJCRvd25lclZOb2RlICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLiQkb3duZXJWTm9kZS4kcmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy4kJG93bmVyVk5vZGUucmVtb3ZlRG9tRWxlbWVudCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy4kaGFzVk5vZGVzKCkpIHtcclxuICAgICAgICB0aGlzLiQkdm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgICAgIHZub2RlLnJlbW92ZURvbUVsZW1lbnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy4kJHBhcmVudENvbXBvbmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy4kJHBhcmVudENvbXBvbmVudC4kcmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgdGhpcy4kJHBhcmVudENvbXBvbmVudCA9IG51bGw7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRkZXRlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy4kJGRldGVjdFRpbWVvdXQgfHwgIXRoaXMuJCR2bm9kZXMpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi4kJGRldGVjdFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZWxmLiQkZGV0ZWN0VGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgc2VsZi4kJHZub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICB2bm9kZS5kZXRlY3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kdmFsaWRhdGUgPSBmdW5jdGlvbihwcm9wLCBhY3Rpb24pIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB0aGlzLiQkcHJvcENoYW5nZWQub25WbShwcm9wLCBhY3Rpb24sIHtcclxuICAgICAgICBiZWZvcmVDaGFuZ2VkOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYuJCRwcm9wQ2hhbmdlZC5vZmZWbShwcm9wLCBhY3Rpb24pO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJHZhbGlkYXRlUHJvcCA9IGZ1bmN0aW9uKG9iaiwgcHJvcCwgYWN0aW9uKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy4kJHByb3BDaGFuZ2VkLm9uKG9iaiwgcHJvcCwgYWN0aW9uLCB7XHJcbiAgICAgICAgYmVmb3JlQ2hhbmdlZDogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZWxmLiQkcHJvcENoYW5nZWQub2ZmKG9iaiwgcHJvcCwgYWN0aW9uKTtcclxuICAgIH07XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiR3YXRjaCA9IGZ1bmN0aW9uKHByb3AsIGFjdGlvbil7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy4kJHByb3BDaGFuZ2VkLm9uVm0ocHJvcCwgYWN0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgICBzZWxmLiQkcHJvcENoYW5nZWQub2ZmVm0ocHJvcCwgYWN0aW9uKTtcclxuICAgIH07XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiR3YXRjaFByb3AgPSBmdW5jdGlvbihvYmosIHByb3AsIGFjdGlvbil7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy4kJHByb3BDaGFuZ2VkLm9uKG9iaiwgcHJvcCwgYWN0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgICBzZWxmLiQkcHJvcENoYW5nZWQub2ZmKG9iaiwgcHJvcCwgYWN0aW9uKTtcclxuICAgIH07XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRyZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgdmFyIGluZGV4ID0gdGhpcy4kJGNoaWxkQ29tcG9uZW50cy5pbmRleE9mKGNoaWxkKTtcclxuXHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGNoaWxkLiQkcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcclxuICAgIH1cclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJGRpc3Bvc2UgPSBmdW5jdGlvbiAoaXNGcm9tVk5vZGUpIHtcclxuICAgIC8vIHJlbW92ZSB2aXJ0dWFsIG5vZGUgZmlyc3QgaW4gY2FzZSBpdCB0cmlnZ2VycyBwYXJlbnQgY29tcG9uZW50IGRlc3Ryb3lcclxuICAgIHRoaXMuJHVubW91bnQoKTtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiQkZGVmLm9uRGVzdHJveSkpIHtcclxuICAgICAgICB0aGlzLiQkZGVmLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLiQkZGV0ZWN0VGltZW91dCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLiQkZGV0ZWN0VGltZW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4kY2xlYXJWTm9kZXMoKTtcclxuICAgIHRoaXMuJCRwcm9wQ2hhbmdlZC5kZXN0cm95KCk7XHJcblxyXG4gICAgaWYgKGlzRnJvbVZOb2RlKSB7XHJcbiAgICAgICAgdGhpcy4kJG93bmVyVk5vZGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMgPSBudWxsO1xyXG4gICAgdGhpcy4kJGNoaWxkRGlyZWN0aXZlcyA9IG51bGw7XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRkZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy4kZGlzcG9zZSgpO1xyXG5cclxuICAgIC8vIGRlc3Ryb3kgdmlydHVhbCBub2RlIGluIHRoZSBlbmQgYmVjYXVzZSBpdCBtYXkgYmluZHMgbG9naWMgYWJvdXQgZGVzdHJveVxyXG4gICAgaWYgKHRoaXMuJCRvd25lclZOb2RlICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLiQkb3duZXJWTm9kZS5kaXNwb3NlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuJCRvd25lclZOb2RlID0gbnVsbDtcclxuICAgIH1cclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJGdldFBhcmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLiQkcGFyZW50Q29tcG9uZW50O1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kY3JlYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbnN0cnVjdG9yKSB7XHJcbiAgICB2YXIgY29tcG9uZW50ID0gaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGNvbnN0cnVjdG9yKTtcclxuICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gICAgY29tcG9uZW50LiQkcGFyZW50Q29tcG9uZW50ID0gdGhpcztcclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlyZWN0aXZlKCkge1xyXG4gICAgdGhpcy4kJGJpbmRpbmcgPSBudWxsO1xyXG4gICAgdGhpcy4kJHZub2RlID0gbnVsbDtcclxuICAgIHRoaXMub3V0cHV0ID0gZmFsc2U7XHJcbn1cclxuXHJcbkRpcmVjdGl2ZS5wcm90b3R5cGUuJG9uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiQkZGVmLm9uSW5pdCkpIHtcclxuICAgICAgICB0aGlzLiQkZGVmLm9uSW5pdC5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuRGlyZWN0aXZlLnByb3RvdHlwZS4kYmluZFZOb2RlID0gZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICB0aGlzLiQkdm5vZGUgPSB2bm9kZTtcclxufTtcclxuXHJcbkRpcmVjdGl2ZS5wcm90b3R5cGUuJHNldEJpbmRpbmcgPSBmdW5jdGlvbiAoYmluZGluZykge1xyXG4gICAgdGhpcy4kJGJpbmRpbmcgPSBiaW5kaW5nO1xyXG59O1xyXG5cclxuRGlyZWN0aXZlLnByb3RvdHlwZS4kY29tcGlsZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiQkZGVmLm9uQ29tcGlsZSkpIHtcclxuICAgICAgICB0aGlzLiQkZGVmLm9uQ29tcGlsZS5jYWxsKHRoaXMsIHRoaXMuJCR2bm9kZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5EaXJlY3RpdmUucHJvdG90eXBlLiRpbnNlcnQgPSBmdW5jdGlvbiAoZWxlLCBjb20pIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJCRkZWYub25JbnNlcnQpKSB7XHJcbiAgICAgICAgdGhpcy4kJGRlZi5vbkluc2VydC5jYWxsKHRoaXMsIGVsZSwgdGhpcy4kJGJpbmRpbmcsIGNvbSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5EaXJlY3RpdmUucHJvdG90eXBlLiRkZXRlY3QgPSBmdW5jdGlvbiAoZWxlLCBjb20pIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJCRkZWYub25EZXRlY3QpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRkZWYub25EZXRlY3QuY2FsbCh0aGlzLCBlbGUsIHRoaXMuJCRiaW5kaW5nLCBjb20pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLiQkYmluZGluZy5kZXRlY3QoKSkge1xyXG4gICAgICAgIHRoaXMuJHVwZGF0ZShlbGUsIGNvbSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5EaXJlY3RpdmUucHJvdG90eXBlLiR1cGRhdGUgPSBmdW5jdGlvbiAoZWxlLCBjb20pIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJCRkZWYub25VcGRhdGUpKSB7XHJcbiAgICAgICAgdGhpcy4kJGRlZi5vblVwZGF0ZS5jYWxsKHRoaXMsIGVsZSwgdGhpcy4kJGJpbmRpbmcsIGNvbSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5EaXJlY3RpdmUucHJvdG90eXBlLiRkaXNwb3NlID0gZnVuY3Rpb24gKGlzRnJvbVZOb2RlKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiQkZGVmLm9uRGVzdHJveSkpIHtcclxuICAgICAgICB0aGlzLiQkZGVmLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGlzRnJvbVZOb2RlKXtcclxuICAgICAgICB0aGlzLiQkdm5vZGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuJCRiaW5kaW5nID0gbnVsbDtcclxufTtcclxuXHJcbkRpcmVjdGl2ZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLiRkaXNwb3NlKCk7XHJcblxyXG4gICAgaWYodGhpcy4kJHZub2RlICE9IG51bGwpe1xyXG4gICAgICAgIHRoaXMuJCR2bm9kZS5kaXNwb3NlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuJCR2bm9kZSA9IG51bGw7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsdGVyKCkge1xyXG5cclxufVxyXG5cclxuRmlsdGVyLnByb3RvdHlwZS4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMpO1xyXG5cclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJCRkZWYub25Jbml0KSkge1xyXG4gICAgICAgIHRoaXMuJCRkZWYub25Jbml0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5GaWx0ZXIucHJvdG90eXBlLiRleGVjdXRlID0gZnVuY3Rpb24gKGVsZSkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kJGRlZi5vbkV4ZWN1dGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRkZWYub25FeGVjdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5GaWx0ZXIucHJvdG90eXBlLiRkZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kJGRlZi5vbkRlc3Ryb3kpKSB7XHJcbiAgICAgICAgdGhpcy4kJGRlZi5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eS9tZXNzYWdlJztcclxuaW1wb3J0IHsgdHlwZUNvbnN0LCBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcclxuaW1wb3J0IERpcmVjdGl2ZSBmcm9tICcuL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXInO1xyXG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xyXG5cclxuZnVuY3Rpb24gbmFtZXNwYWNlKG5zKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xyXG4gICAgICAgICAgICBkZWYubmFtZXNwYWNlID0gbnM7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQobmFtZSwgZGVmKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWYgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25JbnNlcnQ6IGRlZixcclxuICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZTogZGVmXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcclxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZShuYW1lLCBkZWYpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VydmljZTogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xyXG4gICAgICAgICAgICBkZWYubmFtZXNwYWNlID0gbnM7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlKG5hbWUsIGRlZik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xyXG4gICAgICAgICAgICAgICAgZGVmID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uRXhlY3V0ZTogZGVmXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihuYW1lLCBkZWYpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudChuYW1lLCBkZWYpIHtcclxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xyXG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LmNvbXBvbmVudCxcclxuICAgICAgICBzdXBlckNsYXNzOiBDb21wb25lbnRcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXJlY3RpdmUobmFtZSwgZGVmKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XHJcbiAgICAgICAgZGVmID0ge1xyXG4gICAgICAgICAgICBvbkluc2VydDogZGVmLFxyXG4gICAgICAgICAgICBvblVwZGF0ZTogZGVmXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcclxuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5kaXJlY3RpdmUsXHJcbiAgICAgICAgc3VwZXJDbGFzczogRGlyZWN0aXZlXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyKG5hbWUsIGRlZikge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xyXG4gICAgICAgIGRlZiA9IHtcclxuICAgICAgICAgICAgb25FeGVjdXRlOiBkZWZcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xyXG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LmZpbHRlcixcclxuICAgICAgICBzdXBlckNsYXNzOiBGaWx0ZXJcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXJ2aWNlKG5hbWUsIGRlZikge1xyXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XHJcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3Quc2VydmljZSxcclxuICAgICAgICBzdXBlckNsYXNzOiBTZXJ2aWNlXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wb25lbnQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQ29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RpcmVjdGl2ZShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEaXJlY3RpdmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRmlsdGVyKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEZpbHRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTZXJ2aWNlKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNlcnZpY2U7XHJcbn1cclxuXHJcbmV4cG9ydCB7IG5hbWVzcGFjZSwgaW5qZWN0b3IsIGNvbXBvbmVudCwgZGlyZWN0aXZlLCBmaWx0ZXIsIHNlcnZpY2UsIGlzQ29tcG9uZW50LCBpc0RpcmVjdGl2ZSwgaXNGaWx0ZXIsIGlzU2VydmljZSB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5L21lc3NhZ2UnO1xyXG5cclxudmFyIHR5cGVDb25zdCA9IHtcclxuICAgIGZpbHRlcjogJ2ZpbHRlcicsXHJcbiAgICBzZXJ2aWNlOiAnc2VydmljZScsXHJcbiAgICBjb21wb25lbnQ6ICdjb21wb25lbnQnLFxyXG4gICAgZGlyZWN0aXZlOiAnZGlyZWN0aXZlJ1xyXG59O1xyXG5cclxudmFyIGluamVjdG9yID0gbmV3IEluamVjdG9yKCk7XHJcbnZhciBuYW1lUGF0dGVybiA9IC9eW2Etel9cXCRdW1xcd1xcJC1dKi9pO1xyXG5cclxuZnVuY3Rpb24gSW5qZWN0b3IoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHt9O1xyXG4gICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzID0ge307XHJcbiAgICB0aGlzLmluc0NvbnRhaW5lciA9IHt9O1xyXG59XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuZ2V0TWFwcGluZyA9IGZ1bmN0aW9uIChjb250cmFjdFR5cGUpIHtcclxuICAgIGlmICghdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyW2NvbnRyYWN0VHlwZV0gPSB7fTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmdldEluc3RhbmNlcyA9IGZ1bmN0aW9uIChjb250cmFjdFR5cGUpIHtcclxuICAgIGlmICghdGhpcy5pbnNDb250YWluZXJbY29udHJhY3RUeXBlXSkge1xyXG4gICAgICAgIHRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV0gPSBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmluc0NvbnRhaW5lcltjb250cmFjdFR5cGVdO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGNvbnRyYWN0VHlwZSwgY29udHJhY3ROYW1lLCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgaWYgKGNvbnRyYWN0TmFtZS5pbmRleE9mKCcuJykgIT09IC0xKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGNoYXJhY3RlciBcIi5cIicpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtYXBwaW5nID0gdGhpcy5nZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSk7XHJcblxyXG4gICAgaWYgKG1hcHBpbmdbY29udHJhY3ROYW1lXSA9PSBudWxsKSB7XHJcbiAgICAgICAgbWFwcGluZ1tjb250cmFjdE5hbWVdID0gW107XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IG1hcHBpbmdbY29udHJhY3ROYW1lXS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkZGVmLm5hbWVzcGFjZSA9PT0gY29uc3RydWN0b3IucHJvdG90eXBlLiQkZGVmLm5hbWVzcGFjZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3ROYW1lICsgJyBpcyBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG1hdGNoZXNbMF0ucHJvdG90eXBlLiQkZGVmLm5hbWVzcGFjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hcHBpbmdbY29udHJhY3ROYW1lXS5wdXNoKGNvbnN0cnVjdG9yKTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5yZWdpc3RlckNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb250cmFjdE5hbWUsIGNvbnN0cnVjdG9yKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyKHR5cGVDb25zdC5jb21wb25lbnQsIGNvbnRyYWN0TmFtZSwgY29uc3RydWN0b3IpO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLnJlZ2lzdGVyRGlyZWN0aXZlID0gZnVuY3Rpb24gKGNvbnRyYWN0TmFtZSwgY29uc3RydWN0b3IpIHtcclxuICAgIHRoaXMucmVnaXN0ZXIodHlwZUNvbnN0LmRpcmVjdGl2ZSwgY29udHJhY3ROYW1lLCBjb25zdHJ1Y3Rvcik7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoY29udHJhY3RUeXBlLCBjb250cmFjdE5hbWUsIGlnbm9yZUNhc2UpIHtcclxuICAgIHZhciBjb25zdHJ1Y3RvcnMsIG1hcHBpbmcgPSB0aGlzLmdldE1hcHBpbmcoY29udHJhY3RUeXBlKTtcclxuICAgIHZhciBzZWdtZW50cyA9IGNvbnRyYWN0TmFtZS5zcGxpdCgnLicpO1xyXG4gICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xyXG5cclxuICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgY29udHJhY3ROYW1lID0gc2VnbWVudHMucG9wKCk7XHJcbiAgICAgICAgbmFtZXNwYWNlID0gc2VnbWVudHMuam9pbignLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkobWFwcGluZywgY29udHJhY3ROYW1lLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9ycyA9IG1hcHBpbmdbY29udHJhY3ROYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGRlZiA9IGl0ZW0ucHJvdG90eXBlLiQkZGVmO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UoZGVmLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmNvbnRhaW5zQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbnRyYWN0TmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbnModHlwZUNvbnN0LmNvbXBvbmVudCwgY29udHJhY3ROYW1lLCB0cnVlKTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5jb250YWluc0RpcmVjdGl2ZSA9IGZ1bmN0aW9uIChjb250cmFjdE5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5zKHR5cGVDb25zdC5kaXJlY3RpdmUsIGNvbnRyYWN0TmFtZSwgdHJ1ZSk7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGNvbnRyYWN0VHlwZSwgY29udHJhY3ROYW1lLCBpZ25vcmVDYXNlKSB7XHJcbiAgICB2YXIgY29uc3RydWN0b3JzLCBtYXBwaW5nID0gdGhpcy5nZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSk7XHJcbiAgICB2YXIgc2VnbWVudHMgPSBjb250cmFjdE5hbWUuc3BsaXQoJy4nKTtcclxuICAgIHZhciBuYW1lc3BhY2UgPSAnJztcclxuXHJcbiAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnRyYWN0TmFtZSA9IHNlZ21lbnRzLnBvcCgpO1xyXG4gICAgICAgIG5hbWVzcGFjZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaWdub3JlQ2FzZSkge1xyXG4gICAgICAgIGNvbnN0cnVjdG9ycyA9IHV0aWxzLmdldFByb3BlcnR5KG1hcHBpbmcsIGNvbnRyYWN0TmFtZSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcnMgPSBtYXBwaW5nW2NvbnRyYWN0TmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnN0cnVjdG9ycyA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRyYWN0VHlwZSArICcgJyArIGNvbnRyYWN0TmFtZSArICcgaXMgbm90IGRlZmluZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgZGVmID0gaXRlbS5wcm90b3R5cGUuJCRkZWY7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWYubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShkZWYubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb250cmFjdE5hbWUgKyAnIGlzIG5vdCBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG5hbWVzcGFjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2VzID0gY29uc3RydWN0b3JzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRkZWYubmFtZXNwYWNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbmFtZXNwYWNlICcgKyBuYW1lc3BhY2VzLmpvaW4oJ3wnKSArICcgYWxsIGhhdmUgJyArIGNvbnRyYWN0TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yc1swXTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbiAoY29udHJhY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmNvbXBvbmVudCwgY29udHJhY3ROYW1lKTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5nZXREaXJlY3RpdmUgPSBmdW5jdGlvbiAoY29udHJhY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmRpcmVjdGl2ZSwgY29udHJhY3ROYW1lKTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5nZXRGaWx0ZXIgPSBmdW5jdGlvbiAoY29udHJhY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmZpbHRlciwgY29udHJhY3ROYW1lKTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5nZXRTZXJ2aWNlID0gZnVuY3Rpb24gKGNvbnRyYWN0TmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5zZXJ2aWNlLCBjb250cmFjdE5hbWUpO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChjb250cmFjdFR5cGUsIGNvbnRyYWN0TmFtZSkge1xyXG4gICAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5nZXQoY29udHJhY3RUeXBlLCBjb250cmFjdE5hbWUpLCBpbnN0YW5jZTtcclxuXHJcbiAgICBzd2l0Y2ggKGNvbnRyYWN0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgdHlwZUNvbnN0LmNvbXBvbmVudDpcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudChjb25zdHJ1Y3Rvcik7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgdHlwZUNvbnN0LmRpcmVjdGl2ZTpcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZURpcmVjdGl2ZShjb25zdHJ1Y3Rvcik7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgdHlwZUNvbnN0LmZpbHRlcjpcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUZpbHRlcihjb25zdHJ1Y3Rvcik7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgdHlwZUNvbnN0LnNlcnZpY2U6XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVTZXJ2aWNlKGNvbnN0cnVjdG9yKTsgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3IoKTsgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmNyZWF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25zdHJ1Y3Rvcikge1xyXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRDb21wb25lbnQoY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG4gICAgdmFyIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XHJcbiAgICBpbnN0YW5jZS4kb25Jbml0KCk7XHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuY3JlYXRlRGlyZWN0aXZlID0gZnVuY3Rpb24gKGNvbnN0cnVjdG9yKSB7XHJcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldERpcmVjdGl2ZShjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3IoKTtcclxuICAgIGluc3RhbmNlLiRvbkluaXQoKTtcclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5jcmVhdGVGaWx0ZXIgPSBmdW5jdGlvbiAoY29uc3RydWN0b3IpIHtcclxuICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0RmlsdGVyKGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgaW5zdGFuY2UuJG9uSW5pdCgpO1xyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmNyZWF0ZVNlcnZpY2UgPSBmdW5jdGlvbiAoY29uc3RydWN0b3IpIHtcclxuICAgIHZhciBpbnN0YW5jZSwgc2VydmljZXMgPSB0aGlzLmdldEluc3RhbmNlcyh0eXBlQ29uc3Quc2VydmljZSk7XHJcblxyXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRTZXJ2aWNlKGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJGRlZi5ub25TaGFyZWQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gc2VydmljZXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2YgY29uc3RydWN0b3I7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3IoKTtcclxuICAgICAgICBpbnN0YW5jZS4kb25Jbml0KCk7XHJcbiAgICAgICAgc2VydmljZXMucHVzaChpbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLnNlcnZpY2UgPSBmdW5jdGlvbiAoY29udHJhY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVTZXJ2aWNlKGNvbnRyYWN0TmFtZSk7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuZ2V0V2FpdGluZ1RvRXh0ZW5kcyA9IGZ1bmN0aW9uIChjb250cmFjdFR5cGUpIHtcclxuICAgIGlmICghdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0pIHtcclxuICAgICAgICB0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLnNldFdhaXRpbmdUb0V4dGVuZHMgPSBmdW5jdGlvbiAoY29udHJhY3RUeXBlLCB2YWx1ZSkge1xyXG4gICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0gPSB2YWx1ZTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5jaGVja0NvbnRyYWN0TmFtZSA9IGZ1bmN0aW9uIChjb250cmFjdE5hbWUsIGNvbnRyYWN0VHlwZSkge1xyXG4gICAgaWYgKG5hbWVQYXR0ZXJuLnRlc3QoY29udHJhY3ROYW1lKSkge1xyXG4gICAgICAgIHZhciBjb25zdHJ1Y3Rvck5hbWUgPSAnJztcclxuICAgICAgICB2YXIgc2VnbWVudHMgPSBjb250cmFjdE5hbWUuc3BsaXQoJy0nKTtcclxuXHJcbiAgICAgICAgc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gdXRpbHMudXBwZXJjYXNlKHNlZ21lbnRbMF0pICsgc2VnbWVudC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29udHJhY3RUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmNvbXBvbmVudDpcclxuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSAnQ29tcG9uZW50JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5kaXJlY3RpdmU6XHJcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ0RpcmVjdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuZmlsdGVyOlxyXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdGaWx0ZXInO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LnNlcnZpY2U6XHJcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ1NlcnZpY2UnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3JOYW1lO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRyYWN0TmFtZSArICdpcyBub3QgYSB2YWxpZCBuYW1lJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuYnVpbGRDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIG1ha2VDb25zdHJ1Y3Rvcihjb250cmFjdE5hbWUsIGRlZiwgb3B0aW9ucykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGNvbnN0cnVjdCxcclxuICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgPSB0aGlzLmNoZWNrQ29udHJhY3ROYW1lKGNvbnRyYWN0TmFtZSwgb3B0aW9ucy5jb250cmFjdFR5cGUpLFxyXG4gICAgICAgIHdhaXRpbmdUb0V4dGVuZHMgPSBzZWxmLmdldFdhaXRpbmdUb0V4dGVuZHMob3B0aW9ucy5jb250cmFjdFR5cGUpO1xyXG5cclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKG9wdGlvbnMuY29uc3RydWN0KSkge1xyXG4gICAgICAgIGNvbnN0cnVjdCA9IG9wdGlvbnMuY29uc3RydWN0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yLnN1cGVyKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3Iuc3VwZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QodGhpcy4kJGRlZi5wcm9wcykpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmV4dGVuZCh0cnVlLCB0aGlzLCB1dGlscy5jb3B5KHRydWUsIHRoaXMuJCRkZWYucHJvcHMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNBcnJheSh0aGlzLiQkZGVmLmV2ZW50cykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJCRkZWYuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmW2VdID0gbmV3IE1lc3NlbmdlcigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjb25zdHJ1Y3RvciA9IG5ldyBGdW5jdGlvbignY29uc3RydWN0JywgJ1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbiAnICsgY29uc3RydWN0b3JOYW1lICsgJygpe2NvbnN0cnVjdC5jYWxsKHRoaXMpO307JykoY29uc3RydWN0KTtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihvcHRpb25zLnN1cGVyQ2xhc3MpKSB7XHJcbiAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3Rvciwgb3B0aW9ucy5zdXBlckNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZih1dGlscy5pc09iamVjdChkZWYuc3VwZXJJbnN0YW5jZSkgJiYgKGRlZi5zdXBlckluc3RhbmNlIGluc3RhbmNlb2Ygb3B0aW9ucy5zdXBlckNsYXNzKSkge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IHV0aWxzLm9iamVjdChkZWYuc3VwZXJJbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQka2V5ID0gY29udHJhY3ROYW1lO1xyXG5cclxuICAgIC8vIGFwcGx5IHByb3BlcnRpZXMgYW5kIG1ldGhvZHNcclxuICAgIGlmICh1dGlscy5pc1N0cmluZyhkZWYuZXh0ZW5kcykpIHtcclxuICAgICAgICBpZiAoaW5qZWN0b3IuY29udGFpbnMob3B0aW9ucy5jb250cmFjdFR5cGUsIGRlZi5leHRlbmRzKSkge1xyXG4gICAgICAgICAgICB2YXIgc3VwZXJPbmUgPSBpbmplY3Rvci5nZXQob3B0aW9ucy5jb250cmFjdFR5cGUsIGRlZi5leHRlbmRzKTtcclxuICAgICAgICAgICAgdmFyIGRlZjIgPSBleHRlbmREZWYoZGVmLCBzdXBlck9uZSk7XHJcbiAgICAgICAgICAgIHJlbWFpbkNvbnN0cnVjdG9yKGNvbnRyYWN0TmFtZSwgZGVmMiwgY29uc3RydWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHN1cGVyTmFtZTogZGVmLmV4dGVuZHMsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHN1cGVyT25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZjIgPSBleHRlbmREZWYoZGVmLCBzdXBlck9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3IoY29udHJhY3ROYW1lLCBkZWYyLCBjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlbWFpbkNvbnN0cnVjdG9yKGNvbnRyYWN0TmFtZSwgZGVmLCBjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXh0ZW5kRGVmKGRlZiwgc3VwZXJPbmUpIHtcclxuICAgICAgICBpZiAoc3VwZXJPbmUucHJvdG90eXBlLiQkZGVmICYmIHN1cGVyT25lLnByb3RvdHlwZS4kJGRlZi5wcm90ZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG9wdGlvbnMuY29udHJhY3RUeXBlICsgJzogJyArIGRlZi5leHRlbmRzICsgJyBpcyBwcm90ZWN0ZWQsIGl0IGlzIG5vdCBhbGxvd2VkIHRvIGV4dGVuZCEnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0cnVlLCB1dGlscy5jb3B5KHRydWUsIHN1cGVyT25lLnByb3RvdHlwZS4kJGRlZiksIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtYWluQ29uc3RydWN0b3IobmFtZSwgZGVmLCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJGRlZiA9IGRlZjtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIG1ldGhvZHNcclxuICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QoZGVmLm1ldGhvZHMpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmV4dGVuZChjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIGRlZi5tZXRob2RzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudFxyXG4gICAgICAgIGlmKCFkZWYubG9jYWwpe1xyXG4gICAgICAgICAgICBpbmplY3Rvci5yZWdpc3RlcihvcHRpb25zLmNvbnRyYWN0VHlwZSwgbmFtZSwgY29uc3RydWN0b3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYW55IGNvbXBvbmVudCBleHRlbmRzIGN1cnJlbnQgY29tcG9uZW50XHJcbiAgICAgICAgdmFyIHdhaXRpbmdUb0V4dGVuZHMyID0gW107XHJcbiAgICAgICAgd2FpdGluZ1RvRXh0ZW5kcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnN1cGVyTmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jYWxsYmFjay5jYWxsKG51bGwsIGNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdhaXRpbmdUb0V4dGVuZHMyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxmLnNldFdhaXRpbmdUb0V4dGVuZHMob3B0aW9ucy5jb250cmFjdFR5cGUsIHdhaXRpbmdUb0V4dGVuZHMyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuaW5qZWN0U2VydmljZXMgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoaW5zdGFuY2UuJCRkZWYuaW5qZWN0KSkge1xyXG4gICAgICAgIHV0aWxzLmZvckVhY2goaW5zdGFuY2UuJCRkZWYuaW5qZWN0LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZVtrZXldID0gc2VsZi5jcmVhdGVTZXJ2aWNlKHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHR5cGVDb25zdCwgSW5qZWN0b3IsIGluamVjdG9yIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZSgpIHtcclxuXHJcbn1cclxuXHJcblNlcnZpY2UucHJvdG90eXBlLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XHJcblxyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kJGRlZi5vbkluaXQpKSB7XHJcbiAgICAgICAgdGhpcy4kJGRlZi5vbkluaXQuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTtcclxuXHJcblNlcnZpY2UucHJvdG90eXBlLiRkZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kJGRlZi5vbkRlc3Ryb3kpKSB7XHJcbiAgICAgICAgdGhpcy4kJGRlZi5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYXhpb3NfXzsiXSwic291cmNlUm9vdCI6IiJ9