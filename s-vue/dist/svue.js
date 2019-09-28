(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["svue"] = factory();
	else
		root["svue"] = factory();
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

/***/ "./src/compile.js":
/*!************************!*\
  !*** ./src/compile.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watcher */ "./src/watcher.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Compile =
/*#__PURE__*/
function () {
  function Compile(el, vm) {
    _classCallCheck(this, Compile);

    // 要遍历的宿主节点
    this.$el = document.querySelector(el);
    this.$vm = vm; // 编译

    if (this.$el) {
      // 转换内部内容为片段fragment
      this.$fragment = this.node2Fragment(this.$el); // 执行编译

      this.compile(this.$fragment); // 将编译完的html的结果追加至$el

      this.$el.appendChild(this.$fragment);
    }
  }

  _createClass(Compile, [{
    key: "node2Fragment",
    value: function node2Fragment(el) {
      var frag = document.createDocumentFragment(); // 将el中所有子元素搬家至frag中

      var child;

      while (child = el.firstChild) {
        frag.appendChild(child);
      }

      return frag;
    }
  }, {
    key: "compile",
    value: function compile(frag) {
      var _this = this;

      var childNodes = frag.childNodes;
      Array.from(childNodes).forEach(function (node) {
        // 类型判断
        if (_this.isElement(node)) {
          // console.log('编译元素', node.nodeName)
          var nodeAttrs = node.attributes;
          Array.from(nodeAttrs).forEach(function (attr) {
            var attrName = attr.name; // 属性名

            var exp = attr.value; // 属性值

            if (_this.isDirective(attrName)) {
              var dir = attrName.substring(2);
              _this[dir] && _this[dir](node, _this.$vm, exp);
            }

            if (_this.isEvent(attrName)) {
              var event = attrName.substring(1);

              _this.eventHandler(node, _this.$vm, exp, event);
            }
          });
        } else if (_this.isInterpolation(node)) {
          // console.log('编译插值文本', node.textContent)
          _this.compileText(node);
        } // 递归子节点


        if (node.childNodes && node.childNodes.length > 0) {
          _this.compile(node);
        }
      });
    }
  }, {
    key: "compileText",
    value: function compileText(node) {
      var exp = RegExp.$1;
      this.update(node, this.$vm, exp, 'text');
    }
  }, {
    key: "update",
    value: function update(node, vm, exp, dir) {
      var updaterFn = this[dir + 'Updater'];

      if (updaterFn) {
        // 初始化
        if (exp.indexOf('.') >= 0) {
          var nest = exp.split('.'); // 只测试实现了一层嵌套

          updaterFn(node, vm[nest[0]][nest[1]]);
        } else {
          updaterFn(node, vm[exp]);
        } // 依赖收集


        var fn = function fn(val) {
          updaterFn(node, val);
        };

        new _watcher__WEBPACK_IMPORTED_MODULE_0__["default"](vm, exp, fn);
      }
    }
  }, {
    key: "text",
    value: function text(node, vm, exp) {
      this.update(node, vm, exp, 'text');
    }
  }, {
    key: "textUpdater",
    value: function textUpdater(node, val) {
      node.textContent = val;
    } // 双向绑定

  }, {
    key: "model",
    value: function model(node, vm, exp) {
      // 指定input的value属性 :value
      this.update(node, vm, exp, 'model'); // 视图对模型的响应 @input

      node.addEventListener('input', function (e) {
        vm[exp] = e.target.value;
      });
    }
  }, {
    key: "modelUpdater",
    value: function modelUpdater(node, val) {
      node.value = val;
    }
  }, {
    key: "html",
    value: function html(node, vm, exp) {
      this.update(node, vm, exp, 'html');
    }
  }, {
    key: "htmlUpdater",
    value: function htmlUpdater(node, val) {
      node.innerHTML = val;
    }
  }, {
    key: "eventHandler",
    value: function eventHandler(node, vm, exp, event) {
      var fn = vm.$options.methods && vm.$options.methods[exp];

      if (fn && event) {
        node.addEventListener(event, fn.bind(vm));
      }
    } // 原生标签

  }, {
    key: "isElement",
    value: function isElement(node) {
      return node.nodeType === 1;
    } // 插值文本

  }, {
    key: "isInterpolation",
    value: function isInterpolation(node) {
      return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
    } // 是否为指令

  }, {
    key: "isDirective",
    value: function isDirective(attr) {
      return attr.indexOf('s-') === 0;
    } // 是否为事件

  }, {
    key: "isEvent",
    value: function isEvent(attr) {
      return attr.indexOf('@') === 0;
    }
  }]);

  return Compile;
}();

/* harmony default export */ __webpack_exports__["default"] = (Compile);

/***/ }),

