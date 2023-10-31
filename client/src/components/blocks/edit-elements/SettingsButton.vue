<template>
    <ButtonUI text="Настройки" edit secondary rounded icon>
        <SettingsIcon />
    </ButtonUI>
</template>

<script lang="ts">
import ButtonUI from '@/components/ui/ButtonUI.vue';
import SettingsIcon from '@/components/icons/SettingsIcon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SettingsButton',
    components: { ButtonUI, SettingsIcon },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';
</style>
