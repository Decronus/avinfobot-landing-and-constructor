<template>
    <div
        class="block two-columns__block"
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
                <h3 v-html="content?.title" contenteditable @blur="updateBlockContent($event, 'title')" />
                <p
                    class="subtitle"
                    v-html="content?.subtitle"
                    contenteditable
                    @blur="updateBlockContent($event, 'subtitle')"
                />
                <p
                    class="paragraph"
                    v-html="content?.firstColumnText"
                    contenteditable
                    @blur="updateBlockContent($event, 'firstColumnText')"
                />
            </div>
            <div class="column right-column">
                <p
                    v-html="content?.secondColumnText"
                    contenteditable
                    @blur="updateBlockContent($event, 'secondColumnText')"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import EditRow from '@/components/blocks/edit-elements/EditRow.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import AddBlockButton from '@/components/blocks/edit-elements/AddBlockButton.vue';
import { TwoColumnsBlock } from '@/types/pages';
import { PropType, defineComponent } from 'vue';
import BlockMixin from './BlockMixin';

export default defineComponent({
    name: 'TwoColumnsBlock',
    mixins: [BlockMixin],
    components: { ButtonUI, EditRow, AddBlockButton },
    props: {
        block: {
            type: Object as PropType<TwoColumnsBlock>,
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
        z-index: 5;

        @media (max-width: 619.99px) {
            grid-template-columns: 1fr;
        }

        .column {
            width: 100%;

            h3 {
                font-size: 32px;
                margin-bottom: 8px;
                word-break: break-word;
                white-space: pre-wrap;

                @media (max-width: 768px) {
                    font-size: 24px;
                }
            }

            .subtitle {
                font-size: 14px;
                color: $secondary-text-color;
                margin-bottom: 24px;
                word-break: break-word;
                white-space: pre-wrap;
            }

            p {
                font-size: 20px;
                word-break: break-word;
                white-space: pre-wrap;
            }
        }

        .left-column .paragraph:after {
            content: '';
            display: block;
            width: 60%;
            height: 8px;
            background-color: $primary-color;
            margin-top: 24px;
        }
    }
}

.two-columns__block-inverted {
    background: $dark-bg-color;

    .content {
        h3,
        p {
            color: $dark-text-color;
        }
    }
}
</style>
