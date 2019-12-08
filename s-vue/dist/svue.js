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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

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
/* harmony import */ var _instance_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../instance/state */ "./src/core/instance/state.js");


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
    Sub["super"] = Super; // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    // 将props和computed初始化挂在组件原型上，便于多次使用该组件时共享

    if (Sub.options.props) {
      initProps(Sub);
    }

    if (Sub.options.computed) {
      initComputed(Sub);
    } // allow further extension/mixin/plugin usage


    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use; // enable recursive self-lookup

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

function initProps(Comp) {
  var props = Comp.options.props;

  for (var key in props) {
    Object(_instance_state__WEBPACK_IMPORTED_MODULE_1__["proxy"])(Comp.prototype, '_props', key);
  }
}

function initComputed(Comp) {
  var computed = Comp.options.computed;

  for (var key in computed) {
    Object(_instance_state__WEBPACK_IMPORTED_MODULE_1__["defineComputed"])(Comp.prototype, key, computed[key]);
  }
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util */ "./src/core/util/index.js");






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
  SVue.nextTick = _util__WEBPACK_IMPORTED_MODULE_5__["nextTick"];
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
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/core/instance/state.js");
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifecycle */ "./src/core/instance/lifecycle.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/core/instance/render.js");





function SVue(options) {
  this._init(options);
}

Object(_init__WEBPACK_IMPORTED_MODULE_0__["initMixin"])(SVue);
Object(_state__WEBPACK_IMPORTED_MODULE_1__["stateMixin"])(SVue);
Object(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["lifecycleMixin"])(SVue);
Object(_render__WEBPACK_IMPORTED_MODULE_3__["renderMixin"])(SVue);
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
    } // expose real self


    vm._self = vm; // 一系列初始化

    Object(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["initLifecycle"])(vm); // 初始化生命周期

    Object(_render__WEBPACK_IMPORTED_MODULE_1__["initRender"])(vm); // 初始化render --> vm.$createElement

    Object(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["callHook"])(vm, 'beforeCreate');
    Object(_state__WEBPACK_IMPORTED_MODULE_0__["initState"])(vm); // 初始化状态：data, computed, watch...

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
/*! exports provided: activeInstance, isUpdatingChildComponent, initLifecycle, lifecycleMixin, mountComponent, updateChildComponent, callHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeInstance", function() { return activeInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUpdatingChildComponent", function() { return isUpdatingChildComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initLifecycle", function() { return initLifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycleMixin", function() { return lifecycleMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountComponent", function() { return mountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateChildComponent", function() { return updateChildComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callHook", function() { return callHook; });
/* harmony import */ var _observer_watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer/watcher */ "./src/core/observer/watcher.js");
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observer/index */ "./src/core/observer/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/core/util/index.js");


 // 全局当前激活实例

var activeInstance = null; // updateChildComponent state

var isUpdatingChildComponent = false; // export function setActiveInstance(vm) {
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
  }; // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  // 渲染watcher
  // eslint-disable-next-line


  new _observer_watcher__WEBPACK_IMPORTED_MODULE_0__["default"](vm, updateComponent,
  /* this.getter */
  _util__WEBPACK_IMPORTED_MODULE_2__["noop"],
  /* this.cb */
  {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  },
  /* options.before */
  true
  /* isRenderWatcher */
  ); // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }

  return vm;
}
function updateChildComponent(vm, // Component,
propsData, // ?Object,
listeners, // ?Object,
parentVnode, // MountedComponentVNode,
renderChildren // ?Array<VNode>
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render

  vm.$attrs = parentVnode.data.attrs || {};
  vm.$listeners = listeners || {};
  debugger; // update props

  if (propsData && vm.$options.props) {
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_1__["toggleObserving"])(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = propsData[key];
    }

    Object(_observer_index__WEBPACK_IMPORTED_MODULE_1__["toggleObserving"])(true); // keep a copy of raw propsData

    vm.$options.propsData = propsData;
  }
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/core/util/index.js");


 // SVue.prototype._render

function renderMixin(SVue) {
  SVue.prototype.$nextTick = function (fn) {
    return Object(_util__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(fn, this);
  };

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

  var renderContext = parentVnode && parentVnode.context; // eslint-disable-line
  // vm.$createElement 用户自定义render时使用

  vm.$createElement = function (a, b, c, d) {
    return Object(_vdom_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(vm, a, b, c, d, true);
  };
}

/***/ }),

