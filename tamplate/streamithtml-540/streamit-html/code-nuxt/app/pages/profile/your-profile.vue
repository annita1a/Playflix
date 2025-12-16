<template>
  <div class="section-padding">
    <b-container class="pmpro">
      <section id="pmpro_member_profile_edit" class="pmpro_section">
        <div class="pmpro_section_content">
          <form id="member-profile-edit" class="pmpro_form" @submit.prevent="updateProfile">
            <div class="pmpro_card">
              <div class="pmpro_card_content">
                <fieldset id="pmpro_member_profile_edit-account-information" class="pmpro_form_fieldset">
                  <legend class="pmpro_form_legend">
                    <h2 class="pmpro_form_heading pmpro_font-large">{{$t('streamProfile.form_heading_account_info')}}</h2>
                  </legend>
                  <div class="pmpro_form_fields pmpro_cols-2">
                    <div class="pmpro_form_field pmpro_form_field-first_name">
                      <label for="first_name" class="pmpro_form_label">{{$t('streamAccount.first_name')}}</label>
                      <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        :v-model="$t(profile.first_name)"
                        class="pmpro_form_input pmpro_form_input-text"
                        autocomplete="given-name"
                      />
                    </div>
                    <div class="pmpro_form_field pmpro_form_field-last_name">
                      <label for="last_name" class="pmpro_form_label">{{$t('streamAccount.last_name')}}</label>
                      <input
                        id="last_name"
                        type="text"
                        name="last_name"
                        :v-model="$t(profile.last_name)"
                        class="pmpro_form_input pmpro_form_input-text"
                        autocomplete="family-name"
                      />
                    </div>
                    <div class="pmpro_form_field pmpro_form_field-display_name">
                      <label for="display_name" class="pmpro_form_label">{{$t('streamProfile.label_display_name')}}</label>
                      <input
                        id="display_name"
                        v-model="streamAccount.display_name"
                        type="text"
                        name="display_name"
                        class="pmpro_form_input pmpro_form_input-text"
                      />
                    </div>
                    <div class="pmpro_form_field pmpro_form_field-user_email">
                      <label for="user_email" class="pmpro_form_label">{{$t('streamAccount.email')}}</label>
                      <input
                        id="user_email"
                        v-model="profile.user_email"
                        type="email"
                        name="user_email"
                        class="pmpro_form_input pmpro_form_input-email"
                        autocomplete="email"
                      />
                    </div>
                  </div>
                </fieldset>
                <div class="pmpro_form_submit">
                  <button type="submit" class="pmpro_btn pmpro_btn-submit-update-profile">{{$t('streamProfile.button_update_profile')}}</button>
                  <button type="button" class="pmpro_btn pmpro_btn-cancel" @click="cancelEdit">{{$t('streamSweetalert.cancel_btn')}}</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </b-container>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const profile = reactive({
  first_name: 'streamProfile.marvin',
  last_name: 'streamShop.mckinney',
  display_name: 'streamShop.greeting_name',
  user_email: 'marvin@demo.com',
});

function updateProfile() {
  // Handle profile update logic here (API call, etc.)
   window.location.reload('Profile updated!\n' + JSON.stringify(profile, null, 2));
}

function cancelEdit() {
  // Reset or navigate away as needed
  // For now, just reload the page to reset
  window.location.reload();
}
</script>