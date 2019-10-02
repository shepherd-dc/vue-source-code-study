import SVue from 'core/instance'
import { mountComponent } from 'core/instance/lifecycle'
import { query } from '../util'

SVue.prototype.$mount = function (el) {
  el = el ? query(el) : undefined
  return mountComponent(this, el)
}

export default SVue
