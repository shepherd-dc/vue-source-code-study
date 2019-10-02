import { initState } from './state'
export function init (Vue) {
  // 在vue原型上挂载`_init`初始化方法
  Vue.prototype._init = function (options) {
    const vm = this
    vm.$options = options

    // 初始化状态：data
    initState(vm)

    //模拟钩子函数
    const created = options.created
    if (created && typeof created === 'function') {
      created.call(vm)
    }
  }
}