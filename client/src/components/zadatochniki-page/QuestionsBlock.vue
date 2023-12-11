<template>
    <div class="zadatochniki-page__block zadatok__questions-block">
        <div class="content">
            <h1>Список вопросов</h1>
            <p>
                Начнем сразу со списка вопросов и того, что нужно узнать в первую очередь, а дальше разберем их
                детально:
            </p>

            <ol>
                <li>Кто собственник?</li>
                <li>Имя продавца?</li>
                <li>Госномер или VIN?</li>
                <li>Контактный номер телефона?</li>
                <li>Банковские данные для перевода задатка ?</li>
                <li>Имя в профиле классифайда?</li>
            </ol>

            <p>
                Вопросы банальные и чаще всего вы их задаете и иногда даже все сразу в рамках одного объявления. Но мало
                кто собирает и анализирует данные правильно, а соответственно делает правильные выводы.
            </p>

            <i
                >Оно понятно. Когда предложение очень выгодное, действовать надо быстро и незамедлительно. Поэтому не
                всегда успеваем все правильно и грамотно взвесить.</i
            >
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'QuestionsBlock',
});
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.zadatok__questions-block {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 48px;
    background-color: $dark-bg-color;

    .content {
        width: 100%;
        max-width: 900px;
    }

    h1,
    p,
    ol {
        color: #fff;
        text-align: left;
    }

    i {
        color: $secondary-color;
        font-weight: 300;
        max-width: 500px;
    }
}
</style>
