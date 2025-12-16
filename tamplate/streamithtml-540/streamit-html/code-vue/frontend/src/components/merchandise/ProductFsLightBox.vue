<template>
  <!-- Modal -->
  <div class="modal fade" tabindex="-1" aria-labelledby="viewcardmodal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content-main">
        <b-container class="p-0">
          <b-row>
            <b-col lg="6" class="px-0">
              <img class="product-img" :src="props.thumbnail" alt="img" loading="lazy" />
            </b-col>
            <div class="product-summary col-lg-6">
              <div class="product-content">
                <h3 class="product-title">{{ $t(props.productName) }}</h3>
                <div class="view-cart-close">
                  <i class="fa fa-times icon" aria-hidden="true" props-bs-dismiss="modal"></i>
                </div>
                <div class="price-detail">
                  <div class="price">
                    <h4>
                      <b><del class="text-secondary me-2">{{ props.price }}</del>{{ props.finalPrice }}</b>
                    </h4>
                  </div>
                </div>
                <p class="product-description">{{ $t('streamShop.desc1') }}</p>
                <form class="cart mb-4" method="post">
                  <div class="cart-btn-wrapper">
                    <div class="quantity">
                      <label class="screen-reader-text" :for="props.id"></label>
                      <button type="button" class="minus"><i class="fa fa-minus" aria-hidden="true"></i></button>
                      <input
:id="props.id" type="text" class="qty" name="quantity" value="1" title="Qty" placeholder=""
                        disabled />
                      <button type="button" class="plus"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    </div>

                    <router-link class="iq-button btn btn-hover ms-3" to="#">{{ 'streamButtons.add_to_cart' }} </router-link>
                  </div>
                </form>
                <div class="product-meta mt-4">
                  <span class="sku_wrapper"><span class="sku_title">{{ $t('streamShop.sku') }}</span> <span class="sku">{{
                    'streamShop.haunted_halloween' }}</span></span>
                  <span class="posted_in product-meta-list"><span>{{ $t('streamForm.categories') }}</span>
                    <router-link to="#">{{ $t('streamShop.harry_david') }}</router-link>
                    <router-link to="#">{{ $t('streamShop.warner_bros_films') }}</router-link>
                  </span>
                  <span class="tagged_as product-meta-list"><span>{{ $t('streamPages.tags') }}</span>
                    <router-link to="#">{{ $t('streamShopTag.camera') }}</router-link>
                    <router-link to="#">{{ $t('streamShopTag.production') }}</router-link>
                  </span>
                </div>
              </div>
            </div>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  slug: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  productName: { type: String, default: '' },
  isSale: { type: Boolean, default: true },
  isNew: { type: Boolean, default: true },
  tags: { type: String, default: '' },
  price: { type: String, default: '' },
  finalPrice: { type: String, default: '' },
  color: { type: String, default: '' },
});
</script>
