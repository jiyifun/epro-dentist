<template>
	<div class="page-wrap">
		<div class="page">
			<ul class="waiting-list">
				<li v-for="client in waitingList" class="waiting-item" @click="receive(client.user_id)">
					<img :src="client.avatar" alt="" class="waiting-item__avatar">
					<em class="waiting-item__name">{{client.name}}</em>
					<span class="waiting-item__time">{{client.create_time.slice(11, 16)}}</span>
				</li>
			</ul>
			<div class="qr-code-btn" @click="this.showQrCode()">
				接诊	
			</div>
		</div>
		<qr-code :show.sync="showQr"></qr-code>
		<tabbar></tabbar>
	</div>
</template>
<script>
import { WAITING_TITLE, API_ROOT_PRO } from '../constants'
import {API_GET_WAIT_LIST} from '../constants/api'
import {updateActiveTab, updateHeadline, createUser, cleanAll} from '../vuex/actions'
import Tabbar from '../components/Vfooter'
import QrCode from '../components/QrCode'
export default {
  data () {
    return {
      url_root: API_ROOT_PRO,
      interval: null,
      showQr: false,
      waitingList: []
    }
  },
  components: {
    Tabbar,
    QrCode
  },
  methods: {
    showQrCode () {
      this.showQr = true
    },
    receive (id) {
      if (!id) {
        console.error('user_id not found!')
        return
      }
      // 清除缓存，设置当前客户，开始接诊
      this.cleanAll()
      this.createUser(id)
      this.$route.router.go('/questionnaire')
    },
    getWaitingList () {
      var vm = this
      this.$http.get(API_GET_WAIT_LIST).then((resp) => {
        var data = JSON.parse(resp.body)
        if (data.errcode === 0 && data.result.length > 0) {
          vm.waitingList = data.result
        } else {
          console.log('暂无数据')
          vm.waitingList = null
        }
      }, (resp) => {
        console.error('请求失败')
      })
    }
  },
  vuex: {
    actions: {
      updateHeadline,
      updateActiveTab,
      createUser,
      cleanAll
    }
  },
  created () {
    this.getWaitingList()
    this.updateHeadline(WAITING_TITLE)
    this.updateActiveTab('waiting')
  }
}
</script>
<style lang="scss">
@import '../styles/css/variable';

.qr-code-btn {
 position: fixed;
 bottom: 200px;
 right: 30px;
 height: 100px;
 width: 100px;
 border-radius: 50%;
 color: #fff;
 font-size: 30px;/*px*/
 background-color: $theme-blue;
 text-align: center;
 line-height: 100px;
}

.waiting-item {
	position: relative;
	padding: 15px 30px;
	height: 100px;
	background-color: #fff;
	border-bottom: 1px solid $bordercolor;

	.waiting-item__avatar {
		float: left;
		height: 100px;
		width: 100px;
	}
	.waiting-item__name {
		padding-left: 30px;
		font-size: 36px;
		line-height: 100px;
		color: $txt-bold;
	}
	.waiting-item__time {
		float: right;
		line-height: 100px;
		font-size: 28px;
		color: $label-color;
	}
}
</style>