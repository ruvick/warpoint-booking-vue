<template>

	<q-layout>
		<q-page-container class="my-page-container body--dark">
			<q-page class="page-main">

				<div class="page-main__header header-page-main row items-center">
					<q-btn class="no-hover" primary @click="$router.push('/')" style="font-size: 11px; color: #C4C8CF; border: 1px solid #30343B; border-radius: 24px;">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 4px;">
							<path d="M12.5 5L7.5 10L12.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<span>На сайт</span>
					</q-btn>
				</div>

				<div class="page-main__body body-main q-pt-lg q-pb-lg">
					<div class="body-main__inner row justify-center" style="gap: 8px;">

						<div class="card-main col-xs-12 col-sm-8 col-md q-pt-lg q-pl-lg q-pr-lg q-pb-xl" style="">
							<div class="card-main__header row items-center q-mb-xl">
								<div class="card-main__title text-h8 text-dark-10">01. Место</div>
							</div>
							<div class="card-main__body">
                <q-input class="input-main q-mb-lg" v-model="country" label="Страна">
                 <template v-slot:append>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7.5 5L12.5 10L7.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
                 </template>
                </q-input>
								<q-input class="input-main q-mb-lg" v-model="sity" label="Город">
                 <template v-slot:append>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7.5 5L12.5 10L7.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
                 </template>
                </q-input>
								<q-input class="input-main q-mb-lg" v-model="location" label="Локация">
                 <template v-slot:append>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7.5 5L12.5 10L7.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
                 </template>
                </q-input>
							</div>
						</div>

						<div class="card-main col-xs-12 col-sm-8 col-md q-pt-lg q-pl-lg q-pr-lg q-pb-xl" style="">
							<div class="card-main__header row items-center q-mb-xl">
								<div class="card-main__title text-h8 text-dark-10">02. Игра</div>
							</div>
							<div class="card-main__body">
                <q-input class="input-main q-mb-lg" v-model="country" label="Страна">
                 <template v-slot:append>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7.5 5L12.5 10L7.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
                 </template>
                </q-input>
								<q-input class="input-main q-mb-lg" v-model="gameZone" label="Игровая зона / мероприятие">
                 <template v-slot:append>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7.5 5L12.5 10L7.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
                 </template>
                </q-input>
								<q-input class="input-main q-mb-lg" v-model="service" label="Услуга">
                 <template v-slot:append>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7.5 5L12.5 10L7.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
                 </template>
                </q-input>
							</div>
						</div>

						<div class="card-main col-xs-12 col-sm-8 col-md q-pt-lg q-pl-lg q-pr-lg q-pb-xl" style="">
							<div class="card-main__header row items-center q-mb-xl">
								<div class="card-main__title text-h8 text-dark-10">03. дата и время</div>
							</div>
							<div class="card-main__body">
                <q-input class="input-main" v-model="dateTime" label="Когда и во сколько">
                 <template v-slot:append>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7.5 5L12.5 10L7.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
                 </template>
                </q-input>
							</div>
						</div>

						<div class="card-main col-xs-12 col-sm-8 col-md q-pt-lg q-pl-lg q-pr-lg q-pb-xl" style="">
							<div class="card-main__header row items-center q-mb-xl">
								<div class="card-main__title text-h8 text-dark-10">04. Ваши данные</div>
							</div>
							<div class="card-main__body">
                <q-input class="input-main" v-model="dateTime" label="Когда и во сколько">
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
			
			</q-page>
		</q-page-container>
	</q-layout>

</template>

<script setup>

	import { ref } from 'vue';

	const country = ref('Выберите страну');
	const sity = ref('Выберите город');
	const location = ref('Выберите локацию');
	const gameZone = ref('Выберите активность');
	const service = ref('Выберите услугу');
	const dateTime = ref('Выберите дату и время игры');

</script>

<style lang="scss">

	.body--dark {
		background-color: #101114;
	}
	.page-main {
		padding: 12px 8px;
	}
	.header-page-main {
		min-height: 52px;
		background-image: url('src/assets/logo.svg');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
	}
	.card-main {
		border-radius: 24px;
		background-color: #1C1E22;
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
	.input-main .q-field__label {
		font-size: 11px;
		font-weight: 600;
		line-height: 12px;
		letter-spacing: 0.06em;
    max-width: 133%;
		color: #535965;
		text-transform: uppercase;
    transform: translateY(-110%) scale(1);
    transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.396s cubic-bezier(0.4, 0, 0.2, 1);
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
			padding-bottom: 10px;
		}
</style>