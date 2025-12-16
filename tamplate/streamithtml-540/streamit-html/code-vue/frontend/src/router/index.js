import { createRouter, createWebHistory } from 'vue-router';

// layouts
import FrontendLayout from '../layouts/FrontendLayout.vue';
import FrontendMerchandiseLayout from '../layouts/FrontendMerchandiseLayout.vue';
import { LandingPageRoutes, MerchandiseRoutes, DefaultPages } from './landing-page';

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: FrontendLayout,
    meta: { header: 'header-mega', mobileFooter: true },
    children: LandingPageRoutes(),
  },
  {
    path: '/merchandise',
    name: 'landing-page.merchandise',
    component: FrontendMerchandiseLayout,
    meta: {},
    children: MerchandiseRoutes(),
  },
  ...DefaultPages,
];

const Router = createRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
Router.beforeEach((to, from, next) => {
  const grid = to.params.grid;
  const blogType = to.params.type;
  if (grid) {
    switch (grid) {
      case 'one-column':
        to.meta.pageName = 'streamPages.1_column_blog';
        break;
      case 'two-column':
        to.meta.pageName = 'streamPages.2_column_blog';
        break;
      case 'three-column':
        to.meta.pageName = 'streamPages.3_column_blog';
        break;
      case 'four-column':
        to.meta.pageName = 'streamPages.4_column_blog';
        break;
      default:
        break;
    }
  }
  if (blogType) {
    switch (blogType) {
      case 'blog-template':
        to.meta.pageName = 'Blog Template';
        break;
      case 'single':
        to.meta.pageName = 'streamBlog.blog1';
        break;
      case 'audio':
        to.meta.pageName = 'streamBlog.blog8';
        break;
      case 'video':
        to.meta.pageName = 'streamBlog.blog7';
        break;
      case 'link':
        to.meta.pageName = 'streamBlog.blog8';
        break;
      case 'quote':
        to.meta.pageName = 'streamBlog.blog9';
        break;
      case 'gallery':
        to.meta.pageName = 'streamBlog.blog10';
        break;
      default:
        break;
    }
  }
  // Continue with the navigation
  next();
});

export default Router;
