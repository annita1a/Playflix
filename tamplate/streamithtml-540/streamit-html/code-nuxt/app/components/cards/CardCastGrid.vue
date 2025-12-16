<template>
  <nuxt-link :to="{ name: 'cast-detail' }">
    <img :src="props.image" alt="personality" class="img-fluid object-cover mb-3 rounded-3 personality-img">
  </nuxt-link>
  <div class="text-center">
    <h6 class="mb-0">
      <nuxt-link :to="{ name: 'cast-detail' }" class="font-size-14 text-decoration-none cast-title text-capitalize">{{
        props.title }}</nuxt-link>
    </h6>
    <nuxt-link :to="{ name: 'cast-detail' }"
      class="font-size-12 fw-semibold text-decoration-none text-capitalize text-body">{{ props.castSubTitle
      }}&nbsp;&nbsp;{{ props.otherCastCategory }}</nuxt-link>
  </div>
</template>
<script setup>
const props = defineProps({
  image: { type: String, default: '' },
  title: { type: String, default: '' },
  castSubTitle: { type: String, default: '' },
  otherCastCategory: { type: String, default: '' },
});
</script>
