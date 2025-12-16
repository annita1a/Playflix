<template>
    <b-container fluid>
      <b-row>
          <b-card>
              <h4 class="fw-bold">{{$t('sidebar.ph-regular')}}</h4>
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
    { class: 'ph ph-bell', name: 'icons.bell' },
    { class: 'ph ph-phone', name: 'icons.phone' },
    { class: 'ph ph-dog', name: 'icons.dog' },
    { class: 'ph ph-fish', name: 'icons.fish' },
    { class: 'ph ph-bug', name: 'icons.bug' },
    { class: 'ph ph-caret-down', name: 'icons.caret-down' },
    { class: 'ph ph-caret-left', name: 'icons.caret-left' },
    { class: 'ph ph-caret-right', name: 'icons.caret-right' },
    { class: 'ph ph-caret-up', name: 'icons.caret-up' },
    { class: 'ph ph-caret-circle-double-left', name: 'icons.caret-circle-double-left' },
    { class: 'ph ph-caret-circle-double-right', name: 'icons.caret-circle-double-right' },
    { class: 'ph ph-download', name: 'icons.download' },
    { class: 'ph ph-navigation-arrow', name: 'icons.location-arrow' },
    { class: 'ph ph-share', name: 'icons.share' },
    { class: 'ph ph-rewind', name: 'icons.rewind' },
    { class: 'ph ph-play', name: 'icons.play' },
    { class: 'ph ph-pause', name: 'icons.pause' },
    { class: 'ph ph-arrows-clockwise', name: 'icons.arrows-clockwise' },
    { class: 'ph ph-speaker-low', name: 'icons.speaker-low' },
    { class: 'ph ph-speaker-simple-x', name: 'icons.speaker-simple-x' },
    { class: 'ph ph-speaker-x', name: 'icons.speaker-x' },
    { class: 'ph ph-speaker-high', name: 'icons.speaker-high' },
    { class: 'ph ph-youtube-logo', name: 'icons.youtube-logo' },
    { class: 'ph ph-car', name: 'icons.car' },
    { class: 'ph ph-truck', name: 'icons.truck' },
    { class: 'ph ph-tree', name: 'icons.tree' },
    { class: 'ph ph-pinterest-logo', name: 'icons.pinterest-logo' },
    { class: 'ph ph-file-js', name: 'icons.file-js' },
    { class: 'ph ph-buildings', name: 'icons.buildings' },
    { class: 'ph ph-note-pencil', name: 'icons.note-pencil' },
    { class: 'ph ph-copy', name: 'icons.copy' },
    { class: 'ph ph-scissors', name: 'icons.cut' },
    { class: 'ph ph-pen', name: 'icons.pen' },
    { class: 'ph ph-tag', name: 'icons.tag' },
    { class: 'ph ph-sim-card', name: 'icons.sim-card' },
    { class: 'ph ph-list-checks', name: 'icons.tasks' },
    { class: 'ph ph-chat-centered-text', name: 'icons.comment' },
    { class: 'ph ph-video', name: 'icons.video' },
    { class: 'ph ph-smiley', name: 'icons.smile' },
  ];
  </script>
  