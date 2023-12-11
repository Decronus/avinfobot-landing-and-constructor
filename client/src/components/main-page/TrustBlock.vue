<template>
    <div class="trust">
        <div class="trust__wrapper container">
            <div class="trust__title">
                Нашему сервису доверяют<br />
                <span class="theme__red">крупные компании</span>
            </div>
            <div class="trust__row">
                <div class="trust__item">
                    <img src="@/assets/img/main-page/trust/trust__sber.png" alt="" />
                </div>
                <div class="trust__item">
                    <img src="@/assets/img/main-page/trust/trust__tinkoff.png" alt="" />
                </div>
                <div class="trust__item">
                    <img src="@/assets/img/main-page/trust/trust__rosgosstrah.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TrustBlock',
});
</script>
