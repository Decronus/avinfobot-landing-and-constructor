<template>
    <div class="page-card" @click="$router.push(`${page.link}/edit`)">
        <img class="page-card__image" />

        <div class="page-card__content">
            <p class="page-card__name">{{ page.name }}</p>
            <p class="page-card__date">{{ page.createdAt }}</p>
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
});
</script>

<style lang="scss"></style>
