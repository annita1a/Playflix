<template>
  <!-- Continue watching start -->
  <SectionSlider
    :title="$t(title)" :list="watching" :slides-per-view="6" class="streamit-block"
    margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0" :wrapper-class="true">
    <template #default="{ data }">
      <continue-watch-card
        :image-path="data.image" :progress-value="data.value" :data-left-time="data.leftTime"
        :link="{ path: '/movies-detail' }" :watch-movie-date="data.watchMovieDate" :watch-movie-title="data.watchMovieTitle"></continue-watch-card>
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
  props: {
  paddingTop: {
    type: String,
    default: ''
  },
  notWantMoreBtn: {
    type: Boolean,
    default: false
  }
},
}); 

const title = ref('sectionTitle.continue_watching');

const watching = ref([
    {
      image: generateImgPath("/assets/images/media/gameofhero.webp"),
      value: 50,
      leftTime: "70 m",
      watchMovieTitle:"streamMovies.game_of_heros",
      watchMovieDate:"Jun-2025"
    },
    {
      image: generateImgPath("/assets/images/media/the-first-of-us.webp"),
      value: 30,
      leftTime: "120 m",
      watchMovieTitle:"streamMovies.the_first_of_us",
      watchMovieDate:"Jun-2025"
    },
    {
      image: generateImgPath("/assets/images/media/the-co-noueriing.webp"),
      value: 20,
      leftTime: "60 m",
      watchMovieTitle:"streamMovies.the_co_noueriing",
      watchMovieDate:"Nov-2024"
    },
    {
      image: generateImgPath("/assets/images/media/giirek.webp"),
      value: 45,
      leftTime: "60 m",
      watchMovieTitle:"streamMovies.giikre",
      watchMovieDate:"Dec-2024"
    },
    {
      image: generateImgPath("/assets/images/media/rabbit.webp"),
      value: 70,
      leftTime: "45 m",
      watchMovieTitle:"streamMovies.rabbit",
      watchMovieDate:"May-2025"
    },
    {
      image: generateImgPath("/assets/images/media/jumanjj.webp"),
      value: 80,
      leftTime: "70 m",
      watchMovieTitle:"streamMovies.jumanji",
      watchMovieDate:"March, 2025"
    },
    {
      image: generateImgPath("/assets/images/media/chosfies.webp"),
      value: 80,
      leftTime: "70 m",
      watchMovieTitle:"streamMovies.chosfies",
      watchMovieDate:"May, 2025"
    }
]);
</script>
