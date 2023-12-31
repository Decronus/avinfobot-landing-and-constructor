<template>
    <div class="input-wrap">
        <span class="input-label">{{ label }}</span>

        <el-input
            :model-value="modelValue"
            @input="handleInput($event)"
            :type="type"
            :placeholder="placeholder"
            autosize
            :readonly="readonly"
        />

        <span class="input-error">{{ error }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InputUI',
    props: {
        modelValue: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            required: false,
            default: '',
        },
        type: {
            type: String,
            required: false,
            default: 'input',
        },
        placeholder: {
            type: String,
            required: false,
        },
        error: {
            type: String,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
    },

    methods: {
        handleInput(value: string) {
            this.$emit('update:modelValue', value);
            this.$emit('inputEdited');
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.input-wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .input-label {
        color: $secondary-text-color;
        font-size: 12px;
        text-transform: uppercase;
    }

    .el-textarea__inner,
    .el-input__wrapper {
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
        display: inline;
        background: none;

        input {
            color: $primary-text-color;
        }
    }
    .el-input__wrapper.is-focus {
        box-shadow: 0 0 0 0px $primary-color inset !important;
    }

    .input-error {
        font-size: 14px;
        color: $primary-color;
    }
}
</style>
