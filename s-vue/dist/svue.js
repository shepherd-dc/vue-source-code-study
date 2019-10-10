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

/***/ "./src/core/config.js":
/*!****************************!*\
  !*** ./src/core/config.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/util */ "./src/shared/util.js");
/* harmony import */ var shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/constants */ "./src/shared/constants.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: shared_util__WEBPACK_IMPORTED_MODULE_0__["no"],

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: shared_util__WEBPACK_IMPORTED_MODULE_0__["no"],

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: shared_util__WEBPACK_IMPORTED_MODULE_0__["no"],

  /**
   * Get the namespace of an element
   */
  getTagNamespace: shared_util__WEBPACK_IMPORTED_MODULE_0__["noop"],

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: shared_util__WEBPACK_IMPORTED_MODULE_0__["identity"],

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: shared_util__WEBPACK_IMPORTED_MODULE_0__["no"],

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: shared_constants__WEBPACK_IMPORTED_MODULE_1__["LIFECYCLE_HOOKS"]
});

/***/ }),

/***/ "./src/core/global-api/assets.js":
/*!***************************************!*\
  !*** ./src/core/global-api/assets.js ***!
  \***************************************/
/*! exports provided: initAssetRegisters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAssetRegisters", function() { return initAssetRegisters; });
/* harmony import */ var shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/constants */ "./src/shared/constants.js");
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/index */ "./src/core/util/index.js");


function initAssetRegisters(SVue) {
  /**
   * Create asset registration methods.
   */
  shared_constants__WEBPACK_IMPORTED_MODULE_0__["ASSET_TYPES"].forEach(function (type) {
    SVue[type] = function (id, // string
    definition // Function | Object
    ) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        if (type === 'component' && Object(_util_index__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }

        if (type === 'directive' && typeof definition === 'function') {
          definition = {
            bind: definition,
            update: definition
          };
        }

        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}

/***/ }),

/***/ "./src/core/global-api/extend.js":
/*!***************************************!*\
  !*** ./src/core/global-api/extend.js ***!
  \***************************************/
/*! exports provided: initExtend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initExtend", function() { return initExtend; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/core/util/index.js");

function initExtend(SVue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  SVue.cid = 0;
  var cid = 1;
  /**
   * Class inheritance
   */

  SVue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name; // Vue子构造器

    var Sub = function SVueComponent(options) {
      this._init(options);
    };

    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = Object(_util__WEBPACK_IMPORTED_MODULE_0__["mergeOptions"])(Super.options, extendOptions);
    Sub['super'] = Super; // allow further extension/mixin/plugin usage

    Sub.extend = Super.extend; // enable recursive self-lookup

    if (name) {
      Sub.options.components[name] = Sub;
    } // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.


    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, Sub.options); // cache constructor

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

/***/ }),

/***/ "./src/core/global-api/index.js":
/*!**************************************!*\
  !*** ./src/core/global-api/index.js ***!
  \**************************************/
/*! exports provided: initGlobalAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGlobalAPI", function() { return initGlobalAPI; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/core/config.js");
/* harmony import */ var _mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixin */ "./src/core/global-api/mixin.js");
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extend */ "./src/core/global-api/extend.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets */ "./src/core/global-api/assets.js");
/* harmony import */ var shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/constants */ "./src/shared/constants.js");





function initGlobalAPI(SVue) {
  // config
  var configDef = {};

  configDef.get = function () {
    return _config__WEBPACK_IMPORTED_MODULE_0__["default"];
  };

  configDef.set = function () {
    console.error('Do not replace the Vue.config object, set individual fields instead.');
  };

  Object.defineProperty(SVue, 'config', configDef);
  SVue.options = Object.create(null);
  shared_constants__WEBPACK_IMPORTED_MODULE_4__["ASSET_TYPES"].forEach(function (type) {
    SVue.options[type + 's'] = Object.create(null);
  }); // this is used to identify the "base" constructor to extend all plain-object components

  SVue.options._base = SVue;
  Object(_mixin__WEBPACK_IMPORTED_MODULE_1__["initMixin"])(SVue);
  Object(_extend__WEBPACK_IMPORTED_MODULE_2__["initExtend"])(SVue);
  Object(_assets__WEBPACK_IMPORTED_MODULE_3__["initAssetRegisters"])(SVue);
}

/***/ }),

