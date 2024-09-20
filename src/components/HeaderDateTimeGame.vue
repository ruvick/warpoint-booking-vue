<script setup>
	import { ref, onMounted } from 'vue';
	import { useRouter } from 'vue-router';

	// Инициализация роутера
	const router = useRouter();

	// Создание реактивной переменной для хранения выбранного местоположения
	const selectedLocation = ref('');

	// Функция для загрузки выбранного местоположения из sessionStorage
	onMounted(() => {
		selectedLocation.value = sessionStorage.getItem('selectedLocation') || '';
	});

	// Функция для сохранения выбранной даты и времени в sessionStorage
	const selectDateTime = () => {
		const selectedDateTime = {
			date: sessionStorage.getItem('selectedDate'), // Получение даты
			time: sessionStorage.getItem('selectedTime'), // Получение времени
		};
		
		console.log('Saving selectedDateTime:', selectedDateTime); // Логирование выбранной даты и времени
		sessionStorage.setItem('selectedDateTimeGame', JSON.stringify(selectedDateTime)); // Сохранение в sessionStorage
	};

	// Функция для возврата на предыдущую страницу и сохранения выбранной даты и времени
	const goBack = () => {
		selectDateTime(); // Сохранение выбранной даты и времени перед возвратом
		router.back(); // Возврат на предыдущую страницу
	};
</script>

<template>
	<div class="page-main__header header-page-main row justify-center items-center">
		<q-btn
			class="no-hover no-shadow"
			primary
			@click="goBack"
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
		<div class="row justify-center items-center text-grey text-bold text-uppercase" style="flex: 1 1 auto;">
			<div class="header-page-main__inner row items-center">
				<div class="header-page-main__map row items-center justify-center q-mr-sm">
					<svg fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M20.5 10.4167C20.5 15.8445 14.1 21.5 12.5 21.5C10.9 21.5 4.5 15.8445 4.5 10.4167C4.5 6.04441 8.08172 2.5 12.5 2.5C16.9183 2.5 20.5 6.04441 20.5 10.4167Z" stroke="white" stroke-width="1.5"/>
						<circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 15.5 7)" stroke="white" stroke-width="1.5"/>
					</svg>
				</div>
				<div class="header-page-main__location">
					<div class="header-page-main__metro q-mb-xs">{{ selectedLocation }}</div>
				</div>
			</div>
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
	.header-page-main__map {
		overflow: hidden;
		svg {
			width: 24px;
			height: 24px;
			flex: 0 0 24px;
		}
	}
	.header-page-main__location {
		font-size: 18px;
		font-weight: 600;
		line-height: 18px;
		letter-spacing: 0.02em;
	}
	.header-page-main__metro {
		color: #C4C8CF;
	}
	.header-page-main__address {
		color: #535965;
	}
</style>