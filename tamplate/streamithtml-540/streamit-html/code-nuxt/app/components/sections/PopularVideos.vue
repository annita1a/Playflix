<template>
  <!-- Popular Videos start -->
  <SectionSlider :title="$t(title)" :list="populerVideo" :slides-per-view="6"
    class="recommended-block section-top-spacing streamit-block" margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0">
    <template #headerLink>
      <nuxt-link :to="{ name: 'view-all' }"
        class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('sectionTitle.view_all') }}</nuxt-link>
    </template>
    <template #default="{ data }">
      <card-style :is-card-style2="true" :image="data.image" :title="$t(data.title)" :product-premium="data.productPremium"
        :card-lang="data.cardLang" :watchlist-link="{ name: 'index' }" :link="{ name: 'movies-detail' }"></card-style>
    </template>
  </SectionSlider>
  <!-- Popular Videos end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';
import { populerVideo } from '../../StaticData/data';
const title = ref('sectionTitle.popular_videos');
</script>