/***/ "./src/core/global-api/mixin.js":
/*!**************************************!*\
  !*** ./src/core/global-api/mixin.js ***!
  \**************************************/
/*! exports provided: initMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMixin", function() { return initMixin; });
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ "./src/core/util/index.js");

function initMixin(SVue) {
  SVue.mixin = function (mixin) {
    this.options = Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["mergeOptions"])(this.options, mixin);
    return this;
  };
}

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _instance_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance/index */ "./src/core/instance/index.js");
/* harmony import */ var _global_api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-api/index */ "./src/core/global-api/index.js");


Object(_global_api_index__WEBPACK_IMPORTED_MODULE_1__["initGlobalAPI"])(_instance_index__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (_instance_index__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/core/instance/index.js":
/*!************************************!*\
  !*** ./src/core/instance/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/core/instance/init.js");
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lifecycle */ "./src/core/instance/lifecycle.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/core/instance/render.js");




function SVue(options) {
  this._init(options);
}

Object(_init__WEBPACK_IMPORTED_MODULE_0__["initMixin"])(SVue);
Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["lifecycleMixin"])(SVue);
Object(_render__WEBPACK_IMPORTED_MODULE_2__["renderMixin"])(SVue);
/* harmony default export */ __webpack_exports__["default"] = (SVue);

/***/ }),

/***/ "./src/core/instance/init.js":
/*!***********************************!*\
  !*** ./src/core/instance/init.js ***!
  \***********************************/
/*! exports provided: initMixin, initInternalComponent, resolveConstructorOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMixin", function() { return initMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initInternalComponent", function() { return initInternalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveConstructorOptions", function() { return resolveConstructorOptions; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/core/instance/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/core/instance/render.js");
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifecycle */ "./src/core/instance/lifecycle.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/core/util/index.js");




var uid = 0;
function initMixin(SVue) {
  // 在vue原型上挂载`_init`初始化方法
  SVue.prototype._init = function (options) {
    var vm = this;
    vm._uid = uid++; // a flag to avoid this being observed

    vm._isVue = true; // merge options

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = Object(_util__WEBPACK_IMPORTED_MODULE_3__["mergeOptions"])(resolveConstructorOptions(vm.constructor), options || {}, vm);
    } // 一系列初始化


    Object(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["initLifecycle"])(vm); // 初始化生命周期

    Object(_render__WEBPACK_IMPORTED_MODULE_1__["initRender"])(vm); // 初始化render --> vm.$createElement

    Object(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["callHook"])(vm, 'beforeCreate');
    Object(_state__WEBPACK_IMPORTED_MODULE_0__["initState"])(vm); // 初始化状态：data    

    Object(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["callHook"])(vm, 'created'); // new Vue()时如果传了el自动$mount

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}
function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}
function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;

  if (Ctor["super"]) {
    var superOptions = resolveConstructorOptions(Ctor["super"]);
    var cachedSuperOptions = Ctor.superOptions;

    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

      var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

      if (modifiedOptions) {
        Object(_util__WEBPACK_IMPORTED_MODULE_3__["extend"])(Ctor.extendOptions, modifiedOptions);
      }

      options = Ctor.options = Object(_util__WEBPACK_IMPORTED_MODULE_3__["mergeOptions"])(superOptions, Ctor.extendOptions);

      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }

  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;

  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) modified = {};
      modified[key] = latest[key];
    }
  }

  return modified;
}

/***/ }),

/***/ "./src/core/instance/lifecycle.js":
/*!****************************************!*\
  !*** ./src/core/instance/lifecycle.js ***!
  \****************************************/
