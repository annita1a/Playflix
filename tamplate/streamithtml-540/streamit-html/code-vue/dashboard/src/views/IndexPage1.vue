<template>
  <b-row>
    <b-col lg="8">
      <b-row>
        <b-col v-for="(item, index) in cardDetails" :key="index" md="4" sm="6">
          <b-card>
            <div class="icon-space mb-5">
              <i :class="`ph ${item.icon} fs-1`"></i>
            </div>
            <div class="card-details">
              <h1 class="fw-semibold card-details-title">{{ item.count }}</h1>
              <p class="mb-0 fs-6">{{ $t(item.label) }}</p>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-col>

    <b-col lg="4">
      <b-card no-body class="card-block card-height card-dashboard">
        <b-card-header>
          <div class="iq-header-title">
            <h3 class="card-title">{{ $t('dashboard1.top-genres') }}</h3>
          </div>
        </b-card-header>
        <b-card-body>
          <ApexChart class="genre-chart d-flex align-items-center justify-content-center" element="genre-chart"
            :chart-option="genreChart" />
        </b-card-body>
      </b-card>
    </b-col>

    <b-col lg="6">
      <b-card no-body class="card-block card-height card-dashboard">
        <b-card-header class="d-flex align-items-center justify-content-between">
          <div class="iq-header-title">
            <h3 class="card-title">{{ $t('dashboard1.total-revenue-subscriptions') }}</h3>
          </div>
          <div class="dropdown">
            <button id="dropdownTotalRevenue" class="btn custom-btn-dark-dropdown dropdown-toggle total-revenue"
              type="button" data-bs-toggle="dropdown" aria-expanded="false">Year</button>
            <ul class="dropdown-menu sub-dropdown" aria-labelledby="dropdownTotalRevenue">
              <li><a class="revenue-dropdown-item dropdown-item" data-type="Year">Year</a></li>
              <li><a class="revenue-dropdown-item dropdown-item" data-type="Month">Month</a></li>
              <li><a class="revenue-dropdown-item dropdown-item" data-type="Week">Week</a></li>
            </ul>
          </div>
        </b-card-header>
        <b-card-body>
          <ApexChart class="total-revenue-subscription d-flex justify-content-center"
            element="total-revenue-subscription" :chart-option="totalRevenueSubscription" />
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card no-body class="card-dashboard">
        <b-card-header class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
          <div class="iq-header-title">
            <h3 class="card-title">{{ $t('dashboard1.new-subscribers') }}</h3>
          </div>
          <div class="dropdown">
            <button id="dropdownTotalRevenue1" class="btn custom-btn-dark-dropdown dropdown-toggle total-revenue"
              type="button" data-bs-toggle="dropdown" aria-expanded="false">Year</button>
            <ul class="dropdown-menu sub-dropdown" aria-labelledby="dropdownTotalRevenue1">
              <li><a class="revenue-dropdown-item dropdown-item" data-type="Year">Year</a></li>
              <li><a class="revenue-dropdown-item dropdown-item" data-type="Month">Month</a></li>
              <li><a class="revenue-dropdown-item dropdown-item" data-type="Week">Week</a></li>
            </ul>
          </div>
        </b-card-header>
        <b-card-body>
          <ApexChart class="new-subcriber d-flex align-items-center justify-content-center" element="new-subcriber"
            :chart-option="newSubscriberChartOptions" />
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card no-body class="card-block card-height card-dashboard">
        <b-card-header class="d-flex justify-content-between">
          <div class="iq-header-title">
            <h3 class="card-title">{{ $t('dashboard1.most-watched') }}</h3>
          </div>
          <div class="dropdown">
            <button id="dropdownTotalRevenue2" class="btn custom-btn-dark-dropdown dropdown-toggle total-revenue"
              type="button" data-bs-toggle="dropdown" aria-expanded="false">Year</button>
            <ul class="dropdown-menu sub-dropdown" aria-labelledby="dropdownTotalRevenue2">
              <li><a class="revenue-dropdown-item dropdown-item" data-type="Year">Year</a></li>
              <li><a class="revenue-dropdown-item dropdown-item" data-type="Month">Month</a></li>
              <li><a class="revenue-dropdown-item dropdown-item" data-type="Week">Week</a></li>
            </ul>
          </div>
        </b-card-header>
        <b-card-body>
          <ApexChart class="d-activity d-flex justify-content-center" element="d-activity"
            :chart-option="dailyActivityChartOptions" />
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card no-body class="card-block card-height card-dashboard">
        <b-card-header class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
          <div class="iq-header-title">
            <h3 class="card-title">{{ $t('dashboard1.user-rating-and-reviews') }}</h3>
          </div>
          <div class="card-header-toolbar d-flex align-items-center">
            <div class="dropdown">
              <span id="dropdownMenuButton5" class="text-primary" data-bs-toggle="dropdown"> {{
                $t('dashboard1.view-all') }} </span>
              <div class="dropdown-menu dropdown-menu-end iq-dropdown toggle" aria-labelledby="dropdownMenuButton5">
                <a class="dropdown-item" href="#"><i class="ri-eye-fill me-2"></i>View</a>
                <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill me-2"></i>Delete</a>
                <a class="dropdown-item" href="#"><i class="ri-pencil-fill me-2"></i>Edit</a>
                <a class="dropdown-item" href="#"><i class="ri-printer-fill me-2"></i>Print</a>
                <a class="dropdown-item" href="#"><i class="ri-file-download-fill me-2"></i>Download</a>
              </div>
            </div>
          </div>
        </b-card-header>
        <b-card-body class="pt-0">
          <div class="mt-4 table-responsive">
            <table id="basic-table" class="table mb-0" role="grid">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex gap-3 align-items-center">
                      <img class="avatar avatar-40 rounded-pill" :src="generateImgPath('/assets/images/author/01.png')"
                        alt="profile" />
                      <div class="text-start">
                        <h6 class="m-0">John Doe</h6>
                        <small>john@gmail.com</small>
                      </div>
                    </div>
                  </td>
                  <td>9th March 2025</td>
                  <td>Movies</td>
                  <td>
                    <div class="d-flex gap-3 align-items-center">
                      <div class="star-rating">
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex gap-3 align-items-center">
                      <img class="avatar avatar-40 rounded-pill" :src="generateImgPath('/assets/images/author/02.png')"
                        alt="profile" />
                      <div class="text-start">
                        <h6 class="m-0">Mega Links</h6>
                        <small>megalink156@gmail.com</small>
                      </div>
                    </div>
                  </td>
                  <td>7th March 2025</td>
                  <td>Movies</td>
                  <td>
                    <div class="d-flex gap-3 align-items-center">
                      <div class="star-rating">
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex gap-3 align-items-center">
                      <img class="avatar avatar-40 rounded-pill" :src="generateImgPath('/assets/images/author/03.png')"
                        alt="profile" />
                      <div class="text-start">
                        <h6 class="m-0">Felix Harris</h6>
                        <small>felix@gmail.com</small>
                      </div>
                    </div>
                  </td>
                  <td>21st September 2024</td>
                  <td>Tvshow</td>
                  <td>
                    <div class="d-flex gap-3 align-items-center">
                      <div class="star-rating">
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex gap-3 align-items-center">
                      <img class="avatar avatar-40 rounded-pill" :src="generateImgPath('/assets/images/author/04.png')"
                        alt="profile" />
                      <div class="text-start">
                        <h6 class="m-0">Stella Green</h6>
                        <small>stella@gmail.com</small>
                      </div>
                    </div>
                  </td>
                  <td>9th March 2025</td>
                  <td>Tvshow</td>
                  <td>
                    <div class="d-flex gap-3 align-items-center">
                      <div class="star-rating">
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex gap-3 align-items-center">
                      <img class="avatar avatar-40 rounded-pill" :src="generateImgPath('/assets/images/author/05.png')"
                        alt="profile" />
                      <div class="text-start">
                        <h6 class="m-0">Deborah Thomas</h6>
                        <small>deborah@gmail.com</small>
                      </div>
                    </div>
                  </td>
                  <td>12th March 2024</td>
                  <td>Tvshow</td>
                  <td>
                    <div class="d-flex gap-3 align-items-center">
                      <div class="star-rating">
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex gap-3 align-items-center">
                      <img class="avatar avatar-40 rounded-pill" :src="generateImgPath('/assets/images/author/06.png')"
                        alt="profile" />
                      <div class="text-start">
                        <h6 class="m-0">Jorge Perez</h6>
                        <small>jorge@gmail.com</small>
                      </div>
                    </div>
                  </td>
                  <td>9th September 2024</td>
                  <td>Tvshow</td>
                  <td>
                    <div class="d-flex gap-3 align-items-center">
                      <div class="star-rating">
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>{{ '' }}
                        <span class="star filled text-warning">
                          <i class="ph ph-fill ph-star"></i>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col cols="12">
      <b-row>
        <b-col lg="4" md="6">
          <b-card no-body class="card-block card-height card-dashboard">
            <b-card-header>
              <div class="iq-header-title">
                <h3 class="card-title">{{ $t('dashboard1.top-rated') }}</h3>
              </div>
            </b-card-header>
            <b-card-body>
              <ApexChart class="top-rated-chart d-flex align-items-center justify-content-center"
                element="top-rated-chart" :chart-option="topRatedChartOptions" />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="8" md="6">
          <b-card no-body class="card-dashboard">
            <b-card-header class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
              <div class="iq-header-title">
                <h3 class="card-title">{{ $t('dashboard1.transaction-history') }}</h3>
              </div>
              <div class="card-header-toolbar d-flex align-items-center">
                <div class="dropdown">
                  <span id="6" class="text-primary" data-bs-toggle="dropdown"> {{ $t('dashboard1.view-all') }} </span>
                  <div class="dropdown-menu dropdown-menu-end iq-dropdown toggle">
                    <a class="dropdown-item" href="#"><i class="ri-eye-fill me-2"></i>View</a>
                    <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill me-2"></i>Delete</a>
                    <a class="dropdown-item" href="#"><i class="ri-pencil-fill me-2"></i>Edit</a>
                    <a class="dropdown-item" href="#"><i class="ri-printer-fill me-2"></i>Print</a>
                    <a class="dropdown-item" href="#"><i class="ri-file-download-fill me-2"></i>Download</a>
                  </div>
                </div>
              </div>
            </b-card-header>
            <b-card-body class="pt-0">
              <div class="mt-4 table-responsive mb-0">
                <table id="basic-table1" class="table mb-0" role="grid">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Plan</th>
                      <th>Amount</th>
                      <th>Duration</th>
                      <th>Payment Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex gap-3 align-items-center">
                          <img class="avatar avatar-40 rounded-pill"
                            :src="generateImgPath('/assets/images/author/01.png')" alt="profile" />
                          <div class="text-start">
                            <h6 class="m-0">John Doe</h6>
                            <small>john@gmail.com</small>
                          </div>
                        </div>
                      </td>
                      <td>12th March 2025</td>
                      <td>Basic</td>

                      <td>$5.00</td>
                      <td>1 week</td>
                      <td>Stripe</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex gap-3 align-items-center">
                          <img class="avatar avatar-40 rounded-pill"
                            :src="generateImgPath('/assets/images/author/02.png')" alt="profile" />
                          <div class="text-start">
                            <h6 class="m-0">Mega Links</h6>
                            <small>megalink156@gmail.com</small>
                          </div>
                        </div>
                      </td>
                      <td>10th March 2025</td>
                      <td>Basic</td>

                      <td>$5.00</td>
                      <td>1 week</td>
                      <td>Stripe</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex gap-3 align-items-center">
                          <img class="avatar avatar-40 rounded-pill"
                            :src="generateImgPath('/assets/images/author/03.png')" alt="profile" />
                          <div class="text-start">
                            <h6 class="m-0">Felix Harris</h6>
                            <small>felix@gmail.com</small>
                          </div>
                        </div>
                      </td>
                      <td>10th March 2025</td>
                      <td>Basic</td>

                      <td>$5.00</td>
                      <td>1 week</td>
                      <td>Stripe</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex gap-3 align-items-center">
                          <img class="avatar avatar-40 rounded-pill"
                            :src="generateImgPath('/assets/images/author/04.png')" alt="profile" />
                          <div class="text-start">
                            <h6 class="m-0">Stella Green</h6>
                            <small>stella@gmail.com</small>
                          </div>
                        </div>
                      </td>
                      <td>10th March 2025</td>
                      <td>Basic</td>

                      <td>$5.00</td>
                      <td>1 week</td>
                      <td>Stripe</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex gap-3 align-items-center">
                          <img class="avatar avatar-40 rounded-pill"
                            :src="generateImgPath('/assets/images/author/05.png')" alt="profile" />
                          <div class="text-start">
                            <h6 class="m-0">Deborah Thomas</h6>
                            <small>deborah@gmail.com</small>
                          </div>
                        </div>
                      </td>
                      <td>10th March 2025</td>
                      <td>Basic</td>

                      <td>$5.00</td>
                      <td>1 week</td>
                      <td>Stripe</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex gap-3 align-items-center">
                          <img class="avatar avatar-40 rounded-pill"
                            :src="generateImgPath('/assets/images/author/06.png')" alt="profile" />
                          <div class="text-start">
                            <h6 class="m-0">Jorge Perez</h6>
                            <small>jorge@gmail.com</small>
                          </div>
                        </div>
                      </td>
                      <td>10th March 2025</td>
                      <td>Elite Plan</td>

                      <td>$80.00</td>
                      <td>1 year</td>
                      <td>Stripe</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script setup>
