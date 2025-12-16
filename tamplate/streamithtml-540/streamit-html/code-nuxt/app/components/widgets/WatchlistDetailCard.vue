<template>
    <div class="common_card">
        <div class="image-box w-100">
            <nuxt-link :to="{ name: 'tv-shows-detail' }" class="d-block">
                <img decoding="async" :src="generateImgPath(`/assets/images/${cardImage}`)" alt="Game of Heros"
                    class="img-fluid">
            </nuxt-link>
        </div>
        <div class="css_prefix-detail-part">
            <h6 class="text-capitalize line-count-1 mb-0">
                <nuxt-link :to="{ name: 'tv-shows-detail' }" class="color-inherit">
                    {{ $t(movieName) }} </nuxt-link>
            </h6>
            <button class="btn in-watchlist btn-secondary watch-list-btn" data-bs-toggle="tooltip"
                :data-bs-title="$t('streamTooltip.remove_from_watchlist')" data-bs-placement="top" data-post-id="32"
                data-post-type="movie" data-action="remove" tabindex="0">
                <i class="icon-check-2"></i>
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { generateImgPath } from '~/StaticData/data';
import { Tooltip } from 'bootstrap';
defineProps({
    cardImage: { type: String, default: '' },
    movieName: { type: String, default: '' },
})

onMounted(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((el) => new Tooltip(el));
});
</script>
