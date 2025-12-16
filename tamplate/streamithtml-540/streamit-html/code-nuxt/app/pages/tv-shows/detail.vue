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
          <MovieDescription movie-name="streamMovies.vikings" :video-url="{ name: 'tv-shows-episode' }" :is-not-t-v-showbadge="true" movie-released="2025" view-number="141" :movie-views="$t('streamKeyword.views')" imdb-rating="5" movie-duration="1hr : 10m" movie-language="English (UK)" :is-not-playlistbtn="true" :is-notdownloadbtn="true"></MovieDescription>
        </div>
      </div>
    </div>
  </div>

  <b-container fluid>
    <div class="overflow-hidden">
      <div class="show-episode section-padding">
        <!-- Episode Start -->
        <div class="d-flex align-items-center justify-content-between px-1 mb-2 pb-1 mb-md-4 pb-md-0">
          <h5 class="main-title text-capitalize mb-0 fw-medium">{{$t('streamKeyword.episode')}}</h5>
        </div>
        <!-- Tabs -->
        <ul class="nav nav-pills custom-tab-slider episode-nav-btn gap-3 mb-4 pb-2" role="tablist">
          <li v-for="season in seasons" :key="season.id" class="nav-item">
            <a class="nav-link" :class="{ active: activeTab === season.id, show: activeTab === season.id }" data-bs-toggle="pill" href="'#' + season.id" role="tab" :aria-selected="activeTab === season.id" @click.prevent="activeTab = season.id">
              {{ $t(season.name) || 'Season' }}
            </a>
          </li>
        </ul>

        <!-- Tab Content -->
        <div class="tab-content">
          <div v-for="season in seasons" :id="season.id" :key="season.id" class="tab-pane animated fadeInUp" :class="{ active: activeTab === season.id, show: activeTab === season.id }" role="tabpanel">
            <div class="card-style-slider">
              <Swiper
                :slides-per-view="5"
                :space-between="0"
                :breakpoints="{
                  1200: { slidesPerView: 5 },
                  992: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                  576: { slidesPerView: 2 },
                  320: { slidesPerView: 1 },
                }"
                class="position-relative wrapper-class mt-4 mb-5 swiper-card">
                <SwiperSlide v-for="(episode, index) in season.episodes" :key="index">
                  <EpisodeCard v-bind="episode" :episode-number="(season.episodes.length - index).toString().padStart(2, '0')" :episod-title="$t(episode.episodTitle)" :episode-titles-text="$t(episode.episodeTitlesText)" :episode-detail-text="$t(episode.episodeDetailText)" :episode-titles="true" :episode-detail="true" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <!-- Episode End -->

        <!-- Movies Recommended For You Start  -->
        <section class="recommended-block">
          <MoviesRecommendedForYou :title="$t('sectionTitle.recommended')" :slides-per-view="6" :loop="false"></MoviesRecommendedForYou>
        </section>

        <!-- Starring start -->
        <div class="favourite-person-block">
          <section class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-md-3 px-1 mb-2 pb-1 mb-md-4 pb-md-0">
              <h4 class="main-title text-capitalize mb-0">{{$t('sectionTitle.starring')}}</h4>
            </div>

            <Swiper
              :dir="rtl"
              :slides-per-view="11"
              :space-between="0"
              :loop="false"
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
            <div class="d-flex align-items-center justify-content-between px-md-3 px-1 mb-2 pb-1 mb-md-4 pb-md-0">
              <h4 class="main-title text-capitalize mb-0">{{$t('sectionTitle.crew')}}</h4>
            </div>

            <Swiper
              :dir="rtl"
              :slides-per-view="11"
              :space-between="0"
              :loop="false"
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

        <section class="upcomimg-block">
          <UpcomingMovies :title="$t('sectionTitle.upcoming')" :list="upcoming_related_video" :notview-all-btn="true"></UpcomingMovies>
        </section>

        <section class="mb-5">
          <DetailsReview></DetailsReview>
        </section>
      </div>
    </div>
  </b-container>