/***/ "./src/core/instance/state.js":
/*!************************************!*\
  !*** ./src/core/instance/state.js ***!
  \************************************/
/*! exports provided: proxy, initState, defineComputed, stateMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxy", function() { return proxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineComputed", function() { return defineComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateMixin", function() { return stateMixin; });
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer/index */ "./src/core/observer/index.js");
/* harmony import */ var _observer_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observer/watcher */ "./src/core/observer/watcher.js");
/* harmony import */ var _observer_dep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer/dep */ "./src/core/observer/dep.js");
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/index */ "./src/core/util/index.js");




var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: _util_index__WEBPACK_IMPORTED_MODULE_3__["noop"],
  set: _util_index__WEBPACK_IMPORTED_MODULE_3__["noop"]
};
var computedWatcherOptions = {
  lazy: true
};
function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };

  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };

  Object.defineProperty(target, key, sharedPropertyDefinition);
}
function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options; // 初始化props

  if (opts.props) initProps(vm, opts.props); // 初始化data

  if (opts.data) {
    initData(vm);
  } else {
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_0__["observe"])(vm._data = {}, true
    /* asRootData */
    );
  } // 初始化computed


  if (opts.computed) initComputed(vm, opts.computed); // 初始化watch

  if (opts.watch) initWatch(vm, opts.watch);
}

function initProps(vm, propsOptions) {
  debugger; // const propsData = vm.$options.propsData || {}

  var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.

  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent; // root instance props should be converted

  if (!isRoot) {
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_0__["toggleObserving"])(false);
  }

  for (var key in propsOptions) {
    keys.push(key); // const value = validateProp(key, propsOptions, propsData, vm)

    var value = propsOptions[key];
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_0__["defineReactive"])(props, key, value); // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.

    if (!(key in vm)) {
      proxy(vm, '_props', key);
    }
  }

  Object(_observer_index__WEBPACK_IMPORTED_MODULE_0__["toggleObserving"])(true);
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {}; // 将data的属性代理到vue实例

  Object.keys(data).forEach(function (key) {
    proxy(vm, '_data', key);
  }); // observe data
  // asRootData: 这步作为根数据，下面会递归observe进行对深层对象的绑定

  Object(_observer_index__WEBPACK_IMPORTED_MODULE_0__["observe"])(data, true
  /* asRootData */
  );
}

function getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  Object(_observer_dep__WEBPACK_IMPORTED_MODULE_2__["pushTarget"])();

  try {
    return data.call(vm, vm);
  } catch (e) {
    console.error(e, vm, 'data()');
    return {};
  } finally {
    Object(_observer_dep__WEBPACK_IMPORTED_MODULE_2__["popTarget"])();
  }
}

function initComputed(vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;

    if (getter == null) {
      console.error("Getter is missing for computed property \"".concat(key, "\"."));
    } // create internal watcher for the computed property.
    // computed watcher


    watchers[key] = new _observer_watcher__WEBPACK_IMPORTED_MODULE_1__["default"](vm, getter || _util_index__WEBPACK_IMPORTED_MODULE_3__["noop"], _util_index__WEBPACK_IMPORTED_MODULE_3__["noop"], computedWatcherOptions); // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.

    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    }
  }
}

function defineComputed(target, // any,
key, // string,
userDef // Object | Function
) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = _util_index__WEBPACK_IMPORTED_MODULE_3__["noop"];
  } else {
    sharedPropertyDefinition.get = userDef.get ? createComputedGetter(key) : _util_index__WEBPACK_IMPORTED_MODULE_3__["noop"];
    sharedPropertyDefinition.set = userDef.set || _util_index__WEBPACK_IMPORTED_MODULE_3__["noop"];
  }

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        // 求值: watcher -> this.get() -> this.value = this.getter.call(vm)
        watcher.evaluate();
      }

      if (_observer_dep__WEBPACK_IMPORTED_MODULE_2__["default"].target) {
        // 收集依赖(被render Watcher订阅): this.deps[i].depend() -> Dep.target.addDep(this)
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, // Component,
expOrFn, // string | Function,
handler, // any,
options // Object
) {
  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};

  dataDef.get = function () {
    return this._data;
  };

  var propsDef = {};

  propsDef.get = function () {
    return this._props;
  };

  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$watch = function (expOrFn, // string | Function,
  cb, // any,
  options // Object
  ) {
    var vm = this;

    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }

    options = options || {};
    options.user = true;
    var watcher = new _observer_watcher__WEBPACK_IMPORTED_MODULE_1__["default"](vm, expOrFn, cb, options);

    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        console.error(error, vm, "callback for immediate watcher \"".concat(watcher.expression, "\""));
      }
    }

    return function unwatchFn() {
      watcher.teardown();
    };
  };
}

