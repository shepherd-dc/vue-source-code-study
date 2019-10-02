export function initState (vm) {
  const opts = vm.$options

  // 初始化data
  if (opts.data) {
    initData(vm)
  }
}

function initData(vm) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {}

  // 将data的属性代理到vue实例
  Object.keys(data).forEach(key => {
    proxy(vm, '_data', key)
  })
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