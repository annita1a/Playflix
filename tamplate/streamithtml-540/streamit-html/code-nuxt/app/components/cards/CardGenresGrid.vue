<template>
  <div class="iq-cast position-relative">
    <div class="cast-images position-relative">
      <nuxt-link :to="{ name: 'cast-detail' }">
        <img :src="props.image" class="img-fluid" alt="castImg" loading="lazy" />
      </nuxt-link>
    </div>
    <div class="person-detail">
    <h6 class="cast-title fw-500">
      <nuxt-link :to="{ name: 'cast-detail' }">
        {{props.title}}
      </nuxt-link>
    </h6>
    <ul class="d-flex align-items-center justify-content-center gap-2 list-inline p-0 m-0">
      <li>
        <a href="#" class="person-cats d-block">
          {{props.castSubTitle}} </a>
      </li>
    </ul>
  </div>
  </div>
</template>
<script setup>
const props = defineProps({
  image: { type: String, default: '' },
  title: { type: String, default: '' },
  castSubTitle: { type: String, default: '' },
});
</script>
