<template>
  <section class="section-padding" style="background-color: var(--bs-gray-900)">
    <b-container>
      <b-row class="about-us-row text-center align-items-center">
        <b-col lg="6" md="5">
          <div class="text-center">
            <img width="497" height="477" src="/assets/images/pages/map.webp"
              class="img-fluid attachment-large size-large" alt="" loading="lazy" />
          </div>
        </b-col>
        <b-col lg="6" md="7">
          <h3 class="text-capitalize text-start mb-4">{{ $t('streamAbout.connect_with_us') }}</h3>
          <p class="mb-0 text-start">{{ $t('streamAbout.streamit_located') }} <a
              href="mailto:info@medyapim.com">hello@streamit.com</a> {{ $t('streamAbout.tech_related') }}</p>
          <div class="mt-4">
            <div class="text-capitalize mb-1 d-flex gap-2">
              <h6>{{ $t('streamAccount.company') }}:</h6>
              <h6 class="text-decoration-none ms-1">Iqonic Design</h6>
            </div>
            <div class="text-capitalize mb-1 d-flex gap-2">
              <h6>{{ $t('streamShop.product') }}:</h6>
              <h6 class="text-decoration-none ms-1">Streamit </h6>
            </div>
            <div class="d-flex gap-1">
              {{ $t('streamPages.contact_us') }}:
              <a href="#" class="text-decoration-none ms-1">hello@iqonic.design</a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
