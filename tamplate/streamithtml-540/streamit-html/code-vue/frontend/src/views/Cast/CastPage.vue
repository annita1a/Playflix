<template>
  <section class="section-padding">
    <b-container fluid>
      <b-row class="data-listing row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-5">
        <b-col v-for="data in castList" :key="data">
          <card-cast-grid :title="$t(data.name)" :cast-sub-title="$t(data.role)" :image="data.image"></card-cast-grid>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup>
import CardCastGrid from '../../components/cards/CardCastGrid.vue';
import { castList } from '../../StaticData/data';
</script>
