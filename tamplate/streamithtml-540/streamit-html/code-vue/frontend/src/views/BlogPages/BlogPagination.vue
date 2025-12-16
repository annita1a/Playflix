<template>
  <div class="blog-pagination section-padding">
    <b-container>
      <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 gy-5">
        <b-col v-for="blog in blogs" :key="blog.id" lg="4" sm="4">
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
  </div>
</template>

<script setup>
import CardBlogList from '../../components/cards/CardBlogList.vue';
import { blogs } from '../../StaticData/blogs';
</script>
