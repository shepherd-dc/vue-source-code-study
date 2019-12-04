import { initMixin } from './init'
import { stateMixin } from './state'
import { lifecycleMixin } from './lifecycle'
import { renderMixin } from './render'

function SVue (options) {
  this._init(options)
}

initMixin(SVue)
stateMixin(SVue)
lifecycleMixin(SVue)
renderMixin(SVue)

export default SVue
