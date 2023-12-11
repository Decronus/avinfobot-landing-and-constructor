<template>
    <div class="zadatochniki-page__block zadatok__main-block">
        <div class="content">
            <a href="http://avclick.me/v/AVinfoBotPro?start=ref1045191">
                <img src="@/assets/img/main-page/header__logo.png" alt="" />
            </a>
            <h1>
                <span class="theme__red">ЗАДАТОЧНИКИ.</span> <br />
                Как не попасть на мошенников?
            </h1>
            <p>
                Сегодня поговорим, <span class="theme__red">как определить задаточника</span> и
                <span class="theme__red">как не попасться на уловки мошенников.</span> Но сначала надо разобраться, кто
                это такие, и почему их стоит опасаться?
            </p>

            <ButtonUI text="Читать далее..." @click="$router.push({ hash: '#who' })" />
        </div>
    </div>
</template>

<script lang="ts">
import ButtonUI from '@/components/ui/ButtonUI.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MainBlock',
    components: {
        ButtonUI,
    },
});
</script>

<style lang="scss">
.zadatok__main-block {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 48px;
    background-color: rgba(255, 255, 255, 0.85);
    background-blend-mode: overlay;
    background-image: url('https://originalpoddelka.ru/wp-content/uploads/2021/02/peredacha-deneg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .content {
        align-items: center;

        img {
            width: 100px;
            margin-bottom: 20px;
        }

        p {
            max-width: 700px;
            margin-bottom: 48px;
        }

        margin-bottom: 64px;
    }
}
</style>
