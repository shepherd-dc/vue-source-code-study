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

  let updateComponent = () => {
    vm._update(vm._render())
  }

  // 模拟Watcher中getter的调用
  updateComponent.call(vm, vm)
}
