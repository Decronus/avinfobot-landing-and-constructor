<template>
    <div class="cabinet-page">
        <h1>Страницы</h1>

        <PageCard v-for="page in pages" :page="page" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageCard from '@/components/cabinet/PageCard.vue';
import { getPages } from '@/supabase/endpoints';
import { Page } from '@/supabase/database.types';

interface Data {
    pages: Page[];
}

export default defineComponent({
    name: 'CabinetPage',
    components: { PageCard },

    data(): Data {
        return {
            pages: [],
        };
    },

    async mounted() {
        const res = await getPages();
        if (res) this.pages = res;
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
