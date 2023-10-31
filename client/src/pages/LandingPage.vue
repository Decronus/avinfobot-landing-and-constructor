<template>
    <EditModeHeader v-if="isEditMode" />

    <component
        v-for="block in pageData?.blocks"
        :key="block._id"
        :block="block"
        :editMode="isEditMode"
        :is="getCurrentBlock(block.type)"
    />

    <component
        v-for="block in pageData?.blocks"
        :key="block._id"
        :block="block"
        :editMode="isEditMode"
        :is="getCurrentBlock(block.type)"
    />

    <div class="all-blocks-button__wrap">
        <ButtonUI text="ВСЕ БЛОКИ" medium rounded />
    </div>

    <EditContentDrawer />
</template>

<script lang="ts">
import MainBlock from '@/components/blocks/MainBlock.vue';
import TwoColumnsBlock from '@/components/blocks/TwoColumnsBlock.vue';
import TitleBlock from '@/components/blocks/TitleBlock.vue';
import EditModeHeader from '@/components/EditModeHeader.vue';
import EditContentDrawer from '@/components/drawers/EditContentDrawer.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import { Component, defineComponent } from 'vue';
import { getPageByLink } from '@/axios/api';
import { BlockType, Page } from '@/types/pages';

interface Data {
    pageData: Page | undefined;
    blocksMap: Record<BlockType, Component>;
}

export default defineComponent({
    name: 'LandingPage',
    components: { MainBlock, EditModeHeader, EditContentDrawer, ButtonUI },

    data(): Data {
        return {
            pageData: undefined,
            blocksMap: {
                main: MainBlock,
                twoColumns: TwoColumnsBlock,
                title: TitleBlock,
            },
        };
    },

    computed: {
        isEditMode(): boolean {
            return this.$route.name === 'landing-page-edit';
        },
    },

    mounted() {
        this.initPageData();
    },

    methods: {
        getCurrentBlock(blockType: BlockType): Component {
            return this.blocksMap[blockType];
        },
        async initPageData(): Promise<void> {
            try {
                const pageLink = this.$route.params.pageLink as string;
                const page = await getPageByLink(pageLink);
                this.pageData = page.data;
                console.log(page.data);
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
