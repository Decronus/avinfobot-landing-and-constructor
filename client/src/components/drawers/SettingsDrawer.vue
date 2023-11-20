<template>
    <el-drawer
        class="edit-settings__drawer"
        v-model="drawerVisibility"
        size="320px"
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
import InputUI from '@/components/ui/InputUI.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import MainBlockSettingsDrawerBody from './settings-drawer-bodies/MainBlockSettingsDrawerBody.vue';
import DefaultSettingsDrawerBody from './settings-drawer-bodies/DefaultSettingsDrawerBody.vue';
import { Component, defineComponent } from 'vue';
import { BlockType } from '@/types/pages';

export default defineComponent({
    name: 'SettingsDrawer',
    components: { InputUI, ButtonUI, MainBlockSettingsDrawerBody },

    computed: {
        currentBlockType(): BlockType {
            return this.$store.state.drawers.currentBlock.type;
        },
        drawerName(): string {
            return this.$options.name as string;
        },
        drawerBody(): Component {
            const drawerBodies: Record<BlockType, Component> = {
                main: MainBlockSettingsDrawerBody,
                title: DefaultSettingsDrawerBody,
                twoColumns: DefaultSettingsDrawerBody,
                textWithImage: DefaultSettingsDrawerBody,
                bullets: DefaultSettingsDrawerBody,
                titleWithText: DefaultSettingsDrawerBody,
                galleryWithText: DefaultSettingsDrawerBody,
                titleWithBg: DefaultSettingsDrawerBody,
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
            const drawerBody = this.$refs.drawerBody as Component & { updateBlockSettings: () => void };
            drawerBody && drawerBody.updateBlockSettings();
            this.toggleDrawer();
        },
        toggleDrawer(): void {
            this.$store.commit('drawers/toggleDrawer', this.drawerName);
        },
    },
});
</script>

<style lang="scss">
.edit-settings__drawer {
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
