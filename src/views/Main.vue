<script setup>

import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import HeaderMain from '@/components/HeaderMain.vue';

const router = useRouter();

const goToCountryPage = () => {
router.push({ name: 'country' });
};

const goToCityPage = () => {
router.push({ name: 'city' });
};

const country = ref(localStorage.getItem('selectedCountry') || '');
const city = ref(localStorage.getItem('selectedCity') || '');
const location = ref(localStorage.getItem('selectedLocation') || '');
const gameZone = ref(localStorage.getItem('selectedGameZone') || '');
const service = ref(localStorage.getItem('selectedService') || '');
const dateTime = ref(localStorage.getItem('selectedDateTime') || '');
const dense = ref(false);
const promocode = ref(localStorage.getItem('selectedPromocode') || '');
const name = ref(localStorage.getItem('selectedName') || '');
const phone = ref(localStorage.getItem('selectedPhone') || null);
const shape = ref(JSON.parse(localStorage.getItem('selectedShape')) || ['line']);

watch(country, (newVal) => {
localStorage.setItem('selectedCountry', newVal);
});

watch(city, (newVal) => {
localStorage.setItem('selectedCity', newVal);
});

watch(location, (newVal) => {
localStorage.setItem('selectedLocation', newVal);
});

watch(gameZone, (newVal) => {
localStorage.setItem('selectedGameZone', newVal);
});

watch(service, (newVal) => {
localStorage.setItem('selectedService', newVal);
});

watch(dateTime, (newVal) => {
localStorage.setItem('selectedDateTime', newVal);
});

watch(promocode, (newVal) => {
localStorage.setItem('selectedPromocode', newVal);
});

watch(name, (newVal) => {
localStorage.setItem('selectedName', newVal);
});

watch(phone, (newVal) => {
localStorage.setItem('selectedPhone', newVal);
});

watch(shape, (newVal) => {
localStorage.setItem('selectedShape', JSON.stringify(newVal));
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
                     :dense="dense"
                     @click="goToCountryPage"
                    >
                     <template v-slot:prepend>
                        <div class="input-main__flag">
                         <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_56_2611)">
                             <rect width="25" height="20" rx="4" fill="white" />
                             <rect y="8" width="32" height="8" fill="#0077FF" />
                             <rect y="16" width="32" height="8" fill="#FB370B" />
                            </g>
                            <defs>
                             <clipPath id="clip0_56_2611">
                                <rect width="25" height="20" rx="4" fill="white" />
                             </clipPath>
                            </defs>
                         </svg>
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
											@click="goToCityPage"
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
										<q-input class="input-main__input" v-model="location" placeholder="Выберите локацию" :dense="dense" >
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
										<q-input class="input-main__input" v-model="gameZone" placeholder="Выберите активность" :dense="dense" >
											<template v-slot:append>
												<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M7.5 5L12.5 10L7.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
										</template>
										</q-input>
									</div>

									<div class="input-main q-mb-lg">
										<div class="input-main__label">Услуга</div>
										<q-input class="input-main__input" v-model="service" placeholder="Выберите услугу" :dense="dense" >
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
										<q-input class="input-main__input" v-model="dateTime" placeholder="Выберите дату и время игры" :dense="dense" >
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
										<q-input class="input-main__input" v-model="name" placeholder="Имя Фамилия" :dense="dense" >
										</q-input>
									</div>

									<div class="input-main q-mb-lg">
										<div class="input-main__label">Телефон</div>
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
										<div class="input-main__label">Email</div>
										<q-input class="input-main__input" v-model="email" placeholder="Введите Email" :dense="dense" >
										</q-input>
									</div>

									<div class="input-main">
										<div class="input-main__label">соглашение</div>
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
											<div class="col-auto">1</div>
											<div class="col-auto">2</div>
										</div>
									</div>

									<div class="input-main input-main--dooble q-pt-sm q-pb-lg q-mb-lg">
										<div class="input-main__label q-mb-md">Подарочный сертификат</div>
										<div class="input-main__body row items-center justify-between">
											<div class="col-auto">1</div>
											<div class="col-auto">2</div>
										</div>
									</div>

									<div class="input-main input-main--dooble q-pt-sm q-pb-lg q-mb-lg">
										<div class="input-main__label q-mb-md">Баллы</div>
										<div class="input-main__body row items-center justify-between">
											<div class="col-auto">1</div>
											<div class="col-auto">2</div>
										</div>
									</div>

									<div class="input-main q-mb-lg">
										<div class="input-main__label">Промокод</div>
										<q-input class="input-main__input" v-model="promocode" placeholder="Введите промокод" :dense="dense" >
										</q-input>
									</div>

									<div class="input-main input-main--dooble q-pt-sm q-pb-lg q-mb-lg">
										<div class="input-main__label q-mb-md">Сумма заказа</div>
										<div class="input-main__body row">
											<div class="input-main__price price-main">3 000 ₽</div>
										</div>
									</div>

									<div class="input-main input-main--dooble q-pt-sm q-pb-lg">
										<div class="input-main__label q-mb-md">Сумма предоплаты</div>
										<div class="input-main__body row">
											<div class="input-main__price price-main">600 ₽</div>
										</div>
									</div>

								</div>
								<div class="card-main__buttons row q-pb-sm">
									<q-btn unelevated class="card-main__btn text-weight-bold col">
										<span class="block">Забронировать</span>
									</q-btn>
									<q-btn unelevated class="card-main__btn text-weight-bold col" style="display: none;">
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
			width: 25px;
			height: 20px;
			overflow: hidden;
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
		
</style>