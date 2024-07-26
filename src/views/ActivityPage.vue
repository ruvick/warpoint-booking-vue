<script setup>

	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import Header from '@/components/Header.vue';
	import CardActivity from '@/components/Cards/CardActivity.vue';

	const router = useRouter();

	const selectActivity = (title) => {
	const activity = `${title}`;
	sessionStorage.setItem('selectedActivity', activity);
	router.push({ name: 'main' });
	};

</script> 

<template>
	<q-layout>
			<q-page-container class="my-page-container body--grey">
			 <q-page class="page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm"> 

					<Header/> 

					<div class="activity-inner column items-start" style="width: 100%;">

						<div class="container-md q-pt-md q-pl-sm q-pr-sm">

							<div class="activity-name col-xs-12 col-sm-6 col-md-4">Игровые зоны</div>
						
									<div class="activity-cards row q-pt-md q-pb-md">

										<CardActivity
											imageSrc="../src/assets/img/activity/01.jpg"
											imageAlt="Изображение карточки"
											title="VR-Arena"
											price="2 000"
											description="Командные VR-сражения, в которых одновременно могут принимать участие до 10-ти человек"
											@click="selectActivity('VR-Arena')"
										/> 

										<CardActivity
											imageSrc="../src/assets/img/activity/02.jpg"
											imageAlt="Изображение карточки"
											title="VR-Room"
											price="2 000"
											description="Победите плохих парней, спасите мир от зомби или сразитесь с мифическим чудовищем"
											@click="selectActivity('VR-Room')"
										/> 

										<CardActivity
											imageSrc="../src/assets/img/activity/03.jpg"
											imageAlt="Изображение карточки"
											title="День рождения"
											price="2 000"
											description="Командные VR-сражения, в которых одновременно могут принимать участие до 10-ти человек"
											@click="selectActivity('День рождения')"
										/> 

										<CardActivity
											imageSrc="../src/assets/img/activity/04.jpg"
											imageAlt="Изображение карточки"
											title="Корпоратив"
											price="2 000"
											description="Командные VR-сражения, в которых одновременно могут принимать участие до 10-ти человек"
											@click="selectActivity('Корпоратив')"
										/> 

										<CardActivity
											imageSrc="../src/assets/img/activity/05.jpg"
											imageAlt="Изображение карточки"
											title="Школьный выпускной"
											price="2 000"
											description="Командные VR-сражения, в которых одновременно могут принимать участие до 10-ти человек"
											@click="selectActivity('Школьный выпускной')"
										/> 

										<CardActivity
											imageSrc="../src/assets/img/activity/06.jpg"
											imageAlt="Изображение карточки"
											title="Выпускной"
											price="2 000"
											description="Командные VR-сражения, в которых одновременно могут принимать участие до 10-ти человек"
											@click="selectActivity('Выпускной')"
										/> 

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
</style>