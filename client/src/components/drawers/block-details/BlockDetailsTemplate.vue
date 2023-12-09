<template>
    <el-tooltip placement="right" effect="block-details__tooltip" :show-after="300">
        <template #content>
            <div class="block-details__content">
                <div class="block-details__image">
                    <component :is="blockImage" />
                </div>

                <div class="block-details__text">
                    <p>{{ blockDetails }}</p>
                </div>
            </div>
        </template>
        <slot></slot>
    </el-tooltip>
</template>

<script lang="ts">
import { Component, PropType, defineComponent } from 'vue';
import { BlockType } from '@/types/pages';
import MainBlockSchemImage from './images/MainBlockSchemImage.vue';
import TitleWithTextBlockSchemImage from './images/TitleWithTextBlockSchemImage.vue';
import TitleWithBgBlockSchemImage from './images/TitleWithBgBlockSchemImage.vue';
import TextWithImageBlockSchemImage from './images/TextWithImageBlockSchemImage.vue';
import GalleryWithTextBlockSchemImage from './images/GalleryWithTextBlockSchemImage.vue';
import TwoColumnsBlockSchemImage from './images/TwoColumnsBlockSchemImage.vue';
import TitleBlockSchemImage from './images/TitleBlockSchemImage.vue';
import BulletsBlockSchemImage from './images/BulletsBlockSchemImage.vue';

export default defineComponent({
    name: 'BlocksDetailsTemplate',
    props: {
        blockType: {
            type: String as PropType<BlockType>,
            required: true,
        },
    },

    computed: {
        blockDetails(): string {
            return this.blockDetailsMap[this.blockType];
        },
        blockDetailsMap(): Record<BlockType, string> {
            return this.$store.state.pages.blockDetails;
        },
        blockImage(): Component {
            const blockImageMap: Record<BlockType, Component> = {
                main: MainBlockSchemImage,
                twoColumns: TwoColumnsBlockSchemImage,
                title: TitleBlockSchemImage,
                textWithImage: TextWithImageBlockSchemImage,
                bullets: BulletsBlockSchemImage,
                titleWithText: TitleWithTextBlockSchemImage,
                galleryWithText: GalleryWithTextBlockSchemImage,
                titleWithBg: TitleWithBgBlockSchemImage,
            };
            return blockImageMap[this.blockType];
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.el-popper.is-block-details__tooltip {
    padding: 0;
    border-radius: 0;
    background: #ffffff;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
    max-width: 320px !important;

    .block-details__text {
        min-height: 50px;
        display: flex;
        align-items: center;
        margin-top: -7px;
        padding: 10px 20px;

        p {
            font-size: 14px;
        }
    }
}
</style>
