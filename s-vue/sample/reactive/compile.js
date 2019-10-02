import Watcher from './watcher'
class Compile {
  constructor (el, vm) {
    // 要遍历的宿主节点
    this.$el = document.querySelector(el)
    this.$vm = vm
    // 编译
    if (this.$el) {
      // 转换内部内容为片段fragment
      this.$fragment = this.node2Fragment(this.$el)
      // 执行编译
      this.compile(this.$fragment)
      // 将编译完的html的结果追加至$el
      this.$el.appendChild(this.$fragment)
    }
  }

  node2Fragment (el) {
    const frag = document.createDocumentFragment()
    // 将el中所有子元素搬家至frag中
    let child
    while (child = el.firstChild) {
      frag.appendChild(child)
    }
    return frag
  }

  compile (frag) {
    const  childNodes = frag.childNodes
    Array.from(childNodes).forEach(node => {
      // 类型判断
      if (this.isElement(node)) {
        // console.log('编译元素', node.nodeName)
        const nodeAttrs = node.attributes
        Array.from(nodeAttrs).forEach(attr => {
          const attrName = attr.name // 属性名
          const exp = attr.value // 属性值
          if (this.isDirective(attrName)) {
            const dir = attrName.substring(2)
            this[dir] && this[dir](node, this.$vm, exp)
          }
          if (this.isEvent(attrName)) {
            const event = attrName.substring(1)
            this.eventHandler(node, this.$vm, exp, event)
          }
        })
      } else if (this.isInterpolation(node)) {
        // console.log('编译插值文本', node.textContent)
        this.compileText(node)
      }
      // 递归子节点
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }

  compileText (node) {
    let exp = RegExp.$1
    this.update(node, this.$vm, exp, 'text')
  }

  update (node, vm, exp, dir) {
    const updaterFn = this[dir + 'Updater']
    if (updaterFn) {
      // 初始化
      if (exp.indexOf('.') >= 0) {
        let nest = exp.split('.')
        // 只测试实现了一层嵌套
        updaterFn(node, vm[nest[0]][nest[1]])        
      } else {
        updaterFn(node, vm[exp])
      }
      // 依赖收集
      const fn = (val) => {
        updaterFn(node, val)
      }
      new Watcher(vm, exp, fn)
    }
  }

  text (node, vm, exp) {
    this.update(node, vm, exp, 'text')
  }

  textUpdater (node, val) {
    node.textContent = val
  }

  // 双向绑定
  model (node, vm, exp) {
    // 指定input的value属性 :value
    this.update(node, vm, exp, 'model')

    // 视图对模型的响应 @input
    node.addEventListener('input', e => {
      vm[exp] = e.target.value
    })
  }

  modelUpdater (node, val) {
    node.value = val
  }

  html (node, vm, exp) {
    this.update(node, vm, exp, 'html')
  }

  htmlUpdater (node, val) {
    node.innerHTML = val
  }

  eventHandler (node, vm, exp, event) {
    let fn = vm.$options.methods && vm.$options.methods[exp]
    if (fn && event) {
      node.addEventListener(event, fn.bind(vm))
    }
  }

  // 原生标签
  isElement (node) {
    return node.nodeType === 1
  }

  // 插值文本
  isInterpolation (node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  // 是否为指令
  isDirective (attr) {
    return attr.indexOf('s-') === 0
  }

  // 是否为事件
  isEvent (attr) {
    return attr.indexOf('@') === 0
  }

}

export default Compile