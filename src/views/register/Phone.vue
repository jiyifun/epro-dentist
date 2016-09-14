<template>
  <div class="register">
      <form @submit.prevent="submit">
        <div class="register-form">
          <div class="form-raw">
            <i class="register-form__icon phone"></i>
            <input class="register-form__input" type="number" placeholder="请输入手机号" name="mobile" id="mobile" v-model="phone">
          </div>
          <div class="form-raw">
            <i class="register-form__icon vcode"></i>
            <input class="register-form__input" type="number" placeholder="请输入验证码" name="vcode" id="vcode" v-model="captcha">
            <div class="vcode-wrap">
              <span class="vcode-snip" v-show="wait">{{time}}秒后重新获取</span>
              <input class="vcode-btn" v-else type="button" @click="getCaptcha(phone)" value='获取验证码'>
            </div>
          </div>
        </div>
        <div class="form-btn-wrap">
          <input class="submit-btn" type="submit" value="注册">
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
.register {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $gray-default;

  .register-form {
    margin: 30px;
    background-color: #fff;
    border-radius: 10px;
    // border-top: 2px solid $bordercolor;
    // border-bottom: 2px solid $bordercolor;

    .form-raw {
      position: relative;
      // padding: 0 px;
      height: 108px;

      .register-form__icon {
        display: block;
        position: absolute;
        width: 30px;
        height: 30px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;

        &.phone {
          margin-top: 38px;
          margin-left: 30px;
          background-image: url('../../assets/icon/icon_phone.png');
        }
        &.vcode {
          margin-top: 38px;
          margin-left: 30px;
          background-image: url('../../assets/icon/icon_vcode.png');
        }

      }

      .register-form__input {
        padding-left: 80px;
        line-height: 108px;
        width: 300px;
        font-size: 28px;/*px*/
      }
      .vcode-wrap {
        float: right;
        height: 108px;

        .vcode-snip {
          display: block;
          margin-top: 24px;
          margin-right: 20px;
          line-height: 60px;
          padding: 0 15px;
          background-color: $gray-deep;
          color: #fff;
          font-size: 24px;/*px*/
          border-radius: 10px;
        }

        .vcode-btn {
          margin-top: 24px;
          margin-right: 20px;
          height: 60px;
          padding: 0 15px;
          background-color: $theme-blue;
          color: #fff;
          font-size: 24px;/*px*/
          border-radius: 10px;
        }
      }
    } 
    .form-raw:nth-child(2) {
      border-top: 2px solid $bordercolor;/*no*/
    } 
  }
}
.form-btn-wrap {
  margin-top: 80px;
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