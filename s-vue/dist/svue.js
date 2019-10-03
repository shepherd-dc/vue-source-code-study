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
/*! exports provided: initMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMixin", function() { return initMixin; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/core/instance/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/core/instance/render.js");


var uid = 0;
function initMixin(SVue) {
  // 在vue原型上挂载`_init`初始化方法
  SVue.prototype._init = function (options) {
    var vm = this;
    vm._uid = uid++;
    vm.$options = options; // 初始化状态：data

    Object(_state__WEBPACK_IMPORTED_MODULE_0__["initState"])(vm); // 初始化render --> vm.$createElement

    Object(_render__WEBPACK_IMPORTED_MODULE_1__["initRender"])(vm); //模拟钩子函数

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
/*! exports provided: lifecycleMixin, mountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycleMixin", function() { return lifecycleMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountComponent", function() { return mountComponent; });
// SVue.prototype._update
function lifecycleMixin(SVue) {
  SVue.prototype._update = function (vnode) {
    var vm = this; // initial render

    vm.$el = vm.__patch__(vm.$el, vnode);
  };
}
function mountComponent(vm, el) {
  vm.$el = el;

  var updateComponent = function updateComponent() {
    vm._update(vm._render());
  }; // 模拟Watcher中getter的调用


  updateComponent.call(vm, vm);
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
 // SVue.prototype._render

function renderMixin(SVue) {
  SVue.prototype._render = function () {
    var vm = this;
    var render = vm.$options.render;
    var vnode = render.call(vm, vm.$createElement);
    return vnode;
  };
}
function initRender(vm) {
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
/*! exports provided: isPrimitive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Check if value is primitive.
 */
function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || _typeof(value) === 'symbol' || typeof value === 'boolean';
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
/* harmony import */ var core_vdom_vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/vdom/vnode */ "./src/core/vdom/vnode.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/core/util/index.js");


var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;
function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || Object(_util__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (alwaysNormalize) {
    normalizationType = ALWAYS_NORMALIZE;
  }

  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode;

  if (typeof tag === 'string') {
    vnode = new core_vdom_vnode__WEBPACK_IMPORTED_MODULE_0__["default"](tag, data, children, undefined, undefined, context);
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
  return Object(_util__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(children) ? [Object(core_vdom_vnode__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function normalizeArrayChildren(children) {
  var res = [];
  var i, c;

  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (!c || typeof c === 'boolean') continue;
    res.push(c);
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
  function emptyNodeAt(elm) {
    return new _vnode__WEBPACK_IMPORTED_MODULE_1__["default"](web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["tagName"](elm).toLowerCase(), {}, [], undefined, elm);
  } // createElm


  function createElm(vnode, insertedVnodeQueue, parentElm, refElm) {
    var children = vnode.children;
    var tag = vnode.tag;

    if (tag) {
      vnode.elm = web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["createElement"](tag, vnode); // createChildren

      createChildren(vnode, children, insertedVnodeQueue);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = web_runtime_node_ops__WEBPACK_IMPORTED_MODULE_0__["createTextNode"](vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
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

  return function patch(oldVnode, vnode) {
    if (!vnode) {
      return;
    }

    var insertedVnodeQueue = [];
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
/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patch */ "./src/web/runtime/patch.js");



 // SVue.prototype.$mount

core_instance__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$mount = function (el) {
  el = el ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["query"])(el) : undefined;
  return Object(core_instance_lifecycle__WEBPACK_IMPORTED_MODULE_1__["mountComponent"])(this, el);
}; // SVue.prototype.__patch__


core_instance__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.__patch__ = _patch__WEBPACK_IMPORTED_MODULE_3__["patch"];
/* harmony default export */ __webpack_exports__["default"] = (core_instance__WEBPACK_IMPORTED_MODULE_0__["default"]);

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