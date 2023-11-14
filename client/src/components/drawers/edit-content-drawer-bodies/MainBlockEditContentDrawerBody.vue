<template>
    <InputUI v-model="form.title" label="ЗАГОЛОВОК" type="textarea" placeholder="Введите заголовок" />
    <InputUI v-model="form.description" label="ОПИСАНИЕ" type="textarea" placeholder="Введите описание" />

    <SwitchUI v-model="form.action.active" label="Кнопка призыва к действию" />
    <InputUI
        v-if="form.action.active"
        v-model="form.action.text"
        label="ТЕКСТ ПРИЗЫВА К ДЕЙСТВИЮ"
        type="textarea"
        placeholder="Введите текст"
    />
    <InputUI
        v-if="form.action.active"
        v-model="form.action.link"
        label="ССЫЛКА ПРИЗЫВА К ДЕЙСТВИЮ"
        type="textarea"
        placeholder="Введите ссылку"
    />

    <UploadUI label="ФОНОВОЕ ИЗОБРАЖЕНИЕ" @upload="handleFileChange($event)" />
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import SwitchUI from '@/components/ui/SwitchUI.vue';
import UploadUI from '@/components/ui/UploadUI.vue';
import { defineComponent } from 'vue';
import { MainBlockContent } from '@/types/pages';
import EditContentDrawerBodyMixin from './EditContentDrawerBodyMixin';

interface Data {
    form: MainBlockContent;
}

export default defineComponent({
    name: 'MainBlockEditContentDrawerBody',
    components: { InputUI, SwitchUI, UploadUI },
    mixins: [EditContentDrawerBodyMixin],
    emits: ['imagesChanged'],

    data(): Data {
        return {
            form: {
                title: '',
                description: '',
                action: {
                    active: true,
                    text: '',
                    link: '',
                },
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
