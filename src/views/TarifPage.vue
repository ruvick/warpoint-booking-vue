<script setup>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import HeaderTarif from '@/components/HeaderTarif.vue'; 

	// Инициализация роутера для навигации
	const router = useRouter();

	// Функция для выбора тарифа
	const selectTarif = (title) => {
	// Присвоение значения выбранного тарифа
	const tarif = title; 
	
	// Сохранение выбранного тарифа в sessionStorage
	sessionStorage.setItem('selectedTarif', tarif);
	
	// Перенаправление на страницу 'main'
	router.push({ name: 'main' });
	};
</script>

<template>
	<q-layout>
		<q-page-container class="my-page-container body--grey-light">
			<q-page class="page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm"> 

				<HeaderTarif/>

				<div class="tarif-inner column items-start" style="width: 100%;">

					<div class="container-md q-pt-md q-pl-sm q-pr-sm"> 
			
						<div class="tarif-cards row q-pt-md q-pb-md">

							<div class="tarif-card-column row col-xs-12 col-sm-6 col-md-4" @click="selectTarif('Открытая игра')">
								<div class="tarif-card column items-start q-mt-xl q-pt-xl q-pb-xl q-pl-md q-pr-md">
									<div class="tarif-card__header header-tarif-card">
										<div class="header-tarif-card__title q-mb-md">Игра компанией</div>
										<div class="header-tarif-card__subtitle">
											Исследуйте все грани 
											нашей VR-вселенной! Отличный вариант для больших компаний. Погрузитесь 
											в виртуальную реальность по максимуму! 
										</div>
									</div>
									<div class="tarif-card__body body-tarif-card q-pb-md q-pt-md">
										<div class="header-tarif-card__info info-tarif-card row justify-between q-mb-md"> 
											<div class="info-tarif-card__left col-auto">
												<div class="info-tarif-card__name q-mb-xs">Время</div>
												<div class="info-tarif-card__value">3 часа 45 минут</div>
											</div>
											<div class="info-tarif-card__right col-auto">
												<div class="info-tarif-card__name q-mb-xs">Участники</div>
												<div class="info-tarif-card__value">До 20 человек</div>
											</div>
										</div>
										<div class="header-tarif-card__img q-mb-md">
											<img src="../assets/img/tarif/01.jpg" loading="lazy" alt="Картинка">
										</div>
										<div class="body-tarif-card__title">В программу включено:</div>
										<ul class="body-tarif-card__list list-tarif-card">
											<li class="list-tarif-card__item">Игра на арене WARPOINT</li>
											<li class="list-tarif-card__item">Отдельная лаунж зона для проведения торжества</li>
										</ul>
										<ul class="body-tarif-card__list list-tarif-card">
											<li class="list-tarif-card__item">Проведение турнира в честь именинника</li>
											<li class="list-tarif-card__item">Игра на приставке </li>
										</ul>
										<ul class="body-tarif-card__list list-tarif-card">
											<li class="list-tarif-card__item">60 катаний на VR-аттракционах</li>
											<li class="list-tarif-card__item">4 шлема виртуальной реальности</li>
										</ul>
										<ul class="body-tarif-card__list list-tarif-card">
											<li class="list-tarif-card__item">Поздравление именинника</li>
											<li class="list-tarif-card__item">Бесплатный чай и кофе</li>
											<li class="list-tarif-card__item">Пригласительные для гостей </li>
										</ul>
										<ul class="body-tarif-card__list list-tarif-card">
											<li class="list-tarif-card__item">Запуск конфетти</li>
											<li class="list-tarif-card__item">Профессиональный фотограф</li>
										</ul>
									</div>
									<div class="tarif-card__footer footer-tarif-card">
										<q-btn unelevated class="footer-tarif-card__btn text-weight-bold col">
											<span class="block">Выбрать</span>
										</q-btn>
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
	.tarif-card-column {
		padding: 4px;
	}
	.tarif-card {
		position: relative;
		flex: 0 1 100%;
		background-color: #1C1E22;
		border-radius: 32px;
		overflow: hidden;
	}
	.header-tarif-card__title {
		font-size: 20px;
		font-weight: 900;
		line-height: 20px;
		text-transform: uppercase;
		color: #0554F8;
	}
	.header-tarif-card__subtitle {
		font-size: 13px;
		font-weight: 600;
		line-height: 16px;
		letter-spacing: 0.06em;
		color: #C4C8CF;
		text-transform: uppercase;
	}
	.info-tarif-card {
		font-size: 13px;
		font-weight: 600;
		line-height: 16px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}
	.info-tarif-card__name {
		color: #535965;
	}
	.info-tarif-card__value {
		color: #C4C8CF;
	}
	.header-tarif-card__img {
		position: relative;
		padding-bottom: 59%;
		border-radius: 14px;
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
	.body-tarif-card__title {
		font-size: 18px;
		font-weight: 600;
		line-height: 20px;
		letter-spacing: 0.02em;
		color: #535965;
		text-transform: uppercase;
	}
	.list-tarif-card {
		padding: 0 0 0 30px;
	}
	.list-tarif-card__item {
		font-size: 16px;
		font-weight: 600;
		line-height: 20px;
		color: #C4C8CF;
	}
	.footer-tarif-card {
		width: 100%;
	}
	.footer-tarif-card__btn {
		font-size: 13px;
		font-weight: 600;
		line-height: 16px;
		letter-spacing: 0.06em;
		min-height: 40px;
		color: #C4C8CF;
		background-color: #0043CE;
		border-radius: 8px;
		width: 100%;
	}
</style>