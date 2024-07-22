<script setup>

	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import HeaderCity from '@/components/HeaderCity.vue'

	const router = useRouter();
	const shape = ref('line');

	const selectCity = (city) => {
		localStorage.setItem('selectedCity', city);
		router.push({ name: 'main' });
	};

</script>

<template>
	<q-layout>
			<q-page-container class="my-page-container body--grey">
			 <q-page class="page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm"> 

					<HeaderCity/>

					<div class="page-internal__search search-page container-md row justify-center q-pt-md q-pb-lg">
						<q-input
							color="grey-9"
							standout 
							v-model="searchText"
							type="text"
							class="my-input-standart my-input-standart-middle"
							placeholder="найти город"
							style="width: 100%;"
						>
							<template v-slot:append>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#3C4049" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</template>
						</q-input>
					</div>

					<div class="page-internal container-md column items-start q-pt-md q-pb-md">
						<q-form class="col row" style="width: 100%;">

							<div class="column col-xs-12 col-sm-6 col-md-4 q-px-md q-pb-md">
								<div class="page-internal__choice-city choice-city column items-start q-mb-md" style="flex: 1 1 auto; width: 100%;">
									<div class="choice-city__letter">А</div>
									<q-radio name="shape" v-model="shape" val="Anapa" label="Анапа" @click="selectCity('Анапа')" />
									<q-radio name="shape" v-model="shape" val="Angarsk" label="Ангарск" @click="selectCity('Ангарск')" />
									<q-radio name="shape" v-model="shape" val="Arkhangelsk" label="Архангельск" @click="selectCity('Архангельск')" />
									<q-radio name="shape" v-model="shape" val="Armavir" label="Армавир" @click="selectCity('Армавир')" />
									<q-radio name="shape" v-model="shape" val="Astrakhan" label="Астрахань" @click="selectCity('Астрахань')" />
									
								</div>
								<q-separator inset style="width: 100%; background-color: #30343B; margin-top: 20px;" />
							</div>

							<div class="column col-xs-12 col-sm-6 col-md-4 q-px-md q-pb-md">
								<div class="page-internal__choice-city choice-city column items-start q-mb-md" style="flex: 1 1 auto; width: 100%;">
									<div class="choice-city__letter">Б</div>
									<q-radio name="shape" v-model="shape" val="Anapa" label="Барнаул" @click="selectCity('Барнаул')" />
									<q-radio name="shape" v-model="shape" val="Angarsk" label="Баксан" @click="selectCity('Баксан')" />
									<q-radio name="shape" v-model="shape" val="Arkhangelsk" label="Белгород" @click="selectCity('Белгород')" />
									<q-radio name="shape" v-model="shape" val="Armavir" label="Благовещенск" @click="selectCity('Благовещенск')" />
									<q-radio name="shape" v-model="shape" val="Astrakhan" label="Братск" @click="selectCity('Братск')" />
									<q-radio name="shape" v-model="shape" val="Astrakhan" label="Буденовск" @click="selectCity('Буденовск')" />
								
								</div>
								<q-separator inset style="width: 100%; background-color: #30343B; margin-top: 20px;" />
							</div>

						</q-form>
					</div>

			 </q-page>
			</q-page-container>
	</q-layout>
	</template>

<style lang="scss">
	.search-page {
		.q-field {
			border: 1px solid #30343B;
			border-radius: 8px;
		}
		.q-field__native, .q-field__input {
			font-size: 18px;
			font-weight: 600;
			line-height: 18px;
			color: #3C4049;
		}
	}
	.choice-city {
		position: relative;
		overflow: hidden;
	}
	.choice-city__letter {
		position: absolute;
		top: 18px;
		right: 18px;
		font-size: 11px;
		font-weight: 600;
		line-height: 12px;
		letter-spacing: 0.06em;
		color: #fff;
	}
</style>