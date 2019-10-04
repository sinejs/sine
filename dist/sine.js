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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2NkYXRhc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY3VzdG9tLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9kb2N0eXBlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS90ZXh0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RlY29yYXRvci9zZXJ2aWNlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2JpbmQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvaGlkZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9pZi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9tb2RlbC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc2hvdy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9jaGVja2VkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3JlYWRvbmx5LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3N0YXRlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC13aGVuLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9odG1sLWxleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2h0bWwtcGFyc2VyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2xleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL3BhcnNlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3NlcnZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL3RlbXBsYXRlLWNhY2hlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9lbGUtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9tZXNzYWdlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9zdWJqZWN0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS91dGlscy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvY29tcG9uZW50LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2luamVjdG9yLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9zZXJ2aWNlLmpzIiwid2VicGFjazovL3NpbmUvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImF4aW9zXCIsXCJjb21tb25qczJcIjpcImF4aW9zXCIsXCJhbWRcIjpcImF4aW9zXCIsXCJyb290XCI6XCJheGlvc1wifSJdLCJuYW1lcyI6WyJldmVudFRleHQiLCJkb21FdmVudHMiLCJzcGxpdCIsIkF0dHJOb2RlIiwibmFtZSIsInZhbHVlIiwiVk5vZGVUeXBlIiwiYXR0cmlidXRlIiwicXVvdGUiLCJvcmdOb2RlTmFtZSIsImlzRXZlbnQiLCJpc0JpbmRpbmciLCJpc0RvbUV2ZW50IiwiaXNEaXJlY3RpdmUiLCJkaXJlY3RpdmUiLCJvd25lclZFbGVtZW50Iiwib3duZXJFbGVtZW50Iiwib3duZXJDb21wb25lbnQiLCJiaW5kaW5nIiwiQmluZGluZyIsImtleSIsIm5vZGVWYWx1ZSIsImNvbXBpbGUiLCJvcHRpb25zIiwibm9kZU5hbWUiLCJzdGFydHNXaXRoIiwic3Vic3RyIiwidXRpbHMiLCJzZXRPdXRwdXQiLCJiaW5kIiwiY29udGFpbnNEaXJlY3RpdmUiLCJjcmVhdGVEaXJlY3RpdmUiLCIkYmluZFZOb2RlIiwib3V0cHV0IiwiRXJyb3IiLCJzY29wZSIsInNlbGYiLCJzZXRTY29wZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29tcHV0ZSIsImxvY2FscyIsIiRldmVudCIsIiRhcmdzIiwiJGVsZW1lbnQiLCIkbGlzdGVuIiwiYXJncyIsIiQkY2hpbGREaXJlY3RpdmVzIiwicHVzaCIsIiRzZXRCaW5kaW5nIiwiJGhhc0F0dHIiLCIkaW5pdEF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJ3YXRjaFByb3BzIiwiZGV0ZWN0IiwiaGFzQ2hhbmdlIiwidXBkYXRlIiwiJGRldGVjdCIsIiRzZXRBdHRyIiwiJGluc2VydCIsImlzRnJvbURpcmVjdGl2ZSIsImRlc3Ryb3kiLCIkZGVzdHJveSIsIiRkaXNwb3NlIiwiZGlzcG9zZSIsIlZOb2RlIiwiZWxlbWVudCIsInRleHQiLCJjZGF0YVNlY3Rpb24iLCJlbnRpdHlSZWZlcmVuY2UiLCJlbnRpdHkiLCJwcm9jZXNzaW5nSW5zdHJ1Y3Rpb24iLCJjb21tZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudFR5cGUiLCJkb2N1bWVudEZyYWdtZW50Iiwibm90YXRpb24iLCJjdXN0b20iLCJ0eXBlIiwibm9kZVR5cGUiLCJjaGlsZE5vZGVzIiwicGFyZW50Tm9kZSIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsIm93bmVyVkRvY3VtZW50IiwiY2hpbGQiLCJsZW5ndGgiLCJmb3JFYWNoIiwiaW5kZXgiLCIkYnVpbGRTaWJsaW5nIiwicmVtb3ZlQ2hpbGQiLCIkcmVtb3ZlIiwiJGNsZWFyUGFyZW50QW5kU2libGluZyIsImNvbXBpbGVPcHRpb25zIiwicmVmQ2hpbGQiLCJuZXdDaGlsZCIsImluZGV4T2YiLCJzcGxpY2UiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsInJlc3VsdCIsIm1hcCIsImRpcmVjdGl2ZXMiLCJpdGVtIiwiY29uY2F0IiwibGluayIsImFmdGVyTGluayIsIkV4cE5vZGUiLCJvbGRWYWx1ZSIsIm9ialByb3BzIiwiUHJveHkiLCJHZXRQcm9wZXJ0eUhhbmRsZXIiLCJwcm9wcyIsImlzRXhwIiwic2VnbWVudHMiLCJyaWdodFN0ciIsImNoYW5nZSIsIk1lc3NlbmdlciIsImV4cCIsImxlZnRTdHIiLCJwYXR0ZXJuIiwibGFzdEluZGV4IiwibWF0Y2giLCJleGVjIiwic3Vic3RyaW5nIiwic2VnbWVudCIsImFjdGlvbiIsImdldFByb3BzIiwib2JqUHJvcCIsIiR3YXRjaCIsIm9iaiIsInByb3AiLCJmaXJlIiwib24iLCJzb21lIiwiQ0RhdGFTZWN0aW9uTm9kZSIsIkNvbW1lbnROb2RlIiwiY3JlYXRlQ29tbWVudCIsIkN1c3RvbU5vZGUiLCJsaW5rZXIiLCJjYWxsIiwib25JbnNlcnQiLCJvbkRldGVjdCIsIm9uSGFzQ2hhbmdlIiwib25VcGRhdGUiLCJvbkRlc3Ryb3kiLCJEb2N1bWVudFR5cGVOb2RlIiwiRG9jdW1lbnROb2RlIiwiRWxlbWVudE5vZGUiLCJhdHRyaWJ1dGVzIiwiY29tcG9uZW50Iiwic2VsZkNsb3NlZCIsImlzQ29tcG9uZW50IiwiYXR0ciIsInRhcmdldCIsIm1hdGNoZXMiLCJmaWx0ZXIiLCJiZWxvbmdUbyIsInNldFZhbHVlIiwiYXR0clRwbCIsImNoaWxkVHBsIiwiZ2V0T3V0ZXJUcGwiLCJ0cGwiLCJwYXJzZSIsInZub2RlIiwiY2xlYXJDaGlsZE5vZGVzIiwiJCRtZXRhIiwic2VsZWN0b3IiLCJjb250YWluc0NvbXBvbmVudCIsImNyZWF0ZUVsZW1lbnQiLCIkY3JlYXRlQ29tcG9uZW50IiwiJGluaXRBdHRyRG9uZSIsIiRtb3VudCIsImlzRnJvbUNvbXBvbmVudCIsInJlbW92ZURvbUVsZW1lbnQiLCJlbGVVdGlscyIsIkRvY3VtZW50RnJhZ21lbnROb2RlIiwiVGV4dE5vZGUiLCJyZW5kZXIiLCJjcmVhdGVUZXh0Tm9kZSIsIm1ldGEiLCJpbmplY3RvciIsInJlZ2lzdGVyQ29uc3RydWN0b3IiLCJ0eXBlQ29uc3QiLCJzZXJ2aWNlIiwiQmluZERpcmVjdGl2ZSIsIm5hbWVzcGFjZSIsImVsZSIsImlubmVyVGV4dCIsIkRpcmVjdGl2ZSIsIkVtYmVkRGlyZWN0aXZlIiwiYXR0ck5vZGUiLCJlbWJlZFRwbCIsImdldEVtYmVkVHBsIiwic2V0SW5uZXJUcGwiLCJIaWRlRGlyZWN0aXZlIiwic3R5bGUiLCJkaXNwbGF5IiwiSWZEaXJlY3RpdmUiLCJNb2RlbERpcmVjdGl2ZSIsImNvbSIsIm5ld3ZhbHVlIiwiUmVwZWF0RGlyZWN0aXZlIiwiaXRlbUV4cCIsIml0ZW1zRXhwIiwiaXRlbVRlbXBsYXRlIiwiZGF0YUl0ZW1zIiwiY21wSXRlbXMiLCJoZWFkZXIiLCJmb290ZXIiLCJhcmciLCJlbGVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiY3JlYXRlQ3VzdG9tIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaXRlbXMiLCIkZXZhbCIsInNldERhdGFJdGVtcyIsInJlcGxhY2VDaGlsZCIsImNoaWxkU2NvcGUiLCJjbXBJdGVtIiwiZGF0YUl0ZW0iLCJmaWx0ZXJzIiwibmV3Q21wSXRlbXMiLCJnZXRDbXBJdGVtIiwiQ29tcG9uZW50IiwidGVtcGxhdGUiLCIkaW5oZXJpdCIsIiRyZW5kZXIiLCJyZXBlYXRJdGVtIiwiU2hvd0RpcmVjdGl2ZSIsIkNoZWNrZWREaXJlY3RpdmUiLCJTdGF0ZURpcmVjdGl2ZSIsIkRpc2FibGVkRGlyZWN0aXZlIiwiUmVhZG9ubHlEaXJlY3RpdmUiLCJTZWxlY3RlZERpcmVjdGl2ZSIsImF0dHJOYW1lIiwiaGFzQXR0cmlidXRlIiwiU3R5bGVEaXJlY3RpdmUiLCJTd2l0Y2hEZWZhdWx0RGlyZWN0aXZlIiwiaXNNYXRjaCIsInN3aXRjaFdoZW5EaXJzIiwidkVsZSIsIndoZW5EaXJzIiwiZ2V0RGlyZWN0aXZlIiwiaW5pdFN3aXRjaFdoZW5EaXJzIiwiaXNNYXRjaENoYW5nZWQiLCJuZXdWYWx1ZSIsIlN3aXRjaFdoZW5EaXJlY3RpdmUiLCJzd2l0Y2hEaXIiLCJzd2l0Y2hEaXJzIiwiaW5pdFN3aXRjaERpciIsInZhbHVlQ2hhbmdlZCIsIlN3aXRjaERpcmVjdGl2ZSIsIkh0bWxMZXhlciIsIkxleGVyIiwicHJvdG90eXBlIiwiaXNWYWxpZElkZW50aWZpZXJTdGFydCIsImNoIiwiaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSIsImNwIiwiaXNOdW1iZXIiLCJleHBlY3RTdHJpbmciLCJzdHIiLCJudW0iLCJyZWFkQ29tbWVudCIsImJlZ2luIiwiZW5kIiwic3RhcnQiLCJzdHJpbmciLCJyYXdTdHJpbmciLCJjaGFyQXQiLCJ0b2tlbnMiLCJ0aHJvd0Vycm9yIiwicmVhZFRleHQiLCJjaDIiLCJwZWVrIiwiaXNJZGVudGlmaWVyU3RhcnQiLCJ0ZXh0VGFnIiwicmVhZFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwicmVhZElkZW50IiwicGVla011bHRpY2hhciIsInJlYWRTdHJpbmciLCJpc1doaXRlc3BhY2UiLCJlcXVhbCIsImxleCIsImFsbG93RG9jVHlwZSIsImNoMyIsIkh0bWxQYXJzZXIiLCJQYXJzZXIiLCJsZXhlciIsImZhcmdtZW50IiwidG9rZW4iLCJjdXJyZW50IiwiJHB1c2hDaGlsZCIsIm5leHQiLCJkb2NUeXBlIiwiaWRlbnRpZmllciIsImF0dHJzIiwicCIsIiRwdXNoQXR0cmlidXRlIiwiY2hpbGRFbGVtZW50cyIsImVsZXMiLCJjb25zdGFudCIsInBhcnNlT3B0aW9ucyIsImlzSWRlbnRpZmllckNvbnRpbnVlIiwibGl0ZXJhbHMiLCJ1bmRlZmluZWQiLCJodG1sIiwicGFyc2VyIiwiZGVmYXVsdHMiLCJjcmVhdGVDb21wb25lbnQiLCJzZXR0aW5ncyIsImFzdE5vZGVzIiwiYXN0Tm9kZSIsIiRjb21waWxlIiwiJCR2bm9kZXMiLCJub2RlIiwidHJpbSIsInJlcGxhY2UiLCJjcmVhdGVGaWx0ZXIiLCJPUEVSQVRPUlMiLCJvcGVyYXRvclRleHQiLCJFU0NBUEUiLCJvcGVyYXRvciIsInJlYWROdW1iZXIiLCJpcyIsIm9wMSIsIm9wMiIsIm9wMyIsImNoYXJzIiwiaSIsImNvZGVQb2ludEF0IiwiY2hhckNvZGVBdCIsImNwMSIsImNwMiIsImlzRXhwT3BlcmF0b3IiLCJlcnJvciIsImNvbFN0ciIsIm51bWJlciIsInBlZWtDaCIsIk51bWJlciIsInNsaWNlIiwiZXNjYXBlIiwiaGV4IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJyZXAiLCJBU1QiLCJQcm9ncmFtIiwiRXhwcmVzc2lvblN0YXRlbWVudCIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uIiwiTG9naWNhbEV4cHJlc3Npb24iLCJCaW5hcnlFeHByZXNzaW9uIiwiVW5hcnlFeHByZXNzaW9uIiwiQ2FsbEV4cHJlc3Npb24iLCJNZW1iZXJFeHByZXNzaW9uIiwiSWRlbnRpZmllciIsIkxpdGVyYWwiLCJBcnJheUV4cHJlc3Npb24iLCJQcm9wZXJ0eSIsIk9iamVjdEV4cHJlc3Npb24iLCJBc3ROb2RlIiwiaW50ZXJuYWxzIiwiUHJvZ3JhbU5vZGUiLCJFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSIsIkFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSIsImxlZnQiLCJyaWdodCIsImFzc2lnbm1lbnRMZWZ0IiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSIsInRlc3QiLCJhbHRlcm5hdGUiLCJjb25zZXF1ZW50IiwiTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsIkJpbmFyeUV4cHJlc3Npb25Ob2RlIiwiVW5hcnlFeHByZXNzaW9uTm9kZSIsInByZWZpeCIsIkxpdGVyYWxOb2RlIiwiQ2FsbEV4cHJlc3Npb25Ob2RlIiwiY2FsbGVlIiwiY29udGV4dCIsImFyZ1ZhbHVlcyIsImZpbHRlcklucyIsImlzRmlsdGVyIiwiJGV4ZWN1dGUiLCJhcHBseSIsImZuIiwiTWVtYmVyRXhwcmVzc2lvbk5vZGUiLCJvYmplY3QiLCJwcm9wZXJ0eSIsImNvbXB1dGVkIiwiSWRlbnRpZmllck5vZGUiLCJwcm9wZXJ0eUtleSIsIkFycmF5RXhwcmVzc2lvbk5vZGUiLCJQcm9wZXJ0eU5vZGUiLCJraW5kIiwiT2JqZWN0RXhwcmVzc2lvbk5vZGUiLCJwcm9wZXJ0aWVzIiwiZGVmIiwiaXNBc3NpZ25hYmxlIiwiYXN0IiwibXNnIiwicHJvZ3JhbSIsImV4cHJlc3Npb25TdGF0ZW1lbnQiLCJleHBlY3QiLCJmaWx0ZXJDaGFpbiIsImV4cHJlc3Npb24iLCJhc3NpZ25tZW50IiwidGVybmFyeSIsImxvZ2ljYWxPUiIsImNvbnN1bWUiLCJsb2dpY2FsQU5EIiwiZXF1YWxpdHkiLCJyZWxhdGlvbmFsIiwiYWRkaXRpdmUiLCJtdWx0aXBsaWNhdGl2ZSIsInVuYXJ5IiwicHJpbWFyeSIsImFycmF5RGVjbGFyYXRpb24iLCJoYXNPd25Qcm9wZXJ0eSIsInBhcnNlQXJndW1lbnRzIiwiYmFzZUV4cHJlc3Npb24iLCJpZGVudGlmaWVycyIsImVudGlyZU5hbWUiLCJqb2luIiwicGVla1Rva2VuIiwiYXJyIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJwZWVrQWhlYWQiLCJ0Iiwic2hpZnQiLCJUZW1wbGF0ZUNhY2hlU2VydmljZSIsInRwbENhY2hlIiwicHJvbWlzZUNhY2hlIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiU2VydmljZSIsImdldENoaWxkTm9kZXMiLCJBcnJheSIsInJlcGxhY2VOb2RlIiwicmVmTm9kZSIsIm5ld05vZGUiLCJyZW1vdmVOb2RlIiwicmVtb3ZlTm9kZUJldHdlZW4iLCJiZWdpbk5vZGUiLCJlbmROb2RlIiwiaW5zZXJ0Tm9kZUFmdGVyIiwicHJvcENoYW5naW5nTXNnIiwicHJvcENoYW5nZWRNc2ciLCJTZXRQcm9wZXJ0eUhhbmRsZXIiLCJkZWVwUHJveHkiLCJzZWxmS2V5IiwiaXNPYmplY3QiLCJpc0FycmF5IiwidmFsaWRhdGlvbiIsImlzVmFsaWQiLCJwcm9wTWFwcyIsImV4aXN0ZWQiLCJpc01lc3NlbmdlciIsImhhbmRsZXJzIiwicmV0dXJuVmFsdWUiLCJNZXNzZW5nZXJCdXMiLCJtZXNzZW5nZXJzIiwib2ZmIiwiUHJvcGVydHlDaGFuZ2VTdWJqZWN0IiwicGxhaW5NYXAiLCJNYXAiLCJyZWdleE1hcCIsImhhcyIsInNldCIsImJlZm9yZUNoYW5nZWQiLCJhY3Rpb25zIiwiY2xlYXIiLCJPYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3QiLCJvbmNoYW5naW5nIiwiZmlyZUNoYW5naW5nIiwib25jaGFuZ2VkIiwiZmlyZUNoYW5nZWQiLCJvZmZDaGFuZ2UiLCJvYmpNYXAiLCJkZWJ1Z01vZGUiLCJ0b1N0cmluZyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiaWdub3JlT3duIiwiY29weSIsImRlZXAiLCJvYmpJbmRleCIsImFyZ3VtZW50cyIsImlzQm9vbGVhbiIsIm5ld0FyciIsIm5ld09iaiIsImV4dGVuZCIsImRlZXBNZXJnZSIsInBsYWluTWVyZ2UiLCJtZXJnZSIsInNvdXJjZSIsIm8iLCJGIiwiaW5oZXJpdFByb3RvdHlwZSIsInN1YlR5cGUiLCJzdXBlclR5cGUiLCJjb25zdHJ1Y3RvciIsImluaGVyaXQiLCJsb3dlcmNhc2UiLCJpc1N0cmluZyIsInRvTG93ZXJDYXNlIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJpc1VuZGVmaW5lZCIsImlzRGVmaW5lZCIsImlzTWFwIiwiaXNCbGFua09iamVjdCIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc1JlZ0V4cCIsImlzU2FtZSIsIm9iajEiLCJvYmoyIiwic2FtZSIsImRlYnVnIiwibG9nIiwiY29uc29sZSIsImNvbnRhaW5zIiwiY29udGFpbnNTdHIiLCJpZ25vcmVDYXNlIiwiaGFzUHJvcGVydHkiLCJrZXkyIiwiaGFzUHJvcCIsImtleXMiLCJrZXkzIiwidmFsdWUzIiwiZ2V0UHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImNvbnN0cnVjdCIsImJlZm9yZUF0dHJDaGFuZ2UiLCJhZnRlckF0dHJDaGFuZ2UiLCJvbkluaXQiLCJhZnRlclZpZXdNb3VudCIsIiQkb3duZXJWTm9kZSIsInByb3h5IiwibWVzc2VuZ2VyIiwic3luYyIsIiRnZXRNZXRhIiwidGVtcGxhdGVVcmwiLCJnZXRUcGxCeVVybCIsInVzaW5nIiwiY2xhc3NOYW1lIiwicG9wIiwic3BhY2VOYW1lIiwiZ2V0SW5uZXJUcGwiLCIkdXNpbmciLCJnZXREb21FbGVtZW50IiwiJGhhc1ZOb2RlcyIsIiRmcm9tVk5vZGVzIiwiJGdldFRlbXBsYXRlIiwiJG1ha2VDb21waWxlT3B0aW9ucyIsIiRjbGVhclZOb2RlcyIsInNlbGVjdG9yT3JFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIiRhZnRlclZpZXdNb3VudCIsIiQkcGFyZW50Q29tcG9uZW50IiwiJHJlbW92ZUNoaWxkIiwiJCRkZXRlY3RUaW1lb3V0Iiwic2V0VGltZW91dCIsIiQkcHJvcENoYW5nZWQiLCIkJGNoaWxkQ29tcG9uZW50cyIsImlzRnJvbVZOb2RlIiwiJHVubW91bnQiLCJjbGVhclRpbWVvdXQiLCJwYXJlbnRDbXAiLCJzZXRQcm90b3R5cGVPZiIsIiRob29rcyIsImhvb2siLCIkc2V0TWV0YSIsImluamVjdFNlcnZpY2VzIiwib25Db21waWxlIiwiJCR2bm9kZSIsIiQkYmluZGluZyIsIiR1cGRhdGUiLCJGaWx0ZXIiLCJvbkV4ZWN1dGUiLCJucyIsIm1ldGhvZHMiLCJidWlsZENvbnN0cnVjdG9yIiwiY29udHJhY3RUeXBlIiwic3VwZXJDbGFzcyIsIm1ha2VDb25zdHJ1Y3RvciIsImlzU2VydmljZSIsImJvb3RzdHJhcCIsImlubmVySFRNTCIsImNscyIsImYiLCJuYW1lUGF0dGVybiIsIkluamVjdG9yIiwiY29udGFpbmVyIiwid2FpdGluZ1RvRXh0ZW5kcyIsImluc0NvbnRhaW5lciIsIm1hcHBpbmciLCJnZXRNYXBwaW5nIiwicmVnaXN0ZXIiLCJjb25zdHJ1Y3RvcnMiLCJuYW1lc3BhY2VzIiwiaW5zdGFuY2UiLCJjcmVhdGVTZXJ2aWNlIiwiZ2V0Q29tcG9uZW50IiwiZ2V0RmlsdGVyIiwic2VydmljZXMiLCJnZXRJbnN0YW5jZXMiLCJnZXRTZXJ2aWNlIiwibm9uU2hhcmVkIiwiY29uc3RydWN0b3JOYW1lIiwiY2hlY2tTZWxlY3RvciIsImdldFdhaXRpbmdUb0V4dGVuZHMiLCJvbkNvbnN0cnVjdCIsIkZ1bmN0aW9uIiwic3VwZXJPbmUiLCJyZW1haW5Db25zdHJ1Y3RvciIsInN1cGVyTmFtZSIsImNhbGxiYWNrIiwiZXh0ZW5kTWV0YSIsInN1cGVyTWV0YSIsIndhaXRpbmdUb0V4dGVuZHMyIiwiZnVsbFNlbGVjdG9yIiwic2V0V2FpdGluZ1RvRXh0ZW5kcyIsImxvY2FsIiwiaW5qZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicHJpdmF0ZUtleSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7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QUFMLElBQWUsRUFBdEI7QUFDSDtBQWxCTDtBQUFBO0FBQUEsNkJBb0JhbkssS0FwQmIsRUFvQm9CO0FBQ1osV0FBS21LLE1BQUwsR0FBY25LLEtBQWQ7QUFDSDtBQXRCTDtBQUFBO0FBQUEsK0JBd0JlO0FBQ1AsVUFBSXNCLHlEQUFBLENBQWlCLEtBQUt3SCxTQUF0QixDQUFKLEVBQXNDO0FBQ2xDLGFBQUtBLFNBQUwsQ0FBZUwsSUFBZixDQUFvQixJQUFwQjtBQUNIO0FBQ0o7QUE1Qkw7QUFBQTtBQUFBLGdDQUt1QjtBQUNmeUMsd0RBQVEsQ0FBQzRaLGNBQVQsQ0FBd0IsSUFBeEI7QUFDSDtBQVBMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7QUNIQSxtRCIsImZpbGUiOiJzaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYXhpb3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiYXhpb3NcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic2luZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImF4aW9zXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzaW5lXCJdID0gZmFjdG9yeShyb290W1wiYXhpb3NcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2F4aW9zX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gJy4vYmluZGluZyc7XHJcblxyXG4vLyAvLyBXaW5kb3cgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWxvYWQnOlxyXG4vLyBjYXNlICdvbi11bmxvYWQnOlxyXG4vLyAvLyBGb3JtIEVsZW1lbnQgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWNoYW5nZSc6XHJcbi8vIGNhc2UgJ29uLXN1Ym1pdCc6XHJcbi8vIGNhc2UgJ29uLXJlc2V0JzpcclxuLy8gY2FzZSAnb24tc2VsZWN0JzpcclxuLy8gY2FzZSAnb24tYmx1cic6XHJcbi8vIGNhc2UgJ29uLWZvY3VzJzpcclxuLy8gLy8gSW1hZ2UgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWFib3J0JzpcclxuLy8gLy8gS2V5Ym9hcmQgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWtleWRvd24nOlxyXG4vLyBjYXNlICdvbi1rZXlwcmVzcyc6XHJcbi8vIGNhc2UgJ29uLWtleXVwJzpcclxuLy8gLy8gTW91c2UgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWNsaWNrJzpcclxuLy8gY2FzZSAnb24tZGJsY2xpY2snOlxyXG4vLyBjYXNlICdvbi1tb3VzZWRvd24nOlxyXG4vLyBjYXNlICdvbi1tb3VzZW1vdmUnOlxyXG4vLyBjYXNlICdvbi1tb3VzZW91dCc6XHJcbi8vIGNhc2UgJ29uLW1vdXNlb3Zlcic6XHJcbi8vIGNhc2UgJ29uLW1vdXNldXAnOlxyXG52YXIgZXZlbnRUZXh0ID0gJ2xvYWQgdW5sb2FkIGNoYW5nZSBzdWJtaXQgcmVzZXQgc2VsZWN0IGJsdXIgZm9jdXMgYWJvcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwJztcclxudmFyIGRvbUV2ZW50cyA9IGV2ZW50VGV4dC5zcGxpdCgnICcpO1xyXG5cclxuY2xhc3MgQXR0ck5vZGUgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5hdHRyaWJ1dGUsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnF1b3RlID0gJ1wiJztcclxuICAgICAgICB0aGlzLm9yZ05vZGVOYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmlzRXZlbnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzQmluZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNEb21FdmVudCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNEaXJlY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vd25lclZFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm93bmVyRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gbmV3IEJpbmRpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBiZWxvbmdUbyhrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmdOb2RlTmFtZSA9PT0ga2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmNvbXBpbGUodGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmlzRXZlbnQgPSB0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ0AnKTtcclxuICAgICAgICB0aGlzLmlzQmluZGluZyA9IHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnOicpO1xyXG4gICAgICAgIHRoaXMuaXNEaXJlY3RpdmUgPSB0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJyonKTtcclxuICAgICAgICBpZiAodGhpcy5pc0V2ZW50IHx8IHRoaXMuaXNCaW5kaW5nIHx8IHRoaXMuaXNEaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlTmFtZSA9IHRoaXMubm9kZU5hbWUuc3Vic3RyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzRG9tRXZlbnQgPSB1dGlscy5jb250YWlucyhkb21FdmVudHMsIHRoaXMubm9kZU5hbWUpO1xyXG4gICAgICAgIHRoaXMuYmluZGluZy5zZXRPdXRwdXQodGhpcy5pc0V2ZW50KTtcclxuICAgICAgICB0aGlzLmJpbmRpbmcuYmluZCh0aGlzLm5vZGVWYWx1ZSwgdGhpcy5pc0V2ZW50IHx8IHRoaXMuaXNCaW5kaW5nIHx8IHRoaXMuaXNEaXJlY3RpdmUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0RpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5jb250YWluc0RpcmVjdGl2ZSh0aGlzLm5vZGVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBvcHRpb25zLmNyZWF0ZURpcmVjdGl2ZSh0aGlzLm5vZGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRiaW5kVk5vZGUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRpbmcuc2V0T3V0cHV0KHRoaXMuZGlyZWN0aXZlLm91dHB1dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpcmVjdGl2ZSAnICsgdGhpcy5ub2RlTmFtZSArICcgaXMgbm90IGRlZmluZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaW5rKHNjb3BlLCBvd25lckVsZW1lbnQsIG93bmVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy5vd25lckVsZW1lbnQgPSBvd25lckVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudCA9IG93bmVyQ29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMuYmluZGluZy5zZXRTY29wZShzY29wZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEb21FdmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5vZGVOYW1lLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYmluZGluZy5jb21wdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQ6IGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYXJnczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtZW50OiBzZWxmLm93bmVyRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvd25lckNvbXBvbmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBvd25lckNvbXBvbmVudC4kbGlzdGVuKHRoaXMubm9kZU5hbWUsIGZ1bmN0aW9uIChlLCBhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5iaW5kaW5nLmNvbXB1dGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudDogZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhcmdzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6IHNlbGYub3duZXJFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHNjb3BlLiQkY2hpbGREaXJlY3RpdmVzLnB1c2godGhpcy5kaXJlY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJHNldEJpbmRpbmcodGhpcy5iaW5kaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvd25lckNvbXBvbmVudCAhPSBudWxsICYmIG93bmVyQ29tcG9uZW50LiRoYXNBdHRyKHRoaXMubm9kZU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBvd25lckNvbXBvbmVudC4kaW5pdEF0dHIodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5vd25lckVsZW1lbnQsIHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vd25lckVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJpbmRpbmcud2F0Y2hQcm9wcyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRldGVjdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGV0ZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kZGV0ZWN0KHRoaXMub3duZXJFbGVtZW50LCB0aGlzLm93bmVyQ29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQ2hhbmdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJpbmRpbmcuZGV0ZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm93bmVyQ29tcG9uZW50ICE9IG51bGwgJiYgdGhpcy5vd25lckNvbXBvbmVudC4kaGFzQXR0cih0aGlzLm5vZGVOYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyQ29tcG9uZW50LiRzZXRBdHRyKHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLm93bmVyRWxlbWVudCwgdGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJFbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3duZXJFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnICYmIHRoaXMubm9kZU5hbWUgPT09ICd2YWx1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm93bmVyRWxlbWVudC52YWx1ZSA9IHRoaXMuYmluZGluZy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZnRlckxpbmsoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRpbnNlcnQodGhpcy5vd25lckVsZW1lbnQsIHRoaXMub3duZXJDb21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXJlY3RpdmVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZSA9PSBudWxsID8gW10gOiBbdGhpcy5kaXJlY3RpdmVdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE91dGVyVHBsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9yZ05vZGVOYW1lICsgKHRoaXMubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB0aGlzLnF1b3RlICsgdGhpcy5ub2RlVmFsdWUgKyB0aGlzLnF1b3RlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5uZXJUcGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3JnTm9kZU5hbWUgKyAodGhpcy5ub2RlVmFsdWUgPT0gbnVsbCA/ICcnIDogKCc9JyArIHRoaXMucXVvdGUgKyB0aGlzLm5vZGVWYWx1ZSArIHRoaXMucXVvdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKGlzRnJvbURpcmVjdGl2ZSkge1xyXG4gICAgICAgIGlmIChpc0Zyb21EaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaW5kaW5nLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmJpbmRpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3duZXJWRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vd25lckVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3duZXJDb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRkaXNwb3NlKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQXR0ck5vZGUgfTtcclxuIiwiXHJcbnZhciBWTm9kZVR5cGUgPSB7XHJcbiAgICBlbGVtZW50OiAxLFxyXG4gICAgYXR0cmlidXRlOiAyLFxyXG4gICAgdGV4dDogMyxcclxuICAgIGNkYXRhU2VjdGlvbjogNCxcclxuICAgIGVudGl0eVJlZmVyZW5jZTogNSxcclxuICAgIGVudGl0eTogNixcclxuICAgIHByb2Nlc3NpbmdJbnN0cnVjdGlvbjogNyxcclxuICAgIGNvbW1lbnQ6IDgsXHJcbiAgICBkb2N1bWVudDogOSxcclxuICAgIGRvY3VtZW50VHlwZTogMTAsXHJcbiAgICBkb2N1bWVudEZyYWdtZW50OiAxMSxcclxuICAgIG5vdGF0aW9uOiAxMixcclxuICAgIGN1c3RvbTogMTAxXHJcbn07XHJcblxyXG4vLyB2aXJ0dWFsIG5vZGVcclxuY2xhc3MgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IodHlwZSwgbmFtZSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5vZGVUeXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLm5vZGVOYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3duZXJWRG9jdW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgICRwdXNoQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgJGJ1aWxkU2libGluZygpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzW3RoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAoc2VsZi5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC4kYnVpbGRTaWJsaW5nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJGNsZWFyUGFyZW50QW5kU2libGluZygpIHtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAkcmVtb3ZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuJHJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuJGNsZWFyUGFyZW50QW5kU2libGluZygpO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3duZXJWRG9jdW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0NoaWxkTm9kZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggIT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJDaGlsZE5vZGVzKCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQubmV4dFNpYmxpbmcgPSBjaGlsZDtcclxuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gdGhpcy5sYXN0Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQ7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRCZWZvcmUocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XHJcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChyZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IG5ld0NoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZDtcclxuICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBuZXdDaGlsZDtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBuZXdDaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydEFmdGVyKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xyXG4gICAgICAgIGlmIChyZWZDaGlsZC5uZXh0U2libGluZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShyZWZDaGlsZC5uZXh0U2libGluZywgbmV3Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmUgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcucHJldmlvdXNTaWJsaW5nID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGQuJGNsZWFyUGFyZW50QW5kU2libGluZygpO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVwbGFjZUNoaWxkKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xyXG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG4gICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcclxuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkLm5leHRTaWJsaW5nO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5maXJzdENoaWxkID09PSByZWZDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBuZXdDaGlsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlZkNoaWxkLiRjbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcclxuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEsIG5ld0NoaWxkKTtcclxuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmVOb2RlKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZShvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmNvbXBpbGUob3B0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlyZWN0aXZlcygpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkLmRpcmVjdGl2ZXMoKTtcclxuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3RpdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmsoc2NvcGUpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmxpbmsoc2NvcGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyTGluaygpIHtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuYWZ0ZXJMaW5rKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0ZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhc0NoYW5nZSgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfTtcclxuIiwiaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eS9tZXNzYWdlJztcclxuaW1wb3J0IHsgR2V0UHJvcGVydHlIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbGl0eS9oYW5kbGVyJztcclxuaW1wb3J0IHsgY29tcHV0ZSB9IGZyb20gJy4uL3BhcnNlcic7XHJcblxyXG5jbGFzcyBFeHBOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHRleHQpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb3BzKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIG9ialByb3BzID0gW107XHJcbiAgICAgICAgY29tcHV0ZSh0aGlzLnRleHQsIG5ldyBQcm94eShzY29wZSwgbmV3IEdldFByb3BlcnR5SGFuZGxlcihvYmpQcm9wcywgdHJ1ZSkpLCBvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gb2JqUHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZShzY29wZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBjb21wdXRlKHRoaXMudGV4dCwgc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSAhPT0gdGhpcy5vbGRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBCaW5kaW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaXNFeHAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5yaWdodFN0ciA9ICcnO1xyXG4gICAgICAgIHRoaXMub3V0cHV0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSBuZXcgTWVzc2VuZ2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2NvcGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3V0cHV0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kKHRleHQsIGlzRXhwKSB7XHJcbiAgICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuaXNFeHAgPSBpc0V4cDtcclxuXHJcbiAgICAgICAgaWYgKGlzRXhwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBleHA6IG5ldyBFeHBOb2RlKHRleHQpLFxyXG4gICAgICAgICAgICAgICAgbGVmdFN0cjogJydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwYXR0ZXJuID0gL3t7KFtefV0qKX19L2c7XHJcbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xyXG4gICAgICAgIHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcclxuXHJcbiAgICAgICAgd2hpbGUgKG1hdGNoICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBtYXRjaC5pbmRleCxcclxuICAgICAgICAgICAgICAgIGV4cDogbmV3IEV4cE5vZGUobWF0Y2hbMV0pLFxyXG4gICAgICAgICAgICAgICAgbGVmdFN0cjogdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xyXG4gICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlZ21lbnRzLmxlbmd0aCA+IDAgJiYgbGFzdEluZGV4IDwgdGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yaWdodFN0ciA9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGUob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VnbWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0V4cCAmJiB0aGlzLnNlZ21lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50c1swXS5leHAuY29tcHV0ZShzZWxmLnNjb3BlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnNlZ21lbnRzWzBdLmV4cC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWdtZW50LmV4cC5jb21wdXRlKHNlbGYuc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gKHNlZ21lbnQubGVmdFN0ciArIHNlZ21lbnQuZXhwLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRleHQgKyB0aGlzLnJpZ2h0U3RyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaFByb3BzKGFjdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLm91dHB1dCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIG9ialByb3BzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICBvYmpQcm9wcyA9IG9ialByb3BzLmNvbmNhdChzZWdtZW50LmV4cC5nZXRQcm9wcyhzZWxmLnNjb3BlKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9ialByb3BzLmZvckVhY2goZnVuY3Rpb24gKG9ialByb3ApIHtcclxuICAgICAgICAgICAgc2VsZi5zY29wZS4kd2F0Y2gob2JqUHJvcC5vYmosIG9ialByb3AucHJvcCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2UuZmlyZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlLm9uKGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3V0cHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlZ21lbnRzLnNvbWUoZnVuY3Rpb24gKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlZ21lbnQuZXhwLmRldGVjdChzZWxmLnNjb3BlLCBvcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICBzZWdtZW50LmV4cC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJpbmRpbmcgfTsiLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuXHJcbmNsYXNzIENEYXRhU2VjdGlvbk5vZGUgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5jZGF0YVNlY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDRGF0YVNlY3Rpb25Ob2RlIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcblxyXG5jbGFzcyBDb21tZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmNvbW1lbnQsICcjY29tbWVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5ub2RlVmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDb21tZW50Tm9kZSB9O1xyXG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcblxyXG5jbGFzcyBDdXN0b21Ob2RlIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgbGlua2VyKXtcclxuICAgICAgICBzdXBlcihWTm9kZVR5cGUuY3VzdG9tLCBuYW1lKTtcclxuICAgICAgICB0aGlzLmxpbmtlciA9IGxpbmtlcjtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rKHNjb3BlKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtlci5jYWxsKHRoaXMsIHNjb3BlKTtcclxuICAgIH1cclxuXHJcbiAgICBhZnRlckxpbmsoKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkluc2VydCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25JbnNlcnQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGV0ZWN0KCkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXRlY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRGV0ZWN0LmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhc0NoYW5nZSgpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uSGFzQ2hhbmdlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkhhc0NoYW5nZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vblVwZGF0ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25VcGRhdGUuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGVzdHJveSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQ3VzdG9tTm9kZSB9OyIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY2xhc3MgRG9jdW1lbnRUeXBlTm9kZSBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5kb2N1bWVudFR5cGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBEb2N1bWVudFR5cGVOb2RlIH07XHJcbiIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY2xhc3MgRG9jdW1lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmRvY3VtZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRG9jdW1lbnROb2RlIH07IiwiaW1wb3J0ICogYXMgZWxlVXRpbHMgZnJvbSAnLi4vdXRpbGl0eS9lbGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgQ3VzdG9tTm9kZSB9IGZyb20gJy4vY3VzdG9tJztcclxuaW1wb3J0IHsgQXR0ck5vZGUgfSBmcm9tICcuL2F0dHJpYnV0ZSc7XHJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi4vcGFyc2VyJztcclxuXHJcbmNsYXNzIEVsZW1lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmVsZW1lbnQsIG5hbWUpO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VsZkNsb3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29tcGlsZU9wdGlvbnMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNDb21wb25lbnQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAkcHVzaEF0dHJpYnV0ZShhdHRyKSB7XHJcbiAgICAgICAgYXR0ci5vd25lclZFbGVtZW50ID0gdGhpcztcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaChhdHRyKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoICE9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCwgbWF0Y2hlcyA9IHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVzWzBdO1xyXG4gICAgICAgICAgICB0YXJnZXQuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gbmV3IEF0dHJOb2RlKGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0YXJnZXQub3duZXJWRWxlbWVudCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRhcmdldC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnB1c2godGFyZ2V0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBdHRyaWJ1dGUoa2V5KSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IFtdLCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGtleSBpbnN0YW5jZW9mIEF0dHJOb2RlKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuYXR0cmlidXRlcy5pbmRleE9mKGtleSk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYuYXR0cmlidXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xyXG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc2VsZi5hdHRyaWJ1dGVzLmluZGV4T2YobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgbWF0Y2guZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi5hdHRyaWJ1dGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGggPiAwID8gdGFyZ2V0WzBdIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRBdHRyaWJ1dGUoYXR0cikge1xyXG4gICAgICAgIGlmIChhdHRyLm93bmVyVkVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDdXJyZW50IGF0dHJpYnV0ZSBpcyBub3QgbmV3IVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF0dHIub3duZXJWRWxlbWVudCA9IHRoaXM7XHJcbiAgICAgICAgYXR0ci5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xyXG4gICAgICAgIHJldHVybiBhdHRyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE91dGVyVHBsKCkge1xyXG4gICAgICAgIHZhciBhdHRyVHBsID0gJycsIGNoaWxkVHBsID0gJyc7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIGF0dHJUcGwgKz0gJyAnO1xyXG4gICAgICAgICAgICBhdHRyVHBsICs9IGF0dHIuZ2V0T3V0ZXJUcGwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkVHBsICs9IGNoaWxkLmdldE91dGVyVHBsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciB0cGwgPSAnPCcgKyB0aGlzLm5vZGVOYW1lICsgYXR0clRwbCArICc+JyArIGNoaWxkVHBsO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc2VsZkNsb3NlZCkge1xyXG4gICAgICAgICAgICB0cGwgKz0gKCc8LycgKyB0aGlzLm5vZGVOYW1lICsgJz4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5uZXJUcGwoKSB7XHJcbiAgICAgICAgdmFyIGNoaWxkVHBsID0gJyc7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZFRwbCArPSBjaGlsZC5nZXRPdXRlclRwbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGRUcGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3V0ZXJUcGwodHBsKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHBhcnNlKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcclxuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHNlbGYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZiwgdm5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbm5lclRwbCh0cGwpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jbGVhckNoaWxkTm9kZXMoKTtcclxuICAgICAgICBwYXJzZSh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICBzZWxmLmFwcGVuZENoaWxkKHZub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3RpdmUoa2V5KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMubWFwKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmRpcmVjdGl2ZXMoKTtcclxuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLiQkbWV0YS5zZWxlY3RvciA9PT0ga2V5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGUob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY29tcGlsZU9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIGF0dHIuY29tcGlsZShvcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmlzQ29tcG9uZW50ID0gb3B0aW9ucy5jb250YWluc0NvbXBvbmVudCh0aGlzLm5vZGVOYW1lKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5jb21waWxlKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlyZWN0aXZlcygpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHIuZGlyZWN0aXZlcygpO1xyXG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZC5kaXJlY3RpdmVzKCk7XHJcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoaXRlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rKHNjb3BlKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBzZWxmLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgc2VsZi5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzZWxmLm5vZGVOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBzY29wZS4kY3JlYXRlQ29tcG9uZW50KHRoaXMubm9kZU5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC4kYmluZFZOb2RlKHRoaXMpO1xyXG4gICAgICAgICAgICBzZWxmLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5saW5rKHNjb3BlLCBzZWxmLmVsZW1lbnQsIHNlbGYuY29tcG9uZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbGYuY29tcG9uZW50LiRpbml0QXR0ckRvbmUoKTtcclxuICAgICAgICAgICAgc2VsZi5jb21wb25lbnQuJG1vdW50KHNlbGYuZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5saW5rKHNjb3BlLCBzZWxmLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsZi5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQubGluayhzY29wZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZWxmLmVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJMaW5rKCkge1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIGF0dHIuYWZ0ZXJMaW5rKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuYWZ0ZXJMaW5rKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXRlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgYXR0ci5kZXRlY3QoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmRldGVjdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcG9zZShpc0Zyb21Db21wb25lbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzRnJvbUNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICBhdHRyLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVEb21FbGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5jb21waWxlT3B0aW9ucyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuJGRpc3Bvc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERvbUVsZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVEb21FbGVtZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlbGVVdGlscy5yZW1vdmVOb2RlKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVsZW1lbnQobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudE5vZGUobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQXR0cihuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdHRyTm9kZShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDdXN0b20obmFtZSwgbGlua2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDdXN0b21Ob2RlKG5hbWUsIGxpbmtlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEVsZW1lbnROb2RlIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XHJcblxyXG5jbGFzcyBEb2N1bWVudEZyYWdtZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmRvY3VtZW50RnJhZ21lbnQsICcjZG9jdW1lbnQtZnJhZ21lbnQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRG9jdW1lbnRGcmFnbWVudE5vZGUgfTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9iYXNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9hdHRyaWJ1dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NkYXRhc2VjdGlvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tbWVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tJztcclxuZXhwb3J0ICogZnJvbSAnLi9kb2N0eXBlJztcclxuZXhwb3J0ICogZnJvbSAnLi9kb2N1bWVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZWxlbWVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZnJhZ21lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3RleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2JpbmRpbmcnO1xyXG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0ICogYXMgZWxlVXRpbHMgZnJvbSAnLi4vdXRpbGl0eS9lbGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gJy4vYmluZGluZyc7XHJcblxyXG5jbGFzcyBUZXh0Tm9kZSBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS50ZXh0LCAnI3RleHQnKTtcclxuICAgICAgICB0aGlzLmJpbmRpbmcgPSBuZXcgQmluZGluZygpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZSgpIHtcclxuICAgICAgICB0aGlzLmJpbmRpbmcuYmluZCh0aGlzLm5vZGVWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGluayhzY29wZSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kaW5nLnNldFNjb3BlKHNjb3BlKTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kaW5nLndhdGNoUHJvcHMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmRldGVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQ2hhbmdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJpbmRpbmcuZGV0ZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGVsZVV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuZWxlbWVudCwgdGhpcy5yZW5kZXIodGhpcy5iaW5kaW5nLnZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElubmVyVHBsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuYmluZGluZy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVGV4dE5vZGUgfTsiLCJpbXBvcnQgeyB0eXBlQ29uc3QsIGluamVjdG9yIH0gZnJvbSAnLi4vdmlldy9pbmplY3RvcidcclxuXHJcbmZ1bmN0aW9uIGRpcmVjdGl2ZShtZXRhKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHZhciBzZWxlY3RvciA9IG1ldGEuc2VsZWN0b3IgfHwgdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb25zdHJ1Y3Rvcih0eXBlQ29uc3QuZGlyZWN0aXZlLCBzZWxlY3RvciwgdGFyZ2V0LCBtZXRhKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IGRpcmVjdGl2ZSB9IiwiaW1wb3J0IHsgdHlwZUNvbnN0LCBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcvaW5qZWN0b3InXHJcblxyXG5mdW5jdGlvbiBzZXJ2aWNlKG1ldGEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gbWV0YS5zZWxlY3RvciB8fCB0YXJnZXQubmFtZTtcclxuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckNvbnN0cnVjdG9yKHR5cGVDb25zdC5zZXJ2aWNlLCBzZWxlY3RvciwgdGFyZ2V0LCBtZXRhKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNlcnZpY2UgfSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWJpbmQnXHJcbn0pXHJcbmNsYXNzIEJpbmREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoZWxlLCBiaW5kaW5nKXtcclxuICAgICAgICBlbGUuaW5uZXJUZXh0ID0gYmluZGluZy5jb21wdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5vbkluc2VydChlbGUsIGJpbmRpbmcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tZW1iZWQnXHJcbn0pXHJcbmNsYXNzIEVtYmVkRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21waWxlKGF0dHJOb2RlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGVtYmVkVHBsID0gb3B0aW9ucy5nZXRFbWJlZFRwbCgpO1xyXG4gICAgICAgIGlmIChlbWJlZFRwbCkge1xyXG4gICAgICAgICAgICBhdHRyTm9kZS5vd25lclZFbGVtZW50LnNldElubmVyVHBsKGVtYmVkVHBsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1oaWRlJ1xyXG59KVxyXG5jbGFzcyBIaWRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZyl7XHJcbiAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSBiaW5kaW5nLmNvbXB1dGUoKSA/ICdub25lJyA6ICdpbml0aWFsJztcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZShlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLm9uSW5zZXJ0KGVsZSwgYmluZGluZyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24taWYnXHJcbn0pXHJcbmNsYXNzIElmRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLWlmJyk7XHJcbiAgICAgICAgaWYgKCFiaW5kaW5nLmNvbXB1dGUoKSkge1xyXG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIGlmIChiaW5kaW5nLmNvbXB1dGUoKSkge1xyXG4gICAgICAgICAgICBpZiAoZWxlLnBhcmVudE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy5jb21tZW50LCBlbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZWxlLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoZWxlLCB0aGlzLmNvbW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9iaW5kJ1xyXG5leHBvcnQgKiBmcm9tICcuL2VtYmVkJ1xyXG5leHBvcnQgKiBmcm9tICcuL2hpZGUnXHJcbmV4cG9ydCAqIGZyb20gJy4vaWYnXHJcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnXHJcbmV4cG9ydCAqIGZyb20gJy4vcmVwZWF0J1xyXG5leHBvcnQgKiBmcm9tICcuL3Nob3cnXHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnXHJcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJ1xyXG5leHBvcnQgKiBmcm9tICcuL3N0YXRlJyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1tb2RlbCdcclxufSlcclxuY2xhc3MgTW9kZWxEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZWxlLCBiaW5kaW5nLCBjb20pIHtcclxuICAgICAgICBpZiAoY29tID09IG51bGwpIHtcclxuICAgICAgICAgICAgZWxlLnZhbHVlID0gYmluZGluZy5jb21wdXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb20uJHNldEF0dHIoJ3ZhbHVlJywgYmluZGluZy5jb21wdXRlKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcsIGNvbSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKGVsZSwgYmluZGluZywgY29tKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgYmluZGluZy5zY29wZS4kc2V0QXR0cihiaW5kaW5nLnRleHQsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNNZXNzZW5nZXIoY29tLmNoYW5nZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbS5jaGFuZ2Uub24oZnVuY3Rpb24gKGUsIGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nLnNjb3BlLiRzZXRBdHRyKGJpbmRpbmcudGV4dCwgYXJncy5uZXd2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvZW50ICcgKyBjb20uJCRtZXRhLnNlbGVjdG9yICsgJ211c3QgZGVmaW5lIFtjaGFuZ2VdIGV2ZW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKGVsZSwgYmluZGluZywgY29tKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoZWxlLCBiaW5kaW5nLCBjb20pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL3ZpZXcvY29tcG9uZW50JztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tcmVwZWF0J1xyXG59KVxyXG5jbGFzcyBSZXBlYXREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcclxuICAgICAgICB0aGlzLml0ZW1FeHAgPSAnJztcclxuICAgICAgICB0aGlzLml0ZW1zRXhwID0gJyc7XHJcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSAnJztcclxuICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY21wSXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29tcGlsZShhdHRyTm9kZSkge1xyXG4gICAgICAgIHZhciBhcmcgPSBhdHRyTm9kZS5ub2RlVmFsdWU7XHJcbiAgICAgICAgdmFyIGVsZU5vZGUgPSBhdHRyTm9kZS5vd25lclZFbGVtZW50O1xyXG4gICAgICAgIHZhciBwYXR0ZXJuID0gL14oXFx3KylcXHMraW5cXHMrKFxcdyspJC9pO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBwYXR0ZXJuLmV4ZWMoYXJnKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbi1yZXBlYXQ6IHBhcmFtZXRlciBpcyBub3QgdmFsaWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbUV4cCA9IHJlc3VsdFsxXTtcclxuICAgICAgICB0aGlzLml0ZW1zRXhwID0gcmVzdWx0WzJdO1xyXG5cclxuICAgICAgICBlbGVOb2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyTm9kZSk7XHJcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBlbGVOb2RlLmdldE91dGVyVHBsKCk7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgY3VzdG9tID0gZWxlTm9kZS5jcmVhdGVDdXN0b20oJ24tcmVwZWF0JywgZnVuY3Rpb24gKHNjb3BlKSB7XHJcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gc2NvcGUuJGV2YWwoc2VsZi5pdGVtc0V4cCk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0YUl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICAgICAgc2VsZi5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdzdGFydDogbi1yZXBlYXQnKTtcclxuICAgICAgICAgICAgc2VsZi5mb290ZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdlbmQ6IG4tcmVwZWF0Jyk7XHJcblxyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLmhlYWRlcik7XHJcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYuZm9vdGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlbGVOb2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVsZU5vZGUsIGN1c3RvbSk7XHJcbiAgICAgICAgZWxlTm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIGN1c3RvbS5vbkluc2VydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5yZW5kZXIoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjdXN0b20ub25EZXRlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHNlbGYuc2NvcGUuJGV2YWwoc2VsZi5pdGVtc0V4cCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi5kYXRhSXRlbXMgIT09IGl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldERhdGFJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jbXBJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZFNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRTY29wZS4kZGV0ZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGN1c3RvbS5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuJGRlc3Ryb3koKTtcclxuICAgICAgICAgICAgZWxlTm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1c3RvbSA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5jbXBJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChjbXBJdGVtKSB7XHJcbiAgICAgICAgICAgIGNtcEl0ZW0uJGRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNtcEl0ZW1zID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhSXRlbXModmFsdWUpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhSXRlbXMgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcGUuJHdhdGNoKHRoaXMuZGF0YUl0ZW1zLCAnbGVuZ3RoJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLnJlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENtcEl0ZW0oZGF0YUl0ZW0pIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGZpbHRlcnMgPSB0aGlzLmNtcEl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbVtzZWxmLml0ZW1FeHBdID09PSBkYXRhSXRlbTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGZpbHRlcnNbMF07XHJcblxyXG4gICAgICAgIHRoaXMuY21wSXRlbXMgPSB0aGlzLmNtcEl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbVtzZWxmLml0ZW1FeHBdICE9PSBkYXRhSXRlbTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICB2YXIgbmV3Q21wSXRlbXMgPSBbXTtcclxuXHJcbiAgICAgICAgdXRpbHMuZm9yRWFjaChzZWxmLmRhdGFJdGVtcywgZnVuY3Rpb24gKGtleSwgaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgY21wSXRlbSA9IHNlbGYuZ2V0Q21wSXRlbShpdGVtKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjbXBJdGVtID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNtcEl0ZW0gPSBuZXcgQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogc2VsZi5pdGVtVGVtcGxhdGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY21wSXRlbVtzZWxmLml0ZW1FeHBdID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIGNtcEl0ZW0uJGluaGVyaXQoc2VsZi5zY29wZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNtcEl0ZW0uJHJlbmRlcih0cnVlKSk7XHJcbiAgICAgICAgICAgIG5ld0NtcEl0ZW1zLnB1c2goY21wSXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChzZWxmLmNtcEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2VsZi5jbXBJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXBlYXRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXBlYXRJdGVtLiRkZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi5jbXBJdGVtcyA9IG5ld0NtcEl0ZW1zO1xyXG4gICAgICAgIHV0aWxzLnJlbW92ZU5vZGVCZXR3ZWVuKHNlbGYuaGVhZGVyLCBzZWxmLmZvb3Rlcik7XHJcbiAgICAgICAgc2VsZi5mb290ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIHNlbGYuZm9vdGVyKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1zaG93J1xyXG59KVxyXG5jbGFzcyBTaG93RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZyl7XHJcbiAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSBiaW5kaW5nLmNvbXB1dGUoKSA/ICdpbml0aWFsJyA6ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZShlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLm9uSW5zZXJ0KGVsZSwgYmluZGluZyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tY2hlY2tlZCdcclxufSlcclxuY2xhc3MgQ2hlY2tlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdjaGVja2VkJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tZGlzYWJsZWQnXHJcbn0pXHJcbmNsYXNzIERpc2FibGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2NoZWNrZWQnXHJcbmV4cG9ydCAqIGZyb20gJy4vZGlzYWJsZWQnXHJcbmV4cG9ydCAqIGZyb20gJy4vcmVhZG9ubHknXHJcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0ZWQnIiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLXJlYWRvbmx5J1xyXG59KVxyXG5jbGFzcyBSZWFkb25seURpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdyZWFkb25seScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLXNlbGVjdGVkJ1xyXG59KVxyXG5jbGFzcyBTZWxlY3RlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdzZWxlY3RlZCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5cclxuY2xhc3MgU3RhdGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmV7XHJcbiAgICBjb25zdHJ1Y3RvcihhdHRyTmFtZSl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmF0dHJOYW1lID0gYXR0ck5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoZWxlLCBiaW5kaW5nKXtcclxuICAgICAgICBpZiAoYmluZGluZy5jb21wdXRlKCkpIHtcclxuICAgICAgICAgICAgaWYgKCFlbGUuaGFzQXR0cmlidXRlKHRoaXMuYXR0ck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGUuc2V0QXR0cmlidXRlKHRoaXMuYXR0ck5hbWUsICcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGVsZS5oYXNBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGVsZS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5vbkluc2VydChlbGUsIGJpbmRpbmcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLXN0eWxlJ1xyXG59KVxyXG5jbGFzcyBTdHlsZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydChlbGUsIGJpbmRpbmcpe1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGJpbmRpbmcuY29tcHV0ZSgpO1xyXG5cclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIGVsZS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGVsZS5zdHlsZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGVsZS5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBiaW5kaW5nLnNjb3BlLiR3YXRjaCh2YWx1ZSwgL1xcdysvaSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGUuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgb2Ygbi1zdHlsZSBzaG91bGQgYmUgc3RyaW5nIG9yIG9iamVjdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZShlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLm9uSW5zZXJ0KGVsZSwgYmluZGluZyk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gnXHJcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoLWRlZmF1bHQnXHJcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoLXdoZW4nIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbGl0eSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLXN3aXRjaC1kZWZhdWx0J1xyXG59KVxyXG5jbGFzcyBTd2l0Y2hEZWZhdWx0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pc01hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hdHRyTm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnN3aXRjaFdoZW5EaXJzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFN3aXRjaFdoZW5EaXJzKCkge1xyXG4gICAgICAgIHZhciB2RWxlID0gdGhpcy5hdHRyTm9kZS5vd25lclZFbGVtZW50O1xyXG5cclxuICAgICAgICB3aGlsZSAodkVsZS5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgd2hlbkRpcnMgPSB2RWxlLnByZXZpb3VzU2libGluZy5nZXREaXJlY3RpdmUoJ24tc3dpdGNoLXdoZW4nKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aGVuRGlycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoV2hlbkRpcnMucHVzaCh3aGVuRGlyc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZFbGUgPSB2RWxlLnByZXZpb3VzU2libGluZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWF0Y2goKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLnN3aXRjaFdoZW5EaXJzLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaXNNYXRjaDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbXBpbGUoYXR0ck5vZGUsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmF0dHJOb2RlID0gYXR0ck5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRTd2l0Y2hXaGVuRGlycygpO1xyXG4gICAgICAgIHRoaXMuaXNNYXRjaCA9IHRoaXMubWF0Y2goKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLXN3aXRjaC1kZWZhdWx0Jyk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc01hdGNoKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKGVsZSwgdGhpcy5jb21tZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3dpdGNoV2hlbkRpcnMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtLmlzTWF0Y2hDaGFuZ2VkLm9uKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKGVsZSwgYmluZGluZyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuaXNNYXRjaCwgbmV3VmFsdWUgPSB0aGlzLm1hdGNoKCk7XHJcblxyXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01hdGNoID0gbmV3VmFsdWU7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlLnBhcmVudE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuY29tbWVudCwgZWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoZWxlLCB0aGlzLmNvbW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmF0dHJOb2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoV2hlbkRpcnMgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbGl0eSc7XHJcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uLy4uL3V0aWxpdHkvbWVzc2FnZSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLXN3aXRjaC13aGVuJ1xyXG59KVxyXG5jbGFzcyBTd2l0Y2hXaGVuRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pc01hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hdHRyTm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnN3aXRjaERpciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc01hdGNoQ2hhbmdlZCA9IG5ldyBNZXNzZW5nZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0U3dpdGNoRGlyKCkge1xyXG4gICAgICAgIHZhciB2RWxlID0gdGhpcy5hdHRyTm9kZS5vd25lclZFbGVtZW50O1xyXG4gICAgICAgIHZhciBzd2l0Y2hEaXJzID0gdkVsZS5wYXJlbnROb2RlLmdldERpcmVjdGl2ZSgnbi1zd2l0Y2gnKTtcclxuXHJcbiAgICAgICAgaWYgKCFzd2l0Y2hEaXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmUgbi1zd2l0Y2ggZGlyZWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN3aXRjaERpciA9IHN3aXRjaERpcnNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21waWxlKGF0dHJOb2RlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyTm9kZSA9IGF0dHJOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0U3dpdGNoRGlyKCk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbi1zd2l0Y2gtd2hlbicpO1xyXG4gICAgICAgIHRoaXMuaXNNYXRjaCA9IChiaW5kaW5nLmNvbXB1dGUoKSA9PT0gdGhpcy5zd2l0Y2hEaXIudmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNNYXRjaCkge1xyXG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN3aXRjaERpci52YWx1ZUNoYW5nZWQub24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZShlbGUsIGJpbmRpbmcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLmlzTWF0Y2gsXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gKGJpbmRpbmcuY29tcHV0ZSgpID09PSB0aGlzLnN3aXRjaERpci52YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01hdGNoID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNYXRjaENoYW5nZWQuZmlyZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZS5wYXJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmNvbW1lbnQsIGVsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKGVsZSwgdGhpcy5jb21tZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyTm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnN3aXRjaERpciA9IG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi8uLi91dGlsaXR5L21lc3NhZ2UnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1zd2l0Y2gnXHJcbn0pXHJcbmNsYXNzIFN3aXRjaERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkID0gbmV3IE1lc3NlbmdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBiaW5kaW5nLmNvbXB1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZShlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGJpbmRpbmcuY29tcHV0ZSgpO1xyXG5cclxuICAgICAgICBpZihuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkLmZpcmUoe1xyXG4gICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi91dGlsaXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcclxuZXhwb3J0ICogZnJvbSAnLi9wYXJzZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XHJcblxyXG51dGlscy5pbmhlcml0KEh0bWxMZXhlciwgTGV4ZXIpO1xyXG5mdW5jdGlvbiBIdG1sTGV4ZXIob3B0aW9ucykge1xyXG4gICAgSHRtbExleGVyLnN1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XHJcbn1cclxuXHJcbkh0bWxMZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XHJcbiAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxyXG4gICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyB8fFxyXG4gICAgICAgIGNoID09PSAnQCcgfHwgY2ggPT09ICc6JyB8fCBjaCA9PT0gJyonKTtcclxufTtcclxuXHJcbkh0bWxMZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCwgY3ApIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy0nIHx8IGNoID09PSAnLic7XHJcbn07XHJcblxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLmV4cGVjdFN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHZhciBudW0gPSBzdHIubGVuZ3RoO1xyXG4gICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDw9IHRoaXMudGV4dC5sZW5ndGgpID8gKHN0ciA9PT0gdGhpcy50ZXh0LnN1YnN0cih0aGlzLmluZGV4LCBudW0pKSA6IGZhbHNlO1xyXG59O1xyXG5cclxuLy8gaHRtbCBjb21tZW50IFwiPCEtLWNvbW1lbnQtLT5cIlxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRDb21tZW50ID0gZnVuY3Rpb24gKGJlZ2luLCBlbmQpIHtcclxuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcclxuICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgIHZhciByYXdTdHJpbmcgPSBiZWdpbjtcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZyhlbmQpKSB7XHJcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBlbmQ7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcsIHN0YXJ0KTtcclxufTtcclxuXHJcbi8vIGh0bWwgdGV4dFxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgIGlmICgoY2ggPT09ICc8JyAmJiAodGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB8fCBjaDIgPT09ICcvJykgfHwgdGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgIH1cclxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgdGV4dFRhZzogdHJ1ZVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBodG1sIHRhZ1xyXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRUYWcgPSBmdW5jdGlvbiAoYmVnaW4sIGVuZCwgY2xvc2luZywgZG9jdHlwZSkge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBiZWdpbiwgdGFnOiB0cnVlLCBjbG9zaW5nOiBjbG9zaW5nLCBiZWdpbjogdHJ1ZSwgZG9jdHlwZTogZG9jdHlwZSB9KTtcclxuICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xyXG4gICAgdGhpcy5yZWFkSWRlbnQoKTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG5cclxuICAgICAgICBpZiAoIWNsb3NpbmcpIHtcclxuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICB2YXIgc3RyID0gY2ggKyBjaDI7XHJcbiAgICAgICAgICAgIGlmIChzdHIgPT09ICcvJyArIGVuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBzdHIsIHRhZzogdHJ1ZSwgY2xvc2luZzogdHJ1ZSwgZW5kOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBzdHIubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaCA9PT0gZW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBlbmQsXHJcbiAgICAgICAgICAgICAgICB0YWc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjbG9zaW5nOiAhIWRvY3R5cGUgPyB0cnVlIDogY2xvc2luZyxcclxuICAgICAgICAgICAgICAgIGVuZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc9Jykge1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6ICc9JywgZXF1YWw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuSHRtbExleGVyLnByb3RvdHlwZS5sZXggPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgdGhpcy50b2tlbnMgPSBbXTtcclxuXHJcbiAgICB2YXIgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgdmFyIGNoMyA9IHRoaXMucGVlaygyKTtcclxuICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRDb21tZW50KCc8IS0tJywgJy0tPicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJzwnICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwnLCAnPicsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwvJykgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPC8nLCAnPicsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCFET0NUWVBFJykpIHtcclxuICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8IScsICc+JywgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0RPQ1RZUEUgaXMgbm90IGFsbG93ZWQnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbn07XHJcblxyXG5leHBvcnQgeyBIdG1sTGV4ZXIgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5pbXBvcnQgeyBEb2N1bWVudEZyYWdtZW50Tm9kZSwgQ29tbWVudE5vZGUsIFRleHROb2RlLCBEb2N1bWVudFR5cGVOb2RlLCBFbGVtZW50Tm9kZSwgQXR0ck5vZGUgfSBmcm9tICcuLi9jb3JlJztcclxuXHJcbnV0aWxzLmluaGVyaXQoSHRtbFBhcnNlciwgUGFyc2VyKTtcclxuZnVuY3Rpb24gSHRtbFBhcnNlcihsZXhlciwgb3B0aW9ucykge1xyXG4gICAgSHRtbFBhcnNlci5zdXBlci5jYWxsKHRoaXMsIGxleGVyLCBvcHRpb25zKTtcclxufVxyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcclxuXHJcbiAgICB2YXIgZmFyZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudE5vZGUoKTtcclxuICAgIHZhciBkb2N0eXBlLCBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4uZG9jdHlwZSkge1xyXG4gICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N0eXBlID0gdGhpcy5kb2N0eXBlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZChkb2N0eXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgb25seSBhbGxvdyBvbmVcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBpcyBub3QgYWxsb3dlZFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBDb21tZW50Tm9kZSgpO1xyXG4gICAgICAgICAgICBjb21tZW50Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgIGZhcmdtZW50LiRwdXNoQ2hpbGQoY29tbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFRleHROb2RlKCk7XHJcbiAgICAgICAgICAgIHRleHQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZCh0ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xyXG4gICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKHRoaXMuZWxlbWVudCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcImltcG9zc2libGVcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYXJnbWVudC4kYnVpbGRTaWJsaW5nKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhcmdtZW50LmNoaWxkTm9kZXM7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5kb2N0eXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgICB2YXIgZG9jVHlwZSA9IG5ldyBEb2N1bWVudFR5cGVOb2RlKCk7XHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgIGRvY1R5cGUubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hdHRycyhkb2NUeXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgZG9jVHlwZS5jaGlsZE5vZGVzLnB1c2goYXR0cik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRvY1R5cGU7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5lbGVtZW50ID0gZnVuY3Rpb24gKHApIHtcclxuICAgIHRoaXMubmV4dCgpO1xyXG4gICAgdmFyIGVsZSA9IG5ldyBFbGVtZW50Tm9kZSgpO1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICBlbGUubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dHJzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIGVsZS4kcHVzaEF0dHJpYnV0ZShhdHRyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSAnaW5wdXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudHMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlLiRwdXNoQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09IHRva2VuLnRleHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZTtcclxufTtcclxuXHJcbkh0bWxQYXJzZXIucHJvdG90eXBlLmNoaWxkRWxlbWVudHMgPSBmdW5jdGlvbiAocCkge1xyXG4gICAgdmFyIGVsZXMgPSBbXTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgQ29tbWVudE5vZGUoKTtcclxuICAgICAgICAgICAgY29tbWVudC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICBlbGVzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFRleHROb2RlKCk7XHJcbiAgICAgICAgICAgIHRleHQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgZWxlcy5wdXNoKHRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XHJcbiAgICAgICAgICAgIGVsZXMucHVzaCh0aGlzLmVsZW1lbnQocCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZXM7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5hdHRycyA9IGZ1bmN0aW9uIChwKSB7XHJcbiAgICB2YXIgYXR0cnMgPSBbXTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhdHRyID0gbmV3IEF0dHJOb2RlKCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIGF0dHIubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICBhdHRyLm9yZ05vZGVOYW1lID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5lcXVhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmNvbnN0YW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5ub2RlVmFsdWUgPSB0b2tlbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF0dHJzLnB1c2goYXR0cik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF0dHJzO1xyXG59O1xyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuaW5kZXgrKztcclxufTtcclxuXHJcbmV4cG9ydCB7IEh0bWxQYXJzZXIgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgTGV4ZXIgfSBmcm9tICcuL2xleGVyJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5pbXBvcnQgeyBIdG1sTGV4ZXIgfSBmcm9tICcuL2h0bWwtbGV4ZXInO1xyXG5pbXBvcnQgeyBIdG1sUGFyc2VyIH0gZnJvbSAnLi9odG1sLXBhcnNlcic7XHJcblxyXG52YXIgcGFyc2VPcHRpb25zID0ge1xyXG4gICAgaXNJZGVudGlmaWVyQ29udGludWU6IGZhbHNlLFxyXG4gICAgaXNJZGVudGlmaWVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgbGl0ZXJhbHM6IHtcclxuICAgICAgICBmYWxzZTogZmFsc2UsXHJcbiAgICAgICAgbnVsbDogbnVsbCxcclxuICAgICAgICB0cnVlOiB0cnVlLFxyXG4gICAgICAgIHVuZGVmaW5lZDogdW5kZWZpbmVkXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBwYXJzZShodG1sKSB7XHJcbiAgICB2YXIgbGV4ZXIgPSBuZXcgSHRtbExleGVyKHBhcnNlT3B0aW9ucyk7XHJcbiAgICB2YXIgcGFyc2VyID0gbmV3IEh0bWxQYXJzZXIobGV4ZXIsIHBhcnNlT3B0aW9ucyk7XHJcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGh0bWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21waWxlKGh0bWwsIG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IHtcclxuICAgICAgICAgICAgZ2V0RW1iZWRUcGw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGFpbnNDb21wb25lbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlQ29tcG9uZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGFpbnNEaXJlY3RpdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlRGlyZWN0aXZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0dGluZ3MgPSB1dGlscy5tZXJnZShkZWZhdWx0cywgb3B0aW9ucyksXHJcbiAgICAgICAgYXN0Tm9kZXMgPSBwYXJzZShodG1sKTtcclxuXHJcbiAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XHJcbiAgICAgICAgYXN0Tm9kZS5jb21waWxlKHNldHRpbmdzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcclxuICAgICAgICBhc3ROb2RlLmRpcmVjdGl2ZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgZGlyZWN0aXZlLiRjb21waWxlKHNldHRpbmdzKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoc2NvcGUpIHtcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblxyXG4gICAgICAgIHNjb3BlLiQkdm5vZGVzID0gYXN0Tm9kZXM7XHJcblxyXG4gICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZS5saW5rKHNjb3BlKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5hZnRlckxpbmsoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZShleHAsIHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICBpZiAoZXhwID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBleHAgPSBleHAudHJpbSgpO1xyXG4gICAgaWYgKGV4cC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBleHAgPSBleHAucmVwbGFjZSgnJmd0OycsICc+JykucmVwbGFjZSgnJmx0OycsICc8Jyk7XHJcbiAgICB2YXIgbGV4ZXIgPSBuZXcgTGV4ZXIocGFyc2VPcHRpb25zKTtcclxuICAgIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKGxleGVyLCBwYXJzZU9wdGlvbnMpO1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBvcHRpb25zLmNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGluamVjdG9yLmNyZWF0ZUZpbHRlcihuYW1lKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGV4cCkuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvbXBpbGUsIGNvbXB1dGUsIHBhcnNlIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcblxyXG52YXIgT1BFUkFUT1JTID0ge307XHJcbnZhciBvcGVyYXRvclRleHQgPSAnKyAtICogLyAlID09PSAhPT0gPT0gIT0gPCA+IDw9ID49ICYmIHx8ICEgPSB8JztcclxudmFyIEVTQ0FQRSA9IHsgJ24nOiAnXFxuJywgJ2YnOiAnXFxmJywgJ3InOiAnXFxyJywgJ3QnOiAnXFx0JywgJ3YnOiAnXFx2JywgJ1xcJyc6ICdcXCcnLCAnXCInOiAnXCInIH07XHJcblxyXG5vcGVyYXRvclRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRvcikge1xyXG4gICAgT1BFUkFUT1JTW29wZXJhdG9yXSA9IHRydWU7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gTGV4ZXIob3B0aW9ucykge1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxufVxyXG5cclxuTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB0aGlzLnRva2VucyA9IFtdO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICcuJyAmJiB0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWROdW1iZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzKGNoLCAnKCl7fVtdLiw7Oj8nKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGNoIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjaDIgPSBjaCArIHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICB2YXIgY2gzID0gY2gyICsgdGhpcy5wZWVrKDIpO1xyXG4gICAgICAgICAgICB2YXIgb3AxID0gT1BFUkFUT1JTW2NoXTtcclxuICAgICAgICAgICAgdmFyIG9wMiA9IE9QRVJBVE9SU1tjaDJdO1xyXG4gICAgICAgICAgICB2YXIgb3AzID0gT1BFUkFUT1JTW2NoM107XHJcbiAgICAgICAgICAgIGlmIChvcDEgfHwgb3AyIHx8IG9wMykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VuID0gb3AzID8gY2gzIDogKG9wMiA/IGNoMiA6IGNoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogdG9rZW4sIG9wZXJhdG9yOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSB0b2tlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzID0gZnVuY3Rpb24gKGNoLCBjaGFycykge1xyXG4gICAgcmV0dXJuIGNoYXJzLmluZGV4T2YoY2gpICE9PSAtMTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKGkpIHtcclxuICAgIHZhciBudW0gPSBpIHx8IDE7XHJcbiAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPCB0aGlzLnRleHQubGVuZ3RoKSA/IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCArIG51bSkgOiBmYWxzZTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5pc051bWJlciA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuICgnMCcgPD0gY2ggJiYgY2ggPD0gJzknKSAmJiB0eXBlb2YgY2ggPT09ICdzdHJpbmcnO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzV2hpdGVzcGFjZSA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgLy8gSUUgdHJlYXRzIG5vbi1icmVha2luZyBzcGFjZSBhcyBcXHUwMEEwXHJcbiAgICByZXR1cm4gKGNoID09PSAnICcgfHwgY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFx0JyB8fFxyXG4gICAgICAgIGNoID09PSAnXFxuJyB8fCBjaCA9PT0gJ1xcdicgfHwgY2ggPT09ICdcXHUwMEEwJyk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNJZGVudGlmaWVyU3RhcnQgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQgP1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydChjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcclxuICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxyXG4gICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcclxuICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzSWRlbnRpZmllckNvbnRpbnVlID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlID9cclxuICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlID0gZnVuY3Rpb24gKGNoLCBjcCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmNvZGVQb2ludEF0ID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICBpZiAoY2gubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxyXG4gICAgcmV0dXJuIChjaC5jaGFyQ29kZUF0KDApIDw8IDEwKSArIGNoLmNoYXJDb2RlQXQoMSkgLSAweDM1RkRDMDA7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUucGVla011bHRpY2hhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICB2YXIgcGVlayA9IHRoaXMucGVlaygpO1xyXG4gICAgaWYgKCFwZWVrKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoO1xyXG4gICAgfVxyXG4gICAgdmFyIGNwMSA9IGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICB2YXIgY3AyID0gcGVlay5jaGFyQ29kZUF0KDApO1xyXG4gICAgaWYgKGNwMSA+PSAweEQ4MDAgJiYgY3AxIDw9IDB4REJGRiAmJiBjcDIgPj0gMHhEQzAwICYmIGNwMiA8PSAweERGRkYpIHtcclxuICAgICAgICByZXR1cm4gY2ggKyBwZWVrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzRXhwT3BlcmF0b3IgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnIHx8IHRoaXMuaXNOdW1iZXIoY2gpKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS50aHJvd0Vycm9yID0gZnVuY3Rpb24gKGVycm9yLCBzdGFydCwgZW5kKSB7XHJcbiAgICBlbmQgPSBlbmQgfHwgdGhpcy5pbmRleDtcclxuICAgIHZhciBjb2xTdHIgPSAodXRpbHMuaXNEZWZpbmVkKHN0YXJ0KSA/ICdzICcgKyBzdGFydCArICctJyArIHRoaXMuaW5kZXggKyAnIFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyhzdGFydCwgZW5kKSArICddJyA6ICcgJyArIGVuZCk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xleGVyIEVycm9yOiAnICsgZXJyb3IgKyAnIGF0IGNvbHVtbicgKyBjb2xTdHIgKyAnIGluIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXS4nKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5yZWFkTnVtYmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG51bWJlciA9ICcnO1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHV0aWxzLmxvd2VyY2FzZSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtcclxuICAgICAgICBpZiAoY2ggPT09ICcuJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSkge1xyXG4gICAgICAgICAgICBudW1iZXIgKz0gY2g7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHBlZWtDaCA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09ICdlJyAmJiB0aGlzLmlzRXhwT3BlcmF0b3IocGVla0NoKSkge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcclxuICAgICAgICAgICAgICAgIHBlZWtDaCAmJiB0aGlzLmlzTnVtYmVyKHBlZWtDaCkgJiZcclxuICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcclxuICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXHJcbiAgICAgICAgICAgICAgICAoIXBlZWtDaCB8fCAhdGhpcy5pc051bWJlcihwZWVrQ2gpKSAmJlxyXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIGV4cG9uZW50Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgdGV4dDogbnVtYmVyLFxyXG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiBOdW1iZXIobnVtYmVyKVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUucmVhZElkZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHRoaXMuaW5kZXggKz0gdGhpcy5wZWVrTXVsdGljaGFyKCkubGVuZ3RoO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy5wZWVrTXVsdGljaGFyKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCArPSBjaC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgdGV4dDogdGhpcy50ZXh0LnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KSxcclxuICAgICAgICBpZGVudGlmaWVyOiB0cnVlXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nID0gZnVuY3Rpb24gKHF1b3RlKSB7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgdGhpcy5pbmRleCsrO1xyXG4gICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgdmFyIHJhd1N0cmluZyA9IHF1b3RlO1xyXG4gICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICByYXdTdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgaWYgKGVzY2FwZSkge1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09ICd1Jykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhleCA9IHRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcclxuICAgICAgICAgICAgICAgIGlmICghaGV4Lm1hdGNoKC9bXFxkYS1mXXs0fS9pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHUnICsgaGV4ICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gNDtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGhleCwgMTYpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXAgPSBFU0NBUEVbY2hdO1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgKHJlcCB8fCBjaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gcXVvdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcclxuICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgcXVvdGUnLCBzdGFydCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBMZXhlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQge2lzRmlsdGVyfSBmcm9tICcuLi92aWV3JztcclxuXHJcbnZhciBBU1QgPSB7fTtcclxuQVNULlByb2dyYW0gPSAnUHJvZ3JhbSc7XHJcbkFTVC5FeHByZXNzaW9uU3RhdGVtZW50ID0gJ0V4cHJlc3Npb25TdGF0ZW1lbnQnO1xyXG5BU1QuQXNzaWdubWVudEV4cHJlc3Npb24gPSAnQXNzaWdubWVudEV4cHJlc3Npb24nO1xyXG5BU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uID0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbic7XHJcbkFTVC5Mb2dpY2FsRXhwcmVzc2lvbiA9ICdMb2dpY2FsRXhwcmVzc2lvbic7XHJcbkFTVC5CaW5hcnlFeHByZXNzaW9uID0gJ0JpbmFyeUV4cHJlc3Npb24nO1xyXG5BU1QuVW5hcnlFeHByZXNzaW9uID0gJ1VuYXJ5RXhwcmVzc2lvbic7XHJcbkFTVC5DYWxsRXhwcmVzc2lvbiA9ICdDYWxsRXhwcmVzc2lvbic7XHJcbkFTVC5NZW1iZXJFeHByZXNzaW9uID0gJ01lbWJlckV4cHJlc3Npb24nO1xyXG5BU1QuSWRlbnRpZmllciA9ICdJZGVudGlmaWVyJztcclxuQVNULkxpdGVyYWwgPSAnTGl0ZXJhbCc7XHJcbkFTVC5BcnJheUV4cHJlc3Npb24gPSAnQXJyYXlFeHByZXNzaW9uJztcclxuQVNULlByb3BlcnR5ID0gJ1Byb3BlcnR5JztcclxuQVNULk9iamVjdEV4cHJlc3Npb24gPSAnT2JqZWN0RXhwcmVzc2lvbic7XHJcblxyXG5mdW5jdGlvbiBBc3ROb2RlKHR5cGUpIHtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcclxufVxyXG5cclxuQXN0Tm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcclxufTtcclxuXHJcbkFzdE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGludGVybmFscykge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGludGVybmFscyk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoUHJvZ3JhbU5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBQcm9ncmFtTm9kZSgpIHtcclxuICAgIFByb2dyYW1Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlByb2dyYW0pO1xyXG59XHJcblxyXG5Qcm9ncmFtTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1swXS5jb21waWxlKHNjb3BlLCBvcHRpb25zIHx8IHt9KTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoRXhwcmVzc2lvblN0YXRlbWVudE5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSgpIHtcclxuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQpO1xyXG59XHJcblxyXG5FeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgaW50ZXJuYWxzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGludGVybmFscyk7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShsZWZ0LCByaWdodCwgb3BlcmF0b3IpIHtcclxuICAgIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG59XHJcblxyXG5Bc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciB0YXJnZXQgPSB0aGlzLmxlZnQuY29tcGlsZShzY29wZSwgb3B0aW9ucywgeyBhc3NpZ25tZW50TGVmdDogdHJ1ZSB9KTtcclxuICAgIHZhciB2YWx1ZSA9IHRoaXMucmlnaHQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB0YXJnZXQub2JqW3RhcmdldC5wcm9wXSA9IHZhbHVlO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpIHtcclxuICAgIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uKTtcclxuICAgIHRoaXMudGVzdCA9IHRlc3Q7XHJcbiAgICB0aGlzLmFsdGVybmF0ZSA9IGFsdGVybmF0ZTtcclxuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XHJcbn1cclxuXHJcbkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIGlmICh0aGlzLnRlc3QuY29tcGlsZShzY29wZSkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbHRlcm5hdGUuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChMb2dpY2FsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBMb2dpY2FsRXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XHJcbiAgICBMb2dpY2FsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcclxuICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxufVxyXG5cclxuTG9naWNhbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgcmVzdWx0O1xyXG4gICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMubGVmdC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5yaWdodC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcclxuICAgICAgICBjYXNlICcmJic6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd8fCc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChCaW5hcnlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIEJpbmFyeUV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xyXG4gICAgQmluYXJ5RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQmluYXJ5RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG59XHJcblxyXG5CaW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHJlc3VsdDtcclxuICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmxlZnQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMucmlnaHQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcblxyXG4gICAgLy8gJysnLCAnLScsICcqJywgJy8nLCAnJScsICc8JywgJz4nLCAnPD0nLCAnPj0nLCAnPT0nLCAnIT0nLCAnPT09JywgJyE9PSdcclxuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xyXG4gICAgICAgIGNhc2UgJysnOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKyByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAqIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLyByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICclJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICUgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnPCc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJz4nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc8PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc+PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc9PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICchPSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc9PT0nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyE9PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoVW5hcnlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIFVuYXJ5RXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGFyZykge1xyXG4gICAgVW5hcnlFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5VbmFyeUV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5wcmVmaXggPSB0cnVlO1xyXG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgdGhpcy5hcmcgPSBhcmc7XHJcbn1cclxuXHJcblVuYXJ5RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciByZXN1bHQsIHZhbHVlID0gdGhpcy5hcmcuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcblxyXG4gICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XHJcbiAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gLXZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICchJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gIXZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChMaXRlcmFsTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIExpdGVyYWxOb2RlKHZhbHVlKSB7XHJcbiAgICBMaXRlcmFsTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5MaXRlcmFsKTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5cclxuTGl0ZXJhbE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoQ2FsbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQ2FsbEV4cHJlc3Npb25Ob2RlKGNhbGxlZSwgYXJncykge1xyXG4gICAgQ2FsbEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkNhbGxFeHByZXNzaW9uKTtcclxuICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xyXG4gICAgdGhpcy5hcmdzID0gYXJncztcclxuICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XHJcbn1cclxuXHJcbkNhbGxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNhbGxlZS5jb21waWxlKHNjb3BlLCBvcHRpb25zLCB7IGNhbGxlZTogdHJ1ZSB9KTtcclxuICAgIHZhciBhcmdWYWx1ZXMgPSB0aGlzLmFyZ3MubWFwKGZ1bmN0aW9uIChhcmcpIHtcclxuICAgICAgICByZXR1cm4gYXJnLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsdGVyKSB7XHJcbiAgICAgICAgdmFyIGZpbHRlcklucyA9IG9wdGlvbnMuY3JlYXRlRmlsdGVyKGNvbnRleHQucHJvcCk7XHJcbiAgICAgICAgaWYgKGlzRmlsdGVyKGZpbHRlcklucykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcklucy4kZXhlY3V0ZS5hcHBseShmaWx0ZXJJbnMsIGFyZ1ZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIFwiJyArIGNvbnRleHQucHJvcCArICdcIiBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihmbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQub2JqLCBhcmdWYWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udGV4dC5wcm9wICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChNZW1iZXJFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIE1lbWJlckV4cHJlc3Npb25Ob2RlKG9iamVjdCwgcHJvcGVydHksIGNvbXB1dGVkKSB7XHJcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5NZW1iZXJFeHByZXNzaW9uKTtcclxuICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xyXG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xyXG4gICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkO1xyXG59XHJcblxyXG5NZW1iZXJFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgaW50ZXJuYWxzKSB7XHJcbiAgICB2YXIgb2JqID0gdGhpcy5vYmplY3QuY29tcGlsZShzY29wZSwgb3B0aW9ucywgaW50ZXJuYWxzKTtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9ialt0aGlzLnByb3BlcnR5LmNvbXBpbGUob2JqLCBvcHRpb25zLCBpbnRlcm5hbHMpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eS5jb21waWxlKG9iaiwgb3B0aW9ucywgaW50ZXJuYWxzKTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoSWRlbnRpZmllck5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBJZGVudGlmaWVyTm9kZShuYW1lKSB7XHJcbiAgICBJZGVudGlmaWVyTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5JZGVudGlmaWVyKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbn1cclxuXHJcbklkZW50aWZpZXJOb2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBpbnRlcm5hbHMpIHtcclxuICAgIGlmIChpbnRlcm5hbHMpIHtcclxuICAgICAgICBpZiAoaW50ZXJuYWxzLmFzc2lnbm1lbnRMZWZ0IHx8IGludGVybmFscy5jYWxsZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG9iajogc2NvcGUsXHJcbiAgICAgICAgICAgICAgICBwcm9wOiB0aGlzLm5hbWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaW50ZXJuYWxzLnByb3BlcnR5S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHJlc3VsdCA9IHNjb3BlW3RoaXMubmFtZV07XHJcbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgb3B0aW9ucy5sb2NhbHMpIHtcclxuICAgICAgICByZXN1bHQgPSBvcHRpb25zLmxvY2Fsc1t0aGlzLm5hbWVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoQXJyYXlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIEFycmF5RXhwcmVzc2lvbk5vZGUoKSB7XHJcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkFycmF5RXhwcmVzc2lvbik7XHJcbn1cclxuXHJcbnV0aWxzLmluaGVyaXQoUHJvcGVydHlOb2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gUHJvcGVydHlOb2RlKCkge1xyXG4gICAgUHJvcGVydHlOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlByb3BlcnR5KTtcclxuICAgIHRoaXMua2luZCA9ICdpbml0JztcclxuICAgIHRoaXMua2V5ID0gbnVsbDtcclxuICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgdGhpcy5jb21wdXRlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5Qcm9wZXJ0eU5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5OiB0aGlzLmtleS5jb21waWxlKHNjb3BlLCBvcHRpb25zLCB7IHByb3BlcnR5S2V5OiB0cnVlIH0pLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpXHJcbiAgICB9O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChPYmplY3RFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpIHtcclxuICAgIE9iamVjdEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk9iamVjdEV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcclxufVxyXG5cclxuT2JqZWN0RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuXHJcbiAgICB0aGlzLnByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHZhciBkZWYgPSBpdGVtLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJlc3VsdFtkZWYua2V5XSA9IGRlZi52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpc0Fzc2lnbmFibGUoYXN0KSB7XHJcbiAgICByZXR1cm4gYXN0LnR5cGUgPT09IEFTVC5JZGVudGlmaWVyIHx8IGFzdC50eXBlID09PSBBU1QuTWVtYmVyRXhwcmVzc2lvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gUGFyc2VyKGxleGVyLCBvcHRpb25zKSB7XHJcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnRocm93RXJyb3IgPSBmdW5jdGlvbiAobXNnLCB0b2tlbikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTeW50YXggRXJyb3I6IFRva2VuIFxcJycgKyB0b2tlbi50ZXh0ICsgJ1xcJycgKyBtc2cgKyAnIGF0IGNvbHVtbiAnICsgKHRva2VuLmluZGV4ICsgMSkgK1xyXG4gICAgICAgICcgb2YgdGhlIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXSBzdGFydGluZyBhdCBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcodG9rZW4uaW5kZXgpICsgJ10uJyk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xyXG5cclxuICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xyXG5cclxuICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5wcm9ncmFtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHByb2dyYW0gPSBuZXcgUHJvZ3JhbU5vZGUoKTtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XHJcbiAgICAgICAgICAgIHByb2dyYW0uYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5leHByZXNzaW9uU3RhdGVtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4cCA9IG5ldyBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSgpO1xyXG4gICAgZXhwLmFwcGVuZENoaWxkKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XHJcbiAgICByZXR1cm4gZXhwO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5maWx0ZXJDaGFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3wnKSkge1xyXG4gICAgICAgIGxlZnQgPSB0aGlzLmZpbHRlcihsZWZ0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5leHByZXNzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5hc3NpZ25tZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMudGVybmFyeSgpO1xyXG4gICAgaWYgKHRoaXMuZXhwZWN0KCc9JykpIHtcclxuICAgICAgICBpZiAoIWlzQXNzaWduYWJsZShyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFzc2lnbiBhIHZhbHVlIHRvIGEgbm9uIGwtdmFsdWUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdCA9IG5ldyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUocmVzdWx0LCB0aGlzLmFzc2lnbm1lbnQoKSwgJz0nKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnRlcm5hcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdGVzdCA9IHRoaXMubG9naWNhbE9SKCk7XHJcbiAgICB2YXIgYWx0ZXJuYXRlO1xyXG4gICAgdmFyIGNvbnNlcXVlbnQ7XHJcbiAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xyXG4gICAgICAgIGFsdGVybmF0ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnN1bWUoJzonKSkge1xyXG4gICAgICAgICAgICBjb25zZXF1ZW50ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0ZXN0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5sb2dpY2FsT1IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCd8fCcpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJ3x8JywgbGVmdCwgdGhpcy5sb2dpY2FsQU5EKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmxvZ2ljYWxBTkQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMuZXF1YWxpdHkoKTtcclxuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnJiYnKSkge1xyXG4gICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCcmJicsIGxlZnQsIHRoaXMuZXF1YWxpdHkoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuZXF1YWxpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMucmVsYXRpb25hbCgpO1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc9PScsICchPScsICc9PT0nLCAnIT09JykpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnJlbGF0aW9uYWwoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucmVsYXRpb25hbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5hZGRpdGl2ZSgpO1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMuYWRkaXRpdmUoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuYWRkaXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMubXVsdGlwbGljYXRpdmUoKTtcclxuICAgIHZhciB0b2tlbjtcclxuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJykpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLm11bHRpcGxpY2F0aXZlKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLm11bHRpcGxpY2F0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxlZnQgPSB0aGlzLnVuYXJ5KCk7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJyonLCAnLycsICclJykpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnVuYXJ5KCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnVuYXJ5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgaWYgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nLCAnIScpKSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcmltYXJ5KCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnByaW1hcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJpbWFyeTtcclxuICAgIGlmICh0aGlzLmV4cGVjdCgnKCcpKSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuZmlsdGVyQ2hhaW4oKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ1snKSkge1xyXG4gICAgICAgIHByaW1hcnkgPSB0aGlzLmFycmF5RGVjbGFyYXRpb24oKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ3snKSkge1xyXG4gICAgICAgIHByaW1hcnkgPSB0aGlzLm9iamVjdCgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubGl0ZXJhbHMuaGFzT3duUHJvcGVydHkodGhpcy5wZWVrKCkudGV4dCkpIHtcclxuICAgICAgICBwcmltYXJ5ID0gbmV3IExpdGVyYWxOb2RlKHRoaXMub3B0aW9ucy5saXRlcmFsc1t0aGlzLmNvbnN1bWUoKS50ZXh0XSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcclxuICAgICAgICBwcmltYXJ5ID0gdGhpcy5pZGVudGlmaWVyKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuY29uc3RhbnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdub3QgYSBwcmltYXJ5IGV4cHJlc3Npb24nLCB0aGlzLnBlZWsoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG5leHQ7XHJcbiAgICB3aGlsZSAoKG5leHQgPSB0aGlzLmV4cGVjdCgnKCcsICdbJywgJy4nKSkpIHtcclxuICAgICAgICBpZiAobmV4dC50ZXh0ID09PSAnKCcpIHtcclxuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5wYXJzZUFyZ3VtZW50cygpKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICdbJykge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuZXhwcmVzc2lvbigpLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICcuJykge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuaWRlbnRpZmllcigpLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJTVBPU1NJQkxFJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaW1hcnk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChiYXNlRXhwcmVzc2lvbikge1xyXG4gICAgdmFyIGFyZ3MgPSBbYmFzZUV4cHJlc3Npb25dLCBpZGVudGlmaWVycyA9IFt0aGlzLmlkZW50aWZpZXIoKV07XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcuJykpIHtcclxuICAgICAgICBpZGVudGlmaWVycy5wdXNoKHRoaXMuaWRlbnRpZmllcigpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwbHVzIG5hbWVzcGFjZVxyXG4gICAgdmFyIGVudGlyZU5hbWUgPSBpZGVudGlmaWVycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5uYW1lO1xyXG4gICAgfSkuam9pbignLicpO1xyXG5cclxuICAgIHZhciByZXN1bHQgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKG5ldyBJZGVudGlmaWVyTm9kZShlbnRpcmVOYW1lKSwgYXJncyk7XHJcblxyXG4gICAgcmVzdWx0LmZpbHRlciA9IHRydWU7XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCc6JykpIHtcclxuICAgICAgICBhcmdzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlQXJndW1lbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICcpJykge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJncztcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuaWRlbnRpZmllciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0b2tlbiA9IHRoaXMuY29uc3VtZSgpO1xyXG4gICAgaWYgKCF0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBub3QgYSB2YWxpZCBpZGVudGlmaWVyJywgdG9rZW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBJZGVudGlmaWVyTm9kZSh0b2tlbi50ZXh0KTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuY29uc3RhbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBUT0RPIGNoZWNrIHRoYXQgaXQgaXMgYSBjb25zdGFudFxyXG4gICAgcmV0dXJuIG5ldyBMaXRlcmFsTm9kZSh0aGlzLmNvbnN1bWUoKS52YWx1ZSk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmFycmF5RGVjbGFyYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJyID0gbmV3IEFycmF5RXhwcmVzc2lvbk5vZGUoKTtcclxuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICddJykge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnXScpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcnIuYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uKCkpO1xyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb25zdW1lKCddJyk7XHJcblxyXG4gICAgcmV0dXJuIGFycjtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUub2JqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHByb3BlcnRpZXMgPSBbXSwgcHJvcGVydHk7XHJcbiAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnfScpIHtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ30nKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHlOb2RlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5jb25zdGFudCgpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCc6JykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHByb3BlcnR5LmtleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoJ1snKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCdbJyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpbnZhbGlkIGtleScsIHRoaXMucGVlaygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb25zdW1lKCd9Jyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBPYmplY3RFeHByZXNzaW9uTm9kZShwcm9wZXJ0aWVzKTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuY29uc3VtZSA9IGZ1bmN0aW9uIChlMSkge1xyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRva2VuID0gdGhpcy5leHBlY3QoZTEpO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFsnICsgZTEgKyAnXScsIHRoaXMucGVlaygpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0b2tlbjtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGVla1Rva2VuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnNbMF07XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoZTEsIGUyLCBlMywgZTQpIHtcclxuICAgIHJldHVybiB0aGlzLnBlZWtBaGVhZCgwLCBlMSwgZTIsIGUzLCBlNCk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBlZWtBaGVhZCA9IGZ1bmN0aW9uIChpLCBlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IGkpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcclxuICAgICAgICB2YXIgdCA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgaWYgKHQgPT09IGUxIHx8IHQgPT09IGUyIHx8IHQgPT09IGUzIHx8IHQgPT09IGU0IHx8XHJcbiAgICAgICAgICAgICghZTEgJiYgIWUyICYmICFlMyAmJiAhZTQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmV4cGVjdCA9IGZ1bmN0aW9uIChlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5wZWVrKGUxLCBlMiwgZTMsIGU0KTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHRoaXMudG9rZW5zLnNoaWZ0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgUGFyc2VyIH07IiwiZXhwb3J0ICogZnJvbSAnLi90ZW1wbGF0ZS1jYWNoZSc7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3ZpZXcvc2VydmljZSc7XHJcbmltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9kZWNvcmF0b3Ivc2VydmljZSc7XHJcblxyXG5Ac2VydmljZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnJHRlbXBsYXRlQ2FjaGUnXHJcbn0pXHJcbmNsYXNzIFRlbXBsYXRlQ2FjaGVTZXJ2aWNlIGV4dGVuZHMgU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudHBsQ2FjaGUgPSB7fTtcclxuICAgICAgICB0aGlzLnByb21pc2VDYWNoZSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRwbEJ5VXJsKHVybCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudHBsQ2FjaGVbdXJsXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoc2VsZi50cGxDYWNoZVt1cmxdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMucHJvbWlzZUNhY2hlW3VybF0pIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9taXNlQ2FjaGVbdXJsXSA9IGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5wcm9taXNlQ2FjaGVbdXJsXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRwbENhY2hlW3VybF0gPSByZXMuZGF0YSB8fCAnJztcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRwbENhY2hlW3VybF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZUNhY2hlW3VybF07XHJcbiAgICB9XHJcbn0iLCJcclxuZnVuY3Rpb24gZ2V0Q2hpbGROb2Rlcyhub2RlKSB7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZS5jaGlsZE5vZGVzLCAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJDaGlsZE5vZGVzKG5vZGUpIHtcclxuICAgIGdldENoaWxkTm9kZXMobm9kZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlTm9kZShyZWZOb2RlLCBuZXdOb2RlKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHJlZk5vZGUucGFyZW50Tm9kZTtcclxuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZOb2RlKTtcclxuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlZk5vZGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5vZGVCZXR3ZWVuKGJlZ2luTm9kZSwgZW5kTm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSBiZWdpbk5vZGUucGFyZW50Tm9kZTtcclxuICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhwYXJlbnROb2RlKTtcclxuXHJcbiAgICBjaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyA9PT0gYmVnaW5Ob2RlICYmIGNoaWxkICE9PSBlbmROb2RlKSB7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgPT09IGVuZE5vZGUgJiYgY2hpbGQgIT09IGJlZ2luTm9kZSkge1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0Tm9kZUFmdGVyKHJlZk5vZGUsIG5ld05vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xyXG5cclxuICAgIGlmIChwYXJlbnROb2RlLmxhc3RDaGlsZCA9PT0gcmVmTm9kZSkge1xyXG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBnZXRDaGlsZE5vZGVzLCBjbGVhckNoaWxkTm9kZXMsIHJlcGxhY2VOb2RlLCByZW1vdmVOb2RlLCByZW1vdmVOb2RlQmV0d2VlbiwgaW5zZXJ0Tm9kZUFmdGVyIH07IiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzQXJyYXkgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbnZhciBwcm9wQ2hhbmdpbmdNc2cgPSBuZXcgTWVzc2VuZ2VyKCk7XHJcbnZhciBwcm9wQ2hhbmdlZE1zZyA9IG5ldyBNZXNzZW5nZXIoKTtcclxuXHJcbmNsYXNzIFNldFByb3BlcnR5SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihkZWVwUHJveHkpIHtcclxuICAgICAgICB0aGlzLnNlbGZLZXkgPSAnX19zZWxmX18nO1xyXG4gICAgICAgIHRoaXMuZGVlcFByb3h5ID0gZGVlcFByb3h5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCh0YXJnZXQsIGtleSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGZLZXkgPT09IGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGFyZ2V0W2tleV07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRlZXBQcm94eSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBuZXcgUHJveHkodmFsdWUsIG5ldyBTZXRQcm9wZXJ0eUhhbmRsZXIodGhpcy5kZWVwUHJveHkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQodGFyZ2V0LCBrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVlcFByb3h5ICYmIGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHZhbHVlW3RoaXMuc2VsZktleV07XHJcblxyXG4gICAgICAgICAgICAvLyB2YWx1ZSBpcyBhIHByb3h5IHJldHVybiBieSB0aGlzIGhhbmRsZXJcclxuICAgICAgICAgICAgaWYgKHNlbGYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzZWxmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSB8fCAoaXNBcnJheSh0YXJnZXQpICYmIGtleSA9PT0gJ2xlbmd0aCcpKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcHJvcENoYW5naW5nTXNnLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHZhbGlkYXRpb25cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcHJvcENoYW5nZWRNc2cuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgR2V0UHJvcGVydHlIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BNYXBzLCBkZWVwUHJveHkpIHtcclxuICAgICAgICB0aGlzLnByb3BNYXBzID0gcHJvcE1hcHM7XHJcbiAgICAgICAgdGhpcy5kZWVwUHJveHkgPSBkZWVwUHJveHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHRhcmdldCwga2V5KSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGFyZ2V0W2tleV07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRlZXBQcm94eSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBuZXcgUHJveHkodmFsdWUsIG5ldyBHZXRQcm9wZXJ0eUhhbmRsZXIodGhpcy5wcm9wTWFwcywgdGhpcy5kZWVwUHJveHkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBleGlzdGVkID0gdGhpcy5wcm9wTWFwcy5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLm9iaiA9PT0gdGFyZ2V0ICYmIGl0ZW0ucHJvcCA9PT0ga2V5O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIWV4aXN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wTWFwcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG9iajogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgcHJvcDoga2V5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBTZXRQcm9wZXJ0eUhhbmRsZXIsIEdldFByb3BlcnR5SGFuZGxlciwgcHJvcENoYW5naW5nTXNnLCBwcm9wQ2hhbmdlZE1zZyB9IiwiaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZWxlLXV0aWxzJztcclxuXHJcbmZ1bmN0aW9uIGlzTWVzc2VuZ2VyKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1lc3NlbmdlcjtcclxufVxyXG5cclxuZXhwb3J0IHsgaXNNZXNzZW5nZXJ9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xyXG5cclxuY2xhc3MgTWVzc2VuZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBvbihmbikge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChmbik7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKGZuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhbmRsZXJzW2ldID09PSBmbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZShhcmdzLCBzY29wZSkge1xyXG4gICAgICAgIHZhciByZXR1cm5WYWx1ZTtcclxuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IHRoaXM7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuaGFuZGxlcnNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHRoaXMuaGFuZGxlcnNbaV0uY2FsbChzY29wZSwgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNZXNzZW5nZXJCdXMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzZW5nZXJzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMubWVzc2VuZ2Vyc1tlXSkge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NlbmdlcnNbZV0gPSBuZXcgTWVzc2VuZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NlbmdlcnNbZV07XHJcbiAgICB9XHJcblxyXG4gICAgb24oZSwgZm4pIHtcclxuICAgICAgICB0aGlzLmdldChlKS5vbihmbik7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKGUsIGZuKSB7XHJcbiAgICAgICAgdGhpcy5nZXQoZSkub2ZmKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJlKGUsIGFyZ3MsIHNjb3BlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGUpLmZpcmUoYXJncywgc2NvcGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBNZXNzZW5nZXIsIE1lc3NlbmdlckJ1cyB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBwcm9wQ2hhbmdpbmdNc2csIHByb3BDaGFuZ2VkTXNnIH0gZnJvbSAnLi9oYW5kbGVyJztcclxuXHJcbmNsYXNzIFByb3BlcnR5Q2hhbmdlU3ViamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnBsYWluTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMucmVnZXhNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb24ocHJvcCwgYWN0aW9uLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIG1hcCA9IHV0aWxzLmlzUmVnRXhwKHByb3ApID8gdGhpcy5yZWdleE1hcCA6IHRoaXMucGxhaW5NYXA7XHJcblxyXG4gICAgICAgIGlmICghbWFwLmhhcyhwcm9wKSkge1xyXG4gICAgICAgICAgICBtYXAuc2V0KHByb3AsIFtdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbi5iZWZvcmVDaGFuZ2VkID0gb3B0aW9ucy5iZWZvcmVDaGFuZ2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFwLmdldChwcm9wKS5wdXNoKGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKHByb3AsIGFjdGlvbikge1xyXG4gICAgICAgIHZhciBtYXAgPSB1dGlscy5pc1JlZ0V4cChwcm9wKSA/IHRoaXMucmVnZXhNYXAgOiB0aGlzLnBsYWluTWFwO1xyXG5cclxuICAgICAgICBpZiAoIW1hcC5oYXMocHJvcCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBtYXAuZ2V0KHByb3ApO1xyXG4gICAgICAgIHZhciBpbmRleCA9IGFjdGlvbnMuaW5kZXhPZihhY3Rpb24pO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZUNoYW5nZWQocHJvcCwgYXJncykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxhaW5NYXAuaGFzKHByb3ApKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhaW5NYXAuZ2V0KHByb3ApLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYsIHByb3AsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVnZXhNYXAuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9ucywgcGF0dGVybikge1xyXG4gICAgICAgICAgICBpZiAocGF0dGVybi50ZXN0KHByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmJlZm9yZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJlQ2hhbmdpbmcocHJvcCwgYXJncykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxhaW5NYXAuaGFzKHByb3ApKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhaW5NYXAuZ2V0KHByb3ApLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5iZWZvcmVDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWdleE1hcC5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb25zLCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuLnRlc3QocHJvcCkpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5iZWZvcmVDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYsIHByb3AsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnBsYWluTWFwLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5yZWdleE1hcC5jbGVhcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBPYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICAgICBvbmNoYW5naW5nID0gZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmdzLnRhcmdldCwgcHJvcCA9IGFyZ3Mua2V5O1xyXG4gICAgICAgICAgICAgICAgc2VsZi5maXJlQ2hhbmdpbmcob2JqLCBwcm9wLCBhcmdzLmRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbmNoYW5nZWQgPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3MudGFyZ2V0LCBwcm9wID0gYXJncy5rZXk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmZpcmVDaGFuZ2VkKG9iaiwgcHJvcCwgYXJncy5kYXRhKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHJvcENoYW5naW5nTXNnLm9uKG9uY2hhbmdpbmcpO1xyXG4gICAgICAgIHByb3BDaGFuZ2VkTXNnLm9uKG9uY2hhbmdlZCk7XHJcblxyXG4gICAgICAgIHRoaXMub2ZmQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwcm9wQ2hhbmdpbmdNc2cub2ZmKG9uY2hhbmdpbmcpO1xyXG4gICAgICAgICAgICBwcm9wQ2hhbmdlZE1zZy5vZmYob25jaGFuZ2VkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub2JqTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKG9iaiwgcHJvcCwgYWN0aW9uLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9iak1hcC5oYXMob2JqKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9iak1hcC5zZXQob2JqLCBuZXcgUHJvcGVydHlDaGFuZ2VTdWJqZWN0KCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vYmpNYXAuZ2V0KG9iaikub24ocHJvcCwgYWN0aW9uLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYob2JqLCBwcm9wLCBhY3Rpb24pIHtcclxuICAgICAgICBpZiAodGhpcy5vYmpNYXAuaGFzKG9iaikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmpNYXAuZ2V0KG9iaikub2ZmKHByb3AsIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpcmVDaGFuZ2VkKG9iaiwgcHJvcCwgYXJncykge1xyXG4gICAgICAgIGlmICh0aGlzLm9iak1hcC5oYXMob2JqKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9iak1hcC5nZXQob2JqKS5maXJlQ2hhbmdlZChwcm9wLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZUNoYW5naW5nKG9iaiwgcHJvcCwgYXJncykge1xyXG4gICAgICAgIGlmICh0aGlzLm9iak1hcC5oYXMob2JqKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9iak1hcC5nZXQob2JqKS5maXJlQ2hhbmdpbmcocHJvcCwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vZmZDaGFuZ2UuY2FsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9iak1hcC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub2JqTWFwID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUHJvcGVydHlDaGFuZ2VTdWJqZWN0LCBPYmplY3RQcm9wZXJ0eUNoYW5nZVN1YmplY3QgfTsiLCJ2YXIgZGVidWdNb2RlID0gdHJ1ZSxcclxuICAgIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcclxuICAgIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xyXG5cclxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGFjdGlvbiwgaWdub3JlT3duKSB7XHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbihpbmRleCwgb2JqW2luZGV4XSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAoaWdub3JlT3duIHx8IG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbihwLCBvYmpbcF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWN0aW9uKG9iaiwgb2JqKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc29tZShvYmosIGFjdGlvbikge1xyXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24oaW5kZXgsIG9ialtpbmRleF0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKHAsIG9ialtwXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBhY3Rpb24ob2JqLCBvYmopO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5KCkge1xyXG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgb2JqSW5kZXggPSAwLCBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdLCBmaWx0ZXI7XHJcblxyXG4gICAgaWYgKGlzQm9vbGVhbihvYmopKSB7XHJcbiAgICAgICAgZGVlcCA9IG9iajtcclxuICAgICAgICBvYmpJbmRleCsrO1xyXG4gICAgICAgIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiBvYmpJbmRleCArIDEpIHtcclxuICAgICAgICBmaWx0ZXIgPSBhcmd1bWVudHNbb2JqSW5kZXggKyAxXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgdmFyIG5ld0FyciA9IFtdO1xyXG4gICAgICAgIG9iai5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwgaW5kZXgsIGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChkZWVwID8gY29weShpdGVtKSA6IGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIHZhciBuZXdPYmogPSBvYmplY3Qob2JqKTtcclxuICAgICAgICBmb3JFYWNoKG9iaiwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGtleSwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdPYmpba2V5XSA9IGRlZXAgPyBjb3B5KHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld09iajtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHRlbmQoKSB7XHJcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IGFyZ3VtZW50c1tpbmRleF07XHJcblxyXG4gICAgaWYgKGlzQm9vbGVhbih0YXJnZXQpKSB7XHJcbiAgICAgICAgZGVlcCA9IHRhcmdldDtcclxuICAgICAgICB0YXJnZXQgPSBhcmd1bWVudHNbKytpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlZXApIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWVyZ2UoKSB7XHJcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IHt9O1xyXG5cclxuICAgIGlmIChpc0Jvb2xlYW4oYXJndW1lbnRzW2luZGV4XSkpIHtcclxuICAgICAgICBkZWVwID0gYXJndW1lbnRzW2luZGV4XTtcclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZWVwKSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYWluTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAodGFyZ2V0W2tleV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvYmplY3Qobykge1xyXG4gICAgZnVuY3Rpb24gRigpIHtcclxuICAgIH1cclxuXHJcbiAgICBGLnByb3RvdHlwZSA9IG87XHJcbiAgICByZXR1cm4gbmV3IEYoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpIHtcclxuICAgIHZhciBwcm90b3R5cGUgPSBvYmplY3Qoc3VwZXJUeXBlLnByb3RvdHlwZSk7XHJcbiAgICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJUeXBlO1xyXG4gICAgc3ViVHlwZS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaGVyaXQoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XHJcbiAgICBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSk7XHJcbiAgICBzdWJUeXBlLnN1cGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN1cGVyVHlwZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xyXG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9Mb3dlckNhc2UoKSA6IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gdXBwZXJjYXNlKHN0cmluZykge1xyXG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9VcHBlckNhc2UoKSA6IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc01hcChvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNYXA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNCbGFua09iamVjdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIWdldFByb3RvdHlwZU9mKHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVnRXhwKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTYW1lKG9iajEsIG9iajIpIHtcclxuICAgIHZhciBzYW1lID0gKG9iajEgPT09IG9iajIpO1xyXG5cclxuICAgIGlmICghc2FtZSkge1xyXG4gICAgICAgIGlmIChpc0FycmF5KG9iajEpICYmIGlzQXJyYXkob2JqMikpIHtcclxuICAgICAgICAgICAgaWYgKG9iajEubGVuZ3RoID09PSBvYmoyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc2FtZSA9ICFzb21lKG9iajEsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqMSkgJiYgaXNPYmplY3Qob2JqMikgJiYgZ2V0UHJvdG90eXBlT2Yob2JqMSkgPT09IGdldFByb3RvdHlwZU9mKG9iajIpKSB7XHJcbiAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICFpc1NhbWUodmFsdWUsIG9iajJba2V5XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2FtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVidWcobG9nKSB7XHJcbiAgICBpZiAoZGVidWdNb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobG9nKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFpbnMoYXJyLCBvYmopIHtcclxuICAgIHJldHVybiBhcnIuc29tZShmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtID09PSBvYmo7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFpbnNTdHIoYXJyLCBzdHIsIGlnbm9yZUNhc2UpIHtcclxuICAgIHJldHVybiBhcnIuc29tZShmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtID09PSBzdHIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGl0ZW0pID09PSBsb3dlcmNhc2Uoc3RyKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcclxuICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XHJcblxyXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcclxuICAgICAgICBoYXNQcm9wID0gZmFsc2U7XHJcbiAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uIChrZXkzLCB2YWx1ZTMpIHtcclxuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XHJcbiAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhhc1Byb3A7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwga2V5LCBpZ25vcmVDYXNlKSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XHJcblxyXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcclxuICAgICAgICBoYXNQcm9wID0gZmFsc2U7XHJcbiAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uIChrZXkzLCB2YWx1ZTMpIHtcclxuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XHJcbiAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhhc1Byb3AgPyB0YXJnZXQgOiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUsIGlnbm9yZUNhc2UpIHtcclxuICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XHJcblxyXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleTJdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBoYXNQcm9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAoa2V5MywgdmFsdWUzKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XHJcbiAgICAgICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWhhc1Byb3ApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJzogQ2FuIG5vdCBzZXQgcHJvcGVydHkgb2YgdW5kZWZpbmVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbmNhdCgpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZm9yRWFjaCxcclxuICAgIHNvbWUsXHJcbiAgICBjb3B5LFxyXG4gICAgZXh0ZW5kLFxyXG4gICAgbWVyZ2UsXHJcbiAgICBvYmplY3QsXHJcbiAgICBpbmhlcml0LFxyXG4gICAgbG93ZXJjYXNlLFxyXG4gICAgdXBwZXJjYXNlLFxyXG4gICAgaXNVbmRlZmluZWQsXHJcbiAgICBpc0RlZmluZWQsXHJcbiAgICBpc09iamVjdCxcclxuICAgIGlzQmxhbmtPYmplY3QsXHJcbiAgICBpc051bWJlcixcclxuICAgIGlzRGF0ZSxcclxuICAgIGlzRnVuY3Rpb24sXHJcbiAgICBpc1JlZ0V4cCxcclxuICAgIGlzQm9vbGVhbixcclxuICAgIGlzQXJyYXksXHJcbiAgICBpc1N0cmluZyxcclxuICAgIGlzU2FtZSxcclxuICAgIGRlYnVnLFxyXG4gICAgY29udGFpbnMsXHJcbiAgICBjb250YWluc1N0cixcclxuICAgIGhhc1Byb3BlcnR5LFxyXG4gICAgZ2V0UHJvcGVydHksXHJcbiAgICBzZXRQcm9wZXJ0eSxcclxuICAgIGNvbmNhdFxyXG59OyIsImltcG9ydCB7IGlzTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBlbGVVdGlscyBmcm9tICcuLi91dGlsaXR5L2VsZS11dGlscyc7XHJcbmltcG9ydCB7IFNldFByb3BlcnR5SGFuZGxlciB9IGZyb20gJy4uL3V0aWxpdHkvaGFuZGxlcic7XHJcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5Q2hhbmdlU3ViamVjdCB9IGZyb20gJy4uL3V0aWxpdHkvc3ViamVjdCc7XHJcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XHJcbmltcG9ydCB7IGNvbXBpbGUsIGNvbXB1dGUgfSBmcm9tICcuLi9wYXJzZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgICBnZXQgcHJveHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh0aGlzLCBuZXcgU2V0UHJvcGVydHlIYW5kbGVyKHRydWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXRhKSB7XHJcbiAgICAgICAgQ29tcG9uZW50LmNvbnN0cnVjdC5jYWxsKHRoaXMsIG1ldGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb25zdHJ1Y3QobWV0YSkge1xyXG4gICAgICAgIHRoaXMuJCR2bm9kZXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJCRvd25lclZOb2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLiQkcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy4kJGNoaWxkRGlyZWN0aXZlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuJCRkZXRlY3RUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLiQkcHJvcENoYW5nZWQgPSBuZXcgT2JqZWN0UHJvcGVydHlDaGFuZ2VTdWJqZWN0KCk7XHJcblxyXG4gICAgICAgIGlmIChtZXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kc2V0TWV0YShtZXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgICRob29rcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBiZWZvcmVBdHRyQ2hhbmdlOiAnJyxcclxuICAgICAgICAgICAgYWZ0ZXJBdHRyQ2hhbmdlOiAnJyxcclxuICAgICAgICAgICAgb25Jbml0OiAnJyxcclxuICAgICAgICAgICAgYWZ0ZXJWaWV3TW91bnQ6ICcnLFxyXG4gICAgICAgICAgICBvbkRlc3Ryb3k6ICcnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0TWV0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGEgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgJHNldE1ldGEodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiQkbWV0YSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgICRiaW5kVk5vZGUodm5vZGUpIHtcclxuICAgICAgICB0aGlzLiQkb3duZXJWTm9kZSA9IHZub2RlO1xyXG4gICAgfVxyXG5cclxuICAgICRoYXNBdHRyKHByb3ApIHtcclxuICAgICAgICByZXR1cm4gdXRpbHMuaGFzUHJvcGVydHkodGhpcywgcHJvcCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgJGluaXRBdHRyKHByb3AsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywgcHJvcCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuYmVmb3JlQXR0ckNoYW5nZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5iZWZvcmVBdHRyQ2hhbmdlLmNhbGwodGhpcywgcHJvcCwgdmFsdWUsIG9sZFZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMsIHByb3AsIHZhbHVlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5hZnRlckF0dHJDaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJBdHRyQ2hhbmdlLmNhbGwodGhpcywgcHJvcCwgdmFsdWUsIG9sZFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGluaXRBdHRyRG9uZSgpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uSW5pdCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkluaXQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJHNldEF0dHIocHJvcCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBwcm9wLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5iZWZvcmVBdHRyQ2hhbmdlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJlZm9yZUF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5wcm94eSwgcHJvcCwgdmFsdWUsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmFmdGVyQXR0ckNoYW5nZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZnRlckF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkbGlzdGVuKGUsIGZuKSB7XHJcbiAgICAgICAgdmFyIG1lc3NlbmdlciA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMsIGUsIHRydWUpO1xyXG4gICAgICAgIGlmIChpc01lc3NlbmdlcihtZXNzZW5nZXIpKSB7XHJcbiAgICAgICAgICAgIG1lc3Nlbmdlci5vbihmbik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUgKyAnIGlzIG5vdCBhIGV2ZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgJGdldFRlbXBsYXRlKHN5bmMpIHtcclxuICAgICAgICB2YXIgbWV0YSA9IHRoaXMuJGdldE1ldGEoKTtcclxuXHJcbiAgICAgICAgaWYgKHN5bmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1ldGEudGVtcGxhdGUgfHwgJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKG1ldGEudGVtcGxhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG1ldGEudGVtcGxhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzU3RyaW5nKG1ldGEudGVtcGxhdGVVcmwpKSB7XHJcbiAgICAgICAgICAgICAgICBpbmplY3Rvci5zZXJ2aWNlKCckdGVtcGxhdGVDYWNoZScpLmdldFRwbEJ5VXJsKG1ldGEudGVtcGxhdGVVcmwpLnRoZW4oZnVuY3Rpb24gKHRwbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHBsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkdXNpbmcobmFtZSkge1xyXG4gICAgICAgIHZhciBtZXRhID0gdGhpcy4kZ2V0TWV0YSgpLFxyXG4gICAgICAgICAgICB1c2luZyA9IG1ldGEudXNpbmcsXHJcbiAgICAgICAgICAgIHNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLicpLFxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBzZWdtZW50cy5wb3AoKSxcclxuICAgICAgICAgICAgc3BhY2VOYW1lID0gc2VnbWVudHMuam9pbignLicpO1xyXG5cclxuICAgICAgICBpZiAoc3BhY2VOYW1lICYmIHV0aWxzLmlzT2JqZWN0KHVzaW5nKSkge1xyXG4gICAgICAgICAgICB1dGlscy5zb21lKHVzaW5nLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gc3BhY2VOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IHZhbHVlICsgJy4nICsgY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgICRtYWtlQ29tcGlsZU9wdGlvbnMoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGdldEVtYmVkVHBsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kJG93bmVyVk5vZGUuZ2V0SW5uZXJUcGwoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGFpbnNDb21wb25lbnQ6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY29udGFpbnNDb21wb25lbnQoc2VsZi4kdXNpbmcobmFtZSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGVDb21wb25lbnQ6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KHNlbGYuJHVzaW5nKG5hbWUpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGFpbnNEaXJlY3RpdmU6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY29udGFpbnNEaXJlY3RpdmUoc2VsZi4kdXNpbmcobmFtZSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGVEaXJlY3RpdmU6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlRGlyZWN0aXZlKHNlbGYuJHVzaW5nKG5hbWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgJGhhc1ZOb2RlcygpIHtcclxuICAgICAgICByZXR1cm4gdXRpbHMuaXNBcnJheSh0aGlzLiQkdm5vZGVzKTtcclxuICAgIH1cclxuXHJcbiAgICAkZnJvbVZOb2RlcygpIHtcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMuJCR2bm9kZXMuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodm5vZGUuZ2V0RG9tRWxlbWVudCgpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfVxyXG5cclxuICAgICRjbGVhclZOb2RlcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuJGhhc1ZOb2RlcygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kJHZub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICB2bm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kJHZub2RlcyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgJHJlbmRlcihzeW5jKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBmcmFnbWVudCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChzeW5jKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRoYXNWTm9kZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnQgPSB0aGlzLiRmcm9tVk5vZGVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGNvbXBpbGUodGhpcy4kZ2V0VGVtcGxhdGUoc3luYyksIHRoaXMuJG1ha2VDb21waWxlT3B0aW9ucygpKSh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLiRoYXNWTm9kZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzZWxmLiRmcm9tVk5vZGVzKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi4kZ2V0VGVtcGxhdGUoKS50aGVuKGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgPSBjb21waWxlKGh0bWwsIHNlbGYuJG1ha2VDb21waWxlT3B0aW9ucygpKShzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZyYWdtZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHJlZnJlc2goc3luYykge1xyXG4gICAgICAgIHRoaXMuJGNsZWFyVk5vZGVzKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJlbmRlcihzeW5jKTtcclxuICAgIH1cclxuXHJcbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQsIHN5bmMpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzZWxlY3Rvck9yRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlVXRpbHMuY2xlYXJDaGlsZE5vZGVzKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAoc3luYykge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJHJlbmRlcihzeW5jKSk7XHJcbiAgICAgICAgICAgIHNlbGYuJGFmdGVyVmlld01vdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiRyZW5kZXIoc3luYykudGhlbihmdW5jdGlvbiAoZWxlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiRhZnRlclZpZXdNb3VudCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGFmdGVyVmlld01vdW50KCkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuYWZ0ZXJWaWV3TW91bnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJWaWV3TW91bnQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJHVubW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuJCRvd25lclZOb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kJG93bmVyVk5vZGUuJHJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLiQkb3duZXJWTm9kZS5yZW1vdmVEb21FbGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuJGhhc1ZOb2RlcygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCR2bm9kZXMuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHZub2RlLnJlbW92ZURvbUVsZW1lbnQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy4kJHBhcmVudENvbXBvbmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQuJHJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLiQkcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGRldGVjdCgpIHtcclxuICAgICAgICBpZiAodGhpcy4kJGRldGVjdFRpbWVvdXQgfHwgIXRoaXMuJCR2bm9kZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYuJCRkZXRlY3RUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuJCRkZXRlY3RUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgc2VsZi4kJHZub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdm5vZGUuZGV0ZWN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICR2YWxpZGF0ZSgpIHtcclxuICAgICAgICB2YXIgb2JqLCBwcm9wLCBhY3Rpb24sIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBvYmogPSB0aGlzO1xyXG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgb2JqID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzFdO1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3VtZW50cyBlcnJvcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kJHByb3BDaGFuZ2VkLm9uKG9iaiwgcHJvcCwgYWN0aW9uLCB7XHJcbiAgICAgICAgICAgIGJlZm9yZUNoYW5nZWQ6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi4kJHByb3BDaGFuZ2VkLm9mZihvYmosIHByb3AsIGFjdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAkd2F0Y2goKSB7XHJcbiAgICAgICAgdmFyIG9iaiwgcHJvcCwgYWN0aW9uLCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgb2JqID0gdGhpcztcclxuICAgICAgICAgICAgcHJvcCA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgICAgICAgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgICAgICAgcHJvcCA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICAgICAgYWN0aW9uID0gYXJndW1lbnRzWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmd1bWVudHMgZXJyb3InKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJCRwcm9wQ2hhbmdlZC5vbihvYmosIHByb3AsIGFjdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuJCRwcm9wQ2hhbmdlZC5vZmYob2JqLCBwcm9wLCBhY3Rpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgJHJlbW92ZUNoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kJGNoaWxkQ29tcG9uZW50cy5pbmRleE9mKGNoaWxkKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIGNoaWxkLiQkcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGRpc3Bvc2UoaXNGcm9tVk5vZGUpIHtcclxuICAgICAgICAvLyByZW1vdmUgdmlydHVhbCBub2RlIGZpcnN0IGluIGNhc2UgaXQgdHJpZ2dlcnMgcGFyZW50IGNvbXBvbmVudCBkZXN0cm95XHJcbiAgICAgICAgdGhpcy4kdW5tb3VudCgpO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGVzdHJveSkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiQkZGV0ZWN0VGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy4kJGRldGVjdFRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kY2xlYXJWTm9kZXMoKTtcclxuICAgICAgICB0aGlzLiQkcHJvcENoYW5nZWQuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICBpZiAoaXNGcm9tVk5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy4kJG93bmVyVk5vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kJGNoaWxkRGlyZWN0aXZlcyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgJGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy4kZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICAvLyBkZXN0cm95IHZpcnR1YWwgbm9kZSBpbiB0aGUgZW5kIGJlY2F1c2UgaXQgbWF5IGJpbmRzIGxvZ2ljIGFib3V0IGRlc3Ryb3lcclxuICAgICAgICBpZiAodGhpcy4kJG93bmVyVk5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiQkb3duZXJWTm9kZS5kaXNwb3NlKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLiQkb3duZXJWTm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRnZXRQYXJlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRwYXJlbnRDb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJGNyZWF0ZUNvbXBvbmVudChjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHZhciBjb21wb25lbnQgPSBpbmplY3Rvci5jcmVhdGVDb21wb25lbnQoY29uc3RydWN0b3IpO1xyXG4gICAgICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gICAgICAgIGNvbXBvbmVudC4kJHBhcmVudENvbXBvbmVudCA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICAkZXZhbChleHApIHtcclxuICAgICAgICByZXR1cm4gY29tcHV0ZShleHAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgICRpbmhlcml0KHBhcmVudENtcCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHNlbGYsIHV0aWxzLm9iamVjdChwYXJlbnRDbXApKTtcclxuXHJcbiAgICAgICAgLy8gdG9kbyAtIHJlc29sdmUgaXNzdWUgY2FsbGluZyBwYXJlbnQgY29tcG9uZW50J3MgbGlmZWN5Y2xlIGhvb2tzXHJcbiAgICAgICAgdXRpbHMuZm9yRWFjaChzZWxmLiRob29rcygpLCBmdW5jdGlvbiAoaG9vaykge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5oYXNPd25Qcm9wZXJ0eShob29rKSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmW2hvb2tdID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQge2luamVjdG9yfSBmcm9tICcuL2luamVjdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgRGlyZWN0aXZlLmNvbnN0cnVjdC5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb25zdHJ1Y3QoKSB7XHJcbiAgICAgICAgdGhpcy4kJGJpbmRpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJCR2bm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSBmYWxzZTtcclxuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAkaG9va3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb25Jbml0OiAnJyxcclxuICAgICAgICAgICAgb25Db21waWxlOiAnJyxcclxuICAgICAgICAgICAgb25JbnNlcnQ6ICcnLFxyXG4gICAgICAgICAgICBvbkRldGVjdDogJycsXHJcbiAgICAgICAgICAgIG9uVXBkYXRlOiAnJyxcclxuICAgICAgICAgICAgb25EZXN0cm95OiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgJGdldE1ldGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgICRzZXRNZXRhKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy4kJG1ldGEgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAkYmluZFZOb2RlKHZub2RlKSB7XHJcbiAgICAgICAgdGhpcy4kJHZub2RlID0gdm5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgJHNldEJpbmRpbmcoYmluZGluZykge1xyXG4gICAgICAgIHRoaXMuJCRiaW5kaW5nID0gYmluZGluZztcclxuICAgIH1cclxuXHJcbiAgICAkY29tcGlsZShvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkNvbXBpbGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21waWxlLmNhbGwodGhpcywgdGhpcy4kJHZub2RlLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGluc2VydChlbGUsIGNvbSkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25JbnNlcnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25JbnNlcnQuY2FsbCh0aGlzLCBlbGUsIHRoaXMuJCRiaW5kaW5nLCBjb20pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkZGV0ZWN0KGVsZSwgY29tKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRldGVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25EZXRlY3QuY2FsbCh0aGlzLCBlbGUsIHRoaXMuJCRiaW5kaW5nLCBjb20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJCRiaW5kaW5nLmRldGVjdCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHVwZGF0ZShlbGUsIGNvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICR1cGRhdGUoZWxlLCBjb20pIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uVXBkYXRlKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlLmNhbGwodGhpcywgZWxlLCB0aGlzLiQkYmluZGluZywgY29tKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGRpc3Bvc2UoaXNGcm9tVk5vZGUpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGVzdHJveSkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0Zyb21WTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLiQkdm5vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kJGJpbmRpbmcgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgICRkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuJGRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJCR2bm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCR2bm9kZS5kaXNwb3NlKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLiQkdm5vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQge2luamVjdG9yfSBmcm9tICcuL2luamVjdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBGaWx0ZXIuY29uc3RydWN0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcclxuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAkaG9va3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb25Jbml0OiAnJyxcclxuICAgICAgICAgICAgb25EZXN0cm95OiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgJGdldE1ldGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgICRzZXRNZXRhKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy4kJG1ldGEgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAkZXhlY3V0ZSgpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRXhlY3V0ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25FeGVjdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRkZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5L21lc3NhZ2UnO1xyXG5pbXBvcnQgeyB0eXBlQ29uc3QsIGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlyZWN0aXZlIH1mcm9tICcuL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVyJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4vc2VydmljZSc7XHJcblxyXG5mdW5jdGlvbiBuYW1lc3BhY2UobnMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29tcG9uZW50OiBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XHJcbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudChuYW1lLCBkZWYpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlyZWN0aXZlOiBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRlZikpIHtcclxuICAgICAgICAgICAgICAgIGRlZiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5zZXJ0OiBkZWYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlOiBkZWZcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcclxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZShuYW1lLCBkZWYpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VydmljZTogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xyXG4gICAgICAgICAgICBkZWYubmFtZXNwYWNlID0gbnM7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlKG5hbWUsIGRlZik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xyXG4gICAgICAgICAgICAgICAgZGVmID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25FeGVjdXRlOiBkZWZcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihuYW1lLCBkZWYpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudChuYW1lLCBkZWYpIHtcclxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xyXG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LmNvbXBvbmVudCxcclxuICAgICAgICBzdXBlckNsYXNzOiBtYWtlQ29uc3RydWN0b3IoQ29tcG9uZW50KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpcmVjdGl2ZShuYW1lLCBkZWYpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRlZikpIHtcclxuICAgICAgICBkZWYgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgIG9uSW5zZXJ0OiBkZWYsXHJcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogZGVmXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xyXG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LmRpcmVjdGl2ZSxcclxuICAgICAgICBzdXBlckNsYXNzOiBtYWtlQ29uc3RydWN0b3IoRGlyZWN0aXZlKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlcihuYW1lLCBkZWYpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRlZikpIHtcclxuICAgICAgICBkZWYgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgIG9uRXhlY3V0ZTogZGVmXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xyXG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LmZpbHRlcixcclxuICAgICAgICBzdXBlckNsYXNzOiBtYWtlQ29uc3RydWN0b3IoRmlsdGVyKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlcnZpY2UobmFtZSwgZGVmKSB7XHJcbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcclxuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5zZXJ2aWNlLFxyXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihTZXJ2aWNlKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ29tcG9uZW50KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIENvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEaXJlY3RpdmUob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRGlyZWN0aXZlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0ZpbHRlcihvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBGaWx0ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU2VydmljZShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBTZXJ2aWNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBib290c3RyYXAoc2VsZWN0b3JPckVsZW1lbnQpIHtcclxuICAgIHZhciBlbGVtZW50LCB0cGw7XHJcblxyXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xyXG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yT3JFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQgPSBzZWxlY3Rvck9yRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICB0cGwgPSBlbGVtZW50LmlubmVySFRNTDtcclxuXHJcbiAgICBuZXcgQ29tcG9uZW50KHtcclxuICAgICAgICB0ZW1wbGF0ZTogdHBsXHJcbiAgICB9KS4kbW91bnQoZWxlbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VDb25zdHJ1Y3RvcihjbHMpIHtcclxuICAgIGZ1bmN0aW9uIGYoKSB7XHJcbiAgICAgICAgY2xzLmNvbnN0cnVjdC5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGYucHJvdG90eXBlID0gY2xzLnByb3RvdHlwZTtcclxuICAgIHJldHVybiBmO1xyXG59XHJcblxyXG5leHBvcnQgeyBuYW1lc3BhY2UsIGluamVjdG9yLCBjb21wb25lbnQsIGRpcmVjdGl2ZSwgZmlsdGVyLCBzZXJ2aWNlLCBpc0NvbXBvbmVudCwgaXNEaXJlY3RpdmUsIGlzRmlsdGVyLCBpc1NlcnZpY2UsIGJvb3RzdHJhcCB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5L21lc3NhZ2UnO1xyXG5cclxudmFyIHR5cGVDb25zdCA9IHtcclxuICAgIGZpbHRlcjogJ2ZpbHRlcicsXHJcbiAgICBzZXJ2aWNlOiAnc2VydmljZScsXHJcbiAgICBjb21wb25lbnQ6ICdjb21wb25lbnQnLFxyXG4gICAgZGlyZWN0aXZlOiAnZGlyZWN0aXZlJ1xyXG59O1xyXG5cclxudmFyIG5hbWVQYXR0ZXJuID0gL15bYS16X1xcJF1bXFx3XFwkLV0qL2k7XHJcblxyXG5jbGFzcyBJbmplY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHt9O1xyXG4gICAgICAgIHRoaXMud2FpdGluZ1RvRXh0ZW5kcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaW5zQ29udGFpbmVyID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29udGFpbmVyW2NvbnRyYWN0VHlwZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YW5jZXMoY29udHJhY3RUeXBlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc0NvbnRhaW5lcltjb250cmFjdFR5cGVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV07XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IpIHtcclxuICAgICAgICBpZiAoc2VsZWN0b3IuaW5kZXhPZignLicpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgY2hhcmFjdGVyIFwiLlwiJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xyXG5cclxuICAgICAgICBpZiAobWFwcGluZ1tzZWxlY3Rvcl0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBtYXBwaW5nW3NlbGVjdG9yXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBtYXBwaW5nW3NlbGVjdG9yXS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlID09PSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhLm5hbWVzcGFjZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc2VsZWN0b3IgKyAnIGlzIGV4aXN0IHVuZGVyIG5hbWVzcGFjZSAnICsgbWF0Y2hlc1swXS5wcm90b3R5cGUuJCRtZXRhLm5hbWVzcGFjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcHBpbmdbc2VsZWN0b3JdLnB1c2goY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQ29tcG9uZW50KHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIodHlwZUNvbnN0LmNvbXBvbmVudCwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckRpcmVjdGl2ZShzZWxlY3RvciwgY29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHR5cGVDb25zdC5kaXJlY3RpdmUsIHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbnMoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgaWdub3JlQ2FzZSkge1xyXG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIG1hcHBpbmcgPSB0aGlzLmdldE1hcHBpbmcoY29udHJhY3RUeXBlKTtcclxuICAgICAgICB2YXIgc2VnbWVudHMgPSBzZWxlY3Rvci5zcGxpdCgnLicpO1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWdtZW50cy5wb3AoKTtcclxuICAgICAgICAgICAgbmFtZXNwYWNlID0gc2VnbWVudHMuam9pbignLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlnbm9yZUNhc2UpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkobWFwcGluZywgc2VsZWN0b3IsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gbWFwcGluZ1tzZWxlY3Rvcl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0YSA9IGl0ZW0ucHJvdG90eXBlLiQkbWV0YTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UobWV0YS5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluc0NvbXBvbmVudChzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5zKHR5cGVDb25zdC5jb21wb25lbnQsIHNlbGVjdG9yLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluc0RpcmVjdGl2ZShzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5zKHR5cGVDb25zdC5kaXJlY3RpdmUsIHNlbGVjdG9yLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgaWdub3JlQ2FzZSkge1xyXG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIG1hcHBpbmcgPSB0aGlzLmdldE1hcHBpbmcoY29udHJhY3RUeXBlKTtcclxuICAgICAgICB2YXIgc2VnbWVudHMgPSBzZWxlY3Rvci5zcGxpdCgnLicpO1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWdtZW50cy5wb3AoKTtcclxuICAgICAgICAgICAgbmFtZXNwYWNlID0gc2VnbWVudHMuam9pbignLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlnbm9yZUNhc2UpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkobWFwcGluZywgc2VsZWN0b3IsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gbWFwcGluZ1tzZWxlY3Rvcl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRyYWN0VHlwZSArICcgJyArIHNlbGVjdG9yICsgJyBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0YSA9IGl0ZW0ucHJvdG90eXBlLiQkbWV0YTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UobWV0YS5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNlbGVjdG9yICsgJyBpcyBub3QgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBuYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWVzcGFjZXMgPSBjb25zdHJ1Y3RvcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhLm5hbWVzcGFjZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbmFtZXNwYWNlICcgKyBuYW1lc3BhY2VzLmpvaW4oJ3wnKSArICcgYWxsIGhhdmUgJyArIHNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcnNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tcG9uZW50KHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5jb21wb25lbnQsIHNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3RpdmUoc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpbHRlcihzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0eXBlQ29uc3QuZmlsdGVyLCBzZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VydmljZShzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0eXBlQ29uc3Quc2VydmljZSwgc2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShjb250cmFjdFR5cGUsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5nZXQoY29udHJhY3RUeXBlLCBzZWxlY3RvciksIGluc3RhbmNlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGNvbnRyYWN0VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5jb21wb25lbnQ6XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlQ29tcG9uZW50KGNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5kaXJlY3RpdmU6XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlRGlyZWN0aXZlKGNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5maWx0ZXI6XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlRmlsdGVyKGNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5zZXJ2aWNlOlxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZVNlcnZpY2UoY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ29tcG9uZW50KGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNvbnN0cnVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZURpcmVjdGl2ZShjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldERpcmVjdGl2ZShjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVGaWx0ZXIoY29uc3RydWN0b3IpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRGaWx0ZXIoY29uc3RydWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2VydmljZShjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSwgc2VydmljZXMgPSB0aGlzLmdldEluc3RhbmNlcyh0eXBlQ29uc3Quc2VydmljZSk7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldFNlcnZpY2UoY29uc3RydWN0b3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhLm5vblNoYXJlZCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gc2VydmljZXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHJlc3VsdFswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICBzZXJ2aWNlcy5wdXNoKGluc3RhbmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXJ2aWNlKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2VydmljZShzZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2FpdGluZ1RvRXh0ZW5kcyhjb250cmFjdFR5cGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRXYWl0aW5nVG9FeHRlbmRzKGNvbnRyYWN0VHlwZSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrU2VsZWN0b3Ioc2VsZWN0b3IsIGNvbnRyYWN0VHlwZSkge1xyXG4gICAgICAgIGlmIChuYW1lUGF0dGVybi50ZXN0KHNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICB2YXIgY29uc3RydWN0b3JOYW1lID0gJyc7XHJcbiAgICAgICAgICAgIHZhciBzZWdtZW50cyA9IHNlbGVjdG9yLnNwbGl0KCctJyk7XHJcblxyXG4gICAgICAgICAgICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gdXRpbHMudXBwZXJjYXNlKHNlZ21lbnRbMF0pICsgc2VnbWVudC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChjb250cmFjdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmNvbXBvbmVudDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ0NvbXBvbmVudCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5kaXJlY3RpdmU6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdEaXJlY3RpdmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuZmlsdGVyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSAnRmlsdGVyJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LnNlcnZpY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdTZXJ2aWNlJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzZWxlY3RvciArICdpcyBub3QgYSB2YWxpZCBuYW1lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgPSB0aGlzLmNoZWNrU2VsZWN0b3Ioc2VsZWN0b3IsIG9wdGlvbnMuY29udHJhY3RUeXBlKSxcclxuICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kcyA9IHNlbGYuZ2V0V2FpdGluZ1RvRXh0ZW5kcyhvcHRpb25zLmNvbnRyYWN0VHlwZSksXHJcbiAgICAgICAgICAgIG9uQ29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uc3RydWN0b3Iuc3VwZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3Iuc3VwZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKG1ldGEuY29uc3RydWN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGEuY29uc3RydWN0LmNhbGwodGhpcywgTWVzc2VuZ2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgRnVuY3Rpb24oJ29uQ29uc3RydWN0JywgJ1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbiAnICsgY29uc3RydWN0b3JOYW1lICsgJygpe29uQ29uc3RydWN0LmNhbGwodGhpcyk7fTsnKShvbkNvbnN0cnVjdCk7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKG9wdGlvbnMuc3VwZXJDbGFzcykpIHtcclxuICAgICAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3Rvciwgb3B0aW9ucy5zdXBlckNsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1ldGEuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuXHJcbiAgICAgICAgLy8gYXBwbHkgcHJvcGVydGllcyBhbmQgbWV0aG9kc1xyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhtZXRhLmV4dGVuZHMpKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmplY3Rvci5jb250YWlucyhvcHRpb25zLmNvbnRyYWN0VHlwZSwgbWV0YS5leHRlbmRzKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN1cGVyT25lID0gaW5qZWN0b3IuZ2V0KG9wdGlvbnMuY29udHJhY3RUeXBlLCBtZXRhLmV4dGVuZHMpO1xyXG4gICAgICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yLCBzdXBlck9uZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyTmFtZTogbWV0YS5leHRlbmRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoc3VwZXJPbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yLCBzdXBlck9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlbWFpbkNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBleHRlbmRNZXRhKG1ldGEsIHN1cGVyT25lKSB7XHJcbiAgICAgICAgICAgIGlmIChzdXBlck9uZS5wcm90b3R5cGUuJCRtZXRhICYmIHN1cGVyT25lLnByb3RvdHlwZS4kJG1ldGEucHJvdGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Iob3B0aW9ucy5jb250cmFjdFR5cGUgKyAnOiAnICsgbWV0YS5leHRlbmRzICsgJyBpcyBwcm90ZWN0ZWQsIGl0IGlzIG5vdCBhbGxvd2VkIHRvIGV4dGVuZCEnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHN1cGVyTWV0YSA9IHN1cGVyT25lLnByb3RvdHlwZS4kJG1ldGE7XHJcbiAgICAgICAgICAgIHZhciBjb3B5ID0gdXRpbHMuY29weSh0cnVlLCBzdXBlck1ldGEsIGZ1bmN0aW9uIChvYmosIGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICEob2JqID09PSBzdXBlck1ldGEgJiYgKGtleSA9PT0gJ2NvbnN0cnVjdCcgfHwga2V5ID09PSAnbWV0aG9kcycpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0cnVlLCBjb3B5LCBtZXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlbWFpbkNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpIHtcclxuICAgICAgICAgICAgaWYgKHN1cGVyT25lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmluaGVyaXQoY29uc3RydWN0b3IsIHN1cGVyT25lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIG1ldGhvZHNcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG1ldGEubWV0aG9kcykpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmV4dGVuZChjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGEubWV0aG9kcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGYucmVnaXN0ZXJDb25zdHJ1Y3RvcihvcHRpb25zLmNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yLCBtZXRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIGFueSBjb21wb25lbnQgZXh0ZW5kcyBjdXJyZW50IGNvbXBvbmVudFxyXG4gICAgICAgICAgICB2YXIgd2FpdGluZ1RvRXh0ZW5kczIgPSBbXSwgZnVsbFNlbGVjdG9yID0gbWV0YS5uYW1lc3BhY2UgKyAnLicgKyBzZWxlY3RvcjtcclxuICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zdXBlck5hbWUgPT09IGZ1bGxTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2FsbGJhY2suY2FsbChudWxsLCBjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzMi5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsZi5zZXRXYWl0aW5nVG9FeHRlbmRzKG9wdGlvbnMuY29udHJhY3RUeXBlLCB3YWl0aW5nVG9FeHRlbmRzMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJDb25zdHJ1Y3Rvcihjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBjb25zdHJ1Y3RvciwgbWV0YSkge1xyXG4gICAgICAgIHZhciBzdXBlck1ldGEgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhO1xyXG5cclxuICAgICAgICBpZiAoc3VwZXJNZXRhICYmIHN1cGVyTWV0YS5wcm90ZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRyYWN0VHlwZSArICc6ICcgKyBtZXRhLmV4dGVuZHMgKyAnIGlzIHByb3RlY3RlZCwgaXQgaXMgbm90IGFsbG93ZWQgdG8gZXh0ZW5kIScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNvcHkgPSB1dGlscy5jb3B5KHRydWUsIHN1cGVyTWV0YSwgZnVuY3Rpb24gKG9iaiwga2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhKG9iaiA9PT0gc3VwZXJNZXRhICYmIChrZXkgPT09ICdjb25zdHJ1Y3QnIHx8IGtleSA9PT0gJ21ldGhvZHMnKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1ldGEgPSB1dGlscy5tZXJnZSh0cnVlLCBjb3B5LCBtZXRhKTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YSA9IG1ldGE7XHJcblxyXG4gICAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBpZiBpdCBpcyBnbG9iYWxcclxuICAgICAgICBpZiAoIW1ldGEubG9jYWwpIHtcclxuICAgICAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXIoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbmplY3RTZXJ2aWNlcyhpbnN0YW5jZSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgbWV0YSA9IGluc3RhbmNlLiRnZXRNZXRhKCk7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc09iamVjdChtZXRhLmluamVjdCkpIHtcclxuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChtZXRhLmluamVjdCwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnN0YW5jZSwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaXZhdGVLZXkgPSAnJCQnICsga2V5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlW3ByaXZhdGVLZXldID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlW3ByaXZhdGVLZXldID0gc2VsZi5jcmVhdGVTZXJ2aWNlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlW3ByaXZhdGVLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBpbmplY3RvciA9IG5ldyBJbmplY3RvcigpO1xyXG5cclxuZXhwb3J0IHsgdHlwZUNvbnN0LCBJbmplY3RvciwgaW5qZWN0b3IgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHtpbmplY3Rvcn0gZnJvbSAnLi9pbmplY3Rvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBTZXJ2aWNlLmNvbnN0cnVjdC5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb25zdHJ1Y3QoKSB7XHJcbiAgICAgICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJGhvb2tzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9uSW5pdDogJycsXHJcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgICRnZXRNZXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YSB8fCB7fTtcclxuICAgIH1cclxuXHJcbiAgICAkc2V0TWV0YSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgJGRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2F4aW9zX187Il0sInNvdXJjZVJvb3QiOiIifQ==