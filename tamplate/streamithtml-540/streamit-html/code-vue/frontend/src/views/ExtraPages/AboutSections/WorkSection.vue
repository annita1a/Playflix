<template>
  <div class="section-padding">
    <b-container>
      <h3 class="text-capitalize text-center">{{ $t('streamAbout.work_best') }}</h3>
      <div class="image-box-container">
        <div class="image-box-1">
          <img class="img-fluid" :src="generateImgPath('/assets/images/pages/about-us1.svg')" alt="content-image" />
        </div>

        <div class="image-box-1">
          <img class="img-fluid" :src="generateImgPath('/assets/images/pages/about-us2.svg')" alt="content-image" />
        </div>

        <div class="image-box-1">
          <img class="img-fluid" :src="generateImgPath('/assets/images/pages/about-us3.svg')" alt="content-image" />
        </div>

        <div class="image-box-1">
          <img class="img-fluid" :src="generateImgPath('/assets/images/pages/about-us4.svg')" alt="content-image" />
        </div>

        <div class="image-box-1">
          <img class="img-fluid" :src="generateImgPath('/assets/images/pages/about-us5.svg')" alt="content-image" />
        </div>
      </div>
    </b-container>
  </div>
</template>
<script setup>
import { generateImgPath } from '../../../StaticData/data';
</script>
