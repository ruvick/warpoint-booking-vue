import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'main',
		component: () => import('../views/Main.vue')  
	},
	{
		path: '/country/:label?',
		name: 'country',
		component: () => import('../views/CountryPage.vue')
	},
	{
		path: '/city/:label?',
		name: 'city',
		component: () => import('../views/CityPage.vue')
	},
	{
		path: '/location/:label?',
		name: 'location',
		component: () => import('../views/LocationPage.vue')
	},
	{
		path: '/activity/:label?',
		name: 'activity',
		component: () => import('../views/ActivityPage.vue')
	},
	{
		path: '/services/:label?',
		name: 'services',
		component: () => import('../views/ServicesPage.vue')
	},
	{
		path: '/tarif/:label?',
		name: 'tarif',
		component: () => import('../views/TarifPage.vue')
	},
	{
		path: '/dategame/:label?',
		name: 'dategame',
		component: () => import('../views/DateTimeGamePage.vue')
	},
	{
		path: '/giftcert/:label?',
		name: 'giftcert',
		component: () => import('../views/GiftCertificate.vue')
	},
	{
		path: '/booking/:label?',
		name: 'booking',
		component: () => import('../views/BokingPage.vue')
	},
	{
		path: '/auth/:label?',
		name: 'auth',
		component: () => import('../views/AuthPage.vue')
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;