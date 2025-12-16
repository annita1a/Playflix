<template>
  <div class="episode-block rounded-3">
    <div class="block-image position-relative z-1">
      <nuxt-link :to="{ name: 'tv-shows-episode' }">
        <img
          :src="generateImgPath(`/assets/images/${showImg}`)"
          class="img-fluid img-zoom"
          :alt="`showImg-${id}`"
          loading="lazy"
        />
      </nuxt-link>
    </div>

    <h6
      v-if="episodTitle"
      class="episode-title fw-medium position-absolute"
    >
    {{ episodeNumber }} : {{ episodTitle }}
    </h6>

    <div class="episode-detail fw-medium position-absolute">
      <h6 class="mt-2 mb-0">
        {{ episodeNumber }} :
        {{ episodeTitles ? episodeTitlesText : 'Island of Secrets' }}
      </h6>
      <span class="mb-0 line-count-2 mt-2 small lh-base">
        {{
          episodeDetail
            ? episodeDetailText
            : 'A flashback episode reveals Captain Roarke’s troubled past as a noble-turned-pirate. His path crossed with the kingdom’s navy captain, who now pursues them with a personal vendetta. Meanwhile, the crew faces an attack from a band of mercenary hunters.'
        }}
      </span>
    </div>

    <div
      class="position-absolute episode-time font-size-12 fw-bold px-1 rounded-1 d-flex align-items-center z-2 gap-1"
    >
      <i class="ph ph-clock"></i>
      <p class="mb-0">{{ episodTime }}</p>
    </div>
  </div>
</template>

<script setup>
import { generateImgPath } from '~/StaticData/data';

defineProps({
  episodePath: {
    type: String,
    default: ''
  },
  showImg: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  episodTitle: {
    type: String,
    default: ''
  },
  episodeTitles: {
    type: Boolean,
    default: false
  },
  episodeTitlesText: {
    type: String,
    default: ''
  },
  episodeDetail: {
    type: Boolean,
    default: false
  },
  episodeDetailText: {
    type: String,
    default: ''
  },
  episodTime: {
    type: String,
    default: ''
  },
  episodeNumber: {
    type: Number,
    default: 1
  }
});
</script>
