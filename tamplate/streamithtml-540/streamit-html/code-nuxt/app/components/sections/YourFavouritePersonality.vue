<template>
  <!-- your favourite personality start -->
  <SectionSlider
    :title="$t(title)"
    :list="topTen"
    class-custom="favourite-person-block section-wraper"
    :slides-per-view="11"
    class="streamit-block favourite-person-block section-wraper"
    margin-padding="px-1 mb-2 pb-1 mb-md-4 pb-md-0"
  >
    <template #headerLink>
      <nuxt-link
        :to="{ name: 'cast' }"
        class="text-primary iq-view-all text-decoration-none flex-none"
        >{{ $t("sectionTitle.view_all") }}</nuxt-link
      >
    </template>
    <template #default="{ data }">
      <personality-card
        :category="$t(data.category)"
        :image="data.image"
        :title="$t(data.title)"
        :category-link="{ name: 'cast-detail' }"
        :link="{ name: 'cast-detail' }"
      ></personality-card>
    </template>
  </SectionSlider>
  <!-- your favourite personality end -->
</template>

<script setup>
import { ref } from "vue";
import SectionSlider from "../slider/SectionSlider.vue";
import PersonalityCard from "../cards/PersonalityCard.vue";
import { generateImgPath } from "../../StaticData/data";
const title = ref("sectionTitle.your_favourite_personality");
const topTen = ref([
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
    category: "persondesc.actress",
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
]);
</script>
