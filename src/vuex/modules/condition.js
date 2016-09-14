import {SUBMIT_CONDITION, CLEAN_CONDITION} from '../mutation-types'
const state = {
  toothColor: null,
  isToothOutlook: null,
  isLost: null,
  isCaries: null,
  isBroken: null,
  isWisdomTooth: null,
  isOralColor: null,
  isOralMucosa: null,
  toothCount: null,
  isToothArrange: null
}

const mutations = {
  [SUBMIT_CONDITION] (state, data) {
    if (data.toothColor) {
      state.toothColor = data.toothColor
    }
    if (data.isLost) {
      state.isLost = data.isLost
    }
    if (data.isToothOutlook) {
      state.isToothOutlook = data.isToothOutlook
    }
    if (data.isCaries) {
      state.isCaries = data.isCaries
    }
    if (data.isBroken) {
      state.isBroken = data.isBroken
    }
    if (data.isWisdomTooth) {
      state.isWisdomTooth = data.isWisdomTooth
    }
    if (data.isOralColor) {
      state.isOralColor = data.isOralColor
    }
    if (data.isOralMucosa) {
      state.isOralMucosa = data.isOralMucosa
    }
    if (data.toothCount) {
      state.toothCount = data.toothCount
    }
    if (data.isToothArrange) {
      state.isToothArrange = data.isToothArrange
    }
  },
  [CLEAN_CONDITION] (state) {
    state.toothColor = null
    state.isToothOutlook = null
    state.isLost = null
    state.isCaries = null
    state.isBroken = null
    state.isWisdomTooth = null
    state.isOralColor = null
    state.isOralMucosa = null
    state.toothCount = null
    state.isToothArrange = null
  }
}

export default {
  state,
  mutations
}
