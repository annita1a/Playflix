<template>
  <div class="wrapper">
    <div fluid class="mx-3">
      <b-row>
        <div class="coming-soon-background" :style="{ 'background-image': 'url(' + generateImgPath('/assets/images/login/login.webp') + ')' }">
          <b-col sm="12">
            <div class="st-coming">
              <div class="st-coming-inner rounded-3">
                <div class="iq-maintenance-message">
                  <h1 class="iq-maintenance-title text-white">Coming Soon</h1>
                  <p class="iq-maintenance-desc">We will be back with new and professional Ideas</p>
                </div>

                <ul ref="element" class="list-inline example mb-0 ps-0 countdown" data-date="May 30 2040 20:20:22">
                  <li>
                    <span class="days" data-days>0</span>
                    <p class="days_text">Days</p>
                  </li>
                  <li>
                    <span class="hours" data-hours>0</span>
                    <p class="hours_text">Hours</p>
                  </li>
                  <li>
                    <span class="minutes" data-minutes>0</span>
                    <p class="minutes_text">Minutes</p>
                  </li>
                  <li>
                    <span class="seconds" data-seconds>0</span>
                    <p class="seconds_text">Seconds</p>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCountdown } from '@/utilities/countdown';

const element = ref(null);
onMounted(() => useCountdown(element.value));

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
</script>
