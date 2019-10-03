import { initMixin } from './init'
import { lifecycleMixin } from './lifecycle'
import { renderMixin } from './render'

function SVue (options) {
  this._init(options)
}

initMixin(SVue)
lifecycleMixin(SVue)
renderMixin(SVue)

export default SVue
