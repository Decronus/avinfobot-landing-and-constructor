<template>
    <template v-for="(input, index) in 3" :key="index">
        <UploadUI
            :label="`ИЗОБРАЖЕНИЕ #${index + 1}`"
            :image="(currentBlockContent as GalleryWithTextBlockContent).images?.[index]"
            @upload="handleFileChange($event, index)"
        />
        <InputUI
            v-model="form.texts[index]"
            :label="`ТЕКСТ К ИЗОБРАЖЕНИЮ #${index + 1}`"
            type="textarea"
            placeholder="Введите текст"
        />
    </template>
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import SwitchUI from '@/components/ui/SwitchUI.vue';
import UploadUI from '@/components/ui/UploadUI.vue';
import { defineComponent } from 'vue';
import { GalleryWithTextBlockContent } from '@/types/pages';
import EditContentDrawerBodyMixin from './EditContentDrawerBodyMixin';

interface Data {
    form: GalleryWithTextBlockContent;
}

export default defineComponent({
    name: 'GalleryWithTextBlockEditContentDrawerBody',
    components: { InputUI, SwitchUI, UploadUI },
    mixins: [EditContentDrawerBodyMixin],

    data(): Data {
        return {
            form: {
                texts: [],
            },
        };
    },

    methods: {
        handleFileChange(file: File, index: number): void {
            this.imagesChanged = true;
            if (file) {
                this.images[index] = file;
                console.log('Выбранный файл:', file);
            }
        },
    },
});
</script>

<style lang="scss"></style>
