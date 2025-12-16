<template>
  <section class="section-padding">
    <b-container fluid>
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h4 class="main-title text-capitalize mb-0">{{ $t('sectionTitle.movie_genres') }}</h4>
      </div>
      <b-row class="genres-grid gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <b-col v-for="data in list.slice(0, 7)" :key="data">
          <GenersCard :slug="data.slug" :title="$t(data.title)" :image="data.thumbnail" :type="data.type"></GenersCard>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <section class="section-padding-bottom">
    <b-container fluid>
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h4 class="main-title text-capitalize mb-0">{{ $t('streamPages.tv_show_genres') }}</h4>
      </div>
      <b-row class="genres-grid gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <b-col v-for="data in tvShowList.slice(0, 7)" :key="data">
          <GenersCard :slug="data.slug" :title="$t(data.title)" :image="data.thumbnail" :type="data.type"></GenersCard>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <section class="section-padding-bottom">
    <b-container fluid>
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h4 class="main-title text-capitalize mb-0">{{ $t('streamPages.video_genres') }}</h4>
      </div>
      <b-row class="genres-grid gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <b-col v-for="data in videoList.slice(0, 7)" :key="data">
          <GenersCard :slug="data.slug" :title="$t(data.title)" :image="data.thumbnail" :type="data.type"></GenersCard>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup>
import GenersCard from '../components/cards/GenersCard.vue';
import { geners, tvShowGenres, videoGenres } from '../StaticData/data';
const list = geners;
const tvShowList = tvShowGenres;
const videoList = videoGenres;
</script>
