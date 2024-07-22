<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import HeaderCountry from '@/components/HeaderCountry.vue'

const router = useRouter();
const shape = ref('line');

const selectCountry = (country) => {
localStorage.setItem('selectedCountry', country);
router.push({ name: 'main' });
};

</script>

<template>
	<q-layout>
			<q-page-container class="my-page-container body--grey">
			 <q-page class="page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm">

					<HeaderCountry/>

					<div class="page-internal container-md column items-start q-pt-md q-pb-md">
					 <q-form class="col-md-4 column items-start">
							<q-radio name="shape" v-model="shape" val="Russia" label="Россия" @click="selectCountry('Россия')" />
							<q-radio name="shape" v-model="shape" val="Belarus" label="Беларусь" @click="selectCountry('Беларусь')" />
							<q-radio name="shape" v-model="shape" val="Kazakhstan" label="Казахстан" @click="selectCountry('Казахстан')" />
							<q-radio name="shape" v-model="shape" val="Kyrgyzstan" label="Кыргызстан" @click="selectCountry('Кыргызстан')" />
							<q-radio name="shape" v-model="shape" val="Uzbekistan" label="Узбекистан" @click="selectCountry('Узбекистан')" />
					 </q-form>
					</div>
			 </q-page>
			</q-page-container>
	</q-layout>
	</template>

<style lang="scss">

</style>