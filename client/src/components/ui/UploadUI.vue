<template>
    <div class="input-wrap">
        <input class="native-file-input" type="file" @change="handleFileChange" ref="fileInput" />

        <span class="input-label">{{ label }}</span>
        <img :src="imageSrc" />
        <ButtonUI text="Заменить" medium rounded @click="handleClick" />
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
        image: {
            type: String,
        },
    },

    data() {
        return {
            previewUrl: '',
            defaultPreviewUrl: 'https://a.d-cd.net/6f3caees-1920.jpg',
        };
    },

    computed: {
        apiUrl(): string {
            return process.env.VUE_APP_API_URL;
        },
        imageSrc(): string {
            return this.previewUrl || `${this.apiUrl}/${this.image}` || this.defaultPreviewUrl;
        },
    },

    methods: {
        setPreviewUrl(file: File): void {
            this.previewUrl = URL.createObjectURL(file);
        },
        handleFileChange(event: Event): void {
            const fileInput = event.target as HTMLInputElement;
            const file = fileInput.files?.[0];
            if (file) {
                this.$emit('upload', file);
                this.setPreviewUrl(file);
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

    img {
        width: 150px;
        border-radius: 6px;
    }
}
</style>
