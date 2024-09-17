<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { fetchCountries } from '@/api/countries';
import Header from '@/components/Header.vue';

const router = useRouter();
const shape = ref('');
const countries = ref([]);

const selectCountry = (country) => {
    sessionStorage.setItem('selectedCountry', country.name);
    sessionStorage.setItem('selectedCountryFlag', country.flag);
    sessionStorage.setItem('selectedPhoneMask', country.phoneMask);
    router.push({ name: 'main' });
};

onMounted(async () => {
    try {
        countries.value = await fetchCountries();
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
});
</script>

<template>
<q-layout>
    <q-page-container class="my-page-container body--grey">
     <q-page class="page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm">
        <Header />
        <div class="page-internal container-md column items-start q-pt-md q-pb-md">
         <q-form class="col-md-4 column items-start">
            <q-radio
             v-for="country in countries"
             :key="country.name"
             name="shape"
             v-model="shape"
             :val="country.name"
             :label="country.name"
             @click="selectCountry(country)"
            >
             <template v-slot:label>
                <img :src="country.flag" alt="" style="width: 20px; height: 15px; margin-right: 8px;" />
                {{ country.name }}
             </template>
            </q-radio>
         </q-form>
        </div>
     </q-page>
    </q-page-container>
</q-layout>
</template>

<style lang="scss">

</style>