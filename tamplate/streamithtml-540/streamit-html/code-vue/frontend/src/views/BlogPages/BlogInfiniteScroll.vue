<template>
  <div class="blog-pagination section-padding">
    <b-container>
      <div id="content">
        <b-row class="gy-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 blog-post-container">
          <b-col
            v-for="blog in visibleBlogs"
            :key="blog.id"
            lg="4"
            sm="4"
          >
            <CardBlogList 
                :id="blog.id" 
                :thumbnail="blog.thumbnail" 
                 :username="$t(blog.username)"
                :slug="blog.slug" :blog-title="$t(blog.title)" 
                :blog-text="$t(blog.description)" 
                :blog-tag="blog.tags" 
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
import { ref, computed, onMounted, onUnmounted } from 'vue';
import CardBlogList from '../../components/cards/CardBlogList.vue';
import { blogs } from '../../StaticData/blogs';
import { generateImgPath } from '../../StaticData/data';

// Show 6 blogs per batch, load 2 more times after initial (total 3 batches)
const batchSize = 6;
const maxLoadCount = 3; // 1 initial + 2 loads

const loadCount = ref(1);
const isLoading = ref(false);

const visibleBlogs = computed(() =>
  blogs.slice(0, loadCount.value * batchSize)
);

const allLoaded = computed(() => loadCount.value >= maxLoadCount || visibleBlogs.value.length >= blogs.length);

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

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>