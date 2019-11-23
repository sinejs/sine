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




var TRANSITION = 'transition';
var ANIMATION = 'animation';
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
var transformRE = /\b(transform|all)(,|$)/;
var AnimateService = (_dec = Object(_decorator_service__WEBPACK_IMPORTED_MODULE_2__["service"])({
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
}(_view_service__WEBPACK_IMPORTED_MODULE_1__["Service"])) || _class);

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



var Animation = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);


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

/***/ "./src/directive/bind-cmp-options.js":
/*!*******************************************!*\
  !*** ./src/directive/bind-cmp-options.js ***!
  \*******************************************/
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



var BindCmpOptionsDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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
}(_view_directive__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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
      var index = 0;
      _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](self.dataItems, function (item, key) {
        var cmpItem = self.getCmpItem(item);

        if (cmpItem == null) {
          cmpItem = new _view_component__WEBPACK_IMPORTED_MODULE_3__["Component"]({
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

/***/ "./src/directive/style/class-even.js":
/*!*******************************************!*\
  !*** ./src/directive/style/class-even.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/directive/style/class.js");
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



var ClassEvenDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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



var ClassOddDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../view/directive */ "./src/view/directive.js");
/* harmony import */ var _decorator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../decorator/directive */ "./src/decorator/directive.js");
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




var ClassDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_2__["directive"])({
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
      this.$htmlElement.classList.forEach(function (item) {
        this.$htmlElement.classList.remove(item);
      });
      this.initialClassList.forEach(function (item) {
        this.$htmlElement.classList.add(item);
      });
      arr.forEach(function (item) {
        this.$htmlElement.classList.add(item);
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
}(_view_directive__WEBPACK_IMPORTED_MODULE_1__["Directive"])) || _class);


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



var StyleEvenDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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



var StyleOddDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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




var StyleDirective = (_dec = Object(_decorator_directive__WEBPACK_IMPORTED_MODULE_1__["directive"])({
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
/*! exports provided: namespace, injector, component, directive, filter, service, isComponent, isDirective, isFilter, isService, bootstrap, compile, compute, parse, parseExp, parseAssignment, forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded, queryElementState, addClass, removeClass, httpGet, httpPost, Messenger, MessengerBus, isMessenger, Animation, ClassDirective, StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility/index.js");
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFormData", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["containsStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["hasProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["getProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["setProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["orderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderByDescending", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["orderByDescending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["toNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["getChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["clearChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["replaceNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["removeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["removeNodeBetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["insertNodeAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementLoaded", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["queryElementLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementUnloaded", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["queryElementUnloaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryElementState", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["queryElementState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["removeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "httpGet", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["httpGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "httpPost", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["httpPost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["Messenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessengerBus", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["MessengerBus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMessenger", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isMessenger"]; });

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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_4__["ClassDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_4__["StyleDirective"]; });

/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation */ "./src/animation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _animation__WEBPACK_IMPORTED_MODULE_5__["Animation"]; });








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

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ProgramNode, AstNode);

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

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ExpressionStatementNode, AstNode);

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

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](AssignmentExpressionNode, AstNode);

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

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ConditionalExpressionNode, AstNode);

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

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](LogicalExpressionNode, AstNode);

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

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](BinaryExpressionNode, AstNode);

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

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](UnaryExpressionNode, AstNode);

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

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](LiteralNode, AstNode);

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

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](CallExpressionNode, AstNode);

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

