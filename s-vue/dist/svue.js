(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SVue"] = factory();
	else
		root["SVue"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/instance/index.js":
/*!************************************!*\
  !*** ./src/core/instance/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/core/instance/init.js");


function SVue(options) {
  this._init(options);
}

Object(_init__WEBPACK_IMPORTED_MODULE_0__["init"])(SVue);
/* harmony default export */ __webpack_exports__["default"] = (SVue);

/***/ }),

/***/ "./src/core/instance/init.js":
/*!***********************************!*\
  !*** ./src/core/instance/init.js ***!
  \***********************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/core/instance/state.js");

var uid = 0;
function init(SVue) {
  // 在vue原型上挂载`_init`初始化方法
  SVue.prototype._init = function (options) {
    var vm = this;
    vm._uid = uid++;
    vm.$options = options; // 初始化状态：data

    Object(_state__WEBPACK_IMPORTED_MODULE_0__["initState"])(vm); //模拟钩子函数

    var created = options.created;

    if (created && typeof created === 'function') {
      created.call(vm);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

/***/ }),

/***/ "./src/core/instance/lifecycle.js":
/*!****************************************!*\
  !*** ./src/core/instance/lifecycle.js ***!
  \****************************************/
/*! exports provided: mountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountComponent", function() { return mountComponent; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function mountComponent(vm, el) {
  vm.$el = el;
  console.log(_typeof(el), el);
}

/***/ }),

/***/ "./src/core/instance/state.js":
/*!************************************!*\
  !*** ./src/core/instance/state.js ***!
  \************************************/
/*! exports provided: initState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
function initState(vm) {
  var opts = vm.$options; // 初始化data

  if (opts.data) {
    initData(vm);
  }
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {}; // 将data的属性代理到vue实例

  Object.keys(data).forEach(function (key) {
    proxy(vm, '_data', key);
  });
}

function getData(data, vm) {
  return data.call(vm, vm);
}

function proxy(vm, sourcekey, key) {
  Object.defineProperty(vm, key, {
    get: function get() {
      return vm[sourcekey][key];
    },
    set: function set(val) {
      vm[sourcekey][key] = val;
    }
  });
}

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web/runtime */ "./src/web/runtime/index.js");
/* harmony import */ var web_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web/util */ "./src/web/util/index.js");


var mount = web_runtime__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$mount;

web_runtime__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$mount = function (el) {
  el = el && Object(web_util__WEBPACK_IMPORTED_MODULE_1__["query"])(el);
  return mount.call(this, el);
};

/* harmony default export */ __webpack_exports__["default"] = (web_runtime__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/web/runtime/index.js":
/*!**********************************!*\
  !*** ./src/web/runtime/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/instance */ "./src/core/instance/index.js");
/* harmony import */ var core_instance_lifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/instance/lifecycle */ "./src/core/instance/lifecycle.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/web/util/index.js");




core_instance__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$mount = function (el) {
  el = el ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["query"])(el) : undefined;
  return Object(core_instance_lifecycle__WEBPACK_IMPORTED_MODULE_1__["mountComponent"])(this, el);
};

/* harmony default export */ __webpack_exports__["default"] = (core_instance__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/web/util/index.js":
/*!*******************************!*\
  !*** ./src/web/util/index.js ***!
  \*******************************/
/*! exports provided: query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);

    if (!selected) {
      console.error('Cannot find element: ' + el);
      return document.createElement('div');
    }

    return selected;
  } else {
    return el;
  }
}

/***/ })

/******/ });
});
//# sourceMappingURL=svue.js.map