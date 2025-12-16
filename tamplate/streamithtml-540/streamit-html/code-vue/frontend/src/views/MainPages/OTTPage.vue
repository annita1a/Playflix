<template>
  <OttHeroSlider></OttHeroSlider>

  <b-container fluid>
    <div class="overflow-hidden">
      <section class="continue-watching-block home-continue-watch section-padding-top">
        <ContinueWatching></ContinueWatching>
      </section>

      <TopTenToWatch  :data="top_ten_movie" :wrapper-class="true"></TopTenToWatch>

      <OnlyOnStreamit></OnlyOnStreamit>

      <FreshPicksJustForYou></FreshPicksJustForYou>

      <UpcomingMovies></UpcomingMovies>

    </div>
  </b-container>

  <VerticalSectionSlider :slider-data="ottVerticleLatestMovies"></VerticalSectionSlider>

  <b-container fluid>
    <div class="overflow-hidden">
      <YourFavouritePersonality></YourFavouritePersonality>

      <PopularMovies></PopularMovies>
    </div>
  </b-container>

  <TabSlider :wrapper-class="true"></TabSlider>

  <b-container fluid>
    <div class="overflow-hidden">
      <div class="movie-geners-block">
        <MovieGeners padding-top="paddingTop"></MovieGeners>
      </div>

      <RecommendedForYou :data="recommendedforYou" />

      <TopPicsForYou></TopPicsForYou>
    </div>
  </b-container>
</template>
<script setup>
// Hero Slider
import OttHeroSlider from '../../components/slider/OttHeroSlider.vue';

// Sections
import ContinueWatching from '../../components/sections/ContinueWatching.vue';
import TopTenToWatch from '../../components/sections/TopTenToWatch.vue';
import RecommendedForYou from '../../components/sections/RecommendedForYou.vue';
import OnlyOnStreamit from '../../components/sections/OnlyOnStreamit.vue';
import PopularMovies from '../../components/sections/PopularMovies.vue';
import YourFavouritePersonality from '../../components/sections/YourFavouritePersonality.vue';
import TopPicsForYou from '../../components/sections/TopPicsForYou.vue';
import VerticalSectionSlider from '../../components/slider/VerticalSectionSlider.vue';
import TabSlider from '../../components/sections/TabSlider.vue';
import MovieGeners from '../../components/sections/MovieGeners.vue';
import UpcomingMovies from '../../components/sections/UpcomingMovies.vue';
import FreshPicksJustForYou from '../../components/sections/FreshPicksJustForYou.vue';
// StaticData
import { top_ten_movie, ottVerticleLatestMovies, recommendedforYou } from '../../StaticData/data';
</script>
