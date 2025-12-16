<template>
  <table class="table cart-table">
    <thead class="border-bottom">
      <tr>
        <th scope="col" class="font-size-18 fw-bold">{{ $t('streamShop.product') }}</th>
        <th scope="col" class="font-size-18 fw-bold">{{ $t('streamShop.subtotal') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr class="cart_item">
        <td class="product-name">
          <div class="text d-flex align-items-center gap-1">
            <span class="text-body">{{ $t('streamShop.product1') }}</span>
            <span class="font-size-12">&nbsp;x</span>
            <strong class="text-white  fw-bold">&nbsp;1</strong>
          </div>
        </td>
        <td class="product-total">
          <span class="Price-amount"><bdi class="text-body"><span>$</span>28.00</bdi></span>
        </td>
      </tr>
      <tr class="cart_item">
        <td class="product-name">
          <div class="text d-flex align-items-center gap-1">
            <span class="text-body">{{ $t('streamShop.product7') }}</span>
            <span class="font-size-12">&nbsp;x</span>
            <strong class="text-white fw-bold">&nbsp;1</strong>
          </div>
        </td>
        <td class="product-total">
          <span class="Price-amount"><bdi class="text-body"><span>$</span>25.00</bdi></span>
        </td>
      </tr>
      <tr class="cart_item">
        <td class="product-name">
          <div class="text  d-flex align-items-center gap-1">
            <span class="text-body">{{ $t('streamShop.product5') }}</span>
            <span class="font-size-12">&nbsp;x</span>
            <strong class="text-white  fw-bold">&nbsp;1</strong>
          </div>
        </td>
        <td class="product-total">
          <span class="Price-amount"><bdi class="text-body"><span>$</span>18.00</bdi></span>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td class="p-3 fw-bold font-size-18 border-0">{{ $t('streamShop.subtotal') }}</td>
        <td class="p-3 fw-bold border-0">
          <span class="mb-0 text-body">$71.00</span>
        </td>
      </tr>
      <tr>
        <td class="p-3 fw-bold font-size-18 border-0">{{ $t('streamKeyword.total') }}</td>
        <td class="p-3 fw-bold border-0">
          <span class="mb-0">$71.00</span>
        </td>
      </tr>
    </tfoot>
  </table>
</template>
<script setup>
// import { myCart } from '../../../StaticData/shop';
// Props are defined but not used, so remove the unused variable to fix the lint error.
defineProps({
  thumbnail: { type: String, default: '' },
  slug: { type: String, default: '' },
  productName: { type: String, default: '' },
  finalPrice: { type: String, default: '' },
});
</script>