<template>
  <section class="banner-container">
    <div class="movie-banner">
      <Swiper v-if="render" :dir="rtl" :pagination="{ el: '.swiper-pagination', clickable: true }"
        :navigation="{ prevEl: '.swiper-banner-button-prev', nextEl: '.swiper-banner-button-next' }"
        :slides-per-view="1.3" :modules="modules" :loop="true" :centered-slides="true"
        class="swiper-banner-container iq-rtl-direction">
        <SwiperSlide v-for="banner in videoBanners" :key="banner.id" :class="banner.className + ' p-0'">
          <div class="movie-banner-image" :style="{ backgroundImage: `url(${banner.image})` }">
            <b-container fluid class="shows-content h-100 position-relative">
              <b-row class="align-items-center h-100 slider-content-full-height">
                <b-col lg="7" md="12">
                  <h2 class="texture-text big-font letter-spacing-1 line-count-1 text-capitalize"
                    data-animation-in="fadeInLeft" data-delay-in="0.6">
                    {{ $t(banner.title) }}
                  </h2>

                  <div class="flex-wrap align-items-center">
                    <div class="slider-ratting d-flex align-items-center gap-3 flex-wrap mb-3 mb-md-0">
                      <span class="badge bg-secondary">
                        <i class="ph ph-eye"></i>
                        {{ banner.views }}
                      </span>

                      <div class="font-size-16">
                        <i class="ph ph-clock align-middle"></i>
                        <span class="trending-time font-normal">{{ banner.duration }}</span>
                      </div>

                      <div class="font-size-16">
                        <span class="trending-year font-normal">{{ banner.release }}</span>
                      </div>
                    </div>

                    <p class="movie-banner-text line-count-3" data-animation-in="fadeInUp" data-delay-in="1.2">
                      {{ $t(banner.description) }}
                    </p>
                  </div>

                  <router-link :to="{ path: '/video-detail' }"
                    class="btn btn-primary position-relative text-capitalize rounded-3">
                    <div class="d-flex align-items-center gap-2">
                      <span class="button-text">{{ $t('streamButtons.play_now') }}</span>
                      <i class="ph-fill ph-play"></i>
                    </div>
                  </router-link>
                </b-col>

                <b-col lg="5" md="12" class="trailor-video iq-slider d-none d-lg-block position-relative">
                  <a href="#" class="video-open playbtn text-decoration-none" tabindex="0">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="80px" height="80px"
                      viewBox="0 0 213.7 213.7" @click="toggler = !toggler">
                      <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round"
                        stroke-linejoin="round" stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1">
                      </polygon>
                      <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                    </svg>
                    <span class="w-trailor text-uppercase" @click="toggler = !toggler">
                      {{ $t('streamButtons.watch_trailer') }}
                    </span>
                  </a>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </SwiperSlide>

        <!-- Navigation -->
        <div class="swiper-banner-button-next d-none d-lg-block">
          <i class="ph ph-caret-right icli  arrow-icon"></i>
        </div>
        <div class="swiper-banner-button-prev">
          <i class="ph ph-caret-left icli arrow-icon d-none d-lg-block"></i>
        </div>

        <!-- Pagination for mobile -->
        <div class="swiper-pagination d-block d-lg-none"></div>
      </Swiper>

    </div>
  </section>
  <FsLightbox :toggler="toggler" :sources="[generateImgPath('/assets/images/video/trailer.mp4')]" />
</template>
<script setup>
import { videoBanners } from '../../StaticData/data';
import FsLightbox from 'fslightbox-vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
import { ref, computed, watch } from 'vue';
import { useSetting } from '../../store/setting/index';
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

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

// Swiper Modules
const modules = [Navigation, Pagination];
const toggler = ref(false);
</script>
