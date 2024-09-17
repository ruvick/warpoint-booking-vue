<script setup>

	import { ref, watch, onMounted } from 'vue';
	import { useRouter } from 'vue-router';
	import HeaderMain from '@/components/HeaderMain.vue';

	// Инициализация роутера
	const router = useRouter();

	// Значение флага по умолчанию
	const defaultCountryFlag = '../src/assets/flag-def.svg';

	// Инициализация переменных с сохраненными значениями из sessionStorage или значениями по умолчанию
	const countryFlag = ref(sessionStorage.getItem('selectedCountryFlag') || defaultCountryFlag);
	const country = ref(sessionStorage.getItem('selectedCountry') || '');
	const city = ref(sessionStorage.getItem('selectedCity') || '');
	const location = ref(sessionStorage.getItem('selectedLocation') || '');
	const activity = ref(sessionStorage.getItem('selectedActivity') || '');
	const services = ref(sessionStorage.getItem('selectedServices') || '');
	const dategame = ref(sessionStorage.getItem('selectedDateTimeGame') || '');
	const giftcert = ref(sessionStorage.getItem('selectedGiftCert') || '');
	const promocode = ref(sessionStorage.getItem('selectedPromocode') || '');
	const name = ref(sessionStorage.getItem('selectedName') || '');
	const phone = ref(sessionStorage.getItem('selectedPhone') || null);
	const phoneMask = ref(sessionStorage.getItem('selectedPhoneMask') || '+7(###) - ### - ## - ##');
	const shape = ref(JSON.parse(sessionStorage.getItem('selectedShape')) || ['line']);
	const shapeBall = ref(JSON.parse(sessionStorage.getItem('selectedShapeBall')) || ['line']);
	const toggleCert = ref(JSON.parse(sessionStorage.getItem('toggleCert')) || false);
	const isBooked = ref(false);
	const showApplyButton = ref(false);
	const showSaleBlock = ref(false);
	const dialog = ref(false);
	const seamless = ref(false);
	const participants = ref(1);
	const orderAmount = ref('3100');
	const prepaymentAmount = ref('600');

	// Функция для перехода на другую страницу
	const goToPage = (pageName, placeholder) => {
			if (pageName === 'country') {
					resetCity();
			}
			router.push({ name: pageName, params: { label: placeholder } });
	};

	// Функция для сброса значения города
	const resetCity = () => {
			city.value = '';
			sessionStorage.removeItem('selectedCity');
	};

	// Функция для увеличения количества участников
	const increaseQuantity = () => {
			participants.value = Math.min(participants.value + 1, 10);
	};

	// Функция для уменьшения количества участников
	const decreaseQuantity = () => {
			participants.value = Math.max(participants.value - 1, 1);
	};

	// Функция для применения промокода
	const applyPromocode = () => {
			showApplyButton.value = false;
			showSaleBlock.value = true;
	};

	// Функция для сброса промокода
	const resetPromocode = () => {
			promocode.value = '';
			showApplyButton.value = false;
			showSaleBlock.value = false;
	};

	// Функция для обработки клика по чекбоксу
	const handleCheckboxClick = () => {
			dialog.value = true;
			seamless.value = true;
	};

	// Функция для закрытия всех диалогов
	const closeAllDialogs = () => {
			dialog.value = false;
			seamless.value = false;
	};

	// Функция для обновления сумм заказа и предоплаты
	const updateAmounts = () => {
			const orderValue = prompt('Введите сумму заказа', orderAmount.value);
			const prepaymentValue = prompt('Введите сумму предоплаты', prepaymentAmount.value);

			if (orderValue !== null) {
					orderAmount.value = orderValue;
			}
			if (prepaymentValue !== null) {
					prepaymentAmount.value = prepaymentValue;
			}
	};

	// Функция для сбора и сохранения данных бронирования
	const collectAndSaveData = () => {
			const bookingData = {
					city: city.value,
					location: location.value,
					dategame: dategame.value,
					activity: activity.value,
					services: services.value,
					orderAmount: orderAmount.value,
					prepaymentAmount: prepaymentAmount.value
			};
			sessionStorage.setItem('bookingData', JSON.stringify(bookingData));
			isBooked.value = true;
			router.push('/booking');
	};

	// Функция для проверки заполненности поля
	const isActive = (field) => {
			return field && field.length > 0 ? '_active' : '';
	};

	// Функция для сохранения данных в sessionStorage
	const saveToSessionStorage = (key, value) => {
			sessionStorage.setItem(key, value);
	};

	// Наблюдатели для сохранения значений в sessionStorage при их изменении
	watch(country, (newVal) => saveToSessionStorage('selectedCountry', newVal));
	watch(city, (newVal) => saveToSessionStorage('selectedCity', newVal));
	watch(location, (newVal) => saveToSessionStorage('selectedLocation', newVal));
	watch(activity, (newVal) => saveToSessionStorage('selectedActivity', newVal));
	watch(services, (newVal) => saveToSessionStorage('selectedServices', newVal));
	watch(dategame, (newVal) => saveToSessionStorage('selectedDateTimeGame', newVal));
	watch(name, (newVal) => saveToSessionStorage('selectedName', newVal));
	watch(phone, (newVal) => saveToSessionStorage('selectedPhone', newVal));
	watch(giftcert, (newVal) => saveToSessionStorage('selectedGiftCert', newVal));
	watch(shape, (newVal) => saveToSessionStorage('selectedShape', JSON.stringify(newVal)));
	watch(toggleCert, (newVal) => saveToSessionStorage('toggleCert', JSON.stringify(newVal)));
	watch(countryFlag, (newVal) => saveToSessionStorage('selectedCountryFlag', newVal));
	watch(promocode, (newVal) => {
			saveToSessionStorage('selectedPromocode', newVal);
			showApplyButton.value = !!newVal;
	});

	// Действия при монтировании компонента
	onMounted(() => {
			const savedGiftCert = sessionStorage.getItem('selectedGiftCert');
			if (savedGiftCert) {
					giftcert.value = savedGiftCert;
			}

			const savedBookingData = sessionStorage.getItem('bookingData');
			if (savedBookingData) {
					isBooked.value = true;
			}

			const savedCountryFlag = sessionStorage.getItem('selectedCountryFlag');
			countryFlag.value = savedCountryFlag || defaultCountryFlag;

			const savedDateTimeGame = sessionStorage.getItem('selectedDateTimeGame');
			if (savedDateTimeGame) {
					try {
							const { date, time } = JSON.parse(savedDateTimeGame);
							dategame.value = `${date}, ${time}`;
					} catch (error) {
							console.error('Error parsing savedDateTimeGame:', error);
					}
			}
	});

	// Очистка sessionStorage при закрытии окна
	window.addEventListener('beforeunload', () => {
			sessionStorage.clear();
	});

