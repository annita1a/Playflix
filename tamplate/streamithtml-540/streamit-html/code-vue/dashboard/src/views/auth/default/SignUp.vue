<template>
  <section class="sign-in-page" :style="{ 'background-image': 'url(' + generateImgPath('/assets/images/login/login.webp') + ')' }">
    <b-container>
      <b-row class="justify-content-center align-items-center height-self-center">
        <div class="align-self-center col-md-12 col-lg-7 form-padding">
          <div class="sign-user_card">
            <div class="sign-in-page-data">
              <div class="sign-in-from w-100 m-auto">
                <router-link :to="{ name: 'dashboard.home' }">
                  <img class="img-fluid logo" :src="generateImgPath('/assets/images/logo-full.png')" alt="#" />
                </router-link>
                <b-form>
                  <b-row>
                    <b-col md="6">
                      <div class="mb-3">
                        <label class="form-label">{{ $t('authentication.username') }}</label
                        ><input id="exampleInputEmail2" :placeholder="$t('authentication.enter_full_name')" autocomplete="off" required="" type="text" class="mb-0 form-control" />
                      </div>
                    </b-col>
                    <b-col md="6">
                      <div class="mb-3">
                        <label class="form-label">{{ $t('authentication.e_mail') }}</label
                        ><input id="exampleInputEmail3" :placeholder="$t('authentication.enter_email')" autocomplete="off" required="" type="email" class="mb-0 form-control" />
                      </div>
                    </b-col>
                    <b-col md="6">
                      <div class="mb-3">
                        <label class="form-label">{{ $t('authentication.first_name') }}</label
                        ><input id="exampleInputEmail4" :placeholder="$t('authentication.first_name')" autocomplete="off" required="" type="text" class="mb-0 form-control" />
                      </div>
                    </b-col>
                    <b-col md="6">
                      <div class="mb-3">
                        <label class="form-label">{{ $t('authentication.last_name') }}</label
                        ><input id="exampleInputEmail5" :placeholder="$t('authentication.last_name')" autocomplete="off" required="" type="email" class="mb-0 form-control" />
                      </div>
                    </b-col>
                    <b-col md="6">
                      <b-form-group :label="$t('authentication.password')" label-for="password" class="mb-3">
                        <b-input-group class="custom-input-group">
                          <b-form-input v-model="password" :type="showPassword ? 'text' : 'password'" :placeholder="$t('authentication.password')" autocomplete="current-password" required />
                          <b-input-group-text @click="togglePassword">
                            <i :class="showPassword ? 'ph ph-eye' : 'ph ph-eye-slash'"></i>
                          </b-input-group-text>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group label="Repeat Password" label-for="password" class="mb-3">
                        <b-input-group class="custom-input-group">
                          <b-form-input v-model="password1" :type="showPassword1 ? 'text' : 'password'" :placeholder="$t('authentication.repeat_password')" autocomplete="current-password" required />
                          <b-input-group-text @click="togglePassword1">
                            <i :class="showPassword ? 'ph ph-eye' : 'ph ph-eye-slash'"></i>
                          </b-input-group-text>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <div class="form-check my-2">
                    <input id="customRadio1" type="radio" name="customRadio" class="form-check-input" /><label class="form-check-label" for="customRadio1">{{ $t('authentication.premium') }}</label>
                  </div>
                  <div class="form-check">
                    <input id="customRadio2" type="radio" name="customRadio" class="form-check-input" /><label class="form-check-label" for="customRadio2">{{ $t('authentication.basic') }}</label>
                  </div>
                  <div class="form-check">
                    <input id="customRadio3" type="radio" name="customRadio" class="form-check-input" /><label class="form-check-label" for="customRadio3">{{ $t('authentication.free-free') }}</label>
                  </div>
                  <div class="submit mt-3">
                           <button type="button" class="btn  btn-primary w-100 custom-sign-btn">{{ $t('authentication.sign_up') }}</button>
                        </div>
                </b-form>
              </div>
            </div>
            <div class="mt-3">
              <div class="d-flex justify-content-center links">
                {{ $t('authentication.already_have_an_account') }} <router-link to="/auth/login" class="text-primary ms-2">{{ $t('authentication.sign_in') }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </b-row>
      <!-- Sign in END -->
    </b-container>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const password = ref('');
const password1 = ref('');
const showPassword = ref(false);
const showPassword1 = ref(false);

function togglePassword() {
  showPassword.value = !showPassword.value;
}

function togglePassword1() {
  showPassword1.value = !showPassword1.value;
}
</script>