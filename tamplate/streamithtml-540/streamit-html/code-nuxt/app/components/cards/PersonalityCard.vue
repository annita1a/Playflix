<template>
  <nuxt-link :to="link">
    <img
      :src="image"
      alt="personality"
      class="img-fluid object-cover mb-3 rounded-3 personality-img"
      loading="lazy"
    />
  </nuxt-link>
  <div class="text-center">
    <h6 class="mb-0">
      <nuxt-link
        :to="link"
        class="font-size-14 text-decoration-none cast-title text-capitalize"
        >{{ title }}</nuxt-link
      >
    </h6>
    <nuxt-link
      :to="categoryLink"
      class="font-size-12 fw-semibold text-decoration-none text-capitalize text-body"
      >{{ category }}&nbsp;&nbsp;{{ otherCategory }}</nuxt-link
    >
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: "" },
  category: { type: String, default: "" },
  otherCategory: { type: String, default: "" },
  categoryLink: {
    type: [String, Object],
    default: () => ({ name: 'index' }),
  },
  link: {
    type: [String, Object],
    default: () => ({ name: 'index' }),
  },
  image: { type: String, default: "" },
});
</script>
