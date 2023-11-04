<template>
    <SwitchUI v-model="form.inverted" label="Инвертировать цвета" />
</template>

<script lang="ts">
import SwitchUI from '@/components/ui/SwitchUI.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DefaultSettingsDrawerBody',
    components: { SwitchUI },

    data() {
        return {
            form: {
                inverted: false,
            },
        };
    },
});
</script>

<style lang="scss"></style>
