<template>
    <InputUI v-model="form.title" label="ЗАГОЛОВОК" type="textarea" placeholder="Введите заголовок" />

    <UploadUI label="ФОНОВОЕ ИЗОБРАЖЕНИЕ" :image="currentBlockContent.images?.[0]" @upload="handleFileChange($event)" />
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import UploadUI from '@/components/ui/UploadUI.vue';
import { defineComponent } from 'vue';
import { TitleWithBgBlockContent } from '@/types/pages';
import EditContentDrawerBodyMixin from './EditContentDrawerBodyMixin';

interface Data {
    form: TitleWithBgBlockContent;
}

export default defineComponent({
    name: 'TitleWithBgBlockEditContentDrawerBody',
    components: { InputUI, UploadUI },
    mixins: [EditContentDrawerBodyMixin],
    emits: ['imagesChanged'],

    data(): Data {
        return {
            form: {
                title: '',
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
