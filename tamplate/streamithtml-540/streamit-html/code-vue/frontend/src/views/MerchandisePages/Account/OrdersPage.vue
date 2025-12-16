<template>
  <AccountLayout>
    <div class="orders-table text-body p-4">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr class="border-bottom">
              <th class="fw-medium p-3 text-white">{{ $t('streamShop.orders') }}</th>
              <th class="fw-medium p-3 text-white">{{ $t('streamKeyword.date') }}</th>
              <th class="fw-medium p-3 text-white">{{ $t('streamKeyword.status') }}</th>
              <th class="fw-medium p-3 text-white">{{ $t('streamKeyword.total') }}</th>
              <th class="fw-medium p-3 text-white">{{ $t('streamKeyword.actions') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id" class="border-bottom">
              <th class="text-primary">
                <router-link to="#" class="order-number">#{{ order.number }}</router-link>
              </th>
              <td>{{ order.date }}</td>
              <td>{{ $t(order.status) }}</td>
              <td>{{ order.total }}</td>
              <td>
                <a
href="javascript:void(0)"
                  class="btn btn-primary px-2 text-capitalize position-relative view-btn rounded-3">
                  <span class="button-text">{{$t('streamKeyword.view')}}</span>
                </a>
              </td>
              <!-- <td>
                <div class="d-flex align-items-center gap-2">
                  <div v-if="order.action === 'action_button'" class="iq-button">
                    <a href="javascript:void(0)" class="btn text-uppercase position-relative">
                      <span class="button-text">{{ $t('streamKeyword.pay') }}</span>
                      <i class="fa-solid fa-play"></i>
                    </a>
                  </div>
                  <div class="iq-button">
                    <a href="javascript:void(0)" class="btn text-uppercase position-relative">
                      <span class="button-text">{{ $t('streamKeyword.view') }}</span>
                      <i class="fa-solid fa-play"></i>
                    </a>
                  </div>
                  <div v-if="order.action === 'action_button'" class="iq-button">
                    <a href="javascript:void(0)" class="btn text-uppercase position-relative">
                      <span class="button-text">{{ $t('streamKeyword.cancel') }}</span>
                      <i class="fa-solid fa-play"></i>
                    </a>
                  </div>
                </div>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AccountLayout>
</template>
<script>
import AccountLayout from './partials/AccountLayout.vue';
export default {
  components: {
    AccountLayout,
  },
  data() {
    return {
      orders: [
        {
          id: 32604,
          number: 32604,
          date: 'October 28, 2022',
          status: 'streamKeyword.cancelled',
          total: '$215.00 For 0 Items',
        },
        {
          id: 32584,
          number: 32584,
          date: 'October 27, 2022',
          status: 'streamKeyword.on_hold',
          total: '$522.00 For 0 Items',
        },
        {
          id: 31756,
          number: 31756,
          date: 'October 19, 2022',
          status: 'streamKeyword.processing',
          total: '$243.00 For 0 Items',
        },
        {
          id: 23663,
          number: 23663,
          date: 'October 7, 2022',
          status: 'streamKeyword.completed',
          total: '$123.00 For 0 Items',
        },
        {
          id: 23612,
          number: 23612,
          date: 'October 7, 2022',
          status: 'streamKeyword.completed',
          total: '$64.00 For 0 Items',
        },
        {
          id: 19243,
          number: 19243,
          date: 'April 1, 2022',
          status: 'streamKeyword.completed',
          total: '$159.00 For 0 Items',
        },
      ],
    };
  },
  methods: {
    formatDate(dateString) {
      // Implement date formatting logic here if needed
      return new Date(dateString).toLocaleDateString();
    },
  },
};
</script>
