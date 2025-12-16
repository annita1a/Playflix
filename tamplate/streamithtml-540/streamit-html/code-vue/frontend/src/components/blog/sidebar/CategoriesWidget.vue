<template>
  <div id="categories-2" class="widget widget_categories">
    <h5 class="widget-title">{{ $t('streamForm.categories') }}</h5>
    <ul class="p-0 m-0 list-unstyled">
      <li
        v-for="category in blogCategories" :key="category" class="text-capitalize"
        :class="category.borderBottom === true ? 'border-bottom-0' : ''">
        <router-link to="/blogs-category" class="position-relative">{{ $t(category.title) }}</router-link>

      </li>
    </ul>
  </div>
</template>
<script setup>

import { blogCategories } from '../../../StaticData/blogs'; 
</script>
