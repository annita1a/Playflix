<template>
  <b-row class="streamit-wraper-table2">
    <b-col lg="4">
      <b-card no-body>
        <b-card-header>
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative"> {{$t('addpage.add-new-playlist')}} </span>
          </h2>
        </b-card-header>
        <b-card-body>
          <form>
            <div class="form-group">
              <InputField id="genre-name" :label="$t('addpage.playlist_name')" type="text" :placeholder="$t('addpage.enter-name-playlist')" :is-required="true" />
            </div>
            <div class="form-group">
              <InputField id="genre-slug" :label="$t('addpage.playlist_slug')" type="text" :placeholder="$t('addpage.enter-slug-playlist')" :is-required="true" />
            </div>

            <div class="d-flex align-items-center justify-content-end mt-4">
              <button class="btn btn-primary custom-add-button">{{$t('addpage.add_playlist')}}</button>
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
              <span class="position-relative"> {{$t('sidebar.playlist')}} </span>
            </h2>
          </b-card-header>
          <b-card-body>
            <div class="table-view table-space">
              <table id="seasonTable" ref="tableRef1" class="data-tables data-table-one table custom-table movie_table dataTable no-footer">
                <thead>
                  <tr class="text-uppercase">
                    <th><input type="checkbox" class="form-check-input" /></th>
                    <th>Playlist Name</th>
                    <th>Playlist Slug</th>
                    <th>Actions</th>
                  </tr>
                </thead>
              </table>
            </div>
          </b-card-body>
        </div>
      </b-card>

      <!-- Vue-controlled Offcanvas -->
      <b-offcanvas v-model="offcanvasEnd1" class="offcanvas-width-80" header-close-class="me-0" :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'">
        <template #header>
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative"> {{$t('addpage.update_playlist')}} </span>
          </h2>
          <button type="button" class="btn-close" aria-label="Close" @click="offcanvasEnd1 = false"></button>
        </template>
        <b-form class="section-form">
          <div class="form-group">
            <InputField id="genre-name" :label="$t('addpage.playlist_name')" type="text" :placeholder="$t('addpage.enter-name-playlist')" :model-value="$t('addpage.admin')" :is-required="true" />
          </div>
          <div class="form-group">
            <InputField id="playlist-slug" :label="$t('addpage.playlist_slug')" type="text" :placeholder="$t('addpage.enter-slug-genre')" :model-value="$t('addpage.admin')" :is-required="true" />
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

// Playlist Data
const tableData = ref([
  { title: 'Radhe Krishna Stories', slug: 'radhe-krishna-stories' },
  { title: 'episodes of pius', slug: 'episodes-of-pius' },
  { title: 'horror', slug: 'horror' },
]);
// Offcanvas visibility control
const offcanvasEnd1 = ref(false);

// Vue Pinia store
const store = useSetting();
const themeSchemeDirection = computed(() => store.theme_scheme_direction_value);

// Show the Offcanvas
const showOffcanvas1 = () => {
  offcanvasEnd1.value = true;
};

// Delete confirmation
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

// DataTable column definitions
const columns = ref([
  {
    data: null,
    orderable: false,
    searchable: false,
    title: '<input type="checkbox" class="form-check-input">',
    render: () => `<input type="checkbox" class="form-check-input">`,
  },
  {
    data: null,
    title: 'Playlist Name',
    render: (row) => `${row.title}`,
  },
  {
    data: null,
    title: 'Playlist Slug',
    render: (row) => `${row.slug}`,
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Actions',
    render: () => `
      <div class="d-flex align-items-center list-user-action gap-2">
        <button type="button" class="btn btn-sm btn-icon btn-success-subtle rounded" data-table="action" data-id="0" data-method="edit" aria-label="Edit">
          <i class="ph ph-pencil-simple fs-6"></i>
        </button>
        <a class="btn btn-sm btn-icon btn-danger-subtle delete-btn rounded" data-table="action" data-id="0" data-method="delete" href="#">
          <i class="ph ph-trash-simple fs-6"></i>
        </a>
        <a title="View" class="btn btn-sm btn-icon btn-info-subtle rounded" data-table="action" data-id="0" href="#"><i class="ph ph-eye fs-6"></i></a>
      </div>
    `,
  },
]);

// Hook into DataTable composable
const tableRef1 = ref(null);
useDataTable({
  tableRef1,
  columns: columns.value,
  data: tableData.value,
  actionCallback: (data) => {
    switch (data.method) {
      case 'edit':
        showOffcanvas1();
        break;
      case 'delete':
        deleteSwal();
        break;
    }
  },
});

// Watch for layout direction changes
const show = ref(false);
watch(themeSchemeDirection, () => {
  show.value = false;
});
</script>