/***/ }),

/***/ "./src/core/observer/array.js":
/*!************************************!*\
  !*** ./src/core/observer/array.js ***!
  \************************************/
/*! exports provided: arrayMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMethods", function() { return arrayMethods; });
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ "./src/core/util/index.js");

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
/**
 * Intercept mutating methods and emit events
 */

methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["def"])(arrayMethods, method, function mutator() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) ob.observeArray(inserted); // notify change

    ob.dep.notify();
    return result;
  });
});

/***/ }),

/***/ "./src/core/observer/dep.js":
/*!**********************************!*\
  !*** ./src/core/observer/dep.js ***!
  \**********************************/
/*! exports provided: default, pushTarget, popTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushTarget", function() { return pushTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popTarget", function() { return popTarget; });
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ "./src/core/util/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/core/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep =
/*#__PURE__*/
function () {
  function Dep() {
    _classCallCheck(this, Dep);

    this.id = uid++;
    this.subs = [];
  }

  _createClass(Dep, [{
    key: "addSub",
    value: function addSub(sub) {
      this.subs.push(sub);
    }
  }, {
    key: "removeSub",
    value: function removeSub(sub) {
      Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["remove"])(this.subs, sub);
    }
  }, {
    key: "depend",
    value: function depend() {
      if (Dep.target) {
        Dep.target.addDep(this);
      }
    }
  }, {
    key: "notify",
    value: function notify() {
      // stabilize the subscriber list first
      var subs = this.subs.slice();

      if ( true && !_config__WEBPACK_IMPORTED_MODULE_1__["default"].async) {
        // subs aren't sorted in scheduler if not running async
        // we need to sort them now to make sure they fire in correct
        // order
        subs.sort(function (a, b) {
          return a.id - b.id;
        });
      }

      for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
      }
    }
  }]);

  return Dep;
}(); // The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.



Dep.target = null;
var targetStack = [];
function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}
function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/***/ }),

/***/ "./src/core/observer/index.js":
/*!************************************!*\
  !*** ./src/core/observer/index.js ***!
  \************************************/
/*! exports provided: shouldObserve, toggleObserving, Observer, observe, defineReactive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldObserve", function() { return shouldObserve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleObserving", function() { return toggleObserving; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineReactive", function() { return defineReactive; });
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ "./src/core/util/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./src/core/observer/array.js");
/* harmony import */ var _vdom_vnode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vdom/vnode */ "./src/core/vdom/vnode.js");
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dep */ "./src/core/observer/dep.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var arrayKeys = Object.getOwnPropertyNames(_array__WEBPACK_IMPORTED_MODULE_1__["arrayMethods"]);
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */

var shouldObserve = true;
function toggleObserving(value) {
  shouldObserve = value;
}
/**
 * Observer class that is attached to each observed object.
 * Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */

var Observer =
/*#__PURE__*/
function () {
  // value: any;
  // dep: Dep;
  // vmCount: number; // number of vms that have this object as root $data
  function Observer(value) {
    _classCallCheck(this, Observer);

    this.value = value;
    this.vmCount = 0;
    Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["def"])(value, '__ob__', this);

    if (Array.isArray(value)) {
      if ('__proto__' in {}) {
        protoAugment(value, _array__WEBPACK_IMPORTED_MODULE_1__["arrayMethods"]);
      } else {
        copyAugment(value, _array__WEBPACK_IMPORTED_MODULE_1__["arrayMethods"], arrayKeys);
      }

      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }
  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */


  _createClass(Observer, [{
    key: "walk",
    value: function walk(obj) {
      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        defineReactive(obj, keys[i]);
      }
    }
    /**
     * Observe a list of Array items.
     */

  }, {
    key: "observeArray",
    value: function observeArray(items) {
      for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i]);
      }
    }
  }]);

  return Observer;
}();
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */

