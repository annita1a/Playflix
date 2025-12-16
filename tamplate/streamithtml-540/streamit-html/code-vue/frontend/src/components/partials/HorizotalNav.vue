<template>
  <nav id="navbar_main" :class="['offcanvas', 'mobile-offcanvas', 'nav', 'navbar', 'navbar-expand-xl', 'hover-nav', 'horizontal-nav', 'py-xl-0', 'w-100', { show: value }, IS_MEGA ? 'mega-menu-content' : '']">
    <b-container fluid class="p-lg-0">
      <div class="offcanvas-header justify-content-between px-0">
        <div class="navbar-brand ms-3">
          <BrandLogo />
        </div>
        <button type="button" class="btn-close float-end px-3" aria-label="Close" @click="toggle"></button>
      </div>
      <ul id="header-menu" class="navbar-nav iq-nav-menu list-unstyled">
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="collapse" href="#homePages" role="button" aria-expanded="false" aria-controls="homePages" :class="route.name === 'landing-page.home' || route.name === 'landing-page.ott' || route.name === 'landing-page.movies' || route.name === 'landing-page.tv-shows' || route.name === 'landing.videos' || route.name === 'landing-page.merchandise' ? 'active' : ''">
            <div class="d-flex justify-content-between">
              <span class="item-name">{{ $t('streamPages.home') }}</span
              >{{ ' ' }}
              <span class="menu-icon">
                <i class="ph ph-caret-down align-middle"></i>
              </span>
            </div>
          </a>
          <ul id="homePages" :class="`sub-nav collapse justify-content-center list-unstyled ${IS_MEGA ? 'mega-menu-item' : ''}`">
            <li class="nav-item">
              <router-link :class="`nav-link ${IS_MEGA && ''}`" :to="{ name: 'landing-page.ott' }">
                <img v-if="IS_MEGA" src="/assets/images/mega-menu/new-home.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                <span class="d-inline-block">{{ $t('streamPages.ott_home') }}</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :class="`nav-link ${IS_MEGA && ''}`" :to="{ name: 'landing-page.home' }">
                <img v-if="IS_MEGA" src="/assets/images/mega-menu/home.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                <span class="d-inline-block">{{ $t('streamPages.mainHome') }}</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :class="`nav-link ${IS_MEGA && ''}`" :to="{ name: 'landing-page.movies' }">
                <img v-if="IS_MEGA" src="/assets/images/mega-menu/movie.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                <span class="d-inline-block">{{ $t('streamPages.movie') }}</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :class="`nav-link ${IS_MEGA && ''}`" :to="{ name: 'landing-page.tv-shows' }">
                <img v-if="IS_MEGA" src="/assets/images/mega-menu/tv-show.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                <span class="d-inline-block">{{ $t('streamPages.tv_show') }}</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :class="`nav-link ${IS_MEGA && ''}`" :to="{ name: 'landing.videos' }">
                <img v-if="IS_MEGA" src="/assets/images/mega-menu/video.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                <span class="d-inline-block">{{ $t('streamPages.video') }}</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :class="`nav-link ${IS_MEGA && ''}`" :to="{ name: 'landing-page.merchandise.home' }">
                <img v-if="IS_MEGA" src="/assets/images/mega-menu/shop-home.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                <span class="d-inline-block">{{ $t('streamPages.merchandise_store') }}</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="collapse" href="#features" role="button" aria-expanded="false" aria-controls="homePages" :class="route.name === 'landing-page.movies.skull-island' || route.name === 'landing-page.movies.related' || route.name === 'landing-page.geners' || route.name === 'landing-page.cast' || route.name === 'landing-page.tags' ? 'active' : ''">
            <div class="d-flex justify-content-between">
              <span class="item-name">{{ $t('streamPages.features') }}</span
              >{{ ' ' }}
              <span class="menu-icon">
                <i class="ph ph-caret-down align-middle"></i>
              </span>
            </div>
          </a>
          <ul id="features" class="sub-nav collapse list-unstyled">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.movies.dowlnload-movie' }"> {{ $t('streamPages.download_movie') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.movies.skull-island' }"> {{ $t('streamPages.restricted_content') }} </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.movies.related' }"> {{ $t('streamPages.related_merchandise') }}</router-link>
            </li>
            <!-- <li class="nav-item">
                      <router-link class="nav-link" :to="{ name: 'landing-page.play-list' }"> {{ $t('streamPages.playlist') }}</router-link>
                    </li> -->
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.geners' }"> {{ $t('streamPages.geners') }} </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.tags' }"> {{ $t('streamPages.tags') }} </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.cast' }"> {{ $t('streamPages.cast') }} </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="collapse" href="#pages" role="button" aria-expanded="false" aria-controls="homePages" :class="route.name === 'landing-page.about-us' || route.name === 'landing-page.contact-us' || route.name === 'landing-page.faq' || route.name === 'landing-page.privacy-policy' || route.name === 'landing-page.pricing-plan' || route.name === '' ? 'active' : ''">
            <div class="d-flex justify-content-between">
              <span class="item-name">{{ $t('streamPages.pages') }}</span
              >{{ ' ' }}
              <span class="menu-icon">
                <i class="ph ph-caret-down align-middle"></i>
              </span>
            </div>
          </a>
          <ul id="pages" class="sub-nav collapse list-unstyled">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.about-us' }"> {{ $t('streamPages.about_us') }} </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.contact-us' }"> {{ $t('streamPages.contact_us') }} </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.faq' }"> {{ $t('streamPages.faq') }} </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.pricing-plan' }"> {{ $t('streamPages.pricing_plan') }} </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.privacy-policy' }"> {{ $t('streamPages.privacy_policy') }} </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.terms-of-use' }"> {{ $t('streamPages.terms_and_use') }} </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.comming-soon' }"> {{ $t('streamPages.coming_soon') }} </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.error-page-one' }"> {{ $t('streamPages.error_404') }} </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="collapse" href="#blog" role="button" aria-expanded="false" aria-controls="blog" :class="route.name === 'landing-page.blogs' || route.name === 'landing-page.blogs.single' || route.name === 'landing-page.blogs-pagination' || route.name === 'landing-page.blogs-load-more' || route.name === 'landing-page.blogs-infinite-scroll' || route.name === 'langing-page.blogs-grid' || route.name === 'landing-page.blogs-sidebar' || route.name === 'landing-page.blogs.template' ? 'active' : ''">
            <div class="d-flex justify-content-between">
              <span class="item-name">{{ $t('streamPages.blog') }}</span
              >{{ ' ' }}
              <span class="menu-icon">
                <i class="ph ph-caret-down align-middle"></i>
              </span>
            </div>
          </a>
          <ul id="blog" class="sub-nav collapse list-unstyled">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.blogs' }"> {{ $t('streamPages.listing') }} </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#blog-grid" role="button" aria-expanded="false" aria-controls="blog-grid">
                <div class="d-flex justify-content-between">
                  <span class="item-name">{{ $t('streamPages.blog_grid') }}</span>
                  <span class="menu-icon">
                    <i class="ph ph-caret-down align-middle down-to-right"></i>
                  </span>
                </div>
              </a>
              <ul id="blog-grid" class="sub-nav collapse list-unstyled">
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'landing-page.blogs-grid', params: { grid: 'one-column' } }"> {{ $t('streamPages.1_column_blog') }} </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'landing-page.blogs-grid', params: { grid: 'two-column' } }"> {{ $t('streamPages.2_column_blog') }} </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'landing-page.blogs-grid', params: { grid: 'three-column' } }"> {{ $t('streamPages.3_column_blog') }} </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'landing-page.blogs-grid', params: { grid: 'four-column' } }"> {{ $t('streamPages.4_column_blog') }} </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#blog-sidebar" role="button" aria-expanded="false" aria-controls="blog-sidebar">
                <div class="d-flex justify-content-between">
                  <span class="item-name">{{ $t('streamPages.blog_sidebar') }}</span>
                  <span class="menu-icon">
                    <i class="ph ph-caret-down align-middle down-to-right"></i>
                  </span>
                </div>
              </a>
              <ul id="blog-sidebar" class="sub-nav collapse list-unstyled">
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'landing-page.blogs-sidebar' }"> {{ $t('streamPages.left_sidebar') }} </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'landing-page.blogs-sidebar.right' }"> {{ $t('streamPages.right_sidebar') }} </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#blog-single" role="button" aria-expanded="false" aria-controls="blog-single">
                <div class="d-flex justify-content-between">
                  <span class="item-name">{{ $t('streamPages.blog_single') }}</span>
                  <span class="menu-icon">
                    <i class="ph ph-caret-down align-middle down-to-right"></i>
                  </span>
                </div>
              </a>
              <ul id="blog-single" class="sub-nav collapse list-unstyled">
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'landing-page.blogs.single', params: { type: 'single' } }"> {{ $t('streamPages.standard') }} </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'landing-page.blogs.single', params: { type: 'audio' } }"> {{ $t('streamPages.audio') }} </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'landing-page.blogs.single', params: { type: 'video' } }"> {{ $t('streamPages.video') }} </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'landing-page.blogs.single', params: { type: 'link' } }"> {{ $t('streamPages.link') }} </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'landing-page.blogs.single', params: { type: 'quote' } }"> {{ $t('streamPages.quote') }} </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'landing-page.blogs.single', params: { type: 'gallery' } }"> {{ $t('streamPages.gallery') }} </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#pagination-style" role="button" aria-expanded="false" aria-controls="pagination-style">
                <div class="d-flex justify-content-between">
                  <span class="item-name">{{ $t('streamPages.pagination_style') }}</span>
                  <span class="menu-icon">
                    <i class="ph ph-caret-down align-middle down-to-right"></i>
                  </span>
                </div>
              </a>
              <ul id="pagination-style" class="sub-nav collapse list-unstyled">
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'landing-page.blogs-pagination' }"> {{ $t('streamPages.blog_pagination') }} </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'landing-page.blogs-load-more' }"> {{ $t('streamPages.blog_load_more') }} </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'landing-page.blogs-infinite-scroll' }"> {{ $t('streamPages.blog_infinite_scroll') }} </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="collapse" href="#shop" role="button" aria-expanded="false" aria-controls="shop" :class="route.name === 'landing-page.account' || route.name === 'landing-page.cart' || route.name === 'landing-page.wishlist' || route.name === 'landing-page.checkout' || route.name === 'landing-page.track-order' || route.name === 'landing-page.product-detail' ? 'active' : ''">
            <div class="d-flex justify-content-between">
              <span class="item-name">{{ $t('streamPages.shop') }}</span
              >{{ ' ' }}
              <span class="menu-icon">
                <i class="ph ph-caret-down align-middle"></i>
              </span>
            </div>
          </a>
          <ul id="shop" class="sub-nav collapse list-unstyled">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.merchandise.shop' }"> {{ $t('streamPages.shop') }} </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.account' }"> {{ $t('streamAccount.my_account') }} </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.cart' }"> {{ $t('streamShop.cart') }} </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.wishlist' }"> {{ $t('streamPages.wishlist') }} </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.checkout' }"> {{ $t('streamShop.checkout') }} </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'landing-page.track-order' }"> {{ $t('streamPages.order_tracking') }} </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </b-container>
    <!-- container-fluid.// -->
  </nav>
  <div v-if="props.value" class="offcanvas-backdrop fade show" @click="toggle"></div>
</template>
<script setup>
import { computed } from 'vue';
import BrandLogo from '../brand/BrandLogo.vue';
import { useRoute } from 'vue-router';


const props = defineProps({
  toggle: Function,
  value: { type: Boolean, default: false },
});

const route = useRoute();
const IS_MEGA = computed(() => route.name === 'landing-page.ott');
</script>
