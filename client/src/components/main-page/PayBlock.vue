<template>
    <div class="pay">
        <div class="pay__wrapper container">
            <div class="pay__title">Как можно оплатить доступ к боту?</div>
            <div class="pay__row">
                <img src="@/assets/img/main-page/pay/pay__visa.png" alt="" />
                <img src="@/assets/img/main-page/pay/pay__mastercard.png" alt="" />
                <img src="@/assets/img/main-page/pay/pay__gpay.png" alt="" />
                <img src="@/assets/img/main-page/pay/pay__applepay.png" alt="" />
                <img src="@/assets/img/main-page/pay/pay__sber.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PayBlock',
});
</script>
