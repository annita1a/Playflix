<template>
  <div class="section-padding personality-detail">
    <b-container fluid>
      <b-row>
        <b-col md="3">
          <div class="cast-box position-relative">
            <img
              :src="generateImgPath('assets/images/cast/charles-melton.webp')"
              class="img-fluid object-cover w-100 rounded-3" alt="person" loading="lazy" />
          </div>
          <h5 class="mt-5 pt-4 mb-4 text-white fw-500">{{ $t('persondesc.personal_details') }}</h5>
          <ul class="list-inline p-0 m-0">
            <li class="mb-3">
              <h5 class="mt-0 mb-2">{{$t('persondesc.born')}}</h5>
              <ul class="person-birth-detail d-flex align-items-center flex-wrap column-gap-5 row-gap-1 p-0 m-0">
                <li class="list-group-item">{{$t('persondesc.birthday')}}: 1985-03-22 </li>
              </ul>
            </li>
          </ul>
        </b-col>
        <b-col md="9" class="mt-5 mt-md-0">
          <h4 class="mb-3">{{$t('favouritePersonalities.charles_melton')}}</h4>
          <ul class="person-category d-flex flex-wrap align-items-center gap-5 ps-0">
            <li class="list-group-item"><a href="">{{$t('persondesc.actor')}}</a></li>
          </ul>
          <p>{{$t('favouritePersonalities.charles_melton_description')}}
          </p>
          <div class="actor-history">
            <div>
              <h4 class="">{{$t('persondesc.person_history')}}</h4>
            </div>
          </div>
          <div class="content-details trending-info personal-detail">
            <ul class="nav nav-underline d-flex nav nav-pills align-items-center text-center my-5" role="tablist">
              <li v-for="tab in tabs" :key="tab.key" class="nav-item">
                <a
                  class="nav-link fw-bold"
                  :class="{ active: activeTab === tab.key, show: activeTab === tab.key }"
                  data-bs-toggle="pill"
                  href="javascript:void(0)"
                  role="tab"
                  :aria-selected="activeTab === tab.key"
                  @click="activeTab = tab.key"
                >
                  {{ $t(tab.label) }}
                </a>
              </li>
            </ul>
            <div class="tab-content personal-detail-tab-content">
              <div
                v-for="tab in tabs"
                :id="tab.key"
                :key="tab.key"
                class="tab-pane animated fadeInUp"
                :class="{ active: activeTab === tab.key, show: activeTab === tab.key }"
                role="tabpanel"
              >
                <div v-if="tab.key === 'all'" class="description-content">
                  <b-row class="gy-5">
                    <b-col
v-for="(item, idx) in allList" :key="idx"
                      xl="4"
                      sm="6"
                    >
                      <PersonDetailCard
                        :product-img="item.img"
                        :product-title="$t(item.title)"
                        :product-year="item.year"
                      />
                    </b-col>
                  </b-row>
                </div>
                <div v-else-if="tab.key === 'movies'" class="description-content">
                  <b-row class="gy-5">
                    <b-col
v-for="(item, idx) in moviesList" :key="idx"
                      xl="4"
                      sm="6"
                    >
                      <PersonDetailCard
                        :product-img="item.img"
                        :product-title="$t(item.title)"
                        :product-year="item.year"
                      />
                    </b-col>
                  </b-row>
                </div>
                <div v-else-if="tab.key === 'tvshows'" class="source-list-content">
                  <b-row class="gy-5">
                    <b-col
v-for="(item, idx) in tvShowsList" :key="idx"
                      xl="4"
                      sm="6"
                    >
                      <PersonDetailCard
                        :product-img="item.img"
                        :product-title="$t(item.title)"
                        :product-year="item.year"
                      />
                    </b-col>
                  </b-row>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PersonDetailCard from '../../components/widgets/PersonDetailCard.vue';
import { generateImgPath } from '../../StaticData/data';

const tabs = [
  { key: 'all', label: 'persondesc.all' },
  { key: 'movies', label: 'streamPages.movie' },
  { key: 'tvshows', label: 'streamPages.tv_show' }
];
const activeTab = ref('all');

