<template>
  <section class="banner-container">
    <div class="movie-banner">
      <Swiper v-if="render" :dir="rtl" :pagination="{
        el: '.swiper-pagination',
        clickable: true,
      }" :navigation="{
          prevEl: '.swiper-banner-button-prev',
          nextEl: '.swiper-banner-button-next',
        }" :slides-per-view="1.3" :modules="modules" :loop="true" :centered-slides="true"
        class="swiper-banner-container">
        <SwiperSlide class="movie-banner-1 p-0">
          <div class="movie-banner-image" style="background-image: url(/assets/images/media/arrival.webp)">
            <b-container fluid class="shows-content h-100 position-relative">
              <b-row class="align-items-center h-100 slider-content-full-height">
                <b-col lg="7" md="12">
                  <h2 class="texture-text big-font letter-spacing-1 line-count-1 text-capitalize"
                    data-animation-in="fadeInLeft" data-delay-in="0.6">{{ $t('streamMovies.arrival') }}</h2>
                  <div class="flex-wrap align-items-center">
                    <div class="slider-ratting d-flex align-items-center gap-3 flex-wrap mb-3 mb-md-0">
                      <ul
                        class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                        <li>
                          <i class="ph-fill ph-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="ph-fill ph-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="ph-fill ph-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="ph-fill ph-star-half" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="ph ph-star" aria-hidden="true"></i>
                        </li>
                      </ul>
                      <div class="d-flex align-items-center gap-1">
                        <span class="text-white"> 4 </span>

                        <img class="imdb-img" alt="imdb-img" src="/assets/images/pages/imdb-logo.svg" />
                      </div>
                      <span class="badge bg-secondary"> PG </span>
                      <div class="font-size-16">
                        <i class="ph ph-clock align-middle"></i>
                        <span class="trending-time font-normal"> 2hr : 15m </span>
                      </div>

                      <div class="font-size-16">
                        <i class="ph ph-calendar-dots align-middle"></i>
                        <span class="trending-year font-normal"> May 2025 </span>
                      </div>
                    </div>
                    <p class="movie-banner-text line-count-3" data-animation-in="fadeInUp" data-delay-in="1.2">{{
                      $t('streamMovies.arrival_desc') }}</p>
                  </div>
                  <nuxt-link :to="{ name: 'movies-detail' }"
                    class="btn btn-primary position-relative text-capitalize rounded-3">
                    <div class="d-flex align-items-center gap-2">
                      <span class="button-text">{{ $t('streamButtons.play_now') }}</span>
                      <i class="ph-fill ph-play"></i>
                    </div>
                  </nuxt-link>
                </b-col>
                <b-col lg="5" md="12" class="trailor-video iq-slider d-none d-lg-block position-relative">
                  <VideoPop :isPopupStyle1="true" videoLinkUrl="https://www.youtube.com/watch?v=spGSAeqxVUc" />
                </b-col>
              </b-row>
            </b-container>
          </div>
        </SwiperSlide>
        <SwiperSlide class="movie-banner-3 p-0">
          <div class="movie-banner-image" style="background-image: url(/assets/images/media/rabbit.webp)">
            <b-container fluid class="shows-content h-100 position-relative">
              <b-row class="align-items-center h-100 slider-content-full-height">
                <b-col lg="7" md="12">
                  <h2 class="texture-text big-font letter-spacing-1 line-count-1 text-capitalize"
                    data-animation-in="fadeInLeft" data-delay-in="0.6">{{ $t('streamMovies.rabbit') }}</h2>
                  <div class="flex-wrap align-items-center">
                    <div class="slider-ratting d-flex align-items-center gap-3 flex-wrap mb-3 mb-md-0">
                      <ul
                        class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                        <li>
                          <i class="ph-fill ph-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="ph-fill ph-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="ph-fill ph-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="ph-fill ph-star-half" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="ph ph-star" aria-hidden="true"></i>
                        </li>
                      </ul>
                      <div class="d-flex align-items-center gap-1">
                        <span class="text-white"> 8 </span>

                        <img class="imdb-img" alt="imdb-img" src="/assets/images/pages/imdb-logo.svg" />
                      </div>
                      <span class="badge bg-secondary"> NC-17 </span>
                      <div class="font-size-16">
                        <i class="ph ph-clock align-middle"></i>
                        <span class="trending-time font-normal"> 2hr : 30m </span>
                      </div>

                      <div class="font-size-16">
                        <i class="ph ph-calendar-dots align-middle"></i>
                        <span class="trending-year font-normal"> Dec 2018 </span>
                      </div>
                    </div>
                    <p class="movie-banner-text line-count-3" data-animation-in="fadeInUp" data-delay-in="1.2">{{
                      $t('streamMovies.rabbit_desc') }}</p>
                  </div>
                  <router-link :to="{ name: 'movies-detail' }"
                    class="btn btn-primary position-relative text-capitalize rounded-3">
                    <div class="d-flex align-items-center gap-2">
                      <span class="button-text">{{ $t('streamButtons.play_now') }}</span>
                      <i class="ph-fill ph-play"></i>
                    </div>
                  </router-link>
                </b-col>
                <b-col lg="5" md="12" class="trailor-video iq-slider d-none d-lg-block position-relative">
                  <VideoPop :isPopupStyle1="true" videoLinkUrl="https://www.youtube.com/watch?v=spGSAeqxVUc" />
                </b-col>
              </b-row>
            </b-container>
          </div>
        </SwiperSlide>
        <SwiperSlide class="movie-banner-3 p-0">
          <div class="movie-banner-image" style="background-image: url(/assets/images/media/chosfies.webp)">
            <b-container fluid class="shows-content h-100 position-relative">
              <b-row class="align-items-center h-100 slider-content-full-height">
                <b-col lg="7" md="12">
                  <h2 class="texture-text big-font letter-spacing-1 line-count-1 text-capitalize"
                    data-animation-in="fadeInLeft" data-delay-in="0.6">{{ $t('streamMovies.chosfies') }}</h2>
                  <div class="flex-wrap align-items-center">
                    <div class="slider-ratting d-flex align-items-center gap-3 flex-wrap mb-3 mb-md-0">
                      <ul
                        class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                        <li>
                          <i class="ph-fill ph-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="ph-fill ph-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="ph-fill ph-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="ph-fill ph-star-half" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="ph ph-star" aria-hidden="true"></i>
                        </li>
                      </ul>
                      <div class="d-flex align-items-center gap-1">
                        <span class="text-white"> 3.5 </span>

                        <img class="imdb-img" alt="imdb-img" src="/assets/images/pages/imdb-logo.svg" />
                      </div>
                      <span class="badge bg-secondary"> NC-17 </span>
                      <div class="font-size-16">
                        <i class="ph ph-clock align-middle"></i>
                        <span class="trending-time font-normal"> 2hr : 6m </span>
                      </div>

                      <div class="font-size-16">
                        <i class="ph ph-calendar-dots align-middle"></i>
                        <span class="trending-year font-normal"> May 2025 </span>
                      </div>
                    </div>
                    <p class="movie-banner-text line-count-3" data-animation-in="fadeInUp" data-delay-in="1.2">{{
                      $t('streamMovies.chosfies_desc') }}</p>
                  </div>
                  <router-link :to="{ name: 'movies-detail' }"
                    class="btn btn-primary position-relative text-capitalize rounded-3">
                    <div class="d-flex align-items-center gap-2">
                      <span class="button-text">{{ $t('streamButtons.play_now') }}</span>
                      <i class="ph-fill ph-play"></i>
                    </div>
                  </router-link>
                </b-col>
                <b-col lg="5" md="12" class="trailor-video iq-slider d-none d-lg-block position-relative">
                  <VideoPop :isPopupStyle1="true" videoLinkUrl="https://www.youtube.com/watch?v=spGSAeqxVUc" />
                </b-col>
              </b-row>
            </b-container>
          </div>
        </SwiperSlide>
        <div class="swiper-banner-button-next d-none d-lg-block">
          <i class="iconly-Arrow-Right-2 icli arrow-icon"></i>
        </div>
        <div class="swiper-banner-button-prev">
          <i class="iconly-Arrow-Left-2 icli arrow-icon d-none d-lg-block"></i>
        </div>
        <div class="swiper-pagination d-block d-lg-none"></div>
      </Swiper>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
import { ref, computed, watch } from 'vue';
import { useSetting } from '../../store/setting/index';
import VideoPop from "../widgets/video-pop.vue";
const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);
const render = ref(true);
watch(
  () => rtl.value,
  () => {
    render.value = false;
    setTimeout(() => {
      render.value = true;
    }, 0);
  }
);

// Swiper Modules
const modules = [Navigation, Pagination];
</script>
