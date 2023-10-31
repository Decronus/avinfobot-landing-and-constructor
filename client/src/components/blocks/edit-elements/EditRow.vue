<template>
    <div class="edit-row">
        <div class="edit-row__left">
            <div class="edit-row__left-buttons">
                <SettingsButton @click="openSettingsDrawer" />
                <EditContentButton @click="openEditContentDrawer" />
            </div>
            <p class="edit-row__block-name">{{ blockName }}</p>
        </div>
        <DeleteContentButton />
    </div>
</template>

<script lang="ts">
import SettingsButton from '@/components/blocks/edit-elements/SettingsButton.vue';
import EditContentButton from '@/components/blocks/edit-elements/EditContentButton.vue';
import DeleteContentButton from '@/components/blocks/edit-elements/DeleteBlockButton.vue';
import { PropType, defineComponent } from 'vue';
import { BlockType } from '@/types/pages';

export default defineComponent({
    name: 'EditRow',
    components: { SettingsButton, EditContentButton, DeleteContentButton },
    props: {
        blockType: {
            type: String as PropType<BlockType>,
            required: true,
        },
    },

    computed: {
        blockName(): string {
            const blockNames: Record<BlockType, string> = {
                main: 'Главная страница: заголовок, описание, призыв к действию',
                twoColumns: 'Две колонки: заголовок, подзаголовок, два абзаца',
                title: 'Одиночный заголовок',
            };
            return blockNames[this.blockType];
        },
    },

    methods: {
        openEditContentDrawer(): void {
            this.$store.commit('drawers/setCurrentEditContentDrawerBlock', this.blockType);
            this.$store.commit('drawers/toggleDrawer', 'EditContentDrawer');
        },
        openSettingsDrawer(): void {
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
    width: 100%;
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
}
</style>
