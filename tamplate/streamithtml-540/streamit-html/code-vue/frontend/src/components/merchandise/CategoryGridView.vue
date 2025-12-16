<template>
  <div v-if="!isProductList" class="product-block">
    <span v-if="props.isSale === true" class="onsale bg-primary">{{ $t('streamShop.sale!') }}</span>
    <span v-else-if="props.isNew === true" class="onsale bg-primary">{{ $t('streamShop.new!') }}</span>
    <div class="image-wrap">
      <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }">
        <div class="product-image">
          <img :src="props.thumbnail" class="img-fluid w-100 rounded-3" alt="shopImg-{{id}}" loading="lazy" />
        </div>
      </router-link>
      <div class="buttons-holder">
        <ul class="list-unstyled m-0 p-0">
          <li>
            <a class="cursor-pointer" @click.prevent="modal = true">
              <i class="ph ph-eye fs-5" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <router-link to="#" class="add_to_wishlist wishlist-btn border-0 rounded-3" @click="wishlistSwal">
              <i class="ph ph-heart fs-5"></i>
            </router-link>
          </li>
          <li>
            <router-link to="#" class="added_to_cart cart-btn d-flex align-items-center" @click="cartSwal">
              <i class="ph ph-shopping-cart fs-5"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="product-caption">
      <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }" class="title-link text-primary">
        {{ $t(props.productName) }}
      </router-link>
      <div class="price-detail">
        <div class="price fw-medium">
          <del>{{ props.price }}</del>{{ props.finalPrice }}
        </div>
      </div>
      <div v-if="props.RatingStar" class="container-rating">
        <div class="star-rating text-primary">
          <span v-for="star in 5" :key="star">
            <i class="fa fa-star text-warning" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="product-block product-list p-0">
    <b-row>
      <b-col xl="3" md="4">
        <span v-if="props.isSale === true" class="onsale bg-primary">{{ $t('streamShop.sale!') }}</span>
        <span v-else-if="props.isNew === true" class="onsale bg-primary">{{ $t('streamShop.new!') }}</span>
        <div class="image-wrap">
          <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }">
            <div class="product-image">
              <img :src="props.thumbnail" class="img-fluid w-100 rounded-3" alt="shopImg-{{id}}" loading="lazy" />
            </div>
          </router-link>
          <div class="buttons-holder">
            <ul class="list-unstyled m-0 p-0">
              <li>
                <router-link class="cursor-pointer" to="#" data-bs-toggle="modal" data-bs-target="#woosq-popup">
                  <i class="ph ph-eye"></i>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </b-col>
      <b-col md="8">
        <div class="product-caption">
          <h4 class="product__title mb-2">
            <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }" class="title-link">
              {{ $t(props.productName) }}
            </router-link>
          </h4>
          <div class="price-detail">
            <div class="price">
              <del>{{ props.price }}</del>{{ props.finalPrice }}
            </div>
          </div>
          <div v-if="props.RatingStar" class="container-rating">
            <div class="star-rating text-primary">
              <span v-for="star in 5" :key="star">
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <ul class="iq-button-holder list-inline d-flex align-items-center flex-wrap gap-3">
            <li>
              <div>
                <router-link to="#" class="btn btn-primary cart-btn position-relative rounded-3" @click="cartSwal">
                  <div class="d-flex align-items-center gap-2">
                    <span class="button-text">{{ $t('streamButtons.add_to_cart') }}</span>
                    <i class="ph ph-shopping-cart fs-5"></i>
                  </div>
                </router-link>
              </div>
            </li>
            <li>
              <router-link
to="#"
                class="add_to_wishlist wishlist-btn d-flex align-items-center justify-content-center border-0 rounded-3"
                @click="wishlistSwal">
                <i class="ph ph-heart fs-5"></i>
              </router-link>
            </li>
          </ul>
          <p class="blog-desc line-count-2">{{ $t('streamShop.desc1') }}</p>
        </div>
      </b-col>
    </b-row>
  </div>

  <div
id="woosq-popup" class="modal fade woosq-popup" tabindex="-1" aria-modal="true" role="dialog"
    data-bs-backdrop="static" data-bs-keyboard="false" :class="{ show: modal }"
    :style="{ display: modal ? 'block' : 'none' }">
    <div class="modal-dialog modal-dialog-centered positon-relative">
      <div class="modal-content rounded-0 border-0">
        <div class="modal-body p-0">
          <button
type="button" class="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close"
            @click="modal = false"></button>
          <div class="row align-items-center">
            <div class="col-md-6">
              <img src="/assets/images/shop/product/01.webp" class="object-cover" alt="shop-img" />
            </div>
            <div class="col-md-6">
              <div class="entry-summary p-md-4">
                <h3>{{ $t('streamShop.product1') }}</h3>
                <div class="review">
                  <span v-for="star in 5" :key="star">
                    <i class="ph-fill ph-star text-warning" aria-hidden="true"></i>
                  </span>
                </div>
                <h4 class="price text-white mt-3">
                  <del class="text-body fw-normal me-1">$48.00</del>$28.00
                </h4>
                <p>{{ $t('streamShop.desc1') }}</p>
                <ul class="list-inline m-0 p-0 d-flex align-items-center gap-3 flex-wrap pt-0 pt-md-4 pb-5">
                  <li>
                    <div class="btn-group iq-qty-btn custom-qty-btn rounded-3" data-qty="btn" role="group">
                      <button type="button" class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0">
                        <i class="ph ph-minus fw-bold"></i>
                      </button>
                      <input
type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input"
                        pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2" title="Qty" />
                      <button type="button" class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                        <i class="ph ph-plus fw-bold"></i>
                      </button>
                    </div>
                  </li>
                  <li>
                    <a href="#" class="btn btn-primary position-relative cart-btn rounded-3">
                      <span class="button-text">{{ $t('streamButtons.add_to_cart') }}</span>
                    </a>
                  </li>
                </ul>
                <div class="d-flex align-items-center gap-2">
                  <span class="fw-semibold text-white">{{ $t('streamShop.sku') }} :</span>
                  <span>{{ $t('streamShop.product1') }}</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <span class="fw-semibold text-white">{{ $t('streamForm.categories') }} :</span>
                  <span class="text-primary">{{ $t('streamShop.uptight_birds') }}</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <span class="fw-semibold text-white">{{ $t('streamTag.tags') }} :</span>
                  <span class="text-primary">{{ $t('streamShop.costume') }},</span>
                  <span class="text-primary">{{ $t('streamShop.lighting') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import Swal from 'sweetalert2';

const props = defineProps({
  thumbnail: { type: String, default: '' },
  productName: { type: String, default: '' },
  isSale: { type: [String, Boolean], default: '' },
  isNew: { type: [String, Boolean], default: '' },
  price: { type: String, default: '' },
  finalPrice: { type: String, default: '' },
  isProductList: { type: Boolean, default: false },
  ratingStar: { type: Boolean, default: false },
});

const wishlistSwal = () => {
  Swal.fire({
    title: 'Added!',
    text: 'Your item has been added to the wishlist.',
    icon: 'success',
    confirmButtonText: 'Ok',
    background: '#141314',
    color: 'var(--bs-white)',
  });
};

const cartSwal = () => {
  Swal.fire({
    title: 'Added!',
    text: 'Your item has been added to the cart.',
    icon: 'success',
    confirmButtonText: 'Ok',
    background: '#141314',
    color: 'var(--bs-white)',
  });
};

const modal = ref(false);
</script>