</template>
<script setup>
import { computed, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper';
const generateImgPath = (path) => {
    return window.location.origin + path;
};
// plugins

import VideoPlayer from '~/components/plugins/VideoPlayer.vue';
import { useSetting } from '../../store/setting/index';
import MoviesRecommendedForYou from '~/components/sections/MoviesRecommendedForYou.vue';
import MovieDescription from '~/components/MovieDescription.vue';
import PersonalityCard from '~/components/cards/PersonalityCard.vue';
import UpcomingMovies from '~/components/sections/UpcomingMovies.vue';

import {  upcoming_related_video } from '~/StaticData/data';
import EpisodeCard from '~/components/cards/EpisodeCard.vue';
import DetailsReview from '~/components/widgets/DetailsReview.vue';

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

const activeTab = ref('season-1');

const seasons = [
  {
    id: 'season-1',
    name: 'Season 1',
    episodes: [
      {
        showImg: 'media/episode/s1e1-the-buddha.webp',
        id: '01',
        showEpisod: 'S01E01',
        episodDate: 'October 1, 2020',
        episodTime: '30m',
        episodTitle: 'streamEpisode.episode65',
        episodeTitlesText: 'streamEpisode.episode65',
        episodeDetailText: 'streamEpisode.episode65_desc',
      },
      {
        showImg: 'media/episode/s1e2-king-of-kings.webp',
        id: '02',
        showEpisod: 'S01E02',
        episodDate: 'October 8, 2020',
        episodTime: '45m',
        episodTitle: 'streamEpisode.episode60',
        episodeTitlesText: 'streamEpisode.episode60',
        episodeDetailText: 'streamEpisode.episode60_desc',
      },
      {
        showImg: 'media/episode/s1e3-All-Change.webp',
        id: '03',
        showEpisod: 'S01E03',
        episodDate: 'October 15, 2020',
        episodTime: '36m',
        episodTitle: 'streamEpisode.episode66',
        episodeTitlesText: 'streamEpisode.episode66',
        episodeDetailText: 'streamEpisode.episode66_desc',
      },
      {
        showImg: 'media/episode/s1e4-the-signal.webp',
        id: '04',
        showEpisod: 'S01E04',
        episodDate: 'October 22, 2020',
        episodTime: '30m',
        episodTitle: 'streamEpisode.episode59',
        episodeTitlesText: 'streamEpisode.episode59',
        episodeDetailText: 'streamEpisode.episode59_desc',
      },
      {
        showImg: 'media/episode/s1e5-Lost-Souls.webp',
        id: '05',
        showEpisod: 'S01E05',
        episodDate: 'October 29, 2020',
        episodTime: '41m',
        episodTitle: 'streamEpisode.episode58',
        episodeTitlesText: 'streamEpisode.episode58',
        episodeDetailText: 'streamEpisode.episode58_desc',
      },
    ],
  },
  {
    id: 'season-2',
    name: 'Season 2',
    episodes: [
      {
        showImg: 'media/episode/s2e2-its-only-magic.webp',
        id: '01',
        showEpisod: 'S02E01',
        episodDate: 'October 1, 202',
        episodTime: '45m',
        episodTitle: 'streamEpisode.episode67',
        episodeTitlesText: 'streamEpisode.episode67',
        episodeDetailText: 'streamEpisode.episode67_desc',
      },
      {
        showImg: 'media/episode/s2e3-the-raft-of-the-medusa.webp',
        id: '02',
        showEpisod: 'S02E02',
        episodDate: 'October 8, 2020',
        episodTime: '35m',
        episodTitle: 'streamEpisode.episode68',
        episodeTitlesText: 'streamEpisode.episode68',
        episodeDetailText: 'streamEpisode.episode68_desc',
      },
      {
        showImg: 'media/episode/s2e4-the-final-straw.webp',
        id: '03',
        showEpisod: 'S02E03',
        episodDate: 'October 22, 2020',
        episodTime: '41m',
        episodTitle: 'streamEpisode.episode69',
        episodeTitlesText: 'streamEpisode.episode69',
        episodeDetailText: 'streamEpisode.episode69_desc',
      },
    ],
  },
];

const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);

const playerOption = ref({
  autoplay: true,
  controls: false,
  muted: true,
  loop: true,
  preload: 'auto',
  techOrder: ['youtube'],
  sources: [
    {
      src: 'https://youtu.be/qJA2U-YMvkk?si=3DpOYivbvOwwTP9X',
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
  poster: '/assets/images/media/minions-3.webp',
});
</script>
