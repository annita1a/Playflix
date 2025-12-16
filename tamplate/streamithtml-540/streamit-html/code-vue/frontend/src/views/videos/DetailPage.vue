<template>
  <div class="poition-relative">
    <div class="iq-main-slider site-video position-relative">
      <!-- Banner Start -->
      <VideoPlayer :options="playerOption"></VideoPlayer>
      <!-- Banner End -->
    </div>
    <div class="movie-detail-part position-relative">
      <div class="trending-info pt-0 pb-0">
        <div class="details-parts">
          <MovieDescription movie-name="streamMovies.minions" video-url="/video-player" movie-duration="50mins" movie-released="Feb 2017" view-number="84" :movie-views="$t('streamKeyword.views')" :is-video-page-data="true" movie-language="English (New Zealand)" :is-notimdb-rating="true" />
        </div>
      </div>
    </div>
  </div>

  <b-container fluid>
    <div class="overflow-hidden">
      <section class="upcoming-block section-padding-top">
        <UpcomingMovies :title="$t('sectionTitle.upcoming')" :list="upcomingVideoDatail" :notview-all-btn="true"></UpcomingMovies>
      </section>

      <section class="mb-5">
        <DetailsReview></DetailsReview>
      </section>
    </div>
  </b-container>
</template>
<script setup>
import { ref } from 'vue';

import MovieDescription from '../../components/MovieDescription.vue';
import VideoPlayer from '../../components/plugins/VideoPlayer.vue';
import { upcomingVideoDatail } from '../../StaticData/data';
import DetailsReview from '../../components/widgets/DetailsReview.vue';

const playerOption = ref({
  autoplay: true,
  controls: true,
  muted: true,
  loop: true,
  preload: 'auto',
  techOrder: ['youtube'],
  sources: [
    {
      src: 'https://www.youtube.com/watch?v=eq_aKPXuOTg',
      type: 'video/youtube',
    },
  ],
  youtube: {
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    autoplay: 1,
  },
  fullscreen: true,
  poster: '/assets/images/media/minions.webp',
});
</script>
