<template>
  <footer class="footer footer-default">
    <div class="footer-top">
      <div class="container-fluid">
        <div class="row gy-4">
          <div class="col-lg-3 col-sm-6">
            <div class="footer-logo">
              <BrandLogo></BrandLogo>
            </div>
            <div>{{ $t('streamAccount.email_us') }} <span class="text-white">customer@streamit.com</span></div>
            <p class="mt-0 mb-2">{{$t('streamAccount.helpline_number')}}</p>
            <a href="tel:+4805550103" class="helpline">+(480) 555-0103</a>
          </div>
          <div class="col-lg-2 col-sm-6">
             <h4 class="footer-link-title text-capitalize">{{ $t('sectionTitle.movies_to_watch') }}</h4>
             <ul class="list-unstyled footer-menu mb-0">
              <li>
                <nuxt-link class="text-capitalize" :to="{ name: 'view-all' }"> {{ $t('sectionTitle.top_trending') }}</nuxt-link>
              </li>
              <li>
                <nuxt-link class="text-capitalize" :to="{ name: 'view-all' }"> {{ $t('sectionTitle.recommended') }} </nuxt-link>
              </li>
              <li>
                <nuxt-link class="text-capitalize" :to="{ name: 'view-all' }"> {{ $t('sectionTitle.popular') }} </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-sm-6">
            <h4 class="footer-link-title text-capitalize">{{ $t('sectionTitle.quick_links') }}</h4>
            <ul class="list-unstyled footer-menu mb-0">
              <li>
                <nuxt-link class="text-capitalize" :to="{ name: 'extra-contact-us' }">{{ $t('streamPages.contact_us') }} </nuxt-link>
              </li>
              <li>
                <nuxt-link class="text-capitalize" :to="{ name: 'pricing-plan' }"> {{ $t('streamPages.pricing_plan') }} </nuxt-link>
              </li>
              <li>
                <nuxt-link class="text-capitalize" :to="{ name: 'blogs' }"> {{ $t('streamPages.blog') }} </nuxt-link>
              </li>
              <li>
                <nuxt-link class="text-capitalize" :to="{ name: 'extra-faq' }"> {{ $t('streamPages.faq') }} </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-sm-6">
            <h4 class="footer-link-title text-capitalize">{{ $t('sectionTitle.about_company') }}</h4>
            <ul class="list-unstyled footer-menu mb-0">
              <li>
                <nuxt-link class="text-capitalize" :to="{ name: 'extra-about-us' }"> {{ $t('streamPages.about_us') }} </nuxt-link>
              </li>
              <li>
                <nuxt-link class="text-capitalize" :to="{ name: 'merchandise-shop' }"> {{ $t('streamPages.shop') }} </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ name: 'extra-terms-of-use' }"> {{ $t('sectionTitle.terms_and_use') }} </nuxt-link>
              </li>
              <li>
                <nuxt-link class="text-capitalize" :to="{ name: 'extra-privacy-policy' }"> {{ $t('sectionTitle.privacy_policy') }} </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col-xl-3 col-lg-6">
            <h4 class="footer-link-title text-capitalize">{{ $t('sectionTitle.newsletter') }}</h4>
            <div class="mailchimp mailchimp-dark">
              <div class="input-group">
                <input type="text" class="form-control mb-0" :placeholder="$t('streamAccount.email')" aria-describedby="button-addon2" />
                <div class="iq-button">
                  <button id="button-addon2" type="submit" class="btn btn-primary st-subscribe-btn">{{ $t('streamButtons.subscribe') }}</button>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center gap-3 widget-streamit-social-media mt-4">
              <h3 class="font-size-14 widget-streamit-social-media-title">{{ $t('streamButtons.follow_us') }}</h3>
              <div class="social-footer">
                <ul class="m-0 d-inline list-unstyled widget_social_media d-flex gap-2 flex-wrap">
                  <li>
                    <a href="https://www.facebook.com/" class="position-relative">
                      <i class="icon icon-facebook-share"></i>
                    </a>
                  </li>
                  {{
                    ' '
                  }}
                  <li>
                    <a href="https://twitter.com/" class="position-relative">
                      <i class="ph ph-x-logo"></i>
                    </a>
                  </li>
                  {{
                    ' '
                  }}
                  <li>
                    <a href="https://www.instagram.com/" class="position-relative">
                      <i class="ph ph-instagram-logo"></i>
                    </a>
                  </li>
                  {{
                    ' '
                  }}
                  <li>
                    <a href="https://github.com/" class="position-relative">
                      <i class="ph-fill ph-linkedin-logo"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <b-container fluid>
        <b-row class="align-items-center">
          <b-col md="6">
            <p class="font-size-14 mb-0">© <span class="currentYear">2025</span> <span class="text-primary">STREAMIT.</span> {{$t('streamAccount.desc')}}</p>
          </b-col>
          <b-col md="6" class="mt-md-0 mt-5">
            <div class="d-flex flex-column align-items-start align-items-md-end widget-iq-download-app">
              <h6 class="mb-3 fw-bold">{{$t('streamAccount.download_app')}}</h6>
              <div>
                <ul class="d-inline-flex flex-wrap align-items-center list-inline m-0 p-0 gap-3">
                  <li class="m-0 p-0">
                    <a class="app-image" href="#">
                      <img src="/assets/images/footer/play-store.webp" loading="lazy" alt="play-store" />
                    </a>
                  </li>
                  <li class="m-0 p-0">
                    <a class="app-image" href="#">
                      <img src="/assets/images/footer/app-store.webp" loading="lazy" alt="app-store" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </footer>
</template>
<script setup>
import BrandLogo from '../brand/BrandLogo.vue';
</script>
