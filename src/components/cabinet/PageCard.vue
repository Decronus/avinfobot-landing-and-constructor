<template>
    <div class="page-card" @click="$router.push(page.link)">
        <img class="page-card__image" />

        <div class="page-card__content">
            <p class="page-card__name">{{ page.name }}</p>
            <p class="page-card__date">{{ page.created_at }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { Page } from '@/supabase/database.types';

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

<style lang="scss">
.page-card {
    width: 100%;
    display: flex;
    gap: 12px;
    cursor: pointer;
    transition: 0.1s ease-in-out;

    &:hover {
        transform: scale(1.005);
    }

    &__image {
        width: 82px;
        height: 47px;
        background: #ccc;
        flex-shrink: 0;
    }

    &__name {
        margin-top: -4px;
        margin-bottom: 8px;
    }

    &__date {
        font-size: 12px;
        color: #929292;
    }
}
</style>
