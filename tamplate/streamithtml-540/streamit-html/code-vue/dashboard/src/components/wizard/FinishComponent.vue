<template>
  <fieldset>
    <div class="form-card">
      <b-row>
        <b-col cols="7">
          <h3 class="mb-4 text-start">{{$t('formwizard.finish')}}:</h3>
        </b-col>
        <b-col cols="5">
          <h2 class="steps text-end fs-5">{{$t('formwizard.step')}} 4 - 4</h2>
        </b-col>
      </b-row>
      <br /><br />
      <h2 class="text-success text-center"><strong>{{$t('formwizard.success')}}</strong></h2>
      <br />
      <b-row class="justify-content-center">
        <b-col cols="3">
          <img src="/assets/images/pages/img-success.png" class="img-fluid" alt="fit-image" loading="lazy" />
        </b-col>
      </b-row>
      <br /><br />
      <b-row class="justify-content-center">
        <b-col cols="7" class="text-center">
          <h5 class="purple-text text-center">{{$t('formwizard.successfully_signed')}}</h5>
        </b-col>
      </b-row>
    </div>
  </fieldset>
</template>
<script>
export default {
  name: 'FinishComponent',
};
</script>
