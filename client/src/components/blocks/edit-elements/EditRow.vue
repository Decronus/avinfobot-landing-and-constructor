<template>
    <div class="edit-row">
        <div class="edit-row__left">
            <div class="edit-row__left-buttons">
                <SettingsButton @click="openSettingsDrawer" />
                <EditContentButton @click="openEditContentDrawer" />
            </div>
            <p class="edit-row__block-name">{{ blockName }}</p>
        </div>

        <div class="edit-row__right" :class="{ 'merged-buttons': blocksAmount !== 1 }">
            <MoveBlockUpButton v-if="blockIndex !== 0" @click="moveBlock('up')" />
            <MoveBlockDownButton v-if="blockIndex !== blocksAmount - 1" @click="moveBlock('down')" />
            <DeleteBlockButton @click="deleteBlock" />
        </div>

        <AddBlockButton :blockIndex="blockIndex" />
    </div>
</template>

<script lang="ts">
import SettingsButton from '@/components/blocks/edit-elements/SettingsButton.vue';
import EditContentButton from '@/components/blocks/edit-elements/EditContentButton.vue';
import DeleteBlockButton from '@/components/blocks/edit-elements/DeleteBlockButton.vue';
import MoveBlockDownButton from './MoveBlockDownButton.vue';
import MoveBlockUpButton from './MoveBlockUpButton.vue';
import AddBlockButton from './AddBlockButton.vue';
import { PropType, defineComponent } from 'vue';
import { BlockType } from '@/types/pages';

export default defineComponent({
    name: 'EditRow',
    components: {
        SettingsButton,
        EditContentButton,
        DeleteBlockButton,
        MoveBlockDownButton,
        MoveBlockUpButton,
        AddBlockButton,
    },
    props: {
        blockType: {
            type: String as PropType<BlockType>,
            required: true,
        },
        blockIndex: {
            type: Number,
            required: true,
        },
        blockId: {
            type: String,
            required: true,
        },
        blocksAmount: {
            type: Number,
            required: true,
        },
    },

    computed: {
        pageLink(): string {
            return this.$store.state.pages.currentPage.link;
        },
        blockName(): string {
            const blockNames: Record<BlockType, string> = {
                main: 'Главная страница: заголовок, описание, призыв к действию',
                twoColumns: 'Две колонки: заголовок, подзаголовок, два абзаца',
                title: 'Одиночный заголовок',
                textWithImage: 'Текст и изображение',
                bullets: 'Буллеты',
                titleWithText: 'Заголовок и текст',
                galleryWithText: 'Галерея с текстом',
                titleWithBg: 'Заголовок с фоновым изображением',
            };
            return blockNames[this.blockType];
        },
    },

    methods: {
        scrollToBlock(): void {
            const block = document.getElementById(this.blockId) as HTMLElement;
            if (block) {
                window.scrollTo({
                    top: block.offsetTop - 100,
                    behavior: 'smooth',
                });
            }
        },
        async moveBlock(direction: 'up' | 'down'): Promise<void> {
            let nextIndex;
            if (direction === 'up') nextIndex = this.blockIndex - 1;
            if (direction === 'down') nextIndex = this.blockIndex + 1;

            const payload = { pageLink: this.pageLink, prevIndex: this.blockIndex, nextIndex };
            await this.$store.dispatch('pages/replaceBlocks', payload);
            this.scrollToBlock();
        },
        deleteBlock(): void {
            const payload = { pageLink: this.pageLink, blockId: this.blockId };
            this.$store.dispatch('pages/deleteBlockFromPage', payload);
        },
        openEditContentDrawer(): void {
            const payload = { id: this.blockId, type: this.blockType, index: this.blockIndex };
            this.$store.commit('drawers/setCurrentBlock', payload);
            this.$store.commit('drawers/toggleDrawer', 'EditContentDrawer');
        },
        openSettingsDrawer(): void {
            const payload = { id: this.blockId, type: this.blockType, index: this.blockIndex };
            this.$store.commit('drawers/setCurrentBlock', payload);
            this.$store.commit('drawers/toggleDrawer', 'SettingsDrawer');
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.edit-row {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    top: 15px;
    padding: 0 15px;
    opacity: 0;

    .edit-row__left {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .edit-row__left-buttons {
            display: flex;
            gap: 8px;
        }

        .edit-row__block-name {
            font-size: 10px;
            color: #959595;
            width: 160px;
        }

        .button {
            align-self: flex-start;
        }
    }

    .edit-row__right {
        display: flex;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        border-radius: 4px;

        .button-edit {
            box-shadow: none;
        }
    }
}
</style>
