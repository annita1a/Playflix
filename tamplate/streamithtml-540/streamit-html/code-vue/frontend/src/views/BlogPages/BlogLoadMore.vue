<template>
  <div class="blog-pagination section-padding">
    <b-container>
      <b-row class="gy-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 data-listing">
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
      <div v-if="visibleCount < blogs.length" class="text-center mt-4">
        <a
          class="btn btn-primary position-relative custom-button load-more-btn"
          @click="loadMore"
        >
          <span class="button-text">{{$t('streamButtons.load_more')}}</span>
        </a>
      </div>
    </b-container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CardBlogList from '../../components/cards/CardBlogList.vue';
import { blogs } from '../../StaticData/blogs';

const visibleCount = ref(6); // Show 6 blogs initially

const visibleBlogs = computed(() => blogs.slice(0, visibleCount.value));

function loadMore() {
  visibleCount.value += 6; // Load 6 more each time
}
</script>