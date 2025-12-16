<template>
  <b-card no-body>
    <b-card-header class="d-flex justify-content-between">
      <div class="header-title">
        <b-card-title>Tooltips</b-card-title>
      </div>
    </b-card-header>
    <b-card-body>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
      <form :class="`row g-3 needs-validation ${valid ? 'was-validated' : ''}`" novalidate="" @submit.prevent="formSubmit">
        <b-col md="6" class="position-relative">
          <label for="validationTooltip01" class="form-label">First name</label>
          <input id="validationTooltip01" type="text" class="form-control" value="Mark" required="" />
          <div class="valid-tooltip">Looks good!</div>
        </b-col>
        <b-col md="6" class="position-relative">
          <label for="validationTooltip02" class="form-label">Last name</label>
          <input id="validationTooltip02" type="text" class="form-control" value="Otto" required="" />
          <div class="valid-tooltip">Looks good!</div>
        </b-col>
        <b-col md="6" class="position-relative">
          <label for="validationTooltipUsername" class="form-label">Username</label>
          <div class="input-group custom-input-group has-validation">
            <span id="validationTooltipUsernamePrepend" class="input-group-text custom-input-group-text">@</span>
            <input id="validationTooltipUsername" type="text" class="form-control" aria-describedby="validationTooltipUsernamePrepend" required="" />
            <div class="invalid-tooltip">Please choose a unique and valid username.</div>
          </div>
        </b-col>
        <b-col md="6" class="position-relative">
          <label for="validationTooltip03" class="form-label">City</label>
          <input id="validationTooltip03" type="text" class="form-control" required="" />
          <div class="invalid-tooltip">Please provide a valid city.</div>
        </b-col>
        <b-col md="6" class="position-relative">
          <label for="validationTooltip04" class="form-label">State</label>
          <select id="validationTooltip04" class="form-select" required="">
            <option selected="" disabled="" value="">Choose...</option>
            <option>...</option>
          </select>
          <div class="invalid-tooltip">Please select a valid state.</div>
        </b-col>
        <b-col md="6" class="position-relative">
          <label for="validationTooltip05" class="form-label">Zip</label>
          <input id="validationTooltip05" type="text" class="form-control" required="" />
          <div class="invalid-tooltip">Please provide a valid zip.</div>
        </b-col>
        <div class="d-flex justify-content-end">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </b-card-body>
  </b-card>
</template>
<script>
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
export default {
  setup() {
    const v = useVuelidate();
    return {
      v,
    };
  },
  data() {
    return {
      valid: false,
      form: {
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        agree: false,
      },
    };
  },
  validations() {
    return {
      form: {
        firstName: {
          required,
        },
        lastName: {
          required,
        },
        username: {
          required,
        },
        city: {
          required,
        },
        state: {
          required,
        },
        zip: {
          required,
        },
        agree: {
          required,
        },
      },
    };
  },
  methods: {
    async formSubmit() {
      this.valid = true;
      const result = await this.v.$validate();
      if (result) {
        // this.valid = true
      }
    },
  },
};
</script>
