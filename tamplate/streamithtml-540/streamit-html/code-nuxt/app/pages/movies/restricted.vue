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
          <MovieDescription :subscribe-to-watch="true" movie-name="streamMovies.chosfies" video-url="/pricing-plan" movie-type="NC-17" movie-duration="2hr : 6m" movie-released="2021" view-number="1.4k" :movie-views="$t('streamKeyword.views')" imdb-rating="7" movie-description></MovieDescription>
        </div>
      </div>
    </div>
  </div>

  <b-container fluid>
    <div class="overflow-hidden">
      <!-- Movies Recommended For You Start  -->
      <section class="recommended-block section-padding-top">
        <MoviesRecommendedForYou :title="$t('sectionTitle.recommended')" :list="Recommended" :slides-per-view="6"></MoviesRecommendedForYou>
      </section>

      <!-- Starring start -->
      <div class="favourite-person-block">
        <section class="overflow-hidden">
          <div class="d-flex align-items-center justify-content-between px-1 mb-2 pb-1 mb-md-4 pb-md-0">
            <h4 class="main-title text-capitalize mb-0">{{$t('sectionTitle.starring')}}</h4>
          </div>

          <Swiper
            :dir="rtl"
            :slides-per-view="11"
            :space-between="0"
            :loop="true"
            :navigation="{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }"
            :pagination="true"
            :modules="modules"
            :breakpoints="{
              320: { slidesPerView: 2 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 11 },
            }"
            class="position-relative swiper swiper-card wrapper-class personality-card">
            <SwiperSlide v-for="(cast, index) in castList" :key="index" class="swiper-slide">
              <PersonalityCard :image="cast.image" :title="$t(cast.title)" :category="$t(cast.category)" />
            </SwiperSlide>

            <div class="swiper-button swiper-button-next d-none d-lg-block"></div>
            <div class="swiper-button swiper-button-prev d-none d-lg-block"></div>
          </Swiper>
        </section>
      </div>

      <!-- Crew start -->
      <div class="favourite-person-block">
        <section class="overflow-hidden">
          <div class="d-flex align-items-center justify-content-between px-1 mb-2 pb-1 mb-md-4 pb-md-0">
            <h4 class="main-title text-capitalize mb-0">{{$t('sectionTitle.crew')}}</h4>
          </div>

          <Swiper
            :dir="rtl"
            :slides-per-view="11"
            :space-between="0"
            :loop="true"
            :navigation="{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }"
            :pagination="true"
            :modules="modules"
            :breakpoints="{
              320: { slidesPerView: 2 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 11 },
            }"
            class="position-relative swiper swiper-card wrapper-class personality-card">
            <SwiperSlide v-for="(cast, index) in crewList" :key="index" class="swiper-slide">
              <PersonalityCard :image="cast.image" :title="$t(cast.title)" :other-category="$t(cast.otherCategory || '')" :category="$t(cast.category)" />
            </SwiperSlide>

            <div class="swiper-button swiper-button-next d-none d-lg-block"></div>
            <div class="swiper-button swiper-button-prev d-none d-lg-block"></div>
          </Swiper>
        </section>
      </div>

      <div class="related-movie-block">
        <MoviesRecommendedForYou :title="$t('sectionTitle.recommended_movie')" :list="downloadRecommendedforYou" :slides-per-view="6"></MoviesRecommendedForYou>
      </div>

      <section class="video-block">
        <RelatedMovies :title="$t('sectionTitle.related_videos')" :list="relatedVideoRestricted" :slides-per-view="6"></RelatedMovies>
      </section>

      <section class="upcomimg-block">
        <UpcomingMovies :title="$t('sectionTitle.upcoming')" :list="upcomingRestricted" :notview-all-btn="true"></UpcomingMovies>
      </section>

      <div class="section-padding-bottom">
        <div class="rate-review-details">
          <div class="d-flex align-items-center justify-content-between gap-3 mb-3">
            <h5 class="main-title text-capitalize m-0 fw-medium">{{$t('streamShop.reviews')}}</h5>
          </div>
          <div class="comments-section">
            <div class="review-card">
              <div class="review-detail rounded-3">
                <h5 class="m-0 text-center">Not Rated Yet</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script setup>
