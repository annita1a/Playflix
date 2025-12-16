<template>
  <div :class="['iq-card card-hover', isCardStyle2 === true ? 'landscape-card-hover' : '']">
    <div class="block-images position-relative w-100">
      <div class="img-box w-100">
        <nuxt-link :to="link" class="position-relative top-0 bottom-0 start-0 end-0">
          <img :src="image" alt="movie-card" class="img-fluid object-cover w-100 d-block border-0 rounded-3" />
        </nuxt-link>
      </div>

      <div class="card-description with-transition">
        <!-- Genres -->
        <ul class="genres-list p-0 mb-2 d-flex align-items-center flex-wrap list-inline">
          <li class="fw-semi-bold">
            <nuxt-link :to="{ name: 'view-all' }" tabindex="0" class="font-size-14">{{ $t('streamTag.action') }}</nuxt-link>
          </li>
          <li v-if="addList" class="fw-semi-bold">
            <nuxt-link :to="{ name: 'view-all' }" tabindex="0" class="font-size-14">{{ $t('streamTag.action') }}</nuxt-link>
          </li>
        </ul>

        <!-- Content -->
        <div class="cart-content">
          <div class="content-left">
            <h5 class="iq-title text-capitalize mb-0">
              <nuxt-link :to="link">{{ title }}</nuxt-link>
            </h5>

            <div v-if="isCardStyle2 !== 'true'" class="d-flex align-items-center gap-3">
              <div v-if="movieTime" class="d-flex align-items-center gap-1">
                <i class="ph ph-clock font-size-12"></i>
                <small class="font-size-12">{{ movieTime }}</small>
              </div>
              <div class="d-flex align-items-center gap-2">
                <template v-if="!isNotLangCard">
                  <i class="ph ph-translate"></i>
                </template>
                <small class="font-size-12">{{ cardLang }}</small>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="d-flex align-items-center justify-content-center gap-2 mt-3">
          <nuxt-link :to="{ name: 'watchlist-detail' }" data-bs-toggle="tooltip" data-bs-placement="top" :data-bs-title="$t('streamTooltip.add_to_watchlist')" class="d-flex align-items-center justify-content-center flex-shrink-0 border-0 add-to-wishlist-btn btn btn-secondary">
            <i class="ph ph-plus font-size-18"></i>
          </nuxt-link>
          <div class="iq-play-button iq-button">
            <nuxt-link :to="link" class="btn btn-primary w-100">{{ $t('streamButtons.play_now') }}</nuxt-link>
          </div>
        </div>
      </div>

      <!-- Premium badge -->
      <div v-if="productPremium" data-bs-toggle="tooltip" data-bs-placement="top" :data-bs-title="$t('streamPricing.premium')" class="position-absolute z-1 primium-product d-flex align-items-center justify-content-center">
        <i class="ph-fill ph-crown"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Tooltip } from 'bootstrap';
defineProps({
  isCardStyle2: { type: Boolean, default: false },
  link: {
    type: [String, Object],
    default: '',
  },
  image: { type: String, default: '' },
  title: { type: String, default: '' },
  addList: { type: Boolean, default: false },
  productPremium: { type: Boolean, default: false },
  movieTime: { type: String, default: '' },
  cardLang: { type: String, default: '' },
  isNotLangCard: { type: Boolean, default: false },
});

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach((el) => new Tooltip(el));
});
</script>
