<template>
    <MainBlock />
    <WhoBlock />
    <SuspicionBlock />
    <QuestionsBlock />
    <SituationBlock />
    <CollectBlock />
    <NextBlock />
    <FooterVue />
</template>

<script lang="ts">
import MainBlock from '@/components/zadatochniki-page/MainBlock.vue';
import WhoBlock from '@/components/zadatochniki-page/WhoBlock.vue';
import SuspicionBlock from '@/components/zadatochniki-page/SuspicionBlock.vue';
import QuestionsBlock from '@/components/zadatochniki-page/QuestionsBlock.vue';
import SituationBlock from '@/components/zadatochniki-page/SituationBlock.vue';
import CollectBlock from '@/components/zadatochniki-page/CollectBlock.vue';
import NextBlock from '@/components/zadatochniki-page/NextBlock.vue';
import FooterVue from '@/components/main-page/FooterVue.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ZadatochnikiPage',
    components: {
        MainBlock,
        WhoBlock,
        SuspicionBlock,
        QuestionsBlock,
        SituationBlock,
        CollectBlock,
        NextBlock,
        FooterVue,
    },
});
</script>

<style lang="scss"></style>
