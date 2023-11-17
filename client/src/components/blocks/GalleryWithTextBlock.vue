<template>
    <div
        class="block gallery-with-text__block"
        :class="{ 'gallery-with-text__block-inverted': block?.settings.inverted, 'block-hover': isEditMode }"
        :id="block?._id"
    >
        <EditRow
            v-if="isEditMode"
            blockType="galleryWithText"
            :blockIndex="blockIndex"
            :blocksAmount="blocksAmount"
            :blockId="(block?._id as string)"
        />

        <div class="content">
            <div v-for="(text, index) in texts" :key="index" class="gallery-card">
                <div
                    class="image"
                    :style="images[index] ? { 'background-image': `url(${apiUrl}/${images[index]})` } : {}"
                />
                <p>{{ text }}</p>
            </div>
        </div>

        <AddBlockButton v-if="isEditMode" :blockIndex="blockIndex" />
    </div>
</template>

<script lang="ts">
import EditRow from '@/components/blocks/edit-elements/EditRow.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import AddBlockButton from '@/components/blocks/edit-elements/AddBlockButton.vue';
import { GalleryWithTextBlock } from '@/types/pages';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
    name: 'GalleryWithTextBlock',
    components: { ButtonUI, EditRow, AddBlockButton },
    props: {
        isEditMode: {
            type: Boolean,
            required: false,
            default: false,
        },
        block: {
            type: Object as PropType<GalleryWithTextBlock>,
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

    computed: {
        apiUrl(): string {
            return process.env.VUE_APP_API_URL;
        },
        texts(): string[] {
            return this.block?.content.texts as string[];
        },
        images(): string[] {
            return this.block?.content?.images as string[];
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.gallery-with-text__block {
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
        grid-template-columns: 1fr 1fr 1fr;
        flex-wrap: wrap;
        column-gap: 14px;
        row-gap: 32px;

        @media (max-width: 767.99px) {
            grid-template-columns: 1fr;
        }

        .image {
            width: 100%;
            height: 322px;
            margin-bottom: 16px;
            background-size: cover;
            background-position: center;
            background-image: url('https://a.d-cd.net/6f3caees-1920.jpg');
        }
    }
}

.text-with-image__block-inverted {
    background: $dark-bg-color;

    .content {
        p {
            color: $dark-text-color;
        }
    }
}
</style>
