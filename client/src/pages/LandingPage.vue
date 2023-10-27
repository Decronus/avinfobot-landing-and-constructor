<template>
    <MainBlock />
</template>

<script lang="ts">
import MainBlock from '@/components/blocks/MainBlock.vue';
import EditModeHeader from '@/components/EditModeHeader.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LandingPage',
    components: { MainBlock, EditModeHeader },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';
</style>
