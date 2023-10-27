<template>
    <el-dialog v-model="modalVisibility" title="Создание страницы" width="800px">
        <input v-model="page.name" placeholder="Имя страницы" />
        <input v-model="page.link" placeholder="Ссылка на страницу" />
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="toggleModal">Cancel</el-button>
                <el-button type="primary" @click="handleCreatePage"> Confirm </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { createPage } from '@/axios/api';

export default defineComponent({
    name: 'AddPageModal',

    data() {
        return {
            page: {
                name: '',
                link: '',
            },
        };
    },

    computed: {
        modalName(): string {
            return this.$options.name as string;
        },
        modalVisibility: {
            get(): boolean {
                return this.$store.getters['modals/getModalVisibility'](this.modalName);
            },
            set(): void {
                this.modalVisibility && this.toggleModal();
            },
        },
    },

    methods: {
        async handleCreatePage() {
            try {
                const res = await createPage(this.page);
                console.log('create page res', res.data);
            } catch (err) {
                console.error(err);
            }
        },
        toggleModal(): void {
            this.$store.commit('modals/toggleModal', this.modalName);
        },
    },
});
</script>

<style lang="scss"></style>