import { computed, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper';

// plugins

import MoviesRecommendedForYou from '~/components/sections/MoviesRecommendedForYou.vue';
import UpcomingMovies from '~/components/sections/UpcomingMovies.vue';
import VideoPlayer from '~/components/plugins/VideoPlayer.vue';
import { useSetting } from '../../store/setting/index';
import RelatedMovies from '~/components/sections/RelatedMovies.vue';
import MovieDescription from '~/components/MovieDescription.vue';

import { Recommended, downloadRecommendedforYou, relatedVideoRestricted, sectionSliders, upcomingRestricted } from '~/StaticData/data';
import PersonalityCard from '~/components/cards/PersonalityCard.vue';

const generateImgPath = (path) => {
    return window.location.origin + path;
};

const modules = [Navigation, Autoplay];

const castList = [
    { image: '/assets/images/cast/olivia-foster.webp', title: 'favouritePersonalities.olivia_foster', category: 'persondesc.actress' },
    { image: '/assets/images/cast/leena-burton.webp', title: 'favouritePersonalities.Leena_Burton', category: 'persondesc.actress' },
    { image: '/assets/images/cast/ryan-pierce.webp', title: 'favouritePersonalities.Ryan_Pierce', category: 'persondesc.actor' },
    { image: '/assets/images/cast/michael-fox.webp', title: 'favouritePersonalities.michael_fox', category: 'persondesc.producer' },
    { image: '/assets/images/cast/ruby-scott.webp', title: 'favouritePersonalities.ruby_scott', category: 'persondesc.director' },
    { image: '/assets/images/cast/maxwell-carter.webp', title: 'favouritePersonalities.maxwell_carter', category: 'persondesc.actress' },
    { image: '/assets/images/cast/mark-smith.webp', title: 'favouritePersonalities.mark_smith', category: 'persondesc.actress' },
    { image: '/assets/images/cast/ava-monroe.webp', title: 'favouritePersonalities.ava_monroe', category: 'persondesc.actress' },
    { image: '/assets/images/cast/jack-nicholson.webp', title: 'favouritePersonalities.jack_nicholson', category: 'persondesc.actor' },
    { image: '/assets/images/cast/charles-melton.webp', title: 'favouritePersonalities.charles_melton', category: 'persondesc.actor' },
    { image: '/assets/images/cast/jeff-bridges.webp', title: 'favouritePersonalities.jeff_bridges', category: 'persondesc.actor' },
    { image: '/assets/images/cast/james-stewart.webp', title: 'favouritePersonalities.james_stewart', category: 'persondesc.actor' },
    { image: '/assets/images/cast/jordan-grant.webp', title: 'favouritePersonalities.jordan_grant', category: 'persondesc.actor' },

];

const crewList = [
   {
    image: generateImgPath("/assets/images/cast/maria-rodriguez.webp"),
    title: "favouritePersonalities.maria_rodriguez",
    category: "persondesc.director",
  },
  {
    image: generateImgPath("/assets/images/cast/oliver-turner.webp"),
    title: "favouritePersonalities.Olivia_Foster",
    category: "persondesc.director",
  },
  {
    image: generateImgPath("/assets/images/cast/john-abraham.webp"),
    title: "favouritePersonalities.john_abraham",
    category: "persondesc.director",
  },
  {
    image: generateImgPath("/assets/images/cast/benjamin-hayes.webp"),
    title: "favouritePersonalities.benjamin_hayes",
    category: "persondesc.director",
  },
  {
    image: generateImgPath("/assets/images/cast/ethan-crawford.webp"),
    title: "favouritePersonalities.ethan_crawford",
    category: "persondesc.producer",
  },
  {
    image: generateImgPath("/assets/images/cast/mark-wilson.webp"),
    title: "favouritePersonalities.mark_wilson",
    category: "persondesc.director",
  },
  {
    image: generateImgPath("/assets/images/cast/jack-walker.webp"),
    title: "favouritePersonalities.jack_walker",
    category: "persondesc.director",
  },
  {
    image: generateImgPath("/assets/images/cast/millar-joseph.webp"),
    title: "favouritePersonalities.millar_joseph",
    category: "persondesc.producer",
  },
  {
    image: generateImgPath("/assets/images/cast/kelly-reilly.webp"),
    title: "favouritePersonalities.kelly_reilly",
    category: "persondesc.director",
  },
  {
    image: generateImgPath("/assets/images/cast/smith-jonas.webp"),
    title: "favouritePersonalities.smith_jonas",
    category: "persondesc.director",
  },
  {
    image: generateImgPath("/assets/images/cast/davina-decorous.webp"),
    title: "favouritePersonalities.davina_decorous",
    category: "persondesc.producer",
  },
  {
    image: generateImgPath("/assets/images/cast/thomas-bailey.webp"),
    title: "favouritePersonalities.thomas_bailey",
    category: "persondesc.producer",
  },
  {
    image: generateImgPath("/assets/images/cast/leena-burton.webp"),
    title: "favouritePersonalities.Leena_Burton",
    category: "persondesc.director",
  },
];

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
  poster: 'https://i.ytimg.com/vi_webp/rKVEoyTedv4/maxresdefault.webp',
});
</script>
