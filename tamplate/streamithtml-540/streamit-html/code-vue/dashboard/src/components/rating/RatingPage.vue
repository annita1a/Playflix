<template>
    <b-row>
      <b-col sm="12">
        <div class="streamit-wraper-table">
          <b-card-header class="d-flex justify-content-between gap-3 flex-wrap align-items-center mb-4">
            <h2 class="episode-playlist-title wp-heading-inline">
              <span class="position-relative"> {{ $t('rating.Rating_List') }} </span>
            </h2>
          </b-card-header>
          <div class="table-view table-space">
            <table id="seasonTable" ref="tableRef1" class="data-tables table custom-table movie_table data-table-one custom-table-height" data-toggle="data-table">
              <thead>
                <tr>
                  <th class="sorting sorting_asc" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="No: activate to sort column descending">No</th>
                  <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Category: activate to sort column ascending">Category</th>
                  <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending">Name</th>
                  <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Description: activate to sort column ascending">Description</th>
                  <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Release Date: activate to sort column ascending">Release Date</th>
                  <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Rating: activate to sort column ascending">Rating</th>
                  <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending">Action</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </b-col>
    </b-row>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
import useDataTable from '../../hooks/useDatatable';

const tableData = ref([
  { no: '1', category: 'Movie', Name: 'Man Of Street', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2017', rating: '9.2' },
  { no: '2', category: 'Show', Name: 'Cursed', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2012', rating: '8.5' },
  { no: '3', category: 'Movie', Name: 'Veronica', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2018', rating: '7.2' },
  { no: '4', category: 'Movie', Name: 'Troll Hunters', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2020', rating: '9.5' },
  { no: '5', category: 'Show', Name: 'Gran Torino', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2019', rating: '7.0' },
  { no: '6', category: 'Movie', Name: 'Man Of Street', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2017', rating: '9.2' },
  { no: '7', category: 'Show', Name: 'Cursed', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2012', rating: '8.5' },
  { no: '8', category: 'Movie', Name: 'Veronica', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2018', rating: '7.2' },
  { no: '9', category: 'Movie', Name: 'Troll Hunters', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2020', rating: '9.5' },
  { no: '10', category: 'Show', Name: 'Gran Torino', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2019', rating: '7.0' },
]);

const columns = ref([
  { data: 'no', title: 'No' },
  { data: 'category', title: 'Category' },
  {
    data: null,
    title: 'Name',
    render: function (row) {
      return `<p class="mb-0">${row.Name}</p>`;
    },
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Description',
    render: function (row) {
      return `
       <p class="mb-0">
        ${row.description}
        </p>
        `;
    },
  },
  { data: 'release_date', title: 'Release Date' },
  {
    data: null,
    title: 'Rating',
    render: function (row) {
      return `<i class="ph-fill ph-star text-primary"></i> ${row.rating}`;
    },
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Action',
    render: function () {
      return `
      <div class="d-flex align-items-center list-user-action">
        <a class="btn btn-sm btn-icon btn-danger-subtle delete-btn rounded" data-table="action" data-id="0" data-method="delete" href="#">
          <i class="ph ph-trash-simple"></i>
        </a>
      </div>
        `;
    },
  },
]);
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
      case 'delete':
        showAlert();
        break;

      default:
        break;
    }
  },
});

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
</script>
