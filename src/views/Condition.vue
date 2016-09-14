<template>
	<div class="questionnaire">
		<ul class="questions">
			<li class="question-item">
				<h3 class="question-title">1.牙齿颜色</h3>
				<div class="question-answer">
					<input type="radio" id="toothColor-zero" value="正常" v-model="_toothColor">
					<label for="toothColor-zero" class="question-answer__picker" :class="{'selected': isSelected('toothColor', '正常')}">正常</label>

					<input type="radio" id="toothColor-once" value="偏黄" v-model="_toothColor">
					<label for="toothColor-once" class="question-answer__picker" :class="{'selected': isSelected('toothColor', '偏黄')}">偏黄</label>

					<input type="radio" id="toothColor-twice" value="牙渍" v-model="_toothColor">
					<label for="toothColor-twice" class="question-answer__picker" :class="{'selected': isSelected('toothColor', '牙渍')}">牙渍</label>

					<input type="radio" id="toothColor-triple" value="较深" v-model="_toothColor">
					<label for="toothColor-triple" class="question-answer__picker" :class="{'selected': isSelected('toothColor', '较深')}">较深</label>
				</div>
			</li>
			<li class="question-item">
				<h3 class="question-title">2.牙齿外形</h3>
				<div class="question-answer">
					<input type="radio" id="isToothOutlook-true" value="0" v-model="_isToothOutlook">
					<label for="isToothOutlook-true" class="question-answer__picker" :class="{'selected': isSelected('isToothOutlook', '0')}">正常</label>

					<input type="radio" id="isToothOutlook-false" value="1" v-model="_isToothOutlook">
					<label for="isToothOutlook-false" class="question-answer__picker" :class="{'selected': isSelected('isToothOutlook', '1')}">异常</label>
				</div>
			</li>
			<li class="question-item">
				<h3 class="question-title">3.缺失牙</h3>
				<div class="question-answer">
					<input type="radio" id="isLost-true" value="1" v-model="_isLost">
					<label for="isLost-true" class="question-answer__picker" :class="{'selected': isSelected('isLost', '1')}">有</label>

					<input type="radio" id="isLost-false" value="0" v-model="_isLost">
					<label for="isLost-false" class="question-answer__picker" :class="{'selected': isSelected('isLost', '0')}">没有</label>
				</div>
			</li>
			<li class="question-item">
				<h3 class="question-title">4.龋齿</h3>
				<div class="question-answer">
					<input type="radio" id="isCaries-true" value="1" v-model="_isCaries">
					<label for="isCaries-true" class="question-answer__picker" :class="{'selected': isSelected('isCaries','1')}">有</label>

					<input type="radio" id="isCaries-false" value="0" v-model="_isCaries">
					<label for="isCaries-false" class="question-answer__picker" :class="{'selected': isSelected('isCaries','0')}">没有</label>
				</div>
			</li>
			<li class="question-item">
				<h3 class="question-title">5.残根/残冠</h3>
				<div class="question-answer">
					<input type="radio" id="isBroken-true" value="1" v-model="_isBroken">
					<label for="isBroken-true" class="question-answer__picker" :class="{'selected': isSelected('isBroken','1')}">有</label>

					<input type="radio" id="isBroken-false" value="0" v-model="_isBroken">
					<label for="isBroken-false" class="question-answer__picker" :class="{'selected': isSelected('isBroken','0')}">没有</label>
				</div>
			</li>
			<li class="question-item">
				<h3 class="question-title">6.智齿</h3>
				<div class="question-answer">
					<input type="radio" id="isWisdomTooth-true" value="0" v-model="_isWisdomTooth">
					<label for="isWisdomTooth-true" class="question-answer__picker" :class="{'selected': isSelected('isWisdomTooth','0')}">正常</label>

					<input type="radio" id="isWisdomTooth-false" value="1" v-model="_isWisdomTooth">
					<label for="isWisdomTooth-false" class="question-answer__picker" :class="{'selected': isSelected('isWisdomTooth','1')}">异常</label>
				</div>
			</li>
			<li class="question-item">
				<h3 class="question-title">7.牙周颜色</h3>
				<div class="question-answer">
					<input type="radio" id="isOralColor-true" value="0" v-model="_isOralColor">
					<label for="isOralColor-true" class="question-answer__picker" :class="{'selected': isSelected('isOralColor','0')}">正常</label>

					<input type="radio" id="isOralColor-false" value="1" v-model="_isOralColor">
					<label for="isOralColor-false" class="question-answer__picker" :class="{'selected': isSelected('isOralColor','1')}">异常</label>
				</div>
			</li>
			<li class="question-item">
				<h3 class="question-title">8.口腔黏膜</h3>
				<div class="question-answer">
					<input type="radio" id="isOralMucosa-true" value="0" v-model="_isOralMucosa">
					<label for="isOralMucosa-true" class="question-answer__picker" :class="{'selected': isSelected('isOralMucosa','0')}">正常</label>

					<input type="radio" id="isOralMucosa-false" value="1" v-model="_isOralMucosa">
					<label for="isOralMucosa-false" class="question-answer__picker" :class="{'selected': isSelected('isOralMucosa','1')}">异常</label>
				</div>
			</li>
			<li class="question-item">
				<h3 class="question-title">9.牙齿数目</h3>
				<div class="question-answer">
					<input type="radio" id="toothCount-normal" value="正常" v-model="_toothCount">
					<label for="toothCount-normal" class="question-answer__picker" :class="{'selected': isSelected('toothCount','正常')}">正常</label>

					<input type="radio" id="toothCount-lost" value="缺失" v-model="_toothCount">
					<label for="toothCount-lost" class="question-answer__picker" :class="{'selected': isSelected('toothCount','缺失')}">缺失</label>

					<input type="radio" id="toothCount-more" value="多生" v-model="_toothCount">
					<label for="toothCount-more" class="question-answer__picker" :class="{'selected': isSelected('toothCount','多生')}">多生</label>

					<input type="radio" id="toothCount-double" value="双排牙" v-model="_toothCount">
					<label for="toothCount-double" class="question-answer__picker" :class="{'selected': isSelected('toothCount','双排牙')}">双排牙</label>
				</div>
			</li>
			<li class="question-item">
				<h3 class="question-title">10.牙齿排列</h3>
				<div class="question-answer">
					<input type="radio" id="isToothArrange-true" value="0" v-model="_isToothArrange">
					<label for="isToothArrange-true" class="question-answer__picker" :class="{'selected': isSelected('isToothArrange','0')}">正常</label>

					<input type="radio" id="isToothArrange-false" value="1" v-model="_isToothArrange">
					<label for="isToothArrange-false" class="question-answer__picker" :class="{'selected': isSelected('isToothArrange','1')}">异常</label>
				</div>
			</li>
		</ul>
		<div class="questionnaire-footer">
			<button class="btn next" @click="submit()">下一步</button>
		</div>
	</div>
