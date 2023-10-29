<template>
    <div class="block main-block" :class="{ 'main-block__inverted': block?.inverted }">
        <div class="content">
            <div class="squares-wrap">
                <AngleElement style="margin-left: auto" />
            </div>

            <h1>Рыбный текст основного заголовка</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur. Enim ipsum mollis est vel hendrerit arcu dignissim feugiat
                mauris. Faucibus dolor mauris urna vel etiam metus vestibulum porttitor aliquet. Nunc aliquet quisque
                morbi eu mattis egestas viverra. Lacinia eu vestibulum amet sagittis eu integer nibh.
            </p>
            <ButtonUI style="margin-bottom: 80px" />

            <div class="squares-wrap">
                <!-- <FourSquares /> -->
                <FourSquares style="margin-left: auto" />
            </div>
        </div>

        <div class="read-next__wrap">
            <span>Читать далее</span>
            <ArrowInCircleIcon />
        </div>
    </div>
</template>

<script lang="ts">
import ButtonUI from '@/components/ui/ButtonUI.vue';
import FourSquares from '@/components/decorative-elements/FourSquares.vue';
import AngleElement from '@/components/decorative-elements/AngleElement.vue';
import ArrowInCircleIcon from '@/components/icons/ArrowInCircleIcon.vue';
import { MainBlock } from '@/types/pages';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
    name: 'MainBlock',
    components: { ButtonUI, FourSquares, AngleElement, ArrowInCircleIcon },
    props: {
        block: {
            type: Object as PropType<MainBlock>,
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

        h1 {
            font-size: 72px;
            margin-bottom: 24px;
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
