<template>
    <div class="section-padding">
        <b-container class="pmpro">
            <section id="pmpro_change_password" class="pmpro_section">
                <div class="pmpro_section_content">
                    <form id="change-password" class="pmpro_form" action="" method="post">
                        <div class="pmpro_card">
                            <div class="pmpro_card_content">
                                <fieldset class="pmpro_form_fieldset">
                                    <legend class="pmpro_form_legend">
                                        <h2 class="pmpro_form_heading pmpro_font-large">{{$t('streamProfile.change_password')}}</h2>
                                    </legend>
                                    <div class="pmpro_form_fields d-flex flex-column gap-3">
                                        <input
id="change_password_user_nonce" type="hidden"
                                            name="change_password_user_nonce" value="29ee27dab7"><input
type="hidden"
                                            name="_wp_http_referer"
                                            value="/product/wp/streamit/membership-account/your-profile/?view=change-password">
                                        <div class="pmpro_form_field pmpro_form_field-password_current">
                                            <div
                                                class="pmpro_form_field-password-toggle d-flex align-item-center justify-content-between">
                                                <label for="password_current" class="pmpro_form_label">
                                                    {{$t('streamProfile.label_current_password')}} <span class="pmpro_asterisk"> <span
                                                            class="text-primary">*</span></span>
                                                </label>
                                                <div
                                                    class="d-flex align-item-center justify-content-center gap-2 text-primary">
                                                    <span><i class="ph ph-eye fw-bold fs-5"></i></span>
                                                    <span class="fw-bold">{{$t('streamProfile.show_password')}}</span>
                                                </div>
                                            </div> <!-- end pmpro_form_field-password-toggle -->
                                            <input
id="password_current" type="password" name="password_current"
                                                value=""
                                                class="pmpro_form_input pmpro_form_input-password pmpro_form_input-required password_current"
                                                autoComplete="current-password" spellcheck="false" aria-required="true"
                                                tabindex="1">
                                        </div> <!-- end pmpro_form_field-password_current -->
                                        <div class="pmpro_cols-2">
                                            <div class="pmpro_form_field pmpro_form_field-pass1">
                                                <label for="pass1" class="pmpro_form_label">
                                                   {{$t('streamProfile.label_new_password')}} <span class="pmpro_asterisk"> <span
                                                            class="text-primary">*</span></span>
                                                </label>
                                                <input
id="pass1" type="password" name="pass1" value=""
                                                    class="pmpro_form_input pmpro_form_input-password pmpro_form_input-required pass1"
                                                    autoComplete="new-password" aria-required="true"
                                                    aria-describedby="pass-strength-result" tabindex="3">
                                            </div> <!-- end pmpro_form_field-pass1 -->
                                            <div class="pmpro_form_field pmpro_form_field-pass2">
                                                <label for="pass2" class="pmpro_form_label">
                                                    {{$t('streamProfile.label_confirm_password')}} <span class="pmpro_asterisk"> <span
                                                            class="text-primary">*</span></span>
                                                </label>
                                                <input
id="pass2" type="password" name="pass2" value=""
                                                    class="pmpro_form_input pmpro_form_input-password pmpro_form_input-required pass2"
                                                    autoComplete="new-password" aria-required="true" spellcheck="false"
                                                    tabindex="4">
                                            </div> <!-- end pmpro_form_field-pass2 -->
                                        </div> <!-- end pmpro_cols-2 -->
                                        <p class="pmpro_form_hint">{{$t('streamAccount.password_hint')}}
                                            ! "
                                            ? $ % ^ &amp; ).</p>
                                        <div id="pass-strength-result" class="hide-if-no-js empty" aria-live="polite">
                                            &nbsp;
                                        </div>
                                    </div> <!-- end pmpro_form_fields -->
                                </fieldset> <!-- end pmpro_form_fieldset -->
                                <div class="pmpro_form_submit">
                                    <input type="hidden" name="action" :value="$t('streamProfile.change_password')">
                                    <input type="hidden" name="user_id" value="12">
                                    <input
type="submit"
                                        class="pmpro_btn pmpro_btn-submit pmpro_btn-submit-change-password"
                                        :value="$t('streamProfile.change_password')" tabindex="5" disabled="">
                                    <input
type="button" name="cancel" class="pmpro_btn pmpro_btn-cancel"
                                        :value="$t('streamSweetalert.cancel_btn')">
                                </div> <!-- end pmpro_form_submit -->
                            </div> <!-- end pmpro_card_content -->
                        </div> <!-- end pmpro_card -->
                    </form> <!-- end change-password -->
                </div> <!-- end pmpro_section_content -->
            </section> <!-- end pmpro_change_password -->
        </b-container>
    </div>
</template>