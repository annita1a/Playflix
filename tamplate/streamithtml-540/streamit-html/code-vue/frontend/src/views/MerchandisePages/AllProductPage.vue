<template>
  <div class="section-padding">
    <b-container fluid>
      <b-row class="row-cols-2 row-cols-md-3 row-cols-lg-5">
        <b-col v-for="(data, index) in products" :key="index + data.product_name" class="mb-5">
          <CardShopGridView
:thumbnail="data.thumbnail" :slug="data.slug" :is-sale="data.is_sale" :is-new="data.is_new"
            :product-name="data.product_name" :price="data.price" :final-price="data.final_price" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import CardShopGridView from '../../components/merchandise/CategoryGridView.vue';
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
import { products } from '../../StaticData/shop.js';
</script>
