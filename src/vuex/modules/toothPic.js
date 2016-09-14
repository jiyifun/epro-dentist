import {GET_TOOTH_PIC, DELETE_TOOTH_PIC, SUBMIT_TOOTH_PIC, CLEAN_TOOTH_PIC} from '../mutation-types'

const state = {
  upper: null,
  lower: null
}

const mutations = {
  [GET_TOOTH_PIC] (state) {
    return state
  },
  [SUBMIT_TOOTH_PIC] (state, data) {
    // console.info('设置牙齿照片')
    if (data.upper) {
      state.upper = data.upper
    }
    if (data.lower) {
      state.lower = data.lower
    }
  },
  [DELETE_TOOTH_PIC] (state, data) {
    if (data === 'upper') {
      state.upper = null
    }
    if (data === 'lower') {
      state.lower = null
    }
  },
  [CLEAN_TOOTH_PIC] (state) {
    state.upper = null
    state.lower = null
  }
}

export default {
  state,
  mutations
}
