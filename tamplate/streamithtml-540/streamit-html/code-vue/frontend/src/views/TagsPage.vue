<template>
  <div>
    <section class="section-padding">
      <b-container fluid>
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h4 class="main-title text-capitalize mb-0">{{ $t('streamPages.movie_tag') }}</h4>
          <router-link :to="{ name: 'landing-page.view-all-tags', query: { type: 'movie' } }">{{$t('sectionTitle.view_all')}}</router-link>
        </div>
        <b-row class="g-3 g-lg-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
          <b-col v-for="data in list.slice(0, 12)" :key="data">
            <TagsCard :slug="data.slug" :title="$t(data.title)" :type="data.type"> </TagsCard>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section-padding-bottom">
      <b-container fluid>
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h4 class="main-title text-capitalize mb-0">{{ $t('streamPages.tv_show_tag') }}</h4>
          <router-link :to="{ name: 'landing-page.view-all-tags', query: { type: 'tvshow' } }">{{$t('sectionTitle.view_all')}}</router-link>
        </div>
        <b-row class="g-3 g-lg-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
          <b-col v-for="data in tvShowsList" :key="data">
            <TagsCard :slug="data.slug" :title="$t(data.title)" :type="data.type"> </TagsCard>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section-padding-bottom">
      <b-container fluid>
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h4 class="main-title text-capitalize mb-0">{{ $t('streamPages.video_tag') }}</h4>
          <router-link :to="{ name: 'landing-page.view-all-tags', query: { type: 'video' } }">{{$t('sectionTitle.view_all')}}</router-link>
        </div>
        <b-row class="g-3 g-lg-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
          <b-col v-for="data in videoList" :key="data">
            <router-link :to="{ name: 'landing-page.blogs' }">
              <TagsCard :slug="data.slug" :title="$t(data.title)" :type="data.type"></TagsCard>
            </router-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script setup>
import TagsCard from '../components/cards/TagsCard.vue';
import { movieTags, tvShowsTags, videoTags } from '../StaticData/data';
const list = movieTags.slice(0, 12);
const tvShowsList = tvShowsTags;
const videoList = videoTags;
</script>
