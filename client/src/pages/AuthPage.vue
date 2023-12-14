<template>
    <div class="auth-page">
        <div class="auth-form">
            <InputUI v-model="code" placeholder="Код доступа" />
            <ButtonUI text="Войти" medium rounded :disabled="loading" :loading="loading" @click="handleAuth" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputUI from '@/components/ui/InputUI.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import { ElMessage } from 'element-plus';
import { auth } from '@/axios/api';

export default defineComponent({
    name: 'AuthPage',
    components: { ButtonUI, InputUI },

    data() {
        return {
            code: '',
            loading: false,
        };
    },

    methods: {
        async handleAuth(): Promise<void> {
            try {
                this.loading = true;
                const body = { code: this.code };
                const { data: isAuth } = await auth(body);
                console.log(isAuth);

                if (!isAuth) {
                    ElMessage.error('Неправильный код');
                    return;
                }

                localStorage.setItem('code', this.code);

                const url = this.$route.query.sourceUrl as string;
                console.log('url', url);
                this.$router.push(url ?? '/constructor/pages');
                this.loading = false;
            } catch (err: any) {
                this.loading = false;
                ElMessage.error(err.message);
            }
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.auth-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .auth-form {
        width: 360px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
}
</style>
