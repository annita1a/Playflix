<template>
  <div class="tab-slider otthome-tab-slider">
    <div class="slider">
      <Swiper
        v-if="render"
        :dir="rtl"
        :watch-slides-progress="true"
        class="wrapper-class position-relative swiper swiper-card"
        :pagination="{ 
          el: '.swiper-pagination', 
          clickable: true 
        }"
        :navigation="{
          prevEl: '.joint-arrows .swiper-button-prev', 
          nextEl: '.joint-arrows .swiper-button-next'
        }"
        :effect="'fade'"
        :slides-per-view="1"
        :modules="modules"
      >
        <SwiperSlide 
          v-for="(data, index) in tabSlider" 
          :key="`slider-${index}`" 
          tag="li" 
          class="tab-slider-banner p-0 swiper-active"
        >
          <div 
            class="tab-slider-banner-images" 
            :style="{ backgroundImage: `url(${data.image})` }"
          >
            <div class="block-images position-relative w-100">
              <b-container fluid>
                <b-row class="align-items-center h-100 my-4">
                  <b-col lg="5" xxl="5">
                    <div class="tab-left-details">
                      <div class="d-flex align-items-center gap-3 mb-4">
                        <a href="javascript:void(0);">
                          <img 
                            src="/assets/images/pages/trending-label.webp" 
                            class="img-fluid trending-label-img rounded-3" 
                            alt="trending" 
                            loading="lazy" 
                          />
                        </a>
                        <span class="text-gold fw-bold font-size-18">
                          #1 {{ $t(data.movieTime || '') }}
                        </span>
                      </div>
                      <h1 class="mb-2 fw-500 text-capitalize texture-text">
                        {{ $t(data.title || '') }}
                      </h1>
                      <p class="my-3 line-count-3 RightAnimate-three">
                        {{ $t(data.detail || '') }}
                      </p>
                      <ul class="d-flex align-items-center list-inline gap-2 movie-tag p-0 mt-3 mb-40">
                        <li class="font-size-18 trending-list">February 2025</li>
                        <li class="font-size-18">3 {{ $t('streamEpisode.season') }}</li>
                      </ul>
                      <custom-button 
                        button-title="stream now" 
                        :link="{ path: '/tv-show-detail' }"
                      />
                    </div>
                  </b-col>
                  <b-col md="1" lg="2" xxl="3"></b-col>
                  <b-col md="6" lg="5" xxl="3" class="mt-5 mt-md-0 d-none d-lg-block">
                    <div class="tab-block">
                      <h4 class="tab-title text-capitalize mb-0">
                        {{ $t('streamEpisode.all_episode') }}
                      </h4>
                      <div class="tab-bottom-bordered border-0">
                        <ul 
                          class="nav nav-tabs nav-pills mb-3 overflow-x-scroll" 
                          role="tablist"
                        >
                          <li 
                            v-for="(season, seasonIndex) in data.seasons" 
                            :key="`season-${season.id}`" 
                            class="nav-item" 
                            role="presentation"
                          >
                            <button 
                              class="nav-link" 
                              :class="{ active: selectedTab[index] === seasonIndex }" 
                              data-bs-toggle="pill" 
                              :data-bs-target="`#season-${index}-${season.seasonIndex}`" 
                              type="button" 
                              role="tab" 
                              :aria-selected="selectedTab[index] === seasonIndex" 
                              @click="changeTab(index, seasonIndex)"
                            >
                              {{ $t(season.title) }}
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div class="tab-content iq-tab-fade-up">
                        <div 
                          v-for="(season, seasonIndex) in data.seasons" 
                          :id="`season-${index}-${seasonIndex}`" 
                          :key="`season-content-${season.seasonIndex}`" 
                          class="tab-pane fade" 
                          :class="{ 
                            show: selectedTab[index] === seasonIndex, 
                            active: selectedTab[index] === seasonIndex 
                          }" 
                          role="tabpanel" 
                          tabindex="0"
                        >
                          <ul class="list-inline m-0 p-0">
                            <li 
                              v-for="(episode, episodeIndex) in season.episodes" 
                              :key="`episode-${episodeIndex}`" 
                              class="d-flex align-items-center gap-3"
                            >
                              <div class="image-box flex-shrink-0">
                                <router-link :to="{ name: 'landing-page.tv-show-detail' }">
                                  <img 
                                    :src="episode.image" 
                                    :alt="`episode-${episodeIndex + 1}`" 
                                    class="img-fluid rounded" 
                                    loading="lazy"
                                  />
                                </router-link>
                              </div>
                              <div class="image-details">
                                <h6 class="mb-1 text-capitalize">
                                  <router-link :to="{ name: 'landing-page.tv-show-detail' }">
                                    {{ $t(episode.title) }}
                                  </router-link>
                                </h6>
                                <div class="episode-time d-flex align-items-center gap-1 mt-2">
                                  <i class="ph ph-clock font-size-14"></i>
                                  <small>{{ episode.movieTime }}</small>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>
        </SwiperSlide>
        <div class="joint-arrows d-none d-lg-block">
          <div class="swiper-button swiper-button-next"></div>
          <div class="swiper-button swiper-button-prev"></div>
        </div>
        <div class="swiper-pagination d-block d-lg-none"></div>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref, computed, watch } from 'vue';
import { Navigation, Pagination, EffectFade } from 'swiper';
import { tabSlider } from '../../StaticData/data';
import { useSetting } from '../../store/setting/index';

const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);
const render = ref(true);

watch(
  () => rtl.value,
  () => {
    render.value = false;
    setTimeout(() => {
      render.value = true;
    }, 0);
  }
);

const modules = [Navigation, Pagination, EffectFade];

// Initialize selectedTab as an array to track active tab for each slider
const selectedTab = ref(tabSlider.map(() => 0));

const changeTab = (sliderIndex, tabIndex) => {
  selectedTab.value[sliderIndex] = tabIndex;
};
</script>