<template>
  <!-- Banner Start -->
  <div class="site-video">
    <VideoPlayer :options="playerOption"></VideoPlayer>
  </div>
  <!-- Banner End -->

  <div class="details-part">
    <b-container fluid>
      <b-row>
        <b-col lg="12">
          <div class="trending-info pt-0 pb-0">
            <b-row class="justify-content-between">
              <b-col xl="12" cols="12" class="mb-auto">
                <MovieDescription :isnotmovie-title="true" :video-url="{name: 'movies-player'}" movie-name="streamEpisode.episode3" movie-released="2025"
                  view-number="1.2k" :movie-views="$t('streamKeyword.views')" :is-notimdb-rating="true"
                  movie-duration="30min" :is-not-t-v-showbadge="true" :is-notstart-watching="true"
                  :is-notwatch-list="true" :is-episodepage="true" />
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>

  <b-container fluid>
    <div class="overflow-hidden">
      <section class="recommended-block">
        <div class="d-flex align-items-center justify-content-between px-1 mb-2 pb-1 mb-md-4 pb-md-2">
          <h5 class="main-title text-capitalize mb-0 fw-medium">Episodes</h5>
        </div>

        <!-- Tab Navigation -->
        <ul class="nav nav-pills custom-tab-slider episode-nav-btn gap-3" role="tablist">
          <li v-for="season in seasons" :key="season.id" class="nav-item">
            <a class="nav-link" :class="{ active: activeTab === season.id, show: activeTab === season.id }" href="#" role="tab"
              :aria-selected="activeTab === season.id" @click.prevent="activeTab = season.id"> {{ $t(season.name) }} </a>
          </li>
        </ul>

        <!-- Tab Content -->
        <div class="tab-content">
          <div  v-for="season in seasons" :id="season.id" :key="season.id" class="tab-pane animated fadeInUp"
            :class="{ active: activeTab === season.id, show: activeTab === season.id }" role="tabpanel">
            <div class="overflow-hidden">
              <div class="card-style-slider">
              <Swiper
                :slides-per-view="5"
                :space-between="0"
                :loop="true"
                :breakpoints="{
                  1200: { slidesPerView: 5 },
                  992: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                  576: { slidesPerView: 2 },
                  320: { slidesPerView: 1 },
                }"
                class="position-relative wrapper-class mt-4 swiper-card">
                <SwiperSlide v-for="(episode, index) in season.episodes" :key="index">
                  <EpisodeCard v-bind="episode" :episode-number="(season.episodes.length - index).toString().padStart(2, '0')" :episod-title="$t(episode.episodTitle)" :episode-titles-text="$t(episode.episodeTitlesText)" :episode-detail-text="$t(episode.episodeDetailText)" :episode-titles="true" :episode-detail="true" />
                </SwiperSlide>
              </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="upcomimg-block">
        <MoviesRecommendedForYou title="sectionTitle.more_like_this" :list="Episode_MoreLike" :slides-per-view="6">
        </MoviesRecommendedForYou>
      </section>

      <div class="section-padding-bottom">
        <DetailsReview></DetailsReview>
      </div>
    </div>
  </b-container>
</template>
<script setup>
import { ref } from 'vue';
import VideoPlayer from '~/components/plugins/VideoPlayer.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import MovieDescription from '~/components/MovieDescription.vue';
import EpisodeCard from '~/components/cards/EpisodeCard.vue';
import { Episode_MoreLike } from '~/StaticData/data';
import DetailsReview from '~/components/widgets/DetailsReview.vue';
import MoviesRecommendedForYou from '~/components/sections/MoviesRecommendedForYou.vue';

const activeTab = ref('season-1');

const seasons = [
  {
    id: 'season-1',
    name: 'Season 1',
    episodes: [
      {
        showImg: 'media/episode/s1e5-Lost-Souls.webp',
        id: '01',
        showEpisod: 'S01E01',
        episodDate: 'October 1, 2020',
        episodTime: '30m',
        episodTitle: 'streamEpisode.episode58',
        episodeTitlesText: 'streamEpisode.episode58',
        episodeDetailText: 'streamEpisode.episode58_desc',
      },
      {
        showImg: 'media/episode/s1e4-the-signal.webp',
        id: '02',
        showEpisod: 'S01E02',
        episodDate: 'October 8, 2020',
        episodTime: '45m',
        episodTitle: 'streamEpisode.episode59',
        episodeTitlesText: 'streamEpisode.episode59',
        episodeDetailText: 'streamEpisode.episode59_desc',
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
        showImg: 'media/episode/s1e2-king-of-kings.webp',
        id: '04',
        showEpisod: 'S01E04',
        episodDate: 'October 22, 2020',
        episodTime: '30m',
        episodTitle: 'streamEpisode.episode60',
        episodeTitlesText: 'streamEpisode.episode60',
        episodeDetailText: 'streamEpisode.episode60_desc',
      },
      {
        showImg: 'media/episode/s1e1-the-buddha.webp',
        id: '05',
        showEpisod: 'S01E05',
        episodDate: 'October 29, 2020',
        episodTime: '41m',
        episodTitle: 'streamEpisode.episode65',
        episodeTitlesText: 'streamEpisode.episode65',
        episodeDetailText: 'streamEpisode.episode65_desc',
      },
    ],
  },
  {
    id: 'season-2',
    name: 'Season 2',
    episodes: [
      {
        showImg: 'media/episode/s2e4-the-final-straw.webp',
        id: '01',
        showEpisod: 'S02E01',
        episodDate: 'October 1, 202',
        episodTime: '45m',
        episodTitle: 'streamEpisode.episode22',
        episodeTitlesText: 'streamEpisode.episode22',
        episodeDetailText: 'streamEpisode.episode22_desc',
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
        showImg: 'media/episode/s2e2-its-only-magic.webp',
        id: '03',
        showEpisod: 'S02E03',
        episodDate: 'October 22, 2020',
        episodTime: '41m',
        episodTitle: 'streamEpisode.episode67',
        episodeTitlesText: 'streamEpisode.episode67',
        episodeDetailText: 'streamEpisode.episode67_desc',
      },
    ],
  },
];

const playerOption = ref({
  autoplay: true,
  controls: true,
  muted: true,
  loop: true,
  preload: 'auto',
  techOrder: ['youtube'],
  sources: [
    {
      src: 'https://www.youtube.com/watch?v=7WABxk9DAuw',
      type: 'video/youtube',
    },
  ],
  youtube: {
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    autoplay: 1,
  },
  fluid: true,
  poster: 'https://i.ytimg.com/vi_webp/rKVEoyTedv4/maxresdefault.webp',
});

// Swiper Modules
// const modules = [Navigation, Autoplay];
</script>
