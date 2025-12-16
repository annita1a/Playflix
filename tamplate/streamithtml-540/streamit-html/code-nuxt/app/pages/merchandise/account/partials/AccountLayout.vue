<template>
  <div class="section-padding service-details">
    <b-container>
      <div class="px-3">
        <b-row>
          <b-col lg="4" md="4">
            <div class="acc-left-menu mb-5 mb-lg-0 mb-md-0">
              <div class="product-menu">
                <ul class="list-inline m-0 nav nav-tabs flex-column bg-transparent border-0" role="tablist">
                  <li class="pb-3 nav-item" role="presentation">
                    <nuxt-link class="nav-link p-0 bg-transparent" :to="{ name: 'merchandise-account' }"
                      ><span>{{ $t('streamShop.dashboard') }}</span></nuxt-link
                    >
                  </li>
                  <li class="py-3 nav-item" role="presentation">
                    <nuxt-link class="nav-link p-0 bg-transparent" :to="{ name: 'merchandise-account-order' }"
                      ><span>{{ $t('streamShop.orders') }}</span></nuxt-link
                    >
                  </li>
                  <li class="py-3 nav-item" role="presentation">
                    <nuxt-link class="nav-link p-0 bg-transparent" :to="{ name: 'merchandise-account-download' }"
                      ><span>{{ $t('streamShop.downloads') }}</span></nuxt-link
                    >
                  </li>
                  <li class="py-3 nav-item" role="presentation">
                    <nuxt-link class="nav-link p-0 bg-transparent" :to="{ name: 'merchandise-account-address' }"
                      ><span>{{ $t('streamShop.addresses') }}</span></nuxt-link
                    >
                  </li>
                  <li class="py-3 nav-item" role="presentation">
                    <nuxt-link class="nav-link p-0 bg-transparent" :to="{ name: 'merchandise-account-detail' }"
                      ><span>{{ $t('streamShop.account_details') }}</span></nuxt-link
                    >
                  </li>
                  <li class="pt-3 nav-item" role="presentation">
                    <nuxt-link class="nav-link p-0 bg-transparent" :to="{ name: 'merchandise-account-logout' }"
                      ><span>{{ $t('streamShop.greeting_logout') }}</span></nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col lg="8" md="8">
            <div id="product-menu-content" class="tab-content product-menu-content">
              <div id="dashboard" class="tab-pane fade active show" role="tabpanel">
                <slot></slot>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>
<script setup></script>
