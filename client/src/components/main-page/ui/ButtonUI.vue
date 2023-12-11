<template>
    <a class="offer__button theme__button">
        <span>{{ text }}</span>
    </a>
</template>

<script>
export default {
    name: 'ButtonUI',
    props: {
        text: {
            type: String,
        },
    },
};
</script>

<style lang="scss"></style>
