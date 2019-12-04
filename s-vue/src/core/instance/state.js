import { observe, toggleObserving, defineReactive } from '../observer/index'
import Watcher from '../observer/watcher'
import Dep, { pushTarget, popTarget } from '../observer/dep'

import { noop, isPlainObject } from '../util/index'

const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}
const computedWatcherOptions = { lazy: true }

export function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}

export function initState (vm) {
  vm._watchers = []
  const opts = vm.$options
  // 初始化props
  if (opts.props) initProps(vm, opts.props)
  // 初始化data
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  // 初始化computed
  if (opts.computed) initComputed(vm, opts.computed)
  // 初始化watch
  if (opts.watch) initWatch(vm, opts.watch)
}

function initProps (vm, propsOptions) {
  debugger
  // const propsData = vm.$options.propsData || {}
  const props = vm._props = {}
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  const keys = vm.$options._propKeys = []
  const isRoot = !vm.$parent
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false)
  }
  for (const key in propsOptions) {
    keys.push(key)
    // const value = validateProp(key, propsOptions, propsData, vm)
    const value = propsOptions[key]
    defineReactive(props, key, value)
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, '_props', key)
    }
  }
  toggleObserving(true)
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
  // #7573 disable dep collection when invoking data getters
  pushTarget()
  try {
    return data.call(vm, vm)
  } catch (e) {
    console.error(e, vm, 'data()')
    return {}
  } finally {
    popTarget()
  }
}

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
