<template>
  <fieldset>
    <div class="form-card text-start">
      <b-row>
        <b-col cols="7">
          <h3 class="mb-4">{{$t('formwizard.account_information')}}:</h3>
        </b-col>
        <b-col cols="5">
          <h2 class="steps text-end fs-5">{{$t('formwizard.step')}} 1 - 4</h2>
        </b-col>
      </b-row>
      <b-form-group>
        <b-row class="align-items-center">
          <b-col md="6">
            <b-form-group class="mb-3">
              <label for="input-2202" class="form-label">{{$t('authentication.account_email')}}: *</label>
              <b-form-input id="input-2202" type="email" name="email" :placeholder="$t('dashboard1.email-id')"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group class="mb-3">
              <label for="input-2202" class="form-label">{{$t('authentication.username')}}: *</label>
              <b-form-input id="input-2202" type="text" name="uname" :placeholder="$t('authentication.username')"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group class="mb-3">
              <label for="input-2202" class="form-label">{{$t('authentication.password')}}: *</label>
              <div class="input-group custom-input-group">
                <b-form-input id="input-2202" type="password" class="form-control" name="new-password" :placeholder="$t('authentication.password')" />
                <span class="input-group-text custom-input-group-text"><i class="ph ph-eye-slash"></i></span>
              </div>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group class="mb-3">
              <label for="input-2203" class="form-label">{{$t('formwizard.confirm_password')}}: *</label>
              <div class="input-group custom-input-group">
                <b-form-input id="input-2203" type="password" class="form-control" name="confirm-new-password" :placeholder="$t('formwizard.confirm_password')" />
                <span class="input-group-text custom-input-group-text"><i class="ph ph-eye-slash"></i></span>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form-group>
    </div>
    <a href="#personal" class="btn btn-primary next action-button float-end" value="Next" @click="changeTab(2)">{{$t('formwizard.next')}}</a>
  </fieldset>
</template>
<script>
export default {
  name: 'AccountComponent',
  emits: ['onClick'],
  setup(props, { emit }) {
    const changeTab = (value) => {
      emit('onClick', value);
    };
    return { props, changeTab };
  },
};
</script>
