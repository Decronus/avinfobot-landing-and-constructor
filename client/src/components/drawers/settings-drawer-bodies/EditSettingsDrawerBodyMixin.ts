import { MainBlockContent } from '@/types/pages';
import { defineComponent } from 'vue';

declare function structuredClone<T>(obj: T): T;

export default defineComponent({
    name: 'EditSettingsDrawerBodyMixin',

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
        currentBlockSettings(): MainBlockContent {
            return this.$store.getters['drawers/getCurrentBlockSettings'];
        },
    },

    methods: {
        async updateBlockSettings(): Promise<void> {
            await this.$store.dispatch('pages/updateBlockSettings', {
                pageLink: this.pageLink,
                blockIndex: this.currentBlockIndex,
                settings: this.form,
            });
        },
    },

    mounted() {
        this.form = structuredClone(this.currentBlockSettings);
    },
});
