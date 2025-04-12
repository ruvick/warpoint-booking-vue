<script setup>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import Header from '@/components/Header.vue';

	// Инициализация роутера для навигации
	const router = useRouter();

	// Реактивные переменные для хранения номера подарочного сертификата и PIN-кода
	const numberCert = ref('');
	const pin = ref('');

	// Функция для добавления подарочного сертификата
	const addGiftCert = () => {
	// Сохранение данных в sessionStorage
	sessionStorage.setItem('selectedGiftCert', numberCert.value);
	sessionStorage.setItem('pin', pin.value);
	
	// Перенаправление на страницу 'main'
	router.push({ name: 'main' });
	};
</script>

<template>
	<q-layout>
		<q-page-container class="my-page-container body--grey">
			<q-page class="page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm">  

				<Header/>

				<div class="tarif-inner column items-start" style="width: 100%;">

					<div class="container-md q-pt-md q-pl-sm q-pr-sm"> 
					
						<div class="row q-pt-md q-pb-md" style="flex: 1 1 auto;">

							<div class="cert-card-column row col-xs-12 col-sm-6 col-md-4" @click="selectedGiftCert('Сертификат')">
								<div class="cert-card column items-start q-pt-lg q-pb-lg q-pl-md q-pr-md">
									<div class="cert-card__item">
										<div class="input-main q-mb-lg">
											<div class="input-main__label">Номер сертификата</div>
											<q-input 
												class="input-main__input" 
												v-model="numberCert" 
												mask="AAAA - ## - #### - #### - ####" 
												placeholder="Введите номер сертификата" 
												/>
										</div>
									</div>
									<div class="cert-card__item">
										<div class="input-main q-mb-lg">
											<div class="input-main__label">ПИН</div>
											<q-input 
												class="input-main__input" 
												v-model.number="pin"
											filled
												type="number" 
												placeholder="Введите пин" 
												/>
										</div>
									</div>
									<div class="cert-card__item">
										<div class="cert-card__bg">
											<img src="../assets/img/cert/bg.png" loading="lazy" alt="Картинка">
										</div>
									</div>
								</div>
							</div>

						</div>

						<div class="row">
							<div class="col col-xs-12 col-sm-6 col-md-4">
								<q-btn unelevated class="btn text-weight-bold" style="width: 100%;" @click="addGiftCert">
									<span class="block">Добавить</span>
								</q-btn>
							</div>
						</div>

					</div>

				</div>

			</q-page>
		</q-page-container>
	</q-layout>
</template>

<style lang="scss">
	.cert-card-column {
		padding: 4px;
	}
	.cert-card {
		flex: 0 1 100%;
		background-color: #25272D;
		border-radius: 16px;
		overflow: hidden;
	}
	.cert-card__item {
		width: 100%;
		.input-main .q-field__control:before {
			border-bottom: 1px solid #30343B;
		}
	}
	.cert-card__bg {
		position: relative;
		padding-bottom: 12.3%;
			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
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
		// bottom: -5px;
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
</style>

