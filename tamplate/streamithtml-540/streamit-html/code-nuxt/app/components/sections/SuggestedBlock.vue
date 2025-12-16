<template>
  <!-- Suggested-Block start -->
  <SectionSlider :title="$t(title)" :list="suggested" :slides-per-view="6" class="suggested-block streamit-block"
    margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0">
    <template #headerLink>
      <nuxt-link :to="{ name: 'view-all' }" class="text-primary iq-view-all text-decoration-none flex-none">{{
        $t('sectionTitle.view_all') }}</nuxt-link>
    </template>
    <template #default="{ data }">
      <card-style :image="data.image" :title="$t(data.title)" :card-lang="data.cardLang"
        :watchlist-link="{ name: '/play-list' }" :link="{name: 'movies-detail'}"
        :product-premium="data.productPremium"></card-style>
    </template>
  </SectionSlider>
  <!-- Suggested-Block end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';
import { suggested } from '../../StaticData/data';
const title = ref('sectionTitle.suggested_block');
</script>
