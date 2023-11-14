import { uploadImage } from '@/axios/api';
import { MainBlockContent } from '@/types/pages';
import { defineComponent } from 'vue';

declare function structuredClone<T>(obj: T): T;

interface Data {
    form: any;
    images: File[];
    imagesChanged: boolean;
}

export default defineComponent({
    name: 'EditContentDrawerBodyMixin',

    data(): Data {
        return {
            form: {},
            images: [],
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
        currentBlockContent(): MainBlockContent {
            return this.$store.getters['drawers/getCurrentBlockContent'];
        },
    },

    methods: {
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
                form.append('filesIndexes', JSON.stringify(imagesIndexes));

                const res = await uploadImage(this.pageLink, this.currentBlockIndex, form);
                this.$store.commit('pages/updateBlockContent', {
                    blockIndex: this.currentBlockIndex,
                    content: res.data,
                });
            } catch (error: any) {
                console.error(error.response.data);
            }
        },
        async updateBlockContentAndImages(): Promise<void> {
            await this.updateBlockContent();
            this.imagesChanged && this.handleUpload();
        },
    },

    mounted() {
        this.form = structuredClone(this.currentBlockContent);
    },
});
