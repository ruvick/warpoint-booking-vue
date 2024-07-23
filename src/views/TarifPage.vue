<script setup>

	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import HeaderTarif from '@/components/HeaderTarif.vue'; 

	const router = useRouter();

	const selectTarif = (title) => {
	const tarif = `${title}`;
	localStorage.setItem('selectedTarif', tarif);
	router.push({ name: 'main' });
};

</script> 

<template>
	<q-layout>
			<q-page-container class="my-page-container body--grey">
			 <q-page class="page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm"> 

					<HeaderTarif/>

					<div class="activity-inner column items-start" style="width: 100%;">

						<div class="container-md q-pt-md q-pl-sm q-pr-sm">
						
									<div class="services-cards row q-pt-md q-pb-md">

										<div class="services-card-column row col-xs-12 col-sm-6 col-md-4" @click="selectServices('Открытая игра')">
											<div class="services-card column items-start">
												<div class="services-card__img">
													<img src="../assets/img/services/01.png" loading="lazy" alt="Картинка">
												</div>
												<div class="services-card__header header-services-card">
													<div class="header-services-card__title">Открытая игра</div>
													<div class="header-services-card__subtitle">Оплата за игрока</div>
												</div>
												<div class="services-card__footer footer-services-card row items-end">
													<div class="footer-services-card__descp col">
														<div class="footer-services-card__titme">60 мин</div>
														<div class="footer-services-card__quantity">2–10 Человек</div>
														<div class="footer-services-card__price">от 1 300 ₽</div>
													</div>
													<div class="footer-services-card__buttons col-auto">
														<q-btn unelevated class="footer-services-card__btn text-weight-bold col">
															<span class="block">Подробнее</span>
														</q-btn>
													</div>
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

.services-card-column {
		padding: 4px;
	}
	.services-card {
		position: relative;
		flex: 0 1 100%;
		min-height: 180px;
		padding: 18px 18px 14px 18px;
		background-color: #25272D;
		border-radius: 15px;
		overflow: hidden;
	}
	.services-card__img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			object-position: right;
		}
	}
.services-card__header {
	width: 100%;
	flex: 1 1 auto;
	z-index: 3;
}
.header-services-card {
}
.header-services-card__title {
	font-size: 16.22px;
	font-weight: 600;
	line-height: 18.02px;
	letter-spacing: 0.02em;
	color: #C7CCCC;
	&:not(:last-child){
		margin-bottom: 6px;
	}
}
.header-services-card__subtitle {
	font-size: 10.81px;
	font-weight: 600;
	line-height: 12.62px;
	letter-spacing: 0.1em;
	color: #535965;
}
.services-card__footer {
	z-index: 3;
}
.footer-services-card {
	width: 100%;
	font-size: 10.81px;
	font-weight: 600;
	line-height: 12.62px;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: #535965;
}
.footer-services-card__titme {
	&:not(:last-child){
		margin-bottom: 6px;
	}
}
.footer-services-card__quantity {
	&:not(:last-child){
		margin-bottom: 6px;
	}
}
.footer-services-card__price {
	color: #C4C8CF;
}
.footer-services-card__btn {
	font-size: 10.81px;
	font-weight: 600;
	line-height: 12.62px;
	letter-spacing: 0.1em;
	color: #C4C8CF;
	background-color: #0554F8;
	border-radius: 3.6px;
}
</style>