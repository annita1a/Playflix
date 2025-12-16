<template>
  <div class="section-padding vh-100 image-flip-rtl" :style="`background: url(${generateImgPath('/assets/images/pages/404-two.webp')}); background-size: cover; background-repeat: no-repeat; position: relative; min-height: 500px`">
    <div class="container h-100">
      <b-row class="h-100 align-items-center">
        <b-col lg="6"></b-col>
        <b-col lg="5">
          <img src="/assets/images/pages/404-text.webp" class="mb-5" alt="404" loading="lazy" />
          <h4 class="fw-bold text-center">{{ $t('streamError.ohhh_no') }}</h4>
          <p class="text-center">{{ $t('streamError.page_deosnot_exit') }}</p>
          <div class="text-center mt-4 pt-3">
            <div class="iq-button">
              <router-link :to="{ name: 'landing-page' }" class="btn text-uppercase position-relative">
                <span class="button-text">{{ $t('streamError.back_home') }}</span>
                {{ '' }}
                <i class="fa-solid fa-play"></i>
              </router-link>
            </div>
          </div>
        </b-col>
        <b-col lg="1"></b-col>
      </b-row>
    </div>
  </div>
</template>

<script setup>
import { generateImgPath } from '../../StaticData/data';
</script>
