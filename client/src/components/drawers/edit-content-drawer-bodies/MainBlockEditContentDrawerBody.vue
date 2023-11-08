<template>
    <InputUI v-model="form.title" label="ЗАГОЛОВОК" type="textarea" placeholder="Введите заголовок" />
    <InputUI v-model="form.description" label="ОПИСАНИЕ" type="textarea" placeholder="Введите описание" />
    <InputUI v-model="form.action.text" label="ТЕКСТ ПРИЗЫВА К ДЕЙСТВИЮ" type="textarea" placeholder="Введите текст" />
    <InputUI
        v-model="form.action.link"
        label="ССЫЛКА ПРИЗЫВА К ДЕЙСТВИЮ"
        type="textarea"
        placeholder="Введите ссылку"
    />

    <input type="file" @change="handleFileChange" />
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import { defineComponent } from 'vue';
import { MainBlockContent } from '@/types/pages';
import EditContentDrawerBodyMixin from './EditContentDrawerBodyMixin';

interface Data {
    form: MainBlockContent;
}

export default defineComponent({
    name: 'MainBlockEditContentDrawerBody',
    components: { InputUI },
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
        handleFileChange(event: Event): void {
            const fileInput = event.target as HTMLInputElement;
            const file = fileInput.files?.[0];
            if (file) {
                console.log('Выбранный файл:', file);
            }
        },
    },
});
</script>

<style lang="scss"></style>
