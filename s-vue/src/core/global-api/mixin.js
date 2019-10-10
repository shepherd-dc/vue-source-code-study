import { mergeOptions } from '../util/index'

export function initMixin (SVue) {
  SVue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