function observe(value, asRootData) {
  if (!Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) || value instanceof _vdom_vnode__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    return;
  }

  var ob;

  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && (Array.isArray(value) || Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */

function defineReactive(obj, // Object,
key, // string,
val, // any,
customSetter, // Function,
shallow // boolean
) {
  var dep = new _dep__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      // eslint-disable-next-line
      // debugger
      var value = getter ? getter.call(obj) : val;

      if (_dep__WEBPACK_IMPORTED_MODULE_3__["default"].target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      // eslint-disable-next-line
      // debugger
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      if ( true && customSetter) {
        customSetter();
      } // #7981: for accessor properties without setter


      if (getter && !setter) return;

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */

/* 直接覆盖原型的方法来修改目标对象或数组 */

function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */

/* 定义（覆盖）目标对象或数组的某一个方法 */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["def"])(target, key, src[key]);
  }
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */


function dependArray(value) {
  for (var e, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/***/ }),

/***/ "./src/core/observer/scheduler.js":
/*!****************************************!*\
  !*** ./src/core/observer/scheduler.js ***!
  \****************************************/
/*! exports provided: queueWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueWatcher", function() { return queueWatcher; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/core/util/index.js");
/* harmony import */ var _instance_lifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../instance/lifecycle */ "./src/core/instance/lifecycle.js");


var queue = [];
var activatedChildren = [];
var has = {};
var waiting = false;
var flushing = false;
var index = 0;
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */

function queueWatcher(watcher) {
  var id = watcher.id;

  if (has[id] == null) {
    has[id] = true;

    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;

      while (i > index && queue[i].id > watcher.id) {
        i--;
      }

      queue.splice(i + 1, 0, watcher);
    } // queue the flush


    if (!waiting) {
      waiting = true;
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(flushSchedulerQueue);
    }
  }
}
/**
 * Flush both queues and run the watchers.
 */

function flushSchedulerQueue() {
  flushing = true;
  var watcher, id; // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.

  queue.sort(function (a, b) {
    return a.id - b.id;
  }); // do not cache length because more watchers might be pushed
  // as we run existing watchers

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];

    if (watcher.before) {
      watcher.before();
    }

    id = watcher.id;
    has[id] = null;
    watcher.run();
  } // keep copies of post queues before resetting state


  var updatedQueue = queue.slice();
  resetSchedulerState();
  callUpdatedHooks(updatedQueue);
}
/**
 * Reset the scheduler's state.
 */


function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  waiting = flushing = false;
}

function callUpdatedHooks(queue) {
  var i = queue.length;

  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;

    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      Object(_instance_lifecycle__WEBPACK_IMPORTED_MODULE_1__["callHook"])(vm, 'updated');
    }
  }
}

/***/ }),

/***/ "./src/core/observer/traverse.js":
/*!***************************************!*\
  !*** ./src/core/observer/traverse.js ***!
  \***************************************/
/*! exports provided: traverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverse", function() { return traverse; });
/* harmony import */ var _vdom_vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vdom/vnode */ "./src/core/vdom/vnode.js");
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/index */ "./src/core/util/index.js");


var seenObjects = new Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */

function traverse(val) {
  _traverse(val, seenObjects);

  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !Object(_util_index__WEBPACK_IMPORTED_MODULE_1__["isObject"])(val) || Object.isFrozen(val) || val instanceof _vdom_vnode__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

/***/ }),

