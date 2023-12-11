<template>
    <div id="feedback" class="feedback">
        <div class="feedback__title">Видеоотзывы о нашем боте</div>
        <swiper-container
            class="swiper-container"
            :loop="true"
            :centered-slides="true"
            :breakpoints="{
                '320': {
                    slidesPerView: 1.2,
                    spaceBetween: -30,
                },
                '768': {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
            }"
        >
            <swiper-slide>
                <div
                    class="feedback__item"
                    href="#feedback3"
                    @click="openModal('https://www.youtube.com/embed/7Q5T5VdYRuw')"
                >
                    <!-- Уголовка или ... -->
                    <img src="@/assets/img/main-page/feedback_3_3.jpg" alt="" />
                    <div class="feedback__play"></div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div
                    class="feedback__item"
                    href="#feedback2"
                    @click="openModal('https://www.youtube.com/embed/S8MZKMdg4Rw')"
                >
                    <!-- Следи за нами ... -->
                    <img src="@/assets/img/main-page/feedback_2_3.jpg" alt="" />
                    <div class="feedback__play"></div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div
                    class="feedback__item"
                    href="#feedback1"
                    @click="openModal('https://www.youtube.com/embed/AbUul0u-xrw')"
                >
                    <!-- Функции и возможности ... -->
                    <img src="@/assets/img/main-page/feedback_1_3.jpg" alt="" />
                    <div class="feedback__play"></div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div
                    class="feedback__item"
                    href="#feedback4"
                    @click="openModal('https://www.youtube.com/embed/YN-JUXYf2GE')"
                >
                    <!-- Функции бота ... -->
                    <img src="@/assets/img/main-page/feedback_4_3.jpg" alt="" />
                    <div class="feedback__play"></div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div
                    class="feedback__item"
                    href="#feedback3"
                    @click="openModal('https://www.youtube.com/embed/7Q5T5VdYRuw')"
                >
                    <!-- Уголовка или ... -->
                    <img src="@/assets/img/main-page/feedback_3_3.jpg" alt="" />
                    <div class="feedback__play"></div>
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { register } from 'swiper/element/bundle';
register();

export default defineComponent({
    name: 'FeedbackBlock',
    methods: {
        openModal(url: string): void {
            this.$emit('setVideoUrl', url);
            this.$emit('openFeedbackModal');
        },
    },
});
</script>

<style>
@media screen and (max-width: 768px) {
    .swiper-container {
        transform: translate(17px) scale(1.1);
    }
}
</style>
