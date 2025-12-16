<template>
  <div class="section-padding">
    <b-container class="pmpro">
      <section id="pmpro_order_list" class="pmpro_section">
        <h2 class="pmpro_section_title pmpro_font-x-large">
          {{$t('streamShop.order_history')}}
        </h2>
        <div class="pmpro_card">
          <div class="pmpro_card_content">
            <table class="pmpro_table pmpro_table_orders">
              <thead>
                <tr>
                  <th class="pmpro_table_order-date">{{$t('streamKeyword.date')}}</th>
                  <th class="pmpro_table_order-level">{{$t('streamKeyword.level')}}</th>
                  <th class="pmpro_table_order-amount">{{$t('streamKeyword.total')}}</th>
                  <th class="pmpro_table_order-status">{{$t('streamKeyword.status')}}</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="order in orders"
                  :id="`pmpro_table_order-${order.id}`"
                  :key="order.id"
                >
                  <th class="pmpro_table_order-date" data-title="Date">
                    <router-link :to="{ path: '/membership-invoice', query: { id: order.id } }">
                      {{ order.date }}
                    </router-link>
                  </th>
                  <td class="pmpro_table_order-level" data-title="Level">
                    {{ $t(order.level) }}
                  </td>
                  <td class="pmpro_table_order-amount" data-title="Amount">
                    {{ order.amount }}
                  </td>
                  <td class="pmpro_table_order-status" data-title="Status">
                    <span class="pmpro_tag pmpro_tag-success">{{ $t(order.status) }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div class="pmpro_actions_nav">
        <span class="pmpro_actions_nav-right">
          <router-link :to="{path: '/membership-account'}">
            {{$t('streamProfile.nav_view_membership_account')}}
          </router-link>
        </span>
      </div>
    </b-container>
  </div>
</template>

<script setup>
const orders = [
  {
    id: '51311C6265',
    date: 'February 18, 2025',
    level: 'streamPricing.basic_plan',
    amount: '$10.00',
    status: 'streamPricing.paid',
  },
  {
    id: 'A467E41A35',
    date: 'February 10, 2025',
    level: 'streamPricing.premium_plan',
    amount: '$180.00',
    status: 'streamPricing.paid',
  },
  {
    id: '3B9A37110A',
    date: 'February 6, 2025',
    level: 'streamPricing.basic_plan',
    amount: '$10.00',
    status: 'streamPricing.paid',
  },
  {
    id: '68B3C8559C',
    date: 'February 6, 2025',
    level: 'streamPricing.basic_plan',
    amount: '$10.00',
    status: 'streamPricing.paid',
  },
  {
    id: 'FB6969474C',
    date: 'January 29, 2025',
    level: 'streamPricing.standard_plan',
    amount: '$79.00',
    status: 'streamPricing.paid',
  },
  {
    id: 'B34AF5AE30',
    date: 'January 29, 2025',
    level: 'streamPricing.premium_plan',
    amount: '$180.00',
    status: 'streamPricing.paid',
  },
];
</script>