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

/***/ "./src/animation/animate-base.js":
/*!***************************************!*\
  !*** ./src/animation/animate-base.js ***!
  \***************************************/
/*! exports provided: AnimateBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateBase", function() { return AnimateBase; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var AnimateBase =
/*#__PURE__*/
function () {
  function AnimateBase(element, context) {
    _classCallCheck(this, AnimateBase);

    this.type = '';
    this.duration = null;
    this.ended = false;
    this.destroyed = false;
    this.element = element;
    this.context = context;
    this.animationEnding = new _utility__WEBPACK_IMPORTED_MODULE_0__["Messenger"]();
    this.animationEnd = new _utility__WEBPACK_IMPORTED_MODULE_0__["Messenger"]();
  }

  _createClass(AnimateBase, [{
    key: "end",
    value: function end() {
      if (!this.ended) {
        this.ended = true;
        this.animationEnding.fire(null, this);
        this.animationEnd.fire(null, this);
      }
    }
  }, {
    key: "isLive",
    value: function isLive() {
      return !this.destroyed;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (!this.destroyed) {
        this.destroyed = true;
        this.onDestroy && this.onDestroy();
        this.element = null;
        this.context = null;
        this.animationEnding = null;
        this.animationEnd = null;
      }
    }
  }]);

  return AnimateBase;
}();

/***/ }),

/***/ "./src/animation/animate-enter.js":
/*!****************************************!*\
  !*** ./src/animation/animate-enter.js ***!
  \****************************************/
/*! exports provided: AnimateEnter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateEnter", function() { return AnimateEnter; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _animate_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate-utils */ "./src/animation/animate-utils.js");
/* harmony import */ var _animate_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animate-base */ "./src/animation/animate-base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var AnimateEnter =
/*#__PURE__*/
function (_AnimateBase) {
  _inherits(AnimateEnter, _AnimateBase);

  function AnimateEnter(element, context) {
    var _this;

    _classCallCheck(this, AnimateEnter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AnimateEnter).call(this, element, context));
    _this.enterClass = '';
    _this.enterToClass = '';
    _this.enterActiveClass = '';
    return _this;
  }

  _createClass(AnimateEnter, [{
    key: "execute",
    value: function execute() {
      var self = this,
          el = self.element; // animation is cancelled

      if (el == null || self.destroyed) {
        if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this._beforeEnterCb)) {
          this._beforeEnterCb();
        }

        return true;
      }

      var explicitEnterDuration = _utility__WEBPACK_IMPORTED_MODULE_0__["toNumber"](_utility__WEBPACK_IMPORTED_MODULE_0__["isObject"](self.duration) ? self.duration.enter : self.duration);
      var cb = el._enterCb = _animate_utils__WEBPACK_IMPORTED_MODULE_1__["once"](function () {
        el._enterCb = null;

        if (!self.destroyed) {
          _animate_utils__WEBPACK_IMPORTED_MODULE_1__["removeAnimationClass"](el, self.enterToClass);
          _animate_utils__WEBPACK_IMPORTED_MODULE_1__["removeAnimationClass"](el, self.enterActiveClass);

          if (cb.cancelled) {
            _animate_utils__WEBPACK_IMPORTED_MODULE_1__["removeAnimationClass"](el, self.enterClass);
            self.context.enterCancelled && self.context.enterCancelled(el);
          } else {
            self.context.afterEnter && self.context.afterEnter(el);
          }
        }

        self.end();
      });
      this._beforeEnterCb = null; // start enter animation

      _animate_utils__WEBPACK_IMPORTED_MODULE_1__["addAnimationClass"](el, self.enterActiveClass);
      self.context.enter && self.context.enter(el, cb);
      _animate_utils__WEBPACK_IMPORTED_MODULE_1__["nextFrame"](function () {
        if (!self.destroyed) {
          _animate_utils__WEBPACK_IMPORTED_MODULE_1__["removeAnimationClass"](el, self.enterClass);

          if (!cb.cancelled) {
            _animate_utils__WEBPACK_IMPORTED_MODULE_1__["addAnimationClass"](el, self.enterToClass);
            self.context.enterTo && self.context.enterTo(el, cb);

            if (_animate_utils__WEBPACK_IMPORTED_MODULE_1__["isValidDuration"](explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              _animate_utils__WEBPACK_IMPORTED_MODULE_1__["whenAnimationEnds"](el, self.type, cb);
            }
          } else {
            self.end();
          }
        } else {
          self.end();
        }
      });
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this._beforeEnterCb)) {
        this._beforeEnterCb();
      }

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.element._enterCb)) {
        this.element._enterCb.cancelled = true;

        this.element._enterCb();
      }
    }
  }]);

  return AnimateEnter;
}(_animate_base__WEBPACK_IMPORTED_MODULE_2__["AnimateBase"]);

/***/ }),

/***/ "./src/animation/animate-leave.js":
/*!****************************************!*\
  !*** ./src/animation/animate-leave.js ***!
  \****************************************/
/*! exports provided: AnimateLeave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateLeave", function() { return AnimateLeave; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _animate_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate-utils */ "./src/animation/animate-utils.js");
/* harmony import */ var _animate_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animate-base */ "./src/animation/animate-base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var AnimateLeave =
/*#__PURE__*/
function (_AnimateBase) {
  _inherits(AnimateLeave, _AnimateBase);

  function AnimateLeave(element, context) {
    var _this;

    _classCallCheck(this, AnimateLeave);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AnimateLeave).call(this, element, context));
    _this.doLeave = null;
    _this.leaveClass = '';
    _this.leaveToClass = '';
    _this.leaveActiveClass = '';
    return _this;
  }

  _createClass(AnimateLeave, [{
    key: "execute",
    value: function execute() {
      var self = this,
          el = self.element; // animation is cancelled

      if (el == null || self.destroyed) {
        if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this._beforeLeaveCb)) {
          this._beforeLeaveCb();
        }

        return true;
      }

      var explicitLeaveDuration = _utility__WEBPACK_IMPORTED_MODULE_0__["toNumber"](_utility__WEBPACK_IMPORTED_MODULE_0__["isObject"](self.duration) ? self.duration.leave : self.duration);
      var cb = el._leaveCb = _animate_utils__WEBPACK_IMPORTED_MODULE_1__["once"](function () {
        el._leaveCb = null;

        if (!self.destroyed) {
          _animate_utils__WEBPACK_IMPORTED_MODULE_1__["removeAnimationClass"](el, self.leaveToClass);
          _animate_utils__WEBPACK_IMPORTED_MODULE_1__["removeAnimationClass"](el, self.leaveActiveClass);

          if (cb.cancelled) {
            _animate_utils__WEBPACK_IMPORTED_MODULE_1__["removeAnimationClass"](el, self.leaveClass);
            self.context.leaveCancelled && self.context.leaveCancelled(el);
          } else {
            self.doLeave();
            self.context.afterLeave && self.context.afterLeave(el);
          }
        }

        self.end();
      }); // the delayed leave may have already been cancelled

      if (cb.cancelled || self.destroyed) {
        if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this._beforeLeaveCb)) {
          this._beforeLeaveCb();
        }

        return true;
      }

      this._beforeLeaveCb = null;
      _animate_utils__WEBPACK_IMPORTED_MODULE_1__["addAnimationClass"](el, self.leaveActiveClass);
      self.context.leave && self.context.leave(el, cb);
      _animate_utils__WEBPACK_IMPORTED_MODULE_1__["nextFrame"](function () {
        if (!self.destroyed) {
          _animate_utils__WEBPACK_IMPORTED_MODULE_1__["removeAnimationClass"](el, self.leaveClass);

          if (!cb.cancelled) {
            _animate_utils__WEBPACK_IMPORTED_MODULE_1__["addAnimationClass"](el, self.leaveToClass);
            self.context.leaveTo && self.context.leaveTo(el, cb);

            if (_animate_utils__WEBPACK_IMPORTED_MODULE_1__["isValidDuration"](explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              _animate_utils__WEBPACK_IMPORTED_MODULE_1__["whenAnimationEnds"](el, self.type, cb);
            }
          } else {
            self.end();
          }
        } else {
          self.end();
        }
      });
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.doLeave = null;

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this._beforeLeaveCb)) {
        this._beforeLeaveCb();
      }

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.element._leaveCb)) {
        this.element._leaveCb.cancelled = true;

        this.element._leaveCb();
      }
    }
  }]);

  return AnimateLeave;
}(_animate_base__WEBPACK_IMPORTED_MODULE_2__["AnimateBase"]);

/***/ }),

/***/ "./src/animation/animate-utils.js":
/*!****************************************!*\
  !*** ./src/animation/animate-utils.js ***!
  \****************************************/
/*! exports provided: once, nextFrame, addAnimationClass, removeAnimationClass, whenAnimationEnds, getAnimationInfo, getTimeout, toMs, isValidDuration, raf, isInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextFrame", function() { return nextFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAnimationClass", function() { return addAnimationClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAnimationClass", function() { return removeAnimationClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenAnimationEnds", function() { return whenAnimationEnds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnimationInfo", function() { return getAnimationInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeout", function() { return getTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMs", function() { return toMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidDuration", function() { return isValidDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInPage", function() { return isInPage; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");

var TRANSITION = 'transition';
var ANIMATION = 'animation';
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
var transformRE = /\b(transform|all)(,|$)/;

function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

function nextFrame(fn) {
  requestAnimationFrame(function () {
    requestAnimationFrame(fn);
  });
}

function addAnimationClass(el, cls) {
  var animationClasses = el._animationClasses || (el._animationClasses = []);

  if (animationClasses.indexOf(cls) < 0) {
    animationClasses.push(cls);
    _utility__WEBPACK_IMPORTED_MODULE_0__["addClass"](el, cls);
  }
}

function removeAnimationClass(el, cls) {
  if (el._animationClasses) {
    _utility__WEBPACK_IMPORTED_MODULE_0__["remove"](el._animationClasses, cls);
  }

  _utility__WEBPACK_IMPORTED_MODULE_0__["removeClass"](el, cls);
}

function whenAnimationEnds(el, expectedType, cb) {
  var ref = getAnimationInfo(el, expectedType);
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

function getAnimationInfo(el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
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

function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
}

function toMs(s) {
  return Number(s.slice(0, -1)) * 1000;
}

function isValidDuration(value) {
  return typeof value === 'number' && !isNaN(value);
}

function raf(action, refNumber) {
  var cancelled = false;

  function cancel() {
    cancelled = true;
  }

  function isCanceled() {
    if (_utility__WEBPACK_IMPORTED_MODULE_0__["isNumber"](refNumber)) {
      if (refNumber > 0) {
        refNumber--;
      } else {
        cancelled = true;
      }
    }

    return cancelled;
  }

  function main() {
    if (isCanceled()) {
      return;
    }

    action(cancel);
    nextFrame(main);
  }

  nextFrame(main);
  return cancel;
}

function isInPage(node) {
  return node === document.body ? false : document.body.contains(node);
}



/***/ }),

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
/* harmony import */ var _animate_enter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animate-enter */ "./src/animation/animate-enter.js");
/* harmony import */ var _animate_leave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animate-leave */ "./src/animation/animate-leave.js");
/* harmony import */ var _animate_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animate-utils */ "./src/animation/animate-utils.js");
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







var AnimateService = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_2__["service"])({
  namespace: 'sine',
  selector: '$animate'
}), _dec(_class =
/*#__PURE__*/
function (_Service) {
  _inherits(AnimateService, _Service);

  function AnimateService() {
    var _this;

    _classCallCheck(this, AnimateService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AnimateService).call(this));
    _this.activeAnimation = [];
    _this.animationQueue = [];
    _this.delayedAnimation = [];

    _this.$$main();

    return _this;
  }

  _createClass(AnimateService, [{
    key: "$$main",
    value: function $$main() {
      var self = this;
      _animate_utils__WEBPACK_IMPORTED_MODULE_5__["raf"](function () {
        while (self.delayedAnimation.length > 0) {
          self.animationQueue.push(self.delayedAnimation.shift());
        }

        while (self.animationQueue.length > 0) {
          var animation = self.animationQueue.shift();

          if (animation.destroyed) {
            continue;
          }

          if (_animate_utils__WEBPACK_IMPORTED_MODULE_5__["isInPage"](animation.element)) {
            var cancelled = animation.execute();

            if (!cancelled) {
              self.activeAnimation.push(animation);
              animation.animationEnding.on(function () {
                _utility__WEBPACK_IMPORTED_MODULE_0__["remove"](self.activeAnimation, this);
              });
            }
          } else {
            self.delayedAnimation.push(animation);
          }
        }
      });
    } // by default, animation is disable while there is parent element animating

  }, {
    key: "disableAnimate",
    value: function disableAnimate(el) {
      return this.animationQueue.some(function (item) {
        return item.isLive() && item.element.contains(el) && !item.context.animateChildren;
      }) || this.activeAnimation.some(function (item) {
        return item.isLive() && item.element.contains(el) && !item.context.animateChildren;
      });
    }
  }, {
    key: "enter",
    value: function enter(vnode, doEnter, appear) {
      var self = this,
          el = vnode.htmlElement; // call leave callback now

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](el._leaveCb)) {
        el._leaveCb.cancelled = true;

        el._leaveCb();
      }

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](el._enterCb) || el.nodeType !== 1) {
        return;
      }

      var context = this.resolveAnimationContext(vnode);

      if (!context || appear && !context.animateAppear) {
        return doEnter();
      }

      var data = this.resolveAnimation(context);
      var animation = new _animate_enter__WEBPACK_IMPORTED_MODULE_3__["AnimateEnter"](el, context);
      animation.doEnter = doEnter;
      animation.type = data.type;
      animation.duration = data.duration;
      animation.enterClass = data.enterClass;
      animation.enterToClass = data.enterToClass;
      animation.enterActiveClass = data.enterActiveClass;

      if (context.delayEnter) {
        context.delayEnter(performEnter);
      } else {
        performEnter();
      }

      function performEnter() {
        if (self.disableAnimate(el)) {
          return doEnter();
        }

        animation._beforeEnterCb = _animate_utils__WEBPACK_IMPORTED_MODULE_5__["once"](function () {
          _animate_utils__WEBPACK_IMPORTED_MODULE_5__["removeAnimationClass"](el, animation.enterClass);
          context.enterCancelled && context.enterCancelled(el);
          animation._beforeEnterCb = null;
        });
        context.beforeEnter && context.beforeEnter(el);
        _animate_utils__WEBPACK_IMPORTED_MODULE_5__["addAnimationClass"](el, animation.enterClass);
        doEnter();
        self.animationQueue.push(animation);
        context.animationDestroyed.on(function () {
          animation.destroy();
        });
      }

      return animation;
    }
  }, {
    key: "leave",
    value: function leave(vnode, doLeave) {
      var self = this,
          el = vnode.htmlElement; // call enter callback now

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](el._enterCb)) {
        el._enterCb.cancelled = true;

        el._enterCb();
      }

      var context = this.resolveAnimationContext(vnode);

      if (!context || el.nodeType !== 1) {
        return doLeave();
      }

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"](el._leaveCb)) {
        return;
      }

      var data = this.resolveAnimation(context);
      var animation = new _animate_leave__WEBPACK_IMPORTED_MODULE_4__["AnimateLeave"](el, context);
      animation.doLeave = doLeave;
      animation.type = data.type;
      animation.duration = data.duration;
      animation.leaveClass = data.leaveClass;
      animation.leaveToClass = data.leaveToClass;
      animation.leaveActiveClass = data.leaveActiveClass;

      if (context.delayLeave) {
        context.delayLeave(performLeave);
      } else {
        performLeave();
      }

      function performLeave() {
        if (self.disableAnimate(el)) {
          return doLeave();
        }

        animation._beforeLeaveCb = _animate_utils__WEBPACK_IMPORTED_MODULE_5__["once"](function () {
          _animate_utils__WEBPACK_IMPORTED_MODULE_5__["removeAnimationClass"](el, animation.leaveClass);
          context.leaveCancelled && context.leaveCancelled(el);
          animation._beforeLeaveCb = null;
        });
        context.beforeLeave && context.beforeLeave(el);
        _animate_utils__WEBPACK_IMPORTED_MODULE_5__["addAnimationClass"](el, animation.leaveClass);
        self.animationQueue.push(animation);
        context.animationDestroyed.on(function () {
          animation.destroy();
        });
      }

      return animation;
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
        appearClass: name + "-appear",
        appearToClass: name + "-appear-to",
        appearActiveClass: name + "-appear-active",
        enterClass: name + "-enter",
        enterToClass: name + "-enter-to",
        enterActiveClass: name + "-enter-active",
        leaveClass: name + "-leave",
        leaveToClass: name + "-leave-to",
        leaveActiveClass: name + "-leave-active"
      };
    }
  }, {
    key: "resolveAnimationContext",
    value: function resolveAnimationContext(element) {
      var animations = element.getDirectives().filter(function (dir) {
        return dir.animation;
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
    _this.animateAppear = false;
    _this.animateChildren = false;
    _this.animationDestroyed = new _utility__WEBPACK_IMPORTED_MODULE_2__["Messenger"]();
    return _this;
  }

  _createClass(Animation, [{
    key: "nextFrame",
    value: function nextFrame(fn) {
      requestAnimationFrame(function () {
        requestAnimationFrame(fn);
      });
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.animationDestroyed.fire();
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

/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test */ "./src/animation/test.js");
/* empty/unused harmony star reexport *//* harmony import */ var _test2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test2 */ "./src/animation/test2.js");
/* empty/unused harmony star reexport */




/***/ }),

/***/ "./src/animation/test.js":
/*!*******************************!*\
  !*** ./src/animation/test.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation */ "./src/animation/index.js");
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



var TestAnimation = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'test-animation'
}), _dec(_class =
/*#__PURE__*/
function (_Animation) {
  _inherits(TestAnimation, _Animation);

  function TestAnimation() {
    var _this;

    _classCallCheck(this, TestAnimation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TestAnimation).call(this));
    _this.height = 0;
    _this.animateChildren = true;
    return _this;
  }

  _createClass(TestAnimation, [{
    key: "enter",
    value: function enter() {
      this.height = this.$htmlElement.clientHeight;
      this.$htmlElement.style.height = '1px';
      this.$htmlElement.style.transition = 'height 1.5s';
    }
  }, {
    key: "enterTo",
    value: function enterTo() {
      // this.$htmlElement.style.transition = 'height 1.5s';
      this.$htmlElement.style.height = this.height + 'px';
    }
  }, {
    key: "afterEnter",
    value: function afterEnter() {
      this.$htmlElement.style.transition = null; // this.$htmlElement.style.height = null;
    }
  }, {
    key: "enterCancelled",
    value: function enterCancelled() {}
  }]);

  return TestAnimation;
}(_animation__WEBPACK_IMPORTED_MODULE_0__["Animation"])) || _class);

/***/ }),

/***/ "./src/animation/test2.js":
/*!********************************!*\
  !*** ./src/animation/test2.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation */ "./src/animation/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class, _dec2, _class2;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Test2Animation = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'test2-animation'
}), _dec(_class =
/*#__PURE__*/
function (_Animation) {
  _inherits(Test2Animation, _Animation);

  function Test2Animation() {
    _classCallCheck(this, Test2Animation);

    return _possibleConstructorReturn(this, _getPrototypeOf(Test2Animation).call(this));
  }

  _createClass(Test2Animation, [{
    key: "beforeEnter",
    value: function beforeEnter() {
      this.$htmlElement.style.opacity = 0;
    }
  }, {
    key: "enter",
    value: function enter() {
      this.$htmlElement.style.transition = 'all 0.5s ease';
    }
  }, {
    key: "enterTo",
    value: function enterTo() {
      this.$htmlElement.style.opacity = 1;
    }
  }, {
    key: "afterEnter",
    value: function afterEnter() {
      this.$htmlElement.style.opacity = null;
      this.$htmlElement.style.transition = null; // this.$htmlElement.style.height = null;
    }
  }, {
    key: "enterCancelled",
    value: function enterCancelled() {
      this.$htmlElement.style.opacity = null;
      this.$htmlElement.style.transition = null;
    }
  }, {
    key: "beforeLeave",
    value: function beforeLeave() {
      this.$htmlElement.style.transition = 'all 0.5s ease';
    }
  }, {
    key: "leave",
    value: function leave() {
      this.$htmlElement.style.opacity = 0;
    }
  }, {
    key: "afterLeave",
    value: function afterLeave() {
      this.$htmlElement.style.opacity = null;
      this.$htmlElement.style.transition = null;
    }
  }, {
    key: "leaveCancelled",
    value: function leaveCancelled() {
      this.$htmlElement.style.opacity = null;
      this.$htmlElement.style.transition = null;
    }
  }]);

  return Test2Animation;
}(_animation__WEBPACK_IMPORTED_MODULE_0__["Animation"])) || _class);
var Test3Animation = (_dec2 = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'test3-animation'
}), _dec2(_class2 =
/*#__PURE__*/
function (_Animation2) {
  _inherits(Test3Animation, _Animation2);

  function Test3Animation() {
    _classCallCheck(this, Test3Animation);

    return _possibleConstructorReturn(this, _getPrototypeOf(Test3Animation).call(this));
  }

  _createClass(Test3Animation, [{
    key: "beforeEnter",
    value: function beforeEnter() {
      this.$htmlElement.style.transform = 'translateX(-20px)';
    }
  }, {
    key: "enter",
    value: function enter() {
      this.$htmlElement.style.transition = 'all 1s ease';
    }
  }, {
    key: "enterTo",
    value: function enterTo() {
      this.$htmlElement.style.transform = 'translateX(0px)';
    }
  }, {
    key: "afterEnter",
    value: function afterEnter() {
      this.$htmlElement.style.transform = null;
      this.$htmlElement.style.transition = null;
    }
  }, {
    key: "enterCancelled",
    value: function enterCancelled() {
      this.$htmlElement.style.transform = null;
      this.$htmlElement.style.transition = null;
    }
  }, {
    key: "beforeLeave",
    value: function beforeLeave() {
      this.$htmlElement.style.transform = 'translateX(0px)';
    }
  }, {
    key: "leave",
    value: function leave() {
      this.$htmlElement.style.transition = 'all 1s ease';
    }
  }, {
    key: "leaveTo",
    value: function leaveTo() {
      this.$htmlElement.style.transform = 'translateX(20px)';
    }
  }, {
    key: "afterLeave",
    value: function afterLeave() {
      this.$htmlElement.style.transform = null;
      this.$htmlElement.style.transition = null;
    }
  }, {
    key: "leaveCancelled",
    value: function leaveCancelled() {
      this.$htmlElement.style.transform = null;
      this.$htmlElement.style.transition = null;
    }
  }]);

  return Test3Animation;
}(_animation__WEBPACK_IMPORTED_MODULE_0__["Animation"])) || _class2);

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
        assignment.obj.$[assignment.prop] = value;
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

Object.defineProperty(Object.prototype, '$', {
  get: function get() {
    return new Proxy(this, new _handler__WEBPACK_IMPORTED_MODULE_0__["SetPropertyHandler"]());
  },
  configurable: false,
  enumerable: false
});

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
    var _this;

    _classCallCheck(this, HideDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HideDirective).call(this));
    _this.initialDisplay = null;
    return _this;
  }

  _createClass(HideDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.initialDisplay = this.$htmlElement.style.display;
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
          self.$htmlElement.style.display = self.initialDisplay;
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
/* empty/unused harmony star reexport *//* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view */ "./src/directive/view.js");
/* empty/unused harmony star reexport *//* harmony import */ var _view_options__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-options */ "./src/directive/view-options.js");
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

      var scope = this.$binding.scope;

      if (scope[name] == null) {
        scope.$[name] = {};
      }

      var state = scope[name].$;
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

      var scope = this.$scope;

      if (this.$component != null) {
        scope.$[this.name] = this.$component;
      } else {
        scope.$[this.name] = this.$element;
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
      this.$scope.$[this.name] = cmp;
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
        fragment.appendChild(cmpItem.$render());
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
    var _this;

    _classCallCheck(this, ShowDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ShowDirective).call(this));
    _this.initialDisplay = null;
    return _this;
  }

  _createClass(ShowDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.initialDisplay = this.$htmlElement.style.display;
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
          self.$htmlElement.style.display = self.initialDisplay;
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

/***/ "./src/directive/view-options.js":
/*!***************************************!*\
  !*** ./src/directive/view-options.js ***!
  \***************************************/
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



var ViewOptionsDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-view-options'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(ViewOptionsDirective, _Directive);

  function ViewOptionsDirective() {
    var _this;

    _classCallCheck(this, ViewOptionsDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ViewOptionsDirective).call(this));
    _this.value = null;
    return _this;
  }

  _createClass(ViewOptionsDirective, [{
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

  return ViewOptionsDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/view.js":
/*!*******************************!*\
  !*** ./src/directive/view.js ***!
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



var ViewDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'sine',
  selector: 'n-view',
  inject: {
    $animate: '$animate'
  }
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(ViewDirective, _Directive);

  function ViewDirective() {
    var _this;

    _classCallCheck(this, ViewDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ViewDirective).call(this));
    _this.$priority = 5;
    _this.nameDir = null;
    _this.config = null;
    _this.currentView = null;
    _this.nextComponent = null;
    _this.enterAnimation = null;
    _this.leaveAnimation = null;
    return _this;
  }

  _createClass(ViewDirective, [{
    key: "onInsert",
    value: function onInsert() {
      this.init();
      this.render();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.render();
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.clear();
      this.nameDir = null;
      this.viewOptionsDir = null;
    }
  }, {
    key: "init",
    value: function init() {
      this.nameDir = this.$element.getDirective('n-name');
      this.viewOptionsDir = this.$element.getDirective('n-view-options');

      if (this.viewOptionsDir != null) {
        this.config = this.viewOptionsDir.value;
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.currentView != null) {
        this.currentView.$destroy();
      }

      this.config = null;
      this.enterAnimation && this.enterAnimation.destroy();
      this.leaveAnimation && this.leaveAnimation.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var component = this.$binding.compute();

      if (component == null) {
        return;
      }

      if (this.currentView != null) {
        this.leave();
      }

      this.nextComponent = component;
      this.enter();
    }
  }, {
    key: "enter",
    value: function enter() {
      var self = this;
      this.enterAnimation && this.enterAnimation.destroy();

      if (this.leaveAnimation != null) {
        this.leaveAnimation.animationEnd.on(function () {
          self.doEnter();
        });
      } else {
        self.doEnter();
      }
    }
  }, {
    key: "doEnter",
    value: function doEnter() {
      var self = this;
      this.currentView = this.$binding.scope.$createChildCmp(this.nextComponent);
      this.config && this.config.onInit(this.currentView);
      this.enterAnimation = this.$animate.enter(this.$element, function () {
        self.currentView.$mount(self.$htmlElement);
        self.enterAnimation = null;
      });

      if (this.nameDir != null) {
        this.nameDir.setCmp(this.currentView);
      }
    }
  }, {
    key: "leave",
    value: function leave() {
      var self = this;
      this.leaveAnimation = this.$animate.leave(this.$element, function () {
        self.currentView.$destroy();
        self.leaveAnimation = null;
      });
    }
  }]);

  return ViewDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: decorator, typeConst, injector, Injector, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, component, directive, filter, service, bootstrap, compile, compute, parse, parseExp, parseAssignment, forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, format, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, addClass, removeClass, httpGet, httpPost, Messenger, MessengerBus, isMessenger, Animation, ClassDirective, StyleDirective */
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

/* harmony import */ var _sample__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sample */ "./src/sample/index.js");
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

/***/ "./src/sample/app.html":
/*!*****************************!*\
  !*** ./src/sample/app.html ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *n-bind=\"text\"></div>");

/***/ }),

/***/ "./src/sample/app.js":
/*!***************************!*\
  !*** ./src/sample/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.html */ "./src/sample/app.html");
/* harmony import */ var _test_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.html */ "./src/sample/test.html");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SampleAppComponent = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_0__["component"])({
  namespace: 'sine',
  selector: 'sample-app',
  template: _app_html__WEBPACK_IMPORTED_MODULE_2__["default"]
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SampleAppComponent, _Component);

  function SampleAppComponent() {
    var _this;

    _classCallCheck(this, SampleAppComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SampleAppComponent).call(this));
    _this.text = _test_html__WEBPACK_IMPORTED_MODULE_3__["default"];
    return _this;
  }

  return SampleAppComponent;
}(_view__WEBPACK_IMPORTED_MODULE_1__["Component"])) || _class);

/***/ }),

