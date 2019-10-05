import * as nodeOps from 'web/runtime/node-ops'
import VNode from './vnode'

export function createPatchFunction () {
  
  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  // createElm
  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm
  ) {
    // 如果是组件，创建组件节点，成功则直接返回
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    // 非组件节点继续处理
    const data = vnode.data
    const children = vnode.children
    const tag = vnode.tag
    if (tag) {
      vnode.elm = nodeOps.createElement(tag, vnode)
      // createChildren
      createChildren(vnode, children, insertedVnodeQueue)
      // 处理 html属性
      if (data) {
        // invokeCreateHooks(vnode, insertedVnodeQueue)
        console.log(data)
      }
      insert(parentElm, vnode.elm, refElm)
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text)
      insert(parentElm, vnode.elm, refElm)
    }
  }

  // createComponent
  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    let i = vnode.data
    if (i) {
      const isReactivated = vnode.componentInstance && i.keepAlive
      if ((i = i.hook) && (i = i.init)) {
        i(vnode)
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (vnode.componentInstance) {
        initComponent(vnode, insertedVnodeQueue)
        insert(parentElm, vnode.elm, refElm)
        return true
      }
    }
  }

  // initComponent
  function initComponent (vnode, insertedVnodeQueue) {
    if (vnode.data.pendingInsert) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)
      vnode.data.pendingInsert = null
    }
    vnode.elm = vnode.componentInstance.$el
  }

  // insert
  function insert (parent, elm, ref) {
    if (parent) {
      if (ref) {
        if (nodeOps.parentNode(ref) === parent) {
          nodeOps.insertBefore(parent, elm, ref)
        }
      } else {
        nodeOps.appendChild(parent, elm)
      }
    }
  }

  // createChildren
  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (let i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null)
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      const ch = vnodes[startIdx]
      if (ch) {
        removeNode(ch.elm)
      }
    }
  }

  function removeNode (el) {
    const parent = nodeOps.parentNode(el)
    // element may have already been removed due to v-html / v-text
    if (parent) {
      nodeOps.removeChild(parent, el)
    }
  }

  return function patch (oldVnode, vnode) {
    if (!vnode) {
      return
    }

    let isInitialPatch = false
    const insertedVnodeQueue = []

    if (!oldVnode) {
      // empty mount (likely as component), create new root element
      // 组件没有旧的dom节点，直接生成一个新的vnode
      isInitialPatch = true
      createElm(vnode, insertedVnodeQueue)
    } else {
      // 将旧节点的dom元素转化成vnode
      const isRealElement = oldVnode.nodeType
      if (isRealElement) {
        // create an empty node and replace it
        oldVnode = emptyNodeAt(oldVnode)
      }

      // replacing existing element
      const oldElm = oldVnode.elm
      const parentElm = nodeOps.parentNode(oldElm)

      // create new node
      createElm(
        vnode,
        insertedVnodeQueue,
        parentElm,
        nodeOps.nextSibling(oldElm)
      )

      // destroy old node
      if (parentElm) {
        removeVnodes([oldVnode], 0, 0)
      }
    }

    return vnode.elm
  }
}
