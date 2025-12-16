<template>
  <div class="iq-card-geners position-relative card-hover-style-two">
    <div class="img-box position-relative">
      <nuxt-link :to="link">
        <img :src="image" alt="geners-img" class="img-fluid" loading="lazy" />
        <h6 class="blog-description">
          {{ title }}
        </h6>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
defineProps({
  image: { type: String, default: '' },
  title: { type: String, default: '' },
  link: {
    type: Object,
    default: () => {
      return { name: 'view-all' };
    },
  },
});
</script>
