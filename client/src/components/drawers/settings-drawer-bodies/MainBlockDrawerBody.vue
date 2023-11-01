<template>
    <SwitchUI v-model="form.inverted" label="Инвертировать цвета" />
    <SwitchUI v-model="form.readNext" label="Кнопка «Читать далее»" />
</template>

<script lang="ts">
import SwitchUI from '@/components/ui/SwitchUI.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MainBlockDrawerBody',
    components: { SwitchUI },

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
