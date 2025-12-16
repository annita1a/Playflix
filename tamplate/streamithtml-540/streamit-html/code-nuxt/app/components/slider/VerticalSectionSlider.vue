<template>
  <div class="verticle-slider section-padding-bottom">
    <div :class="containerFluid ? 'container-fluid' : null">
      <div class="slider">
        <div class="slider-flex position-relative">
          <div class="slider--col position-relative">
            <div class="vertical-slider-prev swiper-button" tabindex="0" role="button" aria-label="Previous slide"
              aria-controls="swiper-wrapper-b130b4e10e1468117">
              <i class="iconly-Arrow-Up-2 icli"></i>
            </div>
            <div class="slider-thumbs" data-swiper="slider-thumbs">
              <div class="swiper-container" data-swiper="slider-thumbs-inner">
                <swiper v-if="render" ref="swiperRef" :dir="rtl" :space-between="24" :slides-per-view="3" :navigation="{
                  nextEl: '.vertical-slider-next',
                  prevEl: '.vertical-slider-prev',
                }" :loop="true" :thumbs="{ swiper: thumbsSwiper }" :centered-slides="true"
                  :watch-slides-progress="true" :modules="modules" :direction="'vertical'"
                  class="swiper-wrapper top-ten-slider-nav" @swiper="onSwiper">
                  <SwiperSlide v-for="(data, index) in sliderData" :key="data" tag="li" class="swiper-slide swiper-bg"
                    @click="() => slideToCenter(index)">
                    <div v-if="HomePageSlider !== true" class="block-images position-relative ">
                      <div class="img-box slider--image">
                        <img :src="data.image" class="w-100 rounded-3" alt="" loading="lazy">
                      </div>
                      <div class="block-description">
                        <h6 class="iq-title">{{ $t(data.title) }}</h6>
                        <div class="movie-time d-flex align-items-center my-2">
                          <div class="d-flex align-items-center gap-1 font-size-12">
                            <i class="ph ph-clock "></i>
                            <span class="text-body">{{ (data.time) }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </swiper>
                <div class="slider-next btn-verticle"><i class="ri-arrow-down-s-line vertical-aerrow"></i></div>
              </div>
            </div>
            <div class="vertical-slider-next swiper-button" tabindex="0" role="button" aria-label="Next slide"
              aria-controls="swiper-wrapper-b130b4e10e1468117"><i class="iconly-Arrow-Down-2 icli"></i></div>
          </div>
          <div class="slider-images" data-swiper="slider-images">
            <swiper :loop="true" :space-between="10" :modules="modules" :effect="'fade'"
              :breakpoints="{ '640': { direction: 'horizontal' } }" class="swiper-container mb-0"
              @swiper="setThumbsSwiper">
              <SwiperSlide v-for="data in sliderData" :key="data" tag="li" class="swiper-slide">
                <div class="slider--image block-images"><img :src="data.image" loading="lazy" alt="" /></div>
                <div class="description">
                  <div class="block-description">
                    <ul
                      class="ps-0 mb-2 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag justify-content-center justify-content-lg-start genres-list gap-1 gap-sm-0">
                      <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                        <nuxt-link :to="{ name: 'view-all' }" class="text-decoration-none">{{ $t(data.geners)
                          }}</nuxt-link>
                      </li>
                      <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                        <nuxt-link :to="{ name: 'view-all' }" class="text-decoration-none">{{ $t(data.geners1)
                          }}</nuxt-link>
                      </li>
                      <li class="position-relative text-capitalize font-size-14 letter-spacing-1">
                        <nuxt-link :to="{ name: 'view-all' }" class="text-decoration-none">{{ $t(data.geners2)
                          }}</nuxt-link>
                      </li>
                      <li v-if="data.geners3" class="position-relative text-capitalize font-size-14 letter-spacing-1">
                        <nuxt-link :to="{ name: 'view-all' }" class="text-decoration-none">{{ $t(data.geners3)
                          }}</nuxt-link>
                      </li>
                      <li v-if="data.geners4"class="position-relative text-capitalize font-size-14 letter-spacing-1">
                        <nuxt-link :to="{ name: 'view-all' }" class="text-decoration-none">{{ $t(data.geners4)
                          }}</nuxt-link>
                      </li>
                    </ul>
                    <h2 class="iq-title m-0 line-count-2">
                      <nuxt-link :to="{name: 'tv-shows-detail'}">{{ $t(data.title) }}</nuxt-link>
                    </h2>
                    <div
                      class="d-flex align-items-center gap-3 py-2 justify-content-center justify-content-lg-start flex-wrap">
                      <div class="slider-ratting d-flex align-items-center gap-1">
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
                            <i class="ph-fill ph-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="ph-fill ph-star" aria-hidden="true"></i>
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex align-items-center gap-1">
                        <p class="mb-0">{{ data.rating }}</p>
                        <img class="imdb-img" alt="imdb-logo" src="/assets/images/pages/imdb-logo.svg" />
                      </div>
                      <div class="d-flex align-items-center gap-1">
                        <i class="ph ph-clock font-size-14"></i>
                        <span class="text-body">{{ data.time }}</span>
                      </div>
                    </div>
                    <p class="mt-2 mb-3 line-count-3">{{ $t(data.description) }}</p>
                    <custom-button :button-title="$t('streamButtons.play_now')" :link="{name: 'index'}"></custom-button>
                  </div>
                </div>
              </SwiperSlide>
              <div class="d-block d-lg-none">
                <div class="swiper-button swiper-button-next"></div>
                <div class="swiper-button swiper-button-prev"></div>
              </div>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import CustomButton from '../CustomButton.vue';
import { Navigation, Pagination, Thumbs, EffectFade } from 'swiper';
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

defineProps({
  sliderData: { type: Array, default: () => [] },
  containerFluid: { type: String, default: '' },
  // eslint-disable-next-line vue/prop-name-casing
  HomePageSlider: { type: Boolean, default: false }
});

const modules = [Navigation, Pagination, Thumbs, EffectFade];

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const swiperRef = ref(null);
let swiperInstance = null;

const onSwiper = (swiper) => {
  swiperInstance = swiper;
};

const slideToCenter = (index) => {
  if (swiperInstance) {
    swiperInstance.slideToLoop(index);
  }
};
</script>