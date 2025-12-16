<template>
  <div class="streamit-mobile-footer-menu" aria-label="Mobile Footer Navigation">
    <ul class="footer-menu list-inline d-flex align-items-center justify-content-between m-0">
      <li class="footer-menu-item">
        <router-link :to="{ name: 'landing-page.view-all' }" class="menu-link font-size-12">
          <i class="ph ph-film-reel d-block text-center"></i>
          {{ $t('streamPages.movie') }}
        </router-link>
      </li>
      <li class="footer-menu-item">
        <router-link :to="{ name: 'landing-page.view-all' }" class="menu-link font-size-12">
          <i class="ph ph-monitor-play d-block text-center"></i>
          {{ $t('streamPages.video') }}
        </router-link>
      </li>
      <li class="footer-menu-item">
        <router-link :to="{ name: 'landing-page.view-all' }" class="menu-link font-size-12">
          <i class="ph ph-magnifying-glass d-block text-center"></i>
          {{ $t('streamBlog.search1') }}
        </router-link>
      </li>
      <li class="footer-menu-item">
        <router-link :to="{ name: 'landing-page.view-all' }" class="menu-link font-size-12">
          <i class="ph ph-television d-block text-center"></i>
          {{ $t('streamPages.tv_show') }}
        </router-link>
      </li>
      <li class="footer-menu-item">
        <router-link :to="{ path: '/profile-marvin' }" class="menu-link font-size-12">
          <i class="ph ph-user d-block text-center"></i>
          {{ $t('streamAccount.profile') }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
