<template>
  <b-row>
    <b-col sm="12">
      <div class="streamit-wraper-table">
        <b-card-header class="d-flex justify-content-between gap-3 flex-wrap align-items-center mb-4">
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative"> {{ $t('addpage.persons-list') }} </span>
          </h2>
          <b-button variant="primary" @click="offcanvasEnd = true"><i class="fa-solid fa-plus me-2"></i>{{
            $t('videolist.add_new') }}</b-button>
        </b-card-header>
        <div class="table-view table-space">
          <table id="seasonTable" ref="tableRef1"
            class="data-tables data-table-one table custom-table movie_table dataTable no-footer">
            <thead>
              <tr class="text-uppercase">
                <th class="sorting sorting_asc" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1"
                  aria-sort="ascending" aria-label="
                                  
                              : activate to sort column descending">
                  <input type="checkbox" class="form-check-input" />
                </th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1"
                  aria-label="Image: activate to sort column ascending">Image</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1"
                  aria-label="Title: activate to sort column ascending">Title</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1"
                  aria-label="Author: activate to sort column ascending">Author</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1"
                  aria-label="Date and Time: activate to sort column ascending">Date and Time</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1"
                  aria-label="Views: activate to sort column ascending">Views</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1"
                  aria-label="Actions: activate to sort column ascending">Actions</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <b-offcanvas v-model="offcanvasEnd" class="offcanvas-width-80" header-close-class="me-0"
        :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'">
        <template #header>
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative">{{ $t('addpage.add-new-person') }} </span>
          </h2>
          <button type="button" class="btn-close" aria-label="Close"
            @click="offcanvasEnd = false"></button>
        </template>
        <b-form class="section-form">
          <b-row>
            <b-col lg="4">
              <InputField :label="$t('addpage.person-title')" name="name" type="text"
                :placeholder="$t('addpage.enter-title-person')" :is-required="true" />
            </b-col>
            <b-col lg="4">
              <div class="form-group">
                <label class="form-label flex-grow-1">{{ $t('addpage.author') }}</label>
                <select ref="addAuthor1" class="form-control select2-basic-multiple"
                  :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddAuthor1">
                  <option value="0" selected>Admin</option>
                </select>
              </div>
            </b-col>
            <b-col lg="4">
              <div class="form-group">
                <label class="form-label flex-grow-1">{{ $t('addpage.status') }}</label>
                <select ref="addStatus1" class="form-control select2-basic-multiple"
                  :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddStatus1">
                  <option value="0">Published</option>
                  <option value="1">Draft</option>
                </select>
              </div>
            </b-col>
          </b-row>

          <b-row class="mb-5">
            <QuillPage :quill-title="$t('addpage.person-content')" />
          </b-row>

          <b-row>
            <b-col lg="3">
              <UploadImageVideo :upload-image-name="$t('addpage.thumbnail')" />
            </b-col>
            <b-col lg="9">
              <div class="form-group">
                <label class="form-label flex-grow-1" for="Description"> {{ $t('addpage.person-excerpt') }} </label>
                <textarea id="Description" class="form-control" rows="7"
                  :placeholder="$t('addpage.enter-encerpt-movie')"></textarea>
              </div>
            </b-col>
          </b-row>

          <b-card no-body class="streamit-tabs-card">
            <b-card-body>
              <b-row class="gy-4">
                <!-- Vertical Tab Nav -->
                <b-col lg="3">
                  <div class="streamit-verticle-tab">
                    <div class="nav flex-column nav-pills me-0 me-lg-3 mb-3 mb-md-0 list-inline streamit-tabs"
                      role="tablist" aria-orientation="vertical">
                      <button class="nav-link" :class="{ active: activeTab === 'general' }"
                        @click="activeTab = 'general'">
                        <span>{{ $t('addpage.general') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'category' }"
                        @click="activeTab = 'category'">
                        <span>Category</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'tags' }" @click="activeTab = 'tags'">
                        <span>{{ $t('addpage.tags') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'personal' }"
                        @click="activeTab = 'personal'">
                        <span>{{ $t('addpage.personal-data') }}</span>
                      </button>
                    </div>
                  </div>
                </b-col>

                <!-- Tab Content -->
                <b-col lg="9" class="edit-tab-content">
                  <div id="streamit-tabs-content" class="tab-content">
                    <div id="general_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'general' }"
                      role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row>
                          <b-col lg="6">
                            <InputField :label="$t('addpage.also-known-as')" name="name" type="text"
                              :placeholder="$t('addpage.enter-alternate-names-person')" />
                          </b-col>
                          <b-col lg="6">
                            <InputField :label="$t('addpage.place-of-birth')" name="name" type="text"
                              placeholder="https://www.imdb.com." />
                          </b-col>
                          <b-col lg="6">
                            <InputField :label="$t('addpage.birth-date')" name="name" type="date"
                              :placeholder="$t('addpage.enter-birth-date-person')" />
                          </b-col>
                          <b-col lg="6">
                            <InputField :label="$t('addpage.death-date')" name="name" type="date"
                              :placeholder="$t('addpage.enter-death-date-person')" />
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                    <div id="category_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'category' }"
                      role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row>
                          <div class="form-group mb-0">
                            <label class="form-label flex-grow-1" for="addchooseCast1">{{
                              $t('addpage.choose-person-category')
                              }}</label>
                            <select id="addchooseCast1" ref="addchooseCast1" class="form-control select2-basic-multiple"
                              multiple>
                              <option>Action</option>
                              <option>Adventure</option>
                              <option>Horror</option>
                              <option>Circus</option>
                              <option>Comedy</option>
                              <option>Crime</option>
                            </select>
                          </div>
                        </b-row>
                      </div>
                    </div>
                    <div id="tags_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'tags' }"
                      role="tabpanel">
                      <div class="p-4 px-2">
                        <div class="form-group">
                          <label class="form-label flex-grow-1" for="choice_tags">{{ $t('addpage.choose-person-tags')
                            }}</label>
                          <select id="choice_tags1" ref="choice_tags1" class="form-control select2-basic-multiple"
                            multiple>
                            <option>Action</option>
                            <option>Adventure</option>
                            <option>Horror</option>
                            <option>Circus</option>
                            <option>Comedy</option>
                            <option>Crime</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div id="presonalData_tab" class="tab-pane fade"
                      :class="{ 'show active': activeTab === 'personal' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row>
                          <b-col lg="6">
                            <InputField :label="$t('addpage.awards')" name="name" type="text" />
                          </b-col>
                          <b-col lg="6">
                            <InputField :label="$t('addpage.offical-site')" name="name" type="text"
                              placeholder="https://www.imdb.com." />
                          </b-col>
                          <b-col lg="6">
                            <InputField :label="$t('addpage.height')" name="name" type="date" />
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
              <b-button variant="primary" type="submit" class="d-flex align-items-center gap-2"><i
                  class="ph-fill ph-floppy-disk-back"></i>{{ $t('edit.save') }}</b-button>
              <b-button variant="outline-primary" type="button" class="d-flex align-items-center gap-2"
                @click="offcanvasEnd = false"><i class="ph ph-caret-double-left"></i>{{ $t('edit.close') }}</b-button>
            </div>
          </div>
        </template>
      </b-offcanvas>
      <b-offcanvas v-model="offcanvasEnd1" class="offcanvas-width-80" header-close-class="me-0"
        :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'">
        <template #header>
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative">{{ $t('addpage.edit-person') }} </span>
          </h2>
          <button 
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="offcanvasEnd1 = false"
            ></button>
        </template>
        <b-form class="section-form">
          <b-row>
            <b-col lg="4">
              <InputField :label="$t('addpage.person-title')" name="name" type="text"
                :model-value="'addpage.arrival_1999'" :placeholder="$t('addpage.enter-title-person')"
                :is-required="true" />
            </b-col>
            <b-col lg="4">
              <div class="form-group">
                <label class="form-label flex-grow-1">{{ $t('addpage.author') }}</label>
                <select ref="addAuthor" class="form-control select2-basic-multiple"
                  :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddAuthor">
                  <option value="0" selected>Admin</option>
                </select>
              </div>
            </b-col>
            <b-col lg="4">
              <div class="form-group">
                <label class="form-label flex-grow-1">{{ $t('addpage.status') }}</label>
                <select ref="addStatus" class="form-control select2-basic-multiple"
                  :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddStatus">
                  <option value="0">Published</option>
                  <option value="1">Draft</option>
                </select>
              </div>
            </b-col>
          </b-row>

          <b-row class="mb-5">
            <QuillPage :quill-title="$t('addpage.person-content')" />
          </b-row>

          <b-row>
            <b-col lg="3">
              <UploadImageVideo :upload-image-name="$t('addpage.thumbnail')" :is-upload-image-default="true"
                :default-image="generateImgPath('/assets/images/movie-thumb/gameofheros.webp')" />
            </b-col>
            <b-col lg="9">
              <div class="form-group">
                <label class="form-label flex-grow-1" for="Description"> {{ $t('addpage.person-excerpt') }} </label>
                <textarea id="Description" class="form-control" rows="7"
                  :placeholder="$t('addpage.enter-encerpt-movie')"></textarea>
              </div>
            </b-col>
          </b-row>

          <b-card no-body class="streamit-tabs-card">
            <b-card-body>
              <b-row class="gy-4">
                <!-- Vertical Tab Nav -->
                <b-col lg="3">
                  <div class="streamit-verticle-tab">
                    <div class="nav flex-column nav-pills me-0 me-lg-3 mb-3 mb-md-0 list-inline streamit-tabs"
                      role="tablist" aria-orientation="vertical">
                      <button class="nav-link" :class="{ active: activeTab === 'general' }"
                        @click="activeTab = 'general'">
                        <span>{{ $t('addpage.general') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'category' }"
                        @click="activeTab = 'category'">
                        <span>{{ $t('widgetbasic.category') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'tags' }" @click="activeTab = 'tags'">
                        <span>{{ $t('addpage.tags') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'personal' }"
                        @click="activeTab = 'personal'">
                        <span>{{ $t('addpage.personal-data') }}</span>
                      </button>
                    </div>
                  </div>
                </b-col>

                <!-- Tab Content -->
                <b-col lg="9" class="edit-tab-content">
                  <div id="streamit-tabs-content" class="tab-content">
                    <div id="general_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'general' }"
                      role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row>
                          <b-col lg="6">
                            <InputField :label="$t('addpage.also-known-as')" :model-value="$t('addpage.admin')"
                              name="name" type="text" :placeholder="$t('addpage.enter-alternate-names-person')" />
                          </b-col>
                          <b-col lg="6">
                            <InputField :label="$t('addpage.place-of-birth')" :model-value="$t('adpage.place')"
                              name="name" type="text" placeholder="https://www.imdb.com." />
                          </b-col>
                          <b-col lg="6">
                            <InputField :label="$t('addpage.birth-date')" date="January 1, 2025" name="name" type="date"
                              :placeholder="$t('addpage.enter-birth-date-person')" />
                          </b-col>
                          <b-col lg="6">
                            <InputField :label="$t('addpage.death-date')" date="January 17, 2025" name="name"
                              type="date" :placeholder="$t('addpage.enter-death-date-person')" />
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                    <div id="category_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'category' }"
                      role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row>
                          <div class="form-group mb-0">
                            <label class="form-label flex-grow-1" for="choose_cast">{{
                              $t('addpage.choose-person-category')
                              }}</label>
                            <select id="addchooseCast" ref="addchooseCast" class="form-control select2-basic-multiple"
                              multiple>
                              <option>Action</option>
                              <option>Adventure</option>
                              <option>Horror</option>
                              <option>Circus</option>
                              <option>Comedy</option>
                              <option>Crime</option>
                            </select>
                          </div>
                        </b-row>
                      </div>
                    </div>
                    <div id="tags_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'tags' }"
                      role="tabpanel">
                      <div class="p-4 px-2">
                        <div class="form-group">
                          <label class="form-label flex-grow-1" for="choice_tags">{{ $t('addpage.choose-person-tags')
                            }}</label>
                          <select id="choice_tags" ref="choice_tags" class="form-control select2-basic-multiple"
                            multiple>
                            <option>Action</option>
                            <option>Adventure</option>
                            <option>Horror</option>
                            <option>Circus</option>
                            <option>Comedy</option>
                            <option>Crime</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div id="presonalData_tab" class="tab-pane fade"
                      :class="{ 'show active': activeTab === 'personal' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row>
                          <b-col lg="6">
                            <InputField :label="$t('addpage.awards')" name="name" type="text" />
                          </b-col>
                          <b-col lg="6">
                            <InputField :label="$t('addpage.offical-site')" name="name" type="text"
                              placeholder="https://www.imdb.com." />
                          </b-col>
                          <b-col lg="6">
                            <InputField :label="$t('addpage.height')" name="name" type="date" />
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
              <b-button variant="primary" type="submit" class="d-flex align-items-center gap-2"><i
                  class="ph-fill ph-floppy-disk-back"></i>{{ $t('edit.save') }}</b-button>
              <b-button variant="outline-primary" type="button" class="d-flex align-items-center gap-2"
                @click="offcanvasEnd1 = false"><i class="ph ph-caret-double-left"></i>{{ $t('edit.close') }}</b-button>
            </div>
          </div>
        </template>
      </b-offcanvas>
    </b-col>
  </b-row>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import Swal from 'sweetalert2';
import InputField from '@/components/partials/InputField.vue';
import useDataTable from '../../hooks/useDatatable';
import Choices from 'choices.js';
import { useSetting } from '@/store/pinia';
import QuillPage from '@/components/widgets/QuillPage.vue';
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

const activeTab = ref('general');

const tableData = ref([
  { movie: '/assets/images/author/ava-monroe.webp', title: 'Ava Monroe', author: 'Admin', dateTime: '2025-01-08 04:43:37', views: '0', checked: false },
  { movie: '/assets/images/author/charles-melton.webp', title: 'Charles Melton', author: 'Admin', dateTime: '2024-11-27 08:36:04', views: '0', checked: false },
  { movie: '/assets/images/author/jack-nicholson.webp', title: 'Jack Nicholson', author: 'Admin', dateTime: '2024-11-27 08:35:00', views: '0', checked: false },
  { movie: '/assets/images/author/james-stewart.webp', title: 'James Stewart', author: 'Admin', dateTime: '2024-11-27 08:33:32', views: '0', checked: false },
  { movie: '/assets/images/author/jeff-bridges.webp', title: 'Jeff Bridges', author: 'Admin', dateTime: '2024-11-27 08:32:28', views: '0', checked: false },
  { movie: '/assets/images/author/jordan-grant.webp', title: 'Jordan Grant', author: 'Admin', dateTime: '2024-11-27 08:31:27', views: '0', checked: false },
  { movie: '/assets/images/author/mark-smith.webp', title: 'Mark Smith', author: 'Admin', dateTime: '2024-11-27 08:29:43', views: '0', checked: false },
  { movie: '/assets/images/author/maxwell-carter.webp', title: 'Maxwell Carter', author: 'Admin', dateTime: '2024-11-27 08:27:53', views: '0', checked: false },
  { movie: '/assets/images/author/ruby-scott.webp', title: 'Ruby Scott', author: 'Admin', dateTime: '2024-11-27 08:26:50', views: '0', checked: false },
  { movie: '/assets/images/author/michael-fox.webp', title: 'Michael Fox', author: 'Admin', dateTime: '2024-11-30 06:19:27', views: '0', checked: false },
]);

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
    title: 'Image',
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

const addStatus = ref(null);
const tabindexaddStatus = '-1'; // Tab index

const addAuthor = ref(null);
const tabindexaddAuthor = '-1'; // Tab index

const addStatus1 = ref(null);
const tabindexaddStatus1 = '-1'; // Tab index

const addAuthor1 = ref(null);
const tabindexaddAuthor1 = '-1'; // Tab index

const addchooseCast = ref(null);

const choice_tags = ref(null);
const choice_tags1 = ref(null);
const addchooseCast1 = ref(null);

onMounted(() => {
  new Choices(addAuthor.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addStatus.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addAuthor1.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addStatus1.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addchooseCast.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
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
  new Choices(addchooseCast1.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
});

// Variables
const show = ref(false);

const store = useSetting();
const themeSchemeDirection = computed(() => store.theme_scheme_direction_value);
// Life cycle hooks
watch(themeSchemeDirection, () => {
  show.value = false;
});
</script>
