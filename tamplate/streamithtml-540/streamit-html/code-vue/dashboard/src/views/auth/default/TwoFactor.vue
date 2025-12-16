<template>
  <section class="sign-in-page" :style="{ 'background-image': 'url(' + generateImgPath('/assets/images/login/login.webp') + ')' }">
    <b-container>
      <b-row class="justify-content-center align-items-center height-self-center">
        <b-col lg="5" md="12" class="align-self-center form-padding">
          <div class="sign-user_card">
            <div class="sign-in-page-data">
              <router-link :to="{ name: 'dashboard.home' }">
                <img class="img-fluid logo" :src="generateImgPath('/assets/images/logo-full.png')" alt="#" />
              </router-link>
              <div class="sign-in-from w-100 m-auto">
                <h3 class="mb-3 text-center">{{$t('authentication.Two-Factor-Verification')}}</h3>
                <p>{{ $t('authentication.instructions_to_reset') }}</p>
                <b-form class="mt-4">
                  <b-form-group class="floating-label">
                    <label for="email" class="form-label">{{ $t('authentication.phone_number') }}</label>
                    <b-form-input id="email" type="email" class="form-control" aria-describedby="email" placeholder="+1 123456789"></b-form-input>
                  </b-form-group>
                  <b-button variant="primary" type="submit" href="/auth/reset-password" class="btn btn-primary w-100 custom-sign-btn mt-4">{{ $t('authentication.reset') }}</b-button>

                  <b-form-group class="mt-3">
                    <label for="email" class="form-label">{{$t('authentication.enter-otp-received-device')}}</label>
                    <b-form-input type="number" class="form-control" aria-describedby="email" placeholder="0000"></b-form-input>
                  </b-form-group>
                  <b-button variant="primary" type="submit" href="/auth/verify-email" class="btn btn-primary w-100 custom-sign-btn mt-4">{{ $t('authentication.verify') }}</b-button>
                </b-form>
              </div>
            </div>
            <div class="mt-2">
              <div class="d-flex justify-content-center links">
                {{ $t('authentication.dont_have_an_account') }}<router-link to="/auth/register" class="text-primary ms-2">{{ $t('authentication.sign_up') }}</router-link>
              </div>
              <div class="d-flex justify-content-center links">
                <router-link to="/auth/reset-password" class="f-link">{{ $t('authentication.forgot_your_password') }}</router-link>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- Sign in END -->
    </b-container>
  </section>
</template>
<script setup>
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
</script>