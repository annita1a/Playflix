<template>
  <section class="tranding-tab-slider section-padding">
    <b-container fluid>
      <b-row class="m-0 p-0">
        <div id="iq-trending" class="s-margin iq-tvshow-tabs iq-trending-tabs overflow-hidden">
          <div class="d-flex align-items-center justify-content-between px-1">
            <h4 class="main-title text-capitalize mb-0 fw-medium">{{ $t('streamKeyword.trending') }}</h4>
          </div>
          <div class="trending-contens position-relative">
            <!-- Top thumbnail slider -->
            <Swiper v-if="render" id="gallery-top" :dir="rtl" :loop="true" :slides-per-view="5" :modules="modules"
              :touch-ratio="0.2" :slide-to-clicked-slide="true" :centered-slides="true" :breakpoints="{
                0: { slidesPerView: 3, spaceBetween: 0 },
                576: { slidesPerView: 3, spaceBetween: 0 },
                768: { slidesPerView: 3, spaceBetween: 0 },
                820: { slidesPerView: 3, spaceBetween: 0 },
                1025: { slidesPerView: 5, spaceBetween: 0 },
                1500: { slidesPerView: 5, spaceBetween: 0 },
              }" class="list-inline trending-slider-nav gallery-thumbs wrapper-class custom-swiper-wraper"
              :thumbs="{ swiper: thumbsSwiper }">
              <SwiperSlide v-for="(data, index) in trendingSlider" :key="data.image + '-thumb'" tag="li"
                class="swiper-slide">
                <router-link :to="'#'">
                  <div class="movie-swiper position-relative">
                    <img :src="data.image" alt="img" loading="lazy" />
                  </div>
                </router-link>
              </SwiperSlide>
            </Swiper>
            <Swiper v-if="render" id="gallery-bottom" :dir="rtl" :modules="modules" :space-between="0" effect="fade"
              :loop="true" :slides-per-view="1" :navigation="{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }"
              class="wrapper-class trending-tab-slider swiper-no-swiping list-inline d-flex align-items-center trending-slider trending-tab-slider swiper-no-swiping"
              @swiper="setThumbsSwiper">
              <SwiperSlide v-for="(data, index) in trendingSlider" :key="data.image + 'main'" tag="li"
                class="slider-big-img-1 p-0" id="tranding-product-rtl-swiper" :indexs="index"
                :tranding-data-swiper-product-slide-index="index">
                <div class="trending-tab-slider-image">
                  <img :src="data.image" alt="trending-tab-slider-image" loading="lazy" />
                </div>
                <div class="tranding-block position-relative">
                  <div class="trending-custom-tab">
                    <div class="tab-title-info position-relative">
                      <b-tabs class="trending-custom-tab" content-class="trending-content" pills
                        nav-class="trending-pills iq-custom-tab flex-nowrap d-flex nav nav-pills justify-content-md-center align-items-center text-center list-inline">
                        <!-- overview -->
                        <b-tab :title="$t('streamKeyword.overview')" active>
                          <div class="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                            <h1 class="trending-text big-title text-capitalize texture-text">
                              {{ data.title ? $t(data.title) : (data.overview?.title ? $t(data.overview.title) : '') }}
                            </h1>
                            <div
                              class="d-flex align-items-start align-items-md-center text-white text-detail flex-wrap gap-1 gap-md-3 flex-column flex-md-row">
                              <span>{{ data.seasons ? data.seasons : (data.overview?.seasons ?
                                data.overview.seasons : '') }}</span>
                              <div class="d-flex align-items-center gap-1">
                                <i class="ph ph-calendar-dots"></i>
                                <span class="trending-year">{{ data.year ? data.year : (data.overview?.year ?
                                  data.overview.year : '') }}</span>
                              </div>
                            </div>
                            <div class="d-flex align-items-center flex-wrap series mb-4 gap-3">
                              <router-link :to="'#'">
                                <img
                                  :src="data.labelImg ? data.labelImg : (data.overview?.labelImg ? data.overview.labelImg : generateImgPath('/assets/images/pages/trending-label.webp'))"
                                  class="img-fluid trending-label-img rounded-3" alt="img" loading="lazy" />
                              </router-link>
                              <span class="fw-bold">{{ data.rank ? data.rank : (data.overview?.rank ?
                                data.overview.rank : '') }} {{ $t('streamKeyword.series_today') }}</span>
                            </div>
                            <p class="trending-dec line-count-4">
                              {{ data.description ? $t(data.description) : (data.overview?.description ?
                                $t(data.overview.description) : '') }}
                            </p>
                            <div class="p-btns">
                              <div class="iq-button">
                                <router-link :to="data.playLink ? data.playLink : '#'"
                                  class="btn text-uppercase position-relative btn-primary rounded-3">
                                  <div class="d-flex align-items-center gap-2">
                                    <span class="button-text">{{ $t('streamButtons.play_now') }}</span>
                                    <i class="ph-fill ph-play"></i>
                                  </div>
                                </router-link>
                              </div>
                            </div>
                          </div>
                        </b-tab>
                        <!-- Episodes -->
                        <b-tab :title="$t('streamKeyword.episodes')">
                          <div
                            class="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction">
                            <h1 class="trending-text big-title text-capitalize texture-text">
                              {{ data.title ? $t(data.title) : (data.overview?.title ? $t(data.overview.title) : '') }}
                            </h1>
                            <div class="d-flex align-items-center text-white text-detail flex-wrap mb-4 gap-3">
                              <span class="season_date">{{ data.seasons ? data.seasons : (data.overview?.seasons ?
                                data.overview.seasons : '') }} Seasons</span>
                              <div class="d-flex align-items-center gap-1">
                                <i class="ph ph-calendar-dots"></i>
                                <span class="trending-year">{{ data.year ? data.year : (data.overview?.year ?
                                  data.overview.year : '') }}</span>
                              </div>
                            </div>

                            <div class="iq-custom-select d-inline-block mb-4">
                              <select v-model="selectedSeason" class="form-control movie-select">
                                <option v-for="(option, index) in options1" :key="index" :value="option.value">
                                  {{ option.label }}
                                </option>
                              </select>
                            </div>
                            <Swiper class="p-0 m-0 list-inline" :slides-per-view="4" :space-between="20" :pagination="{
                              clickable: true,
                            }" :navigation="{
                              prevEl: '.swiper-banner-button-prev',
                              nextEl: '.swiper-banner-button-next',
                            }" :breakpoints="{
                              320: { slidesPerView: 1 },
                              550: { slidesPerView: 2 },
                              991: { slidesPerView: 2 },
                              1400: { slidesPerView: 3 },
                              1500: { slidesPerView: 4 }
                            }" tag="ul">
                              <SwiperSlide v-for="(episode, epIndex) in data.episodes" :key="episode.image + '-ep'"
                                tag="li">
                                <EpisodeCard :showImg="episode.image" :episodePath="episode.link ? episode.link : '#'"
                                  :id="episode.showEpisod ? episode.showEpisod : (episode.episod ? episode.episod : '')"
                                  :episodTitle="episode.episodTitle ? $t(episode.episodTitle) : ''"
                                  :episodeDetail="!!episode.episodeDetail"
                                  :episodeDetailText="episode.episodeDetail ? $t(episode.episodeDetail) : ''"
                                  :episodeNumber="episode.showEpisod ? episode.showEpisod : (episode.episod ? episode.episod : '')"
                                  :episodTime="episode.episodTime ? episode.episodTime : ''" />
                              </SwiperSlide>

                              <!-- Mobile pagination bullets -->
                              <div class="swiper-pagination d-block d-lg-none"></div>
                            </Swiper>

                            <!-- Select Season -->


                          </div>
                        </b-tab>
                        <!-- Trailers -->
                        <b-tab :title="$t('streamKeyword.trailers')">
                          <div
                            class="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction text-center">
                            <h3 class="trending-text big-title text-uppercase texture-text mt-2">
                              {{ $t('streamButtons.watch_trailer') }}
                            </h3>
                            <div class="episodes-contens mt-5">
                              <div class="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                <div class="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                  <img :src="generateImgPath('/assets/images/video/trailer-poster.webp')"
                                    class="trailer-image" alt="trailer-image" />
                                  <RouterLink :to="'#'" class="video-open playbtn text-decoration-none" tabindex="0"
                                    @click="toggler = !toggler">
                                    <!-- SVG Play Button -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"
                                      viewBox="0 0 213.7 213.7">
                                      <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10"
                                        points="73.5,62.5 148.5,105.8 73.5,149.1" />
                                      <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8"
                                        r="103.3" />
                                    </svg>
                                    <span class="w-trailor text-uppercase">
                                      {{ $t('streamButtons.watch_trailer') }}
                                    </span>
                                  </RouterLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </b-tab>
                        <!-- Similar -->
                        <b-tab :title="$t('streamKeyword.similar_like')">
                          <div
                            class="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction">
                            <h3 class="trending-text big-title texture-text mb-5">
                              {{ $t('sectionTitle.recommended_for_you') }}
                            </h3>

                            <Swiper class="p-0 m-0 list-inline" :slides-per-view="4" :space-between="20" :pagination="{
                              clickable: true,
                            }" :navigation="{
                                prevEl: '.swiper-banner-button-prev',
                                nextEl: '.swiper-banner-button-next',
                              }" :breakpoints="{
                                320: { slidesPerView: 1 },
                                550: { slidesPerView: 2 },
                                991: { slidesPerView: 2 },
                                1400: { slidesPerView: 3 },
                                1500: { slidesPerView: 4 }
                              }" tag="ul">
                              <SwiperSlide v-for="(similar, simIndex) in data.similar" :key="similar.image + '-sim'"
                                tag="li">
                                <EpisodeCard :showImg="similar.image" :episodePath="similar.link ? similar.link : '#'"
                                  :id="similar.showEpisod ? similar.showEpisod : (similar.episod ? similar.episod : '')"
                                  :episodTitle="similar.episodTitle ? $t(similar.episodTitle) : ''"
                                  :episodeDetail="!!similar.episodeDetail"
                                  :episodeDetailText="similar.episodeDetail ? $t(similar.episodeDetail) : ''"
                                  :episodeNumber="similar.showEpisod ? similar.showEpisod : (similar.episod ? similar.episod : '')"
                                  :episodTime="similar.episodTime ? similar.episodTime : ''" />
                              </SwiperSlide>

                              <!-- Mobile pagination bullets -->
                              <div class="swiper-pagination d-block d-lg-none"></div>
                            </Swiper>
                          </div>
                        </b-tab>
                      </b-tabs>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>
        </div>
      </b-row>
    </b-container>
  </section>
