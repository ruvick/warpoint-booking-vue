<script setup>

</script>

<template> 
	<div class="page-main__header header-page-main header-page-main--bg row items-center"> 
		<q-btn class="no-hover" primary href="https://kursk.warpoint.ru" style="font-size: 11px; color: #C4C8CF; border: 1px solid #30343B; border-radius: 24px;">
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 4px;">
				<path d="M12.5 5L7.5 10L12.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
			<span>На сайт</span>
		</q-btn>
	</div>
</template>

<style lang="scss">
	.header-page-main {
		min-height: 52px;
	}
	.header-page-main--bg {
		background-image: url('src/assets/logo.svg');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
	}
</style>