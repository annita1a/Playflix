<template>
  <!-- Sidebar Component Start Here-->
  <default-sidebar>
    <ul id="sidebar-menu" class="navbar-nav iq-main-menu">
      <side-menu is-tag="router-link" :router-link-title="$t('sidebar.dashboard')" :route="{ to: 'dashboard.home' }">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="1" data-bs-original-title="Dashboard 1">
            <i class="ph ph-squares-four fs-4"></i>
          </i>
        </template>
      </side-menu>
      <side-menu is-tag="router-link" :router-link-title="$t('sidebar.dashboard1')" :route="{ to: 'dashboard.dashboard1' }">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph ph-squares-four fs-4"></i>
          </i>
        </template>
      </side-menu>
      <side-menu is-tag="router-link" :router-link-title="$t('sidebar.rating')" :route="{ to: 'dashboard.rating' }">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph ph-star-half fs-4"></i>
          </i>
        </template>
      </side-menu>
      <side-menu is-tag="router-link" :router-link-title="$t('sidebar.comments')" :route="{ to: 'dashboard.comments' }">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph ph-chat-circle-dots fs-4"></i>
          </i>
        </template>
      </side-menu>
      <side-menu is-tag="router-link" :router-link-title="$t('sidebar.users')" :route="{ to: 'user.user-list' }">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph ph-user fs-5"></i>
          </i>
        </template>
      </side-menu>

      <side-menu :router-link-title="$t('sidebar.movie')" toggle-id="movie-list" :caret-icon="true" :route="{ popup: 'false', to: 'dashboard.movie-list' }" :active="currentRoute.includes('movie-list')" @on-click="toggle">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right">
            <i class="ph ph-film-strip fs-4"></i>
          </i>
        </template>

        <b-collapse id="movie-list" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('movie-list')">
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.movie_list')" icon="ph ph-film-strip fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'dashboard.movie-list' }" />
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.genres')" icon="ph ph-faders-horizontal fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'dashboard.movie-genre' }" />
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.tags')" icon="ph ph-tag fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'dashboard.movie-tags' }" />
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.movie-playlists')" icon="ph ph-playlist fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'dashboard.movie-playlist' }" />
        </b-collapse>
      </side-menu>

      <side-menu :router-link-title="$t('sidebar.tv_shows')" toggle-id="tv-shows" :caret-icon="true" :route="{ popup: 'false', to: 'tv-shows' }" :active="currentRoute.includes('tv-shows')" @on-click="toggle">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph ph-television-simple fs-4"></i>
          </i>
        </template>
        <b-collapse id="tv-shows" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('tv-shows')">
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.show_list')" icon="ph ph-monitor-play fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'tv-shows.show-list' }"></side-menu>
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.episodes')" icon="ph ph-monitor-play fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'show-list.episodes' }"></side-menu>
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.genres')" icon="ph ph-faders-horizontal fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'show-list.show-genre' }"></side-menu>
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.tags')" icon="ph ph-tag fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'show-list.show-tag' }"></side-menu>
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.episodes-playlist')" icon="ph ph-playlist fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'show-list.show-playlist' }"></side-menu> 
        </b-collapse>
      </side-menu>

      <side-menu :router-link-title="$t('sidebar.videos')" toggle-id="videos" :caret-icon="true" :route="{ popup: 'false', to: 'dashboard.videos' }" :active="currentRoute.includes('videos')" @on-click="toggle">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right">
            <i class="ph ph-video-camera fs-4"></i>
          </i>
        </template>

        <b-collapse id="videos" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('videos')">
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.videos')" icon="ph ph-video fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'dashboard.videos' }" />
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.video-category')" icon="ph ph-queue fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'dashboard.videos-category' }" />
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.video-tags')" icon="ph ph-video-camera fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'dashboard.videos-tag' }" />
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.video-playlist')" icon="ph ph-playlist fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'dashboard.videos-playlist' }" />
        </b-collapse>
      </side-menu>

      <side-menu :router-link-title="$t('sidebar.persons')" toggle-id="persons" :caret-icon="true" :route="{ popup: 'false', to: 'dashboard.persons' }" :active="currentRoute.includes('persons')" @on-click="toggle">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right">
            <i class="ph ph-users-three fs-4"></i>
          </i>
        </template>

        <b-collapse id="persons" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('persons')">
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.person')" icon="ph ph-user-circle fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'dashboard.person' }" />
          <side-menu is-tag="router-link" :router-link-title="$t('dashboard.categories')" icon="ph ph-user-circle-plus fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'dashboard.person-categories' }" />
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.tags')" icon="ph ph-tag fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'dashboard.person-tag' }" />
        </b-collapse>
      </side-menu>

      <side-menu is-tag="router-link" :router-link-title="$t('sidebar.review')" :route="{ to: 'dashboard.review' }">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph ph-chat-centered fs-5"></i>
          </i>
        </template>
      </side-menu>

      <side-menu is-tag="router-link" :router-link-title="$t('sidebar.pricing')" :icon-size="10" icon-type="solid" mini-title="B" :route="{ to: 'special-pages.pricing' }">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph ph-wallet fs-5"></i>
          </i> </template
      ></side-menu>
      <side-menu :router-link-title="$t('sidebar.authentication')" toggle-id="menu-style" :caret-icon="true" :route="{ popup: 'false', to: 'menu-style' }" :active="currentRoute.includes('menu-style')" @on-click="toggle">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph ph-shield-check fs-5"></i>
          </i>
        </template>
        <b-collapse id="menu-style" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('menu-style')">
          <side-menu :router-link-title="$t('sidebar.login')" icon="ph ph-sign-in fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'auth.login' }"></side-menu>
          <side-menu :router-link-title="$t('sidebar.register')" icon="ph ph-trademark-registered fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'auth.register' }"></side-menu>
          <side-menu :router-link-title="$t('sidebar.recover_password')" icon="ph ph-voicemail fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'auth.reset-password' }"></side-menu>
          <side-menu :router-link-title="$t('sidebar.confirm_mail')" icon="ph ph-file fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'auth.varify-email' }"></side-menu>
          <side-menu :router-link-title="$t('sidebar.two_factor_authentication')" icon="ph ph-fingerprint fs-5" :icon-size="10" icon-type="solid" mini-title="TFA" :route="{ to: 'auth.two-factor' }"></side-menu>
          <side-menu :router-link-title="$t('sidebar.account_deactivated')" icon="ph ph-user-circle-minus fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'auth.account-deactivated' }"></side-menu>
          <side-menu :router-link-title="$t('sidebar.lock_screen')" icon="ph ph-lock fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'auth.lock-screen' }"></side-menu>
        </b-collapse>
      </side-menu>

      <side-menu :router-link-title="$t('sidebar.utilities')" toggle-id="utilities" :caret-icon="true" :route="{ popup: 'false', to: 'errors' }" :active="currentRoute.includes('errors')" @on-click="toggle">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph-fill ph-note fs-4"></i>
          </i>
        </template>
        <b-collapse id="utilities" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('errors')">
          <side-menu :router-link-title="$t('sidebar.error_404')" icon="ph ph-warning-circle fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'error.404' }"></side-menu>
          <side-menu :router-link-title="$t('sidebar.error_500')" icon="ph ph-warning-circle fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'error.500' }"></side-menu>
          <side-menu :router-link-title="$t('sidebar.maintenance')" icon="ph ph-archive fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'error.maintenance' }"></side-menu>
          <side-menu :router-link-title="$t('sidebar.coming_soon')" icon="ph ph-clock fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'error.coming-soon' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu is-tag="router-link" :router-link-title="$t('sidebar.blank_page')" :route="{ to: 'dashboard.blank-page' }">
        <template #icon>
          <i class="icon-20" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph ph-note fs-5"></i>
          </i> </template
      ></side-menu>
      <side-menu :router-link-title="$t('sidebar.ui_elements')" toggle-id="ui-elements" :caret-icon="true" :route="{ popup: 'false', to: 'ui-elements' }" :active="currentRoute.includes('ui-elements')" @on-click="toggle">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph ph-briefcase fs-4"></i>
          </i>
        </template>
        <b-collapse id="ui-elements" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('ui-elements')">
          <side-menu is-tag="router-link" icon="ph ph-user fs-5" :router-link-title="$t('sidebar.avatars')" :icon-size="10" icon-type="solid" mini-title="A" :route="{ to: 'ui-elements.avatars' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-user fs-5" :router-link-title="$t('sidebar.alerts')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.alerts' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph-duotone ph-shield-check fs-5" :router-link-title="$t('sidebar.badge')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.badge' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-list fs-5" :router-link-title="$t('sidebar.bread_crumb')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.breadcrumb' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph-duotone ph-device-tablet-camera fs-5" :router-link-title="$t('sidebar.buttons')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.buttons' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-corners-out fs-5" :router-link-title="$t('sidebar.buttons_group')" :icon-size="10" icon-type="solid" mini-title="B" :route="{ to: 'ui-elements.buttonsgroup' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-corners-out fs-5" :router-link-title="$t('sidebar.offcanavas')" :icon-size="10" icon-type="solid" mini-title="O" :route="{ to: 'ui-elements.offcanvas' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-palette fs-5" :router-link-title="$t('sidebar.colors')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'dashboard.ui-color' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-identification-card fs-5" :router-link-title="$t('sidebar.cards')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.cards' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph-duotone ph-film-strip fs-5" :router-link-title="$t('sidebar.carousel')" :icon-size="10" icon-type="solid" mini-title="C" :route="{ to: 'ui-elements.carousel' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-grid-four fs-5" :router-link-title="$t('sidebar.grid')" :icon-size="10" icon-type="solid" mini-title="G" :route="{ to: 'ui-elements.grid' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-image fs-5" :router-link-title="$t('sidebar.images')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.images' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-list-checks fs-5" :router-link-title="$t('sidebar.list_group')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.listgroup' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-square-split-horizontal fs-5" :router-link-title="$t('sidebar.modal')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.modal' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-bell fs-5" :router-link-title="$t('sidebar.notifications')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.notifications' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-dots-three-outline fs-5" :router-link-title="$t('sidebar.pagination')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.pagination' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-eraser fs-5" :router-link-title="$t('sidebar.popovers')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.popovers' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-keyboard fs-5" :router-link-title="$t('sidebar.typography')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.typography' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-stack fs-5" :router-link-title="$t('sidebar.tabs')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.tabs' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-magnet fs-5" :router-link-title="$t('sidebar.tooltips')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.tooltips' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-video-camera fs-5" :router-link-title="$t('sidebar.video')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'ui-elements.video' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu :router-link-title="$t('sidebar.widgets')" toggle-id="widget" :caret-icon="true" :route="{ popup: 'false', to: 'widget' }" :active="currentRoute.includes('widget')" @on-click="toggle">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph ph-browser fs-4"></i>
          </i>
        </template>
        <b-collapse id="widgets" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('widget')">
          <side-menu is-tag="router-link" icon="ph ph-chart-bar fs-5" :router-link-title="$t('sidebar.widgets_basic')" :icon-size="10" icon-type="solid" mini-title="WB" :route="{ to: 'widget.widget-basic' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-chart-line fs-5" :router-link-title="$t('sidebar.widgets_chart')" :icon-size="10" icon-type="solid" mini-title="WC" :route="{ to: 'widget.widget-chart' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-browsers fs-5" :router-link-title="$t('sidebar.widgets_card')" :icon-size="10" icon-type="solid" mini-title="WC" :route="{ to: 'widget.widget-card' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu :router-link-title="$t('sidebar.form')" toggle-id="form" :caret-icon="true" :route="{ popup: 'false', to: 'form' }" :active="currentRoute.includes('form')" @on-click="toggle">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph ph-note fs-4"></i>
          </i>
        </template>
        <b-collapse id="form" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('form')">
          <side-menu is-tag="router-link" :router-link-title="$t('sidebar.elements')" icon="ph ph-book fs-5" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'form.elements' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-magic-wand fs-5" :router-link-title="$t('sidebar.wizard')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'form.wizard' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-note-pencil fs-5" :router-link-title="$t('sidebar.validation')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'form.validation' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu :router-link-title="$t('sidebar.table')" toggle-id="table" :caret-icon="true" :route="{ popup: 'false', to: 'table' }" :active="currentRoute.includes('table')" @on-click="toggle">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph-fill ph-table fs-4"></i>
          </i>
        </template>
        <b-collapse id="table" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('table')">
          <side-menu is-tag="router-link" icon="fa-brands fa-bootstrap" :router-link-title="$t('sidebar.bootstrap_table')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'table.bootstrap-table' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-table fs-5" :router-link-title="$t('sidebar.data_table')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'table.data-table' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-table fs-5" :router-link-title="$t('sidebar.bordered_table')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'table.border-table' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph ph-grid-nine fs-5" :router-link-title="$t('sidebar.fixed_table')" :icon-size="10" icon-type="solid" mini-title="FT" :route="{ to: 'table.fixed-table' }"></side-menu>
        </b-collapse>
      </side-menu>

      <side-menu :router-link-title="$t('sidebar.icons')" toggle-id="icons" :caret-icon="true" :route="{ popup: 'false', to: 'icons' }" :active="currentRoute.includes('icons')" @on-click="toggle">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph-duotone ph-circles-three-plus fs-4"></i>
          </i>
        </template>
        <b-collapse id="icons" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('icons')">
          <side-menu is-tag="router-link" icon="ph ph-currency-rub fs-5" :router-link-title="$t('sidebar.ph-regular')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'icons.ph-regular' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph-bold ph-currency-rub fs-5" :router-link-title="$t('sidebar.ph-bold')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'icons.ph-bold' }"></side-menu>
          <side-menu is-tag="router-link" icon="ph-fill ph-currency-rub fs-5" :router-link-title="$t('sidebar.ph-fill')" :icon-size="10" icon-type="solid" mini-title="" :route="{ to: 'icons.ph-fill' }"></side-menu>
        </b-collapse>
      </side-menu>

      <side-menu is-tag="router-link" :router-link-title="$t('sidebar.access_control')" :icon-size="10" icon-type="solid" mini-title="B" :route="{ to: 'icons.access-control' }">
        <template #icon>
          <i class="icon" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
            <i class="ph ph-user-gear fs-4"></i>
          </i>
        </template>
      </side-menu>
      <br />
    </ul>
  </default-sidebar>
  <!-- Sidebar Component End Here-->
</template>

<script setup>
import DefaultSidebar from '../custom/sidebar/DefaultSidebar.vue';
import SideMenu from '../custom/nav/SideMenu.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const currentRoute = ref('');
const route = useRoute();
const toggle = (route) => {
  if (route === currentRoute.value && route.includes('.')) {
    const menu = currentRoute.value.split('.');
    return (currentRoute.value = menu[menu.length - 2]);
  }
  if (route !== currentRoute.value && currentRoute.value.includes(route)) {
    return (currentRoute.value = '');
  }
  if (route !== currentRoute.value) {
    return (currentRoute.value = route);
  }
  if (route === currentRoute.value) {
    return (currentRoute.value = '');
  }
  return (currentRoute.value = '');
};
toggle(route.name);
</script>
