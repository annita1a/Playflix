// TVshow Pages
const TVshowPages = [
  {
    path: '/tv-shows',
    name: 'landing-page.tv-shows',
    component: () => import('../views/MainPages/TvShowsPage.vue'),
  },
  {
    path: '/tv-show-detail',
    name: 'landing-page.tv-show-detail',
    component: () => import('../views/TvShows/DetailPage.vue'),
  },
  {
    path: '/episode',
    name: 'landing-page.episode',
    component: () => import('../views/TvShows/EpisodePage.vue'),
  },
];

// Movies Pages
const MoviesPages = [
  {
    path: '/movies/dowlnload-movie',
    name: 'landing-page.movies.dowlnload-movie',
    meta: { header: 'header-default', footer: 'footer-dual' },
    component: () => import('../views/Movies/DownloadMovie.vue'),
  },
  {
    path: '/movies/skull-island',
    name: 'landing-page.movies.skull-island',
    meta: { header: 'header-default', footer: 'footer-dual' },
    component: () => import('../views/Movies/RestictedPage.vue'),
  },
  {
    path: '/movies/related',
    name: 'landing-page.movies.related',
    meta: { header: 'header-default', footer: 'footer-dual' },
    component: () => import('../views/Movies/ReletedMerchandiesPage.vue'),
  },
  {
    path: '/movies',
    name: 'landing-page.movies',
    component: () => import('../views/MainPages/MoviesPage.vue'),
  },
  {
    path: '/movies-detail',
    name: 'landing-page.movies.detail',
    component: () => import('../views/Movies/DetailPage.vue'),
  },
  {
    path: '/person-detail',
    name: 'landing-page.person-detail',
    component: () => import('../views/Movies/DetailPage.vue'),
  },
  
];

// Videos Pages
const VideosPages = [
  {
    path: '/videos',
    name: 'landing.videos',
    component: () => import('../views/MainPages/VideosPage.vue'),
  },
  {
    path: '/video-detail',
    name: 'landing.video-detail',
    component: () => import('../views/videos/DetailPage.vue'),
  },

];

