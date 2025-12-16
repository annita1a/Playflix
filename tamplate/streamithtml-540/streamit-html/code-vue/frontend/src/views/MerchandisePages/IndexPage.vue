<template>
  <div data-swiper="home-banner-slider">
    <Swiper :slides-per-view="1" :navigation="{ prevEl: '.swiper-banner-button-prev', nextEl: '.swiper-banner-button-next' }" :space-beween="10" :modules="modules" class="wrapper-class swiper-banner-container iq-rtl-direction">
      <SwiperSlide v-for="data in heroSlider" :key="data" tag="li" class="swiper-slide slide m-0 p-0 home-slider" :style="{ backgroundImage: `url(${data.thumbnail})` }" style="background: no-repeat">
        <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }">
          <img :src="data.thumbnail" class="img-fluid w-100" loading="lazy" />
        </router-link>
      </SwiperSlide>
      <div class="swiper-banner-button-prev swiper-nav">
        <i class="ri-arrow-left-s-line arrow-icon"></i>
        <svg>
          <use xlink:href="#circle"></use>
        </svg>
      </div>
      <div class="swiper-banner-button-next swiper-nav">
        <i class="ri-arrow-right-s-line arrow-icon"></i>
        <svg>
          <use xlink:href="#circle"></use>
        </svg>
        <div class="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
  <!---Best Selling Categories Start--->
  <section class="category-slider-block">
    <b-container fluid>
      <div class="ms-lg-1">
        <h4 class="my-4 mt-md-3 mt-sm-3">{{ $t('sectionTitle.best_selling_categories') }}</h4>
      </div>
      <!-- <div class="position-relative swiper swiper-card swiper-initialized swiper-horizontal swiper-pointer-events"
        data-slide="4" data-laptop="4" data-tab="3" data-mobile="2" data-mobile-sm="1" data-autoplay="false"
        data-loop="false" data-navigation="true" data-pagination="true"> -->
      <swiper
        v-if="render"
        :dir="rtl"
        :slides-per-view="4"
        :navigation="{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }"
        tag="ul"
        class="wrapper-class"
        :modules="modules"
        :breakpoints="{
          '0': {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          '576': {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          '1025': {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          '1500': {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }">
        <SwiperSlide tag="li" class="swiper-slide slide-item">
          <div class="category-inner position-relative">
            <div class="category_image">
              <router-link to="/merchandise/shop">
                <img src="/assets/images/shop/categories/01.webp" class="img-fluid categorys-img" alt="catImg-01" loading="lazy" />
              </router-link>
              <div class="category-details">
                <h5 class="category-title mb-0">
                  <router-link to="/merchandise/shop"> {{ $t('streamShop.activeman') }} </router-link>
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li" class="swiper-slide slide-item">
          <div class="category-inner position-relative">
            <div class="category_image">
              <router-link to="/merchandise/shop">
                <img src="/assets/images/shop/categories/02.webp" class="img-fluid categorys-img" alt="catImg-02" loading="lazy" />
              </router-link>
              <div class="category-details">
                <h5 class="category-title mb-0">
                  <router-link to="/merchandise/shop"> {{ $t('streamShop.avengers') }} </router-link>
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li" class="swiper-slide slide-item">
          <div class="category-inner position-relative">
            <div class="category_image">
              <router-link to="/merchandise/shop">
                <img src="/assets/images/shop/categories/03.webp" class="img-fluid categorys-img" alt="catImg-03" loading="lazy" />
              </router-link>
              <div class="category-details">
                <h5 class="category-title mb-0">
                  <router-link to="/merchandise/shop"> {{ $t('streamShop.disney_world') }} </router-link>
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li" class="swiper-slide slide-item">
          <div class="category-inner position-relative">
            <div class="category_image">
              <router-link to="/merchandise/shop">
                <img src="/assets/images/shop/categories/04.webp" class="img-fluid categorys-img" alt="catImg-04" loading="lazy" />
              </router-link>
              <div class="category-details">
                <h5 class="category-title mb-0">
                  <router-link to="/merchandise/shop"> {{ $t('streamShop.fantasia') }} </router-link>
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li" class="swiper-slide slide-item">
          <div class="category-inner position-relative">
            <div class="category_image">
              <router-link to="/merchandise/shop">
                <img src="/assets/images/shop/categories/05.webp" class="img-fluid categorys-img" alt="catImg-05" loading="lazy" />
              </router-link>
              <div class="category-details">
                <h5 class="category-title mb-0">
                  <router-link to="/merchandise/shop"> {{ $t('streamShop.galaxy_heaven') }} </router-link>
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li" class="swiper-slide slide-item">
          <div class="category-inner position-relative">
            <div class="category_image">
              <router-link to="/merchandise/shop">
                <img src="/assets/images/shop/categories/06.webp" class="img-fluid categorys-img" alt="catImg-06" />
              </router-link>
              <div class="category-details">
                <h5 class="category-title mb-0">
                  <router-link to="/merchandise/shop"> {{ $t('streamShop.ghost_spider') }} </router-link>
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li" class="swiper-slide slide-item">
          <div class="category-inner position-relative">
            <div class="category_image">
              <router-link to="/merchandise/shop">
                <img src="/assets/images/shop/categories/07.webp" class="img-fluid categorys-img" alt="catImg-07" loading="lazy" />
              </router-link>
              <div class="category-details">
                <h5 class="category-title mb-0">
                  <router-link to="/merchandise/shop"> {{ $t('streamShop.harry_david') }} </router-link>
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li" class="swiper-slide slide-item">
          <div class="category-inner position-relative">
            <div class="category_image">
              <router-link to="/merchandise/shop">
                <img src="/assets/images/shop/categories/08.webp" class="img-fluid categorys-img" alt="catImg-08" />
              </router-link>
              <div class="category-details">
                <h5 class="category-title mb-0">
                  <router-link to="/merchandise/shop"> {{ $t('streamShop.haunted_halloween') }} </router-link>
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li" class="swiper-slide slide-item">
          <div class="category-inner position-relative">
            <div class="category_image">
              <router-link to="/merchandise/shop">
                <img src="/assets/images/shop/categories/09.webp" class="img-fluid categorys-img" alt="catImg-09" loading="lazy" />
              </router-link>
              <div class="category-details">
                <h5 class="category-title mb-0">
                  <router-link to="/merchandise/shop"> {{ $t('streamShop.studios') }} </router-link>
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li" class="swiper-slide slide-item">
          <div class="category-inner position-relative">
            <div class="category_image">
              <router-link to="/merchandise/shop">
                <img src="/assets/images/shop/categories/11.webp" class="img-fluid categorys-img" alt="catImg-10" />
              </router-link>
              <div class="category-details">
                <h5 class="category-title mb-0">
                  <router-link to="/merchandise/shop"> {{ $t('streamShop.monster_house') }} </router-link>
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li" class="swiper-slide slide-item">
          <div class="category-inner position-relative">
            <div class="category_image">
              <router-link to="/merchandise/shop">
                <img src="/assets/images/shop/categories/12.webp" class="img-fluid categorys-img" alt="catImg-11" loading="lazy" />
              </router-link>
              <div class="category-details">
                <h5 class="category-title mb-0">
                  <router-link to="/merchandise/shop"> {{ $t('streamShop.quid_game') }} </router-link>
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li" class="swiper-slide slide-item">
          <div class="category-inner position-relative">
            <div class="category_image">
              <router-link to="/merchandise/shop">
                <img src="/assets/images/shop/categories/14.webp" class="img-fluid categorys-img" alt="catImg-12" />
              </router-link>
              <div class="category-details">
                <h5 class="category-title mb-0">
                  <router-link to="/merchandise/shop"> {{ $t('streamShop.the_madrid') }} </router-link>
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li" class="swiper-slide slide-item">
          <div class="category-inner position-relative">
            <div class="category_image">
              <router-link to="/merchandise/shop">
                <img src="/assets/images/shop/categories/15.webp" class="img-fluid categorys-img" alt="catImg-13" loading="lazy" />
              </router-link>
              <div class="category-details">
                <h5 class="category-title mb-0">
                  <router-link to="/merchandise/shop"> {{ $t('streamShop.the_chapion') }} </router-link>
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </swiper>
      <!-- </div> -->
    </b-container>
  </section>
  <!---Best Selling Categories End--->
  <section>
    <b-container fluid class="p-xl-0 overflow-hidden">
      <b-row>
        <b-col lg="4" md="6" class="d-flex flex-column gap-4">
          <div class="product-box left-1-productbox">
            <router-link :to="{ name: 'landing-page.merchandise.shop' }" class="card-link"></router-link>
            <div class="card-img-overlay product-card-img-overlay" :style="`background-image: url(${generateImgPath('/assets/images/shop/card/01.webp')})`"></div>
            <div class="card-body w-100">
              <!-- <h5 class="card-title">{{ $t('streamShop.ghost_spider') }}</h5> -->
              <h4 class="parent-heading">{{ $t('streamShop.monster_house') }}</h4>
              <div>
                <router-link :to="{ name: 'landing-page.merchandise.shop' }" class="btn btn-link p-0 text-capitalize position-relative">
                  <span class="button-text">{{ $t('streamButtons.shop_now') }}</span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="product-box left-2-productbox">
            <router-link :to="{ name: 'landing-page.merchandise.shop' }" class="card-link"></router-link>
            <div class="card-img-overlay product-card-img-overlay mt-lg-0 mt-md-4 mt-4" :style="`background-image: url(${generateImgPath('/assets/images/shop/card/02.webp')})`"></div>
            <div class="card-body w-100">
              <!-- <h5 class="card-title">{{ $t('streamShop.harry_david') }}</h5> -->
              <h4 class="parent-heading">{{ $t('streamShop.warner_bros_films') }}</h4>
              <div>
                <router-link :to="{ name: 'landing-page.merchandise.shop' }" class="btn btn-link p-0 text-capitalize position-relative">
                  <span class="button-text">{{ $t('streamButtons.shop_now') }}</span></router-link
                >
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="4" md="6" class="mt-md-0 mt-4">
          <div class="center-productbox product-box">
            <router-link :to="{ name: 'landing-page.merchandise.shop' }" class="card-link"></router-link>
            <div class="card-img-overlay product-card-img-overlay" :style="`background-image: url(${generateImgPath('/assets/images/shop/card/03.webp')})`"></div>
            <div class="card-body w-100">
              <!-- <h5 class="card-title">{{ $t('streamShop.avengers') }}</h5> -->
              <h4 class="parent-heading">{{ $t('streamShop.marvel_studios') }}</h4>
              <div>
                <router-link :to="{ name: 'landing-page.merchandise.shop' }" class="btn btn-link p-0 text-capitalize position-relative">
                  <span class="button-text">{{ $t('streamButtons.shop_now') }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="4" md="12" class="d-flex flex-column mt-lg-0 mt-md-4 mt-4 gap-4">
          <div class="product-box right-1-productbox">
            <router-link :to="{ name: 'landing-page.merchandise.shop' }" class="card-link"></router-link>
            <div class="card-img-overlay product-card-img-overlay md-mt-5" :style="`background-image: url(${generateImgPath('/assets/images/shop/card/04.webp')})`"></div>
            <div class="card-body w-100">
              <!-- <h5 class="card-title">{{ $t('streamShop.harry_david') }}</h5> -->
              <h4 class="parent-heading">{{ $t('streamShop.warner_bros_films') }}</h4>
              <div>
                <router-link :to="{ name: 'landing-page.merchandise.shop' }" class="btn btn-link p-0 text-capitalize position-relative">
                  <span class="button-text">{{ $t('streamButtons.shop_now') }}</span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="product-box right-2-productbox">
            <router-link :to="{ name: 'landing-page.merchandise.shop' }" class="card-link"></router-link>
            <div class="card-img-overlay product-card-img-overlay mt-lg-0 mt-md-4 mt-4" :style="`background-image: url(${generateImgPath('/assets/images/shop/card/05.webp')})`"></div>
            <div class="card-body w-100">
              <!-- <h5 class="card-title">{{ $t('streamShop.fantasia') }}</h5> -->
              <h4 class="parent-heading">{{ $t('streamShop.disney_world') }}</h4>
              <div>
                <router-link :to="{ name: 'landing-page.merchandise.shop' }" class="btn btn-link p-0 text-capitalize position-relative">
                  <span class="button-text">{{ $t('streamButtons.shop_now') }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <div class="newest-product-block section-padding-top">
    <b-container fluid>
      <div class="overflow-hidden">
        <ProductSection :not-want-more-btn="false" title="sectionTitle.newest_products"></ProductSection>
      </div>
    </b-container>
  </div>
  <section class="section-padding-bottom">
    <b-container>
      <b-row>
        <b-col lg="6" md="6">
          <div class="categorie-about-left">
            <div class="categorie-about-image">
              <img src="/assets/images/shop/card/capton-america.webp" class="img-fluid" loading="lazy" />
            </div>
            <div class="text-left mb-4 pt-3">
              <h4 class="mb-2 line-count-1">{{ $t('streamShop.captian_america') }}</h4>
              <p class="mb-4 mt-2 line-count-3">{{ $t('streamShop.lorem_ipsum') }}</p>
              <custom-button :not-btncaret-icon="true" :button-title="$t('streamButtons.view_collection')" :link="{ name: 'landing-page.merchandise.shop' }"></custom-button>
            </div>
          </div>
        </b-col>
        <b-col lg="6" md="6">
          <div class="categorie-about-right">
            <div class="categorie-about-image">
              <img src="/assets/images/shop/card/deadpool.webp" class="img-fluid" loading="lazy" />
            </div>
            <div class="text-left mb-4 pt-3">
              <h4 class="mb-2 line-count-1">{{ $t('streamShop.deadpool') }}</h4>
              <p class="mb-4 mt-2 line-count-3">{{ $t('streamShop.lorem_ipsum') }}</p>
              <custom-button :not-btncaret-icon="true" :button-title="$t('streamButtons.view_collection')" :link="{ name: 'landing-page.merchandise.shop' }"></custom-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <section
    class="section-padding merchandise-section"
    :style="{
      backgroundImage: `url(${generateImgPath('/assets/images/shop/card/bg-img.webp')})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }">
    <b-container fluid>
      <b-row class="align-items-center">
        <b-col lg="6" md="6" cols="12">
          <img src="/assets/images/shop/card/multipal.webp" class="img-fluid" alt="img" loading="lazy" />
        </b-col>
        <b-col lg="6" md="6" cols="12" class="mt-4 mt-md-0">
          <!--Logo -->
          <brand-logo></brand-logo>
          <h2 class="mt-3 mb-4 pb-2">{{ $t('streamShop.wear_streamit') }}</h2>
          <p class="mb-4 line-count-3">{{ $t('streamShop.buy_exclusive') }}</p>
          <custom-button :not-btncaret-icon="true" :button-title="$t('streamButtons.shop_now')" :link="{ name: 'landing-page.merchandise.shop.detail' }"></custom-button>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <div class="best-product-block section-padding-top">
    <b-container fluid>
      <div class="overflow-hidden">
        <ProductSection :not-want-more-btn="false" title="sectionTitle.best_sellers"></ProductSection>
      </div>
    </b-container>
  </div>
  <div class="product_container">
    <b-row class="gx-0">
      <b-col lg="6" class="shop-contact-one">
        <a href="javascript:void(0);">
          <div class="channel-logo">
            <h3>{{ $t('streamShop.our_multiple') }}</h3>
          </div>
        </a>

        <b-row class="my-4">
          <b-col lg="6" md="6">
            <h5 class="mb-2">{{ $t('streamAccount.australia') }}:</h5>
            <p>24 Isaac Road. Ellendale, Tasmania 7140</p>
          </b-col>
          <b-col lg="6" md="6">
            <h5 class="mb-2">{{ $t('streamAccount.australia') }}:</h5>
            <p>2118 {{ $t('streamShop.thornridge_cir') }} 35624</p>
          </b-col>
        </b-row>
        <div class="d-flex align-items-md-center flex-column flex-md-row gap-3">
          <h5 class="m-0">{{ $t('streamShop.working_hours') }}:</h5>
          <i class="text-primary shop_store_time"> Mon – Fri : 09:00 AM to 06:00 PM</i>
        </div>
      </b-col>
      <b-col lg="6" class="shop-contact">
        <img class="img-fluid h-100 w-100" src="/assets/images/shop/card/location.webp" alt="img" loading="lazy" />
      </b-col>
    </b-row>
  </div>
</template>
<script setup>

import ProductSection from '../../components/sections/ProductSection.vue';
import { generateImgPath } from '../../StaticData/data';
import { Navigation } from 'swiper';
// Swiper Components Import

import { Swiper, SwiperSlide } from 'swiper/vue';
import { heroSlider } from '../../StaticData/shop';
import { ref, computed, watch } from 'vue';
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
const modules = [Navigation];

</script>
