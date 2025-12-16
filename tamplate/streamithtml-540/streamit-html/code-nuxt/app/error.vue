<template>
  <div class="error-page">
    <h1>{{ error.statusCode || 'Error' }}</h1>
    <p>{{ error.message || 'An unexpected error occurred.' }}</p>
    <NuxtLink to="/">Go Home</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped>
.error-page {
  text-align: center;
  margin-top: 100px;
}
</style>