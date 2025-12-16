<template>
  <section class="section-padding profile-section-padding">
    <b-container fluid>
      <!-- user profile start -->
      <div class="px-sm-5 px-3 py-4 rounded-3 profile-user-info">
        <b-row class="align-items-center">
          <b-col sm="6">
            <div class="d-flex align-items-center flex-wrap gap-3">
              <div class="profile-image flex-shrink-0">
                <img src="/assets/images/user/user6.jpg" alt="Marvin McKinney" class="user-image user-profile-image" />
              </div>
              <div class="profile-info">
                <h5 class="mt-0 info-title">{{ $t('streamShop.greeting_name') }}</h5>
                <p class="mb-1 mt-0">marvin@demo.com</p>
                <p class="m-0">{{ $t('streamProfile.marvin') }}</p>
              </div>
            </div>
          </b-col>
          <b-col sm="6" class="mt-sm-0 mt-3">
            <div class="d-flex align-items-center justify-content-sm-end gap-3">
              <button type="button" class="btn btn-sm custom-btn-sm btn-primary text-nowrap fw-semibold" data-bs-toggle="modal" data-bs-target="#edit-profile-modal"><i class="icon-edit-icon"></i> {{ $t('streamButtons.editprofile') }}</button>
            </div>
          </b-col>
        </b-row>
      </div>

      <b-row class="mt-5">
        <b-col xl="2" lg="3">
          <ul class="profile-page-list list-inline p-0 mx-0 nav-tabs" role="tablist">
            <li class="profile-page-list-item">
              <a href="#" class="profile-page-list-link active" data-bs-toggle="tab" data-bs-target="#playlist-tab" role="tab" aria-selected="true"> {{ $t('streamPages.playlist') }} </a>
            </li>
            <li class="profile-page-list-item">
              <a href="#" class="profile-page-list-link" data-bs-toggle="tab" data-bs-target="#watchlist-tab" role="tab" aria-selected="true"> {{ $t('streamAccount.watch_list') }} </a>
            </li>
            <li class="profile-page-list-item">
              <a href="#" class="profile-page-list-link" data-bs-toggle="tab" data-bs-target="#notification-tab" role="tab" aria-selected="true"> {{ $t('streamAccount.notification') }} </a>
            </li>
            <li class="profile-page-list-item">
              <a href="#" class="profile-page-list-link" data-bs-toggle="tab" data-bs-target="#membership-tab" role="tab" aria-selected="true"> {{ $t('sectionTitle.membership') }} </a>
            </li>
          </ul>
        </b-col>

        <b-col xl="10" lg="9" class="mt-5 mt-lg-0">
          <div id="profile-menu-content" class="tab-content">
            <div id="playlist-tab" class="tab-pane fade show active" role="tabpanel">
              <div class="play-lists">
                <b-row class="g-2 column-reverce align-items-center border-bottom playlist-bottom-margin">
                  <b-col cols="8" sm="9" lg="10">
                    <div id="item-nav">
                      <div id="object-nav" class="item-list-tabs no-ajax css_prefix-tab-lists">
                        <!-- Playlist Tabs -->
                        <ul id="pills-tab" class="nav nav-underline data-search-tab" role="tablist">
                          <li class="nav-item" role="presentation">
                            <button id="pills-movie-tab" class="nav-link active" data-bs-toggle="pill" data-bs-target="#pills-movie" type="button" role="tab" aria-controls="pills-movie" aria-selected="true">{{ $t('streamPages.movie') }}</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button id="pills-video-tab" class="nav-link" data-bs-toggle="pill" data-bs-target="#pills-video" type="button" role="tab" aria-controls="pills-video" aria-selected="false" tabindex="-1">{{ $t('streamPages.video') }}</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button id="pills-episode-tab" class="nav-link" data-bs-toggle="pill" data-bs-target="#pills-episode" type="button" role="tab" aria-controls="pills-episode" aria-selected="false" tabindex="-1">{{ $t('streamKeyword.episodes') }}</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="4" sm="3" lg="2">
                    <div class="d-flex justify-content-md-end mb-md-0 mb-1">
                      <button type="button" class="manage_playlist btn btn-link" data-bs-toggle="modal" data-bs-target="#creatplaylistModal">
                        <span class="h-100 w-100 d-block" data-bs-toggle="tooltip" data-bs-placement="top" :data-bs-title="$t('streamTooltip.playlist')"> {{ $t('streamButtons.add_playlist') }} </span>
                      </button>

                      <div id="creatplaylistModal" class="modal fade view-more-data-modal edit-profile-modal" tabindex="-1" aria-modal="true" role="dialog">
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 id="exampleModalLabelplaylist" class="modal-title">{{ $t('streamPlaylist.create_playlist') }}</h5>
                              <button type="button" class="btn-close me-0" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body pt-0">
                              <form id="st_creat_playlist">
                                <input id="st_playlist_id" type="hidden" value="" />
                                <div class="form-group mb-4">
                                  <label class="form-label">{{ $t('streamPlaylist.playlist_title') }}</label>
                                  <span class="text-danger">*</span>
                                  <input id="st_playlist_title" class="form-control" type="text" value="" />
                                </div>
                                <div class="form-group playlist-select mb-4">
                                  <label class="form-label">{{ $t('streamPlaylist.select_playlist_type') }}</label>
                                  <span class="text-danger">*</span>
                                  <select name="movieselect" class="form-control movie-select select2-basic-single js-states">
                                    <option value="1">{{ $t('streamPages.movie') }}</option>
                                    <option value="2">{{ $t('streamPages.video') }}</option>
                                    <option value="3">{{ $t('streamKeyword.episodes') }}</option>
                                  </select>
                                </div>
                                <div class="iq-button">
                                  <button type="button" class="btn btn-primary text-capitalize position-relative rounded-3" data-bs-toggle="modal" data-bs-target="#addNewPlaylist">
                                    <span class="button-text">{{ $t('streamPlaylist.create_playlist') }}</span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-col>
                </b-row>

                <!-- Playlist Tab Content -->
                <div id="pills-tabContent" class="tab-content">
                  <div id="pills-movie" class="tab-pane fade active show" role="tabpanel" tabindex="0" aria-labelledby="pills-movie-tab">
                    <b-row class="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                      <b-col>
                        <ProfileCard :newplaylist-page="true" category-number="4" :movie-category="$t('streamPages.movie')" movie-type="streamPlaylist.playlist_movie_90s_throwback" profile-card-image="media/migration.webp" />
                      </b-col>
                      <b-col>
                        <ProfileCard :newplaylist-page="true" category-number="3" :movie-category="$t('streamPages.movie')" movie-type="streamTag.action" profile-card-image="media/jumanjj.webp" />
                      </b-col>
                      <b-col>
                        <ProfileCard :newplaylist-page="true" category-number="3" :movie-category="$t('streamPages.movie')" movie-type="streamPlaylist.playlist_movie_blockbuster_trt" profile-card-image="media/chosfies.webp" />
                      </b-col>
                      <b-col>
                        <ProfileCard :newplaylist-page="true" category-number="2" :movie-category="$t('streamPages.movie')" movie-type="streamBlogCategory.drama" profile-card-image="media/Bumblebee.webp" />
                      </b-col>
                      <b-col>
                        <ProfileCard :newplaylist-page="true" category-number="1" :movie-category="$t('streamPages.movie')" movie-type="streamTag.horror" profile-card-image="media/venom.webp" />
                      </b-col>
                      <b-col v-show="showMore">
                        <ProfileCard :newplaylist-page="true" category-number="1" :movie-category="$t('streamPages.movie')" movie-type="streamPlaylist.road_trip_movies" profile-card-image="media/rabbit.webp" />
                      </b-col>
                      <b-col v-show="showMore">
                        <ProfileCard :newplaylist-page="true" category-number="2" :movie-category="$t('streamPages.movie')" movie-type="streamPlaylist.romantic" profile-card-image="media/yoshi.webp" />
                      </b-col>
                    </b-row>
                    <div class="text-center mt-4" v-if="!showMore">
                      <div class="iq-button">
                        <a href="javascript:void(0)" class="btn btn-primary text-capitalize position-relative load-more-btn rounded-3" @click="showMore = true">
                          <span class="button-text">{{ $t('streamButtons.load_more') }}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div id="pills-tvshow" class="tab-pane fade" role="tabpanel" tabindex="0">
                    <b-row class="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                      <p class="text-center w-100">{{ $t('streamPlaylist.no_playlist_available') }}</p>
                    </b-row>
                  </div>

                  <div id="pills-video" class="tab-pane fade" role="tabpanel" tabindex="0" aria-labelledby="pills-video-tab">
                    <b-row class="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                      <b-col>
                        <ProfileCard :newplaylist-page="true" category-number="3" :movie-category="$t('streamPages.video')" movie-type="streamPlaylist.playlist_video_chill_relax" profile-card-image="media/krishna.webp" />
                      </b-col>
                      <b-col>
                        <ProfileCard :newplaylist-page="true" category-number="2" :movie-category="$t('streamPages.video')" movie-type="streamPlaylist.playlist_video_love_animals" profile-card-image="media/kung-fu-panda.webp" />
                      </b-col>
                    </b-row>
                  </div>

                  <div id="pills-episode" class="tab-pane fade" role="tabpanel" tabindex="0" aria-labelledby="pills-episode-tab">
                    <b-row class="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                      <b-col>
                        <ProfileCard :newplaylist-page="true" category-number="2" :movie-category="$t('streamKeyword.episodes')" movie-type="streamPlaylist.playlist_episode_unlimited" profile-card-image="media/minions-2.webp" />
                      </b-col>
                      <b-col>
                        <ProfileCard :newplaylist-page="true" category-number="1" :movie-category="$t('streamKeyword.episodes')" movie-type="streamPlaylist.playlist_episode_radhe_krishna" profile-card-image="media/krishna.webp" />
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </div>
            </div>
            <div id="watchlist-tab" class="tab-pane fade" role="tabpanel">
              <b-col md="12">
                <div class="border-bottom mb-5 watchlist-tab">
                  <div id="item-nav">
                    <div id="object-nav" class="item-list-tabs no-ajax css_prefix-tab-lists">
                      <!-- Watchlist Tabs -->
                      <ul id="pills-tab" class="nav nav-underline data-search-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button id="pills-movie-tab" class="nav-link active" data-bs-toggle="pill" data-bs-target="#pills-movie1" type="button" role="tab" aria-controls="pills-movie1" aria-selected="true">{{ $t('streamPages.movie') }}</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button id="pills-video-tab" class="nav-link" data-bs-toggle="pill" data-bs-target="#pills-video1" type="button" role="tab" aria-controls="pills-video1" aria-selected="false" tabindex="-1">{{ $t('streamPages.video') }}</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button id="pills-tvshow-tab" class="nav-link" data-bs-toggle="pill" data-bs-target="#pills-tvshow1" type="button" role="tab" aria-controls="pills-tvshow1" aria-selected="false" tabindex="-1">{{ $t('streamPages.tv_show') }}</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button id="pills-episode-tab" class="nav-link" data-bs-toggle="pill" data-bs-target="#pills-episode1" type="button" role="tab" aria-controls="pills-episode1" aria-selected="false" tabindex="-1">{{ $t('streamKeyword.episodes') }}</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Playlist Tab Content -->
                <div id="pills-tabContent-watch" class="tab-content">
                  <div id="pills-movie1" class="tab-pane fade active show" role="tabpanel" tabindex="0" aria-labelledby="pills-movie-tab">
                    <b-row class="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                      <b-col>
                        <WatchlistDetailCard card-image="media/gameofhero.webp" movie-name="streamMovies.game_of_heros" />
                      </b-col>
                      <b-col>
                        <WatchlistDetailCard card-image="media/rabbit.webp" movie-name="streamMovies.rabbit" />
                      </b-col>
                      <b-col>
                        <WatchlistDetailCard card-image="media/migration.webp" movie-name="streamMovies.migration" />
                      </b-col>
                      <b-col>
                        <WatchlistDetailCard card-image="media/krishna.webp" movie-name="streamMovies.krishna" />
                      </b-col>
                      <b-col>
                        <WatchlistDetailCard card-image="media/jumanjj.webp" movie-name="streamMovies.jumanji" />
                      </b-col>
                      <b-col>
                        <WatchlistDetailCard card-image="media/yoshi.webp" movie-name="streamMovies.yoshi" />
                      </b-col>
                      <b-col>
                        <WatchlistDetailCard card-image="media/kung-fu-panda.webp" movie-name="streamMovies.kung_fu_panda" />
                      </b-col>
                      <b-col>
                        <WatchlistDetailCard card-image="media/the-hunter.webp" movie-name="streamMovies.the_hunter" />
                      </b-col>
                    </b-row>
                  </div>

                  <div id="pills-video1" class="tab-pane fade" role="tabpanel" tabindex="0" aria-labelledby="pills-video-tab">
                    <b-row class="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                      <b-col>
                        <WatchlistDetailCard card-image="media/toddler.webp" movie-name="streamMovies.toddler" />
                      </b-col>
                    </b-row>
                  </div>

                  <div id="pills-tvshow1" class="tab-pane fade" role="tabpanel" tabindex="0">
                    <b-row class="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                      <b-col>
                        <WatchlistDetailCard card-image="media/the-first-of-us.webp" movie-name="streamEpisode.episode11" />
                      </b-col>
                      <b-col>
                        <WatchlistDetailCard card-image="media/migration.webp" movie-name="streamEpisode.episode7" />
                      </b-col>
                      <b-col>
                        <WatchlistDetailCard card-image="media/spiderman.webp" movie-name="streamEpisode.episode39" />
                      </b-col>
                      <b-col>
                        <WatchlistDetailCard card-image="media/minions.webp" movie-name="streamMovies.minions" />
                      </b-col>
                      <b-col>
                        <WatchlistDetailCard card-image="media/pirates-ofdayones-orignal.webp" movie-name="streamMovies.pirates_of_day_one" />
                      </b-col>
                      <b-col>
                        <WatchlistDetailCard card-image="media/assassins-creed.webp" movie-name="streamEpisode.episode55" />
                      </b-col>
                    </b-row>
                  </div>

                  <div id="pills-episode1" class="tab-pane fade" role="tabpanel" tabindex="0" aria-labelledby="pills-episode-tab">
                    <b-row class="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                      <p class="text-center w-100">{{ $t('streamPlaylist.no_watchlist_available') }}</p>
                    </b-row>
                  </div>
                </div>
              </b-col>
            </div>
            <div id="notification-tab" class="tab-pane fade" role="tabpanel">
              <div class="d-flex align-items-center gap-3 justify-content-between flex-sm-row flex-column-reverse border-bottom mb-5">
                <div id="item-nav1">
                  <div id="object-nav1" class="item-list-tabs no-ajax css_prefix-tab-lists">
                    <ul id="notification-tab1" class="nav nav-underline data-search-tab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button id="unread-tab" class="nav-link active" data-bs-toggle="tab" data-bs-target="#unread" type="button" role="tab" aria-controls="unread" aria-selected="true">{{ $t('streamKeyword.unread') }}</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button id="read-tab" class="nav-link" data-bs-toggle="tab" data-bs-target="#read" type="button" role="tab" aria-controls="read" aria-selected="false" tabindex="-1">{{ $t('streamKeyword.read') }}</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="notification-tabContent" class="tab-content">
                <!-- Unread Notifications Tab -->
                <div id="unread" class="tab-pane fade show active" role="tabpanel" tabindex="0" aria-labelledby="unread-tab">
                  <ul class="notification-list m-0 p-0">
                    <NotificationItem
                      v-for="(item, idx) in ProfilePage_NotificationUnread"
                      :key="idx"
                      :notification-image="item.image"
                      :title="Array.isArray(item.title) ? item.title.map($t).join(' ') : $t(item.title)"
                      :days="$t(item.days)"
                    />
                  </ul>
                </div>

                <!-- Read Notifications Tab -->
                <div id="read" class="tab-pane fade" role="tabpanel" tabindex="0" aria-labelledby="read-tab">
                  <form>
                    <ul class="notification-list p-0 m-0">
                      <NotificationItem
                        v-for="(item, idx) in ProfilePage_Notificationread"
                        :key="idx"
                        :notification-image="item.image"
                        :title="Array.isArray(item.title) ? item.title.map($t).join(' ') : $t(item.title)"
                        :days="$t(item.days)"
                      />
                    </ul>
                  </form>
                </div>
              </div>
            </div>
            <div id="membership-tab" class="tab-pane fade" role="tabpanel">
              <div class="pmpro">
                <p class="error-message">{{ $t('streamPlaylist.no_active_membership') }}</p>
                <section class="st-pmp-section mt-5">
                  <h4 class="pmpro_section_title">{{ $t('streamShop.order_history') }}</h4>
                  <div class="pmpro_card">
                    <table class="pmpro_table pmpro_table_orders">
                      <thead>
                        <tr>
                          <th class="st-pmp-table-order">{{ $t('streamKeyword.date') }}</th>
                          <th class="st-pmp-table-order">{{ $t('streamKeyword.level') }}</th>
                          <th class="st-pmp-table-order">{{ $t('streamKeyword.total') }}</th>
                          <th class="st-pmp-table-order">{{ $t('streamKeyword.status') }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="pmpro_table_order-51311C6265">
                          <th class="pmpro_table_order-date" data-title="Date">
                            <router-link :to="{ path: '/membership-invoice' }"> February 18, 2025 </router-link>
                          </th>
                          <td class="pmpro_table_order-level" data-title="Level">{{ $t('streamPricing.basic_plan') }}</td>
                          <td class="pmpro_table_order-amount" data-title="Amount">$10.00</td>
                          <td class="pmpro_table_order-status" data-title="Status">
                            <span class="pmpro_tag pmpro_tag-success"> {{ $t('streamPricing.paid') }} </span>
                          </td>
                        </tr>
                        <tr id="pmpro_table_order-A467E41A35">
                          <th class="pmpro_table_order-date" data-title="Date">
                            <router-link :to="{ path: '/membership-invoice' }"> February 10, 2025 </router-link>
                          </th>
                          <td class="pmpro_table_order-level" data-title="Level">{{ $t('streamPricing.premium_plan') }}</td>
                          <td class="pmpro_table_order-amount" data-title="Amount">$180.00</td>
                          <td class="pmpro_table_order-status" data-title="Status">
                            <span class="pmpro_tag pmpro_tag-success"> {{ $t('streamPricing.paid') }} </span>
                          </td>
                        </tr>
                        <tr id="pmpro_table_order-3B9A37110A">
                          <th class="pmpro_table_order-date" data-title="Date">
                            <router-link :to="{ path: '/membership-invoice' }"> February 6, 2025 </router-link>
                          </th>
                          <td class="pmpro_table_order-level" data-title="Level">{{ $t('streamPricing.basic_plan') }}</td>
                          <td class="pmpro_table_order-amount" data-title="Amount">$10.00</td>
                          <td class="pmpro_table_order-status" data-title="Status">
                            <span class="pmpro_tag pmpro_tag-success"> {{ $t('streamPricing.paid') }} </span>
                          </td>
                        </tr>
                        <tr id="pmpro_table_order-68B3C8559C">
                          <th class="pmpro_table_order-date" data-title="Date">
                            <router-link :to="{ path: '/membership-invoice' }"> February 6, 2025 </router-link>
                          </th>
                          <td class="pmpro_table_order-level" data-title="Level">{{ $t('streamPricing.basic_plan') }}</td>
                          <td class="pmpro_table_order-amount" data-title="Amount">$10.00</td>
                          <td class="pmpro_table_order-status" data-title="Status">
                            <span class="pmpro_tag pmpro_tag-success"> {{ $t('streamPricing.paid') }} </span>
                          </td>
                        </tr>
                        <tr id="pmpro_table_order-FB6969474C">
                          <th class="pmpro_table_order-date" data-title="Date">
                            <router-link :to="{ path: '/membership-invoice' }"> January 29, 2025 </router-link>
                          </th>
                          <td class="pmpro_table_order-level" data-title="Level">{{ $t('streamPricing.standard_plan') }}</td>
                          <td class="pmpro_table_order-amount" data-title="Amount">$79.00</td>
                          <td class="pmpro_table_order-status" data-title="Status">
                            <span class="pmpro_tag pmpro_tag-success"> {{ $t('streamPricing.paid') }} </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- end st-pmp-card-content -->
                </section>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- edit profile modal -->
    </b-container>
  </section>

  <div id="edit-profile-modal" class="modal fade view-more-data-modal edit-profile-modal" tabindex="-1" aria-modal="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header pb-0">
          <h5 id="exampleModalLabelEdit1" class="modal-title">{{ $t('streamButtons.editprofile') }}</h5>
          <button type="button" class="btn-close me-0" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="st-result-msg">
            <div class="st-status-message"></div>
          </div>
          <form>
            <input type="hidden" name="action" value="edit_profile" />
            <input type="hidden" name="user_id" value="12" />
            <input id="is_remove_avtar" type="hidden" name="is_remove_avtar" value="" />

            <input id="edit_profile_nonce" type="hidden" name="edit_profile_nonce" value="ec49b112d5" /><input type="hidden" name="_wp_http_referer" value="/product/wp/streamit/profile/marvin/" />
            <b-row>
              <!-- Avatar Upload Section -->
              <b-col cols="12" class="text-center mb-5">
                <div class="position-relative d-inline-block avtar_image">
                  <img id="profile-picture-preview" src="/assets/images/user/user6.jpg" alt="User Avatar" class="user-image user-profile-image" />

                  <div class="avtar_action">
                    <a id="edit-profile-picture-btn" class="avtar_action-btn">
                      <i class="icon-edit-icon"></i>
                    </a>
                    <a id="remove-profile-picture-btn" class="avtar_action-btn">
                      <i class="icon-trash-icon"></i>
                    </a>
                  </div>
                </div>
              </b-col>

              <!-- First Name Field -->
              <b-col sm="6">
                <div class="form-group mb-3">
                  <label for="first_name" class="form-label">{{ $t('streamAccount.first_name') }}</label>
                  <input id="first_name" type="text" class="form-control" name="first_name" :value="$t('streamProfile.marvin')" required="" />
                </div>
              </b-col>

              <!-- Last Name Field -->
              <b-col sm="6">
                <div class="form-group mb-3">
                  <label for="last_name" class="form-label">{{ $t('streamAccount.last_name') }}</label>
                  <input id="last_name" type="text" class="form-control" name="last_name" :value="$t('streamProfile.mckinney')" required="" />
                </div>
              </b-col>

              <!-- Email Field -->
              <b-col cols="12">
                <div class="form-group mb-0">
                  <label for="user_email" class="form-label">{{ $t('streamAccount.email') }}</label>
                  <input id="user_email" type="email" class="form-control" name="user_email" value="marvin@demo.com" required="" />
                </div>
              </b-col>
            </b-row>

            <!-- Submit Button -->
            <div class="iq-button mt-4 text-end">
              <button class="btn btn-primary text-capitalize position-relative rounded-3">
                <span class="button-text">{{ $t('streamPricing.save') }}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from 'vue';
import { Tooltip } from 'bootstrap';
import ProfileCard from '../../components/cards/ProfileCard.vue';
import NotificationItem from '../../components/widgets/NotificationItem.vue';
import WatchlistDetailCard from '../../components/widgets/WatchlistDetailCard.vue';
import { ProfilePage_NotificationUnread, ProfilePage_Notificationread } from '../../StaticData/data';

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach((el) => new Tooltip(el));
}); 

const showMore = ref(false);

</script>
