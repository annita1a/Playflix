<template>
  <b-card no-body>
    <b-card-header class="d-flex justify-content-between">
      <div class="header-title">
        <b-card-title>Default Validation</b-card-title>
      </div>
    </b-card-header>
    <b-card-body>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
      <form @submit.prevent="formSubmit">
        <b-row>
          <b-col md="6" class="mb-3">
            <label class="form-label" for="validationDefault01">First name</label>
            <input id="validationDefault01" type="text" class="form-control" required="" />
          </b-col>
          <b-col md="6" class="mb-3">
            <label class="form-label" for="validationDefault02">Last name</label>
            <input id="validationDefault02" type="text" class="form-control" required="" />
          </b-col>
          <b-col md="6" class="mb-3">
            <label for="validationCustomUsername" class="form-label">Username</label>
            <div class="form-group input-group custom-input-group">
              <span id="basic-addon1" class="input-group-text custom-input-group-text">@</span>
              <input id="validationCustomUsername" type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" required="" />
            </div>
          </b-col>
          <b-col md="6" class="mb-3">
            <label class="form-label" for="validationDefault03">City</label>
            <input id="validationDefault03" type="text" class="form-control" required="" />
          </b-col>
          <b-col md="6" class="mb-3">
            <label class="form-label" for="validationDefault04">State</label>
            <select id="validationDefault04" class="form-select" required="">
              <option selected="" disabled="" value="">Choose...</option>
              <option>...</option>
            </select>
          </b-col>
          <b-col md="6" class="mb-3">
            <label class="form-label" for="validationDefault05">Zip</label>
            <input id="validationDefault05" type="text" class="form-control" required="" />
          </b-col>
        </b-row>
        <div class="form-group">
          <div class="form-check">
            <input id="invalidCheck2" class="form-check-input" type="checkbox" value="" required="" />
            <label class="form-check-label" for="invalidCheck2"> Agree to terms and conditions </label>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </b-card-body>
  </b-card>
</template>

<script setup>
const formSubmit = () => {};
</script>
