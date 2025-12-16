<template>
  <b-card no-body>
    <b-card-header>
      <div class="header-title">
        <h4 class="card-title">{{ $t('user_profile.news') }}</h4>
      </div>
    </b-card-header>
    <b-card-body>
      <ul class="list-inline m-0 p-0">
        <li class="d-flex mb-2">
          <div class="news-icon me-3">
            <svg width="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" />
            </svg>
          </div>
          <p class="news-detail mb-0">{{ $t('user_profile.meetup') }}<a href="#">{{ $t('user_profile.see_details') }}</a></p>
        </li>
        <li class="d-flex">
          <div class="news-icon me-3">
            <svg width="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" />
            </svg>
          </div>
          <p class="news-detail mb-0">{{ $t('user_profile.off_coupon') }}</p>
        </li>
      </ul>
    </b-card-body>
  </b-card>
</template>
