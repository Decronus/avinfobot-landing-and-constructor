<template>
    <div
        class="block two-columns__block"
        :class="{ 'two-columns__block__inverted': block?.settings.inverted, 'block-hover': isEditMode }"
        :id="block?._id"
    >
        <EditRow
            v-if="isEditMode"
            blockType="twoColumns"
            :blockIndex="blockIndex"
            :blocksAmount="blocksAmount"
            :blockId="(block?._id as string)"
        />

        <div class="content">
            <div class="column left-column">
                <h3>{{ block?.content.title }}</h3>
            </div>
            <div class="column right-column"></div>
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
import { TwoColumnsBlock } from '@/types/pages';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
    name: 'TwoColumnsBlock',
    components: { ButtonUI, FourSquares, AngleElement, ArrowInCircleIcon, EditRow, AddBlockButton },
    props: {
        isEditMode: {
            type: Boolean,
            required: false,
            default: false,
        },
        block: {
            type: Object as PropType<TwoColumnsBlock>,
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

.two-columns__block {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 20px;
    background: #fff;

    .content {
        width: 100%;
        max-width: 964px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;

        .column {
            width: 100%;
        }

        h3 {
            font-size: 32px;
            margin-bottom: 8px;

            @media (max-width: 768px) {
                font-size: 24px;
            }
        }
    }
}

.two-columns__block__inverted {
    background-color: rgba(13, 2, 2, 0.5);
}
</style>