MemberExpressionNode.prototype.compute = function (scope, options, context) {
  var obj = this.object.compute(scope, options);

  if (obj == null && this.object.allowNull) {
    obj = new _null_object__WEBPACK_IMPORTED_MODULE_2__["NullObject"]();
  }

  if (this.computed) {
    var prop = this.property.compute(scope, options, context);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"](options.members)) {
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

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](IdentifierNode, AstNode);

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

PropertyNode.prototype.compute = function (scope, options) {
  return {
    key: this.key.compute(scope, options, {
      propertyKey: true
    }),
    value: this.value.compute(scope, options)
  };
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ObjectExpressionNode, AstNode);

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
/* harmony import */ var _utility_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/http */ "./src/utility/http.js");
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
        this.promiseCache[url] = Object(_utility_http__WEBPACK_IMPORTED_MODULE_0__["httpGet"])(url).then(function (res) {
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
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded, queryElementState, addClass, removeClass, httpGet, httpPost, Messenger, MessengerBus, isMessenger */
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
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove */
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
/* harmony import */ var _core_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/observer */ "./src/core/observer.js");
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
      this.$$observer = new _core_observer__WEBPACK_IMPORTED_MODULE_1__["Observer"]();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbmUvLi9zcmMvYW5pbWF0aW9uL2FuaW1hdGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9hbmltYXRpb24vYW5pbWF0aW9uLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvYW5pbWF0aW9uL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2NkYXRhc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZG9jdHlwZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2ZyYWdtZW50LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9oYW5kbGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL3Byb3h5LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS90ZXh0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RlY29yYXRvci9zZXJ2aWNlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2JpbmQtY21wLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvYmluZC1jbXAuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvYmluZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9lbWJlZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9oaWRlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2lmLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL25hbWUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvcmVwZWF0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9kaXNhYmxlZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9yZWFkb25seS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zZWxlY3RlZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy1ldmVuLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL2NsYXNzLW9kZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9zdHlsZS1ldmVuLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLW9kZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9zdHlsZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC1kZWZhdWx0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2gtd2hlbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9wYXJzZXIvaHRtbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9odG1sLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9sZXhlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9udWxsLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvc2VydmljZS9tb2RlbC1vcHRpb25zLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvc2VydmljZS90ZW1wbGF0ZS1jYWNoZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvaHR0cC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L25vZGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy91dGlsaXR5L3V0aWxzLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvZmlsdGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvaW5qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L3NlcnZpY2UuanMiXSwibmFtZXMiOlsiVFJBTlNJVElPTiIsIkFOSU1BVElPTiIsInRyYW5zaXRpb25Qcm9wIiwidHJhbnNpdGlvbkVuZEV2ZW50IiwiYW5pbWF0aW9uUHJvcCIsImFuaW1hdGlvbkVuZEV2ZW50IiwidHJhbnNmb3JtUkUiLCJBbmltYXRlU2VydmljZSIsInNlcnZpY2UiLCJuYW1lc3BhY2UiLCJzZWxlY3RvciIsInZub2RlIiwiZG9FbnRlciIsImVsIiwiaHRtbEVsZW1lbnQiLCJ1dGlscyIsIl9sZWF2ZUNiIiwiY2FuY2VsbGVkIiwiX2VudGVyQ2IiLCJub2RlVHlwZSIsImFuaW1hdGlvbiIsInJlc29sdmVBbmltYXRpb25Db250ZXh0IiwiZGF0YSIsInJlc29sdmVBbmltYXRpb24iLCJzZWxmIiwidHlwZSIsImVudGVyQ2xhc3MiLCJlbnRlclRvQ2xhc3MiLCJlbnRlckFjdGl2ZUNsYXNzIiwiZHVyYXRpb24iLCJleHBsaWNpdEVudGVyRHVyYXRpb24iLCJlbnRlciIsImNiIiwib25jZSIsInJlbW92ZUFuaW1hdGlvbkNsYXNzIiwiZW50ZXJDYW5jZWxsZWQiLCJhZnRlckVudGVyIiwiYmVmb3JlRW50ZXIiLCJhZGRBbmltYXRpb25DbGFzcyIsIm5leHRGcmFtZSIsImlzVmFsaWREdXJhdGlvbiIsInNldFRpbWVvdXQiLCJ3aGVuQW5pbWF0aW9uRW5kcyIsImRvTGVhdmUiLCJsZWF2ZUNsYXNzIiwibGVhdmVUb0NsYXNzIiwibGVhdmVBY3RpdmVDbGFzcyIsImV4cGxpY2l0TGVhdmVEdXJhdGlvbiIsImxlYXZlIiwibGVhdmVDYW5jZWxsZWQiLCJhZnRlckxlYXZlIiwiZGVsYXlMZWF2ZSIsInBlcmZvcm1MZWF2ZSIsImJlZm9yZUxlYXZlIiwiY29uZmlnIiwicmVzIiwiY3NzIiwiYXV0b0Nzc0FuaW1hdGlvbiIsIm5hbWUiLCJmbiIsImNhbGxlZCIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xzIiwiYW5pbWF0aW9uQ2xhc3NlcyIsIl9hbmltYXRpb25DbGFzc2VzIiwiaW5kZXhPZiIsInB1c2giLCJleHBlY3RlZFR5cGUiLCJyZWYiLCJnZXRBbmltYXRpb25JbmZvIiwidGltZW91dCIsInByb3BDb3VudCIsImV2ZW50IiwiZW5kZWQiLCJlbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25FbmQiLCJlIiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRGVsYXlzIiwic3BsaXQiLCJ0cmFuc2l0aW9uRHVyYXRpb25zIiwidHJhbnNpdGlvblRpbWVvdXQiLCJnZXRUaW1lb3V0IiwiYW5pbWF0aW9uRGVsYXlzIiwiYW5pbWF0aW9uRHVyYXRpb25zIiwiYW5pbWF0aW9uVGltZW91dCIsImxlbmd0aCIsIk1hdGgiLCJtYXgiLCJoYXNUcmFuc2Zvcm0iLCJ0ZXN0IiwiZGVsYXlzIiwiZHVyYXRpb25zIiwiY29uY2F0IiwibWFwIiwiZCIsImkiLCJ0b01zIiwicyIsIk51bWJlciIsInNsaWNlIiwidmFsdWUiLCJpc05hTiIsImVsZW1lbnQiLCJhbmltYXRpb25zIiwiZ2V0RGlyZWN0aXZlcyIsImZpbHRlciIsImRpciIsIlNlcnZpY2UiLCJBbmltYXRpb24iLCJkaXJlY3RpdmUiLCIkcHJpb3JpdHkiLCJEaXJlY3RpdmUiLCJldmVudFRleHQiLCJkb21FdmVudHMiLCJBdHRyTm9kZSIsIlZOb2RlVHlwZSIsImF0dHJpYnV0ZSIsInF1b3RlIiwib3JpZ2luIiwiaXNFdmVudCIsImlzQmluZGluZyIsImlzRG9tRXZlbnQiLCJpc0RpcmVjdGl2ZSIsIm93bmVyRWxlbWVudCIsIm93bmVyQ29tcG9uZW50IiwiYmluZGluZyIsIkJpbmRpbmciLCJwcmlvcml0eSIsImtleSIsIm5vZGVWYWx1ZSIsImNvbXBpbGUiLCJvcHRpb25zIiwiYWN0aW9uIiwib2JzZXJ2ZSIsIm5vZGVOYW1lIiwic3RhcnRzV2l0aCIsInN1YnN0ciIsInNldE91dHB1dCIsImJpbmQiLCJjb250YWluc0RpcmVjdGl2ZSIsImNyZWF0ZURpcmVjdGl2ZSIsIiRiaW5kTm9kZSIsIiRvdXRwdXQiLCJFcnJvciIsIiRjb21waWxlIiwic2NvcGUiLCJzZXRTY29wZSIsImNvbXB1dGUiLCJsb2NhbHMiLCIkZXZlbnQiLCIkYXJncyIsIiRlbGVtZW50IiwiJGxpc3RlbiIsImFyZ3MiLCIkJGNoaWxkRGlyZWN0aXZlcyIsIiRzZXRCaW5kaW5nIiwiJGhhc0F0dHIiLCIkaW5pdEF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJ1cGRhdGUiLCJoYXNDaGFuZ2UiLCIkZGV0ZWN0IiwiZGV0ZWN0IiwiJHVwZGF0ZSIsIiRzZXRBdHRyIiwiJGluc2VydCIsIiQkbWV0YSIsImlzRnJvbURpcmVjdGl2ZSIsImRlc3Ryb3kiLCIkZGVzdHJveSIsIiRkaXNwb3NlIiwiZGlzcG9zZSIsIlZOb2RlIiwidGV4dCIsImNkYXRhU2VjdGlvbiIsImVudGl0eVJlZmVyZW5jZSIsImVudGl0eSIsInByb2Nlc3NpbmdJbnN0cnVjdGlvbiIsImNvbW1lbnQiLCJkb2N1bWVudCIsImRvY3VtZW50VHlwZSIsImRvY3VtZW50RnJhZ21lbnQiLCJub3RhdGlvbiIsImNvbm5lY3Rpb24iLCJjaGlsZE5vZGVzIiwicGFyZW50Tm9kZSIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsIm93bmVyRG9jdW1lbnQiLCJjaGlsZCIsImZvckVhY2giLCJpbmRleCIsIiRidWlsZFNpYmxpbmciLCJyZW1vdmVDaGlsZCIsIiRyZW1vdmUiLCIkY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwiY29tcGlsZU9wdGlvbnMiLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwic3BsaWNlIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJub3RpZnlDb21waWxlZCIsImxpbmsiLCJub3RpZnlMaW5rZWQiLCJFeHBOb2RlIiwib2xkVmFsdWUiLCJpc0V4cCIsInNlZ21lbnRzIiwicmlnaHRTdHIiLCJvdXRwdXQiLCJ1bndhdGNoZXMiLCJjaGFuZ2UiLCJNZXNzZW5nZXIiLCJleHAiLCJsZWZ0U3RyIiwicGF0dGVybiIsImxhc3RJbmRleCIsIm1hdGNoIiwiZXhlYyIsInN1YnN0cmluZyIsInNlZ21lbnQiLCJhc3NpZ25tZW50IiwicGFyc2VBc3NpZ25tZW50Iiwib2JqIiwicHJvcCIsInRvUHJveHkiLCIkd2F0Y2giLCJkZWZlciIsImZpcmUiLCJjYW5jZWxUaW1lb3V0IiwidGltZW91dElkIiwiY2FsbCIsImNsZWFyVGltZW91dCIsImxpc3RlbiIsIm9uIiwib2ZmIiwidW53YXRjaCIsIkNEYXRhU2VjdGlvbk5vZGUiLCJDb21tZW50Tm9kZSIsImNyZWF0ZUNvbW1lbnQiLCJDb25uZWN0aW9uTm9kZSIsImxpbmtlciIsIm9uSW5zZXJ0Iiwib25EZXRlY3QiLCJvbkhhc0NoYW5nZSIsIm9uVXBkYXRlIiwib25EZXN0cm95IiwiRG9jdW1lbnRUeXBlTm9kZSIsIkRvY3VtZW50Tm9kZSIsIkVsZW1lbnROb2RlIiwiYXR0cmlidXRlcyIsImNvbXBvbmVudCIsInNlbGZDbG9zZWQiLCJpc0NvbXBvbmVudCIsImF0dHIiLCJtYXRjaGVzIiwiYmVsb25nVG8iLCJzZXRWYWx1ZSIsImF0dHJUcGwiLCJjaGlsZFRwbCIsImdldE91dGVyVHBsIiwidHBsIiwicGFyc2UiLCJjbGVhckNoaWxkTm9kZXMiLCJyZXN1bHQiLCJzb21lIiwiZ2V0RGlyZWN0aXZlIiwiaXRlbSIsImNvbnRhaW5zQ29tcG9uZW50IiwiY3JlYXRlRWxlbWVudCIsIiRjcmVhdGVDaGlsZENtcCIsIiRpbml0QXR0ckRvbmUiLCIkbW91bnQiLCJpc0Zyb21Db21wb25lbnQiLCJyZW1vdmVIdG1sRWxlbWVudCIsIkRvY3VtZW50RnJhZ21lbnROb2RlIiwicHJvcENoYW5naW5nTXNnIiwicHJvcENoYW5nZWRNc2ciLCJ0YXJnZXRLZXkiLCJnZXRUYXJnZXQiLCJpc09iamVjdCIsIkdldFByb3BlcnR5SGFuZGxlciIsImRlZXBQcm94eSIsInZhcmlhYmxlcyIsImZ1bGxUYXJnZXRLZXkiLCJmdWxsS2V5IiwiUHJveHkiLCJleGlzdGVkIiwiU2V0UHJvcGVydHlIYW5kbGVyIiwiaXNBcnJheSIsInZhbGlkYXRpb24iLCJ2YWxpZCIsIm5ld1ZhbHVlIiwiQWNjZXNzUHJvcGVydHlIYW5kbGVyIiwiUHJvcGVydHlPYnNlcnZlciIsInBsYWluTWFwIiwiTWFwIiwicmVnZXhNYXAiLCJpc1JlZ0V4cCIsImhhcyIsInNldCIsImJlZm9yZUNoYW5nZWQiLCJnZXQiLCJhY3Rpb25zIiwiY2xlYXIiLCJPYmplY3RPYnNlcnZlciIsIm9uY2hhbmdpbmciLCJmaXJlQ2hhbmdpbmciLCJvbmNoYW5nZWQiLCJmaXJlQ2hhbmdlZCIsIm9mZkNoYW5nZSIsIm9iak1hcCIsIk1lbWJlcldhdGNoZXIiLCJvYnNlcnZlciIsImlkIiwiY2hhbmdlS2V5IiwibmV3VGFyZ2V0Iiwic3RvcCIsIkRldGVjdG9yIiwicXVldWUiLCJkaWdlc3QiLCJjbGVhckRlZmVyIiwiZGV0ZWN0b3IiLCJleGVjdXRlIiwiRXhwV2F0Y2hlciIsInJlbW92ZSIsIldhdGNoZXIiLCJtZW1iZXJzIiwiZGlnZXN0cyIsImFzdCIsInBhcnNlRXhwIiwiaGFzQ0MiLCJkaXJ0eUNoZWNrIiwiY29sbGVjdE1lbWJlcnMiLCJ1cGRhdGVNZW1iZXIiLCJzdGFydERpZ2VzdCIsIm1lbWJlciIsInN0YXJ0TWVtYmVyIiwic3RhcnQiLCJtZW1iZXJXYXRjaGVyIiwiT2JzZXJ2ZXIiLCJ3YXRjaGVycyIsIndhdGNoZXIiLCJjcmVhdGVXYXRjaGVyIiwicmVtb3ZlV2F0Y2hlciIsIk9iamVjdCIsInByb3RvdHlwZSIsIlRleHROb2RlIiwicmVuZGVyIiwiY3JlYXRlVGV4dE5vZGUiLCJtZXRhIiwiaW5qZWN0b3IiLCJyZWdpc3RlckNvbnN0cnVjdG9yIiwidHlwZUNvbnN0IiwiQmluZENtcE9wdGlvbnNEaXJlY3RpdmUiLCJ1cGRhdGVPcHRpb25zIiwiY2xlYXJPcHRpb25zIiwiJGJpbmRpbmciLCJCaW5kQ21wRGlyZWN0aXZlIiwibmFtZURpciIsInZpZXciLCJpbml0IiwiYmluZENtcE9wdGlvbnNEaXIiLCJvbkluaXQiLCIkaHRtbEVsZW1lbnQiLCJzZXRDbXAiLCJCaW5kRGlyZWN0aXZlIiwiaW5uZXJUZXh0IiwiRW1iZWREaXJlY3RpdmUiLCJlbWJlZFRwbCIsImdldEVtYmVkVHBsIiwic2V0SW5uZXJUcGwiLCJIaWRlRGlyZWN0aXZlIiwiaW5qZWN0IiwiJGFuaW1hdGUiLCJ0b2dnbGUiLCJzdHlsZSIsImRpc3BsYXkiLCJJZkRpcmVjdGl2ZSIsImh0bWxDb21tZW50IiwiTW9kZWxEaXJlY3RpdmUiLCIkdmlld1ZhbHVlIiwiJG1vZGVsVmFsdWUiLCIkcGFyc2VycyIsIiRmb3JtYXR0ZXJzIiwiJHZpZXdDaGFuZ2VMaXN0ZW5lcnMiLCIkdmFsaWRhdG9ycyIsIiRmZWVkYmFjayIsIiRwcmlzdGluZSIsIiRkaXJ0eSIsIiR2YWxpZCIsIiRpbnZhbGlkIiwic2V0Vmlld1ZhbHVlIiwiJGNvbXBvbmVudCIsInNldE1vZGVsVmFsdWUiLCJuZXd2YWx1ZSIsInZpZXdWYWx1ZSIsInZhbGlkYXRvciIsImZvcm1hdHRlciIsInVwZGF0ZUNzcyIsInVwZGF0ZVN0YXRlIiwic2V0RGlydHkiLCJsaXN0ZW5lciIsIm1vZGVsVmFsdWUiLCJwYXJzZXIiLCJhc3NpZ24iLCJlbGUiLCJjc3NDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImRpcnR5IiwicHJpc3RpbmUiLCJpbnZhbGlkIiwic3RhdGUiLCJmZWVkYmFjayIsIk5hbWVEaXJlY3RpdmUiLCJwcm94eSIsIiRzY29wZSIsImNtcCIsIlJlcGVhdERpcmVjdGl2ZSIsIml0ZW1FeHAiLCJpdGVtc0V4cCIsIml0ZW1UZW1wbGF0ZSIsImRhdGFJdGVtcyIsImNtcEl0ZW1zIiwiaGVhZGVyIiwiZm9vdGVyIiwiYXJnIiwiJGF0dHIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjcmVhdGVDb25uZWN0aW9uIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaXRlbXMiLCIkZXZhbCIsInNldERhdGFJdGVtcyIsInJlcGxhY2VDaGlsZCIsImNoaWxkU2NvcGUiLCJjbXBJdGVtIiwiZGF0YUl0ZW0iLCJmaWx0ZXJzIiwibmV3Q21wSXRlbXMiLCJnZXRDbXBJdGVtIiwiQ29tcG9uZW50IiwidGVtcGxhdGUiLCIkaW5oZXJpdENtcCIsIiRyZW5kZXIiLCJyZXBlYXRJdGVtIiwiU2hvd0RpcmVjdGl2ZSIsIkNoZWNrZWREaXJlY3RpdmUiLCJTdGF0ZURpcmVjdGl2ZSIsIkRpc2FibGVkRGlyZWN0aXZlIiwiUmVhZG9ubHlEaXJlY3RpdmUiLCJTZWxlY3RlZERpcmVjdGl2ZSIsImF0dHJOYW1lIiwicGVyZm9ybSIsImhhc0F0dHJpYnV0ZSIsIkNsYXNzRXZlbkRpcmVjdGl2ZSIsIiRpbmRleCIsIkNsYXNzRGlyZWN0aXZlIiwiQ2xhc3NPZGREaXJlY3RpdmUiLCJpbml0aWFsQ2xhc3NMaXN0IiwicGFyc2VDbGFzcyIsInNldENsYXNzIiwiYXJyIiwidW53YXRjaEFycmF5IiwidHJpbSIsImNsYXNzVGV4dCIsIiRnZXRBdHRyVmFsdWUiLCJ0ZXh0VG9BcnJheSIsInNraXAiLCJuZXdBcnIiLCJ3YXRjaEFycmF5Iiwic2V0Q2xhc3NMaXN0IiwiU3R5bGVFdmVuRGlyZWN0aXZlIiwiU3R5bGVEaXJlY3RpdmUiLCJTdHlsZU9kZERpcmVjdGl2ZSIsImluaXRpYWxTdHlsZSIsInBhcnNlU3R5bGUiLCJzZXRTdHlsZSIsInVud2F0Y2hPYmoiLCJ0ZXh0VG9PYmplY3QiLCJsaXN0Iiwic3ViSXRlbXMiLCJuZXdTdHlsZSIsIndhdGNoT2JqIiwiYXBwbHlTdHlsZSIsIlN3aXRjaERlZmF1bHREaXJlY3RpdmUiLCJpc01hdGNoIiwic3dpdGNoV2hlbkRpcnMiLCJ2RWxlIiwid2hlbkRpciIsImluaXRTd2l0Y2hXaGVuRGlycyIsImlzTWF0Y2hDaGFuZ2VkIiwiU3dpdGNoV2hlbkRpcmVjdGl2ZSIsInN3aXRjaERpciIsImluaXRTd2l0Y2hEaXIiLCJ2YWx1ZUNoYW5nZWQiLCJTd2l0Y2hEaXJlY3RpdmUiLCJIdG1sTGV4ZXIiLCJMZXhlciIsImlzVmFsaWRJZGVudGlmaWVyU3RhcnQiLCJjaCIsImlzVmFsaWRJZGVudGlmaWVyQ29udGludWUiLCJjcCIsImlzTnVtYmVyIiwiZXhwZWN0U3RyaW5nIiwic3RyIiwibnVtIiwicmVhZENvbW1lbnQiLCJiZWdpbiIsInN0cmluZyIsInJhd1N0cmluZyIsImNoYXJBdCIsInRva2VucyIsInRocm93RXJyb3IiLCJyZWFkVGV4dCIsImNoMiIsInBlZWsiLCJpc0lkZW50aWZpZXJTdGFydCIsInRleHRUYWciLCJyZWFkVGFnIiwiY2xvc2luZyIsImRvY3R5cGUiLCJ0YWciLCJyZWFkSWRlbnQiLCJwZWVrTXVsdGljaGFyIiwicmVhZFN0cmluZyIsImlzV2hpdGVzcGFjZSIsImVxdWFsIiwibGV4IiwiYWxsb3dEb2NUeXBlIiwiY2gzIiwiSHRtbFBhcnNlciIsIlBhcnNlciIsImxleGVyIiwiZmFyZ21lbnQiLCJ0b2tlbiIsImN1cnJlbnQiLCIkcHVzaENoaWxkIiwibmV4dCIsImRvY1R5cGUiLCJpZGVudGlmaWVyIiwiYXR0cnMiLCJwIiwiJHB1c2hBdHRyaWJ1dGUiLCJjaGlsZEVsZW1lbnRzIiwiZWxlcyIsImNvbnN0YW50IiwicGFyc2VPcHRpb25zIiwiaXNJZGVudGlmaWVyQ29udGludWUiLCJsaXRlcmFscyIsInVuZGVmaW5lZCIsImh0bWwiLCJkZWZhdWx0cyIsImNyZWF0ZUNvbXBvbmVudCIsInNldHRpbmdzIiwiYXN0Tm9kZXMiLCJhc3ROb2RlIiwiJCRjaGlsZEVsZW1lbnRzIiwiY3JlYXRlRmlsdGVyIiwicmVwbGFjZSIsIm1lbWJlckV4cCIsImdldE1lbWJlckV4cHJlc3Npb24iLCJvYmplY3QiLCJwcm9wZXJ0eSIsIk9QRVJBVE9SUyIsIm9wZXJhdG9yVGV4dCIsIkVTQ0FQRSIsIm9wZXJhdG9yIiwicmVhZE51bWJlciIsImlzIiwib3AxIiwib3AyIiwib3AzIiwiY2hhcnMiLCJjb2RlUG9pbnRBdCIsImNoYXJDb2RlQXQiLCJjcDEiLCJjcDIiLCJpc0V4cE9wZXJhdG9yIiwiZXJyb3IiLCJjb2xTdHIiLCJudW1iZXIiLCJwZWVrQ2giLCJlc2NhcGUiLCJoZXgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZUludCIsInJlcCIsIk51bGxPYmplY3QiLCJBU1QiLCJQcm9ncmFtIiwiRXhwcmVzc2lvblN0YXRlbWVudCIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uIiwiTG9naWNhbEV4cHJlc3Npb24iLCJCaW5hcnlFeHByZXNzaW9uIiwiVW5hcnlFeHByZXNzaW9uIiwiQ2FsbEV4cHJlc3Npb24iLCJNZW1iZXJFeHByZXNzaW9uIiwiSWRlbnRpZmllciIsIkxpdGVyYWwiLCJBcnJheUV4cHJlc3Npb24iLCJQcm9wZXJ0eSIsIk9iamVjdEV4cHJlc3Npb24iLCJBc3ROb2RlIiwiY29udGV4dCIsIlByb2dyYW1Ob2RlIiwiRXhwcmVzc2lvblN0YXRlbWVudE5vZGUiLCJNZW1iZXJFeHByZXNzaW9uTm9kZSIsIkFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSIsImxlZnQiLCJyaWdodCIsImFzc2lnbm1lbnRMZWZ0IiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSIsImFsdGVybmF0ZSIsImNvbnNlcXVlbnQiLCJMb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiQmluYXJ5RXhwcmVzc2lvbk5vZGUiLCJVbmFyeUV4cHJlc3Npb25Ob2RlIiwicHJlZml4IiwiTGl0ZXJhbE5vZGUiLCJ0b1RleHQiLCJDYWxsRXhwcmVzc2lvbk5vZGUiLCJjYWxsZWUiLCJhcmdWYWx1ZXMiLCJmaWx0ZXJJbnMiLCJpc0ZpbHRlciIsIiRleGVjdXRlIiwiY29tcHV0ZWQiLCJhbGxvd051bGwiLCJJZGVudGlmaWVyTm9kZSIsIm9iak5vZGUiLCJwcm9wZXJ0eUtleSIsIkFycmF5RXhwcmVzc2lvbk5vZGUiLCJQcm9wZXJ0eU5vZGUiLCJraW5kIiwiT2JqZWN0RXhwcmVzc2lvbk5vZGUiLCJwcm9wZXJ0aWVzIiwiZGVmIiwiaXNBc3NpZ25hYmxlIiwibXNnIiwicHJvZ3JhbSIsImV4cHJlc3Npb25TdGF0ZW1lbnQiLCJleHBlY3QiLCJmaWx0ZXJDaGFpbiIsImV4cHJlc3Npb24iLCJ0ZXJuYXJ5IiwibG9naWNhbE9SIiwiY29uc3VtZSIsImxvZ2ljYWxBTkQiLCJlcXVhbGl0eSIsInJlbGF0aW9uYWwiLCJhZGRpdGl2ZSIsIm11bHRpcGxpY2F0aXZlIiwidW5hcnkiLCJwcmltYXJ5IiwiYXJyYXlEZWNsYXJhdGlvbiIsImhhc093blByb3BlcnR5IiwicGVla0FoZWFkIiwicGFyc2VBcmd1bWVudHMiLCJiYXNlRXhwcmVzc2lvbiIsImlkZW50aWZpZXJzIiwiZW50aXJlTmFtZSIsImpvaW4iLCJwZWVrVG9rZW4iLCJlMSIsImUyIiwiZTMiLCJlNCIsInQiLCJzaGlmdCIsIk1vZGVsT3B0aW9uc1NlcnZpY2UiLCJUZW1wbGF0ZUNhY2hlU2VydmljZSIsInRwbENhY2hlIiwicHJvbWlzZUNhY2hlIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJodHRwR2V0IiwidGhlbiIsInJlYWR5U3RhdGVFbnVtIiwib3BlbmVkIiwic2VudCIsInJlY2VpdmVkIiwiZmluaXNoIiwiY3JlYXRlWEhSIiwiWE1MSHR0cFJlcXVlc3QiLCJjcmVhdGVQcm9taXNlIiwicmVqZWN0IiwiYWRkVXJsUGFyYW0iLCJlbmNvZGVVUklDb21wb25lbnQiLCJwYXJzZUhlYWRlcnMiLCJoZWFkZXJzIiwicGFyc2VkIiwidmFsIiwibGluZSIsInRvTG93ZXJDYXNlIiwiaWdub3JlRHVwbGljYXRlT2YiLCJidWlsZFVybCIsIm1ldGhvZCIsInJlcXVlc3QiLCJ4aHIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2VVUkwiLCJyZXNwb25zZUhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJyZXNwb25zZURhdGEiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZSIsInN0YXR1c1RleHQiLCJvcGVuIiwic2VuZCIsImh0dHBQb3N0IiwiaGFuZGxlcnMiLCJyZXR1cm5WYWx1ZSIsIk1lc3NlbmdlckJ1cyIsIm1lc3NlbmdlcnMiLCJpc01lc3NlbmdlciIsImdldENoaWxkTm9kZXMiLCJub2RlIiwiQXJyYXkiLCJyZXBsYWNlTm9kZSIsInJlZk5vZGUiLCJuZXdOb2RlIiwicmVtb3ZlTm9kZSIsInJlbW92ZU5vZGVCZXR3ZWVuIiwiYmVnaW5Ob2RlIiwiZW5kTm9kZSIsImluc2VydE5vZGVBZnRlciIsInF1ZXJ5RWxlbWVudExvYWRlZCIsImNhbGxiYWNrIiwiY2FuY2VsVG9rZW4iLCJxdWVyeSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwicXVlcnlFbGVtZW50VW5sb2FkZWQiLCJxdWVyeUVsZW1lbnRTdGF0ZSIsImNhbGxiYWNrcyIsImxvYWRlZCIsIm9uRW50ZXIiLCJvbkxlYXZlIiwiYWRkQ2xhc3MiLCJjIiwiY3VyIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJ0YXIiLCJkZWJ1Z01vZGUiLCJ0b1N0cmluZyIsImdldFByb3RvdHlwZU9mIiwiaWdub3JlT3duIiwiY29weSIsImRlZXAiLCJvYmpJbmRleCIsImlzQm9vbGVhbiIsIm5ld09iaiIsImV4dGVuZCIsImRlZXBNZXJnZSIsInBsYWluTWVyZ2UiLCJtZXJnZSIsInNvdXJjZSIsIm8iLCJGIiwiaW5oZXJpdFByb3RvdHlwZSIsInN1YlR5cGUiLCJzdXBlclR5cGUiLCJjb25zdHJ1Y3RvciIsImluaGVyaXQiLCJsb3dlcmNhc2UiLCJpc1N0cmluZyIsInVwcGVyY2FzZSIsInRvVXBwZXJDYXNlIiwiaXNVbmRlZmluZWQiLCJpc0RlZmluZWQiLCJpc01hcCIsImlzQmxhbmtPYmplY3QiLCJpc0RhdGUiLCJpc0Z1bmN0aW9uIiwiaXNGb3JtRGF0YSIsIkZvcm1EYXRhIiwiaXNTYW1lIiwib2JqMSIsIm9iajIiLCJzYW1lIiwiZGVidWciLCJsb2ciLCJjb25zb2xlIiwiY29udGFpbnMiLCJjb250YWluc1N0ciIsImlnbm9yZUNhc2UiLCJoYXNQcm9wZXJ0eSIsImtleTIiLCJoYXNQcm9wIiwia2V5cyIsInZhbHVlMyIsImtleTMiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5Iiwib3JkZXJCeSIsImdldHRlciIsImdldFZhbHVlIiwic29ydCIsImEiLCJiIiwib3JkZXJCeURlc2NlbmRpbmciLCJ0b051bWJlciIsIm4iLCJwYXJzZUZsb2F0IiwiY29uc3RydWN0IiwiYmVmb3JlQXR0ckNoYW5nZSIsImFmdGVyQXR0ckNoYW5nZSIsImJlZm9yZVZpZXdJbml0IiwiYWZ0ZXJWaWV3TW91bnQiLCIkJGVsZW1lbnQiLCIkcHJveHkiLCJtZXNzZW5nZXIiLCJzeW5jIiwiJGdldE1ldGEiLCJ0ZW1wbGF0ZVVybCIsImdldFRwbEJ5VXJsIiwidXNpbmciLCJjbGFzc05hbWUiLCJwb3AiLCJzcGFjZU5hbWUiLCJnZXRJbm5lclRwbCIsIiR1c2luZyIsImdldEh0bWxFbGVtZW50IiwiJGhhc1ZpZXciLCIkc2hvd1ZpZXciLCIkZ2V0VGVtcGxhdGUiLCIkbWFrZUNvbXBpbGVPcHRpb25zIiwiJGNsZWFyVmlldyIsInNlbGVjdG9yT3JFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImFwcGVuZCIsIiRhZnRlclZpZXdNb3VudCIsIiQkcGFyZW50Q29tcG9uZW50IiwiJHJlbW92ZUNoaWxkQ21wIiwiJCRkZXRlY3RUaW1lb3V0IiwiJCRvYnNlcnZlciIsInZhbGlkYXRlIiwid2F0Y2giLCJjaGlsZENtcCIsIiQkY2hpbGRDb21wb25lbnRzIiwicGFyZW50Q21wIiwic2V0UHJvdG90eXBlT2YiLCIkaG9va3MiLCJoYW5kbGVyIiwiaG9vayIsIiQkZGlzcG9zZXJzIiwiJHZhbGlkYXRlIiwiZGVzdHJveUZyb21FbGVtZW50IiwiJHVubW91bnQiLCJkaXNwb3NlciIsIiRzZXRNZXRhIiwiaW5qZWN0U2VydmljZXMiLCJvbkNvbXBpbGUiLCIkcmVxdWVzdEFuaW1hdGlvbiIsIiQkY2FuY2VsQW5pbWF0aW9uVG9rZW4iLCIkaXNMb2FkZWQiLCIkZWxlbWVudGxvYWRlZCIsImF0dHJOb2RlIiwiZGVzdHJveUZyb21BdHRyIiwiJGNhbmNlbEFuaW1hdGlvbiIsIkZpbHRlciIsIm9uRXhlY3V0ZSIsIm5zIiwibWV0aG9kcyIsImJ1aWxkQ29uc3RydWN0b3IiLCJjb250cmFjdFR5cGUiLCJzdXBlckNsYXNzIiwibWFrZUNvbnN0cnVjdG9yIiwiaXNTZXJ2aWNlIiwiYm9vdHN0cmFwIiwiaW5uZXJIVE1MIiwiZiIsIm5hbWVQYXR0ZXJuIiwiSW5qZWN0b3IiLCJjb250YWluZXIiLCJ3YWl0aW5nVG9FeHRlbmRzIiwiaW5zQ29udGFpbmVyIiwibWFwcGluZyIsImdldE1hcHBpbmciLCJyZWdpc3RlciIsImNvbnN0cnVjdG9ycyIsIm5hbWVzcGFjZXMiLCJpbnN0YW5jZSIsImNyZWF0ZVNlcnZpY2UiLCJnZXRDb21wb25lbnQiLCJnZXRGaWx0ZXIiLCJzZXJ2aWNlcyIsImdldEluc3RhbmNlcyIsImdldFNlcnZpY2UiLCJub25TaGFyZWQiLCJjb25zdHJ1Y3Rvck5hbWUiLCJjaGVja1NlbGVjdG9yIiwiZ2V0V2FpdGluZ1RvRXh0ZW5kcyIsIm9uQ29uc3RydWN0IiwiRnVuY3Rpb24iLCJzdXBlck9uZSIsInJlbWFpbkNvbnN0cnVjdG9yIiwic3VwZXJOYW1lIiwiZXh0ZW5kTWV0YSIsInN1cGVyTWV0YSIsIndhaXRpbmdUb0V4dGVuZHMyIiwiZnVsbFNlbGVjdG9yIiwic2V0V2FpdGluZ1RvRXh0ZW5kcyIsImxvY2FsIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicHJpdmF0ZUtleSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsVUFBVSxHQUFHLFlBQWpCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLFdBQWhCO0FBQ0Es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Q1AsVUFBSTdGLHlEQUFBLENBQWlCLEtBQUtrUCxTQUF0QixDQUFKLEVBQXNDO0FBQ2xDLGFBQUtBLFNBQUwsQ0FBZWYsSUFBZixDQUFvQixJQUFwQjtBQUNIO0FBQ0o7QUE1Qkw7QUFBQTtBQUFBLGdDQUt1QjtBQUNmd0gsd0RBQVEsQ0FBQ2dnQixjQUFULENBQXdCLElBQXhCO0FBQ0g7QUFQTDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoic2luZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInNpbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic2luZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3ZpZXcvc2VydmljZSc7XHJcbmltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9kZWNvcmF0b3Ivc2VydmljZSc7XHJcblxyXG52YXIgVFJBTlNJVElPTiA9ICd0cmFuc2l0aW9uJztcclxudmFyIEFOSU1BVElPTiA9ICdhbmltYXRpb24nO1xyXG52YXIgdHJhbnNpdGlvblByb3AgPSAndHJhbnNpdGlvbic7XHJcbnZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSAndHJhbnNpdGlvbmVuZCc7XHJcbnZhciBhbmltYXRpb25Qcm9wID0gJ2FuaW1hdGlvbic7XHJcbnZhciBhbmltYXRpb25FbmRFdmVudCA9ICdhbmltYXRpb25lbmQnO1xyXG52YXIgdHJhbnNmb3JtUkUgPSAvXFxiKHRyYW5zZm9ybXxhbGwpKCx8JCkvO1xyXG5cclxuQHNlcnZpY2Uoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJyRhbmltYXRlJ1xyXG59KVxyXG5jbGFzcyBBbmltYXRlU2VydmljZSBleHRlbmRzIFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcih2bm9kZSwgZG9FbnRlcikge1xyXG4gICAgICAgIHZhciBlbCA9IHZub2RlLmh0bWxFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBjYWxsIGxlYXZlIGNhbGxiYWNrIG5vd1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGVsLl9sZWF2ZUNiKSkge1xyXG4gICAgICAgICAgICBlbC5fbGVhdmVDYi5jYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBlbC5fbGVhdmVDYigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZWwuX2VudGVyQ2IpIHx8IGVsLm5vZGVUeXBlICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhbmltYXRpb24gPSB0aGlzLnJlc29sdmVBbmltYXRpb25Db250ZXh0KHZub2RlKTtcclxuXHJcbiAgICAgICAgaWYoIWFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9FbnRlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnJlc29sdmVBbmltYXRpb24oYW5pbWF0aW9uKTtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciB0eXBlID0gZGF0YS50eXBlO1xyXG4gICAgICAgIHZhciBlbnRlckNsYXNzID0gZGF0YS5lbnRlckNsYXNzO1xyXG4gICAgICAgIHZhciBlbnRlclRvQ2xhc3MgPSBkYXRhLmVudGVyVG9DbGFzcztcclxuICAgICAgICB2YXIgZW50ZXJBY3RpdmVDbGFzcyA9IGRhdGEuZW50ZXJBY3RpdmVDbGFzcztcclxuICAgICAgICB2YXIgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uO1xyXG5cclxuICAgICAgICB2YXIgZXhwbGljaXRFbnRlckR1cmF0aW9uID0gdXRpbHMudG9OdW1iZXIoXHJcbiAgICAgICAgICAgIHV0aWxzLmlzT2JqZWN0KGR1cmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgPyBkdXJhdGlvbi5lbnRlclxyXG4gICAgICAgICAgICAgICAgOiBkdXJhdGlvblxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHZhciBjYiA9IGVsLl9lbnRlckNiID0gc2VsZi5vbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5yZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgZW50ZXJUb0NsYXNzKTtcclxuICAgICAgICAgICAgc2VsZi5yZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgZW50ZXJBY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlQW5pbWF0aW9uQ2xhc3MoZWwsIGVudGVyQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLmVudGVyQ2FuY2VsbGVkICYmIGFuaW1hdGlvbi5lbnRlckNhbmNlbGxlZChlbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24uYWZ0ZXJFbnRlciAmJiBhbmltYXRpb24uYWZ0ZXJFbnRlcihlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWwuX2VudGVyQ2IgPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzdGFydCBlbnRlciBhbmltYXRpb25cclxuICAgICAgICBhbmltYXRpb24uYmVmb3JlRW50ZXIgJiYgYW5pbWF0aW9uLmJlZm9yZUVudGVyKGVsKTtcclxuICAgICAgICBzZWxmLmFkZEFuaW1hdGlvbkNsYXNzKGVsLCBlbnRlckNsYXNzKTtcclxuICAgICAgICBzZWxmLmFkZEFuaW1hdGlvbkNsYXNzKGVsLCBlbnRlckFjdGl2ZUNsYXNzKTtcclxuICAgICAgICBzZWxmLm5leHRGcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlQW5pbWF0aW9uQ2xhc3MoZWwsIGVudGVyQ2xhc3MpO1xyXG4gICAgICAgICAgICBpZiAoIWNiLmNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hZGRBbmltYXRpb25DbGFzcyhlbCwgZW50ZXJUb0NsYXNzKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzVmFsaWREdXJhdGlvbihleHBsaWNpdEVudGVyRHVyYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjYiwgZXhwbGljaXRFbnRlckR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi53aGVuQW5pbWF0aW9uRW5kcyhlbCwgdHlwZSwgY2IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvRW50ZXIoKTtcclxuICAgICAgICBhbmltYXRpb24uZW50ZXIgJiYgYW5pbWF0aW9uLmVudGVyKGVsLCBjYik7XHJcbiAgICB9XHJcblxyXG4gICAgbGVhdmUodm5vZGUsIGRvTGVhdmUpIHtcclxuICAgICAgICB2YXIgZWwgPSB2bm9kZS5odG1sRWxlbWVudDtcclxuXHJcbiAgICAgICAgLy8gY2FsbCBlbnRlciBjYWxsYmFjayBub3dcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihlbC5fZW50ZXJDYikpIHtcclxuICAgICAgICAgICAgZWwuX2VudGVyQ2IuY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWwuX2VudGVyQ2IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhbmltYXRpb24gPSB0aGlzLnJlc29sdmVBbmltYXRpb25Db250ZXh0KHZub2RlKTtcclxuXHJcbiAgICAgICAgaWYgKCFhbmltYXRpb24gfHwgZWwubm9kZVR5cGUgIT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvTGVhdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGVsLl9sZWF2ZUNiKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IHRoaXMucmVzb2x2ZUFuaW1hdGlvbihhbmltYXRpb24pO1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHR5cGUgPSBkYXRhLnR5cGU7XHJcbiAgICAgICAgdmFyIGxlYXZlQ2xhc3MgPSBkYXRhLmxlYXZlQ2xhc3M7XHJcbiAgICAgICAgdmFyIGxlYXZlVG9DbGFzcyA9IGRhdGEubGVhdmVUb0NsYXNzO1xyXG4gICAgICAgIHZhciBsZWF2ZUFjdGl2ZUNsYXNzID0gZGF0YS5sZWF2ZUFjdGl2ZUNsYXNzO1xyXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IGRhdGEuZHVyYXRpb247XHJcblxyXG4gICAgICAgIHZhciBleHBsaWNpdExlYXZlRHVyYXRpb24gPSB1dGlscy50b051bWJlcihcclxuICAgICAgICAgICAgdXRpbHMuaXNPYmplY3QoZHVyYXRpb24pXHJcbiAgICAgICAgICAgICAgICA/IGR1cmF0aW9uLmxlYXZlXHJcbiAgICAgICAgICAgICAgICA6IGR1cmF0aW9uXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdmFyIGNiID0gZWwuX2xlYXZlQ2IgPSBzZWxmLm9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLnJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBsZWF2ZVRvQ2xhc3MpO1xyXG4gICAgICAgICAgICBzZWxmLnJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKTtcclxuICAgICAgICAgICAgaWYgKGNiLmNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24ubGVhdmVDYW5jZWxsZWQgJiYgYW5pbWF0aW9uLmxlYXZlQ2FuY2VsbGVkKGVsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvTGVhdmUoKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5hZnRlckxlYXZlICYmIGFuaW1hdGlvbi5hZnRlckxlYXZlKGVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbC5fbGVhdmVDYiA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb24uZGVsYXlMZWF2ZSkge1xyXG4gICAgICAgICAgICBhbmltYXRpb24uZGVsYXlMZWF2ZShwZXJmb3JtTGVhdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBlcmZvcm1MZWF2ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGVyZm9ybUxlYXZlKCkge1xyXG4gICAgICAgICAgICAvLyB0aGUgZGVsYXllZCBsZWF2ZSBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gY2FuY2VsbGVkXHJcbiAgICAgICAgICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbmltYXRpb24uYmVmb3JlTGVhdmUgJiYgYW5pbWF0aW9uLmJlZm9yZUxlYXZlKGVsKTtcclxuICAgICAgICAgICAgc2VsZi5hZGRBbmltYXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XHJcbiAgICAgICAgICAgIHNlbGYuYWRkQW5pbWF0aW9uQ2xhc3MoZWwsIGxlYXZlQWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICBzZWxmLm5leHRGcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcclxuICAgICAgICAgICAgICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRBbmltYXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc1ZhbGlkRHVyYXRpb24oZXhwbGljaXRMZWF2ZUR1cmF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNiLCBleHBsaWNpdExlYXZlRHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYud2hlbkFuaW1hdGlvbkVuZHMoZWwsIHR5cGUsIGNiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbmltYXRpb24ubGVhdmUgJiYgYW5pbWF0aW9uLmxlYXZlKGVsLCBjYik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVBbmltYXRpb24oY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIHJlcyA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmNzcyAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdXRpbHMuZXh0ZW5kKHJlcywgdGhpcy5hdXRvQ3NzQW5pbWF0aW9uKGNvbmZpZy5uYW1lIHx8ICduJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXRpbHMuZXh0ZW5kKHJlcywgY29uZmlnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBhdXRvQ3NzQW5pbWF0aW9uKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbnRlckNsYXNzOiAobmFtZSArIFwiLWVudGVyXCIpLFxyXG4gICAgICAgICAgICBlbnRlclRvQ2xhc3M6IChuYW1lICsgXCItZW50ZXItdG9cIiksXHJcbiAgICAgICAgICAgIGVudGVyQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItZW50ZXItYWN0aXZlXCIpLFxyXG4gICAgICAgICAgICBsZWF2ZUNsYXNzOiAobmFtZSArIFwiLWxlYXZlXCIpLFxyXG4gICAgICAgICAgICBsZWF2ZVRvQ2xhc3M6IChuYW1lICsgXCItbGVhdmUtdG9cIiksXHJcbiAgICAgICAgICAgIGxlYXZlQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItbGVhdmUtYWN0aXZlXCIpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbmNlKGZuKSB7XHJcbiAgICAgICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZXh0RnJhbWUoZm4pIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFuaW1hdGlvbkNsYXNzKGVsLCBjbHMpIHtcclxuICAgICAgICB2YXIgYW5pbWF0aW9uQ2xhc3NlcyA9IGVsLl9hbmltYXRpb25DbGFzc2VzIHx8IChlbC5fYW5pbWF0aW9uQ2xhc3NlcyA9IFtdKTtcclxuICAgICAgICBpZiAoYW5pbWF0aW9uQ2xhc3Nlcy5pbmRleE9mKGNscykgPCAwKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkNsYXNzZXMucHVzaChjbHMpO1xyXG4gICAgICAgICAgICB1dGlscy5hZGRDbGFzcyhlbCwgY2xzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQW5pbWF0aW9uQ2xhc3MoZWwsIGNscykge1xyXG4gICAgICAgIGlmIChlbC5fYW5pbWF0aW9uQ2xhc3Nlcykge1xyXG4gICAgICAgICAgICB1dGlscy5yZW1vdmUoZWwuX2FuaW1hdGlvbkNsYXNzZXMsIGNscyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHV0aWxzLnJlbW92ZUNsYXNzKGVsLCBjbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHdoZW5BbmltYXRpb25FbmRzKGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2IpIHtcclxuICAgICAgICB2YXIgcmVmID0gdGhpcy5nZXRBbmltYXRpb25JbmZvKGVsLCBleHBlY3RlZFR5cGUpO1xyXG4gICAgICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XHJcbiAgICAgICAgdmFyIHRpbWVvdXQgPSByZWYudGltZW91dDtcclxuICAgICAgICB2YXIgcHJvcENvdW50ID0gcmVmLnByb3BDb3VudDtcclxuICAgICAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBldmVudCA9IHR5cGUgPT09IFRSQU5TSVRJT04gPyB0cmFuc2l0aW9uRW5kRXZlbnQgOiBhbmltYXRpb25FbmRFdmVudDtcclxuICAgICAgICB2YXIgZW5kZWQgPSAwO1xyXG4gICAgICAgIHZhciBlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uRW5kKTtcclxuICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICgrK2VuZGVkID49IHByb3BDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGVuZGVkIDwgcHJvcENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBlbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRpbWVvdXQgKyAxKTtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbkVuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5pbWF0aW9uSW5mbyhlbCwgZXhwZWN0ZWRUeXBlKSB7XHJcbiAgICAgICAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcclxuICAgICAgICB2YXIgdHJhbnNpdGlvbkRlbGF5cyA9IHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEZWxheSddLnNwbGl0KCcsICcpO1xyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb25zID0gc3R5bGVzW3RyYW5zaXRpb25Qcm9wICsgJ0R1cmF0aW9uJ10uc3BsaXQoJywgJyk7XHJcbiAgICAgICAgdmFyIHRyYW5zaXRpb25UaW1lb3V0ID0gdGhpcy5nZXRUaW1lb3V0KHRyYW5zaXRpb25EZWxheXMsIHRyYW5zaXRpb25EdXJhdGlvbnMpO1xyXG4gICAgICAgIHZhciBhbmltYXRpb25EZWxheXMgPSBzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEZWxheSddLnNwbGl0KCcsICcpO1xyXG4gICAgICAgIHZhciBhbmltYXRpb25EdXJhdGlvbnMgPSBzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEdXJhdGlvbiddLnNwbGl0KCcsICcpO1xyXG4gICAgICAgIHZhciBhbmltYXRpb25UaW1lb3V0ID0gdGhpcy5nZXRUaW1lb3V0KGFuaW1hdGlvbkRlbGF5cywgYW5pbWF0aW9uRHVyYXRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIHR5cGU7XHJcbiAgICAgICAgdmFyIHRpbWVvdXQgPSAwO1xyXG4gICAgICAgIHZhciBwcm9wQ291bnQgPSAwO1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmIChleHBlY3RlZFR5cGUgPT09IFRSQU5TSVRJT04pIHtcclxuICAgICAgICAgICAgaWYgKHRyYW5zaXRpb25UaW1lb3V0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFRSQU5TSVRJT047XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gdHJhbnNpdGlvblRpbWVvdXQ7XHJcbiAgICAgICAgICAgICAgICBwcm9wQ291bnQgPSB0cmFuc2l0aW9uRHVyYXRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSBBTklNQVRJT04pIHtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvblRpbWVvdXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gQU5JTUFUSU9OO1xyXG4gICAgICAgICAgICAgICAgdGltZW91dCA9IGFuaW1hdGlvblRpbWVvdXQ7XHJcbiAgICAgICAgICAgICAgICBwcm9wQ291bnQgPSBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGltZW91dCA9IE1hdGgubWF4KHRyYW5zaXRpb25UaW1lb3V0LCBhbmltYXRpb25UaW1lb3V0KTtcclxuICAgICAgICAgICAgdHlwZSA9IHRpbWVvdXQgPiAwXHJcbiAgICAgICAgICAgICAgICA/IHRyYW5zaXRpb25UaW1lb3V0ID4gYW5pbWF0aW9uVGltZW91dFxyXG4gICAgICAgICAgICAgICAgPyBUUkFOU0lUSU9OXHJcbiAgICAgICAgICAgICAgICA6IEFOSU1BVElPTlxyXG4gICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICBwcm9wQ291bnQgPSB0eXBlXHJcbiAgICAgICAgICAgICAgICA/IHR5cGUgPT09IFRSQU5TSVRJT05cclxuICAgICAgICAgICAgICAgID8gdHJhbnNpdGlvbkR1cmF0aW9ucy5sZW5ndGhcclxuICAgICAgICAgICAgICAgIDogYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaGFzVHJhbnNmb3JtID1cclxuICAgICAgICAgICAgdHlwZSA9PT0gVFJBTlNJVElPTiAmJlxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1SRS50ZXN0KHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdQcm9wZXJ0eSddKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiB0aW1lb3V0LFxyXG4gICAgICAgICAgICBwcm9wQ291bnQ6IHByb3BDb3VudCxcclxuICAgICAgICAgICAgaGFzVHJhbnNmb3JtOiBoYXNUcmFuc2Zvcm1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbWVvdXQoZGVsYXlzLCBkdXJhdGlvbnMpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHdoaWxlIChkZWxheXMubGVuZ3RoIDwgZHVyYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBkZWxheXMgPSBkZWxheXMuY29uY2F0KGRlbGF5cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgZHVyYXRpb25zLm1hcChmdW5jdGlvbiAoZCwgaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi50b01zKGQpICsgc2VsZi50b01zKGRlbGF5c1tpXSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvTXMocykge1xyXG4gICAgICAgIHJldHVybiBOdW1iZXIocy5zbGljZSgwLCAtMSkpICogMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkRHVyYXRpb24odmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVBbmltYXRpb25Db250ZXh0KGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgYW5pbWF0aW9ucyA9IGVsZW1lbnQuZ2V0RGlyZWN0aXZlcygpLmZpbHRlcihmdW5jdGlvbiAoZGlyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXIuYW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmltYXRpb25zWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnYW5pbWF0aW9uJ1xyXG59KVxyXG5jbGFzcyBBbmltYXRpb24gZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvLyBhbmltYXRpb24gdHlwZSwgXCJ0cmFuc2l0aW9uXCIgb3IgXCJhbmltYXRpb25cIlxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnJztcclxuICAgICAgICB0aGlzLnR5cGUgPSAnJztcclxuICAgICAgICB0aGlzLmNzcyA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5lbnRlckNsYXNzID0gJyc7XHJcbiAgICAgICAgLy8gdGhpcy5lbnRlclRvQ2xhc3MgPSAnJztcclxuICAgICAgICAvLyB0aGlzLmVudGVyQWN0aXZlQ2xhc3MgPSAnJztcclxuICAgICAgICAvLyB0aGlzLmxlYXZlQ2xhc3MgPSAnJztcclxuICAgICAgICAvLyB0aGlzLmxlYXZlVG9DbGFzcyA9ICcnO1xyXG4gICAgICAgIC8vIHRoaXMubGVhdmVBY3RpdmVDbGFzcyA9ICcnO1xyXG4gICAgICAgIHRoaXMuJHByaW9yaXR5ID0gLTEwMDtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0RnJhbWUoZm4pIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJlZm9yZUVudGVyKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBlbnRlcigpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYWZ0ZXJFbnRlcigpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZW50ZXJDYW5jZWxsZWQoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGJlZm9yZUxlYXZlKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBsZWF2ZSgpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYWZ0ZXJMZWF2ZSgpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gbGVhdmVDYW5jZWxsZWQoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGRlbGF5TGVhdmUoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5leHBvcnQgeyBBbmltYXRpb24gfSIsImV4cG9ydCAqIGZyb20gJy4vYW5pbWF0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gJy4vYmluZGluZyc7XG5cbi8vIC8vIFdpbmRvdyBFdmVudHNcbi8vIGNhc2UgJ29uLWxvYWQnOlxuLy8gY2FzZSAnb24tdW5sb2FkJzpcbi8vIC8vIEZvcm0gRWxlbWVudCBFdmVudHNcbi8vIGNhc2UgJ29uLWNoYW5nZSc6XG4vLyBjYXNlICdvbi1zdWJtaXQnOlxuLy8gY2FzZSAnb24tcmVzZXQnOlxuLy8gY2FzZSAnb24tc2VsZWN0Jzpcbi8vIGNhc2UgJ29uLWJsdXInOlxuLy8gY2FzZSAnb24tZm9jdXMnOlxuLy8gLy8gSW1hZ2UgRXZlbnRzXG4vLyBjYXNlICdvbi1hYm9ydCc6XG4vLyAvLyBLZXlib2FyZCBFdmVudHNcbi8vIGNhc2UgJ29uLWtleWRvd24nOlxuLy8gY2FzZSAnb24ta2V5cHJlc3MnOlxuLy8gY2FzZSAnb24ta2V5dXAnOlxuLy8gLy8gTW91c2UgRXZlbnRzXG4vLyBjYXNlICdvbi1jbGljayc6XG4vLyBjYXNlICdvbi1kYmxjbGljayc6XG4vLyBjYXNlICdvbi1tb3VzZWRvd24nOlxuLy8gY2FzZSAnb24tbW91c2Vtb3ZlJzpcbi8vIGNhc2UgJ29uLW1vdXNlb3V0Jzpcbi8vIGNhc2UgJ29uLW1vdXNlb3Zlcic6XG4vLyBjYXNlICdvbi1tb3VzZXVwJzpcbnZhciBldmVudFRleHQgPSAnbG9hZCB1bmxvYWQgY2hhbmdlIHN1Ym1pdCByZXNldCBzZWxlY3QgYmx1ciBmb2N1cyBhYm9ydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZW1vdmUgbW91c2VvdXQgbW91c2VvdmVyIG1vdXNldXAnO1xudmFyIGRvbUV2ZW50cyA9IGV2ZW50VGV4dC5zcGxpdCgnICcpO1xuXG5jbGFzcyBBdHRyTm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuYXR0cmlidXRlLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMucXVvdGUgPSAnXCInO1xuICAgICAgICB0aGlzLm9yaWdpbiA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXNFdmVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQmluZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRG9tRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RpcmVjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmJpbmRpbmcgPSBuZXcgQmluZGluZygpO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gMDtcbiAgICB9XG5cbiAgICBiZWxvbmdUbyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luID09PSBrZXk7XG4gICAgfVxuXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jb21waWxlKHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgb2JzZXJ2ZShhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5iaW5kaW5nLm9ic2VydmUoYWN0aW9uKTtcbiAgICB9XG5cbiAgICBjb21waWxlKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pc0V2ZW50ID0gdGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCdAJyk7XG4gICAgICAgIHRoaXMuaXNCaW5kaW5nID0gdGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCc6Jyk7XG4gICAgICAgIHRoaXMuaXNEaXJlY3RpdmUgPSB0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJyonKTtcbiAgICAgICAgaWYgKHRoaXMuaXNFdmVudCB8fCB0aGlzLmlzQmluZGluZyB8fCB0aGlzLmlzRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVOYW1lID0gdGhpcy5ub2RlTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0RvbUV2ZW50ID0gdXRpbHMuY29udGFpbnMoZG9tRXZlbnRzLCB0aGlzLm5vZGVOYW1lKTtcbiAgICAgICAgdGhpcy5iaW5kaW5nLnNldE91dHB1dCh0aGlzLmlzRXZlbnQpO1xuICAgICAgICB0aGlzLmJpbmRpbmcuYmluZCh0aGlzLm5vZGVWYWx1ZSwgdGhpcy5pc0V2ZW50IHx8IHRoaXMuaXNCaW5kaW5nIHx8IHRoaXMuaXNEaXJlY3RpdmUpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5jb250YWluc0RpcmVjdGl2ZSh0aGlzLm5vZGVOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlID0gb3B0aW9ucy5jcmVhdGVEaXJlY3RpdmUodGhpcy5ub2RlTmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGJpbmROb2RlKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZGluZy5zZXRPdXRwdXQodGhpcy5kaXJlY3RpdmUuJG91dHB1dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHRoaXMuZGlyZWN0aXZlLiRwcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlyZWN0aXZlICcgKyB0aGlzLm5vZGVOYW1lICsgJyBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5Q29tcGlsZWQob3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGNvbXBpbGUob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rKHNjb3BlLCBodG1sRWxlbWVudCwgb3duZXJDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IGh0bWxFbGVtZW50O1xuICAgICAgICB0aGlzLm93bmVyQ29tcG9uZW50ID0gb3duZXJDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuYmluZGluZy5zZXRTY29wZShzY29wZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFdmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNEb21FdmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5vZGVOYW1lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmJpbmRpbmcuY29tcHV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQ6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFyZ3M6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6IHNlbGYuaHRtbEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvd25lckNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb3duZXJDb21wb25lbnQuJGxpc3Rlbih0aGlzLm5vZGVOYW1lLCBmdW5jdGlvbiAoZSwgYXJncykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmJpbmRpbmcuY29tcHV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQ6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFyZ3M6IGFyZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6IHNlbGYuaHRtbEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBzY29wZS4kJGNoaWxkRGlyZWN0aXZlcy5wdXNoKHRoaXMuZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kc2V0QmluZGluZyh0aGlzLmJpbmRpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3duZXJDb21wb25lbnQgIT0gbnVsbCAmJiBvd25lckNvbXBvbmVudC4kaGFzQXR0cih0aGlzLm5vZGVOYW1lKSkge1xuICAgICAgICAgICAgICAgIG93bmVyQ29tcG9uZW50LiRpbml0QXR0cih0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5odG1sRWxlbWVudCwgdGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUgPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGRldGVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzQ2hhbmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iaW5kaW5nLmRldGVjdCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiR1cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm93bmVyQ29tcG9uZW50ICE9IG51bGwgJiYgdGhpcy5vd25lckNvbXBvbmVudC4kaGFzQXR0cih0aGlzLm5vZGVOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3duZXJDb21wb25lbnQuJHNldEF0dHIodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5odG1sRWxlbWVudCwgdGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmh0bWxFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnICYmIHRoaXMubm9kZU5hbWUgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnQudmFsdWUgPSB0aGlzLmJpbmRpbmcudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlMaW5rZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGluc2VydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aXZlKGtleSkge1xuICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSAhPSBudWxsICYmIHRoaXMuZGlyZWN0aXZlLiQkbWV0YS5zZWxlY3RvciA9PT0ga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRPdXRlclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luICsgKHRoaXMubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB0aGlzLnF1b3RlICsgdGhpcy5ub2RlVmFsdWUgKyB0aGlzLnF1b3RlKSk7XG4gICAgfVxuXG4gICAgZ2V0SW5uZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbiArICh0aGlzLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdGhpcy5xdW90ZSArIHRoaXMubm9kZVZhbHVlICsgdGhpcy5xdW90ZSkpO1xuICAgIH1cblxuICAgIGRpc3Bvc2UoaXNGcm9tRGlyZWN0aXZlKSB7XG4gICAgICAgIGlmIChpc0Zyb21EaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZGluZy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuYmluZGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRkaXNwb3NlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBBdHRyTm9kZSB9O1xuIiwiXG52YXIgVk5vZGVUeXBlID0ge1xuICAgIGVsZW1lbnQ6IDEsXG4gICAgYXR0cmlidXRlOiAyLFxuICAgIHRleHQ6IDMsXG4gICAgY2RhdGFTZWN0aW9uOiA0LFxuICAgIGVudGl0eVJlZmVyZW5jZTogNSxcbiAgICBlbnRpdHk6IDYsXG4gICAgcHJvY2Vzc2luZ0luc3RydWN0aW9uOiA3LFxuICAgIGNvbW1lbnQ6IDgsXG4gICAgZG9jdW1lbnQ6IDksXG4gICAgZG9jdW1lbnRUeXBlOiAxMCxcbiAgICBkb2N1bWVudEZyYWdtZW50OiAxMSxcbiAgICBub3RhdGlvbjogMTIsXG4gICAgY29ubmVjdGlvbjogMTAxXG59O1xuXG4vLyB2aXJ0dWFsIG5vZGVcbmNsYXNzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLm5vZGVUeXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5ub2RlTmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJEb2N1bWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgIH1cblxuICAgICRwdXNoQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICAkYnVpbGRTaWJsaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzW3RoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gKHNlbGYuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLiRidWlsZFNpYmxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJGNsZWFyUGFyZW50QW5kU2libGluZygpIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgICB9XG5cbiAgICAkcmVtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRkZXN0cm95KCkge1xuICAgICAgICB0aGlzLiRyZW1vdmUoKTtcbiAgICAgICAgdGhpcy4kY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJEb2N1bWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgIH1cblxuICAgIGhhc0NoaWxkTm9kZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIGNsZWFyQ2hpbGROb2RlcygpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkLm5leHRTaWJsaW5nID0gY2hpbGQ7XG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSB0aGlzLmxhc3RDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIGluc2VydEJlZm9yZShyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcblxuICAgICAgICBpZiAocmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZDtcbiAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nID0gbmV3Q2hpbGQ7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDAsIG5ld0NoaWxkKTtcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cblxuICAgIGluc2VydEFmdGVyKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAocmVmQ2hpbGQubmV4dFNpYmxpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLm5leHRTaWJsaW5nLCBuZXdDaGlsZCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW92ZSBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nLnByZXZpb3VzU2libGluZyA9IGNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09ICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuJGNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgcmVwbGFjZUNoaWxkKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlyc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGFzdENoaWxkID09PSByZWZDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZkNoaWxkLiRjbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSwgbmV3Q2hpbGQpO1xuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuXG4gICAgY2xvbmVOb2RlKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIGNvbXBpbGUob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmNvbXBpbGUob3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vdGlmeUNvbXBpbGVkKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5ub3RpZnlDb21waWxlZChvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGluayhzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQubGluayhzY29wZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vdGlmeUxpbmtlZCgpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5ub3RpZnlMaW5rZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2UoKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH07XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgZm9yRWFjaCB9IGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eS9tZXNzYWdlJztcbmltcG9ydCB7IGNvbXB1dGUsIHBhcnNlQXNzaWdubWVudCB9IGZyb20gJy4uL3BhcnNlcic7XG5cbmNsYXNzIEV4cE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSBjb21wdXRlKHRoaXMudGV4dCwgc2NvcGUsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgIT09IHRoaXMub2xkVmFsdWU7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgQmluZGluZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnRleHQgPSAnJztcbiAgICAgICAgdGhpcy5pc0V4cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICAgIHRoaXMucmlnaHRTdHIgPSAnJztcbiAgICAgICAgdGhpcy5vdXRwdXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnVud2F0Y2hlcyA9IFtdO1xuICAgICAgICB0aGlzLmNoYW5nZSA9IG5ldyBNZXNzZW5nZXIoKTtcbiAgICB9XG5cbiAgICBzZXRTY29wZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0T3V0cHV0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMub3V0cHV0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYmluZCh0ZXh0LCBpc0V4cCkge1xuICAgICAgICBpZiAodGV4dCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmlzRXhwID0gaXNFeHA7XG5cbiAgICAgICAgaWYgKGlzRXhwKSB7XG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGV4cDogbmV3IEV4cE5vZGUodGV4dCksXG4gICAgICAgICAgICAgICAgbGVmdFN0cjogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhdHRlcm4gPSAve3soW159XSopfX0vZztcbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XG5cbiAgICAgICAgd2hpbGUgKG1hdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgaW5kZXg6IG1hdGNoLmluZGV4LFxuICAgICAgICAgICAgICAgIGV4cDogbmV3IEV4cE5vZGUobWF0Y2hbMV0pLFxuICAgICAgICAgICAgICAgIGxlZnRTdHI6IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWdtZW50cy5sZW5ndGggPiAwICYmIGxhc3RJbmRleCA8IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0U3RyID0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGUob3B0aW9ucykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VnbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNFeHAgJiYgdGhpcy5zZWdtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzWzBdLmV4cC5jb21wdXRlKHNlbGYuc2NvcGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnNlZ21lbnRzWzBdLmV4cC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuZXhwLmNvbXB1dGUoc2VsZi5zY29wZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gKHNlZ21lbnQubGVmdFN0ciArIHNlZ21lbnQuZXhwLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGV4dCArIHRoaXMucmlnaHRTdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICBhc3NpZ24odmFsdWUpIHtcbiAgICAgICAgdmFyIGFzc2lnbm1lbnQgPSBwYXJzZUFzc2lnbm1lbnQodGhpcy50ZXh0LCB0aGlzLnNjb3BlKTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudC5vYmogIT0gbnVsbCAmJiBhc3NpZ25tZW50LnByb3AgIT0gbnVsbCkge1xuICAgICAgICAgICAgYXNzaWdubWVudC5vYmoudG9Qcm94eSgpW2Fzc2lnbm1lbnQucHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpc3RlbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnVud2F0Y2hlcyA9IHRoaXMuc2VnbWVudHMubWFwKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5zY29wZS4kd2F0Y2goc2VnbWVudC5leHAudGV4dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kZXRlY3QoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2UuZmlyZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVmZXIoYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmNhbmNlbFRpbWVvdXQoKTtcblxuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhbmNlbFRpbWVvdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb2JzZXJ2ZShhY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMub3V0cHV0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpc3RlbigpO1xuICAgICAgICB0aGlzLmNoYW5nZS5vbihhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZS5vZmYoYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLm91dHB1dCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcHV0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSAhPT0gdGhpcy5vbGRWYWx1ZTtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuc2VnbWVudHMuc29tZShmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIHNlZ21lbnQuZXhwLmRldGVjdCgpO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmNhbmNlbFRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy51bndhdGNoZXMuZm9yRWFjaChmdW5jdGlvbiAodW53YXRjaCkge1xuICAgICAgICAgICAgdW53YXRjaC5jYWxsKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgIHNlZ21lbnQuZXhwLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQmluZGluZyB9OyIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuXG5jbGFzcyBDRGF0YVNlY3Rpb25Ob2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5jZGF0YVNlY3Rpb24pO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ0RhdGFTZWN0aW9uTm9kZSB9OyIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuXG5jbGFzcyBDb21tZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuY29tbWVudCwgJyNjb21tZW50Jyk7XG4gICAgfVxuXG4gICAgbGluaygpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cblxuICAgIGdldE91dGVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0SW5uZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IENvbW1lbnROb2RlIH07XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuXG5jbGFzcyBDb25uZWN0aW9uTm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsaW5rZXIpe1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuY29ubmVjdGlvbiwgbmFtZSk7XG4gICAgICAgIHRoaXMubGlua2VyID0gbGlua2VyO1xuICAgIH1cblxuICAgIGxpbmsoc2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICByZXR1cm4gdGhpcy5saW5rZXIuY2FsbCh0aGlzLCBzY29wZSk7XG4gICAgfVxuXG4gICAgbm90aWZ5TGlua2VkKCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uSW5zZXJ0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25JbnNlcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRldGVjdCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRGV0ZWN0LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDaGFuZ2UoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25IYXNDaGFuZ2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkhhc0NoYW5nZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uVXBkYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25VcGRhdGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ29ubmVjdGlvbk5vZGUgfTsiLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcblxuY2xhc3MgRG9jdW1lbnRUeXBlTm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmRvY3VtZW50VHlwZSk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBEb2N1bWVudFR5cGVOb2RlIH07XG4iLCJpbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcblxuY2xhc3MgRG9jdW1lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuZG9jdW1lbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgRG9jdW1lbnROb2RlIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IENvbm5lY3Rpb25Ob2RlIH0gZnJvbSAnLi9jb25uZWN0aW9uJztcbmltcG9ydCB7IEF0dHJOb2RlIH0gZnJvbSAnLi9hdHRyaWJ1dGUnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICcuLi9wYXJzZXInO1xuXG5jbGFzcyBFbGVtZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBnZXQgcGFyZW50RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmVsZW1lbnQsIG5hbWUpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxmQ2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tcGlsZU9wdGlvbnMgPSBudWxsO1xuICAgICAgICB0aGlzLmlzQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgJHB1c2hBdHRyaWJ1dGUoYXR0cikge1xuICAgICAgICBhdHRyLm93bmVyRWxlbWVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xuICAgIH1cblxuICAgIGhhc0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZShrZXkpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaGVzWzBdO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQsIG1hdGNoZXMgPSB0aGlzLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVzWzBdO1xuICAgICAgICAgICAgdGFyZ2V0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG5ldyBBdHRyTm9kZShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHRhcmdldC5vd25lckVsZW1lbnQgPSB0aGlzO1xuICAgICAgICAgICAgdGFyZ2V0LmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaCh0YXJnZXQpO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlQXR0cmlidXRlKGtleSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gW10sIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBBdHRyTm9kZSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hdHRyaWJ1dGVzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLmF0dHJpYnV0ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzZWxmLmF0dHJpYnV0ZXMuaW5kZXhPZihtYXRjaCk7XG4gICAgICAgICAgICAgICAgbWF0Y2guZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYuYXR0cmlidXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Lmxlbmd0aCA+IDAgPyB0YXJnZXRbMF0gOiBudWxsO1xuICAgIH1cblxuICAgIGFwcGVuZEF0dHJpYnV0ZShhdHRyKSB7XG4gICAgICAgIGlmIChhdHRyLm93bmVyRWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDdXJyZW50IGF0dHJpYnV0ZSBpcyBub3QgbmV3IVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF0dHIub3duZXJFbGVtZW50ID0gdGhpcztcbiAgICAgICAgYXR0ci5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaChhdHRyKTtcbiAgICAgICAgcmV0dXJuIGF0dHI7XG4gICAgfVxuXG4gICAgb2JzZXJ2ZShrZXksIGFjdGlvbikge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaGVzWzBdLm9ic2VydmUoYWN0aW9uKTtcbiAgICB9XG5cbiAgICBnZXRPdXRlclRwbCgpIHtcbiAgICAgICAgdmFyIGF0dHJUcGwgPSAnJywgY2hpbGRUcGwgPSAnJztcblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0clRwbCArPSAnICc7XG4gICAgICAgICAgICBhdHRyVHBsICs9IGF0dHIuZ2V0T3V0ZXJUcGwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZFRwbCArPSBjaGlsZC5nZXRPdXRlclRwbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgdHBsID0gJzwnICsgdGhpcy5ub2RlTmFtZSArIGF0dHJUcGwgKyAnPicgKyBjaGlsZFRwbDtcblxuICAgICAgICBpZiAoIXRoaXMuc2VsZkNsb3NlZCkge1xuICAgICAgICAgICAgdHBsICs9ICgnPC8nICsgdGhpcy5ub2RlTmFtZSArICc+Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHBsO1xuICAgIH1cblxuICAgIGdldElubmVyVHBsKCkge1xuICAgICAgICB2YXIgY2hpbGRUcGwgPSAnJztcblxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkVHBsICs9IGNoaWxkLmdldE91dGVyVHBsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGlsZFRwbDtcbiAgICB9XG5cbiAgICBzZXRPdXRlclRwbCh0cGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBwYXJzZSh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZiwgdm5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYpO1xuICAgIH1cblxuICAgIHNldElubmVyVHBsKHRwbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2xlYXJDaGlsZE5vZGVzKCk7XG4gICAgICAgIHBhcnNlKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5hcHBlbmRDaGlsZCh2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldERpcmVjdGl2ZShrZXkpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnNvbWUoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF0dHIuZ2V0RGlyZWN0aXZlKGtleSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0ICE9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aXZlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcy5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmdldERpcmVjdGl2ZSgpO1xuICAgICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgcmV0dXJuIGRpciAhPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21waWxlKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jb21waWxlT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyLmNvbXBpbGUob3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBwZXJmb3JtIGRpcmVjdGl2ZSBhY2NvcmRpbmcgdG8gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gdXRpbHMub3JkZXJCeSh0aGlzLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5wcmlvcml0eTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNDb21wb25lbnQgPSBvcHRpb25zLmNvbnRhaW5zQ29tcG9uZW50KHRoaXMubm9kZU5hbWUpO1xuICAgICAgICBpZiAoIXRoaXMuaXNDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLmNvbXBpbGUob3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeUNvbXBpbGVkKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIubm90aWZ5Q29tcGlsZWQob3B0aW9ucyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5ub3RpZnlDb21waWxlZChvcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGluayhzY29wZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi5zY29wZSA9IHNjb3BlO1xuICAgICAgICBzZWxmLmh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzZWxmLm5vZGVOYW1lKTtcblxuICAgICAgICBpZiAodGhpcy5pc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBzY29wZS4kY3JlYXRlQ2hpbGRDbXAodGhpcy5ub2RlTmFtZSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC4kYmluZE5vZGUodGhpcyk7XG4gICAgICAgICAgICBzZWxmLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgIGF0dHIubGluayhzY29wZSwgc2VsZi5odG1sRWxlbWVudCwgc2VsZi5jb21wb25lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLmNvbXBvbmVudC4kaW5pdEF0dHJEb25lKCk7XG4gICAgICAgICAgICBzZWxmLmNvbXBvbmVudC4kbW91bnQoc2VsZi5odG1sRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgIGF0dHIubGluayhzY29wZSwgc2VsZi5odG1sRWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIHNlbGYuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQubGluayhzY29wZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VsZi5odG1sRWxlbWVudDtcbiAgICB9XG5cbiAgICBub3RpZnlMaW5rZWQoKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyLm5vdGlmeUxpbmtlZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQubm90aWZ5TGlua2VkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIuZGV0ZWN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuZGV0ZWN0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3Bvc2UoaXNGcm9tQ29tcG9uZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Zyb21Db21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMucmVtb3ZlSHRtbEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5jb21waWxlT3B0aW9ucyA9IG51bGw7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuJGRpc3Bvc2UodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBnZXRIdG1sRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlSHRtbEVsZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmh0bWxFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZU5vZGUodGhpcy5odG1sRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVFbGVtZW50KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50Tm9kZShuYW1lKTtcbiAgICB9XG5cbiAgICBjcmVhdGVBdHRyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBdHRyTm9kZShuYW1lKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb25uZWN0aW9uKG5hbWUsIGxpbmtlcikge1xuICAgICAgICByZXR1cm4gbmV3IENvbm5lY3Rpb25Ob2RlKG5hbWUsIGxpbmtlcik7XG4gICAgfVxufVxuXG5leHBvcnQgeyBFbGVtZW50Tm9kZSB9OyIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuXG5jbGFzcyBEb2N1bWVudEZyYWdtZW50Tm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuZG9jdW1lbnRGcmFnbWVudCwgJyNkb2N1bWVudC1mcmFnbWVudCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgRG9jdW1lbnRGcmFnbWVudE5vZGUgfTtcbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5L21lc3NhZ2UnO1xuXG52YXIgcHJvcENoYW5naW5nTXNnID0gbmV3IE1lc3NlbmdlcigpO1xudmFyIHByb3BDaGFuZ2VkTXNnID0gbmV3IE1lc3NlbmdlcigpO1xudmFyIHRhcmdldEtleSA9ICdfX3RhcmdldF9fJztcblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdmFsdWVbdGFyZ2V0S2V5XTtcblxuICAgICAgICAvLyB2YWx1ZSBpcyBhIHByb3h5IHJldHVybiBieSBwcm94eSBoYW5kbGVyXG4gICAgICAgIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmNsYXNzIEdldFByb3BlcnR5SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoZGVlcFByb3h5LCB2YXJpYWJsZXMsIGZ1bGxUYXJnZXRLZXkpIHtcbiAgICAgICAgdGhpcy5kZWVwUHJveHkgPSBkZWVwUHJveHk7XG4gICAgICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgICAgICB0aGlzLmZ1bGxUYXJnZXRLZXkgPSBmdWxsVGFyZ2V0S2V5O1xuICAgIH1cblxuICAgIGdldCh0YXJnZXQsIGtleSkge1xuICAgICAgICBpZiAodGFyZ2V0S2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXRba2V5XSwgZnVsbEtleSA9IGtleTtcblxuICAgICAgICBpZiAodGhpcy5mdWxsVGFyZ2V0S2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZ1bGxLZXkgPSB0aGlzLmZ1bGxUYXJnZXRLZXkgKyAnLicgKyBrZXk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWVwUHJveHkgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBQcm94eSh2YWx1ZSwgbmV3IEdldFByb3BlcnR5SGFuZGxlcih0aGlzLmRlZXBQcm94eSwgdGhpcy52YXJpYWJsZXMsIGZ1bGxLZXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleGlzdGVkID0gdGhpcy52YXJpYWJsZXMuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGFyZ2V0ID09PSB0YXJnZXQgJiYgaXRlbS5rZXkgPT09IGtleTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFleGlzdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICB0YXJnZXRLZXk6IHRoaXMuZnVsbFRhcmdldEtleVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuXG5jbGFzcyBTZXRQcm9wZXJ0eUhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgc2V0KHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlIHx8IChpc0FycmF5KHRhcmdldCkgJiYga2V5ID09PSAnbGVuZ3RoJykpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFwcGx5OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHByb3BDaGFuZ2luZ01zZy5maXJlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWxpZGF0aW9uXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24uYXBwbHkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHByb3BDaGFuZ2VkTXNnLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmNsYXNzIEFjY2Vzc1Byb3BlcnR5SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoZGVlcFByb3h5KSB7XG4gICAgICAgIHRoaXMuZGVlcFByb3h5ID0gZGVlcFByb3h5O1xuICAgIH1cblxuICAgIGdldCh0YXJnZXQsIGtleSkge1xuICAgICAgICBpZiAodGFyZ2V0S2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXRba2V5XTtcblxuICAgICAgICBpZiAodGhpcy5kZWVwUHJveHkgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBQcm94eSh2YWx1ZSwgbmV3IFNldFByb3BlcnR5SGFuZGxlcih0aGlzLmRlZXBQcm94eSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHNldCh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVlcFByb3h5KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGdldFRhcmdldCh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlIHx8IChpc0FycmF5KHRhcmdldCkgJiYga2V5ID09PSAnbGVuZ3RoJykpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFwcGx5OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHByb3BDaGFuZ2luZ01zZy5maXJlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWxpZGF0aW9uXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24uYXBwbHkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHByb3BDaGFuZ2VkTXNnLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEdldFByb3BlcnR5SGFuZGxlciwgU2V0UHJvcGVydHlIYW5kbGVyLCBBY2Nlc3NQcm9wZXJ0eUhhbmRsZXIsIHByb3BDaGFuZ2luZ01zZywgcHJvcENoYW5nZWRNc2csIGdldFRhcmdldCB9IiwiZXhwb3J0ICogZnJvbSAnLi9iYXNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXR0cmlidXRlJztcbmV4cG9ydCAqIGZyb20gJy4vY2RhdGFzZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9kb2N0eXBlJztcbmV4cG9ydCAqIGZyb20gJy4vZG9jdW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZnJhZ21lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL2hhbmRsZXInO1xuZXhwb3J0ICogZnJvbSAnLi9vYnNlcnZlcic7XG5leHBvcnQgKiBmcm9tICcuL3Byb3h5JzsiLCJpbXBvcnQgeyBjb21wdXRlLCBwYXJzZUV4cCB9IGZyb20gJy4uL3BhcnNlcic7XG5pbXBvcnQgeyBpc1JlZ0V4cCwgZm9yRWFjaCB9IGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgcHJvcENoYW5naW5nTXNnLCBwcm9wQ2hhbmdlZE1zZywgR2V0UHJvcGVydHlIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVyJztcblxuY2xhc3MgUHJvcGVydHlPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxhaW5NYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVnZXhNYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgb24ocHJvcCwgYWN0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIG1hcCA9IGlzUmVnRXhwKHByb3ApID8gdGhpcy5yZWdleE1hcCA6IHRoaXMucGxhaW5NYXA7XG5cbiAgICAgICAgaWYgKCFtYXAuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICBtYXAuc2V0KHByb3AsIFtdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICBhY3Rpb24uYmVmb3JlQ2hhbmdlZCA9IG9wdGlvbnMuYmVmb3JlQ2hhbmdlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcC5nZXQocHJvcCkucHVzaChhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9mZihwcm9wLCBhY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9mZihwcm9wLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIG1hcCA9IGlzUmVnRXhwKHByb3ApID8gdGhpcy5yZWdleE1hcCA6IHRoaXMucGxhaW5NYXA7XG5cbiAgICAgICAgaWYgKCFtYXAuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWN0aW9ucyA9IG1hcC5nZXQocHJvcCk7XG4gICAgICAgIHZhciBpbmRleCA9IGFjdGlvbnMuaW5kZXhPZihhY3Rpb24pO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVDaGFuZ2VkKHByb3AsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYWluTWFwLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgdGhpcy5wbGFpbk1hcC5nZXQocHJvcCkuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVnZXhNYXAuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9ucywgcGF0dGVybikge1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4udGVzdChwcm9wKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmJlZm9yZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYsIHByb3AsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpcmVDaGFuZ2luZyhwcm9wLCBhcmdzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5wbGFpbk1hcC5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgIHRoaXMucGxhaW5NYXAuZ2V0KHByb3ApLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVnZXhNYXAuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9ucywgcGF0dGVybikge1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4udGVzdChwcm9wKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5wbGFpbk1hcC5jbGVhcigpO1xuICAgICAgICB0aGlzLnJlZ2V4TWFwLmNsZWFyKCk7XG4gICAgfVxufVxuXG5jbGFzcyBPYmplY3RPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIG9uY2hhbmdpbmcgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmdzLnRhcmdldCwgcHJvcCA9IGFyZ3Mua2V5O1xuICAgICAgICAgICAgICAgIHNlbGYuZmlyZUNoYW5naW5nKG9iaiwgcHJvcCwgYXJncy5kYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbmNoYW5nZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmdzLnRhcmdldCwgcHJvcCA9IGFyZ3Mua2V5O1xuICAgICAgICAgICAgICAgIHNlbGYuZmlyZUNoYW5nZWQob2JqLCBwcm9wLCBhcmdzLmRhdGEpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICBwcm9wQ2hhbmdpbmdNc2cub24ob25jaGFuZ2luZyk7XG4gICAgICAgIHByb3BDaGFuZ2VkTXNnLm9uKG9uY2hhbmdlZCk7XG5cbiAgICAgICAgdGhpcy5vZmZDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9wQ2hhbmdpbmdNc2cub2ZmKG9uY2hhbmdpbmcpO1xuICAgICAgICAgICAgcHJvcENoYW5nZWRNc2cub2ZmKG9uY2hhbmdlZCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub2JqTWFwID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIG9uKG9iaiwgcHJvcCwgYWN0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIXRoaXMub2JqTWFwLmhhcyhvYmopKSB7XG4gICAgICAgICAgICB0aGlzLm9iak1hcC5zZXQob2JqLCBuZXcgUHJvcGVydHlPYnNlcnZlcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm9iak1hcC5nZXQob2JqKS5vbihwcm9wLCBhY3Rpb24sIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIG9mZihvYmosIHByb3AsIGFjdGlvbikge1xuICAgICAgICBpZiAodGhpcy5vYmpNYXAuaGFzKG9iaikpIHtcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLmdldChvYmopLm9mZihwcm9wLCBhY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUNoYW5nZWQob2JqLCBwcm9wLCBhcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLm9iak1hcC5oYXMob2JqKSkge1xuICAgICAgICAgICAgdGhpcy5vYmpNYXAuZ2V0KG9iaikuZmlyZUNoYW5nZWQocHJvcCwgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlQ2hhbmdpbmcob2JqLCBwcm9wLCBhcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLm9iak1hcC5oYXMob2JqKSkge1xuICAgICAgICAgICAgdGhpcy5vYmpNYXAuZ2V0KG9iaikuZmlyZUNoYW5naW5nKHByb3AsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vZmZDaGFuZ2UuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5vYmpNYXAuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9iak1hcCA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBNZW1iZXJXYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgdGFyZ2V0LCBrZXksIHRhcmdldEtleSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy50YXJnZXRLZXkgPSB0YXJnZXRLZXk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG51bGw7XG5cbiAgICAgICAgaWYgKCF0YXJnZXRLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGFyZ2V0S2V5ICsgJy4nICsga2V5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQob2JzZXJ2ZXIsIGFjdGlvbiwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSB0aGlzLm9ic2VydmVyLm9uKHRoaXMudGFyZ2V0LCB0aGlzLmtleSwgdGhpcy5hY3Rpb24sIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMudW53YXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVud2F0Y2guY2FsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKGNoYW5nZUtleSkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXRLZXkgIT0gbnVsbCAmJiB0aGlzLnRhcmdldEtleS5zdGFydHNXaXRoKGNoYW5nZUtleSkpIHtcbiAgICAgICAgICAgIHZhciBuZXdUYXJnZXQgPSBjb21wdXRlKHRoaXMudGFyZ2V0S2V5LCB0aGlzLnNjb3BlKTtcblxuICAgICAgICAgICAgaWYgKG5ld1RhcmdldCAhPT0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IG5ld1RhcmdldDtcbiAgICAgICAgICAgICAgICB0aGlzLnVud2F0Y2ggPSB0aGlzLm9ic2VydmVyLm9uKHRoaXMudGFyZ2V0LCB0aGlzLmtleSwgdGhpcy5hY3Rpb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIERldGVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICAgIHRoaXMudGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5kaWdlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlZmVyKGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2xlYXJEZWZlcigpO1xuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyRGVmZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpIHtcbiAgICAgICAgcHJvcENoYW5nZWRNc2cub24odGhpcy5kaWdlc3QpO1xuICAgIH1cblxuICAgIGFwcGx5KGFjdGlvbikge1xuICAgICAgICB0aGlzLnF1ZXVlLnB1c2goYWN0aW9uKTtcbiAgICB9XG5cbiAgICByZW1vdmUoYWN0aW9uKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucXVldWUuaW5kZXhPZihhY3Rpb24pO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucXVldWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHByb3BDaGFuZ2VkTXNnLm9mZih0aGlzLmRpZ2VzdCk7XG4gICAgICAgIHRoaXMuY2xlYXJEZWZlcigpO1xuICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgfVxufVxuXG52YXIgZGV0ZWN0b3IgPSBuZXcgRGV0ZWN0b3IoKTtcblxuZGV0ZWN0b3IuZXhlY3V0ZSgpO1xuXG5jbGFzcyBFeHBXYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgZXhwKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGV0ZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gc2VsZi52YWx1ZSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IGNvbXB1dGUoc2VsZi5leHAsIHNlbGYuc2NvcGUpO1xuXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIHNlbGYuYWN0aW9uLmNhbGwoc2VsZiwge1xuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXJ0KGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLnZhbHVlID0gY29tcHV0ZSh0aGlzLmV4cCwgdGhpcy5zY29wZSk7XG4gICAgICAgIGRldGVjdG9yLmFwcGx5KHNlbGYuZGV0ZWN0KTtcbiAgICAgICAgdGhpcy51bndhdGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGV0ZWN0b3IucmVtb3ZlKHNlbGYuZGV0ZWN0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy51bndhdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudW53YXRjaC5jYWxsKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBXYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgZXhwKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmRpZ2VzdHMgPSBbXTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gbnVsbDtcbiAgICB9XG5cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhwID09PSAnKicpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwID0gLy4rL2k7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNSZWdFeHAodGhpcy5leHApKSB7XG4gICAgICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuc2NvcGUsXG4gICAgICAgICAgICAgICAga2V5OiB0aGlzLmV4cFxuICAgICAgICAgICAgfV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXN0ID0gcGFyc2VFeHAodGhpcy5leHApO1xuXG4gICAgICAgIGlmIChhc3QuaGFzQ0MoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgZGlydHlDaGVjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuZXhwXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhciBpdGVtcyA9IFtdLFxuICAgICAgICAvLyAgICAgaGFuZGxlciA9IG5ldyBHZXRQcm9wZXJ0eUhhbmRsZXIodHJ1ZSwgaXRlbXMpLFxuICAgICAgICAvLyAgICAgcHJveHkgPSBuZXcgUHJveHkodGhpcy5zY29wZSwgaGFuZGxlcik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGNvbXB1dGUodGhpcy5leHAsIHByb3h5KTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gcmV0dXJuIGl0ZW1zO1xuXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29sbGVjdE1lbWJlcnM6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wdXRlKHRoaXMuZXhwLCB0aGlzLnNjb3BlLCBvcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gb3B0aW9ucy5tZW1iZXJzO1xuICAgIH1cblxuICAgIHN0YXJ0KG9ic2VydmVyLCBhY3Rpb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy51cGRhdGVNZW1iZXIoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVNZW1iZXIoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnBhcnNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uZGlydHlDaGVjaykge1xuICAgICAgICAgICAgICAgIHZhciBkaWdlc3QgPSBuZXcgRXhwV2F0Y2hlcihzZWxmLnNjb3BlLCBpdGVtLmtleSk7XG4gICAgICAgICAgICAgICAgc2VsZi5kaWdlc3RzLnB1c2goZGlnZXN0KTtcbiAgICAgICAgICAgICAgICBzZWxmLnN0YXJ0RGlnZXN0KGRpZ2VzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbWVtYmVyID0gbmV3IE1lbWJlcldhdGNoZXIoc2VsZi5zY29wZSwgaXRlbS50YXJnZXQsIGl0ZW0ua2V5LCBpdGVtLnRhcmdldEtleSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYubWVtYmVyc1ttZW1iZXIuaWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubWVtYmVyc1ttZW1iZXIuaWRdID0gbWVtYmVyO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnN0YXJ0TWVtYmVyKG1lbWJlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydERpZ2VzdChkaWdlc3QpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGRpZ2VzdC5zdGFydChmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgc2VsZi5hY3Rpb24uY2FsbCh0aGlzLCBhcmdzKTtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICBzdGFydE1lbWJlcihtZW1iZXIpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIG1lbWJlci5zdGFydChzZWxmLm9ic2VydmVyLCBmdW5jdGlvbiAocHJvcCwgYXJncykge1xuICAgICAgICAgICAgdmFyIGNoYW5nZUtleSA9IHByb3A7XG5cbiAgICAgICAgICAgIGlmIChtZW1iZXIudGFyZ2V0S2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VLZXkgPSBtZW1iZXIudGFyZ2V0S2V5ICsgJy4nICsgcHJvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yRWFjaChzZWxmLm1lbWJlcnMsIGZ1bmN0aW9uIChtZW1iZXJXYXRjaGVyLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBtZW1iZXJXYXRjaGVyLnVwZGF0ZShjaGFuZ2VLZXkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHNlbGYudXBkYXRlTWVtYmVyKCk7XG4gICAgICAgICAgICBzZWxmLmFjdGlvbi5jYWxsKHRoaXMsIHByb3AsIGFyZ3MpO1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGZvckVhY2godGhpcy5tZW1iZXJzLCBmdW5jdGlvbiAobWVtYmVyLCBrZXkpIHtcbiAgICAgICAgICAgIG1lbWJlci5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpZ2VzdHMuZm9yRWFjaChmdW5jdGlvbiAoZGlnZXN0KSB7XG4gICAgICAgICAgICBkaWdlc3QuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuZGlnZXN0cyA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgT2JqZWN0T2JzZXJ2ZXIoKTtcbiAgICAgICAgdGhpcy53YXRjaGVycyA9IFtdO1xuICAgIH1cblxuICAgIHdhdGNoKG9iaiwgZXhwLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgd2F0Y2hlciA9IHRoaXMuY3JlYXRlV2F0Y2hlcihvYmosIGV4cCk7XG5cbiAgICAgICAgd2F0Y2hlci5zdGFydCh0aGlzLm9ic2VydmVyLCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3YXRjaGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlV2F0Y2hlcih3YXRjaGVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZShvYmosIGV4cCwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIHdhdGNoZXIgPSB0aGlzLmNyZWF0ZVdhdGNoZXIob2JqLCBleHApO1xuXG4gICAgICAgIHdhdGNoZXIuc3RhcnQodGhpcy5vYnNlcnZlciwgYWN0aW9uLCB7XG4gICAgICAgICAgICBiZWZvcmVDaGFuZ2VkOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3YXRjaGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlV2F0Y2hlcih3YXRjaGVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjcmVhdGVXYXRjaGVyKG9iaiwgZXhwKSB7XG4gICAgICAgIHZhciB3YXRjaGVyID0gbmV3IFdhdGNoZXIob2JqLCBleHApO1xuXG4gICAgICAgIHRoaXMud2F0Y2hlcnMucHVzaCh3YXRjaGVyKTtcblxuICAgICAgICByZXR1cm4gd2F0Y2hlcjtcbiAgICB9XG5cbiAgICByZW1vdmVXYXRjaGVyKHdhdGNoZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy53YXRjaGVycy5pbmRleE9mKHdhdGNoZXIpO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVDaGFuZ2VkKG9iaiwgcHJvcCwgYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlci5maXJlQ2hhbmdlZChvYmosIHByb3AsIGFyZ3MpO1xuICAgIH1cblxuICAgIGZpcmVDaGFuZ2luZyhvYmosIHByb3AsIGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXIuZmlyZUNoYW5naW5nKG9iaiwgcHJvcCwgYXJncyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy53YXRjaGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3YXRjaGVyKSB7XG4gICAgICAgICAgICB3YXRjaGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMud2F0Y2hlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLm9ic2VydmVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgeyBQcm9wZXJ0eU9ic2VydmVyLCBPYnNlcnZlciB9OyIsImltcG9ydCB7IFNldFByb3BlcnR5SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcic7XHJcblxyXG5PYmplY3QucHJvdG90eXBlLnRvUHJveHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb3h5KHRoaXMsIG5ldyBTZXRQcm9wZXJ0eUhhbmRsZXIoKSk7XHJcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xuXG5jbGFzcyBUZXh0Tm9kZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLnRleHQsICcjdGV4dCcpO1xuICAgICAgICB0aGlzLmJpbmRpbmcgPSBuZXcgQmluZGluZygpO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb21waWxlKCkge1xuICAgICAgICB0aGlzLmJpbmRpbmcuYmluZCh0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxuXG4gICAgbGluayhzY29wZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5iaW5kaW5nLnNldFNjb3BlKHNjb3BlKTtcblxuICAgICAgICB0aGlzLmJpbmRpbmcub2JzZXJ2ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XG4gICAgfVxuXG4gICAgaGFzQ2hhbmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iaW5kaW5nLmRldGVjdCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy5odG1sRWxlbWVudCwgdGhpcy5yZW5kZXIodGhpcy5iaW5kaW5nLnZhbHVlKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIGdldE91dGVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0SW5uZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcbiAgICB9XG5cbiAgICByZW1vdmVIdG1sRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaHRtbEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdXRpbHMucmVtb3ZlTm9kZSh0aGlzLmh0bWxFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmluZGluZy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuYmluZGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUZXh0Tm9kZSB9OyIsImltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3L2luamVjdG9yJ1xuXG5mdW5jdGlvbiBkaXJlY3RpdmUobWV0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IG1ldGEuc2VsZWN0b3IgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyQ29uc3RydWN0b3IodHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IsIHRhcmdldCwgbWV0YSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgZGlyZWN0aXZlIH0iLCJpbXBvcnQgeyB0eXBlQ29uc3QsIGluamVjdG9yIH0gZnJvbSAnLi4vdmlldy9pbmplY3RvcidcblxuZnVuY3Rpb24gc2VydmljZShtZXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gbWV0YS5zZWxlY3RvciB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb25zdHJ1Y3Rvcih0eXBlQ29uc3Quc2VydmljZSwgc2VsZWN0b3IsIHRhcmdldCwgbWV0YSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgc2VydmljZSB9IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSBcIi4uL3ZpZXcvZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gXCIuLi9kZWNvcmF0b3IvZGlyZWN0aXZlXCI7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWJpbmQtY21wLW9wdGlvbnMnXHJcbn0pXHJcbmNsYXNzIEJpbmRDbXBPcHRpb25zRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhck9wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU9wdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyT3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gXCIuLi92aWV3L2RpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tIFwiLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tYmluZC1jbXAnXHJcbn0pXHJcbmNsYXNzIEJpbmRDbXBEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiRwcmlvcml0eSA9IDU7XHJcbiAgICAgICAgdGhpcy5uYW1lRGlyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydCgpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lRGlyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubmFtZURpciA9IHRoaXMuJGVsZW1lbnQuZ2V0RGlyZWN0aXZlKCduLW5hbWUnKTtcclxuICAgICAgICB0aGlzLmJpbmRDbXBPcHRpb25zRGlyID0gdGhpcy4kZWxlbWVudC5nZXREaXJlY3RpdmUoJ24tYmluZC1jbXAtb3B0aW9ucycpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5iaW5kQ21wT3B0aW9uc0RpciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5iaW5kQ21wT3B0aW9uc0Rpci52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuJGRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgY29tcG9uZW50ID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XHJcblxyXG4gICAgICAgIGlmIChjb21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLiRiaW5kaW5nLnNjb3BlLiRjcmVhdGVDaGlsZENtcChjb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm9uSW5pdCh0aGlzLnZpZXcpO1xyXG4gICAgICAgIHRoaXMudmlldy4kbW91bnQodGhpcy4kaHRtbEVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5uYW1lRGlyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lRGlyLnNldENtcCh0aGlzLnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tYmluZCdcbn0pXG5jbGFzcyBCaW5kRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgIH1cblxuICAgIGJpbmQoKSB7XG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3L2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLWVtYmVkJ1xufSlcbmNsYXNzIEVtYmVkRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNvbXBpbGUob3B0aW9ucykge1xuICAgICAgICB2YXIgZW1iZWRUcGwgPSBvcHRpb25zLmdldEVtYmVkVHBsKCk7XG4gICAgICAgIGlmIChlbWJlZFRwbCkge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5zZXRJbm5lclRwbChlbWJlZFRwbCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1oaWRlJyxcbiAgICBpbmplY3Q6IHtcbiAgICAgICAgICAgICRhbmltYXRlOiAnJGFuaW1hdGUnXG4gICAgfVxufSlcbmNsYXNzIEhpZGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSkge1xuICAgICAgICAgICAgdGhpcy4kYW5pbWF0ZS5sZWF2ZSh0aGlzLiRlbGVtZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kYW5pbWF0ZS5lbnRlcih0aGlzLiRlbGVtZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1pZicsXG4gICAgaW5qZWN0OiB7XG4gICAgICAgICRhbmltYXRlOiAnJGFuaW1hdGUnXG4gICAgfVxufSlcbmNsYXNzIElmRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLWlmJyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSkge1xuICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy4kaHRtbEVsZW1lbnQsIHRoaXMuaHRtbENvbW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy4kYmluZGluZy5jb21wdXRlKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRodG1sRWxlbWVudC5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRhbmltYXRlLmVudGVyKHRoaXMuJGVsZW1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoc2VsZi5odG1sQ29tbWVudCwgc2VsZi4kaHRtbEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50LnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGFuaW1hdGUubGVhdmUodGhpcy4kZWxlbWVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShzZWxmLiRodG1sRWxlbWVudCwgc2VsZi5odG1sQ29tbWVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBudWxsO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmQnXG5leHBvcnQgKiBmcm9tICcuL2VtYmVkJ1xuZXhwb3J0ICogZnJvbSAnLi9oaWRlJ1xuZXhwb3J0ICogZnJvbSAnLi9pZidcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnXG5leHBvcnQgKiBmcm9tICcuL3JlcGVhdCdcbmV4cG9ydCAqIGZyb20gJy4vc2hvdydcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaCdcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGUnXG5leHBvcnQgKiBmcm9tICcuL25hbWUnXG5leHBvcnQgKiBmcm9tICcuL2JpbmQtY21wJ1xuZXhwb3J0ICogZnJvbSAnLi9iaW5kLWNtcC1vcHRpb25zJyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcvZGlyZWN0aXZlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1tb2RlbCcsXG4gICAgaW5qZWN0OiB7XG4gICAgICAgIG9wdGlvbnM6ICckbW9kZWxPcHRpb25zJ1xuICAgIH1cbn0pXG5jbGFzcyBNb2RlbERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuJHZpZXdWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuJG1vZGVsVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLiRwYXJzZXJzID0gW107XG4gICAgICAgIHRoaXMuJGZvcm1hdHRlcnMgPSBbXTtcbiAgICAgICAgdGhpcy4kdmlld0NoYW5nZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLiR2YWxpZGF0b3JzID0gW107XG4gICAgICAgIHRoaXMuJGZlZWRiYWNrID0gJyc7XG4gICAgICAgIHRoaXMuJHByaXN0aW5lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kZGlydHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kdmFsaWQgPSB0cnVlO1xuICAgICAgICB0aGlzLiRpbnZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnNldFZpZXdWYWx1ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLiRjb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0TW9kZWxWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc01lc3Nlbmdlcih0aGlzLiRjb21wb25lbnQuY2hhbmdlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC5jaGFuZ2Uub24oZnVuY3Rpb24gKGUsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRNb2RlbFZhbHVlKGFyZ3MubmV3dmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb2VudCAnICsgdGhpcy4kY29tcG9uZW50LiQkbWV0YS5zZWxlY3RvciArICdtdXN0IGRlZmluZSBbY2hhbmdlXSBldmVudCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuc2V0Vmlld1ZhbHVlKCk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLiRwYXJzZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy4kZm9ybWF0dGVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuJHZpZXdDaGFuZ2VMaXN0ZW5lcnMgPSBudWxsO1xuICAgICAgICB0aGlzLiR2YWxpZGF0b3JzID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRWaWV3VmFsdWUoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLiRtb2RlbFZhbHVlID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XG5cbiAgICAgICAgdmFyIHZpZXdWYWx1ZSA9IHRoaXMuJG1vZGVsVmFsdWU7XG5cbiAgICAgICAgdGhpcy4kdmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIHNlbGYuJG1vZGVsVmFsdWUsIHNlbGYuJHZpZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGZvcm1hdHRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICB2aWV3VmFsdWUgPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2aWV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy4kdmlld1ZhbHVlICE9PSB2aWV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHZpZXdWYWx1ZSA9IHZpZXdWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQudmFsdWUgPSB0aGlzLiRtb2RlbFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LiRzZXRBdHRyKCd2YWx1ZScsIHRoaXMuJG1vZGVsVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVDc3MoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cblxuICAgIHNldE1vZGVsVmFsdWUodmlld1ZhbHVlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnNldERpcnR5KHRydWUpO1xuXG4gICAgICAgIHRoaXMuJHZpZXdWYWx1ZSA9IHZpZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLiR2aWV3Q2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHNlbGYsIHZpZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBtb2RlbFZhbHVlID0gdGhpcy4kdmlld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuJHBhcnNlcnMuZm9yRWFjaChmdW5jdGlvbiAocGFyc2VyKSB7XG4gICAgICAgICAgICBtb2RlbFZhbHVlID0gcGFyc2VyLmNhbGwoc2VsZiwgbW9kZWxWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLiRtb2RlbFZhbHVlICE9PSBtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiRtb2RlbFZhbHVlID0gbW9kZWxWYWx1ZTtcblxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IuY2FsbChzZWxmLCBzZWxmLiRtb2RlbFZhbHVlLCBzZWxmLiR2aWV3VmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuJGJpbmRpbmcuYXNzaWduKHRoaXMuJG1vZGVsVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQ3NzKCkge1xuICAgICAgICB2YXIgZWxlID0gdGhpcy4kaHRtbEVsZW1lbnQsXG4gICAgICAgICAgICBjc3MgPSB0aGlzLm9wdGlvbnMuY3NzQ2xhc3M7XG5cbiAgICAgICAgaWYgKHRoaXMuJGRpcnR5KSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MuZGlydHkpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLnByaXN0aW5lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5wcmlzdGluZSk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MuZGlydHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJHZhbGlkKSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MudmFsaWQpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmludmFsaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLmludmFsaWQpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLnZhbGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVN0YXRlKCkge1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuJGh0bWxFbGVtZW50Lm5hbWU7XG5cbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzLiRiaW5kaW5nLnNjb3BlLnRvUHJveHkoKTtcblxuICAgICAgICBpZiAoc2NvcGVbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgc2NvcGVbbmFtZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGF0ZSA9IHNjb3BlW25hbWVdLnRvUHJveHkoKTtcblxuICAgICAgICBzdGF0ZS4kcHJpc3RpbmUgPSB0aGlzLiRwcmlzdGluZTtcbiAgICAgICAgc3RhdGUuJGRpcnR5ID0gdGhpcy4kZGlydHk7XG4gICAgICAgIHN0YXRlLiR2YWxpZCA9IHRoaXMuJHZhbGlkO1xuICAgICAgICBzdGF0ZS4kaW52YWxpZCA9IHRoaXMuJGludmFsaWQ7XG4gICAgICAgIHN0YXRlLiRmZWVkYmFjayA9IHRoaXMuJGZlZWRiYWNrO1xuICAgIH1cblxuICAgIHNldERpcnR5KGRpcnR5KSB7XG4gICAgICAgIHRoaXMuJGRpcnR5ID0gZGlydHk7XG4gICAgICAgIHRoaXMuJHByaXN0aW5lID0gIWRpcnR5O1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3NzKCk7XG4gICAgfVxuXG4gICAgc2V0VmFsaWRpdHkodmFsaWQsIGZlZWRiYWNrKSB7XG4gICAgICAgIHRoaXMuJHZhbGlkID0gdmFsaWQ7XG4gICAgICAgIHRoaXMuJGludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHRoaXMuJGZlZWRiYWNrID0gZmVlZGJhY2s7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDc3MoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tbmFtZSdcclxufSlcclxuY2xhc3MgTmFtZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuJG91dHB1dCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydCgpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLiRiaW5kaW5nLnRleHQ7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5uYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwcm94eSA9IHRoaXMuJHNjb3BlLnRvUHJveHkoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHByb3h5W3RoaXMubmFtZV0gPSB0aGlzLiRjb21wb25lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwcm94eVt0aGlzLm5hbWVdID0gdGhpcy4kZWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5hbWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRzY29wZVt0aGlzLm5hbWVdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q21wKGNtcCkge1xyXG4gICAgICAgIHZhciBwcm94eSA9IHRoaXMuJHNjb3BlLnRvUHJveHkoKTtcclxuICAgICAgICBwcm94eVt0aGlzLm5hbWVdID0gY21wO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL3ZpZXcvY29tcG9uZW50JztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXJlcGVhdCdcbn0pXG5jbGFzcyBSZXBlYXREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pdGVtRXhwID0gJyc7XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5kYXRhSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jbXBJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmhlYWRlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vdGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbkNvbXBpbGUoKSB7XG4gICAgICAgIHZhciBhcmcgPSB0aGlzLiRhdHRyLm5vZGVWYWx1ZTtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50O1xuICAgICAgICB2YXIgcGF0dGVybiA9IC9eKFthLXpfXStcXHcrKVxccytpblxccysoLispJC9pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGF0dGVybi5leGVjKGFyZyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ24tcmVwZWF0OiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1FeHAgPSByZXN1bHRbMV07XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSByZXN1bHRbMl07XG5cbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy4kYXR0cik7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gZWxlbWVudC5nZXRPdXRlclRwbCgpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBlbGVtZW50LmNyZWF0ZUNvbm5lY3Rpb24oJ24tcmVwZWF0JywgZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBzY29wZS4kZXZhbChzZWxmLml0ZW1zRXhwKTtcblxuICAgICAgICAgICAgc2VsZi5zY29wZSA9IHNjb3BlO1xuICAgICAgICAgICAgc2VsZi5zZXREYXRhSXRlbXMoaXRlbXMpO1xuICAgICAgICAgICAgc2VsZi5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdzdGFydDogbi1yZXBlYXQnKTtcbiAgICAgICAgICAgIHNlbGYuZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZW5kOiBuLXJlcGVhdCcpO1xuXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLmhlYWRlcik7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLmZvb3Rlcik7XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZWxlbWVudCwgY29ubmVjdGlvbik7XG4gICAgICAgIGVsZW1lbnQuZGVzdHJveSgpO1xuXG4gICAgICAgIGNvbm5lY3Rpb24ub25JbnNlcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnJlbmRlcigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbm5lY3Rpb24ub25EZXRlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBzZWxmLnNjb3BlLiRldmFsKHNlbGYuaXRlbXNFeHApO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5kYXRhSXRlbXMgIT09IGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXREYXRhSXRlbXMoaXRlbXMpO1xuICAgICAgICAgICAgICAgIHNlbGYucmVuZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNtcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkU2NvcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRTY29wZS4kZGV0ZWN0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29ubmVjdGlvbi5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLiRkZXN0cm95KCk7XG4gICAgICAgICAgICBlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5jbXBJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChjbXBJdGVtKSB7XG4gICAgICAgICAgICBjbXBJdGVtLiRkZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNtcEl0ZW1zID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZvb3RlciA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0RGF0YUl0ZW1zKHZhbHVlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY29wZS4kd2F0Y2godGhpcy5kYXRhSXRlbXMsICdsZW5ndGgnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDbXBJdGVtKGRhdGFJdGVtKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgZmlsdGVycyA9IHRoaXMuY21wSXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVtzZWxmLml0ZW1FeHBdID09PSBkYXRhSXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YXJnZXQgPSBmaWx0ZXJzWzBdO1xuXG4gICAgICAgIHRoaXMuY21wSXRlbXMgPSB0aGlzLmNtcEl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1bc2VsZi5pdGVtRXhwXSAhPT0gZGF0YUl0ZW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdmFyIG5ld0NtcEl0ZW1zID0gW107XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICAgICAgdXRpbHMuZm9yRWFjaChzZWxmLmRhdGFJdGVtcywgZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgdmFyIGNtcEl0ZW0gPSBzZWxmLmdldENtcEl0ZW0oaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChjbXBJdGVtID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjbXBJdGVtID0gbmV3IENvbXBvbmVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBzZWxmLml0ZW1UZW1wbGF0ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNtcEl0ZW1bc2VsZi5pdGVtRXhwXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgY21wSXRlbS4kaW5oZXJpdENtcChzZWxmLnNjb3BlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY21wSXRlbVsnJGluZGV4J10gPSBpbmRleDtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNtcEl0ZW0uJHJlbmRlcih0cnVlKSk7XG4gICAgICAgICAgICBuZXdDbXBJdGVtcy5wdXNoKGNtcEl0ZW0pO1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNlbGYuY21wSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2VsZi5jbXBJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXBlYXRJdGVtKSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0SXRlbS4kZGVzdHJveSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmNtcEl0ZW1zID0gbmV3Q21wSXRlbXM7XG4gICAgICAgIHV0aWxzLnJlbW92ZU5vZGVCZXR3ZWVuKHNlbGYuaGVhZGVyLCBzZWxmLmZvb3Rlcik7XG4gICAgICAgIHNlbGYuZm9vdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZyYWdtZW50LCBzZWxmLmZvb3Rlcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldy9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zaG93JyxcbiAgICBpbmplY3Q6IHtcbiAgICAgICAgJGFuaW1hdGU6ICckYW5pbWF0ZSdcbiAgICB9XG59KVxuY2xhc3MgU2hvd0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLiRhbmltYXRlLmVudGVyKHRoaXMuJGVsZW1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRodG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRhbmltYXRlLmxlYXZlKHRoaXMuJGVsZW1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRodG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tY2hlY2tlZCdcbn0pXG5jbGFzcyBDaGVja2VkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY2hlY2tlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1kaXNhYmxlZCdcbn0pXG5jbGFzcyBEaXNhYmxlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2Rpc2FibGVkJyk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vY2hlY2tlZCdcbmV4cG9ydCAqIGZyb20gJy4vZGlzYWJsZWQnXG5leHBvcnQgKiBmcm9tICcuL3JlYWRvbmx5J1xuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3RlZCciLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1yZWFkb25seSdcbn0pXG5jbGFzcyBSZWFkb25seURpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3JlYWRvbmx5Jyk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXNlbGVjdGVkJ1xufSlcbmNsYXNzIFNlbGVjdGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignc2VsZWN0ZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldy9kaXJlY3RpdmUnO1xuXG5jbGFzcyBTdGF0ZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoYXR0ck5hbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hdHRyTmFtZSA9IGF0dHJOYW1lO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB0aGlzLnBlcmZvcm0oKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtKCk7XG4gICAgfVxuXG4gICAgcGVyZm9ybSgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuJGh0bWxFbGVtZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kaHRtbEVsZW1lbnQuaGFzQXR0cmlidXRlKHRoaXMuYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMuYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IiwiaW1wb3J0IHsgQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2NsYXNzJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWNsYXNzLWV2ZW4nXHJcbn0pXHJcbmNsYXNzIENsYXNzRXZlbkRpcmVjdGl2ZSBleHRlbmRzIENsYXNzRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuJGluZGV4ICYgMSA9PT0gMTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9jbGFzcyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1jbGFzcy1vZGQnXHJcbn0pXHJcbmNsYXNzIENsYXNzT2RkRGlyZWN0aXZlIGV4dGVuZHMgQ2xhc3NEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZS4kaW5kZXggJiAxID09PSAwO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbGl0eSc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yL2RpcmVjdGl2ZSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLWNsYXNzJ1xyXG59KVxyXG5jbGFzcyBDbGFzc0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsQ2xhc3NMaXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJzZUNsYXNzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaEFycmF5KGFyciwgYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnVud2F0Y2hBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLiR3YXRjaChhcnIsICdsZW5ndGgnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdW53YXRjaEFycmF5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVud2F0Y2ggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnVud2F0Y2guY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMudW53YXRjaEFycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dFRvQXJyYXkodGV4dCkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRyaW0oKS5sZW5ndGggPiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlQ2xhc3MoKSB7XHJcbiAgICAgICAgdmFyIGNsYXNzVGV4dCA9IHRoaXMuJGdldEF0dHJWYWx1ZSgnY2xhc3MnKTtcclxuXHJcbiAgICAgICAgaWYgKCFjbGFzc1RleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsQ2xhc3NMaXN0ID0gdGhpcy50ZXh0VG9BcnJheShjbGFzc1RleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENsYXNzTGlzdChhcnIpIHtcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbENsYXNzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDbGFzcygpIHtcclxuICAgICAgICBpZiAodGhpcy5za2lwKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICAgICBuZXdBcnIgPSBbXSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3QXJyID0gdGhpcy50ZXh0VG9BcnJheSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIG5ld0FyciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaEFycmF5KHZhbHVlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRDbGFzc0xpc3QodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBvZiBuLWNsYXNzIHNob3VsZCBiZSBzdHJpbmcgb3IgYXJyYXknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRDbGFzc0xpc3QobmV3QXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQ2xhc3NEaXJlY3RpdmUgfVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL2NsYXNzJztcclxuZXhwb3J0ICogZnJvbSAnLi9jbGFzcy1ldmVuJztcclxuZXhwb3J0ICogZnJvbSAnLi9jbGFzcy1vZGQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZS1ldmVuJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZS1vZGQnOyIsImltcG9ydCB7IFN0eWxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1zdHlsZS1ldmVuJ1xyXG59KVxyXG5jbGFzcyBTdHlsZUV2ZW5EaXJlY3RpdmUgZXh0ZW5kcyBTdHlsZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlLiRpbmRleCAmIDEgPT09IDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdHlsZURpcmVjdGl2ZSB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tc3R5bGUtb2RkJ1xyXG59KVxyXG5jbGFzcyBTdHlsZU9kZERpcmVjdGl2ZSBleHRlbmRzIFN0eWxlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuJGluZGV4ICYgMSA9PT0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcvZGlyZWN0aXZlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbGl0eSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zdHlsZSdcbn0pXG5jbGFzcyBTdHlsZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5pdGlhbFN0eWxlID0ge307XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMucGFyc2VTdHlsZSgpO1xuICAgICAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW53YXRjaE9iaigpO1xuICAgIH1cblxuICAgIHdhdGNoT2JqKG9iaiwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnVud2F0Y2hPYmooKTtcbiAgICAgICAgdGhpcy4kc2NvcGUuJHdhdGNoKG9iaiwgJyonLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1bndhdGNoT2JqKCkge1xuICAgICAgICBpZiAodGhpcy51bndhdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudW53YXRjaC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlU3R5bGUoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuJGdldEF0dHJWYWx1ZSgnc3R5bGUnKTtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXRpYWxTdHlsZSA9IHRoaXMudGV4dFRvT2JqZWN0KHZhbHVlKTtcbiAgICB9XG5cbiAgICB0ZXh0VG9PYmplY3QodGV4dCkge1xuICAgICAgICB2YXIgb2JqID0ge30sXG4gICAgICAgICAgICBsaXN0ID0gdGV4dC5zcGxpdCgnOycpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnRyaW0oKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgc3ViSXRlbXMgPSBpdGVtLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHN1Ykl0ZW1zWzBdO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3ViSXRlbXNbMV07XG4gICAgICAgICAgICBvYmpbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBhcHBseVN0eWxlKG9iaikge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuJGh0bWxFbGVtZW50O1xuXG4gICAgICAgIC8vIGNsZWFuIHVwIHN0eWxlXG4gICAgICAgIGVsZW1lbnQuc3R5bGUgPSAnJztcblxuICAgICAgICAvLyBzZXQgbmV3IHN0eWxlXG4gICAgICAgIHV0aWxzLmZvckVhY2godGhpcy5pbml0aWFsU3R5bGUsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHV0aWxzLmZvckVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFN0eWxlKCkge1xuICAgICAgICBpZiAodGhpcy5za2lwKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgbmV3U3R5bGUgPSB7fTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXdTdHlsZSA9IHRoaXMudGV4dFRvT2JqZWN0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG5ld1N0eWxlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaE9iaih2YWx1ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFwcGx5U3R5bGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgb2Ygbi1zdHlsZSBzaG91bGQgYmUgc3RyaW5nIG9yIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcHBseVN0eWxlKG5ld1N0eWxlKTtcbiAgICB9XG5cbiAgICBza2lwKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgeyBTdHlsZURpcmVjdGl2ZSB9XG4iLCJleHBvcnQgKiBmcm9tICcuL3N3aXRjaCdcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoLWRlZmF1bHQnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC13aGVuJyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcvZGlyZWN0aXZlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbGl0eSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zd2l0Y2gtZGVmYXVsdCdcbn0pXG5jbGFzcyBTd2l0Y2hEZWZhdWx0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc01hdGNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnN3aXRjaFdoZW5EaXJzID0gW107XG4gICAgfVxuXG4gICAgaW5pdFN3aXRjaFdoZW5EaXJzKCkge1xuICAgICAgICB2YXIgdkVsZSA9IHRoaXMuJGVsZW1lbnQ7XG5cbiAgICAgICAgd2hpbGUgKHZFbGUucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciB3aGVuRGlyID0gdkVsZS5wcmV2aW91c1NpYmxpbmcuZ2V0RGlyZWN0aXZlKCduLXN3aXRjaC13aGVuJyk7XG5cbiAgICAgICAgICAgIGlmICh3aGVuRGlyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFdoZW5EaXJzLnB1c2god2hlbkRpcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZFbGUgPSB2RWxlLnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hdGNoKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuc3dpdGNoV2hlbkRpcnMuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaXNNYXRjaDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmluaXRTd2l0Y2hXaGVuRGlycygpO1xuICAgICAgICB0aGlzLmlzTWF0Y2ggPSB0aGlzLm1hdGNoKCk7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLXN3aXRjaC1kZWZhdWx0Jyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzTWF0Y2gpIHtcbiAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuJGh0bWxFbGVtZW50LCB0aGlzLmh0bWxDb21tZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoV2hlbkRpcnMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5pc01hdGNoQ2hhbmdlZC5vbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5pc01hdGNoLCBuZXdWYWx1ZSA9IHRoaXMubWF0Y2goKTtcblxuICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmlzTWF0Y2ggPSBuZXdWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRodG1sRWxlbWVudC5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy5odG1sQ29tbWVudCwgdGhpcy4kaHRtbEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRodG1sRWxlbWVudC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy4kaHRtbEVsZW1lbnQsIHRoaXMuaHRtbENvbW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3dpdGNoV2hlbkRpcnMgPSBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3L2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvZGlyZWN0aXZlJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbGl0eS9tZXNzYWdlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXN3aXRjaC13aGVuJ1xufSlcbmNsYXNzIFN3aXRjaFdoZW5EaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3dpdGNoRGlyID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc01hdGNoQ2hhbmdlZCA9IG5ldyBNZXNzZW5nZXIoKTtcbiAgICB9XG5cbiAgICBpbml0U3dpdGNoRGlyKCkge1xuICAgICAgICB2YXIgc3dpdGNoRGlyID0gdGhpcy4kZWxlbWVudC5wYXJlbnROb2RlLmdldERpcmVjdGl2ZSgnbi1zd2l0Y2gnKTtcblxuICAgICAgICBpZiAoc3dpdGNoRGlyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZSBuLXN3aXRjaCBkaXJlY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoRGlyID0gc3dpdGNoRGlyO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5pbml0U3dpdGNoRGlyKCk7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLXN3aXRjaC13aGVuJyk7XG4gICAgICAgIHRoaXMuaXNNYXRjaCA9ICh0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSA9PT0gdGhpcy5zd2l0Y2hEaXIudmFsdWUpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc01hdGNoKSB7XG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLiRodG1sRWxlbWVudCwgdGhpcy5odG1sQ29tbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaERpci52YWx1ZUNoYW5nZWQub24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLmlzTWF0Y2gsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9ICh0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSA9PT0gdGhpcy5zd2l0Y2hEaXIudmFsdWUpO1xuXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNYXRjaCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5pc01hdGNoQ2hhbmdlZC5maXJlKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kaHRtbEVsZW1lbnQucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuaHRtbENvbW1lbnQsIHRoaXMuJGh0bWxFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kaHRtbEVsZW1lbnQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuJGh0bWxFbGVtZW50LCB0aGlzLmh0bWxDb21tZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnN3aXRjaERpciA9IG51bGw7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcvZGlyZWN0aXZlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbGl0eS9tZXNzYWdlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXN3aXRjaCdcbn0pXG5jbGFzcyBTd2l0Y2hEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQgPSBuZXcgTWVzc2VuZ2VyKCk7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQuZmlyZSh7XG4gICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vdXRpbGl0eSc7XG5leHBvcnQgKiBmcm9tICcuL3ZpZXcnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXJzZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XG5cbnV0aWxzLmluaGVyaXQoSHRtbExleGVyLCBMZXhlcik7XG5mdW5jdGlvbiBIdG1sTGV4ZXIob3B0aW9ucykge1xuICAgIEh0bWxMZXhlci5zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xufVxuXG5IdG1sTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICByZXR1cm4gKCdhJyA8PSBjaCAmJiBjaCA8PSAneicgfHxcbiAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxuICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcgfHxcbiAgICAgICAgY2ggPT09ICdAJyB8fCBjaCA9PT0gJzonIHx8IGNoID09PSAnKicpO1xufTtcblxuSHRtbExleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlID0gZnVuY3Rpb24gKGNoLCBjcCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy0nIHx8IGNoID09PSAnLic7XG59O1xuXG5IdG1sTGV4ZXIucHJvdG90eXBlLmV4cGVjdFN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB2YXIgbnVtID0gc3RyLmxlbmd0aDtcbiAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPD0gdGhpcy50ZXh0Lmxlbmd0aCkgPyAoc3RyID09PSB0aGlzLnRleHQuc3Vic3RyKHRoaXMuaW5kZXgsIG51bSkpIDogZmFsc2U7XG59O1xuXG4vLyBodG1sIGNvbW1lbnQgXCI8IS0tY29tbWVudC0tPlwiXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRDb21tZW50ID0gZnVuY3Rpb24gKGJlZ2luLCBlbmQpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xuICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICB2YXIgcmF3U3RyaW5nID0gYmVnaW47XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHJhd1N0cmluZyArPSBjaDtcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKGVuZCkpIHtcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBlbmQ7XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbiAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBjb21tZW50Jywgc3RhcnQpO1xufTtcblxuLy8gaHRtbCB0ZXh0XG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgdmFyIHN0cmluZyA9ICcnO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgIGlmICgoY2ggPT09ICc8JyAmJiAodGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpIHx8IGNoMiA9PT0gJy8nKSkgfHwgdGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgfVxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgICAgdGV4dFRhZzogdHJ1ZVxuICAgIH0pO1xufTtcblxuLy8gaHRtbCB0YWdcbkh0bWxMZXhlci5wcm90b3R5cGUucmVhZFRhZyA9IGZ1bmN0aW9uIChiZWdpbiwgZW5kLCBjbG9zaW5nLCBkb2N0eXBlKSB7XG4gICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBiZWdpbiwgdGFnOiB0cnVlLCBjbG9zaW5nOiBjbG9zaW5nLCBiZWdpbjogdHJ1ZSwgZG9jdHlwZTogZG9jdHlwZSB9KTtcbiAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcbiAgICB0aGlzLnJlYWRJZGVudCgpO1xuXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG5cbiAgICAgICAgaWYgKCFjbG9zaW5nKSB7XG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICB2YXIgc3RyID0gY2ggKyBjaDI7XG4gICAgICAgICAgICBpZiAoc3RyID09PSAnLycgKyBlbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHN0ciwgdGFnOiB0cnVlLCBjbG9zaW5nOiB0cnVlLCBlbmQ6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBzdHIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoID09PSBlbmQpIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgICAgIHRleHQ6IGVuZCxcbiAgICAgICAgICAgICAgICB0YWc6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xvc2luZzogISFkb2N0eXBlID8gdHJ1ZSA6IGNsb3NpbmcsXG4gICAgICAgICAgICAgICAgZW5kOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJz0nKSB7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6ICc9JywgZXF1YWw6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuSHRtbExleGVyLnByb3RvdHlwZS5sZXggPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy50b2tlbnMgPSBbXTtcblxuICAgIHZhciBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgdmFyIGNoMyA9IHRoaXMucGVlaygyKTtcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZENvbW1lbnQoJzwhLS0nLCAnLS0+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc8JyAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCcsICc+JywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8LycpICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gzKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8LycsICc+JywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhRE9DVFlQRScpKSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8IScsICc+JywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0RPQ1RZUEUgaXMgbm90IGFsbG93ZWQnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRUZXh0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xufTtcblxuZXhwb3J0IHsgSHRtbExleGVyIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgeyBEb2N1bWVudEZyYWdtZW50Tm9kZSwgQ29tbWVudE5vZGUsIFRleHROb2RlLCBEb2N1bWVudFR5cGVOb2RlLCBFbGVtZW50Tm9kZSwgQXR0ck5vZGUgfSBmcm9tICcuLi9jb3JlJztcblxudXRpbHMuaW5oZXJpdChIdG1sUGFyc2VyLCBQYXJzZXIpO1xuZnVuY3Rpb24gSHRtbFBhcnNlcihsZXhlciwgb3B0aW9ucykge1xuICAgIEh0bWxQYXJzZXIuc3VwZXIuY2FsbCh0aGlzLCBsZXhlciwgb3B0aW9ucyk7XG59XG5cbkh0bWxQYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XG5cbiAgICB2YXIgZmFyZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudE5vZGUoKTtcbiAgICB2YXIgZG9jdHlwZSwgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi5kb2N0eXBlKSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkb2N0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3R5cGUgPSB0aGlzLmRvY3R5cGUoKTtcbiAgICAgICAgICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZChkb2N0eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgb25seSBhbGxvdyBvbmVcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgaXMgbm90IGFsbG93ZWRcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IENvbW1lbnROb2RlKCk7XG4gICAgICAgICAgICBjb21tZW50Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKGNvbW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xuICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVGV4dE5vZGUoKTtcbiAgICAgICAgICAgIHRleHQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGZhcmdtZW50LiRwdXNoQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcbiAgICAgICAgICAgIGZhcmdtZW50LiRwdXNoQ2hpbGQodGhpcy5lbGVtZW50KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiaW1wb3NzaWJsZVwiLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmYXJnbWVudC4kYnVpbGRTaWJsaW5nKCk7XG5cbiAgICByZXR1cm4gZmFyZ21lbnQuY2hpbGROb2Rlcztcbn07XG5cbkh0bWxQYXJzZXIucHJvdG90eXBlLmRvY3R5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5uZXh0KCk7XG4gICAgdmFyIGRvY1R5cGUgPSBuZXcgRG9jdW1lbnRUeXBlTm9kZSgpO1xuICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgZG9jVHlwZS5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzKGRvY1R5cGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgZG9jVHlwZS5jaGlsZE5vZGVzLnB1c2goYXR0cik7XG4gICAgfSk7XG5cbiAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY1R5cGU7XG59O1xuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5lbGVtZW50ID0gZnVuY3Rpb24gKHApIHtcbiAgICB0aGlzLm5leHQoKTtcbiAgICB2YXIgZWxlID0gbmV3IEVsZW1lbnROb2RlKCk7XG4gICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICBlbGUubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgZWxlLiRwdXNoQXR0cmlidXRlKGF0dHIpO1xuICAgIH0pO1xuXG4gICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICBlbGUuc2VsZkNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5jaGlsZEVsZW1lbnRzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBlbGUuJHB1c2hDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICB9XG5cbiAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4gJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09IHRva2VuLnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBlbGU7XG59O1xuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5jaGlsZEVsZW1lbnRzID0gZnVuY3Rpb24gKHApIHtcbiAgICB2YXIgZWxlcyA9IFtdO1xuXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XG4gICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBDb21tZW50Tm9kZSgpO1xuICAgICAgICAgICAgY29tbWVudC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgZWxlcy5wdXNoKGNvbW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xuICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVGV4dE5vZGUoKTtcbiAgICAgICAgICAgIHRleHQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGVsZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xuICAgICAgICAgICAgZWxlcy5wdXNoKHRoaXMuZWxlbWVudChwKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZXM7XG59O1xuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5hdHRycyA9IGZ1bmN0aW9uIChwKSB7XG4gICAgdmFyIGF0dHJzID0gW107XG5cbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXR0ciA9IG5ldyBBdHRyTm9kZSgpO1xuXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBhdHRyLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGF0dHIub3JpZ2luID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5lcXVhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmNvbnN0YW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHIubm9kZVZhbHVlID0gdG9rZW4udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhdHRycy5wdXNoKGF0dHIpO1xuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbn07XG5cbkh0bWxQYXJzZXIucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4ge307XG59O1xuXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5kZXgrKztcbn07XG5cbmV4cG9ydCB7IEh0bWxQYXJzZXIgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgeyBIdG1sTGV4ZXIgfSBmcm9tICcuL2h0bWwtbGV4ZXInO1xuaW1wb3J0IHsgSHRtbFBhcnNlciB9IGZyb20gJy4vaHRtbC1wYXJzZXInO1xuXG52YXIgcGFyc2VPcHRpb25zID0ge1xuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlOiBmYWxzZSxcbiAgICBpc0lkZW50aWZpZXJTdGFydDogZmFsc2UsXG4gICAgbGl0ZXJhbHM6IHtcbiAgICAgICAgZmFsc2U6IGZhbHNlLFxuICAgICAgICBudWxsOiBudWxsLFxuICAgICAgICB0cnVlOiB0cnVlLFxuICAgICAgICB1bmRlZmluZWQ6IHVuZGVmaW5lZFxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHBhcnNlKGh0bWwpIHtcbiAgICB2YXIgbGV4ZXIgPSBuZXcgSHRtbExleGVyKHBhcnNlT3B0aW9ucyk7XG4gICAgdmFyIHBhcnNlciA9IG5ldyBIdG1sUGFyc2VyKGxleGVyLCBwYXJzZU9wdGlvbnMpO1xuICAgIHJldHVybiBwYXJzZXIucGFyc2UoaHRtbCk7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGUoaHRtbCwgb3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGdldEVtYmVkVHBsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zQ29tcG9uZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUNvbXBvbmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zRGlyZWN0aXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZURpcmVjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXR0aW5ncyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBvcHRpb25zKSxcbiAgICAgICAgYXN0Tm9kZXMgPSBwYXJzZShodG1sKTtcblxuICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcbiAgICAgICAgYXN0Tm9kZS5jb21waWxlKHNldHRpbmdzKTtcbiAgICB9KTtcbiAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XG4gICAgICAgIGFzdE5vZGUubm90aWZ5Q29tcGlsZWQoc2V0dGluZ3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzY29wZSkge1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAgICAgc2NvcGUuJCRjaGlsZEVsZW1lbnRzID0gYXN0Tm9kZXM7XG5cbiAgICAgICAgYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoYXN0Tm9kZSkge1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYXN0Tm9kZS5saW5rKHNjb3BlKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XG4gICAgICAgICAgICBhc3ROb2RlLm5vdGlmeUxpbmtlZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZShleHAsIHNjb3BlLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5jcmVhdGVGaWx0ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlRmlsdGVyKG5hbWUpO1xuICAgIH07XG4gICAgaWYgKG9wdGlvbnMuY29sbGVjdE1lbWJlcnMpIHtcbiAgICAgICAgb3B0aW9ucy5tZW1iZXJzID0gW107XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUV4cChleHApLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBwYXJzZUV4cChleHApIHtcbiAgICBpZiAoZXhwID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV4cCA9IGV4cC50cmltKCk7XG5cbiAgICBpZiAoZXhwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXhwID0gZXhwLnJlcGxhY2UoJyZndDsnLCAnPicpLnJlcGxhY2UoJyZsdDsnLCAnPCcpO1xuXG4gICAgdmFyIGxleGVyID0gbmV3IExleGVyKHBhcnNlT3B0aW9ucyk7XG4gICAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIobGV4ZXIsIHBhcnNlT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGV4cCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXNzaWdubWVudChleHAsIHNjb3BlLCBvcHRpb25zKSB7XG4gICAgdmFyIGFzdCA9IHBhcnNlRXhwKGV4cCk7XG4gICAgdmFyIG1lbWJlckV4cCA9IGFzdC5nZXRNZW1iZXJFeHByZXNzaW9uKCk7XG5cbiAgICBpZiAobWVtYmVyRXhwID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGV4cCArICdpcyBub3QgdmFsaWQgbWVtYmVyIGV4cHJlc3Npb24nKTtcbiAgICB9XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIG9wdGlvbnMuY3JlYXRlRmlsdGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGluamVjdG9yLmNyZWF0ZUZpbHRlcihuYW1lKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2JqOiBtZW1iZXJFeHAub2JqZWN0LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMsIHt9LCBzY29wZSksXG4gICAgICAgIHByb3A6IG1lbWJlckV4cC5wcm9wZXJ0eS5jb21wdXRlKHNjb3BlLCBvcHRpb25zLCB7fSwgc2NvcGUpXG4gICAgfVxufVxuXG5leHBvcnQgeyBjb21waWxlLCBjb21wdXRlLCBwYXJzZSwgcGFyc2VFeHAsIHBhcnNlQXNzaWdubWVudCB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuXG52YXIgT1BFUkFUT1JTID0ge307XG52YXIgb3BlcmF0b3JUZXh0ID0gJysgLSAqIC8gJSA9PT0gIT09ID09ICE9IDwgPiA8PSA+PSAmJiB8fCAhID0gfCc7XG52YXIgRVNDQVBFID0geyAnbic6ICdcXG4nLCAnZic6ICdcXGYnLCAncic6ICdcXHInLCAndCc6ICdcXHQnLCAndic6ICdcXHYnLCAnXFwnJzogJ1xcJycsICdcIic6ICdcIicgfTtcblxub3BlcmF0b3JUZXh0LnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICBPUEVSQVRPUlNbb3BlcmF0b3JdID0gdHJ1ZTtcbn0pO1xuXG5mdW5jdGlvbiBMZXhlcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn1cblxuTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICcuJyAmJiB0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkTnVtYmVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyhjaCwgJygpe31bXS4sOzo/JykpIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogY2ggfSk7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgY2gyID0gY2ggKyB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIHZhciBjaDMgPSBjaDIgKyB0aGlzLnBlZWsoMik7XG4gICAgICAgICAgICB2YXIgb3AxID0gT1BFUkFUT1JTW2NoXTtcbiAgICAgICAgICAgIHZhciBvcDIgPSBPUEVSQVRPUlNbY2gyXTtcbiAgICAgICAgICAgIHZhciBvcDMgPSBPUEVSQVRPUlNbY2gzXTtcbiAgICAgICAgICAgIGlmIChvcDEgfHwgb3AyIHx8IG9wMykge1xuICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IG9wMyA/IGNoMyA6IChvcDIgPyBjaDIgOiBjaCk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiB0b2tlbiwgb3BlcmF0b3I6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSB0b2tlbi5sZW5ndGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmlzID0gZnVuY3Rpb24gKGNoLCBjaGFycykge1xuICAgIHJldHVybiBjaGFycy5pbmRleE9mKGNoKSAhPT0gLTE7XG59O1xuXG5MZXhlci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uIChpKSB7XG4gICAgdmFyIG51bSA9IGkgfHwgMTtcbiAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPCB0aGlzLnRleHQubGVuZ3RoKSA/IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCArIG51bSkgOiBmYWxzZTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc051bWJlciA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiAoJzAnIDw9IGNoICYmIGNoIDw9ICc5JykgJiYgdHlwZW9mIGNoID09PSAnc3RyaW5nJztcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc1doaXRlc3BhY2UgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICAvLyBJRSB0cmVhdHMgbm9uLWJyZWFraW5nIHNwYWNlIGFzIFxcdTAwQTBcbiAgICByZXR1cm4gKGNoID09PSAnICcgfHwgY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFx0JyB8fFxuICAgICAgICBjaCA9PT0gJ1xcbicgfHwgY2ggPT09ICdcXHYnIHx8IGNoID09PSAnXFx1MDBBMCcpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmlzSWRlbnRpZmllclN0YXJ0ID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydCA/XG4gICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydChjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcbiAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0ID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XG4gICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcbiAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnKTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc0lkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUgP1xuICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XG4gICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCwgY3ApIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuY29kZVBvaW50QXQgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICBpZiAoY2gubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBjaC5jaGFyQ29kZUF0KDApO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgIHJldHVybiAoY2guY2hhckNvZGVBdCgwKSA8PCAxMCkgKyBjaC5jaGFyQ29kZUF0KDEpIC0gMHgzNUZEQzAwO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnBlZWtNdWx0aWNoYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICB2YXIgcGVlayA9IHRoaXMucGVlaygpO1xuICAgIGlmICghcGVlaykge1xuICAgICAgICByZXR1cm4gY2g7XG4gICAgfVxuICAgIHZhciBjcDEgPSBjaC5jaGFyQ29kZUF0KDApO1xuICAgIHZhciBjcDIgPSBwZWVrLmNoYXJDb2RlQXQoMCk7XG4gICAgaWYgKGNwMSA+PSAweEQ4MDAgJiYgY3AxIDw9IDB4REJGRiAmJiBjcDIgPj0gMHhEQzAwICYmIGNwMiA8PSAweERGRkYpIHtcbiAgICAgICAgcmV0dXJuIGNoICsgcGVlaztcbiAgICB9XG4gICAgcmV0dXJuIGNoO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmlzRXhwT3BlcmF0b3IgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICByZXR1cm4gKGNoID09PSAnLScgfHwgY2ggPT09ICcrJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUudGhyb3dFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgc3RhcnQsIGVuZCkge1xuICAgIGVuZCA9IGVuZCB8fCB0aGlzLmluZGV4O1xuICAgIHZhciBjb2xTdHIgPSAodXRpbHMuaXNEZWZpbmVkKHN0YXJ0KSA/ICdzICcgKyBzdGFydCArICctJyArIHRoaXMuaW5kZXggKyAnIFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyhzdGFydCwgZW5kKSArICddJyA6ICcgJyArIGVuZCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZXhlciBFcnJvcjogJyArIGVycm9yICsgJyBhdCBjb2x1bW4nICsgY29sU3RyICsgJyBpbiBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10uJyk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUucmVhZE51bWJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbnVtYmVyID0gJyc7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdXRpbHMubG93ZXJjYXNlKHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCkpO1xuICAgICAgICBpZiAoY2ggPT09ICcuJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSkge1xuICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBlZWtDaCA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgaWYgKGNoID09PSAnZScgJiYgdGhpcy5pc0V4cE9wZXJhdG9yKHBlZWtDaCkpIHtcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcbiAgICAgICAgICAgICAgICBwZWVrQ2ggJiYgdGhpcy5pc051bWJlcihwZWVrQ2gpICYmXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICghcGVla0NoIHx8ICF0aGlzLmlzTnVtYmVyKHBlZWtDaCkpICYmXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCBleHBvbmVudCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgfVxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgIHRleHQ6IG51bWJlcixcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIHZhbHVlOiBOdW1iZXIobnVtYmVyKVxuICAgIH0pO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnJlYWRJZGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIHRoaXMuaW5kZXggKz0gdGhpcy5wZWVrTXVsdGljaGFyKCkubGVuZ3RoO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnBlZWtNdWx0aWNoYXIoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCArPSBjaC5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgIHRleHQ6IHRoaXMudGV4dC5zbGljZShzdGFydCwgdGhpcy5pbmRleCksXG4gICAgICAgIGlkZW50aWZpZXI6IHRydWVcbiAgICB9KTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nID0gZnVuY3Rpb24gKHF1b3RlKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB0aGlzLmluZGV4Kys7XG4gICAgdmFyIHN0cmluZyA9ICcnO1xuICAgIHZhciByYXdTdHJpbmcgPSBxdW90ZTtcbiAgICB2YXIgZXNjYXBlID0gZmFsc2U7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHJhd1N0cmluZyArPSBjaDtcbiAgICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICAgICAgaWYgKGNoID09PSAndScpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGV4ID0gdGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDUpO1xuICAgICAgICAgICAgICAgIGlmICghaGV4Lm1hdGNoKC9bXFxkYS1mXXs0fS9pKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1JyArIGhleCArICddJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gNDtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXgsIDE2KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByZXAgPSBFU0NBUEVbY2hdO1xuICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZyArIChyZXAgfHwgY2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXFxcJykge1xuICAgICAgICAgICAgZXNjYXBlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gcXVvdGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbiAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBxdW90ZScsIHN0YXJ0KTtcbn07XG5cbmV4cG9ydCB7IExleGVyIH07IiwiY2xhc3MgTnVsbE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE51bGxPYmplY3QgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7aXNGaWx0ZXJ9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHtOdWxsT2JqZWN0fSBmcm9tICcuL251bGwtb2JqZWN0JztcblxudmFyIEFTVCA9IHt9O1xuQVNULlByb2dyYW0gPSAnUHJvZ3JhbSc7XG5BU1QuRXhwcmVzc2lvblN0YXRlbWVudCA9ICdFeHByZXNzaW9uU3RhdGVtZW50JztcbkFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbiA9ICdBc3NpZ25tZW50RXhwcmVzc2lvbic7XG5BU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uID0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbic7XG5BU1QuTG9naWNhbEV4cHJlc3Npb24gPSAnTG9naWNhbEV4cHJlc3Npb24nO1xuQVNULkJpbmFyeUV4cHJlc3Npb24gPSAnQmluYXJ5RXhwcmVzc2lvbic7XG5BU1QuVW5hcnlFeHByZXNzaW9uID0gJ1VuYXJ5RXhwcmVzc2lvbic7XG5BU1QuQ2FsbEV4cHJlc3Npb24gPSAnQ2FsbEV4cHJlc3Npb24nO1xuQVNULk1lbWJlckV4cHJlc3Npb24gPSAnTWVtYmVyRXhwcmVzc2lvbic7XG5BU1QuSWRlbnRpZmllciA9ICdJZGVudGlmaWVyJztcbkFTVC5MaXRlcmFsID0gJ0xpdGVyYWwnO1xuQVNULkFycmF5RXhwcmVzc2lvbiA9ICdBcnJheUV4cHJlc3Npb24nO1xuQVNULlByb3BlcnR5ID0gJ1Byb3BlcnR5JztcbkFTVC5PYmplY3RFeHByZXNzaW9uID0gJ09iamVjdEV4cHJlc3Npb24nO1xuXG5mdW5jdGlvbiBBc3ROb2RlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xufVxuXG5Bc3ROb2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbn07XG5cbkFzdE5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGNvbnRleHQpO1xuICAgIH0pO1xufTtcblxuLy8gaGFzIGNvbmRpdGlvbiBvciBjYWxsIGV4cHJlc3Npb25cbkFzdE5vZGUucHJvdG90eXBlLmhhc0NDID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLmhhc0NDKCk7XG4gICAgfSk7XG59O1xuXG51dGlscy5pbmhlcml0KFByb2dyYW1Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIFByb2dyYW1Ob2RlKCkge1xuICAgIFByb2dyYW1Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlByb2dyYW0pO1xufVxuXG5Qcm9ncmFtTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLmNoaWxkTm9kZXNbMF0uY29tcHV0ZShzY29wZSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgTnVsbE9iamVjdCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuUHJvZ3JhbU5vZGUucHJvdG90eXBlLmdldE1lbWJlckV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1swXS5nZXRNZW1iZXJFeHByZXNzaW9uKCk7XG59O1xuXG51dGlscy5pbmhlcml0KEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCkge1xuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQpO1xufVxuXG5FeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0uY29tcHV0ZShzY29wZSwgb3B0aW9ucyB8fCB7fSwgY29udGV4dCk7XG59O1xuXG5FeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5wcm90b3R5cGUuZ2V0TWVtYmVyRXhwcmVzc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG5cbiAgICBpZihjaGlsZCBpbnN0YW5jZW9mIE1lbWJlckV4cHJlc3Npb25Ob2RlKXtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTtcblxudXRpbHMuaW5oZXJpdChBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKGxlZnQsIHJpZ2h0LCBvcGVyYXRvcikge1xuICAgIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbik7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xufVxuXG5Bc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5sZWZ0LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMsIHsgYXNzaWdubWVudExlZnQ6IHRydWUgfSk7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5yaWdodC5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcbiAgICB0YXJnZXQub2JqW3RhcmdldC5wcm9wXSA9IHZhbHVlO1xufTtcblxudXRpbHMuaW5oZXJpdChDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUodGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KSB7XG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24pO1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbn1cblxuQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLnRlc3QuY29tcHV0ZShzY29wZSwgb3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWx0ZXJuYXRlLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xufTtcblxuLy8gaGFzIGNvbmRpdGlvbiBvciBjYWxsIGV4cHJlc3Npb25cbkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmhhc0NDID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0cnVlO1xufTtcblxudXRpbHMuaW5oZXJpdChMb2dpY2FsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gTG9naWNhbEV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgIExvZ2ljYWxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbik7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xufVxuXG5Mb2dpY2FsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmxlZnQuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG4gICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLnJpZ2h0LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuXG4gICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJyYmJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3x8JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnV0aWxzLmluaGVyaXQoQmluYXJ5RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gQmluYXJ5RXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgQmluYXJ5RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQmluYXJ5RXhwcmVzc2lvbik7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xufVxuXG5CaW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQ7XG4gICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMubGVmdC5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcbiAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMucmlnaHQuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG5cbiAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSArIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICogcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAvIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDwgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDw9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID49IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPT0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnIT0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPT09JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICchPT0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnV0aWxzLmluaGVyaXQoVW5hcnlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBVbmFyeUV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBhcmcpIHtcbiAgICBVbmFyeUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlVuYXJ5RXhwcmVzc2lvbik7XG4gICAgdGhpcy5wcmVmaXggPSB0cnVlO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmFyZyA9IGFyZztcbn1cblxuVW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQsIHZhbHVlID0gdGhpcy5hcmcuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG5cbiAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IC12YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICchJzpcbiAgICAgICAgICAgIHJlc3VsdCA9ICF2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG51dGlscy5pbmhlcml0KExpdGVyYWxOb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIExpdGVyYWxOb2RlKHZhbHVlKSB7XG4gICAgTGl0ZXJhbE5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuTGl0ZXJhbCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuXG5MaXRlcmFsTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbn07XG5cbkxpdGVyYWxOb2RlLnByb3RvdHlwZS50b1RleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG51dGlscy5pbmhlcml0KENhbGxFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBDYWxsRXhwcmVzc2lvbk5vZGUoY2FsbGVlLCBhcmdzKSB7XG4gICAgQ2FsbEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkNhbGxFeHByZXNzaW9uKTtcbiAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XG59XG5cbkNhbGxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jYWxsZWUuY29tcHV0ZShzY29wZSwgb3B0aW9ucywge2NhbGxlZTogdHJ1ZX0pO1xuICAgIHZhciBhcmdWYWx1ZXMgPSB0aGlzLmFyZ3MubWFwKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIGFyZy5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmZpbHRlcikge1xuICAgICAgICB2YXIgZmlsdGVySW5zID0gb3B0aW9ucy5jcmVhdGVGaWx0ZXIoY29udGV4dC5wcm9wKTtcbiAgICAgICAgaWYgKGlzRmlsdGVyKGZpbHRlcklucykpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJJbnMuJGV4ZWN1dGUuYXBwbHkoZmlsdGVySW5zLCBhcmdWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIFwiJyArIGNvbnRleHQucHJvcCArICdcIiBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dC5vYmosIGFyZ1ZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRleHQucHJvcCArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICB9XG59O1xuXG4vLyBoYXMgY29uZGl0aW9uIG9yIGNhbGwgZXhwcmVzc2lvblxuQ2FsbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5oYXNDQyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gIXRoaXMuZmlsdGVyO1xufTtcblxudXRpbHMuaW5oZXJpdChNZW1iZXJFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBNZW1iZXJFeHByZXNzaW9uTm9kZShvYmplY3QsIHByb3BlcnR5LCBjb21wdXRlZCkge1xuICAgIE1lbWJlckV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk1lbWJlckV4cHJlc3Npb24pO1xuICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB0aGlzLmNvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbn1cblxuTWVtYmVyRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICB2YXIgb2JqID0gdGhpcy5vYmplY3QuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAob2JqID09IG51bGwgJiYgdGhpcy5vYmplY3QuYWxsb3dOdWxsKSB7XG4gICAgICAgIG9iaiA9IG5ldyBOdWxsT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29tcHV0ZWQpIHtcbiAgICAgICAgdmFyIHByb3AgPSB0aGlzLnByb3BlcnR5LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMsIGNvbnRleHQpO1xuICAgICAgICBpZiAodXRpbHMuaXNBcnJheShvcHRpb25zLm1lbWJlcnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zLm1lbWJlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBvYmosXG4gICAgICAgICAgICAgICAgdGFyZ2V0S2V5OiB0aGlzLm9iamVjdC50b1RleHQoKSxcbiAgICAgICAgICAgICAgICBrZXk6IHByb3BcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpbcHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHkuY29tcHV0ZShvYmosIG9wdGlvbnMsIGNvbnRleHQsIHRoaXMub2JqZWN0KTtcbn07XG5cbk1lbWJlckV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS50b1RleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0LnRvVGV4dCgpICsgJy4nICsgdGhpcy5wcm9wZXJ0eS50b1RleHQoKTtcbn07XG5cbnV0aWxzLmluaGVyaXQoSWRlbnRpZmllck5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gSWRlbnRpZmllck5vZGUobmFtZSkge1xuICAgIElkZW50aWZpZXJOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULklkZW50aWZpZXIpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbn1cblxuSWRlbnRpZmllck5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAob2JqLCBvcHRpb25zLCBjb250ZXh0LCBvYmpOb2RlKSB7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuYXNzaWdubWVudExlZnQgfHwgY29udGV4dC5jYWxsZWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2JqOiBvYmosXG4gICAgICAgICAgICAgICAgcHJvcDogdGhpcy5uYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRleHQucHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gb2JqW3RoaXMubmFtZV07XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheShvcHRpb25zLm1lbWJlcnMpKSB7XG4gICAgICAgIG9wdGlvbnMubWVtYmVycy5wdXNoKHtcbiAgICAgICAgICAgIHRhcmdldDogb2JqLFxuICAgICAgICAgICAgdGFyZ2V0S2V5OiBvYmpOb2RlICE9IG51bGwgPyBvYmpOb2RlLnRvVGV4dCgpIDogbnVsbCxcbiAgICAgICAgICAgIGtleTogdGhpcy5uYW1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBvcHRpb25zLmxvY2Fscykge1xuICAgICAgICByZXN1bHQgPSBvcHRpb25zLmxvY2Fsc1t0aGlzLm5hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5JZGVudGlmaWVyTm9kZS5wcm90b3R5cGUudG9UZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG59O1xuXG51dGlscy5pbmhlcml0KEFycmF5RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gQXJyYXlFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkFycmF5RXhwcmVzc2lvbik7XG59XG5cbnV0aWxzLmluaGVyaXQoUHJvcGVydHlOb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIFByb3BlcnR5Tm9kZSgpIHtcbiAgICBQcm9wZXJ0eU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuUHJvcGVydHkpO1xuICAgIHRoaXMua2luZCA9ICdpbml0JztcbiAgICB0aGlzLmtleSA9IG51bGw7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5jb21wdXRlZCA9IGZhbHNlO1xufVxuXG5Qcm9wZXJ0eU5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IHRoaXMua2V5LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMsIHsgcHJvcGVydHlLZXk6IHRydWUgfSksXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpXG4gICAgfTtcbn07XG5cbnV0aWxzLmluaGVyaXQoT2JqZWN0RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gT2JqZWN0RXhwcmVzc2lvbk5vZGUocHJvcGVydGllcykge1xuICAgIE9iamVjdEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk9iamVjdEV4cHJlc3Npb24pO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG59XG5cbk9iamVjdEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gICAgdGhpcy5wcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdmFyIGRlZiA9IGl0ZW0uY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG4gICAgICAgIHJlc3VsdFtkZWYua2V5XSA9IGRlZi52YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiBpc0Fzc2lnbmFibGUoYXN0KSB7XG4gICAgcmV0dXJuIGFzdC50eXBlID09PSBBU1QuSWRlbnRpZmllciB8fCBhc3QudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb247XG59XG5cbmZ1bmN0aW9uIFBhcnNlcihsZXhlciwgb3B0aW9ucykge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xufVxuXG5QYXJzZXIucHJvdG90eXBlLnRocm93RXJyb3IgPSBmdW5jdGlvbiAobXNnLCB0b2tlbikge1xuICAgIHRocm93IG5ldyBFcnJvcignU3ludGF4IEVycm9yOiBUb2tlbiBcXCcnICsgdG9rZW4udGV4dCArICdcXCcnICsgbXNnICsgJyBhdCBjb2x1bW4gJyArICh0b2tlbi5pbmRleCArIDEpICtcbiAgICAgICAgJyBvZiB0aGUgZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddIHN0YXJ0aW5nIGF0IFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyh0b2tlbi5pbmRleCkgKyAnXS4nKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xuXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wcm9ncmFtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9ncmFtID0gbmV3IFByb2dyYW1Ob2RlKCk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XG4gICAgICAgICAgICBwcm9ncmFtLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmFtO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUGFyc2VyLnByb3RvdHlwZS5leHByZXNzaW9uU3RhdGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUoKTtcbiAgICBleHAuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJDaGFpbigpKTtcbiAgICByZXR1cm4gZXhwO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5maWx0ZXJDaGFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XG4gICAgICAgIGxlZnQgPSB0aGlzLmZpbHRlcihsZWZ0KTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5hc3NpZ25tZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLnRlcm5hcnkoKTtcbiAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xuICAgICAgICBpZiAoIWlzQXNzaWduYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhc3NpZ24gYSB2YWx1ZSB0byBhIG5vbiBsLXZhbHVlJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSBuZXcgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKHJlc3VsdCwgdGhpcy5hc3NpZ25tZW50KCksICc9Jyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnRlcm5hcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRlc3QgPSB0aGlzLmxvZ2ljYWxPUigpO1xuICAgIHZhciBhbHRlcm5hdGU7XG4gICAgdmFyIGNvbnNlcXVlbnQ7XG4gICAgaWYgKHRoaXMuZXhwZWN0KCc/JykpIHtcbiAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIGlmICh0aGlzLmNvbnN1bWUoJzonKSkge1xuICAgICAgICAgICAgY29uc2VxdWVudCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRlc3Q7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmxvZ2ljYWxPUiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfHwnKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5sb2dpY2FsQU5EID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWZ0ID0gdGhpcy5lcXVhbGl0eSgpO1xuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnJiYnKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnJiYnLCBsZWZ0LCB0aGlzLmVxdWFsaXR5KCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuZXF1YWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLnJlbGF0aW9uYWwoKTtcbiAgICB2YXIgdG9rZW47XG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc9PScsICchPScsICc9PT0nLCAnIT09JykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5yZWxhdGlvbmFsKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucmVsYXRpb25hbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMuYWRkaXRpdmUoKTtcbiAgICB2YXIgdG9rZW47XG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLmFkZGl0aXZlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuYWRkaXRpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLm11bHRpcGxpY2F0aXZlKCk7XG4gICAgdmFyIHRva2VuO1xuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm11bHRpcGxpY2F0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWZ0ID0gdGhpcy51bmFyeSgpO1xuICAgIHZhciB0b2tlbjtcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJyonLCAnLycsICclJykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy51bmFyeSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnVuYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0b2tlbjtcbiAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XG4gICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcbiAgICB9XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnByaW1hcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByaW1hcnk7XG4gICAgaWYgKHRoaXMuZXhwZWN0KCcoJykpIHtcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuZmlsdGVyQ2hhaW4oKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgnWycpKSB7XG4gICAgICAgIHByaW1hcnkgPSB0aGlzLmFycmF5RGVjbGFyYXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCd7JykpIHtcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMub2JqZWN0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubGl0ZXJhbHMuaGFzT3duUHJvcGVydHkodGhpcy5wZWVrKCkudGV4dCkpIHtcbiAgICAgICAgcHJpbWFyeSA9IG5ldyBMaXRlcmFsTm9kZSh0aGlzLm9wdGlvbnMubGl0ZXJhbHNbdGhpcy5jb25zdW1lKCkudGV4dF0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICBwcmltYXJ5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICBwcmltYXJ5ID0gdGhpcy5jb25zdGFudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignbm90IGEgcHJpbWFyeSBleHByZXNzaW9uJywgdGhpcy5wZWVrKCkpO1xuICAgIH1cblxuICAgIHZhciBuZXh0O1xuICAgIHdoaWxlICh0aGlzLnBlZWsoJygnLCAnWycsICcuJykgfHwgKHRoaXMucGVlaygnPycpICYmIHRoaXMucGVla0FoZWFkKDEsICcuJykpKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XG4gICAgICAgICAgICBwcmltYXJ5LmFsbG93TnVsbCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0ID0gdGhpcy5leHBlY3QoJygnLCAnWycsICcuJyk7XG5cbiAgICAgICAgaWYgKG5leHQudGV4dCA9PT0gJygnKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLnBhcnNlQXJndW1lbnRzKCkpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnWycpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5leHByZXNzaW9uKCksIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnLicpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5pZGVudGlmaWVyKCksIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSU1QT1NTSUJMRScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcmltYXJ5O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAoYmFzZUV4cHJlc3Npb24pIHtcbiAgICB2YXIgYXJncyA9IFtiYXNlRXhwcmVzc2lvbl0sIGlkZW50aWZpZXJzID0gW3RoaXMuaWRlbnRpZmllcigpXTtcblxuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnLicpKSB7XG4gICAgICAgIGlkZW50aWZpZXJzLnB1c2godGhpcy5pZGVudGlmaWVyKCkpO1xuICAgIH1cblxuICAgIC8vIHBsdXMgbmFtZXNwYWNlXG4gICAgdmFyIGVudGlyZU5hbWUgPSBpZGVudGlmaWVycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgICB9KS5qb2luKCcuJyk7XG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShuZXcgSWRlbnRpZmllck5vZGUoZW50aXJlTmFtZSksIGFyZ3MpO1xuXG4gICAgcmVzdWx0LmZpbHRlciA9IHRydWU7XG5cbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJzonKSkge1xuICAgICAgICBhcmdzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlQXJndW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJyknKSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmZpbHRlckNoYWluKCkpO1xuICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFyZ3M7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmlkZW50aWZpZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5jb25zdW1lKCk7XG4gICAgaWYgKCF0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgbm90IGEgdmFsaWQgaWRlbnRpZmllcicsIHRva2VuKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBJZGVudGlmaWVyTm9kZSh0b2tlbi50ZXh0KTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuY29uc3RhbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETyBjaGVjayB0aGF0IGl0IGlzIGEgY29uc3RhbnRcbiAgICByZXR1cm4gbmV3IExpdGVyYWxOb2RlKHRoaXMuY29uc3VtZSgpLnZhbHVlKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuYXJyYXlEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyID0gbmV3IEFycmF5RXhwcmVzc2lvbk5vZGUoKTtcbiAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnXScpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnXScpKSB7XG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJyLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgfVxuICAgIHRoaXMuY29uc3VtZSgnXScpO1xuXG4gICAgcmV0dXJuIGFycjtcbn07XG5cblBhcnNlci5wcm90b3R5cGUub2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gW10sIHByb3BlcnR5O1xuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICd9Jykge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCd9JykpIHtcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eU5vZGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuY29uc3RhbnQoKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJzonKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHByb3BlcnR5LmtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygnWycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCdbJyk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaW52YWxpZCBrZXknLCB0aGlzLnBlZWsoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICB9XG4gICAgdGhpcy5jb25zdW1lKCd9Jyk7XG5cbiAgICByZXR1cm4gbmV3IE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5jb25zdW1lID0gZnVuY3Rpb24gKGUxKSB7XG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgIH1cblxuICAgIHZhciB0b2tlbiA9IHRoaXMuZXhwZWN0KGUxKTtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFsnICsgZTEgKyAnXScsIHRoaXMucGVlaygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRva2VuO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wZWVrVG9rZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50b2tlbnNbMF07XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoZTEsIGUyLCBlMywgZTQpIHtcbiAgICByZXR1cm4gdGhpcy5wZWVrQWhlYWQoMCwgZTEsIGUyLCBlMywgZTQpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wZWVrQWhlYWQgPSBmdW5jdGlvbiAoaSwgZTEsIGUyLCBlMywgZTQpIHtcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gaSkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcbiAgICAgICAgdmFyIHQgPSB0b2tlbi50ZXh0O1xuICAgICAgICBpZiAodCA9PT0gZTEgfHwgdCA9PT0gZTIgfHwgdCA9PT0gZTMgfHwgdCA9PT0gZTQgfHxcbiAgICAgICAgICAgICghZTEgJiYgIWUyICYmICFlMyAmJiAhZTQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5leHBlY3QgPSBmdW5jdGlvbiAoZTEsIGUyLCBlMywgZTQpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLnBlZWsoZTEsIGUyLCBlMywgZTQpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgICB0aGlzLnRva2Vucy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7IFBhcnNlciB9OyIsImV4cG9ydCAqIGZyb20gJy4vdGVtcGxhdGUtY2FjaGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL21vZGVsLW9wdGlvbnMnOyIsImltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi92aWV3L3NlcnZpY2UnO1xyXG5pbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vZGVjb3JhdG9yL3NlcnZpY2UnO1xyXG5cclxuQHNlcnZpY2Uoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJyRtb2RlbE9wdGlvbnMnXHJcbn0pXHJcbmNsYXNzIE1vZGVsT3B0aW9uc1NlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jc3NDbGFzcyA9IHtcclxuICAgICAgICAgICAgcHJpc3RpbmU6ICduLXByaXN0aW5lJyxcclxuICAgICAgICAgICAgZGlydHk6ICduLWRpcnR5JyxcclxuICAgICAgICAgICAgdmFsaWQ6ICduLXZhbGlkJyxcclxuICAgICAgICAgICAgaW52YWxpZDogJ24taW52YWxpZCdcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgaHR0cEdldCB9IGZyb20gJy4uL3V0aWxpdHkvaHR0cCc7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vdmlldy9zZXJ2aWNlJztcbmltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9kZWNvcmF0b3Ivc2VydmljZSc7XG5cbkBzZXJ2aWNlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJyR0ZW1wbGF0ZUNhY2hlJ1xufSlcbmNsYXNzIFRlbXBsYXRlQ2FjaGVTZXJ2aWNlIGV4dGVuZHMgU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHBsQ2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9taXNlQ2FjaGUgPSB7fTtcbiAgICB9XG5cbiAgICBnZXRUcGxCeVVybCh1cmwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnRwbENhY2hlW3VybF0pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc2VsZi50cGxDYWNoZVt1cmxdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnByb21pc2VDYWNoZVt1cmxdKSB7XG4gICAgICAgICAgICB0aGlzLnByb21pc2VDYWNoZVt1cmxdID0gaHR0cEdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIHNlbGYucHJvbWlzZUNhY2hlW3VybF0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGYudHBsQ2FjaGVbdXJsXSA9IHJlcy5kYXRhIHx8ICcnO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRwbENhY2hlW3VybF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2VDYWNoZVt1cmxdO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcclxuXHJcbnZhciByZWFkeVN0YXRlRW51bSA9IHtcclxuICAgIHN0YXJ0OiAwLFxyXG4gICAgb3BlbmVkOiAxLFxyXG4gICAgc2VudDogMixcclxuICAgIHJlY2VpdmVkOiAzLFxyXG4gICAgZmluaXNoOiA0XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVYSFIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb21pc2UocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSwgcmVqZWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVXJsUGFyYW0odXJsLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJyk7XHJcbiAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuICAgIHJldHVybiB1cmw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XHJcbiAgICB2YXIgcGFyc2VkID0ge307XHJcbiAgICB2YXIga2V5O1xyXG4gICAgdmFyIHZhbDtcclxuICAgIHZhciBpO1xyXG5cclxuICAgIGlmICghaGVhZGVycykge1xyXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUsIGluZGV4KSB7XHJcbiAgICAgICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xyXG4gICAgICAgIGtleSA9IGxpbmUuc3Vic3RyKDAsIGkpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhbCA9IGxpbmUuc3Vic3RyKGkgKyAxKS50cmltKCk7XHJcblxyXG4gICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcnNlZDtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRVcmwodXJsLCBjb25maWcpIHtcclxuICAgIGlmIChjb25maWcuZGF0YSAhPSBudWxsICYmIGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKSA9PT0gJ2dldCcpIHtcclxuICAgICAgICB1dGlscy5mb3JFYWNoKGNvbmZpZy5kYXRhLCBmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcclxuICAgICAgICAgICAgYWRkVXJsUGFyYW0odXJsLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciB4aHIgPSBjcmVhdGVYSFIoKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoY29uZmlnLmRhdGEpKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuZGF0YVsnQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgheGhyIHx8IHhoci5yZWFkeVN0YXRlICE9PSByZWFkeVN0YXRlRW51bS5maW5pc2gpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDAgJiYgISh4aHIucmVzcG9uc2VVUkwgJiYgeGhyLnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiB4aHIgPyBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyB4aHIucmVzcG9uc2VUZXh0IDogeGhyLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcclxuICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogeGhyXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHx8IHhoci5zdGF0dXMgPT0gMzA0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdWNjZXNzZnVsbHlcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdW5zdWNjZXNzZnVsbHlcclxuICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHhociA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3Blbihjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCksIGJ1aWxkVXJsKGNvbmZpZy51cmwsIGNvbmZpZyksIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKGNvbmZpZy5kYXRhKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBodHRwR2V0KHVybCwgZGF0YSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH07XHJcblxyXG4gICAgaWYgKG9wdGlvbnMgIT0gbnVsbCkge1xyXG4gICAgICAgIHV0aWxzLmV4dGVuZChjb25maWcsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXF1ZXN0KGNvbmZpZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGh0dHBQb3N0KHVybCwgZGF0YSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChvcHRpb25zICE9IG51bGwpIHtcclxuICAgICAgICB1dGlscy5leHRlbmQoY29uZmlnLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVxdWVzdChjb25maWcpO1xyXG59XHJcblxyXG5leHBvcnQgeyBodHRwR2V0LCBodHRwUG9zdCB9XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9ub2RlJztcbmV4cG9ydCAqIGZyb20gJy4vaHR0cCc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBNZXNzZW5nZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgfVxuXG4gICAgb24oZm4pIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZm4pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVyc1tpXSA9PT0gZm4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmUoYXJncywgc2NvcGUpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IHRoaXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5oYW5kbGVyc1tpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHRoaXMuaGFuZGxlcnNbaV0uY2FsbChzY29wZSwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbn1cblxuY2xhc3MgTWVzc2VuZ2VyQnVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZXNzZW5nZXJzID0ge307XG4gICAgfVxuXG4gICAgZ2V0KGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NlbmdlcnNbZV0pIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2VuZ2Vyc1tlXSA9IG5ldyBNZXNzZW5nZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzZW5nZXJzW2VdO1xuICAgIH1cblxuICAgIG9uKGUsIGZuKSB7XG4gICAgICAgIHRoaXMuZ2V0KGUpLm9uKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZSwgZm4pIHtcbiAgICAgICAgdGhpcy5nZXQoZSkub2ZmKGZuKTtcbiAgICB9XG5cbiAgICBmaXJlKGUsIGFyZ3MsIHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChlKS5maXJlKGFyZ3MsIHNjb3BlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzTWVzc2VuZ2VyKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNZXNzZW5nZXI7XG59XG5cbmV4cG9ydCB7IE1lc3NlbmdlciwgTWVzc2VuZ2VyQnVzLCBpc01lc3NlbmdlciB9OyIsIlxuZnVuY3Rpb24gZ2V0Q2hpbGROb2Rlcyhub2RlKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGUuY2hpbGROb2RlcywgMCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2hpbGROb2Rlcyhub2RlKSB7XG4gICAgZ2V0Q2hpbGROb2Rlcyhub2RlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZU5vZGUocmVmTm9kZSwgbmV3Tm9kZSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmTm9kZSk7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVmTm9kZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlQmV0d2VlbihiZWdpbk5vZGUsIGVuZE5vZGUpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGJlZ2luTm9kZS5wYXJlbnROb2RlO1xuICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhwYXJlbnROb2RlKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyA9PT0gYmVnaW5Ob2RlICYmIGNoaWxkICE9PSBlbmROb2RlKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgPT09IGVuZE5vZGUgJiYgY2hpbGQgIT09IGJlZ2luTm9kZSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Tm9kZUFmdGVyKHJlZk5vZGUsIG5ld05vZGUpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHJlZk5vZGUucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnROb2RlLmxhc3RDaGlsZCA9PT0gcmVmTm9kZSkge1xuICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld05vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcXVlcnlFbGVtZW50TG9hZGVkKGVsZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgY2FuY2VsVG9rZW4gPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHF1ZXJ5KCkge1xuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGUuY2xpZW50V2lkdGggPiAwICYmIGVsZS5jbGllbnRIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcXVlcnlFbGVtZW50VW5sb2FkZWQoZWxlLCBjYWxsYmFjaykge1xuICAgIHZhciBjYW5jZWxUb2tlbiA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gcXVlcnkoKSB7XG4gICAgICAgIGlmIChjYW5jZWxUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZS5jbGllbnRXaWR0aCA9PT0gMCAmJiBlbGUuY2xpZW50SGVpZ2h0ID09IDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbmNlbFRva2VuID0gdHJ1ZTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnRTdGF0ZShlbGUsIGNhbGxiYWNrcykge1xuICAgIHZhciBjYW5jZWxUb2tlbiA9IGZhbHNlLCBsb2FkZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHF1ZXJ5KCkge1xuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGUuY2xpZW50V2lkdGggPiAwICYmIGVsZS5jbGllbnRIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICBpZiAoIWxvYWRlZCkge1xuICAgICAgICAgICAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkVudGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uRW50ZXIuY2FsbChjYWxsYmFja3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uTGVhdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Mub25MZWF2ZS5jYWxsKGNhbGxiYWNrcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FuY2VsVG9rZW4gPSB0cnVlO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzIChlbCwgY2xzKSB7XG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICAgICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsLCBjbHMpIHtcbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QucmVtb3ZlKGMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbC5jbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgICAgICB2YXIgdGFyID0gJyAnICsgY2xzICsgJyAnO1xuICAgICAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XG4gICAgICAgICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgY3VyID0gY3VyLnRyaW0oKTtcbiAgICAgICAgaWYgKGN1cikge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGN1cik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0Q2hpbGROb2RlcyxcbiAgICBjbGVhckNoaWxkTm9kZXMsXG4gICAgcmVwbGFjZU5vZGUsXG4gICAgcmVtb3ZlTm9kZSxcbiAgICByZW1vdmVOb2RlQmV0d2VlbixcbiAgICBpbnNlcnROb2RlQWZ0ZXIsXG4gICAgcXVlcnlFbGVtZW50TG9hZGVkLFxuICAgIHF1ZXJ5RWxlbWVudFVubG9hZGVkLFxuICAgIHF1ZXJ5RWxlbWVudFN0YXRlLFxuICAgIGFkZENsYXNzLFxuICAgIHJlbW92ZUNsYXNzXG59OyIsInZhciBkZWJ1Z01vZGUgPSB0cnVlLFxuICAgIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGFjdGlvbiwgaWdub3JlT3duKSB7XG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKGFjdGlvbihvYmpbaW5kZXhdLCBpbmRleCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGlnbm9yZU93biB8fCBvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKG9ialtwXSwgcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYWN0aW9uKG9iaiwgb2JqKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNvbWUob2JqLCBhY3Rpb24pIHtcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKGluZGV4LCBvYmpbaW5kZXhdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKHAsIG9ialtwXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYWN0aW9uKG9iaiwgb2JqKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgb2JqSW5kZXggPSAwLCBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdLCBmaWx0ZXI7XG5cbiAgICBpZiAoaXNCb29sZWFuKG9iaikpIHtcbiAgICAgICAgZGVlcCA9IG9iajtcbiAgICAgICAgb2JqSW5kZXgrKztcbiAgICAgICAgb2JqID0gYXJndW1lbnRzW29iakluZGV4XTtcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IG9iakluZGV4ICsgMSkge1xuICAgICAgICBmaWx0ZXIgPSBhcmd1bWVudHNbb2JqSW5kZXggKyAxXTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBuZXdBcnIgPSBbXTtcbiAgICAgICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwgaW5kZXgsIGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZGVlcCA/IGNvcHkoaXRlbSkgOiBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgdmFyIG5ld09iaiA9IG9iamVjdChvYmopO1xuICAgICAgICBmb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBrZXksIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gZGVlcCA/IGNvcHkodmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICBpZiAoaXNCb29sZWFuKHRhcmdldCkpIHtcbiAgICAgICAgZGVlcCA9IHRhcmdldDtcbiAgICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWysraW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0ge307XG5cbiAgICBpZiAoaXNCb29sZWFuKGFyZ3VtZW50c1tpbmRleF0pKSB7XG4gICAgICAgIGRlZXAgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gcGxhaW5NZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodGFyZ2V0W2tleV0pICYmIGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvYmplY3Qobykge1xuICAgIGZ1bmN0aW9uIEYoKSB7XG4gICAgfVxuXG4gICAgRi5wcm90b3R5cGUgPSBvO1xuICAgIHJldHVybiBuZXcgRigpO1xufVxuXG5mdW5jdGlvbiBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSkge1xuICAgIHZhciBwcm90b3R5cGUgPSBvYmplY3Qoc3VwZXJUeXBlLnByb3RvdHlwZSk7XG4gICAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViVHlwZTtcbiAgICBzdWJUeXBlLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdChzdWJUeXBlLCBzdXBlclR5cGUpIHtcbiAgICBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSk7XG4gICAgc3ViVHlwZS5zdXBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3VwZXJUeXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvTG93ZXJDYXNlKCkgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHVwcGVyY2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b1VwcGVyQ2FzZSgpIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGlzTWFwKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNYXA7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzQmxhbmtPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZShvYmoxLCBvYmoyKSB7XG4gICAgdmFyIHNhbWUgPSAob2JqMSA9PT0gb2JqMik7XG5cbiAgICBpZiAoIXNhbWUpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xuICAgICAgICAgICAgaWYgKG9iajEubGVuZ3RoID09PSBvYmoyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqMSkgJiYgaXNPYmplY3Qob2JqMikgJiYgZ2V0UHJvdG90eXBlT2Yob2JqMSkgPT09IGdldFByb3RvdHlwZU9mKG9iajIpKSB7XG4gICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltrZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbWU7XG59XG5cbmZ1bmN0aW9uIGRlYnVnKGxvZykge1xuICAgIGlmIChkZWJ1Z01vZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2cobG9nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKGFyciwgb2JqKSB7XG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBvYmo7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zU3RyKGFyciwgc3RyLCBpZ25vcmVDYXNlKSB7XG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBzdHIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGl0ZW0pID09PSBsb3dlcmNhc2Uoc3RyKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaiwga2V5LCBpZ25vcmVDYXNlKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XG5cbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzUHJvcDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xuXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcbiAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc1Byb3AgPyB0YXJnZXQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUsIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcblxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXkyXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcbiAgICAgICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWhhc1Byb3ApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICc6IENhbiBub3Qgc2V0IHByb3BlcnR5IG9mIHVuZGVmaW5lZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvcmRlckJ5KGFyciwgZ2V0dGVyKSB7XG4gICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb3JkZXJCeURlc2NlbmRpbmcoYXJyLCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b051bWJlciAodmFsdWUpIHtcbiAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIHJldHVybiBpc05hTihuKSA/IHZhbHVlIDogbjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlIChhcnIsIGl0ZW0pIHtcbiAgICBpZiAoYXJyLmxlbmd0aCkge1xuICAgICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBmb3JFYWNoLFxuICAgIHNvbWUsXG4gICAgY29weSxcbiAgICBleHRlbmQsXG4gICAgbWVyZ2UsXG4gICAgb2JqZWN0LFxuICAgIGluaGVyaXQsXG4gICAgbG93ZXJjYXNlLFxuICAgIHVwcGVyY2FzZSxcbiAgICBpc1VuZGVmaW5lZCxcbiAgICBpc0RlZmluZWQsXG4gICAgaXNPYmplY3QsXG4gICAgaXNCbGFua09iamVjdCxcbiAgICBpc051bWJlcixcbiAgICBpc0RhdGUsXG4gICAgaXNGdW5jdGlvbixcbiAgICBpc1JlZ0V4cCxcbiAgICBpc0Jvb2xlYW4sXG4gICAgaXNBcnJheSxcbiAgICBpc1N0cmluZyxcbiAgICBpc1NhbWUsXG4gICAgaXNGb3JtRGF0YSxcbiAgICBkZWJ1ZyxcbiAgICBjb250YWlucyxcbiAgICBjb250YWluc1N0cixcbiAgICBoYXNQcm9wZXJ0eSxcbiAgICBnZXRQcm9wZXJ0eSxcbiAgICBzZXRQcm9wZXJ0eSxcbiAgICBjb25jYXQsXG4gICAgb3JkZXJCeSxcbiAgICBvcmRlckJ5RGVzY2VuZGluZyxcbiAgICB0b051bWJlcixcbiAgICByZW1vdmVcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4uL2NvcmUvb2JzZXJ2ZXInO1xuaW1wb3J0IHsgY29tcGlsZSwgY29tcHV0ZSB9IGZyb20gJy4uL3BhcnNlcic7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICBnZXQgJHByb3h5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b1Byb3h5KCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobWV0YSkge1xuICAgICAgICBDb21wb25lbnQuY29uc3RydWN0LmNhbGwodGhpcywgbWV0YSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdChtZXRhKSB7XG4gICAgICAgIHRoaXMuJCRlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLiQkcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cyA9IFtdO1xuICAgICAgICB0aGlzLiQkY2hpbGREaXJlY3RpdmVzID0gW107XG4gICAgICAgIHRoaXMuJCRkZXRlY3RUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJG9ic2VydmVyID0gbmV3IE9ic2VydmVyKCk7XG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMgPSBbXTtcblxuICAgICAgICBpZiAobWV0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRzZXRNZXRhKG1ldGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XG4gICAgfVxuXG4gICAgJGhvb2tzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmVmb3JlQXR0ckNoYW5nZTogJycsXG4gICAgICAgICAgICBhZnRlckF0dHJDaGFuZ2U6ICcnLFxuICAgICAgICAgICAgb25Jbml0OiAnJyxcbiAgICAgICAgICAgIGJlZm9yZVZpZXdJbml0OiAnJyxcbiAgICAgICAgICAgIGFmdGVyVmlld01vdW50OiAnJyxcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXRNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgJGJpbmROb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy4kJGVsZW1lbnQgPSBub2RlO1xuICAgIH1cblxuICAgICRoYXNBdHRyKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMsIHByb3AsIHRydWUpO1xuICAgIH1cblxuICAgICRpbml0QXR0cihwcm9wLCB2YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBwcm9wLCB0cnVlKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmJlZm9yZUF0dHJDaGFuZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLmJlZm9yZUF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcywgcHJvcCwgdmFsdWUsIHRydWUpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuYWZ0ZXJBdHRyQ2hhbmdlKSkge1xuICAgICAgICAgICAgdGhpcy5hZnRlckF0dHJDaGFuZ2UuY2FsbCh0aGlzLCBwcm9wLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGluaXRBdHRyRG9uZSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkluaXQpKSB7XG4gICAgICAgICAgICB0aGlzLm9uSW5pdC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHNldEF0dHIocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywgcHJvcCwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5iZWZvcmVBdHRyQ2hhbmdlKSkge1xuICAgICAgICAgICAgdGhpcy5iZWZvcmVBdHRyQ2hhbmdlLmNhbGwodGhpcywgcHJvcCwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMuJHByb3h5LCBwcm9wLCB2YWx1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5hZnRlckF0dHJDaGFuZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLmFmdGVyQXR0ckNoYW5nZS5jYWxsKHRoaXMsIHByb3AsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkbGlzdGVuKGUsIGZuKSB7XG4gICAgICAgIHZhciBtZXNzZW5nZXIgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBlLCB0cnVlKTtcbiAgICAgICAgaWYgKHV0aWxzLmlzTWVzc2VuZ2VyKG1lc3NlbmdlcikpIHtcbiAgICAgICAgICAgIG1lc3Nlbmdlci5vbihmbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUgKyAnIGlzIG5vdCBhIGV2ZW50Jyk7XG4gICAgfVxuXG4gICAgJGdldFRlbXBsYXRlKHN5bmMpIHtcbiAgICAgICAgdmFyIG1ldGEgPSB0aGlzLiRnZXRNZXRhKCk7XG5cbiAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRhLnRlbXBsYXRlIHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG1ldGEudGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS50ZW1wbGF0ZVVybCkpIHtcbiAgICAgICAgICAgICAgICBpbmplY3Rvci5zZXJ2aWNlKCckdGVtcGxhdGVDYWNoZScpLmdldFRwbEJ5VXJsKG1ldGEudGVtcGxhdGVVcmwpLnRoZW4oZnVuY3Rpb24gKHRwbCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRwbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJHVzaW5nKG5hbWUpIHtcbiAgICAgICAgdmFyIG1ldGEgPSB0aGlzLiRnZXRNZXRhKCksXG4gICAgICAgICAgICB1c2luZyA9IG1ldGEudXNpbmcsXG4gICAgICAgICAgICBzZWdtZW50cyA9IG5hbWUuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHNlZ21lbnRzLnBvcCgpLFxuICAgICAgICAgICAgc3BhY2VOYW1lID0gc2VnbWVudHMuam9pbignLicpO1xuXG4gICAgICAgIGlmIChzcGFjZU5hbWUgJiYgdXRpbHMuaXNPYmplY3QodXNpbmcpKSB7XG4gICAgICAgICAgICB1dGlscy5zb21lKHVzaW5nLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IHNwYWNlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gdmFsdWUgKyAnLicgKyBjbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgJG1ha2VDb21waWxlT3B0aW9ucygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0RW1iZWRUcGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi4kJGVsZW1lbnQuZ2V0SW5uZXJUcGwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluc0NvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY29udGFpbnNDb21wb25lbnQoc2VsZi4kdXNpbmcobmFtZSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUNvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KHNlbGYuJHVzaW5nKG5hbWUpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluc0RpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY29udGFpbnNEaXJlY3RpdmUoc2VsZi4kdXNpbmcobmFtZSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZURpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlRGlyZWN0aXZlKHNlbGYuJHVzaW5nKG5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkaGFzVmlldygpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmlzQXJyYXkodGhpcy4kJGNoaWxkRWxlbWVudHMpO1xuICAgIH1cblxuICAgICRzaG93VmlldygpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICAgIHRoaXMuJCRjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjaGlsZC5nZXRIdG1sRWxlbWVudCgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuICAgICRjbGVhclZpZXcoKSB7XG4gICAgICAgIGlmICghdGhpcy4kaGFzVmlldygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJCRjaGlsZEVsZW1lbnRzID0gbnVsbDtcbiAgICB9XG5cbiAgICAkcmVuZGVyKHN5bmMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBmcmFnbWVudCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRoYXNWaWV3KCkpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IHRoaXMuJHNob3dWaWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGNvbXBpbGUodGhpcy4kZ2V0VGVtcGxhdGUoc3luYyksIHRoaXMuJG1ha2VDb21waWxlT3B0aW9ucygpKSh0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi4kaGFzVmlldygpKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzZWxmLiRzaG93VmlldygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuJGdldFRlbXBsYXRlKCkudGhlbihmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGNvbXBpbGUoaHRtbCwgc2VsZi4kbWFrZUNvbXBpbGVPcHRpb25zKCkpKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJHJlZnJlc2goc3luYykge1xuICAgICAgICB0aGlzLiRjbGVhclZpZXcoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJlbmRlcihzeW5jKTtcbiAgICB9XG5cbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBlbGVtZW50LCBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZWN0b3JPckVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMuYXBwZW5kKSB7XG4gICAgICAgICAgICB1dGlscy5jbGVhckNoaWxkTm9kZXMoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5zeW5jKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJHJlbmRlcihvcHRpb25zLnN5bmMpKTtcbiAgICAgICAgICAgIHNlbGYuJGFmdGVyVmlld01vdW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRyZW5kZXIob3B0aW9ucy5zeW5jKS50aGVuKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZSk7XG4gICAgICAgICAgICAgICAgc2VsZi4kYWZ0ZXJWaWV3TW91bnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLiQkZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudC4kcmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudC5yZW1vdmVIdG1sRWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuJGhhc1ZpZXcoKSkge1xuICAgICAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmVIdG1sRWxlbWVudCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kJHBhcmVudENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkcGFyZW50Q29tcG9uZW50LiRyZW1vdmVDaGlsZENtcCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGFmdGVyVmlld01vdW50KCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmFmdGVyVmlld01vdW50KSkge1xuICAgICAgICAgICAgdGhpcy5hZnRlclZpZXdNb3VudC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJCRkZXRlY3RUaW1lb3V0IHx8ICF0aGlzLiQkY2hpbGRFbGVtZW50cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLiQkZGV0ZWN0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi4kJGRldGVjdFRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXRlY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkdmFsaWRhdGUoKSB7XG4gICAgICAgIHZhciBvYmosIHByb3AsIGFjdGlvbiwgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIG9iaiA9IHRoaXM7XG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIG9iaiA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3VtZW50cyBlcnJvcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuJCRvYnNlcnZlci52YWxpZGF0ZShvYmosIHByb3AsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgJHdhdGNoKCkge1xuICAgICAgICB2YXIgb2JqLCBwcm9wLCBhY3Rpb24sIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBvYmogPSB0aGlzO1xuICAgICAgICAgICAgcHJvcCA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBvYmogPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBwcm9wID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgYWN0aW9uID0gYXJndW1lbnRzWzJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmd1bWVudHMgZXJyb3InKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLiQkb2JzZXJ2ZXIud2F0Y2gob2JqLCBwcm9wLCBhY3Rpb24pO1xuICAgIH1cblxuICAgICRldmFsKGV4cCkge1xuICAgICAgICByZXR1cm4gY29tcHV0ZShleHAsIHRoaXMpO1xuICAgIH1cblxuICAgICRnZXRQYXJlbnRDbXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkcGFyZW50Q29tcG9uZW50O1xuICAgIH1cblxuICAgICRyZW1vdmVDaGlsZENtcChjaGlsZENtcCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiQkY2hpbGRDb21wb25lbnRzLmluZGV4T2YoY2hpbGRDbXApO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGNoaWxkQ21wLiQkcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRjcmVhdGVDaGlsZENtcChjaGlsZENtcCkge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGNoaWxkQ21wKTtcbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbXBvbmVudC4kJHBhcmVudENvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgJGluaGVyaXRDbXAocGFyZW50Q21wKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc2VsZiwgdXRpbHMub2JqZWN0KHBhcmVudENtcCkpO1xuXG4gICAgICAgIC8vIHRvZG8gLSByZXNvbHZlIGlzc3VlIGNhbGxpbmcgcGFyZW50IGNvbXBvbmVudCdzIGxpZmVjeWNsZSBob29rc1xuICAgICAgICB1dGlscy5mb3JFYWNoKHNlbGYuJGhvb2tzKCksIGZ1bmN0aW9uIChoYW5kbGVyLCBob29rKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5oYXNPd25Qcm9wZXJ0eShob29rKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2VsZltob29rXSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMucHVzaChwYXJlbnRDbXAuJHZhbGlkYXRlKCcqJywgZnVuY3Rpb24gKHByb3AsIGFyZ3MpIHtcbiAgICAgICAgICAgIHNlbGYuJCRvYnNlcnZlci5maXJlQ2hhbmdpbmcoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLiQkZGlzcG9zZXJzLnB1c2gocGFyZW50Q21wLiR3YXRjaCgnKicsIGZ1bmN0aW9uIChwcm9wLCBhcmdzKSB7XG4gICAgICAgICAgICBzZWxmLiQkb2JzZXJ2ZXIuZmlyZUNoYW5nZWQoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAkZGlzcG9zZShkZXN0cm95RnJvbUVsZW1lbnQpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHZpcnR1YWwgbm9kZSBmaXJzdCBpbiBjYXNlIGl0IHRyaWdnZXJzIHBhcmVudCBjb21wb25lbnQgZGVzdHJveVxuICAgICAgICB0aGlzLiR1bm1vdW50KCk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJCRkZXRlY3RUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy4kJGRldGVjdFRpbWVvdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kJGRpc3Bvc2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChkaXNwb3Nlcikge1xuICAgICAgICAgICAgZGlzcG9zZXIuY2FsbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRjbGVhclZpZXcoKTtcbiAgICAgICAgdGhpcy4kJG9ic2VydmVyLmRlc3Ryb3koKTtcblxuICAgICAgICBpZiAoZGVzdHJveUZyb21FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGNoaWxkRGlyZWN0aXZlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJGRpc3Bvc2UoKTtcblxuICAgICAgICAvLyBkZXN0cm95IHZpcnR1YWwgbm9kZSBpbiB0aGUgZW5kIGJlY2F1c2UgaXQgbWF5IGJpbmRzIGxvZ2ljIGFib3V0IGRlc3Ryb3lcbiAgICAgICAgaWYgKHRoaXMuJCRlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJCRlbGVtZW50LmRpc3Bvc2UodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQge2luamVjdG9yfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZSB7XG4gICAgZ2V0ICRodG1sRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaHRtbEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgJGNvbXBvbmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQub3duZXJDb21wb25lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgJHNjb3BlKCkge1xuICAgICAgICBpZiAodGhpcy4kYmluZGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kYmluZGluZy5zY29wZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBEaXJlY3RpdmUuY29uc3RydWN0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgLy8gcHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMgPSBbXTtcbiAgICAgICAgdGhpcy4kJGNhbmNlbEFuaW1hdGlvblRva2VuID0gZmFsc2U7XG4gICAgICAgIC8vIHByaXZhdGUgcHJvcGVydGllc1xuXG4gICAgICAgIC8vIHB1YmxpYyBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuJG91dHB1dCA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRiaW5kaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy4kYXR0ciA9IG51bGw7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLiRwcmlvcml0eSA9IDA7XG4gICAgICAgIHRoaXMuJGVsZW1lbnRsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gcHVibGljIHByb3BlcnRpZXNcblxuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcbiAgICB9XG5cbiAgICAkaG9va3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxuICAgICAgICAgICAgb25Db21waWxlOiAnJyxcbiAgICAgICAgICAgIG9uSW5zZXJ0OiAnJyxcbiAgICAgICAgICAgIG9uRGV0ZWN0OiAnJyxcbiAgICAgICAgICAgIG9uVXBkYXRlOiAnJyxcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXRNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgJGJpbmROb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy4kYXR0ciA9IG5vZGU7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBub2RlLm93bmVyRWxlbWVudDtcbiAgICB9XG5cbiAgICAkc2V0QmluZGluZyhiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMuJGJpbmRpbmcgPSBiaW5kaW5nO1xuICAgIH1cblxuICAgICRjb21waWxlKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkNvbXBpbGUpKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGlsZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGluc2VydCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25JbnNlcnQpKSB7XG4gICAgICAgICAgICB0aGlzLm9uSW5zZXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRW50ZXIpIHx8IHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkxlYXZlKSkge1xuICAgICAgICAgICAgdGhpcy4kcmVxdWVzdEFuaW1hdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGlzTG9hZGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kaHRtbEVsZW1lbnQuY2xpZW50V2lkdGggPiAwICYmIHRoaXMuJGh0bWxFbGVtZW50LmNsaWVudEhlaWdodCA+IDA7XG4gICAgfVxuXG4gICAgJHJlcXVlc3RBbmltYXRpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBmdW5jdGlvbiBxdWVyeSgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLiQkY2FuY2VsQW5pbWF0aW9uVG9rZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLiRpc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLiRlbGVtZW50bG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVsZW1lbnRsb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vbkVudGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25FbnRlci5jYWxsKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuJGVsZW1lbnRsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZWxlbWVudGxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vbkxlYXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25MZWF2ZS5jYWxsKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICAkY2FuY2VsQW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLiQkY2FuY2VsQW5pbWF0aW9uVG9rZW4gPSB0cnVlO1xuICAgIH1cblxuICAgICRkZXRlY3QoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXRlY3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRldGVjdC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJGJpbmRpbmcuZGV0ZWN0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuJHVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vblVwZGF0ZSkpIHtcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRnZXRBdHRyVmFsdWUoYXR0ck5hbWUpIHtcbiAgICAgICAgdmFyIGF0dHJOb2RlID0gdGhpcy4kZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuXG4gICAgICAgIGlmIChhdHRyTm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXR0ck5vZGUuYmluZGluZy52YWx1ZTtcbiAgICB9XG5cbiAgICAkZGlzcG9zZShkZXN0cm95RnJvbUF0dHIpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuJGNhbmNlbEFuaW1hdGlvbigpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZXN0cm95RnJvbUF0dHIpIHtcbiAgICAgICAgICAgIHRoaXMuJGF0dHIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQkZGlzcG9zZXJzLmZvckVhY2goZnVuY3Rpb24gKGRpc3Bvc2VyKSB7XG4gICAgICAgICAgICBkaXNwb3Nlci5jYWxsKHNlbGYpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRiaW5kaW5nID0gbnVsbDtcbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kZGlzcG9zZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLiRhdHRyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGF0dHIuZGlzcG9zZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuJGF0dHIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQge2luamVjdG9yfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgRmlsdGVyLmNvbnN0cnVjdC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMpO1xuICAgIH1cblxuICAgICRob29rcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9uSW5pdDogJycsXG4gICAgICAgICAgICBvbkRlc3Ryb3k6ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgJGdldE1ldGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YSB8fCB7fTtcbiAgICB9XG5cbiAgICAkc2V0TWV0YSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiQkbWV0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgICRleGVjdXRlKCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRXhlY3V0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRXhlY3V0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHkvbWVzc2FnZSc7XG5pbXBvcnQgeyB0eXBlQ29uc3QsIGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUgfWZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UnO1xuXG5mdW5jdGlvbiBuYW1lc3BhY2UobnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQobmFtZSwgZGVmKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlyZWN0aXZlOiBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XG4gICAgICAgICAgICAgICAgZGVmID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkluc2VydDogZGVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU6IGRlZlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmUobmFtZSwgZGVmKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZTogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2UobmFtZSwgZGVmKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XG4gICAgICAgICAgICAgICAgZGVmID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkV4ZWN1dGU6IGRlZlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIobmFtZSwgZGVmKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudChuYW1lLCBkZWYpIHtcbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuY29tcG9uZW50LFxuICAgICAgICBzdXBlckNsYXNzOiBtYWtlQ29uc3RydWN0b3IoQ29tcG9uZW50KVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkaXJlY3RpdmUobmFtZSwgZGVmKSB7XG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xuICAgICAgICBkZWYgPSB7XG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgb25JbnNlcnQ6IGRlZixcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogZGVmXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LmRpcmVjdGl2ZSxcbiAgICAgICAgc3VwZXJDbGFzczogbWFrZUNvbnN0cnVjdG9yKERpcmVjdGl2ZSlcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKG5hbWUsIGRlZikge1xuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRlZikpIHtcbiAgICAgICAgZGVmID0ge1xuICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgIG9uRXhlY3V0ZTogZGVmXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LmZpbHRlcixcbiAgICAgICAgc3VwZXJDbGFzczogbWFrZUNvbnN0cnVjdG9yKEZpbHRlcilcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2VydmljZShuYW1lLCBkZWYpIHtcbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3Quc2VydmljZSxcbiAgICAgICAgc3VwZXJDbGFzczogbWFrZUNvbnN0cnVjdG9yKFNlcnZpY2UpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzQ29tcG9uZW50KG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0aXZlKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEaXJlY3RpdmU7XG59XG5cbmZ1bmN0aW9uIGlzRmlsdGVyKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBGaWx0ZXI7XG59XG5cbmZ1bmN0aW9uIGlzU2VydmljZShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgU2VydmljZTtcbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwKHNlbGVjdG9yT3JFbGVtZW50KSB7XG4gICAgdmFyIGVsZW1lbnQsIHRwbDtcblxuICAgIGlmICh1dGlscy5pc1N0cmluZyhzZWxlY3Rvck9yRWxlbWVudCkpIHtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xuICAgIH1cblxuICAgIHRwbCA9IGVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgbmV3IENvbXBvbmVudCh7XG4gICAgICAgIHRlbXBsYXRlOiB0cGxcbiAgICB9KS4kbW91bnQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VDb25zdHJ1Y3RvcihjbHMpIHtcbiAgICBmdW5jdGlvbiBmKCkge1xuICAgICAgICBjbHMuY29uc3RydWN0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgZi5wcm90b3R5cGUgPSBjbHMucHJvdG90eXBlO1xuICAgIHJldHVybiBmO1xufVxuXG5leHBvcnQgeyBuYW1lc3BhY2UsIGluamVjdG9yLCBjb21wb25lbnQsIGRpcmVjdGl2ZSwgZmlsdGVyLCBzZXJ2aWNlLCBpc0NvbXBvbmVudCwgaXNEaXJlY3RpdmUsIGlzRmlsdGVyLCBpc1NlcnZpY2UsIGJvb3RzdHJhcCB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eS9tZXNzYWdlJztcblxudmFyIHR5cGVDb25zdCA9IHtcbiAgICBmaWx0ZXI6ICdmaWx0ZXInLFxuICAgIHNlcnZpY2U6ICdzZXJ2aWNlJyxcbiAgICBjb21wb25lbnQ6ICdjb21wb25lbnQnLFxuICAgIGRpcmVjdGl2ZTogJ2RpcmVjdGl2ZSdcbn07XG5cbnZhciBuYW1lUGF0dGVybiA9IC9eW2Etel9cXCRdW1xcd1xcJC1dKi9pO1xuXG5jbGFzcyBJbmplY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0ge307XG4gICAgICAgIHRoaXMud2FpdGluZ1RvRXh0ZW5kcyA9IHt9O1xuICAgICAgICB0aGlzLmluc0NvbnRhaW5lciA9IHt9O1xuICAgIH1cblxuICAgIGdldE1hcHBpbmcoY29udHJhY3RUeXBlKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXSkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdO1xuICAgIH1cblxuICAgIGdldEluc3RhbmNlcyhjb250cmFjdFR5cGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluc0NvbnRhaW5lcltjb250cmFjdFR5cGVdKSB7XG4gICAgICAgICAgICB0aGlzLmluc0NvbnRhaW5lcltjb250cmFjdFR5cGVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKHNlbGVjdG9yLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBjaGFyYWN0ZXIgXCIuXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5nZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSk7XG5cbiAgICAgICAgaWYgKG1hcHBpbmdbc2VsZWN0b3JdID09IG51bGwpIHtcbiAgICAgICAgICAgIG1hcHBpbmdbc2VsZWN0b3JdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IG1hcHBpbmdbc2VsZWN0b3JdLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlID09PSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhLm5hbWVzcGFjZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNlbGVjdG9yICsgJyBpcyBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG1hdGNoZXNbMF0ucHJvdG90eXBlLiQkbWV0YS5uYW1lc3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWFwcGluZ1tzZWxlY3Rvcl0ucHVzaChjb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDb21wb25lbnQoc2VsZWN0b3IsIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIodHlwZUNvbnN0LmNvbXBvbmVudCwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckRpcmVjdGl2ZShzZWxlY3RvciwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcih0eXBlQ29uc3QuZGlyZWN0aXZlLCBzZWxlY3RvciwgY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIGNvbnRhaW5zKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGlnbm9yZUNhc2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xuICAgICAgICB2YXIgc2VnbWVudHMgPSBzZWxlY3Rvci5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbmFtZXNwYWNlID0gJyc7XG5cbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yID0gc2VnbWVudHMucG9wKCk7XG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBzZWdtZW50cy5qb2luKCcuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkobWFwcGluZywgc2VsZWN0b3IsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gbWFwcGluZ1tzZWxlY3Rvcl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgY29uc3RydWN0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbWV0YSA9IGl0ZW0ucHJvdG90eXBlLiQkbWV0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YS5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKG1ldGEubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb250YWluc0NvbXBvbmVudChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWlucyh0eXBlQ29uc3QuY29tcG9uZW50LCBzZWxlY3RvciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29udGFpbnNEaXJlY3RpdmUoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbnModHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IsIHRydWUpO1xuICAgIH1cblxuICAgIGdldChjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBpZ25vcmVDYXNlKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIG1hcHBpbmcgPSB0aGlzLmdldE1hcHBpbmcoY29udHJhY3RUeXBlKTtcbiAgICAgICAgdmFyIHNlZ21lbnRzID0gc2VsZWN0b3Iuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xuXG4gICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBzZWxlY3RvciA9IHNlZ21lbnRzLnBvcCgpO1xuICAgICAgICAgICAgbmFtZXNwYWNlID0gc2VnbWVudHMuam9pbignLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlnbm9yZUNhc2UpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHV0aWxzLmdldFByb3BlcnR5KG1hcHBpbmcsIHNlbGVjdG9yLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IG1hcHBpbmdbc2VsZWN0b3JdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3RUeXBlICsgJyAnICsgc2VsZWN0b3IgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1ldGEgPSBpdGVtLnByb3RvdHlwZS4kJG1ldGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNlbGVjdG9yICsgJyBpcyBub3QgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlcyA9IGNvbnN0cnVjdG9ycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhLm5hbWVzcGFjZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYW1lc3BhY2UgJyArIG5hbWVzcGFjZXMuam9pbignfCcpICsgJyBhbGwgaGF2ZSAnICsgc2VsZWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yc1swXTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnQoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5jb21wb25lbnQsIHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3RpdmUoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5kaXJlY3RpdmUsIHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBnZXRGaWx0ZXIoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5maWx0ZXIsIHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBnZXRTZXJ2aWNlKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0eXBlQ29uc3Quc2VydmljZSwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGNyZWF0ZShjb250cmFjdFR5cGUsIHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0KGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IpLCBpbnN0YW5jZTtcblxuICAgICAgICBzd2l0Y2ggKGNvbnRyYWN0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuY29tcG9uZW50OlxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVDb21wb25lbnQoY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuZGlyZWN0aXZlOlxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVEaXJlY3RpdmUoY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuZmlsdGVyOlxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVGaWx0ZXIoY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3Quc2VydmljZTpcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlU2VydmljZShjb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29tcG9uZW50KGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRDb21wb25lbnQoY29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEaXJlY3RpdmUoY29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldERpcmVjdGl2ZShjb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUZpbHRlcihjb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0RmlsdGVyKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlU2VydmljZShjb25zdHJ1Y3Rvcikge1xuICAgICAgICB2YXIgaW5zdGFuY2UsIHNlcnZpY2VzID0gdGhpcy5nZXRJbnN0YW5jZXModHlwZUNvbnN0LnNlcnZpY2UpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRTZXJ2aWNlKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YS5ub25TaGFyZWQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBzZXJ2aWNlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvcigpO1xuICAgICAgICAgICAgc2VydmljZXMucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc2VydmljZShzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTZXJ2aWNlKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBnZXRXYWl0aW5nVG9FeHRlbmRzKGNvbnRyYWN0VHlwZSkge1xuICAgICAgICBpZiAoIXRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdKSB7XG4gICAgICAgICAgICB0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXTtcbiAgICB9XG5cbiAgICBzZXRXYWl0aW5nVG9FeHRlbmRzKGNvbnRyYWN0VHlwZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjaGVja1NlbGVjdG9yKHNlbGVjdG9yLCBjb250cmFjdFR5cGUpIHtcbiAgICAgICAgaWYgKG5hbWVQYXR0ZXJuLnRlc3Qoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICB2YXIgY29uc3RydWN0b3JOYW1lID0gJyc7XG4gICAgICAgICAgICB2YXIgc2VnbWVudHMgPSBzZWxlY3Rvci5zcGxpdCgnLScpO1xuXG4gICAgICAgICAgICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9IHV0aWxzLnVwcGVyY2FzZShzZWdtZW50WzBdKSArIHNlZ21lbnQuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoY29udHJhY3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuY29tcG9uZW50OlxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ0NvbXBvbmVudCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmRpcmVjdGl2ZTpcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdEaXJlY3RpdmUnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5maWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSAnRmlsdGVyJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3Quc2VydmljZTpcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdTZXJ2aWNlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvck5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc2VsZWN0b3IgKyAnaXMgbm90IGEgdmFsaWQgbmFtZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVpbGRDb25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSA9IHRoaXMuY2hlY2tTZWxlY3RvcihzZWxlY3Rvciwgb3B0aW9ucy5jb250cmFjdFR5cGUpLFxuICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kcyA9IHNlbGYuZ2V0V2FpdGluZ1RvRXh0ZW5kcyhvcHRpb25zLmNvbnRyYWN0VHlwZSksXG4gICAgICAgICAgICBvbkNvbnN0cnVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25zdHJ1Y3Rvci5zdXBlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3Iuc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24obWV0YS5jb25zdHJ1Y3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGEuY29uc3RydWN0LmNhbGwodGhpcywgTWVzc2VuZ2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IEZ1bmN0aW9uKCdvbkNvbnN0cnVjdCcsICdcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24gJyArIGNvbnN0cnVjdG9yTmFtZSArICcoKXtvbkNvbnN0cnVjdC5jYWxsKHRoaXMpO307Jykob25Db25zdHJ1Y3QpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKG9wdGlvbnMuc3VwZXJDbGFzcykpIHtcbiAgICAgICAgICAgIHV0aWxzLmluaGVyaXQoY29uc3RydWN0b3IsIG9wdGlvbnMuc3VwZXJDbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRhLnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cbiAgICAgICAgLy8gYXBwbHkgcHJvcGVydGllcyBhbmQgbWV0aG9kc1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobWV0YS5leHRlbmRzKSkge1xuICAgICAgICAgICAgaWYgKGluamVjdG9yLmNvbnRhaW5zKG9wdGlvbnMuY29udHJhY3RUeXBlLCBtZXRhLmV4dGVuZHMpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1cGVyT25lID0gaW5qZWN0b3IuZ2V0KG9wdGlvbnMuY29udHJhY3RUeXBlLCBtZXRhLmV4dGVuZHMpO1xuICAgICAgICAgICAgICAgIHJlbWFpbkNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJOYW1lOiBtZXRhLmV4dGVuZHMsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoc3VwZXJPbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbkNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtZXRhLCBjb25zdHJ1Y3Rvciwgc3VwZXJPbmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZW1haW5Db25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgY29uc3RydWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kTWV0YShtZXRhLCBzdXBlck9uZSkge1xuICAgICAgICAgICAgaWYgKHN1cGVyT25lLnByb3RvdHlwZS4kJG1ldGEgJiYgc3VwZXJPbmUucHJvdG90eXBlLiQkbWV0YS5wcm90ZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Iob3B0aW9ucy5jb250cmFjdFR5cGUgKyAnOiAnICsgbWV0YS5leHRlbmRzICsgJyBpcyBwcm90ZWN0ZWQsIGl0IGlzIG5vdCBhbGxvd2VkIHRvIGV4dGVuZCEnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHN1cGVyTWV0YSA9IHN1cGVyT25lLnByb3RvdHlwZS4kJG1ldGE7XG4gICAgICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodHJ1ZSwgc3VwZXJNZXRhLCBmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIShvYmogPT09IHN1cGVyTWV0YSAmJiAoa2V5ID09PSAnY29uc3RydWN0JyB8fCBrZXkgPT09ICdtZXRob2RzJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHMubWVyZ2UodHJ1ZSwgY29weSwgbWV0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1haW5Db25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgY29uc3RydWN0b3IsIHN1cGVyT25lKSB7XG4gICAgICAgICAgICBpZiAoc3VwZXJPbmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHV0aWxzLmluaGVyaXQoY29uc3RydWN0b3IsIHN1cGVyT25lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY3JlYXRlIG1ldGhvZHNcbiAgICAgICAgICAgIGlmICh1dGlscy5pc09iamVjdChtZXRhLm1ldGhvZHMpKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuZXh0ZW5kKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgbWV0YS5tZXRob2RzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5yZWdpc3RlckNvbnN0cnVjdG9yKG9wdGlvbnMuY29udHJhY3RUeXBlLCBzZWxlY3RvciwgY29uc3RydWN0b3IsIG1ldGEpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBhbnkgY29tcG9uZW50IGV4dGVuZHMgY3VycmVudCBjb21wb25lbnRcbiAgICAgICAgICAgIHZhciB3YWl0aW5nVG9FeHRlbmRzMiA9IFtdLCBmdWxsU2VsZWN0b3IgPSBtZXRhLm5hbWVzcGFjZSArICcuJyArIHNlbGVjdG9yO1xuICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uc3VwZXJOYW1lID09PSBmdWxsU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jYWxsYmFjay5jYWxsKG51bGwsIGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdhaXRpbmdUb0V4dGVuZHMyLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLnNldFdhaXRpbmdUb0V4dGVuZHMob3B0aW9ucy5jb250cmFjdFR5cGUsIHdhaXRpbmdUb0V4dGVuZHMyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICB9XG5cbiAgICByZWdpc3RlckNvbnN0cnVjdG9yKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yLCBtZXRhKSB7XG4gICAgICAgIHZhciBzdXBlck1ldGEgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhO1xuXG4gICAgICAgIGlmIChzdXBlck1ldGEgJiYgc3VwZXJNZXRhLnByb3RlY3RlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRyYWN0VHlwZSArICc6ICcgKyBtZXRhLmV4dGVuZHMgKyAnIGlzIHByb3RlY3RlZCwgaXQgaXMgbm90IGFsbG93ZWQgdG8gZXh0ZW5kIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvcHkgPSB1dGlscy5jb3B5KHRydWUsIHN1cGVyTWV0YSwgZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gIShvYmogPT09IHN1cGVyTWV0YSAmJiAoa2V5ID09PSAnY29uc3RydWN0JyB8fCBrZXkgPT09ICdtZXRob2RzJykpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZXRhID0gdXRpbHMubWVyZ2UodHJ1ZSwgY29weSwgbWV0YSk7XG5cbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YSA9IG1ldGE7XG5cbiAgICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IGlmIGl0IGlzIGdsb2JhbFxuICAgICAgICBpZiAoIW1ldGEubG9jYWwpIHtcbiAgICAgICAgICAgIGluamVjdG9yLnJlZ2lzdGVyKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluamVjdFNlcnZpY2VzKGluc3RhbmNlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgbWV0YSA9IGluc3RhbmNlLiRnZXRNZXRhKCk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG1ldGEuaW5qZWN0KSkge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChtZXRhLmluamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW5zdGFuY2UsIGtleSwge1xuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpdmF0ZUtleSA9ICckJCcgKyBrZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVtwcml2YXRlS2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJpdmF0ZUtleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2UodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VbcHJpdmF0ZUtleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgaW5qZWN0b3IgPSBuZXcgSW5qZWN0b3IoKTtcblxuZXhwb3J0IHsgdHlwZUNvbnN0LCBJbmplY3RvciwgaW5qZWN0b3IgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFNlcnZpY2UuY29uc3RydWN0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XG4gICAgfVxuXG4gICAgJGhvb2tzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb25Jbml0OiAnJyxcbiAgICAgICAgICAgIG9uRGVzdHJveTogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAkZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXRNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJCRtZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9