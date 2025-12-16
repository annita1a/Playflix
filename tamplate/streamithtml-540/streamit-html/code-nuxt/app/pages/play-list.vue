<template>
  <div class="section-padding-bottom">
    <div class="profile-box">
      <b-container fluid>
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-2">
          <div class="d-flex align-items-center gap-3">
            <div class="account-logo d-flex align-items-center position-relative">
              <img src="/assets/images/pages/profile.webp" class="object-cover rounded-3" alt="profile" loading="lazy" />
              <i class="fa-regular fa-pen-to-square"></i>
            </div>
            <div>
              <h6 class="font-size-18 text-capitalize text-white fw-500">{{ $t('streamAccount.admin') }}</h6>
              <span class="font-size-14 text-white fw-500">admin@admin.com</span>
            </div>
          </div>
          <CustomButton button-title="Subscription" :link="{ name: 'pricing-plan' }"></CustomButton>
        </div>
      </b-container>
    </div>
    <div class="tabs">
      <b-container fluid>
        <div class="content-details iq-custom-tab-style-two">
          <b-tabs class="trending-custom-tab" content-class="px-0" pills nav-class="d-flex justify-content-center nav nav-pills tab-header">
            <b-tab :title="$t('streamPages.playlist')" active>
              <div class="overflow-hidden animate__animated animate__fadeInUp">
                <div class="d-flex align-items-center justify-content-between my-4">
                  <h5 class="main-title text-capitalize mb-0">{{ $t('streamPlaylist.my_playlist') }}</h5>
                </div>
                <b-row class="row-cols-1 row-cols-md-2 row-cols-lg-4">
                  <b-col v-for="data in playlistData" :key="'playlist' + data.title" class="mb-4">
                    <WatchlistCard :image="data.image" :title="$t(data.title)" :category="$t(data.category)" :views="$t(data.views)" :viewcount="data.viewcount"></WatchlistCard>
                  </b-col>
                </b-row>
              </div>
              <create-playlist buttonname="streamButtons.create_playlist"></create-playlist>
            </b-tab>
            <b-tab :title="$t('streamButtons.watchlist')">
              <div class="overflow-hidden animate__animated animate__fadeInUp">
                <div class="d-flex align-items-center justify-content-between my-4">
                  <h5 class="main-title text-capitalize mb-0">{{ $t('streamPlaylist.my_watchlist') }}</h5>
                </div>
                <b-row class="row-cols-1 row-cols-md-2 row-cols-lg-4">
                  <b-col v-for="data in playlistData.slice(0, 4)" :key="'playlist' + data.title" class="mb-4">
                    <WatchlistCard :image="data.image" :title="$t(data.title)" :category="$t(data.category)" :views="$t(data.views)" :viewcount="data.viewcount"></WatchlistCard>
                  </b-col>
                </b-row>
              </div>
              <create-playlist buttonname="streamButtons.create_watchlist"></create-playlist>
            </b-tab>
            <b-tab :title="$t('streamAccount.favorites')">
              <div class="overflow-hidden animate__animated animate__fadeInUp">
                <div class="d-flex align-items-center justify-content-between my-4">
                  <h5 class="main-title text-capitalize mb-0">{{ $t('streamPlaylist.my_favourite') }}</h5>
                </div>
                <b-row class="row-cols-1 row-cols-md-2 row-cols-lg-4">
                  <b-col v-for="data in playlistData" :key="'playlist' + data.title" class="mb-4">
                    <WatchlistCard :image="data.image" :title="$t(data.title)" :category="$t(data.category)" :views="$t(data.views)" :viewcount="data.viewcount"></WatchlistCard>
                  </b-col>
                </b-row>
              </div>
              <create-playlist buttonname="streamButtons.create_playlist"></create-playlist>
            </b-tab>
          </b-tabs>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import WatchlistCard from '../components/cards/WatchlistCard.vue';
import CreatePlaylist from '../components/CreatePlaylist.vue';
import { generateImgPath } from '../StaticData/data';
import CustomButton from '../components/CustomButton.vue';
import { useStremit } from "../store/streamit";

const store = useStremit();
onMounted(() => {
   store.breadcrumbSet({ show: false, name: "" });
  document.body.classList.add("custom-header-relative");
});

onUnmounted(() => {
  document.body.classList.remove('custom-header-relative');
});

const playlistData = [
  {
    image: generateImgPath('/assets/images/movies/playlist/01.webp'),
    title: 'streamPlaylist.play_list1',
    category: 'streamPlaylist.public',
    viewcount: '3',
    views: 'streamKeyword.views',
  },
  {
    image: generateImgPath('/assets/images/movies/playlist/02.webp'),
    title: 'streamPlaylist.play_list2',
    category: 'streamPlaylist.private',
    viewcount: '1',
    views: 'streamKeyword.views',
  },
  {
    image: generateImgPath('/assets/images/movies/playlist/03.webp'),
    title: 'streamPlaylist.play_list3',
    category: 'streamPlaylist.public',
    viewcount: '10',
    views: 'streamKeyword.views',
  },
  {
    image: generateImgPath('/assets/images/movies/playlist/04.webp'),
    title: 'streamPlaylist.play_list4',
    category: 'streamPlaylist.public',
    viewcount: '30',
    views: 'streamKeyword.views',
  },
  {
    image: generateImgPath('/assets/images/movies/playlist/05.webp'),
    title: 'streamPlaylist.play_list5',
    category: 'streamPlaylist.private',
    viewcount: '2',
    views: 'streamKeyword.views',
  },
  {
    image: generateImgPath('/assets/images/movies/playlist/06.webp'),
    title: 'streamPlaylist.play_list6',
    category: 'streamPlaylist.public',
    viewcount: '10',
    views: 'streamKeyword.views',
  },
  {
    image: generateImgPath('/assets/images/movies/playlist/07.webp'),
    title: 'streamPlaylist.play_list7',
    category: 'streamPlaylist.public',
    viewcount: '50',
    views: 'streamKeyword.views',
  },
];
</script>
