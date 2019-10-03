import { createElement } from '../vdom/create-element'

// SVue.prototype._render
export function renderMixin (SVue) {
  SVue.prototype._render = function () {
    const vm = this
    const { render } = vm.$options
    let vnode = render.call(vm, vm.$createElement)
    return vnode
  }
}

export function initRender (vm) {
  // vm.$createElement 用户自定义render时使用
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
}