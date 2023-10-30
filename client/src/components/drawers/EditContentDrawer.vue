<template>
    <el-drawer
        class="edit-content__drawer"
        v-model="drawerVisibility"
        size="710px"
        :with-header="false"
        direction="ltr"
        :close-on-click-modal="false"
    >
        <div class="drawer__buttons-wrap">
            <ButtonUI text="Сохранить" drawer secondary @click="toggleDrawer" />
            <ButtonUI text="Сохранить и закрыть" drawer @click="toggleDrawer" />
        </div>

        <div class="edit-drawer__body">
            <InputUI label="Имя страницы" type="textarea" placeholder="Введите имя страницы" />
            <InputUI
                label="Ссылка на страницу"
                placeholder="Введите адрес страницы"
                readonly
                @inputEdited="isLinkInputEdited = true"
            />
        </div>
    </el-drawer>
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EditContentDrawer',
    components: { InputUI, ButtonUI },

    computed: {
        drawerName(): string {
            return this.$options.name as string;
        },
        drawerVisibility: {
            get(): boolean {
                return this.$store.getters['drawers/getDrawerVisibility'](this.drawerName);
            },
            set(): void {
                this.drawerVisibility && this.toggleDrawer();
            },
        },
    },

    methods: {
        toggleDrawer(): void {
            this.$store.commit('drawers/toggleDrawer', this.drawerName);
        },
    },
});
</script>

<style lang="scss">
.edit-content__drawer {
    @media (max-width: 709.99px) {
        .el-drawer__body {
            width: 100vw;
        }
    }

    .edit-drawer__body {
        max-width: 620px;
        margin: 0 auto;
        padding: 48px 20px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .drawer__buttons-wrap {
        display: flex;
    }
}
/* .modal-header {
    background: #f7f7f7;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;

    .icon-wrap {
        cursor: pointer;

        &:hover svg path {
            fill: #222222;
        }
    }
}

.modal-content {
    max-width: 572px;
    margin: 0 auto;
    padding: 34px 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    .modal__buttons-wrap {
        align-self: flex-end;
        display: flex;
        gap: 16px;
    }
} */
</style>