/*! exports provided: activeInstance, initLifecycle, lifecycleMixin, mountComponent, callHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeInstance", function() { return activeInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initLifecycle", function() { return initLifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycleMixin", function() { return lifecycleMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountComponent", function() { return mountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callHook", function() { return callHook; });
// 全局当前激活实例
var activeInstance = null; // export function setActiveInstance(vm) {
//   const prevActiveInstance = activeInstance
//   activeInstance = vm
//   return () => {
//     activeInstance = prevActiveInstance
//   }
// }
// initLifecycle

function initLifecycle(vm) {
  var options = vm.$options; // locate first non-abstract parent
  // 建立记录父子关系

  var parent = options.parent;

  if (parent && !options["abstract"]) {
    while (parent.$options["abstract"] && parent.$parent) {
      parent = parent.$parent;
    }

    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
} // SVue.prototype._update

function lifecycleMixin(SVue) {
  SVue.prototype._update = function (vnode) {
    var vm = this; // 记录当前激活实例
    // const restoreActiveInstance = setActiveInstance(vm)

    var prevActiveInstance = activeInstance;
    activeInstance = vm; // vm._vnode: 渲染vnode(子) <--> vm.$vnode: 占位vnode(父)

    vm._vnode = vnode; // initial render

    vm.$el = vm.__patch__(vm.$el, vnode); // restoreActiveInstance()

    activeInstance = prevActiveInstance;
  };
}
function mountComponent(vm, el) {
  vm.$el = el;
  callHook(vm, 'beforeMount');

  var updateComponent = function updateComponent() {
    vm._update(vm._render());
  }; // 模拟Watcher中getter的调用


  updateComponent.call(vm, vm);

  if (vm._isMounted) {
    callHook(vm, 'beforeUpdate');
  } // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook


  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }

  return vm;
}
function callHook(vm, hook) {
  var handlers = vm.$options[hook];
  var info = "".concat(hook, " hook");

  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        console.error(e, info);
      }
    }
  }
}

/***/ }),

/***/ "./src/core/instance/render.js":
/*!*************************************!*\
  !*** ./src/core/instance/render.js ***!
  \*************************************/
/*! exports provided: renderMixin, initRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMixin", function() { return renderMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRender", function() { return initRender; });
/* harmony import */ var _vdom_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vdom/create-element */ "./src/core/vdom/create-element.js");
/* harmony import */ var _vdom_vnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vdom/vnode */ "./src/core/vdom/vnode.js");

 // SVue.prototype._render

function renderMixin(SVue) {
  SVue.prototype._render = function () {
    var vm = this;
    var _vm$$options = vm.$options,
        render = _vm$$options.render,
        _parentVnode = _vm$$options._parentVnode; // vm.$vnode: 占位vnode(父) <--> vm._vnode: 渲染vnode(子)

    vm.$vnode = _parentVnode;
    var vnode;
    vnode = render.call(vm, vm.$createElement); // return empty vnode in case the render function errored out

    if (!(vnode instanceof _vdom_vnode__WEBPACK_IMPORTED_MODULE_1__["default"])) {
      vnode = Object(_vdom_vnode__WEBPACK_IMPORTED_MODULE_1__["createEmptyVNode"])();
    } // set parent


    vnode.parent = _parentVnode;
    return vnode;
  };
}
function initRender(vm) {
  vm._vnode = null; // the root of the child tree

  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

  var renderContext = parentVnode && parentVnode.context; // vm.$createElement 用户自定义render时使用

  vm.$createElement = function (a, b, c, d) {
    return Object(_vdom_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(vm, a, b, c, d, true);
  };
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

/***/ "./src/core/util/index.js":
/*!********************************!*\
  !*** ./src/core/util/index.js ***!
  \********************************/
/*! exports provided: mergeOptions, resolveAsset, isPrimitive, hasOwn, extend, isObject, isPlainObject, makeMap, noop, no, identity, cached, camelize, capitalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./src/core/util/options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return _options__WEBPACK_IMPORTED_MODULE_0__["mergeOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveAsset", function() { return _options__WEBPACK_IMPORTED_MODULE_0__["resolveAsset"]; });

/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/util */ "./src/shared/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return shared_util__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return shared_util__WEBPACK_IMPORTED_MODULE_1__["hasOwn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return shared_util__WEBPACK_IMPORTED_MODULE_1__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return shared_util__WEBPACK_IMPORTED_MODULE_1__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return shared_util__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMap", function() { return shared_util__WEBPACK_IMPORTED_MODULE_1__["makeMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return shared_util__WEBPACK_IMPORTED_MODULE_1__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "no", function() { return shared_util__WEBPACK_IMPORTED_MODULE_1__["no"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return shared_util__WEBPACK_IMPORTED_MODULE_1__["identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cached", function() { return shared_util__WEBPACK_IMPORTED_MODULE_1__["cached"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return shared_util__WEBPACK_IMPORTED_MODULE_1__["camelize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return shared_util__WEBPACK_IMPORTED_MODULE_1__["capitalize"]; });




/***/ }),

/***/ "./src/core/util/options.js":
/*!**********************************!*\
  !*** ./src/core/util/options.js ***!
  \**********************************/
/*! exports provided: mergeOptions, resolveAsset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveAsset", function() { return resolveAsset; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/core/config.js");
/* harmony import */ var shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/constants */ "./src/shared/constants.js");
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/util */ "./src/shared/util.js");



/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */

var strats = _config__WEBPACK_IMPORTED_MODULE_0__["default"].optionMergeStrategies;
/**
 * Hooks and props are merged as arrays.
 */

function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

shared_constants__WEBPACK_IMPORTED_MODULE_1__["LIFECYCLE_HOOKS"].forEach(function (hook) {
  strats[hook] = mergeHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);

  if (childVal) {
    return Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["extend"])(res, childVal);
  } else {
    return res;
  }
}

shared_constants__WEBPACK_IMPORTED_MODULE_1__["ASSET_TYPES"].forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});
/**
 * Default strategy.
 */

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {
  if (typeof child === 'function') {
    child = child.options;
  } // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.


  if (!child._base) {
    if (child["extends"]) {
      parent = mergeOptions(parent, child["extends"], vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */

function resolveAsset(options, // Object,
type, // string,
id // string
) {
  var assets = options[type]; // check local registration variations first
  // 局部注册的组件在当前实例可以找到

  if (Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(assets, id)) return assets[id];
  var camelizedId = Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["camelize"])(id);
  if (Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(assets, camelizedId)) return assets[camelizedId];
  var PascalCaseId = Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["capitalize"])(camelizedId);
  if (Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(assets, PascalCaseId)) return assets[PascalCaseId]; // fallback to prototype chain、
  // 全局注册的组件在原型链上可以找到

  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  return res;
}

/***/ }),

/***/ "./src/core/vdom/create-component.js":
/*!*******************************************!*\
  !*** ./src/core/vdom/create-component.js ***!
  \*******************************************/
/*! exports provided: createComponent, createComponentInstanceForVnode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponentInstanceForVnode", function() { return createComponentInstanceForVnode; });
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ "./src/core/vdom/vnode.js");
/* harmony import */ var core_instance_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/instance/init */ "./src/core/instance/init.js");
/* harmony import */ var _instance_lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../instance/lifecycle */ "./src/core/instance/lifecycle.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



 // inline hooks to be invoked on component VNodes during patch

