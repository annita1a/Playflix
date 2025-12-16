<template>
  <div>
    <div v-if="isProductList" class="product-block product-list p-0">
      <b-row>
        <b-col xl="3" md="4">
          <span v-if="shopSale" class="onsale bg-primary">
            {{ shopSale }}
          </span>
          <div class="image-wrap">
            <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }">
              <div class="product-image">
                <img :src="generateImgPath(`/assets/images/shop/product/${productImg}`)"
                  class="img-fluid w-100 rounded-3" :alt="`productImg-${id}`" loading="lazy" />
              </div>
            </router-link>
            <div class="buttons-holder">
              <ul class="list-unstyled m-0 p-0">
                <li>
                  <a class="cursor-pointer" data-bs-toggle="modal" data-bs-target="#woosq-popup">
                    <i class="ph-fill ph-eye"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </b-col>

        <b-col md="8">
          <div class="product-caption">
            <h4 class="product__title mb-2">
              <router-link :to="{ path: '/product-detail' }" class="title-link">{{ shopTitle }}</router-link>
            </h4>
            <div class="price-detail">
              <div class="price">
                <del>{{ shopDel }}</del>{{ shopPrice }}
              </div>
            </div>
            <!-- rating -->
            <div class="container-rating">
              <div class="star-rating text-primary">
                <FilterRating :rating="rating" />
              </div>
            </div>
            <ul class="iq-button-holder list-inline d-flex align-items-center flex-wrap gap-3">
              <li>
                <div>
                  <a href="#" class="btn btn-primary cart-btn position-relative rounded-3" @click="cartSwal">
                    <div class="d-flex align-items-center gap-2">
                      <span class="button-text">{{ $t('streamButtons.add_to_cart') }}</span>
                      <i class="ph ph-shopping-cart fs-5"></i>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <a href="#"
                  class="add_to_wishlist wishlist-btn d-flex align-items-center justify-content-center border-0 rounded-3"
                  @click="wishlistSwal">
                  <i class="ph ph-heart fs-5"></i>
                </a>
              </li>
            </ul>
            <p class="blog-desc line-count-2">{{ shopDesc }}</p>
          </div>
        </b-col>
      </b-row>
    </div>

    <div v-else class="product-block">
      <span v-if="shopSale" class="onsale bg-primary">
        {{ shopSale }}
      </span>
      <div class="image-wrap">
        <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }">
          <div class="product-image">
            <img :src="generateImgPath(`/assets/images/shop/product/${productImg}`)" class="img-fluid w-100 rounded-3"
              :alt="`productImg-${id}`" loading="lazy" />
          </div>
        </router-link>
        <div class="buttons-holder">
          <ul class="list-unstyled m-0 p-0">
            <li>
              <a class="cursor-pointer" data-bs-toggle="modal" data-bs-target="#woosq-popup">
                <i class="ph ph-eye fs-5"></i>
              </a>
            </li>
            <li>
              <a href="#" class="add_to_wishlist wishlist-btn border-0 rounded-3">
                <i class="ph ph-heart fs-5"></i>
              </a>
            </li>
            <li>
              <a href="#" class="added_to_cart cart-btn d-flex align-items-center" @click="cartSwal">
                <i class="ph ph-shopping-cart fs-5"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="product-caption">
        <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }" class="title-link text-primary">{{ shopTitle
        }}</router-link>
        <div class="price-detail">
          <div class="price fw-medium">
            <del>{{ shopDel }}</del>{{ shopPrice }}
          </div>
        </div>

        <div v-if="!ratingStars" class="container-rating">
          <div class="star-rating text-primary">
            <FilterRating :rating="rating" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="woosq-popup" class="modal fade woosq-popup" tabindex="-1" aria-modal="true" role="dialog"
    data-bs-backdrop="static" data-bs-keyboard="false" :class="{ show: modal }"
    :style="{ display: modal ? 'block' : 'none' }">
    <div class="modal-dialog modal-dialog-centered positon-relative">
      <div class="modal-content rounded-0 border-0">
        <div class="modal-body p-0">
          <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close"
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
                <h4 class="price text-white mt-3"><del class="text-body fw-normal me-1">$48.00</del>$28.00</h4>
                <p>{{ $t('streamShop.productDescription') }}</p>
                <ul class="list-inline m-0 p-0 d-flex align-items-center gap-3 flex-wrap pt-0 pt-md-4 pb-5">
                  <li>
                    <div class="btn-group iq-qty-btn custom-qty-btn rounded-3" data-qty="btn" role="group">
                      <button type="button" class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0">
                        <i class="ph ph-minus fw-bold"></i>
                      </button>
                      <input type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input"
                        pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2" title="Qty" />
                      <button type="button" class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                        <i class="ph ph-plus fw-bold"></i>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div class="iq-button">
                      <a href="#" class="btn btn-sm text-uppercase position-relative cart-btn"
                        @click="cartSwal">
                        <span class="button-text">{{ $t('streamButtons.add_to_cart') }}</span>
                        {{ '' }}
                        <i class="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </li>
                </ul>
                <div class="d-flex align-items-center gap-2">
                  <span class="fw-semibold text-white">{{ $t('streamShop.sku') }}</span>
                  <span>{{ $t('streamShop.product1') }}</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <span class="fw-semibold text-white">{{ $t('streamForm.categories') }}</span>
                  <span class="text-primary">{{ $t('streamShop.uptight_birds') }}</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <span class="fw-semibold text-white">{{ $t('streamPages.tags') }}</span>
                  <span class="text-primary">{{ $t('streamShopTag.costume') }}</span>
                  <span class="text-primary">{{ $t('streamShopTag.lighting') }}</span>
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
import { ref } from 'vue';
const modal = ref(false);
import FilterRating from '../../components/widgets/FilterRating.vue';
import { generateImgPath } from '../../StaticData/data';
import Swal from 'sweetalert2';

// Props
defineProps({
  bgShop: {
    type: String,
    default: ''
  },
  rating: {
    type: Number,
    default: 0
  },
  isProductList: {
    type: Boolean,
    default: false
  },
  shopSale: {
    type: String,
    default: '',
  },
  shopTitle: {
    type: String,
    default: '',
  },
  shopDel: {
    type: String,
    default: '',
  },
  shopPrice: {
    type: String,
    default: '',
  },
  shopDesc: {
    type: String,
    default: '',
  },
  productImg: {
    type: String,
    default: '',
  },
  id: {
    type: [String, Number],
    default: '',
  },
  ratingStars: {
    type: Boolean,
    default: false,
  },
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
</script>