</template>
<script>
/* global alert:true */
import {submitCondition} from '../vuex/actions'
import {toothColor,
      isToothOutlook,
      isLost,
      isCaries,
      isBroken,
      isWisdomTooth,
      isOralColor,
      isOralMucosa,
      toothCount,
      isToothArrange} from '../vuex/getters'
export default {
  data () {
    return {
      // brushCount: null,
      // isBled: null,
      // isLoosen: null,
      // isCleaned: null,
      // isUnwell: null
      // "oral_color": "粉红色",
    // "is_tooth_broken": "张三",
    // "is_lost": "0",
    // "tooth_outlook": "正常",
    // "tooth_arrange": "正常",
    // "tooth_color": "淡黄色",
    // "is_oral_mucosa_abnormal": "张三",
    // "user_id": 3,
    // "is_wisdom_tooth_abnormal": "张三",
    // "tooth_count": "32",
    // "has_caries": "1",
    }
  },
  vuex: {
    getters: {
      toothColor,
      isToothOutlook,
      isLost,
      isCaries,
      isBroken,
      isWisdomTooth,
      isOralColor,
      isOralMucosa,
      toothCount,
      isToothArrange
    },
    actions: {
      submitCondition
    }
  },
  computed: {
    _toothColor: {
      get () {
        return this.toothColor
      },
      set (val) {
        this.submitCondition({toothColor: val})
      }
    },
    _isToothOutlook: {
      get () {
        return this.isToothOutlook
      },
      set (val) {
        this.submitCondition({isToothOutlook: val})
      }
    },
    _isLost: {
      get () {
        return this.isLost
      },
      set (val) {
        this.submitCondition({isLost: val})
      }
    },
    _isCaries: {
      get () {
        return this.isCaries
      },
      set (val) {
        this.submitCondition({isCaries: val})
      }
    },
    _isBroken: {
      get () {
        return this.isBroken
      },
      set (val) {
        this.submitCondition({isBroken: val})
      }
    },
    _isWisdomTooth: {
      get () {
        return this.isWisdomTooth
      },
      set (val) {
        this.submitCondition({isWisdomTooth: val})
      }
    },
    _isOralColor: {
      get () {
        return this.isOralColor
      },
      set (val) {
        this.submitCondition({isOralColor: val})
      }
    },
    _isOralMucosa: {
      get () {
        return this.isOralMucosa
      },
      set (val) {
        this.submitCondition({isOralMucosa: val})
      }
    },
    _toothCount: {
      get () {
        return this.toothCount
      },
      set (val) {
        this.submitCondition({toothCount: val})
      }
    },
    _isToothArrange: {
      get () {
        return this.isToothArrange
      },
      set (val) {
        this.submitCondition({isToothArrange: val})
      }
    }
  },
  methods: {
    isSelected (pickerType, value) {
      switch (pickerType) {
        case 'toothColor': return this.toothColor === value
        case 'isToothOutlook': return this.isToothOutlook === value
        case 'isLost': return this.isLost === value
        case 'isCaries': return this.isCaries === value
        case 'isBroken': return this.isBroken === value
        case 'isWisdomTooth': return this.isWisdomTooth === value
        case 'isOralColor': return this.isOralColor === value
        case 'isOralMucosa': return this.isOralMucosa === value
        case 'toothCount': return this.toothCount === value
        case 'isToothArrange': return this.isToothArrange === value
        default: return false
      }
    },
    submit () {
      if (!(this.toothColor && this.isToothOutlook && this.isLost && this.isCaries && this.isBroken && this.isWisdomTooth && this.isOralColor && this.isOralMucosa && this.toothCount && this.isToothArrange)) {
        alert('请将问卷完成！')
        return
      }
      // var data = {
      //   brushCount: this.brushCount,
      //   isBled: this.isBled,
      //   isLoosen: this.isLoosen,
      //   isCleaned: this.isCleaned,
      //   isUnwell: this.isUnwell
      // }
      // this.submitQuestionnaire(data)
      this.$route.router.go('/tooth')
    }
  }
}
</script>
<style lang="scss">
@import '../styles/css/variable';

</style>