</template>
<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

// Swiper Components Import
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Thumbs, EffectFade, Pagination, Autoplay } from 'swiper';
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


// Swiper Modules
const modules = [Navigation, Autoplay, EffectFade, Thumbs, Pagination];
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

// i18n hook
const { t, locale } = useI18n();

// Recreate Swipers when RTL toggles so pagination/controls bind to correct DOM
watch(
  () => rtl.value,
  () => {
    // clear any stored thumbs instance so the new Swiper doesn't reference an old one
    if (thumbsSwiper) thumbsSwiper.value = null;
    render.value = false;
    setTimeout(() => {
      render.value = true;
    }, 0);
  }
);

// Recreate Swipers when locale changes (e.g. switching to Arabic -> RTL)
watch(
  () => locale.value,
  () => {
    if (thumbsSwiper) thumbsSwiper.value = null;
    render.value = false;
    setTimeout(() => {
      render.value = true;
    }, 0);
  }
);

const options1 = ref([
  { value: `${t("streamEpisode.season")}1`, label: `${t("streamEpisode.season")}1` },
  { value: `${t("streamEpisode.season")}2`, label: `${t("streamEpisode.season")}2` },
  { value: `${t("streamEpisode.season")}3`, label: `${t("streamEpisode.season")}3` },
]);

