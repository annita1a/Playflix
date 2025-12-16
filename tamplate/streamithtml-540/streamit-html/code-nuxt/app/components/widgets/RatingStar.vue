<template>
  <span>
    <i
      :class="fill === true ? 'ph-fill ph-star text-warning' : 'ph ph-star text-warning'"
      aria-hidden="true"
    ></i>
  </span>
</template>

<script setup>
defineProps({
  fill: {
    type: Boolean,
    default: false
  }
});
</script>
