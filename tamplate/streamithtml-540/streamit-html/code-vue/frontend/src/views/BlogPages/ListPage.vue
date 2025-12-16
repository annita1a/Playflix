<template>
  <div class="blog-listning section-padding">
    <b-container>
      <b-row>
        <b-col lg="8" sm="12">
          <article v-for="blog in blogs" :key="blog.id">
            <card-blog-list :id="blog.id" :thumbnail="blog.thumbnail" :slug="blog.slug" :blog-title="$t(blog.title)" :username="$t(blog.username)"
              :blog-text="$t(blog.description)" :blog-tag="blog.blogTag" :blog-tag-icon="blog.blogTagIcon"
              :blog-date="blog.blogDate" :blog-categories="blog.categories" :blog-tags="blog.blogTags"
              :link-button="true" :right-icon="true" :categories-list="blog.category"
              :tag-list="blog.tagList" />

          </article>
        </b-col>
        <b-col lg="4" sm="12">
          <DetailMetaList />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import DetailMetaList from '../../components/blog/DetailMetaList.vue';
import CardBlogList from '../../components/cards/CardBlogList.vue';
import { blogs } from '../../StaticData/blogs';
// console.log(blogs);
</script>