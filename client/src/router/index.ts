import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CabinetPage from '@/pages/CabinetPage.vue';
import LandingPage from '@/pages/LandingPage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/pages',
        name: 'pages',
        component: CabinetPage,
    },

    {
        path: '/:pageLink',
        name: 'landing-page',
        component: LandingPage,
    },

    {
        path: '/:pageLink/edit',
        name: 'landing-page-edit',
        component: LandingPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
