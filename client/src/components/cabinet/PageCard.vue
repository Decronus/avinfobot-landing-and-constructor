<template>
    <div class="page-card" @click="$router.push(`${page.link}/edit`)">
        <div class="page-card__image-block">
            <img class="page-card__image" />
            <span class="page-card__delete" @click.stop="handleDeletePage(page.link)">Удалить</span>
        </div>

        <div class="page-card__content">
            <div>
                <p class="page-card__name">{{ page.name }}</p>
                <p class="page-card__date">{{ page.createdAt }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { Page } from '@/types/pages';

export default defineComponent({
    name: 'PageCard',
    props: {
        page: {
            type: Object as PropType<Page>,
            required: true,
        },
    },

    methods: {
        async handleDeletePage(pageLink: string): Promise<void> {
            try {
                await this.$store.dispatch('pages/deletePage', pageLink);
            } catch (error: any) {
                console.error(error.response.data);
            }
        },
    },
});
</script>

<style lang="scss"></style>
