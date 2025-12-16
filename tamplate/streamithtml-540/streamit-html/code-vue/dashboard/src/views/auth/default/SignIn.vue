<template>
  <section class="sign-in-page" :style="{ 'background-image': 'url(' + generateImgPath('/assets/images/login/login.webp') + ')' }">
    <b-container>
      <b-row class="justify-content-center align-items-center height-self-center">
        <b-col lg="5" md="12" class="align-self-center">
          <div class="sign-user_card">
            <router-link :to="{ name: 'dashboard.home' }">
              <img class="img-fluid logo" :src="generateImgPath('/assets/images/logo-full.png')" alt="#" />
            </router-link>
            <div class="sign-in-page-data">
              <div class="sign-in-from w-100 m-auto">
                <h3 class="mb-3 text-center">{{$t('authentication.sign_in')}}</h3>
                <b-form>
                  <b-form-group :label="$t('authentication.username-email-address')" label-for="email" class="mb-3">
                    <b-form-input id="email" v-model="email" type="email" :placeholder="$t('authentication.enter_email')" required autocomplete="off" />
                  </b-form-group>

                  <b-form-group :label="$t('authentication.password')" label-for="password" class="mb-3">
                    <b-input-group class="custom-input-group">
                      <b-form-input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" :placeholder="$t('authentication.password')" autocomplete="current-password" required />
                      <b-input-group-text @click="togglePassword">
                        <i :class="showPassword ? 'ph ph-eye' : 'ph ph-eye-slash'"></i>
                      </b-input-group-text>
                    </b-input-group>
                  </b-form-group>

                  <div class="forgot-password">
                    <a href="/auth/recoverpw.html">{{$t('authentication.forgot_your_password')}}</a>
                  </div>

                  <div class="submit mb-3">
                    <b-button type="submit" variant="primary" class="w-100 custom-sign-btn"> {{$t('sidebar.login')}} </b-button>
                  </div>

                  <div class="login-form-bottom">
                    <div class="d-flex justify-content-center align-items-center gap-2 links my-3">
                      {{$t('authentication.if-you-are-new')}}
                      <router-link to="/auth/register" class="st-sub-card setting-dropdown">
                        <h6 class="text-primary m-0">{{ $t('authentication.sign_up') }}</h6>
                      </router-link>
                    </div>
                  </div>

                  <div class="css_prefix-separator">
                    <span class="or-section">{{$t('authentication.or')}}</span>
                  </div>

                  <div class="css_prefix-social-login-section text-center">
                    <div>{{$t('authentication.no-apps-configured-administrator')}}</div>
                  </div>
                </b-form>
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
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const showPassword = ref(false);

function togglePassword() {
  showPassword.value = !showPassword.value;
}

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
</script>