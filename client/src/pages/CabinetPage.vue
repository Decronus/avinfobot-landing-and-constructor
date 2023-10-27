<template>
    <div class="cabinet-page">
        <h1>Страницы</h1>

        <AddPageCard @click="openAddPageModal" />
        <PageCard v-for="page in pages" :page="page" />

        <AddPageModal />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageCard from '@/components/cabinet/PageCard.vue';
import AddPageCard from '@/components/cabinet/AddPageCard.vue';
import AddPageModal from '@/components/modals/AddPageModal.vue';
import { getPages } from '@/axios/api';
import { Page } from '@/types/pages';

interface Data {
    pages: Page[];
}

export default defineComponent({
    name: 'CabinetPage',
    components: { PageCard, AddPageCard, AddPageModal },

    data(): Data {
        return {
            pages: [],
        };
    },

    async mounted() {
        const res = await getPages();
        console.log('res', res.data);
        if (res) this.pages = res.data;
    },

    methods: {
        openAddPageModal(): void {
            this.$store.commit('modals/toggleModal', 'AddPageModal');
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.cabinet-page {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 80px calc(50% - 384px);

    @media (max-width: 808px) {
        padding-left: 20px;
        padding-right: 20px;
    }

    h1 {
        font-size: 36px;
        border-bottom: 8px solid $mainRed;
        align-self: flex-start;
        margin-bottom: 32px;
    }
}
</style>
