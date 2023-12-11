<template>
    <div id="partners" class="partners">
        <img class="partners__back" src="@/assets/img/main-page/partners__back.png" alt="" />
        <div class="partners__wrapper container">
            <div class="partners__title">
                Сервис для тех, кто хочет быть уверенным в авто<br />
                перед покупкой и <span class="theme__red">сэкономить свои деньги и время</span>
            </div>
            <div class="partners__subtitle">Какие источники используем?</div>
            <div class="partners__row">
                <div class="partners__column">
                    <div class="partners__item">
                        <div class="partners__text">
                            Российский союз<br />
                            автостраховщиков
                        </div>
                        <img src="@/assets/img/main-page/partners/partners__rsa.webp" alt="" />
                    </div>
                    <div class="partners__item">
                        <div class="partners__text">
                            Бюро кредитных<br />
                            историй
                        </div>
                        <img src="@/assets/img/main-page/partners/partners__buro-kred.webp" alt="" />
                    </div>
                    <div class="partners__item">
                        <div class="partners__text">ФССП</div>
                        <img src="@/assets/img/main-page/partners/partners__fssp.webp" alt="" />
                    </div>
                    <div class="partners__item">
                        <div class="partners__text">Суды РФ</div>
                        <img src="@/assets/img/main-page/partners/partners__sudi-rf.webp" alt="" />
                    </div>
                    <div class="partners__item">
                        <div class="partners__text">Федеральная таможенная служба РФ</div>
                        <img src="@/assets/img/main-page/partners/partners__tamojna.webp" alt="" />
                    </div>
                    <div class="partners__item partners__item_mobile">
                        <div class="partners__text">
                            Нотариальная<br />
                            палата
                        </div>
                        <img src="@/assets/img/main-page/partners/partners__palata.webp" alt="" />
                    </div>
                </div>
                <div class="partners__phone-img">
                    <img src="@/assets/img/main-page/partners__phone.webp" alt="" />
                </div>
                <div class="partners__column">
                    <div class="partners__item partners__item_desktop">
                        <div class="partners__text">Нотариальная палата</div>
                        <img src="@/assets/img/main-page/partners/partners__palata.webp" alt="" />
                    </div>
                    <div class="partners__item partners__item_order-1">
                        <div class="partners__text">Банки</div>
                        <img src="@/assets/img/main-page/partners/partners__banks.webp" alt="" />
                    </div>
                    <div class="partners__item partners__item_order-3">
                        <div class="partners__text">
                            Страховые<br />
                            компании
                        </div>
                        <img src="@/assets/img/main-page/partners/partners__strahovie.webp" alt="" />
                    </div>
                    <div class="partners__item partners__item_order-2">
                        <div class="partners__text">Автодилеры</div>
                        <img src="@/assets/img/main-page/partners/partners__avtodileri.webp" alt="" />
                    </div>
                    <div class="partners__item partners__item_order-4">
                        <div class="partners__text">
                            Доски<br />
                            объявлений
                        </div>
                        <img src="@/assets/img/main-page/partners/partners__marketplace.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PartnersBlock',
});
</script>
