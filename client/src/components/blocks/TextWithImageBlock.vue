<template>
    <div
        class="block text-with-image__block"
        :class="{ 'two-columns__block-inverted': block?.settings.inverted, 'block-hover': isEditMode }"
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
                <p>{{ block?.content?.text }}</p>
            </div>
            <div class="column right-column">
                <div class="image"></div>
            </div>
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
import { TextWithImageBlock } from '@/types/pages';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
    name: 'TextWithImageBlock',
    components: { ButtonUI, FourSquares, AngleElement, ArrowInCircleIcon, EditRow, AddBlockButton },
    props: {
        isEditMode: {
            type: Boolean,
            required: false,
            default: false,
        },
        block: {
            type: Object as PropType<TextWithImageBlock>,
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

.text-with-image__block {
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

            p {
                font-size: 20px;

                &:after {
                    content: '';
                    display: block;
                    width: 60%;
                    height: 8px;
                    background-color: $primary-color;
                    margin-top: 24px;
                }
            }

            .image {
                width: 100%;
                min-height: 240px;
                background-size: cover;
                background-position: center;
                background-image: url('https://a.d-cd.net/6f3caees-1920.jpg');
            }
        }
    }
}

.two-columns__block-inverted {
    background: $dark-bg-color;

    h3,
    p {
        color: $dark-text-color;
    }
}
</style>
