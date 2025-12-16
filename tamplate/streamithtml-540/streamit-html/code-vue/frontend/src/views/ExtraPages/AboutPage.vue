<template>
  <section class="custom-site-main">
    <div class="e-con-inner">
    <b-container class="px-3 px-sm-0">
      <b-row class="justify-content-center">
        <b-col md="12" class="text-center">
          <h3 class="about-title">{{$t('streamAbout.about_streamit')}}</h3>
          <p>
            {{$t('streamAbout.about_streamit_desc')}}
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col md="12" class="text-center">
          <p class="custom-about-decs">
            {{$t('streamAbout.about_streamit_desc_two')}}
          </p>
        </b-col>
      </b-row>
    </b-container>
    </div>
  </section>

  <div class="about-section-padding-bottom">
    <b-container fluid>
      <b-row class="align-items-center">
        <!-- Image Section -->
        <b-col xl="6">
          <img class="img-fluid rounded mb-4 mb-xl-0 about-content-image" src="/assets/images/pages/content-Image-min.png" alt="content-image" />
        </b-col>
        <!-- Text and Features Section -->
        <b-col xl="6">
          <h3 class="about-title">{{$t('streamAbout.why_choose_streamit')}}</h3>
          <p class="text-light">
            {{$t('streamAbout.why_choose_streamit_desc')}}
          </p>
          <div class="divider"></div>
          <div class="d-flex flex-column flex-wrap w-100 gap-3 mt-3">
            <div class="feature-box mb-3 d-flex align-items-center flex-column flex-md-row">
              <img src="/assets/images/pages/lab-test-icon.png" alt="Movies" />
              <div class="feature-content">
                <h5 class="feature-title">
                  <span class="text-primary">10,000+</span> {{$t('streamAbout.why_choose_streamit_list_one')}}
                </h5>
                <p class="mb-0 font-size-14">
                  {{$t('streamAbout.why_choose_streamit_list_one_desc')}}
                </p>
              </div>
            </div>
            <div class="feature-box mb-3 d-flex align-items-center flex-column flex-md-row">
              <img src="/assets/images/pages/ai-powered.png" alt="AI Powered" />
              <div class="feature-content">
                <h5 class="feature-title">{{$t('streamAbout.why_choose_streamit_list_two')}}</h5>
                <p class="mb-0 font-size-14">
                  {{$t('streamAbout.why_choose_streamit_list_two_desc')}}
                </p>
              </div>
            </div>
            <div class="feature-box mb-3 d-flex align-items-center flex-column flex-md-row">
              <img src="/assets/images/pages/buffer-free.png" alt="Buffer-Free" />
              <div class="feature-content">
                <h5 class="feature-title">99.9% {{$t('streamAbout.why_choose_streamit_list_three')}}</h5>
                <p class="mb-0 font-size-14">
                  {{$t('streamAbout.why_choose_streamit_list_three_desc')}}
                </p>
              </div>
            </div>
            <div class="feature-box d-flex align-items-center flex-column flex-md-row">
              <img src="/assets/images/pages/secure-payment.png" alt="Secure Payment" />
              <div class="feature-content">
                <h5 class="feature-title">{{$t('streamAbout.why_choose_streamit_list_four')}}</h5>
                <p class="mb-0 font-size-14">
                  {{$t('streamAbout.why_choose_streamit_list_four_desc')}}
                </p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>

  <section class="about-section-padding-bottom">
    <div
      class="streaming-section text-center"
      style="background-image: url('assets/images/pages/bg-aboutus-min.png'); background-position: center center; background-repeat: no-repeat; background-size: cover;"
    >
      <b-container>
        <div class="streaming-section-spacing">
          <b-row class="justify-content-center align-items-center">
            <b-col xl="6" md="8">
              <!-- Title -->
              <div>
                <h3 class="mt-0 streaming-title">{{$t('streamAbout.ultimate_exp')}}</h3>
              </div>
              <!-- Subtitle -->
              <div>
                <p class="description-trail mb-0 fw">
                  {{$t('streamAbout.ultimate_exp_dec')}} <strong>$7.49/{{$t('streamAbout.month')}}</strong>{{$t('streamAbout.no_commitment')}}
                </p>
              </div>
              <!-- CTA Button -->
              <div class="streaming-section-btn">
                <div class="iq-button">
                  <router-link :to="{ name: 'landing-page.pricing-plan' }" class="btn btn-primary rounded-3">
                    <span class="d-flex align-items-center justify-content-center gap-2 fw-semibold">
                      {{$t('streamAbout.start_free_trail')}}
                      <i class="ph-fill ph-play fs-6 ms-0"></i>
                    </span>
                  </router-link>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
  </section>

  <section class="section-padding-bottom">
    <team-section></team-section>
  </section>
  <contact-us></contact-us>
  <work-section></work-section>
</template>

<script setup>
import TeamSection from './AboutSections/TeamSection.vue';
import ContactUs from './AboutSections/ContactUs.vue';
import WorkSection from './AboutSections/WorkSection.vue';
</script>