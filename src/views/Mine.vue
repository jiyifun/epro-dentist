<template>
  <div class="page-wrap">
    <div class="page">
      <div class="mine-wrap avatar">
        <p class="mine-title">头像</p>
        <img src="../assets/avatar.png" alt="" class="mine-avatar">
      </div>
      <div class="mine-wrap">
        <div class="mine-wrap__row">
          <p class="mine-title">姓名</p>
          <span class="mine-value">李医生</span>
        </div>
        <div class="mine-wrap__row">
          <p class="mine-title">手机</p>
          <span class="mine-value">1321222133</span>
        </div>
        <div class="mine-wrap__row">
          <p class="mine-title">职称</p>
          <span class="mine-value">主治医生</span>
        </div>
      </div>
      <div class="mine-wrap">
        <p class="mine-title">擅长</p>
        <span class="mine-value">牙齿矫正、种植、美白</span>
      </div>   
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script type="text/babel">
  import { MINE_TITLE } from '../constants'
  import { updateHeadline, updateActiveTab } from '../vuex/actions'
  import Tabbar from '../components/Vfooter'
  export default {
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
      this.updateHeadline(MINE_TITLE)
      this.updateActiveTab('mine')
    }
  }
</script>

<style lang="scss">
@import '../styles/css/variable';
.mine-wrap {
  margin-top: 30px;
  padding: 0 30px;
  background-color: #fff;

  &.avatar {
    padding: 30px;
  }

  .mine-wrap__row {
    border-bottom: 1px solid $bordercolor;/*no*/
  }

  .mine-wrap__row:last-child {
    border: none;
  }

  .mine-title {
    display: inline-block;
    padding-left: 30px;
    line-height: 100px;
    font-size: 36px;/*px*/
    color: $txt-bold;
  }
  .mine-avatar {
    float: right;
    padding-right: 30px;
    height: 100px;
    width: 100px;
  }
  .mine-value {
    float: right;
    padding-right: 30px;
    line-height: 100px;
  }
}
</style>