import { ref } from 'vue';
import ApexChart from '../components/core/charts/ApexChart.vue';

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const cardDetails = [
  {
    icon: 'ph-user',
    count: '15k+',
    label: 'dashboard1.total-users',
  },
  {
    icon: 'ph-user-gear',
    count: '05k+',
    label: 'dashboard1.active-users',
  },
  {
    icon: 'ph-currency-circle-dollar',
    count: '10k+',
    label: 'dashboard1.total-subscribers',
  },
  {
    icon: 'ph-film-strip',
    count: '15k+',
    label: 'dashboard1.total-movie',
  },
  {
    icon: 'ph-television-simple',
    count: '05k+',
    label: 'dashboard1.total-tvshow',
  },
  {
    icon: 'ph-video',
    count: '10k+',
    label: 'dashboard1.total-video',
  },
];

const colors = ['var(--bs-primary)', 'var(--bs-primary-tint-20)', 'var(--bs-primary-tint-40)', 'var(--bs-primary-tint-60)', 'var(--bs-primary-tint-80)'];
const genreChart = ref({
  series: [25, 15, 30, 20, 10],
  chart: {
    height: 255,
    type: 'donut',
  },
  colors: colors,
  labels: ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  legend: {
    show: true,
    position: 'bottom',
    fontSize: '14px',
    labels: {
      colors: 'var(--bs-heading-color)',
    },
  },

  tooltip: {
    theme: 'dark',
  },
});

