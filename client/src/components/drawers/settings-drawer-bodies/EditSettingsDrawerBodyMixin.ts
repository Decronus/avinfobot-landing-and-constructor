import { MainBlockContent } from '@/types/pages';
import { defineComponent } from 'vue';

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
        currentBlockIndex(): string {
            return this.$store.state.drawers.currentBlock.index;
        },
        currentBlockSettings(): MainBlockContent {
            return this.$store.getters['drawers/getCurrentBlockSettings'];
        },
    },

    methods: {
        updateBlockSettings(): void {
            this.$store.dispatch('pages/updateBlockSettings', {
                pageLink: this.pageLink,
                blockIndex: this.currentBlockIndex,
                settings: this.form,
            });
        },
    },

    mounted() {
        this.form = { ...this.currentBlockSettings };
    },
});
