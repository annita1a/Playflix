<template>
  <div>
    <!-- Movie Tags -->
    <section v-if="activeSection === 'movie'" class="section-padding">
      <b-container fluid>
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h4 class="main-title text-capitalize mb-0">{{$t('streamPages.movie_tag')}}</h4>
        </div>
        <b-row class="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 data-listing">
          <b-col v-for="tag in movieTags.slice(0, movieLimit)" :key="tag.title">
            <TagsCard :title="$t(tag.title)" :tag-url="tag.url"/>
          </b-col>
        </b-row>
        <div v-if="movieLimit < movieTags.length" class="text-center mt-4">
          <div class="iq-button">
            <a href="javascript:void(0)" class="btn text-uppercase position-relative custom-button load-more-btn" @click="movieLimit += loadStep">
              <span class="button-text">{{$t('streamButtons.load_more')}}</span>
              <i class="ph-fill ph-play"></i>
            </a>
          </div>  
        </div>
      </b-container>
    </section>

    <!-- TV Show Tags -->
    <section v-else-if="activeSection === 'tvshow'" class="section-padding">
      <b-container fluid>
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h4 class="main-title text-capitalize mb-0">{{$t('streamPages.tv_show_tag')}}</h4>
        </div>
        <b-row class="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 data-listing">
          <b-col v-for="tag in tvShowTags.slice(0, tvShowLimit)" :key="tag.title">
            <TagsCard :title="$t(tag.title)" :tag-url="tag.url"/>
          </b-col>
        </b-row>
        <div v-if="tvShowLimit < tvShowTags.length" class="text-center mt-4">
          <div class="iq-button">
            <a href="javascript:void(0)" class="btn text-uppercase position-relative custom-button load-more-btn" @click="tvShowLimit += loadStep">
              <span class="button-text">{{$t('streamButtons.load_more')}}</span>
              <i class="ph-fill ph-play"></i>
            </a>
          </div>
        </div>
      </b-container>
    </section>

    <!-- Video Tags -->
    <section v-else-if="activeSection === 'video'" class="section-padding">
      <b-container fluid>
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h4 class="main-title text-capitalize mb-0">{{$t('streamPages.video_tag')}}</h4>
        </div>
        <b-row class="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 data-listing">
          <b-col v-for="tag in videoTags.slice(0, videoLimit)" :key="tag.title">
            <TagsCard :title="$t(tag.title)"/>
          </b-col>
        </b-row>
        <div v-if="videoLimit < videoTags.length" class="text-center mt-4">
          <div class="iq-button">
            <a href="javascript:void(0)" class="btn text-uppercase position-relative custom-button load-more-btn" @click="videoLimit += loadStep">
              <span class="button-text">{{$t('streamButtons.load_more')}}</span>
              <i class="ph-fill ph-play"></i>
            </a>
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import TagsCard from '../components/cards/TagsCard.vue';

const route = useRoute();
const activeSection = ref('movie');

// Tag data arrays
const movieTags = [
  { title: 'streamGenres.action' },
  { title: 'streamGenres.adventure' },
  { title: 'streamGenres.animation' },
  { title: 'streamGenres.comedy' },
  { title: 'streamGenres.drama' },
  { title: 'streamGenres.family' },
  { title: 'streamGenres.fantasy' },
  { title: 'streamGenres.horror' },
  { title: 'streamGenres.romance' },
  { title: 'streamGenres.thriller' }
];
const tvShowTags = [
  { title: 'streamGenres.action' },
  { title: 'streamGenres.adventure' },
  { title: 'streamGenres.animation' },
  { title: 'streamGenres.comedy' },
  { title: 'streamGenres.drama' },
  { title: 'streamGenres.family' },
  { title: 'streamGenres.fantasy' },
  { title: 'streamGenres.horror' },
  { title: 'streamGenres.romance' },
  { title: 'streamGenres.thriller' }
];
const videoTags = [
  { title: 'streamGenres.action' },
  { title: 'streamGenres.adventure' },
  { title: 'streamGenres.animation' },
  { title: 'streamGenres.comedy' },
  { title: 'streamGenres.crime' },
  { title: 'streamGenres.drama' },
  { title: 'streamGenres.family' },
  { title: 'streamGenres.fantasy' },
  { title: 'streamGenres.horror' },
  { title: 'streamGenres.romance' },
  { title: 'streamGenres.thriller' }
];

// Limits and step for "Load More"
const movieLimit = ref(5);
const tvShowLimit = ref(5);
const videoLimit = ref(8);
const loadStep = 5;

// Watch for route query changes to set active section
watch(
  () => route.query.type,
  (newType) => {
    if (['movie', 'tvshow', 'video'].includes(newType)) {
      activeSection.value = newType;
    }
  },
  { immediate: true }
);
</script>