<template>
  <!-- Loader overlay shown during navigation -->
  <LoaderComponent v-if="loading" />

  <main class="main-content">
    <!-- Header Component Start -->
    <HeaderDefault></HeaderDefault>
    <!-- Header Component End-->

    <!-- Hero Slider, Banner Start -->
    <BreadcrumbWidget v-if="isBreadcrumb"></BreadcrumbWidget>
    <!-- Hero Slider, Banner End -->

    <!-- Main Component Start -->
    <NuxtPage />
    <!-- Main Component Start -->
  </main>

  <!-- Footer Component Start -->
  <FooterDefault></FooterDefault>
  <MobileFooter></MobileFooter>
  <!-- Footer Component End -->

  <SettingOffcanvas></SettingOffcanvas>

  <!-- Back To Top Button -->
  <BackToTop />
</template>

<script setup>
// Import Vue Rounter Hooks
import { ref, computed } from "vue";
import { useNuxtApp } from "#app";
import { useRouter } from 'vue-router';

// Import Header Components
import HeaderDefault from "../components/partials/HeaderDefault.vue";
import FooterDefault from "../components/partials/FooterDefault.vue";

// Import Header Breadcrumb Component
import BreadcrumbWidget from "../components/BreadcrumbWidget.vue";

import SettingOffcanvas from "../components/SettingOffcanvas.vue";
import MobileFooter from '../components/partials/MobileFooter.vue';
import BackToTop from '../components/BackToTop.vue';
import { useStremit } from "../../store/streamit";
import LoaderComponent from "~/components/LoaderComponent.vue";

const store = useStremit();
const isBreadcrumb = computed(() => store.breadcrumb.show);

// Loading flag used to show/hide the LoaderComponent during page navigation
// default to false so the loader doesn't flash on initial load
const loading = ref(false);
const nuxtApp = useNuxtApp();
const router = useRouter();

// Small minimum visible duration (ms) so very-fast navigations still show the loader briefly
const MIN_VISIBLE_MS = 250;
let loaderStart = 0;
let hideTimeout = null;

// Nuxt navigation hooks: set loading true at start, false when finished
// These hooks are available in Nuxt 3 (useNuxtApp from #app)
nuxtApp.hook("page:start", () => {
  console.debug('[loader] page:start hook fired - setting loading = true');
  // clear any pending hide timeout from a previous navigation
  if (hideTimeout) {
    clearTimeout(hideTimeout);
    hideTimeout = null;
  }
  loaderStart = Date.now();
  loading.value = true;
});

nuxtApp.hook("page:finish", () => {
  console.debug('[loader] page:finish hook fired - scheduling loading = false');
  const elapsed = Date.now() - loaderStart;
  const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
  if (remaining > 0) {
    // keep loader visible for the minimum duration
    hideTimeout = setTimeout(() => {
      loading.value = false;
      hideTimeout = null;
      console.debug('[loader] hide timeout finished - loading = false');
    }, remaining);
  } else {
    loading.value = false;
    console.debug('[loader] loading = false (no delay needed)');
  }
});

// Register router guards to catch navigations that may not trigger Nuxt page hooks
router.beforeEach((to, from, next) => {
  console.debug('[loader] router.beforeEach - setting loading = true');
  if (hideTimeout) {
    clearTimeout(hideTimeout);
    hideTimeout = null;
  }
  loaderStart = Date.now();
  loading.value = true;
  next();
});

router.afterEach(() => {
  console.debug('[loader] router.afterEach - scheduling loading = false');
  const elapsed = Date.now() - loaderStart;
  const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
  if (remaining > 0) {
    hideTimeout = setTimeout(() => {
      loading.value = false;
      hideTimeout = null;
      console.debug('[loader] router hide timeout finished - loading = false');
    }, remaining);
  } else {
    loading.value = false;
    console.debug('[loader] router loading = false (no delay needed)');
  }
});

// If you want a small minimum display time for loader or fallback, you can
// implement a timeout here (optional). For now we rely on page hooks.
</script>

<style lang="scss"></style>
