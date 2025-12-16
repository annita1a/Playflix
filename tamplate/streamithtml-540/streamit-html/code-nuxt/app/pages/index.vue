<template>
  <OttHeroSlider />

  <b-container fluid>
    <div class="overflow-hidden">
      <section class="continue-watching-block home-continue-watch section-padding-top">
        <ContinueWatching></ContinueWatching>
      </section>

      <TopTenMoviesToWatch :wrapper-class="true"/>

      <OnlyOnStreamit/>

      <FreshPicksJustForYou/>
      <UpcomingMovies/>

      <!-- <LatestMovies/> -->
    </div>
  </b-container>

  <VerticalSectionSlider :slider-data="ottVerticleLatestMovies"/>

  <b-container fluid>
    <div class="overflow-hidden">
      <YourFavouritePersonality />

      <PopularMovies />
    </div>
  </b-container>

  <TabSlider :wrapper-class="true"></TabSlider>

  <b-container fluid>
    <div class="overflow-hidden">
      <div class="movie-geners-block">
        <MovieGeners padding-top="paddingTop" />
      </div>

      <RecommendedForYou />

      <TopPicsForYou />
    </div>
  </b-container>
</template>
<script setup>
// Hero Slider
import OttHeroSlider from '~/components/slider/OttHeroSlider.vue';

// Sections
import ContinueWatching from '~/components/sections/ContinueWatching.vue';
import UpcomingMovies from '~/components/sections/UpcomingMovies.vue';
// import LatestMovies from '~/components/sections/LatestMovies.vue';
import VerticalSectionSlider from '~/components/slider/VerticalSectionSlider.vue';

import { ottVerticleLatestMovies } from '~/StaticData/data';
import FreshPicksJustForYou from '~/components/sections/FreshPicksJustForYou.vue';
import YourFavouritePersonality from '~/components/sections/YourFavouritePersonality.vue';
import PopularMovies from '~/components/sections/PopularMovies.vue';
import MovieGeners from '~/components/sections/MovieGeners.vue';
import RecommendedForYou from '~/components/sections/RecommendedForYou.vue';
import TopPicsForYou from '~/components/sections/TopPicsForYou.vue';
import TopTenMoviesToWatch from '~/components/sections/TopTenMoviesToWatch.vue';
import OnlyOnStreamit from '~/components/sections/OnlyOnStreamit.vue';
import TabSlider from '~/components/sections/TabSlider.vue';
</script>
