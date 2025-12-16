<template>
  <div class="iq-blog-box">
    <div class="iq-blog-image clearfix">
      <router-link :to="{ name: 'landing-page.blogs.detail', params: { slug: props.slug } }">
        <img :src="props.thumbnail" alt="blog" class="img-fluid w-100" loading="lazy" />
      </router-link>
    </div>
    <div class="iq-blog-detail">
      <div class="iq-blog-meta d-flex mb-3">
        <ul class="list-inline">
          <li class="border-gredient-left">
            <!-- <i class="fa fa-calendar me-1" aria-hidden="true"></i> -->
            <!-- <time datetime="2019-02-02T12:46:15+00:00" class="ms-2"> -->
            <router-link to="/blogs-date">
              <span>{{ props.date }}</span>
            </router-link>
            <!-- </time> -->
          </li>
        </ul>
        <ul class="iq-blogtag list-inline">
          <li class="border-gredient-left">
            <router-link :to="{ name: 'landing-page.blogs.category' }"> {{ props.categories }}</router-link>
          </li>
        </ul>
      </div>
      <div class="blog-title">
        <router-link :to="{ name: 'landing-page.blogs.detail', params: { slug: props.slug } }">
          <h3 class="mb-3 line-count-1 blog-heading"> {{ props.title }} </h3>
        </router-link>
      </div>
      <p>{{ $t(props.shortDescription) }}</p>
      <div class="iq-button link-button">
        <router-link
class="btn text-capitalize position-relative"
          :to="{ name: 'landing-page.blogs.detail', params: { slug: props.slug } }">
          <span class="button-text">{{ $t('streamButtons.read_more') }} <i
class="fa fa-angle-right ml-2"
              aria-hidden="true"></i></span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  thumbnail: { type: String, default: '' },
  title: { type: String, default: '' },
  slug: { type: String, default: '' },
  shortDescription: { type: String, default: '' },
  date: { type: String, default: '' },
  categories: { type: String, default: '' },
  username: { type: String, default: '' },
});
</script>