/***/ "./src/core/observer/watcher.js":
/*!**************************************!*\
  !*** ./src/core/observer/watcher.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Watcher; });
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ "./src/core/util/index.js");
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler */ "./src/core/observer/scheduler.js");
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dep */ "./src/core/observer/dep.js");
/* harmony import */ var _traverse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./traverse */ "./src/core/observer/traverse.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var uid = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher =
/*#__PURE__*/
function () {
  function Watcher(vm, // Component,
  expOrFn, // string | Function,
  cb, // Function,
  options, // ?Object,
  isRenderWatcher // boolean
  ) {
    _classCallCheck(this, Watcher);

    this.vm = vm;

    if (isRenderWatcher) {
      vm._watcher = this;
    }

    vm._watchers.push(this); // options


    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }

    this.cb = cb;
    this.id = ++uid; // uid for batching

    this.active = true;
    this.dirty = this.lazy; // for lazy watchers(computed)

    this.deps = [];
    this.newDeps = [];
    this.depIds = new Set();
    this.newDepIds = new Set();
    this.expression =  true ? expOrFn.toString() : undefined; // parse expression for getter

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      // For user Watcher
      this.getter = Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["parsePath"])(expOrFn);

      if (!this.getter) {
        this.getter = _util_index__WEBPACK_IMPORTED_MODULE_0__["noop"];
        console.error("Failed watching path: \"".concat(expOrFn, "\" ") + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }

    this.value = this.lazy ? undefined : this.get();
  }
  /**
   * Evaluate the getter, and re-collect dependencies.
   */


  _createClass(Watcher, [{
    key: "get",
    value: function get() {
      Object(_dep__WEBPACK_IMPORTED_MODULE_2__["pushTarget"])(this);
      var value;
      var vm = this.vm;

      try {
        value = this.getter.call(vm, vm);
      } catch (e) {
        if (this.user) {
          console.error(e, "getter for watcher \"".concat(this.expression, "\""));
        } else {
          throw e;
        }
      } finally {
        // "touch" every property so they are all tracked as
        // dependencies for deep watching
        if (this.deep) {
          Object(_traverse__WEBPACK_IMPORTED_MODULE_3__["traverse"])(value);
        }

        Object(_dep__WEBPACK_IMPORTED_MODULE_2__["popTarget"])();
        this.cleanupDeps();
      }

      return value;
    }
    /**
     * Add a dependency to this directive.
     */

  }, {
    key: "addDep",
    value: function addDep(dep) {
      var id = dep.id;

      if (!this.newDepIds.has(id)) {
        this.newDepIds.add(id);
        this.newDeps.push(dep);

        if (!this.depIds.has(id)) {
          dep.addSub(this);
        }
      }
    }
    /**
     * Clean up for dependency collection.
     */

  }, {
    key: "cleanupDeps",
    value: function cleanupDeps() {
      var i = this.deps.length;

      while (i--) {
        var dep = this.deps[i];

        if (!this.newDepIds.has(dep.id)) {
          dep.removeSub(this);
        }
      }

      var tmp = this.depIds;
      this.depIds = this.newDepIds;
      this.newDepIds = tmp;
      this.newDepIds.clear();
      tmp = this.deps;
      this.deps = this.newDeps;
      this.newDeps = tmp;
      this.newDeps.length = 0;
    }
    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */

  }, {
    key: "update",
    value: function update() {
      if (this.lazy) {
        // For computed watcher
        // 把this.dirty置为true，重新渲染时会重新求值
        this.dirty = true;
      } else if (this.sync) {
        this.run();
      } else {
        Object(_scheduler__WEBPACK_IMPORTED_MODULE_1__["queueWatcher"])(this);
      }
    }
    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */

  }, {
    key: "run",
    value: function run() {
      if (this.active) {
        var value = this.get();

        if (value !== this.value || Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
          // set new value
          var oldValue = this.value;
          this.value = value;

          if (this.user) {
            try {
              this.cb.call(this.vm, value, oldValue);
            } catch (e) {
              console.error(e, 'callback for watcher');
            }
          } else {
            this.cb.call(this.vm, value, oldValue);
          }
        }
      }
    }
    /**
     * Depend on all deps collected by this watcher.
     */

  }, {
    key: "depend",
    value: function depend() {
      var i = this.deps.length;

      while (i--) {
        this.deps[i].depend();
      }
    }
    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */

  }, {
    key: "evaluate",
    value: function evaluate() {
      this.value = this.get();
      this.dirty = false;
    }
    /**
     * Remove self from all dependencies' subscriber list.
     */

  }, {
    key: "teardown",
    value: function teardown() {
      if (this.active) {
        // remove self from vm's watcher list
        // this is a somewhat expensive operation so we skip it
        // if the vm is being destroyed.
        if (!this.vm._isBeingDestroyed) {
          Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["remove"])(this.vm._watchers, this);
        }

        var i = this.deps.length;

        while (i--) {
          this.deps[i].removeSub(this);
        }

        this.active = false;
      }
    }
  }]);

  return Watcher;
}();



/***/ }),

/***/ "./src/core/util/index.js":
/*!********************************!*\
  !*** ./src/core/util/index.js ***!
  \********************************/
