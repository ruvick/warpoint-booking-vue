<template>
	 <div class="dialog" v-if="show" @click="hideDialog">
			<div @click.stop class="dialog__content">
				<slot></slot>
			</div>
	 </div>
</template>

<script>

	export default {
		name: 'my-dialog',
		props: {
			show: {
				type: Boolean,
				default: false,
			}
		},
		methods: {
			hideDialog() {
				this.$emit('update:show', false)
			}
		}
	}

</script>

<style scoped>

	.dialog {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 500;
		display: flex;
		background-color: rgba(0, 0, 0, 0.5);
	}
	.dialog__content {
		max-width: 830px;
		padding: 35px;
		width: 100%;
		background-color: #fff;
		border-radius: 12px;
		margin: auto;
	}

</style>