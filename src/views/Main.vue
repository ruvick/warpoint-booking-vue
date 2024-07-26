<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import HeaderMain from '@/components/HeaderMain.vue';

const router = useRouter();

const defaultCountryFlag = '../src/assets/flag-def.svg'; // Путь к изображению флага России
const countryFlag = ref(sessionStorage.getItem('selectedCountryFlag') || defaultCountryFlag);

const goToPage = (pageName, placeholder) => {
router.push({ name: pageName, params: { label: placeholder } });
};

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

watch(country, (newVal) => {
sessionStorage.setItem('selectedCountry', newVal);
city.value = ''; // Сбрасываем значение города
sessionStorage.removeItem('selectedCity'); // Удаляем значение города из sessionStorage
});

watch(city, (newVal) => {
sessionStorage.setItem('selectedCity', newVal);
});

watch(location, (newVal) => {
sessionStorage.setItem('selectedLocation', newVal);
});

watch(activity, (newVal) => {
sessionStorage.setItem('selectedActivity', newVal);
});

watch(services, (newVal) => {
sessionStorage.setItem('selectedServices', newVal);
});

watch(dategame, (newVal) => {
sessionStorage.setItem('selectedDateTimeGame', newVal);
});

watch(promocode, (newVal) => {
sessionStorage.setItem('selectedPromocode', newVal);
});

watch(name, (newVal) => {
sessionStorage.setItem('selectedName', newVal);
});

watch(phone, (newVal) => {
sessionStorage.setItem('selectedPhone', newVal);
});

watch(giftcert, (newVal) => {
sessionStorage.setItem('selectedGiftCert', newVal);
});

watch(shape, (newVal) => {
sessionStorage.setItem('selectedShape', JSON.stringify(newVal));
});

watch(toggleCert, (newVal) => {
sessionStorage.setItem('toggleCert', JSON.stringify(newVal));
});

watch(countryFlag, (newVal) => {
sessionStorage.setItem('selectedCountryFlag', newVal);
});

// Работа с Участниками
const participants = ref(1);
// Увеличиваем
const increaseQuantity = () => {
if (participants.value < 10) {
    participants.value += 1;
}
};
// Уменьшаем
const decreaseQuantity = () => {
if (participants.value > 1) {
    participants.value -= 1;
}
};

onMounted(() => {
const savedGiftCert = sessionStorage.getItem('selectedGiftCert');
if (savedGiftCert) {
    giftcert.value = savedGiftCert;
}

// Восстанавливаем состояние бронирования
const savedBookingData = sessionStorage.getItem('bookingData');
if (savedBookingData) {
    isBooked.value = true;
}

// Восстанавливаем флаг страны
const savedCountryFlag = sessionStorage.getItem('selectedCountryFlag');
if (savedCountryFlag) {
    countryFlag.value = savedCountryFlag;
} else {
    countryFlag.value = defaultCountryFlag;
}
});

window.addEventListener('beforeunload', () => {
sessionStorage.clear();
});

const orderAmount = ref('3100');
const prepaymentAmount = ref('600');

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
isBooked.value = true; // Устанавливаем состояние бронирования
router.push('/booking');
};

// Вычисляемое свойство для проверки заполненности полей
const isActive = (field) => {
return field && field.length > 0 ? '_active' : '';
};
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
											:dense="dense"
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
											:dense="dense" 
											@click="goToPage('city', 'Выберите город')"
											:class="isActive(city)"
											>
											<template v-slot:append>
												<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M7.5 5L12.5 10L7.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
											:dense="dense" 
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
											:dense="dense" 
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
											:dense="dense" 
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
											:dense="dense"
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
											:dense="dense" 
											:class="isActive(name)"
											>
										</q-input>
									</div>

									<div class="input-main q-mb-lg">
										<div class="input-main__label">Телефон</div>
										<q-input
                    class="input-main__input"
                    v-model="phone"
                    :dense="dense"
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
											:dense="dense" 
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
												<q-checkbox class="checkbox-main" size="md" v-model="shapeBall" val="md" label="Оплата баллами" />
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

									<div class="input-main q-mb-lg">
										<div class="input-main__label">Промокод</div>
										<q-input class="input-main__input" v-model="promocode" placeholder="Введите промокод" :dense="dense" />
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
</style>

