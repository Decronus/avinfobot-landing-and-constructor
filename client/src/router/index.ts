import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CabinetPage from '@/pages/CabinetPage.vue';
import LandingPage from '@/pages/LandingPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/pages',
        name: 'pages',
        component: CabinetPage,
    },

    {
        path: '/page/:pageLink',
        name: 'landing-page',
        component: LandingPage,
    },

    {
        path: '/page/:pageLink/edit',
        name: 'landing-page-edit',
        component: LandingPage,
    },

    {
        path: '/404',
        name: 'not-found',
        component: NotFoundPage,
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
