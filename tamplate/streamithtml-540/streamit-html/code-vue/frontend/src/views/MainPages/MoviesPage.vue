<template>
  <MovieHeroSlider></MovieHeroSlider>

  <b-container fluid>
    <div class="overflow-hidden">
           <TopTenToWatch  :data="top_ten_movie" :wrapper-class="true" ></TopTenToWatch>

      <PopularMovies :notview-all-btn="true"></PopularMovies>

      <UpcomingMovies :notview-all-btn="true"></UpcomingMovies>

      <SpecialsLatestMovies></SpecialsLatestMovies>

      <MoviesRecommendedForYou :notview-all-btn="true" :slides-per-view="6"></MoviesRecommendedForYou>
    </div>
  </b-container>
</template>
<script setup>
import { top_ten_movie } from '../../StaticData/data';
// Hero Slider
import MovieHeroSlider from '../../components/slider/MovieHeroSlider.vue';

// Sections
import TopTenToWatch from '../../components/sections/TopTenToWatch.vue';
import PopularMovies from '../../components/sections/PopularMovies.vue';
import UpcomingMovies from '../../components/sections/UpcomingMovies.vue';
import SpecialsLatestMovies from '../../components/sections/Specials&LatestMovies.vue';
import MoviesRecommendedForYou from '../../components/sections/MoviesRecommendedForYou.vue';
</script>
