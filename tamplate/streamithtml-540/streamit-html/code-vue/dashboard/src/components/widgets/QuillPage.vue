<template>
  <b-col lg="12">
    <label class="form-label flex-grow-1">{{quillTitle}}</label>
    <quill-editor theme="snow" style="height: 200px" />
  </b-col>
</template>
<script>
import { QuillEditor } from '@vueup/vue-quill'
export default {
  name: 'QuillView',
  components: {
    QuillEditor
  },
  props: {
    quillTitle: { type: String, default: '' }
  },
}
</script>
