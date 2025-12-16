<template>
  <div class="iq-blog-tag">
    <div class="blog-nav row">
      <div class="blog-prev-post col-lg-6 mb-5 mb-lg-0 border-end">
        <nuxt-link :to="{ name: 'blogs' }">
          <div class="blog-arrow font-size-14 fw-normal mb-3">
            <i class="fas fa-arrow-left"></i>
            <span class="previous fw-medium fst-italic">
              {{ $t("streamForm.previous_post") }}</span
            >
          </div>
          <span class="fw-semibold text-white"
            >{{ $t("streamForm.amy_admas") }}
          </span>
        </nuxt-link>
      </div>
      <div class="blog-next-post col-lg-6 text-start text-lg-end">
        <nuxt-link :to="{ name: 'blogs-detail' }">
          <div class="blog-arrow font-size-14 fw-normal mb-3">
            <span class="next fw-medium fst-italic">
              {{ $t("streamForm.next_post") }}</span
            >
            <i class="fas fa-arrow-right"></i>
          </div>
          <span class="fw-semibold text-white">{{
            $t("streamForm.gillian_shares")
          }}</span>
        </nuxt-link>
      </div>
    </div>
    <form>
      <h4 class="fw-500 mb-3">{{ $t("streamForm.leave_reply") }}</h4>
      <p class="mb-4">
        {{ $t("streamAccount.logged_jenny") }}
        <span class="text-primary">{{ $t("streamForm.edit_profile") }}</span>
        {{ $t("streamForm.require_fields") }} *
      </p>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <textarea
              class="form-control"
              name="comment"
              cols="5"
              rows="8"
              required
              :placeholder="$t('streamBlog.comments')"
            ></textarea>
          </div>
        </div>

        <div class="col-md-12">
          <div class="form-submit mt-4">
            <div class="iq-button">
              <button
                id="submit"
                name="submit"
                type="submit"
                class="btn text-uppercase position-relative"
                value="Submit"
              >
                <span class="button-text">{{ $t("streamForm.post_comment") }}</span>
                <i class="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup></script>
