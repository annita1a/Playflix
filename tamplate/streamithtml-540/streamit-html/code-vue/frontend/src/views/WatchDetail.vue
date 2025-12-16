<template>
  <section class="section-padding">
    <b-container fluid>
      <b-col md="12">
        <div class="border-bottom mb-5 watchlist-tab">
          <div id="item-nav">
            <div id="object-nav" class="item-list-tabs no-ajax css_prefix-tab-lists">

              <!-- Watchlist Tabs -->
              <ul id="pills-tab" class="nav nav-underline data-search-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
id="pills-movie-tab" class="nav-link active" data-bs-toggle="pill"
                    data-bs-target="#pills-movie1" type="button" role="tab" aria-controls="pills-movie1"
                    aria-selected="true">
                    {{$t('streamPages.movie')}} </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
id="pills-video-tab" class="nav-link " data-bs-toggle="pill" data-bs-target="#pills-video1"
                    type="button" role="tab" aria-controls="pills-video1" aria-selected="false" tabindex="-1">
                    {{$t('streamPages.video')}} </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
id="pills-tvshow-tab" class="nav-link " data-bs-toggle="pill" data-bs-target="#pills-tvshow1"
                    type="button" role="tab" aria-controls="pills-tvshow1" aria-selected="false" tabindex="-1">
                    {{$t('streamPages.tv_show')}} </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
id="pills-episode-tab" class="nav-link " data-bs-toggle="pill"
                    data-bs-target="#pills-episode1" type="button" role="tab" aria-controls="pills-episode1"
                    aria-selected="false" tabindex="-1">
                    {{$t('streamKeyword.episodes')}} </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Playlist Tab Content -->
        <div id="pills-tabContent-watch" class="tab-content">
          <div
id="pills-movie1" class="tab-pane fade active show" role="tabpanel" tabindex="0"
            aria-labelledby="pills-movie-tab">
            <b-row
              class="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
              <b-col>
                <WatchlistDetailCard card-image="media/gameofhero.webp" movie-name="streamMovies.game_of_heros" />
              </b-col>
              <b-col>
                <WatchlistDetailCard card-image="media/rabbit.webp" movie-name="streamMovies.rabbit" />
              </b-col>
              <b-col>
                <WatchlistDetailCard card-image="media/migration.webp" movie-name="streamMovies.migration" />
              </b-col>
              <b-col>
                <WatchlistDetailCard card-image="media/krishna.webp" movie-name="streamMovies.krishna" />
              </b-col>
              <b-col>
                <WatchlistDetailCard card-image="media/jumanjj.webp" movie-name="streamMovies.jumanji" />
              </b-col>
              <b-col>
                <WatchlistDetailCard card-image="media/yoshi.webp" movie-name="streamMovies.yoshi" />
              </b-col>
              <b-col>
                <WatchlistDetailCard card-image="media/kung-fu-panda.webp" movie-name="streamMovies.kung_fu_panda" />
              </b-col>
              <b-col>
                <WatchlistDetailCard card-image="media/the-hunter.webp" movie-name="streamMovies.the_hunter" />
              </b-col>
            </b-row>
          </div>

          <div id="pills-video1" class="tab-pane fade" role="tabpanel" tabindex="0" aria-labelledby="pills-video-tab">
            <b-row
              class="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
              <b-col>
                <WatchlistDetailCard card-image="media/toddler.webp" movie-name="streamMovies.toddler" />
              </b-col>
            </b-row>
          </div>

          <div id="pills-tvshow1" class="tab-pane fade" role="tabpanel" tabindex="0">
            <b-row
              class="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
              <b-col>
                <WatchlistDetailCard card-image="media/the-first-of-us.webp" movie-name="streamEpisode.episode11" />
              </b-col>
              <b-col>
                <WatchlistDetailCard card-image="media/migration.webp" movie-name="streamEpisode.episode7" />
              </b-col>
              <b-col>
                <WatchlistDetailCard card-image="media/spiderman.webp" movie-name="streamEpisode.episode39" />
              </b-col>
              <b-col>
                <WatchlistDetailCard card-image="media/minions.webp" :movie-name="$t('streamMovies.minions')" />
              </b-col>
              <b-col>
                <WatchlistDetailCard
card-image="media/pirates-ofdayones-orignal.webp"
                  movie-name="streamMovies.pirates_of_day_one" />
              </b-col>
              <b-col>
                <WatchlistDetailCard card-image="media/assassins-creed.webp" movie-name="streamEpisode.episode55" />
              </b-col>
            </b-row>
          </div>

          <div
id="pills-episode1" class="tab-pane fade" role="tabpanel" tabindex="0"
            aria-labelledby="pills-episode-tab">
            <b-row class="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 ">
              <p class="text-center w-100">{{$t('streamPlaylist.no_watchlist_available')}}</p>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-container>
  </section>
</template>
<script setup>
import WatchlistDetailCard from '../components/widgets/WatchlistDetailCard.vue';
</script>
