<template>
  <div class="privacy-policy section-padding">
    <b-container>
      <div class="title-box privacy-title-gap">
        <h4 class="mb-3 fw-500">1. {{ $t('streamPrivacy_Policy.waht_personal') }}</h4>
        <p class="mb-0">{{ $t('streamPrivacy_Policy.desc1') }}</p>
      </div>
      <div class="title-box privacy-title-gap">
        <h4 class="mb-3 fw-500">2. {{ $t('streamPrivacy_Policy.cookies_web') }}</h4>
        <p class="mb-0">{{ $t('streamPrivacy_Policy.desc2') }}
        <br><br>
        {{ $t('streamPrivacy_Policy.desc3') }}</p>
      </div>
      <div class="title-box privacy-title-gap">
        <h4 class="mb-3 fw-500">3. {{ $t('streamPrivacy_Policy.third_party') }}</h4>
        <p class="mb-0">{{ $t('streamPrivacy_Policy.desc1') }}</p>
      </div>
      <div class="title-box privacy-title-gap">
        <h4 class="mb-3 fw-500">4. {{ $t('streamPrivacy_Policy.disclousure') }}</h4>
        <p class="mb-0">{{ $t('streamPrivacy_Policy.desc1') }}</p>
      </div>
      <div class="title-box privacy-title-gap">
        <h4 class="mb-3 fw-500">5. {{ $t('streamPrivacy_Policy.transfer_storage') }} &amp; {{ $t('streamPrivacy_Policy.processing_globally') }}</h4>
        <p class="mb-0">{{ $t('streamPrivacy_Policy.desc1') }}</p>
      </div>
    </b-container>
  </div>
</template>
<script setup>
//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("Privacy Policy");
</script>
