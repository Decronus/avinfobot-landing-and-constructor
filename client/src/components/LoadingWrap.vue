<template>
    <div class="loading-wrap">
        <LoadingUI />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoadingUI from '@/components/ui/LoadingUI.vue';

export default defineComponent({
    name: 'LoadingWrap',
    components: { LoadingUI },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.loading-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}
</style>
