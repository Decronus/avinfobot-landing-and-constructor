<template>
    <SwitchUI v-model="form.inverted" label="Инвертировать цвета" />
    <SwitchUI v-model="form.readNext" label="Кнопка «Читать далее»" />
</template>

<script lang="ts">
import SwitchUI from '@/components/ui/SwitchUI.vue';
import { defineComponent } from 'vue';
import EditSettingsDrawerBodyMixin from './EditSettingsDrawerBodyMixin';

export default defineComponent({
    name: 'MainBlockSettingsDrawerBody',
    components: { SwitchUI },
    mixins: [EditSettingsDrawerBodyMixin],

    data() {
        return {
            form: {
                inverted: false,
                readNext: true,
            },
        };
    },
});
</script>

<style lang="scss"></style>
