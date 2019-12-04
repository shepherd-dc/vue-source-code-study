/*
 * @Autor: Yang Yixia
 * @Date: 2019-10-08 10:02:56
 * @LastEditors: Yang Yixia
 * @LastEditTime: 2019-12-04 11:18:25
 * @Description:
 */
import { observe } from '../observer/index'
import Watcher from '../observer/watcher'
import Dep from '../observer/dep'

import { noop, isPlainObject } from '../util/index'

export function initState (vm) {
  vm._watchers = []
  const opts = vm.$options

  // 初始化data
  if (opts.data) {
    initData(vm)
  }
  // 初始化computed
  if (opts.computed) {
    initComputed(vm, opts.computed)
  }
  // 初始化watch
  if (opts.watch) {
    initWatch(vm, opts.watch)
  }
}

function initData (vm) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {}

  // 将data的属性代理到vue实例
  Object.keys(data).forEach(key => {
    proxy(vm, '_data', key)
  })
  // observe data
  // asRootData: 这步作为根数据，下面会递归observe进行对深层对象的绑定
  observe(data, true /* asRootData */)
}

function getData (data, vm) {
  return data.call(vm, vm)
}

function proxy (vm, sourcekey, key) {
  Object.defineProperty(vm, key, {
    get () {
      return vm[sourcekey][key]
    },
    set (val) {
      vm[sourcekey][key] = val
    }
  })
}

const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}
const computedWatcherOptions = { lazy: true }

function initComputed (vm, computed) {
  const watchers = vm._computedWatchers = Object.create(null)

  for (const key in computed) {
    const userDef = computed[key]
    const getter = typeof userDef === 'function' ? userDef : userDef.get
    if (getter == null) {
      console.error(
        `Getter is missing for computed property "${key}".`
      )
    }

    // create internal watcher for the computed property.
    // computed watcher
    watchers[key] = new Watcher(
      vm,
      getter || noop,
      noop,
      computedWatcherOptions
    )
    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef)
    }
  }
}

export function defineComputed (
  target, // any,
  key, // string,
  userDef // Object | Function
) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key)
    sharedPropertyDefinition.set = noop
  } else {
    sharedPropertyDefinition.get = userDef.get ? createComputedGetter(key) : noop
    sharedPropertyDefinition.set = userDef.set || noop
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}

function createComputedGetter (key) {
  return function computedGetter () {
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      if (watcher.dirty) {
        // 求值: watcher -> this.get() -> this.value = this.getter.call(vm)
        watcher.evaluate()
      }
      if (Dep.target) {
        // 收集依赖(被render Watcher订阅): this.deps[i].depend() -> Dep.target.addDep(this)
        watcher.depend()
      }
      return watcher.value
    }
  }
}

function initWatch (vm, watch) {
  for (const key in watch) {
    const handler = watch[key]
    if (Array.isArray(handler)) {
      for (let i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i])
      }
    } else {
      createWatcher(vm, key, handler)
    }
  }
}

function createWatcher (
  vm, // Component,
  expOrFn, // string | Function,
  handler, // any,
  options // Object
) {
  if (isPlainObject(handler)) {
    options = handler
    handler = handler.handler
  }
  if (typeof handler === 'string') {
    handler = vm[handler]
  }
  return vm.$watch(expOrFn, handler, options)
}

export function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  const dataDef = {}
  dataDef.get = function () { return this._data }
  const propsDef = {}
  propsDef.get = function () { return this._props }

  Object.defineProperty(Vue.prototype, '$data', dataDef)
  Object.defineProperty(Vue.prototype, '$props', propsDef)

  Vue.prototype.$watch = function (
    expOrFn, // string | Function,
    cb, // any,
    options // Object
  ) {
    const vm = this
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {}
    options.user = true
    const watcher = new Watcher(vm, expOrFn, cb, options)

    if (options.immediate) {
      try {
        cb.call(vm, watcher.value)
      } catch (error) {
        console.error(error, vm, `callback for immediate watcher "${watcher.expression}"`)
      }
    }

    return function unwatchFn () {
      watcher.teardown()
    }
  }
}
