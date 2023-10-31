<template>
    <div class="icon-wrap">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 22C6.20923 22 8 20.2091 8 18C8 15.7909 6.20923 14 4 14C1.79077 14 0 15.7909 0 18C0 20.2091 1.79077 22 4 22ZM22 18C22 20.2091 20.2092 22 18 22C15.7908 22 14 20.2091 14 18C14 15.7909 15.7908 14 18 14C20.2092 14 22 15.7909 22 18ZM36 18C36 20.2091 34.2092 22 32 22C29.7908 22 28 20.2091 28 18C28 15.7909 29.7908 14 32 14C34.2092 14 36 15.7909 36 18Z"
                fill="#494949"
            />
        </svg>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ThreeDotsIcon',
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';
</style>
