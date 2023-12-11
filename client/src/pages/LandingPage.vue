<template>
    <LoadingWrap v-if="!currentPage" />

    <template v-else>
        <EditModeHeader v-if="isEditMode" :pageName="currentPage?.name" />
        <LandingHeader v-else />

        <component
            v-for="(block, index) in currentPage?.blocks"
            :blockIndex="index"
            :key="block._id"
            :block="block"
            :blocksAmount="blocksAmount"
            :isEditMode="isEditMode"
            :is="getCurrentBlock(block.type)"
        />

        <div v-if="isEditMode" class="fast-access-blocks-buttons__wrap">
            <ButtonUI text="ВСЕ БЛОКИ" medium rounded @click="openBlocksDrawer" />

            <div class="merged-buttons">
                <ButtonUI
                    v-for="(block, index) in fastAccessBlocks"
                    :key="index"
                    medium
                    secondary
                    rounded
                    :text="block.text"
                    @click="addBlock(block.type)"
                />
            </div>
        </div>

        <div v-if="isEditMode">
            <EditContentDrawer />
            <SettingsDrawer />
            <BlocksDrawer />
        </div>
    </template>
</template>

<script lang="ts">
import MainBlock from '@/components/blocks/MainBlock.vue';
import TwoColumnsBlock from '@/components/blocks/TwoColumnsBlock.vue';
import TitleBlock from '@/components/blocks/TitleBlock.vue';
import TextWithImageBlock from '@/components/blocks/TextWithImageBlock.vue';
import BulletsBlock from '@/components/blocks/BulletsBlock.vue';
import TitleWithTextBlock from '@/components/blocks/TitleWithTextBlock.vue';
import GalleryWithTextBlock from '@/components/blocks/GalleryWithTextBlock.vue';
import TitleWithBgBlock from '@/components/blocks/TitleWithBgBlock.vue';
import EditModeHeader from '@/components/EditModeHeader.vue';
import LandingHeader from '@/components/LandingHeader.vue';
import EditContentDrawer from '@/components/drawers/EditContentDrawer.vue';
import SettingsDrawer from '@/components/drawers/SettingsDrawer.vue';
import BlocksDrawer from '@/components/drawers/BlocksDrawer.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import LoadingWrap from '@/components/LoadingWrap.vue';
import { Component, defineComponent } from 'vue';
import { BlockType, BlockTypeWithName, Page } from '@/types/pages';

export default defineComponent({
    name: 'LandingPage',
    components: {
        MainBlock,
        EditModeHeader,
        LandingHeader,
        EditContentDrawer,
        SettingsDrawer,
        BlocksDrawer,
        ButtonUI,
        LoadingWrap,
    },

    computed: {
        fastAccessBlocks(): BlockTypeWithName[] {
            return this.$store.state.pages.fastAccessBlocks;
        },
        currentPage(): Page {
            return this.$store.state.pages.currentPage;
        },
        blocksAmount(): number {
            return this.currentPage?.blocks?.length || 0;
        },
        isEditMode(): boolean {
            return this.$route.name === 'landing-page-edit';
        },
    },

    async mounted() {
        await this.initPageData();
        this.updateDocumentTitle();
    },

    watch: {
        currentPage: {
            handler() {
                this.updateDocumentTitle();
            },
            deep: true,
        },
    },

    methods: {
        updateDocumentTitle(): void {
            const title = this.currentPage.title === '' ? this.currentPage.name : this.currentPage.title;
            document.title = `AVinfoBot - ${title}`;
        },
        async addBlock(blockType: BlockType): Promise<void> {
            const payload = { pageLink: this.currentPage.link, blockType, blockIndex: this.blocksAmount };
            await this.$store.dispatch('pages/addBlock', payload);
            window.scrollBy({ left: 0, top: window.innerHeight, behavior: 'smooth' });
        },
        openBlocksDrawer(): void {
            this.$store.commit('drawers/setCurrentBlockIndex', this.currentPage?.blocks?.length as number);
            this.$store.commit('drawers/toggleDrawer', 'BlocksDrawer');
        },
        getCurrentBlock(blockType: BlockType): Component {
            const blocksMap: Record<BlockType, Component> = {
                main: MainBlock,
                twoColumns: TwoColumnsBlock,
                title: TitleBlock,
                textWithImage: TextWithImageBlock,
                bullets: BulletsBlock,
                titleWithText: TitleWithTextBlock,
                galleryWithText: GalleryWithTextBlock,
                titleWithBg: TitleWithBgBlock,
            };
            return blocksMap[blockType];
        },
        async initPageData(): Promise<void> {
            try {
                const pageLink = this.$route.params.pageLink as string;
                await this.$store.dispatch('pages/getCurrentPage', pageLink);
            } catch (err: any) {
                console.error(err.message);
                this.$router.push('/404');
            }
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.fast-access-blocks-buttons__wrap {
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
    padding: 48px 20px;
    display: flex;
    justify-content: center;
    gap: 24px;

    @media (max-width: 620px) {
        flex-direction: column;
    }

    span {
        white-space: nowrap;
    }

    .merged-buttons {
        display: flex;
        flex-wrap: wrap;

        /* .button {
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
        } */

        @media (max-width: 620px) {
            flex-direction: column;
        }
    }
}
</style>
