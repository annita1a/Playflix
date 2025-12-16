<template>
  <!-- Upcoming Movies start home -->
  <SectionSlider :title="$t(title)" :list="upComing" :slides-per-view="6" class="streamit-block"
    margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0">
    <template #headerLink>
      <router-link :to="{ name: 'landing-page.view-all' }"
        class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('sectionTitle.view_all') }}</router-link>
    </template>
    <template #default="{ data }">
      <card-style :image="data.image" :title="$t(data.title)" :product-premium="data.productPremium"
        :watchlist-link="{ path: '/playlist' }" :link="{ path: '/movies-detail' }" :lang="$t(data.lang)"></card-style>
    </template>
  </SectionSlider>
  <!-- Upcoming Movies end test -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';

import { upcommingMovie } from '../../StaticData/data';
const title = ref('sectionTitle.upcoming_movies');
const upComing = ref(upcommingMovie);
</script>