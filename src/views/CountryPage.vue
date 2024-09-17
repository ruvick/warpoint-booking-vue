<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Header from '@/components/Header.vue';

// Инициализация переменных
const router = useRouter();
const shape = ref('');
const countries = ref([]);

// Функция для выбора страны и сохранения данных в sessionStorage
const selectCountry = (country) => {
sessionStorage.setItem('selectedCountry', country.name);
sessionStorage.setItem('selectedCountryFlag', country.flag);
sessionStorage.setItem('selectedPhoneMask', country.phoneMask);
router.push({ name: 'main' });
};

// Функция для получения списка стран
const fetchCountries = async () => {
try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countryList = response.data.map(country => ({
     name: country.translations.rus.common,
     flag: country.flags.svg,
     phoneMask: getPhoneMask(country.cca2) // Получаем маску телефона по коду страны
    }));

    // Фильтруем нужные страны
    countries.value = countryList.filter(country =>
     ['Россия', 'Беларусь', 'Казахстан', 'Кыргызстан', 'Узбекистан'].includes(country.name)
    );
} catch (error) {
    console.error('Error fetching countries:', error);
}
};

// Функция для получения маски телефона по коду страны
const getPhoneMask = (countryCode) => {
const phoneMasks = {
    RU: '+7(###) - ### - ## - ##',
    BY: '+375(##) - ### - ## - ##',
    KZ: '+7(###) - ### - ## - ##',
    KG: '+996(###) - ### - ## - ##',
    UZ: '+998(##) - ### - ## - ##'
};
return phoneMasks[countryCode] || '+#(###) - ### - ## - ##';
};

// Выполняем fetchCountries при монтировании компонента
onMounted(() => {
fetchCountries();
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