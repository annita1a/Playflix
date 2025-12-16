<template>
    <section class="section-padding ">
        <div class="playlist-detail-page">
            <b-container fluid>
                <b-row class="flex-row-reverse">
                    <b-col xxl="3" xl="4" lg="5">
                        <div class="card border-0">
                            <div
                                class="card-header pb-3 mb-3 border-bottom d-flex align-items-center justify-content-between gap-1">
                                <h5 class="m-0">{{ $t('streamPlaylist.90s_throwback') }}</h5>
                                <small>
                                    1/4 </small>
                            </div>

                            <div class="card-body px-0 pt-0 pb-3">
                                <div class="playlist-data">
                                    <div class="playlist-data-card active">
                                        <div class="playlist-data-card-image">
                                            <a href="#">
                                                <img src="/assets/images/media/gameofhero.webp" alt="Game of Heros"
                                                    class="img-fluid object-cover w-100 border-0">
                                            </a>
                                        </div>
                                        <div class="playlist-data-card-content">
                                            <h6 class="mt-0 mb-2 line-count-2 playlist-data-title">
                                                <a href="#">{{ $t('streamMovies.game_of_heros') }}</a>
                                            </h6>
                                            <ul
                                                class="playlist-category list-inline d-flex flex-wrap align-items-center m-0 p-0 column-gap-3 row-gap-1">
                                                <li>
                                                    <i class="icon-eye-2 me-1"></i>1225 {{ $t('streamKeyword.views') }}
                                                </li>
                                                <li>
                                                    2 months ago </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="playlist-data-card">
                                        <div class="playlist-data-card-image">
                                            <a href="#">
                                                <img src="/assets/images/media/rabbit.webp" alt="Rabbit"
                                                    class="img-fluid object-cover w-100 border-0">
                                            </a>
                                        </div>
                                        <div class="playlist-data-card-content">
                                            <h6 class="mt-0 mb-2 line-count-2 playlist-data-title">
                                                <a href="#">{{ $t('streamMovies.rabbit') }}</a>
                                            </h6>
                                            <ul
                                                class="playlist-category list-inline d-flex flex-wrap align-items-center m-0 p-0 column-gap-3 row-gap-1">
                                                <li>
                                                    <i class="icon-eye-2 me-1"></i>902 {{ $t('streamKeyword.views') }}
                                                </li>
                                                <li>
                                                    11 years ago </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="playlist-data-card ">
                                        <div class="playlist-data-card-image">
                                            <a href="#">
                                                <img src="/assets/images/media/migration.webp" alt="Migration"
                                                    class="img-fluid object-cover w-100 border-0">
                                            </a>
                                        </div>
                                        <div class="playlist-data-card-content">
                                            <h6 class="mt-0 mb-2 line-count-2 playlist-data-title">
                                                <a href="#">{{ $t('streamMovies.migration') }}</a>
                                            </h6>
                                            <ul
                                                class="playlist-category list-inline d-flex flex-wrap align-items-center m-0 p-0 column-gap-3 row-gap-1">
                                                <li>
                                                    <i class="icon-eye-2 me-1"></i>234 {{ $t('streamKeyword.views') }}
                                                </li>
                                                <li>
                                                    11 years ago </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="playlist-data-card ">
                                        <div class="playlist-data-card-image">
                                            <a href="#">
                                                <img src="/assets/images/media/joker.webp" alt="joker"
                                                    class="img-fluid object-cover w-100 border-0">
                                            </a>
                                        </div>
                                        <div class="playlist-data-card-content">
                                            <h6 class="mt-0 mb-2 line-count-2 playlist-data-title">
                                                <a href="#">{{ $t('streamMovies.joker') }}</a>
                                            </h6>
                                            <ul
                                                class="playlist-category list-inline d-flex flex-wrap align-items-center m-0 p-0 column-gap-3 row-gap-1">
                                                <li>
                                                    <i class="icon-eye-2 me-1"></i>181 {{ $t('streamKeyword.views') }}
                                                </li>
                                                <li>
                                                    11 years ago </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-col>

                    <b-col xxl="9" xl="8" lg="7" class="mt-lg-0 mt-4">
                        <div class="playlist-main-banner position-relative mb-3">
                            <!-- Video.js Player -->
                            <VideoPlayer :options="playerOption"></VideoPlayer>

                        </div>
                        <div id="streamit_player_container"
                            class="trending-info d-flex justify-content-between align-items-center gap-4">
                            <nuxt-link :to="{ name: 'movies-detail' }">
                                <h4 class="my-2 fw-bold">{{ $t('streamMovies.game_of_heros') }}</h4>
                            </nuxt-link>
                            <ul class="actions-playlist list-inline my-2 p-0 d-flex gap-2 justify-content-md-end">
                                <li>
                                    <button id="like-toggle" type="button" class="btn btn-secondary border action-btn"
                                        @click="toggleLike">
                                        <span id="like-movies">
                                            <span class="h-100 w-100 d-block" data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                :data-bs-title="$t(isLiked ? 'streamSocial.unlike' : 'streamSocial.like')">
                                                <i :class="[isLiked ? 'ph-fill' : 'ph', 'ph-heart', 'heart-icon']"></i>
                                            </span>
                                        </span>
                                    </button>
                                </li>
                                <li class="position-relative share-button dropend dropdown">
                                    <button type="button" class="btn btn-secondary border action-btn"
                                        data-bs-toggle="modal" data-bs-target="#shareModal">
                                        <span class="h-100 w-100 d-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" :data-bs-title="$t('streamSocial.share')">
                                            <i class="ph ph-share-network"></i>
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </section>
    <ShareModal />
</template>
<script setup>
import { ref } from 'vue';
import ShareModal from '../components/widgets/ShareModal.vue';
import VideoPlayer from '../components/plugins/VideoPlayer.vue';
import { Tooltip } from 'bootstrap';

const isLiked = ref(false)

function toggleLike() {
    isLiked.value = !isLiked.value
}

const playerOption = ref({
    autoplay: true,
    controls: true,
    muted: true,
    loop: true,
    preload: 'auto',
    techOrder: ['youtube'],
    sources: [
        {
            src: 'https://www.youtube.com/watch?v=X8c8EXPfqkI',
            type: 'video/youtube',
        },
    ],
    youtube: {
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        autoplay: 1,
    },
    fluid: true,
    poster: '/assets/images/media/gameofhero.webp',
});

onMounted(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((el) => new Tooltip(el));
});
</script>
