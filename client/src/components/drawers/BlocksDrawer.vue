<template>
    <el-drawer
        class="blocks-drawer"
        v-model="drawerVisibility"
        size="320px"
        :with-header="false"
        direction="ltr"
        :close-on-click-modal="false"
        @closed="$store.commit('drawers/setCurrentBlockIndex', -1)"
    >
        <div class="drawer__buttons-wrap">
            <ButtonUI text="Отмена" drawer secondary @click="toggleDrawer" />
        </div>

        <div class="blocks-drawer__body">
            <p v-for="(block, index) in blocks" :key="index" @click="addBlock(block.type)">
                {{ block.text }}
            </p>
        </div>
    </el-drawer>
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import { defineComponent } from 'vue';
import { BlockType, BlockTypeWithName } from '@/types/pages';

export default defineComponent({
    name: 'BlocksDrawer',
    components: { InputUI, ButtonUI },

    computed: {
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
        async addBlock(blockType: BlockType): Promise<void> {
            const payload = { pageLink: this.pageLink, blockType, blockIndex: this.blockIndex };
            await this.$store.dispatch('pages/addBlock', payload);
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
