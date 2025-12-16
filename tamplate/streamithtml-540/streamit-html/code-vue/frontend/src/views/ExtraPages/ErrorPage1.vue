<template>
  <div class="section-padding error-404-section">
    <b-container>
      <div class="error-404-position">
        <b-row class="align-items-center">
          <b-col lg="2"></b-col>
          <b-col lg="8">
            <div class="text-center">
              <img :src="generateImgPath('assets/images/pages/new-404.png')" class="error-404-img mb-4 pb-2" alt="404" loading="lazy" />
            </div>
            <h4 class="fw-semibold mb-0 text-center">{{ $t('streamError.something_wrong') }}</h4>
            <p class="text-center mb-0">{{$t('streamError.requested_page')}}</p>
            <div class="text-center mt-4 pt-3">
              <router-link :to="{ name: 'landing-page.ott' }" class="btn btn-link error-404-btn">
                {{ $t('streamError.back_home') }}
              </router-link>
            </div>
          </b-col>
          <b-col lg="2"></b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>
<script setup>
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
</script>
