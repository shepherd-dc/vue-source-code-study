import Dep from './dep'
import Watch from './watcher'

export class SVue {
  constructor(options){
    this.$options = options
    // 数据响应化
    this.$data = options.data
    this.observe(this.$data)

    // 模拟watcher创建
    new Watch()
    this.$data.test
    this.$data.test
    new Watch()
    this.$data.foo.bar
    this.$data.foo.baz
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
    let dep = new Dep()
    Object.defineProperty(obj, key, {
      get() {
        Dep.target && dep.addDep(Dep.target)
        // console.log(dep.deps)
        return val
      },
      set(newVal) {
        if (newVal === val) return
        val = newVal
        // console.log(`${key}的属性变化了：${val}`)
        dep.notify()
      }
    })
    // 如果val还是一个对象，递归设置响应化
    this.observe(val)
  }
}