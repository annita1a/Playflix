<template>
  <TvShowHeroSlider></TvShowHeroSlider>

  <b-container fluid>
    <div class="overflow-hidden">
      <TopTenTVshowToWatch/>

      <TVPopularShows/>

      <UpcomingTvShows :loop="false"/>

      <BestOfInternationalShows/>

      <ShowsWeRecommend :loop="false"/>
    </div>
  </b-container>
</template>

<script setup>
// Hero Slider
import TvShowHeroSlider from "~/components/slider/TvShowHeroSlider.vue";

// sections
import TVPopularShows from "~/components/sections/TVPopularShows.vue";
import BestOfInternationalShows from "~/components/sections/BestOfInternationalShows.vue";
import ShowsWeRecommend from "~/components/sections/ShowsWeRecommend.vue";
import UpcomingTvShows from "~/components/sections/UpcomingTvShows.vue";

import { onMounted } from "vue";
import { useStremit } from "../../store/streamit";

const store = useStremit();

onMounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});

</script>
