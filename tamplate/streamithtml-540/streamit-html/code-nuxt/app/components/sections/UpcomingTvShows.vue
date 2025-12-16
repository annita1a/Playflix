<template>
  <!-- Upcoming Movies start -->
  <SectionSlider
:title="$t(title)" :list="upComing" :slides-per-view="6" class="streamit-block section-wraper"
    margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0">
    <template #headerLink>
      <nuxt-link
:to="{ name: 'view-all' }"
        class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('sectionTitle.view_all') }}</nuxt-link>
    </template>
    <template #default="{ data }">
      <card-style
:image="data.image" :title="$t(data.title)" :product-premium="data.productPremium"
        :watchlist-link="{ name: '/play-list' }" :link="{ name: 'tv-shows-detail' }" :card-lang="data.cardLang"></card-style>
    </template>
  </SectionSlider>
  <!-- Upcoming Movies end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';

import { upcomingTVShows } from '../../StaticData/data';
const title = ref('sectionTitle.tv_upcoming_title');
const upComing = ref(upcomingTVShows);
</script>
