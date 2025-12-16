<template>
  <li class="d-flex align-items-center mb-4">
    <div class="top-product-img pe-3">
      <img :src="props.thumbnail" class="img-fluid" loading="lazy" />
    </div>
    <div>
      <router-link
        :to="{ name: 'landing-page.merchandise.shop' }"
        class="fw-medium"
      >
        {{ $t(props.productName) }}
      </router-link>

      <!-- Price -->
      <div>
        <del v-if="props.price">{{ props.price }}</del>
        <span class="ms-1">{{ props.finalPrice }}</span>
      </div>

      <!-- Rating Stars -->
      <div class="rating my-1">
        <template v-for="n in 5" :key="n">
          <!-- Full Star -->
          <i
            v-if="n <= Math.floor(props.ratting)"
            class="ph-fill ph-star text-warning"
          ></i>

          <!-- Half Star -->
          <i
            v-else-if="n === Math.ceil(props.ratting) && !Number.isInteger(props.ratting)"
            class="ph-fill ph-star-half text-warning"
          ></i>

          <!-- Empty Star -->
          <i
            v-else
            class="ph ph-star text-warning"
          ></i>
        </template>
      </div>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  thumbnail: { type: String, default: '' },
  slug: { type: String, default: '' },
  productName: { type: String, default: '' },
  value: { type: String, default: '' },
  size: { type: String, default: '' },
  price: { type: String, default: '' },
  finalPrice: { type: String, default: '' },
  additionalInfo: { type: Array, default: () => [] },
  ratting: { type: Number, default: 0 },
});
</script>