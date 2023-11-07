<template>
    <InputUI v-model="form.title" label="ЗАГОЛОВОК" type="textarea" placeholder="Введите заголовок" />
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TitleBlockEditContentDrawerBody',
    components: { InputUI },

    data() {
        return {
            form: {
                title: '',
            },
        };
    },
});
</script>

<style lang="scss"></style>
