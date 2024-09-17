<script setup>

	import { ref, watch, onMounted } from 'vue';
	import { useRouter } from 'vue-router';
	import HeaderLogin from '@/components/HeaderLogin.vue';

	// Инициализация роутера
	const router = useRouter();

	// Инициализация переменных с сохраненными значениями из sessionStorage или значениями по умолчанию
	const password = ref(''); // Создаем реактивную переменную для пароля

	// Функция для проверки заполненности поля
	const isActive = (field) => {
			return field && field.length > 0 ? '_active' : '';
	};

</script>


<template>

	<q-layout>
		<q-page-container class="my-page-container body--dark-light">
			<q-page class="page-main column q-pb-md">

				<HeaderLogin/>

				<div class="page-main__body body-main row q-pt-lg q-pb-lg q-pl-sm q-pr-sm" style="width: 100%; flex: 1 1 auto;">
					<div class="body-main__inner row container-md justify-center items-center">

						<div class="card-column row col-xs-12 col-sm-6 col-md-5">
							<div class="card-main q-pt-lg q-pl-lg q-pr-lg q-pb-xl" style="">
								<div class="card-main__header row justify-center items-center q-mb-xl">
									<div class="card-main__title text-h5 text-dark-10">Вход в аккаунт</div>
								</div>

								<div class="card-main__body">

									<div class="input-main q-mb-lg">
										<div class="input-main__label">Email</div>
										<q-input 
											class="input-main__input" 
											v-model="email" 
											placeholder="youremail@email.com" 
											:class="isActive(email)"
											>
										</q-input>
									</div>

									<div class="input-main q-mb-lg">
										<div class="input-main__label">Пароль</div>
										<q-input
											class="input-main__input"
											v-model="password" 
											placeholder="Введите Пароль" 
											type="password"   
											:class="isActive(password)"
										>
										</q-input>
									</div>

								</div>

								<div class="card-main__footer">
									<div class="card-main__buttons row q-pb-sm">
										<q-btn
											unelevated
											class="card-main__btn text-weight-bold col"
											style="border-radius: 10px;"
										>
											<span class="block">Войти</span>
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
.body--dark-light {
	background-color: #141517;
}
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

