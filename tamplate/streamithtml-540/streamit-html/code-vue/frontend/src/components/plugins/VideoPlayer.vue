<template>
    <video id="my-video" ref="videoPlayer" class="my-video video-js vjs-big-play-centered w-100"></video>
</template>

<script>
import videojs from 'video.js';
export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
    });
  },
  unmounted() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>
<style>
@import 'video.js/dist/video-js.min.css';
</style>
