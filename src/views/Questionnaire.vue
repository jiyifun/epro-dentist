<template>
	<div class="questionnaire">
		<ul class="questions">
			<li class="question-item">
				<h3 class="question-title">一天刷几次牙？</h3>
				<div class="question-answer">
					<input type="radio" id="brush-zero" value="0" v-model="_brushCount">
					<label for="brush-zero" class="question-answer__picker" :class="{'selected': isSelected('brush', '0')}">0次</label>

					<input type="radio" id="brush-once" value="1" v-model="_brushCount">
					<label for="brush-once" class="question-answer__picker" :class="{'selected': isSelected('brush', '1')}">1次</label>

					<input type="radio" id="brush-twice" value="2" v-model="_brushCount">
					<label for="brush-twice" class="question-answer__picker" :class="{'selected': isSelected('brush', '2')}">2次</label>

					<input type="radio" id="brush-triple" value="3" v-model="_brushCount">
					<label for="brush-triple" class="question-answer__picker" :class="{'selected': isSelected('brush', '3')}">3次</label>

					<input type="radio" id="brush-many" value="多" v-model="_brushCount">
					<label for="brush-many" class="question-answer__picker" :class="{'selected': isSelected('brush', '多')}">多次</label>
				</div>
			</li>
			<li class="question-item">
				<h3 class="question-title">刷牙有没有出血？</h3>
				<div class="question-answer">
					<input type="radio" id="bled-true" value="1" v-model="_isBled">
					<label for="bled-true" class="question-answer__picker" :class="{'selected': isSelected('bled', '1')}">有</label>

					<input type="radio" id="bled-false" value="0" v-model="_isBled">
					<label for="bled-false" class="question-answer__picker" :class="{'selected': isSelected('bled', '0')}">没有</label>
				</div>
			</li>
			<li class="question-item">
				<h3 class="question-title">有没有感觉牙齿松动？</h3>
				<div class="question-answer">
					<input type="radio" id="loosen-true" value="1" v-model="_isLoosen">
					<label for="loosen-true" class="question-answer__picker" :class="{'selected': isSelected('loosen', '1')}">有</label>

					<input type="radio" id="loosen-false" value="0" v-model="_isLoosen">
					<label for="loosen-false" class="question-answer__picker" :class="{'selected': isSelected('loosen', '0')}">没有</label>
				</div>
			</li>
			<li class="question-item">
				<h3 class="question-title">最近半年到一年内有无洁牙？</h3>
				<div class="question-answer">
					<input type="radio" id="cleaned-true" value="1" v-model="_isCleaned">
					<label for="cleaned-true" class="question-answer__picker" :class="{'selected': isSelected('cleaned','1')}">有</label>

					<input type="radio" id="cleaned-false" value="0" v-model="_isCleaned">
					<label for="cleaned-false" class="question-answer__picker" :class="{'selected': isSelected('cleaned','0')}">没有</label>
				</div>
			</li>
			<li class="question-item">
				<h3 class="question-title">牙齿有无出现不舒服（酸痛等）情况？</h3>
				<div class="question-answer">
					<input type="radio" id="unwell-true" value="1" v-model="_isUnwell">
					<label for="unwell-true" class="question-answer__picker" :class="{'selected': isSelected('unwell','1')}">有</label>

					<input type="radio" id="unwell-false" value="0" v-model="_isUnwell">
					<label for="unwell-false" class="question-answer__picker" :class="{'selected': isSelected('unwell','0')}">没有</label>
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
import {submitQuestionnaire} from '../vuex/actions'
import {brushCount, isBled, isLoosen, isCleaned, isUnwell} from '../vuex/getters'
export default {
  data () {
    return {
      // brushCount: null,
      // isBled: null,
      // isLoosen: null,
      // isCleaned: null,
      // isUnwell: null
    }
  },
  vuex: {
    getters: {
      brushCount,
      isBled,
      isLoosen,
      isCleaned,
      isUnwell
    },
    actions: {
      submitQuestionnaire
    }
  },
  computed: {
    _brushCount: {
      get () {
        return this.brushCount
      },
      set (val) {
        this.submitQuestionnaire({brushCount: val})
      }
    },
    _isBled: {
      get () {
        return this.isBled
      },
      set (val) {
        this.submitQuestionnaire({isBled: val})
      }
    },
    _isLoosen: {
      get () {
        return this.isLoosen
      },
      set (val) {
        this.submitQuestionnaire({isLoosen: val})
      }
    },
    _isCleaned: {
      get () {
        return this.isCleaned
      },
      set (val) {
        this.submitQuestionnaire({isCleaned: val})
      }
    },
    _isUnwell: {
      get () {
        return this.isUnwell
      },
      set (val) {
        this.submitQuestionnaire({isUnwell: val})
      }
    }
  },
  methods: {
    isSelected (pickerType, value) {
      switch (pickerType) {
        case 'brush': return this.brushCount === value
        case 'bled': return this.isBled === value
        case 'loosen': return this.isLoosen === value
        case 'cleaned': return this.isCleaned === value
        case 'unwell': return this.isUnwell === value
        default: return false
      }
    },
    submit () {
      if (!(this.brushCount && this.isBled && this.isLoosen && this.isCleaned && this.isUnwell)) {
        alert('请将问卷完成！')
        return
      }
      this.$route.router.go('/condition')
    }
  }
}
</script>
<style lang="scss">
@import '../styles/css/variable';
.questionnaire {
	background-color: #fff;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}

.questions {
	padding: 100px 50px;

	.question-item {
		// border-bottom: 2px solid $bordercolor;

		.question-title {
			font-size: 32px;/*px*/
			color: $txt-bold;
		}
		.question-answer {
			padding: 30px 0;

			input[type="radio"] {
				display: none;
			}

			.question-answer__picker {
				display: inline-block;
				margin-right: 10px;
				padding: 3px 20px;
				min-width: 70px;
				background-color: $label-bg;
				text-align: center;
				font-size: 28px;/*px*/
				color: $label-color;
				border-radius: 10px;
				border: 2px solid #fff;
				&.selected {
					background-color: #fff;
					color: $theme-blue;
					border: 2px solid $theme-blue;
				}
			}
		}
	}

}
.questionnaire-footer {
	position: relative;
	padding: 50px;

	.btn {
		width: 100%;
		height: 90px;
		color: #fff;
		font-size: 36px;/*px*/
		border-radius: 10px;
	    background-color: $theme-blue;
	}
}
</style>
