<template>
    <div id="waiting-modal" class="waiting-modal">
        <div class="waiting-modal__container">
            <div class="waiting-modal-container">
                <div class="waiting-modal-close" @click="closeModal">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.75 0.960938L12.75 12.9609M12.75 0.960938L0.75 12.9609"
                            stroke="#2DC574"
                            stroke-width="1.5"
                        />
                    </svg>
                </div>
                <div class="waiting-feedback-container">
                    <div class="waiting-feedback-content">
                        <div class="waiting-feedback-body">
                            <div class="waiting-feedback-body-left">
                                <h2>Консультация специалиста</h2>
                                <p>
                                    Если Вас заинтересовал наш сервис, но нужна дополнительная консультация, оставьте
                                    контактные данные и мы свяжемся с Вами.
                                </p>
                            </div>
                            <form>
                                <div class="waiting-feedback-body-right">
                                    <div class="waiting-input-form">
                                        <label>
                                            <input type="text" name="name" placeholder="Имя" v-model="form.NAME" />
                                        </label>
                                    </div>
                                    <div class="waiting-input-form">
                                        <label>
                                            <input
                                                ref="phoneInput"
                                                type="text"
                                                name="phone"
                                                v-mask="'+7(9##)###-##-##'"
                                                placeholder="Телефон"
                                                v-model="form.PHONE"
                                                @input="handlePhoneInput"
                                            />
                                        </label>
                                    </div>
                                    <div class="waiting-input-form">
                                        <label>
                                            <input type="text" name="email" placeholder="E-mail" v-model="form.EMAIL" />
                                        </label>
                                    </div>
                                    <div class="waiting-input-form">
                                        <button
                                            ref="sendButton"
                                            class="theme__button waiting-feedback-send"
                                            :disabled="sendButtonLoading"
                                            @click.prevent="send"
                                        >
                                            <span>Отправить заявку</span>
                                        </button>
                                    </div>
                                    <div class="waiting-agreement-and-send">
                                        <label>
                                            <span
                                                >Нажимая кнопку «Отправить заявку», вы&nbsp;выражаете свое согласие с
                                                <a href="http://av100.me/oferta.aspx" target="_blank">офертой</a></span
                                            >
                                        </label>
                                    </div>
                                    <div ref="errorContainer" class="waiting-feedback-response"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="waiting-modal__landing">
                        <div class="authorize-popup__row">
                            <div class="authorize-popup__item">
                                <img class="authorize-popup__img" src="@/assets/img/advantages/adv_1.png" alt="" />
                                <div class="authorize-popup__text">
                                    Полная и проверка автомобилей.<br />
                                    Без ограничений История<br />
                                    владения, ДТП, залоги, работа в такси, фотографии, штрафы,<br />
                                    и многое другое
                                </div>
                            </div>
                            <div class="authorize-popup__item">
                                <img class="authorize-popup__img" src="@/assets/img/advantages/adv_7.png" alt="" />
                                <div class="authorize-popup__text">
                                    Поиск странички ВКонтакте по<br />
                                    фотографии или по номеру<br />
                                    телефона
                                </div>
                            </div>
                            <div class="authorize-popup__item">
                                <img class="authorize-popup__img" src="@/assets/img/advantages/adv_4.png" alt="" />
                                <div class="authorize-popup__text">
                                    Проверка физических лиц.<br />
                                    Задолженности,<br />
                                    зарегистрированные организации,<br />
                                    сведения о банкротстве
                                </div>
                            </div>
                            <div class="authorize-popup__item">
                                <img class="authorize-popup__img" src="@/assets/img/advantages/adv_9.png" alt="" />
                                <div class="authorize-popup__text">
                                    Мгновенное отображение<br />
                                    объявлений со всех<br />
                                    автомобильных сайтов РФ
                                </div>
                            </div>
                            <div class="authorize-popup__item">
                                <img class="authorize-popup__img" src="@/assets/img/advantages/adv_8.png" alt="" />
                                <div class="authorize-popup__text">
                                    Уведомления о появлении<br />
                                    автомобилей в продаже на любом<br />
                                    подключенном сайте на E-mail или<br />
                                    в Telegram
                                </div>
                            </div>
                            <div class="authorize-popup__item">
                                <img class="authorize-popup__img" src="@/assets/img/advantages/adv_6.png" alt="" />
                                <div class="authorize-popup__text">
                                    Проверка телефона продавца.<br />
                                    телефонные розыгрыши,<br />
                                    анонимные звонки
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WaitngModal',
    data() {
        return {
            phoneInput: null,
            phoneMask: null,
            sendButton: null,
            errorContainer: null,
            sendButtonLoading: false,
            form: {
                NAME: '',
                PHONE: '+7(9',
                EMAIL: '',
                SOGLASIE: 1,
                form: 'avinfobot.me',
            },
        };
    },

    computed: {
        phoneUnmasked() {
            return this.form.PHONE.replace(/[^0-9]/g, '');
        },
    },

    methods: {
        async send(e) {
            if (this.validateForm(true)) {
                const form = this.prepareForm();

                try {
                    const response = await fetch('https://data.av100.org/bitrix24/bitrix24.ashx?method=addDeal', {
                        body: form,
                        method: 'post',
                    });
                    const json = await response.json();

                    if (json.error) {
                        this.showError(json.error_msg, true);
                    } else {
                        this.resetForm();
                        this.showSuccess(json.message, true);
                        setTimeout(() => {
                            this.closeModal();
                        }, 3000);
                    }
                    this.setNewRecaptchaToken();
                    this.sendButtonLoading = false;
                } catch (error) {
                    this.sendButtonLoading = false;
                    this.showError('Произошла ошибка при отправке запроса.', true);
                }
            }
        },

        prepareForm() {
            const formData = new FormData();
            for (let key in this.form) {
                if (key === 'PHONE') {
                    formData.append('PHONE', this.phoneUnmasked);
                    continue;
                }
                formData.append(key, this.form[key]);
            }
            formData.append('recaptha', recaptchaResponse);

            this.sendButtonLoading = true;
            return formData;
        },

        validateForm(sending = false) {
            const { NAME, EMAIL } = this.form;

            if (NAME.trim().length < 2) {
                return this.showError('Пожалуйста, укажите свое Имя', sending);
            }

            if (this.phoneUnmasked.length <= 3) {
                return this.showError('Пожалуйста, укажите свой Телефон', sending);
            }
            if (this.phoneUnmasked.length !== 11) {
                console.log('phone length not 11');
                return this.showError('Номер телефона должен состоять из 11 цифр', sending);
            }
            if (!this.phoneUnmasked.startsWith('79')) {
                console.log('phone starts not 79...');
                return this.showError('Номер телефона должен начинаться с +79', sending);
            }

            let rgx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!EMAIL) {
                return this.showError('Пожалуйста, укажите свой email', sending);
            }
            if (!rgx.test(EMAIL)) {
                return this.showError('Неправильный формат email', sending);
            }

            return true;
        },

        showSuccess(message = '', sending = false) {
            this.errorContainer.removeAttribute('view');
            this.errorContainer.classList.remove('error');

            if (sending) {
                this.errorContainer.innerHTML = message;
                this.errorContainer.setAttribute('view', '');
                return true;
            }
        },

        showError(message = '', sending = false) {
            this.errorContainer.removeAttribute('view');
            this.errorContainer.classList.remove('error');

            if (sending) {
                this.errorContainer.innerHTML = message;
                this.errorContainer.classList.add('error');
                this.errorContainer.setAttribute('view', '');

                return false;
            }
        },

        resetForm() {
            let { NAME, EMAIL, PHONE } = this.form;
            NAME = EMAIL = '';
            PHONE = '+7(9';
        },

        setNewRecaptchaToken() {
            grecaptcha
                .execute('6LfK_B0kAAAAAB6hyw613kziUGHZql2a-7jEDKZD', { action: 'contact' })
                .then(function (token) {
                    recaptchaResponse = token;
                });
        },

        initRefs() {
            this.errorContainer = this.$refs.errorContainer;
            this.sendButton = this.$refs.sendButton;
            this.phoneInput = this.$refs.phoneInput;
        },

        handlePhoneInput(event) {
            const value = event.target.value;
            // Использование вместе с v-mask запрещает удаление начальных цифр, оставляя текущий номер в инпуте
            if (!value.startsWith('+7(9')) {
                this.form.PHONE = '+7(9';
            }
        },

        closeModal() {
            this.$emit('closeModal');
        },
    },

    mounted() {
        this.initRefs();
    },
};
</script>
