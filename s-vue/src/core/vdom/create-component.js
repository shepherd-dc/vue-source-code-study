import VNode from './vnode'
import { resolveConstructorOptions } from 'core/instance/init'
import { activeInstance, callHook } from '../instance/lifecycle'

// inline hooks to be invoked on component VNodes during patch
const componentVNodeHooks = {
  init (vnode) {
    const child = vnode.componentInstance = createComponentInstanceForVnode(
      vnode, // MountedComponentVNode
      activeInstance // activeInstance in lifecycle state 当前激活实例 parent
    )
    child.$mount(undefined)
  },

  prepatch (oldVnode, vnode) {
    const options = vnode.componentOptions
    const child = vnode.componentInstance = oldVnode.componentInstance
    // updateChildComponent(
    //   child,
    //   options.propsData, // updated props
    //   options.listeners, // updated listeners
    //   vnode, // new parent vnode
    //   options.children // new children
    // )
  },

  insert (vnode) {
    const { componentInstance } = vnode
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true
      callHook(componentInstance, 'mounted')
    }
  },

  destroy (vnode) {
    const { componentInstance } = vnode
    if (!componentInstance._isDestroyed) {
      // deactivateChildComponent(componentInstance, true /* direct */)
    }
  }
}

const hooksToMerge = Object.keys(componentVNodeHooks)

export function createComponent (
  Ctor, // Class<Component> | Function | Object | void
  data, // VNodeData
  context, // Component
  children, // Array<VNode>
  tag // string
) {
  if (!Ctor) {
    return
  }

  const baseCtor = context.$options._base

  // plain options object: turn it into a constructor
  // 组件对象在此时继承Vue
  if (typeof Ctor === 'object') {
    Ctor = baseCtor.extend(Ctor)
  }

  // if at this stage it's not a constructor or an async component factory, reject.
  // 全局注册的组件之前已经继承过Vue, 此时进来是个构造器, type为function, 不用再走继承逻辑
  if (typeof Ctor !== 'function') {
    return
  }

  data = data || {}

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor)

  // install component management hooks onto the placeholder node
  installComponentHooks(data)

  // return a placeholder vnode
  const name = Ctor.options.name || tag
  const vnode = new VNode(
    `vue-component-${Ctor.cid}${name ? `-${name}` : ''}`,
    data, undefined, undefined, undefined, context,
    { Ctor, tag, children }
  )

  return vnode
}

export function createComponentInstanceForVnode (
  vnode, // MountedComponentVNode
  parent // activeInstance in lifecycle state
) {
  const options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  const hooks = data.hook || (data.hook = {})
  for (let i = 0; i < hooksToMerge.length; i++) {
    const key = hooksToMerge[i]
    const existing = hooks[key]
    const toMerge = componentVNodeHooks[key]
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge
    }
  }
}

function mergeHook (f1, f2) {
  const merged = (a, b) => {
    // flow complains about extra args which is why we use any
    f1(a, b)
    f2(a, b)
  }
  merged._merged = true
  return merged
}