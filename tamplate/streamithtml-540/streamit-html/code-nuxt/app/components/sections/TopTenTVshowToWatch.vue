<template>
  <!-- Top 10 start -->
  <SectionSlider :title="$t(title)" :list="topTen" :slides-per-view="6" :loop="false" classlist="top-ten-block"
    margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0" swipper-class="iq-top-ten-block-slider">
    <!-- <template #headerLink>
      <nuxt-link to="/view-all" class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('sectionTitle.view_all') }}</nuxt-link>
    </template> -->
    <template #default="{ data }">
      <top-ten-card :image-path="data.image" :prodct-primium="data.prodctPrimium" :count-value="data.count"
        classlist="iq-top-ten-block position-relative" :link="{ name: 'movies-detail' }"></top-ten-card>
    </template>
  </SectionSlider>
  <!-- Top 10 end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import TopTenCard from '../../components/cards/TopTenCard.vue';
import { generateImgPath } from '../../StaticData/data';
const title = ref('sectionTitle.top_10_tvshow_to_watch');
const topTen = ref([
  {
    image: generateImgPath('/assets/images/media/minions-portrait.webp'),
    count: 1,
  },
  {
    image: generateImgPath('/assets/images/media/breaking-bad-portrait.webp'),
    count: 2,
  },
  {
    image: generateImgPath('/assets/images/media/kung-fu-panda-portrait.webp'),
    count: 3,
    prodctPrimium: true,
  },
  {
    image: generateImgPath('/assets/images/media/spiderman-portrait.webp'),
    count: 4,
  },
  {
    image: generateImgPath('/assets/images/media/migration-portrait.webp'),
    count: 5,
    prodctPrimium: true,
  },
  {
    image: generateImgPath('/assets/images/media/midnightHunter-portrait.webp'),
    count: 6,
  },
  {
    image: generateImgPath('/assets/images/media/the-hunter-portrait.webp'),
    count: 7,
    prodctPrimium: true,
  },
  {
    image: generateImgPath('/assets/images/media/hanuman-portrait.webp'),
    count: 8,
  },
  {
    image: generateImgPath('/assets/images/media/lost-in-space-portrait.webp'),
    count: 9,
  },
  {
    image: generateImgPath('/assets/images/media/krishna-portrait.webp'),
    count: 10,
  },
]);
</script>
