import {CREATE_USER, CREATE_USER_FAILURE, CLEAN_USER} from '../mutation-types'
const state = {
  user_id: null
}

const mutations = {
  [CREATE_USER] (state, data) {
    console.log(data)
    state.user_id = data
  },
  [CREATE_USER_FAILURE] (state, data) {
    console.error(data)
  },
  [CLEAN_USER] (state) {
    state.user_id = null
  }
}

export default {
  state,
  mutations
}
