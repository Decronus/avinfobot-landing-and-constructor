<template>
    <div class="page-card add-page-card">
        <svg width="82" height="47" viewBox="0 0 82 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="82" height="47" fill="#F1F1F1" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M43 11H39V21H29V25H39V35H43V25H53V21H43V11Z"
                fill="#DBDBDB"
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
.add-page-card {
    align-items: center;
}
</style>
