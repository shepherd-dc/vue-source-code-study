import Dep from './dep'
export default class Watch {
  constructor () {
    // 将当前watch实例指定到Dep静态属性target
    Dep.target = this
  }

  update () {
    console.log('属性更新了')
    // console.log(Dep.target)
  }
}