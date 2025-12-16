<template>
  <section class="section-padding">
    <b-container class="pmpro">
      <section id="pmpro_account-profile" class="pmpro_section">
        <h2 class="pmpro_section_title pmpro_font-x-large">{{$t('streamAccount.my_account')}}</h2>
        <div class="pmpro_card">
          <h3 class="pmpro_card_title pmpro_font-large pmpro_heading-with-avatar"><img alt="img" src="/assets/images/user/userblank.jpg" class="avatar avatar-48 photo" height="48" width="48" /> {{$t('streamProfile.welcome')}}, {{$t('streamShop.greeting_name')}}</h3>
          <div class="pmpro_card_content">
            <ul class="pmpro_list pmpro_list-plain">
              <li class="pmpro_list_item"><strong>{{$t('streamAccount.username')}}:</strong> {{$t('streamProfile.marvin')}}</li>
              <li class="pmpro_list_item"><strong>{{$t('streamAccount.email')}}:</strong> marvin@demo.com</li>
            </ul>
          </div>
          <!-- end pmpro_card_content -->
          <div class="pmpro_card_actions">
            <span class="pmpro_card_action"> <router-link id="pmpro_actionlink-profile" :to="{ path: '/your-profile' }">{{$t('streamButtons.editProfile')}}</router-link></span
            ><span class="pmpro_card_action_separator"></span><span class="pmpro_card_action"> <router-link id="pmpro_actionlink-change-password" :to="{ path: '/change-password' }">{{$t('streamProfile.change_password')}}</router-link></span
            ><span class="pmpro_card_action_separator"></span><span class="pmpro_card_action"> <router-link id="pmpro_actionlink-logout" :to="{ path: '/login' }">{{$t('streamKeyword.log_out')}}</router-link></span>
          </div>
          <!-- end pmpro_card_actions -->
        </div>
        <!-- end pmpro_card -->
      </section>
      <!-- end pmpro_account-profile -->

      <section id="pmpro_account-membership" class="pmpro_section">
        <h2 class="pmpro_section_title pmpro_font-x-large">{{$t('streamProfile.my_memberships')}}</h2>
        <div class="pmpro_section_content">
          <div id="pmpro_account-membership-none" class="pmpro_card">
            <div class="pmpro_card_content">
              <p>{{$t('streamProfile.you_do_not_have_membership')}} <router-link :to="{ path: '/membership-level' }">{{$t('streamProfile.choose_membership_level')}}</router-link></p>
            </div>
            <!-- end pmpro_card_content -->
          </div>
          <!-- end pmpro_card -->
        </div>
        <!-- end pmpro_section_content -->
      </section>
      <!-- end pmpro_account-membership -->

      <section id="pmpro_account-orders" class="pmpro_section">
        <h2 class="pmpro_section_title pmpro_font-x-large">{{$t('streamShop.order_history')}}</h2>
        <div class="pmpro_card">
          <div class="pmpro_card_content">
            <table class="pmpro_table pmpro_table_orders">
              <thead>
                <tr>
                  <th class="pmpro_table_order-date">{{$t('streamKeyword.date')}}</th>
                  <th class="pmpro_table_order-level">{{$t('streamKeyword.level')}}</th>
                  <th class="pmpro_table_order-total">{{$t('streamKeyword.total')}}</th>
                  <th class="pmpro_table_order-status">{{$t('streamKeyword.status')}}</th>
                </tr>
              </thead>
              <tbody>
                <tr id="pmpro_table_order-51311C6265">
                  <th class="pmpro_table_order-date" data-title="Date">
                    <router-link :to="{ path: '/membership-invoice' }"> February 18, 2025</router-link>
                  </th>
                  <td class="pmpro_table_order-level" data-title="Level">{{$t('streamPricing.basic_plan')}}</td>
                  <td class="pmpro_table_order-amount" data-title="Amount">$10.00</td>
                  <td class="pmpro_table_order-status" data-title="Status">
                    <span class="pmpro_tag pmpro_tag-success">{{$t('streamPricing.paid')}}</span>
                  </td>
                </tr>
                <tr id="pmpro_table_order-A467E41A35">
                  <th class="pmpro_table_order-date" data-title="Date">
                    <router-link :to="{ path: '/membership-invoice' }"> February 10, 2025</router-link>
                  </th>
                  <td class="pmpro_table_order-level" data-title="Level">{{$t('streamPricing.premium_plan')}}</td>
                  <td class="pmpro_table_order-amount" data-title="Amount">$180.00</td>
                  <td class="pmpro_table_order-status" data-title="Status">
                    <span class="pmpro_tag pmpro_tag-success">{{$t('streamPricing.paid')}}</span>
                  </td>
                </tr>
                <tr id="pmpro_table_order-3B9A37110A">
                  <th class="pmpro_table_order-date" data-title="Date">
                    <router-link :to="{ path: '/membership-invoice' }"> February 6, 2025</router-link>
                  </th>
                  <td class="pmpro_table_order-level" data-title="Level">{{$t('streamPricing.basic_plan')}}</td>
                  <td class="pmpro_table_order-amount" data-title="Amount">$10.00</td>
                  <td class="pmpro_table_order-status" data-title="Status">
                    <span class="pmpro_tag pmpro_tag-success">{{$t('streamPricing.paid')}}</span>
                  </td>
                </tr>
                <tr id="pmpro_table_order-68B3C8559C">
                  <th class="pmpro_table_order-date" data-title="Date">
                    <router-link :to="{ path: '/membership-invoice' }"> February 6, 2025</router-link>
                  </th>
                  <td class="pmpro_table_order-level" data-title="Level">{{$t('streamPricing.basic_plan')}}</td>
                  <td class="pmpro_table_order-amount" data-title="Amount">$10.00</td>
                  <td class="pmpro_table_order-status" data-title="Status">
                    <span class="pmpro_tag pmpro_tag-success">{{$t('streamPricing.paid')}}</span>
                  </td>
                </tr>
                <tr id="pmpro_table_order-FB6969474C">
                  <th class="pmpro_table_order-date" data-title="Date">
                    <router-link :to="{ path: '/membership-invoice' }"> January 29, 2025</router-link>
                  </th>
                  <td class="pmpro_table_order-level" data-title="Level">{{$t('streamPricing.standard_plan')}}</td>
                  <td class="pmpro_table_order-amount" data-title="Amount">$79.00</td>
                  <td class="pmpro_table_order-status" data-title="Status">
                    <span class="pmpro_tag pmpro_tag-success">{{$t('streamPricing.paid')}}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- end pmpro_card_content -->
        </div>
        <!-- end pmpro_card -->
      </section>
      <!-- end pmpro_account-orders -->
      <div class="pmpro_actions_nav">
        <span class="pmpro_actions_nav-left">
          <router-link :to="{ path: '/membership-orders' }">{{$t('streamProfile.nav_view_all_orders')}}</router-link>
        </span>
      </div>
    </b-container>
  </section>
</template>
