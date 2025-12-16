<template>
  <div class="section-padding">
    <b-container>
      <b-row class="gy-4">
        <b-col lg="8" sm="12">
          <b-row class="row-cols-lg-2 row-cols-md-2 row-cols-1 gy-5">
            <div v-for="blog in blogs" :key="blog.id">
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
            </div>
          </b-row>
          <div class="text-center sidebar-btn mt-3">
            <CustomButton :not-btncaret-icon="true" :button-title="$t('streamButtons.load_more')"/>
          </div>
        </b-col>
        <b-col lg="4" sm="12">
          <detail-meta-list></detail-meta-list>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script setup>
import CardBlogList from '../../components/cards/CardBlogList.vue';
import { blogs } from '../../StaticData/blogs';
import DetailMetaList from '../../components/blog/DetailMetaList.vue';
import CustomButton from '../../components/CustomButton.vue';
</script>
