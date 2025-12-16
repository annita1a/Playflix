<template>
  <div class="iq-blog-box">
    <div class="iq-blog-image clearfix">
      <nuxt-link :to="{ name: 'blogs-detail' }">
        <img :src="thumbnail" :alt="`blogImg-${id}`" class="img-fluid w-100 rounded-3" loading="lazy" />
      </nuxt-link>
    </div>
    <div class="iq-blog-detail">
      <div class="iq-blog-meta d-flex align-item-center flex-wrap">
        <ul class="list-inline mb-0">
          <li class="posted-by">
            <span class="post-date d-flex align-item-center gap-1">
              <i v-if="blogTagIcon" class="icon icon-tag"></i>
              <i v-else class="ph ph-user"></i>
              <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'author' } }">{{ username }}</nuxt-link>
            </span>
          </li>{{ '' }}
          <li class="posted-on">
            <span class="post-author d-flex align-item-center gap-1">
              <i class="icon icon-calendar-2"></i>
              <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'date' } }">
                <span>{{ blogDate }}</span>
              </nuxt-link>
            </span>
          </li>
          <!-- Move v-if to the wrapper element as per vue/no-use-v-if-with-v-for -->
          <template v-if="blogCategories && blogCategories.length">
            <li v-for="(cat, idx) in blogCategories" :key="`cat-${idx}`" class="blog-category">
              <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'category' } }" class="pe-1">{{ cat }}</nuxt-link>
            </li>
          </template>
        </ul>
      </div>

      <h4 class="mb-3 blog-heading">
        <nuxt-link :to="{ name: 'blogs-detail' }">
          {{ blogTitle }}
        </nuxt-link>
      </h4>
      <p class="line-count-2">{{ blogText }}</p>

      <ul v-if="blogTags && blogTags.length" class="list-inline d-flex align-items-center gap-2 flex-wrap blog-tag">
        <li v-for="(tag, idx) in blogTags" :key="`tag-${idx}`">
          <nuxt-link class="font-size-14 rounded-3 fw-medium" :to="{ name: 'blogs-filter-type', params: { type: 'tags' } }">{{ $t(tag) }}</nuxt-link>
        </li>
      </ul>

      <div v-if="linkButton">
        <nuxt-link
          :to="{ name: 'blogs-detail' }"
          class="btn btn-link blog-readMore p-0 text-capitalize position-relative font-size-14"
        >
          <span>{{$t('streamButtons.read_more')}}</span>{{ '' }}
          <span v-if="rightIcon"><i class="ph ph-caret-right align-middle"></i></span>
        </nuxt-link>
      </div>
      <div v-else class="iq-button">
        <nuxt-link
          :to="{ name: 'blogs-detail' }"
          class="btn btn-primary text-uppercase position-relative"
        >
          <span class="button-text">{{$t('streamButtons.read_more')}} </span>
          <i class="ph-fill ph-play"></i>
        </nuxt-link>
      </div>

      <ul v-if="isCategory && categoriesList && categoriesList.length" class="iq-blog-meta-cat-tag iq-blogcat mt-4">
        <li class="iq-tag-title">
          <i class="ph ph-film-strip" aria-hidden="true"></i>
          Categories:
        </li>
        <li v-for="(cat, idx) in categoriesList" :key="`catlist-${idx}`">
          <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'category' } }">
            {{ cat }}
          </nuxt-link>
        </li>
      </ul>

      <ul v-if="isTag && tagList && tagList.length" class="iq-blog-meta-cat-tag iq-blogtag">
        <li class="iq-tag-title">
          <i class="ph ph-tag" aria-hidden="true"></i>
          {{$t('streamTag.tags')}}:
        </li>
        <li v-for="(tag, idx) in tagList" :key="`taglist-${idx}`">
          <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tags' } }">
            {{ tag }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: { type: [String, Number], default: '' },
  thumbnail: { type: String, default: '' },
  blogTitle: { type: String, default: '' },
  blogText: { type: String, default: '' },
  slug: { type: String, default: '' },
  blogTag: { type: String, default: '' },
  username: { type: String, default: '' },
  blogTagIcon: { type: Boolean, default: false },
  blogDate: { type: String, default: '' },
  blogCategories: { type: Array, default: () => [] },
  blogTags: { type: Array, default: () => [] },
  linkButton: { type: Boolean, default: false },
  rightIcon: { type: Boolean, default: false },
  isCategory: { type: Boolean, default: false },
  categoriesList: { type: Array, default: () => [] },
  isTag: { type: Boolean, default: false },
  tagList: { type: Array, default: () => [] },
});
</script>
