<template>
  <a class="d-flex align-items-center lh-lg mt-4 text-primary" href="#">
    <i :class="`${className} fa-xl me-2 lh-lg`"></i>
    <p class="mb-0 icon-title-color">{{ name }}</p>
  </a>
</template>

<script setup>
defineProps({
  className: { type: String, default: '' },
  name: { type: String, default: '' },
});
</script>
