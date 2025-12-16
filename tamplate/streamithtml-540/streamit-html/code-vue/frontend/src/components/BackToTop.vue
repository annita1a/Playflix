<template>
    <!-- Back-To-Top -->
    <div id="back-to-top" :class="animationClass" @click="backToTop">
        <a id="top" class="p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle text-white" href="#top">
            <i class="ph ph-caret-up fw-bold"></i>
        </a>
    </div>
    <!-- End Back-To-Top -->
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const animationClass = ref('')

const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
    if (document.documentElement.scrollTop > 250) {
        animationClass.value = 'back-to-top animate__animated animate__fadeIn'
    } else {
        animationClass.value = 'back-to-top animate__animated animate__fadeOut'
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>