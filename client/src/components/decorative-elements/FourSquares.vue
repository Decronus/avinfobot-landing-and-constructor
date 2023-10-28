<template>
    <div class="decorative-element">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H8V8H0V0ZM8 18H0V26H8V18ZM26 18H18V26H26V18ZM26 0H18V8H26V0Z"
                fill="#C0291C"
            />
        </svg>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FourSquares',
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';
</style>
