<template>
  <!-- Shows We Recommend start -->
  <SectionSlider :title="$t(title)" :list="TVshowDetail_recommendedforYou" :slides-per-view="6"
    class="recommended-blocks section-wraper streamit-block" margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0">
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
  <!-- Shows We Recommend end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';
import { TVshowDetail_recommendedforYou } from '../../StaticData/data';
const title = ref('sectionTitle.shows_recommend');
</script>
