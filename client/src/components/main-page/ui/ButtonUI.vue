<template>
    <a class="offer__button theme__button">
        <span>{{ text }}</span>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ButtonUI',
    props: {
        text: {
            type: String,
        },
    },
});
</script>

<style lang="scss"></style>
