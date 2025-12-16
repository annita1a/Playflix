<template>
  <div class="widget text-center">
    <router-link :to="{name : 'landing-page.merchandise.shop'}"> <img class="img-fluid" :src="generateImgPath('/assets/images/blog/01.webp')" loading="lazy" alt="streamit" /> </router-link>
  </div>
</template>
<script setup>
import { generateImgPath } from '../../../StaticData/data';
</script>
