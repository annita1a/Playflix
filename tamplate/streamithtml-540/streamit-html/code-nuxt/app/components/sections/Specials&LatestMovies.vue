<template>
  <!-- Specials & Latest Movies start -->
  <SectionSlider :title="$t(title)" :list="spacialLatestMovie" :slides-per-view="6"
    class="recommended-block section-wraper streamit-block" margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0">
    <template #headerLink>
      <nuxt-link :to="{ name: 'view-all' }"
        class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('sectionTitle.view_all') }}</nuxt-link>
    </template>
    <template #default="{ data }">
      <card-style :image="data.image" :is-card-style2="true" :title="$t(data.title)"
        :product-premium="data.productPremium" :is-not-lang-card="true" :watchlist-link="{ name: '/play-list' }"
        :link="{ name: 'movies-detail' }"></card-style>
    </template>
  </SectionSlider>
  <!-- Specials & Latest Movies end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';
import { spacialLatestMovie } from '../../StaticData/data';
const title = ref('sectionTitle.specials_latest_movies');
</script>
