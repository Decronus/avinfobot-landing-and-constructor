<template>
    <InputUI v-model="form.title" label="ЗАГОЛОВОК" type="textarea" placeholder="Введите заголовок" />
    <InputUI v-model="form.text" label="ТЕКСТ" type="textarea" placeholder="Введите текст" />
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import { TitleWithTextBlockContent } from '@/types/pages';
import { defineComponent } from 'vue';
import EditContentDrawerBodyMixin from './EditContentDrawerBodyMixin';

interface Data {
    form: TitleWithTextBlockContent;
}

export default defineComponent({
    name: 'TitleWithTextBlockEditContentDrawerBody',
    components: { InputUI },
    mixins: [EditContentDrawerBodyMixin],

    data(): Data {
        return {
            form: {
                title: '',
                text: '',
            },
        };
    },
});
</script>

<style lang="scss"></style>
