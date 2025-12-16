import 'choices.js/public/assets/styles/choices.min.css';
import './style.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import 'bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from './i18n';
import Router from './router/index';
import App from './App.vue';
import globalComponents from './plugins/global-components';
import 'sweetalert2/dist/sweetalert2.min.css';
import './assets/custom/custom-css.scss'

// phospher icon
import './assets/vendor/phosphor-icons/Fonts/regular/style.css';
import './assets/vendor/phosphor-icons/Fonts/duotone/style.css';
import './assets/vendor/phosphor-icons/Fonts/fill/style.css';
import './assets/vendor/phosphor-icons/Fonts/bold/style.css';

import "./assets/vendor/streamit-font/iconly.css";

const pinia = createPinia();

const app = createApp(App);
app.use(Router);
app.use(pinia);
app.use(createI18n());
app.use(globalComponents);
app.mount('#app');
