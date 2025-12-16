<template>
  <!-- Movies Recommended For You start -->
  <SectionSlider 
    :title="title" 
    :list="recommendedforYou" 
    :slides-per-view="5"
    margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0" 
    :wrapper-class="true"
  >
    <template #headerLink>
      <router-link 
        :to="{ name: 'landing-page.view-all' }"
        class="text-primary iq-view-all text-decoration-none flex-none"
      >
        {{ view }}
      </router-link>
    </template>

    <template #default="{ data }">
      <CardStyle 
        :image="data.image" 
        :title="typeof data.title === 'string' && data.title.includes('.') ? $t(data.title) : data.title" 
        :lang="typeof data.lang === 'string' && data.lang.includes('.') ? $t(data.lang) : data.lang" 
        :product-premium="data.productPremium"
        :watchlist-link="{ path: '/playlist' }" 
        :link="{ path: '/movies-detail' }" 
      />
    </template>
  </SectionSlider>
  <!-- Movies Recommended For You end -->
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import SectionSlider from '../slider/SectionSlider.vue'
import CardStyle from '../cards/CardStyle.vue'
import { recommendedforYou } from '../../StaticData/data'

const props = defineProps({
  title: { type: String, default: 'sectionTitle.recommended_movie' },
  view: { type: String, default: '' },
  marginPadding: { type: String, default: '' },
  paddingTop: { type: String, default: '' },
  notWantMoreBtn: { type: Boolean, default: false }
})

const { t } = useI18n()
const title = computed(() => t(props.title))
</script>