<template>
    <ButtonUI edit rounded secondary>
        <DeleteIcon />
    </ButtonUI>
</template>

<script lang="ts">
import ButtonUI from '@/components/ui/ButtonUI.vue';
import DeleteIcon from '@/components/icons/DeleteIcon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DeleteContentButton',
    components: { ButtonUI, DeleteIcon },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';
</style>
