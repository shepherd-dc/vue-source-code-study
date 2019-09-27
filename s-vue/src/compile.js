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
        console.log('编译元素', node.nodeName)
      } else if (this.isInterpolation(node)) {
        console.log('编译插值文本', node.textContent)
      }
      // 递归子节点
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }

  isElement (node) {
    return node.nodeType === 1
  }

  // 插值文本
  isInterpolation (node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

}

export default Compile