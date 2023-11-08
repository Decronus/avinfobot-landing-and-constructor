<template>
    <InputUI v-model="form.title" label="ЗАГОЛОВОК" type="textarea" placeholder="Введите заголовок" />
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import { TitleBlockContent } from '@/types/pages';
import { defineComponent } from 'vue';
import EditContentDrawerBodyMixin from './EditContentDrawerBodyMixin';

interface Data {
    form: TitleBlockContent;
}

export default defineComponent({
    name: 'TitleBlockEditContentDrawerBody',
    components: { InputUI },
    mixins: [EditContentDrawerBodyMixin],

    data(): Data {
        return {
            form: {
                title: '',
            },
        };
    },
});
</script>

<style lang="scss"></style>
