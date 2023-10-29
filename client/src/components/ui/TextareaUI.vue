<template>
    <div class="textarea-wrap">
        <span class="textarea-label">{{ label }}</span>
        <el-input class="textarea" v-model="textarea" type="textarea" placeholder="Введите имя страницы" autosize />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TextareaUI',
    props: {
        label: {
            type: String,
            required: false,
            default: '',
        },
    },
    data() {
        return {
            textarea: 'asdfasdf',
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.textarea-wrap {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .textarea-label {
        color: $secondary-text-color;
        font-size: 16px;
    }

    .el-textarea__inner {
        outline: none;
        border: none;
        resize: none;
        font-size: 20px;
        border-bottom: 1px solid $secondary-text-color;
        padding: 0;
        padding-bottom: 6px;
        color: $primary-text-color;
        box-shadow: none;
        border-radius: 0;
    }
}
</style>
