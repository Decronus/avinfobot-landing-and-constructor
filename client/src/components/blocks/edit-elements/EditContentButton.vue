<template>
    <ButtonUI text="Контент" edit rounded icon>
        <EditIcon />
    </ButtonUI>
</template>

<script lang="ts">
import ButtonUI from '@/components/ui/ButtonUI.vue';
import EditIcon from '@/components/icons/EditIcon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EditContentButton',
    components: { ButtonUI, EditIcon },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';
</style>
