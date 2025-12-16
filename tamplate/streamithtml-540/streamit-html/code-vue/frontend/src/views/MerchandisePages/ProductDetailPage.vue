<template>
  <div class="section-padding-top product-detail">
    <b-container>
      <b-row>
        <b-col lg="6">
          <div class="product-tab-slider">
            <swiper v-if="render" class="product-tab-slider-thumb wrapper-class" :dir="rtl" :modules="modules" :slide-per-view="1" :loop="true" @swiper="setThumbsSwiper">
              <swiper-slide class="p-0">
                <img src="/assets/images/shop/product/01.webp" class="img-fluid product-detail-image" @click="toggler = !toggler" />
              </swiper-slide>
              <swiper-slide class="p-0">
                <img src="/assets/images/shop/product/02.webp" class="img-fluid product-detail-image" @click="toggler = !toggler" />
              </swiper-slide>
              <swiper-slide class="p-0">
                <img src="/assets/images/shop/product/03.webp" class="img-fluid product-detail-image" @click="toggler = !toggler" />
              </swiper-slide>
              <swiper-slide class="p-0">
                <img src="/assets/images/shop/product/04.webp" class="img-fluid product-detail-image" @click="toggler = !toggler" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="product-tab-slider-images">
            <swiper v-if="render" class="product-tab-slider-thumb mb-0 wrapper-class" :dir="rtl" :loop="true" :modules="modules" :slides-per-view="4" :thumbs="{ swiper: thumbsSwiper }" :space-between="24">
              <swiper-slide class="p-0">
                <img src="/assets/images/shop/product/01.webp" class="img-fluid" alt="product-slide-image" />
              </swiper-slide>
              <swiper-slide class="p-0">
                <img src="/assets/images/shop/product/02.webp" class="img-fluid" alt="product-slide-image" />
              </swiper-slide>
              <swiper-slide class="p-0">
                <img src="/assets/images/shop/product/03.webp" class="img-fluid" alt="product-slide-image" />
              </swiper-slide>
              <swiper-slide class="p-0">
                <img src="/assets/images/shop/product/04.webp" class="img-fluid" alt="product-slide-image" />
              </swiper-slide>
            </swiper>
          </div>
        </b-col>
        <b-col lg="6" class="mt-lg-0 mt-5 ps-lg-5">
          <h3>{{ $t('streamShop.product2') }}</h3>
          <div class="mt-2 d-flex align-items-center gap-2">
            <div>
              <span> <i class="ph-fill ph-star text-warning" aria-hidden="true"></i> </span>{{ '' }} <span> <i class="ph-fill ph-star text-warning" aria-hidden="true"></i> </span>{{ '' }} <span> <i class="ph-fill ph-star text-warning" aria-hidden="true"></i> </span>{{ '' }} <span> <i class="ph-fill ph-star text-warning" aria-hidden="true"></i> </span>{{ '' }}
              <span>
                <i class="ph-fill ph-star text-warning" aria-hidden="true"></i>
              </span>
            </div>
            <p class="text-primary mb-0">(2 Customer Reviews)</p>
          </div>
          <h4 class="product-detail-price">$13.00</h4>
          <p class="producti-detail-description">{{ $t('streamShop.desc1') }}</p>
          <div class="add-product-wrapper pb-5">
            <ul class="list-inline m-0 p-0 d-flex align-items-center gap-3 flex-wrap">
              <li>
                <div class="btn-group iq-qty-btn custom-qty-btn rounded-3" data-qty="btn" role="group">
                  <button type="button" class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0">
                    <i class="ph ph-minus fw-bold"></i></button
                  >{{ '' }}
                  <input type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input" pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2" title="Qty" />
                  {{ '' }}
                  <button type="button" class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                    <i class="ph ph-plus fw-bold"></i>
                  </button>
                </div>
              </li>
              <li class="wish-list">
                <router-link to="/wishlist" class="d-inline-block bg-secondary rounded-3 custom-wishlist-btn link-wishlist-btn">
                  <i class="ph-fill ph-heart-straight fs-5"></i>
                </router-link>
              </li>
              <li>
                <div class="iq-button">
                  <a href="#" class="btn btn-primary cart-btn position-relative rounded-3" @click="cartSwal">
                    <span class="button-text text-capitalize">{{ $t('streamButtons.add_to_cart') }}</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="product-meta-wrapper">
            <ul class="list-inline m-0 p-0">
              <li class="mb-2">
                <span class="text-white fw-medium">{{ $t('streamShop.sku') }}:</span>{{ '' }}
                <h6 class="d-inline text-body ms-2">
                  <a href="#">{{ $t('streamShop.product1') }}</a>
                </h6>
              </li>
              <li class="mb-2">
                <span class="text-white fw-medium">{{ $t('streamForm.categories') }}:</span>{{ '' }}
                <h6 class="d-inline product-category-list ms-2">
                  <a href="#">{{ $t('streamShop.uptight_birds') }}</a>
                </h6>
              </li>
              <li>
                <span class="text-white fw-medium">{{ $t('streamPages.tags') }}</span
                >{{ '' }}
                <h6 class="d-inline product-tag-list ms-2">
                  <a href="#">{{ $t('streamShopTag.costume') }}</a>
                </h6>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
      <div class="section-padding-top px-0">
        <div class="product-detail-tabs">
          <ul id="product-tab" class="list-inline nav nav-pills justify-content-center iq-custom-tab tab-bg-gredient-center flex-md-row flex-column gap-md-5 gap-3 mb-5" role="tablist">
            <li class="nav-item" role="presentation">
              <a href="javascript:void(0)" class="nav-link active bg-transparent" data-bs-toggle="tab" data-bs-target="#description" role="tab" aria-selected="true">{{ $t('streamShop.description') }}</a>
            </li>
            <li class="nav-item" role="presentation">
              <a href="javascript:void(0)" class="nav-link bg-transparent" data-bs-toggle="tab" data-bs-target="#additional-information" role="tab" aria-selected="false" tabindex="-1">{{ $t('streamShop.additional_information') }}</a>
            </li>
            <li class="nav-item" role="presentation">
              <a href="javascript:void(0)" class="nav-link bg-transparent" data-bs-toggle="tab" data-bs-target="#reviews" role="tab" aria-selected="false" tabindex="-1">{{ $t('streamShop.reviews') }}</a>
            </li>
          </ul>
          <div id="product-tab-content" class="tab-content">
            <div id="description" class="tab-pane fade show active" role="tabpanel">
              <p class="m-0">{{ $t('streamShop.product1_desc') }}</p>
            </div>
            <div id="additional-information" class="tab-pane fade" role="tabpanel">
              <h2 class="add-info-title">{{$t('streamShop.additional_information')}}</h2>
              <div class="table-responsive additional-info-table">
                <table class="table table-additional">
                  <tbody>
                    <tr>
                      <th scope="row" class="text-center">{{ $t('streamShop.color') }}</th>
                      <td>
                        <p class="mb-0">
                          <span class="text-primary fst-italic fw-semibold">Gray</span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="text-center">{{ $t('streamShop.size') }}</th>
                      <td>
                        <p class="mb-0">
                          <span class="text-primary fst-italic fw-semibold">L</span>,
                          <span class="text-primary fst-italic fw-semibold">M</span>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div id="reviews" class="tab-pane fade" role="tabpanel">
              <h4 class="mb-4">{{ $t('streamShop.reviews_believe_mask') }}</h4>
              <div class="product-review-list">
                <ul class="list-inline m-0 p-0">
                  <li class="mb-5 mb-5 reviews-bg p-4">
                    <div class="d-flex flex-sm-row flex-column align-items-start gap-4">
                      <div class="user-image flex-shrink-0">
                        <img src="/assets/images/shop/avatar.webp" alt="user-image" class="img-fluid rounded-circle" />
                      </div>
                      <div class="about-user flex-grow-1">
                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                          <p class="mb-0">{{ $t('streamAccount.jack_stark') }}</p>
                          <div class="lh-1 ratting">
                            <span>
                              <i class="ph-fill ph-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="ph-fill ph-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="ph-fill ph-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="ph-fill ph-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="ph ph-star text-warning" aria-hidden="true"></i>
                            </span>
                          </div>
                        </div>
                        <span class="text-capitalize published-date"> march 2, 2022</span>
                        <div class="mt-3 border-top">
                          <p class="mt-3 mb-0">
                            {{ $t('streamShop.product1_desc') }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="mb-3 reviews-bg p-4">
                    <div class="d-flex flex-sm-row flex-column align-items-start gap-4">
                      <div class="user-image flex-shrink-0">
                        <img src="/assets/images/shop/avatar.webp" alt="user-image" class="img-fluid rounded-circle" />
                      </div>
                      <div class="about-user flex-grow-1">
                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                          <p class="mb-0">{{ $t('streamAccount.john_deo') }}</p>
                          <div class="lh-1 ratting">
                            <span>
                              <i class="ph-fill ph-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="ph-fill ph-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="ph-fill ph-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="ph-fill ph-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="ph-fill ph-star text-warning" aria-hidden="true"></i>
                            </span>
                          </div>
                        </div>
                        <span class="text-capitalize published-date"> march 2, 2022</span>
                        <div class="mt-3 border-top">
                          <p class="mb-0 mt-3">
                            {{ $t('streamShop.product1_desc') }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-4 review-form">
                <h4>{{ $t('streamButtons.add_review') }}</h4>
                <p class="mb-4">{{ $t('streamReview.email_address_will_not') }} *</p>
                <p class="mb-2">{{ $t('streamShop.your_rating') }} *</p>
                <form class="needs-validation" novalidate="">
                  <div class="ratting">
                    <span>
                      <i class="fa fa-star text-warning" aria-hidden="true"></i>
                    </span>
                    <span>
                      <i class="fa fa-star text-warning" aria-hidden="true"></i>
                    </span>
                    <span>
                      <i class="fa fa-star text-warning" aria-hidden="true"></i>
                    </span>
                    <span>
                      <i class="fa fa-star text-warning" aria-hidden="true"></i>
                    </span>
                    <span>
                      <i class="fa fa-star text-warning" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div class="mb-5 mt-4">
                    <label class="form-label">{{ $t('streamShop.your_review') }} *</label>
                    <textarea class="form-control" required=""></textarea>
                  </div>
                  <div class="mb-5">
                    <label class="form-label">{{ $t('streamAccount.name') }}*</label>
                    <input type="text" class="form-control" required="" />
                  </div>
                  <div class="mb-5">
                    <label class="form-label">{{ $t('streamAccount.email') }}*</label>
                    <input type="email" class="form-control" required="" />
                  </div>
                  <div class="mb-5 form-check">
                    <input id="exampleCheck1" type="checkbox" class="form-check-input" required="" />
                    <label class="form-check-label" for="exampleCheck1">{{ $t('streamAccount.save_name') }}</label>
                  </div>
                  <CustomButton :button-title="$t('streamButtons.submit_review')" :not-btncaret-icon="true" :link="{ path: '/movies-detail' }" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
    <div class="related-product-block section-padding-top">
      <div class="container p-0">
        <div class="overflow-hidden">
          <ProductSection :rating-star="true" :autoplay="true" :slides-per-view="4" title="sectionTitle.related_products" container-class="containerClass"> </ProductSection>
        </div>
      </div>
    </div>
  </div>
  <FsLightbox :toggler="toggler" :sources="['/assets/images/shop/product/01.webp', '/assets/images/shop/product/02.webp', '/assets/images/shop/product/03.webp', '/assets/images/shop/product/04.webp']" />
</template>

<script setup>
import FsLightbox from 'fslightbox-vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs } from 'swiper';
import ProductSection from '../../components/sections/ProductSection.vue';
import { ref, computed, watch, defineProps, defineEmits } from 'vue';
import { useSetting } from '../../store/setting/index';
import Swal from 'sweetalert2';
import CustomButton from '../../components/CustomButton.vue';

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
const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);
const render = ref(true);
watch(
  () => rtl.value,
  () => {
    render.value = false;
    setTimeout(() => {
      render.value = true;
    }, 0);
  }
);
const toggler = ref(false);
// Swiper Modules
const modules = [Thumbs];
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
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
