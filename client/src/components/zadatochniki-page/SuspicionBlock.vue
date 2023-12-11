<template>
    <div class="zadatochniki-page__block zadatok__suspicion-block">
        <div class="content">
            <h1 class="theme__red">Все начинается с подозрений</h1>
            <p>
                Давайте представим звонок по объявлению, в котором продавец чуть ли не с порога просит перевести
                задаток.
            </p>
            <i>Стоит отметить, что это еще ни о чем не говорит, хоть и настораживает. </i>
            <p>
                В таком случае нам нужно получить ответы на несколько вопросов, сопоставить их и сделать определенные
                выводы, на бaзе которых мы будем принимать решение или как-то действовать. Итак, готовим список главных
                вопросов…
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SuspicionBlock',
});
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.zadatok__suspicion-block {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 48px;

    .content {
        align-items: center;

        p {
            max-width: 700px;
        }

        i {
            color: $secondary-color;
            font-weight: 300;
        }
    }
}
</style>
