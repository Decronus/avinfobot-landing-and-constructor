<template>
    <el-drawer
        class="blocks-drawer"
        v-model="drawerVisibility"
        size="320px"
        :with-header="false"
        direction="ltr"
        destroy-on-close
        :close-on-click-modal="false"
        @closed="$store.commit('drawers/setCurrentBlockIndex', -1)"
    >
        <div class="drawer__buttons-wrap">
            <ButtonUI text="Отмена" drawer secondary @click="toggleDrawer" />
        </div>

        <div class="blocks-drawer__body">
            <BlocksDetailsTemplate v-for="(block, index) in blocks" :key="index" :blockType="block.type">
                <p @click="addBlock(block.type)">
                    {{ block.text }}
                </p>
            </BlocksDetailsTemplate>
        </div>
    </el-drawer>
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import BlocksDetailsTemplate from './block-details/BlockDetailsTemplate.vue';
import { defineComponent } from 'vue';
import { BlockType, BlockTypeWithName, Page } from '@/types/pages';

export default defineComponent({
    name: 'BlocksDrawer',
    components: { InputUI, ButtonUI, BlocksDetailsTemplate },

    computed: {
        currentPage(): Page {
            return this.$store.state.pages.currentPage;
        },
        blocks(): BlockTypeWithName[] {
            return this.$store.state.pages.blocks;
        },
        pageLink(): string {
            return this.$route.params.pageLink as string;
        },
        blockIndex(): number {
            return this.$store.state.drawers.currentBlock.index;
        },
        drawerName(): string {
            return this.$options.name as string;
        },
        drawerVisibility: {
            get(): boolean {
                return this.$store.getters['drawers/getDrawerVisibility'](this.drawerName);
            },
            set(): void {
                this.drawerVisibility && this.toggleDrawer();
            },
        },
    },

    methods: {
        scrollToBlock(): void {
            const blockId = this.currentPage.blocks?.[this.blockIndex]?._id;
            console.log('blockId', blockId);
            if (blockId) {
                const element = document.getElementById(blockId) as HTMLElement;
                window.scrollTo({
                    top: element.offsetTop - 100,
                    behavior: 'smooth',
                });
            }
        },
        async addBlock(blockType: BlockType): Promise<void> {
            const payload = { pageLink: this.pageLink, blockType, blockIndex: this.blockIndex };
            await this.$store.dispatch('pages/addBlock', payload);
            this.scrollToBlock();
            this.toggleDrawer();
        },
        toggleDrawer(): void {
            this.$store.commit('drawers/toggleDrawer', this.drawerName);
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.blocks-drawer {
    .blocks-drawer__body {
        width: 100%;
        margin: 0 auto;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 24px;

        p {
            cursor: pointer;
            transition: 0.2s ease-in-out;

            &:hover {
                color: $primary-color;
            }
        }
    }

    .drawer__buttons-wrap {
        .button {
            width: 100%;
        }
    }
}
</style>
