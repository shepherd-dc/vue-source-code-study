// Dep管理所有Watcher
export default class Dep {
  constructor () {
    /* 用来存放Watcher对象的数组 */
    this.deps = []
  }

  /* 在deps中添加一个Watcher对象 */
  addDep (dep) {
    this.deps.push(dep)
  }

  /* 通知所有Watcher对象更新视图 */
  notify () {
    console.log(this.deps)
    this.deps.forEach(dep => {
      dep.update()
    })
  }
}