<template>
  <section class="sign-in-page vh-100" :style="`background: url(${generateImgPath('./assets/images/pages/01.webp')}); background-size: cover; background-repeat: no-repeat;`">
    <b-container>
      <b-row class="justify-content-center align-items-center height-self-center vh-100">
        <b-col lg="5" md="12" class="align-self-center">
          <div class="user-login-card rounded-3">
            <!--Logo -->
            <BrandLogo />

            <div class="sign-in-page-data">
              <div class="sign-in-from w-100 m-auto">
                <form action="post">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="mb-2 custom-form-label"> {{ $t('streamAccount.username_or_email') }} </label>
                    <input id="exampleInputEmail1" :placeholder="$t('streamAccount.placeholder_enter_email')" autoComplete="off" required type="email" class="mb-0 form-control" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword2" class="mb-2 custom-form-label"> {{$t('streamAccount.password')}} </label>
                    <div class="input-group custom-input-group mb-3">
                      <input id="exampleInputPassword2" :placeholder="$t('streamAccount.password')" required type="password" class="mb-0 form-control" />
                      <span class="input-group-text"><i id="togglePassword" class="ph ph-eye-slash"></i></span>
                    </div>
                  </div>
                  <router-link :to="{name: 'landing-page.ott'}" class="btn btn-primary text-capitalize position-relative w-100 my-3 rounded-3">{{ $t('streamButtons.login') }}</router-link>
                  <div class="d-flex justify-content-center align-items-center gap-2 links my-3">
                    {{$t('streamForm.if-you-are-new')}}
                    <router-link :to="{name: 'landing-page.sing-up-page'}" class="st-sub-card setting-dropdown">
                      <h6 class="m-0 text-primary">{{$t('streamButtons.sign_up')}}</h6>
                    </router-link>
                  </div>
                  <div class="seperator d-flex justify-content-center align-items-center">
                    <span class="line"></span>
                    <span class="mx-2">OR</span>
                    <span class="line"></span>
                  </div>
                  <div class="css_prefix-social-login-section text-center">{{$t('streamForm.no-app-config')}}</div>
                </form>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup>
import { generateImgPath } from '../../StaticData/data';
import BrandLogo from '../../components/brand/BrandLogo.vue';
</script>
