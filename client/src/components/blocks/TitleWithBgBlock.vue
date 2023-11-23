<template>
    <div
        class="block title-with-bg__block"
        :class="{ 'title-with-bg__block-inverted': block?.settings.inverted, 'block-hover': isEditMode }"
        :style="customBg ? { 'background-image': `url(${apiUrl}/${block?.content?.images?.[0]})` } : {}"
        :id="block?._id"
    >
        <EditRow
            v-if="isEditMode"
            blockType="titleWithBg"
            :blockIndex="blockIndex"
            :blocksAmount="blocksAmount"
            :blockId="(block?._id as string)"
        />

        <div class="content">
            <div class="squares-wrap">
                <AngleElement style="margin-left: auto" />
            </div>

            <h1>{{ block?.content?.title }}</h1>

            <div class="squares-wrap">
                <AngleElement style="transform: rotate(180deg)" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import EditRow from '@/components/blocks/edit-elements/EditRow.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import FourSquares from '@/components/decorative-elements/FourSquares.vue';
import AngleElement from '@/components/decorative-elements/AngleElement.vue';
import ArrowInCircleIcon from '@/components/icons/ArrowInCircleIcon.vue';
import AddBlockButton from '@/components/blocks/edit-elements/AddBlockButton.vue';
import { MainBlock } from '@/types/pages';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
    name: 'TitleWithBgBlock',
    components: { ButtonUI, FourSquares, AngleElement, ArrowInCircleIcon, EditRow, AddBlockButton },
    props: {
        isEditMode: {
            type: Boolean,
            required: false,
            default: false,
        },
        block: {
            type: Object as PropType<MainBlock>,
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

    computed: {
        apiUrl(): string {
            return process.env.VUE_APP_API_URL;
        },
        customBg() {
            return this.block?.content?.images?.[0];
        },
    },

    methods: {
        openBlocksDrawer(): void {
            this.$store.commit('drawers/setCurrentBlock', this.block?.type);
            this.$store.commit('drawers/toggleDrawer', 'BlocksDrawer');
        },
        openExternalLink(link: string): void {
            if (!link) return;
            window.open(link, '_blank');
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.title-with-bg__block {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url('https://a.d-cd.net/6f3caees-1920.jpg');
    background-attachment: fixed;
    background-color: rgba(255, 255, 255, 0.8);
    background-blend-mode: overlay;
    background-size: cover;
    background-repeat: no-repeat;

    .content {
        max-width: 964px;
        width: 100%;

        h1 {
            font-size: 72px;
            word-break: break-word;
            text-align: center;
            padding: 64px 12px;

            @media (max-width: 768px) {
                font-size: 48px;
            }
        }

        .squares-wrap {
            display: flex;
            justify-content: space-between;
        }
    }
}

.title-with-bg__block-inverted {
    background-color: rgba(13, 2, 2, 0.5);

    .content {
        h1 {
            color: $dark-text-color;
        }
    }
}
</style>
