<template>
  <div id="categories-2" class="widget widget_categories">
    <h5 class="widget-title">{{ $t('streamForm.categories') }}</h5>
    <ul class="p-0 m-0 list-unstyled">
      <li v-for="category in props.categories" :key="category" class="text-capitalize"
        :class="category.borderBottom === true ? 'border-bottom-0' : ''">
        <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'category' } }" class="position-relative">{{
          $t(category.categoryName) }}</nuxt-link>

      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  categories: {
    type: Array,
    default: () => [
      { categoryName: 'streamBlogCategory.dramas' },
      { categoryName: 'streamBlogCategory.history' },
      { categoryName: 'streamPages.movie' },
      { categoryName: 'streamBlogCategory.trailer' },
      { categoryName: 'streamKeyword.trailers' },
      { categoryName: 'streamBlogCategory.tv_comedies' },
      { categoryName: 'streamBlogCategory.tv_rumors' },
      { categoryName: 'streamBlogCategory.tv_series', borderBottom: true },
      { categoryName: 'streamShop.uncategorized', borderBottom: true },
    ],
  },
});
</script>
