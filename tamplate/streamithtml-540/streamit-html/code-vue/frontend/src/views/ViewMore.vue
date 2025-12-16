<template>
  <section class="section-padding">
    <div class="rate-review-details">
      <b-container fluid>
        <b-row class="gy-4">
          <!-- Left: Movie Card & Ratings -->
          <b-col md="4" xl="3">
            <div class="card mb-4 border-0">
              <div class="card-body p-4">
                <div class="css_prefix-card">
                  <div class="block-images position-relative w-100">
                    <div class="image-box w-100">
                      <a href="#">
                        <img
                          :src="generateImgPath('assets/images/media/vikings.webp')"
                          alt="Vikings"
                          class="img-fluid object-cover w-100 d-block border-0"
                        />
                      </a>
                    </div>
                    <div class="card-description with-transition">
                      <ul class="genres-list p-0 mb-2 d-flex align-items-center flex-wrap">
                        <li v-for="genre in genres" :key="genre" class="trending-list">
                          <a href="#" class="font-size-14">{{ $t(genre) }}</a>
                        </li>
                      </ul>
                      <h5 class="css_prefix-title text-capitalize line-count-1 mb-0">
                        <a href="#" class="color-inherit" tabindex="0">{{$t('streamMovies.vikings')}}</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-body">
                <div class="ratting-card">
                  <div class="d-flex flex-wrap align-items-center gap-4 mb-4">
                    <h2 class="m-0">{{ avgRating.toFixed(2) }}</h2>
                    <div class="data">
                      <ul class="list-inline m-0 p-0 d-flex align-items-center gap-1">
                        <li v-for="i in 5" :key="i" :class="i <= Math.round(avgRating) ? 'text-warning' : 'text-muted'">
                          <i class="icon-star-fill-icon"></i>
                        </li>
                      </ul>
                      <p class="m-0">{{$t('streamReview.based_on_rating')}}</p>
                    </div>
                  </div>
                  <b-row
                    v-for="star in [5,4,3,2,1]"
                    :key="star"
                    class="align-items-center g-3"
                  >
                    <b-col xl="2" lg="2" md="3" sm="1" cols="3">
                      <div class="d-flex align-items-center gap-2">
                        <span class="h6 mb-0">{{ star }}</span>
                        <i class="icon-star-fill-icon text-warning"></i>
                      </div>
                    </b-col>
                    <b-col xl="7" lg="8" md="7" sm="9" cols="7">
                      <div
                        class="progress w-100 progress-ratings"
                        role="progressbar"
                        :aria-label="`Rating ${star}`"
                        :aria-valuenow="ratingStats[star]?.percent || 0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          class="progress-bar bg-success"
                          :style="{ width: (ratingStats[star]?.percent || 0) + '%' }"
                        ></div>
                      </div>
                    </b-col>
                    <b-col xl="3" lg="2" md="2" sm="2" cols="2" class="flex-shrink-0">
                      <span class="text-body">{{ ratingStats[star]?.count || 0 }}</span>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </div>
          </b-col>
          <!-- Right: Reviews -->
          <b-col md="8" xl="9">
            <div class="mb-2 d-flex align-items-center justify-content-between">
              <h5>{{ reviews.length }} {{$t('streamReview.review4')}}</h5>
            </div>
            <div class="review-list-inner comments-section data-listing">
              <div v-for="review in reviews" :key="review.id" class="review-card">
                <div class="review-detail rounded-3">
                  <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div class="d-flex align-items-center justify-content-center gap-3">
                      <img
                        :src="generateImgPath(review.avatar)"
                        class="img-fluid user-img rounded-circle"
                        :alt="review.author"
                      />
                      <div>
                        <h6 class="line-count-1 m-0">{{ $t(review.author) }}</h6>
                        <p class="mb-0 mt-1 small">{{ review.date }}</p>
                      </div>
                    </div>
                    <div class="star-rating d-flex gap-1 align-items-center">
                      <i
                        v-for="i in 5"
                        :key="i"
                        class="ph-fill ph-star"
                        :class="i <= review.rating ? 'text-warning' : ''"
                      ></i>
                    </div>
                  </div>
                  <p class="mb-0 mt-3 pt-3 border-top fw-medium">{{ $t(review.content) }}</p>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { generateImgPath } from '../StaticData/data';

const genres = ['streamGenres.action', 'streamGenres.animation', 'streamGenres.crime', 'streamGenres.horror'];

const reviews = [
  {
    id: 1,
    author: 'streamAccount.leslie',
    date: '2024-12-20 11:40:19',
    avatar: 'assets/images/user/user3.jpg',
    rating: 3,
    content:
      'streamReview.review8',
  },
  {
    id: 2,
    author: 'streamAccount.jerry',
    date: '2024-12-20 11:36:22',
    avatar: 'assets/images/user/user4.png',
    rating: 1,
    content: 'streamReview.review8',
  },
  {
    id: 3,
    author: 'streamAccount.arlene',
    date: '2024-12-20 10:21:08',
    avatar: 'assets/images/user/user5.jpg',
    rating: 4,
    content: 'streamReview.review6',
  },
  {
    id: 4,
    author: 'streamAccount.freya',
    date: '2024-12-18 10:57:21',
    avatar: 'assets/images/user/user2.jpg',
    rating: 3,
    content: 'streamReview.review5',
  },
];

// Calculate average rating
const avgRating = computed(() => {
  if (!reviews.length) return 0;
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
});

// Calculate rating stats for progress bars
const ratingStats = computed(() => {
  const stats = {};
  for (let i = 1; i <= 5; i++) {
    const count = reviews.filter((r) => r.rating === i).length;
    stats[i] = {
      count,
      percent: reviews.length ? (count / reviews.length) * 100 : 0,
    };
  }
  return stats;
});
</script>