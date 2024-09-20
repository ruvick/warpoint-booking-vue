<script setup>
import { ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import HeaderLogin from '@/components/HeaderLogin.vue';

// Инициализация роутера
const router = useRouter();

const players = ref([
  { surname: '', name: '', patronymic: '', birthDate: '', isMale: false, isFemale: false }
]);

function addPlayer() {
  players.value.push({ surname: '', name: '', patronymic: '', birthDate: '', isMale: false, isFemale: false });
}

// Переименованная функция
const isFieldActive = (field) => {
  return field && field.length > 0 ? '_active' : '';
};

// Реактивные переменные
const email = ref('');
const password = ref('');
const phone = ref('');
const smsCode = ref('');
const selectedOption = ref('email'); 

const phoneMask = '+7(###) - ### - ## - ##';
const defaultCountryFlag = '../src/assets/flag-def.svg';
const countryFlag = ref(defaultCountryFlag);

// Создаем реактивные переменные для чекбоксов
const isMale = ref(false);
const isFemale = ref(false);

const isAgreed = ref(false);

// Следим за состоянием чекбоксов
watch([isMale, isFemale], ([newMale, newFemale]) => {
  // Если выбран один пол, снимаем выбор с другого
  if (newMale) {
    isFemale.value = false;
  }
  if (newFemale) {
    isMale.value = false;
  }
});

// const options = [
//   { label: 'По email', value: 'email' },
//   { label: 'По телефону', value: 'phone' }
// ];

const handleForgotPassword = () => {
  console.log("Ссылка для сброса пароля отправлена");
};

const handleSubmit = () => {
  if (selectedOption.value === 'email') {
    // Логика для входа по email
    console.log("Вход по email:", email.value, password.value);
  } else {
    // Логика для подтверждения по телефону
    console.log("Подтверждение по телефону:", phone.value, smsCode.value);
  }

};

const source = ref(null);
	const options = [
	{ label: '2Gis', value: '2gis' },
	{ label: 'VK', value: 'vk' },
	{ label: 'Google', value: 'google' },
	{ label: 'Instagram', value: 'instagram' },
	{ label: 'TikTok', value: 'tikTok' },
	{ label: 'Yandex', value: 'yandex' },
	{ label: 'Youtube', value: 'youtube' },
	{ label: 'Блогеры', value: 'bloggers' },
	{ label: 'Наружная реклама', value: 'advertisement' },
	{ label: 'От знакомых', value: 'friends' },
	{ label: 'Проходили мимо', value: 'passed' },
	{ label: 'Радио', value: 'radio' },
	{ label: 'ТВ', value: 'tv' }
	];

const currentStep = ref(1);
const stepCount = ref(3); // Общее количество шагов

// Вычисляем ширину прогресс-бара
const progressBarWidth = computed(() => {
    return `${(currentStep.value / stepCount.value) * 100}%`;
});

function nextStep() {
    if (currentStep.value < stepCount.value) {
        currentStep.value++;
    } else {
        // Логика для завершения регистрации
        console.log('Регистрация...');
    }
}

function prevStep() {
    if (currentStep.value > 1) {
        currentStep.value--;
    }
}

// Инициализация переменных с сохраненными значениями из sessionStorage или значениями по умолчанию
const country = ref(sessionStorage.getItem('selectedCountry') || '');
const city = ref(sessionStorage.getItem('selectedCity') || '');
const location = ref(sessionStorage.getItem('selectedLocation') || '');
const activity = ref(sessionStorage.getItem('selectedActivity') || '');
const services = ref(sessionStorage.getItem('selectedServices') || '');
const dategame = ref(sessionStorage.getItem('selectedDateTimeGame') || '');
const giftcert = ref(sessionStorage.getItem('selectedGiftCert') || '');
const promocode = ref(sessionStorage.getItem('selectedPromocode') || '');
const name = ref(sessionStorage.getItem('selectedName') || '');
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

const emailSubscription = ref(false);
const smsSubscription = ref(false);

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
// watch(country, (newVal) => saveToSessionStorage('selectedCountry', newVal));
// watch(city, (newVal) => saveToSessionStorage('selectedCity', newVal));
// watch(location, (newVal) => saveToSessionStorage('selectedLocation', newVal));
// watch(activity, (newVal) => saveToSessionStorage('selectedActivity', newVal));
// watch(services, (newVal) => saveToSessionStorage('selectedServices', newVal));
// watch(dategame, (newVal) => saveToSessionStorage('selectedDateTimeGame', newVal));
// watch(name, (newVal) => saveToSessionStorage('selectedName', newVal));
// watch(phone, (newVal) => saveToSessionStorage('selectedPhone', newVal));
// watch(giftcert, (newVal) => saveToSessionStorage('selectedGiftCert', newVal));
// watch(shape, (newVal) => saveToSessionStorage('selectedShape', JSON.stringify(newVal)));
// watch(toggleCert, (newVal) => saveToSessionStorage('toggleCert', JSON.stringify(newVal)));
// watch(countryFlag, (newVal) => saveToSessionStorage('selectedCountryFlag', newVal));
// watch(promocode, (newVal) => {
// 		saveToSessionStorage('selectedPromocode', newVal);
// 		showApplyButton.value = !!newVal;
// });

// Действия при монтировании компонента
// onMounted(() => {
// 		const savedGiftCert = sessionStorage.getItem('selectedGiftCert');
// 		if (savedGiftCert) {
// 				giftcert.value = savedGiftCert;
// 		}

// 		const savedBookingData = sessionStorage.getItem('bookingData');
// 		if (savedBookingData) {
// 				isBooked.value = true;
// 		}

// 		const savedCountryFlag = sessionStorage.getItem('selectedCountryFlag');
// 		countryFlag.value = savedCountryFlag || defaultCountryFlag;

// 		const savedDateTimeGame = sessionStorage.getItem('selectedDateTimeGame');
// 		if (savedDateTimeGame) {
// 				try {
// 						const { date, time } = JSON.parse(savedDateTimeGame);
// 						dategame.value = `${date}, ${time}`;
// 				} catch (error) {
// 						console.error('Error parsing savedDateTimeGame:', error);
// 				}
// 		}
// });

// Очистка sessionStorage при закрытии окна
window.addEventListener('beforeunload', () => {
		sessionStorage.clear();
});

</script>


<template>
  <q-layout>
    <q-page-container class="my-page-container body--dark-light">
      <q-page class="page-main column q-pb-md">

        <HeaderLogin style="position: fixed; z-index: 100; width: 100%;"/>

        <div class="page-main__body body-main row q-pb-lg q-pl-sm q-pr-sm" style="width: 100%; flex: 1 1 auto; padding-top: 100px;">

          <div class="body-main__wrapper" style="width: 100%;">

            <div class="body-main__butons butons-body-main row items-center" style="gap:15px; padding-right: 165px; margin: 0 auto 80px auto;">
              <q-btn
                class="butons-body-main__btn no-hover"
                primary
                style="font-size: 11px; color: #C4C8CF; border: 1px solid #30343B; border-radius: 24px;"
                @click="() => router.push({ name: 'logingame' })"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 4px;">
                  <path d="M12.5 5L7.5 10L12.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>На главную</span>
              </q-btn>
				  <div class="butons-body-main__header header-buttons">
					Регистрация
				  </div>
            </div>

            <div class="body-main__inner row container-md justify-center items-center">

              <div class="card-column row col-xs-12 col-sm-6 col-md-4">

                <div class="card-main">

                  <div class="card-main__header header-card-main row justify-between items-center q-pt-xs q-pl-lg q-pr-lg q-pb-xs" style="min-height: 64px; background-color: #1f2024;">
							<div class="butons-body-main__btn">
								<q-btn
								class="btn-def no-hover"
								primary
								@click="prevStep"
							>
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_898_9415)">
										<path d="M4.63648 15.2685C4.38651 15.5185 4.24609 15.8576 4.24609 16.2111C4.24609 16.5647 4.38651 16.9038 4.63648 17.1538L12.1791 24.6965C12.3021 24.8238 12.4493 24.9254 12.6119 24.9953C12.7746 25.0651 12.9496 25.1019 13.1266 25.1035C13.3036 25.105 13.4792 25.0713 13.6431 25.0042C13.8069 24.9372 13.9558 24.8382 14.081 24.713C14.2062 24.5878 14.3052 24.4389 14.3722 24.2751C14.4393 24.1112 14.473 23.9356 14.4715 23.7586C14.4699 23.5816 14.4332 23.4066 14.3633 23.2439C14.2934 23.0813 14.1918 22.9341 14.0645 22.8111L8.79781 17.5445H26.4551C26.8088 17.5445 27.1479 17.404 27.398 17.1539C27.648 16.9039 27.7885 16.5648 27.7885 16.2111C27.7885 15.8575 27.648 15.5184 27.398 15.2683C27.1479 15.0183 26.8088 14.8778 26.4551 14.8778L8.79781 14.8778L14.0645 9.61113C14.3074 9.35966 14.4417 9.02286 14.4387 8.67326C14.4357 8.32367 14.2954 7.98925 14.0482 7.74204C13.801 7.49483 13.4666 7.3546 13.117 7.35156C12.7674 7.34853 12.4306 7.48292 12.1791 7.7258L4.63648 15.2685Z" fill="#5B89F8"/>
									</g>
									<defs>
										<clipPath id="clip0_898_9415">
											<rect width="32" height="32" fill="white" transform="matrix(-1 0 0 1 32 0)"/>
										</clipPath>
									</defs>
								</svg>
							</q-btn>
							</div>
							<div class="butons-body-main__stages stages-box">
								<!-- <div class="stages-box__value">1 из 3</div>   -->
								<div class="stages-box__value">{{ currentStep }} из {{ stepCount }}</div>
								<div class="stages-box__progressbar">
									<div class="stages-box__progress" :style="{ width: progressBarWidth }"></div>
								</div>
							</div>
                  </div>

						<div class="card-main__wrapper column" style="flex-wrap: nowrap; max-block-size: 961px; height: 100%; overflow: auto;">

							<div v-if="currentStep === 1" class="card-main__body q-pt-lg q-pl-lg q-pr-lg q-pb-lg">

								<div class="input-main input-main--row input-main--pos q-mb-lg" style="position: relative; flex-direction: row-reverse;">
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
									</q-input>
									<span class="input-main__label">Страна</span>
								</div>

								<div class="input-main input-main--row q-mb-lg">
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
										<span class="input-main__label">Город</span>
									</q-input>
								</div>

								<div class="input-main input-main--row">
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
										<span class="input-main__label">Локация</span>
									</q-input>
								</div>

								<div class="card-main__title row justify-center text-h6 q-mb-lg" style="text-align: center; color: #fff; margin-top: 80px;">Данные родителя / законного представителя</div>

								<div class="input-main input-main--row q-mb-lg">
									<q-input 
										class="input-main__input" 
										v-model="name" 
										placeholder="Имя" 
										:class="isActive(name)"
										>
										<span class="input-main__label">Имя</span>
									</q-input>
								</div>

								<div class="input-main input-main--row q-mb-lg">
									<q-input 
										class="input-main__input" 
										v-model="surname" 
										placeholder="Фамилия" 
										:class="isActive(surname)"
										>
										<span class="input-main__label">Фамилия</span>
									</q-input>
								</div>

								<div class="input-main input-main--row q-mb-lg">
									<q-input 
										class="input-main__input" 
										v-model="patronymic" 
										placeholder="Отчество" 
										:class="isActive(patronymic)"
										>
										<span class="input-main__label">Отчество</span>
									</q-input>
								</div>

								<div class="input-main input-main--row q-mb-lg" style="position: relative; flex-direction: row-reverse;">
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
									<span class="input-main__label">Телефон</span>
								</div>

								<div class="input-main input-main--row q-mb-lg">
									<q-input 
										class="input-main__input" 
										v-model="email" 
										placeholder="Введите Email" 
										:class="isActive(email)"
										>
										<span class="input-main__label">Email</span>
									</q-input>
								</div>

							</div>

							<div v-if="currentStep === 2" class="card-main__body column q-pt-lg q-pl-lg q-pr-lg q-pb-lg">

								<div v-for="(player, index) in players" :key="index" class="card-main__player player-card q-mb-xl">

									<div class="player-card__item row items-center q-mb-lg">
											<q-img
												class="player-card__icon q-mr-md"
												src="../assets/img/player01.svg" 
												alt="Logo"     
												loading="lazy"      
												style="max-width: 24px; width: 100%; height: 24px;"
											/>
										<div class="player-card__text">Игрок {{ index + 1 }}</div>
									</div>

									<div class="input-main input-main--row q-mb-lg">
										<q-input 
											class="input-main__input" 
											v-model="player.surname"
											placeholder="Фамилия" 
											:class="isActive(player.surname)"
											>
											<span class="input-main__label">Фамилия ребенка</span>
										</q-input>
									</div>

									<div class="input-main input-main--row q-mb-lg">
										<q-input 
											class="input-main__input" 
											v-model="player.name"
											placeholder="Имя ребенка" 
											:class="isActive(player.name)"
											>
											<span class="input-main__label">Имя ребенка</span>
										</q-input>
									</div>

									<div class="input-main input-main--row q-mb-lg">
										<q-input 
											class="input-main__input" 
											v-model="player.patronymic"
											placeholder="Отчество" 
											:class="isActive(player.patronymic)"
											>
											<span class="input-main__label">Отчество ребенка</span>
										</q-input>
									</div>

									<div class="input-main input-main--row q-mb-lg">
										<q-input 
											class="input-main__input" 
											v-model="player.birthDate" 
											placeholder="дд/мм/г" 
											:class="isActive(player.birthDate)"
											mask="##/##/##"
										>
											<span class="input-main__label">Дата рождения</span>
										</q-input>
									</div>

									<div class="input-main input-main--row q-mb-lg">
										<span class="input-main__label">Пол</span>
										<div class="input-main__input">
											<q-checkbox 
											v-model="player.isMale" 
											label="М" 
											class="custom-checkbox q-mr-sm"
											/>
											<q-checkbox 
											v-model="player.isFemale" 
											label="Ж" 
											class="custom-checkbox"
											/>
										</div>
									</div>

									<div class="input-main input-main--row q-mb-lg">
										<q-input 
											class="input-main__input" 
											v-model="player.name" 
											placeholder="Игровое имя" 
											:class="isActive(player.name)"
											>
											<span class="input-main__label">Игровое имя</span>
										</q-input>
									</div>

								</div>

								<q-btn @click="addPlayer" class="card-main__btn _full text-weight-bold" style="border-radius: 10px; border: 2px solid #8e8e90; background-color: transparent; color: white;">
									<svg class="q-mr-md" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect width="32" height="32" rx="16" fill="#44A248"/>
										<path d="M20.6344 17.5233V15.4091H10.3656V17.5233H20.6344ZM16.6634 21.9082V11.013H14.3478V21.9082H16.6634Z" fill="white"/>
									</svg>
									<span class="block">Добавить ещё игрока</span>
								</q-btn>

							</div>

							<div v-if="currentStep === 3" class="card-main__body q-pt-lg q-pl-lg q-pr-lg q-pb-lg">

								<div class="select-main q-mb-lg">
									<q-select
										v-model="source"
										:options="options"
										label="Откуда вы узнали о нас"
										class="custom-select"
									/>
								</div>

								<div class="input-main input-main--row justify-between q-pt-sm q-pb-sm q-pl-md q-pr-md q-mb-lg"> 
									<div class="input-main__name">Получать e-mail рассылку</div>
									<q-toggle
										v-model="emailSubscription"
										class="toggle-label"
									>
										<span class="input-main__label">Да</span>
									</q-toggle>
								</div>

								<div class="input-main input-main--row justify-between q-pt-sm q-pb-sm q-pl-md q-pr-md q-mb-lg"> 
									<div class="input-main__name">Получать SMS рассылку</div>
									<q-toggle
										v-model="smsSubscription"
										class="toggle-label"
									>
										<span class="input-main__label">Да</span>
									</q-toggle>
								</div>

								<div class="input-main q-pt-sm q-pb-sm q-pl-md q-pr-md">
									<q-checkbox class="checkbox-main checkbox-main_log" v-model="isAgreed" size="md">
										<span class="input-main__label">
											С <router-link to="/policytext">правилами игры</router-link> ознакомлен и даю согласие на обработку своих <router-link to="/policytext">персональных данных</router-link>
										</span>
									</q-checkbox>
                    		</div>

							</div> 

							<div class="card-main__footer q-pt-lg q-pl-lg q-pr-lg q-pb-lg">
								<div class="card-main__buttons q-pb-sm">
									<q-btn
										unelevated
										class="card-main__btn _full text-weight-bold col"
										style="border-radius: 10px;"
										@click="nextStep"
									>
										<span class="block">{{ currentStep === 3 ? 'Зарегистрироваться' : 'Далее' }}</span>
									</q-btn>
								</div>
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
.body--dark-light {
	background-color: #141517;
}
	.card-column {
		padding: 4px;
	}
	.card-main {
		flex: 0 1 100%;
		min-height: 992px;
		border-radius: 24px;
		background-color: #1C1E22;
		overflow: hidden;
	}
	.card-main__title {
		text-transform: uppercase;
	}
	.card-main__wrapper {
		padding-bottom: 16px;
		.card-main__body {
			flex: 1 1 auto;
		}
	}

	@media (min-width: 1360px) {
		.card-main__inner {
			max-width: 500px;
			margin: 0px auto;
		}  
	}

	.header-buttons {
		flex: 1 1 auto;
		color: #fff;
		font-size: 28px;
		font-weight: 600;
		line-height: 36px;
		letter-spacing: 0.01em;
		text-align: center;
	}

	.butons-body-main__stages {
	}
	.stages-box {
	}
	.stages-box__value {
		font-size: 18px;
		font-weight: 500;
		line-height: 21.09px;
		color:#C7CCCC;
	}
	.stages-box__value:not(:last-child){
		margin-bottom: 7px; 
	}

	.btn-def {
		&.q-btn:before {
			display: none;
		}
		.q-focus-helper {
			opacity: 0 !important;
		}
	}

	.player-card {
	}
	.player-card__icon {
	}
	.player-card__text {
		font-size: 18px;
		font-weight: 500;
		line-height: 21.78px;
		color: #44A248;
	}

	.custom-checkbox {
		font-size: 20px;
		font-weight: 600;
		line-height: 24px;
		color: #D9D9D9; 
		.q-checkbox__inner {
			font-size: 40px;
			width: 1em;
			min-width: 1em;
			height: 1em;
			outline: 0;
			border-radius: 50%;
			color: #D9D9D9;
		}
		.q-checkbox__bg {
			top: 25%;
			left: 25%;
			width: 50%;
			height: 50%;
			border: 2px solid currentColor;
			border-radius: 50%;
			transition: background 0.22s cubic-bezier(0, 0, 0.2, 1) 0ms;
			-webkit-print-color-adjust: exact;
		}
	}

	.custom-select {
		padding: 0 16px;
		background-color: #25272D;
		.q-field__control {
			color: red;
			height: 56px;
			max-width: 100%;
			outline: none;
		}
	}

	.custom-select .q-field__native {
		color: #9E9E9E; 
	}

	.custom-select .q-field__label {
		font-size: 20px;
		font-weight: 500;
		line-height: 23.44px;
		color: #9E9E9E; 
	}

	.input-main__name {
		font-size: 18px;
		font-weight: 500;
		line-height: 21.78px;
		color: #C4C8CF;
	}

	.stages-box {
}

