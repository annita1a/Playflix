<template>
  <div class="poition-relative">
    <div class="iq-main-slider site-video position-relative">
      <!-- Banner Start -->
      <VideoPlayer :options="playerOption"></VideoPlayer>
      <!-- Banner End -->
    </div>
    <div class="movie-detail-part position-relative">
      <div class="trending-info pt-0 pb-0">
        <div class="details-parts">
          <MovieDescription movie-name="streamMovies.game_of_heros" video-url="/movie-player"  movie-type="NC-17" movie-duration="2hr : 6mins" movie-released="2021" view-number="284" movie-views="streamKeyword.views" imdb-rating="7" movie-language="English" movie-description></MovieDescription>
        </div>
      </div>
    </div>
  </div>

  <b-container fluid>
    <div class="overflow-hidden">
      <!-- Movies Recommended For You Start  -->
      <section class="recommended-block section-padding-top">
  <MoviesRecommendedForYou :list="MovieDetail_recommendedforYou" :title="'sectionTitle.recommended_movie'" :slides-per-view="6"></MoviesRecommendedForYou>
      </section>

      <!-- Starring start -->
         <YourFavouritePersonality :title="'sectionTitle.starring'" :slide-per-view="11" />
         <!-- Crew start -->
  <YourFavouritePersonality :title="'sectionTitle.crew'" :data="crew" :slide-per-view="11" />

      <section class="related-movie-block">
  <MoviesRecommendedForYou :title="'sectionTitle.recommended_movie'" :list="upcoming_recommended_movies" :slides-per-view="6"></MoviesRecommendedForYou>
        <!-- <RelatedMovies :title="$t('sectionTitle.related_movies')" padding-top="paddingTop"></RelatedMovies> -->
      </section>
      
      <section class="video-block">
  <RelatedMovies :title="'sectionTitle.related_videos'" :list="detailpage_related_video"></RelatedMovies>
      </section>

      <div class="related-product-block related-product-slider">
        <section class="overflow-hidden">
          <div class="d-flex align-items-center justify-content-between px-1 mb-2 pb-1 mb-md-4 pb-md-0">
            <h4 class="main-title text-capitalize mb-0">{{$t('sectionTitle.related_products')}}</h4>
          </div>
          <div class="card-style-slider">
            <Swiper
              :dir="rtl"
              tag="ul"
              :slides-per-view="6"
              :space-between="20"
              :loop="false"
              :autoplay="false"
              :navigation="{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }"
              :modules="modules"
              :pagination="{ clickable: true }"
              :breakpoints="{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                1025: {
                  slidesPerView: 6,
                  spaceBetween: 0,
                },
                1500: {
                  slidesPerView: 6,
                  spaceBetween: 0,
                },
              }"
              class="position-relative swiper-card wrapper-class">
              <SwiperSlide v-for="product in products" :key="product.id" tag="li">
                <ProductCard v-bind="product" :shop-title="$t(product.shopTitle)"/>
              </SwiperSlide>

              <div class="d-none d-lg-block">
                <div class="swiper-button swiper-button-next"></div>
                <div class="swiper-button swiper-button-prev"></div>
              </div>
            </Swiper>
          </div>
        </section>
      </div>

      <section class="upcoming-block">
        <UpcomingMovies :title="$t('sectionTitle.upcoming')" :list="upcoming_related_video" :notview-all-btn="true"></UpcomingMovies>
      </section>

      <section class="mb-5">
        <DetailsReview></DetailsReview>
      </section>
    </div>
  </b-container>
</template>

<script setup>
import { computed, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper';

// plugins

// import MoviesRecommendedForYou from '../../components/sections/MoviesRecommendedForYou.vue';
import UpcomingMovies from '../../components/sections/UpcomingMovies.vue';
import VideoPlayer from '../../components/plugins/VideoPlayer.vue';
import { useSetting } from '../../store/setting/index';
import RelatedMovies from '../../components/sections/RelatedMovies.vue';
import MovieDescription from '../../components/MovieDescription.vue';
import YourFavouritePersonality from '../../components/sections/YourFavouritePersonality.vue';
import MoviesRecommendedForYou from '../../components/sections/MoviesRecommendedForYou.vue';

import { MovieDetail_recommendedforYou, upcoming_recommended_movies, detailpage_related_video, upcoming_related_video, crew } from '../../StaticData/data';
import DetailsReview from '../../components/widgets/DetailsReview.vue';
import ProductCard from '../../components/merchandise/ProductCard.vue';

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const modules = [Navigation, Autoplay];



const products = [
  {
    id: '01',
    productImg: '01.webp',
    shopTitle: 'streamShop.product1',
    shopSale: 'Sale!',
    bgShop: 'primary',
    shopPrice: '₹48.00 - ₹28.00',
    ratingStars: true,
  },
  {
    id: '02',
    productImg: '07.webp',
    shopTitle: 'streamShop.product7',
    shopSale: 'Sale!',
    shopDel: '₹10.00',
    shopPrice: '₹7.00',
    ratingStars: true,
  },
  {
    id: '03',
    productImg: '09.webp',
    shopTitle: 'streamShop.product9',
    shopSale: 'Sale!',
    shopPrice: '₹70.00 - ₹45.00',
    ratingStars: true,
  },
  {
    id: '04',
    productImg: '06.webp',
    shopTitle: 'streamShop.product6',
    shopSale: 'Sale!',
    bgShop: 'dark',
    shopDel: '₹140.00',
    shopPrice: '₹100.00',
    ratingStars: true,
  },
  {
    id: '05',
    productImg: '03.webp',
    shopTitle: 'streamShop.product3',
    shopSale: 'Sale!',
    shopDel: '₹200.00',
    shopPrice: '₹150.00',
    ratingStars: true,
  },
  {
    id: '06',
    productImg: '04.webp',
    shopTitle: 'streamShop.product4',
    shopSale: 'Sale!',
    shopPrice: '₹50.00',
    ratingStars: true,
  },
  {
    id: '07',
    productImg: '08.webp',
    shopTitle: 'streamShop.product8',
    shopSale: 'Sale!',
    shopPrice: '₹50.00',
    ratingStars: true,
  },
];


const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);

const playerOption = ref({
  autoplay: true,
  controls: true,
  muted: true,
  loop: true,
  preload: 'auto',
  techOrder: ['youtube'],
  sources: [
    {
      src: 'https://www.youtube.com/embed/spGSAeqxVUc', // use embed format
      type: 'video/youtube',
    },
  ],
  youtube: {
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    autoplay: 1,
  },
  fullscreen: true,
  poster: '/assets/images/player/player-poster.webp',
});
</script>
