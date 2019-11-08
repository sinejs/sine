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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



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

var AttrNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(AttrNode, _VNode);

  function AttrNode(name, value) {
    var _this;

    _classCallCheck(this, AttrNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AttrNode).call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].attribute, name, value));
    _this.quote = '"';
    _this.origin = name;
    _this.isEvent = false;
    _this.isBinding = false;
    _this.isDomEvent = false;
    _this.isDirective = false;
    _this.directive = null;
    _this.ownerElement = null;
    _this.ownerComponent = null;
    _this.htmlElement = null;
    _this.binding = new _binding__WEBPACK_IMPORTED_MODULE_2__["Binding"]();
    _this.priority = 0;
    return _this;
  }

  _createClass(AttrNode, [{
    key: "belongTo",
    value: function belongTo(key) {
      return this.origin === key;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.nodeValue = value;
      this.compile(this.options);
    }
  }, {
    key: "compile",
    value: function compile(options) {
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
          this.directive.$bindNode(this);
          this.binding.setOutput(this.directive.$output);
          this.priority = this.directive.$priority;
        } else {
          throw new Error('directive ' + this.nodeName + ' is not defined');
        }
      }
    }
  }, {
    key: "notifyCompiled",
    value: function notifyCompiled(options) {
      if (this.directive != null) {
        this.directive.$compile(options);
      }
    }
  }, {
    key: "link",
    value: function link(scope, htmlElement, ownerComponent) {
      var self = this;
      this.scope = scope;
      this.htmlElement = htmlElement;
      this.ownerComponent = ownerComponent;
      this.binding.setScope(scope);

      if (this.isEvent) {
        if (this.isDomEvent) {
          this.htmlElement.addEventListener(this.nodeName, function (e) {
            self.binding.compute({
              locals: {
                $event: e,
                $args: null,
                $element: self.htmlElement
              }
            });
          });
        } else if (ownerComponent != null) {
          ownerComponent.$listen(this.nodeName, function (e, args) {
            self.binding.compute({
              locals: {
                $event: e,
                $args: args,
                $element: self.htmlElement
              }
            });
          });
        }
      } else {
        if (this.directive) {
          scope.$$childDirectives.push(this.directive);
          this.directive.$setBinding(this.binding);
        } else if (ownerComponent != null && ownerComponent.$hasAttr(this.nodeName)) {
          ownerComponent.$initAttr(this.nodeName, this.binding.compute());
        } else {
          if (this.nodeName.startsWith('style')) {
            _utility_utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.htmlElement, this.nodeName, this.binding.compute());
          } else {
            this.htmlElement.setAttribute(this.nodeName, this.binding.compute());
          }
        }

        this.binding.onchange(function () {
          self.update();
        });
      }
    }
  }, {
    key: "detect",
    value: function detect() {
      if (this.directive == null) {
        if (this.hasChange()) {
          this.update();
        }
      } else {
        this.directive.$detect();
      }
    }
  }, {
    key: "hasChange",
    value: function hasChange() {
      return this.binding.detect();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.directive != null) {
        this.directive.$update();
      } else {
        if (this.ownerComponent != null && this.ownerComponent.$hasAttr(this.nodeName)) {
          this.ownerComponent.$setAttr(this.nodeName, this.binding.value);
        } else {
          if (this.nodeName.startsWith('style')) {
            _utility_utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.htmlElement, this.nodeName, this.binding.value);
          } else {
            this.htmlElement.setAttribute(this.nodeName, this.binding.value);

            if (this.htmlElement.nodeName === 'INPUT' && this.nodeName === 'value') {
              this.htmlElement.value = this.binding.value;
            }
          }
        }
      }
    }
  }, {
    key: "notifyLinked",
    value: function notifyLinked() {
      if (this.directive) {
        this.directive.$insert();
      }
    }
  }, {
    key: "getDirective",
    value: function getDirective(key) {
      if (key == null) {
        return this.directive;
      }

      if (this.directive != null && this.directive.$$meta.selector === key) {
        return this.directive;
      }

      return null;
    }
  }, {
    key: "getOuterTpl",
    value: function getOuterTpl() {
      return this.origin + (this.nodeValue == null ? '' : '=' + this.quote + this.nodeValue + this.quote);
    }
  }, {
    key: "getInnerTpl",
    value: function getInnerTpl() {
      return this.origin + (this.nodeValue == null ? '' : '=' + this.quote + this.nodeValue + this.quote);
    }
  }, {
    key: "dispose",
    value: function dispose(isFromDirective) {
      if (isFromDirective) {
        this.directive = null;
      }

      this.binding.destroy();
      this.binding = null;
      this.ownerElement = null;
      this.ownerComponent = null;
      this.htmlElement = null;
      this.$destroy();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.directive != null) {
        this.directive.$dispose(true);
        this.directive = null;
      }

      this.dispose();
    }
  }]);

  return AttrNode;
}(_base__WEBPACK_IMPORTED_MODULE_1__["VNode"]);



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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  connection: 101
}; // virtual node

var VNode =
/*#__PURE__*/
function () {
  function VNode(type, name, value) {
    _classCallCheck(this, VNode);

    this.nodeType = type;
    this.nodeName = name;
    this.nodeValue = value;
    this.childNodes = [];
    this.parentNode = null;
    this.previousSibling = null;
    this.nextSibling = null;
    this.firstChild = null;
    this.lastChild = null;
    this.ownerDocument = null;
    this.scope = null;
  }

  _createClass(VNode, [{
    key: "$pushChild",
    value: function $pushChild(child) {
      child.parentNode = this;
      this.childNodes.push(child);
    }
  }, {
    key: "$buildSibling",
    value: function $buildSibling() {
      if (this.childNodes.length === 0) {
        return;
      }

      var self = this;

      if (this.childNodes.length === 1) {
        this.firstChild = this.childNodes[0];
        this.lastChild = this.childNodes[0];
      } else {
        this.firstChild = this.childNodes[0];
        this.lastChild = this.childNodes[this.childNodes.length - 1];
        this.childNodes.forEach(function (child, index) {
          if (index === 0) {
            child.nextSibling = self.childNodes[index + 1];
            return;
          }

          if (index === self.childNodes.length - 1) {
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
  }, {
    key: "$clearParentAndSibling",
    value: function $clearParentAndSibling() {
      this.parentNode = null;
      this.previousSibling = null;
      this.nextSibling = null;
    }
  }, {
    key: "$remove",
    value: function $remove() {
      if (this.parentNode != null) {
        this.parentNode.removeChild(this);
      }
    }
  }, {
    key: "$destroy",
    value: function $destroy() {
      this.$remove();
      this.$clearParentAndSibling();
      this.childNodes.length = 0;
      this.firstChild = null;
      this.lastChild = null;
      this.ownerDocument = null;
      this.scope = null;
    }
  }, {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes.length !== 0;
    }
  }, {
    key: "clearChildNodes",
    value: function clearChildNodes() {
      this.childNodes.forEach(function (child) {
        child.destroy();
      });
      this.childNodes.length = 0;
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      if (child.parentNode != null) {
        child.parentNode.removeChild(child);
      }

      child.parentNode = this;

      if (this.childNodes.length === 0) {
        this.firstChild = child;
      } else {
        this.lastChild.nextSibling = child;
        child.previousSibling = this.lastChild;
      }

      child.compile(this.compileOptions);
      this.lastChild = child;
      this.childNodes.push(child);
      return child;
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(refChild, newChild) {
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
  }, {
    key: "insertAfter",
    value: function insertAfter(refChild, newChild) {
      if (refChild.nextSibling == null) {
        return this.appendChild(newChild);
      }

      return this.insertBefore(refChild.nextSibling, newChild);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
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

      if (index === this.childNodes.length - 1) {
        this.lastChild = child.previousSibling;
      }

      child.$clearParentAndSibling();
      this.childNodes.splice(index, 1);
      return child;
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(refChild, newChild) {
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
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      throw new Error('not implemented');
    }
  }, {
    key: "compile",
    value: function compile(options) {
      this.childNodes.forEach(function (child) {
        child.compile(options);
      });
    }
  }, {
    key: "notifyCompiled",
    value: function notifyCompiled(options) {
      this.childNodes.forEach(function (child) {
        child.notifyCompiled(options);
      });
    }
  }, {
    key: "link",
    value: function link(scope) {
      this.scope = scope;
      return this.childNodes.map(function (child) {
        child.link(scope);
      });
    }
  }, {
    key: "notifyLinked",
    value: function notifyLinked() {
      this.childNodes.forEach(function (child) {
        child.notifyLinked();
      });
    }
  }, {
    key: "detect",
    value: function detect() {
      if (this.hasChange()) {
        this.update();
      }
    }
  }, {
    key: "hasChange",
    value: function hasChange() {
      return false;
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "destroy",
    value: function destroy() {
      this.childNodes.map(function (child) {
        child.destroy();
      });
      this.$destroy();
    }
  }]);

  return VNode;
}();



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
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _utility_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/message */ "./src/utility/message.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ExpNode =
/*#__PURE__*/
function () {
  function ExpNode(text) {
    _classCallCheck(this, ExpNode);

    this.text = text;
    this.value = null;
    this.oldValue = null;
  }

  _createClass(ExpNode, [{
    key: "compute",
    value: function compute(scope, options) {
      this.oldValue = this.value;
      this.value = Object(_parser__WEBPACK_IMPORTED_MODULE_2__["compute"])(this.text, scope, options);
    }
  }, {
    key: "detect",
    value: function detect() {
      return this.value !== this.oldValue;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.value = null;
      this.oldValue = null;
    }
  }]);

  return ExpNode;
}();

var Binding =
/*#__PURE__*/
function () {
  function Binding() {
    _classCallCheck(this, Binding);

    this.scope = null;
    this.text = '';
    this.isExp = false;
    this.segments = [];
    this.rightStr = '';
    this.output = false;
    this.value = null;
    this.oldValue = null;
    this.unwatches = [];
    this.change = new _utility_message__WEBPACK_IMPORTED_MODULE_1__["Messenger"]();
  }

  _createClass(Binding, [{
    key: "setScope",
    value: function setScope(value) {
      this.scope = value;
    }
  }, {
    key: "setOutput",
    value: function setOutput(value) {
      this.output = value;
    }
  }, {
    key: "bind",
    value: function bind(text, isExp) {
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
  }, {
    key: "compute",
    value: function compute(options) {
      var self = this;
      options = options || {};
      this.oldValue = this.value;

      if (this.segments.length === 0) {
        this.value = this.text;
      } else {
        if (this.isExp && this.segments.length === 1) {
          this.segments[0].exp.compute(self.scope, options);
          this.value = this.segments[0].exp.value;
        } else {
          var text = '';
          this.segments.forEach(function (segment) {
            segment.exp.compute(self.scope, options);
            text += segment.leftStr + segment.exp.value;
          });
          this.value = text + this.rightStr;
        }
      }

      return this.value;
    }
  }, {
    key: "assign",
    value: function assign(value) {
      var assignment = Object(_parser__WEBPACK_IMPORTED_MODULE_2__["parseAssignment"])(this.text, this.scope);

      if (assignment.obj != null && assignment.prop != null) {
        assignment.obj.toProxy()[assignment.prop] = value;
      }
    }
  }, {
    key: "listen",
    value: function listen() {
      var self = this;
      this.unwatches = this.segments.map(function (segment) {
        return self.scope.$watch(segment.exp.text, function () {
          self.defer(function () {
            if (self.detect()) {
              self.change.fire();
            }
          });
        });
      });
    }
  }, {
    key: "defer",
    value: function defer(action) {
      var self = this;
      this.cancelTimeout();
      this.timeoutId = setTimeout(function () {
        self.timeoutId = null;
        action.call(self);
      });
    }
  }, {
    key: "cancelTimeout",
    value: function cancelTimeout() {
      if (this.timeoutId != null) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    }
  }, {
    key: "onchange",
    value: function onchange(action) {
      if (this.output) {
        return;
      }

      this.listen();

      if (action != null) {
        this.change.on(action);
      }
    }
  }, {
    key: "detect",
    value: function detect() {
      if (this.output) {
        return false;
      }

      this.compute();
      return this.value !== this.oldValue; // return this.segments.some(function (segment) {
      //     return segment.exp.detect();
      // });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.cancelTimeout();
      this.unwatches.forEach(function (unwatch) {
        unwatch.call();
      });
      this.segments.forEach(function (segment) {
        segment.exp.destroy();
      });
      this.segments = null;
      this.scope = null;
      this.value = null;
      this.oldValue = null;
    }
  }]);

  return Binding;
}();



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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CDataSectionNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(CDataSectionNode, _VNode);

  function CDataSectionNode() {
    _classCallCheck(this, CDataSectionNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(CDataSectionNode).call(this, _base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"].cdataSection));
  }

  return CDataSectionNode;
}(_base__WEBPACK_IMPORTED_MODULE_0__["VNode"]);



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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CommentNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(CommentNode, _VNode);

  function CommentNode() {
    _classCallCheck(this, CommentNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(CommentNode).call(this, _base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"].comment, '#comment'));
  }

  _createClass(CommentNode, [{
    key: "link",
    value: function link() {
      return document.createComment(this.nodeValue);
    }
  }, {
    key: "getOuterTpl",
    value: function getOuterTpl() {
      return this.nodeValue;
    }
  }, {
    key: "getInnerTpl",
    value: function getInnerTpl() {
      return this.nodeValue;
    }
  }]);

  return CommentNode;
}(_base__WEBPACK_IMPORTED_MODULE_0__["VNode"]);



/***/ }),

/***/ "./src/core/connection.js":
/*!********************************!*\
  !*** ./src/core/connection.js ***!
  \********************************/
/*! exports provided: ConnectionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionNode", function() { return ConnectionNode; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ConnectionNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(ConnectionNode, _VNode);

  function ConnectionNode(name, linker) {
    var _this;

    _classCallCheck(this, ConnectionNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConnectionNode).call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].connection, name));
    _this.linker = linker;
    return _this;
  }

  _createClass(ConnectionNode, [{
    key: "link",
    value: function link(scope) {
      this.scope = scope;
      return this.linker.call(this, scope);
    }
  }, {
    key: "notifyLinked",
    value: function notifyLinked() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onInsert)) {
        return this.onInsert.call(this);
      }
    }
  }, {
    key: "detect",
    value: function detect() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDetect)) {
        return this.onDetect.call(this);
      }
    }
  }, {
    key: "hasChange",
    value: function hasChange() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onHasChange)) {
        return this.onHasChange.call(this);
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onUpdate)) {
        return this.onUpdate.call(this);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
        return this.onDestroy.call(this);
      }

      this.$destroy();
    }
  }]);

  return ConnectionNode;
}(_base__WEBPACK_IMPORTED_MODULE_1__["VNode"]);



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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DocumentTypeNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(DocumentTypeNode, _VNode);

  function DocumentTypeNode() {
    _classCallCheck(this, DocumentTypeNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentTypeNode).call(this, _base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"].documentType));
  }

  return DocumentTypeNode;
}(_base__WEBPACK_IMPORTED_MODULE_0__["VNode"]);



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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DocumentNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(DocumentNode, _VNode);

  function DocumentNode() {
    _classCallCheck(this, DocumentNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentNode).call(this, _base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"].document));
  }

  return DocumentNode;
}(_base__WEBPACK_IMPORTED_MODULE_0__["VNode"]);



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
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection */ "./src/core/connection.js");
/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attribute */ "./src/core/attribute.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var ElementNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(ElementNode, _VNode);

  _createClass(ElementNode, [{
    key: "parentElement",
    get: function get() {
      return this.parentNode;
    }
  }]);

  function ElementNode() {
    var _this;

    _classCallCheck(this, ElementNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ElementNode).call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].element, name));
    _this.attributes = [];
    _this.htmlElement = null;
    _this.component = null;
    _this.selfClosed = false;
    _this.compileOptions = null;
    _this.isComponent = false;
    return _this;
  }

  _createClass(ElementNode, [{
    key: "$pushAttribute",
    value: function $pushAttribute(attr) {
      attr.ownerElement = this;
      this.attributes.push(attr);
    }
  }, {
    key: "hasAttributes",
    value: function hasAttributes() {
      return this.attributes.length !== 0;
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(key, value) {
      var target,
          matches = this.attributes.filter(function (attr) {
        return attr.belongTo(key);
      });

      if (matches.length > 0) {
        target = matches[0];
        target.setValue(value);
      } else {
        target = new _attribute__WEBPACK_IMPORTED_MODULE_3__["AttrNode"](key, value);
        target.ownerElement = this;
        target.compile(this.compileOptions);
      }

      this.attributes.push(target);
      return target;
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(key) {
      var target = [],
          self = this;

      if (key instanceof _attribute__WEBPACK_IMPORTED_MODULE_3__["AttrNode"]) {
        var index = this.attributes.indexOf(key);

        if (index !== -1) {
          target = self.attributes.splice(index, 1);
        }
      } else {
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
  }, {
    key: "appendAttribute",
    value: function appendAttribute(attr) {
      if (attr.ownerElement != null) {
        throw new Error("Current attribute is not new!");
      }

      attr.ownerElement = this;
      attr.compile(this.compileOptions);
      this.attributes.push(attr);
      return attr;
    }
  }, {
    key: "getOuterTpl",
    value: function getOuterTpl() {
      var attrTpl = '',
          childTpl = '';
      this.attributes.forEach(function (attr) {
        attrTpl += ' ';
        attrTpl += attr.getOuterTpl();
      });
      this.childNodes.forEach(function (child) {
        childTpl += child.getOuterTpl();
      });
      var tpl = '<' + this.nodeName + attrTpl + '>' + childTpl;

      if (!this.selfClosed) {
        tpl += '</' + this.nodeName + '>';
      }

      return tpl;
    }
  }, {
    key: "getInnerTpl",
    value: function getInnerTpl() {
      var childTpl = '';
      this.childNodes.forEach(function (child) {
        childTpl += child.getOuterTpl();
      });
      return childTpl;
    }
  }, {
    key: "setOuterTpl",
    value: function setOuterTpl(tpl) {
      var self = this;
      Object(_parser__WEBPACK_IMPORTED_MODULE_4__["parse"])(tpl).forEach(function (vnode) {
        vnode.parentNode = null;
        self.parentNode.insertBefore(self, vnode);
      });
      self.parentNode.removeChild(self);
    }
  }, {
    key: "setInnerTpl",
    value: function setInnerTpl(tpl) {
      var self = this;
      this.clearChildNodes();
      Object(_parser__WEBPACK_IMPORTED_MODULE_4__["parse"])(tpl).forEach(function (vnode) {
        vnode.parentNode = null;
        self.appendChild(vnode);
      });
    }
  }, {
    key: "getDirective",
    value: function getDirective(key) {
      var result = null;
      this.attributes.some(function (attr) {
        result = attr.getDirective(key);
        return result != null;
      });
      return result;
    }
  }, {
    key: "compile",
    value: function compile(options) {
      this.compileOptions = options;
      this.attributes.forEach(function (attr) {
        attr.compile(options);
      }); // perform directive according to priority

      this.attributes = Object(_utility_utils__WEBPACK_IMPORTED_MODULE_5__["orderBy"])(this.attributes, function (item) {
        return item.priority;
      });
      this.isComponent = options.containsComponent(this.nodeName);

      if (!this.isComponent) {
        this.childNodes.forEach(function (child) {
          child.compile(options);
        });
      }
    }
  }, {
    key: "notifyCompiled",
    value: function notifyCompiled(options) {
      this.attributes.forEach(function (attr) {
        attr.notifyCompiled(options);
      });

      if (this.component == null) {
        this.childNodes.forEach(function (child) {
          child.notifyCompiled(options);
        });
      }
    }
  }, {
    key: "link",
    value: function link(scope) {
      var self = this;
      self.scope = scope;
      self.htmlElement = document.createElement(self.nodeName);

      if (this.isComponent) {
        this.component = scope.$createChildCmp(this.nodeName);
        this.component.$bindNode(this);
        self.attributes.forEach(function (attr) {
          attr.link(scope, self.htmlElement, self.component);
        });
        self.component.$initAttrDone();
        self.component.$mount(self.htmlElement);
      } else {
        this.attributes.forEach(function (attr) {
          attr.link(scope, self.htmlElement);
        });
        self.childNodes.forEach(function (child) {
          self.htmlElement.appendChild(child.link(scope));
        });
      }

      return self.htmlElement;
    }
  }, {
    key: "notifyLinked",
    value: function notifyLinked() {
      this.attributes.forEach(function (attr) {
        attr.notifyLinked();
      });

      if (this.component == null) {
        this.childNodes.forEach(function (child) {
          child.notifyLinked();
        });
      }
    }
  }, {
    key: "detect",
    value: function detect() {
      this.attributes.forEach(function (attr) {
        attr.detect();
      });

      if (this.component == null) {
        this.childNodes.forEach(function (child) {
          child.detect();
        });
      }
    }
  }, {
    key: "dispose",
    value: function dispose(isFromComponent) {
      if (this.component == null) {
        this.childNodes.forEach(function (child) {
          child.destroy();
        });
      } else if (isFromComponent) {
        this.component = null;
      }

      this.attributes.forEach(function (attr) {
        attr.destroy();
      });
      this.attributes.length = 0;
      this.removeHtmlElement();
      this.compileOptions = null;
      this.$destroy();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.component != null) {
        this.component.$dispose(true);
        this.component = null;
      }

      this.dispose();
    }
  }, {
    key: "getHtmlElement",
    value: function getHtmlElement() {
      return this.htmlElement;
    }
  }, {
    key: "removeHtmlElement",
    value: function removeHtmlElement() {
      if (this.htmlElement != null) {
        _utility_ele_utils__WEBPACK_IMPORTED_MODULE_0__["removeNode"](this.htmlElement);
      }
    }
  }, {
    key: "createElement",
    value: function createElement(name) {
      return new ElementNode(name);
    }
  }, {
    key: "createAttr",
    value: function createAttr(name) {
      return new _attribute__WEBPACK_IMPORTED_MODULE_3__["AttrNode"](name);
    }
  }, {
    key: "createConnection",
    value: function createConnection(name, linker) {
      return new _connection__WEBPACK_IMPORTED_MODULE_2__["ConnectionNode"](name, linker);
    }
  }]);

  return ElementNode;
}(_base__WEBPACK_IMPORTED_MODULE_1__["VNode"]);



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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DocumentFragmentNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(DocumentFragmentNode, _VNode);

  function DocumentFragmentNode() {
    _classCallCheck(this, DocumentFragmentNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentFragmentNode).call(this, _base__WEBPACK_IMPORTED_MODULE_0__["VNodeType"].documentFragment, '#document-fragment'));
  }

  return DocumentFragmentNode;
}(_base__WEBPACK_IMPORTED_MODULE_0__["VNode"]);



/***/ }),

/***/ "./src/core/handler.js":
/*!*****************************!*\
  !*** ./src/core/handler.js ***!
  \*****************************/
/*! exports provided: GetPropertyHandler, SetPropertyHandler, AccessPropertyHandler, propChangingMsg, propChangedMsg, getTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPropertyHandler", function() { return GetPropertyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPropertyHandler", function() { return SetPropertyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessPropertyHandler", function() { return AccessPropertyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propChangingMsg", function() { return propChangingMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propChangedMsg", function() { return propChangedMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTarget", function() { return getTarget; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _utility_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/message */ "./src/utility/message.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var propChangingMsg = new _utility_message__WEBPACK_IMPORTED_MODULE_1__["Messenger"]();
var propChangedMsg = new _utility_message__WEBPACK_IMPORTED_MODULE_1__["Messenger"]();
var targetKey = '__target__';

function getTarget(value) {
  if (Object(_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
    var target = value[targetKey]; // value is a proxy return by proxy handler

    if (target != null) {
      value = target;
    }
  }

  return value;
}

var GetPropertyHandler =
/*#__PURE__*/
function () {
  function GetPropertyHandler(deepProxy, variables, fullTargetKey) {
    _classCallCheck(this, GetPropertyHandler);

    this.deepProxy = deepProxy;
    this.variables = variables;
    this.fullTargetKey = fullTargetKey;
  }

  _createClass(GetPropertyHandler, [{
    key: "get",
    value: function get(target, key) {
      if (targetKey === key) {
        return target;
      }

      var value = target[key],
          fullKey = key;

      if (this.fullTargetKey != null) {
        fullKey = this.fullTargetKey + '.' + key;
      }

      if (this.deepProxy && Object(_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
        value = new Proxy(value, new GetPropertyHandler(this.deepProxy, this.variables, fullKey));
      }

      var existed = this.variables.some(function (item) {
        return item.target === target && item.key === key;
      });

      if (!existed) {
        this.variables.push({
          target: target,
          key: key,
          targetKey: this.fullTargetKey
        });
      }

      return value;
    }
  }]);

  return GetPropertyHandler;
}();

var SetPropertyHandler =
/*#__PURE__*/
function () {
  function SetPropertyHandler() {
    _classCallCheck(this, SetPropertyHandler);
  }

  _createClass(SetPropertyHandler, [{
    key: "set",
    value: function set(target, key, value) {
      var oldValue = target[key];

      if (oldValue !== value || Object(_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target) && key === 'length') {
        var validation = {
          valid: true,
          apply: true,
          oldValue: oldValue,
          newValue: value
        };
        propChangingMsg.fire({
          target: target,
          key: key,
          data: validation
        });

        if (validation.apply) {
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
  }]);

  return SetPropertyHandler;
}();

var AccessPropertyHandler =
/*#__PURE__*/
function () {
  function AccessPropertyHandler(deepProxy) {
    _classCallCheck(this, AccessPropertyHandler);

    this.deepProxy = deepProxy;
  }

  _createClass(AccessPropertyHandler, [{
    key: "get",
    value: function get(target, key) {
      if (targetKey === key) {
        return target;
      }

      var value = target[key];

      if (this.deepProxy && Object(_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
        value = new Proxy(value, new SetPropertyHandler(this.deepProxy));
      }

      return value;
    }
  }, {
    key: "set",
    value: function set(target, key, value) {
      if (this.deepProxy) {
        value = getTarget(value);
      }

      var oldValue = target[key];

      if (oldValue !== value || Object(_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target) && key === 'length') {
        var validation = {
          valid: true,
          apply: true,
          oldValue: oldValue,
          newValue: value
        };
        propChangingMsg.fire({
          target: target,
          key: key,
          data: validation
        });

        if (validation.apply) {
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
  }]);

  return AccessPropertyHandler;
}();



/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! exports provided: PropertyObserver, Observer, VNodeType, VNode, AttrNode, CDataSectionNode, CommentNode, ConnectionNode, DocumentTypeNode, DocumentNode, ElementNode, DocumentFragmentNode, TextNode, Binding, GetPropertyHandler, SetPropertyHandler, AccessPropertyHandler, propChangingMsg, propChangedMsg, getTarget */
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

/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connection */ "./src/core/connection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectionNode", function() { return _connection__WEBPACK_IMPORTED_MODULE_4__["ConnectionNode"]; });

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

/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./handler */ "./src/core/handler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPropertyHandler", function() { return _handler__WEBPACK_IMPORTED_MODULE_11__["GetPropertyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetPropertyHandler", function() { return _handler__WEBPACK_IMPORTED_MODULE_11__["SetPropertyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessPropertyHandler", function() { return _handler__WEBPACK_IMPORTED_MODULE_11__["AccessPropertyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propChangingMsg", function() { return _handler__WEBPACK_IMPORTED_MODULE_11__["propChangingMsg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propChangedMsg", function() { return _handler__WEBPACK_IMPORTED_MODULE_11__["propChangedMsg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTarget", function() { return _handler__WEBPACK_IMPORTED_MODULE_11__["getTarget"]; });

/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./observer */ "./src/core/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyObserver", function() { return _observer__WEBPACK_IMPORTED_MODULE_12__["PropertyObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return _observer__WEBPACK_IMPORTED_MODULE_12__["Observer"]; });

/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./proxy */ "./src/core/proxy.js");
/* empty/unused harmony star reexport */














/***/ }),

/***/ "./src/core/observer.js":
/*!******************************!*\
  !*** ./src/core/observer.js ***!
  \******************************/
/*! exports provided: PropertyObserver, Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyObserver", function() { return PropertyObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handler */ "./src/core/handler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var PropertyObserver =
/*#__PURE__*/
function () {
  function PropertyObserver() {
    _classCallCheck(this, PropertyObserver);

    this.plainMap = new Map();
    this.regexMap = new Map();
  }

  _createClass(PropertyObserver, [{
    key: "on",
    value: function on(prop, action, options) {
      var self = this,
          map = Object(_utility__WEBPACK_IMPORTED_MODULE_1__["isRegExp"])(prop) ? this.regexMap : this.plainMap;

      if (!map.has(prop)) {
        map.set(prop, []);
      }

      if (options) {
        action.beforeChanged = options.beforeChanged;
      }

      map.get(prop).push(action);
      return function () {
        self.off(prop, action);
      };
    }
  }, {
    key: "off",
    value: function off(prop, action) {
      var map = Object(_utility__WEBPACK_IMPORTED_MODULE_1__["isRegExp"])(prop) ? this.regexMap : this.plainMap;

      if (!map.has(prop)) {
        return;
      }

      var actions = map.get(prop);
      var index = actions.indexOf(action);

      if (index !== -1) {
        actions.splice(index, 1);
      }
    }
  }, {
    key: "fireChanged",
    value: function fireChanged(prop, args) {
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
  }, {
    key: "fireChanging",
    value: function fireChanging(prop, args) {
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
  }, {
    key: "destroy",
    value: function destroy() {
      this.plainMap.clear();
      this.regexMap.clear();
    }
  }]);

  return PropertyObserver;
}();

var ObjectObserver =
/*#__PURE__*/
function () {
  function ObjectObserver() {
    _classCallCheck(this, ObjectObserver);

    var self = this,
        onchanging = function onchanging(args) {
      var obj = args.target,
          prop = args.key;
      self.fireChanging(obj, prop, args.data);
    },
        onchanged = function onchanged(args) {
      var obj = args.target,
          prop = args.key;
      self.fireChanged(obj, prop, args.data);
    };

    _handler__WEBPACK_IMPORTED_MODULE_2__["propChangingMsg"].on(onchanging);
    _handler__WEBPACK_IMPORTED_MODULE_2__["propChangedMsg"].on(onchanged);

    this.offChange = function () {
      _handler__WEBPACK_IMPORTED_MODULE_2__["propChangingMsg"].off(onchanging);
      _handler__WEBPACK_IMPORTED_MODULE_2__["propChangedMsg"].off(onchanged);
    };

    this.objMap = new Map();
  }

  _createClass(ObjectObserver, [{
    key: "on",
    value: function on(obj, prop, action, options) {
      var self = this;

      if (!this.objMap.has(obj)) {
        this.objMap.set(obj, new PropertyObserver());
      }

      return this.objMap.get(obj).on(prop, action, options);
    }
  }, {
    key: "off",
    value: function off(obj, prop, action) {
      if (this.objMap.has(obj)) {
        this.objMap.get(obj).off(prop, action);
      }
    }
  }, {
    key: "fireChanged",
    value: function fireChanged(obj, prop, args) {
      if (this.objMap.has(obj)) {
        this.objMap.get(obj).fireChanged(prop, args);
      }
    }
  }, {
    key: "fireChanging",
    value: function fireChanging(obj, prop, args) {
      if (this.objMap.has(obj)) {
        this.objMap.get(obj).fireChanging(prop, args);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.offChange.call(this);
      this.objMap.forEach(function (item) {
        item.destroy();
      });
      this.objMap = null;
    }
  }]);

  return ObjectObserver;
}();

var MemberWatcher =
/*#__PURE__*/
function () {
  function MemberWatcher(scope, target, key, targetKey) {
    _classCallCheck(this, MemberWatcher);

    this.scope = scope;
    this.target = target;
    this.key = key;
    this.targetKey = targetKey;
    this.observer = null;
    this.action = null;
    this.unwatch = null;
    this.options = null;

    if (!targetKey) {
      this.id = key;
    } else {
      this.id = targetKey + '.' + key;
    }
  }

  _createClass(MemberWatcher, [{
    key: "start",
    value: function start(observer, action, options) {
      this.observer = observer;
      this.action = action;
      this.options = options;
      this.unwatch = this.observer.on(this.target, this.key, this.action, this.options);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.unwatch != null) {
        this.unwatch.call();
      }
    }
  }, {
    key: "update",
    value: function update(changeKey) {
      if (this.targetKey != null && this.targetKey.startsWith(changeKey)) {
        var newTarget = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["compute"])(this.targetKey, this.scope);

        if (newTarget !== this.target) {
          this.stop();
          this.target = newTarget;
          this.unwatch = this.observer.on(this.target, this.key, this.action, this.options);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.stop();
      this.scope = null;
      this.target = null;
      this.observer = null;
      this.action = null;
      this.unwatch = null;
    }
  }]);

  return MemberWatcher;
}();

var Detector =
/*#__PURE__*/
function () {
  function Detector() {
    _classCallCheck(this, Detector);

    var self = this;
    this.queue = [];
    this.timeoutId = null;

    this.digest = function () {
      self.defer(function () {
        self.queue.forEach(function (action) {
          action.call(self);
        });
      });
    };
  }

  _createClass(Detector, [{
    key: "defer",
    value: function defer(action) {
      var self = this;
      this.clearDefer();
      this.timeoutId = setTimeout(function () {
        this.timeoutId = null;
        action.call(self);
      });
    }
  }, {
    key: "clearDefer",
    value: function clearDefer() {
      if (this.timeoutId != null) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    }
  }, {
    key: "execute",
    value: function execute() {
      _handler__WEBPACK_IMPORTED_MODULE_2__["propChangedMsg"].on(this.digest);
    }
  }, {
    key: "apply",
    value: function apply(action) {
      this.queue.push(action);
    }
  }, {
    key: "remove",
    value: function remove(action) {
      var index = this.queue.indexOf(action);

      if (index !== -1) {
        this.queue.splice(index, 1);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _handler__WEBPACK_IMPORTED_MODULE_2__["propChangedMsg"].off(this.digest);
      this.clearDefer();
      this.queue = [];
    }
  }]);

  return Detector;
}();

var detector = new Detector();
detector.execute();

var ExpWatcher =
/*#__PURE__*/
function () {
  function ExpWatcher(scope, exp) {
    _classCallCheck(this, ExpWatcher);

    var self = this;
    this.scope = scope;
    this.exp = exp;
    this.value = null;
    this.unwatch = null;

    this.detect = function () {
      var oldValue = self.value,
          newValue = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["compute"])(self.exp, self.scope);

      if (newValue !== oldValue) {
        self.value = newValue;
        self.action.call(self, {
          oldValue: oldValue,
          newValue: newValue
        });
      }
    };
  }

  _createClass(ExpWatcher, [{
    key: "start",
    value: function start(action) {
      var self = this;
      this.action = action;
      this.value = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["compute"])(this.exp, this.scope);
      detector.apply(self.detect);

      this.unwatch = function () {
        detector.remove(self.detect);
      };
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.unwatch != null) {
        this.unwatch.call();
        this.action = null;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.stop();
      this.scope = null;
      this.unwatch = null;
    }
  }]);

  return ExpWatcher;
}();

var Watcher =
/*#__PURE__*/
function () {
  function Watcher(scope, exp) {
    _classCallCheck(this, Watcher);

    this.scope = scope;
    this.exp = exp;
    this.observer = null;
    this.action = null;
    this.members = {};
    this.digests = [];
    this.options = null;
  }

  _createClass(Watcher, [{
    key: "parse",
    value: function parse() {
      if (this.exp === '*') {
        this.exp = /.+/i;
      }

      if (Object(_utility__WEBPACK_IMPORTED_MODULE_1__["isRegExp"])(this.exp)) {
        return [{
          target: this.scope,
          key: this.exp
        }];
      }

      var ast = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parseExp"])(this.exp);

      if (ast.hasCC()) {
        return [{
          dirtyCheck: true,
          key: this.exp
        }];
      } // var items = [],
      //     handler = new GetPropertyHandler(true, items),
      //     proxy = new Proxy(this.scope, handler);
      //
      // compute(this.exp, proxy);
      //
      // return items;


      var options = {
        collectMembers: true
      };
      Object(_parser__WEBPACK_IMPORTED_MODULE_0__["compute"])(this.exp, this.scope, options);
      return options.members;
    }
  }, {
    key: "start",
    value: function start(observer, action, options) {
      this.observer = observer;
      this.action = action;
      this.options = options;
      this.updateMember();
    }
  }, {
    key: "updateMember",
    value: function updateMember() {
      var self = this;
      this.parse().forEach(function (item) {
        if (item.dirtyCheck) {
          var digest = new ExpWatcher(self.scope, item.key);
          self.digests.push(digest);
          self.startDigest(digest);
        } else {
          var member = new MemberWatcher(self.scope, item.target, item.key, item.targetKey);

          if (!self.members[member.id]) {
            self.members[member.id] = member;
            self.startMember(member);
          }
        }
      });
    }
  }, {
    key: "startDigest",
    value: function startDigest(digest) {
      var self = this;
      digest.start(function (args) {
        self.action.call(this, args);
      }, this.options);
    }
  }, {
    key: "startMember",
    value: function startMember(member) {
      var self = this;
      member.start(self.observer, function (prop, args) {
        var changeKey = prop;

        if (member.targetKey != null) {
          changeKey = member.targetKey + '.' + prop;
        }

        Object(_utility__WEBPACK_IMPORTED_MODULE_1__["forEach"])(self.members, function (key, memberWatcher) {
          memberWatcher.update(changeKey);
        }); // self.updateMember();

        self.action.call(this, prop, args);
      }, this.options);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      Object(_utility__WEBPACK_IMPORTED_MODULE_1__["forEach"])(this.members, function (key, member) {
        member.destroy();
      });
      this.digests.forEach(function (digest) {
        digest.destroy();
      });
      this.scope = null;
      this.observer = null;
      this.action = null;
      this.members = null;
      this.digests = null;
    }
  }]);

  return Watcher;
}();

var Observer =
/*#__PURE__*/
function () {
  function Observer() {
    _classCallCheck(this, Observer);

    this.observer = new ObjectObserver();
    this.watchers = [];
  }

  _createClass(Observer, [{
    key: "watch",
    value: function watch(obj, exp, action) {
      var self = this,
          watcher = this.createWatcher(obj, exp);
      watcher.start(this.observer, action);
      return function () {
        watcher.destroy();
        self.removeWatcher(watcher);
      };
    }
  }, {
    key: "validate",
    value: function validate(obj, exp, action) {
      var self = this,
          watcher = this.createWatcher(obj, exp);
      watcher.start(this.observer, action, {
        beforeChanged: true
      });
      return function () {
        watcher.destroy();
        self.removeWatcher(watcher);
      };
    }
  }, {
    key: "createWatcher",
    value: function createWatcher(obj, exp) {
      var watcher = new Watcher(obj, exp);
      this.watchers.push(watcher);
      return watcher;
    }
  }, {
    key: "removeWatcher",
    value: function removeWatcher(watcher) {
      var index = this.watchers.indexOf(watcher);

      if (index !== -1) {
        this.watchers.splice(index, 1);
      }
    }
  }, {
    key: "fireChanged",
    value: function fireChanged(obj, prop, args) {
      return this.observer.fireChanged(obj, prop, args);
    }
  }, {
    key: "fireChanging",
    value: function fireChanging(obj, prop, args) {
      return this.observer.fireChanging(obj, prop, args);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.watchers.forEach(function (watcher) {
        watcher.destroy();
      });
      this.watchers = null;
      this.observer.destroy();
      this.observer = null;
    }
  }]);

  return Observer;
}();



/***/ }),

/***/ "./src/core/proxy.js":
/*!***************************!*\
  !*** ./src/core/proxy.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler */ "./src/core/handler.js");


Object.prototype.toProxy = function () {
  return new Proxy(this, new _handler__WEBPACK_IMPORTED_MODULE_0__["SetPropertyHandler"]());
};

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var TextNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(TextNode, _VNode);

  function TextNode() {
    var _this;

    _classCallCheck(this, TextNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextNode).call(this, _base__WEBPACK_IMPORTED_MODULE_2__["VNodeType"].text, '#text'));
    _this.binding = new _binding__WEBPACK_IMPORTED_MODULE_3__["Binding"]();
    _this.htmlElement = null;
    return _this;
  }

  _createClass(TextNode, [{
    key: "compile",
    value: function compile() {
      this.binding.bind(this.nodeValue);
    }
  }, {
    key: "link",
    value: function link(scope) {
      var self = this;
      this.binding.setScope(scope);
      this.binding.onchange(function () {
        self.update();
      });
      return this.render(this.binding.compute());
    }
  }, {
    key: "hasChange",
    value: function hasChange() {
      return this.binding.detect();
    }
  }, {
    key: "update",
    value: function update() {
      _utility_ele_utils__WEBPACK_IMPORTED_MODULE_1__["replaceNode"](this.htmlElement, this.render(this.binding.value));
    }
  }, {
    key: "render",
    value: function render(value) {
      this.htmlElement = document.createTextNode(value);
      return this.htmlElement;
    }
  }, {
    key: "getOuterTpl",
    value: function getOuterTpl() {
      return this.nodeValue;
    }
  }, {
    key: "getInnerTpl",
    value: function getInnerTpl() {
      return this.nodeValue;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.binding.destroy();
      this.binding = null;
      this.htmlElement = null;
      this.$destroy();
    }
  }]);

  return TextNode;
}(_base__WEBPACK_IMPORTED_MODULE_2__["VNode"]);



/***/ }),

/***/ "./src/decorator/component.js":
/*!************************************!*\
  !*** ./src/decorator/component.js ***!
  \************************************/
/*! exports provided: component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return component; });
/* harmony import */ var _view_injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/injector */ "./src/view/injector.js");


function component(meta) {
  return function (target) {
    var selector = meta.selector || target.name;
    _view_injector__WEBPACK_IMPORTED_MODULE_0__["injector"].registerConstructor(_view_injector__WEBPACK_IMPORTED_MODULE_0__["typeConst"].component, selector, target, meta);
  };
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

/***/ "./src/directive/bind-cmp.js":
/*!***********************************!*\
  !*** ./src/directive/bind-cmp.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator/directive */ "./src/decorator/directive.js");
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var BindCmpDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-bind-cmp'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(BindCmpDirective, _Directive);

  function BindCmpDirective() {
    var _this;

    _classCallCheck(this, BindCmpDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BindCmpDirective).call(this));
    _this.$priority = 5;
    _this.nameDir = null;
    _this.config = null;
    _this.view = null;
    return _this;
  }

  _createClass(BindCmpDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.nameDir = this.$element.getDirective('n-name');
      this.render();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.clear();
      this.render();
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.clear();
      this.nameDir = null;
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.view != null) {
        this.view.$destroy();
      }

      this.config = null;
    }
  }, {
    key: "render",
    value: function render() {
      this.config = this.$binding.compute();

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_2__["isObject"](this.config)) {
        this.view = this.$binding.scope.$createChildCmp(this.config.component);

        if (this.config.onInit != null) {
          this.config.onInit.call(this, this.view);
        }
      } else {
        this.view = this.$binding.scope.$createChildCmp(this.config);
      }

      this.view.$mount(this.$htmlElement);

      if (this.nameDir != null) {
        this.nameDir.setCmp(this.view);
      }
    }
  }]);

  return BindCmpDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var BindDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-bind'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(BindDirective, _Directive);

  function BindDirective() {
    _classCallCheck(this, BindDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(BindDirective).call(this));
  }

  _createClass(BindDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.bind();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.bind();
    }
  }, {
    key: "bind",
    value: function bind() {
      this.$htmlElement.innerText = this.$binding.compute();
    }
  }]);

  return BindDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var EmbedDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-embed'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(EmbedDirective, _Directive);

  function EmbedDirective() {
    _classCallCheck(this, EmbedDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(EmbedDirective).call(this));
  }

  _createClass(EmbedDirective, [{
    key: "onCompile",
    value: function onCompile(options) {
      var embedTpl = options.getEmbedTpl();

      if (embedTpl) {
        this.$element.setInnerTpl(embedTpl);
      }
    }
  }]);

  return EmbedDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var HideDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-hide'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(HideDirective, _Directive);

  function HideDirective() {
    _classCallCheck(this, HideDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(HideDirective).call(this));
  }

  _createClass(HideDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.hide();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.hide();
    }
  }, {
    key: "hide",
    value: function hide() {
      var value = this.$binding.compute();
      this.$htmlElement.style.display = value ? 'none' : 'initial';
    }
  }]);

  return HideDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var IfDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-if'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(IfDirective, _Directive);

  function IfDirective() {
    var _this;

    _classCallCheck(this, IfDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IfDirective).call(this));
    _this.htmlComment = null;
    return _this;
  }

  _createClass(IfDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.htmlComment = document.createComment('n-if');

      if (!this.$binding.compute()) {
        _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.$htmlElement, this.htmlComment);
      }
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      if (this.$binding.compute()) {
        if (this.$htmlElement.parentNode == null) {
          _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.htmlComment, this.$htmlElement);
        }
      } else {
        if (this.$htmlElement.parentNode != null) {
          _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.$htmlElement, this.htmlComment);
        }
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.htmlComment = null;
    }
  }]);

  return IfDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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
/* empty/unused harmony star reexport *//* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./name */ "./src/directive/name.js");
/* empty/unused harmony star reexport *//* harmony import */ var _bind_cmp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bind-cmp */ "./src/directive/bind-cmp.js");
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
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ModelDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-model',
  inject: {
    options: '$modelOptions'
  }
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(ModelDirective, _Directive);

  function ModelDirective() {
    var _this;

    _classCallCheck(this, ModelDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModelDirective).call(this));
    _this.$viewValue = null;
    _this.$modelValue = null;
    _this.$parsers = [];
    _this.$formatters = [];
    _this.$viewChangeListeners = [];
    _this.$validators = [];
    _this.$feedback = '';
    _this.$pristine = true;
    _this.$dirty = false;
    _this.$valid = true;
    _this.$invalid = false;
    return _this;
  }

  _createClass(ModelDirective, [{
    key: "onInsert",
    value: function onInsert() {
      var self = this;
      this.setViewValue();

      if (this.$component == null) {
        this.$htmlElement.addEventListener('input', function (e) {
          self.setModelValue(e.target.value);
        });
      } else {
        if (_utility__WEBPACK_IMPORTED_MODULE_2__["isMessenger"](this.$component.change)) {
          this.$component.change.on(function (e, args) {
            self.setModelValue(args.newvalue);
          });
        }

        throw new Error('Compoent ' + this.$component.$$meta.selector + 'must define [change] event');
      }
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.setViewValue();
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.$parsers = null;
      this.$formatters = null;
      this.$viewChangeListeners = null;
      this.$validators = null;
    }
  }, {
    key: "setViewValue",
    value: function setViewValue() {
      var self = this;
      this.$modelValue = this.$binding.compute();
      var viewValue = this.$modelValue;
      this.$validators.forEach(function (validator) {
        validator.call(self, self.$modelValue, self.$viewValue);
      });
      this.$formatters.forEach(function (formatter) {
        viewValue = formatter.call(self, viewValue);
      });

      if (this.$viewValue !== viewValue) {
        this.$viewValue = viewValue;

        if (this.$component == null) {
          this.$htmlElement.value = this.$modelValue;
        } else {
          this.$component.$setAttr('value', this.$modelValue);
        }
      }

      this.updateCss();
      this.updateState();
    }
  }, {
    key: "setModelValue",
    value: function setModelValue(viewValue) {
      var self = this;
      this.setDirty(true);
      this.$viewValue = viewValue;
      this.$viewChangeListeners.forEach(function (listener) {
        listener.call(self, viewValue);
      });
      var modelValue = this.$viewValue;
      this.$parsers.forEach(function (parser) {
        modelValue = parser.call(self, modelValue);
      });

      if (this.$modelValue !== modelValue) {
        this.$modelValue = modelValue;
        this.$validators.forEach(function (validator) {
          validator.call(self, self.$modelValue, self.$viewValue);
        });
        this.$binding.assign(this.$modelValue);
      }
    }
  }, {
    key: "updateCss",
    value: function updateCss() {
      var ele = this.$htmlElement,
          css = this.options.cssClass;

      if (this.$dirty) {
        ele.classList.add(css.dirty);
        ele.classList.remove(css.pristine);
      } else {
        ele.classList.add(css.pristine);
        ele.classList.remove(css.dirty);
      }

      if (this.$valid) {
        ele.classList.add(css.valid);
        ele.classList.remove(css.invalid);
      } else {
        ele.classList.add(css.invalid);
        ele.classList.remove(css.valid);
      }
    }
  }, {
    key: "updateState",
    value: function updateState() {
      var name = this.$htmlElement.name;

      if (!name) {
        return;
      }

      var scope = this.$binding.scope.toProxy();

      if (scope[name] == null) {
        scope[name] = {};
      }

      var state = scope[name].toProxy();
      state.$pristine = this.$pristine;
      state.$dirty = this.$dirty;
      state.$valid = this.$valid;
      state.$invalid = this.$invalid;
      state.$feedback = this.$feedback;
    }
  }, {
    key: "setDirty",
    value: function setDirty(dirty) {
      this.$dirty = dirty;
      this.$pristine = !dirty;
      this.updateState();
      this.updateCss();
    }
  }, {
    key: "setValidity",
    value: function setValidity(valid, feedback) {
      this.$valid = valid;
      this.$invalid = !valid;
      this.$feedback = feedback;
      this.updateState();
      this.updateCss();
    }
  }]);

  return ModelDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/name.js":
/*!*******************************!*\
  !*** ./src/directive/name.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator/directive */ "./src/decorator/directive.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var NameDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-name'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(NameDirective, _Directive);

  function NameDirective() {
    var _this;

    _classCallCheck(this, NameDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NameDirective).call(this));
    _this.$output = true;
    _this.name = null;
    return _this;
  }

  _createClass(NameDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.name = this.$binding.text;

      if (!this.name) {
        return;
      }

      var proxy = this.$scope.toProxy();

      if (this.$component != null) {
        proxy[this.name] = this.$component;
      } else {
        proxy[this.name] = this.$element;
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      if (this.name != null) {
        this.$scope[this.name] = null;
      }
    }
  }, {
    key: "setCmp",
    value: function setCmp(cmp) {
      var proxy = this.$scope.toProxy();
      proxy[this.name] = cmp;
    }
  }]);

  return NameDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var RepeatDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-repeat'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(RepeatDirective, _Directive);

  function RepeatDirective() {
    var _this;

    _classCallCheck(this, RepeatDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RepeatDirective).call(this));
    _this.scope = null;
    _this.itemExp = '';
    _this.itemsExp = '';
    _this.itemTemplate = '';
    _this.dataItems = [];
    _this.cmpItems = [];
    _this.header = null;
    _this.footer = null;
    return _this;
  }

  _createClass(RepeatDirective, [{
    key: "onCompile",
    value: function onCompile() {
      var arg = this.$attr.nodeValue;
      var element = this.$element;
      var pattern = /^([a-z_]+\w+)\s+in\s+(.+)$/i;
      var result = pattern.exec(arg);

      if (result == null) {
        throw new Error('n-repeat: parameter is not valid');
      }

      this.itemExp = result[1];
      this.itemsExp = result[2];
      element.removeAttribute(this.$attr);
      this.itemTemplate = element.getOuterTpl();
      var self = this;
      var connection = element.createConnection('n-repeat', function (scope) {
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
      element.parentNode.replaceChild(element, connection);
      element.destroy();

      connection.onInsert = function () {
        self.render();
      };

      connection.onDetect = function () {
        var items = self.scope.$eval(self.itemsExp);

        if (self.dataItems !== items) {
          self.setDataItems(items);
          self.render();
        } else {
          self.cmpItems.forEach(function (childScope) {
            childScope.$detect();
          });
        }
      };

      connection.onDestroy = function () {
        self.$destroy();
        element = null;
        connection = null;
      };
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.cmpItems.forEach(function (cmpItem) {
        cmpItem.$destroy();
      });
      this.cmpItems = null;
      this.scope = null;
      this.dataItems = null;
      this.header = null;
      this.footer = null;
    }
  }, {
    key: "setDataItems",
    value: function setDataItems(value) {
      var self = this;

      if (_utility__WEBPACK_IMPORTED_MODULE_2__["isArray"](value)) {
        this.dataItems = value;
      } else {
        this.dataItems = [];
      }

      this.scope.$watch(this.dataItems, 'length', function () {
        self.render();
      });
    }
  }, {
    key: "getCmpItem",
    value: function getCmpItem(dataItem) {
      var self = this,
          filters = this.cmpItems.filter(function (item) {
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
  }, {
    key: "render",
    value: function render() {
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
          cmpItem.$inheritCmp(self.scope);
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
  }]);

  return RepeatDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ShowDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-show'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(ShowDirective, _Directive);

  function ShowDirective() {
    _classCallCheck(this, ShowDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShowDirective).call(this));
  }

  _createClass(ShowDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.show();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.show();
    }
  }, {
    key: "show",
    value: function show() {
      var value = this.$binding.compute();
      this.$htmlElement.style.display = value ? 'initial' : 'none';
    }
  }]);

  return ShowDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CheckedDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-checked'
}), _dec(_class =
/*#__PURE__*/
function (_StateDirective) {
  _inherits(CheckedDirective, _StateDirective);

  function CheckedDirective() {
    _classCallCheck(this, CheckedDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckedDirective).call(this, 'checked'));
  }

  return CheckedDirective;
}(_state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"])) || _class);

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
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DisabledDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-disabled'
}), _dec(_class =
/*#__PURE__*/
function (_StateDirective) {
  _inherits(DisabledDirective, _StateDirective);

  function DisabledDirective() {
    _classCallCheck(this, DisabledDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(DisabledDirective).call(this, 'disabled'));
  }

  return DisabledDirective;
}(_state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"])) || _class);

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
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ReadonlyDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-readonly'
}), _dec(_class =
/*#__PURE__*/
function (_StateDirective) {
  _inherits(ReadonlyDirective, _StateDirective);

  function ReadonlyDirective() {
    _classCallCheck(this, ReadonlyDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReadonlyDirective).call(this, 'readonly'));
  }

  return ReadonlyDirective;
}(_state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"])) || _class);

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
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SelectedDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-selected'
}), _dec(_class =
/*#__PURE__*/
function (_StateDirective) {
  _inherits(SelectedDirective, _StateDirective);

  function SelectedDirective() {
    _classCallCheck(this, SelectedDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectedDirective).call(this, 'selected'));
  }

  return SelectedDirective;
}(_state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"])) || _class);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var StateDirective =
/*#__PURE__*/
function (_Directive) {
  _inherits(StateDirective, _Directive);

  function StateDirective(attrName) {
    var _this;

    _classCallCheck(this, StateDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StateDirective).call(this));
    _this.attrName = attrName;
    return _this;
  }

  _createClass(StateDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.perform();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.perform();
    }
  }, {
    key: "perform",
    value: function perform() {
      if (this.$binding.compute()) {
        if (!this.$htmlElement.hasAttribute(this.attrName)) {
          this.$htmlElement.setAttribute(this.attrName, '');
        }
      } else {
        if (this.$htmlElement.hasAttribute(this.attrName)) {
          this.$htmlElement.removeAttribute(this.attrName);
        }
      }
    }
  }]);

  return StateDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"]);



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
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var StyleDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-style'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(StyleDirective, _Directive);

  function StyleDirective() {
    _classCallCheck(this, StyleDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(StyleDirective).call(this));
  }

  _createClass(StyleDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.setStyle();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.setStyle();
    }
  }, {
    key: "setStyle",
    value: function setStyle() {
      var self = this;
      var value = this.$binding.compute();

      if (!value) {
        this.$htmlElement.removeAttribute('style');
      }

      if (_utility__WEBPACK_IMPORTED_MODULE_2__["isString"](value)) {
        this.$htmlElement.style = value;
      } else if (_utility__WEBPACK_IMPORTED_MODULE_2__["isObject"](value)) {
        _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](value, function (key, value) {
          self.$htmlElement.style[key] = value;
        });
        this.$binding.scope.$watch(value, '*', function () {
          _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](value, function (key, value) {
            self.$htmlElement.style[key] = value;
          });
        });
      } else {
        throw new Error('Parameter of n-style should be string or object');
      }
    }
  }]);

  return StyleDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SwitchDefaultDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-switch-default'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(SwitchDefaultDirective, _Directive);

  function SwitchDefaultDirective() {
    var _this;

    _classCallCheck(this, SwitchDefaultDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SwitchDefaultDirective).call(this));
    _this.isMatch = false;
    _this.htmlComment = null;
    _this.switchWhenDirs = [];
    return _this;
  }

  _createClass(SwitchDefaultDirective, [{
    key: "initSwitchWhenDirs",
    value: function initSwitchWhenDirs() {
      var vEle = this.$element;

      while (vEle.previousSibling != null) {
        var whenDir = vEle.previousSibling.getDirective('n-switch-when');

        if (whenDir != null) {
          this.switchWhenDirs.push(whenDir);
        }

        vEle = vEle.previousSibling;
      }
    }
  }, {
    key: "match",
    value: function match() {
      return !this.switchWhenDirs.some(function (item) {
        return item.isMatch;
      });
    }
  }, {
    key: "onInsert",
    value: function onInsert() {
      var self = this;
      this.initSwitchWhenDirs();
      this.isMatch = this.match();
      this.htmlComment = document.createComment('n-switch-default');

      if (!this.isMatch) {
        _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.$htmlElement, this.htmlComment);
      }

      this.switchWhenDirs.forEach(function (item) {
        item.isMatchChanged.on(function () {
          self.update();
        });
      });
    }
  }, {
    key: "update",
    value: function update() {
      var oldValue = this.isMatch,
          newValue = this.match();

      if (newValue !== oldValue) {
        this.isMatch = newValue;

        if (this.isMatch) {
          if (this.$htmlElement.parentNode == null) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.htmlComment, this.$htmlElement);
          }
        } else {
          if (this.$htmlElement.parentNode != null) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.$htmlElement, this.htmlComment);
          }
        }
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.htmlComment = null;
      this.switchWhenDirs = null;
    }
  }]);

  return SwitchDefaultDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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
/* harmony import */ var _utility_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility/message */ "./src/utility/message.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SwitchWhenDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-switch-when'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(SwitchWhenDirective, _Directive);

  function SwitchWhenDirective() {
    var _this;

    _classCallCheck(this, SwitchWhenDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SwitchWhenDirective).call(this));
    _this.isMatch = false;
    _this.htmlComment = null;
    _this.switchDir = null;
    _this.isMatchChanged = new _utility_message__WEBPACK_IMPORTED_MODULE_3__["Messenger"]();
    return _this;
  }

  _createClass(SwitchWhenDirective, [{
    key: "initSwitchDir",
    value: function initSwitchDir() {
      var switchDir = this.$element.parentNode.getDirective('n-switch');

      if (switchDir == null) {
        throw new Error('Require n-switch directive');
      }

      this.switchDir = switchDir;
    }
  }, {
    key: "onInsert",
    value: function onInsert() {
      var self = this;
      this.initSwitchDir();
      this.htmlComment = document.createComment('n-switch-when');
      this.isMatch = this.$binding.compute() === this.switchDir.value;

      if (!this.isMatch) {
        _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.$htmlElement, this.htmlComment);
      }

      this.switchDir.valueChanged.on(function () {
        self.update();
      });
    }
  }, {
    key: "update",
    value: function update() {
      var oldValue = this.isMatch,
          newValue = this.$binding.compute() === this.switchDir.value;

      if (newValue !== oldValue) {
        this.isMatch = newValue;
        this.isMatchChanged.fire();

        if (this.isMatch) {
          if (this.$htmlElement.parentNode == null) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.htmlComment, this.$htmlElement);
          }
        } else {
          if (this.$htmlElement.parentNode != null) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.$htmlElement, this.htmlComment);
          }
        }
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.htmlComment = null;
      this.switchDir = null;
    }
  }]);

  return SwitchWhenDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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
/* harmony import */ var _utility_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility/message */ "./src/utility/message.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SwitchDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-switch'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(SwitchDirective, _Directive);

  function SwitchDirective() {
    var _this;

    _classCallCheck(this, SwitchDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SwitchDirective).call(this));
    _this.value = null;
    _this.valueChanged = new _utility_message__WEBPACK_IMPORTED_MODULE_2__["Messenger"]();
    return _this;
  }

  _createClass(SwitchDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.value = this.$binding.compute();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      var oldValue = this.value,
          newValue = this.$binding.compute();

      if (newValue !== oldValue) {
        this.value = newValue;
      }

      this.valueChanged.fire({
        oldValue: oldValue,
        newValue: newValue
      });
    }
  }]);

  return SwitchDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: isMessenger, namespace, injector, component, directive, filter, service, isComponent, isDirective, isFilter, isService, bootstrap, compile, compute, parse, parseExp, parseAssignment, forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded, queryElementState, ModalComponent */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["orderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderByDescending", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["orderByDescending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["getChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["clearChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["replaceNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["removeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["removeNodeBetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["insertNodeAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementLoaded", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["queryElementLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementUnloaded", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["queryElementUnloaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementState", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["queryElementState"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseExp", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["parseExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAssignment", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["parseAssignment"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/service/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive */ "./src/directive/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui */ "./src/ui/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _ui__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]; });








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
  HtmlLexer["super"].call(this, options);
}

HtmlLexer.prototype.isValidIdentifierStart = function (ch) {
  return 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || '_' === ch || ch === '$' || ch === '@' || ch === ':' || ch === '*';
};

HtmlLexer.prototype.isValidIdentifierContinue = function (ch, cp) {
  return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch) || ch === '-' || ch === '.';
};

HtmlLexer.prototype.expectString = function (str) {
  var num = str.length;
  return this.index + num <= this.text.length ? str === this.text.substr(this.index, num) : false;
}; // html comment "<!--comment-->"


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
}; // html text


HtmlLexer.prototype.readText = function () {
  var start = this.index;
  var string = '';

  while (this.index < this.text.length) {
    var ch = this.text.charAt(this.index);
    var ch2 = this.peek();

    if (ch === '<' && this.isIdentifierStart(ch2) || ch2 === '/' || this.expectString('<!--')) {
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
}; // html tag


HtmlLexer.prototype.readTag = function (begin, end, closing, doctype) {
  this.tokens.push({
    index: this.index,
    text: begin,
    tag: true,
    closing: closing,
    begin: true,
    doctype: doctype
  });
  this.index += begin.length;
  this.readIdent();

  while (this.index < this.text.length) {
    var ch = this.text.charAt(this.index);

    if (!closing) {
      var ch2 = this.peek();
      var str = ch + ch2;

      if (str === '/' + end) {
        this.tokens.push({
          index: this.index,
          text: str,
          tag: true,
          closing: true,
          end: true
        });
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
    } else if (ch === '"' || ch === '\'') {
      this.readString(ch);
    } else if (this.isWhitespace(ch)) {
      this.index++;
    } else if (ch === '=') {
      this.tokens.push({
        index: this.index,
        text: '=',
        equal: true
      });
      this.index++;
    } else {
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
    } else if (ch === '<' && this.isIdentifierStart(ch2)) {
      this.readTag('<', '>', false);
    } else if (this.expectString('</') && this.isIdentifierStart(ch3)) {
      this.readTag('</', '>', true);
    } else if (this.expectString('<!DOCTYPE')) {
      if (allowDocType) {
        this.readTag('<!', '>', true, true);
      } else {
        this.throwError('DOCTYPE is not allowed', this.index, this.index + 1);
      }
    } else {
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
  HtmlParser["super"].call(this, lexer, options);
}

HtmlParser.prototype.parse = function (text) {
  this.index = 0;
  this.text = text;
  this.tokens = this.lexer.lex(text);
  var fargment = new _core__WEBPACK_IMPORTED_MODULE_2__["DocumentFragmentNode"]();
  var doctype,
      allowDocType = !!this.options.allowDocType;

  while (this.index < this.tokens.length) {
    var token = this.current();

    if (token.doctype) {
      if (allowDocType) {
        if (!doctype) {
          doctype = this.doctype();
          fargment.$pushChild(doctype);
        } else {
          this.throwError("DOCTYPE only allow one", token);
        }
      } else {
        this.throwError("DOCTYPE is not allowed", token);
      }
    } else if (token.comment) {
      var comment = new _core__WEBPACK_IMPORTED_MODULE_2__["CommentNode"]();
      comment.nodeValue = token.text;
      fargment.$pushChild(comment);
      this.next();
    } else if (token.textTag) {
      var text = new _core__WEBPACK_IMPORTED_MODULE_2__["TextNode"]();
      text.nodeValue = token.text;
      fargment.$pushChild(text);
      this.next();
    } else if (token.tag && token.begin) {
      fargment.$pushChild(this.element());
    } else {
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
  } else {
    this.throwError(" Unexpected ", token);
  }

  this.attrs(docType).forEach(function (attr) {
    docType.childNodes.push(attr);
  });
  token = this.current();

  if (token.tag && token.end && token.closing) {
    this.next();
  } else {
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
  } else {
    this.throwError(" Unexpected ", token);
  }

  this.attrs(ele).forEach(function (attr) {
    ele.$pushAttribute(attr);
  });
  token = this.current();

  if (token.tag && token.end) {
    this.next();

    if (ele.nodeName === 'input') {
      ele.selfClosed = true;
      return ele;
    }

    if (!token.closing) {
      this.childElements(ele).forEach(function (child) {
        ele.$pushChild(child);
      });
    }
  } else {
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
        } else {
          this.throwError(" Unexpected ", token);
        }
      } else {
        this.throwError(" Unexpected ", token);
      }
    } else {
      this.throwError(" Unexpected ", token);
    }
  } else {
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
    } else if (token.comment) {
      var comment = new _core__WEBPACK_IMPORTED_MODULE_2__["CommentNode"]();
      comment.nodeValue = token.text;
      eles.push(comment);
      this.next();
    } else if (token.textTag) {
      var text = new _core__WEBPACK_IMPORTED_MODULE_2__["TextNode"]();
      text.nodeValue = token.text;
      eles.push(text);
      this.next();
    } else if (token.tag && token.begin) {
      eles.push(this.element(p));
    } else {
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
      attr.origin = token.text;
      this.next();
      token = this.current();

      if (token.equal) {
        this.next();
        token = this.current();

        if (token.constant) {
          attr.nodeValue = token.value;
          this.next();
        } else {
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
/*! exports provided: compile, compute, parse, parseExp, parseAssignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compute", function() { return compute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseExp", function() { return parseExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAssignment", function() { return parseAssignment; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lexer */ "./src/parser/lexer.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser */ "./src/parser/parser.js");
/* harmony import */ var _html_lexer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-lexer */ "./src/parser/html-lexer.js");
/* harmony import */ var _html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html-parser */ "./src/parser/html-parser.js");





var parseOptions = {
  isIdentifierContinue: false,
  isIdentifierStart: false,
  literals: {
    "false": false,
    "null": null,
    "true": true,
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
    getEmbedTpl: function getEmbedTpl() {
      return '';
    },
    containsComponent: function containsComponent() {
      return false;
    },
    createComponent: function createComponent() {
      return null;
    },
    containsDirective: function containsDirective() {
      return false;
    },
    createDirective: function createDirective() {
      return null;
    }
  },
      settings = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["merge"](defaults, options),
      astNodes = parse(html);
  astNodes.forEach(function (astNode) {
    astNode.compile(settings);
  });
  astNodes.forEach(function (astNode) {
    astNode.notifyCompiled(settings);
  });
  return function (scope) {
    var fragment = document.createDocumentFragment();
    scope.$$childElements = astNodes;
    astNodes.forEach(function (astNode) {
      fragment.appendChild(astNode.link(scope));
    });
    astNodes.forEach(function (astNode) {
      astNode.notifyLinked();
    });
    return fragment;
  };
}

function compute(exp, scope, options) {
  options = options || {};

  options.createFilter = function (name) {
    return injector.createFilter(name);
  };

  if (options.collectMembers) {
    options.members = [];
  }

  return parseExp(exp).compile(scope, options);
}

function parseExp(exp) {
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
  return parser.parse(exp);
}

function parseAssignment(exp, scope, options) {
  var ast = parseExp(exp);
  var memberExp = ast.getMemberExpression();

  if (memberExp == null) {
    throw new Error(exp + 'is not valid member expression');
  }

  options = options || {};

  options.createFilter = function (name) {
    return injector.createFilter(name);
  };

  return {
    obj: memberExp.object.compile(scope, options, {}, scope),
    prop: memberExp.property.compile(scope, options, {}, scope)
  };
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
var ESCAPE = {
  'n': '\n',
  'f': '\f',
  'r': '\r',
  't': '\t',
  'v': '\v',
  '\'': '\'',
  '"': '"'
};
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
      this.tokens.push({
        index: this.index,
        text: ch
      });
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
        var token = op3 ? ch3 : op2 ? ch2 : ch;
        this.tokens.push({
          index: this.index,
          text: token,
          operator: true
        });
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
  return this.index + num < this.text.length ? this.text.charAt(this.index + num) : false;
};

Lexer.prototype.isNumber = function (ch) {
  return '0' <= ch && ch <= '9' && typeof ch === 'string';
};

Lexer.prototype.isWhitespace = function (ch) {
  // IE treats non-breaking space as \u00A0
  return ch === ' ' || ch === '\r' || ch === '\t' || ch === '\n' || ch === '\v' || ch === "\xA0";
};

Lexer.prototype.isIdentifierStart = function (ch) {
  return this.options.isIdentifierStart ? this.options.isIdentifierStart(ch, this.codePointAt(ch)) : this.isValidIdentifierStart(ch);
};

Lexer.prototype.isValidIdentifierStart = function (ch) {
  return 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || '_' === ch || ch === '$';
};

Lexer.prototype.isIdentifierContinue = function (ch) {
  return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(ch, this.codePointAt(ch)) : this.isValidIdentifierContinue(ch);
};

Lexer.prototype.isValidIdentifierContinue = function (ch, cp) {
  return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch);
};

Lexer.prototype.codePointAt = function (ch) {
  if (ch.length === 1) {
    return ch.charCodeAt(0);
  } // eslint-disable-next-line no-bitwise


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
  return ch === '-' || ch === '+' || this.isNumber(ch);
};

Lexer.prototype.throwError = function (error, start, end) {
  end = end || this.index;
  var colStr = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["isDefined"](start) ? 's ' + start + '-' + this.index + ' [' + this.text.substring(start, end) + ']' : ' ' + end;
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
      } else if (this.isExpOperator(ch) && peekCh && this.isNumber(peekCh) && number.charAt(number.length - 1) === 'e') {
        number += ch;
      } else if (this.isExpOperator(ch) && (!peekCh || !this.isNumber(peekCh)) && number.charAt(number.length - 1) === 'e') {
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
          this.throwError("Invalid unicode escape [\\u" + hex + ']');
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

/***/ "./src/parser/null-object.js":
/*!***********************************!*\
  !*** ./src/parser/null-object.js ***!
  \***********************************/
/*! exports provided: NullObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullObject", function() { return NullObject; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NullObject = function NullObject() {
  _classCallCheck(this, NullObject);
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
/* harmony import */ var _null_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./null-object */ "./src/parser/null-object.js");



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

AstNode.prototype.compile = function (scope, options, context) {
  return this.childNodes.map(function (child) {
    return child.compile(scope, options || {}, context);
  });
}; // has condition or call expression


AstNode.prototype.hasCC = function () {
  return this.childNodes.some(function (child) {
    return child.hasCC();
  });
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ProgramNode, AstNode);

function ProgramNode() {
  ProgramNode["super"].call(this, AST.Program);
}

ProgramNode.prototype.compile = function (scope, options) {
  var result = this.childNodes[0].compile(scope, options || {});

  if (result instanceof _null_object__WEBPACK_IMPORTED_MODULE_2__["NullObject"]) {
    return null;
  }

  return result;
};

ProgramNode.prototype.getMemberExpression = function () {
  return this.childNodes[0].getMemberExpression();
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ExpressionStatementNode, AstNode);

function ExpressionStatementNode() {
  ExpressionStatementNode["super"].call(this, AST.ExpressionStatement);
}

ExpressionStatementNode.prototype.compile = function (scope, options, context) {
  return this.childNodes[0].compile(scope, options || {}, context);
};

ExpressionStatementNode.prototype.getMemberExpression = function () {
  var child = this.childNodes[0];

  if (child instanceof MemberExpressionNode) {
    return child;
  }

  return null;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](AssignmentExpressionNode, AstNode);

function AssignmentExpressionNode(left, right, operator) {
  AssignmentExpressionNode["super"].call(this, AST.AssignmentExpression);
  this.left = left;
  this.right = right;
  this.operator = operator;
}

AssignmentExpressionNode.prototype.compile = function (scope, options) {
  var target = this.left.compile(scope, options, {
    assignmentLeft: true
  });
  var value = this.right.compile(scope, options);
  target.obj[target.prop] = value;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ConditionalExpressionNode, AstNode);

function ConditionalExpressionNode(test, alternate, consequent) {
  ConditionalExpressionNode["super"].call(this, AST.ConditionalExpression);
  this.test = test;
  this.alternate = alternate;
  this.consequent = consequent;
}

ConditionalExpressionNode.prototype.compile = function (scope, options) {
  if (this.test.compile(scope, options)) {
    return this.alternate.compile(scope, options);
  }

  return this.consequent.compile(scope, options);
}; // has condition or call expression


ConditionalExpressionNode.prototype.hasCC = function () {
  return true;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](LogicalExpressionNode, AstNode);

function LogicalExpressionNode(operator, left, right) {
  LogicalExpressionNode["super"].call(this, AST.LogicalExpression);
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
  BinaryExpressionNode["super"].call(this, AST.BinaryExpression);
  this.operator = operator;
  this.left = left;
  this.right = right;
}

BinaryExpressionNode.prototype.compile = function (scope, options) {
  var result;
  var leftValue = this.left.compile(scope, options);
  var rightValue = this.right.compile(scope, options); // '+', '-', '*', '/', '%', '<', '>', '<=', '>=', '==', '!=', '===', '!=='

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
  UnaryExpressionNode["super"].call(this, AST.UnaryExpression);
  this.prefix = true;
  this.operator = operator;
  this.arg = arg;
}

UnaryExpressionNode.prototype.compile = function (scope, options) {
  var result,
      value = this.arg.compile(scope, options);

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
  LiteralNode["super"].call(this, AST.Literal);
  this.value = value;
}

LiteralNode.prototype.compile = function () {
  return this.value;
};

LiteralNode.prototype.toText = function () {
  return this.value;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](CallExpressionNode, AstNode);

function CallExpressionNode(callee, args) {
  CallExpressionNode["super"].call(this, AST.CallExpression);
  this.callee = callee;
  this.args = args;
  this.filter = false;
}

CallExpressionNode.prototype.compile = function (scope, options) {
  var context = this.callee.compile(scope, options, {
    callee: true
  });
  var argValues = this.args.map(function (arg) {
    return arg.compile(scope, options);
  });

  if (this.filter) {
    var filterIns = options.createFilter(context.prop);

    if (Object(_view__WEBPACK_IMPORTED_MODULE_1__["isFilter"])(filterIns)) {
      return filterIns.$execute.apply(filterIns, argValues);
    }

    throw new Error('Filter "' + context.prop + '" is not defined');
  } else {
    var fn = context.obj[context.prop];

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](fn)) {
      return fn.apply(context.obj, argValues);
    }

    throw new Error(context.prop + ' is not a function');
  }
}; // has condition or call expression


CallExpressionNode.prototype.hasCC = function () {
  return !this.filter;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](MemberExpressionNode, AstNode);

function MemberExpressionNode(object, property, computed) {
  MemberExpressionNode["super"].call(this, AST.MemberExpression);
  this.object = object;
  this.property = property;
  this.computed = computed;
  this.allowNull = false;
}

MemberExpressionNode.prototype.compile = function (scope, options, context) {
  var obj = this.object.compile(scope, options, context);

  if (obj == null && this.object.allowNull) {
    obj = new _null_object__WEBPACK_IMPORTED_MODULE_2__["NullObject"]();
  }

  if (this.computed) {
    var prop = this.property.compile(scope, options, context);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"](options.members)) {
      options.members.push({
        target: obj,
        targetKey: this.object.toText(),
        key: prop
      });
    }

    return obj[prop];
  }

  return this.property.compile(obj, options, context, this.object);
};

MemberExpressionNode.prototype.toText = function () {
  return this.object.toText() + '.' + this.property.toText();
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](IdentifierNode, AstNode);

function IdentifierNode(name) {
  IdentifierNode["super"].call(this, AST.Identifier);
  this.name = name;
  this.allowNull = false;
}

IdentifierNode.prototype.compile = function (obj, options, context, objNode) {
  if (context) {
    if (context.assignmentLeft || context.callee) {
      return {
        obj: obj,
        prop: this.name
      };
    } else if (context.propertyKey) {
      return this.name;
    }
  }

  var result = obj[this.name];

  if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"](options.members)) {
    options.members.push({
      target: obj,
      targetKey: objNode != null ? objNode.toText() : null,
      key: this.name
    });
  }

  if (result == null && options.locals) {
    result = options.locals[this.name];
  }

  return result;
};

IdentifierNode.prototype.toText = function () {
  return this.name;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ArrayExpressionNode, AstNode);

function ArrayExpressionNode() {
  ArrayExpressionNode["super"].call(this, AST.ArrayExpression);
}

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](PropertyNode, AstNode);

function PropertyNode() {
  PropertyNode["super"].call(this, AST.Property);
  this.kind = 'init';
  this.key = null;
  this.value = null;
  this.computed = false;
}

PropertyNode.prototype.compile = function (scope, options) {
  return {
    key: this.key.compile(scope, options, {
      propertyKey: true
    }),
    value: this.value.compile(scope, options)
  };
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ObjectExpressionNode, AstNode);

function ObjectExpressionNode(properties) {
  ObjectExpressionNode["super"].call(this, AST.ObjectExpression);
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
  throw new Error('Syntax Error: Token \'' + token.text + '\'' + msg + ' at column ' + (token.index + 1) + ' of the expression [' + this.text + '] starting at [' + this.text.substring(token.index) + '].');
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

  while (token = this.expect('==', '!=', '===', '!==')) {
    left = new BinaryExpressionNode(token.text, left, this.relational());
  }

  return left;
};

Parser.prototype.relational = function () {
  var left = this.additive();
  var token;

  while (token = this.expect('<', '>', '<=', '>=')) {
    left = new BinaryExpressionNode(token.text, left, this.additive());
  }

  return left;
};

Parser.prototype.additive = function () {
  var left = this.multiplicative();
  var token;

  while (token = this.expect('+', '-')) {
    left = new BinaryExpressionNode(token.text, left, this.multiplicative());
  }

  return left;
};

Parser.prototype.multiplicative = function () {
  var left = this.unary();
  var token;

  while (token = this.expect('*', '/', '%')) {
    left = new BinaryExpressionNode(token.text, left, this.unary());
  }

  return left;
};

Parser.prototype.unary = function () {
  var token;

  if (token = this.expect('+', '-', '!')) {
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

  if (this.peek('?')) {
    primary.allowNull = true;
    this.consume('?');
  }

  var next;

  while (next = this.expect('(', '[', '.')) {
    if (next.text === '(') {
      primary = new CallExpressionNode(primary, this.parseArguments());
      this.consume(')');
    } else if (next.text === '[') {
      primary = new MemberExpressionNode(primary, this.expression(), true);
      this.consume(']');

      if (this.peek('?')) {
        primary.allowNull = true;
        this.consume('?');
      }
    } else if (next.text === '.') {
      primary = new MemberExpressionNode(primary, this.identifier(), false);

      if (this.peek('?')) {
        primary.allowNull = true;
        this.consume('?');
      }
    } else {
      this.throwError('IMPOSSIBLE');
    }
  }

  return primary;
};

Parser.prototype.filter = function (baseExpression) {
  var args = [baseExpression],
      identifiers = [this.identifier()];

  while (this.expect('.')) {
    identifiers.push(this.identifier());
  } // plus namespace


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
  var properties = [],
      property;

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

    if (t === e1 || t === e2 || t === e3 || t === e4 || !e1 && !e2 && !e3 && !e4) {
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
/* empty/unused harmony star reexport *//* harmony import */ var _model_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model-options */ "./src/service/model-options.js");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "./src/service/model-options.js":
/*!**************************************!*\
  !*** ./src/service/model-options.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/service */ "./src/view/service.js");
/* harmony import */ var _decorator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator/service */ "./src/decorator/service.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ModelOptionsService = (_dec = Object(_decorator_service__WEBPACK_IMPORTED_MODULE_1__["service"])({
  namespace: 'sine',
  selector: '$modelOptions'
}), _dec(_class =
/*#__PURE__*/
function (_Service) {
  _inherits(ModelOptionsService, _Service);

  function ModelOptionsService() {
    var _this;

    _classCallCheck(this, ModelOptionsService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModelOptionsService).call(this));
    _this.cssClass = {
      pristine: 'n-pristine',
      dirty: 'n-dirty',
      valid: 'n-valid',
      invalid: 'n-invalid'
    };
    return _this;
  }

  return ModelOptionsService;
}(_view_service__WEBPACK_IMPORTED_MODULE_0__["Service"])) || _class);

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
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TemplateCacheService = (_dec = Object(_decorator_service__WEBPACK_IMPORTED_MODULE_2__["service"])({
  namespace: 'sine',
  selector: '$templateCache'
}), _dec(_class =
/*#__PURE__*/
function (_Service) {
  _inherits(TemplateCacheService, _Service);

  function TemplateCacheService() {
    var _this;

    _classCallCheck(this, TemplateCacheService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TemplateCacheService).call(this));
    _this.tplCache = {};
    _this.promiseCache = {};
    return _this;
  }

  _createClass(TemplateCacheService, [{
    key: "getTplByUrl",
    value: function getTplByUrl(url) {
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
  }]);

  return TemplateCacheService;
}(_view_service__WEBPACK_IMPORTED_MODULE_1__["Service"])) || _class);

/***/ }),

/***/ "./src/ui/component/form.html":
/*!************************************!*\
  !*** ./src/ui/component/form.html ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"accordion\">\r\n    <div class=\"card\" *n-repeat=\"group in config.groups\">\r\n        <div class=\"card-header\" @click=\"toggle(group)\" *n-bind=\"group.title\"></div>\r\n\r\n        <div class=\"collapse show\" *n-collapse=\"group.collapsed\">\r\n            <div class=\"card-body\">\r\n                <div class=\"form-group\" *n-repeat=\"item in group.items\">\r\n                    <label :for=\"item.field\" class=\"col-form-label-sm\" *n-bind=\"item.label\"></label>\r\n                    <input :type=\"item.type\" class=\"form-control form-control-sm {{ isValid(item)?'is-valid':'is-invalid' }}\" :name=\"item.field\" *n-model=\"entity[item.field]\" *n-validate=\"item.validator\">\r\n                    <small class=\"form-text text-muted\" *n-show=\"item.help && !getFeedback(item)\" *n-bind=\"item.help\"></small>\r\n                    <div class=\"{{ isValid(item)?'valid-feedback':'invalid-feedback'}}\" *n-bind=\"getFeedback(item)\" *n-show=\"getFeedback(item)\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/ui/component/form.js":
/*!**********************************!*\
  !*** ./src/ui/component/form.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view/component */ "./src/view/component.js");
/* harmony import */ var _decorator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator/component */ "./src/decorator/component.js");
/* harmony import */ var _form_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.html */ "./src/ui/component/form.html");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var FormComponent = (_dec = Object(_decorator_component__WEBPACK_IMPORTED_MODULE_1__["component"])({
  namespace: 'sine.ui',
  selector: 'n-form',
  template: _form_html__WEBPACK_IMPORTED_MODULE_2__["default"]
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(FormComponent, _Component);

  function FormComponent() {
    var _this;

    _classCallCheck(this, FormComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormComponent).call(this));
    _this.entity = null;
    _this.config = {
      groups: [],
      validator: {}
    };
    return _this;
  }

  _createClass(FormComponent, [{
    key: "toggle",
    value: function toggle(group) {
      var proxy = group.toProxy();
      proxy.collapsed = !group.collapsed;
    }
  }, {
    key: "isValid",
    value: function isValid(item) {
      if (this[item.field] != null) {
        return this[item.field].$valid;
      }

      return true;
    }
  }, {
    key: "getFeedback",
    value: function getFeedback(item) {
      if (this[item.field] != null) {
        return this[item.field].$feedback;
      }

      return null;
    }
  }]);

  return FormComponent;
}(_view_component__WEBPACK_IMPORTED_MODULE_0__["Component"])) || _class);

/***/ }),

/***/ "./src/ui/component/index.js":
/*!***********************************!*\
  !*** ./src/ui/component/index.js ***!
  \***********************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/ui/component/form.js");
/* empty/unused harmony star reexport *//* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/ui/component/modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _modal__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]; });

/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress */ "./src/ui/component/progress.js");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "./src/ui/component/modal.html":
/*!*************************************!*\
  !*** ./src/ui/component/modal.html ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" tabindex=\"-1\" *n-modal-fade=\"visible\" *n-name=\"rootElement\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\" *n-bind-cmp=\"viewConfig\">\r\n            <!--<div class=\"modal-header\">-->\r\n                <!--<h5 class=\"modal-title\">Modal Title</h5>-->\r\n                <!--<button type=\"button\" class=\"close\">-->\r\n                    <!--<span>&times;</span>-->\r\n                <!--</button>-->\r\n            <!--</div>-->\r\n\r\n            <!--<div class=\"modal-body\">-->\r\n                <!--...-->\r\n            <!--</div>-->\r\n\r\n            <!--<div class=\"modal-footer\">-->\r\n                <!--<button type=\"button\" class=\"btn btn-primary\">Save changes</button>-->\r\n            <!--</div>-->\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/ui/component/modal.js":
/*!***********************************!*\
  !*** ./src/ui/component/modal.js ***!
  \***********************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view/component */ "./src/view/component.js");
/* harmony import */ var _decorator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator/component */ "./src/decorator/component.js");
/* harmony import */ var _modal_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.html */ "./src/ui/component/modal.html");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ModalComponent = (_dec = Object(_decorator_component__WEBPACK_IMPORTED_MODULE_1__["component"])({
  namespace: 'sine.ui',
  selector: 'n-modal',
  template: _modal_html__WEBPACK_IMPORTED_MODULE_2__["default"]
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalComponent, _Component);

  function ModalComponent() {
    var _this;

    _classCallCheck(this, ModalComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalComponent).call(this));
    _this.visible = false;
    _this.viewConfig = null;
    return _this;
  }

  _createClass(ModalComponent, [{
    key: "onDestroy",
    value: function onDestroy() {}
  }, {
    key: "show",
    value: function show(cmp) {
      var self = this;
      this.visible = true;
      this.viewConfig = {
        component: cmp,
        onInit: function onInit(view) {
          view.$close = function () {
            self.close();
          };
        }
      };
      this.$mount(document.body, {
        append: true
      });
    }
  }, {
    key: "close",
    value: function close() {
      var self = this,
          modalShow = this.rootElement.getDirective('n-modal-fade');
      this.$proxy.visible = false;
      modalShow.unload.on(function () {
        self.$destroy();
      });
    }
  }]);

  return ModalComponent;
}(_view_component__WEBPACK_IMPORTED_MODULE_0__["Component"])) || _class);


/***/ }),

/***/ "./src/ui/component/progress.html":
/*!****************************************!*\
  !*** ./src/ui/component/progress.html ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"progress\" *n-style=\"css\">\r\n    <div class=\"progress-bar\" *n-style=\"barCss\" *n-bind=\"label\"></div>\r\n</div>");

/***/ }),

/***/ "./src/ui/component/progress.js":
/*!**************************************!*\
  !*** ./src/ui/component/progress.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view/component */ "./src/view/component.js");
/* harmony import */ var _decorator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator/component */ "./src/decorator/component.js");
/* harmony import */ var _progress_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress.html */ "./src/ui/component/progress.html");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ProgressComponent = (_dec = Object(_decorator_component__WEBPACK_IMPORTED_MODULE_1__["component"])({
  namespace: 'sine.ui',
  selector: 'n-progress',
  template: _progress_html__WEBPACK_IMPORTED_MODULE_2__["default"]
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(ProgressComponent, _Component);

  _createClass(ProgressComponent, [{
    key: "percent",
    get: function get() {
      return Math.round(this.value * 100 / this.maxValue, 2);
    }
  }, {
    key: "label",
    get: function get() {
      return this.percent + '%';
    }
  }]);

  function ProgressComponent() {
    var _this;

    _classCallCheck(this, ProgressComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProgressComponent).call(this));
    _this.value = 0;
    _this.maxValue = 100;
    _this.css = {};
    _this.barCss = {};
    return _this;
  }

  _createClass(ProgressComponent, [{
    key: "afterAttrChange",
    value: function afterAttrChange(prop, value) {
      if (prop === 'value') {
        this.barCss.toProxy().width = this.percent + '%';
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {}
  }]);

  return ProgressComponent;
}(_view_component__WEBPACK_IMPORTED_MODULE_0__["Component"])) || _class);

/***/ }),

/***/ "./src/ui/directive/collapse.js":
/*!**************************************!*\
  !*** ./src/ui/directive/collapse.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator/directive */ "./src/decorator/directive.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CollapseDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine.ui',
  selector: 'n-collapse'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(CollapseDirective, _Directive);

  function CollapseDirective() {
    var _this;

    _classCallCheck(this, CollapseDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CollapseDirective).call(this));
    _this.duration = 400;
    _this.height = '';
    _this.display = '';
    _this.timeoutId = null;
    return _this;
  }

  _createClass(CollapseDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.display = this.$htmlElement.style.display;
      this.height = this.$htmlElement.style.height;
      this.$htmlElement.style.overflow = 'hidden';
      this.toggle();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.toggle();
    }
  }, {
    key: "onLoad",
    value: function onLoad() {
      var self = this;

      if (!this.height) {
        this.height = this.$htmlElement.clientHeight + 'px';
      }

      this.$htmlElement.style.transition = null;
      this.$htmlElement.style.height = 1 + 'px';
      this.timeoutId = setTimeout(function () {
        self.timeoutId = null;
        self.$htmlElement.style.height = self.height;
        self.$htmlElement.style.transition = 'height ' + self.duration + 'ms';
      });
    }
  }, {
    key: "onUnload",
    value: function onUnload() {
      this.$htmlElement.style.display = 'none';
      this.$htmlElement.style.height = this.height;
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.cancelTimeout();
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.$binding.compute()) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.cancelTimeout();
      this.$htmlElement.style.height = 0 + 'px';
    }
  }, {
    key: "show",
    value: function show() {
      this.$htmlElement.style.display = this.display;
      this.$htmlElement.style.height = this.height;
    }
  }, {
    key: "cancelTimeout",
    value: function cancelTimeout() {
      if (this.timeoutId != null) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    }
  }]);

  return CollapseDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/ui/directive/index.js":
/*!***********************************!*\
  !*** ./src/ui/directive/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse */ "./src/ui/directive/collapse.js");
/* empty/unused harmony star reexport *//* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate */ "./src/ui/directive/validate.js");
/* empty/unused harmony star reexport *//* harmony import */ var _modal_fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-fade */ "./src/ui/directive/modal-fade.js");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "./src/ui/directive/modal-fade.js":
/*!****************************************!*\
  !*** ./src/ui/directive/modal-fade.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator/directive */ "./src/decorator/directive.js");
/* harmony import */ var _utility_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility/message */ "./src/utility/message.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ModalFadeDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine.ui',
  selector: 'n-modal-fade'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(ModalFadeDirective, _Directive);

  function ModalFadeDirective() {
    var _this;

    _classCallCheck(this, ModalFadeDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalFadeDirective).call(this));
    _this.backdrop = null;
    _this.timeoutId = null;
    _this.unload = new _utility_message__WEBPACK_IMPORTED_MODULE_2__["Messenger"]();
    return _this;
  }

  _createClass(ModalFadeDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.createBackdrop();
      this.toggle();
    }
  }, {
    key: "onLoad",
    value: function onLoad() {
      var self = this;
      this.timeoutId = setTimeout(function () {
        self.timeoutId = null;
        self.$htmlElement.classList.add('show');
        self.backdrop.classList.add('show');
      });
    }
  }, {
    key: "onUnload",
    value: function onUnload() {
      this.removeModal();
      this.unload.fire();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.toggle();
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.cancelTimeout();
      this.hide(true);
      this.removeModal();
      this.backdrop = null;
    }
  }, {
    key: "createBackdrop",
    value: function createBackdrop() {
      this.backdrop = document.createElement('div');
      this.backdrop.classList.add('modal-backdrop');
      this.backdrop.classList.add('fade');
    }
  }, {
    key: "removeModal",
    value: function removeModal() {
      document.body.classList.remove('modal-open');

      if (this.backdrop.parentNode != null) {
        document.body.removeChild(this.backdrop);
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.$binding.compute()) {
        this.show();
      } else {
        this.hide();
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.cancelTimeout();
      this.$htmlElement.style.display = 'block';
      document.body.classList.add('modal-open');
      document.body.appendChild(this.backdrop);
    }
  }, {
    key: "hide",
    value: function hide(destroy) {
      var self = this;
      this.cancelTimeout();
      this.$htmlElement.classList.remove('show');
      this.backdrop.classList.remove('show');

      if (!destroy) {
        this.timeoutId = setTimeout(function () {
          self.$htmlElement.style.display = null;
          this.timeoutId = null;
        }, 200);
      }
    }
  }, {
    key: "cancelTimeout",
    value: function cancelTimeout() {
      if (this.timeoutId != null) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    }
  }]);

  return ModalFadeDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/ui/directive/validate.js":
/*!**************************************!*\
  !*** ./src/ui/directive/validate.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator/directive */ "./src/decorator/directive.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ValidateDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine.ui',
  selector: 'n-validate'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(ValidateDirective, _Directive);

  function ValidateDirective() {
    _classCallCheck(this, ValidateDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ValidateDirective).call(this));
  }

  _createClass(ValidateDirective, [{
    key: "onCompile",
    value: function onCompile() {
      var self = this,
          nModel = this.$element.getDirective('n-model');

      if (!nModel) {
        throw new Error('Require "n-model"');
      }

      nModel.$validators.push(function (modelValue) {
        var validator = self.$binding.compute();

        if (validator != null) {
          var result = validator.call(self, modelValue);
        }

        if (result != null) {
          nModel.setValidity(result.valid, result.feedback);
        } else {
          nModel.setValidity(true, null);
        }
      });
    }
  }]);

  return ValidateDirective;
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/ui/index.js":
/*!*************************!*\
  !*** ./src/ui/index.js ***!
  \*************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive */ "./src/ui/directive/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/ui/component/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/ui/service/index.js");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "./src/ui/service/index.js":
/*!*********************************!*\
  !*** ./src/ui/service/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-service */ "./src/ui/service/modal-service.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/ui/service/modal-service.js":
/*!*****************************************!*\
  !*** ./src/ui/service/modal-service.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view/service */ "./src/view/service.js");
/* harmony import */ var _decorator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator/service */ "./src/decorator/service.js");
/* harmony import */ var _component_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/modal */ "./src/ui/component/modal.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ModalService = (_dec = Object(_decorator_service__WEBPACK_IMPORTED_MODULE_1__["service"])({
  namespace: 'sine.ui',
  selector: 'modalService'
}), _dec(_class =
/*#__PURE__*/
function (_Service) {
  _inherits(ModalService, _Service);

  function ModalService() {
    _classCallCheck(this, ModalService);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalService).call(this));
  }

  _createClass(ModalService, [{
    key: "show",
    value: function show(content) {
      new _component_modal__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]().show(content);
    }
  }]);

  return ModalService;
}(_view_service__WEBPACK_IMPORTED_MODULE_0__["Service"])) || _class);

/***/ }),

/***/ "./src/utility/ele-utils.js":
/*!**********************************!*\
  !*** ./src/utility/ele-utils.js ***!
  \**********************************/
/*! exports provided: getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded, queryElementState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return getChildNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return clearChildNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return replaceNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return removeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return removeNodeBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return insertNodeAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryElementLoaded", function() { return queryElementLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryElementUnloaded", function() { return queryElementUnloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryElementState", function() { return queryElementState; });
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

function queryElementLoaded(ele, callback) {
  var cancelToken = false;

  function query() {
    if (cancelToken) {
      return;
    }

    if (ele.clientWidth > 0 && ele.clientHeight > 0) {
      callback();
    } else {
      requestAnimationFrame(query);
    }
  }

  requestAnimationFrame(query);
  return function () {
    cancelToken = true;
  };
}

function queryElementUnloaded(ele, callback) {
  var cancelToken = false;

  function query() {
    if (cancelToken) {
      return;
    }

    if (ele.clientWidth === 0 && ele.clientHeight == 0) {
      callback();
    } else {
      requestAnimationFrame(query);
    }
  }

  requestAnimationFrame(query);
  return function () {
    cancelToken = true;
  };
}

function queryElementState(ele, callbacks) {
  var cancelToken = false,
      loaded = false;

  function query() {
    if (cancelToken) {
      return;
    }

    if (ele.clientWidth > 0 && ele.clientHeight > 0) {
      if (!loaded) {
        loaded = true;

        if (callbacks.onLoad != null) {
          callbacks.onLoad.call(callbacks);
        }
      }
    } else {
      if (loaded) {
        loaded = false;

        if (callbacks.onUnload != null) {
          callbacks.onUnload.call(callbacks);
        }
      }
    }

    requestAnimationFrame(query);
  }

  requestAnimationFrame(query);
  return function () {
    cancelToken = true;
  };
}



/***/ }),

/***/ "./src/utility/index.js":
/*!******************************!*\
  !*** ./src/utility/index.js ***!
  \******************************/
/*! exports provided: isMessenger, forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded, queryElementState */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["orderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderByDescending", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["orderByDescending"]; });

/* harmony import */ var _ele_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ele-utils */ "./src/utility/ele-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["getChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["clearChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["replaceNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["removeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["removeNodeBetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["insertNodeAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementLoaded", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["queryElementLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementUnloaded", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["queryElementUnloaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementState", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["queryElementState"]; });





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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Messenger =
/*#__PURE__*/
function () {
  function Messenger() {
    _classCallCheck(this, Messenger);

    this.handlers = [];
  }

  _createClass(Messenger, [{
    key: "on",
    value: function on(fn) {
      this.handlers.push(fn);
    }
  }, {
    key: "off",
    value: function off(fn) {
      for (var i = 0; i < this.handlers.length; i++) {
        if (this.handlers[i] === fn) {
          this.handlers.splice(i, 1);
        }
      }
    }
  }, {
    key: "fire",
    value: function fire(args, scope) {
      var returnValue;
      scope = scope || this;

      for (var i = 0; i < this.handlers.length; i++) {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.handlers[i])) {
          returnValue = this.handlers[i].call(scope, args);
        }
      }

      return returnValue;
    }
  }]);

  return Messenger;
}();

var MessengerBus =
/*#__PURE__*/
function () {
  function MessengerBus() {
    _classCallCheck(this, MessengerBus);

    this.messengers = {};
  }

  _createClass(MessengerBus, [{
    key: "get",
    value: function get(e) {
      if (!this.messengers[e]) {
        this.messengers[e] = new Messenger();
      }

      return this.messengers[e];
    }
  }, {
    key: "on",
    value: function on(e, fn) {
      this.get(e).on(fn);
    }
  }, {
    key: "off",
    value: function off(e, fn) {
      this.get(e).off(fn);
    }
  }, {
    key: "fire",
    value: function fire(e, args, scope) {
      return this.get(e).fire(args, scope);
    }
  }]);

  return MessengerBus;
}();



/***/ }),

/***/ "./src/utility/utils.js":
/*!******************************!*\
  !*** ./src/utility/utils.js ***!
  \******************************/
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return orderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByDescending", function() { return orderByDescending; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  } else if (isObject(obj)) {
    for (var p in obj) {
      if (ignoreOwn || obj.hasOwnProperty(p)) {
        if (action(p, obj[p])) {
          return;
        }
      }
    }
  } else {
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
  } else if (isObject(obj)) {
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (action(p, obj[p])) {
          return true;
        }
      }
    }
  } else {
    return action(obj, obj);
  }
}

function copy() {
  var deep = false,
      objIndex = 0,
      obj = arguments[objIndex],
      filter;

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
  var deep = false,
      index = 0,
      target = arguments[index];

  if (isBoolean(target)) {
    deep = target;
    target = arguments[++index];
  }

  if (deep) {
    Array.prototype.slice.call(arguments, index + 1).forEach(function (item) {
      deepMerge(target, item);
    });
  } else {
    Array.prototype.slice.call(arguments, index + 1).forEach(function (item) {
      plainMerge(target, item);
    });
  }
}

function merge() {
  var deep = false,
      index = 0,
      target = {};

  if (isBoolean(arguments[index])) {
    deep = arguments[index];
    index++;
  }

  if (deep) {
    Array.prototype.slice.call(arguments, index).forEach(function (item) {
      deepMerge(target, item);
    });
  } else {
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
    } else {
      if (isObject(target[key]) && isObject(value)) {
        deepMerge(target[key], value);
      } else {
        target[key] = value;
      }
    }
  });
}

function object(o) {
  function F() {}

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

  subType["super"] = function () {
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
  return value !== null && _typeof(value) === 'object';
}

function isBlankObject(value) {
  return value !== null && _typeof(value) === 'object' && !getPrototypeOf(value);
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
  var same = obj1 === obj2;

  if (!same) {
    if (isArray(obj1) && isArray(obj2)) {
      if (obj1.length === obj2.length) {
        same = !some(obj1, function (index, value) {
          return !isSame(value, obj2[index]);
        });
      }
    } else if (isObject(obj1) && isObject(obj2) && getPrototypeOf(obj1) === getPrototypeOf(obj2)) {
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
    return item === str || ignoreCase && lowercase(item) === lowercase(str);
  });
}

function hasProperty(obj, key, ignoreCase) {
  if (!obj) {
    return false;
  }

  var key2,
      hasProp = true,
      keys = key.split('.'),
      target = obj;

  while (hasProp && keys.length > 0) {
    key2 = keys.shift();
    hasProp = false;
    forEach(target, function (key3, value3) {
      hasProp = key3 === key2 || ignoreCase && lowercase(key3) === lowercase(key2);

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

  var key2,
      hasProp = true,
      keys = key.split('.'),
      target = obj;

  while (hasProp && keys.length > 0) {
    key2 = keys.shift();
    hasProp = false;
    forEach(target, function (key3, value3) {
      hasProp = key3 === key2 || ignoreCase && lowercase(key3) === lowercase(key2);

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

  var key2,
      hasProp = true,
      keys = key.split('.'),
      target = obj;

  while (hasProp && keys.length > 0) {
    key2 = keys.shift();

    if (keys.length === 0) {
      target[key2] = value;
    } else {
      hasProp = false;
      forEach(target, function (key3, value3) {
        hasProp = key3 === key2 || ignoreCase && lowercase(key3) === lowercase(key2);

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

function orderBy(arr, getter) {
  var getValue = function getValue(item) {
    if (getter == null) {
      return item;
    }

    return getter(item);
  };

  return arr.sort(function (a, b) {
    if (getValue(a) < getValue(b)) {
      return -1;
    }

    if (getValue(a) > getValue(b)) {
      return 1;
    }

    return 0;
  });
}

function orderByDescending(arr, getter) {
  var getValue = function getValue(item) {
    if (getter == null) {
      return item;
    }

    return getter(item);
  };

  return arr.sort(function (a, b) {
    if (getValue(a) < getValue(b)) {
      return 1;
    }

    if (getValue(a) > getValue(b)) {
      return -1;
    }

    return 0;
  });
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
/* harmony import */ var _core_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/observer */ "./src/core/observer.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Component =
/*#__PURE__*/
function () {
  _createClass(Component, [{
    key: "$proxy",
    get: function get() {
      return this.toProxy();
    }
  }]);

  function Component(meta) {
    _classCallCheck(this, Component);

    Component.construct.call(this, meta);
  }

  _createClass(Component, [{
    key: "$hooks",
    value: function $hooks() {
      return {
        beforeAttrChange: '',
        afterAttrChange: '',
        onInit: '',
        afterViewMount: '',
        onDestroy: ''
      };
    }
  }, {
    key: "$getMeta",
    value: function $getMeta() {
      return this.$$meta || {};
    }
  }, {
    key: "$setMeta",
    value: function $setMeta(value) {
      this.$$meta = value;
    }
  }, {
    key: "$bindNode",
    value: function $bindNode(node) {
      this.$$element = node;
    }
  }, {
    key: "$hasAttr",
    value: function $hasAttr(prop) {
      return _utility_utils__WEBPACK_IMPORTED_MODULE_1__["hasProperty"](this, prop, true);
    }
  }, {
    key: "$initAttr",
    value: function $initAttr(prop, value) {
      var oldValue = _utility_utils__WEBPACK_IMPORTED_MODULE_1__["getProperty"](this, prop, true);

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.beforeAttrChange)) {
        this.beforeAttrChange.call(this, prop, value, oldValue);
      }

      _utility_utils__WEBPACK_IMPORTED_MODULE_1__["setProperty"](this, prop, value, true);

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.afterAttrChange)) {
        this.afterAttrChange.call(this, prop, value, oldValue);
      }
    }
  }, {
    key: "$initAttrDone",
    value: function $initAttrDone() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.onInit)) {
        this.onInit.call(this);
      }
    }
  }, {
    key: "$setAttr",
    value: function $setAttr(prop, value) {
      var oldValue = _utility_utils__WEBPACK_IMPORTED_MODULE_1__["getProperty"](this, prop, true);

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.beforeAttrChange)) {
        this.beforeAttrChange.call(this, prop, value, oldValue);
      }

      _utility_utils__WEBPACK_IMPORTED_MODULE_1__["setProperty"](this.$proxy, prop, value, true);

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.afterAttrChange)) {
        this.afterAttrChange.call(this, prop, value, oldValue);
      }
    }
  }, {
    key: "$listen",
    value: function $listen(e, fn) {
      var messenger = _utility_utils__WEBPACK_IMPORTED_MODULE_1__["getProperty"](this, e, true);

      if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isMessenger"])(messenger)) {
        messenger.on(fn);
        return;
      }

      throw new Error(e + ' is not a event');
    }
  }, {
    key: "$getTemplate",
    value: function $getTemplate(sync) {
      var meta = this.$getMeta();

      if (sync) {
        return meta.template || '';
      }

      return new Promise(function (resolve) {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](meta.template)) {
          resolve(meta.template);
        } else if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](meta.templateUrl)) {
          _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].service('$templateCache').getTplByUrl(meta.templateUrl).then(function (tpl) {
            resolve(tpl);
          });
        } else {
          resolve('');
        }
      });
    }
  }, {
    key: "$using",
    value: function $using(name) {
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
  }, {
    key: "$makeCompileOptions",
    value: function $makeCompileOptions() {
      var self = this;
      return {
        getEmbedTpl: function getEmbedTpl() {
          return self.$$element.getInnerTpl();
        },
        containsComponent: function containsComponent(name) {
          return _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].containsComponent(self.$using(name));
        },
        createComponent: function createComponent(name) {
          return _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].createComponent(self.$using(name));
        },
        containsDirective: function containsDirective(name) {
          return _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].containsDirective(self.$using(name));
        },
        createDirective: function createDirective(name) {
          return _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].createDirective(self.$using(name));
        }
      };
    }
  }, {
    key: "$hasView",
    value: function $hasView() {
      return _utility_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"](this.$$childElements);
    }
  }, {
    key: "$showView",
    value: function $showView() {
      var fragment = document.createDocumentFragment();
      this.$$childElements.forEach(function (child) {
        fragment.appendChild(child.getHtmlElement());
      });
      return fragment;
    }
  }, {
    key: "$clearView",
    value: function $clearView() {
      if (!this.$hasView()) {
        return;
      }

      this.$$childElements.forEach(function (child) {
        child.destroy();
      });
      this.$$childElements = null;
    }
  }, {
    key: "$render",
    value: function $render(sync) {
      var self = this,
          fragment = null;

      if (sync) {
        if (this.$hasView()) {
          fragment = this.$showView();
        } else {
          fragment = Object(_parser__WEBPACK_IMPORTED_MODULE_4__["compile"])(this.$getTemplate(sync), this.$makeCompileOptions())(this);
        }

        return fragment;
      }

      return new Promise(function (resolve) {
        if (self.$hasView()) {
          resolve(self.$showView());
        } else {
          self.$getTemplate().then(function (html) {
            fragment = Object(_parser__WEBPACK_IMPORTED_MODULE_4__["compile"])(html, self.$makeCompileOptions())(self);
            resolve(fragment);
          });
        }
      });
    }
  }, {
    key: "$refresh",
    value: function $refresh(sync) {
      this.$clearView();
      return this.$render(sync);
    }
  }, {
    key: "$mount",
    value: function $mount(selectorOrElement, options) {
      var self = this,
          element,
          options = options || {};

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](selectorOrElement)) {
        element = document.querySelector(selectorOrElement);
      } else {
        element = selectorOrElement;
      }

      if (!options.append) {
        _utility_ele_utils__WEBPACK_IMPORTED_MODULE_2__["clearChildNodes"](element);
      }

      if (options.sync) {
        element.appendChild(this.$render(options.sync));
        self.$afterViewMount();
      } else {
        this.$render(options.sync).then(function (ele) {
          element.appendChild(ele);
          self.$afterViewMount();
        });
      }
    }
  }, {
    key: "$unmount",
    value: function $unmount() {
      if (this.$$element != null) {
        this.$$element.$remove();
        this.$$element.removeHtmlElement();
      } else if (this.$hasView()) {
        this.$$childElements.forEach(function (child) {
          child.removeHtmlElement();
        });
      }

      if (this.$$parentComponent != null) {
        this.$$parentComponent.$removeChildCmp(this);
        this.$$parentComponent = null;
      }
    }
  }, {
    key: "$afterViewMount",
    value: function $afterViewMount() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.afterViewMount)) {
        this.afterViewMount.call(this);
      }
    }
  }, {
    key: "$detect",
    value: function $detect() {
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
  }, {
    key: "$validate",
    value: function $validate() {
      var obj,
          prop,
          action,
          self = this;

      if (arguments.length === 2) {
        obj = this;
        prop = arguments[0];
        action = arguments[1];
      } else if (arguments.length === 3) {
        obj = arguments[0];
        prop = arguments[1];
        action = arguments[2];
      } else {
        throw new Error('arguments error');
      }

      return this.$$observer.validate(obj, prop, action);
    }
  }, {
    key: "$watch",
    value: function $watch() {
      var obj,
          prop,
          action,
          self = this;

      if (arguments.length === 2) {
        obj = this;
        prop = arguments[0];
        action = arguments[1];
      } else if (arguments.length === 3) {
        obj = arguments[0];
        prop = arguments[1];
        action = arguments[2];
      } else {
        throw new Error('arguments error');
      }

      return this.$$observer.watch(obj, prop, action);
    }
  }, {
    key: "$eval",
    value: function $eval(exp) {
      return Object(_parser__WEBPACK_IMPORTED_MODULE_4__["compute"])(exp, this);
    }
  }, {
    key: "$getParentCmp",
    value: function $getParentCmp() {
      return this.$$parentComponent;
    }
  }, {
    key: "$removeChildCmp",
    value: function $removeChildCmp(childCmp) {
      var index = this.$$childComponents.indexOf(childCmp);

      if (index !== -1) {
        this.$$childComponents.splice(index, 1);
        childCmp.$$parentComponent = null;
      }
    }
  }, {
    key: "$createChildCmp",
    value: function $createChildCmp(childCmp) {
      var component = _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].createComponent(childCmp);
      this.$$childComponents.push(component);
      component.$$parentComponent = this;
      return component;
    }
  }, {
    key: "$inheritCmp",
    value: function $inheritCmp(parentCmp) {
      var self = this;
      Object.setPrototypeOf(self, _utility_utils__WEBPACK_IMPORTED_MODULE_1__["object"](parentCmp)); // todo - resolve issue calling parent component's lifecycle hooks

      _utility_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"](self.$hooks(), function (hook) {
        if (self.hasOwnProperty(hook) == null) {
          self[hook] = function () {};
        }
      });
      this.$$disposers.push(parentCmp.$validate('*', function (prop, args) {
        self.$$observer.fireChanging(self, prop, args);
      }));
      this.$$disposers.push(parentCmp.$watch('*', function (prop, args) {
        self.$$observer.fireChanged(self, prop, args);
      }));
    }
  }, {
    key: "$dispose",
    value: function $dispose(destroyFromElement) {
      // remove virtual node first in case it triggers parent component destroy
      this.$unmount();

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.onDestroy)) {
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
  }, {
    key: "$destroy",
    value: function $destroy() {
      this.$dispose(); // destroy virtual node in the end because it may binds logic about destroy

      if (this.$$element != null) {
        this.$$element.dispose(true);
        this.$$element = null;
      }
    }
  }], [{
    key: "construct",
    value: function construct(meta) {
      this.$$element = null;
      this.$$childElements = null;
      this.$$parentComponent = null;
      this.$$childComponents = [];
      this.$$childDirectives = [];
      this.$$detectTimeout = null;
      this.$$observer = new _core_observer__WEBPACK_IMPORTED_MODULE_3__["Observer"]();
      this.$$disposers = [];

      if (meta != null) {
        this.$setMeta(meta);
      }

      _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].injectServices(this);
    }
  }]);

  return Component;
}();

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Directive =
/*#__PURE__*/
function () {
  _createClass(Directive, [{
    key: "$htmlElement",
    get: function get() {
      if (this.$element != null) {
        return this.$element.htmlElement;
      }

      return null;
    }
  }, {
    key: "$component",
    get: function get() {
      if (this.$element != null) {
        return this.$element.ownerComponent;
      }

      return null;
    }
  }, {
    key: "$scope",
    get: function get() {
      if (this.$binding != null) {
        return this.$binding.scope;
      }

      return null;
    }
  }]);

  function Directive() {
    _classCallCheck(this, Directive);

    Directive.construct.call(this);
  }

  _createClass(Directive, [{
    key: "$hooks",
    value: function $hooks() {
      return {
        onInit: '',
        onCompile: '',
        onInsert: '',
        onDetect: '',
        onUpdate: '',
        onDestroy: ''
      };
    }
  }, {
    key: "$getMeta",
    value: function $getMeta() {
      return this.$$meta || {};
    }
  }, {
    key: "$setMeta",
    value: function $setMeta(value) {
      this.$$meta = value;
    }
  }, {
    key: "$bindNode",
    value: function $bindNode(node) {
      this.$attr = node;
      this.$element = node.ownerElement;
    }
  }, {
    key: "$setBinding",
    value: function $setBinding(binding) {
      this.$binding = binding;
    }
  }, {
    key: "$compile",
    value: function $compile(options) {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onCompile)) {
        this.onCompile.call(this, options);
      }
    }
  }, {
    key: "$insert",
    value: function $insert() {
      var self = this;

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onInsert)) {
        this.onInsert.call(this);
      }

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onLoad) || _utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onUnload)) {
        this.$requestAnimation();
      }
    }
  }, {
    key: "$isLoaded",
    value: function $isLoaded() {
      return this.$htmlElement.clientWidth > 0 && this.$htmlElement.clientHeight > 0;
    }
  }, {
    key: "$requestAnimation",
    value: function $requestAnimation() {
      var self = this;

      function query() {
        if (self.$$cancelAnimationToken) {
          return;
        }

        if (self.$isLoaded()) {
          if (!self.$elementloaded) {
            self.$elementloaded = true;

            if (self.onLoad != null) {
              self.onLoad.call(self);
            }
          }
        } else {
          if (self.$elementloaded) {
            self.$elementloaded = false;

            if (self.onUnload != null) {
              self.onUnload.call(self);
            }
          }
        }

        requestAnimationFrame(query);
      }

      requestAnimationFrame(query);
    }
  }, {
    key: "$cancelAnimation",
    value: function $cancelAnimation() {
      this.$$cancelAnimationToken = true;
    }
  }, {
    key: "$detect",
    value: function $detect() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDetect)) {
        return this.onDetect.call(this);
      }

      if (this.$binding.detect()) {
        this.$update();
      }
    }
  }, {
    key: "$update",
    value: function $update() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onUpdate)) {
        this.onUpdate.call(this);
      }
    }
  }, {
    key: "$dispose",
    value: function $dispose(destroyFromAttr) {
      var self = this;
      this.$cancelAnimation();

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
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
  }, {
    key: "$destroy",
    value: function $destroy() {
      this.$dispose();

      if (this.$attr != null) {
        this.$attr.dispose(true);
        this.$attr = null;
        this.$element = null;
      }
    }
  }], [{
    key: "construct",
    value: function construct() {
      // private properties
      this.$$disposers = [];
      this.$$cancelAnimationToken = false; // private properties
      // public properties

      this.$output = false;
      this.$binding = null;
      this.$attr = null;
      this.$element = null;
      this.$priority = 0;
      this.$elementloaded = false; // public properties

      _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this);
    }
  }]);

  return Directive;
}();

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Filter =
/*#__PURE__*/
function () {
  function Filter() {
    _classCallCheck(this, Filter);

    Filter.construct.call(this);
  }

  _createClass(Filter, [{
    key: "$hooks",
    value: function $hooks() {
      return {
        onInit: '',
        onDestroy: ''
      };
    }
  }, {
    key: "$getMeta",
    value: function $getMeta() {
      return this.$$meta || {};
    }
  }, {
    key: "$setMeta",
    value: function $setMeta(value) {
      this.$$meta = value;
    }
  }, {
    key: "$execute",
    value: function $execute() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onExecute)) {
        return this.onExecute.apply(this, arguments);
      }
    }
  }, {
    key: "$destroy",
    value: function $destroy() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
        this.onDestroy.call(this);
      }
    }
  }], [{
    key: "construct",
    value: function construct() {
      _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this);
    }
  }]);

  return Filter;
}();

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "service", function() { return _service; });
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
    component: function component(name, def) {
      def.namespace = ns;
      return _component(name, def);
    },
    directive: function directive(name, def) {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
        def = {
          methods: {
            onInsert: def,
            onUpdate: def
          }
        };
      }

      def.namespace = ns;
      return _directive(name, def);
    },
    service: function service(name, def) {
      def.namespace = ns;
      return _service(name, def);
    },
    filter: function filter(name, def) {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
        def = {
          methods: {
            onExecute: def
          }
        };
      }

      def.namespace = ns;
      return _filter(name, def);
    }
  };
}

function _component(name, def) {
  return _injector__WEBPACK_IMPORTED_MODULE_2__["injector"].buildConstructor(name, def, {
    contractType: _injector__WEBPACK_IMPORTED_MODULE_2__["typeConst"].component,
    superClass: makeConstructor(_component__WEBPACK_IMPORTED_MODULE_3__["Component"])
  });
}

function _directive(name, def) {
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

function _filter(name, def) {
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

function _service(name, def) {
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
  } else {
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var typeConst = {
  filter: 'filter',
  service: 'service',
  component: 'component',
  directive: 'directive'
};
var namePattern = /^[a-z_\$][\w\$-]*/i;

var Injector =
/*#__PURE__*/
function () {
  function Injector() {
    _classCallCheck(this, Injector);

    this.container = {};
    this.waitingToExtends = {};
    this.insContainer = {};
  }

  _createClass(Injector, [{
    key: "getMapping",
    value: function getMapping(contractType) {
      if (!this.container[contractType]) {
        this.container[contractType] = {};
      }

      return this.container[contractType];
    }
  }, {
    key: "getInstances",
    value: function getInstances(contractType) {
      if (!this.insContainer[contractType]) {
        this.insContainer[contractType] = [];
      }

      return this.insContainer[contractType];
    }
  }, {
    key: "register",
    value: function register(contractType, selector, constructor) {
      if (selector.indexOf('.') !== -1) {
        throw new Error('Illegal character "."');
      }

      var mapping = this.getMapping(contractType);

      if (mapping[selector] == null) {
        mapping[selector] = [];
      } else {
        var matches = mapping[selector].filter(function (item) {
          return item.prototype.$$meta.namespace === constructor.prototype.$$meta.namespace;
        });

        if (matches.length > 0) {
          throw new Error(selector + ' is exist under namespace ' + matches[0].prototype.$$meta.namespace);
        }
      }

      mapping[selector].push(constructor);
    }
  }, {
    key: "registerComponent",
    value: function registerComponent(selector, constructor) {
      this.register(typeConst.component, selector, constructor);
    }
  }, {
    key: "registerDirective",
    value: function registerDirective(selector, constructor) {
      this.register(typeConst.directive, selector, constructor);
    }
  }, {
    key: "contains",
    value: function contains(contractType, selector, ignoreCase) {
      var constructors,
          mapping = this.getMapping(contractType);
      var segments = selector.split('.');
      var namespace = '';

      if (segments.length > 1) {
        selector = segments.pop();
        namespace = segments.join('.');
      }

      if (ignoreCase) {
        constructors = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](mapping, selector, true);
      } else {
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
  }, {
    key: "containsComponent",
    value: function containsComponent(selector) {
      return this.contains(typeConst.component, selector, true);
    }
  }, {
    key: "containsDirective",
    value: function containsDirective(selector) {
      return this.contains(typeConst.directive, selector, true);
    }
  }, {
    key: "get",
    value: function get(contractType, selector, ignoreCase) {
      var constructors,
          mapping = this.getMapping(contractType);
      var segments = selector.split('.');
      var namespace = '';

      if (segments.length > 1) {
        selector = segments.pop();
        namespace = segments.join('.');
      }

      if (ignoreCase) {
        constructors = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](mapping, selector, true);
      } else {
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
  }, {
    key: "getComponent",
    value: function getComponent(selector) {
      return this.get(typeConst.component, selector);
    }
  }, {
    key: "getDirective",
    value: function getDirective(selector) {
      return this.get(typeConst.directive, selector);
    }
  }, {
    key: "getFilter",
    value: function getFilter(selector) {
      return this.get(typeConst.filter, selector);
    }
  }, {
    key: "getService",
    value: function getService(selector) {
      return this.get(typeConst.service, selector);
    }
  }, {
    key: "create",
    value: function create(contractType, selector) {
      var constructor = this.get(contractType, selector),
          instance;

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
  }, {
    key: "createComponent",
    value: function createComponent(constructor) {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getComponent(constructor);
      }

      return new constructor();
    }
  }, {
    key: "createDirective",
    value: function createDirective(constructor) {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getDirective(constructor);
      }

      return new constructor();
    }
  }, {
    key: "createFilter",
    value: function createFilter(constructor) {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getFilter(constructor);
      }

      return new constructor();
    }
  }, {
    key: "createService",
    value: function createService(constructor) {
      var instance,
          services = this.getInstances(typeConst.service);

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
  }, {
    key: "service",
    value: function service(selector) {
      return this.createService(selector);
    }
  }, {
    key: "getWaitingToExtends",
    value: function getWaitingToExtends(contractType) {
      if (!this.waitingToExtends[contractType]) {
        this.waitingToExtends[contractType] = [];
      }

      return this.waitingToExtends[contractType];
    }
  }, {
    key: "setWaitingToExtends",
    value: function setWaitingToExtends(contractType, value) {
      this.waitingToExtends[contractType] = value;
    }
  }, {
    key: "checkSelector",
    value: function checkSelector(selector, contractType) {
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
      } else {
        throw new Error(selector + 'is not a valid name');
      }
    }
  }, {
    key: "buildConstructor",
    value: function buildConstructor(selector, meta, options) {
      var self = this,
          constructor,
          constructorName = this.checkSelector(selector, options.contractType),
          waitingToExtends = self.getWaitingToExtends(options.contractType),
          onConstruct = function onConstruct() {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](constructor["super"])) {
          constructor["super"].call(this);
        }

        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](meta.construct)) {
          meta.construct.call(this, _utility_message__WEBPACK_IMPORTED_MODULE_1__["Messenger"]);
        }
      };

      constructor = new Function('onConstruct', '"use strict";return function ' + constructorName + '(){onConstruct.call(this);};')(onConstruct);

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](options.superClass)) {
        _utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](constructor, options.superClass);
      }

      meta.selector = selector; // apply properties and methods

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](meta["extends"])) {
        if (injector.contains(options.contractType, meta["extends"])) {
          var superOne = injector.get(options.contractType, meta["extends"]);
          remainConstructor(selector, meta, constructor, superOne);
        } else {
          waitingToExtends.push({
            superName: meta["extends"],
            callback: function callback(superOne) {
              remainConstructor(selector, meta, constructor, superOne);
            }
          });
        }
      } else {
        remainConstructor(selector, meta, constructor);
      }

      function extendMeta(meta, superOne) {
        if (superOne.prototype.$$meta && superOne.prototype.$$meta["protected"]) {
          throw new Error(options.contractType + ': ' + meta["extends"] + ' is protected, it is not allowed to extend!');
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
        } // create methods


        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](meta.methods)) {
          _utility_utils__WEBPACK_IMPORTED_MODULE_0__["extend"](constructor.prototype, meta.methods);
        }

        self.registerConstructor(options.contractType, selector, constructor, meta); // check if there is any component extends current component

        var waitingToExtends2 = [],
            fullSelector = meta.namespace + '.' + selector;
        waitingToExtends.forEach(function (item) {
          if (item.superName === fullSelector) {
            item.callback.call(null, constructor);
          } else {
            waitingToExtends2.push(item);
          }
        });
        self.setWaitingToExtends(options.contractType, waitingToExtends2);
      }

      return constructor;
    }
  }, {
    key: "registerConstructor",
    value: function registerConstructor(contractType, selector, constructor, meta) {
      var superMeta = constructor.prototype.$$meta;

      if (superMeta && superMeta["protected"]) {
        throw new Error(contractType + ': ' + meta["extends"] + ' is protected, it is not allowed to extend!');
      }

      var copy = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["copy"](true, superMeta, function (obj, key) {
        return !(obj === superMeta && (key === 'construct' || key === 'methods'));
      });
      meta = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["merge"](true, copy, meta);
      constructor.prototype.$$meta = meta; // register component if it is global

      if (!meta.local) {
        injector.register(contractType, selector, constructor);
      }
    }
  }, {
    key: "injectServices",
    value: function injectServices(instance) {
      var self = this,
          meta = instance.$getMeta();

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](meta.inject)) {
        _utility_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](meta.inject, function (key, value) {
          Object.defineProperty(instance, key, {
            enumerable: false,
            configurable: false,
            get: function get() {
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
  }]);

  return Injector;
}();

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Service =
/*#__PURE__*/
function () {
  function Service() {
    _classCallCheck(this, Service);

    Service.construct.call(this);
  }

  _createClass(Service, [{
    key: "$hooks",
    value: function $hooks() {
      return {
        onInit: '',
        onDestroy: ''
      };
    }
  }, {
    key: "$getMeta",
    value: function $getMeta() {
      return this.$$meta || {};
    }
  }, {
    key: "$setMeta",
    value: function $setMeta(value) {
      this.$$meta = value;
    }
  }, {
    key: "$destroy",
    value: function $destroy() {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
        this.onDestroy.call(this);
      }
    }
  }], [{
    key: "construct",
    value: function construct() {
      _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this);
    }
  }]);

  return Service;
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2NkYXRhc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZG9jdHlwZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2ZyYWdtZW50LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9oYW5kbGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL3Byb3h5LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS90ZXh0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RlY29yYXRvci9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLWNtcC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2VtYmVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2hpZGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvaWYuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvbmFtZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc2hvdy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9jaGVja2VkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3JlYWRvbmx5LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3N0YXRlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC13aGVuLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9odG1sLWxleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2h0bWwtcGFyc2VyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2xleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL251bGwtb2JqZWN0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL3BhcnNlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3NlcnZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL21vZGVsLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL3RlbXBsYXRlLWNhY2hlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdWkvY29tcG9uZW50L2Zvcm0uaHRtbCIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3VpL2NvbXBvbmVudC9mb3JtLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdWkvY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdWkvY29tcG9uZW50L21vZGFsLmh0bWwiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91aS9jb21wb25lbnQvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91aS9jb21wb25lbnQvcHJvZ3Jlc3MuaHRtbCIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3VpL2NvbXBvbmVudC9wcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3VpL2RpcmVjdGl2ZS9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3VpL2RpcmVjdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3VpL2RpcmVjdGl2ZS9tb2RhbC1mYWRlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdWkvZGlyZWN0aXZlL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91aS9zZXJ2aWNlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdWkvc2VydmljZS9tb2RhbC1zZXJ2aWNlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9lbGUtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9tZXNzYWdlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS91dGlscy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvY29tcG9uZW50LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2luamVjdG9yLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9zZXJ2aWNlLmpzIiwid2VicGFjazovL3NpbmUvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImF4aW9zXCIsXCJjb21tb25qczJcIjpcImF4aW9zXCIsXCJhbWRcIjpcImF4aW9zXCIsXCJyb290XCI6XCJheGlvc1wifSJdLCJuYW1lcyI6WyJldmVudFRleHQiLCJkb21FdmVudHMiLCJzcGxpdCIsIkF0dHJOb2RlIiwibmFtZSIsInZhbHVlIiwiVk5vZGVUeXBlIiwiYXR0cmlidXRlIiwicXVvdGUiLCJvcmlnaW4iLCJpc0V2ZW50IiwiaXNCaW5kaW5nIiwiaXNEb21FdmVudCIsImlzRGlyZWN0aXZlIiwiZGlyZWN0aXZlIiwib3duZXJFbGVtZW50Iiwib3duZXJDb21wb25lbnQiLCJodG1sRWxlbWVudCIsImJpbmRpbmciLCJCaW5kaW5nIiwicHJpb3JpdHkiLCJrZXkiLCJub2RlVmFsdWUiLCJjb21waWxlIiwib3B0aW9ucyIsIm5vZGVOYW1lIiwic3RhcnRzV2l0aCIsInN1YnN0ciIsInV0aWxzIiwic2V0T3V0cHV0IiwiYmluZCIsImNvbnRhaW5zRGlyZWN0aXZlIiwiY3JlYXRlRGlyZWN0aXZlIiwiJGJpbmROb2RlIiwiJG91dHB1dCIsIiRwcmlvcml0eSIsIkVycm9yIiwiJGNvbXBpbGUiLCJzY29wZSIsInNlbGYiLCJzZXRTY29wZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29tcHV0ZSIsImxvY2FscyIsIiRldmVudCIsIiRhcmdzIiwiJGVsZW1lbnQiLCIkbGlzdGVuIiwiYXJncyIsIiQkY2hpbGREaXJlY3RpdmVzIiwicHVzaCIsIiRzZXRCaW5kaW5nIiwiJGhhc0F0dHIiLCIkaW5pdEF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJvbmNoYW5nZSIsInVwZGF0ZSIsImhhc0NoYW5nZSIsIiRkZXRlY3QiLCJkZXRlY3QiLCIkdXBkYXRlIiwiJHNldEF0dHIiLCIkaW5zZXJ0IiwiJCRtZXRhIiwic2VsZWN0b3IiLCJpc0Zyb21EaXJlY3RpdmUiLCJkZXN0cm95IiwiJGRlc3Ryb3kiLCIkZGlzcG9zZSIsImRpc3Bvc2UiLCJWTm9kZSIsImVsZW1lbnQiLCJ0ZXh0IiwiY2RhdGFTZWN0aW9uIiwiZW50aXR5UmVmZXJlbmNlIiwiZW50aXR5IiwicHJvY2Vzc2luZ0luc3RydWN0aW9uIiwiY29tbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRUeXBlIiwiZG9jdW1lbnRGcmFnbWVudCIsIm5vdGF0aW9uIiwiY29ubmVjdGlvbiIsInR5cGUiLCJub2RlVHlwZSIsImNoaWxkTm9kZXMiLCJwYXJlbnROb2RlIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwib3duZXJEb2N1bWVudCIsImNoaWxkIiwibGVuZ3RoIiwiZm9yRWFjaCIsImluZGV4IiwiJGJ1aWxkU2libGluZyIsInJlbW92ZUNoaWxkIiwiJHJlbW92ZSIsIiRjbGVhclBhcmVudEFuZFNpYmxpbmciLCJjb21waWxlT3B0aW9ucyIsInJlZkNoaWxkIiwibmV3Q2hpbGQiLCJpbmRleE9mIiwic3BsaWNlIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJub3RpZnlDb21waWxlZCIsIm1hcCIsImxpbmsiLCJub3RpZnlMaW5rZWQiLCJFeHBOb2RlIiwib2xkVmFsdWUiLCJpc0V4cCIsInNlZ21lbnRzIiwicmlnaHRTdHIiLCJvdXRwdXQiLCJ1bndhdGNoZXMiLCJjaGFuZ2UiLCJNZXNzZW5nZXIiLCJleHAiLCJsZWZ0U3RyIiwicGF0dGVybiIsImxhc3RJbmRleCIsIm1hdGNoIiwiZXhlYyIsInN1YnN0cmluZyIsInNlZ21lbnQiLCJhc3NpZ25tZW50IiwicGFyc2VBc3NpZ25tZW50Iiwib2JqIiwicHJvcCIsInRvUHJveHkiLCIkd2F0Y2giLCJkZWZlciIsImZpcmUiLCJhY3Rpb24iLCJjYW5jZWxUaW1lb3V0IiwidGltZW91dElkIiwic2V0VGltZW91dCIsImNhbGwiLCJjbGVhclRpbWVvdXQiLCJsaXN0ZW4iLCJvbiIsInVud2F0Y2giLCJDRGF0YVNlY3Rpb25Ob2RlIiwiQ29tbWVudE5vZGUiLCJjcmVhdGVDb21tZW50IiwiQ29ubmVjdGlvbk5vZGUiLCJsaW5rZXIiLCJvbkluc2VydCIsIm9uRGV0ZWN0Iiwib25IYXNDaGFuZ2UiLCJvblVwZGF0ZSIsIm9uRGVzdHJveSIsIkRvY3VtZW50VHlwZU5vZGUiLCJEb2N1bWVudE5vZGUiLCJFbGVtZW50Tm9kZSIsImF0dHJpYnV0ZXMiLCJjb21wb25lbnQiLCJzZWxmQ2xvc2VkIiwiaXNDb21wb25lbnQiLCJhdHRyIiwidGFyZ2V0IiwibWF0Y2hlcyIsImZpbHRlciIsImJlbG9uZ1RvIiwic2V0VmFsdWUiLCJhdHRyVHBsIiwiY2hpbGRUcGwiLCJnZXRPdXRlclRwbCIsInRwbCIsInBhcnNlIiwidm5vZGUiLCJjbGVhckNoaWxkTm9kZXMiLCJyZXN1bHQiLCJzb21lIiwiZ2V0RGlyZWN0aXZlIiwib3JkZXJCeSIsIml0ZW0iLCJjb250YWluc0NvbXBvbmVudCIsImNyZWF0ZUVsZW1lbnQiLCIkY3JlYXRlQ2hpbGRDbXAiLCIkaW5pdEF0dHJEb25lIiwiJG1vdW50IiwiaXNGcm9tQ29tcG9uZW50IiwicmVtb3ZlSHRtbEVsZW1lbnQiLCJlbGVVdGlscyIsIkRvY3VtZW50RnJhZ21lbnROb2RlIiwicHJvcENoYW5naW5nTXNnIiwicHJvcENoYW5nZWRNc2ciLCJ0YXJnZXRLZXkiLCJnZXRUYXJnZXQiLCJpc09iamVjdCIsIkdldFByb3BlcnR5SGFuZGxlciIsImRlZXBQcm94eSIsInZhcmlhYmxlcyIsImZ1bGxUYXJnZXRLZXkiLCJmdWxsS2V5IiwiUHJveHkiLCJleGlzdGVkIiwiU2V0UHJvcGVydHlIYW5kbGVyIiwiaXNBcnJheSIsInZhbGlkYXRpb24iLCJ2YWxpZCIsImFwcGx5IiwibmV3VmFsdWUiLCJkYXRhIiwiQWNjZXNzUHJvcGVydHlIYW5kbGVyIiwiUHJvcGVydHlPYnNlcnZlciIsInBsYWluTWFwIiwiTWFwIiwicmVnZXhNYXAiLCJpc1JlZ0V4cCIsImhhcyIsInNldCIsImJlZm9yZUNoYW5nZWQiLCJnZXQiLCJvZmYiLCJhY3Rpb25zIiwidGVzdCIsImNsZWFyIiwiT2JqZWN0T2JzZXJ2ZXIiLCJvbmNoYW5naW5nIiwiZmlyZUNoYW5naW5nIiwib25jaGFuZ2VkIiwiZmlyZUNoYW5nZWQiLCJvZmZDaGFuZ2UiLCJvYmpNYXAiLCJNZW1iZXJXYXRjaGVyIiwib2JzZXJ2ZXIiLCJpZCIsImNoYW5nZUtleSIsIm5ld1RhcmdldCIsInN0b3AiLCJEZXRlY3RvciIsInF1ZXVlIiwiZGlnZXN0IiwiY2xlYXJEZWZlciIsImRldGVjdG9yIiwiZXhlY3V0ZSIsIkV4cFdhdGNoZXIiLCJyZW1vdmUiLCJXYXRjaGVyIiwibWVtYmVycyIsImRpZ2VzdHMiLCJhc3QiLCJwYXJzZUV4cCIsImhhc0NDIiwiZGlydHlDaGVjayIsImNvbGxlY3RNZW1iZXJzIiwidXBkYXRlTWVtYmVyIiwic3RhcnREaWdlc3QiLCJtZW1iZXIiLCJzdGFydE1lbWJlciIsInN0YXJ0IiwibWVtYmVyV2F0Y2hlciIsIk9ic2VydmVyIiwid2F0Y2hlcnMiLCJ3YXRjaGVyIiwiY3JlYXRlV2F0Y2hlciIsInJlbW92ZVdhdGNoZXIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJUZXh0Tm9kZSIsInJlbmRlciIsImNyZWF0ZVRleHROb2RlIiwibWV0YSIsImluamVjdG9yIiwicmVnaXN0ZXJDb25zdHJ1Y3RvciIsInR5cGVDb25zdCIsInNlcnZpY2UiLCJCaW5kQ21wRGlyZWN0aXZlIiwibmFtZXNwYWNlIiwibmFtZURpciIsImNvbmZpZyIsInZpZXciLCIkYmluZGluZyIsIm9uSW5pdCIsIiRodG1sRWxlbWVudCIsInNldENtcCIsIkRpcmVjdGl2ZSIsIkJpbmREaXJlY3RpdmUiLCJpbm5lclRleHQiLCJFbWJlZERpcmVjdGl2ZSIsImVtYmVkVHBsIiwiZ2V0RW1iZWRUcGwiLCJzZXRJbm5lclRwbCIsIkhpZGVEaXJlY3RpdmUiLCJoaWRlIiwic3R5bGUiLCJkaXNwbGF5IiwiSWZEaXJlY3RpdmUiLCJodG1sQ29tbWVudCIsIk1vZGVsRGlyZWN0aXZlIiwiaW5qZWN0IiwiJHZpZXdWYWx1ZSIsIiRtb2RlbFZhbHVlIiwiJHBhcnNlcnMiLCIkZm9ybWF0dGVycyIsIiR2aWV3Q2hhbmdlTGlzdGVuZXJzIiwiJHZhbGlkYXRvcnMiLCIkZmVlZGJhY2siLCIkcHJpc3RpbmUiLCIkZGlydHkiLCIkdmFsaWQiLCIkaW52YWxpZCIsInNldFZpZXdWYWx1ZSIsIiRjb21wb25lbnQiLCJzZXRNb2RlbFZhbHVlIiwibmV3dmFsdWUiLCJ2aWV3VmFsdWUiLCJ2YWxpZGF0b3IiLCJmb3JtYXR0ZXIiLCJ1cGRhdGVDc3MiLCJ1cGRhdGVTdGF0ZSIsInNldERpcnR5IiwibGlzdGVuZXIiLCJtb2RlbFZhbHVlIiwicGFyc2VyIiwiYXNzaWduIiwiZWxlIiwiY3NzIiwiY3NzQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXJ0eSIsInByaXN0aW5lIiwiaW52YWxpZCIsInN0YXRlIiwiZmVlZGJhY2siLCJOYW1lRGlyZWN0aXZlIiwicHJveHkiLCIkc2NvcGUiLCJjbXAiLCJSZXBlYXREaXJlY3RpdmUiLCJpdGVtRXhwIiwiaXRlbXNFeHAiLCJpdGVtVGVtcGxhdGUiLCJkYXRhSXRlbXMiLCJjbXBJdGVtcyIsImhlYWRlciIsImZvb3RlciIsImFyZyIsIiRhdHRyIiwicmVtb3ZlQXR0cmlidXRlIiwiY3JlYXRlQ29ubmVjdGlvbiIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIml0ZW1zIiwiJGV2YWwiLCJzZXREYXRhSXRlbXMiLCJyZXBsYWNlQ2hpbGQiLCJjaGlsZFNjb3BlIiwiY21wSXRlbSIsImRhdGFJdGVtIiwiZmlsdGVycyIsIm5ld0NtcEl0ZW1zIiwiZ2V0Q21wSXRlbSIsIkNvbXBvbmVudCIsInRlbXBsYXRlIiwiJGluaGVyaXRDbXAiLCIkcmVuZGVyIiwicmVwZWF0SXRlbSIsIlNob3dEaXJlY3RpdmUiLCJzaG93IiwiQ2hlY2tlZERpcmVjdGl2ZSIsIlN0YXRlRGlyZWN0aXZlIiwiRGlzYWJsZWREaXJlY3RpdmUiLCJSZWFkb25seURpcmVjdGl2ZSIsIlNlbGVjdGVkRGlyZWN0aXZlIiwiYXR0ck5hbWUiLCJwZXJmb3JtIiwiaGFzQXR0cmlidXRlIiwiU3R5bGVEaXJlY3RpdmUiLCJzZXRTdHlsZSIsIlN3aXRjaERlZmF1bHREaXJlY3RpdmUiLCJpc01hdGNoIiwic3dpdGNoV2hlbkRpcnMiLCJ2RWxlIiwid2hlbkRpciIsImluaXRTd2l0Y2hXaGVuRGlycyIsImlzTWF0Y2hDaGFuZ2VkIiwiU3dpdGNoV2hlbkRpcmVjdGl2ZSIsInN3aXRjaERpciIsImluaXRTd2l0Y2hEaXIiLCJ2YWx1ZUNoYW5nZWQiLCJTd2l0Y2hEaXJlY3RpdmUiLCJIdG1sTGV4ZXIiLCJMZXhlciIsImlzVmFsaWRJZGVudGlmaWVyU3RhcnQiLCJjaCIsImlzVmFsaWRJZGVudGlmaWVyQ29udGludWUiLCJjcCIsImlzTnVtYmVyIiwiZXhwZWN0U3RyaW5nIiwic3RyIiwibnVtIiwicmVhZENvbW1lbnQiLCJiZWdpbiIsImVuZCIsInN0cmluZyIsInJhd1N0cmluZyIsImNoYXJBdCIsInRva2VucyIsInRocm93RXJyb3IiLCJyZWFkVGV4dCIsImNoMiIsInBlZWsiLCJpc0lkZW50aWZpZXJTdGFydCIsInRleHRUYWciLCJyZWFkVGFnIiwiY2xvc2luZyIsImRvY3R5cGUiLCJ0YWciLCJyZWFkSWRlbnQiLCJwZWVrTXVsdGljaGFyIiwicmVhZFN0cmluZyIsImlzV2hpdGVzcGFjZSIsImVxdWFsIiwibGV4IiwiYWxsb3dEb2NUeXBlIiwiY2gzIiwiSHRtbFBhcnNlciIsIlBhcnNlciIsImxleGVyIiwiZmFyZ21lbnQiLCJ0b2tlbiIsImN1cnJlbnQiLCIkcHVzaENoaWxkIiwibmV4dCIsImRvY1R5cGUiLCJpZGVudGlmaWVyIiwiYXR0cnMiLCJwIiwiJHB1c2hBdHRyaWJ1dGUiLCJjaGlsZEVsZW1lbnRzIiwiZWxlcyIsImNvbnN0YW50IiwicGFyc2VPcHRpb25zIiwiaXNJZGVudGlmaWVyQ29udGludWUiLCJsaXRlcmFscyIsInVuZGVmaW5lZCIsImh0bWwiLCJkZWZhdWx0cyIsImNyZWF0ZUNvbXBvbmVudCIsInNldHRpbmdzIiwiYXN0Tm9kZXMiLCJhc3ROb2RlIiwiJCRjaGlsZEVsZW1lbnRzIiwiY3JlYXRlRmlsdGVyIiwidHJpbSIsInJlcGxhY2UiLCJtZW1iZXJFeHAiLCJnZXRNZW1iZXJFeHByZXNzaW9uIiwib2JqZWN0IiwicHJvcGVydHkiLCJPUEVSQVRPUlMiLCJvcGVyYXRvclRleHQiLCJFU0NBUEUiLCJvcGVyYXRvciIsInJlYWROdW1iZXIiLCJpcyIsIm9wMSIsIm9wMiIsIm9wMyIsImNoYXJzIiwiaSIsImNvZGVQb2ludEF0IiwiY2hhckNvZGVBdCIsImNwMSIsImNwMiIsImlzRXhwT3BlcmF0b3IiLCJlcnJvciIsImNvbFN0ciIsIm51bWJlciIsInBlZWtDaCIsIk51bWJlciIsInNsaWNlIiwiZXNjYXBlIiwiaGV4IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJyZXAiLCJOdWxsT2JqZWN0IiwiQVNUIiwiUHJvZ3JhbSIsIkV4cHJlc3Npb25TdGF0ZW1lbnQiLCJBc3NpZ25tZW50RXhwcmVzc2lvbiIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsIkxvZ2ljYWxFeHByZXNzaW9uIiwiQmluYXJ5RXhwcmVzc2lvbiIsIlVuYXJ5RXhwcmVzc2lvbiIsIkNhbGxFeHByZXNzaW9uIiwiTWVtYmVyRXhwcmVzc2lvbiIsIklkZW50aWZpZXIiLCJMaXRlcmFsIiwiQXJyYXlFeHByZXNzaW9uIiwiUHJvcGVydHkiLCJPYmplY3RFeHByZXNzaW9uIiwiQXN0Tm9kZSIsImNvbnRleHQiLCJQcm9ncmFtTm9kZSIsIkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIiwiTWVtYmVyRXhwcmVzc2lvbk5vZGUiLCJBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUiLCJsZWZ0IiwicmlnaHQiLCJhc3NpZ25tZW50TGVmdCIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUiLCJhbHRlcm5hdGUiLCJjb25zZXF1ZW50IiwiTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsIkJpbmFyeUV4cHJlc3Npb25Ob2RlIiwiVW5hcnlFeHByZXNzaW9uTm9kZSIsInByZWZpeCIsIkxpdGVyYWxOb2RlIiwidG9UZXh0IiwiQ2FsbEV4cHJlc3Npb25Ob2RlIiwiY2FsbGVlIiwiYXJnVmFsdWVzIiwiZmlsdGVySW5zIiwiaXNGaWx0ZXIiLCIkZXhlY3V0ZSIsImZuIiwiY29tcHV0ZWQiLCJhbGxvd051bGwiLCJJZGVudGlmaWVyTm9kZSIsIm9iak5vZGUiLCJwcm9wZXJ0eUtleSIsIkFycmF5RXhwcmVzc2lvbk5vZGUiLCJQcm9wZXJ0eU5vZGUiLCJraW5kIiwiT2JqZWN0RXhwcmVzc2lvbk5vZGUiLCJwcm9wZXJ0aWVzIiwiZGVmIiwiaXNBc3NpZ25hYmxlIiwibXNnIiwicHJvZ3JhbSIsImV4cHJlc3Npb25TdGF0ZW1lbnQiLCJleHBlY3QiLCJmaWx0ZXJDaGFpbiIsImV4cHJlc3Npb24iLCJ0ZXJuYXJ5IiwibG9naWNhbE9SIiwiY29uc3VtZSIsImxvZ2ljYWxBTkQiLCJlcXVhbGl0eSIsInJlbGF0aW9uYWwiLCJhZGRpdGl2ZSIsIm11bHRpcGxpY2F0aXZlIiwidW5hcnkiLCJwcmltYXJ5IiwiYXJyYXlEZWNsYXJhdGlvbiIsImhhc093blByb3BlcnR5IiwicGFyc2VBcmd1bWVudHMiLCJiYXNlRXhwcmVzc2lvbiIsImlkZW50aWZpZXJzIiwiZW50aXJlTmFtZSIsImpvaW4iLCJwZWVrVG9rZW4iLCJhcnIiLCJlMSIsImUyIiwiZTMiLCJlNCIsInBlZWtBaGVhZCIsInQiLCJzaGlmdCIsIk1vZGVsT3B0aW9uc1NlcnZpY2UiLCJTZXJ2aWNlIiwiVGVtcGxhdGVDYWNoZVNlcnZpY2UiLCJ0cGxDYWNoZSIsInByb21pc2VDYWNoZSIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiRm9ybUNvbXBvbmVudCIsImdyb3VwcyIsImdyb3VwIiwiY29sbGFwc2VkIiwiZmllbGQiLCJNb2RhbENvbXBvbmVudCIsInZpc2libGUiLCJ2aWV3Q29uZmlnIiwiJGNsb3NlIiwiY2xvc2UiLCJib2R5IiwiYXBwZW5kIiwibW9kYWxTaG93Iiwicm9vdEVsZW1lbnQiLCIkcHJveHkiLCJ1bmxvYWQiLCJQcm9ncmVzc0NvbXBvbmVudCIsIk1hdGgiLCJyb3VuZCIsIm1heFZhbHVlIiwicGVyY2VudCIsImJhckNzcyIsIndpZHRoIiwiQ29sbGFwc2VEaXJlY3RpdmUiLCJkdXJhdGlvbiIsImhlaWdodCIsIm92ZXJmbG93IiwidG9nZ2xlIiwiY2xpZW50SGVpZ2h0IiwidHJhbnNpdGlvbiIsIk1vZGFsRmFkZURpcmVjdGl2ZSIsImJhY2tkcm9wIiwiY3JlYXRlQmFja2Ryb3AiLCJyZW1vdmVNb2RhbCIsIlZhbGlkYXRlRGlyZWN0aXZlIiwibk1vZGVsIiwic2V0VmFsaWRpdHkiLCJNb2RhbFNlcnZpY2UiLCJjb250ZW50IiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGUiLCJBcnJheSIsInJlcGxhY2VOb2RlIiwicmVmTm9kZSIsIm5ld05vZGUiLCJyZW1vdmVOb2RlIiwicmVtb3ZlTm9kZUJldHdlZW4iLCJiZWdpbk5vZGUiLCJlbmROb2RlIiwiaW5zZXJ0Tm9kZUFmdGVyIiwicXVlcnlFbGVtZW50TG9hZGVkIiwiY2FsbGJhY2siLCJjYW5jZWxUb2tlbiIsInF1ZXJ5IiwiY2xpZW50V2lkdGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJxdWVyeUVsZW1lbnRVbmxvYWRlZCIsInF1ZXJ5RWxlbWVudFN0YXRlIiwiY2FsbGJhY2tzIiwibG9hZGVkIiwib25Mb2FkIiwib25VbmxvYWQiLCJpc01lc3NlbmdlciIsImhhbmRsZXJzIiwicmV0dXJuVmFsdWUiLCJNZXNzZW5nZXJCdXMiLCJtZXNzZW5nZXJzIiwiZGVidWdNb2RlIiwidG9TdHJpbmciLCJnZXRQcm90b3R5cGVPZiIsImlnbm9yZU93biIsImNvcHkiLCJkZWVwIiwib2JqSW5kZXgiLCJhcmd1bWVudHMiLCJpc0Jvb2xlYW4iLCJuZXdBcnIiLCJuZXdPYmoiLCJleHRlbmQiLCJkZWVwTWVyZ2UiLCJwbGFpbk1lcmdlIiwibWVyZ2UiLCJzb3VyY2UiLCJvIiwiRiIsImluaGVyaXRQcm90b3R5cGUiLCJzdWJUeXBlIiwic3VwZXJUeXBlIiwiY29uc3RydWN0b3IiLCJpbmhlcml0IiwibG93ZXJjYXNlIiwiaXNTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInVwcGVyY2FzZSIsInRvVXBwZXJDYXNlIiwiaXNVbmRlZmluZWQiLCJpc0RlZmluZWQiLCJpc01hcCIsImlzQmxhbmtPYmplY3QiLCJpc0RhdGUiLCJpc0Z1bmN0aW9uIiwiaXNTYW1lIiwib2JqMSIsIm9iajIiLCJzYW1lIiwiZGVidWciLCJsb2ciLCJjb25zb2xlIiwiY29udGFpbnMiLCJjb250YWluc1N0ciIsImlnbm9yZUNhc2UiLCJoYXNQcm9wZXJ0eSIsImtleTIiLCJoYXNQcm9wIiwia2V5cyIsImtleTMiLCJ2YWx1ZTMiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiY29uY2F0IiwiZ2V0dGVyIiwiZ2V0VmFsdWUiLCJzb3J0IiwiYSIsImIiLCJvcmRlckJ5RGVzY2VuZGluZyIsImNvbnN0cnVjdCIsImJlZm9yZUF0dHJDaGFuZ2UiLCJhZnRlckF0dHJDaGFuZ2UiLCJhZnRlclZpZXdNb3VudCIsIiQkZWxlbWVudCIsIm1lc3NlbmdlciIsInN5bmMiLCIkZ2V0TWV0YSIsInRlbXBsYXRlVXJsIiwiZ2V0VHBsQnlVcmwiLCJ1c2luZyIsImNsYXNzTmFtZSIsInBvcCIsInNwYWNlTmFtZSIsImdldElubmVyVHBsIiwiJHVzaW5nIiwiZ2V0SHRtbEVsZW1lbnQiLCIkaGFzVmlldyIsIiRzaG93VmlldyIsIiRnZXRUZW1wbGF0ZSIsIiRtYWtlQ29tcGlsZU9wdGlvbnMiLCIkY2xlYXJWaWV3Iiwic2VsZWN0b3JPckVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJGFmdGVyVmlld01vdW50IiwiJCRwYXJlbnRDb21wb25lbnQiLCIkcmVtb3ZlQ2hpbGRDbXAiLCIkJGRldGVjdFRpbWVvdXQiLCIkJG9ic2VydmVyIiwidmFsaWRhdGUiLCJ3YXRjaCIsImNoaWxkQ21wIiwiJCRjaGlsZENvbXBvbmVudHMiLCJwYXJlbnRDbXAiLCJzZXRQcm90b3R5cGVPZiIsIiRob29rcyIsImhvb2siLCIkJGRpc3Bvc2VycyIsIiR2YWxpZGF0ZSIsImRlc3Ryb3lGcm9tRWxlbWVudCIsIiR1bm1vdW50IiwiZGlzcG9zZXIiLCIkc2V0TWV0YSIsImluamVjdFNlcnZpY2VzIiwib25Db21waWxlIiwiJHJlcXVlc3RBbmltYXRpb24iLCIkJGNhbmNlbEFuaW1hdGlvblRva2VuIiwiJGlzTG9hZGVkIiwiJGVsZW1lbnRsb2FkZWQiLCJkZXN0cm95RnJvbUF0dHIiLCIkY2FuY2VsQW5pbWF0aW9uIiwiRmlsdGVyIiwib25FeGVjdXRlIiwibnMiLCJtZXRob2RzIiwiYnVpbGRDb25zdHJ1Y3RvciIsImNvbnRyYWN0VHlwZSIsInN1cGVyQ2xhc3MiLCJtYWtlQ29uc3RydWN0b3IiLCJpc1NlcnZpY2UiLCJib290c3RyYXAiLCJpbm5lckhUTUwiLCJjbHMiLCJmIiwibmFtZVBhdHRlcm4iLCJJbmplY3RvciIsImNvbnRhaW5lciIsIndhaXRpbmdUb0V4dGVuZHMiLCJpbnNDb250YWluZXIiLCJtYXBwaW5nIiwiZ2V0TWFwcGluZyIsInJlZ2lzdGVyIiwiY29uc3RydWN0b3JzIiwibmFtZXNwYWNlcyIsImluc3RhbmNlIiwiY3JlYXRlU2VydmljZSIsImdldENvbXBvbmVudCIsImdldEZpbHRlciIsInNlcnZpY2VzIiwiZ2V0SW5zdGFuY2VzIiwiZ2V0U2VydmljZSIsIm5vblNoYXJlZCIsImNvbnN0cnVjdG9yTmFtZSIsImNoZWNrU2VsZWN0b3IiLCJnZXRXYWl0aW5nVG9FeHRlbmRzIiwib25Db25zdHJ1Y3QiLCJGdW5jdGlvbiIsInN1cGVyT25lIiwicmVtYWluQ29uc3RydWN0b3IiLCJzdXBlck5hbWUiLCJleHRlbmRNZXRhIiwic3VwZXJNZXRhIiwid2FpdGluZ1RvRXh0ZW5kczIiLCJmdWxsU2VsZWN0b3IiLCJzZXRXYWl0aW5nVG9FeHRlbmRzIiwibG9jYWwiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJwcml2YXRlS2V5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdE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SDtBQUNKOzs7Ozs7QUFHTCxJQUFJNWhCLFFBQVEsR0FBRyxJQUFJMGYsUUFBSixFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RaQTtBQUNBO0FBRU8sSUFBTXpNLE9BQWI7QUFBQTtBQUFBO0FBQ0kscUJBQWM7QUFBQTs7QUFDVkEsV0FBTyxDQUFDd0ksU0FBUixDQUFrQnpqQixJQUFsQixDQUF1QixJQUF2QjtBQUNIOztBQUhMO0FBQUE7QUFBQSw2QkFTYTtBQUNMLGFBQU87QUFDSDBJLGNBQU0sRUFBRSxFQURMO0FBRUg1SCxpQkFBUyxFQUFFO0FBRlIsT0FBUDtBQUlIO0FBZEw7QUFBQTtBQUFBLCtCQWdCZTtBQUNQLGFBQU8sS0FBSzNGLE1BQUwsSUFBZSxFQUF0QjtBQUNIO0FBbEJMO0FBQUE7QUFBQSw2QkFvQmEzRCxLQXBCYixFQW9Cb0I7QUFDWixXQUFLMkQsTUFBTCxHQUFjM0QsS0FBZDtBQUNIO0FBdEJMO0FBQUE7QUFBQSwrQkF3QmU7QUFDUCxVQUFJdUIseURBQUEsQ0FBaUIsS0FBSytILFNBQXRCLENBQUosRUFBc0M7QUFDbEMsYUFBS0EsU0FBTCxDQUFlZCxJQUFmLENBQW9CLElBQXBCO0FBQ0g7QUFDSjtBQTVCTDtBQUFBO0FBQUEsZ0NBS3VCO0FBQ2ZnSSx3REFBUSxDQUFDb2UsY0FBVCxDQUF3QixJQUF4QjtBQUNIO0FBUEw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7OztBQ0hBLG1EIiwiZmlsZSI6InNpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJheGlvc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJheGlvc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzaW5lXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYXhpb3NcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNpbmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJheGlvc1wiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYXhpb3NfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xuXG4vLyAvLyBXaW5kb3cgRXZlbnRzXG4vLyBjYXNlICdvbi1sb2FkJzpcbi8vIGNhc2UgJ29uLXVubG9hZCc6XG4vLyAvLyBGb3JtIEVsZW1lbnQgRXZlbnRzXG4vLyBjYXNlICdvbi1jaGFuZ2UnOlxuLy8gY2FzZSAnb24tc3VibWl0Jzpcbi8vIGNhc2UgJ29uLXJlc2V0Jzpcbi8vIGNhc2UgJ29uLXNlbGVjdCc6XG4vLyBjYXNlICdvbi1ibHVyJzpcbi8vIGNhc2UgJ29uLWZvY3VzJzpcbi8vIC8vIEltYWdlIEV2ZW50c1xuLy8gY2FzZSAnb24tYWJvcnQnOlxuLy8gLy8gS2V5Ym9hcmQgRXZlbnRzXG4vLyBjYXNlICdvbi1rZXlkb3duJzpcbi8vIGNhc2UgJ29uLWtleXByZXNzJzpcbi8vIGNhc2UgJ29uLWtleXVwJzpcbi8vIC8vIE1vdXNlIEV2ZW50c1xuLy8gY2FzZSAnb24tY2xpY2snOlxuLy8gY2FzZSAnb24tZGJsY2xpY2snOlxuLy8gY2FzZSAnb24tbW91c2Vkb3duJzpcbi8vIGNhc2UgJ29uLW1vdXNlbW92ZSc6XG4vLyBjYXNlICdvbi1tb3VzZW91dCc6XG4vLyBjYXNlICdvbi1tb3VzZW92ZXInOlxuLy8gY2FzZSAnb24tbW91c2V1cCc6XG52YXIgZXZlbnRUZXh0ID0gJ2xvYWQgdW5sb2FkIGNoYW5nZSBzdWJtaXQgcmVzZXQgc2VsZWN0IGJsdXIgZm9jdXMgYWJvcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwJztcbnZhciBkb21FdmVudHMgPSBldmVudFRleHQuc3BsaXQoJyAnKTtcblxuY2xhc3MgQXR0ck5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmF0dHJpYnV0ZSwgbmFtZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLnF1b3RlID0gJ1wiJztcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBuYW1lO1xuICAgICAgICB0aGlzLmlzRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0JpbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RvbUV2ZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEaXJlY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJDb21wb25lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gbmV3IEJpbmRpbmcoKTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IDA7XG4gICAgfVxuXG4gICAgYmVsb25nVG8oa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbiA9PT0ga2V5O1xuICAgIH1cblxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY29tcGlsZSh0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNvbXBpbGUob3B0aW9ucykge1xuICAgICAgICB0aGlzLmlzRXZlbnQgPSB0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ0AnKTtcbiAgICAgICAgdGhpcy5pc0JpbmRpbmcgPSB0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJzonKTtcbiAgICAgICAgdGhpcy5pc0RpcmVjdGl2ZSA9IHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnKicpO1xuICAgICAgICBpZiAodGhpcy5pc0V2ZW50IHx8IHRoaXMuaXNCaW5kaW5nIHx8IHRoaXMuaXNEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZU5hbWUgPSB0aGlzLm5vZGVOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRG9tRXZlbnQgPSB1dGlscy5jb250YWlucyhkb21FdmVudHMsIHRoaXMubm9kZU5hbWUpO1xuICAgICAgICB0aGlzLmJpbmRpbmcuc2V0T3V0cHV0KHRoaXMuaXNFdmVudCk7XG4gICAgICAgIHRoaXMuYmluZGluZy5iaW5kKHRoaXMubm9kZVZhbHVlLCB0aGlzLmlzRXZlbnQgfHwgdGhpcy5pc0JpbmRpbmcgfHwgdGhpcy5pc0RpcmVjdGl2ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNvbnRhaW5zRGlyZWN0aXZlKHRoaXMubm9kZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBvcHRpb25zLmNyZWF0ZURpcmVjdGl2ZSh0aGlzLm5vZGVOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kYmluZE5vZGUodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kaW5nLnNldE91dHB1dCh0aGlzLmRpcmVjdGl2ZS4kb3V0cHV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gdGhpcy5kaXJlY3RpdmUuJHByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXJlY3RpdmUgJyArIHRoaXMubm9kZU5hbWUgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlDb21waWxlZChvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kY29tcGlsZShvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmsoc2NvcGUsIGh0bWxFbGVtZW50LCBvd25lckNvbXBvbmVudCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gaHRtbEVsZW1lbnQ7XG4gICAgICAgIHRoaXMub3duZXJDb21wb25lbnQgPSBvd25lckNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5iaW5kaW5nLnNldFNjb3BlKHNjb3BlKTtcblxuICAgICAgICBpZiAodGhpcy5pc0V2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubm9kZU5hbWUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYmluZGluZy5jb21wdXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2Fsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudDogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYXJnczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZWxlbWVudDogc2VsZi5odG1sRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG93bmVyQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvd25lckNvbXBvbmVudC4kbGlzdGVuKHRoaXMubm9kZU5hbWUsIGZ1bmN0aW9uIChlLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYmluZGluZy5jb21wdXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2Fsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudDogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYXJnczogYXJncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZWxlbWVudDogc2VsZi5odG1sRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHNjb3BlLiQkY2hpbGREaXJlY3RpdmVzLnB1c2godGhpcy5kaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRzZXRCaW5kaW5nKHRoaXMuYmluZGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvd25lckNvbXBvbmVudCAhPSBudWxsICYmIG93bmVyQ29tcG9uZW50LiRoYXNBdHRyKHRoaXMubm9kZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgb3duZXJDb21wb25lbnQuJGluaXRBdHRyKHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLmh0bWxFbGVtZW50LCB0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5iaW5kaW5nLm9uY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2UoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kZGV0ZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDaGFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJpbmRpbmcuZGV0ZWN0KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJHVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMub3duZXJDb21wb25lbnQgIT0gbnVsbCAmJiB0aGlzLm93bmVyQ29tcG9uZW50LiRoYXNBdHRyKHRoaXMubm9kZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudC4kc2V0QXR0cih0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLmh0bWxFbGVtZW50LCB0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaHRtbEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgdGhpcy5ub2RlTmFtZSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudC52YWx1ZSA9IHRoaXMuYmluZGluZy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeUxpbmtlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kaW5zZXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXREaXJlY3RpdmUoa2V5KSB7XG4gICAgICAgIGlmIChrZXkgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlICE9IG51bGwgJiYgdGhpcy5kaXJlY3RpdmUuJCRtZXRhLnNlbGVjdG9yID09PSBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldE91dGVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW4gKyAodGhpcy5ub2RlVmFsdWUgPT0gbnVsbCA/ICcnIDogKCc9JyArIHRoaXMucXVvdGUgKyB0aGlzLm5vZGVWYWx1ZSArIHRoaXMucXVvdGUpKTtcbiAgICB9XG5cbiAgICBnZXRJbm5lclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luICsgKHRoaXMubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB0aGlzLnF1b3RlICsgdGhpcy5ub2RlVmFsdWUgKyB0aGlzLnF1b3RlKSk7XG4gICAgfVxuXG4gICAgZGlzcG9zZShpc0Zyb21EaXJlY3RpdmUpIHtcbiAgICAgICAgaWYgKGlzRnJvbURpcmVjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kaW5nLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyQ29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGRpc3Bvc2UodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEF0dHJOb2RlIH07XG4iLCJcbnZhciBWTm9kZVR5cGUgPSB7XG4gICAgZWxlbWVudDogMSxcbiAgICBhdHRyaWJ1dGU6IDIsXG4gICAgdGV4dDogMyxcbiAgICBjZGF0YVNlY3Rpb246IDQsXG4gICAgZW50aXR5UmVmZXJlbmNlOiA1LFxuICAgIGVudGl0eTogNixcbiAgICBwcm9jZXNzaW5nSW5zdHJ1Y3Rpb246IDcsXG4gICAgY29tbWVudDogOCxcbiAgICBkb2N1bWVudDogOSxcbiAgICBkb2N1bWVudFR5cGU6IDEwLFxuICAgIGRvY3VtZW50RnJhZ21lbnQ6IDExLFxuICAgIG5vdGF0aW9uOiAxMixcbiAgICBjb25uZWN0aW9uOiAxMDFcbn07XG5cbi8vIHZpcnR1YWwgbm9kZVxuY2xhc3MgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZVR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLm5vZGVOYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckRvY3VtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgfVxuXG4gICAgJHB1c2hDaGlsZChjaGlsZCkge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgICRidWlsZFNpYmxpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAoc2VsZi5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuJGJ1aWxkU2libGluZygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgIH1cblxuICAgICRyZW1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJHJlbW92ZSgpO1xuICAgICAgICB0aGlzLiRjbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckRvY3VtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaGFzQ2hpbGROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgY2xlYXJDaGlsZE5vZGVzKCkge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQubmV4dFNpYmxpbmcgPSBjaGlsZDtcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHRoaXMubGFzdENoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZDtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChyZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkO1xuICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBuZXdDaGlsZDtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMCwgbmV3Q2hpbGQpO1xuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuXG4gICAgaW5zZXJ0QWZ0ZXIocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChyZWZDaGlsZC5uZXh0U2libGluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUocmVmQ2hpbGQubmV4dFNpYmxpbmcsIG5ld0NoaWxkKTtcbiAgICB9XG5cbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3ZlIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcucHJldmlvdXNTaWJsaW5nID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC4kY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICByZXBsYWNlQ2hpbGQocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG4gICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICBpZiAodGhpcy5maXJzdENoaWxkID09PSByZWZDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sYXN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmQ2hpbGQuJGNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBjbG9uZU5vZGUoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG4gICAgY29tcGlsZShvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuY29tcGlsZShvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5Q29tcGlsZWQob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLm5vdGlmeUNvbXBpbGVkKG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsaW5rKHNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5saW5rKHNjb3BlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5TGlua2VkKCkge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLm5vdGlmeUxpbmtlZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzQ2hhbmdlKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfTtcbiIsImltcG9ydCB7IGlzT2JqZWN0LCBmb3JFYWNoIH0gZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5L21lc3NhZ2UnO1xuaW1wb3J0IHsgY29tcHV0ZSwgcGFyc2VBc3NpZ25tZW50IH0gZnJvbSAnLi4vcGFyc2VyJztcblxuY2xhc3MgRXhwTm9kZSB7XG4gICAgY29uc3RydWN0b3IodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgY29tcHV0ZShzY29wZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGNvbXB1dGUodGhpcy50ZXh0LCBzY29wZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSAhPT0gdGhpcy5vbGRWYWx1ZTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBCaW5kaW5nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMudGV4dCA9ICcnO1xuICAgICAgICB0aGlzLmlzRXhwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5yaWdodFN0ciA9ICcnO1xuICAgICAgICB0aGlzLm91dHB1dCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMudW53YXRjaGVzID0gW107XG4gICAgICAgIHRoaXMuY2hhbmdlID0gbmV3IE1lc3NlbmdlcigpO1xuICAgIH1cblxuICAgIHNldFNjb3BlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRPdXRwdXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5vdXRwdXQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBiaW5kKHRleHQsIGlzRXhwKSB7XG4gICAgICAgIGlmICh0ZXh0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuaXNFeHAgPSBpc0V4cDtcblxuICAgICAgICBpZiAoaXNFeHApIHtcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZXhwOiBuZXcgRXhwTm9kZSh0ZXh0KSxcbiAgICAgICAgICAgICAgICBsZWZ0U3RyOiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGF0dGVybiA9IC97eyhbXn1dKil9fS9nO1xuICAgICAgICB2YXIgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgICAgIHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcblxuICAgICAgICB3aGlsZSAobWF0Y2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbmRleDogbWF0Y2guaW5kZXgsXG4gICAgICAgICAgICAgICAgZXhwOiBuZXcgRXhwTm9kZShtYXRjaFsxXSksXG4gICAgICAgICAgICAgICAgbGVmdFN0cjogdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlZ21lbnRzLmxlbmd0aCA+IDAgJiYgbGFzdEluZGV4IDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRTdHIgPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZShvcHRpb25zKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICB0aGlzLm9sZFZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5zZWdtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0V4cCAmJiB0aGlzLnNlZ21lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHNbMF0uZXhwLmNvbXB1dGUoc2VsZi5zY29wZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc2VnbWVudHNbMF0uZXhwLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudC5leHAuY29tcHV0ZShzZWxmLnNjb3BlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAoc2VnbWVudC5sZWZ0U3RyICsgc2VnbWVudC5leHAudmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0ZXh0ICsgdGhpcy5yaWdodFN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIGFzc2lnbih2YWx1ZSkge1xuICAgICAgICB2YXIgYXNzaWdubWVudCA9IHBhcnNlQXNzaWdubWVudCh0aGlzLnRleHQsIHRoaXMuc2NvcGUpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50Lm9iaiAhPSBudWxsICYmIGFzc2lnbm1lbnQucHJvcCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhc3NpZ25tZW50Lm9iai50b1Byb3h5KClbYXNzaWdubWVudC5wcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlzdGVuKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMudW53YXRjaGVzID0gdGhpcy5zZWdtZW50cy5tYXAoZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnNjb3BlLiR3YXRjaChzZWdtZW50LmV4cC50ZXh0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRldGVjdCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZS5maXJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWZlcihhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuY2FuY2VsVGltZW91dCgpO1xuXG4gICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FuY2VsVGltZW91dCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZW91dElkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbmNoYW5nZShhY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMub3V0cHV0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpc3RlbigpO1xuXG4gICAgICAgIGlmIChhY3Rpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2Uub24oYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMub3V0cHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wdXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlICE9PSB0aGlzLm9sZFZhbHVlO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5zZWdtZW50cy5zb21lKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gc2VnbWVudC5leHAuZGV0ZWN0KCk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsVGltZW91dCgpO1xuICAgICAgICB0aGlzLnVud2F0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uICh1bndhdGNoKSB7XG4gICAgICAgICAgICB1bndhdGNoLmNhbGwoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgc2VnbWVudC5leHAuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgeyBCaW5kaW5nIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIENEYXRhU2VjdGlvbk5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmNkYXRhU2VjdGlvbik7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDRGF0YVNlY3Rpb25Ob2RlIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIENvbW1lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5jb21tZW50LCAnI2NvbW1lbnQnKTtcbiAgICB9XG5cbiAgICBsaW5rKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcbiAgICB9XG5cbiAgICBnZXRJbm5lclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVZhbHVlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ29tbWVudE5vZGUgfTtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIENvbm5lY3Rpb25Ob2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxpbmtlcil7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5jb25uZWN0aW9uLCBuYW1lKTtcbiAgICAgICAgdGhpcy5saW5rZXIgPSBsaW5rZXI7XG4gICAgfVxuXG4gICAgbGluayhzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtlci5jYWxsKHRoaXMsIHNjb3BlKTtcbiAgICB9XG5cbiAgICBub3RpZnlMaW5rZWQoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25JbnNlcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkluc2VydC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGV0ZWN0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25EZXRlY3QuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkhhc0NoYW5nZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uSGFzQ2hhbmdlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25VcGRhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vblVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDb25uZWN0aW9uTm9kZSB9OyIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuXG5jbGFzcyBEb2N1bWVudFR5cGVOb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuZG9jdW1lbnRUeXBlKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IERvY3VtZW50VHlwZU5vZGUgfTtcbiIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuXG5jbGFzcyBEb2N1bWVudE5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5kb2N1bWVudCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBEb2N1bWVudE5vZGUgfTsiLCJpbXBvcnQgKiBhcyBlbGVVdGlscyBmcm9tICcuLi91dGlsaXR5L2VsZS11dGlscyc7XG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IENvbm5lY3Rpb25Ob2RlIH0gZnJvbSAnLi9jb25uZWN0aW9uJztcbmltcG9ydCB7IEF0dHJOb2RlIH0gZnJvbSAnLi9hdHRyaWJ1dGUnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICcuLi9wYXJzZXInO1xuaW1wb3J0IHsgb3JkZXJCeSB9IGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuXG5jbGFzcyBFbGVtZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBnZXQgcGFyZW50RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmVsZW1lbnQsIG5hbWUpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxmQ2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tcGlsZU9wdGlvbnMgPSBudWxsO1xuICAgICAgICB0aGlzLmlzQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgJHB1c2hBdHRyaWJ1dGUoYXR0cikge1xuICAgICAgICBhdHRyLm93bmVyRWxlbWVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xuICAgIH1cblxuICAgIGhhc0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQsIG1hdGNoZXMgPSB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVzWzBdO1xuICAgICAgICAgICAgdGFyZ2V0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG5ldyBBdHRyTm9kZShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHRhcmdldC5vd25lckVsZW1lbnQgPSB0aGlzO1xuICAgICAgICAgICAgdGFyZ2V0LmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaCh0YXJnZXQpO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlQXR0cmlidXRlKGtleSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gW10sIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBBdHRyTm9kZSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hdHRyaWJ1dGVzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLmF0dHJpYnV0ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzZWxmLmF0dHJpYnV0ZXMuaW5kZXhPZihtYXRjaCk7XG4gICAgICAgICAgICAgICAgbWF0Y2guZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYuYXR0cmlidXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Lmxlbmd0aCA+IDAgPyB0YXJnZXRbMF0gOiBudWxsO1xuICAgIH1cblxuICAgIGFwcGVuZEF0dHJpYnV0ZShhdHRyKSB7XG4gICAgICAgIGlmIChhdHRyLm93bmVyRWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDdXJyZW50IGF0dHJpYnV0ZSBpcyBub3QgbmV3IVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF0dHIub3duZXJFbGVtZW50ID0gdGhpcztcbiAgICAgICAgYXR0ci5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaChhdHRyKTtcbiAgICAgICAgcmV0dXJuIGF0dHI7XG4gICAgfVxuXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XG4gICAgICAgIHZhciBhdHRyVHBsID0gJycsIGNoaWxkVHBsID0gJyc7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHJUcGwgKz0gJyAnO1xuICAgICAgICAgICAgYXR0clRwbCArPSBhdHRyLmdldE91dGVyVHBsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGRUcGwgKz0gY2hpbGQuZ2V0T3V0ZXJUcGwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHRwbCA9ICc8JyArIHRoaXMubm9kZU5hbWUgKyBhdHRyVHBsICsgJz4nICsgY2hpbGRUcGw7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNlbGZDbG9zZWQpIHtcbiAgICAgICAgICAgIHRwbCArPSAoJzwvJyArIHRoaXMubm9kZU5hbWUgKyAnPicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRwbDtcbiAgICB9XG5cbiAgICBnZXRJbm5lclRwbCgpIHtcbiAgICAgICAgdmFyIGNoaWxkVHBsID0gJyc7XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZFRwbCArPSBjaGlsZC5nZXRPdXRlclRwbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRUcGw7XG4gICAgfVxuXG4gICAgc2V0T3V0ZXJUcGwodHBsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcGFyc2UodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYsIHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmKTtcbiAgICB9XG5cbiAgICBzZXRJbm5lclRwbCh0cGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyQ2hpbGROb2RlcygpO1xuICAgICAgICBwYXJzZSh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYuYXBwZW5kQ2hpbGQodm5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3RpdmUoa2V5KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5zb21lKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhdHRyLmdldERpcmVjdGl2ZShrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAhPSBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGNvbXBpbGUob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNvbXBpbGVPcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIuY29tcGlsZShvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHBlcmZvcm0gZGlyZWN0aXZlIGFjY29yZGluZyB0byBwcmlvcml0eVxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBvcmRlckJ5KHRoaXMuYXR0cmlidXRlcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnByaW9yaXR5O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc0NvbXBvbmVudCA9IG9wdGlvbnMuY29udGFpbnNDb21wb25lbnQodGhpcy5ub2RlTmFtZSk7XG4gICAgICAgIGlmICghdGhpcy5pc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuY29tcGlsZShvcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5Q29tcGlsZWQob3B0aW9ucykge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0ci5ub3RpZnlDb21waWxlZChvcHRpb25zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLm5vdGlmeUNvbXBpbGVkKG9wdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rKHNjb3BlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHNlbGYuaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHNlbGYubm9kZU5hbWUpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudCA9IHNjb3BlLiRjcmVhdGVDaGlsZENtcCh0aGlzLm5vZGVOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LiRiaW5kTm9kZSh0aGlzKTtcbiAgICAgICAgICAgIHNlbGYuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgYXR0ci5saW5rKHNjb3BlLCBzZWxmLmh0bWxFbGVtZW50LCBzZWxmLmNvbXBvbmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYuY29tcG9uZW50LiRpbml0QXR0ckRvbmUoKTtcbiAgICAgICAgICAgIHNlbGYuY29tcG9uZW50LiRtb3VudChzZWxmLmh0bWxFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgYXR0ci5saW5rKHNjb3BlLCBzZWxmLmh0bWxFbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5odG1sRWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZC5saW5rKHNjb3BlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWxmLmh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIG5vdGlmeUxpbmtlZCgpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIubm90aWZ5TGlua2VkKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5ub3RpZnlMaW5rZWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0ci5kZXRlY3QoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXRlY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcG9zZShpc0Zyb21Db21wb25lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRnJvbUNvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5yZW1vdmVIdG1sRWxlbWVudCgpO1xuICAgICAgICB0aGlzLmNvbXBpbGVPcHRpb25zID0gbnVsbDtcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC4kZGlzcG9zZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIGdldEh0bWxFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odG1sRWxlbWVudDtcbiAgICB9XG5cbiAgICByZW1vdmVIdG1sRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaHRtbEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgZWxlVXRpbHMucmVtb3ZlTm9kZSh0aGlzLmh0bWxFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUVsZW1lbnQobmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnROb2RlKG5hbWUpO1xuICAgIH1cblxuICAgIGNyZWF0ZUF0dHIobmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IEF0dHJOb2RlKG5hbWUpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbm5lY3Rpb24obmFtZSwgbGlua2VyKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29ubmVjdGlvbk5vZGUobmFtZSwgbGlua2VyKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEVsZW1lbnROb2RlIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIERvY3VtZW50RnJhZ21lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5kb2N1bWVudEZyYWdtZW50LCAnI2RvY3VtZW50LWZyYWdtZW50Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBEb2N1bWVudEZyYWdtZW50Tm9kZSB9O1xuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzQXJyYXkgfSBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHkvbWVzc2FnZSc7XG5cbnZhciBwcm9wQ2hhbmdpbmdNc2cgPSBuZXcgTWVzc2VuZ2VyKCk7XG52YXIgcHJvcENoYW5nZWRNc2cgPSBuZXcgTWVzc2VuZ2VyKCk7XG52YXIgdGFyZ2V0S2V5ID0gJ19fdGFyZ2V0X18nO1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB2YWx1ZVt0YXJnZXRLZXldO1xuXG4gICAgICAgIC8vIHZhbHVlIGlzIGEgcHJveHkgcmV0dXJuIGJ5IHByb3h5IGhhbmRsZXJcbiAgICAgICAgaWYgKHRhcmdldCAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuY2xhc3MgR2V0UHJvcGVydHlIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihkZWVwUHJveHksIHZhcmlhYmxlcywgZnVsbFRhcmdldEtleSkge1xuICAgICAgICB0aGlzLmRlZXBQcm94eSA9IGRlZXBQcm94eTtcbiAgICAgICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgICAgIHRoaXMuZnVsbFRhcmdldEtleSA9IGZ1bGxUYXJnZXRLZXk7XG4gICAgfVxuXG4gICAgZ2V0KHRhcmdldCwga2V5KSB7XG4gICAgICAgIGlmICh0YXJnZXRLZXkgPT09IGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRhcmdldFtrZXldLCBmdWxsS2V5ID0ga2V5O1xuXG4gICAgICAgIGlmICh0aGlzLmZ1bGxUYXJnZXRLZXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgZnVsbEtleSA9IHRoaXMuZnVsbFRhcmdldEtleSArICcuJyArIGtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlZXBQcm94eSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IFByb3h5KHZhbHVlLCBuZXcgR2V0UHJvcGVydHlIYW5kbGVyKHRoaXMuZGVlcFByb3h5LCB0aGlzLnZhcmlhYmxlcywgZnVsbEtleSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGV4aXN0ZWQgPSB0aGlzLnZhcmlhYmxlcy5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50YXJnZXQgPT09IHRhcmdldCAmJiBpdGVtLmtleSA9PT0ga2V5O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWV4aXN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIHRhcmdldEtleTogdGhpcy5mdWxsVGFyZ2V0S2V5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5cbmNsYXNzIFNldFByb3BlcnR5SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBzZXQodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUgfHwgKGlzQXJyYXkodGFyZ2V0KSAmJiBrZXkgPT09ICdsZW5ndGgnKSkge1xuICAgICAgICAgICAgdmFyIHZhbGlkYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYXBwbHk6IHRydWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcHJvcENoYW5naW5nTXNnLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIGRhdGE6IHZhbGlkYXRpb25cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5hcHBseSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcHJvcENoYW5nZWRNc2cuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuY2xhc3MgQWNjZXNzUHJvcGVydHlIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihkZWVwUHJveHkpIHtcbiAgICAgICAgdGhpcy5kZWVwUHJveHkgPSBkZWVwUHJveHk7XG4gICAgfVxuXG4gICAgZ2V0KHRhcmdldCwga2V5KSB7XG4gICAgICAgIGlmICh0YXJnZXRLZXkgPT09IGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRhcmdldFtrZXldO1xuXG4gICAgICAgIGlmICh0aGlzLmRlZXBQcm94eSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IFByb3h5KHZhbHVlLCBuZXcgU2V0UHJvcGVydHlIYW5kbGVyKHRoaXMuZGVlcFByb3h5KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0KHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5kZWVwUHJveHkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZ2V0VGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUgfHwgKGlzQXJyYXkodGFyZ2V0KSAmJiBrZXkgPT09ICdsZW5ndGgnKSkge1xuICAgICAgICAgICAgdmFyIHZhbGlkYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYXBwbHk6IHRydWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcHJvcENoYW5naW5nTXNnLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIGRhdGE6IHZhbGlkYXRpb25cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5hcHBseSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcHJvcENoYW5nZWRNc2cuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgR2V0UHJvcGVydHlIYW5kbGVyLCBTZXRQcm9wZXJ0eUhhbmRsZXIsIEFjY2Vzc1Byb3BlcnR5SGFuZGxlciwgcHJvcENoYW5naW5nTXNnLCBwcm9wQ2hhbmdlZE1zZywgZ2V0VGFyZ2V0IH0iLCJleHBvcnQgKiBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdHRyaWJ1dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9jZGF0YXNlY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29ubmVjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2RvY3R5cGUnO1xuZXhwb3J0ICogZnJvbSAnLi9kb2N1bWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mcmFnbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL3RleHQnO1xuZXhwb3J0ICogZnJvbSAnLi9iaW5kaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vaGFuZGxlcic7XG5leHBvcnQgKiBmcm9tICcuL29ic2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vcHJveHknOyIsImltcG9ydCB7IGNvbXB1dGUsIHBhcnNlRXhwIH0gZnJvbSAnLi4vcGFyc2VyJztcbmltcG9ydCB7IGlzUmVnRXhwLCBmb3JFYWNoIH0gZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBwcm9wQ2hhbmdpbmdNc2csIHByb3BDaGFuZ2VkTXNnLCBHZXRQcm9wZXJ0eUhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXInO1xuXG5jbGFzcyBQcm9wZXJ0eU9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGFpbk1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZWdleE1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBvbihwcm9wLCBhY3Rpb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgbWFwID0gaXNSZWdFeHAocHJvcCkgPyB0aGlzLnJlZ2V4TWFwIDogdGhpcy5wbGFpbk1hcDtcblxuICAgICAgICBpZiAoIW1hcC5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgIG1hcC5zZXQocHJvcCwgW10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGFjdGlvbi5iZWZvcmVDaGFuZ2VkID0gb3B0aW9ucy5iZWZvcmVDaGFuZ2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFwLmdldChwcm9wKS5wdXNoKGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub2ZmKHByb3AsIGFjdGlvbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb2ZmKHByb3AsIGFjdGlvbikge1xuICAgICAgICB2YXIgbWFwID0gaXNSZWdFeHAocHJvcCkgPyB0aGlzLnJlZ2V4TWFwIDogdGhpcy5wbGFpbk1hcDtcblxuICAgICAgICBpZiAoIW1hcC5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhY3Rpb25zID0gbWFwLmdldChwcm9wKTtcbiAgICAgICAgdmFyIGluZGV4ID0gYWN0aW9ucy5pbmRleE9mKGFjdGlvbik7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUNoYW5nZWQocHJvcCwgYXJncykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMucGxhaW5NYXAuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICB0aGlzLnBsYWluTWFwLmdldChwcm9wKS5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5iZWZvcmVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYsIHByb3AsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWdleE1hcC5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb25zLCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICBpZiAocGF0dGVybi50ZXN0KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmlyZUNoYW5naW5nKHByb3AsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYWluTWFwLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgdGhpcy5wbGFpbk1hcC5nZXQocHJvcCkuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5iZWZvcmVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYsIHByb3AsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWdleE1hcC5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb25zLCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICBpZiAocGF0dGVybi50ZXN0KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5iZWZvcmVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnBsYWluTWFwLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmVnZXhNYXAuY2xlYXIoKTtcbiAgICB9XG59XG5cbmNsYXNzIE9iamVjdE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgb25jaGFuZ2luZyA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3MudGFyZ2V0LCBwcm9wID0gYXJncy5rZXk7XG4gICAgICAgICAgICAgICAgc2VsZi5maXJlQ2hhbmdpbmcob2JqLCBwcm9wLCBhcmdzLmRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uY2hhbmdlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3MudGFyZ2V0LCBwcm9wID0gYXJncy5rZXk7XG4gICAgICAgICAgICAgICAgc2VsZi5maXJlQ2hhbmdlZChvYmosIHByb3AsIGFyZ3MuZGF0YSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHByb3BDaGFuZ2luZ01zZy5vbihvbmNoYW5naW5nKTtcbiAgICAgICAgcHJvcENoYW5nZWRNc2cub24ob25jaGFuZ2VkKTtcblxuICAgICAgICB0aGlzLm9mZkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHByb3BDaGFuZ2luZ01zZy5vZmYob25jaGFuZ2luZyk7XG4gICAgICAgICAgICBwcm9wQ2hhbmdlZE1zZy5vZmYob25jaGFuZ2VkKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vYmpNYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgb24ob2JqLCBwcm9wLCBhY3Rpb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICghdGhpcy5vYmpNYXAuaGFzKG9iaikpIHtcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLnNldChvYmosIG5ldyBQcm9wZXJ0eU9ic2VydmVyKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMub2JqTWFwLmdldChvYmopLm9uKHByb3AsIGFjdGlvbiwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgb2ZmKG9iaiwgcHJvcCwgYWN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLm9iak1hcC5oYXMob2JqKSkge1xuICAgICAgICAgICAgdGhpcy5vYmpNYXAuZ2V0KG9iaikub2ZmKHByb3AsIGFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlQ2hhbmdlZChvYmosIHByb3AsIGFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMub2JqTWFwLmhhcyhvYmopKSB7XG4gICAgICAgICAgICB0aGlzLm9iak1hcC5nZXQob2JqKS5maXJlQ2hhbmdlZChwcm9wLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVDaGFuZ2luZyhvYmosIHByb3AsIGFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMub2JqTWFwLmhhcyhvYmopKSB7XG4gICAgICAgICAgICB0aGlzLm9iak1hcC5nZXQob2JqKS5maXJlQ2hhbmdpbmcocHJvcCwgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLm9mZkNoYW5nZS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLm9iak1hcC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub2JqTWFwID0gbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIE1lbWJlcldhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCB0YXJnZXQsIGtleSwgdGFyZ2V0S2V5KSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnRhcmdldEtleSA9IHRhcmdldEtleTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gbnVsbDtcblxuICAgICAgICBpZiAoIXRhcmdldEtleSkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGtleTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0YXJnZXRLZXkgKyAnLicgKyBrZXk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydChvYnNlcnZlciwgYWN0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IHRoaXMub2JzZXJ2ZXIub24odGhpcy50YXJnZXQsIHRoaXMua2V5LCB0aGlzLmFjdGlvbiwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy51bndhdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudW53YXRjaC5jYWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoY2hhbmdlS2V5KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldEtleSAhPSBudWxsICYmIHRoaXMudGFyZ2V0S2V5LnN0YXJ0c1dpdGgoY2hhbmdlS2V5KSkge1xuICAgICAgICAgICAgdmFyIG5ld1RhcmdldCA9IGNvbXB1dGUodGhpcy50YXJnZXRLZXksIHRoaXMuc2NvcGUpO1xuXG4gICAgICAgICAgICBpZiAobmV3VGFyZ2V0ICE9PSB0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3VGFyZ2V0O1xuICAgICAgICAgICAgICAgIHRoaXMudW53YXRjaCA9IHRoaXMub2JzZXJ2ZXIub24odGhpcy50YXJnZXQsIHRoaXMua2V5LCB0aGlzLmFjdGlvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgRGV0ZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB0aGlzLmRpZ2VzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYucXVldWUuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGVmZXIoYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jbGVhckRlZmVyKCk7XG4gICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJEZWZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZW91dElkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuICAgICAgICBwcm9wQ2hhbmdlZE1zZy5vbih0aGlzLmRpZ2VzdCk7XG4gICAgfVxuXG4gICAgYXBwbHkoYWN0aW9uKSB7XG4gICAgICAgIHRoaXMucXVldWUucHVzaChhY3Rpb24pO1xuICAgIH1cblxuICAgIHJlbW92ZShhY3Rpb24pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5xdWV1ZS5pbmRleE9mKGFjdGlvbik7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5xdWV1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgcHJvcENoYW5nZWRNc2cub2ZmKHRoaXMuZGlnZXN0KTtcbiAgICAgICAgdGhpcy5jbGVhckRlZmVyKCk7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICB9XG59XG5cbnZhciBkZXRlY3RvciA9IG5ldyBEZXRlY3RvcigpO1xuXG5kZXRlY3Rvci5leGVjdXRlKCk7XG5cbmNsYXNzIEV4cFdhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCBleHApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuZXhwID0gZXhwO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZXRlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBzZWxmLnZhbHVlLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gY29tcHV0ZShzZWxmLmV4cCwgc2VsZi5zY29wZSk7XG5cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgc2VsZi5hY3Rpb24uY2FsbChzZWxmLCB7XG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhcnQoYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHRoaXMudmFsdWUgPSBjb21wdXRlKHRoaXMuZXhwLCB0aGlzLnNjb3BlKTtcbiAgICAgICAgZGV0ZWN0b3IuYXBwbHkoc2VsZi5kZXRlY3QpO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZXRlY3Rvci5yZW1vdmUoc2VsZi5kZXRlY3QpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLnVud2F0Y2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51bndhdGNoLmNhbGwoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIFdhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCBleHApIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0ge307XG4gICAgICAgIHRoaXMuZGlnZXN0cyA9IFtdO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBudWxsO1xuICAgIH1cblxuICAgIHBhcnNlKCkge1xuICAgICAgICBpZiAodGhpcy5leHAgPT09ICcqJykge1xuICAgICAgICAgICAgdGhpcy5leHAgPSAvLisvaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1JlZ0V4cCh0aGlzLmV4cCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5zY29wZSxcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuZXhwXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhc3QgPSBwYXJzZUV4cCh0aGlzLmV4cCk7XG5cbiAgICAgICAgaWYgKGFzdC5oYXNDQygpKSB7XG4gICAgICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICBkaXJ0eUNoZWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgIGtleTogdGhpcy5leHBcbiAgICAgICAgICAgIH1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFyIGl0ZW1zID0gW10sXG4gICAgICAgIC8vICAgICBoYW5kbGVyID0gbmV3IEdldFByb3BlcnR5SGFuZGxlcih0cnVlLCBpdGVtcyksXG4gICAgICAgIC8vICAgICBwcm94eSA9IG5ldyBQcm94eSh0aGlzLnNjb3BlLCBoYW5kbGVyKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gY29tcHV0ZSh0aGlzLmV4cCwgcHJveHkpO1xuICAgICAgICAvL1xuICAgICAgICAvLyByZXR1cm4gaXRlbXM7XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb2xsZWN0TWVtYmVyczogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXB1dGUodGhpcy5leHAsIHRoaXMuc2NvcGUsIG9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybiBvcHRpb25zLm1lbWJlcnM7XG4gICAgfVxuXG4gICAgc3RhcnQob2JzZXJ2ZXIsIGFjdGlvbiwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnVwZGF0ZU1lbWJlcigpO1xuICAgIH1cblxuICAgIHVwZGF0ZU1lbWJlcigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucGFyc2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5kaXJ0eUNoZWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpZ2VzdCA9IG5ldyBFeHBXYXRjaGVyKHNlbGYuc2NvcGUsIGl0ZW0ua2V5KTtcbiAgICAgICAgICAgICAgICBzZWxmLmRpZ2VzdHMucHVzaChkaWdlc3QpO1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhcnREaWdlc3QoZGlnZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBtZW1iZXIgPSBuZXcgTWVtYmVyV2F0Y2hlcihzZWxmLnNjb3BlLCBpdGVtLnRhcmdldCwgaXRlbS5rZXksIGl0ZW0udGFyZ2V0S2V5KTtcblxuICAgICAgICAgICAgICAgIGlmICghc2VsZi5tZW1iZXJzW21lbWJlci5pZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tZW1iZXJzW21lbWJlci5pZF0gPSBtZW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3RhcnRNZW1iZXIobWVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXJ0RGlnZXN0KGRpZ2VzdCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgZGlnZXN0LnN0YXJ0KGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICBzZWxmLmFjdGlvbi5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIHN0YXJ0TWVtYmVyKG1lbWJlcikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgbWVtYmVyLnN0YXJ0KHNlbGYub2JzZXJ2ZXIsIGZ1bmN0aW9uIChwcm9wLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlS2V5ID0gcHJvcDtcblxuICAgICAgICAgICAgaWYgKG1lbWJlci50YXJnZXRLZXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNoYW5nZUtleSA9IG1lbWJlci50YXJnZXRLZXkgKyAnLicgKyBwcm9wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3JFYWNoKHNlbGYubWVtYmVycywgZnVuY3Rpb24gKGtleSwgbWVtYmVyV2F0Y2hlcikge1xuICAgICAgICAgICAgICAgIG1lbWJlcldhdGNoZXIudXBkYXRlKGNoYW5nZUtleSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gc2VsZi51cGRhdGVNZW1iZXIoKTtcbiAgICAgICAgICAgIHNlbGYuYWN0aW9uLmNhbGwodGhpcywgcHJvcCwgYXJncyk7XG4gICAgICAgIH0sIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgZm9yRWFjaCh0aGlzLm1lbWJlcnMsIGZ1bmN0aW9uIChrZXksIG1lbWJlcikge1xuICAgICAgICAgICAgbWVtYmVyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlnZXN0cy5mb3JFYWNoKGZ1bmN0aW9uIChkaWdlc3QpIHtcbiAgICAgICAgICAgIGRpZ2VzdC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5kaWdlc3RzID0gbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBPYmplY3RPYnNlcnZlcigpO1xuICAgICAgICB0aGlzLndhdGNoZXJzID0gW107XG4gICAgfVxuXG4gICAgd2F0Y2gob2JqLCBleHAsIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICB3YXRjaGVyID0gdGhpcy5jcmVhdGVXYXRjaGVyKG9iaiwgZXhwKTtcblxuICAgICAgICB3YXRjaGVyLnN0YXJ0KHRoaXMub2JzZXJ2ZXIsIGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdhdGNoZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgc2VsZi5yZW1vdmVXYXRjaGVyKHdhdGNoZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhbGlkYXRlKG9iaiwgZXhwLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgd2F0Y2hlciA9IHRoaXMuY3JlYXRlV2F0Y2hlcihvYmosIGV4cCk7XG5cbiAgICAgICAgd2F0Y2hlci5zdGFydCh0aGlzLm9ic2VydmVyLCBhY3Rpb24sIHtcbiAgICAgICAgICAgIGJlZm9yZUNoYW5nZWQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdhdGNoZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgc2VsZi5yZW1vdmVXYXRjaGVyKHdhdGNoZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNyZWF0ZVdhdGNoZXIob2JqLCBleHApIHtcbiAgICAgICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcihvYmosIGV4cCk7XG5cbiAgICAgICAgdGhpcy53YXRjaGVycy5wdXNoKHdhdGNoZXIpO1xuXG4gICAgICAgIHJldHVybiB3YXRjaGVyO1xuICAgIH1cblxuICAgIHJlbW92ZVdhdGNoZXIod2F0Y2hlcikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLndhdGNoZXJzLmluZGV4T2Yod2F0Y2hlcik7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy53YXRjaGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUNoYW5nZWQob2JqLCBwcm9wLCBhcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVyLmZpcmVDaGFuZ2VkKG9iaiwgcHJvcCwgYXJncyk7XG4gICAgfVxuXG4gICAgZmlyZUNoYW5naW5nKG9iaiwgcHJvcCwgYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlci5maXJlQ2hhbmdpbmcob2JqLCBwcm9wLCBhcmdzKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLndhdGNoZXJzLmZvckVhY2goZnVuY3Rpb24gKHdhdGNoZXIpIHtcbiAgICAgICAgICAgIHdhdGNoZXIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy53YXRjaGVycyA9IG51bGw7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFByb3BlcnR5T2JzZXJ2ZXIsIE9ic2VydmVyIH07IiwiaW1wb3J0IHsgU2V0UHJvcGVydHlIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVyJztcclxuXHJcbk9iamVjdC5wcm90b3R5cGUudG9Qcm94eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuZXcgUHJveHkodGhpcywgbmV3IFNldFByb3BlcnR5SGFuZGxlcigpKTtcclxufTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCAqIGFzIGVsZVV0aWxzIGZyb20gJy4uL3V0aWxpdHkvZWxlLXV0aWxzJztcbmltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gJy4vYmluZGluZyc7XG5cbmNsYXNzIFRleHROb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUudGV4dCwgJyN0ZXh0Jyk7XG4gICAgICAgIHRoaXMuYmluZGluZyA9IG5ldyBCaW5kaW5nKCk7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbXBpbGUoKSB7XG4gICAgICAgIHRoaXMuYmluZGluZy5iaW5kKHRoaXMubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICBsaW5rKHNjb3BlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmJpbmRpbmcuc2V0U2NvcGUoc2NvcGUpO1xuXG4gICAgICAgIHRoaXMuYmluZGluZy5vbmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XG4gICAgfVxuXG4gICAgaGFzQ2hhbmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iaW5kaW5nLmRldGVjdCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgZWxlVXRpbHMucmVwbGFjZU5vZGUodGhpcy5odG1sRWxlbWVudCwgdGhpcy5yZW5kZXIodGhpcy5iaW5kaW5nLnZhbHVlKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIGdldE91dGVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0SW5uZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJpbmRpbmcuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmJpbmRpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVGV4dE5vZGUgfTsiLCJpbXBvcnQgeyB0eXBlQ29uc3QsIGluamVjdG9yIH0gZnJvbSAnLi4vdmlldy9pbmplY3RvcidcblxuZnVuY3Rpb24gY29tcG9uZW50KG1ldGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBtZXRhLnNlbGVjdG9yIHx8IHRhcmdldC5uYW1lO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckNvbnN0cnVjdG9yKHR5cGVDb25zdC5jb21wb25lbnQsIHNlbGVjdG9yLCB0YXJnZXQsIG1ldGEpO1xuICAgIH07XG59XG5cbmV4cG9ydCB7IGNvbXBvbmVudCB9IiwiaW1wb3J0IHsgdHlwZUNvbnN0LCBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcvaW5qZWN0b3InXG5cbmZ1bmN0aW9uIGRpcmVjdGl2ZShtZXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gbWV0YS5zZWxlY3RvciB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb25zdHJ1Y3Rvcih0eXBlQ29uc3QuZGlyZWN0aXZlLCBzZWxlY3RvciwgdGFyZ2V0LCBtZXRhKTtcbiAgICB9O1xufVxuXG5leHBvcnQgeyBkaXJlY3RpdmUgfSIsImltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3L2luamVjdG9yJ1xuXG5mdW5jdGlvbiBzZXJ2aWNlKG1ldGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBtZXRhLnNlbGVjdG9yIHx8IHRhcmdldC5uYW1lO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckNvbnN0cnVjdG9yKHR5cGVDb25zdC5zZXJ2aWNlLCBzZWxlY3RvciwgdGFyZ2V0LCBtZXRhKTtcbiAgICB9O1xufVxuXG5leHBvcnQgeyBzZXJ2aWNlIH0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tIFwiLi4vdmlldy9kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSBcIi4uL2RlY29yYXRvci9kaXJlY3RpdmVcIjtcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWJpbmQtY21wJ1xyXG59KVxyXG5jbGFzcyBCaW5kQ21wRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4kcHJpb3JpdHkgPSA1O1xyXG4gICAgICAgIHRoaXMubmFtZURpciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lRGlyID0gdGhpcy4kZWxlbWVudC5nZXREaXJlY3RpdmUoJ24tbmFtZScpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm5hbWVEaXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuJGRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xyXG5cclxuICAgICAgICBpZih1dGlscy5pc09iamVjdCh0aGlzLmNvbmZpZykpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3ID0gdGhpcy4kYmluZGluZy5zY29wZS4kY3JlYXRlQ2hpbGRDbXAodGhpcy5jb25maWcuY29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuY29uZmlnLm9uSW5pdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5vbkluaXQuY2FsbCh0aGlzLCB0aGlzLnZpZXcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudmlldyA9IHRoaXMuJGJpbmRpbmcuc2NvcGUuJGNyZWF0ZUNoaWxkQ21wKHRoaXMuY29uZmlnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudmlldy4kbW91bnQodGhpcy4kaHRtbEVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5uYW1lRGlyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lRGlyLnNldENtcCh0aGlzLnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tYmluZCdcbn0pXG5jbGFzcyBCaW5kRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgIH1cblxuICAgIGJpbmQoKSB7XG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLWVtYmVkJ1xufSlcbmNsYXNzIEVtYmVkRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNvbXBpbGUob3B0aW9ucykge1xuICAgICAgICB2YXIgZW1iZWRUcGwgPSBvcHRpb25zLmdldEVtYmVkVHBsKCk7XG4gICAgICAgIGlmIChlbWJlZFRwbCkge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5zZXRJbm5lclRwbChlbWJlZFRwbCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1oaWRlJ1xufSlcbmNsYXNzIEhpZGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB2YWx1ZSA/ICdub25lJyA6ICdpbml0aWFsJztcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLWlmJ1xufSlcbmNsYXNzIElmRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLWlmJyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSkge1xuICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy4kaHRtbEVsZW1lbnQsIHRoaXMuaHRtbENvbW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50LnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuaHRtbENvbW1lbnQsIHRoaXMuJGh0bWxFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRodG1sRWxlbWVudC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLiRodG1sRWxlbWVudCwgdGhpcy5odG1sQ29tbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBudWxsO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmQnXG5leHBvcnQgKiBmcm9tICcuL2VtYmVkJ1xuZXhwb3J0ICogZnJvbSAnLi9oaWRlJ1xuZXhwb3J0ICogZnJvbSAnLi9pZidcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnXG5leHBvcnQgKiBmcm9tICcuL3JlcGVhdCdcbmV4cG9ydCAqIGZyb20gJy4vc2hvdydcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaCdcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGUnXG5leHBvcnQgKiBmcm9tICcuL25hbWUnXG5leHBvcnQgKiBmcm9tICcuL2JpbmQtY21wJyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1tb2RlbCcsXG4gICAgaW5qZWN0OiB7XG4gICAgICAgIG9wdGlvbnM6ICckbW9kZWxPcHRpb25zJ1xuICAgIH1cbn0pXG5jbGFzcyBNb2RlbERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuJHZpZXdWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuJG1vZGVsVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLiRwYXJzZXJzID0gW107XG4gICAgICAgIHRoaXMuJGZvcm1hdHRlcnMgPSBbXTtcbiAgICAgICAgdGhpcy4kdmlld0NoYW5nZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLiR2YWxpZGF0b3JzID0gW107XG4gICAgICAgIHRoaXMuJGZlZWRiYWNrID0gJyc7XG4gICAgICAgIHRoaXMuJHByaXN0aW5lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kZGlydHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kdmFsaWQgPSB0cnVlO1xuICAgICAgICB0aGlzLiRpbnZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnNldFZpZXdWYWx1ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLiRjb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0TW9kZWxWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc01lc3Nlbmdlcih0aGlzLiRjb21wb25lbnQuY2hhbmdlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC5jaGFuZ2Uub24oZnVuY3Rpb24gKGUsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRNb2RlbFZhbHVlKGFyZ3MubmV3dmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb2VudCAnICsgdGhpcy4kY29tcG9uZW50LiQkbWV0YS5zZWxlY3RvciArICdtdXN0IGRlZmluZSBbY2hhbmdlXSBldmVudCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuc2V0Vmlld1ZhbHVlKCk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLiRwYXJzZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy4kZm9ybWF0dGVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuJHZpZXdDaGFuZ2VMaXN0ZW5lcnMgPSBudWxsO1xuICAgICAgICB0aGlzLiR2YWxpZGF0b3JzID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRWaWV3VmFsdWUoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLiRtb2RlbFZhbHVlID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XG5cbiAgICAgICAgdmFyIHZpZXdWYWx1ZSA9IHRoaXMuJG1vZGVsVmFsdWU7XG5cbiAgICAgICAgdGhpcy4kdmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIHNlbGYuJG1vZGVsVmFsdWUsIHNlbGYuJHZpZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGZvcm1hdHRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICB2aWV3VmFsdWUgPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2aWV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy4kdmlld1ZhbHVlICE9PSB2aWV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHZpZXdWYWx1ZSA9IHZpZXdWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQudmFsdWUgPSB0aGlzLiRtb2RlbFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LiRzZXRBdHRyKCd2YWx1ZScsIHRoaXMuJG1vZGVsVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVDc3MoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cblxuICAgIHNldE1vZGVsVmFsdWUodmlld1ZhbHVlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnNldERpcnR5KHRydWUpO1xuXG4gICAgICAgIHRoaXMuJHZpZXdWYWx1ZSA9IHZpZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLiR2aWV3Q2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHNlbGYsIHZpZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBtb2RlbFZhbHVlID0gdGhpcy4kdmlld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuJHBhcnNlcnMuZm9yRWFjaChmdW5jdGlvbiAocGFyc2VyKSB7XG4gICAgICAgICAgICBtb2RlbFZhbHVlID0gcGFyc2VyLmNhbGwoc2VsZiwgbW9kZWxWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLiRtb2RlbFZhbHVlICE9PSBtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiRtb2RlbFZhbHVlID0gbW9kZWxWYWx1ZTtcblxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IuY2FsbChzZWxmLCBzZWxmLiRtb2RlbFZhbHVlLCBzZWxmLiR2aWV3VmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuJGJpbmRpbmcuYXNzaWduKHRoaXMuJG1vZGVsVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQ3NzKCkge1xuICAgICAgICB2YXIgZWxlID0gdGhpcy4kaHRtbEVsZW1lbnQsXG4gICAgICAgICAgICBjc3MgPSB0aGlzLm9wdGlvbnMuY3NzQ2xhc3M7XG5cbiAgICAgICAgaWYgKHRoaXMuJGRpcnR5KSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MuZGlydHkpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLnByaXN0aW5lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5wcmlzdGluZSk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MuZGlydHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJHZhbGlkKSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MudmFsaWQpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmludmFsaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLmludmFsaWQpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLnZhbGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVN0YXRlKCkge1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuJGh0bWxFbGVtZW50Lm5hbWU7XG5cbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzLiRiaW5kaW5nLnNjb3BlLnRvUHJveHkoKTtcblxuICAgICAgICBpZiAoc2NvcGVbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgc2NvcGVbbmFtZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGF0ZSA9IHNjb3BlW25hbWVdLnRvUHJveHkoKTtcblxuICAgICAgICBzdGF0ZS4kcHJpc3RpbmUgPSB0aGlzLiRwcmlzdGluZTtcbiAgICAgICAgc3RhdGUuJGRpcnR5ID0gdGhpcy4kZGlydHk7XG4gICAgICAgIHN0YXRlLiR2YWxpZCA9IHRoaXMuJHZhbGlkO1xuICAgICAgICBzdGF0ZS4kaW52YWxpZCA9IHRoaXMuJGludmFsaWQ7XG4gICAgICAgIHN0YXRlLiRmZWVkYmFjayA9IHRoaXMuJGZlZWRiYWNrO1xuICAgIH1cblxuICAgIHNldERpcnR5KGRpcnR5KSB7XG4gICAgICAgIHRoaXMuJGRpcnR5ID0gZGlydHk7XG4gICAgICAgIHRoaXMuJHByaXN0aW5lID0gIWRpcnR5O1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3NzKCk7XG4gICAgfVxuXG4gICAgc2V0VmFsaWRpdHkodmFsaWQsIGZlZWRiYWNrKSB7XG4gICAgICAgIHRoaXMuJHZhbGlkID0gdmFsaWQ7XG4gICAgICAgIHRoaXMuJGludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHRoaXMuJGZlZWRiYWNrID0gZmVlZGJhY2s7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDc3MoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tbmFtZSdcclxufSlcclxuY2xhc3MgTmFtZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuJG91dHB1dCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydCgpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLiRiaW5kaW5nLnRleHQ7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5uYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwcm94eSA9IHRoaXMuJHNjb3BlLnRvUHJveHkoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHByb3h5W3RoaXMubmFtZV0gPSB0aGlzLiRjb21wb25lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwcm94eVt0aGlzLm5hbWVdID0gdGhpcy4kZWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5hbWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRzY29wZVt0aGlzLm5hbWVdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q21wKGNtcCkge1xyXG4gICAgICAgIHZhciBwcm94eSA9IHRoaXMuJHNjb3BlLnRvUHJveHkoKTtcclxuICAgICAgICBwcm94eVt0aGlzLm5hbWVdID0gY21wO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL3ZpZXcvY29tcG9uZW50JztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXJlcGVhdCdcbn0pXG5jbGFzcyBSZXBlYXREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pdGVtRXhwID0gJyc7XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5kYXRhSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jbXBJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmhlYWRlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vdGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbkNvbXBpbGUoKSB7XG4gICAgICAgIHZhciBhcmcgPSB0aGlzLiRhdHRyLm5vZGVWYWx1ZTtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50O1xuICAgICAgICB2YXIgcGF0dGVybiA9IC9eKFthLXpfXStcXHcrKVxccytpblxccysoLispJC9pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGF0dGVybi5leGVjKGFyZyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ24tcmVwZWF0OiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1FeHAgPSByZXN1bHRbMV07XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSByZXN1bHRbMl07XG5cbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy4kYXR0cik7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gZWxlbWVudC5nZXRPdXRlclRwbCgpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBlbGVtZW50LmNyZWF0ZUNvbm5lY3Rpb24oJ24tcmVwZWF0JywgZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBzY29wZS4kZXZhbChzZWxmLml0ZW1zRXhwKTtcblxuICAgICAgICAgICAgc2VsZi5zY29wZSA9IHNjb3BlO1xuICAgICAgICAgICAgc2VsZi5zZXREYXRhSXRlbXMoaXRlbXMpO1xuICAgICAgICAgICAgc2VsZi5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdzdGFydDogbi1yZXBlYXQnKTtcbiAgICAgICAgICAgIHNlbGYuZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZW5kOiBuLXJlcGVhdCcpO1xuXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLmhlYWRlcik7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLmZvb3Rlcik7XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZWxlbWVudCwgY29ubmVjdGlvbik7XG4gICAgICAgIGVsZW1lbnQuZGVzdHJveSgpO1xuXG4gICAgICAgIGNvbm5lY3Rpb24ub25JbnNlcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnJlbmRlcigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbm5lY3Rpb24ub25EZXRlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBzZWxmLnNjb3BlLiRldmFsKHNlbGYuaXRlbXNFeHApO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5kYXRhSXRlbXMgIT09IGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXREYXRhSXRlbXMoaXRlbXMpO1xuICAgICAgICAgICAgICAgIHNlbGYucmVuZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNtcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkU2NvcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRTY29wZS4kZGV0ZWN0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29ubmVjdGlvbi5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLiRkZXN0cm95KCk7XG4gICAgICAgICAgICBlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5jbXBJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChjbXBJdGVtKSB7XG4gICAgICAgICAgICBjbXBJdGVtLiRkZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNtcEl0ZW1zID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZvb3RlciA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0RGF0YUl0ZW1zKHZhbHVlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY29wZS4kd2F0Y2godGhpcy5kYXRhSXRlbXMsICdsZW5ndGgnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDbXBJdGVtKGRhdGFJdGVtKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgZmlsdGVycyA9IHRoaXMuY21wSXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVtzZWxmLml0ZW1FeHBdID09PSBkYXRhSXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YXJnZXQgPSBmaWx0ZXJzWzBdO1xuXG4gICAgICAgIHRoaXMuY21wSXRlbXMgPSB0aGlzLmNtcEl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1bc2VsZi5pdGVtRXhwXSAhPT0gZGF0YUl0ZW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdmFyIG5ld0NtcEl0ZW1zID0gW107XG5cbiAgICAgICAgdXRpbHMuZm9yRWFjaChzZWxmLmRhdGFJdGVtcywgZnVuY3Rpb24gKGtleSwgaXRlbSkge1xuICAgICAgICAgICAgdmFyIGNtcEl0ZW0gPSBzZWxmLmdldENtcEl0ZW0oaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChjbXBJdGVtID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjbXBJdGVtID0gbmV3IENvbXBvbmVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBzZWxmLml0ZW1UZW1wbGF0ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNtcEl0ZW1bc2VsZi5pdGVtRXhwXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgY21wSXRlbS4kaW5oZXJpdENtcChzZWxmLnNjb3BlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY21wSXRlbS4kcmVuZGVyKHRydWUpKTtcbiAgICAgICAgICAgIG5ld0NtcEl0ZW1zLnB1c2goY21wSXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzZWxmLmNtcEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNlbGYuY21wSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAocmVwZWF0SXRlbSkge1xuICAgICAgICAgICAgICAgIHJlcGVhdEl0ZW0uJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5jbXBJdGVtcyA9IG5ld0NtcEl0ZW1zO1xuICAgICAgICB1dGlscy5yZW1vdmVOb2RlQmV0d2VlbihzZWxmLmhlYWRlciwgc2VsZi5mb290ZXIpO1xuICAgICAgICBzZWxmLmZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmcmFnbWVudCwgc2VsZi5mb290ZXIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tc2hvdydcbn0pXG5jbGFzcyBTaG93RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyAnaW5pdGlhbCcgOiAnbm9uZSc7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLWNoZWNrZWQnXG59KVxuY2xhc3MgQ2hlY2tlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2NoZWNrZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tZGlzYWJsZWQnXG59KVxuY2xhc3MgRGlzYWJsZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXNhYmxlZCcpO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2NoZWNrZWQnXG5leHBvcnQgKiBmcm9tICcuL2Rpc2FibGVkJ1xuZXhwb3J0ICogZnJvbSAnLi9yZWFkb25seSdcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0ZWQnIiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tcmVhZG9ubHknXG59KVxuY2xhc3MgUmVhZG9ubHlEaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdyZWFkb25seScpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zZWxlY3RlZCdcbn0pXG5jbGFzcyBTZWxlY3RlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3NlbGVjdGVkJyk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcvZGlyZWN0aXZlJztcblxuY2xhc3MgU3RhdGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKGF0dHJOYW1lKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXR0ck5hbWUgPSBhdHRyTmFtZTtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybSgpO1xuICAgIH1cblxuICAgIHBlcmZvcm0oKSB7XG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLiRodG1sRWxlbWVudC5oYXNBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zdHlsZSdcbn0pXG5jbGFzcyBTdHlsZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdHlsZSgpO1xuICAgIH1cblxuICAgIHNldFN0eWxlKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xuXG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuJGh0bWxFbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kYmluZGluZy5zY29wZS4kd2F0Y2godmFsdWUsICcqJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHV0aWxzLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGh0bWxFbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgb2Ygbi1zdHlsZSBzaG91bGQgYmUgc3RyaW5nIG9yIG9iamVjdCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC1kZWZhdWx0J1xuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gtd2hlbiciLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3L2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxpdHknO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tc3dpdGNoLWRlZmF1bHQnXG59KVxuY2xhc3MgU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zd2l0Y2hXaGVuRGlycyA9IFtdO1xuICAgIH1cblxuICAgIGluaXRTd2l0Y2hXaGVuRGlycygpIHtcbiAgICAgICAgdmFyIHZFbGUgPSB0aGlzLiRlbGVtZW50O1xuXG4gICAgICAgIHdoaWxlICh2RWxlLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgd2hlbkRpciA9IHZFbGUucHJldmlvdXNTaWJsaW5nLmdldERpcmVjdGl2ZSgnbi1zd2l0Y2gtd2hlbicpO1xuXG4gICAgICAgICAgICBpZiAod2hlbkRpciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hXaGVuRGlycy5wdXNoKHdoZW5EaXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2RWxlID0gdkVsZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnN3aXRjaFdoZW5EaXJzLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlzTWF0Y2g7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5pbml0U3dpdGNoV2hlbkRpcnMoKTtcbiAgICAgICAgdGhpcy5pc01hdGNoID0gdGhpcy5tYXRjaCgpO1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbi1zd2l0Y2gtZGVmYXVsdCcpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc01hdGNoKSB7XG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLiRodG1sRWxlbWVudCwgdGhpcy5odG1sQ29tbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaFdoZW5EaXJzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uaXNNYXRjaENoYW5nZWQub24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuaXNNYXRjaCwgbmV3VmFsdWUgPSB0aGlzLm1hdGNoKCk7XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pc01hdGNoID0gbmV3VmFsdWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kaHRtbEVsZW1lbnQucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuaHRtbENvbW1lbnQsIHRoaXMuJGh0bWxFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kaHRtbEVsZW1lbnQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuJGh0bWxFbGVtZW50LCB0aGlzLmh0bWxDb21tZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnN3aXRjaFdoZW5EaXJzID0gbnVsbDtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldy9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlsaXR5JztcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uLy4uL3V0aWxpdHkvbWVzc2FnZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zd2l0Y2gtd2hlbidcbn0pXG5jbGFzcyBTd2l0Y2hXaGVuRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc01hdGNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnN3aXRjaERpciA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNNYXRjaENoYW5nZWQgPSBuZXcgTWVzc2VuZ2VyKCk7XG4gICAgfVxuXG4gICAgaW5pdFN3aXRjaERpcigpIHtcbiAgICAgICAgdmFyIHN3aXRjaERpciA9IHRoaXMuJGVsZW1lbnQucGFyZW50Tm9kZS5nZXREaXJlY3RpdmUoJ24tc3dpdGNoJyk7XG5cbiAgICAgICAgaWYgKHN3aXRjaERpciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmUgbi1zd2l0Y2ggZGlyZWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaERpciA9IHN3aXRjaERpcjtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuaW5pdFN3aXRjaERpcigpO1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbi1zd2l0Y2gtd2hlbicpO1xuICAgICAgICB0aGlzLmlzTWF0Y2ggPSAodGhpcy4kYmluZGluZy5jb21wdXRlKCkgPT09IHRoaXMuc3dpdGNoRGlyLnZhbHVlKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNNYXRjaCkge1xuICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy4kaHRtbEVsZW1lbnQsIHRoaXMuaHRtbENvbW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hEaXIudmFsdWVDaGFuZ2VkLm9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5pc01hdGNoLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSAodGhpcy4kYmluZGluZy5jb21wdXRlKCkgPT09IHRoaXMuc3dpdGNoRGlyLnZhbHVlKTtcblxuICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmlzTWF0Y2ggPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNNYXRjaENoYW5nZWQuZmlyZSgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50LnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmh0bWxDb21tZW50LCB0aGlzLiRodG1sRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50LnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLiRodG1sRWxlbWVudCwgdGhpcy5odG1sQ29tbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zd2l0Y2hEaXIgPSBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3L2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uLy4uL3V0aWxpdHkvbWVzc2FnZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zd2l0Y2gnXG59KVxuY2xhc3MgU3dpdGNoRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkID0gbmV3IE1lc3NlbmdlcigpO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xuXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkLmZpcmUoe1xuICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3V0aWxpdHknO1xuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcbmV4cG9ydCAqIGZyb20gJy4vcGFyc2VyJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL3VpJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XG5cbnV0aWxzLmluaGVyaXQoSHRtbExleGVyLCBMZXhlcik7XG5mdW5jdGlvbiBIdG1sTGV4ZXIob3B0aW9ucykge1xuICAgIEh0bWxMZXhlci5zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xufVxuXG5IdG1sTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICByZXR1cm4gKCdhJyA8PSBjaCAmJiBjaCA8PSAneicgfHxcbiAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxuICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcgfHxcbiAgICAgICAgY2ggPT09ICdAJyB8fCBjaCA9PT0gJzonIHx8IGNoID09PSAnKicpO1xufTtcblxuSHRtbExleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlID0gZnVuY3Rpb24gKGNoLCBjcCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy0nIHx8IGNoID09PSAnLic7XG59O1xuXG5IdG1sTGV4ZXIucHJvdG90eXBlLmV4cGVjdFN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB2YXIgbnVtID0gc3RyLmxlbmd0aDtcbiAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPD0gdGhpcy50ZXh0Lmxlbmd0aCkgPyAoc3RyID09PSB0aGlzLnRleHQuc3Vic3RyKHRoaXMuaW5kZXgsIG51bSkpIDogZmFsc2U7XG59O1xuXG4vLyBodG1sIGNvbW1lbnQgXCI8IS0tY29tbWVudC0tPlwiXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRDb21tZW50ID0gZnVuY3Rpb24gKGJlZ2luLCBlbmQpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xuICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICB2YXIgcmF3U3RyaW5nID0gYmVnaW47XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHJhd1N0cmluZyArPSBjaDtcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKGVuZCkpIHtcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBlbmQ7XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbiAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBjb21tZW50Jywgc3RhcnQpO1xufTtcblxuLy8gaHRtbCB0ZXh0XG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgdmFyIHN0cmluZyA9ICcnO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgIGlmICgoY2ggPT09ICc8JyAmJiAodGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB8fCBjaDIgPT09ICcvJykgfHwgdGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgfVxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgICAgdGV4dFRhZzogdHJ1ZVxuICAgIH0pO1xufTtcblxuLy8gaHRtbCB0YWdcbkh0bWxMZXhlci5wcm90b3R5cGUucmVhZFRhZyA9IGZ1bmN0aW9uIChiZWdpbiwgZW5kLCBjbG9zaW5nLCBkb2N0eXBlKSB7XG4gICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBiZWdpbiwgdGFnOiB0cnVlLCBjbG9zaW5nOiBjbG9zaW5nLCBiZWdpbjogdHJ1ZSwgZG9jdHlwZTogZG9jdHlwZSB9KTtcbiAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcbiAgICB0aGlzLnJlYWRJZGVudCgpO1xuXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG5cbiAgICAgICAgaWYgKCFjbG9zaW5nKSB7XG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICB2YXIgc3RyID0gY2ggKyBjaDI7XG4gICAgICAgICAgICBpZiAoc3RyID09PSAnLycgKyBlbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHN0ciwgdGFnOiB0cnVlLCBjbG9zaW5nOiB0cnVlLCBlbmQ6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBzdHIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoID09PSBlbmQpIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgICAgIHRleHQ6IGVuZCxcbiAgICAgICAgICAgICAgICB0YWc6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xvc2luZzogISFkb2N0eXBlID8gdHJ1ZSA6IGNsb3NpbmcsXG4gICAgICAgICAgICAgICAgZW5kOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJz0nKSB7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6ICc9JywgZXF1YWw6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuSHRtbExleGVyLnByb3RvdHlwZS5sZXggPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy50b2tlbnMgPSBbXTtcblxuICAgIHZhciBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgdmFyIGNoMyA9IHRoaXMucGVlaygyKTtcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZENvbW1lbnQoJzwhLS0nLCAnLS0+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc8JyAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCcsICc+JywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8LycpICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gzKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8LycsICc+JywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhRE9DVFlQRScpKSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8IScsICc+JywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0RPQ1RZUEUgaXMgbm90IGFsbG93ZWQnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRUZXh0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xufTtcblxuZXhwb3J0IHsgSHRtbExleGVyIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgeyBEb2N1bWVudEZyYWdtZW50Tm9kZSwgQ29tbWVudE5vZGUsIFRleHROb2RlLCBEb2N1bWVudFR5cGVOb2RlLCBFbGVtZW50Tm9kZSwgQXR0ck5vZGUgfSBmcm9tICcuLi9jb3JlJztcblxudXRpbHMuaW5oZXJpdChIdG1sUGFyc2VyLCBQYXJzZXIpO1xuZnVuY3Rpb24gSHRtbFBhcnNlcihsZXhlciwgb3B0aW9ucykge1xuICAgIEh0bWxQYXJzZXIuc3VwZXIuY2FsbCh0aGlzLCBsZXhlciwgb3B0aW9ucyk7XG59XG5cbkh0bWxQYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XG5cbiAgICB2YXIgZmFyZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudE5vZGUoKTtcbiAgICB2YXIgZG9jdHlwZSwgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi5kb2N0eXBlKSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkb2N0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3R5cGUgPSB0aGlzLmRvY3R5cGUoKTtcbiAgICAgICAgICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZChkb2N0eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgb25seSBhbGxvdyBvbmVcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgaXMgbm90IGFsbG93ZWRcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IENvbW1lbnROb2RlKCk7XG4gICAgICAgICAgICBjb21tZW50Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKGNvbW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xuICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVGV4dE5vZGUoKTtcbiAgICAgICAgICAgIHRleHQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGZhcmdtZW50LiRwdXNoQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcbiAgICAgICAgICAgIGZhcmdtZW50LiRwdXNoQ2hpbGQodGhpcy5lbGVtZW50KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiaW1wb3NzaWJsZVwiLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmYXJnbWVudC4kYnVpbGRTaWJsaW5nKCk7XG5cbiAgICByZXR1cm4gZmFyZ21lbnQuY2hpbGROb2Rlcztcbn07XG5cbkh0bWxQYXJzZXIucHJvdG90eXBlLmRvY3R5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5uZXh0KCk7XG4gICAgdmFyIGRvY1R5cGUgPSBuZXcgRG9jdW1lbnRUeXBlTm9kZSgpO1xuICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgZG9jVHlwZS5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzKGRvY1R5cGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgZG9jVHlwZS5jaGlsZE5vZGVzLnB1c2goYXR0cik7XG4gICAgfSk7XG5cbiAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY1R5cGU7XG59O1xuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5lbGVtZW50ID0gZnVuY3Rpb24gKHApIHtcbiAgICB0aGlzLm5leHQoKTtcbiAgICB2YXIgZWxlID0gbmV3IEVsZW1lbnROb2RlKCk7XG4gICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICBlbGUubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgZWxlLiRwdXNoQXR0cmlidXRlKGF0dHIpO1xuICAgIH0pO1xuXG4gICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICBlbGUuc2VsZkNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5jaGlsZEVsZW1lbnRzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBlbGUuJHB1c2hDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICB9XG5cbiAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4gJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09IHRva2VuLnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBlbGU7XG59O1xuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5jaGlsZEVsZW1lbnRzID0gZnVuY3Rpb24gKHApIHtcbiAgICB2YXIgZWxlcyA9IFtdO1xuXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XG4gICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBDb21tZW50Tm9kZSgpO1xuICAgICAgICAgICAgY29tbWVudC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgZWxlcy5wdXNoKGNvbW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xuICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVGV4dE5vZGUoKTtcbiAgICAgICAgICAgIHRleHQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGVsZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xuICAgICAgICAgICAgZWxlcy5wdXNoKHRoaXMuZWxlbWVudChwKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZXM7XG59O1xuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5hdHRycyA9IGZ1bmN0aW9uIChwKSB7XG4gICAgdmFyIGF0dHJzID0gW107XG5cbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXR0ciA9IG5ldyBBdHRyTm9kZSgpO1xuXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBhdHRyLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGF0dHIub3JpZ2luID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5lcXVhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmNvbnN0YW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHIubm9kZVZhbHVlID0gdG9rZW4udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhdHRycy5wdXNoKGF0dHIpO1xuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbn07XG5cbkh0bWxQYXJzZXIucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4ge307XG59O1xuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5kZXgrKztcbn07XG5cbmV4cG9ydCB7IEh0bWxQYXJzZXIgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgeyBIdG1sTGV4ZXIgfSBmcm9tICcuL2h0bWwtbGV4ZXInO1xuaW1wb3J0IHsgSHRtbFBhcnNlciB9IGZyb20gJy4vaHRtbC1wYXJzZXInO1xuXG52YXIgcGFyc2VPcHRpb25zID0ge1xuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlOiBmYWxzZSxcbiAgICBpc0lkZW50aWZpZXJTdGFydDogZmFsc2UsXG4gICAgbGl0ZXJhbHM6IHtcbiAgICAgICAgZmFsc2U6IGZhbHNlLFxuICAgICAgICBudWxsOiBudWxsLFxuICAgICAgICB0cnVlOiB0cnVlLFxuICAgICAgICB1bmRlZmluZWQ6IHVuZGVmaW5lZFxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHBhcnNlKGh0bWwpIHtcbiAgICB2YXIgbGV4ZXIgPSBuZXcgSHRtbExleGVyKHBhcnNlT3B0aW9ucyk7XG4gICAgdmFyIHBhcnNlciA9IG5ldyBIdG1sUGFyc2VyKGxleGVyLCBwYXJzZU9wdGlvbnMpO1xuICAgIHJldHVybiBwYXJzZXIucGFyc2UoaHRtbCk7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGUoaHRtbCwgb3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGdldEVtYmVkVHBsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zQ29tcG9uZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUNvbXBvbmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zRGlyZWN0aXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZURpcmVjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXR0aW5ncyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBvcHRpb25zKSxcbiAgICAgICAgYXN0Tm9kZXMgPSBwYXJzZShodG1sKTtcblxuICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcbiAgICAgICAgYXN0Tm9kZS5jb21waWxlKHNldHRpbmdzKTtcbiAgICB9KTtcbiAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XG4gICAgICAgIGFzdE5vZGUubm90aWZ5Q29tcGlsZWQoc2V0dGluZ3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzY29wZSkge1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAgICAgc2NvcGUuJCRjaGlsZEVsZW1lbnRzID0gYXN0Tm9kZXM7XG5cbiAgICAgICAgYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoYXN0Tm9kZSkge1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYXN0Tm9kZS5saW5rKHNjb3BlKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XG4gICAgICAgICAgICBhc3ROb2RlLm5vdGlmeUxpbmtlZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZShleHAsIHNjb3BlLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5jcmVhdGVGaWx0ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlRmlsdGVyKG5hbWUpO1xuICAgIH07XG4gICAgaWYgKG9wdGlvbnMuY29sbGVjdE1lbWJlcnMpIHtcbiAgICAgICAgb3B0aW9ucy5tZW1iZXJzID0gW107XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUV4cChleHApLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBwYXJzZUV4cChleHApIHtcbiAgICBpZiAoZXhwID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV4cCA9IGV4cC50cmltKCk7XG5cbiAgICBpZiAoZXhwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXhwID0gZXhwLnJlcGxhY2UoJyZndDsnLCAnPicpLnJlcGxhY2UoJyZsdDsnLCAnPCcpO1xuXG4gICAgdmFyIGxleGVyID0gbmV3IExleGVyKHBhcnNlT3B0aW9ucyk7XG4gICAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIobGV4ZXIsIHBhcnNlT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGV4cCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXNzaWdubWVudChleHAsIHNjb3BlLCBvcHRpb25zKSB7XG4gICAgdmFyIGFzdCA9IHBhcnNlRXhwKGV4cCk7XG4gICAgdmFyIG1lbWJlckV4cCA9IGFzdC5nZXRNZW1iZXJFeHByZXNzaW9uKCk7XG5cbiAgICBpZiAobWVtYmVyRXhwID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGV4cCArICdpcyBub3QgdmFsaWQgbWVtYmVyIGV4cHJlc3Npb24nKTtcbiAgICB9XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIG9wdGlvbnMuY3JlYXRlRmlsdGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGluamVjdG9yLmNyZWF0ZUZpbHRlcihuYW1lKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2JqOiBtZW1iZXJFeHAub2JqZWN0LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMsIHt9LCBzY29wZSksXG4gICAgICAgIHByb3A6IG1lbWJlckV4cC5wcm9wZXJ0eS5jb21waWxlKHNjb3BlLCBvcHRpb25zLCB7fSwgc2NvcGUpXG4gICAgfVxufVxuXG5leHBvcnQgeyBjb21waWxlLCBjb21wdXRlLCBwYXJzZSwgcGFyc2VFeHAsIHBhcnNlQXNzaWdubWVudCB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuXG52YXIgT1BFUkFUT1JTID0ge307XG52YXIgb3BlcmF0b3JUZXh0ID0gJysgLSAqIC8gJSA9PT0gIT09ID09ICE9IDwgPiA8PSA+PSAmJiB8fCAhID0gfCc7XG52YXIgRVNDQVBFID0geyAnbic6ICdcXG4nLCAnZic6ICdcXGYnLCAncic6ICdcXHInLCAndCc6ICdcXHQnLCAndic6ICdcXHYnLCAnXFwnJzogJ1xcJycsICdcIic6ICdcIicgfTtcblxub3BlcmF0b3JUZXh0LnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICBPUEVSQVRPUlNbb3BlcmF0b3JdID0gdHJ1ZTtcbn0pO1xuXG5mdW5jdGlvbiBMZXhlcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn1cblxuTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICcuJyAmJiB0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkTnVtYmVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyhjaCwgJygpe31bXS4sOzo/JykpIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogY2ggfSk7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgY2gyID0gY2ggKyB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIHZhciBjaDMgPSBjaDIgKyB0aGlzLnBlZWsoMik7XG4gICAgICAgICAgICB2YXIgb3AxID0gT1BFUkFUT1JTW2NoXTtcbiAgICAgICAgICAgIHZhciBvcDIgPSBPUEVSQVRPUlNbY2gyXTtcbiAgICAgICAgICAgIHZhciBvcDMgPSBPUEVSQVRPUlNbY2gzXTtcbiAgICAgICAgICAgIGlmIChvcDEgfHwgb3AyIHx8IG9wMykge1xuICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IG9wMyA/IGNoMyA6IChvcDIgPyBjaDIgOiBjaCk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiB0b2tlbiwgb3BlcmF0b3I6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSB0b2tlbi5sZW5ndGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmlzID0gZnVuY3Rpb24gKGNoLCBjaGFycykge1xuICAgIHJldHVybiBjaGFycy5pbmRleE9mKGNoKSAhPT0gLTE7XG59O1xuXG5MZXhlci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uIChpKSB7XG4gICAgdmFyIG51bSA9IGkgfHwgMTtcbiAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPCB0aGlzLnRleHQubGVuZ3RoKSA/IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCArIG51bSkgOiBmYWxzZTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc051bWJlciA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiAoJzAnIDw9IGNoICYmIGNoIDw9ICc5JykgJiYgdHlwZW9mIGNoID09PSAnc3RyaW5nJztcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc1doaXRlc3BhY2UgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICAvLyBJRSB0cmVhdHMgbm9uLWJyZWFraW5nIHNwYWNlIGFzIFxcdTAwQTBcbiAgICByZXR1cm4gKGNoID09PSAnICcgfHwgY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFx0JyB8fFxuICAgICAgICBjaCA9PT0gJ1xcbicgfHwgY2ggPT09ICdcXHYnIHx8IGNoID09PSAnXFx1MDBBMCcpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmlzSWRlbnRpZmllclN0YXJ0ID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydCA/XG4gICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydChjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcbiAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0ID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XG4gICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcbiAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnKTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc0lkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUgP1xuICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XG4gICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCwgY3ApIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuY29kZVBvaW50QXQgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICBpZiAoY2gubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBjaC5jaGFyQ29kZUF0KDApO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgIHJldHVybiAoY2guY2hhckNvZGVBdCgwKSA8PCAxMCkgKyBjaC5jaGFyQ29kZUF0KDEpIC0gMHgzNUZEQzAwO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnBlZWtNdWx0aWNoYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICB2YXIgcGVlayA9IHRoaXMucGVlaygpO1xuICAgIGlmICghcGVlaykge1xuICAgICAgICByZXR1cm4gY2g7XG4gICAgfVxuICAgIHZhciBjcDEgPSBjaC5jaGFyQ29kZUF0KDApO1xuICAgIHZhciBjcDIgPSBwZWVrLmNoYXJDb2RlQXQoMCk7XG4gICAgaWYgKGNwMSA+PSAweEQ4MDAgJiYgY3AxIDw9IDB4REJGRiAmJiBjcDIgPj0gMHhEQzAwICYmIGNwMiA8PSAweERGRkYpIHtcbiAgICAgICAgcmV0dXJuIGNoICsgcGVlaztcbiAgICB9XG4gICAgcmV0dXJuIGNoO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmlzRXhwT3BlcmF0b3IgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICByZXR1cm4gKGNoID09PSAnLScgfHwgY2ggPT09ICcrJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUudGhyb3dFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgc3RhcnQsIGVuZCkge1xuICAgIGVuZCA9IGVuZCB8fCB0aGlzLmluZGV4O1xuICAgIHZhciBjb2xTdHIgPSAodXRpbHMuaXNEZWZpbmVkKHN0YXJ0KSA/ICdzICcgKyBzdGFydCArICctJyArIHRoaXMuaW5kZXggKyAnIFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyhzdGFydCwgZW5kKSArICddJyA6ICcgJyArIGVuZCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZXhlciBFcnJvcjogJyArIGVycm9yICsgJyBhdCBjb2x1bW4nICsgY29sU3RyICsgJyBpbiBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10uJyk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUucmVhZE51bWJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbnVtYmVyID0gJyc7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdXRpbHMubG93ZXJjYXNlKHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCkpO1xuICAgICAgICBpZiAoY2ggPT09ICcuJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSkge1xuICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBlZWtDaCA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgaWYgKGNoID09PSAnZScgJiYgdGhpcy5pc0V4cE9wZXJhdG9yKHBlZWtDaCkpIHtcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcbiAgICAgICAgICAgICAgICBwZWVrQ2ggJiYgdGhpcy5pc051bWJlcihwZWVrQ2gpICYmXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICghcGVla0NoIHx8ICF0aGlzLmlzTnVtYmVyKHBlZWtDaCkpICYmXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCBleHBvbmVudCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgfVxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgIHRleHQ6IG51bWJlcixcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIHZhbHVlOiBOdW1iZXIobnVtYmVyKVxuICAgIH0pO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnJlYWRJZGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIHRoaXMuaW5kZXggKz0gdGhpcy5wZWVrTXVsdGljaGFyKCkubGVuZ3RoO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnBlZWtNdWx0aWNoYXIoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCArPSBjaC5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgIHRleHQ6IHRoaXMudGV4dC5zbGljZShzdGFydCwgdGhpcy5pbmRleCksXG4gICAgICAgIGlkZW50aWZpZXI6IHRydWVcbiAgICB9KTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nID0gZnVuY3Rpb24gKHF1b3RlKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB0aGlzLmluZGV4Kys7XG4gICAgdmFyIHN0cmluZyA9ICcnO1xuICAgIHZhciByYXdTdHJpbmcgPSBxdW90ZTtcbiAgICB2YXIgZXNjYXBlID0gZmFsc2U7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHJhd1N0cmluZyArPSBjaDtcbiAgICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICAgICAgaWYgKGNoID09PSAndScpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGV4ID0gdGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDUpO1xuICAgICAgICAgICAgICAgIGlmICghaGV4Lm1hdGNoKC9bXFxkYS1mXXs0fS9pKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1JyArIGhleCArICddJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gNDtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXgsIDE2KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByZXAgPSBFU0NBUEVbY2hdO1xuICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZyArIChyZXAgfHwgY2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXFxcJykge1xuICAgICAgICAgICAgZXNjYXBlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gcXVvdGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbiAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBxdW90ZScsIHN0YXJ0KTtcbn07XG5cbmV4cG9ydCB7IExleGVyIH07IiwiY2xhc3MgTnVsbE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE51bGxPYmplY3QgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7aXNGaWx0ZXJ9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHtOdWxsT2JqZWN0fSBmcm9tICcuL251bGwtb2JqZWN0JztcblxudmFyIEFTVCA9IHt9O1xuQVNULlByb2dyYW0gPSAnUHJvZ3JhbSc7XG5BU1QuRXhwcmVzc2lvblN0YXRlbWVudCA9ICdFeHByZXNzaW9uU3RhdGVtZW50JztcbkFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbiA9ICdBc3NpZ25tZW50RXhwcmVzc2lvbic7XG5BU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uID0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbic7XG5BU1QuTG9naWNhbEV4cHJlc3Npb24gPSAnTG9naWNhbEV4cHJlc3Npb24nO1xuQVNULkJpbmFyeUV4cHJlc3Npb24gPSAnQmluYXJ5RXhwcmVzc2lvbic7XG5BU1QuVW5hcnlFeHByZXNzaW9uID0gJ1VuYXJ5RXhwcmVzc2lvbic7XG5BU1QuQ2FsbEV4cHJlc3Npb24gPSAnQ2FsbEV4cHJlc3Npb24nO1xuQVNULk1lbWJlckV4cHJlc3Npb24gPSAnTWVtYmVyRXhwcmVzc2lvbic7XG5BU1QuSWRlbnRpZmllciA9ICdJZGVudGlmaWVyJztcbkFTVC5MaXRlcmFsID0gJ0xpdGVyYWwnO1xuQVNULkFycmF5RXhwcmVzc2lvbiA9ICdBcnJheUV4cHJlc3Npb24nO1xuQVNULlByb3BlcnR5ID0gJ1Byb3BlcnR5JztcbkFTVC5PYmplY3RFeHByZXNzaW9uID0gJ09iamVjdEV4cHJlc3Npb24nO1xuXG5mdW5jdGlvbiBBc3ROb2RlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xufVxuXG5Bc3ROb2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbn07XG5cbkFzdE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGNvbnRleHQpO1xuICAgIH0pO1xufTtcblxuLy8gaGFzIGNvbmRpdGlvbiBvciBjYWxsIGV4cHJlc3Npb25cbkFzdE5vZGUucHJvdG90eXBlLmhhc0NDID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLmhhc0NDKCk7XG4gICAgfSk7XG59O1xuXG51dGlscy5pbmhlcml0KFByb2dyYW1Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIFByb2dyYW1Ob2RlKCkge1xuICAgIFByb2dyYW1Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlByb2dyYW0pO1xufVxuXG5Qcm9ncmFtTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLmNoaWxkTm9kZXNbMF0uY29tcGlsZShzY29wZSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgTnVsbE9iamVjdCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuUHJvZ3JhbU5vZGUucHJvdG90eXBlLmdldE1lbWJlckV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1swXS5nZXRNZW1iZXJFeHByZXNzaW9uKCk7XG59O1xuXG51dGlscy5pbmhlcml0KEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCkge1xuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQpO1xufVxuXG5FeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0uY29tcGlsZShzY29wZSwgb3B0aW9ucyB8fCB7fSwgY29udGV4dCk7XG59O1xuXG5FeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5wcm90b3R5cGUuZ2V0TWVtYmVyRXhwcmVzc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG5cbiAgICBpZihjaGlsZCBpbnN0YW5jZW9mIE1lbWJlckV4cHJlc3Npb25Ob2RlKXtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTtcblxudXRpbHMuaW5oZXJpdChBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKGxlZnQsIHJpZ2h0LCBvcGVyYXRvcikge1xuICAgIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbik7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xufVxuXG5Bc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5sZWZ0LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMsIHsgYXNzaWdubWVudExlZnQ6IHRydWUgfSk7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5yaWdodC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcbiAgICB0YXJnZXQub2JqW3RhcmdldC5wcm9wXSA9IHZhbHVlO1xufTtcblxudXRpbHMuaW5oZXJpdChDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUodGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KSB7XG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24pO1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbn1cblxuQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLnRlc3QuY29tcGlsZShzY29wZSwgb3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWx0ZXJuYXRlLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xufTtcblxuLy8gaGFzIGNvbmRpdGlvbiBvciBjYWxsIGV4cHJlc3Npb25cbkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmhhc0NDID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0cnVlO1xufTtcblxudXRpbHMuaW5oZXJpdChMb2dpY2FsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gTG9naWNhbEV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgIExvZ2ljYWxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbik7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xufVxuXG5Mb2dpY2FsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmxlZnQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XG4gICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLnJpZ2h0LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xuXG4gICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJyYmJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3x8JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnV0aWxzLmluaGVyaXQoQmluYXJ5RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gQmluYXJ5RXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgQmluYXJ5RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQmluYXJ5RXhwcmVzc2lvbik7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xufVxuXG5CaW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQ7XG4gICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMubGVmdC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcbiAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMucmlnaHQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XG5cbiAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSArIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICogcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAvIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDwgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDw9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID49IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPT0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnIT0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPT09JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICchPT0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnV0aWxzLmluaGVyaXQoVW5hcnlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBVbmFyeUV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBhcmcpIHtcbiAgICBVbmFyeUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlVuYXJ5RXhwcmVzc2lvbik7XG4gICAgdGhpcy5wcmVmaXggPSB0cnVlO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmFyZyA9IGFyZztcbn1cblxuVW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQsIHZhbHVlID0gdGhpcy5hcmcuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XG5cbiAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IC12YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICchJzpcbiAgICAgICAgICAgIHJlc3VsdCA9ICF2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG51dGlscy5pbmhlcml0KExpdGVyYWxOb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIExpdGVyYWxOb2RlKHZhbHVlKSB7XG4gICAgTGl0ZXJhbE5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuTGl0ZXJhbCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuXG5MaXRlcmFsTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbn07XG5cbkxpdGVyYWxOb2RlLnByb3RvdHlwZS50b1RleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG51dGlscy5pbmhlcml0KENhbGxFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBDYWxsRXhwcmVzc2lvbk5vZGUoY2FsbGVlLCBhcmdzKSB7XG4gICAgQ2FsbEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkNhbGxFeHByZXNzaW9uKTtcbiAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XG59XG5cbkNhbGxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jYWxsZWUuY29tcGlsZShzY29wZSwgb3B0aW9ucywge2NhbGxlZTogdHJ1ZX0pO1xuICAgIHZhciBhcmdWYWx1ZXMgPSB0aGlzLmFyZ3MubWFwKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIGFyZy5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmZpbHRlcikge1xuICAgICAgICB2YXIgZmlsdGVySW5zID0gb3B0aW9ucy5jcmVhdGVGaWx0ZXIoY29udGV4dC5wcm9wKTtcbiAgICAgICAgaWYgKGlzRmlsdGVyKGZpbHRlcklucykpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJJbnMuJGV4ZWN1dGUuYXBwbHkoZmlsdGVySW5zLCBhcmdWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIFwiJyArIGNvbnRleHQucHJvcCArICdcIiBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dC5vYmosIGFyZ1ZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRleHQucHJvcCArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICB9XG59O1xuXG4vLyBoYXMgY29uZGl0aW9uIG9yIGNhbGwgZXhwcmVzc2lvblxuQ2FsbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5oYXNDQyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gIXRoaXMuZmlsdGVyO1xufTtcblxudXRpbHMuaW5oZXJpdChNZW1iZXJFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBNZW1iZXJFeHByZXNzaW9uTm9kZShvYmplY3QsIHByb3BlcnR5LCBjb21wdXRlZCkge1xuICAgIE1lbWJlckV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk1lbWJlckV4cHJlc3Npb24pO1xuICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB0aGlzLmNvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbn1cblxuTWVtYmVyRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICB2YXIgb2JqID0gdGhpcy5vYmplY3QuY29tcGlsZShzY29wZSwgb3B0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAob2JqID09IG51bGwgJiYgdGhpcy5vYmplY3QuYWxsb3dOdWxsKSB7XG4gICAgICAgIG9iaiA9IG5ldyBOdWxsT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29tcHV0ZWQpIHtcbiAgICAgICAgdmFyIHByb3AgPSB0aGlzLnByb3BlcnR5LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMsIGNvbnRleHQpO1xuICAgICAgICBpZiAodXRpbHMuaXNBcnJheShvcHRpb25zLm1lbWJlcnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zLm1lbWJlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBvYmosXG4gICAgICAgICAgICAgICAgdGFyZ2V0S2V5OiB0aGlzLm9iamVjdC50b1RleHQoKSxcbiAgICAgICAgICAgICAgICBrZXk6IHByb3BcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpbcHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHkuY29tcGlsZShvYmosIG9wdGlvbnMsIGNvbnRleHQsIHRoaXMub2JqZWN0KTtcbn07XG5cbk1lbWJlckV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS50b1RleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0LnRvVGV4dCgpICsgJy4nICsgdGhpcy5wcm9wZXJ0eS50b1RleHQoKTtcbn07XG5cbnV0aWxzLmluaGVyaXQoSWRlbnRpZmllck5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gSWRlbnRpZmllck5vZGUobmFtZSkge1xuICAgIElkZW50aWZpZXJOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULklkZW50aWZpZXIpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbn1cblxuSWRlbnRpZmllck5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAob2JqLCBvcHRpb25zLCBjb250ZXh0LCBvYmpOb2RlKSB7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuYXNzaWdubWVudExlZnQgfHwgY29udGV4dC5jYWxsZWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2JqOiBvYmosXG4gICAgICAgICAgICAgICAgcHJvcDogdGhpcy5uYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRleHQucHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gb2JqW3RoaXMubmFtZV07XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheShvcHRpb25zLm1lbWJlcnMpKSB7XG4gICAgICAgIG9wdGlvbnMubWVtYmVycy5wdXNoKHtcbiAgICAgICAgICAgIHRhcmdldDogb2JqLFxuICAgICAgICAgICAgdGFyZ2V0S2V5OiBvYmpOb2RlICE9IG51bGwgPyBvYmpOb2RlLnRvVGV4dCgpIDogbnVsbCxcbiAgICAgICAgICAgIGtleTogdGhpcy5uYW1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBvcHRpb25zLmxvY2Fscykge1xuICAgICAgICByZXN1bHQgPSBvcHRpb25zLmxvY2Fsc1t0aGlzLm5hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5JZGVudGlmaWVyTm9kZS5wcm90b3R5cGUudG9UZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG59O1xuXG51dGlscy5pbmhlcml0KEFycmF5RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gQXJyYXlFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkFycmF5RXhwcmVzc2lvbik7XG59XG5cbnV0aWxzLmluaGVyaXQoUHJvcGVydHlOb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIFByb3BlcnR5Tm9kZSgpIHtcbiAgICBQcm9wZXJ0eU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuUHJvcGVydHkpO1xuICAgIHRoaXMua2luZCA9ICdpbml0JztcbiAgICB0aGlzLmtleSA9IG51bGw7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5jb21wdXRlZCA9IGZhbHNlO1xufVxuXG5Qcm9wZXJ0eU5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IHRoaXMua2V5LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMsIHsgcHJvcGVydHlLZXk6IHRydWUgfSksXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpXG4gICAgfTtcbn07XG5cbnV0aWxzLmluaGVyaXQoT2JqZWN0RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gT2JqZWN0RXhwcmVzc2lvbk5vZGUocHJvcGVydGllcykge1xuICAgIE9iamVjdEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk9iamVjdEV4cHJlc3Npb24pO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG59XG5cbk9iamVjdEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gICAgdGhpcy5wcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdmFyIGRlZiA9IGl0ZW0uY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XG4gICAgICAgIHJlc3VsdFtkZWYua2V5XSA9IGRlZi52YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiBpc0Fzc2lnbmFibGUoYXN0KSB7XG4gICAgcmV0dXJuIGFzdC50eXBlID09PSBBU1QuSWRlbnRpZmllciB8fCBhc3QudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb247XG59XG5cbmZ1bmN0aW9uIFBhcnNlcihsZXhlciwgb3B0aW9ucykge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xufVxuXG5QYXJzZXIucHJvdG90eXBlLnRocm93RXJyb3IgPSBmdW5jdGlvbiAobXNnLCB0b2tlbikge1xuICAgIHRocm93IG5ldyBFcnJvcignU3ludGF4IEVycm9yOiBUb2tlbiBcXCcnICsgdG9rZW4udGV4dCArICdcXCcnICsgbXNnICsgJyBhdCBjb2x1bW4gJyArICh0b2tlbi5pbmRleCArIDEpICtcbiAgICAgICAgJyBvZiB0aGUgZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddIHN0YXJ0aW5nIGF0IFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyh0b2tlbi5pbmRleCkgKyAnXS4nKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xuXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wcm9ncmFtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9ncmFtID0gbmV3IFByb2dyYW1Ob2RlKCk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XG4gICAgICAgICAgICBwcm9ncmFtLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmFtO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUGFyc2VyLnByb3RvdHlwZS5leHByZXNzaW9uU3RhdGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUoKTtcbiAgICBleHAuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJDaGFpbigpKTtcbiAgICByZXR1cm4gZXhwO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5maWx0ZXJDaGFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XG4gICAgICAgIGxlZnQgPSB0aGlzLmZpbHRlcihsZWZ0KTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5hc3NpZ25tZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLnRlcm5hcnkoKTtcbiAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xuICAgICAgICBpZiAoIWlzQXNzaWduYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhc3NpZ24gYSB2YWx1ZSB0byBhIG5vbiBsLXZhbHVlJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSBuZXcgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKHJlc3VsdCwgdGhpcy5hc3NpZ25tZW50KCksICc9Jyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnRlcm5hcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRlc3QgPSB0aGlzLmxvZ2ljYWxPUigpO1xuICAgIHZhciBhbHRlcm5hdGU7XG4gICAgdmFyIGNvbnNlcXVlbnQ7XG4gICAgaWYgKHRoaXMuZXhwZWN0KCc/JykpIHtcbiAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIGlmICh0aGlzLmNvbnN1bWUoJzonKSkge1xuICAgICAgICAgICAgY29uc2VxdWVudCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRlc3Q7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmxvZ2ljYWxPUiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfHwnKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5sb2dpY2FsQU5EID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWZ0ID0gdGhpcy5lcXVhbGl0eSgpO1xuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnJiYnKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnJiYnLCBsZWZ0LCB0aGlzLmVxdWFsaXR5KCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuZXF1YWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLnJlbGF0aW9uYWwoKTtcbiAgICB2YXIgdG9rZW47XG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc9PScsICchPScsICc9PT0nLCAnIT09JykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5yZWxhdGlvbmFsKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucmVsYXRpb25hbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMuYWRkaXRpdmUoKTtcbiAgICB2YXIgdG9rZW47XG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLmFkZGl0aXZlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuYWRkaXRpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLm11bHRpcGxpY2F0aXZlKCk7XG4gICAgdmFyIHRva2VuO1xuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm11bHRpcGxpY2F0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWZ0ID0gdGhpcy51bmFyeSgpO1xuICAgIHZhciB0b2tlbjtcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJyonLCAnLycsICclJykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy51bmFyeSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnVuYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0b2tlbjtcbiAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XG4gICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcbiAgICB9XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnByaW1hcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByaW1hcnk7XG4gICAgaWYgKHRoaXMuZXhwZWN0KCcoJykpIHtcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuZmlsdGVyQ2hhaW4oKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgnWycpKSB7XG4gICAgICAgIHByaW1hcnkgPSB0aGlzLmFycmF5RGVjbGFyYXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCd7JykpIHtcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMub2JqZWN0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubGl0ZXJhbHMuaGFzT3duUHJvcGVydHkodGhpcy5wZWVrKCkudGV4dCkpIHtcbiAgICAgICAgcHJpbWFyeSA9IG5ldyBMaXRlcmFsTm9kZSh0aGlzLm9wdGlvbnMubGl0ZXJhbHNbdGhpcy5jb25zdW1lKCkudGV4dF0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICBwcmltYXJ5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICBwcmltYXJ5ID0gdGhpcy5jb25zdGFudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignbm90IGEgcHJpbWFyeSBleHByZXNzaW9uJywgdGhpcy5wZWVrKCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBlZWsoJz8nKSkge1xuICAgICAgICBwcmltYXJ5LmFsbG93TnVsbCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29uc3VtZSgnPycpO1xuICAgIH1cblxuICAgIHZhciBuZXh0O1xuICAgIHdoaWxlICgobmV4dCA9IHRoaXMuZXhwZWN0KCcoJywgJ1snLCAnLicpKSkge1xuICAgICAgICBpZiAobmV4dC50ZXh0ID09PSAnKCcpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMucGFyc2VBcmd1bWVudHMoKSk7XG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICdbJykge1xuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmV4cHJlc3Npb24oKSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJz8nKSkge1xuICAgICAgICAgICAgICAgIHByaW1hcnkuYWxsb3dOdWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJz8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICcuJykge1xuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmlkZW50aWZpZXIoKSwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnPycpKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeS5hbGxvd051bGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnPycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJTVBPU1NJQkxFJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByaW1hcnk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChiYXNlRXhwcmVzc2lvbikge1xuICAgIHZhciBhcmdzID0gW2Jhc2VFeHByZXNzaW9uXSwgaWRlbnRpZmllcnMgPSBbdGhpcy5pZGVudGlmaWVyKCldO1xuXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcuJykpIHtcbiAgICAgICAgaWRlbnRpZmllcnMucHVzaCh0aGlzLmlkZW50aWZpZXIoKSk7XG4gICAgfVxuXG4gICAgLy8gcGx1cyBuYW1lc3BhY2VcbiAgICB2YXIgZW50aXJlTmFtZSA9IGlkZW50aWZpZXJzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5uYW1lO1xuICAgIH0pLmpvaW4oJy4nKTtcblxuICAgIHZhciByZXN1bHQgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKG5ldyBJZGVudGlmaWVyTm9kZShlbnRpcmVOYW1lKSwgYXJncyk7XG5cbiAgICByZXN1bHQuZmlsdGVyID0gdHJ1ZTtcblxuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnOicpKSB7XG4gICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucGFyc2VBcmd1bWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnKScpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgIH1cbiAgICByZXR1cm4gYXJncztcbn07XG5cblBhcnNlci5wcm90b3R5cGUuaWRlbnRpZmllciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmNvbnN1bWUoKTtcbiAgICBpZiAoIXRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBub3QgYSB2YWxpZCBpZGVudGlmaWVyJywgdG9rZW4pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IElkZW50aWZpZXJOb2RlKHRva2VuLnRleHQpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5jb25zdGFudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPIGNoZWNrIHRoYXQgaXQgaXMgYSBjb25zdGFudFxuICAgIHJldHVybiBuZXcgTGl0ZXJhbE5vZGUodGhpcy5jb25zdW1lKCkudmFsdWUpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5hcnJheURlY2xhcmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnIgPSBuZXcgQXJyYXlFeHByZXNzaW9uTm9kZSgpO1xuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICddJykge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCddJykpIHtcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnIuYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uKCkpO1xuICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICB9XG4gICAgdGhpcy5jb25zdW1lKCddJyk7XG5cbiAgICByZXR1cm4gYXJyO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5vYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBbXSwgcHJvcGVydHk7XG4gICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ30nKSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ30nKSkge1xuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5Tm9kZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5jb25zdGFudCgpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnOicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gcHJvcGVydHkua2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCdbJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ1snKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpbnZhbGlkIGtleScsIHRoaXMucGVlaygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgIH1cbiAgICB0aGlzLmNvbnN1bWUoJ30nKTtcblxuICAgIHJldHVybiBuZXcgT2JqZWN0RXhwcmVzc2lvbk5vZGUocHJvcGVydGllcyk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmNvbnN1bWUgPSBmdW5jdGlvbiAoZTEpIHtcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XG4gICAgfVxuXG4gICAgdmFyIHRva2VuID0gdGhpcy5leHBlY3QoZTEpO1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyB1bmV4cGVjdGVkLCBleHBlY3RpbmcgWycgKyBlMSArICddJywgdGhpcy5wZWVrKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW47XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnBlZWtUb2tlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRva2Vuc1swXTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uIChlMSwgZTIsIGUzLCBlNCkge1xuICAgIHJldHVybiB0aGlzLnBlZWtBaGVhZCgwLCBlMSwgZTIsIGUzLCBlNCk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnBlZWtBaGVhZCA9IGZ1bmN0aW9uIChpLCBlMSwgZTIsIGUzLCBlNCkge1xuICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiBpKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW5zW2ldO1xuICAgICAgICB2YXIgdCA9IHRva2VuLnRleHQ7XG4gICAgICAgIGlmICh0ID09PSBlMSB8fCB0ID09PSBlMiB8fCB0ID09PSBlMyB8fCB0ID09PSBlNCB8fFxuICAgICAgICAgICAgKCFlMSAmJiAhZTIgJiYgIWUzICYmICFlNCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmV4cGVjdCA9IGZ1bmN0aW9uIChlMSwgZTIsIGUzLCBlNCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMucGVlayhlMSwgZTIsIGUzLCBlNCk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHsgUGFyc2VyIH07IiwiZXhwb3J0ICogZnJvbSAnLi90ZW1wbGF0ZS1jYWNoZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwtb3B0aW9ucyc7IiwiaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3ZpZXcvc2VydmljZSc7XHJcbmltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9kZWNvcmF0b3Ivc2VydmljZSc7XHJcblxyXG5Ac2VydmljZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnJG1vZGVsT3B0aW9ucydcclxufSlcclxuY2xhc3MgTW9kZWxPcHRpb25zU2VydmljZSBleHRlbmRzIFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNzc0NsYXNzID0ge1xyXG4gICAgICAgICAgICBwcmlzdGluZTogJ24tcHJpc3RpbmUnLFxyXG4gICAgICAgICAgICBkaXJ0eTogJ24tZGlydHknLFxyXG4gICAgICAgICAgICB2YWxpZDogJ24tdmFsaWQnLFxyXG4gICAgICAgICAgICBpbnZhbGlkOiAnbi1pbnZhbGlkJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3ZpZXcvc2VydmljZSc7XG5pbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL3NlcnZpY2UnO1xuXG5Ac2VydmljZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICckdGVtcGxhdGVDYWNoZSdcbn0pXG5jbGFzcyBUZW1wbGF0ZUNhY2hlU2VydmljZSBleHRlbmRzIFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRwbENhY2hlID0ge307XG4gICAgICAgIHRoaXMucHJvbWlzZUNhY2hlID0ge307XG4gICAgfVxuXG4gICAgZ2V0VHBsQnlVcmwodXJsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy50cGxDYWNoZVt1cmxdKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNlbGYudHBsQ2FjaGVbdXJsXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5wcm9taXNlQ2FjaGVbdXJsXSkge1xuICAgICAgICAgICAgdGhpcy5wcm9taXNlQ2FjaGVbdXJsXSA9IGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIHNlbGYucHJvbWlzZUNhY2hlW3VybF0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGYudHBsQ2FjaGVbdXJsXSA9IHJlcy5kYXRhIHx8ICcnO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRwbENhY2hlW3VybF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2VDYWNoZVt1cmxdO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcImFjY29yZGlvblxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuLXJlcGVhdD1cXFwiZ3JvdXAgaW4gY29uZmlnLmdyb3Vwc1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCIgQGNsaWNrPVxcXCJ0b2dnbGUoZ3JvdXApXFxcIiAqbi1iaW5kPVxcXCJncm91cC50aXRsZVxcXCI+PC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzZSBzaG93XFxcIiAqbi1jb2xsYXBzZT1cXFwiZ3JvdXAuY29sbGFwc2VkXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiAqbi1yZXBlYXQ9XFxcIml0ZW0gaW4gZ3JvdXAuaXRlbXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XFxcIml0ZW0uZmllbGRcXFwiIGNsYXNzPVxcXCJjb2wtZm9ybS1sYWJlbC1zbVxcXCIgKm4tYmluZD1cXFwiaXRlbS5sYWJlbFxcXCI+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCA6dHlwZT1cXFwiaXRlbS50eXBlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSB7eyBpc1ZhbGlkKGl0ZW0pPydpcy12YWxpZCc6J2lzLWludmFsaWQnIH19XFxcIiA6bmFtZT1cXFwiaXRlbS5maWVsZFxcXCIgKm4tbW9kZWw9XFxcImVudGl0eVtpdGVtLmZpZWxkXVxcXCIgKm4tdmFsaWRhdGU9XFxcIml0ZW0udmFsaWRhdG9yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcXFwiICpuLXNob3c9XFxcIml0ZW0uaGVscCAmJiAhZ2V0RmVlZGJhY2soaXRlbSlcXFwiICpuLWJpbmQ9XFxcIml0ZW0uaGVscFxcXCI+PC9zbWFsbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInt7IGlzVmFsaWQoaXRlbSk/J3ZhbGlkLWZlZWRiYWNrJzonaW52YWxpZC1mZWVkYmFjayd9fVxcXCIgKm4tYmluZD1cXFwiZ2V0RmVlZGJhY2soaXRlbSlcXFwiICpuLXNob3c9XFxcImdldEZlZWRiYWNrKGl0ZW0pXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCIiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vdmlldy9jb21wb25lbnQnO1xuaW1wb3J0IHtjb21wb25lbnR9IGZyb20gJy4uLy4uL2RlY29yYXRvci9jb21wb25lbnQnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZm9ybS5odG1sJztcblxuQGNvbXBvbmVudCh7XG4gICAgbmFtZXNwYWNlOiAnc2luZS51aScsXG4gICAgc2VsZWN0b3I6ICduLWZvcm0nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufSlcbmNsYXNzIEZvcm1Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVudGl0eSA9IG51bGw7XG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgIHZhbGlkYXRvcjoge31cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0b2dnbGUoZ3JvdXApIHtcbiAgICAgICAgdmFyIHByb3h5ID0gZ3JvdXAudG9Qcm94eSgpO1xuICAgICAgICBwcm94eS5jb2xsYXBzZWQgPSAhZ3JvdXAuY29sbGFwc2VkO1xuICAgIH1cblxuICAgIGlzVmFsaWQoaXRlbSkge1xuICAgICAgICBpZiAodGhpc1tpdGVtLmZpZWxkXSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tpdGVtLmZpZWxkXS4kdmFsaWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRGZWVkYmFjayhpdGVtKSB7XG4gICAgICAgIGlmICh0aGlzW2l0ZW0uZmllbGRdICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2l0ZW0uZmllbGRdLiRmZWVkYmFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2Zvcm0nO1xyXG5leHBvcnQgKiBmcm9tICcuL21vZGFsJztcclxuZXhwb3J0ICogZnJvbSAnLi9wcm9ncmVzcyc7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiICpuLW1vZGFsLWZhZGU9XFxcInZpc2libGVcXFwiICpuLW5hbWU9XFxcInJvb3RFbGVtZW50XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiICpuLWJpbmQtY21wPVxcXCJ2aWV3Q29uZmlnXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTxoNSBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPk1vZGFsIFRpdGxlPC9oNT4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuPiZ0aW1lczs8L3NwYW4+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08L2J1dHRvbj4tLT5cXHJcXG4gICAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPi0tPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tLi4uLS0+XFxyXFxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcclxcblxcclxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPi0tPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlNhdmUgY2hhbmdlczwvYnV0dG9uPi0tPlxcclxcbiAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuLi8uLi92aWV3L2NvbXBvbmVudCc7XHJcbmltcG9ydCB7Y29tcG9uZW50fSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvY29tcG9uZW50JztcclxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbW9kYWwuaHRtbCc7XHJcblxyXG5AY29tcG9uZW50KHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUudWknLFxyXG4gICAgc2VsZWN0b3I6ICduLW1vZGFsJyxcclxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxyXG59KVxyXG5jbGFzcyBNb2RhbENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudmlld0NvbmZpZyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93KGNtcCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnZpZXdDb25maWcgPSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogY21wLFxyXG4gICAgICAgICAgICBvbkluaXQ6IGZ1bmN0aW9uICh2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICB2aWV3LiRjbG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLiRtb3VudChkb2N1bWVudC5ib2R5LCB7XHJcbiAgICAgICAgICAgIGFwcGVuZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAgICAgbW9kYWxTaG93ID0gdGhpcy5yb290RWxlbWVudC5nZXREaXJlY3RpdmUoJ24tbW9kYWwtZmFkZScpO1xyXG5cclxuICAgICAgICB0aGlzLiRwcm94eS52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIG1vZGFsU2hvdy51bmxvYWQub24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLiRkZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE1vZGFsQ29tcG9uZW50IH0iLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcInByb2dyZXNzXFxcIiAqbi1zdHlsZT1cXFwiY3NzXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3MtYmFyXFxcIiAqbi1zdHlsZT1cXFwiYmFyQ3NzXFxcIiAqbi1iaW5kPVxcXCJsYWJlbFxcXCI+PC9kaXY+XFxyXFxuPC9kaXY+XCIiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vdmlldy9jb21wb25lbnQnO1xyXG5pbXBvcnQge2NvbXBvbmVudH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2NvbXBvbmVudCc7XHJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3Byb2dyZXNzLmh0bWwnO1xyXG5cclxuQGNvbXBvbmVudCh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lLnVpJyxcclxuICAgIHNlbGVjdG9yOiAnbi1wcm9ncmVzcycsXHJcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcclxufSlcclxuY2xhc3MgUHJvZ3Jlc3NDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgZ2V0IHBlcmNlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy52YWx1ZSAqIDEwMCAvIHRoaXMubWF4VmFsdWUsIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYWJlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wZXJjZW50ICsgJyUnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IDEwMDtcclxuICAgICAgICB0aGlzLmNzcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYmFyQ3NzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJBdHRyQ2hhbmdlKHByb3AsIHZhbHVlKXtcclxuICAgICAgICBpZihwcm9wID09PSAndmFsdWUnKXtcclxuICAgICAgICAgICAgdGhpcy5iYXJDc3MudG9Qcm94eSgpLndpZHRoID0gdGhpcy5wZXJjZW50ICsgJyUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSBcIi4uLy4uL3ZpZXcvZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tIFwiLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZVwiO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lLnVpJyxcbiAgICBzZWxlY3RvcjogJ24tY29sbGFwc2UnXG59KVxuY2xhc3MgQ29sbGFwc2VEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gNDAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9ICcnO1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSAnJztcbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLmhlaWdodDtcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIXRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuJGh0bWxFbGVtZW50LmNsaWVudEhlaWdodCArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMSArICdweCc7XG5cbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYudGltZW91dElkID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYuJGh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IHNlbGYuaGVpZ2h0O1xuICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICdoZWlnaHQgJyArIHNlbGYuZHVyYXRpb24gKyAnbXMnO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblVubG9hZCgpIHtcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmNhbmNlbFRpbWVvdXQoKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsVGltZW91dCgpO1xuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwICsgJ3B4JztcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5O1xuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICBjYW5jZWxUaW1lb3V0KCkge1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0SWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2NvbGxhcHNlJztcclxuZXhwb3J0ICogZnJvbSAnLi92YWxpZGF0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbW9kYWwtZmFkZSc7IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSBcIi4uLy4uL3ZpZXcvZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gXCIuLi8uLi91dGlsaXR5L21lc3NhZ2VcIjtcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZS51aScsXHJcbiAgICBzZWxlY3RvcjogJ24tbW9kYWwtZmFkZSdcclxufSlcclxuY2xhc3MgTW9kYWxGYWRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudW5sb2FkID0gbmV3IE1lc3NlbmdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQmFja2Ryb3AoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYudGltZW91dElkID0gbnVsbDtcclxuICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICBzZWxmLmJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblVubG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZU1vZGFsKCk7XHJcbiAgICAgICAgdGhpcy51bmxvYWQuZmlyZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY2FuY2VsVGltZW91dCgpO1xyXG4gICAgICAgIHRoaXMuaGlkZSh0cnVlKTtcclxuICAgICAgICB0aGlzLnJlbW92ZU1vZGFsKCk7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQmFja2Ryb3AoKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYmFja2Ryb3AnKTtcclxuICAgICAgICB0aGlzLmJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVNb2RhbCgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmFja2Ryb3AucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5iYWNrZHJvcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy4kYmluZGluZy5jb21wdXRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLmNhbmNlbFRpbWVvdXQoKTtcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYmFja2Ryb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoZGVzdHJveSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5jYW5jZWxUaW1lb3V0KCk7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgIHRoaXMuYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cclxuICAgICAgICBpZiAoIWRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuJGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxUaW1lb3V0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRJZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tIFwiLi4vLi4vdmlldy9kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSBcIi4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmVcIjtcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZS51aScsXHJcbiAgICBzZWxlY3RvcjogJ24tdmFsaWRhdGUnXHJcbn0pXHJcbmNsYXNzIFZhbGlkYXRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21waWxlKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgbk1vZGVsID0gdGhpcy4kZWxlbWVudC5nZXREaXJlY3RpdmUoJ24tbW9kZWwnKTtcclxuXHJcbiAgICAgICAgaWYgKCFuTW9kZWwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlIFwibi1tb2RlbFwiJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuTW9kZWwuJHZhbGlkYXRvcnMucHVzaChmdW5jdGlvbiAobW9kZWxWYWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsaWRhdG9yID0gc2VsZi4kYmluZGluZy5jb21wdXRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB2YWxpZGF0b3IuY2FsbChzZWxmLCBtb2RlbFZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG5Nb2RlbC5zZXRWYWxpZGl0eShyZXN1bHQudmFsaWQsIHJlc3VsdC5mZWVkYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuTW9kZWwuc2V0VmFsaWRpdHkodHJ1ZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7IiwiZXhwb3J0ICogZnJvbSAnLi9tb2RhbC1zZXJ2aWNlJztcclxuIiwiaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uLy4uL3ZpZXcvc2VydmljZSc7XHJcbmltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3Ivc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50L21vZGFsJztcclxuXHJcbkBzZXJ2aWNlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUudWknLFxyXG4gICAgc2VsZWN0b3I6ICdtb2RhbFNlcnZpY2UnXHJcbn0pXHJcbmNsYXNzIE1vZGFsU2VydmljZSBleHRlbmRzIFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KGNvbnRlbnQpIHtcclxuICAgICAgICBuZXcgTW9kYWxDb21wb25lbnQoKS5zaG93KGNvbnRlbnQpO1xyXG4gICAgfVxyXG59IiwiXG5mdW5jdGlvbiBnZXRDaGlsZE5vZGVzKG5vZGUpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZS5jaGlsZE5vZGVzLCAwKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDaGlsZE5vZGVzKG5vZGUpIHtcbiAgICBnZXRDaGlsZE5vZGVzKG5vZGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlTm9kZShyZWZOb2RlLCBuZXdOb2RlKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSByZWZOb2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZOb2RlKTtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZWZOb2RlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGVCZXR3ZWVuKGJlZ2luTm9kZSwgZW5kTm9kZSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gYmVnaW5Ob2RlLnBhcmVudE5vZGU7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBnZXRDaGlsZE5vZGVzKHBhcmVudE5vZGUpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nID09PSBiZWdpbk5vZGUgJiYgY2hpbGQgIT09IGVuZE5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyA9PT0gZW5kTm9kZSAmJiBjaGlsZCAhPT0gYmVnaW5Ob2RlKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBpbnNlcnROb2RlQWZ0ZXIocmVmTm9kZSwgbmV3Tm9kZSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHBhcmVudE5vZGUubGFzdENoaWxkID09PSByZWZOb2RlKSB7XG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmTm9kZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnRMb2FkZWQoZWxlLCBjYWxsYmFjaykge1xuICAgIHZhciBjYW5jZWxUb2tlbiA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gcXVlcnkoKSB7XG4gICAgICAgIGlmIChjYW5jZWxUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZS5jbGllbnRXaWR0aCA+IDAgJiYgZWxlLmNsaWVudEhlaWdodCA+IDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbmNlbFRva2VuID0gdHJ1ZTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnRVbmxvYWRlZChlbGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGNhbmNlbFRva2VuID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBxdWVyeSgpIHtcbiAgICAgICAgaWYgKGNhbmNlbFRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlLmNsaWVudFdpZHRoID09PSAwICYmIGVsZS5jbGllbnRIZWlnaHQgPT0gMCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FuY2VsVG9rZW4gPSB0cnVlO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudFN0YXRlKGVsZSwgY2FsbGJhY2tzKSB7XG4gICAgdmFyIGNhbmNlbFRva2VuID0gZmFsc2UsIGxvYWRlZCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gcXVlcnkoKSB7XG4gICAgICAgIGlmIChjYW5jZWxUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZS5jbGllbnRXaWR0aCA+IDAgJiYgZWxlLmNsaWVudEhlaWdodCA+IDApIHtcbiAgICAgICAgICAgIGlmICghbG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uTG9hZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5vbkxvYWQuY2FsbChjYWxsYmFja3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uVW5sb2FkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uVW5sb2FkLmNhbGwoY2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XG4gICAgfTtcbn1cblxuXG5leHBvcnQgeyBnZXRDaGlsZE5vZGVzLCBjbGVhckNoaWxkTm9kZXMsIHJlcGxhY2VOb2RlLCByZW1vdmVOb2RlLCByZW1vdmVOb2RlQmV0d2VlbiwgaW5zZXJ0Tm9kZUFmdGVyLCBxdWVyeUVsZW1lbnRMb2FkZWQsIHF1ZXJ5RWxlbWVudFVubG9hZGVkLCBxdWVyeUVsZW1lbnRTdGF0ZSB9OyIsImltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4vbWVzc2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vZWxlLXV0aWxzJztcblxuZnVuY3Rpb24gaXNNZXNzZW5nZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1lc3Nlbmdlcjtcbn1cblxuZXhwb3J0IHsgaXNNZXNzZW5nZXJ9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBNZXNzZW5nZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgfVxuXG4gICAgb24oZm4pIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZm4pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVyc1tpXSA9PT0gZm4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmUoYXJncywgc2NvcGUpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IHRoaXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5oYW5kbGVyc1tpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHRoaXMuaGFuZGxlcnNbaV0uY2FsbChzY29wZSwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbn1cblxuY2xhc3MgTWVzc2VuZ2VyQnVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZXNzZW5nZXJzID0ge307XG4gICAgfVxuXG4gICAgZ2V0KGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NlbmdlcnNbZV0pIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2VuZ2Vyc1tlXSA9IG5ldyBNZXNzZW5nZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzZW5nZXJzW2VdO1xuICAgIH1cblxuICAgIG9uKGUsIGZuKSB7XG4gICAgICAgIHRoaXMuZ2V0KGUpLm9uKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZSwgZm4pIHtcbiAgICAgICAgdGhpcy5nZXQoZSkub2ZmKGZuKTtcbiAgICB9XG5cbiAgICBmaXJlKGUsIGFyZ3MsIHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChlKS5maXJlKGFyZ3MsIHNjb3BlKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IE1lc3NlbmdlciwgTWVzc2VuZ2VyQnVzIH07IiwidmFyIGRlYnVnTW9kZSA9IHRydWUsXG4gICAgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgYWN0aW9uLCBpZ25vcmVPd24pIHtcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKGluZGV4LCBvYmpbaW5kZXhdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoaWdub3JlT3duIHx8IG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ocCwgb2JqW3BdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhY3Rpb24ob2JqLCBvYmopO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc29tZShvYmosIGFjdGlvbikge1xuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24oaW5kZXgsIG9ialtpbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ocCwgb2JqW3BdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24ob2JqLCBvYmopO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29weSgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBvYmpJbmRleCA9IDAsIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF0sIGZpbHRlcjtcblxuICAgIGlmIChpc0Jvb2xlYW4ob2JqKSkge1xuICAgICAgICBkZWVwID0gb2JqO1xuICAgICAgICBvYmpJbmRleCsrO1xuICAgICAgICBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gb2JqSW5kZXggKyAxKSB7XG4gICAgICAgIGZpbHRlciA9IGFyZ3VtZW50c1tvYmpJbmRleCArIDFdO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgdmFyIG5ld0FyciA9IFtdO1xuICAgICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBpbmRleCwgaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChkZWVwID8gY29weShpdGVtKSA6IGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld0FycjtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICB2YXIgbmV3T2JqID0gb2JqZWN0KG9iaik7XG4gICAgICAgIGZvckVhY2gob2JqLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGtleSwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBkZWVwID8gY29weSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0gYXJndW1lbnRzW2luZGV4XTtcblxuICAgIGlmIChpc0Jvb2xlYW4odGFyZ2V0KSkge1xuICAgICAgICBkZWVwID0gdGFyZ2V0O1xuICAgICAgICB0YXJnZXQgPSBhcmd1bWVudHNbKytpbmRleF07XG4gICAgfVxuXG4gICAgaWYgKGRlZXApIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSB7fTtcblxuICAgIGlmIChpc0Jvb2xlYW4oYXJndW1lbnRzW2luZGV4XSkpIHtcbiAgICAgICAgZGVlcCA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKGRlZXApIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBwbGFpbk1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodGFyZ2V0W2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdCh0YXJnZXRba2V5XSkgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdChvKSB7XG4gICAgZnVuY3Rpb24gRigpIHtcbiAgICB9XG5cbiAgICBGLnByb3RvdHlwZSA9IG87XG4gICAgcmV0dXJuIG5ldyBGKCk7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XG4gICAgdmFyIHByb3RvdHlwZSA9IG9iamVjdChzdXBlclR5cGUucHJvdG90eXBlKTtcbiAgICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJUeXBlO1xuICAgIHN1YlR5cGUucHJvdG90eXBlID0gcHJvdG90eXBlO1xufVxuXG5mdW5jdGlvbiBpbmhlcml0KHN1YlR5cGUsIHN1cGVyVHlwZSkge1xuICAgIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKTtcbiAgICBzdWJUeXBlLnN1cGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdXBlclR5cGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBsb3dlcmNhc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9Mb3dlckNhc2UoKSA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gdXBwZXJjYXNlKHN0cmluZykge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvVXBwZXJDYXNlKCkgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBBcnJheTtcbn1cblxuZnVuY3Rpb24gaXNNYXAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1hcDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gaXNCbGFua09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFnZXRQcm90b3R5cGVPZih2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNSZWdFeHAodmFsdWUpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZShvYmoxLCBvYmoyKSB7XG4gICAgdmFyIHNhbWUgPSAob2JqMSA9PT0gb2JqMik7XG5cbiAgICBpZiAoIXNhbWUpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xuICAgICAgICAgICAgaWYgKG9iajEubGVuZ3RoID09PSBvYmoyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqMSkgJiYgaXNPYmplY3Qob2JqMikgJiYgZ2V0UHJvdG90eXBlT2Yob2JqMSkgPT09IGdldFByb3RvdHlwZU9mKG9iajIpKSB7XG4gICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltrZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbWU7XG59XG5cbmZ1bmN0aW9uIGRlYnVnKGxvZykge1xuICAgIGlmIChkZWJ1Z01vZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2cobG9nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKGFyciwgb2JqKSB7XG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBvYmo7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zU3RyKGFyciwgc3RyLCBpZ25vcmVDYXNlKSB7XG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBzdHIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGl0ZW0pID09PSBsb3dlcmNhc2Uoc3RyKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaiwga2V5LCBpZ25vcmVDYXNlKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XG5cbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKGtleTMsIHZhbHVlMykge1xuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzUHJvcDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xuXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcbiAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uIChrZXkzLCB2YWx1ZTMpIHtcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc1Byb3AgPyB0YXJnZXQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUsIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcblxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXkyXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uIChrZXkzLCB2YWx1ZTMpIHtcbiAgICAgICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWhhc1Byb3ApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICc6IENhbiBub3Qgc2V0IHByb3BlcnR5IG9mIHVuZGVmaW5lZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvcmRlckJ5KGFyciwgZ2V0dGVyKSB7XG4gICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb3JkZXJCeURlc2NlbmRpbmcoYXJyLCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5leHBvcnQge1xuICAgIGZvckVhY2gsXG4gICAgc29tZSxcbiAgICBjb3B5LFxuICAgIGV4dGVuZCxcbiAgICBtZXJnZSxcbiAgICBvYmplY3QsXG4gICAgaW5oZXJpdCxcbiAgICBsb3dlcmNhc2UsXG4gICAgdXBwZXJjYXNlLFxuICAgIGlzVW5kZWZpbmVkLFxuICAgIGlzRGVmaW5lZCxcbiAgICBpc09iamVjdCxcbiAgICBpc0JsYW5rT2JqZWN0LFxuICAgIGlzTnVtYmVyLFxuICAgIGlzRGF0ZSxcbiAgICBpc0Z1bmN0aW9uLFxuICAgIGlzUmVnRXhwLFxuICAgIGlzQm9vbGVhbixcbiAgICBpc0FycmF5LFxuICAgIGlzU3RyaW5nLFxuICAgIGlzU2FtZSxcbiAgICBkZWJ1ZyxcbiAgICBjb250YWlucyxcbiAgICBjb250YWluc1N0cixcbiAgICBoYXNQcm9wZXJ0eSxcbiAgICBnZXRQcm9wZXJ0eSxcbiAgICBzZXRQcm9wZXJ0eSxcbiAgICBjb25jYXQsXG4gICAgb3JkZXJCeSxcbiAgICBvcmRlckJ5RGVzY2VuZGluZ1xufTsiLCJpbXBvcnQgeyBpc01lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQgKiBhcyBlbGVVdGlscyBmcm9tICcuLi91dGlsaXR5L2VsZS11dGlscyc7XG5pbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4uL2NvcmUvb2JzZXJ2ZXInO1xuaW1wb3J0IHsgY29tcGlsZSwgY29tcHV0ZSB9IGZyb20gJy4uL3BhcnNlcic7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICBnZXQgJHByb3h5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b1Byb3h5KCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobWV0YSkge1xuICAgICAgICBDb21wb25lbnQuY29uc3RydWN0LmNhbGwodGhpcywgbWV0YSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdChtZXRhKSB7XG4gICAgICAgIHRoaXMuJCRlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLiQkcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cyA9IFtdO1xuICAgICAgICB0aGlzLiQkY2hpbGREaXJlY3RpdmVzID0gW107XG4gICAgICAgIHRoaXMuJCRkZXRlY3RUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJG9ic2VydmVyID0gbmV3IE9ic2VydmVyKCk7XG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMgPSBbXTtcblxuICAgICAgICBpZiAobWV0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRzZXRNZXRhKG1ldGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XG4gICAgfVxuXG4gICAgJGhvb2tzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmVmb3JlQXR0ckNoYW5nZTogJycsXG4gICAgICAgICAgICBhZnRlckF0dHJDaGFuZ2U6ICcnLFxuICAgICAgICAgICAgb25Jbml0OiAnJyxcbiAgICAgICAgICAgIGFmdGVyVmlld01vdW50OiAnJyxcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXRNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgJGJpbmROb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy4kJGVsZW1lbnQgPSBub2RlO1xuICAgIH1cblxuICAgICRoYXNBdHRyKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMsIHByb3AsIHRydWUpO1xuICAgIH1cblxuICAgICRpbml0QXR0cihwcm9wLCB2YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBwcm9wLCB0cnVlKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmJlZm9yZUF0dHJDaGFuZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLmJlZm9yZUF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcywgcHJvcCwgdmFsdWUsIHRydWUpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuYWZ0ZXJBdHRyQ2hhbmdlKSkge1xuICAgICAgICAgICAgdGhpcy5hZnRlckF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGluaXRBdHRyRG9uZSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkluaXQpKSB7XG4gICAgICAgICAgICB0aGlzLm9uSW5pdC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHNldEF0dHIocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywgcHJvcCwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5iZWZvcmVBdHRyQ2hhbmdlKSkge1xuICAgICAgICAgICAgdGhpcy5iZWZvcmVBdHRyQ2hhbmdlLmNhbGwodGhpcywgcHJvcCwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMuJHByb3h5LCBwcm9wLCB2YWx1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5hZnRlckF0dHJDaGFuZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLmFmdGVyQXR0ckNoYW5nZS5jYWxsKHRoaXMsIHByb3AsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkbGlzdGVuKGUsIGZuKSB7XG4gICAgICAgIHZhciBtZXNzZW5nZXIgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBlLCB0cnVlKTtcbiAgICAgICAgaWYgKGlzTWVzc2VuZ2VyKG1lc3NlbmdlcikpIHtcbiAgICAgICAgICAgIG1lc3Nlbmdlci5vbihmbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUgKyAnIGlzIG5vdCBhIGV2ZW50Jyk7XG4gICAgfVxuXG4gICAgJGdldFRlbXBsYXRlKHN5bmMpIHtcbiAgICAgICAgdmFyIG1ldGEgPSB0aGlzLiRnZXRNZXRhKCk7XG5cbiAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRhLnRlbXBsYXRlIHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG1ldGEudGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS50ZW1wbGF0ZVVybCkpIHtcbiAgICAgICAgICAgICAgICBpbmplY3Rvci5zZXJ2aWNlKCckdGVtcGxhdGVDYWNoZScpLmdldFRwbEJ5VXJsKG1ldGEudGVtcGxhdGVVcmwpLnRoZW4oZnVuY3Rpb24gKHRwbCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRwbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJHVzaW5nKG5hbWUpIHtcbiAgICAgICAgdmFyIG1ldGEgPSB0aGlzLiRnZXRNZXRhKCksXG4gICAgICAgICAgICB1c2luZyA9IG1ldGEudXNpbmcsXG4gICAgICAgICAgICBzZWdtZW50cyA9IG5hbWUuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHNlZ21lbnRzLnBvcCgpLFxuICAgICAgICAgICAgc3BhY2VOYW1lID0gc2VnbWVudHMuam9pbignLicpO1xuXG4gICAgICAgIGlmIChzcGFjZU5hbWUgJiYgdXRpbHMuaXNPYmplY3QodXNpbmcpKSB7XG4gICAgICAgICAgICB1dGlscy5zb21lKHVzaW5nLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IHNwYWNlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gdmFsdWUgKyAnLicgKyBjbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgJG1ha2VDb21waWxlT3B0aW9ucygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0RW1iZWRUcGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi4kJGVsZW1lbnQuZ2V0SW5uZXJUcGwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluc0NvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY29udGFpbnNDb21wb25lbnQoc2VsZi4kdXNpbmcobmFtZSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUNvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KHNlbGYuJHVzaW5nKG5hbWUpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluc0RpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY29udGFpbnNEaXJlY3RpdmUoc2VsZi4kdXNpbmcobmFtZSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZURpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlRGlyZWN0aXZlKHNlbGYuJHVzaW5nKG5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkaGFzVmlldygpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmlzQXJyYXkodGhpcy4kJGNoaWxkRWxlbWVudHMpO1xuICAgIH1cblxuICAgICRzaG93VmlldygpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICAgIHRoaXMuJCRjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjaGlsZC5nZXRIdG1sRWxlbWVudCgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuICAgICRjbGVhclZpZXcoKSB7XG4gICAgICAgIGlmICghdGhpcy4kaGFzVmlldygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJCRjaGlsZEVsZW1lbnRzID0gbnVsbDtcbiAgICB9XG5cbiAgICAkcmVuZGVyKHN5bmMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBmcmFnbWVudCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRoYXNWaWV3KCkpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IHRoaXMuJHNob3dWaWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGNvbXBpbGUodGhpcy4kZ2V0VGVtcGxhdGUoc3luYyksIHRoaXMuJG1ha2VDb21waWxlT3B0aW9ucygpKSh0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi4kaGFzVmlldygpKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzZWxmLiRzaG93VmlldygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuJGdldFRlbXBsYXRlKCkudGhlbihmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGNvbXBpbGUoaHRtbCwgc2VsZi4kbWFrZUNvbXBpbGVPcHRpb25zKCkpKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJHJlZnJlc2goc3luYykge1xuICAgICAgICB0aGlzLiRjbGVhclZpZXcoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJlbmRlcihzeW5jKTtcbiAgICB9XG5cbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBlbGVtZW50LCBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZWN0b3JPckVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMuYXBwZW5kKSB7XG4gICAgICAgICAgICBlbGVVdGlscy5jbGVhckNoaWxkTm9kZXMoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5zeW5jKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJHJlbmRlcihvcHRpb25zLnN5bmMpKTtcbiAgICAgICAgICAgIHNlbGYuJGFmdGVyVmlld01vdW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRyZW5kZXIob3B0aW9ucy5zeW5jKS50aGVuKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZSk7XG4gICAgICAgICAgICAgICAgc2VsZi4kYWZ0ZXJWaWV3TW91bnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLiQkZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudC4kcmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudC5yZW1vdmVIdG1sRWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuJGhhc1ZpZXcoKSkge1xuICAgICAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmVIdG1sRWxlbWVudCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kJHBhcmVudENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkcGFyZW50Q29tcG9uZW50LiRyZW1vdmVDaGlsZENtcCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGFmdGVyVmlld01vdW50KCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmFmdGVyVmlld01vdW50KSkge1xuICAgICAgICAgICAgdGhpcy5hZnRlclZpZXdNb3VudC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJCRkZXRlY3RUaW1lb3V0IHx8ICF0aGlzLiQkY2hpbGRFbGVtZW50cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLiQkZGV0ZWN0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi4kJGRldGVjdFRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXRlY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkdmFsaWRhdGUoKSB7XG4gICAgICAgIHZhciBvYmosIHByb3AsIGFjdGlvbiwgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIG9iaiA9IHRoaXM7XG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIG9iaiA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3VtZW50cyBlcnJvcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuJCRvYnNlcnZlci52YWxpZGF0ZShvYmosIHByb3AsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgJHdhdGNoKCkge1xuICAgICAgICB2YXIgb2JqLCBwcm9wLCBhY3Rpb24sIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBvYmogPSB0aGlzO1xuICAgICAgICAgICAgcHJvcCA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBvYmogPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgYWN0aW9uID0gYXJndW1lbnRzWzJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmd1bWVudHMgZXJyb3InKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLiQkb2JzZXJ2ZXIud2F0Y2gob2JqLCBwcm9wLCBhY3Rpb24pO1xuICAgIH1cblxuICAgICRldmFsKGV4cCkge1xuICAgICAgICByZXR1cm4gY29tcHV0ZShleHAsIHRoaXMpO1xuICAgIH1cblxuICAgICRnZXRQYXJlbnRDbXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkcGFyZW50Q29tcG9uZW50O1xuICAgIH1cblxuICAgICRyZW1vdmVDaGlsZENtcChjaGlsZENtcCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiQkY2hpbGRDb21wb25lbnRzLmluZGV4T2YoY2hpbGRDbXApO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGNoaWxkQ21wLiQkcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRjcmVhdGVDaGlsZENtcChjaGlsZENtcCkge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGNoaWxkQ21wKTtcbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbXBvbmVudC4kJHBhcmVudENvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgJGluaGVyaXRDbXAocGFyZW50Q21wKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc2VsZiwgdXRpbHMub2JqZWN0KHBhcmVudENtcCkpO1xuXG4gICAgICAgIC8vIHRvZG8gLSByZXNvbHZlIGlzc3VlIGNhbGxpbmcgcGFyZW50IGNvbXBvbmVudCdzIGxpZmVjeWNsZSBob29rc1xuICAgICAgICB1dGlscy5mb3JFYWNoKHNlbGYuJGhvb2tzKCksIGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5oYXNPd25Qcm9wZXJ0eShob29rKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2VsZltob29rXSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMucHVzaChwYXJlbnRDbXAuJHZhbGlkYXRlKCcqJywgZnVuY3Rpb24gKHByb3AsIGFyZ3MpIHtcbiAgICAgICAgICAgIHNlbGYuJCRvYnNlcnZlci5maXJlQ2hhbmdpbmcoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLiQkZGlzcG9zZXJzLnB1c2gocGFyZW50Q21wLiR3YXRjaCgnKicsIGZ1bmN0aW9uIChwcm9wLCBhcmdzKSB7XG4gICAgICAgICAgICBzZWxmLiQkb2JzZXJ2ZXIuZmlyZUNoYW5nZWQoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAkZGlzcG9zZShkZXN0cm95RnJvbUVsZW1lbnQpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHZpcnR1YWwgbm9kZSBmaXJzdCBpbiBjYXNlIGl0IHRyaWdnZXJzIHBhcmVudCBjb21wb25lbnQgZGVzdHJveVxuICAgICAgICB0aGlzLiR1bm1vdW50KCk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJCRkZXRlY3RUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy4kJGRldGVjdFRpbWVvdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kJGRpc3Bvc2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChkaXNwb3Nlcikge1xuICAgICAgICAgICAgZGlzcG9zZXIuY2FsbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRjbGVhclZpZXcoKTtcbiAgICAgICAgdGhpcy4kJG9ic2VydmVyLmRlc3Ryb3koKTtcblxuICAgICAgICBpZiAoZGVzdHJveUZyb21FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGNoaWxkRGlyZWN0aXZlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJGRpc3Bvc2UoKTtcblxuICAgICAgICAvLyBkZXN0cm95IHZpcnR1YWwgbm9kZSBpbiB0aGUgZW5kIGJlY2F1c2UgaXQgbWF5IGJpbmRzIGxvZ2ljIGFib3V0IGRlc3Ryb3lcbiAgICAgICAgaWYgKHRoaXMuJCRlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJCRlbGVtZW50LmRpc3Bvc2UodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQge2luamVjdG9yfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZSB7XG4gICAgZ2V0ICRodG1sRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaHRtbEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgJGNvbXBvbmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQub3duZXJDb21wb25lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgJHNjb3BlKCkge1xuICAgICAgICBpZiAodGhpcy4kYmluZGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kYmluZGluZy5zY29wZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBEaXJlY3RpdmUuY29uc3RydWN0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgLy8gcHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMgPSBbXTtcbiAgICAgICAgdGhpcy4kJGNhbmNlbEFuaW1hdGlvblRva2VuID0gZmFsc2U7XG4gICAgICAgIC8vIHByaXZhdGUgcHJvcGVydGllc1xuXG4gICAgICAgIC8vIHB1YmxpYyBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuJG91dHB1dCA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRiaW5kaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy4kYXR0ciA9IG51bGw7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLiRwcmlvcml0eSA9IDA7XG4gICAgICAgIHRoaXMuJGVsZW1lbnRsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gcHVibGljIHByb3BlcnRpZXNcblxuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcbiAgICB9XG5cbiAgICAkaG9va3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxuICAgICAgICAgICAgb25Db21waWxlOiAnJyxcbiAgICAgICAgICAgIG9uSW5zZXJ0OiAnJyxcbiAgICAgICAgICAgIG9uRGV0ZWN0OiAnJyxcbiAgICAgICAgICAgIG9uVXBkYXRlOiAnJyxcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXRNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgJGJpbmROb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy4kYXR0ciA9IG5vZGU7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBub2RlLm93bmVyRWxlbWVudDtcbiAgICB9XG5cbiAgICAkc2V0QmluZGluZyhiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMuJGJpbmRpbmcgPSBiaW5kaW5nO1xuICAgIH1cblxuICAgICRjb21waWxlKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkNvbXBpbGUpKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGlsZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGluc2VydCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25JbnNlcnQpKSB7XG4gICAgICAgICAgICB0aGlzLm9uSW5zZXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uTG9hZCkgfHwgdXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uVW5sb2FkKSkge1xuICAgICAgICAgICAgdGhpcy4kcmVxdWVzdEFuaW1hdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGlzTG9hZGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kaHRtbEVsZW1lbnQuY2xpZW50V2lkdGggPiAwICYmIHRoaXMuJGh0bWxFbGVtZW50LmNsaWVudEhlaWdodCA+IDA7XG4gICAgfVxuXG4gICAgJHJlcXVlc3RBbmltYXRpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBmdW5jdGlvbiBxdWVyeSgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLiQkY2FuY2VsQW5pbWF0aW9uVG9rZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLiRpc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLiRlbGVtZW50bG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVsZW1lbnRsb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vbkxvYWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vbkxvYWQuY2FsbChzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLiRlbGVtZW50bG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVsZW1lbnRsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYub25VbmxvYWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vblVubG9hZC5jYWxsKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICAkY2FuY2VsQW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLiQkY2FuY2VsQW5pbWF0aW9uVG9rZW4gPSB0cnVlO1xuICAgIH1cblxuICAgICRkZXRlY3QoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXRlY3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRldGVjdC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJGJpbmRpbmcuZGV0ZWN0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vblVwZGF0ZSkpIHtcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRkaXNwb3NlKGRlc3Ryb3lGcm9tQXR0cikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy4kY2FuY2VsQW5pbWF0aW9uKCk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlc3Ryb3lGcm9tQXR0cikge1xuICAgICAgICAgICAgdGhpcy4kYXR0ciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMuZm9yRWFjaChmdW5jdGlvbiAoZGlzcG9zZXIpIHtcbiAgICAgICAgICAgIGRpc3Bvc2VyLmNhbGwoc2VsZik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGJpbmRpbmcgPSBudWxsO1xuICAgIH1cblxuICAgICRkZXN0cm95KCkge1xuICAgICAgICB0aGlzLiRkaXNwb3NlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuJGF0dHIgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kYXR0ci5kaXNwb3NlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy4kYXR0ciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBGaWx0ZXIuY29uc3RydWN0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XG4gICAgfVxuXG4gICAgJGhvb2tzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb25Jbml0OiAnJyxcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXRNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgJGV4ZWN1dGUoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25FeGVjdXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25FeGVjdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eS9tZXNzYWdlJztcbmltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IERpcmVjdGl2ZSB9ZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4vc2VydmljZSc7XG5cbmZ1bmN0aW9uIG5hbWVzcGFjZShucykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudChuYW1lLCBkZWYpO1xuICAgICAgICB9LFxuICAgICAgICBkaXJlY3RpdmU6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRlZikpIHtcbiAgICAgICAgICAgICAgICBkZWYgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5zZXJ0OiBkZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZTogZGVmXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZShuYW1lLCBkZWYpO1xuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlOiBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gICAgICAgICAgICBkZWYubmFtZXNwYWNlID0gbnM7XG4gICAgICAgICAgICByZXR1cm4gc2VydmljZShuYW1lLCBkZWYpO1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRlZikpIHtcbiAgICAgICAgICAgICAgICBkZWYgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXhlY3V0ZTogZGVmXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihuYW1lLCBkZWYpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50KG5hbWUsIGRlZikge1xuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5jb21wb25lbnQsXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihDb21wb25lbnQpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGl2ZShuYW1lLCBkZWYpIHtcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XG4gICAgICAgIGRlZiA9IHtcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICBvbkluc2VydDogZGVmLFxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiBkZWZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuZGlyZWN0aXZlLFxuICAgICAgICBzdXBlckNsYXNzOiBtYWtlQ29uc3RydWN0b3IoRGlyZWN0aXZlKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIobmFtZSwgZGVmKSB7XG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xuICAgICAgICBkZWYgPSB7XG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgb25FeGVjdXRlOiBkZWZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuZmlsdGVyLFxuICAgICAgICBzdXBlckNsYXNzOiBtYWtlQ29uc3RydWN0b3IoRmlsdGVyKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXJ2aWNlKG5hbWUsIGRlZikge1xuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5zZXJ2aWNlLFxuICAgICAgICBzdXBlckNsYXNzOiBtYWtlQ29uc3RydWN0b3IoU2VydmljZSlcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaXNDb21wb25lbnQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIENvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RpdmUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIERpcmVjdGl2ZTtcbn1cblxuZnVuY3Rpb24gaXNGaWx0ZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEZpbHRlcjtcbn1cblxuZnVuY3Rpb24gaXNTZXJ2aWNlKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBTZXJ2aWNlO1xufVxuXG5mdW5jdGlvbiBib290c3RyYXAoc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudCwgdHBsO1xuXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdHBsID0gZWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICBuZXcgQ29tcG9uZW50KHtcbiAgICAgICAgdGVtcGxhdGU6IHRwbFxuICAgIH0pLiRtb3VudChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gbWFrZUNvbnN0cnVjdG9yKGNscykge1xuICAgIGZ1bmN0aW9uIGYoKSB7XG4gICAgICAgIGNscy5jb25zdHJ1Y3QuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBmLnByb3RvdHlwZSA9IGNscy5wcm90b3R5cGU7XG4gICAgcmV0dXJuIGY7XG59XG5cbmV4cG9ydCB7IG5hbWVzcGFjZSwgaW5qZWN0b3IsIGNvbXBvbmVudCwgZGlyZWN0aXZlLCBmaWx0ZXIsIHNlcnZpY2UsIGlzQ29tcG9uZW50LCBpc0RpcmVjdGl2ZSwgaXNGaWx0ZXIsIGlzU2VydmljZSwgYm9vdHN0cmFwIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5L21lc3NhZ2UnO1xuXG52YXIgdHlwZUNvbnN0ID0ge1xuICAgIGZpbHRlcjogJ2ZpbHRlcicsXG4gICAgc2VydmljZTogJ3NlcnZpY2UnLFxuICAgIGNvbXBvbmVudDogJ2NvbXBvbmVudCcsXG4gICAgZGlyZWN0aXZlOiAnZGlyZWN0aXZlJ1xufTtcblxudmFyIG5hbWVQYXR0ZXJuID0gL15bYS16X1xcJF1bXFx3XFwkLV0qL2k7XG5cbmNsYXNzIEluamVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB7fTtcbiAgICAgICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzID0ge307XG4gICAgICAgIHRoaXMuaW5zQ29udGFpbmVyID0ge307XG4gICAgfVxuXG4gICAgZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyW2NvbnRyYWN0VHlwZV07XG4gICAgfVxuXG4gICAgZ2V0SW5zdGFuY2VzKGNvbnRyYWN0VHlwZSkge1xuICAgICAgICBpZiAoIXRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV0pIHtcbiAgICAgICAgICAgIHRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnNDb250YWluZXJbY29udHJhY3RUeXBlXTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcihjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAoc2VsZWN0b3IuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGNoYXJhY3RlciBcIi5cIicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1hcHBpbmcgPSB0aGlzLmdldE1hcHBpbmcoY29udHJhY3RUeXBlKTtcblxuICAgICAgICBpZiAobWFwcGluZ1tzZWxlY3Rvcl0gPT0gbnVsbCkge1xuICAgICAgICAgICAgbWFwcGluZ1tzZWxlY3Rvcl0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gbWFwcGluZ1tzZWxlY3Rvcl0uZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YS5uYW1lc3BhY2UgPT09IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc2VsZWN0b3IgKyAnIGlzIGV4aXN0IHVuZGVyIG5hbWVzcGFjZSAnICsgbWF0Y2hlc1swXS5wcm90b3R5cGUuJCRtZXRhLm5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXBwaW5nW3NlbGVjdG9yXS5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNvbXBvbmVudChzZWxlY3RvciwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0eXBlQ29uc3QuY29tcG9uZW50LCBzZWxlY3RvciwgY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHR5cGVDb25zdC5kaXJlY3RpdmUsIHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgY29udGFpbnMoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgaWdub3JlQ2FzZSkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3JzLCBtYXBwaW5nID0gdGhpcy5nZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSk7XG4gICAgICAgIHZhciBzZWdtZW50cyA9IHNlbGVjdG9yLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAnJztcblxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWdtZW50cy5wb3AoKTtcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShtYXBwaW5nLCBzZWxlY3RvciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBtYXBwaW5nW3NlbGVjdG9yXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UobWV0YS5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnRhaW5zQ29tcG9uZW50KHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5zKHR5cGVDb25zdC5jb21wb25lbnQsIHNlbGVjdG9yLCB0cnVlKTtcbiAgICB9XG5cbiAgICBjb250YWluc0RpcmVjdGl2ZShzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWlucyh0eXBlQ29uc3QuZGlyZWN0aXZlLCBzZWxlY3RvciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZ2V0KGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGlnbm9yZUNhc2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xuICAgICAgICB2YXIgc2VnbWVudHMgPSBzZWxlY3Rvci5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbmFtZXNwYWNlID0gJyc7XG5cbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yID0gc2VnbWVudHMucG9wKCk7XG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBzZWdtZW50cy5qb2luKCcuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkobWFwcGluZywgc2VsZWN0b3IsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gbWFwcGluZ1tzZWxlY3Rvcl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb250cmFjdFR5cGUgKyAnICcgKyBzZWxlY3RvciArICcgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgY29uc3RydWN0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbWV0YSA9IGl0ZW0ucHJvdG90eXBlLiQkbWV0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YS5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKG1ldGEubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc2VsZWN0b3IgKyAnIGlzIG5vdCBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZhciBuYW1lc3BhY2VzID0gY29uc3RydWN0b3JzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hbWVzcGFjZSAnICsgbmFtZXNwYWNlcy5qb2luKCd8JykgKyAnIGFsbCBoYXZlICcgKyBzZWxlY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3JzWzBdO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmNvbXBvbmVudCwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGdldERpcmVjdGl2ZShzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGdldEZpbHRlcihzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmZpbHRlciwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGdldFNlcnZpY2Uoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5zZXJ2aWNlLCBzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY3JlYXRlKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5nZXQoY29udHJhY3RUeXBlLCBzZWxlY3RvciksIGluc3RhbmNlO1xuXG4gICAgICAgIHN3aXRjaCAoY29udHJhY3RUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5jb21wb25lbnQ6XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudChjb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5kaXJlY3RpdmU6XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZURpcmVjdGl2ZShjb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5maWx0ZXI6XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUZpbHRlcihjb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5zZXJ2aWNlOlxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVTZXJ2aWNlKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3IoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wb25lbnQoY29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldENvbXBvbmVudChjb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZURpcmVjdGl2ZShjb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0RGlyZWN0aXZlKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlRmlsdGVyKGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRGaWx0ZXIoY29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVTZXJ2aWNlKGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSwgc2VydmljZXMgPSB0aGlzLmdldEluc3RhbmNlcyh0eXBlQ29uc3Quc2VydmljZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldFNlcnZpY2UoY29uc3RydWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhLm5vblNoYXJlZCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHNlcnZpY2VzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2YgY29uc3RydWN0b3I7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHJlc3VsdFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICBzZXJ2aWNlcy5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBzZXJ2aWNlKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNlcnZpY2Uoc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGdldFdhaXRpbmdUb0V4dGVuZHMoY29udHJhY3RUeXBlKSB7XG4gICAgICAgIGlmICghdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0pIHtcbiAgICAgICAgICAgIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdO1xuICAgIH1cblxuICAgIHNldFdhaXRpbmdUb0V4dGVuZHMoY29udHJhY3RUeXBlLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNoZWNrU2VsZWN0b3Ioc2VsZWN0b3IsIGNvbnRyYWN0VHlwZSkge1xuICAgICAgICBpZiAobmFtZVBhdHRlcm4udGVzdChzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHZhciBjb25zdHJ1Y3Rvck5hbWUgPSAnJztcbiAgICAgICAgICAgIHZhciBzZWdtZW50cyA9IHNlbGVjdG9yLnNwbGl0KCctJyk7XG5cbiAgICAgICAgICAgIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gdXRpbHMudXBwZXJjYXNlKHNlZ21lbnRbMF0pICsgc2VnbWVudC5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc3dpdGNoIChjb250cmFjdFR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5jb21wb25lbnQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSAnQ29tcG9uZW50JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuZGlyZWN0aXZlOlxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ0RpcmVjdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmZpbHRlcjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdGaWx0ZXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5zZXJ2aWNlOlxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ1NlcnZpY2UnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzZWxlY3RvciArICdpcyBub3QgYSB2YWxpZCBuYW1lJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidWlsZENvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lID0gdGhpcy5jaGVja1NlbGVjdG9yKHNlbGVjdG9yLCBvcHRpb25zLmNvbnRyYWN0VHlwZSksXG4gICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzID0gc2VsZi5nZXRXYWl0aW5nVG9FeHRlbmRzKG9wdGlvbnMuY29udHJhY3RUeXBlKSxcbiAgICAgICAgICAgIG9uQ29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yLnN1cGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihtZXRhLmNvbnN0cnVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0YS5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzZW5nZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgRnVuY3Rpb24oJ29uQ29uc3RydWN0JywgJ1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbiAnICsgY29uc3RydWN0b3JOYW1lICsgJygpe29uQ29uc3RydWN0LmNhbGwodGhpcyk7fTsnKShvbkNvbnN0cnVjdCk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ob3B0aW9ucy5zdXBlckNsYXNzKSkge1xuICAgICAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3Rvciwgb3B0aW9ucy5zdXBlckNsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGEuc2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuICAgICAgICAvLyBhcHBseSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhtZXRhLmV4dGVuZHMpKSB7XG4gICAgICAgICAgICBpZiAoaW5qZWN0b3IuY29udGFpbnMob3B0aW9ucy5jb250cmFjdFR5cGUsIG1ldGEuZXh0ZW5kcykpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VwZXJPbmUgPSBpbmplY3Rvci5nZXQob3B0aW9ucy5jb250cmFjdFR5cGUsIG1ldGEuZXh0ZW5kcyk7XG4gICAgICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yLCBzdXBlck9uZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBzdXBlck5hbWU6IG1ldGEuZXh0ZW5kcyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChzdXBlck9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yLCBzdXBlck9uZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlbWFpbkNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBjb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBleHRlbmRNZXRhKG1ldGEsIHN1cGVyT25lKSB7XG4gICAgICAgICAgICBpZiAoc3VwZXJPbmUucHJvdG90eXBlLiQkbWV0YSAmJiBzdXBlck9uZS5wcm90b3R5cGUuJCRtZXRhLnByb3RlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihvcHRpb25zLmNvbnRyYWN0VHlwZSArICc6ICcgKyBtZXRhLmV4dGVuZHMgKyAnIGlzIHByb3RlY3RlZCwgaXQgaXMgbm90IGFsbG93ZWQgdG8gZXh0ZW5kIScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3VwZXJNZXRhID0gc3VwZXJPbmUucHJvdG90eXBlLiQkbWV0YTtcbiAgICAgICAgICAgIHZhciBjb3B5ID0gdXRpbHMuY29weSh0cnVlLCBzdXBlck1ldGEsIGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhKG9iaiA9PT0gc3VwZXJNZXRhICYmIChrZXkgPT09ICdjb25zdHJ1Y3QnIHx8IGtleSA9PT0gJ21ldGhvZHMnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0cnVlLCBjb3B5LCBtZXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbWFpbkNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpIHtcbiAgICAgICAgICAgIGlmIChzdXBlck9uZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG1ldGEubWV0aG9kcykpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5leHRlbmQoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRhLm1ldGhvZHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnJlZ2lzdGVyQ29uc3RydWN0b3Iob3B0aW9ucy5jb250cmFjdFR5cGUsIHNlbGVjdG9yLCBjb25zdHJ1Y3RvciwgbWV0YSk7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIGFueSBjb21wb25lbnQgZXh0ZW5kcyBjdXJyZW50IGNvbXBvbmVudFxuICAgICAgICAgICAgdmFyIHdhaXRpbmdUb0V4dGVuZHMyID0gW10sIGZ1bGxTZWxlY3RvciA9IG1ldGEubmFtZXNwYWNlICsgJy4nICsgc2VsZWN0b3I7XG4gICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zdXBlck5hbWUgPT09IGZ1bGxTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNhbGxiYWNrLmNhbGwobnVsbCwgY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kczIucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYuc2V0V2FpdGluZ1RvRXh0ZW5kcyhvcHRpb25zLmNvbnRyYWN0VHlwZSwgd2FpdGluZ1RvRXh0ZW5kczIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ29uc3RydWN0b3IoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IsIG1ldGEpIHtcbiAgICAgICAgdmFyIHN1cGVyTWV0YSA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGE7XG5cbiAgICAgICAgaWYgKHN1cGVyTWV0YSAmJiBzdXBlck1ldGEucHJvdGVjdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3RUeXBlICsgJzogJyArIG1ldGEuZXh0ZW5kcyArICcgaXMgcHJvdGVjdGVkLCBpdCBpcyBub3QgYWxsb3dlZCB0byBleHRlbmQhJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodHJ1ZSwgc3VwZXJNZXRhLCBmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiAhKG9iaiA9PT0gc3VwZXJNZXRhICYmIChrZXkgPT09ICdjb25zdHJ1Y3QnIHx8IGtleSA9PT0gJ21ldGhvZHMnKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1ldGEgPSB1dGlscy5tZXJnZSh0cnVlLCBjb3B5LCBtZXRhKTtcblxuICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhID0gbWV0YTtcblxuICAgICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgaWYgaXQgaXMgZ2xvYmFsXG4gICAgICAgIGlmICghbWV0YS5sb2NhbCkge1xuICAgICAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXIoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5qZWN0U2VydmljZXMoaW5zdGFuY2UpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBtZXRhID0gaW5zdGFuY2UuJGdldE1ldGEoKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QobWV0YS5pbmplY3QpKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG1ldGEuaW5qZWN0LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnN0YW5jZSwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcml2YXRlS2V5ID0gJyQkJyArIGtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlW3ByaXZhdGVLZXldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZVtwcml2YXRlS2V5XSA9IHNlbGYuY3JlYXRlU2VydmljZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZVtwcml2YXRlS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBpbmplY3RvciA9IG5ldyBJbmplY3RvcigpO1xuXG5leHBvcnQgeyB0eXBlQ29uc3QsIEluamVjdG9yLCBpbmplY3RvciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuaW1wb3J0IHtpbmplY3Rvcn0gZnJvbSAnLi9pbmplY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgU2VydmljZS5jb25zdHJ1Y3QuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29uc3RydWN0KCkge1xuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcbiAgICB9XG5cbiAgICAkaG9va3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxuICAgICAgICAgICAgb25EZXN0cm95OiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgICRnZXRNZXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGEgfHwge307XG4gICAgfVxuXG4gICAgJHNldE1ldGEodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kJG1ldGEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9heGlvc19fOyJdLCJzb3VyY2VSb290IjoiIn0=