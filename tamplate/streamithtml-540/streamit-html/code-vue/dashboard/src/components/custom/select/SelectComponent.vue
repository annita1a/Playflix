<template>
  <vue-select v-model="newValue" :options="options" :clear-on-select="false" :label="$t('addpage.name')" track-by="value" :placeholder="placeholder" :searchable="true" :taggable="taggable">
    <slot></slot>
  </vue-select>
</template>

<script>
import { ref, watch } from 'vue';
import VueSelect from '@vueform/multiselect';
export default {
  components: {
    VueSelect,
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Select',
    },
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    taggable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const newValue = ref(props.modelValue);
    watch(newValue, () => {
      emit('update:modelValue', newValue.value);
    });
    return {
      newValue,
    };
  },
};
</script>
