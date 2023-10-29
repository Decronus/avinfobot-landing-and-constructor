<template>
    <el-dialog v-model="modalVisibility" width="800px" :show-close="false">
        <template #header>
            <div class="modal-header">
                <span>Создание страницы</span>
                <CloseIcon @click="toggleModal" />
            </div>
        </template>

        <div class="modal-content">
            <TextareaUI label="Имя страницы" />
            <TextareaUI label="Ссылка на страницу" />
        </div>

        <!-- <input v-model="page.name" placeholder="Имя страницы" />
        <input v-model="page.link" placeholder="Ссылка на страницу" /> -->
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="toggleModal">Cancel</el-button>
                <el-button type="primary" @click="handleCreatePage"> Confirm </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts">
import TextareaUI from '@/components/ui/TextareaUI.vue';
import CloseIcon from '@/components/icons/CloseIcon.vue';
import { defineComponent } from 'vue';
import { createPage } from '@/axios/api';

export default defineComponent({
    name: 'AddPageModal',
    components: { TextareaUI, CloseIcon },

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

<style lang="scss">
.modal-header {
    background: #f7f7f7;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;

    .icon-wrap {
        cursor: pointer;

        &:hover svg path {
            fill: #222222;
        }
    }
}

.modal-content {
    max-width: 572px;
    margin: 0 auto;
    padding: 34px 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
</style>
