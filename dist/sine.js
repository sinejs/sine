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
          binding.scope.$setAttr(binding.text, e.target.value);
        });
      } else {
        if (_utility__WEBPACK_IMPORTED_MODULE_2__["isMessenger"](com.change)) {
          com.change.on(function (e, args) {
            binding.scope.$setAttr(binding.text, args.newvalue);
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

AstNode.prototype.compile = function (scope, options, internals) {
  return this.childNodes.map(function (child) {
    return child.compile(scope, options || {}, internals);
  });
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ProgramNode, AstNode);

function ProgramNode() {
  ProgramNode["super"].call(this, AST.Program);
}

ProgramNode.prototype.compile = function (scope, options) {
  return this.childNodes[0].compile(scope, options || {});
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ExpressionStatementNode, AstNode);

function ExpressionStatementNode() {
  ExpressionStatementNode["super"].call(this, AST.ExpressionStatement);
}

ExpressionStatementNode.prototype.compile = function (scope, options, internals) {
  return this.childNodes[0].compile(scope, options || {}, internals);
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

MemberExpressionNode.prototype.compile = function (scope, options, internals) {
  var obj = this.object.compile(scope, options, internals);

  if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"](obj)) {
    return obj[this.property.compile(obj, options, internals)];
  }

  return this.property.compile(obj, options, internals);
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](IdentifierNode, AstNode);

function IdentifierNode(name) {
  IdentifierNode["super"].call(this, AST.Identifier);
  this.name = name;
}

IdentifierNode.prototype.compile = function (scope, options, internals) {
  if (internals) {
    if (internals.assignmentLeft || internals.callee) {
      return {
        obj: scope,
        prop: this.name
      };
    } else if (internals.propertyKey) {
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
    value: function onInsert(ele, binding) {
      var self = this;
      requestAnimationFrame(function () {
        self.height = ele.clientHeight;
        self.display = ele.style.display;
        ele.style.overflow = 'hidden';
        ele.style.transition = 'height ' + self.duration + 'ms';

        if (binding.compute()) {
          ele.style.display = 'none';
          ele.style.height = 0 + 'px';
        } else {
          ele.style.height = self.height + 'px';
        }
      });
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(ele, binding) {
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
/* empty/unused harmony star reexport */

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
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
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
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onInsert)) {
        this.onInsert.call(this, ele, this.$$binding, com);
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
      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
        this.onDestroy.call(this);
      }

      if (isFromVNode) {
        this.$$vnode = null;
      }

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
      this.output = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2NkYXRhc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY3VzdG9tLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9kb2N0eXBlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS90ZXh0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RlY29yYXRvci9zZXJ2aWNlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2JpbmQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvaGlkZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9pZi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9tb2RlbC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc2hvdy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9jaGVja2VkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3JlYWRvbmx5LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3N0YXRlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC13aGVuLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9odG1sLWxleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2h0bWwtcGFyc2VyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2xleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL3BhcnNlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3NlcnZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL3RlbXBsYXRlLWNhY2hlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdWkvZGlyZWN0aXZlL2NvbGxhcHNlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdWkvZGlyZWN0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L2VsZS11dGlscy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L3N1YmplY3QuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L3V0aWxzLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvZmlsdGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvaW5qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc2luZS9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiYXhpb3NcIixcImNvbW1vbmpzMlwiOlwiYXhpb3NcIixcImFtZFwiOlwiYXhpb3NcIixcInJvb3RcIjpcImF4aW9zXCJ9Il0sIm5hbWVzIjpbImV2ZW50VGV4dCIsImRvbUV2ZW50cyIsInNwbGl0IiwiQXR0ck5vZGUiLCJuYW1lIiwidmFsdWUiLCJWTm9kZVR5cGUiLCJhdHRyaWJ1dGUiLCJxdW90ZSIsIm9yZ05vZGVOYW1lIiwiaXNFdmVudCIsImlzQmluZGluZyIsImlzRG9tRXZlbnQiLCJpc0RpcmVjdGl2ZSIsImRpcmVjdGl2ZSIsIm93bmVyVkVsZW1lbnQiLCJvd25lckVsZW1lbnQiLCJvd25lckNvbXBvbmVudCIsImJpbmRpbmciLCJCaW5kaW5nIiwia2V5Iiwibm9kZVZhbHVlIiwiY29tcGlsZSIsIm9wdGlvbnMiLCJub2RlTmFtZSIsInN0YXJ0c1dpdGgiLCJzdWJzdHIiLCJ1dGlscyIsInNldE91dHB1dCIsImJpbmQiLCJjb250YWluc0RpcmVjdGl2ZSIsImNyZWF0ZURpcmVjdGl2ZSIsIiRiaW5kVk5vZGUiLCJvdXRwdXQiLCJFcnJvciIsInNjb3BlIiwic2VsZiIsInNldFNjb3BlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb21wdXRlIiwibG9jYWxzIiwiJGV2ZW50IiwiJGFyZ3MiLCIkZWxlbWVudCIsIiRsaXN0ZW4iLCJhcmdzIiwiJCRjaGlsZERpcmVjdGl2ZXMiLCJwdXNoIiwiJHNldEJpbmRpbmciLCIkaGFzQXR0ciIsIiRpbml0QXR0ciIsInNldEF0dHJpYnV0ZSIsIndhdGNoUHJvcHMiLCJkZXRlY3QiLCJoYXNDaGFuZ2UiLCJ1cGRhdGUiLCIkZGV0ZWN0IiwiJHNldEF0dHIiLCIkaW5zZXJ0IiwiaXNGcm9tRGlyZWN0aXZlIiwiZGVzdHJveSIsIiRkZXN0cm95IiwiJGRpc3Bvc2UiLCJkaXNwb3NlIiwiVk5vZGUiLCJlbGVtZW50IiwidGV4dCIsImNkYXRhU2VjdGlvbiIsImVudGl0eVJlZmVyZW5jZSIsImVudGl0eSIsInByb2Nlc3NpbmdJbnN0cnVjdGlvbiIsImNvbW1lbnQiLCJkb2N1bWVudCIsImRvY3VtZW50VHlwZSIsImRvY3VtZW50RnJhZ21lbnQiLCJub3RhdGlvbiIsImN1c3RvbSIsInR5cGUiLCJub2RlVHlwZSIsImNoaWxkTm9kZXMiLCJwYXJlbnROb2RlIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwib3duZXJWRG9jdW1lbnQiLCJjaGlsZCIsImxlbmd0aCIsImZvckVhY2giLCJpbmRleCIsIiRidWlsZFNpYmxpbmciLCJyZW1vdmVDaGlsZCIsIiRyZW1vdmUiLCIkY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwiY29tcGlsZU9wdGlvbnMiLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwiaW5kZXhPZiIsInNwbGljZSIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwicmVzdWx0IiwibWFwIiwiZGlyZWN0aXZlcyIsIml0ZW0iLCJjb25jYXQiLCJsaW5rIiwiYWZ0ZXJMaW5rIiwiRXhwTm9kZSIsIm9sZFZhbHVlIiwib2JqUHJvcHMiLCJQcm94eSIsIkdldFByb3BlcnR5SGFuZGxlciIsInByb3BzIiwiaXNFeHAiLCJzZWdtZW50cyIsInJpZ2h0U3RyIiwiY2hhbmdlIiwiTWVzc2VuZ2VyIiwiZXhwIiwibGVmdFN0ciIsInBhdHRlcm4iLCJsYXN0SW5kZXgiLCJtYXRjaCIsImV4ZWMiLCJzdWJzdHJpbmciLCJzZWdtZW50IiwiYWN0aW9uIiwiZ2V0UHJvcHMiLCJvYmpQcm9wIiwiJHdhdGNoIiwib2JqIiwicHJvcCIsImZpcmUiLCJvbiIsInNvbWUiLCJDRGF0YVNlY3Rpb25Ob2RlIiwiQ29tbWVudE5vZGUiLCJjcmVhdGVDb21tZW50IiwiQ3VzdG9tTm9kZSIsImxpbmtlciIsImNhbGwiLCJvbkluc2VydCIsIm9uRGV0ZWN0Iiwib25IYXNDaGFuZ2UiLCJvblVwZGF0ZSIsIm9uRGVzdHJveSIsIkRvY3VtZW50VHlwZU5vZGUiLCJEb2N1bWVudE5vZGUiLCJFbGVtZW50Tm9kZSIsImF0dHJpYnV0ZXMiLCJjb21wb25lbnQiLCJzZWxmQ2xvc2VkIiwiaXNDb21wb25lbnQiLCJhdHRyIiwidGFyZ2V0IiwibWF0Y2hlcyIsImZpbHRlciIsImJlbG9uZ1RvIiwic2V0VmFsdWUiLCJhdHRyVHBsIiwiY2hpbGRUcGwiLCJnZXRPdXRlclRwbCIsInRwbCIsInBhcnNlIiwidm5vZGUiLCJjbGVhckNoaWxkTm9kZXMiLCIkJG1ldGEiLCJzZWxlY3RvciIsImNvbnRhaW5zQ29tcG9uZW50IiwiY3JlYXRlRWxlbWVudCIsIiRjcmVhdGVDb21wb25lbnQiLCIkaW5pdEF0dHJEb25lIiwiJG1vdW50IiwiaXNGcm9tQ29tcG9uZW50IiwicmVtb3ZlRG9tRWxlbWVudCIsImVsZVV0aWxzIiwiRG9jdW1lbnRGcmFnbWVudE5vZGUiLCJUZXh0Tm9kZSIsInJlbmRlciIsImNyZWF0ZVRleHROb2RlIiwibWV0YSIsImluamVjdG9yIiwicmVnaXN0ZXJDb25zdHJ1Y3RvciIsInR5cGVDb25zdCIsInNlcnZpY2UiLCJCaW5kRGlyZWN0aXZlIiwibmFtZXNwYWNlIiwiZWxlIiwiaW5uZXJUZXh0IiwiRGlyZWN0aXZlIiwiRW1iZWREaXJlY3RpdmUiLCJhdHRyTm9kZSIsImVtYmVkVHBsIiwiZ2V0RW1iZWRUcGwiLCJzZXRJbm5lclRwbCIsIkhpZGVEaXJlY3RpdmUiLCJzdHlsZSIsImRpc3BsYXkiLCJJZkRpcmVjdGl2ZSIsIk1vZGVsRGlyZWN0aXZlIiwiY29tIiwibmV3dmFsdWUiLCJSZXBlYXREaXJlY3RpdmUiLCJpdGVtRXhwIiwiaXRlbXNFeHAiLCJpdGVtVGVtcGxhdGUiLCJkYXRhSXRlbXMiLCJjbXBJdGVtcyIsImhlYWRlciIsImZvb3RlciIsImFyZyIsImVsZU5vZGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjcmVhdGVDdXN0b20iLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpdGVtcyIsIiRldmFsIiwic2V0RGF0YUl0ZW1zIiwicmVwbGFjZUNoaWxkIiwiY2hpbGRTY29wZSIsImNtcEl0ZW0iLCJkYXRhSXRlbSIsImZpbHRlcnMiLCJuZXdDbXBJdGVtcyIsImdldENtcEl0ZW0iLCJDb21wb25lbnQiLCJ0ZW1wbGF0ZSIsIiRpbmhlcml0IiwiJHJlbmRlciIsInJlcGVhdEl0ZW0iLCJTaG93RGlyZWN0aXZlIiwiQ2hlY2tlZERpcmVjdGl2ZSIsIlN0YXRlRGlyZWN0aXZlIiwiRGlzYWJsZWREaXJlY3RpdmUiLCJSZWFkb25seURpcmVjdGl2ZSIsIlNlbGVjdGVkRGlyZWN0aXZlIiwiYXR0ck5hbWUiLCJoYXNBdHRyaWJ1dGUiLCJTdHlsZURpcmVjdGl2ZSIsIlN3aXRjaERlZmF1bHREaXJlY3RpdmUiLCJpc01hdGNoIiwic3dpdGNoV2hlbkRpcnMiLCJ2RWxlIiwid2hlbkRpcnMiLCJnZXREaXJlY3RpdmUiLCJpbml0U3dpdGNoV2hlbkRpcnMiLCJpc01hdGNoQ2hhbmdlZCIsIm5ld1ZhbHVlIiwiU3dpdGNoV2hlbkRpcmVjdGl2ZSIsInN3aXRjaERpciIsInN3aXRjaERpcnMiLCJpbml0U3dpdGNoRGlyIiwidmFsdWVDaGFuZ2VkIiwiU3dpdGNoRGlyZWN0aXZlIiwiSHRtbExleGVyIiwiTGV4ZXIiLCJwcm90b3R5cGUiLCJpc1ZhbGlkSWRlbnRpZmllclN0YXJ0IiwiY2giLCJpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlIiwiY3AiLCJpc051bWJlciIsImV4cGVjdFN0cmluZyIsInN0ciIsIm51bSIsInJlYWRDb21tZW50IiwiYmVnaW4iLCJlbmQiLCJzdGFydCIsInN0cmluZyIsInJhd1N0cmluZyIsImNoYXJBdCIsInRva2VucyIsInRocm93RXJyb3IiLCJyZWFkVGV4dCIsImNoMiIsInBlZWsiLCJpc0lkZW50aWZpZXJTdGFydCIsInRleHRUYWciLCJyZWFkVGFnIiwiY2xvc2luZyIsImRvY3R5cGUiLCJ0YWciLCJyZWFkSWRlbnQiLCJwZWVrTXVsdGljaGFyIiwicmVhZFN0cmluZyIsImlzV2hpdGVzcGFjZSIsImVxdWFsIiwibGV4IiwiYWxsb3dEb2NUeXBlIiwiY2gzIiwiSHRtbFBhcnNlciIsIlBhcnNlciIsImxleGVyIiwiZmFyZ21lbnQiLCJ0b2tlbiIsImN1cnJlbnQiLCIkcHVzaENoaWxkIiwibmV4dCIsImRvY1R5cGUiLCJpZGVudGlmaWVyIiwiYXR0cnMiLCJwIiwiJHB1c2hBdHRyaWJ1dGUiLCJjaGlsZEVsZW1lbnRzIiwiZWxlcyIsImNvbnN0YW50IiwicGFyc2VPcHRpb25zIiwiaXNJZGVudGlmaWVyQ29udGludWUiLCJsaXRlcmFscyIsInVuZGVmaW5lZCIsImh0bWwiLCJwYXJzZXIiLCJkZWZhdWx0cyIsImNyZWF0ZUNvbXBvbmVudCIsInNldHRpbmdzIiwiYXN0Tm9kZXMiLCJhc3ROb2RlIiwiJGNvbXBpbGUiLCIkJHZub2RlcyIsIm5vZGUiLCJ0cmltIiwicmVwbGFjZSIsImNyZWF0ZUZpbHRlciIsIk9QRVJBVE9SUyIsIm9wZXJhdG9yVGV4dCIsIkVTQ0FQRSIsIm9wZXJhdG9yIiwicmVhZE51bWJlciIsImlzIiwib3AxIiwib3AyIiwib3AzIiwiY2hhcnMiLCJpIiwiY29kZVBvaW50QXQiLCJjaGFyQ29kZUF0IiwiY3AxIiwiY3AyIiwiaXNFeHBPcGVyYXRvciIsImVycm9yIiwiY29sU3RyIiwibnVtYmVyIiwicGVla0NoIiwiTnVtYmVyIiwic2xpY2UiLCJlc2NhcGUiLCJoZXgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZUludCIsInJlcCIsIkFTVCIsIlByb2dyYW0iLCJFeHByZXNzaW9uU3RhdGVtZW50IiwiQXNzaWdubWVudEV4cHJlc3Npb24iLCJDb25kaXRpb25hbEV4cHJlc3Npb24iLCJMb2dpY2FsRXhwcmVzc2lvbiIsIkJpbmFyeUV4cHJlc3Npb24iLCJVbmFyeUV4cHJlc3Npb24iLCJDYWxsRXhwcmVzc2lvbiIsIk1lbWJlckV4cHJlc3Npb24iLCJJZGVudGlmaWVyIiwiTGl0ZXJhbCIsIkFycmF5RXhwcmVzc2lvbiIsIlByb3BlcnR5IiwiT2JqZWN0RXhwcmVzc2lvbiIsIkFzdE5vZGUiLCJpbnRlcm5hbHMiLCJQcm9ncmFtTm9kZSIsIkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIiwiQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIiwibGVmdCIsInJpZ2h0IiwiYXNzaWdubWVudExlZnQiLCJDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlIiwidGVzdCIsImFsdGVybmF0ZSIsImNvbnNlcXVlbnQiLCJMb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiQmluYXJ5RXhwcmVzc2lvbk5vZGUiLCJVbmFyeUV4cHJlc3Npb25Ob2RlIiwicHJlZml4IiwiTGl0ZXJhbE5vZGUiLCJDYWxsRXhwcmVzc2lvbk5vZGUiLCJjYWxsZWUiLCJjb250ZXh0IiwiYXJnVmFsdWVzIiwiZmlsdGVySW5zIiwiaXNGaWx0ZXIiLCIkZXhlY3V0ZSIsImFwcGx5IiwiZm4iLCJNZW1iZXJFeHByZXNzaW9uTm9kZSIsIm9iamVjdCIsInByb3BlcnR5IiwiY29tcHV0ZWQiLCJJZGVudGlmaWVyTm9kZSIsInByb3BlcnR5S2V5IiwiQXJyYXlFeHByZXNzaW9uTm9kZSIsIlByb3BlcnR5Tm9kZSIsImtpbmQiLCJPYmplY3RFeHByZXNzaW9uTm9kZSIsInByb3BlcnRpZXMiLCJkZWYiLCJpc0Fzc2lnbmFibGUiLCJhc3QiLCJtc2ciLCJwcm9ncmFtIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImV4cGVjdCIsImZpbHRlckNoYWluIiwiZXhwcmVzc2lvbiIsImFzc2lnbm1lbnQiLCJ0ZXJuYXJ5IiwibG9naWNhbE9SIiwiY29uc3VtZSIsImxvZ2ljYWxBTkQiLCJlcXVhbGl0eSIsInJlbGF0aW9uYWwiLCJhZGRpdGl2ZSIsIm11bHRpcGxpY2F0aXZlIiwidW5hcnkiLCJwcmltYXJ5IiwiYXJyYXlEZWNsYXJhdGlvbiIsImhhc093blByb3BlcnR5IiwicGFyc2VBcmd1bWVudHMiLCJiYXNlRXhwcmVzc2lvbiIsImlkZW50aWZpZXJzIiwiZW50aXJlTmFtZSIsImpvaW4iLCJwZWVrVG9rZW4iLCJhcnIiLCJlMSIsImUyIiwiZTMiLCJlNCIsInBlZWtBaGVhZCIsInQiLCJzaGlmdCIsIlRlbXBsYXRlQ2FjaGVTZXJ2aWNlIiwidHBsQ2FjaGUiLCJwcm9taXNlQ2FjaGUiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJTZXJ2aWNlIiwiQ29sbGFwc2VEaXJlY3RpdmUiLCJkdXJhdGlvbiIsImhlaWdodCIsInRpbWVvdXRJZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsaWVudEhlaWdodCIsIm92ZXJmbG93IiwidHJhbnNpdGlvbiIsImhpZGUiLCJzaG93IiwiY2FuY2VsVGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJnZXRDaGlsZE5vZGVzIiwiQXJyYXkiLCJyZXBsYWNlTm9kZSIsInJlZk5vZGUiLCJuZXdOb2RlIiwicmVtb3ZlTm9kZSIsInJlbW92ZU5vZGVCZXR3ZWVuIiwiYmVnaW5Ob2RlIiwiZW5kTm9kZSIsImluc2VydE5vZGVBZnRlciIsInByb3BDaGFuZ2luZ01zZyIsInByb3BDaGFuZ2VkTXNnIiwiU2V0UHJvcGVydHlIYW5kbGVyIiwiZGVlcFByb3h5Iiwic2VsZktleSIsImlzT2JqZWN0IiwiaXNBcnJheSIsInZhbGlkYXRpb24iLCJpc1ZhbGlkIiwicHJvcE1hcHMiLCJleGlzdGVkIiwiaXNNZXNzZW5nZXIiLCJoYW5kbGVycyIsInJldHVyblZhbHVlIiwiTWVzc2VuZ2VyQnVzIiwibWVzc2VuZ2VycyIsIm9mZiIsIlByb3BlcnR5Q2hhbmdlU3ViamVjdCIsInBsYWluTWFwIiwiTWFwIiwicmVnZXhNYXAiLCJoYXMiLCJzZXQiLCJiZWZvcmVDaGFuZ2VkIiwiYWN0aW9ucyIsImNsZWFyIiwiT2JqZWN0UHJvcGVydHlDaGFuZ2VTdWJqZWN0Iiwib25jaGFuZ2luZyIsImZpcmVDaGFuZ2luZyIsIm9uY2hhbmdlZCIsImZpcmVDaGFuZ2VkIiwib2ZmQ2hhbmdlIiwib2JqTWFwIiwiZGVidWdNb2RlIiwidG9TdHJpbmciLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImlnbm9yZU93biIsImNvcHkiLCJkZWVwIiwib2JqSW5kZXgiLCJhcmd1bWVudHMiLCJpc0Jvb2xlYW4iLCJuZXdBcnIiLCJuZXdPYmoiLCJleHRlbmQiLCJkZWVwTWVyZ2UiLCJwbGFpbk1lcmdlIiwibWVyZ2UiLCJzb3VyY2UiLCJvIiwiRiIsImluaGVyaXRQcm90b3R5cGUiLCJzdWJUeXBlIiwic3VwZXJUeXBlIiwiY29uc3RydWN0b3IiLCJpbmhlcml0IiwibG93ZXJjYXNlIiwiaXNTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInVwcGVyY2FzZSIsInRvVXBwZXJDYXNlIiwiaXNVbmRlZmluZWQiLCJpc0RlZmluZWQiLCJpc01hcCIsImlzQmxhbmtPYmplY3QiLCJpc0RhdGUiLCJpc0Z1bmN0aW9uIiwiaXNSZWdFeHAiLCJpc1NhbWUiLCJvYmoxIiwib2JqMiIsInNhbWUiLCJkZWJ1ZyIsImxvZyIsImNvbnNvbGUiLCJjb250YWlucyIsImNvbnRhaW5zU3RyIiwiaWdub3JlQ2FzZSIsImhhc1Byb3BlcnR5Iiwia2V5MiIsImhhc1Byb3AiLCJrZXlzIiwia2V5MyIsInZhbHVlMyIsImdldFByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJjb25zdHJ1Y3QiLCJiZWZvcmVBdHRyQ2hhbmdlIiwiYWZ0ZXJBdHRyQ2hhbmdlIiwib25Jbml0IiwiYWZ0ZXJWaWV3TW91bnQiLCIkJG93bmVyVk5vZGUiLCJwcm94eSIsIm1lc3NlbmdlciIsInN5bmMiLCIkZ2V0TWV0YSIsInRlbXBsYXRlVXJsIiwiZ2V0VHBsQnlVcmwiLCJ1c2luZyIsImNsYXNzTmFtZSIsInBvcCIsInNwYWNlTmFtZSIsImdldElubmVyVHBsIiwiJHVzaW5nIiwiZ2V0RG9tRWxlbWVudCIsIiRoYXNWTm9kZXMiLCIkZnJvbVZOb2RlcyIsIiRnZXRUZW1wbGF0ZSIsIiRtYWtlQ29tcGlsZU9wdGlvbnMiLCIkY2xlYXJWTm9kZXMiLCJzZWxlY3Rvck9yRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkYWZ0ZXJWaWV3TW91bnQiLCIkJHBhcmVudENvbXBvbmVudCIsIiRyZW1vdmVDaGlsZCIsIiQkZGV0ZWN0VGltZW91dCIsIiQkcHJvcENoYW5nZWQiLCIkJGNoaWxkQ29tcG9uZW50cyIsImlzRnJvbVZOb2RlIiwiJHVubW91bnQiLCJwYXJlbnRDbXAiLCJzZXRQcm90b3R5cGVPZiIsIiRob29rcyIsImhvb2siLCIkc2V0TWV0YSIsImluamVjdFNlcnZpY2VzIiwib25Db21waWxlIiwiJCR2bm9kZSIsIiQkYmluZGluZyIsIiR1cGRhdGUiLCJGaWx0ZXIiLCJvbkV4ZWN1dGUiLCJucyIsIm1ldGhvZHMiLCJidWlsZENvbnN0cnVjdG9yIiwiY29udHJhY3RUeXBlIiwic3VwZXJDbGFzcyIsIm1ha2VDb25zdHJ1Y3RvciIsImlzU2VydmljZSIsImJvb3RzdHJhcCIsImlubmVySFRNTCIsImNscyIsImYiLCJuYW1lUGF0dGVybiIsIkluamVjdG9yIiwiY29udGFpbmVyIiwid2FpdGluZ1RvRXh0ZW5kcyIsImluc0NvbnRhaW5lciIsIm1hcHBpbmciLCJnZXRNYXBwaW5nIiwicmVnaXN0ZXIiLCJjb25zdHJ1Y3RvcnMiLCJuYW1lc3BhY2VzIiwiaW5zdGFuY2UiLCJjcmVhdGVTZXJ2aWNlIiwiZ2V0Q29tcG9uZW50IiwiZ2V0RmlsdGVyIiwic2VydmljZXMiLCJnZXRJbnN0YW5jZXMiLCJnZXRTZXJ2aWNlIiwibm9uU2hhcmVkIiwiY29uc3RydWN0b3JOYW1lIiwiY2hlY2tTZWxlY3RvciIsImdldFdhaXRpbmdUb0V4dGVuZHMiLCJvbkNvbnN0cnVjdCIsIkZ1bmN0aW9uIiwic3VwZXJPbmUiLCJyZW1haW5Db25zdHJ1Y3RvciIsInN1cGVyTmFtZSIsImNhbGxiYWNrIiwiZXh0ZW5kTWV0YSIsInN1cGVyTWV0YSIsIndhaXRpbmdUb0V4dGVuZHMyIiwiZnVsbFNlbGVjdG9yIiwic2V0V2FpdGluZ1RvRXh0ZW5kcyIsImxvY2FsIiwiaW5qZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicHJpdmF0ZUtleSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFD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QUNJLHFCQUFjO0FBQUE7O0FBQ1ZBLFdBQU8sQ0FBQytHLFNBQVIsQ0FBa0J6YSxJQUFsQixDQUF1QixJQUF2QjtBQUNIOztBQUhMO0FBQUE7QUFBQSw2QkFTYTtBQUNMLGFBQU87QUFDSDRhLGNBQU0sRUFBRSxFQURMO0FBRUh2YSxpQkFBUyxFQUFFO0FBRlIsT0FBUDtBQUlIO0FBZEw7QUFBQTtBQUFBLCtCQWdCZTtBQUNQLGFBQU8sS0FBS3FCLE1BQUwsSUFBZSxFQUF0QjtBQUNIO0FBbEJMO0FBQUE7QUFBQSw2QkFvQmFuSyxLQXBCYixFQW9Cb0I7QUFDWixXQUFLbUssTUFBTCxHQUFjbkssS0FBZDtBQUNIO0FBdEJMO0FBQUE7QUFBQSwrQkF3QmU7QUFDUCxVQUFJc0IseURBQUEsQ0FBaUIsS0FBS3dILFNBQXRCLENBQUosRUFBc0M7QUFDbEMsYUFBS0EsU0FBTCxDQUFlTCxJQUFmLENBQW9CLElBQXBCO0FBQ0g7QUFDSjtBQTVCTDtBQUFBO0FBQUEsZ0NBS3VCO0FBQ2Z5Qyx3REFBUSxDQUFDdWEsY0FBVCxDQUF3QixJQUF4QjtBQUNIO0FBUEw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7OztBQ0hBLG1EIiwiZmlsZSI6InNpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJheGlvc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJheGlvc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzaW5lXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYXhpb3NcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNpbmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJheGlvc1wiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYXhpb3NfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgeyBCaW5kaW5nIH0gZnJvbSAnLi9iaW5kaW5nJztcclxuXHJcbi8vIC8vIFdpbmRvdyBFdmVudHNcclxuLy8gY2FzZSAnb24tbG9hZCc6XHJcbi8vIGNhc2UgJ29uLXVubG9hZCc6XHJcbi8vIC8vIEZvcm0gRWxlbWVudCBFdmVudHNcclxuLy8gY2FzZSAnb24tY2hhbmdlJzpcclxuLy8gY2FzZSAnb24tc3VibWl0JzpcclxuLy8gY2FzZSAnb24tcmVzZXQnOlxyXG4vLyBjYXNlICdvbi1zZWxlY3QnOlxyXG4vLyBjYXNlICdvbi1ibHVyJzpcclxuLy8gY2FzZSAnb24tZm9jdXMnOlxyXG4vLyAvLyBJbWFnZSBFdmVudHNcclxuLy8gY2FzZSAnb24tYWJvcnQnOlxyXG4vLyAvLyBLZXlib2FyZCBFdmVudHNcclxuLy8gY2FzZSAnb24ta2V5ZG93bic6XHJcbi8vIGNhc2UgJ29uLWtleXByZXNzJzpcclxuLy8gY2FzZSAnb24ta2V5dXAnOlxyXG4vLyAvLyBNb3VzZSBFdmVudHNcclxuLy8gY2FzZSAnb24tY2xpY2snOlxyXG4vLyBjYXNlICdvbi1kYmxjbGljayc6XHJcbi8vIGNhc2UgJ29uLW1vdXNlZG93bic6XHJcbi8vIGNhc2UgJ29uLW1vdXNlbW92ZSc6XHJcbi8vIGNhc2UgJ29uLW1vdXNlb3V0JzpcclxuLy8gY2FzZSAnb24tbW91c2VvdmVyJzpcclxuLy8gY2FzZSAnb24tbW91c2V1cCc6XHJcbnZhciBldmVudFRleHQgPSAnbG9hZCB1bmxvYWQgY2hhbmdlIHN1Ym1pdCByZXNldCBzZWxlY3QgYmx1ciBmb2N1cyBhYm9ydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZW1vdmUgbW91c2VvdXQgbW91c2VvdmVyIG1vdXNldXAnO1xyXG52YXIgZG9tRXZlbnRzID0gZXZlbnRUZXh0LnNwbGl0KCcgJyk7XHJcblxyXG5jbGFzcyBBdHRyTm9kZSBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmF0dHJpYnV0ZSwgbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMucXVvdGUgPSAnXCInO1xyXG4gICAgICAgIHRoaXMub3JnTm9kZU5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuaXNFdmVudCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNCaW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0RvbUV2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0RpcmVjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm93bmVyVkVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3duZXJFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm93bmVyQ29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmJpbmRpbmcgPSBuZXcgQmluZGluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJlbG9uZ1RvKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9yZ05vZGVOYW1lID09PSBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY29tcGlsZSh0aGlzLm9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGUob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuaXNFdmVudCA9IHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnQCcpO1xyXG4gICAgICAgIHRoaXMuaXNCaW5kaW5nID0gdGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCc6Jyk7XHJcbiAgICAgICAgdGhpcy5pc0RpcmVjdGl2ZSA9IHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnKicpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRXZlbnQgfHwgdGhpcy5pc0JpbmRpbmcgfHwgdGhpcy5pc0RpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVOYW1lID0gdGhpcy5ub2RlTmFtZS5zdWJzdHIoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNEb21FdmVudCA9IHV0aWxzLmNvbnRhaW5zKGRvbUV2ZW50cywgdGhpcy5ub2RlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nLnNldE91dHB1dCh0aGlzLmlzRXZlbnQpO1xyXG4gICAgICAgIHRoaXMuYmluZGluZy5iaW5kKHRoaXMubm9kZVZhbHVlLCB0aGlzLmlzRXZlbnQgfHwgdGhpcy5pc0JpbmRpbmcgfHwgdGhpcy5pc0RpcmVjdGl2ZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNvbnRhaW5zRGlyZWN0aXZlKHRoaXMubm9kZU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IG9wdGlvbnMuY3JlYXRlRGlyZWN0aXZlKHRoaXMubm9kZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGJpbmRWTm9kZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmluZGluZy5zZXRPdXRwdXQodGhpcy5kaXJlY3RpdmUub3V0cHV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlyZWN0aXZlICcgKyB0aGlzLm5vZGVOYW1lICsgJyBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpbmsoc2NvcGUsIG93bmVyRWxlbWVudCwgb3duZXJDb21wb25lbnQpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLm93bmVyRWxlbWVudCA9IG93bmVyRWxlbWVudDtcclxuICAgICAgICB0aGlzLm93bmVyQ29tcG9uZW50ID0gb3duZXJDb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nLnNldFNjb3BlKHNjb3BlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNFdmVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0RvbUV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubm9kZU5hbWUsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5iaW5kaW5nLmNvbXB1dGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudDogZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhcmdzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6IHNlbGYub3duZXJFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG93bmVyQ29tcG9uZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG93bmVyQ29tcG9uZW50LiRsaXN0ZW4odGhpcy5ub2RlTmFtZSwgZnVuY3Rpb24gKGUsIGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmJpbmRpbmcuY29tcHV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2Fsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50OiBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFyZ3M6IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZWxlbWVudDogc2VsZi5vd25lckVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuJCRjaGlsZERpcmVjdGl2ZXMucHVzaCh0aGlzLmRpcmVjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kc2V0QmluZGluZyh0aGlzLmJpbmRpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG93bmVyQ29tcG9uZW50ICE9IG51bGwgJiYgb3duZXJDb21wb25lbnQuJGhhc0F0dHIodGhpcy5ub2RlTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIG93bmVyQ29tcG9uZW50LiRpbml0QXR0cih0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLm93bmVyRWxlbWVudCwgdGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm93bmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmluZGluZy53YXRjaFByb3BzKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGV0ZWN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXRlY3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlID09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRkZXRlY3QodGhpcy5vd25lckVsZW1lbnQsIHRoaXMub3duZXJDb21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYXNDaGFuZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmluZGluZy5kZXRlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3duZXJDb21wb25lbnQgIT0gbnVsbCAmJiB0aGlzLm93bmVyQ29tcG9uZW50LiRoYXNBdHRyKHRoaXMubm9kZU5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXJDb21wb25lbnQuJHNldEF0dHIodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMub3duZXJFbGVtZW50LCB0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lckVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vd25lckVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgdGhpcy5ub2RlTmFtZSA9PT0gJ3ZhbHVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXJFbGVtZW50LnZhbHVlID0gdGhpcy5iaW5kaW5nLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyTGluaygpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGluc2VydCh0aGlzLm93bmVyRWxlbWVudCwgdGhpcy5vd25lckNvbXBvbmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpcmVjdGl2ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlID09IG51bGwgPyBbXSA6IFt0aGlzLmRpcmVjdGl2ZV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3JnTm9kZU5hbWUgKyAodGhpcy5ub2RlVmFsdWUgPT0gbnVsbCA/ICcnIDogKCc9JyArIHRoaXMucXVvdGUgKyB0aGlzLm5vZGVWYWx1ZSArIHRoaXMucXVvdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbm5lclRwbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmdOb2RlTmFtZSArICh0aGlzLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdGhpcy5xdW90ZSArIHRoaXMubm9kZVZhbHVlICsgdGhpcy5xdW90ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoaXNGcm9tRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgaWYgKGlzRnJvbURpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJpbmRpbmcuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuYmluZGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vd25lclZFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm93bmVyRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGRpc3Bvc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBdHRyTm9kZSB9O1xyXG4iLCJcclxudmFyIFZOb2RlVHlwZSA9IHtcclxuICAgIGVsZW1lbnQ6IDEsXHJcbiAgICBhdHRyaWJ1dGU6IDIsXHJcbiAgICB0ZXh0OiAzLFxyXG4gICAgY2RhdGFTZWN0aW9uOiA0LFxyXG4gICAgZW50aXR5UmVmZXJlbmNlOiA1LFxyXG4gICAgZW50aXR5OiA2LFxyXG4gICAgcHJvY2Vzc2luZ0luc3RydWN0aW9uOiA3LFxyXG4gICAgY29tbWVudDogOCxcclxuICAgIGRvY3VtZW50OiA5LFxyXG4gICAgZG9jdW1lbnRUeXBlOiAxMCxcclxuICAgIGRvY3VtZW50RnJhZ21lbnQ6IDExLFxyXG4gICAgbm90YXRpb246IDEyLFxyXG4gICAgY3VzdG9tOiAxMDFcclxufTtcclxuXHJcbi8vIHZpcnR1YWwgbm9kZVxyXG5jbGFzcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubm9kZVR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMubm9kZU5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vd25lclZEb2N1bWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgJHB1c2hDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICAkYnVpbGRTaWJsaW5nKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IChzZWxmLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLiRidWlsZFNpYmxpbmcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgICRyZW1vdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy4kcmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy4kY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vd25lclZEb2N1bWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQ2hpbGROb2RlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckNoaWxkTm9kZXMoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIGlmIChjaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZC5uZXh0U2libGluZyA9IGNoaWxkO1xyXG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSB0aGlzLmxhc3RDaGlsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZDtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydEJlZm9yZShyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcclxuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHJlZkNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcclxuICAgICAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkO1xyXG4gICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0NoaWxkO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDAsIG5ld0NoaWxkKTtcclxuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0QWZ0ZXIocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XHJcbiAgICAgICAgaWYgKHJlZkNoaWxkLm5leHRTaWJsaW5nID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLm5leHRTaWJsaW5nLCBuZXdDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW92ZSBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gY2hpbGQubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZy5wcmV2aW91c1NpYmxpbmcgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT09ICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGlsZC4kY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICByZXBsYWNlQ2hpbGQocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XHJcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcbiAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQubmV4dFNpYmxpbmc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZpcnN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdENoaWxkID09PSByZWZDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVmQ2hpbGQuJGNsZWFyUGFyZW50QW5kU2libGluZygpO1xyXG4gICAgICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSwgbmV3Q2hpbGQpO1xyXG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZU5vZGUoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuY29tcGlsZShvcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXJlY3RpdmVzKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQuZGlyZWN0aXZlcygpO1xyXG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpcmVjdGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgbGluayhzY29wZSkge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQubGluayhzY29wZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJMaW5rKCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5hZnRlckxpbmsoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRlY3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQ2hhbmdlKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9O1xyXG4iLCJpbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5L21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBHZXRQcm9wZXJ0eUhhbmRsZXIgfSBmcm9tICcuLi91dGlsaXR5L2hhbmRsZXInO1xyXG5pbXBvcnQgeyBjb21wdXRlIH0gZnJvbSAnLi4vcGFyc2VyJztcclxuXHJcbmNsYXNzIEV4cE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IodGV4dCkge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvcHMoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgb2JqUHJvcHMgPSBbXTtcclxuICAgICAgICBjb21wdXRlKHRoaXMudGV4dCwgbmV3IFByb3h5KHNjb3BlLCBuZXcgR2V0UHJvcGVydHlIYW5kbGVyKG9ialByb3BzLCB0cnVlKSksIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBvYmpQcm9wcztcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IGNvbXB1dGUodGhpcy50ZXh0LCBzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0ZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlICE9PSB0aGlzLm9sZFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEJpbmRpbmcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy5pc0V4cCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLnJpZ2h0U3RyID0gJyc7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNoYW5nZSA9IG5ldyBNZXNzZW5nZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTY29wZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPdXRwdXQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm91dHB1dCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmQodGV4dCwgaXNFeHApIHtcclxuICAgICAgICBpZiAodGV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5pc0V4cCA9IGlzRXhwO1xyXG5cclxuICAgICAgICBpZiAoaXNFeHApIHtcclxuICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGV4cDogbmV3IEV4cE5vZGUodGV4dCksXHJcbiAgICAgICAgICAgICAgICBsZWZ0U3RyOiAnJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAve3soW159XSopfX0vZztcclxuICAgICAgICB2YXIgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XHJcbiAgICAgICAgdmFyIG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpO1xyXG5cclxuICAgICAgICB3aGlsZSAobWF0Y2ggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IG1hdGNoLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgZXhwOiBuZXcgRXhwTm9kZShtYXRjaFsxXSksXHJcbiAgICAgICAgICAgICAgICBsZWZ0U3RyOiB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XHJcbiAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VnbWVudHMubGVuZ3RoID4gMCAmJiBsYXN0SW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0U3RyID0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZShvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWdtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwICYmIHRoaXMuc2VnbWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzWzBdLmV4cC5jb21wdXRlKHNlbGYuc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc2VnbWVudHNbMF0uZXhwLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuZXhwLmNvbXB1dGUoc2VsZi5zY29wZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAoc2VnbWVudC5sZWZ0U3RyICsgc2VnbWVudC5leHAudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGV4dCArIHRoaXMucmlnaHRTdHI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoUHJvcHMoYWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3V0cHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgb2JqUHJvcHMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgIG9ialByb3BzID0gb2JqUHJvcHMuY29uY2F0KHNlZ21lbnQuZXhwLmdldFByb3BzKHNlbGYuc2NvcGUpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb2JqUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAob2JqUHJvcCkge1xyXG4gICAgICAgICAgICBzZWxmLnNjb3BlLiR3YXRjaChvYmpQcm9wLm9iaiwgb2JqUHJvcC5wcm9wLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZS5maXJlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYWN0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgc2VsZi5jaGFuZ2Uub24oYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGV0ZWN0KG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodGhpcy5vdXRwdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHMuc29tZShmdW5jdGlvbiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VnbWVudC5leHAuZGV0ZWN0KHNlbGYuc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgIHNlZ21lbnQuZXhwLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQmluZGluZyB9OyIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY2xhc3MgQ0RhdGFTZWN0aW9uTm9kZSBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmNkYXRhU2VjdGlvbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IENEYXRhU2VjdGlvbk5vZGUgfTsiLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuXHJcbmNsYXNzIENvbW1lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcihWTm9kZVR5cGUuY29tbWVudCwgJyNjb21tZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGluaygpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLm5vZGVWYWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IENvbW1lbnROb2RlIH07XHJcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuXHJcbmNsYXNzIEN1c3RvbU5vZGUgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsaW5rZXIpe1xyXG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5jdXN0b20sIG5hbWUpO1xyXG4gICAgICAgIHRoaXMubGlua2VyID0gbGlua2VyO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmsoc2NvcGUpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlua2VyLmNhbGwodGhpcywgc2NvcGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyTGluaygpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uSW5zZXJ0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkluc2VydC5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXRlY3QoKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRldGVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25EZXRlY3QuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQ2hhbmdlKCkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25IYXNDaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uSGFzQ2hhbmdlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uVXBkYXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vblVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDdXN0b21Ob2RlIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcblxyXG5jbGFzcyBEb2N1bWVudFR5cGVOb2RlIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmRvY3VtZW50VHlwZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IERvY3VtZW50VHlwZU5vZGUgfTtcclxuIiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcblxyXG5jbGFzcyBEb2N1bWVudE5vZGUgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihWTm9kZVR5cGUuZG9jdW1lbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBEb2N1bWVudE5vZGUgfTsiLCJpbXBvcnQgKiBhcyBlbGVVdGlscyBmcm9tICcuLi91dGlsaXR5L2VsZS11dGlscyc7XHJcbmltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgeyBDdXN0b21Ob2RlIH0gZnJvbSAnLi9jdXN0b20nO1xyXG5pbXBvcnQgeyBBdHRyTm9kZSB9IGZyb20gJy4vYXR0cmlidXRlJztcclxuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICcuLi9wYXJzZXInO1xyXG5cclxuY2xhc3MgRWxlbWVudE5vZGUgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihWTm9kZVR5cGUuZWxlbWVudCwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gW107XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZWxmQ2xvc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb21waWxlT3B0aW9ucyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0NvbXBvbmVudCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgICRwdXNoQXR0cmlidXRlKGF0dHIpIHtcclxuICAgICAgICBhdHRyLm93bmVyVkVsZW1lbnQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0F0dHJpYnV0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcy5sZW5ndGggIT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0LCBtYXRjaGVzID0gdGhpcy5hdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IG1hdGNoZXNbMF07XHJcbiAgICAgICAgICAgIHRhcmdldC5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBuZXcgQXR0ck5vZGUoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRhcmdldC5vd25lclZFbGVtZW50ID0gdGhpcztcclxuICAgICAgICAgICAgdGFyZ2V0LmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaCh0YXJnZXQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUF0dHJpYnV0ZShrZXkpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gW10sIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgQXR0ck5vZGUpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hdHRyaWJ1dGVzLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi5hdHRyaWJ1dGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XHJcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzZWxmLmF0dHJpYnV0ZXMuaW5kZXhPZihtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICBtYXRjaC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLmF0dHJpYnV0ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0Lmxlbmd0aCA+IDAgPyB0YXJnZXRbMF0gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZEF0dHJpYnV0ZShhdHRyKSB7XHJcbiAgICAgICAgaWYgKGF0dHIub3duZXJWRWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkN1cnJlbnQgYXR0cmlidXRlIGlzIG5vdCBuZXchXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXR0ci5vd25lclZFbGVtZW50ID0gdGhpcztcclxuICAgICAgICBhdHRyLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnB1c2goYXR0cik7XHJcbiAgICAgICAgcmV0dXJuIGF0dHI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XHJcbiAgICAgICAgdmFyIGF0dHJUcGwgPSAnJywgY2hpbGRUcGwgPSAnJztcclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgYXR0clRwbCArPSAnICc7XHJcbiAgICAgICAgICAgIGF0dHJUcGwgKz0gYXR0ci5nZXRPdXRlclRwbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGRUcGwgKz0gY2hpbGQuZ2V0T3V0ZXJUcGwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHRwbCA9ICc8JyArIHRoaXMubm9kZU5hbWUgKyBhdHRyVHBsICsgJz4nICsgY2hpbGRUcGw7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zZWxmQ2xvc2VkKSB7XHJcbiAgICAgICAgICAgIHRwbCArPSAoJzwvJyArIHRoaXMubm9kZU5hbWUgKyAnPicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRwbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbm5lclRwbCgpIHtcclxuICAgICAgICB2YXIgY2hpbGRUcGwgPSAnJztcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkVHBsICs9IGNoaWxkLmdldE91dGVyVHBsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGlsZFRwbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPdXRlclRwbCh0cGwpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcGFyc2UodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgc2VsZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLCB2bm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VsZi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElubmVyVHBsKHRwbCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsZWFyQ2hpbGROb2RlcygpO1xyXG4gICAgICAgIHBhcnNlKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcclxuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHNlbGYuYXBwZW5kQ2hpbGQodm5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpcmVjdGl2ZShrZXkpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHIuZGlyZWN0aXZlcygpO1xyXG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uJCRtZXRhLnNlbGVjdG9yID09PSBrZXk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZShvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jb21waWxlT3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgYXR0ci5jb21waWxlKG9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaXNDb21wb25lbnQgPSBvcHRpb25zLmNvbnRhaW5zQ29tcG9uZW50KHRoaXMubm9kZU5hbWUpO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0NvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmNvbXBpbGUob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXJlY3RpdmVzKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLm1hcChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0ci5kaXJlY3RpdmVzKCk7XHJcbiAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLmRpcmVjdGl2ZXMoKTtcclxuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmsoc2NvcGUpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHNlbGYuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICBzZWxmLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHNlbGYubm9kZU5hbWUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0NvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudCA9IHNjb3BlLiRjcmVhdGVDb21wb25lbnQodGhpcy5ub2RlTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LiRiaW5kVk5vZGUodGhpcyk7XHJcbiAgICAgICAgICAgIHNlbGYuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLmxpbmsoc2NvcGUsIHNlbGYuZWxlbWVudCwgc2VsZi5jb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsZi5jb21wb25lbnQuJGluaXRBdHRyRG9uZSgpO1xyXG4gICAgICAgICAgICBzZWxmLmNvbXBvbmVudC4kbW91bnQoc2VsZi5lbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLmxpbmsoc2NvcGUsIHNlbGYuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxmLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZC5saW5rKHNjb3BlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNlbGYuZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBhZnRlckxpbmsoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgYXR0ci5hZnRlckxpbmsoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5hZnRlckxpbmsoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdCgpIHtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICBhdHRyLmRldGVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGV0ZWN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKGlzRnJvbUNvbXBvbmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNGcm9tQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIGF0dHIuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnJlbW92ZURvbUVsZW1lbnQoKTtcclxuICAgICAgICB0aGlzLmNvbXBpbGVPcHRpb25zID0gbnVsbDtcclxuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC4kZGlzcG9zZSh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RG9tRWxlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZURvbUVsZW1lbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVsZVV0aWxzLnJlbW92ZU5vZGUodGhpcy5lbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRWxlbWVudChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50Tm9kZShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBdHRyKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEF0dHJOb2RlKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUN1c3RvbShuYW1lLCBsaW5rZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEN1c3RvbU5vZGUobmFtZSwgbGlua2VyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRWxlbWVudE5vZGUgfTsiLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuXHJcbmNsYXNzIERvY3VtZW50RnJhZ21lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcihWTm9kZVR5cGUuZG9jdW1lbnRGcmFnbWVudCwgJyNkb2N1bWVudC1mcmFnbWVudCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBEb2N1bWVudEZyYWdtZW50Tm9kZSB9O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL2Jhc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2F0dHJpYnV0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2RhdGFzZWN0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21tZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9jdXN0b20nO1xyXG5leHBvcnQgKiBmcm9tICcuL2RvY3R5cGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RvY3VtZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9mcmFnbWVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGV4dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYmluZGluZyc7XHJcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBlbGVVdGlscyBmcm9tICcuLi91dGlsaXR5L2VsZS11dGlscyc7XHJcbmltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgeyBCaW5kaW5nIH0gZnJvbSAnLi9iaW5kaW5nJztcclxuXHJcbmNsYXNzIFRleHROb2RlIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLnRleHQsICcjdGV4dCcpO1xyXG4gICAgICAgIHRoaXMuYmluZGluZyA9IG5ldyBCaW5kaW5nKCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlKCkge1xyXG4gICAgICAgIHRoaXMuYmluZGluZy5iaW5kKHRoaXMubm9kZVZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rKHNjb3BlKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRpbmcuc2V0U2NvcGUoc2NvcGUpO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRpbmcud2F0Y2hQcm9wcyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuZGV0ZWN0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNDaGFuZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmluZGluZy5kZXRlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgZWxlVXRpbHMucmVwbGFjZU5vZGUodGhpcy5lbGVtZW50LCB0aGlzLnJlbmRlcih0aGlzLmJpbmRpbmcudmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPdXRlclRwbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5uZXJUcGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmJpbmRpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBUZXh0Tm9kZSB9OyIsImltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3L2luamVjdG9yJ1xyXG5cclxuZnVuY3Rpb24gZGlyZWN0aXZlKG1ldGEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gbWV0YS5zZWxlY3RvciB8fCB0YXJnZXQubmFtZTtcclxuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckNvbnN0cnVjdG9yKHR5cGVDb25zdC5kaXJlY3RpdmUsIHNlbGVjdG9yLCB0YXJnZXQsIG1ldGEpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgZGlyZWN0aXZlIH0iLCJpbXBvcnQgeyB0eXBlQ29uc3QsIGluamVjdG9yIH0gZnJvbSAnLi4vdmlldy9pbmplY3RvcidcclxuXHJcbmZ1bmN0aW9uIHNlcnZpY2UobWV0YSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICB2YXIgc2VsZWN0b3IgPSBtZXRhLnNlbGVjdG9yIHx8IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyQ29uc3RydWN0b3IodHlwZUNvbnN0LnNlcnZpY2UsIHNlbGVjdG9yLCB0YXJnZXQsIG1ldGEpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2VydmljZSB9IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tYmluZCdcclxufSlcclxuY2xhc3MgQmluZERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpe1xyXG4gICAgICAgIGVsZS5pbm5lclRleHQgPSBiaW5kaW5nLmNvbXB1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZShlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLm9uSW5zZXJ0KGVsZSwgYmluZGluZyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1lbWJlZCdcclxufSlcclxuY2xhc3MgRW1iZWREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbXBpbGUoYXR0ck5vZGUsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgZW1iZWRUcGwgPSBvcHRpb25zLmdldEVtYmVkVHBsKCk7XHJcbiAgICAgICAgaWYgKGVtYmVkVHBsKSB7XHJcbiAgICAgICAgICAgIGF0dHJOb2RlLm93bmVyVkVsZW1lbnQuc2V0SW5uZXJUcGwoZW1iZWRUcGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWhpZGUnXHJcbn0pXHJcbmNsYXNzIEhpZGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoZWxlLCBiaW5kaW5nKXtcclxuICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9IGJpbmRpbmcuY29tcHV0ZSgpID8gJ25vbmUnIDogJ2luaXRpYWwnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMub25JbnNlcnQoZWxlLCBiaW5kaW5nKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1pZidcclxufSlcclxuY2xhc3MgSWZEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ24taWYnKTtcclxuICAgICAgICBpZiAoIWJpbmRpbmcuY29tcHV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKGVsZSwgdGhpcy5jb21tZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgaWYgKGJpbmRpbmcuY29tcHV0ZSgpKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmNvbW1lbnQsIGVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IG51bGw7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmQnXHJcbmV4cG9ydCAqIGZyb20gJy4vZW1iZWQnXHJcbmV4cG9ydCAqIGZyb20gJy4vaGlkZSdcclxuZXhwb3J0ICogZnJvbSAnLi9pZidcclxuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCdcclxuZXhwb3J0ICogZnJvbSAnLi9yZXBlYXQnXHJcbmV4cG9ydCAqIGZyb20gJy4vc2hvdydcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSdcclxuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gnXHJcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGUnIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLW1vZGVsJ1xyXG59KVxyXG5jbGFzcyBNb2RlbERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShlbGUsIGJpbmRpbmcsIGNvbSkge1xyXG4gICAgICAgIGlmIChjb20gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlbGUudmFsdWUgPSBiaW5kaW5nLmNvbXB1dGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbS4kc2V0QXR0cigndmFsdWUnLCBiaW5kaW5nLmNvbXB1dGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZywgY29tKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoZWxlLCBiaW5kaW5nLCBjb20pO1xyXG5cclxuICAgICAgICBpZiAoY29tID09IG51bGwpIHtcclxuICAgICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBiaW5kaW5nLnNjb3BlLiRzZXRBdHRyKGJpbmRpbmcudGV4dCwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc01lc3Nlbmdlcihjb20uY2hhbmdlKSkge1xyXG4gICAgICAgICAgICAgICAgY29tLmNoYW5nZS5vbihmdW5jdGlvbiAoZSwgYXJncykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmcuc2NvcGUuJHNldEF0dHIoYmluZGluZy50ZXh0LCBhcmdzLm5ld3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9lbnQgJyArIGNvbS4kJG1ldGEuc2VsZWN0b3IgKyAnbXVzdCBkZWZpbmUgW2NoYW5nZV0gZXZlbnQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nLCBjb20pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShlbGUsIGJpbmRpbmcsIGNvbSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlldy9jb21wb25lbnQnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1yZXBlYXQnXHJcbn0pXHJcbmNsYXNzIFJlcGVhdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXRlbUV4cCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSAnJztcclxuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5jbXBJdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZvb3RlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21waWxlKGF0dHJOb2RlKSB7XHJcbiAgICAgICAgdmFyIGFyZyA9IGF0dHJOb2RlLm5vZGVWYWx1ZTtcclxuICAgICAgICB2YXIgZWxlTm9kZSA9IGF0dHJOb2RlLm93bmVyVkVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXihcXHcrKVxccytpblxccysoXFx3KykkL2k7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhdHRlcm4uZXhlYyhhcmcpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduLXJlcGVhdDogcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtRXhwID0gcmVzdWx0WzFdO1xyXG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSByZXN1bHRbMl07XHJcblxyXG4gICAgICAgIGVsZU5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOb2RlKTtcclxuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGVsZU5vZGUuZ2V0T3V0ZXJUcGwoKTtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjdXN0b20gPSBlbGVOb2RlLmNyZWF0ZUN1c3RvbSgnbi1yZXBlYXQnLCBmdW5jdGlvbiAoc2NvcGUpIHtcclxuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBzY29wZS4kZXZhbChzZWxmLml0ZW1zRXhwKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICAgICAgc2VsZi5zZXREYXRhSXRlbXMoaXRlbXMpO1xyXG4gICAgICAgICAgICBzZWxmLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0OiBuLXJlcGVhdCcpO1xyXG4gICAgICAgICAgICBzZWxmLmZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2VuZDogbi1yZXBlYXQnKTtcclxuXHJcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYuaGVhZGVyKTtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VsZi5mb290ZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVsZU5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZWxlTm9kZSwgY3VzdG9tKTtcclxuICAgICAgICBlbGVOb2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgY3VzdG9tLm9uSW5zZXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLnJlbmRlcigpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGN1c3RvbS5vbkRldGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gc2VsZi5zY29wZS4kZXZhbChzZWxmLml0ZW1zRXhwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLmRhdGFJdGVtcyAhPT0gaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0YUl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIHNlbGYucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNtcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkU2NvcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZFNjb3BlLiRkZXRlY3QoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY3VzdG9tLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi4kZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBlbGVOb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgY3VzdG9tID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmNtcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGNtcEl0ZW0pIHtcclxuICAgICAgICAgICAgY21wSXRlbS4kZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY21wSXRlbXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gbnVsbDtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGFJdGVtcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY29wZS4kd2F0Y2godGhpcy5kYXRhSXRlbXMsICdsZW5ndGgnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVuZGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q21wSXRlbShkYXRhSXRlbSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgZmlsdGVycyA9IHRoaXMuY21wSXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtW3NlbGYuaXRlbUV4cF0gPT09IGRhdGFJdGVtO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZmlsdGVyc1swXTtcclxuXHJcbiAgICAgICAgdGhpcy5jbXBJdGVtcyA9IHRoaXMuY21wSXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtW3NlbGYuaXRlbUV4cF0gIT09IGRhdGFJdGVtO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIHZhciBuZXdDbXBJdGVtcyA9IFtdO1xyXG5cclxuICAgICAgICB1dGlscy5mb3JFYWNoKHNlbGYuZGF0YUl0ZW1zLCBmdW5jdGlvbiAoa2V5LCBpdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBjbXBJdGVtID0gc2VsZi5nZXRDbXBJdGVtKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNtcEl0ZW0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY21wSXRlbSA9IG5ldyBDb21wb25lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBzZWxmLml0ZW1UZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjbXBJdGVtW3NlbGYuaXRlbUV4cF0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgY21wSXRlbS4kaW5oZXJpdChzZWxmLnNjb3BlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY21wSXRlbS4kcmVuZGVyKHRydWUpKTtcclxuICAgICAgICAgICAgbmV3Q21wSXRlbXMucHVzaChjbXBJdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGYuY21wSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZWxmLmNtcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHJlcGVhdEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJlcGVhdEl0ZW0uJGRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxmLmNtcEl0ZW1zID0gbmV3Q21wSXRlbXM7XHJcbiAgICAgICAgdXRpbHMucmVtb3ZlTm9kZUJldHdlZW4oc2VsZi5oZWFkZXIsIHNlbGYuZm9vdGVyKTtcclxuICAgICAgICBzZWxmLmZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmcmFnbWVudCwgc2VsZi5mb290ZXIpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLXNob3cnXHJcbn0pXHJcbmNsYXNzIFNob3dEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoZWxlLCBiaW5kaW5nKXtcclxuICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9IGJpbmRpbmcuY29tcHV0ZSgpID8gJ2luaXRpYWwnIDogJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMub25JbnNlcnQoZWxlLCBiaW5kaW5nKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1jaGVja2VkJ1xyXG59KVxyXG5jbGFzcyBDaGVja2VkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2NoZWNrZWQnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1kaXNhYmxlZCdcclxufSlcclxuY2xhc3MgRGlzYWJsZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignZGlzYWJsZWQnKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vY2hlY2tlZCdcclxuZXhwb3J0ICogZnJvbSAnLi9kaXNhYmxlZCdcclxuZXhwb3J0ICogZnJvbSAnLi9yZWFkb25seSdcclxuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3RlZCciLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tcmVhZG9ubHknXHJcbn0pXHJcbmNsYXNzIFJlYWRvbmx5RGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3JlYWRvbmx5Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tc2VsZWN0ZWQnXHJcbn0pXHJcbmNsYXNzIFNlbGVjdGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3NlbGVjdGVkJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3L2RpcmVjdGl2ZSc7XHJcblxyXG5jbGFzcyBTdGF0ZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZXtcclxuICAgIGNvbnN0cnVjdG9yKGF0dHJOYW1lKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXR0ck5hbWUgPSBhdHRyTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpe1xyXG4gICAgICAgIGlmIChiaW5kaW5nLmNvbXB1dGUoKSkge1xyXG4gICAgICAgICAgICBpZiAoIWVsZS5oYXNBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSwgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZWxlLmhhc0F0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZShlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLm9uSW5zZXJ0KGVsZSwgYmluZGluZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tc3R5bGUnXHJcbn0pXHJcbmNsYXNzIFN0eWxlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZyl7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gYmluZGluZy5jb21wdXRlKCk7XHJcblxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgZWxlLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgZWxlLnN0eWxlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJpbmRpbmcuc2NvcGUuJHdhdGNoKHZhbHVlLCAvXFx3Ky9pLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZS5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBvZiBuLXN0eWxlIHNob3VsZCBiZSBzdHJpbmcgb3Igb2JqZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMub25JbnNlcnQoZWxlLCBiaW5kaW5nKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL3N3aXRjaCdcclxuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gtZGVmYXVsdCdcclxuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gtd2hlbiciLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlsaXR5JztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tc3dpdGNoLWRlZmF1bHQnXHJcbn0pXHJcbmNsYXNzIFN3aXRjaERlZmF1bHREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmlzTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmF0dHJOb2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoV2hlbkRpcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0U3dpdGNoV2hlbkRpcnMoKSB7XHJcbiAgICAgICAgdmFyIHZFbGUgPSB0aGlzLmF0dHJOb2RlLm93bmVyVkVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHdoaWxlICh2RWxlLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciB3aGVuRGlycyA9IHZFbGUucHJldmlvdXNTaWJsaW5nLmdldERpcmVjdGl2ZSgnbi1zd2l0Y2gtd2hlbicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHdoZW5EaXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hXaGVuRGlycy5wdXNoKHdoZW5EaXJzWzBdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdkVsZSA9IHZFbGUucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYXRjaCgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuc3dpdGNoV2hlbkRpcnMuc29tZShmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pc01hdGNoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29tcGlsZShhdHRyTm9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBhdHRyTm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFN3aXRjaFdoZW5EaXJzKCk7XHJcbiAgICAgICAgdGhpcy5pc01hdGNoID0gdGhpcy5tYXRjaCgpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ24tc3dpdGNoLWRlZmF1bHQnKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTWF0Y2gpIHtcclxuICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoZWxlLCB0aGlzLmNvbW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zd2l0Y2hXaGVuRGlycy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uaXNNYXRjaENoYW5nZWQub24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGUoZWxlLCBiaW5kaW5nKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5pc01hdGNoLCBuZXdWYWx1ZSA9IHRoaXMubWF0Y2goKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTWF0Y2ggPSBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy5jb21tZW50LCBlbGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZS5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hXaGVuRGlycyA9IG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlsaXR5JztcclxuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbGl0eS9tZXNzYWdlJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tc3dpdGNoLXdoZW4nXHJcbn0pXHJcbmNsYXNzIFN3aXRjaFdoZW5EaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmlzTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmF0dHJOb2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoRGlyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzTWF0Y2hDaGFuZ2VkID0gbmV3IE1lc3NlbmdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRTd2l0Y2hEaXIoKSB7XHJcbiAgICAgICAgdmFyIHZFbGUgPSB0aGlzLmF0dHJOb2RlLm93bmVyVkVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIHN3aXRjaERpcnMgPSB2RWxlLnBhcmVudE5vZGUuZ2V0RGlyZWN0aXZlKCduLXN3aXRjaCcpO1xyXG5cclxuICAgICAgICBpZiAoIXN3aXRjaERpcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZSBuLXN3aXRjaCBkaXJlY3RpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3dpdGNoRGlyID0gc3dpdGNoRGlyc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbXBpbGUoYXR0ck5vZGUsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmF0dHJOb2RlID0gYXR0ck5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRTd2l0Y2hEaXIoKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLXN3aXRjaC13aGVuJyk7XHJcbiAgICAgICAgdGhpcy5pc01hdGNoID0gKGJpbmRpbmcuY29tcHV0ZSgpID09PSB0aGlzLnN3aXRjaERpci52YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc01hdGNoKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKGVsZSwgdGhpcy5jb21tZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3dpdGNoRGlyLnZhbHVlQ2hhbmdlZC5vbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYudXBkYXRlKGVsZSwgYmluZGluZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuaXNNYXRjaCxcclxuICAgICAgICAgICAgbmV3VmFsdWUgPSAoYmluZGluZy5jb21wdXRlKCkgPT09IHRoaXMuc3dpdGNoRGlyLnZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTWF0Y2ggPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc01hdGNoQ2hhbmdlZC5maXJlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlLnBhcmVudE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuY29tbWVudCwgZWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoZWxlLCB0aGlzLmNvbW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmF0dHJOb2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoRGlyID0gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uLy4uL3V0aWxpdHkvbWVzc2FnZSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLXN3aXRjaCdcclxufSlcclxuY2xhc3MgU3dpdGNoRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQgPSBuZXcgTWVzc2VuZ2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IGJpbmRpbmcuY29tcHV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gYmluZGluZy5jb21wdXRlKCk7XHJcblxyXG4gICAgICAgIGlmKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQuZmlyZSh7XHJcbiAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcclxuICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL3V0aWxpdHknO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZpZXcnO1xyXG5leHBvcnQgKiBmcm9tICcuL3BhcnNlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJztcclxuZXhwb3J0ICogZnJvbSAnLi91aSc7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XHJcblxyXG51dGlscy5pbmhlcml0KEh0bWxMZXhlciwgTGV4ZXIpO1xyXG5mdW5jdGlvbiBIdG1sTGV4ZXIob3B0aW9ucykge1xyXG4gICAgSHRtbExleGVyLnN1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XHJcbn1cclxuXHJcbkh0bWxMZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XHJcbiAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxyXG4gICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyB8fFxyXG4gICAgICAgIGNoID09PSAnQCcgfHwgY2ggPT09ICc6JyB8fCBjaCA9PT0gJyonKTtcclxufTtcclxuXHJcbkh0bWxMZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCwgY3ApIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy0nIHx8IGNoID09PSAnLic7XHJcbn07XHJcblxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLmV4cGVjdFN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHZhciBudW0gPSBzdHIubGVuZ3RoO1xyXG4gICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDw9IHRoaXMudGV4dC5sZW5ndGgpID8gKHN0ciA9PT0gdGhpcy50ZXh0LnN1YnN0cih0aGlzLmluZGV4LCBudW0pKSA6IGZhbHNlO1xyXG59O1xyXG5cclxuLy8gaHRtbCBjb21tZW50IFwiPCEtLWNvbW1lbnQtLT5cIlxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRDb21tZW50ID0gZnVuY3Rpb24gKGJlZ2luLCBlbmQpIHtcclxuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcclxuICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgIHZhciByYXdTdHJpbmcgPSBiZWdpbjtcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZyhlbmQpKSB7XHJcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBlbmQ7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcsIHN0YXJ0KTtcclxufTtcclxuXHJcbi8vIGh0bWwgdGV4dFxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgIGlmICgoY2ggPT09ICc8JyAmJiAodGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB8fCBjaDIgPT09ICcvJykgfHwgdGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgIH1cclxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgdGV4dFRhZzogdHJ1ZVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBodG1sIHRhZ1xyXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRUYWcgPSBmdW5jdGlvbiAoYmVnaW4sIGVuZCwgY2xvc2luZywgZG9jdHlwZSkge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBiZWdpbiwgdGFnOiB0cnVlLCBjbG9zaW5nOiBjbG9zaW5nLCBiZWdpbjogdHJ1ZSwgZG9jdHlwZTogZG9jdHlwZSB9KTtcclxuICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xyXG4gICAgdGhpcy5yZWFkSWRlbnQoKTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG5cclxuICAgICAgICBpZiAoIWNsb3NpbmcpIHtcclxuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICB2YXIgc3RyID0gY2ggKyBjaDI7XHJcbiAgICAgICAgICAgIGlmIChzdHIgPT09ICcvJyArIGVuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBzdHIsIHRhZzogdHJ1ZSwgY2xvc2luZzogdHJ1ZSwgZW5kOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBzdHIubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaCA9PT0gZW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBlbmQsXHJcbiAgICAgICAgICAgICAgICB0YWc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjbG9zaW5nOiAhIWRvY3R5cGUgPyB0cnVlIDogY2xvc2luZyxcclxuICAgICAgICAgICAgICAgIGVuZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc9Jykge1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6ICc9JywgZXF1YWw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuSHRtbExleGVyLnByb3RvdHlwZS5sZXggPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgdGhpcy50b2tlbnMgPSBbXTtcclxuXHJcbiAgICB2YXIgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgdmFyIGNoMyA9IHRoaXMucGVlaygyKTtcclxuICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRDb21tZW50KCc8IS0tJywgJy0tPicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJzwnICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwnLCAnPicsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwvJykgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPC8nLCAnPicsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCFET0NUWVBFJykpIHtcclxuICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8IScsICc+JywgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0RPQ1RZUEUgaXMgbm90IGFsbG93ZWQnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbn07XHJcblxyXG5leHBvcnQgeyBIdG1sTGV4ZXIgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5pbXBvcnQgeyBEb2N1bWVudEZyYWdtZW50Tm9kZSwgQ29tbWVudE5vZGUsIFRleHROb2RlLCBEb2N1bWVudFR5cGVOb2RlLCBFbGVtZW50Tm9kZSwgQXR0ck5vZGUgfSBmcm9tICcuLi9jb3JlJztcclxuXHJcbnV0aWxzLmluaGVyaXQoSHRtbFBhcnNlciwgUGFyc2VyKTtcclxuZnVuY3Rpb24gSHRtbFBhcnNlcihsZXhlciwgb3B0aW9ucykge1xyXG4gICAgSHRtbFBhcnNlci5zdXBlci5jYWxsKHRoaXMsIGxleGVyLCBvcHRpb25zKTtcclxufVxyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcclxuXHJcbiAgICB2YXIgZmFyZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudE5vZGUoKTtcclxuICAgIHZhciBkb2N0eXBlLCBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4uZG9jdHlwZSkge1xyXG4gICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N0eXBlID0gdGhpcy5kb2N0eXBlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZChkb2N0eXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgb25seSBhbGxvdyBvbmVcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBpcyBub3QgYWxsb3dlZFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBDb21tZW50Tm9kZSgpO1xyXG4gICAgICAgICAgICBjb21tZW50Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgIGZhcmdtZW50LiRwdXNoQ2hpbGQoY29tbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFRleHROb2RlKCk7XHJcbiAgICAgICAgICAgIHRleHQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZCh0ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xyXG4gICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKHRoaXMuZWxlbWVudCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcImltcG9zc2libGVcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYXJnbWVudC4kYnVpbGRTaWJsaW5nKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhcmdtZW50LmNoaWxkTm9kZXM7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5kb2N0eXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgICB2YXIgZG9jVHlwZSA9IG5ldyBEb2N1bWVudFR5cGVOb2RlKCk7XHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgIGRvY1R5cGUubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hdHRycyhkb2NUeXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgZG9jVHlwZS5jaGlsZE5vZGVzLnB1c2goYXR0cik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRvY1R5cGU7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5lbGVtZW50ID0gZnVuY3Rpb24gKHApIHtcclxuICAgIHRoaXMubmV4dCgpO1xyXG4gICAgdmFyIGVsZSA9IG5ldyBFbGVtZW50Tm9kZSgpO1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICBlbGUubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dHJzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIGVsZS4kcHVzaEF0dHJpYnV0ZShhdHRyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSAnaW5wdXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudHMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlLiRwdXNoQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09IHRva2VuLnRleHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZTtcclxufTtcclxuXHJcbkh0bWxQYXJzZXIucHJvdG90eXBlLmNoaWxkRWxlbWVudHMgPSBmdW5jdGlvbiAocCkge1xyXG4gICAgdmFyIGVsZXMgPSBbXTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgQ29tbWVudE5vZGUoKTtcclxuICAgICAgICAgICAgY29tbWVudC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICBlbGVzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFRleHROb2RlKCk7XHJcbiAgICAgICAgICAgIHRleHQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgZWxlcy5wdXNoKHRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XHJcbiAgICAgICAgICAgIGVsZXMucHVzaCh0aGlzLmVsZW1lbnQocCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZXM7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5hdHRycyA9IGZ1bmN0aW9uIChwKSB7XHJcbiAgICB2YXIgYXR0cnMgPSBbXTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhdHRyID0gbmV3IEF0dHJOb2RlKCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIGF0dHIubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICBhdHRyLm9yZ05vZGVOYW1lID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5lcXVhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmNvbnN0YW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5ub2RlVmFsdWUgPSB0b2tlbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF0dHJzLnB1c2goYXR0cik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF0dHJzO1xyXG59O1xyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuaW5kZXgrKztcclxufTtcclxuXHJcbmV4cG9ydCB7IEh0bWxQYXJzZXIgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgTGV4ZXIgfSBmcm9tICcuL2xleGVyJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5pbXBvcnQgeyBIdG1sTGV4ZXIgfSBmcm9tICcuL2h0bWwtbGV4ZXInO1xyXG5pbXBvcnQgeyBIdG1sUGFyc2VyIH0gZnJvbSAnLi9odG1sLXBhcnNlcic7XHJcblxyXG52YXIgcGFyc2VPcHRpb25zID0ge1xyXG4gICAgaXNJZGVudGlmaWVyQ29udGludWU6IGZhbHNlLFxyXG4gICAgaXNJZGVudGlmaWVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgbGl0ZXJhbHM6IHtcclxuICAgICAgICBmYWxzZTogZmFsc2UsXHJcbiAgICAgICAgbnVsbDogbnVsbCxcclxuICAgICAgICB0cnVlOiB0cnVlLFxyXG4gICAgICAgIHVuZGVmaW5lZDogdW5kZWZpbmVkXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBwYXJzZShodG1sKSB7XHJcbiAgICB2YXIgbGV4ZXIgPSBuZXcgSHRtbExleGVyKHBhcnNlT3B0aW9ucyk7XHJcbiAgICB2YXIgcGFyc2VyID0gbmV3IEh0bWxQYXJzZXIobGV4ZXIsIHBhcnNlT3B0aW9ucyk7XHJcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGh0bWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21waWxlKGh0bWwsIG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IHtcclxuICAgICAgICAgICAgZ2V0RW1iZWRUcGw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGFpbnNDb21wb25lbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlQ29tcG9uZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGFpbnNEaXJlY3RpdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlRGlyZWN0aXZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0dGluZ3MgPSB1dGlscy5tZXJnZShkZWZhdWx0cywgb3B0aW9ucyksXHJcbiAgICAgICAgYXN0Tm9kZXMgPSBwYXJzZShodG1sKTtcclxuXHJcbiAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XHJcbiAgICAgICAgYXN0Tm9kZS5jb21waWxlKHNldHRpbmdzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcclxuICAgICAgICBhc3ROb2RlLmRpcmVjdGl2ZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgZGlyZWN0aXZlLiRjb21waWxlKHNldHRpbmdzKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoc2NvcGUpIHtcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblxyXG4gICAgICAgIHNjb3BlLiQkdm5vZGVzID0gYXN0Tm9kZXM7XHJcblxyXG4gICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZS5saW5rKHNjb3BlKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5hZnRlckxpbmsoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZShleHAsIHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICBpZiAoZXhwID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBleHAgPSBleHAudHJpbSgpO1xyXG4gICAgaWYgKGV4cC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBleHAgPSBleHAucmVwbGFjZSgnJmd0OycsICc+JykucmVwbGFjZSgnJmx0OycsICc8Jyk7XHJcbiAgICB2YXIgbGV4ZXIgPSBuZXcgTGV4ZXIocGFyc2VPcHRpb25zKTtcclxuICAgIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKGxleGVyLCBwYXJzZU9wdGlvbnMpO1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBvcHRpb25zLmNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGluamVjdG9yLmNyZWF0ZUZpbHRlcihuYW1lKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGV4cCkuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvbXBpbGUsIGNvbXB1dGUsIHBhcnNlIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcblxyXG52YXIgT1BFUkFUT1JTID0ge307XHJcbnZhciBvcGVyYXRvclRleHQgPSAnKyAtICogLyAlID09PSAhPT0gPT0gIT0gPCA+IDw9ID49ICYmIHx8ICEgPSB8JztcclxudmFyIEVTQ0FQRSA9IHsgJ24nOiAnXFxuJywgJ2YnOiAnXFxmJywgJ3InOiAnXFxyJywgJ3QnOiAnXFx0JywgJ3YnOiAnXFx2JywgJ1xcJyc6ICdcXCcnLCAnXCInOiAnXCInIH07XHJcblxyXG5vcGVyYXRvclRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRvcikge1xyXG4gICAgT1BFUkFUT1JTW29wZXJhdG9yXSA9IHRydWU7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gTGV4ZXIob3B0aW9ucykge1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxufVxyXG5cclxuTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB0aGlzLnRva2VucyA9IFtdO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICcuJyAmJiB0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWROdW1iZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzKGNoLCAnKCl7fVtdLiw7Oj8nKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGNoIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjaDIgPSBjaCArIHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICB2YXIgY2gzID0gY2gyICsgdGhpcy5wZWVrKDIpO1xyXG4gICAgICAgICAgICB2YXIgb3AxID0gT1BFUkFUT1JTW2NoXTtcclxuICAgICAgICAgICAgdmFyIG9wMiA9IE9QRVJBVE9SU1tjaDJdO1xyXG4gICAgICAgICAgICB2YXIgb3AzID0gT1BFUkFUT1JTW2NoM107XHJcbiAgICAgICAgICAgIGlmIChvcDEgfHwgb3AyIHx8IG9wMykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VuID0gb3AzID8gY2gzIDogKG9wMiA/IGNoMiA6IGNoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogdG9rZW4sIG9wZXJhdG9yOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSB0b2tlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzID0gZnVuY3Rpb24gKGNoLCBjaGFycykge1xyXG4gICAgcmV0dXJuIGNoYXJzLmluZGV4T2YoY2gpICE9PSAtMTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKGkpIHtcclxuICAgIHZhciBudW0gPSBpIHx8IDE7XHJcbiAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPCB0aGlzLnRleHQubGVuZ3RoKSA/IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCArIG51bSkgOiBmYWxzZTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5pc051bWJlciA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuICgnMCcgPD0gY2ggJiYgY2ggPD0gJzknKSAmJiB0eXBlb2YgY2ggPT09ICdzdHJpbmcnO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzV2hpdGVzcGFjZSA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgLy8gSUUgdHJlYXRzIG5vbi1icmVha2luZyBzcGFjZSBhcyBcXHUwMEEwXHJcbiAgICByZXR1cm4gKGNoID09PSAnICcgfHwgY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFx0JyB8fFxyXG4gICAgICAgIGNoID09PSAnXFxuJyB8fCBjaCA9PT0gJ1xcdicgfHwgY2ggPT09ICdcXHUwMEEwJyk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNJZGVudGlmaWVyU3RhcnQgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQgP1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydChjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcclxuICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxyXG4gICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcclxuICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzSWRlbnRpZmllckNvbnRpbnVlID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlID9cclxuICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlID0gZnVuY3Rpb24gKGNoLCBjcCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmNvZGVQb2ludEF0ID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICBpZiAoY2gubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxyXG4gICAgcmV0dXJuIChjaC5jaGFyQ29kZUF0KDApIDw8IDEwKSArIGNoLmNoYXJDb2RlQXQoMSkgLSAweDM1RkRDMDA7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUucGVla011bHRpY2hhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICB2YXIgcGVlayA9IHRoaXMucGVlaygpO1xyXG4gICAgaWYgKCFwZWVrKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoO1xyXG4gICAgfVxyXG4gICAgdmFyIGNwMSA9IGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICB2YXIgY3AyID0gcGVlay5jaGFyQ29kZUF0KDApO1xyXG4gICAgaWYgKGNwMSA+PSAweEQ4MDAgJiYgY3AxIDw9IDB4REJGRiAmJiBjcDIgPj0gMHhEQzAwICYmIGNwMiA8PSAweERGRkYpIHtcclxuICAgICAgICByZXR1cm4gY2ggKyBwZWVrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzRXhwT3BlcmF0b3IgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnIHx8IHRoaXMuaXNOdW1iZXIoY2gpKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS50aHJvd0Vycm9yID0gZnVuY3Rpb24gKGVycm9yLCBzdGFydCwgZW5kKSB7XHJcbiAgICBlbmQgPSBlbmQgfHwgdGhpcy5pbmRleDtcclxuICAgIHZhciBjb2xTdHIgPSAodXRpbHMuaXNEZWZpbmVkKHN0YXJ0KSA/ICdzICcgKyBzdGFydCArICctJyArIHRoaXMuaW5kZXggKyAnIFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyhzdGFydCwgZW5kKSArICddJyA6ICcgJyArIGVuZCk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xleGVyIEVycm9yOiAnICsgZXJyb3IgKyAnIGF0IGNvbHVtbicgKyBjb2xTdHIgKyAnIGluIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXS4nKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5yZWFkTnVtYmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG51bWJlciA9ICcnO1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHV0aWxzLmxvd2VyY2FzZSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtcclxuICAgICAgICBpZiAoY2ggPT09ICcuJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSkge1xyXG4gICAgICAgICAgICBudW1iZXIgKz0gY2g7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHBlZWtDaCA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09ICdlJyAmJiB0aGlzLmlzRXhwT3BlcmF0b3IocGVla0NoKSkge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcclxuICAgICAgICAgICAgICAgIHBlZWtDaCAmJiB0aGlzLmlzTnVtYmVyKHBlZWtDaCkgJiZcclxuICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcclxuICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXHJcbiAgICAgICAgICAgICAgICAoIXBlZWtDaCB8fCAhdGhpcy5pc051bWJlcihwZWVrQ2gpKSAmJlxyXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIGV4cG9uZW50Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgdGV4dDogbnVtYmVyLFxyXG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiBOdW1iZXIobnVtYmVyKVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUucmVhZElkZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHRoaXMuaW5kZXggKz0gdGhpcy5wZWVrTXVsdGljaGFyKCkubGVuZ3RoO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy5wZWVrTXVsdGljaGFyKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCArPSBjaC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgdGV4dDogdGhpcy50ZXh0LnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KSxcclxuICAgICAgICBpZGVudGlmaWVyOiB0cnVlXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nID0gZnVuY3Rpb24gKHF1b3RlKSB7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgdGhpcy5pbmRleCsrO1xyXG4gICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgdmFyIHJhd1N0cmluZyA9IHF1b3RlO1xyXG4gICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICByYXdTdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgaWYgKGVzY2FwZSkge1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09ICd1Jykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhleCA9IHRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcclxuICAgICAgICAgICAgICAgIGlmICghaGV4Lm1hdGNoKC9bXFxkYS1mXXs0fS9pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHUnICsgaGV4ICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gNDtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGhleCwgMTYpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXAgPSBFU0NBUEVbY2hdO1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgKHJlcCB8fCBjaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gcXVvdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcclxuICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgcXVvdGUnLCBzdGFydCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBMZXhlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQge2lzRmlsdGVyfSBmcm9tICcuLi92aWV3JztcclxuXHJcbnZhciBBU1QgPSB7fTtcclxuQVNULlByb2dyYW0gPSAnUHJvZ3JhbSc7XHJcbkFTVC5FeHByZXNzaW9uU3RhdGVtZW50ID0gJ0V4cHJlc3Npb25TdGF0ZW1lbnQnO1xyXG5BU1QuQXNzaWdubWVudEV4cHJlc3Npb24gPSAnQXNzaWdubWVudEV4cHJlc3Npb24nO1xyXG5BU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uID0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbic7XHJcbkFTVC5Mb2dpY2FsRXhwcmVzc2lvbiA9ICdMb2dpY2FsRXhwcmVzc2lvbic7XHJcbkFTVC5CaW5hcnlFeHByZXNzaW9uID0gJ0JpbmFyeUV4cHJlc3Npb24nO1xyXG5BU1QuVW5hcnlFeHByZXNzaW9uID0gJ1VuYXJ5RXhwcmVzc2lvbic7XHJcbkFTVC5DYWxsRXhwcmVzc2lvbiA9ICdDYWxsRXhwcmVzc2lvbic7XHJcbkFTVC5NZW1iZXJFeHByZXNzaW9uID0gJ01lbWJlckV4cHJlc3Npb24nO1xyXG5BU1QuSWRlbnRpZmllciA9ICdJZGVudGlmaWVyJztcclxuQVNULkxpdGVyYWwgPSAnTGl0ZXJhbCc7XHJcbkFTVC5BcnJheUV4cHJlc3Npb24gPSAnQXJyYXlFeHByZXNzaW9uJztcclxuQVNULlByb3BlcnR5ID0gJ1Byb3BlcnR5JztcclxuQVNULk9iamVjdEV4cHJlc3Npb24gPSAnT2JqZWN0RXhwcmVzc2lvbic7XHJcblxyXG5mdW5jdGlvbiBBc3ROb2RlKHR5cGUpIHtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcclxufVxyXG5cclxuQXN0Tm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcclxufTtcclxuXHJcbkFzdE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGludGVybmFscykge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGludGVybmFscyk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoUHJvZ3JhbU5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBQcm9ncmFtTm9kZSgpIHtcclxuICAgIFByb2dyYW1Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlByb2dyYW0pO1xyXG59XHJcblxyXG5Qcm9ncmFtTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1swXS5jb21waWxlKHNjb3BlLCBvcHRpb25zIHx8IHt9KTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoRXhwcmVzc2lvblN0YXRlbWVudE5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSgpIHtcclxuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQpO1xyXG59XHJcblxyXG5FeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgaW50ZXJuYWxzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGludGVybmFscyk7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShsZWZ0LCByaWdodCwgb3BlcmF0b3IpIHtcclxuICAgIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG59XHJcblxyXG5Bc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciB0YXJnZXQgPSB0aGlzLmxlZnQuY29tcGlsZShzY29wZSwgb3B0aW9ucywgeyBhc3NpZ25tZW50TGVmdDogdHJ1ZSB9KTtcclxuICAgIHZhciB2YWx1ZSA9IHRoaXMucmlnaHQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB0YXJnZXQub2JqW3RhcmdldC5wcm9wXSA9IHZhbHVlO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpIHtcclxuICAgIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uKTtcclxuICAgIHRoaXMudGVzdCA9IHRlc3Q7XHJcbiAgICB0aGlzLmFsdGVybmF0ZSA9IGFsdGVybmF0ZTtcclxuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XHJcbn1cclxuXHJcbkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIGlmICh0aGlzLnRlc3QuY29tcGlsZShzY29wZSkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbHRlcm5hdGUuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChMb2dpY2FsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBMb2dpY2FsRXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XHJcbiAgICBMb2dpY2FsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcclxuICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxufVxyXG5cclxuTG9naWNhbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgcmVzdWx0O1xyXG4gICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMubGVmdC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5yaWdodC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcclxuICAgICAgICBjYXNlICcmJic6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd8fCc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChCaW5hcnlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIEJpbmFyeUV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xyXG4gICAgQmluYXJ5RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQmluYXJ5RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG59XHJcblxyXG5CaW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHJlc3VsdDtcclxuICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmxlZnQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMucmlnaHQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcblxyXG4gICAgLy8gJysnLCAnLScsICcqJywgJy8nLCAnJScsICc8JywgJz4nLCAnPD0nLCAnPj0nLCAnPT0nLCAnIT0nLCAnPT09JywgJyE9PSdcclxuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xyXG4gICAgICAgIGNhc2UgJysnOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKyByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAqIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLyByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICclJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICUgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnPCc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJz4nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc8PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc+PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc9PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICchPSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc9PT0nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyE9PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoVW5hcnlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIFVuYXJ5RXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGFyZykge1xyXG4gICAgVW5hcnlFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5VbmFyeUV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5wcmVmaXggPSB0cnVlO1xyXG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgdGhpcy5hcmcgPSBhcmc7XHJcbn1cclxuXHJcblVuYXJ5RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciByZXN1bHQsIHZhbHVlID0gdGhpcy5hcmcuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcblxyXG4gICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XHJcbiAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gLXZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICchJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gIXZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChMaXRlcmFsTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIExpdGVyYWxOb2RlKHZhbHVlKSB7XHJcbiAgICBMaXRlcmFsTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5MaXRlcmFsKTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5cclxuTGl0ZXJhbE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoQ2FsbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQ2FsbEV4cHJlc3Npb25Ob2RlKGNhbGxlZSwgYXJncykge1xyXG4gICAgQ2FsbEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkNhbGxFeHByZXNzaW9uKTtcclxuICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xyXG4gICAgdGhpcy5hcmdzID0gYXJncztcclxuICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XHJcbn1cclxuXHJcbkNhbGxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNhbGxlZS5jb21waWxlKHNjb3BlLCBvcHRpb25zLCB7IGNhbGxlZTogdHJ1ZSB9KTtcclxuICAgIHZhciBhcmdWYWx1ZXMgPSB0aGlzLmFyZ3MubWFwKGZ1bmN0aW9uIChhcmcpIHtcclxuICAgICAgICByZXR1cm4gYXJnLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsdGVyKSB7XHJcbiAgICAgICAgdmFyIGZpbHRlcklucyA9IG9wdGlvbnMuY3JlYXRlRmlsdGVyKGNvbnRleHQucHJvcCk7XHJcbiAgICAgICAgaWYgKGlzRmlsdGVyKGZpbHRlcklucykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcklucy4kZXhlY3V0ZS5hcHBseShmaWx0ZXJJbnMsIGFyZ1ZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIFwiJyArIGNvbnRleHQucHJvcCArICdcIiBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihmbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQub2JqLCBhcmdWYWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udGV4dC5wcm9wICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChNZW1iZXJFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIE1lbWJlckV4cHJlc3Npb25Ob2RlKG9iamVjdCwgcHJvcGVydHksIGNvbXB1dGVkKSB7XHJcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5NZW1iZXJFeHByZXNzaW9uKTtcclxuICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xyXG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xyXG4gICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkO1xyXG59XHJcblxyXG5NZW1iZXJFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgaW50ZXJuYWxzKSB7XHJcbiAgICB2YXIgb2JqID0gdGhpcy5vYmplY3QuY29tcGlsZShzY29wZSwgb3B0aW9ucywgaW50ZXJuYWxzKTtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9ialt0aGlzLnByb3BlcnR5LmNvbXBpbGUob2JqLCBvcHRpb25zLCBpbnRlcm5hbHMpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eS5jb21waWxlKG9iaiwgb3B0aW9ucywgaW50ZXJuYWxzKTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoSWRlbnRpZmllck5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBJZGVudGlmaWVyTm9kZShuYW1lKSB7XHJcbiAgICBJZGVudGlmaWVyTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5JZGVudGlmaWVyKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbn1cclxuXHJcbklkZW50aWZpZXJOb2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBpbnRlcm5hbHMpIHtcclxuICAgIGlmIChpbnRlcm5hbHMpIHtcclxuICAgICAgICBpZiAoaW50ZXJuYWxzLmFzc2lnbm1lbnRMZWZ0IHx8IGludGVybmFscy5jYWxsZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG9iajogc2NvcGUsXHJcbiAgICAgICAgICAgICAgICBwcm9wOiB0aGlzLm5hbWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaW50ZXJuYWxzLnByb3BlcnR5S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHJlc3VsdCA9IHNjb3BlW3RoaXMubmFtZV07XHJcbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgb3B0aW9ucy5sb2NhbHMpIHtcclxuICAgICAgICByZXN1bHQgPSBvcHRpb25zLmxvY2Fsc1t0aGlzLm5hbWVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoQXJyYXlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIEFycmF5RXhwcmVzc2lvbk5vZGUoKSB7XHJcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkFycmF5RXhwcmVzc2lvbik7XHJcbn1cclxuXHJcbnV0aWxzLmluaGVyaXQoUHJvcGVydHlOb2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gUHJvcGVydHlOb2RlKCkge1xyXG4gICAgUHJvcGVydHlOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlByb3BlcnR5KTtcclxuICAgIHRoaXMua2luZCA9ICdpbml0JztcclxuICAgIHRoaXMua2V5ID0gbnVsbDtcclxuICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgdGhpcy5jb21wdXRlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5Qcm9wZXJ0eU5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5OiB0aGlzLmtleS5jb21waWxlKHNjb3BlLCBvcHRpb25zLCB7IHByb3BlcnR5S2V5OiB0cnVlIH0pLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpXHJcbiAgICB9O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChPYmplY3RFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpIHtcclxuICAgIE9iamVjdEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk9iamVjdEV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcclxufVxyXG5cclxuT2JqZWN0RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuXHJcbiAgICB0aGlzLnByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHZhciBkZWYgPSBpdGVtLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJlc3VsdFtkZWYua2V5XSA9IGRlZi52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpc0Fzc2lnbmFibGUoYXN0KSB7XHJcbiAgICByZXR1cm4gYXN0LnR5cGUgPT09IEFTVC5JZGVudGlmaWVyIHx8IGFzdC50eXBlID09PSBBU1QuTWVtYmVyRXhwcmVzc2lvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gUGFyc2VyKGxleGVyLCBvcHRpb25zKSB7XHJcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnRocm93RXJyb3IgPSBmdW5jdGlvbiAobXNnLCB0b2tlbikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTeW50YXggRXJyb3I6IFRva2VuIFxcJycgKyB0b2tlbi50ZXh0ICsgJ1xcJycgKyBtc2cgKyAnIGF0IGNvbHVtbiAnICsgKHRva2VuLmluZGV4ICsgMSkgK1xyXG4gICAgICAgICcgb2YgdGhlIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXSBzdGFydGluZyBhdCBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcodG9rZW4uaW5kZXgpICsgJ10uJyk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xyXG5cclxuICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xyXG5cclxuICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5wcm9ncmFtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHByb2dyYW0gPSBuZXcgUHJvZ3JhbU5vZGUoKTtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XHJcbiAgICAgICAgICAgIHByb2dyYW0uYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5leHByZXNzaW9uU3RhdGVtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4cCA9IG5ldyBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSgpO1xyXG4gICAgZXhwLmFwcGVuZENoaWxkKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XHJcbiAgICByZXR1cm4gZXhwO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5maWx0ZXJDaGFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3wnKSkge1xyXG4gICAgICAgIGxlZnQgPSB0aGlzLmZpbHRlcihsZWZ0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5leHByZXNzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5hc3NpZ25tZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMudGVybmFyeSgpO1xyXG4gICAgaWYgKHRoaXMuZXhwZWN0KCc9JykpIHtcclxuICAgICAgICBpZiAoIWlzQXNzaWduYWJsZShyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFzc2lnbiBhIHZhbHVlIHRvIGEgbm9uIGwtdmFsdWUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdCA9IG5ldyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUocmVzdWx0LCB0aGlzLmFzc2lnbm1lbnQoKSwgJz0nKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnRlcm5hcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdGVzdCA9IHRoaXMubG9naWNhbE9SKCk7XHJcbiAgICB2YXIgYWx0ZXJuYXRlO1xyXG4gICAgdmFyIGNvbnNlcXVlbnQ7XHJcbiAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xyXG4gICAgICAgIGFsdGVybmF0ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnN1bWUoJzonKSkge1xyXG4gICAgICAgICAgICBjb25zZXF1ZW50ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0ZXN0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5sb2dpY2FsT1IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCd8fCcpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJ3x8JywgbGVmdCwgdGhpcy5sb2dpY2FsQU5EKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmxvZ2ljYWxBTkQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMuZXF1YWxpdHkoKTtcclxuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnJiYnKSkge1xyXG4gICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCcmJicsIGxlZnQsIHRoaXMuZXF1YWxpdHkoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuZXF1YWxpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMucmVsYXRpb25hbCgpO1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc9PScsICchPScsICc9PT0nLCAnIT09JykpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnJlbGF0aW9uYWwoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucmVsYXRpb25hbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5hZGRpdGl2ZSgpO1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMuYWRkaXRpdmUoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuYWRkaXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMubXVsdGlwbGljYXRpdmUoKTtcclxuICAgIHZhciB0b2tlbjtcclxuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJykpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLm11bHRpcGxpY2F0aXZlKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLm11bHRpcGxpY2F0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxlZnQgPSB0aGlzLnVuYXJ5KCk7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJyonLCAnLycsICclJykpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnVuYXJ5KCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnVuYXJ5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgaWYgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nLCAnIScpKSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcmltYXJ5KCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnByaW1hcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJpbWFyeTtcclxuICAgIGlmICh0aGlzLmV4cGVjdCgnKCcpKSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuZmlsdGVyQ2hhaW4oKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ1snKSkge1xyXG4gICAgICAgIHByaW1hcnkgPSB0aGlzLmFycmF5RGVjbGFyYXRpb24oKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ3snKSkge1xyXG4gICAgICAgIHByaW1hcnkgPSB0aGlzLm9iamVjdCgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubGl0ZXJhbHMuaGFzT3duUHJvcGVydHkodGhpcy5wZWVrKCkudGV4dCkpIHtcclxuICAgICAgICBwcmltYXJ5ID0gbmV3IExpdGVyYWxOb2RlKHRoaXMub3B0aW9ucy5saXRlcmFsc1t0aGlzLmNvbnN1bWUoKS50ZXh0XSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcclxuICAgICAgICBwcmltYXJ5ID0gdGhpcy5pZGVudGlmaWVyKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuY29uc3RhbnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdub3QgYSBwcmltYXJ5IGV4cHJlc3Npb24nLCB0aGlzLnBlZWsoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG5leHQ7XHJcbiAgICB3aGlsZSAoKG5leHQgPSB0aGlzLmV4cGVjdCgnKCcsICdbJywgJy4nKSkpIHtcclxuICAgICAgICBpZiAobmV4dC50ZXh0ID09PSAnKCcpIHtcclxuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5wYXJzZUFyZ3VtZW50cygpKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICdbJykge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuZXhwcmVzc2lvbigpLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICcuJykge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuaWRlbnRpZmllcigpLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJTVBPU1NJQkxFJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaW1hcnk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChiYXNlRXhwcmVzc2lvbikge1xyXG4gICAgdmFyIGFyZ3MgPSBbYmFzZUV4cHJlc3Npb25dLCBpZGVudGlmaWVycyA9IFt0aGlzLmlkZW50aWZpZXIoKV07XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcuJykpIHtcclxuICAgICAgICBpZGVudGlmaWVycy5wdXNoKHRoaXMuaWRlbnRpZmllcigpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwbHVzIG5hbWVzcGFjZVxyXG4gICAgdmFyIGVudGlyZU5hbWUgPSBpZGVudGlmaWVycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5uYW1lO1xyXG4gICAgfSkuam9pbignLicpO1xyXG5cclxuICAgIHZhciByZXN1bHQgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKG5ldyBJZGVudGlmaWVyTm9kZShlbnRpcmVOYW1lKSwgYXJncyk7XHJcblxyXG4gICAgcmVzdWx0LmZpbHRlciA9IHRydWU7XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCc6JykpIHtcclxuICAgICAgICBhcmdzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlQXJndW1lbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICcpJykge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJncztcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuaWRlbnRpZmllciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0b2tlbiA9IHRoaXMuY29uc3VtZSgpO1xyXG4gICAgaWYgKCF0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBub3QgYSB2YWxpZCBpZGVudGlmaWVyJywgdG9rZW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBJZGVudGlmaWVyTm9kZSh0b2tlbi50ZXh0KTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuY29uc3RhbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBUT0RPIGNoZWNrIHRoYXQgaXQgaXMgYSBjb25zdGFudFxyXG4gICAgcmV0dXJuIG5ldyBMaXRlcmFsTm9kZSh0aGlzLmNvbnN1bWUoKS52YWx1ZSk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmFycmF5RGVjbGFyYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJyID0gbmV3IEFycmF5RXhwcmVzc2lvbk5vZGUoKTtcclxuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICddJykge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnXScpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcnIuYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uKCkpO1xyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb25zdW1lKCddJyk7XHJcblxyXG4gICAgcmV0dXJuIGFycjtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUub2JqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHByb3BlcnRpZXMgPSBbXSwgcHJvcGVydHk7XHJcbiAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnfScpIHtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ30nKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHlOb2RlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5jb25zdGFudCgpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCc6JykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHByb3BlcnR5LmtleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoJ1snKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCdbJyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpbnZhbGlkIGtleScsIHRoaXMucGVlaygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb25zdW1lKCd9Jyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBPYmplY3RFeHByZXNzaW9uTm9kZShwcm9wZXJ0aWVzKTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuY29uc3VtZSA9IGZ1bmN0aW9uIChlMSkge1xyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRva2VuID0gdGhpcy5leHBlY3QoZTEpO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFsnICsgZTEgKyAnXScsIHRoaXMucGVlaygpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0b2tlbjtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGVla1Rva2VuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnNbMF07XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoZTEsIGUyLCBlMywgZTQpIHtcclxuICAgIHJldHVybiB0aGlzLnBlZWtBaGVhZCgwLCBlMSwgZTIsIGUzLCBlNCk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBlZWtBaGVhZCA9IGZ1bmN0aW9uIChpLCBlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IGkpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcclxuICAgICAgICB2YXIgdCA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgaWYgKHQgPT09IGUxIHx8IHQgPT09IGUyIHx8IHQgPT09IGUzIHx8IHQgPT09IGU0IHx8XHJcbiAgICAgICAgICAgICghZTEgJiYgIWUyICYmICFlMyAmJiAhZTQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmV4cGVjdCA9IGZ1bmN0aW9uIChlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5wZWVrKGUxLCBlMiwgZTMsIGU0KTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHRoaXMudG9rZW5zLnNoaWZ0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgUGFyc2VyIH07IiwiZXhwb3J0ICogZnJvbSAnLi90ZW1wbGF0ZS1jYWNoZSc7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3ZpZXcvc2VydmljZSc7XHJcbmltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9kZWNvcmF0b3Ivc2VydmljZSc7XHJcblxyXG5Ac2VydmljZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnJHRlbXBsYXRlQ2FjaGUnXHJcbn0pXHJcbmNsYXNzIFRlbXBsYXRlQ2FjaGVTZXJ2aWNlIGV4dGVuZHMgU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudHBsQ2FjaGUgPSB7fTtcclxuICAgICAgICB0aGlzLnByb21pc2VDYWNoZSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRwbEJ5VXJsKHVybCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudHBsQ2FjaGVbdXJsXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoc2VsZi50cGxDYWNoZVt1cmxdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMucHJvbWlzZUNhY2hlW3VybF0pIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9taXNlQ2FjaGVbdXJsXSA9IGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5wcm9taXNlQ2FjaGVbdXJsXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRwbENhY2hlW3VybF0gPSByZXMuZGF0YSB8fCAnJztcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRwbENhY2hlW3VybF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZUNhY2hlW3VybF07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tIFwiLi4vLi4vdmlldy9kaXJlY3RpdmVcIjtcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlXCI7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUudWknLFxuICAgIHNlbGVjdG9yOiAnbi1jb2xsYXBzZSdcbn0pXG5jbGFzcyBDb2xsYXBzZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gNDAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9ICcnO1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSAnJztcbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5oZWlnaHQgPSBlbGUuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgc2VsZi5kaXNwbGF5ID0gZWxlLnN0eWxlLmRpc3BsYXk7XG5cbiAgICAgICAgICAgIGVsZS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgZWxlLnN0eWxlLnRyYW5zaXRpb24gPSAnaGVpZ2h0ICcgKyBzZWxmLmR1cmF0aW9uICsgJ21zJztcblxuICAgICAgICAgICAgaWYoYmluZGluZy5jb21wdXRlKCkpe1xuICAgICAgICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGVsZS5zdHlsZS5oZWlnaHQgPSAwICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgZWxlLnN0eWxlLmhlaWdodCA9IHNlbGYuaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKXtcbiAgICAgICAgaWYoYmluZGluZy5jb21wdXRlKCkpe1xuICAgICAgICAgICAgdGhpcy5oaWRlKGVsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2hvdyhlbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZShlbGUpe1xuICAgICAgICBlbGUuc3R5bGUuaGVpZ2h0ID0gMCArICdweCc7XG5cbiAgICAgICAgdGhpcy5jYW5jZWxUaW1lb3V0KCk7XG5cbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gbnVsbDtcbiAgICAgICAgfSwgdGhpcy5kdXJhdGlvbiAtIDIwKTtcbiAgICB9XG5cbiAgICBzaG93KGVsZSl7XG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcblxuICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9IHRoaXMuZGlzcGxheTtcblxuICAgICAgICB0aGlzLmNhbmNlbFRpbWVvdXQoKTtcblxuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGVsZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYW5jZWxUaW1lb3V0KCkge1xuICAgICAgICBpZih0aGlzLnRpbWVvdXRJZCAhPSBudWxsKXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jb2xsYXBzZSc7IiwiZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnOyIsIlxyXG5mdW5jdGlvbiBnZXRDaGlsZE5vZGVzKG5vZGUpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMsIDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckNoaWxkTm9kZXMobm9kZSkge1xyXG4gICAgZ2V0Q2hpbGROb2Rlcyhub2RlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlZk5vZGUsIG5ld05vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUpO1xyXG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVmTm9kZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTm9kZUJldHdlZW4oYmVnaW5Ob2RlLCBlbmROb2RlKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGJlZ2luTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBnZXRDaGlsZE5vZGVzKHBhcmVudE5vZGUpO1xyXG5cclxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nID09PSBiZWdpbk5vZGUgJiYgY2hpbGQgIT09IGVuZE5vZGUpIHtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyA9PT0gZW5kTm9kZSAmJiBjaGlsZCAhPT0gYmVnaW5Ob2RlKSB7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnROb2RlQWZ0ZXIocmVmTm9kZSwgbmV3Tm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSByZWZOb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgaWYgKHBhcmVudE5vZGUubGFzdENoaWxkID09PSByZWZOb2RlKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdOb2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmTm9kZS5uZXh0U2libGluZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldENoaWxkTm9kZXMsIGNsZWFyQ2hpbGROb2RlcywgcmVwbGFjZU5vZGUsIHJlbW92ZU5vZGUsIHJlbW92ZU5vZGVCZXR3ZWVuLCBpbnNlcnROb2RlQWZ0ZXIgfTsiLCJpbXBvcnQgeyBpc09iamVjdCwgaXNBcnJheSB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxudmFyIHByb3BDaGFuZ2luZ01zZyA9IG5ldyBNZXNzZW5nZXIoKTtcclxudmFyIHByb3BDaGFuZ2VkTXNnID0gbmV3IE1lc3NlbmdlcigpO1xyXG5cclxuY2xhc3MgU2V0UHJvcGVydHlIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGRlZXBQcm94eSkge1xyXG4gICAgICAgIHRoaXMuc2VsZktleSA9ICdfX3NlbGZfXyc7XHJcbiAgICAgICAgdGhpcy5kZWVwUHJveHkgPSBkZWVwUHJveHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHRhcmdldCwga2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZktleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXRba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVlcFByb3h5ICYmIGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBQcm94eSh2YWx1ZSwgbmV3IFNldFByb3BlcnR5SGFuZGxlcih0aGlzLmRlZXBQcm94eSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh0YXJnZXQsIGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWVwUHJveHkgJiYgaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdmFsdWVbdGhpcy5zZWxmS2V5XTtcclxuXHJcbiAgICAgICAgICAgIC8vIHZhbHVlIGlzIGEgcHJveHkgcmV0dXJuIGJ5IHRoaXMgaGFuZGxlclxyXG4gICAgICAgICAgICBpZiAoc2VsZiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHNlbGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xyXG5cclxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlIHx8IChpc0FycmF5KHRhcmdldCkgJiYga2V5ID09PSAnbGVuZ3RoJykpIHtcclxuICAgICAgICAgICAgdmFyIHZhbGlkYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBwcm9wQ2hhbmdpbmdNc2cuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdmFsaWRhdGlvblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBwcm9wQ2hhbmdlZE1zZy5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBHZXRQcm9wZXJ0eUhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcE1hcHMsIGRlZXBQcm94eSkge1xyXG4gICAgICAgIHRoaXMucHJvcE1hcHMgPSBwcm9wTWFwcztcclxuICAgICAgICB0aGlzLmRlZXBQcm94eSA9IGRlZXBQcm94eTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQodGFyZ2V0LCBrZXkpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXRba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVlcFByb3h5ICYmIGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBQcm94eSh2YWx1ZSwgbmV3IEdldFByb3BlcnR5SGFuZGxlcih0aGlzLnByb3BNYXBzLCB0aGlzLmRlZXBQcm94eSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGV4aXN0ZWQgPSB0aGlzLnByb3BNYXBzLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ub2JqID09PSB0YXJnZXQgJiYgaXRlbS5wcm9wID09PSBrZXk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghZXhpc3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BNYXBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgb2JqOiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICBwcm9wOiBrZXlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNldFByb3BlcnR5SGFuZGxlciwgR2V0UHJvcGVydHlIYW5kbGVyLCBwcm9wQ2hhbmdpbmdNc2csIHByb3BDaGFuZ2VkTXNnIH0iLCJpbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9lbGUtdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gaXNNZXNzZW5nZXIob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWVzc2VuZ2VyO1xyXG59XHJcblxyXG5leHBvcnQgeyBpc01lc3Nlbmdlcn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcblxyXG5jbGFzcyBNZXNzZW5nZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGZuKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoZm4pIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFuZGxlcnNbaV0gPT09IGZuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXJlKGFyZ3MsIHNjb3BlKSB7XHJcbiAgICAgICAgdmFyIHJldHVyblZhbHVlO1xyXG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5oYW5kbGVyc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdGhpcy5oYW5kbGVyc1tpXS5jYWxsKHNjb3BlLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1lc3NlbmdlckJ1cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1lc3NlbmdlcnMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzZW5nZXJzW2VdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2VuZ2Vyc1tlXSA9IG5ldyBNZXNzZW5nZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2VuZ2Vyc1tlXTtcclxuICAgIH1cclxuXHJcbiAgICBvbihlLCBmbikge1xyXG4gICAgICAgIHRoaXMuZ2V0KGUpLm9uKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoZSwgZm4pIHtcclxuICAgICAgICB0aGlzLmdldChlKS5vZmYoZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoZSwgYXJncywgc2NvcGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoZSkuZmlyZShhcmdzLCBzY29wZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE1lc3NlbmdlciwgTWVzc2VuZ2VyQnVzIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IHByb3BDaGFuZ2luZ01zZywgcHJvcENoYW5nZWRNc2cgfSBmcm9tICcuL2hhbmRsZXInO1xyXG5cclxuY2xhc3MgUHJvcGVydHlDaGFuZ2VTdWJqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucGxhaW5NYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5yZWdleE1hcCA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbihwcm9wLCBhY3Rpb24sIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgbWFwID0gdXRpbHMuaXNSZWdFeHAocHJvcCkgPyB0aGlzLnJlZ2V4TWFwIDogdGhpcy5wbGFpbk1hcDtcclxuXHJcbiAgICAgICAgaWYgKCFtYXAuaGFzKHByb3ApKSB7XHJcbiAgICAgICAgICAgIG1hcC5zZXQocHJvcCwgW10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgYWN0aW9uLmJlZm9yZUNoYW5nZWQgPSBvcHRpb25zLmJlZm9yZUNoYW5nZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXAuZ2V0KHByb3ApLnB1c2goYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYocHJvcCwgYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIG1hcCA9IHV0aWxzLmlzUmVnRXhwKHByb3ApID8gdGhpcy5yZWdleE1hcCA6IHRoaXMucGxhaW5NYXA7XHJcblxyXG4gICAgICAgIGlmICghbWFwLmhhcyhwcm9wKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYWN0aW9ucyA9IG1hcC5nZXQocHJvcCk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gYWN0aW9ucy5pbmRleE9mKGFjdGlvbik7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXJlQ2hhbmdlZChwcm9wLCBhcmdzKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGFpbk1hcC5oYXMocHJvcCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFpbk1hcC5nZXQocHJvcCkuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5iZWZvcmVDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWdleE1hcC5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb25zLCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuLnRlc3QocHJvcCkpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmVDaGFuZ2luZyhwcm9wLCBhcmdzKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGFpbk1hcC5oYXMocHJvcCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFpbk1hcC5nZXQocHJvcCkuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmJlZm9yZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlZ2V4TWFwLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbnMsIHBhdHRlcm4pIHtcclxuICAgICAgICAgICAgaWYgKHBhdHRlcm4udGVzdChwcm9wKSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmJlZm9yZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMucGxhaW5NYXAuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2V4TWFwLmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE9iamVjdFByb3BlcnR5Q2hhbmdlU3ViamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgICAgIG9uY2hhbmdpbmcgPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3MudGFyZ2V0LCBwcm9wID0gYXJncy5rZXk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmZpcmVDaGFuZ2luZyhvYmosIHByb3AsIGFyZ3MuZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uY2hhbmdlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gYXJncy50YXJnZXQsIHByb3AgPSBhcmdzLmtleTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZmlyZUNoYW5nZWQob2JqLCBwcm9wLCBhcmdzLmRhdGEpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBwcm9wQ2hhbmdpbmdNc2cub24ob25jaGFuZ2luZyk7XHJcbiAgICAgICAgcHJvcENoYW5nZWRNc2cub24ob25jaGFuZ2VkKTtcclxuXHJcbiAgICAgICAgdGhpcy5vZmZDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHByb3BDaGFuZ2luZ01zZy5vZmYob25jaGFuZ2luZyk7XHJcbiAgICAgICAgICAgIHByb3BDaGFuZ2VkTXNnLm9mZihvbmNoYW5nZWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vYmpNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb24ob2JqLCBwcm9wLCBhY3Rpb24sIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIXRoaXMub2JqTWFwLmhhcyhvYmopKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLnNldChvYmosIG5ldyBQcm9wZXJ0eUNoYW5nZVN1YmplY3QoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9iak1hcC5nZXQob2JqKS5vbihwcm9wLCBhY3Rpb24sIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZihvYmosIHByb3AsIGFjdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLm9iak1hcC5oYXMob2JqKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9iak1hcC5nZXQob2JqKS5vZmYocHJvcCwgYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZUNoYW5nZWQob2JqLCBwcm9wLCBhcmdzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JqTWFwLmhhcyhvYmopKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLmdldChvYmopLmZpcmVDaGFuZ2VkKHByb3AsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXJlQ2hhbmdpbmcob2JqLCBwcm9wLCBhcmdzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JqTWFwLmhhcyhvYmopKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLmdldChvYmopLmZpcmVDaGFuZ2luZyhwcm9wLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9mZkNoYW5nZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub2JqTWFwLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vYmpNYXAgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQcm9wZXJ0eUNoYW5nZVN1YmplY3QsIE9iamVjdFByb3BlcnR5Q2hhbmdlU3ViamVjdCB9OyIsInZhciBkZWJ1Z01vZGUgPSB0cnVlLFxyXG4gICAgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxyXG4gICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XHJcblxyXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgYWN0aW9uLCBpZ25vcmVPd24pIHtcclxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uKGluZGV4LCBvYmpbaW5kZXhdKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChpZ25vcmVPd24gfHwgb2JqLmhhc093blByb3BlcnR5KHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKHAsIG9ialtwXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY3Rpb24ob2JqLCBvYmopO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzb21lKG9iaiwgYWN0aW9uKSB7XHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbihpbmRleCwgb2JqW2luZGV4XSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ocCwgb2JqW3BdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbihvYmosIG9iaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHkoKSB7XHJcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBvYmpJbmRleCA9IDAsIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF0sIGZpbHRlcjtcclxuXHJcbiAgICBpZiAoaXNCb29sZWFuKG9iaikpIHtcclxuICAgICAgICBkZWVwID0gb2JqO1xyXG4gICAgICAgIG9iakluZGV4Kys7XHJcbiAgICAgICAgb2JqID0gYXJndW1lbnRzW29iakluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IG9iakluZGV4ICsgMSkge1xyXG4gICAgICAgIGZpbHRlciA9IGFyZ3VtZW50c1tvYmpJbmRleCArIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgICAgICB2YXIgbmV3QXJyID0gW107XHJcbiAgICAgICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBpbmRleCwgaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGRlZXAgPyBjb3B5KGl0ZW0pIDogaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3QXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc09iamVjdChvYmopKSB7XHJcbiAgICAgICAgdmFyIG5ld09iaiA9IG9iamVjdChvYmopO1xyXG4gICAgICAgIGZvckVhY2gob2JqLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwga2V5LCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gZGVlcCA/IGNvcHkodmFsdWUpIDogdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3T2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4dGVuZCgpIHtcclxuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0gYXJndW1lbnRzW2luZGV4XTtcclxuXHJcbiAgICBpZiAoaXNCb29sZWFuKHRhcmdldCkpIHtcclxuICAgICAgICBkZWVwID0gdGFyZ2V0O1xyXG4gICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1srK2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGVlcCkge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZXJnZSgpIHtcclxuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0ge307XHJcblxyXG4gICAgaWYgKGlzQm9vbGVhbihhcmd1bWVudHNbaW5kZXhdKSkge1xyXG4gICAgICAgIGRlZXAgPSBhcmd1bWVudHNbaW5kZXhdO1xyXG4gICAgICAgIGluZGV4Kys7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlZXApIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxhaW5NZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xyXG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0YXJnZXRba2V5XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodGFyZ2V0W2tleV0pICYmIGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9iamVjdChvKSB7XHJcbiAgICBmdW5jdGlvbiBGKCkge1xyXG4gICAgfVxyXG5cclxuICAgIEYucHJvdG90eXBlID0gbztcclxuICAgIHJldHVybiBuZXcgRigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSkge1xyXG4gICAgdmFyIHByb3RvdHlwZSA9IG9iamVjdChzdXBlclR5cGUucHJvdG90eXBlKTtcclxuICAgIHByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YlR5cGU7XHJcbiAgICBzdWJUeXBlLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5oZXJpdChzdWJUeXBlLCBzdXBlclR5cGUpIHtcclxuICAgIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKTtcclxuICAgIHN1YlR5cGUuc3VwZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3VwZXJUeXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb3dlcmNhc2Uoc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b0xvd2VyQ2FzZSgpIDogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cHBlcmNhc2Uoc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b1VwcGVyQ2FzZSgpIDogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTWFwKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1hcDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0JsYW5rT2JqZWN0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWdFeHAodmFsdWUpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1NhbWUob2JqMSwgb2JqMikge1xyXG4gICAgdmFyIHNhbWUgPSAob2JqMSA9PT0gb2JqMik7XHJcblxyXG4gICAgaWYgKCFzYW1lKSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xyXG4gICAgICAgICAgICBpZiAob2JqMS5sZW5ndGggPT09IG9iajIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc09iamVjdChvYmoxKSAmJiBpc09iamVjdChvYmoyKSAmJiBnZXRQcm90b3R5cGVPZihvYmoxKSA9PT0gZ2V0UHJvdG90eXBlT2Yob2JqMikpIHtcclxuICAgICAgICAgICAgc2FtZSA9ICFzb21lKG9iajEsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltrZXldKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJ1Zyhsb2cpIHtcclxuICAgIGlmIChkZWJ1Z01vZGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWlucyhhcnIsIG9iaikge1xyXG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IG9iajtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWluc1N0cihhcnIsIHN0ciwgaWdub3JlQ2FzZSkge1xyXG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHN0ciB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2UoaXRlbSkgPT09IGxvd2VyY2FzZShzdHIpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmosIGtleSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKGtleTMsIHZhbHVlMykge1xyXG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcclxuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGFzUHJvcDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcclxuICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKGtleTMsIHZhbHVlMykge1xyXG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcclxuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGFzUHJvcCA/IHRhcmdldCA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5Ml0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uIChrZXkzLCB2YWx1ZTMpIHtcclxuICAgICAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaGFzUHJvcCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnOiBDYW4gbm90IHNldCBwcm9wZXJ0eSBvZiB1bmRlZmluZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29uY2F0KCkge1xyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBmb3JFYWNoLFxyXG4gICAgc29tZSxcclxuICAgIGNvcHksXHJcbiAgICBleHRlbmQsXHJcbiAgICBtZXJnZSxcclxuICAgIG9iamVjdCxcclxuICAgIGluaGVyaXQsXHJcbiAgICBsb3dlcmNhc2UsXHJcbiAgICB1cHBlcmNhc2UsXHJcbiAgICBpc1VuZGVmaW5lZCxcclxuICAgIGlzRGVmaW5lZCxcclxuICAgIGlzT2JqZWN0LFxyXG4gICAgaXNCbGFua09iamVjdCxcclxuICAgIGlzTnVtYmVyLFxyXG4gICAgaXNEYXRlLFxyXG4gICAgaXNGdW5jdGlvbixcclxuICAgIGlzUmVnRXhwLFxyXG4gICAgaXNCb29sZWFuLFxyXG4gICAgaXNBcnJheSxcclxuICAgIGlzU3RyaW5nLFxyXG4gICAgaXNTYW1lLFxyXG4gICAgZGVidWcsXHJcbiAgICBjb250YWlucyxcclxuICAgIGNvbnRhaW5zU3RyLFxyXG4gICAgaGFzUHJvcGVydHksXHJcbiAgICBnZXRQcm9wZXJ0eSxcclxuICAgIHNldFByb3BlcnR5LFxyXG4gICAgY29uY2F0XHJcbn07IiwiaW1wb3J0IHsgaXNNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5JztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCAqIGFzIGVsZVV0aWxzIGZyb20gJy4uL3V0aWxpdHkvZWxlLXV0aWxzJztcclxuaW1wb3J0IHsgU2V0UHJvcGVydHlIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbGl0eS9oYW5kbGVyJztcclxuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHlDaGFuZ2VTdWJqZWN0IH0gZnJvbSAnLi4vdXRpbGl0eS9zdWJqZWN0JztcclxuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcclxuaW1wb3J0IHsgY29tcGlsZSwgY29tcHV0ZSB9IGZyb20gJy4uL3BhcnNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcclxuICAgIGdldCBwcm94eSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHRoaXMsIG5ldyBTZXRQcm9wZXJ0eUhhbmRsZXIodHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1ldGEpIHtcclxuICAgICAgICBDb21wb25lbnQuY29uc3RydWN0LmNhbGwodGhpcywgbWV0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnN0cnVjdChtZXRhKSB7XHJcbiAgICAgICAgdGhpcy4kJHZub2RlcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kJG93bmVyVk5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLiQkY2hpbGREaXJlY3RpdmVzID0gW107XHJcbiAgICAgICAgdGhpcy4kJGRldGVjdFRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJCRwcm9wQ2hhbmdlZCA9IG5ldyBPYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3QoKTtcclxuXHJcbiAgICAgICAgaWYgKG1ldGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRzZXRNZXRhKG1ldGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJGhvb2tzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJlZm9yZUF0dHJDaGFuZ2U6ICcnLFxyXG4gICAgICAgICAgICBhZnRlckF0dHJDaGFuZ2U6ICcnLFxyXG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxyXG4gICAgICAgICAgICBhZnRlclZpZXdNb3VudDogJycsXHJcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgICRnZXRNZXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YSB8fCB7fTtcclxuICAgIH1cclxuXHJcbiAgICAkc2V0TWV0YSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgJGJpbmRWTm9kZSh2bm9kZSkge1xyXG4gICAgICAgIHRoaXMuJCRvd25lclZOb2RlID0gdm5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgJGhhc0F0dHIocHJvcCkge1xyXG4gICAgICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLCBwcm9wLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAkaW5pdEF0dHIocHJvcCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBwcm9wLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5iZWZvcmVBdHRyQ2hhbmdlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJlZm9yZUF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcywgcHJvcCwgdmFsdWUsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmFmdGVyQXR0ckNoYW5nZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZnRlckF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkaW5pdEF0dHJEb25lKCkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25Jbml0KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uSW5pdC5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkc2V0QXR0cihwcm9wLCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMsIHByb3AsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmJlZm9yZUF0dHJDaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlQXR0ckNoYW5nZS5jYWxsKHRoaXMsIHByb3AsIHZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLnByb3h5LCBwcm9wLCB2YWx1ZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuYWZ0ZXJBdHRyQ2hhbmdlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFmdGVyQXR0ckNoYW5nZS5jYWxsKHRoaXMsIHByb3AsIHZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRsaXN0ZW4oZSwgZm4pIHtcclxuICAgICAgICB2YXIgbWVzc2VuZ2VyID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywgZSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGlzTWVzc2VuZ2VyKG1lc3NlbmdlcikpIHtcclxuICAgICAgICAgICAgbWVzc2VuZ2VyLm9uKGZuKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSArICcgaXMgbm90IGEgZXZlbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0VGVtcGxhdGUoc3luYykge1xyXG4gICAgICAgIHZhciBtZXRhID0gdGhpcy4kZ2V0TWV0YSgpO1xyXG5cclxuICAgICAgICBpZiAoc3luYykge1xyXG4gICAgICAgICAgICByZXR1cm4gbWV0YS50ZW1wbGF0ZSB8fCAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS50ZW1wbGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobWV0YS50ZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS50ZW1wbGF0ZVVybCkpIHtcclxuICAgICAgICAgICAgICAgIGluamVjdG9yLnNlcnZpY2UoJyR0ZW1wbGF0ZUNhY2hlJykuZ2V0VHBsQnlVcmwobWV0YS50ZW1wbGF0ZVVybCkudGhlbihmdW5jdGlvbiAodHBsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cGwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICR1c2luZyhuYW1lKSB7XHJcbiAgICAgICAgdmFyIG1ldGEgPSB0aGlzLiRnZXRNZXRhKCksXHJcbiAgICAgICAgICAgIHVzaW5nID0gbWV0YS51c2luZyxcclxuICAgICAgICAgICAgc2VnbWVudHMgPSBuYW1lLnNwbGl0KCcuJyksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHNlZ21lbnRzLnBvcCgpLFxyXG4gICAgICAgICAgICBzcGFjZU5hbWUgPSBzZWdtZW50cy5qb2luKCcuJyk7XHJcblxyXG4gICAgICAgIGlmIChzcGFjZU5hbWUgJiYgdXRpbHMuaXNPYmplY3QodXNpbmcpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNvbWUodXNpbmcsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBzcGFjZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gdmFsdWUgKyAnLicgKyBjbGFzc05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgJG1ha2VDb21waWxlT3B0aW9ucygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ2V0RW1iZWRUcGw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiQkb3duZXJWTm9kZS5nZXRJbm5lclRwbCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250YWluc0NvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jb250YWluc0NvbXBvbmVudChzZWxmLiR1c2luZyhuYW1lKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZUNvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVDb21wb25lbnQoc2VsZi4kdXNpbmcobmFtZSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250YWluc0RpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jb250YWluc0RpcmVjdGl2ZShzZWxmLiR1c2luZyhuYW1lKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZURpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVEaXJlY3RpdmUoc2VsZi4kdXNpbmcobmFtZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAkaGFzVk5vZGVzKCkge1xyXG4gICAgICAgIHJldHVybiB1dGlscy5pc0FycmF5KHRoaXMuJCR2bm9kZXMpO1xyXG4gICAgfVxyXG5cclxuICAgICRmcm9tVk5vZGVzKCkge1xyXG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy4kJHZub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh2bm9kZS5nZXREb21FbGVtZW50KCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJGNsZWFyVk5vZGVzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy4kaGFzVk5vZGVzKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiQkdm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgICAgIHZub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiQkdm5vZGVzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAkcmVuZGVyKHN5bmMpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGZyYWdtZW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHN5bmMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJGhhc1ZOb2RlcygpKSB7XHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IHRoaXMuJGZyb21WTm9kZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gY29tcGlsZSh0aGlzLiRnZXRUZW1wbGF0ZShzeW5jKSwgdGhpcy4kbWFrZUNvbXBpbGVPcHRpb25zKCkpKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuJGhhc1ZOb2RlcygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNlbGYuJGZyb21WTm9kZXMoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiRnZXRUZW1wbGF0ZSgpLnRoZW4oZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGNvbXBpbGUoaHRtbCwgc2VsZi4kbWFrZUNvbXBpbGVPcHRpb25zKCkpKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZnJhZ21lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkcmVmcmVzaChzeW5jKSB7XHJcbiAgICAgICAgdGhpcy4kY2xlYXJWTm9kZXMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcmVuZGVyKHN5bmMpO1xyXG4gICAgfVxyXG5cclxuICAgICRtb3VudChzZWxlY3Rvck9yRWxlbWVudCwgc3luYykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgZWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVVdGlscy5jbGVhckNoaWxkTm9kZXMoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGlmIChzeW5jKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4kcmVuZGVyKHN5bmMpKTtcclxuICAgICAgICAgICAgc2VsZi4kYWZ0ZXJWaWV3TW91bnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJlbmRlcihzeW5jKS50aGVuKGZ1bmN0aW9uIChlbGUpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuJGFmdGVyVmlld01vdW50KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkYWZ0ZXJWaWV3TW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5hZnRlclZpZXdNb3VudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZnRlclZpZXdNb3VudC5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkdW5tb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy4kJG93bmVyVk5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiQkb3duZXJWTm9kZS4kcmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJCRvd25lclZOb2RlLnJlbW92ZURvbUVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy4kaGFzVk5vZGVzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy4kJHZub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdm5vZGUucmVtb3ZlRG9tRWxlbWVudCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiQkcGFyZW50Q29tcG9uZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kJHBhcmVudENvbXBvbmVudC4kcmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkZGV0ZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLiQkZGV0ZWN0VGltZW91dCB8fCAhdGhpcy4kJHZub2Rlcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi4kJGRldGVjdFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi4kJGRldGVjdFRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICBzZWxmLiQkdm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgICAgICAgICB2bm9kZS5kZXRlY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHZhbGlkYXRlKCkge1xyXG4gICAgICAgIHZhciBvYmosIHByb3AsIGFjdGlvbiwgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICBvYmogPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMV07XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IGFyZ3VtZW50c1syXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXJndW1lbnRzIGVycm9yJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiQkcHJvcENoYW5nZWQub24ob2JqLCBwcm9wLCBhY3Rpb24sIHtcclxuICAgICAgICAgICAgYmVmb3JlQ2hhbmdlZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLiQkcHJvcENoYW5nZWQub2ZmKG9iaiwgcHJvcCwgYWN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgICR3YXRjaCgpIHtcclxuICAgICAgICB2YXIgb2JqLCBwcm9wLCBhY3Rpb24sIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBvYmogPSB0aGlzO1xyXG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgb2JqID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzFdO1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3VtZW50cyBlcnJvcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kJHByb3BDaGFuZ2VkLm9uKG9iaiwgcHJvcCwgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi4kJHByb3BDaGFuZ2VkLm9mZihvYmosIHByb3AsIGFjdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAkcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiQkY2hpbGRDb21wb25lbnRzLmluZGV4T2YoY2hpbGQpO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgY2hpbGQuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkZGlzcG9zZShpc0Zyb21WTm9kZSkge1xyXG4gICAgICAgIC8vIHJlbW92ZSB2aXJ0dWFsIG5vZGUgZmlyc3QgaW4gY2FzZSBpdCB0cmlnZ2VycyBwYXJlbnQgY29tcG9uZW50IGRlc3Ryb3lcclxuICAgICAgICB0aGlzLiR1bm1vdW50KCk7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJCRkZXRlY3RUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLiQkZGV0ZWN0VGltZW91dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRjbGVhclZOb2RlcygpO1xyXG4gICAgICAgIHRoaXMuJCRwcm9wQ2hhbmdlZC5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIGlmIChpc0Zyb21WTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLiQkb3duZXJWTm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzID0gbnVsbDtcclxuICAgICAgICB0aGlzLiQkY2hpbGREaXJlY3RpdmVzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAkZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLiRkaXNwb3NlKCk7XHJcblxyXG4gICAgICAgIC8vIGRlc3Ryb3kgdmlydHVhbCBub2RlIGluIHRoZSBlbmQgYmVjYXVzZSBpdCBtYXkgYmluZHMgbG9naWMgYWJvdXQgZGVzdHJveVxyXG4gICAgICAgIGlmICh0aGlzLiQkb3duZXJWTm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCRvd25lclZOb2RlLmRpc3Bvc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuJCRvd25lclZOb2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGdldFBhcmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJHBhcmVudENvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICAkY3JlYXRlQ29tcG9uZW50KGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IGluamVjdG9yLmNyZWF0ZUNvbXBvbmVudChjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICAgICAgY29tcG9uZW50LiQkcGFyZW50Q29tcG9uZW50ID0gdGhpcztcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgICRldmFsKGV4cCkge1xyXG4gICAgICAgIHJldHVybiBjb21wdXRlKGV4cCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJGluaGVyaXQocGFyZW50Q21wKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc2VsZiwgdXRpbHMub2JqZWN0KHBhcmVudENtcCkpO1xyXG5cclxuICAgICAgICAvLyB0b2RvIC0gcmVzb2x2ZSBpc3N1ZSBjYWxsaW5nIHBhcmVudCBjb21wb25lbnQncyBsaWZlY3ljbGUgaG9va3NcclxuICAgICAgICB1dGlscy5mb3JFYWNoKHNlbGYuJGhvb2tzKCksIGZ1bmN0aW9uIChob29rKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmhhc093blByb3BlcnR5KGhvb2spID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNlbGZbaG9va10gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBEaXJlY3RpdmUuY29uc3RydWN0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcclxuICAgICAgICB0aGlzLiQkYmluZGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kJHZub2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm91dHB1dCA9IGZhbHNlO1xyXG4gICAgICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgICRob29rcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxyXG4gICAgICAgICAgICBvbkNvbXBpbGU6ICcnLFxyXG4gICAgICAgICAgICBvbkluc2VydDogJycsXHJcbiAgICAgICAgICAgIG9uRGV0ZWN0OiAnJyxcclxuICAgICAgICAgICAgb25VcGRhdGU6ICcnLFxyXG4gICAgICAgICAgICBvbkRlc3Ryb3k6ICcnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0TWV0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGEgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgJHNldE1ldGEodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiQkbWV0YSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgICRiaW5kVk5vZGUodm5vZGUpIHtcclxuICAgICAgICB0aGlzLiQkdm5vZGUgPSB2bm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAkc2V0QmluZGluZyhiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy4kJGJpbmRpbmcgPSBiaW5kaW5nO1xyXG4gICAgfVxyXG5cclxuICAgICRjb21waWxlKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uQ29tcGlsZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBpbGUuY2FsbCh0aGlzLCB0aGlzLiQkdm5vZGUsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkaW5zZXJ0KGVsZSwgY29tKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkluc2VydCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkluc2VydC5jYWxsKHRoaXMsIGVsZSwgdGhpcy4kJGJpbmRpbmcsIGNvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRkZXRlY3QoZWxlLCBjb20pIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGV0ZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRldGVjdC5jYWxsKHRoaXMsIGVsZSwgdGhpcy4kJGJpbmRpbmcsIGNvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy4kJGJpbmRpbmcuZGV0ZWN0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy4kdXBkYXRlKGVsZSwgY29tKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJHVwZGF0ZShlbGUsIGNvbSkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25VcGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUuY2FsbCh0aGlzLCBlbGUsIHRoaXMuJCRiaW5kaW5nLCBjb20pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkZGlzcG9zZShpc0Zyb21WTm9kZSkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzRnJvbVZOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCR2bm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiQkYmluZGluZyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgJGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy4kZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy4kJHZub2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kJHZub2RlLmRpc3Bvc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuJCR2bm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIEZpbHRlci5jb25zdHJ1Y3QuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29uc3RydWN0KCkge1xyXG4gICAgICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgICRob29rcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxyXG4gICAgICAgICAgICBvbkRlc3Ryb3k6ICcnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0TWV0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGEgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgJHNldE1ldGEodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiQkbWV0YSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgICRleGVjdXRlKCkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25FeGVjdXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkV4ZWN1dGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHkvbWVzc2FnZSc7XHJcbmltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUgfWZyb20gJy4vZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi9maWx0ZXInO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcclxuXHJcbmZ1bmN0aW9uIG5hbWVzcGFjZShucykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcclxuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50KG5hbWUsIGRlZik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXJlY3RpdmU6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xyXG4gICAgICAgICAgICAgICAgZGVmID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnNlcnQ6IGRlZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU6IGRlZlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xyXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlKG5hbWUsIGRlZik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJ2aWNlOiBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XHJcbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcclxuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2UobmFtZSwgZGVmKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWYgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkV4ZWN1dGU6IGRlZlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKG5hbWUsIGRlZik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KG5hbWUsIGRlZikge1xyXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XHJcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuY29tcG9uZW50LFxyXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihDb21wb25lbnQpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlyZWN0aXZlKG5hbWUsIGRlZikge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xyXG4gICAgICAgIGRlZiA9IHtcclxuICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgb25JbnNlcnQ6IGRlZixcclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiBkZWZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XHJcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuZGlyZWN0aXZlLFxyXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihEaXJlY3RpdmUpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyKG5hbWUsIGRlZikge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xyXG4gICAgICAgIGRlZiA9IHtcclxuICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgb25FeGVjdXRlOiBkZWZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XHJcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuZmlsdGVyLFxyXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihGaWx0ZXIpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VydmljZShuYW1lLCBkZWYpIHtcclxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xyXG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LnNlcnZpY2UsXHJcbiAgICAgICAgc3VwZXJDbGFzczogbWFrZUNvbnN0cnVjdG9yKFNlcnZpY2UpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wb25lbnQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQ29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RpcmVjdGl2ZShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEaXJlY3RpdmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRmlsdGVyKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEZpbHRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTZXJ2aWNlKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNlcnZpY2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJvb3RzdHJhcChzZWxlY3Rvck9yRWxlbWVudCkge1xyXG4gICAgdmFyIGVsZW1lbnQsIHRwbDtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZWN0b3JPckVsZW1lbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRwbCA9IGVsZW1lbnQuaW5uZXJIVE1MO1xyXG5cclxuICAgIG5ldyBDb21wb25lbnQoe1xyXG4gICAgICAgIHRlbXBsYXRlOiB0cGxcclxuICAgIH0pLiRtb3VudChlbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUNvbnN0cnVjdG9yKGNscykge1xyXG4gICAgZnVuY3Rpb24gZigpIHtcclxuICAgICAgICBjbHMuY29uc3RydWN0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZi5wcm90b3R5cGUgPSBjbHMucHJvdG90eXBlO1xyXG4gICAgcmV0dXJuIGY7XHJcbn1cclxuXHJcbmV4cG9ydCB7IG5hbWVzcGFjZSwgaW5qZWN0b3IsIGNvbXBvbmVudCwgZGlyZWN0aXZlLCBmaWx0ZXIsIHNlcnZpY2UsIGlzQ29tcG9uZW50LCBpc0RpcmVjdGl2ZSwgaXNGaWx0ZXIsIGlzU2VydmljZSwgYm9vdHN0cmFwIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHkvbWVzc2FnZSc7XHJcblxyXG52YXIgdHlwZUNvbnN0ID0ge1xyXG4gICAgZmlsdGVyOiAnZmlsdGVyJyxcclxuICAgIHNlcnZpY2U6ICdzZXJ2aWNlJyxcclxuICAgIGNvbXBvbmVudDogJ2NvbXBvbmVudCcsXHJcbiAgICBkaXJlY3RpdmU6ICdkaXJlY3RpdmUnXHJcbn07XHJcblxyXG52YXIgbmFtZVBhdHRlcm4gPSAvXlthLXpfXFwkXVtcXHdcXCQtXSovaTtcclxuXHJcbmNsYXNzIEluamVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0ge307XHJcbiAgICAgICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzID0ge307XHJcbiAgICAgICAgdGhpcy5pbnNDb250YWluZXIgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlcyhjb250cmFjdFR5cGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnNDb250YWluZXJbY29udHJhY3RUeXBlXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnNDb250YWluZXJbY29udHJhY3RUeXBlXTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcihjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGlmIChzZWxlY3Rvci5pbmRleE9mKCcuJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBjaGFyYWN0ZXIgXCIuXCInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5nZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSk7XHJcblxyXG4gICAgICAgIGlmIChtYXBwaW5nW3NlbGVjdG9yXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG1hcHBpbmdbc2VsZWN0b3JdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IG1hcHBpbmdbc2VsZWN0b3JdLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YS5uYW1lc3BhY2UgPT09IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzZWxlY3RvciArICcgaXMgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBtYXRjaGVzWzBdLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFwcGluZ1tzZWxlY3Rvcl0ucHVzaChjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJDb21wb25lbnQoc2VsZWN0b3IsIGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0eXBlQ29uc3QuY29tcG9uZW50LCBzZWxlY3RvciwgY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWlucyhjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xyXG4gICAgICAgIHZhciBzZWdtZW50cyA9IHNlbGVjdG9yLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBzZWxlY3RvciA9IHNlZ21lbnRzLnBvcCgpO1xyXG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBzZWdtZW50cy5qb2luKCcuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShtYXBwaW5nLCBzZWxlY3RvciwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBtYXBwaW5nW3NlbGVjdG9yXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zQ29tcG9uZW50KHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbnModHlwZUNvbnN0LmNvbXBvbmVudCwgc2VsZWN0b3IsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zRGlyZWN0aXZlKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbnModHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xyXG4gICAgICAgIHZhciBzZWdtZW50cyA9IHNlbGVjdG9yLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBzZWxlY3RvciA9IHNlZ21lbnRzLnBvcCgpO1xyXG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBzZWdtZW50cy5qb2luKCcuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShtYXBwaW5nLCBzZWxlY3RvciwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBtYXBwaW5nW3NlbGVjdG9yXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3RUeXBlICsgJyAnICsgc2VsZWN0b3IgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc2VsZWN0b3IgKyAnIGlzIG5vdCBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG5hbWVzcGFjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlcyA9IGNvbnN0cnVjdG9ycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYW1lc3BhY2UgJyArIG5hbWVzcGFjZXMuam9pbignfCcpICsgJyBhbGwgaGF2ZSAnICsgc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wb25lbnQoc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmNvbXBvbmVudCwgc2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpcmVjdGl2ZShzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0eXBlQ29uc3QuZGlyZWN0aXZlLCBzZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsdGVyKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5maWx0ZXIsIHNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZXJ2aWNlKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5zZXJ2aWNlLCBzZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IpIHtcclxuICAgICAgICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmdldChjb250cmFjdFR5cGUsIHNlbGVjdG9yKSwgaW5zdGFuY2U7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29udHJhY3RUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmNvbXBvbmVudDpcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVDb21wb25lbnQoY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmRpcmVjdGl2ZTpcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVEaXJlY3RpdmUoY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmZpbHRlcjpcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVGaWx0ZXIoY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LnNlcnZpY2U6XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlU2VydmljZShjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDb21wb25lbnQoY29uc3RydWN0b3IpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRDb21wb25lbnQoY29uc3RydWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRGlyZWN0aXZlKGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0RGlyZWN0aXZlKGNvbnN0cnVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZpbHRlcihjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldEZpbHRlcihjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTZXJ2aWNlKGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlLCBzZXJ2aWNlcyA9IHRoaXMuZ2V0SW5zdGFuY2VzKHR5cGVDb25zdC5zZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0U2VydmljZShjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGEubm9uU2hhcmVkKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBzZXJ2aWNlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2YgY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIHNlcnZpY2VzLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNlcnZpY2Uoc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTZXJ2aWNlKHNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXYWl0aW5nVG9FeHRlbmRzKGNvbnRyYWN0VHlwZSkge1xyXG4gICAgICAgIGlmICghdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0pIHtcclxuICAgICAgICAgICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdhaXRpbmdUb0V4dGVuZHMoY29udHJhY3RUeXBlLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTZWxlY3RvcihzZWxlY3RvciwgY29udHJhY3RUeXBlKSB7XHJcbiAgICAgICAgaWYgKG5hbWVQYXR0ZXJuLnRlc3Qoc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25zdHJ1Y3Rvck5hbWUgPSAnJztcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0gc2VsZWN0b3Iuc3BsaXQoJy0nKTtcclxuXHJcbiAgICAgICAgICAgIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSB1dGlscy51cHBlcmNhc2Uoc2VnbWVudFswXSkgKyBzZWdtZW50LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbnRyYWN0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuY29tcG9uZW50OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSAnQ29tcG9uZW50JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmRpcmVjdGl2ZTpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ0RpcmVjdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5maWx0ZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdGaWx0ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3Quc2VydmljZTpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ1NlcnZpY2UnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3JOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNlbGVjdG9yICsgJ2lzIG5vdCBhIHZhbGlkIG5hbWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRDb25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAgICAgY29uc3RydWN0b3IsXHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSA9IHRoaXMuY2hlY2tTZWxlY3RvcihzZWxlY3Rvciwgb3B0aW9ucy5jb250cmFjdFR5cGUpLFxyXG4gICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzID0gc2VsZi5nZXRXYWl0aW5nVG9FeHRlbmRzKG9wdGlvbnMuY29udHJhY3RUeXBlKSxcclxuICAgICAgICAgICAgb25Db25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25zdHJ1Y3Rvci5zdXBlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24obWV0YS5jb25zdHJ1Y3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YS5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzZW5nZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBGdW5jdGlvbignb25Db25zdHJ1Y3QnLCAnXCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uICcgKyBjb25zdHJ1Y3Rvck5hbWUgKyAnKCl7b25Db25zdHJ1Y3QuY2FsbCh0aGlzKTt9OycpKG9uQ29uc3RydWN0KTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ob3B0aW9ucy5zdXBlckNsYXNzKSkge1xyXG4gICAgICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBvcHRpb25zLnN1cGVyQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0YS5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG5cclxuICAgICAgICAvLyBhcHBseSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKG1ldGEuZXh0ZW5kcykpIHtcclxuICAgICAgICAgICAgaWYgKGluamVjdG9yLmNvbnRhaW5zKG9wdGlvbnMuY29udHJhY3RUeXBlLCBtZXRhLmV4dGVuZHMpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3VwZXJPbmUgPSBpbmplY3Rvci5nZXQob3B0aW9ucy5jb250cmFjdFR5cGUsIG1ldGEuZXh0ZW5kcyk7XHJcbiAgICAgICAgICAgICAgICByZW1haW5Db25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgY29uc3RydWN0b3IsIHN1cGVyT25lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdhaXRpbmdUb0V4dGVuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJOYW1lOiBtZXRhLmV4dGVuZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChzdXBlck9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1haW5Db25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgY29uc3RydWN0b3IsIHN1cGVyT25lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZE1ldGEobWV0YSwgc3VwZXJPbmUpIHtcclxuICAgICAgICAgICAgaWYgKHN1cGVyT25lLnByb3RvdHlwZS4kJG1ldGEgJiYgc3VwZXJPbmUucHJvdG90eXBlLiQkbWV0YS5wcm90ZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihvcHRpb25zLmNvbnRyYWN0VHlwZSArICc6ICcgKyBtZXRhLmV4dGVuZHMgKyAnIGlzIHByb3RlY3RlZCwgaXQgaXMgbm90IGFsbG93ZWQgdG8gZXh0ZW5kIScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc3VwZXJNZXRhID0gc3VwZXJPbmUucHJvdG90eXBlLiQkbWV0YTtcclxuICAgICAgICAgICAgdmFyIGNvcHkgPSB1dGlscy5jb3B5KHRydWUsIHN1cGVyTWV0YSwgZnVuY3Rpb24gKG9iaiwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIShvYmogPT09IHN1cGVyTWV0YSAmJiAoa2V5ID09PSAnY29uc3RydWN0JyB8fCBrZXkgPT09ICdtZXRob2RzJykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHRydWUsIGNvcHksIG1ldGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yLCBzdXBlck9uZSkge1xyXG4gICAgICAgICAgICBpZiAoc3VwZXJPbmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QobWV0YS5tZXRob2RzKSkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuZXh0ZW5kKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgbWV0YS5tZXRob2RzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi5yZWdpc3RlckNvbnN0cnVjdG9yKG9wdGlvbnMuY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IsIG1ldGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYW55IGNvbXBvbmVudCBleHRlbmRzIGN1cnJlbnQgY29tcG9uZW50XHJcbiAgICAgICAgICAgIHZhciB3YWl0aW5nVG9FeHRlbmRzMiA9IFtdLCBmdWxsU2VsZWN0b3IgPSBtZXRhLm5hbWVzcGFjZSArICcuJyArIHNlbGVjdG9yO1xyXG4gICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnN1cGVyTmFtZSA9PT0gZnVsbFNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jYWxsYmFjay5jYWxsKG51bGwsIGNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdhaXRpbmdUb0V4dGVuZHMyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxmLnNldFdhaXRpbmdUb0V4dGVuZHMob3B0aW9ucy5jb250cmFjdFR5cGUsIHdhaXRpbmdUb0V4dGVuZHMyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckNvbnN0cnVjdG9yKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yLCBtZXRhKSB7XHJcbiAgICAgICAgdmFyIHN1cGVyTWV0YSA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGE7XHJcblxyXG4gICAgICAgIGlmIChzdXBlck1ldGEgJiYgc3VwZXJNZXRhLnByb3RlY3RlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3RUeXBlICsgJzogJyArIG1ldGEuZXh0ZW5kcyArICcgaXMgcHJvdGVjdGVkLCBpdCBpcyBub3QgYWxsb3dlZCB0byBleHRlbmQhJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodHJ1ZSwgc3VwZXJNZXRhLCBmdW5jdGlvbiAob2JqLCBrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICEob2JqID09PSBzdXBlck1ldGEgJiYgKGtleSA9PT0gJ2NvbnN0cnVjdCcgfHwga2V5ID09PSAnbWV0aG9kcycpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWV0YSA9IHV0aWxzLm1lcmdlKHRydWUsIGNvcHksIG1ldGEpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhID0gbWV0YTtcclxuXHJcbiAgICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IGlmIGl0IGlzIGdsb2JhbFxyXG4gICAgICAgIGlmICghbWV0YS5sb2NhbCkge1xyXG4gICAgICAgICAgICBpbmplY3Rvci5yZWdpc3Rlcihjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluamVjdFNlcnZpY2VzKGluc3RhbmNlKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBtZXRhID0gaW5zdGFuY2UuJGdldE1ldGEoKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG1ldGEuaW5qZWN0KSkge1xyXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG1ldGEuaW5qZWN0LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGluc3RhbmNlLCBrZXksIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpdmF0ZUtleSA9ICckJCcgKyBrZXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VbcHJpdmF0ZUtleV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJpdmF0ZUtleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2UodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VbcHJpdmF0ZUtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudmFyIGluamVjdG9yID0gbmV3IEluamVjdG9yKCk7XHJcblxyXG5leHBvcnQgeyB0eXBlQ29uc3QsIEluamVjdG9yLCBpbmplY3RvciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQge2luamVjdG9yfSBmcm9tICcuL2luamVjdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFNlcnZpY2UuY29uc3RydWN0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcclxuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAkaG9va3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb25Jbml0OiAnJyxcclxuICAgICAgICAgICAgb25EZXN0cm95OiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgJGdldE1ldGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgICRzZXRNZXRhKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy4kJG1ldGEgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAkZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGVzdHJveSkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYXhpb3NfXzsiXSwic291cmNlUm9vdCI6IiJ9