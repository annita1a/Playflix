<template>
  <div class="text-center">
    <div class="iq-button">
      <button
        type="button"
        class="btn text-uppercase position-relativ"
        @click="modal = !modal"
      >
        <span class="button-text">{{ $t("streamButtons.create_playlist") }}</span>
        <i class="fa-solid fa-play"></i>
      </button>
    </div>
  </div>
  <BModal v-model="modal" size="lg" hide-footer content-class="border-0">
    <template #header>
      <div>
        <h1 class="modal-title text-capitalize fs-5 fw-500">
          {{ $t("streamButtons.new_playlist") }}
        </h1>
        <p class="mb-0">{{ $t("streamPlaylist.information") }}</p>
      </div>
      <button type="button" class="btn-close" @click="modal = !modal"></button>
    </template>
    <form>
      <div class="form-group">
        <label class="text-white fw-500 mb-2"
          >{{ $t("streamAccount.name") }} *</label
        >
        <input type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label class="text-white fw-500 mb-2">{{
          $t("streamShop.description")
        }}</label>
        <textarea class="form-control" cols="5"></textarea>
      </div>
      <div class="form-group">
        <label class="text-white fw-500 mb-2">{{
          $t("streamPlaylist.privacy")
        }}</label>
        <select class="form-control">
          <option>{{ $t("streamPlaylist.public") }}</option>
          <option>{{ $t("streamPlaylist.private") }}</option>
        </select>
      </div>
      <div class="form-group">
        <label class="text-white fw-500">{{ $t("streamPlaylist.thumbnail") }}</label>
        <small class="d-block my-2">{{ $t("streamPlaylist.maximum_upload") }} </small>
        <input type="file" class="form-control" />
      </div>
      <div class="form-group d-flex align-items-center gap-3">
        <button
          type="button"
          class="btn btn-sm btn-light text-uppercase fw-medium"
          @click="modal = !modal"
        >
          {{ $t("streamKeyword.cancel") }}
        </button>
        <button
          type="button"
          class="btn btn-sm btn-primary text-uppercase fw-medium"
          @click="modal = !modal"
        >
          {{ $t("streamPricing.save") }}
        </button>
      </div>
    </form>
  </BModal>
</template>
<script setup>
import { ref } from "vue";
const modal = ref(false);
</script>
<style>
.modal-open .bg-dark {
  --bs-bg-opacity: 0.5;
}
</style>
