<template>
  <section class="section-padding">
    <b-container fluid>
      <b-row>
        <b-col sm="12" class="my-4">
          <div class="d-flex align-items-center justify-content-between">
            <h5 class="main-title text-capitalize mb-0">favourite-personality</h5>
          </div>
        </b-col>
      </b-row>
      <b-row class="row-cols-xl-5 row-cols-md-2 row-cols-1 personality-card">
        <b-col v-for="data in castList.slice(0, 12)" :key="data" class="mb-4">
          <cast-card :title="$t(data.title)" :designation="$t(data.designation)" :image="data.profile_image"></cast-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup>
import CastCard from '../../components/cards/CastCard.vue';
import { castList } from '../../StaticData/data';
</script>
