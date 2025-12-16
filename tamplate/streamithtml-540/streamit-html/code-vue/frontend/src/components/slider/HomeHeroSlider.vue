<template>
  <div class="overflow-hidden">
    <Swiper
      v-if="render"
      id="home-banner-slider"
      tag="section"
      :dir="rtl"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
      }"
      :navigation="{
        prevEl: '#home-banner-slider-prev',
        nextEl: '#home-banner-slider-next',
      }"
      class="wrapper-class iq-main-slider p-0 m-0 banner-home-swiper"
      :modules="modules"
      :loop="true"
    >
      <SwiperSlide
        v-for="item in mainHome"
        :key="item.id"
        class="slide s-bg-1 p-0"
      >
        <div
          class="banner-home-swiper-image"
          :style="{ backgroundImage: `url(${item.bgImage})` }"
        >
          <b-container fluid class="position-relative">
            <b-row class="align-items-center iq-ltr-direction h-100 slider-content-full-height">
              <b-col lg="6" md="12" xl="5">
                <!-- Title -->
                <h2 class="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate">
                  {{ $t(item.title) }}
                </h2>

                <!-- Rating / Info Row -->
                <div class="d-flex flex-wrap align-items-center gap-3 r-mb-23 RightAnimate-two">
                  <div class="slider-ratting d-flex align-items-center">
                    <ul class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                      <li v-for="n in 4" :key="n">
                        <i class="ph-fill ph-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="ph-fill ph-star-half" aria-hidden="true"></i>
                      </li>
                    </ul>
                  </div>
                  <span class="d-flex align-items-center gap-1">
                    <span>{{ item.imdb }}</span>
                    <img
                      :src="generateImgPath('/assets/images/pages/imdb-logo.svg')"
                      alt="imdb logo"
                      class="img-fluid imdb-img"
                    />
                  </span>
                  <span class="badge rounded-2 text-white bg-secondary font-size-12">
                    {{ item.badge }}
                  </span>
                  <div class="d-flex align-items-center gap-1" v-if="item.duration">
                    <i class="ph ph-clock"></i>
                    <span class="time">{{ item.duration }}</span>
                  </div>
                </div>

                <!-- Description -->
                <p class="line-count-3 my-3 RightAnimate-two">
                  {{ $t(item.description) }}
                </p>

                <!-- Cast / Genres / Tags -->
                <div class="trending-list RightAnimate-three">
                  <div
                    v-if="item.cast.length"
                    class="text-primary genres font-size-14 mb-1"
                  >
                    {{ $t('sectionTitle.starring') }}:
                    <span
                      v-for="(actor, idx) in item.cast"
                      :key="idx"
                    >
                      <router-link
                        :to="{ name: 'landing-page.view-all' }"
                        class="fw-normal text-decoration-none text-body"
                      >
                        {{ $t(actor) }}
                      </router-link><span class="text-body" v-if="idx < item.cast.length - 1">, </span>
                    </span>
                  </div>

                  <div
                    v-if="item.genres.length"
                    class="text-primary genres font-size-14 mb-1"
                  >
                    {{ $t('streamGenres.genre') }}:
                    <span
                      v-for="(genre, idx) in item.genres"
                      :key="idx"
                    >
                      <router-link
                        :to="{ name: 'landing-page.view-all' }"
                        class="fw-normal text-decoration-none text-body"
                      >
                        {{ $t(genre) }}
                      </router-link><span class="text-body" v-if="idx < item.genres.length - 1">, </span>
                    </span>
                  </div>

                  <div
                    v-if="item.tags.length"
                    class="text-primary tag font-size-14"
                  >
                    {{ $t('streamTag.tags') }}:
                    <span
                      v-for="(tag, idx) in item.tags"
                      :key="idx"
                    >
                      <router-link
                        :to="{ name: 'landing-page.view-all' }"
                        class="fw-normal text-decoration-none text-body"
                      >
                        {{ $t(tag) }}
                      </router-link><span class="text-body" v-if="idx < item.tags.length - 1">, </span>
                    </span>
                  </div>
                </div>

                <!-- Button -->
                <div class="RightAnimate-four">
                  <CustomButton
                    :button-title="$t('streamButtons.play_now')"
                    :link="{ path: '/movies-detail' }"
                  />
                </div>
              </b-col>

              <!-- Trailer video section -->
              <b-col xl="7" lg="6" md="12" class="trailor-video iq-slider d-none d-lg-block">
                <a href="#" class="video-open playbtn text-decoration-none" tabindex="0" @click.prevent="toggler = !toggler">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="80px"
                    height="80px"
                    viewBox="0 0 213.7 213.7"
                    xml:space="preserve"
                  >
                    <polygon
                      class="triangle"
                      fill="none"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      points="73.5,62.5 148.5,105.8 73.5,149.1 "
                    ></polygon>
                    <circle
                      class="circle"
                      fill="none"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      cx="106.8"
                      cy="106.8"
                      r="103.3"
                    ></circle>
                  </svg>
                  <span class="w-trailor text-uppercase">{{ $t('streamButtons.watch_trailer') }}</span>
                </a>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </SwiperSlide>
        <FsLightbox :toggler="toggler" :sources="[generateImgPath('/assets/images/video/trailer.mp4')]" />
        <button id="home-banner-slider-prev" class="PreArrow-two swiper-arrows d-flex align-items-center justify-content-center d-xl-block d-none">
          <i class="ph ph-caret-left"></i>
        </button>
        <button id="home-banner-slider-next" class="NextArrow-two swiper-arrows d-flex align-items-center justify-content-center d-xl-block d-none">
          <i class="ph ph-caret-right"></i>
        </button>
        <div class="swiper-pagination d-block d-lg-none"></div>
    </Swiper>
  </div>
</template>
<script setup>
// component
import CustomButton from '../CustomButton.vue';
import { mainHome } from '../../StaticData/data';
// plugins
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
const modules = [Navigation, Pagination];
const toggler = ref(false);
</script>
