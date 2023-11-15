<template>
    <el-dialog v-model="modalVisibility" width="800px" :show-close="false" destroy-on-close>
        <template #header>
            <div class="modal-header">
                <span>{{ isEditMode ? 'Настройки страницы' : 'Создание страницы' }}</span>
                <CloseIcon @click="toggleModal" />
            </div>
        </template>

        <div class="modal-content">
            <InputUI v-model="page.name" label="Имя страницы" type="textarea" placeholder="Введите имя страницы" />
            <InputUI
                v-model="page.link"
                label="Ссылка на страницу"
                placeholder="Введите адрес страницы"
                readonly
                @inputEdited="isLinkInputEdited = true"
            />

            <div class="modal__buttons-wrap">
                <ButtonUI text="Отменить" medium secondary rounded border @click="toggleModal" />
                <ButtonUI
                    text="Создать"
                    medium
                    rounded
                    :disabled="!page.name"
                    @click="isCurrentPage ? updatePageSettings() : createPage()"
                />
            </div>
        </div>
    </el-dialog>
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import CloseIcon from '@/components/icons/CloseIcon.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import { defineComponent } from 'vue';
import { ElMessage } from 'element-plus';

export default defineComponent({
    name: 'CreatePageModal',
    components: { InputUI, CloseIcon, ButtonUI },

    data() {
        return {
            page: {
                name: '',
                link: '',
            },
            isLinkInputEdited: false,
        };
    },

    computed: {
        apiUrl(): string {
            return process.env.VUE_APP_API_URL;
        },
        clearLink(): string {
            return this.page.link.replace(`${this.apiUrl}/`, '');
        },
        isEditMode(): boolean {
            return this.$route.name === 'landing-page-edit';
        },
        isCurrentPage(): boolean {
            return !!this.$route.params.pageLink;
        },
        currentPageLink(): string {
            return this.$route.params.pageLink as string;
        },
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

    watch: {
        'page.name'() {
            if (!this.isLinkInputEdited) {
                this.page.link = `${this.apiUrl}/` + this.transliterateToLatin(this.page.name);
            }
        },
        modalVisibility(value: boolean) {
            if (value) {
                if (this.isCurrentPage) {
                    this.page.name = this.$store.state.pages.currentPage.name;
                } else {
                    this.clearForm();
                }
            }
        },
    },

    methods: {
        clearForm(): void {
            this.page.name = '';
            this.page.link = this.apiUrl;
        },
        transliterateToLatin(text: string): string {
            const cyrillicToLatinMap: Record<string, string> = {
                а: 'a',
                б: 'b',
                в: 'v',
                г: 'g',
                д: 'd',
                е: 'e',
                ё: 'yo',
                ж: 'zh',
                з: 'z',
                и: 'i',
                й: 'y',
                к: 'k',
                л: 'l',
                м: 'm',
                н: 'n',
                о: 'o',
                п: 'p',
                р: 'r',
                с: 's',
                т: 't',
                у: 'u',
                ф: 'f',
                х: 'kh',
                ц: 'ts',
                ч: 'ch',
                ш: 'sh',
                щ: 'sch',
                ъ: '',
                ы: 'y',
                ь: '',
                э: 'e',
                ю: 'yu',
                я: 'ya',
                ' ': '-',
                ',': '',
                '.': '',
                '"': '',
            };

            return text
                .toLowerCase()
                .split('')
                .map((char) => {
                    return cyrillicToLatinMap[char] ?? char;
                })
                .join('');
        },
        async createPage() {
            try {
                await this.$store.dispatch('pages/createPage', { ...this.page, link: this.clearLink });
                this.toggleModal();
            } catch (err: any) {
                ElMessage.error(err.message);
            }
        },
        async updatePageSettings() {
            try {
                await this.$store.dispatch('pages/updatePageSettings', {
                    pageLink: this.currentPageLink,
                    settings: { ...this.page, link: this.clearLink },
                });
                this.$router.replace({ name: 'landing-page-edit', params: { pageLink: this.clearLink } });
                this.toggleModal();
            } catch (err: any) {
                ElMessage.error(err.message);
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
    padding: 34px 20px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    .modal__buttons-wrap {
        align-self: flex-end;
        display: flex;
        gap: 16px;
    }
}
</style>
