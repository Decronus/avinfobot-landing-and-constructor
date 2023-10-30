<template>
    <div class="edit-mode__header">
        <span class="header-element header-element__edit-mode">РЕЖИМ РЕДАКТИРОВАНИЯ</span>
        <div class="header-group">
            <span class="header-element" @click="$router.push('/pages')">Страницы</span>
            <span class="header-element" @click="openCreatePageModal">Настройки</span>
            <span class="header-element semibold" @click="openPage"> Предпросмотр </span>
        </div>
    </div>

    <CreatePageModal />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CreatePageModal from '@/components/modals/CreatePageModal.vue';

export default defineComponent({
    name: 'EditModeHeader',
    components: { CreatePageModal },

    data() {
        return {};
    },

    methods: {
        openCreatePageModal(): void {
            this.$store.commit('modals/toggleModal', 'CreatePageModal');
        },
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
    height: 64px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(1px);
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.07);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;

    .header-element__edit-mode {
        pointer-events: none;
    }

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
