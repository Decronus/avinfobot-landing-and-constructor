<template>
    <div class="switch-wrap">
        <el-switch
            :model-value="modelValue"
            @input="$emit('update:modelValue', $event)"
            style="--el-switch-on-color: #c0291c"
        />
        <span class="switch-label">{{ label }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SwitchUI',
    props: {
        modelValue: {
            type: Boolean,
            required: false,
        },
        label: {
            type: String,
            required: false,
            default: '',
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.switch-wrap {
    display: flex;
    align-items: center;
    gap: 8px;

    .switch-label {
        color: $secondary-text-color;
        font-size: 12px;
        text-transform: uppercase;
    }
}
</style>
