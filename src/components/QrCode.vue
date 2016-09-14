<template>
    <div v-if="show" class="qr-code" >
        <div class="qr-code-wrap" @click.self="this.close()">
        	<div class="qr-code__img" >
        </div>
        	<!-- :style="'background-image: url(' + this.url + ')'" -->
        </div>
    </div>
</template>
<script>
export default {
  props: ['show', 'url'],
  methods: {
    close () {
      this.show = false
    }
  }
}
</script>
<style lang="scss" scoped>
.qr-code {
	position: absolute;
	z-index: 9999;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.4);

	.qr-code-wrap {
		position: relative;
		height: 100%;
		width: 100%;
	}

	.qr-code__img {
		position: absolute;
		top: 50%;
		transform: translateY(-50%); 
		width: 750px;
		height: 750px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		background-image: url('../assets/qr-code.jpeg');
	}
}
</style>
