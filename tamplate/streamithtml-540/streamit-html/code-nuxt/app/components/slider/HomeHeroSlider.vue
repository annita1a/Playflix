<template>
  <div class="overflow-hidden">
    <Swiper v-if="render" id="home-banner-slider" tag="section" :dir="rtl" :pagination="{
      el: '.swiper-pagination',
      clickable: true,
    }" :navigation="{
        prevEl: '#home-banner-slider-prev',
        nextEl: '#home-banner-slider-next',
      }" class="wrapper-class iq-main-slider p-0 banner-home-swiper" :modules="modules" :loop="true">
      <SwiperSlide class="slide s-bg-1 p-0">
        <div class="banner-home-swiper-image" style="background-image: url('/assets/images/media/krishna.webp')">
          <b-container fluid class="position-relative">
            <b-row class="align-items-center iq-ltr-direction h-100 slider-content-full-height">
              <b-col lg="6" md="12" xl="5">
                <h2 class="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate">
                  {{ $t("streamMovies.krishna") }}
                </h2>
                <div class="d-flex flex-wrap align-items-center gap-3 r-mb-23 RightAnimate-two">
                  <div class="slider-ratting d-flex align-items-center">
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
                        <i class="ph-fill ph-star-half" aria-hidden="true"></i>
                      </li>
                    </ul>
                  </div>
                  <span class="d-flex align-items-center gap-1">
                    <span>5</span><img src="/assets/images/pages/imdb-logo.svg" alt="imdb logo"
                      class="img-fluid imdb-img" />
                  </span>
                  <span class="badge rounded-2 text-white bg-secondary font-size-12">NC-17</span>
                  <div class="d-flex align-items-center gap-1">
                    <i class="ph ph-clock"></i>
                    <span class="time">2h : 45m</span>
                  </div>
                </div>
                <p class="line-count-3 my-3 RightAnimate-two">
                  {{ $t("streamMovies.krishna_desc") }}
                </p>
                <div class="trending-list RightAnimate-three">
                  <div class="text-primary genres font-size-14 mb-1">
                    {{ $t("sectionTitle.starring") }}:
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">{{
                      $t("favouritePersonalities.olivia_foster") }},
                    </nuxt-link>{{ '' }}
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">{{
                      $t("favouritePersonalities.Leena_Burton") }},
                    </nuxt-link>{{ '' }}
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">{{
                      $t("favouritePersonalities.Ryan_Pierce") }}
                    </nuxt-link>
                  </div>
                  <div class="text-primary genres font-size-14 mb-1">
                    {{ $t("streamGenres.genre") }}:
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.action") }},
                    </nuxt-link>{{ '' }}
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.animation") }},
                    </nuxt-link>{{ '' }}
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.mystery") }}
                    </nuxt-link>
                  </div>
                  <div class="text-primary tag font-size-14">
                    {{ $t("streamTag.tags") }}:
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.action") }},
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.adventure") }},
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.horror") }}
                    </nuxt-link>
                  </div>
                </div>
                <div class="RightAnimate-four">
                  <CustomButton :button-title="$t('streamButtons.play_now')" :link="{ name: 'movies-detail' }">
                  </CustomButton>
                </div>
              </b-col>
              <b-col xl="7" lg="6" md="12" class="trailor-video iq-slider d-none d-lg-block">
                <VideoPop :isPopupStyle="true"
                videoLinkUrl="https://www.youtube.com/embed/_PhvjbegfBI?autoplay=1&mute=1&loop=1&playlist=_PhvjbegfBI" />
              </b-col>
            </b-row>
          </b-container>
        </div>
      </SwiperSlide>
      <SwiperSlide class="slide s-bg-1 p-0">
        <div class="banner-home-swiper-image" style="background-image: url('/assets/images/media/breaking-bad.webp')">
          <b-container fluid class="position-relative">
            <b-row class="align-items-center iq-ltr-direction h-100 slider-content-full-height">
              <b-col lg="6" md="12" xl="5">
                <h2 class="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate">
                  {{ $t("streamMovies.breaking_bad") }}
                </h2>
                <div class="d-flex flex-wrap align-items-center gap-3 r-mb-23 RightAnimate-two">
                  <div class="slider-ratting d-flex align-items-center">
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
                        <i class="ph-fill ph-star-half" aria-hidden="true"></i>
                      </li>
                    </ul>
                  </div>
                  <span class="d-flex align-items-center gap-1">
                    <span>6</span>
                    <img src="/assets/images/pages/imdb-logo.svg" alt="imdb logo" class="img-fluid imdb-img" />
                  </span>
                  <div class="d-flex align-items-center gap-1">
                    <span class="time"> 3 {{$t('streamEpisode.season')}} </span>
                  </div>
                </div>
                <p class="line-count-3 my-3 RightAnimate-two">
                  {{ $t("streamMovies.breaking_bad_desc") }}
                </p>
                <div class="trending-list RightAnimate-three">
                  <div class="text-primary genres font-size-14 mb-1">
                    {{ $t("sectionTitle.starring") }}:
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">{{
                      $t("favouritePersonalities.Leena_Burton") }},
                    </nuxt-link>{{ '' }}
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">{{
                      $t("favouritePersonalities.michael_fox") }},
                    </nuxt-link>{{ '' }}
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">{{
                      $t("favouritePersonalities.maxwell_carter") }}
                    </nuxt-link>
                  </div>
                  <div class="text-primary genres font-size-14 mb-1">
                    {{ $t("streamGenres.genre") }}:
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.action") }},
                    </nuxt-link>{{ '' }}
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.animation") }},
                    </nuxt-link>{{ '' }}
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.crime") }}
                    </nuxt-link>
                  </div>
                  <div class="text-primary tag font-size-14">
                    {{ $t("streamTag.tags") }}:
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.brother") }},
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.cricket") }},
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.detective") }}
                    </nuxt-link>
                  </div>
                </div>
                <div class="RightAnimate-four">
                  <CustomButton :button-title="$t('streamButtons.play_now')" :link="{ name: 'movies-detail' }">
                  </CustomButton>
                </div>
              </b-col>
              <b-col xl="7" lg="6" md="12" class="trailor-video iq-slider d-none d-lg-block">
                <VideoPop :isPopupStyle="true"
                videoLinkUrl="https://www.youtube.com/embed/_PhvjbegfBI?autoplay=1&mute=1&loop=1&playlist=_PhvjbegfBI" />
              </b-col>
            </b-row>
          </b-container>
        </div>
      </SwiperSlide>
      <SwiperSlide class="slide s-bg-1 p-0">
        <div class="banner-home-swiper-image" style="background-image: url('/assets/images/media/charlie-chaplin.webp')">
          <b-container fluid class="position-relative">
            <b-row class="align-items-center iq-ltr-direction h-100 slider-content-full-height">
              <b-col lg="6" md="12" xl="5">
                <h2 class="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate">
                  {{ $t("streamMovies.charliechaplin") }}
                </h2>
                <div class="d-flex flex-wrap align-items-center gap-3 r-mb-23 RightAnimate-two">
                  <div class="slider-ratting d-flex align-items-center">
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
                        <i class="ph-fill ph-star-half" aria-hidden="true"></i>
                      </li>
                    </ul>
                  </div>
                  <span class="d-flex align-items-center gap-1">
                    <span>247</span>
                    <img src="/assets/images/pages/imdb-logo.svg" alt="imdb logo" class="img-fluid imdb-img" />
                  </span>
                  <span class="badge rounded-2 text-white bg-secondary font-size-12">80</span>
                </div>
                <p class="line-count-3 my-3 RightAnimate-two">
                  {{ $t("streamMovies.charliechaplin_desc") }}
                </p>
                <div class="trending-list RightAnimate-three">
                  <div class="text-primary genres font-size-14 mb-1">
                    {{ $t("streamGenres.genre") }}:
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.action") }}
                    </nuxt-link>
                  </div>
                  <div class="text-primary tag font-size-14">
                    {{ $t("streamTag.tags") }}:
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.action") }},
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.adventure") }},
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'view-all' }" class="fw-normal text-decoration-none text-body">
                      {{ $t("streamTag.horror") }}
                    </nuxt-link>
                  </div>
                </div>
                <div class="RightAnimate-four">
                  <CustomButton :button-title="$t('streamButtons.play_now')" :link="{ name: 'movies-detail' }">
                  </CustomButton>
                </div>
              </b-col>
              <b-col xl="7" lg="6" md="12" class="trailor-video iq-slider d-none d-lg-block">
                <VideoPop :isPopupStyle="true"
                videoLinkUrl="https://www.youtube.com/embed/_PhvjbegfBI?autoplay=1&mute=1&loop=1&playlist=_PhvjbegfBI" />
              </b-col>
            </b-row>
          </b-container>
        </div>
      </SwiperSlide>
      <button id="home-banner-slider-prev"
        class="PreArrow-two swiper-arrows d-flex align-items-center justify-content-center d-xl-block d-none">
        <i class="ph ph-caret-left"></i>
      </button>
      <button id="home-banner-slider-next"
        class="NextArrow-two swiper-arrows d-flex align-items-center justify-content-center d-xl-block d-none">
        <i class="ph ph-caret-right"></i>
      </button>
      <div class="swiper-pagination d-block d-lg-none"></div>
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
        <symbol id="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44px" height="44px"
          fill="none" stroke="currentColor">
          <circle id="test" r="20" cy="22" cx="22"></circle>
        </symbol>
      </svg>
    </Swiper>
  </div>
</template>
<script setup>
// import { onMounted } from 'vue';
// component
import CustomButton from "../CustomButton.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from 'swiper';
import { ref, computed, watch } from "vue";
import { useSetting } from "../../store/setting/index";
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

const modules = [Navigation, Pagination];

const toggler = ref(false)
const slide = ref(1)

const togglerVideo = (index) => {
    slide.value = index
    toggler.value = !toggler.value
}
</script>
