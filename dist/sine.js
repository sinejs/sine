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
    _this.orgNodeName = name;
    _this.isEvent = false;
    _this.isBinding = false;
    _this.isDomEvent = false;
    _this.isDirective = false;
    _this.directive = null;
    _this.ownerVElement = null;
    _this.ownerElement = null;
    _this.ownerComponent = null;
    _this.binding = new _binding__WEBPACK_IMPORTED_MODULE_2__["Binding"]();
    return _this;
  }

  _createClass(AttrNode, [{
    key: "belongTo",
    value: function belongTo(key) {
      return this.orgNodeName === key;
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
          this.directive.$bindVNode(this);
          this.binding.setOutput(this.directive.output);
        } else {
          throw new Error('directive ' + this.nodeName + ' is not defined');
        }
      }
    }
  }, {
    key: "link",
    value: function link(scope, ownerElement, ownerComponent) {
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
        } else if (ownerComponent != null) {
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
      } else {
        if (this.directive) {
          scope.$$childDirectives.push(this.directive);
          this.directive.$setBinding(this.binding);
        } else if (ownerComponent != null && ownerComponent.$hasAttr(this.nodeName)) {
          ownerComponent.$initAttr(this.nodeName, this.binding.compute());
        } else {
          if (this.nodeName.startsWith('style')) {
            _utility_utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.ownerElement, this.nodeName, this.binding.compute());
          } else {
            this.ownerElement.setAttribute(this.nodeName, this.binding.compute());
          }
        }

        this.binding.watchProps(function () {
          self.detect();
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
        this.directive.$detect(this.ownerElement, this.ownerComponent);
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
      if (this.ownerComponent != null && this.ownerComponent.$hasAttr(this.nodeName)) {
        this.ownerComponent.$setAttr(this.nodeName, this.binding.value);
      } else {
        if (this.nodeName.startsWith('style')) {
          _utility_utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.ownerElement, this.nodeName, this.binding.value);
        } else {
          this.ownerElement.setAttribute(this.nodeName, this.binding.value);

          if (this.ownerElement.nodeName === 'INPUT' && this.nodeName === 'value') {
            this.ownerElement.value = this.binding.value;
          }
        }
      }
    }
  }, {
    key: "afterLink",
    value: function afterLink() {
      if (this.directive) {
        this.directive.$insert(this.ownerElement, this.ownerComponent);
      }
    }
  }, {
    key: "directives",
    value: function directives() {
      return this.directive == null ? [] : [this.directive];
    }
  }, {
    key: "getOuterTpl",
    value: function getOuterTpl() {
      return this.orgNodeName + (this.nodeValue == null ? '' : '=' + this.quote + this.nodeValue + this.quote);
    }
  }, {
    key: "getInnerTpl",
    value: function getInnerTpl() {
      return this.orgNodeName + (this.nodeValue == null ? '' : '=' + this.quote + this.nodeValue + this.quote);
    }
  }, {
    key: "dispose",
    value: function dispose(isFromDirective) {
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
  custom: 101
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
    this.ownerVDocument = null;
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
      this.ownerVDocument = null;
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
    key: "directives",
    value: function directives() {
      var result = [];
      this.childNodes.map(function (child) {
        return child.directives();
      }).forEach(function (item) {
        result = result.concat(item);
      });
      return result;
    }
  }, {
    key: "getDirective",
    value: function getDirective() {
      return [];
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
    key: "afterLink",
    value: function afterLink() {
      this.childNodes.forEach(function (child) {
        child.afterLink();
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
/* harmony import */ var _utility_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/message */ "./src/utility/message.js");
/* harmony import */ var _utility_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/handler */ "./src/utility/handler.js");
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
    key: "getProps",
    value: function getProps(scope, options) {
      var objProps = [];

      Object(_parser__WEBPACK_IMPORTED_MODULE_2__["compute"])(this.text, new Proxy(scope, new _utility_handler__WEBPACK_IMPORTED_MODULE_1__["GetPropertyHandler"](objProps, true)), options);

      return objProps;
    }
  }, {
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
      this.props = null;
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
    this.change = new _utility_message__WEBPACK_IMPORTED_MODULE_0__["Messenger"]();
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
        this.scope.$proxy(assignment.obj)[assignment.prop] = value;
      }
    }
  }, {
    key: "watchProps",
    value: function watchProps(action) {
      if (this.output) {
        return;
      }

      var self = this,
          objProps = [];
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
  }, {
    key: "detect",
    value: function detect(options) {
      if (this.output) {
        return false;
      }

      var self = this;
      this.compute();
      return this.segments.some(function (segment) {
        return segment.exp.detect(self.scope, options);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.segments.forEach(function (segment) {
        segment.exp.destroy();
      });
      this.scope = null;
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CustomNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(CustomNode, _VNode);

  function CustomNode(name, linker) {
    var _this;

    _classCallCheck(this, CustomNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomNode).call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].custom, name));
    _this.linker = linker;
    return _this;
  }

  _createClass(CustomNode, [{
    key: "link",
    value: function link(scope) {
      this.scope = scope;
      return this.linker.call(this, scope);
    }
  }, {
    key: "afterLink",
    value: function afterLink() {
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

  return CustomNode;
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
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom */ "./src/core/custom.js");
/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attribute */ "./src/core/attribute.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ElementNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(ElementNode, _VNode);

  function ElementNode() {
    var _this;

    _classCallCheck(this, ElementNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ElementNode).call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].element, name));
    _this.attributes = [];
    _this.element = null;
    _this.component = null;
    _this.selfClosed = false;
    _this.compileOptions = null;
    _this.isComponent = false;
    return _this;
  }

  _createClass(ElementNode, [{
    key: "$pushAttribute",
    value: function $pushAttribute(attr) {
      attr.ownerVElement = this;
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
        target.ownerVElement = this;
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
      if (attr.ownerVElement != null) {
        throw new Error("Current attribute is not new!");
      }

      attr.ownerVElement = this;
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
  }, {
    key: "compile",
    value: function compile(options) {
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
  }, {
    key: "directives",
    value: function directives() {
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
  }, {
    key: "link",
    value: function link(scope) {
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
      } else {
        this.attributes.forEach(function (attr) {
          attr.link(scope, self.element);
        });
        self.childNodes.forEach(function (child) {
          self.element.appendChild(child.link(scope));
        });
      }

      return self.element;
    }
  }, {
    key: "afterLink",
    value: function afterLink() {
      this.attributes.forEach(function (attr) {
        attr.afterLink();
      });

      if (this.component == null) {
        this.childNodes.forEach(function (child) {
          child.afterLink();
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
      this.removeDomElement();
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
    key: "getDomElement",
    value: function getDomElement() {
      return this.element;
    }
  }, {
    key: "removeDomElement",
    value: function removeDomElement() {
      if (this.element != null) {
        _utility_ele_utils__WEBPACK_IMPORTED_MODULE_0__["removeNode"](this.element);
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
    key: "createCustom",
    value: function createCustom(name, linker) {
      return new _custom__WEBPACK_IMPORTED_MODULE_2__["CustomNode"](name, linker);
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
    _this.element = null;
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
      this.binding.watchProps(function () {
        self.detect();
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
      _utility_ele_utils__WEBPACK_IMPORTED_MODULE_1__["replaceNode"](this.element, this.render(this.binding.value));
    }
  }, {
    key: "render",
    value: function render(value) {
      this.element = document.createTextNode(value);
      return this.element;
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
      this.element = null;
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
    value: function onInsert(ele, binding) {
      ele.innerText = binding.compute();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(ele, binding) {
      this.onInsert(ele, binding);
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
    value: function onCompile(attrNode, options) {
      var embedTpl = options.getEmbedTpl();

      if (embedTpl) {
        attrNode.ownerVElement.setInnerTpl(embedTpl);
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
    value: function onInsert(ele, binding) {
      ele.style.display = binding.compute() ? 'none' : 'initial';
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(ele, binding) {
      this.onInsert(ele, binding);
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
    _this.comment = null;
    return _this;
  }

  _createClass(IfDirective, [{
    key: "onInsert",
    value: function onInsert(ele, binding) {
      this.comment = document.createComment('n-if');

      if (!binding.compute()) {
        _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
      }
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(ele, binding) {
      if (binding.compute()) {
        if (ele.parentNode == null) {
          _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.comment, ele);
        }
      } else {
        if (ele.parentNode != null) {
          _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
        }
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.comment = null;
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
  selector: 'n-model'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(ModelDirective, _Directive);

  function ModelDirective() {
    _classCallCheck(this, ModelDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModelDirective).call(this));
  }

  _createClass(ModelDirective, [{
    key: "update",
    value: function update(ele, binding, com) {
      if (com == null) {
        ele.value = binding.compute();
      } else {
        com.$setAttr('value', binding.compute());
      }
    }
  }, {
    key: "onInsert",
    value: function onInsert(ele, binding, com) {
      this.update(ele, binding, com);

      if (com == null) {
        ele.addEventListener('change', function (e) {
          binding.assign(e.target.value);
        });
      } else {
        if (_utility__WEBPACK_IMPORTED_MODULE_2__["isMessenger"](com.change)) {
          com.change.on(function (e, args) {
            binding.assign(args.newvalue);
          });
        }

        throw new Error('Compoent ' + com.$$meta.selector + 'must define [change] event');
      }
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(ele, binding, com) {
      this.update(ele, binding, com);
    }
  }]);

  return ModelDirective;
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
    value: function onCompile(attrNode) {
      var arg = attrNode.nodeValue;
      var eleNode = attrNode.ownerVElement;
      var pattern = /^([a-z_]+\w+)\s+in\s+(.+)$/i;
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
        } else {
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
    value: function onInsert(ele, binding) {
      ele.style.display = binding.compute() ? 'initial' : 'none';
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(ele, binding) {
      this.onInsert(ele, binding);
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
    value: function onInsert(ele, binding) {
      if (binding.compute()) {
        if (!ele.hasAttribute(this.attrName)) {
          ele.setAttribute(this.attrName, '');
        }
      } else {
        if (ele.hasAttribute(this.attrName)) {
          ele.removeAttribute(this.attrName);
        }
      }
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(ele, binding) {
      this.onInsert(ele, binding);
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
    value: function onInsert(ele, binding) {
      var value = binding.compute();

      if (!value) {
        ele.removeAttribute('style');
      }

      if (_utility__WEBPACK_IMPORTED_MODULE_2__["isString"](value)) {
        ele.style = value;
      } else if (_utility__WEBPACK_IMPORTED_MODULE_2__["isObject"](value)) {
        _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](value, function (key, value) {
          ele.style[key] = value;
        });
        binding.scope.$watch(value, /\w+/i, function () {
          _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](value, function (key, value) {
            ele.style[key] = value;
          });
        });
      } else {
        throw new Error('Parameter of n-style should be string or object');
      }
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(ele, binding) {
      this.onInsert(ele, binding);
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
    _this.attrNode = null;
    _this.comment = null;
    _this.switchWhenDirs = [];
    return _this;
  }

  _createClass(SwitchDefaultDirective, [{
    key: "initSwitchWhenDirs",
    value: function initSwitchWhenDirs() {
      var vEle = this.attrNode.ownerVElement;

      while (vEle.previousSibling != null) {
        var whenDirs = vEle.previousSibling.getDirective('n-switch-when');

        if (whenDirs.length) {
          this.switchWhenDirs.push(whenDirs[0]);
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
    key: "onCompile",
    value: function onCompile(attrNode, options) {
      this.attrNode = attrNode;
    }
  }, {
    key: "onInsert",
    value: function onInsert(ele, binding) {
      var self = this;
      this.initSwitchWhenDirs();
      this.isMatch = this.match();
      this.comment = document.createComment('n-switch-default');

      if (!this.isMatch) {
        _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
      }

      this.switchWhenDirs.forEach(function (item) {
        item.isMatchChanged.on(function () {
          self.update(ele, binding);
        });
      });
    }
  }, {
    key: "update",
    value: function update(ele, binding) {
      var oldValue = this.isMatch,
          newValue = this.match();

      if (newValue !== oldValue) {
        this.isMatch = newValue;

        if (this.isMatch) {
          if (ele.parentNode == null) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.comment, ele);
          }
        } else {
          if (ele.parentNode != null) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
          }
        }
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.attrNode = null;
      this.comment = null;
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
    _this.attrNode = null;
    _this.comment = null;
    _this.switchDir = null;
    _this.isMatchChanged = new _utility_message__WEBPACK_IMPORTED_MODULE_3__["Messenger"]();
    return _this;
  }

  _createClass(SwitchWhenDirective, [{
    key: "initSwitchDir",
    value: function initSwitchDir() {
      var vEle = this.attrNode.ownerVElement;
      var switchDirs = vEle.parentNode.getDirective('n-switch');

      if (!switchDirs.length) {
        throw new Error('Require n-switch directive');
      }

      this.switchDir = switchDirs[0];
    }
  }, {
    key: "onCompile",
    value: function onCompile(attrNode, options) {
      this.attrNode = attrNode;
    }
  }, {
    key: "onInsert",
    value: function onInsert(ele, binding) {
      var self = this;
      this.initSwitchDir();
      this.comment = document.createComment('n-switch-when');
      this.isMatch = binding.compute() === this.switchDir.value;

      if (!this.isMatch) {
        _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
      }

      this.switchDir.valueChanged.on(function () {
        self.update(ele, binding);
      });
    }
  }, {
    key: "update",
    value: function update(ele, binding) {
      var oldValue = this.isMatch,
          newValue = binding.compute() === this.switchDir.value;

      if (newValue !== oldValue) {
        this.isMatch = newValue;
        this.isMatchChanged.fire();

        if (this.isMatch) {
          if (ele.parentNode == null) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.comment, ele);
          }
        } else {
          if (ele.parentNode != null) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
          }
        }
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.attrNode = null;
      this.comment = null;
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
    value: function onInsert(ele, binding) {
      this.value = binding.compute();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(ele, binding) {
      var oldValue = this.value,
          newValue = binding.compute();

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
/*! exports provided: isMessenger, namespace, injector, component, directive, filter, service, isComponent, isDirective, isFilter, isService, bootstrap, compile, compute, parse, parseExp, parseAssignment, forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementLoaded", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["queryElementLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementUnloaded", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["queryElementUnloaded"]; });

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
      attr.orgNodeName = token.text;
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
  options = options || {};

  options.createFilter = function (name) {
    return injector.createFilter(name);
  };

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

AstNode.prototype.compile = function (scope, options, context) {
  return this.childNodes.map(function (child) {
    return child.compile(scope, options || {}, context);
  });
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ProgramNode, AstNode);

function ProgramNode() {
  ProgramNode["super"].call(this, AST.Program);
}

ProgramNode.prototype.compile = function (scope, options) {
  return this.childNodes[0].compile(scope, options || {});
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
  if (this.test.compile(scope)) {
    return this.alternate.compile(scope, options);
  }

  return this.consequent.compile(scope, options);
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
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](MemberExpressionNode, AstNode);

function MemberExpressionNode(object, property, computed) {
  MemberExpressionNode["super"].call(this, AST.MemberExpression);
  this.object = object;
  this.property = property;
  this.computed = computed;
}

MemberExpressionNode.prototype.compile = function (scope, options, context) {
  var obj = this.object.compile(scope, options, context);

  if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"](obj)) {
    return obj[this.property.compile(obj, options, context)];
  }

  if (this.property instanceof MemberExpressionNode) {
    return obj[this.property.compile(scope, options, context)];
  }

  return this.property.compile(obj, options, context);
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](IdentifierNode, AstNode);

function IdentifierNode(name) {
  IdentifierNode["super"].call(this, AST.Identifier);
  this.name = name;
}

IdentifierNode.prototype.compile = function (scope, options, context) {
  if (context) {
    if (context.assignmentLeft || context.callee) {
      return {
        obj: scope,
        prop: this.name
      };
    } else if (context.propertyKey) {
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

  var next;

  while (next = this.expect('(', '[', '.')) {
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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"accordion\">\r\n    <div class=\"card\" *n-repeat=\"group in config.groups\">\r\n        <div class=\"card-header\" @click=\"toggle(group)\" *n-bind=\"group.title\"></div>\r\n\r\n        <div class=\"collapse show\" *n-collapse=\"group.collapsed\">\r\n            <div class=\"card-body\">\r\n                <div class=\"form-group\" *n-repeat=\"item in group.items\">\r\n                    <label :for=\"item.field\" class=\"col-form-label-sm\" *n-bind=\"item.label\"></label>\r\n                    <input :type=\"item.type\" class=\"form-control form-control-sm\" :id=\"item.field\" *n-model=\"entity[item.field]\">\r\n                    <small class=\"form-text text-muted\" *n-show=\"item.help\" *n-bind=\"item.help\"></small>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

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
      groups: []
    };
    return _this;
  }

  _createClass(FormComponent, [{
    key: "toggle",
    value: function toggle(group) {
      this.$proxy(group).collapsed = !group.collapsed;
    }
  }]);

  return FormComponent;
}(_view_component__WEBPACK_IMPORTED_MODULE_0__["Component"])) || _class);

/***/ }),

/***/ "./src/ui/component/index.js":
/*!***********************************!*\
  !*** ./src/ui/component/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/ui/component/form.js");
/* empty/unused harmony star reexport */

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
    _this.loaded = false;
    _this.duration = 400;
    _this.height = '';
    _this.display = '';
    _this.timeoutId = null;
    return _this;
  }

  _createClass(CollapseDirective, [{
    key: "onLoad",
    value: function onLoad(ele, binding) {
      this.loaded = true;
      this.height = ele.clientHeight;
      this.display = ele.style.display;
      ele.style.overflow = 'hidden';
      ele.style.transition = 'height ' + this.duration + 'ms';

      if (binding.compute()) {
        ele.style.display = 'none';
        ele.style.height = 0 + 'px';
      } else {
        ele.style.height = this.height + 'px';
      }
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(ele, binding) {
      if (!this.loaded) {
        return;
      }

      if (binding.compute()) {
        this.hide(ele);
      } else {
        this.show(ele);
      }
    }
  }, {
    key: "hide",
    value: function hide(ele) {
      ele.style.height = 0 + 'px';
      this.cancelTimeout();
      this.timeoutId = setTimeout(function () {
        ele.style.display = 'none';
        this.timeoutId = null;
      }, this.duration - 20);
    }
  }, {
    key: "show",
    value: function show(ele) {
      var height = this.height;
      ele.style.display = this.display;
      this.cancelTimeout();
      this.timeoutId = setTimeout(function () {
        ele.style.height = height + 'px';
        this.timeoutId = null;
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
    key: "onDestroy",
    value: function onDestroy() {
      this.cancelTimeout();
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
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/ui/index.js":
/*!*************************!*\
  !*** ./src/ui/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive */ "./src/ui/directive/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/ui/component/index.js");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "./src/utility/ele-utils.js":
/*!**********************************!*\
  !*** ./src/utility/ele-utils.js ***!
  \**********************************/
/*! exports provided: getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded */
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var propChangingMsg = new _message__WEBPACK_IMPORTED_MODULE_1__["Messenger"]();
var propChangedMsg = new _message__WEBPACK_IMPORTED_MODULE_1__["Messenger"]();

var SetPropertyHandler =
/*#__PURE__*/
function () {
  function SetPropertyHandler(deepProxy) {
    _classCallCheck(this, SetPropertyHandler);

    this.selfKey = '__self__';
    this.deepProxy = deepProxy;
  }

  _createClass(SetPropertyHandler, [{
    key: "get",
    value: function get(target, key) {
      if (this.selfKey === key) {
        return target;
      }

      var value = target[key];

      if (this.deepProxy && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
        value = new Proxy(value, new SetPropertyHandler(this.deepProxy));
      }

      return value;
    }
  }, {
    key: "set",
    value: function set(target, key, value) {
      if (this.deepProxy && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
        var self = value[this.selfKey]; // value is a proxy return by this handler

        if (self != null) {
          value = self;
        }
      }

      var oldValue = target[key];

      if (oldValue !== value || Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target) && key === 'length') {
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
  }]);

  return SetPropertyHandler;
}();

var GetPropertyHandler =
/*#__PURE__*/
function () {
  function GetPropertyHandler(propMaps, deepProxy) {
    _classCallCheck(this, GetPropertyHandler);

    this.propMaps = propMaps;
    this.deepProxy = deepProxy;
  }

  _createClass(GetPropertyHandler, [{
    key: "get",
    value: function get(target, key) {
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
  }]);

  return GetPropertyHandler;
}();



/***/ }),

/***/ "./src/utility/index.js":
/*!******************************!*\
  !*** ./src/utility/index.js ***!
  \******************************/
/*! exports provided: isMessenger, forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementLoaded", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["queryElementLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementUnloaded", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["queryElementUnloaded"]; });





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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var PropertyChangeSubject =
/*#__PURE__*/
function () {
  function PropertyChangeSubject() {
    _classCallCheck(this, PropertyChangeSubject);

    this.plainMap = new Map();
    this.regexMap = new Map();
  }

  _createClass(PropertyChangeSubject, [{
    key: "on",
    value: function on(prop, action, options) {
      var map = _utils__WEBPACK_IMPORTED_MODULE_0__["isRegExp"](prop) ? this.regexMap : this.plainMap;

      if (!map.has(prop)) {
        map.set(prop, []);
      }

      if (options) {
        action.beforeChanged = options.beforeChanged;
      }

      map.get(prop).push(action);
    }
  }, {
    key: "off",
    value: function off(prop, action) {
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

  return PropertyChangeSubject;
}();

var ObjectPropertyChangeSubject =
/*#__PURE__*/
function () {
  function ObjectPropertyChangeSubject() {
    _classCallCheck(this, ObjectPropertyChangeSubject);

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

    _handler__WEBPACK_IMPORTED_MODULE_1__["propChangingMsg"].on(onchanging);
    _handler__WEBPACK_IMPORTED_MODULE_1__["propChangedMsg"].on(onchanged);

    this.offChange = function () {
      _handler__WEBPACK_IMPORTED_MODULE_1__["propChangingMsg"].off(onchanging);
      _handler__WEBPACK_IMPORTED_MODULE_1__["propChangedMsg"].off(onchanged);
    };

    this.objMap = new Map();
  }

  _createClass(ObjectPropertyChangeSubject, [{
    key: "on",
    value: function on(obj, prop, action, options) {
      if (!this.objMap.has(obj)) {
        this.objMap.set(obj, new PropertyChangeSubject());
      }

      this.objMap.get(obj).on(prop, action, options);
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

  return ObjectPropertyChangeSubject;
}();



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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Component =
/*#__PURE__*/
function () {
  _createClass(Component, [{
    key: "proxy",
    get: function get() {
      return new Proxy(this, new _utility_handler__WEBPACK_IMPORTED_MODULE_3__["SetPropertyHandler"](true));
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
    key: "$bindVNode",
    value: function $bindVNode(vnode) {
      this.$$ownerVNode = vnode;
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

      _utility_utils__WEBPACK_IMPORTED_MODULE_1__["setProperty"](this.proxy, prop, value, true);

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
          return this.$$ownerVNode.getInnerTpl();
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
    key: "$hasVNodes",
    value: function $hasVNodes() {
      return _utility_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"](this.$$vnodes);
    }
  }, {
    key: "$fromVNodes",
    value: function $fromVNodes() {
      var fragment = document.createDocumentFragment();
      this.$$vnodes.forEach(function (vnode) {
        fragment.appendChild(vnode.getDomElement());
      });
      return fragment;
    }
  }, {
    key: "$clearVNodes",
    value: function $clearVNodes() {
      if (!this.$hasVNodes()) {
        return;
      }

      this.$$vnodes.forEach(function (vnode) {
        vnode.destroy();
      });
      this.$$vnodes = null;
    }
  }, {
    key: "$render",
    value: function $render(sync) {
      var self = this,
          fragment = null;

      if (sync) {
        if (this.$hasVNodes()) {
          fragment = this.$fromVNodes();
        } else {
          fragment = Object(_parser__WEBPACK_IMPORTED_MODULE_6__["compile"])(this.$getTemplate(sync), this.$makeCompileOptions())(this);
        }

        return fragment;
      }

      return new Promise(function (resolve) {
        if (self.$hasVNodes()) {
          resolve(self.$fromVNodes());
        } else {
          self.$getTemplate().then(function (html) {
            fragment = Object(_parser__WEBPACK_IMPORTED_MODULE_6__["compile"])(html, self.$makeCompileOptions())(self);
            resolve(fragment);
          });
        }
      });
    }
  }, {
    key: "$refresh",
    value: function $refresh(sync) {
      this.$clearVNodes();
      return this.$render(sync);
    }
  }, {
    key: "$mount",
    value: function $mount(selectorOrElement, sync) {
      var self = this,
          element;

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](selectorOrElement)) {
        element = document.querySelector(selectorOrElement);
      } else {
        element = selectorOrElement;
      }

      _utility_ele_utils__WEBPACK_IMPORTED_MODULE_2__["clearChildNodes"](element);

      if (sync) {
        element.appendChild(this.$render(sync));
        self.$afterViewMount();
      } else {
        this.$render(sync).then(function (ele) {
          element.appendChild(ele);
          self.$afterViewMount();
        });
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
    key: "$unmount",
    value: function $unmount() {
      if (this.$$ownerVNode != null) {
        this.$$ownerVNode.$remove();
        this.$$ownerVNode.removeDomElement();
      } else if (this.$hasVNodes()) {
        this.$$vnodes.forEach(function (vnode) {
          vnode.removeDomElement();
        });
      }

      if (this.$$parentComponent != null) {
        this.$$parentComponent.$removeChild(this);
        this.$$parentComponent = null;
      }
    }
  }, {
    key: "$detect",
    value: function $detect() {
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

      this.$$propChanged.on(obj, prop, action, {
        beforeChanged: true
      });
      return function () {
        self.$$propChanged.off(obj, prop, action);
      };
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

      this.$$propChanged.on(obj, prop, action);
      return function () {
        self.$$propChanged.off(obj, prop, action);
      };
    }
  }, {
    key: "$removeChild",
    value: function $removeChild(child) {
      var index = this.$$childComponents.indexOf(child);

      if (index !== -1) {
        this.$$childComponents.splice(index, 1);
        child.$$parentComponent = null;
      }
    }
  }, {
    key: "$dispose",
    value: function $dispose(isFromVNode) {
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
  }, {
    key: "$destroy",
    value: function $destroy() {
      this.$dispose(); // destroy virtual node in the end because it may binds logic about destroy

      if (this.$$ownerVNode != null) {
        this.$$ownerVNode.dispose(true);
        this.$$ownerVNode = null;
      }
    }
  }, {
    key: "$getParent",
    value: function $getParent() {
      return this.$$parentComponent;
    }
  }, {
    key: "$createComponent",
    value: function $createComponent(constructor) {
      var component = _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].createComponent(constructor);
      this.$$childComponents.push(component);
      component.$$parentComponent = this;
      return component;
    }
  }, {
    key: "$eval",
    value: function $eval(exp) {
      return Object(_parser__WEBPACK_IMPORTED_MODULE_6__["compute"])(exp, this);
    }
  }, {
    key: "$inherit",
    value: function $inherit(parentCmp) {
      var self = this;
      Object.setPrototypeOf(self, _utility_utils__WEBPACK_IMPORTED_MODULE_1__["object"](parentCmp)); // todo - resolve issue calling parent component's lifecycle hooks

      _utility_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"](self.$hooks(), function (hook) {
        if (self.hasOwnProperty(hook) == null) {
          self[hook] = function () {};
        }
      });
    }
  }, {
    key: "$proxy",
    value: function $proxy(data) {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"](data)) {
        return new Proxy(data, new _utility_handler__WEBPACK_IMPORTED_MODULE_3__["SetPropertyHandler"](true));
      }

      return data;
    }
  }], [{
    key: "construct",
    value: function construct(meta) {
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
/* harmony import */ var _utility_ele_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/ele-utils */ "./src/utility/ele-utils.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Directive =
/*#__PURE__*/
function () {
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
    key: "$bindVNode",
    value: function $bindVNode(vnode) {
      this.$$vnode = vnode;
    }
  }, {
    key: "$setBinding",
    value: function $setBinding(binding) {
      this.$$binding = binding;
    }
  }, {
    key: "$compile",
    value: function $compile(options) {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onCompile)) {
        this.onCompile.call(this, this.$$vnode, options);
      }
    }
  }, {
    key: "$insert",
    value: function $insert(ele, com) {
      var self = this;

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onInsert)) {
        this.onInsert.call(this, ele, this.$$binding, com);
      }

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onLoad)) {
        this.$$disposers.push(_utility_ele_utils__WEBPACK_IMPORTED_MODULE_1__["queryElementLoaded"](ele, function () {
          self.onLoad.call(self, ele, self.$$binding, com);
        }));
      }

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onUnload)) {
        this.$$disposers.push(_utility_ele_utils__WEBPACK_IMPORTED_MODULE_1__["queryElementUnloaded"](ele, function () {
          self.onUnload.call(self, ele, self.$$binding, com);
        }));
      }
    }
  }, {
    key: "$detect",
    value: function $detect(ele, com) {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDetect)) {
        return this.onDetect.call(this, ele, this.$$binding, com);
      }

      if (this.$$binding.detect()) {
        this.$update(ele, com);
      }
    }
  }, {
    key: "$update",
    value: function $update(ele, com) {
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onUpdate)) {
        this.onUpdate.call(this, ele, this.$$binding, com);
      }
    }
  }, {
    key: "$dispose",
    value: function $dispose(isFromVNode) {
      var self = this;

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
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
  }, {
    key: "$destroy",
    value: function $destroy() {
      this.$dispose();

      if (this.$$vnode != null) {
        this.$$vnode.dispose(true);
        this.$$vnode = null;
      }
    }
  }], [{
    key: "construct",
    value: function construct() {
      this.$$binding = null;
      this.$$vnode = null;
      this.$$disposers = [];
      this.output = false;
      _injector__WEBPACK_IMPORTED_MODULE_2__["injector"].injectServices(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2NkYXRhc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY3VzdG9tLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9kb2N0eXBlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS90ZXh0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RlY29yYXRvci9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2VtYmVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2hpZGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvaWYuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvcmVwZWF0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9kaXNhYmxlZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9yZWFkb25seS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zZWxlY3RlZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC1kZWZhdWx0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2gtd2hlbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9wYXJzZXIvaHRtbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9odG1sLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9sZXhlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvc2VydmljZS90ZW1wbGF0ZS1jYWNoZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3VpL2NvbXBvbmVudC9mb3JtLmh0bWwiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91aS9jb21wb25lbnQvZm9ybS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3VpL2NvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3VpL2RpcmVjdGl2ZS9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3VpL2RpcmVjdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3VpL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9lbGUtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9tZXNzYWdlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9zdWJqZWN0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS91dGlscy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvY29tcG9uZW50LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2luamVjdG9yLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9zZXJ2aWNlLmpzIiwid2VicGFjazovL3NpbmUvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImF4aW9zXCIsXCJjb21tb25qczJcIjpcImF4aW9zXCIsXCJhbWRcIjpcImF4aW9zXCIsXCJyb290XCI6XCJheGlvc1wifSJdLCJuYW1lcyI6WyJldmVudFRleHQiLCJkb21FdmVudHMiLCJzcGxpdCIsIkF0dHJOb2RlIiwibmFtZSIsInZhbHVlIiwiVk5vZGVUeXBlIiwiYXR0cmlidXRlIiwicXVvdGUiLCJvcmdOb2RlTmFtZSIsImlzRXZlbnQiLCJpc0JpbmRpbmciLCJpc0RvbUV2ZW50IiwiaXNEaXJlY3RpdmUiLCJkaXJlY3RpdmUiLCJvd25lclZFbGVtZW50Iiwib3duZXJFbGVtZW50Iiwib3duZXJDb21wb25lbnQiLCJiaW5kaW5nIiwiQmluZGluZyIsImtleSIsIm5vZGVWYWx1ZSIsImNvbXBpbGUiLCJvcHRpb25zIiwibm9kZU5hbWUiLCJzdGFydHNXaXRoIiwic3Vic3RyIiwidXRpbHMiLCJzZXRPdXRwdXQiLCJiaW5kIiwiY29udGFpbnNEaXJlY3RpdmUiLCJjcmVhdGVEaXJlY3RpdmUiLCIkYmluZFZOb2RlIiwib3V0cHV0IiwiRXJyb3IiLCJzY29wZSIsInNlbGYiLCJzZXRTY29wZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29tcHV0ZSIsImxvY2FscyIsIiRldmVudCIsIiRhcmdzIiwiJGVsZW1lbnQiLCIkbGlzdGVuIiwiYXJncyIsIiQkY2hpbGREaXJlY3RpdmVzIiwicHVzaCIsIiRzZXRCaW5kaW5nIiwiJGhhc0F0dHIiLCIkaW5pdEF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJ3YXRjaFByb3BzIiwiZGV0ZWN0IiwiaGFzQ2hhbmdlIiwidXBkYXRlIiwiJGRldGVjdCIsIiRzZXRBdHRyIiwiJGluc2VydCIsImlzRnJvbURpcmVjdGl2ZSIsImRlc3Ryb3kiLCIkZGVzdHJveSIsIiRkaXNwb3NlIiwiZGlzcG9zZSIsIlZOb2RlIiwiZWxlbWVudCIsInRleHQiLCJjZGF0YVNlY3Rpb24iLCJlbnRpdHlSZWZlcmVuY2UiLCJlbnRpdHkiLCJwcm9jZXNzaW5nSW5zdHJ1Y3Rpb24iLCJjb21tZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudFR5cGUiLCJkb2N1bWVudEZyYWdtZW50Iiwibm90YXRpb24iLCJjdXN0b20iLCJ0eXBlIiwibm9kZVR5cGUiLCJjaGlsZE5vZGVzIiwicGFyZW50Tm9kZSIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsIm93bmVyVkRvY3VtZW50IiwiY2hpbGQiLCJsZW5ndGgiLCJmb3JFYWNoIiwiaW5kZXgiLCIkYnVpbGRTaWJsaW5nIiwicmVtb3ZlQ2hpbGQiLCIkcmVtb3ZlIiwiJGNsZWFyUGFyZW50QW5kU2libGluZyIsImNvbXBpbGVPcHRpb25zIiwicmVmQ2hpbGQiLCJuZXdDaGlsZCIsImluZGV4T2YiLCJzcGxpY2UiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsInJlc3VsdCIsIm1hcCIsImRpcmVjdGl2ZXMiLCJpdGVtIiwiY29uY2F0IiwibGluayIsImFmdGVyTGluayIsIkV4cE5vZGUiLCJvbGRWYWx1ZSIsIm9ialByb3BzIiwiUHJveHkiLCJHZXRQcm9wZXJ0eUhhbmRsZXIiLCJwcm9wcyIsImlzRXhwIiwic2VnbWVudHMiLCJyaWdodFN0ciIsImNoYW5nZSIsIk1lc3NlbmdlciIsImV4cCIsImxlZnRTdHIiLCJwYXR0ZXJuIiwibGFzdEluZGV4IiwibWF0Y2giLCJleGVjIiwic3Vic3RyaW5nIiwic2VnbWVudCIsImFzc2lnbm1lbnQiLCJwYXJzZUFzc2lnbm1lbnQiLCJvYmoiLCJwcm9wIiwiJHByb3h5IiwiYWN0aW9uIiwiZ2V0UHJvcHMiLCJvYmpQcm9wIiwiJHdhdGNoIiwiZmlyZSIsIm9uIiwic29tZSIsIkNEYXRhU2VjdGlvbk5vZGUiLCJDb21tZW50Tm9kZSIsImNyZWF0ZUNvbW1lbnQiLCJDdXN0b21Ob2RlIiwibGlua2VyIiwiY2FsbCIsIm9uSW5zZXJ0Iiwib25EZXRlY3QiLCJvbkhhc0NoYW5nZSIsIm9uVXBkYXRlIiwib25EZXN0cm95IiwiRG9jdW1lbnRUeXBlTm9kZSIsIkRvY3VtZW50Tm9kZSIsIkVsZW1lbnROb2RlIiwiYXR0cmlidXRlcyIsImNvbXBvbmVudCIsInNlbGZDbG9zZWQiLCJpc0NvbXBvbmVudCIsImF0dHIiLCJ0YXJnZXQiLCJtYXRjaGVzIiwiZmlsdGVyIiwiYmVsb25nVG8iLCJzZXRWYWx1ZSIsImF0dHJUcGwiLCJjaGlsZFRwbCIsImdldE91dGVyVHBsIiwidHBsIiwicGFyc2UiLCJ2bm9kZSIsImNsZWFyQ2hpbGROb2RlcyIsIiQkbWV0YSIsInNlbGVjdG9yIiwiY29udGFpbnNDb21wb25lbnQiLCJjcmVhdGVFbGVtZW50IiwiJGNyZWF0ZUNvbXBvbmVudCIsIiRpbml0QXR0ckRvbmUiLCIkbW91bnQiLCJpc0Zyb21Db21wb25lbnQiLCJyZW1vdmVEb21FbGVtZW50IiwiZWxlVXRpbHMiLCJEb2N1bWVudEZyYWdtZW50Tm9kZSIsIlRleHROb2RlIiwicmVuZGVyIiwiY3JlYXRlVGV4dE5vZGUiLCJtZXRhIiwiaW5qZWN0b3IiLCJyZWdpc3RlckNvbnN0cnVjdG9yIiwidHlwZUNvbnN0Iiwic2VydmljZSIsIkJpbmREaXJlY3RpdmUiLCJuYW1lc3BhY2UiLCJlbGUiLCJpbm5lclRleHQiLCJEaXJlY3RpdmUiLCJFbWJlZERpcmVjdGl2ZSIsImF0dHJOb2RlIiwiZW1iZWRUcGwiLCJnZXRFbWJlZFRwbCIsInNldElubmVyVHBsIiwiSGlkZURpcmVjdGl2ZSIsInN0eWxlIiwiZGlzcGxheSIsIklmRGlyZWN0aXZlIiwiTW9kZWxEaXJlY3RpdmUiLCJjb20iLCJhc3NpZ24iLCJuZXd2YWx1ZSIsIlJlcGVhdERpcmVjdGl2ZSIsIml0ZW1FeHAiLCJpdGVtc0V4cCIsIml0ZW1UZW1wbGF0ZSIsImRhdGFJdGVtcyIsImNtcEl0ZW1zIiwiaGVhZGVyIiwiZm9vdGVyIiwiYXJnIiwiZWxlTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsImNyZWF0ZUN1c3RvbSIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIml0ZW1zIiwiJGV2YWwiLCJzZXREYXRhSXRlbXMiLCJyZXBsYWNlQ2hpbGQiLCJjaGlsZFNjb3BlIiwiY21wSXRlbSIsImRhdGFJdGVtIiwiZmlsdGVycyIsIm5ld0NtcEl0ZW1zIiwiZ2V0Q21wSXRlbSIsIkNvbXBvbmVudCIsInRlbXBsYXRlIiwiJGluaGVyaXQiLCIkcmVuZGVyIiwicmVwZWF0SXRlbSIsIlNob3dEaXJlY3RpdmUiLCJDaGVja2VkRGlyZWN0aXZlIiwiU3RhdGVEaXJlY3RpdmUiLCJEaXNhYmxlZERpcmVjdGl2ZSIsIlJlYWRvbmx5RGlyZWN0aXZlIiwiU2VsZWN0ZWREaXJlY3RpdmUiLCJhdHRyTmFtZSIsImhhc0F0dHJpYnV0ZSIsIlN0eWxlRGlyZWN0aXZlIiwiU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSIsImlzTWF0Y2giLCJzd2l0Y2hXaGVuRGlycyIsInZFbGUiLCJ3aGVuRGlycyIsImdldERpcmVjdGl2ZSIsImluaXRTd2l0Y2hXaGVuRGlycyIsImlzTWF0Y2hDaGFuZ2VkIiwibmV3VmFsdWUiLCJTd2l0Y2hXaGVuRGlyZWN0aXZlIiwic3dpdGNoRGlyIiwic3dpdGNoRGlycyIsImluaXRTd2l0Y2hEaXIiLCJ2YWx1ZUNoYW5nZWQiLCJTd2l0Y2hEaXJlY3RpdmUiLCJIdG1sTGV4ZXIiLCJMZXhlciIsInByb3RvdHlwZSIsImlzVmFsaWRJZGVudGlmaWVyU3RhcnQiLCJjaCIsImlzVmFsaWRJZGVudGlmaWVyQ29udGludWUiLCJjcCIsImlzTnVtYmVyIiwiZXhwZWN0U3RyaW5nIiwic3RyIiwibnVtIiwicmVhZENvbW1lbnQiLCJiZWdpbiIsImVuZCIsInN0YXJ0Iiwic3RyaW5nIiwicmF3U3RyaW5nIiwiY2hhckF0IiwidG9rZW5zIiwidGhyb3dFcnJvciIsInJlYWRUZXh0IiwiY2gyIiwicGVlayIsImlzSWRlbnRpZmllclN0YXJ0IiwidGV4dFRhZyIsInJlYWRUYWciLCJjbG9zaW5nIiwiZG9jdHlwZSIsInRhZyIsInJlYWRJZGVudCIsInBlZWtNdWx0aWNoYXIiLCJyZWFkU3RyaW5nIiwiaXNXaGl0ZXNwYWNlIiwiZXF1YWwiLCJsZXgiLCJhbGxvd0RvY1R5cGUiLCJjaDMiLCJIdG1sUGFyc2VyIiwiUGFyc2VyIiwibGV4ZXIiLCJmYXJnbWVudCIsInRva2VuIiwiY3VycmVudCIsIiRwdXNoQ2hpbGQiLCJuZXh0IiwiZG9jVHlwZSIsImlkZW50aWZpZXIiLCJhdHRycyIsInAiLCIkcHVzaEF0dHJpYnV0ZSIsImNoaWxkRWxlbWVudHMiLCJlbGVzIiwiY29uc3RhbnQiLCJwYXJzZU9wdGlvbnMiLCJpc0lkZW50aWZpZXJDb250aW51ZSIsImxpdGVyYWxzIiwidW5kZWZpbmVkIiwiaHRtbCIsInBhcnNlciIsImRlZmF1bHRzIiwiY3JlYXRlQ29tcG9uZW50Iiwic2V0dGluZ3MiLCJhc3ROb2RlcyIsImFzdE5vZGUiLCIkY29tcGlsZSIsIiQkdm5vZGVzIiwibm9kZSIsImNyZWF0ZUZpbHRlciIsInBhcnNlRXhwIiwidHJpbSIsInJlcGxhY2UiLCJhc3QiLCJtZW1iZXJFeHAiLCJnZXRNZW1iZXJFeHByZXNzaW9uIiwib2JqZWN0IiwicHJvcGVydHkiLCJPUEVSQVRPUlMiLCJvcGVyYXRvclRleHQiLCJFU0NBUEUiLCJvcGVyYXRvciIsInJlYWROdW1iZXIiLCJpcyIsIm9wMSIsIm9wMiIsIm9wMyIsImNoYXJzIiwiaSIsImNvZGVQb2ludEF0IiwiY2hhckNvZGVBdCIsImNwMSIsImNwMiIsImlzRXhwT3BlcmF0b3IiLCJlcnJvciIsImNvbFN0ciIsIm51bWJlciIsInBlZWtDaCIsIk51bWJlciIsInNsaWNlIiwiZXNjYXBlIiwiaGV4IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJyZXAiLCJBU1QiLCJQcm9ncmFtIiwiRXhwcmVzc2lvblN0YXRlbWVudCIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uIiwiTG9naWNhbEV4cHJlc3Npb24iLCJCaW5hcnlFeHByZXNzaW9uIiwiVW5hcnlFeHByZXNzaW9uIiwiQ2FsbEV4cHJlc3Npb24iLCJNZW1iZXJFeHByZXNzaW9uIiwiSWRlbnRpZmllciIsIkxpdGVyYWwiLCJBcnJheUV4cHJlc3Npb24iLCJQcm9wZXJ0eSIsIk9iamVjdEV4cHJlc3Npb24iLCJBc3ROb2RlIiwiY29udGV4dCIsIlByb2dyYW1Ob2RlIiwiRXhwcmVzc2lvblN0YXRlbWVudE5vZGUiLCJNZW1iZXJFeHByZXNzaW9uTm9kZSIsIkFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSIsImxlZnQiLCJyaWdodCIsImFzc2lnbm1lbnRMZWZ0IiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSIsInRlc3QiLCJhbHRlcm5hdGUiLCJjb25zZXF1ZW50IiwiTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsIkJpbmFyeUV4cHJlc3Npb25Ob2RlIiwiVW5hcnlFeHByZXNzaW9uTm9kZSIsInByZWZpeCIsIkxpdGVyYWxOb2RlIiwiQ2FsbEV4cHJlc3Npb25Ob2RlIiwiY2FsbGVlIiwiYXJnVmFsdWVzIiwiZmlsdGVySW5zIiwiaXNGaWx0ZXIiLCIkZXhlY3V0ZSIsImFwcGx5IiwiZm4iLCJjb21wdXRlZCIsIklkZW50aWZpZXJOb2RlIiwicHJvcGVydHlLZXkiLCJBcnJheUV4cHJlc3Npb25Ob2RlIiwiUHJvcGVydHlOb2RlIiwia2luZCIsIk9iamVjdEV4cHJlc3Npb25Ob2RlIiwicHJvcGVydGllcyIsImRlZiIsImlzQXNzaWduYWJsZSIsIm1zZyIsInByb2dyYW0iLCJleHByZXNzaW9uU3RhdGVtZW50IiwiZXhwZWN0IiwiZmlsdGVyQ2hhaW4iLCJleHByZXNzaW9uIiwidGVybmFyeSIsImxvZ2ljYWxPUiIsImNvbnN1bWUiLCJsb2dpY2FsQU5EIiwiZXF1YWxpdHkiLCJyZWxhdGlvbmFsIiwiYWRkaXRpdmUiLCJtdWx0aXBsaWNhdGl2ZSIsInVuYXJ5IiwicHJpbWFyeSIsImFycmF5RGVjbGFyYXRpb24iLCJoYXNPd25Qcm9wZXJ0eSIsInBhcnNlQXJndW1lbnRzIiwiYmFzZUV4cHJlc3Npb24iLCJpZGVudGlmaWVycyIsImVudGlyZU5hbWUiLCJqb2luIiwicGVla1Rva2VuIiwiYXJyIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJwZWVrQWhlYWQiLCJ0Iiwic2hpZnQiLCJUZW1wbGF0ZUNhY2hlU2VydmljZSIsInRwbENhY2hlIiwicHJvbWlzZUNhY2hlIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiU2VydmljZSIsIkZvcm1Db21wb25lbnQiLCJjb25maWciLCJncm91cHMiLCJncm91cCIsImNvbGxhcHNlZCIsIkNvbGxhcHNlRGlyZWN0aXZlIiwibG9hZGVkIiwiZHVyYXRpb24iLCJoZWlnaHQiLCJ0aW1lb3V0SWQiLCJjbGllbnRIZWlnaHQiLCJvdmVyZmxvdyIsInRyYW5zaXRpb24iLCJoaWRlIiwic2hvdyIsImNhbmNlbFRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZ2V0Q2hpbGROb2RlcyIsIkFycmF5IiwicmVwbGFjZU5vZGUiLCJyZWZOb2RlIiwibmV3Tm9kZSIsInJlbW92ZU5vZGUiLCJyZW1vdmVOb2RlQmV0d2VlbiIsImJlZ2luTm9kZSIsImVuZE5vZGUiLCJpbnNlcnROb2RlQWZ0ZXIiLCJxdWVyeUVsZW1lbnRMb2FkZWQiLCJjYWxsYmFjayIsImNhbmNlbFRva2VuIiwicXVlcnkiLCJjbGllbnRXaWR0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInF1ZXJ5RWxlbWVudFVubG9hZGVkIiwicHJvcENoYW5naW5nTXNnIiwicHJvcENoYW5nZWRNc2ciLCJTZXRQcm9wZXJ0eUhhbmRsZXIiLCJkZWVwUHJveHkiLCJzZWxmS2V5IiwiaXNPYmplY3QiLCJpc0FycmF5IiwidmFsaWRhdGlvbiIsImlzVmFsaWQiLCJwcm9wTWFwcyIsImV4aXN0ZWQiLCJpc01lc3NlbmdlciIsImhhbmRsZXJzIiwicmV0dXJuVmFsdWUiLCJNZXNzZW5nZXJCdXMiLCJtZXNzZW5nZXJzIiwib2ZmIiwiUHJvcGVydHlDaGFuZ2VTdWJqZWN0IiwicGxhaW5NYXAiLCJNYXAiLCJyZWdleE1hcCIsImhhcyIsInNldCIsImJlZm9yZUNoYW5nZWQiLCJhY3Rpb25zIiwiY2xlYXIiLCJPYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3QiLCJvbmNoYW5naW5nIiwiZmlyZUNoYW5naW5nIiwib25jaGFuZ2VkIiwiZmlyZUNoYW5nZWQiLCJvZmZDaGFuZ2UiLCJvYmpNYXAiLCJkZWJ1Z01vZGUiLCJ0b1N0cmluZyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiaWdub3JlT3duIiwiY29weSIsImRlZXAiLCJvYmpJbmRleCIsImFyZ3VtZW50cyIsImlzQm9vbGVhbiIsIm5ld0FyciIsIm5ld09iaiIsImV4dGVuZCIsImRlZXBNZXJnZSIsInBsYWluTWVyZ2UiLCJtZXJnZSIsInNvdXJjZSIsIm8iLCJGIiwiaW5oZXJpdFByb3RvdHlwZSIsInN1YlR5cGUiLCJzdXBlclR5cGUiLCJjb25zdHJ1Y3RvciIsImluaGVyaXQiLCJsb3dlcmNhc2UiLCJpc1N0cmluZyIsInRvTG93ZXJDYXNlIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJpc1VuZGVmaW5lZCIsImlzRGVmaW5lZCIsImlzTWFwIiwiaXNCbGFua09iamVjdCIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc1JlZ0V4cCIsImlzU2FtZSIsIm9iajEiLCJvYmoyIiwic2FtZSIsImRlYnVnIiwibG9nIiwiY29uc29sZSIsImNvbnRhaW5zIiwiY29udGFpbnNTdHIiLCJpZ25vcmVDYXNlIiwiaGFzUHJvcGVydHkiLCJrZXkyIiwiaGFzUHJvcCIsImtleXMiLCJrZXkzIiwidmFsdWUzIiwiZ2V0UHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImNvbnN0cnVjdCIsImJlZm9yZUF0dHJDaGFuZ2UiLCJhZnRlckF0dHJDaGFuZ2UiLCJvbkluaXQiLCJhZnRlclZpZXdNb3VudCIsIiQkb3duZXJWTm9kZSIsInByb3h5IiwibWVzc2VuZ2VyIiwic3luYyIsIiRnZXRNZXRhIiwidGVtcGxhdGVVcmwiLCJnZXRUcGxCeVVybCIsInVzaW5nIiwiY2xhc3NOYW1lIiwicG9wIiwic3BhY2VOYW1lIiwiZ2V0SW5uZXJUcGwiLCIkdXNpbmciLCJnZXREb21FbGVtZW50IiwiJGhhc1ZOb2RlcyIsIiRmcm9tVk5vZGVzIiwiJGdldFRlbXBsYXRlIiwiJG1ha2VDb21waWxlT3B0aW9ucyIsIiRjbGVhclZOb2RlcyIsInNlbGVjdG9yT3JFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIiRhZnRlclZpZXdNb3VudCIsIiQkcGFyZW50Q29tcG9uZW50IiwiJHJlbW92ZUNoaWxkIiwiJCRkZXRlY3RUaW1lb3V0IiwiJCRwcm9wQ2hhbmdlZCIsIiQkY2hpbGRDb21wb25lbnRzIiwiaXNGcm9tVk5vZGUiLCIkdW5tb3VudCIsInBhcmVudENtcCIsInNldFByb3RvdHlwZU9mIiwiJGhvb2tzIiwiaG9vayIsIiRzZXRNZXRhIiwiaW5qZWN0U2VydmljZXMiLCJvbkNvbXBpbGUiLCIkJHZub2RlIiwiJCRiaW5kaW5nIiwib25Mb2FkIiwiJCRkaXNwb3NlcnMiLCJvblVubG9hZCIsIiR1cGRhdGUiLCJkaXNwb3NlciIsIkZpbHRlciIsIm9uRXhlY3V0ZSIsIm5zIiwibWV0aG9kcyIsImJ1aWxkQ29uc3RydWN0b3IiLCJjb250cmFjdFR5cGUiLCJzdXBlckNsYXNzIiwibWFrZUNvbnN0cnVjdG9yIiwiaXNTZXJ2aWNlIiwiYm9vdHN0cmFwIiwiaW5uZXJIVE1MIiwiY2xzIiwiZiIsIm5hbWVQYXR0ZXJuIiwiSW5qZWN0b3IiLCJjb250YWluZXIiLCJ3YWl0aW5nVG9FeHRlbmRzIiwiaW5zQ29udGFpbmVyIiwibWFwcGluZyIsImdldE1hcHBpbmciLCJyZWdpc3RlciIsImNvbnN0cnVjdG9ycyIsIm5hbWVzcGFjZXMiLCJpbnN0YW5jZSIsImNyZWF0ZVNlcnZpY2UiLCJnZXRDb21wb25lbnQiLCJnZXRGaWx0ZXIiLCJzZXJ2aWNlcyIsImdldEluc3RhbmNlcyIsImdldFNlcnZpY2UiLCJub25TaGFyZWQiLCJjb25zdHJ1Y3Rvck5hbWUiLCJjaGVja1NlbGVjdG9yIiwiZ2V0V2FpdGluZ1RvRXh0ZW5kcyIsIm9uQ29uc3RydWN0IiwiRnVuY3Rpb24iLCJzdXBlck9uZSIsInJlbWFpbkNvbnN0cnVjdG9yIiwic3VwZXJOYW1lIiwiZXh0ZW5kTWV0YSIsInN1cGVyTWV0YSIsIndhaXRpbmdUb0V4dGVuZHMyIiwiZnVsbFNlbGVjdG9yIiwic2V0V2FpdGluZ1RvRXh0ZW5kcyIsImxvY2FsIiwiaW5qZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicHJpdmF0ZUtleSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7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aUJBQVMsRUFBRTtBQUZSLE9BQVA7QUFJSDtBQWRMO0FBQUE7QUFBQSwrQkFnQmU7QUFDUCxhQUFPLEtBQUtxQixNQUFMLElBQWUsRUFBdEI7QUFDSDtBQWxCTDtBQUFBO0FBQUEsNkJBb0JhdEssS0FwQmIsRUFvQm9CO0FBQ1osV0FBS3NLLE1BQUwsR0FBY3RLLEtBQWQ7QUFDSDtBQXRCTDtBQUFBO0FBQUEsK0JBd0JlO0FBQ1AsVUFBSXNCLHlEQUFBLENBQWlCLEtBQUsySCxTQUF0QixDQUFKLEVBQXNDO0FBQ2xDLGFBQUtBLFNBQUwsQ0FBZUwsSUFBZixDQUFvQixJQUFwQjtBQUNIO0FBQ0o7QUE1Qkw7QUFBQTtBQUFBLGdDQUt1QjtBQUNmeUMsd0RBQVEsQ0FBQ3FiLGNBQVQsQ0FBd0IsSUFBeEI7QUFDSDtBQVBMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7QUNIQSxtRCIsImZpbGUiOiJzaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYXhpb3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiYXhpb3NcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic2luZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImF4aW9zXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzaW5lXCJdID0gZmFjdG9yeShyb290W1wiYXhpb3NcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2F4aW9zX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBCaW5kaW5nIH0gZnJvbSAnLi9iaW5kaW5nJztcblxuLy8gLy8gV2luZG93IEV2ZW50c1xuLy8gY2FzZSAnb24tbG9hZCc6XG4vLyBjYXNlICdvbi11bmxvYWQnOlxuLy8gLy8gRm9ybSBFbGVtZW50IEV2ZW50c1xuLy8gY2FzZSAnb24tY2hhbmdlJzpcbi8vIGNhc2UgJ29uLXN1Ym1pdCc6XG4vLyBjYXNlICdvbi1yZXNldCc6XG4vLyBjYXNlICdvbi1zZWxlY3QnOlxuLy8gY2FzZSAnb24tYmx1cic6XG4vLyBjYXNlICdvbi1mb2N1cyc6XG4vLyAvLyBJbWFnZSBFdmVudHNcbi8vIGNhc2UgJ29uLWFib3J0Jzpcbi8vIC8vIEtleWJvYXJkIEV2ZW50c1xuLy8gY2FzZSAnb24ta2V5ZG93bic6XG4vLyBjYXNlICdvbi1rZXlwcmVzcyc6XG4vLyBjYXNlICdvbi1rZXl1cCc6XG4vLyAvLyBNb3VzZSBFdmVudHNcbi8vIGNhc2UgJ29uLWNsaWNrJzpcbi8vIGNhc2UgJ29uLWRibGNsaWNrJzpcbi8vIGNhc2UgJ29uLW1vdXNlZG93bic6XG4vLyBjYXNlICdvbi1tb3VzZW1vdmUnOlxuLy8gY2FzZSAnb24tbW91c2VvdXQnOlxuLy8gY2FzZSAnb24tbW91c2VvdmVyJzpcbi8vIGNhc2UgJ29uLW1vdXNldXAnOlxudmFyIGV2ZW50VGV4dCA9ICdsb2FkIHVubG9hZCBjaGFuZ2Ugc3VibWl0IHJlc2V0IHNlbGVjdCBibHVyIGZvY3VzIGFib3J0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNlbW92ZSBtb3VzZW91dCBtb3VzZW92ZXIgbW91c2V1cCc7XG52YXIgZG9tRXZlbnRzID0gZXZlbnRUZXh0LnNwbGl0KCcgJyk7XG5cbmNsYXNzIEF0dHJOb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5hdHRyaWJ1dGUsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5xdW90ZSA9ICdcIic7XG4gICAgICAgIHRoaXMub3JnTm9kZU5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmlzRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0JpbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RvbUV2ZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEaXJlY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyVkVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJDb21wb25lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmJpbmRpbmcgPSBuZXcgQmluZGluZygpO1xuICAgIH1cblxuICAgIGJlbG9uZ1RvKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmdOb2RlTmFtZSA9PT0ga2V5O1xuICAgIH1cblxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY29tcGlsZSh0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNvbXBpbGUob3B0aW9ucykge1xuICAgICAgICB0aGlzLmlzRXZlbnQgPSB0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ0AnKTtcbiAgICAgICAgdGhpcy5pc0JpbmRpbmcgPSB0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJzonKTtcbiAgICAgICAgdGhpcy5pc0RpcmVjdGl2ZSA9IHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnKicpO1xuICAgICAgICBpZiAodGhpcy5pc0V2ZW50IHx8IHRoaXMuaXNCaW5kaW5nIHx8IHRoaXMuaXNEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZU5hbWUgPSB0aGlzLm5vZGVOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRG9tRXZlbnQgPSB1dGlscy5jb250YWlucyhkb21FdmVudHMsIHRoaXMubm9kZU5hbWUpO1xuICAgICAgICB0aGlzLmJpbmRpbmcuc2V0T3V0cHV0KHRoaXMuaXNFdmVudCk7XG4gICAgICAgIHRoaXMuYmluZGluZy5iaW5kKHRoaXMubm9kZVZhbHVlLCB0aGlzLmlzRXZlbnQgfHwgdGhpcy5pc0JpbmRpbmcgfHwgdGhpcy5pc0RpcmVjdGl2ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNvbnRhaW5zRGlyZWN0aXZlKHRoaXMubm9kZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBvcHRpb25zLmNyZWF0ZURpcmVjdGl2ZSh0aGlzLm5vZGVOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kYmluZFZOb2RlKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZGluZy5zZXRPdXRwdXQodGhpcy5kaXJlY3RpdmUub3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlyZWN0aXZlICcgKyB0aGlzLm5vZGVOYW1lICsgJyBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGluayhzY29wZSwgb3duZXJFbGVtZW50LCBvd25lckNvbXBvbmVudCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLm93bmVyRWxlbWVudCA9IG93bmVyRWxlbWVudDtcbiAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudCA9IG93bmVyQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmJpbmRpbmcuc2V0U2NvcGUoc2NvcGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubm9kZU5hbWUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYmluZGluZy5jb21wdXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2Fsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudDogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYXJnczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZWxlbWVudDogc2VsZi5vd25lckVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvd25lckNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb3duZXJDb21wb25lbnQuJGxpc3Rlbih0aGlzLm5vZGVOYW1lLCBmdW5jdGlvbiAoZSwgYXJncykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmJpbmRpbmcuY29tcHV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQ6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFyZ3M6IGFyZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6IHNlbGYub3duZXJFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuJCRjaGlsZERpcmVjdGl2ZXMucHVzaCh0aGlzLmRpcmVjdGl2ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJHNldEJpbmRpbmcodGhpcy5iaW5kaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG93bmVyQ29tcG9uZW50ICE9IG51bGwgJiYgb3duZXJDb21wb25lbnQuJGhhc0F0dHIodGhpcy5ub2RlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBvd25lckNvbXBvbmVudC4kaW5pdEF0dHIodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMub3duZXJFbGVtZW50LCB0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXJFbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYmluZGluZy53YXRjaFByb3BzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRldGVjdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2UoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kZGV0ZWN0KHRoaXMub3duZXJFbGVtZW50LCB0aGlzLm93bmVyQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmluZGluZy5kZXRlY3QoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm93bmVyQ29tcG9uZW50ICE9IG51bGwgJiYgdGhpcy5vd25lckNvbXBvbmVudC4kaGFzQXR0cih0aGlzLm5vZGVOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudC4kc2V0QXR0cih0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMub3duZXJFbGVtZW50LCB0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vd25lckVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3duZXJFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnICYmIHRoaXMubm9kZU5hbWUgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vd25lckVsZW1lbnQudmFsdWUgPSB0aGlzLmJpbmRpbmcudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWZ0ZXJMaW5rKCkge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRpbnNlcnQodGhpcy5vd25lckVsZW1lbnQsIHRoaXMub3duZXJDb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlyZWN0aXZlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlID09IG51bGwgPyBbXSA6IFt0aGlzLmRpcmVjdGl2ZV07XG4gICAgfVxuXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yZ05vZGVOYW1lICsgKHRoaXMubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB0aGlzLnF1b3RlICsgdGhpcy5ub2RlVmFsdWUgKyB0aGlzLnF1b3RlKSk7XG4gICAgfVxuXG4gICAgZ2V0SW5uZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yZ05vZGVOYW1lICsgKHRoaXMubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB0aGlzLnF1b3RlICsgdGhpcy5ub2RlVmFsdWUgKyB0aGlzLnF1b3RlKSk7XG4gICAgfVxuXG4gICAgZGlzcG9zZShpc0Zyb21EaXJlY3RpdmUpIHtcbiAgICAgICAgaWYgKGlzRnJvbURpcmVjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kaW5nLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lclZFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyQ29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kZGlzcG9zZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQXR0ck5vZGUgfTtcbiIsIlxudmFyIFZOb2RlVHlwZSA9IHtcbiAgICBlbGVtZW50OiAxLFxuICAgIGF0dHJpYnV0ZTogMixcbiAgICB0ZXh0OiAzLFxuICAgIGNkYXRhU2VjdGlvbjogNCxcbiAgICBlbnRpdHlSZWZlcmVuY2U6IDUsXG4gICAgZW50aXR5OiA2LFxuICAgIHByb2Nlc3NpbmdJbnN0cnVjdGlvbjogNyxcbiAgICBjb21tZW50OiA4LFxuICAgIGRvY3VtZW50OiA5LFxuICAgIGRvY3VtZW50VHlwZTogMTAsXG4gICAgZG9jdW1lbnRGcmFnbWVudDogMTEsXG4gICAgbm90YXRpb246IDEyLFxuICAgIGN1c3RvbTogMTAxXG59O1xuXG4vLyB2aXJ0dWFsIG5vZGVcbmNsYXNzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLm5vZGVUeXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5ub2RlTmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJWRG9jdW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICB9XG5cbiAgICAkcHVzaENoaWxkKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgfVxuXG4gICAgJGJ1aWxkU2libGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IChzZWxmLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC4kYnVpbGRTaWJsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICRjbGVhclBhcmVudEFuZFNpYmxpbmcoKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XG4gICAgfVxuXG4gICAgJHJlbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kcmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuJGNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyVkRvY3VtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaGFzQ2hpbGROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgY2xlYXJDaGlsZE5vZGVzKCkge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQubmV4dFNpYmxpbmcgPSBjaGlsZDtcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHRoaXMubGFzdENoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZDtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChyZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkO1xuICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBuZXdDaGlsZDtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMCwgbmV3Q2hpbGQpO1xuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuXG4gICAgaW5zZXJ0QWZ0ZXIocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChyZWZDaGlsZC5uZXh0U2libGluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUocmVmQ2hpbGQubmV4dFNpYmxpbmcsIG5ld0NoaWxkKTtcbiAgICB9XG5cbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3ZlIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcucHJldmlvdXNTaWJsaW5nID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC4kY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICByZXBsYWNlQ2hpbGQocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG4gICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICBpZiAodGhpcy5maXJzdENoaWxkID09PSByZWZDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sYXN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmQ2hpbGQuJGNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBjbG9uZU5vZGUoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG4gICAgY29tcGlsZShvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuY29tcGlsZShvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlyZWN0aXZlcygpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkLmRpcmVjdGl2ZXMoKTtcbiAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgbGluayhzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQubGluayhzY29wZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFmdGVyTGluaygpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5hZnRlckxpbmsoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2UoKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH07XG4iLCJpbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5L21lc3NhZ2UnO1xuaW1wb3J0IHsgR2V0UHJvcGVydHlIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbGl0eS9oYW5kbGVyJztcbmltcG9ydCB7IGNvbXB1dGUsIHBhcnNlQXNzaWdubWVudCB9IGZyb20gJy4uL3BhcnNlcic7XG5cbmNsYXNzIEV4cE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xuICAgIH1cblxuICAgIGdldFByb3BzKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBvYmpQcm9wcyA9IFtdO1xuICAgICAgICBjb21wdXRlKHRoaXMudGV4dCwgbmV3IFByb3h5KHNjb3BlLCBuZXcgR2V0UHJvcGVydHlIYW5kbGVyKG9ialByb3BzLCB0cnVlKSksIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gb2JqUHJvcHM7XG4gICAgfVxuXG4gICAgY29tcHV0ZShzY29wZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGNvbXB1dGUodGhpcy50ZXh0LCBzY29wZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSAhPT0gdGhpcy5vbGRWYWx1ZTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJvcHMgPSBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgQmluZGluZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnRleHQgPSAnJztcbiAgICAgICAgdGhpcy5pc0V4cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICAgIHRoaXMucmlnaHRTdHIgPSAnJztcbiAgICAgICAgdGhpcy5vdXRwdXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hhbmdlID0gbmV3IE1lc3NlbmdlcigpO1xuICAgIH1cblxuICAgIHNldFNjb3BlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRPdXRwdXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5vdXRwdXQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBiaW5kKHRleHQsIGlzRXhwKSB7XG4gICAgICAgIGlmICh0ZXh0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuaXNFeHAgPSBpc0V4cDtcblxuICAgICAgICBpZiAoaXNFeHApIHtcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZXhwOiBuZXcgRXhwTm9kZSh0ZXh0KSxcbiAgICAgICAgICAgICAgICBsZWZ0U3RyOiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGF0dGVybiA9IC97eyhbXn1dKil9fS9nO1xuICAgICAgICB2YXIgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgICAgIHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcblxuICAgICAgICB3aGlsZSAobWF0Y2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbmRleDogbWF0Y2guaW5kZXgsXG4gICAgICAgICAgICAgICAgZXhwOiBuZXcgRXhwTm9kZShtYXRjaFsxXSksXG4gICAgICAgICAgICAgICAgbGVmdFN0cjogdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlZ21lbnRzLmxlbmd0aCA+IDAgJiYgbGFzdEluZGV4IDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRTdHIgPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZShvcHRpb25zKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5zZWdtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0V4cCAmJiB0aGlzLnNlZ21lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHNbMF0uZXhwLmNvbXB1dGUoc2VsZi5zY29wZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc2VnbWVudHNbMF0uZXhwLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudC5leHAuY29tcHV0ZShzZWxmLnNjb3BlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAoc2VnbWVudC5sZWZ0U3RyICsgc2VnbWVudC5leHAudmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0ZXh0ICsgdGhpcy5yaWdodFN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIGFzc2lnbih2YWx1ZSkge1xuICAgICAgICB2YXIgYXNzaWdubWVudCA9IHBhcnNlQXNzaWdubWVudCh0aGlzLnRleHQsIHRoaXMuc2NvcGUpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50Lm9iaiAhPSBudWxsICYmIGFzc2lnbm1lbnQucHJvcCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlLiRwcm94eShhc3NpZ25tZW50Lm9iailbYXNzaWdubWVudC5wcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2F0Y2hQcm9wcyhhY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMub3V0cHV0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIG9ialByb3BzID0gW107XG5cbiAgICAgICAgdGhpcy5zZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICBvYmpQcm9wcyA9IG9ialByb3BzLmNvbmNhdChzZWdtZW50LmV4cC5nZXRQcm9wcyhzZWxmLnNjb3BlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ialByb3BzLmZvckVhY2goZnVuY3Rpb24gKG9ialByb3ApIHtcbiAgICAgICAgICAgIHNlbGYuc2NvcGUuJHdhdGNoKG9ialByb3Aub2JqLCBvYmpQcm9wLnByb3AsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZS5maXJlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGFjdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICBzZWxmLmNoYW5nZS5vbihhY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMub3V0cHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNvbXB1dGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHMuc29tZShmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlZ21lbnQuZXhwLmRldGVjdChzZWxmLnNjb3BlLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICBzZWdtZW50LmV4cC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEJpbmRpbmcgfTsiLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcblxuY2xhc3MgQ0RhdGFTZWN0aW9uTm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuY2RhdGFTZWN0aW9uKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IENEYXRhU2VjdGlvbk5vZGUgfTsiLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcblxuY2xhc3MgQ29tbWVudE5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmNvbW1lbnQsICcjY29tbWVudCcpO1xuICAgIH1cblxuICAgIGxpbmsoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXRPdXRlclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVZhbHVlO1xuICAgIH1cblxuICAgIGdldElubmVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDb21tZW50Tm9kZSB9O1xuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcblxuY2xhc3MgQ3VzdG9tTm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsaW5rZXIpe1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuY3VzdG9tLCBuYW1lKTtcbiAgICAgICAgdGhpcy5saW5rZXIgPSBsaW5rZXI7XG4gICAgfVxuXG4gICAgbGluayhzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtlci5jYWxsKHRoaXMsIHNjb3BlKTtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25JbnNlcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkluc2VydC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGV0ZWN0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25EZXRlY3QuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkhhc0NoYW5nZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uSGFzQ2hhbmdlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25VcGRhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vblVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDdXN0b21Ob2RlIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIERvY3VtZW50VHlwZU5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5kb2N1bWVudFR5cGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgRG9jdW1lbnRUeXBlTm9kZSB9O1xuIiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIERvY3VtZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmRvY3VtZW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IERvY3VtZW50Tm9kZSB9OyIsImltcG9ydCAqIGFzIGVsZVV0aWxzIGZyb20gJy4uL3V0aWxpdHkvZWxlLXV0aWxzJztcbmltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgQ3VzdG9tTm9kZSB9IGZyb20gJy4vY3VzdG9tJztcbmltcG9ydCB7IEF0dHJOb2RlIH0gZnJvbSAnLi9hdHRyaWJ1dGUnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICcuLi9wYXJzZXInO1xuXG5jbGFzcyBFbGVtZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmVsZW1lbnQsIG5hbWUpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGZDbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21waWxlT3B0aW9ucyA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNDb21wb25lbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAkcHVzaEF0dHJpYnV0ZShhdHRyKSB7XG4gICAgICAgIGF0dHIub3duZXJWRWxlbWVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xuICAgIH1cblxuICAgIGhhc0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQsIG1hdGNoZXMgPSB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVzWzBdO1xuICAgICAgICAgICAgdGFyZ2V0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG5ldyBBdHRyTm9kZShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHRhcmdldC5vd25lclZFbGVtZW50ID0gdGhpcztcbiAgICAgICAgICAgIHRhcmdldC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnB1c2godGFyZ2V0KTtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJlbW92ZUF0dHJpYnV0ZShrZXkpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IFtdLCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgQXR0ck5vZGUpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuYXR0cmlidXRlcy5pbmRleE9mKGtleSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi5hdHRyaWJ1dGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc2VsZi5hdHRyaWJ1dGVzLmluZGV4T2YobWF0Y2gpO1xuICAgICAgICAgICAgICAgIG1hdGNoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLmF0dHJpYnV0ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGggPiAwID8gdGFyZ2V0WzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICBhcHBlbmRBdHRyaWJ1dGUoYXR0cikge1xuICAgICAgICBpZiAoYXR0ci5vd25lclZFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkN1cnJlbnQgYXR0cmlidXRlIGlzIG5vdCBuZXchXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXR0ci5vd25lclZFbGVtZW50ID0gdGhpcztcbiAgICAgICAgYXR0ci5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaChhdHRyKTtcbiAgICAgICAgcmV0dXJuIGF0dHI7XG4gICAgfVxuXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XG4gICAgICAgIHZhciBhdHRyVHBsID0gJycsIGNoaWxkVHBsID0gJyc7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHJUcGwgKz0gJyAnO1xuICAgICAgICAgICAgYXR0clRwbCArPSBhdHRyLmdldE91dGVyVHBsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGRUcGwgKz0gY2hpbGQuZ2V0T3V0ZXJUcGwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHRwbCA9ICc8JyArIHRoaXMubm9kZU5hbWUgKyBhdHRyVHBsICsgJz4nICsgY2hpbGRUcGw7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNlbGZDbG9zZWQpIHtcbiAgICAgICAgICAgIHRwbCArPSAoJzwvJyArIHRoaXMubm9kZU5hbWUgKyAnPicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRwbDtcbiAgICB9XG5cbiAgICBnZXRJbm5lclRwbCgpIHtcbiAgICAgICAgdmFyIGNoaWxkVHBsID0gJyc7XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZFRwbCArPSBjaGlsZC5nZXRPdXRlclRwbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRUcGw7XG4gICAgfVxuXG4gICAgc2V0T3V0ZXJUcGwodHBsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcGFyc2UodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYsIHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmKTtcbiAgICB9XG5cbiAgICBzZXRJbm5lclRwbCh0cGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyQ2hpbGROb2RlcygpO1xuICAgICAgICBwYXJzZSh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYuYXBwZW5kQ2hpbGQodm5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3RpdmUoa2V5KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMubWFwKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5kaXJlY3RpdmVzKCk7XG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS4kJG1ldGEuc2VsZWN0b3IgPT09IGtleTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcGlsZShvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY29tcGlsZU9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0ci5jb21waWxlKG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc0NvbXBvbmVudCA9IG9wdGlvbnMuY29udGFpbnNDb21wb25lbnQodGhpcy5ub2RlTmFtZSk7XG4gICAgICAgIGlmICghdGhpcy5pc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuY29tcGlsZShvcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlyZWN0aXZlcygpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmRpcmVjdGl2ZXMoKTtcbiAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLmRpcmVjdGl2ZXMoKTtcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxpbmsoc2NvcGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgc2VsZi5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzZWxmLm5vZGVOYW1lKTtcblxuICAgICAgICBpZiAodGhpcy5pc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBzY29wZS4kY3JlYXRlQ29tcG9uZW50KHRoaXMubm9kZU5hbWUpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuJGJpbmRWTm9kZSh0aGlzKTtcbiAgICAgICAgICAgIHNlbGYuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgYXR0ci5saW5rKHNjb3BlLCBzZWxmLmVsZW1lbnQsIHNlbGYuY29tcG9uZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5jb21wb25lbnQuJGluaXRBdHRyRG9uZSgpO1xuICAgICAgICAgICAgc2VsZi5jb21wb25lbnQuJG1vdW50KHNlbGYuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgIGF0dHIubGluayhzY29wZSwgc2VsZi5lbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkLmxpbmsoc2NvcGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlbGYuZWxlbWVudDtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyLmFmdGVyTGluaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuYWZ0ZXJMaW5rKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIuZGV0ZWN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuZGV0ZWN0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3Bvc2UoaXNGcm9tQ29tcG9uZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Zyb21Db21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMucmVtb3ZlRG9tRWxlbWVudCgpO1xuICAgICAgICB0aGlzLmNvbXBpbGVPcHRpb25zID0gbnVsbDtcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC4kZGlzcG9zZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIGdldERvbUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlRG9tRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBlbGVVdGlscy5yZW1vdmVOb2RlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVFbGVtZW50KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50Tm9kZShuYW1lKTtcbiAgICB9XG5cbiAgICBjcmVhdGVBdHRyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBdHRyTm9kZShuYW1lKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDdXN0b20obmFtZSwgbGlua2VyKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ3VzdG9tTm9kZShuYW1lLCBsaW5rZXIpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgRWxlbWVudE5vZGUgfTsiLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcblxuY2xhc3MgRG9jdW1lbnRGcmFnbWVudE5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmRvY3VtZW50RnJhZ21lbnQsICcjZG9jdW1lbnQtZnJhZ21lbnQnKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IERvY3VtZW50RnJhZ21lbnROb2RlIH07XG4iLCJleHBvcnQgKiBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdHRyaWJ1dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9jZGF0YXNlY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tJztcbmV4cG9ydCAqIGZyb20gJy4vZG9jdHlwZSc7XG5leHBvcnQgKiBmcm9tICcuL2RvY3VtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZyYWdtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL2JpbmRpbmcnO1xuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQgKiBhcyBlbGVVdGlscyBmcm9tICcuLi91dGlsaXR5L2VsZS11dGlscyc7XG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xuXG5jbGFzcyBUZXh0Tm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLnRleHQsICcjdGV4dCcpO1xuICAgICAgICB0aGlzLmJpbmRpbmcgPSBuZXcgQmluZGluZygpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbXBpbGUoKSB7XG4gICAgICAgIHRoaXMuYmluZGluZy5iaW5kKHRoaXMubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICBsaW5rKHNjb3BlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmJpbmRpbmcuc2V0U2NvcGUoc2NvcGUpO1xuXG4gICAgICAgIHRoaXMuYmluZGluZy53YXRjaFByb3BzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuZGV0ZWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcbiAgICB9XG5cbiAgICBoYXNDaGFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJpbmRpbmcuZGV0ZWN0KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBlbGVVdGlscy5yZXBsYWNlTm9kZSh0aGlzLmVsZW1lbnQsIHRoaXMucmVuZGVyKHRoaXMuYmluZGluZy52YWx1ZSkpO1xuICAgIH1cblxuICAgIHJlbmRlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcbiAgICB9XG5cbiAgICBnZXRJbm5lclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVZhbHVlO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmluZGluZy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuYmluZGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRleHROb2RlIH07IiwiaW1wb3J0IHsgdHlwZUNvbnN0LCBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcvaW5qZWN0b3InXG5cbmZ1bmN0aW9uIGNvbXBvbmVudChtZXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gbWV0YS5zZWxlY3RvciB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb25zdHJ1Y3Rvcih0eXBlQ29uc3QuY29tcG9uZW50LCBzZWxlY3RvciwgdGFyZ2V0LCBtZXRhKTtcbiAgICB9O1xufVxuXG5leHBvcnQgeyBjb21wb25lbnQgfSIsImltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3L2luamVjdG9yJ1xuXG5mdW5jdGlvbiBkaXJlY3RpdmUobWV0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IG1ldGEuc2VsZWN0b3IgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyQ29uc3RydWN0b3IodHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IsIHRhcmdldCwgbWV0YSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgZGlyZWN0aXZlIH0iLCJpbXBvcnQgeyB0eXBlQ29uc3QsIGluamVjdG9yIH0gZnJvbSAnLi4vdmlldy9pbmplY3RvcidcblxuZnVuY3Rpb24gc2VydmljZShtZXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gbWV0YS5zZWxlY3RvciB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb25zdHJ1Y3Rvcih0eXBlQ29uc3Quc2VydmljZSwgc2VsZWN0b3IsIHRhcmdldCwgbWV0YSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgc2VydmljZSB9IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1iaW5kJ1xufSlcbmNsYXNzIEJpbmREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmV7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpe1xuICAgICAgICBlbGUuaW5uZXJUZXh0ID0gYmluZGluZy5jb21wdXRlKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMub25JbnNlcnQoZWxlLCBiaW5kaW5nKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1lbWJlZCdcbn0pXG5jbGFzcyBFbWJlZERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25Db21waWxlKGF0dHJOb2RlLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBlbWJlZFRwbCA9IG9wdGlvbnMuZ2V0RW1iZWRUcGwoKTtcbiAgICAgICAgaWYgKGVtYmVkVHBsKSB7XG4gICAgICAgICAgICBhdHRyTm9kZS5vd25lclZFbGVtZW50LnNldElubmVyVHBsKGVtYmVkVHBsKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLWhpZGUnXG59KVxuY2xhc3MgSGlkZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZyl7XG4gICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gYmluZGluZy5jb21wdXRlKCkgPyAnbm9uZScgOiAnaW5pdGlhbCc7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMub25JbnNlcnQoZWxlLCBiaW5kaW5nKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLWlmJ1xufSlcbmNsYXNzIElmRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb21tZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpIHtcbiAgICAgICAgdGhpcy5jb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbi1pZicpO1xuICAgICAgICBpZiAoIWJpbmRpbmcuY29tcHV0ZSgpKSB7XG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblVwZGF0ZShlbGUsIGJpbmRpbmcpIHtcbiAgICAgICAgaWYgKGJpbmRpbmcuY29tcHV0ZSgpKSB7XG4gICAgICAgICAgICBpZiAoZWxlLnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuY29tbWVudCwgZWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoZWxlLCB0aGlzLmNvbW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmNvbW1lbnQgPSBudWxsO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmQnXG5leHBvcnQgKiBmcm9tICcuL2VtYmVkJ1xuZXhwb3J0ICogZnJvbSAnLi9oaWRlJ1xuZXhwb3J0ICogZnJvbSAnLi9pZidcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnXG5leHBvcnQgKiBmcm9tICcuL3JlcGVhdCdcbmV4cG9ydCAqIGZyb20gJy4vc2hvdydcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaCdcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGUnIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLW1vZGVsJ1xufSlcbmNsYXNzIE1vZGVsRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZWxlLCBiaW5kaW5nLCBjb20pIHtcbiAgICAgICAgaWYgKGNvbSA9PSBudWxsKSB7XG4gICAgICAgICAgICBlbGUudmFsdWUgPSBiaW5kaW5nLmNvbXB1dGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbS4kc2V0QXR0cigndmFsdWUnLCBiaW5kaW5nLmNvbXB1dGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcsIGNvbSkge1xuICAgICAgICB0aGlzLnVwZGF0ZShlbGUsIGJpbmRpbmcsIGNvbSk7XG5cbiAgICAgICAgaWYgKGNvbSA9PSBudWxsKSB7XG4gICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLmFzc2lnbihlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc01lc3Nlbmdlcihjb20uY2hhbmdlKSkge1xuICAgICAgICAgICAgICAgIGNvbS5jaGFuZ2Uub24oZnVuY3Rpb24gKGUsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZy5hc3NpZ24oYXJncy5uZXd2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvZW50ICcgKyBjb20uJCRtZXRhLnNlbGVjdG9yICsgJ211c3QgZGVmaW5lIFtjaGFuZ2VdIGV2ZW50Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblVwZGF0ZShlbGUsIGJpbmRpbmcsIGNvbSkge1xuICAgICAgICB0aGlzLnVwZGF0ZShlbGUsIGJpbmRpbmcsIGNvbSk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi92aWV3L2NvbXBvbmVudCc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1yZXBlYXQnXG59KVxuY2xhc3MgUmVwZWF0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMuaXRlbUV4cCA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1zRXhwID0gJyc7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gJyc7XG4gICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY21wSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZvb3RlciA9IG51bGw7XG4gICAgfVxuXG4gICAgb25Db21waWxlKGF0dHJOb2RlKSB7XG4gICAgICAgIHZhciBhcmcgPSBhdHRyTm9kZS5ub2RlVmFsdWU7XG4gICAgICAgIHZhciBlbGVOb2RlID0gYXR0ck5vZGUub3duZXJWRWxlbWVudDtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXihbYS16X10rXFx3KylcXHMraW5cXHMrKC4rKSQvaTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhdHRlcm4uZXhlYyhhcmcpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduLXJlcGVhdDogcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pdGVtRXhwID0gcmVzdWx0WzFdO1xuICAgICAgICB0aGlzLml0ZW1zRXhwID0gcmVzdWx0WzJdO1xuXG4gICAgICAgIGVsZU5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOb2RlKTtcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBlbGVOb2RlLmdldE91dGVyVHBsKCk7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgY3VzdG9tID0gZWxlTm9kZS5jcmVhdGVDdXN0b20oJ24tcmVwZWF0JywgZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBzY29wZS4kZXZhbChzZWxmLml0ZW1zRXhwKTtcblxuICAgICAgICAgICAgc2VsZi5zY29wZSA9IHNjb3BlO1xuICAgICAgICAgICAgc2VsZi5zZXREYXRhSXRlbXMoaXRlbXMpO1xuICAgICAgICAgICAgc2VsZi5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdzdGFydDogbi1yZXBlYXQnKTtcbiAgICAgICAgICAgIHNlbGYuZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZW5kOiBuLXJlcGVhdCcpO1xuXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLmhlYWRlcik7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLmZvb3Rlcik7XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsZU5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZWxlTm9kZSwgY3VzdG9tKTtcbiAgICAgICAgZWxlTm9kZS5kZXN0cm95KCk7XG5cbiAgICAgICAgY3VzdG9tLm9uSW5zZXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5yZW5kZXIoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjdXN0b20ub25EZXRlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBzZWxmLnNjb3BlLiRldmFsKHNlbGYuaXRlbXNFeHApO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5kYXRhSXRlbXMgIT09IGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXREYXRhSXRlbXMoaXRlbXMpO1xuICAgICAgICAgICAgICAgIHNlbGYucmVuZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNtcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkU2NvcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRTY29wZS4kZGV0ZWN0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY3VzdG9tLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIGVsZU5vZGUgPSBudWxsO1xuICAgICAgICAgICAgY3VzdG9tID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuY21wSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoY21wSXRlbSkge1xuICAgICAgICAgICAgY21wSXRlbS4kZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbXBJdGVtcyA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IG51bGw7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb290ZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHNldERhdGFJdGVtcyh2YWx1ZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRhSXRlbXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NvcGUuJHdhdGNoKHRoaXMuZGF0YUl0ZW1zLCAnbGVuZ3RoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q21wSXRlbShkYXRhSXRlbSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGZpbHRlcnMgPSB0aGlzLmNtcEl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1bc2VsZi5pdGVtRXhwXSA9PT0gZGF0YUl0ZW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFyZ2V0ID0gZmlsdGVyc1swXTtcblxuICAgICAgICB0aGlzLmNtcEl0ZW1zID0gdGhpcy5jbXBJdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtW3NlbGYuaXRlbUV4cF0gIT09IGRhdGFJdGVtO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHZhciBuZXdDbXBJdGVtcyA9IFtdO1xuXG4gICAgICAgIHV0aWxzLmZvckVhY2goc2VsZi5kYXRhSXRlbXMsIGZ1bmN0aW9uIChrZXksIGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBjbXBJdGVtID0gc2VsZi5nZXRDbXBJdGVtKGl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAoY21wSXRlbSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY21wSXRlbSA9IG5ldyBDb21wb25lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogc2VsZi5pdGVtVGVtcGxhdGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjbXBJdGVtW3NlbGYuaXRlbUV4cF0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIGNtcEl0ZW0uJGluaGVyaXQoc2VsZi5zY29wZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNtcEl0ZW0uJHJlbmRlcih0cnVlKSk7XG4gICAgICAgICAgICBuZXdDbXBJdGVtcy5wdXNoKGNtcEl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2VsZi5jbXBJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWxmLmNtcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHJlcGVhdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXBlYXRJdGVtLiRkZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuY21wSXRlbXMgPSBuZXdDbXBJdGVtcztcbiAgICAgICAgdXRpbHMucmVtb3ZlTm9kZUJldHdlZW4oc2VsZi5oZWFkZXIsIHNlbGYuZm9vdGVyKTtcbiAgICAgICAgc2VsZi5mb290ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIHNlbGYuZm9vdGVyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXNob3cnXG59KVxuY2xhc3MgU2hvd0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZyl7XG4gICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gYmluZGluZy5jb21wdXRlKCkgPyAnaW5pdGlhbCcgOiAnbm9uZSc7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMub25JbnNlcnQoZWxlLCBiaW5kaW5nKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tY2hlY2tlZCdcbn0pXG5jbGFzcyBDaGVja2VkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY2hlY2tlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1kaXNhYmxlZCdcbn0pXG5jbGFzcyBEaXNhYmxlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2Rpc2FibGVkJyk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vY2hlY2tlZCdcbmV4cG9ydCAqIGZyb20gJy4vZGlzYWJsZWQnXG5leHBvcnQgKiBmcm9tICcuL3JlYWRvbmx5J1xuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3RlZCciLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1yZWFkb25seSdcbn0pXG5jbGFzcyBSZWFkb25seURpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3JlYWRvbmx5Jyk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXNlbGVjdGVkJ1xufSlcbmNsYXNzIFNlbGVjdGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignc2VsZWN0ZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldy9kaXJlY3RpdmUnO1xuXG5jbGFzcyBTdGF0ZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZXtcbiAgICBjb25zdHJ1Y3RvcihhdHRyTmFtZSl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXR0ck5hbWUgPSBhdHRyTmFtZTtcbiAgICB9XG5cbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpe1xuICAgICAgICBpZiAoYmluZGluZy5jb21wdXRlKCkpIHtcbiAgICAgICAgICAgIGlmICghZWxlLmhhc0F0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGVsZS5oYXNBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBlbGUucmVtb3ZlQXR0cmlidXRlKHRoaXMuYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMub25JbnNlcnQoZWxlLCBiaW5kaW5nKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tc3R5bGUnXG59KVxuY2xhc3MgU3R5bGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmV7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpe1xuICAgICAgICB2YXIgdmFsdWUgPSBiaW5kaW5nLmNvbXB1dGUoKTtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICBlbGUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgZWxlLnN0eWxlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGVsZS5zdHlsZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJpbmRpbmcuc2NvcGUuJHdhdGNoKHZhbHVlLCAvXFx3Ky9pLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLnN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgb2Ygbi1zdHlsZSBzaG91bGQgYmUgc3RyaW5nIG9yIG9iamVjdCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMub25JbnNlcnQoZWxlLCBiaW5kaW5nKTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3N3aXRjaCdcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoLWRlZmF1bHQnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC13aGVuJyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcvZGlyZWN0aXZlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbGl0eSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zd2l0Y2gtZGVmYXVsdCdcbn0pXG5jbGFzcyBTd2l0Y2hEZWZhdWx0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc01hdGNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnN3aXRjaFdoZW5EaXJzID0gW107XG4gICAgfVxuXG4gICAgaW5pdFN3aXRjaFdoZW5EaXJzKCkge1xuICAgICAgICB2YXIgdkVsZSA9IHRoaXMuYXR0ck5vZGUub3duZXJWRWxlbWVudDtcblxuICAgICAgICB3aGlsZSAodkVsZS5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIHdoZW5EaXJzID0gdkVsZS5wcmV2aW91c1NpYmxpbmcuZ2V0RGlyZWN0aXZlKCduLXN3aXRjaC13aGVuJyk7XG5cbiAgICAgICAgICAgIGlmICh3aGVuRGlycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFdoZW5EaXJzLnB1c2god2hlbkRpcnNbMF0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2RWxlID0gdkVsZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnN3aXRjaFdoZW5EaXJzLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlzTWF0Y2g7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ29tcGlsZShhdHRyTm9kZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmF0dHJOb2RlID0gYXR0ck5vZGU7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoZWxlLCBiaW5kaW5nKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmluaXRTd2l0Y2hXaGVuRGlycygpO1xuICAgICAgICB0aGlzLmlzTWF0Y2ggPSB0aGlzLm1hdGNoKCk7XG4gICAgICAgIHRoaXMuY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ24tc3dpdGNoLWRlZmF1bHQnKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNNYXRjaCkge1xuICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoZWxlLCB0aGlzLmNvbW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hXaGVuRGlycy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLmlzTWF0Y2hDaGFuZ2VkLm9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZShlbGUsIGJpbmRpbmcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGVsZSwgYmluZGluZykge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLmlzTWF0Y2gsIG5ld1ZhbHVlID0gdGhpcy5tYXRjaCgpO1xuXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNYXRjaCA9IG5ld1ZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZS5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy5jb21tZW50LCBlbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKGVsZSwgdGhpcy5jb21tZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnN3aXRjaFdoZW5EaXJzID0gbnVsbDtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldy9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlsaXR5JztcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uLy4uL3V0aWxpdHkvbWVzc2FnZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zd2l0Y2gtd2hlbidcbn0pXG5jbGFzcyBTd2l0Y2hXaGVuRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc01hdGNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnN3aXRjaERpciA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNNYXRjaENoYW5nZWQgPSBuZXcgTWVzc2VuZ2VyKCk7XG4gICAgfVxuXG4gICAgaW5pdFN3aXRjaERpcigpIHtcbiAgICAgICAgdmFyIHZFbGUgPSB0aGlzLmF0dHJOb2RlLm93bmVyVkVsZW1lbnQ7XG4gICAgICAgIHZhciBzd2l0Y2hEaXJzID0gdkVsZS5wYXJlbnROb2RlLmdldERpcmVjdGl2ZSgnbi1zd2l0Y2gnKTtcblxuICAgICAgICBpZiAoIXN3aXRjaERpcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmUgbi1zd2l0Y2ggZGlyZWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaERpciA9IHN3aXRjaERpcnNbMF07XG4gICAgfVxuXG4gICAgb25Db21waWxlKGF0dHJOb2RlLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBhdHRyTm9kZTtcbiAgICB9XG5cbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuaW5pdFN3aXRjaERpcigpO1xuICAgICAgICB0aGlzLmNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLXN3aXRjaC13aGVuJyk7XG4gICAgICAgIHRoaXMuaXNNYXRjaCA9IChiaW5kaW5nLmNvbXB1dGUoKSA9PT0gdGhpcy5zd2l0Y2hEaXIudmFsdWUpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc01hdGNoKSB7XG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaERpci52YWx1ZUNoYW5nZWQub24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi51cGRhdGUoZWxlLCBiaW5kaW5nKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGVsZSwgYmluZGluZykge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLmlzTWF0Y2gsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IChiaW5kaW5nLmNvbXB1dGUoKSA9PT0gdGhpcy5zd2l0Y2hEaXIudmFsdWUpO1xuXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNYXRjaCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5pc01hdGNoQ2hhbmdlZC5maXJlKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlLnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmNvbW1lbnQsIGVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZS5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoZWxlLCB0aGlzLmNvbW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5hdHRyTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3dpdGNoRGlyID0gbnVsbDtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldy9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi8uLi91dGlsaXR5L21lc3NhZ2UnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tc3dpdGNoJ1xufSlcbmNsYXNzIFN3aXRjaERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IG5ldyBNZXNzZW5nZXIoKTtcbiAgICB9XG5cbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGJpbmRpbmcuY29tcHV0ZSgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKGVsZSwgYmluZGluZykge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSBiaW5kaW5nLmNvbXB1dGUoKTtcblxuICAgICAgICBpZihuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpe1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZC5maXJlKHtcbiAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi91dGlsaXR5JztcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XG5leHBvcnQgKiBmcm9tICcuL3BhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi91aSc7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQgeyBMZXhlciB9IGZyb20gJy4vbGV4ZXInO1xuXG51dGlscy5pbmhlcml0KEh0bWxMZXhlciwgTGV4ZXIpO1xuZnVuY3Rpb24gSHRtbExleGVyKG9wdGlvbnMpIHtcbiAgICBIdG1sTGV4ZXIuc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbn1cblxuSHRtbExleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0ID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XG4gICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcbiAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnIHx8XG4gICAgICAgIGNoID09PSAnQCcgfHwgY2ggPT09ICc6JyB8fCBjaCA9PT0gJyonKTtcbn07XG5cbkh0bWxMZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCwgY3ApIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICctJyB8fCBjaCA9PT0gJy4nO1xufTtcblxuSHRtbExleGVyLnByb3RvdHlwZS5leHBlY3RTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdmFyIG51bSA9IHN0ci5sZW5ndGg7XG4gICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDw9IHRoaXMudGV4dC5sZW5ndGgpID8gKHN0ciA9PT0gdGhpcy50ZXh0LnN1YnN0cih0aGlzLmluZGV4LCBudW0pKSA6IGZhbHNlO1xufTtcblxuLy8gaHRtbCBjb21tZW50IFwiPCEtLWNvbW1lbnQtLT5cIlxuSHRtbExleGVyLnByb3RvdHlwZS5yZWFkQ29tbWVudCA9IGZ1bmN0aW9uIChiZWdpbiwgZW5kKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcbiAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgdmFyIHJhd1N0cmluZyA9IGJlZ2luO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZyhlbmQpKSB7XG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gZW5kO1xuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcbiAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcsIHN0YXJ0KTtcbn07XG5cbi8vIGh0bWwgdGV4dFxuSHRtbExleGVyLnByb3RvdHlwZS5yZWFkVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICBpZiAoKGNoID09PSAnPCcgJiYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSkgfHwgY2gyID09PSAnLycpIHx8IHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICB0ZXh0OiBzdHJpbmcsXG4gICAgICAgIHRleHRUYWc6IHRydWVcbiAgICB9KTtcbn07XG5cbi8vIGh0bWwgdGFnXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRUYWcgPSBmdW5jdGlvbiAoYmVnaW4sIGVuZCwgY2xvc2luZywgZG9jdHlwZSkge1xuICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogYmVnaW4sIHRhZzogdHJ1ZSwgY2xvc2luZzogY2xvc2luZywgYmVnaW46IHRydWUsIGRvY3R5cGU6IGRvY3R5cGUgfSk7XG4gICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XG4gICAgdGhpcy5yZWFkSWRlbnQoKTtcblxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuXG4gICAgICAgIGlmICghY2xvc2luZykge1xuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgdmFyIHN0ciA9IGNoICsgY2gyO1xuICAgICAgICAgICAgaWYgKHN0ciA9PT0gJy8nICsgZW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBzdHIsIHRhZzogdHJ1ZSwgY2xvc2luZzogdHJ1ZSwgZW5kOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaCA9PT0gZW5kKSB7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgICAgICB0ZXh0OiBlbmQsXG4gICAgICAgICAgICAgICAgdGFnOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsb3Npbmc6ICEhZG9jdHlwZSA/IHRydWUgOiBjbG9zaW5nLFxuICAgICAgICAgICAgICAgIGVuZDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc9Jykge1xuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiAnPScsIGVxdWFsOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbkh0bWxMZXhlci5wcm90b3R5cGUubGV4ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIHRoaXMudG9rZW5zID0gW107XG5cbiAgICB2YXIgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgIHZhciBjaDMgPSB0aGlzLnBlZWsoMik7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRDb21tZW50KCc8IS0tJywgJy0tPicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnPCcgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwnLCAnPicsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPC8nKSAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMykpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPC8nLCAnPicsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IURPQ1RZUEUnKSkge1xuICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCEnLCAnPicsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdET0NUWVBFIGlzIG5vdCBhbGxvd2VkJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWFkVGV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRva2Vucztcbn07XG5cbmV4cG9ydCB7IEh0bWxMZXhlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IHsgRG9jdW1lbnRGcmFnbWVudE5vZGUsIENvbW1lbnROb2RlLCBUZXh0Tm9kZSwgRG9jdW1lbnRUeXBlTm9kZSwgRWxlbWVudE5vZGUsIEF0dHJOb2RlIH0gZnJvbSAnLi4vY29yZSc7XG5cbnV0aWxzLmluaGVyaXQoSHRtbFBhcnNlciwgUGFyc2VyKTtcbmZ1bmN0aW9uIEh0bWxQYXJzZXIobGV4ZXIsIG9wdGlvbnMpIHtcbiAgICBIdG1sUGFyc2VyLnN1cGVyLmNhbGwodGhpcywgbGV4ZXIsIG9wdGlvbnMpO1xufVxuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xuXG4gICAgdmFyIGZhcmdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnROb2RlKCk7XG4gICAgdmFyIGRvY3R5cGUsIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4uZG9jdHlwZSkge1xuICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xuICAgICAgICAgICAgICAgIGlmICghZG9jdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N0eXBlID0gdGhpcy5kb2N0eXBlKCk7XG4gICAgICAgICAgICAgICAgICAgIGZhcmdtZW50LiRwdXNoQ2hpbGQoZG9jdHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIG9ubHkgYWxsb3cgb25lXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIGlzIG5vdCBhbGxvd2VkXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XG4gICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBDb21tZW50Tm9kZSgpO1xuICAgICAgICAgICAgY29tbWVudC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZChjb21tZW50KTtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFRleHROb2RlKCk7XG4gICAgICAgICAgICB0ZXh0Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKHRleHQpO1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XG4gICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKHRoaXMuZWxlbWVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcImltcG9zc2libGVcIiwgdG9rZW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmFyZ21lbnQuJGJ1aWxkU2libGluZygpO1xuXG4gICAgcmV0dXJuIGZhcmdtZW50LmNoaWxkTm9kZXM7XG59O1xuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5kb2N0eXBlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubmV4dCgpO1xuICAgIHZhciBkb2NUeXBlID0gbmV3IERvY3VtZW50VHlwZU5vZGUoKTtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgIGRvY1R5cGUubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycyhkb2NUeXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgIGRvY1R5cGUuY2hpbGROb2Rlcy5wdXNoKGF0dHIpO1xuICAgIH0pO1xuXG4gICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBkb2NUeXBlO1xufTtcblxuSHRtbFBhcnNlci5wcm90b3R5cGUuZWxlbWVudCA9IGZ1bmN0aW9uIChwKSB7XG4gICAgdGhpcy5uZXh0KCk7XG4gICAgdmFyIGVsZSA9IG5ldyBFbGVtZW50Tm9kZSgpO1xuICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgZWxlLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgIH1cblxuICAgIHRoaXMuYXR0cnMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgIGVsZS4kcHVzaEF0dHJpYnV0ZShhdHRyKTtcbiAgICB9KTtcblxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgZWxlLnNlbGZDbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRFbGVtZW50cyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgZWxlLiRwdXNoQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgfVxuXG4gICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSB0b2tlbi50ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlO1xufTtcblxuSHRtbFBhcnNlci5wcm90b3R5cGUuY2hpbGRFbGVtZW50cyA9IGZ1bmN0aW9uIChwKSB7XG4gICAgdmFyIGVsZXMgPSBbXTtcblxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xuICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgQ29tbWVudE5vZGUoKTtcbiAgICAgICAgICAgIGNvbW1lbnQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGVsZXMucHVzaChjb21tZW50KTtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFRleHROb2RlKCk7XG4gICAgICAgICAgICB0ZXh0Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBlbGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcbiAgICAgICAgICAgIGVsZXMucHVzaCh0aGlzLmVsZW1lbnQocCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVzO1xufTtcblxuSHRtbFBhcnNlci5wcm90b3R5cGUuYXR0cnMgPSBmdW5jdGlvbiAocCkge1xuICAgIHZhciBhdHRycyA9IFtdO1xuXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGF0dHIgPSBuZXcgQXR0ck5vZGUoKTtcblxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgYXR0ci5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBhdHRyLm9yZ05vZGVOYW1lID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5lcXVhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmNvbnN0YW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHIubm9kZVZhbHVlID0gdG9rZW4udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhdHRycy5wdXNoKGF0dHIpO1xuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbn07XG5cbkh0bWxQYXJzZXIucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4ge307XG59O1xuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5kZXgrKztcbn07XG5cbmV4cG9ydCB7IEh0bWxQYXJzZXIgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgeyBIdG1sTGV4ZXIgfSBmcm9tICcuL2h0bWwtbGV4ZXInO1xuaW1wb3J0IHsgSHRtbFBhcnNlciB9IGZyb20gJy4vaHRtbC1wYXJzZXInO1xuXG52YXIgcGFyc2VPcHRpb25zID0ge1xuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlOiBmYWxzZSxcbiAgICBpc0lkZW50aWZpZXJTdGFydDogZmFsc2UsXG4gICAgbGl0ZXJhbHM6IHtcbiAgICAgICAgZmFsc2U6IGZhbHNlLFxuICAgICAgICBudWxsOiBudWxsLFxuICAgICAgICB0cnVlOiB0cnVlLFxuICAgICAgICB1bmRlZmluZWQ6IHVuZGVmaW5lZFxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHBhcnNlKGh0bWwpIHtcbiAgICB2YXIgbGV4ZXIgPSBuZXcgSHRtbExleGVyKHBhcnNlT3B0aW9ucyk7XG4gICAgdmFyIHBhcnNlciA9IG5ldyBIdG1sUGFyc2VyKGxleGVyLCBwYXJzZU9wdGlvbnMpO1xuICAgIHJldHVybiBwYXJzZXIucGFyc2UoaHRtbCk7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGUoaHRtbCwgb3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGdldEVtYmVkVHBsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zQ29tcG9uZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUNvbXBvbmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zRGlyZWN0aXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZURpcmVjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXR0aW5ncyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBvcHRpb25zKSxcbiAgICAgICAgYXN0Tm9kZXMgPSBwYXJzZShodG1sKTtcblxuICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcbiAgICAgICAgYXN0Tm9kZS5jb21waWxlKHNldHRpbmdzKTtcbiAgICB9KTtcblxuICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcbiAgICAgICAgYXN0Tm9kZS5kaXJlY3RpdmVzKCkuZm9yRWFjaChmdW5jdGlvbiAoZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBkaXJlY3RpdmUuJGNvbXBpbGUoc2V0dGluZ3MpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICAgIHNjb3BlLiQkdm5vZGVzID0gYXN0Tm9kZXM7XG5cbiAgICAgICAgYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZS5saW5rKHNjb3BlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uYWZ0ZXJMaW5rKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjb21wdXRlKGV4cCwgc2NvcGUsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVGaWx0ZXIobmFtZSk7XG4gICAgfTtcbiAgICByZXR1cm4gcGFyc2VFeHAoZXhwKS5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFeHAoZXhwKSB7XG4gICAgaWYgKGV4cCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHAgPSBleHAudHJpbSgpO1xuXG4gICAgaWYgKGV4cC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV4cCA9IGV4cC5yZXBsYWNlKCcmZ3Q7JywgJz4nKS5yZXBsYWNlKCcmbHQ7JywgJzwnKTtcblxuICAgIHZhciBsZXhlciA9IG5ldyBMZXhlcihwYXJzZU9wdGlvbnMpO1xuICAgIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKGxleGVyLCBwYXJzZU9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZShleHApO1xufVxuXG5mdW5jdGlvbiBwYXJzZUFzc2lnbm1lbnQoZXhwLCBzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciBhc3QgPSBwYXJzZUV4cChleHApO1xuICAgIHZhciBtZW1iZXJFeHAgPSBhc3QuZ2V0TWVtYmVyRXhwcmVzc2lvbigpO1xuXG4gICAgaWYgKG1lbWJlckV4cCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihleHAgKyAnaXMgbm90IHZhbGlkIG1lbWJlciBleHByZXNzaW9uJyk7XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICBvcHRpb25zLmNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVGaWx0ZXIobmFtZSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9iajogbWVtYmVyRXhwLm9iamVjdC5jb21waWxlKHNjb3BlLCBvcHRpb25zLCB7fSwgc2NvcGUpLFxuICAgICAgICBwcm9wOiBtZW1iZXJFeHAucHJvcGVydHkuY29tcGlsZShzY29wZSwgb3B0aW9ucywge30sIHNjb3BlKVxuICAgIH1cbn1cblxuZXhwb3J0IHsgY29tcGlsZSwgY29tcHV0ZSwgcGFyc2UsIHBhcnNlRXhwLCBwYXJzZUFzc2lnbm1lbnQgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcblxudmFyIE9QRVJBVE9SUyA9IHt9O1xudmFyIG9wZXJhdG9yVGV4dCA9ICcrIC0gKiAvICUgPT09ICE9PSA9PSAhPSA8ID4gPD0gPj0gJiYgfHwgISA9IHwnO1xudmFyIEVTQ0FQRSA9IHsgJ24nOiAnXFxuJywgJ2YnOiAnXFxmJywgJ3InOiAnXFxyJywgJ3QnOiAnXFx0JywgJ3YnOiAnXFx2JywgJ1xcJyc6ICdcXCcnLCAnXCInOiAnXCInIH07XG5cbm9wZXJhdG9yVGV4dC5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgT1BFUkFUT1JTW29wZXJhdG9yXSA9IHRydWU7XG59KTtcblxuZnVuY3Rpb24gTGV4ZXIob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG59XG5cbkxleGVyLnByb3RvdHlwZS5sZXggPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy50b2tlbnMgPSBbXTtcblxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLicgJiYgdGhpcy5pc051bWJlcih0aGlzLnBlZWsoKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZE51bWJlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXMoY2gsICcoKXt9W10uLDs6PycpKSB7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGNoIH0pO1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNoMiA9IGNoICsgdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICB2YXIgY2gzID0gY2gyICsgdGhpcy5wZWVrKDIpO1xuICAgICAgICAgICAgdmFyIG9wMSA9IE9QRVJBVE9SU1tjaF07XG4gICAgICAgICAgICB2YXIgb3AyID0gT1BFUkFUT1JTW2NoMl07XG4gICAgICAgICAgICB2YXIgb3AzID0gT1BFUkFUT1JTW2NoM107XG4gICAgICAgICAgICBpZiAob3AxIHx8IG9wMiB8fCBvcDMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBvcDMgPyBjaDMgOiAob3AyID8gY2gyIDogY2gpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogdG9rZW4sIG9wZXJhdG9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gdG9rZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRva2Vucztcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uIChjaCwgY2hhcnMpIHtcbiAgICByZXR1cm4gY2hhcnMuaW5kZXhPZihjaCkgIT09IC0xO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoaSkge1xuICAgIHZhciBudW0gPSBpIHx8IDE7XG4gICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDwgdGhpcy50ZXh0Lmxlbmd0aCkgPyB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXggKyBudW0pIDogZmFsc2U7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNOdW1iZXIgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICByZXR1cm4gKCcwJyA8PSBjaCAmJiBjaCA8PSAnOScpICYmIHR5cGVvZiBjaCA9PT0gJ3N0cmluZyc7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNXaGl0ZXNwYWNlID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgLy8gSUUgdHJlYXRzIG5vbi1icmVha2luZyBzcGFjZSBhcyBcXHUwMEEwXG4gICAgcmV0dXJuIChjaCA9PT0gJyAnIHx8IGNoID09PSAnXFxyJyB8fCBjaCA9PT0gJ1xcdCcgfHxcbiAgICAgICAgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnXFx2JyB8fCBjaCA9PT0gJ1xcdTAwQTAnKTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc0lkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQgP1xuICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XG4gICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XG4gICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlID9cbiAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxuICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gsIGNwKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmNvZGVQb2ludEF0ID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgaWYgKGNoLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gY2guY2hhckNvZGVBdCgwKTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICByZXR1cm4gKGNoLmNoYXJDb2RlQXQoMCkgPDwgMTApICsgY2guY2hhckNvZGVBdCgxKSAtIDB4MzVGREMwMDtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5wZWVrTXVsdGljaGFyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgdmFyIHBlZWsgPSB0aGlzLnBlZWsoKTtcbiAgICBpZiAoIXBlZWspIHtcbiAgICAgICAgcmV0dXJuIGNoO1xuICAgIH1cbiAgICB2YXIgY3AxID0gY2guY2hhckNvZGVBdCgwKTtcbiAgICB2YXIgY3AyID0gcGVlay5jaGFyQ29kZUF0KDApO1xuICAgIGlmIChjcDEgPj0gMHhEODAwICYmIGNwMSA8PSAweERCRkYgJiYgY3AyID49IDB4REMwMCAmJiBjcDIgPD0gMHhERkZGKSB7XG4gICAgICAgIHJldHVybiBjaCArIHBlZWs7XG4gICAgfVxuICAgIHJldHVybiBjaDtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc0V4cE9wZXJhdG9yID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgcmV0dXJuIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycgfHwgdGhpcy5pc051bWJlcihjaCkpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnRocm93RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIHN0YXJ0LCBlbmQpIHtcbiAgICBlbmQgPSBlbmQgfHwgdGhpcy5pbmRleDtcbiAgICB2YXIgY29sU3RyID0gKHV0aWxzLmlzRGVmaW5lZChzdGFydCkgPyAncyAnICsgc3RhcnQgKyAnLScgKyB0aGlzLmluZGV4ICsgJyBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCkgKyAnXScgOiAnICcgKyBlbmQpO1xuICAgIHRocm93IG5ldyBFcnJvcignTGV4ZXIgRXJyb3I6ICcgKyBlcnJvciArICcgYXQgY29sdW1uJyArIGNvbFN0ciArICcgaW4gZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddLicpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnJlYWROdW1iZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG51bWJlciA9ICcnO1xuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHV0aWxzLmxvd2VyY2FzZSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtcbiAgICAgICAgaWYgKGNoID09PSAnLicgfHwgdGhpcy5pc051bWJlcihjaCkpIHtcbiAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwZWVrQ2ggPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ2UnICYmIHRoaXMuaXNFeHBPcGVyYXRvcihwZWVrQ2gpKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXG4gICAgICAgICAgICAgICAgcGVla0NoICYmIHRoaXMuaXNOdW1iZXIocGVla0NoKSAmJlxuICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcbiAgICAgICAgICAgICAgICAoIXBlZWtDaCB8fCAhdGhpcy5pc051bWJlcihwZWVrQ2gpKSAmJlxuICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgZXhwb25lbnQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICB0ZXh0OiBudW1iZXIsXG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICB2YWx1ZTogTnVtYmVyKG51bWJlcilcbiAgICB9KTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5yZWFkSWRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB0aGlzLmluZGV4ICs9IHRoaXMucGVla011bHRpY2hhcigpLmxlbmd0aDtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy5wZWVrTXVsdGljaGFyKCk7XG4gICAgICAgIGlmICghdGhpcy5pc0lkZW50aWZpZXJDb250aW51ZShjaCkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZXggKz0gY2gubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICB0ZXh0OiB0aGlzLnRleHQuc2xpY2Uoc3RhcnQsIHRoaXMuaW5kZXgpLFxuICAgICAgICBpZGVudGlmaWVyOiB0cnVlXG4gICAgfSk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUucmVhZFN0cmluZyA9IGZ1bmN0aW9uIChxdW90ZSkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgdGhpcy5pbmRleCsrO1xuICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICB2YXIgcmF3U3RyaW5nID0gcXVvdGU7XG4gICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhleCA9IHRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcbiAgICAgICAgICAgICAgICBpZiAoIWhleC5tYXRjaCgvW1xcZGEtZl17NH0vaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIHVuaWNvZGUgZXNjYXBlIFtcXFxcdScgKyBoZXggKyAnXScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IDQ7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4LCAxNikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVwID0gRVNDQVBFW2NoXTtcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyAocmVwIHx8IGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVzY2FwZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGNoID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoY2ggPT09IHF1b3RlKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxuICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgcXVvdGUnLCBzdGFydCk7XG59O1xuXG5leHBvcnQgeyBMZXhlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuaW1wb3J0IHtpc0ZpbHRlcn0gZnJvbSAnLi4vdmlldyc7XG5cbnZhciBBU1QgPSB7fTtcbkFTVC5Qcm9ncmFtID0gJ1Byb2dyYW0nO1xuQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQgPSAnRXhwcmVzc2lvblN0YXRlbWVudCc7XG5BU1QuQXNzaWdubWVudEV4cHJlc3Npb24gPSAnQXNzaWdubWVudEV4cHJlc3Npb24nO1xuQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbiA9ICdDb25kaXRpb25hbEV4cHJlc3Npb24nO1xuQVNULkxvZ2ljYWxFeHByZXNzaW9uID0gJ0xvZ2ljYWxFeHByZXNzaW9uJztcbkFTVC5CaW5hcnlFeHByZXNzaW9uID0gJ0JpbmFyeUV4cHJlc3Npb24nO1xuQVNULlVuYXJ5RXhwcmVzc2lvbiA9ICdVbmFyeUV4cHJlc3Npb24nO1xuQVNULkNhbGxFeHByZXNzaW9uID0gJ0NhbGxFeHByZXNzaW9uJztcbkFTVC5NZW1iZXJFeHByZXNzaW9uID0gJ01lbWJlckV4cHJlc3Npb24nO1xuQVNULklkZW50aWZpZXIgPSAnSWRlbnRpZmllcic7XG5BU1QuTGl0ZXJhbCA9ICdMaXRlcmFsJztcbkFTVC5BcnJheUV4cHJlc3Npb24gPSAnQXJyYXlFeHByZXNzaW9uJztcbkFTVC5Qcm9wZXJ0eSA9ICdQcm9wZXJ0eSc7XG5BU1QuT2JqZWN0RXhwcmVzc2lvbiA9ICdPYmplY3RFeHByZXNzaW9uJztcblxuZnVuY3Rpb24gQXN0Tm9kZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbn1cblxuQXN0Tm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG59O1xuXG5Bc3ROb2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC5jb21waWxlKHNjb3BlLCBvcHRpb25zIHx8IHt9LCBjb250ZXh0KTtcbiAgICB9KTtcbn07XG5cbnV0aWxzLmluaGVyaXQoUHJvZ3JhbU5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gUHJvZ3JhbU5vZGUoKSB7XG4gICAgUHJvZ3JhbU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuUHJvZ3JhbSk7XG59XG5cblByb2dyYW1Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1swXS5jb21waWxlKHNjb3BlLCBvcHRpb25zIHx8IHt9KTtcbn07XG5cblByb2dyYW1Ob2RlLnByb3RvdHlwZS5nZXRNZW1iZXJFeHByZXNzaW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0uZ2V0TWVtYmVyRXhwcmVzc2lvbigpO1xufTtcblxudXRpbHMuaW5oZXJpdChFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSgpIHtcbiAgICBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50KTtcbn1cblxuRXhwcmVzc2lvblN0YXRlbWVudE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGNvbnRleHQpO1xufTtcblxuRXhwcmVzc2lvblN0YXRlbWVudE5vZGUucHJvdG90eXBlLmdldE1lbWJlckV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuXG4gICAgaWYoY2hpbGQgaW5zdGFuY2VvZiBNZW1iZXJFeHByZXNzaW9uTm9kZSl7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbnV0aWxzLmluaGVyaXQoQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShsZWZ0LCByaWdodCwgb3BlcmF0b3IpIHtcbiAgICBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQXNzaWdubWVudEV4cHJlc3Npb24pO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbn1cblxuQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMubGVmdC5jb21waWxlKHNjb3BlLCBvcHRpb25zLCB7IGFzc2lnbm1lbnRMZWZ0OiB0cnVlIH0pO1xuICAgIHZhciB2YWx1ZSA9IHRoaXMucmlnaHQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XG4gICAgdGFyZ2V0Lm9ialt0YXJnZXQucHJvcF0gPSB2YWx1ZTtcbn07XG5cbnV0aWxzLmluaGVyaXQoQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCkge1xuICAgIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uKTtcbiAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG59XG5cbkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy50ZXN0LmNvbXBpbGUoc2NvcGUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsdGVybmF0ZS5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVudC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcbn07XG5cbnV0aWxzLmluaGVyaXQoTG9naWNhbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIExvZ2ljYWxFeHByZXNzaW9uTm9kZShvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcbiAgICBMb2dpY2FsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbn1cblxuTG9naWNhbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5sZWZ0LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xuICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5yaWdodC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcblxuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xuICAgICAgICBjYXNlICcmJic6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd8fCc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG51dGlscy5pbmhlcml0KEJpbmFyeUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIEJpbmFyeUV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgIEJpbmFyeUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkJpbmFyeUV4cHJlc3Npb24pO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbn1cblxuQmluYXJ5RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmxlZnQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XG4gICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLnJpZ2h0LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xuXG4gICAgLy8gJysnLCAnLScsICcqJywgJy8nLCAnJScsICc8JywgJz4nLCAnPD0nLCAnPj0nLCAnPT0nLCAnIT0nLCAnPT09JywgJyE9PSdcbiAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKyByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAqIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLyByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyUnOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICUgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPiByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJz09JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyE9JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJz09PSc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnIT09JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG51dGlscy5pbmhlcml0KFVuYXJ5RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gVW5hcnlFeHByZXNzaW9uTm9kZShvcGVyYXRvciwgYXJnKSB7XG4gICAgVW5hcnlFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5VbmFyeUV4cHJlc3Npb24pO1xuICAgIHRoaXMucHJlZml4ID0gdHJ1ZTtcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgdGhpcy5hcmcgPSBhcmc7XG59XG5cblVuYXJ5RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0LCB2YWx1ZSA9IHRoaXMuYXJnLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xuXG4gICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICByZXN1bHQgPSAtdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnISc6XG4gICAgICAgICAgICByZXN1bHQgPSAhdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxudXRpbHMuaW5oZXJpdChMaXRlcmFsTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBMaXRlcmFsTm9kZSh2YWx1ZSkge1xuICAgIExpdGVyYWxOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkxpdGVyYWwpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cblxuTGl0ZXJhbE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG51dGlscy5pbmhlcml0KENhbGxFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBDYWxsRXhwcmVzc2lvbk5vZGUoY2FsbGVlLCBhcmdzKSB7XG4gICAgQ2FsbEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkNhbGxFeHByZXNzaW9uKTtcbiAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XG59XG5cbkNhbGxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jYWxsZWUuY29tcGlsZShzY29wZSwgb3B0aW9ucywgeyBjYWxsZWU6IHRydWUgfSk7XG4gICAgdmFyIGFyZ1ZhbHVlcyA9IHRoaXMuYXJncy5tYXAoZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gYXJnLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuZmlsdGVyKSB7XG4gICAgICAgIHZhciBmaWx0ZXJJbnMgPSBvcHRpb25zLmNyZWF0ZUZpbHRlcihjb250ZXh0LnByb3ApO1xuICAgICAgICBpZiAoaXNGaWx0ZXIoZmlsdGVySW5zKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcklucy4kZXhlY3V0ZS5hcHBseShmaWx0ZXJJbnMsIGFyZ1ZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWx0ZXIgXCInICsgY29udGV4dC5wcm9wICsgJ1wiIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZm4gPSBjb250ZXh0Lm9ialtjb250ZXh0LnByb3BdO1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0Lm9iaiwgYXJnVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udGV4dC5wcm9wICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgIH1cbn07XG5cbnV0aWxzLmluaGVyaXQoTWVtYmVyRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gTWVtYmVyRXhwcmVzc2lvbk5vZGUob2JqZWN0LCBwcm9wZXJ0eSwgY29tcHV0ZWQpIHtcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5NZW1iZXJFeHByZXNzaW9uKTtcbiAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkO1xufVxuXG5NZW1iZXJFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgY29udGV4dCkge1xuICAgIHZhciBvYmogPSB0aGlzLm9iamVjdC5jb21waWxlKHNjb3BlLCBvcHRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmICh1dGlscy5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9ialt0aGlzLnByb3BlcnR5LmNvbXBpbGUob2JqLCBvcHRpb25zLCBjb250ZXh0KV07XG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wZXJ0eSBpbnN0YW5jZW9mIE1lbWJlckV4cHJlc3Npb25Ob2RlKSB7XG4gICAgICAgIHJldHVybiBvYmpbdGhpcy5wcm9wZXJ0eS5jb21waWxlKHNjb3BlLCBvcHRpb25zLCBjb250ZXh0KV1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eS5jb21waWxlKG9iaiwgb3B0aW9ucywgY29udGV4dCk7XG59O1xuXG51dGlscy5pbmhlcml0KElkZW50aWZpZXJOb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIElkZW50aWZpZXJOb2RlKG5hbWUpIHtcbiAgICBJZGVudGlmaWVyTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5JZGVudGlmaWVyKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xufVxuXG5JZGVudGlmaWVyTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0LmFzc2lnbm1lbnRMZWZ0IHx8IGNvbnRleHQuY2FsbGVlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9iajogc2NvcGUsXG4gICAgICAgICAgICAgICAgcHJvcDogdGhpcy5uYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRleHQucHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IHNjb3BlW3RoaXMubmFtZV07XG4gICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIG9wdGlvbnMubG9jYWxzKSB7XG4gICAgICAgIHJlc3VsdCA9IG9wdGlvbnMubG9jYWxzW3RoaXMubmFtZV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG51dGlscy5pbmhlcml0KEFycmF5RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gQXJyYXlFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkFycmF5RXhwcmVzc2lvbik7XG59XG5cbnV0aWxzLmluaGVyaXQoUHJvcGVydHlOb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIFByb3BlcnR5Tm9kZSgpIHtcbiAgICBQcm9wZXJ0eU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuUHJvcGVydHkpO1xuICAgIHRoaXMua2luZCA9ICdpbml0JztcbiAgICB0aGlzLmtleSA9IG51bGw7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5jb21wdXRlZCA9IGZhbHNlO1xufVxuXG5Qcm9wZXJ0eU5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IHRoaXMua2V5LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMsIHsgcHJvcGVydHlLZXk6IHRydWUgfSksXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpXG4gICAgfTtcbn07XG5cbnV0aWxzLmluaGVyaXQoT2JqZWN0RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gT2JqZWN0RXhwcmVzc2lvbk5vZGUocHJvcGVydGllcykge1xuICAgIE9iamVjdEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk9iamVjdEV4cHJlc3Npb24pO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG59XG5cbk9iamVjdEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gICAgdGhpcy5wcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdmFyIGRlZiA9IGl0ZW0uY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XG4gICAgICAgIHJlc3VsdFtkZWYua2V5XSA9IGRlZi52YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiBpc0Fzc2lnbmFibGUoYXN0KSB7XG4gICAgcmV0dXJuIGFzdC50eXBlID09PSBBU1QuSWRlbnRpZmllciB8fCBhc3QudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb247XG59XG5cbmZ1bmN0aW9uIFBhcnNlcihsZXhlciwgb3B0aW9ucykge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xufVxuXG5QYXJzZXIucHJvdG90eXBlLnRocm93RXJyb3IgPSBmdW5jdGlvbiAobXNnLCB0b2tlbikge1xuICAgIHRocm93IG5ldyBFcnJvcignU3ludGF4IEVycm9yOiBUb2tlbiBcXCcnICsgdG9rZW4udGV4dCArICdcXCcnICsgbXNnICsgJyBhdCBjb2x1bW4gJyArICh0b2tlbi5pbmRleCArIDEpICtcbiAgICAgICAgJyBvZiB0aGUgZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddIHN0YXJ0aW5nIGF0IFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyh0b2tlbi5pbmRleCkgKyAnXS4nKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xuXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wcm9ncmFtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9ncmFtID0gbmV3IFByb2dyYW1Ob2RlKCk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XG4gICAgICAgICAgICBwcm9ncmFtLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmFtO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUGFyc2VyLnByb3RvdHlwZS5leHByZXNzaW9uU3RhdGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUoKTtcbiAgICBleHAuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJDaGFpbigpKTtcbiAgICByZXR1cm4gZXhwO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5maWx0ZXJDaGFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XG4gICAgICAgIGxlZnQgPSB0aGlzLmZpbHRlcihsZWZ0KTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5hc3NpZ25tZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLnRlcm5hcnkoKTtcbiAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xuICAgICAgICBpZiAoIWlzQXNzaWduYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhc3NpZ24gYSB2YWx1ZSB0byBhIG5vbiBsLXZhbHVlJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSBuZXcgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKHJlc3VsdCwgdGhpcy5hc3NpZ25tZW50KCksICc9Jyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnRlcm5hcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRlc3QgPSB0aGlzLmxvZ2ljYWxPUigpO1xuICAgIHZhciBhbHRlcm5hdGU7XG4gICAgdmFyIGNvbnNlcXVlbnQ7XG4gICAgaWYgKHRoaXMuZXhwZWN0KCc/JykpIHtcbiAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIGlmICh0aGlzLmNvbnN1bWUoJzonKSkge1xuICAgICAgICAgICAgY29uc2VxdWVudCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRlc3Q7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmxvZ2ljYWxPUiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfHwnKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5sb2dpY2FsQU5EID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWZ0ID0gdGhpcy5lcXVhbGl0eSgpO1xuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnJiYnKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnJiYnLCBsZWZ0LCB0aGlzLmVxdWFsaXR5KCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuZXF1YWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLnJlbGF0aW9uYWwoKTtcbiAgICB2YXIgdG9rZW47XG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc9PScsICchPScsICc9PT0nLCAnIT09JykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5yZWxhdGlvbmFsKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucmVsYXRpb25hbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMuYWRkaXRpdmUoKTtcbiAgICB2YXIgdG9rZW47XG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLmFkZGl0aXZlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuYWRkaXRpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLm11bHRpcGxpY2F0aXZlKCk7XG4gICAgdmFyIHRva2VuO1xuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm11bHRpcGxpY2F0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWZ0ID0gdGhpcy51bmFyeSgpO1xuICAgIHZhciB0b2tlbjtcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJyonLCAnLycsICclJykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy51bmFyeSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnVuYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0b2tlbjtcbiAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XG4gICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcbiAgICB9XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnByaW1hcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByaW1hcnk7XG4gICAgaWYgKHRoaXMuZXhwZWN0KCcoJykpIHtcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuZmlsdGVyQ2hhaW4oKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgnWycpKSB7XG4gICAgICAgIHByaW1hcnkgPSB0aGlzLmFycmF5RGVjbGFyYXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCd7JykpIHtcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMub2JqZWN0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubGl0ZXJhbHMuaGFzT3duUHJvcGVydHkodGhpcy5wZWVrKCkudGV4dCkpIHtcbiAgICAgICAgcHJpbWFyeSA9IG5ldyBMaXRlcmFsTm9kZSh0aGlzLm9wdGlvbnMubGl0ZXJhbHNbdGhpcy5jb25zdW1lKCkudGV4dF0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICBwcmltYXJ5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICBwcmltYXJ5ID0gdGhpcy5jb25zdGFudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignbm90IGEgcHJpbWFyeSBleHByZXNzaW9uJywgdGhpcy5wZWVrKCkpO1xuICAgIH1cblxuICAgIHZhciBuZXh0O1xuICAgIHdoaWxlICgobmV4dCA9IHRoaXMuZXhwZWN0KCcoJywgJ1snLCAnLicpKSkge1xuICAgICAgICBpZiAobmV4dC50ZXh0ID09PSAnKCcpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMucGFyc2VBcmd1bWVudHMoKSk7XG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICdbJykge1xuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmV4cHJlc3Npb24oKSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICcuJykge1xuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmlkZW50aWZpZXIoKSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJTVBPU1NJQkxFJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByaW1hcnk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChiYXNlRXhwcmVzc2lvbikge1xuICAgIHZhciBhcmdzID0gW2Jhc2VFeHByZXNzaW9uXSwgaWRlbnRpZmllcnMgPSBbdGhpcy5pZGVudGlmaWVyKCldO1xuXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcuJykpIHtcbiAgICAgICAgaWRlbnRpZmllcnMucHVzaCh0aGlzLmlkZW50aWZpZXIoKSk7XG4gICAgfVxuXG4gICAgLy8gcGx1cyBuYW1lc3BhY2VcbiAgICB2YXIgZW50aXJlTmFtZSA9IGlkZW50aWZpZXJzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5uYW1lO1xuICAgIH0pLmpvaW4oJy4nKTtcblxuICAgIHZhciByZXN1bHQgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKG5ldyBJZGVudGlmaWVyTm9kZShlbnRpcmVOYW1lKSwgYXJncyk7XG5cbiAgICByZXN1bHQuZmlsdGVyID0gdHJ1ZTtcblxuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnOicpKSB7XG4gICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucGFyc2VBcmd1bWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnKScpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgIH1cbiAgICByZXR1cm4gYXJncztcbn07XG5cblBhcnNlci5wcm90b3R5cGUuaWRlbnRpZmllciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmNvbnN1bWUoKTtcbiAgICBpZiAoIXRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBub3QgYSB2YWxpZCBpZGVudGlmaWVyJywgdG9rZW4pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IElkZW50aWZpZXJOb2RlKHRva2VuLnRleHQpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5jb25zdGFudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPIGNoZWNrIHRoYXQgaXQgaXMgYSBjb25zdGFudFxuICAgIHJldHVybiBuZXcgTGl0ZXJhbE5vZGUodGhpcy5jb25zdW1lKCkudmFsdWUpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5hcnJheURlY2xhcmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnIgPSBuZXcgQXJyYXlFeHByZXNzaW9uTm9kZSgpO1xuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICddJykge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCddJykpIHtcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnIuYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uKCkpO1xuICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICB9XG4gICAgdGhpcy5jb25zdW1lKCddJyk7XG5cbiAgICByZXR1cm4gYXJyO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5vYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBbXSwgcHJvcGVydHk7XG4gICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ30nKSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ30nKSkge1xuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5Tm9kZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5jb25zdGFudCgpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnOicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gcHJvcGVydHkua2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCdbJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ1snKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpbnZhbGlkIGtleScsIHRoaXMucGVlaygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgIH1cbiAgICB0aGlzLmNvbnN1bWUoJ30nKTtcblxuICAgIHJldHVybiBuZXcgT2JqZWN0RXhwcmVzc2lvbk5vZGUocHJvcGVydGllcyk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmNvbnN1bWUgPSBmdW5jdGlvbiAoZTEpIHtcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XG4gICAgfVxuXG4gICAgdmFyIHRva2VuID0gdGhpcy5leHBlY3QoZTEpO1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyB1bmV4cGVjdGVkLCBleHBlY3RpbmcgWycgKyBlMSArICddJywgdGhpcy5wZWVrKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW47XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnBlZWtUb2tlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRva2Vuc1swXTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uIChlMSwgZTIsIGUzLCBlNCkge1xuICAgIHJldHVybiB0aGlzLnBlZWtBaGVhZCgwLCBlMSwgZTIsIGUzLCBlNCk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnBlZWtBaGVhZCA9IGZ1bmN0aW9uIChpLCBlMSwgZTIsIGUzLCBlNCkge1xuICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiBpKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW5zW2ldO1xuICAgICAgICB2YXIgdCA9IHRva2VuLnRleHQ7XG4gICAgICAgIGlmICh0ID09PSBlMSB8fCB0ID09PSBlMiB8fCB0ID09PSBlMyB8fCB0ID09PSBlNCB8fFxuICAgICAgICAgICAgKCFlMSAmJiAhZTIgJiYgIWUzICYmICFlNCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmV4cGVjdCA9IGZ1bmN0aW9uIChlMSwgZTIsIGUzLCBlNCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMucGVlayhlMSwgZTIsIGUzLCBlNCk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHsgUGFyc2VyIH07IiwiZXhwb3J0ICogZnJvbSAnLi90ZW1wbGF0ZS1jYWNoZSc7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi92aWV3L3NlcnZpY2UnO1xuaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uL2RlY29yYXRvci9zZXJ2aWNlJztcblxuQHNlcnZpY2Uoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnJHRlbXBsYXRlQ2FjaGUnXG59KVxuY2xhc3MgVGVtcGxhdGVDYWNoZVNlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50cGxDYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLnByb21pc2VDYWNoZSA9IHt9O1xuICAgIH1cblxuICAgIGdldFRwbEJ5VXJsKHVybCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMudHBsQ2FjaGVbdXJsXSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzZWxmLnRwbENhY2hlW3VybF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMucHJvbWlzZUNhY2hlW3VybF0pIHtcbiAgICAgICAgICAgIHRoaXMucHJvbWlzZUNhY2hlW3VybF0gPSBheGlvcy5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnByb21pc2VDYWNoZVt1cmxdID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxmLnRwbENhY2hlW3VybF0gPSByZXMuZGF0YSB8fCAnJztcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50cGxDYWNoZVt1cmxdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlQ2FjaGVbdXJsXTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb25cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiAqbi1yZXBlYXQ9XFxcImdyb3VwIGluIGNvbmZpZy5ncm91cHNcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiIEBjbGljaz1cXFwidG9nZ2xlKGdyb3VwKVxcXCIgKm4tYmluZD1cXFwiZ3JvdXAudGl0bGVcXFwiPjwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sbGFwc2Ugc2hvd1xcXCIgKm4tY29sbGFwc2U9XFxcImdyb3VwLmNvbGxhcHNlZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm4tcmVwZWF0PVxcXCJpdGVtIGluIGdyb3VwLml0ZW1zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVxcXCJpdGVtLmZpZWxkXFxcIiBjbGFzcz1cXFwiY29sLWZvcm0tbGFiZWwtc21cXFwiICpuLWJpbmQ9XFxcIml0ZW0ubGFiZWxcXFwiPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgOnR5cGU9XFxcIml0ZW0udHlwZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cXFwiIDppZD1cXFwiaXRlbS5maWVsZFxcXCIgKm4tbW9kZWw9XFxcImVudGl0eVtpdGVtLmZpZWxkXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LW11dGVkXFxcIiAqbi1zaG93PVxcXCJpdGVtLmhlbHBcXFwiICpuLWJpbmQ9XFxcIml0ZW0uaGVscFxcXCI+PC9zbWFsbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCIiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vdmlldy9jb21wb25lbnQnO1xuaW1wb3J0IHtjb21wb25lbnR9IGZyb20gJy4uLy4uL2RlY29yYXRvci9jb21wb25lbnQnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZm9ybS5odG1sJztcblxuQGNvbXBvbmVudCh7XG4gICAgbmFtZXNwYWNlOiAnc2luZS51aScsXG4gICAgc2VsZWN0b3I6ICduLWZvcm0nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufSlcbmNsYXNzIEZvcm1Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVudGl0eSA9IG51bGw7XG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgZ3JvdXBzOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHRvZ2dsZShncm91cCkge1xuICAgICAgICB0aGlzLiRwcm94eShncm91cCkuY29sbGFwc2VkID0gIWdyb3VwLmNvbGxhcHNlZDtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9mb3JtJzsiLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tIFwiLi4vLi4vdmlldy9kaXJlY3RpdmVcIjtcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlXCI7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUudWknLFxuICAgIHNlbGVjdG9yOiAnbi1jb2xsYXBzZSdcbn0pXG5jbGFzcyBDb2xsYXBzZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSA0MDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9ICcnO1xuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuXG4gICAgb25Mb2FkKGVsZSwgYmluZGluZykge1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZWxlLmNsaWVudEhlaWdodDtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gZWxlLnN0eWxlLmRpc3BsYXk7XG5cbiAgICAgICAgZWxlLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIGVsZS5zdHlsZS50cmFuc2l0aW9uID0gJ2hlaWdodCAnICsgdGhpcy5kdXJhdGlvbiArICdtcyc7XG5cbiAgICAgICAgaWYgKGJpbmRpbmcuY29tcHV0ZSgpKSB7XG4gICAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGVsZS5zdHlsZS5oZWlnaHQgPSAwICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblVwZGF0ZShlbGUsIGJpbmRpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJpbmRpbmcuY29tcHV0ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoZWxlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdyhlbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZShlbGUpIHtcbiAgICAgICAgZWxlLnN0eWxlLmhlaWdodCA9IDAgKyAncHgnO1xuXG4gICAgICAgIHRoaXMuY2FuY2VsVGltZW91dCgpO1xuXG4gICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gbnVsbDtcbiAgICAgICAgfSwgdGhpcy5kdXJhdGlvbiAtIDIwKTtcbiAgICB9XG5cbiAgICBzaG93KGVsZSkge1xuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG5cbiAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG5cbiAgICAgICAgdGhpcy5jYW5jZWxUaW1lb3V0KCk7XG5cbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYW5jZWxUaW1lb3V0KCkge1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0SWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxUaW1lb3V0KCk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vY29sbGFwc2UnOyIsImV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JzsiLCJcbmZ1bmN0aW9uIGdldENoaWxkTm9kZXMobm9kZSkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMsIDApO1xufVxuXG5mdW5jdGlvbiBjbGVhckNoaWxkTm9kZXMobm9kZSkge1xuICAgIGdldENoaWxkTm9kZXMobm9kZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlZk5vZGUsIG5ld05vZGUpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHJlZk5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUpO1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlZk5vZGUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9kZUJldHdlZW4oYmVnaW5Ob2RlLCBlbmROb2RlKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBiZWdpbk5vZGUucGFyZW50Tm9kZTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IGdldENoaWxkTm9kZXMocGFyZW50Tm9kZSk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgPT09IGJlZ2luTm9kZSAmJiBjaGlsZCAhPT0gZW5kTm9kZSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nID09PSBlbmROb2RlICYmIGNoaWxkICE9PSBiZWdpbk5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydE5vZGVBZnRlcihyZWZOb2RlLCBuZXdOb2RlKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSByZWZOb2RlLnBhcmVudE5vZGU7XG5cbiAgICBpZiAocGFyZW50Tm9kZS5sYXN0Q2hpbGQgPT09IHJlZk5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdOb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZOb2RlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudExvYWRlZChlbGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGNhbmNlbFRva2VuID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBxdWVyeSgpIHtcbiAgICAgICAgaWYgKGNhbmNlbFRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlLmNsaWVudFdpZHRoID4gMCAmJiBlbGUuY2xpZW50SGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FuY2VsVG9rZW4gPSB0cnVlO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudFVubG9hZGVkKGVsZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgY2FuY2VsVG9rZW4gPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHF1ZXJ5KCkge1xuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGUuY2xpZW50V2lkdGggPT09IDAgJiYgZWxlLmNsaWVudEhlaWdodCA9PSAwKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgZ2V0Q2hpbGROb2RlcywgY2xlYXJDaGlsZE5vZGVzLCByZXBsYWNlTm9kZSwgcmVtb3ZlTm9kZSwgcmVtb3ZlTm9kZUJldHdlZW4sIGluc2VydE5vZGVBZnRlciwgcXVlcnlFbGVtZW50TG9hZGVkLCBxdWVyeUVsZW1lbnRVbmxvYWRlZCB9OyIsImltcG9ydCB7IGlzT2JqZWN0LCBpc0FycmF5IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG52YXIgcHJvcENoYW5naW5nTXNnID0gbmV3IE1lc3NlbmdlcigpO1xudmFyIHByb3BDaGFuZ2VkTXNnID0gbmV3IE1lc3NlbmdlcigpO1xuXG5jbGFzcyBTZXRQcm9wZXJ0eUhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKGRlZXBQcm94eSkge1xuICAgICAgICB0aGlzLnNlbGZLZXkgPSAnX19zZWxmX18nO1xuICAgICAgICB0aGlzLmRlZXBQcm94eSA9IGRlZXBQcm94eTtcbiAgICB9XG5cbiAgICBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZktleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGFyZ2V0W2tleV07XG5cbiAgICAgICAgaWYgKHRoaXMuZGVlcFByb3h5ICYmIGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXcgUHJveHkodmFsdWUsIG5ldyBTZXRQcm9wZXJ0eUhhbmRsZXIodGhpcy5kZWVwUHJveHkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmRlZXBQcm94eSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdmFsdWVbdGhpcy5zZWxmS2V5XTtcblxuICAgICAgICAgICAgLy8gdmFsdWUgaXMgYSBwcm94eSByZXR1cm4gYnkgdGhpcyBoYW5kbGVyXG4gICAgICAgICAgICBpZiAoc2VsZiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzZWxmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGFyZ2V0W2tleV07XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSB8fCAoaXNBcnJheSh0YXJnZXQpICYmIGtleSA9PT0gJ2xlbmd0aCcpKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHByb3BDaGFuZ2luZ01zZy5maXJlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWxpZGF0aW9uXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24uaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcHJvcENoYW5nZWRNc2cuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuY2xhc3MgR2V0UHJvcGVydHlIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wTWFwcywgZGVlcFByb3h5KSB7XG4gICAgICAgIHRoaXMucHJvcE1hcHMgPSBwcm9wTWFwcztcbiAgICAgICAgdGhpcy5kZWVwUHJveHkgPSBkZWVwUHJveHk7XG4gICAgfVxuXG4gICAgZ2V0KHRhcmdldCwga2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRhcmdldFtrZXldO1xuXG4gICAgICAgIGlmICh0aGlzLmRlZXBQcm94eSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IFByb3h5KHZhbHVlLCBuZXcgR2V0UHJvcGVydHlIYW5kbGVyKHRoaXMucHJvcE1hcHMsIHRoaXMuZGVlcFByb3h5KSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhpc3RlZCA9IHRoaXMucHJvcE1hcHMuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ub2JqID09PSB0YXJnZXQgJiYgaXRlbS5wcm9wID09PSBrZXk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghZXhpc3RlZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wTWFwcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBvYmo6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBwcm9wOiBrZXlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgU2V0UHJvcGVydHlIYW5kbGVyLCBHZXRQcm9wZXJ0eUhhbmRsZXIsIHByb3BDaGFuZ2luZ01zZywgcHJvcENoYW5nZWRNc2cgfSIsImltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4vbWVzc2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vZWxlLXV0aWxzJztcblxuZnVuY3Rpb24gaXNNZXNzZW5nZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1lc3Nlbmdlcjtcbn1cblxuZXhwb3J0IHsgaXNNZXNzZW5nZXJ9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBNZXNzZW5nZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgfVxuXG4gICAgb24oZm4pIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZm4pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVyc1tpXSA9PT0gZm4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmUoYXJncywgc2NvcGUpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IHRoaXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5oYW5kbGVyc1tpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHRoaXMuaGFuZGxlcnNbaV0uY2FsbChzY29wZSwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbn1cblxuY2xhc3MgTWVzc2VuZ2VyQnVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZXNzZW5nZXJzID0ge307XG4gICAgfVxuXG4gICAgZ2V0KGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NlbmdlcnNbZV0pIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2VuZ2Vyc1tlXSA9IG5ldyBNZXNzZW5nZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzZW5nZXJzW2VdO1xuICAgIH1cblxuICAgIG9uKGUsIGZuKSB7XG4gICAgICAgIHRoaXMuZ2V0KGUpLm9uKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZSwgZm4pIHtcbiAgICAgICAgdGhpcy5nZXQoZSkub2ZmKGZuKTtcbiAgICB9XG5cbiAgICBmaXJlKGUsIGFyZ3MsIHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChlKS5maXJlKGFyZ3MsIHNjb3BlKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IE1lc3NlbmdlciwgTWVzc2VuZ2VyQnVzIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBwcm9wQ2hhbmdpbmdNc2csIHByb3BDaGFuZ2VkTXNnIH0gZnJvbSAnLi9oYW5kbGVyJztcblxuY2xhc3MgUHJvcGVydHlDaGFuZ2VTdWJqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGFpbk1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZWdleE1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBvbihwcm9wLCBhY3Rpb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG1hcCA9IHV0aWxzLmlzUmVnRXhwKHByb3ApID8gdGhpcy5yZWdleE1hcCA6IHRoaXMucGxhaW5NYXA7XG5cbiAgICAgICAgaWYgKCFtYXAuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICBtYXAuc2V0KHByb3AsIFtdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICBhY3Rpb24uYmVmb3JlQ2hhbmdlZCA9IG9wdGlvbnMuYmVmb3JlQ2hhbmdlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcC5nZXQocHJvcCkucHVzaChhY3Rpb24pO1xuICAgIH1cblxuICAgIG9mZihwcm9wLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIG1hcCA9IHV0aWxzLmlzUmVnRXhwKHByb3ApID8gdGhpcy5yZWdleE1hcCA6IHRoaXMucGxhaW5NYXA7XG5cbiAgICAgICAgaWYgKCFtYXAuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWN0aW9ucyA9IG1hcC5nZXQocHJvcCk7XG4gICAgICAgIHZhciBpbmRleCA9IGFjdGlvbnMuaW5kZXhPZihhY3Rpb24pO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVDaGFuZ2VkKHByb3AsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYWluTWFwLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgdGhpcy5wbGFpbk1hcC5nZXQocHJvcCkuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVnZXhNYXAuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9ucywgcGF0dGVybikge1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4udGVzdChwcm9wKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmJlZm9yZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYsIHByb3AsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpcmVDaGFuZ2luZyhwcm9wLCBhcmdzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5wbGFpbk1hcC5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgIHRoaXMucGxhaW5NYXAuZ2V0KHByb3ApLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVnZXhNYXAuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9ucywgcGF0dGVybikge1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4udGVzdChwcm9wKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5wbGFpbk1hcC5jbGVhcigpO1xuICAgICAgICB0aGlzLnJlZ2V4TWFwLmNsZWFyKCk7XG4gICAgfVxufVxuXG5jbGFzcyBPYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBvbmNoYW5naW5nID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gYXJncy50YXJnZXQsIHByb3AgPSBhcmdzLmtleTtcbiAgICAgICAgICAgICAgICBzZWxmLmZpcmVDaGFuZ2luZyhvYmosIHByb3AsIGFyZ3MuZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25jaGFuZ2VkID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gYXJncy50YXJnZXQsIHByb3AgPSBhcmdzLmtleTtcbiAgICAgICAgICAgICAgICBzZWxmLmZpcmVDaGFuZ2VkKG9iaiwgcHJvcCwgYXJncy5kYXRhKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgcHJvcENoYW5naW5nTXNnLm9uKG9uY2hhbmdpbmcpO1xuICAgICAgICBwcm9wQ2hhbmdlZE1zZy5vbihvbmNoYW5nZWQpO1xuXG4gICAgICAgIHRoaXMub2ZmQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHJvcENoYW5naW5nTXNnLm9mZihvbmNoYW5naW5nKTtcbiAgICAgICAgICAgIHByb3BDaGFuZ2VkTXNnLm9mZihvbmNoYW5nZWQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9iak1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBvbihvYmosIHByb3AsIGFjdGlvbiwgb3B0aW9ucykge1xuICAgICAgICBpZiAoIXRoaXMub2JqTWFwLmhhcyhvYmopKSB7XG4gICAgICAgICAgICB0aGlzLm9iak1hcC5zZXQob2JqLCBuZXcgUHJvcGVydHlDaGFuZ2VTdWJqZWN0KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYmpNYXAuZ2V0KG9iaikub24ocHJvcCwgYWN0aW9uLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBvZmYob2JqLCBwcm9wLCBhY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMub2JqTWFwLmhhcyhvYmopKSB7XG4gICAgICAgICAgICB0aGlzLm9iak1hcC5nZXQob2JqKS5vZmYocHJvcCwgYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVDaGFuZ2VkKG9iaiwgcHJvcCwgYXJncykge1xuICAgICAgICBpZiAodGhpcy5vYmpNYXAuaGFzKG9iaikpIHtcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLmdldChvYmopLmZpcmVDaGFuZ2VkKHByb3AsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUNoYW5naW5nKG9iaiwgcHJvcCwgYXJncykge1xuICAgICAgICBpZiAodGhpcy5vYmpNYXAuaGFzKG9iaikpIHtcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLmdldChvYmopLmZpcmVDaGFuZ2luZyhwcm9wLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub2ZmQ2hhbmdlLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMub2JqTWFwLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vYmpNYXAgPSBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgUHJvcGVydHlDaGFuZ2VTdWJqZWN0LCBPYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3QgfTsiLCJ2YXIgZGVidWdNb2RlID0gdHJ1ZSxcbiAgICB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBhY3Rpb24sIGlnbm9yZU93bikge1xuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24oaW5kZXgsIG9ialtpbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChpZ25vcmVPd24gfHwgb2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbihwLCBvYmpbcF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjdGlvbihvYmosIG9iaik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzb21lKG9iaiwgYWN0aW9uKSB7XG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKGFjdGlvbihpbmRleCwgb2JqW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbihwLCBvYmpbcF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbihvYmosIG9iaik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIG9iakluZGV4ID0gMCwgb2JqID0gYXJndW1lbnRzW29iakluZGV4XSwgZmlsdGVyO1xuXG4gICAgaWYgKGlzQm9vbGVhbihvYmopKSB7XG4gICAgICAgIGRlZXAgPSBvYmo7XG4gICAgICAgIG9iakluZGV4Kys7XG4gICAgICAgIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF07XG4gICAgfVxuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiBvYmpJbmRleCArIDEpIHtcbiAgICAgICAgZmlsdGVyID0gYXJndW1lbnRzW29iakluZGV4ICsgMV07XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICB2YXIgbmV3QXJyID0gW107XG4gICAgICAgIG9iai5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGluZGV4LCBpdGVtKSkge1xuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGRlZXAgPyBjb3B5KGl0ZW0pIDogaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3QXJyO1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgIHZhciBuZXdPYmogPSBvYmplY3Qob2JqKTtcbiAgICAgICAgZm9yRWFjaChvYmosIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwga2V5LCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXdPYmpba2V5XSA9IGRlZXAgPyBjb3B5KHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld09iajtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSBhcmd1bWVudHNbaW5kZXhdO1xuXG4gICAgaWYgKGlzQm9vbGVhbih0YXJnZXQpKSB7XG4gICAgICAgIGRlZXAgPSB0YXJnZXQ7XG4gICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1srK2luZGV4XTtcbiAgICB9XG5cbiAgICBpZiAoZGVlcCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZSgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IHt9O1xuXG4gICAgaWYgKGlzQm9vbGVhbihhcmd1bWVudHNbaW5kZXhdKSkge1xuICAgICAgICBkZWVwID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBpZiAoZGVlcCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHBsYWluTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0YXJnZXRba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0W2tleV0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0KG8pIHtcbiAgICBmdW5jdGlvbiBGKCkge1xuICAgIH1cblxuICAgIEYucHJvdG90eXBlID0gbztcbiAgICByZXR1cm4gbmV3IEYoKTtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpIHtcbiAgICB2YXIgcHJvdG90eXBlID0gb2JqZWN0KHN1cGVyVHlwZS5wcm90b3R5cGUpO1xuICAgIHByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YlR5cGU7XG4gICAgc3ViVHlwZS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXQoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XG4gICAgaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpO1xuICAgIHN1YlR5cGUuc3VwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN1cGVyVHlwZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGxvd2VyY2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b0xvd2VyQ2FzZSgpIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB1cHBlcmNhc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9VcHBlckNhc2UoKSA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5O1xufVxuXG5mdW5jdGlvbiBpc01hcChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWFwO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc0JsYW5rT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIWdldFByb3RvdHlwZU9mKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cCh2YWx1ZSkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbn1cblxuZnVuY3Rpb24gaXNTYW1lKG9iajEsIG9iajIpIHtcbiAgICB2YXIgc2FtZSA9IChvYmoxID09PSBvYmoyKTtcblxuICAgIGlmICghc2FtZSkge1xuICAgICAgICBpZiAoaXNBcnJheShvYmoxKSAmJiBpc0FycmF5KG9iajIpKSB7XG4gICAgICAgICAgICBpZiAob2JqMS5sZW5ndGggPT09IG9iajIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2FtZSA9ICFzb21lKG9iajEsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpc1NhbWUodmFsdWUsIG9iajJbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc09iamVjdChvYmoxKSAmJiBpc09iamVjdChvYmoyKSAmJiBnZXRQcm90b3R5cGVPZihvYmoxKSA9PT0gZ2V0UHJvdG90eXBlT2Yob2JqMikpIHtcbiAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2FtZTtcbn1cblxuZnVuY3Rpb24gZGVidWcobG9nKSB7XG4gICAgaWYgKGRlYnVnTW9kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29udGFpbnMoYXJyLCBvYmopIHtcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IG9iajtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY29udGFpbnNTdHIoYXJyLCBzdHIsIGlnbm9yZUNhc2UpIHtcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHN0ciB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2UoaXRlbSkgPT09IGxvd2VyY2FzZShzdHIpKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcblxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNQcm9wID0gZmFsc2U7XG4gICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAoa2V5MywgdmFsdWUzKSB7XG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcbiAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XG4gICAgICAgIH0sIHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBoYXNQcm9wO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIGtleSwgaWdub3JlQ2FzZSkge1xuICAgIGlmICghb2JqKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XG5cbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKGtleTMsIHZhbHVlMykge1xuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzUHJvcCA/IHRhcmdldCA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHNldFByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSwgaWdub3JlQ2FzZSkge1xuICAgIGlmICghb2JqKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xuXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleTJdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoYXNQcm9wID0gZmFsc2U7XG4gICAgICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKGtleTMsIHZhbHVlMykge1xuICAgICAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xuICAgICAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaGFzUHJvcCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJzogQ2FuIG5vdCBzZXQgcHJvcGVydHkgb2YgdW5kZWZpbmVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb25jYXQoKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCB7XG4gICAgZm9yRWFjaCxcbiAgICBzb21lLFxuICAgIGNvcHksXG4gICAgZXh0ZW5kLFxuICAgIG1lcmdlLFxuICAgIG9iamVjdCxcbiAgICBpbmhlcml0LFxuICAgIGxvd2VyY2FzZSxcbiAgICB1cHBlcmNhc2UsXG4gICAgaXNVbmRlZmluZWQsXG4gICAgaXNEZWZpbmVkLFxuICAgIGlzT2JqZWN0LFxuICAgIGlzQmxhbmtPYmplY3QsXG4gICAgaXNOdW1iZXIsXG4gICAgaXNEYXRlLFxuICAgIGlzRnVuY3Rpb24sXG4gICAgaXNSZWdFeHAsXG4gICAgaXNCb29sZWFuLFxuICAgIGlzQXJyYXksXG4gICAgaXNTdHJpbmcsXG4gICAgaXNTYW1lLFxuICAgIGRlYnVnLFxuICAgIGNvbnRhaW5zLFxuICAgIGNvbnRhaW5zU3RyLFxuICAgIGhhc1Byb3BlcnR5LFxuICAgIGdldFByb3BlcnR5LFxuICAgIHNldFByb3BlcnR5LFxuICAgIGNvbmNhdFxufTsiLCJpbXBvcnQgeyBpc01lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQgKiBhcyBlbGVVdGlscyBmcm9tICcuLi91dGlsaXR5L2VsZS11dGlscyc7XG5pbXBvcnQgeyBTZXRQcm9wZXJ0eUhhbmRsZXIgfSBmcm9tICcuLi91dGlsaXR5L2hhbmRsZXInO1xuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHlDaGFuZ2VTdWJqZWN0IH0gZnJvbSAnLi4vdXRpbGl0eS9zdWJqZWN0JztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgeyBjb21waWxlLCBjb21wdXRlIH0gZnJvbSAnLi4vcGFyc2VyJztcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgZ2V0IHByb3h5KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHRoaXMsIG5ldyBTZXRQcm9wZXJ0eUhhbmRsZXIodHJ1ZSkpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG1ldGEpIHtcbiAgICAgICAgQ29tcG9uZW50LmNvbnN0cnVjdC5jYWxsKHRoaXMsIG1ldGEpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb25zdHJ1Y3QobWV0YSkge1xuICAgICAgICB0aGlzLiQkdm5vZGVzID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJG93bmVyVk5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLiQkcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cyA9IFtdO1xuICAgICAgICB0aGlzLiQkY2hpbGREaXJlY3RpdmVzID0gW107XG4gICAgICAgIHRoaXMuJCRkZXRlY3RUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJHByb3BDaGFuZ2VkID0gbmV3IE9iamVjdFByb3BlcnR5Q2hhbmdlU3ViamVjdCgpO1xuXG4gICAgICAgIGlmIChtZXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJHNldE1ldGEobWV0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcbiAgICB9XG5cbiAgICAkaG9va3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBiZWZvcmVBdHRyQ2hhbmdlOiAnJyxcbiAgICAgICAgICAgIGFmdGVyQXR0ckNoYW5nZTogJycsXG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxuICAgICAgICAgICAgYWZ0ZXJWaWV3TW91bnQ6ICcnLFxuICAgICAgICAgICAgb25EZXN0cm95OiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgICRnZXRNZXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGEgfHwge307XG4gICAgfVxuXG4gICAgJHNldE1ldGEodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kJG1ldGEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAkYmluZFZOb2RlKHZub2RlKSB7XG4gICAgICAgIHRoaXMuJCRvd25lclZOb2RlID0gdm5vZGU7XG4gICAgfVxuXG4gICAgJGhhc0F0dHIocHJvcCkge1xuICAgICAgICByZXR1cm4gdXRpbHMuaGFzUHJvcGVydHkodGhpcywgcHJvcCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgJGluaXRBdHRyKHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMsIHByb3AsIHRydWUpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuYmVmb3JlQXR0ckNoYW5nZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlQXR0ckNoYW5nZS5jYWxsKHRoaXMsIHByb3AsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLCBwcm9wLCB2YWx1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5hZnRlckF0dHJDaGFuZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLmFmdGVyQXR0ckNoYW5nZS5jYWxsKHRoaXMsIHByb3AsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkaW5pdEF0dHJEb25lKCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uSW5pdCkpIHtcbiAgICAgICAgICAgIHRoaXMub25Jbml0LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkc2V0QXR0cihwcm9wLCB2YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBwcm9wLCB0cnVlKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmJlZm9yZUF0dHJDaGFuZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLmJlZm9yZUF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5wcm94eSwgcHJvcCwgdmFsdWUsIHRydWUpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuYWZ0ZXJBdHRyQ2hhbmdlKSkge1xuICAgICAgICAgICAgdGhpcy5hZnRlckF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGxpc3RlbihlLCBmbikge1xuICAgICAgICB2YXIgbWVzc2VuZ2VyID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywgZSwgdHJ1ZSk7XG4gICAgICAgIGlmIChpc01lc3NlbmdlcihtZXNzZW5nZXIpKSB7XG4gICAgICAgICAgICBtZXNzZW5nZXIub24oZm4pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlICsgJyBpcyBub3QgYSBldmVudCcpO1xuICAgIH1cblxuICAgICRnZXRUZW1wbGF0ZShzeW5jKSB7XG4gICAgICAgIHZhciBtZXRhID0gdGhpcy4kZ2V0TWV0YSgpO1xuXG4gICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0YS50ZW1wbGF0ZSB8fCAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKG1ldGEudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShtZXRhLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzU3RyaW5nKG1ldGEudGVtcGxhdGVVcmwpKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0b3Iuc2VydmljZSgnJHRlbXBsYXRlQ2FjaGUnKS5nZXRUcGxCeVVybChtZXRhLnRlbXBsYXRlVXJsKS50aGVuKGZ1bmN0aW9uICh0cGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cGwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICR1c2luZyhuYW1lKSB7XG4gICAgICAgIHZhciBtZXRhID0gdGhpcy4kZ2V0TWV0YSgpLFxuICAgICAgICAgICAgdXNpbmcgPSBtZXRhLnVzaW5nLFxuICAgICAgICAgICAgc2VnbWVudHMgPSBuYW1lLnNwbGl0KCcuJyksXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBzZWdtZW50cy5wb3AoKSxcbiAgICAgICAgICAgIHNwYWNlTmFtZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcblxuICAgICAgICBpZiAoc3BhY2VOYW1lICYmIHV0aWxzLmlzT2JqZWN0KHVzaW5nKSkge1xuICAgICAgICAgICAgdXRpbHMuc29tZSh1c2luZywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBzcGFjZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IHZhbHVlICsgJy4nICsgY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgICRtYWtlQ29tcGlsZU9wdGlvbnMoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldEVtYmVkVHBsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJCRvd25lclZOb2RlLmdldElubmVyVHBsKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbnNDb21wb25lbnQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluamVjdG9yLmNvbnRhaW5zQ29tcG9uZW50KHNlbGYuJHVzaW5nKG5hbWUpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVDb21wb25lbnQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluamVjdG9yLmNyZWF0ZUNvbXBvbmVudChzZWxmLiR1c2luZyhuYW1lKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbnNEaXJlY3RpdmU6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluamVjdG9yLmNvbnRhaW5zRGlyZWN0aXZlKHNlbGYuJHVzaW5nKG5hbWUpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVEaXJlY3RpdmU6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluamVjdG9yLmNyZWF0ZURpcmVjdGl2ZShzZWxmLiR1c2luZyhuYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgJGhhc1ZOb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmlzQXJyYXkodGhpcy4kJHZub2Rlcyk7XG4gICAgfVxuXG4gICAgJGZyb21WTm9kZXMoKSB7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICB0aGlzLiQkdm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh2bm9kZS5nZXREb21FbGVtZW50KCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuXG4gICAgJGNsZWFyVk5vZGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuJGhhc1ZOb2RlcygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kJHZub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kJHZub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgJHJlbmRlcihzeW5jKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgZnJhZ21lbnQgPSBudWxsO1xuXG4gICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kaGFzVk5vZGVzKCkpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IHRoaXMuJGZyb21WTm9kZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gY29tcGlsZSh0aGlzLiRnZXRUZW1wbGF0ZShzeW5jKSwgdGhpcy4kbWFrZUNvbXBpbGVPcHRpb25zKCkpKHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLiRoYXNWTm9kZXMoKSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc2VsZi4kZnJvbVZOb2RlcygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuJGdldFRlbXBsYXRlKCkudGhlbihmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGNvbXBpbGUoaHRtbCwgc2VsZi4kbWFrZUNvbXBpbGVPcHRpb25zKCkpKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJHJlZnJlc2goc3luYykge1xuICAgICAgICB0aGlzLiRjbGVhclZOb2RlcygpO1xuICAgICAgICByZXR1cm4gdGhpcy4kcmVuZGVyKHN5bmMpO1xuICAgIH1cblxuICAgICRtb3VudChzZWxlY3Rvck9yRWxlbWVudCwgc3luYykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlVXRpbHMuY2xlYXJDaGlsZE5vZGVzKGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJHJlbmRlcihzeW5jKSk7XG4gICAgICAgICAgICBzZWxmLiRhZnRlclZpZXdNb3VudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kcmVuZGVyKHN5bmMpLnRoZW4oZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlKTtcbiAgICAgICAgICAgICAgICBzZWxmLiRhZnRlclZpZXdNb3VudCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkYWZ0ZXJWaWV3TW91bnQoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuYWZ0ZXJWaWV3TW91bnQpKSB7XG4gICAgICAgICAgICB0aGlzLmFmdGVyVmlld01vdW50LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkdW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJCRvd25lclZOb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJCRvd25lclZOb2RlLiRyZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuJCRvd25lclZOb2RlLnJlbW92ZURvbUVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLiRoYXNWTm9kZXMoKSkge1xuICAgICAgICAgICAgdGhpcy4kJHZub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgICAgIHZub2RlLnJlbW92ZURvbUVsZW1lbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJCRwYXJlbnRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kJHBhcmVudENvbXBvbmVudC4kcmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLiQkcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRkZXRlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLiQkZGV0ZWN0VGltZW91dCB8fCAhdGhpcy4kJHZub2Rlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLiQkZGV0ZWN0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi4kJGRldGVjdFRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi4kJHZub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgICAgIHZub2RlLmRldGVjdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICR2YWxpZGF0ZSgpIHtcbiAgICAgICAgdmFyIG9iaiwgcHJvcCwgYWN0aW9uLCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgb2JqID0gdGhpcztcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgb2JqID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgcHJvcCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIGFjdGlvbiA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXJndW1lbnRzIGVycm9yJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQkcHJvcENoYW5nZWQub24ob2JqLCBwcm9wLCBhY3Rpb24sIHtcbiAgICAgICAgICAgIGJlZm9yZUNoYW5nZWQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuJCRwcm9wQ2hhbmdlZC5vZmYob2JqLCBwcm9wLCBhY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgICR3YXRjaCgpIHtcbiAgICAgICAgdmFyIG9iaiwgcHJvcCwgYWN0aW9uLCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgb2JqID0gdGhpcztcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgb2JqID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgcHJvcCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIGFjdGlvbiA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXJndW1lbnRzIGVycm9yJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQkcHJvcENoYW5nZWQub24ob2JqLCBwcm9wLCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLiQkcHJvcENoYW5nZWQub2ZmKG9iaiwgcHJvcCwgYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kJGNoaWxkQ29tcG9uZW50cy5pbmRleE9mKGNoaWxkKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBjaGlsZC4kJHBhcmVudENvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkZGlzcG9zZShpc0Zyb21WTm9kZSkge1xuICAgICAgICAvLyByZW1vdmUgdmlydHVhbCBub2RlIGZpcnN0IGluIGNhc2UgaXQgdHJpZ2dlcnMgcGFyZW50IGNvbXBvbmVudCBkZXN0cm95XG4gICAgICAgIHRoaXMuJHVubW91bnQoKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGVzdHJveSkpIHtcbiAgICAgICAgICAgIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kJGRldGVjdFRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLiQkZGV0ZWN0VGltZW91dCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRjbGVhclZOb2RlcygpO1xuICAgICAgICB0aGlzLiQkcHJvcENoYW5nZWQuZGVzdHJveSgpO1xuXG4gICAgICAgIGlmIChpc0Zyb21WTm9kZSkge1xuICAgICAgICAgICAgdGhpcy4kJG93bmVyVk5vZGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuJCRjaGlsZERpcmVjdGl2ZXMgPSBudWxsO1xuICAgIH1cblxuICAgICRkZXN0cm95KCkge1xuICAgICAgICB0aGlzLiRkaXNwb3NlKCk7XG5cbiAgICAgICAgLy8gZGVzdHJveSB2aXJ0dWFsIG5vZGUgaW4gdGhlIGVuZCBiZWNhdXNlIGl0IG1heSBiaW5kcyBsb2dpYyBhYm91dCBkZXN0cm95XG4gICAgICAgIGlmICh0aGlzLiQkb3duZXJWTm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkb3duZXJWTm9kZS5kaXNwb3NlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy4kJG93bmVyVk5vZGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGdldFBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRwYXJlbnRDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgJGNyZWF0ZUNvbXBvbmVudChjb25zdHJ1Y3Rvcikge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGNvbnN0cnVjdG9yKTtcbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbXBvbmVudC4kJHBhcmVudENvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgJGV2YWwoZXhwKSB7XG4gICAgICAgIHJldHVybiBjb21wdXRlKGV4cCwgdGhpcyk7XG4gICAgfVxuXG4gICAgJGluaGVyaXQocGFyZW50Q21wKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc2VsZiwgdXRpbHMub2JqZWN0KHBhcmVudENtcCkpO1xuXG4gICAgICAgIC8vIHRvZG8gLSByZXNvbHZlIGlzc3VlIGNhbGxpbmcgcGFyZW50IGNvbXBvbmVudCdzIGxpZmVjeWNsZSBob29rc1xuICAgICAgICB1dGlscy5mb3JFYWNoKHNlbGYuJGhvb2tzKCksIGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5oYXNPd25Qcm9wZXJ0eShob29rKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2VsZltob29rXSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICRwcm94eShkYXRhKSB7XG4gICAgICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm94eShkYXRhLCBuZXcgU2V0UHJvcGVydHlIYW5kbGVyKHRydWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCAqIGFzIGVsZVV0aWxzIGZyb20gJy4uL3V0aWxpdHkvZWxlLXV0aWxzJztcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgRGlyZWN0aXZlLmNvbnN0cnVjdC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIHRoaXMuJCRiaW5kaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJHZub2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGRpc3Bvc2VycyA9IFtdO1xuICAgICAgICB0aGlzLm91dHB1dCA9IGZhbHNlO1xuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcbiAgICB9XG5cbiAgICAkaG9va3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxuICAgICAgICAgICAgb25Db21waWxlOiAnJyxcbiAgICAgICAgICAgIG9uSW5zZXJ0OiAnJyxcbiAgICAgICAgICAgIG9uRGV0ZWN0OiAnJyxcbiAgICAgICAgICAgIG9uVXBkYXRlOiAnJyxcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXRNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgJGJpbmRWTm9kZSh2bm9kZSkge1xuICAgICAgICB0aGlzLiQkdm5vZGUgPSB2bm9kZTtcbiAgICB9XG5cbiAgICAkc2V0QmluZGluZyhiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMuJCRiaW5kaW5nID0gYmluZGluZztcbiAgICB9XG5cbiAgICAkY29tcGlsZShvcHRpb25zKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25Db21waWxlKSkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBpbGUuY2FsbCh0aGlzLCB0aGlzLiQkdm5vZGUsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGluc2VydChlbGUsIGNvbSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkluc2VydCkpIHtcbiAgICAgICAgICAgIHRoaXMub25JbnNlcnQuY2FsbCh0aGlzLCBlbGUsIHRoaXMuJCRiaW5kaW5nLCBjb20pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkxvYWQpKSB7XG4gICAgICAgICAgICB0aGlzLiQkZGlzcG9zZXJzLnB1c2goZWxlVXRpbHMucXVlcnlFbGVtZW50TG9hZGVkKGVsZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYub25Mb2FkLmNhbGwoc2VsZiwgZWxlLCBzZWxmLiQkYmluZGluZywgY29tKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25VbmxvYWQpKSB7XG4gICAgICAgICAgICB0aGlzLiQkZGlzcG9zZXJzLnB1c2goZWxlVXRpbHMucXVlcnlFbGVtZW50VW5sb2FkZWQoZWxlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vblVubG9hZC5jYWxsKHNlbGYsIGVsZSwgc2VsZi4kJGJpbmRpbmcsIGNvbSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkZGV0ZWN0KGVsZSwgY29tKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXRlY3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRldGVjdC5jYWxsKHRoaXMsIGVsZSwgdGhpcy4kJGJpbmRpbmcsIGNvbSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kJGJpbmRpbmcuZGV0ZWN0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwZGF0ZShlbGUsIGNvbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkdXBkYXRlKGVsZSwgY29tKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25VcGRhdGUpKSB7XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlLmNhbGwodGhpcywgZWxlLCB0aGlzLiQkYmluZGluZywgY29tKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRkaXNwb3NlKGlzRnJvbVZOb2RlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGVzdHJveSkpIHtcbiAgICAgICAgICAgIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNGcm9tVk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuJCR2bm9kZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQkZGlzcG9zZXJzLmZvckVhY2goZnVuY3Rpb24gKGRpc3Bvc2VyKSB7XG4gICAgICAgICAgICBkaXNwb3Nlci5jYWxsKHNlbGYpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiQkYmluZGluZyA9IG51bGw7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJGRpc3Bvc2UoKTtcblxuICAgICAgICBpZiAodGhpcy4kJHZub2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJCR2bm9kZS5kaXNwb3NlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy4kJHZub2RlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBGaWx0ZXIuY29uc3RydWN0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XG4gICAgfVxuXG4gICAgJGhvb2tzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb25Jbml0OiAnJyxcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXRNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgJGV4ZWN1dGUoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25FeGVjdXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25FeGVjdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eS9tZXNzYWdlJztcbmltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IERpcmVjdGl2ZSB9ZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4vc2VydmljZSc7XG5cbmZ1bmN0aW9uIG5hbWVzcGFjZShucykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudChuYW1lLCBkZWYpO1xuICAgICAgICB9LFxuICAgICAgICBkaXJlY3RpdmU6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRlZikpIHtcbiAgICAgICAgICAgICAgICBkZWYgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5zZXJ0OiBkZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZTogZGVmXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZShuYW1lLCBkZWYpO1xuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlOiBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gICAgICAgICAgICBkZWYubmFtZXNwYWNlID0gbnM7XG4gICAgICAgICAgICByZXR1cm4gc2VydmljZShuYW1lLCBkZWYpO1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRlZikpIHtcbiAgICAgICAgICAgICAgICBkZWYgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXhlY3V0ZTogZGVmXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihuYW1lLCBkZWYpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50KG5hbWUsIGRlZikge1xuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5jb21wb25lbnQsXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihDb21wb25lbnQpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGl2ZShuYW1lLCBkZWYpIHtcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XG4gICAgICAgIGRlZiA9IHtcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICBvbkluc2VydDogZGVmLFxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiBkZWZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuZGlyZWN0aXZlLFxuICAgICAgICBzdXBlckNsYXNzOiBtYWtlQ29uc3RydWN0b3IoRGlyZWN0aXZlKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIobmFtZSwgZGVmKSB7XG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xuICAgICAgICBkZWYgPSB7XG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgb25FeGVjdXRlOiBkZWZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuZmlsdGVyLFxuICAgICAgICBzdXBlckNsYXNzOiBtYWtlQ29uc3RydWN0b3IoRmlsdGVyKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXJ2aWNlKG5hbWUsIGRlZikge1xuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5zZXJ2aWNlLFxuICAgICAgICBzdXBlckNsYXNzOiBtYWtlQ29uc3RydWN0b3IoU2VydmljZSlcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaXNDb21wb25lbnQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIENvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RpdmUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIERpcmVjdGl2ZTtcbn1cblxuZnVuY3Rpb24gaXNGaWx0ZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEZpbHRlcjtcbn1cblxuZnVuY3Rpb24gaXNTZXJ2aWNlKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBTZXJ2aWNlO1xufVxuXG5mdW5jdGlvbiBib290c3RyYXAoc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudCwgdHBsO1xuXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdHBsID0gZWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICBuZXcgQ29tcG9uZW50KHtcbiAgICAgICAgdGVtcGxhdGU6IHRwbFxuICAgIH0pLiRtb3VudChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gbWFrZUNvbnN0cnVjdG9yKGNscykge1xuICAgIGZ1bmN0aW9uIGYoKSB7XG4gICAgICAgIGNscy5jb25zdHJ1Y3QuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBmLnByb3RvdHlwZSA9IGNscy5wcm90b3R5cGU7XG4gICAgcmV0dXJuIGY7XG59XG5cbmV4cG9ydCB7IG5hbWVzcGFjZSwgaW5qZWN0b3IsIGNvbXBvbmVudCwgZGlyZWN0aXZlLCBmaWx0ZXIsIHNlcnZpY2UsIGlzQ29tcG9uZW50LCBpc0RpcmVjdGl2ZSwgaXNGaWx0ZXIsIGlzU2VydmljZSwgYm9vdHN0cmFwIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5L21lc3NhZ2UnO1xuXG52YXIgdHlwZUNvbnN0ID0ge1xuICAgIGZpbHRlcjogJ2ZpbHRlcicsXG4gICAgc2VydmljZTogJ3NlcnZpY2UnLFxuICAgIGNvbXBvbmVudDogJ2NvbXBvbmVudCcsXG4gICAgZGlyZWN0aXZlOiAnZGlyZWN0aXZlJ1xufTtcblxudmFyIG5hbWVQYXR0ZXJuID0gL15bYS16X1xcJF1bXFx3XFwkLV0qL2k7XG5cbmNsYXNzIEluamVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB7fTtcbiAgICAgICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzID0ge307XG4gICAgICAgIHRoaXMuaW5zQ29udGFpbmVyID0ge307XG4gICAgfVxuXG4gICAgZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyW2NvbnRyYWN0VHlwZV07XG4gICAgfVxuXG4gICAgZ2V0SW5zdGFuY2VzKGNvbnRyYWN0VHlwZSkge1xuICAgICAgICBpZiAoIXRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV0pIHtcbiAgICAgICAgICAgIHRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnNDb250YWluZXJbY29udHJhY3RUeXBlXTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcihjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAoc2VsZWN0b3IuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGNoYXJhY3RlciBcIi5cIicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1hcHBpbmcgPSB0aGlzLmdldE1hcHBpbmcoY29udHJhY3RUeXBlKTtcblxuICAgICAgICBpZiAobWFwcGluZ1tzZWxlY3Rvcl0gPT0gbnVsbCkge1xuICAgICAgICAgICAgbWFwcGluZ1tzZWxlY3Rvcl0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gbWFwcGluZ1tzZWxlY3Rvcl0uZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YS5uYW1lc3BhY2UgPT09IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc2VsZWN0b3IgKyAnIGlzIGV4aXN0IHVuZGVyIG5hbWVzcGFjZSAnICsgbWF0Y2hlc1swXS5wcm90b3R5cGUuJCRtZXRhLm5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXBwaW5nW3NlbGVjdG9yXS5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNvbXBvbmVudChzZWxlY3RvciwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0eXBlQ29uc3QuY29tcG9uZW50LCBzZWxlY3RvciwgY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHR5cGVDb25zdC5kaXJlY3RpdmUsIHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgY29udGFpbnMoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgaWdub3JlQ2FzZSkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3JzLCBtYXBwaW5nID0gdGhpcy5nZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSk7XG4gICAgICAgIHZhciBzZWdtZW50cyA9IHNlbGVjdG9yLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAnJztcblxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWdtZW50cy5wb3AoKTtcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShtYXBwaW5nLCBzZWxlY3RvciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBtYXBwaW5nW3NlbGVjdG9yXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UobWV0YS5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnRhaW5zQ29tcG9uZW50KHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5zKHR5cGVDb25zdC5jb21wb25lbnQsIHNlbGVjdG9yLCB0cnVlKTtcbiAgICB9XG5cbiAgICBjb250YWluc0RpcmVjdGl2ZShzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWlucyh0eXBlQ29uc3QuZGlyZWN0aXZlLCBzZWxlY3RvciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZ2V0KGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGlnbm9yZUNhc2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xuICAgICAgICB2YXIgc2VnbWVudHMgPSBzZWxlY3Rvci5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbmFtZXNwYWNlID0gJyc7XG5cbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yID0gc2VnbWVudHMucG9wKCk7XG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBzZWdtZW50cy5qb2luKCcuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkobWFwcGluZywgc2VsZWN0b3IsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gbWFwcGluZ1tzZWxlY3Rvcl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb250cmFjdFR5cGUgKyAnICcgKyBzZWxlY3RvciArICcgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgY29uc3RydWN0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbWV0YSA9IGl0ZW0ucHJvdG90eXBlLiQkbWV0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YS5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKG1ldGEubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc2VsZWN0b3IgKyAnIGlzIG5vdCBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZhciBuYW1lc3BhY2VzID0gY29uc3RydWN0b3JzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hbWVzcGFjZSAnICsgbmFtZXNwYWNlcy5qb2luKCd8JykgKyAnIGFsbCBoYXZlICcgKyBzZWxlY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3JzWzBdO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmNvbXBvbmVudCwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGdldERpcmVjdGl2ZShzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGdldEZpbHRlcihzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmZpbHRlciwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGdldFNlcnZpY2Uoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5zZXJ2aWNlLCBzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY3JlYXRlKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5nZXQoY29udHJhY3RUeXBlLCBzZWxlY3RvciksIGluc3RhbmNlO1xuXG4gICAgICAgIHN3aXRjaCAoY29udHJhY3RUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5jb21wb25lbnQ6XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudChjb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5kaXJlY3RpdmU6XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZURpcmVjdGl2ZShjb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5maWx0ZXI6XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUZpbHRlcihjb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5zZXJ2aWNlOlxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVTZXJ2aWNlKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3IoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wb25lbnQoY29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldENvbXBvbmVudChjb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZURpcmVjdGl2ZShjb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0RGlyZWN0aXZlKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlRmlsdGVyKGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRGaWx0ZXIoY29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVTZXJ2aWNlKGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSwgc2VydmljZXMgPSB0aGlzLmdldEluc3RhbmNlcyh0eXBlQ29uc3Quc2VydmljZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldFNlcnZpY2UoY29uc3RydWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhLm5vblNoYXJlZCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHNlcnZpY2VzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2YgY29uc3RydWN0b3I7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHJlc3VsdFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICBzZXJ2aWNlcy5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBzZXJ2aWNlKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNlcnZpY2Uoc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGdldFdhaXRpbmdUb0V4dGVuZHMoY29udHJhY3RUeXBlKSB7XG4gICAgICAgIGlmICghdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0pIHtcbiAgICAgICAgICAgIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdO1xuICAgIH1cblxuICAgIHNldFdhaXRpbmdUb0V4dGVuZHMoY29udHJhY3RUeXBlLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNoZWNrU2VsZWN0b3Ioc2VsZWN0b3IsIGNvbnRyYWN0VHlwZSkge1xuICAgICAgICBpZiAobmFtZVBhdHRlcm4udGVzdChzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHZhciBjb25zdHJ1Y3Rvck5hbWUgPSAnJztcbiAgICAgICAgICAgIHZhciBzZWdtZW50cyA9IHNlbGVjdG9yLnNwbGl0KCctJyk7XG5cbiAgICAgICAgICAgIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gdXRpbHMudXBwZXJjYXNlKHNlZ21lbnRbMF0pICsgc2VnbWVudC5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc3dpdGNoIChjb250cmFjdFR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5jb21wb25lbnQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSAnQ29tcG9uZW50JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuZGlyZWN0aXZlOlxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ0RpcmVjdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmZpbHRlcjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdGaWx0ZXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5zZXJ2aWNlOlxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ1NlcnZpY2UnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzZWxlY3RvciArICdpcyBub3QgYSB2YWxpZCBuYW1lJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidWlsZENvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lID0gdGhpcy5jaGVja1NlbGVjdG9yKHNlbGVjdG9yLCBvcHRpb25zLmNvbnRyYWN0VHlwZSksXG4gICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzID0gc2VsZi5nZXRXYWl0aW5nVG9FeHRlbmRzKG9wdGlvbnMuY29udHJhY3RUeXBlKSxcbiAgICAgICAgICAgIG9uQ29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yLnN1cGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihtZXRhLmNvbnN0cnVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0YS5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzZW5nZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgRnVuY3Rpb24oJ29uQ29uc3RydWN0JywgJ1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbiAnICsgY29uc3RydWN0b3JOYW1lICsgJygpe29uQ29uc3RydWN0LmNhbGwodGhpcyk7fTsnKShvbkNvbnN0cnVjdCk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ob3B0aW9ucy5zdXBlckNsYXNzKSkge1xuICAgICAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3Rvciwgb3B0aW9ucy5zdXBlckNsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGEuc2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuICAgICAgICAvLyBhcHBseSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhtZXRhLmV4dGVuZHMpKSB7XG4gICAgICAgICAgICBpZiAoaW5qZWN0b3IuY29udGFpbnMob3B0aW9ucy5jb250cmFjdFR5cGUsIG1ldGEuZXh0ZW5kcykpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VwZXJPbmUgPSBpbmplY3Rvci5nZXQob3B0aW9ucy5jb250cmFjdFR5cGUsIG1ldGEuZXh0ZW5kcyk7XG4gICAgICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yLCBzdXBlck9uZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBzdXBlck5hbWU6IG1ldGEuZXh0ZW5kcyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChzdXBlck9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yLCBzdXBlck9uZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlbWFpbkNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBjb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBleHRlbmRNZXRhKG1ldGEsIHN1cGVyT25lKSB7XG4gICAgICAgICAgICBpZiAoc3VwZXJPbmUucHJvdG90eXBlLiQkbWV0YSAmJiBzdXBlck9uZS5wcm90b3R5cGUuJCRtZXRhLnByb3RlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihvcHRpb25zLmNvbnRyYWN0VHlwZSArICc6ICcgKyBtZXRhLmV4dGVuZHMgKyAnIGlzIHByb3RlY3RlZCwgaXQgaXMgbm90IGFsbG93ZWQgdG8gZXh0ZW5kIScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3VwZXJNZXRhID0gc3VwZXJPbmUucHJvdG90eXBlLiQkbWV0YTtcbiAgICAgICAgICAgIHZhciBjb3B5ID0gdXRpbHMuY29weSh0cnVlLCBzdXBlck1ldGEsIGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhKG9iaiA9PT0gc3VwZXJNZXRhICYmIChrZXkgPT09ICdjb25zdHJ1Y3QnIHx8IGtleSA9PT0gJ21ldGhvZHMnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0cnVlLCBjb3B5LCBtZXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbWFpbkNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpIHtcbiAgICAgICAgICAgIGlmIChzdXBlck9uZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG1ldGEubWV0aG9kcykpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5leHRlbmQoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRhLm1ldGhvZHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnJlZ2lzdGVyQ29uc3RydWN0b3Iob3B0aW9ucy5jb250cmFjdFR5cGUsIHNlbGVjdG9yLCBjb25zdHJ1Y3RvciwgbWV0YSk7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIGFueSBjb21wb25lbnQgZXh0ZW5kcyBjdXJyZW50IGNvbXBvbmVudFxuICAgICAgICAgICAgdmFyIHdhaXRpbmdUb0V4dGVuZHMyID0gW10sIGZ1bGxTZWxlY3RvciA9IG1ldGEubmFtZXNwYWNlICsgJy4nICsgc2VsZWN0b3I7XG4gICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zdXBlck5hbWUgPT09IGZ1bGxTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNhbGxiYWNrLmNhbGwobnVsbCwgY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kczIucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYuc2V0V2FpdGluZ1RvRXh0ZW5kcyhvcHRpb25zLmNvbnRyYWN0VHlwZSwgd2FpdGluZ1RvRXh0ZW5kczIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ29uc3RydWN0b3IoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IsIG1ldGEpIHtcbiAgICAgICAgdmFyIHN1cGVyTWV0YSA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGE7XG5cbiAgICAgICAgaWYgKHN1cGVyTWV0YSAmJiBzdXBlck1ldGEucHJvdGVjdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3RUeXBlICsgJzogJyArIG1ldGEuZXh0ZW5kcyArICcgaXMgcHJvdGVjdGVkLCBpdCBpcyBub3QgYWxsb3dlZCB0byBleHRlbmQhJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodHJ1ZSwgc3VwZXJNZXRhLCBmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiAhKG9iaiA9PT0gc3VwZXJNZXRhICYmIChrZXkgPT09ICdjb25zdHJ1Y3QnIHx8IGtleSA9PT0gJ21ldGhvZHMnKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1ldGEgPSB1dGlscy5tZXJnZSh0cnVlLCBjb3B5LCBtZXRhKTtcblxuICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhID0gbWV0YTtcblxuICAgICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgaWYgaXQgaXMgZ2xvYmFsXG4gICAgICAgIGlmICghbWV0YS5sb2NhbCkge1xuICAgICAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXIoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5qZWN0U2VydmljZXMoaW5zdGFuY2UpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBtZXRhID0gaW5zdGFuY2UuJGdldE1ldGEoKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QobWV0YS5pbmplY3QpKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG1ldGEuaW5qZWN0LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnN0YW5jZSwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcml2YXRlS2V5ID0gJyQkJyArIGtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlW3ByaXZhdGVLZXldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZVtwcml2YXRlS2V5XSA9IHNlbGYuY3JlYXRlU2VydmljZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZVtwcml2YXRlS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBpbmplY3RvciA9IG5ldyBJbmplY3RvcigpO1xuXG5leHBvcnQgeyB0eXBlQ29uc3QsIEluamVjdG9yLCBpbmplY3RvciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuaW1wb3J0IHtpbmplY3Rvcn0gZnJvbSAnLi9pbmplY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgU2VydmljZS5jb25zdHJ1Y3QuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29uc3RydWN0KCkge1xuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcbiAgICB9XG5cbiAgICAkaG9va3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxuICAgICAgICAgICAgb25EZXN0cm95OiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgICRnZXRNZXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGEgfHwge307XG4gICAgfVxuXG4gICAgJHNldE1ldGEodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kJG1ldGEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9heGlvc19fOyJdLCJzb3VyY2VSb290IjoiIn0=