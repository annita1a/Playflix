<template>
  <!-- Select Playlist Modal -->
  <div id="playlistModal" class="modal fade view-more-data-modal" tabindex="-1" aria-modal="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered share-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{$t('streamPlaylist.select_playlist')}}</h5>
          <button type="button" class="btn-close me-0" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body py-0">
          <div class="playlist-modal-content">
            <div
              v-for="playlist in playlists"
              :key="playlist.id"
              class="form-check"
            >
              <input
                :id="playlist.id"
                v-model="playlist.checked"
                class="st_manage_playlist form-check-input"
                type="checkbox"
                :data-playlist_id="playlist.id"
                :data-post_id="postId"
                :data-post_type="postType"
              />
              <label :for="playlist.id">{{ $t(playlist.title) }}</label>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0 p-4">
          <button
            type="button"
            class="playlist-action-btn btn btn-secondary border"
            data-bs-toggle="modal"
            data-bs-target="#creatplaylistModal"
          >
            {{$t('streamPlaylist.create_playlist')}}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Create Playlist Modal -->
  <div id="creatplaylistModal" class="modal fade view-more-data-modal" tabindex="-1" aria-modal="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered share-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{$t('streamPlaylist.create_playlist')}}</h5>
          <button type="button" class="btn-close me-0" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pt-0">
          <form @submit.prevent="createPlaylist">
            <input id="st_playlist_post_type" type="hidden" value="movie" />
            <div class="form-group mb-4">
              <label class="form-label">{{$t('streamPlaylist.playlist_title')}}</label>
              <span class="text-danger">*</span>
              <input
                v-model="newPlaylistTitle"
                class="form-control"
                type="text"
                required
              />
            </div>
            <div class="iq-button d-flex justify-content-end">
              <button type="submit" class="btn btn-secondary border position-relative">
                <span class="button-text">{{$t('streamPlaylist.create_playlist')}}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const postId = 32;
const postType = 'movie';

const playlists = ref([
  { id: 14, title: 'streamPlaylist.playlist_movie_90s_throwback', checked: false },
  { id: 11, title: 'streamTag.action', checked: true },
  { id: 10, title: 'streamPlaylist.blockbuster', checked: true },
  { id: 9, title: 'streamBlogCategory.drama', checked: false },
  { id: 13, title: 'streamTag.horror', checked: false },
  { id: 15, title: 'streamPlaylist.road_trip_movies', checked: false },
  { id: 12, title: 'streamPlaylist.romantic', checked: false },
]);

const newPlaylistTitle = ref('');

function createPlaylist() {
  if (newPlaylistTitle.value.trim()) {
    playlists.value.push({
      id: Date.now(),
      title: newPlaylistTitle.value,
      checked: false,
    });
    newPlaylistTitle.value = '';
    // Optionally, close the modal here using Bootstrap's JS API
    const modal = window.bootstrap?.Modal.getInstance(document.getElementById('creatplaylistModal'));
    if (modal) modal.hide();
  }
}
</script>