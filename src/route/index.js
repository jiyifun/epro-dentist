// import { setDocTitle } from '../util'
// 业务模块
import Waiting from '../views/Waiting'
import History from '../views/History'
import Mine from '../views/Mine'
import Questionnaire from '../views/Questionnaire'
import Condition from '../views/Condition'
import Phone from '../views/register/Phone'
import WeiXin from '../views/register/WeiXin'
import Choose from '../views/clinic/Choose'
import NewClinic from '../views/clinic/New'
import BindClinc from '../views/clinic/Bind'
// import App from '../App'
// import NotFound from '../views/NotFound'
// 牙模型
import Tooth from '../views/tooth/Tooth'
import First from '../views/tooth/First'
import Second from '../views/tooth/Second'
import Third from '../views/tooth/Third'
import Fourth from '../views/tooth/Fourth'
// 注册模块

export function configRouter (router) {
  router.map({
    '/': {
      component: Waiting
    },
    '/register/phone': {
      component: Phone
    },
    '/register/weixin': {
      component: WeiXin
    },
    '/choose': {
      component: Choose
    },
    '/clinic/new': {
      component: NewClinic
    },
    '/clinic/bind': {
      component: BindClinc
    },
    '/waiting': {
      component: Waiting
    },
    '/history': {
      component: History
    },
    '/mine': {
      component: Mine
    },
    '/questionnaire': {
      component: Questionnaire
    },
    '/condition': {
      component: Condition
    },
    '/tooth': {
      component: Tooth
    },
    '/tooth/first': {
      component: First
    },
    '/tooth/second': {
      component: Second
    },
    '/tooth/third': {
      component: Third
    },
    '/tooth/fourth': {
      component: Fourth
    }
  })
}
