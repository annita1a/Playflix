<template>
  <div class="checkout-page section-padding">
    <b-container>
      <div class="main-cart mb-3 mb-md-5 pb-0 pb-md-5">
        <ul
          class="cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap">
          <li class="cart-page-item">
            <span class="cart-pre-number border-radius rounded-circle me-1"> 1 </span>
            {{ '' }}
            <span class="cart-page-link">{{ $t('streamShop.shopping_cart') }} </span>
          </li>
          <li class="cart-page-item d-flex justify-content-center">
            <i class="ph ph-caret-circle-right fs-4"></i>
          </li>
          <li class="cart-page-item active">
            <span class="cart-pre-heading badge cart-pre-number bg-primary border-radius rounded-circle me-1"> 2 </span>
            {{ '' }}
            <span class="cart-page-link"> {{ $t('streamShop.checkout') }} </span>
          </li>
          <li class="cart-page-item d-flex justify-content-center">
            <i class="ph ph-caret-circle-right fs-4"></i>
          </li>
          <li class="cart-page-item">
            <span class="cart-pre-number border-radius rounded-circle me-1"> 3 </span>
            {{ '' }}
            <span class="cart-page-link"> {{ $t('streamShop.order_summary') }} </span>
          </li>
        </ul>
      </div>
      <div class="mb-5 woocommerce-info-coupon">
        <div class="d-flex align-items-center justify-content-center gap-3 flex-wrap">
          <div class="woocommerce-info">
            <span class="text-body ps-2">{{ $t('streamShop.have_a_coupon') }}</span>
            {{ '' }}
            <a href="#" data-bs-toggle="collapse" data-bs-target="#apply-coupon">{{ $t('streamShop.enter_code') }}</a>
          </div>
        </div>
        <div id="apply-coupon" class="collapse mt-5">
          <form class="checkout-coupon">
            <p class="mt-0">{{ $t('streamShop.apply_coupon_code') }}</p>
            <div class="iq-checkout-coupon">
              <input name="coupon-code" type="text" required="required" :placeholder="$t('streamShop.coupon_code')"
                class="form-control" />
              <div class="mt-4">
                  <router-link :to="{ name: 'landing-page.pricing-plan' }" class="btn btn-primary rounded-3">
                    <span class="d-flex align-items-center justify-content-center gap-2 fw-semibold">
                      {{$t('streamButtons.apply_coupon')}}
                    </span>
                  </router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <b-row>
        <b-col lg="6">
          <form action="#">
            <h3 class="mb-4">{{ $t('streamShop.billing_details') }}</h3>
            <div class="form-group">
              <b-row>
                <b-col md="6">
                  <label for="first-name" class="form-label">{{ $t('streamAccount.first_name') }} <span
                      class="text-primary">*</span></label>
                  <input name="first-name" type="text" required="required" placeholder="" class="form-control" />
                </b-col>
                <b-col md="6">
                  <label for="last-name" class="form-label">{{ $t('streamAccount.last_name') }} <span
                      class="text-primary">*</span></label>
                  <input name="last-name" type="text" required="required" placeholder="" class="form-control" />
                </b-col>
              </b-row>
            </div>
            <div class="form-group">
              <label for="company-name" class="form-label">{{$t('streamAccount.company_name')}}</label>
              <input id="company-name" name="billing-company" type="text" required="required" class="form-control">
            </div>
            <div class="form-group">
              <label for="first-name" class="form-label">{{$t('streamAccount.city_region')}} <span class="text-primary">*</span></label>
              <select ref="selectElement" class="form-control" :tabindex="tabindex">
                <option selected="">{{ $t('streamAccount.india') }}</option>
                <option value="1">{{ $t('streamAccount.united_kindom') }}</option>
                <option value="2">{{ $t('streamAccount.united_states') }}</option>
                <option value="3">{{ $t('streamAccount.australia') }}</option>
                <option value="1">{{ $t('streamAccount.north_corea') }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="street-address" class="form-label">{{$t('streamAccount.street_address')}} <span class="text-primary">*</span></label>
              <input
name="billing-address" type="text" required="required" :placeholder="$t('streamAccount.billing_address')"
                class="form-control mb-2" />
              <input
name="billing-address2" type="text" required="required" :placeholder="$t('streamAccount.apartment')"
                class="form-control" />
            </div>
            <div class="form-group">
              <label for="town-city" class="form-label">{{ $t('streamAccount.town_city') }} <span
                  class="text-primary">*</span></label>
              <input name="city" type="text" required="required" placeholder="" class="form-control" />
            </div>
            <div class="form-group">
              <label for="state" class="form-label">{{$t('streamAccount.state')}} <span class="text-primary">*</span></label>
              <select ref="selectElement1" class="form-control" :tabindex="tabindex1">
                <option selected="">{{ $t('streamAccount.colorado') }}</option>
                <option value="2">{{ $t('streamAccount.alaska') }}</option>
                <option value="1">{{ $t('streamAccount.hawai') }}</option>
                <option value="3">{{ $t('streamAccount.texas') }}</option>
                <option value="1">{{ $t('streamAccount.washington_manchester') }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="zip-code" class="form-label">{{ $t('streamAccount.pin_code') }} <span
                  class="text-primary">*</span></label>
              <input name="postcode" type="text" required="required" placeholder="" class="form-control" />
            </div>
            <div class="form-group">
              <label for="phone-group" class="form-label">{{ $t('streamAccount.phone') }} <span
                  class="text-primary">*</span></label>
              <input name="phone" type="text" required="required" placeholder="" class="form-control" />
            </div>
            <div class="form-group">
              <label for="email-address" class="form-label">{{ $t('streamAccount.email_address') }} <span
                  class="text-primary">*</span></label>
              <input
name="billing-company" type="email" required="required" placeholder=""
                class="form-control rounded-0 mb-5" />
            </div>
          </form>
        </b-col>
        <b-col lg="6">
          <h3 class="mb-4">{{ $t('streamShop.additional_information') }}</h3>
          <div class="mb-4">
            <label class="mb-2">{{ $t('streamShop.order_notes') }}</label>
            <textarea
name="your-message" :placeholder="$t('streamShop.order_notes_eg')" class="form-control mb-5"
              required=""></textarea>
          </div>
        </b-col>
      </b-row>
      <div>
        <h3>Your Order</h3>
        <div class="order_review-box">
          <h5 class="mb-3 mt-0 mt-md-2">{{ $t('streamShop.product') }}</h5>
          <div v-for="data in myCart" :key="data" class="checkout-review-order">
            <div class="table-responsive mb-0">
              <checkout-card
:thumbnail="data.thumbnail" :slug="data.slug" :product-name="data.product_name"
                :final-price="data.final_price" />
              <div class="checkout-payment mt-4">
                <div class="payment-box border-bottom mb-4 pt-4 p-3">
                  <div id="accordionPayment" class="accordion">
                    <div class="accordion-item-payment">
                      <h6 id="payment-1" class="accordion-header">
                        <div
class="accordion-button-payment" data-bs-toggle="collapse"
                          data-bs-target="#collapseOnepayment" aria-expanded="true" aria-controls="collapseOnepayment">
                          <span class="form-check">
                            <input
id="flexRadioDefault1" class="form-check-input" type="radio" name="flexRadioDefault"
                              checked="checked" />
                            <label class="form-check-label" for="flexRadioDefault1"> {{ $t('streamShop.bank_transfer') }}
                            </label>
                          </span>
                        </div>
                      </h6>
                      <b-collapse
id="collapseOnepayment" class="accordion-collapse collapse show"
                        data-bs-parent="#accordionPayment">
                        <div class="accordion-body">{{ $t('streamShop.make_direct_payment') }}</div>
                      </b-collapse>
                    </div>
                    <div class="accordion-item-payment">
                      <h6 id="payment-2" class="accordion-header">
                        <div
class="accordion-button-payment collapsed" data-bs-toggle="collapse"
                          data-bs-target="#collapseTwopayment" aria-expanded="false" aria-controls="collapseTwopayment">
                          <span class="form-check">
                            <input
id="flexRadioDefault2" class="form-check-input" type="radio"
                              name="flexRadioDefault" />
                            <label class="form-check-label" for="flexRadioDefault2"> {{ $t('streamShop.cheque_payments') }}
                            </label>
                          </span>
                        </div>
                      </h6>
                      <b-collapse
id="collapseTwopayment" class="accordion-collapse collapse"
                        aria-labelledby="payment-2" data-bs-parent="#accordionPayment">
                        <div class="accordion-body"> Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</div>
                      </b-collapse>
                    </div>
                    <div class="accordion-item-payment">
                      <h6 id="payment-3" class="accordion-header">
                        <div
class="accordion-button-payment collapsed" data-bs-toggle="collapse"
                          data-bs-target="#collapseThreepayment" aria-expanded="false"
                          aria-controls="collapseThreepayment">
                          <span class="form-check">
                            <input
id="flexRadioDefault3" class="form-check-input" type="radio"
                              name="flexRadioDefault" />
                            <label class="form-check-label" for="flexRadioDefault3"> {{ $t('streamShop.cod') }} </label>
                          </span>
                        </div>
                      </h6>
                      <b-collapse
id="collapseThreepayment" class="accordion-collapse collapse"
                        aria-labelledby="payment-3" data-bs-parent="#accordionPayment">
                        <div class="accordion-body">Pay with cash upon delivery.</div>
                      </b-collapse>
                    </div>
                  </div>
                </div>
                <p class="mb-3 p-3 pb-0">
                  {{ $t('streamShop.your_personal_data') }}
                  <router-link :to="{ name: 'landing-page.privacy-policy' }" class="final text-primary">
                    {{ $t('sectionTitle.privacy_policy') }}
                  </router-link>
                </p>
                <div class="text-end pb-3 pe-3">
                  <div class="iq-button">
                    <router-link
:to="{ name: 'landing-page.track-order' }"
                      class="btn btn-primary text-capitalize position-relative load-more-btn rounded-3">
                      <span class="button-text">{{ $t('streamShop.place_order') }}</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CheckoutCard from '../../components/merchandise/CheckoutCard.vue';
import { myCart } from '../../StaticData/shop';
import CustomButton from '../../components/CustomButton.vue';

// choise js
import Choices from 'choices.js';

const selectElement = ref(null);
const tabindex = '-1'; // Tab index

const selectElement1 = ref(null);
const tabindex1 = '-1'; // Tab index

onMounted(() => {
  new Choices(selectElement.value, {
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(selectElement1.value, {
    searchEnabled: true,
    shouldSort: true,
  });
});
</script>
