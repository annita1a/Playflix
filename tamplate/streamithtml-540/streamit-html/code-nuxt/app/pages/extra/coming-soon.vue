<template>
  <div class="mx-3">
    <b-row>
      <b-col sm="12" class="p-0">
        <div
          class="coming-soon-background"
          :style="`background-image: url(${generateImgPath('/assets/images/pages/01.webp')})`"
        >
          <div class="st-coming">
            <div class="st-coming-inner rounded-3">
              <div class="iq-maintenance-message">
                <h1 class="iq-maintenance-title">{{$t('streamPages.coming_soon')}}</h1>
                <p class="iq-maintenance-desc">
                  {{$t('streamError.professional_ideas')}}
                </p>
              </div>
              <div class="expire_date"></div>
              <ul
                ref="element"
                class="list-inline example mb-0 ps-0 countdown"
                countdown
                data-date="Dec 30 2025 20:20:22"
              >
                <li>
                  <span class="days" data-days>13</span>
                  <p class="days_text">{{$t('streamCountdown.days')}}</p>
                </li>
                <li>
                  <span class="hours" data-hours>02</span>
                  <p class="hours_text">{{$t('streamCountdown.hours')}}</p>
                </li>
                <li>
                  <span class="minutes" data-minutes>18</span>
                  <p class="minutes_text">{{$t('streamCountdown.minutes')}}</p>
                </li>
                <li>
                  <span class="seconds" data-seconds>53</span>
                  <p class="seconds_text">{{$t('streamCountdown.seconds')}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { generateImgPath } from '../../StaticData/data';
import { useCountdown } from '../../composables/countdown.js';

const element = ref(null);

onMounted(() => {
  useCountdown(element.value);
});

definePageMeta({
  layout: "blank",
});
</script>