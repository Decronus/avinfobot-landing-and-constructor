<template>
    <InputUI v-model="form.text" label="АБЗАЦ" type="textarea" placeholder="Введите текст" />

    <UploadUI label="ИЗОБРАЖЕНИЕ" @upload="handleFileChange($event)" />
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import SwitchUI from '@/components/ui/SwitchUI.vue';
import UploadUI from '@/components/ui/UploadUI.vue';
import { defineComponent } from 'vue';
import { TextWithImageBlockContent } from '@/types/pages';
import EditContentDrawerBodyMixin from './EditContentDrawerBodyMixin';

interface Data {
    form: TextWithImageBlockContent;
}

export default defineComponent({
    name: 'TextWithImageBlockEditContentDrawerBody',
    components: { InputUI, SwitchUI, UploadUI },
    mixins: [EditContentDrawerBodyMixin],
    emits: ['imageChanged'],

    data(): Data {
        return {
            form: {
                text: '',
            },
        };
    },

    methods: {
        handleFileChange(file: File): void {
            this.imagesChanged = true;
            if (file) {
                this.images[0] = file;
                console.log('Выбранный файл:', file);
            }
        },
    },
});
</script>

<style lang="scss"></style>
