<!-- 列表页 -->
<template>
  <div class="page-wrap">
    <div class="page">
      <ul class="history-list">
        <li v-for="client in histroyList" class="history-item" @click="receive(client.user_id)">
          <div class="history-item__time">
            <em class="time-upper">{{this._getDay(client.create_time)}}</em>
            <p class="time-lower">{{this._getTime(client.create_time)}}</p>
          </div>
          <img :src="client.avatar" alt="" class="history-item__avatar">
          <em class="history-item__name">{{client.name}}</em>
          <p class="history-item__phone">{{client.phone}}</p>
          <span class="history-item__state">已完成</span>
        </li>
      </ul>
      <!-- <div class="load-more">
        <button v-show="hasMore" @click="getHistroy(this.page)">点击查看更多</button>
        <p v-else> 已无更多记录 </p>
      </div> -->
    </div>
    <tabbar></tabbar>
  </div>
</template>
<script type="text/babel">
import { HISTORY_TITLE, DAY_LIST, API_ROOT_PRO } from '../constants'
import {API_GET_HISTORY_LIST} from '../constants/api'
// import {contentList} from '../vuex/getters'
import {updateHeadline, updateActiveTab} from '../vuex/actions'
import Tabbar from '../components/Vfooter'
export default {
  data () {
    return {
      url_root: API_ROOT_PRO,
      page: 0,
      dayList: DAY_LIST,
      histroyList: [],
      hasMore: false
    }
  },
  components: {
    Tabbar
  },
  vuex: {
    actions: {
      updateHeadline,
      updateActiveTab
    }
  },
  created () {
    this.getHistroyList()
    this.updateHeadline(HISTORY_TITLE)
    this.updateActiveTab('history')
  },
  methods: {
    getHistroyList () {
      var vm = this
      this.$http.get(API_GET_HISTORY_LIST).then((resp) => {
        var data = JSON.parse(resp.body)
        if (data.errcode === 0) {
          if (data.result.length > 0) {
            vm.histroyList = data.result
          } else {
            vm.histroyList = null
          }
        } else {
          console.error(data.errmsg)
        }
      }, (resp) => {
        console.error('请求失败')
      })
    },
    receive (id) {
    },
    _getDay (t) {
      var time = new Date(t)
      console.log('time：' + time)
      console.log('result：' + this.dayList[time.getDay()])
      return this.dayList[time.getDay()]
    },
    _getMonth (t) {
      var time = new Date(t)
      return time.getMonth() + 1
    },
    _getDate (t) {
      var time = new Date(t)
      return time.getDate()
    },
    _getTime (t) {
      if (t) {
        return t.slice(11, 16)
      }
    },
    getReplaceString (val, m, s) {
      if (!val) {
        return ''
      }
      var many
      var rpStr = ''
      var str = val.split('')
      var len = str.length
      if (len > 2) {
        if (m) {
          many = m
        } else {
          many = len - 2
        }
      } else {
        many = 1
      }
      for (var i = many - 1; i >= 0; i--) {
        rpStr += '*'
      }
      Array.prototype.splice.call(str, s || 1, many, rpStr)
      console.log(str)
      return str.join('')
    }
  }
}
</script>
<style lang="scss">
@import '../styles/css/variable';
.history-item {
  position: relative;
  height: 100px;
  padding: 15px 35px;
  background-color: #fff;
  border-bottom: 1px solid $bordercolor;

  .history-item__time {
    float: left;
    min-width: 70px;
    height: 70px;
    // padding: 15px 0;
    color: $txt-default;
    text-align: center;
    
    .time-upper {
      line-height: 60px;
      font-size: 32px;/*px*/
      color: $txt-default;
    }
    .time-lower {
      line-height: 30px;
      font-size: 24px;/*px*/
      color: $txt-default;
    }
  }
  .history-item__avatar {
    float: left;
    padding: 0 30px;
    width: 100px;
    height: 100px;
  }
  .history-item__name {
    font-size: 32px;/*px*/
    color: $txt-bold;
  }
  .history-item__phone {
    font-size: 24px;/*px*/
    color: $txt-bold;
  }
  .history-item__state {
    position: absolute;
    right: 35px;
    top: 50%;
    transform: translateY(-50%);

  }
}
.load-more {
  padding: 50px;

  button {
    height: 80px;
    width: 650px;
    border-radius: 10px;
    color: #fff;
    background-color: $theme-red;

  }
  p {
    text-align: center;
  }
}
</style>
