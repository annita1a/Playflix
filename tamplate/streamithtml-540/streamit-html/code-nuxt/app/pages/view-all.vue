<template>
  <div class="section-padding view-all-movies">
    <b-container fluid>
      <div class="card-style-grid">
        <b-row class="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 data-listing">
          <b-col v-for="(data, idx) in visibleCards" :key="idx">
            <CardStyle
              :image="data.image"
              :title="$t(data.title)"
              :movie-time="data.movieTime"
              :card-lang="data.cardLang"
              :product-premium="data.productPremium"
              :isnotlang-card="data.isnotlangCard"
              :watchlist-link="{ name: '/play-list' }"
              :link="{ name: 'movies-detail' }"
            />
          </b-col>
        </b-row>
        <div v-if="visibleCount < allCards.length" class="text-center mt-4">
          <button type="button" class="btn btn-primary position-relative load-more-btn" @click="loadMore">
            <span class="button-text">{{$t('streamButtons.load_more')}}</span>
          </button>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CardStyle from '../components/cards/CardStyle.vue';
import { generateImgPath } from '../StaticData/data';
//custom hook
import { useBreadcrumb } from "~/utilities/usePage";
useBreadcrumb("sectionTitle.view_all");

const allCards = [
  { image: generateImgPath('assets/images/media/the-first-of-us-portrait.webp'), title: 'streamMovies.the_first_of_us', movieTime: '2:59', cardLang: 'English (UK)' },
  { image: generateImgPath('assets/images/media/gameofhero-portrait.webp'), title: 'streamMovies.game_of_heros', movieTime: '2:30', cardLang: 'English (UK)' },
  { image: generateImgPath('assets/images/media/venom-portrait.webp'), title: 'streamMovies.venom', movieTime: '2:03', cardLang: 'English (UK)' },
  { image: generateImgPath('assets/images/media/rabbit-portrait.webp'), title: 'streamMovies.rabbit', movieTime: '2:30', cardLang: 'English (UK)', productPremium: true },
  { image: generateImgPath('assets/images/media/migration-portrait.webp'), title: 'streamMovies.migration', movieTime: '2:04', cardLang: 'English (UK)' },
  { image: generateImgPath('assets/images/media/krishna-portrait.webp'), title: 'streamMovies.krishna', movieTime: '2:45', cardLang: 'English (UK)' },
  { image: generateImgPath('assets/images/media/kali-portrait.webp'), title: 'streamMovies.kali', movieTime: '0:00', cardLang: 'English (UK)' },
  { image: generateImgPath('assets/images/media/joker-portrait.webp'), title: 'streamMovies.joker', movieTime: '2:45', cardLang: 'English (UK)' },
  { image: generateImgPath('assets/images/media/deadpool-portrait.webp'), title: 'streamMovies.deadpool', movieTime: '2:14', cardLang: 'English (UK)' },
  { image: generateImgPath('assets/images/media/any-name-portrait.webp'), title: 'streamMovies.any_name', movieTime: '2:20', cardLang: 'English (UK)' },
  // Hidden tags (will be shown on Load More)
  { image: generateImgPath('assets/images/media/batter-caill-portrait.webp'), title: 'streamMovies.better_call_saul', movieTime: '2:30', cardLang: 'English (UK)', hidden: true },
  { image: generateImgPath('assets/images/media/jumanji-portrait.webp'), title: 'streamMovies.jumanji', movieTime: '2:03', cardLang: 'English (UK)', hidden: true },
  { image: generateImgPath('assets/images/media/yoshi-portrait.webp'), title: 'streamMovies.yoshi', movieTime: '2:15', cardLang: 'English (UK)', hidden: true },
  { image: generateImgPath('assets/images/media/the-co-noueriing-portrait.webp'), title: 'streamMovies.the_co_noueriing', movieTime: '2:07', cardLang: 'hEnglish (Canada)', productPremium: true, hidden: true },
  { image: generateImgPath('assets/images/media/giirek-portrait.webp'), title: 'streamMovies.giikre', movieTime: '2:31', cardLang: 'English (UK)', productPremium: true, hidden: true },
  { image: generateImgPath('assets/images/media/another-danger-portrait.webp'), title: 'streamMovies.another_danger', movieTime: '2:15', cardLang: 'English (UK)', productPremium: true, hidden: true },
  { image: generateImgPath('assets/images/media/te-oaler-portrait.webp'), title: 'streamMovies.tf_oaler', movieTime: '2:09', cardLang: 'English (UK)', hidden: true },
  { image: generateImgPath('assets/images/media/kung-fu-panda-portrait.webp'), title: 'streamMovies.kung_fu_panda', movieTime: '2:30', cardLang: 'English (UK)', productPremium: true, hidden: true },
  { image: generateImgPath('assets/images/media/john-wick-portrait.webp'), title: 'streamMovies.john_wick', movieTime: '1:44', cardLang: 'English (New Zealand)', productPremium: true, hidden: true },
  { image: generateImgPath('assets/images/media/revenge-of-the-sith-portrait.webp'), title: 'streamMovies.revenge_of_sith', movieTime: '2:16', productPremium: true, hidden: true },
  { image: generateImgPath('assets/images/media/spiderman-portrait.webp'), title: 'streamMovies.spiderman', movieTime: '2:30', productPremium: true, isnotlangCard: true, hidden: true },
  { image: generateImgPath('assets/images/media/war-for-the-planet-portrait.webp'), title: 'streamMovies.war_for_the_planet', movieTime: '2:25', hidden: true },
  { image: generateImgPath('assets/images/media/fast-furious-portrait.webp'), title: 'streamMovies.fast_&_furious', movieTime: '2:09', productPremium: true, hidden: true },
  { image: generateImgPath('assets/images/media/dinoosaur-portrait.webp'), title: 'streamMovies.dinoosaur', movieTime: '2:17', hidden: true },
  { image: generateImgPath('assets/images/media/chosfies-portrait.webp'), title: 'streamMovies.chosfies', movieTime: '2:06', hidden: true },
  { image: generateImgPath('assets/images/media/bumblebee-portrait.webp'), title: 'streamMovies.bumblebee', movieTime: '2:06', cardLang: 'English (UK)', hidden: true },
  { image: generateImgPath('assets/images/media/batter-caill-portrait.webp'), title: 'streamMovies.better_call', movieTime: '2:06', cardLang: 'English (South Africa)', hidden: true },
  { image: generateImgPath('assets/images/media/arrival-portrait.webp'), title: 'streamMovies.arrival', movieTime: '2:15', cardLang: 'English (UK)', hidden: true },
  { image: generateImgPath('assets/images/media/the-hunter-portrait.webp'), title: 'streamMovies.the_hunter', movieTime: '2:30', cardLang: 'hEnglish (Canada)', hidden: true },
];

const initialVisible = 10;
const visibleCount = ref(initialVisible);

const visibleCards = computed(() => allCards.slice(0, visibleCount.value));

function loadMore() {
  // Show all cards when "Load More" is clicked
  visibleCount.value = allCards.length;
}
</script>