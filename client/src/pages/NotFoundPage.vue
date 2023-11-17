<template>
    <div class="not-found__page">
        <div class="content">
            <img src="@/assets/img/cat-not-found.webp" alt="" />
            <h1>404</h1>
            <p>Страница не найдена</p>
            <!-- <ButtonUI text="Назад" @click="$router.go(-1)" /> -->
        </div>
    </div>
</template>

<script lang="ts">
import ButtonUI from '@/components/ui/ButtonUI.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LandingPage',
    components: { ButtonUI },

    methods: {},
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.not-found__page {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        margin-top: -48px;

        img {
            width: 150px;
        }

        h1 {
            font-size: 64px;
        }
    }
}
</style>
