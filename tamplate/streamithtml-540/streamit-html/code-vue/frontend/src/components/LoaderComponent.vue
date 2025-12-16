<template>
  <div
    v-if="visible"
    :class="[
      'loader',
      'simple-loader',
      'animate__animated',
      animationClass,
      { 'loader-complete': isLoaded }
    ]"
    @animationend="onAnimationEnd"
    role="status"
  >
    <div class="loader-body">
      <img 
        src="/assets/images/loader.gif" 
        alt="loader" 
        class="img-fluid" 
        width="300" 
        loading="lazy"
        @load="handleImageLoad"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({ show: { type: Boolean, default: false } });

// internal visible state to allow fade-out animation before removing from DOM
const visible = ref(!!props.show);
const animationClass = ref(props.show ? 'animate__fadeIn' : '');
const isLoaded = ref(false);

const startFadeOut = () => {
  animationClass.value = 'animate__fadeOut';
};

const onAnimationEnd = (e) => {
  // if fadeOut finished, remove from DOM
  if (animationClass.value === 'animate__fadeOut') {
    visible.value = false;
    // reset animation class for next show
    animationClass.value = '';
  }
};

const handleImageLoad = () => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
};

watch(
  () => props.show,
  (val) => {
    if (val) {
      // show immediately with fadeIn
      visible.value = true;
      // allow next tick for DOM to render then add fadeIn
      animationClass.value = '';
      requestAnimationFrame(() => {
        animationClass.value = 'animate__fadeIn';
      });
    } else {
      // start fadeOut animation; component will remove itself on animationend
      if (visible.value) {
        startFadeOut();
      }
    }
  }
);

onMounted(() => {
  // ensure initial state matches prop
  visible.value = !!props.show;
  animationClass.value = props.show ? 'animate__fadeIn' : '';
});
</script>