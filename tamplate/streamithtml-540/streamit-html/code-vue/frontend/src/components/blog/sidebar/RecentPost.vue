<template>
  <div id="recent-posts-2" class="widget iq-widget-blog">
    <h5 class="widget-title position-relative">{{ $t('streamBlog.recent_post') }}</h5>
    <ul class="list-inline p-0 m-0">
      <li v-for="(post, index) in posts" :key="index" class="d-flex align-items-center gap-4">
        <div class="img-holder">
          <router-link :to="post.dateLink">
            <b-img :src="post.imageSrc" alt="img" class="img-fluid h-100 w-100 object-cover"></b-img>
          </router-link>
        </div>
        <div class="post-blog">
          <router-link :to="{ name: 'landing-page.blogs.detail', params: { slug: 'the-most-anticipated-movies' } }">
            <h6 class="post-title">{{ $t(post.title) }}</h6>
          </router-link>
          <ul class="list-inline mb-2">
            <li class="list-inline-item border-0 mb-0 pb-0">
              <router-link :to="post.dateLink" class="blog-data"> <i class="far fa-calendar-alt me-1" aria-hidden="true"></i>{{ post.date }} </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const posts = ref([
  {
    title: 'blogs.blog1',
    imageSrc: generateImgPath('/assets/images/blog/01.webp'),
    date: 'September 23, 2022',
    dateLink: '#',
  },
  {
    title: 'blogs.amy_admas',
    imageSrc: generateImgPath('/assets/images/blog/blog2.webp'),
    date: 'September 23, 2022',
    dateLink: '#',
  },
]);
</script>
