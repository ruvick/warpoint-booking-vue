<script setup>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import HeaderDateTimeGame from '@/components/HeaderDateTimeGame.vue';

	// Инициализация переменных
	const router = useRouter();
	const date = ref('2024/07/01');
	const events = ['2024/07/01', '2024/07/05', '2024/07/06', '2024/07/09', '2024/07/23'];

	const timeSlots = ref([
	{ label: '10:00', quantity: 5, total: 10 },
	{ label: '11:00', quantity: 2, total: 10 },
	{ label: '12:00', quantity: 4, total: 10 },
	{ label: '13:00', quantity: 10, total: 10 },
	{ label: '14:00', quantity: 10, total: 10 },
	]);

	// Функция для выбора даты и времени
	const selectDateTime = () => {
	const selectedDateTime = {
		date: date.value,
		time: timeSlots.value.find(slot => slot.selected)?.label || '',
	};
	console.log('Saving selectedDateTime:', selectedDateTime); // Логирование выбранного времени
	sessionStorage.setItem('selectedDateTimeGame', JSON.stringify(selectedDateTime));
	router.push({ name: 'main' });
	};

	// Функция для выбора временного слота
	const selectTimeSlot = (slot) => {
	timeSlots.value.forEach(s => s.selected = false); // Сброс выделения всех слотов
	slot.selected = true; // Установка выделения для выбранного слота
	};
</script>

<template>
	<q-layout>
		<q-page-container class="my-page-container body--dark">
			<q-page class="page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm">

				<HeaderDateTimeGame @click="selectDateTime" />

				<div class="inner-block column items-start" style="width: 100%;">
					<div class="container-md q-pt-md q-pl-sm q-pr-sm row">
						<div class="col-xs-12 col-sm-6 col-md-4">
							<!-- Календарь -->
							<div class="date-block q-mb-lg">
								<q-date
									v-model="date"
									:events="events"
									:event-color="(date) => date[9] % 2 === 0 ? 'blue' : 'red'"
									:locale="new Intl.DateTimeFormat('ru-RU').resolvedOptions()"
									class="calendar-custom"
								/>
							</div>

							<!-- Время -->
							<div class="time-block row justify-between q-pt-sm q-pb-sm" style="gap: 6px;">
								<q-btn
									v-for="slot in timeSlots"
									:key="slot.label"
									:label="slot.label"
									color=""
									class="time-block__item item-time-block btn-no-effects btn-val-person"
									@click="selectTimeSlot(slot)"
									:class="{ 'selected': slot.selected }"
								>
									<span
									class="item-time-block__completion"
									:style="{ width: `${(slot.quantity / slot.total) * 100}%` }"
									></span>
									<span class="item-time-block__quantity">{{ slot.quantity }}/{{ slot.total }}</span>
								</q-btn>
							</div>

							<div class="date-price row items-center q-pt-md q-pt-md">
								<div class="date-price__item item-date-price row items-center q-mr-xl">
									<span class="item-date-price__icon blue"></span>
									<div class="item-date-price__value">2 000 <span class="item-date-price__rub q-ml-sm">₽</span></div>
								</div>
								<div class="date-price__item item-date-price row items-center">
									<span class="item-date-price__icon red"></span>
									<div class="item-date-price__value">2 800 <span class="item-date-price__rub q-ml-sm">₽</span></div>
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
	.calendar-custom {
		display: inline-flex;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
		border-radius: 4px;
		background: #1c1e22;
		color: #c4c8cf;
		.q-date__header {
			display: none;
		}
		.bg-blue {
			background: #0043ce !important;
		}
		.bg-red {
			background: #da1e28 !important;
		}
		.q-date__event {
			position: absolute;
			bottom: 2px;
			left: 50%;
			height: 5px;
			width: 100%;
			border-radius: 3px;
			background-color: var(--q-secondary);
			transform: translate3d(-50%, 0, 0);
		}
		.q-date__calendar-item button {
			width: 30px;
			height: 30px;
			border-radius: 4px;
		}
		.q-btn.bg-primary {
			background: #282d37 !important;
		}
	}
	.item-date-price {
		gap: 6px;
	}
	.item-date-price__icon {
		width: 16px;
		flex: 0 0 16px;
		height: 16px;
		border-radius: 50%;
		&.blue {
			background-color: #0554f8;
		}
		&.red {
			background-color: #da1e28;
		}
	}
	.item-date-price__value {
		font-size: 13px;
		font-weight: 600;
		line-height: 16px;
		letter-spacing: 0.06em;
		color: #c4c8cf;
	}
	.item-date-price__rub {
		color: #535965;
	}
	.item-time-block {
		position: relative;
		flex: 0 1 48.5%;
		background-color: #0043ce;
		border-radius: 16px;
		min-height: 64px;
		overflow: hidden;
			.q-btn__content {
				justify-content: space-between;
			}
			.item-time-block__quantity {
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				font-size: 11px;
				font-weight: 600;
				line-height: 12px;
				letter-spacing: 0.06em;
				color: #c4c8cf;
				background-color: #101114;
				border-radius: 14px;
				padding: 6px 8px;
				overflow: hidden;
			}
			.item-time-block__completion {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
				background-image: url('../assets/img/streak.svg'); 
			}
	}
</style>