const totalRevenueSubscription = ref({
  series: [
    {
      name: 'Total Revenue',
      data: [10, 15, 10, 15, 5, 10, 10],
    },
  ],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  colors: ['var(--bs-primary)'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  grid: {
    borderColor: 'var(--bs-border-color)',
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0,
    },
  },
  xaxis: {
    type: 'category',
    labels: {
      style: {
        colors: 'var(--bs-heading-color)',
      },
    },
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  yaxis: {
    labels: {
      style: {
        colors: ['var(--bs-heading-color)'],
      },
    },
  },
  tooltip: {
    style: {
      background: 'var(--bs-body-bg)',
      color: 'var(--bs-body-bg)'
    },
  },
});

const newSubscriberChartOptions = ref({
  series: [
    {
      name: 'Basic',
      data: [40, 60, 40, 70, 40, 40, 50, 60, 50, 30, 30, 40],
    },
    {
      name: 'Premium Plan',
      data: [70, 30, 20, 50, 30, 30, 50, 40, 40, 70, 30, 60],
    },
    {
      name: 'Ultimate Plan',
      data: [50, 40, 30, 30, 20, 30, 50, 60, 50, 60, 30, 40],
    },
    {
      name: 'Elite Plan',
      data: [40, 50, 40, 30, 40, 20, 40, 50, 40, 30, 30, 50],
    },
  ],
  colors: ['var(--bs-primary)', 'var(--bs-primary-tint-20)', 'var(--bs-primary-tint-40)', 'var(--bs-primary-tint-60)'],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -20,
          offsetY: 0,
        },
      },
    },
  ],
  grid: {
    borderColor: 'var(--bs-border-color)',
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '45%',
      borderRadius: 3,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 900,
            color: 'var(--bs-body-color)',
          },
        },
      },
    },
  },
  xaxis: {
    type: 'category',
    labels: {
      style: {
        colors: 'var(--bs-heading-color)',
      },
    },
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  yaxis: {
    labels: {
      style: {
        colors: ['var(--bs-heading-color)'],
      },
    },
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    labels: {
      colors: 'var(--bs-heading-color)',
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    theme: 'dark', // use 'dark' or 'light'
  },
});