// Genres Pages
const GenresPages = [
  {
    path: '/geners',
    name: 'landing-page.geners',
    meta: { pageName: 'streamGenres.genre', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/GenersPage.vue'),
  },
  // {
  //   path: '/all-geners',
  //   name: 'landing-page.all-geners',
  //   meta: { pageName: 'sectionTitle.view_all', beforeWrapper: 'breadcrumb-widget' },
  //   component: () => import('../views/AllGeners.vue'),
  // },
];
// Tags Pages
const TagsPages = [
  {
    path: '/tags',
    name: 'landing-page.tags',
    meta: { pageName: 'streamPages.tags', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/TagsPage.vue'),
  },
  {
    path: '/view-all-tags',
    name: 'landing-page.view-all-tags',
    meta: { pageName: 'streamPages.tags', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ViewAllTags.vue'),
  },
];
// Cast Pages
const CastPages = [
  {
    path: '/all-personality',
    name: 'landing-page.personality',
    meta: { pageName: 'sectionTitle.view_all', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/Cast/AllPersonality.vue'),
  },
  {
    path: '/cast',
    name: 'landing-page.cast',
    meta: { pageName: 'streamPages.cast', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/Cast/CastPage.vue'),
  },
  {
    path: '/cast-detail',
    name: 'landing-page.cast-detail',
    component: () => import('../views/Cast/DetailPage.vue'),
  },
];

// Blog Pages
const BlogPages = [
  {
    path: '/blogs',
    name: 'landing-page.blogs',
    meta: { pageName: 'streamBlog.blog_listing', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/ListPage.vue'),
  },
  {
    path: '/blogs-date',
    name: 'landing-page.blogs-date',
    meta: { pageName: 'Day: September 23, 2022', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/BlogDate.vue'),
  },
  {
    path: '/blogs-author',
    name: 'landing-page.blogs-author',
    meta: { pageName: 'Author: Goldenmace', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/ListPage.vue'),
  },
  {
    path: '/blogs/:grid',
    name: 'landing-page.blogs-grid',
    meta: { pageName: 'Blog Grid', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/GridList.vue'),
  },
  {
    path: '/blogs-sidebar/left',
    name: 'landing-page.blogs-sidebar',
    meta: { pageName: 'streamPages.left_sidebar', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/SidebarListPage.vue'),
  },
  {
    path: '/blogs-sidebar/right',
    name: 'landing-page.blogs-sidebar.right',
    meta: { pageName: 'streamPages.right_sidebar', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/RightSidebar.vue'),
  },
  {
    path: '/blogs-detail/:slug',
    name: 'landing-page.blogs.detail',
    meta: { pageName: 'streamBlog.blog14', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/DetailPage.vue'),
  },
  {
    path: '/blogs-category',
    name: 'landing-page.blogs.category',
    meta: { pageName: 'streamBlogCategory.drama', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/ListPage.vue'),
  },
  {
    path: '/blogs-tag',
    name: 'landing-page.blogs.tag',
    meta: { pageName: 'streamBlogTag.comedy', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/BlogDate.vue'),
  },
  {
    path: '/blogs-date',
    name: 'landing-page.blogs.date',
    meta: { pageName: 'Day: September 23, 2022', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/ListPage.vue'),
  },
  {
    path: '/blogs-author',
    name: 'landing-page.blogs.author',
    meta: { pageName: 'Author: Goldenmace', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/ListPage.vue'),
  },
  {
    path: '/blogs-template',
    name: 'landing-page.blogs.template',
    meta: { pageName: 'streamBlog.scarlett_backlash', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/BlogTemplate.vue'),
  },
  {
    path: '/blogs-single/:type',
    name: 'landing-page.blogs.single',
    meta: { pageName: 'blog.black_pearl', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/BlogSingle.vue'),
  },
  {
    path: '/pagination-style/blogs-pagination',
    name: 'landing-page.blogs-pagination',
    meta: { pageName: 'streamPages.blog_pagination', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/BlogPagination.vue'),
  },
  {
    path: '/pagination-style/blogs-load-more',
    name: 'landing-page.blogs-load-more',
    meta: { pageName: 'streamPages.blog_load_more', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/BlogLoadMore.vue'),
  },
  {
    path: '/pagination-style/blogs-infinite-scroll',
    name: 'landing-page.blogs-infinite-scroll',
    meta: { pageName: 'streamPages.blog_infinite_scroll', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/BlogInfiniteScroll.vue'),
  },
];

//  Shop Pages
const ShopPages = [
  {
    path: 'cart',
    name: 'landing-page.cart',
    meta: { pageName: 'streamShop.cart', header: 'header-merchandise', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/MerchandisePages/CartPage.vue'),
  },
  {
    path: 'checkout',
    name: 'landing-page.checkout',
    meta: { header: 'header-merchandise', pageName: 'streamShop.checkout', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/MerchandisePages/CheckoutPage.vue'),
  },
  {
    path: 'wishlist',
    name: 'landing-page.wishlist',
    meta: { pageName: 'streamPages.wishlist', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/MerchandisePages/WishlistPage.vue'),
  },
  {
    path: 'track-order',
    name: 'landing-page.track-order',
    meta: { pageName: 'streamPages.order_tracking', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/MerchandisePages/TrackOrder.vue'),
  },
  {
    path: 'shop-cart-summary',
    name: 'landing-page.shop-cart-summary',
    meta: { pageName: 'Cart Summary', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/MerchandisePages/ShopCartSummary.vue'),
  },
  {
    path: 'auth',
    name: 'landing-page.auth',
    component: () => import('../views/MerchandisePages/AuthPage.vue'),
  },
  {
    path: 'my-account',
    name: 'landing-page.account',
    meta: { pageName: 'streamPages.my_account_page', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/MerchandisePages/Account/MyAccount.vue'),
  },
  {
    path: 'account-orders',
    name: 'landing-page.orders',
    meta: { pageName: 'streamPages.my_account_page', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/MerchandisePages/Account/OrdersPage.vue'),
  },
  {
    path: 'account-download',
    name: 'landing-page.account.download',
    meta: { pageName: 'streamPages.my_account_page', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/MerchandisePages/Account/DownloadsPage.vue'),
  },
  {
    path: 'account-address',
    name: 'landing-page.account.address',
    meta: { pageName: 'streamPages.my_account_page', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/MerchandisePages/Account/AddressPage.vue'),
  },
  {
    path: 'account-detail',
    name: 'landing-page.account.detail',
    meta: { pageName: 'streamPages.my_account_page', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/MerchandisePages/Account/AccountDetailPage.vue'),
  },
  {
    path: 'account-logout',
    name: 'landing-page.account.logout',
    meta: { pageName: 'streamPages.my_account_page', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/MerchandisePages/Account/YourAccount.vue'),
  },
];

// Pricing Pages
const PricingPages = [
  {
    path: '/pricing-plan',
    name: 'landing-page.pricing-plan',
    meta: { pageName: 'streamPages.pricing_plan', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/PricingPlan.vue'),
  },
];
const ProfilePages = [
  {
    path: '/profile-marvin',
    name: 'Profile Marvin',
    meta: { pageName: 'profile.profile_marvin' },
    component: () => import('../views/ProfilePages/ProfileMarvin.vue'),
  },
  {
    path: '/membership-invoice',
    name: 'Membership Invoice',
    meta: { pageName: 'streamProfile.label_membership_orders', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ProfilePages/MembershipInvoice.vue'),
  },
  {
    path: '/membership-comfirmation',
    name: 'Membership Comfirmation',
    meta: { pageName: 'profile.membership_comfirmation', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ProfilePages/MembershipComfirmation.vue'),
  },
  {
    path: '/membership-level',
    name: 'Membership Levels',
    meta: { pageName: 'streamProfile.label_membership_levels', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ProfilePages/MembershipLevel.vue'),
  },
  {
    path: '/membership-orders',
    name: 'Membership Orders',
    meta: { pageName: 'streamProfile.label_membership_orders', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ProfilePages/MembershipOrders.vue'),
  },
  {
    path: '/membership-account',
    name: 'Membership Account',
    meta: { pageName: 'profile.membership_account', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ProfilePages/MembershipAccount.vue'),
  },
  {
    path: '/your-profile',
    name: 'Your Profile',
    meta: { pageName: 'profile.your_profile', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ProfilePages/YourProfile.vue'),
  }, 
  {
    path: '/change-password',
    name: 'Change Password',
    meta: { pageName: 'streamProfile.change_password', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ProfilePages/ChangePassword.vue'),
  },   
]
// Extra Pages
const ExtraPages = [
  {
    path: '/about-us',
    name: 'landing-page.about-us',
    meta: { pageName: 'streamPages.about_us', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ExtraPages/AboutPage.vue'),
  },
  {
    path: '/contact-us',
    name: 'landing-page.contact-us',
    meta: { pageName: 'streamPages.contact_us', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ExtraPages/ContactPage.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'landing-page.privacy-policy',
    meta: { pageName: 'streamPages.privacy_policy', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ExtraPages/PrivacyPolicy.vue'),
  },
  {
    path: '/terms-of-use',
    name: 'landing-page.terms-of-use',
    meta: { pageName: 'sectionTitle.terms_of_use', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ExtraPages/TermsofUse.vue'),
  },
  {
    path: '/faq',
    name: 'landing-page.faq',
    meta: { pageName: 'streamPages.faq', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ExtraPages/FAQPage.vue'),
  },
  {
    path: 'product-detail',
    name: 'landing-page.merchandise.shop.detail',
    meta: { pageName: 'streamShop.product_detail', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/MerchandisePages/ProductDetailPage.vue'),
  },
  {
    path: 'all-product',
    name: 'landing-page.merchandise.shop.all-product',
    meta: { pageName: 'streamShop.all_products', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/MerchandisePages/AllProductPage.vue'),
  },
];

export const MerchandiseRoutes = () => {
  return [
    {
      path: '',
      name: 'landing-page.merchandise.home',
      component: () => import('../views/MerchandisePages/IndexPage.vue'),
    },
    {
      path: 'shop',
      name: 'landing-page.merchandise.shop',
      meta: { pageName: 'streamPages.shop', beforeWrapper: 'breadcrumb-widget', footer: 'default' },
      component: () => import('../views/MerchandisePages/ShopCategoryPage.vue'),
    },
    {
      path: 'cart',
      name: 'landing-page.merchandise.cart',
      meta: { pageName: 'streamPages.cart_page', header: 'header-merchandise', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/CartPage.vue'),
    },
    {
      path: 'checkout',
      name: 'landing-page.merchandise.checkout',
      meta: { header: 'header-merchandise', pageName: 'streamPages.checkout_page', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/CheckoutPage.vue'),
    },
    {
      path: 'wishlist',
      name: 'landing-page.merchandise.wishlist',
      meta: { pageName: 'streamPages.wishlist_page', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/WishlistPage.vue'),
    },
    {
      path: 'track-order',
      name: 'landing-page.merchandise.track-order',
      meta: { pageName: 'streamPages.order_tracking', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/TrackOrder.vue'),
    },
    {
      path: 'shop-cart-summary',
      name: 'landing-page.merchandise.shop-cart-summary',
      meta: { pageName: 'Cart Summary', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/ShopCartSummary.vue'),
    },
    {
      path: 'auth',
      name: 'landing-page.merchandise.auth',
      component: () => import('../views/MerchandisePages/AuthPage.vue'),
    },
    {
      path: 'my-account',
      name: 'landing-page.merchandise.account',
      meta: { pageName: 'streamPages.my_account_page', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/MyAccount.vue'),
    },
    {
      path: 'account-orders',
      name: 'landing-page.merchandise.orders',
      meta: { pageName: 'streamPages.my_account_page', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/OrdersPage.vue'),
    },
    {
      path: 'account-download',
      name: 'landing-page.merchandise.account.download',
      meta: { pageName: 'streamPages.my_account_page', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/DownloadsPage.vue'),
    },
    {
      path: 'account-address',
      name: 'landing-page.merchandise.account.address',
      meta: { pageName: 'streamPages.my_account_page', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/AddressPage.vue'),
    },
    {
      path: 'account-detail',
      name: 'landing-page.merchandise.account.detail',
      meta: { pageName: 'streamPages.my_account_page', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/AccountDetailPage.vue'),
    },
    {
      path: 'account-logout',
      name: 'landing-page.merchandise.account.logout',
      meta: { pageName: 'streamPages.my_account_page', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/YourAccount.vue'),
    },
  ];
};
export const DefaultPages = [
  {
    path: '/login',
    meta: { pageName: 'Login', pageWrapperClass: '' },
    name: 'landing-page.login-page',
    component: () => import('../views/AuthPages/LoginPage.vue'),
  },
  {
    path: '/signup',
    meta: { pageName: 'Sign Up', pageWrapperClass: '' },
    name: 'landing-page.sing-up-page',
    component: () => import('../views/AuthPages/SignUpPage.vue'),
  },
  {
    path: '/lostpassword',
    meta: { pageName: 'Lost Password', pageWrapperClass: '' },
    name: 'landing-page.lost-password',
    component: () => import('../views/AuthPages/LostPassword.vue'),
  },
  {
    path: '/error-page-one',
    name: 'landing-page.error-page-one',
    component: () => import('../views/ExtraPages/ErrorPage1.vue'),
  },
  {
    path: '/error-page-two',
    name: 'landing-page.error-page-two',
    component: () => import('../views/ExtraPages/ErrorPage2.vue'),
  },
  {
    path: '/comming-soon',
    name: 'landing-page.comming-soon',
    component: () => import('../views/ExtraPages/CommingSoonPage.vue'),
  },
  {
    path: '/movie-player',
    name: 'landing-page.movie-player',
    component: () => import('../views/Movies/MoviePlayer.vue'),
  },
  {
    path: '/video-player',
    name: 'landing.video-player',
    component: () => import('../views/videos/VideoPlayer.vue'),
  },
];

// View All
const ViewAll = [
  {
    path: '/view-all',
    meta: { pageName: 'sectionTitle.view_all', beforeWrapper: 'breadcrumb-widget' },
    name: 'landing-page.view-all',
    component: () => import('../views/ViewAll.vue'),
  },
  {
    path: '/view-more',
    name: 'View More',
    component: () => import('../views/ViewMore.vue'),
  },
];

// Playist
const PlayList = [
  {
    path: '/playlist',
    name: 'landing-page.play-list',
    component: () => import('../views/PlayList.vue'),
  },
  {
    path: '/playlist-detail',
    name: 'Playlist Detail',
    component: () => import('../views/PlaylistDetail.vue'),
  },
  {
    path: '/archive-playlist',
    meta: { pageName: 'streamPlaylist.playlist', beforeWrapper: 'breadcrumb-widget' },
    name: 'Playlist',
    component: () => import('../views/ArchivePlaylist.vue'),
  },
];

export const LandingPageRoutes = () => [
  // Main Pages
  {
    path: '',
    name: 'landing-page.ott',
    component: () => import('../views/MainPages/OTTPage.vue'),
  },
  {
    path: '/home',
    name: 'landing-page.home',
    component: () => import('../views/MainPages/IndexPage.vue'),
  },
  {
    path: '/watchlist-detail',
    meta: { pageName: 'streamAccount.watchlist', beforeWrapper: 'breadcrumb-widget' },
    name: 'landing-page.watchlist-detail',
    component: () => import('../views/WatchDetail.vue'),
  },
  ...TVshowPages,
  ...MoviesPages,
  ...VideosPages,
  ...GenresPages,
  ...TagsPages,
  ...CastPages,
  ...BlogPages,
  ...ShopPages,
  ...PricingPages,
  ...ProfilePages,
  ...ExtraPages,
  ...ViewAll,
  ...PlayList,
];
