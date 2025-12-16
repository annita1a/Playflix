<template>
  <VideoHeroSlider></VideoHeroSlider>

  <b-container fluid>
    <div class="overflow-hidden">
      <TopTenToWatch :title="$t('sectionTitle.top_10_video_to_watch')" :data="top_ten_video" :prime="true"></TopTenToWatch>

      <PopularVideos></PopularVideos>

      <UpcomingVideos></UpcomingVideos>

      <SpecialsLatestVideos></SpecialsLatestVideos>

      <VideosRecommendedForYou></VideosRecommendedForYou>
    </div>
  </b-container>
</template>
<script setup>
// Hero Slider
import VideoHeroSlider from '../../components/slider/VideoHeroSlider.vue';

// sections
import PopularVideos from '../../components/sections/PopularVideos.vue';
import TopTenToWatch from '../../components/sections/TopTenToWatch.vue';
import SpecialsLatestVideos from '../../components/sections/Specials&LatestVideos.vue';
import UpcomingVideos from '../../components/sections/UpcomingVideos.vue';
import VideosRecommendedForYou from '../../components/sections/VideosRecommendedForYou.vue';

// StaticData
import { top_ten_video } from '../../StaticData/data';
</script>