/*! exports provided: mergeOptions, resolveAsset, isUsingMicroTask, nextTick, unicodeRegExp, def, parsePath, isPrimitive, hasOwn, extend, isObject, isPlainObject, makeMap, noop, no, identity, cached, camelize, capitalize, hyphenate, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./src/core/util/options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return _options__WEBPACK_IMPORTED_MODULE_0__["mergeOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveAsset", function() { return _options__WEBPACK_IMPORTED_MODULE_0__["resolveAsset"]; });

/* harmony import */ var _next_tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./next-tick */ "./src/core/util/next-tick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUsingMicroTask", function() { return _next_tick__WEBPACK_IMPORTED_MODULE_1__["isUsingMicroTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return _next_tick__WEBPACK_IMPORTED_MODULE_1__["nextTick"]; });

/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang */ "./src/core/util/lang.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unicodeRegExp", function() { return _lang__WEBPACK_IMPORTED_MODULE_2__["unicodeRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "def", function() { return _lang__WEBPACK_IMPORTED_MODULE_2__["def"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _lang__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/util */ "./src/shared/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return shared_util__WEBPACK_IMPORTED_MODULE_3__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return shared_util__WEBPACK_IMPORTED_MODULE_3__["hasOwn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return shared_util__WEBPACK_IMPORTED_MODULE_3__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return shared_util__WEBPACK_IMPORTED_MODULE_3__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return shared_util__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMap", function() { return shared_util__WEBPACK_IMPORTED_MODULE_3__["makeMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return shared_util__WEBPACK_IMPORTED_MODULE_3__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "no", function() { return shared_util__WEBPACK_IMPORTED_MODULE_3__["no"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return shared_util__WEBPACK_IMPORTED_MODULE_3__["identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cached", function() { return shared_util__WEBPACK_IMPORTED_MODULE_3__["cached"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return shared_util__WEBPACK_IMPORTED_MODULE_3__["camelize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return shared_util__WEBPACK_IMPORTED_MODULE_3__["capitalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hyphenate", function() { return shared_util__WEBPACK_IMPORTED_MODULE_3__["hyphenate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return shared_util__WEBPACK_IMPORTED_MODULE_3__["remove"]; });






/***/ }),

/***/ "./src/core/util/lang.js":
/*!*******************************!*\
  !*** ./src/core/util/lang.js ***!
  \*******************************/
/*! exports provided: unicodeRegExp, def, parsePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unicodeRegExp", function() { return unicodeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "def", function() { return def; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Define a property.
 */

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
/**
 * Parse simple path.
 */

var bailRE = new RegExp("[^".concat(unicodeRegExp.source, ".$_\\d]"));
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }

  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) return;
      obj = obj[segments[i]];
    }

    return obj;
  };
}

/***/ }),

/***/ "./src/core/util/next-tick.js":
/*!************************************!*\
  !*** ./src/core/util/next-tick.js ***!
  \************************************/
/*! exports provided: isUsingMicroTask, nextTick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUsingMicroTask", function() { return isUsingMicroTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
var isUsingMicroTask = false;
var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;

  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

var timerFunc;

if (typeof Promise !== 'undefined') {
  var p = Promise.resolve();

  timerFunc = function timerFunc() {
    p.then(flushCallbacks);
  };

  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined') {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function timerFunc() {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function timerFunc() {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick(cb, ctx) {
  var _resolve;

  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        console.error(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  if (!pending) {
    pending = true;
    timerFunc();
  }

  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

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
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = function (parentVal, // Object,
childVal, // Object,
vm, // Component,
key // string
) {
  if (!childVal) return Object.create(parentVal || null);
  if (!parentVal) return childVal;
  var ret = {};
  Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["extend"])(ret, parentVal);

  for (var _key in childVal) {
    var parent = ret[_key];
    var child = childVal[_key];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[_key] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }

  return ret;
};
/**
 * Other object hashes.
 */


strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, // Object,
childVal, // Object,
vm, // Component,
key // string
) {
  if (!parentVal) return childVal;
  var ret = Object.create(null);
  Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["extend"])(ret, parentVal);
  if (childVal) Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["extend"])(ret, childVal);
  return ret;
};
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
  }

  normalizeProps(child, vm); // Apply extends and mixins on the child options,
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
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */

