<template>
  <div class="wishlist-page section-padding">
    <b-container>
      <div class="wishlist-section px-2">
        <!-- Title -->
        <h2 class="mb-5 custom-wishlist-title">{{ $t('streamShop.my_wishlist') }}</h2>
        <div class="table-responsive-sm">
          <table class="table cart-table mb-3">
            <thead class="border-bottom">
              <tr>
                <th class="fw-500 font-size-18"></th>
                <th class="fw-500 font-size-18"></th>
                <th class="fw-500 font-size-18">{{ $t('streamShop.product_name') }}</th>
                <th class="fw-500 font-size-18">{{ $t('streamShop.unit_price') }}</th>
                <th class="fw-500 font-size-18">{{ $t('streamShop.stock_status') }}</th>
                <th class="fw-500 font-size-18"></th>
              </tr>
            </thead>
            <tbody>
              <WishlistCard v-for="data in myWishlist" :key="data" :thumbnail="data.thumbnail" :slug="data.slug" :product-name="data.product_name" :final-price="data.final_price" :stock-status="data.stock_status" />
            </tbody>
          </table>
        </div>
        <div class="product-social-share mt-5">
          <h5 class="fs-4">Share On:</h5>
          <ul class="list-inline m-0 p-0 d-flex flex-wrap align-items-center gap-3">
            <li class="flex-shrink-0">
              <a href="https://www.facebook.com/" class="d-inline-block border-radius rounded-circle bg-primary text-white text-center" target="_blank">
                <i class="icon icon-facebook-share"></i>
              </a>
            </li>
            <li class="flex-shrink-0">
              <a href="https://twitter.com/" class="d-inline-block border-radius rounded-circle bg-info text-white text-center" target="_blank">
                <i class="ph ph-x-logo"></i>
              </a>
            </li>
            <li class="flex-shrink-0">
              <a href="https://in.pinterest.com/" class="d-inline-block border-radius rounded-circle bg-danger text-white text-center" target="_blank">
                <i class="icon icon-pinterest-share"></i>
              </a>
            </li>
            <li class="flex-shrink-0">
              <a href="https://iqonic.design/" class="d-flex align-items-center justify-content-center border-radius rounded-circle bg-warning text-white text-center" target="_blank">
                <i class="ph ph-envelope-simple fs-5"></i>
              </a>
            </li>
            <li class="flex-shrink-0">
              <a href="https://www.whatsapp.com/" class="d-flex align-items-center justify-content-center border-radius rounded-circle bg-success text-white text-center" target="_blank">
                <i class="ph ph-whatsapp-logo fs-5"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script setup>
import WishlistCard from '../../components/merchandise/WishlistCard.vue';
import { myWishlist } from '../../StaticData/shop';
</script>
