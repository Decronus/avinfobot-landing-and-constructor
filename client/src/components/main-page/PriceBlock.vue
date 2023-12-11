<template>
    <div id="price" class="price">
        <div class="price__wrapper container">
            <div class="price__title">Сколько стоит спокойствие при покупке авто?</div>
            <div class="price__subtitle">
                проверьте все автомобили, которые попадутся вам на рынке,<br />
                не переплачивая за разовые отчеты
            </div>
            <div class="price__row">
                <div class="price__item">
                    <div class="price__item-wrapper">
                        <div class="price__name">День</div>
                        <div class="price__text">неограниченное количество отчётов «AVinfo» и доступ к AV100.ME</div>
                        <div class="price__price">750 руб</div>
                        <!-- <div class="price__button"><a class="theme__button price__day" data-href="@mainBotUrl?start=ref1045191" target="_blank"><span>Оплатить</span></a></div> -->
                        <div class="price__button" @click="openModal">
                            <a class="theme__button price__modal" target="_blank">
                                <span>Оплатить</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="price__item">
                    <div class="price__item-wrapper">
                        <div class="price__name">Неделя</div>
                        <div class="price__text">неограниченное количество отчётов «AVinfo» и доступ к AV100.ME</div>
                        <div class="price__price">1250 руб</div>
                        <!-- <div class="price__button"><a class="theme__button price__week" data-href="@mainBotUrl?start=ref1045191" target="_blank"><span>Оплатить</span></a></div> -->
                        <div class="price__button" @click="openModal">
                            <a class="theme__button price__modal" target="_blank">
                                <span>Оплатить</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="price__item">
                    <div class="price__item-wrapper">
                        <div class="price__name">Месяц</div>
                        <div class="price__text vin-gift">
                            неограниченное количество отчётов «AVinfo» и доступ к AV100.ME
                            <span
                                >+ 1 подбор VIN в подарок
                                <a target="_blank" href="https://vk.com/@av100ru-podbor1">
                                    <img src="@/assets/img/ask-icon.svg" />
                                </a>
                            </span>
                        </div>
                        <div class="price__price">2500 руб</div>
                        <!-- <div class="price__button"><a class="theme__button price__month" data-href="@mainBotUrl?start=ref1045191" target="_blank"><span>Оплатить</span></a></div> -->
                        <div class="price__button" @click="openModal">
                            <a class="theme__button price__modal" target="_blank">
                                <span>Оплатить</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="price__post-title">
                в стоимость подписки входит сайт AV100.PRO - агрегатор свежих объявлений<br />
                для быстрого поиска подержанных автомобилей
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PriceBlock',
    methods: {
        openModal() {
            this.$emit('openWaitingModal');
        },
    },
};
</script>
