<template>
    <!-- Movies Recommended For You start -->
    <SectionSlider :title="$t(props.title)" :list="sectionSliders" :slides-per-view="6"
        margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0" :wrapper-class="true">
        <template #headerLink>
            <nuxt-link :to="{ name: 'view-all' }"
                class="text-primary iq-view-all text-decoration-none flex-none">{{ props.view }}</nuxt-link>
        </template>
        <template #default="{ data }">
            <card-style :image="data.image" :title="$t(data.title)" :product-premium="data.productPremium"
                :card-lang="data.cardLang" :watchlist-link="{ name: '/play-list' }"
                :link="{ name: 'movies-detail' }"></card-style>
        </template>
    </SectionSlider>
    <!-- Movies Recommended For You end -->
</template>

<script setup>
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';
import { sectionSliders } from '../../StaticData/data';

const props = defineProps({
    title: { type: String, default: 'sectionTitle.movies_recommended' },
    view: { type: String, default: '' },
    marginPadding: { type: String, default: '' },
});
</script>
