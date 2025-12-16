<template>
    <div class="d-flex align-items-center gap-3 bg-gray-900 movie-history overflow-hidden">
    <div class="image flex-shrink-0">
        <router-link :to="{ name: 'landing-page.view-all' }">
            <img
                :src="generateImgPath(productImg)"
                alt="Movie Image" class="img-fluid object-fit-cover person-history-thumbnail">
        </router-link>
    </div>
    <div class="content">
        <h5 class="mb-1 line-count-2">
            <router-link :to="{ name: 'landing-page.view-all' }" class="text-capitalize">
                {{ productTitle }} </router-link>
        </h5>
        <span>{{ productYear }}</span>
    </div>
</div>
</template>
<script setup lang="ts">
import { generateImgPath } from '../../StaticData/data';
defineProps({
  productImg: { type: String, default: '' },
  productTitle: { type: String, default: '' },
  productYear: { type: String, default: '' },
});
</script>