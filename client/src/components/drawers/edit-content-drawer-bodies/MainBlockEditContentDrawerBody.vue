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
        pageLink(): string {
            return this.$route.params.pageLink as string;
        },
        currentBlockId(): string {
            return this.$store.state.drawers.currentBlock.id;
        },
        currentBlockContent(): MainBlockContent {
            return this.$store.getters['drawers/getCurrentBlockContent'];
        },
    },

    methods: {
        updateBlockContent(): void {
            this.$store.dispatch('pages/updateBlockContent', {
                pageLink: this.pageLink,
                blockId: this.currentBlockId,
                body: this.form,
            });
        },
        handleFileChange(event: Event): void {
            const fileInput = event.target as HTMLInputElement;
            const file = fileInput.files?.[0];
            if (file) {
                console.log('Выбранный файл:', file);
            }
        },
    },

    mounted() {
        if (this.currentBlockContent) {
            this.form = { ...this.currentBlockContent };
        }
    },
});
</script>

<style lang="scss"></style>
