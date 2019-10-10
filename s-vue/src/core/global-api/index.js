import config from '../config'
import { initMixin } from './mixin'
import { initExtend } from './extend'
import { initAssetRegisters } from './assets'
import { ASSET_TYPES } from 'shared/constants'

export function initGlobalAPI (SVue) {
  // config
  const configDef = {}
  configDef.get = () => config
  configDef.set = () => {
    console.error('Do not replace the Vue.config object, set individual fields instead.')
  }
  Object.defineProperty(SVue, 'config', configDef)

  SVue.options = Object.create(null)
  ASSET_TYPES.forEach(type => {
    SVue.options[type + 's'] = Object.create(null)
  })
  // this is used to identify the "base" constructor to extend all plain-object components
  SVue.options._base = SVue

  initMixin(SVue)
  initExtend(SVue)
  initAssetRegisters(SVue)
}
