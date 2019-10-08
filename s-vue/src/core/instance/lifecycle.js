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

  let updateComponent = () => {
    vm._update(vm._render())
  }

  // 模拟Watcher中getter的调用
  updateComponent.call(vm, vm)
  if (vm._isMounted) {
    callHook(vm, 'beforeUpdate')
  }

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
