<template>
  <b-row>
    <b-col sm="12">
      <div class="streamit-wraper-table">
        <b-card-header class="d-flex justify-content-between gap-3 flex-wrap align-items-center mb-4">
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative"> {{ $t('addpage.review-list') }} </span>
          </h2>
        </b-card-header>
        <div class="table-view table-space">
          <div class="d-flex mt-3 gap-2">
            <div class="form-group mb-0 custom-action-section review-action-section px-0">
              <select ref="selectElement" class="form-control select2-basic-multiple" :placeholder="$t('bordertable.no_action')" :tabindex="tabindex">
                <option value="0">Movie</option>
                <option value="1">Tv Show</option>
                <option value="2">Video</option>
                <option value="2">Episode</option>
              </select>
            </div>
            <button class="btn btn-primary">{{ $t('addpage.filter') }}</button>
          </div>
          <table id="seasonTable" ref="tableRef2" class="data-tables data-table-one table custom-table movie_table dataTable no-footer">
            <thead>
              <tr class="text-uppercase">
                <th>
                  <input type="checkbox" class="form-check-input" />
                </th>
                <th>Author</th>
                <th>Post Type</th>
                <th>Author Email</th>
                <th>Date</th>
                <th>Rating</th>
                <th>Approved</th>
                <th>Post ID</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <b-offcanvas v-model="offcanvasEnd1" class="offcanvas-width-80" header-close-class="me-0" :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'">
        <template #header>
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative"> {{ $t('addpage.edit-comment') }} </span>
          </h2>
          <button type="button" class="btn-close" aria-label="Close" @click="offcanvasEnd1 = false"></button>
        </template>
        <b-form class="section-form custom-from-section-bottom">
          <b-row>
            <b-col lg="4">
              <InputField :label="$t('addpage.author')" name="name" type="text" model-value="admin" />
            </b-col>
            <b-col lg="4">
              <InputField :label="$t('addpage.author-email')" name="name" type="text" model-value="johndeo@gmail.com" />
            </b-col>
            <b-col lg="4">
              <InputField :label="$t('addpage.post-type')" name="name" type="text" model-value="movie" />
            </b-col>
            <b-col lg="4">
              <InputField :label="$t('sidebar.rating')" name="name" type="text" model-value="5" />
            </b-col>
            <b-col lg="12">
              <div class="form-group">
                <label class="form-label flex-grow-1" for="Description"> {{ $t('addpage.comment-content') }} </label>
                <textarea id="Description" class="form-control" rows="7" modelValue="TEST DATALorem Ipsum is simply dummy text of the printing and typesetting industry."></textarea>
              </div>
            </b-col>
            <b-col cols="12" lg="6" class="mb-4">
              <label class="form-label">{{ $t('addpage.comment-status') }}</label>
              <div class="form-check d-block">
                <input id="flexRadioDefault1" class="form-check-input" type="radio" name="flexRadioDefault" checked="" />
                <label class="form-check-label" for="flexRadioDefault1"> {{ $t('addpage.approve') }} </label>
              </div>
              <div class="form-check d-block">
                <input id="flexRadioDefault2" class="form-check-input" type="radio" name="flexRadioDefault" />
                <label class="form-check-label" for="flexRadioDefault2"> {{ $t('addpage.unapprove') }} </label>
              </div>
            </b-col>
          </b-row>
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
  </b-row>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import Swal from 'sweetalert2';
import InputField from '@/components/partials/InputField.vue';
import useDataTable from '../../hooks/useDatatable';
import { useSetting } from '@/store/pinia';
import Choices from 'choices.js';

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

const tableData = ref([
  { author: 'admin', postType: 'movie', mail: 'johndeo@gmail.com', dateTime: '2025-01-02 12:00:40', views: '0 Views', rating: '5', approved: '1', postId: '32' },
  { author: 'admin', postType: 'movie', mail: 'johndeo@gmail.com', dateTime: '2025-01-02 12:03:33', views: '0 Views', rating: '5', approved: '1', postId: '33' },
  { author: 'admin', postType: 'video', mail: 'johndeo@gmail.com', dateTime: '2025-01-08 10:41:50', views: '0 Views', rating: '4', approved: '1', postId: '16' },
  { author: 'admin', postType: 'tvshow', mail: 'johndeo@gmail.com', dateTime: '2025-01-08 11:43:00', views: '0 Views', rating: '3', approved: '1', postId: '1' },
  { author: 'admin', postType: 'tvshow', mail: 'johndeo@gmail.com', dateTime: '2025-01-09 11:36:35', views: '0 Views', rating: '5', approved: '1', postId: '10' },
  { author: 'admin', postType: 'video', mail: 'johndeo@gmail.com', dateTime: '2025-01-09 11:36:42', views: '0 Views', rating: '4', approved: '1', postId: '5' },
  { author: 'admin', postType: 'movie', mail: 'johndeo@gmail.com', dateTime: '2025-01-10 10:42:46', views: '0 Views', rating: '5', approved: '1', postId: '45' },
  { author: 'admin', postType: 'video', mail: 'johndeo@gmail.com', dateTime: '2025-01-13 07:08:44', views: '0 Views', rating: '4', approved: '1', postId: '13' },
  { author: 'admin', postType: 'movie', mail: 'johndeo@gmail.com', dateTime: '2025-01-15 04:58:43', views: '0 Views', rating: '4', approved: '1', postId: '5' },
  { author: 'admin', postType: 'movie', mail: 'johndeo@gmail.com', dateTime: '2025-01-17 06:51:59', views: '0 Views', rating: '5', approved: '1', postId: '6' },
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
    title: 'Author',
    render: function (row) {
      return `${row.author}`;
    },
  },
  {
    data: null,
    title: 'Post Type',
    render: function (row) {
      return `${row.postType}`;
    },
  },
  {
    data: null,
    title: 'Author Email',
    render: function (row) {
      return `${row.mail}`;
    },
  },
  { data: 'dateTime', title: 'Date' },
  {
    data: null,
    title: 'Rating',
    render: function (row) {
      return `${row.rating}`;
    },
  },
  {
    data: null,
    title: 'Approved',
    render: function (row) {
      return `${row.approved}`;
    },
  },
  {
    data: null,
    title: 'Post ID',
    render: function (row) {
      return `${row.postId}`;
    },
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Action',
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
const tableRef2 = ref(null);
useDataTable({
  tableRef2: tableRef2,
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

const selectElement = ref(null);
const tabindex = '-1'; // Tab index

onMounted(() => {
  new Choices(selectElement.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
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
