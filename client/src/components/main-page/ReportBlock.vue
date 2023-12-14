<template>
    <div id="how" class="report">
        <div class="report__wrapper container">
            <a class="report__button theme__button" :href="reportLink" target="_blank"
                ><span>Посмотреть пример отчета</span></a
            >
            <div class="report__title">
                Чтобы получить отчет с историей авто, достаточно<br />
                знать <span class="theme__red">госномер</span> или <span class="theme__red">VIN-номер</span> автомобиля
            </div>
            <div class="report__row">
                <div class="report__video">
                    <iframe
                        src="https://www.youtube.com/embed/AbUul0u-xrw"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>

                <div class="report__content">
                    <div class="report__subtitle">Как работает бот?</div>
                    <div class="report__item">
                        <div class="report__num">1</div>
                        <div class="report__text">
                            Установите приложение «Telegram». Скачать приложение можно по ссылкам (<a
                                href="https://apps.apple.com/ru/app/telegram/id686449807"
                                target="_blank"
                                >iOS</a
                            >,
                            <a
                                href="https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=ru&gl=US"
                                target="_blank"
                                >Android</a
                            >)
                        </div>
                    </div>
                    <div class="report__item">
                        <div class="report__num">2</div>
                        <div class="report__text">
                            Перейдите в бот «AVinfoBot» по любой кнопке на сайте или
                            <a href="http://avclick.me/v/AVinfoBotPro?start=ref1045191" target="_blank">по ссылке</a>
                        </div>
                    </div>
                    <div class="report__item">
                        <div class="report__num">3</div>
                        <div class="report__text">Отправьте боту VIN или номер машины</div>
                    </div>
                    <div class="report__item">
                        <div class="report__num">4</div>
                        <div class="report__text">Получите всю информацию об автомобиле</div>
                    </div>
                    <div class="report__promo">
                        <img class="report__logo" src="@/assets/img/main-page/header__logo.png" alt="" />
                        <div class="report__promo-text">
                            Можно проверить авто по фото,<br />
                            на котором виден госномер,<br />по номеру двигателя,<br />по номеру ПТС
                        </div>
                        <img class="report__car" src="@/assets/img/main-page/report__car.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ReportBlock',
    data() {
        return {
            reportLink: 'https://avinforeport.com/report/5d9f900b-0565-428b-b42b-20b2c2522bcf',
            links: [
                'https://avinfotelegraph.com/report/76e82d52-ece4-457d-8f7c-b812e2d61ce7',
                'https://avinfotelegraph.com/report/466f7bcf-0f5a-4485-8631-3c444cc1f630',
                'https://avinfotelegraph.com/report/6ebd0f54-8e4a-467c-b048-c0752c4d767b',
                'https://avinfotelegraph.com/report/1ac5eb99-2beb-4ff8-b21e-d66616465bdf',
                'https://avinfotelegraph.com/report/8286e1fa-3f7f-44d6-aab9-ec46fd730807',
                'https://avinfotelegraph.com/report/bf2a7049-40c1-4f56-ace3-9b3e7d6fffa3',
                'https://avinfotelegraph.com/report/8286e1fa-3f7f-44d6-aab9-ec46fd730807',
                'https://avinfotelegraph.com/report/7b11c1fe-4f87-4d71-b4b0-e3b80224ec05',
                'https://avinfotelegraph.com/report/1c6e6c12-1538-4dc3-bc09-1abee5703066',
                'https://avinfotelegraph.com/report/a35ad7e5-2001-40b2-95f1-d00ed1624fc3',
                'https://avinfotelegraph.com/report/7034eda6-fa13-4f73-b1ca-e6796a34a95f',
                'https://avinfotelegraph.com/report/85a31fb2-3e2f-4f78-9b2d-f685b6c23edc',
                'https://avinfotelegraph.com/report/e554e190-f974-4977-8414-41091a1b4a60',
                'https://avinfotelegraph.com/report/84f77053-0a22-4332-a61e-8bf3393046dd',
                'https://avinfotelegraph.com/report/28b5c54c-b0a2-466e-805d-83ccf7ef6be2',
                'https://avinfotelegraph.com/report/758c72a2-1f5c-4118-8ad4-2a615ef62356',
                'https://avinfotelegraph.com/report/51193d44-8533-42cc-9bd5-c0e1e28bd9ab',
                'https://avinfotelegraph.com/report/474f9731-8494-49d9-b9f3-39f7de6b317e',
                'https://avinfotelegraph.com/report/1841be0b-b03e-45da-b5a2-1a0ca890d72f',
                'https://avinfotelegraph.com/report/7fdd7988-4a8c-4265-9fee-0a151d525fd8',
                'https://avinfotelegraph.com/report/6d09ea0e-c5a1-4a45-9f77-49d3862dd812',
            ],
        };
    },

    methods: {
        random(arr: string[]) {
            return arr[Math.floor(Math.random() * arr.length)];
        },
        initReportLink() {
            this.reportLink = this.random(this.links);
        },
    },

    // mounted() {
    //     this.initReportLink();
    // },
});
</script>
