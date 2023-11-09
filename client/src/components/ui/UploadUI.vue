<template>
    <div class="input-wrap">
        <input class="native-file-input" type="file" @change="handleFileChange" ref="fileInput" />

        <span class="input-label">{{ label }}</span>
        <ButtonUI text="Загрузить" medium rounded @click="handleClick" />
        <span class="file-name">{{ fileName }}</span>
    </div>
</template>

<script lang="ts">
import ButtonUI from './ButtonUI.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'UploadUI',
    components: { ButtonUI },
    emits: ['upload'],

    props: {
        label: {
            type: String,
        },
    },

    data() {
        return {
            fileName: '',
        };
    },

    methods: {
        handleFileChange(event: Event): void {
            const fileInput = event.target as HTMLInputElement;
            const file = fileInput.files?.[0];
            if (file) {
                this.$emit('upload', file);
                this.fileName = file.name;
            }
        },
        handleClick(): void {
            const fileInput = this.$refs.fileInput as HTMLInputElement;
            fileInput && fileInput.click();
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.input-wrap {
    .native-file-input {
        position: absolute;
        left: -9999px;
        top: -99999px;
        opacity: 0;
    }

    .file-name {
        font-size: 12px;
        font-weight: 600;
    }
}
</style>
