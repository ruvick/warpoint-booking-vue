<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import HeaderBooking from '@/components/HeaderBooking.vue'; 

const router = useRouter();

const selectBooking = (title) => {
const booking = `${title}`;
localStorage.setItem('selectedBooking', booking);
router.push({ name: 'main' });
};

const phone = ref(localStorage.getItem('selectedPhone') || null);

</script>  

<template>

<q-layout>
	<q-page-container class="my-page-container body--dark">
		<q-page class="page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm">  

			<!-- <HeaderBooking/> -->

			<div class="tarif-inner column items-start" style="width: 100%;">

				<div class="container-md q-pt-md q-pl-sm q-pr-sm"> 
					
					<div class="row q-pt-md q-pb-md">

						<div class="autho-card-column col-xs-12 col-sm-6 col-md-4">

							<div class="auth-card column items-start q-pt-sm q-pb-lg q-pl-lg q-pr-lg">
								<div class="auth-card__icon">
									<div class="auth-card__icon-tap"></div>
								</div>
								<div class="auth-card__header header-auth-card row justify-center q-pt-xl q-pb-xl">
									<div class="header-auth-card__title col-7">
										Войдите в свой аккаунт,
										чтобы тратить баллы
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
								<div class="auth-card__footer footer-auth-card">
									<q-btn unelevated class="btn text-weight-bold" style="width: 100%;"> 
										<span class="block">Подтвердить</span>
										<!-- <span class="block">Получить код</span> -->
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

