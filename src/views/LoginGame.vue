<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import HeaderLogin from '@/components/HeaderLogin.vue';

// Инициализация роутера
const router = useRouter();

</script>

<template>
<q-layout>
    <q-page-container class="my-page-container body--dark-light">
     <q-page class="page-main column q-pb-md">
        <HeaderLogin
					style="position: fixed; z-index: 100; width: 100%;"
				/>

        <div class="page-main__body body-main row q-pb-lg q-pl-sm q-pr-sm" style="width: 100%; flex: 1 1 auto; padding-top: 100px;">
         <div class="body-main__inner row column container-md justify-center items-center">
           
							<div class="card-login q-mb-xl">
								<div class="card-login__icon">
									<q-img
										src="../assets/img/login-01.svg" 
										alt="Logo"     
										loading="lazy"      
										style="width: 100%; height: auto;"
									/>
								</div>
								<div class="card-login__text">Для игроков до 14 лет</div>
								<div class="card-login__title">Зарегистрироваться</div>
							</div>

							<div class="card-login">
								<div class="card-login__icon">
									<q-img
										src="../assets/img/login-02.svg" 
										alt="Logo"     
										loading="lazy"      
										style="width: 100%; height: auto;"
									/>
								</div>
								<div class="card-login__text">для игроков старше 14 лет</div>
								<div class="card-login__title">Зарегистрироваться</div>
							</div>

							<q-separator dark class="q-mt-xl q-mb-xl" style="max-width: 400px; width: 100%;" />

							<div class="card-login" @click="() => router.push({ name: 'authgame' })">
								<div class="card-login__icon">
									<q-img
										src="../assets/img/login-03.svg" 
										alt="Logo"     
										loading="lazy"      
										style="width: 100%; height: auto;"
									/>
								</div>
								<div class="card-login__text">Уже есть аккаунт?</div>
								<div class="card-login__title">Авторизоваться</div>
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
		.card-login {
			flex: 0 1 100%;
		}
	}
	.card-login {
		max-width: 400px;
		width: 100%;
		min-height: 224px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #ECECEE;
		padding: 36px 38px 52px 38px;
		background-color: #3970F6;
		border-radius: 24px;
		overflow: hidden;
		cursor: pointer;
	}
	.card-login__icon {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 16px;
		width: 56px;
		height: 56px;
	}
	.card-login__text {
		font-size: 18px;
		font-weight: 600;
		line-height: 24px;
		text-align: center;
		color: #ADC4FC;
		text-transform: uppercase;
		margin-bottom: 8px;
	}
	.card-login__title {
		font-size: 28px;
		font-weight: 700;
		line-height: 30.8px;
		letter-spacing: -0.01em;
		color: #ECECEE;
		text-transform: uppercase;
	}
</style>

