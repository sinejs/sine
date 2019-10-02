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

class AttrNode extends _base__WEBPACK_IMPORTED_MODULE_1__["VNode"] {
    constructor(name, value) {
        super(_base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].attribute, name, value);
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

    belongTo(key) {
        return this.orgNodeName === key;
    }

    setValue(value) {
        this.nodeValue = value;
        this.compile(this.options);
    }

    compile(options) {
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
    }

    link(scope, ownerElement, ownerComponent) {
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
                ownerComponent.$initAttr(this.nodeName, this.binding.compute());
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
    }

    detect() {
        if (this.directive == null) {
            if (this.hasChange()) {
                this.update();
            }
        }
        else {
            this.directive.$detect(this.ownerElement, this.ownerComponent);
        }
    }

    hasChange() {
        return this.binding.detect();
    }

    update() {
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
    }

    afterLink() {
        if (this.directive) {
            this.directive.$insert(this.ownerElement, this.ownerComponent);
        }
    }

    directives() {
        return this.directive == null ? [] : [this.directive];
    }

    getOuterTpl() {
        return this.orgNodeName + (this.nodeValue == null ? '' : ('=' + this.quote + this.nodeValue + this.quote));
    }

    getInnerTpl() {
        return this.orgNodeName + (this.nodeValue == null ? '' : ('=' + this.quote + this.nodeValue + this.quote));
    }

    dispose(isFromDirective) {
        if (isFromDirective) {
            this.directive = null;
        }

        this.binding.destroy();
        this.binding = null;
        this.ownerVElement = null;
        this.ownerElement = null;
        this.ownerComponent = null;
        this.$destroy();
    }

    destroy() {
        if (this.directive != null) {
            this.directive.$dispose(true);
            this.directive = null;
        }

        this.dispose();
    }
}




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

// virtual node
class VNode {
    constructor(type, name, value) {
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

    $pushChild(child) {
        child.parentNode = this;
        this.childNodes.push(child);
    }

    $buildSibling() {
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
    }

    $clearParentAndSibling() {
        this.parentNode = null;
        this.previousSibling = null;
        this.nextSibling = null;
    }

    $remove() {
        if (this.parentNode != null) {
            this.parentNode.removeChild(this);
        }
    }

    $destroy() {
        this.$remove();
        this.$clearParentAndSibling();
        this.childNodes.length = 0;
        this.firstChild = null;
        this.lastChild = null;
        this.ownerVDocument = null;
        this.scope = null;
    }

    hasChildNodes() {
        return this.childNodes.length !== 0;
    }

    clearChildNodes() {
        this.childNodes.forEach(function (child) {
            child.destroy();
        });
        this.childNodes.length = 0;
    }

    appendChild(child) {
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
    }

    insertBefore(refChild, newChild) {
        if (newChild.parentNode != null) {
            newChild.parentNode.removeChild(newChild);
        }
        var index = this.childNodes.indexOf(refChild);
        if (index === -1) {
            throw new Error('Ref node is not a child of specified node');
        }

        newChild.parentNode = this;

        if (refChild.previousSibling != null) {
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
    }

    insertAfter(refChild, newChild) {
        if (refChild.nextSibling == null) {
            return this.appendChild(newChild);
        }

        return this.insertBefore(refChild.nextSibling, newChild);
    }

    removeChild(child) {
        var index = this.childNodes.indexOf(child);
        if (index === -1) {
            throw new Error('Remove node is not a child of specified node');
        }

        if (child.previousSibling != null) {
            child.previousSibling.nextSibling = child.nextSibling;
        }

        if (child.nextSibling != null) {
            child.nextSibling.previousSibling = child.previousSibling;
        }

        if (index === 0) {
            this.firstChild = child.nextSibling;
        }

        if (index === (this.childNodes.length - 1)) {
            this.lastChild = child.previousSibling;
        }

        child.$clearParentAndSibling();
        this.childNodes.splice(index, 1);

        return child;
    }

    replaceChild(refChild, newChild) {
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
    }

    cloneNode() {
        throw new Error('not implemented');
    }

    compile(options) {
        this.childNodes.forEach(function (child) {
            child.compile(options);
        });
    }

    directives() {
        var result = [];
        this.childNodes.map(function (child) {
            return child.directives();
        }).forEach(function (item) {
            result = result.concat(item);
        });
        return result;
    }

    getDirective() {
        return [];
    }

    link(scope) {
        this.scope = scope;
        return this.childNodes.map(function (child) {
            child.link(scope);
        });
    }

    afterLink() {
        this.childNodes.forEach(function (child) {
            child.afterLink();
        });
    }

    detect() {
        if (this.hasChange()) {
            this.update();
        }
    }

    hasChange() {
        return false;
    }

    update() {

    }

    destroy() {
        this.childNodes.map(function (child) {
            child.destroy();
        });
        this.$destroy();
    }
}




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




class ExpNode {
    constructor(text) {
        this.text = text;
        this.value = null;
        this.oldValue = null;
    }

    getProps(scope, options) {
        var objProps = [];
        Object(_parser__WEBPACK_IMPORTED_MODULE_2__["compute"])(this.text, new Proxy(scope, new _utility_handler__WEBPACK_IMPORTED_MODULE_1__["GetPropertyHandler"](objProps, true)), options);
        return objProps;
    }

    compute(scope, options) {
        this.oldValue = this.value;
        this.value = Object(_parser__WEBPACK_IMPORTED_MODULE_2__["compute"])(this.text, scope, options);
    }

    detect() {
        return this.value !== this.oldValue;
    }

    destroy() {
        this.value = null;
        this.oldValue = null;
        this.props = null;
    }
}

class Binding {
    constructor() {
        this.scope = null;
        this.text = '';
        this.isExp = false;
        this.segments = [];
        this.rightStr = '';
        this.output = false;
        this.value = null;
        this.change = new _utility_message__WEBPACK_IMPORTED_MODULE_0__["Messenger"]();
    }

    setScope(value) {
        this.scope = value;
    }

    setOutput(value) {
        this.output = value;
    }

    bind(text, isExp) {
        if (text == null) {
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
    }

    compute(options) {
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
    }

    watchProps(action) {
        if (this.output) {
            return;
        }

        var self = this, objProps = [];

        this.segments.forEach(function (segment) {
            objProps = objProps.concat(segment.exp.getProps(self.scope));
        });

        objProps.forEach(function (objProp) {
            self.scope.$watch(objProp.obj, objProp.prop, function () {
                self.change.fire();
            });
        });

        if (action != null) {
            self.change.on(action);
        }
    }

    detect(options) {
        if (this.output) {
            return false;
        }
        var self = this;
        this.compute();
        return this.segments.some(function (segment) {
            return segment.exp.detect(self.scope, options);
        });
    }

    destroy() {
        this.segments.forEach(function (segment) {
            segment.exp.destroy();
        });
        this.scope = null;
    }
}



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
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/base.js");


class CDataSectionNode extends _base__WEBPACK_IMPORTED_MODULE_0__["VNode"] {
    constructor(){
        super(_base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"].cdataSection);
    }
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
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/base.js");


class CommentNode extends _base__WEBPACK_IMPORTED_MODULE_0__["VNode"] {
    constructor(){
        super(_base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"].comment, '#comment');
    }

    link() {
        return document.createComment(this.nodeValue);
    }
}




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



class CustomNode extends _base__WEBPACK_IMPORTED_MODULE_1__["VNode"] {
    constructor(name, linker){
        super(_base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].custom, name);
        this.linker = linker;
    }

    link(scope) {
        this.scope = scope;
        return this.linker.call(this, scope);
    }

    afterLink() {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onInsert)) {
            return this.onInsert.call(this);
        }
    }

    detect() {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDetect)) {
            return this.onDetect.call(this);
        }
    }

    hasChange() {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onHasChange)) {
            return this.onHasChange.call(this);
        }
    }

    update() {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onUpdate)) {
            return this.onUpdate.call(this);
        }
    }

    destroy() {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
            return this.onDestroy.call(this);
        }
        this.$destroy();
    }
}



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
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/base.js");


class DocumentTypeNode extends _base__WEBPACK_IMPORTED_MODULE_0__["VNode"] {
    constructor() {
        super(_base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"].documentType);
    }
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
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/base.js");


class DocumentNode extends _base__WEBPACK_IMPORTED_MODULE_0__["VNode"] {
    constructor() {
        super(_base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"].document);
    }
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
/* harmony import */ var _utility_ele_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/ele-utils */ "./src/utility/ele-utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom */ "./src/core/custom.js");
/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attribute */ "./src/core/attribute.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");






class ElementNode extends _base__WEBPACK_IMPORTED_MODULE_1__["VNode"] {
    constructor() {
        super(_base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].element, name);
        this.attributes = [];
        this.element = null;
        this.component = null;
        this.selfClosed = false;
        this.compileOptions = null;
        this.isComponent = false;
    }

    $pushAttribute(attr) {
        attr.ownerVElement = this;
        this.attributes.push(attr);
    }

    hasAttributes() {
        return this.attributes.length !== 0;
    }

    setAttribute(key, value) {
        var target, matches = this.attributes.filter(function (attr) {
            return attr.belongTo(key);
        });

        if (matches.length > 0) {
            target = matches[0];
            target.setValue(value);
        }
        else {
            target = new _attribute__WEBPACK_IMPORTED_MODULE_3__["AttrNode"](key, value);
            target.ownerVElement = this;
            target.compile(this.compileOptions);
        }

        this.attributes.push(target);

        return target;
    }

    removeAttribute(key) {
        var target = [], self = this;

        if (key instanceof _attribute__WEBPACK_IMPORTED_MODULE_3__["AttrNode"]) {
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
    }

    appendAttribute(attr) {
        if (attr.ownerVElement != null) {
            throw new Error("Current attribute is not new!");
        }

        attr.ownerVElement = this;
        attr.compile(this.compileOptions);
        this.attributes.push(attr);
        return attr;
    }

    getOuterTpl() {
        var attrTpl = '', childTpl = '';

        this.attributes.forEach(function (attr) {
            attrTpl += ' ';
            attrTpl += attr.getOuterTpl();
        });

        this.childNodes.forEach(function (child) {
            childTpl += child.getOuterTpl();
        });

        var tpl = '<' + this.nodeName + attrTpl + '>' + childTpl;

        if (!this.selfClosed) {
            tpl += ('</' + this.nodeName + '>');
        }

        return tpl;
    }

    getInnerTpl() {
        var childTpl = '';

        this.childNodes.forEach(function (child) {
            childTpl += child.getOuterTpl();
        });

        return childTpl;
    }

    setOuterTpl(tpl) {
        var self = this;
        Object(_parser__WEBPACK_IMPORTED_MODULE_4__["parse"])(tpl).forEach(function (vnode) {
            vnode.parentNode = null;
            self.parentNode.insertBefore(self, vnode);
        });
        self.parentNode.removeChild(self);
    }

    setInnerTpl(tpl) {
        var self = this;
        this.clearChildNodes();
        Object(_parser__WEBPACK_IMPORTED_MODULE_4__["parse"])(tpl).forEach(function (vnode) {
            vnode.parentNode = null;
            self.appendChild(vnode);
        });
    }

    getDirective(key) {
        var result = [];

        this.attributes.map(function (attr) {
            return attr.directives();
        }).forEach(function (item) {
            result = result.concat(item);
        });

        return result.filter(function (item) {
            return item.$$meta.selector === key;
        });
    }

    compile(options) {
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
    }

    directives() {
        var result = [];

        this.attributes.map(function (attr) {
            return attr.directives();
        }).forEach(function (item) {
            result = result.concat(item);
        });

        if (this.component == null) {
            this.childNodes.map(function (child) {
                return child.directives();
            }).forEach(function (item) {
                result = result.concat(item);
            });
        }

        return result;
    }

    link(scope) {
        var self = this;

        self.scope = scope;
        self.element = document.createElement(self.nodeName);

        if (this.isComponent) {
            this.component = scope.$createComponent(this.nodeName);
            this.component.$bindVNode(this);
            self.attributes.forEach(function (attr) {
                attr.link(scope, self.element, self.component);
            });
            self.component.$initAttrDone();
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
    }

    afterLink() {
        this.attributes.forEach(function (attr) {
            attr.afterLink();
        });

        if (this.component == null) {
            this.childNodes.forEach(function (child) {
                child.afterLink();
            });
        }
    }

    detect() {
        this.attributes.forEach(function (attr) {
            attr.detect();
        });
        if (this.component == null) {
            this.childNodes.forEach(function (child) {
                child.detect();
            });
        }
    }

    dispose(isFromComponent) {
        if (this.component == null) {
            this.childNodes.forEach(function (child) {
                child.destroy();
            });
        }
        else if (isFromComponent) {
            this.component = null;
        }

        this.attributes.forEach(function (attr) {
            attr.destroy();
        });

        this.attributes.length = 0;
        this.removeDomElement();
        this.compileOptions = null;
        this.$destroy();
    }

    destroy() {
        if (this.component != null) {
            this.component.$dispose(true);
            this.component = null;
        }

        this.dispose();
    }

    getDomElement() {
        return this.element;
    }

    removeDomElement() {
        if (this.element != null) {
            _utility_ele_utils__WEBPACK_IMPORTED_MODULE_0__["removeNode"](this.element);
        }
    }

    createElement(name) {
        return new ElementNode(name);
    }

    createAttr(name) {
        return new _attribute__WEBPACK_IMPORTED_MODULE_3__["AttrNode"](name);
    }

    createCustom(name, linker) {
        return new _custom__WEBPACK_IMPORTED_MODULE_2__["CustomNode"](name, linker);
    }
}



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
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/base.js");


class DocumentFragmentNode extends _base__WEBPACK_IMPORTED_MODULE_0__["VNode"] {
    constructor(){
        super(_base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"].documentFragment, '#document-fragment');
    }
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





class TextNode extends _base__WEBPACK_IMPORTED_MODULE_2__["VNode"] {
    constructor() {
        super(_base__WEBPACK_IMPORTED_MODULE_2__["VNodeType"].text, '#text');
        this.binding = new _binding__WEBPACK_IMPORTED_MODULE_3__["Binding"]();
        this.element = null;
    }

    compile() {
        this.binding.bind(this.nodeValue);
    }

    link(scope) {
        var self = this;

        this.binding.setScope(scope);

        this.binding.watchProps(function () {
            self.detect();
        });

        return this.render(this.binding.compute());
    }

    hasChange() {
        return this.binding.detect();
    }

    update() {
        _utility_ele_utils__WEBPACK_IMPORTED_MODULE_1__["replaceNode"](this.element, this.render(this.binding.value));
    }

    render(value) {
        this.element = document.createTextNode(value);
        return this.element;
    }

    getOuterTpl() {
        return this.nodeValue;
    }

    getInnerTpl() {
        return this.nodeValue;
    }

    destroy() {
        this.binding.destroy();
        this.binding = null;
        this.element = null;
        this.$destroy();
    }
}



/***/ }),

/***/ "./src/decorator/directive.js":
/*!************************************!*\
  !*** ./src/decorator/directive.js ***!
  \************************************/
/*! exports provided: directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony import */ var _view_injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/injector */ "./src/view/injector.js");


function directive(meta) {
    return function (target) {
        var selector = meta.selector || target.name;
        _view_injector__WEBPACK_IMPORTED_MODULE_0__["injector"].registerConstructor(_view_injector__WEBPACK_IMPORTED_MODULE_0__["typeConst"].directive, selector, target, meta);
    };
}



/***/ }),

/***/ "./src/decorator/service.js":
/*!**********************************!*\
  !*** ./src/decorator/service.js ***!
  \**********************************/
/*! exports provided: service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "service", function() { return service; });
/* harmony import */ var _view_injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/injector */ "./src/view/injector.js");


function service(meta) {
    return function (target) {
        var selector = meta.selector || target.name;
        _view_injector__WEBPACK_IMPORTED_MODULE_0__["injector"].registerConstructor(_view_injector__WEBPACK_IMPORTED_MODULE_0__["typeConst"].service, selector, target, meta);
    };
}



/***/ }),

/***/ "./src/directive/bind.js":
/*!*******************************!*\
  !*** ./src/directive/bind.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator/directive */ "./src/decorator/directive.js");



class BindDirective extends _view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"]{
    constructor(){
        super();
    }

    onInsert(ele, binding){
        ele.innerText = binding.compute();
    }

    onUpdate(ele, binding) {
        this.onInsert(ele, binding);
    }
}

Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
    namespace: 'sine',
    selector: 'n-bind'
})(BindDirective);

/***/ }),

/***/ "./src/directive/embed.js":
/*!********************************!*\
  !*** ./src/directive/embed.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator/directive */ "./src/decorator/directive.js");



class EmbedDirective extends _view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"] {
    constructor() {
        super();
    }

    onCompile(attrNode, options) {
        var embedTpl = options.getEmbedTpl();
        if (embedTpl) {
            attrNode.ownerVElement.setInnerTpl(embedTpl);
        }
    }
}

Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
    namespace: 'sine',
    selector: 'n-embed'
})(EmbedDirective);

/***/ }),

/***/ "./src/directive/hide.js":
/*!*******************************!*\
  !*** ./src/directive/hide.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator/directive */ "./src/decorator/directive.js");



class HideDirective extends _view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"]{
    constructor(){
        super();
    }

    onInsert(ele, binding){
        ele.style.display = binding.compute() ? 'none' : 'initial';
    }

    onUpdate(ele, binding) {
        this.onInsert(ele, binding);
    }
}

Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
    namespace: 'sine',
    selector: 'n-hide'
})(HideDirective);

/***/ }),

/***/ "./src/directive/if.js":
/*!*****************************!*\
  !*** ./src/directive/if.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator/directive */ "./src/decorator/directive.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");




class IfDirective extends _view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"] {
    constructor() {
        super();
        this.comment = null;
    }

    onInsert(ele, binding) {
        this.comment = document.createComment('n-if');
        if (!binding.compute()) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
        }
    }

    onUpdate(ele, binding) {
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
    }

    onDestroy() {
        this.comment = null;
    }
}

Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
    namespace: 'sine',
    selector: 'n-if'
})(IfDirective);

/***/ }),

/***/ "./src/directive/index.js":
/*!********************************!*\
  !*** ./src/directive/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bind */ "./src/directive/bind.js");
/* empty/unused harmony star reexport *//* harmony import */ var _embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embed */ "./src/directive/embed.js");
/* empty/unused harmony star reexport *//* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hide */ "./src/directive/hide.js");
/* empty/unused harmony star reexport *//* harmony import */ var _if__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./if */ "./src/directive/if.js");
/* empty/unused harmony star reexport *//* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model */ "./src/directive/model.js");
/* empty/unused harmony star reexport *//* harmony import */ var _repeat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./repeat */ "./src/directive/repeat.js");
/* empty/unused harmony star reexport *//* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show */ "./src/directive/show.js");
/* empty/unused harmony star reexport *//* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./src/directive/style.js");
/* empty/unused harmony star reexport *//* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./switch */ "./src/directive/switch/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state */ "./src/directive/state/index.js");
/* empty/unused harmony star reexport */










/***/ }),

/***/ "./src/directive/model.js":
/*!********************************!*\
  !*** ./src/directive/model.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator/directive */ "./src/decorator/directive.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");




class ModelDirective extends _view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"] {
    constructor() {
        super();
    }

    update(ele, binding, com) {
        if (com == null) {
            ele.value = binding.compute();
        }
        else {
            com.$setAttr('value', binding.compute());
        }
    }

    onInsert(ele, binding, com) {
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
            throw new Error('Compoent ' + com.$$meta.selector + 'must define [change] event');
        }
    }

    onUpdate(ele, binding, com) {
        this.update(ele, binding, com);
    }
}

Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
    namespace: 'sine',
    selector: 'n-model'
})(ModelDirective);

/***/ }),

/***/ "./src/directive/repeat.js":
/*!*********************************!*\
  !*** ./src/directive/repeat.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator/directive */ "./src/decorator/directive.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/component */ "./src/view/component.js");





