<template>
  <div class="section-padding">
    <b-container>
      <b-row>
        <b-col lg="8" sm="12">
          <div v-for="blog in blogs" :key="blog.id" class="blog-custom-box">
            <card-blog-list :id="blog.id" :thumbnail="blog.thumbnail" :slug="blog.slug" :blog-title="$t(blog.title)" :username="$t(blog.username)"
              :blog-text="$t(blog.description)" :blog-tag="blog.blogTag" :blog-tag-icon="blog.blogTagIcon"
              :blog-date="blog.blogDate" :blog-categories="blog.categories" :blog-tags="blog.blogTags"
              :link-button="true" :right-icon="true" :categories-list="blog.category"
              :tag-list="blog.tagList" />
          </div>
        </b-col>
        <b-col lg="4" sm="12">
          <detail-meta-list></detail-meta-list>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script setup>
import { onUnmounted } from "vue";

//components
import CardBlogList from "~/components/cards/CardBlogList.vue";
import DetailMetaList from "~/components/blog/DetailMetaList.vue";

//static data
import { blogs } from "~/StaticData/blogs";

//store
import { useStremit } from "~/store/streamit";
const store = useStremit();

const generateImgPath = (path) => {
  return window.location.origin + path;
};


//route
const route = useRoute();
const params = computed(() => route.params.type);

const changeTitle = (gridType) => {
  switch (gridType) {
    case "author":
      store.breadcrumbSet({ show: true, name: "Author: Goldenmace" });
      break;
    case "date":
      store.breadcrumbSet({ show: true, name: "Day: September 23, 2022" });
      break;
    case "category":
      store.breadcrumbSet({ show: true, name: "Drama" });
      break;
    case "tags":
      store.breadcrumbSet({ show: true, name: "Comedy" });
      break;

    default:
      break;
  }
};

onUnmounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});

changeTitle(params.value);

watch(params, (value) => {
  changeTitle(value);
});
</script>
