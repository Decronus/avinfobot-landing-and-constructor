<template>
    <button class="button">Призыв к действию</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ButtonUI',
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.button {
    padding: 18px 40px;
    background: $primary-color;
    outline: none;
    border: none;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.1s ease-in-out;

    &:hover {
        transform: scale(1.025);
    }
}
</style>
