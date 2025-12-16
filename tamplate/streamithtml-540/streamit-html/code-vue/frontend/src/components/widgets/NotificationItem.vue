<template>
    <li class="notification-item">
        <div class="d-flex align-items-center justify-content-between gap-3">
            <div class="d-flex align-items-md-center flex-md-row flex-column gap-3">
                <div class="notification-image flex-shrink-0">
                    <router-link :to="{ path: '/tv-show-detail' }" class="link-overlay" data-user_id="12"
                        data-notification_id="1">
                        <img decoding="async" :src="notificationImage" alt="image"
                            class="img-fluid object-cover result-image">
                    </router-link>
                </div>
                <div class="notification-message">
                    <router-link :to="{ path: '/tv-show-detail' }" class="link-overlay message" data-user_id="12"
                        data-notification_id="1">
                        {{ typeof title === 'string' && title.includes('.') ? $t(title) : title }} </router-link>
                    <span class="d-block">
                        {{ days }} </span>
                </div>
            </div>
            <div class="notification-actions flex-shrink-0">
                <div class="d-flex justify-content-center align-items-center gap-3">
                    <button type="button" class="btn btn-secondary btn-circle border notification-action-btn"
                        data-user_id="12" data-notification_id="1" data-bs-toggle="tooltip" data-bs-placement="top"
                        :data-bs-title="$t('streamTooltip.mark_as_read')">
                        <i class="icon-eye-2"></i>
                    </button>
                </div>
            </div>
        </div>
    </li>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { Tooltip } from 'bootstrap';
defineProps({
    notificationImage: { type: String, default: '' },
    title: { type: String, default: '' },
    days: { type: String, default: '' },
})

onMounted(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((el) => new Tooltip(el));
});
</script>