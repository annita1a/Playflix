<template>
    <section class="section-padding">
        <b-container fluid>
            <div class="play-lists">
                <b-row class="g-2 column-reverce align-items-center border-bottom playlist-bottom-margin">
                    <b-col cols="8" sm="9" lg="10">
                        <div id="item-nav">
                            <div id="object-nav" class="item-list-tabs no-ajax css_prefix-tab-lists">

                                <!-- Playlist Tabs -->
                                <ul id="pills-tab" class="nav nav-underline data-search-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button id="pills-movie-tab" class="nav-link active" data-bs-toggle="pill"
                                            data-bs-target="#pills-movie" type="button" role="tab"
                                            aria-controls="pills-movie" aria-selected="true">
                                            {{ $t('streamPages.movie') }} </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button id="pills-video-tab" class="nav-link " data-bs-toggle="pill"
                                            data-bs-target="#pills-video" type="button" role="tab"
                                            aria-controls="pills-video" aria-selected="false" tabindex="-1">
                                            {{ $t('streamPages.video') }} </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button id="pills-episode-tab" class="nav-link " data-bs-toggle="pill"
                                            data-bs-target="#pills-episode" type="button" role="tab"
                                            aria-controls="pills-episode" aria-selected="false" tabindex="-1">
                                            {{ $t('streamKeyword.episode') }} </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </b-col>
                    <b-col cols="4" sm="3" lg="2">
                        <div class="d-flex justify-content-end">
                            <button type="button" class="manage_playlist action-btn btn btn-link" data-bs-toggle="modal"
                                data-bs-target="#creatplaylistModal">
                                <span class="h-100 w-100 d-block" data-bs-toggle="tooltip" data-bs-placement="top"
                                    :data-bs-title="$t('streamPages.playlist')">
                                    {{ $t('streamButtons.add_playlist') }} </span>
                            </button>

                            <div id="creatplaylistModal" class="modal fade view-more-data-modal edit-profile-modal"
                                tabindex="-1" aria-modal="true" role="dialog">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 id="createPlaylist" class="modal-title">
                                                {{ $t('streamButtons.create_playlist') }}
                                            </h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body pt-0">
                                            <form id="st_creat_playlist" action="#" method="post">
                                                <input id="st_playlist_id" type="hidden" value="">
                                                <div class="form-group mb-4">
                                                    <label
                                                        class="form-label">{{ $t('streamPlaylist.playlist_title') }}</label>
                                                    <span class="text-danger">*</span>
                                                    <input id="st_playlist_title" class="form-control" type="text"
                                                        value="">
                                                </div>
                                                <div class="form-group playlist-select mb-4 my-account-select">
                                                    <label
                                                        class="form-label">{{ $t('streamPlaylist.select_playlist_type') }}</label>
                                                    <span class="text-danger">*</span>
                                                    <select ref="selectElement" name="movieselect"
                                                        class="form-control movie-select select2-basic-single js-states"
                                                        :tabindex="tabindex">
                                                        <option value="1">{{ $t('streamPages.movie') }}</option>
                                                        <option value="2">{{ $t('streamPages.video') }}</option>
                                                        <option value="3">{{ $t('streamKeyword.episode') }}</option>
                                                    </select>
                                                </div>
                                                <div class="iq-button">
                                                    <button type="button"
                                                        class="btn btn-primary position-relative rounded-3"
                                                        data-bs-toggle="modal" data-bs-target="#addNewPlaylist">
                                                        <span
                                                            class="button-text">{{ $t('streamButtons.create_playlist') }}</span>
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
                    <div id="pills-movie" class="tab-pane fade active show" role="tabpanel" tabindex="0"
                        aria-labelledby="pills-movie-tab">
                        <b-row
                            class="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 ">
                            <b-col>
                                <ProfileCard :newplaylist-page="true" category-number="4"
                                    :movie-category="$t('streamPages.movie')"
                                    movie-type="streamPlaylist.90s_throwback"
                                    profile-card-image="media/migration.webp" />
                            </b-col>
                            <b-col>
                                <ProfileCard :newplaylist-page="true" category-number="3"
                                    :movie-category="$t('streamPages.movie')" movie-type="streamTag.action"
                                    profile-card-image="media/jumanjj.webp" />
                            </b-col>
                            <b-col>
                                <ProfileCard :newplaylist-page="true" category-number="3"
                                    :movie-category="$t('streamPages.movie')" movie-type="streamBlogCategory.drama"
                                    profile-card-image="media/chosfies.webp" />
                            </b-col>
                            <b-col>
                                <ProfileCard :newplaylist-page="true" category-number="2"
                                    :movie-category="$t('streamPages.movie')" movie-type="streamBlogCategory.drama"
                                    profile-card-image="media/bumblebee.webp" />
                            </b-col>
                            <b-col>
                                <ProfileCard :newplaylist-page="true" category-number="1"
                                    :movie-category="$t('streamPages.movie')" movie-type="streamTag.horror"
                                    profile-card-image="media/venom.webp" />
                            </b-col>
                            <b-col>
                                <ProfileCard :newplaylist-page="true" category-number="1"
                                    :movie-category="$t('streamPages.movie')"
                                    movie-type="streamPlaylist.road_trip_movies"
                                    profile-card-image="media/rabbit.webp" />
                            </b-col>
                            <b-col>
                                <ProfileCard :newplaylist-page="true" category-number="2"
                                    :movie-category="$t('streamPages.movie')"
                                    movie-type="streamPlaylist.romantic"
                                    profile-card-image="media/yoshi.webp" />
                            </b-col>
                        </b-row>
                    </div>

                    <div id="pills-tvshow" class="tab-pane fade" role="tabpanel" tabindex="0">
                        <b-row
                            class="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 ">
                            <p class="text-center w-100">{{ $t('streamPlaylist.no_playlist_available') }}</p>
                        </b-row>
                    </div>

                    <div id="pills-video" class="tab-pane fade" role="tabpanel" tabindex="0"
                        aria-labelledby="pills-video-tab">
                        <b-row
                            class="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 ">
                            <b-col>
                                <ProfileCard :newplaylist-page="true" category-number="3"
                                    :movie-category="$t('streamPages.video')" movie-type="streamPlaylist.playlist_video_chill_relax"
                                    profile-card-image="media/krishna.webp" />
                            </b-col>
                            <b-col>
                                <ProfileCard :newplaylist-page="true" category-number="2"
                                    :movie-category="$t('streamPages.video')" movie-type="streamPlaylist.playlist_video_love_animals"
                                    profile-card-image="media/kung-fu-panda.webp" />
                            </b-col>
                        </b-row>
                    </div>

                    <div id="pills-episode" class="tab-pane fade" role="tabpanel" tabindex="0"
                        aria-labelledby="pills-episode-tab">
                        <b-row
                            class="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 ">
                            <b-col>
                                <ProfileCard :newplaylist-page="true" category-number="2"
                                    :movie-category="$t('streamKeyword.episode')" movie-type="streamPlaylist.playlist_episode_unlimited"
                                    profile-card-image="media/minions.webp" />
                            </b-col>
                            <b-col>
                                <ProfileCard :newplaylist-page="true" category-number="1"
                                    :movie-category="$t('streamKeyword.episode')"
                                    movie-type="streamMovies.krishna"
                                    profile-card-image="media/krishna.webp" />
                            </b-col>
                        </b-row>
                    </div>
                </div>
            </div>
        </b-container>
    </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProfileCard from '../components/cards/ProfileCard.vue';
import { Tooltip } from 'bootstrap';
//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("Playlist");
// choise js
import Choices from 'choices.js';

const selectElement = ref(null);
const tabindex = '-1'; // Tab index

onMounted(() => {
    if (selectElement.value) {
        new Choices(selectElement.value, {
            searchEnabled: true,
            shouldSort: true,
        });
    }

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((el) => new Tooltip(el));
});

</script>