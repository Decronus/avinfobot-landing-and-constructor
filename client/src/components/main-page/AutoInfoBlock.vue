<template>
    <div class="auto-info">
        <div class="auto-info__wrapper container">
            <div class="auto-info__title">
                Бот даст вам <span class="theme__red">максимально полную</span> информацию об авто
            </div>
            <div class="auto-info__subtitle">
                У нас есть фотографии <span class="theme__red">60%</span> российского автопарка
            </div>
            <div class="auto-info__row">
                <div class="auto-info__table">
                    <div class="auto-info__item">
                        Количество<br />
                        владельцев
                    </div>
                    <div class="auto-info__item">
                        Действующий<br />
                        полис ОСАГО
                    </div>
                    <div class="auto-info__item">
                        Нахождение в залоге<br />
                        у банков
                    </div>
                    <div class="auto-info__item">
                        Регистрационные<br />
                        действия с автомобилем
                    </div>
                    <div class="auto-info__item">
                        Нахождение в угоне<br />
                        и наложенные<br />
                        ограничения
                    </div>
                    <div class="auto-info__item">
                        VIN автомобиля по<br />
                        его госномеру
                    </div>
                    <div class="auto-info__item">
                        Использование<br />
                        в такси
                    </div>
                    <div class="auto-info__item">
                        Средняя рыночная<br />
                        стоимость
                    </div>
                    <div class="auto-info__item">
                        ДТП<br />
                        с автомобилем
                    </div>
                    <div class="auto-info__item">
                        Пробег автомобиля и<br />
                        история прохождения ТО
                    </div>
                    <div class="auto-info__item">
                        Фотографии<br />
                        автомобиля
                    </div>
                    <div class="auto-info__item">
                        Наложенные<br />
                        штрафы
                    </div>
                </div>

                <div class="auto-info__car">
                    <img src="@/assets/img/auto-info__car.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AutoInfoBlock',
};
</script>
