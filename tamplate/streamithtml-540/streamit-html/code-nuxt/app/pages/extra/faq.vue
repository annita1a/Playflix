<template>
  <div class="section-padding">
    <b-container>
      <b-row>
        <b-col cols="12">
          <div class="iq-accordian iq-accordian-square">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              :class="['iq-accordian-block', { 'iq-active': index === activeIndex }, index + 1]"
            >
              <div
                class="iq-accordian-title text-capitalize d-flex justify-content-between align-items-center"
                :class="{ 'd-flex justify-content-between align-items-center': index === 0 }"
                @click="toggle(index)"
              >
                <div class="iq-icon-right">
                  <i v-show="activeIndex === index" aria-hidden="true" class="ph ph-minus active"></i>
                  <i v-show="activeIndex !== index" aria-hidden="true" class="ph ph-plus inactive"></i>
                </div>
                <span class="mb-0 accordian-title" :class="{ 'text-capitalize': true }">{{ $t(faq.question) }}</span>
              </div>
              <div
                class="iq-accordian-details"
                :style="{ display: activeIndex === index ? 'block' : 'none' }"
              >
                <p class="mb-0">{{ $t(faq.answer) }}</p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("FAQ");

const activeIndex = ref(0);

const faqs = [
  {
    question: 'streamFaq.what_is_streamit',
    answer:
      'streamFaq.desc',
  },
  {
    question: 'streamFaq.will_account',
    answer:
      'streamFaq.desc',
  },
  {
    question: 'streamFaq.video_issue',
    answer:
      'streamFaq.desc',
  },
  {
    question: 'streamFaq.manage_notification',
    answer:
      'streamFaq.desc',
  },
  {
    question: 'streamFaq.what_benefits',
    answer:
      'streamFaq.desc',
  },
];

function toggle(index) {
  activeIndex.value = activeIndex.value === index ? -1 : index;
}
</script>
