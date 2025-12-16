<template>
  <section class="section-padding">
    <b-container fluid>
      <b-row class="data-listing personality-card gy-5 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-5">
        <b-col v-for="data in cast" :key="data">
          <card-cast-grid :title="$t(data.name)" :castSubTitle="$t(data.role)" :cast-image="data.image"
            :image="data.image"></card-cast-grid>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup>
//components
import CardCastGrid from "../../components/cards/CardCastGrid.vue";

//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

const generateImgPath = (path) => {
  return window.location.origin + path;
};

const cast = [
   {
    name: "favouritePersonalities.ava_monroe",
    role: "persondesc.actress",
    image: generateImgPath("/assets/images/cast/ava-monroe.webp")
  },
  {
    name: "favouritePersonalities.charles_melton",
    role: "persondesc.actor",
    image: generateImgPath("/assets/images/cast/charles-melton.webp")
  },
  {
    name: "favouritePersonalities.jack_nicholson",
    role: "persondesc.actor",
    image: generateImgPath("/assets/images/cast/jack-nicholson.webp")
  },
  {
    name: "favouritePersonalities.james_stewart",
    role: "persondesc.actor",
    image: generateImgPath("/assets/images/cast/james-stewart.webp")
  },
  {
    name: "favouritePersonalities.jeff_bridges",
    role: "persondesc.actress",
    image: generateImgPath("/assets/images/cast/jeff-bridges.webp")
  },
  {
    name: "favouritePersonalities.jordan_grant",
    role: "persondesc.actress",
    image: generateImgPath("/assets/images/cast/jordan-grant.webp")
  },
  {
    name: "favouritePersonalities.mark_smith",
    role: "persondesc.producer",
    image: generateImgPath("/assets/images/cast/mark-smith.webp")
  },
  {
    name: "favouritePersonalities.maxwell_carter",
    role: "persondesc.actress",
    image: generateImgPath("/assets/images/cast/maxwell-carter.webp")
  },
  {
    name: "favouritePersonalities.ruby_scott",
    role: "persondesc.director",
    image: generateImgPath("/assets/images/cast/ruby-scott.webp")
  },
  {
    name: "favouritePersonalities.michael_fox",
    role: "persondesc.producer",
    image: generateImgPath("/assets/images/cast/michael-fox.webp")
  },
  {
    name: "favouritePersonalities.Ryan_Pierce",
    role: "persondesc.actor",
    image: generateImgPath("/assets/images/cast/ryan-pierce.webp")
  },
  {
    name: "favouritePersonalities.john_abraham",
    role: "persondesc.actor",
    image: generateImgPath("/assets/images/cast/john-abraham.webp")
  },
  {
    name: "favouritePersonalities.Leena_Burton",
    role: "persondesc.actress",
    image: generateImgPath("/assets/images/cast/leena-burton.webp")
  },
  {
    name: "favouritePersonalities.davina_decorous",
    role: "persondesc.producer",
    image: generateImgPath("/assets/images/cast/davina-decorous.webp")
  },
  {
    name: "favouritePersonalities.thomas_bailey",
    role: "persondesc.producer",
    image: generateImgPath("/assets/images/cast/thomas-bailey.webp")
  },
  {
    name: "favouritePersonalities.kelly_reilly",
    role: "persondesc.director",
    image: generateImgPath("/assets/images/cast/kelly-reilly.webp")
  },
  {
    name: "favouritePersonalities.mark_smith",
    role: "persondesc.producer",
    image: generateImgPath("/assets/images/cast/mark-smith.webp")
  },
  {
    name: "favouritePersonalities.millar_joseph",
    role: "persondesc.producer",
    image: generateImgPath("/assets/images/cast/millar-joseph.webp")
  },
  {
    name: "favouritePersonalities.mark_wilson",
    role: "persondesc.director",
    image: generateImgPath("/assets/images/cast/mark-wilson.webp")
  },
  {
    name: "favouritePersonalities.jack_walker",
    role: "persondesc.director",
    image: generateImgPath("/assets/images/cast/jack-walker.webp")
  },
  {
    name: "favouritePersonalities.benjamin_hayes",
    role: "persondesc.director",
    image: generateImgPath("/assets/images/cast/benjamin-hayes.webp")
  },
  {
    name: "favouritePersonalities.olivia_foster",
    role: "persondesc.actress",
    image: generateImgPath("/assets/images/cast/olivia-foster.webp")
  },
  {
    name: "favouritePersonalities.ethan_crawford",
    role: "persondesc.producer",
    image: generateImgPath("/assets/images/cast/ethan-crawford.webp")
  },
  {
    name: "favouritePersonalities.maria_rodriguez",
    role: "persondesc.director",
    image: generateImgPath("/assets/images/cast/maria-rodriguez.webp")
  },
]

useBreadcrumb("Casts");
</script>
