<template>
    <div class="icon-wrap">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64644 2.64645L5.46446 5.82843C5.2692 6.02369 5.2692 6.34027 5.46446 6.53553C5.65973 6.7308 5.97631 6.7308 6.17157 6.53553L9 3.70711L11.8284 6.53553C12.0237 6.7308 12.3403 6.7308 12.5355 6.53553C12.7308 6.34027 12.7308 6.02369 12.5355 5.82843L9.35355 2.64645ZM9.5 15L9.5 3L8.5 3L8.5 15L9.5 15Z"
                fill="black"
            />
        </svg>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ArrowIcon',
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';
</style>