class RepeatDirective extends _view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"] {
    constructor() {
        super();
        this.scope = null;
        this.itemExp = '';
        this.itemsExp = '';
        this.itemTemplate = '';
        this.dataItems = [];
        this.cmpItems = [];
        this.header = null;
        this.footer = null;
    }

    onCompile(attrNode) {
        var arg = attrNode.nodeValue;
        var eleNode = attrNode.ownerVElement;
        var pattern = /^(\w+)\s+in\s+(\w+)$/i;
        var result = pattern.exec(arg);

        if (result == null) {
            throw new Error('n-repeat: parameter is not valid');
        }

        this.itemExp = result[1];
        this.itemsExp = result[2];

        eleNode.removeAttribute(attrNode);
        this.itemTemplate = eleNode.getOuterTpl();

        var self = this;
        var custom = eleNode.createCustom('n-repeat', function (scope) {
            var fragment = document.createDocumentFragment();
            var items = scope.$eval(self.itemsExp);

            self.scope = scope;
            self.setDataItems(items);
            self.header = document.createComment('start: n-repeat');
            self.footer = document.createComment('end: n-repeat');

            fragment.appendChild(self.header);
            fragment.appendChild(self.footer);
            return fragment;
        });

        eleNode.parentNode.replaceChild(eleNode, custom);
        eleNode.destroy();

        custom.onInsert = function () {
            self.render();
        };

        custom.onDetect = function () {
            var items = self.scope.$eval(self.itemsExp);

            if (self.dataItems !== items) {
                self.setDataItems(items);
                self.render();
            }
            else {
                self.cmpItems.forEach(function (childScope) {
                    childScope.$detect();
                });
            }
        };

        custom.onDestroy = function () {
            self.$destroy();
            eleNode = null;
            custom = null;
        };
    }

    onDestroy() {
        this.cmpItems.forEach(function (cmpItem) {
            cmpItem.$destroy();
        });
        this.cmpItems = null;
        this.scope = null;
        this.dataItems = null;
        this.header = null;
        this.footer = null;
    }

    setDataItems(value) {
        var self = this;

        if (_utility__WEBPACK_IMPORTED_MODULE_2__["isArray"](value)) {
            this.dataItems = value;
        }
        else {
            this.dataItems = [];
        }

        this.scope.$watch(this.dataItems, 'length', function () {
            self.render();
        });
    }

    getCmpItem(dataItem) {
        var self = this, filters = this.cmpItems.filter(function (item) {
            return item[self.itemExp] === dataItem;
        });

        if (filters.length === 0) {
            return null;
        }

        var target = filters[0];

        this.cmpItems = this.cmpItems.filter(function (item) {
            return item[self.itemExp] !== dataItem;
        });

        return target;
    }

    render() {
        var self = this;
        var fragment = document.createDocumentFragment();
        var newCmpItems = [];

        _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](self.dataItems, function (key, item) {
            var cmpItem = self.getCmpItem(item);

            if (cmpItem == null) {
                cmpItem = new _view_component__WEBPACK_IMPORTED_MODULE_3__["Component"]({
                    template: self.itemTemplate
                });
                cmpItem[self.itemExp] = item;
                cmpItem.$inherit(self.scope);
            }

            fragment.appendChild(cmpItem.$render(true));
            newCmpItems.push(cmpItem);
        });

        if (self.cmpItems.length > 0) {
            self.cmpItems.forEach(function (repeatItem) {
                repeatItem.$destroy();
            });
        }

        self.cmpItems = newCmpItems;
        _utility__WEBPACK_IMPORTED_MODULE_2__["removeNodeBetween"](self.header, self.footer);
        self.footer.parentNode.insertBefore(fragment, self.footer);
    }
}

Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
    namespace: 'sine',
    selector: 'n-repeat'
})(RepeatDirective);


/***/ }),

/***/ "./src/directive/show.js":
/*!*******************************!*\
  !*** ./src/directive/show.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator/directive */ "./src/decorator/directive.js");



class ShowDirective extends _view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"]{
    constructor(){
        super();
    }

    onInsert(ele, binding){
        ele.style.display = binding.compute() ? 'initial' : 'none';
    }

    onUpdate(ele, binding) {
        this.onInsert(ele, binding);
    }
}

Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
    namespace: 'sine',
    selector: 'n-show'
})(ShowDirective);

/***/ }),

/***/ "./src/directive/state/checked.js":
/*!****************************************!*\
  !*** ./src/directive/state/checked.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/directive/state/state.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator/directive */ "./src/decorator/directive.js");



class CheckedDirective extends _state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"] {
    constructor() {
        super('checked');
    }
}

Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
    namespace: 'sine',
    selector: 'n-checked'
})(CheckedDirective);

/***/ }),

/***/ "./src/directive/state/disabled.js":
/*!*****************************************!*\
  !*** ./src/directive/state/disabled.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/directive/state/state.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator/directive */ "./src/decorator/directive.js");



class DisabledDirective extends _state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"] {
    constructor() {
        super('disabled');
    }
}

Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
    namespace: 'sine',
    selector: 'n-disabled'
})(DisabledDirective);

/***/ }),

/***/ "./src/directive/state/index.js":
/*!**************************************!*\
  !*** ./src/directive/state/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checked */ "./src/directive/state/checked.js");
/* empty/unused harmony star reexport *//* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disabled */ "./src/directive/state/disabled.js");
/* empty/unused harmony star reexport *//* harmony import */ var _readonly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readonly */ "./src/directive/state/readonly.js");
/* empty/unused harmony star reexport *//* harmony import */ var _selected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selected */ "./src/directive/state/selected.js");
/* empty/unused harmony star reexport */




/***/ }),

/***/ "./src/directive/state/readonly.js":
/*!*****************************************!*\
  !*** ./src/directive/state/readonly.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/directive/state/state.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator/directive */ "./src/decorator/directive.js");



class ReadonlyDirective extends _state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"] {
    constructor() {
        super('readonly');
    }
}

Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
    namespace: 'sine',
    selector: 'n-readonly'
})(ReadonlyDirective);

/***/ }),

/***/ "./src/directive/state/selected.js":
/*!*****************************************!*\
  !*** ./src/directive/state/selected.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/directive/state/state.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator/directive */ "./src/decorator/directive.js");



class SelectedDirective extends _state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"] {
    constructor() {
        super('selected');
    }
}

Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
    namespace: 'sine',
    selector: 'n-selected'
})(SelectedDirective);

/***/ }),

/***/ "./src/directive/state/state.js":
/*!**************************************!*\
  !*** ./src/directive/state/state.js ***!
  \**************************************/
/*! exports provided: StateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateDirective", function() { return StateDirective; });
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view/directive */ "./src/view/directive.js");


class StateDirective extends _view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"]{
    constructor(attrName){
        super();
        this.attrName = attrName;
    }

    onInsert(ele, binding){
        if (binding.compute()) {
            if (!ele.hasAttribute(this.attrName)) {
                ele.setAttribute(this.attrName, '');
            }
        }
        else {
            if (ele.hasAttribute(this.attrName)) {
                ele.removeAttribute(this.attrName);
            }
        }
    }

    onUpdate(ele, binding) {
        this.onInsert(ele, binding);
    }
}



/***/ }),

/***/ "./src/directive/style.js":
/*!********************************!*\
  !*** ./src/directive/style.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator/directive */ "./src/decorator/directive.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");




class StyleDirective extends _view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"]{
    constructor(){
        super();
    }

    onInsert(ele, binding){
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
            binding.scope.$watch(value, /\w+/i, function () {
                _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](value, function (key, value) {
                    ele.style[key] = value;
                });
            });
        }
        else {
            throw new Error('Parameter of n-style should be string or object');
        }
    }

    onUpdate(ele, binding) {
        this.onInsert(ele, binding);
    }
}

Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
    namespace: 'sine',
    selector: 'n-style'
})(StyleDirective);


/***/ }),

/***/ "./src/directive/switch/index.js":
/*!***************************************!*\
  !*** ./src/directive/switch/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch */ "./src/directive/switch/switch.js");
/* empty/unused harmony star reexport *//* harmony import */ var _switch_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch-default */ "./src/directive/switch/switch-default.js");
/* empty/unused harmony star reexport *//* harmony import */ var _switch_when__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch-when */ "./src/directive/switch/switch-when.js");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "./src/directive/switch/switch-default.js":
/*!************************************************!*\
  !*** ./src/directive/switch/switch-default.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator/directive */ "./src/decorator/directive.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility */ "./src/utility/index.js");




class SwitchDefaultDirective extends _view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"] {
    constructor() {
        super();
        this.attrNode = null;
        this.comment = null;
    }

    isMatch() {
        var match = true, vEle = this.attrNode.ownerVElement;

        while (vEle.previousSibling != null && match) {
            var whenDir = vEle.previousSibling.getDirective('n-switch-when');

            vEle = vEle.previousSibling;

            if (!whenDir.length) {
                continue;
            }

            match = !whenDir[0].isMatch;
        }

        return match;
    }

    onCompile(attrNode, options) {
        this.attrNode = attrNode;
    }

    onInsert(ele, binding) {
        this.comment = document.createComment('n-switch-default');

        if (!this.isMatch()) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
        }
    }

    onDetect(ele, binding) {
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
    }

    onDestroy() {
        this.attrNode = null;
        this.comment = null;
    }
}

Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
    namespace: 'sine',
    selector: 'n-switch-default'
})(SwitchDefaultDirective);

/***/ }),

/***/ "./src/directive/switch/switch-when.js":
/*!*********************************************!*\
  !*** ./src/directive/switch/switch-when.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator/directive */ "./src/decorator/directive.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility */ "./src/utility/index.js");




class SwitchWhenDirective extends _view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"] {
    constructor() {
        super();
        this.isMatch = false;
        this.attrNode = null;
        this.comment = null;
    }

    updateIsMatch(ele, binding) {
        var vEle = this.attrNode.ownerVElement;
        var switchDir = vEle.parentNode.getDirective('n-switch');

        if (!switchDir.length) {
            throw new Error('Require n-switch directive');
        }

        this.isMatch = binding.compute() === switchDir[0].value;
    }

    onCompile(attrNode, options) {
        this.attrNode = attrNode;
    }

    onInsert(ele, binding) {
        this.comment = document.createComment('n-switch-when');
        this.updateIsMatch(ele, binding);

        if (!this.isMatch) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
        }
    }

    onDetect(ele, binding) {
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
    }

    onDestroy() {
        this.attrNode = null;
        this.comment = null;
    }
}

Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
    namespace: 'sine',
    selector: 'n-switch-when'
})(SwitchWhenDirective);

/***/ }),

/***/ "./src/directive/switch/switch.js":
/*!****************************************!*\
  !*** ./src/directive/switch/switch.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator/directive */ "./src/decorator/directive.js");



class SwitchDirective extends _view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"] {
    constructor() {
        super();
        this.value = null;
    }

    onInsert(ele, binding) {
        this.value = binding.compute();
    }

    onUpdate(ele, binding) {
        this.value = binding.compute();
    }
}

Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
    namespace: 'sine',
    selector: 'n-switch'
})(SwitchDirective);

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["bootstrap"]; });

/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser */ "./src/parser/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["compile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compute", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["compute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["parse"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/service/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive */ "./src/directive/index.js");
/* empty/unused harmony star reexport */





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
/*! exports provided: compile, compute, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compute", function() { return compute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lexer */ "./src/parser/lexer.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser */ "./src/parser/parser.js");
/* harmony import */ var _html_lexer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-lexer */ "./src/parser/html-lexer.js");
/* harmony import */ var _html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html-parser */ "./src/parser/html-parser.js");






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

function parse(html) {
    var lexer = new _html_lexer__WEBPACK_IMPORTED_MODULE_3__["HtmlLexer"](parseOptions);
    var parser = new _html_parser__WEBPACK_IMPORTED_MODULE_4__["HtmlParser"](lexer, parseOptions);
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
    var lexer = new _lexer__WEBPACK_IMPORTED_MODULE_1__["Lexer"](parseOptions);
    var parser = new _parser__WEBPACK_IMPORTED_MODULE_2__["Parser"](lexer, parseOptions);
    options = options || {};
    options.createFilter = function (name) {
        return injector.createFilter(name);
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

/***/ "./src/service/index.js":
/*!******************************!*\
  !*** ./src/service/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template-cache */ "./src/service/template-cache.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/service/template-cache.js":
/*!***************************************!*\
  !*** ./src/service/template-cache.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/service */ "./src/view/service.js");
/* harmony import */ var _decorator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorator/service */ "./src/decorator/service.js");




class TemplateCacheService extends _view_service__WEBPACK_IMPORTED_MODULE_1__["Service"] {
    constructor() {
        super();
        this.tplCache = {};
        this.promiseCache = {};
    }

    getTplByUrl(url) {
        var self = this;

        if (this.tplCache[url]) {
            return new Promise(function (resolve) {
                resolve(self.tplCache[url]);
            });
        }

        if (!this.promiseCache[url]) {
            this.promiseCache[url] = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (res) {
                self.promiseCache[url] = null;
                self.tplCache[url] = res.data || '';
                return self.tplCache[url];
            });
        }

        return this.promiseCache[url];
    }
}

Object(_decorator_service__WEBPACK_IMPORTED_MODULE_2__["service"])({
    namespace: 'sine',
    selector: '$templateCache'
})(TemplateCacheService);

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

class SetPropertyHandler {
    constructor(deepProxy) {
        this.selfKey = '__self__';
        this.deepProxy = deepProxy;
    }

    get(target, key) {
        if (this.selfKey === key) {
            return target;
        }

        var value = target[key];

        if (this.deepProxy && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
            value = new Proxy(value, new SetPropertyHandler(this.deepProxy));
        }

        return value;
    }

    set(target, key, value) {
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

            propChangingMsg.fire({
                target: target,
                key: key,
                data: validation
            });

            if (validation.isValid) {
                target[key] = value;
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
    }
}

class GetPropertyHandler {
    constructor(propMaps, deepProxy) {
        this.propMaps = propMaps;
        this.deepProxy = deepProxy;
    }

    get(target, key) {
        var value = target[key];

        if (this.deepProxy && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
            value = new Proxy(value, new GetPropertyHandler(this.propMaps, this.deepProxy));
        }

        var existed = this.propMaps.some(function (item) {
            return item.obj === target && item.prop === key;
        });

        if (!existed) {
            this.propMaps.push({
                obj: target,
                prop: key
            });
        }

        return value;
    }
}



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


class Messenger {
    constructor() {
        this.handlers = [];
    }

    on(fn) {
        this.handlers.push(fn);
    }

    off(fn) {
        for (var i = 0; i < this.handlers.length; i++) {
            if (this.handlers[i] === fn) {
                this.handlers.splice(i, 1);
            }
        }
    }

    fire(args, scope) {
        var returnValue;
        scope = scope || this;
        for (var i = 0; i < this.handlers.length; i++) {
            if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.handlers[i])) {
                returnValue = this.handlers[i].call(scope, args);
            }
        }
        return returnValue;
    }
}

class MessengerBus {
    constructor() {
        this.messengers = {};
    }

    get(e) {
        if (!this.messengers[e]) {
            this.messengers[e] = new Messenger();
        }
        return this.messengers[e];
    }

    on(e, fn) {
        this.get(e).on(fn);
    }

    off(e, fn) {
        this.get(e).off(fn);
    }

    fire(e, args, scope) {
        return this.get(e).fire(args, scope);
    }
}



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



class PropertyChangeSubject {
    constructor() {
        this.plainMap = new Map();
        this.regexMap = new Map();
    }

    on(prop, action, options) {
        var map = _utils__WEBPACK_IMPORTED_MODULE_0__["isRegExp"](prop) ? this.regexMap : this.plainMap;

        if (!map.has(prop)) {
            map.set(prop, []);
        }

        if (options) {
            action.beforeChanged = options.beforeChanged;
        }

        map.get(prop).push(action);
    }

    off(prop, action) {
        var map = _utils__WEBPACK_IMPORTED_MODULE_0__["isRegExp"](prop) ? this.regexMap : this.plainMap;

        if (!map.has(prop)) {
            return;
        }

        var actions = map.get(prop);
        var index = actions.indexOf(action);

        if (index !== -1) {
            actions.splice(index, 1);
        }
    }

    fireChanged(prop, args) {
        var self = this;

        if (this.plainMap.has(prop)) {
            this.plainMap.get(prop).forEach(function (action) {
                if (!action.beforeChanged) {
                    action.call(self, prop, args);
                }
            });
        }

        this.regexMap.forEach(function (actions, pattern) {
            if (pattern.test(prop)) {
                actions.forEach(function (action) {
                    if (!action.beforeChanged) {
                        action.call(self, prop, args);
                    }
                });
            }
        });
    }

    fireChanging(prop, args) {
        var self = this;

        if (this.plainMap.has(prop)) {
            this.plainMap.get(prop).forEach(function (action) {
                if (action.beforeChanged) {
                    action.call(self, prop, args);
                }
            });
        }

        this.regexMap.forEach(function (actions, pattern) {
            if (pattern.test(prop)) {
                actions.forEach(function (action) {
                    if (action.beforeChanged) {
                        action.call(self, prop, args);
                    }
                });
            }
        });
    }

    destroy() {
        this.plainMap.clear();
        this.regexMap.clear();
    }
}

class ObjectPropertyChangeSubject {
    constructor() {
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
        this.objMap = new Map();
    }

    on(obj, prop, action, options) {
        if (!this.objMap.has(obj)) {
            this.objMap.set(obj, new PropertyChangeSubject());
        }

        this.objMap.get(obj).on(prop, action, options);
    }

    off(obj, prop, action) {
        if (this.objMap.has(obj)) {
            this.objMap.get(obj).off(prop, action);
        }
    }

    fireChanged(obj, prop, args) {
        if (this.objMap.has(obj)) {
            this.objMap.get(obj).fireChanged(prop, args);
        }
    }

    fireChanging(obj, prop, args) {
        if (this.objMap.has(obj)) {
            this.objMap.get(obj).fireChanging(prop, args);
        }
    }

    destroy() {
        this.offChange.call(this);
        this.objMap.forEach(function (item) {
            item.destroy();
        });
        this.objMap = null;
    }
}



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
    var deep = false, objIndex = 0, obj = arguments[objIndex], filter;

    if (isBoolean(obj)) {
        deep = obj;
        objIndex++;
        obj = arguments[objIndex];
    }

    if (arguments.length > objIndex + 1) {
        filter = arguments[objIndex + 1];
    }

    if (isArray(obj)) {
        var newArr = [];
        obj.forEach(function (item, index) {
            if (filter == null || filter(obj, index, item)) {
                newArr.push(deep ? copy(item) : item);
            }
        });
        return newArr;
    }

    if (isObject(obj)) {
        var newObj = object(obj);
        forEach(obj, function (key, value) {
            if (filter == null || filter(obj, key, value)) {
                newObj[key] = deep ? copy(value) : value;
            }
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
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _utility_ele_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/ele-utils */ "./src/utility/ele-utils.js");
/* harmony import */ var _utility_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/handler */ "./src/utility/handler.js");
/* harmony import */ var _utility_subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/subject */ "./src/utility/subject.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");








class Component {
    get proxy() {
        return new Proxy(this, new _utility_handler__WEBPACK_IMPORTED_MODULE_3__["SetPropertyHandler"](true));
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
        this.$$propChanged = new _utility_subject__WEBPACK_IMPORTED_MODULE_4__["ObjectPropertyChangeSubject"]();

        if (meta != null) {
            this.$setMeta(meta);
        }

        _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].injectServices(this);
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
        return _utility_utils__WEBPACK_IMPORTED_MODULE_1__["hasProperty"](this, prop, true);
    }

    $initAttr(prop, value) {
        var oldValue = _utility_utils__WEBPACK_IMPORTED_MODULE_1__["getProperty"](this, prop, true);

        if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.beforeAttrChange)) {
            this.beforeAttrChange.call(this, prop, value, oldValue);
        }

        _utility_utils__WEBPACK_IMPORTED_MODULE_1__["setProperty"](this, prop, value, true);

        if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.afterAttrChange)) {
            this.afterAttrChange.call(this, prop, value, oldValue);
        }
    }

    $initAttrDone() {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.onInit)) {
            this.onInit.call(this);
        }
    }

    $setAttr(prop, value) {
        var oldValue = _utility_utils__WEBPACK_IMPORTED_MODULE_1__["getProperty"](this, prop, true);

        if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.beforeAttrChange)) {
            this.beforeAttrChange.call(this, prop, value, oldValue);
        }

        _utility_utils__WEBPACK_IMPORTED_MODULE_1__["setProperty"](this.proxy, prop, value, true);

        if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.afterAttrChange)) {
            this.afterAttrChange.call(this, prop, value, oldValue);
        }
    }

    $listen(e, fn) {
        var messenger = _utility_utils__WEBPACK_IMPORTED_MODULE_1__["getProperty"](this, e, true);
        if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isMessenger"])(messenger)) {
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
            if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](meta.template)) {
                resolve(meta.template);
            }
            else if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](meta.templateUrl)) {
                _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].service('$templateCache').getTplByUrl(meta.templateUrl).then(function (tpl) {
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

        if (spaceName && _utility_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"](using)) {
            _utility_utils__WEBPACK_IMPORTED_MODULE_1__["some"](using, function (key, value) {
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
    }

    $hasVNodes() {
        return _utility_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"](this.$$vnodes);
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
    }

    $refresh(sync) {
        this.$clearVNodes();
        return this.$render(sync);
    }

    $mount(selectorOrElement, sync) {
        var self = this, element;

        if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](selectorOrElement)) {
            element = document.querySelector(selectorOrElement);
        }
        else {
            element = selectorOrElement;
        }

        _utility_ele_utils__WEBPACK_IMPORTED_MODULE_2__["clearChildNodes"](element);

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
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.afterViewMount)) {
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

        if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.onDestroy)) {
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
        var component = _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].createComponent(constructor);
        this.$$childComponents.push(component);
        component.$$parentComponent = this;
        return component;
    }

    $eval(exp) {
        return Object(_parser__WEBPACK_IMPORTED_MODULE_6__["compute"])(exp, this);
    }

    $inherit(parentCmp) {
        var self = this;

        Object.setPrototypeOf(self, _utility_utils__WEBPACK_IMPORTED_MODULE_1__["object"](parentCmp));

        // todo - resolve issue calling parent component's lifecycle hooks
        _utility_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"](self.$hooks(), function (hook) {
            if (self.hasOwnProperty(hook) == null) {
                self[hook] = function () {

                };
            }
        });
    }
}

/***/ }),

/***/ "./src/view/directive.js":
/*!*******************************!*\
  !*** ./src/view/directive.js ***!
  \*******************************/
/*! exports provided: Directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directive", function() { return Directive; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");



class Directive {
    constructor() {
        Directive.construct.call(this);
    }

    static construct() {
        this.$$binding = null;
        this.$$vnode = null;
        this.output = false;
        _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this);
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
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onCompile)) {
            this.onCompile.call(this, this.$$vnode, options);
        }
    }

    $insert(ele, com) {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onInsert)) {
            this.onInsert.call(this, ele, this.$$binding, com);
        }
    }

    $detect(ele, com) {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDetect)) {
            return this.onDetect.call(this, ele, this.$$binding, com);
        }

        if (this.$$binding.detect()) {
            this.$update(ele, com);
        }
    }

    $update(ele, com) {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onUpdate)) {
            this.onUpdate.call(this, ele, this.$$binding, com);
        }
    }

    $dispose(isFromVNode) {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
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

/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");



class Filter {
    constructor(){
        Filter.construct.call(this);
    }

    static construct() {
        _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this);
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
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onExecute)) {
            return this.onExecute.apply(this, arguments);
        }
    }

    $destroy() {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
            this.onDestroy.call(this);
        }
    }
}

/***/ }),

