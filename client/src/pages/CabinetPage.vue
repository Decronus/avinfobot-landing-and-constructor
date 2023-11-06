<template>
    <div class="cabinet-page">
        <h1>Страницы</h1>

        <AddPageButton @click="openCreatePageModal" />
        <PageCard v-for="page in pages" :page="page" />

        <CreatePageModal />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageCard from '@/components/cabinet/PageCard.vue';
import AddPageButton from '@/components/cabinet/AddPageButton.vue';
import CreatePageModal from '@/components/modals/CreatePageModal.vue';
import { Page } from '@/types/pages';

export default defineComponent({
    name: 'CabinetPage',
    components: { PageCard, AddPageButton, CreatePageModal },

    computed: {
        pages(): Page[] {
            return this.$store.state.pages.pages;
        },
    },

    async mounted() {
        this.$store.dispatch('pages/getPages');
    },

    methods: {
        openCreatePageModal(): void {
            this.$store.commit('modals/toggleModal', 'CreatePageModal');
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
        border-bottom: 8px solid $primary-color;
        align-self: flex-start;
        margin-bottom: 32px;
    }
}
</style>
