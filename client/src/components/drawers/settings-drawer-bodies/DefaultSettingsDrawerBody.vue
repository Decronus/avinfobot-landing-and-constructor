<template>
    <SwitchUI v-model="form.inverted" label="Инвертировать цвета" />
</template>

<script lang="ts">
import SwitchUI from '@/components/ui/SwitchUI.vue';
import { defineComponent } from 'vue';
import EditSettingsDrawerBodyMixin from './EditSettingsDrawerBodyMixin';

export default defineComponent({
    name: 'DefaultSettingsDrawerBody',
    components: { SwitchUI },
    mixins: [EditSettingsDrawerBodyMixin],

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