/***/ "./src/sample/index.js":
/*!*****************************!*\
  !*** ./src/sample/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/sample/app.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/sample/test.html":
/*!******************************!*\
  !*** ./src/sample/test.html ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">title</h5>\r\n                <p class=\"card-text\">test</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">title</h5>\r\n                <p class=\"card-text\">test</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">title</h5>\r\n                <p class=\"card-text\">test</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

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
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, format, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, addClass, removeClass, httpGet, httpPost, Messenger, MessengerBus, isMessenger */
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
/*! exports provided: getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, addClass, removeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return getChildNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return clearChildNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return replaceNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return removeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return removeNodeBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return insertNodeAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utility/utils.js");


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

      _utility__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.$, prop, value, true);

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
    key: "$getTemplateById",
    value: function $getTemplateById(id) {
      var element = document.querySelector('#' + id);
      return element ? element.innerText : '';
    }
  }, {
    key: "$getTemplate",
    value: function $getTemplate() {
      var meta = this.$getMeta();

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isString"](meta.templateId)) {
        meta.template = this.$getTemplateById(meta.templateId);
      }

      return meta.template || '';
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
    value: function $render() {
      var fragment = null;

      if (this.$hasView()) {
        fragment = this.$showView();
      } else {
        fragment = Object(_parser__WEBPACK_IMPORTED_MODULE_2__["compile"])(this.$getTemplate(), this.$makeCompileOptions())(this);
      }

      return fragment;
    }
  }, {
    key: "$refresh",
    value: function $refresh() {
      this.$clearView();
      return this.$render();
    }
  }, {
    key: "$mount",
    value: function $mount(selectorOrElement, options) {
      var element;
      options = options || {};

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isString"](selectorOrElement)) {
        element = document.querySelector(selectorOrElement);
      } else {
        element = selectorOrElement;
      }

      if (!options.append) {
        _utility__WEBPACK_IMPORTED_MODULE_0__["clearChildNodes"](element);
      }

      element.appendChild(this.$render());
      this.$afterViewMount();
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
      var obj, prop, action;

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
      var obj, prop, action;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbmUvLi9zcmMvYW5pbWF0aW9uL2FuaW1hdGUtYmFzZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2FuaW1hdGlvbi9hbmltYXRlLWVudGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvYW5pbWF0aW9uL2FuaW1hdGUtbGVhdmUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9hbmltYXRpb24vYW5pbWF0ZS11dGlscy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2FuaW1hdGlvbi9hbmltYXRlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvYW5pbWF0aW9uL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2FuaW1hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2FuaW1hdGlvbi90ZXN0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvYW5pbWF0aW9uL3Rlc3QyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2NkYXRhc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvY29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZG9jdHlwZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL2ZyYWdtZW50LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9oYW5kbGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2NvcmUvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9jb3JlL3Byb3h5LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvY29yZS90ZXh0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RlY29yYXRvci9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGVjb3JhdG9yL3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvYmluZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9lbWJlZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9oaWRlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2lmLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL25hbWUuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvcmVwZWF0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9kaXNhYmxlZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9yZWFkb25seS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zZWxlY3RlZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy1ldmVuLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL2NsYXNzLW9kZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9zdHlsZS1ldmVuLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLW9kZC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9zdHlsZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC1kZWZhdWx0LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2gtd2hlbi5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvZGlyZWN0aXZlL3ZpZXctb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL2RpcmVjdGl2ZS92aWV3LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9wYXJzZXIvaHRtbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9odG1sLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9sZXhlci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9udWxsLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3BhcnNlci9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zYW1wbGUvYXBwLmh0bWwiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zYW1wbGUvYXBwLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvc2FtcGxlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvc2FtcGxlL3Rlc3QuaHRtbCIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3NlcnZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL21vZGVsLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy9zZXJ2aWNlL3RlbXBsYXRlLWNhY2hlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9odHRwLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdXRpbGl0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvbm9kZS5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3V0aWxpdHkvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vc2luZS8uL3NyYy92aWV3L2luZGV4LmpzIiwid2VicGFjazovL3NpbmUvLi9zcmMvdmlldy9pbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9zaW5lLy4vc3JjL3ZpZXcvc2VydmljZS5qcyJdLCJuYW1lcyI6WyJBbmltYXRlQmFzZSIsImVsZW1lbnQiLCJjb250ZXh0IiwidHlwZSIsImR1cmF0aW9uIiwiZW5kZWQiLCJkZXN0cm95ZWQiLCJhbmltYXRpb25FbmRpbmciLCJNZXNzZW5nZXIiLCJhbmltYXRpb25FbmQiLCJmaXJlIiwib25EZXN0cm95IiwiQW5pbWF0ZUVudGVyIiwiZW50ZXJDbGFzcyIsImVudGVyVG9DbGFzcyIsImVudGVyQWN0aXZlQ2xhc3MiLCJzZWxmIiwiZWwiLCJ1dGlscyIsIl9iZWZvcmVFbnRlckNiIiwiZXhwbGljaXRFbnRlckR1cmF0aW9uIiwiZW50ZXIiLCJjYiIsIl9lbnRlckNiIiwiYW5pbWF0ZVV0aWxzIiwiY2FuY2VsbGVkIiwiZW50ZXJDYW5jZWxsZWQiLCJhZnRlckVudGVyIiwiZW5kIiwiZW50ZXJUbyIsInNldFRpbWVvdXQiLCJBbmltYXRlTGVhdmUiLCJkb0xlYXZlIiwibGVhdmVDbGFzcyIsImxlYXZlVG9DbGFzcyIsImxlYXZlQWN0aXZlQ2xhc3MiLCJfYmVmb3JlTGVhdmVDYiIsImV4cGxpY2l0TGVhdmVEdXJhdGlvbiIsImxlYXZlIiwiX2xlYXZlQ2IiLCJsZWF2ZUNhbmNlbGxlZCIsImFmdGVyTGVhdmUiLCJsZWF2ZVRvIiwiVFJBTlNJVElPTiIsIkFOSU1BVElPTiIsInRyYW5zaXRpb25Qcm9wIiwidHJhbnNpdGlvbkVuZEV2ZW50IiwiYW5pbWF0aW9uUHJvcCIsImFuaW1hdGlvbkVuZEV2ZW50IiwidHJhbnNmb3JtUkUiLCJvbmNlIiwiZm4iLCJjYWxsZWQiLCJhcHBseSIsImFyZ3VtZW50cyIsIm5leHRGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFkZEFuaW1hdGlvbkNsYXNzIiwiY2xzIiwiYW5pbWF0aW9uQ2xhc3NlcyIsIl9hbmltYXRpb25DbGFzc2VzIiwiaW5kZXhPZiIsInB1c2giLCJyZW1vdmVBbmltYXRpb25DbGFzcyIsIndoZW5BbmltYXRpb25FbmRzIiwiZXhwZWN0ZWRUeXBlIiwicmVmIiwiZ2V0QW5pbWF0aW9uSW5mbyIsInRpbWVvdXQiLCJwcm9wQ291bnQiLCJldmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkVuZCIsImUiLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGVzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRyYW5zaXRpb25EZWxheXMiLCJzcGxpdCIsInRyYW5zaXRpb25EdXJhdGlvbnMiLCJ0cmFuc2l0aW9uVGltZW91dCIsImdldFRpbWVvdXQiLCJhbmltYXRpb25EZWxheXMiLCJhbmltYXRpb25EdXJhdGlvbnMiLCJhbmltYXRpb25UaW1lb3V0IiwibGVuZ3RoIiwiTWF0aCIsIm1heCIsImhhc1RyYW5zZm9ybSIsInRlc3QiLCJkZWxheXMiLCJkdXJhdGlvbnMiLCJjb25jYXQiLCJtYXAiLCJkIiwiaSIsInRvTXMiLCJzIiwiTnVtYmVyIiwic2xpY2UiLCJpc1ZhbGlkRHVyYXRpb24iLCJ2YWx1ZSIsImlzTmFOIiwicmFmIiwiYWN0aW9uIiwicmVmTnVtYmVyIiwiY2FuY2VsIiwiaXNDYW5jZWxlZCIsIm1haW4iLCJpc0luUGFnZSIsIm5vZGUiLCJkb2N1bWVudCIsImJvZHkiLCJjb250YWlucyIsIkFuaW1hdGVTZXJ2aWNlIiwic2VydmljZSIsIm5hbWVzcGFjZSIsInNlbGVjdG9yIiwiYWN0aXZlQW5pbWF0aW9uIiwiYW5pbWF0aW9uUXVldWUiLCJkZWxheWVkQW5pbWF0aW9uIiwiJCRtYWluIiwic2hpZnQiLCJhbmltYXRpb24iLCJleGVjdXRlIiwib24iLCJzb21lIiwiaXRlbSIsImlzTGl2ZSIsImFuaW1hdGVDaGlsZHJlbiIsInZub2RlIiwiZG9FbnRlciIsImFwcGVhciIsImh0bWxFbGVtZW50Iiwibm9kZVR5cGUiLCJyZXNvbHZlQW5pbWF0aW9uQ29udGV4dCIsImFuaW1hdGVBcHBlYXIiLCJkYXRhIiwicmVzb2x2ZUFuaW1hdGlvbiIsImRlbGF5RW50ZXIiLCJwZXJmb3JtRW50ZXIiLCJkaXNhYmxlQW5pbWF0ZSIsImJlZm9yZUVudGVyIiwiYW5pbWF0aW9uRGVzdHJveWVkIiwiZGVzdHJveSIsImRlbGF5TGVhdmUiLCJwZXJmb3JtTGVhdmUiLCJiZWZvcmVMZWF2ZSIsImNvbmZpZyIsInJlcyIsImNzcyIsImF1dG9Dc3NBbmltYXRpb24iLCJuYW1lIiwiYXBwZWFyQ2xhc3MiLCJhcHBlYXJUb0NsYXNzIiwiYXBwZWFyQWN0aXZlQ2xhc3MiLCJhbmltYXRpb25zIiwiZ2V0RGlyZWN0aXZlcyIsImZpbHRlciIsImRpciIsIlNlcnZpY2UiLCJBbmltYXRpb24iLCJkaXJlY3RpdmUiLCIkcHJpb3JpdHkiLCJEaXJlY3RpdmUiLCJUZXN0QW5pbWF0aW9uIiwiaGVpZ2h0IiwiJGh0bWxFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiVGVzdDJBbmltYXRpb24iLCJvcGFjaXR5IiwiVGVzdDNBbmltYXRpb24iLCJ0cmFuc2Zvcm0iLCJldmVudFRleHQiLCJkb21FdmVudHMiLCJBdHRyTm9kZSIsIlZOb2RlVHlwZSIsImF0dHJpYnV0ZSIsInF1b3RlIiwib3JpZ2luIiwiaXNFdmVudCIsImlzQmluZGluZyIsImlzRG9tRXZlbnQiLCJpc0RpcmVjdGl2ZSIsIm93bmVyRWxlbWVudCIsIm93bmVyQ29tcG9uZW50IiwiYmluZGluZyIsIkJpbmRpbmciLCJwcmlvcml0eSIsImtleSIsIm5vZGVWYWx1ZSIsImNvbXBpbGUiLCJvcHRpb25zIiwib2JzZXJ2ZSIsIm5vZGVOYW1lIiwic3RhcnRzV2l0aCIsInN1YnN0ciIsInNldE91dHB1dCIsImJpbmQiLCJjb250YWluc0RpcmVjdGl2ZSIsImNyZWF0ZURpcmVjdGl2ZSIsIiRiaW5kTm9kZSIsIiRvdXRwdXQiLCJFcnJvciIsIiRjb21waWxlIiwic2NvcGUiLCJzZXRTY29wZSIsImNvbXB1dGUiLCJsb2NhbHMiLCIkZXZlbnQiLCIkYXJncyIsIiRlbGVtZW50IiwiJGxpc3RlbiIsImFyZ3MiLCIkJGNoaWxkRGlyZWN0aXZlcyIsIiRzZXRCaW5kaW5nIiwiJGhhc0F0dHIiLCIkaW5pdEF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJ1cGRhdGUiLCJoYXNDaGFuZ2UiLCIkZGV0ZWN0IiwiZGV0ZWN0IiwiJHVwZGF0ZSIsIiRzZXRBdHRyIiwiJGluc2VydCIsIiQkbWV0YSIsImlzRnJvbURpcmVjdGl2ZSIsIiRkZXN0cm95IiwiJGRpc3Bvc2UiLCJkaXNwb3NlIiwiVk5vZGUiLCJ0ZXh0IiwiY2RhdGFTZWN0aW9uIiwiZW50aXR5UmVmZXJlbmNlIiwiZW50aXR5IiwicHJvY2Vzc2luZ0luc3RydWN0aW9uIiwiY29tbWVudCIsImRvY3VtZW50VHlwZSIsImRvY3VtZW50RnJhZ21lbnQiLCJub3RhdGlvbiIsImNvbm5lY3Rpb24iLCJjaGlsZE5vZGVzIiwicGFyZW50Tm9kZSIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsIm93bmVyRG9jdW1lbnQiLCJjaGlsZCIsImZvckVhY2giLCJpbmRleCIsIiRidWlsZFNpYmxpbmciLCJyZW1vdmVDaGlsZCIsIiRyZW1vdmUiLCIkY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwiY29tcGlsZU9wdGlvbnMiLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwic3BsaWNlIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJub3RpZnlDb21waWxlZCIsImxpbmsiLCJub3RpZnlMaW5rZWQiLCJFeHBOb2RlIiwib2xkVmFsdWUiLCJpc0V4cCIsInNlZ21lbnRzIiwicmlnaHRTdHIiLCJvdXRwdXQiLCJ1bndhdGNoZXMiLCJjaGFuZ2UiLCJleHAiLCJsZWZ0U3RyIiwicGF0dGVybiIsImxhc3RJbmRleCIsIm1hdGNoIiwiZXhlYyIsInN1YnN0cmluZyIsInNlZ21lbnQiLCJhc3NpZ25tZW50IiwicGFyc2VBc3NpZ25tZW50Iiwib2JqIiwicHJvcCIsIiQiLCIkd2F0Y2giLCJkZWZlciIsImNhbmNlbFRpbWVvdXQiLCJ0aW1lb3V0SWQiLCJjYWxsIiwiY2xlYXJUaW1lb3V0IiwibGlzdGVuIiwib2ZmIiwidW53YXRjaCIsIkNEYXRhU2VjdGlvbk5vZGUiLCJDb21tZW50Tm9kZSIsImNyZWF0ZUNvbW1lbnQiLCJDb25uZWN0aW9uTm9kZSIsImxpbmtlciIsIm9uSW5zZXJ0Iiwib25EZXRlY3QiLCJvbkhhc0NoYW5nZSIsIm9uVXBkYXRlIiwiRG9jdW1lbnRUeXBlTm9kZSIsIkRvY3VtZW50Tm9kZSIsIkVsZW1lbnROb2RlIiwiYXR0cmlidXRlcyIsImNvbXBvbmVudCIsInNlbGZDbG9zZWQiLCJpc0NvbXBvbmVudCIsImF0dHIiLCJtYXRjaGVzIiwiYmVsb25nVG8iLCJzZXRWYWx1ZSIsImF0dHJUcGwiLCJjaGlsZFRwbCIsImdldE91dGVyVHBsIiwidHBsIiwicGFyc2UiLCJjbGVhckNoaWxkTm9kZXMiLCJyZXN1bHQiLCJnZXREaXJlY3RpdmUiLCJjb250YWluc0NvbXBvbmVudCIsImNyZWF0ZUVsZW1lbnQiLCIkY3JlYXRlQ2hpbGRDbXAiLCIkaW5pdEF0dHJEb25lIiwiJG1vdW50IiwiaXNGcm9tQ29tcG9uZW50IiwicmVtb3ZlSHRtbEVsZW1lbnQiLCJEb2N1bWVudEZyYWdtZW50Tm9kZSIsInByb3BDaGFuZ2luZ01zZyIsInByb3BDaGFuZ2VkTXNnIiwidGFyZ2V0S2V5IiwiZ2V0VGFyZ2V0IiwiaXNPYmplY3QiLCJHZXRQcm9wZXJ0eUhhbmRsZXIiLCJkZWVwUHJveHkiLCJ2YXJpYWJsZXMiLCJmdWxsVGFyZ2V0S2V5IiwiZnVsbEtleSIsIlByb3h5IiwiZXhpc3RlZCIsIlNldFByb3BlcnR5SGFuZGxlciIsImlzQXJyYXkiLCJ2YWxpZGF0aW9uIiwidmFsaWQiLCJuZXdWYWx1ZSIsIkFjY2Vzc1Byb3BlcnR5SGFuZGxlciIsIlByb3BlcnR5T2JzZXJ2ZXIiLCJwbGFpbk1hcCIsIk1hcCIsInJlZ2V4TWFwIiwiaXNSZWdFeHAiLCJoYXMiLCJzZXQiLCJiZWZvcmVDaGFuZ2VkIiwiZ2V0IiwiYWN0aW9ucyIsImNsZWFyIiwiT2JqZWN0T2JzZXJ2ZXIiLCJvbmNoYW5naW5nIiwiZmlyZUNoYW5naW5nIiwib25jaGFuZ2VkIiwiZmlyZUNoYW5nZWQiLCJvZmZDaGFuZ2UiLCJvYmpNYXAiLCJNZW1iZXJXYXRjaGVyIiwib2JzZXJ2ZXIiLCJpZCIsImNoYW5nZUtleSIsIm5ld1RhcmdldCIsInN0b3AiLCJEZXRlY3RvciIsInF1ZXVlIiwiZGlnZXN0IiwiY2xlYXJEZWZlciIsImRldGVjdG9yIiwiRXhwV2F0Y2hlciIsInJlbW92ZSIsIldhdGNoZXIiLCJtZW1iZXJzIiwiZGlnZXN0cyIsImFzdCIsInBhcnNlRXhwIiwiaGFzQ0MiLCJkaXJ0eUNoZWNrIiwiY29sbGVjdE1lbWJlcnMiLCJ1cGRhdGVNZW1iZXIiLCJzdGFydERpZ2VzdCIsIm1lbWJlciIsInN0YXJ0TWVtYmVyIiwic3RhcnQiLCJtZW1iZXJXYXRjaGVyIiwiT2JzZXJ2ZXIiLCJ3YXRjaGVycyIsIndhdGNoZXIiLCJjcmVhdGVXYXRjaGVyIiwicmVtb3ZlV2F0Y2hlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwicHJvdG90eXBlIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIlRleHROb2RlIiwicmVuZGVyIiwiY3JlYXRlVGV4dE5vZGUiLCJtZXRhIiwiaW5qZWN0b3IiLCJyZWdpc3RlckNvbnN0cnVjdG9yIiwidHlwZUNvbnN0IiwiQmluZERpcmVjdGl2ZSIsImlubmVyVGV4dCIsIiRiaW5kaW5nIiwiRW1iZWREaXJlY3RpdmUiLCJlbWJlZFRwbCIsImdldEVtYmVkVHBsIiwic2V0SW5uZXJUcGwiLCJIaWRlRGlyZWN0aXZlIiwiaW5qZWN0IiwiJGFuaW1hdGUiLCJpbml0aWFsRGlzcGxheSIsImRpc3BsYXkiLCJ0b2dnbGUiLCJJZkRpcmVjdGl2ZSIsImh0bWxDb21tZW50IiwiTW9kZWxEaXJlY3RpdmUiLCIkdmlld1ZhbHVlIiwiJG1vZGVsVmFsdWUiLCIkcGFyc2VycyIsIiRmb3JtYXR0ZXJzIiwiJHZpZXdDaGFuZ2VMaXN0ZW5lcnMiLCIkdmFsaWRhdG9ycyIsIiRmZWVkYmFjayIsIiRwcmlzdGluZSIsIiRkaXJ0eSIsIiR2YWxpZCIsIiRpbnZhbGlkIiwic2V0Vmlld1ZhbHVlIiwiJGNvbXBvbmVudCIsInNldE1vZGVsVmFsdWUiLCJuZXd2YWx1ZSIsInZpZXdWYWx1ZSIsInZhbGlkYXRvciIsImZvcm1hdHRlciIsInVwZGF0ZUNzcyIsInVwZGF0ZVN0YXRlIiwic2V0RGlydHkiLCJsaXN0ZW5lciIsIm1vZGVsVmFsdWUiLCJwYXJzZXIiLCJhc3NpZ24iLCJlbGUiLCJjc3NDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImRpcnR5IiwicHJpc3RpbmUiLCJpbnZhbGlkIiwic3RhdGUiLCJmZWVkYmFjayIsIk5hbWVEaXJlY3RpdmUiLCIkc2NvcGUiLCJjbXAiLCJSZXBlYXREaXJlY3RpdmUiLCJpdGVtRXhwIiwiaXRlbXNFeHAiLCJpdGVtVGVtcGxhdGUiLCJkYXRhSXRlbXMiLCJjbXBJdGVtcyIsImhlYWRlciIsImZvb3RlciIsImFyZyIsIiRhdHRyIiwicmVtb3ZlQXR0cmlidXRlIiwiY3JlYXRlQ29ubmVjdGlvbiIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIml0ZW1zIiwiJGV2YWwiLCJzZXREYXRhSXRlbXMiLCJyZXBsYWNlQ2hpbGQiLCJjaGlsZFNjb3BlIiwiY21wSXRlbSIsImRhdGFJdGVtIiwiZmlsdGVycyIsIm5ld0NtcEl0ZW1zIiwiZ2V0Q21wSXRlbSIsIkNvbXBvbmVudCIsInRlbXBsYXRlIiwiJGluaGVyaXRDbXAiLCIkcmVuZGVyIiwicmVwZWF0SXRlbSIsIlNob3dEaXJlY3RpdmUiLCJDaGVja2VkRGlyZWN0aXZlIiwiU3RhdGVEaXJlY3RpdmUiLCJEaXNhYmxlZERpcmVjdGl2ZSIsIlJlYWRvbmx5RGlyZWN0aXZlIiwiU2VsZWN0ZWREaXJlY3RpdmUiLCJhdHRyTmFtZSIsInBlcmZvcm0iLCJoYXNBdHRyaWJ1dGUiLCJDbGFzc0V2ZW5EaXJlY3RpdmUiLCIkaW5kZXgiLCJDbGFzc0RpcmVjdGl2ZSIsIkNsYXNzT2RkRGlyZWN0aXZlIiwiaW5pdGlhbENsYXNzTGlzdCIsInBhcnNlQ2xhc3MiLCJzZXRDbGFzcyIsImFyciIsInVud2F0Y2hBcnJheSIsInRyaW0iLCJjbGFzc1RleHQiLCIkZ2V0QXR0clZhbHVlIiwidGV4dFRvQXJyYXkiLCJza2lwIiwibmV3QXJyIiwid2F0Y2hBcnJheSIsInNldENsYXNzTGlzdCIsIlN0eWxlRXZlbkRpcmVjdGl2ZSIsIlN0eWxlRGlyZWN0aXZlIiwiU3R5bGVPZGREaXJlY3RpdmUiLCJpbml0aWFsU3R5bGUiLCJwYXJzZVN0eWxlIiwic2V0U3R5bGUiLCJ1bndhdGNoT2JqIiwidGV4dFRvT2JqZWN0IiwibGlzdCIsInN1Ykl0ZW1zIiwibmV3U3R5bGUiLCJ3YXRjaE9iaiIsImFwcGx5U3R5bGUiLCJTd2l0Y2hEZWZhdWx0RGlyZWN0aXZlIiwiaXNNYXRjaCIsInN3aXRjaFdoZW5EaXJzIiwidkVsZSIsIndoZW5EaXIiLCJpbml0U3dpdGNoV2hlbkRpcnMiLCJpc01hdGNoQ2hhbmdlZCIsIlN3aXRjaFdoZW5EaXJlY3RpdmUiLCJzd2l0Y2hEaXIiLCJpbml0U3dpdGNoRGlyIiwidmFsdWVDaGFuZ2VkIiwiU3dpdGNoRGlyZWN0aXZlIiwiVmlld09wdGlvbnNEaXJlY3RpdmUiLCJ1cGRhdGVPcHRpb25zIiwiY2xlYXJPcHRpb25zIiwiVmlld0RpcmVjdGl2ZSIsIm5hbWVEaXIiLCJjdXJyZW50VmlldyIsIm5leHRDb21wb25lbnQiLCJlbnRlckFuaW1hdGlvbiIsImxlYXZlQW5pbWF0aW9uIiwiaW5pdCIsInZpZXdPcHRpb25zRGlyIiwib25Jbml0Iiwic2V0Q21wIiwiSHRtbExleGVyIiwiTGV4ZXIiLCJpc1ZhbGlkSWRlbnRpZmllclN0YXJ0IiwiY2giLCJpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlIiwiY3AiLCJpc051bWJlciIsImV4cGVjdFN0cmluZyIsInN0ciIsIm51bSIsInJlYWRDb21tZW50IiwiYmVnaW4iLCJzdHJpbmciLCJyYXdTdHJpbmciLCJjaGFyQXQiLCJ0b2tlbnMiLCJ0aHJvd0Vycm9yIiwicmVhZFRleHQiLCJjaDIiLCJwZWVrIiwiaXNJZGVudGlmaWVyU3RhcnQiLCJ0ZXh0VGFnIiwicmVhZFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwicmVhZElkZW50IiwicGVla011bHRpY2hhciIsInJlYWRTdHJpbmciLCJpc1doaXRlc3BhY2UiLCJlcXVhbCIsImxleCIsImFsbG93RG9jVHlwZSIsImNoMyIsIkh0bWxQYXJzZXIiLCJQYXJzZXIiLCJsZXhlciIsImZhcmdtZW50IiwidG9rZW4iLCJjdXJyZW50IiwiJHB1c2hDaGlsZCIsIm5leHQiLCJkb2NUeXBlIiwiaWRlbnRpZmllciIsImF0dHJzIiwicCIsIiRwdXNoQXR0cmlidXRlIiwiY2hpbGRFbGVtZW50cyIsImVsZXMiLCJjb25zdGFudCIsInBhcnNlT3B0aW9ucyIsImlzSWRlbnRpZmllckNvbnRpbnVlIiwibGl0ZXJhbHMiLCJ1bmRlZmluZWQiLCJodG1sIiwiZGVmYXVsdHMiLCJjcmVhdGVDb21wb25lbnQiLCJzZXR0aW5ncyIsImFzdE5vZGVzIiwiYXN0Tm9kZSIsIiQkY2hpbGRFbGVtZW50cyIsImNyZWF0ZUZpbHRlciIsInJlcGxhY2UiLCJtZW1iZXJFeHAiLCJnZXRNZW1iZXJFeHByZXNzaW9uIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm9wZXJ0eUtleSIsIk9QRVJBVE9SUyIsIm9wZXJhdG9yVGV4dCIsIkVTQ0FQRSIsIm9wZXJhdG9yIiwicmVhZE51bWJlciIsImlzIiwib3AxIiwib3AyIiwib3AzIiwiY2hhcnMiLCJjb2RlUG9pbnRBdCIsImNoYXJDb2RlQXQiLCJjcDEiLCJjcDIiLCJpc0V4cE9wZXJhdG9yIiwiZXJyb3IiLCJjb2xTdHIiLCJudW1iZXIiLCJwZWVrQ2giLCJlc2NhcGUiLCJoZXgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZUludCIsInJlcCIsIk51bGxPYmplY3QiLCJBU1QiLCJQcm9ncmFtIiwiRXhwcmVzc2lvblN0YXRlbWVudCIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uIiwiTG9naWNhbEV4cHJlc3Npb24iLCJCaW5hcnlFeHByZXNzaW9uIiwiVW5hcnlFeHByZXNzaW9uIiwiQ2FsbEV4cHJlc3Npb24iLCJNZW1iZXJFeHByZXNzaW9uIiwiSWRlbnRpZmllciIsIkxpdGVyYWwiLCJBcnJheUV4cHJlc3Npb24iLCJQcm9wZXJ0eSIsIk9iamVjdEV4cHJlc3Npb24iLCJBc3ROb2RlIiwiUHJvZ3JhbU5vZGUiLCJFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSIsIk1lbWJlckV4cHJlc3Npb25Ob2RlIiwiQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIiwibGVmdCIsInJpZ2h0IiwiYXNzaWdubWVudExlZnQiLCJDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlIiwiYWx0ZXJuYXRlIiwiY29uc2VxdWVudCIsIkxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJCaW5hcnlFeHByZXNzaW9uTm9kZSIsIlVuYXJ5RXhwcmVzc2lvbk5vZGUiLCJwcmVmaXgiLCJMaXRlcmFsTm9kZSIsInRvVGV4dCIsIkNhbGxFeHByZXNzaW9uTm9kZSIsImNhbGxlZSIsImFyZ1ZhbHVlcyIsImZpbHRlcklucyIsImlzRmlsdGVyIiwiJGV4ZWN1dGUiLCJjb21wdXRlZCIsImFsbG93TnVsbCIsIklkZW50aWZpZXJOb2RlIiwib2JqTm9kZSIsIkFycmF5RXhwcmVzc2lvbk5vZGUiLCJQcm9wZXJ0eU5vZGUiLCJraW5kIiwiT2JqZWN0RXhwcmVzc2lvbk5vZGUiLCJwcm9wZXJ0aWVzIiwiZGVmIiwiaXNBc3NpZ25hYmxlIiwibXNnIiwicHJvZ3JhbSIsImV4cHJlc3Npb25TdGF0ZW1lbnQiLCJleHBlY3QiLCJmaWx0ZXJDaGFpbiIsImV4cHJlc3Npb24iLCJ0ZXJuYXJ5IiwibG9naWNhbE9SIiwiY29uc3VtZSIsImxvZ2ljYWxBTkQiLCJlcXVhbGl0eSIsInJlbGF0aW9uYWwiLCJhZGRpdGl2ZSIsIm11bHRpcGxpY2F0aXZlIiwidW5hcnkiLCJwcmltYXJ5IiwiYXJyYXlEZWNsYXJhdGlvbiIsImhhc093blByb3BlcnR5IiwicGVla0FoZWFkIiwicGFyc2VBcmd1bWVudHMiLCJiYXNlRXhwcmVzc2lvbiIsImlkZW50aWZpZXJzIiwiZW50aXJlTmFtZSIsImpvaW4iLCJwZWVrVG9rZW4iLCJlMSIsImUyIiwiZTMiLCJlNCIsInQiLCJTYW1wbGVBcHBDb21wb25lbnQiLCJNb2RlbE9wdGlvbnNTZXJ2aWNlIiwiVGVtcGxhdGVDYWNoZVNlcnZpY2UiLCJ0cGxDYWNoZSIsInByb21pc2VDYWNoZSIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwiaHR0cEdldCIsInRoZW4iLCJyZWFkeVN0YXRlRW51bSIsIm9wZW5lZCIsInNlbnQiLCJyZWNlaXZlZCIsImZpbmlzaCIsImNyZWF0ZVhIUiIsIlhNTEh0dHBSZXF1ZXN0IiwiY3JlYXRlUHJvbWlzZSIsInJlamVjdCIsImFkZFVybFBhcmFtIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicGFyc2VIZWFkZXJzIiwiaGVhZGVycyIsInBhcnNlZCIsInZhbCIsImxpbmUiLCJ0b0xvd2VyQ2FzZSIsImlnbm9yZUR1cGxpY2F0ZU9mIiwiYnVpbGRVcmwiLCJtZXRob2QiLCJyZXF1ZXN0IiwieGhyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVVJMIiwicmVzcG9uc2VIZWFkZXJzIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwicmVzcG9uc2VEYXRhIiwicmVzcG9uc2VUeXBlIiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2UiLCJzdGF0dXNUZXh0Iiwib3BlbiIsInNlbmQiLCJodHRwUG9zdCIsImhhbmRsZXJzIiwicmV0dXJuVmFsdWUiLCJNZXNzZW5nZXJCdXMiLCJtZXNzZW5nZXJzIiwiaXNNZXNzZW5nZXIiLCJnZXRDaGlsZE5vZGVzIiwiQXJyYXkiLCJyZXBsYWNlTm9kZSIsInJlZk5vZGUiLCJuZXdOb2RlIiwicmVtb3ZlTm9kZSIsInJlbW92ZU5vZGVCZXR3ZWVuIiwiYmVnaW5Ob2RlIiwiZW5kTm9kZSIsImluc2VydE5vZGVBZnRlciIsImFkZENsYXNzIiwiYyIsImN1ciIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUNsYXNzIiwidGFyIiwiZGVidWdNb2RlIiwidG9TdHJpbmciLCJnZXRQcm90b3R5cGVPZiIsImlnbm9yZU93biIsImNvcHkiLCJkZWVwIiwib2JqSW5kZXgiLCJpc0Jvb2xlYW4iLCJuZXdPYmoiLCJleHRlbmQiLCJkZWVwTWVyZ2UiLCJwbGFpbk1lcmdlIiwibWVyZ2UiLCJzb3VyY2UiLCJvIiwiRiIsImluaGVyaXRQcm90b3R5cGUiLCJzdWJUeXBlIiwic3VwZXJUeXBlIiwiY29uc3RydWN0b3IiLCJpbmhlcml0IiwibG93ZXJjYXNlIiwiaXNTdHJpbmciLCJ1cHBlcmNhc2UiLCJ0b1VwcGVyQ2FzZSIsImlzVW5kZWZpbmVkIiwiaXNEZWZpbmVkIiwiaXNNYXAiLCJpc0JsYW5rT2JqZWN0IiwiaXNEYXRlIiwiaXNGdW5jdGlvbiIsImlzRm9ybURhdGEiLCJGb3JtRGF0YSIsImlzU2FtZSIsIm9iajEiLCJvYmoyIiwic2FtZSIsImRlYnVnIiwibG9nIiwiY29uc29sZSIsImNvbnRhaW5zU3RyIiwiaWdub3JlQ2FzZSIsImhhc1Byb3BlcnR5Iiwia2V5MiIsImhhc1Byb3AiLCJrZXlzIiwidmFsdWUzIiwia2V5MyIsImdldFByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJvcmRlckJ5IiwiZ2V0dGVyIiwiZ2V0VmFsdWUiLCJzb3J0IiwiYSIsImIiLCJvcmRlckJ5RGVzY2VuZGluZyIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJmb3JtYXQiLCJtYXRjaFRleHQiLCJwbGFjZUhvZGVyIiwiY29uc3RydWN0IiwiYmVmb3JlQXR0ckNoYW5nZSIsImFmdGVyQXR0ckNoYW5nZSIsImJlZm9yZVZpZXdJbml0IiwiYWZ0ZXJWaWV3TW91bnQiLCIkJGVsZW1lbnQiLCJtZXNzZW5nZXIiLCJxdWVyeVNlbGVjdG9yIiwiJGdldE1ldGEiLCJ0ZW1wbGF0ZUlkIiwiJGdldFRlbXBsYXRlQnlJZCIsInVzaW5nIiwiY2xhc3NOYW1lIiwicG9wIiwic3BhY2VOYW1lIiwiZ2V0SW5uZXJUcGwiLCIkdXNpbmciLCJnZXRIdG1sRWxlbWVudCIsIiRoYXNWaWV3IiwiJHNob3dWaWV3IiwiJGdldFRlbXBsYXRlIiwiJG1ha2VDb21waWxlT3B0aW9ucyIsIiRjbGVhclZpZXciLCJzZWxlY3Rvck9yRWxlbWVudCIsImFwcGVuZCIsIiRhZnRlclZpZXdNb3VudCIsIiQkcGFyZW50Q29tcG9uZW50IiwiJHJlbW92ZUNoaWxkQ21wIiwiJCRkZXRlY3RUaW1lb3V0IiwiJCRvYnNlcnZlciIsInZhbGlkYXRlIiwid2F0Y2giLCJjaGlsZENtcCIsIiQkY2hpbGRDb21wb25lbnRzIiwicGFyZW50Q21wIiwic2V0UHJvdG90eXBlT2YiLCIkaG9va3MiLCJoYW5kbGVyIiwiaG9vayIsIiQkZGlzcG9zZXJzIiwiJHZhbGlkYXRlIiwiZGVzdHJveUZyb21FbGVtZW50IiwiJHVubW91bnQiLCJkaXNwb3NlciIsIiRzZXRNZXRhIiwiaW5qZWN0U2VydmljZXMiLCJvbkNvbXBpbGUiLCJvbkVudGVyIiwib25MZWF2ZSIsIiRyZXF1ZXN0QW5pbWF0aW9uIiwiY2xpZW50V2lkdGgiLCJxdWVyeSIsIiQkY2FuY2VsQW5pbWF0aW9uVG9rZW4iLCIkaXNMb2FkZWQiLCIkZWxlbWVudGxvYWRlZCIsImF0dHJOb2RlIiwiZGVzdHJveUZyb21BdHRyIiwiJGNhbmNlbEFuaW1hdGlvbiIsIkZpbHRlciIsIm9uRXhlY3V0ZSIsIm5zIiwibWV0aG9kcyIsImJ1aWxkQ29uc3RydWN0b3IiLCJjb250cmFjdFR5cGUiLCJzdXBlckNsYXNzIiwibWFrZUNvbnN0cnVjdG9yIiwiaXNTZXJ2aWNlIiwiYm9vdHN0cmFwIiwiaW5uZXJIVE1MIiwiZiIsIm5hbWVQYXR0ZXJuIiwiSW5qZWN0b3IiLCJjb250YWluZXIiLCJ3YWl0aW5nVG9FeHRlbmRzIiwiaW5zQ29udGFpbmVyIiwibWFwcGluZyIsImdldE1hcHBpbmciLCJyZWdpc3RlciIsImNvbnN0cnVjdG9ycyIsIm5hbWVzcGFjZXMiLCJpbnN0YW5jZSIsImNyZWF0ZVNlcnZpY2UiLCJnZXRDb21wb25lbnQiLCJnZXRGaWx0ZXIiLCJzZXJ2aWNlcyIsImdldEluc3RhbmNlcyIsImdldFNlcnZpY2UiLCJub25TaGFyZWQiLCJjb25zdHJ1Y3Rvck5hbWUiLCJjaGVja1NlbGVjdG9yIiwiZ2V0V2FpdGluZ1RvRXh0ZW5kcyIsIm9uQ29uc3RydWN0IiwiRnVuY3Rpb24iLCJzdXBlck9uZSIsInJlbWFpbkNvbnN0cnVjdG9yIiwic3VwZXJOYW1lIiwiY2FsbGJhY2siLCJleHRlbmRNZXRhIiwic3VwZXJNZXRhIiwid2FpdGluZ1RvRXh0ZW5kczIiLCJmdWxsU2VsZWN0b3IiLCJzZXRXYWl0aW5nVG9FeHRlbmRzIiwibG9jYWwiLCJwcml2YXRlS2V5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJB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QUFlMlIsSUFBZixDQUFvQixJQUFwQjtBQUNIO0FBQ0o7QUE1Qkw7QUFBQTtBQUFBLGdDQUt1QjtBQUNmc0gsd0RBQVEsQ0FBQ21mLGNBQVQsQ0FBd0IsSUFBeEI7QUFDSDtBQVBMOztBQUFBO0FBQUEsSSIsImZpbGUiOiJzaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic2luZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzaW5lXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IE1lc3NlbmdlciwgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSAnJztcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmRpbmcgPSBuZXcgTWVzc2VuZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmQgPSBuZXcgTWVzc2VuZ2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5kKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25FbmRpbmcuZmlyZShudWxsLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25FbmQuZmlyZShudWxsLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNMaXZlKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5kZXN0cm95ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25FbmRpbmcgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkVuZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XHJcbmltcG9ydCAqIGFzIGFuaW1hdGVVdGlscyAgZnJvbSAnLi9hbmltYXRlLXV0aWxzJztcclxuaW1wb3J0IHsgQW5pbWF0ZUJhc2UgfSBmcm9tICcuL2FuaW1hdGUtYmFzZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZUVudGVyIGV4dGVuZHMgQW5pbWF0ZUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGVsZW1lbnQsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuZW50ZXJDbGFzcyA9ICcnO1xyXG4gICAgICAgIHRoaXMuZW50ZXJUb0NsYXNzID0gJyc7XHJcbiAgICAgICAgdGhpcy5lbnRlckFjdGl2ZUNsYXNzID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZSgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGVsID0gc2VsZi5lbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBhbmltYXRpb24gaXMgY2FuY2VsbGVkXHJcbiAgICAgICAgaWYgKGVsID09IG51bGwgfHwgc2VsZi5kZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5fYmVmb3JlRW50ZXJDYikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JlZm9yZUVudGVyQ2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBleHBsaWNpdEVudGVyRHVyYXRpb24gPSB1dGlscy50b051bWJlcihcclxuICAgICAgICAgICAgdXRpbHMuaXNPYmplY3Qoc2VsZi5kdXJhdGlvbilcclxuICAgICAgICAgICAgICAgID8gc2VsZi5kdXJhdGlvbi5lbnRlclxyXG4gICAgICAgICAgICAgICAgOiBzZWxmLmR1cmF0aW9uXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdmFyIGNiID0gZWwuX2VudGVyQ2IgPSBhbmltYXRlVXRpbHMub25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGVsLl9lbnRlckNiID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLmRlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZVV0aWxzLnJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBzZWxmLmVudGVyVG9DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlVXRpbHMucmVtb3ZlQW5pbWF0aW9uQ2xhc3MoZWwsIHNlbGYuZW50ZXJBY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2IuY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVV0aWxzLnJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBzZWxmLmVudGVyQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5lbnRlckNhbmNlbGxlZCAmJiBzZWxmLmNvbnRleHQuZW50ZXJDYW5jZWxsZWQoZWwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuYWZ0ZXJFbnRlciAmJiBzZWxmLmNvbnRleHQuYWZ0ZXJFbnRlcihlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5lbmQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmVmb3JlRW50ZXJDYiA9IG51bGw7XHJcbiAgICAgICAgLy8gc3RhcnQgZW50ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgYW5pbWF0ZVV0aWxzLmFkZEFuaW1hdGlvbkNsYXNzKGVsLCBzZWxmLmVudGVyQWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgIHNlbGYuY29udGV4dC5lbnRlciAmJiBzZWxmLmNvbnRleHQuZW50ZXIoZWwsIGNiKTtcclxuXHJcbiAgICAgICAgYW5pbWF0ZVV0aWxzLm5leHRGcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZi5kZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGVVdGlscy5yZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgc2VsZi5lbnRlckNsYXNzKTtcclxuICAgICAgICAgICAgICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVV0aWxzLmFkZEFuaW1hdGlvbkNsYXNzKGVsLCBzZWxmLmVudGVyVG9DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmVudGVyVG8gJiYgc2VsZi5jb250ZXh0LmVudGVyVG8oZWwsIGNiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0ZVV0aWxzLmlzVmFsaWREdXJhdGlvbihleHBsaWNpdEVudGVyRHVyYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2IsIGV4cGxpY2l0RW50ZXJEdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVV0aWxzLndoZW5BbmltYXRpb25FbmRzKGVsLCBzZWxmLnR5cGUsIGNiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmVuZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5lbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuX2JlZm9yZUVudGVyQ2IpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JlZm9yZUVudGVyQ2IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuZWxlbWVudC5fZW50ZXJDYikpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Ll9lbnRlckNiLmNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5fZW50ZXJDYigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xyXG5pbXBvcnQgKiBhcyBhbmltYXRlVXRpbHMgIGZyb20gJy4vYW5pbWF0ZS11dGlscyc7XHJcbmltcG9ydCB7IEFuaW1hdGVCYXNlIH0gZnJvbSAnLi9hbmltYXRlLWJhc2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVMZWF2ZSBleHRlbmRzIEFuaW1hdGVCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihlbGVtZW50LCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLmRvTGVhdmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGVhdmVDbGFzcyA9ICcnO1xyXG4gICAgICAgIHRoaXMubGVhdmVUb0NsYXNzID0gJyc7XHJcbiAgICAgICAgdGhpcy5sZWF2ZUFjdGl2ZUNsYXNzID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZSgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGVsID0gc2VsZi5lbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBhbmltYXRpb24gaXMgY2FuY2VsbGVkXHJcbiAgICAgICAgaWYgKGVsID09IG51bGwgfHwgc2VsZi5kZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5fYmVmb3JlTGVhdmVDYikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JlZm9yZUxlYXZlQ2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBleHBsaWNpdExlYXZlRHVyYXRpb24gPSB1dGlscy50b051bWJlcihcclxuICAgICAgICAgICAgdXRpbHMuaXNPYmplY3Qoc2VsZi5kdXJhdGlvbilcclxuICAgICAgICAgICAgICAgID8gc2VsZi5kdXJhdGlvbi5sZWF2ZVxyXG4gICAgICAgICAgICAgICAgOiBzZWxmLmR1cmF0aW9uXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdmFyIGNiID0gZWwuX2xlYXZlQ2IgPSBhbmltYXRlVXRpbHMub25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGVsLl9sZWF2ZUNiID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLmRlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZVV0aWxzLnJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBzZWxmLmxlYXZlVG9DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlVXRpbHMucmVtb3ZlQW5pbWF0aW9uQ2xhc3MoZWwsIHNlbGYubGVhdmVBY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2IuY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVV0aWxzLnJlbW92ZUFuaW1hdGlvbkNsYXNzKGVsLCBzZWxmLmxlYXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5sZWF2ZUNhbmNlbGxlZCAmJiBzZWxmLmNvbnRleHQubGVhdmVDYW5jZWxsZWQoZWwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRvTGVhdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuYWZ0ZXJMZWF2ZSAmJiBzZWxmLmNvbnRleHQuYWZ0ZXJMZWF2ZShlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5lbmQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhlIGRlbGF5ZWQgbGVhdmUgbWF5IGhhdmUgYWxyZWFkeSBiZWVuIGNhbmNlbGxlZFxyXG4gICAgICAgIGlmIChjYi5jYW5jZWxsZWQgfHwgc2VsZi5kZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5fYmVmb3JlTGVhdmVDYikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JlZm9yZUxlYXZlQ2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2JlZm9yZUxlYXZlQ2IgPSBudWxsO1xyXG4gICAgICAgIGFuaW1hdGVVdGlscy5hZGRBbmltYXRpb25DbGFzcyhlbCwgc2VsZi5sZWF2ZUFjdGl2ZUNsYXNzKTtcclxuICAgICAgICBzZWxmLmNvbnRleHQubGVhdmUgJiYgc2VsZi5jb250ZXh0LmxlYXZlKGVsLCBjYik7XHJcblxyXG4gICAgICAgIGFuaW1hdGVVdGlscy5uZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlVXRpbHMucmVtb3ZlQW5pbWF0aW9uQ2xhc3MoZWwsIHNlbGYubGVhdmVDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNiLmNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVVdGlscy5hZGRBbmltYXRpb25DbGFzcyhlbCwgc2VsZi5sZWF2ZVRvQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5sZWF2ZVRvICYmIHNlbGYuY29udGV4dC5sZWF2ZVRvKGVsLCBjYik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGVVdGlscy5pc1ZhbGlkRHVyYXRpb24oZXhwbGljaXRMZWF2ZUR1cmF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNiLCBleHBsaWNpdExlYXZlRHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVVdGlscy53aGVuQW5pbWF0aW9uRW5kcyhlbCwgc2VsZi50eXBlLCBjYik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbmQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5kb0xlYXZlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5fYmVmb3JlTGVhdmVDYikpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmVmb3JlTGVhdmVDYigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5lbGVtZW50Ll9sZWF2ZUNiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuX2xlYXZlQ2IuY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Ll9sZWF2ZUNiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XHJcblxyXG52YXIgVFJBTlNJVElPTiA9ICd0cmFuc2l0aW9uJztcclxudmFyIEFOSU1BVElPTiA9ICdhbmltYXRpb24nO1xyXG52YXIgdHJhbnNpdGlvblByb3AgPSAndHJhbnNpdGlvbic7XHJcbnZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSAndHJhbnNpdGlvbmVuZCc7XHJcbnZhciBhbmltYXRpb25Qcm9wID0gJ2FuaW1hdGlvbic7XHJcbnZhciBhbmltYXRpb25FbmRFdmVudCA9ICdhbmltYXRpb25lbmQnO1xyXG52YXIgdHJhbnNmb3JtUkUgPSAvXFxiKHRyYW5zZm9ybXxhbGwpKCx8JCkvO1xyXG5cclxuZnVuY3Rpb24gb25jZShmbikge1xyXG4gICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIWNhbGxlZCkge1xyXG4gICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRGcmFtZShmbikge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm4pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEFuaW1hdGlvbkNsYXNzKGVsLCBjbHMpIHtcclxuICAgIHZhciBhbmltYXRpb25DbGFzc2VzID0gZWwuX2FuaW1hdGlvbkNsYXNzZXMgfHwgKGVsLl9hbmltYXRpb25DbGFzc2VzID0gW10pO1xyXG4gICAgaWYgKGFuaW1hdGlvbkNsYXNzZXMuaW5kZXhPZihjbHMpIDwgMCkge1xyXG4gICAgICAgIGFuaW1hdGlvbkNsYXNzZXMucHVzaChjbHMpO1xyXG4gICAgICAgIHV0aWxzLmFkZENsYXNzKGVsLCBjbHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgY2xzKSB7XHJcbiAgICBpZiAoZWwuX2FuaW1hdGlvbkNsYXNzZXMpIHtcclxuICAgICAgICB1dGlscy5yZW1vdmUoZWwuX2FuaW1hdGlvbkNsYXNzZXMsIGNscyk7XHJcbiAgICB9XHJcbiAgICB1dGlscy5yZW1vdmVDbGFzcyhlbCwgY2xzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2hlbkFuaW1hdGlvbkVuZHMoZWwsXHJcbiAgICBleHBlY3RlZFR5cGUsXHJcbiAgICBjYikge1xyXG4gICAgdmFyIHJlZiA9IGdldEFuaW1hdGlvbkluZm8oZWwsIGV4cGVjdGVkVHlwZSk7XHJcbiAgICB2YXIgdHlwZSA9IHJlZi50eXBlO1xyXG4gICAgdmFyIHRpbWVvdXQgPSByZWYudGltZW91dDtcclxuICAgIHZhciBwcm9wQ291bnQgPSByZWYucHJvcENvdW50O1xyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNiKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgZXZlbnQgPSB0eXBlID09PSBUUkFOU0lUSU9OID8gdHJhbnNpdGlvbkVuZEV2ZW50IDogYW5pbWF0aW9uRW5kRXZlbnQ7XHJcbiAgICB2YXIgZW5kZWQgPSAwO1xyXG4gICAgdmFyIGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbkVuZCk7XHJcbiAgICAgICAgY2IoKTtcclxuICAgIH07XHJcbiAgICB2YXIgb25FbmQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZWwpIHtcclxuICAgICAgICAgICAgaWYgKCsrZW5kZWQgPj0gcHJvcENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBlbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoZW5kZWQgPCBwcm9wQ291bnQpIHtcclxuICAgICAgICAgICAgZW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgdGltZW91dCArIDEpO1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBbmltYXRpb25JbmZvKGVsLCBleHBlY3RlZFR5cGUpIHtcclxuICAgIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XHJcbiAgICB2YXIgdHJhbnNpdGlvbkRlbGF5cyA9IHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEZWxheSddLnNwbGl0KCcsICcpO1xyXG4gICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbnMgPSBzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRHVyYXRpb24nXS5zcGxpdCgnLCAnKTtcclxuICAgIHZhciB0cmFuc2l0aW9uVGltZW91dCA9IGdldFRpbWVvdXQodHJhbnNpdGlvbkRlbGF5cywgdHJhbnNpdGlvbkR1cmF0aW9ucyk7XHJcbiAgICB2YXIgYW5pbWF0aW9uRGVsYXlzID0gc3R5bGVzW2FuaW1hdGlvblByb3AgKyAnRGVsYXknXS5zcGxpdCgnLCAnKTtcclxuICAgIHZhciBhbmltYXRpb25EdXJhdGlvbnMgPSBzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEdXJhdGlvbiddLnNwbGl0KCcsICcpO1xyXG4gICAgdmFyIGFuaW1hdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KGFuaW1hdGlvbkRlbGF5cywgYW5pbWF0aW9uRHVyYXRpb25zKTtcclxuXHJcbiAgICB2YXIgdHlwZTtcclxuICAgIHZhciB0aW1lb3V0ID0gMDtcclxuICAgIHZhciBwcm9wQ291bnQgPSAwO1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICBpZiAoZXhwZWN0ZWRUeXBlID09PSBUUkFOU0lUSU9OKSB7XHJcbiAgICAgICAgaWYgKHRyYW5zaXRpb25UaW1lb3V0ID4gMCkge1xyXG4gICAgICAgICAgICB0eXBlID0gVFJBTlNJVElPTjtcclxuICAgICAgICAgICAgdGltZW91dCA9IHRyYW5zaXRpb25UaW1lb3V0O1xyXG4gICAgICAgICAgICBwcm9wQ291bnQgPSB0cmFuc2l0aW9uRHVyYXRpb25zLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gQU5JTUFUSU9OKSB7XHJcbiAgICAgICAgaWYgKGFuaW1hdGlvblRpbWVvdXQgPiAwKSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBBTklNQVRJT047XHJcbiAgICAgICAgICAgIHRpbWVvdXQgPSBhbmltYXRpb25UaW1lb3V0O1xyXG4gICAgICAgICAgICBwcm9wQ291bnQgPSBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGltZW91dCA9IE1hdGgubWF4KHRyYW5zaXRpb25UaW1lb3V0LCBhbmltYXRpb25UaW1lb3V0KTtcclxuICAgICAgICB0eXBlID0gdGltZW91dCA+IDBcclxuICAgICAgICAgICAgPyB0cmFuc2l0aW9uVGltZW91dCA+IGFuaW1hdGlvblRpbWVvdXRcclxuICAgICAgICAgICAgPyBUUkFOU0lUSU9OXHJcbiAgICAgICAgICAgIDogQU5JTUFUSU9OXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICBwcm9wQ291bnQgPSB0eXBlXHJcbiAgICAgICAgICAgID8gdHlwZSA9PT0gVFJBTlNJVElPTlxyXG4gICAgICAgICAgICA/IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoXHJcbiAgICAgICAgICAgIDogYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aFxyXG4gICAgICAgICAgICA6IDA7XHJcbiAgICB9XHJcbiAgICB2YXIgaGFzVHJhbnNmb3JtID1cclxuICAgICAgICB0eXBlID09PSBUUkFOU0lUSU9OICYmXHJcbiAgICAgICAgdHJhbnNmb3JtUkUudGVzdChzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnUHJvcGVydHknXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgdGltZW91dDogdGltZW91dCxcclxuICAgICAgICBwcm9wQ291bnQ6IHByb3BDb3VudCxcclxuICAgICAgICBoYXNUcmFuc2Zvcm06IGhhc1RyYW5zZm9ybVxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGltZW91dChkZWxheXMsIGR1cmF0aW9ucykge1xyXG4gICAgd2hpbGUgKGRlbGF5cy5sZW5ndGggPCBkdXJhdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgZGVsYXlzID0gZGVsYXlzLmNvbmNhdChkZWxheXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBkdXJhdGlvbnMubWFwKGZ1bmN0aW9uIChkLCBpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvTXMoZCkgKyB0b01zKGRlbGF5c1tpXSk7XHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvTXMocykge1xyXG4gICAgcmV0dXJuIE51bWJlcihzLnNsaWNlKDAsIC0xKSkgKiAxMDAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkRHVyYXRpb24odmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhZihhY3Rpb24sIHJlZk51bWJlcikge1xyXG4gICAgdmFyIGNhbmNlbGxlZCA9IGZhbHNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNhbmNlbCgpIHtcclxuICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzQ2FuY2VsZWQoKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKHJlZk51bWJlcikpIHtcclxuICAgICAgICAgICAgaWYgKHJlZk51bWJlciA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlZk51bWJlci0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNhbmNlbGxlZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYWluKCkge1xyXG4gICAgICAgIGlmIChpc0NhbmNlbGVkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhY3Rpb24oY2FuY2VsKTtcclxuICAgICAgICBuZXh0RnJhbWUobWFpbik7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dEZyYW1lKG1haW4pO1xyXG5cclxuICAgIHJldHVybiBjYW5jZWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzSW5QYWdlKG5vZGUpIHtcclxuICAgIHJldHVybiAobm9kZSA9PT0gZG9jdW1lbnQuYm9keSkgPyBmYWxzZSA6IGRvY3VtZW50LmJvZHkuY29udGFpbnMobm9kZSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBvbmNlLFxyXG4gICAgbmV4dEZyYW1lLFxyXG4gICAgYWRkQW5pbWF0aW9uQ2xhc3MsXHJcbiAgICByZW1vdmVBbmltYXRpb25DbGFzcyxcclxuICAgIHdoZW5BbmltYXRpb25FbmRzLFxyXG4gICAgZ2V0QW5pbWF0aW9uSW5mbyxcclxuICAgIGdldFRpbWVvdXQsXHJcbiAgICB0b01zLFxyXG4gICAgaXNWYWxpZER1cmF0aW9uLFxyXG4gICAgcmFmLFxyXG4gICAgaXNJblBhZ2VcclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBBbmltYXRlRW50ZXIgfSBmcm9tICcuL2FuaW1hdGUtZW50ZXInO1xyXG5pbXBvcnQgeyBBbmltYXRlTGVhdmUgfSBmcm9tICcuL2FuaW1hdGUtbGVhdmUnO1xyXG5pbXBvcnQgKiBhcyBhbmltYXRlVXRpbHMgIGZyb20gJy4vYW5pbWF0ZS11dGlscyc7XHJcblxyXG5Ac2VydmljZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnJGFuaW1hdGUnXHJcbn0pXHJcbmNsYXNzIEFuaW1hdGVTZXJ2aWNlIGV4dGVuZHMgU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQW5pbWF0aW9uID0gW107XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25RdWV1ZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGVsYXllZEFuaW1hdGlvbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuJCRtYWluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJCRtYWluKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgYW5pbWF0ZVV0aWxzLnJhZihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdoaWxlKHNlbGYuZGVsYXllZEFuaW1hdGlvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmFuaW1hdGlvblF1ZXVlLnB1c2goc2VsZi5kZWxheWVkQW5pbWF0aW9uLnNoaWZ0KCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAoc2VsZi5hbmltYXRpb25RdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gc2VsZi5hbmltYXRpb25RdWV1ZS5zaGlmdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb24uZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGVVdGlscy5pc0luUGFnZShhbmltYXRpb24uZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FuY2VsbGVkID0gYW5pbWF0aW9uLmV4ZWN1dGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjdGl2ZUFuaW1hdGlvbi5wdXNoKGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5hbmltYXRpb25FbmRpbmcub24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVtb3ZlKHNlbGYuYWN0aXZlQW5pbWF0aW9uLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kZWxheWVkQW5pbWF0aW9uLnB1c2goYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJ5IGRlZmF1bHQsIGFuaW1hdGlvbiBpcyBkaXNhYmxlIHdoaWxlIHRoZXJlIGlzIHBhcmVudCBlbGVtZW50IGFuaW1hdGluZ1xyXG4gICAgZGlzYWJsZUFuaW1hdGUoZWwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbmltYXRpb25RdWV1ZS5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5pc0xpdmUoKSAmJiBpdGVtLmVsZW1lbnQuY29udGFpbnMoZWwpICYmICFpdGVtLmNvbnRleHQuYW5pbWF0ZUNoaWxkcmVuO1xyXG4gICAgICAgICAgICB9KSB8fCB0aGlzLmFjdGl2ZUFuaW1hdGlvbi5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5pc0xpdmUoKSAmJiBpdGVtLmVsZW1lbnQuY29udGFpbnMoZWwpICYmICFpdGVtLmNvbnRleHQuYW5pbWF0ZUNoaWxkcmVuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcih2bm9kZSwgZG9FbnRlciwgYXBwZWFyKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBlbCA9IHZub2RlLmh0bWxFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBjYWxsIGxlYXZlIGNhbGxiYWNrIG5vd1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGVsLl9sZWF2ZUNiKSkge1xyXG4gICAgICAgICAgICBlbC5fbGVhdmVDYi5jYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBlbC5fbGVhdmVDYigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZWwuX2VudGVyQ2IpIHx8IGVsLm5vZGVUeXBlICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5yZXNvbHZlQW5pbWF0aW9uQ29udGV4dCh2bm9kZSk7XHJcblxyXG4gICAgICAgIGlmICghY29udGV4dCB8fCAoYXBwZWFyICYmICFjb250ZXh0LmFuaW1hdGVBcHBlYXIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb0VudGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IHRoaXMucmVzb2x2ZUFuaW1hdGlvbihjb250ZXh0KTtcclxuICAgICAgICB2YXIgYW5pbWF0aW9uID0gbmV3IEFuaW1hdGVFbnRlcihlbCwgY29udGV4dCk7XHJcblxyXG4gICAgICAgIGFuaW1hdGlvbi5kb0VudGVyID0gZG9FbnRlcjtcclxuICAgICAgICBhbmltYXRpb24udHlwZSA9IGRhdGEudHlwZTtcclxuICAgICAgICBhbmltYXRpb24uZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uO1xyXG4gICAgICAgIGFuaW1hdGlvbi5lbnRlckNsYXNzID0gZGF0YS5lbnRlckNsYXNzO1xyXG4gICAgICAgIGFuaW1hdGlvbi5lbnRlclRvQ2xhc3MgPSBkYXRhLmVudGVyVG9DbGFzcztcclxuICAgICAgICBhbmltYXRpb24uZW50ZXJBY3RpdmVDbGFzcyA9IGRhdGEuZW50ZXJBY3RpdmVDbGFzcztcclxuXHJcbiAgICAgICAgaWYgKGNvbnRleHQuZGVsYXlFbnRlcikge1xyXG4gICAgICAgICAgICBjb250ZXh0LmRlbGF5RW50ZXIocGVyZm9ybUVudGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHBlcmZvcm1FbnRlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGVyZm9ybUVudGVyKCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5kaXNhYmxlQW5pbWF0ZShlbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb0VudGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5fYmVmb3JlRW50ZXJDYiA9IGFuaW1hdGVVdGlscy5vbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGVVdGlscy5yZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgYW5pbWF0aW9uLmVudGVyQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5lbnRlckNhbmNlbGxlZCAmJiBjb250ZXh0LmVudGVyQ2FuY2VsbGVkKGVsKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5fYmVmb3JlRW50ZXJDYiA9IG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29udGV4dC5iZWZvcmVFbnRlciAmJiBjb250ZXh0LmJlZm9yZUVudGVyKGVsKTtcclxuICAgICAgICAgICAgYW5pbWF0ZVV0aWxzLmFkZEFuaW1hdGlvbkNsYXNzKGVsLCBhbmltYXRpb24uZW50ZXJDbGFzcyk7XHJcbiAgICAgICAgICAgIGRvRW50ZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuYW5pbWF0aW9uUXVldWUucHVzaChhbmltYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgY29udGV4dC5hbmltYXRpb25EZXN0cm95ZWQub24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYW5pbWF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGxlYXZlKHZub2RlLCBkb0xlYXZlKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBlbCA9IHZub2RlLmh0bWxFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBjYWxsIGVudGVyIGNhbGxiYWNrIG5vd1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGVsLl9lbnRlckNiKSkge1xyXG4gICAgICAgICAgICBlbC5fZW50ZXJDYi5jYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBlbC5fZW50ZXJDYigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLnJlc29sdmVBbmltYXRpb25Db250ZXh0KHZub2RlKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8IGVsLm5vZGVUeXBlICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb0xlYXZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihlbC5fbGVhdmVDYikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnJlc29sdmVBbmltYXRpb24oY29udGV4dCk7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbiA9IG5ldyBBbmltYXRlTGVhdmUoZWwsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICBhbmltYXRpb24uZG9MZWF2ZSA9IGRvTGVhdmU7XHJcbiAgICAgICAgYW5pbWF0aW9uLnR5cGUgPSBkYXRhLnR5cGU7XHJcbiAgICAgICAgYW5pbWF0aW9uLmR1cmF0aW9uID0gZGF0YS5kdXJhdGlvbjtcclxuICAgICAgICBhbmltYXRpb24ubGVhdmVDbGFzcyA9IGRhdGEubGVhdmVDbGFzcztcclxuICAgICAgICBhbmltYXRpb24ubGVhdmVUb0NsYXNzID0gZGF0YS5sZWF2ZVRvQ2xhc3M7XHJcbiAgICAgICAgYW5pbWF0aW9uLmxlYXZlQWN0aXZlQ2xhc3MgPSBkYXRhLmxlYXZlQWN0aXZlQ2xhc3M7XHJcblxyXG4gICAgICAgIGlmIChjb250ZXh0LmRlbGF5TGVhdmUpIHtcclxuICAgICAgICAgICAgY29udGV4dC5kZWxheUxlYXZlKHBlcmZvcm1MZWF2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwZXJmb3JtTGVhdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBlcmZvcm1MZWF2ZSgpIHtcclxuICAgICAgICAgICAgaWYoc2VsZi5kaXNhYmxlQW5pbWF0ZShlbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb0xlYXZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5fYmVmb3JlTGVhdmVDYiA9IGFuaW1hdGVVdGlscy5vbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGVVdGlscy5yZW1vdmVBbmltYXRpb25DbGFzcyhlbCwgYW5pbWF0aW9uLmxlYXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5sZWF2ZUNhbmNlbGxlZCAmJiBjb250ZXh0LmxlYXZlQ2FuY2VsbGVkKGVsKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5fYmVmb3JlTGVhdmVDYiA9IG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29udGV4dC5iZWZvcmVMZWF2ZSAmJiBjb250ZXh0LmJlZm9yZUxlYXZlKGVsKTtcclxuICAgICAgICAgICAgYW5pbWF0ZVV0aWxzLmFkZEFuaW1hdGlvbkNsYXNzKGVsLCBhbmltYXRpb24ubGVhdmVDbGFzcyk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLmFuaW1hdGlvblF1ZXVlLnB1c2goYW5pbWF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQuYW5pbWF0aW9uRGVzdHJveWVkLm9uKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlQW5pbWF0aW9uKGNvbmZpZykge1xyXG4gICAgICAgIHZhciByZXMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5jc3MgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmV4dGVuZChyZXMsIHRoaXMuYXV0b0Nzc0FuaW1hdGlvbihjb25maWcubmFtZSB8fCAnbicpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHV0aWxzLmV4dGVuZChyZXMsIGNvbmZpZyk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0b0Nzc0FuaW1hdGlvbihuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYXBwZWFyQ2xhc3M6IChuYW1lICsgXCItYXBwZWFyXCIpLFxyXG4gICAgICAgICAgICBhcHBlYXJUb0NsYXNzOiAobmFtZSArIFwiLWFwcGVhci10b1wiKSxcclxuICAgICAgICAgICAgYXBwZWFyQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItYXBwZWFyLWFjdGl2ZVwiKSxcclxuICAgICAgICAgICAgZW50ZXJDbGFzczogKG5hbWUgKyBcIi1lbnRlclwiKSxcclxuICAgICAgICAgICAgZW50ZXJUb0NsYXNzOiAobmFtZSArIFwiLWVudGVyLXRvXCIpLFxyXG4gICAgICAgICAgICBlbnRlckFjdGl2ZUNsYXNzOiAobmFtZSArIFwiLWVudGVyLWFjdGl2ZVwiKSxcclxuICAgICAgICAgICAgbGVhdmVDbGFzczogKG5hbWUgKyBcIi1sZWF2ZVwiKSxcclxuICAgICAgICAgICAgbGVhdmVUb0NsYXNzOiAobmFtZSArIFwiLWxlYXZlLXRvXCIpLFxyXG4gICAgICAgICAgICBsZWF2ZUFjdGl2ZUNsYXNzOiAobmFtZSArIFwiLWxlYXZlLWFjdGl2ZVwiKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVzb2x2ZUFuaW1hdGlvbkNvbnRleHQoZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBhbmltYXRpb25zID0gZWxlbWVudC5nZXREaXJlY3RpdmVzKCkuZmlsdGVyKGZ1bmN0aW9uIChkaXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpci5hbmltYXRpb247XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHknO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnYW5pbWF0aW9uJ1xyXG59KVxyXG5jbGFzcyBBbmltYXRpb24gZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvLyBhbmltYXRpb24gdHlwZSwgXCJ0cmFuc2l0aW9uXCIgb3IgXCJhbmltYXRpb25cIlxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnJztcclxuICAgICAgICB0aGlzLnR5cGUgPSAnJztcclxuICAgICAgICB0aGlzLmNzcyA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5lbnRlckNsYXNzID0gJyc7XHJcbiAgICAgICAgLy8gdGhpcy5lbnRlclRvQ2xhc3MgPSAnJztcclxuICAgICAgICAvLyB0aGlzLmVudGVyQWN0aXZlQ2xhc3MgPSAnJztcclxuICAgICAgICAvLyB0aGlzLmxlYXZlQ2xhc3MgPSAnJztcclxuICAgICAgICAvLyB0aGlzLmxlYXZlVG9DbGFzcyA9ICcnO1xyXG4gICAgICAgIC8vIHRoaXMubGVhdmVBY3RpdmVDbGFzcyA9ICcnO1xyXG4gICAgICAgIHRoaXMuJHByaW9yaXR5ID0gLTEwMDtcclxuICAgICAgICB0aGlzLmFuaW1hdGVBcHBlYXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFuaW1hdGVDaGlsZHJlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGVzdHJveWVkID0gbmV3IE1lc3NlbmdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRGcmFtZShmbikge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGVzdHJveWVkLmZpcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBiZWZvcmVFbnRlcigpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZW50ZXIoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFmdGVyRW50ZXIoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGVudGVyQ2FuY2VsbGVkKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBiZWZvcmVMZWF2ZSgpIHtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gbGVhdmUoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFmdGVyTGVhdmUoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGxlYXZlQ2FuY2VsbGVkKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBkZWxheUxlYXZlKCkge1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQW5pbWF0aW9uIH0iLCJleHBvcnQgKiBmcm9tICcuL2FuaW1hdGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FuaW1hdGlvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGVzdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGVzdDInOyIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJy4uL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICd0ZXN0LWFuaW1hdGlvbidcclxufSlcclxuY2xhc3MgVGVzdEFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLmFuaW1hdGVDaGlsZHJlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLiRodG1sRWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzFweCc7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICdoZWlnaHQgMS41cyc7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXJUbygpIHtcclxuICAgICAgICAvLyB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gJ2hlaWdodCAxLjVzJztcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJFbnRlcigpIHtcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gbnVsbDtcclxuICAgICAgICAvLyB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyQ2FuY2VsbGVkKCkge1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJy4uL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICd0ZXN0Mi1hbmltYXRpb24nXHJcbn0pXHJcbmNsYXNzIFRlc3QyQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmVmb3JlRW50ZXIoKSB7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIoKSB7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMC41cyBlYXNlJztcclxuICAgIH1cclxuXHJcbiAgICBlbnRlclRvKCkge1xyXG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyRW50ZXIoKSB7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IG51bGw7XHJcbiAgICAgICAgLy8gdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlckNhbmNlbGxlZCgpIHtcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBiZWZvcmVMZWF2ZSgpe1xyXG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuNXMgZWFzZSc7XHJcbiAgICB9XHJcblxyXG4gICAgbGVhdmUoKXtcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBhZnRlckxlYXZlKCl7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgbGVhdmVDYW5jZWxsZWQoKXtcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAndGVzdDMtYW5pbWF0aW9uJ1xyXG59KVxyXG5jbGFzcyBUZXN0M0FuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZUVudGVyKCkge1xyXG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0yMHB4KSc7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIoKSB7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMXMgZWFzZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXJUbygpIHtcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwcHgpJztcclxuICAgIH1cclxuXHJcbiAgICBhZnRlckVudGVyKCkge1xyXG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXJDYW5jZWxsZWQoKSB7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gbnVsbDtcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBiZWZvcmVMZWF2ZSgpe1xyXG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDBweCknO1xyXG4gICAgfVxyXG5cclxuICAgIGxlYXZlKCl7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMXMgZWFzZSc7XHJcbiAgICB9XHJcblxyXG4gICAgbGVhdmVUbygpIHtcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgyMHB4KSc7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJMZWF2ZSgpe1xyXG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgbGVhdmVDYW5jZWxsZWQoKXtcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBWTm9kZVR5cGUsIFZOb2RlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xuXG4vLyAvLyBXaW5kb3cgRXZlbnRzXG4vLyBjYXNlICdvbi1sb2FkJzpcbi8vIGNhc2UgJ29uLXVubG9hZCc6XG4vLyAvLyBGb3JtIEVsZW1lbnQgRXZlbnRzXG4vLyBjYXNlICdvbi1jaGFuZ2UnOlxuLy8gY2FzZSAnb24tc3VibWl0Jzpcbi8vIGNhc2UgJ29uLXJlc2V0Jzpcbi8vIGNhc2UgJ29uLXNlbGVjdCc6XG4vLyBjYXNlICdvbi1ibHVyJzpcbi8vIGNhc2UgJ29uLWZvY3VzJzpcbi8vIC8vIEltYWdlIEV2ZW50c1xuLy8gY2FzZSAnb24tYWJvcnQnOlxuLy8gLy8gS2V5Ym9hcmQgRXZlbnRzXG4vLyBjYXNlICdvbi1rZXlkb3duJzpcbi8vIGNhc2UgJ29uLWtleXByZXNzJzpcbi8vIGNhc2UgJ29uLWtleXVwJzpcbi8vIC8vIE1vdXNlIEV2ZW50c1xuLy8gY2FzZSAnb24tY2xpY2snOlxuLy8gY2FzZSAnb24tZGJsY2xpY2snOlxuLy8gY2FzZSAnb24tbW91c2Vkb3duJzpcbi8vIGNhc2UgJ29uLW1vdXNlbW92ZSc6XG4vLyBjYXNlICdvbi1tb3VzZW91dCc6XG4vLyBjYXNlICdvbi1tb3VzZW92ZXInOlxuLy8gY2FzZSAnb24tbW91c2V1cCc6XG52YXIgZXZlbnRUZXh0ID0gJ2xvYWQgdW5sb2FkIGNoYW5nZSBzdWJtaXQgcmVzZXQgc2VsZWN0IGJsdXIgZm9jdXMgYWJvcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwJztcbnZhciBkb21FdmVudHMgPSBldmVudFRleHQuc3BsaXQoJyAnKTtcblxuY2xhc3MgQXR0ck5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmF0dHJpYnV0ZSwgbmFtZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLnF1b3RlID0gJ1wiJztcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBuYW1lO1xuICAgICAgICB0aGlzLmlzRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0JpbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RvbUV2ZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEaXJlY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJDb21wb25lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gbmV3IEJpbmRpbmcoKTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IDA7XG4gICAgfVxuXG4gICAgYmVsb25nVG8oa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbiA9PT0ga2V5O1xuICAgIH1cblxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY29tcGlsZSh0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIG9ic2VydmUoYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYmluZGluZy5vYnNlcnZlKGFjdGlvbik7XG4gICAgfVxuXG4gICAgY29tcGlsZShvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaXNFdmVudCA9IHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnQCcpO1xuICAgICAgICB0aGlzLmlzQmluZGluZyA9IHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnOicpO1xuICAgICAgICB0aGlzLmlzRGlyZWN0aXZlID0gdGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCcqJyk7XG4gICAgICAgIGlmICh0aGlzLmlzRXZlbnQgfHwgdGhpcy5pc0JpbmRpbmcgfHwgdGhpcy5pc0RpcmVjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlTmFtZSA9IHRoaXMubm9kZU5hbWUuc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNEb21FdmVudCA9IHV0aWxzLmNvbnRhaW5zKGRvbUV2ZW50cywgdGhpcy5ub2RlTmFtZSk7XG4gICAgICAgIHRoaXMuYmluZGluZy5zZXRPdXRwdXQodGhpcy5pc0V2ZW50KTtcbiAgICAgICAgdGhpcy5iaW5kaW5nLmJpbmQodGhpcy5ub2RlVmFsdWUsIHRoaXMuaXNFdmVudCB8fCB0aGlzLmlzQmluZGluZyB8fCB0aGlzLmlzRGlyZWN0aXZlKTtcblxuICAgICAgICBpZiAodGhpcy5pc0RpcmVjdGl2ZSkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuY29udGFpbnNEaXJlY3RpdmUodGhpcy5ub2RlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IG9wdGlvbnMuY3JlYXRlRGlyZWN0aXZlKHRoaXMubm9kZU5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRiaW5kTm9kZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRpbmcuc2V0T3V0cHV0KHRoaXMuZGlyZWN0aXZlLiRvdXRwdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSB0aGlzLmRpcmVjdGl2ZS4kcHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpcmVjdGl2ZSAnICsgdGhpcy5ub2RlTmFtZSArICcgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeUNvbXBpbGVkKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRjb21waWxlKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGluayhzY29wZSwgaHRtbEVsZW1lbnQsIG93bmVyQ29tcG9uZW50KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBodG1sRWxlbWVudDtcbiAgICAgICAgdGhpcy5vd25lckNvbXBvbmVudCA9IG93bmVyQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmJpbmRpbmcuc2V0U2NvcGUoc2NvcGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ub2RlTmFtZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5iaW5kaW5nLmNvbXB1dGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50OiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhcmdzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtZW50OiBzZWxmLmh0bWxFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3duZXJDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG93bmVyQ29tcG9uZW50LiRsaXN0ZW4odGhpcy5ub2RlTmFtZSwgZnVuY3Rpb24gKGUsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5iaW5kaW5nLmNvbXB1dGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50OiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhcmdzOiBhcmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtZW50OiBzZWxmLmh0bWxFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuJCRjaGlsZERpcmVjdGl2ZXMucHVzaCh0aGlzLmRpcmVjdGl2ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJHNldEJpbmRpbmcodGhpcy5iaW5kaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG93bmVyQ29tcG9uZW50ICE9IG51bGwgJiYgb3duZXJDb21wb25lbnQuJGhhc0F0dHIodGhpcy5ub2RlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBvd25lckNvbXBvbmVudC4kaW5pdEF0dHIodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMuaHRtbEVsZW1lbnQsIHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRkZXRlY3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmluZGluZy5kZXRlY3QoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kdXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vd25lckNvbXBvbmVudCAhPSBudWxsICYmIHRoaXMub3duZXJDb21wb25lbnQuJGhhc0F0dHIodGhpcy5ub2RlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyQ29tcG9uZW50LiRzZXRBdHRyKHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMuaHRtbEVsZW1lbnQsIHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5odG1sRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyAmJiB0aGlzLm5vZGVOYW1lID09PSAndmFsdWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50LnZhbHVlID0gdGhpcy5iaW5kaW5nLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5TGlua2VkKCkge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRpbnNlcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERpcmVjdGl2ZShrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUgIT0gbnVsbCAmJiB0aGlzLmRpcmVjdGl2ZS4kJG1ldGEuc2VsZWN0b3IgPT09IGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbiArICh0aGlzLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdGhpcy5xdW90ZSArIHRoaXMubm9kZVZhbHVlICsgdGhpcy5xdW90ZSkpO1xuICAgIH1cblxuICAgIGdldElubmVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW4gKyAodGhpcy5ub2RlVmFsdWUgPT0gbnVsbCA/ICcnIDogKCc9JyArIHRoaXMucXVvdGUgKyB0aGlzLm5vZGVWYWx1ZSArIHRoaXMucXVvdGUpKTtcbiAgICB9XG5cbiAgICBkaXNwb3NlKGlzRnJvbURpcmVjdGl2ZSkge1xuICAgICAgICBpZiAoaXNGcm9tRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmRpbmcuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmJpbmRpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJDb21wb25lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kZGlzcG9zZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQXR0ck5vZGUgfTtcbiIsIlxudmFyIFZOb2RlVHlwZSA9IHtcbiAgICBlbGVtZW50OiAxLFxuICAgIGF0dHJpYnV0ZTogMixcbiAgICB0ZXh0OiAzLFxuICAgIGNkYXRhU2VjdGlvbjogNCxcbiAgICBlbnRpdHlSZWZlcmVuY2U6IDUsXG4gICAgZW50aXR5OiA2LFxuICAgIHByb2Nlc3NpbmdJbnN0cnVjdGlvbjogNyxcbiAgICBjb21tZW50OiA4LFxuICAgIGRvY3VtZW50OiA5LFxuICAgIGRvY3VtZW50VHlwZTogMTAsXG4gICAgZG9jdW1lbnRGcmFnbWVudDogMTEsXG4gICAgbm90YXRpb246IDEyLFxuICAgIGNvbm5lY3Rpb246IDEwMVxufTtcblxuLy8gdmlydHVhbCBub2RlXG5jbGFzcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IodHlwZSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5ub2RlVHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubm9kZU5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICB9XG5cbiAgICAkcHVzaENoaWxkKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgfVxuXG4gICAgJGJ1aWxkU2libGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IChzZWxmLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC4kYnVpbGRTaWJsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICRjbGVhclBhcmVudEFuZFNpYmxpbmcoKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XG4gICAgfVxuXG4gICAgJHJlbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kcmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuJGNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICB9XG5cbiAgICBoYXNDaGlsZE5vZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBjbGVhckNoaWxkTm9kZXMoKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZC5uZXh0U2libGluZyA9IGNoaWxkO1xuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gdGhpcy5sYXN0Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRCZWZvcmUocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHJlZkNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQ7XG4gICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0NoaWxkO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRBZnRlcihyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKHJlZkNoaWxkLm5leHRTaWJsaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShyZWZDaGlsZC5uZXh0U2libGluZywgbmV3Q2hpbGQpO1xuICAgIH1cblxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmUgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZy5wcmV2aW91c1NpYmxpbmcgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLiRjbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIHJlcGxhY2VDaGlsZChyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgIGlmICh0aGlzLmZpcnN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICByZWZDaGlsZC4kY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEsIG5ld0NoaWxkKTtcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cblxuICAgIGNsb25lTm9kZSgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG5cbiAgICBjb21waWxlKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5jb21waWxlKG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlDb21waWxlZChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQubm90aWZ5Q29tcGlsZWQob3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxpbmsoc2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmxpbmsoc2NvcGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlMaW5rZWQoKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQubm90aWZ5TGlua2VkKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlKCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDaGFuZ2UoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9O1xuIiwiaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBjb21wdXRlLCBwYXJzZUFzc2lnbm1lbnQgfSBmcm9tICcuLi9wYXJzZXInO1xuXG5jbGFzcyBFeHBOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb21wdXRlKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlID0gY29tcHV0ZSh0aGlzLnRleHQsIHNjb3BlLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlICE9PSB0aGlzLm9sZFZhbHVlO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIEJpbmRpbmcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy50ZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuaXNFeHAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnJpZ2h0U3RyID0gJyc7XG4gICAgICAgIHRoaXMub3V0cHV0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy51bndhdGNoZXMgPSBbXTtcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSBuZXcgTWVzc2VuZ2VyKCk7XG4gICAgfVxuXG4gICAgc2V0U2NvcGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldE91dHB1dCh2YWx1ZSkge1xuICAgICAgICB0aGlzLm91dHB1dCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGJpbmQodGV4dCwgaXNFeHApIHtcbiAgICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5pc0V4cCA9IGlzRXhwO1xuXG4gICAgICAgIGlmIChpc0V4cCkge1xuICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBleHA6IG5ldyBFeHBOb2RlKHRleHQpLFxuICAgICAgICAgICAgICAgIGxlZnRTdHI6ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXR0ZXJuID0gL3t7KFtefV0qKX19L2c7XG4gICAgICAgIHZhciBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICAgICAgdmFyIG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpO1xuXG4gICAgICAgIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiBtYXRjaC5pbmRleCxcbiAgICAgICAgICAgICAgICBleHA6IG5ldyBFeHBOb2RlKG1hdGNoWzFdKSxcbiAgICAgICAgICAgICAgICBsZWZ0U3RyOiB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VnbWVudHMubGVuZ3RoID4gMCAmJiBsYXN0SW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yaWdodFN0ciA9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLnNlZ21lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudGV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwICYmIHRoaXMuc2VnbWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50c1swXS5leHAuY29tcHV0ZShzZWxmLnNjb3BlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5zZWdtZW50c1swXS5leHAudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50LmV4cC5jb21wdXRlKHNlbGYuc2NvcGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IChzZWdtZW50LmxlZnRTdHIgKyBzZWdtZW50LmV4cC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRleHQgKyB0aGlzLnJpZ2h0U3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgYXNzaWduKHZhbHVlKSB7XG4gICAgICAgIHZhciBhc3NpZ25tZW50ID0gcGFyc2VBc3NpZ25tZW50KHRoaXMudGV4dCwgdGhpcy5zY29wZSk7XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub2JqICE9IG51bGwgJiYgYXNzaWdubWVudC5wcm9wICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFzc2lnbm1lbnQub2JqLiRbYXNzaWdubWVudC5wcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlzdGVuKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMudW53YXRjaGVzID0gdGhpcy5zZWdtZW50cy5tYXAoZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnNjb3BlLiR3YXRjaChzZWdtZW50LmV4cC50ZXh0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRldGVjdCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZS5maXJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWZlcihhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuY2FuY2VsVGltZW91dCgpO1xuXG4gICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FuY2VsVGltZW91dCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZW91dElkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvYnNlcnZlKGFjdGlvbikge1xuICAgICAgICBpZiAodGhpcy5vdXRwdXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGlzdGVuKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlLm9uKGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlLm9mZihhY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMub3V0cHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wdXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlICE9PSB0aGlzLm9sZFZhbHVlO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5zZWdtZW50cy5zb21lKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gc2VnbWVudC5leHAuZGV0ZWN0KCk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsVGltZW91dCgpO1xuICAgICAgICB0aGlzLnVud2F0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uICh1bndhdGNoKSB7XG4gICAgICAgICAgICB1bndhdGNoLmNhbGwoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgc2VnbWVudC5leHAuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgeyBCaW5kaW5nIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIENEYXRhU2VjdGlvbk5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoVk5vZGVUeXBlLmNkYXRhU2VjdGlvbik7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDRGF0YVNlY3Rpb25Ob2RlIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIENvbW1lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5jb21tZW50LCAnI2NvbW1lbnQnKTtcbiAgICB9XG5cbiAgICBsaW5rKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcbiAgICB9XG5cbiAgICBnZXRJbm5lclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVZhbHVlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ29tbWVudE5vZGUgfTtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIENvbm5lY3Rpb25Ob2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxpbmtlcil7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5jb25uZWN0aW9uLCBuYW1lKTtcbiAgICAgICAgdGhpcy5saW5rZXIgPSBsaW5rZXI7XG4gICAgfVxuXG4gICAgbGluayhzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtlci5jYWxsKHRoaXMsIHNjb3BlKTtcbiAgICB9XG5cbiAgICBub3RpZnlMaW5rZWQoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25JbnNlcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkluc2VydC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGV0ZWN0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25EZXRlY3QuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkhhc0NoYW5nZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uSGFzQ2hhbmdlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25VcGRhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vblVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDb25uZWN0aW9uTm9kZSB9OyIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuXG5jbGFzcyBEb2N1bWVudFR5cGVOb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuZG9jdW1lbnRUeXBlKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IERvY3VtZW50VHlwZU5vZGUgfTtcbiIsImltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuXG5jbGFzcyBEb2N1bWVudE5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5kb2N1bWVudCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBEb2N1bWVudE5vZGUgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7IFZOb2RlVHlwZSwgVk5vZGUgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgQ29ubmVjdGlvbk5vZGUgfSBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuaW1wb3J0IHsgQXR0ck5vZGUgfSBmcm9tICcuL2F0dHJpYnV0ZSc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4uL3BhcnNlcic7XG5cbmNsYXNzIEVsZW1lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGdldCBwYXJlbnRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihWTm9kZVR5cGUuZWxlbWVudCwgbmFtZSk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGZDbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21waWxlT3B0aW9ucyA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNDb21wb25lbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAkcHVzaEF0dHJpYnV0ZShhdHRyKSB7XG4gICAgICAgIGF0dHIub3duZXJFbGVtZW50ID0gdGhpcztcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnB1c2goYXR0cik7XG4gICAgfVxuXG4gICAgaGFzQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcy5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlKGtleSkge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZXNbMF07XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHRhcmdldCwgbWF0Y2hlcyA9IHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG1hdGNoZXNbMF07XG4gICAgICAgICAgICB0YXJnZXQuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0ID0gbmV3IEF0dHJOb2RlKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgdGFyZ2V0Lm93bmVyRWxlbWVudCA9IHRoaXM7XG4gICAgICAgICAgICB0YXJnZXQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKHRhcmdldCk7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZW1vdmVBdHRyaWJ1dGUoa2V5KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBbXSwgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGtleSBpbnN0YW5jZW9mIEF0dHJOb2RlKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmF0dHJpYnV0ZXMuaW5kZXhPZihrZXkpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYuYXR0cmlidXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHNlbGYuYXR0cmlidXRlcy5pbmRleE9mKG1hdGNoKTtcbiAgICAgICAgICAgICAgICBtYXRjaC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi5hdHRyaWJ1dGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQubGVuZ3RoID4gMCA/IHRhcmdldFswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgYXBwZW5kQXR0cmlidXRlKGF0dHIpIHtcbiAgICAgICAgaWYgKGF0dHIub3duZXJFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkN1cnJlbnQgYXR0cmlidXRlIGlzIG5vdCBuZXchXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXR0ci5vd25lckVsZW1lbnQgPSB0aGlzO1xuICAgICAgICBhdHRyLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xuICAgICAgICByZXR1cm4gYXR0cjtcbiAgICB9XG5cbiAgICBvYnNlcnZlKGtleSwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdGhpcy5hdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZXNbMF0ub2JzZXJ2ZShhY3Rpb24pO1xuICAgIH1cblxuICAgIGdldE91dGVyVHBsKCkge1xuICAgICAgICB2YXIgYXR0clRwbCA9ICcnLCBjaGlsZFRwbCA9ICcnO1xuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyVHBsICs9ICcgJztcbiAgICAgICAgICAgIGF0dHJUcGwgKz0gYXR0ci5nZXRPdXRlclRwbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkVHBsICs9IGNoaWxkLmdldE91dGVyVHBsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB0cGwgPSAnPCcgKyB0aGlzLm5vZGVOYW1lICsgYXR0clRwbCArICc+JyArIGNoaWxkVHBsO1xuXG4gICAgICAgIGlmICghdGhpcy5zZWxmQ2xvc2VkKSB7XG4gICAgICAgICAgICB0cGwgKz0gKCc8LycgKyB0aGlzLm5vZGVOYW1lICsgJz4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cGw7XG4gICAgfVxuXG4gICAgZ2V0SW5uZXJUcGwoKSB7XG4gICAgICAgIHZhciBjaGlsZFRwbCA9ICcnO1xuXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGRUcGwgKz0gY2hpbGQuZ2V0T3V0ZXJUcGwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkVHBsO1xuICAgIH1cblxuICAgIHNldE91dGVyVHBsKHRwbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHBhcnNlKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLCB2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZik7XG4gICAgfVxuXG4gICAgc2V0SW5uZXJUcGwodHBsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jbGVhckNoaWxkTm9kZXMoKTtcbiAgICAgICAgcGFyc2UodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLmFwcGVuZENoaWxkKHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aXZlKGtleSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuc29tZShmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXR0ci5nZXREaXJlY3RpdmUoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQgIT0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXREaXJlY3RpdmVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLm1hcChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgcmV0dXJuIGF0dHIuZ2V0RGlyZWN0aXZlKCk7XG4gICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICByZXR1cm4gZGlyICE9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBpbGUob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNvbXBpbGVPcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIuY29tcGlsZShvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHBlcmZvcm0gZGlyZWN0aXZlIGFjY29yZGluZyB0byBwcmlvcml0eVxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSB1dGlscy5vcmRlckJ5KHRoaXMuYXR0cmlidXRlcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnByaW9yaXR5O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc0NvbXBvbmVudCA9IG9wdGlvbnMuY29udGFpbnNDb21wb25lbnQodGhpcy5ub2RlTmFtZSk7XG4gICAgICAgIGlmICghdGhpcy5pc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuY29tcGlsZShvcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5Q29tcGlsZWQob3B0aW9ucykge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0ci5ub3RpZnlDb21waWxlZChvcHRpb25zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLm5vdGlmeUNvbXBpbGVkKG9wdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rKHNjb3BlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHNlbGYuaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHNlbGYubm9kZU5hbWUpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudCA9IHNjb3BlLiRjcmVhdGVDaGlsZENtcCh0aGlzLm5vZGVOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LiRiaW5kTm9kZSh0aGlzKTtcbiAgICAgICAgICAgIHNlbGYuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgYXR0ci5saW5rKHNjb3BlLCBzZWxmLmh0bWxFbGVtZW50LCBzZWxmLmNvbXBvbmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYuY29tcG9uZW50LiRpbml0QXR0ckRvbmUoKTtcbiAgICAgICAgICAgIHNlbGYuY29tcG9uZW50LiRtb3VudChzZWxmLmh0bWxFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgYXR0ci5saW5rKHNjb3BlLCBzZWxmLmh0bWxFbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5odG1sRWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZC5saW5rKHNjb3BlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWxmLmh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIG5vdGlmeUxpbmtlZCgpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIubm90aWZ5TGlua2VkKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5ub3RpZnlMaW5rZWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0ci5kZXRlY3QoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXRlY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcG9zZShpc0Zyb21Db21wb25lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRnJvbUNvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5yZW1vdmVIdG1sRWxlbWVudCgpO1xuICAgICAgICB0aGlzLmNvbXBpbGVPcHRpb25zID0gbnVsbDtcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC4kZGlzcG9zZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIGdldEh0bWxFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odG1sRWxlbWVudDtcbiAgICB9XG5cbiAgICByZW1vdmVIdG1sRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaHRtbEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdXRpbHMucmVtb3ZlTm9kZSh0aGlzLmh0bWxFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUVsZW1lbnQobmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnROb2RlKG5hbWUpO1xuICAgIH1cblxuICAgIGNyZWF0ZUF0dHIobmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IEF0dHJOb2RlKG5hbWUpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbm5lY3Rpb24obmFtZSwgbGlua2VyKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29ubmVjdGlvbk5vZGUobmFtZSwgbGlua2VyKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEVsZW1lbnROb2RlIH07IiwiaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIERvY3VtZW50RnJhZ21lbnROb2RlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS5kb2N1bWVudEZyYWdtZW50LCAnI2RvY3VtZW50LWZyYWdtZW50Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBEb2N1bWVudEZyYWdtZW50Tm9kZSB9O1xuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzQXJyYXksIE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHknO1xuXG52YXIgcHJvcENoYW5naW5nTXNnID0gbmV3IE1lc3NlbmdlcigpO1xudmFyIHByb3BDaGFuZ2VkTXNnID0gbmV3IE1lc3NlbmdlcigpO1xudmFyIHRhcmdldEtleSA9ICdfX3RhcmdldF9fJztcblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdmFsdWVbdGFyZ2V0S2V5XTtcblxuICAgICAgICAvLyB2YWx1ZSBpcyBhIHByb3h5IHJldHVybiBieSBwcm94eSBoYW5kbGVyXG4gICAgICAgIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmNsYXNzIEdldFByb3BlcnR5SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoZGVlcFByb3h5LCB2YXJpYWJsZXMsIGZ1bGxUYXJnZXRLZXkpIHtcbiAgICAgICAgdGhpcy5kZWVwUHJveHkgPSBkZWVwUHJveHk7XG4gICAgICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgICAgICB0aGlzLmZ1bGxUYXJnZXRLZXkgPSBmdWxsVGFyZ2V0S2V5O1xuICAgIH1cblxuICAgIGdldCh0YXJnZXQsIGtleSkge1xuICAgICAgICBpZiAodGFyZ2V0S2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXRba2V5XSwgZnVsbEtleSA9IGtleTtcblxuICAgICAgICBpZiAodGhpcy5mdWxsVGFyZ2V0S2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZ1bGxLZXkgPSB0aGlzLmZ1bGxUYXJnZXRLZXkgKyAnLicgKyBrZXk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWVwUHJveHkgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBQcm94eSh2YWx1ZSwgbmV3IEdldFByb3BlcnR5SGFuZGxlcih0aGlzLmRlZXBQcm94eSwgdGhpcy52YXJpYWJsZXMsIGZ1bGxLZXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleGlzdGVkID0gdGhpcy52YXJpYWJsZXMuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGFyZ2V0ID09PSB0YXJnZXQgJiYgaXRlbS5rZXkgPT09IGtleTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFleGlzdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICB0YXJnZXRLZXk6IHRoaXMuZnVsbFRhcmdldEtleVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuXG5jbGFzcyBTZXRQcm9wZXJ0eUhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgc2V0KHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlIHx8IChpc0FycmF5KHRhcmdldCkgJiYga2V5ID09PSAnbGVuZ3RoJykpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFwcGx5OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHByb3BDaGFuZ2luZ01zZy5maXJlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWxpZGF0aW9uXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24uYXBwbHkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHByb3BDaGFuZ2VkTXNnLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmNsYXNzIEFjY2Vzc1Byb3BlcnR5SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoZGVlcFByb3h5KSB7XG4gICAgICAgIHRoaXMuZGVlcFByb3h5ID0gZGVlcFByb3h5O1xuICAgIH1cblxuICAgIGdldCh0YXJnZXQsIGtleSkge1xuICAgICAgICBpZiAodGFyZ2V0S2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXRba2V5XTtcblxuICAgICAgICBpZiAodGhpcy5kZWVwUHJveHkgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBQcm94eSh2YWx1ZSwgbmV3IFNldFByb3BlcnR5SGFuZGxlcih0aGlzLmRlZXBQcm94eSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHNldCh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVlcFByb3h5KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGdldFRhcmdldCh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlIHx8IChpc0FycmF5KHRhcmdldCkgJiYga2V5ID09PSAnbGVuZ3RoJykpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFwcGx5OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHByb3BDaGFuZ2luZ01zZy5maXJlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWxpZGF0aW9uXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24uYXBwbHkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHByb3BDaGFuZ2VkTXNnLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEdldFByb3BlcnR5SGFuZGxlciwgU2V0UHJvcGVydHlIYW5kbGVyLCBBY2Nlc3NQcm9wZXJ0eUhhbmRsZXIsIHByb3BDaGFuZ2luZ01zZywgcHJvcENoYW5nZWRNc2csIGdldFRhcmdldCB9IiwiZXhwb3J0ICogZnJvbSAnLi9iYXNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXR0cmlidXRlJztcbmV4cG9ydCAqIGZyb20gJy4vY2RhdGFzZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9kb2N0eXBlJztcbmV4cG9ydCAqIGZyb20gJy4vZG9jdW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZnJhZ21lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL2hhbmRsZXInO1xuZXhwb3J0ICogZnJvbSAnLi9vYnNlcnZlcic7XG5leHBvcnQgKiBmcm9tICcuL3Byb3h5JzsiLCJpbXBvcnQgeyBjb21wdXRlLCBwYXJzZUV4cCB9IGZyb20gJy4uL3BhcnNlcic7XG5pbXBvcnQgeyBpc1JlZ0V4cCwgZm9yRWFjaCB9IGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgcHJvcENoYW5naW5nTXNnLCBwcm9wQ2hhbmdlZE1zZywgR2V0UHJvcGVydHlIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVyJztcblxuY2xhc3MgUHJvcGVydHlPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxhaW5NYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVnZXhNYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgb24ocHJvcCwgYWN0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIG1hcCA9IGlzUmVnRXhwKHByb3ApID8gdGhpcy5yZWdleE1hcCA6IHRoaXMucGxhaW5NYXA7XG5cbiAgICAgICAgaWYgKCFtYXAuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICBtYXAuc2V0KHByb3AsIFtdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICBhY3Rpb24uYmVmb3JlQ2hhbmdlZCA9IG9wdGlvbnMuYmVmb3JlQ2hhbmdlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcC5nZXQocHJvcCkucHVzaChhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9mZihwcm9wLCBhY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9mZihwcm9wLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIG1hcCA9IGlzUmVnRXhwKHByb3ApID8gdGhpcy5yZWdleE1hcCA6IHRoaXMucGxhaW5NYXA7XG5cbiAgICAgICAgaWYgKCFtYXAuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWN0aW9ucyA9IG1hcC5nZXQocHJvcCk7XG4gICAgICAgIHZhciBpbmRleCA9IGFjdGlvbnMuaW5kZXhPZihhY3Rpb24pO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVDaGFuZ2VkKHByb3AsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYWluTWFwLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgdGhpcy5wbGFpbk1hcC5nZXQocHJvcCkuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVnZXhNYXAuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9ucywgcGF0dGVybikge1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4udGVzdChwcm9wKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmJlZm9yZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHNlbGYsIHByb3AsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpcmVDaGFuZ2luZyhwcm9wLCBhcmdzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5wbGFpbk1hcC5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgIHRoaXMucGxhaW5NYXAuZ2V0KHByb3ApLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVnZXhNYXAuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9ucywgcGF0dGVybikge1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4udGVzdChwcm9wKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24uYmVmb3JlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5wbGFpbk1hcC5jbGVhcigpO1xuICAgICAgICB0aGlzLnJlZ2V4TWFwLmNsZWFyKCk7XG4gICAgfVxufVxuXG5jbGFzcyBPYmplY3RPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIG9uY2hhbmdpbmcgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmdzLnRhcmdldCwgcHJvcCA9IGFyZ3Mua2V5O1xuICAgICAgICAgICAgICAgIHNlbGYuZmlyZUNoYW5naW5nKG9iaiwgcHJvcCwgYXJncy5kYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbmNoYW5nZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmdzLnRhcmdldCwgcHJvcCA9IGFyZ3Mua2V5O1xuICAgICAgICAgICAgICAgIHNlbGYuZmlyZUNoYW5nZWQob2JqLCBwcm9wLCBhcmdzLmRhdGEpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICBwcm9wQ2hhbmdpbmdNc2cub24ob25jaGFuZ2luZyk7XG4gICAgICAgIHByb3BDaGFuZ2VkTXNnLm9uKG9uY2hhbmdlZCk7XG5cbiAgICAgICAgdGhpcy5vZmZDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9wQ2hhbmdpbmdNc2cub2ZmKG9uY2hhbmdpbmcpO1xuICAgICAgICAgICAgcHJvcENoYW5nZWRNc2cub2ZmKG9uY2hhbmdlZCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub2JqTWFwID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIG9uKG9iaiwgcHJvcCwgYWN0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIXRoaXMub2JqTWFwLmhhcyhvYmopKSB7XG4gICAgICAgICAgICB0aGlzLm9iak1hcC5zZXQob2JqLCBuZXcgUHJvcGVydHlPYnNlcnZlcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm9iak1hcC5nZXQob2JqKS5vbihwcm9wLCBhY3Rpb24sIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIG9mZihvYmosIHByb3AsIGFjdGlvbikge1xuICAgICAgICBpZiAodGhpcy5vYmpNYXAuaGFzKG9iaikpIHtcbiAgICAgICAgICAgIHRoaXMub2JqTWFwLmdldChvYmopLm9mZihwcm9wLCBhY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUNoYW5nZWQob2JqLCBwcm9wLCBhcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLm9iak1hcC5oYXMob2JqKSkge1xuICAgICAgICAgICAgdGhpcy5vYmpNYXAuZ2V0KG9iaikuZmlyZUNoYW5nZWQocHJvcCwgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlQ2hhbmdpbmcob2JqLCBwcm9wLCBhcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLm9iak1hcC5oYXMob2JqKSkge1xuICAgICAgICAgICAgdGhpcy5vYmpNYXAuZ2V0KG9iaikuZmlyZUNoYW5naW5nKHByb3AsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vZmZDaGFuZ2UuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5vYmpNYXAuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9iak1hcCA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBNZW1iZXJXYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgdGFyZ2V0LCBrZXksIHRhcmdldEtleSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy50YXJnZXRLZXkgPSB0YXJnZXRLZXk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG51bGw7XG5cbiAgICAgICAgaWYgKCF0YXJnZXRLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGFyZ2V0S2V5ICsgJy4nICsga2V5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQob2JzZXJ2ZXIsIGFjdGlvbiwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSB0aGlzLm9ic2VydmVyLm9uKHRoaXMudGFyZ2V0LCB0aGlzLmtleSwgdGhpcy5hY3Rpb24sIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMudW53YXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVud2F0Y2guY2FsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKGNoYW5nZUtleSkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXRLZXkgIT0gbnVsbCAmJiB0aGlzLnRhcmdldEtleS5zdGFydHNXaXRoKGNoYW5nZUtleSkpIHtcbiAgICAgICAgICAgIHZhciBuZXdUYXJnZXQgPSBjb21wdXRlKHRoaXMudGFyZ2V0S2V5LCB0aGlzLnNjb3BlKTtcblxuICAgICAgICAgICAgaWYgKG5ld1RhcmdldCAhPT0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IG5ld1RhcmdldDtcbiAgICAgICAgICAgICAgICB0aGlzLnVud2F0Y2ggPSB0aGlzLm9ic2VydmVyLm9uKHRoaXMudGFyZ2V0LCB0aGlzLmtleSwgdGhpcy5hY3Rpb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIERldGVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICAgIHRoaXMudGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5kaWdlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlZmVyKGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2xlYXJEZWZlcigpO1xuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyRGVmZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpIHtcbiAgICAgICAgcHJvcENoYW5nZWRNc2cub24odGhpcy5kaWdlc3QpO1xuICAgIH1cblxuICAgIGFwcGx5KGFjdGlvbikge1xuICAgICAgICB0aGlzLnF1ZXVlLnB1c2goYWN0aW9uKTtcbiAgICB9XG5cbiAgICByZW1vdmUoYWN0aW9uKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucXVldWUuaW5kZXhPZihhY3Rpb24pO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucXVldWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHByb3BDaGFuZ2VkTXNnLm9mZih0aGlzLmRpZ2VzdCk7XG4gICAgICAgIHRoaXMuY2xlYXJEZWZlcigpO1xuICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgfVxufVxuXG52YXIgZGV0ZWN0b3IgPSBuZXcgRGV0ZWN0b3IoKTtcblxuZGV0ZWN0b3IuZXhlY3V0ZSgpO1xuXG5jbGFzcyBFeHBXYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgZXhwKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGV0ZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gc2VsZi52YWx1ZSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IGNvbXB1dGUoc2VsZi5leHAsIHNlbGYuc2NvcGUpO1xuXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIHNlbGYuYWN0aW9uLmNhbGwoc2VsZiwge1xuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXJ0KGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLnZhbHVlID0gY29tcHV0ZSh0aGlzLmV4cCwgdGhpcy5zY29wZSk7XG4gICAgICAgIGRldGVjdG9yLmFwcGx5KHNlbGYuZGV0ZWN0KTtcbiAgICAgICAgdGhpcy51bndhdGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGV0ZWN0b3IucmVtb3ZlKHNlbGYuZGV0ZWN0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy51bndhdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudW53YXRjaC5jYWxsKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBXYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgZXhwKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmRpZ2VzdHMgPSBbXTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gbnVsbDtcbiAgICB9XG5cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhwID09PSAnKicpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwID0gLy4rL2k7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNSZWdFeHAodGhpcy5leHApKSB7XG4gICAgICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuc2NvcGUsXG4gICAgICAgICAgICAgICAga2V5OiB0aGlzLmV4cFxuICAgICAgICAgICAgfV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXN0ID0gcGFyc2VFeHAodGhpcy5leHApO1xuXG4gICAgICAgIGlmIChhc3QuaGFzQ0MoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgZGlydHlDaGVjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuZXhwXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhciBpdGVtcyA9IFtdLFxuICAgICAgICAvLyAgICAgaGFuZGxlciA9IG5ldyBHZXRQcm9wZXJ0eUhhbmRsZXIodHJ1ZSwgaXRlbXMpLFxuICAgICAgICAvLyAgICAgcHJveHkgPSBuZXcgUHJveHkodGhpcy5zY29wZSwgaGFuZGxlcik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGNvbXB1dGUodGhpcy5leHAsIHByb3h5KTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gcmV0dXJuIGl0ZW1zO1xuXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29sbGVjdE1lbWJlcnM6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wdXRlKHRoaXMuZXhwLCB0aGlzLnNjb3BlLCBvcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gb3B0aW9ucy5tZW1iZXJzO1xuICAgIH1cblxuICAgIHN0YXJ0KG9ic2VydmVyLCBhY3Rpb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy51cGRhdGVNZW1iZXIoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVNZW1iZXIoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnBhcnNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uZGlydHlDaGVjaykge1xuICAgICAgICAgICAgICAgIHZhciBkaWdlc3QgPSBuZXcgRXhwV2F0Y2hlcihzZWxmLnNjb3BlLCBpdGVtLmtleSk7XG4gICAgICAgICAgICAgICAgc2VsZi5kaWdlc3RzLnB1c2goZGlnZXN0KTtcbiAgICAgICAgICAgICAgICBzZWxmLnN0YXJ0RGlnZXN0KGRpZ2VzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbWVtYmVyID0gbmV3IE1lbWJlcldhdGNoZXIoc2VsZi5zY29wZSwgaXRlbS50YXJnZXQsIGl0ZW0ua2V5LCBpdGVtLnRhcmdldEtleSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYubWVtYmVyc1ttZW1iZXIuaWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubWVtYmVyc1ttZW1iZXIuaWRdID0gbWVtYmVyO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnN0YXJ0TWVtYmVyKG1lbWJlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydERpZ2VzdChkaWdlc3QpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGRpZ2VzdC5zdGFydChmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgc2VsZi5hY3Rpb24uY2FsbCh0aGlzLCBhcmdzKTtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICBzdGFydE1lbWJlcihtZW1iZXIpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIG1lbWJlci5zdGFydChzZWxmLm9ic2VydmVyLCBmdW5jdGlvbiAocHJvcCwgYXJncykge1xuICAgICAgICAgICAgdmFyIGNoYW5nZUtleSA9IHByb3A7XG5cbiAgICAgICAgICAgIGlmIChtZW1iZXIudGFyZ2V0S2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VLZXkgPSBtZW1iZXIudGFyZ2V0S2V5ICsgJy4nICsgcHJvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yRWFjaChzZWxmLm1lbWJlcnMsIGZ1bmN0aW9uIChtZW1iZXJXYXRjaGVyLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBtZW1iZXJXYXRjaGVyLnVwZGF0ZShjaGFuZ2VLZXkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHNlbGYudXBkYXRlTWVtYmVyKCk7XG4gICAgICAgICAgICBzZWxmLmFjdGlvbi5jYWxsKHRoaXMsIHByb3AsIGFyZ3MpO1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGZvckVhY2godGhpcy5tZW1iZXJzLCBmdW5jdGlvbiAobWVtYmVyLCBrZXkpIHtcbiAgICAgICAgICAgIG1lbWJlci5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpZ2VzdHMuZm9yRWFjaChmdW5jdGlvbiAoZGlnZXN0KSB7XG4gICAgICAgICAgICBkaWdlc3QuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuZGlnZXN0cyA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgT2JqZWN0T2JzZXJ2ZXIoKTtcbiAgICAgICAgdGhpcy53YXRjaGVycyA9IFtdO1xuICAgIH1cblxuICAgIHdhdGNoKG9iaiwgZXhwLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgd2F0Y2hlciA9IHRoaXMuY3JlYXRlV2F0Y2hlcihvYmosIGV4cCk7XG5cbiAgICAgICAgd2F0Y2hlci5zdGFydCh0aGlzLm9ic2VydmVyLCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3YXRjaGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlV2F0Y2hlcih3YXRjaGVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZShvYmosIGV4cCwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIHdhdGNoZXIgPSB0aGlzLmNyZWF0ZVdhdGNoZXIob2JqLCBleHApO1xuXG4gICAgICAgIHdhdGNoZXIuc3RhcnQodGhpcy5vYnNlcnZlciwgYWN0aW9uLCB7XG4gICAgICAgICAgICBiZWZvcmVDaGFuZ2VkOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3YXRjaGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlV2F0Y2hlcih3YXRjaGVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjcmVhdGVXYXRjaGVyKG9iaiwgZXhwKSB7XG4gICAgICAgIHZhciB3YXRjaGVyID0gbmV3IFdhdGNoZXIob2JqLCBleHApO1xuXG4gICAgICAgIHRoaXMud2F0Y2hlcnMucHVzaCh3YXRjaGVyKTtcblxuICAgICAgICByZXR1cm4gd2F0Y2hlcjtcbiAgICB9XG5cbiAgICByZW1vdmVXYXRjaGVyKHdhdGNoZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy53YXRjaGVycy5pbmRleE9mKHdhdGNoZXIpO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVDaGFuZ2VkKG9iaiwgcHJvcCwgYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlci5maXJlQ2hhbmdlZChvYmosIHByb3AsIGFyZ3MpO1xuICAgIH1cblxuICAgIGZpcmVDaGFuZ2luZyhvYmosIHByb3AsIGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXIuZmlyZUNoYW5naW5nKG9iaiwgcHJvcCwgYXJncyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy53YXRjaGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3YXRjaGVyKSB7XG4gICAgICAgICAgICB3YXRjaGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMud2F0Y2hlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLm9ic2VydmVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgeyBQcm9wZXJ0eU9ic2VydmVyLCBPYnNlcnZlciB9OyIsImltcG9ydCB7IFNldFByb3BlcnR5SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcic7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgJyQnLCB7XHJcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHRoaXMsIG5ldyBTZXRQcm9wZXJ0eUhhbmRsZXIoKSk7XHJcbiAgICB9LFxyXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgIGVudW1lcmFibGU6IGZhbHNlXHJcbn0pOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgVk5vZGVUeXBlLCBWTm9kZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBCaW5kaW5nIH0gZnJvbSAnLi9iaW5kaW5nJztcblxuY2xhc3MgVGV4dE5vZGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFZOb2RlVHlwZS50ZXh0LCAnI3RleHQnKTtcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gbmV3IEJpbmRpbmcoKTtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgY29tcGlsZSgpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5nLmJpbmQodGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cblxuICAgIGxpbmsoc2NvcGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuYmluZGluZy5zZXRTY29wZShzY29wZSk7XG5cbiAgICAgICAgdGhpcy5iaW5kaW5nLm9ic2VydmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmluZGluZy5kZXRlY3QoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuaHRtbEVsZW1lbnQsIHRoaXMucmVuZGVyKHRoaXMuYmluZGluZy52YWx1ZSkpO1xuICAgIH1cblxuICAgIHJlbmRlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5odG1sRWxlbWVudDtcbiAgICB9XG5cbiAgICBnZXRPdXRlclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVZhbHVlO1xuICAgIH1cblxuICAgIGdldElubmVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XG4gICAgfVxuXG4gICAgcmVtb3ZlSHRtbEVsZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmh0bWxFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZU5vZGUodGhpcy5odG1sRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJpbmRpbmcuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmJpbmRpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVGV4dE5vZGUgfTsiLCJpbXBvcnQgeyB0eXBlQ29uc3QsIGluamVjdG9yIH0gZnJvbSAnLi4vdmlldydcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudChtZXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gbWV0YS5zZWxlY3RvciB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb25zdHJ1Y3Rvcih0eXBlQ29uc3QuY29tcG9uZW50LCBzZWxlY3RvciwgdGFyZ2V0LCBtZXRhKTtcbiAgICB9O1xufSIsImltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3J1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlKG1ldGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBtZXRhLnNlbGVjdG9yIHx8IHRhcmdldC5uYW1lO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckNvbnN0cnVjdG9yKHR5cGVDb25zdC5kaXJlY3RpdmUsIHNlbGVjdG9yLCB0YXJnZXQsIG1ldGEpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgdHlwZUNvbnN0LCBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnXG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIobWV0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IG1ldGEuc2VsZWN0b3IgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyQ29uc3RydWN0b3IodHlwZUNvbnN0LmZpbHRlciwgc2VsZWN0b3IsIHRhcmdldCwgbWV0YSk7XG4gICAgfTtcbn0iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZpbHRlcic7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UnOyIsImltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3J1xuXG5leHBvcnQgZnVuY3Rpb24gc2VydmljZShtZXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gbWV0YS5zZWxlY3RvciB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb25zdHJ1Y3Rvcih0eXBlQ29uc3Quc2VydmljZSwgc2VsZWN0b3IsIHRhcmdldCwgbWV0YSk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1iaW5kJ1xufSlcbmNsYXNzIEJpbmREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB0aGlzLmJpbmQoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgfVxuXG4gICAgYmluZCgpIHtcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLWVtYmVkJ1xufSlcbmNsYXNzIEVtYmVkRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNvbXBpbGUob3B0aW9ucykge1xuICAgICAgICB2YXIgZW1iZWRUcGwgPSBvcHRpb25zLmdldEVtYmVkVHBsKCk7XG4gICAgICAgIGlmIChlbWJlZFRwbCkge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5zZXRJbm5lclRwbChlbWJlZFRwbCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24taGlkZScsXG4gICAgaW5qZWN0OiB7XG4gICAgICAgICAgICAkYW5pbWF0ZTogJyRhbmltYXRlJ1xuICAgIH1cbn0pXG5jbGFzcyBIaWRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsRGlzcGxheSA9IG51bGw7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbERpc3BsYXkgPSB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSkge1xuICAgICAgICAgICAgdGhpcy4kYW5pbWF0ZS5sZWF2ZSh0aGlzLiRlbGVtZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kYW5pbWF0ZS5lbnRlcih0aGlzLiRlbGVtZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHNlbGYuaW5pdGlhbERpc3BsYXk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLWlmJyxcbiAgICBpbmplY3Q6IHtcbiAgICAgICAgJGFuaW1hdGU6ICckYW5pbWF0ZSdcbiAgICB9XG59KVxuY2xhc3MgSWZEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ24taWYnKTtcblxuICAgICAgICBpZiAoIXRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpKSB7XG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLiRodG1sRWxlbWVudCwgdGhpcy5odG1sQ29tbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGh0bWxFbGVtZW50LnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGFuaW1hdGUuZW50ZXIodGhpcy4kZWxlbWVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShzZWxmLmh0bWxDb21tZW50LCBzZWxmLiRodG1sRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kaHRtbEVsZW1lbnQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYW5pbWF0ZS5sZWF2ZSh0aGlzLiRlbGVtZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHNlbGYuJGh0bWxFbGVtZW50LCBzZWxmLmh0bWxDb21tZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IG51bGw7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vYmluZCdcbmV4cG9ydCAqIGZyb20gJy4vZW1iZWQnXG5leHBvcnQgKiBmcm9tICcuL2hpZGUnXG5leHBvcnQgKiBmcm9tICcuL2lmJ1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCdcbmV4cG9ydCAqIGZyb20gJy4vcmVwZWF0J1xuZXhwb3J0ICogZnJvbSAnLi9zaG93J1xuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSdcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJ1xuZXhwb3J0ICogZnJvbSAnLi9zdGF0ZSdcbmV4cG9ydCAqIGZyb20gJy4vbmFtZSdcbmV4cG9ydCAqIGZyb20gJy4vdmlldydcbmV4cG9ydCAqIGZyb20gJy4vdmlldy1vcHRpb25zJyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tbW9kZWwnLFxuICAgIGluamVjdDoge1xuICAgICAgICBvcHRpb25zOiAnJG1vZGVsT3B0aW9ucydcbiAgICB9XG59KVxuY2xhc3MgTW9kZWxEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiR2aWV3VmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLiRtb2RlbFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy4kcGFyc2VycyA9IFtdO1xuICAgICAgICB0aGlzLiRmb3JtYXR0ZXJzID0gW107XG4gICAgICAgIHRoaXMuJHZpZXdDaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy4kdmFsaWRhdG9ycyA9IFtdO1xuICAgICAgICB0aGlzLiRmZWVkYmFjayA9ICcnO1xuICAgICAgICB0aGlzLiRwcmlzdGluZSA9IHRydWU7XG4gICAgICAgIHRoaXMuJGRpcnR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kaW52YWxpZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZXRWaWV3VmFsdWUoKTtcblxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNldE1vZGVsVmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNNZXNzZW5nZXIodGhpcy4kY29tcG9uZW50LmNoYW5nZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRjb21wb25lbnQuY2hhbmdlLm9uKGZ1bmN0aW9uIChlLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0TW9kZWxWYWx1ZShhcmdzLm5ld3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9lbnQgJyArIHRoaXMuJGNvbXBvbmVudC4kJG1ldGEuc2VsZWN0b3IgKyAnbXVzdCBkZWZpbmUgW2NoYW5nZV0gZXZlbnQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnNldFZpZXdWYWx1ZSgpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kcGFyc2VycyA9IG51bGw7XG4gICAgICAgIHRoaXMuJGZvcm1hdHRlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLiR2aWV3Q2hhbmdlTGlzdGVuZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy4kdmFsaWRhdG9ycyA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0Vmlld1ZhbHVlKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy4kbW9kZWxWYWx1ZSA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xuXG4gICAgICAgIHZhciB2aWV3VmFsdWUgPSB0aGlzLiRtb2RlbFZhbHVlO1xuXG4gICAgICAgIHRoaXMuJHZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuY2FsbChzZWxmLCBzZWxmLiRtb2RlbFZhbHVlLCBzZWxmLiR2aWV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRmb3JtYXR0ZXJzLmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdHRlcikge1xuICAgICAgICAgICAgdmlld1ZhbHVlID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmlld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHZpZXdWYWx1ZSAhPT0gdmlld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiR2aWV3VmFsdWUgPSB2aWV3VmFsdWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRjb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnZhbHVlID0gdGhpcy4kbW9kZWxWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC4kc2V0QXR0cigndmFsdWUnLCB0aGlzLiRtb2RlbFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlQ3NzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG5cbiAgICBzZXRNb2RlbFZhbHVlKHZpZXdWYWx1ZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZXREaXJ0eSh0cnVlKTtcblxuICAgICAgICB0aGlzLiR2aWV3VmFsdWUgPSB2aWV3VmFsdWU7XG5cbiAgICAgICAgdGhpcy4kdmlld0NoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbChzZWxmLCB2aWV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IHRoaXMuJHZpZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLiRwYXJzZXJzLmZvckVhY2goZnVuY3Rpb24gKHBhcnNlcikge1xuICAgICAgICAgICAgbW9kZWxWYWx1ZSA9IHBhcnNlci5jYWxsKHNlbGYsIG1vZGVsVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy4kbW9kZWxWYWx1ZSAhPT0gbW9kZWxWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy4kbW9kZWxWYWx1ZSA9IG1vZGVsVmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGwoc2VsZiwgc2VsZi4kbW9kZWxWYWx1ZSwgc2VsZi4kdmlld1ZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLiRiaW5kaW5nLmFzc2lnbih0aGlzLiRtb2RlbFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUNzcygpIHtcbiAgICAgICAgdmFyIGVsZSA9IHRoaXMuJGh0bWxFbGVtZW50LFxuICAgICAgICAgICAgY3NzID0gdGhpcy5vcHRpb25zLmNzc0NsYXNzO1xuXG4gICAgICAgIGlmICh0aGlzLiRkaXJ0eSkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLmRpcnR5KTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5wcmlzdGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MucHJpc3RpbmUpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmRpcnR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiR2YWxpZCkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy52YWxpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZSgpIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLiRodG1sRWxlbWVudC5uYW1lO1xuXG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNjb3BlID0gdGhpcy4kYmluZGluZy5zY29wZTtcblxuICAgICAgICBpZiAoc2NvcGVbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgc2NvcGUuJFtuYW1lXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0YXRlID0gc2NvcGVbbmFtZV0uJDtcblxuICAgICAgICBzdGF0ZS4kcHJpc3RpbmUgPSB0aGlzLiRwcmlzdGluZTtcbiAgICAgICAgc3RhdGUuJGRpcnR5ID0gdGhpcy4kZGlydHk7XG4gICAgICAgIHN0YXRlLiR2YWxpZCA9IHRoaXMuJHZhbGlkO1xuICAgICAgICBzdGF0ZS4kaW52YWxpZCA9IHRoaXMuJGludmFsaWQ7XG4gICAgICAgIHN0YXRlLiRmZWVkYmFjayA9IHRoaXMuJGZlZWRiYWNrO1xuICAgIH1cblxuICAgIHNldERpcnR5KGRpcnR5KSB7XG4gICAgICAgIHRoaXMuJGRpcnR5ID0gZGlydHk7XG4gICAgICAgIHRoaXMuJHByaXN0aW5lID0gIWRpcnR5O1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3NzKCk7XG4gICAgfVxuXG4gICAgc2V0VmFsaWRpdHkodmFsaWQsIGZlZWRiYWNrKSB7XG4gICAgICAgIHRoaXMuJHZhbGlkID0gdmFsaWQ7XG4gICAgICAgIHRoaXMuJGludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHRoaXMuJGZlZWRiYWNrID0gZmVlZGJhY2s7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDc3MoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICduLW5hbWUnXHJcbn0pXHJcbmNsYXNzIE5hbWVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiRvdXRwdXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy4kYmluZGluZy50ZXh0O1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzLiRzY29wZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNjb3BlLiRbdGhpcy5uYW1lXSA9IHRoaXMuJGNvbXBvbmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNjb3BlLiRbdGhpcy5uYW1lXSA9IHRoaXMuJGVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5uYW1lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kc2NvcGVbdGhpcy5uYW1lXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldENtcChjbXApIHtcclxuICAgICAgICB0aGlzLiRzY29wZS4kW3RoaXMubmFtZV0gPSBjbXA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIENvbXBvbmVudCB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tcmVwZWF0J1xufSlcbmNsYXNzIFJlcGVhdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLml0ZW1FeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmNtcEl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuaGVhZGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb290ZXIgPSBudWxsO1xuICAgIH1cblxuICAgIG9uQ29tcGlsZSgpIHtcbiAgICAgICAgdmFyIGFyZyA9IHRoaXMuJGF0dHIubm9kZVZhbHVlO1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuJGVsZW1lbnQ7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gL14oW2Etel9dK1xcdyspXFxzK2luXFxzKyguKykkL2k7XG4gICAgICAgIHZhciByZXN1bHQgPSBwYXR0ZXJuLmV4ZWMoYXJnKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbi1yZXBlYXQ6IHBhcmFtZXRlciBpcyBub3QgdmFsaWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbUV4cCA9IHJlc3VsdFsxXTtcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9IHJlc3VsdFsyXTtcblxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLiRhdHRyKTtcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBlbGVtZW50LmdldE91dGVyVHBsKCk7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IGVsZW1lbnQuY3JlYXRlQ29ubmVjdGlvbignbi1yZXBlYXQnLCBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHNjb3BlLiRldmFsKHNlbGYuaXRlbXNFeHApO1xuXG4gICAgICAgICAgICBzZWxmLnNjb3BlID0gc2NvcGU7XG4gICAgICAgICAgICBzZWxmLnNldERhdGFJdGVtcyhpdGVtcyk7XG4gICAgICAgICAgICBzZWxmLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0OiBuLXJlcGVhdCcpO1xuICAgICAgICAgICAgc2VsZi5mb290ZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdlbmQ6IG4tcmVwZWF0Jyk7XG5cbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYuaGVhZGVyKTtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYuZm9vdGVyKTtcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbGVtZW50LCBjb25uZWN0aW9uKTtcbiAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XG5cbiAgICAgICAgY29ubmVjdGlvbi5vbkluc2VydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYucmVuZGVyKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29ubmVjdGlvbi5vbkRldGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHNlbGYuc2NvcGUuJGV2YWwoc2VsZi5pdGVtc0V4cCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmRhdGFJdGVtcyAhPT0gaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNldERhdGFJdGVtcyhpdGVtcyk7XG4gICAgICAgICAgICAgICAgc2VsZi5yZW5kZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuY21wSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRTY29wZSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFNjb3BlLiRkZXRlY3QoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25uZWN0aW9uLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmNtcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGNtcEl0ZW0pIHtcbiAgICAgICAgICAgIGNtcEl0ZW0uJGRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY21wSXRlbXMgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhSXRlbXMgPSBudWxsO1xuICAgICAgICB0aGlzLmhlYWRlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vdGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXREYXRhSXRlbXModmFsdWUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhSXRlbXMgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjb3BlLiR3YXRjaCh0aGlzLmRhdGFJdGVtcywgJ2xlbmd0aCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENtcEl0ZW0oZGF0YUl0ZW0pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBmaWx0ZXJzID0gdGhpcy5jbXBJdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtW3NlbGYuaXRlbUV4cF0gPT09IGRhdGFJdGVtO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhcmdldCA9IGZpbHRlcnNbMF07XG5cbiAgICAgICAgdGhpcy5jbXBJdGVtcyA9IHRoaXMuY21wSXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVtzZWxmLml0ZW1FeHBdICE9PSBkYXRhSXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB2YXIgbmV3Q21wSXRlbXMgPSBbXTtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcblxuICAgICAgICB1dGlscy5mb3JFYWNoKHNlbGYuZGF0YUl0ZW1zLCBmdW5jdGlvbiAoaXRlbSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgY21wSXRlbSA9IHNlbGYuZ2V0Q21wSXRlbShpdGVtKTtcblxuICAgICAgICAgICAgaWYgKGNtcEl0ZW0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNtcEl0ZW0gPSBuZXcgQ29tcG9uZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHNlbGYuaXRlbVRlbXBsYXRlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY21wSXRlbVtzZWxmLml0ZW1FeHBdID0gaXRlbTtcbiAgICAgICAgICAgICAgICBjbXBJdGVtLiRpbmhlcml0Q21wKHNlbGYuc2NvcGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbXBJdGVtWyckaW5kZXgnXSA9IGluZGV4O1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY21wSXRlbS4kcmVuZGVyKCkpO1xuICAgICAgICAgICAgbmV3Q21wSXRlbXMucHVzaChjbXBJdGVtKTtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzZWxmLmNtcEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNlbGYuY21wSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAocmVwZWF0SXRlbSkge1xuICAgICAgICAgICAgICAgIHJlcGVhdEl0ZW0uJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5jbXBJdGVtcyA9IG5ld0NtcEl0ZW1zO1xuICAgICAgICB1dGlscy5yZW1vdmVOb2RlQmV0d2VlbihzZWxmLmhlYWRlciwgc2VsZi5mb290ZXIpO1xuICAgICAgICBzZWxmLmZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmcmFnbWVudCwgc2VsZi5mb290ZXIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXNob3cnLFxuICAgIGluamVjdDoge1xuICAgICAgICAkYW5pbWF0ZTogJyRhbmltYXRlJ1xuICAgIH1cbn0pXG5jbGFzcyBTaG93RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsRGlzcGxheSA9IG51bGw7XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbERpc3BsYXkgPSB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSkge1xuICAgICAgICAgICAgdGhpcy4kYW5pbWF0ZS5lbnRlcih0aGlzLiRlbGVtZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHNlbGYuaW5pdGlhbERpc3BsYXk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGFuaW1hdGUubGVhdmUodGhpcy4kZWxlbWVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuJGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLWNoZWNrZWQnXG59KVxuY2xhc3MgQ2hlY2tlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2NoZWNrZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1kaXNhYmxlZCdcbn0pXG5jbGFzcyBEaXNhYmxlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2Rpc2FibGVkJyk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vY2hlY2tlZCdcbmV4cG9ydCAqIGZyb20gJy4vZGlzYWJsZWQnXG5leHBvcnQgKiBmcm9tICcuL3JlYWRvbmx5J1xuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3RlZCciLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXJlYWRvbmx5J1xufSlcbmNsYXNzIFJlYWRvbmx5RGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigncmVhZG9ubHknKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zZWxlY3RlZCdcbn0pXG5jbGFzcyBTZWxlY3RlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3NlbGVjdGVkJyk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuXG5jbGFzcyBTdGF0ZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoYXR0ck5hbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hdHRyTmFtZSA9IGF0dHJOYW1lO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB0aGlzLnBlcmZvcm0oKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtKCk7XG4gICAgfVxuXG4gICAgcGVyZm9ybSgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuJGh0bWxFbGVtZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kaHRtbEVsZW1lbnQuaGFzQXR0cmlidXRlKHRoaXMuYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMuYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IiwiaW1wb3J0IHsgQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2NsYXNzJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tY2xhc3MtZXZlbidcclxufSlcclxuY2xhc3MgQ2xhc3NFdmVuRGlyZWN0aXZlIGV4dGVuZHMgQ2xhc3NEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZS4kaW5kZXggJiAxID09PSAxO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2NsYXNzJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tY2xhc3Mtb2RkJ1xyXG59KVxyXG5jbGFzcyBDbGFzc09kZERpcmVjdGl2ZSBleHRlbmRzIENsYXNzRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuJGluZGV4ICYgMSA9PT0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxpdHknO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tY2xhc3MnXHJcbn0pXHJcbmNsYXNzIENsYXNzRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcclxuICAgICAgICB0aGlzLmluaXRpYWxDbGFzc0xpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydCgpIHtcclxuICAgICAgICB0aGlzLnBhcnNlQ2xhc3MoKTtcclxuICAgICAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoQXJyYXkoYXJyLCBhY3Rpb24pIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMudW53YXRjaEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuJHdhdGNoKGFyciwgJ2xlbmd0aCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1bndhdGNoQXJyYXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudW53YXRjaCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW53YXRjaC5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy51bndhdGNoQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0VG9BcnJheSh0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VDbGFzcygpIHtcclxuICAgICAgICB2YXIgY2xhc3NUZXh0ID0gdGhpcy4kZ2V0QXR0clZhbHVlKCdjbGFzcycpO1xyXG5cclxuICAgICAgICBpZiAoIWNsYXNzVGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmluaXRpYWxDbGFzc0xpc3QgPSB0aGlzLnRleHRUb0FycmF5KGNsYXNzVGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2xhc3NMaXN0KGFycikge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmluaXRpYWxDbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBzZWxmLiRodG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHNlbGYuJGh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2xhc3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2tpcCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAgICAgbmV3QXJyID0gW10sXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIG5ld0FyciA9IHRoaXMudGV4dFRvQXJyYXkodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdBcnIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2hBcnJheSh2YWx1ZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0Q2xhc3NMaXN0KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgb2Ygbi1jbGFzcyBzaG91bGQgYmUgc3RyaW5nIG9yIGFycmF5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3NMaXN0KG5ld0Fycik7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcCgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IENsYXNzRGlyZWN0aXZlIH1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9jbGFzcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3MtZXZlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3Mtb2RkJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUtZXZlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUtb2RkJzsiLCJpbXBvcnQgeyBTdHlsZURpcmVjdGl2ZSB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1zdHlsZS1ldmVuJ1xyXG59KVxyXG5jbGFzcyBTdHlsZUV2ZW5EaXJlY3RpdmUgZXh0ZW5kcyBTdHlsZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlLiRpbmRleCAmIDEgPT09IDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdHlsZURpcmVjdGl2ZSB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi1zdHlsZS1vZGQnXHJcbn0pXHJcbmNsYXNzIFN0eWxlT2RkRGlyZWN0aXZlIGV4dGVuZHMgU3R5bGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZS4kaW5kZXggJiAxID09PSAwO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbGl0eSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxuICAgIHNlbGVjdG9yOiAnbi1zdHlsZSdcbn0pXG5jbGFzcyBTdHlsZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5pdGlhbFN0eWxlID0ge307XG4gICAgfVxuXG4gICAgb25JbnNlcnQoKSB7XG4gICAgICAgIHRoaXMucGFyc2VTdHlsZSgpO1xuICAgICAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW53YXRjaE9iaigpO1xuICAgIH1cblxuICAgIHdhdGNoT2JqKG9iaiwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnVud2F0Y2hPYmooKTtcbiAgICAgICAgdGhpcy4kc2NvcGUuJHdhdGNoKG9iaiwgJyonLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1bndhdGNoT2JqKCkge1xuICAgICAgICBpZiAodGhpcy51bndhdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudW53YXRjaC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlU3R5bGUoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuJGdldEF0dHJWYWx1ZSgnc3R5bGUnKTtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXRpYWxTdHlsZSA9IHRoaXMudGV4dFRvT2JqZWN0KHZhbHVlKTtcbiAgICB9XG5cbiAgICB0ZXh0VG9PYmplY3QodGV4dCkge1xuICAgICAgICB2YXIgb2JqID0ge30sXG4gICAgICAgICAgICBsaXN0ID0gdGV4dC5zcGxpdCgnOycpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnRyaW0oKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgc3ViSXRlbXMgPSBpdGVtLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHN1Ykl0ZW1zWzBdO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3ViSXRlbXNbMV07XG4gICAgICAgICAgICBvYmpbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBhcHBseVN0eWxlKG9iaikge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuJGh0bWxFbGVtZW50O1xuXG4gICAgICAgIC8vIGNsZWFuIHVwIHN0eWxlXG4gICAgICAgIGVsZW1lbnQuc3R5bGUgPSAnJztcblxuICAgICAgICAvLyBzZXQgbmV3IHN0eWxlXG4gICAgICAgIHV0aWxzLmZvckVhY2godGhpcy5pbml0aWFsU3R5bGUsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHV0aWxzLmZvckVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFN0eWxlKCkge1xuICAgICAgICBpZiAodGhpcy5za2lwKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgbmV3U3R5bGUgPSB7fTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy4kYmluZGluZy5jb21wdXRlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXdTdHlsZSA9IHRoaXMudGV4dFRvT2JqZWN0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG5ld1N0eWxlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaE9iaih2YWx1ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFwcGx5U3R5bGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgb2Ygbi1zdHlsZSBzaG91bGQgYmUgc3RyaW5nIG9yIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcHBseVN0eWxlKG5ld1N0eWxlKTtcbiAgICB9XG5cbiAgICBza2lwKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgeyBTdHlsZURpcmVjdGl2ZSB9XG4iLCJleHBvcnQgKiBmcm9tICcuL3N3aXRjaCdcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoLWRlZmF1bHQnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC13aGVuJyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxpdHknO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tc3dpdGNoLWRlZmF1bHQnXG59KVxuY2xhc3MgU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zd2l0Y2hXaGVuRGlycyA9IFtdO1xuICAgIH1cblxuICAgIGluaXRTd2l0Y2hXaGVuRGlycygpIHtcbiAgICAgICAgdmFyIHZFbGUgPSB0aGlzLiRlbGVtZW50O1xuXG4gICAgICAgIHdoaWxlICh2RWxlLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgd2hlbkRpciA9IHZFbGUucHJldmlvdXNTaWJsaW5nLmdldERpcmVjdGl2ZSgnbi1zd2l0Y2gtd2hlbicpO1xuXG4gICAgICAgICAgICBpZiAod2hlbkRpciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hXaGVuRGlycy5wdXNoKHdoZW5EaXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2RWxlID0gdkVsZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnN3aXRjaFdoZW5EaXJzLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlzTWF0Y2g7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5pbml0U3dpdGNoV2hlbkRpcnMoKTtcbiAgICAgICAgdGhpcy5pc01hdGNoID0gdGhpcy5tYXRjaCgpO1xuICAgICAgICB0aGlzLmh0bWxDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbi1zd2l0Y2gtZGVmYXVsdCcpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc01hdGNoKSB7XG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLiRodG1sRWxlbWVudCwgdGhpcy5odG1sQ29tbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaFdoZW5EaXJzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uaXNNYXRjaENoYW5nZWQub24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuaXNNYXRjaCwgbmV3VmFsdWUgPSB0aGlzLm1hdGNoKCk7XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pc01hdGNoID0gbmV3VmFsdWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kaHRtbEVsZW1lbnQucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuaHRtbENvbW1lbnQsIHRoaXMuJGh0bWxFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kaHRtbEVsZW1lbnQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuJGh0bWxFbGVtZW50LCB0aGlzLmh0bWxDb21tZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnN3aXRjaFdoZW5EaXJzID0gbnVsbDtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi8uLi91dGlsaXR5JztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICduLXN3aXRjaC13aGVuJ1xufSlcbmNsYXNzIFN3aXRjaFdoZW5EaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5odG1sQ29tbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3dpdGNoRGlyID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc01hdGNoQ2hhbmdlZCA9IG5ldyBNZXNzZW5nZXIoKTtcbiAgICB9XG5cbiAgICBpbml0U3dpdGNoRGlyKCkge1xuICAgICAgICB2YXIgc3dpdGNoRGlyID0gdGhpcy4kZWxlbWVudC5wYXJlbnROb2RlLmdldERpcmVjdGl2ZSgnbi1zd2l0Y2gnKTtcblxuICAgICAgICBpZiAoc3dpdGNoRGlyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZSBuLXN3aXRjaCBkaXJlY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoRGlyID0gc3dpdGNoRGlyO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5pbml0U3dpdGNoRGlyKCk7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLXN3aXRjaC13aGVuJyk7XG4gICAgICAgIHRoaXMuaXNNYXRjaCA9ICh0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSA9PT0gdGhpcy5zd2l0Y2hEaXIudmFsdWUpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc01hdGNoKSB7XG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLiRodG1sRWxlbWVudCwgdGhpcy5odG1sQ29tbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaERpci52YWx1ZUNoYW5nZWQub24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLmlzTWF0Y2gsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9ICh0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKSA9PT0gdGhpcy5zd2l0Y2hEaXIudmFsdWUpO1xuXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNYXRjaCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5pc01hdGNoQ2hhbmdlZC5maXJlKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kaHRtbEVsZW1lbnQucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuaHRtbENvbW1lbnQsIHRoaXMuJGh0bWxFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kaHRtbEVsZW1lbnQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuJGh0bWxFbGVtZW50LCB0aGlzLmh0bWxDb21tZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaHRtbENvbW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnN3aXRjaERpciA9IG51bGw7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uLy4uL3V0aWxpdHknO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcbiAgICBzZWxlY3RvcjogJ24tc3dpdGNoJ1xufSlcbmNsYXNzIFN3aXRjaERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IG5ldyBNZXNzZW5nZXIoKTtcbiAgICB9XG5cbiAgICBvbkluc2VydCgpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLiRiaW5kaW5nLmNvbXB1dGUoKTtcblxuICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZC5maXJlKHtcbiAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSBcIi4uL3ZpZXdcIjtcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSBcIi4uL2RlY29yYXRvclwiO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnbi12aWV3LW9wdGlvbnMnXHJcbn0pXHJcbmNsYXNzIFZpZXdPcHRpb25zRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhck9wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU9wdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyT3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gXCIuLi92aWV3XCI7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gXCIuLi9kZWNvcmF0b3JcIjtcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZScsXHJcbiAgICBzZWxlY3RvcjogJ24tdmlldycsXHJcbiAgICBpbmplY3Q6IHtcclxuICAgICAgICAkYW5pbWF0ZTogJyRhbmltYXRlJ1xyXG4gICAgfVxyXG59KVxyXG5jbGFzcyBWaWV3RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4kcHJpb3JpdHkgPSA1O1xyXG4gICAgICAgIHRoaXMubmFtZURpciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubmV4dENvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbnRlckFuaW1hdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sZWF2ZUFuaW1hdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lRGlyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnZpZXdPcHRpb25zRGlyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubmFtZURpciA9IHRoaXMuJGVsZW1lbnQuZ2V0RGlyZWN0aXZlKCduLW5hbWUnKTtcclxuICAgICAgICB0aGlzLnZpZXdPcHRpb25zRGlyID0gdGhpcy4kZWxlbWVudC5nZXREaXJlY3RpdmUoJ24tdmlldy1vcHRpb25zJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZXdPcHRpb25zRGlyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLnZpZXdPcHRpb25zRGlyLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VmlldyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcuJGRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZW50ZXJBbmltYXRpb24gJiYgdGhpcy5lbnRlckFuaW1hdGlvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5sZWF2ZUFuaW1hdGlvbiAmJiB0aGlzLmxlYXZlQW5pbWF0aW9uLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IHRoaXMuJGJpbmRpbmcuY29tcHV0ZSgpO1xyXG5cclxuICAgICAgICBpZiAoY29tcG9uZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZpZXcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxlYXZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5leHRDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5lbnRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5lbnRlckFuaW1hdGlvbiAmJiB0aGlzLmVudGVyQW5pbWF0aW9uLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGVhdmVBbmltYXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxlYXZlQW5pbWF0aW9uLmFuaW1hdGlvbkVuZC5vbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRvRW50ZXIoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLmRvRW50ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9FbnRlcigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSB0aGlzLiRiaW5kaW5nLnNjb3BlLiRjcmVhdGVDaGlsZENtcCh0aGlzLm5leHRDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm9uSW5pdCh0aGlzLmN1cnJlbnRWaWV3KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbnRlckFuaW1hdGlvbiA9IHRoaXMuJGFuaW1hdGUuZW50ZXIodGhpcy4kZWxlbWVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRWaWV3LiRtb3VudChzZWxmLiRodG1sRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHNlbGYuZW50ZXJBbmltYXRpb24gPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5uYW1lRGlyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lRGlyLnNldENtcCh0aGlzLmN1cnJlbnRWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGVhdmUoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmxlYXZlQW5pbWF0aW9uID0gdGhpcy4kYW5pbWF0ZS5sZWF2ZSh0aGlzLiRlbGVtZW50LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFZpZXcuJGRlc3Ryb3koKTtcclxuICAgICAgICAgICAgc2VsZi5sZWF2ZUFuaW1hdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBkZWNvcmF0b3IgZnJvbSAnLi9kZWNvcmF0b3InO1xuXG5leHBvcnQgeyBkZWNvcmF0b3IgfVxuZXhwb3J0ICogZnJvbSAnLi91dGlsaXR5JztcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XG5leHBvcnQgKiBmcm9tICcuL3BhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9hbmltYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zYW1wbGUnOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgTGV4ZXIgfSBmcm9tICcuL2xleGVyJztcblxudXRpbHMuaW5oZXJpdChIdG1sTGV4ZXIsIExleGVyKTtcbmZ1bmN0aW9uIEh0bWxMZXhlcihvcHRpb25zKSB7XG4gICAgSHRtbExleGVyLnN1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG59XG5cbkh0bWxMZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XG4gICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyB8fFxuICAgICAgICBjaCA9PT0gJ0AnIHx8IGNoID09PSAnOicgfHwgY2ggPT09ICcqJyk7XG59O1xuXG5IdG1sTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gsIGNwKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLScgfHwgY2ggPT09ICcuJztcbn07XG5cbkh0bWxMZXhlci5wcm90b3R5cGUuZXhwZWN0U3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHZhciBudW0gPSBzdHIubGVuZ3RoO1xuICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8PSB0aGlzLnRleHQubGVuZ3RoKSA/IChzdHIgPT09IHRoaXMudGV4dC5zdWJzdHIodGhpcy5pbmRleCwgbnVtKSkgOiBmYWxzZTtcbn07XG5cbi8vIGh0bWwgY29tbWVudCBcIjwhLS1jb21tZW50LS0+XCJcbkh0bWxMZXhlci5wcm90b3R5cGUucmVhZENvbW1lbnQgPSBmdW5jdGlvbiAoYmVnaW4sIGVuZCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XG4gICAgdmFyIHN0cmluZyA9ICcnO1xuICAgIHZhciByYXdTdHJpbmcgPSBiZWdpbjtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xuICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoZW5kKSkge1xuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGVuZDtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgY29tbWVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgfVxuICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIGNvbW1lbnQnLCBzdGFydCk7XG59O1xuXG4vLyBodG1sIHRleHRcbkh0bWxMZXhlci5wcm90b3R5cGUucmVhZFRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgaWYgKChjaCA9PT0gJzwnICYmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikgfHwgY2gyID09PSAnLycpKSB8fCB0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICB0ZXh0VGFnOiB0cnVlXG4gICAgfSk7XG59O1xuXG4vLyBodG1sIHRhZ1xuSHRtbExleGVyLnByb3RvdHlwZS5yZWFkVGFnID0gZnVuY3Rpb24gKGJlZ2luLCBlbmQsIGNsb3NpbmcsIGRvY3R5cGUpIHtcbiAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGJlZ2luLCB0YWc6IHRydWUsIGNsb3Npbmc6IGNsb3NpbmcsIGJlZ2luOiB0cnVlLCBkb2N0eXBlOiBkb2N0eXBlIH0pO1xuICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xuICAgIHRoaXMucmVhZElkZW50KCk7XG5cbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcblxuICAgICAgICBpZiAoIWNsb3NpbmcpIHtcbiAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIHZhciBzdHIgPSBjaCArIGNoMjtcbiAgICAgICAgICAgIGlmIChzdHIgPT09ICcvJyArIGVuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogc3RyLCB0YWc6IHRydWUsIGNsb3Npbmc6IHRydWUsIGVuZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHN0ci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2ggPT09IGVuZCkge1xuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICAgICAgdGV4dDogZW5kLFxuICAgICAgICAgICAgICAgIHRhZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbG9zaW5nOiAhIWRvY3R5cGUgPyB0cnVlIDogY2xvc2luZyxcbiAgICAgICAgICAgICAgICBlbmQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnPScpIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogJz0nLCBlcXVhbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5IdG1sTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgdmFyIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICB2YXIgY2gzID0gdGhpcy5wZWVrKDIpO1xuICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkQ29tbWVudCgnPCEtLScsICctLT4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJzwnICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8JywgJz4nLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwvJykgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDMpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwvJywgJz4nLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCFET0NUWVBFJykpIHtcbiAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwhJywgJz4nLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignRE9DVFlQRSBpcyBub3QgYWxsb3dlZCcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVhZFRleHQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG59O1xuXG5leHBvcnQgeyBIdG1sTGV4ZXIgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7IERvY3VtZW50RnJhZ21lbnROb2RlLCBDb21tZW50Tm9kZSwgVGV4dE5vZGUsIERvY3VtZW50VHlwZU5vZGUsIEVsZW1lbnROb2RlLCBBdHRyTm9kZSB9IGZyb20gJy4uL2NvcmUnO1xuXG51dGlscy5pbmhlcml0KEh0bWxQYXJzZXIsIFBhcnNlcik7XG5mdW5jdGlvbiBIdG1sUGFyc2VyKGxleGVyLCBvcHRpb25zKSB7XG4gICAgSHRtbFBhcnNlci5zdXBlci5jYWxsKHRoaXMsIGxleGVyLCBvcHRpb25zKTtcbn1cblxuSHRtbFBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgIHZhciBmYXJnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50Tm9kZSgpO1xuICAgIHZhciBkb2N0eXBlLCBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLmRvY3R5cGUpIHtcbiAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdHlwZSA9IHRoaXMuZG9jdHlwZSgpO1xuICAgICAgICAgICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKGRvY3R5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBvbmx5IGFsbG93IG9uZVwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBpcyBub3QgYWxsb3dlZFwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xuICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgQ29tbWVudE5vZGUoKTtcbiAgICAgICAgICAgIGNvbW1lbnQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGZhcmdtZW50LiRwdXNoQ2hpbGQoY29tbWVudCk7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBUZXh0Tm9kZSgpO1xuICAgICAgICAgICAgdGV4dC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZCh0ZXh0KTtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xuICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZCh0aGlzLmVsZW1lbnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJpbXBvc3NpYmxlXCIsIHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZhcmdtZW50LiRidWlsZFNpYmxpbmcoKTtcblxuICAgIHJldHVybiBmYXJnbWVudC5jaGlsZE5vZGVzO1xufTtcblxuSHRtbFBhcnNlci5wcm90b3R5cGUuZG9jdHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm5leHQoKTtcbiAgICB2YXIgZG9jVHlwZSA9IG5ldyBEb2N1bWVudFR5cGVOb2RlKCk7XG4gICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICBkb2NUeXBlLm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgIH1cblxuICAgIHRoaXMuYXR0cnMoZG9jVHlwZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICBkb2NUeXBlLmNoaWxkTm9kZXMucHVzaChhdHRyKTtcbiAgICB9KTtcblxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jVHlwZTtcbn07XG5cbkh0bWxQYXJzZXIucHJvdG90eXBlLmVsZW1lbnQgPSBmdW5jdGlvbiAocCkge1xuICAgIHRoaXMubmV4dCgpO1xuICAgIHZhciBlbGUgPSBuZXcgRWxlbWVudE5vZGUoKTtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgIGVsZS5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICBlbGUuJHB1c2hBdHRyaWJ1dGUoYXR0cik7XG4gICAgfSk7XG5cbiAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIGVsZS5zZWxmQ2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBlbGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudHMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGVsZS4kcHVzaENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgIH1cblxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbiAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gdG9rZW4udGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZTtcbn07XG5cbkh0bWxQYXJzZXIucHJvdG90eXBlLmNoaWxkRWxlbWVudHMgPSBmdW5jdGlvbiAocCkge1xuICAgIHZhciBlbGVzID0gW107XG5cbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IENvbW1lbnROb2RlKCk7XG4gICAgICAgICAgICBjb21tZW50Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBlbGVzLnB1c2goY29tbWVudCk7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBUZXh0Tm9kZSgpO1xuICAgICAgICAgICAgdGV4dC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgZWxlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XG4gICAgICAgICAgICBlbGVzLnB1c2godGhpcy5lbGVtZW50KHApKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlcztcbn07XG5cbkh0bWxQYXJzZXIucHJvdG90eXBlLmF0dHJzID0gZnVuY3Rpb24gKHApIHtcbiAgICB2YXIgYXR0cnMgPSBbXTtcblxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhdHRyID0gbmV3IEF0dHJOb2RlKCk7XG5cbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGF0dHIubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgYXR0ci5vcmlnaW4gPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgaWYgKHRva2VuLmVxdWFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uY29uc3RhbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5ub2RlVmFsdWUgPSB0b2tlbi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGF0dHJzLnB1c2goYXR0cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJzO1xufTtcblxuSHRtbFBhcnNlci5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG4gICAgfVxuICAgIHJldHVybiB7fTtcbn07XG5cbkh0bWxQYXJzZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbmRleCsrO1xufTtcblxuZXhwb3J0IHsgSHRtbFBhcnNlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IHsgTGV4ZXIgfSBmcm9tICcuL2xleGVyJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7IEh0bWxMZXhlciB9IGZyb20gJy4vaHRtbC1sZXhlcic7XG5pbXBvcnQgeyBIdG1sUGFyc2VyIH0gZnJvbSAnLi9odG1sLXBhcnNlcic7XG5cbnZhciBwYXJzZU9wdGlvbnMgPSB7XG4gICAgaXNJZGVudGlmaWVyQ29udGludWU6IGZhbHNlLFxuICAgIGlzSWRlbnRpZmllclN0YXJ0OiBmYWxzZSxcbiAgICBsaXRlcmFsczoge1xuICAgICAgICBmYWxzZTogZmFsc2UsXG4gICAgICAgIG51bGw6IG51bGwsXG4gICAgICAgIHRydWU6IHRydWUsXG4gICAgICAgIHVuZGVmaW5lZDogdW5kZWZpbmVkXG4gICAgfVxufTtcblxuZnVuY3Rpb24gcGFyc2UoaHRtbCkge1xuICAgIHZhciBsZXhlciA9IG5ldyBIdG1sTGV4ZXIocGFyc2VPcHRpb25zKTtcbiAgICB2YXIgcGFyc2VyID0gbmV3IEh0bWxQYXJzZXIobGV4ZXIsIHBhcnNlT3B0aW9ucyk7XG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZShodG1sKTtcbn1cblxuZnVuY3Rpb24gY29tcGlsZShodG1sLCBvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgZ2V0RW1iZWRUcGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbnNDb21wb25lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlQ29tcG9uZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbnNEaXJlY3RpdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlRGlyZWN0aXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldHRpbmdzID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIG9wdGlvbnMpLFxuICAgICAgICBhc3ROb2RlcyA9IHBhcnNlKGh0bWwpO1xuXG4gICAgYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoYXN0Tm9kZSkge1xuICAgICAgICBhc3ROb2RlLmNvbXBpbGUoc2V0dGluZ3MpO1xuICAgIH0pO1xuICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcbiAgICAgICAgYXN0Tm9kZS5ub3RpZnlDb21waWxlZChzZXR0aW5ncyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICBzY29wZS4kJGNoaWxkRWxlbWVudHMgPSBhc3ROb2RlcztcblxuICAgICAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChhc3ROb2RlLmxpbmsoc2NvcGUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcbiAgICAgICAgICAgIGFzdE5vZGUubm90aWZ5TGlua2VkKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjb21wdXRlKGV4cCwgc2NvcGUsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVGaWx0ZXIobmFtZSk7XG4gICAgfTtcbiAgICBpZiAob3B0aW9ucy5jb2xsZWN0TWVtYmVycykge1xuICAgICAgICBvcHRpb25zLm1lbWJlcnMgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRXhwKGV4cCkuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRXhwKGV4cCkge1xuICAgIGlmIChleHAgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXhwID0gZXhwLnRyaW0oKTtcblxuICAgIGlmIChleHAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHAgPSBleHAucmVwbGFjZSgnJmd0OycsICc+JykucmVwbGFjZSgnJmx0OycsICc8Jyk7XG5cbiAgICB2YXIgbGV4ZXIgPSBuZXcgTGV4ZXIocGFyc2VPcHRpb25zKTtcbiAgICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcihsZXhlciwgcGFyc2VPcHRpb25zKTtcblxuICAgIHJldHVybiBwYXJzZXIucGFyc2UoZXhwKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VBc3NpZ25tZW50KGV4cCwgc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgYXN0ID0gcGFyc2VFeHAoZXhwKTtcbiAgICB2YXIgbWVtYmVyRXhwID0gYXN0LmdldE1lbWJlckV4cHJlc3Npb24oKTtcblxuICAgIGlmIChtZW1iZXJFeHAgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXhwICsgJ2lzIG5vdCB2YWxpZCBtZW1iZXIgZXhwcmVzc2lvbicpO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgb3B0aW9ucy5jcmVhdGVGaWx0ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlRmlsdGVyKG5hbWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvYmo6IG1lbWJlckV4cC5vYmplY3QuY29tcHV0ZShzY29wZSwgb3B0aW9ucywge30sIHNjb3BlKSxcbiAgICAgICAgcHJvcDogbWVtYmVyRXhwLnByb3BlcnR5LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMsIHsgcHJvcGVydHlLZXk6IHRydWUgfSwgc2NvcGUpXG4gICAgfVxufVxuXG5leHBvcnQgeyBjb21waWxlLCBjb21wdXRlLCBwYXJzZSwgcGFyc2VFeHAsIHBhcnNlQXNzaWdubWVudCB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHknO1xuXG52YXIgT1BFUkFUT1JTID0ge307XG52YXIgb3BlcmF0b3JUZXh0ID0gJysgLSAqIC8gJSA9PT0gIT09ID09ICE9IDwgPiA8PSA+PSAmJiB8fCAhID0gfCc7XG52YXIgRVNDQVBFID0geyAnbic6ICdcXG4nLCAnZic6ICdcXGYnLCAncic6ICdcXHInLCAndCc6ICdcXHQnLCAndic6ICdcXHYnLCAnXFwnJzogJ1xcJycsICdcIic6ICdcIicgfTtcblxub3BlcmF0b3JUZXh0LnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICBPUEVSQVRPUlNbb3BlcmF0b3JdID0gdHJ1ZTtcbn0pO1xuXG5mdW5jdGlvbiBMZXhlcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn1cblxuTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICcuJyAmJiB0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkTnVtYmVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyhjaCwgJygpe31bXS4sOzo/JykpIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogY2ggfSk7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgY2gyID0gY2ggKyB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIHZhciBjaDMgPSBjaDIgKyB0aGlzLnBlZWsoMik7XG4gICAgICAgICAgICB2YXIgb3AxID0gT1BFUkFUT1JTW2NoXTtcbiAgICAgICAgICAgIHZhciBvcDIgPSBPUEVSQVRPUlNbY2gyXTtcbiAgICAgICAgICAgIHZhciBvcDMgPSBPUEVSQVRPUlNbY2gzXTtcbiAgICAgICAgICAgIGlmIChvcDEgfHwgb3AyIHx8IG9wMykge1xuICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IG9wMyA/IGNoMyA6IChvcDIgPyBjaDIgOiBjaCk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiB0b2tlbiwgb3BlcmF0b3I6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSB0b2tlbi5sZW5ndGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmlzID0gZnVuY3Rpb24gKGNoLCBjaGFycykge1xuICAgIHJldHVybiBjaGFycy5pbmRleE9mKGNoKSAhPT0gLTE7XG59O1xuXG5MZXhlci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uIChpKSB7XG4gICAgdmFyIG51bSA9IGkgfHwgMTtcbiAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPCB0aGlzLnRleHQubGVuZ3RoKSA/IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCArIG51bSkgOiBmYWxzZTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc051bWJlciA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiAoJzAnIDw9IGNoICYmIGNoIDw9ICc5JykgJiYgdHlwZW9mIGNoID09PSAnc3RyaW5nJztcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc1doaXRlc3BhY2UgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICAvLyBJRSB0cmVhdHMgbm9uLWJyZWFraW5nIHNwYWNlIGFzIFxcdTAwQTBcbiAgICByZXR1cm4gKGNoID09PSAnICcgfHwgY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFx0JyB8fFxuICAgICAgICBjaCA9PT0gJ1xcbicgfHwgY2ggPT09ICdcXHYnIHx8IGNoID09PSAnXFx1MDBBMCcpO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmlzSWRlbnRpZmllclN0YXJ0ID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydCA/XG4gICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydChjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcbiAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0ID0gZnVuY3Rpb24gKGNoKSB7XG4gICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XG4gICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcbiAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnKTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5pc0lkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUgP1xuICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XG4gICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCwgY3ApIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUuY29kZVBvaW50QXQgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICBpZiAoY2gubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBjaC5jaGFyQ29kZUF0KDApO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgIHJldHVybiAoY2guY2hhckNvZGVBdCgwKSA8PCAxMCkgKyBjaC5jaGFyQ29kZUF0KDEpIC0gMHgzNUZEQzAwO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnBlZWtNdWx0aWNoYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICB2YXIgcGVlayA9IHRoaXMucGVlaygpO1xuICAgIGlmICghcGVlaykge1xuICAgICAgICByZXR1cm4gY2g7XG4gICAgfVxuICAgIHZhciBjcDEgPSBjaC5jaGFyQ29kZUF0KDApO1xuICAgIHZhciBjcDIgPSBwZWVrLmNoYXJDb2RlQXQoMCk7XG4gICAgaWYgKGNwMSA+PSAweEQ4MDAgJiYgY3AxIDw9IDB4REJGRiAmJiBjcDIgPj0gMHhEQzAwICYmIGNwMiA8PSAweERGRkYpIHtcbiAgICAgICAgcmV0dXJuIGNoICsgcGVlaztcbiAgICB9XG4gICAgcmV0dXJuIGNoO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLmlzRXhwT3BlcmF0b3IgPSBmdW5jdGlvbiAoY2gpIHtcbiAgICByZXR1cm4gKGNoID09PSAnLScgfHwgY2ggPT09ICcrJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUudGhyb3dFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgc3RhcnQsIGVuZCkge1xuICAgIGVuZCA9IGVuZCB8fCB0aGlzLmluZGV4O1xuICAgIHZhciBjb2xTdHIgPSAodXRpbHMuaXNEZWZpbmVkKHN0YXJ0KSA/ICdzICcgKyBzdGFydCArICctJyArIHRoaXMuaW5kZXggKyAnIFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyhzdGFydCwgZW5kKSArICddJyA6ICcgJyArIGVuZCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZXhlciBFcnJvcjogJyArIGVycm9yICsgJyBhdCBjb2x1bW4nICsgY29sU3RyICsgJyBpbiBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10uJyk7XG59O1xuXG5MZXhlci5wcm90b3R5cGUucmVhZE51bWJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbnVtYmVyID0gJyc7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoID0gdXRpbHMubG93ZXJjYXNlKHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCkpO1xuICAgICAgICBpZiAoY2ggPT09ICcuJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSkge1xuICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBlZWtDaCA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgaWYgKGNoID09PSAnZScgJiYgdGhpcy5pc0V4cE9wZXJhdG9yKHBlZWtDaCkpIHtcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcbiAgICAgICAgICAgICAgICBwZWVrQ2ggJiYgdGhpcy5pc051bWJlcihwZWVrQ2gpICYmXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICghcGVla0NoIHx8ICF0aGlzLmlzTnVtYmVyKHBlZWtDaCkpICYmXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCBleHBvbmVudCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgfVxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgIHRleHQ6IG51bWJlcixcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIHZhbHVlOiBOdW1iZXIobnVtYmVyKVxuICAgIH0pO1xufTtcblxuTGV4ZXIucHJvdG90eXBlLnJlYWRJZGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIHRoaXMuaW5kZXggKz0gdGhpcy5wZWVrTXVsdGljaGFyKCkubGVuZ3RoO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnBlZWtNdWx0aWNoYXIoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCArPSBjaC5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgIHRleHQ6IHRoaXMudGV4dC5zbGljZShzdGFydCwgdGhpcy5pbmRleCksXG4gICAgICAgIGlkZW50aWZpZXI6IHRydWVcbiAgICB9KTtcbn07XG5cbkxleGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nID0gZnVuY3Rpb24gKHF1b3RlKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB0aGlzLmluZGV4Kys7XG4gICAgdmFyIHN0cmluZyA9ICcnO1xuICAgIHZhciByYXdTdHJpbmcgPSBxdW90ZTtcbiAgICB2YXIgZXNjYXBlID0gZmFsc2U7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHJhd1N0cmluZyArPSBjaDtcbiAgICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICAgICAgaWYgKGNoID09PSAndScpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGV4ID0gdGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDUpO1xuICAgICAgICAgICAgICAgIGlmICghaGV4Lm1hdGNoKC9bXFxkYS1mXXs0fS9pKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1JyArIGhleCArICddJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gNDtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXgsIDE2KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByZXAgPSBFU0NBUEVbY2hdO1xuICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZyArIChyZXAgfHwgY2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXFxcJykge1xuICAgICAgICAgICAgZXNjYXBlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gcXVvdGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbiAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBxdW90ZScsIHN0YXJ0KTtcbn07XG5cbmV4cG9ydCB7IExleGVyIH07IiwiY2xhc3MgTnVsbE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE51bGxPYmplY3QgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7aXNGaWx0ZXJ9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHtOdWxsT2JqZWN0fSBmcm9tICcuL251bGwtb2JqZWN0JztcblxudmFyIEFTVCA9IHt9O1xuQVNULlByb2dyYW0gPSAnUHJvZ3JhbSc7XG5BU1QuRXhwcmVzc2lvblN0YXRlbWVudCA9ICdFeHByZXNzaW9uU3RhdGVtZW50JztcbkFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbiA9ICdBc3NpZ25tZW50RXhwcmVzc2lvbic7XG5BU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uID0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbic7XG5BU1QuTG9naWNhbEV4cHJlc3Npb24gPSAnTG9naWNhbEV4cHJlc3Npb24nO1xuQVNULkJpbmFyeUV4cHJlc3Npb24gPSAnQmluYXJ5RXhwcmVzc2lvbic7XG5BU1QuVW5hcnlFeHByZXNzaW9uID0gJ1VuYXJ5RXhwcmVzc2lvbic7XG5BU1QuQ2FsbEV4cHJlc3Npb24gPSAnQ2FsbEV4cHJlc3Npb24nO1xuQVNULk1lbWJlckV4cHJlc3Npb24gPSAnTWVtYmVyRXhwcmVzc2lvbic7XG5BU1QuSWRlbnRpZmllciA9ICdJZGVudGlmaWVyJztcbkFTVC5MaXRlcmFsID0gJ0xpdGVyYWwnO1xuQVNULkFycmF5RXhwcmVzc2lvbiA9ICdBcnJheUV4cHJlc3Npb24nO1xuQVNULlByb3BlcnR5ID0gJ1Byb3BlcnR5JztcbkFTVC5PYmplY3RFeHByZXNzaW9uID0gJ09iamVjdEV4cHJlc3Npb24nO1xuXG5mdW5jdGlvbiBBc3ROb2RlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xufVxuXG5Bc3ROb2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbn07XG5cbkFzdE5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGNvbnRleHQpO1xuICAgIH0pO1xufTtcblxuLy8gaGFzIGNvbmRpdGlvbiBvciBjYWxsIGV4cHJlc3Npb25cbkFzdE5vZGUucHJvdG90eXBlLmhhc0NDID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLmhhc0NDKCk7XG4gICAgfSk7XG59O1xuXG51dGlscy5pbmhlcml0KFByb2dyYW1Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIFByb2dyYW1Ob2RlKCkge1xuICAgIFByb2dyYW1Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlByb2dyYW0pO1xufVxuXG5Qcm9ncmFtTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLmNoaWxkTm9kZXNbMF0uY29tcHV0ZShzY29wZSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgTnVsbE9iamVjdCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuUHJvZ3JhbU5vZGUucHJvdG90eXBlLmdldE1lbWJlckV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1swXS5nZXRNZW1iZXJFeHByZXNzaW9uKCk7XG59O1xuXG51dGlscy5pbmhlcml0KEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCkge1xuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQpO1xufVxuXG5FeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0uY29tcHV0ZShzY29wZSwgb3B0aW9ucyB8fCB7fSwgY29udGV4dCk7XG59O1xuXG5FeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5wcm90b3R5cGUuZ2V0TWVtYmVyRXhwcmVzc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG5cbiAgICBpZihjaGlsZCBpbnN0YW5jZW9mIE1lbWJlckV4cHJlc3Npb25Ob2RlKXtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTtcblxudXRpbHMuaW5oZXJpdChBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKGxlZnQsIHJpZ2h0LCBvcGVyYXRvcikge1xuICAgIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbik7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xufVxuXG5Bc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5sZWZ0LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMsIHsgYXNzaWdubWVudExlZnQ6IHRydWUgfSk7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5yaWdodC5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcbiAgICB0YXJnZXQub2JqW3RhcmdldC5wcm9wXSA9IHZhbHVlO1xufTtcblxudXRpbHMuaW5oZXJpdChDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUodGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KSB7XG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24pO1xuICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbn1cblxuQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLnRlc3QuY29tcHV0ZShzY29wZSwgb3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWx0ZXJuYXRlLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xufTtcblxuLy8gaGFzIGNvbmRpdGlvbiBvciBjYWxsIGV4cHJlc3Npb25cbkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmhhc0NDID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0cnVlO1xufTtcblxudXRpbHMuaW5oZXJpdChMb2dpY2FsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gTG9naWNhbEV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgIExvZ2ljYWxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbik7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xufVxuXG5Mb2dpY2FsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmxlZnQuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG4gICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLnJpZ2h0LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xuXG4gICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJyYmJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3x8JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnV0aWxzLmluaGVyaXQoQmluYXJ5RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gQmluYXJ5RXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgQmluYXJ5RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQmluYXJ5RXhwcmVzc2lvbik7XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xufVxuXG5CaW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQ7XG4gICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMubGVmdC5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcbiAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMucmlnaHQuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG5cbiAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSArIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICogcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAvIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDwgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDw9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID49IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPT0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnIT0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPT09JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICchPT0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnV0aWxzLmluaGVyaXQoVW5hcnlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBVbmFyeUV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBhcmcpIHtcbiAgICBVbmFyeUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlVuYXJ5RXhwcmVzc2lvbik7XG4gICAgdGhpcy5wcmVmaXggPSB0cnVlO1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLmFyZyA9IGFyZztcbn1cblxuVW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQsIHZhbHVlID0gdGhpcy5hcmcuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG5cbiAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IC12YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICchJzpcbiAgICAgICAgICAgIHJlc3VsdCA9ICF2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG51dGlscy5pbmhlcml0KExpdGVyYWxOb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIExpdGVyYWxOb2RlKHZhbHVlKSB7XG4gICAgTGl0ZXJhbE5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuTGl0ZXJhbCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuXG5MaXRlcmFsTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbn07XG5cbkxpdGVyYWxOb2RlLnByb3RvdHlwZS50b1RleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG51dGlscy5pbmhlcml0KENhbGxFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBDYWxsRXhwcmVzc2lvbk5vZGUoY2FsbGVlLCBhcmdzKSB7XG4gICAgQ2FsbEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkNhbGxFeHByZXNzaW9uKTtcbiAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XG59XG5cbkNhbGxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jYWxsZWUuY29tcHV0ZShzY29wZSwgb3B0aW9ucywge2NhbGxlZTogdHJ1ZX0pO1xuICAgIHZhciBhcmdWYWx1ZXMgPSB0aGlzLmFyZ3MubWFwKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIGFyZy5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmZpbHRlcikge1xuICAgICAgICB2YXIgZmlsdGVySW5zID0gb3B0aW9ucy5jcmVhdGVGaWx0ZXIoY29udGV4dC5wcm9wKTtcbiAgICAgICAgaWYgKGlzRmlsdGVyKGZpbHRlcklucykpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJJbnMuJGV4ZWN1dGUuYXBwbHkoZmlsdGVySW5zLCBhcmdWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIFwiJyArIGNvbnRleHQucHJvcCArICdcIiBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dC5vYmosIGFyZ1ZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRleHQucHJvcCArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICB9XG59O1xuXG4vLyBoYXMgY29uZGl0aW9uIG9yIGNhbGwgZXhwcmVzc2lvblxuQ2FsbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5oYXNDQyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gIXRoaXMuZmlsdGVyO1xufTtcblxudXRpbHMuaW5oZXJpdChNZW1iZXJFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XG5mdW5jdGlvbiBNZW1iZXJFeHByZXNzaW9uTm9kZShvYmplY3QsIHByb3BlcnR5LCBjb21wdXRlZCkge1xuICAgIE1lbWJlckV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk1lbWJlckV4cHJlc3Npb24pO1xuICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB0aGlzLmNvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbn1cblxuTWVtYmVyRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICB2YXIgb2JqID0gdGhpcy5vYmplY3QuY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAob2JqID09IG51bGwgJiYgdGhpcy5vYmplY3QuYWxsb3dOdWxsKSB7XG4gICAgICAgIG9iaiA9IG5ldyBOdWxsT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29tcHV0ZWQpIHtcbiAgICAgICAgdmFyIHByb3AgPSB0aGlzLnByb3BlcnR5LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMsIGNvbnRleHQpO1xuICAgICAgICBpZiAodXRpbHMuaXNBcnJheShvcHRpb25zLm1lbWJlcnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zLm1lbWJlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBvYmosXG4gICAgICAgICAgICAgICAgdGFyZ2V0S2V5OiB0aGlzLm9iamVjdC50b1RleHQoKSxcbiAgICAgICAgICAgICAgICBrZXk6IHByb3BcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpbcHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHkuY29tcHV0ZShvYmosIG9wdGlvbnMsIGNvbnRleHQsIHRoaXMub2JqZWN0KTtcbn07XG5cbk1lbWJlckV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS50b1RleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0LnRvVGV4dCgpICsgJy4nICsgdGhpcy5wcm9wZXJ0eS50b1RleHQoKTtcbn07XG5cbnV0aWxzLmluaGVyaXQoSWRlbnRpZmllck5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gSWRlbnRpZmllck5vZGUobmFtZSkge1xuICAgIElkZW50aWZpZXJOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULklkZW50aWZpZXIpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbn1cblxuSWRlbnRpZmllck5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAob2JqLCBvcHRpb25zLCBjb250ZXh0LCBvYmpOb2RlKSB7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuYXNzaWdubWVudExlZnQgfHwgY29udGV4dC5jYWxsZWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2JqOiBvYmosXG4gICAgICAgICAgICAgICAgcHJvcDogdGhpcy5uYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRleHQucHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gb2JqW3RoaXMubmFtZV07XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheShvcHRpb25zLm1lbWJlcnMpKSB7XG4gICAgICAgIG9wdGlvbnMubWVtYmVycy5wdXNoKHtcbiAgICAgICAgICAgIHRhcmdldDogb2JqLFxuICAgICAgICAgICAgdGFyZ2V0S2V5OiBvYmpOb2RlICE9IG51bGwgPyBvYmpOb2RlLnRvVGV4dCgpIDogbnVsbCxcbiAgICAgICAgICAgIGtleTogdGhpcy5uYW1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBvcHRpb25zLmxvY2Fscykge1xuICAgICAgICByZXN1bHQgPSBvcHRpb25zLmxvY2Fsc1t0aGlzLm5hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5JZGVudGlmaWVyTm9kZS5wcm90b3R5cGUudG9UZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG59O1xuXG51dGlscy5pbmhlcml0KEFycmF5RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gQXJyYXlFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkFycmF5RXhwcmVzc2lvbik7XG59XG5cbnV0aWxzLmluaGVyaXQoUHJvcGVydHlOb2RlLCBBc3ROb2RlKTtcbmZ1bmN0aW9uIFByb3BlcnR5Tm9kZSgpIHtcbiAgICBQcm9wZXJ0eU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuUHJvcGVydHkpO1xuICAgIHRoaXMua2luZCA9ICdpbml0JztcbiAgICB0aGlzLmtleSA9IG51bGw7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5jb21wdXRlZCA9IGZhbHNlO1xufVxuXG5Qcm9wZXJ0eU5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IHRoaXMua2V5LmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMsIHsgcHJvcGVydHlLZXk6IHRydWUgfSksXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpXG4gICAgfTtcbn07XG5cbnV0aWxzLmluaGVyaXQoT2JqZWN0RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xuZnVuY3Rpb24gT2JqZWN0RXhwcmVzc2lvbk5vZGUocHJvcGVydGllcykge1xuICAgIE9iamVjdEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk9iamVjdEV4cHJlc3Npb24pO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG59XG5cbk9iamVjdEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gICAgdGhpcy5wcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdmFyIGRlZiA9IGl0ZW0uY29tcHV0ZShzY29wZSwgb3B0aW9ucyk7XG4gICAgICAgIHJlc3VsdFtkZWYua2V5XSA9IGRlZi52YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiBpc0Fzc2lnbmFibGUoYXN0KSB7XG4gICAgcmV0dXJuIGFzdC50eXBlID09PSBBU1QuSWRlbnRpZmllciB8fCBhc3QudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb247XG59XG5cbmZ1bmN0aW9uIFBhcnNlcihsZXhlciwgb3B0aW9ucykge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xufVxuXG5QYXJzZXIucHJvdG90eXBlLnRocm93RXJyb3IgPSBmdW5jdGlvbiAobXNnLCB0b2tlbikge1xuICAgIHRocm93IG5ldyBFcnJvcignU3ludGF4IEVycm9yOiBUb2tlbiBcXCcnICsgdG9rZW4udGV4dCArICdcXCcnICsgbXNnICsgJyBhdCBjb2x1bW4gJyArICh0b2tlbi5pbmRleCArIDEpICtcbiAgICAgICAgJyBvZiB0aGUgZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddIHN0YXJ0aW5nIGF0IFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyh0b2tlbi5pbmRleCkgKyAnXS4nKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xuXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wcm9ncmFtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9ncmFtID0gbmV3IFByb2dyYW1Ob2RlKCk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XG4gICAgICAgICAgICBwcm9ncmFtLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmFtO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUGFyc2VyLnByb3RvdHlwZS5leHByZXNzaW9uU3RhdGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUoKTtcbiAgICBleHAuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJDaGFpbigpKTtcbiAgICByZXR1cm4gZXhwO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5maWx0ZXJDaGFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XG4gICAgICAgIGxlZnQgPSB0aGlzLmZpbHRlcihsZWZ0KTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5hc3NpZ25tZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLnRlcm5hcnkoKTtcbiAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xuICAgICAgICBpZiAoIWlzQXNzaWduYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhc3NpZ24gYSB2YWx1ZSB0byBhIG5vbiBsLXZhbHVlJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSBuZXcgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKHJlc3VsdCwgdGhpcy5hc3NpZ25tZW50KCksICc9Jyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnRlcm5hcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRlc3QgPSB0aGlzLmxvZ2ljYWxPUigpO1xuICAgIHZhciBhbHRlcm5hdGU7XG4gICAgdmFyIGNvbnNlcXVlbnQ7XG4gICAgaWYgKHRoaXMuZXhwZWN0KCc/JykpIHtcbiAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIGlmICh0aGlzLmNvbnN1bWUoJzonKSkge1xuICAgICAgICAgICAgY29uc2VxdWVudCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRlc3Q7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmxvZ2ljYWxPUiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfHwnKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5sb2dpY2FsQU5EID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWZ0ID0gdGhpcy5lcXVhbGl0eSgpO1xuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnJiYnKSkge1xuICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnJiYnLCBsZWZ0LCB0aGlzLmVxdWFsaXR5KCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuZXF1YWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLnJlbGF0aW9uYWwoKTtcbiAgICB2YXIgdG9rZW47XG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc9PScsICchPScsICc9PT0nLCAnIT09JykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5yZWxhdGlvbmFsKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucmVsYXRpb25hbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMuYWRkaXRpdmUoKTtcbiAgICB2YXIgdG9rZW47XG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLmFkZGl0aXZlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdDtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuYWRkaXRpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSB0aGlzLm11bHRpcGxpY2F0aXZlKCk7XG4gICAgdmFyIHRva2VuO1xuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm11bHRpcGxpY2F0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWZ0ID0gdGhpcy51bmFyeSgpO1xuICAgIHZhciB0b2tlbjtcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJyonLCAnLycsICclJykpKSB7XG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy51bmFyeSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnVuYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0b2tlbjtcbiAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XG4gICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcbiAgICB9XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnByaW1hcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByaW1hcnk7XG4gICAgaWYgKHRoaXMuZXhwZWN0KCcoJykpIHtcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuZmlsdGVyQ2hhaW4oKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgnWycpKSB7XG4gICAgICAgIHByaW1hcnkgPSB0aGlzLmFycmF5RGVjbGFyYXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCd7JykpIHtcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMub2JqZWN0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubGl0ZXJhbHMuaGFzT3duUHJvcGVydHkodGhpcy5wZWVrKCkudGV4dCkpIHtcbiAgICAgICAgcHJpbWFyeSA9IG5ldyBMaXRlcmFsTm9kZSh0aGlzLm9wdGlvbnMubGl0ZXJhbHNbdGhpcy5jb25zdW1lKCkudGV4dF0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICBwcmltYXJ5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICBwcmltYXJ5ID0gdGhpcy5jb25zdGFudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignbm90IGEgcHJpbWFyeSBleHByZXNzaW9uJywgdGhpcy5wZWVrKCkpO1xuICAgIH1cblxuICAgIHZhciBuZXh0O1xuICAgIHdoaWxlICh0aGlzLnBlZWsoJygnLCAnWycsICcuJykgfHwgKHRoaXMucGVlaygnPycpICYmIHRoaXMucGVla0FoZWFkKDEsICcuJykpKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XG4gICAgICAgICAgICBwcmltYXJ5LmFsbG93TnVsbCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0ID0gdGhpcy5leHBlY3QoJygnLCAnWycsICcuJyk7XG5cbiAgICAgICAgaWYgKG5leHQudGV4dCA9PT0gJygnKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLnBhcnNlQXJndW1lbnRzKCkpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnWycpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5leHByZXNzaW9uKCksIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnLicpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5pZGVudGlmaWVyKCksIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSU1QT1NTSUJMRScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcmltYXJ5O1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAoYmFzZUV4cHJlc3Npb24pIHtcbiAgICB2YXIgYXJncyA9IFtiYXNlRXhwcmVzc2lvbl0sIGlkZW50aWZpZXJzID0gW3RoaXMuaWRlbnRpZmllcigpXTtcblxuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnLicpKSB7XG4gICAgICAgIGlkZW50aWZpZXJzLnB1c2godGhpcy5pZGVudGlmaWVyKCkpO1xuICAgIH1cblxuICAgIC8vIHBsdXMgbmFtZXNwYWNlXG4gICAgdmFyIGVudGlyZU5hbWUgPSBpZGVudGlmaWVycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgICB9KS5qb2luKCcuJyk7XG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShuZXcgSWRlbnRpZmllck5vZGUoZW50aXJlTmFtZSksIGFyZ3MpO1xuXG4gICAgcmVzdWx0LmZpbHRlciA9IHRydWU7XG5cbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJzonKSkge1xuICAgICAgICBhcmdzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlQXJndW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJyknKSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmZpbHRlckNoYWluKCkpO1xuICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFyZ3M7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLmlkZW50aWZpZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5jb25zdW1lKCk7XG4gICAgaWYgKCF0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgbm90IGEgdmFsaWQgaWRlbnRpZmllcicsIHRva2VuKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBJZGVudGlmaWVyTm9kZSh0b2tlbi50ZXh0KTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuY29uc3RhbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETyBjaGVjayB0aGF0IGl0IGlzIGEgY29uc3RhbnRcbiAgICByZXR1cm4gbmV3IExpdGVyYWxOb2RlKHRoaXMuY29uc3VtZSgpLnZhbHVlKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuYXJyYXlEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyID0gbmV3IEFycmF5RXhwcmVzc2lvbk5vZGUoKTtcbiAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnXScpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnXScpKSB7XG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJyLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgfVxuICAgIHRoaXMuY29uc3VtZSgnXScpO1xuXG4gICAgcmV0dXJuIGFycjtcbn07XG5cblBhcnNlci5wcm90b3R5cGUub2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gW10sIHByb3BlcnR5O1xuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICd9Jykge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCd9JykpIHtcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eU5vZGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuY29uc3RhbnQoKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJzonKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHByb3BlcnR5LmtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygnWycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCdbJyk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaW52YWxpZCBrZXknLCB0aGlzLnBlZWsoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICB9XG4gICAgdGhpcy5jb25zdW1lKCd9Jyk7XG5cbiAgICByZXR1cm4gbmV3IE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5jb25zdW1lID0gZnVuY3Rpb24gKGUxKSB7XG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgIH1cblxuICAgIHZhciB0b2tlbiA9IHRoaXMuZXhwZWN0KGUxKTtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFsnICsgZTEgKyAnXScsIHRoaXMucGVlaygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRva2VuO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wZWVrVG9rZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50b2tlbnNbMF07XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoZTEsIGUyLCBlMywgZTQpIHtcbiAgICByZXR1cm4gdGhpcy5wZWVrQWhlYWQoMCwgZTEsIGUyLCBlMywgZTQpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wZWVrQWhlYWQgPSBmdW5jdGlvbiAoaSwgZTEsIGUyLCBlMywgZTQpIHtcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gaSkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcbiAgICAgICAgdmFyIHQgPSB0b2tlbi50ZXh0O1xuICAgICAgICBpZiAodCA9PT0gZTEgfHwgdCA9PT0gZTIgfHwgdCA9PT0gZTMgfHwgdCA9PT0gZTQgfHxcbiAgICAgICAgICAgICghZTEgJiYgIWUyICYmICFlMyAmJiAhZTQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5leHBlY3QgPSBmdW5jdGlvbiAoZTEsIGUyLCBlMywgZTQpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLnBlZWsoZTEsIGUyLCBlMywgZTQpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgICB0aGlzLnRva2Vucy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7IFBhcnNlciB9OyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiAqbi1iaW5kPVxcXCJ0ZXh0XFxcIj48L2Rpdj5cIiIsImltcG9ydCB7Y29tcG9uZW50fSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2FwcC5odG1sJztcclxuaW1wb3J0IGh0bWwgZnJvbSAnLi90ZXN0Lmh0bWwnO1xyXG5cclxuQGNvbXBvbmVudCh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lJyxcclxuICAgIHNlbGVjdG9yOiAnc2FtcGxlLWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcclxufSlcclxuY2xhc3MgU2FtcGxlQXBwQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IGh0bWw7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2FwcCc7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj50aXRsZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPnRlc3Q8L3A+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPnRpdGxlPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+dGVzdDwvcD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+dGl0bGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj50ZXN0PC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiIiwiZXhwb3J0ICogZnJvbSAnLi90ZW1wbGF0ZS1jYWNoZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwtb3B0aW9ucyc7IiwiaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBzZXJ2aWNlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUnLFxyXG4gICAgc2VsZWN0b3I6ICckbW9kZWxPcHRpb25zJ1xyXG59KVxyXG5jbGFzcyBNb2RlbE9wdGlvbnNTZXJ2aWNlIGV4dGVuZHMgU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY3NzQ2xhc3MgPSB7XHJcbiAgICAgICAgICAgIHByaXN0aW5lOiAnbi1wcmlzdGluZScsXHJcbiAgICAgICAgICAgIGRpcnR5OiAnbi1kaXJ0eScsXHJcbiAgICAgICAgICAgIHZhbGlkOiAnbi12YWxpZCcsXHJcbiAgICAgICAgICAgIGludmFsaWQ6ICduLWludmFsaWQnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGh0dHBHZXQgfSBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5Ac2VydmljZSh7XG4gICAgbmFtZXNwYWNlOiAnc2luZScsXG4gICAgc2VsZWN0b3I6ICckdGVtcGxhdGVDYWNoZSdcbn0pXG5jbGFzcyBUZW1wbGF0ZUNhY2hlU2VydmljZSBleHRlbmRzIFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRwbENhY2hlID0ge307XG4gICAgICAgIHRoaXMucHJvbWlzZUNhY2hlID0ge307XG4gICAgfVxuXG4gICAgZ2V0VHBsQnlVcmwodXJsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy50cGxDYWNoZVt1cmxdKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNlbGYudHBsQ2FjaGVbdXJsXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5wcm9taXNlQ2FjaGVbdXJsXSkge1xuICAgICAgICAgICAgdGhpcy5wcm9taXNlQ2FjaGVbdXJsXSA9IGh0dHBHZXQodXJsKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnByb21pc2VDYWNoZVt1cmxdID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxmLnRwbENhY2hlW3VybF0gPSByZXMuZGF0YSB8fCAnJztcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50cGxDYWNoZVt1cmxdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlQ2FjaGVbdXJsXTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcblxyXG52YXIgcmVhZHlTdGF0ZUVudW0gPSB7XHJcbiAgICBzdGFydDogMCxcclxuICAgIG9wZW5lZDogMSxcclxuICAgIHNlbnQ6IDIsXHJcbiAgICByZWNlaXZlZDogMyxcclxuICAgIGZpbmlzaDogNFxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlWEhSKCkge1xyXG4gICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9taXNlKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUsIHJlamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFVybFBhcmFtKHVybCwgbmFtZSwgdmFsdWUpIHtcclxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpO1xyXG4gICAgdXJsICs9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xyXG4gICAgdmFyIHBhcnNlZCA9IHt9O1xyXG4gICAgdmFyIGtleTtcclxuICAgIHZhciB2YWw7XHJcbiAgICB2YXIgaTtcclxuXHJcbiAgICBpZiAoIWhlYWRlcnMpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lLCBpbmRleCkge1xyXG4gICAgICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcclxuICAgICAgICBrZXkgPSBsaW5lLnN1YnN0cigwLCBpKS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB2YWwgPSBsaW5lLnN1YnN0cihpICsgMSkudHJpbSgpO1xyXG5cclxuICAgICAgICBpZiAoa2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwYXJzZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkVXJsKHVybCwgY29uZmlnKSB7XHJcbiAgICBpZiAoY29uZmlnLmRhdGEgIT0gbnVsbCAmJiBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCkgPT09ICdnZXQnKSB7XHJcbiAgICAgICAgdXRpbHMuZm9yRWFjaChjb25maWcuZGF0YSwgZnVuY3Rpb24gKHZhbHVlLCBuYW1lKSB7XHJcbiAgICAgICAgICAgIGFkZFVybFBhcmFtKHVybCwgbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcclxuICAgIHJldHVybiBjcmVhdGVQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgeGhyID0gY3JlYXRlWEhSKCk7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGNvbmZpZy5kYXRhKSkge1xyXG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLmRhdGFbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXhociB8fCB4aHIucmVhZHlTdGF0ZSAhPT0gcmVhZHlTdGF0ZUVudW0uZmluaXNoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAwICYmICEoeGhyLnJlc3BvbnNlVVJMICYmIHhoci5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4geGhyID8gcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8geGhyLnJlc3BvbnNlVGV4dCA6IHhoci5yZXNwb25zZTtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBjb25maWc6IGNvbmZpZyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHhoclxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKCh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB8fCB4aHIuc3RhdHVzID09IDMwNCkge1xyXG4gICAgICAgICAgICAgICAgLy8gc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHVuc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB4aHIgPSBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpLCBidWlsZFVybChjb25maWcudXJsLCBjb25maWcpLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2VuZChjb25maWcuZGF0YSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaHR0cEdldCh1cmwsIGRhdGEsIG9wdGlvbnMpIHtcclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChvcHRpb25zICE9IG51bGwpIHtcclxuICAgICAgICB1dGlscy5leHRlbmQoY29uZmlnLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVxdWVzdChjb25maWcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBodHRwUG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpIHtcclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAob3B0aW9ucyAhPSBudWxsKSB7XHJcbiAgICAgICAgdXRpbHMuZXh0ZW5kKGNvbmZpZywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcXVlc3QoY29uZmlnKTtcclxufVxyXG5cclxuZXhwb3J0IHsgaHR0cEdldCwgaHR0cFBvc3QgfVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vbm9kZSc7XG5leHBvcnQgKiBmcm9tICcuL2h0dHAnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuY2xhc3MgTWVzc2VuZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cblxuICAgIG9uKGZuKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChmbik7XG4gICAgfVxuXG4gICAgb2ZmKGZuKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFuZGxlcnNbaV0gPT09IGZuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlKGFyZ3MsIHNjb3BlKSB7XG4gICAgICAgIHZhciByZXR1cm5WYWx1ZTtcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCB0aGlzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuaGFuZGxlcnNbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB0aGlzLmhhbmRsZXJzW2ldLmNhbGwoc2NvcGUsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9XG59XG5cbmNsYXNzIE1lc3NlbmdlckJ1cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWVzc2VuZ2VycyA9IHt9O1xuICAgIH1cblxuICAgIGdldChlKSB7XG4gICAgICAgIGlmICghdGhpcy5tZXNzZW5nZXJzW2VdKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NlbmdlcnNbZV0gPSBuZXcgTWVzc2VuZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2VuZ2Vyc1tlXTtcbiAgICB9XG5cbiAgICBvbihlLCBmbikge1xuICAgICAgICB0aGlzLmdldChlKS5vbihmbik7XG4gICAgfVxuXG4gICAgb2ZmKGUsIGZuKSB7XG4gICAgICAgIHRoaXMuZ2V0KGUpLm9mZihmbik7XG4gICAgfVxuXG4gICAgZmlyZShlLCBhcmdzLCBzY29wZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoZSkuZmlyZShhcmdzLCBzY29wZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc01lc3NlbmdlcihvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWVzc2VuZ2VyO1xufVxuXG5leHBvcnQgeyBNZXNzZW5nZXIsIE1lc3NlbmdlckJ1cywgaXNNZXNzZW5nZXIgfTsiLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBnZXRDaGlsZE5vZGVzKG5vZGUpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZS5jaGlsZE5vZGVzLCAwKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDaGlsZE5vZGVzKG5vZGUpIHtcbiAgICBnZXRDaGlsZE5vZGVzKG5vZGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlTm9kZShyZWZOb2RlLCBuZXdOb2RlKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSByZWZOb2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZOb2RlKTtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZWZOb2RlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGVCZXR3ZWVuKGJlZ2luTm9kZSwgZW5kTm9kZSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gYmVnaW5Ob2RlLnBhcmVudE5vZGU7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBnZXRDaGlsZE5vZGVzKHBhcmVudE5vZGUpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nID09PSBiZWdpbk5vZGUgJiYgY2hpbGQgIT09IGVuZE5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyA9PT0gZW5kTm9kZSAmJiBjaGlsZCAhPT0gYmVnaW5Ob2RlKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBpbnNlcnROb2RlQWZ0ZXIocmVmTm9kZSwgbmV3Tm9kZSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHBhcmVudE5vZGUubGFzdENoaWxkID09PSByZWZOb2RlKSB7XG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmTm9kZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNscykge1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgICAgIGlmIChjdXIuaW5kZXhPZignICcgKyBjbHMgKyAnICcpIDwgMCkge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIChjdXIgKyBjbHMpLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbCwgY2xzKSB7XG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWwuY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICAgICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcbiAgICAgICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xuICAgICAgICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xuICAgICAgICB9XG4gICAgICAgIGN1ciA9IGN1ci50cmltKCk7XG4gICAgICAgIGlmIChjdXIpIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjdXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGdldENoaWxkTm9kZXMsXG4gICAgY2xlYXJDaGlsZE5vZGVzLFxuICAgIHJlcGxhY2VOb2RlLFxuICAgIHJlbW92ZU5vZGUsXG4gICAgcmVtb3ZlTm9kZUJldHdlZW4sXG4gICAgaW5zZXJ0Tm9kZUFmdGVyLFxuICAgIGFkZENsYXNzLFxuICAgIHJlbW92ZUNsYXNzXG59OyIsInZhciBkZWJ1Z01vZGUgPSB0cnVlLFxuICAgIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGFjdGlvbiwgaWdub3JlT3duKSB7XG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKGFjdGlvbihvYmpbaW5kZXhdLCBpbmRleCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGlnbm9yZU93biB8fCBvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKG9ialtwXSwgcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYWN0aW9uKG9iaiwgb2JqKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNvbWUob2JqLCBhY3Rpb24pIHtcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKGluZGV4LCBvYmpbaW5kZXhdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKHAsIG9ialtwXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYWN0aW9uKG9iaiwgb2JqKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgb2JqSW5kZXggPSAwLCBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdLCBmaWx0ZXI7XG5cbiAgICBpZiAoaXNCb29sZWFuKG9iaikpIHtcbiAgICAgICAgZGVlcCA9IG9iajtcbiAgICAgICAgb2JqSW5kZXgrKztcbiAgICAgICAgb2JqID0gYXJndW1lbnRzW29iakluZGV4XTtcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IG9iakluZGV4ICsgMSkge1xuICAgICAgICBmaWx0ZXIgPSBhcmd1bWVudHNbb2JqSW5kZXggKyAxXTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBuZXdBcnIgPSBbXTtcbiAgICAgICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwgaW5kZXgsIGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZGVlcCA/IGNvcHkoaXRlbSkgOiBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgdmFyIG5ld09iaiA9IG9iamVjdChvYmopO1xuICAgICAgICBmb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBrZXksIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gZGVlcCA/IGNvcHkodmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICBpZiAoaXNCb29sZWFuKHRhcmdldCkpIHtcbiAgICAgICAgZGVlcCA9IHRhcmdldDtcbiAgICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWysraW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0ge307XG5cbiAgICBpZiAoaXNCb29sZWFuKGFyZ3VtZW50c1tpbmRleF0pKSB7XG4gICAgICAgIGRlZXAgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gcGxhaW5NZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodGFyZ2V0W2tleV0pICYmIGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvYmplY3Qobykge1xuICAgIGZ1bmN0aW9uIEYoKSB7XG4gICAgfVxuXG4gICAgRi5wcm90b3R5cGUgPSBvO1xuICAgIHJldHVybiBuZXcgRigpO1xufVxuXG5mdW5jdGlvbiBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSkge1xuICAgIHZhciBwcm90b3R5cGUgPSBvYmplY3Qoc3VwZXJUeXBlLnByb3RvdHlwZSk7XG4gICAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViVHlwZTtcbiAgICBzdWJUeXBlLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdChzdWJUeXBlLCBzdXBlclR5cGUpIHtcbiAgICBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSk7XG4gICAgc3ViVHlwZS5zdXBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3VwZXJUeXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvTG93ZXJDYXNlKCkgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHVwcGVyY2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b1VwcGVyQ2FzZSgpIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGlzTWFwKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNYXA7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzQmxhbmtPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZShvYmoxLCBvYmoyKSB7XG4gICAgdmFyIHNhbWUgPSAob2JqMSA9PT0gb2JqMik7XG5cbiAgICBpZiAoIXNhbWUpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xuICAgICAgICAgICAgaWYgKG9iajEubGVuZ3RoID09PSBvYmoyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqMSkgJiYgaXNPYmplY3Qob2JqMikgJiYgZ2V0UHJvdG90eXBlT2Yob2JqMSkgPT09IGdldFByb3RvdHlwZU9mKG9iajIpKSB7XG4gICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltrZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbWU7XG59XG5cbmZ1bmN0aW9uIGRlYnVnKGxvZykge1xuICAgIGlmIChkZWJ1Z01vZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2cobG9nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKGFyciwgb2JqKSB7XG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBvYmo7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zU3RyKGFyciwgc3RyLCBpZ25vcmVDYXNlKSB7XG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBzdHIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGl0ZW0pID09PSBsb3dlcmNhc2Uoc3RyKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaiwga2V5LCBpZ25vcmVDYXNlKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XG5cbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzUHJvcDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xuXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcbiAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc1Byb3AgPyB0YXJnZXQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUsIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcblxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXkyXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcbiAgICAgICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWhhc1Byb3ApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICc6IENhbiBub3Qgc2V0IHByb3BlcnR5IG9mIHVuZGVmaW5lZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvcmRlckJ5KGFyciwgZ2V0dGVyKSB7XG4gICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb3JkZXJCeURlc2NlbmRpbmcoYXJyLCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgcmV0dXJuIGlzTmFOKG4pID8gdmFsdWUgOiBuO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoYXJyLCBpdGVtKSB7XG4gICAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdCgpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoLCBtYXRjaFRleHQsIGluZGV4LCB0ZXh0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICBwbGFjZUhvZGVyID0gL1xceyhcXGQrKVxcfS9nO1xuXG4gICAgd2hpbGUgKG1hdGNoID0gcGxhY2VIb2Rlci5leGVjKHRleHQpKSB7XG4gICAgICAgIG1hdGNoVGV4dCA9IG1hdGNoWzBdO1xuICAgICAgICBpbmRleCA9IE51bWJlci5wYXJzZUludChtYXRjaFsxXSkgKyAxO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Zvcm1hdCBpdGVtICcgKyBpbmRleCArICdpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIG1hdGNoLmluZGV4KSArIGFyZ3VtZW50c1tpbmRleF0gKyB0ZXh0LnN1YnN0cmluZyhtYXRjaC5pbmRleCArIG1hdGNoVGV4dC5sZW5ndGgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xufVxuXG5leHBvcnQge1xuICAgIGZvckVhY2gsXG4gICAgc29tZSxcbiAgICBjb3B5LFxuICAgIGV4dGVuZCxcbiAgICBtZXJnZSxcbiAgICBvYmplY3QsXG4gICAgaW5oZXJpdCxcbiAgICBsb3dlcmNhc2UsXG4gICAgdXBwZXJjYXNlLFxuICAgIGlzVW5kZWZpbmVkLFxuICAgIGlzRGVmaW5lZCxcbiAgICBpc09iamVjdCxcbiAgICBpc0JsYW5rT2JqZWN0LFxuICAgIGlzTnVtYmVyLFxuICAgIGlzRGF0ZSxcbiAgICBpc0Z1bmN0aW9uLFxuICAgIGlzUmVnRXhwLFxuICAgIGlzQm9vbGVhbixcbiAgICBpc0FycmF5LFxuICAgIGlzU3RyaW5nLFxuICAgIGlzU2FtZSxcbiAgICBpc0Zvcm1EYXRhLFxuICAgIGRlYnVnLFxuICAgIGNvbnRhaW5zLFxuICAgIGNvbnRhaW5zU3RyLFxuICAgIGhhc1Byb3BlcnR5LFxuICAgIGdldFByb3BlcnR5LFxuICAgIHNldFByb3BlcnR5LFxuICAgIGNvbmNhdCxcbiAgICBvcmRlckJ5LFxuICAgIG9yZGVyQnlEZXNjZW5kaW5nLFxuICAgIHRvTnVtYmVyLFxuICAgIHJlbW92ZSxcbiAgICBmb3JtYXRcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgY29tcGlsZSwgY29tcHV0ZSB9IGZyb20gJy4uL3BhcnNlcic7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKG1ldGEpIHtcbiAgICAgICAgQ29tcG9uZW50LmNvbnN0cnVjdC5jYWxsKHRoaXMsIG1ldGEpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb25zdHJ1Y3QobWV0YSkge1xuICAgICAgICB0aGlzLiQkZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuJCRjaGlsZEVsZW1lbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJHBhcmVudENvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy4kJGNoaWxkRGlyZWN0aXZlcyA9IFtdO1xuICAgICAgICB0aGlzLiQkZGV0ZWN0VGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMuJCRvYnNlcnZlciA9IG5ldyBPYnNlcnZlcigpO1xuICAgICAgICB0aGlzLiQkZGlzcG9zZXJzID0gW107XG5cbiAgICAgICAgaWYgKG1ldGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kc2V0TWV0YShtZXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMpO1xuICAgIH1cblxuICAgICRob29rcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJlZm9yZUF0dHJDaGFuZ2U6ICcnLFxuICAgICAgICAgICAgYWZ0ZXJBdHRyQ2hhbmdlOiAnJyxcbiAgICAgICAgICAgIG9uSW5pdDogJycsXG4gICAgICAgICAgICBiZWZvcmVWaWV3SW5pdDogJycsXG4gICAgICAgICAgICBhZnRlclZpZXdNb3VudDogJycsXG4gICAgICAgICAgICBvbkRlc3Ryb3k6ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgJGdldE1ldGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YSB8fCB7fTtcbiAgICB9XG5cbiAgICAkc2V0TWV0YSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiQkbWV0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgICRiaW5kTm9kZShub2RlKSB7XG4gICAgICAgIHRoaXMuJCRlbGVtZW50ID0gbm9kZTtcbiAgICB9XG5cbiAgICAkaGFzQXR0cihwcm9wKSB7XG4gICAgICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLCBwcm9wLCB0cnVlKTtcbiAgICB9XG5cbiAgICAkaW5pdEF0dHIocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywgcHJvcCwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5iZWZvcmVBdHRyQ2hhbmdlKSkge1xuICAgICAgICAgICAgdGhpcy5iZWZvcmVBdHRyQ2hhbmdlLmNhbGwodGhpcywgcHJvcCwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMsIHByb3AsIHZhbHVlLCB0cnVlKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmFmdGVyQXR0ckNoYW5nZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJBdHRyQ2hhbmdlLmNhbGwodGhpcywgcHJvcCwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRpbml0QXR0ckRvbmUoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25Jbml0KSkge1xuICAgICAgICAgICAgdGhpcy5vbkluaXQuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRzZXRBdHRyKHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMsIHByb3AsIHRydWUpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuYmVmb3JlQXR0ckNoYW5nZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlQXR0ckNoYW5nZS5jYWxsKHRoaXMsIHByb3AsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLiQsIHByb3AsIHZhbHVlLCB0cnVlKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmFmdGVyQXR0ckNoYW5nZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJBdHRyQ2hhbmdlLmNhbGwodGhpcywgcHJvcCwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRsaXN0ZW4oZSwgZm4pIHtcbiAgICAgICAgdmFyIG1lc3NlbmdlciA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMsIGUsIHRydWUpO1xuICAgICAgICBpZiAodXRpbHMuaXNNZXNzZW5nZXIobWVzc2VuZ2VyKSkge1xuICAgICAgICAgICAgbWVzc2VuZ2VyLm9uKGZuKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSArICcgaXMgbm90IGEgZXZlbnQnKTtcbiAgICB9XG5cbiAgICAkZ2V0VGVtcGxhdGVCeUlkKGlkKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBpZCk7XG4gICAgICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5pbm5lclRleHQgOiAnJztcbiAgICB9XG5cbiAgICAkZ2V0VGVtcGxhdGUoKSB7XG4gICAgICAgIHZhciBtZXRhID0gdGhpcy4kZ2V0TWV0YSgpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhtZXRhLnRlbXBsYXRlSWQpKSB7XG4gICAgICAgICAgICBtZXRhLnRlbXBsYXRlID0gdGhpcy4kZ2V0VGVtcGxhdGVCeUlkKG1ldGEudGVtcGxhdGVJZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWV0YS50ZW1wbGF0ZSB8fCAnJztcbiAgICB9XG5cbiAgICAkdXNpbmcobmFtZSkge1xuICAgICAgICB2YXIgbWV0YSA9IHRoaXMuJGdldE1ldGEoKSxcbiAgICAgICAgICAgIHVzaW5nID0gbWV0YS51c2luZyxcbiAgICAgICAgICAgIHNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLicpLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gc2VnbWVudHMucG9wKCksXG4gICAgICAgICAgICBzcGFjZU5hbWUgPSBzZWdtZW50cy5qb2luKCcuJyk7XG5cbiAgICAgICAgaWYgKHNwYWNlTmFtZSAmJiB1dGlscy5pc09iamVjdCh1c2luZykpIHtcbiAgICAgICAgICAgIHV0aWxzLnNvbWUodXNpbmcsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gc3BhY2VOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSB2YWx1ZSArICcuJyArIGNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICAkbWFrZUNvbXBpbGVPcHRpb25zKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRFbWJlZFRwbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLiQkZWxlbWVudC5nZXRJbm5lclRwbCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zQ29tcG9uZW50OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jb250YWluc0NvbXBvbmVudChzZWxmLiR1c2luZyhuYW1lKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlQ29tcG9uZW50OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVDb21wb25lbnQoc2VsZi4kdXNpbmcobmFtZSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zRGlyZWN0aXZlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jb250YWluc0RpcmVjdGl2ZShzZWxmLiR1c2luZyhuYW1lKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlRGlyZWN0aXZlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVEaXJlY3RpdmUoc2VsZi4kdXNpbmcobmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgICRoYXNWaWV3KCkge1xuICAgICAgICByZXR1cm4gdXRpbHMuaXNBcnJheSh0aGlzLiQkY2hpbGRFbGVtZW50cyk7XG4gICAgfVxuXG4gICAgJHNob3dWaWV3KCkge1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNoaWxkLmdldEh0bWxFbGVtZW50KCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuXG4gICAgJGNsZWFyVmlldygpIHtcbiAgICAgICAgaWYgKCF0aGlzLiRoYXNWaWV3KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiQkY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMgPSBudWxsO1xuICAgIH1cblxuICAgICRyZW5kZXIoKSB7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuJGhhc1ZpZXcoKSkge1xuICAgICAgICAgICAgZnJhZ21lbnQgPSB0aGlzLiRzaG93VmlldygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZnJhZ21lbnQgPSBjb21waWxlKHRoaXMuJGdldFRlbXBsYXRlKCksIHRoaXMuJG1ha2VDb21waWxlT3B0aW9ucygpKSh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG5cbiAgICAkcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy4kY2xlYXJWaWV3KCk7XG4gICAgICAgIHJldHVybiB0aGlzLiRyZW5kZXIoKTtcbiAgICB9XG5cbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQ7XG5cbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLmFwcGVuZCkge1xuICAgICAgICAgICAgdXRpbHMuY2xlYXJDaGlsZE5vZGVzKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiRyZW5kZXIoKSk7XG4gICAgICAgIHRoaXMuJGFmdGVyVmlld01vdW50KCk7XG4gICAgfVxuXG4gICAgJHVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLiQkZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudC4kcmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudC5yZW1vdmVIdG1sRWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuJGhhc1ZpZXcoKSkge1xuICAgICAgICAgICAgdGhpcy4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmVIdG1sRWxlbWVudCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kJHBhcmVudENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkcGFyZW50Q29tcG9uZW50LiRyZW1vdmVDaGlsZENtcCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGFmdGVyVmlld01vdW50KCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmFmdGVyVmlld01vdW50KSkge1xuICAgICAgICAgICAgdGhpcy5hZnRlclZpZXdNb3VudC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJCRkZXRlY3RUaW1lb3V0IHx8ICF0aGlzLiQkY2hpbGRFbGVtZW50cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLiQkZGV0ZWN0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi4kJGRldGVjdFRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi4kJGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXRlY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkdmFsaWRhdGUoKSB7XG4gICAgICAgIHZhciBvYmosIHByb3AsIGFjdGlvbjtcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgb2JqID0gdGhpcztcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgb2JqID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgcHJvcCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIGFjdGlvbiA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXJndW1lbnRzIGVycm9yJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy4kJG9ic2VydmVyLnZhbGlkYXRlKG9iaiwgcHJvcCwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICAkd2F0Y2goKSB7XG4gICAgICAgIHZhciBvYmosIHByb3AsIGFjdGlvbjtcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgb2JqID0gdGhpcztcbiAgICAgICAgICAgIHByb3AgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgb2JqID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgcHJvcCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIGFjdGlvbiA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXJndW1lbnRzIGVycm9yJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy4kJG9ic2VydmVyLndhdGNoKG9iaiwgcHJvcCwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICAkZXZhbChleHApIHtcbiAgICAgICAgcmV0dXJuIGNvbXB1dGUoZXhwLCB0aGlzKTtcbiAgICB9XG5cbiAgICAkZ2V0UGFyZW50Q21wKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHBhcmVudENvbXBvbmVudDtcbiAgICB9XG5cbiAgICAkcmVtb3ZlQ2hpbGRDbXAoY2hpbGRDbXApIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kJGNoaWxkQ29tcG9uZW50cy5pbmRleE9mKGNoaWxkQ21wKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBjaGlsZENtcC4kJHBhcmVudENvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkY3JlYXRlQ2hpbGRDbXAoY2hpbGRDbXApIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IGluamVjdG9yLmNyZWF0ZUNvbXBvbmVudChjaGlsZENtcCk7XG4gICAgICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICBjb21wb25lbnQuJCRwYXJlbnRDb21wb25lbnQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgICRpbmhlcml0Q21wKHBhcmVudENtcCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHNlbGYsIHV0aWxzLm9iamVjdChwYXJlbnRDbXApKTtcblxuICAgICAgICAvLyB0b2RvIC0gcmVzb2x2ZSBpc3N1ZSBjYWxsaW5nIHBhcmVudCBjb21wb25lbnQncyBsaWZlY3ljbGUgaG9va3NcbiAgICAgICAgdXRpbHMuZm9yRWFjaChzZWxmLiRob29rcygpLCBmdW5jdGlvbiAoaGFuZGxlciwgaG9vaykge1xuICAgICAgICAgICAgaWYgKHNlbGYuaGFzT3duUHJvcGVydHkoaG9vaykgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNlbGZbaG9va10gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiQkZGlzcG9zZXJzLnB1c2gocGFyZW50Q21wLiR2YWxpZGF0ZSgnKicsIGZ1bmN0aW9uIChwcm9wLCBhcmdzKSB7XG4gICAgICAgICAgICBzZWxmLiQkb2JzZXJ2ZXIuZmlyZUNoYW5naW5nKHNlbGYsIHByb3AsIGFyZ3MpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy4kJGRpc3Bvc2Vycy5wdXNoKHBhcmVudENtcC4kd2F0Y2goJyonLCBmdW5jdGlvbiAocHJvcCwgYXJncykge1xuICAgICAgICAgICAgc2VsZi4kJG9ic2VydmVyLmZpcmVDaGFuZ2VkKHNlbGYsIHByb3AsIGFyZ3MpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgJGRpc3Bvc2UoZGVzdHJveUZyb21FbGVtZW50KSB7XG4gICAgICAgIC8vIHJlbW92ZSB2aXJ0dWFsIG5vZGUgZmlyc3QgaW4gY2FzZSBpdCB0cmlnZ2VycyBwYXJlbnQgY29tcG9uZW50IGRlc3Ryb3lcbiAgICAgICAgdGhpcy4kdW5tb3VudCgpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25EZXN0cm95KSkge1xuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiQkZGV0ZWN0VGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuJCRkZXRlY3RUaW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJCRkaXNwb3NlcnMuZm9yRWFjaChmdW5jdGlvbiAoZGlzcG9zZXIpIHtcbiAgICAgICAgICAgIGRpc3Bvc2VyLmNhbGwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kY2xlYXJWaWV3KCk7XG4gICAgICAgIHRoaXMuJCRvYnNlcnZlci5kZXN0cm95KCk7XG5cbiAgICAgICAgaWYgKGRlc3Ryb3lGcm9tRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy4kJGVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kJGNoaWxkQ29tcG9uZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuJCRjaGlsZERpcmVjdGl2ZXMgPSBudWxsO1xuICAgIH1cblxuICAgICRkZXN0cm95KCkge1xuICAgICAgICB0aGlzLiRkaXNwb3NlKCk7XG5cbiAgICAgICAgLy8gZGVzdHJveSB2aXJ0dWFsIG5vZGUgaW4gdGhlIGVuZCBiZWNhdXNlIGl0IG1heSBiaW5kcyBsb2dpYyBhYm91dCBkZXN0cm95XG4gICAgICAgIGlmICh0aGlzLiQkZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkZWxlbWVudC5kaXNwb3NlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy4kJGVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuaW1wb3J0IHtpbmplY3Rvcn0gZnJvbSAnLi9pbmplY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUge1xuICAgIGdldCAkaHRtbEVsZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLiRlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50Lmh0bWxFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0ICRjb21wb25lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLiRlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50Lm93bmVyQ29tcG9uZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0ICRzY29wZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGJpbmRpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGJpbmRpbmcuc2NvcGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgRGlyZWN0aXZlLmNvbnN0cnVjdC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIC8vIHByaXZhdGUgcHJvcGVydGllc1xuICAgICAgICB0aGlzLiQkZGlzcG9zZXJzID0gW107XG4gICAgICAgIHRoaXMuJCRjYW5jZWxBbmltYXRpb25Ub2tlbiA9IGZhbHNlO1xuICAgICAgICAvLyBwcml2YXRlIHByb3BlcnRpZXNcblxuICAgICAgICAvLyBwdWJsaWMgcHJvcGVydGllc1xuICAgICAgICB0aGlzLiRvdXRwdXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kYmluZGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuJGF0dHIgPSBudWxsO1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kcHJpb3JpdHkgPSAwO1xuICAgICAgICB0aGlzLiRlbGVtZW50bG9hZGVkID0gZmFsc2U7XG4gICAgICAgIC8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcyk7XG4gICAgfVxuXG4gICAgJGhvb2tzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb25Jbml0OiAnJyxcbiAgICAgICAgICAgIG9uQ29tcGlsZTogJycsXG4gICAgICAgICAgICBvbkluc2VydDogJycsXG4gICAgICAgICAgICBvbkRldGVjdDogJycsXG4gICAgICAgICAgICBvblVwZGF0ZTogJycsXG4gICAgICAgICAgICBvbkRlc3Ryb3k6ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgJGdldE1ldGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YSB8fCB7fTtcbiAgICB9XG5cbiAgICAkc2V0TWV0YSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiQkbWV0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgICRiaW5kTm9kZShub2RlKSB7XG4gICAgICAgIHRoaXMuJGF0dHIgPSBub2RlO1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gbm9kZS5vd25lckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgJHNldEJpbmRpbmcoYmluZGluZykge1xuICAgICAgICB0aGlzLiRiaW5kaW5nID0gYmluZGluZztcbiAgICB9XG5cbiAgICAkY29tcGlsZShvcHRpb25zKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25Db21waWxlKSkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBpbGUuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRpbnNlcnQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uSW5zZXJ0KSkge1xuICAgICAgICAgICAgdGhpcy5vbkluc2VydC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkVudGVyKSB8fCB1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25MZWF2ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlcXVlc3RBbmltYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRpc0xvYWRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0bWxFbGVtZW50LmNsaWVudFdpZHRoID4gMCAmJiB0aGlzLiRodG1sRWxlbWVudC5jbGllbnRIZWlnaHQgPiAwO1xuICAgIH1cblxuICAgICRyZXF1ZXN0QW5pbWF0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgZnVuY3Rpb24gcXVlcnkoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi4kJGNhbmNlbEFuaW1hdGlvblRva2VuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi4kaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgICAgIGlmICghc2VsZi4kZWxlbWVudGxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbGVtZW50bG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYub25FbnRlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9uRW50ZXIuY2FsbChzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLiRlbGVtZW50bG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVsZW1lbnRsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYub25MZWF2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9uTGVhdmUuY2FsbChzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG4gICAgfVxuXG4gICAgJGNhbmNlbEFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy4kJGNhbmNlbEFuaW1hdGlvblRva2VuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAkZGV0ZWN0KCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGV0ZWN0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25EZXRlY3QuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nLmRldGVjdCgpKSB7XG4gICAgICAgICAgICB0aGlzLiR1cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICR1cGRhdGUoKSB7XG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25VcGRhdGUpKSB7XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkZ2V0QXR0clZhbHVlKGF0dHJOYW1lKSB7XG4gICAgICAgIHZhciBhdHRyTm9kZSA9IHRoaXMuJGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKTtcblxuICAgICAgICBpZiAoYXR0ck5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF0dHJOb2RlLmJpbmRpbmcudmFsdWU7XG4gICAgfVxuXG4gICAgJGRpc3Bvc2UoZGVzdHJveUZyb21BdHRyKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLiRjYW5jZWxBbmltYXRpb24oKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGVzdHJveSkpIHtcbiAgICAgICAgICAgIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVzdHJveUZyb21BdHRyKSB7XG4gICAgICAgICAgICB0aGlzLiRhdHRyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kJGRpc3Bvc2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChkaXNwb3Nlcikge1xuICAgICAgICAgICAgZGlzcG9zZXIuY2FsbChzZWxmKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kYmluZGluZyA9IG51bGw7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJGRpc3Bvc2UoKTtcblxuICAgICAgICBpZiAodGhpcy4kYXR0ciAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRhdHRyLmRpc3Bvc2UodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLiRhdHRyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xuaW1wb3J0IHtpbmplY3Rvcn0gZnJvbSAnLi9pbmplY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIEZpbHRlci5jb25zdHJ1Y3QuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29uc3RydWN0KCkge1xuICAgICAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcbiAgICB9XG5cbiAgICAkaG9va3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvbkluaXQ6ICcnLFxuICAgICAgICAgICAgb25EZXN0cm95OiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgICRnZXRNZXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGEgfHwge307XG4gICAgfVxuXG4gICAgJHNldE1ldGEodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kJG1ldGEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAkZXhlY3V0ZSgpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkV4ZWN1dGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkV4ZWN1dGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRkZXN0cm95KCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGVzdHJveSkpIHtcbiAgICAgICAgICAgIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgeyB0eXBlQ29uc3QsIGluamVjdG9yLCBJbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4vc2VydmljZSc7XG5cbmZ1bmN0aW9uIG5hbWVzcGFjZShucykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudChuYW1lLCBkZWYpO1xuICAgICAgICB9LFxuICAgICAgICBkaXJlY3RpdmU6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRlZikpIHtcbiAgICAgICAgICAgICAgICBkZWYgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5zZXJ0OiBkZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZTogZGVmXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZShuYW1lLCBkZWYpO1xuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlOiBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gICAgICAgICAgICBkZWYubmFtZXNwYWNlID0gbnM7XG4gICAgICAgICAgICByZXR1cm4gc2VydmljZShuYW1lLCBkZWYpO1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRlZikpIHtcbiAgICAgICAgICAgICAgICBkZWYgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXhlY3V0ZTogZGVmXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmLm5hbWVzcGFjZSA9IG5zO1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihuYW1lLCBkZWYpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50KG5hbWUsIGRlZikge1xuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5jb21wb25lbnQsXG4gICAgICAgIHN1cGVyQ2xhc3M6IG1ha2VDb25zdHJ1Y3RvcihDb21wb25lbnQpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGl2ZShuYW1lLCBkZWYpIHtcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XG4gICAgICAgIGRlZiA9IHtcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICBvbkluc2VydDogZGVmLFxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiBkZWZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuZGlyZWN0aXZlLFxuICAgICAgICBzdXBlckNsYXNzOiBtYWtlQ29uc3RydWN0b3IoRGlyZWN0aXZlKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIobmFtZSwgZGVmKSB7XG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xuICAgICAgICBkZWYgPSB7XG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgb25FeGVjdXRlOiBkZWZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuZmlsdGVyLFxuICAgICAgICBzdXBlckNsYXNzOiBtYWtlQ29uc3RydWN0b3IoRmlsdGVyKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXJ2aWNlKG5hbWUsIGRlZikge1xuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5zZXJ2aWNlLFxuICAgICAgICBzdXBlckNsYXNzOiBtYWtlQ29uc3RydWN0b3IoU2VydmljZSlcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaXNDb21wb25lbnQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIENvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RpdmUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIERpcmVjdGl2ZTtcbn1cblxuZnVuY3Rpb24gaXNGaWx0ZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEZpbHRlcjtcbn1cblxuZnVuY3Rpb24gaXNTZXJ2aWNlKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBTZXJ2aWNlO1xufVxuXG5mdW5jdGlvbiBib290c3RyYXAoc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudCwgdHBsO1xuXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdHBsID0gZWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICBuZXcgQ29tcG9uZW50KHtcbiAgICAgICAgdGVtcGxhdGU6IHRwbFxuICAgIH0pLiRtb3VudChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gbWFrZUNvbnN0cnVjdG9yKGNscykge1xuICAgIGZ1bmN0aW9uIGYoKSB7XG4gICAgICAgIGNscy5jb25zdHJ1Y3QuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBmLnByb3RvdHlwZSA9IGNscy5wcm90b3R5cGU7XG4gICAgcmV0dXJuIGY7XG59XG5cbmV4cG9ydCB7XG4gICAgdHlwZUNvbnN0LFxuICAgIGluamVjdG9yLFxuICAgIEluamVjdG9yLFxuICAgIENvbXBvbmVudCxcbiAgICBEaXJlY3RpdmUsXG4gICAgRmlsdGVyLFxuICAgIFNlcnZpY2UsXG4gICAgaXNDb21wb25lbnQsXG4gICAgaXNEaXJlY3RpdmUsXG4gICAgaXNGaWx0ZXIsXG4gICAgaXNTZXJ2aWNlLFxuICAgIG5hbWVzcGFjZSxcbiAgICBjb21wb25lbnQsXG4gICAgZGlyZWN0aXZlLFxuICAgIGZpbHRlcixcbiAgICBzZXJ2aWNlLFxuICAgIGJvb3RzdHJhcFxufTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHkvbWVzc2FnZSc7XG5cbnZhciB0eXBlQ29uc3QgPSB7XG4gICAgZmlsdGVyOiAnZmlsdGVyJyxcbiAgICBzZXJ2aWNlOiAnc2VydmljZScsXG4gICAgY29tcG9uZW50OiAnY29tcG9uZW50JyxcbiAgICBkaXJlY3RpdmU6ICdkaXJlY3RpdmUnXG59O1xuXG52YXIgbmFtZVBhdHRlcm4gPSAvXlthLXpfXFwkXVtcXHdcXCQtXSovaTtcblxuY2xhc3MgSW5qZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHt9O1xuICAgICAgICB0aGlzLndhaXRpbmdUb0V4dGVuZHMgPSB7fTtcbiAgICAgICAgdGhpcy5pbnNDb250YWluZXIgPSB7fTtcbiAgICB9XG5cbiAgICBnZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSkge1xuICAgICAgICBpZiAoIXRoaXMuY29udGFpbmVyW2NvbnRyYWN0VHlwZV0pIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyW2NvbnRyYWN0VHlwZV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXTtcbiAgICB9XG5cbiAgICBnZXRJbnN0YW5jZXMoY29udHJhY3RUeXBlKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnNDb250YWluZXJbY29udHJhY3RUeXBlXSkge1xuICAgICAgICAgICAgdGhpcy5pbnNDb250YWluZXJbY29udHJhY3RUeXBlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc0NvbnRhaW5lcltjb250cmFjdFR5cGVdO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKGNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmIChzZWxlY3Rvci5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgY2hhcmFjdGVyIFwiLlwiJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xuXG4gICAgICAgIGlmIChtYXBwaW5nW3NlbGVjdG9yXSA9PSBudWxsKSB7XG4gICAgICAgICAgICBtYXBwaW5nW3NlbGVjdG9yXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBtYXBwaW5nW3NlbGVjdG9yXS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhLm5hbWVzcGFjZSA9PT0gY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YS5uYW1lc3BhY2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzZWxlY3RvciArICcgaXMgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBtYXRjaGVzWzBdLnByb3RvdHlwZS4kJG1ldGEubmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcHBpbmdbc2VsZWN0b3JdLnB1c2goY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ29tcG9uZW50KHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHR5cGVDb25zdC5jb21wb25lbnQsIHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJEaXJlY3RpdmUoc2VsZWN0b3IsIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIodHlwZUNvbnN0LmRpcmVjdGl2ZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBjb250YWlucyhjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBpZ25vcmVDYXNlKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIG1hcHBpbmcgPSB0aGlzLmdldE1hcHBpbmcoY29udHJhY3RUeXBlKTtcbiAgICAgICAgdmFyIHNlZ21lbnRzID0gc2VsZWN0b3Iuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xuXG4gICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBzZWxlY3RvciA9IHNlZ21lbnRzLnBvcCgpO1xuICAgICAgICAgICAgbmFtZXNwYWNlID0gc2VnbWVudHMuam9pbignLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlnbm9yZUNhc2UpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHV0aWxzLmdldFByb3BlcnR5KG1hcHBpbmcsIHNlbGVjdG9yLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IG1hcHBpbmdbc2VsZWN0b3JdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1ldGEgPSBpdGVtLnByb3RvdHlwZS4kJG1ldGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29udGFpbnNDb21wb25lbnQoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbnModHlwZUNvbnN0LmNvbXBvbmVudCwgc2VsZWN0b3IsIHRydWUpO1xuICAgIH1cblxuICAgIGNvbnRhaW5zRGlyZWN0aXZlKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5zKHR5cGVDb25zdC5kaXJlY3RpdmUsIHNlbGVjdG9yLCB0cnVlKTtcbiAgICB9XG5cbiAgICBnZXQoY29udHJhY3RUeXBlLCBzZWxlY3RvciwgaWdub3JlQ2FzZSkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3JzLCBtYXBwaW5nID0gdGhpcy5nZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSk7XG4gICAgICAgIHZhciBzZWdtZW50cyA9IHNlbGVjdG9yLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAnJztcblxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWdtZW50cy5wb3AoKTtcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShtYXBwaW5nLCBzZWxlY3RvciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBtYXBwaW5nW3NlbGVjdG9yXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRyYWN0VHlwZSArICcgJyArIHNlbGVjdG9yICsgJyBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UobWV0YS5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzZWxlY3RvciArICcgaXMgbm90IGV4aXN0IHVuZGVyIG5hbWVzcGFjZSAnICsgbmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmFyIG5hbWVzcGFjZXMgPSBjb25zdHJ1Y3RvcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YS5uYW1lc3BhY2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbmFtZXNwYWNlICcgKyBuYW1lc3BhY2VzLmpvaW4oJ3wnKSArICcgYWxsIGhhdmUgJyArIHNlbGVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcnNbMF07XG4gICAgfVxuXG4gICAgZ2V0Q29tcG9uZW50KHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0eXBlQ29uc3QuY29tcG9uZW50LCBzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aXZlKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0eXBlQ29uc3QuZGlyZWN0aXZlLCBzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgZ2V0RmlsdGVyKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0eXBlQ29uc3QuZmlsdGVyLCBzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgZ2V0U2VydmljZShzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LnNlcnZpY2UsIHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoY29udHJhY3RUeXBlLCBzZWxlY3Rvcikge1xuICAgICAgICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmdldChjb250cmFjdFR5cGUsIHNlbGVjdG9yKSwgaW5zdGFuY2U7XG5cbiAgICAgICAgc3dpdGNoIChjb250cmFjdFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmNvbXBvbmVudDpcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlQ29tcG9uZW50KGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmRpcmVjdGl2ZTpcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlRGlyZWN0aXZlKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmZpbHRlcjpcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlRmlsdGVyKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LnNlcnZpY2U6XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZVNlcnZpY2UoY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbXBvbmVudChjb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlRGlyZWN0aXZlKGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXREaXJlY3RpdmUoY29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVGaWx0ZXIoY29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldEZpbHRlcihjb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZVNlcnZpY2UoY29uc3RydWN0b3IpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlLCBzZXJ2aWNlcyA9IHRoaXMuZ2V0SW5zdGFuY2VzKHR5cGVDb25zdC5zZXJ2aWNlKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0U2VydmljZShjb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGEubm9uU2hhcmVkKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gc2VydmljZXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBjb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3IoKTtcbiAgICAgICAgICAgIHNlcnZpY2VzLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIHNlcnZpY2Uoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2VydmljZShzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgZ2V0V2FpdGluZ1RvRXh0ZW5kcyhjb250cmFjdFR5cGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXSkge1xuICAgICAgICAgICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV07XG4gICAgfVxuXG4gICAgc2V0V2FpdGluZ1RvRXh0ZW5kcyhjb250cmFjdFR5cGUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY2hlY2tTZWxlY3RvcihzZWxlY3RvciwgY29udHJhY3RUeXBlKSB7XG4gICAgICAgIGlmIChuYW1lUGF0dGVybi50ZXN0KHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgdmFyIGNvbnN0cnVjdG9yTmFtZSA9ICcnO1xuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0gc2VsZWN0b3Iuc3BsaXQoJy0nKTtcblxuICAgICAgICAgICAgc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSB1dGlscy51cHBlcmNhc2Uoc2VnbWVudFswXSkgKyBzZWdtZW50LnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbnRyYWN0VHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LmNvbXBvbmVudDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lICs9ICdDb21wb25lbnQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVDb25zdC5kaXJlY3RpdmU6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSAnRGlyZWN0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlQ29uc3QuZmlsdGVyOlxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgKz0gJ0ZpbHRlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdHlwZUNvbnN0LnNlcnZpY2U6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArPSAnU2VydmljZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3JOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNlbGVjdG9yICsgJ2lzIG5vdCBhIHZhbGlkIG5hbWUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1aWxkQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgY29uc3RydWN0b3IsXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgPSB0aGlzLmNoZWNrU2VsZWN0b3Ioc2VsZWN0b3IsIG9wdGlvbnMuY29udHJhY3RUeXBlKSxcbiAgICAgICAgICAgIHdhaXRpbmdUb0V4dGVuZHMgPSBzZWxmLmdldFdhaXRpbmdUb0V4dGVuZHMob3B0aW9ucy5jb250cmFjdFR5cGUpLFxuICAgICAgICAgICAgb25Db25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uc3RydWN0b3Iuc3VwZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yLnN1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKG1ldGEuY29uc3RydWN0KSkge1xuICAgICAgICAgICAgICAgICAgICBtZXRhLmNvbnN0cnVjdC5jYWxsKHRoaXMsIE1lc3Nlbmdlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBGdW5jdGlvbignb25Db25zdHJ1Y3QnLCAnXCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uICcgKyBjb25zdHJ1Y3Rvck5hbWUgKyAnKCl7b25Db25zdHJ1Y3QuY2FsbCh0aGlzKTt9OycpKG9uQ29uc3RydWN0KTtcblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihvcHRpb25zLnN1cGVyQ2xhc3MpKSB7XG4gICAgICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBvcHRpb25zLnN1cGVyQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0YS5zZWxlY3RvciA9IHNlbGVjdG9yO1xuXG4gICAgICAgIC8vIGFwcGx5IHByb3BlcnRpZXMgYW5kIG1ldGhvZHNcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKG1ldGEuZXh0ZW5kcykpIHtcbiAgICAgICAgICAgIGlmIChpbmplY3Rvci5jb250YWlucyhvcHRpb25zLmNvbnRyYWN0VHlwZSwgbWV0YS5leHRlbmRzKSkge1xuICAgICAgICAgICAgICAgIHZhciBzdXBlck9uZSA9IGluamVjdG9yLmdldChvcHRpb25zLmNvbnRyYWN0VHlwZSwgbWV0YS5leHRlbmRzKTtcbiAgICAgICAgICAgICAgICByZW1haW5Db25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgY29uc3RydWN0b3IsIHN1cGVyT25lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdhaXRpbmdUb0V4dGVuZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyTmFtZTogbWV0YS5leHRlbmRzLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHN1cGVyT25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1haW5Db25zdHJ1Y3RvcihzZWxlY3RvciwgbWV0YSwgY29uc3RydWN0b3IsIHN1cGVyT25lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZE1ldGEobWV0YSwgc3VwZXJPbmUpIHtcbiAgICAgICAgICAgIGlmIChzdXBlck9uZS5wcm90b3R5cGUuJCRtZXRhICYmIHN1cGVyT25lLnByb3RvdHlwZS4kJG1ldGEucHJvdGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG9wdGlvbnMuY29udHJhY3RUeXBlICsgJzogJyArIG1ldGEuZXh0ZW5kcyArICcgaXMgcHJvdGVjdGVkLCBpdCBpcyBub3QgYWxsb3dlZCB0byBleHRlbmQhJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzdXBlck1ldGEgPSBzdXBlck9uZS5wcm90b3R5cGUuJCRtZXRhO1xuICAgICAgICAgICAgdmFyIGNvcHkgPSB1dGlscy5jb3B5KHRydWUsIHN1cGVyTWV0YSwgZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEob2JqID09PSBzdXBlck1ldGEgJiYgKGtleSA9PT0gJ2NvbnN0cnVjdCcgfHwga2V5ID09PSAnbWV0aG9kcycpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHRydWUsIGNvcHksIG1ldGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtYWluQ29uc3RydWN0b3Ioc2VsZWN0b3IsIG1ldGEsIGNvbnN0cnVjdG9yLCBzdXBlck9uZSkge1xuICAgICAgICAgICAgaWYgKHN1cGVyT25lICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBzdXBlck9uZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBtZXRob2RzXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QobWV0YS5tZXRob2RzKSkge1xuICAgICAgICAgICAgICAgIHV0aWxzLmV4dGVuZChjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGEubWV0aG9kcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYucmVnaXN0ZXJDb25zdHJ1Y3RvcihvcHRpb25zLmNvbnRyYWN0VHlwZSwgc2VsZWN0b3IsIGNvbnN0cnVjdG9yLCBtZXRhKTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYW55IGNvbXBvbmVudCBleHRlbmRzIGN1cnJlbnQgY29tcG9uZW50XG4gICAgICAgICAgICB2YXIgd2FpdGluZ1RvRXh0ZW5kczIgPSBbXSwgZnVsbFNlbGVjdG9yID0gbWV0YS5uYW1lc3BhY2UgKyAnLicgKyBzZWxlY3RvcjtcbiAgICAgICAgICAgIHdhaXRpbmdUb0V4dGVuZHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnN1cGVyTmFtZSA9PT0gZnVsbFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2FsbGJhY2suY2FsbChudWxsLCBjb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzMi5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5zZXRXYWl0aW5nVG9FeHRlbmRzKG9wdGlvbnMuY29udHJhY3RUeXBlLCB3YWl0aW5nVG9FeHRlbmRzMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDb25zdHJ1Y3Rvcihjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBjb25zdHJ1Y3RvciwgbWV0YSkge1xuICAgICAgICB2YXIgc3VwZXJNZXRhID0gY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YTtcblxuICAgICAgICBpZiAoc3VwZXJNZXRhICYmIHN1cGVyTWV0YS5wcm90ZWN0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb250cmFjdFR5cGUgKyAnOiAnICsgbWV0YS5leHRlbmRzICsgJyBpcyBwcm90ZWN0ZWQsIGl0IGlzIG5vdCBhbGxvd2VkIHRvIGV4dGVuZCEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb3B5ID0gdXRpbHMuY29weSh0cnVlLCBzdXBlck1ldGEsIGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuICEob2JqID09PSBzdXBlck1ldGEgJiYgKGtleSA9PT0gJ2NvbnN0cnVjdCcgfHwga2V5ID09PSAnbWV0aG9kcycpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWV0YSA9IHV0aWxzLm1lcmdlKHRydWUsIGNvcHksIG1ldGEpO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGEgPSBtZXRhO1xuXG4gICAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBpZiBpdCBpcyBnbG9iYWxcbiAgICAgICAgaWYgKCFtZXRhLmxvY2FsKSB7XG4gICAgICAgICAgICBpbmplY3Rvci5yZWdpc3Rlcihjb250cmFjdFR5cGUsIHNlbGVjdG9yLCBjb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbmplY3RTZXJ2aWNlcyhpbnN0YW5jZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIG1ldGEgPSBpbnN0YW5jZS4kZ2V0TWV0YSgpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc09iamVjdChtZXRhLmluamVjdCkpIHtcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gobWV0YS5pbmplY3QsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGluc3RhbmNlLCBrZXksIHtcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaXZhdGVLZXkgPSAnJCQnICsga2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VbcHJpdmF0ZUtleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlW3ByaXZhdGVLZXldID0gc2VsZi5jcmVhdGVTZXJ2aWNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlW3ByaXZhdGVLZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIGluamVjdG9yID0gbmV3IEluamVjdG9yKCk7XG5cbmV4cG9ydCB7IHR5cGVDb25zdCwgSW5qZWN0b3IsIGluamVjdG9yIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XG5pbXBvcnQge2luamVjdG9yfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGNsYXNzIFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBTZXJ2aWNlLmNvbnN0cnVjdC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMpO1xuICAgIH1cblxuICAgICRob29rcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9uSW5pdDogJycsXG4gICAgICAgICAgICBvbkRlc3Ryb3k6ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgJGdldE1ldGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YSB8fCB7fTtcbiAgICB9XG5cbiAgICAkc2V0TWV0YSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiQkbWV0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgICRkZXN0cm95KCkge1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGVzdHJveSkpIHtcbiAgICAgICAgICAgIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==