var componentVNodeHooks = {
  init: function init(vnode) {
    var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, // MountedComponentVNode
    _instance_lifecycle__WEBPACK_IMPORTED_MODULE_2__["activeInstance"] // activeInstance in lifecycle state 当前激活实例 parent
    );
    child.$mount(undefined);
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance; // updateChildComponent(
    //   child,
    //   options.propsData, // updated props
    //   options.listeners, // updated listeners
    //   vnode, // new parent vnode
    //   options.children // new children
    // )
  },
  insert: function insert(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      Object(_instance_lifecycle__WEBPACK_IMPORTED_MODULE_2__["callHook"])(componentInstance, 'mounted');
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isDestroyed) {// deactivateChildComponent(componentInstance, true /* direct */)
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);
function createComponent(Ctor, // Class<Component> | Function | Object | void
data, // VNodeData
context, // Component
children, // Array<VNode>
tag // string
) {
  if (!Ctor) {
    return;
  }

  var baseCtor = context.$options._base; // plain options object: turn it into a constructor
  // 组件对象在此时继承Vue

  if (_typeof(Ctor) === 'object') {
    Ctor = baseCtor.extend(Ctor);
  } // if at this stage it's not a constructor or an async component factory, reject.
  // 全局注册的组件之前已经继承过Vue, 此时进来是个构造器, type为function, 不用再走继承逻辑


  if (typeof Ctor !== 'function') {
    return;
  }

  data = data || {}; // resolve constructor options in case global mixins are applied after
  // component constructor creation

  Object(core_instance_init__WEBPACK_IMPORTED_MODULE_1__["resolveConstructorOptions"])(Ctor); // install component management hooks onto the placeholder node

  installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new _vnode__WEBPACK_IMPORTED_MODULE_0__["default"]("vue-component-".concat(Ctor.cid).concat(name ? "-".concat(name) : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    tag: tag,
    children: children
  });
  return vnode;
}
function createComponentInstanceForVnode(vnode, // MountedComponentVNode
parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});

  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook(f1, f2) {
  var merged = function merged(a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };

  merged._merged = true;
  return merged;
}

/***/ }),

/***/ "./src/core/vdom/create-element.js":
/*!*****************************************!*\
  !*** ./src/core/vdom/create-element.js ***!
  \*****************************************/
