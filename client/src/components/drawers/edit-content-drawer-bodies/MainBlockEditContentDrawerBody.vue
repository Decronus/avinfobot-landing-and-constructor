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
import { Drawer } from '@/store/drawers';

interface Data {
    form: MainBlockContent;
}

export default defineComponent({
    name: 'MainBlockEditContentDrawerBody',
    components: { InputUI },

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

    computed: {
        currentBlockContent(): MainBlockContent {
            return this.$store.state.pages.currentPage;
        },
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

    mounted() {
        // this.form = { ...this.currentPageContent };
        console.log(this.currentBlockContent);
    },

    // watch: {
    //     '$store.state.drawers.openedDrawers'(newValue: Drawer[], oldValue: Drawer[]) {
    //         console.log('oldValue', oldValue);
    //         console.log('newValue', newValue);
    //     },
    // },
});
</script>

<style lang="scss"></style>
