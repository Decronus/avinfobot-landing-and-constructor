<template>
    <el-dialog
        v-model="modalVisibility"
        width="800px"
        :show-close="false"
        destroy-on-close
        @opened="focusFirstInput"
        @closed="buttonLoading = false"
    >
        <template #header>
            <div class="modal-header">
                <span>{{ isEditMode ? 'Настройки страницы' : 'Создание страницы' }}</span>
                <CloseIcon @click="toggleModal" />
            </div>
        </template>

        <div class="modal-content" ref="content">
            <InputUI
                v-model="page.name"
                label="Имя страницы"
                placeholder="Введите имя страницы"
                @keyup.enter="currentApplyFunction"
            />
            <InputUI
                v-model="page.title"
                label="Заголовок страницы"
                placeholder="Введите заголовок страницы"
                @keyup.enter="currentApplyFunction"
            />
            <InputUI v-model="page.link" label="Ссылка на страницу" placeholder="Введите адрес страницы" readonly />

            <div class="modal__buttons-wrap">
                <ButtonUI text="Отменить" medium secondary rounded @click="toggleModal" />
                <ButtonUI
                    :text="isEditMode ? 'Сохранить' : 'Создать'"
                    medium
                    rounded
                    :disabled="buttonDisabled"
                    :loading="buttonLoading"
                    @click="currentApplyFunction"
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
                title: '',
                link: '',
            },
            initialPage: {
                name: '',
                title: '',
            },
            buttonLoading: false,
        };
    },

    computed: {
        currentApplyFunction(): () => void {
            return this.isCurrentPage ? this.updatePageSettings : this.createPage;
        },
        buttonDisabled(): boolean {
            return this.formNotFilled || this.buttonLoading || this.buttonDisabledInEditMode;
        },
        buttonDisabledInEditMode(): boolean {
            return this.isEditMode && !this.formChanged;
        },
        formChanged(): boolean {
            return this.page.name !== this.initialPage.name || this.page.title !== this.initialPage.title;
        },
        formNotFilled(): boolean {
            return !this.page.name;
        },
        apiUrl(): string {
            return process.env.VUE_APP_URL;
        },
        clearLink(): string {
            return this.page.link.replace(`${this.apiUrl}/page/`, '');
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
            this.page.link = `${this.apiUrl}/` + 'page/' + this.transliterateToLatin(this.page.name);
        },
        modalVisibility(value: boolean) {
            if (value) {
                if (this.isCurrentPage) {
                    const page = this.$store.state.pages.currentPage;
                    this.page.name = page.name;
                    this.page.title = page.title;
                    this.initialPage.name = page.name;
                    this.initialPage.title = page.title;
                } else {
                    this.clearForm();
                }
            }
        },
    },

    methods: {
        focusFirstInput(): void {
            const content = this.$refs.content as HTMLDivElement;
            const firstInput = content.querySelector('input');
            firstInput && (this.isEditMode ? firstInput.select() : firstInput.focus());
        },
        clearForm(): void {
            this.page.name = '';
            this.page.title = '';
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
                '/': '-',
                '#': '-',
                // ',': '',
                // '.': '',
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
                this.buttonLoading = true;
                await this.$store.dispatch('pages/createPage', { ...this.page, link: this.clearLink });
                this.toggleModal();
            } catch (err: any) {
                ElMessage.error(err.message);
                this.buttonLoading = false;
            }
        },
        async updatePageSettings() {
            try {
                this.buttonLoading = true;
                await this.$store.dispatch('pages/updatePageSettings', {
                    pageLink: this.currentPageLink,
                    settings: { ...this.page, link: this.clearLink },
                });
                this.$router.replace({ name: 'landing-page-edit', params: { pageLink: this.clearLink } });
                this.toggleModal();
            } catch (err: any) {
                ElMessage.error(err.message);
                this.buttonLoading = false;
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
