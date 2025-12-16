<template>
  <b-container fluid>
    <div class="page-header">
      <ul class="page-items">
        <li class="page_item active">
          <span class="pre-heading"> 1 </span>
          <span class="page_link">{{ $t('streamShop.shopping_cart') }}</span>
        </li>
        <li class="page_item">
          <span class="pre-heading"> 2 </span>
          <span class="page_link">{{ $t('streamShop.checkout') }}</span>
        </li>
        <li class="page_item">
          <span class="pre-heading"> 3 </span>
          <span class="page_link">{{ $t('streamShop.order_summary') }}</span>
        </li>
      </ul>
    </div>
    <div class="order">
      <p class="thank">{{ $t('streamShop.thankyou') }}</p>
      <ul class="details list-inline">
        <li class="detail">{{ $t('streamShop.order_number') }}<strong>15823</strong></li>
        <li class="detail">{{ $t('streamKeyword.date') }}<strong>June 22, 2022</strong></li>
        <li class="detail">{{ $t('streamAccount.email') }}<strong>jondoe@gmail.com</strong></li>
        <li class="detail">{{ $t('streamKeyword.total') }}<strong>$25.00</strong></li>
        <li class="detail">
          {{ $t('streamShop.payment_method') }}:<strong>{{ $t('streamShop.bank_transfer') }}</strong>
        </li>
      </ul>
    </div>
    <h5 class="order_details">{{ $t('streamShop.order_details') }}</h5>
    <b-row>
      <b-col lg="8">
        <section class="maintable">
          <table class="shop_table">
            <thead>
              <tr>
                <th class="product-name">{{ $t('streamShop.product') }}</th>
                <th class="product-total">{{ $t('streamKeyword.total') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="order_item">
                <td class="product-name">
                  <a href="#">{{ $t('streamShop.product1') }} &nbsp;</a><strong class="product-quantity">×&nbsp;1</strong>
                </td>
                <td class="product-total">
                  <span class="amount"
                    ><bdi><span class="">$</span>25.00</bdi></span
                  >
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="order_item">
                <th scope="row bill-total">{{ $t('streamShop.subtotal') }}</th>
                <td>
                  <span class="amount"><span class="">$</span>25.00</span>
                </td>
              </tr>
              <tr class="order_item">
                <th scope="row bill-total">{{ $t('streamShop.payment_method') }}:</th>
                <td>{{ $t('streamShop.bank_transfer') }}</td>
              </tr>
              <tr>
                <th scope="row bill-total">{{ $t('streamKeyword.total_') }}</th>
                <td>
                  <span class="amount"><span class="">$</span>25.00</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </section>
      </b-col>
      <b-col lg="4">
        <section class="bill_section">
          <h5 class="bill_address">{{ $t('streamAccount.billing_address') }}</h5>
          <address>
            <div class="table-responsive bill_table">
              <table>
                <tbody class="bill_body">
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
  </b-container>
</template>
<script setup></script>
