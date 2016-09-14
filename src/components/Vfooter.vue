<template>
    <div class=" tabbar">
        <a v-link="'/waiting'" @click="clickTab('waiting')" class="tabbar-item" :class="{'active': isActive('waiting')}">
            <i class="tabbar-icon icon-wating" :class="{'active': isActive('waiting')}"></i> 
            <p class=" tabbar-label">待接诊</p>
        </a>
        <a v-link="'/history'" @click="clickTab('history')" class="tabbar-item" :class="{'active': isActive('history')}">
            <i class="tabbar-icon icon-history" :class="{'active': isActive('history')}"></i>
            <p class=" tabbar-label">已接诊</p>
        </a>
        <a v-link="'/mine'" @click="clickTab('mine')" class="tabbar-item" :class="{'active': isActive('mine')}">
            <i class="tabbar-icon icon-mine" :class="{'active': isActive('mine')}"></i>
            <p class=" tabbar-label">个人信息</p>
        </a>
    </div>
</template>
<script>
import {activeTab} from '../vuex/getters'
import {updateActiveTab, updateHeadline} from '../vuex/actions'
export default {

  vuex: {
    getters: {
      activeTab
    },
    actions: {
      updateHeadline,
      updateActiveTab
    }
  },
  methods: {
    clickTab (value) {
      this.updateActiveTab(value)
    },
    isActive (value) {
      return this.activeTab === value
    }
  }
}
</script>
<style lang="scss" scoped>
@Import '../styles/css/variable';
@import '../styles/css/util/border';
.tabbar {
    position: absolute;
    display: flex;
    height: $tabbar-height;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 2px solid $bordercolor;
    text-align: center;

    .tabbar-item {
        display: inline-block;
        width: 50%;
        background-color: $tab-bg;
        // border-right: 1px solid $bordercolor;

        .tabbar-label {
            color: $txt-default;
            font-size: 24px;/*px*/
            // line-height: 100px;
        }
        &.active .tabbar-label {
            color: $theme-blue;
        }
        .tabbar-icon {
            display: block;
            margin: 15px auto;
            height: 37px;
            width: 37px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;

            &.icon-wating {
                background-image: url('../assets/icon/icon_tabbar01.png');
            }
            &.icon-history {
                background-image: url('../assets/icon/icon_tabbar02.png');
            }
            &.icon-mine {
                background-image: url('../assets/icon/icon_tabbar03.png');
            }

            &.active {
                &.icon-wating {
                    background-image: url('../assets/icon/icon_tabbar01_active.png');
                }
                &.icon-history {
                    background-image: url('../assets/icon/icon_tabbar02_active.png');
                }
                &.icon-mine {
                    background-image: url('../assets/icon/icon_tabbar03_active.png');
                }
            }
        }
        
    }
    // .tabbar-item:last-child {
    //     border: none;
    // }
}
</style>
