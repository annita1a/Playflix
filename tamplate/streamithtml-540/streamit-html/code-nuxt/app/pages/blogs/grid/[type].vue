<template>
  <div class="blog-column-pages section-padding">
    <div :class="isFluid">
      <b-row :class="rowClass">
        <b-col v-for="blog in selectedBlogs" :key="blog.id" :lg="column" sm="12">
          <CardBlogList             
            :id="blog.id"
            :thumbnail="blog.thumbnail"
            :blog-tag="$t(blog.username)"
            :slug="blog.slug"
            :blog-title="$t(blog.title)"
            :blog-text="$t(blog.description)"
            :blog-date="blog.blogDate"
            :link-button="true"
            :categories-list="blog.category"
            :right-icon="true" />
        </b-col>
      </b-row>
      <div class="text-center sidebar-btn mt-3">
        <CustomButton link="#" :notBtncaretIcon="true" :button-title="$t('streamButtons.load_more')" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, onMounted } from "vue";

import CardBlogList from "~/components/cards/CardBlogList.vue";
import { blogs } from "~/StaticData/blogs";
import { useRoute } from "vue-router";
import { useStremit } from "~/store/streamit";
import CustomButton from "~/components/CustomButton.vue";

const generateImgPath = (path) => {
  return window.location.origin + path;
};

const store = useStremit();

const column = ref(12);

const isFluid = ref('')

const route = useRoute();

const type = computed(() => route.params.type);

const changeGridColumn = () => {
  switch (type.value) {
    case "one-column":
      column.value = 12;
      isFluid.value = 'container';
      store.breadcrumbSet({ show: true, name: "One Column Blog" });
      break;
    case "two-column":
      column.value = 6;
      isFluid.value = 'container'
      store.breadcrumbSet({ show: true, name: "Two Column Blog" });
      break;
    case "three-column":
      column.value = 4;
      isFluid.value = 'container'
      store.breadcrumbSet({ show: true, name: "Three Column Blog" });
      break;
    case "four-column":
      column.value = 3;
      isFluid.value = 'container-fluid'
      store.breadcrumbSet({ show: true, name: "Four Column Blog" });
      break;

    default:
      break;
  }
};

onUnmounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});

onMounted(() => {
  changeGridColumn();
});

watch(
  type,
  (value) => {
    changeGridColumn();
  },
  { deep: true }
);

const selectedBlogs = computed(() => {
  if (column.value === 12) return blogs;
  if (column.value === 6) return blogs;
  if (column.value === 3) return blogs;
  return blogs; // Default fallback
});

// Dynamic row class
const rowClass = computed(() => {
  if (column.value === 12) return 'row-cols-1 gy-5';
  if (column.value === 6) return 'row-cols-lg-2 row-cols-md-2 gy-5';
  if (column.value === 4) return 'row-cols-xl-3 row-cols-md-3 gy-5';
  return 'row-cols-lg-4 row-cols-md-4 gy-5';
});
</script>
