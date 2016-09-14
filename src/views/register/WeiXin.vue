<template>
  <div class="register">
      <form @submit.prevent="submit">
        <div class="register-form">
          <div class="form-raw">
            <i class="register-form__icon wx"></i>
            <input class="register-form__input" type="text" placeholder="请输入微信号" name="wx" id="wx" v-model="phone">
          </div>
        </div>
        <div class="forgot">
          忘记微信号
        </div>
        <div class="wx-form-btn-wrap">
          <input class="submit-btn" type="submit" value="绑定微信号">
        </div>
      </form>
  </div>
</template>
<script>
/*global FormData:true alert:true*/
import {API_GET_CAPTCHA, API_REGISTER_BY_PHONE} from '../../constants/api'
export default {
  data () {
    return {
      timer: null,
      wait: false,
      time: 60,
      phone: null,
      captcha: null
    }
  },
  methods: {
    validatePhone (phone) {
      if (!phone || phone.length !== 11) {
        return false
      }
      return true
    },
    tip () {
      this.time --
      if (this.time < 0) {
        clearInterval(this.timer)
        this.time = 60
        this.wait = false
      }
    },
    startWaiting () {
      this.wait = true
      this.timer = setInterval(this.tip, 1000)
    },
    getCaptcha (phone) {
      if (!this.validatePhone(phone)) {
        // todo
        alert('请输入正确手机号！')
        return
      }
      var vm = this
      var formdata = new FormData()
      formdata.append('mobile', phone)
      this.$http.post(API_GET_CAPTCHA, formdata).then((response) => {
        // success
        var data = JSON.parse(response.body)
        if (data.errcode === 1001) {
          alert(data.errmsg)
          return
        }
        console.info(data)
        vm.startWaiting()
      }, (response) => {
        // failure
        // var data = JSON.parse(response)
        console.error(response)
      })
    },
    submit (event) {
      if (!this.validatePhone(this.phone)) {
        // todo
        alert('请输入正确手机号！')
        return
      }
      if (!this.captcha) {
        alert('请输入验证码！')
        return
      }
      var vm = this
      var formdata = new FormData(event.target)
      this.$http.post(API_REGISTER_BY_PHONE, formdata).then((response) => {
        // success
        var data = JSON.parse(response.body)
        if (data.errcode !== 0) {
          alert(data.errmsg)
          return
        }
        vm.$route.router.go('/health')
      }, (response) => {
        // failure
        var data = JSON.parse(response.body)
        console.info(data)
      })
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/css/variable';
.register-form__icon.wx {
  margin-top: 36px;
  margin-left: 30px;
  background-image: url('../../assets/icon/icon_wx.png');
}
.forgot {
  text-decoration: underline;
  text-align: right;
  padding-right: 40px;
}
.wx-form-btn-wrap {
  margin-top: 30px;
}
.submit-btn {
  display: block;
  margin: 0 auto;
  width: 90%;
  height: 80px;
  letter-spacing: 10px;
  font-size: 36px;
  color: #fff;
  background-color: $theme-blue;
  border-radius: 10px;
}
</style>