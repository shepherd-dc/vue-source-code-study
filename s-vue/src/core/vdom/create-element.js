import VNode, { createTextVNode } from 'core/vdom/vnode'
import { createComponent } from './create-component'
import { isPrimitive } from '../util'

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
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children)
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children)
  }
  let vnode
  if (typeof tag === 'string') {
    // dom原生保留标签
    vnode = new VNode(tag, data, children, undefined, undefined, context)
  } else {
    // 组件
    debugger
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
    res.push(createTextVNode(c))
  }
  return res
}
