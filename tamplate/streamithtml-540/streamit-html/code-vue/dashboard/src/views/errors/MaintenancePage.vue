<template>
  <div class="wrapper">
    <div class="mt-0 iq-maintenance">
      <b-container fluid class="p-0">
        <b-row class="no-gutters">
          <b-col sm="12" class="text-center">
            <div class="">
              <img src="/assets/images/error/02.png" class="img-fluid" alt="img" loading="lazy" />
              <h3 class="mt-4 mb-1">{{ $t('authentication.performing_maintenance') }}</h3>
              <p>{{ $t('authentication.back_in_somtime') }}</p>
            </div>
          </b-col>
        </b-row>
        <b-container class="mt-3">
          <b-row>
            <b-col lg="4">
              <b-card class="text-center">
                <i class="ri-3x text-primary">
                  <i class="ph-fill ph-browser text-primary fs-1"></i>
                </i>
                <h5 class="card-title mt-1">{{ $t('authentication.why_down') }}</h5>
                <p class="mb-0">{{ $t('authentication.why_down_desc') }}</p>
              </b-card>
            </b-col>
            <b-col lg="4">
              <b-card class="text-center">
                <i class="ri-3x text-primary">
                  <i class="ph ph-clock text-primary fs-1"></i>
                </i>
                <h5 class="card-title mt-1">{{ $t('authentication.what_is_down') }}</h5>
                <p class="mb-0">{{ $t('authentication.why_down_desc') }}</p>
              </b-card>
            </b-col>
            <b-col lg="4">
              <b-card class="text-center">
                <i class="ri-3x text-primary"> <i class="ph-fill ph-info text-primary fs-1"></i></i>

                <h5 class="card-title mt-1">{{ $t('authentication.do_you_need_support') }}</h5>
                <p class="mb-0">{{ $t('authentication.why_down_desc') }}</p>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>
  </div>
</template>