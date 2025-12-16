<template>
  <!-- ott home slider start -->
  <div class="iq-banner-thumb-slider overflow-hidden">
    <div class="slider">
      <div class="position-relative slider-bg my-auto">
        <!-- <div class="position-relative my-auto"> -->
        <div class="horizontal_thumb_slider" data-swiper="slider-thumbs-ott">
          <div class="banner-thumb-slider-nav">
            <Swiper v-if="render" :dir="rtl" :slides-per-view="2" :navigation="{
              prevEl: '.slider-prev',
              nextEl: '.slider-next',
            }" class="swiper-container m-0" :space-between="24" :modules="modules" :loop="true" :looped-slides="8"
              :thumbs="{ swiper: thumbsSwiper }">
              <SwiperSlide v-for="movie in sliderMovies" :key="movie.id" class="swiper-bg">
                <div class="block-images position-relative">
                  <div class="img-box">
                    <img :src="movie.imagePortrait" class="img-fluid" alt="img" loading="lazy" />
                    <div class="block-description">
                      <h6 class="iq-title fw-500 line-count-1">{{ $t(movie.title) }}</h6>
                      <div class="d-flex align-items-center gap-1">
                        <i class="ph ph-clock"></i>
                        <span class="fs-12">
                          {{ movie.duration || ($t(movie.release?.month) + " " + movie.release?.year) }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div class="slider-prev swiper-button d-flex align-items-center justify-content-center">
              <i class="ph ph-caret-left"></i>
            </div>
            <div class="slider-next swiper-button d-flex align-items-center justify-content-center">
              <i class="ph ph-caret-right"></i>
            </div>
          </div>
        </div>
        <!-- </div> -->
        <div class="slider-images" data-swiper="slider-images-ott">
          <Swiper v-if="render" class="swiper-container mb-0" :pagination="{
            el: '.swiper-pagination',
            clickable: true,
          }" :dir="rtl" :loop="true" :space-between="0" :slides-per-view="1" :looped-slides="8" :effect="'fade'"
            :modules="modules" @swiper="setThumbsSwiper">
            <!-- thumbnail slider -->
            <SwiperSlide v-for="movie in sliderMovies" :key="movie.id" class="banner-bg p-0">
              <div class="slider--image block-images" :style="{ backgroundImage: `url(${movie.imageBanner})` }">
                <b-container fluid class="position-relative">
                  <b-row class="align-items-center h-100 slider-content-full-height">
                    <b-col lg="5" md="12">
                      <div class="slider-content">
                        <!-- Title -->
                        <h2 class="texture-text big-font letter-spacing-1 line-count-1 RightAnimate-two mb-1 mb-md-3">
                          {{ $t(movie.title) }}
                        </h2>

                        <!-- Badge + Ratings + Time/Release -->
                        <div class="d-flex flex-wrap align-items-center gap-3 py-2 RightAnimate-three">
                          <span class="badge rounded-0 text-white text-capitalize px-2 py-1 bg-secondary fw-bold">
                            {{ formatBadge(movie.badge) }}
                          </span>

                          <!-- Rating -->
                          <div class="d-flex align-items-center gap-3">
                            <ul
                              class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left gap-1">
                              <li v-for="i in 5" :key="i">
                                <i v-if="i <= Math.floor(movie.rating)" class="ph-fill ph-star"></i>
                                <i v-else-if="i - movie.rating <= 0.5" class="ph-fill ph-star-half"></i>
                                <i v-else class="ph ph-star"></i>
                              </li>
                            </ul>

                            <span>
                              <img :src="generateImgPath('/assets/images/pages/imdb-logo.svg')" alt="imdb logo"
                                class="img-fluid imdb-img" />
                            </span>
                          </div>

                          <!-- Duration or Release -->
                          <div v-if="movie.duration" class="d-flex align-items-center gap-1">
                            <i class="ph ph-clock"></i>
                            <span class="font-size-16 fw-500">{{ movie.duration }}</span>
                          </div>
                          <div v-else-if="movie.release" class="d-flex align-items-center gap-1">
                            <i class="ph ph-clock"></i>
                            <span class="font-size-16 fw-500">
                              {{ $t(movie.release.month) }} {{ movie.release.year }}
                            </span>
                          </div>
                        </div>

                        <!-- Description -->
                        <p class="line-count-3 my-3 RightAnimate-two">
                          {{ $t(movie.desc) }}
                        </p>

                        <!-- Tags -->
                        <div class="RightAnimate-three mt-2">
                          <div class="text-primary font-size-14 fw-500 text-capitalize mb-1" v-if="movie.tags?.length">
                            {{ $t('streamTag.tags') }}:
                            <router-link v-for="(tag, i) in movie.tags" :key="tag"
                              :to="{ name: 'landing-page.view-all' }" class="text-body text-decoration-none fw-normal ms-1">
                              {{ $t(tag) }}<span v-if="i < movie.tags.length - 1">,</span>
                            </router-link>
                          </div>

                          <!-- Genres -->
                          <div class="text-primary font-size-14 fw-500 text-capitalize mb-1"
                            v-if="movie.genres?.length">
                            {{ $t('streamGenres.genre') }}:
                            <router-link v-for="(genre, i) in movie.genres" :key="genre"
                              :to="{ name: 'landing-page.view-all' }" class="text-body text-decoration-none fw-normal ms-1">
                              {{ $t(genre) }}<span v-if="i < movie.genres.length - 1">,</span>
                            </router-link>
                          </div>

                          <!-- Cast -->
                          <div class="text-primary font-size-14 fw-500 text-capitalize" v-if="movie.cast?.length">
                            {{ $t('favouritePersonalities.starting') }}:
                            <router-link v-for="(actor, i) in movie.cast" :key="actor"
                              :to="{ name: 'landing-page.cast-detail' }"
                              class="text-body text-decoration-none fw-normal ms-1">
                              {{ $t(actor) }}<span v-if="i < movie.cast.length - 1">,</span>
                            </router-link>
                          </div>
                        </div>

                        <!-- Button -->
                        <div class="RightAnimate-four mt-4 pt-2">
                          <custom-button :button-title="$t('streamButtons.play_now')"
                            :link="{ path: '/movies-detail' }"></custom-button>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
            </SwiperSlide>
            <div class="swiper-pagination d-block d-lg-none"></div>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
  <!-- ott home slider end -->
</template>
<script setup>
import { sliderMovies } from '../../StaticData/data';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Controller, Thumbs, EffectFade, Pagination, Autoplay } from 'swiper';
import CustomButton from '../CustomButton.vue';
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSetting } from '../../store/setting/index';

const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);
const render = ref(true);

watch(
  () => rtl.value,
  () => {
    thumbsSwiper.value = null;
    render.value = false;
    setTimeout(() => {
      render.value = true;
    }, 0);
  }
);

// Swiper Modules
const modules = [Navigation, Controller, Thumbs, EffectFade, Pagination, Autoplay];
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

// i18n helper to format badges
const { t } = useI18n();
const formatBadge = (badge) => {
  if (!badge) return '';
  // handle cases like '4 streamEpisode.season' or '2 streamEpisode.season'
  const parts = String(badge).split(' ');
  if (parts.length > 1 && !isNaN(Number(parts[0]))) {
    const num = parts.shift();
    const key = parts.join(' ');
    return `${num} ${t(key)}`;
  }
  // fallback: try translating entire badge
  return t(badge);
};
</script>
