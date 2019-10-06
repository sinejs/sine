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

/***/ "./src/ui/component/form.html":
/*!************************************!*\
  !*** ./src/ui/component/form.html ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("this is form template");

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
    _classCallCheck(this, FormComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormComponent).call(this));
  }

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
/* empty/unused harmony star reexport *//* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/ui/component/index.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2NkYXRhc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY3VzdG9tLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9kb2N0eXBlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS90ZXh0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RlY29yYXRvci9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2VtYmVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2hpZGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvaWYuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvcmVwZWF0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9kaXNhYmxlZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9yZWFkb25seS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zZWxlY3RlZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC1kZWZhdWx0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2gtd2hlbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9wYXJzZXIvaHRtbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9odG1sLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9sZXhlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvc2VydmljZS90ZW1wbGF0ZS1jYWNoZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3VpL2NvbXBvbmVudC9mb3JtLmh0bWwiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91aS9jb21wb25lbnQvZm9ybS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3VpL2NvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3VpL2RpcmVjdGl2ZS9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3VpL2RpcmVjdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3VpL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9lbGUtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9tZXNzYWdlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9zdWJqZWN0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS91dGlscy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvY29tcG9uZW50LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2luamVjdG9yLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9zZXJ2aWNlLmpzIiwid2VicGFjazovL3NpbmUvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImF4aW9zXCIsXCJjb21tb25qczJcIjpcImF4aW9zXCIsXCJhbWRcIjpcImF4aW9zXCIsXCJyb290XCI6XCJheGlvc1wifSJdLCJuYW1lcyI6WyJldmVudFRleHQiLCJkb21FdmVudHMiLCJzcGxpdCIsIkF0dHJOb2RlIiwibmFtZSIsInZhbHVlIiwiVk5vZGVUeXBlIiwiYXR0cmlidXRlIiwicXVvdGUiLCJvcmdOb2RlTmFtZSIsImlzRXZlbnQiLCJpc0JpbmRpbmciLCJpc0RvbUV2ZW50IiwiaXNEaXJlY3RpdmUiLCJkaXJlY3RpdmUiLCJvd25lclZFbGVtZW50Iiwib3duZXJFbGVtZW50Iiwib3duZXJDb21wb25lbnQiLCJiaW5kaW5nIiwiQmluZGluZyIsImtleSIsIm5vZGVWYWx1ZSIsImNvbXBpbGUiLCJvcHRpb25zIiwibm9kZU5hbWUiLCJzdGFydHNXaXRoIiwic3Vic3RyIiwidXRpbHMiLCJzZXRPdXRwdXQiLCJiaW5kIiwiY29udGFpbnNEaXJlY3RpdmUiLCJjcmVhdGVEaXJlY3RpdmUiLCIkYmluZFZOb2RlIiwib3V0cHV0IiwiRXJyb3IiLCJzY29wZSIsInNlbGYiLCJzZXRTY29wZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29tcHV0ZSIsImxvY2FscyIsIiRldmVudCIsIiRhcmdzIiwiJGVsZW1lbnQiLCIkbGlzdGVuIiwiYXJncyIsIiQkY2hpbGREaXJlY3RpdmVzIiwicHVzaCIsIiRzZXRCaW5kaW5nIiwiJGhhc0F0dHIiLCIkaW5pdEF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJ3YXRjaFByb3BzIiwiZGV0ZWN0IiwiaGFzQ2hhbmdlIiwidXBkYXRlIiwiJGRldGVjdCIsIiRzZXRBdHRyIiwiJGluc2VydCIsImlzRnJvbURpcmVjdGl2ZSIsImRlc3Ryb3kiLCIkZGVzdHJveSIsIiRkaXNwb3NlIiwiZGlzcG9zZSIsIlZOb2RlIiwiZWxlbWVudCIsInRleHQiLCJjZGF0YVNlY3Rpb24iLCJlbnRpdHlSZWZlcmVuY2UiLCJlbnRpdHkiLCJwcm9jZXNzaW5nSW5zdHJ1Y3Rpb24iLCJjb21tZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudFR5cGUiLCJkb2N1bWVudEZyYWdtZW50Iiwibm90YXRpb24iLCJjdXN0b20iLCJ0eXBlIiwibm9kZVR5cGUiLCJjaGlsZE5vZGVzIiwicGFyZW50Tm9kZSIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsIm93bmVyVkRvY3VtZW50IiwiY2hpbGQiLCJsZW5ndGgiLCJmb3JFYWNoIiwiaW5kZXgiLCIkYnVpbGRTaWJsaW5nIiwicmVtb3ZlQ2hpbGQiLCIkcmVtb3ZlIiwiJGNsZWFyUGFyZW50QW5kU2libGluZyIsImNvbXBpbGVPcHRpb25zIiwicmVmQ2hpbGQiLCJuZXdDaGlsZCIsImluZGV4T2YiLCJzcGxpY2UiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsInJlc3VsdCIsIm1hcCIsImRpcmVjdGl2ZXMiLCJpdGVtIiwiY29uY2F0IiwibGluayIsImFmdGVyTGluayIsIkV4cE5vZGUiLCJvbGRWYWx1ZSIsIm9ialByb3BzIiwiUHJveHkiLCJHZXRQcm9wZXJ0eUhhbmRsZXIiLCJwcm9wcyIsImlzRXhwIiwic2VnbWVudHMiLCJyaWdodFN0ciIsImNoYW5nZSIsIk1lc3NlbmdlciIsImV4cCIsImxlZnRTdHIiLCJwYXR0ZXJuIiwibGFzdEluZGV4IiwibWF0Y2giLCJleGVjIiwic3Vic3RyaW5nIiwic2VnbWVudCIsImFjdGlvbiIsImdldFByb3BzIiwib2JqUHJvcCIsIiR3YXRjaCIsIm9iaiIsInByb3AiLCJmaXJlIiwib24iLCJzb21lIiwiQ0RhdGFTZWN0aW9uTm9kZSIsIkNvbW1lbnROb2RlIiwiY3JlYXRlQ29tbWVudCIsIkN1c3RvbU5vZGUiLCJsaW5rZXIiLCJjYWxsIiwib25JbnNlcnQiLCJvbkRldGVjdCIsIm9uSGFzQ2hhbmdlIiwib25VcGRhdGUiLCJvbkRlc3Ryb3kiLCJEb2N1bWVudFR5cGVOb2RlIiwiRG9jdW1lbnROb2RlIiwiRWxlbWVudE5vZGUiLCJhdHRyaWJ1dGVzIiwiY29tcG9uZW50Iiwic2VsZkNsb3NlZCIsImlzQ29tcG9uZW50IiwiYXR0ciIsInRhcmdldCIsIm1hdGNoZXMiLCJmaWx0ZXIiLCJiZWxvbmdUbyIsInNldFZhbHVlIiwiYXR0clRwbCIsImNoaWxkVHBsIiwiZ2V0T3V0ZXJUcGwiLCJ0cGwiLCJwYXJzZSIsInZub2RlIiwiY2xlYXJDaGlsZE5vZGVzIiwiJCRtZXRhIiwic2VsZWN0b3IiLCJjb250YWluc0NvbXBvbmVudCIsImNyZWF0ZUVsZW1lbnQiLCIkY3JlYXRlQ29tcG9uZW50IiwiJGluaXRBdHRyRG9uZSIsIiRtb3VudCIsImlzRnJvbUNvbXBvbmVudCIsInJlbW92ZURvbUVsZW1lbnQiLCJlbGVVdGlscyIsIkRvY3VtZW50RnJhZ21lbnROb2RlIiwiVGV4dE5vZGUiLCJyZW5kZXIiLCJjcmVhdGVUZXh0Tm9kZSIsIm1ldGEiLCJpbmplY3RvciIsInJlZ2lzdGVyQ29uc3RydWN0b3IiLCJ0eXBlQ29uc3QiLCJzZXJ2aWNlIiwiQmluZERpcmVjdGl2ZSIsIm5hbWVzcGFjZSIsImVsZSIsImlubmVyVGV4dCIsIkRpcmVjdGl2ZSIsIkVtYmVkRGlyZWN0aXZlIiwiYXR0ck5vZGUiLCJlbWJlZFRwbCIsImdldEVtYmVkVHBsIiwic2V0SW5uZXJUcGwiLCJIaWRlRGlyZWN0aXZlIiwic3R5bGUiLCJkaXNwbGF5IiwiSWZEaXJlY3RpdmUiLCJNb2RlbERpcmVjdGl2ZSIsImNvbSIsIm5ld3ZhbHVlIiwiUmVwZWF0RGlyZWN0aXZlIiwiaXRlbUV4cCIsIml0ZW1zRXhwIiwiaXRlbVRlbXBsYXRlIiwiZGF0YUl0ZW1zIiwiY21wSXRlbXMiLCJoZWFkZXIiLCJmb290ZXIiLCJhcmciLCJlbGVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiY3JlYXRlQ3VzdG9tIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaXRlbXMiLCIkZXZhbCIsInNldERhdGFJdGVtcyIsInJlcGxhY2VDaGlsZCIsImNoaWxkU2NvcGUiLCJjbXBJdGVtIiwiZGF0YUl0ZW0iLCJmaWx0ZXJzIiwibmV3Q21wSXRlbXMiLCJnZXRDbXBJdGVtIiwiQ29tcG9uZW50IiwidGVtcGxhdGUiLCIkaW5oZXJpdCIsIiRyZW5kZXIiLCJyZXBlYXRJdGVtIiwiU2hvd0RpcmVjdGl2ZSIsIkNoZWNrZWREaXJlY3RpdmUiLCJTdGF0ZURpcmVjdGl2ZSIsIkRpc2FibGVkRGlyZWN0aXZlIiwiUmVhZG9ubHlEaXJlY3RpdmUiLCJTZWxlY3RlZERpcmVjdGl2ZSIsImF0dHJOYW1lIiwiaGFzQXR0cmlidXRlIiwiU3R5bGVEaXJlY3RpdmUiLCJTd2l0Y2hEZWZhdWx0RGlyZWN0aXZlIiwiaXNNYXRjaCIsInN3aXRjaFdoZW5EaXJzIiwidkVsZSIsIndoZW5EaXJzIiwiZ2V0RGlyZWN0aXZlIiwiaW5pdFN3aXRjaFdoZW5EaXJzIiwiaXNNYXRjaENoYW5nZWQiLCJuZXdWYWx1ZSIsIlN3aXRjaFdoZW5EaXJlY3RpdmUiLCJzd2l0Y2hEaXIiLCJzd2l0Y2hEaXJzIiwiaW5pdFN3aXRjaERpciIsInZhbHVlQ2hhbmdlZCIsIlN3aXRjaERpcmVjdGl2ZSIsIkh0bWxMZXhlciIsIkxleGVyIiwicHJvdG90eXBlIiwiaXNWYWxpZElkZW50aWZpZXJTdGFydCIsImNoIiwiaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSIsImNwIiwiaXNOdW1iZXIiLCJleHBlY3RTdHJpbmciLCJzdHIiLCJudW0iLCJyZWFkQ29tbWVudCIsImJlZ2luIiwiZW5kIiwic3RhcnQiLCJzdHJpbmciLCJyYXdTdHJpbmciLCJjaGFyQXQiLCJ0b2tlbnMiLCJ0aHJvd0Vycm9yIiwicmVhZFRleHQiLCJjaDIiLCJwZWVrIiwiaXNJZGVudGlmaWVyU3RhcnQiLCJ0ZXh0VGFnIiwicmVhZFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwicmVhZElkZW50IiwicGVla011bHRpY2hhciIsInJlYWRTdHJpbmciLCJpc1doaXRlc3BhY2UiLCJlcXVhbCIsImxleCIsImFsbG93RG9jVHlwZSIsImNoMyIsIkh0bWxQYXJzZXIiLCJQYXJzZXIiLCJsZXhlciIsImZhcmdtZW50IiwidG9rZW4iLCJjdXJyZW50IiwiJHB1c2hDaGlsZCIsIm5leHQiLCJkb2NUeXBlIiwiaWRlbnRpZmllciIsImF0dHJzIiwicCIsIiRwdXNoQXR0cmlidXRlIiwiY2hpbGRFbGVtZW50cyIsImVsZXMiLCJjb25zdGFudCIsInBhcnNlT3B0aW9ucyIsImlzSWRlbnRpZmllckNvbnRpbnVlIiwibGl0ZXJhbHMiLCJ1bmRlZmluZWQiLCJodG1sIiwicGFyc2VyIiwiZGVmYXVsdHMiLCJjcmVhdGVDb21wb25lbnQiLCJzZXR0aW5ncyIsImFzdE5vZGVzIiwiYXN0Tm9kZSIsIiRjb21waWxlIiwiJCR2bm9kZXMiLCJub2RlIiwidHJpbSIsInJlcGxhY2UiLCJjcmVhdGVGaWx0ZXIiLCJPUEVSQVRPUlMiLCJvcGVyYXRvclRleHQiLCJFU0NBUEUiLCJvcGVyYXRvciIsInJlYWROdW1iZXIiLCJpcyIsIm9wMSIsIm9wMiIsIm9wMyIsImNoYXJzIiwiaSIsImNvZGVQb2ludEF0IiwiY2hhckNvZGVBdCIsImNwMSIsImNwMiIsImlzRXhwT3BlcmF0b3IiLCJlcnJvciIsImNvbFN0ciIsIm51bWJlciIsInBlZWtDaCIsIk51bWJlciIsInNsaWNlIiwiZXNjYXBlIiwiaGV4IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJyZXAiLCJBU1QiLCJQcm9ncmFtIiwiRXhwcmVzc2lvblN0YXRlbWVudCIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uIiwiTG9naWNhbEV4cHJlc3Npb24iLCJCaW5hcnlFeHByZXNzaW9uIiwiVW5hcnlFeHByZXNzaW9uIiwiQ2FsbEV4cHJlc3Npb24iLCJNZW1iZXJFeHByZXNzaW9uIiwiSWRlbnRpZmllciIsIkxpdGVyYWwiLCJBcnJheUV4cHJlc3Npb24iLCJQcm9wZXJ0eSIsIk9iamVjdEV4cHJlc3Npb24iLCJBc3ROb2RlIiwiaW50ZXJuYWxzIiwiUHJvZ3JhbU5vZGUiLCJFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSIsIkFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSIsImxlZnQiLCJyaWdodCIsImFzc2lnbm1lbnRMZWZ0IiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSIsInRlc3QiLCJhbHRlcm5hdGUiLCJjb25zZXF1ZW50IiwiTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsIkJpbmFyeUV4cHJlc3Npb25Ob2RlIiwiVW5hcnlFeHByZXNzaW9uTm9kZSIsInByZWZpeCIsIkxpdGVyYWxOb2RlIiwiQ2FsbEV4cHJlc3Npb25Ob2RlIiwiY2FsbGVlIiwiY29udGV4dCIsImFyZ1ZhbHVlcyIsImZpbHRlcklucyIsImlzRmlsdGVyIiwiJGV4ZWN1dGUiLCJhcHBseSIsImZuIiwiTWVtYmVyRXhwcmVzc2lvbk5vZGUiLCJvYmplY3QiLCJwcm9wZXJ0eSIsImNvbXB1dGVkIiwiSWRlbnRpZmllck5vZGUiLCJwcm9wZXJ0eUtleSIsIkFycmF5RXhwcmVzc2lvbk5vZGUiLCJQcm9wZXJ0eU5vZGUiLCJraW5kIiwiT2JqZWN0RXhwcmVzc2lvbk5vZGUiLCJwcm9wZXJ0aWVzIiwiZGVmIiwiaXNBc3NpZ25hYmxlIiwiYXN0IiwibXNnIiwicHJvZ3JhbSIsImV4cHJlc3Npb25TdGF0ZW1lbnQiLCJleHBlY3QiLCJmaWx0ZXJDaGFpbiIsImV4cHJlc3Npb24iLCJhc3NpZ25tZW50IiwidGVybmFyeSIsImxvZ2ljYWxPUiIsImNvbnN1bWUiLCJsb2dpY2FsQU5EIiwiZXF1YWxpdHkiLCJyZWxhdGlvbmFsIiwiYWRkaXRpdmUiLCJtdWx0aXBsaWNhdGl2ZSIsInVuYXJ5IiwicHJpbWFyeSIsImFycmF5RGVjbGFyYXRpb24iLCJoYXNPd25Qcm9wZXJ0eSIsInBhcnNlQXJndW1lbnRzIiwiYmFzZUV4cHJlc3Npb24iLCJpZGVudGlmaWVycyIsImVudGlyZU5hbWUiLCJqb2luIiwicGVla1Rva2VuIiwiYXJyIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJwZWVrQWhlYWQiLCJ0Iiwic2hpZnQiLCJUZW1wbGF0ZUNhY2hlU2VydmljZSIsInRwbENhY2hlIiwicHJvbWlzZUNhY2hlIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiU2VydmljZSIsIkZvcm1Db21wb25lbnQiLCJDb2xsYXBzZURpcmVjdGl2ZSIsImR1cmF0aW9uIiwiaGVpZ2h0IiwidGltZW91dElkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xpZW50SGVpZ2h0Iiwib3ZlcmZsb3ciLCJ0cmFuc2l0aW9uIiwiaGlkZSIsInNob3ciLCJjYW5jZWxUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImdldENoaWxkTm9kZXMiLCJBcnJheSIsInJlcGxhY2VOb2RlIiwicmVmTm9kZSIsIm5ld05vZGUiLCJyZW1vdmVOb2RlIiwicmVtb3ZlTm9kZUJldHdlZW4iLCJiZWdpbk5vZGUiLCJlbmROb2RlIiwiaW5zZXJ0Tm9kZUFmdGVyIiwicHJvcENoYW5naW5nTXNnIiwicHJvcENoYW5nZWRNc2ciLCJTZXRQcm9wZXJ0eUhhbmRsZXIiLCJkZWVwUHJveHkiLCJzZWxmS2V5IiwiaXNPYmplY3QiLCJpc0FycmF5IiwidmFsaWRhdGlvbiIsImlzVmFsaWQiLCJwcm9wTWFwcyIsImV4aXN0ZWQiLCJpc01lc3NlbmdlciIsImhhbmRsZXJzIiwicmV0dXJuVmFsdWUiLCJNZXNzZW5nZXJCdXMiLCJtZXNzZW5nZXJzIiwib2ZmIiwiUHJvcGVydHlDaGFuZ2VTdWJqZWN0IiwicGxhaW5NYXAiLCJNYXAiLCJyZWdleE1hcCIsImhhcyIsInNldCIsImJlZm9yZUNoYW5nZWQiLCJhY3Rpb25zIiwiY2xlYXIiLCJPYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3QiLCJvbmNoYW5naW5nIiwiZmlyZUNoYW5naW5nIiwib25jaGFuZ2VkIiwiZmlyZUNoYW5nZWQiLCJvZmZDaGFuZ2UiLCJvYmpNYXAiLCJkZWJ1Z01vZGUiLCJ0b1N0cmluZyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiaWdub3JlT3duIiwiY29weSIsImRlZXAiLCJvYmpJbmRleCIsImFyZ3VtZW50cyIsImlzQm9vbGVhbiIsIm5ld0FyciIsIm5ld09iaiIsImV4dGVuZCIsImRlZXBNZXJnZSIsInBsYWluTWVyZ2UiLCJtZXJnZSIsInNvdXJjZSIsIm8iLCJGIiwiaW5oZXJpdFByb3RvdHlwZSIsInN1YlR5cGUiLCJzdXBlclR5cGUiLCJjb25zdHJ1Y3RvciIsImluaGVyaXQiLCJsb3dlcmNhc2UiLCJpc1N0cmluZyIsInRvTG93ZXJDYXNlIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJpc1VuZGVmaW5lZCIsImlzRGVmaW5lZCIsImlzTWFwIiwiaXNCbGFua09iamVjdCIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc1JlZ0V4cCIsImlzU2FtZSIsIm9iajEiLCJvYmoyIiwic2FtZSIsImRlYnVnIiwibG9nIiwiY29uc29sZSIsImNvbnRhaW5zIiwiY29udGFpbnNTdHIiLCJpZ25vcmVDYXNlIiwiaGFzUHJvcGVydHkiLCJrZXkyIiwiaGFzUHJvcCIsImtleXMiLCJrZXkzIiwidmFsdWUzIiwiZ2V0UHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImNvbnN0cnVjdCIsImJlZm9yZUF0dHJDaGFuZ2UiLCJhZnRlckF0dHJDaGFuZ2UiLCJvbkluaXQiLCJhZnRlclZpZXdNb3VudCIsIiQkb3duZXJWTm9kZSIsInByb3h5IiwibWVzc2VuZ2VyIiwic3luYyIsIiRnZXRNZXRhIiwidGVtcGxhdGVVcmwiLCJnZXRUcGxCeVVybCIsInVzaW5nIiwiY2xhc3NOYW1lIiwicG9wIiwic3BhY2VOYW1lIiwiZ2V0SW5uZXJUcGwiLCIkdXNpbmciLCJnZXREb21FbGVtZW50IiwiJGhhc1ZOb2RlcyIsIiRmcm9tVk5vZGVzIiwiJGdldFRlbXBsYXRlIiwiJG1ha2VDb21waWxlT3B0aW9ucyIsIiRjbGVhclZOb2RlcyIsInNlbGVjdG9yT3JFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIiRhZnRlclZpZXdNb3VudCIsIiQkcGFyZW50Q29tcG9uZW50IiwiJHJlbW92ZUNoaWxkIiwiJCRkZXRlY3RUaW1lb3V0IiwiJCRwcm9wQ2hhbmdlZCIsIiQkY2hpbGRDb21wb25lbnRzIiwiaXNGcm9tVk5vZGUiLCIkdW5tb3VudCIsInBhcmVudENtcCIsInNldFByb3RvdHlwZU9mIiwiJGhvb2tzIiwiaG9vayIsIiRzZXRNZXRhIiwiaW5qZWN0U2VydmljZXMiLCJvbkNvbXBpbGUiLCIkJHZub2RlIiwiJCRiaW5kaW5nIiwiJHVwZGF0ZSIsIkZpbHRlciIsIm9uRXhlY3V0ZSIsIm5zIiwibWV0aG9kcyIsImJ1aWxkQ29uc3RydWN0b3IiLCJjb250cmFjdFR5cGUiLCJzdXBlckNsYXNzIiwibWFrZUNvbnN0cnVjdG9yIiwiaXNTZXJ2aWNlIiwiYm9vdHN0cmFwIiwiaW5uZXJIVE1MIiwiY2xzIiwiZiIsIm5hbWVQYXR0ZXJuIiwiSW5qZWN0b3IiLCJjb250YWluZXIiLCJ3YWl0aW5nVG9FeHRlbmRzIiwiaW5zQ29udGFpbmVyIiwibWFwcGluZyIsImdldE1hcHBpbmciLCJyZWdpc3RlciIsImNvbnN0cnVjdG9ycyIsIm5hbWVzcGFjZXMiLCJpbnN0YW5jZSIsImNyZWF0ZVNlcnZpY2UiLCJnZXRDb21wb25lbnQiLCJnZXRGaWx0ZXIiLCJzZXJ2aWNlcyIsImdldEluc3RhbmNlcyIsImdldFNlcnZpY2UiLCJub25TaGFyZWQiLCJjb25zdHJ1Y3Rvck5hbWUiLCJjaGVja1NlbGVjdG9yIiwiZ2V0V2FpdGluZ1RvRXh0ZW5kcyIsIm9uQ29uc3RydWN0IiwiRnVuY3Rpb24iLCJzdXBlck9uZSIsInJlbWFpbkNvbnN0cnVjdG9yIiwic3VwZXJOYW1lIiwiY2FsbGJhY2siLCJleHRlbmRNZXRhIiwic3VwZXJNZXRhIiwid2FpdGluZ1RvRXh0ZW5kczIiLCJmdWxsU2VsZWN0b3IiLCJzZXRXYWl0aW5nVG9FeHRlbmRzIiwibG9jYWwiLCJpbmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIs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QmU7QUFDUCxhQUFPLEtBQUtxQixNQUFMLElBQWUsRUFBdEI7QUFDSDtBQWxCTDtBQUFBO0FBQUEsNkJBb0JhbkssS0FwQmIsRUFvQm9CO0FBQ1osV0FBS21LLE1BQUwsR0FBY25LLEtBQWQ7QUFDSDtBQXRCTDtBQUFBO0FBQUEsK0JBd0JlO0FBQ1AsVUFBSXNCLHlEQUFBLENBQWlCLEtBQUt3SCxTQUF0QixDQUFKLEVBQXNDO0FBQ2xDLGFBQUtBLFNBQUwsQ0FBZUwsSUFBZixDQUFvQixJQUFwQjtBQUNIO0FBQ0o7QUE1Qkw7QUFBQTtBQUFBLGdDQUt1QjtBQUNmeUMsd0RBQVEsQ0FBQ3dhLGNBQVQsQ0FBd0IsSUFBeEI7QUFDSDtBQVBMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7QUNIQSxtRCIsImZpbGUiOiJzaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYXhpb3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiYXhpb3NcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic2luZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImF4aW9zXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzaW5lXCJdID0gZmFjdG9yeShyb290W1wiYXhpb3NcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2F4aW9zX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gJy4vYmluZGluZyc7XHJcblxyXG4vLyAvLyBXaW5kb3cgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWxvYWQnOlxyXG4vLyBjYXNlICdvbi11bmxvYWQnOlxyXG4vLyAvLyBGb3JtIEVsZW1lbnQgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWNoYW5nZSc6XHJcbi8vIGNhc2UgJ29uLXN1Ym1pdCc6XHJcbi8vIGNhc2UgJ29uLXJlc2V0JzpcclxuLy8gY2FzZSAnb24tc2VsZWN0JzpcclxuLy8gY2FzZSAnb24tYmx1cic6XHJcbi8vIGNhc2UgJ29uLWZvY3VzJzpcclxuLy8gLy8gSW1hZ2UgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWFib3J0JzpcclxuLy8gLy8gS2V5Ym9hcmQgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWtleWRvd24nOlxyXG4vLyBjYXNlICdvbi1rZXlwcmVzcyc6XHJcbi8vIGNhc2UgJ29uLWtleXVwJzpcclxuLy8gLy8gTW91c2UgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWNsaWNrJzpcclxuLy8gY2FzZSAnb24tZGJsY2xpY2snOlxyXG4vLyBjYXNlICdvbi1tb3VzZWRvd24nOlxyXG4vLyBjYXNlICdvbi1tb3VzZW1vdmUnOlxyXG4vLyBjYXNlICdvbi1tb3VzZW91dCc6XHJcbi8vIGNhc2UgJ29uLW1vdXNlb3Zlcic6XHJcbi8vIGNhc2UgJ29uLW1vdXNldXAnOlxyXG52YXIgZXZlbnRUZXh0ID0gJ2xvYWQgdW5sb2FkIGNoYW5nZSBzdWJtaXQgcmVzZXQgc2VsZWN0IGJsdXIgZm9jdXMgYWJvcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwJztcclxudmFyIGRvbUV2ZW50cyA9IGV2ZW50VGV4dC5zcGxpdCgnICcpO1xyXG5cclxuY2xhc3MgQXR0ck5vZGUgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5hdHRyaWJ1dGUsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnF1b3RlID0gJ1wiJztcclxuICAgICAgICB0aGlzLm9yZ05vZGVOYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmlzRXZlbnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzQmluZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNEb21FdmVudCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNEaXJlY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vd25lclZFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm93bmVyRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gbmV3IEJpbmRpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBiZWxvbmdUbyhrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmdOb2RlTmFtZSA9PT0ga2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmNvbXBpbGUodGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmlzRXZlbnQgPSB0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ0AnKTtcclxuICAgICAgICB0aGlzLmlzQmluZGluZyA9IHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnOicpO1xyXG4gICAgICAgIHRoaXMuaXNEaXJlY3RpdmUgPSB0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJyonKTtcclxuICAgICAgICBpZiAodGhpcy5pc0V2ZW50IHx8IHRoaXMuaXNCaW5kaW5nIHx8IHRoaXMuaXNEaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlTmFtZSA9IHRoaXMubm9kZU5hbWUuc3Vic3RyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzRG9tRXZlbnQgPSB1dGlscy5jb250YWlucyhkb21FdmVudHMsIHRoaXMubm9kZU5hbWUpO1xyXG4gICAgICAgIHRoaXMuYmluZGluZy5zZXRPdXRwdXQodGhpcy5pc0V2ZW50KTtcclxuICAgICAgICB0aGlzLmJpbmRpbmcuYmluZCh0aGlzLm5vZGVWYWx1ZSwgdGhpcy5pc0V2ZW50IHx8IHRoaXMuaXNCaW5kaW5nIHx8IHRoaXMuaXNEaXJlY3RpdmUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0RpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5jb250YWluc0RpcmVjdGl2ZSh0aGlzLm5vZGVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBvcHRpb25zLmNyZWF0ZURpcmVjdGl2ZSh0aGlzLm5vZGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRiaW5kVk5vZGUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRpbmcuc2V0T3V0cHV0KHRoaXMuZGlyZWN0aXZlLm91dHB1dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpcmVjdGl2ZSAnICsgdGhpcy5ub2RlTmFtZSArICcgaXMgbm90IGRlZmluZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaW5rKHNjb3BlLCBvd25lckVsZW1lbnQsIG93bmVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy5vd25lckVsZW1lbnQgPSBvd25lckVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudCA9IG93bmVyQ29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMuYmluZGluZy5zZXRTY29wZShzY29wZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEb21FdmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5vZGVOYW1lLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYmluZGluZy5jb21wdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQ6IGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYXJnczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtZW50OiBzZWxmLm93bmVyRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvd25lckNvbXBvbmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBvd25lckNvbXBvbmVudC4kbGlzdGVuKHRoaXMubm9kZU5hbWUsIGZ1bmN0aW9uIChlLCBhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5iaW5kaW5nLmNvbXB1dGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudDogZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhcmdzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6IHNlbGYub3duZXJFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHNjb3BlLiQkY2hpbGREaXJlY3RpdmVzLnB1c2godGhpcy5kaXJlY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJHNldEJpbmRpbmcodGhpcy5iaW5kaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvd25lckNvbXBvbmVudCAhPSBudWxsICYmIG93bmVyQ29tcG9uZW50LiRoYXNBdHRyKHRoaXMubm9kZU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBvd25lckNvbXBvbmVudC4kaW5pdEF0dHIodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5vd25lckVsZW1lbnQsIHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vd25lckVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJpbmRpbmcud2F0Y2hQcm9wcyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRldGVjdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGV0ZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kZGV0ZWN0KHRoaXMub3duZXJFbGVtZW50LCB0aGlzLm93bmVyQ29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQ2hhbmdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJpbmRpbmcuZGV0ZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm93bmVyQ29tcG9uZW50ICE9IG51bGwgJiYgdGhpcy5vd25lckNvbXBvbmVudC4kaGFzQXR0cih0aGlzLm5vZGVOYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyQ29tcG9uZW50LiRzZXRBdHRyKHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLm93bmVyRWxlbWVudCwgdGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJFbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3duZXJFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnICYmIHRoaXMubm9kZU5hbWUgPT09ICd2YWx1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm93bmVyRWxlbWVudC52YWx1ZSA9IHRoaXMuYmluZGluZy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZnRlckxpbmsoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRpbnNlcnQodGhpcy5vd25lckVsZW1lbnQsIHRoaXMub3duZXJDb21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXJlY3RpdmVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZSA9PSBudWxsID8gW10gOiBbdGhpcy5kaXJlY3RpdmVdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE91dGVyVHBsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9yZ05vZGVOYW1lICsgKHRoaXMubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB0aGlzLnF1b3RlICsgdGhpcy5ub2RlVmFsdWUgKyB0aGlzLnF1b3RlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5uZXJUcGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3JnTm9kZU5hbWUgKyAodGhpcy5ub2RlVmFsdWUgPT0gbnVsbCA/ICcnIDogKCc9JyArIHRoaXMucXVvdGUgKyB0aGlzLm5vZGVWYWx1ZSArIHRoaXMucXVvdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKGlzRnJvbURpcmVjdGl2ZSkge1xyXG4gICAgICAgIGlmIChpc0Zyb21EaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaW5kaW5nLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmJpbmRpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3duZXJWRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vd25lckVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3duZXJDb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRkaXNwb3NlKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQXR0ck5vZGUgfTtcclxuIiwiXHJcbnZhciBWTm9kZVR5cGUgPSB7XHJcbiAgICBlbGVtZW50OiAxLFxyXG4gICAgYXR0cmlidXRlOiAyLFxyXG4gICAgdGV4dDogMyxcclxuICAgIGNkYXRhU2VjdGlvbjogNCxcclxuICAgIGVudGl0eVJlZmVyZW5jZTogNSxcclxuICAgIGVudGl0eTogNixcclxuICAgIHByb2Nlc3NpbmdJbnN0cnVjdGlvbjogNyxcclxuICAgIGNvbW1lbnQ6IDgsXHJcbiAgICBkb2N1bWVudDogOSxcclxuICAgIGRvY3VtZW50VHlwZTogMTAsXHJcbiAgICBkb2N1bWVudEZyYWdtZW50OiAxMSxcclxuICAgIG5vdGF0aW9uOiAxMixcclxuICAgIGN1c3RvbTogMTAxXHJcbn07XHJcblxyXG4vLyB2aXJ0dWFsIG5vZGVcclxuY2xhc3MgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IodHlwZSwgbmFtZSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5vZGVUeXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLm5vZGVOYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3duZXJWRG9jdW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgICRwdXNoQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgJGJ1aWxkU2libGluZygpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzW3RoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAoc2VsZi5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC4kYnVpbGRTaWJsaW5nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJGNsZWFyUGFyZW50QW5kU2libGluZygpIHtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAkcmVtb3ZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuJHJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuJGNsZWFyUGFyZW50QW5kU2libGluZygpO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3duZXJWRG9jdW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0NoaWxkTm9kZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggIT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJDaGlsZE5vZGVzKCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQubmV4dFNpYmxpbmcgPSBjaGlsZDtcclxuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gdGhpcy5sYXN0Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQ7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRCZWZvcmUocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XHJcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChyZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IG5ld0NoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZDtcclxuICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBuZXdDaGlsZDtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBuZXdDaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydEFmdGVyKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xyXG4gICAgICAgIGlmIChyZWZDaGlsZC5uZXh0U2libGluZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShyZWZDaGlsZC5uZXh0U2libGluZywgbmV3Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmUgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcucHJldmlvdXNTaWJsaW5nID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGQuJGNsZWFyUGFyZW50QW5kU2libGluZygpO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVwbGFjZUNoaWxkKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xyXG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG4gICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcclxuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkLm5leHRTaWJsaW5nO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5maXJzdENoaWxkID09PSByZWZDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBuZXdDaGlsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlZkNoaWxkLiRjbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcclxuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEsIG5ld0NoaWxkKTtcclxuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmVOb2RlKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZShvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmNvbXBpbGUob3B0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlyZWN0aXZlcygpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkLmRpcmVjdGl2ZXMoKTtcclxuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3RpdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmsoc2NvcGUpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmxpbmsoc2NvcGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyTGluaygpIHtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuYWZ0ZXJMaW5rKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0ZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhc0NoYW5nZSgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfTtcclxuIiwiaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eS9tZXNzYWdlJztcclxuaW1wb3J0IHsgR2V0UHJvcGVydHlIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbGl0eS9oYW5kbGVyJztcclxuaW1wb3J0IHsgY29tcHV0ZSB9IGZyb20gJy4uL3BhcnNlcic7XHJcblxyXG5jbGFzcyBFeHBOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHRleHQpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb3BzKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIG9ialByb3BzID0gW107XHJcbiAgICAgICAgY29tcHV0ZSh0aGlzLnRleHQsIG5ldyBQcm94eShzY29wZSwgbmV3IEdldFByb3BlcnR5SGFuZGxlcihvYmpQcm9wcywgdHJ1ZSkpLCBvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gb2JqUHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZShzY29wZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBjb21wdXRlKHRoaXMudGV4dCwgc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSAhPT0gdGhpcy5vbGRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBCaW5kaW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaXNFeHAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5yaWdodFN0ciA9ICcnO1xyXG4gICAgICAgIHRoaXMub3V0cHV0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSBuZXcgTWVzc2VuZ2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2NvcGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3V0cHV0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kKHRleHQsIGlzRXhwKSB7XHJcbiAgICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuaXNFeHAgPSBpc0V4cDtcclxuXHJcbiAgICAgICAgaWYgKGlzRXhwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBleHA6IG5ldyBFeHBOb2RlKHRleHQpLFxyXG4gICAgICAgICAgICAgICAgbGVmdFN0cjogJydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwYXR0ZXJuID0gL3t7KFtefV0qKX19L2c7XHJcbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xyXG4gICAgICAgIHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcclxuXHJcbiAgICAgICAgd2hpbGUgKG1hdGNoICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBtYXRjaC5pbmRleCxcclxuICAgICAgICAgICAgICAgIGV4cDogbmV3IEV4cE5vZGUobWF0Y2hbMV0pLFxyXG4gICAgICAgICAgICAgICAgbGVmdFN0cjogdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xyXG4gICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlZ21lbnRzLmxlbmd0aCA+IDAgJiYgbGFzdEluZGV4IDwgdGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yaWdodFN0ciA9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGUob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VnbWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0V4cCAmJiB0aGlzLnNlZ21lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50c1swXS5leHAuY29tcHV0ZShzZWxmLnNjb3BlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnNlZ21lbnRzWzBdLmV4cC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWdtZW50LmV4cC5jb21wdXRlKHNlbGYuc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gKHNlZ21lbnQubGVmdFN0ciArIHNlZ21lbnQuZXhwLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRleHQgKyB0aGlzLnJpZ2h0U3RyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaFByb3BzKGFjdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLm91dHB1dCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIG9ialByb3BzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICBvYmpQcm9wcyA9IG9ialByb3BzLmNvbmNhdChzZWdtZW50LmV4cC5nZXRQcm9wcyhzZWxmLnNjb3BlKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9ialByb3BzLmZvckVhY2goZnVuY3Rpb24gKG9ialByb3ApIHtcclxuICAgICAgICAgICAgc2VsZi5zY29wZS4kd2F0Y2gob2JqUHJvcC5vYmosIG9ialByb3AucHJvcCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2UuZmlyZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlLm9uKGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3V0cHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlZ21lbnRzLnNvbWUoZnVuY3Rpb24gKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlZ21lbnQuZXhwLmRldGVjdChzZWxmLnNjb3BlLCBvcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICBzZWdtZW50LmV4cC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJpbmRpbmcgfTsiLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuXHJcbmNsYXNzIENEYXRhU2VjdGlvbk5vZGUgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5jZGF0YVNlY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDRGF0YVNlY3Rpb25Ob2RlIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcblxyXG5jbGFzcyBDb21tZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmNvbW1lbnQsICcjY29tbWVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5ub2RlVmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDb21tZW50Tm9kZSB9O1xyXG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcblxyXG5jbGFzcyBDdXN0b21Ob2RlIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgbGlua2VyKXtcclxuICAgICAgICBzdXBlcihWTm9kZVR5cGUuY3VzdG9tLCBuYW1lKTtcclxuICAgICAgICB0aGlzLmxpbmtlciA9IGxpbmtlcjtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rKHNjb3BlKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtlci5jYWxsKHRoaXMsIHNjb3BlKTtcclxuICAgIH1cclxuXHJcbiAgICBhZnRlckxpbmsoKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkluc2VydCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25JbnNlcnQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGV0ZWN0KCkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXRlY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRGV0ZWN0LmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhc0NoYW5nZSgpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uSGFzQ2hhbmdlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkhhc0NoYW5nZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vblVwZGF0ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25VcGRhdGUuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGVzdHJveSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQ3VzdG9tTm9kZSB9OyIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY2xhc3MgRG9jdW1lbnRUeXBlTm9kZSBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5kb2N1bWVudFR5cGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBEb2N1bWVudFR5cGVOb2RlIH07XHJcbiIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY2xhc3MgRG9jdW1lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmRvY3VtZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRG9jdW1lbnROb2RlIH07IiwiaW1wb3J0ICogYXMgZWxlVXRpbHMgZnJvbSAnLi4vdXRpbGl0eS9lbGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgQ3VzdG9tTm9kZSB9IGZyb20gJy4vY3VzdG9tJztcclxuaW1wb3J0IHsgQXR0ck5vZGUgfSBmcm9tICcuL2F0dHJpYnV0ZSc7XHJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi4vcGFyc2VyJztcclxuXHJcbmNsYXNzIEVsZW1lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmVsZW1lbnQsIG5hbWUpO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VsZkNsb3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29tcGlsZU9wdGlvbnMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNDb21wb25lbnQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAkcHVzaEF0dHJpYnV0ZShhdHRyKSB7XHJcbiAgICAgICAgYXR0ci5vd25lclZFbGVtZW50ID0gdGhpcztcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaChhdHRyKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoICE9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCwgbWF0Y2hlcyA9IHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVzWzBdO1xyXG4gICAgICAgICAgICB0YXJnZXQuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gbmV3IEF0dHJOb2RlKGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0YXJnZXQub3duZXJWRWxlbWVudCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRhcmdldC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnB1c2godGFyZ2V0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBdHRyaWJ1dGUoa2V5KSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IFtdLCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGtleSBpbnN0YW5jZW9mIEF0dHJOb2RlKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuYXR0cmlidXRlcy5pbmRleE9mKGtleSk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYuYXR0cmlidXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xyXG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc2VsZi5hdHRyaWJ1dGVzLmluZGV4T2YobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgbWF0Y2guZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi5hdHRyaWJ1dGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGggPiAwID8gdGFyZ2V0WzBdIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRBdHRyaWJ1dGUoYXR0cikge1xyXG4gICAgICAgIGlmIChhdHRyLm93bmVyVkVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDdXJyZW50IGF0dHJpYnV0ZSBpcyBub3QgbmV3IVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF0dHIub3duZXJWRWxlbWVudCA9IHRoaXM7XHJcbiAgICAgICAgYXR0ci5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xyXG4gICAgICAgIHJldHVybiBhdHRyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE91dGVyVHBsKCkge1xyXG4gICAgICAgIHZhciBhdHRyVHBsID0gJycsIGNoaWxkVHBsID0gJyc7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIGF0dHJUcGwgKz0gJyAnO1xyXG4gICAgICAgICAgICBhdHRyVHBsICs9IGF0dHIuZ2V0T3V0ZXJUcGwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkVHBsICs9IGNoaWxkLmdldE91dGVyVHBsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciB0cGwgPSAnPCcgKyB0aGlzLm5vZGVOYW1lICsgYXR0clRwbCArICc+JyArIGNoaWxkVHBsO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc2VsZkNsb3NlZCkge1xyXG4gICAgICAgICAgICB0cGwgKz0gKCc8LycgKyB0aGlzLm5vZGVOYW1lICsgJz4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5uZXJUcGwoKSB7XHJcbiAgICAgICAgdmFyIGNoaWxkVHBsID0gJyc7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZFRwbCArPSBjaGlsZC5nZXRPdXRlclRwbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGRUcGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3V0ZXJUcGwodHBsKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHBhcnNlKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcclxuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHNlbGYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZiwgdm5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbm5lclRwbCh0cGwpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jbGVhckNoaWxkTm9kZXMoKTtcclxuICAgICAgICBwYXJzZSh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICBzZWxmLmFwcGVuZENoaWxkKHZub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3RpdmUoa2V5KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMubWFwKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmRpcmVjdGl2ZXMoKTtcclxuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLiQkbWV0YS5zZWxlY3RvciA9PT0ga2V5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGUob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY29tcGlsZU9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIGF0dHIuY29tcGlsZShvcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmlzQ29tcG9uZW50ID0gb3B0aW9ucy5jb250YWluc0NvbXBvbmVudCh0aGlzLm5vZGVOYW1lKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5jb21waWxlKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlyZWN0aXZlcygpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHIuZGlyZWN0aXZlcygpO1xyXG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZC5kaXJlY3RpdmVzKCk7XHJcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoaXRlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rKHNjb3BlKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBzZWxmLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgc2VsZi5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzZWxmLm5vZGVOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBzY29wZS4kY3JlYXRlQ29tcG9uZW50KHRoaXMubm9kZU5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC4kYmluZFZOb2RlKHRoaXMpO1xyXG4gICAgICAgICAgICBzZWxmLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5saW5rKHNjb3BlLCBzZWxmLmVsZW1lbnQsIHNlbGYuY29tcG9uZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbGYuY29tcG9uZW50LiRpbml0QXR0ckRvbmUoKTtcclxuICAgICAgICAgICAgc2VsZi5jb21wb25lbnQuJG1vdW50KHNlbGYuZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5saW5rKHNjb3BlLCBzZWxmLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsZi5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQubGluayhzY29wZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZWxmLmVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJMaW5rKCkge1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIGF0dHIuYWZ0ZXJMaW5rKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuYWZ0ZXJMaW5rKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXRlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgYXR0ci5kZXRlY3QoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmRldGVjdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcG9zZShpc0Zyb21Db21wb25lbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzRnJvbUNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICBhdHRyLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVEb21FbGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5jb21waWxlT3B0aW9ucyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuJGRpc3Bvc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERvbUVsZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVEb21FbGVtZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlbGVVdGlscy5yZW1vdmVOb2RlKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVsZW1lbnQobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudE5vZGUobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQXR0cihuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdHRyTm9kZShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDdXN0b20obmFtZSwgbGlua2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDdXN0b21Ob2RlKG5hbWUsIGxpbmtlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEVsZW1lbnROb2RlIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcblxyXG5jbGFzcyBEb2N1bWVudEZyYWdtZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmRvY3VtZW50RnJhZ21lbnQsICcjZG9jdW1lbnQtZnJhZ21lbnQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRG9jdW1lbnRGcmFnbWVudE5vZGUgfTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9iYXNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9hdHRyaWJ1dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NkYXRhc2VjdGlvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tbWVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tJztcclxuZXhwb3J0ICogZnJvbSAnLi9kb2N0eXBlJztcclxuZXhwb3J0ICogZnJvbSAnLi9kb2N1bWVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZWxlbWVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZnJhZ21lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3RleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2JpbmRpbmcnO1xyXG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0ICogYXMgZWxlVXRpbHMgZnJvbSAnLi4vdXRpbGl0eS9lbGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gJy4vYmluZGluZyc7XHJcblxyXG5jbGFzcyBUZXh0Tm9kZSBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS50ZXh0LCAnI3RleHQnKTtcclxuICAgICAgICB0aGlzLmJpbmRpbmcgPSBuZXcgQmluZGluZygpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZSgpIHtcclxuICAgICAgICB0aGlzLmJpbmRpbmcuYmluZCh0aGlzLm5vZGVWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGluayhzY29wZSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kaW5nLnNldFNjb3BlKHNjb3BlKTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kaW5nLndhdGNoUHJvcHMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmRldGVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQ2hhbmdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJpbmRpbmcuZGV0ZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGVsZVV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuZWxlbWVudCwgdGhpcy5yZW5kZXIodGhpcy5iaW5kaW5nLnZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElubmVyVHBsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuYmluZGluZy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVGV4dE5vZGUgfTsiLCJpbXBvcnQgeyB0eXBlQ29uc3QsIGluamVjdG9yIH0gZnJvbSAnLi4vdmlldy9pbmplY3RvcidcclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudChtZXRhKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHZhciBzZWxlY3RvciA9IG1ldGEuc2VsZWN0b3IgfHwgdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb25zdHJ1Y3Rvcih0eXBlQ29uc3QuY29tcG9uZW50LCBzZWxlY3RvciwgdGFyZ2V0LCBtZXRhKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvbXBvbmVudCB9IiwiaW1wb3J0IHsgdHlwZUNvbnN0LCBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcvaW5qZWN0b3InXHJcblxyXG5mdW5jdGlvbiBkaXJlY3RpdmUobWV0YSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICB2YXIgc2VsZWN0b3IgPSBtZXRhLnNlbGVjdG9yIHx8IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyQ29uc3RydWN0b3IodHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IsIHRhcmdldCwgbWV0YSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBkaXJlY3RpdmUgfSIsImltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3L2luamVjdG9yJ1xyXG5cclxuZnVuY3Rpb24gc2VydmljZShtZXRhKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHZhciBzZWxlY3RvciA9IG1ldGEuc2VsZWN0b3IgfHwgdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb25zdHJ1Y3Rvcih0eXBlQ29uc3Quc2VydmljZSwgc2VsZWN0b3IsIHRhcmdldCwgbWV0YSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBzZXJ2aWNlIH0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1iaW5kJ1xyXG59KVxyXG5jbGFzcyBCaW5kRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZyl7XHJcbiAgICAgICAgZWxlLmlubmVyVGV4dCA9IGJpbmRpbmcuY29tcHV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMub25JbnNlcnQoZWxlLCBiaW5kaW5nKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWVtYmVkJ1xyXG59KVxyXG5jbGFzcyBFbWJlZERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29tcGlsZShhdHRyTm9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBlbWJlZFRwbCA9IG9wdGlvbnMuZ2V0RW1iZWRUcGwoKTtcclxuICAgICAgICBpZiAoZW1iZWRUcGwpIHtcclxuICAgICAgICAgICAgYXR0ck5vZGUub3duZXJWRWxlbWVudC5zZXRJbm5lclRwbChlbWJlZFRwbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24taGlkZSdcclxufSlcclxuY2xhc3MgSGlkZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpe1xyXG4gICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gYmluZGluZy5jb21wdXRlKCkgPyAnbm9uZScgOiAnaW5pdGlhbCc7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5vbkluc2VydChlbGUsIGJpbmRpbmcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWlmJ1xyXG59KVxyXG5jbGFzcyBJZkRpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbi1pZicpO1xyXG4gICAgICAgIGlmICghYmluZGluZy5jb21wdXRlKCkpIHtcclxuICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoZWxlLCB0aGlzLmNvbW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZShlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICBpZiAoYmluZGluZy5jb21wdXRlKCkpIHtcclxuICAgICAgICAgICAgaWYgKGVsZS5wYXJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuY29tbWVudCwgZWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGVsZS5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKGVsZSwgdGhpcy5jb21tZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gbnVsbDtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vYmluZCdcclxuZXhwb3J0ICogZnJvbSAnLi9lbWJlZCdcclxuZXhwb3J0ICogZnJvbSAnLi9oaWRlJ1xyXG5leHBvcnQgKiBmcm9tICcuL2lmJ1xyXG5leHBvcnQgKiBmcm9tICcuL21vZGVsJ1xyXG5leHBvcnQgKiBmcm9tICcuL3JlcGVhdCdcclxuZXhwb3J0ICogZnJvbSAnLi9zaG93J1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlJ1xyXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaCdcclxuZXhwb3J0ICogZnJvbSAnLi9zdGF0ZSciLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tbW9kZWwnXHJcbn0pXHJcbmNsYXNzIE1vZGVsRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGVsZSwgYmluZGluZywgY29tKSB7XHJcbiAgICAgICAgaWYgKGNvbSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVsZS52YWx1ZSA9IGJpbmRpbmcuY29tcHV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29tLiRzZXRBdHRyKCd2YWx1ZScsIGJpbmRpbmcuY29tcHV0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoZWxlLCBiaW5kaW5nLCBjb20pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShlbGUsIGJpbmRpbmcsIGNvbSk7XHJcblxyXG4gICAgICAgIGlmIChjb20gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGJpbmRpbmcuc2NvcGUuJHNldEF0dHIoYmluZGluZy50ZXh0LCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzTWVzc2VuZ2VyKGNvbS5jaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICBjb20uY2hhbmdlLm9uKGZ1bmN0aW9uIChlLCBhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZy5zY29wZS4kc2V0QXR0cihiaW5kaW5nLnRleHQsIGFyZ3MubmV3dmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb2VudCAnICsgY29tLiQkbWV0YS5zZWxlY3RvciArICdtdXN0IGRlZmluZSBbY2hhbmdlXSBldmVudCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZShlbGUsIGJpbmRpbmcsIGNvbSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKGVsZSwgYmluZGluZywgY29tKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi92aWV3L2NvbXBvbmVudCc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLXJlcGVhdCdcclxufSlcclxuY2xhc3MgUmVwZWF0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pdGVtRXhwID0gJyc7XHJcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgdGhpcy5kYXRhSXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLmNtcEl0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbXBpbGUoYXR0ck5vZGUpIHtcclxuICAgICAgICB2YXIgYXJnID0gYXR0ck5vZGUubm9kZVZhbHVlO1xyXG4gICAgICAgIHZhciBlbGVOb2RlID0gYXR0ck5vZGUub3duZXJWRWxlbWVudDtcclxuICAgICAgICB2YXIgcGF0dGVybiA9IC9eKFxcdyspXFxzK2luXFxzKyhcXHcrKSQvaTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcGF0dGVybi5leGVjKGFyZyk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ24tcmVwZWF0OiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLml0ZW1FeHAgPSByZXN1bHRbMV07XHJcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9IHJlc3VsdFsyXTtcclxuXHJcbiAgICAgICAgZWxlTm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5vZGUpO1xyXG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gZWxlTm9kZS5nZXRPdXRlclRwbCgpO1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGN1c3RvbSA9IGVsZU5vZGUuY3JlYXRlQ3VzdG9tKCduLXJlcGVhdCcsIGZ1bmN0aW9uIChzY29wZSkge1xyXG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHNjb3BlLiRldmFsKHNlbGYuaXRlbXNFeHApO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgICAgICBzZWxmLnNldERhdGFJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgICAgIHNlbGYuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnc3RhcnQ6IG4tcmVwZWF0Jyk7XHJcbiAgICAgICAgICAgIHNlbGYuZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZW5kOiBuLXJlcGVhdCcpO1xyXG5cclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VsZi5oZWFkZXIpO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLmZvb3Rlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZWxlTm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbGVOb2RlLCBjdXN0b20pO1xyXG4gICAgICAgIGVsZU5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICBjdXN0b20ub25JbnNlcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVuZGVyKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY3VzdG9tLm9uRGV0ZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBzZWxmLnNjb3BlLiRldmFsKHNlbGYuaXRlbXNFeHApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGYuZGF0YUl0ZW1zICE9PSBpdGVtcykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXREYXRhSXRlbXMoaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZW5kZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY21wSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRTY29wZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkU2NvcGUuJGRldGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjdXN0b20ub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLiRkZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGVsZU5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICBjdXN0b20gPSBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY21wSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoY21wSXRlbSkge1xyXG4gICAgICAgICAgICBjbXBJdGVtLiRkZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbXBJdGVtcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kYXRhSXRlbXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZvb3RlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YUl0ZW1zKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhSXRlbXMgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjb3BlLiR3YXRjaCh0aGlzLmRhdGFJdGVtcywgJ2xlbmd0aCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5yZW5kZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDbXBJdGVtKGRhdGFJdGVtKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBmaWx0ZXJzID0gdGhpcy5jbXBJdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1bc2VsZi5pdGVtRXhwXSA9PT0gZGF0YUl0ZW07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0YXJnZXQgPSBmaWx0ZXJzWzBdO1xyXG5cclxuICAgICAgICB0aGlzLmNtcEl0ZW1zID0gdGhpcy5jbXBJdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1bc2VsZi5pdGVtRXhwXSAhPT0gZGF0YUl0ZW07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgdmFyIG5ld0NtcEl0ZW1zID0gW107XHJcblxyXG4gICAgICAgIHV0aWxzLmZvckVhY2goc2VsZi5kYXRhSXRlbXMsIGZ1bmN0aW9uIChrZXksIGl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGNtcEl0ZW0gPSBzZWxmLmdldENtcEl0ZW0oaXRlbSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY21wSXRlbSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjbXBJdGVtID0gbmV3IENvbXBvbmVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHNlbGYuaXRlbVRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNtcEl0ZW1bc2VsZi5pdGVtRXhwXSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBjbXBJdGVtLiRpbmhlcml0KHNlbGYuc2NvcGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbXBJdGVtLiRyZW5kZXIodHJ1ZSkpO1xyXG4gICAgICAgICAgICBuZXdDbXBJdGVtcy5wdXNoKGNtcEl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoc2VsZi5jbXBJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY21wSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAocmVwZWF0SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmVwZWF0SXRlbS4kZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYuY21wSXRlbXMgPSBuZXdDbXBJdGVtcztcclxuICAgICAgICB1dGlscy5yZW1vdmVOb2RlQmV0d2VlbihzZWxmLmhlYWRlciwgc2VsZi5mb290ZXIpO1xyXG4gICAgICAgIHNlbGYuZm9vdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZyYWdtZW50LCBzZWxmLmZvb3Rlcik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tc2hvdydcclxufSlcclxuY2xhc3MgU2hvd0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpe1xyXG4gICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gYmluZGluZy5jb21wdXRlKCkgPyAnaW5pdGlhbCcgOiAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5vbkluc2VydChlbGUsIGJpbmRpbmcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWNoZWNrZWQnXHJcbn0pXHJcbmNsYXNzIENoZWNrZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignY2hlY2tlZCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWRpc2FibGVkJ1xyXG59KVxyXG5jbGFzcyBEaXNhYmxlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9jaGVja2VkJ1xyXG5leHBvcnQgKiBmcm9tICcuL2Rpc2FibGVkJ1xyXG5leHBvcnQgKiBmcm9tICcuL3JlYWRvbmx5J1xyXG5leHBvcnQgKiBmcm9tICcuL3NlbGVjdGVkJyIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1yZWFkb25seSdcclxufSlcclxuY2xhc3MgUmVhZG9ubHlEaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigncmVhZG9ubHknKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1zZWxlY3RlZCdcclxufSlcclxuY2xhc3MgU2VsZWN0ZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignc2VsZWN0ZWQnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcvZGlyZWN0aXZlJztcclxuXHJcbmNsYXNzIFN0YXRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZle1xyXG4gICAgY29uc3RydWN0b3IoYXR0ck5hbWUpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5hdHRyTmFtZSA9IGF0dHJOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZyl7XHJcbiAgICAgICAgaWYgKGJpbmRpbmcuY29tcHV0ZSgpKSB7XHJcbiAgICAgICAgICAgIGlmICghZWxlLmhhc0F0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlLnNldEF0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUuaGFzQXR0cmlidXRlKHRoaXMuYXR0ck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGUucmVtb3ZlQXR0cmlidXRlKHRoaXMuYXR0ck5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMub25JbnNlcnQoZWxlLCBiaW5kaW5nKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1zdHlsZSdcclxufSlcclxuY2xhc3MgU3R5bGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoZWxlLCBiaW5kaW5nKXtcclxuICAgICAgICB2YXIgdmFsdWUgPSBiaW5kaW5nLmNvbXB1dGUoKTtcclxuXHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICBlbGUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBlbGUuc3R5bGUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGUuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYmluZGluZy5zY29wZS4kd2F0Y2godmFsdWUsIC9cXHcrL2ksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIG9mIG4tc3R5bGUgc2hvdWxkIGJlIHN0cmluZyBvciBvYmplY3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5vbkluc2VydChlbGUsIGJpbmRpbmcpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJ1xyXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC1kZWZhdWx0J1xyXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC13aGVuJyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxpdHknO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1zd2l0Y2gtZGVmYXVsdCdcclxufSlcclxuY2xhc3MgU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaXNNYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hXaGVuRGlycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRTd2l0Y2hXaGVuRGlycygpIHtcclxuICAgICAgICB2YXIgdkVsZSA9IHRoaXMuYXR0ck5vZGUub3duZXJWRWxlbWVudDtcclxuXHJcbiAgICAgICAgd2hpbGUgKHZFbGUucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIHdoZW5EaXJzID0gdkVsZS5wcmV2aW91c1NpYmxpbmcuZ2V0RGlyZWN0aXZlKCduLXN3aXRjaC13aGVuJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAod2hlbkRpcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFdoZW5EaXJzLnB1c2god2hlbkRpcnNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2RWxlID0gdkVsZS5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hdGNoKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5zd2l0Y2hXaGVuRGlycy5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlzTWF0Y2g7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21waWxlKGF0dHJOb2RlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyTm9kZSA9IGF0dHJOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0U3dpdGNoV2hlbkRpcnMoKTtcclxuICAgICAgICB0aGlzLmlzTWF0Y2ggPSB0aGlzLm1hdGNoKCk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbi1zd2l0Y2gtZGVmYXVsdCcpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNNYXRjaCkge1xyXG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN3aXRjaFdoZW5EaXJzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5pc01hdGNoQ2hhbmdlZC5vbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZShlbGUsIGJpbmRpbmcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLmlzTWF0Y2gsIG5ld1ZhbHVlID0gdGhpcy5tYXRjaCgpO1xyXG5cclxuICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNYXRjaCA9IG5ld1ZhbHVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZS5wYXJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmNvbW1lbnQsIGVsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKGVsZSwgdGhpcy5jb21tZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyTm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnN3aXRjaFdoZW5EaXJzID0gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxpdHknO1xyXG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi8uLi91dGlsaXR5L21lc3NhZ2UnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1zd2l0Y2gtd2hlbidcclxufSlcclxuY2xhc3MgU3dpdGNoV2hlbkRpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaXNNYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hEaXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNNYXRjaENoYW5nZWQgPSBuZXcgTWVzc2VuZ2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFN3aXRjaERpcigpIHtcclxuICAgICAgICB2YXIgdkVsZSA9IHRoaXMuYXR0ck5vZGUub3duZXJWRWxlbWVudDtcclxuICAgICAgICB2YXIgc3dpdGNoRGlycyA9IHZFbGUucGFyZW50Tm9kZS5nZXREaXJlY3RpdmUoJ24tc3dpdGNoJyk7XHJcblxyXG4gICAgICAgIGlmICghc3dpdGNoRGlycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlIG4tc3dpdGNoIGRpcmVjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zd2l0Y2hEaXIgPSBzd2l0Y2hEaXJzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29tcGlsZShhdHRyTm9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBhdHRyTm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFN3aXRjaERpcigpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ24tc3dpdGNoLXdoZW4nKTtcclxuICAgICAgICB0aGlzLmlzTWF0Y2ggPSAoYmluZGluZy5jb21wdXRlKCkgPT09IHRoaXMuc3dpdGNoRGlyLnZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTWF0Y2gpIHtcclxuICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoZWxlLCB0aGlzLmNvbW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zd2l0Y2hEaXIudmFsdWVDaGFuZ2VkLm9uKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi51cGRhdGUoZWxlLCBiaW5kaW5nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5pc01hdGNoLFxyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IChiaW5kaW5nLmNvbXB1dGUoKSA9PT0gdGhpcy5zd2l0Y2hEaXIudmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNYXRjaCA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzTWF0Y2hDaGFuZ2VkLmZpcmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy5jb21tZW50LCBlbGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZS5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hEaXIgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbGl0eS9tZXNzYWdlJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tc3dpdGNoJ1xyXG59KVxyXG5jbGFzcyBTd2l0Y2hEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IG5ldyBNZXNzZW5nZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gYmluZGluZy5jb21wdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgbmV3VmFsdWUgPSBiaW5kaW5nLmNvbXB1dGUoKTtcclxuXHJcbiAgICAgICAgaWYobmV3VmFsdWUgIT09IG9sZFZhbHVlKXtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZC5maXJlKHtcclxuICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxyXG4gICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vdXRpbGl0eSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGFyc2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3VpJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgTGV4ZXIgfSBmcm9tICcuL2xleGVyJztcclxuXHJcbnV0aWxzLmluaGVyaXQoSHRtbExleGVyLCBMZXhlcik7XHJcbmZ1bmN0aW9uIEh0bWxMZXhlcihvcHRpb25zKSB7XHJcbiAgICBIdG1sTGV4ZXIuc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcclxufVxyXG5cclxuSHRtbExleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0ID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICByZXR1cm4gKCdhJyA8PSBjaCAmJiBjaCA8PSAneicgfHxcclxuICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XHJcbiAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnIHx8XHJcbiAgICAgICAgY2ggPT09ICdAJyB8fCBjaCA9PT0gJzonIHx8IGNoID09PSAnKicpO1xyXG59O1xyXG5cclxuSHRtbExleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlID0gZnVuY3Rpb24gKGNoLCBjcCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLScgfHwgY2ggPT09ICcuJztcclxufTtcclxuXHJcbkh0bWxMZXhlci5wcm90b3R5cGUuZXhwZWN0U3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgdmFyIG51bSA9IHN0ci5sZW5ndGg7XHJcbiAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPD0gdGhpcy50ZXh0Lmxlbmd0aCkgPyAoc3RyID09PSB0aGlzLnRleHQuc3Vic3RyKHRoaXMuaW5kZXgsIG51bSkpIDogZmFsc2U7XHJcbn07XHJcblxyXG4vLyBodG1sIGNvbW1lbnQgXCI8IS0tY29tbWVudC0tPlwiXHJcbkh0bWxMZXhlci5wcm90b3R5cGUucmVhZENvbW1lbnQgPSBmdW5jdGlvbiAoYmVnaW4sIGVuZCkge1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xyXG4gICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgdmFyIHJhd1N0cmluZyA9IGJlZ2luO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICByYXdTdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKGVuZCkpIHtcclxuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGVuZDtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBjb21tZW50Jywgc3RhcnQpO1xyXG59O1xyXG5cclxuLy8gaHRtbCB0ZXh0XHJcbkh0bWxMZXhlci5wcm90b3R5cGUucmVhZFRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgaWYgKChjaCA9PT0gJzwnICYmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikpIHx8IGNoMiA9PT0gJy8nKSB8fCB0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgfVxyXG4gICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgaW5kZXg6IHN0YXJ0LFxyXG4gICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICB0ZXh0VGFnOiB0cnVlXHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIGh0bWwgdGFnXHJcbkh0bWxMZXhlci5wcm90b3R5cGUucmVhZFRhZyA9IGZ1bmN0aW9uIChiZWdpbiwgZW5kLCBjbG9zaW5nLCBkb2N0eXBlKSB7XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGJlZ2luLCB0YWc6IHRydWUsIGNsb3Npbmc6IGNsb3NpbmcsIGJlZ2luOiB0cnVlLCBkb2N0eXBlOiBkb2N0eXBlIH0pO1xyXG4gICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XHJcbiAgICB0aGlzLnJlYWRJZGVudCgpO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcblxyXG4gICAgICAgIGlmICghY2xvc2luZykge1xyXG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgIHZhciBzdHIgPSBjaCArIGNoMjtcclxuICAgICAgICAgICAgaWYgKHN0ciA9PT0gJy8nICsgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHN0ciwgdGFnOiB0cnVlLCBjbG9zaW5nOiB0cnVlLCBlbmQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHN0ci5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoID09PSBlbmQpIHtcclxuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgICAgIHRleHQ6IGVuZCxcclxuICAgICAgICAgICAgICAgIHRhZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNsb3Npbmc6ICEhZG9jdHlwZSA/IHRydWUgOiBjbG9zaW5nLFxyXG4gICAgICAgICAgICAgICAgZW5kOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJz0nKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogJz0nLCBlcXVhbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB0aGlzLnRva2VucyA9IFtdO1xyXG5cclxuICAgIHZhciBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcclxuICAgICAgICB2YXIgY2gzID0gdGhpcy5wZWVrKDIpO1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZENvbW1lbnQoJzwhLS0nLCAnLS0+Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnPCcgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCcsICc+JywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPC8nKSAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMykpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8LycsICc+JywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IURPQ1RZUEUnKSkge1xyXG4gICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwhJywgJz4nLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignRE9DVFlQRSBpcyBub3QgYWxsb3dlZCcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkVGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRva2VucztcclxufTtcclxuXHJcbmV4cG9ydCB7IEh0bWxMZXhlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XHJcbmltcG9ydCB7IERvY3VtZW50RnJhZ21lbnROb2RlLCBDb21tZW50Tm9kZSwgVGV4dE5vZGUsIERvY3VtZW50VHlwZU5vZGUsIEVsZW1lbnROb2RlLCBBdHRyTm9kZSB9IGZyb20gJy4uL2NvcmUnO1xyXG5cclxudXRpbHMuaW5oZXJpdChIdG1sUGFyc2VyLCBQYXJzZXIpO1xyXG5mdW5jdGlvbiBIdG1sUGFyc2VyKGxleGVyLCBvcHRpb25zKSB7XHJcbiAgICBIdG1sUGFyc2VyLnN1cGVyLmNhbGwodGhpcywgbGV4ZXIsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xyXG5cclxuICAgIHZhciBmYXJnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50Tm9kZSgpO1xyXG4gICAgdmFyIGRvY3R5cGUsIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi5kb2N0eXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZG9jdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3R5cGUgPSB0aGlzLmRvY3R5cGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKGRvY3R5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBvbmx5IGFsbG93IG9uZVwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIGlzIG5vdCBhbGxvd2VkXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IENvbW1lbnROb2RlKCk7XHJcbiAgICAgICAgICAgIGNvbW1lbnQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZChjb21tZW50KTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVGV4dE5vZGUoKTtcclxuICAgICAgICAgICAgdGV4dC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XHJcbiAgICAgICAgICAgIGZhcmdtZW50LiRwdXNoQ2hpbGQodGhpcy5lbGVtZW50KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiaW1wb3NzaWJsZVwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhcmdtZW50LiRidWlsZFNpYmxpbmcoKTtcclxuXHJcbiAgICByZXR1cm4gZmFyZ21lbnQuY2hpbGROb2RlcztcclxufTtcclxuXHJcbkh0bWxQYXJzZXIucHJvdG90eXBlLmRvY3R5cGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLm5leHQoKTtcclxuICAgIHZhciBkb2NUeXBlID0gbmV3IERvY3VtZW50VHlwZU5vZGUoKTtcclxuICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgZG9jVHlwZS5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dHJzKGRvY1R5cGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICBkb2NUeXBlLmNoaWxkTm9kZXMucHVzaChhdHRyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZG9jVHlwZTtcclxufTtcclxuXHJcbkh0bWxQYXJzZXIucHJvdG90eXBlLmVsZW1lbnQgPSBmdW5jdGlvbiAocCkge1xyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgICB2YXIgZWxlID0gbmV3IEVsZW1lbnROb2RlKCk7XHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgIGVsZS5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXR0cnMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgZWxlLiRwdXNoQXR0cmlidXRlKGF0dHIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09ICdpbnB1dCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0b2tlbi5jbG9zaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRFbGVtZW50cyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGUuJHB1c2hDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4gJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gdG9rZW4udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxlO1xyXG59O1xyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUuY2hpbGRFbGVtZW50cyA9IGZ1bmN0aW9uIChwKSB7XHJcbiAgICB2YXIgZWxlcyA9IFtdO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBDb21tZW50Tm9kZSgpO1xyXG4gICAgICAgICAgICBjb21tZW50Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgIGVsZXMucHVzaChjb21tZW50KTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVGV4dE5vZGUoKTtcclxuICAgICAgICAgICAgdGV4dC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICBlbGVzLnB1c2godGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcclxuICAgICAgICAgICAgZWxlcy5wdXNoKHRoaXMuZWxlbWVudChwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxlcztcclxufTtcclxuXHJcbkh0bWxQYXJzZXIucHJvdG90eXBlLmF0dHJzID0gZnVuY3Rpb24gKHApIHtcclxuICAgIHZhciBhdHRycyA9IFtdO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGF0dHIgPSBuZXcgQXR0ck5vZGUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgYXR0ci5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgIGF0dHIub3JnTm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgICAgICAgICAgaWYgKHRva2VuLmVxdWFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uY29uc3RhbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLm5vZGVWYWx1ZSA9IHRva2VuLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXR0cnMucHVzaChhdHRyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXR0cnM7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge307XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5pbmRleCsrO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgSHRtbFBhcnNlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBMZXhlciB9IGZyb20gJy4vbGV4ZXInO1xyXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XHJcbmltcG9ydCB7IEh0bWxMZXhlciB9IGZyb20gJy4vaHRtbC1sZXhlcic7XHJcbmltcG9ydCB7IEh0bWxQYXJzZXIgfSBmcm9tICcuL2h0bWwtcGFyc2VyJztcclxuXHJcbnZhciBwYXJzZU9wdGlvbnMgPSB7XHJcbiAgICBpc0lkZW50aWZpZXJDb250aW51ZTogZmFsc2UsXHJcbiAgICBpc0lkZW50aWZpZXJTdGFydDogZmFsc2UsXHJcbiAgICBsaXRlcmFsczoge1xyXG4gICAgICAgIGZhbHNlOiBmYWxzZSxcclxuICAgICAgICBudWxsOiBudWxsLFxyXG4gICAgICAgIHRydWU6IHRydWUsXHJcbiAgICAgICAgdW5kZWZpbmVkOiB1bmRlZmluZWRcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlKGh0bWwpIHtcclxuICAgIHZhciBsZXhlciA9IG5ldyBIdG1sTGV4ZXIocGFyc2VPcHRpb25zKTtcclxuICAgIHZhciBwYXJzZXIgPSBuZXcgSHRtbFBhcnNlcihsZXhlciwgcGFyc2VPcHRpb25zKTtcclxuICAgIHJldHVybiBwYXJzZXIucGFyc2UoaHRtbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBpbGUoaHRtbCwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0ge1xyXG4gICAgICAgICAgICBnZXRFbWJlZFRwbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250YWluc0NvbXBvbmVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGVDb21wb25lbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250YWluc0RpcmVjdGl2ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGVEaXJlY3RpdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXR0aW5ncyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBvcHRpb25zKSxcclxuICAgICAgICBhc3ROb2RlcyA9IHBhcnNlKGh0bWwpO1xyXG5cclxuICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcclxuICAgICAgICBhc3ROb2RlLmNvbXBpbGUoc2V0dGluZ3MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoYXN0Tm9kZSkge1xyXG4gICAgICAgIGFzdE5vZGUuZGlyZWN0aXZlcygpLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICBkaXJlY3RpdmUuJGNvbXBpbGUoc2V0dGluZ3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzY29wZSkge1xyXG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICAgICAgc2NvcGUuJCR2bm9kZXMgPSBhc3ROb2RlcztcclxuXHJcbiAgICAgICAgYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChub2RlLmxpbmsoc2NvcGUpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtLmFmdGVyTGluaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlKGV4cCwgc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIGlmIChleHAgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGV4cCA9IGV4cC50cmltKCk7XHJcbiAgICBpZiAoZXhwLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGV4cCA9IGV4cC5yZXBsYWNlKCcmZ3Q7JywgJz4nKS5yZXBsYWNlKCcmbHQ7JywgJzwnKTtcclxuICAgIHZhciBsZXhlciA9IG5ldyBMZXhlcihwYXJzZU9wdGlvbnMpO1xyXG4gICAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIobGV4ZXIsIHBhcnNlT3B0aW9ucyk7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIG9wdGlvbnMuY3JlYXRlRmlsdGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlRmlsdGVyKG5hbWUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBwYXJzZXIucGFyc2UoZXhwKS5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY29tcGlsZSwgY29tcHV0ZSwgcGFyc2UgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuXHJcbnZhciBPUEVSQVRPUlMgPSB7fTtcclxudmFyIG9wZXJhdG9yVGV4dCA9ICcrIC0gKiAvICUgPT09ICE9PSA9PSAhPSA8ID4gPD0gPj0gJiYgfHwgISA9IHwnO1xyXG52YXIgRVNDQVBFID0geyAnbic6ICdcXG4nLCAnZic6ICdcXGYnLCAncic6ICdcXHInLCAndCc6ICdcXHQnLCAndic6ICdcXHYnLCAnXFwnJzogJ1xcJycsICdcIic6ICdcIicgfTtcclxuXHJcbm9wZXJhdG9yVGV4dC5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKG9wZXJhdG9yKSB7XHJcbiAgICBPUEVSQVRPUlNbb3BlcmF0b3JdID0gdHJ1ZTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBMZXhlcihvcHRpb25zKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59XHJcblxyXG5MZXhlci5wcm90b3R5cGUubGV4ID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIHRoaXMudG9rZW5zID0gW107XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy4nICYmIHRoaXMuaXNOdW1iZXIodGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZE51bWJlcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXMoY2gsICcoKXt9W10uLDs6PycpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogY2ggfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGNoMiA9IGNoICsgdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgIHZhciBjaDMgPSBjaDIgKyB0aGlzLnBlZWsoMik7XHJcbiAgICAgICAgICAgIHZhciBvcDEgPSBPUEVSQVRPUlNbY2hdO1xyXG4gICAgICAgICAgICB2YXIgb3AyID0gT1BFUkFUT1JTW2NoMl07XHJcbiAgICAgICAgICAgIHZhciBvcDMgPSBPUEVSQVRPUlNbY2gzXTtcclxuICAgICAgICAgICAgaWYgKG9wMSB8fCBvcDIgfHwgb3AzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBvcDMgPyBjaDMgOiAob3AyID8gY2gyIDogY2gpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiB0b2tlbiwgb3BlcmF0b3I6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHRva2VuLmxlbmd0aDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXMgPSBmdW5jdGlvbiAoY2gsIGNoYXJzKSB7XHJcbiAgICByZXR1cm4gY2hhcnMuaW5kZXhPZihjaCkgIT09IC0xO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgdmFyIG51bSA9IGkgfHwgMTtcclxuICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8IHRoaXMudGV4dC5sZW5ndGgpID8gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4ICsgbnVtKSA6IGZhbHNlO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzTnVtYmVyID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICByZXR1cm4gKCcwJyA8PSBjaCAmJiBjaCA8PSAnOScpICYmIHR5cGVvZiBjaCA9PT0gJ3N0cmluZyc7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNXaGl0ZXNwYWNlID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICAvLyBJRSB0cmVhdHMgbm9uLWJyZWFraW5nIHNwYWNlIGFzIFxcdTAwQTBcclxuICAgIHJldHVybiAoY2ggPT09ICcgJyB8fCBjaCA9PT0gJ1xccicgfHwgY2ggPT09ICdcXHQnIHx8XHJcbiAgICAgICAgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnXFx2JyB8fCBjaCA9PT0gJ1xcdTAwQTAnKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5pc0lkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydCA/XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0KGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxyXG4gICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XHJcbiAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxyXG4gICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUgP1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZShjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcclxuICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gsIGNwKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuY29kZVBvaW50QXQgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIGlmIChjaC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gY2guY2hhckNvZGVBdCgwKTtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXHJcbiAgICByZXR1cm4gKGNoLmNoYXJDb2RlQXQoMCkgPDwgMTApICsgY2guY2hhckNvZGVBdCgxKSAtIDB4MzVGREMwMDtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5wZWVrTXVsdGljaGFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgIHZhciBwZWVrID0gdGhpcy5wZWVrKCk7XHJcbiAgICBpZiAoIXBlZWspIHtcclxuICAgICAgICByZXR1cm4gY2g7XHJcbiAgICB9XHJcbiAgICB2YXIgY3AxID0gY2guY2hhckNvZGVBdCgwKTtcclxuICAgIHZhciBjcDIgPSBwZWVrLmNoYXJDb2RlQXQoMCk7XHJcbiAgICBpZiAoY3AxID49IDB4RDgwMCAmJiBjcDEgPD0gMHhEQkZGICYmIGNwMiA+PSAweERDMDAgJiYgY3AyIDw9IDB4REZGRikge1xyXG4gICAgICAgIHJldHVybiBjaCArIHBlZWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2g7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNFeHBPcGVyYXRvciA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycgfHwgdGhpcy5pc051bWJlcihjaCkpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLnRocm93RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIHN0YXJ0LCBlbmQpIHtcclxuICAgIGVuZCA9IGVuZCB8fCB0aGlzLmluZGV4O1xyXG4gICAgdmFyIGNvbFN0ciA9ICh1dGlscy5pc0RlZmluZWQoc3RhcnQpID8gJ3MgJyArIHN0YXJ0ICsgJy0nICsgdGhpcy5pbmRleCArICcgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpICsgJ10nIDogJyAnICsgZW5kKTtcclxuICAgIHRocm93IG5ldyBFcnJvcignTGV4ZXIgRXJyb3I6ICcgKyBlcnJvciArICcgYXQgY29sdW1uJyArIGNvbFN0ciArICcgaW4gZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddLicpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLnJlYWROdW1iZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbnVtYmVyID0gJyc7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdXRpbHMubG93ZXJjYXNlKHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCkpO1xyXG4gICAgICAgIGlmIChjaCA9PT0gJy4nIHx8IHRoaXMuaXNOdW1iZXIoY2gpKSB7XHJcbiAgICAgICAgICAgIG51bWJlciArPSBjaDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcGVla0NoID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ2UnICYmIHRoaXMuaXNFeHBPcGVyYXRvcihwZWVrQ2gpKSB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxyXG4gICAgICAgICAgICAgICAgcGVla0NoICYmIHRoaXMuaXNOdW1iZXIocGVla0NoKSAmJlxyXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcclxuICAgICAgICAgICAgICAgICghcGVla0NoIHx8ICF0aGlzLmlzTnVtYmVyKHBlZWtDaCkpICYmXHJcbiAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgZXhwb25lbnQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgIH1cclxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICB0ZXh0OiBudW1iZXIsXHJcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgICAgICAgdmFsdWU6IE51bWJlcihudW1iZXIpXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5yZWFkSWRlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgdGhpcy5pbmRleCArPSB0aGlzLnBlZWtNdWx0aWNoYXIoKS5sZW5ndGg7XHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnBlZWtNdWx0aWNoYXIoKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNJZGVudGlmaWVyQ29udGludWUoY2gpKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4ICs9IGNoLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICB0ZXh0OiB0aGlzLnRleHQuc2xpY2Uoc3RhcnQsIHRoaXMuaW5kZXgpLFxyXG4gICAgICAgIGlkZW50aWZpZXI6IHRydWVcclxuICAgIH0pO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLnJlYWRTdHJpbmcgPSBmdW5jdGlvbiAocXVvdGUpIHtcclxuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB2YXIgc3RyaW5nID0gJyc7XHJcbiAgICB2YXIgcmF3U3RyaW5nID0gcXVvdGU7XHJcbiAgICB2YXIgZXNjYXBlID0gZmFsc2U7XHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIHJhd1N0cmluZyArPSBjaDtcclxuICAgICAgICBpZiAoZXNjYXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ3UnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGV4ID0gdGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoZXgubWF0Y2goL1tcXGRhLWZdezR9L2kpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIHVuaWNvZGUgZXNjYXBlIFtcXFxcdScgKyBoZXggKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSA0O1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4LCAxNikpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcCA9IEVTQ0FQRVtjaF07XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyAocmVwIHx8IGNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlc2NhcGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNoID09PSAnXFxcXCcpIHtcclxuICAgICAgICAgICAgZXNjYXBlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNoID09PSBxdW90ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBxdW90ZScsIHN0YXJ0KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IExleGVyIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aXNGaWx0ZXJ9IGZyb20gJy4uL3ZpZXcnO1xyXG5cclxudmFyIEFTVCA9IHt9O1xyXG5BU1QuUHJvZ3JhbSA9ICdQcm9ncmFtJztcclxuQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQgPSAnRXhwcmVzc2lvblN0YXRlbWVudCc7XHJcbkFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbiA9ICdBc3NpZ25tZW50RXhwcmVzc2lvbic7XHJcbkFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24gPSAnQ29uZGl0aW9uYWxFeHByZXNzaW9uJztcclxuQVNULkxvZ2ljYWxFeHByZXNzaW9uID0gJ0xvZ2ljYWxFeHByZXNzaW9uJztcclxuQVNULkJpbmFyeUV4cHJlc3Npb24gPSAnQmluYXJ5RXhwcmVzc2lvbic7XHJcbkFTVC5VbmFyeUV4cHJlc3Npb24gPSAnVW5hcnlFeHByZXNzaW9uJztcclxuQVNULkNhbGxFeHByZXNzaW9uID0gJ0NhbGxFeHByZXNzaW9uJztcclxuQVNULk1lbWJlckV4cHJlc3Npb24gPSAnTWVtYmVyRXhwcmVzc2lvbic7XHJcbkFTVC5JZGVudGlmaWVyID0gJ0lkZW50aWZpZXInO1xyXG5BU1QuTGl0ZXJhbCA9ICdMaXRlcmFsJztcclxuQVNULkFycmF5RXhwcmVzc2lvbiA9ICdBcnJheUV4cHJlc3Npb24nO1xyXG5BU1QuUHJvcGVydHkgPSAnUHJvcGVydHknO1xyXG5BU1QuT2JqZWN0RXhwcmVzc2lvbiA9ICdPYmplY3RFeHByZXNzaW9uJztcclxuXHJcbmZ1bmN0aW9uIEFzdE5vZGUodHlwZSkge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xyXG59XHJcblxyXG5Bc3ROb2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xyXG59O1xyXG5cclxuQXN0Tm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgaW50ZXJuYWxzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGQuY29tcGlsZShzY29wZSwgb3B0aW9ucyB8fCB7fSwgaW50ZXJuYWxzKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChQcm9ncmFtTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIFByb2dyYW1Ob2RlKCkge1xyXG4gICAgUHJvZ3JhbU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuUHJvZ3JhbSk7XHJcbn1cclxuXHJcblByb2dyYW1Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMgfHwge30pO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCkge1xyXG4gICAgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuRXhwcmVzc2lvblN0YXRlbWVudCk7XHJcbn1cclxuXHJcbkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBpbnRlcm5hbHMpIHtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0uY29tcGlsZShzY29wZSwgb3B0aW9ucyB8fCB7fSwgaW50ZXJuYWxzKTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKGxlZnQsIHJpZ2h0LCBvcGVyYXRvcikge1xyXG4gICAgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uKTtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbn1cclxuXHJcbkFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHRhcmdldCA9IHRoaXMubGVmdC5jb21waWxlKHNjb3BlLCBvcHRpb25zLCB7IGFzc2lnbm1lbnRMZWZ0OiB0cnVlIH0pO1xyXG4gICAgdmFyIHZhbHVlID0gdGhpcy5yaWdodC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuICAgIHRhcmdldC5vYmpbdGFyZ2V0LnByb3BdID0gdmFsdWU7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCkge1xyXG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcclxuICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xyXG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcclxufVxyXG5cclxuQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgaWYgKHRoaXMudGVzdC5jb21waWxlKHNjb3BlKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsdGVybmF0ZS5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KExvZ2ljYWxFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIExvZ2ljYWxFeHByZXNzaW9uTm9kZShvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcclxuICAgIExvZ2ljYWxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG59XHJcblxyXG5Mb2dpY2FsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciByZXN1bHQ7XHJcbiAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5sZWZ0LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLnJpZ2h0LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG5cclxuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xyXG4gICAgICAgIGNhc2UgJyYmJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3x8JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KEJpbmFyeUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQmluYXJ5RXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XHJcbiAgICBCaW5hcnlFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5CaW5hcnlFeHByZXNzaW9uKTtcclxuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbn1cclxuXHJcbkJpbmFyeUV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgcmVzdWx0O1xyXG4gICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMubGVmdC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5yaWdodC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuXHJcbiAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xyXG4gICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XHJcbiAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSArIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy0nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICcqJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICogcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAvIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyUnOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc8JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDwgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnPic6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJzw9JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDw9IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJz49JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID49IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJz09JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyE9JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJz09PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnIT09JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChVbmFyeUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gVW5hcnlFeHByZXNzaW9uTm9kZShvcGVyYXRvciwgYXJnKSB7XHJcbiAgICBVbmFyeUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlVuYXJ5RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLnByZWZpeCA9IHRydWU7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB0aGlzLmFyZyA9IGFyZztcclxufVxyXG5cclxuVW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHJlc3VsdCwgdmFsdWUgPSB0aGlzLmFyZy5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcclxuICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy0nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSAtdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyEnOlxyXG4gICAgICAgICAgICByZXN1bHQgPSAhdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KExpdGVyYWxOb2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gTGl0ZXJhbE5vZGUodmFsdWUpIHtcclxuICAgIExpdGVyYWxOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkxpdGVyYWwpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG59XHJcblxyXG5MaXRlcmFsTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChDYWxsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBDYWxsRXhwcmVzc2lvbk5vZGUoY2FsbGVlLCBhcmdzKSB7XHJcbiAgICBDYWxsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQ2FsbEV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XHJcbiAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgdGhpcy5maWx0ZXIgPSBmYWxzZTtcclxufVxyXG5cclxuQ2FsbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY2FsbGVlLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMsIHsgY2FsbGVlOiB0cnVlIH0pO1xyXG4gICAgdmFyIGFyZ1ZhbHVlcyA9IHRoaXMuYXJncy5tYXAoZnVuY3Rpb24gKGFyZykge1xyXG4gICAgICAgIHJldHVybiBhcmcuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5maWx0ZXIpIHtcclxuICAgICAgICB2YXIgZmlsdGVySW5zID0gb3B0aW9ucy5jcmVhdGVGaWx0ZXIoY29udGV4dC5wcm9wKTtcclxuICAgICAgICBpZiAoaXNGaWx0ZXIoZmlsdGVySW5zKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVySW5zLiRleGVjdXRlLmFwcGx5KGZpbHRlcklucywgYXJnVmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWx0ZXIgXCInICsgY29udGV4dC5wcm9wICsgJ1wiIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YXIgZm4gPSBjb250ZXh0Lm9ialtjb250ZXh0LnByb3BdO1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dC5vYmosIGFyZ1ZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihjb250ZXh0LnByb3AgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KE1lbWJlckV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gTWVtYmVyRXhwcmVzc2lvbk5vZGUob2JqZWN0LCBwcm9wZXJ0eSwgY29tcHV0ZWQpIHtcclxuICAgIE1lbWJlckV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk1lbWJlckV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XHJcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XHJcbiAgICB0aGlzLmNvbXB1dGVkID0gY29tcHV0ZWQ7XHJcbn1cclxuXHJcbk1lbWJlckV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBpbnRlcm5hbHMpIHtcclxuICAgIHZhciBvYmogPSB0aGlzLm9iamVjdC5jb21waWxlKHNjb3BlLCBvcHRpb25zLCBpbnRlcm5hbHMpO1xyXG5cclxuICAgIGlmICh1dGlscy5pc0FycmF5KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqW3RoaXMucHJvcGVydHkuY29tcGlsZShvYmosIG9wdGlvbnMsIGludGVybmFscyldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnByb3BlcnR5LmNvbXBpbGUob2JqLCBvcHRpb25zLCBpbnRlcm5hbHMpO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChJZGVudGlmaWVyTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIElkZW50aWZpZXJOb2RlKG5hbWUpIHtcclxuICAgIElkZW50aWZpZXJOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULklkZW50aWZpZXIpO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxufVxyXG5cclxuSWRlbnRpZmllck5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGludGVybmFscykge1xyXG4gICAgaWYgKGludGVybmFscykge1xyXG4gICAgICAgIGlmIChpbnRlcm5hbHMuYXNzaWdubWVudExlZnQgfHwgaW50ZXJuYWxzLmNhbGxlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgb2JqOiBzY29wZSxcclxuICAgICAgICAgICAgICAgIHByb3A6IHRoaXMubmFtZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpbnRlcm5hbHMucHJvcGVydHlLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzdWx0ID0gc2NvcGVbdGhpcy5uYW1lXTtcclxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBvcHRpb25zLmxvY2Fscykge1xyXG4gICAgICAgIHJlc3VsdCA9IG9wdGlvbnMubG9jYWxzW3RoaXMubmFtZV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChBcnJheUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQXJyYXlFeHByZXNzaW9uTm9kZSgpIHtcclxuICAgIEFycmF5RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQXJyYXlFeHByZXNzaW9uKTtcclxufVxyXG5cclxudXRpbHMuaW5oZXJpdChQcm9wZXJ0eU5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBQcm9wZXJ0eU5vZGUoKSB7XHJcbiAgICBQcm9wZXJ0eU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuUHJvcGVydHkpO1xyXG4gICAgdGhpcy5raW5kID0gJ2luaXQnO1xyXG4gICAgdGhpcy5rZXkgPSBudWxsO1xyXG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB0aGlzLmNvbXB1dGVkID0gZmFsc2U7XHJcbn1cclxuXHJcblByb3BlcnR5Tm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBrZXk6IHRoaXMua2V5LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMsIHsgcHJvcGVydHlLZXk6IHRydWUgfSksXHJcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUuY29tcGlsZShzY29wZSwgb3B0aW9ucylcclxuICAgIH07XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KE9iamVjdEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gT2JqZWN0RXhwcmVzc2lvbk5vZGUocHJvcGVydGllcykge1xyXG4gICAgT2JqZWN0RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuT2JqZWN0RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xyXG59XHJcblxyXG5PYmplY3RFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG5cclxuICAgIHRoaXMucHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgdmFyIGRlZiA9IGl0ZW0uY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgcmVzdWx0W2RlZi5rZXldID0gZGVmLnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGlzQXNzaWduYWJsZShhc3QpIHtcclxuICAgIHJldHVybiBhc3QudHlwZSA9PT0gQVNULklkZW50aWZpZXIgfHwgYXN0LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYXJzZXIobGV4ZXIsIG9wdGlvbnMpIHtcclxuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn1cclxuXHJcblBhcnNlci5wcm90b3R5cGUudGhyb3dFcnJvciA9IGZ1bmN0aW9uIChtc2csIHRva2VuKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N5bnRheCBFcnJvcjogVG9rZW4gXFwnJyArIHRva2VuLnRleHQgKyAnXFwnJyArIG1zZyArICcgYXQgY29sdW1uICcgKyAodG9rZW4uaW5kZXggKyAxKSArXHJcbiAgICAgICAgJyBvZiB0aGUgZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddIHN0YXJ0aW5nIGF0IFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyh0b2tlbi5pbmRleCkgKyAnXS4nKTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XHJcblxyXG4gICAgdmFyIHZhbHVlID0gdGhpcy5wcm9ncmFtKCk7XHJcblxyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgYW4gdW5leHBlY3RlZCB0b2tlbicsIHRoaXMudG9rZW5zWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnByb2dyYW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtTm9kZSgpO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gMCAmJiAhdGhpcy5wZWVrKCd9JywgJyknLCAnOycsICddJykpIHtcclxuICAgICAgICAgICAgcHJvZ3JhbS5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5leHBlY3QoJzsnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmV4cHJlc3Npb25TdGF0ZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCk7XHJcbiAgICBleHAuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJDaGFpbigpKTtcclxuICAgIHJldHVybiBleHA7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmZpbHRlckNoYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxlZnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XHJcbiAgICAgICAgbGVmdCA9IHRoaXMuZmlsdGVyKGxlZnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50KCk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmFzc2lnbm1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy50ZXJuYXJ5KCk7XHJcbiAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xyXG4gICAgICAgIGlmICghaXNBc3NpZ25hYmxlKHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYXNzaWduIGEgdmFsdWUgdG8gYSBub24gbC12YWx1ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0ID0gbmV3IEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShyZXN1bHQsIHRoaXMuYXNzaWdubWVudCgpLCAnPScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUudGVybmFyeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0ZXN0ID0gdGhpcy5sb2dpY2FsT1IoKTtcclxuICAgIHZhciBhbHRlcm5hdGU7XHJcbiAgICB2YXIgY29uc2VxdWVudDtcclxuICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XHJcbiAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uc3VtZSgnOicpKSB7XHJcbiAgICAgICAgICAgIGNvbnNlcXVlbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlc3Q7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmxvZ2ljYWxPUiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5sb2dpY2FsQU5EKCk7XHJcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3x8JykpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUubG9naWNhbEFORCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5lcXVhbGl0eSgpO1xyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcmJicpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJyYmJywgbGVmdCwgdGhpcy5lcXVhbGl0eSgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5lcXVhbGl0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5yZWxhdGlvbmFsKCk7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJz09JywgJyE9JywgJz09PScsICchPT0nKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMucmVsYXRpb25hbCgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5yZWxhdGlvbmFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxlZnQgPSB0aGlzLmFkZGl0aXZlKCk7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJzwnLCAnPicsICc8PScsICc+PScpKSkge1xyXG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5hZGRpdGl2ZSgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5hZGRpdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5tdWx0aXBsaWNhdGl2ZSgpO1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMubXVsdGlwbGljYXRpdmUoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUubXVsdGlwbGljYXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMudW5hcnkoKTtcclxuICAgIHZhciB0b2tlbjtcclxuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKicsICcvJywgJyUnKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMudW5hcnkoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUudW5hcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIHRoaXMudW5hcnkoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcclxuICAgIH1cclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucHJpbWFyeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwcmltYXJ5O1xyXG4gICAgaWYgKHRoaXMuZXhwZWN0KCcoJykpIHtcclxuICAgICAgICBwcmltYXJ5ID0gdGhpcy5maWx0ZXJDaGFpbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgnWycpKSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgneycpKSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMub2JqZWN0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5saXRlcmFscy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnBlZWsoKS50ZXh0KSkge1xyXG4gICAgICAgIHByaW1hcnkgPSBuZXcgTGl0ZXJhbE5vZGUodGhpcy5vcHRpb25zLmxpdGVyYWxzW3RoaXMuY29uc3VtZSgpLnRleHRdKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xyXG4gICAgICAgIHByaW1hcnkgPSB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcclxuICAgICAgICBwcmltYXJ5ID0gdGhpcy5jb25zdGFudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ25vdCBhIHByaW1hcnkgZXhwcmVzc2lvbicsIHRoaXMucGVlaygpKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmV4dDtcclxuICAgIHdoaWxlICgobmV4dCA9IHRoaXMuZXhwZWN0KCcoJywgJ1snLCAnLicpKSkge1xyXG4gICAgICAgIGlmIChuZXh0LnRleHQgPT09ICcoJykge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLnBhcnNlQXJndW1lbnRzKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJ1snKSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5leHByZXNzaW9uKCksIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJy4nKSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5pZGVudGlmaWVyKCksIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0lNUE9TU0lCTEUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpbWFyeTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGJhc2VFeHByZXNzaW9uKSB7XHJcbiAgICB2YXIgYXJncyA9IFtiYXNlRXhwcmVzc2lvbl0sIGlkZW50aWZpZXJzID0gW3RoaXMuaWRlbnRpZmllcigpXTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJy4nKSkge1xyXG4gICAgICAgIGlkZW50aWZpZXJzLnB1c2godGhpcy5pZGVudGlmaWVyKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBsdXMgbmFtZXNwYWNlXHJcbiAgICB2YXIgZW50aXJlTmFtZSA9IGlkZW50aWZpZXJzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLm5hbWU7XHJcbiAgICB9KS5qb2luKCcuJyk7XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUobmV3IElkZW50aWZpZXJOb2RlKGVudGlyZU5hbWUpLCBhcmdzKTtcclxuXHJcbiAgICByZXN1bHQuZmlsdGVyID0gdHJ1ZTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJzonKSkge1xyXG4gICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGFyc2VBcmd1bWVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJyknKSB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5maWx0ZXJDaGFpbigpKTtcclxuICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcmdzO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5pZGVudGlmaWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5jb25zdW1lKCk7XHJcbiAgICBpZiAoIXRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIG5vdCBhIHZhbGlkIGlkZW50aWZpZXInLCB0b2tlbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IElkZW50aWZpZXJOb2RlKHRva2VuLnRleHQpO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5jb25zdGFudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFRPRE8gY2hlY2sgdGhhdCBpdCBpcyBhIGNvbnN0YW50XHJcbiAgICByZXR1cm4gbmV3IExpdGVyYWxOb2RlKHRoaXMuY29uc3VtZSgpLnZhbHVlKTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuYXJyYXlEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhcnIgPSBuZXcgQXJyYXlFeHByZXNzaW9uTm9kZSgpO1xyXG4gICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ10nKSB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCddJykpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyci5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnN1bWUoJ10nKTtcclxuXHJcbiAgICByZXR1cm4gYXJyO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5vYmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJvcGVydGllcyA9IFtdLCBwcm9wZXJ0eTtcclxuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICd9Jykge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnfScpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eU5vZGUoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmNvbnN0YW50KCk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuaWRlbnRpZmllcigpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJzonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gcHJvcGVydHkua2V5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygnWycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ1snKTtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2ludmFsaWQga2V5JywgdGhpcy5wZWVrKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnN1bWUoJ30nKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5jb25zdW1lID0gZnVuY3Rpb24gKGUxKSB7XHJcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdChlMSk7XHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyB1bmV4cGVjdGVkLCBleHBlY3RpbmcgWycgKyBlMSArICddJywgdGhpcy5wZWVrKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRva2VuO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5wZWVrVG9rZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRva2Vuc1swXTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uIChlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGVla0FoZWFkKDAsIGUxLCBlMiwgZTMsIGU0KTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGVla0FoZWFkID0gZnVuY3Rpb24gKGksIGUxLCBlMiwgZTMsIGU0KSB7XHJcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gaSkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW5zW2ldO1xyXG4gICAgICAgIHZhciB0ID0gdG9rZW4udGV4dDtcclxuICAgICAgICBpZiAodCA9PT0gZTEgfHwgdCA9PT0gZTIgfHwgdCA9PT0gZTMgfHwgdCA9PT0gZTQgfHxcclxuICAgICAgICAgICAgKCFlMSAmJiAhZTIgJiYgIWUzICYmICFlNCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuZXhwZWN0ID0gZnVuY3Rpb24gKGUxLCBlMiwgZTMsIGU0KSB7XHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLnBlZWsoZTEsIGUyLCBlMywgZTQpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy50b2tlbnMuc2hpZnQoKTtcclxuICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgeyBQYXJzZXIgfTsiLCJleHBvcnQgKiBmcm9tICcuL3RlbXBsYXRlLWNhY2hlJzsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vdmlldy9zZXJ2aWNlJztcclxuaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uL2RlY29yYXRvci9zZXJ2aWNlJztcclxuXHJcbkBzZXJ2aWNlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICckdGVtcGxhdGVDYWNoZSdcclxufSlcclxuY2xhc3MgVGVtcGxhdGVDYWNoZVNlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy50cGxDYWNoZSA9IHt9O1xyXG4gICAgICAgIHRoaXMucHJvbWlzZUNhY2hlID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHBsQnlVcmwodXJsKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50cGxDYWNoZVt1cmxdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzZWxmLnRwbENhY2hlW3VybF0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wcm9taXNlQ2FjaGVbdXJsXSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb21pc2VDYWNoZVt1cmxdID0gYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnByb21pc2VDYWNoZVt1cmxdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNlbGYudHBsQ2FjaGVbdXJsXSA9IHJlcy5kYXRhIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYudHBsQ2FjaGVbdXJsXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlQ2FjaGVbdXJsXTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IFwidGhpcyBpcyBmb3JtIHRlbXBsYXRlXCIiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vdmlldy9jb21wb25lbnQnO1xuaW1wb3J0IHtjb21wb25lbnR9IGZyb20gJy4uLy4uL2RlY29yYXRvci9jb21wb25lbnQnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZm9ybS5odG1sJztcblxuQGNvbXBvbmVudCh7XG4gICAgbmFtZXNwYWNlOiAnc2luZS51aScsXG4gICAgc2VsZWN0b3I6ICduLWZvcm0nLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufSlcbmNsYXNzIEZvcm1Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9mb3JtJzsiLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tIFwiLi4vLi4vdmlldy9kaXJlY3RpdmVcIjtcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlXCI7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUudWknLFxuICAgIHNlbGVjdG9yOiAnbi1jb2xsYXBzZSdcbn0pXG5jbGFzcyBDb2xsYXBzZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gNDAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9ICcnO1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSAnJztcbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5oZWlnaHQgPSBlbGUuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgc2VsZi5kaXNwbGF5ID0gZWxlLnN0eWxlLmRpc3BsYXk7XG5cbiAgICAgICAgICAgIGVsZS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgZWxlLnN0eWxlLnRyYW5zaXRpb24gPSAnaGVpZ2h0ICcgKyBzZWxmLmR1cmF0aW9uICsgJ21zJztcblxuICAgICAgICAgICAgaWYoYmluZGluZy5jb21wdXRlKCkpe1xuICAgICAgICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGVsZS5zdHlsZS5oZWlnaHQgPSAwICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgZWxlLnN0eWxlLmhlaWdodCA9IHNlbGYuaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKXtcbiAgICAgICAgaWYoYmluZGluZy5jb21wdXRlKCkpe1xuICAgICAgICAgICAgdGhpcy5oaWRlKGVsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2hvdyhlbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZShlbGUpe1xuICAgICAgICBlbGUuc3R5bGUuaGVpZ2h0ID0gMCArICdweCc7XG5cbiAgICAgICAgdGhpcy5jYW5jZWxUaW1lb3V0KCk7XG5cbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gbnVsbDtcbiAgICAgICAgfSwgdGhpcy5kdXJhdGlvbiAtIDIwKTtcbiAgICB9XG5cbiAgICBzaG93KGVsZSl7XG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcblxuICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9IHRoaXMuZGlzcGxheTtcblxuICAgICAgICB0aGlzLmNhbmNlbFRpbWVvdXQoKTtcblxuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGVsZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYW5jZWxUaW1lb3V0KCkge1xuICAgICAgICBpZih0aGlzLnRpbWVvdXRJZCAhPSBudWxsKXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jb2xsYXBzZSc7IiwiZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnOyIsIlxyXG5mdW5jdGlvbiBnZXRDaGlsZE5vZGVzKG5vZGUpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMsIDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckNoaWxkTm9kZXMobm9kZSkge1xyXG4gICAgZ2V0Q2hpbGROb2Rlcyhub2RlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlZk5vZGUsIG5ld05vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUpO1xyXG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVmTm9kZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTm9kZUJldHdlZW4oYmVnaW5Ob2RlLCBlbmROb2RlKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGJlZ2luTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBnZXRDaGlsZE5vZGVzKHBhcmVudE5vZGUpO1xyXG5cclxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nID09PSBiZWdpbk5vZGUgJiYgY2hpbGQgIT09IGVuZE5vZGUpIHtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyA9PT0gZW5kTm9kZSAmJiBjaGlsZCAhPT0gYmVnaW5Ob2RlKSB7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnROb2RlQWZ0ZXIocmVmTm9kZSwgbmV3Tm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSByZWZOb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgaWYgKHBhcmVudE5vZGUubGFzdENoaWxkID09PSByZWZOb2RlKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdOb2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmTm9kZS5uZXh0U2libGluZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldENoaWxkTm9kZXMsIGNsZWFyQ2hpbGROb2RlcywgcmVwbGFjZU5vZGUsIHJlbW92ZU5vZGUsIHJlbW92ZU5vZGVCZXR3ZWVuLCBpbnNlcnROb2RlQWZ0ZXIgfTsiLCJpbXBvcnQgeyBpc09iamVjdCwgaXNBcnJheSB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxudmFyIHByb3BDaGFuZ2luZ01zZyA9IG5ldyBNZXNzZW5nZXIoKTtcclxudmFyIHByb3BDaGFuZ2VkTXNnID0gbmV3IE1lc3NlbmdlcigpO1xyXG5cclxuY2xhc3MgU2V0UHJvcGVydHlIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGRlZXBQcm94eSkge1xyXG4gICAgICAgIHRoaXMuc2VsZktleSA9ICdfX3NlbGZfXyc7XHJcbiAgICAgICAgdGhpcy5kZWVwUHJveHkgPSBkZWVwUHJveHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHRhcmdldCwga2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZktleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXRba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVlcFByb3h5ICYmIGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBQcm94eSh2YWx1ZSwgbmV3IFNldFByb3BlcnR5SGFuZGxlcih0aGlzLmRlZXBQcm94eSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh0YXJnZXQsIGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWVwUHJveHkgJiYgaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdmFsdWVbdGhpcy5zZWxmS2V5XTtcclxuXHJcbiAgICAgICAgICAgIC8vIHZhbHVlIGlzIGEgcHJveHkgcmV0dXJuIGJ5IHRoaXMgaGFuZGxlclxyXG4gICAgICAgICAgICBpZiAoc2VsZiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHNlbGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xyXG5cclxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlIHx8IChpc0FycmF5KHRhcmdldCkgJiYga2V5ID09PSAnbGVuZ3RoJykpIHtcclxuICAgICAgICAgICAgdmFyIHZhbGlkYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBwcm9wQ2hhbmdpbmdNc2cuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdmFsaWRhdGlvblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBwcm9wQ2hhbmdlZE1zZy5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBHZXRQcm9wZXJ0eUhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcE1hcHMsIGRlZXBQcm94eSkge1xyXG4gICAgICAgIHRoaXMucHJvcE1hcHMgPSBwcm9wTWFwcztcclxuICAgICAgICB0aGlzLmRlZXBQcm94eSA9IGRlZXBQcm94eTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQodGFyZ2V0LCBrZXkpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXRba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVlcFByb3h5ICYmIGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBQcm94eSh2YWx1ZSwgbmV3IEdldFByb3BlcnR5SGFuZGxlcih0aGlzLnByb3BNYXBzLCB0aGlzLmRlZXBQcm94eSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGV4aXN0ZWQgPSB0aGlzLnByb3BNYXBzLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ub2JqID09PSB0YXJnZXQgJiYgaXRlbS5wcm9wID09PSBrZXk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghZXhpc3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BNYXBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgb2JqOiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICBwcm9wOiBrZXlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNldFByb3BlcnR5SGFuZGxlciwgR2V0UHJvcGVydHlIYW5kbGVyLCBwcm9wQ2hhbmdpbmdNc2csIHByb3BDaGFuZ2VkTXNnIH0iLCJpbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9lbGUtdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gaXNNZXNzZW5nZXIob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWVzc2VuZ2VyO1xyXG59XHJcblxyXG5leHBvcnQgeyBpc01lc3Nlbmdlcn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcblxyXG5jbGFzcyBNZXNzZW5nZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGZuKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoZm4pIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFuZGxlcnNbaV0gPT09IGZuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXJlKGFyZ3MsIHNjb3BlKSB7XHJcbiAgICAgICAgdmFyIHJldHVyblZhbHVlO1xyXG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5oYW5kbGVyc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdGhpcy5oYW5kbGVyc1tpXS5jYWxsKHNjb3BlLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1lc3NlbmdlckJ1cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1lc3NlbmdlcnMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzZW5nZXJzW2VdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2VuZ2Vyc1tlXSA9IG5ldyBNZXNzZW5nZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2VuZ2Vyc1tlXTtcclxuICAgIH1cclxuXHJcbiAgICBvbihlLCBmbikge1xyXG4gICAgICAgIHRoaXMuZ2V0KGUpLm9uKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoZSwgZm4pIHtcclxuICAgICAgICB0aGlzLmdldChlKS5vZmYoZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoZSwgYXJncywgc2NvcGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoZSkuZmlyZShhcmdzLCBzY29wZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE1lc3NlbmdlciwgTWVzc2VuZ2VyQnVzIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IHByb3BDaGFuZ2luZ01zZywgcHJvcENoYW5nZWRNc2cgfSBmcm9tICcuL2hhbmRsZXInO1xyXG5cclxuY2xhc3MgUHJvcGVydHlDaGFuZ2VTdWJqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucGxhaW5NYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5yZWdleE1hcCA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbihwcm9wLCBhY3Rpb24sIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgbWFwID0gdXRpbHMuaXNSZWdFeHAocHJvcCkgPyB0aGlzLnJlZ2V4TWFwIDogdGhpcy5wbGFpbk1hcDtcclxuXHJcbiAgICAgICAgaWYgKCFtYXAuaGFzKHByb3ApKSB7XHJcbiAgICAgICAgICAgIG1hcC5zZXQocHJvcCwgW10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgYWN0aW9uLmJlZm9yZUNoYW5nZWQgPSBvcHRpb25zLmJlZm9yZUNoYW5nZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXAuZ2V0KHByb3ApLnB1c2goYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYocHJvcCwgYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIG1hcCA9IHV0aWxzLmlzUmVnRXhwKHByb3ApID8gdGhpcy5yZWdleE1hcCA6IHRoaXMucGxhaW5NYXA7XHJcblxyXG4gICAgICAgIGlmICghbWFwLmhhcyhwcm9wKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYWN0aW9ucyA9IG1hcC5nZXQocHJvcCk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gYWN0aW9ucy5pbmRleE9mKGFjdGlvbik7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXJlQ2hhbmdlZChwcm9wLCBhcmdzKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGFpbk1hcC5oYXMocHJvcCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFpbk1hcC5nZXQocHJvcCkuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5iZWZvcmVDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWdleE1hcC5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb25zLCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuLnRlc3QocHJvcCkpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmVDaGFuZ2luZyhwcm9wLCBhcmdzKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGFpbk1hcC5oYXMocHJvcCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFpbk1hcC5nZXQocHJvcCkuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmJlZm9yZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlZ2V4TWFwLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbnMsIHBhdHRlcm4pIHtcclxuICAgICAgICAgICAgaWYgKHBhdHRlcm4udGVzdChwcm9wKSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmJlZm9yZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMucGxhaW5NYXAuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2V4TWFwLmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE9iamVjdFByb3BlcnR5Q2hhbmdlU3ViamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgICAgIG9uY2hhbmdpbmcgPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3MudGFyZ2V0LCBwcm9wID0gYXJncy5rZXk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmZpcmVDaGFuZ2luZyhvYmosIHByb3AsIGFyZ3MuZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uY2hhbmdlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gYXJncy50YXJnZXQsIHByb3AgPSBhcmdzLmtleTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZmlyZUNoYW5nZWQob2JqLCBwcm9wLCBhcmdzLmRhdGEpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBwcm9wQ2hhbmdpbmdNc2cub24ob25jaGFuZ2luZyk7XHJcbiAgICAgICAgcHJvcENoYW5nZWRNc2cub24ob25jaGFuZ2VkKTtcclxuXHJcbiAgICAgICAgdGhpcy5vZmZDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHByb3BDaGFuZ2luZ01zZy5vZmYob25jaGFuZ2luZyk7XHJcbiAgICAgICAgICAgIHByb3BDaGFuZ2VkTXNnLm9mZihvbmNoYW5nZWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vYmpNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb24ob2JqLCBwcm9wLCBhY3Rpb24sIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIXRoaXMub2JqTWFwLmhhcyhvYmopKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLnNldChvYmosIG5ldyBQcm9wZXJ0eUNoYW5nZVN1YmplY3QoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9iak1hcC5nZXQob2JqKS5vbihwcm9wLCBhY3Rpb24sIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZihvYmosIHByb3AsIGFjdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLm9iak1hcC5oYXMob2JqKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9iak1hcC5nZXQob2JqKS5vZmYocHJvcCwgYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZUNoYW5nZWQob2JqLCBwcm9wLCBhcmdzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JqTWFwLmhhcyhvYmopKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLmdldChvYmopLmZpcmVDaGFuZ2VkKHByb3AsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXJlQ2hhbmdpbmcob2JqLCBwcm9wLCBhcmdzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JqTWFwLmhhcyhvYmopKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLmdldChvYmopLmZpcmVDaGFuZ2luZyhwcm9wLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9mZkNoYW5nZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub2JqTWFwLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vYmpNYXAgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQcm9wZXJ0eUNoYW5nZVN1YmplY3QsIE9iamVjdFByb3BlcnR5Q2hhbmdlU3ViamVjdCB9OyIsInZhciBkZWJ1Z01vZGUgPSB0cnVlLFxyXG4gICAgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxyXG4gICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XHJcblxyXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgYWN0aW9uLCBpZ25vcmVPd24pIHtcclxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uKGluZGV4LCBvYmpbaW5kZXhdKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChpZ25vcmVPd24gfHwgb2JqLmhhc093blByb3BlcnR5KHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKHAsIG9ialtwXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY3Rpb24ob2JqLCBvYmopO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzb21lKG9iaiwgYWN0aW9uKSB7XHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbihpbmRleCwgb2JqW2luZGV4XSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ocCwgb2JqW3BdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbihvYmosIG9iaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHkoKSB7XHJcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBvYmpJbmRleCA9IDAsIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF0sIGZpbHRlcjtcclxuXHJcbiAgICBpZiAoaXNCb29sZWFuKG9iaikpIHtcclxuICAgICAgICBkZWVwID0gb2JqO1xyXG4gICAgICAgIG9iakluZGV4Kys7XHJcbiAgICAgICAgb2JqID0gYXJndW1lbnRzW29iakluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IG9iakluZGV4ICsgMSkge1xyXG4gICAgICAgIGZpbHRlciA9IGFyZ3VtZW50c1tvYmpJbmRleCArIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgICAgICB2YXIgbmV3QXJyID0gW107XHJcbiAgICAgICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBpbmRleCwgaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGRlZXAgPyBjb3B5KGl0ZW0pIDogaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3QXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc09iamVjdChvYmopKSB7XHJcbiAgICAgICAgdmFyIG5ld09iaiA9IG9iamVjdChvYmopO1xyXG4gICAgICAgIGZvckVhY2gob2JqLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwga2V5LCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gZGVlcCA/IGNvcHkodmFsdWUpIDogdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3T2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4dGVuZCgpIHtcclxuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0gYXJndW1lbnRzW2luZGV4XTtcclxuXHJcbiAgICBpZiAoaXNCb29sZWFuKHRhcmdldCkpIHtcclxuICAgICAgICBkZWVwID0gdGFyZ2V0O1xyXG4gICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1srK2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGVlcCkge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZXJnZSgpIHtcclxuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0ge307XHJcblxyXG4gICAgaWYgKGlzQm9vbGVhbihhcmd1bWVudHNbaW5kZXhdKSkge1xyXG4gICAgICAgIGRlZXAgPSBhcmd1bWVudHNbaW5kZXhdO1xyXG4gICAgICAgIGluZGV4Kys7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlZXApIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxhaW5NZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xyXG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0YXJnZXRba2V5XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodGFyZ2V0W2tleV0pICYmIGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9iamVjdChvKSB7XHJcbiAgICBmdW5jdGlvbiBGKCkge1xyXG4gICAgfVxyXG5cclxuICAgIEYucHJvdG90eXBlID0gbztcclxuICAgIHJldHVybiBuZXcgRigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSkge1xyXG4gICAgdmFyIHByb3RvdHlwZSA9IG9iamVjdChzdXBlclR5cGUucHJvdG90eXBlKTtcclxuICAgIHByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YlR5cGU7XHJcbiAgICBzdWJUeXBlLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5oZXJpdChzdWJUeXBlLCBzdXBlclR5cGUpIHtcclxuICAgIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKTtcclxuICAgIHN1YlR5cGUuc3VwZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3VwZXJUeXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb3dlcmNhc2Uoc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b0xvd2VyQ2FzZSgpIDogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cHBlcmNhc2Uoc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b1VwcGVyQ2FzZSgpIDogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTWFwKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1hcDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0JsYW5rT2JqZWN0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWdFeHAodmFsdWUpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1NhbWUob2JqMSwgb2JqMikge1xyXG4gICAgdmFyIHNhbWUgPSAob2JqMSA9PT0gb2JqMik7XHJcblxyXG4gICAgaWYgKCFzYW1lKSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xyXG4gICAgICAgICAgICBpZiAob2JqMS5sZW5ndGggPT09IG9iajIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc09iamVjdChvYmoxKSAmJiBpc09iamVjdChvYmoyKSAmJiBnZXRQcm90b3R5cGVPZihvYmoxKSA9PT0gZ2V0UHJvdG90eXBlT2Yob2JqMikpIHtcclxuICAgICAgICAgICAgc2FtZSA9ICFzb21lKG9iajEsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltrZXldKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJ1Zyhsb2cpIHtcclxuICAgIGlmIChkZWJ1Z01vZGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWlucyhhcnIsIG9iaikge1xyXG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IG9iajtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWluc1N0cihhcnIsIHN0ciwgaWdub3JlQ2FzZSkge1xyXG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHN0ciB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2UoaXRlbSkgPT09IGxvd2VyY2FzZShzdHIpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmosIGtleSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKGtleTMsIHZhbHVlMykge1xyXG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcclxuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGFzUHJvcDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcclxuICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKGtleTMsIHZhbHVlMykge1xyXG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcclxuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGFzUHJvcCA/IHRhcmdldCA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5Ml0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uIChrZXkzLCB2YWx1ZTMpIHtcclxuICAgICAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaGFzUHJvcCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnOiBDYW4gbm90IHNldCBwcm9wZXJ0eSBvZiB1bmRlZmluZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29uY2F0KCkge1xyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBmb3JFYWNoLFxyXG4gICAgc29tZSxcclxuICAgIGNvcHksXHJcbiAgICBleHRlbmQsXHJcbiAgICBtZXJnZSxcclxuICAgIG9iamVjdCxcclxuICAgIGluaGVyaXQsXHJcbiAgICBsb3dlcmNhc2UsXHJcbiAgICB1cHBlcmNhc2UsXHJcbiAgICBpc1VuZGVmaW5lZCxcclxuICAgIGlzRGVmaW5lZCxcclxuICAgIGlzT2JqZWN0LFxyXG4gICAgaXNCbGFua09iamVjdCxcclxuICAgIGlzTnVtYmVyLFxyXG4gICAgaXNEYXRlLFxyXG4gICAgaXNGdW5jdGlvbixcclxuICAgIGlzUmVnRXhwLFxyXG4gICAgaXNCb29sZWFuLFxyXG4gICAgaXNBcnJheSxcclxuICAgIGlzU3RyaW5nLFxyXG4gICAgaXNTYW1lLFxyXG4gICAgZGVidWcsXHJcbiAgICBjb250YWlucyxcclxuICAgIGNvbnRhaW5zU3RyLFxyXG4gICAgaGFzUHJvcGVydHksXHJcbiAgICBnZXRQcm9wZXJ0eSxcclxuICAgIHNldFByb3BlcnR5LFxyXG4gICAgY29uY2F0XHJcbn07IiwiaW1wb3J0IHsgaXNNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5JztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCAqIGFzIGVsZVV0aWxzIGZyb20gJy4uL3V0aWxpdHkvZWxlLXV0aWxzJztcclxuaW1wb3J0IHsgU2V0UHJvcGVydHlIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbGl0eS9oYW5kbGVyJztcclxuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHlDaGFuZ2VTdWJqZWN0IH0gZnJvbSAnLi4vdXRpbGl0eS9zdWJqZWN0JztcclxuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcclxuaW1wb3J0IHsgY29tcGlsZSwgY29tcHV0ZSB9IGZyb20gJy4uL3BhcnNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcclxuICAgIGdldCBwcm94eSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHRoaXMsIG5ldyBTZXRQcm9wZXJ0eUhhbmRsZXIodHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1ldGEpIHtcclxuICAgICAgICBDb21wb25lbnQuY29uc3RydWN0LmNhbGwodGhpcywgbWV0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnN0cnVjdChtZXRhKSB7XHJcbiAgICAgICAgdGhpcy4kJHZub2RlcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kJG93bmVyVk5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLiQkY2hpbGREaXJlY3RpdmVzID0gW107XHJcbiAgICAgICAgdGhpcy4kJGRldGVjdFRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJCRwcm9wQ2hhbmdlZCA9IG5ldyBPYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3QoKTtcclxuXHJcbiAgICAgICAgaWYgKG1ldGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRzZXRNZXRhKG1ldGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJGhvb2tzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJlZm9yZUF0dHJDaGFuZ2U6ICcnLFxyXG4gICAgICAgICAgICBhZnRlckF0dHJDaGFuZ2U6ICcnLFxyXG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxyXG4gICAgICAgICAgICBhZnRlclZpZXdNb3VudDogJycsXHJcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgICRnZXRNZXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YSB8fCB7fTtcclxuICAgIH1cclxuXHJcbiAgICAkc2V0TWV0YSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgJGJpbmRWTm9kZSh2bm9kZSkge1xyXG4gICAgICAgIHRoaXMuJCRvd25lclZOb2RlID0gdm5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgJGhhc0F0dHIocHJvcCkge1xyXG4gICAgICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLCBwcm9wLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAkaW5pdEF0dHIocHJvcCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBwcm9wLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5iZWZvcmVBdHRyQ2hhbmdlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJlZm9yZUF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcywgcHJvcCwgdmFsdWUsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmFmdGVyQXR0ckNoYW5nZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZnRlckF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkaW5pdEF0dHJEb25lKCkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25Jbml0KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uSW5pdC5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkc2V0QXR0cihwcm9wLCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMsIHByb3AsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmJlZm9yZUF0dHJDaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlQXR0ckNoYW5nZS5jYWxsKHRoaXMsIHByb3AsIHZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLnByb3h5LCBwcm9wLCB2YWx1ZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuYWZ0ZXJBdHRyQ2hhbmdlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFmdGVyQXR0ckNoYW5nZS5jYWxsKHRoaXMsIHByb3AsIHZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRsaXN0ZW4oZSwgZm4pIHtcclxuICAgICAgICB2YXIgbWVzc2VuZ2VyID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywgZSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGlzTWVzc2VuZ2VyKG1lc3NlbmdlcikpIHtcclxuICAgICAgICAgICAgbWVzc2VuZ2VyLm9uKGZuKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSArICcgaXMgbm90IGEgZXZlbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0VGVtcGxhdGUoc3luYykge1xyXG4gICAgICAgIHZhciBtZXRhID0gdGhpcy4kZ2V0TWV0YSgpO1xyXG5cclxuICAgICAgICBpZiAoc3luYykge1xyXG4gICAgICAgICAgICByZXR1cm4gbWV0YS50ZW1wbGF0ZSB8fCAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS50ZW1wbGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobWV0YS50ZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS50ZW1wbGF0ZVVybCkpIHtcclxuICAgICAgICAgICAgICAgIGluamVjdG9yLnNlcnZpY2UoJyR0ZW1wbGF0ZUNhY2hlJykuZ2V0VHBsQnlVcmwobWV0YS50ZW1wbGF0ZVVybCkudGhlbihmdW5jdGlvbiAodHBsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cGwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICR1c2luZyhuYW1lKSB7XHJcbiAgICAgICAgdmFyIG1ldGEgPSB0aGlzLiRnZXRNZXRhKCksXHJcbiAgICAgICAgICAgIHVzaW5nID0gbWV0YS51c2luZyxcclxuICAgICAgICAgICAgc2VnbWVudHMgPSBuYW1lLnNwbGl0KCcuJyksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHNlZ21lbnRzLnBvcCgpLFxyXG4gICAgICAgICAgICBzcGFjZU5hbWUgPSBzZWdtZW50cy5qb2luKCcuJyk7XHJcblxyXG4gICAgICAgIGlmIChzcGFjZU5hbWUgJiYgdXRpbHMuaXNPYmplY3QodXNpbmcpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNvbWUodXNpbmcsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBzcGFjZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gdmFsdWUgKyAnLicgKyBjbGFzc05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgJG1ha2VDb21waWxlT3B0aW9ucygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ2V0RW1iZWRUcGw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiQkb3duZXJWTm9kZS5nZXRJbm5lclRwbCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250YWluc0NvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jb250YWluc0NvbXBvbmVudChzZWxmLiR1c2luZyhuYW1lKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZUNvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVDb21wb25lbnQoc2VsZi4kdXNpbmcobmFtZSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250YWluc0RpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jb250YWluc0RpcmVjdGl2ZShzZWxmLiR1c2luZyhuYW1lKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZURpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVEaXJlY3RpdmUoc2VsZi4kdXNpbmcobmFtZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAkaGFzVk5vZGVzKCkge1xyXG4gICAgICAgIHJldHVybiB1dGlscy5pc0FycmF5KHRoaXMuJCR2bm9kZXMpO1xyXG4gICAgfVxyXG5cclxuICAgICRmcm9tVk5vZGVzKCkge1xyXG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy4kJHZub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh2bm9kZS5nZXREb21FbGVtZW50KCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJGNsZWFyVk5vZGVzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy4kaGFzVk5vZGVzKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiQkdm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgICAgIHZub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiQkdm5vZGVzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAkcmVuZGVyKHN5bmMpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGZyYWdtZW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHN5bmMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJGhhc1ZOb2RlcygpKSB7XHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IHRoaXMuJGZyb21WTm9kZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gY29tcGlsZSh0aGlzLiRnZXRUZW1wbGF0ZShzeW5jKSwgdGhpcy4kbWFrZUNvbXBpbGVPcHRpb25zKCkpKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuJGhhc1ZOb2RlcygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNlbGYuJGZyb21WTm9kZXMoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiRnZXRUZW1wbGF0ZSgpLnRoZW4oZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGNvbXBpbGUoaHRtbCwgc2VsZi4kbWFrZUNvbXBpbGVPcHRpb25zKCkpKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZnJhZ21lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkcmVmcmVzaChzeW5jKSB7XHJcbiAgICAgICAgdGhpcy4kY2xlYXJWTm9kZXMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcmVuZGVyKHN5bmMpO1xyXG4gICAgfVxyXG5cclxuICAgICRtb3VudChzZWxlY3Rvck9yRWxlbWVudCwgc3luYykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgZWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVVdGlscy5jbGVhckNoaWxkTm9kZXMoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGlmIChzeW5jKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4kcmVuZGVyKHN5bmMpKTtcclxuICAgICAgICAgICAgc2VsZi4kYWZ0ZXJWaWV3TW91bnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJlbmRlcihzeW5jKS50aGVuKGZ1bmN0aW9uIChlbGUpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuJGFmdGVyVmlld01vdW50KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkYWZ0ZXJWaWV3TW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5hZnRlclZpZXdNb3VudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZnRlclZpZXdNb3VudC5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkdW5tb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy4kJG93bmVyVk5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiQkb3duZXJWTm9kZS4kcmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJCRvd25lclZOb2RlLnJlbW92ZURvbUVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy4kaGFzVk5vZGVzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy4kJHZub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdm5vZGUucmVtb3ZlRG9tRWxlbWVudCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiQkcGFyZW50Q29tcG9uZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kJHBhcmVudENvbXBvbmVudC4kcmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkZGV0ZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLiQkZGV0ZWN0VGltZW91dCB8fCAhdGhpcy4kJHZub2Rlcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi4kJGRldGVjdFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi4kJGRldGVjdFRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICBzZWxmLiQkdm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgICAgICAgICB2bm9kZS5kZXRlY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHZhbGlkYXRlKCkge1xyXG4gICAgICAgIHZhciBvYmosIHByb3AsIGFjdGlvbiwgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICBvYmogPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMV07XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IGFyZ3VtZW50c1syXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXJndW1lbnRzIGVycm9yJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiQkcHJvcENoYW5nZWQub24ob2JqLCBwcm9wLCBhY3Rpb24sIHtcclxuICAgICAgICAgICAgYmVmb3JlQ2hhbmdlZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLiQkcHJvcENoYW5nZWQub2ZmKG9iaiwgcHJvcCwgYWN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgICR3YXRjaCgpIHtcclxuICAgICAgICB2YXIgb2JqLCBwcm9wLCBhY3Rpb24sIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBvYmogPSB0aGlzO1xyXG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgb2JqID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzFdO1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3VtZW50cyBlcnJvcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kJHByb3BDaGFuZ2VkLm9uKG9iaiwgcHJvcCwgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi4kJHByb3BDaGFuZ2VkLm9mZihvYmosIHByb3AsIGFjdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAkcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiQkY2hpbGRDb21wb25lbnRzLmluZGV4T2YoY2hpbGQpO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgY2hpbGQuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkZGlzcG9zZShpc0Zyb21WTm9kZSkge1xyXG4gICAgICAgIC8vIHJlbW92ZSB2aXJ0dWFsIG5vZGUgZmlyc3QgaW4gY2FzZSBpdCB0cmlnZ2VycyBwYXJlbnQgY29tcG9uZW50IGRlc3Ryb3lcclxuICAgICAgICB0aGlzLiR1bm1vdW50KCk7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJCRkZXRlY3RUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLiQkZGV0ZWN0VGltZW91dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRjbGVhclZOb2RlcygpO1xyXG4gICAgICAgIHRoaXMuJCRwcm9wQ2hhbmdlZC5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIGlmIChpc0Zyb21WTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLiQkb3duZXJWTm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzID0gbnVsbDtcclxuICAgICAgICB0aGlzLiQkY2hpbGREaXJlY3RpdmVzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAkZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLiRkaXNwb3NlKCk7XHJcblxyXG4gICAgICAgIC8vIGRlc3Ryb3kgdmlydHVhbCBub2RlIGluIHRoZSBlbmQgYmVjYXVzZSBpdCBtYXkgYmluZHMgbG9naWMgYWJvdXQgZGVzdHJveVxyXG4gICAgICAgIGlmICh0aGlzLiQkb3duZXJWTm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCRvd25lclZOb2RlLmRpc3Bvc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuJCRvd25lclZOb2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGdldFBhcmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJHBhcmVudENvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICAkY3JlYXRlQ29tcG9uZW50KGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IGluamVjdG9yLmNyZWF0ZUNvbXBvbmVudChjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICAgICAgY29tcG9uZW50LiQkcGFyZW50Q29tcG9uZW50ID0gdGhpcztcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgICRldmFsKGV4cCkge1xyXG4gICAgICAgIHJldHVybiBjb21wdXRlKGV4cCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJGluaGVyaXQocGFyZW50Q21wKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc2VsZiwgdXRpbHMub2JqZWN0KHBhcmVudENtcCkpO1xyXG5cclxuICAgICAgICAvLyB0b2RvIC0gcmVzb2x2ZSBpc3N1ZSBjYWxsaW5nIHBhcmVudCBjb21wb25lbnQncyBsaWZlY3ljbGUgaG9va3NcclxuICAgICAgICB1dGlscy5mb3JFYWNoKHNlbGYuJGhvb2tzKCksIGZ1bmN0aW9uIChob29rKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmhhc093blByb3BlcnR5KGhvb2spID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNlbGZbaG9va10gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBEaXJlY3RpdmUuY29uc3RydWN0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcclxuICAgICAgICB0aGlzLiQkYmluZGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kJHZub2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm91dHB1dCA9IGZhbHNlO1xyXG4gICAgICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgICRob29rcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxyXG4gICAgICAgICAgICBvbkNvbXBpbGU6ICcnLFxyXG4gICAgICAgICAgICBvbkluc2VydDogJycsXHJcbiAgICAgICAgICAgIG9uRGV0ZWN0OiAnJyxcclxuICAgICAgICAgICAgb25VcGRhdGU6ICcnLFxyXG4gICAgICAgICAgICBvbkRlc3Ryb3k6ICcnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0TWV0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGEgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgJHNldE1ldGEodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiQkbWV0YSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgICRiaW5kVk5vZGUodm5vZGUpIHtcclxuICAgICAgICB0aGlzLiQkdm5vZGUgPSB2bm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAkc2V0QmluZGluZyhiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy4kJGJpbmRpbmcgPSBiaW5kaW5nO1xyXG4gICAgfVxyXG5cclxuICAgICRjb21waWxlKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uQ29tcGlsZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBpbGUuY2FsbCh0aGlzLCB0aGlzLiQkdm5vZGUsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkaW5zZXJ0KGVsZSwgY29tKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkluc2VydCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkluc2VydC5jYWxsKHRoaXMsIGVsZSwgdGhpcy4kJGJpbmRpbmcsIGNvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRkZXRlY3QoZWxlLCBjb20pIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGV0ZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRldGVjdC5jYWxsKHRoaXMsIGVsZSwgdGhpcy4kJGJpbmRpbmcsIGNvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy4kJGJpbmRpbmcuZGV0ZWN0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy4kdXBkYXRlKGVsZSwgY29tKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJHVwZGF0ZShlbGUsIGNvbSkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25VcGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUuY2FsbCh0aGlzLCBlbGUsIHRoaXMuJCRiaW5kaW5nLCBjb20pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkZGlzcG9zZShpc0Zyb21WTm9kZSkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzRnJvbVZOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCR2bm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiQkYmluZGluZyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgJGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy4kZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy4kJHZub2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kJHZub2RlLmRpc3Bvc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuJCR2bm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIEZpbHRlci5jb25zdHJ1Y3QuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29uc3RydWN0KCkge1xyXG4gICAgICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgICRob29rcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxyXG4gICAgICAgICAgICBvbkRlc3Ryb3k6ICcnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0TWV0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGEgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgJHNldE1ldGEodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiQkbWV0YSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgICRleGVjdXRlKCkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25FeGVjdXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkV4ZWN1dGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHkvbWVzc2FnZSc7XHJcbmltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUgfWZyb20gJy4vZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi9maWx0ZXInO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcclxuXHJcbmZ1bmN0aW9uIG5hbWVzcGFjZShucykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcclxuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50KG5hbWUsIGRlZik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXJlY3RpdmU6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xyXG4gICAgICAgICAgICAgICAgZGVmID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnNlcnQ6IGRlZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU6IGRlZlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xyXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlKG5hbWUsIGRlZik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJ2aWNlOiBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XHJcbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcclxuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2UobmFtZSwgZGVmKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWYgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkV4ZWN1dGU6IGRlZlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKG5hbWUsIGRlZik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KG5hbWUsIGRlZikge1xyXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XHJcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuY29tcG9uZW50LFxyXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihDb21wb25lbnQpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlyZWN0aXZlKG5hbWUsIGRlZikge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xyXG4gICAgICAgIGRlZiA9IHtcclxuICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgb25JbnNlcnQ6IGRlZixcclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiBkZWZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XHJcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuZGlyZWN0aXZlLFxyXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihEaXJlY3RpdmUpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyKG5hbWUsIGRlZikge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xyXG4gICAgICAgIGRlZiA9IHtcclxuICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgb25FeGVjdXRlOiBkZWZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XHJcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuZmlsdGVyLFxyXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihGaWx0ZXIpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VydmljZShuYW1lLCBkZWYpIHtcclxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xyXG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LnNlcnZpY2UsXHJcbiAgICAgICAgc3VwZXJDbGFzczogbWFrZUNvbnN0cnVjdG9yKFNlcnZpY2UpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wb25lbnQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQ29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RpcmVjdGl2ZShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEaXJlY3RpdmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRmlsdGVyKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEZpbHRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTZXJ2aWNlKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNlcnZpY2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJvb3RzdHJhcChzZWxlY3Rvck9yRWxlbWVudCkge1xyXG4gICAgdmFyIGVsZW1lbnQsIHRwbDtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZWN0b3JPckVsZW1lbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRwbCA9IGVsZW1lbnQuaW5uZXJIVE1MO1xyXG5cclxuICAgIG5ldyBDb21wb25lbnQoe1xyXG4gICAgICAgIHRlbXBsYXRlOiB0cGxcclxuICAgIH0pLiRtb3VudChlbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUNvbnN0cnVjdG9yKGNscykge1xyXG4gICAgZnVuY3Rpb24gZigpIHtcclxuICAgICAgICBjbHMuY29uc3RydWN0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZi5wcm90b3R5cGUgPSBjbHMucHJvdG90eXBlO1xyXG4gICAgcmV0dXJuIGY7XHJcbn1cclxuXHJcbmV4cG9ydCB7IG5hbWVzcGFjZSwgaW5qZWN0b3IsIGNvbXBvbmVudCwgZGlyZWN0aXZlLCBmaWx0ZXIsIHNlcnZpY2UsIGlzQ29tcG9uZW50LCBpc0RpcmVjdGl2ZSwgaXNGaWx0ZXIsIGlzU2VydmljZSwgYm9vdHN0cmFwIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHkvbWVzc2FnZSc7XHJcblxyXG52YXIgdHlwZUNvbnN0ID0ge1xyXG4gICAgZmlsdGVyOiAnZmlsdGVyJyxcclxuICAgIHNlcnZpY2U6ICdzZXJ2aWNlJyxcclxuICAgIGNvbXBvbmVudDogJ2NvbXBvbmVudCcsXHJcbiAgICBkaXJlY3RpdmU6ICdkaXJlY3RpdmUnXHJcbn07XHJcblxyXG52YXIgbmFtZVBhdHRlcm4gPSAvXlthLXpfXFwkXVtcXHdcXCQtXSovaTtcclxuXHJcbmNsYXNzIEluamVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0ge307XHJcbiAgICAgICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzID0ge307XHJcbiAgICAgICAgdGhpcy5pbnNDb250YWluZXIgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlcyhjb250cmFjdFR5cGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnNDb250YWluZXJbY29udHJhY3RUeXBlXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnNDb250YWluZXJbY29udHJhY3RUeXBlXTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcihjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGlmIChzZWxlY3Rvci5pbmRleE9mKCcuJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBjaGFyYWN0ZXIgXCIuXCInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5nZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSk7XHJcblxyXG4gICAgICAgIGlmIChtYXBwaW5nW3NlbGVjdG9yXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG1hcHBpbmdbc2VsZWN0b3JdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IG1hcHBpbmdbc2VsZWN0b3JdLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YS5uYW1lc3BhY2UgPT09IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzZWxlY3RvciArICcgaXMgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBtYXRjaGVzWzBdLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFwcGluZ1tzZWxlY3Rvcl0ucHVzaChjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJDb21wb25lbnQoc2VsZWN0b3IsIGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0eXBlQ29uc3QuY29tcG9uZW50LCBzZWxlY3RvciwgY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWlucyhjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xyXG4gICAgICAgIHZhciBzZWdtZW50cyA9IHNlbGVjdG9yLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBzZWxlY3RvciA9IHNlZ21lbnRzLnBvcCgpO1xyXG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBzZWdtZW50cy5qb2luKCcuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShtYXBwaW5nLCBzZWxlY3RvciwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBtYXBwaW5nW3NlbGVjdG9yXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zQ29tcG9uZW50KHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbnModHlwZUNvbnN0LmNvbXBvbmVudCwgc2VsZWN0b3IsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zRGlyZWN0aXZlKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbnModHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xyXG4gICAgICAgIHZhciBzZWdtZW50cyA9IHNlbGVjdG9yLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBzZWxlY3RvciA9IHNlZ21lbnRzLnBvcCgpO1xyXG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBzZWdtZW50cy5qb2luKCcuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShtYXBwaW5nLCBzZWxlY3RvciwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBtYXBwaW5nW3NlbGVjdG9yXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3RUeXBlICsgJyAnICsgc2VsZWN0b3IgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc2VsZWN0b3IgKyAnIGlzIG5vdCBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG5hbWVzcGFjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlcyA9IGNvbnN0cnVjdG9ycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYW1lc3BhY2UgJyArIG5hbWVzcGFjZXMuam9pbignfCcpICsgJyBhbGwgaGF2ZSAnICsgc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wb25lbnQoc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmNvbXBvbmVudCwgc2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpcmVjdGl2ZShzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0eXBlQ29uc3QuZGlyZWN0aXZlLCBzZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsdGVyKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5maWx0ZXIsIHNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZXJ2aWNlKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5zZXJ2aWNlLCBzZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IpIHtcclxuICAgICAgICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmdldChjb250cmFjdFR5cGUsIHNlbGVjdG9yKSwgaW5zdGFuY2U7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29udHJhY3RUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmNvbXBvbmVudDpcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVDb21wb25lbnQoY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmRpcmVjdGl2ZTpcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVEaXJlY3RpdmUoY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmZpbHRlcjpcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVGaWx0ZXIoY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LnNlcnZpY2U6XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlU2VydmljZShjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDb21wb25lbnQoY29uc3RydWN0b3IpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRDb21wb25lbnQoY29uc3RydWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRGlyZWN0aXZlKGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0RGlyZWN0aXZlKGNvbnN0cnVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZpbHRlcihjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldEZpbHRlcihjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTZXJ2aWNlKGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlLCBzZXJ2aWNlcyA9IHRoaXMuZ2V0SW5zdGFuY2VzKHR5cGVDb25zdC5zZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0U2VydmljZShjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGEubm9uU2hhcmVkKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBzZXJ2aWNlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2YgY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIHNlcnZpY2VzLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNlcnZpY2Uoc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTZXJ2aWNlKHNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXYWl0aW5nVG9FeHRlbmRzKGNvbnRyYWN0VHlwZSkge1xyXG4gICAgICAgIGlmICghdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0pIHtcclxuICAgICAgICAgICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdhaXRpbmdUb0V4dGVuZHMoY29udHJhY3RUeXBlLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTZWxlY3RvcihzZWxlY3RvciwgY29udHJhY3RUeXBlKSB7XHJcbiAgICAgICAgaWYgKG5hbWVQYXR0ZXJuLnRlc3Qoc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25zdHJ1Y3Rvck5hbWUgPSAnJztcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0gc2VsZWN0b3Iuc3BsaXQoJy0nKTtcclxuXHJcbiAgICAgICAgICAgIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSB1dGlscy51cHBlcmNhc2Uoc2VnbWVudFswXSkgKyBzZWdtZW50LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbnRyYWN0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuY29tcG9uZW50OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSAnQ29tcG9uZW50JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmRpcmVjdGl2ZTpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ0RpcmVjdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5maWx0ZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdGaWx0ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3Quc2VydmljZTpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ1NlcnZpY2UnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3JOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNlbGVjdG9yICsgJ2lzIG5vdCBhIHZhbGlkIG5hbWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRDb25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAgICAgY29uc3RydWN0b3IsXHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSA9IHRoaXMuY2hlY2tTZWxlY3RvcihzZWxlY3Rvciwgb3B0aW9ucy5jb250cmFjdFR5cGUpLFxyXG4gICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzID0gc2VsZi5nZXRXYWl0aW5nVG9FeHRlbmRzKG9wdGlvbnMuY29udHJhY3RUeXBlKSxcclxuICAgICAgICAgICAgb25Db25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25zdHJ1Y3Rvci5zdXBlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24obWV0YS5jb25zdHJ1Y3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YS5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzZW5nZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBGdW5jdGlvbignb25Db25zdHJ1Y3QnLCAnXCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uICcgKyBjb25zdHJ1Y3Rvck5hbWUgKyAnKCl7b25Db25zdHJ1Y3QuY2FsbCh0aGlzKTt9OycpKG9uQ29uc3RydWN0KTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ob3B0aW9ucy5zdXBlckNsYXNzKSkge1xyXG4gICAgICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBvcHRpb25zLnN1cGVyQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0YS5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG5cclxuICAgICAgICAvLyBhcHBseSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKG1ldGEuZXh0ZW5kcykpIHtcclxuICAgICAgICAgICAgaWYgKGluamVjdG9yLmNvbnRhaW5zKG9wdGlvbnMuY29udHJhY3RUeXBlLCBtZXRhLmV4dGVuZHMpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3VwZXJPbmUgPSBpbmplY3Rvci5nZXQob3B0aW9ucy5jb250cmFjdFR5cGUsIG1ldGEuZXh0ZW5kcyk7XHJcbiAgICAgICAgICAgICAgICByZW1haW5Db25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgY29uc3RydWN0b3IsIHN1cGVyT25lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdhaXRpbmdUb0V4dGVuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJOYW1lOiBtZXRhLmV4dGVuZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChzdXBlck9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1haW5Db25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgY29uc3RydWN0b3IsIHN1cGVyT25lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZE1ldGEobWV0YSwgc3VwZXJPbmUpIHtcclxuICAgICAgICAgICAgaWYgKHN1cGVyT25lLnByb3RvdHlwZS4kJG1ldGEgJiYgc3VwZXJPbmUucHJvdG90eXBlLiQkbWV0YS5wcm90ZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihvcHRpb25zLmNvbnRyYWN0VHlwZSArICc6ICcgKyBtZXRhLmV4dGVuZHMgKyAnIGlzIHByb3RlY3RlZCwgaXQgaXMgbm90IGFsbG93ZWQgdG8gZXh0ZW5kIScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc3VwZXJNZXRhID0gc3VwZXJPbmUucHJvdG90eXBlLiQkbWV0YTtcclxuICAgICAgICAgICAgdmFyIGNvcHkgPSB1dGlscy5jb3B5KHRydWUsIHN1cGVyTWV0YSwgZnVuY3Rpb24gKG9iaiwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIShvYmogPT09IHN1cGVyTWV0YSAmJiAoa2V5ID09PSAnY29uc3RydWN0JyB8fCBrZXkgPT09ICdtZXRob2RzJykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHRydWUsIGNvcHksIG1ldGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yLCBzdXBlck9uZSkge1xyXG4gICAgICAgICAgICBpZiAoc3VwZXJPbmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QobWV0YS5tZXRob2RzKSkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuZXh0ZW5kKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgbWV0YS5tZXRob2RzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi5yZWdpc3RlckNvbnN0cnVjdG9yKG9wdGlvbnMuY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IsIG1ldGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYW55IGNvbXBvbmVudCBleHRlbmRzIGN1cnJlbnQgY29tcG9uZW50XHJcbiAgICAgICAgICAgIHZhciB3YWl0aW5nVG9FeHRlbmRzMiA9IFtdLCBmdWxsU2VsZWN0b3IgPSBtZXRhLm5hbWVzcGFjZSArICcuJyArIHNlbGVjdG9yO1xyXG4gICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnN1cGVyTmFtZSA9PT0gZnVsbFNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jYWxsYmFjay5jYWxsKG51bGwsIGNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdhaXRpbmdUb0V4dGVuZHMyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxmLnNldFdhaXRpbmdUb0V4dGVuZHMob3B0aW9ucy5jb250cmFjdFR5cGUsIHdhaXRpbmdUb0V4dGVuZHMyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckNvbnN0cnVjdG9yKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yLCBtZXRhKSB7XHJcbiAgICAgICAgdmFyIHN1cGVyTWV0YSA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGE7XHJcblxyXG4gICAgICAgIGlmIChzdXBlck1ldGEgJiYgc3VwZXJNZXRhLnByb3RlY3RlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3RUeXBlICsgJzogJyArIG1ldGEuZXh0ZW5kcyArICcgaXMgcHJvdGVjdGVkLCBpdCBpcyBub3QgYWxsb3dlZCB0byBleHRlbmQhJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodHJ1ZSwgc3VwZXJNZXRhLCBmdW5jdGlvbiAob2JqLCBrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICEob2JqID09PSBzdXBlck1ldGEgJiYgKGtleSA9PT0gJ2NvbnN0cnVjdCcgfHwga2V5ID09PSAnbWV0aG9kcycpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWV0YSA9IHV0aWxzLm1lcmdlKHRydWUsIGNvcHksIG1ldGEpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhID0gbWV0YTtcclxuXHJcbiAgICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IGlmIGl0IGlzIGdsb2JhbFxyXG4gICAgICAgIGlmICghbWV0YS5sb2NhbCkge1xyXG4gICAgICAgICAgICBpbmplY3Rvci5yZWdpc3Rlcihjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluamVjdFNlcnZpY2VzKGluc3RhbmNlKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBtZXRhID0gaW5zdGFuY2UuJGdldE1ldGEoKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG1ldGEuaW5qZWN0KSkge1xyXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG1ldGEuaW5qZWN0LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGluc3RhbmNlLCBrZXksIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpdmF0ZUtleSA9ICckJCcgKyBrZXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VbcHJpdmF0ZUtleV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJpdmF0ZUtleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2UodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VbcHJpdmF0ZUtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudmFyIGluamVjdG9yID0gbmV3IEluamVjdG9yKCk7XHJcblxyXG5leHBvcnQgeyB0eXBlQ29uc3QsIEluamVjdG9yLCBpbmplY3RvciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQge2luamVjdG9yfSBmcm9tICcuL2luamVjdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFNlcnZpY2UuY29uc3RydWN0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcclxuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAkaG9va3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb25Jbml0OiAnJyxcclxuICAgICAgICAgICAgb25EZXN0cm95OiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgJGdldE1ldGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgICRzZXRNZXRhKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy4kJG1ldGEgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAkZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGVzdHJveSkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYXhpb3NfXzsiXSwic291cmNlUm9vdCI6IiJ9