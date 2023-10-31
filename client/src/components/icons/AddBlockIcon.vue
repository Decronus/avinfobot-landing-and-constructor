<template>
    <div class="add-block-icon">
        <div class="icon-wrap" style="cursor: pointer; z-index: 20">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="#222222" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5 15.5V21H15.5V15.5H21V14.5H15.5V9H14.5V14.5H9V15.5H14.5Z"
                    fill="white"
                />
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AddBlockIcon',
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.add-block-icon {
    opacity: 0;
    z-index: 20;
}
</style>
