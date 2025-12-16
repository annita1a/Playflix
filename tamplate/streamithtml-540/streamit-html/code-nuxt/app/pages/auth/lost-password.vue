<template>
  <section class="sign-in-page vh-100" :style="`background: url(${generateImgPath('./assets/images/pages/01.webp')}); background-size: cover; background-repeat: no-repeat; position: relative;min-height:500px;`">
    <b-container>
      <b-row class="justify-content-center align-items-center height-self-center vh-100">
        <b-col lg="5" md="12" class="align-self-center">
          <div class="user-login-card bg-body">
            <p>
              {{ $t('streamForm.desc_enter1') }}
            </p>
            <form action="#">
              <div class="mb-5">
                <label class="text-white fw-500 mb-2">{{ $t('streamAccount.username_or_email') }}</label>
                <input type="text" class="form-control rounded-0" required />
              </div>
              <div class="iq-button">
                <a href="#" class="btn text-uppercase position-relative">
                  <span class="button-text">{{ $t('streamForm.new_password') }}</span>
                  {{ '' }}
                  <i class="fa-solid fa-play"></i>
                </a>
              </div>
              <div class="seperator d-flex justify-content-center align-items-center">
                <span class="line"></span>
              </div>
              <div class="iq-button">
                <nuxt-link :to="{ name: 'auth-login' }" class="btn text-uppercase position-relative">
                  <span class="button-text">{{ $t('streamButtons.log_in') }}</span>
                  {{ '' }}
                  <i class="fa-solid fa-play"></i>
                </nuxt-link>
              </div>
            </form>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup>
import { generateImgPath } from '~/StaticData/data';

definePageMeta({
  layout: "blank",
});
</script>