/*! exports provided: createElement, simpleNormalizeChildren, normalizeChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleNormalizeChildren", function() { return simpleNormalizeChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeChildren", function() { return normalizeChildren; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/core/config.js");
/* harmony import */ var core_vdom_vnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/vdom/vnode */ "./src/core/vdom/vnode.js");
/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-component */ "./src/core/vdom/create-component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/core/util/index.js");




var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;
function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || Object(_util__WEBPACK_IMPORTED_MODULE_3__["isPrimitive"])(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (alwaysNormalize) {
    normalizationType = ALWAYS_NORMALIZE;
  }

  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, // Component
tag, // string | Class<Component> | Function | Object
data, // VNodeData
children, normalizationType) {
  // normalizeChildren 将多维数组拍平成一维数组
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode;

  if (typeof tag === 'string') {
    var Ctor;

    if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isReservedTag(tag)) {
      // platform built-in elements
      // dom原生保留标签
      vnode = new core_vdom_vnode__WEBPACK_IMPORTED_MODULE_1__["default"](tag, data, children, undefined, undefined, context);
    } // 全局注册的组件在原型链上都可以resolve到, 局部注册的组件只有在当前实例才能resolve到
    else if (Ctor = Object(_util__WEBPACK_IMPORTED_MODULE_3__["resolveAsset"])(context.$options, 'components', tag)) {
        // 实例上注册的组件
        // 全局注册：new Vue()之前事先调用 Vue.component静态方法, 继承了Vue的构造器, 随后createComponent()时不用再继承
        // 局部注册：拿到当前实例 context.$options.components, 走渲染正常组件的逻辑去继承Vue
        vnode = Object(_create_component__WEBPACK_IMPORTED_MODULE_2__["createComponent"])(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new core_vdom_vnode__WEBPACK_IMPORTED_MODULE_1__["default"](tag, data, children, undefined, undefined, context);
      }
  } else {
    // direct component options / constructor
    // render中第一个参数传入组件选项对象，或一个组件
    vnode = Object(_create_component__WEBPACK_IMPORTED_MODULE_2__["createComponent"])(tag, data, context, children);
  }

  return vnode;
}

function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
}
function normalizeChildren(children) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_3__["isPrimitive"])(children) ? [Object(core_vdom_vnode__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function normalizeArrayChildren(children) {
  var res = [];
  var i, c;

  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (!c || typeof c === 'boolean') continue; //  nested

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c);
        res.push.apply(res, c);
      }
    } else if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isPrimitive"])(c)) {
      res.push(Object(core_vdom_vnode__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(c));
    } else {
      res.push(c);
    }
  }

  return res;
}

/***/ }),

/***/ "./src/core/vdom/patch.js":
/*!********************************!*\
  !*** ./src/core/vdom/patch.js ***!
  \********************************/
/*! exports provided: createPatchFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPatchFunction", function() { return createPatchFunction; });
/* harmony import */ var web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web/runtime/node-ops */ "./src/web/runtime/node-ops.js");
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vnode */ "./src/core/vdom/vnode.js");


