<template>
  <router-link :to="link">
    <img :src="image" alt="personality" class="img-fluid object-cover mb-3 rounded-3 personality-img" loading="lazy" />
  </router-link>
  <div class="text-center">
    <h6 class="mb-0">
      <router-link :to="link" class="font-size-14 text-decoration-none cast-title text-capitalize">{{ title
      }}</router-link>
    </h6>
    <router-link :to="categoryLink" class="font-size-12 fw-semibold text-decoration-none text-capitalize text-body">{{ category
    }}&nbsp;&nbsp;{{ otherCategory }}</router-link>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  category: { type: String, default: '' },
  otherCategory: { type: String, default: '' },
  categoryLink: {
    type: [String, Object],
    default: () => '/',
  },
  link: {
    type: [String, Object],
    default: () => '/',
  },
  image: { type: String, default: '' },
});
</script>
