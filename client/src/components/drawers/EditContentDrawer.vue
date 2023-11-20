<template>
    <el-drawer
        class="edit-content__drawer"
        v-model="drawerVisibility"
        size="710px"
        :with-header="false"
        direction="ltr"
        :close-on-click-modal="false"
        destroy-on-close
    >
        <div class="drawer__buttons-wrap">
            <ButtonUI text="Отмена" drawer secondary @click="toggleDrawer" />
            <ButtonUI text="Сохранить и закрыть" drawer @click="saveAndClose" />
        </div>

        <div class="edit-drawer__body">
            <component :is="drawerBody" ref="drawerBody" />
        </div>
    </el-drawer>
</template>

<script lang="ts">
import ButtonUI from '@/components/ui/ButtonUI.vue';
import MainBlockEditContentDrawerBody from './edit-content-drawer-bodies/MainBlockEditContentDrawerBody.vue';
import TitleBlockEditContentDrawerBody from './edit-content-drawer-bodies/TitleBlockEditContentDrawerBody.vue';
import TwoColumnsBlockEditContentDrawerBody from './edit-content-drawer-bodies/TwoColumnsBlockEditContentDrawerBody.vue';
import TextWithImageBlockEditContentDrawerBody from './edit-content-drawer-bodies/TextWithImageBlockEditContentDrawerBody.vue';
import BulletsBlockEditContentDrawerBody from './edit-content-drawer-bodies/BulletsBlockEditContentDrawerBody.vue';
import TitleWithTextBlockEditContentDrawerBody from './edit-content-drawer-bodies/TitleWithTextBlockEditContentDrawerBody.vue';
import GalleryWithTextBlockEditContentDrawerBody from './edit-content-drawer-bodies/GalleryWithTextBlockEditContentDrawerBody.vue';
import TitleWithBgBlockEditContentDrawerBody from './edit-content-drawer-bodies/TitleWithBgBlockEditContentDrawerBody.vue';
import { Component, defineComponent } from 'vue';
import { BlockType } from '@/types/pages';

export default defineComponent({
    name: 'EditContentDrawer',
    components: {
        ButtonUI,
    },

    computed: {
        currentBlockType(): BlockType {
            return this.$store.state.drawers.currentBlock.type;
        },
        drawerName(): string {
            return this.$options.name as string;
        },
        drawerBody(): Component {
            const drawerBodies: Record<BlockType, Component> = {
                main: MainBlockEditContentDrawerBody,
                title: TitleBlockEditContentDrawerBody,
                twoColumns: TwoColumnsBlockEditContentDrawerBody,
                textWithImage: TextWithImageBlockEditContentDrawerBody,
                bullets: BulletsBlockEditContentDrawerBody,
                titleWithText: TitleWithTextBlockEditContentDrawerBody,
                galleryWithText: GalleryWithTextBlockEditContentDrawerBody,
                titleWithBg: TitleWithBgBlockEditContentDrawerBody,
            };
            return drawerBodies[this.currentBlockType];
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
        saveAndClose(): void {
            const drawerBody = this.$refs.drawerBody as Component & {
                updateBlockContentAndImages: () => void;
            };
            drawerBody && drawerBody.updateBlockContentAndImages();
            this.toggleDrawer();
        },
        toggleDrawer(): void {
            this.$store.commit('drawers/toggleDrawer', this.drawerName);
        },
    },
});
</script>

<style lang="scss">
.edit-content__drawer {
    @media (max-width: 709.99px) {
        .el-drawer__body {
            width: 100vw;
        }
    }

    .edit-drawer__body {
        max-width: 620px;
        margin: 0 auto;
        padding: 48px 20px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .drawer__buttons-wrap {
        display: flex;
    }
}
</style>
