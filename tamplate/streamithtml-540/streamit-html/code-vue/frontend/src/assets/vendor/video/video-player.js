var player = videojs('videoPlayer', {
  autoplay: muted,
  controls: true,
  poster: '/assets/images/player/player-poster.webp',
  loop: true,
  plugins: {
    hotkeys: {
      enableModifiersForNumbers: false,
    },
  },
});
