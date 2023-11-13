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
import { uploadImage } from '@/axios/api';

interface Data {
    form: TextWithImageBlockContent;
    bgImage: File | undefined;
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
