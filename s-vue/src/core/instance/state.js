/*
 * @Autor: Yang Yixia
 * @Date: 2019-10-08 10:02:56
 * @LastEditors: Yang Yixia
 * @LastEditTime: 2019-11-18 11:11:15
 * @Description:
 */
import { observe } from '../observer/index'
import Watcher from '../observer/watcher'
import Dep from '../observer/dep'

import { noop } from '../util/index'

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
        watcher.depend()
      }
      return watcher.value
    }
  }
}