function createPatchFunction() {
  // 在dom的基础上新建一个空的vnode, dom属性保存在elm上
  function emptyNodeAt(elm) {
    return new _vnode__WEBPACK_IMPORTED_MODULE_1__["default"](web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["tagName"](elm).toLowerCase(), {}, [], undefined, elm);
  } // create new node 创建一个新的节点


  function createElm(vnode, insertedVnodeQueue, parentElm, refElm) {
    // 如果是组件，创建组件占位符节点，成功则直接返回
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    } // 组件节点处理完了后，接着处理普通元素节点


    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;

    if (tag) {
      vnode.elm = web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["createElement"](tag, vnode); // createChildren

      createChildren(vnode, children, insertedVnodeQueue); // 处理 html属性

      if (data) {
        // invokeCreateHooks(vnode, insertedVnodeQueue)
        console.log(data);
      }

      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["createTextNode"](vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  } // createComponent


  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;

    if (i) {
      if ((i = i.hook) && (i = i.init)) {
        // 调用init hook
        i(vnode);
      } // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.


      if (vnode.componentInstance) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        return true;
      }
    }
  } // initComponent


  function initComponent(vnode, insertedVnodeQueue) {
    if (vnode.data.pendingInsert) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }

    vnode.elm = vnode.componentInstance.$el; // make sure to invoke the insert hook

    insertedVnodeQueue.push(vnode);
  } // insert


  function insert(parent, elm, ref) {
    if (parent) {
      if (ref) {
        if (web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["parentNode"](ref) === parent) {
          web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["insertBefore"](parent, elm, ref);
        }
      } else {
        web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["appendChild"](parent, elm);
      }
    }
  } // createChildren


  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null);
      }
    }
  }

  function removeVnodes(vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (ch) {
        removeNode(ch.elm);
      }
    }
  }

  function removeNode(el) {
    var parent = web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["parentNode"](el); // element may have already been removed due to v-html / v-text

    if (parent) {
      web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["removeChild"](parent, el);
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the element is really inserted
    // 组件patch时 isInitialPatch = true
    if (initial && vnode.parent) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  return function patch(oldVnode, vnode) {
    if (!vnode) {
      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (!oldVnode) {
      // empty mount (likely as component), create new root element
      // 组件patch时 isInitialPatch = true
      isInitialPatch = true; // 组件实例没有oldVnode(vm.$el)dom元素, 直接创建一个新的vnode

      createElm(vnode, insertedVnodeQueue);
    } else {
      // 如果有oldVnode(vm.$el), 将dom元素转化成虚拟dom——vnode, dom属性保存在oldVnode.elm上
      var isRealElement = oldVnode.nodeType;

      if (isRealElement) {
        // create an empty node and replace it
        oldVnode = emptyNodeAt(oldVnode);
      } // replacing existing element


      var oldElm = oldVnode.elm;
      var parentElm = web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["parentNode"](oldElm); // create new node

      createElm(vnode, insertedVnodeQueue, parentElm, web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["nextSibling"](oldElm)); // destroy old node

      if (parentElm) {
        removeVnodes([oldVnode], 0, 0);
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}

/***/ }),

/***/ "./src/core/vdom/vnode.js":
/*!********************************!*\
  !*** ./src/core/vdom/vnode.js ***!
  \********************************/
/*! exports provided: default, createEmptyVNode, createTextVNode, cloneVNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyVNode", function() { return createEmptyVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextVNode", function() { return createTextVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneVNode", function() { return cloneVNode; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VNode =
/*#__PURE__*/
function () {
  function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    _classCallCheck(this, VNode);

    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  } // DEPRECATED: alias for componentInstance for backwards compat.

  /* istanbul ignore next */


  _createClass(VNode, [{
    key: "child",
    get: function get() {
      return this.componentInstance;
    }
  }]);

  return VNode;
}();


var createEmptyVNode = function createEmptyVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};
function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
} // optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.

function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, // #7975
  // clone children array to avoid mutating original in case of cloning
  // a child.
  vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
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

/***/ "./src/shared/constants.js":
/*!*********************************!*\
  !*** ./src/shared/constants.js ***!
  \*********************************/
/*! exports provided: SSR_ATTR, ASSET_TYPES, LIFECYCLE_HOOKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SSR_ATTR", function() { return SSR_ATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSET_TYPES", function() { return ASSET_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE_HOOKS", function() { return LIFECYCLE_HOOKS; });
var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];

/***/ }),

/***/ "./src/shared/util.js":
/*!****************************!*\
  !*** ./src/shared/util.js ***!
  \****************************/
/*! exports provided: isPrimitive, hasOwn, extend, isObject, isPlainObject, makeMap, noop, no, identity, cached, camelize, capitalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMap", function() { return makeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "no", function() { return no; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cached", function() { return cached; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Check if value is primitive.
 */
function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || _typeof(value) === 'symbol' || typeof value === 'boolean';
}
/**
 * Check whether an object has the property.
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
/**
 * Mix properties into target object.
 */

function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */

function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */

var _toString = Object.prototype.toString;
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */

function makeMap(str, // string
expectsLowerCase // boolean
) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */

function noop(a, b, c) {}
/**
 * Always return false.
 */

var no = function no(a, b, c) {
  return false;
};
/**
 * Return the same value.
 */

var identity = function identity(_) {
  return _;
};
/**
 * Create a cached version of a pure function.
 */

function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */

var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
/**
 * Capitalize a string.
 */

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

/***/ }),

/***/ "./src/web/runtime/index.js":
/*!**********************************!*\
  !*** ./src/web/runtime/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/index */ "./src/core/index.js");
