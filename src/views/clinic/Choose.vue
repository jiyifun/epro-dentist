<template>
	<div class="full-page">
		<div class="choosen">
		 <div class="choosen-btn" v-link="'/clinic/new'">
		 	<i class="choosen-btn__icon new_clinic"></i>
		 	<span>未注册诊所，创建诊所</span>
		 </div>
		 <div class="choosen-btn" v-link="'/clinic/bind'">
		 	<i class="choosen-btn__icon bind_clinic"></i>
		 	<span>已注册诊所，绑定诊所</span>
		 </div>
		</div>
	</div>
</template>
<script>
	export default {
	}
</script>
<style lang="scss">
@import '../../styles/css/variable';
.full-page {
	position: relative;
	height: 100%;
	width: 100%;
}
.choosen {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	.choosen-btn {
		margin-bottom: 30px;
		width: 574px;
		height: 94px;
		background-color: $theme-blue;
		border-radius: 10px;
		text-align: center;

		.choosen-btn__icon {
			position: absolute;
			display: block;
			height: 30px;
			width: 70px;
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;

			&.new_clinic {
				// background-image: ;
			}
			&.bind_clinic {
				// background-image: ;
			}
		}

		span {
			padding-left: 100px;
			color: #fff;
			line-height: 94px;
			font-size: 32px;
		}
	}
}
</style>