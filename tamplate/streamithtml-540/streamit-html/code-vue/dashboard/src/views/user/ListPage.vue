<template>
  <b-row>
    <b-col sm="12">
      <div class="streamit-wraper-table">
        <b-card-header class="d-flex justify-content-between gap-3 flex-wrap align-items-center mb-4">
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative"> {{$t('header.user-list')}} </span>
          </h2>
        </b-card-header>
        <div class="table-view table-space">
          <table id="seasonTable" ref="tableRef1" class="data-tables table custom-table data-table-one custom-table-height" data-toggle="data-table">
            <thead>
              <tr class="ligth">
                <th class="sorting sorting_asc" tabindex="0" aria-controls="user-list-table" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Profile: activate to sort column descending">Profile</th>
                <th class="sorting" tabindex="0" aria-controls="user-list-table" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending">Name</th>
                <th class="sorting" tabindex="0" aria-controls="user-list-table" rowspan="1" colspan="1" aria-label="Contact: activate to sort column ascending">Contact</th>
                <th class="sorting" tabindex="0" aria-controls="user-list-table" rowspan="1" colspan="1" aria-label="Email: activate to sort column ascending">Email</th>
                <th class="sorting" tabindex="0" aria-controls="user-list-table" rowspan="1" colspan="1" aria-label="Country: activate to sort column ascending">Country</th>
                <th class="sorting" tabindex="0" aria-controls="user-list-table" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Status</th>
                <th class="sorting" tabindex="0" aria-controls="user-list-table" rowspan="1" colspan="1" aria-label="Company: activate to sort column ascending">Company</th>
                <th class="sorting" tabindex="0" aria-controls="user-list-table" rowspan="1" colspan="1" aria-label="Join Date: activate to sort column ascending">Join Date</th>
                <th style="min-width: 100px" class="sorting" tabindex="0" aria-controls="user-list-table" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending">Action</th>
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
  {
    image: '/assets/images/user/01.jpg',
    name: 'Anna Sthesia',
    contact: '(760) 756 7568',
    email: 'annasthesia@gmail.com',
    country: 'USA',
    status: 'Active',
    color: 'primary',
    company: 'Acme Corporation',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/user/02.jpg',
    name: 'Brock Lee',
    contact: '+62 5689 458 658',
    email: 'brocklee@gmail.com',
    country: 'Indonesia',
    status: 'Active',
    color: 'primary',
    company: 'Soylent Corp',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/user/03.jpg',
    name: 'Dan Druff',
    contact: '+55 6523 456 856',
    email: 'dandruff@gmail.com',
    country: 'Brazil',
    status: 'Pending',
    color: 'warning',
    company: 'Umbrella Corporation',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/user/04.jpg',
    name: 'Hans Olo',
    contact: '+91 2586 253 125',
    email: 'hansolo@gmail.com',
    country: 'India',
    status: 'Inactive',
    color: 'danger',
    company: 'Vehement Capital',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/user/05.jpg',
    name: 'Lynn Guini',
    contact: '+27 2563 456 589',
    email: 'lynnguini@gmail.com',
    country: 'Africa',
    status: 'Active',
    color: 'primary',
    company: 'Massive Dynamic',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/user/06.jpg',
    name: 'Eric Shun',
    contact: '+55 25685 256 589',
    email: 'ericshun@gmail.com',
    country: 'Brazil',
    status: 'Pending',
    color: 'warning',
    company: 'Globex Corporation',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/user/03.jpg',
    name: 'aaronottix',
    contact: '(760) 765 2658',
    email: 'budwiser@ymail.com',
    country: 'USA',
    status: 'Hold',
    color: 'info',
    company: 'Acme Corporation',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/user/05.jpg',
    name: 'Marge Arita',
    contact: '+27 5625 456 589',
    email: 'margearita@gmail.com',
    country: 'Africa',
    status: 'Complete',
    color: 'success',
    company: 'Vehement Capital',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/user/02.jpg',
    name: 'Bill Dabear',
    contact: '+55 2563 456 589',
    email: 'billdabear@gmail.com',
    country: 'Brazil',
    status: 'Active',
    color: 'primary',
    company: 'Massive Dynamic',
    date: '2019/12/01',
  },
]);

const columns = ref([
  {
    data: null,
    title: 'Profile',
    render: function (row) {
      return `
      <td class="text-center text-light">
     <img class="bg-primary-subtle rounded img-fluid avatar-40 me-3" src="${generateImgPath(row.image)}" alt="profile" loading="lazy">
     </td>

        `;
    },
  },
  { data: 'name', title: 'Name' },
  { data: 'contact', title: 'Contact' },
  { data: 'email', title: 'Email' },
  { data: 'country', title: 'Country' },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Status',
    render: function (row) {
      return `
   <span class="badge bg-${row.color}">${row.status}</span>`;
    },
  },
  { data: 'company', title: 'Company' },
  { data: 'date', title: 'Join Date' },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Action',
    render: function () {
      return `  <div class="flex align-items-center list-user-action">
    <a class="btn btn-sm btn-icon btn-success-subtle rounded" data-bs-toggle="tooltip" data-method="edit" data-placement="top" title="Add" data-bs-original-title="Add" href="#">
      <span class="btn-inner">
        <i class="ph ph-pencil-simple fs-6"></i>
      </span>
    </a>
    <a class="btn btn-sm btn-icon btn-danger-subtle rounded delete-btn" data-bs-toggle="tooltip" data-table="action" data-placement="top" title="Delete" data-bs-original-title="Delete" data-method="delete" href="#">
      <span class="btn-inner">
        <i class="ph ph-trash-simple fs-6"></i>
      </span>
    </a>
    <a title="View" class="btn btn-sm btn-icon btn-info-subtle rounded" data-table="action" data-id="0" href="#"><i class="ph ph-eye fs-6"></i></a>
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

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

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
