<template>

	<q-layout>
		<q-page-container class="my-page-container body--dark">
			<q-page class="page-main">

				<div class="page-main__header header-page-main row items-center">
					<q-btn class="no-hover" primary @click="$router.push('/')" style="font-size: 11px; color: #C4C8CF; border: 1px solid #30343B; border-radius: 24px;">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 4px;">
							<path d="M12.5 5L7.5 10L12.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<span>На сайт</span>
					</q-btn>
				</div>

				<div class="page-main__body body-main q-pt-lg q-pb-lg">
					<div class="body-main__inner row" style="gap: 8px;">

						<div class="card-main col-xs-12 col-sm-6 col-md-3 q-pt-lg q-pl-lg q-pr-lg q-pb-xl" style="">
							<div class="card-main__header row items-center q-mb-xl">
								<div class="card-main__title text-h8 text-dark-10">01. Место</div>
							</div>
						</div>

					</div>
				</div>
			
			</q-page>
		</q-page-container>
	</q-layout>

</template>

<script setup>

</script>

<style>

	.body--dark {
		background-color: #101114;
	}
	.page-main {
		padding: 12px 8px;
	}
	.header-page-main {
		min-height: 52px;
		background-image: url('src/assets/logo.svg');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
	}
	.card-main {
		border-radius: 24px;
		background-color: #1C1E22;
	}
	.text-h8 {
		font-size: 11px;
		font-weight: 600;
		line-height: 12px;
		letter-spacing: 0.06em;
	}
	.text-dark-10 {
		color:#C4C8CF;
	}
</style>