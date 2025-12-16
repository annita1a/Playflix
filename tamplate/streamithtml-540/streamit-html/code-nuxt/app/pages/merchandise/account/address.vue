<template>
  <AccountLayout>
    <div class="text-body p-4">
      <p class="my-3">{{ $t('streamShop.default_addresses') }}</p>
      <div class="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap">
        <h4 class="mb-0">{{ $t('streamShop.billing_addess') }}</h4>
        <div class="iq-button">
          <a href="#" class="btn btn-primary position-relative rounded-3" data-bs-toggle="collapse" data-bs-target="#edit-address-1" aria-expanded="false">
            <span class="button-text">{{ $t('streamAccount.edit') }}</span>
          </a>
        </div>
      </div>
      <div id="edit-address-1" class="collapse">
        <div class="text-body mb-4">
          <form>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.first_name') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="text" name="first-name" value="John" class="form-control" required="required" />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.last_name') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="text" name="last-name" value="deo" class="form-control" required="required" />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.company_name') }}</label>
              <input type="text" name="last-name" value="Iqonic Design" class="form-control" />
            </div>
            <div class="form-group mb-5 my-account-select">
              <label class="mb-2">{{ $t('streamAccount.country_region') }} &nbsp; <span class="text-danger">*</span></label>
              <div class="mb-5">
                <select ref="selectElement" class="form-control" :tabindex="tabindex">
                  <option value="">{{ $t('streamAccount.chooes_country') }}</option>
                  <option value="1">{{ $t('streamShop.country_india') }}</option>
                  <option value="2">{{ $t('streamAccount.united_kindom') }}</option>
                  <option value="3">{{ $t('streamAccount.united_states') }}</option>
                  <option value="4">{{ $t('streamAccount.australia') }}</option>
                  <option value="5">{{ $t('streamAccount.north_corea') }}</option>
                </select>
              </div>
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.street_address') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="text" name="address" :placeholder="$t('streamAccount.billing_address')" value="4517 Kentucky" class="form-control mb-3 rounded-0" required="required" />
              <input type="text" name="address" :placeholder="$t('streamAccount.apartment')" class="form-control" />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.town_city') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="text" name="city" value="Navsari" class="form-control" required="required" />
            </div>
            <div class="form-group mb-5 my-account-select">
              <label class="mb-2">{{ $t('streamAccount.state') }}&nbsp; <span class="text-danger">*</span></label>
              <div class="mb-5">
                <select ref="selectElement1" class="form-control" :tabindex="tabindex1">
                  <option value="" selected="">{{ $t('streamAccount.choose') }}</option>
                  <option value="1">{{ $t('streamAccount.gujrat') }}</option>
                  <option value="2">{{ $t('streamAccount.dehli') }}</option>
                  <option value="3">{{ $t('streamAccount.goa') }}</option>
                  <option value="4">{{ $t('streamAccount.haryana') }}</option>
                  <option value="5">{{ $t('streamAccount.ladakh') }}</option>
                </select>
              </div>
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.pin_code') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="text" name="pin code" value="396321" class="form-control" required="required" />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.phone') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="tel" name="number" value="1234567890" class="form-control" required="required" />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.email_address') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="email" name="email" value="johndeo@gmail.com" class="form-control" required="required" />
            </div>
            <div class="form-group mb-5">
              <div class="iq-button">
                <a href="" class="btn btn-primary rounded-3 position-relative">
                  <span class="button-text">Save Address</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="table-responsive">
        <table class="edit-address w-100">
          <tbody>
            <tr>
              <td class="label-name p-2">{{ $t('streamAccount.name') }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">{{ $t('streamAccount.john_deo') }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t('streamAccount.company') }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">{{ $t('streamKeyword.iqonic_design') }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t('streamAccount.country') }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">{{ $t('streamShop.country_india') }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t('streamShop.addresses') }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">4517 {{ $t('streamAccount.washington_manchester') }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t('streamAccount.email') }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">johndeo@gmail.com</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t('streamAccount.phone') }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">1234567890</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap">
        <h4 class="mb-0">{{ $t('streamShop.shipping_address') }}</h4>
        <div class="iq-button">
          <a href="#" class="btn btn-primary rounded-3 position-relative" data-bs-toggle="collapse" data-bs-target="#edit-address-2" aria-expanded="false">
            <span class="button-text">{{ $t('streamAccount.edit') }}</span>
          </a>
        </div>
      </div>
      <div id="edit-address-2" class="collapse">
        <div class="text-body mb-4">
          <form>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.first_name') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="text" name="first-name" value="John" class="form-control" required="required" />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.last_name') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="text" name="last-name" value="deo" class="form-control" required="required" />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.company_name') }}</label>
              <input type="text" name="last-name" value="Iqonic Design" class="form-control" />
            </div>
            <div class="form-group mb-5 my-account-select">
              <label class="mb-2">{{ $t('streamAccount.country_region') }} &nbsp; <span class="text-danger">*</span></label>
              <div class="mb-5">
                <select ref="selectElement3" class="form-control" :tabindex="tabindex3">
                  <option value="" selected="">{{ $t('streamAccount.choose') }}</option>
                  <option value="1">{{ $t('streamAccount.gujrat') }}</option>
                  <option value="2">{{ $t('streamAccount.dehli') }}</option>
                  <option value="3">{{ $t('streamAccount.goa') }}</option>
                  <option value="4">{{ $t('streamAccount.haryana') }}</option>
                  <option value="5">{{ $t('streamAccount.ladakh') }}</option>
                </select>
              </div>
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.street_address') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="text" name="address" :placeholder="$t('streamAccount.billing_address')" value="4517 Kentucky" class="form-control mb-3 rounded-0" required="required" />
              <input type="text" name="address" :placeholder="$t('streamAccount.apartment')" class="form-control mb-5 rounded-0" />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.town_city') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="text" name="city" value="Navsari" class="form-control" required="required" />
            </div>
            <div class="form-group mb-5 my-account-select">
              <label class="mb-2">{{ $t('streamAccount.state') }}&nbsp; <span class="text-danger">*</span></label>
              <div class="mb-5">
                <select ref="selectElement4" class="form-control" :tabindex="tabindex4">
                  <option value="" selected="">{{ $t('streamAccount.choose') }}</option>
                  <option value="1">{{ $t('streamAccount.gujrat') }}</option>
                  <option value="2">{{ $t('streamAccount.dehli') }}</option>
                  <option value="3">{{ $t('streamAccount.goa') }}</option>
                  <option value="4">{{ $t('streamAccount.haryana') }}</option>
                  <option value="5">{{ $t('streamAccount.ladakh') }}</option>
                </select>
              </div>
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.pin_code') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="text" name="pin code" value="396321" class="form-control" required="required" />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.phone') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="tel" name="number" value="1234567890" class="form-control" required="required" />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.email_address') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="email" name="email" value="johndeo@gmail.com" class="form-control" required="required" />
            </div>
            <div class="form-group mb-5">
              <div class="iq-button">
                <a href="" class="btn btn-primary rounded-3 position-relative">
                  <span class="button-text">Save Address</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="table-responsive mb-0">
        <table class="edit-address w-100">
          <tbody>
            <tr>
              <td class="label-name p-2">{{ $t('streamAccount.name') }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">{{ $t('streamAccount.john_deo') }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t('streamAccount.company') }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">{{ $t('streamKeyword.iqonic_design') }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t('streamAccount.country') }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">{{ $t('streamShop.country_india') }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t('streamShop.addresses') }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">4517 {{ $t('streamAccount.washington_manchester') }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t('streamAccount.email') }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">johndeo@gmail.com</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t('streamAccount.phone') }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">1234567890</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AccountLayout>
</template>
<script setup>
import { ref, onMounted } from 'vue';
// choise js
import Choices from 'choices.js';
import AccountLayout from './partials/AccountLayout.vue';

//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("My Account");

const selectElement = ref(null);
const tabindex = '-1'; // Tab index

const selectElement1 = ref(null);
const tabindex1 = '-1'; // Tab index

const selectElement3 = ref(null);
const tabindex3 = '-1'; // Tab index

const selectElement4 = ref(null);
const tabindex4 = '-1'; // Tab index

onMounted(() => {
  new Choices(selectElement.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
    new Choices(selectElement1.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(selectElement3.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(selectElement4.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
});
</script>
