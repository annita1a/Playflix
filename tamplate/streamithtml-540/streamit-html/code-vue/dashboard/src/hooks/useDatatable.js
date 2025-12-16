import { onMounted, onBeforeUnmount } from 'vue';
import $ from 'jquery';
import 'datatables.net-bs5';
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

const useDataTable = ({
  tableRef,
  tableRef1,
  tableRef2,
  columns,
  data = [],
  url = null,
  actionCallback,
  isColumnHidden = false,
  isColumnHiddenClass = '.toggle-vis',
  isFilterColumn = false,
  isMultilang = false,
  searching = false,
}) => {
  let datatable, datatable1, datatable2;

  onMounted(() => {
    setTimeout(() => {
      let datatableObj = {
        dom: '<"row align-items-center"<"col-md-6" l><"col-md-6" f>><"table-responsive my-3" rt><"row align-items-center"<"col-md-6" i><"col-md-6" p>><"clear">',
        autoWidth: false,
        columns,
      };

      let datatableObj1 = {
        dom: '<"row align-items-center gy-2"<"col-md-12"f>><"table-responsive my-3" rt><"row align-items-center"<"col-md-6 sum"i><"col-md-6"p>><"clear">',
        autoWidth: false,
        columns,
        pagingType: 'full_numbers',
        searching: true,
        language: {
          paginate: {
            first: '«',
            last: '»',
            next: '›',
            previous: '‹',
          },
        },
      };

      let datatableObj2 = {
        ...datatableObj1,
        searching,
      };

      const ajaxConfig = url
        ? {
            processing: true,
            serverSide: true,
            ajax: { url },
          }
        : {};

      datatableObj = { ...datatableObj, ...ajaxConfig };
      datatableObj1 = { ...datatableObj1, ...ajaxConfig };
      datatableObj2 = { ...datatableObj2, ...ajaxConfig };

      if (data) {
        datatableObj.data = data;
        datatableObj1.data = data;
        datatableObj2.data = data;
      }

      if (isFilterColumn) {
        datatableObj.initComplete = function () {
          const api = this.api();

          api
            .columns()
            .eq(0)
            .each(function (colIdx) {
              const cell = $('.filters th').eq($(api.column(colIdx).header()).index());
              const title = $(cell).text();
              if ($(api.column(colIdx).header()).index() >= 0) {
                $(cell).html(`<input type="text" class="form-control form-control-sm" placeholder="${title}"/>`);
              }
            });

          api.columns().every(function () {
            const that = this;
            $('input', this.footer()).on('keyup change clear', function () {
              if (that.search() !== this.value) {
                that.search(this.value).draw();
              }
            });
          });
        };
      }

      const setMultiLang = () => {
        const selectedLangUrl = Array.from(document.querySelector('#langSelector')?.options || [])
          .filter((opt) => opt.selected)
          .map((opt) => opt.getAttribute('data-path'))[0];
        if (selectedLangUrl) {
          datatableObj.language = { url: selectedLangUrl };
        }
      };

      if (isMultilang) setMultiLang();

      if (tableRef?.value) datatable = $(tableRef.value).DataTable(datatableObj);
      if (tableRef1?.value) {
        datatable1 = $(tableRef1.value).DataTable(datatableObj1);
        injectCustomControls(datatable1);
      }
      if (tableRef2?.value) datatable2 = $(tableRef2.value).DataTable(datatableObj2);

      [datatable, datatable1, datatable2].forEach((dt) => {
        if (dt && typeof actionCallback === 'function') {
          $(dt.table().body()).on('click', '[data-table="action"]', function () {
            actionCallback({
              id: $(this).data('id'),
              method: $(this).data('method'),
            });
          });
        }
      });

      if (isColumnHidden && datatable) {
        $(isColumnHiddenClass).on('click', function (e) {
          e.preventDefault();
          const column = datatable.column($(this).attr('data-column'));
          column.visible(!column.visible());
        });
      }

      if (isMultilang && tableRef?.value) {
        document.querySelector('#langSelector')?.addEventListener('change', () => {
          $(tableRef.value).DataTable().destroy();
          setMultiLang();
          datatable = $(tableRef.value).DataTable(datatableObj);
        });
      }
    }, 0);
  });

  const injectCustomControls = (tableInstance) => {
    setTimeout(() => {
      const filterWrapper = $('#seasonTable_filter');
      if (!filterWrapper.length) return;

      $('#applyButton, #customSearch').off();

      filterWrapper.html(`
        <div class="row align-items-center gy-2">
          <div class="">
            <div class="row align-items-center gy-2"> 
              <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 gap-lg-0 custom-action-section"> 
                <div class="d-flex gap-2"> 
                  <div class="form-group mb-0"> 
                    <select class="form-control" id="customAction">
                      <option>No Action</option> 
                      <option>Status</option> 
                      <option>Delete</option> 
                    </select>
                  </div> 
                  <button id="applyButton" class="btn btn-primary custom-add-button">Apply</button> 
                </div> 
                <div class="d-flex gap-2"> 
                  <input type="text" id="customSearch" placeholder="Search here..." class="form-control ms-0 custom-search-table w-100"> 
                  <button id="customSearchButton" class="btn btn-primary">Search</button> 
                </div>
              </div> 
            </div>
          </div>
        </div>
      `);

      try {
        new Choices('#customAction', {
          shouldSort: false,
          allowHTML: true,
          searchEnabled: true,
          itemSelectText: '',
        });
      } catch (error) {
        console.error('choicejs not initialize:', error);
      }

      let searchTimeout;
      $('#customSearch').on('input', function () {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          const value = $('#customSearch').val();
          if (tableInstance && typeof tableInstance.search === 'function') {
            tableInstance.search(value).draw();
          }
        }, 300);
      });

      $('#applyButton').on('click', function (e) {
        e.preventDefault();
      });
    }, 100);
  };

  onBeforeUnmount(() => {
    [tableRef, tableRef1, tableRef2].forEach((ref) => {
      if (ref?.value && $.fn.DataTable.isDataTable(ref.value)) {
        $(ref.value).DataTable().destroy();
        $(ref.value).empty();
      }
    });
  });
};

export default useDataTable;
