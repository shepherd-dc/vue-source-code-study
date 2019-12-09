import Watcher from '../observer/watcher'
import { toggleObserving } from '../observer/index'
import { noop } from '../util'

// 全局当前激活实例
export let activeInstance = null

// updateChildComponent state
export let isUpdatingChildComponent = false

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

    const prevEl = vm.$el
    const prevVnode = vm._vnode
    // vm._vnode: 渲染vnode(子) <--> vm.$vnode: 占位vnode(父)
    vm._vnode = vnode

    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, false /* removeOnly */)
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode)
    }

    // restoreActiveInstance()
    activeInstance = prevActiveInstance

    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el
    }
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

  // 渲染watcher
  // eslint-disable-next-line
  new Watcher(
    vm,
    updateComponent, /* this.getter */
    noop, /* this.cb */
    {
      before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate')
        }
      }
    }, /* options.before */
    true /* isRenderWatcher */
  )

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
}

export function updateChildComponent (
  vm, // Component,
  propsData, // ?Object,
  listeners, // ?Object,
  parentVnode, // MountedComponentVNode,
  renderChildren // ?Array<VNode>
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true
  }

  vm.$options._parentVnode = parentVnode
  vm.$vnode = parentVnode // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode
  }
  vm.$options._renderChildren = renderChildren

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || {}
  vm.$listeners = listeners || {}

  debugger
  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false)
    const props = vm._props
    const propKeys = vm.$options._propKeys || []
    for (let i = 0; i < propKeys.length; i++) {
      const key = propKeys[i]
      props[key] = propsData[key]
    }
    toggleObserving(true)
    // keep a copy of raw propsData
    vm.$options.propsData = propsData
  }
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
