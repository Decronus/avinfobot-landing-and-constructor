<template>
    <div class="offer">
        <div class="offer__wrapper container">
            <div class="offer__title">
                Получи полную и достоверную историю<br />
                автомобиля по VIN или госномеру<br />
                <span class="theme__red">из 50+ источников</span> через наш телеграм-бот
            </div>
            <a
                class="offer__button theme__button"
                href="http://avclick.me/v/AVinfoBotPro?start=ref1045191"
                target="_blank"
                ><span>Проверить авто</span></a
            >
            <div class="offer__car" href="#instruction">
                <img class="offer__car-img" src="@/assets/img/offer__car.png" alt="" />
                <div class="offer__play">
                    <img src="@/assets/img/offer__play.png" alt="" />
                    <span
                        >Видео по<br />
                        работе бота</span
                    >
                </div>
            </div>

            <div class="offer__adv">
                <div class="offer__adv-item">
                    <div class="offer__adv-name">11 лет</div>
                    <div class="offer__adv-desc">
                        Наш сервис<br class="mobile-br" />
                        на рынке
                    </div>
                </div>

                <div class="offer__adv-item">
                    <div class="offer__adv-name">15 000</div>
                    <div class="offer__adv-desc">
                        отчетов создаем<br class="mobile-br" />
                        в сутки
                    </div>
                </div>

                <div class="offer__adv-item">
                    <div class="offer__adv-name">1 500 000</div>
                    <div class="offer__adv-desc">
                        <span class="offer__adv-desc_desktop"
                            >регистраций насчитывает<br />
                            наш бот</span
                        >
                        <span class="offer__adv-desc_mobile"
                            >регистраций<br />
                            в боте</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OfferBlock',
};
</script>
