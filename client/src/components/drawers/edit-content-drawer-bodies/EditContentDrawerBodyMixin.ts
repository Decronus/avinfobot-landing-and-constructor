import { MainBlockContent } from '@/types/pages';
import { defineComponent } from 'vue';

declare function structuredClone<T>(obj: T): T;

export default defineComponent({
    name: 'EditContentDrawerBodyMixin',

    data() {
        return {
            form: {},
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
        updateBlockContent(): void {
            this.$store.dispatch('pages/updateBlockContent', {
                pageLink: this.pageLink,
                blockIndex: this.currentBlockIndex,
                content: this.form,
            });
        },
    },

    mounted() {
        this.form = structuredClone(this.currentBlockContent);
    },
});
