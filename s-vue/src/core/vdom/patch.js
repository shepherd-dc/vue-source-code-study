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
    const children = vnode.children
    const tag = vnode.tag
    if (tag) {
      vnode.elm = nodeOps.createElement(tag, vnode)
      // createChildren
      createChildren(vnode, children, insertedVnodeQueue)
      insert(parentElm, vnode.elm, refElm)
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text)
      insert(parentElm, vnode.elm, refElm)
    }
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

    const insertedVnodeQueue = []
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

    return vnode.elm
  }
}
