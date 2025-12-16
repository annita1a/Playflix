<template>
  <section>
    <HomeHeroSlider></HomeHeroSlider>
  </section>

  <b-container fluid>
    <div class="overflow-hidden">
      <section class="continue-watching-block home-continue-watch section-padding-top">
        <ContinueWatching></ContinueWatching>
      </section>

      <UpcomingMovies :notview-all-btn="true" :view="true ? $t('sectionTitle.view_all') : null" :slides-per-view="6" :list="upcommingHomeMovie"></UpcomingMovies>

      <FreshPicksJustForYou :title="$t('sectionTitle.best_in_tv')" :list="bestInTV"></FreshPicksJustForYou>

      <LatestMovies :slider-data="latestMovie" :notview-all-btn="true"></LatestMovies>
    </div>
  </b-container>

  <VerticalSectionSlider :slider-data="ottVerticleLatestMovies"></VerticalSectionSlider>

  <b-container fluid>
    <div class="overflow-hidden">
      <SuggestedBlock :title="$t('sectionTitle.suggested_block')" :notview-all-btn="true"></SuggestedBlock>
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
import HomeHeroSlider from "~/components/slider/HomeHeroSlider.vue";

// Sections
import TrendingSection from "~/components/sections/TrendingSection.vue";
import ContinueWatching from "~/components/sections/ContinueWatching.vue";
import UpcomingMovies from "~/components/sections/UpcomingMovies.vue";
import LatestMovies from "~/components/sections/LatestMovies.vue";
import SuggestedBlock from "~/components/sections/SuggestedBlock.vue";
import RecommendedTVShow from "~/components/sections/RecommendedTVShow.vue";
import ParallexSection from "~/components/sections/ParallexSection.vue";
import VerticalSectionSlider from "~/components/slider/VerticalSectionSlider.vue";

import { ottVerticleLatestMovies, latestMovie, upcommingHomeMovie, bestInTV } from "~/StaticData/data";

import FreshPicksJustForYou from "~/components/sections/FreshPicksJustForYou.vue";

</script>
