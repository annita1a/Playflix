<template>
  <!-- Header -->
  <header class="header-center-home header-merchandise">
    <div class="header-top d-xl-block d-none">
      <b-container fluid>
        <b-row class="align-items-center">
          <b-col md="3">
            <div class="d-flex align-items-center gap-2 gap-md-3">
              <nuxt-link class="navbar-brand" :to="{ name: 'index' }">
                <BrandLogo />
              </nuxt-link>
              <div>
                <nuxt-link
                  :to="{ name: 'pricing-plan' }"
                  class="subscribe-btn btn btn-warning-subtle py-1 py-md-2 px-2 px-ms-3"
                >
                  <span class="d-flex align-items-center gap-2 text-warning">
                    <i class="ph-fill ph-crown align-middle fs-6"></i>
                    <span>{{ $t("streamButtons.subscribe") }}</span>
                  </span>
                </nuxt-link>
              </div>
            </div>
          </b-col>
          <b-col md="9">
            <ul
              class="d-flex align-items-center justify-content-end gap-3 list-inline mb-0"
            >
              <li>
                <div class="search-box-2">
                  <form>
                    <input
                      type="text"
                      class="form-control"
                      :placeholder="$t('streamAccount.search_dot')"
                    />
                    <button type="submit" class="search-btn">
                      <svg
                        width="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="11.7669"
                          cy="11.7666"
                          r="8.98856"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></circle>
                        <path
                          d="M18.0186 18.4851L21.5426 22"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </li>
              <li class="nav-items dropdown">
                <a
                  id="languageDropdown"
                  class="shoping-cart-button text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="btn-icon rounded-pill user-icons">
                    <i class="ph ph-translate fs-5"></i>
                  </span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end border-0 p-0 m-0"
                  aria-labelledby="languageDropdown"
                >
                  <li v-for="loc in availableLocales" :key="loc">
                    <a
                      href="#"
                      class="dropdown-item"
                      @click.prevent="
                        locale.value = loc;
                        localChange(loc);
                      "
                    >
                      {{ loc }}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="shoping-cart-button text-white"
                  href=""
                  data-bs-toggle="offcanvas"
                  data-bs-target="#shoping-cart-toggle"
                  aria-controls="shoping-cart-toggle"
                  aria-label="Open shopping cart"
                >
                  <span class="btn-icon rounded-pill user-icons">
                    <i class="ph ph-handbag fs-5"></i>
                  </span>
                </a>
              </li>
              <li id="itemdropdown1" class="dropdown">
                <a
                  id="navbarDropdown"
                  class="text-white d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div class="btn-icon rounded-pill user-icons">
                    <span
                      class="btn-inner d-flex align-items-center justify-content-center"
                    >
                      <i class="ph ph-user-plus fs-5"></i>
                    </span>
                  </div>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end dropdown-user border-0 p-0 m-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li class="user-info mb-3">
                    <a
                      href="/profile/profile-marvin"
                      class="d-flex align-items-center gap-3"
                    >
                    <img
                      src="/assets/images/user/user1.webp"
                      class="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                    <span
                      class="font-size-14 fw-500 text-capitalize text-white"
                      >{{ $t("streamAccount.jenny") }}</span
                    ></a>
                  </li>
                  <li>
                    <a
                      href="/merchandise/account"
                      class="iq-sub-card d-flex align-items-center gap-3"
                    >
                      <i class="ph ph-user fw-bold"></i>
                      <h6 class="mb-0 font-size-14 fw-normal">
                        {{ $t("streamAccount.my_account") }}
                      </h6>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/watchlist-detail"
                      class="iq-sub-card d-flex align-items-center gap-3"
                    >
                      <i class="ph ph-plus fw-bold"></i>
                      <h6 class="mb-0 font-size-14 fw-normal">
                        {{ $t("streamButtons.watchlist") }}
                      </h6>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing-plan"
                      class="iq-sub-card d-flex align-items-center gap-3"
                    >
                      <i class="ph ph-star fw-bold"></i>
                      <h6 class="mb-0 font-size-14 fw-normal">
                        {{ $t("streamAccount.subscription") }}
                      </h6>
                    </a>
                  </li>
                  <li>
                    <nuxt-link
                      :to="{name: 'auth-login'}"
                      class="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2"
                    >
                      <i class="ph ph-sign-out fw-bold fs-5"></i>
                      <h6 class="mb-0 font-size-14 fw-normal">
                        {{ $t("streamAccount.logout") }}
                      </h6>
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="header-bottom header-sticky">
      <nav
        class="nav navbar navbar-expand-xl navbar-light iq-navbar header-hover-menu py-xl-0 py-3"
      >
        <b-container fluid class="navbar-inner">
          <div
            class="d-flex align-items-center justify-content-between w-100 landing-header"
          >
            <div class="d-xl-none d-flex gap-3 gap-xl-0 align-items-center">
              <div>
                <button
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#navbar_main"
                  aria-controls="navbar_main"
                  class="d-xl-none bg-primary rounded-pill p-1 toggle-rounded-btn d-flex align-items-center"
                >
                  <i class="ph ph-arrow-right fs-5 fw-bold"></i>
                </button>
              </div>
              <div class="d-flex align-items-center gap-2 gap-md-3">
                <!--Logo -->
                <BrandLogo />
                <div>
                  <nuxt-link
                    :to="{ name: 'pricing-plan' }"
                    class="subscribe-btn btn btn-warning-subtle py-1 py-md-2 px-2 px-ms-3"
                  >
                    <span class="d-flex align-items-center gap-2 text-warning">
                      <i class="ph-fill ph-crown align-middle fs-6"></i>
                    </span>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <nav
              id="navbar_main"
              class="offcanvas mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav py-xl-0 w-100"
            >
              <b-container fluid class="p-lg-0">
                <div class="offcanvas-header px-0">
                  <div class="navbar-brand ms-3">
                    <!--Logo -->
                    <BrandLogo />
                  </div>
                  <button
                    type="button"
                    class="btn-close float-end px-3"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <ul
                  id="header-menu"
                  class="navbar-nav iq-nav-menu list-unstyled"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      :class="{ active: isAnyActive(['merchandise-home']) }"
                      data-bs-toggle="collapse"
                      href="#homePages"
                      role="button"
                      aria-expanded="false"
                      aria-controls="homePages"
                    >
                      <div class="d-flex justify-content-between">
                        <span class="item-name">{{ $t("streamPages.home") }}</span>
                        <span class="menu-icon">
                          <i class="ph ph-caret-down align-middle"></i>
                        </span>
                      </div>
                    </a>
                    <ul id="homePages" class="sub-nav collapse list-unstyled">
                      <li class="nav-item">
                        <nuxt-link class="nav-link" :to="{ name: 'index' }">
                          <img
                            v-if="IS_MEGA"
                            src="/assets/images/mega-menu/new-home.webp"
                            alt="img"
                            class="img-fluid d-xl-block d-none"
                            loading="lazy"
                          />
                          <span class="d-inline-block">{{
                            $t("streamPages.ott_home")
                          }}</span>
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link class="nav-link" :to="{ name: 'home' }">
                          <img
                            v-if="IS_MEGA"
                            src="/assets/images/mega-menu/home.webp"
                            alt="img"
                            class="img-fluid d-xl-block d-none"
                            loading="lazy"
                          />
                          <span class="d-inline-block">{{
                            $t("streamPages.mainHome")
                          }}</span>
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link class="nav-link" :to="{ name: 'movies' }">
                          <img
                            v-if="IS_MEGA"
                            src="/assets/images/mega-menu/movie.webp"
                            alt="img"
                            class="img-fluid d-xl-block d-none"
                            loading="lazy"
                          />
                          <span class="d-inline-block">{{
                            $t("streamPages.movie")
                          }}</span>
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link class="nav-link" :to="{ name: 'tv-shows' }">
                          <img
                            v-if="IS_MEGA"
                            src="/assets/images/mega-menu/tv-show.webp"
                            alt="img"
                            class="img-fluid d-xl-block d-none"
                            loading="lazy"
                          />
                          <span class="d-inline-block">{{
                            $t("streamPages.tv_show")
                          }}</span>
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link class="nav-link" :to="{ name: 'videos' }">
                          <img
                            v-if="IS_MEGA"
                            src="/assets/images/mega-menu/video.webp"
                            alt="img"
                            class="img-fluid d-xl-block d-none"
                            loading="lazy"
                          />
                          <span class="d-inline-block">{{
                            $t("streamPages.video")
                          }}</span>
                        </nuxt-link>
                      </li>
                      <li :class="['nav-item', isActiveRoute('merchandise-home') ? 'active' : '']">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'merchandise-home' }"
                        >
                          <img
                            v-if="IS_MEGA"
                            src="/assets/images/mega-menu/shop-home.webp"
                            alt="img"
                            class="img-fluid d-xl-block d-none"
                            loading="lazy"
                          />
                          <span class="d-inline-block">{{
                            $t("streamPages.merchandise_store")
                          }}</span>
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-bs-toggle="collapse"
                      href="#features"
                      role="button"
                      aria-expanded="false"
                      aria-controls="homePages"
                    >
                      <div class="d-flex justify-content-between">
                        <span class="item-name">{{
                          $t("streamPages.features")
                        }}</span
                        >{{ " " }}
                        <span class="menu-icon">
                          <i class="ph ph-caret-down align-middle"></i>
                        </span>
                      </div>
                    </a>
                    <ul id="features" class="sub-nav collapse list-unstyled">
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'movies-download' }"
                        >
                          {{ $t("streamPages.download_movie") }}</nuxt-link
                        >
                      </li>
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'movies-restricted' }"
                        >
                          {{ $t("streamPages.restricted_content") }}
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'movies-related' }"
                        >
                          {{ $t("streamPages.related_merchandise") }}</nuxt-link
                        >
                      </li>
                      <li class="nav-item">
                        <nuxt-link class="nav-link" :to="{ name: 'genres' }">
                          {{ $t("streamGenres.genre") }}
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link class="nav-link" :to="{ name: 'tags' }">
                          {{ $t("streamTag.tags") }}
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link class="nav-link" :to="{ name: 'cast' }">
                          {{ $t("streamPages.cast") }}
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-bs-toggle="collapse"
                      href="#pages"
                      role="button"
                      aria-expanded="false"
                      aria-controls="homePages"
                    >
                      <div class="d-flex justify-content-between">
                        <span class="item-name">{{ $t("streamPages.pages") }}</span
                        >{{ " " }}
                        <span class="menu-icon">
                          <i class="ph ph-caret-down align-middle"></i>
                        </span>
                      </div>
                    </a>
                    <ul id="pages" class="sub-nav collapse list-unstyled">
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'extra-about-us' }"
                        >
                          {{ $t("streamPages.about_us") }}
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'extra-contact-us' }"
                        >
                          {{ $t("streamPages.contact_us") }}
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link class="nav-link" :to="{ name: 'extra-faq' }">
                          {{ $t("streamPages.faq") }}
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'pricing-plan' }"
                        >
                          {{ $t("streamPages.pricing_plan") }}
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'extra-privacy-policy' }"
                        >
                          {{ $t("sectionTitle.privacy_policy") }}
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'extra-terms-of-use' }"
                        >
                          {{ $t("sectionTitle.terms_and_use") }}
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'extra-coming-soon' }"
                        >
                          {{ $t("streamPages.coming_soon") }}
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'extra-error-page-one' }"
                        >
                          {{ $t("streamPages.error_404") }}
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-bs-toggle="collapse"
                      href="#blog"
                      role="button"
                      aria-expanded="false"
                      aria-controls="blog"
                    >
                      <div class="d-flex justify-content-between">
                        <span class="item-name">{{ $t("streamPages.blog") }}</span>
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
                        <a
                          class="nav-link"
                          data-bs-toggle="collapse"
                          href="#blog-grid"
                          role="button"
                          aria-expanded="false"
                          aria-controls="blog-grid"
                        >
                          <div class="d-flex justify-content-between">
                            <span class="item-name">{{
                              $t("streamPages.blog_grid")
                            }}</span>
                            <span class="menu-icon">
                              <i
                                class="ph ph-caret-down align-middle down-to-right"
                              ></i>
                            </span>
                          </div>
                        </a>
                        <ul
                          id="blog-grid"
                          class="sub-nav collapse list-unstyled"
                        >
                          <li class="nav-item">
                            <nuxt-link
                              class="nav-link"
                              :to="{
                                name: 'blogs-grid-type',
                                params: { type: 'one-column' },
                              }"
                            >
                              {{ $t("streamPages.1_column_blog") }}
                            </nuxt-link>
                          </li>
                          <li class="nav-item">
                            <nuxt-link
                              class="nav-link"
                              :to="{
                                name: 'blogs-grid-type',
                                params: { type: 'two-column' },
                              }"
                            >
                              {{ $t("streamPages.2_column_blog") }}
                            </nuxt-link>
                          </li>
                          <li class="nav-item">
                            <nuxt-link
                              class="nav-link"
                              :to="{
                                name: 'blogs-grid-type',
                                params: { type: 'three-column' },
                              }"
                            >
                              {{ $t("streamPages.3_column_blog") }}
                            </nuxt-link>
                          </li>
                          <li class="nav-item">
                            <nuxt-link
                              class="nav-link"
                              :to="{
                                name: 'blogs-grid-type',
                                params: { type: 'four-column' },
                              }"
                            >
                              {{ $t("streamPages.4_column_blog") }}
                            </nuxt-link>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          data-bs-toggle="collapse"
                          href="#blog-sidebar"
                          role="button"
                          aria-expanded="false"
                          aria-controls="blog-sidebar"
                        >
                          <div class="d-flex justify-content-between">
                            <span class="item-name">{{
                              $t("streamPages.blog_sidebar")
                            }}</span>
                            <span class="menu-icon">
                              <i
                                class="ph ph-caret-down align-middle down-to-right"
                              ></i>
                            </span>
                          </div>
                        </a>
                        <ul
                          id="blog-sidebar"
                          class="sub-nav collapse list-unstyled"
                        >
                          <li class="nav-item">
                            <nuxt-link
                              class="nav-link"
                              :to="{
                                name: 'blogs-sidebar-type',
                                params: { type: 'left' },
                              }"
                            >
                              {{ $t("streamPages.left_sidebar") }}
                            </nuxt-link>
                          </li>
                          <li class="nav-item">
                            <nuxt-link
                              class="nav-link"
                              :to="{
                                name: 'blogs-sidebar-type',
                                params: { type: 'right' },
                              }"
                            >
                              {{ $t("streamPages.right_sidebar") }}
                            </nuxt-link>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          data-bs-toggle="collapse"
                          href="#blog-single"
                          role="button"
                          aria-expanded="false"
                          aria-controls="blog-single"
                        >
                          <div class="d-flex justify-content-between">
                            <span class="item-name">{{
                              $t("streamPages.blog_single")
                            }}</span>
                            <span class="menu-icon">
                              <i
                                class="ph ph-caret-down align-middle down-to-right"
                              ></i>
                            </span>
                          </div>
                        </a>
                        <ul
                          id="blog-single"
                          class="sub-nav collapse list-unstyled"
                        >
                          <li class="nav-item">
                            <nuxt-link
                              class="nav-link"
                              :to="{ name: 'blogs-detail' }"
                            >
                              {{ $t("streamPages.standard") }}
                            </nuxt-link>
                          </li>
                          <li class="nav-item">
                            <nuxt-link
                              class="nav-link"
                              :to="{
                                name: 'blogs-single-type',
                                params: { type: 'audio' },
                              }"
                            >
                              {{ $t("streamPages.audio") }}
                            </nuxt-link>
                          </li>
                          <li class="nav-item">
                            <nuxt-link
                              class="nav-link"
                              :to="{
                                name: 'blogs-single-type',
                                params: { type: 'video' },
                              }"
                            >
                              {{ $t("streamPages.video") }}
                            </nuxt-link>
                          </li>
                          <li class="nav-item">
                            <nuxt-link
                              class="nav-link"
                              :to="{
                                name: 'blogs-single-type',
                                params: { type: 'link' },
                              }"
                            >
                              {{ $t("streamPages.link") }}
                            </nuxt-link>
                          </li>
                          <li class="nav-item">
                            <nuxt-link
                              class="nav-link"
                              :to="{
                                name: 'blogs-single-type',
                                params: { type: 'quote' },
                              }"
                            >
                              {{ $t("streamPages.quote") }}
                            </nuxt-link>
                          </li>
                          <li class="nav-item">
                            <nuxt-link
                              class="nav-link"
                              :to="{
                                name: 'blogs-single-type',
                                params: { type: 'gallery' },
                              }"
                            >
                              {{ $t("streamPages.gallery") }}
                            </nuxt-link>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          data-bs-toggle="collapse"
                          href="#pagination-style"
                          role="button"
                          aria-expanded="false"
                          aria-controls="pagination-style"
                        >
                          <div class="d-flex justify-content-between">
                            <span class="item-name">{{
                              $t("streamPages.pagination_style")
                            }}</span>
                            <span class="menu-icon">
                              <i
                                class="ph ph-caret-down align-middle down-to-right"
                              ></i>
                            </span>
                          </div>
                        </a>
                        <ul
                          id="pagination-style"
                          class="sub-nav collapse list-unstyled"
                        >
                          <li class="nav-item">
                            <nuxt-link
                              class="nav-link"
                              :to="{
                                name: 'blogs-pagination-style-type',
                                params: { type: 'blog-pagination' },
                              }"
                            >
                              {{ $t("streamPages.blog_pagination") }}
                            </nuxt-link>
                          </li>
                          <li class="nav-item">
                            <nuxt-link
                              class="nav-link"
                              :to="{
                                name: 'blogs-pagination-style-type',
                                params: { type: 'blog-load-more' },
                              }"
                            >
                              {{ $t("streamPages.blog_load_more") }}
                            </nuxt-link>
                          </li>
                          <li class="nav-item">
                            <nuxt-link
                              class="nav-link"
                              :to="{
                                name: 'blogs-pagination-style-type',
                                params: { type: 'blog-infinite-scroll' },
                              }"
                            >
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
                      data-bs-toggle="collapse"
                      href="#shop"
                      role="button"
                      aria-expanded="false"
                      aria-controls="shop"
                      :class="{ active: isAnyActive(['merchandise-shop']) }"
                    >
                      <div class="d-flex justify-content-between">
                        <span class="item-name">{{ $t("streamPages.shop") }}</span
                        >{{ " " }}
                        <span class="menu-icon">
                          <i class="ph ph-caret-down align-middle"></i>
                        </span>
                      </div>
                    </a>
                    <ul id="shop" class="sub-nav collapse list-unstyled">
                      <li :class="['nav-item', isActiveRoute('merchandise-shop') ? 'active' : '']">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'merchandise-shop' }"
                        >
                          {{ $t("streamPages.shop") }}
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'merchandise-account' }"
                        >
                          {{ $t("streamAccount.my_account") }}
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'merchandise-cart' }"
                        >
                          {{ $t("streamShop.cart") }}
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'merchandise-wishlist' }"
                        >
                          {{ $t("streamPages.wishlist") }}
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'merchandise-checkout' }"
                        >
                          {{ $t("streamShop.checkout") }}
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link"
                          :to="{ name: 'merchandise-track-order' }"
                        >
                          {{ $t("streamPages.order_tracking") }}
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </b-container>
            </nav>
            <div class="right-panel">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-btn">
                  <span class="navbar-toggler-icon"></span>
                </span>
              </button>
              <div
                id="navbarSupportedContent"
                class="collapse navbar-collapse p-3"
              >
                <div class="iq-meta-menu-container d-xl-block d-none">
                  <ul
                    class="d-flex align-items-center m-0 list-inline iq-meta-menu"
                  >
                    <li>
                      <nuxt-link :to="{ name: 'merchandise-account' }">{{
                        $t("streamAccount.my_account")
                      }}</nuxt-link>
                    </li>
                    <li>
                      <a href="https://iqonic.desky.support/">{{
                        $t("streamAccount.customer_support")
                      }}</a>
                    </li>
                    <li>
                      <nuxt-link :to="{ name: 'extra-contact-us' }">{{
                        $t("streamAccount.help")
                      }}</nuxt-link>
                    </li>
                  </ul>
                </div>
                <div class="d-xl-none">
                  <ul
                    class="d-flex align-items-center justify-content-end gap-3 list-inline mb-0"
                  >
                    <li>
                      <div class="search-box-2">
                        <form>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Search..."
                          />
                          <button
                            type="submit"
                            class="search-btn d-flex align-items-center"
                          >
                            <i class="ph ph-magnifying-glass"></i>
                          </button>
                        </form>
                      </div>
                    </li>
                    <li>
                      <a
                        class="shoping-cart-button text-white"
                        href=""
                        data-bs-toggle="offcanvas"
                        data-bs-target="#shoping-cart-toggle"
                        aria-controls="shoping-cart-toggle"
                        aria-label="Open shopping cart"
                      >
                        <span class="btn-icon rounded-pill user-icons">
                          <i class="ph ph-handbag fs-5"></i>
                        </span>
                      </a>
                    </li>
                    <li id="itemdropdown2" class="dropdown">
                      <a
                        id="navbarDropdown2"
                        class="text-white d-flex align-items-center"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div class="btn-icon rounded-pill user-icons">
                          <span class="btn-inner d-flex">
                            <i class="ph ph-user-plus fs-5"></i>
                          </span>
                        </div>
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-end dropdown-user border-0 p-0 m-0"
                        aria-labelledby="navbarDropdown2"
                      >
                        <div
                          class="user-info mb-3"
                        >
                        <a
                        href="/profile/profile-marvin"
                        class="d-flex align-items-center gap-3"
                          >
                          <img
                            src="/assets/images/user/user1.webp"
                            class="img-fluid"
                            alt=""
                            loading="lazy"
                          />
                          <span
                            class="font-size-14 fw-500 text-capitalize text-white"
                            >Jenny</span
                          ></a>
                        </div>
                        <a href="/merchandise/account"
                            class="iq-sub-card d-flex align-items-center gap-3">
                          <i class="ph ph-user fw-bold"></i>
                          <h6 class="mb-0 font-size-14 fw-normal">
                            {{ $t("streamAccount.my_account") }}
                          </h6>
                        </a>
                        <nuxt-link
                          :to="{ name: 'watchlist-detail' }"
                          class="iq-sub-card d-flex align-items-center gap-3"
                        >
                          <i class="ph ph-plus fw-bold"></i>
                          <h6 class="mb-0 font-size-14 fw-normal">Watchlist</h6>
                        </nuxt-link>
                        <nuxt-link
                          :to="{ name: 'pricing-plan' }"
                          class="iq-sub-card d-flex align-items-center gap-3"
                        >
                          <i class="ph ph-star fw-bold"></i>
                          <h6 class="mb-0 font-size-14 fw-normal">
                            Subscription
                          </h6>
                        </nuxt-link>
                        <a
                          href="#"
                          class="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2"
                        >
                          <i class="ph ph-sign-out"></i>
                          <h6 class="mb-0 font-size-14 fw-normal">Logout</h6>
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

     <div id="shoping-cart-toggle"
    class="offcanvas overflow-y-auto widget-shopping-cart-content offcanvas-end offcanvas-sidebar sidebar-container on-rtl end border-0"
    tabindex="-1">
    <div class="offcanvas-header position-relative">
      <h5 id="offcanvasExampleLabel" class="offcanvas-title fw-500">{{ $t('streamShop.shopping_cart') }} ( <span
          class="streamit-cart-count" aria-live="polite">3</span> )</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="product-list-content">
        <ul class="list-unstyled mb-0">
          <li class="mini-cart-item d-flex align-items-start gap-3">
            <div class="cart-img">
              <nuxt-link to="/merchandise/cart" aria-label="Bag Pack">
                <img src="/assets/images/shop/product/02.webp" class="img-fluid" width="300" height="400"
                  alt="Bag Pack" />
              </nuxt-link>
            </div>
            <div class="cart-content flex-grow-1">
              <div class="d-flex justify-content-between align-items-center">
                <nuxt-link class="d-block" to="/" aria-label="Bag Pack">
                  <h6 class="fw-500">{{ $t('streamShop.product2') }}</h6>
                </nuxt-link>
                <a href="javascript:void(0)" class="delete-btn" @click="deleteSwal()">
                  <i class="ph ph-trash text-primary"></i>
                </a>
              </div>
              <div class="product-price text-muted">
                <span class="product-price text-primary small"><span class="product-price text-primary small"><span
                      class="woocommerce-Price-currencySymbol">₹</span>13.00</span></span>
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
                    <li class="mini-cart-item d-flex align-items-start gap-3">
            <div class="cart-img">
              <nuxt-link to="/merchandise/cart" aria-label="Bag Pack">
                <img src="/assets/images/shop/product/04.webp" class="img-fluid" width="300" height="400"
                  alt="Bag Pack" />
              </nuxt-link>
            </div>
            <div class="cart-content flex-grow-1">
              <div class="d-flex justify-content-between align-items-center">
                <nuxt-link class="d-block" to="/" aria-label="Bag Pack">
                  <h6 class="fw-500">{{ $t('streamShop.product4') }}</h6>
                </nuxt-link>
                <a href="javascript:void(0)" class="delete-btn" @click="deleteSwal()">
                  <i class="ph ph-trash text-primary"></i>
                </a>
              </div>
              <div class="product-price text-muted">
                <span class="product-price text-primary small"><span class="product-price text-primary small"><span
                      class="woocommerce-Price-currencySymbol">₹</span>18.00</span></span>
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
                    <li class="mini-cart-item d-flex align-items-start gap-3">
            <div class="cart-img">
              <nuxt-link to="/merchandise/cart" aria-label="Bag Pack">
                <img src="/assets/images/shop/product/05.webp" class="img-fluid" width="300" height="400"
                  alt="Bag Pack" />
              </nuxt-link>
            </div>
            <div class="cart-content flex-grow-1">
              <div class="d-flex justify-content-between align-items-center">
                <nuxt-link class="d-block" to="/" aria-label="Bag Pack">
                  <h6 class="fw-500">{{ $t('streamShop.product5') }}</h6>
                </nuxt-link>
                <a href="javascript:void(0)" class="delete-btn" @click="deleteSwal()">
                  <i class="ph ph-trash text-primary"></i>
                </a>
              </div>
              <div class="product-price text-muted">
                <span class="product-price text-primary small"><span class="product-price text-primary small"><span
                      class="woocommerce-Price-currencySymbol">₹</span>18.00</span></span>
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
        <span class="st-product-price text-primary small"><span class="product-price text-primary small"><span
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
import BrandLogo from "../../brand/BrandLogo.vue";
import { useRoute } from "vue-router";
import { useSetting } from "../../../store/setting";
import { useI18n } from 'vue-i18n';
const { availableLocales, locale } = useI18n();

const store = useSetting();

const localChange = (locale) => {
  if (locale === "ar") {
    store.theme_scheme_direction("rtl");
  } else {
    store.theme_scheme_direction("ltr");
  }
    sessionStorage.setItem('language', locale);
};

const IS_MEGA = ref(false);
const route = useRoute();
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

// console.log(route.name);

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