const dailyActivityChartOptions = ref({
  series: [
    {
      name: 'Movie',
      data: [30, 50, 35, 60, 40, 60, 60],
    },
    {
      name: 'TV Show',
      data: [40, 50, 55, 50, 30, 80, 30],
    },
  ],
  chart: {
    type: 'bar',
    height: 430,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
    },
  },
  colors: ['var(--bs-primary)', 'var(--bs-primary-tint-20)', 'var(--bs-primary-tint-40)', 'var(--bs-primary-tint-60)'],
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  grid: {
    borderColor: 'var(--bs-border-color)',
  },
  plotOptions: {
    bar: {
      columnWidth: '25%',
      borderRadius: 3,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 900,
            color: 'var(--bs-body-color)',
          },
        },
      },
    },
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    labels: {
      style: {
        colors: 'var(--bs-heading-color)',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: 'var(--bs-heading-color)',
      },
    },
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    labels: {
      colors: 'var(--bs-heading-color)',
    },
    markers: {
      offsetX: -5,
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: (val) => `$ ${val}K`,
    },
    theme: 'dark', // using theme instead of custom style
  },
});

const topRatedChartOptions = ref({
  series: [55, 75],
  chart: {
    height: 430,
    type: 'radialBar',
  },
  colors: ['var(--bs-primary)', 'var(--bs-primary-tint-40)'],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '65%',
      },
      track: {
        strokeWidth: '100%',
        background: 'var(--bs-body-bg)',
      },
      dataLabels: {
        name: {
          fontSize: '16px',
          color: 'var(--bs-heading-color)',
        },
        value: {
          fontSize: '16px',
          color: 'var(--bs-heading-color)',
        },
        total: {
          show: true,
          color: 'var(--bs-heading-color)',
          fontSize: '16px',
          formatter: () => '81%', // static total
        },
      },
    },
  },
  labels: ['Movies', 'TV Shows'],
  legend: {
    show: true,
    position: 'bottom',
    fontSize: '14px',
    labels: {
      colors: ['var(--bs-heading-color)', 'var(--bs-heading-color)'],
    },
  },
  responsive: [
    {
      breakpoint: 300,
      options: {
        chart: {
          height: 150,
        },
      },
    },
  ],
});
</script>
