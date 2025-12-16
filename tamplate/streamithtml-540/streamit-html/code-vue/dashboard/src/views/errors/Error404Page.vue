<template>
  <div class="wrapper">
    <b-container class="pt-5 vh-100">
      <b-row class="no-gutters height-self-center h-100">
        <b-col sm="12" class="text-center align-self-center">
          <div class="iq-error position-relative">
            <img src="/assets/images/error/404.png" class="img-fluid iq-error-img" alt="img" loading="lazy" />
            <h2 class="mb-0 mt-4">{{ $t('authentication.not_found') }}</h2>
            <p>{{ $t('authentication.requested_page') }}</p>
            <router-link class="btn btn-primary mt-3" to="/"><i class="ri-home-4-line"></i>{{ $t('authentication.back_to_home') }}</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
