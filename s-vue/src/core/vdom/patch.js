import * as nodeOps from 'web/runtime/node-ops'
import VNode from './vnode'

export function createPatchFunction () {
  // 在dom的基础上新建一个空的vnode, dom属性保存在elm上
  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  // create new node 创建一个新的节点
  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm
  ) {
    // 如果是组件，创建组件占位符节点，成功则直接返回
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    // 组件节点处理完了后，接着处理普通元素节点
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
      if ((i = i.hook) && (i = i.init)) {
        // 调用init hook
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
    // make sure to invoke the insert hook
    insertedVnodeQueue.push(vnode)
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

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the element is really inserted
    // 组件patch时 isInitialPatch = true
    if (initial && vnode.parent) {
      vnode.parent.data.pendingInsert = queue
    } else {
      for (let i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i])
      }
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
      // 组件patch时 isInitialPatch = true
      isInitialPatch = true
      // 组件实例没有oldVnode(vm.$el)dom元素, 直接创建一个新的vnode
      createElm(vnode, insertedVnodeQueue)
    } else {
      // 如果有oldVnode(vm.$el), 将dom元素转化成虚拟dom——vnode, dom属性保存在oldVnode.elm上
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

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)

    return vnode.elm
  }
}
