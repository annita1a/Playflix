<template>
  <div v-if="linkButton === true" class="iq-button link-button">
    <nuxt-link :to="{ name: link }" class="btn text-capitalize position-relative">
      <span class="button-text">{{ buttonTitle }}</span>
    </nuxt-link>
  </div>
  <nuxt-link v-else :to="link" class="btn btn-primary text-capitalize position-relative rounded-3">
    <span v-if="notBtncaretIcon" class="button-text">{{ buttonTitle }}</span>
    <span v-else class="d-flex align-items-center gap-2">
      <span class="button-text">{{ buttonTitle }}</span>
      <i class="ph-fill ph-play fs-6"></i>
    </span>
  </nuxt-link>
</template>
<script setup>
defineProps({
  buttonTitle: { type: String, default: '' },
  link: {
    type: Object,
    default: () => {
      return { path: '' };
    },
  },
  linkButton: { type: Boolean, default: false },
  notBtncaretIcon: { type: Boolean, default: false },
});
</script>
