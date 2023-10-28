<template>
    <div class="edit-mode__header">
        <span class="header-element">РЕЖИМ РЕДАКТИРОВАНИЯ</span>
        <div class="header-group">
            <span class="header-element">Настройки</span>
            <span class="header-element semibold" @click="openPage"> Предпросмотр </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EditModeHeader',

    data() {
        return {};
    },

    methods: {
        openPage(): void {
            window.open('/' + this.$route.params.pageName, '_blank');
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.edit-mode__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 72px;
    background: rgba(255, 255, 255, 0.8);
    position: sticky;
    top: 0;
    left: 0;

    .header-group {
        display: flex;
        gap: 32px;

        .header-element {
            cursor: pointer;

            &:hover {
                color: $primary-color;
            }
        }
    }
}
</style>
