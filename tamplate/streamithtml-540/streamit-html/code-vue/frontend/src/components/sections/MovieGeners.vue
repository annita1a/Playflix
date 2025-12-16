<template>
  <!-- Only on streamit start -->
  <SectionSlider :title="$t(title)" :list="geners" :slides-per-view="6" swiper-class="geners-card genres-list"
    class-custom="movie-geners-block section-wraper" class="streamit-block"
    margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0">
    <template #headerLink>
      <router-link :to="{ name: 'landing-page.view-all' }"
        class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('sectionTitle.view_all') }}</router-link>
    </template>
    <template #default="{ data }">
      <geners-card :image="data.thumbnail" :title="$t(data.title)"></geners-card>
    </template>
  </SectionSlider>
  <!-- Only on streamit end -->
</template>

<script setup>
import { ref } from 'vue';
import { geners } from '../../StaticData/data';
import GenersCard from '../cards/GenersCard.vue';
import SectionSlider from '../slider/SectionSlider.vue';
defineProps({
  props: {
    paddingTop: {
      type: String,
      default: ''
    },
    notWantMoreBtn: {
      type: Boolean,
      default: false
    }
  },
});

const title = ref('sectionTitle.movie_genres');
</script>
