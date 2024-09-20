<script setup>
	import { ref, provide } from 'vue';
	import { useRouter } from 'vue-router';
	import Header from '@/components/Header.vue';
	import CardLocation from '@/components/Cards/CardLocation.vue';

	// Инициализация роутера для навигации
	const router = useRouter();

	// Реактивная переменная для хранения выбранного местоположения
	const selectedLocation = ref('');

	// Функция для выбора местоположения
	const selectLocation = ({ title, address }) => {
	// Формирование строки местоположения
	const location = `${title} (${address})`; 
	selectedLocation.value = location; 
	sessionStorage.setItem('selectedLocation', location); // Сохранение в sessionStorage
	
	// Перенаправление на страницу 'main'
	router.push({ name: 'main' });
	};

	// Предоставление выбранного местоположения для дочерних компонентов
	provide('selectedLocation', selectedLocation);
</script>

<template>
	<q-layout>
		<q-page-container class="my-page-container body--grey">
			<q-page class="page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm">

				<Header />

				<div class="location-cards row container-md q-pt-md q-pb-md">
					<CardLocation
						title="ТРЦ «Авиапарк»"
						subtitle="Warpoint Park"
						rating="4.8"
						address="Ходынский бульвар, 4"
						metro="ЦСКА"
						@select="selectLocation"
					/>
					<CardLocation
						title="Академическая"
						subtitle="Warpoint Arena"
						rating="4.6"
						address="ул. Винокурова 4 k1"
						metro="Академическая"
						@select="selectLocation"
					/>
					<CardLocation
						title="Волгоградский пр-т"
						subtitle="Warpoint Arena"
						rating="5.0"
						address="Волгоградский пр-т 32 k8"
						metro="Волгоградский пр-т"
						@select="selectLocation"
					/>
					<CardLocation
						title="ТРК «Mari"
						subtitle="Warpoint Arena"
						rating="5.0"
						address="Волгоградский пр-т 32 k8"
						metro="Волгоградский пр-т"
						@select="selectLocation"
					/>
					<CardLocation
						title="Академическая"
						subtitle="Warpoint Arena"
						rating="4.6"
						address="ул. Винокурова 4 k1"
						metro="Академическая"
						@select="selectLocation"
					/>
					<CardLocation
						title="Волгоградский пр-т"
						subtitle="Warpoint Arena"
						rating="5.0"
						address="Волгоградский пр-т 32 k8"
						metro="Волгоградский пр-т"
						@select="selectLocation"
					/>
				</div>
				
			</q-page>
		</q-page-container>
	</q-layout>
</template>

<style lang="scss">

</style>