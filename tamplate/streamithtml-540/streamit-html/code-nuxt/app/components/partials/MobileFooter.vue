<template>
  <div class="streamit-mobile-footer-menu" aria-label="Mobile Footer Navigation">
    <ul class="footer-menu list-inline d-flex align-items-center justify-content-between m-0">
      <li class="footer-menu-item">
        <nuxt-link :to="{ name: 'view-all' }" class="menu-link font-size-12">
          <i class="ph ph-film-reel d-block text-center"></i>
          Movies
        </nuxt-link>
      </li>
      <li class="footer-menu-item">
        <nuxt-link :to="{ name: 'view-all' }" class="menu-link font-size-12">
          <i class="ph ph-monitor-play d-block text-center"></i>
          Videos
        </nuxt-link>
      </li>
      <li class="footer-menu-item">
        <nuxt-link :to="{ name: 'view-all' }" class="menu- font-size-12">
          <i class="ph ph-magnifying-glass d-block text-center"></i>
          Search
        </nuxt-link>
      </li>
      <li class="footer-menu-item">
        <nuxt-link :to="{ name: 'view-all' }" class="menu-link font-size-12">
          <i class="ph ph-television d-block text-center"></i>
          TV Shows
        </nuxt-link>
      </li>
      <li class="footer-menu-item">
        <nuxt-link :to="{ name: 'profile-profile-marvin' }" class="menu-link font-size-12">
          <i class="ph ph-user d-block text-center"></i>
          Profile
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
