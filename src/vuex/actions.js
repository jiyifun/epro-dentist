import * as types from './mutation-types'
import { API_ROOT } from '../constants'
import Vue from 'vue'
// import VueRouter from 'vue-router'

// 上传图片 todo
export const updateActiveTab = ({dispatch}, value) => {
  // this.$http.post('/e-api/cgi/wx/file_upload', formData)
  dispatch(types.UPDATE_ACTIVE_TAB, value)
}

//  获取标题, 更新标题
export const getHeadline = ({ dispatch }) => {
  dispatch(types.GET_HEADLINE)
}
export const updateHeadline = ({ dispatch }, value) => {
  dispatch(types.UPDATE_HEADLINE, value)
}

// 获取牙齿情况列表
export const getToothList = ({dispatch}, userId) => {
  this.$http.get(API_ROOT + 'api/tooth/' + userId).then(response => {
    dispatch(types.GET_TOOTH_LIST, JSON.parse(response.body))
  }, error => {
    dispatch(types.GET_TOOTH_LIST_FAILURE, error)
  })
}
// 提交牙齿报告
export const submitReport = ({dispatch}, data) => {
  Vue.http.post('e-api/cgi/wy/add_cr', data).then(response => {
    dispatch(types.SUBMIT_TOOTH, JSON.parse(response.body), error => {
      dispatch(types.SUBMIT_TOOTH_FAILURE, error)
    })
  })
}
// 设置当前选中牙齿
export const setCurrentTeeth = ({dispatch}, value) => {
  dispatch(types.SET_CURRENTTEETH, value)
}
export const setCurrentBlock = ({dispatch}, value) => {
  dispatch(types.SET_CURRENTBLOCK, value)
}
// 添加龋齿
export const addCariesList = ({dispatch}, value) => {
  dispatch(types.ADD_CARIES_LIST, value)
}
// 移除龋齿
export const removeCariesList = ({dispatch}, value) => {
  dispatch(types.REMOVE_CARIES_LIST, value)
}
// 添加残缺
export const addBrokenList = ({dispatch}, value) => {
  dispatch(types.ADD_BROKEN_LIST, value)
}
// 移除残缺
export const removeBrokenList = ({dispatch}, value) => {
  dispatch(types.REMOVE_BROKEN_LIST, value)
}
// 提交问卷
export const submitQuestionnaire = ({dispatch}, value) => {
  dispatch(types.SUBMIT_QUESTIONNAIRE, value)
}
// 提交病况
export const submitCondition = ({dispatch}, value) => {
  dispatch(types.SUBMIT_CONDITION, value)
}
// 提交图片
export const submitToothPic = ({dispatch}, value) => {
  dispatch(types.SUBMIT_TOOTH_PIC, value)
}
// 删除图片
export const deleteToothPic = ({dispatch}, value) => {
  dispatch(types.DELETE_TOOTH_PIC, value)
}
// 创建用户
export const createUser = ({dispatch}, value) => {
  dispatch(types.CREATE_USER, value)
}
// 清空
export const cleanAll = ({dispatch}, value) => {
  dispatch(types.CLEAN_USER)
  dispatch(types.CLEAN_TOOTH)
  dispatch(types.CLEAN_QUESTIONNAIRE)
}
