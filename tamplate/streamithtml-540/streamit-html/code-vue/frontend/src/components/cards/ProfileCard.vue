<template>
  <div v-if="newplaylistPage" class="playlist-card">
    <!-- Playlist Image -->
    <div class="image-box">
      <router-link to="/playlist-detail">
        <img :src="generateImgPath(`/assets/images/${profileCardImage}`)" alt="90s Throwback"
          class="img-fluid object-cover w-100 border-0" />
      </router-link>
      <router-link to="/playlist-detail" class="play-icon">
        <i class="icon-play-button"></i>
      </router-link>
    </div>
    <!-- Playlist Content -->
    <div class="content-part">
      <div class="d-flex justify-content-between gap-2 mb-1">
        <h5 class="my-0 text-capitalize">{{ $t(movieType) }}</h5>
        <div class="dropdown">
          <button class="btn p-0 border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="icon-three-dots-vertical"></i>
          </button>
          <ul class="dropdown-menu border">
            <li><a data-playlist-name="90s Throwback" data-playlist-id="14" data-post-type="movie"
                class="manage_playlist dropdown-item update_user_playlist">Update</a></li>
            <li><a data-playlist_id="14" data-post-type="movie" class="dropdown-item delete_user_playlist">Delete</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="small mb-1">
        <small>
          {{ categoryNumber }} {{ movieCategory }}
        </small>
      </div>
      <router-link to="/playlist-detail" class="btn btn-link btn-playlist p-0 border-radius-0">{{$t('streamKeyword.view')}} {{$t('streamPlaylist.playlist')}}</router-link>
    </div>
  </div>

  <div v-else class="">
    <img :src="image" class="img-fluid w-100 mastermind-team-img" alt="team" loading="lazy" />
  </div>
  <div class="box-content">
    <h6 class="title-box">{{ designation }}</h6>
    <h5 class="title-box-name">{{ name }}</h5>
  </div>
</template>
<script setup>
import { generateImgPath } from '../../StaticData/data';
defineProps({
  name: { type: String, default: '' },
  designation: { type: String, default: '' },
  image: { type: String, default: '' },
  movieType: { type: String, default: '' },
  profileCardImage: { type: String, default: '' },
  movieCategory: { type: String, default: '' },
  newplaylistPage: { type: Boolean, default: false },
  categoryNumber: { type: String, default: '' },
});
</script>
