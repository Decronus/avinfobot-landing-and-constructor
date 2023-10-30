<template>
    <el-dialog v-model="modalVisibility" width="800px" :show-close="false">
        <template #header>
            <div class="modal-header">
                <span>Создание страницы</span>
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
                <ButtonUI text="Создать" medium rounded :disabled="buttonDisabled" @click="handleCreatePage" />
            </div>
        </div>
    </el-dialog>
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import CloseIcon from '@/components/icons/CloseIcon.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import { defineComponent } from 'vue';
import { createPage } from '@/axios/api';

export default defineComponent({
    name: 'AddPageModal',
    components: { InputUI, CloseIcon, ButtonUI },

    data() {
        return {
            page: {
                name: '',
                link: 'https://127.0.0.1/',
            },
            isLinkInputEdited: false,
        };
    },

    computed: {
        buttonDisabled(): boolean {
            const resultLink = this.page.link.replace('https://127.0.0.1/', '');
            const linkFilled = resultLink.length > 0;
            return !(this.page.name && linkFilled);
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
                this.page.link = 'https://127.0.0.1/' + this.transliterateToLatin(this.page.name);
            }
        },
        modalVisibility(value: boolean) {
            if (value) this.clearForm();
        },
    },

    methods: {
        clearForm(): void {
            this.page.name = '';
            this.page.link = 'https://127.0.0.1/';
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
        async handleCreatePage() {
            try {
                const res = await createPage(this.page);
                this.toggleModal();
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

    .modal__buttons-wrap {
        align-self: flex-end;
        display: flex;
        gap: 16px;
    }
}
</style>
