<template>
  <div class="loader simple-loader animate__animated animate__fadeIn">
    <div class="loader-body">
      <img src="/assets/images/loader.gif" alt="loader" class="img-fluid" width="300" loading="lazy" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  console.debug('[loader] LoaderComponent mounted')
})

onBeforeUnmount(() => {
  console.debug('[loader] LoaderComponent before unmount')
})
</script>
