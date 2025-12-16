<template>
  <!-- Recommended For You start -->
  <SectionSlider :title="$t(title)" :list="recommendedforYou" :slides-per-view="6" class="recommended-block section-wraper streamit-block" margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0">
    <template #headerLink>
      <router-link to="/view-all" class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('sectionTitle.view_all') }}</router-link>
    </template>
    <template #default="{ data }">
      <card-style
        :image="data.image"
        :title="$t(data.title)"
        :lang="$t(data.lang)"
        :product-premium="data.productPremium"
        :watchlist-link="{ path: 'playlist' }"
        :link="{ path: '/movies-detail' }">
      </card-style>
    </template>
  </SectionSlider>
  <!-- Recommended For You end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';
import { recommendedforYou } from '../../StaticData/data';

const title = ref('sectionTitle.recommended_for_you');
</script>
