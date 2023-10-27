import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CabinetPage from '@/pages/CabinetPage.vue';
import LandingPage from '@/pages/LandingPage.vue';
import LandingPageEdit from '@/pages/LandingPageEdit.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/lk',
        name: 'lk',
        component: CabinetPage,
    },

    {
        path: '/:pageName',
        name: 'landing-page',
        component: LandingPage,
    },

    {
        path: '/:pageName/edit',
        name: 'landing-page-edit',
        component: LandingPageEdit,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
