<template>
    <ButtonUI edit secondary>
        <ArrowIcon />
    </ButtonUI>
</template>

<script lang="ts">
import ButtonUI from '@/components/ui/ButtonUI.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MoveBlockUpButton',
    components: { ButtonUI, ArrowIcon },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';
</style>
