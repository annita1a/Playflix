<template>
  <div class="section-padding">
    <!-- Shop Category Page -->
    <b-container fluid>
      <b-row>
        <b-col xl="9" sm="12">
          <div class="d-flex align-items-center justify-content-between shop-filter flex-wrap gap-3">
            <p v-if="productShop.length > 1" class="text-white mb-0">{{ $t('streamShop.showing') }}</p>
            <p v-else>{{ $t('streamShop.showing_single') }}</p>
            <div class="d-flex align-items-center">
              <div class="product-view-button rounded-3">
                <ul id="pills-tab"
                  class="nav_shop nav d-flex nav-pills mb-0 iq-product-filter d-flex gap-2 bg-transparent align-items-center list-inline"
                  role="tablist">
                  <li class="nav-item" role="presentation">
                    <button id="list-view-tab" class="nav-link btn-sm btn-icon rounded-pill p-0" data-bs-toggle="pill"
                      data-bs-target="#pills-list-view" type="button" role="tab" aria-controls="pills-list-view"
                      aria-selected="true">
                      <span class="btn-inner d-flex align-items-center">
                        <i class="ph ph-list-bullets grid-4x4 hover_effect active_effect"></i>
                      </span>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button id="grid-view-tab" class="nav-link btn-sm btn-icon rounded-pill p-0" data-bs-toggle="pill"
                      data-bs-target="#pills-grid-view" type="button" role="tab" aria-controls="pills-grid-view"
                      aria-selected="false">
                      <span class="btn-inner d-flex">
                        <i class="icon-grid-2x2 grid-4x4 hover_effect active_effect"></i>
                      </span>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button id="grid-three-view-tab" class="nav-link btn-sm btn-icon rounded-pill p-0 active show"
                      data-bs-toggle="pill" data-bs-target="#pills-grid-three-view-tab" type="button" role="tab"
                      aria-controls="pills-grid-three-view-tab" aria-selected="false">
                      <span class="btn-inner d-flex">
                        <i class="icon icon-grid-3x3 grid-4x4 hover_effect active_effect"></i>
                      </span>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button id="grid-four-view-tab" class="nav-link btn-sm btn-icon rounded-pill p-0"
                      data-bs-toggle="pill" data-bs-target="#pills-grid-four-view-tab" type="button" role="tab"
                      aria-controls="pills-grid-four-view-tab" aria-selected="false">
                      <span class="btn-inner d-flex">
                        <i class="icon icon-grid-4x4 grid-4x4"></i>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div class="iq-custom-select d-inline-block shop-select rounded-3">
                <select ref="selectElement" class="form-control select2-basic-multiple" :tabindex="tabindex">
                  <option value="season1">{{ $t('streamShop.default_sorting') }}</option>
                  <option value="season2">{{ $t('streamShop.sort_by_popularity') }}</option>
                  <option value="season3">{{ $t('streamShop.sort_by_rating') }}</option>
                  <option value="season4">{{ $t('streamShop.sort_by_latest') }}</option>
                  <option value="season5">{{ $t('streamShop.price_low_to_high') }}</option>
                  <option value="season5">{{ $t('streamShop.price_high_to_low') }}</option>
                </select>
              </div>
            </div>
          </div>

          <div id="pills-tabContent" class="tab-content">
            <!-- List View -->
            <div id="pills-list-view" class="tab-pane fade" role="tabpanel" aria-labelledby="list-view-tab">
              <b-row class="row-cols-1">
                <b-col v-for="data in listProduct" :key="data">
                  <ProductCard :is-product-list="true" :product-img="data.thumbnail" :shop-title="data.product_name"
                    :shop-sale="data.is_sale" :bg-shop="data.bgShop" :shop-del="data.shopDel" :shop-price="data.price"
                    :rating="data.rating" :shop-desc="$t(data.shopDesc)" />
                </b-col>
              </b-row>
            </div>

            <!-- Grid View -->
            <div id="pills-grid-view" class="tab-pane fade" role="tabpanel" aria-labelledby="grid-view-tab">
              <b-row class="row-col-data gy-5 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-2">
                <b-col v-for="data in productShop" :key="data">
                  <CardShopGridView :thumbnail="data.thumbnail" :is-sale="data.is_sale" :is-new="data.is_new"
                    :product-name="data.product_name" :price="data.price" :final-price="data.final_price" />
                </b-col>
              </b-row>
            </div>
            <!-- Three Grid view -->
            <div id="pills-grid-three-view-tab" class="tab-pane fade active show" role="tabpanel"
              aria-labelledby="grid-three-view-tab">
              <b-row class="row-col-data gy-5 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-3">
                <b-col v-for="data in productShop" :key="data">
                  <CardShopGridView :thumbnail="data.thumbnail" :is-sale="data.is_sale" :is-new="data.is_new"
                    :product-name="data.product_name" :price="data.price" :final-price="data.final_price" />
                </b-col>
              </b-row>
            </div>
            <!-- Four Grid View -->
            <div id="pills-grid-four-view-tab" class="tab-pane fade" role="tabpanel">
              <b-row class="row-col-data gy-5 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
                <b-col v-for="data in productShop" :key="data">
                  <CardShopGridView :thumbnail="data.thumbnail" :is-sale="data.is_sale" :is-new="data.is_new"
                    :product-name="data.product_name" :price="data.price" :final-price="data.final_price" />
                </b-col>
              </b-row>
            </div>
          </div>
          <!-- Static Pagination Controls -->
          <div class="pagination justify-content-center my-5">
            <ul id="pagination" class="pagination blog-pagination gap-2">
              <li class="page-item">
                <a class="page-link rounded-3" href="#"><i class="ph ph-arrow-left pageicon-lineheight"></i></a>
              </li>
              <li class="page-item active">
                <a class="page-link d-flex justify-content-center pageicon-lineheight rounded-3" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link d-flex justify-content-center pageicon-lineheight rounded-3" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link d-flex justify-content-center pageicon-lineheight rounded-3" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link rounded-3" href="#"><i class="ph ph-arrow-right pageicon-lineheight"></i></a>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col xl="3" sm="12">
          <div class="pe-3">
            <div class="shop-box">
              <h5 class="widget-title-sidbar">
                <span>{{ $t('streamShop.product_categories') }}</span>
              </h5>
              <div class="form-group input-group search-container-class">
                <input type="text" class="form-control border-0" :placeholder="$t('streamBlog.search')" />
                <span class="input-group-text border-0 magnify-glass-bg">
                  <i class="ph ph-magnifying-glass text-white"></i>
                </span>
              </div>
              <div class="shop-box">
                <h4 class="title-product-sidbar">{{ $t('streamShop.price_filter') }}</h4>
                <div class="form-group my-4 product-range">
                  <div ref="slider" class="range-slider"></div>
                </div>
                <div class="d-flex align-items-center my-3 price-range">
                  <small>{{ $t('streamShop.price') }}:&nbsp;</small>
                  <small>&nbsp;${{ minValue }}</small>
                  <small id="lower-value">&nbsp; - &nbsp;</small>
                  <small>${{ maxValue }}</small>
                </div>
              </div>
              <ul class="list-unstyled p-0 m-0 shop-list-checkbox">
                <li>
                  <div class="form-check d-block">
                    <input id="flexCheckDefault1" class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" for="flexCheckDefault1"> {{ $t('streamShop.uncategorized') }} </label>
                  </div>
                </li>
                <li>
                  <div class="form-check d-block">
                    <input id="flexCheckDefault2" class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" for="flexCheckDefault2"> {{ $t('streamShop.activeman') }} </label>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="form-check d-block">
                      <input id="flexCheckDefault3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="flexCheckDefault3"> {{ $t('streamShop.disney_world') }}
                      </label>
                    </div>
                    <a class="" data-bs-toggle="collapse" href="#categoriesone" role="button" aria-expanded="false"
                      aria-controls="categoriesone">
                      <i class="ph ph-caret-down align-middle"></i>
                    </a>
                  </div>
                  <div id="categoriesone" class="collapse">
                    <ul class="list-unstyled ps-2 mt-3">
                      <li>
                        <div class="form-check d-block">
                          <input id="flexCheckDefault4" class="form-check-input" type="checkbox" value="" />
                          <label class="form-check-label" for="flexCheckDefault4"> {{ $t('streamShop.fantasia') }}
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="form-check d-block">
                    <input id="flexCheckDefault5" class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" for="flexCheckDefault5"> {{ $t('streamShop.galaxy_heaven') }}
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check d-block">
                    <input id="flexCheckDefault6" class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" for="flexCheckDefault6"> {{ $t('streamShop.haunted_halloween') }}
                    </label>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="form-check d-block">
                      <input id="flexCheckDefault7" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="flexCheckDefault7"> {{ $t('streamShop.marvel_studios') }}
                      </label>
                    </div>
                    <a class="" data-bs-toggle="collapse" href="#categoriestwo" role="button" aria-expanded="false"
                      aria-controls="categoriesone">
                      <i class="ph ph-caret-down align-middle"></i>
                    </a>
                  </div>
                  <div id="categoriestwo" class="collapse">
                    <ul class="list-unstyled ps-2 mt-3">
                      <li>
                        <div class="form-check d-block">
                          <input id="flexCheckDefault8" class="form-check-input" type="checkbox" value="" />
                          <label class="form-check-label" for="flexCheckDefault8"> {{ $t('streamMovies.avengers') }}
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class="form-check d-block">
                          <input id="flexCheckDefault9" class="form-check-input" type="checkbox" value="" />
                          <label class="form-check-label" for="flexCheckDefault9"> {{ $t('streamShop.harry_david') }} </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="form-check d-block">
                      <input id="flexCheckDefault10" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="flexCheckDefault10"> {{ $t('streamShop.monster_house') }}
                      </label>
                    </div>
                    <a class="" data-bs-toggle="collapse" href="#categoriesthree" role="button" aria-expanded="false"
                      aria-controls="categoriesone">
                      <i class="ph ph-caret-down align-middle"></i>
                    </a>
                  </div>
                  <div id="categoriesthree" class="collapse">
                    <ul class="list-unstyled ps-2 mt-3">
                      <li>
                        <div class="form-check d-block">
                          <input id="flexCheckDefault11" class="form-check-input" type="checkbox" value="" />
                          <label class="form-check-label" for="flexCheckDefault11"> {{ $t('streamShop.ghost_spider') }}
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="form-check d-block">
                    <input id="flexCheckDefault12" class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" for="flexCheckDefault12"> {{ $t('streamShop.monster_house') }}
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check d-block">
                    <input id="flexCheckDefault13" class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" for="flexCheckDefault13"> {{ $t('streamShop.quid_game') }} </label>
                  </div>
                </li>
                <li>
                  <div class="form-check d-block">
                    <input id="flexCheckDefault14" class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" for="flexCheckDefault14"> {{ $t('streamShop.the_flashv') }} </label>
                  </div>
                </li>
                <li>
                  <div class="form-check d-block">
                    <input id="flexCheckDefault15" class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" for="flexCheckDefault15"> {{ $t('streamShop.the_madrid') }} </label>
                  </div>
                </li>
                <li>
                  <div class="form-check d-block">
                    <input id="flexCheckDefault16" class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" for="flexCheckDefault16"> {{ $t('streamShop.the_champion') }} </label>
                  </div>
                </li>
                <li>
                  <div class="form-check d-block">
                    <input id="flexCheckDefault17" class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" for="flexCheckDefault17"> {{ $t('streamShop.uptight_birds') }} </label>
                  </div>
                </li>
                <li>
                  <div class="form-check d-block">
                    <input id="flexCheckDefault18" class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" for="flexCheckDefault18"> {{ $t('streamShop.warner_bros_films') }} </label>
                  </div>
                </li>
              </ul>
            </div>
            <div class="shop-box">
              <h4 class="title-product-sidbar">{{ $t('streamTag.tags') }}</h4>
              <ul class="iq-blog-meta-cat-tag iq-blogtag p-0 m-0 list-unstyled gap-2 widget_tags widget-tags-product">
                <li>
                  <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tags' } }" class="position-relative">{{ $t('streamShopTag.camera') }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tags' } }" class="position-relative">{{ $t('streamShopTag.costume') }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tags' } }" class="position-relative">{{ $t('streamShopTag.lighting') }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tags' } }" class="position-relative">{{ $t('streamShopTag.production') }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tags' } }" class="position-relative">{{ $t('streamShopTag.studios') }}</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="shop-box">
              <h4 class="title-product-sidbar">{{ $t('streamShop.product_size') }}</h4>
              <ul class="shop_list_checkbox list-unstyled mb-0">
                <li>
                  <label class="shop_checkbox_label" for="l1">L</label>
                  <input type="hidden" value="L" />
                </li>
                {{
                  ''
                }}
                <li>
                  <label class="shop_checkbox_label" for="m1">M</label>
                  <input type="hidden" value="M" />
                </li>
                {{
                  ''
                }}
                <li>
                  <label class="shop_checkbox_label" for="s1">S</label>
                  <input type="hidden" value="S" />
                </li>
              </ul>
            </div>
            <div class="shop-box border-bottom-0">
              <h4 class="title-product-sidbar">{{ $t('streamShop.product') }}</h4>
              <ul v-for="data in newProduct" :key="data" class="list-unstyled m-0 p-0 shop-product">
                <ShopCategorySidebar :thumbnail="data.thumbnail" :product-name="data.product_name" :price="data.price"
                  :final-price="data.final_price" :additional-info="data.additional_info" />
              </ul>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
