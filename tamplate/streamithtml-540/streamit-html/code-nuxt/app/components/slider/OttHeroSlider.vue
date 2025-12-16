<template>
  <div class="iq-banner-thumb-slider overflow-hidden">
    <div class="slider">
      <div class="position-relative slider-bg my-auto">
        <!-- <div class="position-relative my-auto"> -->
        <div class="horizontal_thumb_slider" data-swiper="slider-thumbs-ott">
          <div class="banner-thumb-slider-nav">
            <Swiper v-if="render" :dir="rtl" :slides-per-view="2" :navigation="{
              prevEl: '.slider-prev',
              nextEl: '.slider-next',
            }" class="swiper-container m-0" :space-between="24" :modules="modules" :loop="true" :looped-slides="8"
              :thumbs="{ swiper: thumbsSwiper }">
              <SwiperSlide class="swiper-bg">
                <div class="block-images position-relative">
                  <div class="img-box">
                    <img src="/assets/images/media/gameofhero-portrait.webp" class="img-fluid" alt="" loading="lazy" />
                    <div class="block-description">
                      <h6 class="iq-title fw-500 line-count-1">{{ $t('streamMovies.game_of_heros') }}</h6>
                      <div class="d-flex align-items-center gap-1">
                        <i class="ph ph-clock"></i>
                        <span class="fs-12">2hr : 30m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-bg">
                <div class="block-images position-relative">
                  <div class="img-box">
                    <img src="/assets/images/media/fast-furious-portrait.webp" class="img-fluid" alt=""
                      loading="lazy" />
                    <div class="block-description">
                      <h6 class="iq-title fw-500 line-count-1">
                        {{ $t('streamMovies.fast_&_furious') }}
                      </h6>
                      <div class="d-flex align-items-center gap-1">
                        <i class="ph ph-clock"></i>
                        <span class="fs-12">2hr : 59m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-bg">
                <div class="block-images position-relative">
                  <div class="img-box">
                    <img src="/assets/images/media/minions-portrait.webp" class="img-fluid" alt="" loading="lazy" />
                    <div class="block-description">
                      <h6 class="iq-title fw-500 line-count-1">{{ $t('streamMovies.minions') }}</h6>
                      <div class="d-flex align-items-center gap-1">
                        <i class="ph ph-clock"></i>
                        <span class="fs-12">January 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-bg">
                <div class="block-images position-relative">
                  <div class="img-box">
                    <img src="/assets/images/media/vikings-portrait.webp" class="img-fluid" alt="" loading="lazy" />
                    <div class="block-description">
                      <h6 class="iq-title fw-500 line-count-1">{{ $t('streamMovies.vikings') }}</h6>
                      <div class="d-flex align-items-center gap-1">
                        <i class="ph ph-clock"></i>
                        <span class="fs-12">January 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-bg">
                <div class="block-images position-relative">
                  <div class="img-box">
                    <img src="/assets/images/media/toddler-portrait.webp" class="img-fluid" alt="" loading="lazy" />
                    <div class="block-description">
                      <h6 class="iq-title fw-500 line-count-1">{{ $t('streamMovies.toddler') }}</h6>
                      <div class="d-flex align-items-center gap-1">
                        <i class="ph ph-clock"></i>
                        <span class="fs-12">50m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-bg">
                <div class="block-images position-relative">
                  <div class="img-box">
                    <img src="/assets/images/media/kung-fu-panda-portrait.webp" class="img-fluid" alt=""
                      loading="lazy" />
                    <div class="block-description">
                      <h6 class="iq-title fw-500 line-count-1">{{ $t('streamMovies.kung_fu_panda') }}</h6>
                      <div class="d-flex align-items-center gap-1">
                        <i class="ph ph-clock"></i>
                        <span class="fs-12">45m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div class="slider-prev swiper-button d-flex align-items-center justify-content-center">
              <i class="iconly-Arrow-Left-2 icli"></i>
            </div>
            <div class="slider-next swiper-button d-flex align-items-center justify-content-center">
              <i class="iconly-Arrow-Right-2 icli"></i>
            </div>
          </div>
        </div>
        <!-- </div> -->
        <div class="slider-images" data-swiper="slider-images-ott">
          <Swiper v-if="render" class="swiper-container mb-0" :pagination="{
            el: '.swiper-pagination',
            clickable: true,
          }" :dir="rtl" :loop="true" :space-between="0" :slides-per-view="1" :looped-slides="8" :effect="'fade'"
            :modules="modules" @swiper="setThumbsSwiper">
            <SwiperSlide class="banner-bg p-0">
              <div class="slider--image block-images"
                style="background-image: url('/assets/images/media/gameofhero.webp')">
                <b-container fluid class="position-relative">
                  <b-row class="align-items-center h-100 slider-content-full-height">
                    <b-col lg="5" md="12">
                      <div class="slider-content">
                        <h2 class="texture-text big-font letter-spacing-1 line-count-1 RightAnimate-two mb-1 mb-md-3">
                          {{ $t('streamMovies.game_of_heros') }}</h2>
                        <div class="d-flex flex-wrap align-items-center gap-3 py-2 RightAnimate-three">
                          <span class="badge rounded-0 text-white text-uppercase bg-secondary mr-3 fw-bold">NC-17</span>
                          <div class="d-flex align-items-center gap-3">
                            <ul
                              class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left gap-1">
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
                                <i class="ph-fill ph-star" aria-hidden="true"></i>
                              </li>
                            </ul>
                            <span>
                              <img src="/assets/images/pages/imdb-logo.svg" alt="imdb logo"
                                class="img-fluid imdb-img" />
                            </span>
                          </div>
                          <div class="d-flex align-items-center gap-1">
                            <i class="ph ph-clock"></i>
                            <span class="font-size-16 fw-500">2hr : 30m</span>
                          </div>
                        </div>
                        <p class="line-count-3 my-3 RightAnimate-two">{{ $t('streamMovies.game_of_heros_desc') }}</p>

                        <div class="RightAnimate-three mt-2">
                          <div class="text-primary font-size-14 text-capitalize mb-1">
                            {{ $t('streamTag.tags') }}:
                            <nuxt-link :to="{ name: 'view-all' }" class="text-body text-decoration-none fw-normal">{{
                              $t('streamTag.action') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'view-all' }" class="text-body text-decoration-none fw-normal">{{
                              $t('streamTag.adventure') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'view-all' }" class="text-body text-decoration-none fw-normal">{{
                              $t('streamTag.drama') }}</nuxt-link>
                          </div>
                          <div class="text-primary font-size-14 text-capitalize mb-1">
                            {{ $t('streamGenres.genre') }}:
                            <nuxt-link :to="{ name: 'view-all' }" class="text-body text-decoration-none fw-normal">{{
                              $t('streamTag.action') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'view-all' }" class="text-body text-decoration-none fw-normal">{{
                              $t('streamTag.adventure') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'view-all' }" class="text-body text-decoration-none fw-normal">{{
                              $t('streamTag.crime') }}</nuxt-link>
                          </div>
                          <div class="text-primary font-size-14 text-capitalize">
                            {{ $t('favouritePersonalities.starting') }}:
                            <nuxt-link :to="{ name: 'cast-detail' }" class="text-body text-decoration-none fw-normal">{{
                              $t('favouritePersonalities.olivia_foster') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'cast-detail' }" class="text-body text-decoration-none fw-normal">{{
                              $t('favouritePersonalities.Leena_Burton') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'cast-detail' }" class="text-body text-decoration-none fw-normal">{{
                              $t('favouritePersonalities.Ryan_Pierce') }}</nuxt-link>
                          </div>
                        </div>
                        <div class="RightAnimate-four mt-4 pt-2">
                          <custom-button :button-title="$t('streamButtons.play_now')"
                            :link="{ name: 'movies-detail' }"></custom-button>
                        </div>
                      </div>
                    </b-col>
                    <b-col lg="7" md="12"></b-col>
                  </b-row>
                </b-container>
              </div>
            </SwiperSlide>
            <SwiperSlide class="banner-bg p-0">
              <div class="slider--image block-images"
                style="background-image: url('/assets/images/media/fast-furious.webp')">
                <b-container fluid class="position-relative">
                  <b-row class="align-items-center h-100 slider-content-full-height">
                    <b-col lg="5" md="12">
                      <div class="slider-content">
                        <h2 class="texture-text big-font letter-spacing-1 line-count-1 RightAnimate-two mb-1 mb-md-3">
                          {{ $t('streamMovies.fast_&_furious') }}</h2>

                        <div class="d-flex flex-wrap align-items-center gap-3 py-2 RightAnimate-three">
                          <span class="badge rounded-0 text-white text-uppercase bg-secondary mr-3 fw-bold">NC-17</span>
                          <div class="d-flex align-items-center gap-3">
                            <ul
                              class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left gap-1">
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
                            <span>
                              <img src="/assets/images/pages/imdb-logo.svg" alt="imdb logo" class="img-fluid imdb-img">
                            </span>
                          </div>
                          <div class="d-flex align-items-center gap-1">
                            <i class="ph ph-clock"></i>
                            <span class="font-size-16 fw-500">2hr : 59m</span>
                          </div>
                        </div>
                        <p class="line-count-3 my-3 RightAnimate-two">{{ $t('streamMovies.fast_&_furious_desc') }}</p>
                        <div class="RightAnimate-three mt-2">
                          <div class="text-primary font-size-14 fw-500 text-capitalize mb-1">
                            {{ $t('streamTag.tags') }}:
                            <nuxt-link :to="{ name: 'view-all' }" class="text-body text-decoration-none fw-normal">{{
                              $t('streamTag.family') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'view-all' }" class="text-body text-decoration-none fw-normal">{{
                              $t('streamTag.hitman') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'view-all' }" class="text-body text-decoration-none fw-normal">{{
                              $t('streamTag.horror') }}</nuxt-link>
                          </div>
                          <div class="text-primary font-size-14 fw-500 text-capitalize mb-1">
                            {{ $t('streamGenres.genre') }}:
                            <nuxt-link :to="{ name: 'view-all' }" class="text-body text-decoration-none fw-normal">{{
                              $t('streamTag.action') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'view-all' }" class="text-body text-decoration-none fw-normal">{{
                              $t('streamTag.adventure') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'view-all' }" class="text-body text-decoration-none fw-normal">{{
                              $t('streamTag.crime') }}</nuxt-link>
                          </div>
                          <div class="text-primary font-size-14 fw-500 text-capitalize">
                            {{ $t('favouritePersonalities.starting') }}:
                            <nuxt-link :to="{ name: 'cast-detail' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('favouritePersonalities.jordan_grant') }},</nuxt-link>{{ '' }}
                            <nuxt-link :to="{ name: 'cast-detail' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('favouritePersonalities.jeff_bridges') }},</nuxt-link>{{ '' }}
                            <nuxt-link :to="{ name: 'cast-detail' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('favouritePersonalities.james_stewart') }}</nuxt-link>
                          </div>
                        </div>
                        <div class="RightAnimate-four mt-4 pt-2">
                          <custom-button :button-title="$t('streamButtons.play_now')"
                            :link="{ name: 'movies-detail' }"></custom-button>
                        </div>
                      </div>
                    </b-col>
                    <b-col lg="6" md="12"></b-col>
                  </b-row>
                </b-container>
              </div>
            </SwiperSlide>
            <SwiperSlide class="banner-bg p-0">
              <div class="slider--image block-images"
                style="background-image: url('/assets/images/media/minions.webp')">
                <b-container fluid class="position-relative">
                  <b-row class="align-items-center h-100 slider-content-full-height">
                    <b-col lg="5" md="12">
                      <div class="slider-content">
                        <h2 class="texture-text big-font letter-spacing-1 line-count-1 RightAnimate-two mb-1 mb-md-3">
                          {{ $t('streamMovies.minions') }}</h2>

                        <div class="d-flex flex-wrap align-items-center gap-3 py-2 RightAnimate-three">
                          <span class="badge rounded-0 text-white text-capitalize px-2 py-1 bg-secondary mr-3 fw-bold">4
                            {{ $t('streamEpisode.season') }}</span>
                          <div class="d-flex align-items-center gap-3">
                            <ul
                              class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left gap-1">
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
                                <i class="ph-fill ph-star-half" aria-hidden="true"></i>
                              </li>
                            </ul>
                            <span>
                              <img src="/assets/images/pages/imdb-logo.svg" alt="imdb logo" class="img-fluid imdb-img">
                            </span>
                          </div>
                          <div class="d-flex align-items-center gap-1">
                            <i class="ph ph-clock"></i>
                            <span class="font-size-16 fw-500">July 2025</span>
                          </div>
                        </div>
                        <p class="line-count-3 my-3 RightAnimate-two">{{ $t('streamMovies.minions_desc') }}</p>
                        <div class="RightAnimate-three mt-2">
                          <div class="text-primary font-size-14 fw-500 text-capitalize mb-1">
                            {{ $t('streamTag.tags') }}:
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.agents') }},</nuxt-link>{{ '' }}
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.brother') }},</nuxt-link>{{ '' }}
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.brother_relationship')
                              }}</nuxt-link>
                          </div>
                          <div class="text-primary font-size-14 fw-500 text-capitalize mb-1">
                            {{ $t('streamGenres.genre') }}:
                            <nuxt-link :to="{ name: 'view-all' }" class="text-body text-decoration-none fw-normal">{{
                              $t('streamTag.action') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'view-all' }" class="text-body text-decoration-none fw-normal">{{
                              $t('streamTag.adventure') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'view-all' }" class="text-body text-decoration-none fw-normal">{{
                              $t('streamTag.animation') }}</nuxt-link>
                          </div>
                          <div class="text-primary font-size-14 fw-500 text-capitalize">
                            {{ $t('favouritePersonalities.starting') }}:
                            <nuxt-link :to="{ name: 'cast-detail' }" class="text-body text-decoration-none fw-normal">{{
                              $t('favouritePersonalities.ava_monroe')
                            }},</nuxt-link>
                            <nuxt-link :to="{ name: 'cast-detail' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('favouritePersonalities.charles_melton')
                              }},</nuxt-link>
                            <nuxt-link :to="{ name: 'cast-detail' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('favouritePersonalities.james_stewart')
                              }}</nuxt-link>
                          </div>
                        </div>
                        <div class="RightAnimate-four mt-4 pt-2">
                          <custom-button :button-title="$t('streamButtons.play_now')"
                            :link="{ name: 'movies-detail' }"></custom-button>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
            </SwiperSlide>
            <SwiperSlide class="banner-bg p-0">
              <div class="slider--image block-images"
                style="background-image: url('/assets/images/media/vikings.webp')">
                <b-container fluid class="position-relative">
                  <b-row class="align-items-center h-100 slider-content-full-height">
                    <b-col lg="5" md="12">
                      <div class="slider-content">
                        <h2 class="texture-text big-font letter-spacing-1 line-count-1 RightAnimate-two mb-1 mb-md-3">
                          {{ $t('streamMovies.vikings') }}</h2>

                        <div class="d-flex flex-wrap align-items-center gap-3 py-2 RightAnimate-three">
                          <span class="badge rounded-0 text-white text-capitalize px-2 py-1 bg-secondary mr-3 fw-bold">4
                            {{ $t('streamEpisode.season') }}</span>
                          <div class="d-flex align-items-center gap-3">
                            <ul
                              class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left gap-1">
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
                                <i class="ph-fill ph-star-half" aria-hidden="true"></i>
                              </li>
                            </ul>
                            <span>
                              <img src="/assets/images/pages/imdb-logo.svg" alt="imdb logo" class="img-fluid imdb-img">
                            </span>
                          </div>
                          <div class="d-flex align-items-center gap-1">
                            <i class="ph ph-clock"></i>
                            <span class="font-size-16 fw-500">January 2025</span>
                          </div>
                        </div>
                        <p class="line-count-3 my-3 RightAnimate-two">{{ $t('streamMovies.game_of_heros_desc') }}</p>
                        <div class="RightAnimate-three mt-2">
                          <div class="text-primary font-size-14 fw-500 text-capitalize mb-1">
                            {{ $t('streamTag.tags') }}:
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.agents') }},</nuxt-link>{{ '' }}
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.brother') }},</nuxt-link>{{ '' }}
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{ $t('streamTag.cricket')
                              }}</nuxt-link>
                          </div>
                          <div class="text-primary font-size-14 fw-500 text-capitalize mb-1">
                            {{ $t('streamGenres.genre') }}:
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.adventure') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.animation') }},</nuxt-link>{{ '' }}
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.crime') }}</nuxt-link>
                          </div>
                          <div class="text-primary font-size-14 fw-500 text-capitalize">
                            {{ $t('favouritePersonalities.starting') }}:
                            <nuxt-link :to="{ name: 'cast-detail' }" class="text-body text-decoration-none fw-normal">{{
                              $t('favouritePersonalities.olivia_foster')
                            }},</nuxt-link>
                            <nuxt-link :to="{ name: 'cast-detail' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('favouritePersonalities.Leena_Burton')
                              }},</nuxt-link>
                            <nuxt-link :to="{ name: 'cast-detail' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('favouritePersonalities.Ryan_Pierce')
                              }}</nuxt-link>
                          </div>
                        </div>
                        <div class="RightAnimate-four mt-4 pt-2">
                          <custom-button :button-title="$t('streamButtons.play_now')"
                            :link="{ name: 'movies-detail' }"></custom-button>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
            </SwiperSlide>
            <SwiperSlide class="banner-bg p-0">
              <div class="slider--image block-images"
                style="background-image: url('/assets/images/media/toddler.webp')">
                <b-container fluid class="position-relative">
                  <b-row class="align-items-center h-100 slider-content-full-height">
                    <b-col lg="5" md="12">
                      <div class="slider-content">
                        <h2 class="texture-text big-font letter-spacing-1 line-count-1 RightAnimate-two mb-1 mb-md-3">
                          {{ $t('streamMovies.toddler') }}</h2>

                        <div class="d-flex flex-wrap align-items-center gap-3 py-2 RightAnimate-three">
                          <span class="badge rounded-0 text-white text-capitalize px-2 py-1 bg-secondary mr-3 fw-bold">2
                            {{ $t('streamEpisode.season') }}</span>
                          <div class="d-flex align-items-center gap-3">
                            <ul
                              class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left gap-1">
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
                                <i class="ph-fill ph-star-half" aria-hidden="true"></i>
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex align-items-center gap-1">
                            <i class="ph ph-clock"></i>
                            <span class="font-size-16 fw-500">50m</span>
                          </div>
                        </div>
                        <p class="line-count-3 my-3 RightAnimate-two">{{ $t('streamMovies.toddler_desc') }}</p>
                        <div class="RightAnimate-three mt-2">
                          <div class="text-primary font-size-14 fw-500 text-capitalize mb-1">
                            {{ $t('streamTag.tags') }}:
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.action') }},</nuxt-link>{{ '' }}
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.adventure') }},</nuxt-link>{{ '' }}
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{ $t('streamTag.astronomy')
                              }}</nuxt-link>
                          </div>
                          <div class="text-primary font-size-14 fw-500 text-capitalize mb-1">
                            {{ $t('streamGenres.genre') }}:
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.adventure') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.animation') }},</nuxt-link>{{ '' }}
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.crime') }}</nuxt-link>
                          </div>
                        </div>
                        <div class="RightAnimate-four mt-4 pt-2">
                          <custom-button :button-title="$t('streamButtons.play_now')"
                            :link="{ name: 'movies-detail' }"></custom-button>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
            </SwiperSlide>
            <SwiperSlide class="banner-bg p-0">
              <div class="slider--image block-images"
                style="background-image: url('/assets/images/media/kung-fu-panda.webp')">
                <b-container fluid class="position-relative">
                  <b-row class="align-items-center h-100 slider-content-full-height">
                    <b-col lg="5" md="12">
                      <div class="slider-content">
                        <h2 class="texture-text big-font letter-spacing-1 line-count-1 RightAnimate-two mb-1 mb-md-3">
                          {{ $t('streamMovies.kung_fu_panda') }}</h2>

                        <div class="d-flex flex-wrap align-items-center gap-3 py-2 RightAnimate-three">
                          <span class="badge rounded-0 text-white text-capitalize px-2 py-1 bg-secondary mr-3 fw-bold">2
                            {{ $t('streamEpisode.season') }}</span>
                          <div class="d-flex align-items-center gap-3">
                            <ul
                              class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left gap-1">
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
                                <i class="ph-fill ph-star-half" aria-hidden="true"></i>
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex align-items-center gap-1">
                            <i class="ph ph-clock"></i>
                            <span class="font-size-16 fw-500">45m</span>
                          </div>
                        </div>
                        <p class="line-count-3 my-3 RightAnimate-two">{{ $t('streamMovies.kung_fu_panda_desc') }}</p>
                        <div class="RightAnimate-three mt-2">
                          <div class="text-primary font-size-14 fw-500 text-capitalize mb-1">
                            {{ $t('streamTag.tags') }}:
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.action') }},</nuxt-link>{{ '' }}
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.adventure') }},</nuxt-link>{{ '' }}
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{ $t('streamTag.astronomy')
                              }}</nuxt-link>
                          </div>
                          <div class="text-primary font-size-14 fw-500 text-capitalize mb-1">
                            {{ $t('streamGenres.genre') }}:
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.adventure') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.animation') }},</nuxt-link>{{
                                '' }}
                            <nuxt-link :to="{ name: 'view-all' }"
                              class="text-body text-decoration-none fw-normal ms-1">{{
                                $t('streamTag.crime') }}</nuxt-link>
                          </div>
                        </div>
                        <div class="RightAnimate-four mt-4 pt-2">
                          <custom-button :button-title="$t('streamButtons.play_now')"
                            :link="{ name: 'movies-detail' }"></custom-button>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
            </SwiperSlide>
            <div class="swiper-pagination d-block d-lg-none"></div>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Controller, Thumbs, EffectFade, Pagination } from 'swiper';
import CustomButton from "../CustomButton.vue";
import { ref, computed, watch } from "vue";
import { useSetting } from "../../store/setting/index";
const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);
const render = ref(true);
watch(
  () => rtl.value,
  () => {
    thumbsSwiper.value = null;
    render.value = false;
    setTimeout(() => {
      render.value = true;
    }, 0);
  }
);

// Swiper Modules
const modules = [Navigation, Controller, Thumbs, EffectFade, Pagination];
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>
