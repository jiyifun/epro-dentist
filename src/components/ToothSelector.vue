<template>
    <div class="tooth-selector" @click.self="close">
        <div class="selector-wrap">
            <div class="selector-header">
                {{currentBlock}}区{{_currentTeeth}}号牙
            </div>
            <div class="fl">
                <input type="checkbox" id="caries" v-model="caries">
                <label class="selector-label" :class="{'selected': isCaries()}" for="caries">龋齿</label>
            </div>
            <div class="fl">
                <input type="checkbox" id="broken" v-model="broken">
                <label class="selector-label" :class="{'selected': isBroken()}" for="broken">残缺</label>
            </div>
        </div>
    </div>
</template>
<script>
import {currentTeeth, currentBlock, cariesList, brokenList} from '../vuex/getters'
import {addCariesList, removeCariesList, addBrokenList, removeBrokenList} from '../vuex/actions'
export default {
  vuex: {
    getters: {
      currentBlock,
      currentTeeth,
      cariesList,
      brokenList
    },
    actions: {
      addCariesList,
      removeCariesList,
      addBrokenList,
      removeBrokenList
    }
  },
  methods: {
    close () {
      this.$parent.isShow = false
    },
    isCaries () {
      return this.cariesList.indexOf(this.currentTeeth) !== -1
    },
    isBroken () {
      return this.brokenList.indexOf(this.currentTeeth) !== -1
    }
  },
  watch: {

  },
  computed: {
    _currentTeeth () {
      return String.prototype.split.call(this.currentTeeth.toString(), '')[1]
    },
    caries: {
      get () {
        this.isCaries()
      },
      set (val) {
        if (!this.isCaries()) {
          console.info('添加龋齿')
          console.log(this.currentTeeth)
          this.addCariesList(this.currentTeeth)
        } else {
          console.info('移除龋齿')
          console.log(this.currentTeeth)
          this.removeCariesList(this.currentTeeth)
        }
      }
    },
    broken: {
      get () {
        this.isBroken()
      },
      set (val) {
        if (!this.isBroken()) {
          console.info('添加残缺')
          console.log(this.currentTeeth)
          this.addBrokenList(this.currentTeeth)
        } else {
          console.info('移除残缺')
          console.log(this.currentTeeth)
          this.removeBrokenList(this.currentTeeth)
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tooth-selector {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;
    

    .selector-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); 
        width: 600px;
        height: 200px;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 20px;
        border-radius: 10px;

        .selector-header {
            // margin-bottom: 50px;
            color: #fff;
            font-size: 38px;
            width: 100%;
            border-bottom: 2px solid #646464;
            text-align: center;
            // line-height: 50px;
        }

        .fl {
            float: left;
            width: 50%;
        }
        .selector-label {
            display: inline-block;
            line-height: 80px;
            color: #fff;
            font-size: 34px; /*px*/
            padding-left: 50px;
            width: 250px;
            // padding-left: 50px;
        }
        .selector-label:before {
            position: absolute;
            display: inline-block;
            content:" ";
            color: red;
            width: 40px;
            height: 40px;
            margin-top: 18px; 
            margin-left: -50px;
            background-image: url('../assets/icon_unselect.png');
            background-repeat: no-repeat;
            background-size: cover;
            
        }
        .selected.selector-label:before {
            background-image: url('../assets/icon_selected.png');
        }
    }

}
</style>
