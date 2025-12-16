<template>
  <div>
    <!-- Movie Tags -->
    <ul class="p-0 mb-2 list-inline d-flex flex-wrap movie-tag">
      <li class="trending-list">
        <router-link :to="{ name: 'landing-page.view-all' }">{{ $t('streamTag.action') }}</router-link>
      </li>
      <li class="trending-list">
        <router-link :to="{ name: 'landing-page.view-all' }">{{ $t('streamTag.adventure') }}</router-link>
      </li>
      <li class="trending-list">
        <router-link :to="{ name: 'landing-page.view-all' }">{{ $t('streamTag.drama') }}</router-link>
      </li>
    </ul>

    <!-- Movie Title -->
    <div class="d-block d-lg-flex align-items-center">
      <h5 v-if="isnotmovieTitle" class="css_prefix-title text-capitalize line-count-1">
        <a href="#" class="color-inherit">{{ $t(movieName) }}</a>
      </h5>
      <h3 v-else class="trending-text fw-bold texture-text text-uppercase my-0 fadeInLeft animated d-inline-block"
        data-animation-in="fadeInLeft" data-delay-in="0.6" style="opacity: 1; animation-delay: 0.6s">
        {{ $t(movieName) }}
      </h3>
    </div>

    <!-- Movie Description -->
    <div id="readmore-wrapper" class="movie-description mt-3 mb-4">
      <p class="line-count-3 RightAnimate-two mb-0">{{ $t('streamMovies.game_of_heros_desc') }}</p>
      <div class="iq-blog-meta-cat-tag iq-blogtag readmore-tags">
        <a href="#" data-bs-toggle="modal" data-bs-target="#viewMoreDataModal" class="position-relative"> {{
          $t('streamButtons.read_more') }} </a>
      </div>
    </div>

    <!-- Movie Metadata -->
    <ul v-if="isVideoPageData" class="list-inline mx-0 p-0 d-flex align-items-center flex-wrap gap-3 movie-metalist">
      <li>
        <div class="d-flex align-items-center gap-1">
          <i class="ph ph-eye"></i>
          <span>{{ movieViews }}</span>
        </div>
      </li>
      <li>
        <span class="d-flex align-items-center gap-1">
          <i class="ph ph-clock"></i>
          {{ movieDuration }}
        </span>
      </li>
      <li>
        <span class="fw-medium">{{ movieReleased }}</span>
      </li>
    </ul>

    <ul v-else class="list-inline mb-0 mx-0 p-0 d-flex align-items-center flex-wrap gap-3 movie-metalist">
      <li>
        <span class="fw-medium">{{ movieReleased }}</span>
      </li>

      <li v-if="!isNotClockduration">
        <span class="d-flex align-items-center gap-1">
          <i class="ph ph-clock"></i>
          {{ movieDuration }}
        </span>
      </li>

      <li>
        <div class="d-flex align-items-center gap-1">
          <i class="ph ph-eye"></i>
          <span>{{ viewNumber }} <span v-if="isTranslationKey(movieViews)">{{$t(movieViews)}}</span><span v-else>{{movieViews}}</span></span>
        </div>
      </li>

      <li v-if="!isNotimdbRating">
        <span class="fw-medium d-flex align-items-center gap-1">
          <span>{{ imdbRating }}</span>
          <span class="imdb-logo ms-1">
            <img :src="generateImgPath('/assets/images/pages/imdb-logo.svg')" loading="lazy" decoding="async"
              alt="imdb logo" class="img-fluid imdb-logo1" />
          </span>
        </span>
      </li>

      <li v-if="!isNotTVShowbadge">
        <span class="badge bg-secondary d-flex align-items-center gap-2 fw-bold font-size-12 movie-type-tag">
          <span>{{ movieType }}</span>
        </span>
      </li>
    </ul>

    <!-- Language -->
    <div v-if="movieLanguage" class="video-language d-flex align-items-center gap-1 mt-2">
      <i class="ph ph-translate"></i>
      <ul class="list-inline m-0 p-0 d-inline-flex align-items-center gap-3 flex-wrap">
        <li>
          <small class="text-capitalize">{{ movieLanguage }}</small>
        </li>
      </ul>
    </div>

    <!-- Action Buttons -->
    <div class="d-flex align-items-center flex-wrap gap-3 gap-md-4 my-5">
      <div v-if="!isNotstartWatching" class="iq-play-button iq-button">
        <router-link :to="videoUrl" class="btn btn-primary w-100 rounded d-flex align-items-center justify-content-center gap-2 lh-1">
            <i :class="subscribeToWatch ? 'ph-fill ph-crown' : 'ph-fill ph-play'" class="fs-6"></i>
            <span>{{ $t(subscribeToWatch ? 'streamButtons.subscribe_watch' : 'streamButtons.start_watching') }}</span>
        </router-link>
      </div>

      <div v-if="!isNotwatchList" class="watchlist-button-wrapper">
        <router-link v-b-tooltip.hover :title="$t('streamTooltip.add_to_watchlist')" :to="{ path: '/watchlist-detail' }"
          class="btn btn-secondary border rounded d-flex align-items-center justify-content-center gap-2 lh-1">
            <i class="ph ph-plus fw-semibold"></i>
            <span class="fw-semibold">{{ $t('streamAccount.watch_list') }}</span>
        </router-link>
      </div>

      <div class="d-flex align-items-center gap-3 flex-wrap">
        <button v-if="!isNotLikemovies" id="like-movies" class="action-btn btn btn-secondary border"
          @click="toggleLike">
          <span id="like-movies">
            <span v-b-tooltip.hover class="h-100 w-100 d-block"
              :title="$t(isLiked ? 'streamTooltip.un-like' : 'streamTooltip.like')">
              <i :class="[isLiked ? 'ph-fill' : 'ph', 'ph-heart', 'heart-icon']"></i>
            </span>
          </span>
        </button>

        <button v-if="!isNotSharenetwork" class="action-btn btn btn-secondary border" data-bs-toggle="modal"
          data-bs-target="#shareModal">
          <span v-b-tooltip.hover class="h-100 w-100 d-block" :title="$t('streamTooltip.share')">
            <i class="ph ph-share-network"></i>
          </span>
        </button>

        <button v-if="!isNotPlaylistbtn" class="btn btn-secondary action-btn border" data-bs-toggle="modal"
          data-bs-target="#playlistModal">
          <span v-b-tooltip.hover class="h-100 w-100 d-block" :title="$t('streamTooltip.playlist')">
            <i class="ph ph-playlist"></i>
          </span>
        </button>

        <button v-if="!isNotdownloadbtn" class="btn btn-secondary action-btn border" data-bs-toggle="modal"
          data-bs-target="#downloadModal">
          <span v-b-tooltip.hover class="h-100 w-100 d-block" :title="$t('streamTooltip.download')">
            <i class="ph ph-download-simple"></i>
          </span>
        </button>
      </div>
    </div>

    <!-- Modals -->
    <PlaylistModal />
    <ShareModal />
    <DownloadModal />
    <DetailsDescriptionModal :istexture-title="istextureTitle" :movie-name="$t(movieName)"
      :movie-released="movieReleased" :movie-duration="movieDuration" :movie-views="movieViews"
      :is-not-clockduration="isNotClockduration" :is-notimdb-rating="isNotimdbRating" :imdb-rating="imdbRating"
      :is-episodepage="isEpisodepage" :description="movieDescription || 'streamMovies.episode52_desc'" />

  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { te } = useI18n();

