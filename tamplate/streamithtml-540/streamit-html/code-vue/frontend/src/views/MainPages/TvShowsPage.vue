<template>
  <TvShowHeroSlider></TvShowHeroSlider>

  <b-container fluid>
    <div class="overflow-hidden">
      <TopTenToWatch  :data="top_ten_tvshow" :wrapper-class="true"></TopTenToWatch>
      <TVPopularShows></TVPopularShows>

      <UpcomingTvShows></UpcomingTvShows>

      <BestOfInternationalShows></BestOfInternationalShows>

      <ShowsWeRecommend></ShowsWeRecommend>
    </div>
  </b-container>
</template>
<script setup>
// Hero Slider
import TvShowHeroSlider from '../../components/slider/TvShowHeroSlider.vue';

// sections
import TopTenToWatch from '../../components/sections/TopTenToWatch.vue';
import TVPopularShows from '../../components/sections/TVPopularShows.vue';
import BestOfInternationalShows from '../../components/sections/BestOfInternationalShows.vue';
import ShowsWeRecommend from '../../components/sections/ShowsWeRecommend.vue';
import UpcomingTvShows from '../../components/sections/UpcomingTvShows.vue';

// StaticData
import { top_ten_tvshow } from '../../StaticData/data';
console.log(top_ten_tvshow);

</script>
