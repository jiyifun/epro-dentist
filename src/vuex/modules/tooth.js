import {SET_CURRENTBLOCK, CLEAN_TOOTH, SET_CURRENTTEETH, REMOVE_CARIES_LIST, ADD_CARIES_LIST, ADD_BROKEN_LIST, REMOVE_BROKEN_LIST} from '../mutation-types'

const state = {
  currentBlock: null,
  currentTeeth: 0, // 选中的牙齿
  cariesList: [], // 龋齿
  brokenList: []  // 残缺
}

const mutations = {
  [ADD_BROKEN_LIST] (state, data) {
    state.brokenList.push(data)
  },
  [REMOVE_BROKEN_LIST] (state, data) {
    console.info('即将移除' + data + '号残缺')
    var i = state.brokenList.indexOf(data)
    if (i >= 0) {
      state.brokenList.splice(i, 1)
    } else {
      console.error('查无此残缺，无法移除')
    }
  },
  [ADD_CARIES_LIST] (state, data) {
    state.cariesList.push(data)
  },
  [REMOVE_CARIES_LIST] (state, data) {
    console.info('即将移除' + data + '号龋齿')
    var i = state.cariesList.indexOf(data)
    if (i >= 0) {
      state.cariesList.splice(i, 1)
    } else {
      console.error('查无此龋齿，无法移除')
    }
  },
  [SET_CURRENTTEETH] (state, data) {
    state.currentTeeth = data
  },
  [SET_CURRENTBLOCK] (state, data) {
    state.currentBlock = data
  },
  [CLEAN_TOOTH] (state) {
    state.cariesList = []
    state.brokenList = []
  }
}

export default {
  state,
  mutations
}