/***/ "./src/dep.js":
/*!********************!*\
  !*** ./src/dep.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dep; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Dep管理所有Watcher
var Dep =
/*#__PURE__*/
function () {
  function Dep() {
    _classCallCheck(this, Dep);

    /* 用来存放Watcher对象的数组 */
    this.deps = [];
  }
  /* 在deps中添加一个Watcher对象 */


  _createClass(Dep, [{
    key: "addDep",
    value: function addDep(dep) {
      this.deps.push(dep);
    }
    /* 通知所有Watcher对象更新视图 */

  }, {
    key: "notify",
    value: function notify() {
      console.log(this.deps);
      this.deps.forEach(function (dep) {
        dep.update();
      });
    }
  }]);

  return Dep;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: SVue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVue", function() { return SVue; });
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep */ "./src/dep.js");
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watcher */ "./src/watcher.js");
/* harmony import */ var _compile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compile */ "./src/compile.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SVue =
/*#__PURE__*/
function () {
  function SVue(options) {
    _classCallCheck(this, SVue);

    this.$options = options; // 数据响应化

    this.$data = options.data;
    this.observe(this.$data); // /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
    // new Watcher()
    // /* 在这里模拟render的过程，为了触发test属性的get函数 */
    // console.log('render...', this.$data.test + 1)
    // console.log('render...', this.$data.test + 2)
    // new Watcher()
    // console.log('render...', this.$data.foo.bar)
    // console.log('render...', this.$data.foo.baz)

    new _compile__WEBPACK_IMPORTED_MODULE_2__["default"](options.el, this); // 执行created钩子

    if (options.created) {
      options.created.call(this);
    }
  }

  _createClass(SVue, [{
    key: "observe",
    value: function observe(obj) {
      var _this = this;

      if (!obj || _typeof(obj) !== 'object') {
        return;
      }

      Object.keys(obj).forEach(function (key) {
        _this.defineReactive(obj, key, obj[key]); // 代理 $data到 SVue实例


        _this.proxyData(key);
      });
    }
  }, {
    key: "defineReactive",
    value: function defineReactive(obj, key, val) {
      var dep = new _dep__WEBPACK_IMPORTED_MODULE_0__["default"]();
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
          /* 将Dep.target（即当前的 Watcher对象存入dep的deps中） */
          _dep__WEBPACK_IMPORTED_MODULE_0__["default"].target && dep.addDep(_dep__WEBPACK_IMPORTED_MODULE_0__["default"].target); // console.log(dep.deps)

          return val;
        },
        set: function reactiveSetter(newVal) {
          if (newVal === val) return;
          val = newVal;
          /* 在set的时候触发dep的notify来通知所有的Watcher对象更新视图 */

          dep.notify();
        }
      }); // 如果val还是一个对象，递归设置响应化

      this.observe(val);
    }
  }, {
    key: "proxyData",
    value: function proxyData(key) {
      Object.defineProperty(this, key, {
        get: function get() {
          return this.$data[key];
        },
        set: function set(newVal) {
          this.$data[key] = newVal;
        }
      });
    }
  }]);

  return SVue;
}();

/***/ }),

/***/ "./src/watcher.js":
/*!************************!*\
  !*** ./src/watcher.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep */ "./src/dep.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Watcher =
/*#__PURE__*/
function () {
  function Watcher(vm, key, cb) {
    _classCallCheck(this, Watcher);

    this.vm = vm;
    this.key = key;
    this.cb = cb; // 将当前Watch实例指定到 Dep静态属性target, 在get中会用到

    _dep__WEBPACK_IMPORTED_MODULE_0__["default"].target = this; // 读取属性模拟触发getter

    this.isNested(key);
    _dep__WEBPACK_IMPORTED_MODULE_0__["default"].target = null;
  }

  _createClass(Watcher, [{
    key: "update",
    value: function update() {
      this.cb.call(this.vm, this.isNested(this.key)); // console.log(Dep.target)
    }
  }, {
    key: "isNested",
    value: function isNested(key) {
      if (key.indexOf('.') >= 0) {
        var nest = key.split('.');
        this.val = this.vm[nest[0]][nest[1]];
      } else {
        this.val = this.vm[key];
      }

      return this.val;
    }
  }]);

  return Watcher;
}();

/* harmony default export */ __webpack_exports__["default"] = (Watcher);

/***/ })

/******/ });
});
//# sourceMappingURL=svue.js.map