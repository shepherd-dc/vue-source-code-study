import { initExtend } from './extend'

export function initGlobalAPI (SVue) {
  SVue.options = Object.create(null)
  SVue.options._base = SVue

  initExtend(SVue)
}
