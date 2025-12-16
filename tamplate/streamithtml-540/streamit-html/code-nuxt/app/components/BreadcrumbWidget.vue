<template>
  <div class="iq-breadcrumb">
    <b-container>
      <b-row class="align-items-center">
        <b-col sm="12">
          <nav aria-label="breadcrumb" class="text-center">
            <!-- <h2 class="title">{{ $t(route.meta.pageName) }}</h2> -->
            <ol class="breadcrumb justify-content-center text-white mt-0">
              <li class="breadcrumb-item">
                <nuxt-link :to="{ name: 'index' }">{{ $t('streamPages.home') }}</nuxt-link>
              </li>
              <!-- displayName will be the translated value if a translation exists, otherwise the raw pageName -->
              <li class="breadcrumb-item active">{{ displayName }}</li>
            </ol>
          </nav>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStremit } from "~/store/streamit";

const store = useStremit();
const pageName = computed(() => store.breadcrumb.name);

// useI18n.te(key) checks if a translation exists for the given key
const { t, te } = useI18n();
const displayName = computed(() => {
  // pageName may be a translation key like 'blog_listing' or a literal string like 'Tags'
  // if translation exists, return translated text; otherwise return the raw pageName
  const name = pageName.value;
  try {
    return te(name) ? t(name) : name;
  } catch (e) {
    // in case pageName is not a valid key string, fallback to raw value
    return name;
  }
});
  
</script>
