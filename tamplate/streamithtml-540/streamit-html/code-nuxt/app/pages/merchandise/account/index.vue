  <template>
    <AccountLayout>
      <div class="myaccount-content text-body p-4">
        <p class="my-3">Hello <strong>{{$t('streamShop.greeting_name')}}</strong> (not <strong>{{$t('streamShop.greeting_name')}}</strong>? <nuxt-link :to="{ name: 'auth-login' }">{{
              $t('streamShop.greeting_logout')}}</nuxt-link>)</p>
        <p>{{ $t('streamShop.dashboard_intro') }} <a href="javascript:void(0)">{{ $t('streamShop.dashboard_orders') }}</a>,
          {{ $t('streamShop.dashboard_manageYour') }} <a href="javascript:void(0)">{{ $t('streamShop.dashboard_addresses') }}</a>, {{
            $t('streamShop.dashboard_and')}} <a href="javascript:void(0)">{{ $t('streamShop.dashboard_editDetails') }}</a>.
        </p>
      </div>
    </AccountLayout>
  </template>
<script setup>
import AccountLayout from './partials/AccountLayout.vue';

//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("My Account");
</script>

