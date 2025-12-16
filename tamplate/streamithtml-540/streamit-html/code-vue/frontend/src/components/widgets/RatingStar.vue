<template>
  <span>
    <i
      v-if="type === 'full'"
      class="ph-fill ph-star text-warning"
      aria-hidden="true"
    ></i>
    <i
      v-else-if="type === 'half'"
      class="ph ph-star-half text-warning"
      aria-hidden="true"
    ></i>
    <i
      v-else
      class="ph ph-star text-warning"
      aria-hidden="true"
    ></i>
  </span>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'empty' } // 'full' | 'half' | 'empty'
});
</script>
