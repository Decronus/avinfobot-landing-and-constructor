<template>
    <div
        class="block main-block"
        :class="{ 'main-block__inverted': block?.settings.inverted, 'block-hover': isEditMode }"
        :style="customBg"
        :id="block?._id"
    >
        <EditRow
            v-if="isEditMode"
            blockType="main"
            :blockIndex="blockIndex"
            :blocksAmount="blocksAmount"
            :blockId="(block?._id as string)"
        />

        <div class="content">
            <div class="squares-wrap">
                <AngleElement style="margin-left: auto" />
            </div>

            <h1 v-html="content?.title" contenteditable @blur="updateBlockContent($event, 'title')" />

            <p v-html="content?.description" contenteditable @blur="updateBlockContent($event, 'description')" />
            <ButtonUI
                v-if="content?.action?.active"
                :text="content?.action?.text"
                style="margin-bottom: 80px"
                @click="openExternalLink(content?.action?.link as string)"
            />

            <div class="squares-wrap">
                <FourSquares v-if="!content?.action?.active" />
                <FourSquares style="margin-left: auto" />
            </div>
        </div>

        <div class="read-next__wrap" v-if="readNextVisibility" @click="scrollToSecondBlock">
            <span>Читать далее</span>
            <ArrowInCircleIcon />
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
import BlockMixin from './BlockMixin';

export default defineComponent({
    name: 'MainBlock',
    mixins: [BlockMixin],
    components: { ButtonUI, FourSquares, AngleElement, ArrowInCircleIcon, EditRow, AddBlockButton },
    props: {
        block: {
            type: Object as PropType<MainBlock>,
        },
    },

    computed: {
        readNextVisibility(): boolean {
            if (this.blockIndex > 0) return false;
            return this.block?.settings.readNext as boolean;
        },
        secondBlockId(): string {
            return this.$store.state.pages.currentPage.blocks?.[1]?._id;
        },
        apiUrl(): string {
            return process.env.VUE_APP_API_URL;
        },
        customBg(): {} {
            const image = this.block?.content?.images?.[0];
            return image ? { 'background-image': `url(${this.apiUrl}/${image})` } : {};
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
        scrollToSecondBlock(): void {
            if (this.secondBlockId) {
                const secondBlock = document.getElementById(this.secondBlockId) as HTMLElement;
                if (secondBlock) {
                    window.scrollTo({
                        top: secondBlock.offsetTop - 64,
                        behavior: 'smooth',
                    });
                }
            }
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.main-block {
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
        z-index: 5;

        h1 {
            font-family: RoadRadio;
            font-size: 72px;
            font-weight: 600;
            margin-bottom: 24px;
            word-break: break-word;
            white-space: pre-line;

            @media (max-width: 768px) {
                font-size: 48px;
            }
        }

        p {
            white-space: pre-line;
            margin-bottom: 80px;
        }

        .squares-wrap {
            display: flex;
            justify-content: space-between;
        }
    }

    .read-next__wrap {
        position: absolute;
        bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        animation: arrowAnimation 1s infinite alternate;
        transition: transform 0.2s ease-in-out;

        @keyframes arrowAnimation {
            0% {
                transform: translateY(0);
            }
            100% {
                transform: translateY(8px);
            }
        }

        span {
            font-size: 14px;
        }
    }
}

.main-block__inverted {
    background-color: rgba(13, 2, 2, 0.5);

    .content {
        h1,
        p,
        textarea {
            color: $dark-text-color;
        }
    }

    .read-next__wrap {
        span {
            color: rgba(255, 255, 255, 0.7);
        }
        svg path {
            fill: rgba(255, 255, 255, 0.7);
        }
    }
}
</style>
