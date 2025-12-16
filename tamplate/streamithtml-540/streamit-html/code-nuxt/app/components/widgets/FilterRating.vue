<template>
  <slot>
    <template v-for="index in 6" :key="index">
      <RatingStar :fill="rating >= index" />
    </template>
  </slot>
</template>

<script setup>
import RatingStar from '../../components/widgets/RatingStar.vue';

defineProps({
  rating: {
    type: Number,
    default: 0
  }
});
</script>
