// // 存放常量
export const API_ROOT = (process.env.NODE_ENV === 'production')
  ? 'http://smile.e-pro.com.cn'
  : 'http://localhost:8080/e-api'
// 标题
export const WAITING_TITLE = '待接诊'
export const HISTORY_TITLE = '已接诊'
export const MINE_TITLE = '个人信息'

// 牙模型
export const TOOTH_TITLE = '牙齿情况'
export const FIRST_TITLE = '右上区'
export const SECOND_TITLE = '左上区'
export const THIRD_TITLE = '右下区'
export const FOURTH_TITLE = '左下区'

export const DAY_LIST = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

export const TOOTH_FIRST_INDEXS = [11, 12, 13, 14, 15, 16, 17, 18]
export const TOOTH_SECOND_INDEXS = [21, 22, 23, 24, 25, 26, 27, 28]
export const TOOTH_THIRD_INDEXS = [31, 32, 33, 34, 35, 36, 37, 38]
export const TOOTH_FOURTH_INDEXS = [41, 42, 43, 44, 45, 46, 47, 48]
export const TOOTH_BLOCKS_LIST = ['I', 'II', 'III', 'IV']

export const DEFAULT_PIC = '/uploads/images/20160905120213.png'
export const API_ROOT_PRO = 'http://smile.e-pro.com.cn'
export const API_UPLOAD_PIC = '/cgi/file_upload'
export const API_UPLOAD_REPORT = '/cgi/wy/add_cr'
export const API_CREATE_USER = '/cgi/wy/add_user'
export const API_GET_HISTROY = API_ROOT + '/cgi/wy/get_cr_list'
