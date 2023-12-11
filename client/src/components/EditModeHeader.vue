<template>
    <div class="edit-mode__header">
        <div class="logo-wrap">
            <img class="logo" src="@/assets/img/main-page/header__logo.png" alt="" @click="openMainPage" />
            <p class="header-element">
                <span class="header-element__link" @click="$router.push('/constructor/pages')">СТРАНИЦЫ</span> /
                <span class="header-element__page-name">{{ pageName }}</span>
            </p>
        </div>

        <div class="header-group">
            <span class="header-element" @click="$router.push('/pages')">Страницы</span>
            <span class="header-element" @click="openCreatePageModal">Настройки</span>
            <span class="header-element semibold" @click="openPage">Предпросмотр</span>
        </div>

        <div class="header__dropdown">
            <el-dropdown size="large" trigger="click">
                <ThreeDotsIcon />

                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="$router.push('/constructor/pages')">Страницы</el-dropdown-item>
                        <el-dropdown-item @click="openCreatePageModal">Настройки</el-dropdown-item>
                        <el-dropdown-item @click="openPage">Предпросмотр</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>

    <CreatePageModal />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CreatePageModal from '@/components/modals/CreatePageModal.vue';
import ThreeDotsIcon from '@/components/icons/ThreeDotsIcon.vue';

export default defineComponent({
    name: 'EditModeHeader',
    components: { CreatePageModal, ThreeDotsIcon },
    props: {
        pageName: {
            type: String,
        },
    },

    methods: {
        openCreatePageModal(): void {
            this.$store.commit('modals/toggleModal', 'CreatePageModal');
        },
        openPage(): void {
            window.open('/pages/' + this.$route.params.pageLink, '_blank');
        },
        openMainPage(): void {
            window.open('https://avinfobot.me', '_blank');
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
    gap: 12px;
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

    .logo-wrap {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-left: -5px;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;

        .logo {
            width: 48px;
            cursor: pointer;
        }
    }

    .header-group {
        display: flex;
        align-items: center;
        gap: 32px;

        @media (max-width: 768px) {
            display: none;
        }

        .header-element {
            cursor: pointer;

            &:hover {
                color: $primary-color;
            }
        }
    }

    .header-element__link {
        cursor: pointer;
    }

    .header-element__page-name {
        font-weight: 600;
    }

    .header__dropdown {
        display: none;
        cursor: pointer;

        @media (max-width: 768px) {
            display: block;
        }
    }
}
</style>
