<template>
  <section class="tranding-tab-slider section-padding">
    <b-container fluid>
      <b-row class="m-0 p-0">
        <div id="iq-trending" class="s-margin iq-tvshow-tabs iq-trending-tabs overflow-hidden">
          <div class="d-flex align-items-center justify-content-between px-1">
            <h4 class="main-title text-capitalize mb-0 fw-medium">{{ $t('streamKeyword.trending') }}</h4>
          </div>
          <div class="trending-contens position-relative">
            <Swiper v-if="render && thumbsSwiper" :key="`top-${rtl}`" id="gallery-top" :dir="rtl" :loop="true" :slides-per-view="5" :modules="modules"
              :touch-ratio="0.2" :slide-to-clicked-slide="true" :centered-slides="true" :breakpoints="{
                0: { slidesPerView: 3, spaceBetween: 0 },
                576: { slidesPerView: 3, spaceBetween: 0 },
                768: { slidesPerView: 3, spaceBetween: 0 },
                820: { slidesPerView: 3, spaceBetween: 0 },
                1025: { slidesPerView: 5, spaceBetween: 0 },
                1500: { slidesPerView: 5, spaceBetween: 0 },
              }" class="list-inline trending-slider-nav gallery-thumbs wrapper-class custom-swiper-wraper"
              :thumbs="{ swiper: thumbsSwiper }">
              <SwiperSlide v-for="data in trendingSlider" :key="data" tag="li" class="swiper-slide">
                <nuxt-link to="#">
                  <div class="movie-swiper position-relative">
                    <img :src="data.image" alt="" loading="lazy" />
                  </div>
                </nuxt-link>
              </SwiperSlide>
            </Swiper>
            <Swiper v-if="render" :key="`bottom-${rtl}`" id="gallery-bottom" :dir="rtl" :modules="modules" :space-between="0" effect="fade"
              :loop="true" :slides-per-view="1" :navigation="{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }"
              class="wrapper-class trending-tab-slider swiper-no-swiping list-inline d-flex align-items-center trending-slider trending-tab-slider swiper-no-swiping"
              @swiper="setThumbsSwiper">
              <SwiperSlide v-for="data in trendingSlider" :key="data.id" tag="li" :trending-slider-class="data.trendingSliderClass">
                <div class="trending-tab-slider-image">
                  <img :src="data.image" alt="trending-tab-slider-image" loading="lazy" />
                </div>
                <div class="tranding-block position-relative">
                  <div class="trending-custom-tab">
                    <div class="tab-title-info position-relative">
                      <b-tabs class="trending-custom-tab" content-class="trending-content" pills
                        nav-class="trending-pills iq-custom-tab flex-nowrap d-flex nav nav-pills justify-content-md-center align-items-center text-center list-inline">
                        <b-tab :title="$t('streamKeyword.overview')" active>
                          <div class="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                            <h1 class="trending-text big-title text-capitalize texture-text">{{ $t(data.title) }}</h1>
                            <div
                              class="d-flex align-items-start align-items-md-center text-white text-detail flex-wrap gap-1 gap-md-3 flex-column flex-md-row">
                              <span>{{ data.seasons }} {{ $t('streamEpisode.season') }}</span>
                              <div class="d-flex align-items-center gap-1">
                                <i class="ph ph-calendar-dots"></i>
                                <span class="trending-year"> {{ data.year }}</span>
                              </div>
                            </div>
                            <div class="d-flex align-items-center flex-wrap series mb-4 gap-3">
                              <nuxt-link to="#"><img :src="data.labelImg" class="img-fluid trending-label-img rounded-3"
                                  alt="" loading="lazy" /></nuxt-link>
                              <span class="fw-bold">#{{ data.rank }} {{ $t('streamMovies.series_today') }}</span>
                            </div>
                            <p class="trending-dec line-count-4">{{ $t(data.description) }}</p>
                            <div class="p-btns">
                              <div class="iq-button">
                                <nuxt-link :to="data.playLink"
                                  class="btn text-uppercase position-relative btn-primary rounded-3">
                                  <div class="d-flex align-items-center gap-2">
                                    <span class="button-text">{{ $t('streamButtons.play_now') }}</span>
                                    <i class="ph-fill ph-play"></i>
                                  </div>
                                </nuxt-link>
                              </div>
                            </div>
                          </div>
                        </b-tab>
                        <b-tab :title="$t('streamKeyword.episodes')">
                          <div class="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                            <h1 class="trending-text big-title text-capitalize texture-text">{{ $t(data.title) }}</h1>
                            <div class="d-flex align-items-center text-white text-detail flex-wrap mb-4 gap-3">
                              <span class="season_date"> {{ data.episodesTab.seasons }} {{ $t('streamEpisode.season') }}
                              </span>
                              <div class="d-flex align-items-center gap-1">
                                <i class="ph ph-calendar-dots"></i>
                                <span class="trending-year">{{ data.episodesTab.year }}</span>
                              </div>
                            </div>
                            <div class="iq-custom-select d-inline-block sea-epi mb-4">
                              <select ref="selectElement1" class="form-control movie-select" :tabindex="tabindex">
                                <option v-for="season in data.episodesTab.seasonOptions" :key="season" :value="season">
                                  {{ $t('streamEpisode.season') }} {{ season }}</option>
                              </select>
                            </div>
                            <div class="position-relative swiper swiper-card streamit-block">
                              <Swiper v-if="render" :dir="rtl" tag="ul" class="p-0 swiper-wrapper m-0 list-inline"
                                :slides-per-view="4" :breakpoints="{
                                  0: { slidesPerView: 1, spaceBetween: 0 },
                                  576: { slidesPerView: 2, spaceBetween: 0 },
                                  768: { slidesPerView: 2, spaceBetween: 0 },
                                  820: { slidesPerView: 3, spaceBetween: 0 },
                                  1025: { slidesPerView: 4, spaceBetween: 0 },
                                  1500: { slidesPerView: 4, spaceBetween: 0 },
                                }">
                                <SwiperSlide v-for="(ep, index) in data.episodesTab.episodes" :key="index" tag="li"
                                  class="swiper-slide">
                                  <episode-card :id="ep.id" :episode-number="(data.episodesTab.episodes.length - index).toString().padStart(2, '0')" :show-img="ep.showImg"
                                    :episod-time="ep.episodTime" :episode-titles="true"
                                    :episode-titles-text="$t(ep.episodeTitlesText)" :episode-detail="true"
                                    :episode-detail-text="$t(ep.episodeDetailText)" />
                                </SwiperSlide>
                                <div class="swiper-pagination d-block"></div>
                              </Swiper>
                            </div>
                          </div>
                        </b-tab>
                        <b-tab :title="$t('streamKeyword.trailers')">
                          <div
                            class="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction text-center">
                            <h3 class="trending-text big-title text-uppercase texture-text mt-2">
                              {{ $t('streamButtons.watch_trailer') }}
                            </h3>
                            <div class="episodes-contens mt-5">
                              <div class="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                <div class="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                  <img :src="data.trailerImg" class="trailer-image" alt="trailer-image"
                                    loading="lazy" />
                                  <a :href="data.trailerVideo" class="video-open playbtn text-decoration-none"
                                    tabindex="0">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px"
                                      height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7"
                                      xml:space="preserve">
                                      <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10"
                                        points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                      <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3">
                                      </circle>
                                    </svg>
                                    <span class="w-trailor text-uppercase"> {{ $t('streamButtons.watch_trailer') }} </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </b-tab>
                        <b-tab :title="$t('streamKeyword.similar_like')">
                          <div
                            class="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction">
                            <h3 class="trending-text big-title text-uppercase texture-text mb-5">
                              {{ $t('sectionTitle.recommended_for_you') }}
                            </h3>
                            <Swiper v-if="render" :dir="rtl" tag="ul"
                              class="p-0 position-relative swiper-card swiper-wrapper m-0 list-inline"
                              :slides-per-view="4">
                              <SwiperSlide v-for="(ep, index) in data.similarEpisodes" :key="index" tag="li"
                                class="swiper-slide">
                                <episode-card :id="ep.id" :episode-number="(data.similarEpisodes.length - index).toString().padStart(2, '0')" :show-img="ep.showImg"
                                  :show-episod="ep.showEpisod" :episod-date="ep.episodDate" :episod-time="ep.episodTime"
                                  :episode-titles="true" :episode-titles-text="$t(ep.episodeTitlesText)"
                                  :episode-detail="true" :episode-detail-text="$t(ep.episodeDetailText)" />
                              </SwiperSlide>
                              <div class="swiper-pagination d-block"></div>
                            </Swiper>
                          </div>
                        </b-tab>
                      </b-tabs>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div class="d-lg-none d-block">
                <div class="swiper-button swiper-button-next"></div>
                <div class="swiper-button swiper-button-prev"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </b-row>
    </b-container>
  </section>
