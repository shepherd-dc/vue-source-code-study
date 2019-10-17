import { observe } from '../observer/index'

export function initState (vm) {
  vm._watchers = []
  const opts = vm.$options

  // 初始化data
  if (opts.data) {
    initData(vm)
  }
}

function initData (vm) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {}

  // 将data的属性代理到vue实例
  Object.keys(data).forEach(key => {
    proxy(vm, '_data', key)
  })
  // observe data
  // asRootData: 这步作为根数据，下面会递归observe进行对深层对象的绑定
  observe(data, true /* asRootData */)
}

function getData (data, vm) {
  return data.call(vm, vm)
}

function proxy (vm, sourcekey, key) {
  Object.defineProperty(vm, key, {
    get () {
      return vm[sourcekey][key]
    },
    set (val) {
      vm[sourcekey][key] = val
    }
  })
}
