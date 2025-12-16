<template>
  <AccountLayout>
    <div class="p-4">
      <b-row>
        <b-col md="6">
          <h4 class="mb-5 text-primary">{{ $t('streamButtons.login') }}</h4>
          <form method="post" action="#">
            <div class="mb-4">
              <input type="text" name="user-name" class="form-control" :placeholder="$t('streamAccount.username_or_email')+'*'" required="" />
            </div>
            <div class="mb-4">
              <input type="password" name="pwd" class="form-control" :placeholder="$t('streamAccount.password')+'*'" required="" />
            </div>
            <div class="form-check mb-4">
              <input id="flexCheckDefault" class="form-check-input me-2" type="checkbox" value="" />
              <label class="form-check-label" for="flexCheckDefault"> {{ $t('streamShop.remember_me') }} </label>
            </div>
            <a href="javascript:void(0)" class="btn btn-primary text-capitalize position-relative rounded-3">
              <span class="button-text">{{ $t('streamButtons.login') }}</span>
            </a>
          </form>
          <div class="mt-3">
            <div class="iq-button link-button">
              <a href="javascript:void(0)" class="btn text-primary p-0 text-capitalize position-relative">
                <span class="button-text">{{ $t('streamAccount.lost_password') }}</span>
              </a>
            </div>
          </div>
        </b-col>
        <b-col md="6">
          <h4 class="mb-5 mt-5 mt-lg-0 mt-md-0 text-primary">{{ $t('streamForm.register') }}</h4>
          <form method="post" action="#">
            <div class="mb-4">
              <input type="text" name="user-name":placeholder="$t('streamAccount.username')+'*'" class="form-control" required="" />
            </div>
            <div class="mb-4">
              <input type="email" name="email-address":placeholder="$t('streamAccount.email_address')+'*'" class="form-control" required="" />
            </div>
            <div class="mb-4">
              <input type="password" name="password":placeholder="$t('streamAccount.password')+'*'" class="form-control" required="" />
            </div>
            <p class="mb-5">
              {{ $t('streamShop.user_personal_data') }} <nuxt-link :to="{ name: 'extra-privacy-policy' }"> {{
                $t('sectionTitle.privacy_policy') }}</nuxt-link>.
            </p>
            <a href="javascript:void(0)" class="btn btn-primary text-capitalize position-relative rounded-3">
              <span class="button-text">{{ $t('streamForm.register') }}</span>
            </a>
          </form>
        </b-col>
      </b-row>
    </div>
  </AccountLayout>
</template>
<script setup>
import AccountLayout from './partials/AccountLayout.vue';
//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("My Account");
</script>
