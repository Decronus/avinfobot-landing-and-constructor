<template>
    <div class="edit-row">
        <EditContentButton @click="openEditContentDrawer" />
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

    methods: {
        openEditContentDrawer() {
            this.$store.commit('drawers/toggleDrawer', 'EditContentDrawer');
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
    opacity: 0;
}
</style>
