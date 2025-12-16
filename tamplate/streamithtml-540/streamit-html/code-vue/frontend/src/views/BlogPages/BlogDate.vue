<template>
  <div class="section-padding">
    <b-container>
      <b-row>
        <b-col lg="8" sm="12">
          <div v-for="blog in blogs" :key="blog.id" class="blog-custom-box">
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
          </div>
        </b-col>
        <b-col lg="4" sm="12">
          <DetailMetaList/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import DetailMetaList from '../../components/blog/DetailMetaList.vue';
import CardBlogList from '../../components/cards/CardBlogList.vue';
import { blogs } from '../../StaticData/blogs';
</script>