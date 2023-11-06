<template>
    <div class="add-page__button">
        <span>+</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AddPageButton',
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.add-page__button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 100%;
    cursor: pointer;
    color: $primary-color;
    border-radius: 6px;
    border: 1px solid $primary-color;

    &:hover {
        opacity: 0.8;
    }

    span {
        font-size: 32px;
        line-height: 100%;
        font-weight: 600;
        margin-top: -2px;
        color: $primary-color;
    }
}
</style>
