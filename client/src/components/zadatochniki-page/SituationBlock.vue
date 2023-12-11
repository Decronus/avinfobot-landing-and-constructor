<template>
    <div class="zadatochniki-page__block zadatok__situation-block">
        <div class="content">
            <h1 class="theme__red">Моделируем ситуацию</h1>
            <p>
                Давайте для начала разберем, как правильно задать вопросы и получить нужную информацию? Не всегда, но
                бывает такое, что вопросы надо задавать осторожно. Например, когда предложение «горячее», продавцы
                зачастую заинтересованы в быстрой продаже (по разным объективно нормальным причинам) и лишние вопросы
                без гарантии, что сделка состоится, попросту раздражают. Особенно, когда продавец слышит, как ему
                стучатся по второй линии. Поэтому иногда приходится осторожничать, но при этом сохранять лицо спокойного
                и крайне заинтересованного покупателя.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SituationBlock',
});
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.zadatok__situation-block {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 48px;

    .content {
        align-items: center;

        p {
            max-width: 800px;
            text-align: left;
        }

        i {
            color: $secondary-color;
            font-weight: 300;
        }
    }
}
</style>
