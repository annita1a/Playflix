<template>
  <b-container>
    <b-row class="align-items-center">
      <b-col lg="2"></b-col>
      <b-col lg="8" md="12">
        <div class="title-box text-center">
          <h3 class="">{{ $t('streamAbout.mastermind_team') }}</h3>
          <p class="mb-0">{{ $t('streamAbout.streamit_build') }}</p>
        </div>
      </b-col>
      <b-col lg="3"></b-col>
    </b-row>
    <b-row class="about-us-detail gy-4">
      <b-col  v-for="(data, index) of lists" :key="index" md="3">
        <ProfileCard :name="$t(data.name)" :designation="$t(data.designation)" :image="data.image"></ProfileCard>
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup>
import { reactive } from 'vue';
import ProfileCard from '../../../components/cards/ProfileCard.vue';
import { generateImgPath } from '../../../StaticData/data';
const lists = reactive([
  { image: generateImgPath('/assets/images/pages/team1.webp'), designation: 'streamAbout.ceo', name: 'streamAbout.tonny_smith' },
  { image: generateImgPath('/assets/images/pages/team2.webp'), designation: 'streamAbout.designer', name: 'streamAbout.barry_tech' },
  { image: generateImgPath('/assets/images/pages/team3.webp'), designation: 'streamAbout.developer', name: 'streamAbout.kep_john' },
  { image: generateImgPath('/assets/images/pages/team4.webp'), designation: 'streamAbout.designer', name: 'streamAbout.monty_rock' },
]);
</script>
