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
                <MovieDescription movie-name="streamEpisode.episode52" video-url="/movie-player" movie-released="2025" view-number="1.2k" :movie-views="$t('streamKeyword.views')" :is-notimdb-rating="true" movie-duration="30min" :is-not-t-v-showbadge="true" :is-notstart-watching="true" :is-notwatch-list="true" :is-episodepage="true" />
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>

   <b-container fluid>
    <div class="overflow-hidden">
      <div class="show-episode section-padding">
        <!-- Episode Start -->
        <div
          class="d-flex align-items-center justify-content-between px-1 mb-2 pb-1 mb-md-4 pb-md-0"
        >
          <h5 class="main-title text-capitalize mb-0 fw-medium">
            {{ $t("streamKeyword.episodes") }}
          </h5>
        </div>

        <!-- Tabs -->
        <ul
          class="nav nav-pills custom-tab-slider episode-nav-btn gap-3 mb-4 pb-2"
          role="tablist"
        >
          <li v-for="season in seasons" :key="season.id" class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeTab === season.id, show: activeTab === season.id }"
              data-bs-toggle="pill"
              :href="'#' + season.id"
              role="tab"
              :aria-selected="activeTab === season.id"
              @click.prevent="activeTab = season.id"
            >
              {{ $t(season.name) || 'Season' }}

            </a>
          </li>
        </ul>

        <!-- Tab Content -->
        <div class="tab-content">
          <div
            v-for="season in seasons"
            :id="season.id"
            :key="season.id"
            class="tab-pane animated fadeInUp"
            :class="{ active: activeTab === season.id, show: activeTab === season.id }"
            role="tabpanel"
          >
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
                class="position-relative wrapper-class mt-4 mb-5 swiper-card"
              >
                <SwiperSlide v-for="(episode, i) in season.episodes" :key="i">
                  <EpisodeCard
                    v-bind="episode"
                    :show-img="episode.image"
                    :episode-number="episode.episodeNumber"
                    :episod-title="$t(episode.episodTitle)"
                    :episode-titles-text="$t(episode.episodeTitlesText)"
                    :episode-detail-text="$t(episode.episodeDetailText)"
                    :episode-titles="true"
                    :episode-detail="true"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <!-- Episode End -->


        <!-- Upcoming -->
        <section class="upcoming-block">
          <UpcomingMovies
            :title="$t('sectionTitle.upcoming')"
            :list="Episode_MoreLike"
            :notview-all-btn="true"
          />
        </section>

        <section class="mb-5">
          <DetailsReview />
        </section>
      </div>
    </div>
  </b-container>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import VideoPlayer from '../../components/plugins/VideoPlayer.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import MovieDescription from '../../components/MovieDescription.vue';
import EpisodeCard from '../../components/cards/EpisodeCard.vue';
import {  
  tvshow_detail_episode,
  tvshow_detail_episode2,
  Episode_MoreLike,
} from "../../StaticData/data";
import DetailsReview from '../../components/widgets/DetailsReview.vue';
import MoviesRecommendedForYou from '../../components/sections/MoviesRecommendedForYou.vue';


const activeTab = ref('');



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
  poster: '/assets/images/player/player-poster.webp',
});

// Seasons JSON (connected to tabs + Swiper)
const seasons = ref([
  {
    id: "season-1",
    name: "streamEpisode.season1",
    episodes: tvshow_detail_episode.map((ep, i) => ({
      ...ep,
      episodeNumber: String(i + 1),
    })),
  },
  {
    id: "season-2",
    name: "streamEpisode.season2",
    episodes: tvshow_detail_episode2.map((ep, i) => ({
      ...ep,
      episodeNumber: String(i + 1),
    })),
  },
]);

onMounted(() => {
  // set default active tab to first season id
  if (seasons.value && seasons.value.length > 0) {
    activeTab.value = seasons.value[0].id
  }
})
</script>