function normalizeProps(options, vm) {
  var props = options.props;
  if (!props) return;
  var res = {};
  var i, val, name;

  if (Array.isArray(props)) {
    i = props.length;

    while (i--) {
      val = props[i];

      if (typeof val === 'string') {
        name = Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["camelize"])(val);
        res[name] = {
          type: null
        };
      } else if (true) {
        console.warn('props must be strings when using array syntax.');
      }
    }
  } else if (Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(props)) {
    for (var key in props) {
      val = props[key];
      name = Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["camelize"])(key);
      res[name] = Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(val) ? val : {
        type: val
      };
    }
  } else if (true) {
    console.warn('Invalid value for option "props": expected an Array or an Object');
  }

  options.props = res;
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
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/index */ "./src/core/vdom/helpers/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




 // inline hooks to be invoked on component VNodes during patch

var componentVNodeHooks = {
  init: function init(vnode) {
    var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, // MountedComponentVNode
    _instance_lifecycle__WEBPACK_IMPORTED_MODULE_2__["activeInstance"] // activeInstance in lifecycle state 当前激活实例 parent
    );
    child.$mount(undefined);
  },
  // 组件更新时调用：当更新的 vnode 是一个组件 vnode 的时候，会执行 prepatch 的方法
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    Object(_instance_lifecycle__WEBPACK_IMPORTED_MODULE_2__["updateChildComponent"])(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
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

  Object(core_instance_init__WEBPACK_IMPORTED_MODULE_1__["resolveConstructorOptions"])(Ctor); // extract props
  // 把传递给组件的 props抽离出来，new Vnode()时作为 componentOptions中的一项传入

  var propsData = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_4__["extractPropsFromVNodeData"])(data, Ctor, tag); // install component management hooks onto the placeholder node

  installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new _vnode__WEBPACK_IMPORTED_MODULE_0__["default"]("vue-component-".concat(Ctor.cid).concat(name ? "-".concat(name) : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    propsData: propsData,
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
    } // eslint-disable-line
    // 全局注册的组件在原型链上都可以resolve到, 局部注册的组件只有在当前实例才能resolve到
    // eslint-disable-next-line
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

/***/ "./src/core/vdom/helpers/extract-props.js":
/*!************************************************!*\
  !*** ./src/core/vdom/helpers/extract-props.js ***!
  \************************************************/
/*! exports provided: extractPropsFromVNodeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractPropsFromVNodeData", function() { return extractPropsFromVNodeData; });
/* harmony import */ var core_util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/util/index */ "./src/core/util/index.js");

function extractPropsFromVNodeData(data, // VNodeData,
Ctor, // Class<Component>,
tag // string
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;

  if (!propOptions) {
    return;
  }

  var res = {};
  var attrs = data.attrs,
      props = data.props;

  if (attrs || props) {
    for (var key in propOptions) {
      var altKey = Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["hyphenate"])(key);

      if (true) {
        var keyInLowerCase = key.toLowerCase();

        if (key !== keyInLowerCase && attrs && Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(attrs, keyInLowerCase)) {
          console.warn("Prop \"".concat(keyInLowerCase, "\" is passed to component ") + "".concat(tag, ", but the declared prop name is") + " \"".concat(key, "\". ") + 'Note that HTML attributes are case-insensitive and camelCased ' + 'props need to use their kebab-case equivalents when using in-DOM ' + "templates. You should probably use \"".concat(altKey, "\" instead of \"").concat(key, "\"."));
        }
      }

      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}

function checkProp(res, // Object,
hash, // ?Object,
key, // string,
altKey, // string,
preserve // boolean
) {
  if (hash) {
    if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(hash, key)) {
      res[key] = hash[key];

      if (!preserve) {
        delete hash[key];
      }

      return true;
    } else if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(hash, altKey)) {
      res[key] = hash[altKey];

      if (!preserve) {
        delete hash[altKey];
      }

      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "./src/core/vdom/helpers/index.js":
/*!****************************************!*\
  !*** ./src/core/vdom/helpers/index.js ***!
  \****************************************/
/*! exports provided: extractPropsFromVNodeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extract_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extract-props */ "./src/core/vdom/helpers/extract-props.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractPropsFromVNodeData", function() { return _extract_props__WEBPACK_IMPORTED_MODULE_0__["extractPropsFromVNodeData"]; });



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
/* harmony import */ var web_util_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web/util/element */ "./src/web/util/element.js");




