<template>
  <div :class="`${classlist}` + ' iq-top-ten-block'">
    <div class="block-image position-relative">
      <div class="img-box">
        <router-link class="overly-images" :to="link">
          <img :src="imagePath" alt="movie-card" class="object-cover rounded-3" loading="lazy" />
        </router-link>
        <span class="top-ten-numbers texture-text">{{ countValue }}</span>
      </div>
    </div>
    <div v-if="prodctPrimium" class="position-absolute z-1 premium-product d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" :data-bs-title="$t('streamTooltip.premium')">
        <i class="ph-fill ph-crown fs-5"></i>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { Tooltip } from 'bootstrap';

defineProps({
  imagePath: { type: String, default: '' },
  countValue: { type: Number, default: 0 },
  link: { type: [String, Object], default: () => '/' },
  classlist: { type: String, default: '' },
  prodctPrimium: { type: Boolean, default: false },
});

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach((el) => new Tooltip(el));
});
</script>
