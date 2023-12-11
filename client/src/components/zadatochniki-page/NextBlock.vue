<template>
    <div class="zadatochniki-page__block zadatok__next-block">
        <div class="content">
            <h1 class="theme__red">А как поступать дальше?</h1>
            <p>Если все данные из отчетов AVinfoBot и данные по банку совпадают:</p>
            <ul>
                <li>Владелец по госномеру или VIN</li>
                <li>Данные из отчета по номеру телефона</li>
                <li>Получатель в интернет-банке</li>
            </ul>
            <p>То тут почти нет поводов для беспокойства, и почти наверняка задаток можно переводить.</p>
            <p>
                А вот если данные не совпадают совсем, то последний маленький шанс остается на то, что можно перезвонить
                продавцу и по-человечески попросить понять, и попросить данные для перевода именно прямому владельцу. В
                общем и целом, человек продающий автомобиль должен понять вас и тот факт, что переводить деньги кому
                попало просто так никто не станет.
            </p>
            <p>
                Если продавец начинают манипулировать вами и рассказывать, что у него там очередь из желающих скинуть
                задаток, но он держит «по-мужски» ради вас, потому что вы были первым позвонившим, скорее всего это
                ложь. Если человек отказывается предоставить такие простые факты юридической чистоты, лучше перестать
                тратить время на него и начать новые поиски.
            </p>
            <p style="font-weight: 500">Более подробно в нашем выпуске:</p>
            <div class="video-wrap">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/yWX-bGd8UK8?si=JYb7frDjbyzFLsCS"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NextBlock',
});
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.zadatok__next-block {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 48px;

    .content {
        align-items: center;

        p {
            max-width: 800px;
            text-align: left;
        }

        i {
            color: $secondary-color;
            font-weight: 300;
        }

        .video-wrap {
            iframe {
                @media (max-width: 600px) {
                    width: 375px;
                    height: 220px;
                    aspect-ratio: 560/315;
                }
            }
        }
    }
}
</style>
