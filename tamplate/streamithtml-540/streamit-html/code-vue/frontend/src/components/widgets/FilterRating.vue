<template>
  <slot>
    <template v-for="index in 5" :key="index">
      <RatingStar :type="getStarType(index)" />
    </template>
  </slot>
</template>

<script setup>
import RatingStar from './RatingStar.vue'
import { defineProps } from 'vue'

const props = defineProps({
  rating: { type: Number, default: 0 }
})

// Decide star type for each position
const getStarType = (index) => {
  if (props.rating >= index) return 'full'
  if (props.rating + 0.5 >= index) return 'half'
  return 'empty'
}
</script>