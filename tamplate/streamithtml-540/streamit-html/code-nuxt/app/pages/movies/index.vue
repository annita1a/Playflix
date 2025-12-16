<template>
  <MovieHeroSlider />

  <b-container fluid>
    <div class="overflow-hidden">
      <TopTenMoviesToWatch/>

      <PopularMovies :notview-all-btn="true" :list="populerSliderMovies" :loop="false"/>

      <UpcomingMovies :notview-all-btn="true" :list="upcommingMovieMovies"/>

      <SpecialsLatestMovies :notview-all-btn="true" :loop="false"/>

      <MoviesRecommendedForYou :notview-all-btn="true" :slides-per-view="6" :list="recommendedforYouMovies" :loop="false"/>
    </div>
  </b-container>
</template>

<script setup>
// Hero Slider
import MovieHeroSlider from "~/components/slider/MovieHeroSlider.vue";

// Sections
import PopularMovies from "~/components/sections/PopularMovies.vue";
import SpecialsLatestMovies from "~/components/sections/Specials&LatestMovies.vue";
import MoviesRecommendedForYou from "~/components/sections/MoviesRecommendedForYou.vue";
// import { useEnterExit } from "~/utilities/usePage";

import { onMounted } from "vue";
import { useStremit } from "../../store/streamit";
import TopTenMoviesToWatch from "~/components/sections/TopTenMoviesToWatch.vue";
import UpcomingMovies from "~/components/sections/UpcomingMovies.vue";
import { populerSliderMovies, upcommingMovieMovies, recommendedforYouMovies } from "~/StaticData/data";

const store = useStremit();

onMounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});

// useEnterExit();
</script>
