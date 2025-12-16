<template>
  <!-- Recommended TV Show start -->
  <SectionSlider
    :title="$t(title)"
    :list="topTen"
    :slides-per-view="6"
    class="recommended-blocks section-wrape streamit-block"
    margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0"
  >
    <template #headerLink>
      <router-link
        :to="{ name: 'view-all' }"
        class="text-primary iq-view-all text-decoration-none flex-none"
        >{{ $t("sectionTitle.view_all") }}</router-link
      >
    </template>
    <template #default="{ data }">
      <card-style
        :image="data.image"
        :title="$t(data.title)"
        :product-premium="data.productPremium"
        :card-lang="data.cardLang"
        :watchlist-link="{ name: '/play-list' }"
        :link="{ name: 'movies-detail' }"
      ></card-style>
    </template>
  </SectionSlider>
  <!-- Recommended TV Show end -->
</template>

<script setup>
import { ref } from "vue";
import SectionSlider from "../slider/SectionSlider.vue";
import CardStyle from "../cards/CardStyle.vue";

import { recommendedTvShow } from "../../StaticData/data";
const title = ref("sectionTitle.recommended_tv_show");
const topTen = ref(recommendedTvShow);
</script>
