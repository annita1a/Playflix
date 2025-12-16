<template>
  <!-- Top 10 start -->
  <SectionSlider :title="$t(title)" :list="data" :slides-per-view="6" :loop="false" classlist="position-relative"
    :margin-padding="paddingTop ? 'px-md-3 px-1 mb-2 pb-1 mb-md-4 pb-md-0' : 'px-1 mb-2 pb-1 mb-md-4 pb-md-0'">
    <!-- <template #headerLink>
      <router-link to="/view-all" class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('sectionTitle.view_all') }}</router-link>
    </template> -->
    <template #default="{ data }">
      <TopTenCard
        :imagePath="data.image"
        :countValue="data.count"
        :prodctPrimium="prime === true && data.productPremium"
        :classlist="wrapperClass"
        :link="data.link ? data.link : link"
      />
    </template>
  </SectionSlider>
  <!-- Top 10 end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import TopTenCard from '../../components/cards/TopTenCard.vue';
const title = ref('sectionTitle.top_ten');

defineProps({
  data: { type: Array, required: true },
  wrapperClass: { type: Boolean, default: false },  // <-- add this
  paddingTop: { type: Boolean, default: false },
  notWantMoreBtn: { type: Boolean, default: false },
  prime: { type: Boolean, default: false },
});
</script>
