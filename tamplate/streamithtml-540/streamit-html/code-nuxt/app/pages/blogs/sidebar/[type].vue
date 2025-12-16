<template>
  <div class="section-padding">
    <div class="container">
      <b-row>
        <b-col lg="8" sm="12" :class="order">
          <b-row class="row-cols-lg-2 row-cols-md-2 row-cols-1 gy-5">
            <div v-for="blog in blogs" :key="blog">
            <card-blog-list :id="blog.id" :thumbnail="blog.thumbnail" :slug="blog.slug" :blog-title="$t(blog.title)" :username="$t(blog.username)"
              :blog-text="$t(blog.description)" :blog-tag="blog.blogTag" :blog-tag-icon="blog.blogTagIcon"
              :blog-date="blog.blogDate" :blog-categories="blog.categories" :blog-tags="blog.blogTags"
              :link-button="true" :right-icon="true" :categories-list="blog.category"
              :tag-list="blog.tagList" />
          </div>
          </b-row>
          <div class="text-center sidebar-btn mt-3">
            <CustomButton :not-btncaret-icon="true" :button-title="$t('streamButtons.load_more')" />
          </div>
        </b-col>
        <b-col lg="4" sm="12">
          <DetailMetaList></DetailMetaList>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script setup>
import { watch, computed, ref } from "vue";

import { onUnmounted, onMounted } from "vue";
import { useStremit } from "~/store/streamit";
import { useRoute } from "vue-router";
import CardBlogList from "~/components/cards/CardBlogList.vue";
import { blogs } from "~/StaticData/blogs";
import DetailMetaList from "~/components/blog/DetailMetaList.vue";

const generateImgPath = (path) => {
  return window.location.origin + path;
};

const route = useRoute();

const type = computed(() => route.params.type);
const order = ref("");
//breadcrumb
const store = useStremit();
const checkType = () => {
  switch (type.value) {
    case "left":
      order.value = "order-1";
      store.breadcrumbSet({ show: true, name: "streamPages.blog_left_sidebar" });
      break;
    case "right":
      order.value = "";
      store.breadcrumbSet({ show: true, name: "streamPages.blog_right_sidebar" });
      break;
    default:
      break;
  }
};
watch(
  type,
  () => {
    checkType();
  },
  { deep: true }
);
onMounted(() => {
  checkType();
});
onUnmounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});
</script>
