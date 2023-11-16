<template>
    <InputUI
        v-for="(bullet, index) in form.bullets"
        v-model="form.bullets[index]"
        :label="`БУЛЛЕТ #${index + 1}`"
        type="textarea"
        placeholder="Введите текст"
    />
    <ButtonUI text="Добавить буллет" medium rounded @click="addBullet" />
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import { BulletsBlockContent } from '@/types/pages';
import { defineComponent } from 'vue';
import EditContentDrawerBodyMixin from './EditContentDrawerBodyMixin';

interface Data {
    form: BulletsBlockContent;
}

export default defineComponent({
    name: 'BulletBlockEditContentDrawerBody',
    components: { InputUI, ButtonUI },
    mixins: [EditContentDrawerBodyMixin],

    data(): Data {
        return {
            form: {
                bullets: [],
            },
        };
    },

    methods: {
        prepareBlockContent(): void {
            this.form.bullets = (this.form as BulletsBlockContent).bullets.filter((bullet) => bullet !== '');
        },
        addBullet(): void {
            this.form.bullets.push('');
        },
    },
});
</script>

<style lang="scss"></style>
