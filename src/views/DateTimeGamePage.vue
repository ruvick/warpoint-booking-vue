<script setup>

	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import HeaderDateTimeGame from '@/components/HeaderDateTimeGame.vue'; 

	const router = useRouter();

	const selectHeaderDateTimeGame = (title) => {
	const headerdatetimegame = `${title}`;
	sessionStorage.setItem('selectedHeaderDateTimeGame', headerdatetimegame);
	router.push({ name: 'main' });
};

</script>  

<template>
	<q-layout>
			<q-page-container class="my-page-container body--dark">
			 <q-page class="page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm"> 

					<HeaderDateTimeGame/>

					<div class="inner-block column items-start" style="width: 100%;">

						<div class="container-md q-pt-md q-pl-sm q-pr-sm"> 
							
							<div class="date-time-block col-xs-12 col-sm-6 col-md-4">
								<q-date
									v-model="date"
									:events="events"
									:event-color="(date) => date[9] % 2 === 0 ? 'teal' : 'orange'"
								/>
							</div>

						</div>

					</div>

			 </q-page>
			</q-page-container>
	</q-layout>
	</template>

<style lang="scss">

</style>