<template>
  <div class="section-padding">
    <b-container>
      <b-row>
        <b-col xl="4" md="6" class="mb-3 mb-lg-0">
          <div class="pricing-plan-wrapper">
            <div class="pricing-plan-header">
              <div class="plan-wrapper">
                <h4 class="plan-name">{{ $t('streamPricing.basic_plan') }}</h4>
              </div>
              <div class="pricing-plan-details">
                <span class="plan-main-price">$10</span>
                {{ '' }}
                <span class="plan-period-time">/ {{$t('streamPricing.lifetime')}}</span>
              </div>
            </div>
            <div class="pricing-details">
              <div class="pricing-plan-description">
                <ul class="list-inline p-0">
                  <li>
                    <i class="ph ph-check fw-bold"></i>
                    <span class="font-size-18 fw-500">{{ $t('streamPricing.free_movies') }}</span>
                  </li>
                  <li>
                    <i class="ph ph-x fw-bold text-primary"></i>
                    <span class="font-size-18 fw-500">{{ $t('streamPricing.watch_on_tv') }}</span>
                  </li>
                  <li>
                    <i class="ph ph-x fw-bold text-primary"></i>
                    <span class="font-size-18 fw-500">{{ $t('streamPricing.streamit_special') }}</span>
                  </li>
                  <li>
                    <i class="ph ph-x fw-bold text-primary"></i>
                    <span class="font-size-18 fw-500">{{ $t('streamPricing.video_quality') }}</span>
                  </li>
                </ul>
              </div>
              <div class="pricing-plan-footer">
                <div class="iq-button">
                  <a href="javascript:void(0)" class="btn btn-primary fw-semibold rounded-3"> {{$t('streamShop.checkout')}} </a>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col xl="4" md="6" class="mb-3 mb-lg-0">
          <div class="pricing-plan-wrapper">
            <div class="pricing-plan-discount bg-primary p-2 text-center">
              <span class="text-white">{{ $t('streamPricing.save') }} 20%</span>
            </div>
            <div class="pricing-plan-header">
              <div class="plan-wrapper d-flex align-items-center justify-content-between">
                <h4 class="plan-name">{{$t('streamPricing.premium_plan')}}</h4>
                <span class="badge bg-primary rounded-2">
                  <small>{{$t('streamPricing.active')}}</small>
                </span>
              </div>
              <div class="pricing-plan-details">
                <span class="sale-price text-decoration-line-through text-primary">
                  <span>$267</span>
                </span>{{ '' }}
                <span class="plan-main-price">$180</span>
                {{ '' }}
                <span class="plan-period-time">/ 3 {{$t('streamPricing.month')}}</span>
              </div>
            </div>
            <div class="pricing-details">
              <div class="description">
                <p class="m-0">{{$t('streamPricing.benifits_of_streamit')}}</p>
              </div>
              <div class="pricing-plan-description">
                <ul class="list-inline p-0">
                  <li>
                    <i class="ph ph-check fw-bold"></i>
                    <span class="font-size-18 fw-500">{{ $t('streamPricing.free_movies') }}</span>
                  </li>
                  <li>
                    <i class="ph ph-check fw-bold"></i>
                    <span class="font-size-18 fw-500">{{ $t('streamPricing.watch_on_tv') }}</span>
                  </li>
                  <li>
                    <i class="ph ph-check fw-bold"></i>
                    <span class="font-size-18 fw-500">{{ $t('streamPricing.streamit_special') }}</span>
                  </li>
                  <li>
                    <i class="ph ph-check fw-bold"></i>
                    <span class="font-size-18 fw-500">{{ $t('streamPricing.video_quality') }}</span>
                  </li>
                </ul>
              </div>
              <div class="pricing-plan-footer">
                <div class="iq-button">
                  <a href="javascript:void(0)" class="btn btn-primary fw-semibold rounded-3"> {{$t('streamShop.checkout')}} </a>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col xl="4" md="6">
          <div class="pricing-plan-wrapper">
            <div class="pricing-plan-header">
              <div class="plan-wrapper">
                <h4 class="plan-name">{{ $t('streamPricing.standard_plan') }}</h4>
              </div>

              <div class="pricing-plan-details">
                <span class="plan-main-price">$79</span>
                {{ '' }}
                <span class="plan-period-time">/ 1 {{ $t('streamPricing.month') }}</span>
              </div>
            </div>
            <div class="pricing-details">
              <div class="pricing-plan-description">
                <ul class="list-inline p-0">
                  <li>
                    <i class="ph ph-check fw-bold"></i>
                    <span class="font-size-18 fw-500">{{ $t('streamPricing.free_movies') }}</span>
                  </li>
                  <li>
                    <i class="ph ph-check fw-bold"></i>
                    <span class="font-size-18 fw-500">{{ $t('streamPricing.watch_on_tv') }}</span>
                  </li>
                  <li>
                    <i class="ph ph-check fw-bold"></i>
                    <span class="font-size-18 fw-500">{{ $t('streamPricing.streamit_special') }}</span>
                  </li>
                  <li>
                    <i class="ph ph-x fw-bold text-primary"></i>
                    <span class="font-size-18 fw-500">{{ $t('streamPricing.video_quality') }}</span>
                  </li>
                </ul>
              </div>
              <div class="pricing-plan-footer">
                <div class="iq-button">
                  <a href="javascript:void(0)" class="btn btn-primary fw-semibold rounded-3"> {{$t('streamShop.checkout')}} </a>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script setup>
//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("streamPages.pricing_plan");
</script>
