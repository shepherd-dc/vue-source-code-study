import Dep from './dep'
class Watcher {
  constructor () {
    // 将当前Watch实例指定到 Dep静态属性target, 在get中会用到
    Dep.target = this
  }

  update () {
    console.log('属性更新了')
    // console.log(Dep.target)
  }
}
Dep.target = null

export default Watcher