</template>
<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue';
// Swiper Components Import
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectFade, Autoplay, Thumbs } from 'swiper';
import { generateImgPath } from '../../StaticData/data';
import EpisodeCard from '../cards/EpisodeCard.vue';
import { useSetting } from '../../store/setting/index';
import Choices from 'choices.js';
const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);
const render = ref(true);
const selectElement1 = ref([]);
const tabindex = '-1'; // Tab index

onMounted(() => {
  selectElement1.value.forEach((selectElement) => {
    new Choices(selectElement, {
      searchEnabled: true,
      shouldSort: true,
    });
  });
});

watch(
  () => rtl.value,
  async () => {
    // Destroy existing thumbs swiper (if any) to avoid stale references when switching dir
    try {
      if (thumbsSwiper.value && typeof thumbsSwiper.value.destroy === 'function') {
        thumbsSwiper.value.destroy(true, true);
      }
    } catch (e) {
      // no-op
    }
    thumbsSwiper.value = null;
    // Force full remount of all Swipers
    render.value = false;
    await nextTick();
    render.value = true;
  }
);

// Swiper Modules
const modules = [Navigation, Autoplay, EffectFade, Thumbs];
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const trendingSlider = [
  {
    id: 1,
    image: generateImgPath('/assets/images/media/pirates-ofdayones-orignal.webp'),
    title: 'streamMovies.pirates_of_day_one',
    seasons: 3,
    year: 'February 2025',
    labelImg: generateImgPath('/assets/images/pages/trending-label.webp'),
    rank: 1,
    description: 'streamMovies.game_of_heros_desc',
    playLink: { name: 'tv-shows-detail' },
    trendingSliderClass: 'slider-big-img-6',
    episodesTab: {
      seasons: 2,
      year: 'February 2025',
      seasonOptions: [1, 2, 3],
      episodes: [
        {
          id: '01',
          showImg: 'media/episode/s1e4-island-of-secrets.webp',
          showEpisod: 'S01E01',
          episodDate: 'October 1, 2022',
          episodTime: '45m',
          episodeTitlesText: 'streamEpisode.episode5',
          episodeDetailText: 'streamEpisode.episode5_desc',
        },
        {
          id: '02',
          showImg: 'media/episode/s1e3-rivals-and-revelations.webp',
          showEpisod: 'S01E02',
          episodDate: 'October 8, 2022',
          episodTime: '35m',
          episodeTitlesText: 'streamEpisode.episode4',
          episodeDetailText: 'streamEpisode.episode4_desc',
        },
        {
          id: '03',
          showImg: 'media/episode/s1e2-hidden-allies.webp',
          showEpisod: 'S01E03',
          episodDate: 'October 15, 2022',
          episodTime: '36m',
          episodeTitlesText: 'streamEpisode.episode52',
          episodeDetailText: 'streamEpisode.episode52_desc',
        },
        {
          id: '04',
          showImg: 'media/episode/s1e1-setting-sail.webp',
          showEpisod: 'S01E04',
          episodDate: 'October 22, 2022',
          episodTime: '41m',
          episodeTitlesText: 'streamEpisode.episode53',
          episodeDetailText: 'streamEpisode.episode53_desc',
        },
      ],
    },
    trailerImg: generateImgPath('/assets/images/video/trailer-poster.webp'),
    trailerVideo: '/assets/images/video/trailer.mp4',
    similarEpisodes: [
      {
        id: '06',
        showImg: 'media/episode/s2e4-tides-of-betrayal.webp',
        showEpisod: 'Seasons 1-2',
        episodDate: 'October 1, 2022',
        episodTime: '45m',
        episodeTitlesText: 'streamEpisode.episode33',
        episodeDetailText: 'streamEpisode.episode33_desc',
      },
      {
        id: '07',
        showImg: 'media/episode/s1e5-Lost-Souls.webp',
        showEpisod: 'Seasons 1-3',
        episodDate: 'October 8, 2022',
        episodTime: '35m',
        episodeTitlesText: 'streamEpisode.episode34',
        episodeDetailText: 'streamEpisode.episode34_desc',
      },
      {
        id: '08',
        showImg: 'media/episode/s3e3-cursed-waters.webp',
        showEpisod: 'Seasons 1-4',
        episodDate: 'October 15, 2022',
        episodTime: '36m',
        episodeTitlesText: 'streamEpisode.episode35',
        episodeDetailText: 'streamEpisode.episode35_desc',
      },
      {
        id: '09',
        showImg: 'media/episode/s3e1-betrayals-and-bonds.webp',
        showEpisod: 'Seasons 1-5',
        episodDate: 'October 22, 2022',
        episodTime: '41m',
        episodeTitlesText: 'streamEpisode.episode36',
        episodeDetailText: 'streamEpisode.episode36_desc',
      },
    ],
  },
  {
    id: 2,
    image: generateImgPath('/assets/images/media/the-hunter.webp'),
    title: 'streamMovies.the_hunter',
    seasons: 4,
    year: 'February 2025',
    labelImg: generateImgPath('/assets/images/pages/trending-label.webp'),
    rank: 2,
    description: 'streamMovies.game_of_heros_desc',
    playLink: { name: 'tv-shows-detail' },
    trendingSliderClass: 'slider-big-img-1 p-0',
    episodesTab: {
      seasons: 2,
      year: 'February 2025',
      seasonOptions: [1, 2, 3],
      episodes: [
        {
          id: '01',
          showImg: 'media/episode/s1e3-fire-and-bloodlines.webp',
          episodTime: '45m',
          episodeTitlesText: 'streamEpisode.episode13',
          episodeDetailText: 'streamEpisode.episode13_desc',
        },
        {
          id: '02',
          showImg: 'media/episode/s1e2-kings-and-conspiracies.webp',
          episodTime: '35m',
          episodeTitlesText: 'streamEpisode.episode38',
          episodeDetailText: 'streamEpisode.episode38_desc',
      
        },
        {
          id: '03',
          showImg: 'media/episode/s1e1-awakening-of-the-drakes.webp',
          episodTime: '36m',
          episodeTitlesText: 'streamEpisode.episode39',
          episodeDetailText: 'streamEpisode.episode39_desc',
        },
        {
          id: '04',
          showImg: 'media/episode/s1e3-fire-and-bloodlines.webp',
          episodTime: '45m',
          episodeTitlesText: 'streamEpisode.episode13',
          episodeDetailText: 'streamEpisode.episode13_desc',
        },
      ],
    },
    trailerImg: generateImgPath('/assets/images/video/trailer-poster.webp'),
    trailerVideo: '/assets/images/video/trailer.mp4',
    similarEpisodes: [
      {
        id: '06',
        showImg: 'media/episode/s4e1-rebirth-of-the-realm.webp',
        showEpisod: 'Seasons 1-2',
        episodDate: 'October 1, 2022',
        episodTime: '45m',
        episodeTitlesText: 'streamEpisode.episode40',
        episodeDetailText: 'streamEpisode.episode40_desc',
      },
      {
        id: '07',
        showImg: 'media/episode/s2e3-the-dragons-redemption.webp',
        showEpisod: 'Seasons 1-3',
        episodDate: 'October 8, 2022',
        episodTime: '35m',
        episodeTitlesText: 'streamEpisode.episode41',
        episodeDetailText: 'streamEpisode.episode41_desc',
      },
      {
        id: '08',
        showImg: 'media/episode/s4e3-the-final-dawn.webp',
        showEpisod: 'Seasons 1-4',
        episodDate: 'October 15, 2022',
        episodTime: '36m',
        episodeTitlesText: 'streamEpisode.episode42',
        episodeDetailText: 'streamEpisode.episode42_desc',
      },
      {
        id: '09',
        showImg: 'media/episode/s4e2-echoes-of-legends.webp',
        showEpisod: 'Seasons 1-5',
        episodDate: 'October 22, 2022',
        episodTime: '41m',
        episodeTitlesText: 'streamEpisode.episode43',
        episodeDetailText: 'streamEpisode.episode43_desc',
      },
    ],
  },
  {
    id: 3,
    image: generateImgPath('/assets/images/media/lost-in-space.webp'),
    title: 'streamMovies.war_for_the_planet',
    seasons: 3,
    year: 'December 2024',
    labelImg: generateImgPath('/assets/images/pages/trending-label.webp'),
    rank: 3,
    description: 'streamMovies.game_of_heros_desc',
    playLink: { name: 'tv-shows-detail' },
    trendingSliderClass: 'slider-big-img-4',
    episodesTab: {
      seasons: 2,
      year: 'December 2024',
      seasonOptions: [1, 2, 3],
      episodes: [
        {
          id: '01',
          showImg: 'media/episode/s3e1-contact.webp',
          showEpisod: 'S01E01',
          episodDate: 'October 1, 2022',
          episodTime: '45m',
          episodeTitlesText: 'streamEpisode.episode32',
          episodeDetailText: 'streamEpisode.episode32_desc',
        },
        {
          id: '02',
          showImg: 'media/episode/s1e3-shipwrecked.webp',
          showEpisod: 'S01E02',
          episodDate: 'October 8, 2022',
          episodTime: '35m',
          episodeTitlesText: 'streamEpisode.episode24',
          episodeDetailText: 'streamEpisode.episode24_desc',
        },
        {
          id: '03',
          showImg: 'media/episode/s1e2-the-new-guy.webp',
          showEpisod: 'S01E03',
          episodDate: 'October 15, 2022',
          episodTime: '36m',
          episodeTitlesText: 'streamEpisode.episode25',
          episodeDetailText: 'streamEpisode.episode25_desc',
        },
        {
          id: '04',
          showImg: 'media/episode/s1e1-trust.webp',
          showEpisod: 'S01E04',
          episodDate: 'October 22, 2022',
          episodTime: '41m',
          episodeTitlesText: 'streamEpisode.episode26',
          episodeDetailText: 'streamEpisode.episode26_desc',
        },
      ],
    },
    trailerImg: generateImgPath('/assets/images/video/trailer-poster.webp'),
    trailerVideo: '/assets/images/video/trailer.mp4',
    similarEpisodes: [
      {
        id: '06',
        showImg: 'media/kung-fu-panda.webp',
        showEpisod: 'Seasons 1-2',
        episodDate: 'October 1, 2022',
        episodTime: '45m',
        episodeTitlesText: 'streamMovies.kung_fu_panda',
        episodeDetailText: 'streamMovies.kung_fu_panda_desc',
      },
      {
        id: '07',
        showImg: 'media/dinoosaur.webp',
        showEpisod: 'Seasons 1-3',
        episodDate: 'October 8, 2022',
        episodTime: '35m',
        episodeTitlesText: 'streamMovies.dinoosaur',
        episodeDetailText: 'streamMovies.dinoosaur_desc',
      },
      {
        id: '08',
        showImg: 'media/arrival.webp',
        showEpisod: 'Seasons 1-4',
        episodDate: 'October 15, 2022',
        episodTime: '36m',
        episodeTitlesText: 'streamMovies.jumanji',
        episodeDetailText: 'streamMovies.jumanji_desc',
      },
      {
        id: '09',
        showImg: 'media/venom.webp',
        showEpisod: 'Seasons 1-5',
        episodDate: 'October 22, 2022',
        episodTime: '41m',
        episodeTitlesText: 'streamMovies.venom',
        episodeDetailText: 'streamMovies.venom_desc',
      },
    ],
  },
  {
    id: 4,
    image: generateImgPath('/assets/images/media/castle-rock.webp'),
    title: 'streamMovies.castle_rock',
    seasons: 3,
    year: 'December 2024',
    labelImg: generateImgPath('/assets/images/pages/trending-label.webp'),
    rank: 4,
    description: 'streamMovies.castle_rock_desc',
    playLink: { name: 'tv-shows-detail' },
    trendingSliderClass: 'slider-big-img-2',
    episodesTab: {
      seasons: 2,
      year: 'December 2024',
      seasonOptions: [1, 2, 3],
      episodes: [
        {
          id: '01',
          showImg: 'media/episode/s1e4-the-box.webp',
          episodTime: '30m',
          episodeTitlesText: 'streamEpisode.episode44',
          episodeDetailText: 'streamEpisode.episode44_desc',
        },
        {
          id: '02',
          showImg: 'media/episode/s1e3-local-color.webp',
          episodTime: '50m',
          episodeTitlesText: 'streamEpisode.episode45',
          episodeDetailText: 'streamEpisode.episode45_desc',
        },
        {
          id: '03',
          showImg: 'media/episode/s1e2-habeas-corpus.webp',
          episodTime: '32m',
          episodeTitlesText: 'streamEpisode.episode46',
          episodeDetailText: 'streamEpisode.episode46_desc',
        },
        {
          id: '04',
          showImg: 'media/episode/s1e1-recap-severance.webp',
          episodTime: '41m',
          episodeTitlesText: 'streamEpisode.episode47',
          episodeDetailText: 'streamEpisode.episode47_desc',
        },
      ],
    },
    trailerImg: generateImgPath('/assets/images/video/trailer-poster.webp'),
    trailerVideo: '/assets/images/video/trailer.mp4',
    similarEpisodes: [
      {
        id: '06',
        showImg: 'media/episode/s2e2-filter.webp',
        showEpisod: 'Seasons 1-2',
        episodDate: 'October 1, 2022',
        episodTime: '45m',
        episodeTitlesText: 'streamEpisode.episode48',
        episodeDetailText: 'streamEpisode.episode48_desc',
      },
      {
        id: '07',
        showImg: 'media/episode/s3e1-sunset.webp',
        showEpisod: 'Seasons 1-3',
        episodDate: 'October 8, 2022',
        episodTime: '35m',
        episodeTitlesText: 'streamEpisode.episode49',
        episodeDetailText: 'streamEpisode.episode49_desc',
      },
      {
        id: '08',
        showImg: 'media/episode/s2e1-the-harvest.webp',
        showEpisod: 'Seasons 1-4',
        episodDate: 'October 15, 2022',
        episodTime: '36m',
        episodeTitlesText: 'streamEpisode.episode50',
        episodeDetailText: 'streamEpisode.episode50_desc',
      },
      {
        id: '09',
        showImg: 'media/episode/s1e3-local-color.webp',
        showEpisod: 'Seasons 1-5',
        episodDate: 'October 22, 2022',
        episodTime: '41m',
        episodeTitlesText: 'streamEpisode.episode51',
        episodeDetailText: 'streamEpisode.episode51_desc',
      },
    ],
  },
  {
    id: 5,
    image: generateImgPath('/assets/images/media/assassins-creed.webp'),
    title: 'streamMovies.assassins_creed',
    seasons: 2,
    year: 'February 2025',
    labelImg: generateImgPath('/assets/images/pages/trending-label.webp'),
    rank: 5,
    description: 'streamMovies.game_of_heros_desc',
    playLink: { name: 'tv-shows-detail' },
    trendingSliderClass: 'slider-big-img-3',
    episodesTab: {
      seasons: 2,
      year: 'February 2025',
      seasonOptions: [1, 2, 3],
      episodes: [
        {
          id: '01',
          showImg: 'media/episode/s1e3-rivals-and-revelations.webp',
          showEpisod: 'S01E01',
          episodDate: 'October 1, 2022',
          episodTime: '45m',
          episodeTitlesText: 'streamEpisode.episode4',
          episodeDetailText: 'streamEpisode.episode4_desc',
        },
        {
          id: '02',
          showImg: 'media/episode/s1e2-hidden-allies.webp',
          showEpisod: 'S01E02',
          episodDate: 'October 8, 2022',
          episodTime: '35m',
          episodeTitlesText: 'streamEpisode.episode3',
          episodeDetailText: 'streamEpisode.episode3_desc',
        },
        {
          id: '03',
          showImg: 'media/episode/s1e1-setting-sail.webp',
          showEpisod: 'S01E03',
          episodDate: 'October 15, 2022',
          episodTime: '36m',
          episodeTitlesText: 'streamEpisode.episode2',
          episodeDetailText: 'streamEpisode.episode2_desc',
        },
        {
          id: '04',
          showImg: 'media/episode/s1e1-setting-sail.webp',
          showEpisod: 'S01E04',
          episodDate: 'October 22, 2022',
          episodTime: '41m',
          episodeTitlesText: 'streamEpisode.episode4',
          episodeDetailText: 'streamEpisode.episode4_desc',
        },
      ],
    },
    trailerImg: generateImgPath('/assets/images/video/trailer-poster.webp'),
    trailerVideo: '/assets/images/video/trailer.mp4',
    similarEpisodes: [
      {
        id: '06',
        showImg: 'media/episode/s1e3-rivals-and-revelations.webp',
        showEpisod: 'Seasons 1-2',
        episodDate: 'October 1, 2022',
        episodTime: '45m',
        episodeTitlesText: 'streamEpisode.episode54',
        episodeDetailText: 'streamEpisode.episode54_desc',
      },
      {
        id: '07',
        showImg: 'media/episode/s1e2-hidden-allies.webp',
        showEpisod: 'Seasons 1-3',
        episodDate: 'October 8, 2022',
        episodTime: '35m',
        episodeTitlesText: 'streamEpisode.episode55',
        episodeDetailText: 'streamEpisode.episode55_desc',
      },
      {
        id: '08',
        showImg: 'media/episode/s1e1-setting-sail.webp',
        showEpisod: 'Seasons 1-4',
        episodDate: 'October 15, 2022',
        episodTime: '36m',
        episodeTitlesText: 'streamEpisode.episode56',
        episodeDetailText: 'streamEpisode.episode56_desc',
      },
      {
        id: '09',
        showImg: 'media/episode/s1e3-rivals-and-revelations.webp',
        showEpisod: 'Seasons 1-5',
        episodDate: 'October 22, 2022',
        episodTime: '41m',
        episodeTitlesText: 'streamEpisode.episode57',
        episodeDetailText: 'streamEpisode.episode57_desc',
      },
    ],
  },
  {
    id: 6,
    image: generateImgPath('/assets/images/media/vikings.webp'),
    title: 'streamMovies.vikings',
    seasons: 2,
    year: 'January 2025',
    labelImg: generateImgPath('/assets/images/pages/trending-label.webp'),
    rank: 6,
    description: 'streamMovies.game_of_heros_desc',
    playLink: { name: 'tv-shows-detail' },
    trendingSliderClass: 'slider-big-img-5',
    episodesTab: {
      seasons: 2,
      year: 'January 2025',
      seasonOptions: [1, 2, 3],
      episodes: [
        {
          id: '01',
          showImg: 'media/episode/s1e5-Lost-Souls.webp',
          episodTime: '45m',
          episodeTitlesText: 'streamEpisode.episode58',
          episodeDetailText: 'streamEpisode.episode58_desc',
        },
        {
          id: '02',
          showImg: 'media/episode/s1e4-the-signal.webp',
          episodTime: '35m',
          episodeTitlesText: 'streamEpisode.episode59',
          episodeDetailText: 'streamEpisode.episode59_desc',
        },
        {
          id: '03',
          showImg: 'media/episode/s1e3-All-Change.webp',
          episodTime: '36m',
          episodeTitlesText: 'streamEpisode.episode66',
          episodeDetailText: 'streamEpisode.episode66_desc',
        },
        {
          id: '04',
          showImg: 'media/episode/s1e2-king-of-kings.webp',
          episodTime: '41m',
          episodeTitlesText: 'streamEpisode.episode60',
          episodeDetailText: 'streamEpisode.episode60_desc',
        },
      ],
    },
    trailerImg: generateImgPath('/assets/images/video/trailer-poster.webp'),
    trailerVideo: '/assets/images/video/trailer.mp4',
    similarEpisodes: [
      {
        id: '06',
        showImg: 'media/episode/s2e3-the-raft-of-the-medusa.webp',
        showEpisod: 'Seasons 1-2',
        episodDate: 'October 1, 2022',
        episodTime: '45m',
        episodeTitlesText: 'streamEpisode.episode61',
        episodeDetailText: 'streamEpisode.episode61_desc',
      },
      {
        id: '07',
        showImg: 'media/episode/s2e2-its-only-magic.webp',
        showEpisod: 'Seasons 1-3',
        episodDate: 'October 8, 2022',
        episodTime: '35m',
        episodeTitlesText: 'streamEpisode.episode62',
        episodeDetailText: 'streamEpisode.episode62_desc',
      },
      {
        id: '08',
        showImg: 'media/episode/s2e1-the-signal.webp',
        showEpisod: 'Seasons 1-4',
        episodDate: 'October 15, 2022',
        episodTime: '36m',
        episodeTitlesText: 'streamEpisode.episode63',
        episodeDetailText: 'streamEpisode.episode63_desc',
      },
      {
        id: '09',
        showImg: 'media/episode/s2e2-its-only-magic.webp',
        showEpisod: 'Seasons 1-5',
        episodDate: 'October 22, 2022',
        episodTime: '41m',
        episodeTitlesText: 'streamEpisode.episode64',
        episodeDetailText: 'streamEpisode.episode64_desc',
      },
    ],
  },
];
</script>
<style scoped>
.choices__list {
  z-index: 1000 !important;
}
</style>
