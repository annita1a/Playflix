<template>
  <b-container fluid>
    <b-row>
      <b-card>
        <h4 class="fw-bold">{{$t('sidebar.ph-fill')}}</h4>
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
  { class: 'ph-fill ph-bell', name: 'icons.bell' },
  { class: 'ph-fill ph-phone', name: 'icons.phone' },
  { class: 'ph-fill ph-dog', name: 'icons.dog' },
  { class: 'ph-fill ph-fish', name: 'icons.fish' },
  { class: 'ph-fill ph-bug', name: 'icons.bug' },
  { class: 'ph-fill ph-caret-down', name: 'icons.caret-down' },
  { class: 'ph-fill ph-caret-left', name: 'icons.caret-left' },
  { class: 'ph-fill ph-caret-right', name: 'icons.caret-right' },
  { class: 'ph-fill ph-caret-up', name: 'icons.caret-up' },
  { class: 'ph-fill ph-caret-circle-double-left', name: 'icons.caret-circle-double-left' },
  { class: 'ph-fill ph-caret-circle-double-right', name: 'icons.caret-circle-double-right' },
  { class: 'ph-fill ph-download', name: 'icons.download' },
  { class: 'ph-fill ph-navigation-arrow', name: 'icons.location-arrow' },
  { class: 'ph-fill ph-share', name: 'icons.share' },
  { class: 'ph-fill ph-rewind', name: 'icons.rewind' },
  { class: 'ph-fill ph-play', name: 'icons.play' },
  { class: 'ph-fill ph-pause', name: 'icons.pause' },
  { class: 'ph-fill ph-arrows-clockwise', name: 'icons.arrows-clockwise' },
  { class: 'ph-fill ph-speaker-low', name: 'icons.speaker-low' },
  { class: 'ph-fill ph-speaker-simple-x', name: 'icons.speaker-simple-x' },
  { class: 'ph-fill ph-speaker-x', name: 'icons.speaker-x' },
  { class: 'ph-fill ph-speaker-high', name: 'icons.speaker-high' },
  { class: 'ph-fill ph-youtube-logo', name: 'icons.youtube-logo' },
  { class: 'ph-fill ph-car', name: 'icons.car' },
  { class: 'ph-fill ph-truck', name: 'icons.truck' },
  { class: 'ph-fill ph-tree', name: 'icons.tree' },
  { class: 'ph-fill ph-pinterest-logo', name: 'icons.pinterest-logo' },
  { class: 'ph-fill ph-file-js', name: 'icons.file-js' },
  { class: 'ph-fill ph-buildings', name: 'icons.buildings' },
  { class: 'ph-fill ph-note-pencil', name: 'icons.note-pencil' },
  { class: 'ph-fill ph-copy', name: 'icons.copy' },
  { class: 'ph-fill ph-scissors', name: 'icons.cut' },
  { class: 'ph-fill ph-pen', name: 'icons.pen' },
  { class: 'ph-fill ph-tag', name: 'icons.tag' },
  { class: 'ph-fill ph-sim-card', name: 'icons.sim-card' },
  { class: 'ph-fill ph-list-checks', name: 'icons.tasks' },
  { class: 'ph-fill ph-chat-centered-text', name: 'icons.comment' },
  { class: 'ph-fill ph-video', name: 'icons.video' },
  { class: 'ph-fill ph-smiley', name: 'icons.smile' },
];
</script>
