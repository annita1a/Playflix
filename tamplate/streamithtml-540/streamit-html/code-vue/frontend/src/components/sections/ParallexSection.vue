<template>
  <section id="parallex" class="parallax-window bg-attachment-fixed" style="background: url(assets/images/parallax/parallex.webp) fixed">
    <b-container fluid class="h-100">
      <b-row class="align-items-center justify-content-center h-100 parallaxt-details flex-column-reverse flex-lg-row gap-4 gap-lg-0">
        <b-col xl="6" lg="6" md="12" class="r-mb-23">
          <div class="parallax-window-detail">
            <h2 class="mb-0 parallaxt-details-heading">{{$t('streamMovies.godzilla')}}</h2>
            <div class="d-flex flex-column flex-md-row gap-2 flex-wrap align-items-center r-mb-23 mt-2 mb-3 gap-md-3 justify-content-center justify-content-lg-start">
              <div class="slider-ratting d-flex align-items-center">
                <ul class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                  <li>
                    <i class="ph-fill ph-star" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i class="ph-fill ph-star" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i class="ph-fill ph-star" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i class="ph-fill ph-star" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i class="ph ph-star" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
              <div class="d-flex gap-2 align-items-center">
                <span>5 </span>
                <img :src="generateImgPath('/assets/images/pages/imdb-logo.svg')" alt="imdb logo" class="img-fluid" />
              </div>
              <div class="d-flex align-items-center gap-1">
                <i class="ph ph-clock"></i>
                <span class="">2h : 30m</span>
              </div>
            </div>
            <h4 class="iq-title mb-2 pb-1 pb-lg-0 mb-lg-3 fw-medium">{{ $t('streamMovies.movie_year') }}</h4>
            <p class="mb-4 pb-2 parallaxt-details-descripttion">{{ $t('streamMovies.godzilla_desc') }}</p>
            <div class="parallax-buttons">
              <custom-button :button-title="$t('streamButtons.play_now')" :link="{ path: '/movies-detail' }"></custom-button>
            </div>
          </div>
        </b-col>
        <b-col xl="6" lg="6" md="12" class="mt-0 mt-lg-5 mt-xl-0">
          <div class="parallax-img">
            <router-link :to="{ name: 'landing-page.movies.detail' }">
              <img :src="generateImgPath('/assets/images/pages/Movieof-the-year.webp')" class="img-fluid w-100" loading="lazy" alt="bailey" />
            </router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup>
import CustomButton from '../CustomButton.vue';
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
</script>
