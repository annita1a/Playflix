<template>
  <div class="blog-pagination section-padding">
    <b-container v-if="type === 'blog-pagination'">
      <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 gy-5">
        <b-col v-for="blog in blogs" :key="blog.id" lg="4" sm="4">
        <CardBlogList 
                :id="blog.id" 
                :thumbnail="blog.thumbnail" 
                :blog-tag="$t(blog.username)"
                :slug="blog.slug" :blog-title="$t(blog.title)" 
                :blog-text="$t(blog.description)"
                :blog-date="blog.blogDate" 
                :link-button="true" 
                :right-icon="true"  
                :categories-list="blog.categoriesList"
              />
        </b-col>
      </b-row>
      <!-- Static Pagination Controls -->
      <div class="pagination justify-content-center mt-4">
        <ul id="pagination" class="pagination blog-pagination gap-2">
          <li class="page-item">
            <a class="page-link rounded-3" href="#"><i class="ph ph-caret-left pageicon-lineheight"></i></a>
          </li>
          <li class="page-item active">
            <a class="page-link d-flex justify-content-center pageicon-lineheight rounded-3" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link d-flex justify-content-center pageicon-lineheight rounded-3" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link d-flex justify-content-center pageicon-lineheight rounded-3" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link rounded-3" href="#"><i class="ph ph-caret-right pageicon-lineheight"></i></a>
          </li>
        </ul>
      </div>
    </b-container>
    <b-container v-else-if="type === 'blog-load-more'">
      <b-row class="gy-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 data-listing">
        <b-col v-for="blog in visibleBlogs" :key="blog.id" lg="4" sm="4">
        <CardBlogList 
                :id="blog.id" 
                :thumbnail="blog.thumbnail" 
                :blog-tag="$t(blog.username)"
                :slug="blog.slug" :blog-title="$t(blog.title)" 
                :blog-text="$t(blog.description)"
                :blog-date="blog.blogDate" 
                :link-button="true" 
                :right-icon="true"  
                :categories-list="blog.categoriesList"
              />
        </b-col>
      </b-row>
      <div v-if="visibleCount < blogs.length" class="text-center mt-4">
        <a
          class="btn btn-primary position-relative custom-button load-more-btn"
          @click="loadMore"
        >
          <span class="button-text">{{$t('streamButtons.load_more')}}</span>
        </a>
      </div>
    </b-container>
     <b-container v-else-if="type === 'blog-infinite-scroll'">
      <div id="content">
        <b-row class="gy-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 blog-post-container">
                  <b-col v-for="blog in visibleBlogs1" :key="blog.id" lg="4" sm="4">
        <CardBlogList 
                :id="blog.id" 
                :thumbnail="blog.thumbnail" 
                :blog-tag="$t(blog.username)"
                :slug="blog.slug" :blog-title="$t(blog.title)" 
                :blog-text="$t(blog.description)"
                :blog-date="blog.blogDate" 
                :link-button="true" 
                :right-icon="true"  
                :categories-list="blog.categoriesList"
              />
        </b-col>
        </b-row>
      </div>
      <b-row>
        <div class="scroller-status col-sm-12 text-center">
          <div v-if="isLoading" class="infinite-scroll-request loader-ellips">
            <div class="loader-wheel-container"></div>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, onMounted } from "vue";

import { blogs } from "~/StaticData/blogs";
import { useRoute } from "vue-router";
import { useStremit } from "~/store/streamit";
import CardBlogList from "~/components/cards/CardBlogList.vue";
const store = useStremit();

const visibleCount = ref(6);
const visibleBlogs = computed(() => blogs.slice(0, visibleCount.value));

function loadMore() {
  visibleCount.value += 6; // Load 6 more each time
}

// Show 6 blogs per batch, load 2 more times after initial (total 3 batches)
const batchSize = 6;
const maxLoadCount = 3; // 1 initial + 2 loads

const loadCount = ref(1);
const isLoading = ref(false);

const visibleBlogs1 = computed(() =>
  blogs.slice(0, loadCount.value * batchSize)
);

const allLoaded = computed(() => loadCount.value >= maxLoadCount || visibleBlogs1.value.length >= blogs.length);

function onScroll() {
  if (
    !isLoading.value &&
    !allLoaded.value &&
    window.innerHeight + window.scrollY >= document.getElementById('content').offsetHeight - 100
  ) {
    isLoading.value = true;
    setTimeout(() => {
      loadCount.value++;
      isLoading.value = false;
    }, 1000); // Simulate loading delay
  }
}

const route = useRoute();

const type = computed(() => route.params.type);

const changePaginationColumn = () => {
  switch (type.value) {
    case "blog-pagination":
      store.breadcrumbSet({ show: true, name: "Blog Pagination" });
      break;
    case "blog-load-more":
      store.breadcrumbSet({ show: true, name: "Blog Load More" });
      break;
    case "blog-infinite-scroll":
      store.breadcrumbSet({ show: true, name: "Blog Infinite Scroll" });
      break;

    default:
      break;
  }
};

onUnmounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
  window.removeEventListener('scroll', onScroll);
});

onMounted(() => {
  changePaginationColumn();
  window.addEventListener('scroll', onScroll);
});

watch(
  type,
  (value) => {
    changePaginationColumn();
  },
  { deep: true }
);
</script>
