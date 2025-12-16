<template>
    <div class="d-flex align-items-center gap-3 bg-gray-900 movie-history overflow-hidden">
        <div class="image flex-shrink-0">
            <nuxt-link :to="{ name: 'view-all' }">
                <img :src="generateImgPath(productImg)" alt="The First Of Us"
                    class="img-fluid object-fit-cover person-history-thumbnail">
            </nuxt-link>
        </div>
        <div class="content">
            <h5 class="mb-1 line-count-2">
                <nuxt-link :to="{ name: 'view-all' }" class="text-capitalize">
                    {{ productTitle }} </nuxt-link>
            </h5>
            <span>{{ productYear }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { generateImgPath } from '~/StaticData/data';
defineProps({
    productImg: { type: String, default: '' },
    productTitle: { type: String, default: '' },
    productYear: { type: String, default: '' },
});
</script>