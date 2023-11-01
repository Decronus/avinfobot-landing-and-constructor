<template>
    <div
        class="block two-columns__block"
        :class="{ 'two-columns__block__inverted': block?.settings.inverted, 'block-hover': isEditMode }"
    >
        <EditRow v-if="isEditMode" blockType="twoColumns" />

        <div class="content">
            <h1>Две колонки</h1>
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
    background-color: rgba(255, 255, 255, 0.8);

    .content {
        max-width: 964px;

        h1 {
            font-size: 72px;
            margin-bottom: 24px;

            @media (max-width: 768px) {
                font-size: 48px;
            }
        }

        p {
            margin-bottom: 80px;
        }
    }
}

.two-columns__block__inverted {
    background-color: rgba(13, 2, 2, 0.5);

    h1,
    p {
        color: #ffffff;
    }

    .read-next__wrap {
        span {
            color: rgba(255, 255, 255, 0.7);
        }
        svg path {
            fill: rgba(255, 255, 255, 0.7);
        }
    }
}
</style>
