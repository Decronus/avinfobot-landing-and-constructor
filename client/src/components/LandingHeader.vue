<template>
    <div class="landing-header">
        <div class="logo-wrap">
            <img class="logo" src="@/assets/img/main-page/header__logo.png" alt="" @click="openMainPage" />
        </div>

        <span class="header-element" @click="openMainPage">На&nbsp;главную</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LandingHeader',

    methods: {
        openMainPage(): void {
            window.open('https://avinfobot.me', '_blank');
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.landing-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 0 20px;
    width: 100%;
    height: 64px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(1px);
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.07);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;

    .logo-wrap {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-left: -5px;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;

        .logo {
            width: 48px;
            cursor: pointer;
        }
    }

    .header-element {
        cursor: pointer;

        &:hover {
            color: $primary-color;
        }
    }
}
</style>
