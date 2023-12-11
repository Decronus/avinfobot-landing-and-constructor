<template>
    <div id="advantages" class="advantages">
        <div class="advantages__wrapper container">
            <a
                class="advantages__button theme__button"
                href="http://avclick.me/v/AVinfoBotPro?start=ref1045191"
                target="_blank"
                ><span>Проверить авто</span></a
            >
            <div class="advantages__title">Преимущества avinfobot</div>
            <div class="advantages__row">
                <div class="advantages__item">
                    <img class="desktop" src="@/assets/img/main-page/advantages/adv_1.jpg" alt="" />
                    <img class="mob" src="@/assets/img/main-page/advantages/adv_1-mob.jpg" alt="" />
                    <div class="advantages__text">
                        Есть подписка - можно<br />
                        проверить любое количество<br />
                        автомобилей без ограничений
                    </div>
                </div>
                <div class="advantages__item">
                    <img src="@/assets/img/main-page/advantages/adv_9.jpg" alt="" />
                    <div class="advantages__text">
                        Скорость работы - полный<br />
                        отчёт формируется менее<br />
                        чем за минуту
                    </div>
                </div>
                <div class="advantages__item">
                    <img src="@/assets/img/main-page/advantages/adv_3.jpg" alt="" />
                    <div class="advantages__text">
                        Фотографии 60%<br />
                        автопарка страны -<br />
                        в базе AVinfoBot
                    </div>
                </div>
                <div class="advantages__item">
                    <img src="@/assets/img/main-page/advantages/adv_4.jpg" alt="" />
                    <div class="advantages__text">
                        Бот проверяет не только<br />
                        автомобиль, но и его<br />
                        продавца
                    </div>
                </div>
                <div class="advantages__item">
                    <img src="@/assets/img/main-page/advantages/adv_5.jpg" alt="" />
                    <div class="advantages__text">
                        Доступ к поиску объявлений<br />
                        через AV100.ME входит в<br />
                        стоимость
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AdvantagesBlock',
});
</script>