const selectedSeason = ref(options1.value[0].value); // default selected

const trendingSlider = [
  {
    image: generateImgPath("/assets/images/media/pirates-ofdayones-orignal.webp"),
    episodeDetail: "streamMovies.pirates_of_day_one_desc",
    overview: {
      title: "streamMovies.pirates_of_day_one",
      seasons: 3,
      year: "Feb 2019",
      rank: "#1 in Series Today",
      description: "streamMovies.pirates_of_day_one_desc",
    },
    episodes: [
      {
        image: generateImgPath("/assets/images/media/episode/s1e4-island-of-secrets.webp"),
        showEpisod: "04",
        episodTime: "45m",
        episodTitle: "streamEpisode.episode5",
        episodeDetail: "streamEpisode.episode5_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e3-rivals-and-revelations.webp"),
        showEpisod: "03",
        episodTime: "40m",
        episodTitle: "streamEpisode.episode4",
        episodeDetail: "streamEpisode.episode4_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e2-hidden-allies.webp"),
        showEpisod: "02",
        episodTime: "30m",
        episodTitle: "streamEpisode.episode3",
        episodeDetail: "streamEpisode.episode3_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e1-setting-sail.webp"),
        showEpisod: "01",
        episodTime: "45m",
        episodTitle: "streamEpisode.episode2",
        episodeDetail: "streamEpisode.episode2_desc",
      },
    ],
    similar: [
      {
        image: generateImgPath("/assets/images/media/episode/s2e4-tides-of-betrayal.webp"),
        showEpisod: "04",
        episodDate: "October 1, 2022",
        episodTime: "45m",
        episodTitle: "streamEpisode.episode33",
        episodeDetail: "streamEpisode.episode33_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e5-Lost-Souls.webp"),
        showEpisod: "03",
        episodDate: "October 8, 2022",
        episodTime: "35m",
        episodTitle: "streamEpisode.episode34",
        episodeDetail: "streamEpisode.episode34_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s3e3-cursed-waters.webp"),
        showEpisod: "02",
        episodDate: "October 15, 2022",
        episodTime: "36m",
        episodTitle: "streamEpisode.episode35",
        episodeDetail: "streamEpisode.episode35_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s3e1-betrayals-and-bonds.webp"),
        showEpisod: "01",
        episodDate: "October 22, 2022",
        episodTime: "41m",
        episodTitle: "streamEpisode.episode36",
        episodeDetail: "streamEpisode.episode36_desc",
      },
    ],
  },
  {
    image: generateImgPath("/assets/images/media/the-hunter.webp"),
    showEpisod: "S01E01",
    episodDate: "streamKeyword.october", // <-- Store key only
    episodTime: "45m",
    episodTitle: "streamMovies.the_hunter",
    episodeDetail: "streamMovies.the_hunter_desc",
    overview: {
      title: "streamMovies.the_hunter",
      seasons: 3,
      year: "Feb 2019",
      rank: "#2 in Series Today",
      description: "streamMovies.the_hunter_desc",
    },
    episodes: [
      {
        image: generateImgPath("/assets/images/media/episode/s1e3-fire-and-bloodlines.webp"),
        showEpisod: "03",
        episodDate: "", // Date not provided in your snippet
        episodTime: "45m",
        episodTitle: "streamEpisode.episode37",
        episodeDetail: "streamEpisode.episode37_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e2-kings-and-conspiracies.webp"),
        showEpisod: "02",
        episodDate: "",
        episodTime: "35m",
        episodTitle: "streamEpisode.episode38",
        episodeDetail: "streamEpisode.episode38_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e1-awakening-of-the-drakes.webp"),
        showEpisod: "01",
        episodDate: "",
        episodTime: "36m",
        episodTitle: "streamEpisode.episode39",
        episodeDetail: "streamEpisode.episode39_desc",
      },
    ],

    trailer: {
      image: generateImgPath("/assets/images/video/trailer-poster.webp"),
      video: "/assets/video/trailer.mp4",
    },
    similar: [
      {
        image: generateImgPath("/assets/images/media/episode/s4e1-rebirth-of-the-realm.webp"),
        showEpisod: "04",
        episodDate: "October 1, 2022",
        episodTime: "45m",
        episodTitle: "streamEpisode.episode40",
        episodeDetail: "streamEpisode.episode40_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s2e3-the-dragons-redemption.webp"),
        showEpisod: "03",
        episodDate: "October 8, 2022",
        episodTime: "35m",
        episodTitle: "streamEpisode.episode41",
        episodeDetail: "streamEpisode.episode41_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s4e3-the-final-dawn.webp"),
        showEpisod: "02",
        episodDate: "October 15, 2022",
        episodTime: "36m",
        episodTitle: "streamEpisode.episode42",
        episodeDetail: "streamEpisode.episode42_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s4e2-echoes-of-legends.webp"),
        showEpisod: "01",
        episodDate: "October 22, 2022",
        episodTime: "41m",
        episodTitle: "streamEpisode.episode43",
        episodeDetail: "streamEpisode.episode43_desc",
      },
    ],
  },
  {
    image: generateImgPath("/assets/images/media/lost-in-space.webp"),
    episodeDetail: "streamMovies.lost_in_space_desc",
    overview: {
      title: "streamMovies.lost_in_space",
      seasons: 2,
      year: "Feb 2019",
      rank: "#2 in Series Today",
      description: "streamMovies.lost_in_space_desc",
    },
    episodes: [
      {
        image: generateImgPath("/assets/images/media/episode/s3e1-contact.webp"),
        showEpisod: "04",
        episodDate: "October 1, 2022",
        episodTime: "45m",
        episodTitle: "streamEpisode.episode32",
        episodeDetail: "streamEpisode.episode32_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e3-shipwrecked.webp"),
        showEpisod: "03",
        episodDate: "October 8, 2022",
        episodTime: "35m",
        episodTitle: "streamEpisode.episode24",
        episodeDetail: "streamEpisode.episode24_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e2-the-new-guy.webp"),
        showEpisod: "02",
        episodDate: "October 15, 2022",
        episodTime: "36m",
        episodTitle: "streamEpisode.episode25",
        episodeDetail: "streamEpisode.episode25_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e1-trust.webp"),
        showEpisod: "01",
        episodDate: "October 22, 2022",
        episodTime: "41m",
        episodTitle: "streamEpisode.episode26",
        episodeDetail: "streamEpisode.episode26_desc",
      },
    ],
    similar: [
      {
        image: generateImgPath("/assets/images/media/kung-fu-panda.webp"),
        showEpisod: "01",
        episodDate: "October 1, 2022",
        episodTime: "41m",
        episodTitle: "streamMovies.kung_fu_panda",
        episodeDetail: "streamMovies.kung_fu_panda_desc",
      },
      {
        image: generateImgPath("/assets/images/media/dinoosaur.webp"),
        showEpisod: "02",
        episodDate: "October 8, 2022",
        episodTime: "35m",
        episodTitle: "streamMovies.dinoosaur",
        episodeDetail: "streamMovies.dinoosaur_desc",
      },
      {
        image: generateImgPath("/assets/images/media/arrival.webp"),
        showEpisod: "03",
        episodDate: "October 15, 2022",
        episodTime: "36m",
        episodTitle: "streamMovies.arrival",
        episodeDetail: "streamMovies.arrival_desc",
      },
      {
        image: generateImgPath("/assets/images/media/venom.webp"),
        showEpisod: "04",
        episodDate: "October 22, 2022",
        episodTime: "41m",
        episodTitle: "streamMovies.venom",
        episodeDetail: "streamMovies.venom_desc",
      },
    ],
  },
  {
    image: generateImgPath("/assets/images/media/castle-rock.webp"),
    showEpisod: "S01E02",
    episodDate: "streamKeyword.october", // <-- Store key only
    episodTime: "35m",
    episodTitle: "streamKeyword.episode2",
    episodeDetail: "streamMovies.castle_rock_desc",
    overview: {
      title: "streamMovies.castle_rock",
      seasons: 3,
      year: "Feb 2019",
      rank: "#2 in Series Today",
      description: "streamMovies.castle_rock_desc",
    },

    episodes: [
      {
        image: generateImgPath("/assets/images/media/episode/s1e4-the-box.webp"),
        showEpisod: "02",
        episodDate: "October 1, 2022",
        episodTime: "45m",
        episodTitle: "streamEpisode.episode44",
        episodeDetail: "streamEpisode.episode44_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e3-local-color.webp"),
        showEpisod: "03",
        episodDate: "October 8, 2022",
        episodTime: "35m",
        episodTitle: "streamEpisode.episode45",
        episodeDetail: "streamEpisode.episode45_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e2-habeas-corpus.webp"),
        showEpisod: "04",
        episodDate: "October 15, 2022",
        episodTime: "36m",
        episodTitle: "streamEpisode.episode46",
        episodeDetail: "streamEpisode.episode46_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e1-recap-severance.webp"),
        showEpisod: "01",
        episodDate: "October 22, 2022",
        episodTime: "41m",
        episodTitle: "streamEpisode.episode47",
        episodeDetail: "streamEpisode.episode47_desc",
      },
    ],
    similar: [
      {
        image: generateImgPath("/assets/images/media/episode/s2e2-filter.webp"),
        showEpisod: "04",
        episodDate: "October 1, 2022",
        episodTime: "45m",
        episodTitle: "streamEpisode.episode48",
        episodeDetail: "streamEpisode.episode48_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s3e1-sunset.webp"),
        showEpisod: "03",
        episodDate: "October 8, 2022",
        episodTime: "35m",
        episodTitle: "streamEpisode.episode49",
        episodeDetail: "streamEpisode.episode49_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s2e1-the-harvest.webp"),
        showEpisod: "02",
        episodDate: "October 15, 2022",
        episodTime: "36m",
        episodTitle: "streamEpisode.episode50",
        episodeDetail: "streamEpisode.episode50_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e3-local-color.webp"),
        showEpisod: "01",
        episodDate: "October 22, 2022",
        episodTime: "41m",
        episodTitle: "streamEpisode.episode51",
        episodeDetail: "streamEpisode.episode51_desc",
      },
    ],
  },
  {
    image: generateImgPath("/assets/images/media/assassins-creed.webp"),
    showEpisod: "S03E02",
    episodDate: "streamMonth.february", // <-- Store key only
    episodTime: "35m",
    episodeDetail: "streamMovies.assassins_creed_desc",
    overview: {
      title: "streamMovies.assassins_creed",
      seasons: 3,
      year: "February 2023",
      rank: "#2 in Series Today",
      description: "streamMovies.assassins_creed_desc",
    },
    episodes: [
      {
        image: generateImgPath("/assets/images/media/episode/s1e3-rivals-and-revelations.webp"),
        showEpisod: "04",
        episodDate: "February 1, 2025",
        episodTime: "40m",
        episodTitle: "streamEpisode.episode4",
        episodeDetail: "streamEpisode.episode4_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e2-hidden-allies.webp"),
        showEpisod: "03",
        episodDate: "October 8, 2022",
        episodTime: "30m",
        episodTitle: "streamEpisode.episode52",
        episodeDetail: "streamEpisode.episode52_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e1-setting-sail.webp"),
        showEpisod: "02",
        episodDate: "October 15, 2022",
        episodTime: "45m",
        episodTitle: "streamEpisode.episode53",
        episodeDetail: "streamEpisode.episode53_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e1-setting-sail.webp"),
        showEpisod: "01",
        episodDate: "October 22, 2022",
        episodTime: "41m",
        episodTitle: "streamEpisode.episode53",
        episodeDetail: "streamEpisode.episode54_desc",
      },
    ],
    similar: [
      {
        image: generateImgPath("/assets/images/media/episode/s1e3-rivals-and-revelations.webp"),
        showEpisod: "04",
        episodDate: "October 1, 2022",
        episodTime: "45m",
        episodTitle: "streamEpisode.episode54",
        episodeDetail: "streamEpisode.episode54_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e2-hidden-allies.webp"),
        showEpisod: "03",
        episodDate: "October 8, 2022",
        episodTime: "35m",
        episodTitle: "streamEpisode.episode55",
        episodeDetail: "streamEpisode.episode55_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e1-setting-sail.webp"),
        showEpisod: "04",
        episodDate: "October 15, 2022",
        episodTime: "36m",
        episodTitle: "streamEpisode.episode56",
        episodeDetail: "streamEpisode.episode56_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e3-rivals-and-revelations.webp"),
        showEpisod: "01",
        episodDate: "October 22, 2022",
        episodTime: "41m",
        episodTitle: "streamEpisode.episode57",
        episodeDetail: "streamEpisode.episode57_desc",
      },
    ],
  },
  {
    image: generateImgPath("/assets/images/media/vikings.webp"),
    episodeDetail: "streamMovies.vikings_desc",
    overview: {
      title: "streamMovies.vikings",
      seasons: 3,
      year: "November 2023",
      rank: "#2 in Series Today",
      description: "streamMovies.vikings_desc",
    },
    episodes: [
      {
        image: generateImgPath("/assets/images/media/episode/s1e5-Lost-Souls.webp"),
        showEpisod: "01",
        episodDate: "October 1, 2022",
        episodTime: "30m",
        episodTitle: "streamEpisode.episode58",
        episodeDetail: "streamEpisode.episode58_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e4-the-signal.webp"),
        showEpisod: "02",
        episodDate: "October 8, 2022",
        episodTime: "45m",
        episodTitle: "streamEpisode.episode59",
        episodeDetail: "streamEpisode.episode59_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e3-All-Change.webp"),
        showEpisod: "03",
        episodDate: "October 15, 2022",
        episodTime: "40m",
        episodTitle: "streamEpisode.episode60",
        episodeDetail: "streamEpisode.episode60_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s1e2-king-of-kings.webp"),
        showEpisod: "02",
        episodDate: "October 22, 2022",
        episodTime: "30m",
        episodTitle: "streamEpisode.episode60",
        episodeDetail: "streamEpisode.episode60_desc",
      },
    ],
    similar: [
      {
        image: generateImgPath("/assets/images/media/episode/s2e3-the-raft-of-the-medusa.webp"),
        showEpisod: "04",
        episodDate: "October 1, 2022",
        episodTime: "45m",
        episodTitle: "streamEpisode.episode61",
        episodeDetail: "streamEpisode.episode61_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s2e2-its-only-magic.webp"),
        showEpisod: "03",
        episodDate: "October 8, 2022",
        episodTime: "35m",
        episodTitle: "streamEpisode.episode62",
        episodeDetail: "streamEpisode.episode62_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s2e1-the-signal.webp"),
        showEpisod: "02",
        episodDate: "October 15, 2022",
        episodTime: "36m",
        episodTitle: "streamEpisode.episode63",
        episodeDetail: "streamEpisode.episode63_desc",
      },
      {
        image: generateImgPath("/assets/images/media/episode/s2e2-its-only-magic.webp"),
        showEpisod: "01",
        episodDate: "October 22, 2022",
        episodTime: "41m",
        episodTitle: "streamEpisode.episode64",
        episodeDetail: "streamEpisode.episode64_desc",
      },
    ],
  },

];
</script>