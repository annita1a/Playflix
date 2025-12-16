<template>
  <!-- Specials & Latest Movies start -->
  <SectionSlider :title="$t(title)" :list="latestVideo" :slides-per-view="6" class="recommended-block section-top-spacing section-wraper streamit-block" margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0">
    <template #headerLink>
      <router-link :to="{ name: 'landing-page.view-all' }" class="text-primary iq-view-all text-decoration-none">{{ $t('sectionTitle.view_all') }}</router-link>
    </template>
    <template #default="{ data }">
      <card-style :image="data.image" :title="$t(data.title)" :product-premium="data.productPremium" :lang="data.lang" :watchlist-link="{ path: '/playlist' }" :link="{ path: '/movies-detail' }"></card-style>
    </template>
  </SectionSlider>
  <!-- Specials & Latest Movies end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';
import { latestVideo } from '../../StaticData/data';
const title = ref('sectionTitle.specials_latest_videos');
</script>
