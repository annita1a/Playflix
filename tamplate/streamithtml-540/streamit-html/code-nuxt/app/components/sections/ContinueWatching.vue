<template>
  <!-- Continue watching start -->
  <SectionSlider v-if="homeContinueWatch" :title="$t(title)" :list="watchingHome" :loop="false" :slides-per-view="6"
    class="streamit-block" margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0" :wrapper-class="true">
    <template #default="{ data }">
      <continue-watch-card :image-path="data.image" :progress-value="data.value" :data-left-time="data.leftTime"
        :watch-movie-date="data.watchMovieDate" :watch-movie-title="data.watchMovieTitle"></continue-watch-card>
    </template>
  </SectionSlider>
  <SectionSlider v-else :title="$t(title)" :list="watchingOtthome" :loop="false" :slides-per-view="6"
    class="streamit-block" margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0" :wrapper-class="true">
    <template #default="{ data }">
      <continue-watch-card :image-path="data.image" :progress-value="data.value" :data-left-time="data.leftTime"
        :watch-movie-date="data.watchMovieDate" :watch-movie-title="data.watchMovieTitle"></continue-watch-card>
    </template>
  </SectionSlider>
  <!-- Continue watching end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import ContinueWatchCard from '../../components/cards/ContinueWatchCard.vue';
import { generateImgPath } from '../../StaticData/data';

defineProps({
  paddingTop: { type: String, default: '' },
  homeContinueWatch: { type: Boolean, default: false }
});

const title = ref('sectionTitle.continue_watching');

const watchingHome = ref([
  {
    image: generateImgPath('/assets/images/media/minions-portrait.webp'),
    value: 50,
    watchMovieTitle: 'streamMovies.minions',
    watchMovieDate: 'Dec-2024',
    leftTime: '70',
  },
  {
    image: generateImgPath('/assets/images/media/yoshi-banner.webp'),
    value: 30,
    watchMovieTitle: 'streamMovies.yoshi_small',
    watchMovieDate: 'Dec-2023',
    leftTime: '120',
  },
  {
    image: generateImgPath('/assets/images/media/joker.webp'),
    value: 90,
    watchMovieTitle: 'streamMovies.joker',
    watchMovieDate: 'Jan-2025',
    leftTime: '60',
  },
  {
    image: generateImgPath('/assets/images/media/the-co-noueriing.webp'),
    value: 20,
    watchMovieTitle: 'streamMovies.the_hunter',
    watchMovieDate: 'Nov-2024',
    leftTime: '60',
  },
  {
    image: generateImgPath('/assets/images/media/krishna.webp'),
    value: 20,
    watchMovieTitle: 'streamMovies.krishna',
    watchMovieDate: 'Aug-2023',
    leftTime: '45',
  },
  {
    image: generateImgPath('/assets/images/media/gameofhero.webp'),
    value: 50,
    watchMovieTitle: 'streamMovies.game_of_heros',
    watchMovieDate: 'Feb-2025',
    leftTime: '70',
  },
]);

const watchingOtthome = ref([
  {
    image: generateImgPath('/assets/images/media/gameofhero.webp'),
    value: 50,
    watchMovieTitle: 'streamMovies.game_of_heros',
    watchMovieDate: 'Jun-2025',
    leftTime: '70',
  },
  {
    image: generateImgPath('/assets/images/media/the-first-of-us.webp'),
    value: 30,
    watchMovieTitle: 'streamMovies.the_first_of_us',
    watchMovieDate: 'Jun-2025',
    leftTime: '120',
  },
  {
    image: generateImgPath('/assets/images/media/the-co-noueriing.webp'),
    value: 20,
    watchMovieTitle: 'streamMovies.the_hunter',
    watchMovieDate: 'Dec-2024',
    leftTime: '60',
  },
  {
    image: generateImgPath('/assets/images/media/giirek.webp'),
    value: 20,
    watchMovieTitle: 'streamMovies.giikre',
    watchMovieDate: 'Dec-2024',
    leftTime: '45',
  },
  {
    image: generateImgPath('/assets/images/media/rabbit.webp'),
    value: 50,
    watchMovieTitle: 'streamMovies.rabbit',
    watchMovieDate: 'May-2025',
    leftTime: '70',
  },
  {
    image: generateImgPath('/assets/images/media/jumanjj.webp'),
    value: 80,
    watchMovieTitle: 'streamMovies.jumanji',
    watchMovieDate: 'March-2025',
    leftTime: '20',
  },
  {
    image: generateImgPath('/assets/images/media/chosfies.webp'),
    value: 10,
    watchMovieTitle: 'streamMovies.chosfies',
    watchMovieDate: 'May-2025',
    leftTime: '80',
  },
  {
    image: generateImgPath('/assets/images/media/john-wick.webp'),
    value: 10,
    watchMovieTitle: 'streamMovies.john_wick',
    watchMovieDate: 'Jan-2025',
    leftTime: '60',
  },
  {
    image: generateImgPath('/assets/images/media/fast-furious.webp'),
    value: 10,
    watchMovieTitle: 'streamMovies.fast_&_furious',
    watchMovieDate: 'Feb-2025',
    leftTime: '10',
  },
  {
    image: generateImgPath('/assets/images/media/venom.webp'),
    value: 10,
    watchMovieTitle: 'streamMovies.venom',
    watchMovieDate: 'Dec-2024',
    leftTime: '10',
  },
  {
    image: generateImgPath('/assets/images/media/krishna.webp'),
    value: 10,
    watchMovieTitle: 'streamMovies.krishna',
    watchMovieDate: 'Nav-2025',
    leftTime: '30',
  },
  {
    image: generateImgPath('/assets/images/media/deadpool.webp'),
    value: 10,
    watchMovieTitle: 'streamMovies.deadpool',
    watchMovieDate: 'Jul-2025',
    leftTime: '50',
  },
]);
</script>
