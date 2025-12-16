<template>
  <div class="checkout-page section-padding">
    <b-container>
      <div class="main-cart mb-3 mb-md-5 pb-0 pb-md-5">
        <ul class="cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap">
          <li class="cart-page-item">
            <span class="cart-pre-heading badge cart-pre-number bg-primary border-radius rounded-circle me-1"> 1 </span>
            {{ '' }}
            <span class="cart-page-link"> {{ $t('streamShop.shopping_cart') }} </span>
          </li>
          <li class="d-flex justify-content-center">
            <i class="ph ph-caret-circle-right fs-4"></i>
          </li>
          <li class="cart-page-item active">
            <span class="cart-pre-number border-radius rounded-circle me-1"> 2 </span>
            {{ '' }}
            <span class="cart-page-link"> {{ $t('streamShop.checkout') }} </span>
          </li>
          <li class="d-flex justify-content-center">
            <i class="ph ph-caret-circle-right fs-4"></i>
          </li>
          <li class="cart-page-item">
            <span class="cart-pre-number border-radius rounded-circle me-1"> 3 </span>
            {{ '' }}
            <span class="cart-page-link"> {{ $t('streamShop.order_summary') }} </span>
          </li>
        </ul>
      </div>

      <b-row>
        <b-col lg="8">
          <div class="table-responsive">
            <table class="table cart-table" cellspacing="0">
              <thead class="border-bottom">
                <tr>
                  <th scope="col" class="font-size-18 fw-medium"></th>
                  <th scope="col" class="font-size-18 fw-medium"></th>
                  <th scope="col" class="font-size-18 fw-500">{{ $t('streamShop.product') }}</th>
                  <th scope="col" class="font-size-18 fw-500">{{ $t('streamShop.price') }}</th>
                  <th scope="col" class="font-size-18 fw-500">{{ $t('streamShop.quantity') }}</th>
                  <th scope="col" class="font-size-18 fw-500">{{ $t('streamShop.subtotal') }}</th>
                </tr>
              </thead>
              <tbody v-for="data in myCart" :key="data">
                <ProductCart :thumbnail="data.thumbnail" :slug="data.slug" :product-name="data.product_name" :price="data.price" :final-price="data.final_price" />
              </tbody>
            </table>
          </div>
          <div class="coupon-main d-flex justify-content-between gap-5 flex-wrap align-items-center pt-4 pb-5 border-bottom">
            <div class="wrap-coupon d-flex align-items-center gap-2 flex-wrap">
              <input class="form-control d-inline-block w-auto" name="coupon_code" type="text" :placeholder="$t('streamShop.coupon_code')" />
              <div class="d-inline-block">
                <a href="#" class="btn btn-primary">{{ $t('streamButtons.apply_coupon') }} </a>
              </div>
            </div>
            <div class="button-primary">
              <a href="#" class="btn btn-primary">{{ $t('streamButtons.update_cart') }} </a>
            </div>
          </div>
        </b-col>
        <b-col lg="4">
          <div class="cart_totals p-4">
            <h2 class="cart-total-title">{{ $t('streamShop.cart_total') }}</h2>
            <div class="css_prefix-woocommerce-cart-box table-responsive mb-0">
              <table v-for="data in myCart" :key="data" class="table mb-3">
                <ShopCartTotal :final-price="data.final_price" />
              </table>
              <div class="button-primary pt-3">
                <CustomButton
                  not-btncaret-icon="true"
                  :button-title="$t('streamShop.proceed_to_checkout')"
                  :link="{ name: 'merchandise-checkout' }" />
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script setup>
import ProductCart from '~/components/merchandise/cart/ProductCart.vue';
import ShopCartTotal from '~/components/merchandise/cart/CartTotal.vue';
import { myCart } from '~/StaticData/shop';
import CustomButton from '~/components/CustomButton.vue';

//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("Cart");
</script>