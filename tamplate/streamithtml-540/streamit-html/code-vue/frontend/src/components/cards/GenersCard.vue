<template>
  <div class="iq-card-geners position-relative card-hover-style-two">
    <div class="img-box position-relative">
      <router-link :to="link">
        <img :src="image" alt="geners-img" class="img-fluid" loading="lazy" />
        <h6 class="blog-description">
          {{ title }}
        </h6>
      </router-link>
      <!-- <div class="img-box rounded position-relative">
        <div class="blog-description">
          <h6 class="mb-0 iq-title">
            <router-link :to="link" class="text-decoration-none text-capitalize line-count-2 p-2">{{ title }}</router-link>
          </h6>
        </div>
      </div> -->
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
      return { name: 'landing-page.view-all' };
    },
  },
});
</script>
