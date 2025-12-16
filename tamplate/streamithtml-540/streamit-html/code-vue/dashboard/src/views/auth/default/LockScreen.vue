<template>
  <section class="sign-in-page" :style="{ 'background-image': 'url(' + generateImgPath('/assets/images/login/login.webp') + ')' }">
    <div class="container h-100">
      <b-row class="justify-content-center align-items-center h-100">
        <b-col md="6" sm="12" class="col-12">
          <div class="sign-user_card">
            <router-link :to="{ name: 'dashboard.home' }">
              <img class="img-fluid logo" :src="generateImgPath('/assets/images/logo-full.png')" alt="#" />
            </router-link>
            <div class="sign-in-page-data">
              <div class="sign-in-from w-100 m-auto">
                <h3 class="mb-3 text-center">{{ $t('authentication.michael_smith') }}</h3>
                <p class="text-body text-center">{{ $t('authentication.admin_password') }}</p>
                <b-form class="mt-4">
                  <div class="form-group">
                    <input id="exampleInputEmail2" type="email" class="form-control mb-0" :placeholder="$t('authentication.password')" autocomplete="off" required />
                  </div>
                </b-form>
                  <router-link to="/auth/login" class="btn btn-primary w-100 custom-sign-btn mt-2">{{ $t('authentication.log_in') }}</router-link>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>
<script setup>
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
</script>
