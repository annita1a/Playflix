<template>
  <div class="section-padding">
    <div class="container">
      <b-row>
        <b-col cols="12">
          <div class="iq-blog-detail">
            <a class="blog-image d-block overflow-hidden">
              <img
                class="img-fluid w-100 mb-5"
                :src="blog.thumbnail"
                loading="lazy"
                alt=""
              />
            </a>
            <div class="iq-blog-box">
              <div class="iq-blogs-meta">
                <ul class="iq-blogtag list-inline d-flex align-items-center flex-wrap mb-0">
                  <li class=""><i class="ph ph-user" aria-hidden="true"></i><nuxt-link
                      :to="{ name: 'blogs-filter-type', params: { type: 'author' } }" class="">
                      Jenny</nuxt-link></li>
                  <li class=""><i class="icon icon-calendar-2" aria-hidden="true"></i><nuxt-link
                      :to="{ name: 'blogs-filter-type', params: { type: 'date' } }">
                      January 30,
                      2019</nuxt-link></li>
                  <li class=""><nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tag' } }"
                      class="">{{ $t('streamBlogCategory.drama') }}</nuxt-link>,
                  </li>
                  <li class=""><nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tag' } }" class="">
                      {{ $t('streamBlogTag.history') }}</nuxt-link>,</li>
                  <li class="">
                    <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'tag' } }"
                      class="">{{ $t('streamShop.uncategorized') }}</nuxt-link>
                  </li>
                </ul>
              </div>
              <h3 class="mb-3">
                {{ $t('streamBlog.blog1') }} </h3>
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
                  <span>0 {{ $t('streamBlog.comment') }}</span>
                </h3>
                <h3 class="mb-4">{{ $t('streamForm.leave_reply') }}</h3>
                <form>
                  <p class="mb-5">{{ $t('streamAccount.logged_jenny') }} <nuxt-link
                      :to="{ name: 'merchandise-account' }">{{ $t('streamForm.edit_profile') }}</nuxt-link>{{ ' ' }} {{ $t('streamShop.required_fields') }} *</p>
                  <div class="pt-3">
                    <b-row>
                      <b-col md="12">
                        <textarea class="form-control rounded-3" name="comment" cols="5" rows="8" required=""
                          :placeholder="$t('streamBlog.comment')+'*'"></textarea>
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
    </div>
  </div>
</template>
<script setup>
//data
import { filterBlog } from "../../StaticData/blogs";

//custom hook
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("The Most Anticipated Movies");

const slug = "the-most-anticipated-movies";
const blog = filterBlog(slug);
</script>
