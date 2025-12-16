<template>
  <!-- Header -->
  <header class="header-center-home header-merchandise">
    <div class="header-top d-xl-block d-none">
      <b-container fluid>
        <b-row class="align-items-center">
          <b-col md="3">
            <div class="d-flex align-items-center gap-2 gap-md-3">
              <router-link class="navbar-brand" :to="{ name: 'landing-page.ott' }">
                <BrandLogo />
              </router-link>
              <div>
                <router-link :to="{ name: 'landing-page.pricing-plan' }" class="subscribe-btn btn btn-warning-subtle py-1 py-md-2 px-2 px-ms-3">
                  <span class="d-flex align-items-center gap-2 text-warning">
                    <i class="ph-fill ph-crown align-middle fs-6"></i>
                    <span>{{ $t('streamButtons.subscribe') }}</span>
                  </span>
                </router-link>
              </div>
            </div>
          </b-col>
          <b-col md="9">
            <ul class="d-flex align-items-center justify-content-end gap-3 list-inline mb-0">
              <li>
                <div class="search-box-2">
                  <form>
                    <input type="text" class="form-control" :placeholder="$t('streamAccount.search_dot')" />
                    <button type="submit" class="search-btn">
                      <svg width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                        <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </li>
              <li class="nav-items dropdown">
                <a id="languageDropdown" class="shoping-cart-button text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="btn-icon rounded-pill user-icons">
                    <i class="ph ph-translate fs-5"></i>
                  </span>
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
              <li>
                <a class="shoping-cart-button text-white" href="" data-bs-toggle="offcanvas" data-bs-target="#shoping-cart-toggle" aria-controls="shoping-cart-toggle" aria-label="Open shopping cart">
                  <span class="btn-icon rounded-pill user-icons">
                    <i class="ph ph-handbag fs-5"></i>
                  </span>
                </a>
              </li>
              <li id="itemdropdown1" class="dropdown">
                <a id="navbarDropdown" class="text-white d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <div class="btn-icon rounded-pill user-icons">
                    <span class="btn-inner d-flex align-items-center justify-content-center">
                      <i class="ph ph-user-plus fs-5"></i>
                    </span>
                  </div>
                </a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-user border-0 p-0 m-0" aria-labelledby="navbarDropdown">
                  <li class="user-info mb-3">
                    <router-link :to="{ path: '/profile-marvin' }" class="d-flex align-items-center gap-3">
                      <img src="/assets/images/user/user6.jpg" class="img-fluid" alt="img" loading="lazy" />
                      <span class="font-size-14 fw-500 text-capitalize text-white">{{ $t('streamAccount.jenny') }}</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ path: '/my-account' }" class="iq-sub-card d-flex align-items-center gap-3">
                      <i class="ph ph-user fw-bold"></i>
                      <h6 class="mb-0 font-size-14 fw-normal">{{ $t('streamAccount.my_account') }}</h6>
                    </router-link>
                  </li>
                  <li>
                     <router-link :to="{ path: '/watchlist-detail' }" class="iq-sub-card d-flex align-items-center gap-3">
                      <i class="ph ph-plus fw-bold"></i>
                      <h6 class="mb-0 font-size-14 fw-normal">{{ $t('streamAccount.watchlist') }}</h6>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ path: '/pricing-plan' }" class="iq-sub-card d-flex align-items-center gap-3">
                      <i class="ph ph-star fw-bold"></i>
                      <h6 class="mb-0 font-size-14 fw-normal">{{ $t('streamAccount.subscription') }}</h6>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/login" class="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2">
                      <i class="ph ph-sign-out fw-bold fs-5"></i>
                      <h6 class="mb-0 font-size-14 fw-normal">{{ $t('streamAccount.logout') }}</h6>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="header-bottom header-sticky">
      <nav class="nav navbar navbar-expand-xl navbar-light iq-navbar header-hover-menu py-xl-0 py-3">
        <b-container fluid class="navbar-inner">
          <div class="d-flex align-items-center justify-content-between w-100 landing-header">
            <div class="d-xl-none d-flex gap-3 gap-xl-0 align-items-center">
              <div>
                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar_main" aria-controls="navbar_main" class="d-xl-none bg-primary rounded-pill p-1 toggle-rounded-btn d-flex align-items-center">
                  <i class="ph ph-arrow-right fs-5 fw-bold"></i>
                </button>
              </div>
              <div class="d-flex align-items-center gap-2 gap-md-3">
                <!--Logo -->
                <BrandLogo />
                <div>
                  <router-link :to="{ name: 'landing-page.pricing-plan' }" class="subscribe-btn btn btn-warning-subtle py-1 py-md-2 px-2 px-ms-3">
                    <span class="d-flex align-items-center gap-2 text-warning">
                      <i class="ph-fill ph-crown align-middle fs-6"></i>
                    </span>
                  </router-link>
                </div>
              </div>
            </div>
            <nav id="navbar_main" class="offcanvas mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav py-xl-0 w-100">
              <b-container fluid class="p-lg-0">
                <div class="offcanvas-header justify-content-between px-0">
                  <div class="navbar-brand ms-3">
                    <!--Logo -->
                    <BrandLogo />
                  </div>
                  <button type="button" class="btn-close float-end px-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <ul id="header-menu" class="navbar-nav iq-nav-menu list-unstyled">
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="collapse" href="#homePages" role="button" aria-expanded="false" aria-controls="homePages">
                      <div class="d-flex justify-content-between">
                        <span class="item-name">{{ $t('streamPages.home') }}</span>
                        <span class="menu-icon">
                          <i class="ph ph-caret-down align-middle"></i>
                        </span>
                      </div>
                    </a>
                    <ul id="homePages" class="sub-nav collapse list-unstyled">
                      <li class="nav-item">
                        <router-link :class="`nav-link ${IS_MEGA ? 'p-0' : ''}`" :to="{ name: 'landing-page.ott' }">
                          <img v-if="IS_MEGA" src="/assets/images/mega-menu/new-home.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                          <span class="d-inline-block">{{ $t('streamPages.ott_home') }} </span>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link :class="`nav-link ${IS_MEGA ? 'p-0' : ''}`" :to="{ name: 'landing-page.home' }">
                          <img v-if="IS_MEGA" src="/assets/images/mega-menu/home.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                          <span class="d-inline-block">{{ $t('streamPages.mainHome') }}</span>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link :class="`nav-link ${IS_MEGA ? 'p-0' : ''}`" :to="{ name: 'landing-page.movies' }">
                          <img v-if="IS_MEGA" src="/assets/images/mega-menu/movie.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                          <span class="d-inline-block">{{ $t('streamPages.movie') }}</span>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link :class="`nav-link ${IS_MEGA ? 'p-0' : ''}`" :to="{ name: 'landing-page.tv-shows' }">
                          <img v-if="IS_MEGA" src="/assets/images/mega-menu/tv-show.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                          <span class="d-inline-block">{{ $t('streamPages.tv_show') }}</span>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link :class="`nav-link ${IS_MEGA ? 'p-0' : ''}`" :to="{ name: 'landing.videos' }">
                          <img v-if="IS_MEGA" src="/assets/images/mega-menu/video.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                          <span class="d-inline-block">{{ $t('streamPages.video') }}</span>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link :class="`nav-link ${IS_MEGA ? 'p-0' : ''}`" :to="{ name: 'landing-page.merchandise.home' }">
                          <img v-if="IS_MEGA" src="/assets/images/mega-menu/shop-home.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                          <span class="d-inline-block">{{ $t('streamPages.merchandise_store') }}</span>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="collapse" href="#features" role="button" aria-expanded="false" aria-controls="homePages">
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
                        <router-link class="nav-link" :to="{ name: 'landing-page.movies.dowlnload-movie' }">{{ $t('streamPages.download_movie') }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.movies.skull-island' }"> {{ $t('streamPages.restricted_content') }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.movies.related' }"> {{ $t('streamPages.related_merchandise') }} </router-link>
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
                    <a class="nav-link" data-bs-toggle="collapse" href="#pages" role="button" aria-expanded="false" aria-controls="homePages">
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
                    <a class="nav-link" data-bs-toggle="collapse" href="#blog" role="button" aria-expanded="false" aria-controls="blog">
                      <div class="d-flex justify-content-between">
                        <span class="item-name">{{ $t('streamPages.blog') }}</span>
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
                          <!-- <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.blogs.template' }"> {{ $t('streamPages.blog_template') }} </router-link>
                          </li> -->
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
                    <a class="nav-link" data-bs-toggle="collapse" href="#shop" role="button" aria-expanded="false" aria-controls="shop" :class="route.name === 'landing-page.merchandise.shop' ? 'active' : ''">
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
                        <router-link class="nav-link" :to="{ name: 'landing-page.account' }"> {{ $t('streamPages.my_account_page') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.cart' }"> {{ $t('streamPages.cart_page') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.wishlist' }"> {{ $t('streamPages.wishlist_page') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.checkout' }"> {{ $t('streamPages.checkout_page') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.track-order' }"> {{ $t('streamPages.order_tracking') }} </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </b-container>
            </nav>
            <div class="right-panel">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-btn">
                  <span class="navbar-toggler-icon"></span>
                </span>
              </button>
              <div id="navbarSupportedContent" class="collapse navbar-collapse p-3">
                <div class="iq-meta-menu-container d-xl-block d-none">
                  <ul class="d-flex align-items-center m-0 list-inline iq-meta-menu">
                    <li>
                      <router-link :to="{ name: 'landing-page.account' }">{{ $t('streamAccount.my_account') }}</router-link>
                    </li>
                    <li>
                      <a href="https://iqonic.desky.support/">{{ $t('streamAccount.customer_support') }}</a>
                    </li>
                    <li>
                      <router-link :to="{ name: 'landing-page.contact-us' }">{{ $t('streamAccount.help') }}</router-link>
                    </li>
                  </ul>
                </div>
                <div class="d-xl-none">
                  <ul class="d-flex align-items-center justify-content-end gap-3 list-inline mb-0">
                    <li>
                      <div class="search-box-2">
                        <form>
                          <input type="text" class="form-control" placeholder="Search..." />
                          <button type="submit" class="search-btn d-flex align-items-center">
                            <i class="ph ph-magnifying-glass"></i>
                          </button>
                        </form>
                      </div>
                    </li>
                    <li>
                      <a class="shoping-cart-button text-white" href="" data-bs-toggle="offcanvas" data-bs-target="#shoping-cart-toggle" aria-controls="shoping-cart-toggle" aria-label="Open shopping cart">
                        <span class="btn-icon rounded-pill user-icons">
                          <i class="ph ph-handbag fs-5"></i>
                        </span>
                      </a>
                    </li>
                    <li id="itemdropdown2" class="dropdown">
                      <a id="navbarDropdown2" class="text-white d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <div class="btn-icon rounded-pill user-icons">
                          <span class="btn-inner d-flex">
                            <i class="ph ph-user-plus fs-5"></i>
                          </span>
                        </div>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end dropdown-user border-0 p-0 m-0" aria-labelledby="navbarDropdown2">
                        <router-link :to="{ path: '/profile-marvin' }" class="user-info d-flex align-items-center gap-3 mb-3">
                          <img src="/assets/images/user/user6.jpg" class="img-fluid" alt="img" loading="lazy" />
                          <span class="font-size-14 fw-500 text-capitalize text-white">{{ $t('streamAccount.jenny') }}</span>
                        </router-link>
                        <router-link :to="{ path: '/my-account' }" class="iq-sub-card d-flex align-items-center gap-3">
                          <i class="ph ph-user fw-bold"></i>
                          <h6 class="mb-0 font-size-14 fw-normal">{{ $t('streamAccount.my_account') }}</h6>
                        </router-link>
                        <router-link :to="{ name: 'landing-page.view-all' }" class="iq-sub-card d-flex align-items-center gap-3">
                          <i class="ph ph-plus fw-bold"></i>
                          <h6 class="mb-0 font-size-14 fw-normal">{{ $t('streamAccount.watchlist') }}</h6>
                        </router-link>
                        <router-link :to="{ name: 'landing-page.pricing-plan' }" class="iq-sub-card d-flex align-items-center gap-3">
                          <i class="ph ph-star fw-bold"></i>
                          <h6 class="mb-0 font-size-14 fw-normal">{{ $t('streamAccount.subscription') }}</h6>
                        </router-link>
                        <a href="#" class="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2">
                          <i class="ph ph-sign-out"></i>
                          <h6 class="mb-0 font-size-14 fw-normal">{{ $t('streamAccount.logout') }}</h6>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </b-container>
      </nav>
    </div>
  </header>
  <!-- Header End -->
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import BrandLogo from '../../brand/BrandLogo.vue';
import { useRoute } from 'vue-router';
import { useSetting } from '../../../store/setting';

const store = useSetting();

const localChange = (locale) => {
  if (locale === 'ar') {
    store.theme_scheme_direction('rtl');
  } else {
    store.theme_scheme_direction('ltr');
  }
};

const IS_MEGA = ref(false);
const route = useRoute();
watch(
  () => route.name,
  () => {
    if (route.name == 'landing-page.ott') {
      IS_MEGA.value = true;
    } else {
      IS_MEGA.value = false;
    }
  }
);

// console.log(route.name);

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

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
