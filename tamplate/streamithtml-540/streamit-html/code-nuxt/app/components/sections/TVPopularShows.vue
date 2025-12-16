<template>
  <!-- Only on streamit start -->
  <SectionSlider :title="$t(title)" :list="topTen" :slides-per-view="6" :loop="false"
    class="recommended-block section-top-spacing section-wraper streamit-block"
    margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0">
    <template #headerLink>
      <nuxt-link :to="{ name: 'view-all' }" class="text-primary iq-view-all text-decoration-none flex-none">{{
        $t('sectionTitle.view_all') }}</nuxt-link>
    </template>
    <template #default="{ data }">
      <card-style :is-card-style2="true" :image="data.image" :product-premium="data.productPremium"
        :is-not-lang-card="true" :title="$t(data.title)" :watchlist-link="{ name: '/play-list' }"
        :link="{ name: 'tv-shows-detail' }"></card-style>
    </template>
  </SectionSlider>
  <!-- Only on streamit end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';

import { TVPopularShows } from '../../StaticData/data';
const title = ref('sectionTitle.popular_tv_shows');
const topTen = ref(TVPopularShows);
</script>
