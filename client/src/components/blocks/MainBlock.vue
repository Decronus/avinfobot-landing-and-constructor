<template>
    <div class="block main-block">
        <div class="content">
            <h1>Рыбный текст основного заголовка</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur. Enim ipsum mollis est vel hendrerit arcu dignissim feugiat
                mauris. Faucibus dolor mauris urna vel etiam metus vestibulum porttitor aliquet. Nunc aliquet quisque
                morbi eu mattis egestas viverra. Lacinia eu vestibulum amet sagittis eu integer nibh.
            </p>
            <ButtonUI />
        </div>
    </div>
</template>

<script lang="ts">
import ButtonUI from '@/components/ui/ButtonUI.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MainBlock',
    components: { ButtonUI },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.main-block {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url('https://a.d-cd.net/6f3caees-1920.jpg');
    background-attachment: fixed;
    background-color: rgba(255, 255, 255, 0.8);
    background-blend-mode: overlay;
    background-size: cover;
    background-repeat: no-repeat;

    .content {
        max-width: 964px;

        h1 {
            font-size: 72px;
            margin-bottom: 24px;
        }

        p {
            margin-bottom: 80px;
        }
    }
}
</style>
