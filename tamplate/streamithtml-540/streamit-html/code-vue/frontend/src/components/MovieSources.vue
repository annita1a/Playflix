<template>
  <!-- Movie Source Start -->
  <div class="content-details trending-info">
    <ul
      class="iq-custom-tab tab-bg-gredient-center d-flex nav nav-pills align-items-center text-center mb-5 justify-content-center list-inline"
      role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link active show" data-bs-toggle="pill" href="#description-01" role="tab" aria-selected="true"> {{
          $t('streamShop.description') }} </a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" data-bs-toggle="pill" href="#review-01" role="tab" aria-selected="false" tabindex="-1"> {{
          $t('streamShop.reviews') }} </a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" data-bs-toggle="pill" href="#source-01" role="tab" aria-selected="false" tabindex="-1"> {{
          $t('streamShop.additional_information') }} </a>
      </li>
    </ul>
    <div class="tab-content">
      <div id="description-01" class="tab-pane animated fadeInUp active show" role="tabpanel">
        <div class="description-content">
          <p>{{ $t('streamReview.no_reviews') }}</p>
        </div>
      </div>
      <div id="review-01" class="tab-pane animated fadeInUp" role="tabpanel">
        <div class="streamit-reviews">
          <div id="comments" class="comments-area validate-form">
            <p class="masvideos-noreviews mt-3">{{ $t('streamReview.first_review') }}</p>
          </div>
          <div class="review_form">
            <div class="comment-respond">
              <h3 class="fw-500 my-2">{{ $t('streamReview.first_review') }}</h3>
              <p class="comment-notes"><span>Your email address will not be published.</span><span> Required
                  fields are marked<span class="required"> * </span></span></p>
              <div class="d-flex align-items-center mb-4"><label>{{ $t('streamShop.your_rating') }}</label>
                <div class="star ms-4 text-primary">
                  <span><i class="fa-regular fa-star"></i></span>{{ '' }}
                  <span><i class="fa-regular fa-star"></i></span>{{ '' }}
                  <span><i class="fa-regular fa-star"></i></span>{{ '' }}
                  <span><i class="fa-regular fa-star"></i></span>{{ '' }}
                  <span><i class="fa-regular fa-star"></i></span>
                </div>
              </div>
              <b-row>
                <b-col md="12">
                  <div class="form-group">
                    <label class="mb-2">
                      {{ $t('streamShop.your_rating') }}
                      <span class="required"> * </span>
                    </label>
                    <textarea class="form-control" name="comment" cols="5" rows="8" required></textarea>
                  </div>
                </b-col>
                <b-col md="6">
                  <div class="form-group">
                    <label class="mb-2">
                      {{ $t('streamAccount.name') }}
                      <span class="required"> * </span>
                    </label>
                    <input class="form-control" name="author" type="text" size="30" required />
                  </div>
                </b-col>
                <b-col md="6">
                  <div class="form-group">
                    <label class="mb-2">
                      {{ $t('streamAccount.email') }}&nbsp;
                      <span class="required"> * </span>
                    </label>
                    <input class="form-control" name="email" type="email" size="30" required />
                  </div>
                </b-col>
                <b-col md="12">
                  <div class="mt-3 mt-3 d-flex gap-2 align-items-center">
                    <input id="check1" class="form-check-input mt-0" type="checkbox" checked />
                    <label class="form-check-label" for="check1"> {{ $t('streamAccount.save_name') }} </label>
                  </div>
                </b-col>
                <b-col md="12">
                  <div class="form-submit mt-4">
                    <div class="iq-button">
                      <button
id="submit" name="submit" type="submit" class="btn text-uppercase position-relative"
                        value="Submit">
                        <span class="button-text">{{ $t('streamButtons.submit') }}</span>
                        {{ '' }}
                        <i class="fa-solid fa-play"></i>
                      </button>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </div>
      <div id="source-01" class="tab-pane animated fadeInUp" role="tabpanel">
        <div class="source-list-content table-responsive">
          <table class="table custom-table">
            <thead>
              <tr>
                <th>{{ $t('language.language') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="iq-button">
                    <a href="/movie-detail" class="btn text-uppercase position-relative">
                      <span class="button-text"> {{ $t('streamButtons.play_now') }}</span>
                      {{ '' }}
                      <i class="fa-solid fa-play"></i>
                    </a>
                  </div>
                </td>
                <td>1080p</td>
                <td>{{ $t('language.eng') }}</td>
                <td>2021-11-28</td>
              </tr>
              <tr>
                <td>
                  <div class="iq-button">
                    <a href="/movie-detail" class="btn text-uppercase position-relative">
                      <span class="button-text"> {{ $t('streamButtons.play_now') }}</span>
                      {{ '' }}
                      <i class="fa-solid fa-play"></i>
                    </a>
                  </div>
                </td>
                <td>800p</td>
                <td>{{ $t('language.eng') }}</td>
                <td>5{{ $t('streamKeyword.k_player') }}</td>
                <td>2021-11-25</td>
              </tr>
              <tr>
                <td>
                  <div class="iq-button">
                    <a href="/movie-detail" class="btn text-uppercase position-relative">
                      <span class="button-text"> {{ $t('streamButtons.play_now') }}</span>
                      {{ '' }}
                      <i class="fa-solid fa-play"></i>
                    </a>
                  </div>
                </td>
                <td>720p</td>
                <td>{{ $t('language.eng') }}</td>
                <td>{{ $t('streamKeyword.MediaMonkey') }}</td>
                <td>2021-11-20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- Movie Source End -->
</template>
<script setup></script>
