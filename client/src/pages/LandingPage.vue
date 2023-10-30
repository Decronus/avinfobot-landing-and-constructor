<template>
    <EditModeHeader v-if="isEditMode" />
    <MainBlock :editMode="isEditMode" />

    <EditContentDrawer />
</template>

<script lang="ts">
import MainBlock from '@/components/blocks/MainBlock.vue';
import EditModeHeader from '@/components/EditModeHeader.vue';
import EditContentDrawer from '@/components/drawers/EditContentDrawer.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LandingPage',
    components: { MainBlock, EditModeHeader, EditContentDrawer },

    computed: {
        isEditMode(): boolean {
            return this.$route.name === 'landing-page-edit';
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';
</style>