/***/ "./src/view/index.js":
/*!***************************!*\
  !*** ./src/view/index.js ***!
  \***************************/
/*! exports provided: namespace, injector, component, directive, filter, service, isComponent, isDirective, isFilter, isService, bootstrap */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
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
                    methods: {
                        onInsert: def,
                        onUpdate: def
                    }
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
                    methods: {
                        onExecute: def
                    }
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
        superClass: makeConstructor(_component__WEBPACK_IMPORTED_MODULE_3__["Component"])
    });
}

function directive(name, def) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
        def = {
            methods: {
                onInsert: def,
                onUpdate: def
            }
        };
    }

    return _injector__WEBPACK_IMPORTED_MODULE_2__["injector"].buildConstructor(name, def, {
        contractType: _injector__WEBPACK_IMPORTED_MODULE_2__["typeConst"].directive,
        superClass: makeConstructor(_directive__WEBPACK_IMPORTED_MODULE_4__["Directive"])
    });
}

function filter(name, def) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
        def = {
            methods: {
                onExecute: def
            }
        };
    }

    return _injector__WEBPACK_IMPORTED_MODULE_2__["injector"].buildConstructor(name, def, {
        contractType: _injector__WEBPACK_IMPORTED_MODULE_2__["typeConst"].filter,
        superClass: makeConstructor(_filter__WEBPACK_IMPORTED_MODULE_5__["Filter"])
    });
}

function service(name, def) {
    return _injector__WEBPACK_IMPORTED_MODULE_2__["injector"].buildConstructor(name, def, {
        contractType: _injector__WEBPACK_IMPORTED_MODULE_2__["typeConst"].service,
        superClass: makeConstructor(_service__WEBPACK_IMPORTED_MODULE_6__["Service"])
    });
}

function isComponent(obj) {
    return obj instanceof _component__WEBPACK_IMPORTED_MODULE_3__["Component"];
}

function isDirective(obj) {
    return obj instanceof _directive__WEBPACK_IMPORTED_MODULE_4__["Directive"];
}

function isFilter(obj) {
    return obj instanceof _filter__WEBPACK_IMPORTED_MODULE_5__["Filter"];
}

function isService(obj) {
    return obj instanceof _service__WEBPACK_IMPORTED_MODULE_6__["Service"];
}

function bootstrap(selectorOrElement) {
    var element, tpl;

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](selectorOrElement)) {
        element = document.querySelector(selectorOrElement);
    }
    else {
        element = selectorOrElement;
    }

    tpl = element.innerHTML;

    new _component__WEBPACK_IMPORTED_MODULE_3__["Component"]({
        template: tpl
    }).$mount(element);
}

function makeConstructor(cls) {
    function f() {
        cls.construct.call(this);
    }

    f.prototype = cls.prototype;
    return f;
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
            constructors = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](mapping, selector, true);
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
                return meta.namespace && _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](meta.namespace) === _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](namespace);
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
            constructors = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](mapping, selector, true);
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
                return meta.namespace && _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](meta.namespace) === _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](namespace);
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
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
            constructor = this.getComponent(constructor);
        }
        return new constructor();
    }

    createDirective(constructor) {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
            constructor = this.getDirective(constructor);
        }
        return new constructor();
    }

    createFilter(constructor) {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
            constructor = this.getFilter(constructor);
        }
        return new constructor();
    }

    createService(constructor) {
        var instance, services = this.getInstances(typeConst.service);

        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
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
            throw new Error(selector + 'is not a valid name');
        }
    }

    buildConstructor(selector, meta, options) {
        var self = this,
            constructor,
            constructorName = this.checkSelector(selector, options.contractType),
            waitingToExtends = self.getWaitingToExtends(options.contractType),
            onConstruct = function () {
                if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](constructor.super)) {
                    constructor.super.call(this);
                }
                if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](meta.construct)) {
                    meta.construct.call(this, _utility_message__WEBPACK_IMPORTED_MODULE_1__["Messenger"]);
                }
            };

        constructor = new Function('onConstruct', '"use strict";return function ' + constructorName + '(){onConstruct.call(this);};')(onConstruct);

        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](options.superClass)) {
            _utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](constructor, options.superClass);
        }

        meta.selector = selector;

        // apply properties and methods
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](meta.extends)) {
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
            var copy = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["copy"](true, superMeta, function (obj, key) {
                return !(obj === superMeta && (key === 'construct' || key === 'methods'));
            });
            return _utility_utils__WEBPACK_IMPORTED_MODULE_0__["merge"](true, copy, meta);
        }

        function remainConstructor(selector, meta, constructor, superOne) {
            if (superOne != null) {
                _utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](constructor, superOne);
            }

            // create methods
            if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](meta.methods)) {
                _utility_utils__WEBPACK_IMPORTED_MODULE_0__["extend"](constructor.prototype, meta.methods);
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

        var copy = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["copy"](true, superMeta, function (obj, key) {
            return !(obj === superMeta && (key === 'construct' || key === 'methods'));
        });

        meta = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["merge"](true, copy, meta);

        constructor.prototype.$$meta = meta;

        // register component if it is global
        if (!meta.local) {
            injector.register(contractType, selector, constructor);
        }
    }

    injectServices(instance) {
        var self = this, meta = instance.$getMeta();

        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](meta.inject)) {
            _utility_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](meta.inject, function (key, value) {
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



/***/ }),

