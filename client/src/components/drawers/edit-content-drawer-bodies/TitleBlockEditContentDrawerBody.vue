<template>
    <InputUI v-model="form.title" label="ЗАГОЛОВОК" type="textarea" placeholder="Введите заголовок" />
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import { TitleBlockContent } from '@/types/pages';
import { defineComponent } from 'vue';

interface Data {
    form: TitleBlockContent;
}

export default defineComponent({
    name: 'TitleBlockEditContentDrawerBody',
    components: { InputUI },

    data(): Data {
        return {
            form: {
                title: '',
            },
        };
    },

    computed: {
        currentBlockContent(): TitleBlockContent {
            return this.$store.getters['drawers/getCurrentBlockContent'];
        },
    },

    mounted() {
        this.form = { ...this.currentBlockContent };
    },
});
</script>

<style lang="scss"></style>
