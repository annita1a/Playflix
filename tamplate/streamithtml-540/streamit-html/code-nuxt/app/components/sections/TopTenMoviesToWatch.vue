<template>
  <!-- Top 10 start -->
  <SectionSlider :title="$t(title)" :list="topTen" :slides-per-view="6" :loop="false" classlist="top-ten-block" :margin-padding="paddingTop ? 'px-md-3 px-1 mb-2 pb-1 mb-md-4 pb-md-0' : 'px-1 mb-2 pb-1 mb-md-4 pb-md-0'" swipper-class="iq-top-ten-block-slider">
    <!-- <template #headerLink>
      <router-link to="/view-all" class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('sectionTitle.view_all') }}</router-link>
    </template> -->
    <template #default="{ data }">
      <top-ten-card :image-path="data.image" :count-value="data.count" :prodct-primium="prime === true && data.productPremium" classlist="iq-top-ten-block position-relative" :link="{ name: 'movies-detail' }"></top-ten-card>
    </template>
  </SectionSlider>
  <!-- Top 10 end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import TopTenCard from '../../components/cards/TopTenCard.vue';
import { generateImgPath } from '../../StaticData/data';
const title = ref('sectionTitle.top_10_movies_to_watch');
const topTen = ref([
  {
    image: generateImgPath('/assets/images/media/gameofhero-portrait.webp'),
    count: 1,
    productPremium: true,
  },
  {
    image: generateImgPath('/assets/images/media/rabbit-portrait.webp'),
    count: 2,
    productPremium: true,
  },
  {
    image: generateImgPath('/assets/images/media/chosfies-portrait.webp'),
    count: 3,
  },
  {
    image: generateImgPath('/assets/images/media/dinoosaur-portrait.webp'),
    count: 4,
    productPremium: true,
  },
  {
    image: generateImgPath('/assets/images/media/krishna-portrait.webp'),
    count: 5,
  },
  {
    image: generateImgPath('/assets/images/media/venom-portrait.webp'),
    count: 6,
  },
  {
    image: generateImgPath('/assets/images/media/the-hunter-portrait.webp'),
    count: 7,
    productPremium: true,
  },
  {
    image: generateImgPath('/assets/images/media/kali-portrait.webp'),
    count: 8,
  },
  {
    image: generateImgPath('/assets/images/media/jumanji-portrait.webp'),
    count: 9,
  },
  {
    image: generateImgPath('/assets/images/media/migration-portrait.webp'),
    count: 10,
    productPremium: true,
  },
]);

defineProps({
    marginPadding: { type: String, default: '' },
    paddingTop: { type: String, default: '' },
    prime: { type: Boolean, default: false },
});
</script>
