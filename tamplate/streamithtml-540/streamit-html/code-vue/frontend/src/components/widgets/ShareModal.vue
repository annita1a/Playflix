<template>
  <div id="shareModal" class="modal fade view-more-data-modal" tabindex="-1" aria-modal="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered share-modal">
      <div class="modal-content">
        <div class="modal-header pb-0">
          <h5 id="exampleModalLabelshare" class="modal-title">{{$t('streamSocial.share')}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="share-media-box">
            <div class="media-box">
              <a href="https://www.facebook.com/" target="_blank">
                <span class="image-icon">
                  <i class="icon-facebook-icon"></i>
                </span>
                <span class="titles">{{$t('streamSocial.facebook')}}</span>
              </a>
            </div>
            <div class="media-box">
              <a href="https://twitter.com/" target="_blank">
                <span class="image-icon">
                  <i class="icon-twitter-icon"></i>
                </span>
                <span class="titles text-center">{{$t('streamSocial.twitter')}}</span>
              </a>
            </div>
            <div class="media-box">
              <a href="https://www.linkedin.com" target="_blank">
                <span class="image-icon">
                  <i class="icon-instagram-icon"></i>
                </span>
                <span class="titles">{{$t('streamSocial.instagram')}}</span>
              </a>
            </div>
            <div class="media-box">
              <a href="https://api.whatsapp.com" target="_blank">
                <span class="image-icon">
                  <i class="icon-whatsapp-icon"></i>
                </span>
                <span class="titles">{{$t('streamSocial.Whatsapp')}}</span>
              </a>
            </div>
          </div>
          <div class="copy-link">
            <h6 id="basic-addon1">{{$t('streamButtons.copy_link')}}</h6>
            <div class="input-group mb-0">
              <input
                ref="copyInput"
                type="text"
                class="form-control copy-post-url"
                placeholder="Username"
                :value="shareUrl"
                aria-label="Username"
                readonly
              />
              <button class="input-group-text copy-url-btn" @click="copyToClipboard">
                <i :class="copied ? 'ph ph-check' : 'ph ph-copy-simple'"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const shareUrl = 'https://templates.iqonic.design/streamit-dist/frontend/vue/';
const copyInput = ref(null);
const copied = ref(false);

function copyToClipboard() {
  if (copyInput.value) {
    navigator.clipboard
      .writeText(copyInput.value.value)
      .then(() => {
        copied.value = true;
        setTimeout(() => (copied.value = false), 1000);
      })
      .catch((err) => console.error('Failed to copy: ', err));
  }
}
</script>