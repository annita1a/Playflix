<template>
  <div class="blog-column-pages section-padding">
    <b-container>
      <b-row :class="rowClass">
        <b-col v-for="blog in selectedBlogs" :key="blog.id" :lg="column" sm="12">
          <card-blog-list
            :id="blog.id"
            :thumbnail="blog.thumbnail"
             :username="$t(blog.username)"
            :slug="blog.slug"
            :blog-title="$t(blog.title)"
            :blog-text="$t(blog.description)"
            :blog-tag="blog.tags"
            :blog-date="blog.blogDate"
            :link-button="true"
            :categories-list="blog.category"
            :right-icon="true"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import CardBlogList from '../../components/cards/CardBlogList.vue';
import { useRoute } from 'vue-router';
import { blogsGrid } from '../../StaticData/blogs';
const route = useRoute();
const column = ref(12);
const title = ref('');

const changeGridColumn = (gridType) => {
  switch (gridType) {
    case 'one-column':
      column.value = 12;
      title.value = 'streamPages.1_column_blog';
      break;
    case 'two-column':
      column.value = 6;
      title.value = 'streamPages.2_column_blog';
      break;
    case 'three-column':
      column.value = 4;
      title.value = 'streamPages.3_column_blog';
      break;
    case 'four-column':
      column.value = 3;
      title.value = 'streamPages.4_column_blog';
      break;
    default:
      column.value = 12;
      title.value = 'streamPages.1_column_blog';
  }
};

// Initial call
changeGridColumn(route.params.grid);

// Watch for route param changes
watch(
  () => route.params.grid,
  (gridType) => {
    changeGridColumn(gridType);
  }
);

// Dynamically select the correct blog grid
const selectedBlogs = computed(() => {
  if (column.value === 12) return blogsGrid;
  if (column.value === 6) return blogsGrid;
  if (column.value === 3) return blogsGrid;
  return blogsGrid; // Default fallback
});

// Dynamic row class
const rowClass = computed(() => {
  if (column.value === 12) return 'row-cols-1';
  if (column.value === 6) return 'row-cols-lg-2 row-cols-md-2';
  if (column.value === 4) return 'row-cols-xl-3 row-cols-md-3';
  return 'row-cols-lg-4 row-cols-md-4';
});
</script>
