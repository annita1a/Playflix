<template>
  <header class="header-center-home header-default header-sticky">
    <nav class="nav navbar navbar-expand-xl navbar-light iq-navbar header-hover-menu py-xl-0">
      <b-container fluid class="navbar-inner">
        <div class="d-flex align-items-center justify-content-between w-100 landing-header">
          <div class="d-flex gap-3 gap-xl-0 align-items-center">
            <div class="d-flex align-items-center gap-2 gap-md-3">
              <BrandLogo />
              <div>
                <router-link :to="{ name: 'landing-page.pricing-plan' }" class="subscribe-btn btn btn-warning-subtle py-1 py-md-2 px-2 px-ms-3" active-class="" exact-active-class="">
                  <span class="d-flex align-items-center gap-2 text-warning">
                    <i class="ph-fill ph-crown align-middle fs-6"></i>
                    <span class="d-xl-block d-none">{{ $t('streamButtons.subscribe') }}</span>
                  </span>
                </router-link>
              </div>
            </div>
          </div>
          <HorizotalNav :toggle="toggleOffcanvas" :value="show" />
          <div class="css_prefix-header-right d-flex align-items-center gap-2">
            <ul class="list-inline d-flex align-items-center gap-3 gap-md-4 mb-0 ps-0 justify-content-md-end justify-content-between">
              <li class="nav-item dropdown iq-responsive-menu d-xl-block d-none">
                <div class="search-box">
                  <a id="search-drop" to="#" class="nav-link p-0 text-white" data-bs-toggle="dropdown">
                    <div class="btn-icon btn-sm rounded-pill btn-action">
                      <span class="btn-inner">
                        <i class="ph ph-magnifying-glass p-0"></i>
                      </span>
                    </div>
                  </a>
                  <ul class="dropdown-menu p-0 dropdown-search m-0 iq-search-bar" style="width: 20rem">
                    <li class="p-0">
                      <div class="form-group input-group mb-0">
                        <input type="text" class="form-control border-0" :placeholder="$t('streamAccount.search_dot')" />
                        <button type="submit" class="search-submit">
                          <svg class="icon-15" width="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                            <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <!-- <li id="itemdropdown1" class="nav-item dropdown">
                <select v-model="$i18n.locale" class="form-select py-1 ms-2" @change="localChange($i18n.locale)">
                  <option v-for="locale in $i18n.availableLocales" :key="locale" :value="locale">
                    <a href="#" class="dropdown-item">{{ locale }}</a>
                  </option>
                </select>
              </li> -->
              <li class="nav-items dropdown">
                <a id="languageDropdown" class="nav-link shoping-cart-button text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="ph ph-translate p-0"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end border-0 p-0 m-0" aria-labelledby="languageDropdown">
                  <li v-for="locale in $i18n.availableLocales" :key="locale">
                    <a
                      href="#"
                      class="dropdown-item"
                      @click.prevent="
                        $i18n.locale = locale;
                        localChange(locale);
                      ">
                      {{ locale }}
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link shoping-cart-button text-white" href="" data-bs-toggle="offcanvas" data-bs-target="#shoping-cart-toggle" aria-controls="shoping-cart-toggle" aria-label="Open shopping cart">
                  <i class="ph ph-bag p-0"></i>
                  <span class="bg-primary text-white shopping-badge">1</span>
                </a>
              </li>
              <li id="itemdropdown1" class="nav-item dropdown cust-itemdropdown1">
                <router-link id="navbarDropdown" class="nav-link d-flex align-items-center p-0" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <div class="st-avatar style-1">
                    <img src="/assets/images/user/user6.jpg" alt="user" class="img-fluid rounded-circle dropdown-user-menu-image header-user-image" lazy="loading" />
                  </div>
                </router-link>
                <div class="dropdown-menu dropdown-user-menu dropdown-menu-end border border-gray-900 rounded-3" data-popper-placement="bottom-end" style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 74px)" data-bs-popper="static">
                  <div class="user-dropdown-inner">
                    <!-- User Info -->
                    <div class="d-flex align-items-center gap-3 rounded mb-4">
                      <div class="image flex-shrink-0">
                        <img src="/assets/images/user/user6.jpg" class="img-fluid rounded-3 dropdown-user-menu-image" alt="Marvin McKinney" />
                      </div>
                      <div class="content">
                        <h6 class="mb-1">{{ $t('streamShop.greeting_name') }}</h6>
                      </div>
                    </div>

                    <!-- Menu Items -->
                    <ul class="d-flex flex-column gap-3 list-inline m-0 p-0">
                      <li>
                        <router-link :to="{ path: '/profile-marvin' }" class="link-body-emphasis font-size-14 d-flex align-items-center gap-2">
                          <i class="ph ph-user"></i>
                          <span class="fw-medium">{{ $t('streamAccount.profile') }}</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link :to="{ path: '/watchlist-detail' }" class="link-body-emphasis font-size-14 d-flex align-items-center gap-2">
                          <i class="ph ph-plus"></i>
                          <span class="fw-medium">{{ $t('streamAccount.watch_list') }}</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link :to="{ path: '/archive-playlist' }" class="link-body-emphasis font-size-14 d-flex align-items-center gap-2">
                          <i class="ph ph-playlist"></i>
                          <span class="fw-medium">{{ $t('streamPages.playlist') }}</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link :to="{ path: '/profile-marvin' }" class="link-body-emphasis font-size-14 d-flex align-items-center gap-2">
                          <i class="ph ph-bell"></i>
                          <span class="fw-medium">{{ $t('streamAccount.notification') }}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>

                  <!-- Logout -->
                  <router-link :to="{ name: 'landing-page.login-page' }" class="btn btn-link p-3 d-block font-size-14 text-center text-decoration-none border-top">
                    <span class="d-flex align-items-center justify-content-center gap-2 fw-medium">
                      <i class="ph ph-sign-out"></i>
                      {{ $t('streamAccount.logout') }}
                    </span>
                  </router-link>
                </div>
              </li>
            </ul>
            <button class="navbar-toggler d-block d-xl-none text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_main" aria-controls="navbar_main" aria-expanded="false" aria-label="Toggle navigation">
              <i class="ph ph-list"></i>
            </button>
          </div>
        </div>
      </b-container>
    </nav>
  </header>
  <div id="shoping-cart-toggle" class="offcanvas overflow-y-auto widget-shopping-cart-content offcanvas-end offcanvas-sidebar sidebar-container on-rtl end border-0" tabindex="-1">
    <div class="offcanvas-header justify-content-between position-relative">
      <h5 id="offcanvasExampleLabel" class="offcanvas-title fw-500">{{ $t('streamShop.shopping_cart') }} ( <span class="streamit-cart-count" aria-live="polite">1</span> )</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="product-list-content">
        <ul class="list-unstyled mb-0">
          <li class="mini-cart-item d-flex align-items-start gap-3">
            <div class="cart-img">
              <router-link :to="{ name: 'landing-page.cart' }" aria-label="Bag Pack">
                <img src="/assets/images/shop/product/01.webp" class="img-fluid" width="300" height="400" alt="Bag Pack" />
              </router-link>
            </div>
            <div class="cart-content flex-grow-1">
              <div class="d-flex justify-content-between align-items-center">
                <router-link class="d-block" :to="{ name: 'landing-page.merchandise.shop.detail' }" aria-label="Bag Pack">
                  <h6 class="fw-500">{{ $t('streamShop.product1') }}</h6>
                </router-link>
                <a href="javascript:void(0)" class="delete-btn" @click="deleteSwal()">
                  <i class="ph ph-trash text-primary"></i>
                </a>
              </div>
              <div class="product-price text-muted">
                <span class="woocommerce-Price-amount amount"
                  ><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₹</span>11.05</span></span
                >
              </div>
              <div class="btn-group iq-qty-btn custom-qty-btn rounded-3" data-qty="btn" role="group">
                <button type="button" class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0">
                  <i class="ph ph-minus"></i>
                </button>
                <input type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input" pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2" title="Qty" />
                <button type="button" class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                  <i class="ph ph-plus"></i>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="offcanvas-footer border-top py-3 px-3">
      <div class="d-flex align-items-center justify-content-between gap-3">
        <strong>{{ $t('streamShop.subtotal') }}:</strong>
        <span class="st-woocommerce-Price-amount amount"
          ><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₹</span>11.05</span></span
        >
      </div>
      <div class="mini-cart-buttons d-flex flex-column align-items-center gap-3 mt-4">
        <div class="iq-button w-100">
          <router-link :to="{ name: 'landing-page.checkout' }" class="btn btn-primary text-capitalize w-100 rounded-3">
            <span class="button-text">{{ $t('streamShop.checkout') }}</span>
          </router-link>
        </div>
        <div class="w-100">
          <router-link :to="{ name: 'landing-page.cart' }" class="btn btn-secondary text-capitalize w-100 rounded-3">
            <span class="button-text">{{ $t('streamButtons.view_cart') }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Swal from 'sweetalert2';
import { ref, onMounted, onUnmounted } from 'vue';
import BrandLogo from '../brand/BrandLogo.vue';
import { useSetting } from '../../store/setting';
import HorizotalNav from './HorizotalNav.vue';

const store = useSetting();

const show = ref(false);

const toggleOffcanvas = () => {
  show.value = !show.value;
};

const localChange = (locale) => {
  if (locale === 'ar') {
    store.theme_scheme_direction('rtl');
  } else {
    store.theme_scheme_direction('ltr');
  }
  sessionStorage.setItem('language', locale);
};

const handleScroll = () => {
  const headerSticky = document.querySelector('.header-sticky');
  if (headerSticky) {
    if (window.scrollY > 1) {
      headerSticky.classList.add('sticky');
    } else {
      headerSticky.classList.remove('sticky');
    }
  }
};

const deleteSwal = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You want to delete this item',
    icon: 'error',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    background: 'var(--bs-gray-900)',
    color: 'var(--bs-white)',
    backdrop: 'rgba(60,60,60,0.8)',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Deleted!',
        text: 'Your item has been deleted.',
        icon: 'success',
        background: 'var(--bs-gray-900)',
        color: 'var(--bs-white)',
        backdrop: 'rgba(60,60,60,0.8)',
      }); 
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>