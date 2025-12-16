<template>
   <loader-component :show="isLoader"></loader-component>
  <main class="main-content">
    <!-- Header Component Start -->
    <HeaderDefault></HeaderDefault>
    <!-- Header Component End-->

    <!-- Hero Slider, Banner Start -->
    <BreadcrumbWidget v-if="route.meta.beforeWrapper"></BreadcrumbWidget>
    <!-- Hero Slider, Banner End -->

    <!-- Main Component Start -->
    <router-view />
    <!-- Main Component Start -->
  </main>

  <!-- Footer Component Start -->
  <FooterDefault></FooterDefault>
  <MobileFooter v-if="route.meta.mobileFooter === true"></MobileFooter>
  <!-- Footer Component End -->

  <SettingOffcanvas></SettingOffcanvas>

  <!-- Back To Top Button -->
  <BackToTop />
</template>
<script setup>
// Import Vue Rounter Hooks
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
// Import Header Components
import HeaderDefault from '../components/partials/HeaderDefault.vue';
import FooterDefault from '../components/partials/FooterDefault.vue';

// Import Header Breadcrumb Component
import BreadcrumbWidget from '../components/BreadcrumbWidget.vue';

import SettingOffcanvas from '../components/SettingOffcanvas.vue';
import MobileFooter from '../components/partials/MobileFooter.vue';
import BackToTop from '../components/BackToTop.vue';

const route = useRoute();
// control prop passed to <loader-component>
const isLoader = ref(true);

onMounted(() => {

  setTimeout(() => {
    isLoader.value = false;
  }, 400);
});


</script>
