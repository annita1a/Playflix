<template>
  <AccountLayout>
    <div class="orders-table text-body p-4">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr class="border-bottom">
              <th class="fw-bolder p-3">{{ $t('streamShop.product') }}</th>
              <th class="fw-bolder p-3">{{ $t('streamShop.download_remaining') }}</th>
              <th class="fw-bolder p-3">{{ $t('streamShop.expires') }}</th>
              <th class="fw-bolder p-3">{{ $t('streamShop.download') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ $t('streamShop.electric_toothbrush') }}</td>
              <td>∞</td>
              <td>{{ $t('streamShop.never') }}</td>
              <td>
                <a href="#" class="px-2 btn btn-primary view-btn text-white">Product Demo</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AccountLayout>
</template>
<script setup>
import AccountLayout from './partials/AccountLayout.vue';
//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("My Account");
</script>
