<template>
  <div
    id="tvshow_genre_thumbnail_id_field"
    :class="[
      'form-group position-relative',
      isUploadImageDefault ? 'media-attachment-video media-option tvshow_genre_thumbnail_container' : '',
      'tvshow_genre_thumbnail_id_field'
    ]"
  >
    <label class="form-label">{{ uploadImageName }}</label>
    <span v-if="!isUploadImageDefault && isRequiredStar" class="text-danger">&nbsp;*</span>

    <!-- Hidden file input -->
    <input
      ref="fileInput"
      type="file"
      class="d-none"
      accept="image/*"
      @change="onFileChange"
    />

    <!-- Button to trigger file input -->
    <div>
      <a
        href="#"
        class="d-flex align-items-center flex-column justify-content-center gap-4 button streamit_upload_video_button tips"
        :class="{ 'edit-button': isUploadImageDefault }"
        @click.prevent="triggerFileInput"
      >
        <template v-if="preview">
          <img
            :src="preview"
            :alt="uploadImageName"
            style="min-width: 200px; min-height: 200px;"
            class="img-fluid object-cover"
          />
        </template>
        <template v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="img-icon d-block"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span class="d-block">{{$t('addpage.choose-upload')}}</span>
        </template>
      </a>
    </div>

    <!-- Preview + Remove -->
    <div class="streamit_media_preview-wrap">
      <div class="streamit_media_preview">
        <button
          v-if="preview"
          class="button streamit_remove_video_button tips position-absolute"
          @click="removeImage"
        >
          <span class="remove-media-icon">X</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  uploadImageName: {
    type: String,
    default: ''
  },
  isUploadImageDefault: {
    type: Boolean,
    default: false
  },
  isRequiredStar: {
    type: Boolean,
    default: false
  },
  defaultImage: {
    type: String,
    default: ''
  }
})

const fileInput = ref(null)
const preview = ref(null)

onMounted(() => {
  if (props.isUploadImageDefault && props.defaultImage) {
    preview.value = props.defaultImage
  }
})

function triggerFileInput() {
  fileInput.value?.click()
}

function onFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      preview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

function removeImage() {
  preview.value = null
  fileInput.value.value = null
}
</script>
<style scoped>
.streamit_upload_video_button {
    img{
        max-width: 200px;
        max-height: 200px;
        object-fit: cover;
    }
}
</style>