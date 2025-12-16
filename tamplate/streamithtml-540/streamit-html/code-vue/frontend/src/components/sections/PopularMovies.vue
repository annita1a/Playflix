<template>
  <!-- Popular Movies start -->
  <SectionSlider
    :title="$t(title)"
    :list="topTen"
    :slides-per-view="6"
    class="streamit-block popular-movies-block section-wraper"
    margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0"
  >
    <template #headerLink>
      <router-link
        :to="{ name: 'landing-page.view-all' }"
        class="text-primary iq-view-all text-decoration-none flex-none"
      >{{ $t('sectionTitle.view_all') }}</router-link>
    </template>
    <template #default="{ data }">
      <card-style
        :image="data.image"
        :title="$t(data.title)"
        :lang="$t(data.lang)"
        :product-premium="data.productPremium"
        :watchlist-link="{ path: '/playlist' }"
        :link="{ path: '/movies-detail' }"
      ></card-style>
    </template>
  </SectionSlider>
  <!-- Popular Movies end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';
import { populerSlider } from '../../StaticData/data';

const title = ref('sectionTitle.popular_movies');
const topTen = ref(populerSlider);
const cardStyleSlider = ref(''); // or set to a string/class you want
</script>
