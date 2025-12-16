<template>
  <VideoHeroSlider/>

<b-container fluid>
  <div class="overflow-hidden">
    <TopTenMoviesToWatch :title="$t('sectionTitle.top_10_video_to_watch')" :padding-top="true" :prime="true" :list="topTenVideoPage"/>

    <PopularVideos :loop="false"/>

    <UpcomingVideos :loop="false"/>

    <SpecialsLatestVideos :loop="false"/>

    <VideosRecommendedForYou :loop="false"/>
  </div>
</b-container>
</template>

<script setup>
// Hero Slider
import VideoHeroSlider from "../../components/slider/VideoHeroSlider.vue";

// sections
import PopularVideos from "../../components/sections/PopularVideos.vue";
import VideosRecommendedForYou from "../../components/sections/VideosRecommendedForYou.vue";
import UpcomingVideos from "~/components/sections/UpcomingVideos.vue";
import SpecialsLatestVideos from "~/components/sections/Specials&LatestVideos.vue";
import TopTenMoviesToWatch from "~/components/sections/TopTenMoviesToWatch.vue";
import { topTenVideoPage } from "~/StaticData/data";
</script>
