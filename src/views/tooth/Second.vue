<!-- 列表页 -->
<template>
  <div class="tooth">
    <div class="tooth-wrap">
      <div class="tooth-second">
      	<ul>
      		<li v-for="teeth in toothIndexs">

      			<button class="tooth-icon" @click="clickTeeth(teeth)" :class="['tooth-' + teeth, {'black-tooth': isBlack(teeth)}]"  ></button>
      			<!-- <button class="tooth-icon tooth-{{teeth.index}}"  v-else></button>	 -->
      			<span class="tooth-number" :class="'tooth-' + teeth">{{$index + 1}}</span>
      		</li>
      	</ul>
      </div>
    </div>
    <tooth-selector v-if="isShow"></tooth-selector>
    <div class="tooth-footer">
    	<button class="save-and-back" @click="submit">保存并返回</button>
    </div>
  </div>
</template>
<script type="text/babel">
import {SECOND_TITLE, TOOTH_SECOND_INDEXS, TOOTH_BLOCKS_LIST} from '../../constants'
import {brokenList, cariesList} from '../../vuex/getters'
import {updateHeadline, setCurrentTeeth, setCurrentBlock} from '../../vuex/actions'
import ToothSelector from '../../components/ToothSelector'
export default {
  data () {
    return {
      toothIndexs: TOOTH_SECOND_INDEXS,
      isShow: false
    }
  },
  components: {
    ToothSelector
  },
  vuex: {
    getters: {
      brokenList,
      cariesList
    },
    actions: {
      setCurrentBlock,
      updateHeadline,
      setCurrentTeeth
    }
  },
  methods: {
    isBlack (i) {
      var isBroken = this.brokenList.indexOf(i) !== -1
      var isCaries = this.cariesList.indexOf(i) !== -1
      return isBroken || isCaries
    },
    submit () {
      this.$router.go('/tooth')
    },
    clickTeeth (t) {
      this.setCurrentTeeth(t)
      this.isShow = true
    }
  },
  created () {
    this.setCurrentBlock(TOOTH_BLOCKS_LIST[1])
    this.updateHeadline(SECOND_TITLE)
  }
}
</script>
<style lang="scss" scope>
@import '../../styles/css/variable';
@import '../../styles/css/tooth';
.tooth-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 149px;
  // padding: 40px 70px 0 70px;
  background-color: $tooth-bg;
  overflow: scroll;
}
.tooth-footer {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	height: 150px;
 	background-color: $tooth-bg;
}
.tooth-second {
  position: relative;
  height: 100%;
  width: 100%;

  .tooth-icon {
  	position: absolute;
  	height: 30px;
  	width: 30px;
  	background-repeat: no-repeat;
    background-size: cover;
	  transform: rotateY(180deg);
  	@each $key, $value in $tooth-first-icon-map {
      &.tooth-2#{$key} {
        transform: rotateY(180deg);
        width: map-get($value, width);
        height: map-get($value, height);
        top: (map-get($value, top) - 150px); //设计图坐标包括微信头部，需要减去
        left: (700px - map-get($value, width) - map-get($value, left));
      }
    } 
  }//end of tooth-icon
  .tooth-number {
	position: absolute;
	font-size: 36px;
	color: #7a7272;

	@each $key, $value in $tooth-first-number-map {
      &.tooth-2#{$key} {
        top: (map-get($value, top) - 150px); //设计图坐标包括微信头部，需要减去
        left: (690px - 30px - map-get($value, left));
      }
    }
  } //end of tooth-number
}
</style>
