import config from '../config'
import VNode, { createTextVNode } from 'core/vdom/vnode'
import { createComponent } from './create-component'
import { isPrimitive, resolveAsset } from '../util'

const SIMPLE_NORMALIZE = 1
const ALWAYS_NORMALIZE = 2

export function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children
    children = data
    data = undefined
  }
  if (alwaysNormalize) {
    normalizationType = ALWAYS_NORMALIZE
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context, // Component
  tag, // string | Class<Component> | Function | Object
  data, // VNodeData
  children,
  normalizationType
) {
  // normalizeChildren 将多维数组拍平成一维数组
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children)
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children)
  }

  let vnode
  if (typeof tag === 'string') {
    let Ctor
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      // dom原生保留标签
      vnode = new VNode(tag, data, children, undefined, undefined, context)
    } 
    // 全局注册的组件在原型链上都可以resolve到, 局部注册的组件只有在当前实例才能resolve到
    else if (Ctor = resolveAsset(context.$options, 'components', tag)) {
      // 实例上注册的组件
      // 全局注册：new Vue()之前事先调用 Vue.component静态方法, 继承了Vue的构造器, 随后createComponent()时不用再继承
      // 局部注册：拿到当前实例 context.$options.components, 走渲染正常组件的逻辑去继承Vue
      vnode = createComponent(Ctor, data, context, children, tag)
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      )
    }
  } else {
    // direct component options / constructor
    // render中第一个参数传入组件选项对象，或一个组件
    vnode = createComponent(tag, data, context, children)
  }
  return vnode
}

export function simpleNormalizeChildren (children) {
  for (let i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

export function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function normalizeArrayChildren (children) {
  const res = []
  let i, c
  for (i = 0; i < children.length; i++) {
    c = children[i]
    if (!c || typeof c === 'boolean') continue
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c)
        res.push.apply(res, c)
      }
    } else if (isPrimitive(c)) {
      res.push(createTextVNode(c))
    } else {
      res.push(c)
    }
  }
  return res
}
