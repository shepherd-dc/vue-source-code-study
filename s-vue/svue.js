class SVue {
  constructor(options){
    this.$options = options
    // 数据响应化
    this.$data = options.data
    this.observe(this.$data)
  }

  observe(obj) {
    if (!obj || typeof obj !== 'object') {
      return
    }
    Object.keys(obj).forEach(key => {
      this.defineReactive(obj, key, obj[key])
    })
  }

  defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
      get() {
        return val
      },
      set(newVal) {
        if (newVal === val) return
        val = newVal
        console.log(`${key}的属性变化了：${val}`)
      }
    })
    // 如果val还是一个对象，递归设置响应化
    this.observe(val)
  }

}