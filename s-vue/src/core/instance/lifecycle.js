// SVue.prototype._update
export function lifecycleMixin (SVue) {
  SVue.prototype._update = function (vnode) {
    const vm = this
    // initial render
    vm.$el = vm.__patch__(vm.$el, vnode)
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
