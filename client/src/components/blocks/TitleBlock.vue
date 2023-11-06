<template>
    <div
        class="block title-block"
        :class="{ 'title-block__inverted': block?.settings.inverted, 'block-hover': isEditMode }"
    >
        <EditRow v-if="isEditMode" blockType="title" :blockIndex="blockIndex" :blocksAmount="blocksAmount" />

        <div class="content">
            <h1>Заголовок</h1>
        </div>

        <AddBlockButton v-if="isEditMode" :blockIndex="blockIndex" />
    </div>
</template>

<script lang="ts">
import EditRow from '@/components/blocks/edit-elements/EditRow.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import FourSquares from '@/components/decorative-elements/FourSquares.vue';
import AngleElement from '@/components/decorative-elements/AngleElement.vue';
import ArrowInCircleIcon from '@/components/icons/ArrowInCircleIcon.vue';
import AddBlockButton from '@/components/blocks/edit-elements/AddBlockButton.vue';
import { TitleBlock } from '@/types/pages';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
    name: 'TitleBlock',
    components: { ButtonUI, FourSquares, AngleElement, ArrowInCircleIcon, EditRow, AddBlockButton },
    props: {
        isEditMode: {
            type: Boolean,
            required: false,
            default: false,
        },
        block: {
            type: Object as PropType<TitleBlock>,
        },
        blockIndex: {
            type: Number,
            required: true,
        },
        blocksAmount: {
            type: Number,
            required: true,
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.title-block {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 0 !important;
    background: #fff;

    .content {
        max-width: 964px;

        h1 {
            font-size: 48px;
        }
    }
}

.title-block__inverted {
    background-color: rgba(13, 2, 2, 0.5);

    h1 {
        color: #ffffff;
    }
}
</style>
