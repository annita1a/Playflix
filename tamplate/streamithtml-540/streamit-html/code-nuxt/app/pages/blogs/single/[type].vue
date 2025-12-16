<template>
  <div class="section-padding blog-section">
    <b-container>
      <b-row>
        <b-col cols="12">
          <div v-if="type !== 'single'" class="iq-blogs-meta">
            <ul class="iq-blogtag list-inline d-flex align-items-center flex-wrap mb-0">
              <li class=""><i class="ph ph-user" aria-hidden="true"></i><nuxt-link
                  :to="{ name: 'blogs-filter-type', params: { type: 'author' } }" class="">
                  Jenny</nuxt-link></li>
              <li class=""><i class="icon icon-calendar-2" aria-hidden="true"></i><nuxt-link
                  :to="{ name: 'blogs-filter-type', params: { type: 'date' } }">
                  January 30, 2019</nuxt-link></li>
              <li class=""><nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tag' } }"
                  class="">DRAMAS</nuxt-link>,</li>
              <li class=""><nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tag' } }" class="">
                  Historical</nuxt-link>,</li>
              <li class="">
                <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tag' } }"
                  class="">{{ $t('streamShop.uncategorized') }}</nuxt-link>
              </li>
            </ul>
          </div>
          <h3 v-if="type !== 'single'" class="mb-3">
            {{ $t(blogTitle) }}
          </h3>
          <div class="iq-blog-detail">
            <template v-if="type === 'single'">
              <a class="blog-image d-block overflow-hidden">
                <img class="img-fluid w-100 mb-5" src="/assets/images/blog/blog1.webp" loading="lazy" alt="" />
              </a>
            </template>

            <template v-else-if="type === 'audio'">
              <div>
                <iframe height="200" class="w-100" frameborder="no"
                  src="https://w.soundcloud.com/player/?visual=false&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F36701924&amp;show_artwork=true&amp;maxheight=750&amp;maxwidth=720&amp;auto_play=false&amp;buying=true&amp;liking=true&amp;download=true&amp;sharing=true&amp;show_comments=true&amp;show_playcount=true&amp;show_user=true&amp;color"></iframe>
              </div>
            </template>

            <template v-else-if="type === 'video'">
              <div>
                <iframe class="w-100" height="490" src="https://www.youtube.com/embed/QCGq1epI9pQ"
                  title="Streamit Intro | ULTIMATE OTT Theme &amp; App for WordPress | Iqonic Design"
                  style="border: none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </div>
            </template>

            <template v-else-if="type === 'gallery'">
              <b-row class="row-cols-xl-3 row-cols-md-2 row-cols-1">
                <b-col v-for="(item, index) in galleries" :key="index" :class="item.class">
                  <a href="javascript:void(0);" role="button" @click="togglerGallery(index + 1)">
                    <img :src="item.img" :alt="index"  loading="lazy"/>
                  </a>
                </b-col>
              </b-row>
              <FsLightbox :toggler="toggler" :sources="gallerySources" :slide="slide" />
            </template>

            <template v-if="type === 'link'">
              <div class="mb-4">
                <nuxt-link to="https://iqonic.design/">
                  <i class="ph ph-link text-primary quote-icon"></i>
                </nuxt-link>
              </div>
            </template>
            <template v-if="type === 'quote'">
              <blockquote class="block-quote py-5 mb-3">
                <b-row class="align-items-start">
                  <b-col lg="1" md="2">
                    <div class="blockquote-icon">
                      <i class="ph-fill ph-quotes text-primary" aria-hidden="true"></i>
                    </div>
                  </b-col>
                  <b-col lg="11" md="10">
                    <div class="p-2">
                      <p class="mb-0 blog-gallery-desc">{{ $t('blogs.simon_doe_has_his_tongue') }}</p>
                      <cite><a href="#">{{ $t('blogs.steve_kowalsky') }}</a></cite>
                    </div>
                  </b-col>
                </b-row>

              </blockquote>
            </template>

            <div class="iq-blog-box border-0">
              <div v-if="type === 'single'" class="iq-blogs-meta">
                <ul class="iq-blogtag list-inline d-flex align-items-center flex-wrap mb-0">
                  <li class=""><i class="ph ph-user" aria-hidden="true"></i><nuxt-link
                      :to="{ name: 'blogs-filter-type', params: { type: 'author' } }" class="">
                      Jenny</nuxt-link></li>
                  <li class=""><i class="icon icon-calendar-2" aria-hidden="true"></i><nuxt-link
                      :to="{ name: 'blogs-filter-type', params: { type: 'date' } }">
                      January 30,
                      2019</nuxt-link></li>
                  <li class=""><nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tag' } }"
                      class="">DRAMAS</nuxt-link>,
                  </li>
                  <li class=""><nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tag' } }" class="">
                      Historical</nuxt-link>,</li>
                  <li class="">
                    <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tag' } }"
                      class="">{{ $t('streamShop.uncategorized') }}</nuxt-link>
                  </li>
                </ul>
              </div>
              <h3 v-if="type === 'single'" class="mb-3">
                {{ $t(blogTitle) }}
              </h3>
              <h6 class="text-white my-3">{{ $t('streamBlog.blog2_desc') }}</h6>
              <p class="mb-0 blog-gallery-desc">{{ $t('streamBlog.blog3_desc') }}</p>
              <p class="blog-gallery-desc">{{ $t('streamBlog.blog4_desc') }}</p>

              <blockquote class="block-quote text-white py-2">
                <p class="mb-0 blog-gallery-desc">{{ $t('streamBlog.quotes') }}</p>
                <cite><a href="#">{{ $t('streamBlog.quotes_author') }}</a></cite>
              </blockquote>
              <p class="mb-0 blog-gallery-desc">{{ $t('streamBlog.blog7_desc') }}</p>
              <p class="mb-0 blog-gallery-desc">{{ $t('streamBlog.blog8_desc') }}
              </p>
              <p class="blog-gallery-desc">{{ $t('streamBlog.blog7_desc') }}</p>

              <ul class="iq-blogtag p-0 m-0 list-unstyled gap-2 widget_tags widget-tags-product">
                <li>
                  <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tags' } }"
                    class="position-relative">{{ $t('streamTag.comedy') }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tags' } }"
                    class="position-relative">{{ $t('streamTag.drama') }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tags' } }"
                    class="position-relative">{{ $t('streamPages.movie') }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tags' } }"
                    class="position-relative">{{ $t('streamKeyword.trailers') }}</nuxt-link>
                </li>
              </ul>

              <div class="iq-blog-tag">
                <div class="blog-nav row mt-3 mt-md-0 mb-5 mb-lg-0">
                  <div class="blog-prev-post col-6">
                    <nuxt-link :to="{ name: 'blogs', params: { type: 'single' } }">
                      <span class="fw-semibold d-none d-md-block">{{ $t('streamForm.amy_admas') }} </span>
                      <div class="blog-arrow mt-3 d-flex align-items-center">
                        <i class="ph ph-arrow-left"></i>
                        <span class="previous fw-semibold fst-italic"> {{ $t('streamForm.previous_post') }}</span>
                      </div>
                    </nuxt-link>
                  </div>
                  <div class="blog-next-post col-6 text-end">
                    <nuxt-link :to="{ name: 'blogs', params: { type: 'audio' } }">
                      <span class="fw-semibold d-none d-md-block">{{ $t('streamForm.gillian_shares') }}</span>
                      <div class="blog-arrow mt-3 d-flex align-items-center justify-content-end">
                        <span class="next fw-semibold fst-italic"> {{ $t('streamForm.next_post') }}</span>
                        <i class="ph ph-arrow-right"></i>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
                <h3 class="comments-title mb-4 pb-2">
                  <span>0 {{ $t('streamBlog.comments') }}</span>
                </h3>
                <h3 class="mb-4">{{ $t('streamForm.leave_reply') }}</h3>
                <form>
                  <p class="mb-5">{{ $t('streamAccount.logged_jenny') }} <nuxt-link
                      :to="{ name: 'merchandise-account' }">{{ $t('streamForm.edit_profile') }}</nuxt-link>{{ ' ' }} {{ $t('streamShop.required_fields') }} *</p>
                  <div class="pt-3">
                    <b-row>
                      <b-col md="12">
                        <textarea class="form-control rounded-3" name="comment" cols="5" rows="8" required=""
                          :placeholder="$t('streamBlog.comment') + '*'"></textarea>
                      </b-col>
                    </b-row>

                    <b-col md="12">
                      <div class="form-submit mt-5">
                        <button id="submit" name="submit" type="submit"
                          class="btn btn-primary position-relative rounded-3" value="Submit">
                          <span class="button-text">{{ $t('streamForm.post_comment') }}</span>
                        </button>
                      </div>
                    </b-col>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, onMounted } from "vue";
import { useRoute } from "vue-router";
import { blogs } from "~/StaticData/blogs";
import { generateImgPath } from "~/StaticData/data";
import FsLightbox from 'fslightbox-vue'

import { useStremit } from "~/store/streamit";

const route = useRoute();
const type = computed(() => route.params.type);
const slug = computed(() => route.params.slug);
const blog = computed(() => blogs.find((item) => item.slug === slug.value));

const galleries = [
  {
    img: generateImgPath('/assets/images/blog/blog1.webp'),
    class: 'mb-4',
  },
  {
    img: generateImgPath('/assets/images/blog/blog2.webp'),
    class: 'mb-4',
  },
  {
    img: generateImgPath('/assets/images/blog/blog3.webp'),
    class: 'mb-4',
  },
  {
    img: generateImgPath('/assets/images/blog/blog4.webp'),
    class: 'mb-4 mb-md-0',
  },
  {
    img: generateImgPath('/assets/images/blog/blog5.webp'),
    class: 'mb-4 mb-md-0',
  },
  {
    img: generateImgPath('/assets/images/blog/blog6.webp'),
    class: '',
  },
];

const toggler = ref(false)
const slide = ref(1)

// Computed property to extract image URLs for fslightbox
const gallerySources = computed(() => {
  return galleries.map(item => item.img)
})

const togglerGallery = (index) => {
    slide.value = index
    toggler.value = !toggler.value
}

const store = useStremit();

function checkType() {
  if (blog.value?.blogTitle) return blog.value.blogTitle;
  switch (type.value) {
    case "single":
      store.breadcrumbSet({ show: true, name: "blogs.anticipated_movies" });
      break;
    case "audio":
      store.breadcrumbSet({ show: true, name: "blogs.black_pearl" });
      break;
    case "video":
      store.breadcrumbSet({ show: true, name: "blogs.cookies_web" });
      break;
    case "link":
      store.breadcrumbSet({ show: true, name: "blogs.birds_of_prey" });
      break;
    case "quote":
      store.breadcrumbSet({ show: true, name: "blogs.saturday_night" });
      break;
    case "gallery":
      store.breadcrumbSet({ show: true, name: "streamForm.gillian_shares" });
      break;
    default:
      break;
  }
  return '';
}

const blogTitle = computed(() => {
  if (blog.value?.blogTitle) return blog.value.blogTitle;
  switch (type.value) {
        case 'single':
      return 'streamBlog.blog1';
    case 'audio':
      return 'streamBlog.blog15';
    case 'video':
      return 'streamBlog.blog10';
    case 'link':
      return 'streamBlog.blog8';
    case 'quote':
      return 'streamBlog.blog9';
    case 'gallery':
      return 'streamBlog.blog10';
    default:
      return 'Blog not found';
  }
});

watch(
  type,
  () => {
    checkType();
  },
  { deep: true }
);

onMounted(() => {
  checkType();
});
onUnmounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});
</script>
