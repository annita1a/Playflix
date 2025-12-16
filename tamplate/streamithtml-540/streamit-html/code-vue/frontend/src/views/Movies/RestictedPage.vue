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
          <MovieDescription :subscribe-to-watch="true" movie-name="streamMovies.chosfies" video-url="/pricing-plan"
            movie-type="NC-17" movie-duration="2hr : 6m" movie-released="2021" view-number="1.4k"
            :movie-views="$t('streamKeyword.views')" imdb-rating="7" movie-description></MovieDescription>
        </div>
      </div>
    </div>
  </div>

  <b-container fluid>
    <div class="overflow-hidden">
      <!-- Movies Recommended For You Start  -->
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

      <section class="upcoming-block">
        <UpcomingMovies :title="$t('sectionTitle.upcoming')" :list="upcomingRestricted" :notview-all-btn="true">
        </UpcomingMovies>
      </section>

      <section class="mb-5">
        <div class="rate-review-details">
          <div class="d-flex align-items-center justify-content-between gap-3 mb-3">
            <h5 class="main-title text-capitalize m-0 fw-medium">{{ $t('streamShop.reviews') }}</h5>
            <div class="d-flex align-items-center gap-3">
              <a id="openReviewButton" class="btn btn-link p-0 custom-fs-14 openReviewButton" data-bs-toggle="offcanvas"
                href="#offcanvasReview" role="button" aria-controls="offcanvasReview">
                {{ $t('streamButtons.add_review') }} </a>
              <router-link class="btn btn-link p-0 custom-fs-14"
                :to="{ path: '/view-more' }">{{ $t('streamButtons.view_more') }}</router-link>
            </div>
          </div>

          <div class="review-card">
            <div class="review-detail rounded-3">
              <h5 class="m-0 text-center">Not Rated Yet</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  </b-container>

    <!-- Offcanvas -->
  <div id="offcanvasReview" class="offcanvas overflow-y-auto widget-shopping-cart-content offcanvas-end offcanvas-sidebar sidebar-container on-rtl end border-left-0" tabindex="-1" aria-modal="true" role="dialog">
    <div class="offcanvas-header justify-content-between position-relative border-bottom">
      <h5 id="offcanvasReviewLabel" class="offcanvas-title fw-500">{{$t('streamButtons.add_review')}}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form @submit.prevent="submitReview">
        <input type="hidden" name="st_ajax_nonce" :value="formData.nonce" />
        <input type="hidden" name="_wp_http_referer" :value="formData.referer" />
        <input id="cm_id" v-model="formData.comment_id" type="hidden" name="comment_id" />
        <input id="cm_post_type" v-model="formData.post_type" type="hidden" name="post_type" />
        <input id="cm_post_id" v-model="formData.post_id" type="hidden" name="post_id" />
        <input id="cm_user_id" v-model="formData.user_id" type="hidden" name="user_id" />
        <input id="cm_name" v-model="formData.name" type="hidden" name="cm_name" />
        <input id="cm_email" v-model="formData.email" type="hidden" name="cm_email" />

  <p class="mt-0 text-heading">{{$t('streamAccount.log_in')}}: {{ formData.name }}</p>

        <div class="form-group mb-4">
          <label class="form-label mb-3">{{$t('streamShop.your_rating')}}</label>
          <div id="starRating" class="star-rating">
            <template v-for="i in 5" :key="i">
              <input :id="'star' + i" v-model="formData.rating" type="radio" name="rating" :value="i" />
              <label :for="'star' + i" :title="`${i} stars`">
                <i class="ph-fill ph-star" aria-hidden="true"></i>
              </label>
            </template>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label flex-grow-1" for="Description">{{$t('streamShop.your_review')}}</label>
          <textarea id="Description" v-model="formData.review" class="form-control review-text-area" rows="8" cols="45"></textarea>
        </div>

        <div class="iq-button">
          <button type="submit" class="btn btn-primary text-capitalize">
            <span class="button-text">{{$t('streamButtons.submit_review')}}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// Define formData with all required properties to avoid undefined errors
const formData = ref({
  nonce: '',
  referer: '',
  comment_id: '',
  post_type: '',
  post_id: '',
  user_id: '',
  name: '',
  email: '',
  rating: '',
  review: ''
});
import { computed, ref } from 'vue';

// plugins

import MoviesRecommendedForYou from '../../components/sections/MoviesRecommendedForYou.vue';
import UpcomingMovies from '../../components/sections/UpcomingMovies.vue';
import VideoPlayer from '../../components/plugins/VideoPlayer.vue';
import { useSetting } from '../../store/setting/index';
import RelatedMovies from '../../components/sections/RelatedMovies.vue';
import MovieDescription from '../../components/MovieDescription.vue';
import YourFavouritePersonality from '../../components/sections/YourFavouritePersonality.vue';

import { crew, MovieDetail_recommendedforYou, detailpage_related_video, upcoming_recommended_movies, upcomingRestricted } from '../../StaticData/data';


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

const submitReview = () => {
  // Reset form
  formData.value.rating = '';
  formData.value.review = '';
};
</script>
