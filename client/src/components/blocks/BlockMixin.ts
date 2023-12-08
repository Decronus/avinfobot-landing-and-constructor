import { PropType, defineComponent } from 'vue';
import { Block } from '@/types/pages';

declare function structuredClone<T>(obj: T): T;

interface Data {
    content: any;
}

export default defineComponent({
    name: 'BlockMixin',
    props: {
        isEditMode: {
            type: Boolean,
            required: false,
            default: false,
        },
        block: {
            type: Object as PropType<Block>,
        },
        blockIndex: {
            type: Number,
            required: true,
        },
        blocksAmount: {
            type: Number,
            required: true,
        },
    },

    data(): Data {
        return {
            content: {},
        };
    },

    computed: {
        pageLink(): string {
            return this.$route.params.pageLink as string;
        },
    },

    methods: {
        async updateBlockContent(key: string): Promise<void> {
            const value = this.content[key];
            await this.$store.dispatch('pages/updateBlockContent', {
                pageLink: this.pageLink,
                blockIndex: this.blockIndex,
                content: { [key]: value },
            });
        },
    },

    mounted() {
        this.content = structuredClone(this.block?.content);
    },
});
