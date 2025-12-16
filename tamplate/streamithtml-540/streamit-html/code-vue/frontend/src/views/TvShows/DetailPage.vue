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
          <MovieDescription
            movie-name="streamMovies.vikings"
            video-url="/episode"
            :is-not-t-v-showbadge="true"
            movie-released="2025"
            view-number="141"
            :movie-views="$t('streamKeyword.views')"
            imdb-rating="5"
            movie-duration="1hr : 10m"
            movie-language="English (UK)"
            :is-not-playlistbtn="true"
            :is-notdownloadbtn="true"
          />
        </div>
      </div>
    </div>
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

        <!-- Movies Recommended For You -->
        <section class="recommended-block">
          <MoviesRecommendedForYou
            :title="'sectionTitle.recommended'"
            :list="TVshowDetail_recommendedforYou"
            :slides-per-view="6"
          />
        </section>

        <!-- Starring -->
        <YourFavouritePersonality
          :title="'sectionTitle.starring'"
          :slide-per-view="11"
        />

        <!-- Crew -->
        <YourFavouritePersonality
          :title="'sectionTitle.crew'"
          :data="crew"
          :slide-per-view="11"
        />

        <!-- Upcoming -->
        <section class="upcoming-block">
          <UpcomingMovies
            :title="$t('sectionTitle.upcoming')"
            :list="upcoming_related_video"
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
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
// Components
import VideoPlayer from "../../components/plugins/VideoPlayer.vue";
import { useSetting } from "../../store/setting/index";
import MoviesRecommendedForYou from "../../components/sections/MoviesRecommendedForYou.vue";
import YourFavouritePersonality from "../../components/sections/YourFavouritePersonality.vue";
import MovieDescription from "../../components/MovieDescription.vue";
import UpcomingMovies from "../../components/sections/UpcomingMovies.vue";
import EpisodeCard from "../../components/cards/EpisodeCard.vue";
import DetailsReview from "../../components/widgets/DetailsReview.vue";
import {crew} from '../../StaticData/data';

// Static Data
import {  
  tvshow_detail_episode,
  tvshow_detail_episode2,
  TVshowDetail_recommendedforYou,
  upcoming_related_video,
} from "../../StaticData/data";
// Tabs state
const activeTab = ref("season-1");

// RTL handling
const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);

// Video player setup
const playerOption = ref({
  autoplay: true,
  controls: false,
  muted: true,
  loop: true,
  preload: "auto",
  techOrder: ["youtube"],
  sources: [
    {
      src: "https://youtu.be/qJA2U-YMvkk?si=3DpOYivbvOwwTP9X",
      type: "video/youtube",
    },
  ],
  youtube: {
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    autoplay: 1,
  },
  fullscreen: true,
  poster: '/assets/images/media/chosfies.webp',
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

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
</script>
