<template>
    <div
        class="block title-block"
        :class="{ 'title-block__inverted': block?.settings?.inverted, 'block-hover': isEditMode }"
        :id="block?._id"
    >
        <EditRow
            v-if="isEditMode"
            blockType="title"
            :blockIndex="blockIndex"
            :blocksAmount="blocksAmount"
            :blockId="(block?._id as string)"
        />

        <div class="content">
            <h1 v-html="content?.title" :contenteditable="isEditMode" @blur="updateBlockContent($event, 'title')" />
        </div>
    </div>
</template>

<script lang="ts">
import EditRow from '@/components/blocks/edit-elements/EditRow.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';

import AddBlockButton from '@/components/blocks/edit-elements/AddBlockButton.vue';
import { TitleBlock } from '@/types/pages';
import { PropType, defineComponent } from 'vue';
import BlockMixin from './BlockMixin';

export default defineComponent({
    name: 'TitleBlock',
    mixins: [BlockMixin],
    components: { ButtonUI, EditRow, AddBlockButton },
    props: {
        block: {
            type: Object as PropType<TitleBlock>,
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
        z-index: 5;

        h1 {
            font-size: 48px;
        }
    }
}

.title-block__inverted {
    background: $dark-bg-color;

    .content {
        h1 {
            color: $dark-text-color;
            white-space: pre-wrap;
        }
    }
}
</style>
