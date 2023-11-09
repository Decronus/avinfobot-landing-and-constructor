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
import { uploadImage } from '@/axios/api';

interface Data {
    form: MainBlockContent;
    bgImage: File | undefined;
}

export default defineComponent({
    name: 'MainBlockEditContentDrawerBody',
    components: { InputUI, SwitchUI, UploadUI },
    mixins: [EditContentDrawerBodyMixin],
    emits: ['imageChanged'],

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
            bgImage: undefined,
        };
    },

    methods: {
        async handleUpload(): Promise<void> {
            try {
                const form = new FormData();
                this.bgImage && form.append('image', this.bgImage);
                const res = await uploadImage(this.pageLink, this.currentBlockIndex, form);
                this.$store.commit('pages/updateBlockContent', {
                    blockIndex: this.currentBlockIndex,
                    content: res.data,
                });
            } catch (error: any) {
                console.error(error.response.data);
            }
        },

        handleFileChange(file: File): void {
            this.$emit('imageChanged');
            if (file) {
                this.bgImage = file;
                console.log('Выбранный файл:', file);
            }
        },
    },
});
</script>

<style lang="scss"></style>
