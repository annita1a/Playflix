<template>
  <div class="iq-watching-block">
    <div class="block-images position-relative">
      <div class="iq-image-box overly-images">
        <nuxt-link :to="{ name: 'movies-detail' }" class="d-block">
          <img :src="imagePath" alt="movie-card" class="w-100 d-block border-0 rounded-3 continue-image" loading="lazy" />
        </nuxt-link>
      </div>
      <div class="iq-preogress">
        <span class="px-2 text-white fw-semibold font-size-14 iq-progress-left-data">{{ dataLeftTime }} m Left</span>
        <div class="d-flex align-items-center justify-content-between px-2 mb-1">
          <ul class="list-inline m-0 p-0 d-flex row-gap-1 column-gap-3 flex-wrap movie-list-item">
            <li class="iq-preogress-movie-title position-relative font-size-14">
              <span class="text-capitalize fw-semibold">{{ $t(watchMovieTitle) }}</span>
            </li>
            <li class="flex-shrink-0 fw-semibold font-size-14">
              <span>
                {{ watchMovieDate }}
              </span>
            </li>
          </ul>
          <a>
            <i class="ph-fill ph-play iq-preogress-play-btn fs-6"></i>
          </a>
        </div>
        <b-progress :value="progressValue" style="height: 2px"></b-progress>
      </div>
      <div class="close-icon-section">
        <div class="position-absolute d-flex align-items-center justify-content-center iq-watching-close-icon" data-bs-toggle="tooltip" data-bs-placement="left" :data-bs-title="$t('streamTooltip.remove_from_list')" aria-label="Remove from list">
          <i class="ph ph-x font-size-14 fw-bold align-middle"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { Tooltip } from 'bootstrap';

defineProps({
  dataLeftTime: { type: String, default: '' },
  imagePath: { type: String, default: '' },
  progressValue: { type: Number, default: 0 },
  watchMovieTitle: { type: String, default: '' },
  watchMovieDate: { type: String, default: '' },
});

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach((el) => new Tooltip(el));
});
</script>
