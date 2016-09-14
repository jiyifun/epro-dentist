<template>
  <div id="wrapper">
      <router-view class="main-wrapper" transition="fade" transition-mode="out-in"></router-view>
    <!-- <tabbar></tabbar> -->
  </div>

</template>

<script type="text/babel">
  import store from './vuex/store'

  export default {
    store
  }
</script>

<style lang="scss">
@import 'styles/css/variable';
  body {
    -webkit-font-smoothing:antialiased;
    margin: 0;
    padding: 0;
    font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
    color: #404040;
    line-height: 1.7;
    height:100%;
  }
  #wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f7f7f7;
  }
  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: $tabbar-height;
    overflow-y: scroll;
  }
</style>
