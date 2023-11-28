<template>
    <SwitchUI v-model="form.inverted" label="Инвертировать цвета" />
    <div class="switch-with-icon">
        <SwitchUI v-model="form.readNext" label="Кнопка «Читать далее»" />

        <el-tooltip
            class="box-item"
            effect="dark"
            content="Кнопка всегда будет невидима, несмотря на включенное состояние, если блок не первый"
            placement="top"
            style="width: 100px"
        >
            <InfoIcon />
        </el-tooltip>
    </div>
</template>

<script lang="ts">
import SwitchUI from '@/components/ui/SwitchUI.vue';
import InfoIcon from '@/components/icons/InfoIcon.vue';
import { defineComponent } from 'vue';
import EditSettingsDrawerBodyMixin from './EditSettingsDrawerBodyMixin';

export default defineComponent({
    name: 'MainBlockSettingsDrawerBody',
    components: { SwitchUI, InfoIcon },
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
