  <template>
    <AccountLayout>
      <div class="myaccount-content text-body p-4">
        <p class="my-3">{{ $t('streamShop.greeting_hello') }} <strong>{{$t('streamShop.greeting_name')}}</strong> (not <strong>{{$t('streamShop.greeting_name')}}</strong>? <router-link :to="{ name: 'landing-page.login-page' }">{{ $t('streamKeyword.log_out')}}</router-link>)</p>
        <p>{{ $t('streamShop.dashboard_intro') }} <a href="javascript:void(0)">{{ $t('streamShop.dashboard_orders') }}</a>,
          {{ $t('streamShop.dashboard_manageYour') }} <a href="javascript:void(0)">{{ $t('streamShop.dashboard_addresses') }}</a>, {{
            $t('streamShop.dashboard_and')}} <a href="javascript:void(0)">{{ $t('streamShop.dashboard_editDetails') }}</a>.
        </p>
      </div>
    </AccountLayout>
  </template>
<script setup>
import AccountLayout from './partials/AccountLayout.vue';
</script>
