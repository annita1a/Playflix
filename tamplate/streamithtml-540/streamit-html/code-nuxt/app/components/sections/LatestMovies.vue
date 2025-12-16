<template>
  <!-- Latest Movies start -->
  <SectionSlider :title="$t(title)" :list="sliderData" :slides-per-view="6" class="latest-block section-wraper streamit-block" margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0">
    <template #headerLink>
      <router-link :to="{ name: 'view-all' }" class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('sectionTitle.view_all') }}</router-link>
    </template>
    <template #default="{ data }">
      <card-style :image="data.image" :title="$t(data.title)" :card-lang="data.cardLang" watchlist-link="/play-list" :link="{name: 'movies-detail'}"></card-style>
    </template>
  </SectionSlider>
  <!-- Latest Movies end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';

import { latestMovie } from '../../StaticData/data';
const title = ref('sectionTitle.latest_movies');
const sliderData = ref(latestMovie);
</script>
