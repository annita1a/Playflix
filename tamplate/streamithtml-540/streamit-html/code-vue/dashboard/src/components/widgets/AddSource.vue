<template>
  <button class="btn btn-primary custom-add-button" @click="addSource">{{$t('addpage.add-source')}}</button>

  <div id="source-container" class="source-container">
    <div v-for="(source, index) in sources" :key="source.id" class="streamit_source">
      <div class="d-flex justify-content-between align-items-center flex-wrap rounded-3">
        <h3 class="mb-0 fw-semibold">{{$t('addpage.source')}} {{ index + 1 }}</h3>
        <div class="d-flex flex-shrink-0 gap-2 align-items-center custom-source-font">
          <a href="#" @click.prevent="removeSource(index)">{{$t('addpage.remove')}}</a>
          <div class="movie_source_toggle handlediv" title="Click to toggle" @click="toggleSource(index)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </div>
          <strong class="source_name"></strong>
        </div>
      </div>

      <div v-if="source.show" class="streamit_source_data streamit-metabox-content pt-3 mt-3 pb-3">
        <!-- FORM SECTION -->
        <b-row>
          <b-col lg="6">
            <div class="form-group">
              <label class="form-label">{{$t('addpage.name')}}</label>
              <input v-model="source.name" type="text" class="form-control" :placeholder="$t('addpage.enter-source-name-movie')" />
            </div>
            <div class="form-group">
              <label class="form-label">{{$t('addpage.quality')}}</label>
              <input v-model="source.quality" type="text" class="form-control" :placeholder="$t('addpage.enter-source-quality-movie')" />
            </div>
          </b-col>

          <b-col lg="6">
            <div class="form-group">
              <label class="form-label">{{$t('addpage.choose_method')}}</label>
              <select v-model="source.method" class="form-control">
                <option>Embed Movie</option>
                <option>Movie URL</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">{{$t('addpage.embed-movie')}}</label>
              <textarea v-model="source.embed" class="form-control" rows="7" :placeholder="$t('addpage.enter-the-embed-content-movie')"></textarea>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="6">
            <div class="form-group">
              <label class="form-label">{{$t('addpage.language')}}</label>
              <input v-model="source.language" type="text" class="form-control" :placeholder="$t('addpage.enter-languade')" />
            </div>
            <div class="form-group">
              <label class="form-label">{{$t('addpage.date_added')}}</label>
              <input v-model="source.dateAdded" type="text" class="form-control" :placeholder="$t('addpage.enter-date')" />
            </div>
          </b-col>

          <b-col lg="6">
            <div class="form-group">
              <label class="form-label">{{$t('addpage.player')}}</label>
              <input v-model="source.player" type="text" class="form-control" :placeholder="$t('addpage.enter-player')" />
            </div>
            <div class="form-group">
              <label class="form-label">{{$t('addpage.download_url')}}</label>
              <input v-model="source.downloadUrl" type="text" class="form-control" :placeholder="$t('addpage.enter-download-url')" />
            </div>
          </b-col>
        </b-row>
        <!-- END FORM SECTION -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

// source tab
let idCounter = 1;

const sources = ref([]);

function addSource() {
  sources.value.push({
    id: idCounter++,
    name: '',
    quality: '',
    method: 'Embed Movie',
    embed: '',
    language: '',
    dateAdded: '',
    player: '',
    downloadUrl: '',
    show: true,
  });
}

function removeSource(index) {
  sources.value.splice(index, 1);
}

function toggleSource(index) {
  sources.value[index].show = !sources.value[index].show;
}
</script>
