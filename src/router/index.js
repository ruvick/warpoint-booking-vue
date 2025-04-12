import { createRouter, createWebHashHistory } from 'vue-router';  // Используем createWebHashHistory

// Определение маршрутов приложения
const routes = [
	{
		path: '/',
		name: 'authorization',
		component: () => import('../views/Login.vue'), // Страница авторизации
	},
	{
		path: '/registrstages/:label?',
		name: 'registrstages',
		component: () => import('../views/RegistrStages.vue'), // Страница регистрации
	},
	{
		path: '/logingame/:label?',
		name: 'logingame',
		component: () => import('../views/LoginGame.vue'), // Страница входа в игру
	},
	{
		path: '/authgame/:label?',
		name: 'authgame',
		component: () => import('../views/AuthGame.vue'), // Страница авторизации в игру
	},
	{
		path: '/main/:label?',
		name: 'main',
		component: () => import('../views/Main.vue'), // Главная страница
	},
	{
		path: '/country/:label?',
		name: 'country',
		component: () => import('../views/CountryPage.vue'), // Страница страны
	},
	{
		path: '/city/:label?',
		name: 'city',
		component: () => import('../views/CityPage.vue'), // Страница города
	},
	{
		path: '/location/:label?',
		name: 'location',
		component: () => import('../views/LocationPage.vue'), // Страница локации
	},
	{
		path: '/activity/:label?',
		name: 'activity',
		component: () => import('../views/ActivityPage.vue'), // Страница активности
	},
	{
		path: '/services/:label?',
		name: 'services',
		component: () => import('../views/ServicesPage.vue'), // Страница услуг
	},
	{
		path: '/tarif/:label?',
		name: 'tarif',
		component: () => import('../views/TarifPage.vue'), // Страница тарифов
	},
	{
		path: '/dategame/:label?',
		name: 'dategame',
		component: () => import('../views/DateTimeGamePage.vue'), // Страница игры с датами
	},
	{
		path: '/giftcert/:label?',
		name: 'giftcert',
		component: () => import('../views/GiftCertificate.vue'), // Страница подарочных сертификатов
	},
	{
		path: '/booking/:label?',
		name: 'booking',
		component: () => import('../views/BokingPage.vue'), // Страница бронирования
	},
	{
		path: '/auth/:label?',
		name: 'auth',
		component: () => import('../views/AuthPage.vue'), // Страница авторизации
	},
	{
		path: '/policytext/:label?',
		name: 'policytext',
		component: () => import('../views/PolicyText.vue'), // Страница конфиденциальности
	},
];

// Создание экземпляра маршрутизатора с использованием hash истории
const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL), // Использование hash history
	routes, // Определенные маршруты
});

// Экспорт маршрутизатора для использования в приложении
export default router;
