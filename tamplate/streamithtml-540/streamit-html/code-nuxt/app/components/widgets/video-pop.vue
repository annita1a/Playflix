<template>
    <a v-if="isPopupStyle" href="javascript:void(0);" class="video-open playbtn text-decoration-none" :tabindex="tabindex">
        <svg @click="togglerVideo(1)" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px"
            viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7" xml:space="preserve">
            <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"
                stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 ">
            </polygon>
            <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"
                stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
        </svg>
        {{ "" }}
        <span @click="togglerVideo(2)" class="w-trailor text-uppercase">{{ $t("streamButtons.watch_trailer")
        }}</span>
        <FsLightbox :toggler="toggler" :sources="video" :slide="slide" />
    </a>
    <a v-else="isPopupStyle1" href="#" class="video-open playbtn text-decoration-none" tabindex="0">
        <svg @click="togglerVideo(1)" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px"
            viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7" xml:space="preserve">
            <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"
                stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
            <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"
                stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
        </svg>
        {{ '' }}
        <span @click="togglerVideo(2)" class="w-trailor text-uppercase">{{ $t('streamButtons.watch_trailer') }}</span>
        <FsLightbox :toggler="toggler" :sources="video" :slide="slide" />
    </a>
</template>

<script setup>
import { ref } from 'vue';

import FsLightbox from 'fslightbox-vue'

const props = defineProps({
    isPopupStyle: {
        type: Boolean,
        default: false
    },
    isPopupStyle1: {
        type: Boolean,
        default: false
    },
    videoLinkUrl: {
        type: String,
        default: ''
    },
    tabindex: {
        type: Number,
        default: 0
    }
});

const video = [
    props.videoLinkUrl, 'https://www.youtube.com/embed/FONivpg_jvo?enablejsapi=1'
]

const toggler = ref(false)
const slide = ref(1)

const togglerVideo = (index) => {
    slide.value = index
    toggler.value = !toggler.value
}
</script>