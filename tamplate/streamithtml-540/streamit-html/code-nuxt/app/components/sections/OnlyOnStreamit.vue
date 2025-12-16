<template>
  <!-- Only on streamit start -->
  <SectionSlider :title="$t(title)" :list="topTen" :slides-per-view="6" :loop="false" class="streamit-block" margin-padding="px-1 mb-4">
    <template #headerLink>
      <router-link to="/view-all" class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('sectionTitle.view_all') }}</router-link>
    </template>
    <template #default="{ data }">
      <card-style :image="data.image" :product-premium="data.productPremium" :card-lang="data.cardLang" :title="$t(data.title)" :watchlist-link="{ name: '/play-list' }" :link="{ name: 'movies-detail' }"></card-style>
    </template>
  </SectionSlider>
  <!-- Only on streamit end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';

import { sectionSliders } from '../../StaticData/data';
const title = ref('sectionTitle.only_on_streamit');
const topTen = ref(sectionSliders);
</script>