const allList = [
  { img: 'assets/images/media/the-first-of-us-portrait.webp', title: 'streamMovies.the_first_of_us', year: '2025' },
  { img: 'assets/images/media/gameofhero-portrait.webp', title: 'streamMovies.game_of_heros', year: '2014' },
  { img: 'assets/images/media/venom-portrait.webp', title: 'streamMovies.venom', year: '2022' },
  { img: 'assets/images/media/rabbit-portrait.webp', title: 'streamMovies.rabbit', year: '2020' },
  { img: 'assets/images/media/migration-portrait.webp', title: 'streamMovies.migration', year: '2011' },
  { img: 'assets/images/media/krishna-portrait.webp', title: 'streamMovies.krishna', year: '2024' },
  { img: 'assets/images/media/kali-portrait.webp', title: 'streamMovies.kali', year: '2024' },
  { img: 'assets/images/media/joker-portrait.webp', title: 'streamMovies.joker', year: '2017' },
  { img: 'assets/images/media/deadpool-portrait.webp', title: 'streamMovies.deadpool', year: '2022' },
  { img: 'assets/images/media/any-name-portrait.webp', title: 'streamMovies.any_name', year: '2025' },
  { img: 'assets/images/media/batter-caill-portrait.webp', title: 'streamMovies.better_call_saul', year: '2015' },
  { img: 'assets/images/media/jumanji-portrait.webp', title: 'streamMovies.jumanji', year: '2010' },
  { img: 'assets/images/media/yoshi-portrait.webp', title: 'streamMovies.yoshi', year: '2018' }
];

const moviesList = [
  { img: 'assets/images/media/gameofhero-portrait.webp', title: 'streamMovies.game_of_heros', year: '2014' },
  { img: 'assets/images/media/venom-portrait.webp', title: 'streamMovies.venom', year: '2022' },
  { img: 'assets/images/media/rabbit-portrait.webp', title: 'streamMovies.rabbit', year: '2020' },
  { img: 'assets/images/media/migration-portrait.webp', title: 'streamMovies.migration', year: '2011' },
  { img: 'assets/images/media/krishna-portrait.webp', title: 'streamMovies.krishna', year: '2024' },
  { img: 'assets/images/media/kali-portrait.webp', title: 'streamMovies.kali', year: '2024' },
  { img: 'assets/images/media/joker-portrait.webp', title: 'streamMovies.joker', year: '2017' },
  { img: 'assets/images/media/deadpool-portrait.webp', title: 'streamMovies.deadpool', year: '2022' },
  { img: 'assets/images/media/any-name-portrait.webp', title: 'streamMovies.any_name', year: '2025' },
  { img: 'assets/images/media/batter-caill-portrait.webp', title: 'streamMovies.better_call_saul', year: '2015' },
  { img: 'assets/images/media/jumanji-portrait.webp', title: 'streamMovies.jumanji', year: '2010' },
  { img: 'assets/images/media/yoshi-portrait.webp', title: 'streamMovies.yoshi', year: '2018' }
];

const tvShowsList = [
  { img: 'assets/images/media/titanic-portrait.webp', title: 'streamMovies.titanic', year: '2014' },
  { img: 'assets/images/media/reed-dog-portrait.webp', title: 'streamMovies.red_dog', year: '2022' },
  { img: 'assets/images/media/the-hunter-portrait.webp', title: 'streamMovies.the_hunter', year: '2011' },
  { img: 'assets/images/media/minions-portrait.webp', title: 'streamMovies.minions', year: '2024' },
  { img: 'assets/images/media/charlie-chaplin-portrait.webp', title: 'streamMovies.charliechaplin', year: '2024' },
  { img: 'assets/images/media/pirates-ofdayones-orignal.webp', title: 'streamMovies.pirates_of_day_one', year: '2017' },
  { img: 'assets/images/media/dinoosaur-portrait.webp', title: 'streamMovies.dinoosaur', year: '2022' },
  { img: 'assets/images/media/rabbit-portrait.webp', title: 'streamMovies.rabbit', year: '2020' },
  { img: 'assets/images/media/hanuman1.webp', title: 'streamMovies.hanuman', year: '2025' },
  { img: 'assets/images/media/castle-rock-portrait.webp', title: 'streamMovies.castle_rock', year: '2018' },
  { img: 'assets/images/media/batter-caill-portrait.webp', title: 'streamMovies.better_call_saul', year: '2015' },
  { img: 'assets/images/media/Adventure-2.webp', title: 'streamMovies.adventure', year: '2010' }
];
</script>
<style scoped>
.fadeInUp {
  animation: fadeInUp 0.8s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
}
</style>