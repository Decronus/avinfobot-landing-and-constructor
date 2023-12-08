<template>
    <div
        class="block title-with-text__block"
        :class="{ 'title-with-text__block-inverted': block?.settings.inverted, 'block-hover': isEditMode }"
        :id="block?._id"
    >
        <EditRow
            v-if="isEditMode"
            blockType="titleWithText"
            :blockIndex="blockIndex"
            :blocksAmount="blocksAmount"
            :blockId="(block?._id as string)"
        />

        <div class="content">
            <h3>{{ block?.content?.title }}</h3>
            <p>{{ block?.content?.text }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import EditRow from '@/components/blocks/edit-elements/EditRow.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import AddBlockButton from '@/components/blocks/edit-elements/AddBlockButton.vue';
import { TitleWithTextBlock } from '@/types/pages';
import { PropType, defineComponent } from 'vue';
import BlockMixin from './BlockMixin';

export default defineComponent({
    name: 'BulletsBlock',
    mixins: [BlockMixin],
    components: { ButtonUI, EditRow, AddBlockButton },
    props: {
        block: {
            type: Object as PropType<TitleWithTextBlock>,
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.title-with-text__block {
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
        z-index: 5;

        h3 {
            font-size: 32px;
            font-weight: 600;
            margin-bottom: 24px;
        }
    }
}

.title-with-text__block-inverted {
    background: $dark-bg-color;

    .content {
        h3,
        p {
            color: $dark-text-color;
        }
    }
}
</style>
