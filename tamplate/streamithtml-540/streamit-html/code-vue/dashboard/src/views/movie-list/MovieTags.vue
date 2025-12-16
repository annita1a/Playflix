<template>
  <b-row class="streamit-wraper-table2">
    <b-col lg="4">
      <b-card no-body>
        <b-card-header>
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative"> {{$t('addpage.add_new_tag')}} </span>
          </h2>
        </b-card-header>
        <b-card-body>
          <form>
            <b-col sm="12">
              <div class="form-group">
                <InputField id="genre-name" :label="$t('addpage.name')" type="text" :placeholder="$t('addpage.enter-name-tag')" :is-required="true" />
              </div>
            </b-col>

            <b-col sm="12">
              <div class="form-group">
                <InputField id="genre-slug" :label="$t('addpage.slug')" type="text" :placeholder="$t('addpage.enter-slug-tag')" :is-required="true" />
              </div>
            </b-col>

            <b-col sm="12">
              <div class="form-group">
                <label class="form-label">{{$t('addpage.description')}}</label>
                <textarea class="form-control" rows="7" aria-label="With textarea" :placeholder="$t('addpage.enter-tag-description')"></textarea>
              </div>
            </b-col>

            <div class="d-flex justify-content-end">
              <button class="btn btn-primary custom-add-button">{{$t('addpage.add-tag')}}</button>
            </div>
          </form>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="8">
      <div class="card">
        <div class="pb-3">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h2 class="episode-playlist-title wp-heading-inline">
              <span class="position-relative"> {{$t('sidebar.tags')}} </span>
            </h2>
          </div>
          <div class="card-body">
            <div class="table-view table-space">
              <table id="seasonTable" ref="tableRef1" class="data-tables data-table-one table custom-table movie_table dataTable no-footer"></table>
            </div>
          </div>
        </div>
      </div>
      <b-offcanvas v-model="offcanvasEnd1" class="offcanvas-width-80" header-close-class="me-0" :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'">
        <template #header>
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative"> Update Tag </span>
          </h2>
          <button type="button" class="btn-close" aria-label="Close" @click="offcanvasEnd1 = false"></button>
        </template>
        <b-form class="custom-from-section-bottom">
          <b-col sm="12">
            <div class="form-group">
              <InputField id="genre-name" :label="$t('addpage.name')" type="text" model-value="Name" :placeholder="$t('addpage.enter-name-tag')" :is-required="true" />
            </div>
          </b-col>

          <b-col sm="12">
            <div class="form-group">
              <InputField id="genre-slug" :label="$t('addpage.slug')" type="text" model-value="genremovie" :placeholder="$t('addpage.enter-slug-tag')" :is-required="true" />
            </div>
          </b-col>

          <b-col sm="12">
            <div class="form-group">
              <label class="form-label">{{$t('addpage.description')}}</label>
              <textarea class="form-control large-text" rows="7" aria-label="With textarea" :placeholder="$t('addpage.genres')"></textarea>
            </div>
          </b-col>
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
    </b-col>
  </b-row>
</template>
<script setup>
import { ref, computed, watch } from 'vue';
import Swal from 'sweetalert2';
import InputField from '@/components/partials/InputField.vue';
import useDataTable from '../../hooks/useDatatable';
import { useSetting } from '@/store/pinia';

const tableData = ref([
  { title: 'Thriller', termName: 'thriller', count: '2' },
  { title: 'Sci-Fi', termName: 'sci-Fi', count: '2' },
  { title: 'Revenge', termName: 'revenge', count: '2' },
  { title: 'Recommended', termName: 'recommended', count: '1' },
  { title: 'Mystery', termName: 'mystery', count: '10' },
  { title: 'Horror', termName: 'horror', count: '8' },
  { title: 'Hitman', termName: 'hitman', count: '3' },
  { title: 'History', termName: 'history', count: '2' },
  { title: 'Fantasy', termName: 'fantasy', count: '3' },
  { title: 'Family', termName: 'family', count: '3' },
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
    title: 'Name',
    render: function (row) {
      return `${row.title}
          `;
    },
  },
  {
    data: null,
    title: 'Slug',
    render: function (row) {
      return `${row.termName}`;
    },
  },
  {
    data: null,
    title: 'Count',
    render: function (row) {
      return `${row.count}`;
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
            <button type="button" class="btn btn-sm btn-icon btn-success-subtle rounded"  data-bs-toggle="tooltip" data-table="action" data-id="0" data-method="edit" aria-label="Edit" data-bs-original-title="Edit">
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
