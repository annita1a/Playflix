<template>
  <AccountLayout>
    <div class="p-4 text-body">
      <form>
        <b-row>
          <b-col lg="6">
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.first_name') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="text" name="first-name" value="John" class="form-control" required="required" />
            </div>
          </b-col>
          <b-col lg="6">
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t('streamAccount.last_name') }}&nbsp; <span class="text-danger">*</span></label>
              <input type="text" name="last-name" value="deo" class="form-control" required="required" />
            </div>
          </b-col>
        </b-row>
        <div class="form-group mb-5">
          <label class="mb-2">{{ $t('streamAccount.display_name') }}&nbsp; <span class="text-danger">*</span></label>
          <input type="text" name="display-name" value="John" class="form-control" required="required" />
        </div>
        <em class="d-block mb-5">This will be how your name will be displayed in the account section and in reviews</em>
        <div class="form-group mb-5">
          <label class="mb-2">{{ $t('streamAccount.email_address') }}&nbsp; <span class="text-danger">*</span></label>
          <input type="email" name="email" value="johndeo@gmail.com" class="form-control" required="required" />
        </div>
        <h4 class="fw-normal mb-5">{{ $t('streamAccount.password_change') }}</h4>
        <div class="form-group mb-5">
          <label class="mb-2">{{ $t('streamAccount.current_password') }}</label>
          <input type="password" name="password" class="form-control" />
        </div>
        <div class="form-group mb-5">
          <label class="mb-2">{{ $t('streamAccount.new_password') }}</label>
          <input type="password" name="password" class="form-control" />
        </div>
        <div class="form-group mb-5">
          <label class="mb-2">{{ $t('streamAccount.confirm_password') }}</label>
          <input type="password" name="password" class="form-control" />
        </div>
        <div class="form-group">
          <a href="javascript:void(0)" class="btn btn-primary text-capitalize position-relative rounded-3">
            <span class="button-text">{{ $t('streamButtons.save_changes') }}</span>
          </a>
        </div>
      </form>
    </div>
  </AccountLayout>
</template>
<script setup>
import AccountLayout from './partials/AccountLayout.vue';
</script>