/***/ "./src/view/service.js":
/*!*****************************!*\
  !*** ./src/view/service.js ***!
  \*****************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");



class Service {
    constructor() {
        Service.construct.call(this);
    }

    static construct() {
        _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this);
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
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
            this.onDestroy.call(this);
        }
    }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2NkYXRhc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY3VzdG9tLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9kb2N0eXBlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS90ZXh0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RlY29yYXRvci9zZXJ2aWNlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2JpbmQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvaGlkZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9pZi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9tb2RlbC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc2hvdy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9jaGVja2VkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3JlYWRvbmx5LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3N0YXRlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC13aGVuLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9odG1sLWxleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2h0bWwtcGFyc2VyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2xleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL3BhcnNlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3NlcnZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL3RlbXBsYXRlLWNhY2hlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9lbGUtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9tZXNzYWdlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9zdWJqZWN0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS91dGlscy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvY29tcG9uZW50LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2luamVjdG9yLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9zZXJ2aWNlLmpzIiwid2VicGFjazovL3NpbmUvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImF4aW9zXCIsXCJjb21tb25qczJcIjpcImF4aW9zXCIsXCJhbWRcIjpcImF4aW9zXCIsXCJyb290XCI6XCJheGlvc1wifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7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O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixtREFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxxREFBSztBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFLO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FBMEI7QUFDSDtBQUNFO0FBQ0M7Ozs7Ozs7Ozs7Ozs7QUNIMUI7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDVjs7QUFFaEMsc0RBQWEsWUFBWSw0Q0FBSztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsNkZBQTZGO0FBQ25IO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvRUFBb0U7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsUUFBUSxzREFBYTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLG9CQUFvQjtBQUNuRTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxVQUFVO0FBQzdEO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0lBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWSx1REFBYztBQUMxQixZQUFZLHNEQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN0WkE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDTjs7QUFFN0I7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGtEQUFRO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx5REFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNoQ0EsbUQiLCJmaWxlIjoic2luZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImF4aW9zXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImF4aW9zXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInNpbmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJheGlvc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wic2luZVwiXSA9IGZhY3Rvcnkocm9vdFtcImF4aW9zXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9heGlvc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xyXG5cclxuLy8gLy8gV2luZG93IEV2ZW50c1xyXG4vLyBjYXNlICdvbi1sb2FkJzpcclxuLy8gY2FzZSAnb24tdW5sb2FkJzpcclxuLy8gLy8gRm9ybSBFbGVtZW50IEV2ZW50c1xyXG4vLyBjYXNlICdvbi1jaGFuZ2UnOlxyXG4vLyBjYXNlICdvbi1zdWJtaXQnOlxyXG4vLyBjYXNlICdvbi1yZXNldCc6XHJcbi8vIGNhc2UgJ29uLXNlbGVjdCc6XHJcbi8vIGNhc2UgJ29uLWJsdXInOlxyXG4vLyBjYXNlICdvbi1mb2N1cyc6XHJcbi8vIC8vIEltYWdlIEV2ZW50c1xyXG4vLyBjYXNlICdvbi1hYm9ydCc6XHJcbi8vIC8vIEtleWJvYXJkIEV2ZW50c1xyXG4vLyBjYXNlICdvbi1rZXlkb3duJzpcclxuLy8gY2FzZSAnb24ta2V5cHJlc3MnOlxyXG4vLyBjYXNlICdvbi1rZXl1cCc6XHJcbi8vIC8vIE1vdXNlIEV2ZW50c1xyXG4vLyBjYXNlICdvbi1jbGljayc6XHJcbi8vIGNhc2UgJ29uLWRibGNsaWNrJzpcclxuLy8gY2FzZSAnb24tbW91c2Vkb3duJzpcclxuLy8gY2FzZSAnb24tbW91c2Vtb3ZlJzpcclxuLy8gY2FzZSAnb24tbW91c2VvdXQnOlxyXG4vLyBjYXNlICdvbi1tb3VzZW92ZXInOlxyXG4vLyBjYXNlICdvbi1tb3VzZXVwJzpcclxudmFyIGV2ZW50VGV4dCA9ICdsb2FkIHVubG9hZCBjaGFuZ2Ugc3VibWl0IHJlc2V0IHNlbGVjdCBibHVyIGZvY3VzIGFib3J0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNlbW92ZSBtb3VzZW91dCBtb3VzZW92ZXIgbW91c2V1cCc7XHJcbnZhciBkb21FdmVudHMgPSBldmVudFRleHQuc3BsaXQoJyAnKTtcclxuXHJcbmNsYXNzIEF0dHJOb2RlIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBzdXBlcihWTm9kZVR5cGUuYXR0cmlidXRlLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5xdW90ZSA9ICdcIic7XHJcbiAgICAgICAgdGhpcy5vcmdOb2RlTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pc0V2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0JpbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRG9tRXZlbnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRGlyZWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3duZXJWRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vd25lckVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3duZXJDb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYmluZGluZyA9IG5ldyBCaW5kaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmVsb25nVG8oa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3JnTm9kZU5hbWUgPT09IGtleTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jb21waWxlKHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZShvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5pc0V2ZW50ID0gdGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCdAJyk7XHJcbiAgICAgICAgdGhpcy5pc0JpbmRpbmcgPSB0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJzonKTtcclxuICAgICAgICB0aGlzLmlzRGlyZWN0aXZlID0gdGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCcqJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFdmVudCB8fCB0aGlzLmlzQmluZGluZyB8fCB0aGlzLmlzRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZU5hbWUgPSB0aGlzLm5vZGVOYW1lLnN1YnN0cigxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0RvbUV2ZW50ID0gdXRpbHMuY29udGFpbnMoZG9tRXZlbnRzLCB0aGlzLm5vZGVOYW1lKTtcclxuICAgICAgICB0aGlzLmJpbmRpbmcuc2V0T3V0cHV0KHRoaXMuaXNFdmVudCk7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nLmJpbmQodGhpcy5ub2RlVmFsdWUsIHRoaXMuaXNFdmVudCB8fCB0aGlzLmlzQmluZGluZyB8fCB0aGlzLmlzRGlyZWN0aXZlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuY29udGFpbnNEaXJlY3RpdmUodGhpcy5ub2RlTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlID0gb3B0aW9ucy5jcmVhdGVEaXJlY3RpdmUodGhpcy5ub2RlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kYmluZFZOb2RlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kaW5nLnNldE91dHB1dCh0aGlzLmRpcmVjdGl2ZS5vdXRwdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXJlY3RpdmUgJyArIHRoaXMubm9kZU5hbWUgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGluayhzY29wZSwgb3duZXJFbGVtZW50LCBvd25lckNvbXBvbmVudCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHRoaXMub3duZXJFbGVtZW50ID0gb3duZXJFbGVtZW50O1xyXG4gICAgICAgIHRoaXMub3duZXJDb21wb25lbnQgPSBvd25lckNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLmJpbmRpbmcuc2V0U2NvcGUoc2NvcGUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0V2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRG9tRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ub2RlTmFtZSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmJpbmRpbmcuY29tcHV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2Fsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50OiBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFyZ3M6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZWxlbWVudDogc2VsZi5vd25lckVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob3duZXJDb21wb25lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgb3duZXJDb21wb25lbnQuJGxpc3Rlbih0aGlzLm5vZGVOYW1lLCBmdW5jdGlvbiAoZSwgYXJncykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYmluZGluZy5jb21wdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQ6IGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYXJnczogYXJncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtZW50OiBzZWxmLm93bmVyRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBzY29wZS4kJGNoaWxkRGlyZWN0aXZlcy5wdXNoKHRoaXMuZGlyZWN0aXZlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRzZXRCaW5kaW5nKHRoaXMuYmluZGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob3duZXJDb21wb25lbnQgIT0gbnVsbCAmJiBvd25lckNvbXBvbmVudC4kaGFzQXR0cih0aGlzLm5vZGVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgb3duZXJDb21wb25lbnQuJGluaXRBdHRyKHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMub3duZXJFbGVtZW50LCB0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXJFbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5iaW5kaW5nLndhdGNoUHJvcHMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kZXRlY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGRldGVjdCh0aGlzLm93bmVyRWxlbWVudCwgdGhpcy5vd25lckNvbXBvbmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhc0NoYW5nZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iaW5kaW5nLmRldGVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5vd25lckNvbXBvbmVudCAhPSBudWxsICYmIHRoaXMub3duZXJDb21wb25lbnQuJGhhc0F0dHIodGhpcy5ub2RlTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudC4kc2V0QXR0cih0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5vd25lckVsZW1lbnQsIHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm93bmVyRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyAmJiB0aGlzLm5vZGVOYW1lID09PSAndmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vd25lckVsZW1lbnQudmFsdWUgPSB0aGlzLmJpbmRpbmcudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJMaW5rKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kaW5zZXJ0KHRoaXMub3duZXJFbGVtZW50LCB0aGlzLm93bmVyQ29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlyZWN0aXZlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUgPT0gbnVsbCA/IFtdIDogW3RoaXMuZGlyZWN0aXZlXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPdXRlclRwbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmdOb2RlTmFtZSArICh0aGlzLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdGhpcy5xdW90ZSArIHRoaXMubm9kZVZhbHVlICsgdGhpcy5xdW90ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElubmVyVHBsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9yZ05vZGVOYW1lICsgKHRoaXMubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB0aGlzLnF1b3RlICsgdGhpcy5ub2RlVmFsdWUgKyB0aGlzLnF1b3RlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcG9zZShpc0Zyb21EaXJlY3RpdmUpIHtcclxuICAgICAgICBpZiAoaXNGcm9tRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmluZGluZy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLm93bmVyVkVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3duZXJFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm93bmVyQ29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kZGlzcG9zZSh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEF0dHJOb2RlIH07XHJcbiIsIlxyXG52YXIgVk5vZGVUeXBlID0ge1xyXG4gICAgZWxlbWVudDogMSxcclxuICAgIGF0dHJpYnV0ZTogMixcclxuICAgIHRleHQ6IDMsXHJcbiAgICBjZGF0YVNlY3Rpb246IDQsXHJcbiAgICBlbnRpdHlSZWZlcmVuY2U6IDUsXHJcbiAgICBlbnRpdHk6IDYsXHJcbiAgICBwcm9jZXNzaW5nSW5zdHJ1Y3Rpb246IDcsXHJcbiAgICBjb21tZW50OiA4LFxyXG4gICAgZG9jdW1lbnQ6IDksXHJcbiAgICBkb2N1bWVudFR5cGU6IDEwLFxyXG4gICAgZG9jdW1lbnRGcmFnbWVudDogMTEsXHJcbiAgICBub3RhdGlvbjogMTIsXHJcbiAgICBjdXN0b206IDEwMVxyXG59O1xyXG5cclxuLy8gdmlydHVhbCBub2RlXHJcbmNsYXNzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlVHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5ub2RlTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm93bmVyVkRvY3VtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAkcHVzaENoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgICRidWlsZFNpYmxpbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gKHNlbGYuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuJGJ1aWxkU2libGluZygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICRjbGVhclBhcmVudEFuZFNpYmxpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgJHJlbW92ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLiRyZW1vdmUoKTtcclxuICAgICAgICB0aGlzLiRjbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm93bmVyVkRvY3VtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBoYXNDaGlsZE5vZGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQ2hpbGROb2RlcygpIHtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkLm5leHRTaWJsaW5nID0gY2hpbGQ7XHJcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHRoaXMubGFzdENoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcclxuICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xyXG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAocmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBuZXdDaGlsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQ7XHJcbiAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nID0gbmV3Q2hpbGQ7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMCwgbmV3Q2hpbGQpO1xyXG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRBZnRlcihyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcclxuICAgICAgICBpZiAocmVmQ2hpbGQubmV4dFNpYmxpbmcgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUocmVmQ2hpbGQubmV4dFNpYmxpbmcsIG5ld0NoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3ZlIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBjaGlsZC5uZXh0U2libGluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nLnByZXZpb3VzU2libGluZyA9IGNoaWxkLnByZXZpb3VzU2libGluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoaWxkLiRjbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcGxhY2VDaGlsZChyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcclxuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZC5uZXh0U2libGluZztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sYXN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gbmV3Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWZDaGlsZC4kY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XHJcbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdDaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lTm9kZSgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGUob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5jb21waWxlKG9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpcmVjdGl2ZXMoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGlsZC5kaXJlY3RpdmVzKCk7XHJcbiAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aXZlKCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rKHNjb3BlKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5saW5rKHNjb3BlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZnRlckxpbmsoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmFmdGVyTGluaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYXNDaGFuZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH07XHJcbiIsImltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHkvbWVzc2FnZSc7XHJcbmltcG9ydCB7IEdldFByb3BlcnR5SGFuZGxlciB9IGZyb20gJy4uL3V0aWxpdHkvaGFuZGxlcic7XHJcbmltcG9ydCB7IGNvbXB1dGUgfSBmcm9tICcuLi9wYXJzZXInO1xyXG5cclxuY2xhc3MgRXhwTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9sZFZhbHVlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9wcyhzY29wZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBvYmpQcm9wcyA9IFtdO1xyXG4gICAgICAgIGNvbXB1dGUodGhpcy50ZXh0LCBuZXcgUHJveHkoc2NvcGUsIG5ldyBHZXRQcm9wZXJ0eUhhbmRsZXIob2JqUHJvcHMsIHRydWUpKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIG9ialByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm9sZFZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gY29tcHV0ZSh0aGlzLnRleHQsIHNjb3BlLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRlY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgIT09IHRoaXMub2xkVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9sZFZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByb3BzID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQmluZGluZyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRleHQgPSAnJztcclxuICAgICAgICB0aGlzLmlzRXhwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMucmlnaHRTdHIgPSAnJztcclxuICAgICAgICB0aGlzLm91dHB1dCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlID0gbmV3IE1lc3NlbmdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNjb3BlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE91dHB1dCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMub3V0cHV0ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZCh0ZXh0LCBpc0V4cCkge1xyXG4gICAgICAgIGlmICh0ZXh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmlzRXhwID0gaXNFeHA7XHJcblxyXG4gICAgICAgIGlmIChpc0V4cCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZXhwOiBuZXcgRXhwTm9kZSh0ZXh0KSxcclxuICAgICAgICAgICAgICAgIGxlZnRTdHI6ICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcGF0dGVybiA9IC97eyhbXn1dKil9fS9nO1xyXG4gICAgICAgIHZhciBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcclxuICAgICAgICB2YXIgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XHJcblxyXG4gICAgICAgIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogbWF0Y2guaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBleHA6IG5ldyBFeHBOb2RlKG1hdGNoWzFdKSxcclxuICAgICAgICAgICAgICAgIGxlZnRTdHI6IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcclxuICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWdtZW50cy5sZW5ndGggPiAwICYmIGxhc3RJbmRleCA8IHRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRTdHIgPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlZ21lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy50ZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNFeHAgJiYgdGhpcy5zZWdtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHNbMF0uZXhwLmNvbXB1dGUoc2VsZi5zY29wZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5zZWdtZW50c1swXS5leHAudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudC5leHAuY29tcHV0ZShzZWxmLnNjb3BlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IChzZWdtZW50LmxlZnRTdHIgKyBzZWdtZW50LmV4cC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0ZXh0ICsgdGhpcy5yaWdodFN0cjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2hQcm9wcyhhY3Rpb24pIHtcclxuICAgICAgICBpZiAodGhpcy5vdXRwdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBvYmpQcm9wcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgb2JqUHJvcHMgPSBvYmpQcm9wcy5jb25jYXQoc2VnbWVudC5leHAuZ2V0UHJvcHMoc2VsZi5zY29wZSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvYmpQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChvYmpQcm9wKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc2NvcGUuJHdhdGNoKG9ialByb3Aub2JqLCBvYmpQcm9wLnByb3AsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlLmZpcmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChhY3Rpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZWxmLmNoYW5nZS5vbihhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXRlY3Qob3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0aGlzLm91dHB1dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbXB1dGUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWdtZW50cy5zb21lKGZ1bmN0aW9uIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWdtZW50LmV4cC5kZXRlY3Qoc2VsZi5zY29wZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgc2VnbWVudC5leHAuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCaW5kaW5nIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcblxyXG5jbGFzcyBDRGF0YVNlY3Rpb25Ob2RlIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcihWTm9kZVR5cGUuY2RhdGFTZWN0aW9uKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQ0RhdGFTZWN0aW9uTm9kZSB9OyIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY2xhc3MgQ29tbWVudE5vZGUgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5jb21tZW50LCAnI2NvbW1lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMubm9kZVZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQ29tbWVudE5vZGUgfTtcclxuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY2xhc3MgQ3VzdG9tTm9kZSBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxpbmtlcil7XHJcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmN1c3RvbSwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5saW5rZXIgPSBsaW5rZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbGluayhzY29wZSkge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5saW5rZXIuY2FsbCh0aGlzLCBzY29wZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJMaW5rKCkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25JbnNlcnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uSW5zZXJ0LmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdCgpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGV0ZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRldGVjdC5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYXNDaGFuZ2UoKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkhhc0NoYW5nZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25IYXNDaGFuZ2UuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25VcGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uVXBkYXRlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEN1c3RvbU5vZGUgfTsiLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuXHJcbmNsYXNzIERvY3VtZW50VHlwZU5vZGUgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihWTm9kZVR5cGUuZG9jdW1lbnRUeXBlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRG9jdW1lbnRUeXBlTm9kZSB9O1xyXG4iLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuXHJcbmNsYXNzIERvY3VtZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5kb2N1bWVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IERvY3VtZW50Tm9kZSB9OyIsImltcG9ydCAqIGFzIGVsZVV0aWxzIGZyb20gJy4uL3V0aWxpdHkvZWxlLXV0aWxzJztcclxuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7IEN1c3RvbU5vZGUgfSBmcm9tICcuL2N1c3RvbSc7XHJcbmltcG9ydCB7IEF0dHJOb2RlIH0gZnJvbSAnLi9hdHRyaWJ1dGUnO1xyXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4uL3BhcnNlcic7XHJcblxyXG5jbGFzcyBFbGVtZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5lbGVtZW50LCBuYW1lKTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNlbGZDbG9zZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbXBpbGVPcHRpb25zID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzQ29tcG9uZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJHB1c2hBdHRyaWJ1dGUoYXR0cikge1xyXG4gICAgICAgIGF0dHIub3duZXJWRWxlbWVudCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnB1c2goYXR0cik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQXR0cmlidXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aCAhPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQsIG1hdGNoZXMgPSB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gbWF0Y2hlc1swXTtcclxuICAgICAgICAgICAgdGFyZ2V0LnNldFZhbHVlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IG5ldyBBdHRyTm9kZShrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgdGFyZ2V0Lm93bmVyVkVsZW1lbnQgPSB0aGlzO1xyXG4gICAgICAgICAgICB0YXJnZXQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKHRhcmdldCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQXR0cmlidXRlKGtleSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBbXSwgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBBdHRyTm9kZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmF0dHJpYnV0ZXMuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLmF0dHJpYnV0ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcclxuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHNlbGYuYXR0cmlidXRlcy5pbmRleE9mKG1hdGNoKTtcclxuICAgICAgICAgICAgICAgIG1hdGNoLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYuYXR0cmlidXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQubGVuZ3RoID4gMCA/IHRhcmdldFswXSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQXR0cmlidXRlKGF0dHIpIHtcclxuICAgICAgICBpZiAoYXR0ci5vd25lclZFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3VycmVudCBhdHRyaWJ1dGUgaXMgbm90IG5ldyFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhdHRyLm93bmVyVkVsZW1lbnQgPSB0aGlzO1xyXG4gICAgICAgIGF0dHIuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaChhdHRyKTtcclxuICAgICAgICByZXR1cm4gYXR0cjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPdXRlclRwbCgpIHtcclxuICAgICAgICB2YXIgYXR0clRwbCA9ICcnLCBjaGlsZFRwbCA9ICcnO1xyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICBhdHRyVHBsICs9ICcgJztcclxuICAgICAgICAgICAgYXR0clRwbCArPSBhdHRyLmdldE91dGVyVHBsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZFRwbCArPSBjaGlsZC5nZXRPdXRlclRwbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgdHBsID0gJzwnICsgdGhpcy5ub2RlTmFtZSArIGF0dHJUcGwgKyAnPicgKyBjaGlsZFRwbDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbGZDbG9zZWQpIHtcclxuICAgICAgICAgICAgdHBsICs9ICgnPC8nICsgdGhpcy5ub2RlTmFtZSArICc+Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElubmVyVHBsKCkge1xyXG4gICAgICAgIHZhciBjaGlsZFRwbCA9ICcnO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGRUcGwgKz0gY2hpbGQuZ2V0T3V0ZXJUcGwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoaWxkVHBsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE91dGVyVHBsKHRwbCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBwYXJzZSh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICBzZWxmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYsIHZub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5uZXJUcGwodHBsKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2xlYXJDaGlsZE5vZGVzKCk7XHJcbiAgICAgICAgcGFyc2UodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgc2VsZi5hcHBlbmRDaGlsZCh2bm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aXZlKGtleSkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLm1hcChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0ci5kaXJlY3RpdmVzKCk7XHJcbiAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS4kJG1ldGEuc2VsZWN0b3IgPT09IGtleTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNvbXBpbGVPcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICBhdHRyLmNvbXBpbGUob3B0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pc0NvbXBvbmVudCA9IG9wdGlvbnMuY29udGFpbnNDb21wb25lbnQodGhpcy5ub2RlTmFtZSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuY29tcGlsZShvcHRpb25zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpcmVjdGl2ZXMoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMubWFwKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmRpcmVjdGl2ZXMoKTtcclxuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQuZGlyZWN0aXZlcygpO1xyXG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGluayhzY29wZSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgc2VsZi5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHNlbGYuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2VsZi5ub2RlTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gc2NvcGUuJGNyZWF0ZUNvbXBvbmVudCh0aGlzLm5vZGVOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuJGJpbmRWTm9kZSh0aGlzKTtcclxuICAgICAgICAgICAgc2VsZi5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIubGluayhzY29wZSwgc2VsZi5lbGVtZW50LCBzZWxmLmNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxmLmNvbXBvbmVudC4kaW5pdEF0dHJEb25lKCk7XHJcbiAgICAgICAgICAgIHNlbGYuY29tcG9uZW50LiRtb3VudChzZWxmLmVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIubGluayhzY29wZSwgc2VsZi5lbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbGYuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkLmxpbmsoc2NvcGUpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2VsZi5lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyTGluaygpIHtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICBhdHRyLmFmdGVyTGluaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmFmdGVyTGluaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGV0ZWN0KCkge1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIGF0dHIuZGV0ZWN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXRlY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoaXNGcm9tQ29tcG9uZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc0Zyb21Db21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgYXR0ci5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRG9tRWxlbWVudCgpO1xyXG4gICAgICAgIHRoaXMuY29tcGlsZU9wdGlvbnMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LiRkaXNwb3NlKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREb21FbGVtZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRG9tRWxlbWVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZWxlVXRpbHMucmVtb3ZlTm9kZSh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbGVtZW50KG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnROb2RlKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUF0dHIobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXR0ck5vZGUobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ3VzdG9tKG5hbWUsIGxpbmtlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ3VzdG9tTm9kZShuYW1lLCBsaW5rZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBFbGVtZW50Tm9kZSB9OyIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY2xhc3MgRG9jdW1lbnRGcmFnbWVudE5vZGUgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5kb2N1bWVudEZyYWdtZW50LCAnI2RvY3VtZW50LWZyYWdtZW50Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IERvY3VtZW50RnJhZ21lbnROb2RlIH07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vYmFzZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYXR0cmlidXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9jZGF0YXNlY3Rpb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbW1lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2N1c3RvbSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZG9jdHlwZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZG9jdW1lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ZyYWdtZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi9iaW5kaW5nJztcclxuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCAqIGFzIGVsZVV0aWxzIGZyb20gJy4uL3V0aWxpdHkvZWxlLXV0aWxzJztcclxuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xyXG5cclxuY2xhc3MgVGV4dE5vZGUgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihWTm9kZVR5cGUudGV4dCwgJyN0ZXh0Jyk7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gbmV3IEJpbmRpbmcoKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nLmJpbmQodGhpcy5ub2RlVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmsoc2NvcGUpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZGluZy5zZXRTY29wZShzY29wZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZGluZy53YXRjaFByb3BzKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5kZXRlY3QoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0NoYW5nZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iaW5kaW5nLmRldGVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBlbGVVdGlscy5yZXBsYWNlTm9kZSh0aGlzLmVsZW1lbnQsIHRoaXMucmVuZGVyKHRoaXMuYmluZGluZy52YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldE91dGVyVHBsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbm5lclRwbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmJpbmRpbmcuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuYmluZGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFRleHROb2RlIH07IiwiaW1wb3J0IHsgdHlwZUNvbnN0LCBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcvaW5qZWN0b3InXHJcblxyXG5mdW5jdGlvbiBkaXJlY3RpdmUobWV0YSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICB2YXIgc2VsZWN0b3IgPSBtZXRhLnNlbGVjdG9yIHx8IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyQ29uc3RydWN0b3IodHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IsIHRhcmdldCwgbWV0YSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBkaXJlY3RpdmUgfSIsImltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3L2luamVjdG9yJ1xyXG5cclxuZnVuY3Rpb24gc2VydmljZShtZXRhKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHZhciBzZWxlY3RvciA9IG1ldGEuc2VsZWN0b3IgfHwgdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb25zdHJ1Y3Rvcih0eXBlQ29uc3Quc2VydmljZSwgc2VsZWN0b3IsIHRhcmdldCwgbWV0YSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBzZXJ2aWNlIH0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuY2xhc3MgQmluZERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpe1xyXG4gICAgICAgIGVsZS5pbm5lclRleHQgPSBiaW5kaW5nLmNvbXB1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZShlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLm9uSW5zZXJ0KGVsZSwgYmluZGluZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1iaW5kJ1xyXG59KShCaW5kRGlyZWN0aXZlKTsiLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuY2xhc3MgRW1iZWREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbXBpbGUoYXR0ck5vZGUsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgZW1iZWRUcGwgPSBvcHRpb25zLmdldEVtYmVkVHBsKCk7XHJcbiAgICAgICAgaWYgKGVtYmVkVHBsKSB7XHJcbiAgICAgICAgICAgIGF0dHJOb2RlLm93bmVyVkVsZW1lbnQuc2V0SW5uZXJUcGwoZW1iZWRUcGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWVtYmVkJ1xyXG59KShFbWJlZERpcmVjdGl2ZSk7IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuXHJcbmNsYXNzIEhpZGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoZWxlLCBiaW5kaW5nKXtcclxuICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9IGJpbmRpbmcuY29tcHV0ZSgpID8gJ25vbmUnIDogJ2luaXRpYWwnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMub25JbnNlcnQoZWxlLCBiaW5kaW5nKTtcclxuICAgIH1cclxufVxyXG5cclxuZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWhpZGUnXHJcbn0pKEhpZGVEaXJlY3RpdmUpOyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xyXG5cclxuY2xhc3MgSWZEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ24taWYnKTtcclxuICAgICAgICBpZiAoIWJpbmRpbmcuY29tcHV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKGVsZSwgdGhpcy5jb21tZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgaWYgKGJpbmRpbmcuY29tcHV0ZSgpKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmNvbW1lbnQsIGVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1pZidcclxufSkoSWZEaXJlY3RpdmUpOyIsImV4cG9ydCAqIGZyb20gJy4vYmluZCdcclxuZXhwb3J0ICogZnJvbSAnLi9lbWJlZCdcclxuZXhwb3J0ICogZnJvbSAnLi9oaWRlJ1xyXG5leHBvcnQgKiBmcm9tICcuL2lmJ1xyXG5leHBvcnQgKiBmcm9tICcuL21vZGVsJ1xyXG5leHBvcnQgKiBmcm9tICcuL3JlcGVhdCdcclxuZXhwb3J0ICogZnJvbSAnLi9zaG93J1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlJ1xyXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaCdcclxuZXhwb3J0ICogZnJvbSAnLi9zdGF0ZSciLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcclxuXHJcbmNsYXNzIE1vZGVsRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGVsZSwgYmluZGluZywgY29tKSB7XHJcbiAgICAgICAgaWYgKGNvbSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVsZS52YWx1ZSA9IGJpbmRpbmcuY29tcHV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29tLiRzZXRBdHRyKCd2YWx1ZScsIGJpbmRpbmcuY29tcHV0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoZWxlLCBiaW5kaW5nLCBjb20pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShlbGUsIGJpbmRpbmcsIGNvbSk7XHJcblxyXG4gICAgICAgIGlmIChjb20gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGJpbmRpbmcuc2NvcGUuJHNldEF0dHIoYmluZGluZy50ZXh0LCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzTWVzc2VuZ2VyKGNvbS5jaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICBjb20uY2hhbmdlLm9uKGZ1bmN0aW9uIChlLCBhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZy5zY29wZS4kc2V0QXR0cihiaW5kaW5nLnRleHQsIGFyZ3MubmV3dmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb2VudCAnICsgY29tLiQkbWV0YS5zZWxlY3RvciArICdtdXN0IGRlZmluZSBbY2hhbmdlXSBldmVudCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZShlbGUsIGJpbmRpbmcsIGNvbSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKGVsZSwgYmluZGluZywgY29tKTtcclxuICAgIH1cclxufVxyXG5cclxuZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLW1vZGVsJ1xyXG59KShNb2RlbERpcmVjdGl2ZSk7IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL3ZpZXcvY29tcG9uZW50JztcclxuXHJcbmNsYXNzIFJlcGVhdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXRlbUV4cCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSAnJztcclxuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5jbXBJdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZvb3RlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21waWxlKGF0dHJOb2RlKSB7XHJcbiAgICAgICAgdmFyIGFyZyA9IGF0dHJOb2RlLm5vZGVWYWx1ZTtcclxuICAgICAgICB2YXIgZWxlTm9kZSA9IGF0dHJOb2RlLm93bmVyVkVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXihcXHcrKVxccytpblxccysoXFx3KykkL2k7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhdHRlcm4uZXhlYyhhcmcpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduLXJlcGVhdDogcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtRXhwID0gcmVzdWx0WzFdO1xyXG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSByZXN1bHRbMl07XHJcblxyXG4gICAgICAgIGVsZU5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOb2RlKTtcclxuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGVsZU5vZGUuZ2V0T3V0ZXJUcGwoKTtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjdXN0b20gPSBlbGVOb2RlLmNyZWF0ZUN1c3RvbSgnbi1yZXBlYXQnLCBmdW5jdGlvbiAoc2NvcGUpIHtcclxuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBzY29wZS4kZXZhbChzZWxmLml0ZW1zRXhwKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICAgICAgc2VsZi5zZXREYXRhSXRlbXMoaXRlbXMpO1xyXG4gICAgICAgICAgICBzZWxmLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0OiBuLXJlcGVhdCcpO1xyXG4gICAgICAgICAgICBzZWxmLmZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2VuZDogbi1yZXBlYXQnKTtcclxuXHJcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYuaGVhZGVyKTtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VsZi5mb290ZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVsZU5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZWxlTm9kZSwgY3VzdG9tKTtcclxuICAgICAgICBlbGVOb2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgY3VzdG9tLm9uSW5zZXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLnJlbmRlcigpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGN1c3RvbS5vbkRldGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gc2VsZi5zY29wZS4kZXZhbChzZWxmLml0ZW1zRXhwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLmRhdGFJdGVtcyAhPT0gaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0YUl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIHNlbGYucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNtcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkU2NvcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZFNjb3BlLiRkZXRlY3QoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY3VzdG9tLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi4kZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBlbGVOb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgY3VzdG9tID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmNtcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGNtcEl0ZW0pIHtcclxuICAgICAgICAgICAgY21wSXRlbS4kZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY21wSXRlbXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gbnVsbDtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGFJdGVtcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY29wZS4kd2F0Y2godGhpcy5kYXRhSXRlbXMsICdsZW5ndGgnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVuZGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q21wSXRlbShkYXRhSXRlbSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgZmlsdGVycyA9IHRoaXMuY21wSXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtW3NlbGYuaXRlbUV4cF0gPT09IGRhdGFJdGVtO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZmlsdGVyc1swXTtcclxuXHJcbiAgICAgICAgdGhpcy5jbXBJdGVtcyA9IHRoaXMuY21wSXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtW3NlbGYuaXRlbUV4cF0gIT09IGRhdGFJdGVtO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIHZhciBuZXdDbXBJdGVtcyA9IFtdO1xyXG5cclxuICAgICAgICB1dGlscy5mb3JFYWNoKHNlbGYuZGF0YUl0ZW1zLCBmdW5jdGlvbiAoa2V5LCBpdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBjbXBJdGVtID0gc2VsZi5nZXRDbXBJdGVtKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNtcEl0ZW0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY21wSXRlbSA9IG5ldyBDb21wb25lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBzZWxmLml0ZW1UZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjbXBJdGVtW3NlbGYuaXRlbUV4cF0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgY21wSXRlbS4kaW5oZXJpdChzZWxmLnNjb3BlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY21wSXRlbS4kcmVuZGVyKHRydWUpKTtcclxuICAgICAgICAgICAgbmV3Q21wSXRlbXMucHVzaChjbXBJdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGYuY21wSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZWxmLmNtcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHJlcGVhdEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJlcGVhdEl0ZW0uJGRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxmLmNtcEl0ZW1zID0gbmV3Q21wSXRlbXM7XHJcbiAgICAgICAgdXRpbHMucmVtb3ZlTm9kZUJldHdlZW4oc2VsZi5oZWFkZXIsIHNlbGYuZm9vdGVyKTtcclxuICAgICAgICBzZWxmLmZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmcmFnbWVudCwgc2VsZi5mb290ZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tcmVwZWF0J1xyXG59KShSZXBlYXREaXJlY3RpdmUpO1xyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuY2xhc3MgU2hvd0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpe1xyXG4gICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gYmluZGluZy5jb21wdXRlKCkgPyAnaW5pdGlhbCcgOiAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5vbkluc2VydChlbGUsIGJpbmRpbmcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tc2hvdydcclxufSkoU2hvd0RpcmVjdGl2ZSk7IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcblxyXG5jbGFzcyBDaGVja2VkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2NoZWNrZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWNoZWNrZWQnXHJcbn0pKENoZWNrZWREaXJlY3RpdmUpOyIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuY2xhc3MgRGlzYWJsZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignZGlzYWJsZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWRpc2FibGVkJ1xyXG59KShEaXNhYmxlZERpcmVjdGl2ZSk7IiwiZXhwb3J0ICogZnJvbSAnLi9jaGVja2VkJ1xyXG5leHBvcnQgKiBmcm9tICcuL2Rpc2FibGVkJ1xyXG5leHBvcnQgKiBmcm9tICcuL3JlYWRvbmx5J1xyXG5leHBvcnQgKiBmcm9tICcuL3NlbGVjdGVkJyIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuY2xhc3MgUmVhZG9ubHlEaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigncmVhZG9ubHknKTtcclxuICAgIH1cclxufVxyXG5cclxuZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLXJlYWRvbmx5J1xyXG59KShSZWFkb25seURpcmVjdGl2ZSk7IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcblxyXG5jbGFzcyBTZWxlY3RlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdzZWxlY3RlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tc2VsZWN0ZWQnXHJcbn0pKFNlbGVjdGVkRGlyZWN0aXZlKTsiLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3L2RpcmVjdGl2ZSc7XHJcblxyXG5jbGFzcyBTdGF0ZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZXtcclxuICAgIGNvbnN0cnVjdG9yKGF0dHJOYW1lKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXR0ck5hbWUgPSBhdHRyTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpe1xyXG4gICAgICAgIGlmIChiaW5kaW5nLmNvbXB1dGUoKSkge1xyXG4gICAgICAgICAgICBpZiAoIWVsZS5oYXNBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSwgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZWxlLmhhc0F0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZShlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLm9uSW5zZXJ0KGVsZSwgYmluZGluZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcclxuXHJcbmNsYXNzIFN0eWxlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZyl7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gYmluZGluZy5jb21wdXRlKCk7XHJcblxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgZWxlLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgZWxlLnN0eWxlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJpbmRpbmcuc2NvcGUuJHdhdGNoKHZhbHVlLCAvXFx3Ky9pLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZS5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBvZiBuLXN0eWxlIHNob3VsZCBiZSBzdHJpbmcgb3Igb2JqZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMub25JbnNlcnQoZWxlLCBiaW5kaW5nKTtcclxuICAgIH1cclxufVxyXG5cclxuZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLXN0eWxlJ1xyXG59KShTdHlsZURpcmVjdGl2ZSk7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJ1xyXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC1kZWZhdWx0J1xyXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC13aGVuJyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxpdHknO1xyXG5cclxuY2xhc3MgU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNYXRjaCgpIHtcclxuICAgICAgICB2YXIgbWF0Y2ggPSB0cnVlLCB2RWxlID0gdGhpcy5hdHRyTm9kZS5vd25lclZFbGVtZW50O1xyXG5cclxuICAgICAgICB3aGlsZSAodkVsZS5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCAmJiBtYXRjaCkge1xyXG4gICAgICAgICAgICB2YXIgd2hlbkRpciA9IHZFbGUucHJldmlvdXNTaWJsaW5nLmdldERpcmVjdGl2ZSgnbi1zd2l0Y2gtd2hlbicpO1xyXG5cclxuICAgICAgICAgICAgdkVsZSA9IHZFbGUucHJldmlvdXNTaWJsaW5nO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF3aGVuRGlyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1hdGNoID0gIXdoZW5EaXJbMF0uaXNNYXRjaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbXBpbGUoYXR0ck5vZGUsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmF0dHJOb2RlID0gYXR0ck5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbi1zd2l0Y2gtZGVmYXVsdCcpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNNYXRjaCgpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKGVsZSwgdGhpcy5jb21tZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXRlY3QoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNYXRjaCgpKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmNvbW1lbnQsIGVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1zd2l0Y2gtZGVmYXVsdCdcclxufSkoU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSk7IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbGl0eSc7XHJcblxyXG5jbGFzcyBTd2l0Y2hXaGVuRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pc01hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hdHRyTm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJc01hdGNoKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHZhciB2RWxlID0gdGhpcy5hdHRyTm9kZS5vd25lclZFbGVtZW50O1xyXG4gICAgICAgIHZhciBzd2l0Y2hEaXIgPSB2RWxlLnBhcmVudE5vZGUuZ2V0RGlyZWN0aXZlKCduLXN3aXRjaCcpO1xyXG5cclxuICAgICAgICBpZiAoIXN3aXRjaERpci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlIG4tc3dpdGNoIGRpcmVjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc01hdGNoID0gYmluZGluZy5jb21wdXRlKCkgPT09IHN3aXRjaERpclswXS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbXBpbGUoYXR0ck5vZGUsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmF0dHJOb2RlID0gYXR0ck5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbi1zd2l0Y2gtd2hlbicpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXNNYXRjaChlbGUsIGJpbmRpbmcpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNNYXRjaCkge1xyXG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGV0ZWN0KGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXNNYXRjaChlbGUsIGJpbmRpbmcpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc01hdGNoKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmNvbW1lbnQsIGVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1zd2l0Y2gtd2hlbidcclxufSkoU3dpdGNoV2hlbkRpcmVjdGl2ZSk7IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuXHJcbmNsYXNzIFN3aXRjaERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBiaW5kaW5nLmNvbXB1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZShlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gYmluZGluZy5jb21wdXRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1zd2l0Y2gnXHJcbn0pKFN3aXRjaERpcmVjdGl2ZSk7IiwiZXhwb3J0ICogZnJvbSAnLi91dGlsaXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcclxuZXhwb3J0ICogZnJvbSAnLi9wYXJzZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XHJcblxyXG51dGlscy5pbmhlcml0KEh0bWxMZXhlciwgTGV4ZXIpO1xyXG5mdW5jdGlvbiBIdG1sTGV4ZXIob3B0aW9ucykge1xyXG4gICAgSHRtbExleGVyLnN1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XHJcbn1cclxuXHJcbkh0bWxMZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XHJcbiAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxyXG4gICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyB8fFxyXG4gICAgICAgIGNoID09PSAnQCcgfHwgY2ggPT09ICc6JyB8fCBjaCA9PT0gJyonKTtcclxufTtcclxuXHJcbkh0bWxMZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCwgY3ApIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy0nIHx8IGNoID09PSAnLic7XHJcbn07XHJcblxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLmV4cGVjdFN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHZhciBudW0gPSBzdHIubGVuZ3RoO1xyXG4gICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDw9IHRoaXMudGV4dC5sZW5ndGgpID8gKHN0ciA9PT0gdGhpcy50ZXh0LnN1YnN0cih0aGlzLmluZGV4LCBudW0pKSA6IGZhbHNlO1xyXG59O1xyXG5cclxuLy8gaHRtbCBjb21tZW50IFwiPCEtLWNvbW1lbnQtLT5cIlxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRDb21tZW50ID0gZnVuY3Rpb24gKGJlZ2luLCBlbmQpIHtcclxuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcclxuICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgIHZhciByYXdTdHJpbmcgPSBiZWdpbjtcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZyhlbmQpKSB7XHJcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBlbmQ7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcsIHN0YXJ0KTtcclxufTtcclxuXHJcbi8vIGh0bWwgdGV4dFxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgIGlmICgoY2ggPT09ICc8JyAmJiAodGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB8fCBjaDIgPT09ICcvJykgfHwgdGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgIH1cclxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgdGV4dFRhZzogdHJ1ZVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBodG1sIHRhZ1xyXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRUYWcgPSBmdW5jdGlvbiAoYmVnaW4sIGVuZCwgY2xvc2luZywgZG9jdHlwZSkge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBiZWdpbiwgdGFnOiB0cnVlLCBjbG9zaW5nOiBjbG9zaW5nLCBiZWdpbjogdHJ1ZSwgZG9jdHlwZTogZG9jdHlwZSB9KTtcclxuICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xyXG4gICAgdGhpcy5yZWFkSWRlbnQoKTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG5cclxuICAgICAgICBpZiAoIWNsb3NpbmcpIHtcclxuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICB2YXIgc3RyID0gY2ggKyBjaDI7XHJcbiAgICAgICAgICAgIGlmIChzdHIgPT09ICcvJyArIGVuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBzdHIsIHRhZzogdHJ1ZSwgY2xvc2luZzogdHJ1ZSwgZW5kOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBzdHIubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaCA9PT0gZW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBlbmQsXHJcbiAgICAgICAgICAgICAgICB0YWc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjbG9zaW5nOiAhIWRvY3R5cGUgPyB0cnVlIDogY2xvc2luZyxcclxuICAgICAgICAgICAgICAgIGVuZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc9Jykge1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6ICc9JywgZXF1YWw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuSHRtbExleGVyLnByb3RvdHlwZS5sZXggPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgdGhpcy50b2tlbnMgPSBbXTtcclxuXHJcbiAgICB2YXIgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgdmFyIGNoMyA9IHRoaXMucGVlaygyKTtcclxuICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRDb21tZW50KCc8IS0tJywgJy0tPicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJzwnICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwnLCAnPicsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwvJykgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPC8nLCAnPicsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCFET0NUWVBFJykpIHtcclxuICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8IScsICc+JywgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0RPQ1RZUEUgaXMgbm90IGFsbG93ZWQnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbn07XHJcblxyXG5leHBvcnQgeyBIdG1sTGV4ZXIgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5pbXBvcnQgeyBEb2N1bWVudEZyYWdtZW50Tm9kZSwgQ29tbWVudE5vZGUsIFRleHROb2RlLCBEb2N1bWVudFR5cGVOb2RlLCBFbGVtZW50Tm9kZSwgQXR0ck5vZGUgfSBmcm9tICcuLi9jb3JlJztcclxuXHJcbnV0aWxzLmluaGVyaXQoSHRtbFBhcnNlciwgUGFyc2VyKTtcclxuZnVuY3Rpb24gSHRtbFBhcnNlcihsZXhlciwgb3B0aW9ucykge1xyXG4gICAgSHRtbFBhcnNlci5zdXBlci5jYWxsKHRoaXMsIGxleGVyLCBvcHRpb25zKTtcclxufVxyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcclxuXHJcbiAgICB2YXIgZmFyZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudE5vZGUoKTtcclxuICAgIHZhciBkb2N0eXBlLCBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4uZG9jdHlwZSkge1xyXG4gICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N0eXBlID0gdGhpcy5kb2N0eXBlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZChkb2N0eXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgb25seSBhbGxvdyBvbmVcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBpcyBub3QgYWxsb3dlZFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBDb21tZW50Tm9kZSgpO1xyXG4gICAgICAgICAgICBjb21tZW50Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgIGZhcmdtZW50LiRwdXNoQ2hpbGQoY29tbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFRleHROb2RlKCk7XHJcbiAgICAgICAgICAgIHRleHQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZCh0ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xyXG4gICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKHRoaXMuZWxlbWVudCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcImltcG9zc2libGVcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYXJnbWVudC4kYnVpbGRTaWJsaW5nKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhcmdtZW50LmNoaWxkTm9kZXM7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5kb2N0eXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgICB2YXIgZG9jVHlwZSA9IG5ldyBEb2N1bWVudFR5cGVOb2RlKCk7XHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgIGRvY1R5cGUubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hdHRycyhkb2NUeXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgZG9jVHlwZS5jaGlsZE5vZGVzLnB1c2goYXR0cik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRvY1R5cGU7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5lbGVtZW50ID0gZnVuY3Rpb24gKHApIHtcclxuICAgIHRoaXMubmV4dCgpO1xyXG4gICAgdmFyIGVsZSA9IG5ldyBFbGVtZW50Tm9kZSgpO1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICBlbGUubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dHJzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIGVsZS4kcHVzaEF0dHJpYnV0ZShhdHRyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSAnaW5wdXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudHMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlLiRwdXNoQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09IHRva2VuLnRleHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZTtcclxufTtcclxuXHJcbkh0bWxQYXJzZXIucHJvdG90eXBlLmNoaWxkRWxlbWVudHMgPSBmdW5jdGlvbiAocCkge1xyXG4gICAgdmFyIGVsZXMgPSBbXTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgQ29tbWVudE5vZGUoKTtcclxuICAgICAgICAgICAgY29tbWVudC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICBlbGVzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFRleHROb2RlKCk7XHJcbiAgICAgICAgICAgIHRleHQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgZWxlcy5wdXNoKHRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XHJcbiAgICAgICAgICAgIGVsZXMucHVzaCh0aGlzLmVsZW1lbnQocCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZXM7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5hdHRycyA9IGZ1bmN0aW9uIChwKSB7XHJcbiAgICB2YXIgYXR0cnMgPSBbXTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhdHRyID0gbmV3IEF0dHJOb2RlKCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIGF0dHIubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICBhdHRyLm9yZ05vZGVOYW1lID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5lcXVhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmNvbnN0YW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5ub2RlVmFsdWUgPSB0b2tlbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF0dHJzLnB1c2goYXR0cik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF0dHJzO1xyXG59O1xyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuaW5kZXgrKztcclxufTtcclxuXHJcbmV4cG9ydCB7IEh0bWxQYXJzZXIgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgTGV4ZXIgfSBmcm9tICcuL2xleGVyJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5pbXBvcnQgeyBIdG1sTGV4ZXIgfSBmcm9tICcuL2h0bWwtbGV4ZXInO1xyXG5pbXBvcnQgeyBIdG1sUGFyc2VyIH0gZnJvbSAnLi9odG1sLXBhcnNlcic7XHJcblxyXG52YXIgcGFyc2VPcHRpb25zID0ge1xyXG4gICAgaXNJZGVudGlmaWVyQ29udGludWU6IGZhbHNlLFxyXG4gICAgaXNJZGVudGlmaWVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgbGl0ZXJhbHM6IHtcclxuICAgICAgICBmYWxzZTogZmFsc2UsXHJcbiAgICAgICAgbnVsbDogbnVsbCxcclxuICAgICAgICB0cnVlOiB0cnVlLFxyXG4gICAgICAgIHVuZGVmaW5lZDogdW5kZWZpbmVkXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBwYXJzZShodG1sKSB7XHJcbiAgICB2YXIgbGV4ZXIgPSBuZXcgSHRtbExleGVyKHBhcnNlT3B0aW9ucyk7XHJcbiAgICB2YXIgcGFyc2VyID0gbmV3IEh0bWxQYXJzZXIobGV4ZXIsIHBhcnNlT3B0aW9ucyk7XHJcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGh0bWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21waWxlKGh0bWwsIG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IHtcclxuICAgICAgICAgICAgZ2V0RW1iZWRUcGw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGFpbnNDb21wb25lbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlQ29tcG9uZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGFpbnNEaXJlY3RpdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlRGlyZWN0aXZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0dGluZ3MgPSB1dGlscy5tZXJnZShkZWZhdWx0cywgb3B0aW9ucyksXHJcbiAgICAgICAgYXN0Tm9kZXMgPSBwYXJzZShodG1sKTtcclxuXHJcbiAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XHJcbiAgICAgICAgYXN0Tm9kZS5jb21waWxlKHNldHRpbmdzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcclxuICAgICAgICBhc3ROb2RlLmRpcmVjdGl2ZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgZGlyZWN0aXZlLiRjb21waWxlKHNldHRpbmdzKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoc2NvcGUpIHtcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblxyXG4gICAgICAgIHNjb3BlLiQkdm5vZGVzID0gYXN0Tm9kZXM7XHJcblxyXG4gICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZS5saW5rKHNjb3BlKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5hZnRlckxpbmsoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZShleHAsIHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICBpZiAoZXhwID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBleHAgPSBleHAudHJpbSgpO1xyXG4gICAgaWYgKGV4cC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBleHAgPSBleHAucmVwbGFjZSgnJmd0OycsICc+JykucmVwbGFjZSgnJmx0OycsICc8Jyk7XHJcbiAgICB2YXIgbGV4ZXIgPSBuZXcgTGV4ZXIocGFyc2VPcHRpb25zKTtcclxuICAgIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKGxleGVyLCBwYXJzZU9wdGlvbnMpO1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBvcHRpb25zLmNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGluamVjdG9yLmNyZWF0ZUZpbHRlcihuYW1lKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGV4cCkuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvbXBpbGUsIGNvbXB1dGUsIHBhcnNlIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcblxyXG52YXIgT1BFUkFUT1JTID0ge307XHJcbnZhciBvcGVyYXRvclRleHQgPSAnKyAtICogLyAlID09PSAhPT0gPT0gIT0gPCA+IDw9ID49ICYmIHx8ICEgPSB8JztcclxudmFyIEVTQ0FQRSA9IHsgJ24nOiAnXFxuJywgJ2YnOiAnXFxmJywgJ3InOiAnXFxyJywgJ3QnOiAnXFx0JywgJ3YnOiAnXFx2JywgJ1xcJyc6ICdcXCcnLCAnXCInOiAnXCInIH07XHJcblxyXG5vcGVyYXRvclRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRvcikge1xyXG4gICAgT1BFUkFUT1JTW29wZXJhdG9yXSA9IHRydWU7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gTGV4ZXIob3B0aW9ucykge1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxufVxyXG5cclxuTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB0aGlzLnRva2VucyA9IFtdO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICcuJyAmJiB0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWROdW1iZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzKGNoLCAnKCl7fVtdLiw7Oj8nKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGNoIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjaDIgPSBjaCArIHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICB2YXIgY2gzID0gY2gyICsgdGhpcy5wZWVrKDIpO1xyXG4gICAgICAgICAgICB2YXIgb3AxID0gT1BFUkFUT1JTW2NoXTtcclxuICAgICAgICAgICAgdmFyIG9wMiA9IE9QRVJBVE9SU1tjaDJdO1xyXG4gICAgICAgICAgICB2YXIgb3AzID0gT1BFUkFUT1JTW2NoM107XHJcbiAgICAgICAgICAgIGlmIChvcDEgfHwgb3AyIHx8IG9wMykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VuID0gb3AzID8gY2gzIDogKG9wMiA/IGNoMiA6IGNoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogdG9rZW4sIG9wZXJhdG9yOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSB0b2tlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzID0gZnVuY3Rpb24gKGNoLCBjaGFycykge1xyXG4gICAgcmV0dXJuIGNoYXJzLmluZGV4T2YoY2gpICE9PSAtMTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKGkpIHtcclxuICAgIHZhciBudW0gPSBpIHx8IDE7XHJcbiAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPCB0aGlzLnRleHQubGVuZ3RoKSA/IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCArIG51bSkgOiBmYWxzZTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5pc051bWJlciA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuICgnMCcgPD0gY2ggJiYgY2ggPD0gJzknKSAmJiB0eXBlb2YgY2ggPT09ICdzdHJpbmcnO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzV2hpdGVzcGFjZSA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgLy8gSUUgdHJlYXRzIG5vbi1icmVha2luZyBzcGFjZSBhcyBcXHUwMEEwXHJcbiAgICByZXR1cm4gKGNoID09PSAnICcgfHwgY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFx0JyB8fFxyXG4gICAgICAgIGNoID09PSAnXFxuJyB8fCBjaCA9PT0gJ1xcdicgfHwgY2ggPT09ICdcXHUwMEEwJyk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNJZGVudGlmaWVyU3RhcnQgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQgP1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydChjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcclxuICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxyXG4gICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcclxuICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzSWRlbnRpZmllckNvbnRpbnVlID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlID9cclxuICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlID0gZnVuY3Rpb24gKGNoLCBjcCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmNvZGVQb2ludEF0ID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICBpZiAoY2gubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxyXG4gICAgcmV0dXJuIChjaC5jaGFyQ29kZUF0KDApIDw8IDEwKSArIGNoLmNoYXJDb2RlQXQoMSkgLSAweDM1RkRDMDA7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUucGVla011bHRpY2hhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICB2YXIgcGVlayA9IHRoaXMucGVlaygpO1xyXG4gICAgaWYgKCFwZWVrKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoO1xyXG4gICAgfVxyXG4gICAgdmFyIGNwMSA9IGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICB2YXIgY3AyID0gcGVlay5jaGFyQ29kZUF0KDApO1xyXG4gICAgaWYgKGNwMSA+PSAweEQ4MDAgJiYgY3AxIDw9IDB4REJGRiAmJiBjcDIgPj0gMHhEQzAwICYmIGNwMiA8PSAweERGRkYpIHtcclxuICAgICAgICByZXR1cm4gY2ggKyBwZWVrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzRXhwT3BlcmF0b3IgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnIHx8IHRoaXMuaXNOdW1iZXIoY2gpKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS50aHJvd0Vycm9yID0gZnVuY3Rpb24gKGVycm9yLCBzdGFydCwgZW5kKSB7XHJcbiAgICBlbmQgPSBlbmQgfHwgdGhpcy5pbmRleDtcclxuICAgIHZhciBjb2xTdHIgPSAodXRpbHMuaXNEZWZpbmVkKHN0YXJ0KSA/ICdzICcgKyBzdGFydCArICctJyArIHRoaXMuaW5kZXggKyAnIFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyhzdGFydCwgZW5kKSArICddJyA6ICcgJyArIGVuZCk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xleGVyIEVycm9yOiAnICsgZXJyb3IgKyAnIGF0IGNvbHVtbicgKyBjb2xTdHIgKyAnIGluIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXS4nKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5yZWFkTnVtYmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG51bWJlciA9ICcnO1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHV0aWxzLmxvd2VyY2FzZSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtcclxuICAgICAgICBpZiAoY2ggPT09ICcuJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSkge1xyXG4gICAgICAgICAgICBudW1iZXIgKz0gY2g7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHBlZWtDaCA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09ICdlJyAmJiB0aGlzLmlzRXhwT3BlcmF0b3IocGVla0NoKSkge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcclxuICAgICAgICAgICAgICAgIHBlZWtDaCAmJiB0aGlzLmlzTnVtYmVyKHBlZWtDaCkgJiZcclxuICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcclxuICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXHJcbiAgICAgICAgICAgICAgICAoIXBlZWtDaCB8fCAhdGhpcy5pc051bWJlcihwZWVrQ2gpKSAmJlxyXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIGV4cG9uZW50Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgdGV4dDogbnVtYmVyLFxyXG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiBOdW1iZXIobnVtYmVyKVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUucmVhZElkZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHRoaXMuaW5kZXggKz0gdGhpcy5wZWVrTXVsdGljaGFyKCkubGVuZ3RoO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy5wZWVrTXVsdGljaGFyKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCArPSBjaC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgdGV4dDogdGhpcy50ZXh0LnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KSxcclxuICAgICAgICBpZGVudGlmaWVyOiB0cnVlXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nID0gZnVuY3Rpb24gKHF1b3RlKSB7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgdGhpcy5pbmRleCsrO1xyXG4gICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgdmFyIHJhd1N0cmluZyA9IHF1b3RlO1xyXG4gICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICByYXdTdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgaWYgKGVzY2FwZSkge1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09ICd1Jykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhleCA9IHRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcclxuICAgICAgICAgICAgICAgIGlmICghaGV4Lm1hdGNoKC9bXFxkYS1mXXs0fS9pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHUnICsgaGV4ICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gNDtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGhleCwgMTYpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXAgPSBFU0NBUEVbY2hdO1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgKHJlcCB8fCBjaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gcXVvdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcclxuICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgcXVvdGUnLCBzdGFydCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBMZXhlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQge2lzRmlsdGVyfSBmcm9tICcuLi92aWV3JztcclxuXHJcbnZhciBBU1QgPSB7fTtcclxuQVNULlByb2dyYW0gPSAnUHJvZ3JhbSc7XHJcbkFTVC5FeHByZXNzaW9uU3RhdGVtZW50ID0gJ0V4cHJlc3Npb25TdGF0ZW1lbnQnO1xyXG5BU1QuQXNzaWdubWVudEV4cHJlc3Npb24gPSAnQXNzaWdubWVudEV4cHJlc3Npb24nO1xyXG5BU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uID0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbic7XHJcbkFTVC5Mb2dpY2FsRXhwcmVzc2lvbiA9ICdMb2dpY2FsRXhwcmVzc2lvbic7XHJcbkFTVC5CaW5hcnlFeHByZXNzaW9uID0gJ0JpbmFyeUV4cHJlc3Npb24nO1xyXG5BU1QuVW5hcnlFeHByZXNzaW9uID0gJ1VuYXJ5RXhwcmVzc2lvbic7XHJcbkFTVC5DYWxsRXhwcmVzc2lvbiA9ICdDYWxsRXhwcmVzc2lvbic7XHJcbkFTVC5NZW1iZXJFeHByZXNzaW9uID0gJ01lbWJlckV4cHJlc3Npb24nO1xyXG5BU1QuSWRlbnRpZmllciA9ICdJZGVudGlmaWVyJztcclxuQVNULkxpdGVyYWwgPSAnTGl0ZXJhbCc7XHJcbkFTVC5BcnJheUV4cHJlc3Npb24gPSAnQXJyYXlFeHByZXNzaW9uJztcclxuQVNULlByb3BlcnR5ID0gJ1Byb3BlcnR5JztcclxuQVNULk9iamVjdEV4cHJlc3Npb24gPSAnT2JqZWN0RXhwcmVzc2lvbic7XHJcblxyXG5mdW5jdGlvbiBBc3ROb2RlKHR5cGUpIHtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcclxufVxyXG5cclxuQXN0Tm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcclxufTtcclxuXHJcbkFzdE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGludGVybmFscykge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGludGVybmFscyk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoUHJvZ3JhbU5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBQcm9ncmFtTm9kZSgpIHtcclxuICAgIFByb2dyYW1Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlByb2dyYW0pO1xyXG59XHJcblxyXG5Qcm9ncmFtTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1swXS5jb21waWxlKHNjb3BlLCBvcHRpb25zIHx8IHt9KTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoRXhwcmVzc2lvblN0YXRlbWVudE5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSgpIHtcclxuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQpO1xyXG59XHJcblxyXG5FeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgaW50ZXJuYWxzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGludGVybmFscyk7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShsZWZ0LCByaWdodCwgb3BlcmF0b3IpIHtcclxuICAgIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG59XHJcblxyXG5Bc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciB0YXJnZXQgPSB0aGlzLmxlZnQuY29tcGlsZShzY29wZSwgb3B0aW9ucywgeyBhc3NpZ25tZW50TGVmdDogdHJ1ZSB9KTtcclxuICAgIHZhciB2YWx1ZSA9IHRoaXMucmlnaHQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB0YXJnZXQub2JqW3RhcmdldC5wcm9wXSA9IHZhbHVlO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpIHtcclxuICAgIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uKTtcclxuICAgIHRoaXMudGVzdCA9IHRlc3Q7XHJcbiAgICB0aGlzLmFsdGVybmF0ZSA9IGFsdGVybmF0ZTtcclxuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XHJcbn1cclxuXHJcbkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIGlmICh0aGlzLnRlc3QuY29tcGlsZShzY29wZSkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbHRlcm5hdGUuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChMb2dpY2FsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBMb2dpY2FsRXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XHJcbiAgICBMb2dpY2FsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcclxuICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxufVxyXG5cclxuTG9naWNhbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgcmVzdWx0O1xyXG4gICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMubGVmdC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5yaWdodC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcclxuICAgICAgICBjYXNlICcmJic6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd8fCc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChCaW5hcnlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIEJpbmFyeUV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xyXG4gICAgQmluYXJ5RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQmluYXJ5RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG59XHJcblxyXG5CaW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHJlc3VsdDtcclxuICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmxlZnQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMucmlnaHQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcblxyXG4gICAgLy8gJysnLCAnLScsICcqJywgJy8nLCAnJScsICc8JywgJz4nLCAnPD0nLCAnPj0nLCAnPT0nLCAnIT0nLCAnPT09JywgJyE9PSdcclxuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xyXG4gICAgICAgIGNhc2UgJysnOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKyByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAqIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLyByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICclJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICUgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnPCc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJz4nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc8PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc+PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc9PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICchPSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc9PT0nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyE9PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoVW5hcnlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIFVuYXJ5RXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGFyZykge1xyXG4gICAgVW5hcnlFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5VbmFyeUV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5wcmVmaXggPSB0cnVlO1xyXG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgdGhpcy5hcmcgPSBhcmc7XHJcbn1cclxuXHJcblVuYXJ5RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciByZXN1bHQsIHZhbHVlID0gdGhpcy5hcmcuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcblxyXG4gICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XHJcbiAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gLXZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICchJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gIXZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChMaXRlcmFsTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIExpdGVyYWxOb2RlKHZhbHVlKSB7XHJcbiAgICBMaXRlcmFsTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5MaXRlcmFsKTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5cclxuTGl0ZXJhbE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoQ2FsbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQ2FsbEV4cHJlc3Npb25Ob2RlKGNhbGxlZSwgYXJncykge1xyXG4gICAgQ2FsbEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkNhbGxFeHByZXNzaW9uKTtcclxuICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xyXG4gICAgdGhpcy5hcmdzID0gYXJncztcclxuICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XHJcbn1cclxuXHJcbkNhbGxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNhbGxlZS5jb21waWxlKHNjb3BlLCBvcHRpb25zLCB7IGNhbGxlZTogdHJ1ZSB9KTtcclxuICAgIHZhciBhcmdWYWx1ZXMgPSB0aGlzLmFyZ3MubWFwKGZ1bmN0aW9uIChhcmcpIHtcclxuICAgICAgICByZXR1cm4gYXJnLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsdGVyKSB7XHJcbiAgICAgICAgdmFyIGZpbHRlcklucyA9IG9wdGlvbnMuY3JlYXRlRmlsdGVyKGNvbnRleHQucHJvcCk7XHJcbiAgICAgICAgaWYgKGlzRmlsdGVyKGZpbHRlcklucykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcklucy4kZXhlY3V0ZS5hcHBseShmaWx0ZXJJbnMsIGFyZ1ZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIFwiJyArIGNvbnRleHQucHJvcCArICdcIiBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihmbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQub2JqLCBhcmdWYWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udGV4dC5wcm9wICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChNZW1iZXJFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIE1lbWJlckV4cHJlc3Npb25Ob2RlKG9iamVjdCwgcHJvcGVydHksIGNvbXB1dGVkKSB7XHJcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5NZW1iZXJFeHByZXNzaW9uKTtcclxuICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xyXG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xyXG4gICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkO1xyXG59XHJcblxyXG5NZW1iZXJFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgaW50ZXJuYWxzKSB7XHJcbiAgICB2YXIgb2JqID0gdGhpcy5vYmplY3QuY29tcGlsZShzY29wZSwgb3B0aW9ucywgaW50ZXJuYWxzKTtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9ialt0aGlzLnByb3BlcnR5LmNvbXBpbGUob2JqLCBvcHRpb25zLCBpbnRlcm5hbHMpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eS5jb21waWxlKG9iaiwgb3B0aW9ucywgaW50ZXJuYWxzKTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoSWRlbnRpZmllck5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBJZGVudGlmaWVyTm9kZShuYW1lKSB7XHJcbiAgICBJZGVudGlmaWVyTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5JZGVudGlmaWVyKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbn1cclxuXHJcbklkZW50aWZpZXJOb2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBpbnRlcm5hbHMpIHtcclxuICAgIGlmIChpbnRlcm5hbHMpIHtcclxuICAgICAgICBpZiAoaW50ZXJuYWxzLmFzc2lnbm1lbnRMZWZ0IHx8IGludGVybmFscy5jYWxsZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG9iajogc2NvcGUsXHJcbiAgICAgICAgICAgICAgICBwcm9wOiB0aGlzLm5hbWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaW50ZXJuYWxzLnByb3BlcnR5S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHJlc3VsdCA9IHNjb3BlW3RoaXMubmFtZV07XHJcbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgb3B0aW9ucy5sb2NhbHMpIHtcclxuICAgICAgICByZXN1bHQgPSBvcHRpb25zLmxvY2Fsc1t0aGlzLm5hbWVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoQXJyYXlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIEFycmF5RXhwcmVzc2lvbk5vZGUoKSB7XHJcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkFycmF5RXhwcmVzc2lvbik7XHJcbn1cclxuXHJcbnV0aWxzLmluaGVyaXQoUHJvcGVydHlOb2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gUHJvcGVydHlOb2RlKCkge1xyXG4gICAgUHJvcGVydHlOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlByb3BlcnR5KTtcclxuICAgIHRoaXMua2luZCA9ICdpbml0JztcclxuICAgIHRoaXMua2V5ID0gbnVsbDtcclxuICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgdGhpcy5jb21wdXRlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5Qcm9wZXJ0eU5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5OiB0aGlzLmtleS5jb21waWxlKHNjb3BlLCBvcHRpb25zLCB7IHByb3BlcnR5S2V5OiB0cnVlIH0pLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpXHJcbiAgICB9O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChPYmplY3RFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpIHtcclxuICAgIE9iamVjdEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk9iamVjdEV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcclxufVxyXG5cclxuT2JqZWN0RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuXHJcbiAgICB0aGlzLnByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHZhciBkZWYgPSBpdGVtLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJlc3VsdFtkZWYua2V5XSA9IGRlZi52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpc0Fzc2lnbmFibGUoYXN0KSB7XHJcbiAgICByZXR1cm4gYXN0LnR5cGUgPT09IEFTVC5JZGVudGlmaWVyIHx8IGFzdC50eXBlID09PSBBU1QuTWVtYmVyRXhwcmVzc2lvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gUGFyc2VyKGxleGVyLCBvcHRpb25zKSB7XHJcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnRocm93RXJyb3IgPSBmdW5jdGlvbiAobXNnLCB0b2tlbikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTeW50YXggRXJyb3I6IFRva2VuIFxcJycgKyB0b2tlbi50ZXh0ICsgJ1xcJycgKyBtc2cgKyAnIGF0IGNvbHVtbiAnICsgKHRva2VuLmluZGV4ICsgMSkgK1xyXG4gICAgICAgICcgb2YgdGhlIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXSBzdGFydGluZyBhdCBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcodG9rZW4uaW5kZXgpICsgJ10uJyk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xyXG5cclxuICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xyXG5cclxuICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5wcm9ncmFtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHByb2dyYW0gPSBuZXcgUHJvZ3JhbU5vZGUoKTtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XHJcbiAgICAgICAgICAgIHByb2dyYW0uYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5leHByZXNzaW9uU3RhdGVtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4cCA9IG5ldyBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSgpO1xyXG4gICAgZXhwLmFwcGVuZENoaWxkKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XHJcbiAgICByZXR1cm4gZXhwO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5maWx0ZXJDaGFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3wnKSkge1xyXG4gICAgICAgIGxlZnQgPSB0aGlzLmZpbHRlcihsZWZ0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5leHByZXNzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5hc3NpZ25tZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMudGVybmFyeSgpO1xyXG4gICAgaWYgKHRoaXMuZXhwZWN0KCc9JykpIHtcclxuICAgICAgICBpZiAoIWlzQXNzaWduYWJsZShyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFzc2lnbiBhIHZhbHVlIHRvIGEgbm9uIGwtdmFsdWUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdCA9IG5ldyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUocmVzdWx0LCB0aGlzLmFzc2lnbm1lbnQoKSwgJz0nKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnRlcm5hcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdGVzdCA9IHRoaXMubG9naWNhbE9SKCk7XHJcbiAgICB2YXIgYWx0ZXJuYXRlO1xyXG4gICAgdmFyIGNvbnNlcXVlbnQ7XHJcbiAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xyXG4gICAgICAgIGFsdGVybmF0ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnN1bWUoJzonKSkge1xyXG4gICAgICAgICAgICBjb25zZXF1ZW50ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0ZXN0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5sb2dpY2FsT1IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCd8fCcpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJ3x8JywgbGVmdCwgdGhpcy5sb2dpY2FsQU5EKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmxvZ2ljYWxBTkQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMuZXF1YWxpdHkoKTtcclxuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnJiYnKSkge1xyXG4gICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCcmJicsIGxlZnQsIHRoaXMuZXF1YWxpdHkoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuZXF1YWxpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMucmVsYXRpb25hbCgpO1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc9PScsICchPScsICc9PT0nLCAnIT09JykpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnJlbGF0aW9uYWwoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucmVsYXRpb25hbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5hZGRpdGl2ZSgpO1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMuYWRkaXRpdmUoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuYWRkaXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMubXVsdGlwbGljYXRpdmUoKTtcclxuICAgIHZhciB0b2tlbjtcclxuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJykpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLm11bHRpcGxpY2F0aXZlKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLm11bHRpcGxpY2F0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxlZnQgPSB0aGlzLnVuYXJ5KCk7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJyonLCAnLycsICclJykpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnVuYXJ5KCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnVuYXJ5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgaWYgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nLCAnIScpKSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcmltYXJ5KCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnByaW1hcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJpbWFyeTtcclxuICAgIGlmICh0aGlzLmV4cGVjdCgnKCcpKSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuZmlsdGVyQ2hhaW4oKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ1snKSkge1xyXG4gICAgICAgIHByaW1hcnkgPSB0aGlzLmFycmF5RGVjbGFyYXRpb24oKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ3snKSkge1xyXG4gICAgICAgIHByaW1hcnkgPSB0aGlzLm9iamVjdCgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubGl0ZXJhbHMuaGFzT3duUHJvcGVydHkodGhpcy5wZWVrKCkudGV4dCkpIHtcclxuICAgICAgICBwcmltYXJ5ID0gbmV3IExpdGVyYWxOb2RlKHRoaXMub3B0aW9ucy5saXRlcmFsc1t0aGlzLmNvbnN1bWUoKS50ZXh0XSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcclxuICAgICAgICBwcmltYXJ5ID0gdGhpcy5pZGVudGlmaWVyKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuY29uc3RhbnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdub3QgYSBwcmltYXJ5IGV4cHJlc3Npb24nLCB0aGlzLnBlZWsoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG5leHQ7XHJcbiAgICB3aGlsZSAoKG5leHQgPSB0aGlzLmV4cGVjdCgnKCcsICdbJywgJy4nKSkpIHtcclxuICAgICAgICBpZiAobmV4dC50ZXh0ID09PSAnKCcpIHtcclxuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5wYXJzZUFyZ3VtZW50cygpKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICdbJykge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuZXhwcmVzc2lvbigpLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICcuJykge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuaWRlbnRpZmllcigpLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJTVBPU1NJQkxFJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaW1hcnk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChiYXNlRXhwcmVzc2lvbikge1xyXG4gICAgdmFyIGFyZ3MgPSBbYmFzZUV4cHJlc3Npb25dLCBpZGVudGlmaWVycyA9IFt0aGlzLmlkZW50aWZpZXIoKV07XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcuJykpIHtcclxuICAgICAgICBpZGVudGlmaWVycy5wdXNoKHRoaXMuaWRlbnRpZmllcigpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwbHVzIG5hbWVzcGFjZVxyXG4gICAgdmFyIGVudGlyZU5hbWUgPSBpZGVudGlmaWVycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5uYW1lO1xyXG4gICAgfSkuam9pbignLicpO1xyXG5cclxuICAgIHZhciByZXN1bHQgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKG5ldyBJZGVudGlmaWVyTm9kZShlbnRpcmVOYW1lKSwgYXJncyk7XHJcblxyXG4gICAgcmVzdWx0LmZpbHRlciA9IHRydWU7XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCc6JykpIHtcclxuICAgICAgICBhcmdzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlQXJndW1lbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICcpJykge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJncztcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuaWRlbnRpZmllciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0b2tlbiA9IHRoaXMuY29uc3VtZSgpO1xyXG4gICAgaWYgKCF0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBub3QgYSB2YWxpZCBpZGVudGlmaWVyJywgdG9rZW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBJZGVudGlmaWVyTm9kZSh0b2tlbi50ZXh0KTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuY29uc3RhbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBUT0RPIGNoZWNrIHRoYXQgaXQgaXMgYSBjb25zdGFudFxyXG4gICAgcmV0dXJuIG5ldyBMaXRlcmFsTm9kZSh0aGlzLmNvbnN1bWUoKS52YWx1ZSk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmFycmF5RGVjbGFyYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJyID0gbmV3IEFycmF5RXhwcmVzc2lvbk5vZGUoKTtcclxuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICddJykge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnXScpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcnIuYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uKCkpO1xyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb25zdW1lKCddJyk7XHJcblxyXG4gICAgcmV0dXJuIGFycjtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUub2JqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHByb3BlcnRpZXMgPSBbXSwgcHJvcGVydHk7XHJcbiAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnfScpIHtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ30nKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHlOb2RlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5jb25zdGFudCgpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCc6JykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHByb3BlcnR5LmtleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoJ1snKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCdbJyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpbnZhbGlkIGtleScsIHRoaXMucGVlaygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb25zdW1lKCd9Jyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBPYmplY3RFeHByZXNzaW9uTm9kZShwcm9wZXJ0aWVzKTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuY29uc3VtZSA9IGZ1bmN0aW9uIChlMSkge1xyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRva2VuID0gdGhpcy5leHBlY3QoZTEpO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFsnICsgZTEgKyAnXScsIHRoaXMucGVlaygpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0b2tlbjtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGVla1Rva2VuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnNbMF07XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoZTEsIGUyLCBlMywgZTQpIHtcclxuICAgIHJldHVybiB0aGlzLnBlZWtBaGVhZCgwLCBlMSwgZTIsIGUzLCBlNCk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBlZWtBaGVhZCA9IGZ1bmN0aW9uIChpLCBlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IGkpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcclxuICAgICAgICB2YXIgdCA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgaWYgKHQgPT09IGUxIHx8IHQgPT09IGUyIHx8IHQgPT09IGUzIHx8IHQgPT09IGU0IHx8XHJcbiAgICAgICAgICAgICghZTEgJiYgIWUyICYmICFlMyAmJiAhZTQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmV4cGVjdCA9IGZ1bmN0aW9uIChlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5wZWVrKGUxLCBlMiwgZTMsIGU0KTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHRoaXMudG9rZW5zLnNoaWZ0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgUGFyc2VyIH07IiwiZXhwb3J0ICogZnJvbSAnLi90ZW1wbGF0ZS1jYWNoZSc7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3ZpZXcvc2VydmljZSc7XHJcbmltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9kZWNvcmF0b3Ivc2VydmljZSc7XHJcblxyXG5jbGFzcyBUZW1wbGF0ZUNhY2hlU2VydmljZSBleHRlbmRzIFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnRwbENhY2hlID0ge307XHJcbiAgICAgICAgdGhpcy5wcm9taXNlQ2FjaGUgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcGxCeVVybCh1cmwpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRwbENhY2hlW3VybF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNlbGYudHBsQ2FjaGVbdXJsXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByb21pc2VDYWNoZVt1cmxdKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvbWlzZUNhY2hlW3VybF0gPSBheGlvcy5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYucHJvbWlzZUNhY2hlW3VybF0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc2VsZi50cGxDYWNoZVt1cmxdID0gcmVzLmRhdGEgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50cGxDYWNoZVt1cmxdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2VDYWNoZVt1cmxdO1xyXG4gICAgfVxyXG59XHJcblxyXG5zZXJ2aWNlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICckdGVtcGxhdGVDYWNoZSdcclxufSkoVGVtcGxhdGVDYWNoZVNlcnZpY2UpOyIsIlxyXG5mdW5jdGlvbiBnZXRDaGlsZE5vZGVzKG5vZGUpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMsIDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckNoaWxkTm9kZXMobm9kZSkge1xyXG4gICAgZ2V0Q2hpbGROb2Rlcyhub2RlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlZk5vZGUsIG5ld05vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUpO1xyXG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVmTm9kZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTm9kZUJldHdlZW4oYmVnaW5Ob2RlLCBlbmROb2RlKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGJlZ2luTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBnZXRDaGlsZE5vZGVzKHBhcmVudE5vZGUpO1xyXG5cclxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nID09PSBiZWdpbk5vZGUgJiYgY2hpbGQgIT09IGVuZE5vZGUpIHtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyA9PT0gZW5kTm9kZSAmJiBjaGlsZCAhPT0gYmVnaW5Ob2RlKSB7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnROb2RlQWZ0ZXIocmVmTm9kZSwgbmV3Tm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSByZWZOb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgaWYgKHBhcmVudE5vZGUubGFzdENoaWxkID09PSByZWZOb2RlKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdOb2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmTm9kZS5uZXh0U2libGluZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldENoaWxkTm9kZXMsIGNsZWFyQ2hpbGROb2RlcywgcmVwbGFjZU5vZGUsIHJlbW92ZU5vZGUsIHJlbW92ZU5vZGVCZXR3ZWVuLCBpbnNlcnROb2RlQWZ0ZXIgfTsiLCJpbXBvcnQgeyBpc09iamVjdCwgaXNBcnJheSB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxudmFyIHByb3BDaGFuZ2luZ01zZyA9IG5ldyBNZXNzZW5nZXIoKTtcclxudmFyIHByb3BDaGFuZ2VkTXNnID0gbmV3IE1lc3NlbmdlcigpO1xyXG5cclxuY2xhc3MgU2V0UHJvcGVydHlIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGRlZXBQcm94eSkge1xyXG4gICAgICAgIHRoaXMuc2VsZktleSA9ICdfX3NlbGZfXyc7XHJcbiAgICAgICAgdGhpcy5kZWVwUHJveHkgPSBkZWVwUHJveHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHRhcmdldCwga2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZktleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXRba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVlcFByb3h5ICYmIGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBQcm94eSh2YWx1ZSwgbmV3IFNldFByb3BlcnR5SGFuZGxlcih0aGlzLmRlZXBQcm94eSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh0YXJnZXQsIGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWVwUHJveHkgJiYgaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdmFsdWVbdGhpcy5zZWxmS2V5XTtcclxuXHJcbiAgICAgICAgICAgIC8vIHZhbHVlIGlzIGEgcHJveHkgcmV0dXJuIGJ5IHRoaXMgaGFuZGxlclxyXG4gICAgICAgICAgICBpZiAoc2VsZiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHNlbGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xyXG5cclxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlIHx8IChpc0FycmF5KHRhcmdldCkgJiYga2V5ID09PSAnbGVuZ3RoJykpIHtcclxuICAgICAgICAgICAgdmFyIHZhbGlkYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBwcm9wQ2hhbmdpbmdNc2cuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdmFsaWRhdGlvblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBwcm9wQ2hhbmdlZE1zZy5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBHZXRQcm9wZXJ0eUhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcE1hcHMsIGRlZXBQcm94eSkge1xyXG4gICAgICAgIHRoaXMucHJvcE1hcHMgPSBwcm9wTWFwcztcclxuICAgICAgICB0aGlzLmRlZXBQcm94eSA9IGRlZXBQcm94eTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQodGFyZ2V0LCBrZXkpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXRba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVlcFByb3h5ICYmIGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBQcm94eSh2YWx1ZSwgbmV3IEdldFByb3BlcnR5SGFuZGxlcih0aGlzLnByb3BNYXBzLCB0aGlzLmRlZXBQcm94eSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGV4aXN0ZWQgPSB0aGlzLnByb3BNYXBzLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ub2JqID09PSB0YXJnZXQgJiYgaXRlbS5wcm9wID09PSBrZXk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghZXhpc3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BNYXBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgb2JqOiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICBwcm9wOiBrZXlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNldFByb3BlcnR5SGFuZGxlciwgR2V0UHJvcGVydHlIYW5kbGVyLCBwcm9wQ2hhbmdpbmdNc2csIHByb3BDaGFuZ2VkTXNnIH0iLCJpbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9lbGUtdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gaXNNZXNzZW5nZXIob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWVzc2VuZ2VyO1xyXG59XHJcblxyXG5leHBvcnQgeyBpc01lc3Nlbmdlcn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcblxyXG5jbGFzcyBNZXNzZW5nZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGZuKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoZm4pIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFuZGxlcnNbaV0gPT09IGZuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXJlKGFyZ3MsIHNjb3BlKSB7XHJcbiAgICAgICAgdmFyIHJldHVyblZhbHVlO1xyXG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5oYW5kbGVyc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdGhpcy5oYW5kbGVyc1tpXS5jYWxsKHNjb3BlLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1lc3NlbmdlckJ1cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1lc3NlbmdlcnMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzZW5nZXJzW2VdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2VuZ2Vyc1tlXSA9IG5ldyBNZXNzZW5nZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2VuZ2Vyc1tlXTtcclxuICAgIH1cclxuXHJcbiAgICBvbihlLCBmbikge1xyXG4gICAgICAgIHRoaXMuZ2V0KGUpLm9uKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoZSwgZm4pIHtcclxuICAgICAgICB0aGlzLmdldChlKS5vZmYoZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoZSwgYXJncywgc2NvcGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoZSkuZmlyZShhcmdzLCBzY29wZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE1lc3NlbmdlciwgTWVzc2VuZ2VyQnVzIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IHByb3BDaGFuZ2luZ01zZywgcHJvcENoYW5nZWRNc2cgfSBmcm9tICcuL2hhbmRsZXInO1xyXG5cclxuY2xhc3MgUHJvcGVydHlDaGFuZ2VTdWJqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucGxhaW5NYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5yZWdleE1hcCA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbihwcm9wLCBhY3Rpb24sIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgbWFwID0gdXRpbHMuaXNSZWdFeHAocHJvcCkgPyB0aGlzLnJlZ2V4TWFwIDogdGhpcy5wbGFpbk1hcDtcclxuXHJcbiAgICAgICAgaWYgKCFtYXAuaGFzKHByb3ApKSB7XHJcbiAgICAgICAgICAgIG1hcC5zZXQocHJvcCwgW10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgYWN0aW9uLmJlZm9yZUNoYW5nZWQgPSBvcHRpb25zLmJlZm9yZUNoYW5nZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXAuZ2V0KHByb3ApLnB1c2goYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYocHJvcCwgYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIG1hcCA9IHV0aWxzLmlzUmVnRXhwKHByb3ApID8gdGhpcy5yZWdleE1hcCA6IHRoaXMucGxhaW5NYXA7XHJcblxyXG4gICAgICAgIGlmICghbWFwLmhhcyhwcm9wKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYWN0aW9ucyA9IG1hcC5nZXQocHJvcCk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gYWN0aW9ucy5pbmRleE9mKGFjdGlvbik7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXJlQ2hhbmdlZChwcm9wLCBhcmdzKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGFpbk1hcC5oYXMocHJvcCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFpbk1hcC5nZXQocHJvcCkuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5iZWZvcmVDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWdleE1hcC5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb25zLCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuLnRlc3QocHJvcCkpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmVDaGFuZ2luZyhwcm9wLCBhcmdzKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGFpbk1hcC5oYXMocHJvcCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFpbk1hcC5nZXQocHJvcCkuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmJlZm9yZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlZ2V4TWFwLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbnMsIHBhdHRlcm4pIHtcclxuICAgICAgICAgICAgaWYgKHBhdHRlcm4udGVzdChwcm9wKSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmJlZm9yZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMucGxhaW5NYXAuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2V4TWFwLmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE9iamVjdFByb3BlcnR5Q2hhbmdlU3ViamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgICAgIG9uY2hhbmdpbmcgPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3MudGFyZ2V0LCBwcm9wID0gYXJncy5rZXk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmZpcmVDaGFuZ2luZyhvYmosIHByb3AsIGFyZ3MuZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uY2hhbmdlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gYXJncy50YXJnZXQsIHByb3AgPSBhcmdzLmtleTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZmlyZUNoYW5nZWQob2JqLCBwcm9wLCBhcmdzLmRhdGEpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBwcm9wQ2hhbmdpbmdNc2cub24ob25jaGFuZ2luZyk7XHJcbiAgICAgICAgcHJvcENoYW5nZWRNc2cub24ob25jaGFuZ2VkKTtcclxuXHJcbiAgICAgICAgdGhpcy5vZmZDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHByb3BDaGFuZ2luZ01zZy5vZmYob25jaGFuZ2luZyk7XHJcbiAgICAgICAgICAgIHByb3BDaGFuZ2VkTXNnLm9mZihvbmNoYW5nZWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vYmpNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb24ob2JqLCBwcm9wLCBhY3Rpb24sIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIXRoaXMub2JqTWFwLmhhcyhvYmopKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLnNldChvYmosIG5ldyBQcm9wZXJ0eUNoYW5nZVN1YmplY3QoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9iak1hcC5nZXQob2JqKS5vbihwcm9wLCBhY3Rpb24sIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZihvYmosIHByb3AsIGFjdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLm9iak1hcC5oYXMob2JqKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9iak1hcC5nZXQob2JqKS5vZmYocHJvcCwgYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZUNoYW5nZWQob2JqLCBwcm9wLCBhcmdzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JqTWFwLmhhcyhvYmopKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLmdldChvYmopLmZpcmVDaGFuZ2VkKHByb3AsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXJlQ2hhbmdpbmcob2JqLCBwcm9wLCBhcmdzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JqTWFwLmhhcyhvYmopKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLmdldChvYmopLmZpcmVDaGFuZ2luZyhwcm9wLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9mZkNoYW5nZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub2JqTWFwLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vYmpNYXAgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQcm9wZXJ0eUNoYW5nZVN1YmplY3QsIE9iamVjdFByb3BlcnR5Q2hhbmdlU3ViamVjdCB9OyIsInZhciBkZWJ1Z01vZGUgPSB0cnVlLFxyXG4gICAgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxyXG4gICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XHJcblxyXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgYWN0aW9uLCBpZ25vcmVPd24pIHtcclxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uKGluZGV4LCBvYmpbaW5kZXhdKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChpZ25vcmVPd24gfHwgb2JqLmhhc093blByb3BlcnR5KHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKHAsIG9ialtwXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY3Rpb24ob2JqLCBvYmopO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzb21lKG9iaiwgYWN0aW9uKSB7XHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbihpbmRleCwgb2JqW2luZGV4XSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ocCwgb2JqW3BdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbihvYmosIG9iaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHkoKSB7XHJcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBvYmpJbmRleCA9IDAsIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF0sIGZpbHRlcjtcclxuXHJcbiAgICBpZiAoaXNCb29sZWFuKG9iaikpIHtcclxuICAgICAgICBkZWVwID0gb2JqO1xyXG4gICAgICAgIG9iakluZGV4Kys7XHJcbiAgICAgICAgb2JqID0gYXJndW1lbnRzW29iakluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IG9iakluZGV4ICsgMSkge1xyXG4gICAgICAgIGZpbHRlciA9IGFyZ3VtZW50c1tvYmpJbmRleCArIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgICAgICB2YXIgbmV3QXJyID0gW107XHJcbiAgICAgICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBpbmRleCwgaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGRlZXAgPyBjb3B5KGl0ZW0pIDogaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3QXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc09iamVjdChvYmopKSB7XHJcbiAgICAgICAgdmFyIG5ld09iaiA9IG9iamVjdChvYmopO1xyXG4gICAgICAgIGZvckVhY2gob2JqLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwga2V5LCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gZGVlcCA/IGNvcHkodmFsdWUpIDogdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3T2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4dGVuZCgpIHtcclxuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0gYXJndW1lbnRzW2luZGV4XTtcclxuXHJcbiAgICBpZiAoaXNCb29sZWFuKHRhcmdldCkpIHtcclxuICAgICAgICBkZWVwID0gdGFyZ2V0O1xyXG4gICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1srK2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGVlcCkge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZXJnZSgpIHtcclxuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0ge307XHJcblxyXG4gICAgaWYgKGlzQm9vbGVhbihhcmd1bWVudHNbaW5kZXhdKSkge1xyXG4gICAgICAgIGRlZXAgPSBhcmd1bWVudHNbaW5kZXhdO1xyXG4gICAgICAgIGluZGV4Kys7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlZXApIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxhaW5NZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xyXG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0YXJnZXRba2V5XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodGFyZ2V0W2tleV0pICYmIGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9iamVjdChvKSB7XHJcbiAgICBmdW5jdGlvbiBGKCkge1xyXG4gICAgfVxyXG5cclxuICAgIEYucHJvdG90eXBlID0gbztcclxuICAgIHJldHVybiBuZXcgRigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSkge1xyXG4gICAgdmFyIHByb3RvdHlwZSA9IG9iamVjdChzdXBlclR5cGUucHJvdG90eXBlKTtcclxuICAgIHByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YlR5cGU7XHJcbiAgICBzdWJUeXBlLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5oZXJpdChzdWJUeXBlLCBzdXBlclR5cGUpIHtcclxuICAgIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKTtcclxuICAgIHN1YlR5cGUuc3VwZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3VwZXJUeXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb3dlcmNhc2Uoc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b0xvd2VyQ2FzZSgpIDogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cHBlcmNhc2Uoc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b1VwcGVyQ2FzZSgpIDogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTWFwKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1hcDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0JsYW5rT2JqZWN0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWdFeHAodmFsdWUpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1NhbWUob2JqMSwgb2JqMikge1xyXG4gICAgdmFyIHNhbWUgPSAob2JqMSA9PT0gb2JqMik7XHJcblxyXG4gICAgaWYgKCFzYW1lKSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xyXG4gICAgICAgICAgICBpZiAob2JqMS5sZW5ndGggPT09IG9iajIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc09iamVjdChvYmoxKSAmJiBpc09iamVjdChvYmoyKSAmJiBnZXRQcm90b3R5cGVPZihvYmoxKSA9PT0gZ2V0UHJvdG90eXBlT2Yob2JqMikpIHtcclxuICAgICAgICAgICAgc2FtZSA9ICFzb21lKG9iajEsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltrZXldKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJ1Zyhsb2cpIHtcclxuICAgIGlmIChkZWJ1Z01vZGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWlucyhhcnIsIG9iaikge1xyXG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IG9iajtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWluc1N0cihhcnIsIHN0ciwgaWdub3JlQ2FzZSkge1xyXG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHN0ciB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2UoaXRlbSkgPT09IGxvd2VyY2FzZShzdHIpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmosIGtleSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKGtleTMsIHZhbHVlMykge1xyXG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcclxuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGFzUHJvcDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcclxuICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKGtleTMsIHZhbHVlMykge1xyXG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcclxuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGFzUHJvcCA/IHRhcmdldCA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5Ml0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uIChrZXkzLCB2YWx1ZTMpIHtcclxuICAgICAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaGFzUHJvcCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnOiBDYW4gbm90IHNldCBwcm9wZXJ0eSBvZiB1bmRlZmluZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29uY2F0KCkge1xyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBmb3JFYWNoLFxyXG4gICAgc29tZSxcclxuICAgIGNvcHksXHJcbiAgICBleHRlbmQsXHJcbiAgICBtZXJnZSxcclxuICAgIG9iamVjdCxcclxuICAgIGluaGVyaXQsXHJcbiAgICBsb3dlcmNhc2UsXHJcbiAgICB1cHBlcmNhc2UsXHJcbiAgICBpc1VuZGVmaW5lZCxcclxuICAgIGlzRGVmaW5lZCxcclxuICAgIGlzT2JqZWN0LFxyXG4gICAgaXNCbGFua09iamVjdCxcclxuICAgIGlzTnVtYmVyLFxyXG4gICAgaXNEYXRlLFxyXG4gICAgaXNGdW5jdGlvbixcclxuICAgIGlzUmVnRXhwLFxyXG4gICAgaXNCb29sZWFuLFxyXG4gICAgaXNBcnJheSxcclxuICAgIGlzU3RyaW5nLFxyXG4gICAgaXNTYW1lLFxyXG4gICAgZGVidWcsXHJcbiAgICBjb250YWlucyxcclxuICAgIGNvbnRhaW5zU3RyLFxyXG4gICAgaGFzUHJvcGVydHksXHJcbiAgICBnZXRQcm9wZXJ0eSxcclxuICAgIHNldFByb3BlcnR5LFxyXG4gICAgY29uY2F0XHJcbn07IiwiaW1wb3J0IHsgaXNNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5JztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCAqIGFzIGVsZVV0aWxzIGZyb20gJy4uL3V0aWxpdHkvZWxlLXV0aWxzJztcclxuaW1wb3J0IHsgU2V0UHJvcGVydHlIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbGl0eS9oYW5kbGVyJztcclxuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHlDaGFuZ2VTdWJqZWN0IH0gZnJvbSAnLi4vdXRpbGl0eS9zdWJqZWN0JztcclxuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcclxuaW1wb3J0IHsgY29tcGlsZSwgY29tcHV0ZSB9IGZyb20gJy4uL3BhcnNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcclxuICAgIGdldCBwcm94eSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHRoaXMsIG5ldyBTZXRQcm9wZXJ0eUhhbmRsZXIodHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1ldGEpIHtcclxuICAgICAgICBDb21wb25lbnQuY29uc3RydWN0LmNhbGwodGhpcywgbWV0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnN0cnVjdChtZXRhKSB7XHJcbiAgICAgICAgdGhpcy4kJHZub2RlcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kJG93bmVyVk5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLiQkY2hpbGREaXJlY3RpdmVzID0gW107XHJcbiAgICAgICAgdGhpcy4kJGRldGVjdFRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJCRwcm9wQ2hhbmdlZCA9IG5ldyBPYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3QoKTtcclxuXHJcbiAgICAgICAgaWYgKG1ldGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRzZXRNZXRhKG1ldGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJGhvb2tzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJlZm9yZUF0dHJDaGFuZ2U6ICcnLFxyXG4gICAgICAgICAgICBhZnRlckF0dHJDaGFuZ2U6ICcnLFxyXG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxyXG4gICAgICAgICAgICBhZnRlclZpZXdNb3VudDogJycsXHJcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgICRnZXRNZXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YSB8fCB7fTtcclxuICAgIH1cclxuXHJcbiAgICAkc2V0TWV0YSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgJGJpbmRWTm9kZSh2bm9kZSkge1xyXG4gICAgICAgIHRoaXMuJCRvd25lclZOb2RlID0gdm5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgJGhhc0F0dHIocHJvcCkge1xyXG4gICAgICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLCBwcm9wLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAkaW5pdEF0dHIocHJvcCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBwcm9wLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5iZWZvcmVBdHRyQ2hhbmdlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJlZm9yZUF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcywgcHJvcCwgdmFsdWUsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmFmdGVyQXR0ckNoYW5nZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZnRlckF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkaW5pdEF0dHJEb25lKCkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25Jbml0KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uSW5pdC5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkc2V0QXR0cihwcm9wLCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMsIHByb3AsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmJlZm9yZUF0dHJDaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlQXR0ckNoYW5nZS5jYWxsKHRoaXMsIHByb3AsIHZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLnByb3h5LCBwcm9wLCB2YWx1ZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuYWZ0ZXJBdHRyQ2hhbmdlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFmdGVyQXR0ckNoYW5nZS5jYWxsKHRoaXMsIHByb3AsIHZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRsaXN0ZW4oZSwgZm4pIHtcclxuICAgICAgICB2YXIgbWVzc2VuZ2VyID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywgZSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGlzTWVzc2VuZ2VyKG1lc3NlbmdlcikpIHtcclxuICAgICAgICAgICAgbWVzc2VuZ2VyLm9uKGZuKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSArICcgaXMgbm90IGEgZXZlbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0VGVtcGxhdGUoc3luYykge1xyXG4gICAgICAgIHZhciBtZXRhID0gdGhpcy4kZ2V0TWV0YSgpO1xyXG5cclxuICAgICAgICBpZiAoc3luYykge1xyXG4gICAgICAgICAgICByZXR1cm4gbWV0YS50ZW1wbGF0ZSB8fCAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS50ZW1wbGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobWV0YS50ZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS50ZW1wbGF0ZVVybCkpIHtcclxuICAgICAgICAgICAgICAgIGluamVjdG9yLnNlcnZpY2UoJyR0ZW1wbGF0ZUNhY2hlJykuZ2V0VHBsQnlVcmwobWV0YS50ZW1wbGF0ZVVybCkudGhlbihmdW5jdGlvbiAodHBsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cGwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICR1c2luZyhuYW1lKSB7XHJcbiAgICAgICAgdmFyIG1ldGEgPSB0aGlzLiRnZXRNZXRhKCksXHJcbiAgICAgICAgICAgIHVzaW5nID0gbWV0YS51c2luZyxcclxuICAgICAgICAgICAgc2VnbWVudHMgPSBuYW1lLnNwbGl0KCcuJyksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHNlZ21lbnRzLnBvcCgpLFxyXG4gICAgICAgICAgICBzcGFjZU5hbWUgPSBzZWdtZW50cy5qb2luKCcuJyk7XHJcblxyXG4gICAgICAgIGlmIChzcGFjZU5hbWUgJiYgdXRpbHMuaXNPYmplY3QodXNpbmcpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNvbWUodXNpbmcsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBzcGFjZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gdmFsdWUgKyAnLicgKyBjbGFzc05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgJG1ha2VDb21waWxlT3B0aW9ucygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ2V0RW1iZWRUcGw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiQkb3duZXJWTm9kZS5nZXRJbm5lclRwbCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250YWluc0NvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jb250YWluc0NvbXBvbmVudChzZWxmLiR1c2luZyhuYW1lKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZUNvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVDb21wb25lbnQoc2VsZi4kdXNpbmcobmFtZSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250YWluc0RpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jb250YWluc0RpcmVjdGl2ZShzZWxmLiR1c2luZyhuYW1lKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZURpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVEaXJlY3RpdmUoc2VsZi4kdXNpbmcobmFtZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAkaGFzVk5vZGVzKCkge1xyXG4gICAgICAgIHJldHVybiB1dGlscy5pc0FycmF5KHRoaXMuJCR2bm9kZXMpO1xyXG4gICAgfVxyXG5cclxuICAgICRmcm9tVk5vZGVzKCkge1xyXG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy4kJHZub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh2bm9kZS5nZXREb21FbGVtZW50KCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJGNsZWFyVk5vZGVzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy4kaGFzVk5vZGVzKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiQkdm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgICAgIHZub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiQkdm5vZGVzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAkcmVuZGVyKHN5bmMpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGZyYWdtZW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHN5bmMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJGhhc1ZOb2RlcygpKSB7XHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IHRoaXMuJGZyb21WTm9kZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gY29tcGlsZSh0aGlzLiRnZXRUZW1wbGF0ZShzeW5jKSwgdGhpcy4kbWFrZUNvbXBpbGVPcHRpb25zKCkpKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuJGhhc1ZOb2RlcygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNlbGYuJGZyb21WTm9kZXMoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiRnZXRUZW1wbGF0ZSgpLnRoZW4oZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGNvbXBpbGUoaHRtbCwgc2VsZi4kbWFrZUNvbXBpbGVPcHRpb25zKCkpKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZnJhZ21lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkcmVmcmVzaChzeW5jKSB7XHJcbiAgICAgICAgdGhpcy4kY2xlYXJWTm9kZXMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcmVuZGVyKHN5bmMpO1xyXG4gICAgfVxyXG5cclxuICAgICRtb3VudChzZWxlY3Rvck9yRWxlbWVudCwgc3luYykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgZWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVVdGlscy5jbGVhckNoaWxkTm9kZXMoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGlmIChzeW5jKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4kcmVuZGVyKHN5bmMpKTtcclxuICAgICAgICAgICAgc2VsZi4kYWZ0ZXJWaWV3TW91bnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJlbmRlcihzeW5jKS50aGVuKGZ1bmN0aW9uIChlbGUpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuJGFmdGVyVmlld01vdW50KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkYWZ0ZXJWaWV3TW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5hZnRlclZpZXdNb3VudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZnRlclZpZXdNb3VudC5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkdW5tb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy4kJG93bmVyVk5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiQkb3duZXJWTm9kZS4kcmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJCRvd25lclZOb2RlLnJlbW92ZURvbUVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy4kaGFzVk5vZGVzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy4kJHZub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdm5vZGUucmVtb3ZlRG9tRWxlbWVudCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiQkcGFyZW50Q29tcG9uZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kJHBhcmVudENvbXBvbmVudC4kcmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkZGV0ZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLiQkZGV0ZWN0VGltZW91dCB8fCAhdGhpcy4kJHZub2Rlcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi4kJGRldGVjdFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi4kJGRldGVjdFRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICBzZWxmLiQkdm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgICAgICAgICB2bm9kZS5kZXRlY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHZhbGlkYXRlKCkge1xyXG4gICAgICAgIHZhciBvYmosIHByb3AsIGFjdGlvbiwgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICBvYmogPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMV07XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IGFyZ3VtZW50c1syXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXJndW1lbnRzIGVycm9yJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiQkcHJvcENoYW5nZWQub24ob2JqLCBwcm9wLCBhY3Rpb24sIHtcclxuICAgICAgICAgICAgYmVmb3JlQ2hhbmdlZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLiQkcHJvcENoYW5nZWQub2ZmKG9iaiwgcHJvcCwgYWN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgICR3YXRjaCgpIHtcclxuICAgICAgICB2YXIgb2JqLCBwcm9wLCBhY3Rpb24sIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBvYmogPSB0aGlzO1xyXG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgb2JqID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzFdO1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3VtZW50cyBlcnJvcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kJHByb3BDaGFuZ2VkLm9uKG9iaiwgcHJvcCwgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi4kJHByb3BDaGFuZ2VkLm9mZihvYmosIHByb3AsIGFjdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAkcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiQkY2hpbGRDb21wb25lbnRzLmluZGV4T2YoY2hpbGQpO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgY2hpbGQuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkZGlzcG9zZShpc0Zyb21WTm9kZSkge1xyXG4gICAgICAgIC8vIHJlbW92ZSB2aXJ0dWFsIG5vZGUgZmlyc3QgaW4gY2FzZSBpdCB0cmlnZ2VycyBwYXJlbnQgY29tcG9uZW50IGRlc3Ryb3lcclxuICAgICAgICB0aGlzLiR1bm1vdW50KCk7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJCRkZXRlY3RUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLiQkZGV0ZWN0VGltZW91dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRjbGVhclZOb2RlcygpO1xyXG4gICAgICAgIHRoaXMuJCRwcm9wQ2hhbmdlZC5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIGlmIChpc0Zyb21WTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLiQkb3duZXJWTm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzID0gbnVsbDtcclxuICAgICAgICB0aGlzLiQkY2hpbGREaXJlY3RpdmVzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAkZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLiRkaXNwb3NlKCk7XHJcblxyXG4gICAgICAgIC8vIGRlc3Ryb3kgdmlydHVhbCBub2RlIGluIHRoZSBlbmQgYmVjYXVzZSBpdCBtYXkgYmluZHMgbG9naWMgYWJvdXQgZGVzdHJveVxyXG4gICAgICAgIGlmICh0aGlzLiQkb3duZXJWTm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCRvd25lclZOb2RlLmRpc3Bvc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuJCRvd25lclZOb2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGdldFBhcmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJHBhcmVudENvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICAkY3JlYXRlQ29tcG9uZW50KGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IGluamVjdG9yLmNyZWF0ZUNvbXBvbmVudChjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICAgICAgY29tcG9uZW50LiQkcGFyZW50Q29tcG9uZW50ID0gdGhpcztcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgICRldmFsKGV4cCkge1xyXG4gICAgICAgIHJldHVybiBjb21wdXRlKGV4cCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJGluaGVyaXQocGFyZW50Q21wKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc2VsZiwgdXRpbHMub2JqZWN0KHBhcmVudENtcCkpO1xyXG5cclxuICAgICAgICAvLyB0b2RvIC0gcmVzb2x2ZSBpc3N1ZSBjYWxsaW5nIHBhcmVudCBjb21wb25lbnQncyBsaWZlY3ljbGUgaG9va3NcclxuICAgICAgICB1dGlscy5mb3JFYWNoKHNlbGYuJGhvb2tzKCksIGZ1bmN0aW9uIChob29rKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmhhc093blByb3BlcnR5KGhvb2spID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNlbGZbaG9va10gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBEaXJlY3RpdmUuY29uc3RydWN0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcclxuICAgICAgICB0aGlzLiQkYmluZGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kJHZub2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm91dHB1dCA9IGZhbHNlO1xyXG4gICAgICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgICRob29rcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxyXG4gICAgICAgICAgICBvbkNvbXBpbGU6ICcnLFxyXG4gICAgICAgICAgICBvbkluc2VydDogJycsXHJcbiAgICAgICAgICAgIG9uRGV0ZWN0OiAnJyxcclxuICAgICAgICAgICAgb25VcGRhdGU6ICcnLFxyXG4gICAgICAgICAgICBvbkRlc3Ryb3k6ICcnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0TWV0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGEgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgJHNldE1ldGEodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiQkbWV0YSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgICRiaW5kVk5vZGUodm5vZGUpIHtcclxuICAgICAgICB0aGlzLiQkdm5vZGUgPSB2bm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAkc2V0QmluZGluZyhiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy4kJGJpbmRpbmcgPSBiaW5kaW5nO1xyXG4gICAgfVxyXG5cclxuICAgICRjb21waWxlKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uQ29tcGlsZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBpbGUuY2FsbCh0aGlzLCB0aGlzLiQkdm5vZGUsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkaW5zZXJ0KGVsZSwgY29tKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkluc2VydCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkluc2VydC5jYWxsKHRoaXMsIGVsZSwgdGhpcy4kJGJpbmRpbmcsIGNvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRkZXRlY3QoZWxlLCBjb20pIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGV0ZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRldGVjdC5jYWxsKHRoaXMsIGVsZSwgdGhpcy4kJGJpbmRpbmcsIGNvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy4kJGJpbmRpbmcuZGV0ZWN0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy4kdXBkYXRlKGVsZSwgY29tKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJHVwZGF0ZShlbGUsIGNvbSkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25VcGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUuY2FsbCh0aGlzLCBlbGUsIHRoaXMuJCRiaW5kaW5nLCBjb20pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkZGlzcG9zZShpc0Zyb21WTm9kZSkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzRnJvbVZOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCR2bm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiQkYmluZGluZyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgJGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy4kZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy4kJHZub2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kJHZub2RlLmRpc3Bvc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuJCR2bm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIEZpbHRlci5jb25zdHJ1Y3QuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29uc3RydWN0KCkge1xyXG4gICAgICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgICRob29rcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxyXG4gICAgICAgICAgICBvbkRlc3Ryb3k6ICcnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0TWV0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGEgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgJHNldE1ldGEodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiQkbWV0YSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgICRleGVjdXRlKCkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25FeGVjdXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkV4ZWN1dGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHkvbWVzc2FnZSc7XHJcbmltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUgfWZyb20gJy4vZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi9maWx0ZXInO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcclxuXHJcbmZ1bmN0aW9uIG5hbWVzcGFjZShucykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcclxuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50KG5hbWUsIGRlZik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXJlY3RpdmU6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xyXG4gICAgICAgICAgICAgICAgZGVmID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnNlcnQ6IGRlZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU6IGRlZlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xyXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlKG5hbWUsIGRlZik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJ2aWNlOiBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XHJcbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcclxuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2UobmFtZSwgZGVmKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWYgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkV4ZWN1dGU6IGRlZlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKG5hbWUsIGRlZik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KG5hbWUsIGRlZikge1xyXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XHJcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuY29tcG9uZW50LFxyXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihDb21wb25lbnQpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlyZWN0aXZlKG5hbWUsIGRlZikge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xyXG4gICAgICAgIGRlZiA9IHtcclxuICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgb25JbnNlcnQ6IGRlZixcclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiBkZWZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XHJcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuZGlyZWN0aXZlLFxyXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihEaXJlY3RpdmUpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyKG5hbWUsIGRlZikge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xyXG4gICAgICAgIGRlZiA9IHtcclxuICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgb25FeGVjdXRlOiBkZWZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XHJcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuZmlsdGVyLFxyXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihGaWx0ZXIpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VydmljZShuYW1lLCBkZWYpIHtcclxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xyXG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LnNlcnZpY2UsXHJcbiAgICAgICAgc3VwZXJDbGFzczogbWFrZUNvbnN0cnVjdG9yKFNlcnZpY2UpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wb25lbnQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQ29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RpcmVjdGl2ZShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEaXJlY3RpdmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRmlsdGVyKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEZpbHRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTZXJ2aWNlKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNlcnZpY2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJvb3RzdHJhcChzZWxlY3Rvck9yRWxlbWVudCkge1xyXG4gICAgdmFyIGVsZW1lbnQsIHRwbDtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZWN0b3JPckVsZW1lbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRwbCA9IGVsZW1lbnQuaW5uZXJIVE1MO1xyXG5cclxuICAgIG5ldyBDb21wb25lbnQoe1xyXG4gICAgICAgIHRlbXBsYXRlOiB0cGxcclxuICAgIH0pLiRtb3VudChlbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUNvbnN0cnVjdG9yKGNscykge1xyXG4gICAgZnVuY3Rpb24gZigpIHtcclxuICAgICAgICBjbHMuY29uc3RydWN0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZi5wcm90b3R5cGUgPSBjbHMucHJvdG90eXBlO1xyXG4gICAgcmV0dXJuIGY7XHJcbn1cclxuXHJcbmV4cG9ydCB7IG5hbWVzcGFjZSwgaW5qZWN0b3IsIGNvbXBvbmVudCwgZGlyZWN0aXZlLCBmaWx0ZXIsIHNlcnZpY2UsIGlzQ29tcG9uZW50LCBpc0RpcmVjdGl2ZSwgaXNGaWx0ZXIsIGlzU2VydmljZSwgYm9vdHN0cmFwIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHkvbWVzc2FnZSc7XHJcblxyXG52YXIgdHlwZUNvbnN0ID0ge1xyXG4gICAgZmlsdGVyOiAnZmlsdGVyJyxcclxuICAgIHNlcnZpY2U6ICdzZXJ2aWNlJyxcclxuICAgIGNvbXBvbmVudDogJ2NvbXBvbmVudCcsXHJcbiAgICBkaXJlY3RpdmU6ICdkaXJlY3RpdmUnXHJcbn07XHJcblxyXG52YXIgbmFtZVBhdHRlcm4gPSAvXlthLXpfXFwkXVtcXHdcXCQtXSovaTtcclxuXHJcbmNsYXNzIEluamVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0ge307XHJcbiAgICAgICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzID0ge307XHJcbiAgICAgICAgdGhpcy5pbnNDb250YWluZXIgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlcyhjb250cmFjdFR5cGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnNDb250YWluZXJbY29udHJhY3RUeXBlXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnNDb250YWluZXJbY29udHJhY3RUeXBlXTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcihjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGlmIChzZWxlY3Rvci5pbmRleE9mKCcuJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBjaGFyYWN0ZXIgXCIuXCInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5nZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSk7XHJcblxyXG4gICAgICAgIGlmIChtYXBwaW5nW3NlbGVjdG9yXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG1hcHBpbmdbc2VsZWN0b3JdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IG1hcHBpbmdbc2VsZWN0b3JdLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YS5uYW1lc3BhY2UgPT09IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzZWxlY3RvciArICcgaXMgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBtYXRjaGVzWzBdLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFwcGluZ1tzZWxlY3Rvcl0ucHVzaChjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJDb21wb25lbnQoc2VsZWN0b3IsIGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0eXBlQ29uc3QuY29tcG9uZW50LCBzZWxlY3RvciwgY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWlucyhjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xyXG4gICAgICAgIHZhciBzZWdtZW50cyA9IHNlbGVjdG9yLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBzZWxlY3RvciA9IHNlZ21lbnRzLnBvcCgpO1xyXG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBzZWdtZW50cy5qb2luKCcuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShtYXBwaW5nLCBzZWxlY3RvciwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBtYXBwaW5nW3NlbGVjdG9yXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zQ29tcG9uZW50KHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbnModHlwZUNvbnN0LmNvbXBvbmVudCwgc2VsZWN0b3IsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zRGlyZWN0aXZlKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbnModHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xyXG4gICAgICAgIHZhciBzZWdtZW50cyA9IHNlbGVjdG9yLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBzZWxlY3RvciA9IHNlZ21lbnRzLnBvcCgpO1xyXG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBzZWdtZW50cy5qb2luKCcuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShtYXBwaW5nLCBzZWxlY3RvciwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBtYXBwaW5nW3NlbGVjdG9yXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3RUeXBlICsgJyAnICsgc2VsZWN0b3IgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc2VsZWN0b3IgKyAnIGlzIG5vdCBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG5hbWVzcGFjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlcyA9IGNvbnN0cnVjdG9ycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYW1lc3BhY2UgJyArIG5hbWVzcGFjZXMuam9pbignfCcpICsgJyBhbGwgaGF2ZSAnICsgc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wb25lbnQoc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmNvbXBvbmVudCwgc2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpcmVjdGl2ZShzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0eXBlQ29uc3QuZGlyZWN0aXZlLCBzZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsdGVyKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5maWx0ZXIsIHNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZXJ2aWNlKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5zZXJ2aWNlLCBzZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IpIHtcclxuICAgICAgICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmdldChjb250cmFjdFR5cGUsIHNlbGVjdG9yKSwgaW5zdGFuY2U7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29udHJhY3RUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmNvbXBvbmVudDpcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVDb21wb25lbnQoY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmRpcmVjdGl2ZTpcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVEaXJlY3RpdmUoY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmZpbHRlcjpcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVGaWx0ZXIoY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LnNlcnZpY2U6XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlU2VydmljZShjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDb21wb25lbnQoY29uc3RydWN0b3IpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRDb21wb25lbnQoY29uc3RydWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRGlyZWN0aXZlKGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0RGlyZWN0aXZlKGNvbnN0cnVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZpbHRlcihjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldEZpbHRlcihjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTZXJ2aWNlKGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlLCBzZXJ2aWNlcyA9IHRoaXMuZ2V0SW5zdGFuY2VzKHR5cGVDb25zdC5zZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0U2VydmljZShjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGEubm9uU2hhcmVkKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBzZXJ2aWNlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2YgY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIHNlcnZpY2VzLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNlcnZpY2Uoc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTZXJ2aWNlKHNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXYWl0aW5nVG9FeHRlbmRzKGNvbnRyYWN0VHlwZSkge1xyXG4gICAgICAgIGlmICghdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0pIHtcclxuICAgICAgICAgICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdhaXRpbmdUb0V4dGVuZHMoY29udHJhY3RUeXBlLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTZWxlY3RvcihzZWxlY3RvciwgY29udHJhY3RUeXBlKSB7XHJcbiAgICAgICAgaWYgKG5hbWVQYXR0ZXJuLnRlc3Qoc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25zdHJ1Y3Rvck5hbWUgPSAnJztcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0gc2VsZWN0b3Iuc3BsaXQoJy0nKTtcclxuXHJcbiAgICAgICAgICAgIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSB1dGlscy51cHBlcmNhc2Uoc2VnbWVudFswXSkgKyBzZWdtZW50LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbnRyYWN0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuY29tcG9uZW50OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSAnQ29tcG9uZW50JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmRpcmVjdGl2ZTpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ0RpcmVjdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5maWx0ZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdGaWx0ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3Quc2VydmljZTpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ1NlcnZpY2UnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3JOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNlbGVjdG9yICsgJ2lzIG5vdCBhIHZhbGlkIG5hbWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRDb25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAgICAgY29uc3RydWN0b3IsXHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSA9IHRoaXMuY2hlY2tTZWxlY3RvcihzZWxlY3Rvciwgb3B0aW9ucy5jb250cmFjdFR5cGUpLFxyXG4gICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzID0gc2VsZi5nZXRXYWl0aW5nVG9FeHRlbmRzKG9wdGlvbnMuY29udHJhY3RUeXBlKSxcclxuICAgICAgICAgICAgb25Db25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25zdHJ1Y3Rvci5zdXBlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24obWV0YS5jb25zdHJ1Y3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YS5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzZW5nZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBGdW5jdGlvbignb25Db25zdHJ1Y3QnLCAnXCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uICcgKyBjb25zdHJ1Y3Rvck5hbWUgKyAnKCl7b25Db25zdHJ1Y3QuY2FsbCh0aGlzKTt9OycpKG9uQ29uc3RydWN0KTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ob3B0aW9ucy5zdXBlckNsYXNzKSkge1xyXG4gICAgICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBvcHRpb25zLnN1cGVyQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0YS5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG5cclxuICAgICAgICAvLyBhcHBseSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKG1ldGEuZXh0ZW5kcykpIHtcclxuICAgICAgICAgICAgaWYgKGluamVjdG9yLmNvbnRhaW5zKG9wdGlvbnMuY29udHJhY3RUeXBlLCBtZXRhLmV4dGVuZHMpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3VwZXJPbmUgPSBpbmplY3Rvci5nZXQob3B0aW9ucy5jb250cmFjdFR5cGUsIG1ldGEuZXh0ZW5kcyk7XHJcbiAgICAgICAgICAgICAgICByZW1haW5Db25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgY29uc3RydWN0b3IsIHN1cGVyT25lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdhaXRpbmdUb0V4dGVuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJOYW1lOiBtZXRhLmV4dGVuZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChzdXBlck9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1haW5Db25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgY29uc3RydWN0b3IsIHN1cGVyT25lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZE1ldGEobWV0YSwgc3VwZXJPbmUpIHtcclxuICAgICAgICAgICAgaWYgKHN1cGVyT25lLnByb3RvdHlwZS4kJG1ldGEgJiYgc3VwZXJPbmUucHJvdG90eXBlLiQkbWV0YS5wcm90ZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihvcHRpb25zLmNvbnRyYWN0VHlwZSArICc6ICcgKyBtZXRhLmV4dGVuZHMgKyAnIGlzIHByb3RlY3RlZCwgaXQgaXMgbm90IGFsbG93ZWQgdG8gZXh0ZW5kIScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc3VwZXJNZXRhID0gc3VwZXJPbmUucHJvdG90eXBlLiQkbWV0YTtcclxuICAgICAgICAgICAgdmFyIGNvcHkgPSB1dGlscy5jb3B5KHRydWUsIHN1cGVyTWV0YSwgZnVuY3Rpb24gKG9iaiwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIShvYmogPT09IHN1cGVyTWV0YSAmJiAoa2V5ID09PSAnY29uc3RydWN0JyB8fCBrZXkgPT09ICdtZXRob2RzJykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHRydWUsIGNvcHksIG1ldGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yLCBzdXBlck9uZSkge1xyXG4gICAgICAgICAgICBpZiAoc3VwZXJPbmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QobWV0YS5tZXRob2RzKSkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuZXh0ZW5kKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgbWV0YS5tZXRob2RzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi5yZWdpc3RlckNvbnN0cnVjdG9yKG9wdGlvbnMuY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IsIG1ldGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYW55IGNvbXBvbmVudCBleHRlbmRzIGN1cnJlbnQgY29tcG9uZW50XHJcbiAgICAgICAgICAgIHZhciB3YWl0aW5nVG9FeHRlbmRzMiA9IFtdLCBmdWxsU2VsZWN0b3IgPSBtZXRhLm5hbWVzcGFjZSArICcuJyArIHNlbGVjdG9yO1xyXG4gICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnN1cGVyTmFtZSA9PT0gZnVsbFNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jYWxsYmFjay5jYWxsKG51bGwsIGNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdhaXRpbmdUb0V4dGVuZHMyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxmLnNldFdhaXRpbmdUb0V4dGVuZHMob3B0aW9ucy5jb250cmFjdFR5cGUsIHdhaXRpbmdUb0V4dGVuZHMyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckNvbnN0cnVjdG9yKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yLCBtZXRhKSB7XHJcbiAgICAgICAgdmFyIHN1cGVyTWV0YSA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGE7XHJcblxyXG4gICAgICAgIGlmIChzdXBlck1ldGEgJiYgc3VwZXJNZXRhLnByb3RlY3RlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3RUeXBlICsgJzogJyArIG1ldGEuZXh0ZW5kcyArICcgaXMgcHJvdGVjdGVkLCBpdCBpcyBub3QgYWxsb3dlZCB0byBleHRlbmQhJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodHJ1ZSwgc3VwZXJNZXRhLCBmdW5jdGlvbiAob2JqLCBrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICEob2JqID09PSBzdXBlck1ldGEgJiYgKGtleSA9PT0gJ2NvbnN0cnVjdCcgfHwga2V5ID09PSAnbWV0aG9kcycpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWV0YSA9IHV0aWxzLm1lcmdlKHRydWUsIGNvcHksIG1ldGEpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhID0gbWV0YTtcclxuXHJcbiAgICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IGlmIGl0IGlzIGdsb2JhbFxyXG4gICAgICAgIGlmICghbWV0YS5sb2NhbCkge1xyXG4gICAgICAgICAgICBpbmplY3Rvci5yZWdpc3Rlcihjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluamVjdFNlcnZpY2VzKGluc3RhbmNlKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBtZXRhID0gaW5zdGFuY2UuJGdldE1ldGEoKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG1ldGEuaW5qZWN0KSkge1xyXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG1ldGEuaW5qZWN0LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGluc3RhbmNlLCBrZXksIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpdmF0ZUtleSA9ICckJCcgKyBrZXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VbcHJpdmF0ZUtleV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJpdmF0ZUtleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2UodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VbcHJpdmF0ZUtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudmFyIGluamVjdG9yID0gbmV3IEluamVjdG9yKCk7XHJcblxyXG5leHBvcnQgeyB0eXBlQ29uc3QsIEluamVjdG9yLCBpbmplY3RvciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQge2luamVjdG9yfSBmcm9tICcuL2luamVjdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFNlcnZpY2UuY29uc3RydWN0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcclxuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAkaG9va3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb25Jbml0OiAnJyxcclxuICAgICAgICAgICAgb25EZXN0cm95OiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgJGdldE1ldGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgICRzZXRNZXRhKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy4kJG1ldGEgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAkZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGVzdHJveSkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYXhpb3NfXzsiXSwic291cmNlUm9vdCI6IiJ9