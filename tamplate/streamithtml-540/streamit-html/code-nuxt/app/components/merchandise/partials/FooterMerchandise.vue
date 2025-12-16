<template>
  <footer class="footer-merchandise">
    <div class="footer-top">
      <b-container fluid>
        <b-row>
          <b-col sm="6" lg="4">
            <div class="footer-inner">
              <p class="text-uppercase letter-spacing-1 font-size-14 mb-1">{{ $t('streamAccount.customer_services') }}</p>
              <h4 class="mb-0 contact text-white fw-bold"><a href="tel:+4805550103">+ (480) 555-0103</a></h4>
              <span class="d-inline-block mt-4 mb-0 font-size-14">{{ $t('streamAccount.email_us') }} <a href="maito:customer@streamit.com">customer@streamit.com</a></span>
              <div class="mt-5">
                <p class="text-uppercase letter-spacing-1 font-size-14 mb-1">{{ $t('streamSocial.stay_connected') }}:</p>
                <ul class="p-0 mt-4 mb-0 list-unstyled widget_social_media d-flex align-items-center gap-3">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" class="position-relative">
                      <i class="icon icon-facebook-share"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank" class="position-relative">
                      <i class="ph-fill ph-twitter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/" target="_blank" class="position-relative">
                      <i class="icon icon-github-share"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" class="position-relative">
                      <i class="ph ph-instagram-logo"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>

          <b-col lg="4" sm="6" class="mt-sm-0 mt-5">
            <div class="footer-inner position-relative text-center px-xl-5 px-3">
              <div class="vr text-dark opacity-100 h-100 position-absolute end-0 top-0 d-lg-inline-block d-none"></div>
              <div class="footer-logo">
                <!--Logo -->
                <brand-logo />
              </div>
              <p class="mt-lg-5 mt-4 mb-3 text-uppercase letter-spacing-1 font-size-14 mb-1">{{ $t('streamAccount.best_deals') }}</p>
              <div class="mailchimp mailchimp-dark">
                <div class="input-group mb-3 mt-4">
                  <input type="text" class="form-control mb-0 font-size-14" placeholder="Email*" aria-describedby="button-addon2" />
                  <div class="iq-button">
                    <button id="button-addon2" type="submit" class="btn btn-primary st-subscribe-btn text-uppercase">{{$t('streamButtons.subscribe')}}</button>
                  </div>
                </div>
                <span class="d-inline-block font-size-14">* We promise to not share your email with anyone</span>
              </div>
              <div class="vr text-dark opacity-100 h-100 position-absolute start-0 top-0 d-lg-inline-block d-none"></div>
            </div>
          </b-col>

          <b-col lg="4" sm="12" class="mt-lg-0 mt-5">
            <div class="footer-inner">
              <h5 class="footer-link-title mb-3">{{ $t('sectionTitle.quick_links') }}</h5>
              <b-row>
                <b-col lg="6">
                  <ul class="list-unstyled footer-menu mb-0">
                    <li class="mb-2">
                      <nuxt-link :to="{ name: 'extra-contact-us' }" class="ms-3">{{ $t('streamPages.contact_us') }}</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="{ name: 'extra-privacy-policy' }" class="ms-3">{{ $t('sectionTitle.privacy_policy') }}</nuxt-link>
                    </li>
                  </ul>
                </b-col>
                <b-col lg="6" class="mt-lg-0 mt-2">
                  <ul class="list-unstyled footer-menu mb-0">
                    <li>
                      <nuxt-link :to="{ name: 'extra-terms-of-use' }" class="ms-3">{{ $t('sectionTitle.terms_and_use') }}</nuxt-link>
                    </li>
                  </ul>
                </b-col>
              </b-row>
              <div class="mt-5">
                <p class="pt-3 mb-3 text-uppercase">{{ $t('sectionTitle.payments') }}</p>
                <ul class="list-inline d-flex align-items-center flex-wrap gap-3 m-0">
                  <li>
                    <img src="/assets/images/footer/01.webp" alt="visa" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/footer/02.webp" alt="visa" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/footer/03.webp" alt="visa" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/footer/04.webp" alt="visa" loading="lazy" />
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="footer-bottom py-3">
      <b-container fluid>
        <b-row class="align-items-center">
          <b-col md="6" class="text-md-start text-center">
            <p class="m-0 font-size-14 text-capitalize">© <span class="currentYear">2025 </span><nuxt-link :to="{ name: 'index' }">STREAMIT</nuxt-link> {{ $t('stream_terms_of_uses.all_right_reserved') }}</p>
          </b-col>
          <b-col md="6" class="text-md-end text-center">
            <p class="m-0 font-size-14">{{ $t('stream_terms_of_uses.powered_by') }} <a href="https://iqonic.design/" target="_blank">IQONIC DESIGN</a></p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </footer>
  <div id="back-to-top" style="display: none" class="animate__animated" :class="animationClass" @click="scrollToTop">
    <a id="top" class="p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle text-white" href="#top">
      <i class="fa-solid fa-chevron-up"></i>
    </a>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
const animationClass = ref('animate__fadeIn');

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  if (document.documentElement.scrollTop > 250) {
    animationClass.value = 'animate__fadeIn';
  } else {
    animationClass.value = 'animate__fadeOut';
  }
};
handleScroll();
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const route = useRoute();
watch(
  () => route.name,
  () => {
    scrollToTop();
  }
);
</script>
