<template>
    <div class="loading">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            style="margin: auto; background-image: none; display: block; shape-rendering: auto"
            :width="width + 'px'"
            height="50px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <circle
                cx="50"
                cy="50"
                fill="none"
                :stroke="color"
                stroke-width="10"
                r="35"
                stroke-dasharray="164.93361431346415 56.97787143782138"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="2.380952380952381s"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                ></animateTransform>
            </circle>
        </svg>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoadingUI',
    props: {
        width: {
            type: Number,
            default: 50,
        },
        color: {
            type: String,
            default: '#e15b64',
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';
</style>