function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && a.data === b.data && sameInputType(a, b) || a.isAsyncPlaceholder && a.asyncFactory === b.asyncFactory && !b.asyncFactory.error);
}

function sameInputType(a, b) {
  if (a.tag !== 'input') return true;
  var i;
  var typeA = (i = a.data) && (i = i.attrs) && i.type;
  var typeB = (i = b.data) && (i = i.attrs) && i.type;
  return typeA === typeB || Object(web_util_element__WEBPACK_IMPORTED_MODULE_2__["isTextInputType"])(typeA) && Object(web_util_element__WEBPACK_IMPORTED_MODULE_2__["isTextInputType"])(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (key) map[key] = i;
  }

  return map;
}

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
        debugger; // invokeCreateHooks(vnode, insertedVnodeQueue)

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

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (c && sameVnode(node, c)) return i;
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    debugger;
    var elm = vnode.elm = oldVnode.elm;
    var i;
    var data = vnode.data; // 当更新的 vnode 是一个组件 vnode 的时候，会执行 prepatch 的方法

    if (data && (i = data.hook) && (i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children; // if ((data) && isPatchable(vnode)) {
    //   for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
    //   if ((i = data.hook) && (i = i.update)) i(oldVnode, vnode)
    // }

    if (!vnode.text) {
      if (oldCh && ch) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
      } else if (ch) {
        if (oldVnode.text) web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["setTextContent"](elm, '');
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (oldCh) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (oldVnode.text) {
        web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["setTextContent"](elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["setTextContent"](elm, vnode.text);
    }

    if (data) {
      if ((i = data.hook) && (i = i.postpatch)) i(oldVnode, vnode);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions

    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (!oldStartVnode) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (!oldEndVnode) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["insertBefore"](parentElm, oldStartVnode.elm, web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["nextSibling"](oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["insertBefore"](parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (!oldKeyToIdx) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        idxInOld = newStartVnode.key ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

        if (!idxInOld) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];

          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["insertBefore"](parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }

    if (oldStartIdx > oldEndIdx) {
      refElm = !newCh[newEndIdx + 1] ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
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

  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (!vnode) {
      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];
    debugger;

    if (!oldVnode) {
      // empty mount (likely as component), create new root element
      // 组件patch时 isInitialPatch = true
      isInitialPatch = true; // 组件实例没有oldVnode(vm.$el)dom元素, 直接创建一个新的vnode

      createElm(vnode, insertedVnodeQueue);
    } else {
      // 如果有oldVnode(vm.$el), 将dom元素转化成虚拟dom——vnode, dom属性保存在oldVnode.elm上
      var isRealElement = oldVnode.nodeType; // 不是真实 dom节点且为同一个 Vnoe

      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
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
/*! exports provided: isPrimitive, hasOwn, extend, isObject, isPlainObject, makeMap, noop, no, identity, cached, camelize, capitalize, hyphenate, remove */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hyphenate", function() { return hyphenate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
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
/**
 * Hyphenate a camelCase string.
 */

var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Remove an item from an array.
 */

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

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
/*! exports provided: isHTMLTag, isSVG, isReservedTag, isUnknownElement, isTextInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLTag", function() { return isHTMLTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSVG", function() { return isSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReservedTag", function() { return isReservedTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnknownElement", function() { return isUnknownElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTextInputType", function() { return isTextInputType; });
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
var isTextInputType = Object(shared_util__WEBPACK_IMPORTED_MODULE_0__["makeMap"])('text,number,password,search,email,tel,url');

/***/ }),

/***/ "./src/web/util/index.js":
/*!*******************************!*\
  !*** ./src/web/util/index.js ***!
  \*******************************/
/*! exports provided: isHTMLTag, isSVG, isReservedTag, isUnknownElement, isTextInputType, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/web/util/element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isHTMLTag", function() { return _element__WEBPACK_IMPORTED_MODULE_0__["isHTMLTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSVG", function() { return _element__WEBPACK_IMPORTED_MODULE_0__["isSVG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReservedTag", function() { return _element__WEBPACK_IMPORTED_MODULE_0__["isReservedTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUnknownElement", function() { return _element__WEBPACK_IMPORTED_MODULE_0__["isUnknownElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTextInputType", function() { return _element__WEBPACK_IMPORTED_MODULE_0__["isTextInputType"]; });


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