<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/components/Header.vue';
import CardService from '@/components/Cards/CardService.vue';

// Инициализация роутера для навигации
const router = useRouter();

// Функция для выбора услуг
const selectServices = (title) => {
  // Формирование строки услуг
  const services = title; 
  
  // Сохранение выбранных услуг в sessionStorage
  sessionStorage.setItem('selectedServices', services);
  
  // Перенаправление на страницу 'main'
  router.push({ name: 'main' });
};
</script>

<template>
<q-layout>
    <q-page-container class="my-page-container body--grey">
     <q-page class="page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm">
        <Header />
        <div class="activity-inner column items-start" style="width: 100%;">
         <div class="container-md q-pt-md q-pl-sm q-pr-sm">
            <div class="services-cards row q-pt-md q-pb-md">
             <CardService
                imageSrc="../src/assets/img/services/01.png"
                imageAlt="Изображение карточки"
                title="Открытая игра"
                subtitle="Оплата за игрока"
                time="60 мин"
                quantity="2-10 Человек"
                price="1 300"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/02.png"
                imageAlt="Изображение карточки"
                title="Игра компанией"
                subtitle="Оплата за компанию"
                time="60 мин"
                quantity="2-10 Человек"
                price="6 000"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/03.png"
                imageAlt="Изображение карточки"
                title="Oculus Quest 2"
                subtitle="Оплата за игрока"
                time="60 мин"
                quantity="2-10 Человек"
                price="1 000"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/04.png"
                imageAlt="Изображение карточки"
                title="Oculus Quest 3"
                subtitle="Оплата за игрока"
                time="60 мин"
                quantity="2-10 Человек"
                price="1 000"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/05.png"
                imageAlt="Изображение карточки"
                title="Valve Index"
                subtitle="Оплата за игрока"
                time="60 мин"
                quantity="2-10 Человек"
                price="1 200"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/06.png"
                imageAlt="Изображение карточки"
                title="Oculus Rift S"
                subtitle="Оплата за игрока"
                time="60 мин"
                quantity="1-2 Человек"
                price="1 000"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/07.png"
                imageAlt="Изображение карточки"
                title="HTC Vive Pro"
                subtitle="Оплата за игрока"
                time="60 мин"
                quantity="1-2 Человек"
                price="1 200"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/08.png"
                imageAlt="Изображение карточки"
                title="VR-Zone"
                subtitle="Оплата за игрока"
                time="1 час 45 мин"
                quantity="до 8 Человек"
                price="9 900"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/09.png"
                imageAlt="Изображение карточки"
                title="Lite"
                subtitle="Оплата за игрока"
                time="1 час 45 мин"
                quantity="до 10 Человек"
                price="14 900"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/10.png"
                imageAlt="Изображение карточки"
                title="Standard"
                subtitle="Оплата за игрока"
                time="2 час 45 мин"
                quantity="до 15 Человек"
                price="19 900"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/11.png"
                imageAlt="Изображение карточки"
                title="Max"
                subtitle="Оплата за игрока"
                time="3 час 45 мин"
                quantity="до 20 Человек"
                price="25 900"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/12.png"
                imageAlt="Изображение карточки"
                title="Max+"
                subtitle="Оплата за игрока"
                time="3 час 45 мин"
                quantity="до 20 Человек"
                price="42 900"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/13.png"
                imageAlt="Изображение карточки"
                title="VIP"
                subtitle="Оплата за игрока"
                time="4 час 45 мин"
                quantity="до 25 Человек"
                price="49 900"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/14.png"
                imageAlt="Изображение карточки"
                title="Start"
                subtitle="Оплата за игрока"
                time="1 час 45 мин"
                quantity="до 8 Человек"
                price="12 900"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/15.png"
                imageAlt="Изображение карточки"
                title="Medium"
                subtitle="Оплата за игрока"
                time="1 час 45 мин"
                quantity="до 10 Человек"
                price="24 900"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/16.png"
                imageAlt="Изображение карточки"
                title="Big"
                subtitle="Оплата за игрока"
                time="2 час 45 мин"
                quantity="до 15 Человек"
                price="40 900"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/17.png"
                imageAlt="Изображение карточки"
                title="Mini"
                subtitle="Оплата за игрока"
                time="1 час 45 мин"
                quantity="до 8 Человек"
                price="12 900"
                btn="Подробнее"
                @select="selectServices"
             />
             <CardService
                imageSrc="../src/assets/img/services/18.png"
                imageAlt="Изображение карточки"
                title="Mega"
                subtitle="Оплата за игрока"
                time="1 час 45 мин"
                quantity="до 10 Человек"
                price="24 900"
                btn="Подробнее"
                @select="selectServices"
             />
            </div>
         </div>
        </div>
     </q-page>
    </q-page-container>
</q-layout>
</template>


<style lang="scss">

	.services-card-column {
			padding: 4px;
		}

</style>