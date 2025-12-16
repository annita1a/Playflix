<template>
  <b-container fluid>
    <b-row>
      <b-col lg="3">
        <AccountSidebar></AccountSidebar>
      </b-col>
      <b-col lg="9">
        <div class="dashboard_content">
          <h5 class="order_details">{{ $t('streamShop.order_details') }}</h5>
          <b-row>
            <b-col lg="8">
              <div class="maintable">
                <table class="shop_table">
                  <thead>
                    <tr>
                      <th class="product-name">{{ $t('streamShop.product') }}</th>
                      <th class="product-total">{{ $t('streamKeyword.total') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="my-account-order_item">
                      <td class="product-name">
                        <a href="#">{{ $t('streamShop.product1') }} × 1 </a>
                      </td>
                      <td class="product-total">
                        <span class="amount"
                          ><bdi><span class="">$</span>25.00</bdi></span
                        >
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr class="my-account-order_item">
                      <th>{{ $t('streamShop.subtotal') }}</th>
                      <td>
                        <span class="amount"><span class="order-price">$25.00</span></span>
                      </td>
                    </tr>
                    <tr class="my-account-order_item">
                      <th>{{ $t('streamShop.payment_method') }}</th>
                      <td>{{ $t('streamShop.bank_transfer') }}</td>
                    </tr>
                    <tr>
                      <th>{{ $t('streamKeyword.total_') }}</th>
                      <td>
                        <span class="amount"><span class="order-price">$25.00</span></span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </b-col>
            <b-col lg="4" class="mt-lg-0 mt-md-4">
              <section class="bill_section">
                <h5 class="my-account-bill_address">{{ $t('streamAccount.billing_address') }}</h5>
                <address>
                  <div class="table-responsive bill_table">
                    <table class="mb-4">
                      <tbody class="my-account-bill_body pb-3">
                        <tr>
                          <td class="label-name">{{ $t('streamAccount.name') }}</td>
                          <td class="seprator"><span>:</span></td>
                          <td class="last-name">{{ $t('favouritePersonalities.ava_monroe') }}</td>
                        </tr>
                        <tr>
                          <td class="label-name">{{ $t('streamAccount.company') }}</td>
                          <td class="seprator"><span>:</span></td>
                          <td class="last-name">{{ $t('favouritePersonalities.ava_monroe') }}</td>
                        </tr>
                        <tr>
                          <td class="label-name">{{ $t('streamAccount.country') }}</td>
                          <td class="seprator"><span>:</span></td>
                          <td class="last-name">{{ $t('streamProfile.bill_to_value-4') }}</td>
                        </tr>
                        <tr>
                          <td class="label-name">{{ $t('streamShop.addresses') }}</td>
                          <td class="seprator"><span>:</span></td>
                          <td class="last-name">{{ $t('favouritePersonalities.jack_walkerc') }}</td>
                        </tr>
                        <tr>
                          <td class="label-name">{{ $t('streamAccount.email') }}</td>
                          <td class="seprator"><span>:</span></td>
                          <td class="last-name">jondoe@gmail.com</td>
                        </tr>
                        <tr>
                          <td class="label-name">{{ $t('streamAccount.phone') }}</td>
                          <td class="seprator"><span>:</span></td>
                          <td class="last-name">96465216515</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </address>
              </section>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup>
import AccountSidebar from './AccountSidebar.vue';
</script>
