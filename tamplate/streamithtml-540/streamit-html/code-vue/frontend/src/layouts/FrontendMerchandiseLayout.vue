<template>
  <!-- Header Component Start -->
  <HeaderMerchandise> </HeaderMerchandise>
  <!-- Header Component End-->

  <!-- Hero Slider, Banner Start -->
  <BreadcrumbWidget v-if="route.meta.beforeWrapper"></BreadcrumbWidget>
  <!-- Hero Slider, Banner End -->

  <!-- Main Component Start -->
  <router-view />
  <!-- Main Component End -->

  <!-- Footer Component Start -->
  <FooterDefault v-if="route.meta.footer === 'default'"></FooterDefault>

  <FooterMerchandise v-else></FooterMerchandise>
  <!-- Footer Component End -->

  <div id="shoping-cart-toggle" class="offcanvas overflow-y-auto widget-shopping-cart-content offcanvas-end offcanvas-sidebar sidebar-container on-rtl end border-0" tabindex="-1">
    <div class="offcanvas-header justify-content-between position-relative">
      <h5 id="offcanvasExampleLabel" class="offcanvas-title fw-500">{{ $t('streamShop.shopping_cart') }} ( <span class="streamit-cart-count" aria-live="polite">3</span> )</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="product-list-content">
        <ul class="list-unstyled mb-0">
          <li class="mini-cart-item d-flex align-items-start gap-3">
            <div class="cart-img">
              <router-link :to="{ name: 'landing-page.cart' }" :aria-label="$t('streamShop.product2')">
                <img src="/assets/images/shop/product/02.webp" class="img-fluid object-cover" width="90" alt="product-image" />
              </router-link>
            </div>
            <div class="cart-content flex-grow-1 position-relative pe-5">
              <div class="d-flex justify-content-between align-items-center">
                <router-link class="d-block" :to="{ name: 'landing-page.merchandise.shop.detail' }" :aria-label="$t('streamShop.product2')">
                  <h6 class="mb-36 text-capitalize fw-500">{{ $t('streamShop.product2') }}</h6>
                </router-link>
                <a href="javascript:void(0)" class="delete-btn text-white text-capitalize" @click="deleteSwal()">
                  <i class="ph ph-trash text-primary"></i>
                </a>
              </div>
              <div class="product-price text-primary small">$13.00</div>
              <div class="btn-group iq-qty-btn custom-qty-btn rounded-3 mt-3" data-qty="btn" role="group">
                <button type="button" class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0">
                  <i class="ph ph-minus"></i>
                </button>
                <input type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input" pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2" :title="$t('streamShop.qty')" />
                <button type="button" class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                  <i class="ph ph-plus"></i>
                </button>
              </div>
            </div>
          </li>

          <li class="mini-cart-item d-flex align-items-start gap-3">
            <div class="cart-img">
              <router-link :to="{ name: 'landing-page.cart' }" :aria-label="$t('streamShop.product4')">
                <img src="/assets/images/shop/product/04.webp" class="img-fluid object-cover" width="90" alt="product-image" />
              </router-link>
            </div>
            <div class="cart-content flex-grow-1 position-relative pe-5">
              <div class="d-flex justify-content-between align-items-center">
                <router-link class="d-block" :to="{ name: 'landing-page.merchandise.shop.detail' }" :aria-label="$t('streamShop.product4')">
                  <h6 class="mb-36 text-capitalize fw-500">{{ $t('streamShop.product4') }}</h6>
                </router-link>
                <a href="javascript:void(0)" class="delete-btn text-white text-capitalize" @click="deleteSwal()">
                  <i class="ph ph-trash text-primary"></i>
                </a>
              </div>
              <div class="product-price text-primary small">$18.00</div>
              <div class="btn-group iq-qty-btn custom-qty-btn rounded-3 mt-3" data-qty="btn" role="group">
                <button type="button" class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0">
                  <i class="ph ph-minus"></i>
                </button>
                <input type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input" pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2" :title="$t('streamShop.qty')" />
                <button type="button" class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                  <i class="ph ph-plus"></i>
                </button>
              </div>
            </div>
          </li>

          <li class="mini-cart-item d-flex align-items-start gap-3">
            <div class="cart-img">
              <router-link :to="{ name: 'landing-page.cart' }" :aria-label="$t('streamShop.product5')">
                <img src="/assets/images/shop/product/05.webp" class="img-fluid object-cover" width="90" alt="product-image" />
              </router-link>
            </div>
            <div class="cart-content flex-grow-1 position-relative pe-5">
              <div class="d-flex justify-content-between align-items-center">
                <router-link class="d-block" :to="{ name: 'landing-page.merchandise.shop.detail' }" :aria-label="$t('streamShop.product5')">
                  <h6 class="mb-36 text-capitalize fw-500">{{ $t('streamShop.product5') }}</h6>
                </router-link>
                <a href="javascript:void(0)" class="delete-btn text-white text-capitalize" @click="deleteSwal()">
                  <i class="ph ph-trash text-primary"></i>
                </a>
              </div>
              <div class="product-price text-primary small">$18.00</div>
              <div class="btn-group iq-qty-btn custom-qty-btn rounded-3 mt-3" data-qty="btn" role="group">
                <button type="button" class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0">
                  <i class="ph ph-minus"></i>
                </button>
                <input type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input" pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2" :title="$t('streamShop.qty')" />
                <button type="button" class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                  <i class="ph ph-plus"></i>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="offcanvas-footer border-top py-3 px-3">
      <div class="d-flex align-items-center justify-content-between gap-3">
        <strong>{{ $t('streamShop.subtotal') }}:</strong>
        <span class="st-woocommerce-Price-amount amount"> <span class="woocommerce-Price-currencySymbol">₹</span>49.00 </span>
      </div>
      <div class="mini-cart-buttons d-flex flex-column align-items-center gap-3 mt-4">
        <div class="iq-button w-100">
          <router-link :to="{ name: 'landing-page.checkout' }" class="btn btn-primary text-capitalize w-100 rounded-3">
            <span class="button-text">{{ $t('streamShop.checkout') }}</span>
          </router-link>
        </div>
        <div class="w-100">
          <router-link :to="{ name: 'landing-page.cart' }" class="btn btn-secondary text-capitalize w-100 rounded-3">
            <span class="button-text">{{ $t('streamButtons.view_cart') }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <SettingOffcanvas></SettingOffcanvas>

  <!-- Back To Top Button -->
  <BackToTop />
</template>
<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import Swal from 'sweetalert2';
// Import Vue Rounter Hooks
import { useRoute } from 'vue-router';
// Import Header Component
import HeaderMerchandise from '../components/merchandise/partials/HeaderMerchandise.vue';
// Import Footer Component
import FooterMerchandise from '../components/merchandise/partials/FooterMerchandise.vue';
import FooterDefault from '../components/partials/FooterDefault.vue';
// Import Header Breadcrumb Component
import BreadcrumbWidget from '../components/BreadcrumbWidget.vue';
import SettingOffcanvas from '../components/SettingOffcanvas.vue';
import BackToTop from '../components/BackToTop.vue';
const route = useRoute();
const props = defineProps({
  modelValue: {
    type: Number,
    default: 2,
  },
});
const emit = defineEmits(['update:modelValue']);
const newValue = ref(props.modelValue);
watch(newValue, () => {
  emit('update:modelValue', newValue.value);
});

const deleteSwal = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You want to delete this item',
    icon: 'error',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    background: 'var(--bs-gray-900)',
    color: 'var(--bs-white)',
    backdrop: 'rgba(60,60,60,0.8)',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Deleted!',
        text: 'Your item has been deleted.',
        icon: 'success',
        background: 'var(--bs-gray-900)',
        color: 'var(--bs-white)',
        backdrop: 'rgba(60,60,60,0.8)',
      }); 
    }
  });
};
</script>
<style lang="scss"></style>
