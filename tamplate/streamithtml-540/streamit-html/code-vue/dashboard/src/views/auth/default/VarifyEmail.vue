<template>
  <section class="sign-in-page" :style="{ 'background-image': 'url(' + generateImgPath('/assets/images/login/login.webp') + ')' }">
    <b-container class="h-100">
      <b-row class="justify-content-center align-items-center h-100">
        <b-col md="6" sm="12" class="col-12">
          <div class="sign-user_card">
            <b-card-body>
              <div class="sign-in-page-data">
                <router-link :to="{ name: 'dashboard.home' }">
                  <img class="img-fluid logo" :src="generateImgPath('/assets/images/logo-full.png')" alt="#" />
                </router-link>
                <h3 class="mb-3 text-center">{{ $t('authentication.success!') }}</h3>
                <p class="text-gray">{{ $t('authentication.email_send') }} <router-link to="" tabindex="0" href="/cdn-cgi/l/email-protection" data-cfemail="5f26302a2d3a323e36331f3b30323e3631713c303271" class="__cf_email__ bg-dark border-0 p-0 btn btn-primary">[email&nbsp;protected]</router-link> {{ $t('authentication.email_check') }}</p>
                  <router-link to="/" class="btn btn-primary w-100 custom-sign-btn mt-2">{{ $t('authentication.back_to_home') }}</router-link>
              </div>
            </b-card-body>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup>
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
</script>