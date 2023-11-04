<template>
    <ButtonUI edit secondary>
        <ArrowIcon style="transform: rotate(180deg)" />
    </ButtonUI>
</template>

<script lang="ts">
import ButtonUI from '@/components/ui/ButtonUI.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MoveBlockDownButton',
    components: { ButtonUI, ArrowIcon },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';
</style>
