<template>
  <div class="favourite-person-block">
    <SectionSlider
      :title="title"
      :list="personality"
      class="streamit-block"
      :slides-per-view="slidePerView"
      :link="'/cast-view-all'"
      :slide-medium="4"
      :padding-y="paddingY"
      :speed="1500"
      :loop="loops"
      :view-all="viewAll"
      margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0"
    >
      <template #default="{ data }">
        <PersonalityCard
          :image="data.image"
          :category="$t(data.category)"
          :title="$t(data.title)"
          :category-link="'#'"
          :link="'/cast-detail'"
        />
      </template>
    </SectionSlider>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { generateImgPath } from "../../StaticData/data"; 

const props = defineProps({
  data: { type: Array, default: () => [] },
  title: { type: String, default: "sectionTitle.your_favourite_personality" },
  slidePerView: { type: Number, default: 11 },
  paddingY: { type: String, default: "" },
  viewAll: { type: Boolean, default: false },
  loop: { type: Boolean, default: true },
});

import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const title = computed(() => t(props.title));

const personality = ref(
  props.data.length
    ? props.data
    : [
        {
          image: generateImgPath("/assets/images/cast/olivia-foster.webp"),
          title: "favouritePersonalities.olivia_foster",
          category: "persondesc.actress",
        },
        {
          image: generateImgPath("/assets/images/cast/leena-burton.webp"),
          title: "favouritePersonalities.Leena_Burton",
          category: "persondesc.actress",
        },
        {
          image: generateImgPath("/assets/images/cast/ryan-pierce.webp"),
          title: "favouritePersonalities.Ryan_Pierce",
          category: "persondesc.actor",
        },
        {
          image: generateImgPath("/assets/images/cast/michael-fox.webp"),
          title: "favouritePersonalities.michael_fox",
          category: "persondesc.producer",
        },
        {
          image: generateImgPath("/assets/images/cast/ruby-scott.webp"),
          title: "favouritePersonalities.ruby_scott",
          category: "persondesc.director",
        },
        {
          image: generateImgPath("/assets/images/cast/maxwell-carter.webp"),
          title: "favouritePersonalities.maxwell_carter",
          category: "persondesc.actor",
        },
        {
          image: generateImgPath("/assets/images/cast/mark-smith.webp"),
          title: "favouritePersonalities.mark_smith",
          category: "persondesc.producer",
        },
        {
          image: generateImgPath("/assets/images/cast/ava-monroe.webp"),
          title: "favouritePersonalities.ava_monroe",
          category: "persondesc.producer",
        },
        {
          image: generateImgPath("/assets/images/cast/jack-nicholson.webp"),
          title: "favouritePersonalities.jack_nicholson",
          category: "persondesc.actor",
        },
        {
          image: generateImgPath("/assets/images/cast/charles-melton.webp"),
          title: "favouritePersonalities.charles_melton",
          category: "persondesc.actor",
        },
        {
          image: generateImgPath("/assets/images/cast/jeff-bridges.webp"),
          title: "favouritePersonalities.jeff_bridges",
          category: "persondesc.actor",
        },
        {
          image: generateImgPath("/assets/images/cast/james-stewart.webp"),
          title: "favouritePersonalities.james_stewart",
          category: "persondesc.actor",
        },
        {
          image: generateImgPath("/assets/images/cast/jordan-grant.webp"),
          title: "favouritePersonalities.jordan_grant",
          category: "persondesc.actor",
        },
      ]
);

const loops = computed(() => (props.loop !== undefined ? props.loop : true));
</script>