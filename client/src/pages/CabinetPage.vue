<template>
    <div class="cabinet-page">
        <h1>Страницы</h1>

        <AddPageButton @click="openCreatePageModal" />

        <template v-if="pages">
            <PageCard v-for="page in pagesSlice" :page="page" />
            <p v-if="!pages.length">Еще не создано ни одной страницы.</p>
        </template>
        <LoadingUI v-if="!pages" />

        <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[5, 10, 30, 50]"
            small
            background
            layout="sizes, prev, pager, next"
            :total="pages?.length"
        />

        <CreatePageModal />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageCard from '@/components/cabinet/PageCard.vue';
import AddPageButton from '@/components/cabinet/AddPageButton.vue';
import CreatePageModal from '@/components/modals/CreatePageModal.vue';
import LoadingUI from '@/components/ui/LoadingUI.vue';
import { Page } from '@/types/pages';

export default defineComponent({
    name: 'CabinetPage',
    components: { PageCard, AddPageButton, CreatePageModal, LoadingUI },

    data() {
        return {
            currentPage: 1,
            pageSize: 5,
        };
    },

    computed: {
        pages(): Page[] {
            return this.$store.state.pages.pages;
        },
        pagesSlice(): Page[] {
            return this.pages.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
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
