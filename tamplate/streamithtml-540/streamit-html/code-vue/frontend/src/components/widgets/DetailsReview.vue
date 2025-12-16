<template>
  <div class="rate-review-details">
    <div class="d-flex align-items-center justify-content-between gap-3 mb-3">
      <h5 class="main-title text-capitalize m-0 fw-medium">{{$t('streamShop.reviews')}}</h5>
      <div class="d-flex align-items-center gap-3">
        <a id="openReviewButton" class="btn btn-link p-0 custom-fs-14 openReviewButton" data-bs-toggle="offcanvas" href="#offcanvasReview" role="button" aria-controls="offcanvasReview"> {{$t('streamButtons.add_review')}} </a>
        <router-link class="btn btn-link p-0 custom-fs-14" :to="{path: '/view-more'}">{{$t('streamButtons.view_more')}}</router-link>
      </div>
    </div>

    <div class="comments-section">
      <div v-for="(review, index) in reviews" :key="index" class="review-card">
        <div class="review-detail rounded-3">
          <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div class="d-flex align-items-center justify-content-center gap-3">
              <img :src="generateImgPath(`/assets/${review.avatar}`)" class="img-fluid user-img rounded-circle" :alt="review.name" />
              <div>
                <h6 class="line-count-1 m-0">{{ $t(review.name) }}</h6>
                <p class="mb-0 mt-1 small-date-font">{{ review.date }}</p>
              </div>
            </div>
            <div class="star-rating" :data-rating="review.rating">
              <template v-for="i in 5" :key="i">
                <i
                  class="ph-fill ph-star"
                  :class="i <= review.rating ? 'text-warning' : 'text-secondary'"
                  aria-hidden="true"
                ></i>
              </template>
            </div>
          </div>
          <p class="mb-0 mt-3 pt-3 border-top fw-medium">{{ $t(review.comment) }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Offcanvas -->
  <div id="offcanvasReview" class="offcanvas overflow-y-auto widget-shopping-cart-content offcanvas-end offcanvas-sidebar sidebar-container on-rtl end border-left-0" tabindex="-1" aria-modal="true" role="dialog">
    <div class="offcanvas-header justify-content-between position-relative border-bottom">
      <h5 id="offcanvasReviewLabel" class="offcanvas-title fw-500">{{$t('streamButtons.add_review')}}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form @submit.prevent="submitReview">
        <input type="hidden" name="st_ajax_nonce" :value="formData.nonce" />
        <input type="hidden" name="_wp_http_referer" :value="formData.referer" />
        <input id="cm_id" v-model="formData.comment_id" type="hidden" name="comment_id" />
        <input id="cm_post_type" v-model="formData.post_type" type="hidden" name="post_type" />
        <input id="cm_post_id" v-model="formData.post_id" type="hidden" name="post_id" />
        <input id="cm_user_id" v-model="formData.user_id" type="hidden" name="user_id" />
        <input id="cm_name" v-model="formData.name" type="hidden" name="cm_name" />
        <input id="cm_email" v-model="formData.email" type="hidden" name="cm_email" />

        <p class="mt-0 text-heading">{{$t('streamAccount.log_in')}}: {{ $t(formData.name) }}</p>

        <div class="form-group mb-4">
          <label class="form-label mb-3">{{$t('streamShop.your_rating')}}</label>
          <div id="starRating" class="star-rating">
            <template v-for="i in 5" :key="i">
              <input :id="'star' + i" v-model="formData.rating" type="radio" name="rating" :value="i" />
              <label :for="'star' + i" :title="`${i} stars`">
                <i class="ph-fill ph-star" aria-hidden="true"></i>
              </label>
            </template>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label flex-grow-1" for="Description">{{$t('streamShop.your_review')}}</label>
          <textarea id="Description" v-model="formData.review" class="form-control review-text-area" rows="8" cols="45"></textarea>
        </div>

        <div class="iq-button">
          <button type="submit" class="btn btn-primary text-capitalize">
            <span class="button-text">{{$t('streamButtons.submit_review')}}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { generateImgPath } from '../../StaticData/data';
const reviews = ref([
  {
    name: 'streamShop.greeting_name',
    date: '2025-02-04 05:14:19',
    rating: 5,
    comment: 'streamReview.review1',
    avatar: 'images/user/user.jpg',
  },
  {
    name: 'streamAccount.freya',
    date: '2025-01-17 06:51:59',
    rating: 5,
    comment: 'streamReview.review2',
    avatar: 'images/user/user2.jpg',
  },
  {
    name: 'favouritePersonalities.ava_monroe',
    date: '2025-02-04 05:14:19',
    rating: 5,
    comment: 'streamReview.review3',
    avatar: 'images/user/robert.jpg',
  },
]);

const formData = ref({
  nonce: 'a19cf1e628',
  referer: '/product/wp/streamit/tvshows/vikings/',
  comment_id: '',
  post_type: 'tvshow',
  post_id: 1,
  user_id: 12,
  name: 'streamShop.greeting_name',
  email: 'marvin@demo.com',
  rating: '',
  review: '',
});

const submitReview = () => {
  // Reset form
  formData.value.rating = '';
  formData.value.review = '';
};
</script>