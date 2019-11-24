(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sine"] = factory();
	else
		root["sine"] = factory();
})(window, function() {
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

/***/ "./src/animation/animate.js":
/*!**********************************!*\
  !*** ./src/animation/animate.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
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




var TRANSITION = 'transition';
var ANIMATION = 'animation';
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
var transformRE = /\b(transform|all)(,|$)/;
var AnimateService = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_2__["service"])({
  namespace: 'sine',
  selector: '$animate'
}), _dec(_class =
/*#__PURE__*/
function (_Service) {
  _inherits(AnimateService, _Service);

  function AnimateService() {
    _classCallCheck(this, AnimateService);

    return _possibleConstructorReturn(this, _getPrototypeOf(AnimateService).call(this));
  }

  _createClass(AnimateService, [{
    key: "enter",
    value: function enter(vnode, doEnter) {
      var el = vnode.htmlElement; // call leave callback now

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](el._leaveCb)) {
        el._leaveCb.cancelled = true;

        el._leaveCb();
      }

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](el._enterCb) || el.nodeType !== 1) {
        return;
      }

      var animation = this.resolveAnimationContext(vnode);

      if (!animation) {
        return doEnter();
      }

      var data = this.resolveAnimation(animation);
      var self = this;
      var type = data.type;
      var enterClass = data.enterClass;
      var enterToClass = data.enterToClass;
      var enterActiveClass = data.enterActiveClass;
      var duration = data.duration;
      var explicitEnterDuration = _utility__WEBPACK_IMPORTED_MODULE_0__["toNumber"](_utility__WEBPACK_IMPORTED_MODULE_0__["isObject"](duration) ? duration.enter : duration);
      var cb = el._enterCb = self.once(function () {
        self.removeAnimationClass(el, enterToClass);
        self.removeAnimationClass(el, enterActiveClass);

        if (cb.cancelled) {
          self.removeAnimationClass(el, enterClass);
          animation.enterCancelled && animation.enterCancelled(el);
        } else {
          animation.afterEnter && animation.afterEnter(el);
        }

        el._enterCb = null;
      }); // start enter animation

      animation.beforeEnter && animation.beforeEnter(el);
      self.addAnimationClass(el, enterClass);
      self.addAnimationClass(el, enterActiveClass);
      self.nextFrame(function () {
        self.removeAnimationClass(el, enterClass);

        if (!cb.cancelled) {
          self.addAnimationClass(el, enterToClass);

          if (self.isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            self.whenAnimationEnds(el, type, cb);
          }
        }
      });
      doEnter();
      animation.enter && animation.enter(el, cb);
    }
  }, {
    key: "leave",
    value: function leave(vnode, doLeave) {
      var el = vnode.htmlElement; // call enter callback now

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](el._enterCb)) {
        el._enterCb.cancelled = true;

        el._enterCb();
      }

      var animation = this.resolveAnimationContext(vnode);

      if (!animation || el.nodeType !== 1) {
        return doLeave();
      }

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](el._leaveCb)) {
        return;
      }

      var data = this.resolveAnimation(animation);
      var self = this;
      var type = data.type;
      var leaveClass = data.leaveClass;
      var leaveToClass = data.leaveToClass;
      var leaveActiveClass = data.leaveActiveClass;
      var duration = data.duration;
      var explicitLeaveDuration = _utility__WEBPACK_IMPORTED_MODULE_0__["toNumber"](_utility__WEBPACK_IMPORTED_MODULE_0__["isObject"](duration) ? duration.leave : duration);
      var cb = el._leaveCb = self.once(function () {
        self.removeAnimationClass(el, leaveToClass);
        self.removeAnimationClass(el, leaveActiveClass);

        if (cb.cancelled) {
          self.removeAnimationClass(el, leaveClass);
          animation.leaveCancelled && animation.leaveCancelled(el);
        } else {
          doLeave();
          animation.afterLeave && animation.afterLeave(el);
        }

        el._leaveCb = null;
      });

      if (animation.delayLeave) {
        animation.delayLeave(performLeave);
      } else {
        performLeave();
      }

      function performLeave() {
        // the delayed leave may have already been cancelled
        if (cb.cancelled) {
          return;
        }

        animation.beforeLeave && animation.beforeLeave(el);
        self.addAnimationClass(el, leaveClass);
        self.addAnimationClass(el, leaveActiveClass);
        self.nextFrame(function () {
          self.removeAnimationClass(el, leaveClass);

          if (!cb.cancelled) {
            self.addAnimationClass(el, leaveToClass);

            if (self.isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              self.whenAnimationEnds(el, type, cb);
            }
          }
        });
        animation.leave && animation.leave(el, cb);
      }
    }
  }, {
    key: "resolveAnimation",
    value: function resolveAnimation(config) {
      var res = {};

      if (config.css !== false) {
        _utility__WEBPACK_IMPORTED_MODULE_0__["extend"](res, this.autoCssAnimation(config.name || 'n'));
      }

      _utility__WEBPACK_IMPORTED_MODULE_0__["extend"](res, config);
      return res;
    }
  }, {
    key: "autoCssAnimation",
    value: function autoCssAnimation(name) {
      return {
        enterClass: name + "-enter",
        enterToClass: name + "-enter-to",
        enterActiveClass: name + "-enter-active",
        leaveClass: name + "-leave",
        leaveToClass: name + "-leave-to",
        leaveActiveClass: name + "-leave-active"
      };
    }
  }, {
    key: "once",
    value: function once(fn) {
      var called = false;
      return function () {
        if (!called) {
          called = true;
          fn.apply(this, arguments);
        }
      };
    }
  }, {
    key: "nextFrame",
    value: function nextFrame(fn) {
      requestAnimationFrame(function () {
        requestAnimationFrame(fn);
      });
    }
  }, {
    key: "addAnimationClass",
    value: function addAnimationClass(el, cls) {
      var animationClasses = el._animationClasses || (el._animationClasses = []);

      if (animationClasses.indexOf(cls) < 0) {
        animationClasses.push(cls);
        _utility__WEBPACK_IMPORTED_MODULE_0__["addClass"](el, cls);
      }
    }
  }, {
    key: "removeAnimationClass",
    value: function removeAnimationClass(el, cls) {
      if (el._animationClasses) {
        _utility__WEBPACK_IMPORTED_MODULE_0__["remove"](el._animationClasses, cls);
      }

      _utility__WEBPACK_IMPORTED_MODULE_0__["removeClass"](el, cls);
    }
  }, {
    key: "whenAnimationEnds",
    value: function whenAnimationEnds(el, expectedType, cb) {
      var ref = this.getAnimationInfo(el, expectedType);
      var type = ref.type;
      var timeout = ref.timeout;
      var propCount = ref.propCount;

      if (!type) {
        return cb();
      }

      var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
      var ended = 0;

      var end = function end() {
        el.removeEventListener(event, onEnd);
        cb();
      };

      var onEnd = function onEnd(e) {
        if (e.target === el) {
          if (++ended >= propCount) {
            end();
          }
        }
      };

      setTimeout(function () {
        if (ended < propCount) {
          end();
        }
      }, timeout + 1);
      el.addEventListener(event, onEnd);
    }
  }, {
    key: "getAnimationInfo",
    value: function getAnimationInfo(el, expectedType) {
      var styles = window.getComputedStyle(el);
      var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
      var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
      var transitionTimeout = this.getTimeout(transitionDelays, transitionDurations);
      var animationDelays = styles[animationProp + 'Delay'].split(', ');
      var animationDurations = styles[animationProp + 'Duration'].split(', ');
      var animationTimeout = this.getTimeout(animationDelays, animationDurations);
      var type;
      var timeout = 0;
      var propCount = 0;
      /* istanbul ignore if */

      if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
          type = TRANSITION;
          timeout = transitionTimeout;
          propCount = transitionDurations.length;
        }
      } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
          type = ANIMATION;
          timeout = animationTimeout;
          propCount = animationDurations.length;
        }
      } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
        propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
      }

      var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
      return {
        type: type,
        timeout: timeout,
        propCount: propCount,
        hasTransform: hasTransform
      };
    }
  }, {
    key: "getTimeout",
    value: function getTimeout(delays, durations) {
      var self = this;

      while (delays.length < durations.length) {
        delays = delays.concat(delays);
      }

      return Math.max.apply(null, durations.map(function (d, i) {
        return self.toMs(d) + self.toMs(delays[i]);
      }));
    }
  }, {
    key: "toMs",
    value: function toMs(s) {
      return Number(s.slice(0, -1)) * 1000;
    }
  }, {
    key: "isValidDuration",
    value: function isValidDuration(value) {
      return typeof value === 'number' && !isNaN(value);
    }
  }, {
    key: "resolveAnimationContext",
    value: function resolveAnimationContext(element) {
      var animations = element.getDirectives().filter(function (dir) {
        return dir.animation = true;
      });

      if (animations.length) {
        return animations[0];
      }

      return null;
    }
  }]);

  return AnimateService;
}(_view__WEBPACK_IMPORTED_MODULE_1__["Service"])) || _class);

/***/ }),

/***/ "./src/animation/animation.js":
/*!************************************!*\
  !*** ./src/animation/animation.js ***!
  \************************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
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



var Animation = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'animation'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(Animation, _Directive);

  function Animation() {
    var _this;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this)); // animation type, "transition" or "animation"

    _this.animation = true;
    _this.name = '';
    _this.type = '';
    _this.css = true; // this.enterClass = '';
    // this.enterToClass = '';
    // this.enterActiveClass = '';
    // this.leaveClass = '';
    // this.leaveToClass = '';
    // this.leaveActiveClass = '';

    _this.$priority = -100;
    return _this;
  }

  _createClass(Animation, [{
    key: "nextFrame",
    value: function nextFrame(fn) {
      requestAnimationFrame(function () {
        requestAnimationFrame(fn);
      });
    } // beforeEnter() {
    //
    // }
    //
    // enter() {
    //
    // }
    //
    // afterEnter() {
    //
    // }
    //
    // enterCancelled() {
    //
    // }
    //
    // beforeLeave() {
    //
    // }
    //
    // leave() {
    //
    // }
    //
    // afterLeave() {
    //
    // }
    //
    // leaveCancelled() {
    //
    // }
    //
    // delayLeave() {
    //
    // }

  }]);

  return Animation;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);


/***/ }),

/***/ "./src/animation/index.js":
/*!********************************!*\
  !*** ./src/animation/index.js ***!
  \********************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ "./src/animation/animate.js");
/* empty/unused harmony star reexport *//* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/animation/animation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]; });




/***/ }),

/***/ "./src/core/attribute.js":
/*!*******************************!*\
  !*** ./src/core/attribute.js ***!
  \*******************************/
/*! exports provided: AttrNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttrNode", function() { return AttrNode; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
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
    key: "observe",
    value: function observe(action) {
      this.binding.observe(action);
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

      this.isDomEvent = _utility__WEBPACK_IMPORTED_MODULE_0__["contains"](domEvents, this.nodeName);
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
            _utility__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.htmlElement, this.nodeName, this.binding.compute());
          } else {
            this.htmlElement.setAttribute(this.nodeName, this.binding.compute());
          }
        }

        this.observe(function () {
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
            _utility__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.htmlElement, this.nodeName, this.binding.value);
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
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");
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
      this.value = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["compute"])(this.text, scope, options);
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
    this.change = new _utility__WEBPACK_IMPORTED_MODULE_0__["Messenger"]();
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
      var assignment = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["parseAssignment"])(this.text, this.scope);

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
    key: "observe",
    value: function observe(action) {
      if (this.output) {
        return;
      }

      this.listen();
      this.change.on(action);
      return function () {
        this.change.off(action);
      };
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
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
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
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onInsert)) {
        return this.onInsert.call(this);
      }
    }
  }, {
    key: "detect",
    value: function detect() {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDetect)) {
        return this.onDetect.call(this);
      }
    }
  }, {
    key: "hasChange",
    value: function hasChange() {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onHasChange)) {
        return this.onHasChange.call(this);
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onUpdate)) {
        return this.onUpdate.call(this);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
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
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/core/base.js");
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection */ "./src/core/connection.js");
/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attribute */ "./src/core/attribute.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");
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
    key: "getAttribute",
    value: function getAttribute(key) {
      var matches = this.attributes.filter(function (attr) {
        return attr.belongTo(key);
      });

      if (!matches.length) {
        return null;
      }

      return matches[0];
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
    key: "observe",
    value: function observe(key, action) {
      var matches = this.attributes.filter(function (attr) {
        return attr.belongTo(key);
      });

      if (!matches.length) {
        return;
      }

      return matches[0].observe(action);
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
    key: "getDirectives",
    value: function getDirectives() {
      return this.attributes.map(function (attr) {
        return attr.getDirective();
      }).filter(function (dir) {
        return dir != null;
      });
    }
  }, {
    key: "compile",
    value: function compile(options) {
      this.compileOptions = options;
      this.attributes.forEach(function (attr) {
        attr.compile(options);
      }); // perform directive according to priority

      this.attributes = _utility__WEBPACK_IMPORTED_MODULE_0__["orderBy"](this.attributes, function (item) {
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
        _utility__WEBPACK_IMPORTED_MODULE_0__["removeNode"](this.htmlElement);
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
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var propChangingMsg = new _utility__WEBPACK_IMPORTED_MODULE_0__["Messenger"]();
var propChangedMsg = new _utility__WEBPACK_IMPORTED_MODULE_0__["Messenger"]();
var targetKey = '__target__';

function getTarget(value) {
  if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
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

      if (this.deepProxy && Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
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

      if (oldValue !== value || Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target) && key === 'length') {
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

      if (this.deepProxy && Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
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

      if (oldValue !== value || Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target) && key === 'length') {
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
/*! exports provided: VNodeType, VNode, AttrNode, CDataSectionNode, CommentNode, ConnectionNode, DocumentTypeNode, DocumentNode, ElementNode, DocumentFragmentNode, TextNode, Binding, GetPropertyHandler, SetPropertyHandler, AccessPropertyHandler, propChangingMsg, propChangedMsg, getTarget, PropertyObserver, Observer */
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

        Object(_utility__WEBPACK_IMPORTED_MODULE_1__["forEach"])(self.members, function (memberWatcher, key) {
          memberWatcher.update(changeKey);
        }); // self.updateMember();

        self.action.call(this, prop, args);
      }, this.options);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      Object(_utility__WEBPACK_IMPORTED_MODULE_1__["forEach"])(this.members, function (member, key) {
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
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
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





var TextNode =
/*#__PURE__*/
function (_VNode) {
  _inherits(TextNode, _VNode);

  function TextNode() {
    var _this;

    _classCallCheck(this, TextNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextNode).call(this, _base__WEBPACK_IMPORTED_MODULE_1__["VNodeType"].text, '#text'));
    _this.binding = new _binding__WEBPACK_IMPORTED_MODULE_2__["Binding"]();
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
      this.binding.observe(function () {
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
      _utility__WEBPACK_IMPORTED_MODULE_0__["replaceNode"](this.htmlElement, this.render(this.binding.value));
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
    key: "removeHtmlElement",
    value: function removeHtmlElement() {
      if (this.htmlElement != null) {
        _utility__WEBPACK_IMPORTED_MODULE_0__["removeNode"](this.htmlElement);
      }
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
}(_base__WEBPACK_IMPORTED_MODULE_1__["VNode"]);



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
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");

function component(meta) {
  return function (target) {
    var selector = meta.selector || target.name;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerConstructor(_view__WEBPACK_IMPORTED_MODULE_0__["typeConst"].component, selector, target, meta);
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
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");

function directive(meta) {
  return function (target) {
    var selector = meta.selector || target.name;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerConstructor(_view__WEBPACK_IMPORTED_MODULE_0__["typeConst"].directive, selector, target, meta);
  };
}

/***/ }),

/***/ "./src/decorator/filter.js":
/*!*********************************!*\
  !*** ./src/decorator/filter.js ***!
  \*********************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");

function filter(meta) {
  return function (target) {
    var selector = meta.selector || target.name;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerConstructor(_view__WEBPACK_IMPORTED_MODULE_0__["typeConst"].filter, selector, target, meta);
  };
}

/***/ }),

/***/ "./src/decorator/index.js":
/*!********************************!*\
  !*** ./src/decorator/index.js ***!
  \********************************/
/*! exports provided: component, directive, filter, service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/decorator/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["component"]; });

/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive */ "./src/decorator/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _directive__WEBPACK_IMPORTED_MODULE_1__["directive"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./src/decorator/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_2__["filter"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/decorator/service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "service", function() { return _service__WEBPACK_IMPORTED_MODULE_3__["service"]; });






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
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");

function service(meta) {
  return function (target) {
    var selector = meta.selector || target.name;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerConstructor(_view__WEBPACK_IMPORTED_MODULE_0__["typeConst"].service, selector, target, meta);
  };
}

/***/ }),

/***/ "./src/directive/bind-cmp-options.js":
/*!*******************************************!*\
  !*** ./src/directive/bind-cmp-options.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
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



var BindCmpOptionsDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-bind-cmp-options'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(BindCmpOptionsDirective, _Directive);

  function BindCmpOptionsDirective() {
    var _this;

    _classCallCheck(this, BindCmpOptionsDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BindCmpOptionsDirective).call(this));
    _this.value = null;
    return _this;
  }

  _createClass(BindCmpOptionsDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.updateOptions();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.clearOptions();
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.clear();
    }
  }, {
    key: "updateOptions",
    value: function updateOptions() {
      this.value = this.$binding.compute();
    }
  }, {
    key: "clearOptions",
    value: function clearOptions() {
      this.value = null;
    }
  }]);

  return BindCmpOptionsDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/bind-cmp.js":
/*!***********************************!*\
  !*** ./src/directive/bind-cmp.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
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



var BindCmpDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
      this.init();
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
    key: "init",
    value: function init() {
      this.nameDir = this.$element.getDirective('n-name');
      this.bindCmpOptionsDir = this.$element.getDirective('n-bind-cmp-options');

      if (this.bindCmpOptionsDir != null) {
        this.config = this.bindCmpOptionsDir.value;
      } else {
        this.config = {};
      }
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
      var component = this.$binding.compute();

      if (component == null) {
        return;
      }

      this.view = this.$binding.scope.$createChildCmp(component);
      this.config && this.config.onInit(this.view);
      this.view.$mount(this.$htmlElement);

      if (this.nameDir != null) {
        this.nameDir.setCmp(this.view);
      }
    }
  }]);

  return BindCmpDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/bind.js":
/*!*******************************!*\
  !*** ./src/directive/bind.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
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



var BindDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/embed.js":
/*!********************************!*\
  !*** ./src/directive/embed.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
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



var EmbedDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/hide.js":
/*!*******************************!*\
  !*** ./src/directive/hide.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
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



var HideDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-hide',
  inject: {
    $animate: '$animate'
  }
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
      this.toggle();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.toggle();
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var self = this;

      if (this.$binding.compute()) {
        this.$animate.leave(this.$element, function () {
          self.$htmlElement.style.display = 'none';
        });
      } else {
        this.$animate.enter(this.$element, function () {
          self.$htmlElement.style.display = 'initial';
        });
      }
    }
  }]);

  return HideDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/if.js":
/*!*****************************!*\
  !*** ./src/directive/if.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
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




var IfDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-if',
  inject: {
    $animate: '$animate'
  }
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
      var self = this;

      if (this.$binding.compute()) {
        if (this.$htmlElement.parentNode == null) {
          this.$animate.enter(this.$element, function () {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](self.htmlComment, self.$htmlElement);
          });
        }
      } else {
        if (this.$htmlElement.parentNode != null) {
          this.$animate.leave(this.$element, function () {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](self.$htmlElement, self.htmlComment);
          });
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
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/index.js":
/*!********************************!*\
  !*** ./src/directive/index.js ***!
  \********************************/
/*! exports provided: ClassDirective, StyleDirective */
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
/* empty/unused harmony star reexport *//* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./src/directive/style/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _style__WEBPACK_IMPORTED_MODULE_7__["ClassDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _style__WEBPACK_IMPORTED_MODULE_7__["StyleDirective"]; });

/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./switch */ "./src/directive/switch/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state */ "./src/directive/state/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./name */ "./src/directive/name.js");
/* empty/unused harmony star reexport *//* harmony import */ var _bind_cmp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bind-cmp */ "./src/directive/bind-cmp.js");
/* empty/unused harmony star reexport *//* harmony import */ var _bind_cmp_options__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bind-cmp-options */ "./src/directive/bind-cmp-options.js");
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
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
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




var ModelDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/name.js":
/*!*******************************!*\
  !*** ./src/directive/name.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
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



var NameDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/repeat.js":
/*!*********************************!*\
  !*** ./src/directive/repeat.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
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




var RepeatDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
      var index = 0;
      _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](self.dataItems, function (item, key) {
        var cmpItem = self.getCmpItem(item);

        if (cmpItem == null) {
          cmpItem = new _view__WEBPACK_IMPORTED_MODULE_0__["Component"]({
            template: self.itemTemplate
          });
          cmpItem[self.itemExp] = item;
          cmpItem.$inheritCmp(self.scope);
        }

        cmpItem['$index'] = index;
        fragment.appendChild(cmpItem.$render(true));
        newCmpItems.push(cmpItem);
        index++;
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
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/show.js":
/*!*******************************!*\
  !*** ./src/directive/show.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
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



var ShowDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-show',
  inject: {
    $animate: '$animate'
  }
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
      this.toggle();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.toggle();
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var self = this;

      if (this.$binding.compute()) {
        this.$animate.enter(this.$element, function () {
          self.$htmlElement.style.display = 'initial';
        });
      } else {
        this.$animate.leave(this.$element, function () {
          self.$htmlElement.style.display = 'none';
        });
      }
    }
  }]);

  return ShowDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CheckedDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DisabledDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ReadonlyDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SelectedDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
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
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"]);



/***/ }),

/***/ "./src/directive/style/class-even.js":
/*!*******************************************!*\
  !*** ./src/directive/style/class-even.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/directive/style/class.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
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



var ClassEvenDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-class-even'
}), _dec(_class =
/*#__PURE__*/
function (_ClassDirective) {
  _inherits(ClassEvenDirective, _ClassDirective);

  function ClassEvenDirective() {
    _classCallCheck(this, ClassEvenDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClassEvenDirective).call(this));
  }

  _createClass(ClassEvenDirective, [{
    key: "skip",
    value: function skip() {
      return this.$scope.$index & 1 === 1;
    }
  }]);

  return ClassEvenDirective;
}(_class__WEBPACK_IMPORTED_MODULE_0__["ClassDirective"])) || _class);

/***/ }),

/***/ "./src/directive/style/class-odd.js":
/*!******************************************!*\
  !*** ./src/directive/style/class-odd.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/directive/style/class.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
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



var ClassOddDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-class-odd'
}), _dec(_class =
/*#__PURE__*/
function (_ClassDirective) {
  _inherits(ClassOddDirective, _ClassDirective);

  function ClassOddDirective() {
    _classCallCheck(this, ClassOddDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClassOddDirective).call(this));
  }

  _createClass(ClassOddDirective, [{
    key: "skip",
    value: function skip() {
      return this.$scope.$index & 1 === 0;
    }
  }]);

  return ClassOddDirective;
}(_class__WEBPACK_IMPORTED_MODULE_0__["ClassDirective"])) || _class);

/***/ }),

/***/ "./src/directive/style/class.js":
/*!**************************************!*\
  !*** ./src/directive/style/class.js ***!
  \**************************************/
/*! exports provided: ClassDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return ClassDirective; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility */ "./src/utility/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
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




var ClassDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_2__["directive"])({
  namespace: 'sine',
  selector: 'n-class'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(ClassDirective, _Directive);

  function ClassDirective() {
    var _this;

    _classCallCheck(this, ClassDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClassDirective).call(this));
    _this.unwatch = null;
    _this.initialClassList = [];
    return _this;
  }

  _createClass(ClassDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.parseClass();
      this.setClass();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.setClass();
    }
  }, {
    key: "watchArray",
    value: function watchArray(arr, action) {
      var self = this;
      this.unwatchArray();
      this.$scope.$watch(arr, 'length', function () {
        action.call(self);
      });
    }
  }, {
    key: "unwatchArray",
    value: function unwatchArray() {
      if (this.unwatch != null) {
        this.unwatch.call(this);
        this.unwatch = null;
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.unwatchArray();
    }
  }, {
    key: "textToArray",
    value: function textToArray(text) {
      return text.split(' ').filter(function (item) {
        return item.trim().length > 0;
      });
    }
  }, {
    key: "parseClass",
    value: function parseClass() {
      var classText = this.$getAttrValue('class');

      if (!classText) {
        return;
      }

      this.initialClassList = this.textToArray(classText);
    }
  }, {
    key: "setClassList",
    value: function setClassList(arr) {
      var self = this;
      this.$htmlElement.classList.forEach(function (item) {
        self.$htmlElement.classList.remove(item);
      });
      this.initialClassList.forEach(function (item) {
        self.$htmlElement.classList.add(item);
      });
      arr.forEach(function (item) {
        self.$htmlElement.classList.add(item);
      });
    }
  }, {
    key: "setClass",
    value: function setClass() {
      if (this.skip()) {
        return;
      }

      var self = this,
          newArr = [],
          value = this.$binding.compute();

      if (value != null) {
        if (_utility__WEBPACK_IMPORTED_MODULE_0__["isString"](value)) {
          newArr = this.textToArray(value);
        } else if (_utility__WEBPACK_IMPORTED_MODULE_0__["isArray"](value)) {
          newArr = value;
          this.watchArray(value, function () {
            self.setClassList(value);
          });
        } else {
          throw new Error('Parameter of n-class should be string or array');
        }
      }

      this.setClassList(newArr);
    }
  }, {
    key: "skip",
    value: function skip() {
      return false;
    }
  }]);

  return ClassDirective;
}(_view__WEBPACK_IMPORTED_MODULE_1__["Directive"])) || _class);


/***/ }),

/***/ "./src/directive/style/index.js":
/*!**************************************!*\
  !*** ./src/directive/style/index.js ***!
  \**************************************/
/*! exports provided: ClassDirective, StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/directive/style/class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _class__WEBPACK_IMPORTED_MODULE_0__["ClassDirective"]; });

/* harmony import */ var _class_even__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-even */ "./src/directive/style/class-even.js");
/* empty/unused harmony star reexport *//* harmony import */ var _class_odd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-odd */ "./src/directive/style/class-odd.js");
/* empty/unused harmony star reexport *//* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/directive/style/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _style__WEBPACK_IMPORTED_MODULE_3__["StyleDirective"]; });

/* harmony import */ var _style_even__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style-even */ "./src/directive/style/style-even.js");
/* empty/unused harmony star reexport *//* harmony import */ var _style_odd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style-odd */ "./src/directive/style/style-odd.js");
/* empty/unused harmony star reexport */






/***/ }),

/***/ "./src/directive/style/style-even.js":
/*!*******************************************!*\
  !*** ./src/directive/style/style-even.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./src/directive/style/style.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
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



var StyleEvenDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-style-even'
}), _dec(_class =
/*#__PURE__*/
function (_StyleDirective) {
  _inherits(StyleEvenDirective, _StyleDirective);

  function StyleEvenDirective() {
    _classCallCheck(this, StyleEvenDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(StyleEvenDirective).call(this));
  }

  _createClass(StyleEvenDirective, [{
    key: "skip",
    value: function skip() {
      return this.$scope.$index & 1 === 1;
    }
  }]);

  return StyleEvenDirective;
}(_style__WEBPACK_IMPORTED_MODULE_0__["StyleDirective"])) || _class);

/***/ }),

/***/ "./src/directive/style/style-odd.js":
/*!******************************************!*\
  !*** ./src/directive/style/style-odd.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./src/directive/style/style.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
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



var StyleOddDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-style-odd'
}), _dec(_class =
/*#__PURE__*/
function (_StyleDirective) {
  _inherits(StyleOddDirective, _StyleDirective);

  function StyleOddDirective() {
    _classCallCheck(this, StyleOddDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(StyleOddDirective).call(this));
  }

  _createClass(StyleOddDirective, [{
    key: "skip",
    value: function skip() {
      return this.$scope.$index & 1 === 0;
    }
  }]);

  return StyleOddDirective;
}(_style__WEBPACK_IMPORTED_MODULE_0__["StyleDirective"])) || _class);

/***/ }),

/***/ "./src/directive/style/style.js":
/*!**************************************!*\
  !*** ./src/directive/style/style.js ***!
  \**************************************/
