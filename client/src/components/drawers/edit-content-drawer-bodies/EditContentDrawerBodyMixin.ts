import { uploadImage } from '@/axios/api';
import { BlockContent } from '@/types/pages';
import { defineComponent } from 'vue';
import { ElMessage } from 'element-plus';

declare function structuredClone<T>(obj: T): T;

interface Data {
    form: any;
    images: File[];
    errors: Record<any, any>;
    imagesChanged: boolean;
}

export default defineComponent({
    name: 'EditContentDrawerBodyMixin',
    emits: ['error'],

    data(): Data {
        return {
            form: {},
            images: [],
            errors: {},
            imagesChanged: false,
        };
    },

    computed: {
        pageLink(): string {
            return this.$route.params.pageLink as string;
        },
        currentBlockIndex(): number {
            return this.$store.state.drawers.currentBlock.index;
        },
        currentBlockContent(): BlockContent {
            return this.$store.getters['drawers/getCurrentBlockContent'];
        },
    },

    methods: {
        prepareBlockContent(): void {},

        async updateBlockContent(): Promise<void> {
            await this.$store.dispatch('pages/updateBlockContent', {
                pageLink: this.pageLink,
                blockIndex: this.currentBlockIndex,
                content: this.form,
            });
        },
        async handleUpload(): Promise<void> {
            try {
                const form = new FormData();
                const imagesIndexes: number[] = [];
                this.images.forEach((image, index) => {
                    if (image) {
                        form.append('images', image);
                        imagesIndexes.push(index);
                    }
                });
                form.append('imagesIndexes', JSON.stringify(imagesIndexes));

                const res = await uploadImage(this.pageLink, this.currentBlockIndex, form);
                this.$store.commit('pages/updateBlockContent', {
                    blockIndex: this.currentBlockIndex,
                    content: res.data,
                });
            } catch (error: any) {
                console.error(error.response.data);
            }
        },
        async updateBlockContentAndImages(): Promise<boolean> {
            if (Object.keys(this.errors).length) {
                ElMessage.error('Исправьте все ошибки ввода');
                return false;
            }

            this.prepareBlockContent();
            await this.updateBlockContent();
            this.imagesChanged && this.handleUpload();
            return true;
        },
        formatContent(): BlockContent {
            const contentCopy = structuredClone(this.currentBlockContent);

            for (const key in contentCopy) {
                const el = contentCopy[key as keyof BlockContent] as string | Array<string>;

                if (el) {
                    if (typeof el === 'string') {
                        (contentCopy[key as keyof BlockContent] as string) = el
                            .replace(/<div><br><\/div>/g, '\n')
                            .replace(/<div>/g, '\n')
                            .replace(/<\/div>/g, '')
                            .replace(/<br>/g, '\n')
                            .replace(/&nbsp;/g, ' ');
                    } else if (el instanceof Array) {
                        el.forEach((str: string, index: number) => {
                            if (el[index]) {
                                el[index] = str
                                    .replace(/<div>/g, '\n')
                                    .replace(/<\/div>/g, '')
                                    .replace(/<br>/g, '\n')
                                    .replace(/&nbsp;/g, ' ');
                            }
                        });
                    }
                }
            }
            return contentCopy;
        },
    },

    mounted() {
        this.form = this.formatContent();
    },
});
