<template>
  <div>
    <!-- Back Button -->
    <div class="back-btn">
      <RouterLink
        class="btn btn-link text-white text-decoration-none p-0"
        to="/video-detail"
      >
        <i class="ph ph-x"></i>
      </RouterLink>
    </div>

    <!-- Video Player -->
    <div class="video-container">
      <video
        id="my-video"
        class="video-js vjs-big-play-centered"
        controls
        preload="auto"
        width="960"
        height="540"
        poster="/assets/images/player/player-poster.webp"
        data-setup="{}"
      >
        <source src="/assets/images/player/demo_videos.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoviePlayer'
};
</script>