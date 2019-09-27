import Dep from './dep'
import Watcher from './watcher'
import Compile from './compile'

export class SVue {
  constructor(options){
    this.$options = options
    // 数据响应化
    this.$data = options.data
    this.observe(this.$data)

    // /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
    // new Watcher()
    // /* 在这里模拟render的过程，为了触发test属性的get函数 */
    // console.log('render...', this.$data.test + 1)
    // console.log('render...', this.$data.test + 2)

    // new Watcher()
    // console.log('render...', this.$data.foo.bar)
    // console.log('render...', this.$data.foo.baz)

    new Compile(options.el, this)
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
    const dep = new Dep()
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        /* 将Dep.target（即当前的 Watcher对象存入dep的deps中） */
        Dep.target && dep.addDep(Dep.target)
        // console.log(dep.deps)
        return val
      },
      set: function reactiveSetter(newVal) {
        if (newVal === val) return
        val = newVal
        /* 在set的时候触发dep的notify来通知所有的Watcher对象更新视图 */
        dep.notify()
      }
    })
    // 如果val还是一个对象，递归设置响应化
    this.observe(val)
  }
}