import { initState } from './state'

let uid = 0

export function init (SVue) {
  // 在vue原型上挂载`_init`初始化方法
  SVue.prototype._init = function (options) {
    const vm = this
    vm._uid = uid++

    vm.$options = options

    // 初始化状态：data
    initState(vm)

    //模拟钩子函数
    const created = options.created
    if (created && typeof created === 'function') {
      created.call(vm)
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
}
