<template>
  <div class="section-padding">
    <b-container>
      <h3 class="text-capitalize text-center">{{ $t('streamAbout.work_best') }}</h3>
      <div class="image-box-container">
        <div class="image-box-1" v-for="(data, index) of aboutList" :key="index" >
          <img class="img-fluid" :src="data.image" alt="content-image" />
        </div>
      </div>
    </b-container>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { generateImgPath } from '../../../StaticData/data';
const aboutList = reactive([
  { image: generateImgPath('/assets/images/pages/about-us1.svg')},
  { image: generateImgPath('/assets/images/pages/about-us2.svg')},
  { image: generateImgPath('/assets/images/pages/about-us3.svg')},
  { image: generateImgPath('/assets/images/pages/about-us4.svg')},
  { image: generateImgPath('/assets/images/pages/about-us5.svg')},
]);
</script>
