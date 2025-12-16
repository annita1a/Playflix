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
            <div class="form-group">
              <InputField id="genre-name" :label="$t('addpage.tag-name')" type="text" :placeholder="$t('addpage.enter-name-tag')" :is-required="true" />
            </div>
            <div class="form-group">
              <InputField id="genre-slug" :label="$t('addpage.tag-slug')" type="text" :placeholder="$t('addpage.enter-slug-tag')" :is-required="true" />
            </div>

            <div class="form-group">
              <label class="form-label">{{$t('addpage.tag-description')}}</label>
              <textarea class="form-control large-text" aria-label="With textarea" :placeholder="$t('addpage.enter-tag-description')"></textarea>
            </div>

            <div class="d-flex align-items-center justify-content-end mt-4">
              <button class="btn btn-primary custom-add-button">{{$t('addpage.add-tag')}}</button>
            </div>
          </form>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="8">
      <b-card no-body>
        <div class="pb-3">
          <b-card-header class="d-flex justify-content-between align-items-center">
            <h2 class="episode-playlist-title wp-heading-inline">
              <span class="position-relative"> {{$t('addpage.tag-list')}} </span>
            </h2>
          </b-card-header>
          <b-card-body>
            <div class="table-view table-space">
              <table id="seasonTable" ref="tableRef1" class="data-tables data-table-one table custom-table movie_table dataTable no-footer">
                <thead>
                  <tr class="text-uppercase">
                    <th
class="sorting sorting_asc" tabindex="0" aria-controls="seasonTable"
                      rowspan="1" colspan="1" aria-sort="ascending" aria-label=" : activate to sort column descending">
                      <input type="checkbox" class="form-check-input" />
                    </th>
                    <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Tag Name: activate to sort column ascending">Tag Name</th>
                    <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Tag Slug: activate to sort column ascending">Tag Slug</th>
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
            <span class="position-relative">
                Update Tag
            </span>
          </h2>
          <button type="button" class="btn-close" aria-label="Close" @click="offcanvasEnd1 = false"></button>
        </template>
        <b-form class="section-form custom-from-section-bottom">
          <div class="form-group">
            <InputField id="genre-name" :label="$t('addpage.tag-name')" type="text" :placeholder="$t('addpage.enter-title-tag')" :model-value="$t('addpage.vikings')" :is-required="true" />
          </div>
          <div class="form-group">
            <InputField id="genre-slug" :label="$t('addpage.tag-slug')" type="text" :placeholder="$t('addpage.enter-slug-tag')" :model-value="$t('addpage.vikings')" :is-required="true" />
          </div>

          <div class="form-group">
            <label class="form-label">{{$t('addpage.tag-description')}}</label>
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
import { ref, watch, computed } from 'vue';
import { useSetting } from '@/store/pinia';
import Swal from 'sweetalert2';
import InputField from '@/components/partials/InputField.vue';
import useDataTable from '../../hooks/useDatatable';

const tableData = ref([
  { title: 'Vikings', slug: 'vikings', count: '19' },
  { title: 'Treasure', slug: 'treasure', count: '13' },
  { title: 'Thriller', slug: 'thriller', count: '11' },
  { title: 'Ships', slug: 'ships', count: '2' },
  { title: 'Romance', slug: 'romance', count: '12' },
  { title: 'Pirates', slug: 'pirates', count: '4' },
  { title: 'Mythology', slug: 'mythology', count: '2' },
  { title: 'Kings', slug: 'kings', count: '' },
  { title: 'Guns', slug: 'guns', count: '2' },
  { title: 'Family', slug: 'family', count: '2' },
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
    title: 'Tag Name',
    render: function (row) {
      return `${row.title}
          `;
    },
  },
  {
    data: null,
    title: 'Tag Slug',
    render: function (row) {
      return `${row.slug}`;
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
