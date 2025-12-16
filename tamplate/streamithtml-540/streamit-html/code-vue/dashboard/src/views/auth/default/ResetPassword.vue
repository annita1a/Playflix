<template>
  <section class="sign-in-page" :style="{ 'background-image': 'url(' + generateImgPath('/assets/images/login/login.webp') + ')' }">
    <b-container>
      <b-row class="justify-content-center align-items-center height-self-center">
        <b-col lg="5" md="12" class="align-self-center">
          <div class="sign-user_card">
            <div class="sign-in-page-data">
              <div class="sign-in-from w-100 m-auto">
                <router-link :to="{ name: 'dashboard.home' }">
                  <img class="img-fluid logo" :src="generateImgPath('/assets/images/logo-full.png')" alt="#" />
                </router-link>
                <h3 class="mb-3 text-center">{{ $t('authentication.reset_password') }}</h3>
                <p class="text-body">{{ $t('authentication.email_address') }}</p>
                <b-form class="mt-4">
                  <b-form-group  label-for="password" class="mb-3">
                    <b-input-group class="custom-input-group">
                      <b-form-input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" :placeholder="$t('authentication.enter-password')" required />
                      <b-input-group-text @click="togglePassword">
                        <i :class="showPassword ? 'ph ph-eye' : 'ph ph-eye-slash'"></i>
                      </b-input-group-text>
                    </b-input-group>
                  </b-form-group>
                  <div class="sign-info">
                    <button type="button" class="btn btn-btn btn-primary w-100 custom-sign-btn mt-2">{{ $t('authentication.reset') }}</button>
                  </div>
                </b-form>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup>
import { ref } from 'vue';

const password = ref('');
const showPassword = ref(false);

function togglePassword() {
  showPassword.value = !showPassword.value;
}
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
</script>
