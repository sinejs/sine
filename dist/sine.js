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
    prop: memberExp.property.compute(scope, options, {
      propertyKey: true
    }, scope)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbmUvLi9zcmMvYW5pbWF0aW9uL2FuaW1hdGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9hbmltYXRpb24vYW5pbWF0aW9uLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvYW5pbWF0aW9uL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2NkYXRhc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZG9jdHlwZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2ZyYWdtZW50LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9oYW5kbGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL3Byb3h5LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS90ZXh0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RlY29yYXRvci9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvYmluZC1jbXAtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLWNtcC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2VtYmVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2hpZGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvaWYuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvbmFtZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc2hvdy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9jaGVja2VkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3JlYWRvbmx5LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3N0YXRlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL2NsYXNzLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3Mtb2RkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL2NsYXNzLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUtb2RkLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC13aGVuLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9odG1sLWxleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2h0bWwtcGFyc2VyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL2xleGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL251bGwtb2JqZWN0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvcGFyc2VyL3BhcnNlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3NlcnZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL21vZGVsLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL3RlbXBsYXRlLWNhY2hlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9odHRwLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvbm9kZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9pbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvc2VydmljZS5qcyJdLCJuYW1lcyI6WyJUUkFOU0lUSU9OIiwiQU5JTUFUSU9OIiwidHJhbnNpdGlvblByb3AiLCJ0cmFuc2l0aW9uRW5kRXZlbnQiLCJhbmltYXRpb25Qcm9wIiwiYW5pbWF0aW9uRW5kRXZlbnQiLCJ0cmFuc2Zvcm1SRSIsIkFuaW1hdGVTZXJ2aWNlIiwic2VydmljZSIsIm5hbWVzcGFjZSIsInNlbGVjdG9yIiwidm5vZGUiLCJkb0VudGVyIiwiZWwiLCJodG1sRWxlbWVudCIsInV0aWxzIiwiX2xlYXZlQ2IiLCJjYW5jZWxsZWQiLCJfZW50ZXJDYiIsIm5vZGVUeXBlIiwiYW5pbWF0aW9uIiwicmVzb2x2ZUFuaW1hdGlvbkNvbnRleHQiLCJkYXRhIiwicmVzb2x2ZUFuaW1hdGlvbiIsInNlbGYiLCJ0eXBlIiwiZW50ZXJDbGFzcyIsImVudGVyVG9DbGFzcyIsImVudGVyQWN0aXZlQ2xhc3MiLCJkdXJhdGlvbiIsImV4cGxpY2l0RW50ZXJEdXJhdGlvbiIsImVudGVyIiwiY2IiLCJvbmNlIiwicmVtb3ZlQW5pbWF0aW9uQ2xhc3MiLCJlbnRlckNhbmNlbGxlZCIsImFmdGVyRW50ZXIiLCJiZWZvcmVFbnRlciIsImFkZEFuaW1hdGlvbkNsYXNzIiwibmV4dEZyYW1lIiwiaXNWYWxpZER1cmF0aW9uIiwic2V0VGltZW91dCIsIndoZW5BbmltYXRpb25FbmRzIiwiZG9MZWF2ZSIsImxlYXZlQ2xhc3MiLCJsZWF2ZVRvQ2xhc3MiLCJsZWF2ZUFjdGl2ZUNsYXNzIiwiZXhwbGljaXRMZWF2ZUR1cmF0aW9uIiwibGVhdmUiLCJsZWF2ZUNhbmNlbGxlZCIsImFmdGVyTGVhdmUiLCJkZWxheUxlYXZlIiwicGVyZm9ybUxlYXZlIiwiYmVmb3JlTGVhdmUiLCJjb25maWciLCJyZXMiLCJjc3MiLCJhdXRvQ3NzQW5pbWF0aW9uIiwibmFtZSIsImZuIiwiY2FsbGVkIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbHMiLCJhbmltYXRpb25DbGFzc2VzIiwiX2FuaW1hdGlvbkNsYXNzZXMiLCJpbmRleE9mIiwicHVzaCIsImV4cGVjdGVkVHlwZSIsInJlZiIsImdldEFuaW1hdGlvbkluZm8iLCJ0aW1lb3V0IiwicHJvcENvdW50IiwiZXZlbnQiLCJlbmRlZCIsImVuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkVuZCIsImUiLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGVzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRyYW5zaXRpb25EZWxheXMiLCJzcGxpdCIsInRyYW5zaXRpb25EdXJhdGlvbnMiLCJ0cmFuc2l0aW9uVGltZW91dCIsImdldFRpbWVvdXQiLCJhbmltYXRpb25EZWxheXMiLCJhbmltYXRpb25EdXJhdGlvbnMiLCJhbmltYXRpb25UaW1lb3V0IiwibGVuZ3RoIiwiTWF0aCIsIm1heCIsImhhc1RyYW5zZm9ybSIsInRlc3QiLCJkZWxheXMiLCJkdXJhdGlvbnMiLCJjb25jYXQiLCJtYXAiLCJkIiwiaSIsInRvTXMiLCJzIiwiTnVtYmVyIiwic2xpY2UiLCJ2YWx1ZSIsImlzTmFOIiwiZWxlbWVudCIsImFuaW1hdGlvbnMiLCJnZXREaXJlY3RpdmVzIiwiZmlsdGVyIiwiZGlyIiwiU2VydmljZSIsIkFuaW1hdGlvbiIsImRpcmVjdGl2ZSIsIiRwcmlvcml0eSIsIkRpcmVjdGl2ZSIsImV2ZW50VGV4dCIsImRvbUV2ZW50cyIsIkF0dHJOb2RlIiwiVk5vZGVUeXBlIiwiYXR0cmlidXRlIiwicXVvdGUiLCJvcmlnaW4iLCJpc0V2ZW50IiwiaXNCaW5kaW5nIiwiaXNEb21FdmVudCIsImlzRGlyZWN0aXZlIiwib3duZXJFbGVtZW50Iiwib3duZXJDb21wb25lbnQiLCJiaW5kaW5nIiwiQmluZGluZyIsInByaW9yaXR5Iiwia2V5Iiwibm9kZVZhbHVlIiwiY29tcGlsZSIsIm9wdGlvbnMiLCJhY3Rpb24iLCJvYnNlcnZlIiwibm9kZU5hbWUiLCJzdGFydHNXaXRoIiwic3Vic3RyIiwic2V0T3V0cHV0IiwiYmluZCIsImNvbnRhaW5zRGlyZWN0aXZlIiwiY3JlYXRlRGlyZWN0aXZlIiwiJGJpbmROb2RlIiwiJG91dHB1dCIsIkVycm9yIiwiJGNvbXBpbGUiLCJzY29wZSIsInNldFNjb3BlIiwiY29tcHV0ZSIsImxvY2FscyIsIiRldmVudCIsIiRhcmdzIiwiJGVsZW1lbnQiLCIkbGlzdGVuIiwiYXJncyIsIiQkY2hpbGREaXJlY3RpdmVzIiwiJHNldEJpbmRpbmciLCIkaGFzQXR0ciIsIiRpbml0QXR0ciIsInNldEF0dHJpYnV0ZSIsInVwZGF0ZSIsImhhc0NoYW5nZSIsIiRkZXRlY3QiLCJkZXRlY3QiLCIkdXBkYXRlIiwiJHNldEF0dHIiLCIkaW5zZXJ0IiwiJCRtZXRhIiwiaXNGcm9tRGlyZWN0aXZlIiwiZGVzdHJveSIsIiRkZXN0cm95IiwiJGRpc3Bvc2UiLCJkaXNwb3NlIiwiVk5vZGUiLCJ0ZXh0IiwiY2RhdGFTZWN0aW9uIiwiZW50aXR5UmVmZXJlbmNlIiwiZW50aXR5IiwicHJvY2Vzc2luZ0luc3RydWN0aW9uIiwiY29tbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRUeXBlIiwiZG9jdW1lbnRGcmFnbWVudCIsIm5vdGF0aW9uIiwiY29ubmVjdGlvbiIsImNoaWxkTm9kZXMiLCJwYXJlbnROb2RlIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwib3duZXJEb2N1bWVudCIsImNoaWxkIiwiZm9yRWFjaCIsImluZGV4IiwiJGJ1aWxkU2libGluZyIsInJlbW92ZUNoaWxkIiwiJHJlbW92ZSIsIiRjbGVhclBhcmVudEFuZFNpYmxpbmciLCJjb21waWxlT3B0aW9ucyIsInJlZkNoaWxkIiwibmV3Q2hpbGQiLCJzcGxpY2UiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsIm5vdGlmeUNvbXBpbGVkIiwibGluayIsIm5vdGlmeUxpbmtlZCIsIkV4cE5vZGUiLCJvbGRWYWx1ZSIsImlzRXhwIiwic2VnbWVudHMiLCJyaWdodFN0ciIsIm91dHB1dCIsInVud2F0Y2hlcyIsImNoYW5nZSIsIk1lc3NlbmdlciIsImV4cCIsImxlZnRTdHIiLCJwYXR0ZXJuIiwibGFzdEluZGV4IiwibWF0Y2giLCJleGVjIiwic3Vic3RyaW5nIiwic2VnbWVudCIsImFzc2lnbm1lbnQiLCJwYXJzZUFzc2lnbm1lbnQiLCJvYmoiLCJwcm9wIiwidG9Qcm94eSIsIiR3YXRjaCIsImRlZmVyIiwiZmlyZSIsImNhbmNlbFRpbWVvdXQiLCJ0aW1lb3V0SWQiLCJjYWxsIiwiY2xlYXJUaW1lb3V0IiwibGlzdGVuIiwib24iLCJvZmYiLCJ1bndhdGNoIiwiQ0RhdGFTZWN0aW9uTm9kZSIsIkNvbW1lbnROb2RlIiwiY3JlYXRlQ29tbWVudCIsIkNvbm5lY3Rpb25Ob2RlIiwibGlua2VyIiwib25JbnNlcnQiLCJvbkRldGVjdCIsIm9uSGFzQ2hhbmdlIiwib25VcGRhdGUiLCJvbkRlc3Ryb3kiLCJEb2N1bWVudFR5cGVOb2RlIiwiRG9jdW1lbnROb2RlIiwiRWxlbWVudE5vZGUiLCJhdHRyaWJ1dGVzIiwiY29tcG9uZW50Iiwic2VsZkNsb3NlZCIsImlzQ29tcG9uZW50IiwiYXR0ciIsIm1hdGNoZXMiLCJiZWxvbmdUbyIsInNldFZhbHVlIiwiYXR0clRwbCIsImNoaWxkVHBsIiwiZ2V0T3V0ZXJUcGwiLCJ0cGwiLCJwYXJzZSIsImNsZWFyQ2hpbGROb2RlcyIsInJlc3VsdCIsInNvbWUiLCJnZXREaXJlY3RpdmUiLCJpdGVtIiwiY29udGFpbnNDb21wb25lbnQiLCJjcmVhdGVFbGVtZW50IiwiJGNyZWF0ZUNoaWxkQ21wIiwiJGluaXRBdHRyRG9uZSIsIiRtb3VudCIsImlzRnJvbUNvbXBvbmVudCIsInJlbW92ZUh0bWxFbGVtZW50IiwiRG9jdW1lbnRGcmFnbWVudE5vZGUiLCJwcm9wQ2hhbmdpbmdNc2ciLCJwcm9wQ2hhbmdlZE1zZyIsInRhcmdldEtleSIsImdldFRhcmdldCIsImlzT2JqZWN0IiwiR2V0UHJvcGVydHlIYW5kbGVyIiwiZGVlcFByb3h5IiwidmFyaWFibGVzIiwiZnVsbFRhcmdldEtleSIsImZ1bGxLZXkiLCJQcm94eSIsImV4aXN0ZWQiLCJTZXRQcm9wZXJ0eUhhbmRsZXIiLCJpc0FycmF5IiwidmFsaWRhdGlvbiIsInZhbGlkIiwibmV3VmFsdWUiLCJBY2Nlc3NQcm9wZXJ0eUhhbmRsZXIiLCJQcm9wZXJ0eU9ic2VydmVyIiwicGxhaW5NYXAiLCJNYXAiLCJyZWdleE1hcCIsImlzUmVnRXhwIiwiaGFzIiwic2V0IiwiYmVmb3JlQ2hhbmdlZCIsImdldCIsImFjdGlvbnMiLCJjbGVhciIsIk9iamVjdE9ic2VydmVyIiwib25jaGFuZ2luZyIsImZpcmVDaGFuZ2luZyIsIm9uY2hhbmdlZCIsImZpcmVDaGFuZ2VkIiwib2ZmQ2hhbmdlIiwib2JqTWFwIiwiTWVtYmVyV2F0Y2hlciIsIm9ic2VydmVyIiwiaWQiLCJjaGFuZ2VLZXkiLCJuZXdUYXJnZXQiLCJzdG9wIiwiRGV0ZWN0b3IiLCJxdWV1ZSIsImRpZ2VzdCIsImNsZWFyRGVmZXIiLCJkZXRlY3RvciIsImV4ZWN1dGUiLCJFeHBXYXRjaGVyIiwicmVtb3ZlIiwiV2F0Y2hlciIsIm1lbWJlcnMiLCJkaWdlc3RzIiwiYXN0IiwicGFyc2VFeHAiLCJoYXNDQyIsImRpcnR5Q2hlY2siLCJjb2xsZWN0TWVtYmVycyIsInVwZGF0ZU1lbWJlciIsInN0YXJ0RGlnZXN0IiwibWVtYmVyIiwic3RhcnRNZW1iZXIiLCJzdGFydCIsIm1lbWJlcldhdGNoZXIiLCJPYnNlcnZlciIsIndhdGNoZXJzIiwid2F0Y2hlciIsImNyZWF0ZVdhdGNoZXIiLCJyZW1vdmVXYXRjaGVyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiVGV4dE5vZGUiLCJyZW5kZXIiLCJjcmVhdGVUZXh0Tm9kZSIsIm1ldGEiLCJpbmplY3RvciIsInJlZ2lzdGVyQ29uc3RydWN0b3IiLCJ0eXBlQ29uc3QiLCJCaW5kQ21wT3B0aW9uc0RpcmVjdGl2ZSIsInVwZGF0ZU9wdGlvbnMiLCJjbGVhck9wdGlvbnMiLCIkYmluZGluZyIsIkJpbmRDbXBEaXJlY3RpdmUiLCJuYW1lRGlyIiwidmlldyIsImluaXQiLCJiaW5kQ21wT3B0aW9uc0RpciIsIm9uSW5pdCIsIiRodG1sRWxlbWVudCIsInNldENtcCIsIkJpbmREaXJlY3RpdmUiLCJpbm5lclRleHQiLCJFbWJlZERpcmVjdGl2ZSIsImVtYmVkVHBsIiwiZ2V0RW1iZWRUcGwiLCJzZXRJbm5lclRwbCIsIkhpZGVEaXJlY3RpdmUiLCJpbmplY3QiLCIkYW5pbWF0ZSIsInRvZ2dsZSIsInN0eWxlIiwiZGlzcGxheSIsIklmRGlyZWN0aXZlIiwiaHRtbENvbW1lbnQiLCJNb2RlbERpcmVjdGl2ZSIsIiR2aWV3VmFsdWUiLCIkbW9kZWxWYWx1ZSIsIiRwYXJzZXJzIiwiJGZvcm1hdHRlcnMiLCIkdmlld0NoYW5nZUxpc3RlbmVycyIsIiR2YWxpZGF0b3JzIiwiJGZlZWRiYWNrIiwiJHByaXN0aW5lIiwiJGRpcnR5IiwiJHZhbGlkIiwiJGludmFsaWQiLCJzZXRWaWV3VmFsdWUiLCIkY29tcG9uZW50Iiwic2V0TW9kZWxWYWx1ZSIsIm5ld3ZhbHVlIiwidmlld1ZhbHVlIiwidmFsaWRhdG9yIiwiZm9ybWF0dGVyIiwidXBkYXRlQ3NzIiwidXBkYXRlU3RhdGUiLCJzZXREaXJ0eSIsImxpc3RlbmVyIiwibW9kZWxWYWx1ZSIsInBhcnNlciIsImFzc2lnbiIsImVsZSIsImNzc0NsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlydHkiLCJwcmlzdGluZSIsImludmFsaWQiLCJzdGF0ZSIsImZlZWRiYWNrIiwiTmFtZURpcmVjdGl2ZSIsInByb3h5IiwiJHNjb3BlIiwiY21wIiwiUmVwZWF0RGlyZWN0aXZlIiwiaXRlbUV4cCIsIml0ZW1zRXhwIiwiaXRlbVRlbXBsYXRlIiwiZGF0YUl0ZW1zIiwiY21wSXRlbXMiLCJoZWFkZXIiLCJmb290ZXIiLCJhcmciLCIkYXR0ciIsInJlbW92ZUF0dHJpYnV0ZSIsImNyZWF0ZUNvbm5lY3Rpb24iLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpdGVtcyIsIiRldmFsIiwic2V0RGF0YUl0ZW1zIiwicmVwbGFjZUNoaWxkIiwiY2hpbGRTY29wZSIsImNtcEl0ZW0iLCJkYXRhSXRlbSIsImZpbHRlcnMiLCJuZXdDbXBJdGVtcyIsImdldENtcEl0ZW0iLCJDb21wb25lbnQiLCJ0ZW1wbGF0ZSIsIiRpbmhlcml0Q21wIiwiJHJlbmRlciIsInJlcGVhdEl0ZW0iLCJTaG93RGlyZWN0aXZlIiwiQ2hlY2tlZERpcmVjdGl2ZSIsIlN0YXRlRGlyZWN0aXZlIiwiRGlzYWJsZWREaXJlY3RpdmUiLCJSZWFkb25seURpcmVjdGl2ZSIsIlNlbGVjdGVkRGlyZWN0aXZlIiwiYXR0ck5hbWUiLCJwZXJmb3JtIiwiaGFzQXR0cmlidXRlIiwiQ2xhc3NFdmVuRGlyZWN0aXZlIiwiJGluZGV4IiwiQ2xhc3NEaXJlY3RpdmUiLCJDbGFzc09kZERpcmVjdGl2ZSIsImluaXRpYWxDbGFzc0xpc3QiLCJwYXJzZUNsYXNzIiwic2V0Q2xhc3MiLCJhcnIiLCJ1bndhdGNoQXJyYXkiLCJ0cmltIiwiY2xhc3NUZXh0IiwiJGdldEF0dHJWYWx1ZSIsInRleHRUb0FycmF5Iiwic2tpcCIsIm5ld0FyciIsIndhdGNoQXJyYXkiLCJzZXRDbGFzc0xpc3QiLCJTdHlsZUV2ZW5EaXJlY3RpdmUiLCJTdHlsZURpcmVjdGl2ZSIsIlN0eWxlT2RkRGlyZWN0aXZlIiwiaW5pdGlhbFN0eWxlIiwicGFyc2VTdHlsZSIsInNldFN0eWxlIiwidW53YXRjaE9iaiIsInRleHRUb09iamVjdCIsImxpc3QiLCJzdWJJdGVtcyIsIm5ld1N0eWxlIiwid2F0Y2hPYmoiLCJhcHBseVN0eWxlIiwiU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSIsImlzTWF0Y2giLCJzd2l0Y2hXaGVuRGlycyIsInZFbGUiLCJ3aGVuRGlyIiwiaW5pdFN3aXRjaFdoZW5EaXJzIiwiaXNNYXRjaENoYW5nZWQiLCJTd2l0Y2hXaGVuRGlyZWN0aXZlIiwic3dpdGNoRGlyIiwiaW5pdFN3aXRjaERpciIsInZhbHVlQ2hhbmdlZCIsIlN3aXRjaERpcmVjdGl2ZSIsIkh0bWxMZXhlciIsIkxleGVyIiwiaXNWYWxpZElkZW50aWZpZXJTdGFydCIsImNoIiwiaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSIsImNwIiwiaXNOdW1iZXIiLCJleHBlY3RTdHJpbmciLCJzdHIiLCJudW0iLCJyZWFkQ29tbWVudCIsImJlZ2luIiwic3RyaW5nIiwicmF3U3RyaW5nIiwiY2hhckF0IiwidG9rZW5zIiwidGhyb3dFcnJvciIsInJlYWRUZXh0IiwiY2gyIiwicGVlayIsImlzSWRlbnRpZmllclN0YXJ0IiwidGV4dFRhZyIsInJlYWRUYWciLCJjbG9zaW5nIiwiZG9jdHlwZSIsInRhZyIsInJlYWRJZGVudCIsInBlZWtNdWx0aWNoYXIiLCJyZWFkU3RyaW5nIiwiaXNXaGl0ZXNwYWNlIiwiZXF1YWwiLCJsZXgiLCJhbGxvd0RvY1R5cGUiLCJjaDMiLCJIdG1sUGFyc2VyIiwiUGFyc2VyIiwibGV4ZXIiLCJmYXJnbWVudCIsInRva2VuIiwiY3VycmVudCIsIiRwdXNoQ2hpbGQiLCJuZXh0IiwiZG9jVHlwZSIsImlkZW50aWZpZXIiLCJhdHRycyIsInAiLCIkcHVzaEF0dHJpYnV0ZSIsImNoaWxkRWxlbWVudHMiLCJlbGVzIiwiY29uc3RhbnQiLCJwYXJzZU9wdGlvbnMiLCJpc0lkZW50aWZpZXJDb250aW51ZSIsImxpdGVyYWxzIiwidW5kZWZpbmVkIiwiaHRtbCIsImRlZmF1bHRzIiwiY3JlYXRlQ29tcG9uZW50Iiwic2V0dGluZ3MiLCJhc3ROb2RlcyIsImFzdE5vZGUiLCIkJGNoaWxkRWxlbWVudHMiLCJjcmVhdGVGaWx0ZXIiLCJyZXBsYWNlIiwibWVtYmVyRXhwIiwiZ2V0TWVtYmVyRXhwcmVzc2lvbiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvcGVydHlLZXkiLCJPUEVSQVRPUlMiLCJvcGVyYXRvclRleHQiLCJFU0NBUEUiLCJvcGVyYXRvciIsInJlYWROdW1iZXIiLCJpcyIsIm9wMSIsIm9wMiIsIm9wMyIsImNoYXJzIiwiY29kZVBvaW50QXQiLCJjaGFyQ29kZUF0IiwiY3AxIiwiY3AyIiwiaXNFeHBPcGVyYXRvciIsImVycm9yIiwiY29sU3RyIiwibnVtYmVyIiwicGVla0NoIiwiZXNjYXBlIiwiaGV4IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJyZXAiLCJOdWxsT2JqZWN0IiwiQVNUIiwiUHJvZ3JhbSIsIkV4cHJlc3Npb25TdGF0ZW1lbnQiLCJBc3NpZ25tZW50RXhwcmVzc2lvbiIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsIkxvZ2ljYWxFeHByZXNzaW9uIiwiQmluYXJ5RXhwcmVzc2lvbiIsIlVuYXJ5RXhwcmVzc2lvbiIsIkNhbGxFeHByZXNzaW9uIiwiTWVtYmVyRXhwcmVzc2lvbiIsIklkZW50aWZpZXIiLCJMaXRlcmFsIiwiQXJyYXlFeHByZXNzaW9uIiwiUHJvcGVydHkiLCJPYmplY3RFeHByZXNzaW9uIiwiQXN0Tm9kZSIsImNvbnRleHQiLCJQcm9ncmFtTm9kZSIsIkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIiwiTWVtYmVyRXhwcmVzc2lvbk5vZGUiLCJBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUiLCJsZWZ0IiwicmlnaHQiLCJhc3NpZ25tZW50TGVmdCIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUiLCJhbHRlcm5hdGUiLCJjb25zZXF1ZW50IiwiTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsIkJpbmFyeUV4cHJlc3Npb25Ob2RlIiwiVW5hcnlFeHByZXNzaW9uTm9kZSIsInByZWZpeCIsIkxpdGVyYWxOb2RlIiwidG9UZXh0IiwiQ2FsbEV4cHJlc3Npb25Ob2RlIiwiY2FsbGVlIiwiYXJnVmFsdWVzIiwiZmlsdGVySW5zIiwiaXNGaWx0ZXIiLCIkZXhlY3V0ZSIsImNvbXB1dGVkIiwiYWxsb3dOdWxsIiwiSWRlbnRpZmllck5vZGUiLCJvYmpOb2RlIiwiQXJyYXlFeHByZXNzaW9uTm9kZSIsIlByb3BlcnR5Tm9kZSIsImtpbmQiLCJPYmplY3RFeHByZXNzaW9uTm9kZSIsInByb3BlcnRpZXMiLCJkZWYiLCJpc0Fzc2lnbmFibGUiLCJtc2ciLCJwcm9ncmFtIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImV4cGVjdCIsImZpbHRlckNoYWluIiwiZXhwcmVzc2lvbiIsInRlcm5hcnkiLCJsb2dpY2FsT1IiLCJjb25zdW1lIiwibG9naWNhbEFORCIsImVxdWFsaXR5IiwicmVsYXRpb25hbCIsImFkZGl0aXZlIiwibXVsdGlwbGljYXRpdmUiLCJ1bmFyeSIsInByaW1hcnkiLCJhcnJheURlY2xhcmF0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJwZWVrQWhlYWQiLCJwYXJzZUFyZ3VtZW50cyIsImJhc2VFeHByZXNzaW9uIiwiaWRlbnRpZmllcnMiLCJlbnRpcmVOYW1lIiwiam9pbiIsInBlZWtUb2tlbiIsImUxIiwiZTIiLCJlMyIsImU0IiwidCIsInNoaWZ0IiwiTW9kZWxPcHRpb25zU2VydmljZSIsIlRlbXBsYXRlQ2FjaGVTZXJ2aWNlIiwidHBsQ2FjaGUiLCJwcm9taXNlQ2FjaGUiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsImh0dHBHZXQiLCJ0aGVuIiwicmVhZHlTdGF0ZUVudW0iLCJvcGVuZWQiLCJzZW50IiwicmVjZWl2ZWQiLCJmaW5pc2giLCJjcmVhdGVYSFIiLCJYTUxIdHRwUmVxdWVzdCIsImNyZWF0ZVByb21pc2UiLCJyZWplY3QiLCJhZGRVcmxQYXJhbSIsImVuY29kZVVSSUNvbXBvbmVudCIsInBhcnNlSGVhZGVycyIsImhlYWRlcnMiLCJwYXJzZWQiLCJ2YWwiLCJsaW5lIiwidG9Mb3dlckNhc2UiLCJpZ25vcmVEdXBsaWNhdGVPZiIsImJ1aWxkVXJsIiwibWV0aG9kIiwicmVxdWVzdCIsInhociIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZVVSTCIsInJlc3BvbnNlSGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInJlc3BvbnNlRGF0YSIsInJlc3BvbnNlVHlwZSIsInJlc3BvbnNlVGV4dCIsInJlc3BvbnNlIiwic3RhdHVzVGV4dCIsIm9wZW4iLCJzZW5kIiwiaHR0cFBvc3QiLCJoYW5kbGVycyIsInJldHVyblZhbHVlIiwiTWVzc2VuZ2VyQnVzIiwibWVzc2VuZ2VycyIsImlzTWVzc2VuZ2VyIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGUiLCJBcnJheSIsInJlcGxhY2VOb2RlIiwicmVmTm9kZSIsIm5ld05vZGUiLCJyZW1vdmVOb2RlIiwicmVtb3ZlTm9kZUJldHdlZW4iLCJiZWdpbk5vZGUiLCJlbmROb2RlIiwiaW5zZXJ0Tm9kZUFmdGVyIiwicXVlcnlFbGVtZW50TG9hZGVkIiwiY2FsbGJhY2siLCJjYW5jZWxUb2tlbiIsInF1ZXJ5IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJxdWVyeUVsZW1lbnRVbmxvYWRlZCIsInF1ZXJ5RWxlbWVudFN0YXRlIiwiY2FsbGJhY2tzIiwibG9hZGVkIiwib25FbnRlciIsIm9uTGVhdmUiLCJhZGRDbGFzcyIsImMiLCJjdXIiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVDbGFzcyIsInRhciIsImRlYnVnTW9kZSIsInRvU3RyaW5nIiwiZ2V0UHJvdG90eXBlT2YiLCJpZ25vcmVPd24iLCJjb3B5IiwiZGVlcCIsIm9iakluZGV4IiwiaXNCb29sZWFuIiwibmV3T2JqIiwiZXh0ZW5kIiwiZGVlcE1lcmdlIiwicGxhaW5NZXJnZSIsIm1lcmdlIiwic291cmNlIiwibyIsIkYiLCJpbmhlcml0UHJvdG90eXBlIiwic3ViVHlwZSIsInN1cGVyVHlwZSIsImNvbnN0cnVjdG9yIiwiaW5oZXJpdCIsImxvd2VyY2FzZSIsImlzU3RyaW5nIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJpc1VuZGVmaW5lZCIsImlzRGVmaW5lZCIsImlzTWFwIiwiaXNCbGFua09iamVjdCIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc0Zvcm1EYXRhIiwiRm9ybURhdGEiLCJpc1NhbWUiLCJvYmoxIiwib2JqMiIsInNhbWUiLCJkZWJ1ZyIsImxvZyIsImNvbnNvbGUiLCJjb250YWlucyIsImNvbnRhaW5zU3RyIiwiaWdub3JlQ2FzZSIsImhhc1Byb3BlcnR5Iiwia2V5MiIsImhhc1Byb3AiLCJrZXlzIiwidmFsdWUzIiwia2V5MyIsImdldFByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJvcmRlckJ5IiwiZ2V0dGVyIiwiZ2V0VmFsdWUiLCJzb3J0IiwiYSIsImIiLCJvcmRlckJ5RGVzY2VuZGluZyIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJmb3JtYXQiLCJtYXRjaFRleHQiLCJwbGFjZUhvZGVyIiwiY29uc3RydWN0IiwiYmVmb3JlQXR0ckNoYW5nZSIsImFmdGVyQXR0ckNoYW5nZSIsImJlZm9yZVZpZXdJbml0IiwiYWZ0ZXJWaWV3TW91bnQiLCIkJGVsZW1lbnQiLCIkcHJveHkiLCJtZXNzZW5nZXIiLCJzeW5jIiwiJGdldE1ldGEiLCJ0ZW1wbGF0ZVVybCIsImdldFRwbEJ5VXJsIiwidXNpbmciLCJjbGFzc05hbWUiLCJwb3AiLCJzcGFjZU5hbWUiLCJnZXRJbm5lclRwbCIsIiR1c2luZyIsImdldEh0bWxFbGVtZW50IiwiJGhhc1ZpZXciLCIkc2hvd1ZpZXciLCIkZ2V0VGVtcGxhdGUiLCIkbWFrZUNvbXBpbGVPcHRpb25zIiwiJGNsZWFyVmlldyIsInNlbGVjdG9yT3JFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImFwcGVuZCIsIiRhZnRlclZpZXdNb3VudCIsIiQkcGFyZW50Q29tcG9uZW50IiwiJHJlbW92ZUNoaWxkQ21wIiwiJCRkZXRlY3RUaW1lb3V0IiwiJCRvYnNlcnZlciIsInZhbGlkYXRlIiwid2F0Y2giLCJjaGlsZENtcCIsIiQkY2hpbGRDb21wb25lbnRzIiwicGFyZW50Q21wIiwic2V0UHJvdG90eXBlT2YiLCIkaG9va3MiLCJoYW5kbGVyIiwiaG9vayIsIiQkZGlzcG9zZXJzIiwiJHZhbGlkYXRlIiwiZGVzdHJveUZyb21FbGVtZW50IiwiJHVubW91bnQiLCJkaXNwb3NlciIsIiRzZXRNZXRhIiwiaW5qZWN0U2VydmljZXMiLCJvbkNvbXBpbGUiLCIkcmVxdWVzdEFuaW1hdGlvbiIsIiQkY2FuY2VsQW5pbWF0aW9uVG9rZW4iLCIkaXNMb2FkZWQiLCIkZWxlbWVudGxvYWRlZCIsImF0dHJOb2RlIiwiZGVzdHJveUZyb21BdHRyIiwiJGNhbmNlbEFuaW1hdGlvbiIsIkZpbHRlciIsIm9uRXhlY3V0ZSIsIm5zIiwibWV0aG9kcyIsImJ1aWxkQ29uc3RydWN0b3IiLCJjb250cmFjdFR5cGUiLCJzdXBlckNsYXNzIiwibWFrZUNvbnN0cnVjdG9yIiwiaXNTZXJ2aWNlIiwiYm9vdHN0cmFwIiwiaW5uZXJIVE1MIiwiZiIsIm5hbWVQYXR0ZXJuIiwiSW5qZWN0b3IiLCJjb250YWluZXIiLCJ3YWl0aW5nVG9FeHRlbmRzIiwiaW5zQ29udGFpbmVyIiwibWFwcGluZyIsImdldE1hcHBpbmciLCJyZWdpc3RlciIsImNvbnN0cnVjdG9ycyIsIm5hbWVzcGFjZXMiLCJpbnN0YW5jZSIsImNyZWF0ZVNlcnZpY2UiLCJnZXRDb21wb25lbnQiLCJnZXRGaWx0ZXIiLCJzZXJ2aWNlcyIsImdldEluc3RhbmNlcyIsImdldFNlcnZpY2UiLCJub25TaGFyZWQiLCJjb25zdHJ1Y3Rvck5hbWUiLCJjaGVja1NlbGVjdG9yIiwiZ2V0V2FpdGluZ1RvRXh0ZW5kcyIsIm9uQ29uc3RydWN0IiwiRnVuY3Rpb24iLCJzdXBlck9uZSIsInJlbWFpbkNvbnN0cnVjdG9yIiwic3VwZXJOYW1lIiwiZXh0ZW5kTWV0YSIsInN1cGVyTWV0YSIsIndhaXRpbmdUb0V4dGVuZHMyIiwiZnVsbFNlbGVjdG9yIiwic2V0V2FpdGluZ1RvRXh0ZW5kcyIsImxvY2FsIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicHJpdmF0ZUtleSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7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QUFlZixJQUFmLENBQW9CLElBQXBCO0FBQ0g7QUFDSjtBQTVCTDtBQUFBO0FBQUEsZ0NBS3VCO0FBQ2Z3SCx3REFBUSxDQUFDbWdCLGNBQVQsQ0FBd0IsSUFBeEI7QUFDSDtBQVBMOztBQUFBO0FBQUEsSSIsImZpbGUiOiJzaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic2luZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzaW5lXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxudmFyIFRSQU5TSVRJT04gPSAndHJhbnNpdGlvbic7XHJcbnZhciBBTklNQVRJT04gPSAnYW5pbWF0aW9uJztcclxudmFyIHRyYW5zaXRpb25Qcm9wID0gJ3RyYW5zaXRpb24nO1xyXG52YXIgdHJhbnNpdGlvbkVuZEV2ZW50ID0gJ3RyYW5zaXRpb25lbmQnO1xyXG52YXIgYW5pbWF0aW9uUHJvcCA9ICdhbmltYXRpb24nO1xyXG52YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSAnYW5pbWF0aW9uZW5kJztcclxudmFyIHRyYW5zZm9ybVJFID0gL1xcYih0cmFuc2Zvcm18YWxsKSgsfCQpLztcclxuXHJcbkBzZXJ2aWNlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICckYW5pbWF0ZSdcclxufSlcclxuY2xhc3MgQW5pbWF0ZVNlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIodm5vZGUsIGRvRW50ZXIpIHtcclxuICAgICAgICB2YXIgZWwgPSB2bm9kZS5odG1sRWxlbWVudDtcclxuXHJcbiAgICAgICAgLy8gY2FsbCBsZWF2ZSBjYWxsYmFjayBub3dcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihlbC5fbGVhdmVDYikpIHtcclxuICAgICAgICAgICAgZWwuX2xlYXZlQ2IuY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWwuX2xlYXZlQ2IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGVsLl9lbnRlckNiKSB8fCBlbC5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5yZXNvbHZlQW5pbWF0aW9uQ29udGV4dCh2bm9kZSk7XHJcblxyXG4gICAgICAgIGlmICghYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb0VudGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IHRoaXMucmVzb2x2ZUFuaW1hdGlvbihhbmltYXRpb24pO1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHR5cGUgPSBkYXRhLnR5cGU7XHJcbiAgICAgICAgdmFyIGVudGVyQ2xhc3MgPSBkYXRhLmVudGVyQ2xhc3M7XHJcbiAgICAgICAgdmFyIGVudGVyVG9DbGFzcyA9IGRhdGEuZW50ZXJUb0NsYXNzO1xyXG4gICAgICAgIHZhciBlbnRlckFjdGl2ZUNsYXNzID0gZGF0YS5lbnRlckFjdGl2ZUNsYXNzO1xyXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IGRhdGEuZHVyYXRpb247XHJcblxyXG4gICAgICAgIHZhciBleHBsaWNpdEVudGVyRHVyYXRpb24gPSB1dGlscy50b051bWJlcihcclxuICAgICAgICAgICAgdXRpbHMuaXNPYmplY3QoZHVyYXRpb24pXHJcbiAgICAgICAgICAgICAgICA/IGR1cmF0aW9uLmVudGVyXHJcbiAgICAgICAgICAgICAgICA6IGR1cmF0aW9uXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdmFyIGNiID0gZWwuX2VudGVyQ2IgPSBzZWxmLm9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLnJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBlbnRlclRvQ2xhc3MpO1xyXG4gICAgICAgICAgICBzZWxmLnJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBlbnRlckFjdGl2ZUNsYXNzKTtcclxuICAgICAgICAgICAgaWYgKGNiLmNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgZW50ZXJDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24uZW50ZXJDYW5jZWxsZWQgJiYgYW5pbWF0aW9uLmVudGVyQ2FuY2VsbGVkKGVsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5hZnRlckVudGVyICYmIGFuaW1hdGlvbi5hZnRlckVudGVyKGVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbC5fZW50ZXJDYiA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHN0YXJ0IGVudGVyIGFuaW1hdGlvblxyXG4gICAgICAgIGFuaW1hdGlvbi5iZWZvcmVFbnRlciAmJiBhbmltYXRpb24uYmVmb3JlRW50ZXIoZWwpO1xyXG4gICAgICAgIHNlbGYuYWRkQW5pbWF0aW9uQ2xhc3MoZWwsIGVudGVyQ2xhc3MpO1xyXG4gICAgICAgIHNlbGYuYWRkQW5pbWF0aW9uQ2xhc3MoZWwsIGVudGVyQWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgIHNlbGYubmV4dEZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5yZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgZW50ZXJDbGFzcyk7XHJcbiAgICAgICAgICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmFkZEFuaW1hdGlvbkNsYXNzKGVsLCBlbnRlclRvQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNWYWxpZER1cmF0aW9uKGV4cGxpY2l0RW50ZXJEdXJhdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNiLCBleHBsaWNpdEVudGVyRHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLndoZW5BbmltYXRpb25FbmRzKGVsLCB0eXBlLCBjYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9FbnRlcigpO1xyXG4gICAgICAgIGFuaW1hdGlvbi5lbnRlciAmJiBhbmltYXRpb24uZW50ZXIoZWwsIGNiKTtcclxuICAgIH1cclxuXHJcbiAgICBsZWF2ZSh2bm9kZSwgZG9MZWF2ZSkge1xyXG4gICAgICAgIHZhciBlbCA9IHZub2RlLmh0bWxFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBjYWxsIGVudGVyIGNhbGxiYWNrIG5vd1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGVsLl9lbnRlckNiKSkge1xyXG4gICAgICAgICAgICBlbC5fZW50ZXJDYi5jYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBlbC5fZW50ZXJDYigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMucmVzb2x2ZUFuaW1hdGlvbkNvbnRleHQodm5vZGUpO1xyXG5cclxuICAgICAgICBpZiAoIWFuaW1hdGlvbiB8fCBlbC5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9MZWF2ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZWwuX2xlYXZlQ2IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5yZXNvbHZlQW5pbWF0aW9uKGFuaW1hdGlvbik7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgdHlwZSA9IGRhdGEudHlwZTtcclxuICAgICAgICB2YXIgbGVhdmVDbGFzcyA9IGRhdGEubGVhdmVDbGFzcztcclxuICAgICAgICB2YXIgbGVhdmVUb0NsYXNzID0gZGF0YS5sZWF2ZVRvQ2xhc3M7XHJcbiAgICAgICAgdmFyIGxlYXZlQWN0aXZlQ2xhc3MgPSBkYXRhLmxlYXZlQWN0aXZlQ2xhc3M7XHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gZGF0YS5kdXJhdGlvbjtcclxuXHJcbiAgICAgICAgdmFyIGV4cGxpY2l0TGVhdmVEdXJhdGlvbiA9IHV0aWxzLnRvTnVtYmVyKFxyXG4gICAgICAgICAgICB1dGlscy5pc09iamVjdChkdXJhdGlvbilcclxuICAgICAgICAgICAgICAgID8gZHVyYXRpb24ubGVhdmVcclxuICAgICAgICAgICAgICAgIDogZHVyYXRpb25cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB2YXIgY2IgPSBlbC5fbGVhdmVDYiA9IHNlbGYub25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlQW5pbWF0aW9uQ2xhc3MoZWwsIGxlYXZlVG9DbGFzcyk7XHJcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlQW5pbWF0aW9uQ2xhc3MoZWwsIGxlYXZlQWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICBpZiAoY2IuY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5sZWF2ZUNhbmNlbGxlZCAmJiBhbmltYXRpb24ubGVhdmVDYW5jZWxsZWQoZWwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9MZWF2ZSgpO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLmFmdGVyTGVhdmUgJiYgYW5pbWF0aW9uLmFmdGVyTGVhdmUoZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsLl9sZWF2ZUNiID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbi5kZWxheUxlYXZlKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5kZWxheUxlYXZlKHBlcmZvcm1MZWF2ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGVyZm9ybUxlYXZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwZXJmb3JtTGVhdmUoKSB7XHJcbiAgICAgICAgICAgIC8vIHRoZSBkZWxheWVkIGxlYXZlIG1heSBoYXZlIGFscmVhZHkgYmVlbiBjYW5jZWxsZWRcclxuICAgICAgICAgICAgaWYgKGNiLmNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5iZWZvcmVMZWF2ZSAmJiBhbmltYXRpb24uYmVmb3JlTGVhdmUoZWwpO1xyXG4gICAgICAgICAgICBzZWxmLmFkZEFuaW1hdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcclxuICAgICAgICAgICAgc2VsZi5hZGRBbmltYXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgIHNlbGYubmV4dEZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlQW5pbWF0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjYi5jYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZEFuaW1hdGlvbkNsYXNzKGVsLCBsZWF2ZVRvQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzVmFsaWREdXJhdGlvbihleHBsaWNpdExlYXZlRHVyYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2IsIGV4cGxpY2l0TGVhdmVEdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi53aGVuQW5pbWF0aW9uRW5kcyhlbCwgdHlwZSwgY2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5sZWF2ZSAmJiBhbmltYXRpb24ubGVhdmUoZWwsIGNiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzb2x2ZUFuaW1hdGlvbihjb25maWcpIHtcclxuICAgICAgICB2YXIgcmVzID0ge307XHJcblxyXG4gICAgICAgIGlmIChjb25maWcuY3NzICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB1dGlscy5leHRlbmQocmVzLCB0aGlzLmF1dG9Dc3NBbmltYXRpb24oY29uZmlnLm5hbWUgfHwgJ24nKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1dGlscy5leHRlbmQocmVzLCBjb25maWcpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGF1dG9Dc3NBbmltYXRpb24obmFtZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVudGVyQ2xhc3M6IChuYW1lICsgXCItZW50ZXJcIiksXHJcbiAgICAgICAgICAgIGVudGVyVG9DbGFzczogKG5hbWUgKyBcIi1lbnRlci10b1wiKSxcclxuICAgICAgICAgICAgZW50ZXJBY3RpdmVDbGFzczogKG5hbWUgKyBcIi1lbnRlci1hY3RpdmVcIiksXHJcbiAgICAgICAgICAgIGxlYXZlQ2xhc3M6IChuYW1lICsgXCItbGVhdmVcIiksXHJcbiAgICAgICAgICAgIGxlYXZlVG9DbGFzczogKG5hbWUgKyBcIi1sZWF2ZS10b1wiKSxcclxuICAgICAgICAgICAgbGVhdmVBY3RpdmVDbGFzczogKG5hbWUgKyBcIi1sZWF2ZS1hY3RpdmVcIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uY2UoZm4pIHtcclxuICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5leHRGcmFtZShmbikge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQW5pbWF0aW9uQ2xhc3MoZWwsIGNscykge1xyXG4gICAgICAgIHZhciBhbmltYXRpb25DbGFzc2VzID0gZWwuX2FuaW1hdGlvbkNsYXNzZXMgfHwgKGVsLl9hbmltYXRpb25DbGFzc2VzID0gW10pO1xyXG4gICAgICAgIGlmIChhbmltYXRpb25DbGFzc2VzLmluZGV4T2YoY2xzKSA8IDApIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uQ2xhc3Nlcy5wdXNoKGNscyk7XHJcbiAgICAgICAgICAgIHV0aWxzLmFkZENsYXNzKGVsLCBjbHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgY2xzKSB7XHJcbiAgICAgICAgaWYgKGVsLl9hbmltYXRpb25DbGFzc2VzKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZShlbC5fYW5pbWF0aW9uQ2xhc3NlcywgY2xzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXRpbHMucmVtb3ZlQ2xhc3MoZWwsIGNscyk7XHJcbiAgICB9XHJcblxyXG4gICAgd2hlbkFuaW1hdGlvbkVuZHMoZWwsXHJcbiAgICAgICAgZXhwZWN0ZWRUeXBlLFxyXG4gICAgICAgIGNiKSB7XHJcbiAgICAgICAgdmFyIHJlZiA9IHRoaXMuZ2V0QW5pbWF0aW9uSW5mbyhlbCwgZXhwZWN0ZWRUeXBlKTtcclxuICAgICAgICB2YXIgdHlwZSA9IHJlZi50eXBlO1xyXG4gICAgICAgIHZhciB0aW1lb3V0ID0gcmVmLnRpbWVvdXQ7XHJcbiAgICAgICAgdmFyIHByb3BDb3VudCA9IHJlZi5wcm9wQ291bnQ7XHJcbiAgICAgICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZXZlbnQgPSB0eXBlID09PSBUUkFOU0lUSU9OID8gdHJhbnNpdGlvbkVuZEV2ZW50IDogYW5pbWF0aW9uRW5kRXZlbnQ7XHJcbiAgICAgICAgdmFyIGVuZGVkID0gMDtcclxuICAgICAgICB2YXIgZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbkVuZCk7XHJcbiAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgb25FbmQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGVsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKytlbmRlZCA+PSBwcm9wQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChlbmRlZCA8IHByb3BDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgZW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aW1lb3V0ICsgMSk7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFuaW1hdGlvbkluZm8oZWwsIGV4cGVjdGVkVHlwZSkge1xyXG4gICAgICAgIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XHJcbiAgICAgICAgdmFyIHRyYW5zaXRpb25EZWxheXMgPSBzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRGVsYXknXS5zcGxpdCgnLCAnKTtcclxuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9ucyA9IHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEdXJhdGlvbiddLnNwbGl0KCcsICcpO1xyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uVGltZW91dCA9IHRoaXMuZ2V0VGltZW91dCh0cmFuc2l0aW9uRGVsYXlzLCB0cmFuc2l0aW9uRHVyYXRpb25zKTtcclxuICAgICAgICB2YXIgYW5pbWF0aW9uRGVsYXlzID0gc3R5bGVzW2FuaW1hdGlvblByb3AgKyAnRGVsYXknXS5zcGxpdCgnLCAnKTtcclxuICAgICAgICB2YXIgYW5pbWF0aW9uRHVyYXRpb25zID0gc3R5bGVzW2FuaW1hdGlvblByb3AgKyAnRHVyYXRpb24nXS5zcGxpdCgnLCAnKTtcclxuICAgICAgICB2YXIgYW5pbWF0aW9uVGltZW91dCA9IHRoaXMuZ2V0VGltZW91dChhbmltYXRpb25EZWxheXMsIGFuaW1hdGlvbkR1cmF0aW9ucyk7XHJcblxyXG4gICAgICAgIHZhciB0eXBlO1xyXG4gICAgICAgIHZhciB0aW1lb3V0ID0gMDtcclxuICAgICAgICB2YXIgcHJvcENvdW50ID0gMDtcclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAoZXhwZWN0ZWRUeXBlID09PSBUUkFOU0lUSU9OKSB7XHJcbiAgICAgICAgICAgIGlmICh0cmFuc2l0aW9uVGltZW91dCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBUUkFOU0lUSU9OO1xyXG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHRyYW5zaXRpb25UaW1lb3V0O1xyXG4gICAgICAgICAgICAgICAgcHJvcENvdW50ID0gdHJhbnNpdGlvbkR1cmF0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gQU5JTUFUSU9OKSB7XHJcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25UaW1lb3V0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IEFOSU1BVElPTjtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBhbmltYXRpb25UaW1lb3V0O1xyXG4gICAgICAgICAgICAgICAgcHJvcENvdW50ID0gYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRpbWVvdXQgPSBNYXRoLm1heCh0cmFuc2l0aW9uVGltZW91dCwgYW5pbWF0aW9uVGltZW91dCk7XHJcbiAgICAgICAgICAgIHR5cGUgPSB0aW1lb3V0ID4gMFxyXG4gICAgICAgICAgICAgICAgPyB0cmFuc2l0aW9uVGltZW91dCA+IGFuaW1hdGlvblRpbWVvdXRcclxuICAgICAgICAgICAgICAgICAgICA/IFRSQU5TSVRJT05cclxuICAgICAgICAgICAgICAgICAgICA6IEFOSU1BVElPTlxyXG4gICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICBwcm9wQ291bnQgPSB0eXBlXHJcbiAgICAgICAgICAgICAgICA/IHR5cGUgPT09IFRSQU5TSVRJT05cclxuICAgICAgICAgICAgICAgICAgICA/IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgOiBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBoYXNUcmFuc2Zvcm0gPVxyXG4gICAgICAgICAgICB0eXBlID09PSBUUkFOU0lUSU9OICYmXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVJFLnRlc3Qoc3R5bGVzW3RyYW5zaXRpb25Qcm9wICsgJ1Byb3BlcnR5J10pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRpbWVvdXQsXHJcbiAgICAgICAgICAgIHByb3BDb3VudDogcHJvcENvdW50LFxyXG4gICAgICAgICAgICBoYXNUcmFuc2Zvcm06IGhhc1RyYW5zZm9ybVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZW91dChkZWxheXMsIGR1cmF0aW9ucykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgd2hpbGUgKGRlbGF5cy5sZW5ndGggPCBkdXJhdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRlbGF5cyA9IGRlbGF5cy5jb25jYXQoZGVsYXlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBkdXJhdGlvbnMubWFwKGZ1bmN0aW9uIChkLCBpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnRvTXMoZCkgKyBzZWxmLnRvTXMoZGVsYXlzW2ldKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9NcyhzKSB7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcihzLnNsaWNlKDAsIC0xKSkgKiAxMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWREdXJhdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzb2x2ZUFuaW1hdGlvbkNvbnRleHQoZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBhbmltYXRpb25zID0gZWxlbWVudC5nZXREaXJlY3RpdmVzKCkuZmlsdGVyKGZ1bmN0aW9uIChkaXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpci5hbmltYXRpb24gPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYW5pbWF0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFuaW1hdGlvbnNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnYW5pbWF0aW9uJ1xyXG59KVxyXG5jbGFzcyBBbmltYXRpb24gZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvLyBhbmltYXRpb24gdHlwZSwgXCJ0cmFuc2l0aW9uXCIgb3IgXCJhbmltYXRpb25cIlxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnJztcclxuICAgICAgICB0aGlzLnR5cGUgPSAnJztcclxuICAgICAgICB0aGlzLmNzcyA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5lbnRlckNsYXNzID0gJyc7XHJcbiAgICAgICAgLy8gdGhpcy5lbnRlclRvQ2xhc3MgPSAnJztcclxuICAgICAgICAvLyB0aGlzLmVudGVyQWN0aXZlQ2xhc3MgPSAnJztcclxuICAgICAgICAvLyB0aGlzLmxlYXZlQ2xhc3MgPSAnJztcclxuICAgICAgICAvLyB0aGlzLmxlYXZlVG9DbGFzcyA9ICcnO1xyXG4gICAgICAgIC8vIHRoaXMubGVhdmVBY3RpdmVDbGFzcyA9ICcnO1xyXG4gICAgICAgIHRoaXMuJHByaW9yaXR5ID0gLTEwMDtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0RnJhbWUoZm4pIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJlZm9yZUVudGVyKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBlbnRlcigpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYWZ0ZXJFbnRlcigpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZW50ZXJDYW5jZWxsZWQoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGJlZm9yZUxlYXZlKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBsZWF2ZSgpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYWZ0ZXJMZWF2ZSgpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gbGVhdmVDYW5jZWxsZWQoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGRlbGF5TGVhdmUoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5leHBvcnQgeyBBbmltYXRpb24gfSIsImV4cG9ydCAqIGZyb20gJy4vYW5pbWF0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gJy4vYmluZGluZyc7XG5cbi8vIC8vIFdpbmRvdyBFdmVudHNcbi8vIGNhc2UgJ29uLWxvYWQnOlxuLy8gY2FzZSAnb24tdW5sb2FkJzpcbi8vIC8vIEZvcm0gRWxlbWVudCBFdmVudHNcbi8vIGNhc2UgJ29uLWNoYW5nZSc6XG4vLyBjYXNlICdvbi1zdWJtaXQnOlxuLy8gY2FzZSAnb24tcmVzZXQnOlxuLy8gY2FzZSAnb24tc2VsZWN0Jzpcbi8vIGNhc2UgJ29uLWJsdXInOlxuLy8gY2FzZSAnb24tZm9jdXMnOlxuLy8gLy8gSW1hZ2UgRXZlbnRzXG4vLyBjYXNlICdvbi1hYm9ydCc6XG4vLyAvLyBLZXlib2FyZCBFdmVudHNcbi8vIGNhc2UgJ29uLWtleWRvd24nOlxuLy8gY2FzZSAnb24ta2V5cHJlc3MnOlxuLy8gY2FzZSAnb24ta2V5dXAnOlxuLy8gLy8gTW91c2UgRXZlbnRzXG4vLyBjYXNlICdvbi1jbGljayc6XG4vLyBjYXNlICdvbi1kYmxjbGljayc6XG4vLyBjYXNlICdvbi1tb3VzZWRvd24nOlxuLy8gY2FzZSAnb24tbW91c2Vtb3ZlJzpcbi8vIGNhc2UgJ29uLW1vdXNlb3V0Jzpcbi8vIGNhc2UgJ29uLW1vdXNlb3Zlcic6XG4vLyBjYXNlICdvbi1tb3VzZXVwJzpcbnZhciBldmVudFRleHQgPSAnbG9hZCB1bmxvYWQgY2hhbmdlIHN1Ym1pdCByZXNldCBzZWxlY3QgYmx1ciBmb2N1cyBhYm9ydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZW1vdmUgbW91c2VvdXQgbW91c2VvdmVyIG1vdXNldXAnO1xudmFyIGRvbUV2ZW50cyA9IGV2ZW50VGV4dC5zcGxpdCgnICcpO1xuXG5jbGFzcyBBdHRyTm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuYXR0cmlidXRlLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMucXVvdGUgPSAnXCInO1xuICAgICAgICB0aGlzLm9yaWdpbiA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXNFdmVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQmluZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRG9tRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RpcmVjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmJpbmRpbmcgPSBuZXcgQmluZGluZygpO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gMDtcbiAgICB9XG5cbiAgICBiZWxvbmdUbyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luID09PSBrZXk7XG4gICAgfVxuXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jb21waWxlKHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgb2JzZXJ2ZShhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5iaW5kaW5nLm9ic2VydmUoYWN0aW9uKTtcbiAgICB9XG5cbiAgICBjb21waWxlKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pc0V2ZW50ID0gdGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCdAJyk7XG4gICAgICAgIHRoaXMuaXNCaW5kaW5nID0gdGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCc6Jyk7XG4gICAgICAgIHRoaXMuaXNEaXJlY3RpdmUgPSB0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJyonKTtcbiAgICAgICAgaWYgKHRoaXMuaXNFdmVudCB8fCB0aGlzLmlzQmluZGluZyB8fCB0aGlzLmlzRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVOYW1lID0gdGhpcy5ub2RlTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0RvbUV2ZW50ID0gdXRpbHMuY29udGFpbnMoZG9tRXZlbnRzLCB0aGlzLm5vZGVOYW1lKTtcbiAgICAgICAgdGhpcy5iaW5kaW5nLnNldE91dHB1dCh0aGlzLmlzRXZlbnQpO1xuICAgICAgICB0aGlzLmJpbmRpbmcuYmluZCh0aGlzLm5vZGVWYWx1ZSwgdGhpcy5pc0V2ZW50IHx8IHRoaXMuaXNCaW5kaW5nIHx8IHRoaXMuaXNEaXJlY3RpdmUpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5jb250YWluc0RpcmVjdGl2ZSh0aGlzLm5vZGVOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlID0gb3B0aW9ucy5jcmVhdGVEaXJlY3RpdmUodGhpcy5ub2RlTmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGJpbmROb2RlKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZGluZy5zZXRPdXRwdXQodGhpcy5kaXJlY3RpdmUuJG91dHB1dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHRoaXMuZGlyZWN0aXZlLiRwcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlyZWN0aXZlICcgKyB0aGlzLm5vZGVOYW1lICsgJyBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5Q29tcGlsZWQob3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGNvbXBpbGUob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rKHNjb3BlLCBodG1sRWxlbWVudCwgb3duZXJDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IGh0bWxFbGVtZW50O1xuICAgICAgICB0aGlzLm93bmVyQ29tcG9uZW50ID0gb3duZXJDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuYmluZGluZy5zZXRTY29wZShzY29wZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFdmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNEb21FdmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5vZGVOYW1lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmJpbmRpbmcuY29tcHV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQ6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFyZ3M6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6IHNlbGYuaHRtbEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvd25lckNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb3duZXJDb21wb25lbnQuJGxpc3Rlbih0aGlzLm5vZGVOYW1lLCBmdW5jdGlvbiAoZSwgYXJncykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmJpbmRpbmcuY29tcHV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQ6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFyZ3M6IGFyZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6IHNlbGYuaHRtbEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBzY29wZS4kJGNoaWxkRGlyZWN0aXZlcy5wdXNoKHRoaXMuZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kc2V0QmluZGluZyh0aGlzLmJpbmRpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3duZXJDb21wb25lbnQgIT0gbnVsbCAmJiBvd25lckNvbXBvbmVudC4kaGFzQXR0cih0aGlzLm5vZGVOYW1lKSkge1xuICAgICAgICAgICAgICAgIG93bmVyQ29tcG9uZW50LiRpbml0QXR0cih0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5odG1sRWxlbWVudCwgdGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUgPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGRldGVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzQ2hhbmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iaW5kaW5nLmRldGVjdCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiR1cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm93bmVyQ29tcG9uZW50ICE9IG51bGwgJiYgdGhpcy5vd25lckNvbXBvbmVudC4kaGFzQXR0cih0aGlzLm5vZGVOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3duZXJDb21wb25lbnQuJHNldEF0dHIodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5odG1sRWxlbWVudCwgdGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmh0bWxFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnICYmIHRoaXMubm9kZU5hbWUgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnQudmFsdWUgPSB0aGlzLmJpbmRpbmcudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlMaW5rZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGluc2VydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aXZlKGtleSkge1xuICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSAhPSBudWxsICYmIHRoaXMuZGlyZWN0aXZlLiQkbWV0YS5zZWxlY3RvciA9PT0ga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRPdXRlclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luICsgKHRoaXMubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB0aGlzLnF1b3RlICsgdGhpcy5ub2RlVmFsdWUgKyB0aGlzLnF1b3RlKSk7XG4gICAgfVxuXG4gICAgZ2V0SW5uZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbiArICh0aGlzLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdGhpcy5xdW90ZSArIHRoaXMubm9kZVZhbHVlICsgdGhpcy5xdW90ZSkpO1xuICAgIH1cblxuICAgIGRpc3Bvc2UoaXNGcm9tRGlyZWN0aXZlKSB7XG4gICAgICAgIGlmIChpc0Zyb21EaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZGluZy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuYmluZGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRkaXNwb3NlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBBdHRyTm9kZSB9O1xuIiwiXG52YXIgVk5vZGVUeXBlID0ge1xuICAgIGVsZW1lbnQ6IDEsXG4gICAgYXR0cmlidXRlOiAyLFxuICAgIHRleHQ6IDMsXG4gICAgY2RhdGFTZWN0aW9uOiA0LFxuICAgIGVudGl0eVJlZmVyZW5jZTogNSxcbiAgICBlbnRpdHk6IDYsXG4gICAgcHJvY2Vzc2luZ0luc3RydWN0aW9uOiA3LFxuICAgIGNvbW1lbnQ6IDgsXG4gICAgZG9jdW1lbnQ6IDksXG4gICAgZG9jdW1lbnRUeXBlOiAxMCxcbiAgICBkb2N1bWVudEZyYWdtZW50OiAxMSxcbiAgICBub3RhdGlvbjogMTIsXG4gICAgY29ubmVjdGlvbjogMTAxXG59O1xuXG4vLyB2aXJ0dWFsIG5vZGVcbmNsYXNzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLm5vZGVUeXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5ub2RlTmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJEb2N1bWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgIH1cblxuICAgICRwdXNoQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICAkYnVpbGRTaWJsaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzW3RoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gKHNlbGYuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLiRidWlsZFNpYmxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJGNsZWFyUGFyZW50QW5kU2libGluZygpIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgICB9XG5cbiAgICAkcmVtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRkZXN0cm95KCkge1xuICAgICAgICB0aGlzLiRyZW1vdmUoKTtcbiAgICAgICAgdGhpcy4kY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJEb2N1bWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgIH1cblxuICAgIGhhc0NoaWxkTm9kZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIGNsZWFyQ2hpbGROb2RlcygpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkLm5leHRTaWJsaW5nID0gY2hpbGQ7XG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSB0aGlzLmxhc3RDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIGluc2VydEJlZm9yZShyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcblxuICAgICAgICBpZiAocmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZDtcbiAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nID0gbmV3Q2hpbGQ7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDAsIG5ld0NoaWxkKTtcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cblxuICAgIGluc2VydEFmdGVyKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAocmVmQ2hpbGQubmV4dFNpYmxpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLm5leHRTaWJsaW5nLCBuZXdDaGlsZCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW92ZSBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nLnByZXZpb3VzU2libGluZyA9IGNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09ICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuJGNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgcmVwbGFjZUNoaWxkKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlyc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGFzdENoaWxkID09PSByZWZDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZkNoaWxkLiRjbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSwgbmV3Q2hpbGQpO1xuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuXG4gICAgY2xvbmVOb2RlKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIGNvbXBpbGUob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmNvbXBpbGUob3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vdGlmeUNvbXBpbGVkKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5ub3RpZnlDb21waWxlZChvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGluayhzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQubGluayhzY29wZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vdGlmeUxpbmtlZCgpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5ub3RpZnlMaW5rZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2UoKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH07XG4iLCJpbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7IGNvbXB1dGUsIHBhcnNlQXNzaWdubWVudCB9IGZyb20gJy4uL3BhcnNlcic7XG5cbmNsYXNzIEV4cE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSBjb21wdXRlKHRoaXMudGV4dCwgc2NvcGUsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgIT09IHRoaXMub2xkVmFsdWU7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgQmluZGluZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnRleHQgPSAnJztcbiAgICAgICAgdGhpcy5pc0V4cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICAgIHRoaXMucmlnaHRTdHIgPSAnJztcbiAgICAgICAgdGhpcy5vdXRwdXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnVud2F0Y2hlcyA9IFtdO1xuICAgICAgICB0aGlzLmNoYW5nZSA9IG5ldyBNZXNzZW5nZXIoKTtcbiAgICB9XG5cbiAgICBzZXRTY29wZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0T3V0cHV0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMub3V0cHV0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYmluZCh0ZXh0LCBpc0V4cCkge1xuICAgICAgICBpZiAodGV4dCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmlzRXhwID0gaXNFeHA7XG5cbiAgICAgICAgaWYgKGlzRXhwKSB7XG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGV4cDogbmV3IEV4cE5vZGUodGV4dCksXG4gICAgICAgICAgICAgICAgbGVmdFN0cjogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhdHRlcm4gPSAve3soW159XSopfX0vZztcbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XG5cbiAgICAgICAgd2hpbGUgKG1hdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgaW5kZXg6IG1hdGNoLmluZGV4LFxuICAgICAgICAgICAgICAgIGV4cDogbmV3IEV4cE5vZGUobWF0Y2hbMV0pLFxuICAgICAgICAgICAgICAgIGxlZnRTdHI6IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWdtZW50cy5sZW5ndGggPiAwICYmIGxhc3RJbmRleCA8IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0U3RyID0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGUob3B0aW9ucykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VnbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNFeHAgJiYgdGhpcy5zZWdtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzWzBdLmV4cC5jb21wdXRlKHNlbGYuc2NvcGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnNlZ21lbnRzWzBdLmV4cC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuZXhwLmNvbXB1dGUoc2VsZi5zY29wZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gKHNlZ21lbnQubGVmdFN0ciArIHNlZ21lbnQuZXhwLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGV4dCArIHRoaXMucmlnaHRTdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICBhc3NpZ24odmFsdWUpIHtcbiAgICAgICAgdmFyIGFzc2lnbm1lbnQgPSBwYXJzZUFzc2lnbm1lbnQodGhpcy50ZXh0LCB0aGlzLnNjb3BlKTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudC5vYmogIT0gbnVsbCAmJiBhc3NpZ25tZW50LnByb3AgIT0gbnVsbCkge1xuICAgICAgICAgICAgYXNzaWdubWVudC5vYmoudG9Qcm94eSgpW2Fzc2lnbm1lbnQucHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpc3RlbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnVud2F0Y2hlcyA9IHRoaXMuc2VnbWVudHMubWFwKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5zY29wZS4kd2F0Y2goc2VnbWVudC5leHAudGV4dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kZXRlY3QoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2UuZmlyZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVmZXIoYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmNhbmNlbFRpbWVvdXQoKTtcblxuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhbmNlbFRpbWVvdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb2JzZXJ2ZShhY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMub3V0cHV0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpc3RlbigpO1xuICAgICAgICB0aGlzLmNoYW5nZS5vbihhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZS5vZmYoYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLm91dHB1dCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcHV0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSAhPT0gdGhpcy5vbGRWYWx1ZTtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuc2VnbWVudHMuc29tZShmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIHNlZ21lbnQuZXhwLmRldGVjdCgpO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmNhbmNlbFRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy51bndhdGNoZXMuZm9yRWFjaChmdW5jdGlvbiAodW53YXRjaCkge1xuICAgICAgICAgICAgdW53YXRjaC5jYWxsKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgIHNlZ21lbnQuZXhwLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQmluZGluZyB9OyIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuXG5jbGFzcyBDRGF0YVNlY3Rpb25Ob2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5jZGF0YVNlY3Rpb24pO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ0RhdGFTZWN0aW9uTm9kZSB9OyIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuXG5jbGFzcyBDb21tZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuY29tbWVudCwgJyNjb21tZW50Jyk7XG4gICAgfVxuXG4gICAgbGluaygpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cblxuICAgIGdldE91dGVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0SW5uZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IENvbW1lbnROb2RlIH07XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuXG5jbGFzcyBDb25uZWN0aW9uTm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsaW5rZXIpe1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuY29ubmVjdGlvbiwgbmFtZSk7XG4gICAgICAgIHRoaXMubGlua2VyID0gbGlua2VyO1xuICAgIH1cblxuICAgIGxpbmsoc2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICByZXR1cm4gdGhpcy5saW5rZXIuY2FsbCh0aGlzLCBzY29wZSk7XG4gICAgfVxuXG4gICAgbm90aWZ5TGlua2VkKCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uSW5zZXJ0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25JbnNlcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRldGVjdCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRGV0ZWN0LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDaGFuZ2UoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25IYXNDaGFuZ2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkhhc0NoYW5nZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uVXBkYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25VcGRhdGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ29ubmVjdGlvbk5vZGUgfTsiLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcblxuY2xhc3MgRG9jdW1lbnRUeXBlTm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmRvY3VtZW50VHlwZSk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBEb2N1bWVudFR5cGVOb2RlIH07XG4iLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcblxuY2xhc3MgRG9jdW1lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuZG9jdW1lbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgRG9jdW1lbnROb2RlIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IENvbm5lY3Rpb25Ob2RlIH0gZnJvbSAnLi9jb25uZWN0aW9uJztcbmltcG9ydCB7IEF0dHJOb2RlIH0gZnJvbSAnLi9hdHRyaWJ1dGUnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICcuLi9wYXJzZXInO1xuXG5jbGFzcyBFbGVtZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBnZXQgcGFyZW50RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmVsZW1lbnQsIG5hbWUpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxmQ2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tcGlsZU9wdGlvbnMgPSBudWxsO1xuICAgICAgICB0aGlzLmlzQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgJHB1c2hBdHRyaWJ1dGUoYXR0cikge1xuICAgICAgICBhdHRyLm93bmVyRWxlbWVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xuICAgIH1cblxuICAgIGhhc0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZShrZXkpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaGVzWzBdO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQsIG1hdGNoZXMgPSB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVzWzBdO1xuICAgICAgICAgICAgdGFyZ2V0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG5ldyBBdHRyTm9kZShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHRhcmdldC5vd25lckVsZW1lbnQgPSB0aGlzO1xuICAgICAgICAgICAgdGFyZ2V0LmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaCh0YXJnZXQpO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlQXR0cmlidXRlKGtleSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gW10sIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBBdHRyTm9kZSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hdHRyaWJ1dGVzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLmF0dHJpYnV0ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzZWxmLmF0dHJpYnV0ZXMuaW5kZXhPZihtYXRjaCk7XG4gICAgICAgICAgICAgICAgbWF0Y2guZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYuYXR0cmlidXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Lmxlbmd0aCA+IDAgPyB0YXJnZXRbMF0gOiBudWxsO1xuICAgIH1cblxuICAgIGFwcGVuZEF0dHJpYnV0ZShhdHRyKSB7XG4gICAgICAgIGlmIChhdHRyLm93bmVyRWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDdXJyZW50IGF0dHJpYnV0ZSBpcyBub3QgbmV3IVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF0dHIub3duZXJFbGVtZW50ID0gdGhpcztcbiAgICAgICAgYXR0ci5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaChhdHRyKTtcbiAgICAgICAgcmV0dXJuIGF0dHI7XG4gICAgfVxuXG4gICAgb2JzZXJ2ZShrZXksIGFjdGlvbikge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaGVzWzBdLm9ic2VydmUoYWN0aW9uKTtcbiAgICB9XG5cbiAgICBnZXRPdXRlclRwbCgpIHtcbiAgICAgICAgdmFyIGF0dHJUcGwgPSAnJywgY2hpbGRUcGwgPSAnJztcblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0clRwbCArPSAnICc7XG4gICAgICAgICAgICBhdHRyVHBsICs9IGF0dHIuZ2V0T3V0ZXJUcGwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZFRwbCArPSBjaGlsZC5nZXRPdXRlclRwbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgdHBsID0gJzwnICsgdGhpcy5ub2RlTmFtZSArIGF0dHJUcGwgKyAnPicgKyBjaGlsZFRwbDtcblxuICAgICAgICBpZiAoIXRoaXMuc2VsZkNsb3NlZCkge1xuICAgICAgICAgICAgdHBsICs9ICgnPC8nICsgdGhpcy5ub2RlTmFtZSArICc+Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHBsO1xuICAgIH1cblxuICAgIGdldElubmVyVHBsKCkge1xuICAgICAgICB2YXIgY2hpbGRUcGwgPSAnJztcblxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkVHBsICs9IGNoaWxkLmdldE91dGVyVHBsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGlsZFRwbDtcbiAgICB9XG5cbiAgICBzZXRPdXRlclRwbCh0cGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBwYXJzZSh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZiwgdm5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYpO1xuICAgIH1cblxuICAgIHNldElubmVyVHBsKHRwbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2xlYXJDaGlsZE5vZGVzKCk7XG4gICAgICAgIHBhcnNlKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5hcHBlbmRDaGlsZCh2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldERpcmVjdGl2ZShrZXkpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnNvbWUoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF0dHIuZ2V0RGlyZWN0aXZlKGtleSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0ICE9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aXZlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcy5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmdldERpcmVjdGl2ZSgpO1xuICAgICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgcmV0dXJuIGRpciAhPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21waWxlKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jb21waWxlT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyLmNvbXBpbGUob3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBwZXJmb3JtIGRpcmVjdGl2ZSBhY2NvcmRpbmcgdG8gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gdXRpbHMub3JkZXJCeSh0aGlzLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5wcmlvcml0eTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNDb21wb25lbnQgPSBvcHRpb25zLmNvbnRhaW5zQ29tcG9uZW50KHRoaXMubm9kZU5hbWUpO1xuICAgICAgICBpZiAoIXRoaXMuaXNDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLmNvbXBpbGUob3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeUNvbXBpbGVkKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIubm90aWZ5Q29tcGlsZWQob3B0aW9ucyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5ub3RpZnlDb21waWxlZChvcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGluayhzY29wZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi5zY29wZSA9IHNjb3BlO1xuICAgICAgICBzZWxmLmh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzZWxmLm5vZGVOYW1lKTtcblxuICAgICAgICBpZiAodGhpcy5pc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBzY29wZS4kY3JlYXRlQ2hpbGRDbXAodGhpcy5ub2RlTmFtZSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC4kYmluZE5vZGUodGhpcyk7XG4gICAgICAgICAgICBzZWxmLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgIGF0dHIubGluayhzY29wZSwgc2VsZi5odG1sRWxlbWVudCwgc2VsZi5jb21wb25lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLmNvbXBvbmVudC4kaW5pdEF0dHJEb25lKCk7XG4gICAgICAgICAgICBzZWxmLmNvbXBvbmVudC4kbW91bnQoc2VsZi5odG1sRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgIGF0dHIubGluayhzY29wZSwgc2VsZi5odG1sRWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIHNlbGYuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQubGluayhzY29wZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VsZi5odG1sRWxlbWVudDtcbiAgICB9XG5cbiAgICBub3RpZnlMaW5rZWQoKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyLm5vdGlmeUxpbmtlZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQubm90aWZ5TGlua2VkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIuZGV0ZWN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuZGV0ZWN0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3Bvc2UoaXNGcm9tQ29tcG9uZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Zyb21Db21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMucmVtb3ZlSHRtbEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5jb21waWxlT3B0aW9ucyA9IG51bGw7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuJGRpc3Bvc2UodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBnZXRIdG1sRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlSHRtbEVsZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmh0bWxFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZU5vZGUodGhpcy5odG1sRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVFbGVtZW50KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50Tm9kZShuYW1lKTtcbiAgICB9XG5cbiAgICBjcmVhdGVBdHRyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBdHRyTm9kZShuYW1lKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb25uZWN0aW9uKG5hbWUsIGxpbmtlcikge1xuICAgICAgICByZXR1cm4gbmV3IENvbm5lY3Rpb25Ob2RlKG5hbWUsIGxpbmtlcik7XG4gICAgfVxufVxuXG5leHBvcnQgeyBFbGVtZW50Tm9kZSB9OyIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuXG5jbGFzcyBEb2N1bWVudEZyYWdtZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuZG9jdW1lbnRGcmFnbWVudCwgJyNkb2N1bWVudC1mcmFnbWVudCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgRG9jdW1lbnRGcmFnbWVudE5vZGUgfTtcbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc0FycmF5LCBNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5JztcblxudmFyIHByb3BDaGFuZ2luZ01zZyA9IG5ldyBNZXNzZW5nZXIoKTtcbnZhciBwcm9wQ2hhbmdlZE1zZyA9IG5ldyBNZXNzZW5nZXIoKTtcbnZhciB0YXJnZXRLZXkgPSAnX190YXJnZXRfXyc7XG5cbmZ1bmN0aW9uIGdldFRhcmdldCh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHZhbHVlW3RhcmdldEtleV07XG5cbiAgICAgICAgLy8gdmFsdWUgaXMgYSBwcm94eSByZXR1cm4gYnkgcHJveHkgaGFuZGxlclxuICAgICAgICBpZiAodGFyZ2V0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5jbGFzcyBHZXRQcm9wZXJ0eUhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKGRlZXBQcm94eSwgdmFyaWFibGVzLCBmdWxsVGFyZ2V0S2V5KSB7XG4gICAgICAgIHRoaXMuZGVlcFByb3h5ID0gZGVlcFByb3h5O1xuICAgICAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICAgICAgdGhpcy5mdWxsVGFyZ2V0S2V5ID0gZnVsbFRhcmdldEtleTtcbiAgICB9XG5cbiAgICBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgaWYgKHRhcmdldEtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGFyZ2V0W2tleV0sIGZ1bGxLZXkgPSBrZXk7XG5cbiAgICAgICAgaWYgKHRoaXMuZnVsbFRhcmdldEtleSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmdWxsS2V5ID0gdGhpcy5mdWxsVGFyZ2V0S2V5ICsgJy4nICsga2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVlcFByb3h5ICYmIGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXcgUHJveHkodmFsdWUsIG5ldyBHZXRQcm9wZXJ0eUhhbmRsZXIodGhpcy5kZWVwUHJveHksIHRoaXMudmFyaWFibGVzLCBmdWxsS2V5KSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhpc3RlZCA9IHRoaXMudmFyaWFibGVzLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRhcmdldCA9PT0gdGFyZ2V0ICYmIGl0ZW0ua2V5ID09PSBrZXk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghZXhpc3RlZCkge1xuICAgICAgICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgdGFyZ2V0S2V5OiB0aGlzLmZ1bGxUYXJnZXRLZXlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuY2xhc3MgU2V0UHJvcGVydHlIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHNldCh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGFyZ2V0W2tleV07XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSB8fCAoaXNBcnJheSh0YXJnZXQpICYmIGtleSA9PT0gJ2xlbmd0aCcpKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcHBseTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwcm9wQ2hhbmdpbmdNc2cuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgZGF0YTogdmFsaWRhdGlvblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLmFwcGx5KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBwcm9wQ2hhbmdlZE1zZy5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5jbGFzcyBBY2Nlc3NQcm9wZXJ0eUhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKGRlZXBQcm94eSkge1xuICAgICAgICB0aGlzLmRlZXBQcm94eSA9IGRlZXBQcm94eTtcbiAgICB9XG5cbiAgICBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgaWYgKHRhcmdldEtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGFyZ2V0W2tleV07XG5cbiAgICAgICAgaWYgKHRoaXMuZGVlcFByb3h5ICYmIGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXcgUHJveHkodmFsdWUsIG5ldyBTZXRQcm9wZXJ0eUhhbmRsZXIodGhpcy5kZWVwUHJveHkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmRlZXBQcm94eSkge1xuICAgICAgICAgICAgdmFsdWUgPSBnZXRUYXJnZXQodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGFyZ2V0W2tleV07XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSB8fCAoaXNBcnJheSh0YXJnZXQpICYmIGtleSA9PT0gJ2xlbmd0aCcpKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcHBseTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwcm9wQ2hhbmdpbmdNc2cuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgZGF0YTogdmFsaWRhdGlvblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLmFwcGx5KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBwcm9wQ2hhbmdlZE1zZy5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgeyBHZXRQcm9wZXJ0eUhhbmRsZXIsIFNldFByb3BlcnR5SGFuZGxlciwgQWNjZXNzUHJvcGVydHlIYW5kbGVyLCBwcm9wQ2hhbmdpbmdNc2csIHByb3BDaGFuZ2VkTXNnLCBnZXRUYXJnZXQgfSIsImV4cG9ydCAqIGZyb20gJy4vYmFzZSc7XG5leHBvcnQgKiBmcm9tICcuL2F0dHJpYnV0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2NkYXRhc2VjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25uZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vZG9jdHlwZSc7XG5leHBvcnQgKiBmcm9tICcuL2RvY3VtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZyYWdtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL2JpbmRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9oYW5kbGVyJztcbmV4cG9ydCAqIGZyb20gJy4vb2JzZXJ2ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9wcm94eSc7IiwiaW1wb3J0IHsgY29tcHV0ZSwgcGFyc2VFeHAgfSBmcm9tICcuLi9wYXJzZXInO1xuaW1wb3J0IHsgaXNSZWdFeHAsIGZvckVhY2ggfSBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7IHByb3BDaGFuZ2luZ01zZywgcHJvcENoYW5nZWRNc2csIEdldFByb3BlcnR5SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcic7XG5cbmNsYXNzIFByb3BlcnR5T2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYWluTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlZ2V4TWFwID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIG9uKHByb3AsIGFjdGlvbiwgb3B0aW9ucykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBtYXAgPSBpc1JlZ0V4cChwcm9wKSA/IHRoaXMucmVnZXhNYXAgOiB0aGlzLnBsYWluTWFwO1xuXG4gICAgICAgIGlmICghbWFwLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgbWFwLnNldChwcm9wLCBbXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgYWN0aW9uLmJlZm9yZUNoYW5nZWQgPSBvcHRpb25zLmJlZm9yZUNoYW5nZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBtYXAuZ2V0KHByb3ApLnB1c2goYWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vZmYocHJvcCwgYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvZmYocHJvcCwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBtYXAgPSBpc1JlZ0V4cChwcm9wKSA/IHRoaXMucmVnZXhNYXAgOiB0aGlzLnBsYWluTWFwO1xuXG4gICAgICAgIGlmICghbWFwLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFjdGlvbnMgPSBtYXAuZ2V0KHByb3ApO1xuICAgICAgICB2YXIgaW5kZXggPSBhY3Rpb25zLmluZGV4T2YoYWN0aW9uKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlQ2hhbmdlZChwcm9wLCBhcmdzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5wbGFpbk1hcC5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgIHRoaXMucGxhaW5NYXAuZ2V0KHByb3ApLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmJlZm9yZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZ2V4TWFwLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbnMsIHBhdHRlcm4pIHtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuLnRlc3QocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5iZWZvcmVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaXJlQ2hhbmdpbmcocHJvcCwgYXJncykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMucGxhaW5NYXAuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICB0aGlzLnBsYWluTWFwLmdldChwcm9wKS5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmJlZm9yZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZ2V4TWFwLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbnMsIHBhdHRlcm4pIHtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuLnRlc3QocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmJlZm9yZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYsIHByb3AsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucGxhaW5NYXAuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZWdleE1hcC5jbGVhcigpO1xuICAgIH1cbn1cblxuY2xhc3MgT2JqZWN0T2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBvbmNoYW5naW5nID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gYXJncy50YXJnZXQsIHByb3AgPSBhcmdzLmtleTtcbiAgICAgICAgICAgICAgICBzZWxmLmZpcmVDaGFuZ2luZyhvYmosIHByb3AsIGFyZ3MuZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25jaGFuZ2VkID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gYXJncy50YXJnZXQsIHByb3AgPSBhcmdzLmtleTtcbiAgICAgICAgICAgICAgICBzZWxmLmZpcmVDaGFuZ2VkKG9iaiwgcHJvcCwgYXJncy5kYXRhKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgcHJvcENoYW5naW5nTXNnLm9uKG9uY2hhbmdpbmcpO1xuICAgICAgICBwcm9wQ2hhbmdlZE1zZy5vbihvbmNoYW5nZWQpO1xuXG4gICAgICAgIHRoaXMub2ZmQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHJvcENoYW5naW5nTXNnLm9mZihvbmNoYW5naW5nKTtcbiAgICAgICAgICAgIHByb3BDaGFuZ2VkTXNnLm9mZihvbmNoYW5nZWQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9iak1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBvbihvYmosIHByb3AsIGFjdGlvbiwgb3B0aW9ucykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCF0aGlzLm9iak1hcC5oYXMob2JqKSkge1xuICAgICAgICAgICAgdGhpcy5vYmpNYXAuc2V0KG9iaiwgbmV3IFByb3BlcnR5T2JzZXJ2ZXIoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5vYmpNYXAuZ2V0KG9iaikub24ocHJvcCwgYWN0aW9uLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBvZmYob2JqLCBwcm9wLCBhY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMub2JqTWFwLmhhcyhvYmopKSB7XG4gICAgICAgICAgICB0aGlzLm9iak1hcC5nZXQob2JqKS5vZmYocHJvcCwgYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVDaGFuZ2VkKG9iaiwgcHJvcCwgYXJncykge1xuICAgICAgICBpZiAodGhpcy5vYmpNYXAuaGFzKG9iaikpIHtcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLmdldChvYmopLmZpcmVDaGFuZ2VkKHByb3AsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUNoYW5naW5nKG9iaiwgcHJvcCwgYXJncykge1xuICAgICAgICBpZiAodGhpcy5vYmpNYXAuaGFzKG9iaikpIHtcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLmdldChvYmopLmZpcmVDaGFuZ2luZyhwcm9wLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub2ZmQ2hhbmdlLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMub2JqTWFwLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vYmpNYXAgPSBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgTWVtYmVyV2F0Y2hlciB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIHRhcmdldCwga2V5LCB0YXJnZXRLZXkpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMudGFyZ2V0S2V5ID0gdGFyZ2V0S2V5O1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBudWxsO1xuXG4gICAgICAgIGlmICghdGFyZ2V0S2V5KSB7XG4gICAgICAgICAgICB0aGlzLmlkID0ga2V5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRhcmdldEtleSArICcuJyArIGtleTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KG9ic2VydmVyLCBhY3Rpb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy51bndhdGNoID0gdGhpcy5vYnNlcnZlci5vbih0aGlzLnRhcmdldCwgdGhpcy5rZXksIHRoaXMuYWN0aW9uLCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLnVud2F0Y2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51bndhdGNoLmNhbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShjaGFuZ2VLZXkpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0S2V5ICE9IG51bGwgJiYgdGhpcy50YXJnZXRLZXkuc3RhcnRzV2l0aChjaGFuZ2VLZXkpKSB7XG4gICAgICAgICAgICB2YXIgbmV3VGFyZ2V0ID0gY29tcHV0ZSh0aGlzLnRhcmdldEtleSwgdGhpcy5zY29wZSk7XG5cbiAgICAgICAgICAgIGlmIChuZXdUYXJnZXQgIT09IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBuZXdUYXJnZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy51bndhdGNoID0gdGhpcy5vYnNlcnZlci5vbih0aGlzLnRhcmdldCwgdGhpcy5rZXksIHRoaXMuYWN0aW9uLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBEZXRlY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGlnZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5xdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWZlcihhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyRGVmZXIoKTtcbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gbnVsbDtcbiAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhckRlZmVyKCkge1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0SWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4ZWN1dGUoKSB7XG4gICAgICAgIHByb3BDaGFuZ2VkTXNnLm9uKHRoaXMuZGlnZXN0KTtcbiAgICB9XG5cbiAgICBhcHBseShhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKGFjdGlvbik7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGFjdGlvbikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnF1ZXVlLmluZGV4T2YoYWN0aW9uKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBwcm9wQ2hhbmdlZE1zZy5vZmYodGhpcy5kaWdlc3QpO1xuICAgICAgICB0aGlzLmNsZWFyRGVmZXIoKTtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgIH1cbn1cblxudmFyIGRldGVjdG9yID0gbmV3IERldGVjdG9yKCk7XG5cbmRldGVjdG9yLmV4ZWN1dGUoKTtcblxuY2xhc3MgRXhwV2F0Y2hlciB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIGV4cCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xuICAgICAgICB0aGlzLmRldGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IHNlbGYudmFsdWUsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBjb21wdXRlKHNlbGYuZXhwLCBzZWxmLnNjb3BlKTtcblxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICBzZWxmLmFjdGlvbi5jYWxsKHNlbGYsIHtcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGNvbXB1dGUodGhpcy5leHAsIHRoaXMuc2NvcGUpO1xuICAgICAgICBkZXRlY3Rvci5hcHBseShzZWxmLmRldGVjdCk7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRldGVjdG9yLnJlbW92ZShzZWxmLmRldGVjdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMudW53YXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVud2F0Y2guY2FsbCgpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgV2F0Y2hlciB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIGV4cCkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuZXhwID0gZXhwO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5kaWdlc3RzID0gW107XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG51bGw7XG4gICAgfVxuXG4gICAgcGFyc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cCA9PT0gJyonKSB7XG4gICAgICAgICAgICB0aGlzLmV4cCA9IC8uKy9pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzUmVnRXhwKHRoaXMuZXhwKSkge1xuICAgICAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnNjb3BlLFxuICAgICAgICAgICAgICAgIGtleTogdGhpcy5leHBcbiAgICAgICAgICAgIH1dO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFzdCA9IHBhcnNlRXhwKHRoaXMuZXhwKTtcblxuICAgICAgICBpZiAoYXN0Lmhhc0NDKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICAgIGRpcnR5Q2hlY2s6IHRydWUsXG4gICAgICAgICAgICAgICAga2V5OiB0aGlzLmV4cFxuICAgICAgICAgICAgfV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YXIgaXRlbXMgPSBbXSxcbiAgICAgICAgLy8gICAgIGhhbmRsZXIgPSBuZXcgR2V0UHJvcGVydHlIYW5kbGVyKHRydWUsIGl0ZW1zKSxcbiAgICAgICAgLy8gICAgIHByb3h5ID0gbmV3IFByb3h5KHRoaXMuc2NvcGUsIGhhbmRsZXIpO1xuICAgICAgICAvL1xuICAgICAgICAvLyBjb21wdXRlKHRoaXMuZXhwLCBwcm94eSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHJldHVybiBpdGVtcztcblxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbGxlY3RNZW1iZXJzOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgY29tcHV0ZSh0aGlzLmV4cCwgdGhpcy5zY29wZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuIG9wdGlvbnMubWVtYmVycztcbiAgICB9XG5cbiAgICBzdGFydChvYnNlcnZlciwgYWN0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMudXBkYXRlTWVtYmVyKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlTWVtYmVyKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5wYXJzZSgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmRpcnR5Q2hlY2spIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlnZXN0ID0gbmV3IEV4cFdhdGNoZXIoc2VsZi5zY29wZSwgaXRlbS5rZXkpO1xuICAgICAgICAgICAgICAgIHNlbGYuZGlnZXN0cy5wdXNoKGRpZ2VzdCk7XG4gICAgICAgICAgICAgICAgc2VsZi5zdGFydERpZ2VzdChkaWdlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG1lbWJlciA9IG5ldyBNZW1iZXJXYXRjaGVyKHNlbGYuc2NvcGUsIGl0ZW0udGFyZ2V0LCBpdGVtLmtleSwgaXRlbS50YXJnZXRLZXkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLm1lbWJlcnNbbWVtYmVyLmlkXSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm1lbWJlcnNbbWVtYmVyLmlkXSA9IG1lbWJlcjtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zdGFydE1lbWJlcihtZW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnREaWdlc3QoZGlnZXN0KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBkaWdlc3Quc3RhcnQoZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgIHNlbGYuYWN0aW9uLmNhbGwodGhpcywgYXJncyk7XG4gICAgICAgIH0sIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgc3RhcnRNZW1iZXIobWVtYmVyKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBtZW1iZXIuc3RhcnQoc2VsZi5vYnNlcnZlciwgZnVuY3Rpb24gKHByb3AsIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VLZXkgPSBwcm9wO1xuXG4gICAgICAgICAgICBpZiAobWVtYmVyLnRhcmdldEtleSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlS2V5ID0gbWVtYmVyLnRhcmdldEtleSArICcuJyArIHByb3A7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvckVhY2goc2VsZi5tZW1iZXJzLCBmdW5jdGlvbiAobWVtYmVyV2F0Y2hlciwga2V5KSB7XG4gICAgICAgICAgICAgICAgbWVtYmVyV2F0Y2hlci51cGRhdGUoY2hhbmdlS2V5KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBzZWxmLnVwZGF0ZU1lbWJlcigpO1xuICAgICAgICAgICAgc2VsZi5hY3Rpb24uY2FsbCh0aGlzLCBwcm9wLCBhcmdzKTtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBmb3JFYWNoKHRoaXMubWVtYmVycywgZnVuY3Rpb24gKG1lbWJlciwga2V5KSB7XG4gICAgICAgICAgICBtZW1iZXIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaWdlc3RzLmZvckVhY2goZnVuY3Rpb24gKGRpZ2VzdCkge1xuICAgICAgICAgICAgZGlnZXN0LmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLmRpZ2VzdHMgPSBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE9iamVjdE9ic2VydmVyKCk7XG4gICAgICAgIHRoaXMud2F0Y2hlcnMgPSBbXTtcbiAgICB9XG5cbiAgICB3YXRjaChvYmosIGV4cCwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIHdhdGNoZXIgPSB0aGlzLmNyZWF0ZVdhdGNoZXIob2JqLCBleHApO1xuXG4gICAgICAgIHdhdGNoZXIuc3RhcnQodGhpcy5vYnNlcnZlciwgYWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2F0Y2hlci5kZXN0cm95KCk7XG4gICAgICAgICAgICBzZWxmLnJlbW92ZVdhdGNoZXIod2F0Y2hlcik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFsaWRhdGUob2JqLCBleHAsIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICB3YXRjaGVyID0gdGhpcy5jcmVhdGVXYXRjaGVyKG9iaiwgZXhwKTtcblxuICAgICAgICB3YXRjaGVyLnN0YXJ0KHRoaXMub2JzZXJ2ZXIsIGFjdGlvbiwge1xuICAgICAgICAgICAgYmVmb3JlQ2hhbmdlZDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2F0Y2hlci5kZXN0cm95KCk7XG4gICAgICAgICAgICBzZWxmLnJlbW92ZVdhdGNoZXIod2F0Y2hlcik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY3JlYXRlV2F0Y2hlcihvYmosIGV4cCkge1xuICAgICAgICB2YXIgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKG9iaiwgZXhwKTtcblxuICAgICAgICB0aGlzLndhdGNoZXJzLnB1c2god2F0Y2hlcik7XG5cbiAgICAgICAgcmV0dXJuIHdhdGNoZXI7XG4gICAgfVxuXG4gICAgcmVtb3ZlV2F0Y2hlcih3YXRjaGVyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMud2F0Y2hlcnMuaW5kZXhPZih3YXRjaGVyKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLndhdGNoZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlQ2hhbmdlZChvYmosIHByb3AsIGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXIuZmlyZUNoYW5nZWQob2JqLCBwcm9wLCBhcmdzKTtcbiAgICB9XG5cbiAgICBmaXJlQ2hhbmdpbmcob2JqLCBwcm9wLCBhcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVyLmZpcmVDaGFuZ2luZyhvYmosIHByb3AsIGFyZ3MpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMud2F0Y2hlcnMuZm9yRWFjaChmdW5jdGlvbiAod2F0Y2hlcikge1xuICAgICAgICAgICAgd2F0Y2hlci5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLndhdGNoZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgUHJvcGVydHlPYnNlcnZlciwgT2JzZXJ2ZXIgfTsiLCJpbXBvcnQgeyBTZXRQcm9wZXJ0eUhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXInO1xyXG5cclxuT2JqZWN0LnByb3RvdHlwZS50b1Byb3h5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm94eSh0aGlzLCBuZXcgU2V0UHJvcGVydHlIYW5kbGVyKCkpO1xyXG59OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBCaW5kaW5nIH0gZnJvbSAnLi9iaW5kaW5nJztcblxuY2xhc3MgVGV4dE5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS50ZXh0LCAnI3RleHQnKTtcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gbmV3IEJpbmRpbmcoKTtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgY29tcGlsZSgpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5nLmJpbmQodGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cblxuICAgIGxpbmsoc2NvcGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuYmluZGluZy5zZXRTY29wZShzY29wZSk7XG5cbiAgICAgICAgdGhpcy5iaW5kaW5nLm9ic2VydmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmluZGluZy5kZXRlY3QoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuaHRtbEVsZW1lbnQsIHRoaXMucmVuZGVyKHRoaXMuYmluZGluZy52YWx1ZSkpO1xuICAgIH1cblxuICAgIHJlbmRlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5odG1sRWxlbWVudDtcbiAgICB9XG5cbiAgICBnZXRPdXRlclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVZhbHVlO1xuICAgIH1cblxuICAgIGdldElubmVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XG4gICAgfVxuXG4gICAgcmVtb3ZlSHRtbEVsZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmh0bWxFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZU5vZGUodGhpcy5odG1sRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJpbmRpbmcuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmJpbmRpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVGV4dE5vZGUgfTsiLCJpbXBvcnQgeyB0eXBlQ29uc3QsIGluamVjdG9yIH0gZnJvbSAnLi4vdmlldydcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudChtZXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gbWV0YS5zZWxlY3RvciB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb25zdHJ1Y3Rvcih0eXBlQ29uc3QuY29tcG9uZW50LCBzZWxlY3RvciwgdGFyZ2V0LCBtZXRhKTtcbiAgICB9O1xufSIsImltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3J1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlKG1ldGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBtZXRhLnNlbGVjdG9yIHx8IHRhcmdldC5uYW1lO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckNvbnN0cnVjdG9yKHR5cGVDb25zdC5kaXJlY3RpdmUsIHNlbGVjdG9yLCB0YXJnZXQsIG1ldGEpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgdHlwZUNvbnN0LCBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnXG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIobWV0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IG1ldGEuc2VsZWN0b3IgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyQ29uc3RydWN0b3IodHlwZUNvbnN0LmZpbHRlciwgc2VsZWN0b3IsIHRhcmdldCwgbWV0YSk7XG4gICAgfTtcbn0iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZpbHRlcic7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UnOyIsImltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3J1xuXG5leHBvcnQgZnVuY3Rpb24gc2VydmljZShtZXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gbWV0YS5zZWxlY3RvciB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb25zdHJ1Y3Rvcih0eXBlQ29uc3Quc2VydmljZSwgc2VsZWN0b3IsIHRhcmdldCwgbWV0YSk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tIFwiLi4vdmlld1wiO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tIFwiLi4vZGVjb3JhdG9yXCI7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWJpbmQtY21wLW9wdGlvbnMnXHJcbn0pXHJcbmNsYXNzIEJpbmRDbXBPcHRpb25zRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhck9wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU9wdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyT3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gXCIuLi92aWV3XCI7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gXCIuLi9kZWNvcmF0b3JcIjtcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tYmluZC1jbXAnXHJcbn0pXHJcbmNsYXNzIEJpbmRDbXBEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiRwcmlvcml0eSA9IDU7XHJcbiAgICAgICAgdGhpcy5uYW1lRGlyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydCgpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lRGlyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubmFtZURpciA9IHRoaXMuJGVsZW1lbnQuZ2V0RGlyZWN0aXZlKCduLW5hbWUnKTtcclxuICAgICAgICB0aGlzLmJpbmRDbXBPcHRpb25zRGlyID0gdGhpcy4kZWxlbWVudC5nZXREaXJlY3RpdmUoJ24tYmluZC1jbXAtb3B0aW9ucycpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5iaW5kQ21wT3B0aW9uc0RpciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5iaW5kQ21wT3B0aW9uc0Rpci52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuJGRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgY29tcG9uZW50ID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XHJcblxyXG4gICAgICAgIGlmIChjb21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLiRiaW5kaW5nLnNjb3BlLiRjcmVhdGVDaGlsZENtcChjb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm9uSW5pdCh0aGlzLnZpZXcpO1xyXG4gICAgICAgIHRoaXMudmlldy4kbW91bnQodGhpcy4kaHRtbEVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5uYW1lRGlyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lRGlyLnNldENtcCh0aGlzLnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLWJpbmQnXG59KVxuY2xhc3MgQmluZERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmJpbmQoKTtcbiAgICB9XG5cbiAgICBiaW5kKCkge1xuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tZW1iZWQnXG59KVxuY2xhc3MgRW1iZWREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ29tcGlsZShvcHRpb25zKSB7XG4gICAgICAgIHZhciBlbWJlZFRwbCA9IG9wdGlvbnMuZ2V0RW1iZWRUcGwoKTtcbiAgICAgICAgaWYgKGVtYmVkVHBsKSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LnNldElubmVyVHBsKGVtYmVkVHBsKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1oaWRlJyxcbiAgICBpbmplY3Q6IHtcbiAgICAgICAgICAgICRhbmltYXRlOiAnJGFuaW1hdGUnXG4gICAgfVxufSlcbmNsYXNzIEhpZGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSkge1xuICAgICAgICAgICAgdGhpcy4kYW5pbWF0ZS5sZWF2ZSh0aGlzLiRlbGVtZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kYW5pbWF0ZS5lbnRlcih0aGlzLiRlbGVtZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24taWYnLFxuICAgIGluamVjdDoge1xuICAgICAgICAkYW5pbWF0ZTogJyRhbmltYXRlJ1xuICAgIH1cbn0pXG5jbGFzcyBJZkRpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbi1pZicpO1xuXG4gICAgICAgIGlmICghdGhpcy4kYmluZGluZy5jb21wdXRlKCkpIHtcbiAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuJGh0bWxFbGVtZW50LCB0aGlzLmh0bWxDb21tZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kaHRtbEVsZW1lbnQucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYW5pbWF0ZS5lbnRlcih0aGlzLiRlbGVtZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHNlbGYuaHRtbENvbW1lbnQsIHNlbGYuJGh0bWxFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRodG1sRWxlbWVudC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRhbmltYXRlLmxlYXZlKHRoaXMuJGVsZW1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoc2VsZi4kaHRtbEVsZW1lbnQsIHNlbGYuaHRtbENvbW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gbnVsbDtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9iaW5kJ1xuZXhwb3J0ICogZnJvbSAnLi9lbWJlZCdcbmV4cG9ydCAqIGZyb20gJy4vaGlkZSdcbmV4cG9ydCAqIGZyb20gJy4vaWYnXG5leHBvcnQgKiBmcm9tICcuL21vZGVsJ1xuZXhwb3J0ICogZnJvbSAnLi9yZXBlYXQnXG5leHBvcnQgKiBmcm9tICcuL3Nob3cnXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlJ1xuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gnXG5leHBvcnQgKiBmcm9tICcuL3N0YXRlJ1xuZXhwb3J0ICogZnJvbSAnLi9uYW1lJ1xuZXhwb3J0ICogZnJvbSAnLi9iaW5kLWNtcCdcbmV4cG9ydCAqIGZyb20gJy4vYmluZC1jbXAtb3B0aW9ucyciLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLW1vZGVsJyxcbiAgICBpbmplY3Q6IHtcbiAgICAgICAgb3B0aW9uczogJyRtb2RlbE9wdGlvbnMnXG4gICAgfVxufSlcbmNsYXNzIE1vZGVsRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4kdmlld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy4kbW9kZWxWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuJHBhcnNlcnMgPSBbXTtcbiAgICAgICAgdGhpcy4kZm9ybWF0dGVycyA9IFtdO1xuICAgICAgICB0aGlzLiR2aWV3Q2hhbmdlTGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMuJHZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgdGhpcy4kZmVlZGJhY2sgPSAnJztcbiAgICAgICAgdGhpcy4kcHJpc3RpbmUgPSB0cnVlO1xuICAgICAgICB0aGlzLiRkaXJ0eSA9IGZhbHNlO1xuICAgICAgICB0aGlzLiR2YWxpZCA9IHRydWU7XG4gICAgICAgIHRoaXMuJGludmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuc2V0Vmlld1ZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXRNb2RlbFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzTWVzc2VuZ2VyKHRoaXMuJGNvbXBvbmVudC5jaGFuZ2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LmNoYW5nZS5vbihmdW5jdGlvbiAoZSwgYXJncykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldE1vZGVsVmFsdWUoYXJncy5uZXd2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvZW50ICcgKyB0aGlzLiRjb21wb25lbnQuJCRtZXRhLnNlbGVjdG9yICsgJ211c3QgZGVmaW5lIFtjaGFuZ2VdIGV2ZW50Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRWaWV3VmFsdWUoKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJHBhcnNlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLiRmb3JtYXR0ZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy4kdmlld0NoYW5nZUxpc3RlbmVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuJHZhbGlkYXRvcnMgPSBudWxsO1xuICAgIH1cblxuICAgIHNldFZpZXdWYWx1ZSgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuJG1vZGVsVmFsdWUgPSB0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKTtcblxuICAgICAgICB2YXIgdmlld1ZhbHVlID0gdGhpcy4kbW9kZWxWYWx1ZTtcblxuICAgICAgICB0aGlzLiR2YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGwoc2VsZiwgc2VsZi4kbW9kZWxWYWx1ZSwgc2VsZi4kdmlld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZm9ybWF0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIHZpZXdWYWx1ZSA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZpZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLiR2aWV3VmFsdWUgIT09IHZpZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy4kdmlld1ZhbHVlID0gdmlld1ZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodG1sRWxlbWVudC52YWx1ZSA9IHRoaXMuJG1vZGVsVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRjb21wb25lbnQuJHNldEF0dHIoJ3ZhbHVlJywgdGhpcy4kbW9kZWxWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUNzcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuXG4gICAgc2V0TW9kZWxWYWx1ZSh2aWV3VmFsdWUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuc2V0RGlydHkodHJ1ZSk7XG5cbiAgICAgICAgdGhpcy4kdmlld1ZhbHVlID0gdmlld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuJHZpZXdDaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwoc2VsZiwgdmlld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSB0aGlzLiR2aWV3VmFsdWU7XG5cbiAgICAgICAgdGhpcy4kcGFyc2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgICAgICAgICAgIG1vZGVsVmFsdWUgPSBwYXJzZXIuY2FsbChzZWxmLCBtb2RlbFZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuJG1vZGVsVmFsdWUgIT09IG1vZGVsVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuJG1vZGVsVmFsdWUgPSBtb2RlbFZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIHNlbGYuJG1vZGVsVmFsdWUsIHNlbGYuJHZpZXdWYWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy4kYmluZGluZy5hc3NpZ24odGhpcy4kbW9kZWxWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDc3MoKSB7XG4gICAgICAgIHZhciBlbGUgPSB0aGlzLiRodG1sRWxlbWVudCxcbiAgICAgICAgICAgIGNzcyA9IHRoaXMub3B0aW9ucy5jc3NDbGFzcztcblxuICAgICAgICBpZiAodGhpcy4kZGlydHkpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5kaXJ0eSk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MucHJpc3RpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnByaXN0aW5lKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5kaXJ0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kdmFsaWQpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy52YWxpZCk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MuaW52YWxpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MuaW52YWxpZCk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MudmFsaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU3RhdGUoKSB7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy4kaHRtbEVsZW1lbnQubmFtZTtcblxuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzY29wZSA9IHRoaXMuJGJpbmRpbmcuc2NvcGUudG9Qcm94eSgpO1xuXG4gICAgICAgIGlmIChzY29wZVtuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICBzY29wZVtuYW1lXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0YXRlID0gc2NvcGVbbmFtZV0udG9Qcm94eSgpO1xuXG4gICAgICAgIHN0YXRlLiRwcmlzdGluZSA9IHRoaXMuJHByaXN0aW5lO1xuICAgICAgICBzdGF0ZS4kZGlydHkgPSB0aGlzLiRkaXJ0eTtcbiAgICAgICAgc3RhdGUuJHZhbGlkID0gdGhpcy4kdmFsaWQ7XG4gICAgICAgIHN0YXRlLiRpbnZhbGlkID0gdGhpcy4kaW52YWxpZDtcbiAgICAgICAgc3RhdGUuJGZlZWRiYWNrID0gdGhpcy4kZmVlZGJhY2s7XG4gICAgfVxuXG4gICAgc2V0RGlydHkoZGlydHkpIHtcbiAgICAgICAgdGhpcy4kZGlydHkgPSBkaXJ0eTtcbiAgICAgICAgdGhpcy4kcHJpc3RpbmUgPSAhZGlydHk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDc3MoKTtcbiAgICB9XG5cbiAgICBzZXRWYWxpZGl0eSh2YWxpZCwgZmVlZGJhY2spIHtcbiAgICAgICAgdGhpcy4kdmFsaWQgPSB2YWxpZDtcbiAgICAgICAgdGhpcy4kaW52YWxpZCA9ICF2YWxpZDtcbiAgICAgICAgdGhpcy4kZmVlZGJhY2sgPSBmZWVkYmFjaztcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNzcygpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tbmFtZSdcclxufSlcclxuY2xhc3MgTmFtZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuJG91dHB1dCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydCgpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLiRiaW5kaW5nLnRleHQ7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5uYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwcm94eSA9IHRoaXMuJHNjb3BlLnRvUHJveHkoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHByb3h5W3RoaXMubmFtZV0gPSB0aGlzLiRjb21wb25lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwcm94eVt0aGlzLm5hbWVdID0gdGhpcy4kZWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5hbWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRzY29wZVt0aGlzLm5hbWVdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q21wKGNtcCkge1xyXG4gICAgICAgIHZhciBwcm94eSA9IHRoaXMuJHNjb3BlLnRvUHJveHkoKTtcclxuICAgICAgICBwcm94eVt0aGlzLm5hbWVdID0gY21wO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBDb21wb25lbnQgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXJlcGVhdCdcbn0pXG5jbGFzcyBSZXBlYXREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pdGVtRXhwID0gJyc7XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5kYXRhSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jbXBJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmhlYWRlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vdGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbkNvbXBpbGUoKSB7XG4gICAgICAgIHZhciBhcmcgPSB0aGlzLiRhdHRyLm5vZGVWYWx1ZTtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50O1xuICAgICAgICB2YXIgcGF0dGVybiA9IC9eKFthLXpfXStcXHcrKVxccytpblxccysoLispJC9pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGF0dGVybi5leGVjKGFyZyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ24tcmVwZWF0OiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1FeHAgPSByZXN1bHRbMV07XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSByZXN1bHRbMl07XG5cbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy4kYXR0cik7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gZWxlbWVudC5nZXRPdXRlclRwbCgpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBlbGVtZW50LmNyZWF0ZUNvbm5lY3Rpb24oJ24tcmVwZWF0JywgZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBzY29wZS4kZXZhbChzZWxmLml0ZW1zRXhwKTtcblxuICAgICAgICAgICAgc2VsZi5zY29wZSA9IHNjb3BlO1xuICAgICAgICAgICAgc2VsZi5zZXREYXRhSXRlbXMoaXRlbXMpO1xuICAgICAgICAgICAgc2VsZi5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdzdGFydDogbi1yZXBlYXQnKTtcbiAgICAgICAgICAgIHNlbGYuZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZW5kOiBuLXJlcGVhdCcpO1xuXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLmhlYWRlcik7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLmZvb3Rlcik7XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZWxlbWVudCwgY29ubmVjdGlvbik7XG4gICAgICAgIGVsZW1lbnQuZGVzdHJveSgpO1xuXG4gICAgICAgIGNvbm5lY3Rpb24ub25JbnNlcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnJlbmRlcigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbm5lY3Rpb24ub25EZXRlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBzZWxmLnNjb3BlLiRldmFsKHNlbGYuaXRlbXNFeHApO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5kYXRhSXRlbXMgIT09IGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXREYXRhSXRlbXMoaXRlbXMpO1xuICAgICAgICAgICAgICAgIHNlbGYucmVuZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNtcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkU2NvcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRTY29wZS4kZGV0ZWN0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29ubmVjdGlvbi5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLiRkZXN0cm95KCk7XG4gICAgICAgICAgICBlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5jbXBJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChjbXBJdGVtKSB7XG4gICAgICAgICAgICBjbXBJdGVtLiRkZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNtcEl0ZW1zID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZvb3RlciA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0RGF0YUl0ZW1zKHZhbHVlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY29wZS4kd2F0Y2godGhpcy5kYXRhSXRlbXMsICdsZW5ndGgnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDbXBJdGVtKGRhdGFJdGVtKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgZmlsdGVycyA9IHRoaXMuY21wSXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVtzZWxmLml0ZW1FeHBdID09PSBkYXRhSXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YXJnZXQgPSBmaWx0ZXJzWzBdO1xuXG4gICAgICAgIHRoaXMuY21wSXRlbXMgPSB0aGlzLmNtcEl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1bc2VsZi5pdGVtRXhwXSAhPT0gZGF0YUl0ZW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdmFyIG5ld0NtcEl0ZW1zID0gW107XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICAgICAgdXRpbHMuZm9yRWFjaChzZWxmLmRhdGFJdGVtcywgZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgdmFyIGNtcEl0ZW0gPSBzZWxmLmdldENtcEl0ZW0oaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChjbXBJdGVtID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjbXBJdGVtID0gbmV3IENvbXBvbmVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBzZWxmLml0ZW1UZW1wbGF0ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNtcEl0ZW1bc2VsZi5pdGVtRXhwXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgY21wSXRlbS4kaW5oZXJpdENtcChzZWxmLnNjb3BlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY21wSXRlbVsnJGluZGV4J10gPSBpbmRleDtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNtcEl0ZW0uJHJlbmRlcih0cnVlKSk7XG4gICAgICAgICAgICBuZXdDbXBJdGVtcy5wdXNoKGNtcEl0ZW0pO1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNlbGYuY21wSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2VsZi5jbXBJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXBlYXRJdGVtKSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0SXRlbS4kZGVzdHJveSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmNtcEl0ZW1zID0gbmV3Q21wSXRlbXM7XG4gICAgICAgIHV0aWxzLnJlbW92ZU5vZGVCZXR3ZWVuKHNlbGYuaGVhZGVyLCBzZWxmLmZvb3Rlcik7XG4gICAgICAgIHNlbGYuZm9vdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZyYWdtZW50LCBzZWxmLmZvb3Rlcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tc2hvdycsXG4gICAgaW5qZWN0OiB7XG4gICAgICAgICRhbmltYXRlOiAnJGFuaW1hdGUnXG4gICAgfVxufSlcbmNsYXNzIFNob3dEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSkge1xuICAgICAgICAgICAgdGhpcy4kYW5pbWF0ZS5lbnRlcih0aGlzLiRlbGVtZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kYW5pbWF0ZS5sZWF2ZSh0aGlzLiRlbGVtZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tY2hlY2tlZCdcbn0pXG5jbGFzcyBDaGVja2VkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY2hlY2tlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLWRpc2FibGVkJ1xufSlcbmNsYXNzIERpc2FibGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGlzYWJsZWQnKTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jaGVja2VkJ1xuZXhwb3J0ICogZnJvbSAnLi9kaXNhYmxlZCdcbmV4cG9ydCAqIGZyb20gJy4vcmVhZG9ubHknXG5leHBvcnQgKiBmcm9tICcuL3NlbGVjdGVkJyIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tcmVhZG9ubHknXG59KVxuY2xhc3MgUmVhZG9ubHlEaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdyZWFkb25seScpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXNlbGVjdGVkJ1xufSlcbmNsYXNzIFNlbGVjdGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignc2VsZWN0ZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5cbmNsYXNzIFN0YXRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihhdHRyTmFtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmF0dHJOYW1lID0gYXR0ck5hbWU7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybSgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnBlcmZvcm0oKTtcbiAgICB9XG5cbiAgICBwZXJmb3JtKCkge1xuICAgICAgICBpZiAodGhpcy4kYmluZGluZy5jb21wdXRlKCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy4kaHRtbEVsZW1lbnQuaGFzQXR0cmlidXRlKHRoaXMuYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMuYXR0ck5hbWUsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRodG1sRWxlbWVudC5oYXNBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0iLCJpbXBvcnQgeyBDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vY2xhc3MnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1jbGFzcy1ldmVuJ1xyXG59KVxyXG5jbGFzcyBDbGFzc0V2ZW5EaXJlY3RpdmUgZXh0ZW5kcyBDbGFzc0RpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlLiRpbmRleCAmIDEgPT09IDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vY2xhc3MnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1jbGFzcy1vZGQnXHJcbn0pXHJcbmNsYXNzIENsYXNzT2RkRGlyZWN0aXZlIGV4dGVuZHMgQ2xhc3NEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZS4kaW5kZXggJiAxID09PSAwO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbGl0eSc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1jbGFzcydcclxufSlcclxuY2xhc3MgQ2xhc3NEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbENsYXNzTGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KCkge1xyXG4gICAgICAgIHRoaXMucGFyc2VDbGFzcygpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2hBcnJheShhcnIsIGFjdGlvbikge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy51bndhdGNoQXJyYXkoKTtcclxuICAgICAgICB0aGlzLiRzY29wZS4kd2F0Y2goYXJyLCAnbGVuZ3RoJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVud2F0Y2hBcnJheSgpIHtcclxuICAgICAgICBpZiAodGhpcy51bndhdGNoICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy51bndhdGNoLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnVud2F0Y2hBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRleHRUb0FycmF5KHRleHQpIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5zcGxpdCgnICcpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS50cmltKCkubGVuZ3RoID4gMDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZUNsYXNzKCkge1xyXG4gICAgICAgIHZhciBjbGFzc1RleHQgPSB0aGlzLiRnZXRBdHRyVmFsdWUoJ2NsYXNzJyk7XHJcblxyXG4gICAgICAgIGlmICghY2xhc3NUZXh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbENsYXNzTGlzdCA9IHRoaXMudGV4dFRvQXJyYXkoY2xhc3NUZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDbGFzc0xpc3QoYXJyKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBzZWxmLiRodG1sRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbENsYXNzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHNlbGYuJGh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDbGFzcygpIHtcclxuICAgICAgICBpZiAodGhpcy5za2lwKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICAgICBuZXdBcnIgPSBbXSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3QXJyID0gdGhpcy50ZXh0VG9BcnJheSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIG5ld0FyciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaEFycmF5KHZhbHVlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRDbGFzc0xpc3QodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBvZiBuLWNsYXNzIHNob3VsZCBiZSBzdHJpbmcgb3IgYXJyYXknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRDbGFzc0xpc3QobmV3QXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQ2xhc3NEaXJlY3RpdmUgfVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL2NsYXNzJztcclxuZXhwb3J0ICogZnJvbSAnLi9jbGFzcy1ldmVuJztcclxuZXhwb3J0ICogZnJvbSAnLi9jbGFzcy1vZGQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZS1ldmVuJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZS1vZGQnOyIsImltcG9ydCB7IFN0eWxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLXN0eWxlLWV2ZW4nXHJcbn0pXHJcbmNsYXNzIFN0eWxlRXZlbkRpcmVjdGl2ZSBleHRlbmRzIFN0eWxlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuJGluZGV4ICYgMSA9PT0gMTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0eWxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLXN0eWxlLW9kZCdcclxufSlcclxuY2xhc3MgU3R5bGVPZGREaXJlY3RpdmUgZXh0ZW5kcyBTdHlsZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlLiRpbmRleCAmIDEgPT09IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlsaXR5JztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXN0eWxlJ1xufSlcbmNsYXNzIFN0eWxlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbml0aWFsU3R5bGUgPSB7fTtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdGhpcy5wYXJzZVN0eWxlKCk7XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdHlsZSgpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51bndhdGNoT2JqKCk7XG4gICAgfVxuXG4gICAgd2F0Y2hPYmoob2JqLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudW53YXRjaE9iaigpO1xuICAgICAgICB0aGlzLiRzY29wZS4kd2F0Y2gob2JqLCAnKicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVud2F0Y2hPYmooKSB7XG4gICAgICAgIGlmICh0aGlzLnVud2F0Y2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51bndhdGNoLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VTdHlsZSgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy4kZ2V0QXR0clZhbHVlKCdzdHlsZScpO1xuXG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0eWxlID0gdGhpcy50ZXh0VG9PYmplY3QodmFsdWUpO1xuICAgIH1cblxuICAgIHRleHRUb09iamVjdCh0ZXh0KSB7XG4gICAgICAgIHZhciBvYmogPSB7fSxcbiAgICAgICAgICAgIGxpc3QgPSB0ZXh0LnNwbGl0KCc7JykuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBzdWJJdGVtcyA9IGl0ZW0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgIHZhciBuYW1lID0gc3ViSXRlbXNbMF07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzdWJJdGVtc1sxXTtcbiAgICAgICAgICAgIG9ialtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGFwcGx5U3R5bGUob2JqKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy4kaHRtbEVsZW1lbnQ7XG5cbiAgICAgICAgLy8gY2xlYW4gdXAgc3R5bGVcbiAgICAgICAgZWxlbWVudC5zdHlsZSA9ICcnO1xuXG4gICAgICAgIC8vIHNldCBuZXcgc3R5bGVcbiAgICAgICAgdXRpbHMuZm9yRWFjaCh0aGlzLmluaXRpYWxTdHlsZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdXRpbHMuZm9yRWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0U3R5bGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNraXAoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBuZXdTdHlsZSA9IHt9O1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKTtcblxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG5ld1N0eWxlID0gdGhpcy50ZXh0VG9PYmplY3QodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbmV3U3R5bGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLndhdGNoT2JqKHZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYXBwbHlTdHlsZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBvZiBuLXN0eWxlIHNob3VsZCBiZSBzdHJpbmcgb3Igb2JqZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFwcGx5U3R5bGUobmV3U3R5bGUpO1xuICAgIH1cblxuICAgIHNraXAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFN0eWxlRGlyZWN0aXZlIH1cbiIsImV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJ1xuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gtZGVmYXVsdCdcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoLXdoZW4nIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbGl0eSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zd2l0Y2gtZGVmYXVsdCdcbn0pXG5jbGFzcyBTd2l0Y2hEZWZhdWx0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc01hdGNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnN3aXRjaFdoZW5EaXJzID0gW107XG4gICAgfVxuXG4gICAgaW5pdFN3aXRjaFdoZW5EaXJzKCkge1xuICAgICAgICB2YXIgdkVsZSA9IHRoaXMuJGVsZW1lbnQ7XG5cbiAgICAgICAgd2hpbGUgKHZFbGUucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciB3aGVuRGlyID0gdkVsZS5wcmV2aW91c1NpYmxpbmcuZ2V0RGlyZWN0aXZlKCduLXN3aXRjaC13aGVuJyk7XG5cbiAgICAgICAgICAgIGlmICh3aGVuRGlyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFdoZW5EaXJzLnB1c2god2hlbkRpcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZFbGUgPSB2RWxlLnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hdGNoKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuc3dpdGNoV2hlbkRpcnMuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaXNNYXRjaDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmluaXRTd2l0Y2hXaGVuRGlycygpO1xuICAgICAgICB0aGlzLmlzTWF0Y2ggPSB0aGlzLm1hdGNoKCk7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLXN3aXRjaC1kZWZhdWx0Jyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzTWF0Y2gpIHtcbiAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuJGh0bWxFbGVtZW50LCB0aGlzLmh0bWxDb21tZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoV2hlbkRpcnMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5pc01hdGNoQ2hhbmdlZC5vbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5pc01hdGNoLCBuZXdWYWx1ZSA9IHRoaXMubWF0Y2goKTtcblxuICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmlzTWF0Y2ggPSBuZXdWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRodG1sRWxlbWVudC5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy5odG1sQ29tbWVudCwgdGhpcy4kaHRtbEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRodG1sRWxlbWVudC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy4kaHRtbEVsZW1lbnQsIHRoaXMuaHRtbENvbW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3dpdGNoV2hlbkRpcnMgPSBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlsaXR5JztcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uLy4uL3V0aWxpdHknO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tc3dpdGNoLXdoZW4nXG59KVxuY2xhc3MgU3dpdGNoV2hlbkRpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zd2l0Y2hEaXIgPSBudWxsO1xuICAgICAgICB0aGlzLmlzTWF0Y2hDaGFuZ2VkID0gbmV3IE1lc3NlbmdlcigpO1xuICAgIH1cblxuICAgIGluaXRTd2l0Y2hEaXIoKSB7XG4gICAgICAgIHZhciBzd2l0Y2hEaXIgPSB0aGlzLiRlbGVtZW50LnBhcmVudE5vZGUuZ2V0RGlyZWN0aXZlKCduLXN3aXRjaCcpO1xuXG4gICAgICAgIGlmIChzd2l0Y2hEaXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlIG4tc3dpdGNoIGRpcmVjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hEaXIgPSBzd2l0Y2hEaXI7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmluaXRTd2l0Y2hEaXIoKTtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ24tc3dpdGNoLXdoZW4nKTtcbiAgICAgICAgdGhpcy5pc01hdGNoID0gKHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpID09PSB0aGlzLnN3aXRjaERpci52YWx1ZSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzTWF0Y2gpIHtcbiAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuJGh0bWxFbGVtZW50LCB0aGlzLmh0bWxDb21tZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoRGlyLnZhbHVlQ2hhbmdlZC5vbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuaXNNYXRjaCxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gKHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpID09PSB0aGlzLnN3aXRjaERpci52YWx1ZSk7XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pc01hdGNoID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLmlzTWF0Y2hDaGFuZ2VkLmZpcmUoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRodG1sRWxlbWVudC5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy5odG1sQ29tbWVudCwgdGhpcy4kaHRtbEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRodG1sRWxlbWVudC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy4kaHRtbEVsZW1lbnQsIHRoaXMuaHRtbENvbW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3dpdGNoRGlyID0gbnVsbDtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbGl0eSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zd2l0Y2gnXG59KVxuY2xhc3MgU3dpdGNoRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkID0gbmV3IE1lc3NlbmdlcigpO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xuXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkLmZpcmUoe1xuICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkZWNvcmF0b3IgZnJvbSAnLi9kZWNvcmF0b3InO1xuXG5leHBvcnQgeyBkZWNvcmF0b3IgfVxuZXhwb3J0ICogZnJvbSAnLi91dGlsaXR5JztcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XG5leHBvcnQgKiBmcm9tICcuL3BhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9hbmltYXRpb24nOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgTGV4ZXIgfSBmcm9tICcuL2xleGVyJztcblxudXRpbHMuaW5oZXJpdChIdG1sTGV4ZXIsIExleGVyKTtcbmZ1bmN0aW9uIEh0bWxMZXhlcihvcHRpb25zKSB7XG4gICAgSHRtbExleGVyLnN1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG59XG5cbkh0bWxMZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XG4gICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyB8fFxuICAgICAgICBjaCA9PT0gJ0AnIHx8IGNoID09PSAnOicgfHwgY2ggPT09ICcqJyk7XG59O1xuXG5IdG1sTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gsIGNwKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLScgfHwgY2ggPT09ICcuJztcbn07XG5cbkh0bWxMZXhlci5wcm90b3R5cGUuZXhwZWN0U3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHZhciBudW0gPSBzdHIubGVuZ3RoO1xuICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8PSB0aGlzLnRleHQubGVuZ3RoKSA/IChzdHIgPT09IHRoaXMudGV4dC5zdWJzdHIodGhpcy5pbmRleCwgbnVtKSkgOiBmYWxzZTtcbn07XG5cbi8vIGh0bWwgY29tbWVudCBcIjwhLS1jb21tZW50LS0+XCJcbkh0bWxMZXhlci5wcm90b3R5cGUucmVhZENvbW1lbnQgPSBmdW5jdGlvbiAoYmVnaW4sIGVuZCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XG4gICAgdmFyIHN0cmluZyA9ICcnO1xuICAgIHZhciByYXdTdHJpbmcgPSBiZWdpbjtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xuICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoZW5kKSkge1xuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGVuZDtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgY29tbWVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgfVxuICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIGNvbW1lbnQnLCBzdGFydCk7XG59O1xuXG4vLyBodG1sIHRleHRcbkh0bWxMZXhlci5wcm90b3R5cGUucmVhZFRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgaWYgKChjaCA9PT0gJzwnICYmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikgfHwgY2gyID09PSAnLycpKSB8fCB0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICB0ZXh0VGFnOiB0cnVlXG4gICAgfSk7XG59O1xuXG4vLyBodG1sIHRhZ1xuSHRtbExleGVyLnByb3RvdHlwZS5yZWFkVGFnID0gZnVuY3Rpb24gKGJlZ2luLCBlbmQsIGNsb3NpbmcsIGRvY3R5cGUpIHtcbiAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGJlZ2luLCB0YWc6IHRydWUsIGNsb3Npbmc6IGNsb3NpbmcsIGJlZ2luOiB0cnVlLCBkb2N0eXBlOiBkb2N0eXBlIH0pO1xuICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xuICAgIHRoaXMucmVhZElkZW50KCk7XG5cbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcblxuICAgICAgICBpZiAoIWNsb3NpbmcpIHtcbiAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIHZhciBzdHIgPSBjaCArIGNoMjtcbiAgICAgICAgICAgIGlmIChzdHIgPT09ICcvJyArIGVuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogc3RyLCB0YWc6IHRydWUsIGNsb3Npbmc6IHRydWUsIGVuZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHN0ci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2ggPT09IGVuZCkge1xuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICAgICAgdGV4dDogZW5kLFxuICAgICAgICAgICAgICAgIHRhZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbG9zaW5nOiAhIWRvY3R5cGUgPyB0cnVlIDogY2xvc2luZyxcbiAgICAgICAgICAgICAgICBlbmQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnPScpIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogJz0nLCBlcXVhbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5IdG1sTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgdmFyIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICB2YXIgY2gzID0gdGhpcy5wZWVrKDIpO1xuICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkQ29tbWVudCgnPCEtLScsICctLT4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJzwnICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8JywgJz4nLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwvJykgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDMpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwvJywgJz4nLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCFET0NUWVBFJykpIHtcbiAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwhJywgJz4nLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignRE9DVFlQRSBpcyBub3QgYWxsb3dlZCcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVhZFRleHQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG59O1xuXG5leHBvcnQgeyBIdG1sTGV4ZXIgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7IERvY3VtZW50RnJhZ21lbnROb2RlLCBDb21tZW50Tm9kZSwgVGV4dE5vZGUsIERvY3VtZW50VHlwZU5vZGUsIEVsZW1lbnROb2RlLCBBdHRyTm9kZSB9IGZyb20gJy4uL2NvcmUnO1xuXG51dGlscy5pbmhlcml0KEh0bWxQYXJzZXIsIFBhcnNlcik7XG5mdW5jdGlvbiBIdG1sUGFyc2VyKGxleGVyLCBvcHRpb25zKSB7XG4gICAgSHRtbFBhcnNlci5zdXBlci5jYWxsKHRoaXMsIGxleGVyLCBvcHRpb25zKTtcbn1cblxuSHRtbFBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgIHZhciBmYXJnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50Tm9kZSgpO1xuICAgIHZhciBkb2N0eXBlLCBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLmRvY3R5cGUpIHtcbiAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdHlwZSA9IHRoaXMuZG9jdHlwZSgpO1xuICAgICAgICAgICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKGRvY3R5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBvbmx5IGFsbG93IG9uZVwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBpcyBub3QgYWxsb3dlZFwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xuICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgQ29tbWVudE5vZGUoKTtcbiAgICAgICAgICAgIGNvbW1lbnQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGZhcmdtZW50LiRwdXNoQ2hpbGQoY29tbWVudCk7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBUZXh0Tm9kZSgpO1xuICAgICAgICAgICAgdGV4dC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZCh0ZXh0KTtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xuICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZCh0aGlzLmVsZW1lbnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJpbXBvc3NpYmxlXCIsIHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZhcmdtZW50LiRidWlsZFNpYmxpbmcoKTtcblxuICAgIHJldHVybiBmYXJnbWVudC5jaGlsZE5vZGVzO1xufTtcblxuSHRtbFBhcnNlci5wcm90b3R5cGUuZG9jdHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm5leHQoKTtcbiAgICB2YXIgZG9jVHlwZSA9IG5ldyBEb2N1bWVudFR5cGVOb2RlKCk7XG4gICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICBkb2NUeXBlLm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgIH1cblxuICAgIHRoaXMuYXR0cnMoZG9jVHlwZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICBkb2NUeXBlLmNoaWxkTm9kZXMucHVzaChhdHRyKTtcbiAgICB9KTtcblxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jVHlwZTtcbn07XG5cbkh0bWxQYXJzZXIucHJvdG90eXBlLmVsZW1lbnQgPSBmdW5jdGlvbiAocCkge1xuICAgIHRoaXMubmV4dCgpO1xuICAgIHZhciBlbGUgPSBuZXcgRWxlbWVudE5vZGUoKTtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgIGVsZS5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICBlbGUuJHB1c2hBdHRyaWJ1dGUoYXR0cik7XG4gICAgfSk7XG5cbiAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIGVsZS5zZWxmQ2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBlbGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudHMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGVsZS4kcHVzaENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgIH1cblxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbiAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gdG9rZW4udGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZTtcbn07XG5cbkh0bWxQYXJzZXIucHJvdG90eXBlLmNoaWxkRWxlbWVudHMgPSBmdW5jdGlvbiAocCkge1xuICAgIHZhciBlbGVzID0gW107XG5cbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IENvbW1lbnROb2RlKCk7XG4gICAgICAgICAgICBjb21tZW50Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBlbGVzLnB1c2goY29tbWVudCk7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBUZXh0Tm9kZSgpO1xuICAgICAgICAgICAgdGV4dC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgZWxlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XG4gICAgICAgICAgICBlbGVzLnB1c2godGhpcy5lbGVtZW50KHApKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlcztcbn07XG5cbkh0bWxQYXJzZXIucHJvdG90eXBlLmF0dHJzID0gZnVuY3Rpb24gKHApIHtcbiAgICB2YXIgYXR0cnMgPSBbXTtcblxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhdHRyID0gbmV3IEF0dHJOb2RlKCk7XG5cbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGF0dHIubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgYXR0ci5vcmlnaW4gPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgaWYgKHRva2VuLmVxdWFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uY29uc3RhbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5ub2RlVmFsdWUgPSB0b2tlbi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGF0dHJzLnB1c2goYXR0cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJzO1xufTtcblxuSHRtbFBhcnNlci5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG4gICAgfVxuICAgIHJldHVybiB7fTtcbn07XG5cbkh0bWxQYXJzZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbmRleCsrO1xufTtcblxuZXhwb3J0IHsgSHRtbFBhcnNlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgTGV4ZXIgfSBmcm9tICcuL2xleGVyJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7IEh0bWxMZXhlciB9IGZyb20gJy4vaHRtbC1sZXhlcic7XG5pbXBvcnQgeyBIdG1sUGFyc2VyIH0gZnJvbSAnLi9odG1sLXBhcnNlcic7XG5cbnZhciBwYXJzZU9wdGlvbnMgPSB7XG4gICAgaXNJZGVudGlmaWVyQ29udGludWU6IGZhbHNlLFxuICAgIGlzSWRlbnRpZmllclN0YXJ0OiBmYWxzZSxcbiAgICBsaXRlcmFsczoge1xuICAgICAgICBmYWxzZTogZmFsc2UsXG4gICAgICAgIG51bGw6IG51bGwsXG4gICAgICAgIHRydWU6IHRydWUsXG4gICAgICAgIHVuZGVmaW5lZDogdW5kZWZpbmVkXG4gICAgfVxufTtcblxuZnVuY3Rpb24gcGFyc2UoaHRtbCkge1xuICAgIHZhciBsZXhlciA9IG5ldyBIdG1sTGV4ZXIocGFyc2VPcHRpb25zKTtcbiAgICB2YXIgcGFyc2VyID0gbmV3IEh0bWxQYXJzZXIobGV4ZXIsIHBhcnNlT3B0aW9ucyk7XG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZShodG1sKTtcbn1cblxuZnVuY3Rpb24gY29tcGlsZShodG1sLCBvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgZ2V0RW1iZWRUcGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbnNDb21wb25lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlQ29tcG9uZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbnNEaXJlY3RpdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlRGlyZWN0aXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldHRpbmdzID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIG9wdGlvbnMpLFxuICAgICAgICBhc3ROb2RlcyA9IHBhcnNlKGh0bWwpO1xuXG4gICAgYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoYXN0Tm9kZSkge1xuICAgICAgICBhc3ROb2RlLmNvbXBpbGUoc2V0dGluZ3MpO1xuICAgIH0pO1xuICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcbiAgICAgICAgYXN0Tm9kZS5ub3RpZnlDb21waWxlZChzZXR0aW5ncyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICBzY29wZS4kJGNoaWxkRWxlbWVudHMgPSBhc3ROb2RlcztcblxuICAgICAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChhc3ROb2RlLmxpbmsoc2NvcGUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcbiAgICAgICAgICAgIGFzdE5vZGUubm90aWZ5TGlua2VkKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjb21wdXRlKGV4cCwgc2NvcGUsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVGaWx0ZXIobmFtZSk7XG4gICAgfTtcbiAgICBpZiAob3B0aW9ucy5jb2xsZWN0TWVtYmVycykge1xuICAgICAgICBvcHRpb25zLm1lbWJlcnMgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRXhwKGV4cCkuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRXhwKGV4cCkge1xuICAgIGlmIChleHAgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXhwID0gZXhwLnRyaW0oKTtcblxuICAgIGlmIChleHAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHAgPSBleHAucmVwbGFjZSgnJmd0OycsICc+JykucmVwbGFjZSgnJmx0OycsICc8Jyk7XG5cbiAgICB2YXIgbGV4ZXIgPSBuZXcgTGV4ZXIocGFyc2VPcHRpb25zKTtcbiAgICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcihsZXhlciwgcGFyc2VPcHRpb25zKTtcblxuICAgIHJldHVybiBwYXJzZXIucGFyc2UoZXhwKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VBc3NpZ25tZW50KGV4cCwgc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgYXN0ID0gcGFyc2VFeHAoZXhwKTtcbiAgICB2YXIgbWVtYmVyRXhwID0gYXN0LmdldE1lbWJlckV4cHJlc3Npb24oKTtcblxuICAgIGlmIChtZW1iZXJFeHAgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXhwICsgJ2lzIG5vdCB2YWxpZCBtZW1iZXIgZXhwcmVzc2lvbicpO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgb3B0aW9ucy5jcmVhdGVGaWx0ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlRmlsdGVyKG5hbWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvYmo6IG1lbWJlckV4cC5vYmplY3QuY29tcHV0ZShzY29wZSwgb3B0aW9ucywge30sIHNjb3BlKSxcbiAgICAgICAgcHJvcDogbWVtYmVyRXhwLnByb3BlcnR5LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMsIHsgcHJvcGVydHlLZXk6IHRydWUgfSwgc2NvcGUpXG4gICAgfVxufVxuXG5leHBvcnQgeyBjb21waWxlLCBjb21wdXRlLCBwYXJzZSwgcGFyc2VFeHAsIHBhcnNlQXNzaWdubWVudCB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuXG52YXIgT1BFUkFUT1JTID0ge307XG52YXIgb3BlcmF0b3JUZXh0ID0gJysgLSAqIC8gJSA9PT0gIT09ID09ICE9IDwgPiA8PSA+PSAmJiB8fCAhID0gfCc7XG52YXIgRVNDQVBFID0geyAnbic6ICdcXG4nLCAnZic6ICdcXGYnLCAncic6ICdcXHInLCAndCc6ICdcXHQnLCAndic6ICdcXHYnLCAnXFwnJzogJ1xcJycsICdcIic6ICdcIicgfTtcblxub3BlcmF0b3JUZXh0LnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICBPUEVSQVRPUlNbb3BlcmF0b3JdID0gdHJ1ZTtcbn0pO1xuXG5mdW5jdGlvbiBMZXhlcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn1cblxuTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICcuJyAmJiB0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkTnVtYmVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyhjaCwgJygpe31bXS4sOzo/JykpIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogY2ggfSk7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgY2gyID0gY2ggKyB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIHZhciBjaDMgPSBjaDIgKyB0aGlzLnBlZWsoMik7XG4gICAgICAgICAgICB2YXIgb3AxID0gT1BFUkFUT1JTW2NoXTtcbiAgICAgICAgICAgIHZhciBvcDIgPSBPUEVSQVRPUlNbY2gyXTtcbiAgICAgICAgICAgIHZhciBvcDMgPSBPUEVSQVRPUlNbY2gzXTtcbiAgICAgICAgICAgIGlmIChvcDEgfHwgb3AyIHx8IG9wMykge1xuICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IG9wMyA/IGNoMyA6IChvcDIgPyBjaDIgOiBjaCk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiB0b2tlbiwgb3BlcmF0b3I6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSB0b2tlbi5sZW5ndGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmlzID0gZnVuY3Rpb24gKGNoLCBjaGFycykge1xuICAgIHJldHVybiBjaGFycy5pbmRleE9mKGNoKSAhPT0gLTE7XG59O1xuXG5MZXhlci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uIChpKSB7XG4gICAgdmFyIG51bSA9IGkgfHwgMTtcbiAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPCB0aGlzLnRleHQubGVuZ3RoKSA/IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCArIG51bSkgOiBmYWxzZTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc051bWJlciA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiAoJzAnIDw9IGNoICYmIGNoIDw9ICc5JykgJiYgdHlwZW9mIGNoID09PSAnc3RyaW5nJztcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc1doaXRlc3BhY2UgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICAvLyBJRSB0cmVhdHMgbm9uLWJyZWFraW5nIHNwYWNlIGFzIFxcdTAwQTBcbiAgICByZXR1cm4gKGNoID09PSAnICcgfHwgY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFx0JyB8fFxuICAgICAgICBjaCA9PT0gJ1xcbicgfHwgY2ggPT09ICdcXHYnIHx8IGNoID09PSAnXFx1MDBBMCcpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmlzSWRlbnRpZmllclN0YXJ0ID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydCA/XG4gICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydChjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcbiAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0ID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XG4gICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcbiAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnKTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc0lkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUgP1xuICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XG4gICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCwgY3ApIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuY29kZVBvaW50QXQgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICBpZiAoY2gubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBjaC5jaGFyQ29kZUF0KDApO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgIHJldHVybiAoY2guY2hhckNvZGVBdCgwKSA8PCAxMCkgKyBjaC5jaGFyQ29kZUF0KDEpIC0gMHgzNUZEQzAwO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnBlZWtNdWx0aWNoYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICB2YXIgcGVlayA9IHRoaXMucGVlaygpO1xuICAgIGlmICghcGVlaykge1xuICAgICAgICByZXR1cm4gY2g7XG4gICAgfVxuICAgIHZhciBjcDEgPSBjaC5jaGFyQ29kZUF0KDApO1xuICAgIHZhciBjcDIgPSBwZWVrLmNoYXJDb2RlQXQoMCk7XG4gICAgaWYgKGNwMSA+PSAweEQ4MDAgJiYgY3AxIDw9IDB4REJGRiAmJiBjcDIgPj0gMHhEQzAwICYmIGNwMiA8PSAweERGRkYpIHtcbiAgICAgICAgcmV0dXJuIGNoICsgcGVlaztcbiAgICB9XG4gICAgcmV0dXJuIGNoO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmlzRXhwT3BlcmF0b3IgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICByZXR1cm4gKGNoID09PSAnLScgfHwgY2ggPT09ICcrJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUudGhyb3dFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgc3RhcnQsIGVuZCkge1xuICAgIGVuZCA9IGVuZCB8fCB0aGlzLmluZGV4O1xuICAgIHZhciBjb2xTdHIgPSAodXRpbHMuaXNEZWZpbmVkKHN0YXJ0KSA/ICdzICcgKyBzdGFydCArICctJyArIHRoaXMuaW5kZXggKyAnIFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyhzdGFydCwgZW5kKSArICddJyA6ICcgJyArIGVuZCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZXhlciBFcnJvcjogJyArIGVycm9yICsgJyBhdCBjb2x1bW4nICsgY29sU3RyICsgJyBpbiBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10uJyk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUucmVhZE51bWJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbnVtYmVyID0gJyc7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdXRpbHMubG93ZXJjYXNlKHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCkpO1xuICAgICAgICBpZiAoY2ggPT09ICcuJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSkge1xuICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBlZWtDaCA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgaWYgKGNoID09PSAnZScgJiYgdGhpcy5pc0V4cE9wZXJhdG9yKHBlZWtDaCkpIHtcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcbiAgICAgICAgICAgICAgICBwZWVrQ2ggJiYgdGhpcy5pc051bWJlcihwZWVrQ2gpICYmXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICghcGVla0NoIHx8ICF0aGlzLmlzTnVtYmVyKHBlZWtDaCkpICYmXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCBleHBvbmVudCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgfVxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgIHRleHQ6IG51bWJlcixcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIHZhbHVlOiBOdW1iZXIobnVtYmVyKVxuICAgIH0pO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnJlYWRJZGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIHRoaXMuaW5kZXggKz0gdGhpcy5wZWVrTXVsdGljaGFyKCkubGVuZ3RoO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnBlZWtNdWx0aWNoYXIoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCArPSBjaC5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgIHRleHQ6IHRoaXMudGV4dC5zbGljZShzdGFydCwgdGhpcy5pbmRleCksXG4gICAgICAgIGlkZW50aWZpZXI6IHRydWVcbiAgICB9KTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nID0gZnVuY3Rpb24gKHF1b3RlKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB0aGlzLmluZGV4Kys7XG4gICAgdmFyIHN0cmluZyA9ICcnO1xuICAgIHZhciByYXdTdHJpbmcgPSBxdW90ZTtcbiAgICB2YXIgZXNjYXBlID0gZmFsc2U7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHJhd1N0cmluZyArPSBjaDtcbiAgICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICAgICAgaWYgKGNoID09PSAndScpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGV4ID0gdGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDUpO1xuICAgICAgICAgICAgICAgIGlmICghaGV4Lm1hdGNoKC9bXFxkYS1mXXs0fS9pKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1JyArIGhleCArICddJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gNDtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXgsIDE2KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByZXAgPSBFU0NBUEVbY2hdO1xuICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZyArIChyZXAgfHwgY2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXFxcJykge1xuICAgICAgICAgICAgZXNjYXBlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gcXVvdGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbiAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBxdW90ZScsIHN0YXJ0KTtcbn07XG5cbmV4cG9ydCB7IExleGVyIH07IiwiY2xhc3MgTnVsbE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE51bGxPYmplY3QgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7aXNGaWx0ZXJ9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHtOdWxsT2JqZWN0fSBmcm9tICcuL251bGwtb2JqZWN0JztcblxudmFyIEFTVCA9IHt9O1xuQVNULlByb2dyYW0gPSAnUHJvZ3JhbSc7XG5BU1QuRXhwcmVzc2lvblN0YXRlbWVudCA9ICdFeHByZXNzaW9uU3RhdGVtZW50JztcbkFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbiA9ICdBc3NpZ25tZW50RXhwcmVzc2lvbic7XG5BU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uID0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbic7XG5BU1QuTG9naWNhbEV4cHJlc3Npb24gPSAnTG9naWNhbEV4cHJlc3Npb24nO1xuQVNULkJpbmFyeUV4cHJlc3Npb24gPSAnQmluYXJ5RXhwcmVzc2lvbic7XG5BU1QuVW5hcnlFeHByZXNzaW9uID0gJ1VuYXJ5RXhwcmVzc2lvbic7XG5BU1QuQ2FsbEV4cHJlc3Npb24gPSAnQ2FsbEV4cHJlc3Npb24nO1xuQVNULk1lbWJlckV4cHJlc3Npb24gPSAnTWVtYmVyRXhwcmVzc2lvbic7XG5BU1QuSWRlbnRpZmllciA9ICdJZGVudGlmaWVyJztcbkFTVC5MaXRlcmFsID0gJ0xpdGVyYWwnO1xuQVNULkFycmF5RXhwcmVzc2lvbiA9ICdBcnJheUV4cHJlc3Npb24nO1xuQVNULlByb3BlcnR5ID0gJ1Byb3BlcnR5JztcbkFTVC5PYmplY3RFeHByZXNzaW9uID0gJ09iamVjdEV4cHJlc3Npb24nO1xuXG5mdW5jdGlvbiBBc3ROb2RlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xufVxuXG5Bc3ROb2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbn07XG5cbkFzdE5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGNvbnRleHQpO1xuICAgIH0pO1xufTtcblxuLy8gaGFzIGNvbmRpdGlvbiBvciBjYWxsIGV4cHJlc3Npb25cbkFzdE5vZGUucHJvdG90eXBlLmhhc0NDID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLmhhc0NDKCk7XG4gICAgfSk7XG59O1xuXG51dGlscy5pbmhlcml0KFByb2dyYW1Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIFByb2dyYW1Ob2RlKCkge1xuICAgIFByb2dyYW1Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlByb2dyYW0pO1xufVxuXG5Qcm9ncmFtTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLmNoaWxkTm9kZXNbMF0uY29tcHV0ZShzY29wZSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgTnVsbE9iamVjdCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuUHJvZ3JhbU5vZGUucHJvdG90eXBlLmdldE1lbWJlckV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1swXS5nZXRNZW1iZXJFeHByZXNzaW9uKCk7XG59O1xuXG51dGlscy5pbmhlcml0KEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCkge1xuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQpO1xufVxuXG5FeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0uY29tcHV0ZShzY29wZSwgb3B0aW9ucyB8fCB7fSwgY29udGV4dCk7XG59O1xuXG5FeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5wcm90b3R5cGUuZ2V0TWVtYmVyRXhwcmVzc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG5cbiAgICBpZihjaGlsZCBpbnN0YW5jZW9mIE1lbWJlckV4cHJlc3Npb25Ob2RlKXtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTtcblxudXRpbHMuaW5oZXJpdChBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKGxlZnQsIHJpZ2h0LCBvcGVyYXRvcikge1xuICAgIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbik7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xufVxuXG5Bc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5sZWZ0LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMsIHsgYXNzaWdubWVudExlZnQ6IHRydWUgfSk7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5yaWdodC5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcbiAgICB0YXJnZXQub2JqW3RhcmdldC5wcm9wXSA9IHZhbHVlO1xufTtcblxudXRpbHMuaW5oZXJpdChDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUodGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KSB7XG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24pO1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbn1cblxuQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLnRlc3QuY29tcHV0ZShzY29wZSwgb3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWx0ZXJuYXRlLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xufTtcblxuLy8gaGFzIGNvbmRpdGlvbiBvciBjYWxsIGV4cHJlc3Npb25cbkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmhhc0NDID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0cnVlO1xufTtcblxudXRpbHMuaW5oZXJpdChMb2dpY2FsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gTG9naWNhbEV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgIExvZ2ljYWxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbik7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xufVxuXG5Mb2dpY2FsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmxlZnQuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG4gICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLnJpZ2h0LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuXG4gICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJyYmJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3x8JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnV0aWxzLmluaGVyaXQoQmluYXJ5RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gQmluYXJ5RXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgQmluYXJ5RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQmluYXJ5RXhwcmVzc2lvbik7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xufVxuXG5CaW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQ7XG4gICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMubGVmdC5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcbiAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMucmlnaHQuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG5cbiAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSArIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICogcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAvIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDwgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDw9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID49IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPT0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnIT0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPT09JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICchPT0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnV0aWxzLmluaGVyaXQoVW5hcnlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBVbmFyeUV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBhcmcpIHtcbiAgICBVbmFyeUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlVuYXJ5RXhwcmVzc2lvbik7XG4gICAgdGhpcy5wcmVmaXggPSB0cnVlO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmFyZyA9IGFyZztcbn1cblxuVW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQsIHZhbHVlID0gdGhpcy5hcmcuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG5cbiAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IC12YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICchJzpcbiAgICAgICAgICAgIHJlc3VsdCA9ICF2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG51dGlscy5pbmhlcml0KExpdGVyYWxOb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIExpdGVyYWxOb2RlKHZhbHVlKSB7XG4gICAgTGl0ZXJhbE5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuTGl0ZXJhbCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuXG5MaXRlcmFsTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbn07XG5cbkxpdGVyYWxOb2RlLnByb3RvdHlwZS50b1RleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG51dGlscy5pbmhlcml0KENhbGxFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBDYWxsRXhwcmVzc2lvbk5vZGUoY2FsbGVlLCBhcmdzKSB7XG4gICAgQ2FsbEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkNhbGxFeHByZXNzaW9uKTtcbiAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XG59XG5cbkNhbGxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jYWxsZWUuY29tcHV0ZShzY29wZSwgb3B0aW9ucywge2NhbGxlZTogdHJ1ZX0pO1xuICAgIHZhciBhcmdWYWx1ZXMgPSB0aGlzLmFyZ3MubWFwKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIGFyZy5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmZpbHRlcikge1xuICAgICAgICB2YXIgZmlsdGVySW5zID0gb3B0aW9ucy5jcmVhdGVGaWx0ZXIoY29udGV4dC5wcm9wKTtcbiAgICAgICAgaWYgKGlzRmlsdGVyKGZpbHRlcklucykpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJJbnMuJGV4ZWN1dGUuYXBwbHkoZmlsdGVySW5zLCBhcmdWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIFwiJyArIGNvbnRleHQucHJvcCArICdcIiBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dC5vYmosIGFyZ1ZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRleHQucHJvcCArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICB9XG59O1xuXG4vLyBoYXMgY29uZGl0aW9uIG9yIGNhbGwgZXhwcmVzc2lvblxuQ2FsbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5oYXNDQyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gIXRoaXMuZmlsdGVyO1xufTtcblxudXRpbHMuaW5oZXJpdChNZW1iZXJFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBNZW1iZXJFeHByZXNzaW9uTm9kZShvYmplY3QsIHByb3BlcnR5LCBjb21wdXRlZCkge1xuICAgIE1lbWJlckV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk1lbWJlckV4cHJlc3Npb24pO1xuICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB0aGlzLmNvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbn1cblxuTWVtYmVyRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICB2YXIgb2JqID0gdGhpcy5vYmplY3QuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAob2JqID09IG51bGwgJiYgdGhpcy5vYmplY3QuYWxsb3dOdWxsKSB7XG4gICAgICAgIG9iaiA9IG5ldyBOdWxsT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29tcHV0ZWQpIHtcbiAgICAgICAgdmFyIHByb3AgPSB0aGlzLnByb3BlcnR5LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMsIGNvbnRleHQpO1xuICAgICAgICBpZiAodXRpbHMuaXNBcnJheShvcHRpb25zLm1lbWJlcnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zLm1lbWJlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBvYmosXG4gICAgICAgICAgICAgICAgdGFyZ2V0S2V5OiB0aGlzLm9iamVjdC50b1RleHQoKSxcbiAgICAgICAgICAgICAgICBrZXk6IHByb3BcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpbcHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHkuY29tcHV0ZShvYmosIG9wdGlvbnMsIGNvbnRleHQsIHRoaXMub2JqZWN0KTtcbn07XG5cbk1lbWJlckV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS50b1RleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0LnRvVGV4dCgpICsgJy4nICsgdGhpcy5wcm9wZXJ0eS50b1RleHQoKTtcbn07XG5cbnV0aWxzLmluaGVyaXQoSWRlbnRpZmllck5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gSWRlbnRpZmllck5vZGUobmFtZSkge1xuICAgIElkZW50aWZpZXJOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULklkZW50aWZpZXIpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbn1cblxuSWRlbnRpZmllck5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAob2JqLCBvcHRpb25zLCBjb250ZXh0LCBvYmpOb2RlKSB7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuYXNzaWdubWVudExlZnQgfHwgY29udGV4dC5jYWxsZWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2JqOiBvYmosXG4gICAgICAgICAgICAgICAgcHJvcDogdGhpcy5uYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRleHQucHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gb2JqW3RoaXMubmFtZV07XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheShvcHRpb25zLm1lbWJlcnMpKSB7XG4gICAgICAgIG9wdGlvbnMubWVtYmVycy5wdXNoKHtcbiAgICAgICAgICAgIHRhcmdldDogb2JqLFxuICAgICAgICAgICAgdGFyZ2V0S2V5OiBvYmpOb2RlICE9IG51bGwgPyBvYmpOb2RlLnRvVGV4dCgpIDogbnVsbCxcbiAgICAgICAgICAgIGtleTogdGhpcy5uYW1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBvcHRpb25zLmxvY2Fscykge1xuICAgICAgICByZXN1bHQgPSBvcHRpb25zLmxvY2Fsc1t0aGlzLm5hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5JZGVudGlmaWVyTm9kZS5wcm90b3R5cGUudG9UZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG59O1xuXG51dGlscy5pbmhlcml0KEFycmF5RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gQXJyYXlFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkFycmF5RXhwcmVzc2lvbik7XG59XG5cbnV0aWxzLmluaGVyaXQoUHJvcGVydHlOb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIFByb3BlcnR5Tm9kZSgpIHtcbiAgICBQcm9wZXJ0eU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuUHJvcGVydHkpO1xuICAgIHRoaXMua2luZCA9ICdpbml0JztcbiAgICB0aGlzLmtleSA9IG51bGw7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5jb21wdXRlZCA9IGZhbHNlO1xufVxuXG5Qcm9wZXJ0eU5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IHRoaXMua2V5LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMsIHsgcHJvcGVydHlLZXk6IHRydWUgfSksXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpXG4gICAgfTtcbn07XG5cbnV0aWxzLmluaGVyaXQoT2JqZWN0RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gT2JqZWN0RXhwcmVzc2lvbk5vZGUocHJvcGVydGllcykge1xuICAgIE9iamVjdEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk9iamVjdEV4cHJlc3Npb24pO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG59XG5cbk9iamVjdEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gICAgdGhpcy5wcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdmFyIGRlZiA9IGl0ZW0uY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG4gICAgICAgIHJlc3VsdFtkZWYua2V5XSA9IGRlZi52YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiBpc0Fzc2lnbmFibGUoYXN0KSB7XG4gICAgcmV0dXJuIGFzdC50eXBlID09PSBBU1QuSWRlbnRpZmllciB8fCBhc3QudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb247XG59XG5cbmZ1bmN0aW9uIFBhcnNlcihsZXhlciwgb3B0aW9ucykge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xufVxuXG5QYXJzZXIucHJvdG90eXBlLnRocm93RXJyb3IgPSBmdW5jdGlvbiAobXNnLCB0b2tlbikge1xuICAgIHRocm93IG5ldyBFcnJvcignU3ludGF4IEVycm9yOiBUb2tlbiBcXCcnICsgdG9rZW4udGV4dCArICdcXCcnICsgbXNnICsgJyBhdCBjb2x1bW4gJyArICh0b2tlbi5pbmRleCArIDEpICtcbiAgICAgICAgJyBvZiB0aGUgZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddIHN0YXJ0aW5nIGF0IFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyh0b2tlbi5pbmRleCkgKyAnXS4nKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xuXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wcm9ncmFtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9ncmFtID0gbmV3IFByb2dyYW1Ob2RlKCk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XG4gICAgICAgICAgICBwcm9ncmFtLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmFtO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUGFyc2VyLnByb3RvdHlwZS5leHByZXNzaW9uU3RhdGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUoKTtcbiAgICBleHAuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJDaGFpbigpKTtcbiAgICByZXR1cm4gZXhwO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5maWx0ZXJDaGFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XG4gICAgICAgIGxlZnQgPSB0aGlzLmZpbHRlcihsZWZ0KTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5hc3NpZ25tZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLnRlcm5hcnkoKTtcbiAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xuICAgICAgICBpZiAoIWlzQXNzaWduYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhc3NpZ24gYSB2YWx1ZSB0byBhIG5vbiBsLXZhbHVlJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSBuZXcgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKHJlc3VsdCwgdGhpcy5hc3NpZ25tZW50KCksICc9Jyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnRlcm5hcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRlc3QgPSB0aGlzLmxvZ2ljYWxPUigpO1xuICAgIHZhciBhbHRlcm5hdGU7XG4gICAgdmFyIGNvbnNlcXVlbnQ7XG4gICAgaWYgKHRoaXMuZXhwZWN0KCc/JykpIHtcbiAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIGlmICh0aGlzLmNvbnN1bWUoJzonKSkge1xuICAgICAgICAgICAgY29uc2VxdWVudCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRlc3Q7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmxvZ2ljYWxPUiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfHwnKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5sb2dpY2FsQU5EID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWZ0ID0gdGhpcy5lcXVhbGl0eSgpO1xuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnJiYnKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnJiYnLCBsZWZ0LCB0aGlzLmVxdWFsaXR5KCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuZXF1YWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLnJlbGF0aW9uYWwoKTtcbiAgICB2YXIgdG9rZW47XG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc9PScsICchPScsICc9PT0nLCAnIT09JykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5yZWxhdGlvbmFsKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucmVsYXRpb25hbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMuYWRkaXRpdmUoKTtcbiAgICB2YXIgdG9rZW47XG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLmFkZGl0aXZlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuYWRkaXRpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLm11bHRpcGxpY2F0aXZlKCk7XG4gICAgdmFyIHRva2VuO1xuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm11bHRpcGxpY2F0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWZ0ID0gdGhpcy51bmFyeSgpO1xuICAgIHZhciB0b2tlbjtcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJyonLCAnLycsICclJykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy51bmFyeSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnVuYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0b2tlbjtcbiAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XG4gICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcbiAgICB9XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnByaW1hcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByaW1hcnk7XG4gICAgaWYgKHRoaXMuZXhwZWN0KCcoJykpIHtcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuZmlsdGVyQ2hhaW4oKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgnWycpKSB7XG4gICAgICAgIHByaW1hcnkgPSB0aGlzLmFycmF5RGVjbGFyYXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCd7JykpIHtcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMub2JqZWN0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubGl0ZXJhbHMuaGFzT3duUHJvcGVydHkodGhpcy5wZWVrKCkudGV4dCkpIHtcbiAgICAgICAgcHJpbWFyeSA9IG5ldyBMaXRlcmFsTm9kZSh0aGlzLm9wdGlvbnMubGl0ZXJhbHNbdGhpcy5jb25zdW1lKCkudGV4dF0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICBwcmltYXJ5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICBwcmltYXJ5ID0gdGhpcy5jb25zdGFudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignbm90IGEgcHJpbWFyeSBleHByZXNzaW9uJywgdGhpcy5wZWVrKCkpO1xuICAgIH1cblxuICAgIHZhciBuZXh0O1xuICAgIHdoaWxlICh0aGlzLnBlZWsoJygnLCAnWycsICcuJykgfHwgKHRoaXMucGVlaygnPycpICYmIHRoaXMucGVla0FoZWFkKDEsICcuJykpKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XG4gICAgICAgICAgICBwcmltYXJ5LmFsbG93TnVsbCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0ID0gdGhpcy5leHBlY3QoJygnLCAnWycsICcuJyk7XG5cbiAgICAgICAgaWYgKG5leHQudGV4dCA9PT0gJygnKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLnBhcnNlQXJndW1lbnRzKCkpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnWycpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5leHByZXNzaW9uKCksIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnLicpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5pZGVudGlmaWVyKCksIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSU1QT1NTSUJMRScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcmltYXJ5O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAoYmFzZUV4cHJlc3Npb24pIHtcbiAgICB2YXIgYXJncyA9IFtiYXNlRXhwcmVzc2lvbl0sIGlkZW50aWZpZXJzID0gW3RoaXMuaWRlbnRpZmllcigpXTtcblxuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnLicpKSB7XG4gICAgICAgIGlkZW50aWZpZXJzLnB1c2godGhpcy5pZGVudGlmaWVyKCkpO1xuICAgIH1cblxuICAgIC8vIHBsdXMgbmFtZXNwYWNlXG4gICAgdmFyIGVudGlyZU5hbWUgPSBpZGVudGlmaWVycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgICB9KS5qb2luKCcuJyk7XG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShuZXcgSWRlbnRpZmllck5vZGUoZW50aXJlTmFtZSksIGFyZ3MpO1xuXG4gICAgcmVzdWx0LmZpbHRlciA9IHRydWU7XG5cbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJzonKSkge1xuICAgICAgICBhcmdzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlQXJndW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJyknKSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmZpbHRlckNoYWluKCkpO1xuICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFyZ3M7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmlkZW50aWZpZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5jb25zdW1lKCk7XG4gICAgaWYgKCF0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgbm90IGEgdmFsaWQgaWRlbnRpZmllcicsIHRva2VuKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBJZGVudGlmaWVyTm9kZSh0b2tlbi50ZXh0KTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuY29uc3RhbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETyBjaGVjayB0aGF0IGl0IGlzIGEgY29uc3RhbnRcbiAgICByZXR1cm4gbmV3IExpdGVyYWxOb2RlKHRoaXMuY29uc3VtZSgpLnZhbHVlKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuYXJyYXlEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyID0gbmV3IEFycmF5RXhwcmVzc2lvbk5vZGUoKTtcbiAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnXScpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnXScpKSB7XG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJyLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgfVxuICAgIHRoaXMuY29uc3VtZSgnXScpO1xuXG4gICAgcmV0dXJuIGFycjtcbn07XG5cblBhcnNlci5wcm90b3R5cGUub2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gW10sIHByb3BlcnR5O1xuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICd9Jykge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCd9JykpIHtcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eU5vZGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuY29uc3RhbnQoKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJzonKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHByb3BlcnR5LmtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygnWycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCdbJyk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaW52YWxpZCBrZXknLCB0aGlzLnBlZWsoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICB9XG4gICAgdGhpcy5jb25zdW1lKCd9Jyk7XG5cbiAgICByZXR1cm4gbmV3IE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5jb25zdW1lID0gZnVuY3Rpb24gKGUxKSB7XG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgIH1cblxuICAgIHZhciB0b2tlbiA9IHRoaXMuZXhwZWN0KGUxKTtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFsnICsgZTEgKyAnXScsIHRoaXMucGVlaygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRva2VuO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wZWVrVG9rZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50b2tlbnNbMF07XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoZTEsIGUyLCBlMywgZTQpIHtcbiAgICByZXR1cm4gdGhpcy5wZWVrQWhlYWQoMCwgZTEsIGUyLCBlMywgZTQpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wZWVrQWhlYWQgPSBmdW5jdGlvbiAoaSwgZTEsIGUyLCBlMywgZTQpIHtcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gaSkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcbiAgICAgICAgdmFyIHQgPSB0b2tlbi50ZXh0O1xuICAgICAgICBpZiAodCA9PT0gZTEgfHwgdCA9PT0gZTIgfHwgdCA9PT0gZTMgfHwgdCA9PT0gZTQgfHxcbiAgICAgICAgICAgICghZTEgJiYgIWUyICYmICFlMyAmJiAhZTQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5leHBlY3QgPSBmdW5jdGlvbiAoZTEsIGUyLCBlMywgZTQpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLnBlZWsoZTEsIGUyLCBlMywgZTQpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgICB0aGlzLnRva2Vucy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7IFBhcnNlciB9OyIsImV4cG9ydCAqIGZyb20gJy4vdGVtcGxhdGUtY2FjaGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL21vZGVsLW9wdGlvbnMnOyIsImltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5Ac2VydmljZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnJG1vZGVsT3B0aW9ucydcclxufSlcclxuY2xhc3MgTW9kZWxPcHRpb25zU2VydmljZSBleHRlbmRzIFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNzc0NsYXNzID0ge1xyXG4gICAgICAgICAgICBwcmlzdGluZTogJ24tcHJpc3RpbmUnLFxyXG4gICAgICAgICAgICBkaXJ0eTogJ24tZGlydHknLFxyXG4gICAgICAgICAgICB2YWxpZDogJ24tdmFsaWQnLFxyXG4gICAgICAgICAgICBpbnZhbGlkOiAnbi1pbnZhbGlkJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBodHRwR2V0IH0gZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQHNlcnZpY2Uoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnJHRlbXBsYXRlQ2FjaGUnXG59KVxuY2xhc3MgVGVtcGxhdGVDYWNoZVNlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50cGxDYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLnByb21pc2VDYWNoZSA9IHt9O1xuICAgIH1cblxuICAgIGdldFRwbEJ5VXJsKHVybCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMudHBsQ2FjaGVbdXJsXSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzZWxmLnRwbENhY2hlW3VybF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMucHJvbWlzZUNhY2hlW3VybF0pIHtcbiAgICAgICAgICAgIHRoaXMucHJvbWlzZUNhY2hlW3VybF0gPSBodHRwR2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9taXNlQ2FjaGVbdXJsXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgc2VsZi50cGxDYWNoZVt1cmxdID0gcmVzLmRhdGEgfHwgJyc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYudHBsQ2FjaGVbdXJsXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZUNhY2hlW3VybF07XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xyXG5cclxudmFyIHJlYWR5U3RhdGVFbnVtID0ge1xyXG4gICAgc3RhcnQ6IDAsXHJcbiAgICBvcGVuZWQ6IDEsXHJcbiAgICBzZW50OiAyLFxyXG4gICAgcmVjZWl2ZWQ6IDMsXHJcbiAgICBmaW5pc2g6IDRcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVhIUigpIHtcclxuICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvbWlzZShyZXNvbHZlLCByZWplY3QpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlLCByZWplY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRVcmxQYXJhbSh1cmwsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKTtcclxuICAgIHVybCArPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgcmV0dXJuIHVybDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcclxuICAgIHZhciBwYXJzZWQgPSB7fTtcclxuICAgIHZhciBrZXk7XHJcbiAgICB2YXIgdmFsO1xyXG4gICAgdmFyIGk7XHJcblxyXG4gICAgaWYgKCFoZWFkZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcclxuICAgIH1cclxuXHJcbiAgICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSwgaW5kZXgpIHtcclxuICAgICAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XHJcbiAgICAgICAga2V5ID0gbGluZS5zdWJzdHIoMCwgaSkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdmFsID0gbGluZS5zdWJzdHIoaSArIDEpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcclxuICAgICAgICAgICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcGFyc2VkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFVybCh1cmwsIGNvbmZpZykge1xyXG4gICAgaWYgKGNvbmZpZy5kYXRhICE9IG51bGwgJiYgY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpID09PSAnZ2V0Jykge1xyXG4gICAgICAgIHV0aWxzLmZvckVhY2goY29uZmlnLmRhdGEsIGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSkge1xyXG4gICAgICAgICAgICBhZGRVcmxQYXJhbSh1cmwsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB1cmw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgdmFyIHhociA9IGNyZWF0ZVhIUigpO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShjb25maWcuZGF0YSkpIHtcclxuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5kYXRhWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCF4aHIgfHwgeGhyLnJlYWR5U3RhdGUgIT09IHJlYWR5U3RhdGVFbnVtLmZpbmlzaCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMCAmJiAhKHhoci5yZXNwb25zZVVSTCAmJiB4aHIucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHhociA/IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHhoci5yZXNwb25zZVRleHQgOiB4aHIucmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiB4aHJcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICgoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkgfHwgeGhyLnN0YXR1cyA9PSAzMDQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NmdWxseVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyB1bnN1Y2Nlc3NmdWxseVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeGhyID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKSwgYnVpbGRVcmwoY29uZmlnLnVybCwgY29uZmlnKSwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNlbmQoY29uZmlnLmRhdGEpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGh0dHBHZXQodXJsLCBkYXRhLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAob3B0aW9ucyAhPSBudWxsKSB7XHJcbiAgICAgICAgdXRpbHMuZXh0ZW5kKGNvbmZpZywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcXVlc3QoY29uZmlnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaHR0cFBvc3QodXJsLCBkYXRhLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH07XHJcblxyXG4gICAgaWYgKG9wdGlvbnMgIT0gbnVsbCkge1xyXG4gICAgICAgIHV0aWxzLmV4dGVuZChjb25maWcsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXF1ZXN0KGNvbmZpZyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGh0dHBHZXQsIGh0dHBQb3N0IH1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL25vZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9odHRwJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZSc7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmNsYXNzIE1lc3NlbmdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBvbihmbikge1xuICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2goZm4pO1xuICAgIH1cblxuICAgIG9mZihmbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhbmRsZXJzW2ldID09PSBmbikge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZShhcmdzLCBzY29wZSkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWU7XG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmhhbmRsZXJzW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdGhpcy5oYW5kbGVyc1tpXS5jYWxsKHNjb3BlLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfVxufVxuXG5jbGFzcyBNZXNzZW5nZXJCdXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1lc3NlbmdlcnMgPSB7fTtcbiAgICB9XG5cbiAgICBnZXQoZSkge1xuICAgICAgICBpZiAoIXRoaXMubWVzc2VuZ2Vyc1tlXSkge1xuICAgICAgICAgICAgdGhpcy5tZXNzZW5nZXJzW2VdID0gbmV3IE1lc3NlbmdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NlbmdlcnNbZV07XG4gICAgfVxuXG4gICAgb24oZSwgZm4pIHtcbiAgICAgICAgdGhpcy5nZXQoZSkub24oZm4pO1xuICAgIH1cblxuICAgIG9mZihlLCBmbikge1xuICAgICAgICB0aGlzLmdldChlKS5vZmYoZm4pO1xuICAgIH1cblxuICAgIGZpcmUoZSwgYXJncywgc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGUpLmZpcmUoYXJncywgc2NvcGUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNNZXNzZW5nZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1lc3Nlbmdlcjtcbn1cblxuZXhwb3J0IHsgTWVzc2VuZ2VyLCBNZXNzZW5nZXJCdXMsIGlzTWVzc2VuZ2VyIH07IiwiXG5mdW5jdGlvbiBnZXRDaGlsZE5vZGVzKG5vZGUpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZS5jaGlsZE5vZGVzLCAwKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDaGlsZE5vZGVzKG5vZGUpIHtcbiAgICBnZXRDaGlsZE5vZGVzKG5vZGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlTm9kZShyZWZOb2RlLCBuZXdOb2RlKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSByZWZOb2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZOb2RlKTtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZWZOb2RlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGVCZXR3ZWVuKGJlZ2luTm9kZSwgZW5kTm9kZSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gYmVnaW5Ob2RlLnBhcmVudE5vZGU7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBnZXRDaGlsZE5vZGVzKHBhcmVudE5vZGUpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nID09PSBiZWdpbk5vZGUgJiYgY2hpbGQgIT09IGVuZE5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyA9PT0gZW5kTm9kZSAmJiBjaGlsZCAhPT0gYmVnaW5Ob2RlKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBpbnNlcnROb2RlQWZ0ZXIocmVmTm9kZSwgbmV3Tm9kZSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHBhcmVudE5vZGUubGFzdENoaWxkID09PSByZWZOb2RlKSB7XG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmTm9kZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnRMb2FkZWQoZWxlLCBjYWxsYmFjaykge1xuICAgIHZhciBjYW5jZWxUb2tlbiA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gcXVlcnkoKSB7XG4gICAgICAgIGlmIChjYW5jZWxUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZS5jbGllbnRXaWR0aCA+IDAgJiYgZWxlLmNsaWVudEhlaWdodCA+IDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbmNlbFRva2VuID0gdHJ1ZTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnRVbmxvYWRlZChlbGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGNhbmNlbFRva2VuID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBxdWVyeSgpIHtcbiAgICAgICAgaWYgKGNhbmNlbFRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlLmNsaWVudFdpZHRoID09PSAwICYmIGVsZS5jbGllbnRIZWlnaHQgPT0gMCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FuY2VsVG9rZW4gPSB0cnVlO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudFN0YXRlKGVsZSwgY2FsbGJhY2tzKSB7XG4gICAgdmFyIGNhbmNlbFRva2VuID0gZmFsc2UsIGxvYWRlZCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gcXVlcnkoKSB7XG4gICAgICAgIGlmIChjYW5jZWxUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZS5jbGllbnRXaWR0aCA+IDAgJiYgZWxlLmNsaWVudEhlaWdodCA+IDApIHtcbiAgICAgICAgICAgIGlmICghbG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uRW50ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Mub25FbnRlci5jYWxsKGNhbGxiYWNrcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGxvYWRlZCkge1xuICAgICAgICAgICAgICAgIGxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3Mub25MZWF2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5vbkxlYXZlLmNhbGwoY2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MgKGVsLCBjbHMpIHtcbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuYWRkKGMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgICAgICBpZiAoY3VyLmluZGV4T2YoJyAnICsgY2xzICsgJyAnKSA8IDApIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoY3VyICsgY2xzKS50cmltKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyAoZWwsIGNscykge1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5yZW1vdmUoYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVsLmNsYXNzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgICAgIHZhciB0YXIgPSAnICcgKyBjbHMgKyAnICc7XG4gICAgICAgIHdoaWxlIChjdXIuaW5kZXhPZih0YXIpID49IDApIHtcbiAgICAgICAgICAgIGN1ciA9IGN1ci5yZXBsYWNlKHRhciwgJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBjdXIgPSBjdXIudHJpbSgpO1xuICAgICAgICBpZiAoY3VyKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY3VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBnZXRDaGlsZE5vZGVzLFxuICAgIGNsZWFyQ2hpbGROb2RlcyxcbiAgICByZXBsYWNlTm9kZSxcbiAgICByZW1vdmVOb2RlLFxuICAgIHJlbW92ZU5vZGVCZXR3ZWVuLFxuICAgIGluc2VydE5vZGVBZnRlcixcbiAgICBxdWVyeUVsZW1lbnRMb2FkZWQsXG4gICAgcXVlcnlFbGVtZW50VW5sb2FkZWQsXG4gICAgcXVlcnlFbGVtZW50U3RhdGUsXG4gICAgYWRkQ2xhc3MsXG4gICAgcmVtb3ZlQ2xhc3Ncbn07IiwidmFyIGRlYnVnTW9kZSA9IHRydWUsXG4gICAgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgYWN0aW9uLCBpZ25vcmVPd24pIHtcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKG9ialtpbmRleF0sIGluZGV4KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoaWdub3JlT3duIHx8IG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ob2JqW3BdLCBwKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhY3Rpb24ob2JqLCBvYmopO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc29tZShvYmosIGFjdGlvbikge1xuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24oaW5kZXgsIG9ialtpbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ocCwgb2JqW3BdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24ob2JqLCBvYmopO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29weSgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBvYmpJbmRleCA9IDAsIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF0sIGZpbHRlcjtcblxuICAgIGlmIChpc0Jvb2xlYW4ob2JqKSkge1xuICAgICAgICBkZWVwID0gb2JqO1xuICAgICAgICBvYmpJbmRleCsrO1xuICAgICAgICBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gb2JqSW5kZXggKyAxKSB7XG4gICAgICAgIGZpbHRlciA9IGFyZ3VtZW50c1tvYmpJbmRleCArIDFdO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgdmFyIG5ld0FyciA9IFtdO1xuICAgICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBpbmRleCwgaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChkZWVwID8gY29weShpdGVtKSA6IGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld0FycjtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICB2YXIgbmV3T2JqID0gb2JqZWN0KG9iaik7XG4gICAgICAgIGZvckVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGtleSwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBkZWVwID8gY29weSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0gYXJndW1lbnRzW2luZGV4XTtcblxuICAgIGlmIChpc0Jvb2xlYW4odGFyZ2V0KSkge1xuICAgICAgICBkZWVwID0gdGFyZ2V0O1xuICAgICAgICB0YXJnZXQgPSBhcmd1bWVudHNbKytpbmRleF07XG4gICAgfVxuXG4gICAgaWYgKGRlZXApIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSB7fTtcblxuICAgIGlmIChpc0Jvb2xlYW4oYXJndW1lbnRzW2luZGV4XSkpIHtcbiAgICAgICAgZGVlcCA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKGRlZXApIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBwbGFpbk1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAodGFyZ2V0W2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdCh0YXJnZXRba2V5XSkgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdChvKSB7XG4gICAgZnVuY3Rpb24gRigpIHtcbiAgICB9XG5cbiAgICBGLnByb3RvdHlwZSA9IG87XG4gICAgcmV0dXJuIG5ldyBGKCk7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XG4gICAgdmFyIHByb3RvdHlwZSA9IG9iamVjdChzdXBlclR5cGUucHJvdG90eXBlKTtcbiAgICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJUeXBlO1xuICAgIHN1YlR5cGUucHJvdG90eXBlID0gcHJvdG90eXBlO1xufVxuXG5mdW5jdGlvbiBpbmhlcml0KHN1YlR5cGUsIHN1cGVyVHlwZSkge1xuICAgIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKTtcbiAgICBzdWJUeXBlLnN1cGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdXBlclR5cGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBsb3dlcmNhc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9Mb3dlckNhc2UoKSA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gdXBwZXJjYXNlKHN0cmluZykge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvVXBwZXJDYXNlKCkgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBBcnJheTtcbn1cblxuZnVuY3Rpb24gaXNNYXAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1hcDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gaXNCbGFua09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFnZXRQcm90b3R5cGVPZih2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNSZWdFeHAodmFsdWUpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG59XG5cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuZnVuY3Rpb24gaXNTYW1lKG9iajEsIG9iajIpIHtcbiAgICB2YXIgc2FtZSA9IChvYmoxID09PSBvYmoyKTtcblxuICAgIGlmICghc2FtZSkge1xuICAgICAgICBpZiAoaXNBcnJheShvYmoxKSAmJiBpc0FycmF5KG9iajIpKSB7XG4gICAgICAgICAgICBpZiAob2JqMS5sZW5ndGggPT09IG9iajIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2FtZSA9ICFzb21lKG9iajEsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpc1NhbWUodmFsdWUsIG9iajJbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc09iamVjdChvYmoxKSAmJiBpc09iamVjdChvYmoyKSAmJiBnZXRQcm90b3R5cGVPZihvYmoxKSA9PT0gZ2V0UHJvdG90eXBlT2Yob2JqMikpIHtcbiAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2FtZTtcbn1cblxuZnVuY3Rpb24gZGVidWcobG9nKSB7XG4gICAgaWYgKGRlYnVnTW9kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29udGFpbnMoYXJyLCBvYmopIHtcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IG9iajtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY29udGFpbnNTdHIoYXJyLCBzdHIsIGlnbm9yZUNhc2UpIHtcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHN0ciB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2UoaXRlbSkgPT09IGxvd2VyY2FzZShzdHIpKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcblxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNQcm9wID0gZmFsc2U7XG4gICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAodmFsdWUzLCBrZXkzKSB7XG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcbiAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XG4gICAgICAgIH0sIHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBoYXNQcm9wO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIGtleSwgaWdub3JlQ2FzZSkge1xuICAgIGlmICghb2JqKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XG5cbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzUHJvcCA/IHRhcmdldCA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHNldFByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSwgaWdub3JlQ2FzZSkge1xuICAgIGlmICghb2JqKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xuXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleTJdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoYXNQcm9wID0gZmFsc2U7XG4gICAgICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xuICAgICAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xuICAgICAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaGFzUHJvcCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJzogQ2FuIG5vdCBzZXQgcHJvcGVydHkgb2YgdW5kZWZpbmVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb25jYXQoKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIG9yZGVyQnkoYXJyLCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFZhbHVlKGEpID4gZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvcmRlckJ5RGVzY2VuZGluZyhhcnIsIGdldHRlcikge1xuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChnZXR0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0dGVyKGl0ZW0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpIDwgZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICByZXR1cm4gaXNOYU4obikgPyB2YWx1ZSA6IG47XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShhcnIsIGl0ZW0pIHtcbiAgICBpZiAoYXJyLmxlbmd0aCkge1xuICAgICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0KCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2gsIG1hdGNoVGV4dCwgaW5kZXgsIHRleHQgPSBhcmd1bWVudHNbMF0sXG4gICAgICAgIHBsYWNlSG9kZXIgPSAvXFx7KFxcZCspXFx9L2c7XG5cbiAgICB3aGlsZSAobWF0Y2ggPSBwbGFjZUhvZGVyLmV4ZWModGV4dCkpIHtcbiAgICAgICAgbWF0Y2hUZXh0ID0gbWF0Y2hbMF07XG4gICAgICAgIGluZGV4ID0gTnVtYmVyLnBhcnNlSW50KG1hdGNoWzFdKSArIDE7XG5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZm9ybWF0IGl0ZW0gJyArIGluZGV4ICsgJ2lzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgbWF0Y2guaW5kZXgpICsgYXJndW1lbnRzW2luZGV4XSArIHRleHQuc3Vic3RyaW5nKG1hdGNoLmluZGV4ICsgbWF0Y2hUZXh0Lmxlbmd0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG59XG5cbmV4cG9ydCB7XG4gICAgZm9yRWFjaCxcbiAgICBzb21lLFxuICAgIGNvcHksXG4gICAgZXh0ZW5kLFxuICAgIG1lcmdlLFxuICAgIG9iamVjdCxcbiAgICBpbmhlcml0LFxuICAgIGxvd2VyY2FzZSxcbiAgICB1cHBlcmNhc2UsXG4gICAgaXNVbmRlZmluZWQsXG4gICAgaXNEZWZpbmVkLFxuICAgIGlzT2JqZWN0LFxuICAgIGlzQmxhbmtPYmplY3QsXG4gICAgaXNOdW1iZXIsXG4gICAgaXNEYXRlLFxuICAgIGlzRnVuY3Rpb24sXG4gICAgaXNSZWdFeHAsXG4gICAgaXNCb29sZWFuLFxuICAgIGlzQXJyYXksXG4gICAgaXNTdHJpbmcsXG4gICAgaXNTYW1lLFxuICAgIGlzRm9ybURhdGEsXG4gICAgZGVidWcsXG4gICAgY29udGFpbnMsXG4gICAgY29udGFpbnNTdHIsXG4gICAgaGFzUHJvcGVydHksXG4gICAgZ2V0UHJvcGVydHksXG4gICAgc2V0UHJvcGVydHksXG4gICAgY29uY2F0LFxuICAgIG9yZGVyQnksXG4gICAgb3JkZXJCeURlc2NlbmRpbmcsXG4gICAgdG9OdW1iZXIsXG4gICAgcmVtb3ZlLFxuICAgIGZvcm1hdFxufTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBjb21waWxlLCBjb21wdXRlIH0gZnJvbSAnLi4vcGFyc2VyJztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICAgIGdldCAkcHJveHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvUHJveHkoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihtZXRhKSB7XG4gICAgICAgIENvbXBvbmVudC5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBtZXRhKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29uc3RydWN0KG1ldGEpIHtcbiAgICAgICAgdGhpcy4kJGVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLiQkY2hpbGRFbGVtZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzID0gW107XG4gICAgICAgIHRoaXMuJCRjaGlsZERpcmVjdGl2ZXMgPSBbXTtcbiAgICAgICAgdGhpcy4kJGRldGVjdFRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLiQkb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXIoKTtcbiAgICAgICAgdGhpcy4kJGRpc3Bvc2VycyA9IFtdO1xuXG4gICAgICAgIGlmIChtZXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJHNldE1ldGEobWV0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcbiAgICB9XG5cbiAgICAkaG9va3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBiZWZvcmVBdHRyQ2hhbmdlOiAnJyxcbiAgICAgICAgICAgIGFmdGVyQXR0ckNoYW5nZTogJycsXG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxuICAgICAgICAgICAgYmVmb3JlVmlld0luaXQ6ICcnLFxuICAgICAgICAgICAgYWZ0ZXJWaWV3TW91bnQ6ICcnLFxuICAgICAgICAgICAgb25EZXN0cm95OiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgICRnZXRNZXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGEgfHwge307XG4gICAgfVxuXG4gICAgJHNldE1ldGEodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kJG1ldGEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAkYmluZE5vZGUobm9kZSkge1xuICAgICAgICB0aGlzLiQkZWxlbWVudCA9IG5vZGU7XG4gICAgfVxuXG4gICAgJGhhc0F0dHIocHJvcCkge1xuICAgICAgICByZXR1cm4gdXRpbHMuaGFzUHJvcGVydHkodGhpcywgcHJvcCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgJGluaXRBdHRyKHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMsIHByb3AsIHRydWUpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuYmVmb3JlQXR0ckNoYW5nZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlQXR0ckNoYW5nZS5jYWxsKHRoaXMsIHByb3AsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLCBwcm9wLCB2YWx1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5hZnRlckF0dHJDaGFuZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLmFmdGVyQXR0ckNoYW5nZS5jYWxsKHRoaXMsIHByb3AsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkaW5pdEF0dHJEb25lKCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uSW5pdCkpIHtcbiAgICAgICAgICAgIHRoaXMub25Jbml0LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkc2V0QXR0cihwcm9wLCB2YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBwcm9wLCB0cnVlKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmJlZm9yZUF0dHJDaGFuZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLmJlZm9yZUF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy4kcHJveHksIHByb3AsIHZhbHVlLCB0cnVlKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmFmdGVyQXR0ckNoYW5nZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJBdHRyQ2hhbmdlLmNhbGwodGhpcywgcHJvcCwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRsaXN0ZW4oZSwgZm4pIHtcbiAgICAgICAgdmFyIG1lc3NlbmdlciA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMsIGUsIHRydWUpO1xuICAgICAgICBpZiAodXRpbHMuaXNNZXNzZW5nZXIobWVzc2VuZ2VyKSkge1xuICAgICAgICAgICAgbWVzc2VuZ2VyLm9uKGZuKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSArICcgaXMgbm90IGEgZXZlbnQnKTtcbiAgICB9XG5cbiAgICAkZ2V0VGVtcGxhdGUoc3luYykge1xuICAgICAgICB2YXIgbWV0YSA9IHRoaXMuJGdldE1ldGEoKTtcblxuICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGEudGVtcGxhdGUgfHwgJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhtZXRhLnRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobWV0YS50ZW1wbGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1dGlscy5pc1N0cmluZyhtZXRhLnRlbXBsYXRlVXJsKSkge1xuICAgICAgICAgICAgICAgIGluamVjdG9yLnNlcnZpY2UoJyR0ZW1wbGF0ZUNhY2hlJykuZ2V0VHBsQnlVcmwobWV0YS50ZW1wbGF0ZVVybCkudGhlbihmdW5jdGlvbiAodHBsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHBsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkdXNpbmcobmFtZSkge1xuICAgICAgICB2YXIgbWV0YSA9IHRoaXMuJGdldE1ldGEoKSxcbiAgICAgICAgICAgIHVzaW5nID0gbWV0YS51c2luZyxcbiAgICAgICAgICAgIHNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLicpLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gc2VnbWVudHMucG9wKCksXG4gICAgICAgICAgICBzcGFjZU5hbWUgPSBzZWdtZW50cy5qb2luKCcuJyk7XG5cbiAgICAgICAgaWYgKHNwYWNlTmFtZSAmJiB1dGlscy5pc09iamVjdCh1c2luZykpIHtcbiAgICAgICAgICAgIHV0aWxzLnNvbWUodXNpbmcsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gc3BhY2VOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSB2YWx1ZSArICcuJyArIGNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICAkbWFrZUNvbXBpbGVPcHRpb25zKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRFbWJlZFRwbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLiQkZWxlbWVudC5nZXRJbm5lclRwbCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zQ29tcG9uZW50OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jb250YWluc0NvbXBvbmVudChzZWxmLiR1c2luZyhuYW1lKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlQ29tcG9uZW50OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVDb21wb25lbnQoc2VsZi4kdXNpbmcobmFtZSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zRGlyZWN0aXZlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jb250YWluc0RpcmVjdGl2ZShzZWxmLiR1c2luZyhuYW1lKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlRGlyZWN0aXZlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVEaXJlY3RpdmUoc2VsZi4kdXNpbmcobmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgICRoYXNWaWV3KCkge1xuICAgICAgICByZXR1cm4gdXRpbHMuaXNBcnJheSh0aGlzLiQkY2hpbGRFbGVtZW50cyk7XG4gICAgfVxuXG4gICAgJHNob3dWaWV3KCkge1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNoaWxkLmdldEh0bWxFbGVtZW50KCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuXG4gICAgJGNsZWFyVmlldygpIHtcbiAgICAgICAgaWYgKCF0aGlzLiRoYXNWaWV3KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiQkY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMgPSBudWxsO1xuICAgIH1cblxuICAgICRyZW5kZXIoc3luYykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGZyYWdtZW50ID0gbnVsbDtcblxuICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGhhc1ZpZXcoKSkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gdGhpcy4kc2hvd1ZpZXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gY29tcGlsZSh0aGlzLiRnZXRUZW1wbGF0ZShzeW5jKSwgdGhpcy4kbWFrZUNvbXBpbGVPcHRpb25zKCkpKHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLiRoYXNWaWV3KCkpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNlbGYuJHNob3dWaWV3KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kZ2V0VGVtcGxhdGUoKS50aGVuKGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gY29tcGlsZShodG1sLCBzZWxmLiRtYWtlQ29tcGlsZU9wdGlvbnMoKSkoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZnJhZ21lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkcmVmcmVzaChzeW5jKSB7XG4gICAgICAgIHRoaXMuJGNsZWFyVmlldygpO1xuICAgICAgICByZXR1cm4gdGhpcy4kcmVuZGVyKHN5bmMpO1xuICAgIH1cblxuICAgICRtb3VudChzZWxlY3Rvck9yRWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGVsZW1lbnQsIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzZWxlY3Rvck9yRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yT3JFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBzZWxlY3Rvck9yRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3B0aW9ucy5hcHBlbmQpIHtcbiAgICAgICAgICAgIHV0aWxzLmNsZWFyQ2hpbGROb2RlcyhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnN5bmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4kcmVuZGVyKG9wdGlvbnMuc3luYykpO1xuICAgICAgICAgICAgc2VsZi4kYWZ0ZXJWaWV3TW91bnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHJlbmRlcihvcHRpb25zLnN5bmMpLnRoZW4oZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlKTtcbiAgICAgICAgICAgICAgICBzZWxmLiRhZnRlclZpZXdNb3VudCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkdW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJCRlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJCRlbGVtZW50LiRyZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuJCRlbGVtZW50LnJlbW92ZUh0bWxFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy4kaGFzVmlldygpKSB7XG4gICAgICAgICAgICB0aGlzLiQkY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZUh0bWxFbGVtZW50KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiQkcGFyZW50Q29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQuJHJlbW92ZUNoaWxkQ21wKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4kJHBhcmVudENvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkYWZ0ZXJWaWV3TW91bnQoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuYWZ0ZXJWaWV3TW91bnQpKSB7XG4gICAgICAgICAgICB0aGlzLmFmdGVyVmlld01vdW50LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkZGV0ZWN0KCkge1xuICAgICAgICBpZiAodGhpcy4kJGRldGVjdFRpbWVvdXQgfHwgIXRoaXMuJCRjaGlsZEVsZW1lbnRzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuJCRkZXRlY3RUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLiQkZGV0ZWN0VGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLiQkY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLmRldGVjdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICR2YWxpZGF0ZSgpIHtcbiAgICAgICAgdmFyIG9iaiwgcHJvcCwgYWN0aW9uLCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgb2JqID0gdGhpcztcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgb2JqID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgcHJvcCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIGFjdGlvbiA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXJndW1lbnRzIGVycm9yJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy4kJG9ic2VydmVyLnZhbGlkYXRlKG9iaiwgcHJvcCwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICAkd2F0Y2goKSB7XG4gICAgICAgIHZhciBvYmosIHByb3AsIGFjdGlvbiwgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIG9iaiA9IHRoaXM7XG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIG9iaiA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3VtZW50cyBlcnJvcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuJCRvYnNlcnZlci53YXRjaChvYmosIHByb3AsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgJGV2YWwoZXhwKSB7XG4gICAgICAgIHJldHVybiBjb21wdXRlKGV4cCwgdGhpcyk7XG4gICAgfVxuXG4gICAgJGdldFBhcmVudENtcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRwYXJlbnRDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgJHJlbW92ZUNoaWxkQ21wKGNoaWxkQ21wKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJCRjaGlsZENvbXBvbmVudHMuaW5kZXhPZihjaGlsZENtcCk7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgY2hpbGRDbXAuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGNyZWF0ZUNoaWxkQ21wKGNoaWxkQ21wKSB7XG4gICAgICAgIHZhciBjb21wb25lbnQgPSBpbmplY3Rvci5jcmVhdGVDb21wb25lbnQoY2hpbGRDbXApO1xuICAgICAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgY29tcG9uZW50LiQkcGFyZW50Q29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICAkaW5oZXJpdENtcChwYXJlbnRDbXApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihzZWxmLCB1dGlscy5vYmplY3QocGFyZW50Q21wKSk7XG5cbiAgICAgICAgLy8gdG9kbyAtIHJlc29sdmUgaXNzdWUgY2FsbGluZyBwYXJlbnQgY29tcG9uZW50J3MgbGlmZWN5Y2xlIGhvb2tzXG4gICAgICAgIHV0aWxzLmZvckVhY2goc2VsZi4kaG9va3MoKSwgZnVuY3Rpb24gKGhhbmRsZXIsIGhvb2spIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmhhc093blByb3BlcnR5KGhvb2spID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzZWxmW2hvb2tdID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kJGRpc3Bvc2Vycy5wdXNoKHBhcmVudENtcC4kdmFsaWRhdGUoJyonLCBmdW5jdGlvbiAocHJvcCwgYXJncykge1xuICAgICAgICAgICAgc2VsZi4kJG9ic2VydmVyLmZpcmVDaGFuZ2luZyhzZWxmLCBwcm9wLCBhcmdzKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMucHVzaChwYXJlbnRDbXAuJHdhdGNoKCcqJywgZnVuY3Rpb24gKHByb3AsIGFyZ3MpIHtcbiAgICAgICAgICAgIHNlbGYuJCRvYnNlcnZlci5maXJlQ2hhbmdlZChzZWxmLCBwcm9wLCBhcmdzKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgICRkaXNwb3NlKGRlc3Ryb3lGcm9tRWxlbWVudCkge1xuICAgICAgICAvLyByZW1vdmUgdmlydHVhbCBub2RlIGZpcnN0IGluIGNhc2UgaXQgdHJpZ2dlcnMgcGFyZW50IGNvbXBvbmVudCBkZXN0cm95XG4gICAgICAgIHRoaXMuJHVubW91bnQoKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGVzdHJveSkpIHtcbiAgICAgICAgICAgIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kJGRldGVjdFRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLiQkZGV0ZWN0VGltZW91dCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQkZGlzcG9zZXJzLmZvckVhY2goZnVuY3Rpb24gKGRpc3Bvc2VyKSB7XG4gICAgICAgICAgICBkaXNwb3Nlci5jYWxsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGNsZWFyVmlldygpO1xuICAgICAgICB0aGlzLiQkb2JzZXJ2ZXIuZGVzdHJveSgpO1xuXG4gICAgICAgIGlmIChkZXN0cm95RnJvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJCRlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLiQkY2hpbGREaXJlY3RpdmVzID0gbnVsbDtcbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kZGlzcG9zZSgpO1xuXG4gICAgICAgIC8vIGRlc3Ryb3kgdmlydHVhbCBub2RlIGluIHRoZSBlbmQgYmVjYXVzZSBpdCBtYXkgYmluZHMgbG9naWMgYWJvdXQgZGVzdHJveVxuICAgICAgICBpZiAodGhpcy4kJGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kJGVsZW1lbnQuZGlzcG9zZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuJCRlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlIHtcbiAgICBnZXQgJGh0bWxFbGVtZW50KCkge1xuICAgICAgICBpZiAodGhpcy4kZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudC5odG1sRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldCAkY29tcG9uZW50KCkge1xuICAgICAgICBpZiAodGhpcy4kZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudC5vd25lckNvbXBvbmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldCAkc2NvcGUoKSB7XG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRiaW5kaW5nLnNjb3BlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIERpcmVjdGl2ZS5jb25zdHJ1Y3QuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29uc3RydWN0KCkge1xuICAgICAgICAvLyBwcml2YXRlIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy4kJGRpc3Bvc2VycyA9IFtdO1xuICAgICAgICB0aGlzLiQkY2FuY2VsQW5pbWF0aW9uVG9rZW4gPSBmYWxzZTtcbiAgICAgICAgLy8gcHJpdmF0ZSBwcm9wZXJ0aWVzXG5cbiAgICAgICAgLy8gcHVibGljIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy4kb3V0cHV0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJGJpbmRpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLiRhdHRyID0gbnVsbDtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuJHByaW9yaXR5ID0gMDtcbiAgICAgICAgdGhpcy4kZWxlbWVudGxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAvLyBwdWJsaWMgcHJvcGVydGllc1xuXG4gICAgICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMpO1xuICAgIH1cblxuICAgICRob29rcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9uSW5pdDogJycsXG4gICAgICAgICAgICBvbkNvbXBpbGU6ICcnLFxuICAgICAgICAgICAgb25JbnNlcnQ6ICcnLFxuICAgICAgICAgICAgb25EZXRlY3Q6ICcnLFxuICAgICAgICAgICAgb25VcGRhdGU6ICcnLFxuICAgICAgICAgICAgb25EZXN0cm95OiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgICRnZXRNZXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGEgfHwge307XG4gICAgfVxuXG4gICAgJHNldE1ldGEodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kJG1ldGEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAkYmluZE5vZGUobm9kZSkge1xuICAgICAgICB0aGlzLiRhdHRyID0gbm9kZTtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9IG5vZGUub3duZXJFbGVtZW50O1xuICAgIH1cblxuICAgICRzZXRCaW5kaW5nKGJpbmRpbmcpIHtcbiAgICAgICAgdGhpcy4kYmluZGluZyA9IGJpbmRpbmc7XG4gICAgfVxuXG4gICAgJGNvbXBpbGUob3B0aW9ucykge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uQ29tcGlsZSkpIHtcbiAgICAgICAgICAgIHRoaXMub25Db21waWxlLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkaW5zZXJ0KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkluc2VydCkpIHtcbiAgICAgICAgICAgIHRoaXMub25JbnNlcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25FbnRlcikgfHwgdXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uTGVhdmUpKSB7XG4gICAgICAgICAgICB0aGlzLiRyZXF1ZXN0QW5pbWF0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkaXNMb2FkZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRodG1sRWxlbWVudC5jbGllbnRXaWR0aCA+IDAgJiYgdGhpcy4kaHRtbEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gMDtcbiAgICB9XG5cbiAgICAkcmVxdWVzdEFuaW1hdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIHF1ZXJ5KCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuJCRjYW5jZWxBbmltYXRpb25Ub2tlbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGYuJGlzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYuJGVsZW1lbnRsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZWxlbWVudGxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9uRW50ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vbkVudGVyLmNhbGwoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi4kZWxlbWVudGxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbGVtZW50bG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9uTGVhdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vbkxlYXZlLmNhbGwoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuICAgIH1cblxuICAgICRjYW5jZWxBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuJCRjYW5jZWxBbmltYXRpb25Ub2tlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgJGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRldGVjdCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRGV0ZWN0LmNhbGwodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kYmluZGluZy5kZXRlY3QoKSkge1xuICAgICAgICAgICAgdGhpcy4kdXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkdXBkYXRlKCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uVXBkYXRlKSkge1xuICAgICAgICAgICAgdGhpcy5vblVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGdldEF0dHJWYWx1ZShhdHRyTmFtZSkge1xuICAgICAgICB2YXIgYXR0ck5vZGUgPSB0aGlzLiRlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyTmFtZSk7XG5cbiAgICAgICAgaWYgKGF0dHJOb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhdHRyTm9kZS5iaW5kaW5nLnZhbHVlO1xuICAgIH1cblxuICAgICRkaXNwb3NlKGRlc3Ryb3lGcm9tQXR0cikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy4kY2FuY2VsQW5pbWF0aW9uKCk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlc3Ryb3lGcm9tQXR0cikge1xuICAgICAgICAgICAgdGhpcy4kYXR0ciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMuZm9yRWFjaChmdW5jdGlvbiAoZGlzcG9zZXIpIHtcbiAgICAgICAgICAgIGRpc3Bvc2VyLmNhbGwoc2VsZik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGJpbmRpbmcgPSBudWxsO1xuICAgIH1cblxuICAgICRkZXN0cm95KCkge1xuICAgICAgICB0aGlzLiRkaXNwb3NlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuJGF0dHIgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kYXR0ci5kaXNwb3NlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy4kYXR0ciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBGaWx0ZXIuY29uc3RydWN0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XG4gICAgfVxuXG4gICAgJGhvb2tzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb25Jbml0OiAnJyxcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXRNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgJGV4ZWN1dGUoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25FeGVjdXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25FeGVjdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgdHlwZUNvbnN0LCBpbmplY3RvciwgSW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UnO1xuXG5mdW5jdGlvbiBuYW1lc3BhY2UobnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQobmFtZSwgZGVmKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlyZWN0aXZlOiBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XG4gICAgICAgICAgICAgICAgZGVmID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkluc2VydDogZGVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU6IGRlZlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmUobmFtZSwgZGVmKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZTogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2UobmFtZSwgZGVmKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XG4gICAgICAgICAgICAgICAgZGVmID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkV4ZWN1dGU6IGRlZlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIobmFtZSwgZGVmKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudChuYW1lLCBkZWYpIHtcbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuY29tcG9uZW50LFxuICAgICAgICBzdXBlckNsYXNzOiBtYWtlQ29uc3RydWN0b3IoQ29tcG9uZW50KVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkaXJlY3RpdmUobmFtZSwgZGVmKSB7XG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xuICAgICAgICBkZWYgPSB7XG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgb25JbnNlcnQ6IGRlZixcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogZGVmXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LmRpcmVjdGl2ZSxcbiAgICAgICAgc3VwZXJDbGFzczogbWFrZUNvbnN0cnVjdG9yKERpcmVjdGl2ZSlcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKG5hbWUsIGRlZikge1xuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRlZikpIHtcbiAgICAgICAgZGVmID0ge1xuICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgIG9uRXhlY3V0ZTogZGVmXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LmZpbHRlcixcbiAgICAgICAgc3VwZXJDbGFzczogbWFrZUNvbnN0cnVjdG9yKEZpbHRlcilcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2VydmljZShuYW1lLCBkZWYpIHtcbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3Quc2VydmljZSxcbiAgICAgICAgc3VwZXJDbGFzczogbWFrZUNvbnN0cnVjdG9yKFNlcnZpY2UpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzQ29tcG9uZW50KG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0aXZlKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEaXJlY3RpdmU7XG59XG5cbmZ1bmN0aW9uIGlzRmlsdGVyKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBGaWx0ZXI7XG59XG5cbmZ1bmN0aW9uIGlzU2VydmljZShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgU2VydmljZTtcbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwKHNlbGVjdG9yT3JFbGVtZW50KSB7XG4gICAgdmFyIGVsZW1lbnQsIHRwbDtcblxuICAgIGlmICh1dGlscy5pc1N0cmluZyhzZWxlY3Rvck9yRWxlbWVudCkpIHtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xuICAgIH1cblxuICAgIHRwbCA9IGVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgbmV3IENvbXBvbmVudCh7XG4gICAgICAgIHRlbXBsYXRlOiB0cGxcbiAgICB9KS4kbW91bnQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VDb25zdHJ1Y3RvcihjbHMpIHtcbiAgICBmdW5jdGlvbiBmKCkge1xuICAgICAgICBjbHMuY29uc3RydWN0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgZi5wcm90b3R5cGUgPSBjbHMucHJvdG90eXBlO1xuICAgIHJldHVybiBmO1xufVxuXG5leHBvcnQge1xuICAgIHR5cGVDb25zdCxcbiAgICBpbmplY3RvcixcbiAgICBJbmplY3RvcixcbiAgICBDb21wb25lbnQsXG4gICAgRGlyZWN0aXZlLFxuICAgIEZpbHRlcixcbiAgICBTZXJ2aWNlLFxuICAgIGlzQ29tcG9uZW50LFxuICAgIGlzRGlyZWN0aXZlLFxuICAgIGlzRmlsdGVyLFxuICAgIGlzU2VydmljZSxcbiAgICBuYW1lc3BhY2UsXG4gICAgY29tcG9uZW50LFxuICAgIGRpcmVjdGl2ZSxcbiAgICBmaWx0ZXIsXG4gICAgc2VydmljZSxcbiAgICBib290c3RyYXBcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5L21lc3NhZ2UnO1xuXG52YXIgdHlwZUNvbnN0ID0ge1xuICAgIGZpbHRlcjogJ2ZpbHRlcicsXG4gICAgc2VydmljZTogJ3NlcnZpY2UnLFxuICAgIGNvbXBvbmVudDogJ2NvbXBvbmVudCcsXG4gICAgZGlyZWN0aXZlOiAnZGlyZWN0aXZlJ1xufTtcblxudmFyIG5hbWVQYXR0ZXJuID0gL15bYS16X1xcJF1bXFx3XFwkLV0qL2k7XG5cbmNsYXNzIEluamVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB7fTtcbiAgICAgICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzID0ge307XG4gICAgICAgIHRoaXMuaW5zQ29udGFpbmVyID0ge307XG4gICAgfVxuXG4gICAgZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyW2NvbnRyYWN0VHlwZV07XG4gICAgfVxuXG4gICAgZ2V0SW5zdGFuY2VzKGNvbnRyYWN0VHlwZSkge1xuICAgICAgICBpZiAoIXRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV0pIHtcbiAgICAgICAgICAgIHRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnNDb250YWluZXJbY29udHJhY3RUeXBlXTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcihjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAoc2VsZWN0b3IuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGNoYXJhY3RlciBcIi5cIicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1hcHBpbmcgPSB0aGlzLmdldE1hcHBpbmcoY29udHJhY3RUeXBlKTtcblxuICAgICAgICBpZiAobWFwcGluZ1tzZWxlY3Rvcl0gPT0gbnVsbCkge1xuICAgICAgICAgICAgbWFwcGluZ1tzZWxlY3Rvcl0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gbWFwcGluZ1tzZWxlY3Rvcl0uZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YS5uYW1lc3BhY2UgPT09IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc2VsZWN0b3IgKyAnIGlzIGV4aXN0IHVuZGVyIG5hbWVzcGFjZSAnICsgbWF0Y2hlc1swXS5wcm90b3R5cGUuJCRtZXRhLm5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXBwaW5nW3NlbGVjdG9yXS5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNvbXBvbmVudChzZWxlY3RvciwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0eXBlQ29uc3QuY29tcG9uZW50LCBzZWxlY3RvciwgY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHR5cGVDb25zdC5kaXJlY3RpdmUsIHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgY29udGFpbnMoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgaWdub3JlQ2FzZSkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3JzLCBtYXBwaW5nID0gdGhpcy5nZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSk7XG4gICAgICAgIHZhciBzZWdtZW50cyA9IHNlbGVjdG9yLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAnJztcblxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWdtZW50cy5wb3AoKTtcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShtYXBwaW5nLCBzZWxlY3RvciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBtYXBwaW5nW3NlbGVjdG9yXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UobWV0YS5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnRhaW5zQ29tcG9uZW50KHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5zKHR5cGVDb25zdC5jb21wb25lbnQsIHNlbGVjdG9yLCB0cnVlKTtcbiAgICB9XG5cbiAgICBjb250YWluc0RpcmVjdGl2ZShzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWlucyh0eXBlQ29uc3QuZGlyZWN0aXZlLCBzZWxlY3RvciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZ2V0KGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGlnbm9yZUNhc2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xuICAgICAgICB2YXIgc2VnbWVudHMgPSBzZWxlY3Rvci5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbmFtZXNwYWNlID0gJyc7XG5cbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yID0gc2VnbWVudHMucG9wKCk7XG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBzZWdtZW50cy5qb2luKCcuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkobWFwcGluZywgc2VsZWN0b3IsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gbWFwcGluZ1tzZWxlY3Rvcl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb250cmFjdFR5cGUgKyAnICcgKyBzZWxlY3RvciArICcgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgY29uc3RydWN0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbWV0YSA9IGl0ZW0ucHJvdG90eXBlLiQkbWV0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YS5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKG1ldGEubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc2VsZWN0b3IgKyAnIGlzIG5vdCBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZhciBuYW1lc3BhY2VzID0gY29uc3RydWN0b3JzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hbWVzcGFjZSAnICsgbmFtZXNwYWNlcy5qb2luKCd8JykgKyAnIGFsbCBoYXZlICcgKyBzZWxlY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3JzWzBdO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmNvbXBvbmVudCwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGdldERpcmVjdGl2ZShzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGdldEZpbHRlcihzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmZpbHRlciwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGdldFNlcnZpY2Uoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5zZXJ2aWNlLCBzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY3JlYXRlKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5nZXQoY29udHJhY3RUeXBlLCBzZWxlY3RvciksIGluc3RhbmNlO1xuXG4gICAgICAgIHN3aXRjaCAoY29udHJhY3RUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5jb21wb25lbnQ6XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudChjb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5kaXJlY3RpdmU6XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZURpcmVjdGl2ZShjb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5maWx0ZXI6XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUZpbHRlcihjb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5zZXJ2aWNlOlxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVTZXJ2aWNlKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3IoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wb25lbnQoY29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldENvbXBvbmVudChjb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZURpcmVjdGl2ZShjb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0RGlyZWN0aXZlKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlRmlsdGVyKGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRGaWx0ZXIoY29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVTZXJ2aWNlKGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSwgc2VydmljZXMgPSB0aGlzLmdldEluc3RhbmNlcyh0eXBlQ29uc3Quc2VydmljZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldFNlcnZpY2UoY29uc3RydWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhLm5vblNoYXJlZCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHNlcnZpY2VzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2YgY29uc3RydWN0b3I7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHJlc3VsdFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICBzZXJ2aWNlcy5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBzZXJ2aWNlKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNlcnZpY2Uoc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGdldFdhaXRpbmdUb0V4dGVuZHMoY29udHJhY3RUeXBlKSB7XG4gICAgICAgIGlmICghdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0pIHtcbiAgICAgICAgICAgIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdO1xuICAgIH1cblxuICAgIHNldFdhaXRpbmdUb0V4dGVuZHMoY29udHJhY3RUeXBlLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNoZWNrU2VsZWN0b3Ioc2VsZWN0b3IsIGNvbnRyYWN0VHlwZSkge1xuICAgICAgICBpZiAobmFtZVBhdHRlcm4udGVzdChzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHZhciBjb25zdHJ1Y3Rvck5hbWUgPSAnJztcbiAgICAgICAgICAgIHZhciBzZWdtZW50cyA9IHNlbGVjdG9yLnNwbGl0KCctJyk7XG5cbiAgICAgICAgICAgIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gdXRpbHMudXBwZXJjYXNlKHNlZ21lbnRbMF0pICsgc2VnbWVudC5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc3dpdGNoIChjb250cmFjdFR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5jb21wb25lbnQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSAnQ29tcG9uZW50JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuZGlyZWN0aXZlOlxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ0RpcmVjdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmZpbHRlcjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdGaWx0ZXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5zZXJ2aWNlOlxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ1NlcnZpY2UnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzZWxlY3RvciArICdpcyBub3QgYSB2YWxpZCBuYW1lJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidWlsZENvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lID0gdGhpcy5jaGVja1NlbGVjdG9yKHNlbGVjdG9yLCBvcHRpb25zLmNvbnRyYWN0VHlwZSksXG4gICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzID0gc2VsZi5nZXRXYWl0aW5nVG9FeHRlbmRzKG9wdGlvbnMuY29udHJhY3RUeXBlKSxcbiAgICAgICAgICAgIG9uQ29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yLnN1cGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihtZXRhLmNvbnN0cnVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0YS5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzZW5nZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgRnVuY3Rpb24oJ29uQ29uc3RydWN0JywgJ1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbiAnICsgY29uc3RydWN0b3JOYW1lICsgJygpe29uQ29uc3RydWN0LmNhbGwodGhpcyk7fTsnKShvbkNvbnN0cnVjdCk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ob3B0aW9ucy5zdXBlckNsYXNzKSkge1xuICAgICAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3Rvciwgb3B0aW9ucy5zdXBlckNsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGEuc2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuICAgICAgICAvLyBhcHBseSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhtZXRhLmV4dGVuZHMpKSB7XG4gICAgICAgICAgICBpZiAoaW5qZWN0b3IuY29udGFpbnMob3B0aW9ucy5jb250cmFjdFR5cGUsIG1ldGEuZXh0ZW5kcykpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VwZXJPbmUgPSBpbmplY3Rvci5nZXQob3B0aW9ucy5jb250cmFjdFR5cGUsIG1ldGEuZXh0ZW5kcyk7XG4gICAgICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yLCBzdXBlck9uZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBzdXBlck5hbWU6IG1ldGEuZXh0ZW5kcyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChzdXBlck9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yLCBzdXBlck9uZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlbWFpbkNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBjb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBleHRlbmRNZXRhKG1ldGEsIHN1cGVyT25lKSB7XG4gICAgICAgICAgICBpZiAoc3VwZXJPbmUucHJvdG90eXBlLiQkbWV0YSAmJiBzdXBlck9uZS5wcm90b3R5cGUuJCRtZXRhLnByb3RlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihvcHRpb25zLmNvbnRyYWN0VHlwZSArICc6ICcgKyBtZXRhLmV4dGVuZHMgKyAnIGlzIHByb3RlY3RlZCwgaXQgaXMgbm90IGFsbG93ZWQgdG8gZXh0ZW5kIScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3VwZXJNZXRhID0gc3VwZXJPbmUucHJvdG90eXBlLiQkbWV0YTtcbiAgICAgICAgICAgIHZhciBjb3B5ID0gdXRpbHMuY29weSh0cnVlLCBzdXBlck1ldGEsIGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhKG9iaiA9PT0gc3VwZXJNZXRhICYmIChrZXkgPT09ICdjb25zdHJ1Y3QnIHx8IGtleSA9PT0gJ21ldGhvZHMnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0cnVlLCBjb3B5LCBtZXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbWFpbkNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpIHtcbiAgICAgICAgICAgIGlmIChzdXBlck9uZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG1ldGEubWV0aG9kcykpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5leHRlbmQoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRhLm1ldGhvZHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnJlZ2lzdGVyQ29uc3RydWN0b3Iob3B0aW9ucy5jb250cmFjdFR5cGUsIHNlbGVjdG9yLCBjb25zdHJ1Y3RvciwgbWV0YSk7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIGFueSBjb21wb25lbnQgZXh0ZW5kcyBjdXJyZW50IGNvbXBvbmVudFxuICAgICAgICAgICAgdmFyIHdhaXRpbmdUb0V4dGVuZHMyID0gW10sIGZ1bGxTZWxlY3RvciA9IG1ldGEubmFtZXNwYWNlICsgJy4nICsgc2VsZWN0b3I7XG4gICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zdXBlck5hbWUgPT09IGZ1bGxTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNhbGxiYWNrLmNhbGwobnVsbCwgY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kczIucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYuc2V0V2FpdGluZ1RvRXh0ZW5kcyhvcHRpb25zLmNvbnRyYWN0VHlwZSwgd2FpdGluZ1RvRXh0ZW5kczIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ29uc3RydWN0b3IoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IsIG1ldGEpIHtcbiAgICAgICAgdmFyIHN1cGVyTWV0YSA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGE7XG5cbiAgICAgICAgaWYgKHN1cGVyTWV0YSAmJiBzdXBlck1ldGEucHJvdGVjdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3RUeXBlICsgJzogJyArIG1ldGEuZXh0ZW5kcyArICcgaXMgcHJvdGVjdGVkLCBpdCBpcyBub3QgYWxsb3dlZCB0byBleHRlbmQhJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodHJ1ZSwgc3VwZXJNZXRhLCBmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiAhKG9iaiA9PT0gc3VwZXJNZXRhICYmIChrZXkgPT09ICdjb25zdHJ1Y3QnIHx8IGtleSA9PT0gJ21ldGhvZHMnKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1ldGEgPSB1dGlscy5tZXJnZSh0cnVlLCBjb3B5LCBtZXRhKTtcblxuICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhID0gbWV0YTtcblxuICAgICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgaWYgaXQgaXMgZ2xvYmFsXG4gICAgICAgIGlmICghbWV0YS5sb2NhbCkge1xuICAgICAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXIoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5qZWN0U2VydmljZXMoaW5zdGFuY2UpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBtZXRhID0gaW5zdGFuY2UuJGdldE1ldGEoKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QobWV0YS5pbmplY3QpKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG1ldGEuaW5qZWN0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnN0YW5jZSwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcml2YXRlS2V5ID0gJyQkJyArIGtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlW3ByaXZhdGVLZXldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZVtwcml2YXRlS2V5XSA9IHNlbGYuY3JlYXRlU2VydmljZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZVtwcml2YXRlS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBpbmplY3RvciA9IG5ldyBJbmplY3RvcigpO1xuXG5leHBvcnQgeyB0eXBlQ29uc3QsIEluamVjdG9yLCBpbmplY3RvciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuaW1wb3J0IHtpbmplY3Rvcn0gZnJvbSAnLi9pbmplY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgU2VydmljZS5jb25zdHJ1Y3QuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29uc3RydWN0KCkge1xuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcbiAgICB9XG5cbiAgICAkaG9va3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxuICAgICAgICAgICAgb25EZXN0cm95OiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgICRnZXRNZXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGEgfHwge307XG4gICAgfVxuXG4gICAgJHNldE1ldGEodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kJG1ldGEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=