// choise js
import Choices from 'choices.js';
import ProductCard from '~/components/merchandise/ProductCard.vue';

import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
//components
import ShopCategorySidebar from "~/components/merchandise/ShopCategorySidebar.vue";
import CardShopGridView from "~/components/merchandise/CategoryGridView.vue";
import { newProduct, products, listProduct } from '~/StaticData/shop';
//data
//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

const { addBreadcrumb } = useBreadcrumb();
addBreadcrumb("Product");

const row = ref();
const route = useRoute();

const productShop = products.slice(0, 9);

const selectElement = ref(null);
const tabindex = '-1'; // Tab index

onMounted(() => {
  new Choices(selectElement.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  const sliderElem = slider.value;

   noUiSlider.create(sliderElem, {
    start: [minValue.value, maxValue.value],
    connect: true,
    range: {
      min: 0,
      max: 50,
    },
  });

  sliderElem.noUiSlider.on('update', (values) => {
    minValue.value = parseInt(values[0]);
    maxValue.value = parseInt(values[1]);
  });
});

const slider = ref(null);
const minValue = ref(5);
const maxValue = ref(50);

const changeGridColumn = (gridType) => {
  switch (gridType) {
    case "pills-grid-view":
      row.value = 2;
      break;
    case "pills-grid-three-four-view-tab":
      row.value = 3;
      break;
    case "pills-grid-four-view-tab":
      row.value = 4;
      break;

    default:
      break;
  }
};

changeGridColumn(route.params.grid);

watch(
  () => route.params.grid,
  (gridType) => {
    changeGridColumn(gridType);
  }
);

definePageMeta({
  layout: "merchandise",
});
</script>

<style>
.swiper.swiper-initialized.swiper-horizontal.swiper-pointer-events.p-0.m-0.mb-2.list-inline.swiper-backface-hidden {
  padding: 20px !important;
}
</style>
