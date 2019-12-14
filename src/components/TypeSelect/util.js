import store from '@/store'
import _ from 'lodash'

export function getEngineTypeById(id) {
  const engineTypes = store.state.basic.engineTypes
  const engine = _.find(engineTypes, { id }) || {}
  return engine.engineType
}

export function getEngineIdByType(type) {
  const engineTypes = store.state.basic.engineTypes
  const engine = _.find(engineTypes, { engineType: type }) || {}
  return engine.id
}

export function getEngineNameById(id) {
  const engineTypes = store.state.basic.engineTypes
  const engine = _.find(engineTypes, { id }) || {}
  return engine.description
}

export function getStoreNameById(id) {
  const storeTypes = store.state.basic.storeTypes
  const storeType = _.find(storeTypes, { id }) || {}
  return storeType.storeName
}
