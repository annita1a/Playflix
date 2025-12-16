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
          <MovieDescription :video-url="{ path: '/movies-detail' }" movie-name="streamMovies.dinoosaur"
            movie-type="NC-17" movie-duration="2hr : 6m" movie-released="2021" view-number="1.4k"
            :movie-views="$t('streamKeyword.views')" imdb-rating="7" movie-description></MovieDescription>
        </div>
      </div>
    </div>
  </div>

  <b-container fluid>
    <div class="overflow-hidden">
        <section class="recommended-block section-padding-top">
          <MoviesRecommendedForYou :title="'sectionTitle.recommended'" :list="MovieDetail_recommendedforYou"
            :slides-per-view="6"></MoviesRecommendedForYou>
        </section>

      <!-- Starring start -->
    <YourFavouritePersonality :title="'sectionTitle.starring'" :slide-per-view="11" />
     <!-- Crew start -->
      <YourFavouritePersonality :title="'sectionTitle.crew'" :data="crew" :slide-per-view="11" />

      <section class="related-movie-block">
        <RelatedMovies :title="'sectionTitle.related_movies'" :list="upcoming_recommended_movies" :slides-per-view="6">
        </RelatedMovies>
      </section>

      <section class="video-block">
        <RelatedMovies :title="'sectionTitle.related_videos'" :list="detailpage_related_video" :slides-per-view="6">
        </RelatedMovies>
      </section>

      <section class="related-product-block">
        <ProductSection :title="'sectionTitle.related_products'" :slides-per-view="6" :not-want-more-btn="false"
          :padding-top="true" class="px-1 mb-2 pb-1 mb-md-4 pb-md-0"></ProductSection>
      </section>

      <section class="upcoming-block">
        <UpcomingMovies :title="$t('sectionTitle.upcoming')" :list="upcomingRestricted" padding-top="paddingTop">
        </UpcomingMovies>
      </section>
    </div>
  </b-container>
</template>

<script setup>
import { computed, ref } from 'vue';
// plugins
import { Navigation } from 'swiper';
import MoviesRecommendedForYou from '../../components/sections/MoviesRecommendedForYou.vue';
import UpcomingMovies from '../../components/sections/UpcomingMovies.vue';
import ProductSection from '../../components/sections/ProductSection.vue';
import YourFavouritePersonality from '../../components/sections/YourFavouritePersonality.vue';
import VideoPlayer from '../../components/plugins/VideoPlayer.vue';
import { MovieDetail_recommendedforYou, crew, upcoming_recommended_movies, detailpage_related_video, upcomingRestricted } from '../../StaticData/data';
import { useSetting } from '../../store/setting/index';
import RelatedMovies from '../../components/sections/RelatedMovies.vue';
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