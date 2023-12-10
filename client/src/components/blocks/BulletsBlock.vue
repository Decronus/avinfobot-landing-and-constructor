<template>
    <div
        class="block bullets__block"
        :class="{ 'bullets__block-inverted': block?.settings.inverted, 'block-hover': isEditMode }"
        :id="block?._id"
    >
        <EditRow
            v-if="isEditMode"
            blockType="bullets"
            :blockIndex="blockIndex"
            :blocksAmount="blocksAmount"
            :blockId="(block?._id as string)"
        />

        <div class="content">
            <template v-for="(bullet, index) in content?.bullets" class="bullet">
                <h3 class="bullet-number">{{ index + 1 }}</h3>
                <p
                    class="bullet-text"
                    v-html="bullet"
                    :contenteditable="isEditMode"
                    @blur="updateBlockContent($event, 'bullets', index)"
                />
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import EditRow from '@/components/blocks/edit-elements/EditRow.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import AddBlockButton from '@/components/blocks/edit-elements/AddBlockButton.vue';
import { BulletsBlock } from '@/types/pages';
import { PropType, defineComponent } from 'vue';
import BlockMixin from './BlockMixin';

export default defineComponent({
    name: 'BulletsBlock',
    mixins: [BlockMixin],
    components: { ButtonUI, EditRow, AddBlockButton },
    props: {
        block: {
            type: Object as PropType<BulletsBlock>,
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.bullets__block {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 20px;
    background: #fff;

    .content {
        width: 100%;
        max-width: 768px;
        display: grid;
        grid-template-columns: 50px 1fr;
        gap: 16px;
        z-index: 5;

        .bullet-number {
            font-size: 64px;
            font-family: RoadRadio;
            text-align: center;
            line-height: 70%;
        }

        .bullet-text {
            white-space: pre-wrap;

            &:not(:last-child) {
                margin-bottom: 32px;
            }
        }
    }
}

.bullets__block-inverted {
    background: $dark-bg-color;

    .content {
        .bullet-number,
        .bullet-text {
            color: $dark-text-color;
        }
    }
}
</style>
