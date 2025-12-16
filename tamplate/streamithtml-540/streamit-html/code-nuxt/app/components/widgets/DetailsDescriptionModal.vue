<template>
  <div>
    <!-- Episode Page Modal -->
    <div
      v-if="isEpisodepage"
      id="viewMoreDataModal"
      class="modal fade view-more-data-modal"
      tabindex="-1"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header pb-0">
            <template v-if="istextureTitle">
              <h3 class="text-uppercase m-0 texture-text texture-text-modal fw-bold">{{$t(movieName) }}</h3>
            </template>
            <template v-else>
              <h5 class="css_prefix-title text-capitalize line-count-1">
                <a href="#" class="color-inherit">{{$t(movieName) }}</a>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </template>
          </div>
          <div class="modal-body pt-1">
            <ul class="list-inline d-flex align-items-center flex-wrap gap-3 mt-4">
              <li>
                <span class="fw-medium">{{ movieReleased }}</span>
              </li>
              <li v-if="!isNotClockduration">
                <span class="d-flex align-items-center gap-1">
                  <span class="d-flex align-items-center justify-content-center"><i class="ph ph-clock"></i></span>
                  {{ movieDuration }}
                </span>
              </li>
              <li>
                <span class="d-flex align-items-center gap-1">
                  <i class="icon-eye-2"></i> {{ movieViews }}
                </span>
              </li>
              <li v-if="!isNotimdbRating">
                <span class="d-flex align-items-center gap-1">
                  <span class="fw-medium">{{ imdbRating }}</span>
                  <span class="imdb-logo ms-1">
                    <img src="/assets/images/pages/imdb-logo.svg" loading="lazy" decoding="async" alt="imdb logo" class="img-fluid imdb-logo1" />
                  </span>
                </span>
              </li>
            </ul>

            <div v-if="isCategory" class="d-flex align-items-baseline flex-wrap gap-2 mt-md-1 mt-2">
              <h6 class="m-0">Category:</h6>
              <ul class="p-0 mb-0 list-inline d-flex flex-wrap movie-tag">
                <li v-for="cat in categories" :key="cat" class="trending-list">
                  <a href="#">{{ cat }}</a>
                </li>
              </ul>
            </div>

            <div v-if="isTag" class="d-flex align-items-baseline flex-wrap gap-2 mt-3">
              <h6 class="m-0">{{$t('streamPages.tags')}}:</h6>
              <ul class="iq-blog-meta-cat-tag iq-blogtag mb-0 list-inline d-flex flex-wrap align-items-center gap-1 gap-md-3 mt-2 mt-md-3 tvshow-tags">
                <li v-for="tag in tags" :key="tag">
                  <a href="#" class="position-relative">{{ tag }}</a>
                </li>
              </ul>
            </div>

            <div v-if="isLanguadge" class="mt-4">
              <div class="d-flex align-items-center gap-1">
                <i class="icon-translate"></i>
                <ul class="list-inline m-0 d-inline-flex align-items-center gap-2">
                  <li><small>{{ language }}</small></li>
                </ul>
              </div>
            </div>

            <p class="mt-4 mb-0">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Default Modal (not episode page) -->
    <div
      v-else
      id="viewMoreDataModal"
      class="modal fade view-more-data-modal trending-info"
      tabindex="-1"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header pb-0">
            <h3 class="text-uppercase m-0 texture-text texture-text-modal fw-bold">{{ movieName }}</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body pt-1">
            <ul class="list-inline d-flex align-items-center flex-wrap gap-3 mt-4">
              <li>
                <span class="fw-medium">{{ movieReleased }}</span>
              </li>
              <li>
                <span class="d-flex align-items-center gap-1">
                  <i class="icon-eye-2"></i> {{ movieViews }}
                </span>
              </li>
              <li v-if="moviedurettion">
                <span class="d-flex align-items-center gap-1">
                  <i class="ph ph-clock"></i> {{ time }}
                </span>
              </li>
              <li v-if="!isNotimdbRating">
                <span class="d-flex align-items-center gap-1">
                  <span class="fw-medium">{{ imdbRating }}</span>
                  <span class="imdb-logo ms-1">
                    <img src="/assets/images/pages/imdb-logo.svg" loading="lazy" decoding="async" alt="imdb logo" class="img-fluid imdb-logo1" />
                  </span>
                </span>
              </li>
            </ul>

            <div class="d-flex align-items-baseline flex-wrap gap-2 mt-md-1 mt-2">
              <h6 class="m-0">{{$t('streamGenres.genre')}}:</h6>
              <ul class="p-0 mb-0 list-inline d-flex flex-wrap movie-tag">
                <li v-for="genre in genres" :key="genre" class="trending-list">
                  <a href="#">{{ $t(genre) }}</a>
                </li>
              </ul>
            </div>

            <div class="d-flex align-items-baseline flex-wrap gap-2 mt-3">
              <h6 class="m-0">{{$t('streamPages.tags')}}:</h6>
              <ul class="iq-blog-meta-cat-tag iq-blogtag mb-0 list-inline d-flex flex-wrap align-items-center gap-1 gap-md-3 mt-2 mt-md-3 tvshow-tags">
                <li v-for="tag in tags" :key="tag">
                  <a href="#" class="position-relative">{{ $t(tag) }}</a>
                </li>
              </ul>
            </div>

            <div class="mt-4">
              <div class="d-flex align-items-center gap-1">
                <i class="icon-translate"></i>
                <ul class="list-inline m-0 d-inline-flex align-items-center gap-2">
                  <li><small>{{ language }}</small></li>
                </ul>
              </div>
            </div>

            <p class="mt-4 mb-0">
              {{ $t(description) }}
            </p>

            <div class="d-flex align-items-baseline row-gap-1 column-gap-2 mt-4">
              <h6 class="m-0">{{$t('streamPages.cast')}}:</h6>
              <ul class="list-inline m-0 p-0 d-flex align-items-center flex-wrap row-gap-1 column-gap-2 cast-crew-list">
                <li v-for="cast in castList" :key="cast">
                  <a href="#" class="color-inherit">{{ $t(cast) }}</a>
                </li>
              </ul>
            </div>

            <div class="d-flex align-items-baseline row-gap-1 column-gap-2 mt-4">
              <h6 class="m-0">{{$t('sectionTitle.crew')}}:</h6>
              <ul class="list-inline m-0 p-0 d-flex align-items-center flex-wrap row-gap-1 column-gap-2 cast-crew-list">
                <li v-for="crew in crewList" :key="crew">
                  <a href="#" class="color-inherit">{{ $t(crew) }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isEpisodepage: {
    type: Boolean,
    default: false
  },
  istextureTitle: {
    type: Boolean,
    default: false
  },
  movieName: {
    type: String,
    default: ''
  },
  movieReleased: {
    type: [String, Number],
    default: ''
  },
  isNotClockduration: {
    type: Boolean,
    default: false
  },
  movieDuration: {
    type: String,
    default: ''
  },
  movieViews: {
    type: [String, Number],
    default: ''
  },
  isNotimdbRating: {
    type: Boolean,
    default: false
  },
  imdbRating: {
    type: [String, Number],
    default: ''
  },
  isCategory: {
    type: Boolean,
    default: false
  },
  categories: {
    type: Array,
    default: () => ['streamTag.adventure', 'streamTag.animation', 'streamTag.crime'],
  },
  isTag: {
    type: Boolean,
    default: false
  },
  tags: {
    type: Array,
    default: () => [
      'streamTag.agents',
      'streamTag.brother',
      'streamTag.cricket',
      'streamTag.drama',
      'streamTag.hitman',
      'streamTag.kings',
    ],
  },
  isLanguadge: {
    type: Boolean,
    default: false
  },
  language: {
    type: String,
    default: 'English (UK)',
  },
  description: {
    type: String,
    default: 'streamMovies.game_of_heros_desc',
  },
  moviedurettion: {
    type: Boolean,
    default: false
  },
  time: {
    type: String,
    default: ''
  },
  genres: {
    type: Array,
    default: () => [
      'streamGenres.adventure',
      'streamGenres.animation',
      'streamGenres.crime',
      'streamGenres.horror',
      'streamGenres.romance',
  ],
  },
  castList: {
    type: Array,
    default: () => [
      'favouritePersonalities.olivia_foster',
      'favouritePersonalities.Leena_Burton',
      'favouritePersonalities.Ryan_Pierce',
      'favouritePersonalities.michael_fox',
      'favouritePersonalities.ruby_scott',
      'favouritePersonalities.maxwell_carter',
      'favouritePersonalities.mark_smith',
      'favouritePersonalities.ava_monroe',
      'favouritePersonalities.charles_melton',
      'favouritePersonalities.jack_nicholson',
      'favouritePersonalities.james_stewart',
      'favouritePersonalities.jeff_bridges',
      'favouritePersonalities.jordan_grant',  
    ],
  },
  crewList: {
    type: Array,
    default: () => [
      'favouritePersonalities.maria_rodriguez',
      'favouritePersonalities.ethan_crawford',
      'favouritePersonalities.benjamin_hayes',
      'favouritePersonalities.jack_walker',
      'favouritePersonalities.mark_smith',
      'favouritePersonalities.millar_joseph',
      'favouritePersonalities.smith_jonas',
      'favouritePersonalities.kelly_reilly',
      'favouritePersonalities.thomas_bailey',
      'favouritePersonalities.davina_decorous',
      'favouritePersonalities.john_abraham',
    ],
  }
});
</script>