function isTranslationKey(key) {
  return typeof key === 'string' && te(key);
}
import { ref } from 'vue';
import { generateImgPath } from '../StaticData/data';
import PlaylistModal from '../components/widgets/PlaylistModal.vue';
import ShareModal from '../components/widgets/ShareModal.vue';
import DownloadModal from '../components/widgets/DownloadModal.vue';
import DetailsDescriptionModal from './widgets/DetailsDescriptionModal.vue';

const isLiked = ref(false);

function toggleLike() {
  isLiked.value = !isLiked.value;
}

defineProps({
  istextureTitle: {
    type: Boolean,
    default: false,
  },
  path: {
    type: String,
    default: '',
  },
  movieTags: {
    type: Array,
    default: () => [],
  },
  movieName: {
    type: String,
    default: '',
  },
  movieReleased: {
    type: String,
    default: '',
  },
  movieViews: {
    type: [String, Number],
    default: '',
  },
  imdbRating: {
    type: [String, Number],
    default: '',
  },
  isEpisodepage: {
    type: Boolean,
    default: false,
  },
  movieDescription: {
    type: String,
    default: '',
  },
  movieDuration: {
    type: String,
    default: '',
  },
  movieType: {
    type: String,
    default: '',
  },
  movieLanguage: {
    type: String,
    default: '',
  },
  viewNumber: {
    type: String,
    default: '',
  },
  isnotmovieTitle: {
    type: Boolean,
    default: false,
  },
  isVideoPageData: {
    type: Boolean,
    default: false,
  },
  isNotClockduration: {
    type: Boolean,
    default: false,
  },
  isNotimdbRating: {
    type: Boolean,
    default: false,
  },
  isNotTVShowbadge: {
    type: Boolean,
    default: false,
  },
  isNotstartWatching: {
    type: Boolean,
    default: false,
  },
  isNotwatchList: {
    type: Boolean,
    default: false,
  },
  isNotLikemovies: {
    type: Boolean,
    default: false,
  },
  isNotSharenetwork: {
    type: Boolean,
    default: false,
  },
  isNotPlaylistbtn: {
    type: Boolean,
    default: false,
  },
  isNotdownloadbtn: {
    type: Boolean,
    default: false,
  },
  subscribeToWatch: {
    type: Boolean,
    default: false,
  },
  videoUrl: {
    type: [String, Object],
    default: '',
  },
});
</script>
