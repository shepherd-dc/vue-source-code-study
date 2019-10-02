import SVue from 'web/runtime'
import { query } from 'web/util'

const mount = SVue.prototype.$mount
SVue.prototype.$mount = function (el) {
  el = el && query(el)
  return mount.call(this, el)
}

export default SVue
