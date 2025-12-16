<template>
  <section>
    <HomeHeroSlider></HomeHeroSlider>
  </section>

  <b-container fluid>
    <div class="overflow-hidden">
      <section class="continue-watching-block home-continue-watch section-padding-top">
        <ContinueWatching></ContinueWatching>
      </section>

  <UpcomingMovies :notview-all-btn="true" :view="'sectionTitle.view_all'" :slides-per-view="6"></UpcomingMovies>

  <FreshPicksJustForYou :title="$t('sectionTitle.best_in_tv')"></FreshPicksJustForYou>

      <LatestMovies :slider-data="latestMovie" :notview-all-btn="true"></LatestMovies>
    </div>
  </b-container>

  <VerticalSectionSlider :slider-data="ottVerticleLatestMovies"></VerticalSectionSlider>

  <b-container fluid>
    <div class="overflow-hidden">
  <SuggestedBlock  :notview-all-btn="true"></SuggestedBlock>
    </div>
  </b-container>

  <ParallexSection></ParallexSection>

  <TrendingSection></TrendingSection>

  <b-container fluid>
    <div class="overflow-hidden">
      <RecommendedTVShow :notview-all-btn="true"></RecommendedTVShow>
    </div>
  </b-container>
</template>
<script setup>
// Hero Slider
import HomeHeroSlider from '../../components/slider/HomeHeroSlider.vue';

// Sections
import TrendingSection from '../../components/sections/TrendingSection.vue';
import ContinueWatching from '../../components/sections/ContinueWatching.vue';
import UpcomingMovies from '../../components/sections/UpcomingMovies.vue';
import LatestMovies from '../../components/sections/LatestMovies.vue';
import SuggestedBlock from '../../components/sections/SuggestedBlock.vue';
import RecommendedTVShow from '../../components/sections/RecommendedTVShow.vue';
import ParallexSection from '../../components/sections/ParallexSection.vue';
import VerticalSectionSlider from '../../components/slider/VerticalSectionSlider.vue';

import { ottVerticleLatestMovies, latestMovie } from '../../StaticData/data';
import FreshPicksJustForYou from '../../components/sections/FreshPicksJustForYou.vue';
</script>
