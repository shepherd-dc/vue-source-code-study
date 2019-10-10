import SVue from 'core/index'
import { mountComponent } from 'core/instance/lifecycle'
import { query, isReservedTag, isUnknownElement } from '../util'
import { patch } from './patch'

// install platform specific utils
SVue.config.isReservedTag = isReservedTag
SVue.config.isUnknownElement = isUnknownElement

// public mount method
// SVue.prototype.$mount
SVue.prototype.$mount = function (el) {
  el = el ? query(el) : undefined
  return mountComponent(this, el)
}

// install platform patch function
// SVue.prototype.__patch__
SVue.prototype.__patch__ = patch

export default SVue
