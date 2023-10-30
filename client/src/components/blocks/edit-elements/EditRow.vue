<template>
    <div class="edit-row">
        <EditContentButton />
        <DeleteContentButton />
    </div>
</template>

<script lang="ts">
import EditContentButton from '@/components/blocks/edit-elements/EditContentButton.vue';
import DeleteContentButton from '@/components/blocks/edit-elements/DeleteBlockButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EditRow',
    components: { EditContentButton, DeleteContentButton },
    props: {
        openEditDrawer: {
            type: Function,
        },
        deleteBlock: {
            type: Function,
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.edit-row {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    top: 15px;
    padding: 0 15px;
}
</style>
