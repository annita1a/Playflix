<template>
  <b-row>
    <b-col sm="12">
      <div class="streamit-wraper-table">
        <b-card-header class="d-flex justify-content-between gap-3 flex-wrap align-items-center mb-4">
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative"> {{ $t('comments.Comment_List') }} </span>
          </h2>
        </b-card-header>
        <div class="table-view table-space">
          <table id="seasonTable" ref="tableRef1" class="data-tables table custom-table movie_table data-table-one custom-table-height" data-toggle="data-table">
            <thead>
              <tr>
                <th class="sorting sorting_asc" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="No: activate to sort column descending">No</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Title: activate to sort column ascending">Title</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Author: activate to sort column ascending">Author</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Description: activate to sort column ascending">Description</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Created Date: activate to sort column ascending">Created Date</th>
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
import useDataTable from '../hooks/useDatatable';

const tableData = ref([
  { no: '1', title: 'Lorem Ipsum Dolor', author: 'Nick Allen', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '21 Jul, 2020' },
  { no: '2', title: 'Lorem Ipsum Dolor', author: 'Hans Olo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '12 Jun, 2020' },
  { no: '3', title: 'Lorem Ipsum Dolor', author: 'Lynn Guini', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '01 Jan, 2020' },
  { no: '4', title: 'Lorem Ipsum Dolor', author: 'Aaronottix', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '19 Mar, 2020' },
  { no: '5', title: 'Lorem Ipsum Dolor', author: 'Marge Arita', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '21 Aug, 2020' },
  { no: '6', title: 'Lorem Ipsum Dolor', author: 'Bill Dabear', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '15 May, 2020' },
  { no: '7', title: 'Lorem Ipsum Dolor', author: 'Brock Lee', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '07 Jul, 2020' },
  { no: '8', title: 'Lorem Ipsum Dolor', author: 'Nick Allen', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '21 Jul, 2020' },
  { no: '9', title: 'Lorem Ipsum Dolor', author: 'Hans Olo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '12 Jun, 2020' },
  { no: '10', title: 'Lorem Ipsum Dolor', author: 'Lynn Guini', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '01 Jan, 2020' },
  { no: '11', title: 'Lorem Ipsum Dolor', author: 'Aaronottix', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '19 Mar, 2020' },
  { no: '12', title: 'Lorem Ipsum Dolor', author: 'Marge Arita', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '21 Aug, 2020' },
]);

const columns = ref([
  { data: 'no', title: ' No' },
  { data: 'title', title: ' Title' },
  { data: 'author', title: 'Author' },
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
  { data: 'created_date', title: 'Created Date' },
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
            <button type="button" class="btn btn-sm btn-icon btn-info-subtle rounded" data-bs-toggle="tooltip" data-table="action" data-id="0" data-method="view" aria-label="View" data-bs-original-title="View">
              <i class="ph ph-eye fs-6"></i>
          </button>
      </div>
        `;
    },
  },
]);
const showOffcanvas = () => {
  offcanvasEnd.value = true;
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
        showOffcanvas();
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
