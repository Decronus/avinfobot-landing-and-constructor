<template>
    <div
        class="block main-block"
        :class="{ 'main-block__inverted': block?.settings.inverted, 'block-hover': isEditMode }"
    >
        <EditRow
            v-if="isEditMode"
            blockType="main"
            :blockIndex="blockIndex"
            :blocksAmount="blocksAmount"
            :blockId="(block?._id as string)"
        />

        <div class="content">
            <div class="squares-wrap">
                <AngleElement style="margin-left: auto" />
            </div>

            <h1>{{ block?.content.title }}</h1>
            <p>
                {{ block?.content.description }}
            </p>
            <ButtonUI
                v-if="block?.content.action.active"
                :text="block?.content.action.text"
                style="margin-bottom: 80px"
            />

            <div class="squares-wrap">
                <FourSquares v-if="!block?.content.action.active" />
                <FourSquares style="margin-left: auto" />
            </div>
        </div>

        <div class="read-next__wrap" v-if="block?.settings.readNext">
            <span>Читать далее</span>
            <ArrowInCircleIcon />
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
import { MainBlock } from '@/types/pages';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
    name: 'MainBlock',
    components: { ButtonUI, FourSquares, AngleElement, ArrowInCircleIcon, EditRow, AddBlockButton },
    props: {
        isEditMode: {
            type: Boolean,
            required: false,
            default: false,
        },
        block: {
            type: Object as PropType<MainBlock>,
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

    methods: {
        openBlocksDrawer(): void {
            this.$store.commit('drawers/setCurrentBlock', this.block?.type);
            this.$store.commit('drawers/toggleDrawer', 'BlocksDrawer');
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.main-block {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url('https://a.d-cd.net/6f3caees-1920.jpg');
    background-attachment: fixed;
    background-color: rgba(255, 255, 255, 0.8);
    background-blend-mode: overlay;
    background-size: cover;
    background-repeat: no-repeat;

    .content {
        max-width: 964px;
        width: 100%;

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

        .squares-wrap {
            display: flex;
            justify-content: space-between;
        }
    }

    .read-next__wrap {
        position: absolute;
        bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        animation: arrowAnimation 1s infinite alternate;
        transition: transform 0.2s ease-in-out;

        @keyframes arrowAnimation {
            0% {
                transform: translateY(0);
            }
            100% {
                transform: translateY(8px);
            }
        }

        span {
            font-size: 14px;
        }
    }
}

.main-block__inverted {
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
