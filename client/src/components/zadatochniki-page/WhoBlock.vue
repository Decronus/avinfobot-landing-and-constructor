<template>
    <div class="zadatochniki-page__block zadatok__who-block" id="who">
        <div class="content">
            <h1>Кто такие задаточники?</h1>
            <p>
                Задаточник - это НЕ тот, кто просит задаток, чтобы снять авто с продажи на определенное время и больше
                никому его не показывать кроме вас, разумеется.
            </p>
            <p class="right-paragraph">
                <span class="theme__red">Задаточник </span>- это тот, кто просит задаток, чтобы якобы снять авто с
                продажи, но по факту ничего не продает. Такие люди заинтересованы в том, чтобы получить деньги и
                исчезнуть.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'WhoBlock',
});
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.zadatok__who-block {
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
    p {
        color: #fff;
        text-align: left;
    }

    .right-paragraph {
        text-align: right;
        align-self: flex-end;
        max-width: 700px;
    }
}
</style>
