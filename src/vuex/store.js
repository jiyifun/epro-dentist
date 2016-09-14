import Vue from 'vue'
import Vuex from 'vuex'
import headline from './modules/headline'
import tooth from './modules/tooth'
import questionnaire from './modules/questionnaire'
import condition from './modules/condition'
import toothPic from './modules/toothPic'
import user from './modules/user'
Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    headline,
    tooth,
    questionnaire,
    condition,
    toothPic,
    user
  }
})
