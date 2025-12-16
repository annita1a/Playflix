<template>
  <fieldset>
    <div class="form-card text-start">
      <b-row>
        <b-col cols="7">
          <h3 class="mb-4">{{$t('formwizard.image_upload')}}  :</h3>
        </b-col>
        <b-col cols="5">
          <h2 class="steps text-end fs-5">{{$t('formwizard.step')}} 3 - 4</h2>
        </b-col>
      </b-row>
      <div class="form-group">
        <label class="form-label">{{$t('formwizard.upload_photo')}}:</label>
        <input type="file" class="form-control" name="pic" accept="image/*" />
      </div>
      <div class="form-group">
        <label class="form-label">{{$t('formwizard.upload_signature')}}:</label>
        <input type="file" class="form-control" name="pic-2" accept="image/*" />
      </div>
    </div>
    <a href="#" class="btn btn-primary next action-button float-end" value="Submit" @click="changeTab(4)">{{$t('formelement.submit')}}</a>
    <a href="#" class="btn btn-dark previous action-button-previous float-end me-1" value="Previous" @click="changeTab(2)">{{$t('formwizard.previous')}}</a>
  </fieldset>
</template>
<script>
export default {
  name: 'ImageComponent',
  emits: ['onClick'],
  setup(props, { emit }) {
    const changeTab = (value) => {
      emit('onClick', value);
    };
    return { props, changeTab };
  },
};
</script>
