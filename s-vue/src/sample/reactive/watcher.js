import Dep from './dep'
class Watcher {
  constructor (vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb
    // 将当前Watch实例指定到 Dep静态属性target, 在get中会用到
    Dep.target = this
    // 读取属性模拟触发getter
    this.isNested(key)
    Dep.target = null
  }

  update () {
    this.cb.call(this.vm, this.isNested(this.key))
    // console.log(Dep.target)
  }

  isNested (key) {
    if (key.indexOf('.') >= 0) {
      let nest = key.split('.')
      this.val = this.vm[nest[0]][nest[1]]     
    } else {
      this.val = this.vm[key]
    }
    return this.val
  }
}

export default Watcher