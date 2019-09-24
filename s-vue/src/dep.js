export default class Dep {
  constructor () {
    this.deps = []
  }

  addDep (dep) {
    this.deps.push(dep)
  }

  notify () {
    console.log(this.deps)
    this.deps.forEach(dep => {
      dep.update()
    })
  }
}