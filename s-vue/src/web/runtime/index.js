import SVue from 'core/index'
import { mountComponent } from 'core/instance/lifecycle'
import { query } from '../util'
import { patch } from './patch'

// SVue.prototype.$mount
SVue.prototype.$mount = function (el) {
  el = el ? query(el) : undefined
  return mountComponent(this, el)
}

// SVue.prototype.__patch__
SVue.prototype.__patch__ = patch

export default SVue
