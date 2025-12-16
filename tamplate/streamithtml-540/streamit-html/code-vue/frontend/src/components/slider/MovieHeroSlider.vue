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
        <SwiperSlide v-for="(movie, index) in movieSlides" :key="index" class="movie-banner-1 p-0">
          <div class="movie-banner-image" :style="{ backgroundImage: `url(${movie.image})` }">
            <b-container fluid class="shows-content h-100 position-relative">
              <b-row class="align-items-center h-100 slider-content-full-height">
                <b-col lg="7" md="12">
                  <h2 class="texture-text big-font letter-spacing-1 line-count-1 text-capitalize"
                    data-animation-in="fadeInLeft" data-delay-in="0.6">
                    {{ $t(movie.title) }}
                  </h2>

                  <!-- Ratings + Meta -->
                  <div class="flex-wrap align-items-center">
                    <div class="slider-ratting d-flex align-items-center gap-3 flex-wrap mb-3 mb-md-0">
                      <ul
                        class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                        <li><i class="ph-fill ph-star" aria-hidden="true"></i></li>
                        <li><i class="ph-fill ph-star" aria-hidden="true"></i></li>
                        <li><i class="ph-fill ph-star" aria-hidden="true"></i></li>
                        <li><i class="ph-fill ph-star-half" aria-hidden="true"></i></li>
                        <li><i class="ph ph-star" aria-hidden="true"></i></li>
                      </ul>

                      <div class="d-flex align-items-center gap-1">
                        <span class="text-white">{{ movie.rating }}</span>
                        <img class="imdb-img" alt="imdb-img" :src="movie.imdb" />
                      </div>

                      <span class="badge bg-secondary">{{ formatBadge(movie.badge) }}</span>

                      <div class="font-size-16 d-flex align-items-center gap-1">
                        <i class="ph ph-clock align-middle"></i>
                        <span class="trending-time font-normal">{{ movie.time }}</span>
                      </div>

                      <div class="font-size-16 d-flex align-items-center gap-1">
                        <i class="ph ph-calendar-dots align-middle"></i>
                        <span class="trending-year font-normal">{{ movie.year }}</span>
                      </div>
                    </div>

                    <p class="movie-banner-text line-count-3" data-animation-in="fadeInUp" data-delay-in="1.2">
                      {{ $t(movie.desc) }}
                    </p>
                  </div>

                  <!-- Play Button -->
                  <router-link :to="{ path: '/movies-detail' }"
                    class="btn btn-primary position-relative text-capitalize rounded-3">
                    <div class="d-flex align-items-center gap-2">
                      <span class="button-text">{{ $t('streamButtons.play_now') }}</span>
                      <i class="ph-fill ph-play"></i>
                    </div>
                  </router-link>
                </b-col>

                <!-- Trailer Section -->
                <b-col lg="5" md="12" class="trailor-video iq-slider d-none d-lg-block position-relative">
                  <a href="#" class="video-open playbtn text-decoration-none" tabindex="0"
                    @click.prevent="toggler = !toggler">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80px" height="80px"
                      viewBox="0 0 213.7 213.7" xml:space="preserve">
                      <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round"
                        stroke-linejoin="round" stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 " />
                      <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3" />
                    </svg>
                    <span class="w-trailor text-uppercase">
                      {{ $t('streamButtons.watch_trailer') }}
                    </span>
                  </a>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </SwiperSlide>
        <div className="swiper-banner-button-next d-none d-lg-block">
          <i className="ph ph-caret-right arrow-icon"></i>
        </div>
        <div className="swiper-banner-button-prev d-none d-lg-block">
          <i className="ph ph-caret-left arrow-icon"></i>
        </div>
        <div class="swiper-pagination d-block d-lg-none"></div>
      </Swiper>
    </div>
  </section>
  <FsLightbox :toggler="toggler" :sources="[generateImgPath('/assets/images/video/trailer.mp4')]" />
</template>
<script setup>
import { movieSlides } from '../../StaticData/data';
import FsLightbox from 'fslightbox-vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
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

const { t } = useI18n();
const formatBadge = (badge) => {
  if (!badge) return '';
  const parts = String(badge).split(' ');
  if (parts.length > 1 && !isNaN(Number(parts[0]))) {
    const num = parts.shift();
    const key = parts.join(' ');
    return `${num} ${t(key)}`;
  }
  return t(badge);
};

// Swiper Modules
const modules = [Navigation, Pagination];
const toggler = ref(false);
</script>
