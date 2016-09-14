export const API_ROOT = (process.env.NODE_ENV === 'production')
  ? 'http://smile.e-pro.com.cn'
  : 'http://localhost:8080/e-api'

export const API_GET_WAIT_LIST = API_ROOT + '/cgi/dentist/wait_list'
export const API_GET_HISTORY_LIST = API_ROOT + '/cgi/dentist/tr_list'
export const API_POST_REPORT = API_ROOT + '/cgi/dentist/tr_add'

export const API_GET_VCODE = API_ROOT + ''
