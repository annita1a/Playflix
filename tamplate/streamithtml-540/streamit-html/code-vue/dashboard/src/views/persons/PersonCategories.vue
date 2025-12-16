<template>
  <b-row class="streamit-wraper-table2">
    <b-col lg="4">
      <b-card no-body>
        <b-card-header>
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative"> {{$t('addpage.add-new-category')}} </span>
          </h2>
        </b-card-header>
        <b-card-body>
          <form>
            <div class="form-group">
              <InputField id="genre-name" :label="$t('addpage.category-name')" type="text" :placeholder="$t('addpage.enter-title-genre')" :is-required="true" />
            </div>
            <div class="form-group">
              <InputField id="genre-slug" :label="$t('addpage.category-slug')" type="text" :placeholder="$t('addpage.enter-slug-genre')" :is-required="true" />
            </div>

            <div class="form-group">
              <label class="form-label" for="parent-genre">{{$t('addpage.parent-category')}}</label>
              <select id="parent-genre" ref="addStatus" class="form-control select2-basic-multiple" :tabindex="tabindexaddStatus">
                <option>Add Parent Genre</option>
                <option>Action</option>
                <option>Adventure</option>
                <option>Animation</option>
                <option>Crime</option>
                <option>Horror</option>
                <option>Mystery</option>
                <option>Romance</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">{{$t('addpage.category-description')}}</label>
              <textarea class="form-control large-text" aria-label="With textarea"></textarea>
            </div>

            <div class="d-flex align-items-center justify-content-end mt-4">
              <button class="btn btn-primary custom-add-button">{{$t('addpage.add-category')}}</button>
            </div>
          </form>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="8">
      <b-card no-body>
        <div class="pb-3">
          <b-card-header class="d-flex justify-content-between gap-3 flex-wrap align-items-center mb-4">
            <h2 class="episode-playlist-title wp-heading-inline">
              <span class="position-relative"> {{$t('addpage.person-categories')}} </span>
            </h2>
          </b-card-header>
          <b-card-body>
            <div class="table-view table-space">
              <table id="seasonTable" ref="tableRef1" class="data-tables table custom-table movie_table data-table-one custom-table-height dataTable no-footer">
                <thead>
                  <tr class="text-uppercase"></tr>
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
                    <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending">Name</th>
                    <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Slug: activate to sort column ascending">Slug</th>
                    <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Parent Genre: activate to sort column ascending">Parent Genre</th>
                    <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Count: activate to sort column ascending">Count</th>
                    <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending">Actions</th>
                  </tr>
                </thead>
              </table>
            </div>
          </b-card-body>
        </div>
      </b-card>
      <b-offcanvas v-model="offcanvasEnd1" class="offcanvas-width-80" header-close-class="me-0" :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'">
        <template #header>
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative"> {{$t('addpage.update-category')}} </span>
          </h2>
          <button type="button" class="btn-close" aria-label="Close" @click="offcanvasEnd1 = false"></button>
        </template>
        <b-form class="section-form custom-from-section-bottom">
          <div class="form-group">
            <InputField id="genre-name" :label="$t('addpage.category-name')" type="text" :model-value="$t('addpage.singer')" :placeholder="$t('addpage.enter-title-genre')" :is-required="true" />
          </div>
          <div class="form-group">
            <InputField id="genre-slug" :label="$t('addpage.category-slug')" type="text"  :model-value="$t('addpage.singer')" :placeholder="$t('addpage.enter-slug-genre')" :is-required="true" />
          </div>

          <div class="form-group">
            <label class="form-label" for="parent-genre">{{$t('addpage.parent-category')}}</label>
            <select id="parent-genre" ref="addStatus1" class="form-control select2-basic-multiple" :tabindex="tabindexaddStatus1">
              <option>Add Parent Genre</option>
              <option>Action</option>
              <option>Adventure</option>
              <option>Animation</option>
              <option>Crime</option>
              <option>Horror</option>
              <option>Mystery</option>
              <option>Romance</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">{{$t('addpage.category-description')}}</label>
            <textarea class="form-control large-text" aria-label="With textarea"></textarea>
          </div>

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
import { ref, watch, computed, onMounted } from 'vue';
import { useSetting } from '@/store/pinia';
import Swal from 'sweetalert2';
import InputField from '@/components/partials/InputField.vue';
import useDataTable from '../../hooks/useDatatable';
import Choices from 'choices.js';

const tableData = ref([
  { title: 'Producer', time: '3h', language: '(english, hindi)', slug: 'producer', category: 'Hello', parentGenre: 'None', count: '9' },
  { title: 'Director', time: '2h 21m', language: '(english, hindi)', slug: 'director', category: 'Hello', parentGenre: 'None', count: '7' },
  { title: 'Actress', time: '2h 21m', language: '(english, hindi)', slug: 'actress', category: 'Hello', parentGenre: 'None', count: '8' },
  { title: 'Actor', time: '2h 21m', language: '(english, hindi)', slug: 'actor', category: 'Hello', parentGenre: 'None', count: '8' }
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
      return `${row.slug}`;
    },
  },
  { data: 'parentGenre', title: 'Parent Genre' },
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

const addStatus = ref(null);
const tabindexaddStatus = '-1'; // Tab index

const addStatus1 = ref(null);
const tabindexaddStatus1 = '-1'; // Tab index

onMounted(() => {
  new Choices(addStatus.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });

  new Choices(addStatus1.value, {
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
