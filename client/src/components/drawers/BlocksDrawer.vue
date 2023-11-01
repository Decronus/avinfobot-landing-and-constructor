<template>
    <el-drawer
        class="blocks-drawer"
        v-model="drawerVisibility"
        size="320px"
        :with-header="false"
        direction="ltr"
        :close-on-click-modal="false"
        @closed="$store.commit('drawers/setCurrentBlockIndex', -1)"
    >
        <div class="drawer__buttons-wrap">
            <ButtonUI text="Отмена" drawer secondary @click="toggleDrawer" />
        </div>

        <div class="blocks-drawer__body">
            <p>Главный блок</p>
            <p>Две колонки</p>
            <p>Заголовок</p>
        </div>
    </el-drawer>
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import MainBlockDrawerBody from './settings-drawer-bodies/MainBlockDrawerBody.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BlocksDrawer',
    components: { InputUI, ButtonUI, MainBlockDrawerBody },

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
@import '@/assets/scss/variables';

.blocks-drawer {
    .blocks-drawer__body {
        width: 100%;
        margin: 0 auto;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 24px;

        p {
            cursor: pointer;
            transition: 0.2s ease-in-out;

            &:hover {
                color: $primary-color;
            }
        }
    }

    .drawer__buttons-wrap {
        .button {
            width: 100%;
        }
    }
}
</style>
