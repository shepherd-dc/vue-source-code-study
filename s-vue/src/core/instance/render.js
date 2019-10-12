import { createElement } from '../vdom/create-element'
import VNode, { createEmptyVNode } from '../vdom/vnode'

// SVue.prototype._render
export function renderMixin (SVue) {
  SVue.prototype._render = function () {
    const vm = this
    const { render, _parentVnode } = vm.$options

    // vm.$vnode: 占位vnode(父) <--> vm._vnode: 渲染vnode(子)
    vm.$vnode = _parentVnode

    let vnode
    vnode = render.call(vm, vm.$createElement)

    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      vnode = createEmptyVNode()
    }
    // set parent
    vnode.parent = _parentVnode

    return vnode
  }
}

export function initRender (vm) {
  vm._vnode = null // the root of the child tree
  const options = vm.$options
  const parentVnode = vm.$vnode = options._parentVnode // the placeholder node in parent tree
  const renderContext = parentVnode && parentVnode.context // eslint-disable-line
  // vm.$createElement 用户自定义render时使用
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
}
