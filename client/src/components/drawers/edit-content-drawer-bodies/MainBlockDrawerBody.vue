<template>
    <InputUI v-model="form.title" label="ЗАГОЛОВОК" type="textarea" placeholder="Введите заголовок" />
    <InputUI v-model="form.subtitle" label="ОПИСАНИЕ" type="textarea" placeholder="Введите описание" />
    <InputUI v-model="form.action.text" label="ТЕКСТ ПРИЗЫВА К ДЕЙСТВИЮ" type="textarea" placeholder="Введите текст" />
    <InputUI
        v-model="form.action.link"
        label="ССЫЛКА ПРИЗЫВА К ДЕЙСТВИЮ"
        type="textarea"
        placeholder="Введите ссылку"
    />
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MainBlockEditContentDrawerBody',
    components: { InputUI },

    data() {
        return {
            form: {
                title: '',
                subtitle: '',
                action: {
                    text: '',
                    link: '',
                },
            },
        };
    },
});
</script>

<style lang="scss"></style>
