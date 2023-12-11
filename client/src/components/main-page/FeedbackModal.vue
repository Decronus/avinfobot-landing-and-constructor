<template>
    <div id="waiting-modal" class="feedback-modal">
        <div id="instruction" class="instruction mfp-hide">
            <div class="instruction__wrapper">
                <iframe
                    :src="videoUrl"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <button title="Close (Esc)" type="button" class="mfp-close" @click="closeModal">×</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeedbackModal',
    props: {
        videoUrl: {
            type: String,
            default: 'https://www.youtube.com/embed/YN-JUXYf2GE',
        },
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        },
    },
};
</script>

<style>
.feedback-modal > div {
    margin-left: 15px;
}

button.mfp-close {
    overflow: visible;
    cursor: pointer;
    background: transparent;
    border: 0;
    appearance: none;
    -webkit-appearance: none;
    display: block;
    outline: none;
    padding: 0;
    z-index: 1046;
    -webkit-box-shadow: none;
    box-shadow: none;
}

.mfp-close {
    width: 44px;
    height: 44px;
    line-height: 44px;
    position: absolute;
    right: 0;
    top: 0;
    text-decoration: none;
    text-align: center;
    opacity: 0.65;
    padding: 0 0 18px 10px;
    color: white;
    font-style: normal;
    font-size: 28px;
    font-family: Arial, Baskerville, monospace;
}
</style>