</script>

<template>

	<q-layout>
		<q-page-container class="my-page-container body--dark">
			<q-page class="page-main q-pt-md q-pb-md q-pl-sm q-pr-sm">

				<HeaderMain/>

				<div class="page-main__body body-main q-pt-lg q-pb-lg">
					<div class="body-main__inner row container-md">

						<div class="card-column row col-xs-12 col-sm-6 col-md-4">
							<div class="card-main q-pt-lg q-pl-lg q-pr-lg q-pb-xl" style="">
								<div class="card-main__header row items-center q-mb-xl">
									<div class="card-main__title text-h8 text-dark-10">01. Место</div>
								</div>
								<div class="card-main__body">

									<div class="input-main q-mb-lg">
										<div class="input-main__label">Страна</div>
										<q-input
											class="input-main__input"
											v-model="country"
											placeholder="Выберите страну"
											@click="goToPage('country', 'Выберите страну')"
											:class="isActive(country)"
										>
											<template v-slot:prepend>
												<div class="input-main__flag">
												<img :src="countryFlag" alt="flag" />
												</div>
											</template>
											<template v-slot:append>
												<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												>
												<path
													d="M7.5 5L12.5 10L7.5 15"
													stroke="#C4C8CF"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												</svg>
											</template>
										</q-input>
									</div>

									<div class="input-main q-mb-lg">
										<div class="input-main__label">Город</div>
										<q-input
											class="input-main__input"
											v-model="city"
											placeholder="Выберите город"
											@click="goToPage('city', 'Выберите город')"
											:class="isActive(city)"
										>
											<template v-slot:append>
												<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												>
												<path
													d="M7.5 5L12.5 10L7.5 15"
													stroke="#C4C8CF"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</template>
									</q-input>
									</div>

									<div class="input-main">
										<div class="input-main__label">Локация</div>
										<q-input 
											class="input-main__input" 
											v-model="location" 
											placeholder="Выберите локацию" 
											 @click="goToPage('location', 'Выберите локацию')"
											 :class="isActive(location)"
											>
											<template v-slot:append>
												<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M7.5 5L12.5 10L7.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
										</template>
										</q-input>
									</div>

								</div>
							</div>
						</div>

						<div class="card-column row col-xs-12 col-sm-6 col-md-4">
							<div class="card-main q-pt-lg q-pl-lg q-pr-lg q-pb-xl">
								<div class="card-main__header row items-center q-mb-xl">
									<div class="card-main__title text-h8 text-dark-10">02. Игра</div>
								</div>
								<div class="card-main__body">

									<div class="input-main q-mb-lg">
										<div class="input-main__label">Игровая зона / мероприятие</div>
										<q-input 
											class="input-main__input" 
											v-model="activity" 
											placeholder="Выберите активность" 
											 @click="goToPage('activity', 'Выберите активность')"
											 :class="isActive(activity)"
											>
											<template v-slot:append>
												<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M7.5 5L12.5 10L7.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
										</template>
										</q-input>
									</div>

									<div class="input-main q-mb-lg">
										<div class="input-main__label">Услуга</div>
										<q-input 
											class="input-main__input" 
											v-model="services" 
											placeholder="Выберите услугу" 
											@click="goToPage('services', 'Выберите услугу')"
											:class="isActive(services)"
										>
											<template v-slot:append>
												<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M7.5 5L12.5 10L7.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
										</template>
										</q-input>
									</div>

								</div>
							</div>
						</div>

						<div class="card-column row col-xs-12 col-sm-6 col-md-4">
							<div class="card-main q-pt-lg q-pl-lg q-pr-lg q-pb-xl">
								<div class="card-main__header row items-center q-mb-xl">
									<div class="card-main__title text-h8 text-dark-10">03. дата и время</div>
								</div>
								<div class="card-main__body">

									<div class="input-main q-mb-lg">
										<div class="input-main__label">Когда и во сколько</div>
										<q-input
											class="input-main__input"
											v-model="dategame"
											placeholder="Выберите дату и время игры"
											@click="goToPage('dategame', 'Выберите дату и время игры')"
											:class="isActive(dategame)"
										>
											<template v-slot:append>
											<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M7.5 5L12.5 10L7.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
											</template>
										</q-input>
									</div>

								</div>
							</div>
						</div>

						<div class="card-column row col-xs-12 col-sm-6 col-md-4">
							<div class="card-main q-pt-lg q-pl-lg q-pr-lg q-pb-xl" style="">
								<div class="card-main__header row items-center q-mb-xl">
									<div class="card-main__title text-h8 text-dark-10">04. Ваши данные</div>
								</div>
								<div class="card-main__body">

									<div class="input-main q-mb-lg">
										<div class="input-main__label">Имя</div>
										<q-input 
											class="input-main__input" 
											v-model="name" 
											placeholder="Имя Фамилия" 
											:class="isActive(name)"
											>
										</q-input>
									</div>

									<div class="input-main q-mb-lg">
										<div class="input-main__label">Телефон</div>
										<q-input
											class="input-main__input"
											v-model="phone"
											:mask="phoneMask"
											fill-mask
											:class="isActive(phone)"
										>
											<template v-slot:prepend>
												<div class="input-main__flag">
													<img :src="countryFlag" alt="flag" />
												</div>
											</template>
										</q-input>
									</div>

									<div class="input-main q-mb-lg">
										<div class="input-main__label">Email</div>
										<q-input 
											class="input-main__input" 
											v-model="email" 
											placeholder="Введите Email" 
											:class="isActive(email)"
											>
										</q-input>
									</div>

									<div class="input-main">
										<div class="input-main__label">Соглашение</div>
										<q-checkbox class="checkbox-main" size="md" v-model="shape" val="md" label="Согласен с условиями соглашения" />
									</div>

								</div>
							</div>
						</div> 

						<div class="card-column row col-xs-12 col-sm-6 col-md-4">
							<div class="card-main q-pt-lg">
								<div class="card-main__header row items-center q-pl-lg q-pr-lg q-mb-xl">
									<div class="card-main__title text-h8 text-dark-10">05. Бронирование</div>
								</div>
								<div class="card-main__body q-pl-lg q-pr-lg q-pb-xl">

									<div class="input-main input-main--dooble q-pt-sm q-pb-lg q-mb-lg"> 
										<div class="input-main__label q-mb-md">Участники</div>
										<div class="input-main__body row items-center justify-between">
											<div class="col-auto">
												<div class="participants row items-center">
													<div class="participants__item participants__item--start"> {{ participants }} </div>
													<div class="participants__item">/</div>
													<div class="participants__item">10</div>
												</div>
											</div>
											<div class="col-auto">
												<div class="quantity row items-center" style="gap: 4px;">
													<q-btn icon="remove" @click="decreaseQuantity" />
													<q-btn icon="add" @click="increaseQuantity" />
												</div>
											</div>
										</div>
									</div>

									<div class="input-main input-main--dooble q-pt-sm q-pb-md q-mb-lg">
										<div class="input-main__label q-mb-sm">Подарочный сертификат</div>
										<div class="input-main__body body-input-cert row items-center justify-between">
											<div class="col-auto" style="width: 100%;">
												<div class="body-input-cert__top input col row items-center" style="min-height: 56px;">
													<q-toggle v-model="toggleCert" />
														<q-input
																v-if="toggleCert"
																class="input-main__input input-main__input--addCert q-mr-md"
																v-model="giftcert"
																placeholder="Добавить сертификат"
																:dense="dense"
																@click="goToPage('giftcert', 'Подарочный сертификат')" 
																style="flex: 1;"
														>
														<template v-slot:append>
															<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.5 5L12.5 10L7.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
															</svg>
														</template>
													</q-input>
												</div>
												<div v-if="toggleCert && giftcert" class="body-input-cert__bottom input-cert-action row items-center justify-between q-mt-md " style="gap: 8px;">
													<div class="input-cert-action__item item-cert-action column items-start justify-between q-pt-md q-pr-md q-pl-md">
														<div class="item-cert-action__name">Баланс</div>
														<div class="item-cert-action__value row items-center">
															<q-input 
																outlined 
																v-model="number" 
																type="number" 
																placeholder="5000"
																disable
																suffix="₽" 
																/>
														</div>
													</div>
													<div class="input-cert-action__item item-cert-action column items-start justify-between q-pt-md q-pr-md q-pl-md">
														<div class="item-cert-action__name">Списать</div>
														<div class="item-cert-action__value row items-center">
															<q-input 
																outlined 
																v-model="number" 
																type="number" 
																placeholder="1000"
																suffix="₽" 
																/>
														</div>
													</div>
												</div>
											</div>
											<!-- <div class="col-auto">2</div> -->
										</div>
									</div>

									<div class="input-main input-main--dooble q-pt-sm q-pb-lg q-mb-lg">
											<div class="input-main__label q-mb-md">Баллы</div>
											<div class="input-main__body row items-center justify-between">
											<div class="col-auto">
													<q-checkbox class="checkbox-main" size="md" v-model="shapeBall" val="md" label="Оплата баллами" @click="handleCheckboxClick" />
											</div>
											<div class="col-auto row items-center">
													<div class="ball-price q-mr-xs">500 ₽</div>
													<div class="ball-icon q-mt-xs">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M12 8H12.01M11 12H12V16H13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#535965" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
													</div>
											</div>
											</div>
									</div>

									<div class="input-main input-main--dooble q-pt-sm q-mb-lg">
										<div class="input-main__label q-mb-sm">Промокод</div>
										<div class="input-main__body body-input-cert row items-center justify-between">
												<div class="col-auto" style="width: 100%;">
													<div class="body-input-cert__top input col row items-center">
														<q-input class="input-main__input input-main__input--addCert q-mr-md" v-model="promocode" placeholder="Введите промокод" style="flex: 1;" />
														<q-btn v-if="showApplyButton" unelevated class="apply-btn text-weight-bold" @click="applyPromocode">
																<span class="block">Применить</span>
														</q-btn>
														<div v-if="showSaleBlock" class="sale-block row items-center">
																<div class="sale-block__item">-10%</div>
																<q-btn unelevated class="sale-block__reset-btn reset-sale-btn" @click="resetPromocode">
															<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
																<mask id="path-1-inside-1_4_2515" fill="white">
																	<path d="M15.2502 4.75834C15.1731 4.68108 15.0815 4.61979 14.9807 4.57798C14.8799 4.53616 14.7718 4.51463 14.6627 4.51463C14.5535 4.51463 14.4455 4.53616 14.3447 4.57798C14.2439 4.61979 14.1523 4.68108 14.0752 4.75834L10.0002 8.825L5.92519 4.75C5.84803 4.67285 5.75644 4.61165 5.65564 4.5699C5.55484 4.52814 5.4468 4.50665 5.33769 4.50665C5.22858 4.50665 5.12054 4.52814 5.01973 4.5699C4.91893 4.61165 4.82734 4.67285 4.75019 4.75C4.67303 4.82715 4.61183 4.91875 4.57008 5.01955C4.52833 5.12035 4.50684 5.22839 4.50684 5.3375C4.50684 5.44661 4.52833 5.55465 4.57008 5.65546C4.61183 5.75626 4.67303 5.84785 4.75019 5.925L8.82519 10L4.75019 14.075C4.67303 14.1522 4.61183 14.2437 4.57008 14.3446C4.52833 14.4454 4.50684 14.5534 4.50684 14.6625C4.50684 14.7716 4.52833 14.8797 4.57008 14.9805C4.61183 15.0813 4.67303 15.1729 4.75019 15.25C4.82734 15.3272 4.91893 15.3884 5.01973 15.4301C5.12054 15.4719 5.22858 15.4934 5.33769 15.4934C5.4468 15.4934 5.55484 15.4719 5.65564 15.4301C5.75644 15.3884 5.84803 15.3272 5.92519 15.25L10.0002 11.175L14.0752 15.25C14.1523 15.3272 14.2439 15.3884 14.3447 15.4301C14.4455 15.4719 14.5536 15.4934 14.6627 15.4934C14.7718 15.4934 14.8798 15.4719 14.9806 15.4301C15.0814 15.3884 15.173 15.3272 15.2502 15.25C15.3273 15.1729 15.3885 15.0813 15.4303 14.9805C15.472 14.8797 15.4935 14.7716 15.4935 14.6625C15.4935 14.5534 15.472 14.4454 15.4303 14.3446C15.3885 14.2437 15.3273 14.1522 15.2502 14.075L11.1752 10L15.2502 5.925C15.5669 5.60834 15.5669 5.075 15.2502 4.75834Z"/>
																</mask>
																<path d="M15.2502 4.75834C15.1731 4.68108 15.0815 4.61979 14.9807 4.57798C14.8799 4.53616 14.7718 4.51463 14.6627 4.51463C14.5535 4.51463 14.4455 4.53616 14.3447 4.57798C14.2439 4.61979 14.1523 4.68108 14.0752 4.75834L10.0002 8.825L5.92519 4.75C5.84803 4.67285 5.75644 4.61165 5.65564 4.5699C5.55484 4.52814 5.4468 4.50665 5.33769 4.50665C5.22858 4.50665 5.12054 4.52814 5.01973 4.5699C4.91893 4.61165 4.82734 4.67285 4.75019 4.75C4.67303 4.82715 4.61183 4.91875 4.57008 5.01955C4.52833 5.12035 4.50684 5.22839 4.50684 5.3375C4.50684 5.44661 4.52833 5.55465 4.57008 5.65546C4.61183 5.75626 4.67303 5.84785 4.75019 5.925L8.82519 10L4.75019 14.075C4.67303 14.1522 4.61183 14.2437 4.57008 14.3446C4.52833 14.4454 4.50684 14.5534 4.50684 14.6625C4.50684 14.7716 4.52833 14.8797 4.57008 14.9805C4.61183 15.0813 4.67303 15.1729 4.75019 15.25C4.82734 15.3272 4.91893 15.3884 5.01973 15.4301C5.12054 15.4719 5.22858 15.4934 5.33769 15.4934C5.4468 15.4934 5.55484 15.4719 5.65564 15.4301C5.75644 15.3884 5.84803 15.3272 5.92519 15.25L10.0002 11.175L14.0752 15.25C14.1523 15.3272 14.2439 15.3884 14.3447 15.4301C14.4455 15.4719 14.5536 15.4934 14.6627 15.4934C14.7718 15.4934 14.8798 15.4719 14.9806 15.4301C15.0814 15.3884 15.173 15.3272 15.2502 15.25C15.3273 15.1729 15.3885 15.0813 15.4303 14.9805C15.472 14.8797 15.4935 14.7716 15.4935 14.6625C15.4935 14.5534 15.472 14.4454 15.4303 14.3446C15.3885 14.2437 15.3273 14.1522 15.2502 14.075L11.1752 10L15.2502 5.925C15.5669 5.60834 15.5669 5.075 15.2502 4.75834Z" fill="#9E9E9E"/>
																<path d="M15.2502 4.75834L13.8345 6.1711L13.836 6.17255L15.2502 4.75834ZM14.6627 4.51463V2.51463V4.51463ZM14.0752 4.75834L15.488 6.174L15.4908 6.1711L14.0752 4.75834ZM10.0002 8.825L8.58597 10.2392L9.99874 11.652L11.413 10.2407L10.0002 8.825ZM5.92519 4.75L7.3394 3.33579L5.92519 4.75ZM5.33769 4.50665L5.33769 6.50665L5.33769 4.50665ZM4.50684 5.3375H2.50684H4.50684ZM4.75019 5.925L3.33597 7.33922L4.75019 5.925ZM8.82519 10L10.2394 11.4142L11.6536 10L10.2394 8.58579L8.82519 10ZM4.75019 14.075L3.33597 12.6608H3.33597L4.75019 14.075ZM4.50684 14.6625H6.50684H4.50684ZM5.92519 15.25L4.51097 13.8358H4.51097L5.92519 15.25ZM10.0002 11.175L11.4144 9.76079L10.0002 8.34658L8.58597 9.76079L10.0002 11.175ZM14.0752 15.25L12.661 16.6642L14.0752 15.25ZM15.2502 14.075L16.6644 12.6608L15.2502 14.075ZM11.1752 10L9.76097 8.58579L8.34676 10L9.76097 11.4142L11.1752 10ZM15.2502 5.925L13.836 4.51079V4.51079L15.2502 5.925ZM16.6658 3.34557C16.403 3.08217 16.0907 2.87319 15.747 2.73061L14.2144 6.42534C14.0723 6.36639 13.9432 6.28 13.8345 6.1711L16.6658 3.34557ZM15.747 2.73061C15.4033 2.58803 15.0348 2.51463 14.6627 2.51463V6.51463C14.5088 6.51463 14.3565 6.48429 14.2144 6.42534L15.747 2.73061ZM14.6627 2.51463C14.2906 2.51463 13.9221 2.58803 13.5784 2.73061L15.111 6.42534C14.9689 6.48429 14.8165 6.51463 14.6627 6.51463V2.51463ZM13.5784 2.73061C13.2346 2.87319 12.9224 3.08217 12.6595 3.34557L15.4908 6.1711C15.3822 6.28 15.2531 6.36639 15.111 6.42534L13.5784 2.73061ZM12.6624 3.34268L8.58742 7.40934L11.413 10.2407L15.488 6.174L12.6624 3.34268ZM11.4144 7.41079L7.3394 3.33579L4.51097 6.16422L8.58597 10.2392L11.4144 7.41079ZM7.3394 3.33579C7.07653 3.07292 6.76446 2.8644 6.42101 2.72214L4.89027 6.41766C4.74842 6.3589 4.61954 6.27278 4.51097 6.16422L7.3394 3.33579ZM6.42101 2.72214C6.07755 2.57987 5.70944 2.50665 5.33769 2.50665L5.33769 6.50665C5.18415 6.50665 5.03212 6.47641 4.89027 6.41766L6.42101 2.72214ZM5.33769 2.50665C4.96594 2.50665 4.59782 2.57987 4.25437 2.72214L5.7851 6.41766C5.64325 6.47641 5.49122 6.50665 5.33769 6.50665L5.33769 2.50665ZM4.25437 2.72214C3.91091 2.8644 3.59884 3.07292 3.33597 3.33579L6.1644 6.16422C6.05583 6.27278 5.92695 6.3589 5.7851 6.41766L4.25437 2.72214ZM3.33597 3.33579C3.0731 3.59866 2.86459 3.91073 2.72232 4.25418L6.41784 5.78492C6.35908 5.92677 6.27297 6.05565 6.1644 6.16422L3.33597 3.33579ZM2.72232 4.25418C2.58006 4.59764 2.50684 4.96575 2.50684 5.3375L6.50684 5.3375C6.50684 5.49103 6.4766 5.64307 6.41784 5.78492L2.72232 4.25418ZM2.50684 5.3375C2.50684 5.70925 2.58006 6.07737 2.72232 6.42082L6.41784 4.89009C6.4766 5.03194 6.50684 5.18397 6.50684 5.3375L2.50684 5.3375ZM2.72232 6.42082C2.86459 6.76428 3.0731 7.07635 3.33597 7.33922L6.1644 4.51079C6.27297 4.61936 6.35908 4.74824 6.41784 4.89009L2.72232 6.42082ZM3.33597 7.33922L7.41097 11.4142L10.2394 8.58579L6.1644 4.51079L3.33597 7.33922ZM7.41097 8.58579L3.33597 12.6608L6.1644 15.4892L10.2394 11.4142L7.41097 8.58579ZM3.33597 12.6608C3.0731 12.9237 2.86458 13.2357 2.72232 13.5792L6.41784 15.1099C6.35909 15.2518 6.27297 15.3806 6.1644 15.4892L3.33597 12.6608ZM2.72232 13.5792C2.58006 13.9226 2.50684 14.2908 2.50684 14.6625H6.50684C6.50684 14.816 6.4766 14.9681 6.41784 15.1099L2.72232 13.5792ZM2.50684 14.6625C2.50684 15.0343 2.58006 15.4024 2.72232 15.7458L6.41784 14.2151C6.4766 14.3569 6.50684 14.509 6.50684 14.6625H2.50684ZM2.72232 15.7458C2.86459 16.0893 3.07311 16.4014 3.33597 16.6642L6.1644 13.8358C6.27296 13.9444 6.35908 14.0732 6.41784 14.2151L2.72232 15.7458ZM3.33597 16.6642C3.59884 16.9271 3.91091 17.1356 4.25437 17.2779L5.7851 13.5823C5.92695 13.6411 6.05584 13.7272 6.1644 13.8358L3.33597 16.6642ZM4.25437 17.2779C4.59782 17.4201 4.96594 17.4934 5.33769 17.4934V13.4934C5.49122 13.4934 5.64325 13.5236 5.7851 13.5823L4.25437 17.2779ZM5.33769 17.4934C5.70944 17.4934 6.07755 17.4201 6.42101 17.2779L4.89027 13.5823C5.03212 13.5236 5.18415 13.4934 5.33769 13.4934V17.4934ZM6.42101 17.2779C6.76446 17.1356 7.07653 16.9271 7.3394 16.6642L4.51097 13.8358C4.61954 13.7272 4.74842 13.6411 4.89027 13.5823L6.42101 17.2779ZM7.3394 16.6642L11.4144 12.5892L8.58597 9.76079L4.51097 13.8358L7.3394 16.6642ZM8.58597 12.5892L12.661 16.6642L15.4894 13.8358L11.4144 9.76079L8.58597 12.5892ZM12.661 16.6642C12.9238 16.9271 13.2359 17.1356 13.5794 17.2779L15.1101 13.5823C15.2519 13.6411 15.3808 13.7272 15.4894 13.8358L12.661 16.6642ZM13.5794 17.2779C13.9228 17.4201 14.2909 17.4934 14.6627 17.4934V13.4934C14.8162 13.4934 14.9683 13.5236 15.1101 13.5823L13.5794 17.2779ZM14.6627 17.4934C15.0344 17.4934 15.4025 17.4201 15.746 17.2779L14.2153 13.5823C14.3571 13.5236 14.5092 13.4934 14.6627 13.4934V17.4934ZM15.746 17.2779C16.0895 17.1356 16.4015 16.9271 16.6644 16.6642L13.836 13.8358C13.9445 13.7272 14.0734 13.6411 14.2153 13.5823L15.746 17.2779ZM16.6644 16.6642C16.9273 16.4014 17.1358 16.0893 17.2781 15.7458L13.5825 14.2151C13.6413 14.0732 13.7274 13.9443 13.836 13.8358L16.6644 16.6642ZM17.2781 15.7458C17.4203 15.4024 17.4935 15.0343 17.4935 14.6625H13.4935C13.4935 14.509 13.5238 14.3569 13.5825 14.2151L17.2781 15.7458ZM17.4935 14.6625C17.4935 14.2908 17.4203 13.9226 17.2781 13.5792L13.5825 15.1099C13.5238 14.9681 13.4935 14.816 13.4935 14.6625H17.4935ZM17.2781 13.5792C17.1358 13.2357 16.9273 12.9237 16.6644 12.6608L13.836 15.4892C13.7274 15.3806 13.6413 15.2518 13.5825 15.1099L17.2781 13.5792ZM16.6644 12.6608L12.5894 8.58579L9.76097 11.4142L13.836 15.4892L16.6644 12.6608ZM12.5894 11.4142L16.6644 7.33922L13.836 4.51079L9.76097 8.58579L12.5894 11.4142ZM16.6644 7.33922C17.7621 6.2415 17.7621 4.44184 16.6644 3.34412L13.836 6.17255C13.3716 5.70817 13.3716 4.97517 13.836 4.51079L16.6644 7.33922Z" fill="#535965" mask="url(#path-1-inside-1_4_2515)"/>
															</svg>
														</q-btn>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div class="input-main input-main--dooble q-pt-sm q-pb-lg q-mb-lg">
										<div class="input-main__label q-mb-md">Сумма заказа</div>
										<div class="input-main__body row items-center" style="gap: 5px;">
											<div class="price-main-old">3 000</div>
											<div class="price-main-arrow">→</div>
											<div id="price-order" class="input-main__price price-main"> {{ orderAmount }} ₽</div>
										</div>
									</div>

									<div class="input-main input-main--dooble q-pt-sm q-pb-lg">
										<div class="input-main__label q-mb-md">Сумма предоплаты</div>
										<div class="input-main__body row">
											<div id="prepayment" class="input-main__price price-main"> {{ prepaymentAmount }} ₽</div>
										</div>
									</div>

								</div>
								<div class="card-main__buttons row q-pb-sm">
									<q-btn
										v-if="!isBooked"
										unelevated
										class="card-main__btn text-weight-bold col"
										@click="collectAndSaveData"
									>
										<span class="block">Забронировать</span>
									</q-btn>
									<q-btn
										v-else
										unelevated
										class="card-main__btn text-weight-bold col"
									>
										<span class="block">Перейти к предоплате</span>
									</q-btn>
								</div>	
							</div>
						</div> 

					</div> 
				</div>

				<!-- Dialog Top -->
				<q-dialog v-model="dialog" :position="'top'" transition-show="slide-down" transition-hide="slide-up" persistent>
						<q-card class="auth-reg" style="max-width: 390px; width: 100%">
						<q-card-section class="row items-center justify-between">
								<q-btn unelevated class="account-btn text-weight-bold">
								<span class="block">Еще нет аккаунта?</span>
								</q-btn>
								<q-btn unelevated class="reg-btn text-weight-bold">
								<span class="block">Зарегистрироваться</span>
								</q-btn>
						</q-card-section>
						</q-card>
				</q-dialog>

				<!-- Dialog Bottom -->
				<q-dialog v-model="seamless" seamless position="bottom" transition-show="slide-up" transition-hide="slide-down" persistent>
						<q-card class="auth-dialog" style="max-width: 390px; width: 100%;">
						<div class="autho-card-column col-xs-12 col-sm-6 col-md-4">
								<div class="auth-card column items-start q-pt-sm q-pb-lg q-pl-lg q-pr-lg">
								<q-card-section class="auth-card__icon">
										<div class="auth-card__icon-tap"></div>
								</q-card-section>

								<div class="auth-card__header header-auth-card row justify-center q-pt-xl q-pb-xl">
										<div class="header-auth-card__title col-8">
										Войдите в свой аккаунт,
										чтобы тратить баллы
										</div>
								</div>
								<div class="auth-card__body body-auth-card">
										<div class="input-main q-mb-lg">
										<div class="input-main__label">Ваш телефон</div>
										<q-input class="input-main__input" v-model="phone" :dense="dense"
												mask="+7(###) - ### - ## - ##"
												fill-mask
										>
												<template v-slot:prepend>
												<div class="input-main__flag">
														<svg fill="none" xmlns="http://www.w3.org/2000/svg">
														<g clip-path="url(#clip0_56_2611)">
																<rect width="25" height="20" rx="4" fill="white"/>
																<rect y="8" width="32" height="8" fill="#0077FF"/>
																<rect y="16" width="32" height="8" fill="#FB370B"/>
														</g>
														<defs>
																<clipPath id="clip0_56_2611">
																<rect width="25" height="20" rx="4" fill="white"/>
																</clipPath>
														</defs>
														</svg>
												</div>
												</template>
										</q-input>
										</div>

										<div class="input-main q-mb-lg">
										<div class="input-main__label">ПИН</div>
										<q-input class="input-main__input" v-model.number="pin" type="number" placeholder="Код из смс" :dense="dense" />
										</div>

										<div class="input-main q-mb-lg">
										<q-btn unelevated class="btn-still" style="width: 100%;">
												<span class="block">Отправить еще (48)</span>
										</q-btn>
										</div>
								</div>
								<div class="auth-card__footer footer-auth-card" v-close-popup>
										<q-btn unelevated class="btn text-weight-bold" style="width: 100%;" @click="closeAllDialogs">
										<span class="block">Подтвердить</span>
										</q-btn>
								</div>
								</div>
						</div>
						</q-card>
				</q-dialog>

				<!-- Затемнение -->
				<div v-show="dialog || seamless" class="q-dialog__backdrop" @click="closeAllDialogs"></div>

			</q-page>
		</q-page-container>
	</q-layout>

