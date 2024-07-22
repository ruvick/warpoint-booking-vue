<script setup>

	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import HeaderActivity from '@/components/HeaderActivity.vue';

	const router = useRouter();

	const selectActivity = (title) => {
	const activity = `${title}`;
	localStorage.setItem('selectedActivity', activity);
	router.push({ name: 'main' });
};

</script> 

<template>
	<q-layout>
			<q-page-container class="my-page-container body--grey">
			 <q-page class="page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm"> 

					<HeaderActivity/>

					<div class="activity-inner column items-start" style="width: 100%;">

						<div class="container-md q-pt-md q-pl-sm q-pr-sm">

							<div class="activity-name col-xs-12 col-sm-6 col-md-4">Игровые зоны</div>
						
									<div class="activity-cards row q-pt-md q-pb-md">

									<div class="activity-card-column row col-xs-12 col-sm-6 col-md-4" @click="selectActivity('VR-Arena')">
										<div class="activity-card column items-start">
											<div class="activity-card__img q-mb-md">
												<img src="../assets/img/activity/01.jpg" loading="lazy" alt="Картинка">
											</div>
											<div class="activity-card__title-block row justify-between items-center q-mb-md">
												<div class="activity-card__title">VR-Arena</div>
												<div class="activity-card__price">от 2 000 ₽</div>
											</div>
											<div class="activity-card__descp">
												Командные VR-сражения, в которых одновременно могут принимать участие до 10-ти человек
											</div>
										</div>
									</div>

									<div class="activity-card-column row col-xs-12 col-sm-6 col-md-4" @click="selectActivity('VR-Room')">
										<div class="activity-card column items-start">
											<div class="activity-card__img q-mb-md">
												<img src="../assets/img/activity/02.jpg" loading="lazy" alt="Картинка">
											</div>
											<div class="activity-card__title-block row justify-between items-center q-mb-md">
												<div class="activity-card__title">VR-Room</div>
												<div class="activity-card__price">от 2 000 ₽</div>
											</div>
											<div class="activity-card__descp">
												Победите плохих парней, спасите мир от зомби или сразитесь с мифическим чудовищем
											</div>
										</div>
									</div>

								</div>

						</div>

					</div>

			 </q-page>
			</q-page-container>
	</q-layout>
	</template>

<style lang="scss">
	.activity-name {
		font-size: 11px;
		font-weight: 600;
		line-height: 12px;
		letter-spacing: 0.06em;
		text-align: left;
		color: #535965;
	}
	.activity-card-column {
		padding: 4px;
	}
	.activity-card {
		flex: 0 1 100%;
		padding: 16px 12px;
		background-color: #25272D;
		border-radius: 16px;
		overflow: hidden;
	}
	.activity-card__img {
		position: relative;
		width: 100%;
		padding-bottom: 58.3%;
		background-color: grey;
		border-radius: 4px;
		overflow: hidden;
		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.activity-card__title-block {
		width: 100%;
		flex: 1 1 auto;
		gap: 20px;
	}
	.activity-card__title {
		font-size: 18px;
		font-weight: 600;
		line-height: 20px;
		text-transform: uppercase;
		color: #C4C8CF;
	}
	.activity-card__price {
		font-size: 13px;
		font-weight: 600;
		line-height: 16px;
		letter-spacing: 0.06em;
		color: #C4C8CF;
	}
	.activity-card__descp {
		font-size: 11px;
		font-weight: 600;
		line-height: 14px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #5E6573;
	}
</style>