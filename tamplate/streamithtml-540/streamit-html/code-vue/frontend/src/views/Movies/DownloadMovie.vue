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
          <MovieDescription movie-name="streamMovies.chosfies" video-url="/movie-player" movie-type="NC-17"
            movie-duration="2hr : 6m" movie-released="2021" view-number="1.4k" :movie-views="$t('streamKeyword.views')"
            imdb-rating="7" :movie-description="$t('streamMovies.chosfies_desc')" />

        </div>
      </div>
    </div>
  </div>

  <b-container fluid>
    <div class="overflow-hidden">
      <!-- Movies Recommended For You Start  -->
      <section class="recommended-block section-padding-top">
        <MoviesRecommendedForYou :title="'sectionTitle.recommended'" :list="upcoming_recommended_movies"
          :slides-per-view="6" />

      </section>

      <!-- Starring start -->
      <YourFavouritePersonality :title="'sectionTitle.starring'" :slide-per-view="11" />
      <!-- Crew start -->
      <YourFavouritePersonality :title="'sectionTitle.crew'" :data="crew" :slide-per-view="11" />

      <section class="related-movie-block">
        <MoviesRecommendedForYou :title="'sectionTitle.recommended_movie'" :list="upcoming_recommended_movies" :slides-per-view="6"></MoviesRecommendedForYou>
      </section>

      <section class="video-block">
        <RelatedMovies :title="'sectionTitle.related_videos'" :list="detailpage_related_video"></RelatedMovies>
      </section>

      <section class="upcoming-block">
        <UpcomingMovies :title="$t('sectionTitle.upcoming')" :list="upcoming_related_video" :notview-all-btn="true">
        </UpcomingMovies>
      </section>

      <section class="mb-5">
        <DetailsReview></DetailsReview>
      </section>
    </div>
  </b-container>
</template>

<script setup>
import { computed, ref } from 'vue';
import { Navigation, Autoplay } from 'swiper';

// plugins

import MoviesRecommendedForYou from '../../components/sections/MoviesRecommendedForYou.vue';
import UpcomingMovies from '../../components/sections/UpcomingMovies.vue';
import YourFavouritePersonality from '../../components/sections/YourFavouritePersonality.vue';
import VideoPlayer from '../../components/plugins/VideoPlayer.vue';
import { useSetting } from '../../store/setting/index';
import RelatedMovies from '../../components/sections/RelatedMovies.vue';
import MovieDescription from '../../components/MovieDescription.vue';
import {crew} from '../../StaticData/data';

import { upcoming_recommended_movies, detailpage_related_video, upcoming_related_video } from '../../StaticData/data';
import DetailsReview from '../../components/widgets/DetailsReview.vue';

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const modules = [Navigation, Autoplay];

const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);

const playerOption = ref({
  autoplay: true,
  controls: true,
  muted: true,
  loop: true,
  preload: 'auto',
  techOrder: ['youtube'],
  sources: [
    {
      src: 'https://www.youtube.com/watch?v=spGSAeqxVUc',
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
  poster: '/assets/images/player/player-poster.webp',
});
</script>
