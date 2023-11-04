<template>
    <EditModeHeader v-if="isEditMode" />

    <component
        v-for="(block, index) in pageData?.blocks"
        :blockIndex="index"
        :key="block._id"
        :block="block"
        :isEditMode="isEditMode"
        :is="getCurrentBlock(block.type)"
    />

    <div v-if="isEditMode" class="all-blocks-button__wrap" @click="openBlocksDrawer">
        <ButtonUI text="ВСЕ БЛОКИ" medium rounded />
    </div>

    <div v-if="isEditMode">
        <EditContentDrawer />
        <SettingsDrawer />
        <BlocksDrawer />
    </div>
</template>

<script lang="ts">
import MainBlock from '@/components/blocks/MainBlock.vue';
import TwoColumnsBlock from '@/components/blocks/TwoColumnsBlock.vue';
import TitleBlock from '@/components/blocks/TitleBlock.vue';
import EditModeHeader from '@/components/EditModeHeader.vue';
import EditContentDrawer from '@/components/drawers/EditContentDrawer.vue';
import SettingsDrawer from '@/components/drawers/SettingsDrawer.vue';
import BlocksDrawer from '@/components/drawers/BlocksDrawer.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import { Component, defineComponent } from 'vue';
import { BlockType, Page } from '@/types/pages';

interface Data {
    pageData: Page | undefined;
}

export default defineComponent({
    name: 'LandingPage',
    components: { MainBlock, EditModeHeader, EditContentDrawer, SettingsDrawer, BlocksDrawer, ButtonUI },

    computed: {
        pageData(): Page {
            return this.$store.state.pages.currentPage;
        },
        isEditMode(): boolean {
            return this.$route.name === 'landing-page-edit';
        },
    },

    mounted() {
        this.initPageData();
    },

    methods: {
        openBlocksDrawer(): void {
            this.$store.commit('drawers/setCurrentBlockIndex', this.pageData?.blocks?.length);
            this.$store.commit('drawers/toggleDrawer', 'BlocksDrawer');
        },
        getCurrentBlock(blockType: BlockType): Component {
            const blocksMap: Record<BlockType, Component> = {
                main: MainBlock,
                twoColumns: TwoColumnsBlock,
                title: TitleBlock,
            };
            return blocksMap[blockType];
        },
        async initPageData(): Promise<void> {
            try {
                const pageLink = this.$route.params.pageLink as string;
                await this.$store.dispatch('pages/getCurrentPage', pageLink);
            } catch (error: any) {
                console.error(error.response.data);
            }
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.all-blocks-button__wrap {
    width: 100%;
    padding: 48px 20px;
    display: flex;
    justify-content: center;
}
</style>
