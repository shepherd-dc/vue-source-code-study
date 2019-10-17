import Watcher from '../observer/watcher'
import { noop } from '../util'

// 全局当前激活实例
export let activeInstance = null

// export function setActiveInstance(vm) {
//   const prevActiveInstance = activeInstance
//   activeInstance = vm
//   return () => {
//     activeInstance = prevActiveInstance
//   }
// }

// initLifecycle
export function initLifecycle (vm) {
  const options = vm.$options

  // locate first non-abstract parent
  // 建立记录父子关系
  let parent = options.parent
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent
    }
    parent.$children.push(vm)
  }

  vm.$parent = parent
  vm.$root = parent ? parent.$root : vm
  vm.$children = []
}

// SVue.prototype._update
export function lifecycleMixin (SVue) {
  SVue.prototype._update = function (vnode) {
    const vm = this
    // 记录当前激活实例
    // const restoreActiveInstance = setActiveInstance(vm)
    const prevActiveInstance = activeInstance
    activeInstance = vm

    // vm._vnode: 渲染vnode(子) <--> vm.$vnode: 占位vnode(父)
    vm._vnode = vnode

    // initial render
    vm.$el = vm.__patch__(vm.$el, vnode)

    // restoreActiveInstance()
    activeInstance = prevActiveInstance
  }
}

export function mountComponent (vm, el) {
  vm.$el = el

  callHook(vm, 'beforeMount')

  const updateComponent = () => {
    vm._update(vm._render())
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  // eslint-disable-next-line
  debugger
  // eslint-disable-next-line
  new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
}

export function callHook (vm, hook) {
  const handlers = vm.$options[hook]
  const info = `${hook} hook`
  if (handlers) {
    for (let i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm)
      } catch (e) {
        console.error(e, info)
      }
    }
  }
}
