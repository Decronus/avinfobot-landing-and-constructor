import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import ZadatochnikiPage from '@/pages/ZadatochnikiPage.vue';
import CabinetPage from '@/pages/CabinetPage.vue';
import LandingPage from '@/pages/LandingPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        component: MainPage,
    },
    {
        path: '/faq/zadatochniki',
        name: 'zadatochniki',
        component: ZadatochnikiPage,
    },
    {
        path: '/constructor/pages',
        name: 'pages',
        component: CabinetPage,
    },

    {
        path: '/constructor/pages/:pageLink',
        name: 'landing-page-edit',
        component: LandingPage,
    },

    {
        path: '/pages/:pageLink',
        name: 'landing-page',
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
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;
