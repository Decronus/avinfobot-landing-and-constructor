<template>
    <InputUI v-model="form.title" label="ЗАГОЛОВОК" type="textarea" placeholder="Введите заголовок" />
    <InputUI v-model="form.description" label="ОПИСАНИЕ" type="textarea" placeholder="Введите описание" />

    <SwitchUI v-model="form.action.active" label="Кнопка призыва к действию" />
    <InputUI
        v-if="form.action.active"
        v-model="form.action.text"
        label="ТЕКСТ ПРИЗЫВА К ДЕЙСТВИЮ"
        placeholder="Введите текст"
    />
    <InputUI
        v-if="form.action.active"
        v-model="form.action.link"
        label="ССЫЛКА ПРИЗЫВА К ДЕЙСТВИЮ"
        placeholder="Введите ссылку"
        :error="errors.link"
    />

    <UploadUI label="ФОНОВОЕ ИЗОБРАЖЕНИЕ" :image="currentBlockContent.images?.[0]" @upload="handleFileChange($event)" />
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
        prepareLink(): void {
            if (this.form.action.link.startsWith('http')) return;
            if (!this.form.action.link) return;
            this.form.action.link = 'https://' + this.form.action.link;
        },
        prepareBlockContent(): void {
            this.prepareLink();
        },
        handleFileChange(file: File): void {
            this.imagesChanged = true;
            if (file) {
                this.images[0] = file;
                console.log('Выбранный файл:', file);
            }
        },
        checkLink(link: string): boolean {
            const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;
            return urlRegex.test(link);
        },
    },

    watch: {
        'form.action.link'(value: string) {
            if (!value) return;

            if (this.checkLink(value)) {
                delete this.errors.link;
            } else {
                this.errors.link = 'Неправильная ссылка';
            }
        },
    },
});
</script>

<style lang="scss"></style>
