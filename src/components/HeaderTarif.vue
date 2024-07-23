<script setup>

</script>

<template>

	<div class="page-main__header header-page-main row justify-center items-center">
		<q-btn
			class="no-hover no-shadow"
			primary
			@click="$router.back"
			style="font-size: 11px; color: #C4C8CF; border: 1px solid #30343B; border-radius: 24px;"
		>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style="margin-right: 4px;"
			>
				<path
					d="M12.5 5L7.5 10L12.5 15"
					stroke="#C4C8CF"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</q-btn>
		<div
			class="row justify-center items-center text-grey text-bold text-uppercase"
			style="flex: 1 1 auto;"
		>
			Выберите тариф
		</div>
	</div>

</template>

<style lang="scss">
	.header-page-main {
		min-height: 52px;
	}
	.q-radio {
		font-size: 18px;
		font-weight: 600;
		line-height: 20px;
		letter-spacing: 0.02em;
		color: #C4C8CF;
		padding: 14px 20px;
		width: 100%;
		.q-radio__inner {
			display: none;
		}
	}
</style>