/* harmony import */ var core_instance_lifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/instance/lifecycle */ "./src/core/instance/lifecycle.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/web/util/index.js");
/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patch */ "./src/web/runtime/patch.js");



 // install platform specific utils

core_index__WEBPACK_IMPORTED_MODULE_0__["default"].config.isReservedTag = _util__WEBPACK_IMPORTED_MODULE_2__["isReservedTag"];
core_index__WEBPACK_IMPORTED_MODULE_0__["default"].config.isUnknownElement = _util__WEBPACK_IMPORTED_MODULE_2__["isUnknownElement"]; // public mount method
// SVue.prototype.$mount

core_index__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$mount = function (el) {
  el = el ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["query"])(el) : undefined;
  return Object(core_instance_lifecycle__WEBPACK_IMPORTED_MODULE_1__["mountComponent"])(this, el);
}; // install platform patch function
// SVue.prototype.__patch__


core_index__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.__patch__ = _patch__WEBPACK_IMPORTED_MODULE_3__["patch"];
/* harmony default export */ __webpack_exports__["default"] = (core_index__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/web/runtime/node-ops.js":
/*!*************************************!*\
  !*** ./src/web/runtime/node-ops.js ***!
  \*************************************/
/*! exports provided: createElement, createTextNode, createComment, insertBefore, removeChild, appendChild, parentNode, nextSibling, tagName, setTextContent, setStyleScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return createTextNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChild", function() { return removeChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendChild", function() { return appendChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parentNode", function() { return parentNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextSibling", function() { return nextSibling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagName", function() { return tagName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTextContent", function() { return setTextContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyleScope", function() { return setStyleScope; });
function createElement(tagName, vnode) {
  var elm = document.createElement(tagName);

  if (tagName !== 'select') {
    return elm;
  } // false or null will remove the attribute but undefined will not


  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }

  return elm;
}
function createTextNode(text) {
  return document.createTextNode(text);
}
function createComment(text) {
  return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
  node.removeChild(child);
}
function appendChild(node, child) {
  node.appendChild(child);
}
function parentNode(node) {
  return node.parentNode;
}
function nextSibling(node) {
  return node.nextSibling;
}
function tagName(node) {
  return node.tagName;
}
function setTextContent(node, text) {
  node.textContent = text;
}
function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

/***/ }),

/***/ "./src/web/runtime/patch.js":
/*!**********************************!*\
  !*** ./src/web/runtime/patch.js ***!
  \**********************************/
/*! exports provided: patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony import */ var core_vdom_patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/vdom/patch */ "./src/core/vdom/patch.js");

var patch = Object(core_vdom_patch__WEBPACK_IMPORTED_MODULE_0__["createPatchFunction"])();

/***/ }),

/***/ "./src/web/util/element.js":
/*!*********************************!*\
  !*** ./src/web/util/element.js ***!
  \*********************************/
/*! exports provided: isHTMLTag, isSVG, isReservedTag, isUnknownElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLTag", function() { return isHTMLTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSVG", function() { return isSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReservedTag", function() { return isReservedTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnknownElement", function() { return isUnknownElement; });
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/util */ "./src/shared/util.js");

var isHTMLTag = Object(shared_util__WEBPACK_IMPORTED_MODULE_0__["makeMap"])('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
// contain child elements.

var isSVG = Object(shared_util__WEBPACK_IMPORTED_MODULE_0__["makeMap"])('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);
var isReservedTag = function isReservedTag(tag) {
  return isHTMLTag(tag) || isSVG(tag);
};
var unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
  if (isReservedTag(tag)) {
    return false;
  }

  tag = tag.toLowerCase();
  var el = document.createElement(tag);

  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

/***/ }),

/***/ "./src/web/util/index.js":
/*!*******************************!*\
  !*** ./src/web/util/index.js ***!
  \*******************************/
/*! exports provided: isHTMLTag, isSVG, isReservedTag, isUnknownElement, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/web/util/element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isHTMLTag", function() { return _element__WEBPACK_IMPORTED_MODULE_0__["isHTMLTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSVG", function() { return _element__WEBPACK_IMPORTED_MODULE_0__["isSVG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReservedTag", function() { return _element__WEBPACK_IMPORTED_MODULE_0__["isReservedTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUnknownElement", function() { return _element__WEBPACK_IMPORTED_MODULE_0__["isUnknownElement"]; });


/**
 * Query an element selector if it's not an element already.
 */

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