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
}
];

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
});

export default router;