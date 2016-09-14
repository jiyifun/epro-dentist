import 'lib-flexible'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import './util/ajaxfileupload'
// 引入路由配置
import store from './vuex/store'
import { configRouter } from './route'
// 引入样式
import './styles/css/global.scss'
// import 'weui'
// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true
// 配置路由
const router = new VueRouter({
  history: true,
  hashbang: false,
  root: '/dentist'
})
configRouter(router)
// 移动端点击延迟
FastClick.attach(window.document.body)
App.store = store
router.start(App, '#app')