</template>

<style lang="scss">
	.card-column {
		padding: 4px;
	}
	.card-main {
		flex: 0 1 100%;
		border-radius: 24px;
		background-color: #1C1E22;
		overflow: hidden;
	}
	.card-main__title {
		text-transform: uppercase;
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
	// .input-main .q-field__label {
	// 	font-size: 11px;
	// 	font-weight: 600;
	// 	line-height: 12px;
	// 	letter-spacing: 0.06em;
  //   max-width: 133%;
	// 	color: #535965;
	// 	text-transform: uppercase;
  //   transform: translateY(-110%) scale(1);
  //   transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.396s cubic-bezier(0.4, 0, 0.2, 1);
	// }
	.input-main__label {
		font-size: 11px;
		font-weight: 600;
		line-height: 12px;
		letter-spacing: 0.06em;
    	max-width: 133%;
		color: #535965;
		text-transform: uppercase;
	}
	.input-main input {
		font-size: 18px;
		font-weight: 600;
		line-height: 18px;
		letter-spacing: 0.02em;
		color: #535965;
	} 
	.input-main .q-field__control:before {
    border-bottom: 1px solid #25272D;
		// bottom: -5px;
	}
	.input-main .q-field__control:hover:before {
    border-bottom: 1px solid #1976d2;
	}
	// .input-main__input._active .q-field__control:before {
  //   border-bottom: 1px solid #1976d2;
	// }
	.input-main__input._active input {
		color: #C4C8CF;
	}
	.input-main .q-field__append  {
			align-items: flex-end;
			padding-bottom: 16px;
		}
		.checkbox-main {
			overflow: hidden;
			margin-left: -10px;
			.q-checkbox__bg {
				border: 2px solid #C4C8CF;
			}
			.q-checkbox__inner--truthy .q-checkbox__bg, .q-checkbox__inner--indet .q-checkbox__bg {
					background: inherit;
			}
			.q-checkbox__label {
				font-size: 18px;
				font-weight: 600;
				line-height: 18px;
				letter-spacing: 0.02em;
				color: #535965;
				white-space: nowrap;
			}
		}
		.input-main__flag {
			position: relative;
			width: 25px;
			height: 20px;
			overflow: hidden;
				img {
					width: 100%;
    			height: 100%;
    			object-fit: cover;
    			position: absolute;
    			top: 0;
    			left: 0;
				}
		}
		.input-main--dooble {
			border-bottom: 1px solid #25272D;
		}
		.price-main {
			font-size: 18px;
			font-weight: 600;
			line-height: 18px;
			letter-spacing: 0.02em;
			color: #C4C8CF;
		}
		.card-main__btn {
			font-size: 13px;
			font-weight: 600;
			line-height: 16px;
			letter-spacing: 0.06em;
			min-height: 64px;
			color: #fff;
			background-color: #0043CE;
			border-radius: 24px;
		}
		.participants {
			font-size: 18px;
			font-weight: 600;
			line-height: 18px;
			letter-spacing: 0.02em;
			gap: 3px;
		}
		.participants__item {
			color: #535965;
		}
		.participants__item--start {
			color: #C4C8CF;
		} 
		.ball-price {
			font-size: 18px;
			font-weight: 600;
			line-height: 18px;
			letter-spacing: 0.02em;
			color: #C4C8CF;
		}
		.price-main-old {
			font-size: 18px;
			font-weight: 600;
			line-height: 18px;
			letter-spacing: 0.02em;
			color: #535965;
			text-decoration: line-through;
		}
		.price-main-arrow {
			font-size: 16px;
			font-weight: 700;
			color: #535965;
		}
		.input-main__input--addCert .q-field__control:before {
			display: none;
		}
		.quantity {
			.q-btn {
				padding: 12px;
				background: #25272D;
				border-radius: 8px;
			}
			.q-icon {
				font-size: 1rem;
				color: #C7CCCC;
			}
		}
		.input-cert-action__item {
		}
		.item-cert-action {
			flex: 0 1 48%;
			min-height: 74px;
			border: 1px solid #272B2B;
			border-radius: 12px;
		}
		.item-cert-action__name {
			font-size: 11px;
			font-weight: 600;
			line-height: 12px;
			letter-spacing: 0.06em;
			color: #535965;
		}
		.item-cert-action__value {
			font-size: 18px;
			font-weight: 600;
			line-height: 18px;
			letter-spacing: 0.02em;
			color: #535965;
			.q-field__native {
				field-sizing: content;
				color: #C4C8CF;
			}
			.q-field--disabled .q-placeholder {
				opacity: 1 !important;
				color: #535965;
				font-size: 18px;
				font-weight: 600;
				line-height: 18px;
				letter-spacing: 0.02em;
			}
			.q-field__control {
				padding: 0;
			}
			.q-field__control:before {
				border: none;
			}
			.q-field__suffix {
				padding: 3px;
				color: #C4C8CF;
				font-size: 18px;
				font-weight: 600;
				letter-spacing: 0.02em;
			}
			.q-field--disabled .q-field__control > div {
				opacity: 1 !important;
			}
			.q-field--disabled .q-field__suffix {
				color: #535965;
			}
		}
		.apply-btn {
			display: inline-flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			font-size: 11px;
			font-weight: 600;
			line-height: 12px;
			letter-spacing: 0.06em;
			color: #C4C8CF;
			padding: 12px 16px;
			background-color: #0043CE;
			border-radius: 8px;
			overflow: hidden;
		}
		.sale-block {
		}
		.sale-block__item {
			font-size: 18px;
			font-weight: 600;
			line-height: 18px;
			letter-spacing: 0.02em;
			color: #C4C8CF;
		}
		.sale-block__reset-btn {
		}
		.reset-sale-btn {
		}


		.q-dialog__backdrop {
			background: rgba(0, 0, 0, 0.9);
		}
.auth-reg {
	background-color: #000000;
	.q-card__section {
		padding: 3px 0;
	}
}
.account-btn, 
.reg-btn {
	font-size: 11px;
	font-weight: 600;
	line-height: 12px;
	letter-spacing: 0.06em;
}
.reg-btn:hover .q-focus-helper,
.account-btn:hover .q-focus-helper {
    background: currentColor;
    opacity: 0 !important;
}
.account-btn {
	color: #C4C8CF;
}
.reg-btn {
	color: #0554F8;
}
.auth-dialog {
	background-color: #1C1E22;
	border-radius: 32px 32px 0 0 !important;
	overflow: hidden !important;
}
.auth-card-column {
	padding: 4px;
}
.auth-card {
	flex: 0 1 100%;
	background-color: #1C1E22;
	border-radius: 32px;
	overflow: hidden;
}
.auth-card__icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}
.auth-card__icon-tap {
	flex: 0 0 48px;
	height: 5px;
	border-radius: 25px;
	background-color: #30343B;
}
.auth-card__header {
}
.header-auth-card {
	width: 100%;
}
.header-auth-card__title {
	font-size: 18px;
	font-weight: 600;
	line-height: 18px;
	letter-spacing: 0.02em;
	text-align: center;
	color: #C4C8CF;
}
.auth-card__body {
}
.body-auth-card {
	width: 100%;
}
.auth-card__footer {
}
.footer-auth-card {
	width: 100%;
}
.btn {
		font-size: 13px;
		font-weight: 600;
		line-height: 16px;
		letter-spacing: 0.06em;
		min-height: 64px;
		color: #fff;
		background-color: #0043CE;
		border-radius: 24px;
	}
	.btn-still {
		font-size: 11px;
		font-weight: 600;
		line-height: 12px;
		letter-spacing: 0.06em;
		color: #535965;
		.q-btn__content {
			justify-content: flex-end;
			text-align: right;
		}
	}
	@media (any-hover: hover){
		.btn-still:hover .q-focus-helper { 
			opacity: 0 !important;
		  } 
		}
	.input-main__label {
		font-size: 11px;
		font-weight: 600;
		line-height: 12px;
		letter-spacing: 0.06em;
		max-width: 133%;
		color: #535965;
		text-transform: uppercase;
	}
	.input-main input {
		font-size: 18px;
		font-weight: 600;
		line-height: 18px;
		letter-spacing: 0.02em;
		color: #535965;
	} 
	.input-main .q-field__control:before {
	border-bottom: 1px solid #25272D;
	}
	.input-main__info {
		font-size: 18px;
		font-weight: 600;
		line-height: 18px;
		letter-spacing: 0.02em;
		color: #C4C8CF;
	}
	.input-main--dooble {
		border-bottom: 1px solid #25272D;
	}
	.input-main__flag {
		width: 25px;
		height: 20px;
		overflow: hidden;
	}

</style>

