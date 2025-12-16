<template>
  <b-container fluid>
    <b-row>
      <b-card>
        <h4 class="fw-bold">{{$t('sidebar.ph-bold')}}</h4>
        <div class="border-bottom mt-3"></div>

        <b-row class="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          <b-col v-for="(icon, index) in icons" :key="index">
            <IconComponent :class-name="icon.class" :name="$t(icon.name)" />
          </b-col>
        </b-row>
      </b-card>
    </b-row>
  </b-container>
</template>

<script setup>
import IconComponent from '@/components/partials/IconComponent.vue';

const icons = [
  { class: 'ph-bold ph-bell', name: 'icons.bell' },
  { class: 'ph-bold ph-phone', name: 'icons.phone' },
  { class: 'ph-bold ph-dog', name: 'icons.dog' },
  { class: 'ph-bold ph-fish', name: 'icons.fish' },
  { class: 'ph-bold ph-bug', name: 'icons.bug' },
  { class: 'ph-bold ph-caret-down', name: 'icons.caret-down' },
  { class: 'ph-bold ph-caret-left', name: 'icons.caret-left' },
  { class: 'ph-bold ph-caret-right', name: 'icons.caret-right' },
  { class: 'ph-bold ph-caret-up', name: 'icons.caret-up' },
  { class: 'ph-bold ph-caret-circle-double-left', name: 'icons.caret-circle-double-left' },
  { class: 'ph-bold ph-caret-circle-double-right', name: 'icons.caret-circle-double-right' },
  { class: 'ph-bold ph-download', name: 'icons.download' },
  { class: 'ph-bold ph-navigation-arrow', name: 'icons.location-arrow' },
  { class: 'ph-bold ph-share', name: 'icons.share' },
  { class: 'ph-bold ph-rewind', name: 'icons.rewind' },
  { class: 'ph-bold ph-play', name: 'icons.play' },
  { class: 'ph-bold ph-pause', name: 'icons.pause' },
  { class: 'ph-bold ph-arrows-clockwise', name: 'icons.arrows-clockwise' },
  { class: 'ph-bold ph-speaker-low', name: 'icons.speaker-low' },
  { class: 'ph-bold ph-speaker-simple-x', name: 'icons.speaker-simple-x' },
  { class: 'ph-bold ph-speaker-x', name: 'icons.speaker-x' },
  { class: 'ph-bold ph-speaker-high', name: 'icons.speaker-high' },
  { class: 'ph-bold ph-youtube-logo', name: 'icons.youtube-logo' },
  { class: 'ph-bold ph-car', name: 'icons.car' },
  { class: 'ph-bold ph-truck', name: 'icons.truck' },
  { class: 'ph-bold ph-tree', name: 'icons.tree' },
  { class: 'ph-bold ph-pinterest-logo', name: 'icons.pinterest-logo' },
  { class: 'ph-bold ph-file-js', name: 'icons.file-js' },
  { class: 'ph-bold ph-buildings', name: 'icons.buildings' },
  { class: 'ph-bold ph-note-pencil', name: 'icons.note-pencil' },
  { class: 'ph-bold ph-copy', name: 'icons.copy' },
  { class: 'ph-bold ph-scissors', name: 'icons.cut' },
  { class: 'ph-bold ph-pen', name: 'icons.pen' },
  { class: 'ph-bold ph-tag', name: 'icons.tag' },
  { class: 'ph-bold ph-sim-card', name: 'icons.sim-card' },
  { class: 'ph-bold ph-list-checks', name: 'icons.tasks' },
  { class: 'ph-bold ph-chat-centered-text', name: 'icons.comment' },
  { class: 'ph-bold ph-video', name: 'icons.video' },
  { class: 'ph-bold ph-smiley', name: 'icons.smile' },
];
</script>