/*! exports provided: StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return StyleDirective; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
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




var StyleDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-style'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(StyleDirective, _Directive);

  function StyleDirective() {
    var _this;

    _classCallCheck(this, StyleDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StyleDirective).call(this));
    _this.unwatch = null;
    _this.initialStyle = {};
    return _this;
  }

  _createClass(StyleDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.parseStyle();
      this.setStyle();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.setStyle();
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.unwatchObj();
    }
  }, {
    key: "watchObj",
    value: function watchObj(obj, action) {
      var self = this;
      this.unwatchObj();
      this.$scope.$watch(obj, '*', function () {
        action.call(self);
      });
    }
  }, {
    key: "unwatchObj",
    value: function unwatchObj() {
      if (this.unwatch != null) {
        this.unwatch.call(this);
        this.unwatch = null;
      }
    }
  }, {
    key: "parseStyle",
    value: function parseStyle() {
      var value = this.$getAttrValue('style');

      if (!value) {
        return;
      }

      this.initialStyle = this.textToObject(value);
    }
  }, {
    key: "textToObject",
    value: function textToObject(text) {
      var obj = {},
          list = text.split(';').filter(function (item) {
        return item.trim().length > 0;
      });
      list.forEach(function (item) {
        var subItems = item.split(':');
        var name = subItems[0];
        var value = subItems[1];
        obj[name] = value;
      });
      return obj;
    }
  }, {
    key: "applyStyle",
    value: function applyStyle(obj) {
      var element = this.$htmlElement; // clean up style

      element.style = ''; // set new style

      _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](this.initialStyle, function (value, key) {
        element.style[key] = value;
      });
      _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](obj, function (value, key) {
        element.style[key] = value;
      });
    }
  }, {
    key: "setStyle",
    value: function setStyle() {
      if (this.skip()) {
        return;
      }

      var self = this,
          newStyle = {};
      var value = this.$binding.compute();

      if (value != null) {
        if (_utility__WEBPACK_IMPORTED_MODULE_2__["isString"](value)) {
          newStyle = this.textToObject(value);
        } else if (_utility__WEBPACK_IMPORTED_MODULE_2__["isObject"](value)) {
          newStyle = value;
          this.watchObj(value, function () {
            self.applyStyle(value);
          });
        } else {
          throw new Error('Parameter of n-style should be string or object');
        }
      }

      this.applyStyle(newStyle);
    }
  }, {
    key: "skip",
    value: function skip() {
      return false;
    }
  }]);

  return StyleDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);


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
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
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




var SwitchDefaultDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/switch/switch-when.js":
/*!*********************************************!*\
  !*** ./src/directive/switch/switch-when.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
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





var SwitchWhenDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
    _this.isMatchChanged = new _utility__WEBPACK_IMPORTED_MODULE_2__["Messenger"]();
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
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/switch/switch.js":
/*!****************************************!*\
  !*** ./src/directive/switch/switch.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
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




var SwitchDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
    _this.valueChanged = new _utility__WEBPACK_IMPORTED_MODULE_2__["Messenger"]();
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
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: decorator, typeConst, injector, Injector, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, component, directive, filter, service, bootstrap, compile, compute, parse, parseExp, parseAssignment, forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, format, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded, queryElementState, addClass, removeClass, httpGet, httpPost, Messenger, MessengerBus, isMessenger, Animation, ClassDirective, StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorator */ "./src/decorator/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "decorator", function() { return _decorator__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/utility/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["some"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["lowercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["uppercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBlankObject", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isBlankObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isSame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFormData", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["containsStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["hasProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["getProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["setProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["orderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderByDescending", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["orderByDescending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["toNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["getChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["clearChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["replaceNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["removeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["removeNodeBetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["insertNodeAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementLoaded", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["queryElementLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementUnloaded", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["queryElementUnloaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementState", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["queryElementState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["removeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "httpGet", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["httpGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "httpPost", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["httpPost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["Messenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessengerBus", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["MessengerBus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMessenger", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["isMessenger"]; });

/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeConst", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["typeConst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["Injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directive", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["Filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["Service"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFilter", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["isFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isService", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["isService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["namespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "service", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["service"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["bootstrap"]; });

/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser */ "./src/parser/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return _parser__WEBPACK_IMPORTED_MODULE_3__["compile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compute", function() { return _parser__WEBPACK_IMPORTED_MODULE_3__["compute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parser__WEBPACK_IMPORTED_MODULE_3__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseExp", function() { return _parser__WEBPACK_IMPORTED_MODULE_3__["parseExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAssignment", function() { return _parser__WEBPACK_IMPORTED_MODULE_3__["parseAssignment"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service */ "./src/service/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive */ "./src/directive/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_5__["ClassDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_5__["StyleDirective"]; });

/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animation */ "./src/animation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _animation__WEBPACK_IMPORTED_MODULE_6__["Animation"]; });










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
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lexer */ "./src/parser/lexer.js");


_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](HtmlLexer, _lexer__WEBPACK_IMPORTED_MODULE_1__["Lexer"]);

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

    if (ch === '<' && (this.isIdentifierStart(ch2) || ch2 === '/') || this.expectString('<!--')) {
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
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./src/parser/parser.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/core/index.js");



_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](HtmlParser, _parser__WEBPACK_IMPORTED_MODULE_1__["Parser"]);

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
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
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
      settings = _utility__WEBPACK_IMPORTED_MODULE_0__["merge"](defaults, options),
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

  return parseExp(exp).compute(scope, options);
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
    obj: memberExp.object.compute(scope, options, {}, scope),
    prop: memberExp.property.compute(scope, options, {}, scope)
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
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");

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
  var colStr = _utility__WEBPACK_IMPORTED_MODULE_0__["isDefined"](start) ? 's ' + start + '-' + this.index + ' [' + this.text.substring(start, end) + ']' : ' ' + end;
  throw new Error('Lexer Error: ' + error + ' at column' + colStr + ' in expression [' + this.text + '].');
};

Lexer.prototype.readNumber = function () {
  var number = '';
  var start = this.index;

  while (this.index < this.text.length) {
    var ch = _utility__WEBPACK_IMPORTED_MODULE_0__["lowercase"](this.text.charAt(this.index));

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
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
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

AstNode.prototype.compute = function (scope, options, context) {
  return this.childNodes.map(function (child) {
    return child.compute(scope, options || {}, context);
  });
}; // has condition or call expression


AstNode.prototype.hasCC = function () {
  return this.childNodes.some(function (child) {
    return child.hasCC();
  });
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](ProgramNode, AstNode);

function ProgramNode() {
  ProgramNode["super"].call(this, AST.Program);
}

ProgramNode.prototype.compute = function (scope, options) {
  var result = this.childNodes[0].compute(scope, options || {});

  if (result instanceof _null_object__WEBPACK_IMPORTED_MODULE_2__["NullObject"]) {
    return null;
  }

  return result;
};

ProgramNode.prototype.getMemberExpression = function () {
  return this.childNodes[0].getMemberExpression();
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](ExpressionStatementNode, AstNode);

function ExpressionStatementNode() {
  ExpressionStatementNode["super"].call(this, AST.ExpressionStatement);
}

ExpressionStatementNode.prototype.compute = function (scope, options, context) {
  return this.childNodes[0].compute(scope, options || {}, context);
};

ExpressionStatementNode.prototype.getMemberExpression = function () {
  var child = this.childNodes[0];

  if (child instanceof MemberExpressionNode) {
    return child;
  }

  return null;
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](AssignmentExpressionNode, AstNode);

function AssignmentExpressionNode(left, right, operator) {
  AssignmentExpressionNode["super"].call(this, AST.AssignmentExpression);
  this.left = left;
  this.right = right;
  this.operator = operator;
}

AssignmentExpressionNode.prototype.compute = function (scope, options) {
  var target = this.left.compute(scope, options, {
    assignmentLeft: true
  });
  var value = this.right.compute(scope, options);
  target.obj[target.prop] = value;
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](ConditionalExpressionNode, AstNode);

function ConditionalExpressionNode(test, alternate, consequent) {
  ConditionalExpressionNode["super"].call(this, AST.ConditionalExpression);
  this.test = test;
  this.alternate = alternate;
  this.consequent = consequent;
}

ConditionalExpressionNode.prototype.compute = function (scope, options) {
  if (this.test.compute(scope, options)) {
    return this.alternate.compute(scope, options);
  }

  return this.consequent.compute(scope, options);
}; // has condition or call expression


ConditionalExpressionNode.prototype.hasCC = function () {
  return true;
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](LogicalExpressionNode, AstNode);

function LogicalExpressionNode(operator, left, right) {
  LogicalExpressionNode["super"].call(this, AST.LogicalExpression);
  this.operator = operator;
  this.left = left;
  this.right = right;
}

LogicalExpressionNode.prototype.compute = function (scope, options) {
  var result;
  var leftValue = this.left.compute(scope, options);
  var rightValue = this.right.compute(scope, options);

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

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](BinaryExpressionNode, AstNode);

function BinaryExpressionNode(operator, left, right) {
  BinaryExpressionNode["super"].call(this, AST.BinaryExpression);
  this.operator = operator;
  this.left = left;
  this.right = right;
}

BinaryExpressionNode.prototype.compute = function (scope, options) {
  var result;
  var leftValue = this.left.compute(scope, options);
  var rightValue = this.right.compute(scope, options); // '+', '-', '*', '/', '%', '<', '>', '<=', '>=', '==', '!=', '===', '!=='

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

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](UnaryExpressionNode, AstNode);

function UnaryExpressionNode(operator, arg) {
  UnaryExpressionNode["super"].call(this, AST.UnaryExpression);
  this.prefix = true;
  this.operator = operator;
  this.arg = arg;
}

UnaryExpressionNode.prototype.compute = function (scope, options) {
  var result,
      value = this.arg.compute(scope, options);

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

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](LiteralNode, AstNode);

function LiteralNode(value) {
  LiteralNode["super"].call(this, AST.Literal);
  this.value = value;
}

LiteralNode.prototype.compute = function () {
  return this.value;
};

LiteralNode.prototype.toText = function () {
  return this.value;
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](CallExpressionNode, AstNode);

function CallExpressionNode(callee, args) {
  CallExpressionNode["super"].call(this, AST.CallExpression);
  this.callee = callee;
  this.args = args;
  this.filter = false;
}

CallExpressionNode.prototype.compute = function (scope, options) {
  var context = this.callee.compute(scope, options, {
    callee: true
  });
  var argValues = this.args.map(function (arg) {
    return arg.compute(scope, options);
  });

  if (this.filter) {
    var filterIns = options.createFilter(context.prop);

    if (Object(_view__WEBPACK_IMPORTED_MODULE_1__["isFilter"])(filterIns)) {
      return filterIns.$execute.apply(filterIns, argValues);
    }

    throw new Error('Filter "' + context.prop + '" is not defined');
  } else {
    var fn = context.obj[context.prop];

    if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](fn)) {
      return fn.apply(context.obj, argValues);
    }

    throw new Error(context.prop + ' is not a function');
  }
}; // has condition or call expression


CallExpressionNode.prototype.hasCC = function () {
  return !this.filter;
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](MemberExpressionNode, AstNode);

function MemberExpressionNode(object, property, computed) {
  MemberExpressionNode["super"].call(this, AST.MemberExpression);
  this.object = object;
  this.property = property;
  this.computed = computed;
  this.allowNull = false;
}

MemberExpressionNode.prototype.compute = function (scope, options, context) {
  var obj = this.object.compute(scope, options);

  if (obj == null && this.object.allowNull) {
    obj = new _null_object__WEBPACK_IMPORTED_MODULE_2__["NullObject"]();
  }

  if (this.computed) {
    var prop = this.property.compute(scope, options, context);

    if (_utility__WEBPACK_IMPORTED_MODULE_0__["isArray"](options.members)) {
      options.members.push({
        target: obj,
        targetKey: this.object.toText(),
        key: prop
      });
    }

    return obj[prop];
  }

  return this.property.compute(obj, options, context, this.object);
};

MemberExpressionNode.prototype.toText = function () {
  return this.object.toText() + '.' + this.property.toText();
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](IdentifierNode, AstNode);

function IdentifierNode(name) {
  IdentifierNode["super"].call(this, AST.Identifier);
  this.name = name;
  this.allowNull = false;
}

IdentifierNode.prototype.compute = function (obj, options, context, objNode) {
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

  if (_utility__WEBPACK_IMPORTED_MODULE_0__["isArray"](options.members)) {
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

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](ArrayExpressionNode, AstNode);

function ArrayExpressionNode() {
  ArrayExpressionNode["super"].call(this, AST.ArrayExpression);
}

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](PropertyNode, AstNode);

function PropertyNode() {
  PropertyNode["super"].call(this, AST.Property);
  this.kind = 'init';
  this.key = null;
  this.value = null;
  this.computed = false;
}

PropertyNode.prototype.compute = function (scope, options) {
  return {
    key: this.key.compute(scope, options, {
      propertyKey: true
    }),
    value: this.value.compute(scope, options)
  };
};

_utility__WEBPACK_IMPORTED_MODULE_0__["inherit"](ObjectExpressionNode, AstNode);

function ObjectExpressionNode(properties) {
  ObjectExpressionNode["super"].call(this, AST.ObjectExpression);
  this.properties = properties;
}

ObjectExpressionNode.prototype.compute = function (scope, options) {
  var result = {};
  this.properties.forEach(function (item) {
    var def = item.compute(scope, options);
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

  while (this.peek('(', '[', '.') || this.peek('?') && this.peekAhead(1, '.')) {
    if (this.expect('?')) {
      primary.allowNull = true;
    }

    next = this.expect('(', '[', '.');

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
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ModelOptionsService = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["service"])({
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
}(_view__WEBPACK_IMPORTED_MODULE_0__["Service"])) || _class);

/***/ }),

/***/ "./src/service/template-cache.js":
/*!***************************************!*\
  !*** ./src/service/template-cache.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
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




var TemplateCacheService = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_2__["service"])({
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
        this.promiseCache[url] = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["httpGet"])(url).then(function (res) {
          self.promiseCache[url] = null;
          self.tplCache[url] = res.data || '';
          return self.tplCache[url];
        });
      }

      return this.promiseCache[url];
    }
  }]);

  return TemplateCacheService;
}(_view__WEBPACK_IMPORTED_MODULE_1__["Service"])) || _class);

/***/ }),

/***/ "./src/utility/http.js":
/*!*****************************!*\
  !*** ./src/utility/http.js ***!
  \*****************************/
/*! exports provided: httpGet, httpPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpGet", function() { return httpGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpPost", function() { return httpPost; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utility/utils.js");

var readyStateEnum = {
  start: 0,
  opened: 1,
  sent: 2,
  received: 3,
  finish: 4
};

function createXHR() {
  return new XMLHttpRequest();
}

function createPromise(resolve, reject) {
  return new Promise(resolve, reject);
}

function addUrlParam(url, name, value) {
  url += url.indexOf('?') === -1 ? '?' : '&';
  url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
  return url;
}

function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  _utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](headers.split('\n'), function parser(line, index) {
    i = line.indexOf(':');
    key = line.substr(0, i).trim().toLowerCase();
    val = line.substr(i + 1).trim();

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
}

function buildUrl(url, config) {
  if (config.data != null && config.method.toLowerCase() === 'get') {
    _utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](config.data, function (value, name) {
      addUrlParam(url, name, value);
    });
  }

  return url;
}

function request(config) {
  return createPromise(function (resolve, reject) {
    var xhr = createXHR();

    if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFormData"](config.data)) {
      delete config.data['Content-Type']; // Let the browser set it
    }

    xhr.onreadystatechange = function () {
      if (!xhr || xhr.readyState !== readyStateEnum.finish) {
        return;
      }

      if (xhr.status === 0 && !(xhr.responseURL && xhr.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in xhr ? parseHeaders(xhr.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? xhr.responseText : xhr.response;
      var response = {
        data: responseData,
        status: xhr.status,
        statusText: xhr.statusText,
        headers: responseHeaders,
        config: config,
        request: xhr
      };

      if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
        // successfully
        resolve(response);
      } else {
        // unsuccessfully
        reject(response);
      }

      xhr = null;
    };

    xhr.open(config.method.toLowerCase(), buildUrl(config.url, config), true);
    xhr.send(config.data);
  });
}

function httpGet(url, data, options) {
  var config = {
    method: 'get',
    url: url,
    data: data
  };

  if (options != null) {
    _utils__WEBPACK_IMPORTED_MODULE_0__["extend"](config, options);
  }

  return request(config);
}

function httpPost(url, data, options) {
  var config = {
    method: 'post',
    url: url,
    data: data
  };

  if (options != null) {
    _utils__WEBPACK_IMPORTED_MODULE_0__["extend"](config, options);
  }

  return request(config);
}



/***/ }),

/***/ "./src/utility/index.js":
/*!******************************!*\
  !*** ./src/utility/index.js ***!
  \******************************/
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, format, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded, queryElementState, addClass, removeClass, httpGet, httpPost, Messenger, MessengerBus, isMessenger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utility/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["some"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["uppercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBlankObject", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isBlankObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isSame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFormData", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["containsStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["hasProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["orderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderByDescending", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["orderByDescending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["toNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]; });

/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ "./src/utility/node.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["getChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["clearChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["replaceNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["removeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["removeNodeBetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["insertNodeAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementLoaded", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["queryElementLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementUnloaded", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["queryElementUnloaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementState", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["queryElementState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _node__WEBPACK_IMPORTED_MODULE_1__["removeClass"]; });

/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http */ "./src/utility/http.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "httpGet", function() { return _http__WEBPACK_IMPORTED_MODULE_2__["httpGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "httpPost", function() { return _http__WEBPACK_IMPORTED_MODULE_2__["httpPost"]; });

/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message */ "./src/utility/message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _message__WEBPACK_IMPORTED_MODULE_3__["Messenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessengerBus", function() { return _message__WEBPACK_IMPORTED_MODULE_3__["MessengerBus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMessenger", function() { return _message__WEBPACK_IMPORTED_MODULE_3__["isMessenger"]; });






/***/ }),

/***/ "./src/utility/message.js":
/*!********************************!*\
  !*** ./src/utility/message.js ***!
  \********************************/
/*! exports provided: Messenger, MessengerBus, isMessenger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return Messenger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerBus", function() { return MessengerBus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMessenger", function() { return isMessenger; });
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

function isMessenger(obj) {
  return obj instanceof Messenger;
}



/***/ }),

/***/ "./src/utility/node.js":
/*!*****************************!*\
  !*** ./src/utility/node.js ***!
  \*****************************/
/*! exports provided: getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded, queryElementState, addClass, removeClass */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
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

        if (callbacks.onEnter != null) {
          callbacks.onEnter.call(callbacks);
        }
      }
    } else {
      if (loaded) {
        loaded = false;

        if (callbacks.onLeave != null) {
          callbacks.onLeave.call(callbacks);
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

function addClass(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

function removeClass(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}



/***/ }),

/***/ "./src/utility/utils.js":
/*!******************************!*\
  !*** ./src/utility/utils.js ***!
  \******************************/
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, format */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFormData", function() { return isFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return containsStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return hasProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return setProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return orderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByDescending", function() { return orderByDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var debugMode = true,
    toString = Object.prototype.toString,
    getPrototypeOf = Object.getPrototypeOf;

function forEach(obj, action, ignoreOwn) {
  if (isArray(obj)) {
    for (var index = 0; index < obj.length; index++) {
      if (action(obj[index], index)) {
        return;
      }
    }
  } else if (isObject(obj)) {
    for (var p in obj) {
      if (ignoreOwn || obj.hasOwnProperty(p)) {
        if (action(obj[p], p)) {
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
    forEach(obj, function (value, key) {
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
  forEach(source, function (value, key) {
    target[key] = value;
  });
}

function deepMerge(target, source) {
  forEach(source, function (value, key) {
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

function isFormData(value) {
  return typeof FormData !== 'undefined' && value instanceof FormData;
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
    forEach(target, function (value3, key3) {
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
    forEach(target, function (value3, key3) {
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
      forEach(target, function (value3, key3) {
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

function toNumber(value) {
  var n = parseFloat(value);
  return isNaN(n) ? value : n;
}

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

function format() {
  if (arguments.length === 0) {
    return;
  }

  var match,
      matchText,
      index,
      text = arguments[0],
      placeHoder = /\{(\d+)\}/g;

  while (match = placeHoder.exec(text)) {
    matchText = match[0];
    index = Number.parseInt(match[1]) + 1;

    if (arguments.length <= index) {
      throw new Error('format item ' + index + 'is not defined');
    }

    text = text.substring(0, match.index) + arguments[index] + text.substring(match.index + matchText.length);
  }

  return text;
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
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/core/index.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
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
        beforeViewInit: '',
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
      return _utility__WEBPACK_IMPORTED_MODULE_0__["hasProperty"](this, prop, true);
    }
  }, {
    key: "$initAttr",
    value: function $initAttr(prop, value) {
      var oldValue = _utility__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this, prop, true);

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.beforeAttrChange)) {
        this.beforeAttrChange.call(this, prop, value, oldValue);
      }

      _utility__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this, prop, value, true);

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.afterAttrChange)) {
        this.afterAttrChange.call(this, prop, value, oldValue);
      }
    }
  }, {
    key: "$initAttrDone",
    value: function $initAttrDone() {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onInit)) {
        this.onInit.call(this);
      }
    }
  }, {
    key: "$setAttr",
    value: function $setAttr(prop, value) {
      var oldValue = _utility__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this, prop, true);

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.beforeAttrChange)) {
        this.beforeAttrChange.call(this, prop, value, oldValue);
      }

      _utility__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.$proxy, prop, value, true);

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.afterAttrChange)) {
        this.afterAttrChange.call(this, prop, value, oldValue);
      }
    }
  }, {
    key: "$listen",
    value: function $listen(e, fn) {
      var messenger = _utility__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this, e, true);

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isMessenger"](messenger)) {
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
        if (_utility__WEBPACK_IMPORTED_MODULE_0__["isString"](meta.template)) {
          resolve(meta.template);
        } else if (_utility__WEBPACK_IMPORTED_MODULE_0__["isString"](meta.templateUrl)) {
          _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].service('$templateCache').getTplByUrl(meta.templateUrl).then(function (tpl) {
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

      if (spaceName && _utility__WEBPACK_IMPORTED_MODULE_0__["isObject"](using)) {
        _utility__WEBPACK_IMPORTED_MODULE_0__["some"](using, function (key, value) {
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
          return _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].containsComponent(self.$using(name));
        },
        createComponent: function createComponent(name) {
          return _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].createComponent(self.$using(name));
        },
        containsDirective: function containsDirective(name) {
          return _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].containsDirective(self.$using(name));
        },
        createDirective: function createDirective(name) {
          return _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].createDirective(self.$using(name));
        }
      };
    }
  }, {
    key: "$hasView",
    value: function $hasView() {
      return _utility__WEBPACK_IMPORTED_MODULE_0__["isArray"](this.$$childElements);
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
          fragment = Object(_parser__WEBPACK_IMPORTED_MODULE_2__["compile"])(this.$getTemplate(sync), this.$makeCompileOptions())(this);
        }

        return fragment;
      }

      return new Promise(function (resolve) {
        if (self.$hasView()) {
          resolve(self.$showView());
        } else {
          self.$getTemplate().then(function (html) {
            fragment = Object(_parser__WEBPACK_IMPORTED_MODULE_2__["compile"])(html, self.$makeCompileOptions())(self);
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

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isString"](selectorOrElement)) {
        element = document.querySelector(selectorOrElement);
      } else {
        element = selectorOrElement;
      }

      if (!options.append) {
        _utility__WEBPACK_IMPORTED_MODULE_0__["clearChildNodes"](element);
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
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.afterViewMount)) {
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
      return Object(_parser__WEBPACK_IMPORTED_MODULE_2__["compute"])(exp, this);
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
      var component = _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].createComponent(childCmp);
      this.$$childComponents.push(component);
      component.$$parentComponent = this;
      return component;
    }
  }, {
    key: "$inheritCmp",
    value: function $inheritCmp(parentCmp) {
      var self = this;
      Object.setPrototypeOf(self, _utility__WEBPACK_IMPORTED_MODULE_0__["object"](parentCmp)); // todo - resolve issue calling parent component's lifecycle hooks

      _utility__WEBPACK_IMPORTED_MODULE_0__["forEach"](self.$hooks(), function (handler, hook) {
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

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
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
      this.$$observer = new _core__WEBPACK_IMPORTED_MODULE_1__["Observer"]();
      this.$$disposers = [];

      if (meta != null) {
        this.$setMeta(meta);
      }

      _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].injectServices(this);
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

      if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onEnter) || _utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onLeave)) {
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

            if (self.onEnter != null) {
              self.onEnter.call(self);
            }
          }
        } else {
          if (self.$elementloaded) {
            self.$elementloaded = false;

            if (self.onLeave != null) {
              self.onLeave.call(self);
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
    key: "$getAttrValue",
    value: function $getAttrValue(attrName) {
      var attrNode = this.$element.getAttribute(attrName);

      if (attrNode == null) {
        return '';
      }

      return attrNode.binding.value;
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
/*! exports provided: typeConst, injector, Injector, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, component, directive, filter, service, bootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilter", function() { return isFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isService", function() { return isService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "service", function() { return _service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeConst", function() { return _injector__WEBPACK_IMPORTED_MODULE_1__["typeConst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return _injector__WEBPACK_IMPORTED_MODULE_1__["injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return _injector__WEBPACK_IMPORTED_MODULE_1__["Injector"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "./src/view/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_2__["Component"]; });

/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive */ "./src/view/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directive", function() { return _directive__WEBPACK_IMPORTED_MODULE_3__["Directive"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter */ "./src/view/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_4__["Filter"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./src/view/service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return _service__WEBPACK_IMPORTED_MODULE_5__["Service"]; });








function namespace(ns) {
  return {
    component: function component(name, def) {
      def.namespace = ns;
      return _component(name, def);
    },
    directive: function directive(name, def) {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
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
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
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
  return _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].buildConstructor(name, def, {
    contractType: _injector__WEBPACK_IMPORTED_MODULE_1__["typeConst"].component,
    superClass: makeConstructor(_component__WEBPACK_IMPORTED_MODULE_2__["Component"])
  });
}

function _directive(name, def) {
  if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
    def = {
      methods: {
        onInsert: def,
        onUpdate: def
      }
    };
  }

  return _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].buildConstructor(name, def, {
    contractType: _injector__WEBPACK_IMPORTED_MODULE_1__["typeConst"].directive,
    superClass: makeConstructor(_directive__WEBPACK_IMPORTED_MODULE_3__["Directive"])
  });
}

function _filter(name, def) {
  if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
    def = {
      methods: {
        onExecute: def
      }
    };
  }

  return _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].buildConstructor(name, def, {
    contractType: _injector__WEBPACK_IMPORTED_MODULE_1__["typeConst"].filter,
    superClass: makeConstructor(_filter__WEBPACK_IMPORTED_MODULE_4__["Filter"])
  });
}

function _service(name, def) {
  return _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].buildConstructor(name, def, {
    contractType: _injector__WEBPACK_IMPORTED_MODULE_1__["typeConst"].service,
    superClass: makeConstructor(_service__WEBPACK_IMPORTED_MODULE_5__["Service"])
  });
}

function isComponent(obj) {
  return obj instanceof _component__WEBPACK_IMPORTED_MODULE_2__["Component"];
}

function isDirective(obj) {
  return obj instanceof _directive__WEBPACK_IMPORTED_MODULE_3__["Directive"];
}

function isFilter(obj) {
  return obj instanceof _filter__WEBPACK_IMPORTED_MODULE_4__["Filter"];
}

function isService(obj) {
  return obj instanceof _service__WEBPACK_IMPORTED_MODULE_5__["Service"];
}

function bootstrap(selectorOrElement) {
  var element, tpl;

  if (_utility__WEBPACK_IMPORTED_MODULE_0__["isString"](selectorOrElement)) {
    element = document.querySelector(selectorOrElement);
  } else {
    element = selectorOrElement;
  }

  tpl = element.innerHTML;
  new _component__WEBPACK_IMPORTED_MODULE_2__["Component"]({
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
        _utility_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](meta.inject, function (value, key) {
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbmUvLi9zcmMvYW5pbWF0aW9uL2FuaW1hdGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9hbmltYXRpb24vYW5pbWF0aW9uLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvYW5pbWF0aW9uL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2NkYXRhc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZG9jdHlwZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2ZyYWdtZW50LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9oYW5kbGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL3Byb3h5LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS90ZXh0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RlY29yYXRvci9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvYmluZC1jbXAtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLWNtcC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2VtYmVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2hpZGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvaWYuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvbmFtZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc2hvdy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9jaGVja2VkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3JlYWRvbmx5LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3N0YXRlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL2NsYXNzLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3Mtb2RkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL2NsYXNzLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUtb2RkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC13aGVuLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9odG1sLWxleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2h0bWwtcGFyc2VyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2xleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL251bGwtb2JqZWN0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL3BhcnNlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3NlcnZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL21vZGVsLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL3RlbXBsYXRlLWNhY2hlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9odHRwLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvbm9kZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9pbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvc2VydmljZS5qcyJdLCJuYW1lcyI6WyJUUkFOU0lUSU9OIiwiQU5JTUFUSU9OIiwidHJhbnNpdGlvblByb3AiLCJ0cmFuc2l0aW9uRW5kRXZlbnQiLCJhbmltYXRpb25Qcm9wIiwiYW5pbWF0aW9uRW5kRXZlbnQiLCJ0cmFuc2Zvcm1SRSIsIkFuaW1hdGVTZXJ2aWNlIiwic2VydmljZSIsIm5hbWVzcGFjZSIsInNlbGVjdG9yIiwidm5vZGUiLCJkb0VudGVyIiwiZWwiLCJodG1sRWxlbWVudCIsInV0aWxzIiwiX2xlYXZlQ2IiLCJjYW5jZWxsZWQiLCJfZW50ZXJDYiIsIm5vZGVUeXBlIiwiYW5pbWF0aW9uIiwicmVzb2x2ZUFuaW1hdGlvbkNvbnRleHQiLCJkYXRhIiwicmVzb2x2ZUFuaW1hdGlvbiIsInNlbGYiLCJ0eXBlIiwiZW50ZXJDbGFzcyIsImVudGVyVG9DbGFzcyIsImVudGVyQWN0aXZlQ2xhc3MiLCJkdXJhdGlvbiIsImV4cGxpY2l0RW50ZXJEdXJhdGlvbiIsImVudGVyIiwiY2IiLCJvbmNlIiwicmVtb3ZlQW5pbWF0aW9uQ2xhc3MiLCJlbnRlckNhbmNlbGxlZCIsImFmdGVyRW50ZXIiLCJiZWZvcmVFbnRlciIsImFkZEFuaW1hdGlvbkNsYXNzIiwibmV4dEZyYW1lIiwiaXNWYWxpZER1cmF0aW9uIiwic2V0VGltZW91dCIsIndoZW5BbmltYXRpb25FbmRzIiwiZG9MZWF2ZSIsImxlYXZlQ2xhc3MiLCJsZWF2ZVRvQ2xhc3MiLCJsZWF2ZUFjdGl2ZUNsYXNzIiwiZXhwbGljaXRMZWF2ZUR1cmF0aW9uIiwibGVhdmUiLCJsZWF2ZUNhbmNlbGxlZCIsImFmdGVyTGVhdmUiLCJkZWxheUxlYXZlIiwicGVyZm9ybUxlYXZlIiwiYmVmb3JlTGVhdmUiLCJjb25maWciLCJyZXMiLCJjc3MiLCJhdXRvQ3NzQW5pbWF0aW9uIiwibmFtZSIsImZuIiwiY2FsbGVkIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbHMiLCJhbmltYXRpb25DbGFzc2VzIiwiX2FuaW1hdGlvbkNsYXNzZXMiLCJpbmRleE9mIiwicHVzaCIsImV4cGVjdGVkVHlwZSIsInJlZiIsImdldEFuaW1hdGlvbkluZm8iLCJ0aW1lb3V0IiwicHJvcENvdW50IiwiZXZlbnQiLCJlbmRlZCIsImVuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkVuZCIsImUiLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGVzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRyYW5zaXRpb25EZWxheXMiLCJzcGxpdCIsInRyYW5zaXRpb25EdXJhdGlvbnMiLCJ0cmFuc2l0aW9uVGltZW91dCIsImdldFRpbWVvdXQiLCJhbmltYXRpb25EZWxheXMiLCJhbmltYXRpb25EdXJhdGlvbnMiLCJhbmltYXRpb25UaW1lb3V0IiwibGVuZ3RoIiwiTWF0aCIsIm1heCIsImhhc1RyYW5zZm9ybSIsInRlc3QiLCJkZWxheXMiLCJkdXJhdGlvbnMiLCJjb25jYXQiLCJtYXAiLCJkIiwiaSIsInRvTXMiLCJzIiwiTnVtYmVyIiwic2xpY2UiLCJ2YWx1ZSIsImlzTmFOIiwiZWxlbWVudCIsImFuaW1hdGlvbnMiLCJnZXREaXJlY3RpdmVzIiwiZmlsdGVyIiwiZGlyIiwiU2VydmljZSIsIkFuaW1hdGlvbiIsImRpcmVjdGl2ZSIsIiRwcmlvcml0eSIsIkRpcmVjdGl2ZSIsImV2ZW50VGV4dCIsImRvbUV2ZW50cyIsIkF0dHJOb2RlIiwiVk5vZGVUeXBlIiwiYXR0cmlidXRlIiwicXVvdGUiLCJvcmlnaW4iLCJpc0V2ZW50IiwiaXNCaW5kaW5nIiwiaXNEb21FdmVudCIsImlzRGlyZWN0aXZlIiwib3duZXJFbGVtZW50Iiwib3duZXJDb21wb25lbnQiLCJiaW5kaW5nIiwiQmluZGluZyIsInByaW9yaXR5Iiwia2V5Iiwibm9kZVZhbHVlIiwiY29tcGlsZSIsIm9wdGlvbnMiLCJhY3Rpb24iLCJvYnNlcnZlIiwibm9kZU5hbWUiLCJzdGFydHNXaXRoIiwic3Vic3RyIiwic2V0T3V0cHV0IiwiYmluZCIsImNvbnRhaW5zRGlyZWN0aXZlIiwiY3JlYXRlRGlyZWN0aXZlIiwiJGJpbmROb2RlIiwiJG91dHB1dCIsIkVycm9yIiwiJGNvbXBpbGUiLCJzY29wZSIsInNldFNjb3BlIiwiY29tcHV0ZSIsImxvY2FscyIsIiRldmVudCIsIiRhcmdzIiwiJGVsZW1lbnQiLCIkbGlzdGVuIiwiYXJncyIsIiQkY2hpbGREaXJlY3RpdmVzIiwiJHNldEJpbmRpbmciLCIkaGFzQXR0ciIsIiRpbml0QXR0ciIsInNldEF0dHJpYnV0ZSIsInVwZGF0ZSIsImhhc0NoYW5nZSIsIiRkZXRlY3QiLCJkZXRlY3QiLCIkdXBkYXRlIiwiJHNldEF0dHIiLCIkaW5zZXJ0IiwiJCRtZXRhIiwiaXNGcm9tRGlyZWN0aXZlIiwiZGVzdHJveSIsIiRkZXN0cm95IiwiJGRpc3Bvc2UiLCJkaXNwb3NlIiwiVk5vZGUiLCJ0ZXh0IiwiY2RhdGFTZWN0aW9uIiwiZW50aXR5UmVmZXJlbmNlIiwiZW50aXR5IiwicHJvY2Vzc2luZ0luc3RydWN0aW9uIiwiY29tbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRUeXBlIiwiZG9jdW1lbnRGcmFnbWVudCIsIm5vdGF0aW9uIiwiY29ubmVjdGlvbiIsImNoaWxkTm9kZXMiLCJwYXJlbnROb2RlIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwib3duZXJEb2N1bWVudCIsImNoaWxkIiwiZm9yRWFjaCIsImluZGV4IiwiJGJ1aWxkU2libGluZyIsInJlbW92ZUNoaWxkIiwiJHJlbW92ZSIsIiRjbGVhclBhcmVudEFuZFNpYmxpbmciLCJjb21waWxlT3B0aW9ucyIsInJlZkNoaWxkIiwibmV3Q2hpbGQiLCJzcGxpY2UiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsIm5vdGlmeUNvbXBpbGVkIiwibGluayIsIm5vdGlmeUxpbmtlZCIsIkV4cE5vZGUiLCJvbGRWYWx1ZSIsImlzRXhwIiwic2VnbWVudHMiLCJyaWdodFN0ciIsIm91dHB1dCIsInVud2F0Y2hlcyIsImNoYW5nZSIsIk1lc3NlbmdlciIsImV4cCIsImxlZnRTdHIiLCJwYXR0ZXJuIiwibGFzdEluZGV4IiwibWF0Y2giLCJleGVjIiwic3Vic3RyaW5nIiwic2VnbWVudCIsImFzc2lnbm1lbnQiLCJwYXJzZUFzc2lnbm1lbnQiLCJvYmoiLCJwcm9wIiwidG9Qcm94eSIsIiR3YXRjaCIsImRlZmVyIiwiZmlyZSIsImNhbmNlbFRpbWVvdXQiLCJ0aW1lb3V0SWQiLCJjYWxsIiwiY2xlYXJUaW1lb3V0IiwibGlzdGVuIiwib24iLCJvZmYiLCJ1bndhdGNoIiwiQ0RhdGFTZWN0aW9uTm9kZSIsIkNvbW1lbnROb2RlIiwiY3JlYXRlQ29tbWVudCIsIkNvbm5lY3Rpb25Ob2RlIiwibGlua2VyIiwib25JbnNlcnQiLCJvbkRldGVjdCIsIm9uSGFzQ2hhbmdlIiwib25VcGRhdGUiLCJvbkRlc3Ryb3kiLCJEb2N1bWVudFR5cGVOb2RlIiwiRG9jdW1lbnROb2RlIiwiRWxlbWVudE5vZGUiLCJhdHRyaWJ1dGVzIiwiY29tcG9uZW50Iiwic2VsZkNsb3NlZCIsImlzQ29tcG9uZW50IiwiYXR0ciIsIm1hdGNoZXMiLCJiZWxvbmdUbyIsInNldFZhbHVlIiwiYXR0clRwbCIsImNoaWxkVHBsIiwiZ2V0T3V0ZXJUcGwiLCJ0cGwiLCJwYXJzZSIsImNsZWFyQ2hpbGROb2RlcyIsInJlc3VsdCIsInNvbWUiLCJnZXREaXJlY3RpdmUiLCJpdGVtIiwiY29udGFpbnNDb21wb25lbnQiLCJjcmVhdGVFbGVtZW50IiwiJGNyZWF0ZUNoaWxkQ21wIiwiJGluaXRBdHRyRG9uZSIsIiRtb3VudCIsImlzRnJvbUNvbXBvbmVudCIsInJlbW92ZUh0bWxFbGVtZW50IiwiRG9jdW1lbnRGcmFnbWVudE5vZGUiLCJwcm9wQ2hhbmdpbmdNc2ciLCJwcm9wQ2hhbmdlZE1zZyIsInRhcmdldEtleSIsImdldFRhcmdldCIsImlzT2JqZWN0IiwiR2V0UHJvcGVydHlIYW5kbGVyIiwiZGVlcFByb3h5IiwidmFyaWFibGVzIiwiZnVsbFRhcmdldEtleSIsImZ1bGxLZXkiLCJQcm94eSIsImV4aXN0ZWQiLCJTZXRQcm9wZXJ0eUhhbmRsZXIiLCJpc0FycmF5IiwidmFsaWRhdGlvbiIsInZhbGlkIiwibmV3VmFsdWUiLCJBY2Nlc3NQcm9wZXJ0eUhhbmRsZXIiLCJQcm9wZXJ0eU9ic2VydmVyIiwicGxhaW5NYXAiLCJNYXAiLCJyZWdleE1hcCIsImlzUmVnRXhwIiwiaGFzIiwic2V0IiwiYmVmb3JlQ2hhbmdlZCIsImdldCIsImFjdGlvbnMiLCJjbGVhciIsIk9iamVjdE9ic2VydmVyIiwib25jaGFuZ2luZyIsImZpcmVDaGFuZ2luZyIsIm9uY2hhbmdlZCIsImZpcmVDaGFuZ2VkIiwib2ZmQ2hhbmdlIiwib2JqTWFwIiwiTWVtYmVyV2F0Y2hlciIsIm9ic2VydmVyIiwiaWQiLCJjaGFuZ2VLZXkiLCJuZXdUYXJnZXQiLCJzdG9wIiwiRGV0ZWN0b3IiLCJxdWV1ZSIsImRpZ2VzdCIsImNsZWFyRGVmZXIiLCJkZXRlY3RvciIsImV4ZWN1dGUiLCJFeHBXYXRjaGVyIiwicmVtb3ZlIiwiV2F0Y2hlciIsIm1lbWJlcnMiLCJkaWdlc3RzIiwiYXN0IiwicGFyc2VFeHAiLCJoYXNDQyIsImRpcnR5Q2hlY2siLCJjb2xsZWN0TWVtYmVycyIsInVwZGF0ZU1lbWJlciIsInN0YXJ0RGlnZXN0IiwibWVtYmVyIiwic3RhcnRNZW1iZXIiLCJzdGFydCIsIm1lbWJlcldhdGNoZXIiLCJPYnNlcnZlciIsIndhdGNoZXJzIiwid2F0Y2hlciIsImNyZWF0ZVdhdGNoZXIiLCJyZW1vdmVXYXRjaGVyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiVGV4dE5vZGUiLCJyZW5kZXIiLCJjcmVhdGVUZXh0Tm9kZSIsIm1ldGEiLCJpbmplY3RvciIsInJlZ2lzdGVyQ29uc3RydWN0b3IiLCJ0eXBlQ29uc3QiLCJCaW5kQ21wT3B0aW9uc0RpcmVjdGl2ZSIsInVwZGF0ZU9wdGlvbnMiLCJjbGVhck9wdGlvbnMiLCIkYmluZGluZyIsIkJpbmRDbXBEaXJlY3RpdmUiLCJuYW1lRGlyIiwidmlldyIsImluaXQiLCJiaW5kQ21wT3B0aW9uc0RpciIsIm9uSW5pdCIsIiRodG1sRWxlbWVudCIsInNldENtcCIsIkJpbmREaXJlY3RpdmUiLCJpbm5lclRleHQiLCJFbWJlZERpcmVjdGl2ZSIsImVtYmVkVHBsIiwiZ2V0RW1iZWRUcGwiLCJzZXRJbm5lclRwbCIsIkhpZGVEaXJlY3RpdmUiLCJpbmplY3QiLCIkYW5pbWF0ZSIsInRvZ2dsZSIsInN0eWxlIiwiZGlzcGxheSIsIklmRGlyZWN0aXZlIiwiaHRtbENvbW1lbnQiLCJNb2RlbERpcmVjdGl2ZSIsIiR2aWV3VmFsdWUiLCIkbW9kZWxWYWx1ZSIsIiRwYXJzZXJzIiwiJGZvcm1hdHRlcnMiLCIkdmlld0NoYW5nZUxpc3RlbmVycyIsIiR2YWxpZGF0b3JzIiwiJGZlZWRiYWNrIiwiJHByaXN0aW5lIiwiJGRpcnR5IiwiJHZhbGlkIiwiJGludmFsaWQiLCJzZXRWaWV3VmFsdWUiLCIkY29tcG9uZW50Iiwic2V0TW9kZWxWYWx1ZSIsIm5ld3ZhbHVlIiwidmlld1ZhbHVlIiwidmFsaWRhdG9yIiwiZm9ybWF0dGVyIiwidXBkYXRlQ3NzIiwidXBkYXRlU3RhdGUiLCJzZXREaXJ0eSIsImxpc3RlbmVyIiwibW9kZWxWYWx1ZSIsInBhcnNlciIsImFzc2lnbiIsImVsZSIsImNzc0NsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlydHkiLCJwcmlzdGluZSIsImludmFsaWQiLCJzdGF0ZSIsImZlZWRiYWNrIiwiTmFtZURpcmVjdGl2ZSIsInByb3h5IiwiJHNjb3BlIiwiY21wIiwiUmVwZWF0RGlyZWN0aXZlIiwiaXRlbUV4cCIsIml0ZW1zRXhwIiwiaXRlbVRlbXBsYXRlIiwiZGF0YUl0ZW1zIiwiY21wSXRlbXMiLCJoZWFkZXIiLCJmb290ZXIiLCJhcmciLCIkYXR0ciIsInJlbW92ZUF0dHJpYnV0ZSIsImNyZWF0ZUNvbm5lY3Rpb24iLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpdGVtcyIsIiRldmFsIiwic2V0RGF0YUl0ZW1zIiwicmVwbGFjZUNoaWxkIiwiY2hpbGRTY29wZSIsImNtcEl0ZW0iLCJkYXRhSXRlbSIsImZpbHRlcnMiLCJuZXdDbXBJdGVtcyIsImdldENtcEl0ZW0iLCJDb21wb25lbnQiLCJ0ZW1wbGF0ZSIsIiRpbmhlcml0Q21wIiwiJHJlbmRlciIsInJlcGVhdEl0ZW0iLCJTaG93RGlyZWN0aXZlIiwiQ2hlY2tlZERpcmVjdGl2ZSIsIlN0YXRlRGlyZWN0aXZlIiwiRGlzYWJsZWREaXJlY3RpdmUiLCJSZWFkb25seURpcmVjdGl2ZSIsIlNlbGVjdGVkRGlyZWN0aXZlIiwiYXR0ck5hbWUiLCJwZXJmb3JtIiwiaGFzQXR0cmlidXRlIiwiQ2xhc3NFdmVuRGlyZWN0aXZlIiwiJGluZGV4IiwiQ2xhc3NEaXJlY3RpdmUiLCJDbGFzc09kZERpcmVjdGl2ZSIsImluaXRpYWxDbGFzc0xpc3QiLCJwYXJzZUNsYXNzIiwic2V0Q2xhc3MiLCJhcnIiLCJ1bndhdGNoQXJyYXkiLCJ0cmltIiwiY2xhc3NUZXh0IiwiJGdldEF0dHJWYWx1ZSIsInRleHRUb0FycmF5Iiwic2tpcCIsIm5ld0FyciIsIndhdGNoQXJyYXkiLCJzZXRDbGFzc0xpc3QiLCJTdHlsZUV2ZW5EaXJlY3RpdmUiLCJTdHlsZURpcmVjdGl2ZSIsIlN0eWxlT2RkRGlyZWN0aXZlIiwiaW5pdGlhbFN0eWxlIiwicGFyc2VTdHlsZSIsInNldFN0eWxlIiwidW53YXRjaE9iaiIsInRleHRUb09iamVjdCIsImxpc3QiLCJzdWJJdGVtcyIsIm5ld1N0eWxlIiwid2F0Y2hPYmoiLCJhcHBseVN0eWxlIiwiU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSIsImlzTWF0Y2giLCJzd2l0Y2hXaGVuRGlycyIsInZFbGUiLCJ3aGVuRGlyIiwiaW5pdFN3aXRjaFdoZW5EaXJzIiwiaXNNYXRjaENoYW5nZWQiLCJTd2l0Y2hXaGVuRGlyZWN0aXZlIiwic3dpdGNoRGlyIiwiaW5pdFN3aXRjaERpciIsInZhbHVlQ2hhbmdlZCIsIlN3aXRjaERpcmVjdGl2ZSIsIkh0bWxMZXhlciIsIkxleGVyIiwiaXNWYWxpZElkZW50aWZpZXJTdGFydCIsImNoIiwiaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSIsImNwIiwiaXNOdW1iZXIiLCJleHBlY3RTdHJpbmciLCJzdHIiLCJudW0iLCJyZWFkQ29tbWVudCIsImJlZ2luIiwic3RyaW5nIiwicmF3U3RyaW5nIiwiY2hhckF0IiwidG9rZW5zIiwidGhyb3dFcnJvciIsInJlYWRUZXh0IiwiY2gyIiwicGVlayIsImlzSWRlbnRpZmllclN0YXJ0IiwidGV4dFRhZyIsInJlYWRUYWciLCJjbG9zaW5nIiwiZG9jdHlwZSIsInRhZyIsInJlYWRJZGVudCIsInBlZWtNdWx0aWNoYXIiLCJyZWFkU3RyaW5nIiwiaXNXaGl0ZXNwYWNlIiwiZXF1YWwiLCJsZXgiLCJhbGxvd0RvY1R5cGUiLCJjaDMiLCJIdG1sUGFyc2VyIiwiUGFyc2VyIiwibGV4ZXIiLCJmYXJnbWVudCIsInRva2VuIiwiY3VycmVudCIsIiRwdXNoQ2hpbGQiLCJuZXh0IiwiZG9jVHlwZSIsImlkZW50aWZpZXIiLCJhdHRycyIsInAiLCIkcHVzaEF0dHJpYnV0ZSIsImNoaWxkRWxlbWVudHMiLCJlbGVzIiwiY29uc3RhbnQiLCJwYXJzZU9wdGlvbnMiLCJpc0lkZW50aWZpZXJDb250aW51ZSIsImxpdGVyYWxzIiwidW5kZWZpbmVkIiwiaHRtbCIsImRlZmF1bHRzIiwiY3JlYXRlQ29tcG9uZW50Iiwic2V0dGluZ3MiLCJhc3ROb2RlcyIsImFzdE5vZGUiLCIkJGNoaWxkRWxlbWVudHMiLCJjcmVhdGVGaWx0ZXIiLCJyZXBsYWNlIiwibWVtYmVyRXhwIiwiZ2V0TWVtYmVyRXhwcmVzc2lvbiIsIm9iamVjdCIsInByb3BlcnR5IiwiT1BFUkFUT1JTIiwib3BlcmF0b3JUZXh0IiwiRVNDQVBFIiwib3BlcmF0b3IiLCJyZWFkTnVtYmVyIiwiaXMiLCJvcDEiLCJvcDIiLCJvcDMiLCJjaGFycyIsImNvZGVQb2ludEF0IiwiY2hhckNvZGVBdCIsImNwMSIsImNwMiIsImlzRXhwT3BlcmF0b3IiLCJlcnJvciIsImNvbFN0ciIsIm51bWJlciIsInBlZWtDaCIsImVzY2FwZSIsImhleCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50IiwicmVwIiwiTnVsbE9iamVjdCIsIkFTVCIsIlByb2dyYW0iLCJFeHByZXNzaW9uU3RhdGVtZW50IiwiQXNzaWdubWVudEV4cHJlc3Npb24iLCJDb25kaXRpb25hbEV4cHJlc3Npb24iLCJMb2dpY2FsRXhwcmVzc2lvbiIsIkJpbmFyeUV4cHJlc3Npb24iLCJVbmFyeUV4cHJlc3Npb24iLCJDYWxsRXhwcmVzc2lvbiIsIk1lbWJlckV4cHJlc3Npb24iLCJJZGVudGlmaWVyIiwiTGl0ZXJhbCIsIkFycmF5RXhwcmVzc2lvbiIsIlByb3BlcnR5IiwiT2JqZWN0RXhwcmVzc2lvbiIsIkFzdE5vZGUiLCJjb250ZXh0IiwiUHJvZ3JhbU5vZGUiLCJFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSIsIk1lbWJlckV4cHJlc3Npb25Ob2RlIiwiQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIiwibGVmdCIsInJpZ2h0IiwiYXNzaWdubWVudExlZnQiLCJDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlIiwiYWx0ZXJuYXRlIiwiY29uc2VxdWVudCIsIkxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJCaW5hcnlFeHByZXNzaW9uTm9kZSIsIlVuYXJ5RXhwcmVzc2lvbk5vZGUiLCJwcmVmaXgiLCJMaXRlcmFsTm9kZSIsInRvVGV4dCIsIkNhbGxFeHByZXNzaW9uTm9kZSIsImNhbGxlZSIsImFyZ1ZhbHVlcyIsImZpbHRlcklucyIsImlzRmlsdGVyIiwiJGV4ZWN1dGUiLCJjb21wdXRlZCIsImFsbG93TnVsbCIsIklkZW50aWZpZXJOb2RlIiwib2JqTm9kZSIsInByb3BlcnR5S2V5IiwiQXJyYXlFeHByZXNzaW9uTm9kZSIsIlByb3BlcnR5Tm9kZSIsImtpbmQiLCJPYmplY3RFeHByZXNzaW9uTm9kZSIsInByb3BlcnRpZXMiLCJkZWYiLCJpc0Fzc2lnbmFibGUiLCJtc2ciLCJwcm9ncmFtIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImV4cGVjdCIsImZpbHRlckNoYWluIiwiZXhwcmVzc2lvbiIsInRlcm5hcnkiLCJsb2dpY2FsT1IiLCJjb25zdW1lIiwibG9naWNhbEFORCIsImVxdWFsaXR5IiwicmVsYXRpb25hbCIsImFkZGl0aXZlIiwibXVsdGlwbGljYXRpdmUiLCJ1bmFyeSIsInByaW1hcnkiLCJhcnJheURlY2xhcmF0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJwZWVrQWhlYWQiLCJwYXJzZUFyZ3VtZW50cyIsImJhc2VFeHByZXNzaW9uIiwiaWRlbnRpZmllcnMiLCJlbnRpcmVOYW1lIiwiam9pbiIsInBlZWtUb2tlbiIsImUxIiwiZTIiLCJlMyIsImU0IiwidCIsInNoaWZ0IiwiTW9kZWxPcHRpb25zU2VydmljZSIsIlRlbXBsYXRlQ2FjaGVTZXJ2aWNlIiwidHBsQ2FjaGUiLCJwcm9taXNlQ2FjaGUiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsImh0dHBHZXQiLCJ0aGVuIiwicmVhZHlTdGF0ZUVudW0iLCJvcGVuZWQiLCJzZW50IiwicmVjZWl2ZWQiLCJmaW5pc2giLCJjcmVhdGVYSFIiLCJYTUxIdHRwUmVxdWVzdCIsImNyZWF0ZVByb21pc2UiLCJyZWplY3QiLCJhZGRVcmxQYXJhbSIsImVuY29kZVVSSUNvbXBvbmVudCIsInBhcnNlSGVhZGVycyIsImhlYWRlcnMiLCJwYXJzZWQiLCJ2YWwiLCJsaW5lIiwidG9Mb3dlckNhc2UiLCJpZ25vcmVEdXBsaWNhdGVPZiIsImJ1aWxkVXJsIiwibWV0aG9kIiwicmVxdWVzdCIsInhociIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZVVSTCIsInJlc3BvbnNlSGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInJlc3BvbnNlRGF0YSIsInJlc3BvbnNlVHlwZSIsInJlc3BvbnNlVGV4dCIsInJlc3BvbnNlIiwic3RhdHVzVGV4dCIsIm9wZW4iLCJzZW5kIiwiaHR0cFBvc3QiLCJoYW5kbGVycyIsInJldHVyblZhbHVlIiwiTWVzc2VuZ2VyQnVzIiwibWVzc2VuZ2VycyIsImlzTWVzc2VuZ2VyIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGUiLCJBcnJheSIsInJlcGxhY2VOb2RlIiwicmVmTm9kZSIsIm5ld05vZGUiLCJyZW1vdmVOb2RlIiwicmVtb3ZlTm9kZUJldHdlZW4iLCJiZWdpbk5vZGUiLCJlbmROb2RlIiwiaW5zZXJ0Tm9kZUFmdGVyIiwicXVlcnlFbGVtZW50TG9hZGVkIiwiY2FsbGJhY2siLCJjYW5jZWxUb2tlbiIsInF1ZXJ5IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJxdWVyeUVsZW1lbnRVbmxvYWRlZCIsInF1ZXJ5RWxlbWVudFN0YXRlIiwiY2FsbGJhY2tzIiwibG9hZGVkIiwib25FbnRlciIsIm9uTGVhdmUiLCJhZGRDbGFzcyIsImMiLCJjdXIiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVDbGFzcyIsInRhciIsImRlYnVnTW9kZSIsInRvU3RyaW5nIiwiZ2V0UHJvdG90eXBlT2YiLCJpZ25vcmVPd24iLCJjb3B5IiwiZGVlcCIsIm9iakluZGV4IiwiaXNCb29sZWFuIiwibmV3T2JqIiwiZXh0ZW5kIiwiZGVlcE1lcmdlIiwicGxhaW5NZXJnZSIsIm1lcmdlIiwic291cmNlIiwibyIsIkYiLCJpbmhlcml0UHJvdG90eXBlIiwic3ViVHlwZSIsInN1cGVyVHlwZSIsImNvbnN0cnVjdG9yIiwiaW5oZXJpdCIsImxvd2VyY2FzZSIsImlzU3RyaW5nIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJpc1VuZGVmaW5lZCIsImlzRGVmaW5lZCIsImlzTWFwIiwiaXNCbGFua09iamVjdCIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc0Zvcm1EYXRhIiwiRm9ybURhdGEiLCJpc1NhbWUiLCJvYmoxIiwib2JqMiIsInNhbWUiLCJkZWJ1ZyIsImxvZyIsImNvbnNvbGUiLCJjb250YWlucyIsImNvbnRhaW5zU3RyIiwiaWdub3JlQ2FzZSIsImhhc1Byb3BlcnR5Iiwia2V5MiIsImhhc1Byb3AiLCJrZXlzIiwidmFsdWUzIiwia2V5MyIsImdldFByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJvcmRlckJ5IiwiZ2V0dGVyIiwiZ2V0VmFsdWUiLCJzb3J0IiwiYSIsImIiLCJvcmRlckJ5RGVzY2VuZGluZyIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJmb3JtYXQiLCJtYXRjaFRleHQiLCJwbGFjZUhvZGVyIiwiY29uc3RydWN0IiwiYmVmb3JlQXR0ckNoYW5nZSIsImFmdGVyQXR0ckNoYW5nZSIsImJlZm9yZVZpZXdJbml0IiwiYWZ0ZXJWaWV3TW91bnQiLCIkJGVsZW1lbnQiLCIkcHJveHkiLCJtZXNzZW5nZXIiLCJzeW5jIiwiJGdldE1ldGEiLCJ0ZW1wbGF0ZVVybCIsImdldFRwbEJ5VXJsIiwidXNpbmciLCJjbGFzc05hbWUiLCJwb3AiLCJzcGFjZU5hbWUiLCJnZXRJbm5lclRwbCIsIiR1c2luZyIsImdldEh0bWxFbGVtZW50IiwiJGhhc1ZpZXciLCIkc2hvd1ZpZXciLCIkZ2V0VGVtcGxhdGUiLCIkbWFrZUNvbXBpbGVPcHRpb25zIiwiJGNsZWFyVmlldyIsInNlbGVjdG9yT3JFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImFwcGVuZCIsIiRhZnRlclZpZXdNb3VudCIsIiQkcGFyZW50Q29tcG9uZW50IiwiJHJlbW92ZUNoaWxkQ21wIiwiJCRkZXRlY3RUaW1lb3V0IiwiJCRvYnNlcnZlciIsInZhbGlkYXRlIiwid2F0Y2giLCJjaGlsZENtcCIsIiQkY2hpbGRDb21wb25lbnRzIiwicGFyZW50Q21wIiwic2V0UHJvdG90eXBlT2YiLCIkaG9va3MiLCJoYW5kbGVyIiwiaG9vayIsIiQkZGlzcG9zZXJzIiwiJHZhbGlkYXRlIiwiZGVzdHJveUZyb21FbGVtZW50IiwiJHVubW91bnQiLCJkaXNwb3NlciIsIiRzZXRNZXRhIiwiaW5qZWN0U2VydmljZXMiLCJvbkNvbXBpbGUiLCIkcmVxdWVzdEFuaW1hdGlvbiIsIiQkY2FuY2VsQW5pbWF0aW9uVG9rZW4iLCIkaXNMb2FkZWQiLCIkZWxlbWVudGxvYWRlZCIsImF0dHJOb2RlIiwiZGVzdHJveUZyb21BdHRyIiwiJGNhbmNlbEFuaW1hdGlvbiIsIkZpbHRlciIsIm9uRXhlY3V0ZSIsIm5zIiwibWV0aG9kcyIsImJ1aWxkQ29uc3RydWN0b3IiLCJjb250cmFjdFR5cGUiLCJzdXBlckNsYXNzIiwibWFrZUNvbnN0cnVjdG9yIiwiaXNTZXJ2aWNlIiwiYm9vdHN0cmFwIiwiaW5uZXJIVE1MIiwiZiIsIm5hbWVQYXR0ZXJuIiwiSW5qZWN0b3IiLCJjb250YWluZXIiLCJ3YWl0aW5nVG9FeHRlbmRzIiwiaW5zQ29udGFpbmVyIiwibWFwcGluZyIsImdldE1hcHBpbmciLCJyZWdpc3RlciIsImNvbnN0cnVjdG9ycyIsIm5hbWVzcGFjZXMiLCJpbnN0YW5jZSIsImNyZWF0ZVNlcnZpY2UiLCJnZXRDb21wb25lbnQiLCJnZXRGaWx0ZXIiLCJzZXJ2aWNlcyIsImdldEluc3RhbmNlcyIsImdldFNlcnZpY2UiLCJub25TaGFyZWQiLCJjb25zdHJ1Y3Rvck5hbWUiLCJjaGVja1NlbGVjdG9yIiwiZ2V0V2FpdGluZ1RvRXh0ZW5kcyIsIm9uQ29uc3RydWN0IiwiRnVuY3Rpb24iLCJzdXBlck9uZSIsInJlbWFpbkNvbnN0cnVjdG9yIiwic3VwZXJOYW1lIiwiZXh0ZW5kTWV0YSIsInN1cGVyTWV0YSIsIndhaXRpbmdUb0V4dGVuZHMyIiwiZnVsbFNlbGVjdG9yIiwic2V0V2FpdGluZ1RvRXh0ZW5kcyIsImxvY2FsIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicHJpdmF0ZUtleSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7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SDtBQUNKO0FBNUJMO0FBQUE7QUFBQSxnQ0FLdUI7QUFDZndILHdEQUFRLENBQUNtZ0IsY0FBVCxDQUF3QixJQUF4QjtBQUNIO0FBUEw7O0FBQUE7QUFBQSxJIiwiZmlsZSI6InNpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzaW5lXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNpbmVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG52YXIgVFJBTlNJVElPTiA9ICd0cmFuc2l0aW9uJztcclxudmFyIEFOSU1BVElPTiA9ICdhbmltYXRpb24nO1xyXG52YXIgdHJhbnNpdGlvblByb3AgPSAndHJhbnNpdGlvbic7XHJcbnZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSAndHJhbnNpdGlvbmVuZCc7XHJcbnZhciBhbmltYXRpb25Qcm9wID0gJ2FuaW1hdGlvbic7XHJcbnZhciBhbmltYXRpb25FbmRFdmVudCA9ICdhbmltYXRpb25lbmQnO1xyXG52YXIgdHJhbnNmb3JtUkUgPSAvXFxiKHRyYW5zZm9ybXxhbGwpKCx8JCkvO1xyXG5cclxuQHNlcnZpY2Uoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJyRhbmltYXRlJ1xyXG59KVxyXG5jbGFzcyBBbmltYXRlU2VydmljZSBleHRlbmRzIFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcih2bm9kZSwgZG9FbnRlcikge1xyXG4gICAgICAgIHZhciBlbCA9IHZub2RlLmh0bWxFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBjYWxsIGxlYXZlIGNhbGxiYWNrIG5vd1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGVsLl9sZWF2ZUNiKSkge1xyXG4gICAgICAgICAgICBlbC5fbGVhdmVDYi5jYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBlbC5fbGVhdmVDYigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZWwuX2VudGVyQ2IpIHx8IGVsLm5vZGVUeXBlICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhbmltYXRpb24gPSB0aGlzLnJlc29sdmVBbmltYXRpb25Db250ZXh0KHZub2RlKTtcclxuXHJcbiAgICAgICAgaWYgKCFhbmltYXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvRW50ZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5yZXNvbHZlQW5pbWF0aW9uKGFuaW1hdGlvbik7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgdHlwZSA9IGRhdGEudHlwZTtcclxuICAgICAgICB2YXIgZW50ZXJDbGFzcyA9IGRhdGEuZW50ZXJDbGFzcztcclxuICAgICAgICB2YXIgZW50ZXJUb0NsYXNzID0gZGF0YS5lbnRlclRvQ2xhc3M7XHJcbiAgICAgICAgdmFyIGVudGVyQWN0aXZlQ2xhc3MgPSBkYXRhLmVudGVyQWN0aXZlQ2xhc3M7XHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gZGF0YS5kdXJhdGlvbjtcclxuXHJcbiAgICAgICAgdmFyIGV4cGxpY2l0RW50ZXJEdXJhdGlvbiA9IHV0aWxzLnRvTnVtYmVyKFxyXG4gICAgICAgICAgICB1dGlscy5pc09iamVjdChkdXJhdGlvbilcclxuICAgICAgICAgICAgICAgID8gZHVyYXRpb24uZW50ZXJcclxuICAgICAgICAgICAgICAgIDogZHVyYXRpb25cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB2YXIgY2IgPSBlbC5fZW50ZXJDYiA9IHNlbGYub25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlQW5pbWF0aW9uQ2xhc3MoZWwsIGVudGVyVG9DbGFzcyk7XHJcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlQW5pbWF0aW9uQ2xhc3MoZWwsIGVudGVyQWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICBpZiAoY2IuY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBlbnRlckNsYXNzKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5lbnRlckNhbmNlbGxlZCAmJiBhbmltYXRpb24uZW50ZXJDYW5jZWxsZWQoZWwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLmFmdGVyRW50ZXIgJiYgYW5pbWF0aW9uLmFmdGVyRW50ZXIoZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsLl9lbnRlckNiID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc3RhcnQgZW50ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgYW5pbWF0aW9uLmJlZm9yZUVudGVyICYmIGFuaW1hdGlvbi5iZWZvcmVFbnRlcihlbCk7XHJcbiAgICAgICAgc2VsZi5hZGRBbmltYXRpb25DbGFzcyhlbCwgZW50ZXJDbGFzcyk7XHJcbiAgICAgICAgc2VsZi5hZGRBbmltYXRpb25DbGFzcyhlbCwgZW50ZXJBY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgc2VsZi5uZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLnJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBlbnRlckNsYXNzKTtcclxuICAgICAgICAgICAgaWYgKCFjYi5jYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuYWRkQW5pbWF0aW9uQ2xhc3MoZWwsIGVudGVyVG9DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc1ZhbGlkRHVyYXRpb24oZXhwbGljaXRFbnRlckR1cmF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2IsIGV4cGxpY2l0RW50ZXJEdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYud2hlbkFuaW1hdGlvbkVuZHMoZWwsIHR5cGUsIGNiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb0VudGVyKCk7XHJcbiAgICAgICAgYW5pbWF0aW9uLmVudGVyICYmIGFuaW1hdGlvbi5lbnRlcihlbCwgY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIGxlYXZlKHZub2RlLCBkb0xlYXZlKSB7XHJcbiAgICAgICAgdmFyIGVsID0gdm5vZGUuaHRtbEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIGNhbGwgZW50ZXIgY2FsbGJhY2sgbm93XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZWwuX2VudGVyQ2IpKSB7XHJcbiAgICAgICAgICAgIGVsLl9lbnRlckNiLmNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsLl9lbnRlckNiKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5yZXNvbHZlQW5pbWF0aW9uQ29udGV4dCh2bm9kZSk7XHJcblxyXG4gICAgICAgIGlmICghYW5pbWF0aW9uIHx8IGVsLm5vZGVUeXBlICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb0xlYXZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihlbC5fbGVhdmVDYikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnJlc29sdmVBbmltYXRpb24oYW5pbWF0aW9uKTtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciB0eXBlID0gZGF0YS50eXBlO1xyXG4gICAgICAgIHZhciBsZWF2ZUNsYXNzID0gZGF0YS5sZWF2ZUNsYXNzO1xyXG4gICAgICAgIHZhciBsZWF2ZVRvQ2xhc3MgPSBkYXRhLmxlYXZlVG9DbGFzcztcclxuICAgICAgICB2YXIgbGVhdmVBY3RpdmVDbGFzcyA9IGRhdGEubGVhdmVBY3RpdmVDbGFzcztcclxuICAgICAgICB2YXIgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uO1xyXG5cclxuICAgICAgICB2YXIgZXhwbGljaXRMZWF2ZUR1cmF0aW9uID0gdXRpbHMudG9OdW1iZXIoXHJcbiAgICAgICAgICAgIHV0aWxzLmlzT2JqZWN0KGR1cmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgPyBkdXJhdGlvbi5sZWF2ZVxyXG4gICAgICAgICAgICAgICAgOiBkdXJhdGlvblxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHZhciBjYiA9IGVsLl9sZWF2ZUNiID0gc2VsZi5vbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5yZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcclxuICAgICAgICAgICAgc2VsZi5yZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlQW5pbWF0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLmxlYXZlQ2FuY2VsbGVkICYmIGFuaW1hdGlvbi5sZWF2ZUNhbmNlbGxlZChlbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb0xlYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24uYWZ0ZXJMZWF2ZSAmJiBhbmltYXRpb24uYWZ0ZXJMZWF2ZShlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWwuX2xlYXZlQ2IgPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYW5pbWF0aW9uLmRlbGF5TGVhdmUpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLmRlbGF5TGVhdmUocGVyZm9ybUxlYXZlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwZXJmb3JtTGVhdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBlcmZvcm1MZWF2ZSgpIHtcclxuICAgICAgICAgICAgLy8gdGhlIGRlbGF5ZWQgbGVhdmUgbWF5IGhhdmUgYWxyZWFkeSBiZWVuIGNhbmNlbGxlZFxyXG4gICAgICAgICAgICBpZiAoY2IuY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYW5pbWF0aW9uLmJlZm9yZUxlYXZlICYmIGFuaW1hdGlvbi5iZWZvcmVMZWF2ZShlbCk7XHJcbiAgICAgICAgICAgIHNlbGYuYWRkQW5pbWF0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICBzZWxmLmFkZEFuaW1hdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKTtcclxuICAgICAgICAgICAgc2VsZi5uZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNiLmNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkQW5pbWF0aW9uQ2xhc3MoZWwsIGxlYXZlVG9DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNWYWxpZER1cmF0aW9uKGV4cGxpY2l0TGVhdmVEdXJhdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjYiwgZXhwbGljaXRMZWF2ZUR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLndoZW5BbmltYXRpb25FbmRzKGVsLCB0eXBlLCBjYik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLmxlYXZlICYmIGFuaW1hdGlvbi5sZWF2ZShlbCwgY2IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlQW5pbWF0aW9uKGNvbmZpZykge1xyXG4gICAgICAgIHZhciByZXMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5jc3MgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmV4dGVuZChyZXMsIHRoaXMuYXV0b0Nzc0FuaW1hdGlvbihjb25maWcubmFtZSB8fCAnbicpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHV0aWxzLmV4dGVuZChyZXMsIGNvbmZpZyk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0b0Nzc0FuaW1hdGlvbihuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZW50ZXJDbGFzczogKG5hbWUgKyBcIi1lbnRlclwiKSxcclxuICAgICAgICAgICAgZW50ZXJUb0NsYXNzOiAobmFtZSArIFwiLWVudGVyLXRvXCIpLFxyXG4gICAgICAgICAgICBlbnRlckFjdGl2ZUNsYXNzOiAobmFtZSArIFwiLWVudGVyLWFjdGl2ZVwiKSxcclxuICAgICAgICAgICAgbGVhdmVDbGFzczogKG5hbWUgKyBcIi1sZWF2ZVwiKSxcclxuICAgICAgICAgICAgbGVhdmVUb0NsYXNzOiAobmFtZSArIFwiLWxlYXZlLXRvXCIpLFxyXG4gICAgICAgICAgICBsZWF2ZUFjdGl2ZUNsYXNzOiAobmFtZSArIFwiLWxlYXZlLWFjdGl2ZVwiKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25jZShmbikge1xyXG4gICAgICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dEZyYW1lKGZuKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBbmltYXRpb25DbGFzcyhlbCwgY2xzKSB7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbkNsYXNzZXMgPSBlbC5fYW5pbWF0aW9uQ2xhc3NlcyB8fCAoZWwuX2FuaW1hdGlvbkNsYXNzZXMgPSBbXSk7XHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbkNsYXNzZXMuaW5kZXhPZihjbHMpIDwgMCkge1xyXG4gICAgICAgICAgICBhbmltYXRpb25DbGFzc2VzLnB1c2goY2xzKTtcclxuICAgICAgICAgICAgdXRpbHMuYWRkQ2xhc3MoZWwsIGNscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBjbHMpIHtcclxuICAgICAgICBpZiAoZWwuX2FuaW1hdGlvbkNsYXNzZXMpIHtcclxuICAgICAgICAgICAgdXRpbHMucmVtb3ZlKGVsLl9hbmltYXRpb25DbGFzc2VzLCBjbHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1dGlscy5yZW1vdmVDbGFzcyhlbCwgY2xzKTtcclxuICAgIH1cclxuXHJcbiAgICB3aGVuQW5pbWF0aW9uRW5kcyhlbCxcclxuICAgICAgICBleHBlY3RlZFR5cGUsXHJcbiAgICAgICAgY2IpIHtcclxuICAgICAgICB2YXIgcmVmID0gdGhpcy5nZXRBbmltYXRpb25JbmZvKGVsLCBleHBlY3RlZFR5cGUpO1xyXG4gICAgICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XHJcbiAgICAgICAgdmFyIHRpbWVvdXQgPSByZWYudGltZW91dDtcclxuICAgICAgICB2YXIgcHJvcENvdW50ID0gcmVmLnByb3BDb3VudDtcclxuICAgICAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBldmVudCA9IHR5cGUgPT09IFRSQU5TSVRJT04gPyB0cmFuc2l0aW9uRW5kRXZlbnQgOiBhbmltYXRpb25FbmRFdmVudDtcclxuICAgICAgICB2YXIgZW5kZWQgPSAwO1xyXG4gICAgICAgIHZhciBlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uRW5kKTtcclxuICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICgrK2VuZGVkID49IHByb3BDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGVuZGVkIDwgcHJvcENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBlbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRpbWVvdXQgKyAxKTtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbkVuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5pbWF0aW9uSW5mbyhlbCwgZXhwZWN0ZWRUeXBlKSB7XHJcbiAgICAgICAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcclxuICAgICAgICB2YXIgdHJhbnNpdGlvbkRlbGF5cyA9IHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEZWxheSddLnNwbGl0KCcsICcpO1xyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb25zID0gc3R5bGVzW3RyYW5zaXRpb25Qcm9wICsgJ0R1cmF0aW9uJ10uc3BsaXQoJywgJyk7XHJcbiAgICAgICAgdmFyIHRyYW5zaXRpb25UaW1lb3V0ID0gdGhpcy5nZXRUaW1lb3V0KHRyYW5zaXRpb25EZWxheXMsIHRyYW5zaXRpb25EdXJhdGlvbnMpO1xyXG4gICAgICAgIHZhciBhbmltYXRpb25EZWxheXMgPSBzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEZWxheSddLnNwbGl0KCcsICcpO1xyXG4gICAgICAgIHZhciBhbmltYXRpb25EdXJhdGlvbnMgPSBzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEdXJhdGlvbiddLnNwbGl0KCcsICcpO1xyXG4gICAgICAgIHZhciBhbmltYXRpb25UaW1lb3V0ID0gdGhpcy5nZXRUaW1lb3V0KGFuaW1hdGlvbkRlbGF5cywgYW5pbWF0aW9uRHVyYXRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIHR5cGU7XHJcbiAgICAgICAgdmFyIHRpbWVvdXQgPSAwO1xyXG4gICAgICAgIHZhciBwcm9wQ291bnQgPSAwO1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmIChleHBlY3RlZFR5cGUgPT09IFRSQU5TSVRJT04pIHtcclxuICAgICAgICAgICAgaWYgKHRyYW5zaXRpb25UaW1lb3V0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFRSQU5TSVRJT047XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gdHJhbnNpdGlvblRpbWVvdXQ7XHJcbiAgICAgICAgICAgICAgICBwcm9wQ291bnQgPSB0cmFuc2l0aW9uRHVyYXRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSBBTklNQVRJT04pIHtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvblRpbWVvdXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gQU5JTUFUSU9OO1xyXG4gICAgICAgICAgICAgICAgdGltZW91dCA9IGFuaW1hdGlvblRpbWVvdXQ7XHJcbiAgICAgICAgICAgICAgICBwcm9wQ291bnQgPSBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGltZW91dCA9IE1hdGgubWF4KHRyYW5zaXRpb25UaW1lb3V0LCBhbmltYXRpb25UaW1lb3V0KTtcclxuICAgICAgICAgICAgdHlwZSA9IHRpbWVvdXQgPiAwXHJcbiAgICAgICAgICAgICAgICA/IHRyYW5zaXRpb25UaW1lb3V0ID4gYW5pbWF0aW9uVGltZW91dFxyXG4gICAgICAgICAgICAgICAgICAgID8gVFJBTlNJVElPTlxyXG4gICAgICAgICAgICAgICAgICAgIDogQU5JTUFUSU9OXHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgIHByb3BDb3VudCA9IHR5cGVcclxuICAgICAgICAgICAgICAgID8gdHlwZSA9PT0gVFJBTlNJVElPTlxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJhbnNpdGlvbkR1cmF0aW9ucy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICA6IGFuaW1hdGlvbkR1cmF0aW9ucy5sZW5ndGhcclxuICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGhhc1RyYW5zZm9ybSA9XHJcbiAgICAgICAgICAgIHR5cGUgPT09IFRSQU5TSVRJT04gJiZcclxuICAgICAgICAgICAgdHJhbnNmb3JtUkUudGVzdChzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnUHJvcGVydHknXSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgdGltZW91dDogdGltZW91dCxcclxuICAgICAgICAgICAgcHJvcENvdW50OiBwcm9wQ291bnQsXHJcbiAgICAgICAgICAgIGhhc1RyYW5zZm9ybTogaGFzVHJhbnNmb3JtXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaW1lb3V0KGRlbGF5cywgZHVyYXRpb25zKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB3aGlsZSAoZGVsYXlzLmxlbmd0aCA8IGR1cmF0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZGVsYXlzID0gZGVsYXlzLmNvbmNhdChkZWxheXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIGR1cmF0aW9ucy5tYXAoZnVuY3Rpb24gKGQsIGkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYudG9NcyhkKSArIHNlbGYudG9NcyhkZWxheXNbaV0pO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICB0b01zKHMpIHtcclxuICAgICAgICByZXR1cm4gTnVtYmVyKHMuc2xpY2UoMCwgLTEpKSAqIDEwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZER1cmF0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlQW5pbWF0aW9uQ29udGV4dChlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbnMgPSBlbGVtZW50LmdldERpcmVjdGl2ZXMoKS5maWx0ZXIoZnVuY3Rpb24gKGRpcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZGlyLmFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICdhbmltYXRpb24nXHJcbn0pXHJcbmNsYXNzIEFuaW1hdGlvbiBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vIGFuaW1hdGlvbiB0eXBlLCBcInRyYW5zaXRpb25cIiBvciBcImFuaW1hdGlvblwiXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMudHlwZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuY3NzID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLmVudGVyQ2xhc3MgPSAnJztcclxuICAgICAgICAvLyB0aGlzLmVudGVyVG9DbGFzcyA9ICcnO1xyXG4gICAgICAgIC8vIHRoaXMuZW50ZXJBY3RpdmVDbGFzcyA9ICcnO1xyXG4gICAgICAgIC8vIHRoaXMubGVhdmVDbGFzcyA9ICcnO1xyXG4gICAgICAgIC8vIHRoaXMubGVhdmVUb0NsYXNzID0gJyc7XHJcbiAgICAgICAgLy8gdGhpcy5sZWF2ZUFjdGl2ZUNsYXNzID0gJyc7XHJcbiAgICAgICAgdGhpcy4kcHJpb3JpdHkgPSAtMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRGcmFtZShmbikge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmVmb3JlRW50ZXIoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGVudGVyKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBhZnRlckVudGVyKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBlbnRlckNhbmNlbGxlZCgpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYmVmb3JlTGVhdmUoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGxlYXZlKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBhZnRlckxlYXZlKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBsZWF2ZUNhbmNlbGxlZCgpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZGVsYXlMZWF2ZSgpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFuaW1hdGlvbiB9IiwiZXhwb3J0ICogZnJvbSAnLi9hbmltYXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9hbmltYXRpb24nOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBCaW5kaW5nIH0gZnJvbSAnLi9iaW5kaW5nJztcblxuLy8gLy8gV2luZG93IEV2ZW50c1xuLy8gY2FzZSAnb24tbG9hZCc6XG4vLyBjYXNlICdvbi11bmxvYWQnOlxuLy8gLy8gRm9ybSBFbGVtZW50IEV2ZW50c1xuLy8gY2FzZSAnb24tY2hhbmdlJzpcbi8vIGNhc2UgJ29uLXN1Ym1pdCc6XG4vLyBjYXNlICdvbi1yZXNldCc6XG4vLyBjYXNlICdvbi1zZWxlY3QnOlxuLy8gY2FzZSAnb24tYmx1cic6XG4vLyBjYXNlICdvbi1mb2N1cyc6XG4vLyAvLyBJbWFnZSBFdmVudHNcbi8vIGNhc2UgJ29uLWFib3J0Jzpcbi8vIC8vIEtleWJvYXJkIEV2ZW50c1xuLy8gY2FzZSAnb24ta2V5ZG93bic6XG4vLyBjYXNlICdvbi1rZXlwcmVzcyc6XG4vLyBjYXNlICdvbi1rZXl1cCc6XG4vLyAvLyBNb3VzZSBFdmVudHNcbi8vIGNhc2UgJ29uLWNsaWNrJzpcbi8vIGNhc2UgJ29uLWRibGNsaWNrJzpcbi8vIGNhc2UgJ29uLW1vdXNlZG93bic6XG4vLyBjYXNlICdvbi1tb3VzZW1vdmUnOlxuLy8gY2FzZSAnb24tbW91c2VvdXQnOlxuLy8gY2FzZSAnb24tbW91c2VvdmVyJzpcbi8vIGNhc2UgJ29uLW1vdXNldXAnOlxudmFyIGV2ZW50VGV4dCA9ICdsb2FkIHVubG9hZCBjaGFuZ2Ugc3VibWl0IHJlc2V0IHNlbGVjdCBibHVyIGZvY3VzIGFib3J0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNlbW92ZSBtb3VzZW91dCBtb3VzZW92ZXIgbW91c2V1cCc7XG52YXIgZG9tRXZlbnRzID0gZXZlbnRUZXh0LnNwbGl0KCcgJyk7XG5cbmNsYXNzIEF0dHJOb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5hdHRyaWJ1dGUsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5xdW90ZSA9ICdcIic7XG4gICAgICAgIHRoaXMub3JpZ2luID0gbmFtZTtcbiAgICAgICAgdGhpcy5pc0V2ZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNCaW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEb21FdmVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRGlyZWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyQ29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuYmluZGluZyA9IG5ldyBCaW5kaW5nKCk7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSAwO1xuICAgIH1cblxuICAgIGJlbG9uZ1RvKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW4gPT09IGtleTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNvbXBpbGUodGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICBvYnNlcnZlKGFjdGlvbikge1xuICAgICAgICB0aGlzLmJpbmRpbmcub2JzZXJ2ZShhY3Rpb24pO1xuICAgIH1cblxuICAgIGNvbXBpbGUob3B0aW9ucykge1xuICAgICAgICB0aGlzLmlzRXZlbnQgPSB0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ0AnKTtcbiAgICAgICAgdGhpcy5pc0JpbmRpbmcgPSB0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJzonKTtcbiAgICAgICAgdGhpcy5pc0RpcmVjdGl2ZSA9IHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnKicpO1xuICAgICAgICBpZiAodGhpcy5pc0V2ZW50IHx8IHRoaXMuaXNCaW5kaW5nIHx8IHRoaXMuaXNEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZU5hbWUgPSB0aGlzLm5vZGVOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRG9tRXZlbnQgPSB1dGlscy5jb250YWlucyhkb21FdmVudHMsIHRoaXMubm9kZU5hbWUpO1xuICAgICAgICB0aGlzLmJpbmRpbmcuc2V0T3V0cHV0KHRoaXMuaXNFdmVudCk7XG4gICAgICAgIHRoaXMuYmluZGluZy5iaW5kKHRoaXMubm9kZVZhbHVlLCB0aGlzLmlzRXZlbnQgfHwgdGhpcy5pc0JpbmRpbmcgfHwgdGhpcy5pc0RpcmVjdGl2ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNvbnRhaW5zRGlyZWN0aXZlKHRoaXMubm9kZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBvcHRpb25zLmNyZWF0ZURpcmVjdGl2ZSh0aGlzLm5vZGVOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kYmluZE5vZGUodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kaW5nLnNldE91dHB1dCh0aGlzLmRpcmVjdGl2ZS4kb3V0cHV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gdGhpcy5kaXJlY3RpdmUuJHByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXJlY3RpdmUgJyArIHRoaXMubm9kZU5hbWUgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlDb21waWxlZChvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kY29tcGlsZShvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmsoc2NvcGUsIGh0bWxFbGVtZW50LCBvd25lckNvbXBvbmVudCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gaHRtbEVsZW1lbnQ7XG4gICAgICAgIHRoaXMub3duZXJDb21wb25lbnQgPSBvd25lckNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5iaW5kaW5nLnNldFNjb3BlKHNjb3BlKTtcblxuICAgICAgICBpZiAodGhpcy5pc0V2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubm9kZU5hbWUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYmluZGluZy5jb21wdXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2Fsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudDogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYXJnczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZWxlbWVudDogc2VsZi5odG1sRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG93bmVyQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvd25lckNvbXBvbmVudC4kbGlzdGVuKHRoaXMubm9kZU5hbWUsIGZ1bmN0aW9uIChlLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYmluZGluZy5jb21wdXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2Fsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudDogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYXJnczogYXJncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZWxlbWVudDogc2VsZi5odG1sRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHNjb3BlLiQkY2hpbGREaXJlY3RpdmVzLnB1c2godGhpcy5kaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRzZXRCaW5kaW5nKHRoaXMuYmluZGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvd25lckNvbXBvbmVudCAhPSBudWxsICYmIG93bmVyQ29tcG9uZW50LiRoYXNBdHRyKHRoaXMubm9kZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgb3duZXJDb21wb25lbnQuJGluaXRBdHRyKHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLmh0bWxFbGVtZW50LCB0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2UoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kZGV0ZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDaGFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJpbmRpbmcuZGV0ZWN0KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJHVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMub3duZXJDb21wb25lbnQgIT0gbnVsbCAmJiB0aGlzLm93bmVyQ29tcG9uZW50LiRoYXNBdHRyKHRoaXMubm9kZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudC4kc2V0QXR0cih0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLmh0bWxFbGVtZW50LCB0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaHRtbEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgdGhpcy5ub2RlTmFtZSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudC52YWx1ZSA9IHRoaXMuYmluZGluZy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeUxpbmtlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kaW5zZXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXREaXJlY3RpdmUoa2V5KSB7XG4gICAgICAgIGlmIChrZXkgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlICE9IG51bGwgJiYgdGhpcy5kaXJlY3RpdmUuJCRtZXRhLnNlbGVjdG9yID09PSBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldE91dGVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW4gKyAodGhpcy5ub2RlVmFsdWUgPT0gbnVsbCA/ICcnIDogKCc9JyArIHRoaXMucXVvdGUgKyB0aGlzLm5vZGVWYWx1ZSArIHRoaXMucXVvdGUpKTtcbiAgICB9XG5cbiAgICBnZXRJbm5lclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luICsgKHRoaXMubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB0aGlzLnF1b3RlICsgdGhpcy5ub2RlVmFsdWUgKyB0aGlzLnF1b3RlKSk7XG4gICAgfVxuXG4gICAgZGlzcG9zZShpc0Zyb21EaXJlY3RpdmUpIHtcbiAgICAgICAgaWYgKGlzRnJvbURpcmVjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kaW5nLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyQ29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGRpc3Bvc2UodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEF0dHJOb2RlIH07XG4iLCJcbnZhciBWTm9kZVR5cGUgPSB7XG4gICAgZWxlbWVudDogMSxcbiAgICBhdHRyaWJ1dGU6IDIsXG4gICAgdGV4dDogMyxcbiAgICBjZGF0YVNlY3Rpb246IDQsXG4gICAgZW50aXR5UmVmZXJlbmNlOiA1LFxuICAgIGVudGl0eTogNixcbiAgICBwcm9jZXNzaW5nSW5zdHJ1Y3Rpb246IDcsXG4gICAgY29tbWVudDogOCxcbiAgICBkb2N1bWVudDogOSxcbiAgICBkb2N1bWVudFR5cGU6IDEwLFxuICAgIGRvY3VtZW50RnJhZ21lbnQ6IDExLFxuICAgIG5vdGF0aW9uOiAxMixcbiAgICBjb25uZWN0aW9uOiAxMDFcbn07XG5cbi8vIHZpcnR1YWwgbm9kZVxuY2xhc3MgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZVR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLm5vZGVOYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckRvY3VtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgfVxuXG4gICAgJHB1c2hDaGlsZChjaGlsZCkge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgICRidWlsZFNpYmxpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAoc2VsZi5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuJGJ1aWxkU2libGluZygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgIH1cblxuICAgICRyZW1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJHJlbW92ZSgpO1xuICAgICAgICB0aGlzLiRjbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckRvY3VtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaGFzQ2hpbGROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgY2xlYXJDaGlsZE5vZGVzKCkge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQubmV4dFNpYmxpbmcgPSBjaGlsZDtcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHRoaXMubGFzdENoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZDtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChyZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkO1xuICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBuZXdDaGlsZDtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMCwgbmV3Q2hpbGQpO1xuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuXG4gICAgaW5zZXJ0QWZ0ZXIocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChyZWZDaGlsZC5uZXh0U2libGluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUocmVmQ2hpbGQubmV4dFNpYmxpbmcsIG5ld0NoaWxkKTtcbiAgICB9XG5cbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3ZlIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcucHJldmlvdXNTaWJsaW5nID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC4kY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICByZXBsYWNlQ2hpbGQocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG4gICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICBpZiAodGhpcy5maXJzdENoaWxkID09PSByZWZDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sYXN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmQ2hpbGQuJGNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBjbG9uZU5vZGUoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG4gICAgY29tcGlsZShvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuY29tcGlsZShvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5Q29tcGlsZWQob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLm5vdGlmeUNvbXBpbGVkKG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsaW5rKHNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5saW5rKHNjb3BlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5TGlua2VkKCkge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLm5vdGlmeUxpbmtlZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzQ2hhbmdlKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfTtcbiIsImltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgY29tcHV0ZSwgcGFyc2VBc3NpZ25tZW50IH0gZnJvbSAnLi4vcGFyc2VyJztcblxuY2xhc3MgRXhwTm9kZSB7XG4gICAgY29uc3RydWN0b3IodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgY29tcHV0ZShzY29wZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGNvbXB1dGUodGhpcy50ZXh0LCBzY29wZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSAhPT0gdGhpcy5vbGRWYWx1ZTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBCaW5kaW5nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMudGV4dCA9ICcnO1xuICAgICAgICB0aGlzLmlzRXhwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5yaWdodFN0ciA9ICcnO1xuICAgICAgICB0aGlzLm91dHB1dCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMudW53YXRjaGVzID0gW107XG4gICAgICAgIHRoaXMuY2hhbmdlID0gbmV3IE1lc3NlbmdlcigpO1xuICAgIH1cblxuICAgIHNldFNjb3BlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRPdXRwdXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5vdXRwdXQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBiaW5kKHRleHQsIGlzRXhwKSB7XG4gICAgICAgIGlmICh0ZXh0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuaXNFeHAgPSBpc0V4cDtcblxuICAgICAgICBpZiAoaXNFeHApIHtcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZXhwOiBuZXcgRXhwTm9kZSh0ZXh0KSxcbiAgICAgICAgICAgICAgICBsZWZ0U3RyOiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGF0dGVybiA9IC97eyhbXn1dKil9fS9nO1xuICAgICAgICB2YXIgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgICAgIHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcblxuICAgICAgICB3aGlsZSAobWF0Y2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbmRleDogbWF0Y2guaW5kZXgsXG4gICAgICAgICAgICAgICAgZXhwOiBuZXcgRXhwTm9kZShtYXRjaFsxXSksXG4gICAgICAgICAgICAgICAgbGVmdFN0cjogdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlZ21lbnRzLmxlbmd0aCA+IDAgJiYgbGFzdEluZGV4IDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRTdHIgPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZShvcHRpb25zKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICB0aGlzLm9sZFZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5zZWdtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0V4cCAmJiB0aGlzLnNlZ21lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHNbMF0uZXhwLmNvbXB1dGUoc2VsZi5zY29wZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc2VnbWVudHNbMF0uZXhwLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudC5leHAuY29tcHV0ZShzZWxmLnNjb3BlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAoc2VnbWVudC5sZWZ0U3RyICsgc2VnbWVudC5leHAudmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0ZXh0ICsgdGhpcy5yaWdodFN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIGFzc2lnbih2YWx1ZSkge1xuICAgICAgICB2YXIgYXNzaWdubWVudCA9IHBhcnNlQXNzaWdubWVudCh0aGlzLnRleHQsIHRoaXMuc2NvcGUpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50Lm9iaiAhPSBudWxsICYmIGFzc2lnbm1lbnQucHJvcCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhc3NpZ25tZW50Lm9iai50b1Byb3h5KClbYXNzaWdubWVudC5wcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlzdGVuKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMudW53YXRjaGVzID0gdGhpcy5zZWdtZW50cy5tYXAoZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnNjb3BlLiR3YXRjaChzZWdtZW50LmV4cC50ZXh0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRldGVjdCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZS5maXJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWZlcihhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuY2FuY2VsVGltZW91dCgpO1xuXG4gICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FuY2VsVGltZW91dCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZW91dElkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvYnNlcnZlKGFjdGlvbikge1xuICAgICAgICBpZiAodGhpcy5vdXRwdXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGlzdGVuKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlLm9uKGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlLm9mZihhY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMub3V0cHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wdXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlICE9PSB0aGlzLm9sZFZhbHVlO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5zZWdtZW50cy5zb21lKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gc2VnbWVudC5leHAuZGV0ZWN0KCk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsVGltZW91dCgpO1xuICAgICAgICB0aGlzLnVud2F0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uICh1bndhdGNoKSB7XG4gICAgICAgICAgICB1bndhdGNoLmNhbGwoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgc2VnbWVudC5leHAuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgeyBCaW5kaW5nIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIENEYXRhU2VjdGlvbk5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmNkYXRhU2VjdGlvbik7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDRGF0YVNlY3Rpb25Ob2RlIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIENvbW1lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5jb21tZW50LCAnI2NvbW1lbnQnKTtcbiAgICB9XG5cbiAgICBsaW5rKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcbiAgICB9XG5cbiAgICBnZXRJbm5lclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVZhbHVlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ29tbWVudE5vZGUgfTtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIENvbm5lY3Rpb25Ob2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxpbmtlcil7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5jb25uZWN0aW9uLCBuYW1lKTtcbiAgICAgICAgdGhpcy5saW5rZXIgPSBsaW5rZXI7XG4gICAgfVxuXG4gICAgbGluayhzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtlci5jYWxsKHRoaXMsIHNjb3BlKTtcbiAgICB9XG5cbiAgICBub3RpZnlMaW5rZWQoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25JbnNlcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkluc2VydC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGV0ZWN0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25EZXRlY3QuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkhhc0NoYW5nZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uSGFzQ2hhbmdlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25VcGRhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vblVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDb25uZWN0aW9uTm9kZSB9OyIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuXG5jbGFzcyBEb2N1bWVudFR5cGVOb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuZG9jdW1lbnRUeXBlKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IERvY3VtZW50VHlwZU5vZGUgfTtcbiIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuXG5jbGFzcyBEb2N1bWVudE5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5kb2N1bWVudCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBEb2N1bWVudE5vZGUgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgQ29ubmVjdGlvbk5vZGUgfSBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuaW1wb3J0IHsgQXR0ck5vZGUgfSBmcm9tICcuL2F0dHJpYnV0ZSc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4uL3BhcnNlcic7XG5cbmNsYXNzIEVsZW1lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGdldCBwYXJlbnRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuZWxlbWVudCwgbmFtZSk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGZDbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21waWxlT3B0aW9ucyA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNDb21wb25lbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAkcHVzaEF0dHJpYnV0ZShhdHRyKSB7XG4gICAgICAgIGF0dHIub3duZXJFbGVtZW50ID0gdGhpcztcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnB1c2goYXR0cik7XG4gICAgfVxuXG4gICAgaGFzQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcy5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlKGtleSkge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZXNbMF07XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHRhcmdldCwgbWF0Y2hlcyA9IHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG1hdGNoZXNbMF07XG4gICAgICAgICAgICB0YXJnZXQuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0ID0gbmV3IEF0dHJOb2RlKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgdGFyZ2V0Lm93bmVyRWxlbWVudCA9IHRoaXM7XG4gICAgICAgICAgICB0YXJnZXQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKHRhcmdldCk7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZW1vdmVBdHRyaWJ1dGUoa2V5KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBbXSwgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGtleSBpbnN0YW5jZW9mIEF0dHJOb2RlKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmF0dHJpYnV0ZXMuaW5kZXhPZihrZXkpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYuYXR0cmlidXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHNlbGYuYXR0cmlidXRlcy5pbmRleE9mKG1hdGNoKTtcbiAgICAgICAgICAgICAgICBtYXRjaC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi5hdHRyaWJ1dGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQubGVuZ3RoID4gMCA/IHRhcmdldFswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgYXBwZW5kQXR0cmlidXRlKGF0dHIpIHtcbiAgICAgICAgaWYgKGF0dHIub3duZXJFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkN1cnJlbnQgYXR0cmlidXRlIGlzIG5vdCBuZXchXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXR0ci5vd25lckVsZW1lbnQgPSB0aGlzO1xuICAgICAgICBhdHRyLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xuICAgICAgICByZXR1cm4gYXR0cjtcbiAgICB9XG5cbiAgICBvYnNlcnZlKGtleSwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdGhpcy5hdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZXNbMF0ub2JzZXJ2ZShhY3Rpb24pO1xuICAgIH1cblxuICAgIGdldE91dGVyVHBsKCkge1xuICAgICAgICB2YXIgYXR0clRwbCA9ICcnLCBjaGlsZFRwbCA9ICcnO1xuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyVHBsICs9ICcgJztcbiAgICAgICAgICAgIGF0dHJUcGwgKz0gYXR0ci5nZXRPdXRlclRwbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkVHBsICs9IGNoaWxkLmdldE91dGVyVHBsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB0cGwgPSAnPCcgKyB0aGlzLm5vZGVOYW1lICsgYXR0clRwbCArICc+JyArIGNoaWxkVHBsO1xuXG4gICAgICAgIGlmICghdGhpcy5zZWxmQ2xvc2VkKSB7XG4gICAgICAgICAgICB0cGwgKz0gKCc8LycgKyB0aGlzLm5vZGVOYW1lICsgJz4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cGw7XG4gICAgfVxuXG4gICAgZ2V0SW5uZXJUcGwoKSB7XG4gICAgICAgIHZhciBjaGlsZFRwbCA9ICcnO1xuXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGRUcGwgKz0gY2hpbGQuZ2V0T3V0ZXJUcGwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkVHBsO1xuICAgIH1cblxuICAgIHNldE91dGVyVHBsKHRwbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHBhcnNlKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLCB2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZik7XG4gICAgfVxuXG4gICAgc2V0SW5uZXJUcGwodHBsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jbGVhckNoaWxkTm9kZXMoKTtcbiAgICAgICAgcGFyc2UodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLmFwcGVuZENoaWxkKHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aXZlKGtleSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuc29tZShmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXR0ci5nZXREaXJlY3RpdmUoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQgIT0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXREaXJlY3RpdmVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLm1hcChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgcmV0dXJuIGF0dHIuZ2V0RGlyZWN0aXZlKCk7XG4gICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICByZXR1cm4gZGlyICE9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBpbGUob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNvbXBpbGVPcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIuY29tcGlsZShvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHBlcmZvcm0gZGlyZWN0aXZlIGFjY29yZGluZyB0byBwcmlvcml0eVxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSB1dGlscy5vcmRlckJ5KHRoaXMuYXR0cmlidXRlcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnByaW9yaXR5O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc0NvbXBvbmVudCA9IG9wdGlvbnMuY29udGFpbnNDb21wb25lbnQodGhpcy5ub2RlTmFtZSk7XG4gICAgICAgIGlmICghdGhpcy5pc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuY29tcGlsZShvcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5Q29tcGlsZWQob3B0aW9ucykge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0ci5ub3RpZnlDb21waWxlZChvcHRpb25zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLm5vdGlmeUNvbXBpbGVkKG9wdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rKHNjb3BlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHNlbGYuaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHNlbGYubm9kZU5hbWUpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudCA9IHNjb3BlLiRjcmVhdGVDaGlsZENtcCh0aGlzLm5vZGVOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LiRiaW5kTm9kZSh0aGlzKTtcbiAgICAgICAgICAgIHNlbGYuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgYXR0ci5saW5rKHNjb3BlLCBzZWxmLmh0bWxFbGVtZW50LCBzZWxmLmNvbXBvbmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYuY29tcG9uZW50LiRpbml0QXR0ckRvbmUoKTtcbiAgICAgICAgICAgIHNlbGYuY29tcG9uZW50LiRtb3VudChzZWxmLmh0bWxFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgYXR0ci5saW5rKHNjb3BlLCBzZWxmLmh0bWxFbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5odG1sRWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZC5saW5rKHNjb3BlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWxmLmh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIG5vdGlmeUxpbmtlZCgpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIubm90aWZ5TGlua2VkKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5ub3RpZnlMaW5rZWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0ci5kZXRlY3QoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXRlY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcG9zZShpc0Zyb21Db21wb25lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRnJvbUNvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5yZW1vdmVIdG1sRWxlbWVudCgpO1xuICAgICAgICB0aGlzLmNvbXBpbGVPcHRpb25zID0gbnVsbDtcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC4kZGlzcG9zZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIGdldEh0bWxFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odG1sRWxlbWVudDtcbiAgICB9XG5cbiAgICByZW1vdmVIdG1sRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaHRtbEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdXRpbHMucmVtb3ZlTm9kZSh0aGlzLmh0bWxFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUVsZW1lbnQobmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnROb2RlKG5hbWUpO1xuICAgIH1cblxuICAgIGNyZWF0ZUF0dHIobmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IEF0dHJOb2RlKG5hbWUpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbm5lY3Rpb24obmFtZSwgbGlua2VyKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29ubmVjdGlvbk5vZGUobmFtZSwgbGlua2VyKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEVsZW1lbnROb2RlIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIERvY3VtZW50RnJhZ21lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5kb2N1bWVudEZyYWdtZW50LCAnI2RvY3VtZW50LWZyYWdtZW50Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBEb2N1bWVudEZyYWdtZW50Tm9kZSB9O1xuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzQXJyYXksIE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHknO1xuXG52YXIgcHJvcENoYW5naW5nTXNnID0gbmV3IE1lc3NlbmdlcigpO1xudmFyIHByb3BDaGFuZ2VkTXNnID0gbmV3IE1lc3NlbmdlcigpO1xudmFyIHRhcmdldEtleSA9ICdfX3RhcmdldF9fJztcblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdmFsdWVbdGFyZ2V0S2V5XTtcblxuICAgICAgICAvLyB2YWx1ZSBpcyBhIHByb3h5IHJldHVybiBieSBwcm94eSBoYW5kbGVyXG4gICAgICAgIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmNsYXNzIEdldFByb3BlcnR5SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoZGVlcFByb3h5LCB2YXJpYWJsZXMsIGZ1bGxUYXJnZXRLZXkpIHtcbiAgICAgICAgdGhpcy5kZWVwUHJveHkgPSBkZWVwUHJveHk7XG4gICAgICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgICAgICB0aGlzLmZ1bGxUYXJnZXRLZXkgPSBmdWxsVGFyZ2V0S2V5O1xuICAgIH1cblxuICAgIGdldCh0YXJnZXQsIGtleSkge1xuICAgICAgICBpZiAodGFyZ2V0S2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXRba2V5XSwgZnVsbEtleSA9IGtleTtcblxuICAgICAgICBpZiAodGhpcy5mdWxsVGFyZ2V0S2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZ1bGxLZXkgPSB0aGlzLmZ1bGxUYXJnZXRLZXkgKyAnLicgKyBrZXk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWVwUHJveHkgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBQcm94eSh2YWx1ZSwgbmV3IEdldFByb3BlcnR5SGFuZGxlcih0aGlzLmRlZXBQcm94eSwgdGhpcy52YXJpYWJsZXMsIGZ1bGxLZXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleGlzdGVkID0gdGhpcy52YXJpYWJsZXMuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGFyZ2V0ID09PSB0YXJnZXQgJiYgaXRlbS5rZXkgPT09IGtleTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFleGlzdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICB0YXJnZXRLZXk6IHRoaXMuZnVsbFRhcmdldEtleVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuXG5jbGFzcyBTZXRQcm9wZXJ0eUhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgc2V0KHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlIHx8IChpc0FycmF5KHRhcmdldCkgJiYga2V5ID09PSAnbGVuZ3RoJykpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFwcGx5OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHByb3BDaGFuZ2luZ01zZy5maXJlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWxpZGF0aW9uXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24uYXBwbHkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHByb3BDaGFuZ2VkTXNnLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmNsYXNzIEFjY2Vzc1Byb3BlcnR5SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoZGVlcFByb3h5KSB7XG4gICAgICAgIHRoaXMuZGVlcFByb3h5ID0gZGVlcFByb3h5O1xuICAgIH1cblxuICAgIGdldCh0YXJnZXQsIGtleSkge1xuICAgICAgICBpZiAodGFyZ2V0S2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXRba2V5XTtcblxuICAgICAgICBpZiAodGhpcy5kZWVwUHJveHkgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBQcm94eSh2YWx1ZSwgbmV3IFNldFByb3BlcnR5SGFuZGxlcih0aGlzLmRlZXBQcm94eSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHNldCh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVlcFByb3h5KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGdldFRhcmdldCh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlIHx8IChpc0FycmF5KHRhcmdldCkgJiYga2V5ID09PSAnbGVuZ3RoJykpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFwcGx5OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHByb3BDaGFuZ2luZ01zZy5maXJlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWxpZGF0aW9uXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24uYXBwbHkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHByb3BDaGFuZ2VkTXNnLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEdldFByb3BlcnR5SGFuZGxlciwgU2V0UHJvcGVydHlIYW5kbGVyLCBBY2Nlc3NQcm9wZXJ0eUhhbmRsZXIsIHByb3BDaGFuZ2luZ01zZywgcHJvcENoYW5nZWRNc2csIGdldFRhcmdldCB9IiwiZXhwb3J0ICogZnJvbSAnLi9iYXNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXR0cmlidXRlJztcbmV4cG9ydCAqIGZyb20gJy4vY2RhdGFzZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9kb2N0eXBlJztcbmV4cG9ydCAqIGZyb20gJy4vZG9jdW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZnJhZ21lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL2hhbmRsZXInO1xuZXhwb3J0ICogZnJvbSAnLi9vYnNlcnZlcic7XG5leHBvcnQgKiBmcm9tICcuL3Byb3h5JzsiLCJpbXBvcnQgeyBjb21wdXRlLCBwYXJzZUV4cCB9IGZyb20gJy4uL3BhcnNlcic7XG5pbXBvcnQgeyBpc1JlZ0V4cCwgZm9yRWFjaCB9IGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgcHJvcENoYW5naW5nTXNnLCBwcm9wQ2hhbmdlZE1zZywgR2V0UHJvcGVydHlIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVyJztcblxuY2xhc3MgUHJvcGVydHlPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxhaW5NYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVnZXhNYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgb24ocHJvcCwgYWN0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIG1hcCA9IGlzUmVnRXhwKHByb3ApID8gdGhpcy5yZWdleE1hcCA6IHRoaXMucGxhaW5NYXA7XG5cbiAgICAgICAgaWYgKCFtYXAuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICBtYXAuc2V0KHByb3AsIFtdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICBhY3Rpb24uYmVmb3JlQ2hhbmdlZCA9IG9wdGlvbnMuYmVmb3JlQ2hhbmdlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcC5nZXQocHJvcCkucHVzaChhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9mZihwcm9wLCBhY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9mZihwcm9wLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIG1hcCA9IGlzUmVnRXhwKHByb3ApID8gdGhpcy5yZWdleE1hcCA6IHRoaXMucGxhaW5NYXA7XG5cbiAgICAgICAgaWYgKCFtYXAuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWN0aW9ucyA9IG1hcC5nZXQocHJvcCk7XG4gICAgICAgIHZhciBpbmRleCA9IGFjdGlvbnMuaW5kZXhPZihhY3Rpb24pO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVDaGFuZ2VkKHByb3AsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYWluTWFwLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgdGhpcy5wbGFpbk1hcC5nZXQocHJvcCkuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVnZXhNYXAuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9ucywgcGF0dGVybikge1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4udGVzdChwcm9wKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmJlZm9yZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYsIHByb3AsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpcmVDaGFuZ2luZyhwcm9wLCBhcmdzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5wbGFpbk1hcC5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgIHRoaXMucGxhaW5NYXAuZ2V0KHByb3ApLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVnZXhNYXAuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9ucywgcGF0dGVybikge1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4udGVzdChwcm9wKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5wbGFpbk1hcC5jbGVhcigpO1xuICAgICAgICB0aGlzLnJlZ2V4TWFwLmNsZWFyKCk7XG4gICAgfVxufVxuXG5jbGFzcyBPYmplY3RPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIG9uY2hhbmdpbmcgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmdzLnRhcmdldCwgcHJvcCA9IGFyZ3Mua2V5O1xuICAgICAgICAgICAgICAgIHNlbGYuZmlyZUNoYW5naW5nKG9iaiwgcHJvcCwgYXJncy5kYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbmNoYW5nZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmdzLnRhcmdldCwgcHJvcCA9IGFyZ3Mua2V5O1xuICAgICAgICAgICAgICAgIHNlbGYuZmlyZUNoYW5nZWQob2JqLCBwcm9wLCBhcmdzLmRhdGEpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICBwcm9wQ2hhbmdpbmdNc2cub24ob25jaGFuZ2luZyk7XG4gICAgICAgIHByb3BDaGFuZ2VkTXNnLm9uKG9uY2hhbmdlZCk7XG5cbiAgICAgICAgdGhpcy5vZmZDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9wQ2hhbmdpbmdNc2cub2ZmKG9uY2hhbmdpbmcpO1xuICAgICAgICAgICAgcHJvcENoYW5nZWRNc2cub2ZmKG9uY2hhbmdlZCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub2JqTWFwID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIG9uKG9iaiwgcHJvcCwgYWN0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIXRoaXMub2JqTWFwLmhhcyhvYmopKSB7XG4gICAgICAgICAgICB0aGlzLm9iak1hcC5zZXQob2JqLCBuZXcgUHJvcGVydHlPYnNlcnZlcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm9iak1hcC5nZXQob2JqKS5vbihwcm9wLCBhY3Rpb24sIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIG9mZihvYmosIHByb3AsIGFjdGlvbikge1xuICAgICAgICBpZiAodGhpcy5vYmpNYXAuaGFzKG9iaikpIHtcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLmdldChvYmopLm9mZihwcm9wLCBhY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUNoYW5nZWQob2JqLCBwcm9wLCBhcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLm9iak1hcC5oYXMob2JqKSkge1xuICAgICAgICAgICAgdGhpcy5vYmpNYXAuZ2V0KG9iaikuZmlyZUNoYW5nZWQocHJvcCwgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlQ2hhbmdpbmcob2JqLCBwcm9wLCBhcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLm9iak1hcC5oYXMob2JqKSkge1xuICAgICAgICAgICAgdGhpcy5vYmpNYXAuZ2V0KG9iaikuZmlyZUNoYW5naW5nKHByb3AsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vZmZDaGFuZ2UuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5vYmpNYXAuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9iak1hcCA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBNZW1iZXJXYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgdGFyZ2V0LCBrZXksIHRhcmdldEtleSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy50YXJnZXRLZXkgPSB0YXJnZXRLZXk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG51bGw7XG5cbiAgICAgICAgaWYgKCF0YXJnZXRLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGFyZ2V0S2V5ICsgJy4nICsga2V5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQob2JzZXJ2ZXIsIGFjdGlvbiwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSB0aGlzLm9ic2VydmVyLm9uKHRoaXMudGFyZ2V0LCB0aGlzLmtleSwgdGhpcy5hY3Rpb24sIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMudW53YXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVud2F0Y2guY2FsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKGNoYW5nZUtleSkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXRLZXkgIT0gbnVsbCAmJiB0aGlzLnRhcmdldEtleS5zdGFydHNXaXRoKGNoYW5nZUtleSkpIHtcbiAgICAgICAgICAgIHZhciBuZXdUYXJnZXQgPSBjb21wdXRlKHRoaXMudGFyZ2V0S2V5LCB0aGlzLnNjb3BlKTtcblxuICAgICAgICAgICAgaWYgKG5ld1RhcmdldCAhPT0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IG5ld1RhcmdldDtcbiAgICAgICAgICAgICAgICB0aGlzLnVud2F0Y2ggPSB0aGlzLm9ic2VydmVyLm9uKHRoaXMudGFyZ2V0LCB0aGlzLmtleSwgdGhpcy5hY3Rpb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIERldGVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICAgIHRoaXMudGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5kaWdlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlZmVyKGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2xlYXJEZWZlcigpO1xuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyRGVmZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpIHtcbiAgICAgICAgcHJvcENoYW5nZWRNc2cub24odGhpcy5kaWdlc3QpO1xuICAgIH1cblxuICAgIGFwcGx5KGFjdGlvbikge1xuICAgICAgICB0aGlzLnF1ZXVlLnB1c2goYWN0aW9uKTtcbiAgICB9XG5cbiAgICByZW1vdmUoYWN0aW9uKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucXVldWUuaW5kZXhPZihhY3Rpb24pO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucXVldWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHByb3BDaGFuZ2VkTXNnLm9mZih0aGlzLmRpZ2VzdCk7XG4gICAgICAgIHRoaXMuY2xlYXJEZWZlcigpO1xuICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgfVxufVxuXG52YXIgZGV0ZWN0b3IgPSBuZXcgRGV0ZWN0b3IoKTtcblxuZGV0ZWN0b3IuZXhlY3V0ZSgpO1xuXG5jbGFzcyBFeHBXYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgZXhwKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGV0ZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gc2VsZi52YWx1ZSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IGNvbXB1dGUoc2VsZi5leHAsIHNlbGYuc2NvcGUpO1xuXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIHNlbGYuYWN0aW9uLmNhbGwoc2VsZiwge1xuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXJ0KGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLnZhbHVlID0gY29tcHV0ZSh0aGlzLmV4cCwgdGhpcy5zY29wZSk7XG4gICAgICAgIGRldGVjdG9yLmFwcGx5KHNlbGYuZGV0ZWN0KTtcbiAgICAgICAgdGhpcy51bndhdGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGV0ZWN0b3IucmVtb3ZlKHNlbGYuZGV0ZWN0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy51bndhdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudW53YXRjaC5jYWxsKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBXYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgZXhwKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmRpZ2VzdHMgPSBbXTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gbnVsbDtcbiAgICB9XG5cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhwID09PSAnKicpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwID0gLy4rL2k7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNSZWdFeHAodGhpcy5leHApKSB7XG4gICAgICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuc2NvcGUsXG4gICAgICAgICAgICAgICAga2V5OiB0aGlzLmV4cFxuICAgICAgICAgICAgfV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXN0ID0gcGFyc2VFeHAodGhpcy5leHApO1xuXG4gICAgICAgIGlmIChhc3QuaGFzQ0MoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgZGlydHlDaGVjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuZXhwXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhciBpdGVtcyA9IFtdLFxuICAgICAgICAvLyAgICAgaGFuZGxlciA9IG5ldyBHZXRQcm9wZXJ0eUhhbmRsZXIodHJ1ZSwgaXRlbXMpLFxuICAgICAgICAvLyAgICAgcHJveHkgPSBuZXcgUHJveHkodGhpcy5zY29wZSwgaGFuZGxlcik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGNvbXB1dGUodGhpcy5leHAsIHByb3h5KTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gcmV0dXJuIGl0ZW1zO1xuXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29sbGVjdE1lbWJlcnM6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wdXRlKHRoaXMuZXhwLCB0aGlzLnNjb3BlLCBvcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gb3B0aW9ucy5tZW1iZXJzO1xuICAgIH1cblxuICAgIHN0YXJ0KG9ic2VydmVyLCBhY3Rpb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy51cGRhdGVNZW1iZXIoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVNZW1iZXIoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnBhcnNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uZGlydHlDaGVjaykge1xuICAgICAgICAgICAgICAgIHZhciBkaWdlc3QgPSBuZXcgRXhwV2F0Y2hlcihzZWxmLnNjb3BlLCBpdGVtLmtleSk7XG4gICAgICAgICAgICAgICAgc2VsZi5kaWdlc3RzLnB1c2goZGlnZXN0KTtcbiAgICAgICAgICAgICAgICBzZWxmLnN0YXJ0RGlnZXN0KGRpZ2VzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbWVtYmVyID0gbmV3IE1lbWJlcldhdGNoZXIoc2VsZi5zY29wZSwgaXRlbS50YXJnZXQsIGl0ZW0ua2V5LCBpdGVtLnRhcmdldEtleSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYubWVtYmVyc1ttZW1iZXIuaWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubWVtYmVyc1ttZW1iZXIuaWRdID0gbWVtYmVyO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnN0YXJ0TWVtYmVyKG1lbWJlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydERpZ2VzdChkaWdlc3QpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGRpZ2VzdC5zdGFydChmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgc2VsZi5hY3Rpb24uY2FsbCh0aGlzLCBhcmdzKTtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICBzdGFydE1lbWJlcihtZW1iZXIpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIG1lbWJlci5zdGFydChzZWxmLm9ic2VydmVyLCBmdW5jdGlvbiAocHJvcCwgYXJncykge1xuICAgICAgICAgICAgdmFyIGNoYW5nZUtleSA9IHByb3A7XG5cbiAgICAgICAgICAgIGlmIChtZW1iZXIudGFyZ2V0S2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VLZXkgPSBtZW1iZXIudGFyZ2V0S2V5ICsgJy4nICsgcHJvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yRWFjaChzZWxmLm1lbWJlcnMsIGZ1bmN0aW9uIChtZW1iZXJXYXRjaGVyLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBtZW1iZXJXYXRjaGVyLnVwZGF0ZShjaGFuZ2VLZXkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHNlbGYudXBkYXRlTWVtYmVyKCk7XG4gICAgICAgICAgICBzZWxmLmFjdGlvbi5jYWxsKHRoaXMsIHByb3AsIGFyZ3MpO1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGZvckVhY2godGhpcy5tZW1iZXJzLCBmdW5jdGlvbiAobWVtYmVyLCBrZXkpIHtcbiAgICAgICAgICAgIG1lbWJlci5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpZ2VzdHMuZm9yRWFjaChmdW5jdGlvbiAoZGlnZXN0KSB7XG4gICAgICAgICAgICBkaWdlc3QuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuZGlnZXN0cyA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgT2JqZWN0T2JzZXJ2ZXIoKTtcbiAgICAgICAgdGhpcy53YXRjaGVycyA9IFtdO1xuICAgIH1cblxuICAgIHdhdGNoKG9iaiwgZXhwLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgd2F0Y2hlciA9IHRoaXMuY3JlYXRlV2F0Y2hlcihvYmosIGV4cCk7XG5cbiAgICAgICAgd2F0Y2hlci5zdGFydCh0aGlzLm9ic2VydmVyLCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3YXRjaGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlV2F0Y2hlcih3YXRjaGVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZShvYmosIGV4cCwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIHdhdGNoZXIgPSB0aGlzLmNyZWF0ZVdhdGNoZXIob2JqLCBleHApO1xuXG4gICAgICAgIHdhdGNoZXIuc3RhcnQodGhpcy5vYnNlcnZlciwgYWN0aW9uLCB7XG4gICAgICAgICAgICBiZWZvcmVDaGFuZ2VkOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3YXRjaGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlV2F0Y2hlcih3YXRjaGVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjcmVhdGVXYXRjaGVyKG9iaiwgZXhwKSB7XG4gICAgICAgIHZhciB3YXRjaGVyID0gbmV3IFdhdGNoZXIob2JqLCBleHApO1xuXG4gICAgICAgIHRoaXMud2F0Y2hlcnMucHVzaCh3YXRjaGVyKTtcblxuICAgICAgICByZXR1cm4gd2F0Y2hlcjtcbiAgICB9XG5cbiAgICByZW1vdmVXYXRjaGVyKHdhdGNoZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy53YXRjaGVycy5pbmRleE9mKHdhdGNoZXIpO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVDaGFuZ2VkKG9iaiwgcHJvcCwgYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlci5maXJlQ2hhbmdlZChvYmosIHByb3AsIGFyZ3MpO1xuICAgIH1cblxuICAgIGZpcmVDaGFuZ2luZyhvYmosIHByb3AsIGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXIuZmlyZUNoYW5naW5nKG9iaiwgcHJvcCwgYXJncyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy53YXRjaGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3YXRjaGVyKSB7XG4gICAgICAgICAgICB3YXRjaGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMud2F0Y2hlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLm9ic2VydmVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgeyBQcm9wZXJ0eU9ic2VydmVyLCBPYnNlcnZlciB9OyIsImltcG9ydCB7IFNldFByb3BlcnR5SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcic7XHJcblxyXG5PYmplY3QucHJvdG90eXBlLnRvUHJveHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb3h5KHRoaXMsIG5ldyBTZXRQcm9wZXJ0eUhhbmRsZXIoKSk7XHJcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xuXG5jbGFzcyBUZXh0Tm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLnRleHQsICcjdGV4dCcpO1xuICAgICAgICB0aGlzLmJpbmRpbmcgPSBuZXcgQmluZGluZygpO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb21waWxlKCkge1xuICAgICAgICB0aGlzLmJpbmRpbmcuYmluZCh0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxuXG4gICAgbGluayhzY29wZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5iaW5kaW5nLnNldFNjb3BlKHNjb3BlKTtcblxuICAgICAgICB0aGlzLmJpbmRpbmcub2JzZXJ2ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XG4gICAgfVxuXG4gICAgaGFzQ2hhbmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iaW5kaW5nLmRldGVjdCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy5odG1sRWxlbWVudCwgdGhpcy5yZW5kZXIodGhpcy5iaW5kaW5nLnZhbHVlKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIGdldE91dGVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0SW5uZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcbiAgICB9XG5cbiAgICByZW1vdmVIdG1sRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaHRtbEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdXRpbHMucmVtb3ZlTm9kZSh0aGlzLmh0bWxFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmluZGluZy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuYmluZGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUZXh0Tm9kZSB9OyIsImltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3J1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50KG1ldGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBtZXRhLnNlbGVjdG9yIHx8IHRhcmdldC5uYW1lO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckNvbnN0cnVjdG9yKHR5cGVDb25zdC5jb21wb25lbnQsIHNlbGVjdG9yLCB0YXJnZXQsIG1ldGEpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgdHlwZUNvbnN0LCBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmUobWV0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IG1ldGEuc2VsZWN0b3IgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyQ29uc3RydWN0b3IodHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IsIHRhcmdldCwgbWV0YSk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyB0eXBlQ29uc3QsIGluamVjdG9yIH0gZnJvbSAnLi4vdmlldydcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihtZXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gbWV0YS5zZWxlY3RvciB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb25zdHJ1Y3Rvcih0eXBlQ29uc3QuZmlsdGVyLCBzZWxlY3RvciwgdGFyZ2V0LCBtZXRhKTtcbiAgICB9O1xufSIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vZmlsdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7IiwiaW1wb3J0IHsgdHlwZUNvbnN0LCBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlKG1ldGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBtZXRhLnNlbGVjdG9yIHx8IHRhcmdldC5uYW1lO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckNvbnN0cnVjdG9yKHR5cGVDb25zdC5zZXJ2aWNlLCBzZWxlY3RvciwgdGFyZ2V0LCBtZXRhKTtcbiAgICB9O1xufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gXCIuLi92aWV3XCI7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gXCIuLi9kZWNvcmF0b3JcIjtcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tYmluZC1jbXAtb3B0aW9ucydcclxufSlcclxuY2xhc3MgQmluZENtcE9wdGlvbnNEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlT3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJPcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSBcIi4uL3ZpZXdcIjtcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSBcIi4uL2RlY29yYXRvclwiO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1iaW5kLWNtcCdcclxufSlcclxuY2xhc3MgQmluZENtcERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuJHByaW9yaXR5ID0gNTtcclxuICAgICAgICB0aGlzLm5hbWVEaXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gbnVsbDtcclxuICAgICAgICB0aGlzLnZpZXcgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm5hbWVEaXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lRGlyID0gdGhpcy4kZWxlbWVudC5nZXREaXJlY3RpdmUoJ24tbmFtZScpO1xyXG4gICAgICAgIHRoaXMuYmluZENtcE9wdGlvbnNEaXIgPSB0aGlzLiRlbGVtZW50LmdldERpcmVjdGl2ZSgnbi1iaW5kLWNtcC1vcHRpb25zJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJpbmRDbXBPcHRpb25zRGlyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmJpbmRDbXBPcHRpb25zRGlyLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlldyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy4kZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBjb21wb25lbnQgPSB0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbXBvbmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMuJGJpbmRpbmcuc2NvcGUuJGNyZWF0ZUNoaWxkQ21wKGNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcub25Jbml0KHRoaXMudmlldyk7XHJcbiAgICAgICAgdGhpcy52aWV3LiRtb3VudCh0aGlzLiRodG1sRWxlbWVudCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5hbWVEaXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVEaXIuc2V0Q21wKHRoaXMudmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tYmluZCdcbn0pXG5jbGFzcyBCaW5kRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgIH1cblxuICAgIGJpbmQoKSB7XG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1lbWJlZCdcbn0pXG5jbGFzcyBFbWJlZERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25Db21waWxlKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGVtYmVkVHBsID0gb3B0aW9ucy5nZXRFbWJlZFRwbCgpO1xuICAgICAgICBpZiAoZW1iZWRUcGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuc2V0SW5uZXJUcGwoZW1iZWRUcGwpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLWhpZGUnLFxuICAgIGluamVjdDoge1xuICAgICAgICAgICAgJGFuaW1hdGU6ICckYW5pbWF0ZSdcbiAgICB9XG59KVxuY2xhc3MgSGlkZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLiRhbmltYXRlLmxlYXZlKHRoaXMuJGVsZW1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRodG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRhbmltYXRlLmVudGVyKHRoaXMuJGVsZW1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRodG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1pZicsXG4gICAgaW5qZWN0OiB7XG4gICAgICAgICRhbmltYXRlOiAnJGFuaW1hdGUnXG4gICAgfVxufSlcbmNsYXNzIElmRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLWlmJyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSkge1xuICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy4kaHRtbEVsZW1lbnQsIHRoaXMuaHRtbENvbW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy4kYmluZGluZy5jb21wdXRlKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRodG1sRWxlbWVudC5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRhbmltYXRlLmVudGVyKHRoaXMuJGVsZW1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoc2VsZi5odG1sQ29tbWVudCwgc2VsZi4kaHRtbEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50LnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGFuaW1hdGUubGVhdmUodGhpcy4kZWxlbWVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShzZWxmLiRodG1sRWxlbWVudCwgc2VsZi5odG1sQ29tbWVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBudWxsO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmQnXG5leHBvcnQgKiBmcm9tICcuL2VtYmVkJ1xuZXhwb3J0ICogZnJvbSAnLi9oaWRlJ1xuZXhwb3J0ICogZnJvbSAnLi9pZidcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnXG5leHBvcnQgKiBmcm9tICcuL3JlcGVhdCdcbmV4cG9ydCAqIGZyb20gJy4vc2hvdydcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaCdcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGUnXG5leHBvcnQgKiBmcm9tICcuL25hbWUnXG5leHBvcnQgKiBmcm9tICcuL2JpbmQtY21wJ1xuZXhwb3J0ICogZnJvbSAnLi9iaW5kLWNtcC1vcHRpb25zJyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tbW9kZWwnLFxuICAgIGluamVjdDoge1xuICAgICAgICBvcHRpb25zOiAnJG1vZGVsT3B0aW9ucydcbiAgICB9XG59KVxuY2xhc3MgTW9kZWxEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiR2aWV3VmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLiRtb2RlbFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy4kcGFyc2VycyA9IFtdO1xuICAgICAgICB0aGlzLiRmb3JtYXR0ZXJzID0gW107XG4gICAgICAgIHRoaXMuJHZpZXdDaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy4kdmFsaWRhdG9ycyA9IFtdO1xuICAgICAgICB0aGlzLiRmZWVkYmFjayA9ICcnO1xuICAgICAgICB0aGlzLiRwcmlzdGluZSA9IHRydWU7XG4gICAgICAgIHRoaXMuJGRpcnR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kaW52YWxpZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZXRWaWV3VmFsdWUoKTtcblxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNldE1vZGVsVmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNNZXNzZW5nZXIodGhpcy4kY29tcG9uZW50LmNoYW5nZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRjb21wb25lbnQuY2hhbmdlLm9uKGZ1bmN0aW9uIChlLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0TW9kZWxWYWx1ZShhcmdzLm5ld3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9lbnQgJyArIHRoaXMuJGNvbXBvbmVudC4kJG1ldGEuc2VsZWN0b3IgKyAnbXVzdCBkZWZpbmUgW2NoYW5nZV0gZXZlbnQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnNldFZpZXdWYWx1ZSgpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kcGFyc2VycyA9IG51bGw7XG4gICAgICAgIHRoaXMuJGZvcm1hdHRlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLiR2aWV3Q2hhbmdlTGlzdGVuZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy4kdmFsaWRhdG9ycyA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0Vmlld1ZhbHVlKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy4kbW9kZWxWYWx1ZSA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xuXG4gICAgICAgIHZhciB2aWV3VmFsdWUgPSB0aGlzLiRtb2RlbFZhbHVlO1xuXG4gICAgICAgIHRoaXMuJHZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuY2FsbChzZWxmLCBzZWxmLiRtb2RlbFZhbHVlLCBzZWxmLiR2aWV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRmb3JtYXR0ZXJzLmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdHRlcikge1xuICAgICAgICAgICAgdmlld1ZhbHVlID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmlld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHZpZXdWYWx1ZSAhPT0gdmlld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiR2aWV3VmFsdWUgPSB2aWV3VmFsdWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRjb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnZhbHVlID0gdGhpcy4kbW9kZWxWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC4kc2V0QXR0cigndmFsdWUnLCB0aGlzLiRtb2RlbFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlQ3NzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG5cbiAgICBzZXRNb2RlbFZhbHVlKHZpZXdWYWx1ZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZXREaXJ0eSh0cnVlKTtcblxuICAgICAgICB0aGlzLiR2aWV3VmFsdWUgPSB2aWV3VmFsdWU7XG5cbiAgICAgICAgdGhpcy4kdmlld0NoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbChzZWxmLCB2aWV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IHRoaXMuJHZpZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLiRwYXJzZXJzLmZvckVhY2goZnVuY3Rpb24gKHBhcnNlcikge1xuICAgICAgICAgICAgbW9kZWxWYWx1ZSA9IHBhcnNlci5jYWxsKHNlbGYsIG1vZGVsVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy4kbW9kZWxWYWx1ZSAhPT0gbW9kZWxWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy4kbW9kZWxWYWx1ZSA9IG1vZGVsVmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGwoc2VsZiwgc2VsZi4kbW9kZWxWYWx1ZSwgc2VsZi4kdmlld1ZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLiRiaW5kaW5nLmFzc2lnbih0aGlzLiRtb2RlbFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUNzcygpIHtcbiAgICAgICAgdmFyIGVsZSA9IHRoaXMuJGh0bWxFbGVtZW50LFxuICAgICAgICAgICAgY3NzID0gdGhpcy5vcHRpb25zLmNzc0NsYXNzO1xuXG4gICAgICAgIGlmICh0aGlzLiRkaXJ0eSkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLmRpcnR5KTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5wcmlzdGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MucHJpc3RpbmUpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmRpcnR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiR2YWxpZCkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy52YWxpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZSgpIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLiRodG1sRWxlbWVudC5uYW1lO1xuXG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNjb3BlID0gdGhpcy4kYmluZGluZy5zY29wZS50b1Byb3h5KCk7XG5cbiAgICAgICAgaWYgKHNjb3BlW25hbWVdID09IG51bGwpIHtcbiAgICAgICAgICAgIHNjb3BlW25hbWVdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhdGUgPSBzY29wZVtuYW1lXS50b1Byb3h5KCk7XG5cbiAgICAgICAgc3RhdGUuJHByaXN0aW5lID0gdGhpcy4kcHJpc3RpbmU7XG4gICAgICAgIHN0YXRlLiRkaXJ0eSA9IHRoaXMuJGRpcnR5O1xuICAgICAgICBzdGF0ZS4kdmFsaWQgPSB0aGlzLiR2YWxpZDtcbiAgICAgICAgc3RhdGUuJGludmFsaWQgPSB0aGlzLiRpbnZhbGlkO1xuICAgICAgICBzdGF0ZS4kZmVlZGJhY2sgPSB0aGlzLiRmZWVkYmFjaztcbiAgICB9XG5cbiAgICBzZXREaXJ0eShkaXJ0eSkge1xuICAgICAgICB0aGlzLiRkaXJ0eSA9IGRpcnR5O1xuICAgICAgICB0aGlzLiRwcmlzdGluZSA9ICFkaXJ0eTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNzcygpO1xuICAgIH1cblxuICAgIHNldFZhbGlkaXR5KHZhbGlkLCBmZWVkYmFjaykge1xuICAgICAgICB0aGlzLiR2YWxpZCA9IHZhbGlkO1xuICAgICAgICB0aGlzLiRpbnZhbGlkID0gIXZhbGlkO1xuICAgICAgICB0aGlzLiRmZWVkYmFjayA9IGZlZWRiYWNrO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3NzKCk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1uYW1lJ1xyXG59KVxyXG5jbGFzcyBOYW1lRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4kb3V0cHV0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuJGJpbmRpbmcudGV4dDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHByb3h5ID0gdGhpcy4kc2NvcGUudG9Qcm94eSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcHJveHlbdGhpcy5uYW1lXSA9IHRoaXMuJGNvbXBvbmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHByb3h5W3RoaXMubmFtZV0gPSB0aGlzLiRlbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmFtZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlW3RoaXMubmFtZV0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRDbXAoY21wKSB7XHJcbiAgICAgICAgdmFyIHByb3h5ID0gdGhpcy4kc2NvcGUudG9Qcm94eSgpO1xyXG4gICAgICAgIHByb3h5W3RoaXMubmFtZV0gPSBjbXA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIENvbXBvbmVudCB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tcmVwZWF0J1xufSlcbmNsYXNzIFJlcGVhdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLml0ZW1FeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmNtcEl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuaGVhZGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb290ZXIgPSBudWxsO1xuICAgIH1cblxuICAgIG9uQ29tcGlsZSgpIHtcbiAgICAgICAgdmFyIGFyZyA9IHRoaXMuJGF0dHIubm9kZVZhbHVlO1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuJGVsZW1lbnQ7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gL14oW2Etel9dK1xcdyspXFxzK2luXFxzKyguKykkL2k7XG4gICAgICAgIHZhciByZXN1bHQgPSBwYXR0ZXJuLmV4ZWMoYXJnKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbi1yZXBlYXQ6IHBhcmFtZXRlciBpcyBub3QgdmFsaWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbUV4cCA9IHJlc3VsdFsxXTtcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9IHJlc3VsdFsyXTtcblxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLiRhdHRyKTtcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBlbGVtZW50LmdldE91dGVyVHBsKCk7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IGVsZW1lbnQuY3JlYXRlQ29ubmVjdGlvbignbi1yZXBlYXQnLCBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHNjb3BlLiRldmFsKHNlbGYuaXRlbXNFeHApO1xuXG4gICAgICAgICAgICBzZWxmLnNjb3BlID0gc2NvcGU7XG4gICAgICAgICAgICBzZWxmLnNldERhdGFJdGVtcyhpdGVtcyk7XG4gICAgICAgICAgICBzZWxmLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0OiBuLXJlcGVhdCcpO1xuICAgICAgICAgICAgc2VsZi5mb290ZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdlbmQ6IG4tcmVwZWF0Jyk7XG5cbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYuaGVhZGVyKTtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYuZm9vdGVyKTtcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbGVtZW50LCBjb25uZWN0aW9uKTtcbiAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XG5cbiAgICAgICAgY29ubmVjdGlvbi5vbkluc2VydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYucmVuZGVyKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29ubmVjdGlvbi5vbkRldGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHNlbGYuc2NvcGUuJGV2YWwoc2VsZi5pdGVtc0V4cCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmRhdGFJdGVtcyAhPT0gaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNldERhdGFJdGVtcyhpdGVtcyk7XG4gICAgICAgICAgICAgICAgc2VsZi5yZW5kZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuY21wSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRTY29wZSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFNjb3BlLiRkZXRlY3QoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25uZWN0aW9uLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmNtcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGNtcEl0ZW0pIHtcbiAgICAgICAgICAgIGNtcEl0ZW0uJGRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY21wSXRlbXMgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhSXRlbXMgPSBudWxsO1xuICAgICAgICB0aGlzLmhlYWRlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vdGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXREYXRhSXRlbXModmFsdWUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhSXRlbXMgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjb3BlLiR3YXRjaCh0aGlzLmRhdGFJdGVtcywgJ2xlbmd0aCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENtcEl0ZW0oZGF0YUl0ZW0pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBmaWx0ZXJzID0gdGhpcy5jbXBJdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtW3NlbGYuaXRlbUV4cF0gPT09IGRhdGFJdGVtO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhcmdldCA9IGZpbHRlcnNbMF07XG5cbiAgICAgICAgdGhpcy5jbXBJdGVtcyA9IHRoaXMuY21wSXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVtzZWxmLml0ZW1FeHBdICE9PSBkYXRhSXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB2YXIgbmV3Q21wSXRlbXMgPSBbXTtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcblxuICAgICAgICB1dGlscy5mb3JFYWNoKHNlbGYuZGF0YUl0ZW1zLCBmdW5jdGlvbiAoaXRlbSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgY21wSXRlbSA9IHNlbGYuZ2V0Q21wSXRlbShpdGVtKTtcblxuICAgICAgICAgICAgaWYgKGNtcEl0ZW0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNtcEl0ZW0gPSBuZXcgQ29tcG9uZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHNlbGYuaXRlbVRlbXBsYXRlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY21wSXRlbVtzZWxmLml0ZW1FeHBdID0gaXRlbTtcbiAgICAgICAgICAgICAgICBjbXBJdGVtLiRpbmhlcml0Q21wKHNlbGYuc2NvcGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbXBJdGVtWyckaW5kZXgnXSA9IGluZGV4O1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY21wSXRlbS4kcmVuZGVyKHRydWUpKTtcbiAgICAgICAgICAgIG5ld0NtcEl0ZW1zLnB1c2goY21wSXRlbSk7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2VsZi5jbXBJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWxmLmNtcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHJlcGVhdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXBlYXRJdGVtLiRkZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuY21wSXRlbXMgPSBuZXdDbXBJdGVtcztcbiAgICAgICAgdXRpbHMucmVtb3ZlTm9kZUJldHdlZW4oc2VsZi5oZWFkZXIsIHNlbGYuZm9vdGVyKTtcbiAgICAgICAgc2VsZi5mb290ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIHNlbGYuZm9vdGVyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zaG93JyxcbiAgICBpbmplY3Q6IHtcbiAgICAgICAgJGFuaW1hdGU6ICckYW5pbWF0ZSdcbiAgICB9XG59KVxuY2xhc3MgU2hvd0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLiRhbmltYXRlLmVudGVyKHRoaXMuJGVsZW1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRodG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRhbmltYXRlLmxlYXZlKHRoaXMuJGVsZW1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRodG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1jaGVja2VkJ1xufSlcbmNsYXNzIENoZWNrZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdjaGVja2VkJyk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tZGlzYWJsZWQnXG59KVxuY2xhc3MgRGlzYWJsZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXNhYmxlZCcpO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2NoZWNrZWQnXG5leHBvcnQgKiBmcm9tICcuL2Rpc2FibGVkJ1xuZXhwb3J0ICogZnJvbSAnLi9yZWFkb25seSdcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0ZWQnIiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1yZWFkb25seSdcbn0pXG5jbGFzcyBSZWFkb25seURpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3JlYWRvbmx5Jyk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tc2VsZWN0ZWQnXG59KVxuY2xhc3MgU2VsZWN0ZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdzZWxlY3RlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcblxuY2xhc3MgU3RhdGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKGF0dHJOYW1lKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXR0ck5hbWUgPSBhdHRyTmFtZTtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybSgpO1xuICAgIH1cblxuICAgIHBlcmZvcm0oKSB7XG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLiRodG1sRWxlbWVudC5oYXNBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSIsImltcG9ydCB7IENsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9jbGFzcyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWNsYXNzLWV2ZW4nXHJcbn0pXHJcbmNsYXNzIENsYXNzRXZlbkRpcmVjdGl2ZSBleHRlbmRzIENsYXNzRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuJGluZGV4ICYgMSA9PT0gMTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9jbGFzcyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWNsYXNzLW9kZCdcclxufSlcclxuY2xhc3MgQ2xhc3NPZGREaXJlY3RpdmUgZXh0ZW5kcyBDbGFzc0RpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlLiRpbmRleCAmIDEgPT09IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlsaXR5JztcclxuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWNsYXNzJ1xyXG59KVxyXG5jbGFzcyBDbGFzc0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsQ2xhc3NMaXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJzZUNsYXNzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaEFycmF5KGFyciwgYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnVud2F0Y2hBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLiR3YXRjaChhcnIsICdsZW5ndGgnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdW53YXRjaEFycmF5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVud2F0Y2ggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnVud2F0Y2guY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMudW53YXRjaEFycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dFRvQXJyYXkodGV4dCkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRyaW0oKS5sZW5ndGggPiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlQ2xhc3MoKSB7XHJcbiAgICAgICAgdmFyIGNsYXNzVGV4dCA9IHRoaXMuJGdldEF0dHJWYWx1ZSgnY2xhc3MnKTtcclxuXHJcbiAgICAgICAgaWYgKCFjbGFzc1RleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsQ2xhc3NMaXN0ID0gdGhpcy50ZXh0VG9BcnJheShjbGFzc1RleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENsYXNzTGlzdChhcnIpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LmNsYXNzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHNlbGYuJGh0bWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsQ2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBzZWxmLiRodG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENsYXNzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNraXAoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgICAgIG5ld0FyciA9IFtdLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdBcnIgPSB0aGlzLnRleHRUb0FycmF5KHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1dGlscy5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3QXJyID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhdGNoQXJyYXkodmFsdWUsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldENsYXNzTGlzdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIG9mIG4tY2xhc3Mgc2hvdWxkIGJlIHN0cmluZyBvciBhcnJheScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldENsYXNzTGlzdChuZXdBcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDbGFzc0RpcmVjdGl2ZSB9XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vY2xhc3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzLWV2ZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzLW9kZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlLWV2ZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlLW9kZCc7IiwiaW1wb3J0IHsgU3R5bGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tc3R5bGUtZXZlbidcclxufSlcclxuY2xhc3MgU3R5bGVFdmVuRGlyZWN0aXZlIGV4dGVuZHMgU3R5bGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZS4kaW5kZXggJiAxID09PSAxO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3R5bGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tc3R5bGUtb2RkJ1xyXG59KVxyXG5jbGFzcyBTdHlsZU9kZERpcmVjdGl2ZSBleHRlbmRzIFN0eWxlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuJGluZGV4ICYgMSA9PT0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxpdHknO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tc3R5bGUnXG59KVxuY2xhc3MgU3R5bGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xuICAgICAgICB0aGlzLmluaXRpYWxTdHlsZSA9IHt9O1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB0aGlzLnBhcnNlU3R5bGUoKTtcbiAgICAgICAgdGhpcy5zZXRTdHlsZSgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVud2F0Y2hPYmooKTtcbiAgICB9XG5cbiAgICB3YXRjaE9iaihvYmosIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy51bndhdGNoT2JqKCk7XG4gICAgICAgIHRoaXMuJHNjb3BlLiR3YXRjaChvYmosICcqJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdW53YXRjaE9iaigpIHtcbiAgICAgICAgaWYgKHRoaXMudW53YXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVud2F0Y2guY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZVN0eWxlKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLiRnZXRBdHRyVmFsdWUoJ3N0eWxlJyk7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0aWFsU3R5bGUgPSB0aGlzLnRleHRUb09iamVjdCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgdGV4dFRvT2JqZWN0KHRleHQpIHtcbiAgICAgICAgdmFyIG9iaiA9IHt9LFxuICAgICAgICAgICAgbGlzdCA9IHRleHQuc3BsaXQoJzsnKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIHN1Ykl0ZW1zID0gaXRlbS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBzdWJJdGVtc1swXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN1Ykl0ZW1zWzFdO1xuICAgICAgICAgICAgb2JqW25hbWVdID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgYXBwbHlTdHlsZShvYmopIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLiRodG1sRWxlbWVudDtcblxuICAgICAgICAvLyBjbGVhbiB1cCBzdHlsZVxuICAgICAgICBlbGVtZW50LnN0eWxlID0gJyc7XG5cbiAgICAgICAgLy8gc2V0IG5ldyBzdHlsZVxuICAgICAgICB1dGlscy5mb3JFYWNoKHRoaXMuaW5pdGlhbFN0eWxlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICB1dGlscy5mb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRTdHlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2tpcCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIG5ld1N0eWxlID0ge307XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbmV3U3R5bGUgPSB0aGlzLnRleHRUb09iamVjdCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXdTdHlsZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2hPYmoodmFsdWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hcHBseVN0eWxlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIG9mIG4tc3R5bGUgc2hvdWxkIGJlIHN0cmluZyBvciBvYmplY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZShuZXdTdHlsZSk7XG4gICAgfVxuXG4gICAgc2tpcCgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgU3R5bGVEaXJlY3RpdmUgfVxuIiwiZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC1kZWZhdWx0J1xuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gtd2hlbiciLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlsaXR5JztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXN3aXRjaC1kZWZhdWx0J1xufSlcbmNsYXNzIFN3aXRjaERlZmF1bHREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3dpdGNoV2hlbkRpcnMgPSBbXTtcbiAgICB9XG5cbiAgICBpbml0U3dpdGNoV2hlbkRpcnMoKSB7XG4gICAgICAgIHZhciB2RWxlID0gdGhpcy4kZWxlbWVudDtcblxuICAgICAgICB3aGlsZSAodkVsZS5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIHdoZW5EaXIgPSB2RWxlLnByZXZpb3VzU2libGluZy5nZXREaXJlY3RpdmUoJ24tc3dpdGNoLXdoZW4nKTtcblxuICAgICAgICAgICAgaWYgKHdoZW5EaXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoV2hlbkRpcnMucHVzaCh3aGVuRGlyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdkVsZSA9IHZFbGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWF0Y2goKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5zd2l0Y2hXaGVuRGlycy5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pc01hdGNoO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuaW5pdFN3aXRjaFdoZW5EaXJzKCk7XG4gICAgICAgIHRoaXMuaXNNYXRjaCA9IHRoaXMubWF0Y2goKTtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ24tc3dpdGNoLWRlZmF1bHQnKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNNYXRjaCkge1xuICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy4kaHRtbEVsZW1lbnQsIHRoaXMuaHRtbENvbW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hXaGVuRGlycy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLmlzTWF0Y2hDaGFuZ2VkLm9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLmlzTWF0Y2gsIG5ld1ZhbHVlID0gdGhpcy5tYXRjaCgpO1xuXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNYXRjaCA9IG5ld1ZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50LnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmh0bWxDb21tZW50LCB0aGlzLiRodG1sRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50LnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLiRodG1sRWxlbWVudCwgdGhpcy5odG1sQ29tbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zd2l0Y2hXaGVuRGlycyA9IG51bGw7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbGl0eSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zd2l0Y2gtd2hlbidcbn0pXG5jbGFzcyBTd2l0Y2hXaGVuRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc01hdGNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnN3aXRjaERpciA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNNYXRjaENoYW5nZWQgPSBuZXcgTWVzc2VuZ2VyKCk7XG4gICAgfVxuXG4gICAgaW5pdFN3aXRjaERpcigpIHtcbiAgICAgICAgdmFyIHN3aXRjaERpciA9IHRoaXMuJGVsZW1lbnQucGFyZW50Tm9kZS5nZXREaXJlY3RpdmUoJ24tc3dpdGNoJyk7XG5cbiAgICAgICAgaWYgKHN3aXRjaERpciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmUgbi1zd2l0Y2ggZGlyZWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaERpciA9IHN3aXRjaERpcjtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuaW5pdFN3aXRjaERpcigpO1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbi1zd2l0Y2gtd2hlbicpO1xuICAgICAgICB0aGlzLmlzTWF0Y2ggPSAodGhpcy4kYmluZGluZy5jb21wdXRlKCkgPT09IHRoaXMuc3dpdGNoRGlyLnZhbHVlKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNNYXRjaCkge1xuICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy4kaHRtbEVsZW1lbnQsIHRoaXMuaHRtbENvbW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hEaXIudmFsdWVDaGFuZ2VkLm9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5pc01hdGNoLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSAodGhpcy4kYmluZGluZy5jb21wdXRlKCkgPT09IHRoaXMuc3dpdGNoRGlyLnZhbHVlKTtcblxuICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmlzTWF0Y2ggPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNNYXRjaENoYW5nZWQuZmlyZSgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50LnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmh0bWxDb21tZW50LCB0aGlzLiRodG1sRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50LnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLiRodG1sRWxlbWVudCwgdGhpcy5odG1sQ29tbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zd2l0Y2hEaXIgPSBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi8uLi91dGlsaXR5JztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXN3aXRjaCdcbn0pXG5jbGFzcyBTd2l0Y2hEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQgPSBuZXcgTWVzc2VuZ2VyKCk7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQuZmlyZSh7XG4gICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGRlY29yYXRvciBmcm9tICcuL2RlY29yYXRvcic7XG5cbmV4cG9ydCB7IGRlY29yYXRvciB9XG5leHBvcnQgKiBmcm9tICcuL3V0aWxpdHknO1xuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcbmV4cG9ydCAqIGZyb20gJy4vcGFyc2VyJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2FuaW1hdGlvbic7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBMZXhlciB9IGZyb20gJy4vbGV4ZXInO1xuXG51dGlscy5pbmhlcml0KEh0bWxMZXhlciwgTGV4ZXIpO1xuZnVuY3Rpb24gSHRtbExleGVyKG9wdGlvbnMpIHtcbiAgICBIdG1sTGV4ZXIuc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbn1cblxuSHRtbExleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0ID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XG4gICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcbiAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnIHx8XG4gICAgICAgIGNoID09PSAnQCcgfHwgY2ggPT09ICc6JyB8fCBjaCA9PT0gJyonKTtcbn07XG5cbkh0bWxMZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCwgY3ApIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICctJyB8fCBjaCA9PT0gJy4nO1xufTtcblxuSHRtbExleGVyLnByb3RvdHlwZS5leHBlY3RTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdmFyIG51bSA9IHN0ci5sZW5ndGg7XG4gICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDw9IHRoaXMudGV4dC5sZW5ndGgpID8gKHN0ciA9PT0gdGhpcy50ZXh0LnN1YnN0cih0aGlzLmluZGV4LCBudW0pKSA6IGZhbHNlO1xufTtcblxuLy8gaHRtbCBjb21tZW50IFwiPCEtLWNvbW1lbnQtLT5cIlxuSHRtbExleGVyLnByb3RvdHlwZS5yZWFkQ29tbWVudCA9IGZ1bmN0aW9uIChiZWdpbiwgZW5kKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcbiAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgdmFyIHJhd1N0cmluZyA9IGJlZ2luO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZyhlbmQpKSB7XG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gZW5kO1xuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcbiAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcsIHN0YXJ0KTtcbn07XG5cbi8vIGh0bWwgdGV4dFxuSHRtbExleGVyLnByb3RvdHlwZS5yZWFkVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICBpZiAoKGNoID09PSAnPCcgJiYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSB8fCBjaDIgPT09ICcvJykpIHx8IHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICB0ZXh0OiBzdHJpbmcsXG4gICAgICAgIHRleHRUYWc6IHRydWVcbiAgICB9KTtcbn07XG5cbi8vIGh0bWwgdGFnXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRUYWcgPSBmdW5jdGlvbiAoYmVnaW4sIGVuZCwgY2xvc2luZywgZG9jdHlwZSkge1xuICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogYmVnaW4sIHRhZzogdHJ1ZSwgY2xvc2luZzogY2xvc2luZywgYmVnaW46IHRydWUsIGRvY3R5cGU6IGRvY3R5cGUgfSk7XG4gICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XG4gICAgdGhpcy5yZWFkSWRlbnQoKTtcblxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuXG4gICAgICAgIGlmICghY2xvc2luZykge1xuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgdmFyIHN0ciA9IGNoICsgY2gyO1xuICAgICAgICAgICAgaWYgKHN0ciA9PT0gJy8nICsgZW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBzdHIsIHRhZzogdHJ1ZSwgY2xvc2luZzogdHJ1ZSwgZW5kOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaCA9PT0gZW5kKSB7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgICAgICB0ZXh0OiBlbmQsXG4gICAgICAgICAgICAgICAgdGFnOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsb3Npbmc6ICEhZG9jdHlwZSA/IHRydWUgOiBjbG9zaW5nLFxuICAgICAgICAgICAgICAgIGVuZDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc9Jykge1xuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiAnPScsIGVxdWFsOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbkh0bWxMZXhlci5wcm90b3R5cGUubGV4ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIHRoaXMudG9rZW5zID0gW107XG5cbiAgICB2YXIgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgIHZhciBjaDMgPSB0aGlzLnBlZWsoMik7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRDb21tZW50KCc8IS0tJywgJy0tPicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnPCcgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwnLCAnPicsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPC8nKSAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMykpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPC8nLCAnPicsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IURPQ1RZUEUnKSkge1xuICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCEnLCAnPicsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdET0NUWVBFIGlzIG5vdCBhbGxvd2VkJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWFkVGV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRva2Vucztcbn07XG5cbmV4cG9ydCB7IEh0bWxMZXhlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IHsgRG9jdW1lbnRGcmFnbWVudE5vZGUsIENvbW1lbnROb2RlLCBUZXh0Tm9kZSwgRG9jdW1lbnRUeXBlTm9kZSwgRWxlbWVudE5vZGUsIEF0dHJOb2RlIH0gZnJvbSAnLi4vY29yZSc7XG5cbnV0aWxzLmluaGVyaXQoSHRtbFBhcnNlciwgUGFyc2VyKTtcbmZ1bmN0aW9uIEh0bWxQYXJzZXIobGV4ZXIsIG9wdGlvbnMpIHtcbiAgICBIdG1sUGFyc2VyLnN1cGVyLmNhbGwodGhpcywgbGV4ZXIsIG9wdGlvbnMpO1xufVxuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xuXG4gICAgdmFyIGZhcmdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnROb2RlKCk7XG4gICAgdmFyIGRvY3R5cGUsIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4uZG9jdHlwZSkge1xuICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xuICAgICAgICAgICAgICAgIGlmICghZG9jdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N0eXBlID0gdGhpcy5kb2N0eXBlKCk7XG4gICAgICAgICAgICAgICAgICAgIGZhcmdtZW50LiRwdXNoQ2hpbGQoZG9jdHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIG9ubHkgYWxsb3cgb25lXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIGlzIG5vdCBhbGxvd2VkXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XG4gICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBDb21tZW50Tm9kZSgpO1xuICAgICAgICAgICAgY29tbWVudC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZChjb21tZW50KTtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFRleHROb2RlKCk7XG4gICAgICAgICAgICB0ZXh0Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKHRleHQpO1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XG4gICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKHRoaXMuZWxlbWVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcImltcG9zc2libGVcIiwgdG9rZW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmFyZ21lbnQuJGJ1aWxkU2libGluZygpO1xuXG4gICAgcmV0dXJuIGZhcmdtZW50LmNoaWxkTm9kZXM7XG59O1xuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5kb2N0eXBlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubmV4dCgpO1xuICAgIHZhciBkb2NUeXBlID0gbmV3IERvY3VtZW50VHlwZU5vZGUoKTtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgIGRvY1R5cGUubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycyhkb2NUeXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgIGRvY1R5cGUuY2hpbGROb2Rlcy5wdXNoKGF0dHIpO1xuICAgIH0pO1xuXG4gICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBkb2NUeXBlO1xufTtcblxuSHRtbFBhcnNlci5wcm90b3R5cGUuZWxlbWVudCA9IGZ1bmN0aW9uIChwKSB7XG4gICAgdGhpcy5uZXh0KCk7XG4gICAgdmFyIGVsZSA9IG5ldyBFbGVtZW50Tm9kZSgpO1xuICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgZWxlLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgIH1cblxuICAgIHRoaXMuYXR0cnMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgIGVsZS4kcHVzaEF0dHJpYnV0ZShhdHRyKTtcbiAgICB9KTtcblxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgZWxlLnNlbGZDbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRFbGVtZW50cyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgZWxlLiRwdXNoQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgfVxuXG4gICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSB0b2tlbi50ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlO1xufTtcblxuSHRtbFBhcnNlci5wcm90b3R5cGUuY2hpbGRFbGVtZW50cyA9IGZ1bmN0aW9uIChwKSB7XG4gICAgdmFyIGVsZXMgPSBbXTtcblxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xuICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgQ29tbWVudE5vZGUoKTtcbiAgICAgICAgICAgIGNvbW1lbnQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGVsZXMucHVzaChjb21tZW50KTtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFRleHROb2RlKCk7XG4gICAgICAgICAgICB0ZXh0Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBlbGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcbiAgICAgICAgICAgIGVsZXMucHVzaCh0aGlzLmVsZW1lbnQocCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVzO1xufTtcblxuSHRtbFBhcnNlci5wcm90b3R5cGUuYXR0cnMgPSBmdW5jdGlvbiAocCkge1xuICAgIHZhciBhdHRycyA9IFtdO1xuXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGF0dHIgPSBuZXcgQXR0ck5vZGUoKTtcblxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgYXR0ci5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBhdHRyLm9yaWdpbiA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICBpZiAodG9rZW4uZXF1YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5jb25zdGFudCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRyLm5vZGVWYWx1ZSA9IHRva2VuLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXR0cnMucHVzaChhdHRyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG59O1xuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xufTtcblxuSHRtbFBhcnNlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmluZGV4Kys7XG59O1xuXG5leHBvcnQgeyBIdG1sUGFyc2VyIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBMZXhlciB9IGZyb20gJy4vbGV4ZXInO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IHsgSHRtbExleGVyIH0gZnJvbSAnLi9odG1sLWxleGVyJztcbmltcG9ydCB7IEh0bWxQYXJzZXIgfSBmcm9tICcuL2h0bWwtcGFyc2VyJztcblxudmFyIHBhcnNlT3B0aW9ucyA9IHtcbiAgICBpc0lkZW50aWZpZXJDb250aW51ZTogZmFsc2UsXG4gICAgaXNJZGVudGlmaWVyU3RhcnQ6IGZhbHNlLFxuICAgIGxpdGVyYWxzOiB7XG4gICAgICAgIGZhbHNlOiBmYWxzZSxcbiAgICAgICAgbnVsbDogbnVsbCxcbiAgICAgICAgdHJ1ZTogdHJ1ZSxcbiAgICAgICAgdW5kZWZpbmVkOiB1bmRlZmluZWRcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBwYXJzZShodG1sKSB7XG4gICAgdmFyIGxleGVyID0gbmV3IEh0bWxMZXhlcihwYXJzZU9wdGlvbnMpO1xuICAgIHZhciBwYXJzZXIgPSBuZXcgSHRtbFBhcnNlcihsZXhlciwgcGFyc2VPcHRpb25zKTtcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGh0bWwpO1xufVxuXG5mdW5jdGlvbiBjb21waWxlKGh0bWwsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBnZXRFbWJlZFRwbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluc0NvbXBvbmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVDb21wb25lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluc0RpcmVjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVEaXJlY3RpdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0dGluZ3MgPSB1dGlscy5tZXJnZShkZWZhdWx0cywgb3B0aW9ucyksXG4gICAgICAgIGFzdE5vZGVzID0gcGFyc2UoaHRtbCk7XG5cbiAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XG4gICAgICAgIGFzdE5vZGUuY29tcGlsZShzZXR0aW5ncyk7XG4gICAgfSk7XG4gICAgYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoYXN0Tm9kZSkge1xuICAgICAgICBhc3ROb2RlLm5vdGlmeUNvbXBpbGVkKHNldHRpbmdzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICAgIHNjb3BlLiQkY2hpbGRFbGVtZW50cyA9IGFzdE5vZGVzO1xuXG4gICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGFzdE5vZGUubGluayhzY29wZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoYXN0Tm9kZSkge1xuICAgICAgICAgICAgYXN0Tm9kZS5ub3RpZnlMaW5rZWQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGUoZXhwLCBzY29wZSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuY3JlYXRlRmlsdGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGluamVjdG9yLmNyZWF0ZUZpbHRlcihuYW1lKTtcbiAgICB9O1xuICAgIGlmIChvcHRpb25zLmNvbGxlY3RNZW1iZXJzKSB7XG4gICAgICAgIG9wdGlvbnMubWVtYmVycyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VFeHAoZXhwKS5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFeHAoZXhwKSB7XG4gICAgaWYgKGV4cCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHAgPSBleHAudHJpbSgpO1xuXG4gICAgaWYgKGV4cC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV4cCA9IGV4cC5yZXBsYWNlKCcmZ3Q7JywgJz4nKS5yZXBsYWNlKCcmbHQ7JywgJzwnKTtcblxuICAgIHZhciBsZXhlciA9IG5ldyBMZXhlcihwYXJzZU9wdGlvbnMpO1xuICAgIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKGxleGVyLCBwYXJzZU9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZShleHApO1xufVxuXG5mdW5jdGlvbiBwYXJzZUFzc2lnbm1lbnQoZXhwLCBzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciBhc3QgPSBwYXJzZUV4cChleHApO1xuICAgIHZhciBtZW1iZXJFeHAgPSBhc3QuZ2V0TWVtYmVyRXhwcmVzc2lvbigpO1xuXG4gICAgaWYgKG1lbWJlckV4cCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihleHAgKyAnaXMgbm90IHZhbGlkIG1lbWJlciBleHByZXNzaW9uJyk7XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICBvcHRpb25zLmNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVGaWx0ZXIobmFtZSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9iajogbWVtYmVyRXhwLm9iamVjdC5jb21wdXRlKHNjb3BlLCBvcHRpb25zLCB7fSwgc2NvcGUpLFxuICAgICAgICBwcm9wOiBtZW1iZXJFeHAucHJvcGVydHkuY29tcHV0ZShzY29wZSwgb3B0aW9ucywge30sIHNjb3BlKVxuICAgIH1cbn1cblxuZXhwb3J0IHsgY29tcGlsZSwgY29tcHV0ZSwgcGFyc2UsIHBhcnNlRXhwLCBwYXJzZUFzc2lnbm1lbnQgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcblxudmFyIE9QRVJBVE9SUyA9IHt9O1xudmFyIG9wZXJhdG9yVGV4dCA9ICcrIC0gKiAvICUgPT09ICE9PSA9PSAhPSA8ID4gPD0gPj0gJiYgfHwgISA9IHwnO1xudmFyIEVTQ0FQRSA9IHsgJ24nOiAnXFxuJywgJ2YnOiAnXFxmJywgJ3InOiAnXFxyJywgJ3QnOiAnXFx0JywgJ3YnOiAnXFx2JywgJ1xcJyc6ICdcXCcnLCAnXCInOiAnXCInIH07XG5cbm9wZXJhdG9yVGV4dC5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgT1BFUkFUT1JTW29wZXJhdG9yXSA9IHRydWU7XG59KTtcblxuZnVuY3Rpb24gTGV4ZXIob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG59XG5cbkxleGVyLnByb3RvdHlwZS5sZXggPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy50b2tlbnMgPSBbXTtcblxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLicgJiYgdGhpcy5pc051bWJlcih0aGlzLnBlZWsoKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZE51bWJlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXMoY2gsICcoKXt9W10uLDs6PycpKSB7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGNoIH0pO1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNoMiA9IGNoICsgdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICB2YXIgY2gzID0gY2gyICsgdGhpcy5wZWVrKDIpO1xuICAgICAgICAgICAgdmFyIG9wMSA9IE9QRVJBVE9SU1tjaF07XG4gICAgICAgICAgICB2YXIgb3AyID0gT1BFUkFUT1JTW2NoMl07XG4gICAgICAgICAgICB2YXIgb3AzID0gT1BFUkFUT1JTW2NoM107XG4gICAgICAgICAgICBpZiAob3AxIHx8IG9wMiB8fCBvcDMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBvcDMgPyBjaDMgOiAob3AyID8gY2gyIDogY2gpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogdG9rZW4sIG9wZXJhdG9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gdG9rZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRva2Vucztcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uIChjaCwgY2hhcnMpIHtcbiAgICByZXR1cm4gY2hhcnMuaW5kZXhPZihjaCkgIT09IC0xO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoaSkge1xuICAgIHZhciBudW0gPSBpIHx8IDE7XG4gICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDwgdGhpcy50ZXh0Lmxlbmd0aCkgPyB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXggKyBudW0pIDogZmFsc2U7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNOdW1iZXIgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICByZXR1cm4gKCcwJyA8PSBjaCAmJiBjaCA8PSAnOScpICYmIHR5cGVvZiBjaCA9PT0gJ3N0cmluZyc7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNXaGl0ZXNwYWNlID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgLy8gSUUgdHJlYXRzIG5vbi1icmVha2luZyBzcGFjZSBhcyBcXHUwMEEwXG4gICAgcmV0dXJuIChjaCA9PT0gJyAnIHx8IGNoID09PSAnXFxyJyB8fCBjaCA9PT0gJ1xcdCcgfHxcbiAgICAgICAgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnXFx2JyB8fCBjaCA9PT0gJ1xcdTAwQTAnKTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc0lkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQgP1xuICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XG4gICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XG4gICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlID9cbiAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxuICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gsIGNwKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmNvZGVQb2ludEF0ID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgaWYgKGNoLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gY2guY2hhckNvZGVBdCgwKTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICByZXR1cm4gKGNoLmNoYXJDb2RlQXQoMCkgPDwgMTApICsgY2guY2hhckNvZGVBdCgxKSAtIDB4MzVGREMwMDtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5wZWVrTXVsdGljaGFyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgdmFyIHBlZWsgPSB0aGlzLnBlZWsoKTtcbiAgICBpZiAoIXBlZWspIHtcbiAgICAgICAgcmV0dXJuIGNoO1xuICAgIH1cbiAgICB2YXIgY3AxID0gY2guY2hhckNvZGVBdCgwKTtcbiAgICB2YXIgY3AyID0gcGVlay5jaGFyQ29kZUF0KDApO1xuICAgIGlmIChjcDEgPj0gMHhEODAwICYmIGNwMSA8PSAweERCRkYgJiYgY3AyID49IDB4REMwMCAmJiBjcDIgPD0gMHhERkZGKSB7XG4gICAgICAgIHJldHVybiBjaCArIHBlZWs7XG4gICAgfVxuICAgIHJldHVybiBjaDtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc0V4cE9wZXJhdG9yID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgcmV0dXJuIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycgfHwgdGhpcy5pc051bWJlcihjaCkpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnRocm93RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIHN0YXJ0LCBlbmQpIHtcbiAgICBlbmQgPSBlbmQgfHwgdGhpcy5pbmRleDtcbiAgICB2YXIgY29sU3RyID0gKHV0aWxzLmlzRGVmaW5lZChzdGFydCkgPyAncyAnICsgc3RhcnQgKyAnLScgKyB0aGlzLmluZGV4ICsgJyBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCkgKyAnXScgOiAnICcgKyBlbmQpO1xuICAgIHRocm93IG5ldyBFcnJvcignTGV4ZXIgRXJyb3I6ICcgKyBlcnJvciArICcgYXQgY29sdW1uJyArIGNvbFN0ciArICcgaW4gZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddLicpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnJlYWROdW1iZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG51bWJlciA9ICcnO1xuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHV0aWxzLmxvd2VyY2FzZSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtcbiAgICAgICAgaWYgKGNoID09PSAnLicgfHwgdGhpcy5pc051bWJlcihjaCkpIHtcbiAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwZWVrQ2ggPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ2UnICYmIHRoaXMuaXNFeHBPcGVyYXRvcihwZWVrQ2gpKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXG4gICAgICAgICAgICAgICAgcGVla0NoICYmIHRoaXMuaXNOdW1iZXIocGVla0NoKSAmJlxuICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcbiAgICAgICAgICAgICAgICAoIXBlZWtDaCB8fCAhdGhpcy5pc051bWJlcihwZWVrQ2gpKSAmJlxuICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgZXhwb25lbnQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICB0ZXh0OiBudW1iZXIsXG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICB2YWx1ZTogTnVtYmVyKG51bWJlcilcbiAgICB9KTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5yZWFkSWRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB0aGlzLmluZGV4ICs9IHRoaXMucGVla011bHRpY2hhcigpLmxlbmd0aDtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy5wZWVrTXVsdGljaGFyKCk7XG4gICAgICAgIGlmICghdGhpcy5pc0lkZW50aWZpZXJDb250aW51ZShjaCkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZXggKz0gY2gubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICB0ZXh0OiB0aGlzLnRleHQuc2xpY2Uoc3RhcnQsIHRoaXMuaW5kZXgpLFxuICAgICAgICBpZGVudGlmaWVyOiB0cnVlXG4gICAgfSk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUucmVhZFN0cmluZyA9IGZ1bmN0aW9uIChxdW90ZSkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgdGhpcy5pbmRleCsrO1xuICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICB2YXIgcmF3U3RyaW5nID0gcXVvdGU7XG4gICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhleCA9IHRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcbiAgICAgICAgICAgICAgICBpZiAoIWhleC5tYXRjaCgvW1xcZGEtZl17NH0vaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIHVuaWNvZGUgZXNjYXBlIFtcXFxcdScgKyBoZXggKyAnXScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IDQ7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4LCAxNikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVwID0gRVNDQVBFW2NoXTtcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyAocmVwIHx8IGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVzY2FwZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGNoID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoY2ggPT09IHF1b3RlKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxuICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgcXVvdGUnLCBzdGFydCk7XG59O1xuXG5leHBvcnQgeyBMZXhlciB9OyIsImNsYXNzIE51bGxPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBOdWxsT2JqZWN0IH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQge2lzRmlsdGVyfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7TnVsbE9iamVjdH0gZnJvbSAnLi9udWxsLW9iamVjdCc7XG5cbnZhciBBU1QgPSB7fTtcbkFTVC5Qcm9ncmFtID0gJ1Byb2dyYW0nO1xuQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQgPSAnRXhwcmVzc2lvblN0YXRlbWVudCc7XG5BU1QuQXNzaWdubWVudEV4cHJlc3Npb24gPSAnQXNzaWdubWVudEV4cHJlc3Npb24nO1xuQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbiA9ICdDb25kaXRpb25hbEV4cHJlc3Npb24nO1xuQVNULkxvZ2ljYWxFeHByZXNzaW9uID0gJ0xvZ2ljYWxFeHByZXNzaW9uJztcbkFTVC5CaW5hcnlFeHByZXNzaW9uID0gJ0JpbmFyeUV4cHJlc3Npb24nO1xuQVNULlVuYXJ5RXhwcmVzc2lvbiA9ICdVbmFyeUV4cHJlc3Npb24nO1xuQVNULkNhbGxFeHByZXNzaW9uID0gJ0NhbGxFeHByZXNzaW9uJztcbkFTVC5NZW1iZXJFeHByZXNzaW9uID0gJ01lbWJlckV4cHJlc3Npb24nO1xuQVNULklkZW50aWZpZXIgPSAnSWRlbnRpZmllcic7XG5BU1QuTGl0ZXJhbCA9ICdMaXRlcmFsJztcbkFTVC5BcnJheUV4cHJlc3Npb24gPSAnQXJyYXlFeHByZXNzaW9uJztcbkFTVC5Qcm9wZXJ0eSA9ICdQcm9wZXJ0eSc7XG5BU1QuT2JqZWN0RXhwcmVzc2lvbiA9ICdPYmplY3RFeHByZXNzaW9uJztcblxuZnVuY3Rpb24gQXN0Tm9kZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbn1cblxuQXN0Tm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG59O1xuXG5Bc3ROb2RlLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC5jb21wdXRlKHNjb3BlLCBvcHRpb25zIHx8IHt9LCBjb250ZXh0KTtcbiAgICB9KTtcbn07XG5cbi8vIGhhcyBjb25kaXRpb24gb3IgY2FsbCBleHByZXNzaW9uXG5Bc3ROb2RlLnByb3RvdHlwZS5oYXNDQyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLnNvbWUoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC5oYXNDQygpO1xuICAgIH0pO1xufTtcblxudXRpbHMuaW5oZXJpdChQcm9ncmFtTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBQcm9ncmFtTm9kZSgpIHtcbiAgICBQcm9ncmFtTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Qcm9ncmFtKTtcbn1cblxuUHJvZ3JhbU5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5jaGlsZE5vZGVzWzBdLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMgfHwge30pO1xuXG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIE51bGxPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblByb2dyYW1Ob2RlLnByb3RvdHlwZS5nZXRNZW1iZXJFeHByZXNzaW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0uZ2V0TWVtYmVyRXhwcmVzc2lvbigpO1xufTtcblxudXRpbHMuaW5oZXJpdChFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSgpIHtcbiAgICBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50KTtcbn1cblxuRXhwcmVzc2lvblN0YXRlbWVudE5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGNvbnRleHQpO1xufTtcblxuRXhwcmVzc2lvblN0YXRlbWVudE5vZGUucHJvdG90eXBlLmdldE1lbWJlckV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuXG4gICAgaWYoY2hpbGQgaW5zdGFuY2VvZiBNZW1iZXJFeHByZXNzaW9uTm9kZSl7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbnV0aWxzLmluaGVyaXQoQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShsZWZ0LCByaWdodCwgb3BlcmF0b3IpIHtcbiAgICBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQXNzaWdubWVudEV4cHJlc3Npb24pO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbn1cblxuQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMubGVmdC5jb21wdXRlKHNjb3BlLCBvcHRpb25zLCB7IGFzc2lnbm1lbnRMZWZ0OiB0cnVlIH0pO1xuICAgIHZhciB2YWx1ZSA9IHRoaXMucmlnaHQuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG4gICAgdGFyZ2V0Lm9ialt0YXJnZXQucHJvcF0gPSB2YWx1ZTtcbn07XG5cbnV0aWxzLmluaGVyaXQoQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCkge1xuICAgIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uKTtcbiAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG59XG5cbkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy50ZXN0LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsdGVybmF0ZS5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVudC5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcbn07XG5cbi8vIGhhcyBjb25kaXRpb24gb3IgY2FsbCBleHByZXNzaW9uXG5Db25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5oYXNDQyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbnV0aWxzLmluaGVyaXQoTG9naWNhbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIExvZ2ljYWxFeHByZXNzaW9uTm9kZShvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcbiAgICBMb2dpY2FsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbn1cblxuTG9naWNhbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5sZWZ0LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5yaWdodC5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcblxuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xuICAgICAgICBjYXNlICcmJic6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd8fCc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG51dGlscy5pbmhlcml0KEJpbmFyeUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIEJpbmFyeUV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgIEJpbmFyeUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkJpbmFyeUV4cHJlc3Npb24pO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbn1cblxuQmluYXJ5RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmxlZnQuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG4gICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLnJpZ2h0LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuXG4gICAgLy8gJysnLCAnLScsICcqJywgJy8nLCAnJScsICc8JywgJz4nLCAnPD0nLCAnPj0nLCAnPT0nLCAnIT0nLCAnPT09JywgJyE9PSdcbiAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKyByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAqIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLyByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyUnOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICUgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPiByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJz09JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyE9JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJz09PSc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnIT09JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG51dGlscy5pbmhlcml0KFVuYXJ5RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gVW5hcnlFeHByZXNzaW9uTm9kZShvcGVyYXRvciwgYXJnKSB7XG4gICAgVW5hcnlFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5VbmFyeUV4cHJlc3Npb24pO1xuICAgIHRoaXMucHJlZml4ID0gdHJ1ZTtcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgdGhpcy5hcmcgPSBhcmc7XG59XG5cblVuYXJ5RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0LCB2YWx1ZSA9IHRoaXMuYXJnLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuXG4gICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICByZXN1bHQgPSAtdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnISc6XG4gICAgICAgICAgICByZXN1bHQgPSAhdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxudXRpbHMuaW5oZXJpdChMaXRlcmFsTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBMaXRlcmFsTm9kZSh2YWx1ZSkge1xuICAgIExpdGVyYWxOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkxpdGVyYWwpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cblxuTGl0ZXJhbE5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5MaXRlcmFsTm9kZS5wcm90b3R5cGUudG9UZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xufTtcblxudXRpbHMuaW5oZXJpdChDYWxsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gQ2FsbEV4cHJlc3Npb25Ob2RlKGNhbGxlZSwgYXJncykge1xuICAgIENhbGxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5DYWxsRXhwcmVzc2lvbik7XG4gICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgdGhpcy5hcmdzID0gYXJncztcbiAgICB0aGlzLmZpbHRlciA9IGZhbHNlO1xufVxuXG5DYWxsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY2FsbGVlLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMsIHtjYWxsZWU6IHRydWV9KTtcbiAgICB2YXIgYXJnVmFsdWVzID0gdGhpcy5hcmdzLm1hcChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiBhcmcuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5maWx0ZXIpIHtcbiAgICAgICAgdmFyIGZpbHRlcklucyA9IG9wdGlvbnMuY3JlYXRlRmlsdGVyKGNvbnRleHQucHJvcCk7XG4gICAgICAgIGlmIChpc0ZpbHRlcihmaWx0ZXJJbnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVySW5zLiRleGVjdXRlLmFwcGx5KGZpbHRlcklucywgYXJnVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpbHRlciBcIicgKyBjb250ZXh0LnByb3AgKyAnXCIgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBmbiA9IGNvbnRleHQub2JqW2NvbnRleHQucHJvcF07XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQub2JqLCBhcmdWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihjb250ZXh0LnByb3AgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgfVxufTtcblxuLy8gaGFzIGNvbmRpdGlvbiBvciBjYWxsIGV4cHJlc3Npb25cbkNhbGxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuaGFzQ0MgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICF0aGlzLmZpbHRlcjtcbn07XG5cbnV0aWxzLmluaGVyaXQoTWVtYmVyRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gTWVtYmVyRXhwcmVzc2lvbk5vZGUob2JqZWN0LCBwcm9wZXJ0eSwgY29tcHV0ZWQpIHtcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5NZW1iZXJFeHByZXNzaW9uKTtcbiAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XG59XG5cbk1lbWJlckV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgdmFyIG9iaiA9IHRoaXMub2JqZWN0LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKG9iaiA9PSBudWxsICYmIHRoaXMub2JqZWN0LmFsbG93TnVsbCkge1xuICAgICAgICBvYmogPSBuZXcgTnVsbE9iamVjdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbXB1dGVkKSB7XG4gICAgICAgIHZhciBwcm9wID0gdGhpcy5wcm9wZXJ0eS5jb21wdXRlKHNjb3BlLCBvcHRpb25zLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkob3B0aW9ucy5tZW1iZXJzKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5tZW1iZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhcmdldDogb2JqLFxuICAgICAgICAgICAgICAgIHRhcmdldEtleTogdGhpcy5vYmplY3QudG9UZXh0KCksXG4gICAgICAgICAgICAgICAga2V5OiBwcm9wXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqW3Byb3BdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3BlcnR5LmNvbXB1dGUob2JqLCBvcHRpb25zLCBjb250ZXh0LCB0aGlzLm9iamVjdCk7XG59O1xuXG5NZW1iZXJFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUudG9UZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdC50b1RleHQoKSArICcuJyArIHRoaXMucHJvcGVydHkudG9UZXh0KCk7XG59O1xuXG51dGlscy5pbmhlcml0KElkZW50aWZpZXJOb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIElkZW50aWZpZXJOb2RlKG5hbWUpIHtcbiAgICBJZGVudGlmaWVyTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5JZGVudGlmaWVyKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XG59XG5cbklkZW50aWZpZXJOb2RlLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKG9iaiwgb3B0aW9ucywgY29udGV4dCwgb2JqTm9kZSkge1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0LmFzc2lnbm1lbnRMZWZ0IHx8IGNvbnRleHQuY2FsbGVlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9iajogb2JqLFxuICAgICAgICAgICAgICAgIHByb3A6IHRoaXMubmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb250ZXh0LnByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IG9ialt0aGlzLm5hbWVdO1xuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXkob3B0aW9ucy5tZW1iZXJzKSkge1xuICAgICAgICBvcHRpb25zLm1lbWJlcnMucHVzaCh7XG4gICAgICAgICAgICB0YXJnZXQ6IG9iaixcbiAgICAgICAgICAgIHRhcmdldEtleTogb2JqTm9kZSAhPSBudWxsID8gb2JqTm9kZS50b1RleHQoKSA6IG51bGwsXG4gICAgICAgICAgICBrZXk6IHRoaXMubmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgb3B0aW9ucy5sb2NhbHMpIHtcbiAgICAgICAgcmVzdWx0ID0gb3B0aW9ucy5sb2NhbHNbdGhpcy5uYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuSWRlbnRpZmllck5vZGUucHJvdG90eXBlLnRvVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xufTtcblxudXRpbHMuaW5oZXJpdChBcnJheUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIEFycmF5RXhwcmVzc2lvbk5vZGUoKSB7XG4gICAgQXJyYXlFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5BcnJheUV4cHJlc3Npb24pO1xufVxuXG51dGlscy5pbmhlcml0KFByb3BlcnR5Tm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBQcm9wZXJ0eU5vZGUoKSB7XG4gICAgUHJvcGVydHlOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlByb3BlcnR5KTtcbiAgICB0aGlzLmtpbmQgPSAnaW5pdCc7XG4gICAgdGhpcy5rZXkgPSBudWxsO1xuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgIHRoaXMuY29tcHV0ZWQgPSBmYWxzZTtcbn1cblxuUHJvcGVydHlOb2RlLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiB0aGlzLmtleS5jb21wdXRlKHNjb3BlLCBvcHRpb25zLCB7IHByb3BlcnR5S2V5OiB0cnVlIH0pLFxuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZS5jb21wdXRlKHNjb3BlLCBvcHRpb25zKVxuICAgIH07XG59O1xuXG51dGlscy5pbmhlcml0KE9iamVjdEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpIHtcbiAgICBPYmplY3RFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5PYmplY3RFeHByZXNzaW9uKTtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xufVxuXG5PYmplY3RFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgIHRoaXMucHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHZhciBkZWYgPSBpdGVtLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuICAgICAgICByZXN1bHRbZGVmLmtleV0gPSBkZWYudmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZnVuY3Rpb24gaXNBc3NpZ25hYmxlKGFzdCkge1xuICAgIHJldHVybiBhc3QudHlwZSA9PT0gQVNULklkZW50aWZpZXIgfHwgYXN0LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uO1xufVxuXG5mdW5jdGlvbiBQYXJzZXIobGV4ZXIsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn1cblxuUGFyc2VyLnByb3RvdHlwZS50aHJvd0Vycm9yID0gZnVuY3Rpb24gKG1zZywgdG9rZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N5bnRheCBFcnJvcjogVG9rZW4gXFwnJyArIHRva2VuLnRleHQgKyAnXFwnJyArIG1zZyArICcgYXQgY29sdW1uICcgKyAodG9rZW4uaW5kZXggKyAxKSArXG4gICAgICAgICcgb2YgdGhlIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXSBzdGFydGluZyBhdCBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcodG9rZW4uaW5kZXgpICsgJ10uJyk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XG5cbiAgICB2YXIgdmFsdWUgPSB0aGlzLnByb2dyYW0oKTtcblxuICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBhbiB1bmV4cGVjdGVkIHRva2VuJywgdGhpcy50b2tlbnNbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucHJvZ3JhbSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtTm9kZSgpO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiAwICYmICF0aGlzLnBlZWsoJ30nLCAnKScsICc7JywgJ10nKSkge1xuICAgICAgICAgICAgcHJvZ3JhbS5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmV4cGVjdCgnOycpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblBhcnNlci5wcm90b3R5cGUuZXhwcmVzc2lvblN0YXRlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCk7XG4gICAgZXhwLmFwcGVuZENoaWxkKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XG4gICAgcmV0dXJuIGV4cDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuZmlsdGVyQ2hhaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3wnKSkge1xuICAgICAgICBsZWZ0ID0gdGhpcy5maWx0ZXIobGVmdCk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5leHByZXNzaW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuYXNzaWdubWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy50ZXJuYXJ5KCk7XG4gICAgaWYgKHRoaXMuZXhwZWN0KCc9JykpIHtcbiAgICAgICAgaWYgKCFpc0Fzc2lnbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYXNzaWduIGEgdmFsdWUgdG8gYSBub24gbC12YWx1ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gbmV3IEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShyZXN1bHQsIHRoaXMuYXNzaWdubWVudCgpLCAnPScpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS50ZXJuYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXN0ID0gdGhpcy5sb2dpY2FsT1IoKTtcbiAgICB2YXIgYWx0ZXJuYXRlO1xuICAgIHZhciBjb25zZXF1ZW50O1xuICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XG4gICAgICAgIGFsdGVybmF0ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICBpZiAodGhpcy5jb25zdW1lKCc6JykpIHtcbiAgICAgICAgICAgIGNvbnNlcXVlbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZXN0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5sb2dpY2FsT1IgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLmxvZ2ljYWxBTkQoKTtcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3x8JykpIHtcbiAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJ3x8JywgbGVmdCwgdGhpcy5sb2dpY2FsQU5EKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUubG9naWNhbEFORCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMuZXF1YWxpdHkoKTtcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJyYmJykpIHtcbiAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJyYmJywgbGVmdCwgdGhpcy5lcXVhbGl0eSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmVxdWFsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWZ0ID0gdGhpcy5yZWxhdGlvbmFsKCk7XG4gICAgdmFyIHRva2VuO1xuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPT0nLCAnIT0nLCAnPT09JywgJyE9PScpKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMucmVsYXRpb25hbCgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnJlbGF0aW9uYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLmFkZGl0aXZlKCk7XG4gICAgdmFyIHRva2VuO1xuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPCcsICc+JywgJzw9JywgJz49JykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5hZGRpdGl2ZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmFkZGl0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWZ0ID0gdGhpcy5tdWx0aXBsaWNhdGl2ZSgpO1xuICAgIHZhciB0b2tlbjtcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScpKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMubXVsdGlwbGljYXRpdmUoKSk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5tdWx0aXBsaWNhdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMudW5hcnkoKTtcbiAgICB2YXIgdG9rZW47XG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcqJywgJy8nLCAnJScpKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMudW5hcnkoKSk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS51bmFyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdG9rZW47XG4gICAgaWYgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nLCAnIScpKSkge1xuICAgICAgICByZXR1cm4gbmV3IFVuYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgdGhpcy51bmFyeSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmltYXJ5KCk7XG4gICAgfVxufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wcmltYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcmltYXJ5O1xuICAgIGlmICh0aGlzLmV4cGVjdCgnKCcpKSB7XG4gICAgICAgIHByaW1hcnkgPSB0aGlzLmZpbHRlckNoYWluKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ1snKSkge1xuICAgICAgICBwcmltYXJ5ID0gdGhpcy5hcnJheURlY2xhcmF0aW9uKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgneycpKSB7XG4gICAgICAgIHByaW1hcnkgPSB0aGlzLm9iamVjdCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmxpdGVyYWxzLmhhc093blByb3BlcnR5KHRoaXMucGVlaygpLnRleHQpKSB7XG4gICAgICAgIHByaW1hcnkgPSBuZXcgTGl0ZXJhbE5vZGUodGhpcy5vcHRpb25zLmxpdGVyYWxzW3RoaXMuY29uc3VtZSgpLnRleHRdKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuaWRlbnRpZmllcigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuY29uc3RhbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ25vdCBhIHByaW1hcnkgZXhwcmVzc2lvbicsIHRoaXMucGVlaygpKTtcbiAgICB9XG5cbiAgICB2YXIgbmV4dDtcbiAgICB3aGlsZSAodGhpcy5wZWVrKCcoJywgJ1snLCAnLicpIHx8ICh0aGlzLnBlZWsoJz8nKSAmJiB0aGlzLnBlZWtBaGVhZCgxLCAnLicpKSkge1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xuICAgICAgICAgICAgcHJpbWFyeS5hbGxvd051bGwgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dCA9IHRoaXMuZXhwZWN0KCcoJywgJ1snLCAnLicpO1xuXG4gICAgICAgIGlmIChuZXh0LnRleHQgPT09ICcoJykge1xuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5wYXJzZUFyZ3VtZW50cygpKTtcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xuICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJ1snKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuZXhwcmVzc2lvbigpLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJy4nKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuaWRlbnRpZmllcigpLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0lNUE9TU0lCTEUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJpbWFyeTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGJhc2VFeHByZXNzaW9uKSB7XG4gICAgdmFyIGFyZ3MgPSBbYmFzZUV4cHJlc3Npb25dLCBpZGVudGlmaWVycyA9IFt0aGlzLmlkZW50aWZpZXIoKV07XG5cbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJy4nKSkge1xuICAgICAgICBpZGVudGlmaWVycy5wdXNoKHRoaXMuaWRlbnRpZmllcigpKTtcbiAgICB9XG5cbiAgICAvLyBwbHVzIG5hbWVzcGFjZVxuICAgIHZhciBlbnRpcmVOYW1lID0gaWRlbnRpZmllcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLm5hbWU7XG4gICAgfSkuam9pbignLicpO1xuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUobmV3IElkZW50aWZpZXJOb2RlKGVudGlyZU5hbWUpLCBhcmdzKTtcblxuICAgIHJlc3VsdC5maWx0ZXIgPSB0cnVlO1xuXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCc6JykpIHtcbiAgICAgICAgYXJncy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wYXJzZUFyZ3VtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICcpJykge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5maWx0ZXJDaGFpbigpKTtcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgfVxuICAgIHJldHVybiBhcmdzO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5pZGVudGlmaWVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMuY29uc3VtZSgpO1xuICAgIGlmICghdG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIG5vdCBhIHZhbGlkIGlkZW50aWZpZXInLCB0b2tlbik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgSWRlbnRpZmllck5vZGUodG9rZW4udGV4dCk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmNvbnN0YW50ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE8gY2hlY2sgdGhhdCBpdCBpcyBhIGNvbnN0YW50XG4gICAgcmV0dXJuIG5ldyBMaXRlcmFsTm9kZSh0aGlzLmNvbnN1bWUoKS52YWx1ZSk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmFycmF5RGVjbGFyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyciA9IG5ldyBBcnJheUV4cHJlc3Npb25Ob2RlKCk7XG4gICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ10nKSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ10nKSkge1xuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyci5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgIH1cbiAgICB0aGlzLmNvbnN1bWUoJ10nKTtcblxuICAgIHJldHVybiBhcnI7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IFtdLCBwcm9wZXJ0eTtcbiAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnfScpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnfScpKSB7XG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHlOb2RlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmNvbnN0YW50KCk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCc6JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSBwcm9wZXJ0eS5rZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoJ1snKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnWycpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2ludmFsaWQga2V5JywgdGhpcy5wZWVrKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnR5KTtcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgfVxuICAgIHRoaXMuY29uc3VtZSgnfScpO1xuXG4gICAgcmV0dXJuIG5ldyBPYmplY3RFeHByZXNzaW9uTm9kZShwcm9wZXJ0aWVzKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuY29uc3VtZSA9IGZ1bmN0aW9uIChlMSkge1xuICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcbiAgICB9XG5cbiAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdChlMSk7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIHVuZXhwZWN0ZWQsIGV4cGVjdGluZyBbJyArIGUxICsgJ10nLCB0aGlzLnBlZWsoKSk7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbjtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucGVla1Rva2VuID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zWzBdO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgcmV0dXJuIHRoaXMucGVla0FoZWFkKDAsIGUxLCBlMiwgZTMsIGU0KTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucGVla0FoZWFkID0gZnVuY3Rpb24gKGksIGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IGkpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy50b2tlbnNbaV07XG4gICAgICAgIHZhciB0ID0gdG9rZW4udGV4dDtcbiAgICAgICAgaWYgKHQgPT09IGUxIHx8IHQgPT09IGUyIHx8IHQgPT09IGUzIHx8IHQgPT09IGU0IHx8XG4gICAgICAgICAgICAoIWUxICYmICFlMiAmJiAhZTMgJiYgIWU0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuZXhwZWN0ID0gZnVuY3Rpb24gKGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5wZWVrKGUxLCBlMiwgZTMsIGU0KTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgdGhpcy50b2tlbnMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgeyBQYXJzZXIgfTsiLCJleHBvcnQgKiBmcm9tICcuL3RlbXBsYXRlLWNhY2hlJztcclxuZXhwb3J0ICogZnJvbSAnLi9tb2RlbC1vcHRpb25zJzsiLCJpbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQHNlcnZpY2Uoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJyRtb2RlbE9wdGlvbnMnXHJcbn0pXHJcbmNsYXNzIE1vZGVsT3B0aW9uc1NlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jc3NDbGFzcyA9IHtcclxuICAgICAgICAgICAgcHJpc3RpbmU6ICduLXByaXN0aW5lJyxcclxuICAgICAgICAgICAgZGlydHk6ICduLWRpcnR5JyxcclxuICAgICAgICAgICAgdmFsaWQ6ICduLXZhbGlkJyxcclxuICAgICAgICAgICAgaW52YWxpZDogJ24taW52YWxpZCdcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgaHR0cEdldCB9IGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBzZXJ2aWNlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJyR0ZW1wbGF0ZUNhY2hlJ1xufSlcbmNsYXNzIFRlbXBsYXRlQ2FjaGVTZXJ2aWNlIGV4dGVuZHMgU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHBsQ2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9taXNlQ2FjaGUgPSB7fTtcbiAgICB9XG5cbiAgICBnZXRUcGxCeVVybCh1cmwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnRwbENhY2hlW3VybF0pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc2VsZi50cGxDYWNoZVt1cmxdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnByb21pc2VDYWNoZVt1cmxdKSB7XG4gICAgICAgICAgICB0aGlzLnByb21pc2VDYWNoZVt1cmxdID0gaHR0cEdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIHNlbGYucHJvbWlzZUNhY2hlW3VybF0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGYudHBsQ2FjaGVbdXJsXSA9IHJlcy5kYXRhIHx8ICcnO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRwbENhY2hlW3VybF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2VDYWNoZVt1cmxdO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcclxuXHJcbnZhciByZWFkeVN0YXRlRW51bSA9IHtcclxuICAgIHN0YXJ0OiAwLFxyXG4gICAgb3BlbmVkOiAxLFxyXG4gICAgc2VudDogMixcclxuICAgIHJlY2VpdmVkOiAzLFxyXG4gICAgZmluaXNoOiA0XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVYSFIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb21pc2UocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSwgcmVqZWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVXJsUGFyYW0odXJsLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJyk7XHJcbiAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuICAgIHJldHVybiB1cmw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XHJcbiAgICB2YXIgcGFyc2VkID0ge307XHJcbiAgICB2YXIga2V5O1xyXG4gICAgdmFyIHZhbDtcclxuICAgIHZhciBpO1xyXG5cclxuICAgIGlmICghaGVhZGVycykge1xyXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUsIGluZGV4KSB7XHJcbiAgICAgICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xyXG4gICAgICAgIGtleSA9IGxpbmUuc3Vic3RyKDAsIGkpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhbCA9IGxpbmUuc3Vic3RyKGkgKyAxKS50cmltKCk7XHJcblxyXG4gICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcnNlZDtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRVcmwodXJsLCBjb25maWcpIHtcclxuICAgIGlmIChjb25maWcuZGF0YSAhPSBudWxsICYmIGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKSA9PT0gJ2dldCcpIHtcclxuICAgICAgICB1dGlscy5mb3JFYWNoKGNvbmZpZy5kYXRhLCBmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcclxuICAgICAgICAgICAgYWRkVXJsUGFyYW0odXJsLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciB4aHIgPSBjcmVhdGVYSFIoKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoY29uZmlnLmRhdGEpKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuZGF0YVsnQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgheGhyIHx8IHhoci5yZWFkeVN0YXRlICE9PSByZWFkeVN0YXRlRW51bS5maW5pc2gpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDAgJiYgISh4aHIucmVzcG9uc2VVUkwgJiYgeGhyLnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiB4aHIgPyBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyB4aHIucmVzcG9uc2VUZXh0IDogeGhyLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcclxuICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogeGhyXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHx8IHhoci5zdGF0dXMgPT0gMzA0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdWNjZXNzZnVsbHlcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdW5zdWNjZXNzZnVsbHlcclxuICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHhociA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3Blbihjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCksIGJ1aWxkVXJsKGNvbmZpZy51cmwsIGNvbmZpZyksIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKGNvbmZpZy5kYXRhKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBodHRwR2V0KHVybCwgZGF0YSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH07XHJcblxyXG4gICAgaWYgKG9wdGlvbnMgIT0gbnVsbCkge1xyXG4gICAgICAgIHV0aWxzLmV4dGVuZChjb25maWcsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXF1ZXN0KGNvbmZpZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGh0dHBQb3N0KHVybCwgZGF0YSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChvcHRpb25zICE9IG51bGwpIHtcclxuICAgICAgICB1dGlscy5leHRlbmQoY29uZmlnLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVxdWVzdChjb25maWcpO1xyXG59XHJcblxyXG5leHBvcnQgeyBodHRwR2V0LCBodHRwUG9zdCB9XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9ub2RlJztcbmV4cG9ydCAqIGZyb20gJy4vaHR0cCc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBNZXNzZW5nZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgfVxuXG4gICAgb24oZm4pIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZm4pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVyc1tpXSA9PT0gZm4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmUoYXJncywgc2NvcGUpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IHRoaXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5oYW5kbGVyc1tpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHRoaXMuaGFuZGxlcnNbaV0uY2FsbChzY29wZSwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbn1cblxuY2xhc3MgTWVzc2VuZ2VyQnVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZXNzZW5nZXJzID0ge307XG4gICAgfVxuXG4gICAgZ2V0KGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NlbmdlcnNbZV0pIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2VuZ2Vyc1tlXSA9IG5ldyBNZXNzZW5nZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzZW5nZXJzW2VdO1xuICAgIH1cblxuICAgIG9uKGUsIGZuKSB7XG4gICAgICAgIHRoaXMuZ2V0KGUpLm9uKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZSwgZm4pIHtcbiAgICAgICAgdGhpcy5nZXQoZSkub2ZmKGZuKTtcbiAgICB9XG5cbiAgICBmaXJlKGUsIGFyZ3MsIHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChlKS5maXJlKGFyZ3MsIHNjb3BlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzTWVzc2VuZ2VyKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNZXNzZW5nZXI7XG59XG5cbmV4cG9ydCB7IE1lc3NlbmdlciwgTWVzc2VuZ2VyQnVzLCBpc01lc3NlbmdlciB9OyIsIlxuZnVuY3Rpb24gZ2V0Q2hpbGROb2Rlcyhub2RlKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGUuY2hpbGROb2RlcywgMCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2hpbGROb2Rlcyhub2RlKSB7XG4gICAgZ2V0Q2hpbGROb2Rlcyhub2RlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZU5vZGUocmVmTm9kZSwgbmV3Tm9kZSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmTm9kZSk7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVmTm9kZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlQmV0d2VlbihiZWdpbk5vZGUsIGVuZE5vZGUpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGJlZ2luTm9kZS5wYXJlbnROb2RlO1xuICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhwYXJlbnROb2RlKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyA9PT0gYmVnaW5Ob2RlICYmIGNoaWxkICE9PSBlbmROb2RlKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgPT09IGVuZE5vZGUgJiYgY2hpbGQgIT09IGJlZ2luTm9kZSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Tm9kZUFmdGVyKHJlZk5vZGUsIG5ld05vZGUpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHJlZk5vZGUucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnROb2RlLmxhc3RDaGlsZCA9PT0gcmVmTm9kZSkge1xuICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld05vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcXVlcnlFbGVtZW50TG9hZGVkKGVsZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgY2FuY2VsVG9rZW4gPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHF1ZXJ5KCkge1xuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGUuY2xpZW50V2lkdGggPiAwICYmIGVsZS5jbGllbnRIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcXVlcnlFbGVtZW50VW5sb2FkZWQoZWxlLCBjYWxsYmFjaykge1xuICAgIHZhciBjYW5jZWxUb2tlbiA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gcXVlcnkoKSB7XG4gICAgICAgIGlmIChjYW5jZWxUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZS5jbGllbnRXaWR0aCA9PT0gMCAmJiBlbGUuY2xpZW50SGVpZ2h0ID09IDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbmNlbFRva2VuID0gdHJ1ZTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnRTdGF0ZShlbGUsIGNhbGxiYWNrcykge1xuICAgIHZhciBjYW5jZWxUb2tlbiA9IGZhbHNlLCBsb2FkZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHF1ZXJ5KCkge1xuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGUuY2xpZW50V2lkdGggPiAwICYmIGVsZS5jbGllbnRIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICBpZiAoIWxvYWRlZCkge1xuICAgICAgICAgICAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkVudGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uRW50ZXIuY2FsbChjYWxsYmFja3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uTGVhdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Mub25MZWF2ZS5jYWxsKGNhbGxiYWNrcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FuY2VsVG9rZW4gPSB0cnVlO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzIChlbCwgY2xzKSB7XG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICAgICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsLCBjbHMpIHtcbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QucmVtb3ZlKGMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbC5jbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgICAgICB2YXIgdGFyID0gJyAnICsgY2xzICsgJyAnO1xuICAgICAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XG4gICAgICAgICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgY3VyID0gY3VyLnRyaW0oKTtcbiAgICAgICAgaWYgKGN1cikge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGN1cik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0Q2hpbGROb2RlcyxcbiAgICBjbGVhckNoaWxkTm9kZXMsXG4gICAgcmVwbGFjZU5vZGUsXG4gICAgcmVtb3ZlTm9kZSxcbiAgICByZW1vdmVOb2RlQmV0d2VlbixcbiAgICBpbnNlcnROb2RlQWZ0ZXIsXG4gICAgcXVlcnlFbGVtZW50TG9hZGVkLFxuICAgIHF1ZXJ5RWxlbWVudFVubG9hZGVkLFxuICAgIHF1ZXJ5RWxlbWVudFN0YXRlLFxuICAgIGFkZENsYXNzLFxuICAgIHJlbW92ZUNsYXNzXG59OyIsInZhciBkZWJ1Z01vZGUgPSB0cnVlLFxuICAgIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGFjdGlvbiwgaWdub3JlT3duKSB7XG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKGFjdGlvbihvYmpbaW5kZXhdLCBpbmRleCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGlnbm9yZU93biB8fCBvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKG9ialtwXSwgcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYWN0aW9uKG9iaiwgb2JqKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNvbWUob2JqLCBhY3Rpb24pIHtcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKGluZGV4LCBvYmpbaW5kZXhdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKHAsIG9ialtwXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYWN0aW9uKG9iaiwgb2JqKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgb2JqSW5kZXggPSAwLCBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdLCBmaWx0ZXI7XG5cbiAgICBpZiAoaXNCb29sZWFuKG9iaikpIHtcbiAgICAgICAgZGVlcCA9IG9iajtcbiAgICAgICAgb2JqSW5kZXgrKztcbiAgICAgICAgb2JqID0gYXJndW1lbnRzW29iakluZGV4XTtcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IG9iakluZGV4ICsgMSkge1xuICAgICAgICBmaWx0ZXIgPSBhcmd1bWVudHNbb2JqSW5kZXggKyAxXTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBuZXdBcnIgPSBbXTtcbiAgICAgICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwgaW5kZXgsIGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZGVlcCA/IGNvcHkoaXRlbSkgOiBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgdmFyIG5ld09iaiA9IG9iamVjdChvYmopO1xuICAgICAgICBmb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBrZXksIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gZGVlcCA/IGNvcHkodmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICBpZiAoaXNCb29sZWFuKHRhcmdldCkpIHtcbiAgICAgICAgZGVlcCA9IHRhcmdldDtcbiAgICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWysraW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0ge307XG5cbiAgICBpZiAoaXNCb29sZWFuKGFyZ3VtZW50c1tpbmRleF0pKSB7XG4gICAgICAgIGRlZXAgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gcGxhaW5NZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodGFyZ2V0W2tleV0pICYmIGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvYmplY3Qobykge1xuICAgIGZ1bmN0aW9uIEYoKSB7XG4gICAgfVxuXG4gICAgRi5wcm90b3R5cGUgPSBvO1xuICAgIHJldHVybiBuZXcgRigpO1xufVxuXG5mdW5jdGlvbiBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSkge1xuICAgIHZhciBwcm90b3R5cGUgPSBvYmplY3Qoc3VwZXJUeXBlLnByb3RvdHlwZSk7XG4gICAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViVHlwZTtcbiAgICBzdWJUeXBlLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdChzdWJUeXBlLCBzdXBlclR5cGUpIHtcbiAgICBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSk7XG4gICAgc3ViVHlwZS5zdXBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3VwZXJUeXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvTG93ZXJDYXNlKCkgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHVwcGVyY2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b1VwcGVyQ2FzZSgpIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGlzTWFwKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNYXA7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzQmxhbmtPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZShvYmoxLCBvYmoyKSB7XG4gICAgdmFyIHNhbWUgPSAob2JqMSA9PT0gb2JqMik7XG5cbiAgICBpZiAoIXNhbWUpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xuICAgICAgICAgICAgaWYgKG9iajEubGVuZ3RoID09PSBvYmoyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqMSkgJiYgaXNPYmplY3Qob2JqMikgJiYgZ2V0UHJvdG90eXBlT2Yob2JqMSkgPT09IGdldFByb3RvdHlwZU9mKG9iajIpKSB7XG4gICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltrZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbWU7XG59XG5cbmZ1bmN0aW9uIGRlYnVnKGxvZykge1xuICAgIGlmIChkZWJ1Z01vZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2cobG9nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKGFyciwgb2JqKSB7XG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBvYmo7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zU3RyKGFyciwgc3RyLCBpZ25vcmVDYXNlKSB7XG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBzdHIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGl0ZW0pID09PSBsb3dlcmNhc2Uoc3RyKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaiwga2V5LCBpZ25vcmVDYXNlKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XG5cbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzUHJvcDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xuXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcbiAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc1Byb3AgPyB0YXJnZXQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUsIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcblxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXkyXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcbiAgICAgICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWhhc1Byb3ApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICc6IENhbiBub3Qgc2V0IHByb3BlcnR5IG9mIHVuZGVmaW5lZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvcmRlckJ5KGFyciwgZ2V0dGVyKSB7XG4gICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb3JkZXJCeURlc2NlbmRpbmcoYXJyLCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgcmV0dXJuIGlzTmFOKG4pID8gdmFsdWUgOiBuO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoYXJyLCBpdGVtKSB7XG4gICAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdCgpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoLCBtYXRjaFRleHQsIGluZGV4LCB0ZXh0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICBwbGFjZUhvZGVyID0gL1xceyhcXGQrKVxcfS9nO1xuXG4gICAgd2hpbGUgKG1hdGNoID0gcGxhY2VIb2Rlci5leGVjKHRleHQpKSB7XG4gICAgICAgIG1hdGNoVGV4dCA9IG1hdGNoWzBdO1xuICAgICAgICBpbmRleCA9IE51bWJlci5wYXJzZUludChtYXRjaFsxXSkgKyAxO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Zvcm1hdCBpdGVtICcgKyBpbmRleCArICdpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIG1hdGNoLmluZGV4KSArIGFyZ3VtZW50c1tpbmRleF0gKyB0ZXh0LnN1YnN0cmluZyhtYXRjaC5pbmRleCArIG1hdGNoVGV4dC5sZW5ndGgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xufVxuXG5leHBvcnQge1xuICAgIGZvckVhY2gsXG4gICAgc29tZSxcbiAgICBjb3B5LFxuICAgIGV4dGVuZCxcbiAgICBtZXJnZSxcbiAgICBvYmplY3QsXG4gICAgaW5oZXJpdCxcbiAgICBsb3dlcmNhc2UsXG4gICAgdXBwZXJjYXNlLFxuICAgIGlzVW5kZWZpbmVkLFxuICAgIGlzRGVmaW5lZCxcbiAgICBpc09iamVjdCxcbiAgICBpc0JsYW5rT2JqZWN0LFxuICAgIGlzTnVtYmVyLFxuICAgIGlzRGF0ZSxcbiAgICBpc0Z1bmN0aW9uLFxuICAgIGlzUmVnRXhwLFxuICAgIGlzQm9vbGVhbixcbiAgICBpc0FycmF5LFxuICAgIGlzU3RyaW5nLFxuICAgIGlzU2FtZSxcbiAgICBpc0Zvcm1EYXRhLFxuICAgIGRlYnVnLFxuICAgIGNvbnRhaW5zLFxuICAgIGNvbnRhaW5zU3RyLFxuICAgIGhhc1Byb3BlcnR5LFxuICAgIGdldFByb3BlcnR5LFxuICAgIHNldFByb3BlcnR5LFxuICAgIGNvbmNhdCxcbiAgICBvcmRlckJ5LFxuICAgIG9yZGVyQnlEZXNjZW5kaW5nLFxuICAgIHRvTnVtYmVyLFxuICAgIHJlbW92ZSxcbiAgICBmb3JtYXRcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgY29tcGlsZSwgY29tcHV0ZSB9IGZyb20gJy4uL3BhcnNlcic7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICBnZXQgJHByb3h5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b1Byb3h5KCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobWV0YSkge1xuICAgICAgICBDb21wb25lbnQuY29uc3RydWN0LmNhbGwodGhpcywgbWV0YSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdChtZXRhKSB7XG4gICAgICAgIHRoaXMuJCRlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLiQkcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cyA9IFtdO1xuICAgICAgICB0aGlzLiQkY2hpbGREaXJlY3RpdmVzID0gW107XG4gICAgICAgIHRoaXMuJCRkZXRlY3RUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJG9ic2VydmVyID0gbmV3IE9ic2VydmVyKCk7XG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMgPSBbXTtcblxuICAgICAgICBpZiAobWV0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRzZXRNZXRhKG1ldGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XG4gICAgfVxuXG4gICAgJGhvb2tzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmVmb3JlQXR0ckNoYW5nZTogJycsXG4gICAgICAgICAgICBhZnRlckF0dHJDaGFuZ2U6ICcnLFxuICAgICAgICAgICAgb25Jbml0OiAnJyxcbiAgICAgICAgICAgIGJlZm9yZVZpZXdJbml0OiAnJyxcbiAgICAgICAgICAgIGFmdGVyVmlld01vdW50OiAnJyxcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXRNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgJGJpbmROb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy4kJGVsZW1lbnQgPSBub2RlO1xuICAgIH1cblxuICAgICRoYXNBdHRyKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMsIHByb3AsIHRydWUpO1xuICAgIH1cblxuICAgICRpbml0QXR0cihwcm9wLCB2YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBwcm9wLCB0cnVlKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmJlZm9yZUF0dHJDaGFuZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLmJlZm9yZUF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcywgcHJvcCwgdmFsdWUsIHRydWUpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuYWZ0ZXJBdHRyQ2hhbmdlKSkge1xuICAgICAgICAgICAgdGhpcy5hZnRlckF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGluaXRBdHRyRG9uZSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkluaXQpKSB7XG4gICAgICAgICAgICB0aGlzLm9uSW5pdC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHNldEF0dHIocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywgcHJvcCwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5iZWZvcmVBdHRyQ2hhbmdlKSkge1xuICAgICAgICAgICAgdGhpcy5iZWZvcmVBdHRyQ2hhbmdlLmNhbGwodGhpcywgcHJvcCwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMuJHByb3h5LCBwcm9wLCB2YWx1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5hZnRlckF0dHJDaGFuZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLmFmdGVyQXR0ckNoYW5nZS5jYWxsKHRoaXMsIHByb3AsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkbGlzdGVuKGUsIGZuKSB7XG4gICAgICAgIHZhciBtZXNzZW5nZXIgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBlLCB0cnVlKTtcbiAgICAgICAgaWYgKHV0aWxzLmlzTWVzc2VuZ2VyKG1lc3NlbmdlcikpIHtcbiAgICAgICAgICAgIG1lc3Nlbmdlci5vbihmbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUgKyAnIGlzIG5vdCBhIGV2ZW50Jyk7XG4gICAgfVxuXG4gICAgJGdldFRlbXBsYXRlKHN5bmMpIHtcbiAgICAgICAgdmFyIG1ldGEgPSB0aGlzLiRnZXRNZXRhKCk7XG5cbiAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRhLnRlbXBsYXRlIHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG1ldGEudGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS50ZW1wbGF0ZVVybCkpIHtcbiAgICAgICAgICAgICAgICBpbmplY3Rvci5zZXJ2aWNlKCckdGVtcGxhdGVDYWNoZScpLmdldFRwbEJ5VXJsKG1ldGEudGVtcGxhdGVVcmwpLnRoZW4oZnVuY3Rpb24gKHRwbCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRwbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJHVzaW5nKG5hbWUpIHtcbiAgICAgICAgdmFyIG1ldGEgPSB0aGlzLiRnZXRNZXRhKCksXG4gICAgICAgICAgICB1c2luZyA9IG1ldGEudXNpbmcsXG4gICAgICAgICAgICBzZWdtZW50cyA9IG5hbWUuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHNlZ21lbnRzLnBvcCgpLFxuICAgICAgICAgICAgc3BhY2VOYW1lID0gc2VnbWVudHMuam9pbignLicpO1xuXG4gICAgICAgIGlmIChzcGFjZU5hbWUgJiYgdXRpbHMuaXNPYmplY3QodXNpbmcpKSB7XG4gICAgICAgICAgICB1dGlscy5zb21lKHVzaW5nLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IHNwYWNlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gdmFsdWUgKyAnLicgKyBjbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgJG1ha2VDb21waWxlT3B0aW9ucygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0RW1iZWRUcGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi4kJGVsZW1lbnQuZ2V0SW5uZXJUcGwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluc0NvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY29udGFpbnNDb21wb25lbnQoc2VsZi4kdXNpbmcobmFtZSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUNvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KHNlbGYuJHVzaW5nKG5hbWUpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluc0RpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY29udGFpbnNEaXJlY3RpdmUoc2VsZi4kdXNpbmcobmFtZSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZURpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlRGlyZWN0aXZlKHNlbGYuJHVzaW5nKG5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkaGFzVmlldygpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmlzQXJyYXkodGhpcy4kJGNoaWxkRWxlbWVudHMpO1xuICAgIH1cblxuICAgICRzaG93VmlldygpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICAgIHRoaXMuJCRjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjaGlsZC5nZXRIdG1sRWxlbWVudCgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuICAgICRjbGVhclZpZXcoKSB7XG4gICAgICAgIGlmICghdGhpcy4kaGFzVmlldygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJCRjaGlsZEVsZW1lbnRzID0gbnVsbDtcbiAgICB9XG5cbiAgICAkcmVuZGVyKHN5bmMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBmcmFnbWVudCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRoYXNWaWV3KCkpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IHRoaXMuJHNob3dWaWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGNvbXBpbGUodGhpcy4kZ2V0VGVtcGxhdGUoc3luYyksIHRoaXMuJG1ha2VDb21waWxlT3B0aW9ucygpKSh0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi4kaGFzVmlldygpKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzZWxmLiRzaG93VmlldygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuJGdldFRlbXBsYXRlKCkudGhlbihmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGNvbXBpbGUoaHRtbCwgc2VsZi4kbWFrZUNvbXBpbGVPcHRpb25zKCkpKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJHJlZnJlc2goc3luYykge1xuICAgICAgICB0aGlzLiRjbGVhclZpZXcoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJlbmRlcihzeW5jKTtcbiAgICB9XG5cbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBlbGVtZW50LCBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZWN0b3JPckVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMuYXBwZW5kKSB7XG4gICAgICAgICAgICB1dGlscy5jbGVhckNoaWxkTm9kZXMoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5zeW5jKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJHJlbmRlcihvcHRpb25zLnN5bmMpKTtcbiAgICAgICAgICAgIHNlbGYuJGFmdGVyVmlld01vdW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRyZW5kZXIob3B0aW9ucy5zeW5jKS50aGVuKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZSk7XG4gICAgICAgICAgICAgICAgc2VsZi4kYWZ0ZXJWaWV3TW91bnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLiQkZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudC4kcmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudC5yZW1vdmVIdG1sRWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuJGhhc1ZpZXcoKSkge1xuICAgICAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmVIdG1sRWxlbWVudCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kJHBhcmVudENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkcGFyZW50Q29tcG9uZW50LiRyZW1vdmVDaGlsZENtcCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGFmdGVyVmlld01vdW50KCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmFmdGVyVmlld01vdW50KSkge1xuICAgICAgICAgICAgdGhpcy5hZnRlclZpZXdNb3VudC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJCRkZXRlY3RUaW1lb3V0IHx8ICF0aGlzLiQkY2hpbGRFbGVtZW50cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLiQkZGV0ZWN0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi4kJGRldGVjdFRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXRlY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkdmFsaWRhdGUoKSB7XG4gICAgICAgIHZhciBvYmosIHByb3AsIGFjdGlvbiwgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIG9iaiA9IHRoaXM7XG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIG9iaiA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3VtZW50cyBlcnJvcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuJCRvYnNlcnZlci52YWxpZGF0ZShvYmosIHByb3AsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgJHdhdGNoKCkge1xuICAgICAgICB2YXIgb2JqLCBwcm9wLCBhY3Rpb24sIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBvYmogPSB0aGlzO1xuICAgICAgICAgICAgcHJvcCA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBvYmogPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgYWN0aW9uID0gYXJndW1lbnRzWzJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmd1bWVudHMgZXJyb3InKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLiQkb2JzZXJ2ZXIud2F0Y2gob2JqLCBwcm9wLCBhY3Rpb24pO1xuICAgIH1cblxuICAgICRldmFsKGV4cCkge1xuICAgICAgICByZXR1cm4gY29tcHV0ZShleHAsIHRoaXMpO1xuICAgIH1cblxuICAgICRnZXRQYXJlbnRDbXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkcGFyZW50Q29tcG9uZW50O1xuICAgIH1cblxuICAgICRyZW1vdmVDaGlsZENtcChjaGlsZENtcCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiQkY2hpbGRDb21wb25lbnRzLmluZGV4T2YoY2hpbGRDbXApO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGNoaWxkQ21wLiQkcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRjcmVhdGVDaGlsZENtcChjaGlsZENtcCkge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGNoaWxkQ21wKTtcbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbXBvbmVudC4kJHBhcmVudENvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgJGluaGVyaXRDbXAocGFyZW50Q21wKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc2VsZiwgdXRpbHMub2JqZWN0KHBhcmVudENtcCkpO1xuXG4gICAgICAgIC8vIHRvZG8gLSByZXNvbHZlIGlzc3VlIGNhbGxpbmcgcGFyZW50IGNvbXBvbmVudCdzIGxpZmVjeWNsZSBob29rc1xuICAgICAgICB1dGlscy5mb3JFYWNoKHNlbGYuJGhvb2tzKCksIGZ1bmN0aW9uIChoYW5kbGVyLCBob29rKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5oYXNPd25Qcm9wZXJ0eShob29rKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2VsZltob29rXSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMucHVzaChwYXJlbnRDbXAuJHZhbGlkYXRlKCcqJywgZnVuY3Rpb24gKHByb3AsIGFyZ3MpIHtcbiAgICAgICAgICAgIHNlbGYuJCRvYnNlcnZlci5maXJlQ2hhbmdpbmcoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLiQkZGlzcG9zZXJzLnB1c2gocGFyZW50Q21wLiR3YXRjaCgnKicsIGZ1bmN0aW9uIChwcm9wLCBhcmdzKSB7XG4gICAgICAgICAgICBzZWxmLiQkb2JzZXJ2ZXIuZmlyZUNoYW5nZWQoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAkZGlzcG9zZShkZXN0cm95RnJvbUVsZW1lbnQpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHZpcnR1YWwgbm9kZSBmaXJzdCBpbiBjYXNlIGl0IHRyaWdnZXJzIHBhcmVudCBjb21wb25lbnQgZGVzdHJveVxuICAgICAgICB0aGlzLiR1bm1vdW50KCk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJCRkZXRlY3RUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy4kJGRldGVjdFRpbWVvdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kJGRpc3Bvc2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChkaXNwb3Nlcikge1xuICAgICAgICAgICAgZGlzcG9zZXIuY2FsbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRjbGVhclZpZXcoKTtcbiAgICAgICAgdGhpcy4kJG9ic2VydmVyLmRlc3Ryb3koKTtcblxuICAgICAgICBpZiAoZGVzdHJveUZyb21FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGNoaWxkRGlyZWN0aXZlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJGRpc3Bvc2UoKTtcblxuICAgICAgICAvLyBkZXN0cm95IHZpcnR1YWwgbm9kZSBpbiB0aGUgZW5kIGJlY2F1c2UgaXQgbWF5IGJpbmRzIGxvZ2ljIGFib3V0IGRlc3Ryb3lcbiAgICAgICAgaWYgKHRoaXMuJCRlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJCRlbGVtZW50LmRpc3Bvc2UodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQge2luamVjdG9yfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZSB7XG4gICAgZ2V0ICRodG1sRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaHRtbEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgJGNvbXBvbmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQub3duZXJDb21wb25lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgJHNjb3BlKCkge1xuICAgICAgICBpZiAodGhpcy4kYmluZGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kYmluZGluZy5zY29wZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBEaXJlY3RpdmUuY29uc3RydWN0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgLy8gcHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMgPSBbXTtcbiAgICAgICAgdGhpcy4kJGNhbmNlbEFuaW1hdGlvblRva2VuID0gZmFsc2U7XG4gICAgICAgIC8vIHByaXZhdGUgcHJvcGVydGllc1xuXG4gICAgICAgIC8vIHB1YmxpYyBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuJG91dHB1dCA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRiaW5kaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy4kYXR0ciA9IG51bGw7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLiRwcmlvcml0eSA9IDA7XG4gICAgICAgIHRoaXMuJGVsZW1lbnRsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gcHVibGljIHByb3BlcnRpZXNcblxuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcbiAgICB9XG5cbiAgICAkaG9va3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxuICAgICAgICAgICAgb25Db21waWxlOiAnJyxcbiAgICAgICAgICAgIG9uSW5zZXJ0OiAnJyxcbiAgICAgICAgICAgIG9uRGV0ZWN0OiAnJyxcbiAgICAgICAgICAgIG9uVXBkYXRlOiAnJyxcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXRNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgJGJpbmROb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy4kYXR0ciA9IG5vZGU7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBub2RlLm93bmVyRWxlbWVudDtcbiAgICB9XG5cbiAgICAkc2V0QmluZGluZyhiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMuJGJpbmRpbmcgPSBiaW5kaW5nO1xuICAgIH1cblxuICAgICRjb21waWxlKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkNvbXBpbGUpKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGlsZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGluc2VydCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25JbnNlcnQpKSB7XG4gICAgICAgICAgICB0aGlzLm9uSW5zZXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRW50ZXIpIHx8IHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkxlYXZlKSkge1xuICAgICAgICAgICAgdGhpcy4kcmVxdWVzdEFuaW1hdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGlzTG9hZGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kaHRtbEVsZW1lbnQuY2xpZW50V2lkdGggPiAwICYmIHRoaXMuJGh0bWxFbGVtZW50LmNsaWVudEhlaWdodCA+IDA7XG4gICAgfVxuXG4gICAgJHJlcXVlc3RBbmltYXRpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBmdW5jdGlvbiBxdWVyeSgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLiQkY2FuY2VsQW5pbWF0aW9uVG9rZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLiRpc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLiRlbGVtZW50bG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVsZW1lbnRsb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vbkVudGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25FbnRlci5jYWxsKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuJGVsZW1lbnRsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZWxlbWVudGxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vbkxlYXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25MZWF2ZS5jYWxsKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICAkY2FuY2VsQW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLiQkY2FuY2VsQW5pbWF0aW9uVG9rZW4gPSB0cnVlO1xuICAgIH1cblxuICAgICRkZXRlY3QoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXRlY3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRldGVjdC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJGJpbmRpbmcuZGV0ZWN0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vblVwZGF0ZSkpIHtcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRnZXRBdHRyVmFsdWUoYXR0ck5hbWUpIHtcbiAgICAgICAgdmFyIGF0dHJOb2RlID0gdGhpcy4kZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuXG4gICAgICAgIGlmIChhdHRyTm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXR0ck5vZGUuYmluZGluZy52YWx1ZTtcbiAgICB9XG5cbiAgICAkZGlzcG9zZShkZXN0cm95RnJvbUF0dHIpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuJGNhbmNlbEFuaW1hdGlvbigpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZXN0cm95RnJvbUF0dHIpIHtcbiAgICAgICAgICAgIHRoaXMuJGF0dHIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQkZGlzcG9zZXJzLmZvckVhY2goZnVuY3Rpb24gKGRpc3Bvc2VyKSB7XG4gICAgICAgICAgICBkaXNwb3Nlci5jYWxsKHNlbGYpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRiaW5kaW5nID0gbnVsbDtcbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kZGlzcG9zZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLiRhdHRyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGF0dHIuZGlzcG9zZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuJGF0dHIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQge2luamVjdG9yfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgRmlsdGVyLmNvbnN0cnVjdC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMpO1xuICAgIH1cblxuICAgICRob29rcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9uSW5pdDogJycsXG4gICAgICAgICAgICBvbkRlc3Ryb3k6ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgJGdldE1ldGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YSB8fCB7fTtcbiAgICB9XG5cbiAgICAkc2V0TWV0YSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiQkbWV0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgICRleGVjdXRlKCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRXhlY3V0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRXhlY3V0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IsIEluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcblxuZnVuY3Rpb24gbmFtZXNwYWNlKG5zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tcG9uZW50OiBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gICAgICAgICAgICBkZWYubmFtZXNwYWNlID0gbnM7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50KG5hbWUsIGRlZik7XG4gICAgICAgIH0sXG4gICAgICAgIGRpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xuICAgICAgICAgICAgICAgIGRlZiA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnNlcnQ6IGRlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlOiBkZWZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWYubmFtZXNwYWNlID0gbnM7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlKG5hbWUsIGRlZik7XG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZpY2U6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcbiAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlKG5hbWUsIGRlZik7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xuICAgICAgICAgICAgICAgIGRlZiA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25FeGVjdXRlOiBkZWZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWYubmFtZXNwYWNlID0gbnM7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKG5hbWUsIGRlZik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnQobmFtZSwgZGVmKSB7XG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LmNvbXBvbmVudCxcbiAgICAgICAgc3VwZXJDbGFzczogbWFrZUNvbnN0cnVjdG9yKENvbXBvbmVudClcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlyZWN0aXZlKG5hbWUsIGRlZikge1xuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRlZikpIHtcbiAgICAgICAgZGVmID0ge1xuICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgIG9uSW5zZXJ0OiBkZWYsXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6IGRlZlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5kaXJlY3RpdmUsXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihEaXJlY3RpdmUpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihuYW1lLCBkZWYpIHtcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XG4gICAgICAgIGRlZiA9IHtcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICBvbkV4ZWN1dGU6IGRlZlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5maWx0ZXIsXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihGaWx0ZXIpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlcnZpY2UobmFtZSwgZGVmKSB7XG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LnNlcnZpY2UsXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihTZXJ2aWNlKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBpc0NvbXBvbmVudChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQ29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBpc0RpcmVjdGl2ZShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRGlyZWN0aXZlO1xufVxuXG5mdW5jdGlvbiBpc0ZpbHRlcihvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRmlsdGVyO1xufVxuXG5mdW5jdGlvbiBpc1NlcnZpY2Uob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNlcnZpY2U7XG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcChzZWxlY3Rvck9yRWxlbWVudCkge1xuICAgIHZhciBlbGVtZW50LCB0cGw7XG5cbiAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZWN0b3JPckVsZW1lbnQpKSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yT3JFbGVtZW50KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVsZW1lbnQgPSBzZWxlY3Rvck9yRWxlbWVudDtcbiAgICB9XG5cbiAgICB0cGwgPSBlbGVtZW50LmlubmVySFRNTDtcblxuICAgIG5ldyBDb21wb25lbnQoe1xuICAgICAgICB0ZW1wbGF0ZTogdHBsXG4gICAgfSkuJG1vdW50KGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBtYWtlQ29uc3RydWN0b3IoY2xzKSB7XG4gICAgZnVuY3Rpb24gZigpIHtcbiAgICAgICAgY2xzLmNvbnN0cnVjdC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGYucHJvdG90eXBlID0gY2xzLnByb3RvdHlwZTtcbiAgICByZXR1cm4gZjtcbn1cblxuZXhwb3J0IHtcbiAgICB0eXBlQ29uc3QsXG4gICAgaW5qZWN0b3IsXG4gICAgSW5qZWN0b3IsXG4gICAgQ29tcG9uZW50LFxuICAgIERpcmVjdGl2ZSxcbiAgICBGaWx0ZXIsXG4gICAgU2VydmljZSxcbiAgICBpc0NvbXBvbmVudCxcbiAgICBpc0RpcmVjdGl2ZSxcbiAgICBpc0ZpbHRlcixcbiAgICBpc1NlcnZpY2UsXG4gICAgbmFtZXNwYWNlLFxuICAgIGNvbXBvbmVudCxcbiAgICBkaXJlY3RpdmUsXG4gICAgZmlsdGVyLFxuICAgIHNlcnZpY2UsXG4gICAgYm9vdHN0cmFwXG59OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eS9tZXNzYWdlJztcblxudmFyIHR5cGVDb25zdCA9IHtcbiAgICBmaWx0ZXI6ICdmaWx0ZXInLFxuICAgIHNlcnZpY2U6ICdzZXJ2aWNlJyxcbiAgICBjb21wb25lbnQ6ICdjb21wb25lbnQnLFxuICAgIGRpcmVjdGl2ZTogJ2RpcmVjdGl2ZSdcbn07XG5cbnZhciBuYW1lUGF0dGVybiA9IC9eW2Etel9cXCRdW1xcd1xcJC1dKi9pO1xuXG5jbGFzcyBJbmplY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0ge307XG4gICAgICAgIHRoaXMud2FpdGluZ1RvRXh0ZW5kcyA9IHt9O1xuICAgICAgICB0aGlzLmluc0NvbnRhaW5lciA9IHt9O1xuICAgIH1cblxuICAgIGdldE1hcHBpbmcoY29udHJhY3RUeXBlKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXSkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdO1xuICAgIH1cblxuICAgIGdldEluc3RhbmNlcyhjb250cmFjdFR5cGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluc0NvbnRhaW5lcltjb250cmFjdFR5cGVdKSB7XG4gICAgICAgICAgICB0aGlzLmluc0NvbnRhaW5lcltjb250cmFjdFR5cGVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKHNlbGVjdG9yLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBjaGFyYWN0ZXIgXCIuXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5nZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSk7XG5cbiAgICAgICAgaWYgKG1hcHBpbmdbc2VsZWN0b3JdID09IG51bGwpIHtcbiAgICAgICAgICAgIG1hcHBpbmdbc2VsZWN0b3JdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IG1hcHBpbmdbc2VsZWN0b3JdLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlID09PSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhLm5hbWVzcGFjZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNlbGVjdG9yICsgJyBpcyBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG1hdGNoZXNbMF0ucHJvdG90eXBlLiQkbWV0YS5uYW1lc3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWFwcGluZ1tzZWxlY3Rvcl0ucHVzaChjb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDb21wb25lbnQoc2VsZWN0b3IsIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIodHlwZUNvbnN0LmNvbXBvbmVudCwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckRpcmVjdGl2ZShzZWxlY3RvciwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0eXBlQ29uc3QuZGlyZWN0aXZlLCBzZWxlY3RvciwgY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIGNvbnRhaW5zKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGlnbm9yZUNhc2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xuICAgICAgICB2YXIgc2VnbWVudHMgPSBzZWxlY3Rvci5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbmFtZXNwYWNlID0gJyc7XG5cbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yID0gc2VnbWVudHMucG9wKCk7XG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBzZWdtZW50cy5qb2luKCcuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkobWFwcGluZywgc2VsZWN0b3IsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gbWFwcGluZ1tzZWxlY3Rvcl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgY29uc3RydWN0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbWV0YSA9IGl0ZW0ucHJvdG90eXBlLiQkbWV0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YS5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKG1ldGEubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb250YWluc0NvbXBvbmVudChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWlucyh0eXBlQ29uc3QuY29tcG9uZW50LCBzZWxlY3RvciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29udGFpbnNEaXJlY3RpdmUoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbnModHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IsIHRydWUpO1xuICAgIH1cblxuICAgIGdldChjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBpZ25vcmVDYXNlKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIG1hcHBpbmcgPSB0aGlzLmdldE1hcHBpbmcoY29udHJhY3RUeXBlKTtcbiAgICAgICAgdmFyIHNlZ21lbnRzID0gc2VsZWN0b3Iuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xuXG4gICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBzZWxlY3RvciA9IHNlZ21lbnRzLnBvcCgpO1xuICAgICAgICAgICAgbmFtZXNwYWNlID0gc2VnbWVudHMuam9pbignLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlnbm9yZUNhc2UpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHV0aWxzLmdldFByb3BlcnR5KG1hcHBpbmcsIHNlbGVjdG9yLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IG1hcHBpbmdbc2VsZWN0b3JdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3RUeXBlICsgJyAnICsgc2VsZWN0b3IgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1ldGEgPSBpdGVtLnByb3RvdHlwZS4kJG1ldGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNlbGVjdG9yICsgJyBpcyBub3QgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlcyA9IGNvbnN0cnVjdG9ycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhLm5hbWVzcGFjZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYW1lc3BhY2UgJyArIG5hbWVzcGFjZXMuam9pbignfCcpICsgJyBhbGwgaGF2ZSAnICsgc2VsZWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yc1swXTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnQoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5jb21wb25lbnQsIHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3RpdmUoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5kaXJlY3RpdmUsIHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBnZXRGaWx0ZXIoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5maWx0ZXIsIHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBnZXRTZXJ2aWNlKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0eXBlQ29uc3Quc2VydmljZSwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGNyZWF0ZShjb250cmFjdFR5cGUsIHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0KGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IpLCBpbnN0YW5jZTtcblxuICAgICAgICBzd2l0Y2ggKGNvbnRyYWN0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuY29tcG9uZW50OlxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVDb21wb25lbnQoY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuZGlyZWN0aXZlOlxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVEaXJlY3RpdmUoY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuZmlsdGVyOlxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVGaWx0ZXIoY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3Quc2VydmljZTpcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlU2VydmljZShjb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29tcG9uZW50KGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRDb21wb25lbnQoY29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEaXJlY3RpdmUoY29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldERpcmVjdGl2ZShjb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUZpbHRlcihjb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0RmlsdGVyKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlU2VydmljZShjb25zdHJ1Y3Rvcikge1xuICAgICAgICB2YXIgaW5zdGFuY2UsIHNlcnZpY2VzID0gdGhpcy5nZXRJbnN0YW5jZXModHlwZUNvbnN0LnNlcnZpY2UpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRTZXJ2aWNlKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YS5ub25TaGFyZWQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBzZXJ2aWNlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvcigpO1xuICAgICAgICAgICAgc2VydmljZXMucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc2VydmljZShzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTZXJ2aWNlKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBnZXRXYWl0aW5nVG9FeHRlbmRzKGNvbnRyYWN0VHlwZSkge1xuICAgICAgICBpZiAoIXRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdKSB7XG4gICAgICAgICAgICB0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXTtcbiAgICB9XG5cbiAgICBzZXRXYWl0aW5nVG9FeHRlbmRzKGNvbnRyYWN0VHlwZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjaGVja1NlbGVjdG9yKHNlbGVjdG9yLCBjb250cmFjdFR5cGUpIHtcbiAgICAgICAgaWYgKG5hbWVQYXR0ZXJuLnRlc3Qoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICB2YXIgY29uc3RydWN0b3JOYW1lID0gJyc7XG4gICAgICAgICAgICB2YXIgc2VnbWVudHMgPSBzZWxlY3Rvci5zcGxpdCgnLScpO1xuXG4gICAgICAgICAgICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9IHV0aWxzLnVwcGVyY2FzZShzZWdtZW50WzBdKSArIHNlZ21lbnQuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoY29udHJhY3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuY29tcG9uZW50OlxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ0NvbXBvbmVudCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmRpcmVjdGl2ZTpcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdEaXJlY3RpdmUnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5maWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSAnRmlsdGVyJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3Quc2VydmljZTpcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdTZXJ2aWNlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvck5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc2VsZWN0b3IgKyAnaXMgbm90IGEgdmFsaWQgbmFtZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVpbGRDb25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSA9IHRoaXMuY2hlY2tTZWxlY3RvcihzZWxlY3Rvciwgb3B0aW9ucy5jb250cmFjdFR5cGUpLFxuICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kcyA9IHNlbGYuZ2V0V2FpdGluZ1RvRXh0ZW5kcyhvcHRpb25zLmNvbnRyYWN0VHlwZSksXG4gICAgICAgICAgICBvbkNvbnN0cnVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25zdHJ1Y3Rvci5zdXBlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3Iuc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24obWV0YS5jb25zdHJ1Y3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGEuY29uc3RydWN0LmNhbGwodGhpcywgTWVzc2VuZ2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IEZ1bmN0aW9uKCdvbkNvbnN0cnVjdCcsICdcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24gJyArIGNvbnN0cnVjdG9yTmFtZSArICcoKXtvbkNvbnN0cnVjdC5jYWxsKHRoaXMpO307Jykob25Db25zdHJ1Y3QpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKG9wdGlvbnMuc3VwZXJDbGFzcykpIHtcbiAgICAgICAgICAgIHV0aWxzLmluaGVyaXQoY29uc3RydWN0b3IsIG9wdGlvbnMuc3VwZXJDbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRhLnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cbiAgICAgICAgLy8gYXBwbHkgcHJvcGVydGllcyBhbmQgbWV0aG9kc1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS5leHRlbmRzKSkge1xuICAgICAgICAgICAgaWYgKGluamVjdG9yLmNvbnRhaW5zKG9wdGlvbnMuY29udHJhY3RUeXBlLCBtZXRhLmV4dGVuZHMpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1cGVyT25lID0gaW5qZWN0b3IuZ2V0KG9wdGlvbnMuY29udHJhY3RUeXBlLCBtZXRhLmV4dGVuZHMpO1xuICAgICAgICAgICAgICAgIHJlbWFpbkNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJOYW1lOiBtZXRhLmV4dGVuZHMsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoc3VwZXJPbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbkNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZW1haW5Db25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgY29uc3RydWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kTWV0YShtZXRhLCBzdXBlck9uZSkge1xuICAgICAgICAgICAgaWYgKHN1cGVyT25lLnByb3RvdHlwZS4kJG1ldGEgJiYgc3VwZXJPbmUucHJvdG90eXBlLiQkbWV0YS5wcm90ZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Iob3B0aW9ucy5jb250cmFjdFR5cGUgKyAnOiAnICsgbWV0YS5leHRlbmRzICsgJyBpcyBwcm90ZWN0ZWQsIGl0IGlzIG5vdCBhbGxvd2VkIHRvIGV4dGVuZCEnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHN1cGVyTWV0YSA9IHN1cGVyT25lLnByb3RvdHlwZS4kJG1ldGE7XG4gICAgICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodHJ1ZSwgc3VwZXJNZXRhLCBmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIShvYmogPT09IHN1cGVyTWV0YSAmJiAoa2V5ID09PSAnY29uc3RydWN0JyB8fCBrZXkgPT09ICdtZXRob2RzJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHMubWVyZ2UodHJ1ZSwgY29weSwgbWV0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1haW5Db25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgY29uc3RydWN0b3IsIHN1cGVyT25lKSB7XG4gICAgICAgICAgICBpZiAoc3VwZXJPbmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHV0aWxzLmluaGVyaXQoY29uc3RydWN0b3IsIHN1cGVyT25lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY3JlYXRlIG1ldGhvZHNcbiAgICAgICAgICAgIGlmICh1dGlscy5pc09iamVjdChtZXRhLm1ldGhvZHMpKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuZXh0ZW5kKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgbWV0YS5tZXRob2RzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5yZWdpc3RlckNvbnN0cnVjdG9yKG9wdGlvbnMuY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IsIG1ldGEpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBhbnkgY29tcG9uZW50IGV4dGVuZHMgY3VycmVudCBjb21wb25lbnRcbiAgICAgICAgICAgIHZhciB3YWl0aW5nVG9FeHRlbmRzMiA9IFtdLCBmdWxsU2VsZWN0b3IgPSBtZXRhLm5hbWVzcGFjZSArICcuJyArIHNlbGVjdG9yO1xuICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uc3VwZXJOYW1lID09PSBmdWxsU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jYWxsYmFjay5jYWxsKG51bGwsIGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdhaXRpbmdUb0V4dGVuZHMyLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLnNldFdhaXRpbmdUb0V4dGVuZHMob3B0aW9ucy5jb250cmFjdFR5cGUsIHdhaXRpbmdUb0V4dGVuZHMyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICB9XG5cbiAgICByZWdpc3RlckNvbnN0cnVjdG9yKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yLCBtZXRhKSB7XG4gICAgICAgIHZhciBzdXBlck1ldGEgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhO1xuXG4gICAgICAgIGlmIChzdXBlck1ldGEgJiYgc3VwZXJNZXRhLnByb3RlY3RlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRyYWN0VHlwZSArICc6ICcgKyBtZXRhLmV4dGVuZHMgKyAnIGlzIHByb3RlY3RlZCwgaXQgaXMgbm90IGFsbG93ZWQgdG8gZXh0ZW5kIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvcHkgPSB1dGlscy5jb3B5KHRydWUsIHN1cGVyTWV0YSwgZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gIShvYmogPT09IHN1cGVyTWV0YSAmJiAoa2V5ID09PSAnY29uc3RydWN0JyB8fCBrZXkgPT09ICdtZXRob2RzJykpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZXRhID0gdXRpbHMubWVyZ2UodHJ1ZSwgY29weSwgbWV0YSk7XG5cbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YSA9IG1ldGE7XG5cbiAgICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IGlmIGl0IGlzIGdsb2JhbFxuICAgICAgICBpZiAoIW1ldGEubG9jYWwpIHtcbiAgICAgICAgICAgIGluamVjdG9yLnJlZ2lzdGVyKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluamVjdFNlcnZpY2VzKGluc3RhbmNlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgbWV0YSA9IGluc3RhbmNlLiRnZXRNZXRhKCk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG1ldGEuaW5qZWN0KSkge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChtZXRhLmluamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW5zdGFuY2UsIGtleSwge1xuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpdmF0ZUtleSA9ICckJCcgKyBrZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVtwcml2YXRlS2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJpdmF0ZUtleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2UodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VbcHJpdmF0ZUtleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgaW5qZWN0b3IgPSBuZXcgSW5qZWN0b3IoKTtcblxuZXhwb3J0IHsgdHlwZUNvbnN0LCBJbmplY3RvciwgaW5qZWN0b3IgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFNlcnZpY2UuY29uc3RydWN0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XG4gICAgfVxuXG4gICAgJGhvb2tzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb25Jbml0OiAnJyxcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXRNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9