.stages-box__progressbar {
    width: 100%;
    height: 5px;
    background-color: grey;
    border-radius: 5px;
}

.stages-box__progress {
    height: 100%;
    background-color: #5B89F8;
    border-radius: inherit;
    transition: width .3s ease; 
}

	::-webkit-scrollbar {
		overflow-y: scroll;
		width: 7px;
		background-color: #25272D;
	}

	::-webkit-scrollbar-thumb {
		background-color: #2d364b;
	}
//========================================================================================================================================================

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
		.card-main__btn._full {
			display: block;
			width: 100%;
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
//========================================================================================================================================================
.btn-def {
	
}
.btn-right .q-btn__content {
	display: flex;
  text-align: right;
  justify-content: flex-end;
	font-size: 13px;
}
.card-main__buttons-social  {
	gap: 8px;
}
.btn-log {
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1 1 auto;
	border: 1px solid #8F96A380;
	border-radius: 8px;
	min-height: 48px;
}

.input-main--row {
	display: flex;
	align-items: center;
	.input-main__input {
		width: 100%;
	}
	.q-field__control-container {
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
	}
	.input-main__label {
		flex: 0 1 55%;
		font-size: 13px;
		font-weight: 600;
		line-height: 16px;
		letter-spacing: 0.06em;
		margin-top: 5px;
	}
}

	.input-main--pos .relative-position {
		position: static;
	}

.checkbox-main_log {
	.q-checkbox__bg {
		top: 0;
	}
	 .q-checkbox__label {
		font-size: 20px;
		font-weight: 600;
		line-height: 20px;
		letter-spacing: 0.02em;
    color: #535965;
    white-space: normal;
		text-transform: none;
		.input-main__label {
			font-size: 20px;
		font-weight: 600;
		line-height: 20px;
		letter-spacing: 0.02em;
		text-transform: none;
		}
		a {
			color: #0554F8;
			text-decoration: none;
		}
	}
}

@media (any-hover: hover){
	 .btn-right:hover { 
	  .q-focus-helper {
    	opacity: 0 !important;
		}
	} 
}
//========================================================================================================================================================
.toggle-buttons {
	padding: 6px;
	border-radius: 16px;
	background-color: #25272D;
	.q-btn-toggle {
		width: 100%;
		min-height: 48px;
		border-radius: 16px !important;
			.bg-primary {
			background-color: #101114 !important;
			box-shadow: 0px 4px 12px 0px #00000033;
		}
	}
	.q-btn {
		flex: 1 1 auto;
		border-radius: 16px !important;
	}
}
</style>

