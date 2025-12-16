<template>
  <fieldset>
    <div class="form-card text-start">
      <b-row>
        <b-col cols="7">
          <h3 class="mb-4">{{$t('dashboard1.personal-information')}}:</h3>
        </b-col>
        <b-col cols="5">
          <h2 class="steps text-end fs-5">{{$t('formwizard.step')}} 2 - 4</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group class="mt-3 mt-md-0">
            <label for="input-2202" class="form-label">{{$t('authentication.first_name')}}: *</label>
            <b-form-input id="input-2202" type="text" class="form-control" name="fname" :placeholder="$t('authentication.first_name')" />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group class="mt-3 mt-md-0">
            <label for="input-2203" class="form-label">{{$t('authentication.last_name')}}: *</label>
            <b-form-input id="input-2203" type="text" class="form-control" name="lname" :placeholder="$t('authentication.last_name')" />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group class="mt-3">
            <label for="input-2204" class="form-label">{{$t('formwizard.contact_no')}}.: *</label>
            <b-form-input id="input-2204" type="text" class="form-control" name="phno" :placeholder="$t('formwizard.contact_no')" />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group class="mt-3 mb-3">
            <label for="input-2205" class="form-label">{{$t('formwizard.alternate_contact')}}.: *</label>
            <b-form-input id="input-2205" type="text" class="form-control" name="phno_2" :placeholder="$t('formwizard.alternate_contact')" />
          </b-form-group>
        </b-col>
      </b-row>
    </div>
    <a href="#payment" class="btn btn-primary next action-button float-end" value="Next" @click="changeTab(3)">{{$t('formwizard.next')}}</a>
    <a href="#account" class="btn btn-dark previous action-button-previous float-end me-1" value="Previous" @click="changeTab(1)">{{$t('formwizard.previous')}}</a>
  </fieldset>
</template>
<script>
export default {
  name: 'PersonalComponent',
  emits: ['onClick'],
  setup(props, { emit }) {
    const changeTab = (value) => {
      emit('onClick', value);
    };
    return { props, changeTab };
  },
};
</script>
