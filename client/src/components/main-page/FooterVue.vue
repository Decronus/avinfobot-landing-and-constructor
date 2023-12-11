<template>
    <div class="footer">
        <div class="top-footer">
            <div class="top-footer__wrapper container">
                <div class="top-footer__column">
                    <div class="top-footer__title">
                        одна поездка на осмотр<br />
                        сомнительного авто дороже<br />
                        месячной подписки
                    </div>
                    <a
                        class="top-footer__button theme__button"
                        href="http://avclick.me/v/AVinfoBotPro?start=ref1045191"
                        target="_blank"
                    >
                        <span>Подключиться к боту</span>
                    </a>
                </div>

                <div class="top-footer__column">
                    <img src="@/assets/img/footer__phone.webp" alt="" />
                    <div class="top-footer__back">avinfobot</div>
                </div>
            </div>
        </div>

        <div class="bottom-footer">
            <div class="bottom-footer__wrapper container">
                <div class="bottom-footer__nav">
                    <a
                        class="bottom-footer__logo"
                        href="http://avclick.me/v/AVinfoBotPro?start=ref1045191"
                        target="_blank"
                    >
                        <img src="@/assets/img/header__logo.png" alt="" />
                    </a>
                    <RouterLink class="bottom-footer__link" :to="{ name: 'main', hash: '#how' }">
                        Как работает бот
                    </RouterLink>
                    <RouterLink class="bottom-footer__link" :to="{ name: 'main', hash: '#price' }"> Тарифы </RouterLink>
                    <RouterLink class="bottom-footer__link" :to="{ name: 'main', hash: '#feedback' }">
                        Отзывы
                    </RouterLink>
                </div>

                <div class="bottom-footer__contact">
                    <a href="#">Техническая поддержка и сотрудничество</a>
                    <a href="mailto:avinfoguru@gmail.com">avinfoguru@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterVue',
};
</script>
