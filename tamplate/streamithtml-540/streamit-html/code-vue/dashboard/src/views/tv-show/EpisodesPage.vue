<template>
  <b-row>
    <b-col sm="12">
      <div class="streamit-wraper-table">
        <b-card-header class="d-flex justify-content-between gap-3 flex-wrap align-items-center mb-4">
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative"> {{ $t('sidebar.episodes') }} </span>
          </h2>
          <b-button variant="primary" @click="offcanvasEnd = true"><i class="fa-solid fa-plus me-2"></i>{{ $t('episodemodal.add_episode') }}</b-button>
        </b-card-header>
        <div class="table-view table-space">
          <table id="seasonTable" ref="tableRef1" class="data-tables data-table-one table custom-table movie_table dataTable no-footer">
            <thead>
              <tr class="text-uppercase">
                <th
                  class="sorting sorting_asc"
                  tabindex="0"
                  aria-controls="seasonTable"
                  rowspan="1"
                  colspan="1"
                  aria-sort="ascending"
                  aria-label="
                                
                            : activate to sort column descending">
                  <input type="checkbox" class="form-check-input" />
                </th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Movie: activate to sort column ascending">Movie</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Title: activate to sort column ascending">Title</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Author: activate to sort column ascending">Author</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Date and Time: activate to sort column ascending">Date and Time</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Views: activate to sort column ascending">Views</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Status</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending">Actions</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <b-offcanvas v-model="offcanvasEnd" class="offcanvas-width-80" header-close-class="me-0" :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'">
        <template #header>
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative">
              {{ $t('episodemodal.add_new_episode') }}
            </span>
          </h2>
          <button type="button" class="btn-close" aria-label="Close" @click="offcanvasEnd = false"></button>
        </template>
        <b-form class="section-form">
          <b-row>
            <b-col lg="4">
              <InputField :label="$t('addpage.episode-title')" name="name" type="text" :placeholder="$t('addpage.enter-title-episode')" :is-required="true" />
            </b-col>
            <b-col lg="4">
              <div class="form-group">
                <label class="form-label flex-grow-1">{{ $t('addpage.author') }}</label>
                <select ref="addAuthor" class="form-control select2-basic-multiple" :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddAuthor">
                  <option value="0" selected>Admin</option>
                </select>
              </div>
            </b-col>
            <b-col lg="4">
              <div class="form-group">
                <label class="form-label flex-grow-1">{{ $t('addpage.status') }}</label>
                <select ref="addStatus" class="form-control select2-basic-multiple" :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddStatus">
                  <option value="0">Published</option>
                  <option value="1">Draft</option>
                </select>
              </div>
            </b-col>
          </b-row>

          <b-row class="mb-5">
            <QuillPage :quill-title="$t('addpage.embed-episode-content')" />
          </b-row>

          <b-row>
            <b-col lg="3">
              <UploadImageVideo :upload-image-name="$t('addpage.thumbnail')" />
            </b-col>
            <b-col lg="9">
              <div class="form-group">
                <label class="form-label flex-grow-1" for="Description"> {{ $t('addpage.excerpt') }} </label>
                <textarea id="Description" class="form-control" rows="7" :placeholder="$t('addpage.enter-encerpt-movie')"></textarea>
              </div>
            </b-col>
          </b-row>

          <b-card no-body class="streamit-tabs-card">
            <b-card-body>
              <b-row class="gy-4">
                <!-- Vertical Tab Nav -->
                <b-col lg="3">
                  <div class="streamit-verticle-tab">
                    <div class="nav flex-column nav-pills me-0 me-lg-3 mb-3 mb-md-0 list-inline streamit-tabs" role="tablist" aria-orientation="vertical">
                      <button class="nav-link" :class="{ active: activeTab === 'general' }" @click="activeTab = 'general'">
                        <span>{{ $t('addpage.general') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'sources' }" @click="activeTab = 'sources'">
                        <span>{{ $t('addpage.sources') }}</span>
                      </button>
                      <button class="nav-link" :class="{ active: activeTab === 'additional' }" @click="activeTab = 'additional'">
                        <span>{{ $t('addpage.additional_data') }}</span>
                      </button>
                    </div>
                  </div>
                </b-col>

                <!-- Tab Content -->
                <b-col lg="9" class="edit-tab-content">
                  <div id="streamit-tabs-content" class="tab-content">
                    <div id="general_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'general' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row>
                          <b-col lg="6">
                            <div class="form-group">
                              <InputField :label="$t('addpage.episode-number')" name="name" type="text" :placeholder="$t('addpage.enter-episode-number')" />
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <label class="form-label flex-grow-1" for="movieMethod">{{ $t('addpage.enter-episode-number') }}</label>
                            <select ref="addMovieMethod" class="form-control select2-basic-multiple" :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddMovieMethod">
                              <option value="0">Upload movie</option>
                              <option value="1">Embed movie</option>
                              <option value="2">Movie URL</option>
                            </select>
                          </b-col>
                          <b-col lg="6"></b-col>
                          <b-col lg="6">
                            <UploadImageVideo :upload-image-name="$t('addpage.upload-episode')" />
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col lg="6">
                            <div class="form-group">
                              <InputField :label="$t('addpage.movie-release-date')" name="name" type="date" :placeholder="$t('addpage.enter-the-release-date-movie')" />
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <b-row>
                              <label class="form-label">{{ $t('addpage.episode-time-duration') }}</label>
                              <b-col lg="6">
                                <div class="form-group">
                                  <input type="number" class="form-control" name="hours" value="0" :placeholder="$t('authentication.hours')" min="0" aria-invalid="false" />
                                </div>
                              </b-col>
                              <b-col lg="6">
                                <div class="form-group">
                                  <input type="number" class="form-control" name="minutes" value="0" :placeholder="$t('authentication.minutes')" min="0" max="59" aria-invalid="false" />
                                </div>
                              </b-col>
                            </b-row>
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                    <div id="sources_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'sources' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <addSource />
                      </div>
                    </div>
                    <div id="tags_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'tags' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <div class="form-group">
                          <label class="form-label flex-grow-1" for="choice_tags">{{ $t('addpage.choose-movie-tags') }}</label>
                          <select id="choice_tags" ref="choice_tags" class="form-control select2-basic-multiple" multiple>
                            <option>Action</option>
                            <option>Adventure</option>
                            <option>Animation</option>
                            <option>Assassin</option>
                            <option>Comedy</option>
                            <option>Drama</option>
                            <option>Family</option>
                            <option>Fantasy</option>
                            <option>History</option>
                            <option>Hitman</option>
                            <option>Horror</option>
                            <option>Mystery</option>
                            <option>Recommended</option>
                            <option>Revenge</option>
                            <option>Sci-Fi</option>
                            <option>Thriller</option>
                            <option>Animated Tag</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div id="additionData_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'additional' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row>
                          <b-col lg="6">
                            <UploadImageVideo :upload-image-name="$t('addpage.portrait-file')" />
                          </b-col>
                          <b-col lg="6">
                            <div class="form-group">
                              <InputField :label="$t('addpage.trailer-link')" name="Download URL" type="text" :placeholder="$t('addpage.enter-trailer-link')" />
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <label class="d-block form-label">{{ $t('addpage.notification') }}</label>
                            <div class="checkbox mb-3">
                              <div class="form-check">
                                <input id="flexCheckDefault31" class="form-check-input" type="checkbox" />
                                <label class="form-check-label" for="flexCheckDefault31"> {{ $t('addpage.notify-user-about-prod') }} </label>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-card-body>
          </b-card>
        </b-form>
        <template #footer>
          <div class="offcanvas-footer border-top">
            <div class="d-flex gap-3 p-3">
              <b-button variant="primary" type="submit" class="d-flex align-items-center gap-2"><i class="ph-fill ph-floppy-disk-back"></i>{{ $t('edit.save') }}</b-button>
              <b-button variant="outline-primary" type="button" class="d-flex align-items-center gap-2" @click="offcanvasEnd = false"><i class="ph ph-caret-double-left"></i>{{ $t('edit.close') }}</b-button>
            </div>
          </div>
        </template>
      </b-offcanvas>
    </b-col>
    <b-offcanvas v-model="offcanvasEnd1" class="offcanvas-width-80" header-close-class="me-0" :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'" :title="$t('episodemodal.edit_episode')">
      <template #header>
        <h2 class="episode-playlist-title wp-heading-inline">
          <span class="position-relative"> Edit Episode </span>
        </h2>
        <button type="button" class="btn-close" aria-label="Close" @click="offcanvasEnd1 = false"></button>
      </template>
      <b-form class="section-form">
        <b-row>
          <b-col lg="4">
            <InputField :label="$t('addpage.episode-title')" name="name" model-value="The Childhood Adventures" type="text" :placeholder="$t('addpage.enter-title-episode')" :is-required="true" />
          </b-col>
          <b-col lg="4">
            <div class="form-group">
              <label class="form-label flex-grow-1">{{ $t('addpage.author') }}</label>
              <select ref="addAuthor1" class="form-control select2-basic-multiple" :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddAuthor1">
                <option value="0" selected>Admin</option>
              </select>
            </div>
          </b-col>
          <b-col lg="4">
            <div class="form-group">
              <label class="form-label flex-grow-1">{{ $t('addpage.status') }}</label>
              <select ref="addStatus1" class="form-control select2-basic-multiple" :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddStatus1">
                <option value="0">Published</option>
                <option value="1">Draft</option>
              </select>
            </div>
          </b-col>
        </b-row>

        <b-row class="mb-5">
          <QuillPage :quill-title="$t('addpage.embed-episode-content')" />
        </b-row>

        <b-row>
          <b-col lg="3">
            <UploadImageVideo :upload-image-name="$t('addpage.thumbnail')" :is-upload-image-default="true" :default-image="generateImgPath('/assets/images/movie-thumb/gameofheros.webp')" />
          </b-col>
          <b-col lg="9">
            <div class="form-group">
              <label class="form-label flex-grow-1" for="Description"> {{ $t('addpage.excerpt') }} </label>
              <textarea id="Description" class="form-control" rows="7" :placeholder="$t('addpage.enter-encerpt-movie')"></textarea>
            </div>
          </b-col>
        </b-row>

        <b-card no-body class="streamit-tabs-card">
          <b-card-body>
            <b-row class="gy-4">
              <!-- Vertical Tab Nav -->
              <b-col lg="3">
                <div class="streamit-verticle-tab">
                  <div class="nav flex-column nav-pills me-0 me-lg-3 mb-3 mb-md-0 list-inline streamit-tabs" role="tablist" aria-orientation="vertical">
                    <button class="nav-link" :class="{ active: activeTab === 'general' }" @click="activeTab = 'general'">
                      <span>{{ $t('addpage.general') }}</span>
                    </button>

                    <button class="nav-link" :class="{ active: activeTab === 'sources' }" @click="activeTab = 'sources'">
                      <span>{{ $t('addpage.sources') }}</span>
                    </button>
                    <button class="nav-link" :class="{ active: activeTab === 'additional' }" @click="activeTab = 'additional'">
                      <span>{{ $t('addpage.additional_data') }}</span>
                    </button>
                  </div>
                </div>
              </b-col>

              <!-- Tab Content -->
              <b-col lg="9" class="edit-tab-content">
                <div id="streamit-tabs-content" class="tab-content">
                  <div id="general_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'general' }" role="tabpanel">
                    <div class="p-4 px-2">
                      <b-row>
                        <b-col lg="6">
                          <div class="form-group">
                            <InputField :label="$t('addpage.episode-number')" name="name" type="text" :placeholder="$t('addpage.enter-episode-number')" />
                          </div>
                        </b-col>
                        <b-col lg="6">
                          <label class="form-label flex-grow-1" for="movieMethod">{{ $t('addpage.episode-number') }}</label>
                          <select ref="addMovieMethod1" class="form-control select2-basic-multiple" :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddMovieMethod1">
                            <option value="0">Upload movie</option>
                            <option value="1">Embed movie</option>
                            <option value="2">Movie URL</option>
                          </select>
                        </b-col>
                        <b-col lg="6"></b-col>
                        <b-col lg="6">
                          <UploadImageVideo :upload-image-name="$t('addpage.upload-episode')" :is-upload-image-default="true" :default-image="generateImgPath('/assets/images/movie-thumb/gameofheros.webp')" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col lg="6">
                          <div class="form-group">
                            <InputField :label="$t('addpage.movie-release-date')" name="name" type="date" :placeholder="$t('addpage.enter-the-release-date-movie')" />
                          </div>
                        </b-col>
                        <b-col lg="6">
                          <b-row>
                            <label class="form-label">{{ $t('addpage.episode-time-duration') }}</label>
                            <b-col lg="6">
                              <div class="form-group">
                                <input type="number" class="form-control" name="hours" value="0" :placeholder="$t('authentication.hours')" min="0" aria-invalid="false" />
                              </div>
                            </b-col>
                            <b-col lg="6">
                              <div class="form-group">
                                <input type="number" class="form-control" name="minutes" value="0" :placeholder="$t('authentication.minutes')" min="0" max="59" aria-invalid="false" />
                              </div>
                            </b-col>
                          </b-row>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                  <div id="sources_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'sources' }" role="tabpanel">
                    <div class="p-4 px-2">
                      <addSource />
                    </div>
                  </div>
                  <div id="tags_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'tags' }" role="tabpanel">
                    <div class="p-4 px-2">
                      <div class="form-group">
                        <label class="form-label flex-grow-1" for="choice_tags">{{ $t('addpage.choose-movie-tags') }}</label>
                        <select id="choice_tags1" ref="choice_tags1" class="form-control select2-basic-multiple" multiple>
                          <option>Action</option>
                          <option>Adventure</option>
                          <option>Animation</option>
                          <option>Assassin</option>
                          <option>Comedy</option>
                          <option>Drama</option>
                          <option>Family</option>
                          <option>Fantasy</option>
                          <option>History</option>
                          <option>Hitman</option>
                          <option>Horror</option>
                          <option>Mystery</option>
                          <option>Recommended</option>
                          <option>Revenge</option>
                          <option>Sci-Fi</option>
                          <option>Thriller</option>
                          <option>Animated Tag</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div id="additionData_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'additional' }" role="tabpanel">
                    <div class="p-4 px-2">
                      <b-row>
                        <b-col lg="6">
                          <UploadImageVideo :upload-image-name="$t('addpage.portrait-file')" :is-upload-image-default="true" :default-image="generateImgPath('/assets/images/movie-thumb/gameofheros.webp')" />
                        </b-col>
                        <b-col lg="6">
                          <div class="form-group">
                            <InputField :label="$t('addpage.trailer-link')" name="Download URL" type="text" :placeholder="$t('addpage.enter-trailer-link')" />
                          </div>
                        </b-col>
                        <b-col lg="6">
                          <label class="d-block form-label">{{ $t('addpage.notification') }}</label>
                          <div class="checkbox mb-3">
                            <div class="form-check">
                              <input id="flexCheckDefault31" class="form-check-input" type="checkbox" />
                              <label class="form-check-label" for="flexCheckDefault31"> {{ $t('addpage.notify-user-about-prod') }} </label>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-form>
      <template #footer>
        <div class="offcanvas-footer border-top">
            <div class="d-flex gap-3 p-3">
              <b-button variant="primary" type="submit" class="d-flex align-items-center gap-2"><i class="ph-fill ph-floppy-disk-back"></i>{{ $t('edit.save') }}</b-button>
              <b-button variant="outline-primary" type="button" class="d-flex align-items-center gap-2" @click="offcanvasEnd1 = false"><i class="ph ph-caret-double-left"></i>{{ $t('edit.close') }}</b-button>
            </div>
          </div>
      </template>
    </b-offcanvas>
  </b-row>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import Swal from 'sweetalert2';
import InputField from '@/components/partials/InputField.vue';
import useDataTable from '../../hooks/useDatatable';
import { useSetting } from '@/store/pinia';
import Choices from 'choices.js';
import UploadImageVideo from '@/components/widgets/UploadImageVideo.vue';
defineProps({
  name: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  duration: { type: String, default: '' },
  genres: { type: Array, default: () => [''] },
  quality: { type: String, default: '' },
  date: { type: String, default: '' },
  access: { type: Array, default: () => [''] },
  subtitles: { type: String, default: '' },
});

const addStatus = ref(null);
const tabindexaddStatus = '-1'; // Tab index

const addAuthor = ref(null);
const tabindexaddAuthor = '-1';

const addMovieMethod = ref(null);
const tabindexaddMovieMethod = ref(null);

const addMovieMethod1 = ref(null);
const tabindexaddMovieMethod1 = ref(null);

const addStatus1 = ref(null);
const tabindexaddStatus1 = '-1'; // Tab index

const addAuthor1 = ref(null);
const tabindexaddAuthor1 = '-1';

const choice_tags = ref(null);
const choice_tags1 = ref(null);

onMounted(() => {
  new Choices(addStatus.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addAuthor.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addStatus1.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addMovieMethod.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addMovieMethod1.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addAuthor1.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(choice_tags.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
  new Choices(choice_tags1.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
});

const activeTab = ref('general');

const tableData = ref([
  { movie: '/assets/images/movie-thumb/krishna-1.webp', title: 'The Lifting of the Mountain', author: 'Jenny', dateTime: '2024-12-26 10:28:40', views: '54' },
  { movie: '/assets/images/movie-thumb/krishna-2.webp', title: 'The Escape to Safety', author: 'Jenny', dateTime: '2024-12-26 10:27:23', views: '39' },
  { movie: '/assets/images/movie-thumb/krishna-3.webp', title: 'The Childhood Adventures', author: 'Jenny', dateTime: '2024-12-26 10:25:52', views: '38' },
  { movie: '/assets/images/movie-thumb/krishna-1.webp', title: 'The Trials of Faith', author: 'Jenny', dateTime: '2024-12-26 09:39:27', views: '110' },
  { movie: '/assets/images/movie-thumb/krishna-2.webp', title: 'The Warrior’s Path', author: 'Jenny', dateTime: '2024-12-26 09:36:42', views: '53' },
  { movie: '/assets/images/movie-thumb/krishna-3.webp', title: 'The Sacred Oath', author: 'Jenny', dateTime: '2024-12-26 09:34:46', views: '52' },
  { movie: '/assets/images/movie-thumb/minions-1.webp', title: 'Minion Magic', author: 'Jenny', dateTime: '2025-05-23 08:39:43', views: '355' },
  { movie: '/assets/images/movie-thumb/minions-2.webp', title: 'The Minions’ Great Escape', author: 'Jenny', dateTime: '2025-05-23 08:41:38', views: '127' },
  { movie: '/assets/images/movie-thumb/minions-3.webp', title: 'Minions in Space', author: 'Jenny', dateTime: '2025-01-21 07:44:55', views: '117' },
  { movie: '/assets/images/movie-thumb/minions-4.webp', title: 'TThe Minion Olympics', author: 'Jenny', dateTime: '2025-01-21 07:46:36', views: '131' },
  { movie: '/assets/images/movie-thumb/hanuman1.webp', title: 'The Divine Birth', author: 'Jenny', dateTime: '2024-12-26 11:53:12', views: '146' },
])

const columns = ref([
  {
    data: null,
    orderable: false,
    searchable: false,
    title: '<input type="checkbox" class="form-check-input">',
    render: function () {
      return `
       <input type="checkbox" class="form-check-input">
        `;
    },
  },
  {
    data: null,
    title: 'Movie',
    render: function (row) {
      return `
      <div class="d-flex">
          <img src="${generateImgPath(row.movie)}" class="rounded-2 avatar avatar-55 img-fluid" />
      </div>
        `;
    },
  },
  {
    data: null,
    title: 'Title',
    render: function (row) {
      return `${row.title}
        `;
    },
  },
  {
    data: null,
    title: 'Author',
    render: function (row) {
      return `${row.author}`;
    },
  },
  { data: 'dateTime', title: 'Date And Time' },
  {
    data: null,
    title: 'Views',
    render: function (row) {
      return `${row.views}`;
    },
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Status',
    render: function (row) {
      return `
      <div class="d-flex justify-content-between">
          <div class="form-check form-switch">
              <input class="form-check-input form-switch-input" type="checkbox" ${row.checked ? 'checked' : ''}>
          </div>
      </div>
        `;
    },
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Actions',
    render: function () {
      return `
       <div class="d-flex align-items-center list-user-action gap-2">
          <button type="button" class="btn btn-sm btn-icon btn-success-subtle rounded" data-bs-toggle="tooltip" data-table="action" data-id="0" data-method="edit" aria-label="Edit" data-bs-original-title="Edit">
              <i class="ph ph-pencil-simple fs-6"></i>
          </button>
          <a class="btn btn-sm btn-icon btn-danger-subtle delete-btn rounded" data-table="action" data-id="0" data-method="delete" href="#">
              <i class="ph ph-trash-simple fs-6"></i>
          </a>
          <a title="View" class="btn btn-sm btn-icon btn-info-subtle rounded" data-table="action" data-id="0" href="#"><i class="ph ph-eye fs-6"></i></a>
      </div>
        `;
    },
  },
]);

const showOffcanvas1 = () => {
  offcanvasEnd1.value = true;
};

const showAlert = () => {
  deleteSwal();
};
const tableRef1 = ref(null);
useDataTable({
  tableRef1: tableRef1,
  columns: columns.value,
  data: tableData.value,
  actionCallback: (data) => {
    switch (data.method) {
      case 'edit':
        showOffcanvas1();
        break;

      case 'delete':
        showAlert();
        break;

      default:
        break;
    }
  },
});

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const offcanvasEnd = ref(false);
const offcanvasEnd1 = ref(false);

const deleteSwal = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You want to delete this item',
    icon: 'error',
    showCancelButton: true,
    backdrop: 'rgba(60,60,60,0.8)',
    confirmButtonText: 'Yes, delete it!',
    confirmButtonColor: '#c03221',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
    }
  });
};

// Variables
const show = ref(false);

const store = useSetting();
const themeSchemeDirection = computed(() => store.theme_scheme_direction_value);
// Life cycle hooks
watch(themeSchemeDirection, () => {
  show.value = false;
});
</script>
