<template>
  <div class="section-padding">
    <b-container class="pmpro">
      <section id="pmpro_levels" class="pmpro_section">
        <div class="pmpro_section_content">
          <div id="pmpro_level_group-1" class="pmpro_card pmpro_level_group">
            <div class="pmpro_card_content">
              <table class="pmpro_table pmpro_levels_table">
                <thead>
                  <tr>
                    <th>{{$t('streamKeyword.level')}}</th>
                    <th>{{$t('streamShop.price')}}</th>
                    <th><span class="screen-reader-text">{{$t('streamTag.action')}}</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="plan in plans"
                    :id="`pmpro_level-${plan.id}`"
                    :key="plan.id"
                    class="pmpro_level"
                  >
                    <th data-title="Level">{{ $t(plan.name) }}</th>
                    <td data-title="Price">
                      <p class="pmpro_level-price" v-html="plan.price"></p>
                    </td>
                    <td>
                      <nuxt-link
                        :to="{ name: 'profile-membership-comfirmation' }"
                        :aria-label="`Select the ${plan.name} membership level`"
                        class="pmpro_btn pmpro_btn-select w-100"
                      >
                        {{$t('streamProfile.Select')}}
                      </nuxt-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </b-container>
  </div>
</template>

<script setup>
const plans = [
  {
    id: 2,
    name: 'streamPricing.basic_plan',
    price: '<strong>$10.00</strong> now.',
  },
  {
    id: 3,
    name: 'streamPricing.standard_plan',
    price: '<strong>$79.00</strong> now and then <strong>$89.00 per Month</strong>.',
  },
  {
    id: 4,
    name: 'streamPricing.premium_plan',
    price: '<strong>$180.00 every 3 Months</strong>.',
  },
];
</script>