import {SUBMIT_QUESTIONNAIRE, CLEAN_QUESTIONNAIRE} from '../mutation-types'
const state = {
  brushCount: null,
  isBled: null,
  isLoosen: null,
  isCleaned: null,
  isUnwell: null
}

const mutations = {
  [SUBMIT_QUESTIONNAIRE] (state, data) {
    if (data.brushCount) {
      state.brushCount = data.brushCount
    }
    if (data.isBled) {
      state.isBled = data.isBled
    }
    if (data.isLoosen) {
      state.isLoosen = data.isLoosen
    }
    if (data.isCleaned) {
      state.isCleaned = data.isCleaned
    }
    if (data.isUnwell) {
      state.isUnwell = data.isUnwell
    }
  },
  [CLEAN_QUESTIONNAIRE] (state) {
    state.brushCount = null
    state.isBled = null
    state.isLoosen = null
    state.isCleaned = null
    state.isUnwell = null
  }
}

export default {
  state,
  mutations
}
