<template>
    <div class="blog-listning section-padding">
    <b-container>
      <b-row>
        <b-col lg="8" sm="12">
          <article v-for="blog in blogs" :key="blog.id">
            <card-blog-list :id="blog.id" :thumbnail="blog.thumbnail" :slug="blog.slug" :blog-title="$t(blog.title)" :blog-tag="$t(blog.username)"
              :blog-text="$t(blog.description)" :blog-tag-icon="blog.blogTagIcon"
              :blog-date="blog.blogDate" :blog-categories="blog.categories" :blog-tags="blog.blogTags"
              :link-button="true" :right-icon="true" :categories-list="blog.category"
              :tag-list="blog.tagList" />
          </article>
        </b-col>
        <b-col lg="4" sm="12">
          <DetailMetaList/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
//components
import CardBlogList from "~/components/cards/CardBlogList.vue";
import DetailMetaList from "~/components/blog/DetailMetaList.vue";

//static data
import { blogs } from "~/StaticData/blogs";
console.log(blogs);

//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

// pass the i18n key instead of the literal text so $t(pageName) can resolve it
useBreadcrumb("blog_listing");
</script>
