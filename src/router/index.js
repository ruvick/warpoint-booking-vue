import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
			path: '/',
			name: 'main',
			component: () => import('../views/Main.vue')
	},
	{
			path: '/country',
			name: 'country',
			component: () => import('../views/CountryPage.vue')
	},
	{
		path: '/city',
		name: 'city',
		component: () => import('../views/CityPage.vue')
	},
	{
		path: '/location',
		name: 'location',
		component: () => import('../views/LocationPage.vue')
	},
	{
		path: '/activity',
		name: 'activity',
		component: () => import('../views/ActivityPage.vue')
	},
	{
		path: '/services',
		name: 'services',
		component: () => import('../views/ServicesPage.vue')
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;