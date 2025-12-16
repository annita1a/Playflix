<template>
  <section class="sign-in-page vh-100" :style="`background: url(${generateImgPath('/assets/images/pages/01.webp')}); background-size: cover; background-repeat: no-repeat;`">
    <b-container>
      <b-row class="justify-content-center align-items-center height-self-center vh-100">
        <b-col lg="8" md="12" class="align-self-center">
          <div class="user-login-card rounded-3">
            <!--Logo -->
            <BrandLogo />

            <div class="sign-in-page-data">
              <h4 class="text-center mb-5">{{ $t('streamForm.create_account') }}</h4>
              <b-row class="row-cols-1 row-cols-lg-2 g-2 g-lg-5">
                <b-col>
                  <label class="mb-2 custom-form-label">{{ $t('streamAccount.first_name') }}</label>
                  <input type="text" class="form-control mb-0" required="" />
                </b-col>
                <b-col>
                  <label class="mb-2 custom-form-label">{{ $t('streamAccount.last_name') }}</label>
                  <input type="text" class="form-control mb-0" required="" />
                </b-col>
                <b-col>
                  <label class="mb-2 custom-form-label">{{ $t('streamForm.username') }}</label>
                  <input type="text" class="form-control mb-0" required="" />
                </b-col>
                <b-col>
                  <label class="mb-2 custom-form-label">{{ $t('streamAccount.email') }} *</label>
                  <input type="email" class="form-control mb-0" required="" />
                </b-col>
                <b-col>
                  <label class="mb-2 custom-form-label">{{ $t('streamForm.password') }}</label>
                  <input type="password" class="form-control mb-0" required="" />
                </b-col>
                <b-col>
                  <label class="mb-2 custom-form-label">{{ $t('streamForm.confirm_password') }} *</label>
                  <input type="password" class="form-control mb-0" required="" />
                </b-col>
              </b-row>
              <label class="list-group-item d-flex align-items-center mt-5 mb-3 text-white"
                ><input class="form-check-input m-0 me-2" type="checkbox" />{{ $t('streamForm.read_and_accept') }} <nuxt-link :to="{name: 'extra-terms-of-use'}" class="ms-1"> {{ $t('streamForm.terms_conditions') }}*</nuxt-link></label
              >
              <b-row class="text-center">
                <b-col lg="3"></b-col>
                <b-col lg="6">
                  <div class="full-button">
                    <nuxt-link :to="{ name: 'auth-login' }" class="btn btn-primary text-capitalize position-relative w-100 my-3 rounded-3">
                      <span class="button-text">{{ $t('streamButtons.sign_up') }}</span>
                    </nuxt-link>
                    <p class="mt-2 mb-0 fw-normal">
                      {{ $t('streamForm.already_account') }}?<nuxt-link :to="{ name: 'auth-login' }" class="ms-1">{{ $t('streamButtons.login') }}</nuxt-link>
                    </p>
                  </div>
                </b-col>
                <b-col lg="3"></b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup>
import BrandLogo from '~/components/brand/BrandLogo.vue';
import { generateImgPath } from '~/StaticData/data';

definePageMeta({
  layout: "blank",
});
</script>
