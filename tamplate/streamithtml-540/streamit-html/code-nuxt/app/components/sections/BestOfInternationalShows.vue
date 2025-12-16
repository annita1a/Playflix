<template>
  <!-- Best Of International Shows start -->
  <SectionSlider :title="$t(title)" :list="TvShow_Best_Of_International" :loop="false" :slides-per-view="6"
    class="recommended-block section-top-spacing section-wraper streamit-block"
    margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0">
    <template #headerLink>
      <nuxt-link :to="{ name: 'view-all' }" class="text-primary iq-view-all text-decoration-none">{{
        $t('sectionTitle.view_all') }}</nuxt-link>
    </template>
    <template #default="{ data }">
      <card-style :image="data.image" :title="$t(data.title)" :product-premium="data.productPremium"
        :card-lang="data.cardLang" :watchlist-link="{ name: '/play-list' }"
        :link="{ name: 'tv-shows-detail' }"></card-style>
    </template>
  </SectionSlider>
  <!-- Best Of International Shows end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';
import { TvShow_Best_Of_International } from '../../StaticData/data';
const title = ref('sectionTitle.international_shows');
</script>
