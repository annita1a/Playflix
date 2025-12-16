<template>
  <header class="header-center-home header-default header-sticky">
    <nav class="nav navbar navbar-expand-xl navbar-light iq-navbar header-hover-menu py-xl-0">
      <div class="container-fluid navbar-inner">
        <div class="d-flex align-items-center justify-content-between w-100 landing-header">
          <div class="d-flex gap-3 gap-xl-0 align-items-center">
            <div class="d-flex align-items-center gap-2 gap-md-3">
              <BrandLogo />
              <div>
                <nuxt-link :to="{ name: 'pricing-plan' }" class="subscribe-btn btn btn-warning-subtle py-1 py-md-2 px-2 px-ms-3" active-class="" exact-active-class="">
                  <span class="d-flex align-items-center gap-2 text-warning">
                    <i class="ph-fill ph-crown align-middle fs-6"></i>
                    <span class="d-xl-block d-none">{{ $t('streamButtons.subscribe') }}</span>
                  </span>
                </nuxt-link>
              </div>
            </div>
          </div>
          <nav id="navbar_main" :class="`offcanvas mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav py-xl-0 w-100 ${IS_MEGA ? 'mega-menu-content' : ''
            }`">
            <div class="container-fluid p-lg-0">
              <div class="offcanvas-header px-0">
                <div class="navbar-brand ms-3">
                  <BrandLogo />
                </div>
                <button type="button" class="btn-close float-end px-3" data-bs-dismiss="offcanvas"
                  aria-label="Close"></button>
              </div>
              <ul id="header-menu" class="navbar-nav iq-nav-menu list-unstyled">
                <li class="nav-item">
                  <a class="nav-link"
                  :class="{ active: isAnyActive(['index','home','movies','tv-shows','videos','merchandise-home']) }"
                   data-bs-toggle="collapse" href="#homePages" role="button" aria-expanded="false"
                    aria-controls="homePages">
                    <div class="d-flex justify-content-between">
                      <span class="item-name">{{ $t("streamPages.home") }}</span>{{ " " }}
                      <span class="menu-icon">
                        <i class="ph ph-caret-down align-middle"></i>
                      </span>
                    </div>
                  </a>
                  <ul id="homePages" :class="`sub-nav collapse justify-content-center list-unstyled ${IS_MEGA ? 'mega-menu-item' : ''
                    }`">
                    <li :class="['nav-item', isActiveRoute('index') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'index' }">
                        <img v-if="IS_MEGA" src="/assets/images/mega-menu/new-home.webp" alt="img"
                          class="img-fluid d-xl-block d-none" loading="lazy" />
                        <span class="d-inline-block">{{
                          $t("streamPages.ott_home")
                        }}</span>
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('home') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'home' }">
                        <img v-if="IS_MEGA" src="/assets/images/mega-menu/home.webp" alt="img"
                          class="img-fluid d-xl-block d-none" loading="lazy" />
                        <span class="d-inline-block">{{
                          $t("streamPages.mainHome")
                        }}</span>
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('movies') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'movies' }">
                        <img v-if="IS_MEGA" src="/assets/images/mega-menu/movie.webp" alt="img"
                          class="img-fluid d-xl-block d-none" loading="lazy" />
                        <span class="d-inline-block">{{
                          $t("streamPages.movie")
                        }}</span>
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('tv-shows') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'tv-shows' }">
                        <img v-if="IS_MEGA" src="/assets/images/mega-menu/tv-show.webp" alt="img"
                          class="img-fluid d-xl-block d-none" loading="lazy" />
                        <span class="d-inline-block">{{
                          $t("streamPages.tv_show")
                        }}</span>
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('videos') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'videos' }">
                        <img v-if="IS_MEGA" src="/assets/images/mega-menu/video.webp" alt="img"
                          class="img-fluid d-xl-block d-none" loading="lazy" />
                        <span class="d-inline-block">{{
                          $t("streamPages.video")
                        }}</span>
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('merchandise-home') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'merchandise-home' }">
                        <img v-if="IS_MEGA" src="/assets/images/mega-menu/shop-home.webp" alt="img"
                          class="img-fluid d-xl-block d-none" loading="lazy" />
                        <span class="d-inline-block">{{
                          $t("streamPages.merchandise_store")
                        }}</span>
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link"
                  :class="{ active: isAnyActive(['movies-download','movies-restricted','movies-related','genres','tags','cast']) }"
                   data-bs-toggle="collapse" href="#features" role="button" aria-expanded="false"
                    aria-controls="homePages">
                    <div class="d-flex justify-content-between">
                      <span class="item-name">{{ $t("streamPages.features") }}</span>{{ " " }}
                      <span class="menu-icon">
                        <i class="ph ph-caret-down align-middle"></i>
                      </span>
                    </div>
                  </a>
                  <ul id="features" class="sub-nav collapse list-unstyled">
                    <li :class="['nav-item', isActiveRoute('movies-download') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'movies-download' }">
                        {{ $t("streamPages.download_movie") }}</nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('movies-restricted') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'movies-restricted' }">
                        {{ $t("streamPages.restricted_content") }}
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('movies-related') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'movies-related' }">
                        {{ $t("streamPages.related_merchandise") }}</nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('genres') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'genres' }">
                        {{ $t("streamGenres.genre") }}
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('tags') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'tags' }">
                        {{ $t("streamTag.tags") }}
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('cast') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'cast' }">
                        {{ $t("streamPages.cast") }}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item" active-class="" exact-active-class="">
                  <a class="nav-link" 
                  :class="{ active: isAnyActive(['extra-about-us', 'extra-contact-us', 'extra-faq', 'pricing-plan', 'extra-privacy-policy', 'extra-terms-of-use', 'extra-coming-soon', 'extra-error-page-one']) }"
                  data-bs-toggle="collapse" to="#pages" role="button" aria-expanded="false"
                    aria-controls="homePages">
                    <div class="d-flex justify-content-between">
                      <span class="item-name">{{ $t("streamPages.pages") }}</span>{{ " " }}
                      <span class="menu-icon">
                        <i class="ph ph-caret-down align-middle"></i>
                      </span>
                    </div>
                  </a>
                  <ul id="pages" class="sub-nav collapse list-unstyled">
                    <li :class="['nav-item', isActiveRoute('extra-about-us') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'extra-about-us' }">
                        {{ $t("streamPages.about_us") }}
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('extra-contact-us') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'extra-contact-us' }">
                        {{ $t("streamPages.contact_us") }}
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('extra-faq') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'extra-faq' }">
                        {{ $t("streamPages.faq") }}
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('pricing-plan') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'pricing-plan' }">
                        {{ $t("streamPages.pricing_plan") }}
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('extra-privacy-policy') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'extra-privacy-policy' }">
                        {{ $t("sectionTitle.privacy_policy") }}
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('extra-terms-of-use') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'extra-terms-of-use' }">
                        {{ $t("sectionTitle.terms_and_use") }}
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('extra-coming-soon') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'extra-coming-soon' }">
                        {{ $t("streamPages.coming_soon") }}
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('extra-error-page-one') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'extra-error-page-one' }">
                        {{ $t("streamPages.error_404") }}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" 
                  :class="{ active: isAnyActive(['blogs', 'blogs-grid-type', { type: 'one-column' }, { type: 'two-column' }, { type: 'three-column' }, { type: 'four-column' }, 'blogs-sidebar-type', { type: 'left' }, 'blogs-sidebar-type', { type: 'right' }, 'blogs-single-type', {type: 'single'}, {type: 'audio'}, {type: 'video'}, {type: 'link'}, {type: 'quote'}, {type: 'gallery'}, 'blogs-pagination-style-type', {type: 'blog-pagination'}, {type: 'blog-load-more'}, {type: 'blog-infinite-scroll'} ])  }"
                  data-bs-toggle="collapse" to="#blog" role="button" aria-expanded="false"
                    aria-controls="blog">
                    <div class="d-flex justify-content-between">
                      <span class="item-name">{{ $t("streamPages.blog") }}</span>{{ " " }}
                      <span class="menu-icon">
                        <i class="ph ph-caret-down align-middle"></i>
                      </span>
                    </div>
                  </a>
                  <ul id="blog" class="sub-nav collapse list-unstyled">
                    <li class="nav-item">
                      <nuxt-link class="nav-link" :to="{ name: 'blogs' }">
                        {{ $t("streamPages.listing") }}
                      </nuxt-link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="collapse" to="#blog-grid" role="button" aria-expanded="false"
                        aria-controls="blog-grid">
                        <div class="d-flex justify-content-between">
                          <span class="item-name">{{
                            $t("streamPages.blog_grid")
                          }}</span>
                          <span class="menu-icon">
                            <i class="ph ph-caret-down align-middle down-to-right"></i>
                          </span>
                        </div>
                      </a>
                      <ul id="blog-grid" class="sub-nav collapse list-unstyled">
                        <li :class="['nav-item', isActiveRoute('blogs-grid-type', { type: 'one-column' }) ? 'active' : '']">
                          <nuxt-link class="nav-link" :to="{
                            name: 'blogs-grid-type',
                            params: { type: 'one-column' },
                          }">
                            {{ $t("streamPages.1_column_blog") }}
                          </nuxt-link>
                        </li>
                        <li :class="['nav-item', isActiveRoute('blogs-grid-type', { type: 'two-column' }) ? 'active' : '']">
                          <nuxt-link class="nav-link" :to="{
                            name: 'blogs-grid-type',
                            params: { type: 'two-column' },
                          }">
                            {{ $t("streamPages.2_column_blog") }}
                          </nuxt-link>
                        </li>
                        <li :class="['nav-item', isActiveRoute('blogs-grid-type', { type: 'three-column' }) ? 'active' : '']">
                          <nuxt-link class="nav-link" :to="{
                            name: 'blogs-grid-type',
                            params: { type: 'three-column' },
                          }">
                            {{ $t("streamPages.3_column_blog") }}
                          </nuxt-link>
                        </li>
                        <li :class="['nav-item', isActiveRoute('blogs-grid-type', { type: 'four-column' }) ? 'active' : '']">
                          <nuxt-link class="nav-link" :to="{
                            name: 'blogs-grid-type',
                            params: { type: 'four-column' },
                          }">
                            {{ $t("streamPages.4_column_blog") }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" 
                      data-bs-toggle="collapse" to="#blog-sidebar" role="button"
                        aria-expanded="false" aria-controls="blog-sidebar">
                        <div class="d-flex justify-content-between">
                          <span class="item-name">{{
                            $t("streamPages.blog_sidebar")
                          }}</span>
                          <span class="menu-icon">
                            <i class="ph ph-caret-down align-middle down-to-right"></i>
                          </span>
                        </div>
                      </a>
                      <ul id="blog-sidebar" class="sub-nav collapse list-unstyled">
                        <li :class="['nav-item', isActiveRoute('blogs-sidebar-type', { type: 'left' }) ? 'active' : '']">
                          <nuxt-link class="nav-link" :to="{
                            name: 'blogs-sidebar-type',
                            params: { type: 'left' },
                          }">
                            {{ $t("streamPages.left_sidebar") }}
                          </nuxt-link>
                        </li>
                        <li :class="['nav-item', isActiveRoute('blogs-sidebar-type', { type: 'right' }) ? 'active' : '']">
                          <nuxt-link class="nav-link" :to="{
                            name: 'blogs-sidebar-type',
                            params: { type: 'right' },
                          }">
                            {{ $t("streamPages.right_sidebar") }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="collapse" to="#blog-single" role="button"
                        aria-expanded="false" aria-controls="blog-single">
                        <div class="d-flex justify-content-between">
                          <span class="item-name">{{
                            $t("streamPages.blog_single")
                          }}</span>
                          <span class="menu-icon">
                            <i class="ph ph-caret-down align-middle down-to-right"></i>
                          </span>
                        </div>
                      </a>
                      <ul id="blog-single" class="sub-nav collapse list-unstyled">
                        <li :class="['nav-item', isActiveRoute('blogs-single-type', { type: 'single' }) ? 'active' : '']">
                          <nuxt-link class="nav-link" :to="{ name: 'blogs-single-type', params: { type: 'single' } }">
                            {{ $t("streamPages.standard") }}
                          </nuxt-link>
                        </li>
                        <li :class="['nav-item', isActiveRoute('blogs-single-type', { type: 'audio' }) ? 'active' : '']">
                          <nuxt-link class="nav-link" :to="{
                            name: 'blogs-single-type',
                            params: { type: 'audio' },
                          }">
                            {{ $t("streamPages.audio") }}
                          </nuxt-link>
                        </li>
                        <li :class="['nav-item', isActiveRoute('blogs-single-type', { type: 'video' }) ? 'active' : '']">
                          <nuxt-link class="nav-link" :to="{
                            name: 'blogs-single-type',
                            params: { type: 'video' },
                          }">
                            {{ $t("streamPages.video") }}
                          </nuxt-link>
                        </li>
                        <li :class="['nav-item', isActiveRoute('blogs-single-type', { type: 'link' }) ? 'active' : '']">
                          <nuxt-link class="nav-link" :to="{
                            name: 'blogs-single-type',
                            params: { type: 'link' },
                          }">
                            {{ $t("streamPages.link") }}
                          </nuxt-link>
                        </li>
                        <li :class="['nav-item', isActiveRoute('blogs-single-type', { type: 'quote' }) ? 'active' : '']">
                          <nuxt-link class="nav-link" :to="{
                            name: 'blogs-single-type',
                            params: { type: 'quote' },
                          }">
                            {{ $t("streamPages.quote") }}
                          </nuxt-link>
                        </li>
                        <li :class="['nav-item', isActiveRoute('blogs-single-type', { type: 'gallery' }) ? 'active' : '']">
                          <nuxt-link class="nav-link" :to="{
                            name: 'blogs-single-type',
                            params: { type: 'gallery' },
                          }">
                            {{ $t("streamPages.gallery") }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="collapse" to="#pagination-style" role="button"
                        aria-expanded="false" aria-controls="pagination-style">
                        <div class="d-flex justify-content-between">
                          <span class="item-name">{{
                            $t("streamPages.blog_pagination")
                          }}</span>
                          <span class="menu-icon">
                            <i class="ph ph-caret-down align-middle down-to-right"></i>
                          </span>
                        </div>
                      </a>
                      <ul id="pagination-style" class="sub-nav collapse list-unstyled">
                        <li :class="['nav-item', isActiveRoute('blogs-pagination-style-type', { type: 'blog-pagination' }) ? 'active' : '']">
                          <nuxt-link class="nav-link" :to="{
                            name: 'blogs-pagination-style-type',
                            params: { type: 'blog-pagination' },
                          }">
                            {{ $t("streamPages.blog_pagination") }}
                          </nuxt-link>
                        </li>
                        <li :class="['nav-item', isActiveRoute('blogs-pagination-style-type', { type: 'blog-load-more' }) ? 'active' : '']">
                          <nuxt-link class="nav-link" :to="{
                            name: 'blogs-pagination-style-type',
                            params: { type: 'blog-load-more' },
                          }">
                            {{ $t("streamPages.blog_load_more") }}
                          </nuxt-link>
                        </li>
                        <li :class="['nav-item', isActiveRoute('blogs-pagination-style-type', { type: 'blog-infinite-scroll' }) ? 'active' : '']">
                          <nuxt-link class="nav-link" :to="{
                            name: 'blogs-pagination-style-type',
                            params: { type: 'blog-infinite-scroll' },
                          }">
                            {{ $t("streamPages.blog_infinite_scroll") }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a 
                  class="nav-link"
                  :class="{ active: isAnyActive(['merchandise-shop', 'merchandise-account', 'merchandise-cart', 'merchandise-wishlist', 'merchandise-checkout', 'merchandise-track-order']) }"
                   data-bs-toggle="collapse" to="#shop" role="button" aria-expanded="false"
                    aria-controls="shop">
                    <div class="d-flex justify-content-between">
                      <span class="item-name">{{ $t("streamPages.shop") }}</span>{{ " " }}
                      <span class="menu-icon">
                        <i class="ph ph-caret-down align-middle"></i>
                      </span>
                    </div>
                  </a>
                  <ul id="shop" class="sub-nav collapse list-unstyled">
                    <li :class="['nav-item', isActiveRoute('merchandise-shop') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'merchandise-shop' }">
                        {{ $t("streamPages.shop") }}
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('merchandise-account') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'merchandise-account' }">
                        {{ $t("streamAccount.my_account") }}
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('merchandise-cart') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'merchandise-cart' }">
                        {{ $t("streamShop.cart") }}
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('merchandise-wishlist') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'merchandise-wishlist' }">
                        {{ $t("streamPages.wishlist") }}
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('merchandise-checkout') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'merchandise-checkout' }">
                        {{ $t("streamShop.checkout") }}
                      </nuxt-link>
                    </li>
                    <li :class="['nav-item', isActiveRoute('merchandise-track-order') ? 'active' : '']">
                      <nuxt-link class="nav-link" :to="{ name: 'merchandise-track-order' }">
                        {{ $t("streamPages.order_tracking") }}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- container-fluid.// -->
          </nav>
          <div class="css_prefix-header-right d-flex align-items-center gap-2">
            <ul
              class="list-inline d-flex align-items-center gap-3 gap-md-4 mb-0 ps-0 justify-content-md-end justify-content-between">
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
                          <svg class="icon-15" width="15" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"></circle>
                            <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-items dropdown">
                <a id="languageDropdown" class="nav-link shoping-cart-button text-white" href="#" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="ph ph-translate p-0"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end border-0 p-0 m-0" aria-labelledby="languageDropdown">
                  <li v-for="loc in i18n.availableLocales" :key="loc">
                    <a href="#" class="dropdown-item" @click.prevent="i18n.locale.value = loc; localChange(loc)">
                      {{ loc }}
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link shoping-cart-button text-white" href="" data-bs-toggle="offcanvas"
                  data-bs-target="#shoping-cart-toggle" aria-controls="shoping-cart-toggle"
                  aria-label="Open shopping cart">
                  <i class="ph ph-bag p-0"></i>
                  <span class="bg-primary text-white shopping-badge">1</span>
                </a>
              </li>
              <li id="itemdropdown1" class="nav-item dropdown cust-itemdropdown1">
                <nuxt-link id="navbarDropdown" class="nav-link d-flex align-items-center p-0" to="#" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <div class="st-avatar style-1">
                    <img src="/assets/images/user/user6.jpg" alt="user"
                      class="img-fluid rounded-circle dropdown-user-menu-image header-user-image" lazy="loading" />
                  </div>
                </nuxt-link>
                <div class="dropdown-menu dropdown-user-menu dropdown-menu-end border border-gray-900 rounded-3"
                  data-popper-placement="bottom-end"
                  style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 74px)"
                  data-bs-popper="static">
                  <div class="user-dropdown-inner">
                    <!-- User Info -->
                    <div class="d-flex align-items-center gap-3 rounded mb-4">
                      <div class="image flex-shrink-0">
                        <img src="/assets/images/user/user6.jpg" class="img-fluid rounded-3 dropdown-user-menu-image"
                          alt="Marvin McKinney" />
                      </div>
                      <div class="content">
                        <h6 class="mb-1">{{ $t('streamShop.greeting_name') }}</h6>
                      </div>
                    </div>

                    <!-- Menu Items -->
                    <ul class="d-flex flex-column gap-3 list-inline m-0 p-0">
                      <li>
                        <nuxt-link :to="{ name: 'profile-profile-marvin' }"
                          class="link-body-emphasis font-size-14 d-flex align-items-center gap-2">
                          <i class="ph ph-user"></i>
                          <span class="fw-medium">{{ $t('streamAccount.profile') }}</span>
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link :to="{ name: 'watchlist-detail' }"
                          class="link-body-emphasis font-size-14 d-flex align-items-center gap-2">
                          <i class="ph ph-plus"></i>
                          <span class="fw-medium">{{ $t('streamButtons.watch_list') }}</span>
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link :to="{ name: 'archive-playlist' }"
                          class="link-body-emphasis font-size-14 d-flex align-items-center gap-2">
                          <i class="ph ph-playlist"></i>
                          <span class="fw-medium">{{ $t('streamPages.playlist') }}</span>
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link :to="{ name: 'profile-profile-marvin' }"
                          class="link-body-emphasis font-size-14 d-flex align-items-center gap-2">
                          <i class="ph ph-bell"></i>
                          <span class="fw-medium">{{ $t('streamAccount.notification') }}</span>
                        </nuxt-link>
                      </li>
                    </ul>
                  </div>

                  <!-- Logout -->
                  <nuxt-link :to="{ name: 'auth-login' }"
                    class="btn btn-link p-3 d-block font-size-14 text-center text-decoration-none border-top">
                    <span class="d-flex align-items-center justify-content-center gap-2 fw-medium">
                      <i class="ph ph-sign-out"></i>
                      {{ $t('streamAccount.logout') }}
                    </span>
                  </nuxt-link>
                </div>
              </li>
            </ul>
            <button class="navbar-toggler d-block d-xl-none text-white" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbar_main" aria-controls="navbar_main" aria-expanded="false"
              aria-label="Toggle navigation">
              <i class="ph ph-list"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <div id="shoping-cart-toggle"
    class="offcanvas overflow-y-auto widget-shopping-cart-content offcanvas-end offcanvas-sidebar sidebar-container on-rtl end border-0"
    tabindex="-1">
    <div class="offcanvas-header position-relative">
      <h5 id="offcanvasExampleLabel" class="offcanvas-title fw-500">{{ $t('streamShop.shopping_cart') }} ( <span
          class="streamit-cart-count" aria-live="polite">1</span> )</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="product-list-content">
        <ul class="list-unstyled mb-0">
          <li class="mini-cart-item d-flex align-items-start gap-3">
            <div class="cart-img">
              <nuxt-link to="/merchandise/cart" aria-label="Bag Pack">
                <img src="/assets/images/shop/product/01.webp" class="img-fluid" width="300" height="400"
                  alt="Bag Pack" />
              </nuxt-link>
            </div>
            <div class="cart-content flex-grow-1">
              <div class="d-flex justify-content-between align-items-center">
                <nuxt-link class="d-block" to="/" aria-label="Bag Pack">
                  <h6 class="fw-500">{{ $t('streamShop.product1') }}</h6>
                </nuxt-link>
                <a href="javascript:void(0)" class="delete-btn" @click="deleteSwal()">
                  <i class="ph ph-trash text-primary"></i>
                </a>
              </div>
              <div class="product-price text-muted">
                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-amount amount"><span
                      class="woocommerce-Price-currencySymbol">₹</span>11.05</span></span>
              </div>
              <div class="btn-group iq-qty-btn custom-qty-btn rounded-3" data-qty="btn" role="group">
                <button type="button" class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0">
                  <i class="ph ph-minus"></i>
                </button>
                <input type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input"
                  pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2" title="Qty" />
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
        <span class="st-woocommerce-Price-amount amount"><span class="woocommerce-Price-amount amount"><span
              class="woocommerce-Price-currencySymbol">₹</span>11.05</span></span>
      </div>
      <div class="mini-cart-buttons d-flex flex-column align-items-center gap-3 mt-4">
        <div class="iq-button w-100">
          <nuxt-link :to="{ name: 'merchandise-checkout' }" class="btn btn-primary text-capitalize w-100 rounded-3">
            <span class="button-text">{{ $t('streamShop.checkout') }}</span>
          </nuxt-link>
        </div>
        <div class="w-100">
          <nuxt-link to="/merchandise/cart" class="btn btn-secondary text-capitalize w-100 rounded-3">
            <span class="button-text">{{ $t('streamButtons.view_cart') }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import BrandLogo from "../brand/BrandLogo.vue";
import { useRoute } from "vue-router";
import { useSetting } from '../../store/setting';
import { useI18n } from 'vue-i18n';
const store = useSetting();
const route = useRoute();
const IS_MEGA = ref(route.name == "index" ? true : false);
watch(
  () => route.name,
  () => {
    if (route.name == "index") {
      IS_MEGA.value = true;
    } else {
      IS_MEGA.value = false;
    }
  }
);

const i18n = useI18n();

const localChange = (loc) => {
  if (loc === 'ar') {
    store.theme_scheme_direction('rtl');
  } else {
    store.theme_scheme_direction('ltr');
  }
  sessionStorage.setItem('language', loc);
};

const handleScroll = () => {
  const headerSticky = document.querySelector(".header-sticky");
  if (headerSticky) {
    if (window.scrollY > 1) {
      headerSticky.classList.add("sticky");
    } else {
      headerSticky.classList.remove("sticky");
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const isActiveRoute = (name, params = {}) => {
  if (route.name !== name) return false;

  for (const key in params) {
    if (route.params[key] !== params[key]) return false;
  }

  return true;
};

const isAnyActive = (routes) => {
  return routes.some(route => {
    if (typeof route === 'string') {
      return isActiveRoute(route);
    } else if (route.name) {
      return isActiveRoute(route.name, route.params || {});
    }
    return false;
  });
};
</script>
