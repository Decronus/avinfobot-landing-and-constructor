<template>
    <div
        class="page-card"
        :class="{ 'page-card__disabled': loading }"
        @click="$router.push(`/constructor/pages/${page.link}/edit`)"
    >
        <div class="page-card__header">
            <span class="page-card__date">{{ formatDateTime(page.createdAt as string) }}</span>
            <span class="page-card__delete" @click.stop="handleDeletePage(page.link)">Удалить</span>
        </div>

        <p class="page-card__name">{{ page.name }}</p>

        <LoadingWrap v-if="loading" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { Page } from '@/types/pages';
import LoadingWrap from '@/components/LoadingWrap.vue';

export default defineComponent({
    name: 'PageCard',
    components: { LoadingWrap },
    props: {
        page: {
            type: Object as PropType<Page>,
            required: true,
        },
    },

    data() {
        return {
            loading: false,
        };
    },

    methods: {
        formatDateTime(inputDate: string) {
            const date = new Date(inputDate);
            const day = date.getDate().toString().padStart(2, '0'); // День
            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяц (с учетом, что месяцы начинаются с 0)
            const year = date.getFullYear();
            const hours = date.getHours().toString().padStart(2, '0'); // Часы
            const minutes = date.getMinutes().toString().padStart(2, '0'); // Минуты

            return `${day}.${month}.${year} в ${hours}:${minutes}`;
        },
        async handleDeletePage(pageLink: string): Promise<void> {
            try {
                this.loading = true;
                await this.$store.dispatch('pages/deletePage', pageLink);
                this.loading = false;
            } catch (error: any) {
                this.loading = false;
                console.error(error.response.data);
            }
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.page-card {
    position: relative;
    padding: 16px;
    cursor: pointer;
    position: relative;
    transition: 0.2s ease-in-out;
    background: #fff;
    border-radius: 6px;

    &:hover {
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
    }

    &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        .page-card__date {
            font-size: 12px;
            font-weight: 600;
            color: $secondary-text-color;
        }

        .page-card__delete {
            font-size: 12px;
            font-weight: 600;

            &:hover {
                color: $primary-color;
            }
        }
    }

    .page-card__name {
        font-size: 24px;
        font-weight: 500;
        color: $primary-color;
    }

    .loading-wrap {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
    }
}

.page-card__disabled {
    pointer-events: none;
}
</style>
