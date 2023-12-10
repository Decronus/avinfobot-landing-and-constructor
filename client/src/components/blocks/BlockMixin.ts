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
        handleEditableContentInput(event: Event, key: string, index: number = -1): void {
            const target = event.target as HTMLElement;
            if (!target) return;

            if (index !== -1) {
                this.content[key][index] = target.innerHTML ?? '';
            } else {
                this.content[key] = target.innerHTML ?? '';
            }
        },
        async updateBlockContent(event: Event, key: string, index: number = -1): Promise<void> {
            if (!this.isEditMode) return;
            this.handleEditableContentInput(event, key, index);

            const value = this.content[key];
            await this.$store.dispatch('pages/updateBlockContent', {
                pageLink: this.pageLink,
                blockIndex: this.blockIndex,
                content: { [key]: value },
            });
        },
    },

    watch: {
        'block.content'() {
            this.content = structuredClone(this.block?.content);
        },
    },

    mounted() {
        this.content = structuredClone(this.block?.content);
    },
});
