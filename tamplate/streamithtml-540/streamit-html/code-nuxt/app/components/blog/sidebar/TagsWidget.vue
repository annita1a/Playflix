<template>
  <div id="tag_cloud-2" class="widget">
    <h5 class="widget-title">{{ $t('streamTag.tags') }}</h5>
    <ul class="p-0 m-0 list-unstyled widget_tags">
      <li v-for="tag in blogTags" :key="tag" class="text-capitalize">
        <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tags' } }" class="position-relative"> {{ $t(tag.name) }} </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { blogTags } from '../../../StaticData/blogs'; 
</script>