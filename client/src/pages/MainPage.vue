<template>
    <div class="main-page">
        <HeaderVue />
        <OfferBlock />
        <PartnersBlock />
        <AdvantagesBlock />
        <TrustBlock />
        <AutoInfoBlock />
        <ReportBlock />
        <PriceBlock @openWaitingModal="waitingModalVisible = true" />
        <PayBlock />
        <FeedbackBlock @openFeedbackModal="feedbackModalVisible = true" @setVideoUrl="videoUrl = $event" />
        <FooterVue />
    </div>

    <WaitingModal v-if="waitingModalVisible" @closeModal="waitingModalVisible = false" />
    <FeedbackModal v-if="feedbackModalVisible" @closeModal="feedbackModalVisible = false" :videoUrl="videoUrl" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderVue from '@/components/main-page/HeaderVue.vue';
import OfferBlock from '@/components/main-page/OfferBlock.vue';
import PartnersBlock from '@/components/main-page/PartnersBlock.vue';
import AdvantagesBlock from '@/components/main-page/AdvantagesBlock.vue';
import TrustBlock from '@/components/main-page/TrustBlock.vue';
import AutoInfoBlock from '@/components/main-page/AutoInfoBlock.vue';
import ReportBlock from '@/components/main-page/ReportBlock.vue';
import PriceBlock from '@/components/main-page/PriceBlock.vue';
import PayBlock from '@/components/main-page/PayBlock.vue';
import FeedbackBlock from '@/components/main-page/FeedbackBlock.vue';
import FooterVue from '@/components/main-page/FooterVue.vue';
import WaitingModal from '@/components/main-page/WaitingModal.vue';
import FeedbackModal from '@/components/main-page/FeedbackModal.vue';

export default defineComponent({
    name: 'MainPage',
    components: {
        HeaderVue,
        OfferBlock,
        PartnersBlock,
        AdvantagesBlock,
        TrustBlock,
        AutoInfoBlock,
        ReportBlock,
        PriceBlock,
        PayBlock,
        FeedbackBlock,
        FooterVue,
        WaitingModal,
        FeedbackModal,
    },
    data() {
        return {
            waitingModalVisible: false,
            feedbackModalVisible: false,
            videoUrl: '',
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/main-page';
</style>
