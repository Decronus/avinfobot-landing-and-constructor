<template>
    <div class="page-card add-page-card">
        <svg width="82" height="47" viewBox="0 0 82 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 1H76C78.7614 1 81 3.23858 81 6V41C81 43.7614 78.7614 46 76 46H6C3.23858 46 1 43.7614 1 41V6C1 3.23858 3.23858 1 6 1ZM0 6C0 2.68629 2.68629 0 6 0H76C79.3137 0 82 2.68629 82 6V41C82 44.3137 79.3137 47 76 47H6C2.68629 47 0 44.3137 0 41V6ZM39.6667 15H42.3333V21.6667H49V24.3333H42.3333V31H39.6667V24.3333H33V21.6667H39.6667V15Z"
                fill="#C0291C"
            />
        </svg>

        <div class="page-card__content">
            <p class="page-card__name" style="margin-bottom: 2px">Создать страницу</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AddPageCard',
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.add-page-card {
    align-items: center;

    .page-card__name {
        color: $primary-color;
    }
}
</style>
